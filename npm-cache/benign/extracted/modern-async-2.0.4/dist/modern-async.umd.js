(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.modernAsync = {}));
})(this, (function (exports) { 'use strict';

  /**
   * Wraps an iterable or async iterable into an iterable that is guaranted to be async.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @yields {any} The elements returned by the original iterable.
   * @example
   * import { asyncIterableWrap } from 'modern-async'
   *
   * // example sync generator
   * function* syncGenerator() {
   *   for (let i = 0; i < 3; i += 1) {
   *     yield i
   *   }
   * }
   *
   * const asyncIterable = asyncIterableWrap(syncGenerator())
   *
   * for await (const el of asyncIterable) {
   *   console.log(el)
   * }
   * // will print:
   * // 0
   * // 1
   * // 2
   */
  async function * asyncIterableWrap (iterable) {
    for await (const el of iterable) {
      yield el;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var nanoassert = assert;

  class AssertionError extends Error {}
  AssertionError.prototype.name = 'AssertionError';

  /**
   * Minimal assert function
   * @param  {any} t Value to check if falsy
   * @param  {string=} m Optional assertion error message
   * @throws {AssertionError}
   */
  function assert (t, m) {
    if (!t) {
      var err = new AssertionError(m);
      if (Error.captureStackTrace) Error.captureStackTrace(err, assert);
      throw err
    }
  }

  /**
   * Wraps a function call that may be synchronous in a function that
   * is guaranted to be async. This is a stricter version of calling a
   * function and wrapping its result using `Promise.resolve()` as the new function also
   * handles the case where the original function throws an exception.
   *
   * @param {Function} fct The function to wrap.
   * @returns {Function} The wrapped function.
   * @example
   * import { asyncWrap } from 'modern-async'
   *
   * const myFunction = () => {
   *   // any kind of function that may or may not return a promise
   * }
   *
   * const asyncFct = asyncWrap(myFunction)
   *
   * const promise = asyncFct()
   * console.log(promise instanceof Promise) // prints true
   */
  function asyncWrap (fct) {
    nanoassert(typeof fct === 'function', 'fct must be a function');
    return async function () {
      return fct(...arguments)
    }
  }

  /**
   * Immediately calls an asynchronous function and redirects to an error handler if it throws an exception.
   * The error handler is optional, the default one just outputs the error in the console.
   *
   * This function is trivial but useful when you can't use top-level await for compatibility reasons.
   *
   * @param {Function} fct An asynchronous function to call.
   * @param {Function} [errorHandler] A facultative error handler. This function will receive a single argument:
   * the thrown exception. The default behavior is to output the exception in the console.
   * @example
   * import { asyncRoot } from 'modern-async'
   *
   * asyncRoot(async () => {
   *   // any code using await
   * }, (e) => {
   *   console.error("An error occured", e)
   *   process.exit(-1)
   * })
   */
  async function asyncRoot (fct, errorHandler = null) {
    errorHandler = errorHandler || ((e) => {
      console.error(e);
    });
    const asyncFct = asyncWrap(fct);
    try {
      await asyncFct();
    } catch (e) {
      errorHandler(e);
    }
  }

  /**
   * An error type which is used when a promise is cancelled.
   */
  class CancelledError extends Error {
    /**
     * Constructs a new instance.
     *
     * @param {string} message The error message
     */
    constructor (message) {
      super(message);
      this.name = this.constructor.name;
    }
  }

  /**
   * A basic class to create a promise with its resolve and reject function in the same object.
   *
   * Instances of this class are never returned by any function of this library but it is used
   * internally and can be useful to code other asynchronous helpers.
   *
   * @example
   * import { Deferred, asyncSleep } from 'modern-async'
   *
   * const deferred = new Deferred()
   *
   * asyncSleep(10).then(() => {
   *   deferred.resolve('test')
   * })
   *
   * console.log(await deferred.promise) // will wait 10ms before printing 'test'
   */
  class Deferred {
    /**
     * Constructs a deferred object.
     */
    constructor () {
      this._promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    }

    /**
     * (Read-only) The promise.
     *
     * @member {Promise}
     * @returns {Promise} ignored
     */
    get promise () {
      return this._promise
    }

    /**
     * (Read-only) The resolve function.
     *
     * @member {Function}
     * @returns {Function} The resolve function
     */
    get resolve () {
      return this._resolve
    }

    /**
     * (Read-only) The reject function
     *
     * @member {Function}
     * @returns {Function} The reject function
     */
    get reject () {
      return this._reject
    }
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$o =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var FunctionPrototype$1 = Function.prototype;
  var apply$2 = FunctionPrototype$1.apply;
  var bind$5 = FunctionPrototype$1.bind;
  var call$5 = FunctionPrototype$1.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$5 ? call$5.bind(apply$2) : function () {
    return call$5.apply(apply$2, arguments);
  });

  var FunctionPrototype = Function.prototype;
  var bind$4 = FunctionPrototype.bind;
  var call$4 = FunctionPrototype.call;
  var callBind = bind$4 && bind$4.bind(call$4);

  var functionUncurryThis = bind$4 ? function (fn) {
    return fn && callBind(call$4, fn);
  } : function (fn) {
    return fn && function () {
      return call$4.apply(fn, arguments);
    };
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$8 = function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$6 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$5 = fails$6;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$5(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var call$3 = Function.prototype.call;

  var functionCall = call$3.bind ? call$3.bind(call$3) : function () {
    return call$3.apply(call$3, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var createPropertyDescriptor$2 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var uncurryThis$7 = functionUncurryThis;

  var toString$1 = uncurryThis$7({}.toString);
  var stringSlice = uncurryThis$7(''.slice);

  var classofRaw = function (it) {
    return stringSlice(toString$1(it), 8, -1);
  };

  var global$n = global$o;
  var uncurryThis$6 = functionUncurryThis;
  var fails$4 = fails$6;
  var classof$1 = classofRaw;

  var Object$3 = global$n.Object;
  var split = uncurryThis$6(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$4(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$1(it) == 'String' ? split(it, '') : Object$3(it);
  } : Object$3;

  var global$m = global$o;

  var TypeError$6 = global$m.TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$2 = function (it) {
    if (it == undefined) throw TypeError$6("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = indexedObject;
  var requireObjectCoercible$1 = requireObjectCoercible$2;

  var toIndexedObject$1 = function (it) {
    return IndexedObject(requireObjectCoercible$1(it));
  };

  var isCallable$7 = isCallable$8;

  var isObject$4 = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$7(it);
  };

  var path$5 = {};

  var path$4 = path$5;
  var global$l = global$o;
  var isCallable$6 = isCallable$8;

  var aFunction = function (variable) {
    return isCallable$6(variable) ? variable : undefined;
  };

  var getBuiltIn$3 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$4[namespace]) || aFunction(global$l[namespace])
      : path$4[namespace] && path$4[namespace][method] || global$l[namespace] && global$l[namespace][method];
  };

  var uncurryThis$5 = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$5({}.isPrototypeOf);

  var getBuiltIn$2 = getBuiltIn$3;

  var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

  var global$k = global$o;
  var userAgent$3 = engineUserAgent;

  var process$3 = global$k.process;
  var Deno = global$k.Deno;
  var versions = process$3 && process$3.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$3) {
    match = userAgent$3.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$3.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$3 = fails$6;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$3(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$j = global$o;
  var getBuiltIn$1 = getBuiltIn$3;
  var isCallable$5 = isCallable$8;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Object$2 = global$j.Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$1('Symbol');
    return isCallable$5($Symbol) && isPrototypeOf($Symbol.prototype, Object$2(it));
  };

  var global$i = global$o;

  var String$3 = global$i.String;

  var tryToString$1 = function (argument) {
    try {
      return String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var global$h = global$o;
  var isCallable$4 = isCallable$8;
  var tryToString = tryToString$1;

  var TypeError$5 = global$h.TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$2 = function (argument) {
    if (isCallable$4(argument)) return argument;
    throw TypeError$5(tryToString(argument) + ' is not a function');
  };

  var aCallable$1 = aCallable$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$1(func);
  };

  var global$g = global$o;
  var call$2 = functionCall;
  var isCallable$3 = isCallable$8;
  var isObject$3 = isObject$4;

  var TypeError$4 = global$g.TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$3(fn = input.toString) && !isObject$3(val = call$2(fn, input))) return val;
    if (isCallable$3(fn = input.valueOf) && !isObject$3(val = call$2(fn, input))) return val;
    if (pref !== 'string' && isCallable$3(fn = input.toString) && !isObject$3(val = call$2(fn, input))) return val;
    throw TypeError$4("Can't convert object to primitive value");
  };

  var shared$1 = {exports: {}};

  var global$f = global$o;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;

  var setGlobal$1 = function (key, value) {
    try {
      defineProperty(global$f, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$f[key] = value;
    } return value;
  };

  var global$e = global$o;
  var setGlobal = setGlobal$1;

  var SHARED = '__core-js_shared__';
  var store$1 = global$e[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store$1;

  var store = sharedStore;

  (shared$1.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.19.1',
    mode: 'pure' ,
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var global$d = global$o;
  var requireObjectCoercible = requireObjectCoercible$2;

  var Object$1 = global$d.Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return Object$1(requireObjectCoercible(argument));
  };

  var uncurryThis$4 = functionUncurryThis;
  var toObject = toObject$1;

  var hasOwnProperty = uncurryThis$4({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var uncurryThis$3 = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis$3(1.0.toString);

  var uid$1 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var global$c = global$o;
  var shared = shared$1.exports;
  var hasOwn$3 = hasOwnProperty_1;
  var uid = uid$1;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global$c.Symbol;
  var symbolFor = Symbol$1 && Symbol$1['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol$1 = function (name) {
    if (!hasOwn$3(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL && hasOwn$3(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    } return WellKnownSymbolsStore[name];
  };

  var global$b = global$o;
  var call$1 = functionCall;
  var isObject$2 = isObject$4;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol = wellKnownSymbol$1;

  var TypeError$3 = global$b.TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$2(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$1(exoticToPrim, input, pref);
      if (!isObject$2(result) || isSymbol$1(result)) return result;
      throw TypeError$3("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var global$a = global$o;
  var isObject$1 = isObject$4;

  var document$1 = global$a.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$1(document$1) && isObject$1(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$3 = descriptors;
  var fails$2 = fails$6;
  var createElement$1 = documentCreateElement;

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$3 && !fails$2(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$2 = descriptors;
  var call = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$2;
  var toIndexedObject = toIndexedObject$1;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$2 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$2(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var fails$1 = fails$6;
  var isCallable$2 = isCallable$8;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$2(detection) ? fails$1(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var uncurryThis$2 = functionUncurryThis;
  var aCallable = aCallable$2;

  var bind$3 = uncurryThis$2(uncurryThis$2.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : bind$3 ? bind$3(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var global$9 = global$o;
  var isObject = isObject$4;

  var String$2 = global$9.String;
  var TypeError$2 = global$9.TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$1 = function (argument) {
    if (isObject(argument)) return argument;
    throw TypeError$2(String$2(argument) + ' is not an object');
  };

  var global$8 = global$o;
  var DESCRIPTORS$1 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject = anObject$1;
  var toPropertyKey = toPropertyKey$2;

  var TypeError$1 = global$8.TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$1 ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$1('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS = descriptors;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$2;

  var createNonEnumerableProperty$1 = DESCRIPTORS ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$7 = global$o;
  var apply$1 = functionApply;
  var uncurryThis$1 = functionUncurryThis;
  var isCallable$1 = isCallable$8;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var isForced = isForced_1;
  var path$3 = path$5;
  var bind$2 = functionBindContext;
  var createNonEnumerableProperty = createNonEnumerableProperty$1;
  var hasOwn$1 = hasOwnProperty_1;

  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof Wrapper) {
        switch (arguments.length) {
          case 0: return new NativeConstructor();
          case 1: return new NativeConstructor(a);
          case 2: return new NativeConstructor(a, b);
        } return new NativeConstructor(a, b, c);
      } return apply$1(NativeConstructor, this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
  };

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;

    var nativeSource = GLOBAL ? global$7 : STATIC ? global$7[TARGET] : (global$7[TARGET] || {}).prototype;

    var target = GLOBAL ? path$3 : path$3[TARGET] || createNonEnumerableProperty(path$3, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn$1(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

      // bind timers to global for call from export context
      if (options.bind && USE_NATIVE) resultProperty = bind$2(sourceProperty, global$7);
      // wrap global constructors for prevent changs in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable$1(sourceProperty)) resultProperty = uncurryThis$1(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn$1(path$3, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty(path$3, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty(path$3[VIRTUAL_PROTOTYPE], key, sourceProperty);
        // export real prototype methods
        if (options.real && targetPrototype && !targetPrototype[key]) {
          createNonEnumerableProperty(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var getBuiltIn = getBuiltIn$3;

  var html$1 = getBuiltIn('document', 'documentElement');

  var uncurryThis = functionUncurryThis;

  var arraySlice$1 = uncurryThis([].slice);

  var userAgent$2 = engineUserAgent;

  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var classof = classofRaw;
  var global$6 = global$o;

  var engineIsNode = classof(global$6.process) == 'process';

  var global$5 = global$o;
  var apply = functionApply;
  var bind$1 = functionBindContext;
  var isCallable = isCallable$8;
  var hasOwn = hasOwnProperty_1;
  var fails = fails$6;
  var html = html$1;
  var arraySlice = arraySlice$1;
  var createElement = documentCreateElement;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$2 = engineIsNode;

  var set = global$5.setImmediate;
  var clear = global$5.clearImmediate;
  var process$2 = global$5.process;
  var Dispatch = global$5.Dispatch;
  var Function$1 = global$5.Function;
  var MessageChannel = global$5.MessageChannel;
  var String$1 = global$5.String;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$5.location;
  } catch (error) { /* empty */ }

  var run = function (id) {
    if (hasOwn(queue, id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var listener = function (event) {
    run(event.data);
  };

  var post = function (id) {
    // old engines have not location.origin
    global$5.postMessage(String$1(id), location.protocol + '//' + location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(fn) {
      var args = arraySlice(arguments, 1);
      queue[++counter] = function () {
        apply(isCallable(fn) ? fn : Function$1(fn), undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE$2) {
      defer = function (id) {
        process$2.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$1(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$5.addEventListener &&
      isCallable(global$5.postMessage) &&
      !global$5.importScripts &&
      location && location.protocol !== 'file:' &&
      !fails(post)
    ) {
      defer = post;
      global$5.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set,
    clear: clear
  };

  var $$1 = _export;
  var global$4 = global$o;
  var task = task$1;

  var FORCED = !global$4.setImmediate || !global$4.clearImmediate;

  // http://w3c.github.io/setImmediate/
  $$1({ global: true, bind: true, enumerable: true, forced: FORCED }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
  });

  var path$2 = path$5;

  var setImmediate$1 = path$2.setImmediate;

  var parent$3 = setImmediate$1;

  var setImmediate = parent$3;

  var path$1 = path$5;

  var clearImmediate$1 = path$1.clearImmediate;

  var parent$2 = clearImmediate$1;

  var clearImmediate = parent$2;

  /**
   * A function returning a promise that will be resolved in a later tick of the event loop.
   *
   * This function returns both a promise and cancel function in order to cancel the wait time if
   * necessary. If cancelled, the promise will be rejected with a CancelledError.
   *
   * This function uses core-js' shim for `setImmediate()` internally.
   *
   * @returns {Array} A tuple of two objects:
   *   * The promise
   *   * The cancel function. It will return a boolean that will be true if the promise was effectively cancelled,
   *     false otherwise.
   * @example
   * import { asyncDelayCancellable, CancelledError } from 'modern-async'
   *
   * const [promise, cancel] = asyncDelayCancellable()
   * cancel()
   * try {
   *   await promise
   * } catch (e) {
   *   console.log(e instanceof CancelledError) // prints true
   * }
   */
  function asyncDelayCancellable () {
    const deferred = new Deferred();
    const id = setImmediate(deferred.resolve);
    let terminated = false;
    return [deferred.promise.finally(() => {
      terminated = true;
    }), () => {
      if (terminated) {
        return false
      } else {
        terminated = true;
        deferred.reject(new CancelledError());
        clearImmediate(id);
        return true
      }
    }]
  }

  /**
   * A function returning a promise that will be resolved in a later task of the event loop.
   *
   * This function uses core-js' shim for `setImmediate()` internally.
   *
   * @returns {Promise<void>} A promise that will be resolved on a later tick of the event loop.
   * @example
   * import { asyncDelay } from 'modern-async'
   *
   * console.log('this executes in a tick of the event loop')
   * await asyncDelay()
   * console.log('this executes in another tick of the event loop')
   */
  async function asyncDelay () {
    return asyncDelayCancellable()[0]
  }

  /**
   * A class used to spread time or cpu intensive operations on multiple tasks in the event loop in order
   * to avoid blocking other tasks that may need to be executed.
   *
   * It is configured with a trigger time, which represents the maximum amount of time your tasks should
   * monopolize the event loop. Choosing an appropriate trigger time is both important and hard. If too low
   * it will impact the performances of your long running algorithm. If too high it will impact the other
   * tasks that need to run in the event loop.
   *
   * When using Delayer your code should contain frequent calls to `await delayer.checkDelay()`, usually
   * at the end of every loop. `checkDelay()` will check the amount of time that ellasped since the last time
   * it triggered a new task in the event loop. If the amount of time is below the trigger time it returns
   * an already resolved promise and the remaining computation will be able to continue processing in a
   * microtask. If not it will call the `asyncDelay()` function that will retrigger the operation in a later task
   * of the event loop.
   *
   * @example
   * import { Delayer } from 'modern-async'
   *
   * const delayer = new Delayer(10) // a delayer with 10ms trigger time
   *
   * // some cpu intensive operation that will run for a long time
   * for (let i = 0; i < 100000000; i += 1) {
   *   // some code
   *   await delayer.checkDelay()
   * }
   */
  class Delayer {
    /**
     * Constructs a new `Delayer` by specifying its trigger time.
     *
     * @param {number} triggerTime The trigger time.
     */
    constructor (triggerTime) {
      this.triggerTime = triggerTime;
      this.reset();
    }

    /**
     * The trigger time of this `Delayer` in milliseconds. The trigger time represent the
     * maximum amount of time before a call to `checkDelay()` decide to schedule a new task in the event loop.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get triggerTime () {
      return this._triggerTime
    }

    /**
     * @ignore
     * @param {number} triggerTime ignore
     */
    set triggerTime (triggerTime) {
      nanoassert(typeof triggerTime === 'number', 'trigger time must be a number');
      this._triggerTime = triggerTime;
    }

    /**
     * Resets the internal timer to the current time.
     */
    reset () {
      this._last = new Date().getTime();
    }

    /**
     * Checks if a delay must be applied according to the internal timer. If that's the case this method
     * will call `asyncDelay()` and return `true`. If not it will do nothing and return `false`.
     *
     * @returns {boolean} `true` if a new task was scheduled in the event loop, `false` otherwise.
     */
    async checkDelay () {
      const current = new Date().getTime();
      if (current - this._last >= this.triggerTime) {
        await asyncDelay();
        this.reset();
        return true
      } else {
        return false
      }
    }
  }

  var userAgent$1 = engineUserAgent;
  var global$3 = global$o;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$3.Pebble !== undefined;

  var userAgent = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$2 = global$o;
  var bind = functionBindContext;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$1 = engineIsNode;

  var MutationObserver = global$2.MutationObserver || global$2.WebKitMutationObserver;
  var document = global$2.document;
  var process$1 = global$2.process;
  var Promise$1 = global$2.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$2, 'queueMicrotask');
  var queueMicrotask$4 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

  var flush, head, last, notify, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!queueMicrotask$4) {
    flush = function () {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head) notify();
          else last = undefined;
          throw error;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document) {
      toggle = true;
      node = document.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind(promise.then, promise);
      notify = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$1) {
      notify = function () {
        process$1.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      // strange IE + webpack dev server bug - use .bind(global)
      macrotask = bind(macrotask, global$2);
      notify = function () {
        macrotask(flush);
      };
    }
  }

  var microtask$1 = queueMicrotask$4 || function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };

  var $ = _export;
  var global$1 = global$o;
  var microtask = microtask$1;
  var IS_NODE = engineIsNode;

  var process = global$1.process;

  // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
  $({ global: true, enumerable: true, noTargetGet: true }, {
    queueMicrotask: function queueMicrotask(fn) {
      var domain = IS_NODE && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

  var path = path$5;

  var queueMicrotask$3 = path.queueMicrotask;

  var parent$1 = queueMicrotask$3;

  var queueMicrotask$2 = parent$1;

  var parent = queueMicrotask$2;

  var queueMicrotask$1 = parent;

  /**
   * An alternative to standard `queueMicrotask()` function.
   *
   * This is just of mirror of core-js' implementation for compatibility.
   *
   * @param {Function} fct The function to call in a microtask.
   * @example
   * import { queueMicrotask } from 'modern-async'
   *
   * queueMicrotask(() => {
   *   console.log('this resolves in a micro task')
   * })
   */
  function queueMicrotask (fct) {
    queueMicrotask$1(fct);
  }

  /**
   * A class representing a queue.
   *
   * Tasks added to the queue are processed in parallel (up to the concurrency limit).
   * If all slots of the queue are occupied, the task is queued until one becomes available.
   * When a slot is freed, the pending task with higher priority is executed. If multiple pending tasks have the same
   * priority the first that was scheduled is executed.
   *
   * Once a task is completed, its corresponding promise is terminated accordingly.
   *
   * @example
   * import { Queue, asyncSleep } from 'modern-async'
   *
   * const queue = new Queue(3) // create a queue with concurrency 3
   *
   * const array = Array.from(Array(100).keys()) // an array of 100 numbers from 0 to 99
   *
   * const promises = []
   * for (const i of array) {
   *   promises.push(queue.exec(async () => {
   *     console.log(`Starting task ${i}`)
   *     await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *     console.log(`Ending task ${i}`)
   *     return i;
   *   }))
   * }
   * const results = await Promise.all(promises)
   * // all the scheduled tasks will perform with a maximum concurrency of 3 and log when they start and stop
   *
   * console.log(results) // will display an array with the result of the execution of each separate task
   */
  class Queue {
    /**
     * Constructs a queue with the given concurrency
     *
     * @param {number} concurrency The concurrency of the queue, must be an integer greater than 0 or
     * `Number.POSITIVE_INFINITY`.
     */
    constructor (concurrency) {
      nanoassert(Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY,
        'concurrency must be an integer or positive infinity');
      nanoassert(concurrency > 0, 'concurrency must be greater than 0');
      this._concurrency = concurrency;
      this._iqueue = [];
      this._running = 0;
      this._checkQueueScheduled = false;
    }

    /**
     * (Read-only) The concurrency of the queue.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get concurrency () {
      return this._concurrency
    }

    /**
     * (Read-only) The current number of tasks that are processing.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get running () {
      return this._running
    }

    /**
     * (Read-only) The number of pending tasks.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get pending () {
      return this._iqueue.length - this.running
    }

    /**
     * Puts a task at the end of the queue. When the task is executed and completes the returned promise will be terminated
     * accordingly.
     *
     * @param {Function} fct An asynchronous functions representing the task. It will be executed when the queue has
     * available slots and its result will be propagated to the promise returned by exec().
     * @param {number} [priority] The priority of the task. The higher the priority is, the sooner the task will be
     * executed regarding the priority of other pending tasks. Defaults to 0.
     * @returns {Promise} A promise that will be resolved or rejected once the task has completed. Its state will be the same
     * than the promise returned by the call to `fct`.
     */
    async exec (fct, priority = 0) {
      return this.execCancellable(fct, priority)[0]
    }

    /**
     * Puts a task at the end of the queue. When the task is executed and completes the returned promise will be terminated
     * accordingly.
     *
     * This function returns both a promise and a cancel function. The cancel function allows to cancel the pending task,
     * but only if it wasn't started yet. Calling the cancel function on a task that it already running has no effect.
     * When a task is cancelled its corresponding promise will be rejected with a `CancelledError`.
     *
     * @param {Function} fct An asynchronous functions representing the task. It will be executed when the queue has
     * available slots and its result will be propagated to the promise returned by exec().
     * @param {number} [priority] The priority of the task. The higher the priority is, the sooner the task will be
     * executed regarding the priority of other pending tasks. Defaults to 0.
     * @returns {Array} A tuple with two parameters:
     *   * `promise`: A promise that will be resolved or rejected once the task has completed. Its state will be the same
     *     than the promise returned by the call to `fct`.
     *   * `cancel`: A cancel function. When called it will cancel the task if it is still pending. It has no effect is the
     *     task has already started or already terminated. When a task is cancelled its corresponding promise will be
     *     rejected with a `CancelledError`. If will return `true` if the task was effectively pending and was cancelled,
     *     `false` in any other case.
     */
    execCancellable (fct, priority = 0) {
      nanoassert(typeof fct === 'function', 'fct must be a function');
      nanoassert(typeof priority === 'number', 'priority must be a number');
      const deferred = new Deferred();
      let i = this._iqueue.length;
      while (i >= 1) {
        const t = this._iqueue[i - 1];
        if (t.priority >= priority) {
          break
        }
        i -= 1;
      }
      const task = {
        asyncFct: asyncWrap(fct),
        deferred,
        priority,
        state: 'pending'
      };
      this._iqueue.splice(i, 0, task);
      this._scheduleCheckQueue();
      return [deferred.promise, () => {
        if (task.state !== 'pending') {
          return false
        } else {
          const filtered = this._iqueue.filter((v) => v !== task);
          nanoassert(filtered.length < this._iqueue.length);
          this._iqueue = filtered;
          task.state = 'cancelled';
          deferred.reject(new CancelledError());
          return true
        }
      }]
    }

    /**
     * @ignore
     */
    _scheduleCheckQueue () {
      if (this._checkQueueScheduled) {
        return
      }
      this._checkQueueScheduled = true;
      queueMicrotask(() => {
        this._checkQueueScheduled = false;
        this._checkQueue();
      });
    }

    /**
     * @ignore
     */
    _checkQueue () {
      while (true) {
        nanoassert(this.running >= 0, 'invalid state');
        nanoassert(this.running <= this.concurrency, 'invalid state');
        if (this.running === this.concurrency) {
          return
        }
        const task = this._iqueue.find((v) => v.state === 'pending');
        if (task === undefined) {
          return
        }
        this._running += 1;
        task.state = 'running';
        queueMicrotask(() => {
          task.asyncFct().finally(() => {
            this._running -= 1;
            this._iqueue = this._iqueue.filter((v) => v !== task);
          }).then(task.deferred.resolve, task.deferred.reject).then(() => {
            this._scheduleCheckQueue();
          });
        });
      }
    }

    /**
     * Cancels all pending tasks. Their corresponding promises will be rejected with a `CancelledError`. This method will
     * not alter tasks that are already running.
     *
     * @returns {number} The number of pending tasks that were effectively cancelled.
     */
    cancelAllPending () {
      const toCancel = this._iqueue.filter((task) => task.state === 'pending');
      this._iqueue = this._iqueue.filter((task) => task.state !== 'pending');
      toCancel.forEach((task) => {
        task.deferred.reject(new CancelledError());
      });
      return toCancel.length
    }
  }

  /**
   * @ignore
   * @param {*} queueOrConcurrency ignore
   * @returns {*} ignore
   */
  function getQueue (queueOrConcurrency) {
    if (typeof queueOrConcurrency === 'number') {
      return new Queue(queueOrConcurrency)
    } else {
      return queueOrConcurrency
    }
  }

  /**
   * Immediately calls an asynchronous function and wraps its result into a promise that
   * can only be resolved, not rejected, regardless of the state of the promised returned
   * by the function.
   *
   * The returned promise will contain an object with the following fields:
   *
   * * `status`: A string, either "fulfilled" or "rejected", indicating the state of the
   *   original promise.
   * * `value`: Only present if status is "fulfilled". The value that the promise was
   *   fulfilled with.
   * * `reason`: Only present if status is "rejected". The reason that the promise was
   *   rejected with.
   *
   * This object structure is similar to the one used by the [`Promise.allSettled()`
   * function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).
   *
   * This function can be useful to make use of other functions in a fault-tolerant way.
   *
   * @param {Function} fct An asynchronous function
   * @returns {Promise<any>} A promise that will always be resolved with an object containing
   * a snapshot of the original promise state.
   * @example
   * import { reflectAsyncStatus, asyncMap, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncMap(array, (v) => reflectAsyncStatus(async () => {
   *   await asyncSleep(10) // waits 10ms
   *   if (v % 2 === 0) { // throws error on some values
   *     throw Error("error")
   *   }
   *   return v
   * }))
   *
   * console.log(result)
   * // prints:
   * // [
   * //   { status: 'fulfilled', value: 1 },
   * //   { status: 'rejected', reason: Error: error },
   * //   { status: 'fulfilled', value: 3 }
   * // ]
   */
  async function reflectAsyncStatus (fct) {
    try {
      const res = await fct();
      return {
        status: 'fulfilled',
        value: res
      }
    } catch (e) {
      return {
        status: 'rejected',
        reason: e
      }
    }
  }

  /**
   * @ignore
   * @param {*} iterable ignore
   * @param {*} iteratee ignore
   * @param {*} queueOrConcurrency ignore
   * @param {*} ordered ignore
   * @returns {*} ignore
   */
  async function asyncFindInternal (iterable, iteratee, queueOrConcurrency, ordered) {
    nanoassert(typeof iteratee === 'function', 'iteratee must be a function');
    iteratee = asyncWrap(iteratee);
    const it = asyncIterableWrap(iterable);
    const queue = getQueue(queueOrConcurrency);

    /**
     * @ignore
     */
    class CustomCancelledError extends Error {}

    let lastIndexFetched = -1;
    let fetching = false;
    let hasFetchedValue = false;
    let fetchedValue = null;
    let exhausted = false;
    let shouldStop = false;

    let lastIndexHandled = -1;
    const results = [];

    let waitListIndex = 0;
    const waitList = new Map();
    const addToWaitList = (fct) => {
      const identifier = waitListIndex;
      waitListIndex += 1;
      const p = (async () => {
        return [identifier, await reflectAsyncStatus(fct)]
      })();
      nanoassert(!waitList.has(identifier), 'waitList already contains identifier');
      waitList.set(identifier, p);
    };
    const raceWaitList = async () => {
      nanoassert(waitList.size >= 1, 'Can not race on empty list');
      const [identifier] = await Promise.race([...waitList.values()]);
      const removed = waitList.delete(identifier);
      nanoassert(removed, 'waitList does not contain identifier');
    };

    let scheduledCount = 0;
    const scheduledList = new Map();
    const schedule = (index, value) => {
      scheduledCount += 1;
      const task = {
        value,
        index,
        cancel: null,
        state: null
      };
      scheduledList.set(index, task);
      addToWaitList(async () => {
        const p = queue.exec(async () => {
          if (task.state === 'cancelled') {
            throw new CustomCancelledError()
          }
          nanoassert(task.state === 'scheduled', 'invalid task state');
          const removed = scheduledList.delete(index);
          nanoassert(removed, 'Couldn\'t find index in scheduledList for removal');

          const snapshot = await reflectAsyncStatus(() => iteratee(value, index, iterable));

          scheduledCount -= 1;
          insertInResults(index, value, snapshot);
          if (snapshot.status === 'rejected' || (snapshot.status === 'fulfilled' && snapshot.value)) {
            shouldStop = true;
            cancelAllScheduled(ordered ? index : 0);
          }
        });
        nanoassert(task.cancel === null, 'task already has cancel');
        task.cancel = () => {
          nanoassert(task.state === 'scheduled', 'task should be scheduled');
          task.state = 'cancelled';
        };
        nanoassert(task.state === null, 'task should have no state');
        task.state = 'scheduled';
        return p
      });
    };
    const cancelAllScheduled = (fromIndex) => {
      for (const index of [...scheduledList.keys()].filter((el) => el >= fromIndex)) {
        const task = scheduledList.get(index);
        nanoassert(task.cancel, 'task does not have cancel');
        task.cancel();
        const removed = scheduledList.delete(index);
        nanoassert(removed, 'Couldn\'t find index in scheduledList for removal');
      }
    };
    const fetch = () => {
      fetching = true;
      addToWaitList(async () => {
        const snapshot = await reflectAsyncStatus(() => it.next());
        fetching = false;
        if (snapshot.status === 'fulfilled') {
          const { value, done } = snapshot.value;
          if (!done) {
            lastIndexFetched += 1;
            nanoassert(fetchedValue === null, 'fetchedValue should be null');
            fetchedValue = value;
            nanoassert(!hasFetchedValue, 'hasFetchedValue should be false');
            hasFetchedValue = true;
          } else {
            exhausted = true;
          }
        } else {
          exhausted = true;
          lastIndexFetched += 1;
          const index = lastIndexFetched;
          insertInResults(index, undefined, snapshot);
          cancelAllScheduled(ordered ? index : 0);
        }
      });
    };

    const insertInResults = (index, value, snapshot) => {
      if (ordered) {
        nanoassert(index - lastIndexHandled - 1 >= 0, 'invalid index to insert');
        nanoassert(results[index - lastIndexHandled - 1] === undefined, 'already inserted result');
        results[index - lastIndexHandled - 1] = { index, value, snapshot };
      } else {
        results.push({ index, value, snapshot });
      }
    };

    fetch();
    while (true) {
      await raceWaitList();
      while (results.length >= 1 && results[0] !== undefined) {
        const result = results.shift();
        lastIndexHandled += 1;
        if (result.snapshot.status === 'rejected') {
          throw result.snapshot.reason
        } else if (result.snapshot.value) {
          return [result.index, result.value]
        }
      }
      if (exhausted && lastIndexFetched === lastIndexHandled) {
        return [-1, undefined]
      }
      if (hasFetchedValue && !shouldStop) {
        schedule(lastIndexFetched, fetchedValue);
        hasFetchedValue = false;
        fetchedValue = null;
      }
      if (!fetching && !exhausted && !shouldStop && scheduledCount < queue.concurrency) {
        fetch();
      }
    }
  }

  /**
   * Returns the index of the first element of an iterable that passes an asynchronous truth test.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   *
   * Whenever a result is found, all the remaining tasks will be cancelled as long
   * as they didn't started already. In case of exception in one of the iteratee calls the promise
   * returned by this function will be rejected with the exception and the remaining pending
   * tasks will also be cancelled. In the very specific case where a result is found and an
   * already started task throws an exception that exception will be plainly ignored.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @param {boolean} [ordered] If true this function will return on the first element in the iterable
   * order for which `iteratee` returned true. If false it will be the first in time.
   * @returns {Promise<number>} A promise that will be resolved with the index of the first found value or rejected if one of the
   * `iteratee` calls throws an exception before finding a value. If no value is found it will return `-1`.
   * @example
   * // example using the default concurrency of 1
   * import { asyncFindIndex, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFindIndex(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * })
   * console.log(result) // prints 0
   * @example
   * // example using a set concurrency
   * import { asyncFindIndex, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3, 4, 5]
   * const result = await asyncFindIndex(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 3
   *   // concurrent calls
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * }, 3)
   * console.log(result) // prints 0 or 2, randomly
   * @example
   * // example using infinite concurrency
   * import { asyncFindIndex, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFindIndex(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints 0 or 2, randomly
   */
  async function asyncFindIndex (iterable, iteratee, queueOrConcurrency = 1, ordered = false) {
    const result = (await asyncFindInternal(iterable, iteratee, queueOrConcurrency, ordered))[0];
    return result
  }

  /**
   * Returns `true` if all elements of an iterable pass a truth test and `false` otherwise.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   * If any truth test returns `false` the promise is immediately resolved.
   *
   * Whenever a test returns `false`, all the remaining tasks will be cancelled as long
   * as they didn't started already. In case of exception in one of the iteratee calls the promise
   * returned by this function will be rejected with the exception and the remaining pending
   * tasks will also be cancelled. In the very specific case where a test returns `false` and an
   * already started task throws an exception that exception will be plainly ignored.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @returns {Promise<boolean>} A promise that will be resolved to `true` if all values pass the truth test and `false`
   * if a least one of them doesn't pass it. That promise will be rejected if one of the truth test throws
   * an exception.
   * @example
   * // example using the default concurrency of 1
   * import { asyncEvery, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncEvery(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v > 0
   * })
   * console.log(result) // prints true
   * // total processing time should be ~ 30ms
   * @example
   * // example using a set concurrency
   * import { asyncEvery, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncEvery(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 2
   *   // concurrent calls
   *   await asyncSleep(10) // waits 10ms
   *   return v > 0
   * }, 2)
   * console.log(result) // prints true
   * // total processing time should be ~ 20ms
   * @example
   * // example using infinite concurrency
   * import { asyncEvery, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncEvery(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(10) // waits 10ms
   *   return v > 0
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints true
   * // total processing time should be ~ 10ms
   */
  async function asyncEvery (iterable, iteratee, queueOrConcurrency = 1) {
    nanoassert(typeof iteratee === 'function', 'iteratee must be a function');
    iteratee = asyncWrap(iteratee);
    const index = await asyncFindIndex(iterable, async (value, index, iterable) => {
      return !(await iteratee(value, index, iterable))
    }, queueOrConcurrency, false);
    const result = index === -1;
    return result
  }

  /**
   * Fully consumes an iteratable or async iterable an returns an array with all the elements it contained.
   *
   * @param {Iterable | AsyncIterable} iterable An iterator or async iterator.
   * @returns {Promise<any[]>} An array.
   * @example
   * import { asyncIterableToArray, asyncSleep } from 'modern-async'
   *
   * // example async generator
   * async function* asyncGenerator() {
   *   for (let i = 0; i < 3; i += 1) {
   *     await asyncSleep(10)
   *     yield i
   *   }
   * }
   *
   * console.log(await asyncIterableToArray(asyncGenerator()))
   * // prints [0, 1, 2]
   */
  async function asyncIterableToArray (iterable) {
    const it = asyncIterableWrap(iterable);
    const results = [];
    for await (const el of it) {
      results.push(el);
    }
    return results
  }

  /**
   * Produces a an async iterator that will return each value or `iterable` after having processed them through
   * the `iteratee` function.
   *
   * The iterator will perform the calls to `iteratee` in a queue to limit the concurrency of
   * these calls. The iterator will consume values from `iterable` only if slots are available in the
   * queue.
   *
   * If the returned iterator is not fully consumed it will stop consuming new values from `iterable` and scheduling
   * new calls to `iteratee` in the queue, but already scheduled tasks will still be executed.
   *
   * If `iterable` or any of the calls to `iteratee` throws an exception all pending tasks will be cancelled and the
   * returned async iterator will throw that exception.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @param {boolean} [ordered] If true the results will be yielded in the same order as in the source
   * iterable, regardless of which calls to iteratee returned first. If false the the results will be yielded as soon
   * as a call to iteratee returned. Defaults to `true`.
   * @yields {any} Each element of `iterable` after processing it through `iteratee`.
   * @example
   * import {asyncGeneratorMap, asyncSleep} from 'modern-async'
   *
   * const iterator = function * () {
   *   for (let i = 0; i < 10000; i += 1) {
   *     yield i
   *   }
   * }
   * const mapIterator = asyncGeneratorMap(iterator(), async (v) => {
   *   await asyncSleep(1000)
   *   return v * 2
   * })
   * for await (const el of mapIterator) {
   *   console.log(el)
   * }
   * // Will print "0", "2", "4", etc... Only one number will be printed per second.
   * // Numbers from `iterator` will be consumed progressively
   */
  async function * asyncGeneratorMap (iterable, iteratee, queueOrConcurrency = 1, ordered = true) {
    nanoassert(typeof iteratee === 'function', 'iteratee must be a function');
    iteratee = asyncWrap(iteratee);
    const it = asyncIterableWrap(iterable);
    const queue = getQueue(queueOrConcurrency);

    /**
     * @ignore
     */
    class CustomCancelledError extends Error {}

    let lastIndexFetched = -1;
    let fetching = false;
    let hasFetchedValue = false;
    let fetchedValue = null;
    let exhausted = false;
    let shouldStop = false;

    let lastIndexHandled = -1;
    const results = [];

    let waitListIndex = 0;
    const waitList = new Map();
    const addToWaitList = (fct) => {
      const identifier = waitListIndex;
      waitListIndex += 1;
      const p = (async () => {
        return [identifier, await reflectAsyncStatus(fct)]
      })();
      nanoassert(!waitList.has(identifier), 'waitList contains identifier');
      waitList.set(identifier, p);
    };
    const raceWaitList = async () => {
      nanoassert(waitList.size >= 1, 'Can not race on empty list');
      const [identifier] = await Promise.race([...waitList.values()]);
      const removed = waitList.delete(identifier);
      nanoassert(removed, 'waitList does not contain identifier');
    };

    let scheduledCount = 0;
    const scheduledList = new Map();
    const schedule = (index, value) => {
      scheduledCount += 1;
      const task = {
        value,
        index,
        cancel: null,
        state: null
      };
      scheduledList.set(index, task);
      addToWaitList(async () => {
        const p = queue.exec(async () => {
          if (task.state === 'cancelled') {
            throw new CustomCancelledError()
          }
          nanoassert(task.state === 'scheduled', 'invalid task state');
          const removed = scheduledList.delete(index);
          nanoassert(removed, 'Couldn\'t find index in scheduledList for removal');

          const snapshot = await reflectAsyncStatus(() => iteratee(value, index, iterable));

          scheduledCount -= 1;
          insertInResults(index, value, snapshot);
          if (snapshot.status === 'rejected') {
            shouldStop = true;
            cancelAllScheduled(ordered ? index : 0);
          }
        });
        nanoassert(task.cancel === null, 'task already has cancel');
        task.cancel = () => {
          nanoassert(task.state === 'scheduled', 'task should be scheduled');
          task.state = 'cancelled';
        };
        nanoassert(task.state === null, 'task should have no state');
        task.state = 'scheduled';
        return p
      });
    };
    const cancelAllScheduled = (fromIndex) => {
      for (const index of [...scheduledList.keys()].filter((el) => el >= fromIndex)) {
        const task = scheduledList.get(index);
        nanoassert(task.cancel, 'task does not have cancel');
        task.cancel();
        const removed = scheduledList.delete(index);
        nanoassert(removed, 'Couldn\'t find index in scheduledList for removal');
      }
    };
    const fetch = () => {
      fetching = true;
      addToWaitList(async () => {
        const snapshot = await reflectAsyncStatus(() => it.next());
        fetching = false;
        if (snapshot.status === 'fulfilled') {
          const { value, done } = snapshot.value;
          if (!done) {
            lastIndexFetched += 1;
            nanoassert(fetchedValue === null, 'fetchedValue should be null');
            fetchedValue = value;
            nanoassert(!hasFetchedValue, 'hasFetchedValue should be false');
            hasFetchedValue = true;
          } else {
            exhausted = true;
          }
        } else {
          exhausted = true;
          lastIndexFetched += 1;
          const index = lastIndexFetched;
          insertInResults(index, undefined, snapshot);
          cancelAllScheduled(ordered ? index : 0);
        }
      });
    };

    const insertInResults = (index, value, snapshot) => {
      if (ordered) {
        nanoassert(index - lastIndexHandled - 1 >= 0, 'invalid index to insert');
        nanoassert(results[index - lastIndexHandled - 1] === undefined, 'already inserted result');
        results[index - lastIndexHandled - 1] = { index, value, snapshot };
      } else {
        results.push({ index, value, snapshot });
      }
    };

    fetch();
    while (true) {
      await raceWaitList();
      while (results.length >= 1 && results[0] !== undefined) {
        const result = results.shift();
        lastIndexHandled += 1;
        if (result.snapshot.status === 'rejected') {
          throw result.snapshot.reason
        } else {
          let yielded = false;
          try {
            yield result.snapshot.value;
            yielded = true;
          } finally {
            if (!yielded) {
              await it.return();
            }
          }
        }
      }
      if (exhausted && lastIndexFetched === lastIndexHandled) {
        return
      }
      if (hasFetchedValue && !shouldStop) {
        schedule(lastIndexFetched, fetchedValue);
        hasFetchedValue = false;
        fetchedValue = null;
      }
      if (!fetching && !exhausted && !shouldStop && scheduledCount < queue.concurrency) {
        fetch();
      }
    }
  }

  /**
   * Produces a an async iterator that will return each value or `iterable` which pass an asynchronous truth test.
   *
   * The iterator will perform the calls to `iteratee` in a queue to limit the concurrency of
   * these calls. The iterator will consume values from `iterable` only if slots are available in the
   * queue.
   *
   * If the returned iterator is not fully consumed it will stop consuming new values from `iterable` and scheduling
   * new calls to `iteratee` in the queue, but already scheduled tasks will still be executed.
   *
   * If `iterable` or any of the calls to `iteratee` throws an exception all pending tasks will be cancelled and the
   * returned async iterator will throw that exception.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @param {boolean} [ordered] If true the results will be yielded in the same order as in the source
   * iterable, regardless of which calls to iteratee returned first. If false the the results will be yielded as soon
   * as a call to iteratee returned. Defaults to `true`.
   * @yields {any} Each element of `iterable` for which `iteratee` returned `true`.
   * @example
   * import {asyncGeneratorFilter, asyncSleep} from 'modern-async'
   *
   * const iterator = function * () {
   *   for (let i = 0; i < 10000; i += 1) {
   *     yield i
   *   }
   * }
   * const filterIterator = asyncGeneratorFilter(iterator(), async (v) => {
   *   await asyncSleep(1000)
   *   return v % 3 === 0
   * })
   * for await (const el of filterIterator) {
   *   console.log(el)
   * }
   * // will print "0", "3", "6", etc... Only one number will be printed every 3 seconds.
   */
  async function * asyncGeneratorFilter (iterable, iteratee, queueOrConcurrency = 1, ordered = true) {
    nanoassert(typeof iteratee === 'function', 'iteratee must be a function');
    iteratee = asyncWrap(iteratee);
    for await (const [value, pass] of asyncGeneratorMap(iterable, async (v, i, t) => {
      return [v, await iteratee(v, i, t)]
    }, queueOrConcurrency, ordered)) {
      if (pass) {
        yield value;
      }
    }
  }

  /**
   * Returns an array of all the values in `iterable` which pass an asynchronous truth test.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   * The results will be in the same order than in `iterable`.
   *
   * If any of the calls to `iteratee` throws an exception the returned promise will be rejected and the remaining
   * pending tasks will be cancelled.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of `iterable`. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @returns {Promise<any[]>} A promise that will be resolved with an array containing all the values that passed
   * the truth test. This promise will be rejected if any of the `iteratee` calls throws an exception.
   * @example
   * // example using the default concurrency of 1
   * import { asyncFilter, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFilter(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 1
   * })
   * console.log(result) // prints [1, 3]
   * // total processing time should be ~ 30ms
   * @example
   * // example using a set concurrency
   * import { asyncFilter, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFilter(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 2
   *   // concurrent calls
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 1
   * }, 2)
   * console.log(result) // prints [1, 3]
   * // total processing time should be ~ 20ms
   * @example
   * // example using infinite concurrency
   * import { asyncFilter, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFilter(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 1
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints [1, 3]
   * // total processing time should be ~ 10ms
   */
  async function asyncFilter (iterable, iteratee, queueOrConcurrency = 1) {
    return await asyncIterableToArray(asyncGeneratorFilter(iterable, iteratee, queueOrConcurrency))
  }

  /**
   * Returns the first element of an iterable that passes an asynchronous truth test.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   *
   * Whenever a result is found, all the remaining tasks will be cancelled as long
   * as they didn't started already. In case of exception in one of the `iteratee` calls the promise
   * returned by this function will be rejected with the exception and the remaining pending
   * tasks will also be cancelled. In the very specific case where a result is found and an
   * already started task throws an exception that exception will be plainly ignored.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @param {boolean} [ordered] If true this function will return on the first element in the iterable
   * order for which `iteratee` returned true. If false it will be the first in time.
   * @returns {Promise<any | undefined>} A promise that will be resolved with the first found value or rejected if one of the
   * `iteratee` calls throws an exception before finding a value. If no value is found it will return `undefined`.
   * @example
   * // example using the default concurrency of 1
   * import { asyncFind, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFind(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * })
   * console.log(result) // prints 1
   * @example
   * // example using a set concurrency
   * import { asyncFind, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3, 4, 5]
   * const result = await asyncFind(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 3
   *   // concurrent calls
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * }, 3)
   * console.log(result) // prints 1 or 3, randomly
   * @example
   * // example using infinite concurrency
   * import { asyncFind, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncFind(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   return v % 2 === 1
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints 1 or 3, randomly
   */
  async function asyncFind (iterable, iteratee, queueOrConcurrency = 1, ordered = false) {
    const result = (await asyncFindInternal(iterable, iteratee, queueOrConcurrency, ordered))[1];
    return result
  }

  /**
   * Calls a function on each element of iterable.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   *
   * If any of the calls to iteratee throws an exception the returned promise will be rejected and the remaining
   * pending tasks will be cancelled.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @returns {Promise} A promise that will be resolved when all the calls to `iteratee` have been done.
   * This promise will be rejected if any call to `iteratee` throws an exception.
   * @example
   * // example using the default concurrency of 1
   * import { asyncForEach, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * await asyncForEach(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   console.log(v)
   * })
   * // prints 1, 2 and 3 in that exact order
   * @example
   * // example using a set concurrency
   * import { asyncForEach, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * await asyncForEach(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 2
   *   // concurrent calls
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   console.log(v)
   * }, 2)
   * // prints 1, 2 and 3 in a random order (it will always print 1 or 2 before printing 3 due to
   * // the concurrency limit and the internal scheduling order)
   * @example
   * // example using infinite concurrency
   * import { asyncForEach, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * await asyncForEach(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
   *   console.log(v)
   * }, Number.POSITIVE_INFINITY)
   * // prints 1, 2 and 3 in a random order
   */
  async function asyncForEach (iterable, iteratee, queueOrConcurrency = 1) {
    // eslint-disable-next-line no-unused-vars
    for await (const _el of asyncGeneratorMap(iterable, iteratee, queueOrConcurrency)) {
      // do nothing
    }
  }

  /**
   * Produces a new collection of values by mapping each value in `iterable` through the `iteratee` function.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
   *
   * If any of the calls to iteratee throws an exception the returned promise will be rejected and the remaining
   * pending tasks will be cancelled.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @returns {Promise<any[]>} A promise that will be resolved with an array containing all the mapped value,
   * or will be rejected if any of the calls to `iteratee` throws an exception.
   * @example
   * // example using the default concurrency of 1
   * import { asyncMap, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncMap(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v * 2
   * }, 2)
   * console.log(result) // prints [2, 4, 6]
   * // total processing time should be ~ 30ms
   * @example
   * // example using a set concurrency
   * import { asyncMap, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncMap(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 2
   *   // concurrent calls
   *   await asyncSleep(10) // waits 10ms
   *   return v * 2
   * }, 2)
   * console.log(result) // prints [2, 4, 6]
   * // total processing time should be ~ 20ms
   * @example
   * // example using infinite concurrency
   * import { asyncMap, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncMap(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(10) // waits 10ms
   *   return v * 2
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints [2, 4, 6]
   * // total processing time should be ~ 10ms
   */
  async function asyncMap (iterable, iteratee, queueOrConcurrency = 1) {
    return await asyncIterableToArray(asyncGeneratorMap(iterable, iteratee, queueOrConcurrency))
  }

  /**
   * Performs a reduce operation as defined in the `Array.reduce()` method but using an asynchronous
   * function as reducer. The reducer will be called sequentially.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} reducer The reducer function. It will be called with four arguments:
   *   * `accumulator`: The last calculated value (or the first value of the iterable if no initial value is provided)
   *   * `value`: The current value
   *   * `index`: The current index in the iterable. Will start from 0 if no initial value is provided, 1 otherwise.
   *   * `iterable`: The iterable on which the reduce operation is performed.
   * @param {any} [initial] The initial value that will be used as accumulator in the first call to
   *   `reducer`. If omitted the first element of `iterable` will be used as accumulator and `reducer`
   *   will only be called from from the second element of the list (as defined in the `Array.reduce()`
   *   function).
   * @returns {Promise} A promise that will be resolved with the result of the reduce operation,
   *   or rejected if any of the calls to `reducer` throws an exception.
   * @example
   * import { asyncReduce, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncReduce(array, async (v, p) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v + p
   * })
   * console.log(result) // prints 6
   * // total processing time should be ~ 20ms
   */
  async function asyncReduce (iterable, reducer, initial = undefined) {
    nanoassert(typeof reducer === 'function', 'iteratee must be a function');
    reducer = asyncWrap(reducer);
    if (initial !== undefined) {
      let current = initial;
      let i = 0;
      for await (const el of iterable) {
        current = await reducer(current, el, i, iterable);
        i += 1;
      }
      return current
    } else {
      let i = 0;
      let current;
      for await (const el of iterable) {
        if (i === 0) {
          current = el;
        } else {
          current = await reducer(current, el, i, iterable);
        }
        i += 1;
      }
      if (i === 0) {
        throw new TypeError('Reduce of empty array with no initial value')
      }
      return current
    }
  }

  /**
   * Performs a reduce operation as defined in the `Array.reduceRight()` method but using an asynchronous
   * function as reducer. The reducer will be called sequentially.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable object.
   * @param {Function} reducer The reducer function. It will be called with four arguments:
   *   * `accumulator`: The last calculated value (or the first value of the iterable if no initial value is provided)
   *   * `value`: The current value
   *   * `index`: The current index in the iterable. Will start from the last index if no initial value is provided,
   *     the last index minus 1 otherwise.
   *   * `iterable`: The iterable on which the reduce operation is performed.
   * @param {any} [initial] The initial value that will be used as accumulator in the first call to
   *   reducer. If omitted the first element of `iterable` will be used as accumulator and `reducer`
   *   will only be called from from the second element of the list (as defined in the `Array.reduce()`
   *   function).
   * @returns {Promise} A promise that will be resolved with the result of the reduce operation,
   *   or rejected if any of the calls to `reducer` throws an exception.
   * @example
   * import { asyncReduceRight, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   * const result = await asyncReduceRight(array, async (v, p) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v + p
   * })
   * console.log(result) // prints 6
   * // total processing time should be ~ 20ms
   */
  async function asyncReduceRight (iterable, reducer, initial = undefined) {
    nanoassert(typeof reducer === 'function', 'iteratee must be a function');
    reducer = asyncWrap(reducer);
    const arr = [];
    for await (const el of iterable) {
      arr.push(el);
    }
    arr.reverse();
    return asyncReduce(arr, async (accumulator, value, index, iterable) => {
      return reducer(accumulator, value, arr.length - 1 - index, iterable)
    }, initial)
  }

  /**
   * Waits a given amount of time. This function returns both a promise and cancel function in
   * order to cancel the wait time if necessary. If cancelled, the promise will be rejected
   * with a `CancelledError`.
   *
   * This function uses `setTimeout()` internally and has the same behavior, notably that it could resolve
   * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
   *
   * @param {number} amount An amount of time in milliseconds
   * @returns {Array} A tuple of two objects:
   *   * `promise`: The promise
   *   * `cancel`: The cancel function. It will return a boolean that will be `true` if the promise was effectively cancelled,
   *     `false` otherwise.
   * @example
   * import { asyncSleepCancellable } from 'modern-async'
   *
   * const [promise, cancel] = asyncSleepCancellable(100) // schedule to resolve the promise after 100ms
   *
   * cancel()
   *
   * try {
   *   await promise
   * } catch (e) {
   *   console.log(e.name) // prints CancelledError
   * }
   */
  function asyncSleepCancellable (amount) {
    nanoassert(typeof amount === 'number', 'amount must be a number');
    const deferred = new Deferred();
    const id = setTimeout(deferred.resolve, amount);
    let terminated = false;
    return [deferred.promise.finally(() => {
      terminated = true;
    }), () => {
      if (terminated) {
        return false
      } else {
        terminated = true;
        deferred.reject(new CancelledError());
        clearTimeout(id);
        return true
      }
    }]
  }

  /**
   * A class implementing a scheduler.
   *
   * It fills the same purpose than setInterval() but its behavior is more adapted to asynchronous
   * tasks. Notably it can limit the concurrency of asynchronous tasks running in parallel.
   *
   * @example
   * import { Scheduler, asyncSleep } from 'modern-async'
   *
   * let i = 0
   * const scheduler = new Scheduler(async () => {
   *   const taskNbr = i
   *   i += 1
   *   console.log(`Starting task ${taskNbr}`)
   *   await asyncSleep(10) // waits 10ms
   *   console.log(`Ending task ${taskNbr}`)
   * }, 100) // a scheduler that triggers every 100ms
   * // the default configuration uses a maximum concurrency of 1 and doesn't allow pending
   * // tasks, which mean that if a task takes more time to complete than the delay it will be skipped
   *
   * scheduler.start() // starts the scheduler
   *
   * await asyncSleep(1000) // waits 1s, during that time the task should trigger ~ 9 times
   *
   * scheduler.stop() // stops the scheduler
   * console.log('Scheduler stopped')
   * // no "Starting task" console message may appear from here but you could still see a
   * // "Stopping task" as there could have a task that started before we stopped the
   * // scheduler
   */
  class Scheduler {
    /**
     * Constructs a Scheduler.
     *
     * @param {Function} fct The asynchronous function to call when the scheduler is triggered.
     * @param {number} delay The delay between two triggering of the scheduler, in ms.
     * @param {{startImmediate: boolean, concurrency: number, maxPending: number}} [options] An object that can contain additional options:
     *
     *   * `startImmediate`: If true a new task will be triggered as soon as the start() method is called.
     *     Defaults to ´false`.
     *   * `concurrency`: The maximum number of concurrent tasks. See the `concurrency` attribute. Defaults to 1.
     *   * `maxPending`: The maximum number of pending tasks. See the `maxPending` attribute. Defaults to 0.
     */
    constructor (fct, delay, options = null) {
      options = options || {};
      this._asyncFct = asyncWrap(fct);
      this._delay = delay;
      nanoassert(typeof this._delay === 'number', 'delay must be a number');
      nanoassert(this._delay >= 0, 'delay must be greater or equal than 0');
      this._startImmediate = options.startImmediate || false;
      nanoassert(typeof this._startImmediate === 'boolean',
        'startImmediate must be a boolean');
      this._maxPending = options.maxPending || 0;
      nanoassert(Number.isInteger(this._maxPending) || this._maxPending === Number.POSITIVE_INFINITY,
        'maxPending must be an integer or positive infinity');
      nanoassert(this._maxPending >= 0, 'maxPending must be greater or equal than 0');
      this._queue = new Queue(options.concurrency || 1);
      this._started = false;
      this._initialTime = null;
      this._nbrTriggering = null;
      this._cancelSleep = null;
    }

    /**
     * (Read-only) The delay between two triggering of the scheduler, in milliseconds.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get delay () {
      return this._delay
    }

    /**
     * (Read-only) Whether or not a triggering of the task should occur immediately when calling `start()` or not.
     *
     * Defaults to false.
     *
     * @member {boolean}
     * @returns {boolean} ignore
     */
    get startImmediate () {
      return this._startImmediate
    }

    /**
     * (Read-only) The maximum number of asynchronous tasks that can run in parallel.
     *
     * This parameter only matters in the event where some tasks may take more time to execute
     * than the delay. If the concurrency allows it the new task will be run concurrently. If not
     * it may be scheduled to be executed depending on the configuration of the `maxPending` parameter.
     *
     * Defaults to 1.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get concurrency () {
      return this._queue.concurrency
    }

    /**
     * (Read-only) The maximum number of tasks that can be pending.
     *
     * In the event where one of the tasks triggered by the scheduler takes more time to execute than
     * the delay the next task may or may not be run concurrently depending on the configuration of
     * the `concurrency` parameter. If the maximum concurrency was already reached the new task can
     * be scheduled to be executed as soon as the previous task finished.
     *
     * This parameter indicates the maximum amount of tasks that can be pending at any time. If a
     * task should be scheduled and the maximum amount of pending tasks is already reached
     * that new task will be skipped.
     *
     * This behavior helps to prevent cases that would lead to a infinite amount of tasks to be
     * pending. This could happen in extreme cases where the tasks would take systematically more
     * time to execute than the delay.
     *
     * Defaults to 0.
     *
     * @member {number}
     * @returns {number} ignore
     */
    get maxPending () {
      return this._maxPending
    }

    /**
     * (Read-only) Whether or not the scheduler is actually started.
     *
     * @member {boolean}
     * @returns {boolean} ignore
     */
    get started () {
      return this._started
    }

    /**
     * Starts the scheduler.
     *
     * Calling this method can trigger a task immediately depending on the configuration
     * of the `startImmediate` parameter.
     *
     * If this method is called while the scheduler is already started it will have no effect.
     */
    start () {
      if (this.started) {
        return
      }
      nanoassert(this._queue.pending === 0);
      this._started = true;

      this._initialTime = new Date().getTime();
      this._nbrTriggering = 0;

      if (this.startImmediate) {
        this._triggerTask();
      }

      this._scheduleSleep();
    }

    /**
     * Stops the scheduler.
     *
     * If, for any reason, there were pending tasks in the scheduler they will be cancelled. On the other
     * hand if they are still one or more tasks that are running they will continue to run until they
     * terminate.
     *
     * This method is safe to call in a task if necessary.
     *
     * If this method is called while the scheduler is already stopped it will have no effect.
     */
    stop () {
      if (!this.started) {
        return
      }
      nanoassert(!!this._cancelSleep);
      this._cancelSleep();
      this._cancelSleep = null;
      this._queue.cancelAllPending();
      nanoassert(this._queue.pending === 0);
      this._started = false;
      this._initialTime = null;
      this._nbrTriggering = null;
    }

    /**
     * @ignore
     */
    _scheduleSleep () {
      this._nbrTriggering += 1;
      const nextTime = this._initialTime + (this.delay * this._nbrTriggering);
      const currentTime = new Date().getTime();
      const [promise, cancel] = asyncSleepCancellable(nextTime - currentTime);
      this._cancelSleep = cancel;
      promise.then(() => {
        this._triggerTask();
        this._scheduleSleep();
      }, () => {
        // ignore cancelled asyncSleep
      });
    }

    /**
     * @ignore
     */
    _triggerTask () {
      const reachedMaxConcurrency = this._queue.running === this._queue.concurrency;
      const forecastPending = reachedMaxConcurrency ? this._queue.pending + 1 : 0;
      if (forecastPending <= this.maxPending) {
        this._queue.exec(this._asyncFct).catch(exceptionHandler);
      }
    }
  }

  const exceptionHandler = (e) => {
    if (e instanceof CancelledError) ; else {
      throw e
    }
  };

  /**
   * Waits a given amount of time.
   *
   * This function uses `setTimeout()` internally and has the same behavior, notably that it could resolve
   * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
   *
   * @param {number} amount An amount of time in milliseconds
   * @returns {Promise<void>} A promise that will be resolved after the given amount of time has passed.
   * @example
   * import { asyncSleep } from 'modern-async'
   *
   * await asyncSleep(100) // will wait 100ms
   * @example
   * // another example that doesn't block on the asyncSleep call
   * // it's functionally identical to using setTimout but with a promise syntax
   * import { asyncSleep } from 'modern-async'
   *
   * asyncSleep(10).then(() => {
   *   console.log('hello')
   * })
   * // will print 'hello' after 10ms
   */
  async function asyncSleep (amount) {
    return asyncSleepCancellable(amount)[0]
  }

  /**
   * Waits a given amount of time.
   *
   * This function returns both a promise and cancel function in order to cancel the
   * wait time if necessary. If cancelled, the promise will be rejected with a `CancelledError`.
   *
   * This function is similar to `asyncSleep()` except it ensures that the amount of time measured
   * using the `Date` object is always greater than or equal the asked amount of time.
   *
   * This function can imply additional delay that can be bad for performances. As such it is
   * recommended to only use it in unit tests or very specific cases. Most applications should
   * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
   * milliseconds before the asked delay.
   *
   * @param {number} amount An amount of time in milliseconds
   * @returns {Array} A tuple of two objects:
   *   * `promise`: The promise
   *   * `cancel`: The cancel function. It will return a boolean that will be `true` if the promise was effectively cancelled,
   *     `false` otherwise.
   * @example
   * import { asyncSleepPreciseCancellable } from 'modern-async'
   *
   * const [promise, cancel] = asyncSleepPreciseCancellable(100) // schedule to resolve the promise after 100ms
   *
   * cancel()
   *
   * try {
   *   await promise
   * } catch (e) {
   *   console.log(e.name) // prints CancelledError
   * }
   */
  function asyncSleepPreciseCancellable (amount) {
    return _innerWaitPreciseCancellable(amount, (ellasped, amount) => {
      return ellasped >= amount
    })
  }

  /**
   * @ignore
   * @param {*} amount ignored
   * @param {*} checkPassed ignored
   * @returns {*} ignored
   */
  function _innerWaitPreciseCancellable (amount, checkPassed) {
    nanoassert(typeof amount === 'number', 'amount must be a number');
    const start = new Date().getTime();
    const [p, cancel] = asyncSleepCancellable(amount);
    let lastCancel = cancel;
    const deferred = new Deferred();
    const reject = (e) => {
      deferred.reject(e);
    };
    const resolve = () => {
      const now = new Date().getTime();
      const ellasped = now - start;
      if (checkPassed(ellasped, amount)) {
        deferred.resolve();
      } else {
        const [np, ncancel] = asyncSleepCancellable(amount - ellasped);
        lastCancel = ncancel;
        np.then(resolve, reject);
      }
    };
    p.then(resolve, reject);
    return [deferred.promise, () => {
      return lastCancel()
    }]
  }

  /**
   * Waits a given amount of time.
   *
   * This function is similar to `asyncSleep()` except it ensures that the amount of time measured
   * using the `Date` object is always greater than or equal the asked amount of time.
   *
   * This function can imply additional delay that can be bad for performances. As such it is
   * recommended to only use it in unit tests or very specific cases. Most applications should
   * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
   * milliseconds before the asked delay.
   *
   * @param {number} amount An amount of time in milliseconds
   * @returns {Promise<void>} A promise that will be resolved after the given amount of time has passed.
   * @example
   * import { asyncSleepPrecise } from 'modern-async'
   *
   * await asyncSleepPrecise(100) // will wait 100ms
   */
  async function asyncSleepPrecise (amount) {
    return asyncSleepPreciseCancellable(amount)[0]
  }

  /**
   * Returns `true` if at least one element of an iterable pass a truth test and `false` otherwise.
   *
   * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls. If any
   * truth test returns `true` the promise is immediately resolved.
   *
   * Whenever a test returns `true`, all the remaining tasks will be cancelled as long
   * as they didn't started already. In case of exception in one of the `iteratee` calls the promise
   * returned by this function will be rejected with the exception and the remaining pending
   * tasks will also be cancelled. In the very specific case where a test returns `true` and an
   * already started task throws an exception that exception will be plainly ignored.
   *
   * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
   * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
   * three arguments:
   *   * `value`: The current value to process
   *   * `index`: The index in the iterable. Will start from 0.
   *   * `iterable`: The iterable on which the operation is being performed.
   * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
   * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
   * implicitly for the same purpose. Defaults to `1`.
   * @returns {Promise<boolean>} A promise that will be resolved to `true` if at least one value pass the truth test and `false`
   * if none of them do. That promise will be rejected if one of the truth test throws an exception.
   * @example
   * // example using the default concurrency of 1
   * import { asyncSome, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncSome(array, async (v) => {
   *   // these calls will be performed sequentially
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 0
   * })
   * console.log(result) // prints true
   * // total processing time should be ~ 30ms
   * @example
   * // example using a set concurrency
   * import { asyncSome, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncSome(array, async (v) => {
   *   // these calls will be performed in parallel with a maximum of 2
   *   // concurrent calls
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 0
   * }, 2)
   * console.log(result) // prints true
   * // total processing time should be ~ 20ms
   * @example
   * // example using infinite concurrency
   * import { asyncSome, asyncSleep } from 'modern-async'
   *
   * const array = [1, 2, 3]
   *
   * const result = await asyncSome(array, async (v) => {
   *   // these calls will be performed in parallel
   *   await asyncSleep(10) // waits 10ms
   *   return v % 2 === 0
   * }, Number.POSITIVE_INFINITY)
   * console.log(result) // prints true
   * // total processing time should be ~ 10ms
   */
  async function asyncSome (iterable, iteratee, queueOrConcurrency = 1) {
    const index = await asyncFindIndex(iterable, iteratee, queueOrConcurrency, false);
    const result = index !== -1;
    return result
  }

  /**
   * An error type which is used when an asynchronous operation takes too much time to perform.
   */
  class TimeoutError extends Error {
    /**
     * Constructs a new instance.
     *
     * @param {string} message The error message
     */
    constructor (message) {
      super(message);
      this.name = this.constructor.name;
    }
  }

  /**
   * Wraps a call to an asynchronous function to add a timer on it. If the delay is exceeded
   * the returned promise will be rejected with a `TimeoutError`.
   *
   * This function uses `setTimeout()` internally and has the same behavior, notably that it could reject
   * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
   *
   * @param {Function} fct An asynchronous function that will be called immediately without arguments.
   * @param {number} amount An amount of time in milliseconds
   * @returns {Promise} A promise that will be resolved or rejected according to the result of the call
   * to `fct`. If `amount` milliseconds pass before the call to `fct` returns or rejects, this promise will
   * be rejected with a `TimeoutError`.
   * @example
   * import { asyncTimeout, asyncSleep } from 'modern-async'
   *
   * // the following statement will perform successfully because
   * // the function will return before the delay
   * await asyncTimeout(async () => {
   *   await asyncSleep(10)
   * }, 100)
   *
   * try {
   *   // the following statement will throw after 10ms
   *   await asyncTimeout(async () => {
   *     await asyncSleep(100)
   *   }, 10)
   * } catch (e) {
   *   console.log(e.name) // prints TimeoutError
   * }
   */
  async function asyncTimeout (fct, amount) {
    const asyncFct = asyncWrap(fct);

    const [timoutPromise, cancelTimeout] = asyncSleepCancellable(amount);

    const basePromise = asyncFct();

    const deferred = new Deferred();

    basePromise.then(deferred.resolve, deferred.reject);

    timoutPromise.then(() => {
      deferred.reject(new TimeoutError());
    }, () => {
      // ignore CancelledError
    });

    return deferred.promise.finally(cancelTimeout)
  }

  /**
   * Wraps a call to an asynchronous function to add a timer on it. If the delay is exceeded
   * the returned promise will be rejected with a `TimeoutError`.
   *
   * This function is similar to `asyncTimeout()` except it ensures that the amount of time measured
   * using the `Date` object is always greater than or equal the asked amount of time.
   *
   * This function can imply additional delay that can be bad for performances. As such it is
   * recommended to only use it in unit tests or very specific cases. Most applications should
   * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
   * milliseconds before the asked delay.
   *
   * @param {Function} fct An asynchronous function that will be called immediately without arguments.
   * @param {number} amount An amount of time in milliseconds
   * @returns {Promise} A promise that will be resolved or rejected according to the result of the call
   * to `fct`. If `amount` milliseconds pass before the call to `fct` returns or rejects, this promise will
   * be rejected with a `TimeoutError`.
   * @example
   * import { asyncTimeoutPrecise, asyncSleep } from 'modern-async'
   *
   * // the following statement will perform successfully because
   * // the function will return before the delay
   * await asyncTimeoutPrecise(async () => {
   *   await asyncSleep(10)
   * }, 100)
   *
   * try {
   *   // the following statement will throw after 10ms
   *   await asyncTimeoutPrecise(async () => {
   *     await asyncSleep(100)
   *   }, 10)
   * } catch (e) {
   *   console.log(e.name) // prints TimeoutError
   * }
   */
  async function asyncTimeoutPrecise (fct, amount) {
    const asyncFct = asyncWrap(fct);

    const [timoutPromise, cancelTimeout] = asyncSleepPreciseCancellable(amount);

    const basePromise = asyncFct();

    const deferred = new Deferred();

    basePromise.then(deferred.resolve, deferred.reject);

    timoutPromise.then(() => {
      deferred.reject(new TimeoutError());
    }, () => {
      // ignore CancelledError
    });

    return deferred.promise.finally(cancelTimeout)
  }

  exports.CancelledError = CancelledError;
  exports.Deferred = Deferred;
  exports.Delayer = Delayer;
  exports.Queue = Queue;
  exports.Scheduler = Scheduler;
  exports.TimeoutError = TimeoutError;
  exports.asyncDelay = asyncDelay;
  exports.asyncDelayCancellable = asyncDelayCancellable;
  exports.asyncEvery = asyncEvery;
  exports.asyncFilter = asyncFilter;
  exports.asyncFind = asyncFind;
  exports.asyncFindIndex = asyncFindIndex;
  exports.asyncForEach = asyncForEach;
  exports.asyncGeneratorFilter = asyncGeneratorFilter;
  exports.asyncGeneratorMap = asyncGeneratorMap;
  exports.asyncIterableToArray = asyncIterableToArray;
  exports.asyncIterableWrap = asyncIterableWrap;
  exports.asyncMap = asyncMap;
  exports.asyncReduce = asyncReduce;
  exports.asyncReduceRight = asyncReduceRight;
  exports.asyncRoot = asyncRoot;
  exports.asyncSleep = asyncSleep;
  exports.asyncSleepCancellable = asyncSleepCancellable;
  exports.asyncSleepPrecise = asyncSleepPrecise;
  exports.asyncSleepPreciseCancellable = asyncSleepPreciseCancellable;
  exports.asyncSome = asyncSome;
  exports.asyncTimeout = asyncTimeout;
  exports.asyncTimeoutPrecise = asyncTimeoutPrecise;
  exports.asyncWrap = asyncWrap;
  exports.queueMicrotask = queueMicrotask;
  exports.reflectAsyncStatus = reflectAsyncStatus;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
