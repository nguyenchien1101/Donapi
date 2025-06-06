'use strict';

var LOCALE_ARRAY_FIELDS = require('../var/LOCALE_ARRAY_FIELDS'),
    ISODefaults = require('../var/ISODefaults'),
    CoreParsingTokens = require('../var/CoreParsingTokens'),
    CoreParsingFormats = require('../var/CoreParsingFormats'),
    LocalizedParsingTokens = require('../var/LocalizedParsingTokens'),
    map = require('../../common/internal/map'),
    filter = require('../../common/internal/filter'),
    forEach = require('../../common/internal/forEach'),
    isDefined = require('../../common/internal/isDefined'),
    commaSplit = require('../../common/internal/commaSplit'),
    classChecks = require('../../common/var/classChecks'),
    mathAliases = require('../../common/var/mathAliases'),
    isUndefined = require('../../common/internal/isUndefined'),
    simpleMerge = require('../../common/internal/simpleMerge'),
    getOrdinalSuffix = require('../../common/internal/getOrdinalSuffix'),
    getArrayWithOffset = require('./getArrayWithOffset'),
    getRegNonCapturing = require('./getRegNonCapturing'),
    coreUtilityAliases = require('../../common/var/coreUtilityAliases'),
    iterateOverDateUnits = require('./iterateOverDateUnits'),
    arrayToRegAlternates = require('./arrayToRegAlternates'),
    fullwidthNumberHelpers = require('../../common/var/fullwidthNumberHelpers'),
    getAdjustedUnitForNumber = require('./getAdjustedUnitForNumber'),
    getParsingTokenWithSuffix = require('./getParsingTokenWithSuffix');

var hasOwn = coreUtilityAliases.hasOwn,
    getOwn = coreUtilityAliases.getOwn,
    forEachProperty = coreUtilityAliases.forEachProperty,
    fullWidthNumberMap = fullwidthNumberHelpers.fullWidthNumberMap,
    fullWidthNumbers = fullwidthNumberHelpers.fullWidthNumbers,
    pow = mathAliases.pow,
    max = mathAliases.max,
    ISO_FIRST_DAY_OF_WEEK = ISODefaults.ISO_FIRST_DAY_OF_WEEK,
    ISO_FIRST_DAY_OF_WEEK_YEAR = ISODefaults.ISO_FIRST_DAY_OF_WEEK_YEAR,
    isString = classChecks.isString,
    isFunction = classChecks.isFunction;

function getNewLocale(def) {

  function Locale(def) {
    this.init(def);
  }

  Locale.prototype = {

    getMonthName: function(n, alternate) {
      if (this.monthSuffix) {
        return (n + 1) + this.monthSuffix;
      }
      return getArrayWithOffset(this.months, n, alternate, 12);
    },

    getWeekdayName: function(n, alternate) {
      return getArrayWithOffset(this.weekdays, n, alternate, 7);
    },

    // TODO: rename to parse in next major version
    parseValue: function(str, param) {
      var map = this[param + 'Map'];
      if (hasOwn(map, str)) {
        return map[str];
      }
      return this.parseNumber(str, param);
    },

    // TODO: analyze performance of parsing first vs checking
    // numeralMap first.
    parseNumber: function(str, param) {
      var val;

      // Simple numerals such as "one" are mapped directly in
      // the numeral map so catch up front if there is a match.
      if (hasOwn(this.numeralMap, str)) {
        val = this.numeralMap[str];
      }

      // TODO: perf test isNaN vs other methods
      if (isNaN(val)) {
        val = this.parseRegularNumerals(str);
      }

      if (isNaN(val)) {
        val = this.parseIrregularNumerals(str);
      }

      if (param === 'month') {
        // Months are the only numeric date field
        // whose value is not the same as its number.
        val -= 1;
      }

      return val;
    },

    // TODO: perf test returning up front if no regular decimals exist
    parseRegularNumerals: function(str) {
      // Allow decimals as commas and the minus-sign as per ISO-8601.
      str = str.replace(/^−/, '-').replace(/,/, '.');

      // The unary plus operator here shows better performance and handles
      // every format that parseFloat does with the exception of trailing
      // characters, which are guaranteed not to be in our string at this point.
      return +str;
    },

    parseIrregularNumerals: function(str) {
      var place = 1, num = 0, lastWasPlace, isPlace, numeral, digit, arr;

      // Note that "numerals" that need to be converted through this method are
      // all considered to be single characters in order to handle CJK. This
      // method is by no means unique to CJK, but the complexity of handling
      // inflections in non-CJK languages adds too much overhead for not enough
      // value, so avoiding for now.
      arr = str.split('');
      for (var i = arr.length - 1; numeral = arr[i]; i--) {
        digit = getOwn(this.numeralMap, numeral);
        if (isUndefined(digit)) {
          digit = getOwn(fullWidthNumberMap, numeral) || 0;
        }
        isPlace = digit > 0 && digit % 10 === 0;
        if (isPlace) {
          if (lastWasPlace) {
            num += place;
          }
          if (i) {
            place = digit;
          } else {
            num += digit;
          }
        } else {
          num += digit * place;
          place *= 10;
        }
        lastWasPlace = isPlace;
      }
      return num;
    },

    getOrdinal: function(n) {
      var suffix = this.ordinalSuffix;
      return suffix || getOrdinalSuffix(n);
    },

    getRelativeFormat: function(adu, type) {
      return this.convertAdjustedToFormat(adu, type);
    },

    getDuration: function(ms) {
      return this.convertAdjustedToFormat(getAdjustedUnitForNumber(max(0, ms)), 'duration');
    },

    getFirstDayOfWeek: function() {
      var val = this.firstDayOfWeek;
      return isDefined(val) ? val : ISO_FIRST_DAY_OF_WEEK;
    },

    getFirstDayOfWeekYear: function() {
      return this.firstDayOfWeekYear || ISO_FIRST_DAY_OF_WEEK_YEAR;
    },

    convertAdjustedToFormat: function(adu, type) {
      var sign, unit, mult,
          num    = adu[0],
          u      = adu[1],
          ms     = adu[2],
          format = this[type] || this.relative;
      if (isFunction(format)) {
        return format.call(this, num, u, ms, type);
      }
      mult = !this.plural || num === 1 ? 0 : 1;
      unit = this.units[mult * 8 + u] || this.units[u];
      sign = this[ms > 0 ? 'fromNow' : 'ago'];
      return format.replace(/\{(.*?)\}/g, function(full, match) {
        switch(match) {
          case 'num': return num;
          case 'unit': return unit;
          case 'sign': return sign;
        }
      });
    },

    cacheFormat: function(dif, i) {
      this.compiledFormats.splice(i, 1);
      this.compiledFormats.unshift(dif);
    },

    addFormat: function(format) {
      var loc = this, src, to;

      function getTokenSrc(token) {
        var suffix, src, tmp,
            opt   = token.match(/\?$/),
            nc    = token.match(/^(\d+)\??$/),
            slice = token.match(/(\d)(?:-(\d))?/),
            param = token.replace(/[^a-z]+$/i, '');

        // Allowing alias tokens such as {time}
        if (tmp = getOwn(loc.parsingAliases, param)) {
          src = formatToSrc(tmp);
          if (opt) {
            src = getRegNonCapturing(src, true);
          }
          return src;
        }

        if (nc) {
          src = loc.tokens[nc[1]];
        } else if (tmp = getOwn(CoreParsingTokens, param)) {
          src = tmp.src;
          param = tmp.param || param;
        } else {
          tmp = getOwn(loc.parsingTokens, param) || getOwn(loc, param);

          // Both the "months" array and the "month" parsing token can be accessed
          // by either {month} or {months}, falling back as necessary, however
          // regardless of whether or not a fallback occurs, the final field to
          // be passed to addRawFormat must be normalized as singular.
          param = param.replace(/s$/, '');

          if (!tmp) {
            tmp = getOwn(loc.parsingTokens, param) || getOwn(loc, param + 's');
          }

          if (isString(tmp)) {
            src = tmp;
            suffix = loc[param + 'Suffix'];
          } else {

            // This is a hack to temporarily disallow parsing of single character
            // weekdays until the format can be changed to allow for this.
            if (param === 'weekday' && loc.code === 'ko') {
              tmp = filter(tmp, function(str) {
                return str.length > 1;
              });
            }

            if (slice) {
              tmp = filter(tmp, function(m, i) {
                var mod = i % (loc.units ? 8 : tmp.length);
                return mod >= slice[1] && mod <= (slice[2] || slice[1]);
              });
            }
            src = arrayToRegAlternates(tmp);
          }
        }
        if (!src) {
          return '';
        }
        if (nc) {
          // Non-capturing tokens like {0}
          src = getRegNonCapturing(src);
        } else {
          // Capturing group and add to parsed tokens
          to.push(param);
          src = '(' + src + ')';
        }
        if (suffix) {
          // Date/time suffixes such as those in CJK
          src = getParsingTokenWithSuffix(param, src, suffix);
        }
        if (opt) {
          src += '?';
        }
        return src;
      }

      function formatToSrc(str) {

        // Make spaces optional
        str = str.replace(/ /g, ' ?');

        str = str.replace(/\{([^,]+?)\}/g, function(match, token) {
          var tokens = token.split('|');
          if (tokens.length > 1) {
            return getRegNonCapturing(map(tokens, getTokenSrc).join('|'));
          } else {
            return getTokenSrc(token);
          }
        });

        return str;
      }

      function parseInputFormat() {
        to = [];
        src = formatToSrc(format);
      }

      parseInputFormat();
      loc.addRawFormat(src, to);
    },

    addRawFormat: function(format, to) {
      this.compiledFormats.unshift({
        reg: RegExp('^ *' + format + ' *$', 'i'),
        to: to
      });
    },

    init: function(def) {
      var loc = this;

      // -- Initialization helpers

      function initFormats() {
        loc.compiledFormats = [];
        loc.parsingAliases = {};
        loc.parsingTokens = {};
      }

      function initDefinition() {
        simpleMerge(loc, def);
      }

      function initArrayFields() {
        forEach(LOCALE_ARRAY_FIELDS, function(name) {
          var val = loc[name];
          if (isString(val)) {
            loc[name] = commaSplit(val);
          } else if (!val) {
            loc[name] = [];
          }
        });
      }

      // -- Value array build helpers

      function buildValueArray(name, mod, map, fn) {
        var field = name, all = [], setMap;
        if (!loc[field]) {
          field += 's';
        }
        if (!map) {
          map = {};
          setMap = true;
        }
        forAllAlternates(field, function(alt, j, i) {
          var idx = j * mod + i, val;
          val = fn ? fn(i) : i;
          map[alt] = val;
          map[alt.toLowerCase()] = val;
          all[idx] = alt;
        });
        loc[field] = all;
        if (setMap) {
          loc[name + 'Map'] = map;
        }
      }

      function forAllAlternates(field, fn) {
        forEach(loc[field], function(str, i) {
          forEachAlternate(str, function(alt, j) {
            fn(alt, j, i);
          });
        });
      }

      function forEachAlternate(str, fn) {
        var arr = map(str.split('+'), function(split) {
          return split.replace(/(.+):(.+)$/, function(full, base, suffixes) {
            return map(suffixes.split('|'), function(suffix) {
              return base + suffix;
            }).join('|');
          });
        }).join('|');
        forEach(arr.split('|'), fn);
      }

      function buildNumerals() {
        var map = {};
        buildValueArray('numeral', 10, map);
        buildValueArray('article', 1, map, function() {
          return 1;
        });
        buildValueArray('placeholder', 4, map, function(n) {
          return pow(10, n + 1);
        });
        loc.numeralMap = map;
      }

      function buildTimeFormats() {
        loc.parsingAliases['time'] = getTimeFormat();
        loc.parsingAliases['tzOffset'] = getTZOffsetFormat();
      }

      function getTimeFormat(standalone) {
        var src, sep;
        sep = getTimeSeparatorSrc(standalone);
        if (loc.ampmFront) {
          // "ampmFront" exists mostly for CJK locales, which also presume that
          // time suffixes exist, allowing this to be a simpler regex.
          src = '{ampm?} {hour} (?:{minute} (?::?{second})?)?';
        } else if(loc.ampm.length) {
          src = '{hour}(?:'+sep+'{minute?}(?:'+sep+'{second?})? {ampm?}| {ampm})';
        } else {
          src = '{hour}(?:'+sep+'{minute?}(?:'+sep+'{second?})?)';
        }
        return src;
      }

      function getTimeSeparatorSrc() {
        if (loc.timeSeparator) {
          return '[:' + loc.timeSeparator + ']';
        } else {
          return ':';
        }
      }

      function getTZOffsetFormat() {
        return '(?:{Z}|{GMT?}(?:{tzHour}(?::?{tzMinute}(?: \\([\\w\\s]+\\))?)?)?)?';
      }

      function buildParsingTokens() {
        forEachProperty(LocalizedParsingTokens, function(token, name) {
          var src = token.base ? getCoreTokensForBase(token.base) : token.src, arr;
          if (token.requiresNumerals || loc.numeralUnits) {
            src += getNumeralSrc();
          }
          arr = loc[name + 's'];
          if (arr && arr.length) {
            src += '|' + arrayToRegAlternates(arr);
          }
          loc.parsingTokens[name] = src;
        });
      }

      function getCoreTokensForBase(base) {
        return map(base.split('|'), function(key) {
          return CoreParsingTokens[key].src;
        }).join('|');
      }

      function getNumeralSrc() {
        var all, src = '';
        all = loc.numerals.concat(loc.placeholders).concat(loc.articles);
        if (loc.allowsFullWidth) {
          all = all.concat(fullWidthNumbers.split(''));
        }
        if (all.length) {
          src = '|(?:' + arrayToRegAlternates(all) + ')+';
        }
        return src;
      }

      function buildTimeSuffixes() {
        iterateOverDateUnits(function(unit, i) {
          var token = loc.timeSuffixes[i];
          if (token) {
            loc[(unit.alias || unit.name) + 'Suffix'] = token;
          }
        });
      }

      function buildModifiers() {
        forEach(loc.modifiers, function(modifier) {
          var name = modifier.name, mapKey = name + 'Map', map;
          map = loc[mapKey] || {};
          forEachAlternate(modifier.src, function(alt, j) {
            var token = getOwn(loc.parsingTokens, name), val = modifier.value;
            map[alt] = val;
            loc.parsingTokens[name] = token ? token + '|' + alt : alt;
            if (modifier.name === 'sign' && j === 0) {
              // Hooking in here to set the first "fromNow" or "ago" modifier
              // directly on the locale, so that it can be reused in the
              // relative format.
              loc[val === 1 ? 'fromNow' : 'ago'] = alt;
            }
          });
          loc[mapKey] = map;
        });
      }

      // -- Format adding helpers

      function addCoreFormats() {
        forEach(CoreParsingFormats, function(df) {
          var src = df.src;
          if (df.localeCheck && !df.localeCheck(loc)) {
            return;
          }
          if (df.mdy && loc.mdy) {
            // Use the mm/dd/yyyy variant if it
            // exists and the locale requires it
            src = df.mdy;
          }
          if (df.time) {
            // Core formats that allow time require the time
            // reg on both sides, so add both versions here.
            loc.addFormat(getFormatWithTime(src, true));
            loc.addFormat(getFormatWithTime(src));
          } else {
            loc.addFormat(src);
          }
        });
        loc.addFormat('{time}');
      }

      function addLocaleFormats() {
        addFormatSet('parse');
        addFormatSet('timeParse', true);
        addFormatSet('timeFrontParse', true, true);
      }

      function addFormatSet(field, allowTime, timeFront) {
        forEach(loc[field], function(format) {
          if (allowTime) {
            format = getFormatWithTime(format, timeFront);
          }
          loc.addFormat(format);
        });
      }

      function getFormatWithTime(baseFormat, timeBefore) {
        if (timeBefore) {
          return getTimeBefore() + baseFormat;
        }
        return baseFormat + getTimeAfter();
      }

      function getTimeBefore() {
        return getRegNonCapturing('{time}[,\\s\\u3000]', true);
      }

      function getTimeAfter() {
        var markers = ',?[\\s\\u3000]', localized;
        localized = arrayToRegAlternates(loc.timeMarkers);
        if (localized) {
          markers += '| (?:' + localized + ') ';
        }
        markers = getRegNonCapturing(markers, loc.timeMarkerOptional);
        return getRegNonCapturing(markers + '{time}{tzOffset}', true);
      }

      initFormats();
      initDefinition();
      initArrayFields();

      buildValueArray('month', 12);
      buildValueArray('weekday', 7);
      buildValueArray('unit', 8);
      buildValueArray('ampm', 2);

      buildNumerals();
      buildTimeFormats();
      buildParsingTokens();
      buildTimeSuffixes();
      buildModifiers();

      // The order of these formats is important. Order is reversed so formats
      // that are initialized later will take precedence. Generally, this means
      // that more specific formats should come later.
      addCoreFormats();
      addLocaleFormats();

    }

  };

  return new Locale(def);
}

module.exports = getNewLocale;