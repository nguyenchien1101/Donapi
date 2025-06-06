(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module2) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module2.exports = _interopRequireDefault;
    }
  });

  // node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "node_modules/color-name/index.js"(exports, module2) {
      "use strict";
      module2.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "node_modules/color-convert/conversions.js"(exports, module2) {
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      module2.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        const l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
      }
      convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        const t1 = 2 * l - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        const n = wh + f * (v - wh);
        let r;
        let g;
        let b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z2 = z ** 3;
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        const c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          const c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map((char) => {
            return char + char;
          }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        const pure = [0, 0, 0];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // node_modules/color-convert/route.js
  var require_route = __commonJS({
    "node_modules/color-convert/route.js"(exports, module2) {
      var conversions = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          const current = queue.pop();
          const adjacents = Object.keys(conversions[current]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module2.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "node_modules/color-convert/index.js"(exports, module2) {
      var conversions = require_conversions();
      var route = require_route();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module2.exports = convert;
    }
  });

  // node_modules/ansi-styles/index.js
  var require_ansi_styles = __commonJS({
    "node_modules/ansi-styles/index.js"(exports, module2) {
      "use strict";
      var wrapAnsi16 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `[${code + offset}m`;
      };
      var wrapAnsi256 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `[${38 + offset};5;${code}m`;
      };
      var wrapAnsi16m = (fn, offset) => (...args) => {
        const rgb = fn(...args);
        return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
      };
      var ansi2ansi = (n) => n;
      var rgb2rgb = (r, g, b) => [r, g, b];
      var setLazyProperty = (object, property, get) => {
        Object.defineProperty(object, property, {
          get: () => {
            const value = get();
            Object.defineProperty(object, property, {
              value,
              enumerable: true,
              configurable: true
            });
            return value;
          },
          enumerable: true,
          configurable: true
        });
      };
      var colorConvert;
      var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
        if (colorConvert === void 0) {
          colorConvert = require_color_convert();
        }
        const offset = isBackground ? 10 : 0;
        const styles = {};
        for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
          const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
          if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
          } else if (typeof suite === "object") {
            styles[name] = wrap(suite[targetSpace], offset);
          }
        }
        return styles;
      };
      function assembleStyles() {
        const codes = new Map();
        const styles = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (const [groupName, group] of Object.entries(styles)) {
          for (const [styleName, style] of Object.entries(group)) {
            styles[styleName] = {
              open: `[${style[0]}m`,
              close: `[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
        }
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
        styles.color.close = "[39m";
        styles.bgColor.close = "[49m";
        setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
        setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
        return styles;
      }
      Object.defineProperty(module2, "exports", {
        enumerable: true,
        get: assembleStyles
      });
    }
  });

  // node_modules/pretty-format/build/collections.js
  var require_collections = __commonJS({
    "node_modules/pretty-format/build/collections.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printIteratorEntries = printIteratorEntries;
      exports.printIteratorValues = printIteratorValues;
      exports.printListItems = printListItems;
      exports.printObjectProperties = printObjectProperties;
      var getKeysOfEnumerableProperties = (object) => {
        const keys = Object.keys(object).sort();
        if (Object.getOwnPropertySymbols) {
          Object.getOwnPropertySymbols(object).forEach((symbol) => {
            if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
              keys.push(symbol);
            }
          });
        }
        return keys;
      };
      function printIteratorEntries(iterator, config2, indentation, depth, refs, printer, separator = ": ") {
        let result = "";
        let current = iterator.next();
        if (!current.done) {
          result += config2.spacingOuter;
          const indentationNext = indentation + config2.indent;
          while (!current.done) {
            const name = printer(current.value[0], config2, indentationNext, depth, refs);
            const value = printer(current.value[1], config2, indentationNext, depth, refs);
            result += indentationNext + name + separator + value;
            current = iterator.next();
            if (!current.done) {
              result += "," + config2.spacingInner;
            } else if (!config2.min) {
              result += ",";
            }
          }
          result += config2.spacingOuter + indentation;
        }
        return result;
      }
      function printIteratorValues(iterator, config2, indentation, depth, refs, printer) {
        let result = "";
        let current = iterator.next();
        if (!current.done) {
          result += config2.spacingOuter;
          const indentationNext = indentation + config2.indent;
          while (!current.done) {
            result += indentationNext + printer(current.value, config2, indentationNext, depth, refs);
            current = iterator.next();
            if (!current.done) {
              result += "," + config2.spacingInner;
            } else if (!config2.min) {
              result += ",";
            }
          }
          result += config2.spacingOuter + indentation;
        }
        return result;
      }
      function printListItems(list, config2, indentation, depth, refs, printer) {
        let result = "";
        if (list.length) {
          result += config2.spacingOuter;
          const indentationNext = indentation + config2.indent;
          for (let i = 0; i < list.length; i++) {
            result += indentationNext + printer(list[i], config2, indentationNext, depth, refs);
            if (i < list.length - 1) {
              result += "," + config2.spacingInner;
            } else if (!config2.min) {
              result += ",";
            }
          }
          result += config2.spacingOuter + indentation;
        }
        return result;
      }
      function printObjectProperties(val, config2, indentation, depth, refs, printer) {
        let result = "";
        const keys = getKeysOfEnumerableProperties(val);
        if (keys.length) {
          result += config2.spacingOuter;
          const indentationNext = indentation + config2.indent;
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const name = printer(key, config2, indentationNext, depth, refs);
            const value = printer(val[key], config2, indentationNext, depth, refs);
            result += indentationNext + name + ": " + value;
            if (i < keys.length - 1) {
              result += "," + config2.spacingInner;
            } else if (!config2.min) {
              result += ",";
            }
          }
          result += config2.spacingOuter + indentation;
        }
        return result;
      }
    }
  });

  // node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
  var require_AsymmetricMatcher = __commonJS({
    "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.test = exports.serialize = void 0;
      var _collections = require_collections();
      var Symbol2 = window["jest-symbol-do-not-touch"] || window.Symbol;
      var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
      var SPACE = " ";
      var serialize = (val, config2, indentation, depth, refs, printer) => {
        const stringedValue = val.toString();
        if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
          if (++depth > config2.maxDepth) {
            return "[" + stringedValue + "]";
          }
          return stringedValue + SPACE + "[" + (0, _collections.printListItems)(val.sample, config2, indentation, depth, refs, printer) + "]";
        }
        if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
          if (++depth > config2.maxDepth) {
            return "[" + stringedValue + "]";
          }
          return stringedValue + SPACE + "{" + (0, _collections.printObjectProperties)(val.sample, config2, indentation, depth, refs, printer) + "}";
        }
        if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
          return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
        }
        if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
          return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
        }
        return val.toAsymmetricMatcher();
      };
      exports.serialize = serialize;
      var test = (val) => val && val.$$typeof === asymmetricMatcher;
      exports.test = test;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/node_modules/ansi-regex/index.js
  var require_ansi_regex = __commonJS({
    "node_modules/pretty-format/node_modules/ansi-regex/index.js"(exports, module2) {
      "use strict";
      module2.exports = ({ onlyFirst = false } = {}) => {
        const pattern = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
        ].join("|");
        return new RegExp(pattern, onlyFirst ? void 0 : "g");
      };
    }
  });

  // node_modules/pretty-format/build/plugins/ConvertAnsi.js
  var require_ConvertAnsi = __commonJS({
    "node_modules/pretty-format/build/plugins/ConvertAnsi.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.serialize = exports.test = void 0;
      var _ansiRegex = _interopRequireDefault(require_ansi_regex());
      var _ansiStyles = _interopRequireDefault(require_ansi_styles());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
        switch (match) {
          case _ansiStyles.default.red.close:
          case _ansiStyles.default.green.close:
          case _ansiStyles.default.cyan.close:
          case _ansiStyles.default.gray.close:
          case _ansiStyles.default.white.close:
          case _ansiStyles.default.yellow.close:
          case _ansiStyles.default.bgRed.close:
          case _ansiStyles.default.bgGreen.close:
          case _ansiStyles.default.bgYellow.close:
          case _ansiStyles.default.inverse.close:
          case _ansiStyles.default.dim.close:
          case _ansiStyles.default.bold.close:
          case _ansiStyles.default.reset.open:
          case _ansiStyles.default.reset.close:
            return "</>";
          case _ansiStyles.default.red.open:
            return "<red>";
          case _ansiStyles.default.green.open:
            return "<green>";
          case _ansiStyles.default.cyan.open:
            return "<cyan>";
          case _ansiStyles.default.gray.open:
            return "<gray>";
          case _ansiStyles.default.white.open:
            return "<white>";
          case _ansiStyles.default.yellow.open:
            return "<yellow>";
          case _ansiStyles.default.bgRed.open:
            return "<bgRed>";
          case _ansiStyles.default.bgGreen.open:
            return "<bgGreen>";
          case _ansiStyles.default.bgYellow.open:
            return "<bgYellow>";
          case _ansiStyles.default.inverse.open:
            return "<inverse>";
          case _ansiStyles.default.dim.open:
            return "<dim>";
          case _ansiStyles.default.bold.open:
            return "<bold>";
          default:
            return "";
        }
      });
      var test = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
      exports.test = test;
      var serialize = (val, config2, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config2, indentation, depth, refs);
      exports.serialize = serialize;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/build/plugins/DOMCollection.js
  var require_DOMCollection = __commonJS({
    "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.serialize = exports.test = void 0;
      var _collections = require_collections();
      var SPACE = " ";
      var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
      var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
      var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
      var test = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
      exports.test = test;
      var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
      var serialize = (collection, config2, indentation, depth, refs, printer) => {
        const name = collection.constructor.name;
        if (++depth > config2.maxDepth) {
          return "[" + name + "]";
        }
        return (config2.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? "{" + (0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}) : { ...collection }, config2, indentation, depth, refs, printer) + "}" : "[" + (0, _collections.printListItems)(Array.from(collection), config2, indentation, depth, refs, printer) + "]");
      };
      exports.serialize = serialize;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/build/plugins/lib/escapeHTML.js
  var require_escapeHTML = __commonJS({
    "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = escapeHTML;
      function escapeHTML(str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    }
  });

  // node_modules/pretty-format/build/plugins/lib/markup.js
  var require_markup = __commonJS({
    "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printText = exports.printChildren = exports.printProps = void 0;
      var _escapeHTML = _interopRequireDefault(require_escapeHTML());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var printProps = (keys, props, config2, indentation, depth, refs, printer) => {
        const indentationNext = indentation + config2.indent;
        const colors = config2.colors;
        return keys.map((key) => {
          const value = props[key];
          let printed = printer(value, config2, indentationNext, depth, refs);
          if (typeof value !== "string") {
            if (printed.indexOf("\n") !== -1) {
              printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
            }
            printed = "{" + printed + "}";
          }
          return config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
        }).join("");
      };
      exports.printProps = printProps;
      var printChildren = (children, config2, indentation, depth, refs, printer) => children.map((child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer(child, config2, indentation, depth, refs))).join("");
      exports.printChildren = printChildren;
      var printText = (text, config2) => {
        const contentColor = config2.colors.content;
        return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
      };
      exports.printText = printText;
      var printComment = (comment, config2) => {
        const commentColor = config2.colors.comment;
        return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
      };
      exports.printComment = printComment;
      var printElement = (type, printedProps, printedChildren, config2, indentation) => {
        const tagColor = config2.colors.tag;
        return tagColor.open + "<" + type + (printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config2.spacingOuter + indentation + tagColor.open + "</" + type : (printedProps && !config2.min ? "" : " ") + "/") + ">" + tagColor.close;
      };
      exports.printElement = printElement;
      var printElementAsLeaf = (type, config2) => {
        const tagColor = config2.colors.tag;
        return tagColor.open + "<" + type + tagColor.close + " \u2026" + tagColor.open + " />" + tagColor.close;
      };
      exports.printElementAsLeaf = printElementAsLeaf;
    }
  });

  // node_modules/pretty-format/build/plugins/DOMElement.js
  var require_DOMElement = __commonJS({
    "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.serialize = exports.test = void 0;
      var _markup = require_markup();
      var ELEMENT_NODE = 1;
      var TEXT_NODE2 = 3;
      var COMMENT_NODE = 8;
      var FRAGMENT_NODE = 11;
      var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
      var testNode = (val) => {
        var _val$hasAttribute;
        const constructorName = val.constructor.name;
        const { nodeType, tagName } = val;
        const isCustomElement = typeof tagName === "string" && tagName.includes("-") || ((_val$hasAttribute = val.hasAttribute) === null || _val$hasAttribute === void 0 ? void 0 : _val$hasAttribute.call(val, "is"));
        return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE2 && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
      };
      var test = (val) => {
        var _val$constructor;
        return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
      };
      exports.test = test;
      function nodeIsText(node) {
        return node.nodeType === TEXT_NODE2;
      }
      function nodeIsComment(node) {
        return node.nodeType === COMMENT_NODE;
      }
      function nodeIsFragment(node) {
        return node.nodeType === FRAGMENT_NODE;
      }
      var serialize = (node, config2, indentation, depth, refs, printer) => {
        if (nodeIsText(node)) {
          return (0, _markup.printText)(node.data, config2);
        }
        if (nodeIsComment(node)) {
          return (0, _markup.printComment)(node.data, config2);
        }
        const type = nodeIsFragment(node) ? `DocumentFragment` : node.tagName.toLowerCase();
        if (++depth > config2.maxDepth) {
          return (0, _markup.printElementAsLeaf)(type, config2);
        }
        return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}), config2, indentation + config2.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config2, indentation + config2.indent, depth, refs, printer), config2, indentation);
      };
      exports.serialize = serialize;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/build/plugins/Immutable.js
  var require_Immutable = __commonJS({
    "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.test = exports.serialize = void 0;
      var _collections = require_collections();
      var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
      var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
      var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
      var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
      var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
      var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
      var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
      var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
      var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
      var getImmutableName = (name) => "Immutable." + name;
      var printAsLeaf = (name) => "[" + name + "]";
      var SPACE = " ";
      var LAZY = "\u2026";
      var printImmutableEntries = (val, config2, indentation, depth, refs, printer, type) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "{" + (0, _collections.printIteratorEntries)(val.entries(), config2, indentation, depth, refs, printer) + "}";
      function getRecordEntries(val) {
        let i = 0;
        return {
          next() {
            if (i < val._keys.length) {
              const key = val._keys[i++];
              return {
                done: false,
                value: [key, val.get(key)]
              };
            }
            return {
              done: true,
              value: void 0
            };
          }
        };
      }
      var printImmutableRecord = (val, config2, indentation, depth, refs, printer) => {
        const name = getImmutableName(val._name || "Record");
        return ++depth > config2.maxDepth ? printAsLeaf(name) : name + SPACE + "{" + (0, _collections.printIteratorEntries)(getRecordEntries(val), config2, indentation, depth, refs, printer) + "}";
      };
      var printImmutableSeq = (val, config2, indentation, depth, refs, printer) => {
        const name = getImmutableName("Seq");
        if (++depth > config2.maxDepth) {
          return printAsLeaf(name);
        }
        if (val[IS_KEYED_SENTINEL]) {
          return name + SPACE + "{" + (val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config2, indentation, depth, refs, printer) : LAZY) + "}";
        }
        return name + SPACE + "[" + (val._iter || val._array || val._collection || val._iterable ? (0, _collections.printIteratorValues)(val.values(), config2, indentation, depth, refs, printer) : LAZY) + "]";
      };
      var printImmutableValues = (val, config2, indentation, depth, refs, printer, type) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "[" + (0, _collections.printIteratorValues)(val.values(), config2, indentation, depth, refs, printer) + "]";
      var serialize = (val, config2, indentation, depth, refs, printer) => {
        if (val[IS_MAP_SENTINEL]) {
          return printImmutableEntries(val, config2, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
        }
        if (val[IS_LIST_SENTINEL]) {
          return printImmutableValues(val, config2, indentation, depth, refs, printer, "List");
        }
        if (val[IS_SET_SENTINEL]) {
          return printImmutableValues(val, config2, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
        }
        if (val[IS_STACK_SENTINEL]) {
          return printImmutableValues(val, config2, indentation, depth, refs, printer, "Stack");
        }
        if (val[IS_SEQ_SENTINEL]) {
          return printImmutableSeq(val, config2, indentation, depth, refs, printer);
        }
        return printImmutableRecord(val, config2, indentation, depth, refs, printer);
      };
      exports.serialize = serialize;
      var test = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
      exports.test = test;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          var REACT_FRAGMENT_TYPE = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          var hasWarnedAboutDeprecatedIsConcurrentMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isConcurrentMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                hasWarnedAboutDeprecatedIsConcurrentMode = true;
                console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement2(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement2;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_is_development();
      }
    }
  });

  // node_modules/pretty-format/build/plugins/ReactElement.js
  var require_ReactElement = __commonJS({
    "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.test = exports.serialize = void 0;
      var ReactIs = _interopRequireWildcard(require_react_is());
      var _markup = require_markup();
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = new WeakMap();
        _getRequireWildcardCache = function() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var getChildren = (arg, children = []) => {
        if (Array.isArray(arg)) {
          arg.forEach((item) => {
            getChildren(item, children);
          });
        } else if (arg != null && arg !== false) {
          children.push(arg);
        }
        return children;
      };
      var getType = (element) => {
        const type = element.type;
        if (typeof type === "string") {
          return type;
        }
        if (typeof type === "function") {
          return type.displayName || type.name || "Unknown";
        }
        if (ReactIs.isFragment(element)) {
          return "React.Fragment";
        }
        if (ReactIs.isSuspense(element)) {
          return "React.Suspense";
        }
        if (typeof type === "object" && type !== null) {
          if (ReactIs.isContextProvider(element)) {
            return "Context.Provider";
          }
          if (ReactIs.isContextConsumer(element)) {
            return "Context.Consumer";
          }
          if (ReactIs.isForwardRef(element)) {
            if (type.displayName) {
              return type.displayName;
            }
            const functionName = type.render.displayName || type.render.name || "";
            return functionName !== "" ? "ForwardRef(" + functionName + ")" : "ForwardRef";
          }
          if (ReactIs.isMemo(element)) {
            const functionName = type.displayName || type.type.displayName || type.type.name || "";
            return functionName !== "" ? "Memo(" + functionName + ")" : "Memo";
          }
        }
        return "UNDEFINED";
      };
      var getPropKeys = (element) => {
        const { props } = element;
        return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
      };
      var serialize = (element, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config2) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config2, indentation + config2.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config2, indentation + config2.indent, depth, refs, printer), config2, indentation);
      exports.serialize = serialize;
      var test = (val) => val && ReactIs.isElement(val);
      exports.test = test;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/build/plugins/ReactTestComponent.js
  var require_ReactTestComponent = __commonJS({
    "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.test = exports.serialize = void 0;
      var _markup = require_markup();
      var Symbol2 = window["jest-symbol-do-not-touch"] || window.Symbol;
      var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
      var getPropKeys = (object) => {
        const { props } = object;
        return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
      };
      var serialize = (object, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config2) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config2, indentation + config2.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config2, indentation + config2.indent, depth, refs, printer) : "", config2, indentation);
      exports.serialize = serialize;
      var test = (val) => val && val.$$typeof === testSymbol;
      exports.test = test;
      var plugin = {
        serialize,
        test
      };
      var _default = plugin;
      exports.default = _default;
    }
  });

  // node_modules/pretty-format/build/index.js
  var require_build = __commonJS({
    "node_modules/pretty-format/build/index.js"(exports, module2) {
      "use strict";
      var _ansiStyles = _interopRequireDefault(require_ansi_styles());
      var _collections = require_collections();
      var _AsymmetricMatcher = _interopRequireDefault(require_AsymmetricMatcher());
      var _ConvertAnsi = _interopRequireDefault(require_ConvertAnsi());
      var _DOMCollection = _interopRequireDefault(require_DOMCollection());
      var _DOMElement = _interopRequireDefault(require_DOMElement());
      var _Immutable = _interopRequireDefault(require_Immutable());
      var _ReactElement = _interopRequireDefault(require_ReactElement());
      var _ReactTestComponent = _interopRequireDefault(require_ReactTestComponent());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var toString = Object.prototype.toString;
      var toISOString = Date.prototype.toISOString;
      var errorToString = Error.prototype.toString;
      var regExpToString = RegExp.prototype.toString;
      var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
      var isWindow = (val) => typeof window !== "undefined" && val === window;
      var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
      var NEWLINE_REGEXP = /\n/gi;
      var PrettyFormatPluginError = class extends Error {
        constructor(message, stack) {
          super(message);
          this.stack = stack;
          this.name = this.constructor.name;
        }
      };
      function isToStringedArrayType(toStringed) {
        return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
      }
      function printNumber(val) {
        return Object.is(val, -0) ? "-0" : String(val);
      }
      function printBigInt(val) {
        return String(`${val}n`);
      }
      function printFunction(val, printFunctionName) {
        if (!printFunctionName) {
          return "[Function]";
        }
        return "[Function " + (val.name || "anonymous") + "]";
      }
      function printSymbol(val) {
        return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
      }
      function printError(val) {
        return "[" + errorToString.call(val) + "]";
      }
      function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
        if (val === true || val === false) {
          return "" + val;
        }
        if (val === void 0) {
          return "undefined";
        }
        if (val === null) {
          return "null";
        }
        const typeOf = typeof val;
        if (typeOf === "number") {
          return printNumber(val);
        }
        if (typeOf === "bigint") {
          return printBigInt(val);
        }
        if (typeOf === "string") {
          if (escapeString) {
            return '"' + val.replace(/"|\\/g, "\\$&") + '"';
          }
          return '"' + val + '"';
        }
        if (typeOf === "function") {
          return printFunction(val, printFunctionName);
        }
        if (typeOf === "symbol") {
          return printSymbol(val);
        }
        const toStringed = toString.call(val);
        if (toStringed === "[object WeakMap]") {
          return "WeakMap {}";
        }
        if (toStringed === "[object WeakSet]") {
          return "WeakSet {}";
        }
        if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
          return printFunction(val, printFunctionName);
        }
        if (toStringed === "[object Symbol]") {
          return printSymbol(val);
        }
        if (toStringed === "[object Date]") {
          return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
        }
        if (toStringed === "[object Error]") {
          return printError(val);
        }
        if (toStringed === "[object RegExp]") {
          if (escapeRegex) {
            return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          return regExpToString.call(val);
        }
        if (val instanceof Error) {
          return printError(val);
        }
        return null;
      }
      function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
        if (refs.indexOf(val) !== -1) {
          return "[Circular]";
        }
        refs = refs.slice();
        refs.push(val);
        const hitMaxDepth = ++depth > config2.maxDepth;
        const min = config2.min;
        if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
          return printer(val.toJSON(), config2, indentation, depth, refs, true);
        }
        const toStringed = toString.call(val);
        if (toStringed === "[object Arguments]") {
          return hitMaxDepth ? "[Arguments]" : (min ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(val, config2, indentation, depth, refs, printer) + "]";
        }
        if (isToStringedArrayType(toStringed)) {
          return hitMaxDepth ? "[" + val.constructor.name + "]" : (min ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(val, config2, indentation, depth, refs, printer) + "]";
        }
        if (toStringed === "[object Map]") {
          return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(val.entries(), config2, indentation, depth, refs, printer, " => ") + "}";
        }
        if (toStringed === "[object Set]") {
          return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(val.values(), config2, indentation, depth, refs, printer) + "}";
        }
        return hitMaxDepth || isWindow(val) ? "[" + getConstructorName(val) + "]" : (min ? "" : getConstructorName(val) + " ") + "{" + (0, _collections.printObjectProperties)(val, config2, indentation, depth, refs, printer) + "}";
      }
      function isNewPlugin(plugin) {
        return plugin.serialize != null;
      }
      function printPlugin(plugin, val, config2, indentation, depth, refs) {
        let printed;
        try {
          printed = isNewPlugin(plugin) ? plugin.serialize(val, config2, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config2, indentation, depth, refs), (str) => {
            const indentationNext = indentation + config2.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
          }, {
            edgeSpacing: config2.spacingOuter,
            min: config2.min,
            spacing: config2.spacingInner
          }, config2.colors);
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
        if (typeof printed !== "string") {
          throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
        }
        return printed;
      }
      function findPlugin(plugins, val) {
        for (let p = 0; p < plugins.length; p++) {
          try {
            if (plugins[p].test(val)) {
              return plugins[p];
            }
          } catch (error) {
            throw new PrettyFormatPluginError(error.message, error.stack);
          }
        }
        return null;
      }
      function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
        const plugin = findPlugin(config2.plugins, val);
        if (plugin !== null) {
          return printPlugin(plugin, val, config2, indentation, depth, refs);
        }
        const basicResult = printBasicValue(val, config2.printFunctionName, config2.escapeRegex, config2.escapeString);
        if (basicResult !== null) {
          return basicResult;
        }
        return printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON);
      }
      var DEFAULT_THEME = {
        comment: "gray",
        content: "reset",
        prop: "yellow",
        tag: "cyan",
        value: "green"
      };
      var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
      var DEFAULT_OPTIONS = {
        callToJSON: true,
        escapeRegex: false,
        escapeString: true,
        highlight: false,
        indent: 2,
        maxDepth: Infinity,
        min: false,
        plugins: [],
        printFunctionName: true,
        theme: DEFAULT_THEME
      };
      function validateOptions(options) {
        Object.keys(options).forEach((key) => {
          if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
            throw new Error(`pretty-format: Unknown option "${key}".`);
          }
        });
        if (options.min && options.indent !== void 0 && options.indent !== 0) {
          throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
        }
        if (options.theme !== void 0) {
          if (options.theme === null) {
            throw new Error(`pretty-format: Option "theme" must not be null.`);
          }
          if (typeof options.theme !== "object") {
            throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
          }
        }
      }
      var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
        const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
        const color = value && _ansiStyles.default[value];
        if (color && typeof color.close === "string" && typeof color.open === "string") {
          colors[key] = color;
        } else {
          throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
        }
        return colors;
      }, Object.create(null));
      var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
        colors[key] = {
          close: "",
          open: ""
        };
        return colors;
      }, Object.create(null));
      var getPrintFunctionName = (options) => options && options.printFunctionName !== void 0 ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
      var getEscapeRegex = (options) => options && options.escapeRegex !== void 0 ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
      var getEscapeString = (options) => options && options.escapeString !== void 0 ? options.escapeString : DEFAULT_OPTIONS.escapeString;
      var getConfig2 = (options) => ({
        callToJSON: options && options.callToJSON !== void 0 ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
        colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: options && options.min ? "" : createIndent(options && options.indent !== void 0 ? options.indent : DEFAULT_OPTIONS.indent),
        maxDepth: options && options.maxDepth !== void 0 ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
        min: options && options.min !== void 0 ? options.min : DEFAULT_OPTIONS.min,
        plugins: options && options.plugins !== void 0 ? options.plugins : DEFAULT_OPTIONS.plugins,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: options && options.min ? " " : "\n",
        spacingOuter: options && options.min ? "" : "\n"
      });
      function createIndent(indent) {
        return new Array(indent + 1).join(" ");
      }
      function prettyFormat2(val, options) {
        if (options) {
          validateOptions(options);
          if (options.plugins) {
            const plugin = findPlugin(options.plugins, val);
            if (plugin !== null) {
              return printPlugin(plugin, val, getConfig2(options), "", 0, []);
            }
          }
        }
        const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
        if (basicResult !== null) {
          return basicResult;
        }
        return printComplexValue(val, getConfig2(options), "", 0, []);
      }
      prettyFormat2.plugins = {
        AsymmetricMatcher: _AsymmetricMatcher.default,
        ConvertAnsi: _ConvertAnsi.default,
        DOMCollection: _DOMCollection.default,
        DOMElement: _DOMElement.default,
        Immutable: _Immutable.default,
        ReactElement: _ReactElement.default,
        ReactTestComponent: _ReactTestComponent.default
      };
      module2.exports = prettyFormat2;
    }
  });

  // node_modules/@testing-library/dom/dist/get-user-code-frame.js
  var require_get_user_code_frame = __commonJS({
    "node_modules/@testing-library/dom/dist/get-user-code-frame.js"(exports, module2) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getUserCodeFrame = getUserCodeFrame2;
      var chalk2 = null;
      var readFileSync2 = null;
      var codeFrameColumns2 = null;
      try {
        const nodeRequire = module2 && module2.require;
        readFileSync2 = nodeRequire.call(module2, "fs").readFileSync;
        codeFrameColumns2 = nodeRequire.call(module2, "@babel/code-frame").codeFrameColumns;
        chalk2 = nodeRequire.call(module2, "chalk");
      } catch {
      }
      function getCodeFrame2(frame) {
        const locationStart = frame.indexOf("(") + 1;
        const locationEnd = frame.indexOf(")");
        const frameLocation = frame.slice(locationStart, locationEnd);
        const frameLocationElements = frameLocation.split(":");
        const [filename, line, column] = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)];
        let rawFileContents = "";
        try {
          rawFileContents = readFileSync2(filename, "utf-8");
        } catch {
          return "";
        }
        const codeFrame = codeFrameColumns2(rawFileContents, {
          start: {
            line,
            column
          }
        }, {
          highlightCode: true,
          linesBelow: 0
        });
        return `${chalk2.dim(frameLocation)}
${codeFrame}
`;
      }
      function getUserCodeFrame2() {
        if (!readFileSync2 || !codeFrameColumns2) {
          return "";
        }
        const err = new Error();
        const firstClientCodeFrame = err.stack.split("\n").slice(1).find((frame) => !frame.includes("node_modules/"));
        return getCodeFrame2(firstClientCodeFrame);
      }
    }
  });

  // node_modules/@testing-library/dom/dist/helpers.js
  var require_helpers = __commonJS({
    "node_modules/@testing-library/dom/dist/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getWindowFromNode = getWindowFromNode2;
      exports.getDocument = getDocument2;
      exports.runWithRealTimers = runWithRealTimers2;
      exports.checkContainerType = checkContainerType2;
      exports.jestFakeTimersAreEnabled = jestFakeTimersAreEnabled2;
      exports.TEXT_NODE = exports.setTimeout = exports.setImmediate = exports.clearTimeout = void 0;
      var globalObj2 = typeof window === "undefined" ? window : window;
      var TEXT_NODE2 = 3;
      exports.TEXT_NODE = TEXT_NODE2;
      function runWithRealTimers2(callback) {
        return hasJestTimers2() ? runWithJestRealTimers2(callback).callbackReturnValue : callback();
      }
      function hasJestTimers2() {
        return typeof jest !== "undefined" && jest !== null && typeof jest.useRealTimers === "function";
      }
      function runWithJestRealTimers2(callback) {
        const timerAPI = {
          clearInterval,
          clearTimeout,
          setInterval,
          setTimeout
        };
        if (typeof setImmediate === "function") {
          timerAPI.setImmediate = setImmediate;
        }
        if (typeof clearImmediate === "function") {
          timerAPI.clearImmediate = clearImmediate;
        }
        jest.useRealTimers();
        const callbackReturnValue = callback();
        const usedFakeTimers = Object.entries(timerAPI).some(([name, func]) => func !== globalObj2[name]);
        if (usedFakeTimers) {
          var _timerAPI$setTimeout;
          jest.useFakeTimers((_timerAPI$setTimeout = timerAPI.setTimeout) != null && _timerAPI$setTimeout.clock ? "modern" : "legacy");
        }
        return {
          callbackReturnValue,
          usedFakeTimers
        };
      }
      function jestFakeTimersAreEnabled2() {
        return hasJestTimers2() ? runWithJestRealTimers2(() => {
        }).usedFakeTimers : false;
      }
      function setImmediatePolyfill2(fn) {
        return globalObj2.setTimeout(fn, 0);
      }
      function getTimeFunctions2() {
        return {
          clearTimeoutFn: globalObj2.clearTimeout,
          setImmediateFn: globalObj2.setImmediate || setImmediatePolyfill2,
          setTimeoutFn: globalObj2.setTimeout
        };
      }
      var {
        clearTimeoutFn: clearTimeoutFn2,
        setImmediateFn: setImmediateFn2,
        setTimeoutFn: setTimeoutFn2
      } = runWithRealTimers2(getTimeFunctions2);
      exports.setTimeout = setTimeoutFn2;
      exports.setImmediate = setImmediateFn2;
      exports.clearTimeout = clearTimeoutFn2;
      function getDocument2() {
        if (typeof window === "undefined") {
          throw new Error("Could not find default container");
        }
        return window.document;
      }
      function getWindowFromNode2(node) {
        if (node.defaultView) {
          return node.defaultView;
        } else if (node.ownerDocument && node.ownerDocument.defaultView) {
          return node.ownerDocument.defaultView;
        } else if (node.window) {
          return node.window;
        } else if (node.then instanceof Function) {
          throw new Error(`It looks like you passed a Promise object instead of a DOM node. Did you do something like \`fireEvent.click(screen.findBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`, or await the findBy query \`fireEvent.click(await screen.findBy...\`?`);
        } else if (Array.isArray(node)) {
          throw new Error(`It looks like you passed an Array instead of a DOM node. Did you do something like \`fireEvent.click(screen.getAllBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`?`);
        } else if (typeof node.debug === "function" && typeof node.logTestingPlaygroundURL === "function") {
          throw new Error(`It looks like you passed a \`screen\` object. Did you do something like \`fireEvent.click(screen, ...\` when you meant to use a query, e.g. \`fireEvent.click(screen.getBy..., \`?`);
        } else {
          throw new Error(`Unable to find the "window" object for the given node. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new`);
        }
      }
      function checkContainerType2(container) {
        if (!container || !(typeof container.querySelector === "function") || !(typeof container.querySelectorAll === "function")) {
          throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${getTypeName(container)}.`);
        }
        function getTypeName(object) {
          if (typeof object === "object") {
            return object === null ? "null" : object.constructor.name;
          }
          return typeof object;
        }
      }
    }
  });

  // node_modules/@testing-library/dom/dist/pretty-dom.js
  var require_pretty_dom = __commonJS({
    "node_modules/@testing-library/dom/dist/pretty-dom.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.prettyDOM = prettyDOM2;
      Object.defineProperty(exports, "prettyFormat", {
        enumerable: true,
        get: function() {
          return _prettyFormat.default;
        }
      });
      exports.logDOM = void 0;
      var _prettyFormat = _interopRequireDefault(require_build());
      var _getUserCodeFrame = require_get_user_code_frame();
      var _helpers = require_helpers();
      function inCypress2(dom) {
        const window2 = dom.ownerDocument && dom.ownerDocument.defaultView || void 0;
        return typeof window2 !== "undefined" && window2.Cypress || typeof window2 !== "undefined" && window2.Cypress;
      }
      var inNode3 = () => typeof process !== "undefined" && process.versions !== void 0 && process.versions.node !== void 0;
      var getMaxLength3 = (dom) => inCypress2(dom) ? 0 : typeof process !== "undefined" && process.env.DEBUG_PRINT_LIMIT || 7e3;
      var {
        DOMElement: DOMElement2,
        DOMCollection: DOMCollection2
      } = _prettyFormat.default.plugins;
      function prettyDOM2(dom, maxLength, options) {
        if (!dom) {
          dom = (0, _helpers.getDocument)().body;
        }
        if (typeof maxLength !== "number") {
          maxLength = getMaxLength3(dom);
        }
        if (maxLength === 0) {
          return "";
        }
        if (dom.documentElement) {
          dom = dom.documentElement;
        }
        let domTypeName = typeof dom;
        if (domTypeName === "object") {
          domTypeName = dom.constructor.name;
        } else {
          dom = {};
        }
        if (!("outerHTML" in dom)) {
          throw new TypeError(`Expected an element or document but got ${domTypeName}`);
        }
        const debugContent = (0, _prettyFormat.default)(dom, {
          plugins: [DOMElement2, DOMCollection2],
          printFunctionName: false,
          highlight: inNode3(),
          ...options
        });
        return maxLength !== void 0 && dom.outerHTML.length > maxLength ? `${debugContent.slice(0, maxLength)}...` : debugContent;
      }
      var logDOM3 = (...args) => {
        const userCodeFrame = (0, _getUserCodeFrame.getUserCodeFrame)();
        if (userCodeFrame) {
          console.log(`${prettyDOM2(...args)}

${userCodeFrame}`);
        } else {
          console.log(prettyDOM2(...args));
        }
      };
      exports.logDOM = logDOM3;
    }
  });

  // node_modules/@testing-library/dom/dist/config.js
  var require_config = __commonJS({
    "node_modules/@testing-library/dom/dist/config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.runWithExpensiveErrorDiagnosticsDisabled = runWithExpensiveErrorDiagnosticsDisabled2;
      exports.configure = configure;
      exports.getConfig = getConfig2;
      exports.DEFAULT_IGNORE_TAGS = void 0;
      var _prettyDom = require_pretty_dom();
      var config2 = {
        testIdAttribute: "data-testid",
        asyncUtilTimeout: 1e3,
        asyncWrapper: (cb) => cb(),
        eventWrapper: (cb) => cb(),
        defaultHidden: false,
        showOriginalStackTrace: false,
        throwSuggestions: false,
        getElementError(message, container) {
          const error = new Error([message, (0, _prettyDom.prettyDOM)(container)].filter(Boolean).join("\n\n"));
          error.name = "TestingLibraryElementError";
          return error;
        },
        _disableExpensiveErrorDiagnostics: false,
        computedStyleSupportsPseudoElements: false
      };
      var DEFAULT_IGNORE_TAGS2 = "script, style";
      exports.DEFAULT_IGNORE_TAGS = DEFAULT_IGNORE_TAGS2;
      function runWithExpensiveErrorDiagnosticsDisabled2(callback) {
        try {
          config2._disableExpensiveErrorDiagnostics = true;
          return callback();
        } finally {
          config2._disableExpensiveErrorDiagnostics = false;
        }
      }
      function configure(newConfig) {
        if (typeof newConfig === "function") {
          newConfig = newConfig(config2);
        }
        config2 = {
          ...config2,
          ...newConfig
        };
      }
      function getConfig2() {
        return config2;
      }
    }
  });

  // node_modules/@testing-library/dom/dist/label-helpers.js
  var require_label_helpers = __commonJS({
    "node_modules/@testing-library/dom/dist/label-helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getLabels = getLabels3;
      exports.getRealLabels = getRealLabels2;
      exports.getLabelContent = getLabelContent2;
      var _helpers = require_helpers();
      var labelledNodeNames2 = ["button", "meter", "output", "progress", "select", "textarea", "input"];
      function getTextContent2(node) {
        if (labelledNodeNames2.includes(node.nodeName.toLowerCase())) {
          return "";
        }
        if (node.nodeType === _helpers.TEXT_NODE)
          return node.textContent;
        return Array.from(node.childNodes).map((childNode) => getTextContent2(childNode)).join("");
      }
      function getLabelContent2(element) {
        let textContent;
        if (element.tagName.toLowerCase() === "label") {
          textContent = getTextContent2(element);
        } else {
          textContent = element.value || element.textContent;
        }
        return textContent;
      }
      function getRealLabels2(element) {
        if (element.labels !== void 0) {
          var _labels;
          return (_labels = element.labels) != null ? _labels : [];
        }
        if (!isLabelable2(element))
          return [];
        const labels = element.ownerDocument.querySelectorAll("label");
        return Array.from(labels).filter((label) => label.control === element);
      }
      function isLabelable2(element) {
        return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === "INPUT" && element.getAttribute("type") !== "hidden";
      }
      function getLabels3(container, element, {
        selector = "*"
      } = {}) {
        const ariaLabelledBy = element.getAttribute("aria-labelledby");
        const labelsId = ariaLabelledBy ? ariaLabelledBy.split(" ") : [];
        return labelsId.length ? labelsId.map((labelId) => {
          const labellingElement = container.querySelector(`[id="${labelId}"]`);
          return labellingElement ? {
            content: getLabelContent2(labellingElement),
            formControl: null
          } : {
            content: "",
            formControl: null
          };
        }) : Array.from(getRealLabels2(element)).map((label) => {
          const textToMatch = getLabelContent2(label);
          const formControlSelector = "button, input, meter, output, progress, select, textarea";
          const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter((formControlElement) => formControlElement.matches(selector))[0];
          return {
            content: textToMatch,
            formControl: labelledFormControl
          };
        });
      }
    }
  });

  // node_modules/@testing-library/dom/dist/matches.js
  var require_matches = __commonJS({
    "node_modules/@testing-library/dom/dist/matches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.fuzzyMatches = fuzzyMatches2;
      exports.matches = matches2;
      exports.getDefaultNormalizer = getDefaultNormalizer2;
      exports.makeNormalizer = makeNormalizer2;
      function assertNotNullOrUndefined2(matcher) {
        if (matcher === null || matcher === void 0) {
          throw new Error(`It looks like ${matcher} was passed instead of a matcher. Did you do something like getByText(${matcher})?`);
        }
      }
      function fuzzyMatches2(textToMatch, node, matcher, normalizer) {
        if (typeof textToMatch !== "string") {
          return false;
        }
        assertNotNullOrUndefined2(matcher);
        const normalizedText = normalizer(textToMatch);
        if (typeof matcher === "string" || typeof matcher === "number") {
          return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
        } else if (typeof matcher === "function") {
          return matcher(normalizedText, node);
        } else {
          return matcher.test(normalizedText);
        }
      }
      function matches2(textToMatch, node, matcher, normalizer) {
        if (typeof textToMatch !== "string") {
          return false;
        }
        assertNotNullOrUndefined2(matcher);
        const normalizedText = normalizer(textToMatch);
        if (matcher instanceof Function) {
          return matcher(normalizedText, node);
        } else if (matcher instanceof RegExp) {
          return matcher.test(normalizedText);
        } else {
          return normalizedText === String(matcher);
        }
      }
      function getDefaultNormalizer2({
        trim = true,
        collapseWhitespace = true
      } = {}) {
        return (text) => {
          let normalizedText = text;
          normalizedText = trim ? normalizedText.trim() : normalizedText;
          normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, " ") : normalizedText;
          return normalizedText;
        };
      }
      function makeNormalizer2({
        trim,
        collapseWhitespace,
        normalizer
      }) {
        if (normalizer) {
          if (typeof trim !== "undefined" || typeof collapseWhitespace !== "undefined") {
            throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
          }
          return normalizer;
        } else {
          return getDefaultNormalizer2({
            trim,
            collapseWhitespace
          });
        }
      }
    }
  });

  // node_modules/@testing-library/dom/dist/get-node-text.js
  var require_get_node_text = __commonJS({
    "node_modules/@testing-library/dom/dist/get-node-text.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getNodeText = getNodeText2;
      var _helpers = require_helpers();
      function getNodeText2(node) {
        if (node.matches("input[type=submit], input[type=button]")) {
          return node.value;
        }
        return Array.from(node.childNodes).filter((child) => child.nodeType === _helpers.TEXT_NODE && Boolean(child.textContent)).map((c) => c.textContent).join("");
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/polyfills/array.from.js
  var require_array_from = __commonJS({
    "node_modules/dom-accessibility-api/dist/polyfills/array.from.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.default = arrayFrom2;
      var toStr2 = Object.prototype.toString;
      function isCallable2(fn) {
        return typeof fn === "function" || toStr2.call(fn) === "[object Function]";
      }
      function toInteger2(value) {
        var number = Number(value);
        if (isNaN(number)) {
          return 0;
        }
        if (number === 0 || !isFinite(number)) {
          return number;
        }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      }
      var maxSafeInteger2 = Math.pow(2, 53) - 1;
      function toLength2(value) {
        var len = toInteger2(value);
        return Math.min(Math.max(len, 0), maxSafeInteger2);
      }
      function arrayFrom2(arrayLike, mapFn) {
        var C = Array;
        var items = Object(arrayLike);
        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        }
        if (typeof mapFn !== "undefined") {
          if (!isCallable2(mapFn)) {
            throw new TypeError("Array.from: when provided, the second argument must be a function");
          }
        }
        var len = toLength2(items.length);
        var A = isCallable2(C) ? Object(new C(len)) : new Array(len);
        var k = 0;
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = mapFn(kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        A.length = len;
        return A;
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/polyfills/SetLike.js
  var require_SetLike = __commonJS({
    "node_modules/dom-accessibility-api/dist/polyfills/SetLike.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.default = void 0;
      function _classCallCheck2(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties2(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass2(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties2(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties2(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty2(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var SetLike2 = /* @__PURE__ */ function() {
        function SetLike3() {
          var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          _classCallCheck2(this, SetLike3);
          _defineProperty2(this, "items", void 0);
          this.items = items;
        }
        _createClass2(SetLike3, [{
          key: "add",
          value: function add(value) {
            if (this.has(value) === false) {
              this.items.push(value);
            }
            return this;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.items = [];
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var previousLength = this.items.length;
            this.items = this.items.filter(function(item) {
              return item !== value;
            });
            return previousLength !== this.items.length;
          }
        }, {
          key: "forEach",
          value: function forEach(callbackfn) {
            var _this = this;
            this.items.forEach(function(item) {
              callbackfn(item, item, _this);
            });
          }
        }, {
          key: "has",
          value: function has(value) {
            return this.items.indexOf(value) !== -1;
          }
        }, {
          key: "size",
          get: function get() {
            return this.items.length;
          }
        }]);
        return SetLike3;
      }();
      var _default = typeof Set === "undefined" ? Set : SetLike2;
      exports.default = _default;
    }
  });

  // node_modules/dom-accessibility-api/dist/getRole.js
  var require_getRole = __commonJS({
    "node_modules/dom-accessibility-api/dist/getRole.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.default = getRole2;
      var _util = require_util();
      function _slicedToArray2(arr, i) {
        return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
      }
      function _nonIterableRest2() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray3(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray3(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray3(o, minLen);
      }
      function _arrayLikeToArray3(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function _iterableToArrayLimit2(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles2(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      var localNameToRoleMappings2 = {
        article: "article",
        aside: "complementary",
        body: "document",
        button: "button",
        datalist: "listbox",
        dd: "definition",
        details: "group",
        dialog: "dialog",
        dt: "term",
        fieldset: "group",
        figure: "figure",
        form: "form",
        footer: "contentinfo",
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: "banner",
        hr: "separator",
        legend: "legend",
        li: "listitem",
        math: "math",
        main: "main",
        menu: "list",
        nav: "navigation",
        ol: "list",
        optgroup: "group",
        option: "option",
        output: "status",
        progress: "progressbar",
        section: "region",
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        textarea: "textbox",
        tfoot: "rowgroup",
        td: "cell",
        th: "columnheader",
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      };
      var prohibitedAttributes2 = {
        caption: new Set(["aria-label", "aria-labelledby"]),
        code: new Set(["aria-label", "aria-labelledby"]),
        deletion: new Set(["aria-label", "aria-labelledby"]),
        emphasis: new Set(["aria-label", "aria-labelledby"]),
        generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
        insertion: new Set(["aria-label", "aria-labelledby"]),
        paragraph: new Set(["aria-label", "aria-labelledby"]),
        presentation: new Set(["aria-label", "aria-labelledby"]),
        strong: new Set(["aria-label", "aria-labelledby"]),
        subscript: new Set(["aria-label", "aria-labelledby"]),
        superscript: new Set(["aria-label", "aria-labelledby"])
      };
      function hasGlobalAriaAttributes2(element, role) {
        return [
          "aria-atomic",
          "aria-busy",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-dropeffect",
          "aria-flowto",
          "aria-grabbed",
          "aria-hidden",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-live",
          "aria-owns",
          "aria-relevant",
          "aria-roledescription"
        ].some(function(attributeName) {
          var _prohibitedAttributes;
          return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes2[role]) === null || _prohibitedAttributes === void 0 ? void 0 : _prohibitedAttributes.has(attributeName));
        });
      }
      function ignorePresentationalRole2(element, implicitRole) {
        return hasGlobalAriaAttributes2(element, implicitRole);
      }
      function getRole2(element) {
        var explicitRole = getExplicitRole2(element);
        if (explicitRole === null || explicitRole === "presentation") {
          var implicitRole = getImplicitRole2(element);
          if (explicitRole !== "presentation" || ignorePresentationalRole2(element, implicitRole || "")) {
            return implicitRole;
          }
        }
        return explicitRole;
      }
      function getImplicitRole2(element) {
        var mappedByTag = localNameToRoleMappings2[(0, _util.getLocalName)(element)];
        if (mappedByTag !== void 0) {
          return mappedByTag;
        }
        switch ((0, _util.getLocalName)(element)) {
          case "a":
          case "area":
          case "link":
            if (element.hasAttribute("href")) {
              return "link";
            }
            break;
          case "img":
            if (element.getAttribute("alt") === "" && !ignorePresentationalRole2(element, "img")) {
              return "presentation";
            }
            return "img";
          case "input": {
            var _ref = element, type = _ref.type;
            switch (type) {
              case "button":
              case "image":
              case "reset":
              case "submit":
                return "button";
              case "checkbox":
              case "radio":
                return type;
              case "range":
                return "slider";
              case "email":
              case "tel":
              case "text":
              case "url":
                if (element.hasAttribute("list")) {
                  return "combobox";
                }
                return "textbox";
              case "search":
                if (element.hasAttribute("list")) {
                  return "combobox";
                }
                return "searchbox";
              default:
                return null;
            }
          }
          case "select":
            if (element.hasAttribute("multiple") || element.size > 1) {
              return "listbox";
            }
            return "combobox";
        }
        return null;
      }
      function getExplicitRole2(element) {
        if (element.hasAttribute("role")) {
          var _trim$split = element.getAttribute("role").trim().split(" "), _trim$split2 = _slicedToArray2(_trim$split, 1), explicitRole = _trim$split2[0];
          if (explicitRole !== void 0 && explicitRole.length > 0) {
            return explicitRole;
          }
        }
        return null;
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/util.js
  var require_util = __commonJS({
    "node_modules/dom-accessibility-api/dist/util.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.getLocalName = getLocalName2;
      exports.isElement = isElement2;
      exports.isHTMLTableCaptionElement = isHTMLTableCaptionElement2;
      exports.isHTMLInputElement = isHTMLInputElement2;
      exports.isHTMLSelectElement = isHTMLSelectElement2;
      exports.isHTMLTableElement = isHTMLTableElement2;
      exports.isHTMLTextAreaElement = isHTMLTextAreaElement2;
      exports.safeWindow = safeWindow2;
      exports.isHTMLFieldSetElement = isHTMLFieldSetElement2;
      exports.isHTMLLegendElement = isHTMLLegendElement2;
      exports.isHTMLSlotElement = isHTMLSlotElement2;
      exports.isSVGElement = isSVGElement2;
      exports.isSVGSVGElement = isSVGSVGElement2;
      exports.isSVGTitleElement = isSVGTitleElement2;
      exports.queryIdRefs = queryIdRefs2;
      exports.hasAnyConcreteRoles = hasAnyConcreteRoles2;
      var _getRole = _interopRequireDefault(require_getRole());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getLocalName2(element) {
        var _element$localName;
        return (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName : element.tagName.toLowerCase();
      }
      function isElement2(node) {
        return node !== null && node.nodeType === node.ELEMENT_NODE;
      }
      function isHTMLTableCaptionElement2(node) {
        return isElement2(node) && getLocalName2(node) === "caption";
      }
      function isHTMLInputElement2(node) {
        return isElement2(node) && getLocalName2(node) === "input";
      }
      function isHTMLSelectElement2(node) {
        return isElement2(node) && getLocalName2(node) === "select";
      }
      function isHTMLTableElement2(node) {
        return isElement2(node) && getLocalName2(node) === "table";
      }
      function isHTMLTextAreaElement2(node) {
        return isElement2(node) && getLocalName2(node) === "textarea";
      }
      function safeWindow2(node) {
        var _ref = node.ownerDocument === null ? node : node.ownerDocument, defaultView = _ref.defaultView;
        if (defaultView === null) {
          throw new TypeError("no window available");
        }
        return defaultView;
      }
      function isHTMLFieldSetElement2(node) {
        return isElement2(node) && getLocalName2(node) === "fieldset";
      }
      function isHTMLLegendElement2(node) {
        return isElement2(node) && getLocalName2(node) === "legend";
      }
      function isHTMLSlotElement2(node) {
        return isElement2(node) && getLocalName2(node) === "slot";
      }
      function isSVGElement2(node) {
        return isElement2(node) && node.ownerSVGElement !== void 0;
      }
      function isSVGSVGElement2(node) {
        return isElement2(node) && getLocalName2(node) === "svg";
      }
      function isSVGTitleElement2(node) {
        return isSVGElement2(node) && getLocalName2(node) === "title";
      }
      function queryIdRefs2(node, attributeName) {
        if (isElement2(node) && node.hasAttribute(attributeName)) {
          var ids = node.getAttribute(attributeName).split(" ");
          return ids.map(function(id) {
            return node.ownerDocument.getElementById(id);
          }).filter(function(element) {
            return element !== null;
          });
        }
        return [];
      }
      function hasAnyConcreteRoles2(node, roles2) {
        if (isElement2(node)) {
          return roles2.indexOf((0, _getRole.default)(node)) !== -1;
        }
        return false;
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/accessible-name-and-description.js
  var require_accessible_name_and_description = __commonJS({
    "node_modules/dom-accessibility-api/dist/accessible-name-and-description.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.computeTextAlternative = computeTextAlternative2;
      var _array = _interopRequireDefault(require_array_from());
      var _SetLike = _interopRequireDefault(require_SetLike());
      var _util = require_util();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function asFlatString2(s) {
        return s.trim().replace(/\s\s+/g, " ");
      }
      function isHidden2(node, getComputedStyleImplementation) {
        if (!(0, _util.isElement)(node)) {
          return false;
        }
        if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
          return true;
        }
        var style = getComputedStyleImplementation(node);
        return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
      }
      function isControl2(node) {
        return (0, _util.hasAnyConcreteRoles)(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole2(node, "range");
      }
      function hasAbstractRole2(node, role) {
        if (!(0, _util.isElement)(node)) {
          return false;
        }
        switch (role) {
          case "range":
            return (0, _util.hasAnyConcreteRoles)(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
          default:
            throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
        }
      }
      function querySelectorAllSubtree2(element, selectors) {
        var elements = (0, _array.default)(element.querySelectorAll(selectors));
        (0, _util.queryIdRefs)(element, "aria-owns").forEach(function(root) {
          elements.push.apply(elements, (0, _array.default)(root.querySelectorAll(selectors)));
        });
        return elements;
      }
      function querySelectedOptions2(listbox) {
        if ((0, _util.isHTMLSelectElement)(listbox)) {
          return listbox.selectedOptions || querySelectorAllSubtree2(listbox, "[selected]");
        }
        return querySelectorAllSubtree2(listbox, '[aria-selected="true"]');
      }
      function isMarkedPresentational2(node) {
        return (0, _util.hasAnyConcreteRoles)(node, ["none", "presentation"]);
      }
      function isNativeHostLanguageTextAlternativeElement2(node) {
        return (0, _util.isHTMLTableCaptionElement)(node);
      }
      function allowsNameFromContent2(node) {
        return (0, _util.hasAnyConcreteRoles)(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
      }
      function isDescendantOfNativeHostLanguageTextAlternativeElement2(node) {
        return false;
      }
      function computeTooltipAttributeValue2(node) {
        return null;
      }
      function getValueOfTextbox2(element) {
        if ((0, _util.isHTMLInputElement)(element) || (0, _util.isHTMLTextAreaElement)(element)) {
          return element.value;
        }
        return element.textContent || "";
      }
      function getTextualContent2(declaration) {
        var content = declaration.getPropertyValue("content");
        if (/^["'].*["']$/.test(content)) {
          return content.slice(1, -1);
        }
        return "";
      }
      function isLabelableElement2(element) {
        var localName = (0, _util.getLocalName)(element);
        return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
      }
      function findLabelableElement2(element) {
        if (isLabelableElement2(element)) {
          return element;
        }
        var labelableElement = null;
        element.childNodes.forEach(function(childNode) {
          if (labelableElement === null && (0, _util.isElement)(childNode)) {
            var descendantLabelableElement = findLabelableElement2(childNode);
            if (descendantLabelableElement !== null) {
              labelableElement = descendantLabelableElement;
            }
          }
        });
        return labelableElement;
      }
      function getControlOfLabel2(label) {
        if (label.control !== void 0) {
          return label.control;
        }
        var htmlFor = label.getAttribute("for");
        if (htmlFor !== null) {
          return label.ownerDocument.getElementById(htmlFor);
        }
        return findLabelableElement2(label);
      }
      function getLabels3(element) {
        var labelsProperty = element.labels;
        if (labelsProperty === null) {
          return labelsProperty;
        }
        if (labelsProperty !== void 0) {
          return (0, _array.default)(labelsProperty);
        }
        if (!isLabelableElement2(element)) {
          return null;
        }
        var document2 = element.ownerDocument;
        return (0, _array.default)(document2.querySelectorAll("label")).filter(function(label) {
          return getControlOfLabel2(label) === element;
        });
      }
      function getSlotContents2(slot) {
        var assignedNodes = slot.assignedNodes();
        if (assignedNodes.length === 0) {
          return (0, _array.default)(slot.childNodes);
        }
        return assignedNodes;
      }
      function computeTextAlternative2(root) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var consultedNodes = new _SetLike.default();
        var window2 = (0, _util.safeWindow)(root);
        var _options$compute = options.compute, compute = _options$compute === void 0 ? "name" : _options$compute, _options$computedStyl = options.computedStyleSupportsPseudoElements, computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== void 0 : _options$computedStyl, _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? window2.getComputedStyle.bind(window2) : _options$getComputedS;
        function computeMiscTextAlternative(node, context) {
          var accumulatedText = "";
          if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
            var pseudoBefore = getComputedStyle(node, "::before");
            var beforeContent = getTextualContent2(pseudoBefore);
            accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
          }
          var childNodes = (0, _util.isHTMLSlotElement)(node) ? getSlotContents2(node) : (0, _array.default)(node.childNodes).concat((0, _util.queryIdRefs)(node, "aria-owns"));
          childNodes.forEach(function(child) {
            var result = computeTextAlternative3(child, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: false,
              recursion: true
            });
            var display = (0, _util.isElement)(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
            var separator = display !== "inline" ? " " : "";
            accumulatedText += "".concat(separator).concat(result).concat(separator);
          });
          if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
            var pseudoAfter = getComputedStyle(node, "::after");
            var afterContent = getTextualContent2(pseudoAfter);
            accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
          }
          return accumulatedText;
        }
        function computeElementTextAlternative(node) {
          if (!(0, _util.isElement)(node)) {
            return null;
          }
          function useAttribute(element, attributeName) {
            var attribute = element.getAttributeNode(attributeName);
            if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
              consultedNodes.add(attribute);
              return attribute.value;
            }
            return null;
          }
          if ((0, _util.isHTMLFieldSetElement)(node)) {
            consultedNodes.add(node);
            var children = (0, _array.default)(node.childNodes);
            for (var i = 0; i < children.length; i += 1) {
              var child = children[i];
              if ((0, _util.isHTMLLegendElement)(child)) {
                return computeTextAlternative3(child, {
                  isEmbeddedInLabel: false,
                  isReferenced: false,
                  recursion: false
                });
              }
            }
          } else if ((0, _util.isHTMLTableElement)(node)) {
            consultedNodes.add(node);
            var _children = (0, _array.default)(node.childNodes);
            for (var _i = 0; _i < _children.length; _i += 1) {
              var _child = _children[_i];
              if ((0, _util.isHTMLTableCaptionElement)(_child)) {
                return computeTextAlternative3(_child, {
                  isEmbeddedInLabel: false,
                  isReferenced: false,
                  recursion: false
                });
              }
            }
          } else if ((0, _util.isSVGSVGElement)(node)) {
            consultedNodes.add(node);
            var _children2 = (0, _array.default)(node.childNodes);
            for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
              var _child2 = _children2[_i2];
              if ((0, _util.isSVGTitleElement)(_child2)) {
                return _child2.textContent;
              }
            }
            return null;
          } else if ((0, _util.getLocalName)(node) === "img" || (0, _util.getLocalName)(node) === "area") {
            var nameFromAlt = useAttribute(node, "alt");
            if (nameFromAlt !== null) {
              return nameFromAlt;
            }
          }
          if ((0, _util.isHTMLInputElement)(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
            var nameFromValue = useAttribute(node, "value");
            if (nameFromValue !== null) {
              return nameFromValue;
            }
            if (node.type === "submit") {
              return "Submit";
            }
            if (node.type === "reset") {
              return "Reset";
            }
          }
          if ((0, _util.isHTMLInputElement)(node) || (0, _util.isHTMLSelectElement)(node) || (0, _util.isHTMLTextAreaElement)(node)) {
            var input = node;
            var labels = getLabels3(input);
            if (labels !== null && labels.length !== 0) {
              consultedNodes.add(input);
              return (0, _array.default)(labels).map(function(element) {
                return computeTextAlternative3(element, {
                  isEmbeddedInLabel: true,
                  isReferenced: false,
                  recursion: true
                });
              }).filter(function(label) {
                return label.length > 0;
              }).join(" ");
            }
          }
          if ((0, _util.isHTMLInputElement)(node) && node.type === "image") {
            var _nameFromAlt = useAttribute(node, "alt");
            if (_nameFromAlt !== null) {
              return _nameFromAlt;
            }
            var nameFromTitle = useAttribute(node, "title");
            if (nameFromTitle !== null) {
              return nameFromTitle;
            }
            return "Submit Query";
          }
          return useAttribute(node, "title");
        }
        function computeTextAlternative3(current, context) {
          if (consultedNodes.has(current)) {
            return "";
          }
          if ((0, _util.hasAnyConcreteRoles)(current, ["menu"])) {
            consultedNodes.add(current);
            return "";
          }
          if (isHidden2(current, getComputedStyle) && !context.isReferenced) {
            consultedNodes.add(current);
            return "";
          }
          var labelElements = (0, _util.queryIdRefs)(current, "aria-labelledby");
          if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
            return labelElements.map(function(element) {
              return computeTextAlternative3(element, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: true,
                recursion: false
              });
            }).join(" ");
          }
          var skipToStep2E = context.recursion && isControl2(current) && compute === "name";
          if (!skipToStep2E) {
            var ariaLabel = ((0, _util.isElement)(current) && current.getAttribute("aria-label") || "").trim();
            if (ariaLabel !== "" && compute === "name") {
              consultedNodes.add(current);
              return ariaLabel;
            }
            if (!isMarkedPresentational2(current)) {
              var elementTextAlternative = computeElementTextAlternative(current);
              if (elementTextAlternative !== null) {
                consultedNodes.add(current);
                return elementTextAlternative;
              }
            }
          }
          if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
            if ((0, _util.hasAnyConcreteRoles)(current, ["combobox", "listbox"])) {
              consultedNodes.add(current);
              var selectedOptions = querySelectedOptions2(current);
              if (selectedOptions.length === 0) {
                return (0, _util.isHTMLInputElement)(current) ? current.value : "";
              }
              return (0, _array.default)(selectedOptions).map(function(selectedOption) {
                return computeTextAlternative3(selectedOption, {
                  isEmbeddedInLabel: context.isEmbeddedInLabel,
                  isReferenced: false,
                  recursion: true
                });
              }).join(" ");
            }
            if (hasAbstractRole2(current, "range")) {
              consultedNodes.add(current);
              if (current.hasAttribute("aria-valuetext")) {
                return current.getAttribute("aria-valuetext");
              }
              if (current.hasAttribute("aria-valuenow")) {
                return current.getAttribute("aria-valuenow");
              }
              return current.getAttribute("value") || "";
            }
            if ((0, _util.hasAnyConcreteRoles)(current, ["textbox"])) {
              consultedNodes.add(current);
              return getValueOfTextbox2(current);
            }
          }
          if (allowsNameFromContent2(current) || (0, _util.isElement)(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement2(current) || isDescendantOfNativeHostLanguageTextAlternativeElement2(current)) {
            consultedNodes.add(current);
            return computeMiscTextAlternative(current, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: false
            });
          }
          if (current.nodeType === current.TEXT_NODE) {
            consultedNodes.add(current);
            return current.textContent || "";
          }
          if (context.recursion) {
            consultedNodes.add(current);
            return computeMiscTextAlternative(current, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: false
            });
          }
          var tooltipAttributeValue = computeTooltipAttributeValue2(current);
          if (tooltipAttributeValue !== null) {
            consultedNodes.add(current);
            return tooltipAttributeValue;
          }
          consultedNodes.add(current);
          return "";
        }
        return asFlatString2(computeTextAlternative3(root, {
          isEmbeddedInLabel: false,
          isReferenced: compute === "description",
          recursion: false
        }));
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/accessible-description.js
  var require_accessible_description = __commonJS({
    "node_modules/dom-accessibility-api/dist/accessible-description.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.computeAccessibleDescription = computeAccessibleDescription2;
      var _accessibleNameAndDescription = require_accessible_name_and_description();
      var _util = require_util();
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty2(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty2(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function computeAccessibleDescription2(root) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var description = (0, _util.queryIdRefs)(root, "aria-describedby").map(function(element) {
          return (0, _accessibleNameAndDescription.computeTextAlternative)(element, _objectSpread(_objectSpread({}, options), {}, {
            compute: "description"
          }));
        }).join(" ");
        if (description === "") {
          var title = root.getAttribute("title");
          description = title === null ? "" : title;
        }
        return description;
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/accessible-name.js
  var require_accessible_name = __commonJS({
    "node_modules/dom-accessibility-api/dist/accessible-name.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.computeAccessibleName = computeAccessibleName2;
      var _accessibleNameAndDescription = require_accessible_name_and_description();
      var _util = require_util();
      function prohibitsNaming2(node) {
        return (0, _util.hasAnyConcreteRoles)(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
      }
      function computeAccessibleName2(root) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (prohibitsNaming2(root)) {
          return "";
        }
        return (0, _accessibleNameAndDescription.computeTextAlternative)(root, options);
      }
    }
  });

  // node_modules/dom-accessibility-api/dist/index.js
  var require_dist = __commonJS({
    "node_modules/dom-accessibility-api/dist/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.getRole = exports.computeAccessibleName = exports.computeAccessibleDescription = void 0;
      var _accessibleDescription = require_accessible_description();
      exports.computeAccessibleDescription = _accessibleDescription.computeAccessibleDescription;
      var _accessibleName = require_accessible_name();
      exports.computeAccessibleName = _accessibleName.computeAccessibleName;
      var _getRole = _interopRequireDefault(require_getRole());
      exports.getRole = _getRole.default;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js
  var require_interopRequireDefault2 = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js"(exports, module2) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module2.exports = _interopRequireDefault;
    }
  });

  // node_modules/core-js-pure/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js-pure/internals/global.js"(exports, module2) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof window == "object" && window) || function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js-pure/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js-pure/internals/fails.js"(exports, module2) {
      module2.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js-pure/internals/descriptors.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js-pure/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
    }
  });

  // node_modules/core-js-pure/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module2) {
      module2.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js-pure/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js-pure/internals/classof-raw.js"(exports, module2) {
      var toString = {}.toString;
      module2.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };
    }
  });

  // node_modules/core-js-pure/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js-pure/internals/indexed-object.js"(exports, module2) {
      var fails = require_fails();
      var classof = require_classof_raw();
      var split = "".split;
      module2.exports = fails(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split.call(it, "") : Object(it);
      } : Object;
    }
  });

  // node_modules/core-js-pure/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module2) {
      module2.exports = function(it) {
        if (it == void 0)
          throw TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module2) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module2.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js-pure/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js-pure/internals/is-object.js"(exports, module2) {
      module2.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // node_modules/core-js-pure/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js-pure/internals/to-primitive.js"(exports, module2) {
      var isObject = require_is_object();
      module2.exports = function(input, PREFERRED_STRING) {
        if (!isObject(input))
          return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
          return val;
        if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
          return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js-pure/internals/has.js
  var require_has = __commonJS({
    "node_modules/core-js-pure/internals/has.js"(exports, module2) {
      var hasOwnProperty = {}.hasOwnProperty;
      module2.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
      };
    }
  });

  // node_modules/core-js-pure/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js-pure/internals/document-create-element.js"(exports, module2) {
      var global2 = require_global();
      var isObject = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module2.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js-pure/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module2.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPrimitive = require_to_primitive();
      var has = require_has();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE)
          try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (has(O, P))
          return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
    }
  });

  // node_modules/core-js-pure/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js-pure/internals/is-forced.js"(exports, module2) {
      var fails = require_fails();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize2(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
      };
      var normalize2 = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module2.exports = isForced;
    }
  });

  // node_modules/core-js-pure/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js-pure/internals/path.js"(exports, module2) {
      module2.exports = {};
    }
  });

  // node_modules/core-js-pure/internals/a-function.js
  var require_a_function = __commonJS({
    "node_modules/core-js-pure/internals/a-function.js"(exports, module2) {
      module2.exports = function(it) {
        if (typeof it != "function") {
          throw TypeError(String(it) + " is not a function");
        }
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js-pure/internals/function-bind-context.js"(exports, module2) {
      var aFunction = require_a_function();
      module2.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === void 0)
          return fn;
        switch (length) {
          case 0:
            return function() {
              return fn.call(that);
            };
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js-pure/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js-pure/internals/an-object.js"(exports, module2) {
      var isObject = require_is_object();
      module2.exports = function(it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + " is not an object");
        }
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js-pure/internals/object-define-property.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      var nativeDefineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js-pure/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js-pure/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js-pure/internals/export.js"(exports, module2) {
      "use strict";
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var isForced = require_is_forced();
      var path = require_path();
      var bind = require_function_bind_context();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var has = require_has();
      var wrapConstructor = function(NativeConstructor) {
        var Wrapper = function(a, b, c) {
          if (this instanceof NativeConstructor) {
            switch (arguments.length) {
              case 0:
                return new NativeConstructor();
              case 1:
                return new NativeConstructor(a);
              case 2:
                return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
          }
          return NativeConstructor.apply(this, arguments);
        };
        Wrapper.prototype = NativeConstructor.prototype;
        return Wrapper;
      };
      module2.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var PROTO = options.proto;
        var nativeSource = GLOBAL ? global2 : STATIC ? global2[TARGET] : (global2[TARGET] || {}).prototype;
        var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
        var targetPrototype = target.prototype;
        var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
        var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
        for (key in source) {
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
          targetProperty = target[key];
          if (USE_NATIVE)
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(nativeSource, key);
              nativeProperty = descriptor && descriptor.value;
            } else
              nativeProperty = nativeSource[key];
          sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
          if (USE_NATIVE && typeof targetProperty === typeof sourceProperty)
            continue;
          if (options.bind && USE_NATIVE)
            resultProperty = bind(sourceProperty, global2);
          else if (options.wrap && USE_NATIVE)
            resultProperty = wrapConstructor(sourceProperty);
          else if (PROTO && typeof sourceProperty == "function")
            resultProperty = bind(Function.call, sourceProperty);
          else
            resultProperty = sourceProperty;
          if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(resultProperty, "sham", true);
          }
          target[key] = resultProperty;
          if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + "Prototype";
            if (!has(path, VIRTUAL_PROTOTYPE)) {
              createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
            }
            path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
            if (options.real && targetPrototype && !targetPrototype[key]) {
              createNonEnumerableProperty(targetPrototype, key, sourceProperty);
            }
          }
        }
      };
    }
  });

  // node_modules/core-js-pure/modules/es.object.define-property.js
  var require_es_object_define_property = __commonJS({
    "node_modules/core-js-pure/modules/es.object.define-property.js"() {
      var $ = require_export();
      var DESCRIPTORS = require_descriptors();
      var objectDefinePropertyModile = require_object_define_property();
      $({ target: "Object", stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
        defineProperty: objectDefinePropertyModile.f
      });
    }
  });

  // node_modules/core-js-pure/es/object/define-property.js
  var require_define_property = __commonJS({
    "node_modules/core-js-pure/es/object/define-property.js"(exports, module2) {
      require_es_object_define_property();
      var path = require_path();
      var Object2 = path.Object;
      var defineProperty = module2.exports = function defineProperty2(it, key, desc) {
        return Object2.defineProperty(it, key, desc);
      };
      if (Object2.defineProperty.sham)
        defineProperty.sham = true;
    }
  });

  // node_modules/core-js-pure/stable/object/define-property.js
  var require_define_property2 = __commonJS({
    "node_modules/core-js-pure/stable/object/define-property.js"(exports, module2) {
      var parent = require_define_property();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js
  var require_define_property3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"(exports, module2) {
      module2.exports = require_define_property2();
    }
  });

  // node_modules/core-js-pure/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js-pure/internals/hidden-keys.js"(exports, module2) {
      module2.exports = {};
    }
  });

  // node_modules/core-js-pure/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js-pure/internals/uid.js"(exports, module2) {
      var id = 0;
      var postfix = Math.random();
      module2.exports = function(key) {
        return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
      };
    }
  });

  // node_modules/core-js-pure/internals/freezing.js
  var require_freezing = __commonJS({
    "node_modules/core-js-pure/internals/freezing.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }
  });

  // node_modules/core-js-pure/internals/internal-metadata.js
  var require_internal_metadata = __commonJS({
    "node_modules/core-js-pure/internals/internal-metadata.js"(exports, module2) {
      var hiddenKeys = require_hidden_keys();
      var isObject = require_is_object();
      var has = require_has();
      var defineProperty = require_object_define_property().f;
      var uid = require_uid();
      var FREEZING = require_freezing();
      var METADATA = uid("meta");
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var setMetadata = function(it) {
        defineProperty(it, METADATA, { value: {
          objectID: "O" + ++id,
          weakData: {}
        } });
      };
      var fastKey = function(it, create) {
        if (!isObject(it))
          return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, METADATA)) {
          if (!isExtensible(it))
            return "F";
          if (!create)
            return "E";
          setMetadata(it);
        }
        return it[METADATA].objectID;
      };
      var getWeakData = function(it, create) {
        if (!has(it, METADATA)) {
          if (!isExtensible(it))
            return true;
          if (!create)
            return false;
          setMetadata(it);
        }
        return it[METADATA].weakData;
      };
      var onFreeze = function(it) {
        if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA))
          setMetadata(it);
        return it;
      };
      var meta = module2.exports = {
        REQUIRED: false,
        fastKey,
        getWeakData,
        onFreeze
      };
      hiddenKeys[METADATA] = true;
    }
  });

  // node_modules/core-js-pure/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js-pure/internals/is-pure.js"(exports, module2) {
      module2.exports = true;
    }
  });

  // node_modules/core-js-pure/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js-pure/internals/set-global.js"(exports, module2) {
      var global2 = require_global();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module2.exports = function(key, value) {
        try {
          createNonEnumerableProperty(global2, key, value);
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js-pure/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js-pure/internals/shared-store.js"(exports, module2) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module2.exports = store;
    }
  });

  // node_modules/core-js-pure/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js-pure/internals/shared.js"(exports, module2) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module2.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.7.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js-pure/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js-pure/internals/native-symbol.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        return !String(Symbol());
      });
    }
  });

  // node_modules/core-js-pure/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module2) {
      var NATIVE_SYMBOL = require_native_symbol();
      module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js-pure/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module2) {
      var global2 = require_global();
      var shared = require_shared();
      var has = require_has();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module2.exports = function(name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol2, name))
            WellKnownSymbolsStore[name] = Symbol2[name];
          else
            WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js-pure/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js-pure/internals/iterators.js"(exports, module2) {
      module2.exports = {};
    }
  });

  // node_modules/core-js-pure/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-integer.js
  var require_to_integer = __commonJS({
    "node_modules/core-js-pure/internals/to-integer.js"(exports, module2) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module2.exports = function(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js-pure/internals/to-length.js"(exports, module2) {
      var toInteger2 = require_to_integer();
      var min = Math.min;
      module2.exports = function(argument) {
        return argument > 0 ? min(toInteger2(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js-pure/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module2.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js-pure/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js-pure/internals/classof.js"(exports, module2) {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js-pure/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module2) {
      var classof = require_classof();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module2.exports = function(it) {
        if (it != void 0)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js-pure/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js-pure/internals/iterator-close.js"(exports, module2) {
      var anObject = require_an_object();
      module2.exports = function(iterator) {
        var returnMethod = iterator["return"];
        if (returnMethod !== void 0) {
          return anObject(returnMethod.call(iterator)).value;
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js-pure/internals/iterate.js"(exports, module2) {
      var anObject = require_an_object();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var toLength2 = require_to_length();
      var bind = require_function_bind_context();
      var getIteratorMethod = require_get_iterator_method();
      var iteratorClose = require_iterator_close();
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      module2.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
        var iterator, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          if (iterator)
            iteratorClose(iterator);
          return new Result(true, condition);
        };
        var callFn = function(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }
          return INTERRUPTED ? fn(value, stop) : fn(value);
        };
        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn != "function")
            throw TypeError("Target is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength2(iterable.length); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && result instanceof Result)
                return result;
            }
            return new Result(false);
          }
          iterator = iterFn.call(iterable);
        }
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }
          if (typeof result == "object" && result && result instanceof Result)
            return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js-pure/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js-pure/internals/an-instance.js"(exports, module2) {
      module2.exports = function(it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
        }
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/core-js-pure/internals/object-to-string.js"(exports, module2) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/core-js-pure/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module2) {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var defineProperty = require_object_define_property().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var has = require_has();
      var toString = require_object_to_string();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module2.exports = function(it, TAG, STATIC, SET_METHOD) {
        if (it) {
          var target = STATIC ? it : it.prototype;
          if (!has(target, TO_STRING_TAG)) {
            defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
          }
          if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
            createNonEnumerableProperty(target, "toString", toString);
          }
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js-pure/internals/to-object.js"(exports, module2) {
      var requireObjectCoercible = require_require_object_coercible();
      module2.exports = function(argument) {
        return Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js-pure/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js-pure/internals/is-array.js"(exports, module2) {
      var classof = require_classof_raw();
      module2.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == "Array";
      };
    }
  });

  // node_modules/core-js-pure/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js-pure/internals/array-species-create.js"(exports, module2) {
      var isObject = require_is_object();
      var isArray = require_is_array();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(originalArray, length) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (typeof C == "function" && (C === Array || isArray(C.prototype)))
            C = void 0;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
      };
    }
  });

  // node_modules/core-js-pure/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js-pure/internals/array-iteration.js"(exports, module2) {
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var toLength2 = require_to_length();
      var arraySpeciesCreate = require_array_species_create();
      var push = [].push;
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that, 3);
          var length = toLength2(self2.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
          var value, result;
          for (; length > index; index++)
            if (NO_HOLES || index in self2) {
              value = self2[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP)
                  target[index] = result;
                else if (result)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return value;
                    case 6:
                      return index;
                    case 2:
                      push.call(target, value);
                  }
                else if (IS_EVERY)
                  return false;
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module2.exports = {
        forEach: createMethod(0),
        map: createMethod(1),
        filter: createMethod(2),
        some: createMethod(3),
        every: createMethod(4),
        find: createMethod(5),
        findIndex: createMethod(6)
      };
    }
  });

  // node_modules/core-js-pure/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js-pure/internals/inspect-source.js"(exports, module2) {
      var store = require_shared_store();
      var functionToString = Function.toString;
      if (typeof store.inspectSource != "function") {
        store.inspectSource = function(it) {
          return functionToString.call(it);
        };
      }
      module2.exports = store.inspectSource;
    }
  });

  // node_modules/core-js-pure/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js-pure/internals/native-weak-map.js"(exports, module2) {
      var global2 = require_global();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module2.exports = typeof WeakMap2 === "function" && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js-pure/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js-pure/internals/shared-key.js"(exports, module2) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module2.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js-pure/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js-pure/internals/internal-state.js"(exports, module2) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var objectHas = require_has();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var WeakMap2 = global2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = store.get;
        wmhas = store.has;
        wmset = store.set;
        set = function(it, metadata) {
          metadata.facade = it;
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function(it) {
          return wmget.call(store, it) || {};
        };
        has = function(it) {
          return wmhas.call(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return objectHas(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module2.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js-pure/internals/collection.js
  var require_collection = __commonJS({
    "node_modules/core-js-pure/internals/collection.js"(exports, module2) {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var InternalMetadataModule = require_internal_metadata();
      var fails = require_fails();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var iterate = require_iterate();
      var anInstance = require_an_instance();
      var isObject = require_is_object();
      var setToStringTag = require_set_to_string_tag();
      var defineProperty = require_object_define_property().f;
      var forEach = require_array_iteration().forEach;
      var DESCRIPTORS = require_descriptors();
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module2.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
        var ADDER = IS_MAP ? "set" : "add";
        var NativeConstructor = global2[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var exported = {};
        var Constructor;
        if (!DESCRIPTORS || typeof NativeConstructor != "function" || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
          new NativeConstructor().entries().next();
        }))) {
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.REQUIRED = true;
        } else {
          Constructor = wrapper(function(target, iterable) {
            setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
              type: CONSTRUCTOR_NAME,
              collection: new NativeConstructor()
            });
            if (iterable != void 0)
              iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          forEach(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(KEY) {
            var IS_ADDER = KEY == "add" || KEY == "set";
            if (KEY in NativePrototype && !(IS_WEAK && KEY == "clear")) {
              createNonEnumerableProperty(Constructor.prototype, KEY, function(a, b) {
                var collection = getInternalState(this).collection;
                if (!IS_ADDER && IS_WEAK && !isObject(a))
                  return KEY == "get" ? void 0 : false;
                var result = collection[KEY](a === 0 ? 0 : a, b);
                return IS_ADDER ? this : result;
              });
            }
          });
          IS_WEAK || defineProperty(Constructor.prototype, "size", {
            configurable: true,
            get: function() {
              return getInternalState(this).collection.size;
            }
          });
        }
        setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
        exported[CONSTRUCTOR_NAME] = Constructor;
        $({ global: true, forced: true }, exported);
        if (!IS_WEAK)
          common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
    }
  });

  // node_modules/core-js-pure/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module2) {
      var toInteger2 = require_to_integer();
      var max = Math.max;
      var min = Math.min;
      module2.exports = function(index, length) {
        var integer = toInteger2(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js-pure/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js-pure/internals/array-includes.js"(exports, module2) {
      var toIndexedObject = require_to_indexed_object();
      var toLength2 = require_to_length();
      var toAbsoluteIndex = require_to_absolute_index();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength2(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module2.exports = {
        includes: createMethod(true),
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js-pure/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module2) {
      var has = require_has();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      module2.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !has(hiddenKeys, key) && has(O, key) && result.push(key);
        while (names.length > i)
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js-pure/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module2) {
      module2.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js-pure/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js-pure/internals/object-keys.js"(exports, module2) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module2.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js-pure/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js-pure/internals/object-define-properties.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var objectKeys = require_object_keys();
      module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], Properties[key]);
        return O;
      };
    }
  });

  // node_modules/core-js-pure/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js-pure/internals/get-built-in.js"(exports, module2) {
      var path = require_path();
      var global2 = require_global();
      var aFunction = function(variable) {
        return typeof variable == "function" ? variable : void 0;
      };
      module2.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global2[namespace]) : path[namespace] && path[namespace][method] || global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js-pure/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js-pure/internals/html.js"(exports, module2) {
      var getBuiltIn = require_get_built_in();
      module2.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js-pure/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js-pure/internals/object-create.js"(exports, module2) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = document.domain && new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module2.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js-pure/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js-pure/internals/redefine.js"(exports, module2) {
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module2.exports = function(target, key, value, options) {
        if (options && options.enumerable)
          target[key] = value;
        else
          createNonEnumerableProperty(target, key, value);
      };
    }
  });

  // node_modules/core-js-pure/internals/redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js-pure/internals/redefine-all.js"(exports, module2) {
      var redefine = require_redefine();
      module2.exports = function(target, src, options) {
        for (var key in src) {
          if (options && options.unsafe && target[key])
            target[key] = src[key];
          else
            redefine(target, key, src[key], options);
        }
        return target;
      };
    }
  });

  // node_modules/core-js-pure/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js-pure/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module2) {
      var has = require_has();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var ObjectPrototype = Object.prototype;
      module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO))
          return O[IE_PROTO];
        if (typeof O.constructor == "function" && O instanceof O.constructor) {
          return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js-pure/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js-pure/internals/iterators-core.js"(exports, module2) {
      "use strict";
      var getPrototypeOf = require_object_get_prototype_of();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var has = require_has();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var returnThis = function() {
        return this;
      };
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      if (IteratorPrototype == void 0)
        IteratorPrototype = {};
      if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
      }
      module2.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js-pure/internals/create-iterator-constructor.js
  var require_create_iterator_constructor = __commonJS({
    "node_modules/core-js-pure/internals/create-iterator-constructor.js"(exports, module2) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module2.exports = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js-pure/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module2) {
      var isObject = require_is_object();
      module2.exports = function(it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + " as a prototype");
        }
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module2) {
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter.call(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // node_modules/core-js-pure/internals/define-iterator.js
  var require_define_iterator = __commonJS({
    "node_modules/core-js-pure/internals/define-iterator.js"(exports, module2) {
      "use strict";
      var $ = require_export();
      var createIteratorConstructor = require_create_iterator_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator)
            return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
            return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE)
              Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return nativeIterator.call(this);
          };
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
        }
        Iterators[NAME] = defaultIterator;
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED)
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            }
          else
            $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        return methods;
      };
    }
  });

  // node_modules/core-js-pure/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js-pure/internals/set-species.js"(exports, module2) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var definePropertyModule = require_object_define_property();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js-pure/internals/collection-strong.js"(exports, module2) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var create = require_object_create();
      var redefineAll = require_redefine_all();
      var bind = require_function_bind_context();
      var anInstance = require_an_instance();
      var iterate = require_iterate();
      var defineIterator = require_define_iterator();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_internal_metadata().fastKey;
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module2.exports = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create(null),
              first: void 0,
              last: void 0,
              size: 0
            });
            if (!DESCRIPTORS)
              that.size = 0;
            if (iterable != void 0)
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var define2 = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            if (entry) {
              entry.value = value;
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key,
                value,
                previous: previous = state.last,
                next: void 0,
                removed: false
              };
              if (!state.first)
                state.first = entry;
              if (previous)
                previous.next = entry;
              if (DESCRIPTORS)
                state.size++;
              else
                that.size++;
              if (index !== "F")
                state.index[index] = entry;
            }
            return that;
          };
          var getEntry = function(that, key) {
            var state = getInternalState(that);
            var index = fastKey(key);
            var entry;
            if (index !== "F")
              return state.index[index];
            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key)
                return entry;
            }
          };
          redefineAll(C.prototype, {
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;
              while (entry) {
                entry.removed = true;
                if (entry.previous)
                  entry.previous = entry.previous.next = void 0;
                delete data[entry.index];
                entry = entry.next;
              }
              state.first = state.last = void 0;
              if (DESCRIPTORS)
                state.size = 0;
              else
                that.size = 0;
            },
            "delete": function(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev)
                  prev.next = next;
                if (next)
                  next.previous = prev;
                if (state.first == entry)
                  state.first = next;
                if (state.last == entry)
                  state.last = prev;
                if (DESCRIPTORS)
                  state.size--;
                else
                  that.size--;
              }
              return !!entry;
            },
            forEach: function forEach(callbackfn) {
              var state = getInternalState(this);
              var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
              var entry;
              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this);
                while (entry && entry.removed)
                  entry = entry.previous;
              }
            },
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            set: function set(key, value) {
              return define2(this, key === 0 ? 0 : key, value);
            }
          } : {
            add: function add(value) {
              return define2(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (DESCRIPTORS)
            defineProperty(C.prototype, "size", {
              get: function() {
                return getInternalState(this).size;
              }
            });
          return C;
        },
        setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
          defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind,
              last: void 0
            });
          }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            while (entry && entry.removed)
              entry = entry.previous;
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              state.target = void 0;
              return { value: void 0, done: true };
            }
            if (kind == "keys")
              return { value: entry.key, done: false };
            if (kind == "values")
              return { value: entry.value, done: false };
            return { value: [entry.key, entry.value], done: false };
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(CONSTRUCTOR_NAME);
        }
      };
    }
  });

  // node_modules/core-js-pure/modules/es.map.js
  var require_es_map = __commonJS({
    "node_modules/core-js-pure/modules/es.map.js"(exports, module2) {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      module2.exports = collection("Map", function(init) {
        return function Map2() {
          return init(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js-pure/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/core-js-pure/modules/es.object.to-string.js"() {
    }
  });

  // node_modules/core-js-pure/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js-pure/internals/string-multibyte.js"(exports, module2) {
      var toInteger2 = require_to_integer();
      var requireObjectCoercible = require_require_object_coercible();
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger2(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size)
            return CONVERT_TO_STRING ? "" : void 0;
          first = S.charCodeAt(position);
          return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module2.exports = {
        codeAt: createMethod(false),
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js-pure/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length)
          return { value: void 0, done: true };
        point = charAt(string, index);
        state.index += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js-pure/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module2) {
      module2.exports = function() {
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module2) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          index: 0,
          kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = void 0;
          return { value: void 0, done: true };
        }
        if (kind == "keys")
          return { value: index, done: false };
        if (kind == "values")
          return { value: target[index], done: false };
        return { value: [index, target[index]], done: false };
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js-pure/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "node_modules/core-js-pure/internals/dom-iterables.js"(exports, module2) {
      module2.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // node_modules/core-js-pure/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
      require_es_array_iterator();
      var DOMIterables = require_dom_iterables();
      var global2 = require_global();
      var classof = require_classof();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      for (var COLLECTION_NAME in DOMIterables) {
        Collection = global2[COLLECTION_NAME];
        CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        }
        Iterators[COLLECTION_NAME] = Iterators.Array;
      }
      var Collection;
      var CollectionPrototype;
    }
  });

  // node_modules/core-js-pure/es/map/index.js
  var require_map = __commonJS({
    "node_modules/core-js-pure/es/map/index.js"(exports, module2) {
      require_es_map();
      require_es_object_to_string();
      require_es_string_iterator();
      require_web_dom_collections_iterator();
      var path = require_path();
      module2.exports = path.Map;
    }
  });

  // node_modules/core-js-pure/stable/map/index.js
  var require_map2 = __commonJS({
    "node_modules/core-js-pure/stable/map/index.js"(exports, module2) {
      var parent = require_map();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/map.js
  var require_map3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/map.js"(exports, module2) {
      module2.exports = require_map2();
    }
  });

  // node_modules/aria-query/lib/ariaPropsMap.js
  var require_ariaPropsMap = __commonJS({
    "node_modules/aria-query/lib/ariaPropsMap.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _map = _interopRequireDefault(require_map3());
      var ariaPropsMap = new _map.default([["aria-activedescendant", {
        "type": "id"
      }], ["aria-atomic", {
        "type": "boolean"
      }], ["aria-autocomplete", {
        "type": "token",
        "values": ["inline", "list", "both", "none"]
      }], ["aria-busy", {
        "type": "boolean"
      }], ["aria-checked", {
        "type": "tristate"
      }], ["aria-colcount", {
        type: "integer"
      }], ["aria-colindex", {
        type: "integer"
      }], ["aria-colspan", {
        type: "integer"
      }], ["aria-controls", {
        "type": "idlist"
      }], ["aria-current", {
        type: "token",
        values: ["page", "step", "location", "date", "time", true, false]
      }], ["aria-describedby", {
        "type": "idlist"
      }], ["aria-details", {
        "type": "id"
      }], ["aria-disabled", {
        "type": "boolean"
      }], ["aria-dropeffect", {
        "type": "tokenlist",
        "values": ["copy", "execute", "link", "move", "none", "popup"]
      }], ["aria-errormessage", {
        "type": "id"
      }], ["aria-expanded", {
        "type": "boolean",
        "allowundefined": true
      }], ["aria-flowto", {
        "type": "idlist"
      }], ["aria-grabbed", {
        "type": "boolean",
        "allowundefined": true
      }], ["aria-haspopup", {
        "type": "token",
        "values": [false, true, "menu", "listbox", "tree", "grid", "dialog"]
      }], ["aria-hidden", {
        "type": "boolean",
        "allowundefined": true
      }], ["aria-invalid", {
        "type": "token",
        "values": ["grammar", false, "spelling", true]
      }], ["aria-keyshortcuts", {
        type: "string"
      }], ["aria-label", {
        "type": "string"
      }], ["aria-labelledby", {
        "type": "idlist"
      }], ["aria-level", {
        "type": "integer"
      }], ["aria-live", {
        "type": "token",
        "values": ["assertive", "off", "polite"]
      }], ["aria-modal", {
        type: "boolean"
      }], ["aria-multiline", {
        "type": "boolean"
      }], ["aria-multiselectable", {
        "type": "boolean"
      }], ["aria-orientation", {
        "type": "token",
        "values": ["vertical", "undefined", "horizontal"]
      }], ["aria-owns", {
        "type": "idlist"
      }], ["aria-placeholder", {
        type: "string"
      }], ["aria-posinset", {
        "type": "integer"
      }], ["aria-pressed", {
        "type": "tristate"
      }], ["aria-readonly", {
        "type": "boolean"
      }], ["aria-relevant", {
        "type": "tokenlist",
        "values": ["additions", "all", "removals", "text"]
      }], ["aria-required", {
        "type": "boolean"
      }], ["aria-roledescription", {
        type: "string"
      }], ["aria-rowcount", {
        type: "integer"
      }], ["aria-rowindex", {
        type: "integer"
      }], ["aria-rowspan", {
        type: "integer"
      }], ["aria-selected", {
        "type": "boolean",
        "allowundefined": true
      }], ["aria-setsize", {
        "type": "integer"
      }], ["aria-sort", {
        "type": "token",
        "values": ["ascending", "descending", "none", "other"]
      }], ["aria-valuemax", {
        "type": "number"
      }], ["aria-valuemin", {
        "type": "number"
      }], ["aria-valuenow", {
        "type": "number"
      }], ["aria-valuetext", {
        "type": "string"
      }]]);
      var _default = ariaPropsMap;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/domMap.js
  var require_domMap = __commonJS({
    "node_modules/aria-query/lib/domMap.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _map = _interopRequireDefault(require_map3());
      var domMap = new _map.default([["a", {
        reserved: false
      }], ["abbr", {
        reserved: false
      }], ["acronym", {
        reserved: false
      }], ["address", {
        reserved: false
      }], ["applet", {
        reserved: false
      }], ["area", {
        reserved: false
      }], ["article", {
        reserved: false
      }], ["aside", {
        reserved: false
      }], ["audio", {
        reserved: false
      }], ["b", {
        reserved: false
      }], ["base", {
        reserved: true
      }], ["bdi", {
        reserved: false
      }], ["bdo", {
        reserved: false
      }], ["big", {
        reserved: false
      }], ["blink", {
        reserved: false
      }], ["blockquote", {
        reserved: false
      }], ["body", {
        reserved: false
      }], ["br", {
        reserved: false
      }], ["button", {
        reserved: false
      }], ["canvas", {
        reserved: false
      }], ["caption", {
        reserved: false
      }], ["center", {
        reserved: false
      }], ["cite", {
        reserved: false
      }], ["code", {
        reserved: false
      }], ["col", {
        reserved: true
      }], ["colgroup", {
        reserved: true
      }], ["content", {
        reserved: false
      }], ["data", {
        reserved: false
      }], ["datalist", {
        reserved: false
      }], ["dd", {
        reserved: false
      }], ["del", {
        reserved: false
      }], ["details", {
        reserved: false
      }], ["dfn", {
        reserved: false
      }], ["dialog", {
        reserved: false
      }], ["dir", {
        reserved: false
      }], ["div", {
        reserved: false
      }], ["dl", {
        reserved: false
      }], ["dt", {
        reserved: false
      }], ["em", {
        reserved: false
      }], ["embed", {
        reserved: false
      }], ["fieldset", {
        reserved: false
      }], ["figcaption", {
        reserved: false
      }], ["figure", {
        reserved: false
      }], ["font", {
        reserved: false
      }], ["footer", {
        reserved: false
      }], ["form", {
        reserved: false
      }], ["frame", {
        reserved: false
      }], ["frameset", {
        reserved: false
      }], ["h1", {
        reserved: false
      }], ["h2", {
        reserved: false
      }], ["h3", {
        reserved: false
      }], ["h4", {
        reserved: false
      }], ["h5", {
        reserved: false
      }], ["h6", {
        reserved: false
      }], ["head", {
        reserved: true
      }], ["header", {
        reserved: false
      }], ["hgroup", {
        reserved: false
      }], ["hr", {
        reserved: false
      }], ["html", {
        reserved: true
      }], ["i", {
        reserved: false
      }], ["iframe", {
        reserved: false
      }], ["img", {
        reserved: false
      }], ["input", {
        reserved: false
      }], ["ins", {
        reserved: false
      }], ["kbd", {
        reserved: false
      }], ["keygen", {
        reserved: false
      }], ["label", {
        reserved: false
      }], ["legend", {
        reserved: false
      }], ["li", {
        reserved: false
      }], ["link", {
        reserved: true
      }], ["main", {
        reserved: false
      }], ["map", {
        reserved: false
      }], ["mark", {
        reserved: false
      }], ["marquee", {
        reserved: false
      }], ["menu", {
        reserved: false
      }], ["menuitem", {
        reserved: false
      }], ["meta", {
        reserved: true
      }], ["meter", {
        reserved: false
      }], ["nav", {
        reserved: false
      }], ["noembed", {
        reserved: true
      }], ["noscript", {
        reserved: true
      }], ["object", {
        reserved: false
      }], ["ol", {
        reserved: false
      }], ["optgroup", {
        reserved: false
      }], ["option", {
        reserved: false
      }], ["output", {
        reserved: false
      }], ["p", {
        reserved: false
      }], ["param", {
        reserved: true
      }], ["picture", {
        reserved: true
      }], ["pre", {
        reserved: false
      }], ["progress", {
        reserved: false
      }], ["q", {
        reserved: false
      }], ["rp", {
        reserved: false
      }], ["rt", {
        reserved: false
      }], ["rtc", {
        reserved: false
      }], ["ruby", {
        reserved: false
      }], ["s", {
        reserved: false
      }], ["samp", {
        reserved: false
      }], ["script", {
        reserved: true
      }], ["section", {
        reserved: false
      }], ["select", {
        reserved: false
      }], ["small", {
        reserved: false
      }], ["source", {
        reserved: true
      }], ["spacer", {
        reserved: false
      }], ["span", {
        reserved: false
      }], ["strike", {
        reserved: false
      }], ["strong", {
        reserved: false
      }], ["style", {
        reserved: true
      }], ["sub", {
        reserved: false
      }], ["summary", {
        reserved: false
      }], ["sup", {
        reserved: false
      }], ["table", {
        reserved: false
      }], ["tbody", {
        reserved: false
      }], ["td", {
        reserved: false
      }], ["textarea", {
        reserved: false
      }], ["tfoot", {
        reserved: false
      }], ["th", {
        reserved: false
      }], ["thead", {
        reserved: false
      }], ["time", {
        reserved: false
      }], ["title", {
        reserved: true
      }], ["tr", {
        reserved: false
      }], ["track", {
        reserved: true
      }], ["tt", {
        reserved: false
      }], ["u", {
        reserved: false
      }], ["ul", {
        reserved: false
      }], ["var", {
        reserved: false
      }], ["video", {
        reserved: false
      }], ["wbr", {
        reserved: false
      }], ["xmp", {
        reserved: false
      }]]);
      var _default = domMap;
      exports.default = _default;
    }
  });

  // node_modules/core-js-pure/internals/get-iterator.js
  var require_get_iterator = __commonJS({
    "node_modules/core-js-pure/internals/get-iterator.js"(exports, module2) {
      var anObject = require_an_object();
      var getIteratorMethod = require_get_iterator_method();
      module2.exports = function(it) {
        var iteratorMethod = getIteratorMethod(it);
        if (typeof iteratorMethod != "function") {
          throw TypeError(String(it) + " is not iterable");
        }
        return anObject(iteratorMethod.call(it));
      };
    }
  });

  // node_modules/core-js-pure/features/get-iterator.js
  var require_get_iterator2 = __commonJS({
    "node_modules/core-js-pure/features/get-iterator.js"(exports, module2) {
      require_web_dom_collections_iterator();
      require_es_string_iterator();
      var getIterator = require_get_iterator();
      module2.exports = getIterator;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/get-iterator.js
  var require_get_iterator3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/get-iterator.js"(exports, module2) {
      module2.exports = require_get_iterator2();
    }
  });

  // node_modules/core-js-pure/modules/es.array.is-array.js
  var require_es_array_is_array = __commonJS({
    "node_modules/core-js-pure/modules/es.array.is-array.js"() {
      var $ = require_export();
      var isArray = require_is_array();
      $({ target: "Array", stat: true }, {
        isArray
      });
    }
  });

  // node_modules/core-js-pure/es/array/is-array.js
  var require_is_array2 = __commonJS({
    "node_modules/core-js-pure/es/array/is-array.js"(exports, module2) {
      require_es_array_is_array();
      var path = require_path();
      module2.exports = path.Array.isArray;
    }
  });

  // node_modules/core-js-pure/stable/array/is-array.js
  var require_is_array3 = __commonJS({
    "node_modules/core-js-pure/stable/array/is-array.js"(exports, module2) {
      var parent = require_is_array2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js
  var require_is_array4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"(exports, module2) {
      module2.exports = require_is_array3();
    }
  });

  // node_modules/core-js-pure/features/get-iterator-method.js
  var require_get_iterator_method2 = __commonJS({
    "node_modules/core-js-pure/features/get-iterator-method.js"(exports, module2) {
      require_web_dom_collections_iterator();
      require_es_string_iterator();
      var getIteratorMethod = require_get_iterator_method();
      module2.exports = getIteratorMethod;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js
  var require_get_iterator_method3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"(exports, module2) {
      module2.exports = require_get_iterator_method2();
    }
  });

  // node_modules/core-js-pure/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js-pure/internals/create-property.js"(exports, module2) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = function(object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
        else
          object[propertyKey] = value;
      };
    }
  });

  // node_modules/core-js-pure/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js-pure/internals/engine-user-agent.js"(exports, module2) {
      var getBuiltIn = require_get_built_in();
      module2.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js-pure/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js-pure/internals/engine-v8-version.js"(exports, module2) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var versions = process2 && process2.versions;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] + match[1];
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = match[1];
        }
      }
      module2.exports = version && +version;
    }
  });

  // node_modules/core-js-pure/internals/array-method-has-species-support.js
  var require_array_method_has_species_support = __commonJS({
    "node_modules/core-js-pure/internals/array-method-has-species-support.js"(exports, module2) {
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(METHOD_NAME) {
        return V8_VERSION >= 51 || !fails(function() {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES] = function() {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.concat.js
  var require_es_array_concat = __commonJS({
    "node_modules/core-js-pure/modules/es.array.concat.js"() {
      "use strict";
      var $ = require_export();
      var fails = require_fails();
      var isArray = require_is_array();
      var isObject = require_is_object();
      var toObject = require_to_object();
      var toLength2 = require_to_length();
      var createProperty = require_create_property();
      var arraySpeciesCreate = require_array_species_create();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
      var isConcatSpreadable = function(O) {
        if (!isObject(O))
          return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== void 0 ? !!spreadable : isArray(O);
      };
      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
      $({ target: "Array", proto: true, forced: FORCED }, {
        concat: function concat(arg) {
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = toLength2(E.length);
              if (n + len > MAX_SAFE_INTEGER)
                throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++)
                if (k in E)
                  createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER)
                throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-names-external.js
  var require_object_get_own_property_names_external = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-names-external.js"(exports, module2) {
      var toIndexedObject = require_to_indexed_object();
      var nativeGetOwnPropertyNames = require_object_get_own_property_names().f;
      var toString = {}.toString;
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return nativeGetOwnPropertyNames(it);
        } catch (error) {
          return windowNames.slice();
        }
      };
      module2.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
      };
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js-pure/internals/well-known-symbol-wrapped.js
  var require_well_known_symbol_wrapped = __commonJS({
    "node_modules/core-js-pure/internals/well-known-symbol-wrapped.js"(exports) {
      var wellKnownSymbol = require_well_known_symbol();
      exports.f = wellKnownSymbol;
    }
  });

  // node_modules/core-js-pure/internals/define-well-known-symbol.js
  var require_define_well_known_symbol = __commonJS({
    "node_modules/core-js-pure/internals/define-well-known-symbol.js"(exports, module2) {
      var path = require_path();
      var has = require_has();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineProperty = require_object_define_property().f;
      module2.exports = function(NAME) {
        var Symbol2 = path.Symbol || (path.Symbol = {});
        if (!has(Symbol2, NAME))
          defineProperty(Symbol2, NAME, {
            value: wrappedWellKnownSymbolModule.f(NAME)
          });
      };
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.js
  var require_es_symbol = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var fails = require_fails();
      var has = require_has();
      var isArray = require_is_array();
      var isObject = require_is_object();
      var anObject = require_an_object();
      var toObject = require_to_object();
      var toIndexedObject = require_to_indexed_object();
      var toPrimitive = require_to_primitive();
      var createPropertyDescriptor = require_create_property_descriptor();
      var nativeObjectCreate = require_object_create();
      var objectKeys = require_object_keys();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var shared = require_shared();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var uid = require_uid();
      var wellKnownSymbol = require_well_known_symbol();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineWellKnownSymbol = require_define_well_known_symbol();
      var setToStringTag = require_set_to_string_tag();
      var InternalStateModule = require_internal_state();
      var $forEach = require_array_iteration().forEach;
      var HIDDEN = sharedKey("hidden");
      var SYMBOL = "Symbol";
      var PROTOTYPE = "prototype";
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE];
      var $Symbol = global2.Symbol;
      var $stringify = getBuiltIn("JSON", "stringify");
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
      var AllSymbols = shared("symbols");
      var ObjectPrototypeSymbols = shared("op-symbols");
      var StringToSymbolRegistry = shared("string-to-symbol-registry");
      var SymbolToStringRegistry = shared("symbol-to-string-registry");
      var WellKnownSymbolsStore = shared("wks");
      var QObject = global2.QObject;
      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
      var setSymbolDescriptor = DESCRIPTORS && fails(function() {
        return nativeObjectCreate(nativeDefineProperty({}, "a", {
          get: function() {
            return nativeDefineProperty(this, "a", { value: 7 }).a;
          }
        })).a != 7;
      }) ? function(O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor)
          delete ObjectPrototype[P];
        nativeDefineProperty(O, P, Attributes);
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
      } : nativeDefineProperty;
      var wrap = function(tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
        setInternalState(symbol, {
          type: SYMBOL,
          tag,
          description
        });
        if (!DESCRIPTORS)
          symbol.description = description;
        return symbol;
      };
      var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        return Object(it) instanceof $Symbol;
      };
      var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype)
          $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject(O);
        var key = toPrimitive(P, true);
        anObject(Attributes);
        if (has(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!has(O, HIDDEN))
              nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
          } else {
            if (has(O, HIDDEN) && O[HIDDEN][key])
              O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
          }
          return setSymbolDescriptor(O, key, Attributes);
        }
        return nativeDefineProperty(O, key, Attributes);
      };
      var $defineProperties = function defineProperties(O, Properties) {
        anObject(O);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function(key) {
          if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
            $defineProperty(O, key, properties[key]);
        });
        return O;
      };
      var $create = function create(O, Properties) {
        return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(V) {
        var P = toPrimitive(V, true);
        var enumerable = nativePropertyIsEnumerable.call(this, P);
        if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
          return false;
        return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject(O);
        var key = toPrimitive(P, true);
        if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
          return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);
        if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }
        return descriptor;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O));
        var result = [];
        $forEach(names, function(key) {
          if (!has(AllSymbols, key) && !has(hiddenKeys, key))
            result.push(key);
        });
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
        var result = [];
        $forEach(names, function(key) {
          if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key]);
          }
        });
        return result;
      };
      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol2() {
          if (this instanceof $Symbol)
            throw TypeError("Symbol is not a constructor");
          var description = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]);
          var tag = uid(description);
          var setter = function(value) {
            if (this === ObjectPrototype)
              setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
          };
          if (DESCRIPTORS && USE_SETTER)
            setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
          return wrap(tag, description);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString() {
          return getInternalState(this).tag;
        });
        redefine($Symbol, "withoutSetter", function(description) {
          return wrap(uid(description), description);
        });
        propertyIsEnumerableModule.f = $propertyIsEnumerable;
        definePropertyModule.f = $defineProperty;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
        wrappedWellKnownSymbolModule.f = function(name) {
          return wrap(wellKnownSymbol(name), name);
        };
        if (DESCRIPTORS) {
          nativeDefineProperty($Symbol[PROTOTYPE], "description", {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });
          if (!IS_PURE) {
            redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
          }
        }
      }
      $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
        defineWellKnownSymbol(name);
      });
      $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
        "for": function(key) {
          var string = String(key);
          if (has(StringToSymbolRegistry, string))
            return StringToSymbolRegistry[string];
          var symbol = $Symbol(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        },
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym))
            throw TypeError(sym + " is not a symbol");
          if (has(SymbolToStringRegistry, sym))
            return SymbolToStringRegistry[sym];
        },
        useSetter: function() {
          USE_SETTER = true;
        },
        useSimple: function() {
          USE_SETTER = false;
        }
      });
      $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
      });
      $({ target: "Object", stat: true, forced: fails(function() {
        getOwnPropertySymbolsModule.f(1);
      }) }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return getOwnPropertySymbolsModule.f(toObject(it));
        }
      });
      if ($stringify) {
        FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
          var symbol = $Symbol();
          return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
        });
        $({ target: "JSON", stat: true, forced: FORCED_JSON_STRINGIFY }, {
          stringify: function stringify(it, replacer, space) {
            var args = [it];
            var index = 1;
            var $replacer;
            while (arguments.length > index)
              args.push(arguments[index++]);
            $replacer = replacer;
            if (!isObject(replacer) && it === void 0 || isSymbol(it))
              return;
            if (!isArray(replacer))
              replacer = function(key, value) {
                if (typeof $replacer == "function")
                  value = $replacer.call(this, key, value);
                if (!isSymbol(value))
                  return value;
              };
            args[1] = replacer;
            return $stringify.apply(null, args);
          }
        });
      }
      var FORCED_JSON_STRINGIFY;
      if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
        createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      }
      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.async-iterator.js
  var require_es_symbol_async_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.async-iterator.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("asyncIterator");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.description.js
  var require_es_symbol_description = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.description.js"() {
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.has-instance.js
  var require_es_symbol_has_instance = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.has-instance.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("hasInstance");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js
  var require_es_symbol_is_concat_spreadable = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("isConcatSpreadable");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.iterator.js
  var require_es_symbol_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.iterator.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("iterator");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.match.js
  var require_es_symbol_match = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.match.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("match");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.match-all.js
  var require_es_symbol_match_all = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.match-all.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("matchAll");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.replace.js
  var require_es_symbol_replace = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.replace.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("replace");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.search.js
  var require_es_symbol_search = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.search.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("search");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.species.js
  var require_es_symbol_species = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.species.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("species");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.split.js
  var require_es_symbol_split = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.split.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("split");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.to-primitive.js
  var require_es_symbol_to_primitive = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.to-primitive.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("toPrimitive");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.to-string-tag.js
  var require_es_symbol_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.to-string-tag.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("toStringTag");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.unscopables.js
  var require_es_symbol_unscopables = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.unscopables.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("unscopables");
    }
  });

  // node_modules/core-js-pure/modules/es.json.to-string-tag.js
  var require_es_json_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.json.to-string-tag.js"() {
      var global2 = require_global();
      var setToStringTag = require_set_to_string_tag();
      setToStringTag(global2.JSON, "JSON", true);
    }
  });

  // node_modules/core-js-pure/modules/es.math.to-string-tag.js
  var require_es_math_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.math.to-string-tag.js"() {
    }
  });

  // node_modules/core-js-pure/modules/es.reflect.to-string-tag.js
  var require_es_reflect_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.reflect.to-string-tag.js"() {
    }
  });

  // node_modules/core-js-pure/es/symbol/index.js
  var require_symbol = __commonJS({
    "node_modules/core-js-pure/es/symbol/index.js"(exports, module2) {
      require_es_array_concat();
      require_es_object_to_string();
      require_es_symbol();
      require_es_symbol_async_iterator();
      require_es_symbol_description();
      require_es_symbol_has_instance();
      require_es_symbol_is_concat_spreadable();
      require_es_symbol_iterator();
      require_es_symbol_match();
      require_es_symbol_match_all();
      require_es_symbol_replace();
      require_es_symbol_search();
      require_es_symbol_species();
      require_es_symbol_split();
      require_es_symbol_to_primitive();
      require_es_symbol_to_string_tag();
      require_es_symbol_unscopables();
      require_es_json_to_string_tag();
      require_es_math_to_string_tag();
      require_es_reflect_to_string_tag();
      var path = require_path();
      module2.exports = path.Symbol;
    }
  });

  // node_modules/core-js-pure/stable/symbol/index.js
  var require_symbol2 = __commonJS({
    "node_modules/core-js-pure/stable/symbol/index.js"(exports, module2) {
      var parent = require_symbol();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js
  var require_symbol3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js"(exports, module2) {
      module2.exports = require_symbol2();
    }
  });

  // node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js"(exports, module2) {
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module2.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator);
          throw error;
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/array-from.js
  var require_array_from2 = __commonJS({
    "node_modules/core-js-pure/internals/array-from.js"(exports, module2) {
      "use strict";
      var bind = require_function_bind_context();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var toLength2 = require_to_length();
      var createProperty = require_create_property();
      var getIteratorMethod = require_get_iterator_method();
      module2.exports = function from(arrayLike) {
        var O = toObject(arrayLike);
        var C = typeof this == "function" ? this : Array;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (mapping)
          mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
        if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          result = new C();
          for (; !(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = toLength2(O.length);
          result = new C(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }
        result.length = index;
        return result;
      };
    }
  });

  // node_modules/core-js-pure/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js-pure/internals/check-correctness-of-iteration.js"(exports, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module2.exports = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.from.js
  var require_es_array_from = __commonJS({
    "node_modules/core-js-pure/modules/es.array.from.js"() {
      var $ = require_export();
      var from = require_array_from2();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
        Array.from(iterable);
      });
      $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
        from
      });
    }
  });

  // node_modules/core-js-pure/es/array/from.js
  var require_from = __commonJS({
    "node_modules/core-js-pure/es/array/from.js"(exports, module2) {
      require_es_string_iterator();
      require_es_array_from();
      var path = require_path();
      module2.exports = path.Array.from;
    }
  });

  // node_modules/core-js-pure/stable/array/from.js
  var require_from2 = __commonJS({
    "node_modules/core-js-pure/stable/array/from.js"(exports, module2) {
      var parent = require_from();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js
  var require_from3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js"(exports, module2) {
      module2.exports = require_from2();
    }
  });

  // node_modules/core-js-pure/internals/array-method-uses-to-length.js
  var require_array_method_uses_to_length = __commonJS({
    "node_modules/core-js-pure/internals/array-method-uses-to-length.js"(exports, module2) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var has = require_has();
      var defineProperty = Object.defineProperty;
      var cache = {};
      var thrower = function(it) {
        throw it;
      };
      module2.exports = function(METHOD_NAME, options) {
        if (has(cache, METHOD_NAME))
          return cache[METHOD_NAME];
        if (!options)
          options = {};
        var method = [][METHOD_NAME];
        var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
        var argument0 = has(options, 0) ? options[0] : thrower;
        var argument1 = has(options, 1) ? options[1] : void 0;
        return cache[METHOD_NAME] = !!method && !fails(function() {
          if (ACCESSORS && !DESCRIPTORS)
            return true;
          var O = { length: -1 };
          if (ACCESSORS)
            defineProperty(O, 1, { enumerable: true, get: thrower });
          else
            O[1] = 1;
          method.call(O, argument0, argument1);
        });
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.slice.js
  var require_es_array_slice = __commonJS({
    "node_modules/core-js-pure/modules/es.array.slice.js"() {
      "use strict";
      var $ = require_export();
      var isObject = require_is_object();
      var isArray = require_is_array();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength2 = require_to_length();
      var toIndexedObject = require_to_indexed_object();
      var createProperty = require_create_property();
      var wellKnownSymbol = require_well_known_symbol();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var arrayMethodUsesToLength = require_array_method_uses_to_length();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
      var USES_TO_LENGTH = arrayMethodUsesToLength("slice", { ACCESSORS: true, 0: 0, 1: 2 });
      var SPECIES = wellKnownSymbol("species");
      var nativeSlice = [].slice;
      var max = Math.max;
      $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = toLength2(O.length);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
          var Constructor, result, n;
          if (isArray(O)) {
            Constructor = O.constructor;
            if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = void 0;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null)
                Constructor = void 0;
            }
            if (Constructor === Array || Constructor === void 0) {
              return nativeSlice.call(O, k, fin);
            }
          }
          result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
          for (n = 0; k < fin; k++, n++)
            if (k in O)
              createProperty(result, n, O[k]);
          result.length = n;
          return result;
        }
      });
    }
  });

  // node_modules/core-js-pure/internals/entry-virtual.js
  var require_entry_virtual = __commonJS({
    "node_modules/core-js-pure/internals/entry-virtual.js"(exports, module2) {
      var path = require_path();
      module2.exports = function(CONSTRUCTOR) {
        return path[CONSTRUCTOR + "Prototype"];
      };
    }
  });

  // node_modules/core-js-pure/es/array/virtual/slice.js
  var require_slice = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/slice.js"(exports, module2) {
      require_es_array_slice();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").slice;
    }
  });

  // node_modules/core-js-pure/es/instance/slice.js
  var require_slice2 = __commonJS({
    "node_modules/core-js-pure/es/instance/slice.js"(exports, module2) {
      var slice = require_slice();
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        var own = it.slice;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.slice ? slice : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/slice.js
  var require_slice3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/slice.js"(exports, module2) {
      var parent = require_slice2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js
  var require_slice4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"(exports, module2) {
      module2.exports = require_slice3();
    }
  });

  // node_modules/core-js-pure/features/object/define-property.js
  var require_define_property4 = __commonJS({
    "node_modules/core-js-pure/features/object/define-property.js"(exports, module2) {
      var parent = require_define_property();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/object/define-property.js
  var require_define_property5 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/object/define-property.js"(exports, module2) {
      module2.exports = require_define_property4();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/defineProperty.js"(exports, module2) {
      var _Object$defineProperty = require_define_property5();
      function _defineProperty2(obj, key, value) {
        if (key in obj) {
          _Object$defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      module2.exports = _defineProperty2;
    }
  });

  // node_modules/core-js-pure/internals/object-assign.js
  var require_object_assign = __commonJS({
    "node_modules/core-js-pure/internals/object-assign.js"(exports, module2) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var objectKeys = require_object_keys();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var nativeAssign = Object.assign;
      var defineProperty = Object.defineProperty;
      module2.exports = !nativeAssign || fails(function() {
        if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, "a", {
          enumerable: true,
          get: function() {
            defineProperty(this, "b", {
              value: 3,
              enumerable: false
            });
          }
        }), { b: 2 })).b !== 1)
          return true;
        var A = {};
        var B = {};
        var symbol = Symbol();
        var alphabet = "abcdefghijklmnopqrst";
        A[symbol] = 7;
        alphabet.split("").forEach(function(chr) {
          B[chr] = chr;
        });
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
              T[key] = S[key];
          }
        }
        return T;
      } : nativeAssign;
    }
  });

  // node_modules/core-js-pure/modules/es.object.assign.js
  var require_es_object_assign = __commonJS({
    "node_modules/core-js-pure/modules/es.object.assign.js"() {
      var $ = require_export();
      var assign = require_object_assign();
      $({ target: "Object", stat: true, forced: Object.assign !== assign }, {
        assign
      });
    }
  });

  // node_modules/core-js-pure/es/object/assign.js
  var require_assign = __commonJS({
    "node_modules/core-js-pure/es/object/assign.js"(exports, module2) {
      require_es_object_assign();
      var path = require_path();
      module2.exports = path.Object.assign;
    }
  });

  // node_modules/core-js-pure/stable/object/assign.js
  var require_assign2 = __commonJS({
    "node_modules/core-js-pure/stable/object/assign.js"(exports, module2) {
      var parent = require_assign();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js
  var require_assign3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js"(exports, module2) {
      module2.exports = require_assign2();
    }
  });

  // node_modules/core-js-pure/modules/es.object.keys.js
  var require_es_object_keys = __commonJS({
    "node_modules/core-js-pure/modules/es.object.keys.js"() {
      var $ = require_export();
      var toObject = require_to_object();
      var nativeKeys = require_object_keys();
      var fails = require_fails();
      var FAILS_ON_PRIMITIVES = fails(function() {
        nativeKeys(1);
      });
      $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
        keys: function keys(it) {
          return nativeKeys(toObject(it));
        }
      });
    }
  });

  // node_modules/core-js-pure/es/object/keys.js
  var require_keys = __commonJS({
    "node_modules/core-js-pure/es/object/keys.js"(exports, module2) {
      require_es_object_keys();
      var path = require_path();
      module2.exports = path.Object.keys;
    }
  });

  // node_modules/core-js-pure/stable/object/keys.js
  var require_keys2 = __commonJS({
    "node_modules/core-js-pure/stable/object/keys.js"(exports, module2) {
      var parent = require_keys();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js
  var require_keys3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"(exports, module2) {
      module2.exports = require_keys2();
    }
  });

  // node_modules/core-js-pure/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "node_modules/core-js-pure/internals/array-method-is-strict.js"(exports, module2) {
      "use strict";
      var fails = require_fails();
      module2.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            throw 1;
          }, 1);
        });
      };
    }
  });

  // node_modules/core-js-pure/internals/array-for-each.js
  var require_array_for_each = __commonJS({
    "node_modules/core-js-pure/internals/array-for-each.js"(exports, module2) {
      "use strict";
      var $forEach = require_array_iteration().forEach;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var arrayMethodUsesToLength = require_array_method_uses_to_length();
      var STRICT_METHOD = arrayMethodIsStrict("forEach");
      var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
      module2.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }
  });

  // node_modules/core-js-pure/modules/es.array.for-each.js
  var require_es_array_for_each = __commonJS({
    "node_modules/core-js-pure/modules/es.array.for-each.js"() {
      "use strict";
      var $ = require_export();
      var forEach = require_array_for_each();
      $({ target: "Array", proto: true, forced: [].forEach != forEach }, {
        forEach
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/for-each.js
  var require_for_each = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/for-each.js"(exports, module2) {
      require_es_array_for_each();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").forEach;
    }
  });

  // node_modules/core-js-pure/stable/array/virtual/for-each.js
  var require_for_each2 = __commonJS({
    "node_modules/core-js-pure/stable/array/virtual/for-each.js"(exports, module2) {
      var parent = require_for_each();
      module2.exports = parent;
    }
  });

  // node_modules/core-js-pure/stable/instance/for-each.js
  var require_for_each3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/for-each.js"(exports, module2) {
      require_web_dom_collections_iterator();
      var forEach = require_for_each2();
      var classof = require_classof();
      var ArrayPrototype = Array.prototype;
      var DOMIterables = {
        DOMTokenList: true,
        NodeList: true
      };
      module2.exports = function(it) {
        var own = it.forEach;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.forEach || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
      };
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
  var require_for_each4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"(exports, module2) {
      module2.exports = require_for_each3();
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/commandRole.js
  var require_commandRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var commandRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]]
      };
      var _default = commandRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js
  var require_compositeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var compositeRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]]
      };
      var _default = compositeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/inputRole.js
  var require_inputRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var inputRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "input"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]]
      };
      var _default = inputRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js
  var require_landmarkRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var landmarkRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = landmarkRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js
  var require_rangeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var rangeRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null,
          "aria-valuetext": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = rangeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js
  var require_roletypeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var roletypeRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          "aria-atomic": null,
          "aria-busy": null,
          "aria-controls": null,
          "aria-current": null,
          "aria-describedby": null,
          "aria-details": null,
          "aria-dropeffect": null,
          "aria-flowto": null,
          "aria-grabbed": null,
          "aria-hidden": null,
          "aria-keyshortcuts": null,
          "aria-label": null,
          "aria-labelledby": null,
          "aria-live": null,
          "aria-owns": null,
          "aria-relevant": null,
          "aria-roledescription": null
        },
        relatedConcepts: [{
          concept: {
            name: "rel"
          },
          module: "HTML"
        }, {
          concept: {
            name: "role"
          },
          module: "XHTML"
        }, {
          concept: {
            name: "type"
          },
          module: "Dublin Core"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      };
      var _default = roletypeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js
  var require_sectionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var sectionRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "frontmatter"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "SMIL"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = sectionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js
  var require_sectionheadRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var sectionheadRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = sectionheadRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/selectRole.js
  var require_selectRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var selectRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
      };
      var _default = selectRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/structureRole.js
  var require_structureRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var structureRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]]
      };
      var _default = structureRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js
  var require_widgetRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var widgetRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]]
      };
      var _default = widgetRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/abstract/windowRole.js
  var require_windowRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var windowRole = {
        abstract: true,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-modal": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]]
      };
      var _default = windowRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js
  var require_ariaAbstractRoles = __commonJS({
    "node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _map = _interopRequireDefault(require_map3());
      var _commandRole = _interopRequireDefault(require_commandRole());
      var _compositeRole = _interopRequireDefault(require_compositeRole());
      var _inputRole = _interopRequireDefault(require_inputRole());
      var _landmarkRole = _interopRequireDefault(require_landmarkRole());
      var _rangeRole = _interopRequireDefault(require_rangeRole());
      var _roletypeRole = _interopRequireDefault(require_roletypeRole());
      var _sectionRole = _interopRequireDefault(require_sectionRole());
      var _sectionheadRole = _interopRequireDefault(require_sectionheadRole());
      var _selectRole = _interopRequireDefault(require_selectRole());
      var _structureRole = _interopRequireDefault(require_structureRole());
      var _widgetRole = _interopRequireDefault(require_widgetRole());
      var _windowRole = _interopRequireDefault(require_windowRole());
      var ariaAbstractRoles = new _map.default([["command", _commandRole.default], ["composite", _compositeRole.default], ["input", _inputRole.default], ["landmark", _landmarkRole.default], ["range", _rangeRole.default], ["roletype", _roletypeRole.default], ["section", _sectionRole.default], ["sectionhead", _sectionheadRole.default], ["select", _selectRole.default], ["structure", _structureRole.default], ["widget", _widgetRole.default], ["window", _windowRole.default]]);
      var _default = ariaAbstractRoles;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/alertRole.js
  var require_alertRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/alertRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var alertRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "assertive"
        },
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = alertRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js
  var require_alertdialogRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var alertdialogRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
      };
      var _default = alertdialogRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/applicationRole.js
  var require_applicationRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var applicationRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = applicationRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/articleRole.js
  var require_articleRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/articleRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var articleRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "article"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "document"]]
      };
      var _default = articleRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/bannerRole.js
  var require_bannerRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var bannerRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "header"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = bannerRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js
  var require_blockquoteRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var blockquoteRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = blockquoteRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/buttonRole.js
  var require_buttonRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var buttonRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-pressed": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-pressed"
            }, {
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "false"
            }],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "true"
            }],
            constraints: ["direct descendant of details element with the open attribute defined"],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "button"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "image"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "reset"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "submit"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "button"
          },
          module: "HTML"
        }, {
          concept: {
            name: "trigger"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]]
      };
      var _default = buttonRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/captionRole.js
  var require_captionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/captionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var captionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = captionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/cellRole.js
  var require_cellRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/cellRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var cellRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-colspan": null,
          "aria-rowindex": null,
          "aria-rowspan": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["descendant of table"],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = cellRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js
  var require_checkboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var checkboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [["roletype", "widget", "input"]]
      };
      var _default = checkboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/codeRole.js
  var require_codeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/codeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var codeRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = codeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js
  var require_columnheaderRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var columnheaderRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          attributes: [{
            name: "scope",
            value: "col"
          }],
          concept: {
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
      };
      var _default = columnheaderRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js
  var require_comboboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var comboboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-expanded": "false",
          "aria-haspopup": "listbox"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              constraints: ["undefined"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              name: "size",
              value: 1
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-expanded": "false"
        },
        superClass: [["roletype", "widget", "input"]]
      };
      var _default = comboboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js
  var require_complementaryRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var complementaryRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "aside"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = complementaryRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js
  var require_contentinfoRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var contentinfoRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "footer"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = contentinfoRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/definitionRole.js
  var require_definitionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var definitionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dd"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = definitionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/deletionRole.js
  var require_deletionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var deletionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = deletionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/dialogRole.js
  var require_dialogRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var dialogRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dialog"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "window"]]
      };
      var _default = dialogRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/directoryRole.js
  var require_directoryRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var directoryRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          module: "DAISY Guide"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]]
      };
      var _default = directoryRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/documentRole.js
  var require_documentRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/documentRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var documentRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }, {
          concept: {
            name: "body"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = documentRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js
  var require_emphasisRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var emphasisRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = emphasisRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/feedRole.js
  var require_feedRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/feedRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var feedRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["article"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]]
      };
      var _default = feedRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/figureRole.js
  var require_figureRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/figureRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var figureRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "figure"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = figureRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/formRole.js
  var require_formRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/formRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var formRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "name"
            }],
            name: "form"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = formRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/genericRole.js
  var require_genericRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/genericRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var genericRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "span"
          },
          module: "HTML"
        }, {
          concept: {
            name: "div"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = genericRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/gridRole.js
  var require_gridRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/gridRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var gridRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-multiselectable": null,
          "aria-readonly": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "grid"
            }],
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
      };
      var _default = gridRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js
  var require_gridcellRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var gridcellRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-selected": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "gridcell"
            }],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
      };
      var _default = gridcellRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/groupRole.js
  var require_groupRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/groupRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var groupRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "details"
          },
          module: "HTML"
        }, {
          concept: {
            name: "fieldset"
          },
          module: "HTML"
        }, {
          concept: {
            name: "optgroup"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = groupRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/headingRole.js
  var require_headingRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/headingRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var headingRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-level": null
        },
        relatedConcepts: [{
          concept: {
            name: "h1"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h2"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h3"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h4"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h5"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h6"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-level": 2
        },
        superClass: [["roletype", "structure", "sectionhead"]]
      };
      var _default = headingRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/imgRole.js
  var require_imgRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/imgRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var imgRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            name: "imggroup"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = imgRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/insertionRole.js
  var require_insertionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var insertionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = insertionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/linkRole.js
  var require_linkRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/linkRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var linkRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "a"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "area"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "link"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]]
      };
      var _default = linkRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/listRole.js
  var require_listRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/listRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var listRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menu"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ol"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ul"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["listitem"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = listRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/listboxRole.js
  var require_listboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var listboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }, {
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "datalist"
          },
          module: "HTML"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["option", "group"], ["option"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
      };
      var _default = listboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/listitemRole.js
  var require_listitemRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var listitemRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of ol, ul or menu"],
            name: "li"
          },
          module: "HTML"
        }, {
          concept: {
            name: "item"
          },
          module: "XForms"
        }],
        requireContextRole: ["directory", "list"],
        requiredContextRole: ["directory", "list"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = listitemRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/logRole.js
  var require_logRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/logRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var logRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-live": "polite"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = logRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/mainRole.js
  var require_mainRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/mainRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var mainRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "main"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = mainRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js
  var require_marqueeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var marqueeRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = marqueeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/mathRole.js
  var require_mathRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/mathRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var mathRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "math"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = mathRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/menuRole.js
  var require_menuRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/menuRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var menuRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            name: "MENU"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }, {
          concept: {
            name: "sidebar"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
      };
      var _default = menuRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/menubarRole.js
  var require_menubarRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var menubarRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "toolbar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
      };
      var _default = menubarRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js
  var require_menuitemRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var menuitemRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "MENU_ITEM"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]]
      };
      var _default = menuitemRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js
  var require_menuitemcheckboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var menuitemcheckboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
      };
      var _default = menuitemcheckboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js
  var require_menuitemradioRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var menuitemradioRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
      };
      var _default = menuitemradioRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/meterRole.js
  var require_meterRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/meterRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var meterRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null
        },
        superClass: [["roletype", "structure", "range"]]
      };
      var _default = meterRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/navigationRole.js
  var require_navigationRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var navigationRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "nav"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = navigationRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/noneRole.js
  var require_noneRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/noneRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var noneRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      };
      var _default = noneRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/noteRole.js
  var require_noteRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/noteRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var noteRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = noteRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/optionRole.js
  var require_optionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/optionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var optionRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [{
          concept: {
            name: "item"
          },
          module: "XForms"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "option"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-selected": "false"
        },
        superClass: [["roletype", "widget", "input"]]
      };
      var _default = optionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js
  var require_paragraphRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var paragraphRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = paragraphRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/presentationRole.js
  var require_presentationRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var presentationRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = presentationRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js
  var require_progressbarRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var progressbarRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "progress"
          },
          module: "HTML"
        }, {
          concept: {
            name: "status"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
      };
      var _default = progressbarRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/radioRole.js
  var require_radioRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/radioRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var radioRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "radio"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [["roletype", "widget", "input"]]
      };
      var _default = radioRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js
  var require_radiogroupRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var radiogroupRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            name: "list"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["radio"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
      };
      var _default = radiogroupRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/regionRole.js
  var require_regionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/regionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var regionRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            name: "Device Independence Glossart perceivable unit"
          }
        }, {
          concept: {
            name: "frame"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = regionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/rowRole.js
  var require_rowRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/rowRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var rowRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-expanded": null,
          "aria-level": null,
          "aria-posinset": null,
          "aria-rowindex": null,
          "aria-selected": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "tr"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
      };
      var _default = rowRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js
  var require_rowgroupRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var rowgroupRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "tbody"
          },
          module: "HTML"
        }, {
          concept: {
            name: "tfoot"
          },
          module: "HTML"
        }, {
          concept: {
            name: "thead"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "table", "treegrid"],
        requiredContextRole: ["grid", "table", "treegrid"],
        requiredOwnedElements: [["row"]],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = rowgroupRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js
  var require_rowheaderRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var rowheaderRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "scope",
              value: "row"
            }],
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
      };
      var _default = rowheaderRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js
  var require_scrollbarRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var scrollbarRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-orientation": "vertical",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-valuenow": null
        },
        superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
      };
      var _default = scrollbarRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/searchRole.js
  var require_searchRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/searchRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var searchRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = searchRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js
  var require_searchboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var searchboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input", "textbox"]]
      };
      var _default = searchboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/separatorRole.js
  var require_separatorRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var separatorRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-valuetext": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [{
          concept: {
            name: "hr"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]]
      };
      var _default = separatorRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/sliderRole.js
  var require_sliderRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var sliderRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "range"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuenow": null
        },
        superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
      };
      var _default = sliderRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js
  var require_spinbuttonRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var spinbuttonRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-valuenow": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "number"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
      };
      var _default = spinbuttonRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/statusRole.js
  var require_statusRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/statusRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var statusRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "polite"
        },
        relatedConcepts: [{
          concept: {
            name: "output"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = statusRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/strongRole.js
  var require_strongRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/strongRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var strongRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = strongRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js
  var require_subscriptRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var subscriptRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = subscriptRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js
  var require_superscriptRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var superscriptRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = superscriptRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/switchRole.js
  var require_switchRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/switchRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var switchRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "button"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [["roletype", "widget", "input", "checkbox"]]
      };
      var _default = switchRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/tabRole.js
  var require_tabRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/tabRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var tabRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [],
        requireContextRole: ["tablist"],
        requiredContextRole: ["tablist"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
      };
      var _default = tabRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/tableRole.js
  var require_tableRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/tableRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var tableRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-colcount": null,
          "aria-rowcount": null
        },
        relatedConcepts: [{
          concept: {
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = tableRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/tablistRole.js
  var require_tablistRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var tablistRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-multiselectable": null,
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          module: "DAISY",
          concept: {
            name: "guide"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["tab"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"]]
      };
      var _default = tablistRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js
  var require_tabpanelRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var tabpanelRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = tabpanelRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/termRole.js
  var require_termRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/termRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var termRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dfn"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = termRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/textboxRole.js
  var require_textboxRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var textboxRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-multiline": null,
          "aria-placeholder": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "type"
            }, {
              constraints: ["undefined"],
              name: "list"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "input"
          },
          module: "XForms"
        }, {
          concept: {
            name: "textarea"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input"]]
      };
      var _default = textboxRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/timeRole.js
  var require_timeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/timeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var timeRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = timeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/timerRole.js
  var require_timerRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/timerRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var timerRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "status"]]
      };
      var _default = timerRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js
  var require_toolbarRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var toolbarRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "menubar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"]]
      };
      var _default = toolbarRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js
  var require_tooltipRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var tooltipRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = tooltipRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/treeRole.js
  var require_treeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/treeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var treeRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
      };
      var _default = treeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/treegridRole.js
  var require_treegridRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var treegridRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
      };
      var _default = treegridRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js
  var require_treeitemRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var treeitemRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-expanded": null,
          "aria-haspopup": null
        },
        relatedConcepts: [],
        requireContextRole: ["group", "tree"],
        requiredContextRole: ["group", "tree"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
      };
      var _default = treeitemRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js
  var require_ariaLiteralRoles = __commonJS({
    "node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _map = _interopRequireDefault(require_map3());
      var _alertRole = _interopRequireDefault(require_alertRole());
      var _alertdialogRole = _interopRequireDefault(require_alertdialogRole());
      var _applicationRole = _interopRequireDefault(require_applicationRole());
      var _articleRole = _interopRequireDefault(require_articleRole());
      var _bannerRole = _interopRequireDefault(require_bannerRole());
      var _blockquoteRole = _interopRequireDefault(require_blockquoteRole());
      var _buttonRole = _interopRequireDefault(require_buttonRole());
      var _captionRole = _interopRequireDefault(require_captionRole());
      var _cellRole = _interopRequireDefault(require_cellRole());
      var _checkboxRole = _interopRequireDefault(require_checkboxRole());
      var _codeRole = _interopRequireDefault(require_codeRole());
      var _columnheaderRole = _interopRequireDefault(require_columnheaderRole());
      var _comboboxRole = _interopRequireDefault(require_comboboxRole());
      var _complementaryRole = _interopRequireDefault(require_complementaryRole());
      var _contentinfoRole = _interopRequireDefault(require_contentinfoRole());
      var _definitionRole = _interopRequireDefault(require_definitionRole());
      var _deletionRole = _interopRequireDefault(require_deletionRole());
      var _dialogRole = _interopRequireDefault(require_dialogRole());
      var _directoryRole = _interopRequireDefault(require_directoryRole());
      var _documentRole = _interopRequireDefault(require_documentRole());
      var _emphasisRole = _interopRequireDefault(require_emphasisRole());
      var _feedRole = _interopRequireDefault(require_feedRole());
      var _figureRole = _interopRequireDefault(require_figureRole());
      var _formRole = _interopRequireDefault(require_formRole());
      var _genericRole = _interopRequireDefault(require_genericRole());
      var _gridRole = _interopRequireDefault(require_gridRole());
      var _gridcellRole = _interopRequireDefault(require_gridcellRole());
      var _groupRole = _interopRequireDefault(require_groupRole());
      var _headingRole = _interopRequireDefault(require_headingRole());
      var _imgRole = _interopRequireDefault(require_imgRole());
      var _insertionRole = _interopRequireDefault(require_insertionRole());
      var _linkRole = _interopRequireDefault(require_linkRole());
      var _listRole = _interopRequireDefault(require_listRole());
      var _listboxRole = _interopRequireDefault(require_listboxRole());
      var _listitemRole = _interopRequireDefault(require_listitemRole());
      var _logRole = _interopRequireDefault(require_logRole());
      var _mainRole = _interopRequireDefault(require_mainRole());
      var _marqueeRole = _interopRequireDefault(require_marqueeRole());
      var _mathRole = _interopRequireDefault(require_mathRole());
      var _menuRole = _interopRequireDefault(require_menuRole());
      var _menubarRole = _interopRequireDefault(require_menubarRole());
      var _menuitemRole = _interopRequireDefault(require_menuitemRole());
      var _menuitemcheckboxRole = _interopRequireDefault(require_menuitemcheckboxRole());
      var _menuitemradioRole = _interopRequireDefault(require_menuitemradioRole());
      var _meterRole = _interopRequireDefault(require_meterRole());
      var _navigationRole = _interopRequireDefault(require_navigationRole());
      var _noneRole = _interopRequireDefault(require_noneRole());
      var _noteRole = _interopRequireDefault(require_noteRole());
      var _optionRole = _interopRequireDefault(require_optionRole());
      var _paragraphRole = _interopRequireDefault(require_paragraphRole());
      var _presentationRole = _interopRequireDefault(require_presentationRole());
      var _progressbarRole = _interopRequireDefault(require_progressbarRole());
      var _radioRole = _interopRequireDefault(require_radioRole());
      var _radiogroupRole = _interopRequireDefault(require_radiogroupRole());
      var _regionRole = _interopRequireDefault(require_regionRole());
      var _rowRole = _interopRequireDefault(require_rowRole());
      var _rowgroupRole = _interopRequireDefault(require_rowgroupRole());
      var _rowheaderRole = _interopRequireDefault(require_rowheaderRole());
      var _scrollbarRole = _interopRequireDefault(require_scrollbarRole());
      var _searchRole = _interopRequireDefault(require_searchRole());
      var _searchboxRole = _interopRequireDefault(require_searchboxRole());
      var _separatorRole = _interopRequireDefault(require_separatorRole());
      var _sliderRole = _interopRequireDefault(require_sliderRole());
      var _spinbuttonRole = _interopRequireDefault(require_spinbuttonRole());
      var _statusRole = _interopRequireDefault(require_statusRole());
      var _strongRole = _interopRequireDefault(require_strongRole());
      var _subscriptRole = _interopRequireDefault(require_subscriptRole());
      var _superscriptRole = _interopRequireDefault(require_superscriptRole());
      var _switchRole = _interopRequireDefault(require_switchRole());
      var _tabRole = _interopRequireDefault(require_tabRole());
      var _tableRole = _interopRequireDefault(require_tableRole());
      var _tablistRole = _interopRequireDefault(require_tablistRole());
      var _tabpanelRole = _interopRequireDefault(require_tabpanelRole());
      var _termRole = _interopRequireDefault(require_termRole());
      var _textboxRole = _interopRequireDefault(require_textboxRole());
      var _timeRole = _interopRequireDefault(require_timeRole());
      var _timerRole = _interopRequireDefault(require_timerRole());
      var _toolbarRole = _interopRequireDefault(require_toolbarRole());
      var _tooltipRole = _interopRequireDefault(require_tooltipRole());
      var _treeRole = _interopRequireDefault(require_treeRole());
      var _treegridRole = _interopRequireDefault(require_treegridRole());
      var _treeitemRole = _interopRequireDefault(require_treeitemRole());
      var ariaLiteralRoles = new _map.default([["alert", _alertRole.default], ["alertdialog", _alertdialogRole.default], ["application", _applicationRole.default], ["article", _articleRole.default], ["banner", _bannerRole.default], ["blockquote", _blockquoteRole.default], ["button", _buttonRole.default], ["caption", _captionRole.default], ["cell", _cellRole.default], ["checkbox", _checkboxRole.default], ["code", _codeRole.default], ["columnheader", _columnheaderRole.default], ["combobox", _comboboxRole.default], ["complementary", _complementaryRole.default], ["contentinfo", _contentinfoRole.default], ["definition", _definitionRole.default], ["deletion", _deletionRole.default], ["dialog", _dialogRole.default], ["directory", _directoryRole.default], ["document", _documentRole.default], ["emphasis", _emphasisRole.default], ["feed", _feedRole.default], ["figure", _figureRole.default], ["form", _formRole.default], ["generic", _genericRole.default], ["grid", _gridRole.default], ["gridcell", _gridcellRole.default], ["group", _groupRole.default], ["heading", _headingRole.default], ["img", _imgRole.default], ["insertion", _insertionRole.default], ["link", _linkRole.default], ["list", _listRole.default], ["listbox", _listboxRole.default], ["listitem", _listitemRole.default], ["log", _logRole.default], ["main", _mainRole.default], ["marquee", _marqueeRole.default], ["math", _mathRole.default], ["menu", _menuRole.default], ["menubar", _menubarRole.default], ["menuitem", _menuitemRole.default], ["menuitemcheckbox", _menuitemcheckboxRole.default], ["menuitemradio", _menuitemradioRole.default], ["meter", _meterRole.default], ["navigation", _navigationRole.default], ["none", _noneRole.default], ["note", _noteRole.default], ["option", _optionRole.default], ["paragraph", _paragraphRole.default], ["presentation", _presentationRole.default], ["progressbar", _progressbarRole.default], ["radio", _radioRole.default], ["radiogroup", _radiogroupRole.default], ["region", _regionRole.default], ["row", _rowRole.default], ["rowgroup", _rowgroupRole.default], ["rowheader", _rowheaderRole.default], ["scrollbar", _scrollbarRole.default], ["search", _searchRole.default], ["searchbox", _searchboxRole.default], ["separator", _separatorRole.default], ["slider", _sliderRole.default], ["spinbutton", _spinbuttonRole.default], ["status", _statusRole.default], ["strong", _strongRole.default], ["subscript", _subscriptRole.default], ["superscript", _superscriptRole.default], ["switch", _switchRole.default], ["tab", _tabRole.default], ["table", _tableRole.default], ["tablist", _tablistRole.default], ["tabpanel", _tabpanelRole.default], ["term", _termRole.default], ["textbox", _textboxRole.default], ["time", _timeRole.default], ["timer", _timerRole.default], ["toolbar", _toolbarRole.default], ["tooltip", _tooltipRole.default], ["tree", _treeRole.default], ["treegrid", _treegridRole.default], ["treeitem", _treeitemRole.default]]);
      var _default = ariaLiteralRoles;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js
  var require_docAbstractRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docAbstractRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "abstract [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docAbstractRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js
  var require_docAcknowledgmentsRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docAcknowledgmentsRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "acknowledgments [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docAcknowledgmentsRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js
  var require_docAfterwordRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docAfterwordRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "afterword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docAfterwordRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js
  var require_docAppendixRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docAppendixRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "appendix [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docAppendixRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js
  var require_docBacklinkRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docBacklinkRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "content"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "referrer [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]]
      };
      var _default = docBacklinkRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js
  var require_docBiblioentryRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docBiblioentryRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "EPUB biblioentry [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-bibliography"],
        requiredContextRole: ["doc-bibliography"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]]
      };
      var _default = docBiblioentryRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js
  var require_docBibliographyRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docBibliographyRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "bibliography [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-biblioentry"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docBibliographyRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js
  var require_docBibliorefRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docBibliorefRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "biblioref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]]
      };
      var _default = docBibliorefRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js
  var require_docChapterRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docChapterRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "chapter [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docChapterRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js
  var require_docColophonRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docColophonRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "colophon [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docColophonRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js
  var require_docConclusionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docConclusionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "conclusion [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docConclusionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js
  var require_docCoverRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docCoverRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "cover [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "img"]]
      };
      var _default = docCoverRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js
  var require_docCreditRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docCreditRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credit [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docCreditRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js
  var require_docCreditsRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docCreditsRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credits [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docCreditsRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js
  var require_docDedicationRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docDedicationRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "dedication [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docDedicationRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js
  var require_docEndnoteRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docEndnoteRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-endnotes"],
        requiredContextRole: ["doc-endnotes"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]]
      };
      var _default = docEndnoteRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js
  var require_docEndnotesRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docEndnotesRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnotes [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-endnote"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docEndnotesRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js
  var require_docEpigraphRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docEpigraphRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epigraph [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docEpigraphRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js
  var require_docEpilogueRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docEpilogueRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epilogue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docEpilogueRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js
  var require_docErrataRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docErrataRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "errata [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docErrataRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js
  var require_docExampleRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docExampleRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docExampleRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js
  var require_docFootnoteRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docFootnoteRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "footnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docFootnoteRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js
  var require_docForewordRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docForewordRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "foreword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docForewordRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js
  var require_docGlossaryRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docGlossaryRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossary [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["definition"], ["term"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docGlossaryRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js
  var require_docGlossrefRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docGlossrefRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]]
      };
      var _default = docGlossrefRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js
  var require_docIndexRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docIndexRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "index [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
      };
      var _default = docIndexRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js
  var require_docIntroductionRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docIntroductionRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "introduction [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docIntroductionRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js
  var require_docNoterefRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docNoterefRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "noteref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]]
      };
      var _default = docNoterefRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js
  var require_docNoticeRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docNoticeRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "notice [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]]
      };
      var _default = docNoticeRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js
  var require_docPagebreakRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPagebreakRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: true,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "pagebreak [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "separator"]]
      };
      var _default = docPagebreakRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js
  var require_docPagelistRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPagelistRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "page-list [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
      };
      var _default = docPagelistRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js
  var require_docPartRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPartRole = {
        abstract: false,
        accessibleNameRequired: true,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "part [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docPartRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js
  var require_docPrefaceRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPrefaceRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "preface [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docPrefaceRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js
  var require_docPrologueRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPrologueRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "prologue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]]
      };
      var _default = docPrologueRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js
  var require_docPullquoteRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docPullquoteRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "pullquote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["none"]]
      };
      var _default = docPullquoteRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js
  var require_docQnaRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docQnaRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "qna [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]]
      };
      var _default = docQnaRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js
  var require_docSubtitleRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docSubtitleRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "subtitle [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "sectionhead"]]
      };
      var _default = docSubtitleRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js
  var require_docTipRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docTipRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "help [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]]
      };
      var _default = docTipRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js
  var require_docTocRole = __commonJS({
    "node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"(exports) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var docTocRole = {
        abstract: false,
        accessibleNameRequired: false,
        baseConcepts: [],
        childrenPresentational: false,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "toc [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
      };
      var _default = docTocRole;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js
  var require_ariaDpubRoles = __commonJS({
    "node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _map = _interopRequireDefault(require_map3());
      var _docAbstractRole = _interopRequireDefault(require_docAbstractRole());
      var _docAcknowledgmentsRole = _interopRequireDefault(require_docAcknowledgmentsRole());
      var _docAfterwordRole = _interopRequireDefault(require_docAfterwordRole());
      var _docAppendixRole = _interopRequireDefault(require_docAppendixRole());
      var _docBacklinkRole = _interopRequireDefault(require_docBacklinkRole());
      var _docBiblioentryRole = _interopRequireDefault(require_docBiblioentryRole());
      var _docBibliographyRole = _interopRequireDefault(require_docBibliographyRole());
      var _docBibliorefRole = _interopRequireDefault(require_docBibliorefRole());
      var _docChapterRole = _interopRequireDefault(require_docChapterRole());
      var _docColophonRole = _interopRequireDefault(require_docColophonRole());
      var _docConclusionRole = _interopRequireDefault(require_docConclusionRole());
      var _docCoverRole = _interopRequireDefault(require_docCoverRole());
      var _docCreditRole = _interopRequireDefault(require_docCreditRole());
      var _docCreditsRole = _interopRequireDefault(require_docCreditsRole());
      var _docDedicationRole = _interopRequireDefault(require_docDedicationRole());
      var _docEndnoteRole = _interopRequireDefault(require_docEndnoteRole());
      var _docEndnotesRole = _interopRequireDefault(require_docEndnotesRole());
      var _docEpigraphRole = _interopRequireDefault(require_docEpigraphRole());
      var _docEpilogueRole = _interopRequireDefault(require_docEpilogueRole());
      var _docErrataRole = _interopRequireDefault(require_docErrataRole());
      var _docExampleRole = _interopRequireDefault(require_docExampleRole());
      var _docFootnoteRole = _interopRequireDefault(require_docFootnoteRole());
      var _docForewordRole = _interopRequireDefault(require_docForewordRole());
      var _docGlossaryRole = _interopRequireDefault(require_docGlossaryRole());
      var _docGlossrefRole = _interopRequireDefault(require_docGlossrefRole());
      var _docIndexRole = _interopRequireDefault(require_docIndexRole());
      var _docIntroductionRole = _interopRequireDefault(require_docIntroductionRole());
      var _docNoterefRole = _interopRequireDefault(require_docNoterefRole());
      var _docNoticeRole = _interopRequireDefault(require_docNoticeRole());
      var _docPagebreakRole = _interopRequireDefault(require_docPagebreakRole());
      var _docPagelistRole = _interopRequireDefault(require_docPagelistRole());
      var _docPartRole = _interopRequireDefault(require_docPartRole());
      var _docPrefaceRole = _interopRequireDefault(require_docPrefaceRole());
      var _docPrologueRole = _interopRequireDefault(require_docPrologueRole());
      var _docPullquoteRole = _interopRequireDefault(require_docPullquoteRole());
      var _docQnaRole = _interopRequireDefault(require_docQnaRole());
      var _docSubtitleRole = _interopRequireDefault(require_docSubtitleRole());
      var _docTipRole = _interopRequireDefault(require_docTipRole());
      var _docTocRole = _interopRequireDefault(require_docTocRole());
      var ariaDpubRoles = new _map.default([["doc-abstract", _docAbstractRole.default], ["doc-acknowledgments", _docAcknowledgmentsRole.default], ["doc-afterword", _docAfterwordRole.default], ["doc-appendix", _docAppendixRole.default], ["doc-backlink", _docBacklinkRole.default], ["doc-biblioentry", _docBiblioentryRole.default], ["doc-bibliography", _docBibliographyRole.default], ["doc-biblioref", _docBibliorefRole.default], ["doc-chapter", _docChapterRole.default], ["doc-colophon", _docColophonRole.default], ["doc-conclusion", _docConclusionRole.default], ["doc-cover", _docCoverRole.default], ["doc-credit", _docCreditRole.default], ["doc-credits", _docCreditsRole.default], ["doc-dedication", _docDedicationRole.default], ["doc-endnote", _docEndnoteRole.default], ["doc-endnotes", _docEndnotesRole.default], ["doc-epigraph", _docEpigraphRole.default], ["doc-epilogue", _docEpilogueRole.default], ["doc-errata", _docErrataRole.default], ["doc-example", _docExampleRole.default], ["doc-footnote", _docFootnoteRole.default], ["doc-foreword", _docForewordRole.default], ["doc-glossary", _docGlossaryRole.default], ["doc-glossref", _docGlossrefRole.default], ["doc-index", _docIndexRole.default], ["doc-introduction", _docIntroductionRole.default], ["doc-noteref", _docNoterefRole.default], ["doc-notice", _docNoticeRole.default], ["doc-pagebreak", _docPagebreakRole.default], ["doc-pagelist", _docPagelistRole.default], ["doc-part", _docPartRole.default], ["doc-preface", _docPrefaceRole.default], ["doc-prologue", _docPrologueRole.default], ["doc-pullquote", _docPullquoteRole.default], ["doc-qna", _docQnaRole.default], ["doc-subtitle", _docSubtitleRole.default], ["doc-tip", _docTipRole.default], ["doc-toc", _docTocRole.default]]);
      var _default = ariaDpubRoles;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/rolesMap.js
  var require_rolesMap = __commonJS({
    "node_modules/aria-query/lib/rolesMap.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _getIterator2 = _interopRequireDefault(require_get_iterator3());
      var _isArray = _interopRequireDefault(require_is_array4());
      var _getIteratorMethod2 = _interopRequireDefault(require_get_iterator_method3());
      var _symbol = _interopRequireDefault(require_symbol3());
      var _from = _interopRequireDefault(require_from3());
      var _slice = _interopRequireDefault(require_slice4());
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _assign = _interopRequireDefault(require_assign3());
      var _keys = _interopRequireDefault(require_keys3());
      var _forEach = _interopRequireDefault(require_for_each4());
      var _map = _interopRequireDefault(require_map3());
      var _ariaAbstractRoles = _interopRequireDefault(require_ariaAbstractRoles());
      var _ariaLiteralRoles = _interopRequireDefault(require_ariaLiteralRoles());
      var _ariaDpubRoles = _interopRequireDefault(require_ariaDpubRoles());
      var _context;
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof _symbol.default === "undefined" || (0, _getIteratorMethod2.default)(o) == null) {
          if ((0, _isArray.default)(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = (0, _getIterator2.default)(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray3(o, minLen) {
        var _context2;
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray3(o, minLen);
        var n = (0, _slice.default)(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return (0, _from.default)(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray3(o, minLen);
      }
      function _arrayLikeToArray3(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      var rolesMap = new _map.default([]);
      (0, _forEach.default)(_context = [_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default]).call(_context, function(roleSet) {
        (0, _forEach.default)(roleSet).call(roleSet, function(roleDefinition, name) {
          return rolesMap.set(name, roleDefinition);
        });
      });
      (0, _forEach.default)(rolesMap).call(rolesMap, function(roleDefinition, name) {
        var _iterator = _createForOfIteratorHelper(roleDefinition.superClass), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var superClassIter = _step.value;
            var _iterator2 = _createForOfIteratorHelper(superClassIter), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var superClassName = _step2.value;
                var superClassDefinition = rolesMap.get(superClassName);
                if (superClassDefinition) {
                  for (var _i = 0, _Object$keys = (0, _keys.default)(superClassDefinition.props); _i < _Object$keys.length; _i++) {
                    var prop = _Object$keys[_i];
                    if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                      (0, _assign.default)(roleDefinition.props, (0, _defineProperty2.default)({}, prop, superClassDefinition.props[prop]));
                    }
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var _default = rolesMap;
      exports.default = _default;
    }
  });

  // node_modules/core-js-pure/modules/es.set.js
  var require_es_set = __commonJS({
    "node_modules/core-js-pure/modules/es.set.js"(exports, module2) {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      module2.exports = collection("Set", function(init) {
        return function Set2() {
          return init(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js-pure/es/set/index.js
  var require_set = __commonJS({
    "node_modules/core-js-pure/es/set/index.js"(exports, module2) {
      require_es_set();
      require_es_object_to_string();
      require_es_string_iterator();
      require_web_dom_collections_iterator();
      var path = require_path();
      module2.exports = path.Set;
    }
  });

  // node_modules/core-js-pure/stable/set/index.js
  var require_set2 = __commonJS({
    "node_modules/core-js-pure/stable/set/index.js"(exports, module2) {
      var parent = require_set();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/set.js
  var require_set3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/set.js"(exports, module2) {
      module2.exports = require_set2();
    }
  });

  // node_modules/core-js-pure/features/array/is-array.js
  var require_is_array5 = __commonJS({
    "node_modules/core-js-pure/features/array/is-array.js"(exports, module2) {
      var parent = require_is_array2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/array/is-array.js
  var require_is_array6 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/array/is-array.js"(exports, module2) {
      module2.exports = require_is_array5();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js"(exports, module2) {
      var _Array$isArray = require_is_array6();
      function _arrayWithHoles2(arr) {
        if (_Array$isArray(arr))
          return arr;
      }
      module2.exports = _arrayWithHoles2;
    }
  });

  // node_modules/core-js-pure/internals/is-iterable.js
  var require_is_iterable = __commonJS({
    "node_modules/core-js-pure/internals/is-iterable.js"(exports, module2) {
      var classof = require_classof();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      module2.exports = function(it) {
        var O = Object(it);
        return O[ITERATOR] !== void 0 || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
      };
    }
  });

  // node_modules/core-js-pure/features/is-iterable.js
  var require_is_iterable2 = __commonJS({
    "node_modules/core-js-pure/features/is-iterable.js"(exports, module2) {
      require_web_dom_collections_iterator();
      require_es_string_iterator();
      var isIterable = require_is_iterable();
      module2.exports = isIterable;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/is-iterable.js
  var require_is_iterable3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/is-iterable.js"(exports, module2) {
      module2.exports = require_is_iterable2();
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js
  var require_esnext_symbol_async_dispose = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("asyncDispose");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.dispose.js
  var require_esnext_symbol_dispose = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.dispose.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("dispose");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.observable.js
  var require_esnext_symbol_observable = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.observable.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("observable");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js
  var require_esnext_symbol_pattern_match = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("patternMatch");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.replace-all.js
  var require_esnext_symbol_replace_all = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.replace-all.js"() {
      var defineWellKnownSymbol = require_define_well_known_symbol();
      defineWellKnownSymbol("replaceAll");
    }
  });

  // node_modules/core-js-pure/features/symbol/index.js
  var require_symbol4 = __commonJS({
    "node_modules/core-js-pure/features/symbol/index.js"(exports, module2) {
      var parent = require_symbol();
      require_esnext_symbol_async_dispose();
      require_esnext_symbol_dispose();
      require_esnext_symbol_observable();
      require_esnext_symbol_pattern_match();
      require_esnext_symbol_replace_all();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/symbol.js
  var require_symbol5 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/symbol.js"(exports, module2) {
      module2.exports = require_symbol4();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js"(exports, module2) {
      var _getIterator = require_get_iterator3();
      var _isIterable = require_is_iterable3();
      var _Symbol = require_symbol5();
      function _iterableToArrayLimit2(arr, i) {
        if (typeof _Symbol === "undefined" || !_isIterable(Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      module2.exports = _iterableToArrayLimit2;
    }
  });

  // node_modules/core-js-pure/features/array/from.js
  var require_from4 = __commonJS({
    "node_modules/core-js-pure/features/array/from.js"(exports, module2) {
      var parent = require_from();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/array/from.js
  var require_from5 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/array/from.js"(exports, module2) {
      module2.exports = require_from4();
    }
  });

  // node_modules/core-js-pure/features/instance/slice.js
  var require_slice5 = __commonJS({
    "node_modules/core-js-pure/features/instance/slice.js"(exports, module2) {
      var parent = require_slice2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/instance/slice.js
  var require_slice6 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/instance/slice.js"(exports, module2) {
      module2.exports = require_slice5();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js"(exports, module2) {
      function _arrayLikeToArray3(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      module2.exports = _arrayLikeToArray3;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js"(exports, module2) {
      var _Array$from = require_from5();
      var _sliceInstanceProperty = require_slice6();
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray3(o, minLen) {
        var _context;
        if (!o)
          return;
        if (typeof o === "string")
          return arrayLikeToArray(o, minLen);
        var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return _Array$from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return arrayLikeToArray(o, minLen);
      }
      module2.exports = _unsupportedIterableToArray3;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js"(exports, module2) {
      function _nonIterableRest2() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module2.exports = _nonIterableRest2;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js"(exports, module2) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray2(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }
      module2.exports = _slicedToArray2;
    }
  });

  // node_modules/core-js-pure/es/array/virtual/entries.js
  var require_entries = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/entries.js"(exports, module2) {
      require_es_array_iterator();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").entries;
    }
  });

  // node_modules/core-js-pure/stable/array/virtual/entries.js
  var require_entries2 = __commonJS({
    "node_modules/core-js-pure/stable/array/virtual/entries.js"(exports, module2) {
      var parent = require_entries();
      module2.exports = parent;
    }
  });

  // node_modules/core-js-pure/stable/instance/entries.js
  var require_entries3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/entries.js"(exports, module2) {
      require_web_dom_collections_iterator();
      var entries = require_entries2();
      var classof = require_classof();
      var ArrayPrototype = Array.prototype;
      var DOMIterables = {
        DOMTokenList: true,
        NodeList: true
      };
      module2.exports = function(it) {
        var own = it.entries;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.entries || DOMIterables.hasOwnProperty(classof(it)) ? entries : own;
      };
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js
  var require_entries4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js"(exports, module2) {
      module2.exports = require_entries3();
    }
  });

  // node_modules/core-js-pure/modules/es.array.find.js
  var require_es_array_find = __commonJS({
    "node_modules/core-js-pure/modules/es.array.find.js"() {
      "use strict";
      var $ = require_export();
      var $find = require_array_iteration().find;
      var addToUnscopables = require_add_to_unscopables();
      var arrayMethodUsesToLength = require_array_method_uses_to_length();
      var FIND = "find";
      var SKIPS_HOLES = true;
      var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);
      if (FIND in [])
        Array(1)[FIND](function() {
          SKIPS_HOLES = false;
        });
      $({ target: "Array", proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
        find: function find(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables(FIND);
    }
  });

  // node_modules/core-js-pure/es/array/virtual/find.js
  var require_find = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/find.js"(exports, module2) {
      require_es_array_find();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").find;
    }
  });

  // node_modules/core-js-pure/es/instance/find.js
  var require_find2 = __commonJS({
    "node_modules/core-js-pure/es/instance/find.js"(exports, module2) {
      var find = require_find();
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        var own = it.find;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.find ? find : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/find.js
  var require_find3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/find.js"(exports, module2) {
      var parent = require_find2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js
  var require_find4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"(exports, module2) {
      module2.exports = require_find3();
    }
  });

  // node_modules/core-js-pure/modules/es.json.stringify.js
  var require_es_json_stringify = __commonJS({
    "node_modules/core-js-pure/modules/es.json.stringify.js"() {
      var $ = require_export();
      var getBuiltIn = require_get_built_in();
      var fails = require_fails();
      var $stringify = getBuiltIn("JSON", "stringify");
      var re = /[\uD800-\uDFFF]/g;
      var low = /^[\uD800-\uDBFF]$/;
      var hi = /^[\uDC00-\uDFFF]$/;
      var fix = function(match, offset, string) {
        var prev = string.charAt(offset - 1);
        var next = string.charAt(offset + 1);
        if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
          return "\\u" + match.charCodeAt(0).toString(16);
        }
        return match;
      };
      var FORCED = fails(function() {
        return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
      });
      if ($stringify) {
        $({ target: "JSON", stat: true, forced: FORCED }, {
          stringify: function stringify(it, replacer, space) {
            var result = $stringify.apply(null, arguments);
            return typeof result == "string" ? result.replace(re, fix) : result;
          }
        });
      }
    }
  });

  // node_modules/core-js-pure/es/json/stringify.js
  var require_stringify = __commonJS({
    "node_modules/core-js-pure/es/json/stringify.js"(exports, module2) {
      require_es_json_stringify();
      var core = require_path();
      if (!core.JSON)
        core.JSON = { stringify: JSON.stringify };
      module2.exports = function stringify(it, replacer, space) {
        return core.JSON.stringify.apply(null, arguments);
      };
    }
  });

  // node_modules/core-js-pure/stable/json/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/core-js-pure/stable/json/stringify.js"(exports, module2) {
      var parent = require_stringify();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js
  var require_stringify3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"(exports, module2) {
      module2.exports = require_stringify2();
    }
  });

  // node_modules/core-js-pure/es/array/virtual/concat.js
  var require_concat = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/concat.js"(exports, module2) {
      require_es_array_concat();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").concat;
    }
  });

  // node_modules/core-js-pure/es/instance/concat.js
  var require_concat2 = __commonJS({
    "node_modules/core-js-pure/es/instance/concat.js"(exports, module2) {
      var concat = require_concat();
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        var own = it.concat;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.concat ? concat : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/concat.js
  var require_concat3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/concat.js"(exports, module2) {
      var parent = require_concat2();
      module2.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
  var require_concat4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"(exports, module2) {
      module2.exports = require_concat3();
    }
  });

  // node_modules/core-js-pure/es/array/virtual/keys.js
  var require_keys4 = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/keys.js"(exports, module2) {
      require_es_array_iterator();
      var entryVirtual = require_entry_virtual();
      module2.exports = entryVirtual("Array").keys;
    }
  });

  // node_modules/core-js-pure/stable/array/virtual/keys.js
  var require_keys5 = __commonJS({
    "node_modules/core-js-pure/stable/array/virtual/keys.js"(exports, module2) {
      var parent = require_keys4();
      module2.exports = parent;
    }
  });

  // node_modules/core-js-pure/stable/instance/keys.js
  var require_keys6 = __commonJS({
    "node_modules/core-js-pure/stable/instance/keys.js"(exports, module2) {
      require_web_dom_collections_iterator();
      var keys = require_keys5();
      var classof = require_classof();
      var ArrayPrototype = Array.prototype;
      var DOMIterables = {
        DOMTokenList: true,
        NodeList: true
      };
      module2.exports = function(it) {
        var own = it.keys;
        return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.keys || DOMIterables.hasOwnProperty(classof(it)) ? keys : own;
      };
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js
  var require_keys7 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js"(exports, module2) {
      module2.exports = require_keys6();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js
  var require_arrayWithoutHoles = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js"(exports, module2) {
      var _Array$isArray = require_is_array6();
      var arrayLikeToArray = require_arrayLikeToArray();
      function _arrayWithoutHoles(arr) {
        if (_Array$isArray(arr))
          return arrayLikeToArray(arr);
      }
      module2.exports = _arrayWithoutHoles;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js
  var require_iterableToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js"(exports, module2) {
      var _Array$from = require_from5();
      var _isIterable = require_is_iterable3();
      var _Symbol = require_symbol5();
      function _iterableToArray(iter) {
        if (typeof _Symbol !== "undefined" && _isIterable(Object(iter)))
          return _Array$from(iter);
      }
      module2.exports = _iterableToArray;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js
  var require_nonIterableSpread = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js"(exports, module2) {
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module2.exports = _nonIterableSpread;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js
  var require_toConsumableArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js"(exports, module2) {
      var arrayWithoutHoles = require_arrayWithoutHoles();
      var iterableToArray = require_iterableToArray();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableSpread = require_nonIterableSpread();
      function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
      }
      module2.exports = _toConsumableArray;
    }
  });

  // node_modules/aria-query/lib/elementRoleMap.js
  var require_elementRoleMap = __commonJS({
    "node_modules/aria-query/lib/elementRoleMap.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _set = _interopRequireDefault(require_set3());
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _entries = _interopRequireDefault(require_entries4());
      var _find = _interopRequireDefault(require_find4());
      var _stringify = _interopRequireDefault(require_stringify3());
      var _concat = _interopRequireDefault(require_concat4());
      var _keys = _interopRequireDefault(require_keys7());
      var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
      var _forEach = _interopRequireDefault(require_for_each4());
      var _map = _interopRequireDefault(require_map3());
      var _rolesMap = _interopRequireDefault(require_rolesMap());
      var _context;
      var elementRoleMap = new _map.default([]);
      (0, _forEach.default)(_context = (0, _toConsumableArray2.default)((0, _keys.default)(_rolesMap.default).call(_rolesMap.default))).call(_context, function(key) {
        var role = _rolesMap.default.get(key);
        if (role) {
          var _context2, _context3;
          (0, _forEach.default)(_context2 = (0, _concat.default)(_context3 = []).call(_context3, (0, _toConsumableArray2.default)(role.baseConcepts), (0, _toConsumableArray2.default)(role.relatedConcepts))).call(_context2, function(relation) {
            if (relation.module === "HTML") {
              var concept = relation.concept;
              if (concept) {
                var _context4;
                var conceptStr = (0, _stringify.default)(concept);
                var roles2 = ((0, _find.default)(_context4 = (0, _toConsumableArray2.default)((0, _entries.default)(elementRoleMap).call(elementRoleMap))).call(_context4, function(_ref) {
                  var _ref2 = (0, _slicedToArray2.default)(_ref, 2), key2 = _ref2[0], value = _ref2[1];
                  return (0, _stringify.default)(key2) === conceptStr;
                }) || [])[1];
                if (!roles2) {
                  roles2 = new _set.default([]);
                }
                roles2.add(key);
                elementRoleMap.set(concept, roles2);
              }
            }
          });
        }
      });
      var _default = elementRoleMap;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/roleElementMap.js
  var require_roleElementMap = __commonJS({
    "node_modules/aria-query/lib/roleElementMap.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _set = _interopRequireDefault(require_set3());
      var _concat = _interopRequireDefault(require_concat4());
      var _keys = _interopRequireDefault(require_keys7());
      var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
      var _forEach = _interopRequireDefault(require_for_each4());
      var _map = _interopRequireDefault(require_map3());
      var _rolesMap = _interopRequireDefault(require_rolesMap());
      var _context;
      var roleElementMap = new _map.default([]);
      (0, _forEach.default)(_context = (0, _toConsumableArray2.default)((0, _keys.default)(_rolesMap.default).call(_rolesMap.default))).call(_context, function(key) {
        var role = _rolesMap.default.get(key);
        if (role) {
          var _context2, _context3;
          (0, _forEach.default)(_context2 = (0, _concat.default)(_context3 = []).call(_context3, (0, _toConsumableArray2.default)(role.baseConcepts), (0, _toConsumableArray2.default)(role.relatedConcepts))).call(_context2, function(relation) {
            if (relation.module === "HTML") {
              var concept = relation.concept;
              if (concept) {
                var relationConcepts = roleElementMap.get(key) || new _set.default([]);
                relationConcepts.add(concept);
                roleElementMap.set(key, relationConcepts);
              }
            }
          });
        }
      });
      var _default = roleElementMap;
      exports.default = _default;
    }
  });

  // node_modules/aria-query/lib/index.js
  var require_lib = __commonJS({
    "node_modules/aria-query/lib/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault2();
      var _Object$defineProperty = require_define_property3();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports.roleElements = exports.elementRoles = exports.roles = exports.dom = exports.aria = void 0;
      var _ariaPropsMap = _interopRequireDefault(require_ariaPropsMap());
      var _domMap = _interopRequireDefault(require_domMap());
      var _rolesMap = _interopRequireDefault(require_rolesMap());
      var _elementRoleMap = _interopRequireDefault(require_elementRoleMap());
      var _roleElementMap = _interopRequireDefault(require_roleElementMap());
      var aria = _ariaPropsMap.default;
      exports.aria = aria;
      var dom = _domMap.default;
      exports.dom = dom;
      var roles2 = _rolesMap.default;
      exports.roles = roles2;
      var elementRoles2 = _elementRoleMap.default;
      exports.elementRoles = elementRoles2;
      var roleElements = _roleElementMap.default;
      exports.roleElements = roleElements;
    }
  });

  // node_modules/@testing-library/dom/dist/role-helpers.js
  var require_role_helpers = __commonJS({
    "node_modules/@testing-library/dom/dist/role-helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getRoles = getRoles2;
      exports.getImplicitAriaRoles = getImplicitAriaRoles2;
      exports.isSubtreeInaccessible = isSubtreeInaccessible2;
      exports.prettyRoles = prettyRoles2;
      exports.isInaccessible = isInaccessible2;
      exports.computeAriaSelected = computeAriaSelected2;
      exports.computeAriaChecked = computeAriaChecked2;
      exports.computeAriaPressed = computeAriaPressed2;
      exports.computeAriaExpanded = computeAriaExpanded2;
      exports.computeHeadingLevel = computeHeadingLevel2;
      exports.logRoles = void 0;
      var _ariaQuery = require_lib();
      var _domAccessibilityApi = require_dist();
      var _prettyDom = require_pretty_dom();
      var _config = require_config();
      var elementRoleList2 = buildElementRoleList2(_ariaQuery.elementRoles);
      function isSubtreeInaccessible2(element) {
        if (element.hidden === true) {
          return true;
        }
        if (element.getAttribute("aria-hidden") === "true") {
          return true;
        }
        const window2 = element.ownerDocument.defaultView;
        if (window2.getComputedStyle(element).display === "none") {
          return true;
        }
        return false;
      }
      function isInaccessible2(element, options = {}) {
        const {
          isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible2
        } = options;
        const window2 = element.ownerDocument.defaultView;
        if (window2.getComputedStyle(element).visibility === "hidden") {
          return true;
        }
        let currentElement = element;
        while (currentElement) {
          if (isSubtreeInaccessibleImpl(currentElement)) {
            return true;
          }
          currentElement = currentElement.parentElement;
        }
        return false;
      }
      function getImplicitAriaRoles2(currentNode) {
        for (const {
          match,
          roles: roles2
        } of elementRoleList2) {
          if (match(currentNode)) {
            return [...roles2];
          }
        }
        return [];
      }
      function buildElementRoleList2(elementRolesMap) {
        function makeElementSelector({
          name,
          attributes
        }) {
          return `${name}${attributes.map(({
            name: attributeName,
            value,
            constraints = []
          }) => {
            const shouldNotExist = constraints.indexOf("undefined") !== -1;
            if (shouldNotExist) {
              return `:not([${attributeName}])`;
            } else if (value) {
              return `[${attributeName}="${value}"]`;
            } else {
              return `[${attributeName}]`;
            }
          }).join("")}`;
        }
        function getSelectorSpecificity({
          attributes = []
        }) {
          return attributes.length;
        }
        function bySelectorSpecificity({
          specificity: leftSpecificity
        }, {
          specificity: rightSpecificity
        }) {
          return rightSpecificity - leftSpecificity;
        }
        function match(element) {
          return (node) => {
            let {
              attributes = []
            } = element;
            const typeTextIndex = attributes.findIndex((attribute) => attribute.value && attribute.name === "type" && attribute.value === "text");
            if (typeTextIndex >= 0) {
              attributes = [...attributes.slice(0, typeTextIndex), ...attributes.slice(typeTextIndex + 1)];
              if (node.type !== "text") {
                return false;
              }
            }
            return node.matches(makeElementSelector({
              ...element,
              attributes
            }));
          };
        }
        let result = [];
        for (const [element, roles2] of elementRolesMap.entries()) {
          result = [...result, {
            match: match(element),
            roles: Array.from(roles2),
            specificity: getSelectorSpecificity(element)
          }];
        }
        return result.sort(bySelectorSpecificity);
      }
      function getRoles2(container, {
        hidden = false
      } = {}) {
        function flattenDOM(node) {
          return [node, ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], [])];
        }
        return flattenDOM(container).filter((element) => {
          return hidden === false ? isInaccessible2(element) === false : true;
        }).reduce((acc, node) => {
          let roles2 = [];
          if (node.hasAttribute("role")) {
            roles2 = node.getAttribute("role").split(" ").slice(0, 1);
          } else {
            roles2 = getImplicitAriaRoles2(node);
          }
          return roles2.reduce((rolesAcc, role) => Array.isArray(rolesAcc[role]) ? {
            ...rolesAcc,
            [role]: [...rolesAcc[role], node]
          } : {
            ...rolesAcc,
            [role]: [node]
          }, acc);
        }, {});
      }
      function prettyRoles2(dom, {
        hidden
      }) {
        const roles2 = getRoles2(dom, {
          hidden
        });
        return Object.entries(roles2).filter(([role]) => role !== "generic").map(([role, elements]) => {
          const delimiterBar = "-".repeat(50);
          const elementsString = elements.map((el) => {
            const nameString = `Name "${(0, _domAccessibilityApi.computeAccessibleName)(el, {
              computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
            })}":
`;
            const domString = (0, _prettyDom.prettyDOM)(el.cloneNode(false));
            return `${nameString}${domString}`;
          }).join("\n\n");
          return `${role}:

${elementsString}

${delimiterBar}`;
        }).join("\n");
      }
      var logRoles = (dom, {
        hidden = false
      } = {}) => console.log(prettyRoles2(dom, {
        hidden
      }));
      exports.logRoles = logRoles;
      function computeAriaSelected2(element) {
        if (element.tagName === "OPTION") {
          return element.selected;
        }
        return checkBooleanAttribute2(element, "aria-selected");
      }
      function computeAriaChecked2(element) {
        if ("indeterminate" in element && element.indeterminate) {
          return void 0;
        }
        if ("checked" in element) {
          return element.checked;
        }
        return checkBooleanAttribute2(element, "aria-checked");
      }
      function computeAriaPressed2(element) {
        return checkBooleanAttribute2(element, "aria-pressed");
      }
      function computeAriaExpanded2(element) {
        return checkBooleanAttribute2(element, "aria-expanded");
      }
      function checkBooleanAttribute2(element, attribute) {
        const attributeValue = element.getAttribute(attribute);
        if (attributeValue === "true") {
          return true;
        }
        if (attributeValue === "false") {
          return false;
        }
        return void 0;
      }
      function computeHeadingLevel2(element) {
        const implicitHeadingLevels = {
          H1: 1,
          H2: 2,
          H3: 3,
          H4: 4,
          H5: 5,
          H6: 6
        };
        const ariaLevelAttribute = element.getAttribute("aria-level") && Number(element.getAttribute("aria-level"));
        return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
      }
    }
  });

  // node_modules/@testing-library/dom/dist/suggestions.js
  var require_suggestions = __commonJS({
    "node_modules/@testing-library/dom/dist/suggestions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getSuggestedQuery = getSuggestedQuery2;
      var _domAccessibilityApi = require_dist();
      var _matches = require_matches();
      var _getNodeText = require_get_node_text();
      var _config = require_config();
      var _roleHelpers = require_role_helpers();
      var _labelHelpers = require_label_helpers();
      var normalize2 = (0, _matches.getDefaultNormalizer)();
      function escapeRegExp2(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function getRegExpMatcher2(string) {
        return new RegExp(escapeRegExp2(string.toLowerCase()), "i");
      }
      function makeSuggestion2(queryName, element, content, {
        variant,
        name
      }) {
        let warning = "";
        const queryOptions = {};
        const queryArgs = [["Role", "TestId"].includes(queryName) ? content : getRegExpMatcher2(content)];
        if (name) {
          queryOptions.name = getRegExpMatcher2(name);
        }
        if (queryName === "Role" && (0, _roleHelpers.isInaccessible)(element)) {
          queryOptions.hidden = true;
          warning = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `;
        }
        if (Object.keys(queryOptions).length > 0) {
          queryArgs.push(queryOptions);
        }
        const queryMethod = `${variant}By${queryName}`;
        return {
          queryName,
          queryMethod,
          queryArgs,
          variant,
          warning,
          toString() {
            if (warning) {
              console.warn(warning);
            }
            let [text, options] = queryArgs;
            text = typeof text === "string" ? `'${text}'` : text;
            options = options ? `, { ${Object.entries(options).map(([k, v]) => `${k}: ${v}`).join(", ")} }` : "";
            return `${queryMethod}(${text}${options})`;
          }
        };
      }
      function canSuggest2(currentMethod, requestedMethod, data) {
        return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
      }
      function getSuggestedQuery2(element, variant = "get", method) {
        var _element$getAttribute, _getImplicitAriaRoles;
        if (element.matches(_config.DEFAULT_IGNORE_TAGS)) {
          return void 0;
        }
        const role = (_element$getAttribute = element.getAttribute("role")) != null ? _element$getAttribute : (_getImplicitAriaRoles = (0, _roleHelpers.getImplicitAriaRoles)(element)) == null ? void 0 : _getImplicitAriaRoles[0];
        if (role !== "generic" && canSuggest2("Role", method, role)) {
          return makeSuggestion2("Role", element, role, {
            variant,
            name: (0, _domAccessibilityApi.computeAccessibleName)(element, {
              computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
            })
          });
        }
        const labelText = (0, _labelHelpers.getLabels)(document, element).map((label) => label.content).join(" ");
        if (canSuggest2("LabelText", method, labelText)) {
          return makeSuggestion2("LabelText", element, labelText, {
            variant
          });
        }
        const placeholderText = element.getAttribute("placeholder");
        if (canSuggest2("PlaceholderText", method, placeholderText)) {
          return makeSuggestion2("PlaceholderText", element, placeholderText, {
            variant
          });
        }
        const textContent = normalize2((0, _getNodeText.getNodeText)(element));
        if (canSuggest2("Text", method, textContent)) {
          return makeSuggestion2("Text", element, textContent, {
            variant
          });
        }
        if (canSuggest2("DisplayValue", method, element.value)) {
          return makeSuggestion2("DisplayValue", element, normalize2(element.value), {
            variant
          });
        }
        const alt = element.getAttribute("alt");
        if (canSuggest2("AltText", method, alt)) {
          return makeSuggestion2("AltText", element, alt, {
            variant
          });
        }
        const title = element.getAttribute("title");
        if (canSuggest2("Title", method, title)) {
          return makeSuggestion2("Title", element, title, {
            variant
          });
        }
        const testId = element.getAttribute((0, _config.getConfig)().testIdAttribute);
        if (canSuggest2("TestId", method, testId)) {
          return makeSuggestion2("TestId", element, testId, {
            variant
          });
        }
        return void 0;
      }
    }
  });

  // node_modules/@testing-library/dom/dist/wait-for.js
  var require_wait_for = __commonJS({
    "node_modules/@testing-library/dom/dist/wait-for.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.waitFor = waitForWrapper2;
      exports.wait = wait;
      var _helpers = require_helpers();
      var _config = require_config();
      function copyStackTrace2(target, source) {
        target.stack = source.stack.replace(source.message, target.message);
      }
      function waitFor2(callback, {
        container = (0, _helpers.getDocument)(),
        timeout = (0, _config.getConfig)().asyncUtilTimeout,
        showOriginalStackTrace = (0, _config.getConfig)().showOriginalStackTrace,
        stackTraceError,
        interval = 50,
        onTimeout = (error) => {
          error.message = (0, _config.getConfig)().getElementError(error.message, container).message;
          return error;
        },
        mutationObserverOptions = {
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true
        }
      }) {
        if (typeof callback !== "function") {
          throw new TypeError("Received `callback` arg must be a function");
        }
        return new Promise(async (resolve, reject) => {
          let lastError, intervalId, observer;
          let finished = false;
          let promiseStatus = "idle";
          const overallTimeoutTimer = (0, _helpers.setTimeout)(handleTimeout, timeout);
          const usingJestFakeTimers = (0, _helpers.jestFakeTimersAreEnabled)();
          if (usingJestFakeTimers) {
            checkCallback();
            while (!finished) {
              if (!(0, _helpers.jestFakeTimersAreEnabled)()) {
                const error = new Error(`Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830`);
                if (!showOriginalStackTrace)
                  copyStackTrace2(error, stackTraceError);
                reject(error);
                return;
              }
              jest.advanceTimersByTime(interval);
              checkCallback();
              await new Promise((r) => (0, _helpers.setImmediate)(r));
            }
          } else {
            try {
              (0, _helpers.checkContainerType)(container);
            } catch (e) {
              reject(e);
              return;
            }
            intervalId = setInterval(checkRealTimersCallback, interval);
            const {
              MutationObserver
            } = (0, _helpers.getWindowFromNode)(container);
            observer = new MutationObserver(checkRealTimersCallback);
            observer.observe(container, mutationObserverOptions);
            checkCallback();
          }
          function onDone(error, result) {
            finished = true;
            (0, _helpers.clearTimeout)(overallTimeoutTimer);
            if (!usingJestFakeTimers) {
              clearInterval(intervalId);
              observer.disconnect();
            }
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
          function checkRealTimersCallback() {
            if ((0, _helpers.jestFakeTimersAreEnabled)()) {
              const error = new Error(`Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830`);
              if (!showOriginalStackTrace)
                copyStackTrace2(error, stackTraceError);
              return reject(error);
            } else {
              return checkCallback();
            }
          }
          function checkCallback() {
            if (promiseStatus === "pending")
              return;
            try {
              const result = (0, _config.runWithExpensiveErrorDiagnosticsDisabled)(callback);
              if (typeof (result == null ? void 0 : result.then) === "function") {
                promiseStatus = "pending";
                result.then((resolvedValue) => {
                  promiseStatus = "resolved";
                  onDone(null, resolvedValue);
                }, (rejectedValue) => {
                  promiseStatus = "rejected";
                  lastError = rejectedValue;
                });
              } else {
                onDone(null, result);
              }
            } catch (error) {
              lastError = error;
            }
          }
          function handleTimeout() {
            let error;
            if (lastError) {
              error = lastError;
              if (!showOriginalStackTrace && error.name === "TestingLibraryElementError") {
                copyStackTrace2(error, stackTraceError);
              }
            } else {
              error = new Error("Timed out in waitFor.");
              if (!showOriginalStackTrace) {
                copyStackTrace2(error, stackTraceError);
              }
            }
            onDone(onTimeout(error), null);
          }
        });
      }
      function waitForWrapper2(callback, options) {
        const stackTraceError = new Error("STACK_TRACE_MESSAGE");
        return (0, _config.getConfig)().asyncWrapper(() => waitFor2(callback, {
          stackTraceError,
          ...options
        }));
      }
      var hasWarned = false;
      function wait(...args) {
        const [first = () => {
        }, ...rest] = args;
        if (!hasWarned) {
          hasWarned = true;
          console.warn(`\`wait\` has been deprecated and replaced by \`waitFor\` instead. In most cases you should be able to find/replace \`wait\` with \`waitFor\`. Learn more: https://testing-library.com/docs/dom-testing-library/api-async#waitfor.`);
        }
        return waitForWrapper2(first, ...rest);
      }
    }
  });

  // node_modules/@testing-library/dom/dist/query-helpers.js
  var require_query_helpers = __commonJS({
    "node_modules/@testing-library/dom/dist/query-helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getElementError = getElementError3;
      exports.getMultipleElementsFoundError = getMultipleElementsFoundError2;
      exports.queryAllByAttribute = queryAllByAttribute2;
      exports.queryByAttribute = queryByAttribute;
      exports.makeSingleQuery = makeSingleQuery2;
      exports.makeGetAllQuery = makeGetAllQuery2;
      exports.makeFindQuery = makeFindQuery2;
      exports.buildQueries = buildQueries2;
      exports.wrapSingleQueryWithSuggestion = exports.wrapAllByQueryWithSuggestion = void 0;
      var _suggestions = require_suggestions();
      var _matches = require_matches();
      var _waitFor = require_wait_for();
      var _config = require_config();
      function getElementError3(message, container) {
        return (0, _config.getConfig)().getElementError(message, container);
      }
      function getMultipleElementsFoundError2(message, container) {
        return getElementError3(`${message}

(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`, container);
      }
      function queryAllByAttribute2(attribute, container, text, {
        exact = true,
        collapseWhitespace,
        trim,
        normalizer
      } = {}) {
        const matcher = exact ? _matches.matches : _matches.fuzzyMatches;
        const matchNormalizer = (0, _matches.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        return Array.from(container.querySelectorAll(`[${attribute}]`)).filter((node) => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
      }
      function queryByAttribute(attribute, container, text, ...args) {
        const els = queryAllByAttribute2(attribute, container, text, ...args);
        if (els.length > 1) {
          throw getMultipleElementsFoundError2(`Found multiple elements by [${attribute}=${text}]`, container);
        }
        return els[0] || null;
      }
      function makeSingleQuery2(allQuery, getMultipleError10) {
        return (container, ...args) => {
          const els = allQuery(container, ...args);
          if (els.length > 1) {
            const elementStrings = els.map((element) => getElementError3(null, element).message).join("\n\n");
            throw getMultipleElementsFoundError2(`${getMultipleError10(container, ...args)}

Here are the matching elements:

${elementStrings}`, container);
          }
          return els[0] || null;
        };
      }
      function getSuggestionError2(suggestion, container) {
        return (0, _config.getConfig)().getElementError(`A better query is available, try this:
${suggestion.toString()}
`, container);
      }
      function makeGetAllQuery2(allQuery, getMissingError9) {
        return (container, ...args) => {
          const els = allQuery(container, ...args);
          if (!els.length) {
            throw (0, _config.getConfig)().getElementError(getMissingError9(container, ...args), container);
          }
          return els;
        };
      }
      function makeFindQuery2(getter) {
        return (container, text, options, waitForOptions) => {
          return (0, _waitFor.waitFor)(() => {
            return getter(container, text, options);
          }, {
            container,
            ...waitForOptions
          });
        };
      }
      var wrapSingleQueryWithSuggestion3 = (query, queryAllByName, variant) => (container, ...args) => {
        const element = query(container, ...args);
        const [{
          suggest = (0, _config.getConfig)().throwSuggestions
        } = {}] = args.slice(-1);
        if (element && suggest) {
          const suggestion = (0, _suggestions.getSuggestedQuery)(element, variant);
          if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
            throw getSuggestionError2(suggestion.toString(), container);
          }
        }
        return element;
      };
      exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion3;
      var wrapAllByQueryWithSuggestion3 = (query, queryAllByName, variant) => (container, ...args) => {
        const els = query(container, ...args);
        const [{
          suggest = (0, _config.getConfig)().throwSuggestions
        } = {}] = args.slice(-1);
        if (els.length && suggest) {
          const uniqueSuggestionMessages = [...new Set(els.map((element) => {
            var _getSuggestedQuery;
            return (_getSuggestedQuery = (0, _suggestions.getSuggestedQuery)(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
          }))];
          if (uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith((0, _suggestions.getSuggestedQuery)(els[0], variant).queryName)) {
            throw getSuggestionError2(uniqueSuggestionMessages[0], container);
          }
        }
        return els;
      };
      exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion3;
      function buildQueries2(queryAllBy, getMultipleError10, getMissingError9) {
        const queryBy = wrapSingleQueryWithSuggestion3(makeSingleQuery2(queryAllBy, getMultipleError10), queryAllBy.name, "query");
        const getAllBy = makeGetAllQuery2(queryAllBy, getMissingError9);
        const getBy = makeSingleQuery2(getAllBy, getMultipleError10);
        const getByWithSuggestions = wrapSingleQueryWithSuggestion3(getBy, queryAllBy.name, "get");
        const getAllWithSuggestions = wrapAllByQueryWithSuggestion3(getAllBy, queryAllBy.name.replace("query", "get"), "getAll");
        const findAllBy = makeFindQuery2(wrapAllByQueryWithSuggestion3(getAllBy, queryAllBy.name, "findAll"));
        const findBy = makeFindQuery2(wrapSingleQueryWithSuggestion3(getBy, queryAllBy.name, "find"));
        return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
      }
    }
  });

  // node_modules/@testing-library/dom/dist/queries/all-utils.js
  var require_all_utils = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/all-utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _matches = require_matches();
      Object.keys(_matches).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _matches[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _matches[key];
          }
        });
      });
      var _getNodeText = require_get_node_text();
      Object.keys(_getNodeText).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _getNodeText[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _getNodeText[key];
          }
        });
      });
      var _queryHelpers = require_query_helpers();
      Object.keys(_queryHelpers).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _queryHelpers[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _queryHelpers[key];
          }
        });
      });
      var _config = require_config();
      Object.keys(_config).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _config[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _config[key];
          }
        });
      });
    }
  });

  // node_modules/@testing-library/dom/dist/queries/label-text.js
  var require_label_text = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/label-text.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByLabelText = exports.findAllByLabelText = exports.getByLabelText = exports.getAllByLabelText = exports.queryByLabelText = exports.queryAllByLabelText = void 0;
      var _config = require_config();
      var _helpers = require_helpers();
      var _labelHelpers = require_label_helpers();
      var _allUtils = require_all_utils();
      function queryAllLabels2(container) {
        return Array.from(container.querySelectorAll("label,input")).map((node) => {
          return {
            node,
            textToMatch: (0, _labelHelpers.getLabelContent)(node)
          };
        }).filter(({
          textToMatch
        }) => textToMatch !== null);
      }
      var queryAllLabelsByText3 = (container, text, {
        exact = true,
        trim,
        collapseWhitespace,
        normalizer
      } = {}) => {
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        const textToMatchByLabels = queryAllLabels2(container);
        return textToMatchByLabels.filter(({
          node,
          textToMatch
        }) => matcher(textToMatch, node, text, matchNormalizer)).map(({
          node
        }) => node);
      };
      var queryAllByLabelText3 = (container, text, {
        selector = "*",
        exact = true,
        collapseWhitespace,
        trim,
        normalizer
      } = {}) => {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        const matchingLabelledElements = Array.from(container.querySelectorAll("*")).filter((element) => {
          return (0, _labelHelpers.getRealLabels)(element).length || element.hasAttribute("aria-labelledby");
        }).reduce((labelledElements, labelledElement) => {
          const labelList = (0, _labelHelpers.getLabels)(container, labelledElement, {
            selector
          });
          labelList.filter((label) => Boolean(label.formControl)).forEach((label) => {
            if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl)
              labelledElements.push(label.formControl);
          });
          const labelsValue = labelList.filter((label) => Boolean(label.content)).map((label) => label.content);
          if (matcher(labelsValue.join(" "), labelledElement, text, matchNormalizer))
            labelledElements.push(labelledElement);
          if (labelsValue.length > 1) {
            labelsValue.forEach((labelValue, index) => {
              if (matcher(labelValue, labelledElement, text, matchNormalizer))
                labelledElements.push(labelledElement);
              const labelsFiltered = [...labelsValue];
              labelsFiltered.splice(index, 1);
              if (labelsFiltered.length > 1) {
                if (matcher(labelsFiltered.join(" "), labelledElement, text, matchNormalizer))
                  labelledElements.push(labelledElement);
              }
            });
          }
          return labelledElements;
        }, []).concat((0, _allUtils.queryAllByAttribute)("aria-label", container, text, {
          exact,
          normalizer: matchNormalizer
        }));
        return Array.from(new Set(matchingLabelledElements)).filter((element) => element.matches(selector));
      };
      var getAllByLabelText3 = (container, text, ...rest) => {
        const els = queryAllByLabelText3(container, text, ...rest);
        if (!els.length) {
          const labels = queryAllLabelsByText3(container, text, ...rest);
          if (labels.length) {
            const tagNames = labels.map((label) => getTagNameOfElementAssociatedWithLabelViaFor2(container, label)).filter((tagName) => !!tagName);
            if (tagNames.length) {
              throw (0, _config.getConfig)().getElementError(tagNames.map((tagName) => `Found a label with the text of: ${text}, however the element associated with this label (<${tagName} />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <${tagName} />, you can use aria-label or aria-labelledby instead.`).join("\n\n"), container);
            } else {
              throw (0, _config.getConfig)().getElementError(`Found a label with the text of: ${text}, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, container);
            }
          } else {
            throw (0, _config.getConfig)().getElementError(`Unable to find a label with the text of: ${text}`, container);
          }
        }
        return els;
      };
      function getTagNameOfElementAssociatedWithLabelViaFor2(container, label) {
        const htmlFor = label.getAttribute("for");
        if (!htmlFor) {
          return null;
        }
        const element = container.querySelector(`[id="${htmlFor}"]`);
        return element ? element.tagName.toLowerCase() : null;
      }
      var getMultipleError10 = (c, text) => `Found multiple elements with the text of: ${text}`;
      var queryByLabelText2 = (0, _allUtils.wrapSingleQueryWithSuggestion)((0, _allUtils.makeSingleQuery)(queryAllByLabelText3, getMultipleError10), queryAllByLabelText3.name, "query");
      exports.queryByLabelText = queryByLabelText2;
      var getByLabelText2 = (0, _allUtils.makeSingleQuery)(getAllByLabelText3, getMultipleError10);
      var findAllByLabelText2 = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText3, getAllByLabelText3.name, "findAll"));
      exports.findAllByLabelText = findAllByLabelText2;
      var findByLabelText2 = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText2, getAllByLabelText3.name, "find"));
      exports.findByLabelText = findByLabelText2;
      var getAllByLabelTextWithSuggestions2 = (0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText3, getAllByLabelText3.name, "getAll");
      exports.getAllByLabelText = getAllByLabelTextWithSuggestions2;
      var getByLabelTextWithSuggestions2 = (0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText2, getAllByLabelText3.name, "get");
      exports.getByLabelText = getByLabelTextWithSuggestions2;
      var queryAllByLabelTextWithSuggestions2 = (0, _allUtils.wrapAllByQueryWithSuggestion)(queryAllByLabelText3, queryAllByLabelText3.name, "queryAll");
      exports.queryAllByLabelText = queryAllByLabelTextWithSuggestions2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/placeholder-text.js
  var require_placeholder_text = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/placeholder-text.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByPlaceholderText = exports.findAllByPlaceholderText = exports.getAllByPlaceholderText = exports.getByPlaceholderText = exports.queryAllByPlaceholderText = exports.queryByPlaceholderText = void 0;
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _allUtils = require_all_utils();
      var queryAllByPlaceholderText3 = (...args) => {
        (0, _helpers.checkContainerType)(args[0]);
        return (0, _allUtils.queryAllByAttribute)("placeholder", ...args);
      };
      var getMultipleError10 = (c, text) => `Found multiple elements with the placeholder text of: ${text}`;
      var getMissingError9 = (c, text) => `Unable to find an element with the placeholder text of: ${text}`;
      var queryAllByPlaceholderTextWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByPlaceholderText3, queryAllByPlaceholderText3.name, "queryAll");
      exports.queryAllByPlaceholderText = queryAllByPlaceholderTextWithSuggestions2;
      var [queryByPlaceholderText2, getAllByPlaceholderText2, getByPlaceholderText2, findAllByPlaceholderText2, findByPlaceholderText2] = (0, _allUtils.buildQueries)(queryAllByPlaceholderText3, getMultipleError10, getMissingError9);
      exports.findByPlaceholderText = findByPlaceholderText2;
      exports.findAllByPlaceholderText = findAllByPlaceholderText2;
      exports.getByPlaceholderText = getByPlaceholderText2;
      exports.getAllByPlaceholderText = getAllByPlaceholderText2;
      exports.queryByPlaceholderText = queryByPlaceholderText2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/text.js
  var require_text = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/text.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByText = exports.findAllByText = exports.getAllByText = exports.getByText = exports.queryAllByText = exports.queryByText = void 0;
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _config = require_config();
      var _allUtils = require_all_utils();
      var queryAllByText3 = (container, text, {
        selector = "*",
        exact = true,
        collapseWhitespace,
        trim,
        ignore = _config.DEFAULT_IGNORE_TAGS,
        normalizer
      } = {}) => {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        let baseArray = [];
        if (typeof container.matches === "function" && container.matches(selector)) {
          baseArray = [container];
        }
        return [...baseArray, ...Array.from(container.querySelectorAll(selector))].filter((node) => !ignore || !node.matches(ignore)).filter((node) => matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
      };
      var getMultipleError10 = (c, text) => `Found multiple elements with the text: ${text}`;
      var getMissingError9 = (c, text) => `Unable to find an element with the text: ${text}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`;
      var queryAllByTextWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByText3, queryAllByText3.name, "queryAll");
      exports.queryAllByText = queryAllByTextWithSuggestions2;
      var [queryByText2, getAllByText2, getByText2, findAllByText2, findByText2] = (0, _allUtils.buildQueries)(queryAllByText3, getMultipleError10, getMissingError9);
      exports.findByText = findByText2;
      exports.findAllByText = findAllByText2;
      exports.getByText = getByText2;
      exports.getAllByText = getAllByText2;
      exports.queryByText = queryByText2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/display-value.js
  var require_display_value = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/display-value.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByDisplayValue = exports.findAllByDisplayValue = exports.getAllByDisplayValue = exports.getByDisplayValue = exports.queryAllByDisplayValue = exports.queryByDisplayValue = void 0;
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _allUtils = require_all_utils();
      var queryAllByDisplayValue3 = (container, value, {
        exact = true,
        collapseWhitespace,
        trim,
        normalizer
      } = {}) => {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        return Array.from(container.querySelectorAll(`input,textarea,select`)).filter((node) => {
          if (node.tagName === "SELECT") {
            const selectedOptions = Array.from(node.options).filter((option) => option.selected);
            return selectedOptions.some((optionNode) => matcher((0, _allUtils.getNodeText)(optionNode), optionNode, value, matchNormalizer));
          } else {
            return matcher(node.value, node, value, matchNormalizer);
          }
        });
      };
      var getMultipleError10 = (c, value) => `Found multiple elements with the display value: ${value}.`;
      var getMissingError9 = (c, value) => `Unable to find an element with the display value: ${value}.`;
      var queryAllByDisplayValueWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByDisplayValue3, queryAllByDisplayValue3.name, "queryAll");
      exports.queryAllByDisplayValue = queryAllByDisplayValueWithSuggestions2;
      var [queryByDisplayValue2, getAllByDisplayValue2, getByDisplayValue2, findAllByDisplayValue2, findByDisplayValue2] = (0, _allUtils.buildQueries)(queryAllByDisplayValue3, getMultipleError10, getMissingError9);
      exports.findByDisplayValue = findByDisplayValue2;
      exports.findAllByDisplayValue = findAllByDisplayValue2;
      exports.getByDisplayValue = getByDisplayValue2;
      exports.getAllByDisplayValue = getAllByDisplayValue2;
      exports.queryByDisplayValue = queryByDisplayValue2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/alt-text.js
  var require_alt_text = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/alt-text.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByAltText = exports.findAllByAltText = exports.getAllByAltText = exports.getByAltText = exports.queryAllByAltText = exports.queryByAltText = void 0;
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _allUtils = require_all_utils();
      var queryAllByAltText3 = (container, alt, {
        exact = true,
        collapseWhitespace,
        trim,
        normalizer
      } = {}) => {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        return Array.from(container.querySelectorAll("img,input,area")).filter((node) => matcher(node.getAttribute("alt"), node, alt, matchNormalizer));
      };
      var getMultipleError10 = (c, alt) => `Found multiple elements with the alt text: ${alt}`;
      var getMissingError9 = (c, alt) => `Unable to find an element with the alt text: ${alt}`;
      var queryAllByAltTextWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByAltText3, queryAllByAltText3.name, "queryAll");
      exports.queryAllByAltText = queryAllByAltTextWithSuggestions2;
      var [queryByAltText2, getAllByAltText2, getByAltText2, findAllByAltText2, findByAltText2] = (0, _allUtils.buildQueries)(queryAllByAltText3, getMultipleError10, getMissingError9);
      exports.findByAltText = findByAltText2;
      exports.findAllByAltText = findAllByAltText2;
      exports.getByAltText = getByAltText2;
      exports.getAllByAltText = getAllByAltText2;
      exports.queryByAltText = queryByAltText2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/title.js
  var require_title = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/title.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByTitle = exports.findAllByTitle = exports.getAllByTitle = exports.getByTitle = exports.queryAllByTitle = exports.queryByTitle = void 0;
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _allUtils = require_all_utils();
      var isSvgTitle3 = (node) => {
        var _node$parentElement;
        return node.tagName.toLowerCase() === "title" && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === "svg";
      };
      var queryAllByTitle3 = (container, text, {
        exact = true,
        collapseWhitespace,
        trim,
        normalizer
      } = {}) => {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        return Array.from(container.querySelectorAll("[title], svg > title")).filter((node) => matcher(node.getAttribute("title"), node, text, matchNormalizer) || isSvgTitle3(node) && matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
      };
      var getMultipleError10 = (c, title) => `Found multiple elements with the title: ${title}.`;
      var getMissingError9 = (c, title) => `Unable to find an element with the title: ${title}.`;
      var queryAllByTitleWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTitle3, queryAllByTitle3.name, "queryAll");
      exports.queryAllByTitle = queryAllByTitleWithSuggestions2;
      var [queryByTitle2, getAllByTitle2, getByTitle2, findAllByTitle2, findByTitle2] = (0, _allUtils.buildQueries)(queryAllByTitle3, getMultipleError10, getMissingError9);
      exports.findByTitle = findByTitle2;
      exports.findAllByTitle = findAllByTitle2;
      exports.getByTitle = getByTitle2;
      exports.getAllByTitle = getAllByTitle2;
      exports.queryByTitle = queryByTitle2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/role.js
  var require_role = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/role.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByRole = exports.findAllByRole = exports.getByRole = exports.getAllByRole = exports.queryAllByRole = exports.queryByRole = void 0;
      var _domAccessibilityApi = require_dist();
      var _ariaQuery = require_lib();
      var _roleHelpers = require_role_helpers();
      var _queryHelpers = require_query_helpers();
      var _helpers = require_helpers();
      var _allUtils = require_all_utils();
      function queryAllByRole2(container, role, {
        exact = true,
        collapseWhitespace,
        hidden = (0, _allUtils.getConfig)().defaultHidden,
        name,
        trim,
        normalizer,
        queryFallbacks = false,
        selected,
        checked,
        pressed,
        level,
        expanded
      } = {}) {
        (0, _helpers.checkContainerType)(container);
        const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
        const matchNormalizer = (0, _allUtils.makeNormalizer)({
          collapseWhitespace,
          trim,
          normalizer
        });
        if (selected !== void 0) {
          var _allRoles$get;
          if (((_allRoles$get = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get.props["aria-selected"]) === void 0) {
            throw new Error(`"aria-selected" is not supported on role "${role}".`);
          }
        }
        if (checked !== void 0) {
          var _allRoles$get2;
          if (((_allRoles$get2 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get2.props["aria-checked"]) === void 0) {
            throw new Error(`"aria-checked" is not supported on role "${role}".`);
          }
        }
        if (pressed !== void 0) {
          var _allRoles$get3;
          if (((_allRoles$get3 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get3.props["aria-pressed"]) === void 0) {
            throw new Error(`"aria-pressed" is not supported on role "${role}".`);
          }
        }
        if (level !== void 0) {
          if (role !== "heading") {
            throw new Error(`Role "${role}" cannot have "level" property.`);
          }
        }
        if (expanded !== void 0) {
          var _allRoles$get4;
          if (((_allRoles$get4 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get4.props["aria-expanded"]) === void 0) {
            throw new Error(`"aria-expanded" is not supported on role "${role}".`);
          }
        }
        const subtreeIsInaccessibleCache = new WeakMap();
        function cachedIsSubtreeInaccessible(element) {
          if (!subtreeIsInaccessibleCache.has(element)) {
            subtreeIsInaccessibleCache.set(element, (0, _roleHelpers.isSubtreeInaccessible)(element));
          }
          return subtreeIsInaccessibleCache.get(element);
        }
        return Array.from(container.querySelectorAll("*")).filter((node) => {
          const isRoleSpecifiedExplicitly = node.hasAttribute("role");
          if (isRoleSpecifiedExplicitly) {
            const roleValue = node.getAttribute("role");
            if (queryFallbacks) {
              return roleValue.split(" ").filter(Boolean).some((text) => matcher(text, node, role, matchNormalizer));
            }
            if (normalizer) {
              return matcher(roleValue, node, role, matchNormalizer);
            }
            const [firstWord] = roleValue.split(" ");
            return matcher(firstWord, node, role, matchNormalizer);
          }
          const implicitRoles = (0, _roleHelpers.getImplicitAriaRoles)(node);
          return implicitRoles.some((implicitRole) => matcher(implicitRole, node, role, matchNormalizer));
        }).filter((element) => {
          if (selected !== void 0) {
            return selected === (0, _roleHelpers.computeAriaSelected)(element);
          }
          if (checked !== void 0) {
            return checked === (0, _roleHelpers.computeAriaChecked)(element);
          }
          if (pressed !== void 0) {
            return pressed === (0, _roleHelpers.computeAriaPressed)(element);
          }
          if (expanded !== void 0) {
            return expanded === (0, _roleHelpers.computeAriaExpanded)(element);
          }
          if (level !== void 0) {
            return level === (0, _roleHelpers.computeHeadingLevel)(element);
          }
          return true;
        }).filter((element) => {
          return hidden === false ? (0, _roleHelpers.isInaccessible)(element, {
            isSubtreeInaccessible: cachedIsSubtreeInaccessible
          }) === false : true;
        }).filter((element) => {
          if (name === void 0) {
            return true;
          }
          return (0, _allUtils.matches)((0, _domAccessibilityApi.computeAccessibleName)(element, {
            computedStyleSupportsPseudoElements: (0, _allUtils.getConfig)().computedStyleSupportsPseudoElements
          }), element, name, (text) => text);
        });
      }
      var getMultipleError10 = (c, role, {
        name
      } = {}) => {
        let nameHint = "";
        if (name === void 0) {
          nameHint = "";
        } else if (typeof name === "string") {
          nameHint = ` and name "${name}"`;
        } else {
          nameHint = ` and name \`${name}\``;
        }
        return `Found multiple elements with the role "${role}"${nameHint}`;
      };
      var getMissingError9 = (container, role, {
        hidden = (0, _allUtils.getConfig)().defaultHidden,
        name
      } = {}) => {
        if ((0, _allUtils.getConfig)()._disableExpensiveErrorDiagnostics) {
          return `Unable to find role="${role}"`;
        }
        let roles2 = "";
        Array.from(container.children).forEach((childElement) => {
          roles2 += (0, _roleHelpers.prettyRoles)(childElement, {
            hidden,
            includeName: name !== void 0
          });
        });
        let roleMessage;
        if (roles2.length === 0) {
          if (hidden === false) {
            roleMessage = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole";
          } else {
            roleMessage = "There are no available roles.";
          }
        } else {
          roleMessage = `
Here are the ${hidden === false ? "accessible" : "available"} roles:

  ${roles2.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n")}
`.trim();
        }
        let nameHint = "";
        if (name === void 0) {
          nameHint = "";
        } else if (typeof name === "string") {
          nameHint = ` and name "${name}"`;
        } else {
          nameHint = ` and name \`${name}\``;
        }
        return `
Unable to find an ${hidden === false ? "accessible " : ""}element with the role "${role}"${nameHint}

${roleMessage}`.trim();
      };
      var queryAllByRoleWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByRole2, queryAllByRole2.name, "queryAll");
      exports.queryAllByRole = queryAllByRoleWithSuggestions2;
      var [queryByRole2, getAllByRole2, getByRole2, findAllByRole2, findByRole2] = (0, _allUtils.buildQueries)(queryAllByRole2, getMultipleError10, getMissingError9);
      exports.findByRole = findByRole2;
      exports.findAllByRole = findAllByRole2;
      exports.getByRole = getByRole2;
      exports.getAllByRole = getAllByRole2;
      exports.queryByRole = queryByRole2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/test-id.js
  var require_test_id = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/test-id.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.findByTestId = exports.findAllByTestId = exports.getAllByTestId = exports.getByTestId = exports.queryAllByTestId = exports.queryByTestId = void 0;
      var _helpers = require_helpers();
      var _queryHelpers = require_query_helpers();
      var _allUtils = require_all_utils();
      var getTestIdAttribute3 = () => (0, _allUtils.getConfig)().testIdAttribute;
      var queryAllByTestId3 = (...args) => {
        (0, _helpers.checkContainerType)(args[0]);
        return (0, _allUtils.queryAllByAttribute)(getTestIdAttribute3(), ...args);
      };
      var getMultipleError10 = (c, id) => `Found multiple elements by: [${getTestIdAttribute3()}="${id}"]`;
      var getMissingError9 = (c, id) => `Unable to find an element by: [${getTestIdAttribute3()}="${id}"]`;
      var queryAllByTestIdWithSuggestions2 = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTestId3, queryAllByTestId3.name, "queryAll");
      exports.queryAllByTestId = queryAllByTestIdWithSuggestions2;
      var [queryByTestId2, getAllByTestId2, getByTestId2, findAllByTestId2, findByTestId2] = (0, _allUtils.buildQueries)(queryAllByTestId3, getMultipleError10, getMissingError9);
      exports.findByTestId = findByTestId2;
      exports.findAllByTestId = findAllByTestId2;
      exports.getByTestId = getByTestId2;
      exports.getAllByTestId = getAllByTestId2;
      exports.queryByTestId = queryByTestId2;
    }
  });

  // node_modules/@testing-library/dom/dist/queries/index.js
  var require_queries = __commonJS({
    "node_modules/@testing-library/dom/dist/queries/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _labelText = require_label_text();
      Object.keys(_labelText).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _labelText[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _labelText[key];
          }
        });
      });
      var _placeholderText = require_placeholder_text();
      Object.keys(_placeholderText).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _placeholderText[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _placeholderText[key];
          }
        });
      });
      var _text = require_text();
      Object.keys(_text).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _text[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _text[key];
          }
        });
      });
      var _displayValue = require_display_value();
      Object.keys(_displayValue).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _displayValue[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _displayValue[key];
          }
        });
      });
      var _altText = require_alt_text();
      Object.keys(_altText).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _altText[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _altText[key];
          }
        });
      });
      var _title = require_title();
      Object.keys(_title).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _title[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _title[key];
          }
        });
      });
      var _role = require_role();
      Object.keys(_role).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _role[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _role[key];
          }
        });
      });
      var _testId = require_test_id();
      Object.keys(_testId).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _testId[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _testId[key];
          }
        });
      });
    }
  });

  // node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "node_modules/regenerator-runtime/runtime.js"(exports, module2) {
      var runtime = function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined2;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define2(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define2({}, "");
        } catch (err) {
          define2 = function(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          generator._invoke = makeInvokeMethod(innerFn, self2, context);
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
          return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function(method) {
            define2(prototype, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define2(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
          this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
          return this;
        };
        exports2.AsyncIterator = AsyncIterator;
        exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0)
            PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self2, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self2, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined2) {
            context.delegate = null;
            if (context.method === "throw") {
              if (delegate.iterator["return"]) {
                context.method = "return";
                context.arg = undefined2;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") {
                  return ContinueSentinel;
                }
              }
              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined2;
            }
          } else {
            return info;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define2(Gp, toStringTagSymbol, "Generator");
        Gp[iteratorSymbol] = function() {
          return this;
        };
        Gp.toString = function() {
          return "[object Generator]";
        };
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key2 = keys.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined2, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined2;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined2;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined2;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined2;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined2;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      }(typeof module2 === "object" ? module2.exports : {});
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  // node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator = __commonJS({
    "node_modules/@babel/runtime/regenerator/index.js"(exports, module2) {
      module2.exports = require_runtime();
    }
  });

  // node_modules/lz-string/libs/lz-string.js
  var require_lz_string = __commonJS({
    "node_modules/lz-string/libs/lz-string.js"(exports, module2) {
      var LZString = function() {
        var f = String.fromCharCode;
        var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
        var baseReverseDic = {};
        function getBaseValue(alphabet, character) {
          if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
              baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
          }
          return baseReverseDic[alphabet][character];
        }
        var LZString2 = {
          compressToBase64: function(input) {
            if (input == null)
              return "";
            var res = LZString2._compress(input, 6, function(a) {
              return keyStrBase64.charAt(a);
            });
            switch (res.length % 4) {
              default:
              case 0:
                return res;
              case 1:
                return res + "===";
              case 2:
                return res + "==";
              case 3:
                return res + "=";
            }
          },
          decompressFromBase64: function(input) {
            if (input == null)
              return "";
            if (input == "")
              return null;
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrBase64, input.charAt(index));
            });
          },
          compressToUTF16: function(input) {
            if (input == null)
              return "";
            return LZString2._compress(input, 15, function(a) {
              return f(a + 32);
            }) + " ";
          },
          decompressFromUTF16: function(compressed) {
            if (compressed == null)
              return "";
            if (compressed == "")
              return null;
            return LZString2._decompress(compressed.length, 16384, function(index) {
              return compressed.charCodeAt(index) - 32;
            });
          },
          compressToUint8Array: function(uncompressed) {
            var compressed = LZString2.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2);
            for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
              var current_value = compressed.charCodeAt(i);
              buf[i * 2] = current_value >>> 8;
              buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
          },
          decompressFromUint8Array: function(compressed) {
            if (compressed === null || compressed === void 0) {
              return LZString2.decompress(compressed);
            } else {
              var buf = new Array(compressed.length / 2);
              for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
                buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
              }
              var result = [];
              buf.forEach(function(c) {
                result.push(f(c));
              });
              return LZString2.decompress(result.join(""));
            }
          },
          compressToEncodedURIComponent: function(input) {
            if (input == null)
              return "";
            return LZString2._compress(input, 6, function(a) {
              return keyStrUriSafe.charAt(a);
            });
          },
          decompressFromEncodedURIComponent: function(input) {
            if (input == null)
              return "";
            if (input == "")
              return null;
            input = input.replace(/ /g, "+");
            return LZString2._decompress(input.length, 32, function(index) {
              return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
          },
          compress: function(uncompressed) {
            return LZString2._compress(uncompressed, 16, function(a) {
              return f(a);
            });
          },
          _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null)
              return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for (ii = 0; ii < uncompressed.length; ii += 1) {
              context_c = uncompressed.charAt(ii);
              if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                context_dictionary[context_c] = context_dictSize++;
                context_dictionaryToCreate[context_c] = true;
              }
              context_wc = context_w + context_c;
              if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                context_w = context_wc;
              } else {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                  if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 8; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  } else {
                    value = 1;
                    for (i = 0; i < context_numBits; i++) {
                      context_data_val = context_data_val << 1 | value;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = 0;
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 16; i++) {
                      context_data_val = context_data_val << 1 | value & 1;
                      if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                      } else {
                        context_data_position++;
                      }
                      value = value >> 1;
                    }
                  }
                  context_enlargeIn--;
                  if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                  }
                  delete context_dictionaryToCreate[context_w];
                } else {
                  value = context_dictionary[context_w];
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                context_dictionary[context_wc] = context_dictSize++;
                context_w = String(context_c);
              }
            }
            if (context_w !== "") {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
            }
            value = 2;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
            while (true) {
              context_data_val = context_data_val << 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data.push(getCharFromInt(context_data_val));
                break;
              } else
                context_data_position++;
            }
            return context_data.join("");
          },
          decompress: function(compressed) {
            if (compressed == null)
              return "";
            if (compressed == "")
              return null;
            return LZString2._decompress(compressed.length, 32768, function(index) {
              return compressed.charCodeAt(index);
            });
          },
          _decompress: function(length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
            for (i = 0; i < 3; i += 1) {
              dictionary[i] = i;
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (next = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits);
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                c = f(bits);
                break;
              case 2:
                return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
              if (data.index > length) {
                return "";
              }
              bits = 0;
              maxpower = Math.pow(2, numBits);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              switch (c = bits) {
                case 0:
                  bits = 0;
                  maxpower = Math.pow(2, 8);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 1:
                  bits = 0;
                  maxpower = Math.pow(2, 16);
                  power = 1;
                  while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                      data.position = resetValue;
                      data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                  }
                  dictionary[dictSize++] = f(bits);
                  c = dictSize - 1;
                  enlargeIn--;
                  break;
                case 2:
                  return result.join("");
              }
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
              if (dictionary[c]) {
                entry = dictionary[c];
              } else {
                if (c === dictSize) {
                  entry = w + w.charAt(0);
                } else {
                  return null;
                }
              }
              result.push(entry);
              dictionary[dictSize++] = w + entry.charAt(0);
              enlargeIn--;
              w = entry;
              if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
              }
            }
          }
        };
        return LZString2;
      }();
      if (typeof define === "function" && define.amd) {
        define(function() {
          return LZString;
        });
      } else if (typeof module2 !== "undefined" && module2 != null) {
        module2.exports = LZString;
      }
    }
  });

  // bundle.input.js
  var queries2 = __toModule(require_queries());

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js
  var import_pretty_format = __toModule(require_build());
  var import_pretty_format2 = __toModule(require_build());

  // node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs
  var toStr = Object.prototype.toString;
  function isCallable(fn) {
    return typeof fn === "function" || toStr.call(fn) === "[object Function]";
  }
  function toInteger(value) {
    var number = Number(value);
    if (isNaN(number)) {
      return 0;
    }
    if (number === 0 || !isFinite(number)) {
      return number;
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  }
  function arrayFrom(arrayLike, mapFn) {
    var C = Array;
    var items = Object(arrayLike);
    if (arrayLike == null) {
      throw new TypeError("Array.from requires an array-like object - not null or undefined");
    }
    if (typeof mapFn !== "undefined") {
      if (!isCallable(mapFn)) {
        throw new TypeError("Array.from: when provided, the second argument must be a function");
      }
    }
    var len = toLength(items.length);
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);
    var k = 0;
    var kValue;
    while (k < len) {
      kValue = items[k];
      if (mapFn) {
        A[k] = mapFn(kValue, k);
      } else {
        A[k] = kValue;
      }
      k += 1;
    }
    A.length = len;
    return A;
  }

  // node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SetLike = /* @__PURE__ */ function() {
    function SetLike2() {
      var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      _classCallCheck(this, SetLike2);
      _defineProperty(this, "items", void 0);
      this.items = items;
    }
    _createClass(SetLike2, [{
      key: "add",
      value: function add(value) {
        if (this.has(value) === false) {
          this.items.push(value);
        }
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.items = [];
      }
    }, {
      key: "delete",
      value: function _delete(value) {
        var previousLength = this.items.length;
        this.items = this.items.filter(function(item) {
          return item !== value;
        });
        return previousLength !== this.items.length;
      }
    }, {
      key: "forEach",
      value: function forEach(callbackfn) {
        var _this = this;
        this.items.forEach(function(item) {
          callbackfn(item, item, _this);
        });
      }
    }, {
      key: "has",
      value: function has(value) {
        return this.items.indexOf(value) !== -1;
      }
    }, {
      key: "size",
      get: function get() {
        return this.items.length;
      }
    }]);
    return SetLike2;
  }();
  var SetLike_default = typeof Set === "undefined" ? Set : SetLike;

  // node_modules/dom-accessibility-api/dist/getRole.mjs
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var localNameToRoleMappings = {
    article: "article",
    aside: "complementary",
    body: "document",
    button: "button",
    datalist: "listbox",
    dd: "definition",
    details: "group",
    dialog: "dialog",
    dt: "term",
    fieldset: "group",
    figure: "figure",
    form: "form",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    header: "banner",
    hr: "separator",
    legend: "legend",
    li: "listitem",
    math: "math",
    main: "main",
    menu: "list",
    nav: "navigation",
    ol: "list",
    optgroup: "group",
    option: "option",
    output: "status",
    progress: "progressbar",
    section: "region",
    summary: "button",
    table: "table",
    tbody: "rowgroup",
    textarea: "textbox",
    tfoot: "rowgroup",
    td: "cell",
    th: "columnheader",
    thead: "rowgroup",
    tr: "row",
    ul: "list"
  };
  var prohibitedAttributes = {
    caption: new Set(["aria-label", "aria-labelledby"]),
    code: new Set(["aria-label", "aria-labelledby"]),
    deletion: new Set(["aria-label", "aria-labelledby"]),
    emphasis: new Set(["aria-label", "aria-labelledby"]),
    generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
    insertion: new Set(["aria-label", "aria-labelledby"]),
    paragraph: new Set(["aria-label", "aria-labelledby"]),
    presentation: new Set(["aria-label", "aria-labelledby"]),
    strong: new Set(["aria-label", "aria-labelledby"]),
    subscript: new Set(["aria-label", "aria-labelledby"]),
    superscript: new Set(["aria-label", "aria-labelledby"])
  };
  function hasGlobalAriaAttributes(element, role) {
    return [
      "aria-atomic",
      "aria-busy",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-dropeffect",
      "aria-flowto",
      "aria-grabbed",
      "aria-hidden",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-live",
      "aria-owns",
      "aria-relevant",
      "aria-roledescription"
    ].some(function(attributeName) {
      var _prohibitedAttributes;
      return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes[role]) === null || _prohibitedAttributes === void 0 ? void 0 : _prohibitedAttributes.has(attributeName));
    });
  }
  function ignorePresentationalRole(element, implicitRole) {
    return hasGlobalAriaAttributes(element, implicitRole);
  }
  function getRole(element) {
    var explicitRole = getExplicitRole(element);
    if (explicitRole === null || explicitRole === "presentation") {
      var implicitRole = getImplicitRole(element);
      if (explicitRole !== "presentation" || ignorePresentationalRole(element, implicitRole || "")) {
        return implicitRole;
      }
    }
    return explicitRole;
  }
  function getImplicitRole(element) {
    var mappedByTag = localNameToRoleMappings[getLocalName(element)];
    if (mappedByTag !== void 0) {
      return mappedByTag;
    }
    switch (getLocalName(element)) {
      case "a":
      case "area":
      case "link":
        if (element.hasAttribute("href")) {
          return "link";
        }
        break;
      case "img":
        if (element.getAttribute("alt") === "" && !ignorePresentationalRole(element, "img")) {
          return "presentation";
        }
        return "img";
      case "input": {
        var _ref = element, type = _ref.type;
        switch (type) {
          case "button":
          case "image":
          case "reset":
          case "submit":
            return "button";
          case "checkbox":
          case "radio":
            return type;
          case "range":
            return "slider";
          case "email":
          case "tel":
          case "text":
          case "url":
            if (element.hasAttribute("list")) {
              return "combobox";
            }
            return "textbox";
          case "search":
            if (element.hasAttribute("list")) {
              return "combobox";
            }
            return "searchbox";
          default:
            return null;
        }
      }
      case "select":
        if (element.hasAttribute("multiple") || element.size > 1) {
          return "listbox";
        }
        return "combobox";
    }
    return null;
  }
  function getExplicitRole(element) {
    if (element.hasAttribute("role")) {
      var _trim$split = element.getAttribute("role").trim().split(" "), _trim$split2 = _slicedToArray(_trim$split, 1), explicitRole = _trim$split2[0];
      if (explicitRole !== void 0 && explicitRole.length > 0) {
        return explicitRole;
      }
    }
    return null;
  }

  // node_modules/dom-accessibility-api/dist/util.mjs
  function getLocalName(element) {
    var _element$localName;
    return (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName : element.tagName.toLowerCase();
  }
  function isElement(node) {
    return node !== null && node.nodeType === node.ELEMENT_NODE;
  }
  function isHTMLTableCaptionElement(node) {
    return isElement(node) && getLocalName(node) === "caption";
  }
  function isHTMLInputElement(node) {
    return isElement(node) && getLocalName(node) === "input";
  }
  function isHTMLSelectElement(node) {
    return isElement(node) && getLocalName(node) === "select";
  }
  function isHTMLTableElement(node) {
    return isElement(node) && getLocalName(node) === "table";
  }
  function isHTMLTextAreaElement(node) {
    return isElement(node) && getLocalName(node) === "textarea";
  }
  function safeWindow(node) {
    var _ref = node.ownerDocument === null ? node : node.ownerDocument, defaultView = _ref.defaultView;
    if (defaultView === null) {
      throw new TypeError("no window available");
    }
    return defaultView;
  }
  function isHTMLFieldSetElement(node) {
    return isElement(node) && getLocalName(node) === "fieldset";
  }
  function isHTMLLegendElement(node) {
    return isElement(node) && getLocalName(node) === "legend";
  }
  function isHTMLSlotElement(node) {
    return isElement(node) && getLocalName(node) === "slot";
  }
  function isSVGElement(node) {
    return isElement(node) && node.ownerSVGElement !== void 0;
  }
  function isSVGSVGElement(node) {
    return isElement(node) && getLocalName(node) === "svg";
  }
  function isSVGTitleElement(node) {
    return isSVGElement(node) && getLocalName(node) === "title";
  }
  function queryIdRefs(node, attributeName) {
    if (isElement(node) && node.hasAttribute(attributeName)) {
      var ids = node.getAttribute(attributeName).split(" ");
      return ids.map(function(id) {
        return node.ownerDocument.getElementById(id);
      }).filter(function(element) {
        return element !== null;
      });
    }
    return [];
  }
  function hasAnyConcreteRoles(node, roles2) {
    if (isElement(node)) {
      return roles2.indexOf(getRole(node)) !== -1;
    }
    return false;
  }

  // node_modules/dom-accessibility-api/dist/accessible-name-and-description.mjs
  function asFlatString(s) {
    return s.trim().replace(/\s\s+/g, " ");
  }
  function isHidden(node, getComputedStyleImplementation) {
    if (!isElement(node)) {
      return false;
    }
    if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
      return true;
    }
    var style = getComputedStyleImplementation(node);
    return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
  }
  function isControl(node) {
    return hasAnyConcreteRoles(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole(node, "range");
  }
  function hasAbstractRole(node, role) {
    if (!isElement(node)) {
      return false;
    }
    switch (role) {
      case "range":
        return hasAnyConcreteRoles(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
      default:
        throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
    }
  }
  function querySelectorAllSubtree(element, selectors) {
    var elements = arrayFrom(element.querySelectorAll(selectors));
    queryIdRefs(element, "aria-owns").forEach(function(root) {
      elements.push.apply(elements, arrayFrom(root.querySelectorAll(selectors)));
    });
    return elements;
  }
  function querySelectedOptions(listbox) {
    if (isHTMLSelectElement(listbox)) {
      return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
    }
    return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
  }
  function isMarkedPresentational(node) {
    return hasAnyConcreteRoles(node, ["none", "presentation"]);
  }
  function isNativeHostLanguageTextAlternativeElement(node) {
    return isHTMLTableCaptionElement(node);
  }
  function allowsNameFromContent(node) {
    return hasAnyConcreteRoles(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
  }
  function isDescendantOfNativeHostLanguageTextAlternativeElement(node) {
    return false;
  }
  function computeTooltipAttributeValue(node) {
    return null;
  }
  function getValueOfTextbox(element) {
    if (isHTMLInputElement(element) || isHTMLTextAreaElement(element)) {
      return element.value;
    }
    return element.textContent || "";
  }
  function getTextualContent(declaration) {
    var content = declaration.getPropertyValue("content");
    if (/^["'].*["']$/.test(content)) {
      return content.slice(1, -1);
    }
    return "";
  }
  function isLabelableElement(element) {
    var localName = getLocalName(element);
    return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
  }
  function findLabelableElement(element) {
    if (isLabelableElement(element)) {
      return element;
    }
    var labelableElement = null;
    element.childNodes.forEach(function(childNode) {
      if (labelableElement === null && isElement(childNode)) {
        var descendantLabelableElement = findLabelableElement(childNode);
        if (descendantLabelableElement !== null) {
          labelableElement = descendantLabelableElement;
        }
      }
    });
    return labelableElement;
  }
  function getControlOfLabel(label) {
    if (label.control !== void 0) {
      return label.control;
    }
    var htmlFor = label.getAttribute("for");
    if (htmlFor !== null) {
      return label.ownerDocument.getElementById(htmlFor);
    }
    return findLabelableElement(label);
  }
  function getLabels(element) {
    var labelsProperty = element.labels;
    if (labelsProperty === null) {
      return labelsProperty;
    }
    if (labelsProperty !== void 0) {
      return arrayFrom(labelsProperty);
    }
    if (!isLabelableElement(element)) {
      return null;
    }
    var document2 = element.ownerDocument;
    return arrayFrom(document2.querySelectorAll("label")).filter(function(label) {
      return getControlOfLabel(label) === element;
    });
  }
  function getSlotContents(slot) {
    var assignedNodes = slot.assignedNodes();
    if (assignedNodes.length === 0) {
      return arrayFrom(slot.childNodes);
    }
    return assignedNodes;
  }
  function computeTextAlternative(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var consultedNodes = new SetLike_default();
    var window2 = safeWindow(root);
    var _options$compute = options.compute, compute = _options$compute === void 0 ? "name" : _options$compute, _options$computedStyl = options.computedStyleSupportsPseudoElements, computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== void 0 : _options$computedStyl, _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? window2.getComputedStyle.bind(window2) : _options$getComputedS;
    function computeMiscTextAlternative(node, context) {
      var accumulatedText = "";
      if (isElement(node) && computedStyleSupportsPseudoElements) {
        var pseudoBefore = getComputedStyle(node, "::before");
        var beforeContent = getTextualContent(pseudoBefore);
        accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
      }
      var childNodes = isHTMLSlotElement(node) ? getSlotContents(node) : arrayFrom(node.childNodes).concat(queryIdRefs(node, "aria-owns"));
      childNodes.forEach(function(child) {
        var result = computeTextAlternative2(child, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false,
          recursion: true
        });
        var display = isElement(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
        var separator = display !== "inline" ? " " : "";
        accumulatedText += "".concat(separator).concat(result).concat(separator);
      });
      if (isElement(node) && computedStyleSupportsPseudoElements) {
        var pseudoAfter = getComputedStyle(node, "::after");
        var afterContent = getTextualContent(pseudoAfter);
        accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
      }
      return accumulatedText;
    }
    function computeElementTextAlternative(node) {
      if (!isElement(node)) {
        return null;
      }
      function useAttribute(element, attributeName) {
        var attribute = element.getAttributeNode(attributeName);
        if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
          consultedNodes.add(attribute);
          return attribute.value;
        }
        return null;
      }
      if (isHTMLFieldSetElement(node)) {
        consultedNodes.add(node);
        var children = arrayFrom(node.childNodes);
        for (var i = 0; i < children.length; i += 1) {
          var child = children[i];
          if (isHTMLLegendElement(child)) {
            return computeTextAlternative2(child, {
              isEmbeddedInLabel: false,
              isReferenced: false,
              recursion: false
            });
          }
        }
      } else if (isHTMLTableElement(node)) {
        consultedNodes.add(node);
        var _children = arrayFrom(node.childNodes);
        for (var _i = 0; _i < _children.length; _i += 1) {
          var _child = _children[_i];
          if (isHTMLTableCaptionElement(_child)) {
            return computeTextAlternative2(_child, {
              isEmbeddedInLabel: false,
              isReferenced: false,
              recursion: false
            });
          }
        }
      } else if (isSVGSVGElement(node)) {
        consultedNodes.add(node);
        var _children2 = arrayFrom(node.childNodes);
        for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
          var _child2 = _children2[_i2];
          if (isSVGTitleElement(_child2)) {
            return _child2.textContent;
          }
        }
        return null;
      } else if (getLocalName(node) === "img" || getLocalName(node) === "area") {
        var nameFromAlt = useAttribute(node, "alt");
        if (nameFromAlt !== null) {
          return nameFromAlt;
        }
      }
      if (isHTMLInputElement(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
        var nameFromValue = useAttribute(node, "value");
        if (nameFromValue !== null) {
          return nameFromValue;
        }
        if (node.type === "submit") {
          return "Submit";
        }
        if (node.type === "reset") {
          return "Reset";
        }
      }
      if (isHTMLInputElement(node) || isHTMLSelectElement(node) || isHTMLTextAreaElement(node)) {
        var input = node;
        var labels = getLabels(input);
        if (labels !== null && labels.length !== 0) {
          consultedNodes.add(input);
          return arrayFrom(labels).map(function(element) {
            return computeTextAlternative2(element, {
              isEmbeddedInLabel: true,
              isReferenced: false,
              recursion: true
            });
          }).filter(function(label) {
            return label.length > 0;
          }).join(" ");
        }
      }
      if (isHTMLInputElement(node) && node.type === "image") {
        var _nameFromAlt = useAttribute(node, "alt");
        if (_nameFromAlt !== null) {
          return _nameFromAlt;
        }
        var nameFromTitle = useAttribute(node, "title");
        if (nameFromTitle !== null) {
          return nameFromTitle;
        }
        return "Submit Query";
      }
      return useAttribute(node, "title");
    }
    function computeTextAlternative2(current, context) {
      if (consultedNodes.has(current)) {
        return "";
      }
      if (hasAnyConcreteRoles(current, ["menu"])) {
        consultedNodes.add(current);
        return "";
      }
      if (isHidden(current, getComputedStyle) && !context.isReferenced) {
        consultedNodes.add(current);
        return "";
      }
      var labelElements = queryIdRefs(current, "aria-labelledby");
      if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
        return labelElements.map(function(element) {
          return computeTextAlternative2(element, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: true,
            recursion: false
          });
        }).join(" ");
      }
      var skipToStep2E = context.recursion && isControl(current) && compute === "name";
      if (!skipToStep2E) {
        var ariaLabel = (isElement(current) && current.getAttribute("aria-label") || "").trim();
        if (ariaLabel !== "" && compute === "name") {
          consultedNodes.add(current);
          return ariaLabel;
        }
        if (!isMarkedPresentational(current)) {
          var elementTextAlternative = computeElementTextAlternative(current);
          if (elementTextAlternative !== null) {
            consultedNodes.add(current);
            return elementTextAlternative;
          }
        }
      }
      if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
        if (hasAnyConcreteRoles(current, ["combobox", "listbox"])) {
          consultedNodes.add(current);
          var selectedOptions = querySelectedOptions(current);
          if (selectedOptions.length === 0) {
            return isHTMLInputElement(current) ? current.value : "";
          }
          return arrayFrom(selectedOptions).map(function(selectedOption) {
            return computeTextAlternative2(selectedOption, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: false,
              recursion: true
            });
          }).join(" ");
        }
        if (hasAbstractRole(current, "range")) {
          consultedNodes.add(current);
          if (current.hasAttribute("aria-valuetext")) {
            return current.getAttribute("aria-valuetext");
          }
          if (current.hasAttribute("aria-valuenow")) {
            return current.getAttribute("aria-valuenow");
          }
          return current.getAttribute("value") || "";
        }
        if (hasAnyConcreteRoles(current, ["textbox"])) {
          consultedNodes.add(current);
          return getValueOfTextbox(current);
        }
      }
      if (allowsNameFromContent(current) || isElement(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {
        consultedNodes.add(current);
        return computeMiscTextAlternative(current, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false
        });
      }
      if (current.nodeType === current.TEXT_NODE) {
        consultedNodes.add(current);
        return current.textContent || "";
      }
      if (context.recursion) {
        consultedNodes.add(current);
        return computeMiscTextAlternative(current, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false
        });
      }
      var tooltipAttributeValue = computeTooltipAttributeValue(current);
      if (tooltipAttributeValue !== null) {
        consultedNodes.add(current);
        return tooltipAttributeValue;
      }
      consultedNodes.add(current);
      return "";
    }
    return asFlatString(computeTextAlternative2(root, {
      isEmbeddedInLabel: false,
      isReferenced: compute === "description",
      recursion: false
    }));
  }

  // node_modules/dom-accessibility-api/dist/accessible-name.mjs
  function prohibitsNaming(node) {
    return hasAnyConcreteRoles(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
  }
  function computeAccessibleName(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (prohibitsNaming(root)) {
      return "";
    }
    return computeTextAlternative(root, options);
  }

  // node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js
  var import_aria_query = __toModule(require_lib());

  // node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }

  // node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js
  var import_regenerator = __toModule(require_regenerator());

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }

  // node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js
  var import_lz_string = __toModule(require_lz_string());
  var chalk = null;
  var readFileSync = null;
  var codeFrameColumns = null;
  try {
    nodeRequire = module && module.require;
    readFileSync = nodeRequire.call(module, "fs").readFileSync;
    codeFrameColumns = nodeRequire.call(module, "@babel/code-frame").codeFrameColumns;
    chalk = nodeRequire.call(module, "chalk");
  } catch (_unused) {
  }
  var nodeRequire;
  function getCodeFrame(frame) {
    var locationStart = frame.indexOf("(") + 1;
    var locationEnd = frame.indexOf(")");
    var frameLocation = frame.slice(locationStart, locationEnd);
    var frameLocationElements = frameLocation.split(":");
    var _ref = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)], filename = _ref[0], line = _ref[1], column = _ref[2];
    var rawFileContents = "";
    try {
      rawFileContents = readFileSync(filename, "utf-8");
    } catch (_unused2) {
      return "";
    }
    var codeFrame = codeFrameColumns(rawFileContents, {
      start: {
        line,
        column
      }
    }, {
      highlightCode: true,
      linesBelow: 0
    });
    return chalk.dim(frameLocation) + "\n" + codeFrame + "\n";
  }
  function getUserCodeFrame() {
    if (!readFileSync || !codeFrameColumns) {
      return "";
    }
    var err = new Error();
    var firstClientCodeFrame = err.stack.split("\n").slice(1).find(function(frame) {
      return !frame.includes("node_modules/");
    });
    return getCodeFrame(firstClientCodeFrame);
  }
  var globalObj = typeof window === "undefined" ? window : window;
  var TEXT_NODE = 3;
  function runWithRealTimers(callback) {
    return hasJestTimers() ? runWithJestRealTimers(callback).callbackReturnValue : callback();
  }
  function hasJestTimers() {
    return typeof jest !== "undefined" && jest !== null && typeof jest.useRealTimers === "function";
  }
  function runWithJestRealTimers(callback) {
    var timerAPI = {
      clearInterval,
      clearTimeout,
      setInterval,
      setTimeout
    };
    if (typeof setImmediate === "function") {
      timerAPI.setImmediate = setImmediate;
    }
    if (typeof clearImmediate === "function") {
      timerAPI.clearImmediate = clearImmediate;
    }
    jest.useRealTimers();
    var callbackReturnValue = callback();
    var usedFakeTimers = Object.entries(timerAPI).some(function(_ref) {
      var name = _ref[0], func = _ref[1];
      return func !== globalObj[name];
    });
    if (usedFakeTimers) {
      var _timerAPI$setTimeout;
      jest.useFakeTimers((_timerAPI$setTimeout = timerAPI.setTimeout) != null && _timerAPI$setTimeout.clock ? "modern" : "legacy");
    }
    return {
      callbackReturnValue,
      usedFakeTimers
    };
  }
  function jestFakeTimersAreEnabled() {
    return hasJestTimers() ? runWithJestRealTimers(function() {
    }).usedFakeTimers : false;
  }
  function setImmediatePolyfill(fn) {
    return globalObj.setTimeout(fn, 0);
  }
  function getTimeFunctions() {
    return {
      clearTimeoutFn: globalObj.clearTimeout,
      setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,
      setTimeoutFn: globalObj.setTimeout
    };
  }
  var _runWithRealTimers = runWithRealTimers(getTimeFunctions);
  var clearTimeoutFn = _runWithRealTimers.clearTimeoutFn;
  var setImmediateFn = _runWithRealTimers.setImmediateFn;
  var setTimeoutFn = _runWithRealTimers.setTimeoutFn;
  function getDocument() {
    if (typeof window === "undefined") {
      throw new Error("Could not find default container");
    }
    return window.document;
  }
  function getWindowFromNode(node) {
    if (node.defaultView) {
      return node.defaultView;
    } else if (node.ownerDocument && node.ownerDocument.defaultView) {
      return node.ownerDocument.defaultView;
    } else if (node.window) {
      return node.window;
    } else if (node.then instanceof Function) {
      throw new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?");
    } else if (Array.isArray(node)) {
      throw new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?");
    } else if (typeof node.debug === "function" && typeof node.logTestingPlaygroundURL === "function") {
      throw new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?");
    } else {
      throw new Error(`Unable to find the "window" object for the given node. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new`);
    }
  }
  function checkContainerType(container) {
    if (!container || !(typeof container.querySelector === "function") || !(typeof container.querySelectorAll === "function")) {
      throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + getTypeName(container) + ".");
    }
    function getTypeName(object) {
      if (typeof object === "object") {
        return object === null ? "null" : object.constructor.name;
      }
      return typeof object;
    }
  }
  function inCypress(dom) {
    var window2 = dom.ownerDocument && dom.ownerDocument.defaultView || void 0;
    return typeof window2 !== "undefined" && window2.Cypress || typeof window2 !== "undefined" && window2.Cypress;
  }
  var inNode = function inNode2() {
    return typeof process !== "undefined" && process.versions !== void 0 && process.versions.node !== void 0;
  };
  var getMaxLength = function getMaxLength2(dom) {
    return inCypress(dom) ? 0 : typeof process !== "undefined" && process.env.DEBUG_PRINT_LIMIT || 7e3;
  };
  var _prettyFormat$plugins = import_pretty_format.default.plugins;
  var DOMElement = _prettyFormat$plugins.DOMElement;
  var DOMCollection = _prettyFormat$plugins.DOMCollection;
  function prettyDOM(dom, maxLength, options) {
    if (!dom) {
      dom = getDocument().body;
    }
    if (typeof maxLength !== "number") {
      maxLength = getMaxLength(dom);
    }
    if (maxLength === 0) {
      return "";
    }
    if (dom.documentElement) {
      dom = dom.documentElement;
    }
    var domTypeName = typeof dom;
    if (domTypeName === "object") {
      domTypeName = dom.constructor.name;
    } else {
      dom = {};
    }
    if (!("outerHTML" in dom)) {
      throw new TypeError("Expected an element or document but got " + domTypeName);
    }
    var debugContent = (0, import_pretty_format.default)(dom, _extends({
      plugins: [DOMElement, DOMCollection],
      printFunctionName: false,
      highlight: inNode()
    }, options));
    return maxLength !== void 0 && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + "..." : debugContent;
  }
  var logDOM = function logDOM2() {
    var userCodeFrame = getUserCodeFrame();
    if (userCodeFrame) {
      console.log(prettyDOM.apply(void 0, arguments) + "\n\n" + userCodeFrame);
    } else {
      console.log(prettyDOM.apply(void 0, arguments));
    }
  };
  var config = {
    testIdAttribute: "data-testid",
    asyncUtilTimeout: 1e3,
    asyncWrapper: function asyncWrapper(cb) {
      return cb();
    },
    eventWrapper: function eventWrapper(cb) {
      return cb();
    },
    defaultHidden: false,
    showOriginalStackTrace: false,
    throwSuggestions: false,
    getElementError: function getElementError(message, container) {
      var error = new Error([message, prettyDOM(container)].filter(Boolean).join("\n\n"));
      error.name = "TestingLibraryElementError";
      return error;
    },
    _disableExpensiveErrorDiagnostics: false,
    computedStyleSupportsPseudoElements: false
  };
  var DEFAULT_IGNORE_TAGS = "script, style";
  function runWithExpensiveErrorDiagnosticsDisabled(callback) {
    try {
      config._disableExpensiveErrorDiagnostics = true;
      return callback();
    } finally {
      config._disableExpensiveErrorDiagnostics = false;
    }
  }
  function getConfig() {
    return config;
  }
  var labelledNodeNames = ["button", "meter", "output", "progress", "select", "textarea", "input"];
  function getTextContent(node) {
    if (labelledNodeNames.includes(node.nodeName.toLowerCase())) {
      return "";
    }
    if (node.nodeType === TEXT_NODE)
      return node.textContent;
    return Array.from(node.childNodes).map(function(childNode) {
      return getTextContent(childNode);
    }).join("");
  }
  function getLabelContent(element) {
    var textContent;
    if (element.tagName.toLowerCase() === "label") {
      textContent = getTextContent(element);
    } else {
      textContent = element.value || element.textContent;
    }
    return textContent;
  }
  function getRealLabels(element) {
    if (element.labels !== void 0) {
      var _labels;
      return (_labels = element.labels) != null ? _labels : [];
    }
    if (!isLabelable(element))
      return [];
    var labels = element.ownerDocument.querySelectorAll("label");
    return Array.from(labels).filter(function(label) {
      return label.control === element;
    });
  }
  function isLabelable(element) {
    return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === "INPUT" && element.getAttribute("type") !== "hidden";
  }
  function getLabels2(container, element, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$selector = _ref.selector, selector = _ref$selector === void 0 ? "*" : _ref$selector;
    var ariaLabelledBy = element.getAttribute("aria-labelledby");
    var labelsId = ariaLabelledBy ? ariaLabelledBy.split(" ") : [];
    return labelsId.length ? labelsId.map(function(labelId) {
      var labellingElement = container.querySelector('[id="' + labelId + '"]');
      return labellingElement ? {
        content: getLabelContent(labellingElement),
        formControl: null
      } : {
        content: "",
        formControl: null
      };
    }) : Array.from(getRealLabels(element)).map(function(label) {
      var textToMatch = getLabelContent(label);
      var formControlSelector = "button, input, meter, output, progress, select, textarea";
      var labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter(function(formControlElement) {
        return formControlElement.matches(selector);
      })[0];
      return {
        content: textToMatch,
        formControl: labelledFormControl
      };
    });
  }
  function assertNotNullOrUndefined(matcher) {
    if (matcher === null || matcher === void 0) {
      throw new Error("It looks like " + matcher + " was passed instead of a matcher. Did you do something like getByText(" + matcher + ")?");
    }
  }
  function fuzzyMatches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== "string") {
      return false;
    }
    assertNotNullOrUndefined(matcher);
    var normalizedText = normalizer(textToMatch);
    if (typeof matcher === "string" || typeof matcher === "number") {
      return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
    } else if (typeof matcher === "function") {
      return matcher(normalizedText, node);
    } else {
      return matcher.test(normalizedText);
    }
  }
  function matches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== "string") {
      return false;
    }
    assertNotNullOrUndefined(matcher);
    var normalizedText = normalizer(textToMatch);
    if (matcher instanceof Function) {
      return matcher(normalizedText, node);
    } else if (matcher instanceof RegExp) {
      return matcher.test(normalizedText);
    } else {
      return normalizedText === String(matcher);
    }
  }
  function getDefaultNormalizer(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$trim = _ref.trim, trim = _ref$trim === void 0 ? true : _ref$trim, _ref$collapseWhitespa = _ref.collapseWhitespace, collapseWhitespace = _ref$collapseWhitespa === void 0 ? true : _ref$collapseWhitespa;
    return function(text) {
      var normalizedText = text;
      normalizedText = trim ? normalizedText.trim() : normalizedText;
      normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, " ") : normalizedText;
      return normalizedText;
    };
  }
  function makeNormalizer(_ref2) {
    var trim = _ref2.trim, collapseWhitespace = _ref2.collapseWhitespace, normalizer = _ref2.normalizer;
    if (normalizer) {
      if (typeof trim !== "undefined" || typeof collapseWhitespace !== "undefined") {
        throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
      }
      return normalizer;
    } else {
      return getDefaultNormalizer({
        trim,
        collapseWhitespace
      });
    }
  }
  function getNodeText(node) {
    if (node.matches("input[type=submit], input[type=button]")) {
      return node.value;
    }
    return Array.from(node.childNodes).filter(function(child) {
      return child.nodeType === TEXT_NODE && Boolean(child.textContent);
    }).map(function(c) {
      return c.textContent;
    }).join("");
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var elementRoleList = buildElementRoleList(import_aria_query.elementRoles);
  function isSubtreeInaccessible(element) {
    if (element.hidden === true) {
      return true;
    }
    if (element.getAttribute("aria-hidden") === "true") {
      return true;
    }
    var window2 = element.ownerDocument.defaultView;
    if (window2.getComputedStyle(element).display === "none") {
      return true;
    }
    return false;
  }
  function isInaccessible(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$isSubtreeIna = _options.isSubtreeInaccessible, isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
    var window2 = element.ownerDocument.defaultView;
    if (window2.getComputedStyle(element).visibility === "hidden") {
      return true;
    }
    var currentElement = element;
    while (currentElement) {
      if (isSubtreeInaccessibleImpl(currentElement)) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  function getImplicitAriaRoles(currentNode) {
    for (var _iterator = _createForOfIteratorHelperLoose(elementRoleList), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, match = _step$value.match, roles2 = _step$value.roles;
      if (match(currentNode)) {
        return [].concat(roles2);
      }
    }
    return [];
  }
  function buildElementRoleList(elementRolesMap) {
    function makeElementSelector(_ref) {
      var name = _ref.name, attributes = _ref.attributes;
      return "" + name + attributes.map(function(_ref2) {
        var attributeName = _ref2.name, value = _ref2.value, _ref2$constraints = _ref2.constraints, constraints = _ref2$constraints === void 0 ? [] : _ref2$constraints;
        var shouldNotExist = constraints.indexOf("undefined") !== -1;
        if (shouldNotExist) {
          return ":not([" + attributeName + "])";
        } else if (value) {
          return "[" + attributeName + '="' + value + '"]';
        } else {
          return "[" + attributeName + "]";
        }
      }).join("");
    }
    function getSelectorSpecificity(_ref3) {
      var _ref3$attributes = _ref3.attributes, attributes = _ref3$attributes === void 0 ? [] : _ref3$attributes;
      return attributes.length;
    }
    function bySelectorSpecificity(_ref4, _ref5) {
      var leftSpecificity = _ref4.specificity;
      var rightSpecificity = _ref5.specificity;
      return rightSpecificity - leftSpecificity;
    }
    function match(element2) {
      return function(node) {
        var _element$attributes = element2.attributes, attributes = _element$attributes === void 0 ? [] : _element$attributes;
        var typeTextIndex = attributes.findIndex(function(attribute) {
          return attribute.value && attribute.name === "type" && attribute.value === "text";
        });
        if (typeTextIndex >= 0) {
          attributes = [].concat(attributes.slice(0, typeTextIndex), attributes.slice(typeTextIndex + 1));
          if (node.type !== "text") {
            return false;
          }
        }
        return node.matches(makeElementSelector(_extends({}, element2, {
          attributes
        })));
      };
    }
    var result = [];
    for (var _iterator2 = _createForOfIteratorHelperLoose(elementRolesMap.entries()), _step2; !(_step2 = _iterator2()).done; ) {
      var _step2$value = _step2.value, element = _step2$value[0], roles2 = _step2$value[1];
      result = [].concat(result, [{
        match: match(element),
        roles: Array.from(roles2),
        specificity: getSelectorSpecificity(element)
      }]);
    }
    return result.sort(bySelectorSpecificity);
  }
  function getRoles(container, _temp) {
    var _ref6 = _temp === void 0 ? {} : _temp, _ref6$hidden = _ref6.hidden, hidden = _ref6$hidden === void 0 ? false : _ref6$hidden;
    function flattenDOM(node) {
      return [node].concat(Array.from(node.children).reduce(function(acc, child) {
        return [].concat(acc, flattenDOM(child));
      }, []));
    }
    return flattenDOM(container).filter(function(element) {
      return hidden === false ? isInaccessible(element) === false : true;
    }).reduce(function(acc, node) {
      var roles2 = [];
      if (node.hasAttribute("role")) {
        roles2 = node.getAttribute("role").split(" ").slice(0, 1);
      } else {
        roles2 = getImplicitAriaRoles(node);
      }
      return roles2.reduce(function(rolesAcc, role) {
        var _extends2, _extends3;
        return Array.isArray(rolesAcc[role]) ? _extends({}, rolesAcc, (_extends2 = {}, _extends2[role] = [].concat(rolesAcc[role], [node]), _extends2)) : _extends({}, rolesAcc, (_extends3 = {}, _extends3[role] = [node], _extends3));
      }, acc);
    }, {});
  }
  function prettyRoles(dom, _ref7) {
    var hidden = _ref7.hidden;
    var roles2 = getRoles(dom, {
      hidden
    });
    return Object.entries(roles2).filter(function(_ref8) {
      var role = _ref8[0];
      return role !== "generic";
    }).map(function(_ref9) {
      var role = _ref9[0], elements = _ref9[1];
      var delimiterBar = "-".repeat(50);
      var elementsString = elements.map(function(el) {
        var nameString = 'Name "' + computeAccessibleName(el, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        }) + '":\n';
        var domString = prettyDOM(el.cloneNode(false));
        return "" + nameString + domString;
      }).join("\n\n");
      return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
    }).join("\n");
  }
  function computeAriaSelected(element) {
    if (element.tagName === "OPTION") {
      return element.selected;
    }
    return checkBooleanAttribute(element, "aria-selected");
  }
  function computeAriaChecked(element) {
    if ("indeterminate" in element && element.indeterminate) {
      return void 0;
    }
    if ("checked" in element) {
      return element.checked;
    }
    return checkBooleanAttribute(element, "aria-checked");
  }
  function computeAriaPressed(element) {
    return checkBooleanAttribute(element, "aria-pressed");
  }
  function computeAriaExpanded(element) {
    return checkBooleanAttribute(element, "aria-expanded");
  }
  function checkBooleanAttribute(element, attribute) {
    var attributeValue = element.getAttribute(attribute);
    if (attributeValue === "true") {
      return true;
    }
    if (attributeValue === "false") {
      return false;
    }
    return void 0;
  }
  function computeHeadingLevel(element) {
    var implicitHeadingLevels = {
      H1: 1,
      H2: 2,
      H3: 3,
      H4: 4,
      H5: 5,
      H6: 6
    };
    var ariaLevelAttribute = element.getAttribute("aria-level") && Number(element.getAttribute("aria-level"));
    return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
  }
  var normalize = getDefaultNormalizer();
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  }
  function getRegExpMatcher(string) {
    return new RegExp(escapeRegExp(string.toLowerCase()), "i");
  }
  function makeSuggestion(queryName, element, content, _ref) {
    var variant = _ref.variant, name = _ref.name;
    var warning = "";
    var queryOptions = {};
    var queryArgs = [["Role", "TestId"].includes(queryName) ? content : getRegExpMatcher(content)];
    if (name) {
      queryOptions.name = getRegExpMatcher(name);
    }
    if (queryName === "Role" && isInaccessible(element)) {
      queryOptions.hidden = true;
      warning = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ";
    }
    if (Object.keys(queryOptions).length > 0) {
      queryArgs.push(queryOptions);
    }
    var queryMethod = variant + "By" + queryName;
    return {
      queryName,
      queryMethod,
      queryArgs,
      variant,
      warning,
      toString: function toString() {
        if (warning) {
          console.warn(warning);
        }
        var text = queryArgs[0], options = queryArgs[1];
        text = typeof text === "string" ? "'" + text + "'" : text;
        options = options ? ", { " + Object.entries(options).map(function(_ref2) {
          var k = _ref2[0], v = _ref2[1];
          return k + ": " + v;
        }).join(", ") + " }" : "";
        return queryMethod + "(" + text + options + ")";
      }
    };
  }
  function canSuggest(currentMethod, requestedMethod, data) {
    return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
  }
  function getSuggestedQuery(element, variant, method) {
    var _element$getAttribute, _getImplicitAriaRoles;
    if (variant === void 0) {
      variant = "get";
    }
    if (element.matches(DEFAULT_IGNORE_TAGS)) {
      return void 0;
    }
    var role = (_element$getAttribute = element.getAttribute("role")) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
    if (role !== "generic" && canSuggest("Role", method, role)) {
      return makeSuggestion("Role", element, role, {
        variant,
        name: computeAccessibleName(element, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        })
      });
    }
    var labelText = getLabels2(document, element).map(function(label) {
      return label.content;
    }).join(" ");
    if (canSuggest("LabelText", method, labelText)) {
      return makeSuggestion("LabelText", element, labelText, {
        variant
      });
    }
    var placeholderText = element.getAttribute("placeholder");
    if (canSuggest("PlaceholderText", method, placeholderText)) {
      return makeSuggestion("PlaceholderText", element, placeholderText, {
        variant
      });
    }
    var textContent = normalize(getNodeText(element));
    if (canSuggest("Text", method, textContent)) {
      return makeSuggestion("Text", element, textContent, {
        variant
      });
    }
    if (canSuggest("DisplayValue", method, element.value)) {
      return makeSuggestion("DisplayValue", element, normalize(element.value), {
        variant
      });
    }
    var alt = element.getAttribute("alt");
    if (canSuggest("AltText", method, alt)) {
      return makeSuggestion("AltText", element, alt, {
        variant
      });
    }
    var title = element.getAttribute("title");
    if (canSuggest("Title", method, title)) {
      return makeSuggestion("Title", element, title, {
        variant
      });
    }
    var testId = element.getAttribute(getConfig().testIdAttribute);
    if (canSuggest("TestId", method, testId)) {
      return makeSuggestion("TestId", element, testId, {
        variant
      });
    }
    return void 0;
  }
  function copyStackTrace(target, source) {
    target.stack = source.stack.replace(source.message, target.message);
  }
  function waitFor(callback, _ref) {
    var _ref$container = _ref.container, container = _ref$container === void 0 ? getDocument() : _ref$container, _ref$timeout = _ref.timeout, timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout, _ref$showOriginalStac = _ref.showOriginalStackTrace, showOriginalStackTrace = _ref$showOriginalStac === void 0 ? getConfig().showOriginalStackTrace : _ref$showOriginalStac, stackTraceError = _ref.stackTraceError, _ref$interval = _ref.interval, interval = _ref$interval === void 0 ? 50 : _ref$interval, _ref$onTimeout = _ref.onTimeout, onTimeout = _ref$onTimeout === void 0 ? function(error) {
      error.message = getConfig().getElementError(error.message, container).message;
      return error;
    } : _ref$onTimeout, _ref$mutationObserver = _ref.mutationObserverOptions, mutationObserverOptions = _ref$mutationObserver === void 0 ? {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    } : _ref$mutationObserver;
    if (typeof callback !== "function") {
      throw new TypeError("Received `callback` arg must be a function");
    }
    return new Promise(/* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(resolve, reject) {
        var lastError, intervalId, observer, finished, promiseStatus, overallTimeoutTimer, usingJestFakeTimers, error, _getWindowFromNode, MutationObserver, onDone, checkRealTimersCallback, checkCallback, handleTimeout;
        return import_regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                handleTimeout = function _handleTimeout() {
                  var error2;
                  if (lastError) {
                    error2 = lastError;
                    if (!showOriginalStackTrace && error2.name === "TestingLibraryElementError") {
                      copyStackTrace(error2, stackTraceError);
                    }
                  } else {
                    error2 = new Error("Timed out in waitFor.");
                    if (!showOriginalStackTrace) {
                      copyStackTrace(error2, stackTraceError);
                    }
                  }
                  onDone(onTimeout(error2), null);
                };
                checkCallback = function _checkCallback() {
                  if (promiseStatus === "pending")
                    return;
                  try {
                    var result = runWithExpensiveErrorDiagnosticsDisabled(callback);
                    if (typeof (result == null ? void 0 : result.then) === "function") {
                      promiseStatus = "pending";
                      result.then(function(resolvedValue) {
                        promiseStatus = "resolved";
                        onDone(null, resolvedValue);
                      }, function(rejectedValue) {
                        promiseStatus = "rejected";
                        lastError = rejectedValue;
                      });
                    } else {
                      onDone(null, result);
                    }
                  } catch (error2) {
                    lastError = error2;
                  }
                };
                checkRealTimersCallback = function _checkRealTimersCallb() {
                  if (jestFakeTimersAreEnabled()) {
                    var _error = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                    if (!showOriginalStackTrace)
                      copyStackTrace(_error, stackTraceError);
                    return reject(_error);
                  } else {
                    return checkCallback();
                  }
                };
                onDone = function _onDone(error2, result) {
                  finished = true;
                  clearTimeoutFn(overallTimeoutTimer);
                  if (!usingJestFakeTimers) {
                    clearInterval(intervalId);
                    observer.disconnect();
                  }
                  if (error2) {
                    reject(error2);
                  } else {
                    resolve(result);
                  }
                };
                finished = false;
                promiseStatus = "idle";
                overallTimeoutTimer = setTimeoutFn(handleTimeout, timeout);
                usingJestFakeTimers = jestFakeTimersAreEnabled();
                if (!usingJestFakeTimers) {
                  _context.next = 24;
                  break;
                }
                checkCallback();
              case 10:
                if (finished) {
                  _context.next = 22;
                  break;
                }
                if (jestFakeTimersAreEnabled()) {
                  _context.next = 16;
                  break;
                }
                error = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                if (!showOriginalStackTrace)
                  copyStackTrace(error, stackTraceError);
                reject(error);
                return _context.abrupt("return");
              case 16:
                jest.advanceTimersByTime(interval);
                checkCallback();
                _context.next = 20;
                return new Promise(function(r) {
                  return setImmediateFn(r);
                });
              case 20:
                _context.next = 10;
                break;
              case 22:
                _context.next = 37;
                break;
              case 24:
                _context.prev = 24;
                checkContainerType(container);
                _context.next = 32;
                break;
              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](24);
                reject(_context.t0);
                return _context.abrupt("return");
              case 32:
                intervalId = setInterval(checkRealTimersCallback, interval);
                _getWindowFromNode = getWindowFromNode(container), MutationObserver = _getWindowFromNode.MutationObserver;
                observer = new MutationObserver(checkRealTimersCallback);
                observer.observe(container, mutationObserverOptions);
                checkCallback();
              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[24, 28]]);
      }));
      return function(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  function waitForWrapper(callback, options) {
    var stackTraceError = new Error("STACK_TRACE_MESSAGE");
    return getConfig().asyncWrapper(function() {
      return waitFor(callback, _extends({
        stackTraceError
      }, options));
    });
  }
  function getElementError2(message, container) {
    return getConfig().getElementError(message, container);
  }
  function getMultipleElementsFoundError(message, container) {
    return getElementError2(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
  }
  function queryAllByAttribute(attribute, container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, trim = _ref.trim, normalizer = _ref.normalizer;
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    return Array.from(container.querySelectorAll("[" + attribute + "]")).filter(function(node) {
      return matcher(node.getAttribute(attribute), node, text, matchNormalizer);
    });
  }
  function makeSingleQuery(allQuery, getMultipleError10) {
    return function(container) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      var els = allQuery.apply(void 0, [container].concat(args));
      if (els.length > 1) {
        var elementStrings = els.map(function(element) {
          return getElementError2(null, element).message;
        }).join("\n\n");
        throw getMultipleElementsFoundError(getMultipleError10.apply(void 0, [container].concat(args)) + "\n\nHere are the matching elements:\n\n" + elementStrings, container);
      }
      return els[0] || null;
    };
  }
  function getSuggestionError(suggestion, container) {
    return getConfig().getElementError("A better query is available, try this:\n" + suggestion.toString() + "\n", container);
  }
  function makeGetAllQuery(allQuery, getMissingError9) {
    return function(container) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      var els = allQuery.apply(void 0, [container].concat(args));
      if (!els.length) {
        throw getConfig().getElementError(getMissingError9.apply(void 0, [container].concat(args)), container);
      }
      return els;
    };
  }
  function makeFindQuery(getter) {
    return function(container, text, options, waitForOptions) {
      return waitForWrapper(function() {
        return getter(container, text, options);
      }, _extends({
        container
      }, waitForOptions));
    };
  }
  var wrapSingleQueryWithSuggestion = function wrapSingleQueryWithSuggestion2(query, queryAllByName, variant) {
    return function(container) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      var element = query.apply(void 0, [container].concat(args));
      var _args$slice = args.slice(-1), _args$slice$ = _args$slice[0];
      _args$slice$ = _args$slice$ === void 0 ? {} : _args$slice$;
      var _args$slice$$suggest = _args$slice$.suggest, suggest = _args$slice$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice$$suggest;
      if (element && suggest) {
        var suggestion = getSuggestedQuery(element, variant);
        if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
          throw getSuggestionError(suggestion.toString(), container);
        }
      }
      return element;
    };
  };
  var wrapAllByQueryWithSuggestion = function wrapAllByQueryWithSuggestion2(query, queryAllByName, variant) {
    return function(container) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      var els = query.apply(void 0, [container].concat(args));
      var _args$slice2 = args.slice(-1), _args$slice2$ = _args$slice2[0];
      _args$slice2$ = _args$slice2$ === void 0 ? {} : _args$slice2$;
      var _args$slice2$$suggest = _args$slice2$.suggest, suggest = _args$slice2$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice2$$suggest;
      if (els.length && suggest) {
        var uniqueSuggestionMessages = [].concat(new Set(els.map(function(element) {
          var _getSuggestedQuery;
          return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
        })));
        if (uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(getSuggestedQuery(els[0], variant).queryName)) {
          throw getSuggestionError(uniqueSuggestionMessages[0], container);
        }
      }
      return els;
    };
  };
  function buildQueries(queryAllBy, getMultipleError10, getMissingError9) {
    var queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError10), queryAllBy.name, "query");
    var getAllBy = makeGetAllQuery(queryAllBy, getMissingError9);
    var getBy = makeSingleQuery(getAllBy, getMultipleError10);
    var getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "get");
    var getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace("query", "get"), "getAll");
    var findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, "findAll"));
    var findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "find"));
    return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
  }
  function queryAllLabels(container) {
    return Array.from(container.querySelectorAll("label,input")).map(function(node) {
      return {
        node,
        textToMatch: getLabelContent(node)
      };
    }).filter(function(_ref) {
      var textToMatch = _ref.textToMatch;
      return textToMatch !== null;
    });
  }
  var queryAllLabelsByText = function queryAllLabelsByText2(container, text, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp, _ref2$exact = _ref2.exact, exact = _ref2$exact === void 0 ? true : _ref2$exact, trim = _ref2.trim, collapseWhitespace = _ref2.collapseWhitespace, normalizer = _ref2.normalizer;
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    var textToMatchByLabels = queryAllLabels(container);
    return textToMatchByLabels.filter(function(_ref3) {
      var node = _ref3.node, textToMatch = _ref3.textToMatch;
      return matcher(textToMatch, node, text, matchNormalizer);
    }).map(function(_ref4) {
      var node = _ref4.node;
      return node;
    });
  };
  var queryAllByLabelText = function queryAllByLabelText2(container, text, _temp2) {
    var _ref5 = _temp2 === void 0 ? {} : _temp2, _ref5$selector = _ref5.selector, selector = _ref5$selector === void 0 ? "*" : _ref5$selector, _ref5$exact = _ref5.exact, exact = _ref5$exact === void 0 ? true : _ref5$exact, collapseWhitespace = _ref5.collapseWhitespace, trim = _ref5.trim, normalizer = _ref5.normalizer;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    var matchingLabelledElements = Array.from(container.querySelectorAll("*")).filter(function(element) {
      return getRealLabels(element).length || element.hasAttribute("aria-labelledby");
    }).reduce(function(labelledElements, labelledElement) {
      var labelList = getLabels2(container, labelledElement, {
        selector
      });
      labelList.filter(function(label) {
        return Boolean(label.formControl);
      }).forEach(function(label) {
        if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl)
          labelledElements.push(label.formControl);
      });
      var labelsValue = labelList.filter(function(label) {
        return Boolean(label.content);
      }).map(function(label) {
        return label.content;
      });
      if (matcher(labelsValue.join(" "), labelledElement, text, matchNormalizer))
        labelledElements.push(labelledElement);
      if (labelsValue.length > 1) {
        labelsValue.forEach(function(labelValue, index) {
          if (matcher(labelValue, labelledElement, text, matchNormalizer))
            labelledElements.push(labelledElement);
          var labelsFiltered = [].concat(labelsValue);
          labelsFiltered.splice(index, 1);
          if (labelsFiltered.length > 1) {
            if (matcher(labelsFiltered.join(" "), labelledElement, text, matchNormalizer))
              labelledElements.push(labelledElement);
          }
        });
      }
      return labelledElements;
    }, []).concat(queryAllByAttribute("aria-label", container, text, {
      exact,
      normalizer: matchNormalizer
    }));
    return Array.from(new Set(matchingLabelledElements)).filter(function(element) {
      return element.matches(selector);
    });
  };
  var getAllByLabelText = function getAllByLabelText2(container, text) {
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    var els = queryAllByLabelText.apply(void 0, [container, text].concat(rest));
    if (!els.length) {
      var labels = queryAllLabelsByText.apply(void 0, [container, text].concat(rest));
      if (labels.length) {
        var tagNames = labels.map(function(label) {
          return getTagNameOfElementAssociatedWithLabelViaFor(container, label);
        }).filter(function(tagName) {
          return !!tagName;
        });
        if (tagNames.length) {
          throw getConfig().getElementError(tagNames.map(function(tagName) {
            return "Found a label with the text of: " + text + ", however the element associated with this label (<" + tagName + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + tagName + " />, you can use aria-label or aria-labelledby instead.";
          }).join("\n\n"), container);
        } else {
          throw getConfig().getElementError("Found a label with the text of: " + text + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, container);
        }
      } else {
        throw getConfig().getElementError("Unable to find a label with the text of: " + text, container);
      }
    }
    return els;
  };
  function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
    var htmlFor = label.getAttribute("for");
    if (!htmlFor) {
      return null;
    }
    var element = container.querySelector('[id="' + htmlFor + '"]');
    return element ? element.tagName.toLowerCase() : null;
  }
  var getMultipleError$7 = function getMultipleError(c, text) {
    return "Found multiple elements with the text of: " + text;
  };
  var queryByLabelText = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllByLabelText, getMultipleError$7), queryAllByLabelText.name, "query");
  var getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7);
  var findAllByLabelText = makeFindQuery(wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, "findAll"));
  var findByLabelText = makeFindQuery(wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, "find"));
  var getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, "getAll");
  var getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, "get");
  var queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByLabelText, queryAllByLabelText.name, "queryAll");
  var queryAllByPlaceholderText = function queryAllByPlaceholderText2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    checkContainerType(args[0]);
    return queryAllByAttribute.apply(void 0, ["placeholder"].concat(args));
  };
  var getMultipleError$6 = function getMultipleError2(c, text) {
    return "Found multiple elements with the placeholder text of: " + text;
  };
  var getMissingError$6 = function getMissingError(c, text) {
    return "Unable to find an element with the placeholder text of: " + text;
  };
  var queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByPlaceholderText, queryAllByPlaceholderText.name, "queryAll");
  var _buildQueries$6 = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6);
  var queryByPlaceholderText = _buildQueries$6[0];
  var getAllByPlaceholderText = _buildQueries$6[1];
  var getByPlaceholderText = _buildQueries$6[2];
  var findAllByPlaceholderText = _buildQueries$6[3];
  var findByPlaceholderText = _buildQueries$6[4];
  var queryAllByText = function queryAllByText2(container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$selector = _ref.selector, selector = _ref$selector === void 0 ? "*" : _ref$selector, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, trim = _ref.trim, _ref$ignore = _ref.ignore, ignore = _ref$ignore === void 0 ? DEFAULT_IGNORE_TAGS : _ref$ignore, normalizer = _ref.normalizer;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    var baseArray = [];
    if (typeof container.matches === "function" && container.matches(selector)) {
      baseArray = [container];
    }
    return [].concat(baseArray, Array.from(container.querySelectorAll(selector))).filter(function(node) {
      return !ignore || !node.matches(ignore);
    }).filter(function(node) {
      return matcher(getNodeText(node), node, text, matchNormalizer);
    });
  };
  var getMultipleError$5 = function getMultipleError3(c, text) {
    return "Found multiple elements with the text: " + text;
  };
  var getMissingError$5 = function getMissingError2(c, text) {
    return "Unable to find an element with the text: " + text + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
  };
  var queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByText, queryAllByText.name, "queryAll");
  var _buildQueries$5 = buildQueries(queryAllByText, getMultipleError$5, getMissingError$5);
  var queryByText = _buildQueries$5[0];
  var getAllByText = _buildQueries$5[1];
  var getByText = _buildQueries$5[2];
  var findAllByText = _buildQueries$5[3];
  var findByText = _buildQueries$5[4];
  var queryAllByDisplayValue = function queryAllByDisplayValue2(container, value, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, trim = _ref.trim, normalizer = _ref.normalizer;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    return Array.from(container.querySelectorAll("input,textarea,select")).filter(function(node) {
      if (node.tagName === "SELECT") {
        var selectedOptions = Array.from(node.options).filter(function(option) {
          return option.selected;
        });
        return selectedOptions.some(function(optionNode) {
          return matcher(getNodeText(optionNode), optionNode, value, matchNormalizer);
        });
      } else {
        return matcher(node.value, node, value, matchNormalizer);
      }
    });
  };
  var getMultipleError$4 = function getMultipleError4(c, value) {
    return "Found multiple elements with the display value: " + value + ".";
  };
  var getMissingError$4 = function getMissingError3(c, value) {
    return "Unable to find an element with the display value: " + value + ".";
  };
  var queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByDisplayValue, queryAllByDisplayValue.name, "queryAll");
  var _buildQueries$4 = buildQueries(queryAllByDisplayValue, getMultipleError$4, getMissingError$4);
  var queryByDisplayValue = _buildQueries$4[0];
  var getAllByDisplayValue = _buildQueries$4[1];
  var getByDisplayValue = _buildQueries$4[2];
  var findAllByDisplayValue = _buildQueries$4[3];
  var findByDisplayValue = _buildQueries$4[4];
  var queryAllByAltText = function queryAllByAltText2(container, alt, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, trim = _ref.trim, normalizer = _ref.normalizer;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    return Array.from(container.querySelectorAll("img,input,area")).filter(function(node) {
      return matcher(node.getAttribute("alt"), node, alt, matchNormalizer);
    });
  };
  var getMultipleError$3 = function getMultipleError5(c, alt) {
    return "Found multiple elements with the alt text: " + alt;
  };
  var getMissingError$3 = function getMissingError4(c, alt) {
    return "Unable to find an element with the alt text: " + alt;
  };
  var queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByAltText, queryAllByAltText.name, "queryAll");
  var _buildQueries$3 = buildQueries(queryAllByAltText, getMultipleError$3, getMissingError$3);
  var queryByAltText = _buildQueries$3[0];
  var getAllByAltText = _buildQueries$3[1];
  var getByAltText = _buildQueries$3[2];
  var findAllByAltText = _buildQueries$3[3];
  var findByAltText = _buildQueries$3[4];
  var isSvgTitle = function isSvgTitle2(node) {
    var _node$parentElement;
    return node.tagName.toLowerCase() === "title" && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === "svg";
  };
  var queryAllByTitle = function queryAllByTitle2(container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, trim = _ref.trim, normalizer = _ref.normalizer;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    return Array.from(container.querySelectorAll("[title], svg > title")).filter(function(node) {
      return matcher(node.getAttribute("title"), node, text, matchNormalizer) || isSvgTitle(node) && matcher(getNodeText(node), node, text, matchNormalizer);
    });
  };
  var getMultipleError$2 = function getMultipleError6(c, title) {
    return "Found multiple elements with the title: " + title + ".";
  };
  var getMissingError$2 = function getMissingError5(c, title) {
    return "Unable to find an element with the title: " + title + ".";
  };
  var queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTitle, queryAllByTitle.name, "queryAll");
  var _buildQueries$2 = buildQueries(queryAllByTitle, getMultipleError$2, getMissingError$2);
  var queryByTitle = _buildQueries$2[0];
  var getAllByTitle = _buildQueries$2[1];
  var getByTitle = _buildQueries$2[2];
  var findAllByTitle = _buildQueries$2[3];
  var findByTitle = _buildQueries$2[4];
  function queryAllByRole(container, role, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$exact = _ref.exact, exact = _ref$exact === void 0 ? true : _ref$exact, collapseWhitespace = _ref.collapseWhitespace, _ref$hidden = _ref.hidden, hidden = _ref$hidden === void 0 ? getConfig().defaultHidden : _ref$hidden, name = _ref.name, trim = _ref.trim, normalizer = _ref.normalizer, _ref$queryFallbacks = _ref.queryFallbacks, queryFallbacks = _ref$queryFallbacks === void 0 ? false : _ref$queryFallbacks, selected = _ref.selected, checked = _ref.checked, pressed = _ref.pressed, level = _ref.level, expanded = _ref.expanded;
    checkContainerType(container);
    var matcher = exact ? matches : fuzzyMatches;
    var matchNormalizer = makeNormalizer({
      collapseWhitespace,
      trim,
      normalizer
    });
    if (selected !== void 0) {
      var _allRoles$get;
      if (((_allRoles$get = import_aria_query.roles.get(role)) == null ? void 0 : _allRoles$get.props["aria-selected"]) === void 0) {
        throw new Error('"aria-selected" is not supported on role "' + role + '".');
      }
    }
    if (checked !== void 0) {
      var _allRoles$get2;
      if (((_allRoles$get2 = import_aria_query.roles.get(role)) == null ? void 0 : _allRoles$get2.props["aria-checked"]) === void 0) {
        throw new Error('"aria-checked" is not supported on role "' + role + '".');
      }
    }
    if (pressed !== void 0) {
      var _allRoles$get3;
      if (((_allRoles$get3 = import_aria_query.roles.get(role)) == null ? void 0 : _allRoles$get3.props["aria-pressed"]) === void 0) {
        throw new Error('"aria-pressed" is not supported on role "' + role + '".');
      }
    }
    if (level !== void 0) {
      if (role !== "heading") {
        throw new Error('Role "' + role + '" cannot have "level" property.');
      }
    }
    if (expanded !== void 0) {
      var _allRoles$get4;
      if (((_allRoles$get4 = import_aria_query.roles.get(role)) == null ? void 0 : _allRoles$get4.props["aria-expanded"]) === void 0) {
        throw new Error('"aria-expanded" is not supported on role "' + role + '".');
      }
    }
    var subtreeIsInaccessibleCache = new WeakMap();
    function cachedIsSubtreeInaccessible(element) {
      if (!subtreeIsInaccessibleCache.has(element)) {
        subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));
      }
      return subtreeIsInaccessibleCache.get(element);
    }
    return Array.from(container.querySelectorAll("*")).filter(function(node) {
      var isRoleSpecifiedExplicitly = node.hasAttribute("role");
      if (isRoleSpecifiedExplicitly) {
        var roleValue = node.getAttribute("role");
        if (queryFallbacks) {
          return roleValue.split(" ").filter(Boolean).some(function(text) {
            return matcher(text, node, role, matchNormalizer);
          });
        }
        if (normalizer) {
          return matcher(roleValue, node, role, matchNormalizer);
        }
        var _roleValue$split = roleValue.split(" "), firstWord = _roleValue$split[0];
        return matcher(firstWord, node, role, matchNormalizer);
      }
      var implicitRoles = getImplicitAriaRoles(node);
      return implicitRoles.some(function(implicitRole) {
        return matcher(implicitRole, node, role, matchNormalizer);
      });
    }).filter(function(element) {
      if (selected !== void 0) {
        return selected === computeAriaSelected(element);
      }
      if (checked !== void 0) {
        return checked === computeAriaChecked(element);
      }
      if (pressed !== void 0) {
        return pressed === computeAriaPressed(element);
      }
      if (expanded !== void 0) {
        return expanded === computeAriaExpanded(element);
      }
      if (level !== void 0) {
        return level === computeHeadingLevel(element);
      }
      return true;
    }).filter(function(element) {
      return hidden === false ? isInaccessible(element, {
        isSubtreeInaccessible: cachedIsSubtreeInaccessible
      }) === false : true;
    }).filter(function(element) {
      if (name === void 0) {
        return true;
      }
      return matches(computeAccessibleName(element, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
      }), element, name, function(text) {
        return text;
      });
    });
  }
  var getMultipleError$1 = function getMultipleError7(c, role, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2, name = _ref2.name;
    var nameHint = "";
    if (name === void 0) {
      nameHint = "";
    } else if (typeof name === "string") {
      nameHint = ' and name "' + name + '"';
    } else {
      nameHint = " and name `" + name + "`";
    }
    return 'Found multiple elements with the role "' + role + '"' + nameHint;
  };
  var getMissingError$1 = function getMissingError6(container, role, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$hidden = _ref3.hidden, hidden = _ref3$hidden === void 0 ? getConfig().defaultHidden : _ref3$hidden, name = _ref3.name;
    if (getConfig()._disableExpensiveErrorDiagnostics) {
      return 'Unable to find role="' + role + '"';
    }
    var roles2 = "";
    Array.from(container.children).forEach(function(childElement) {
      roles2 += prettyRoles(childElement, {
        hidden,
        includeName: name !== void 0
      });
    });
    var roleMessage;
    if (roles2.length === 0) {
      if (hidden === false) {
        roleMessage = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole";
      } else {
        roleMessage = "There are no available roles.";
      }
    } else {
      roleMessage = ("\nHere are the " + (hidden === false ? "accessible" : "available") + " roles:\n\n  " + roles2.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
    }
    var nameHint = "";
    if (name === void 0) {
      nameHint = "";
    } else if (typeof name === "string") {
      nameHint = ' and name "' + name + '"';
    } else {
      nameHint = " and name `" + name + "`";
    }
    return ("\nUnable to find an " + (hidden === false ? "accessible " : "") + 'element with the role "' + role + '"' + nameHint + "\n\n" + roleMessage).trim();
  };
  var queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByRole, queryAllByRole.name, "queryAll");
  var _buildQueries$1 = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1);
  var queryByRole = _buildQueries$1[0];
  var getAllByRole = _buildQueries$1[1];
  var getByRole = _buildQueries$1[2];
  var findAllByRole = _buildQueries$1[3];
  var findByRole = _buildQueries$1[4];
  var getTestIdAttribute = function getTestIdAttribute2() {
    return getConfig().testIdAttribute;
  };
  var queryAllByTestId = function queryAllByTestId2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    checkContainerType(args[0]);
    return queryAllByAttribute.apply(void 0, [getTestIdAttribute()].concat(args));
  };
  var getMultipleError8 = function getMultipleError9(c, id) {
    return "Found multiple elements by: [" + getTestIdAttribute() + '="' + id + '"]';
  };
  var getMissingError7 = function getMissingError8(c, id) {
    return "Unable to find an element by: [" + getTestIdAttribute() + '="' + id + '"]';
  };
  var queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTestId, queryAllByTestId.name, "queryAll");
  var _buildQueries = buildQueries(queryAllByTestId, getMultipleError8, getMissingError7);
  var queryByTestId = _buildQueries[0];
  var getAllByTestId = _buildQueries[1];
  var getByTestId = _buildQueries[2];
  var findAllByTestId = _buildQueries[3];
  var findByTestId = _buildQueries[4];
  var queries = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    queryAllByLabelText: queryAllByLabelTextWithSuggestions,
    queryByLabelText,
    getAllByLabelText: getAllByLabelTextWithSuggestions,
    getByLabelText: getByLabelTextWithSuggestions,
    findAllByLabelText,
    findByLabelText,
    queryByPlaceholderText,
    queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
    getByPlaceholderText,
    getAllByPlaceholderText,
    findAllByPlaceholderText,
    findByPlaceholderText,
    queryByText,
    queryAllByText: queryAllByTextWithSuggestions,
    getByText,
    getAllByText,
    findAllByText,
    findByText,
    queryByDisplayValue,
    queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
    getByDisplayValue,
    getAllByDisplayValue,
    findAllByDisplayValue,
    findByDisplayValue,
    queryByAltText,
    queryAllByAltText: queryAllByAltTextWithSuggestions,
    getByAltText,
    getAllByAltText,
    findAllByAltText,
    findByAltText,
    queryByTitle,
    queryAllByTitle: queryAllByTitleWithSuggestions,
    getByTitle,
    getAllByTitle,
    findAllByTitle,
    findByTitle,
    queryByRole,
    queryAllByRole: queryAllByRoleWithSuggestions,
    getAllByRole,
    getByRole,
    findAllByRole,
    findByRole,
    queryByTestId,
    queryAllByTestId: queryAllByTestIdWithSuggestions,
    getByTestId,
    getAllByTestId,
    findAllByTestId,
    findByTestId
  });
  function getQueriesForElement(element, queries$1, initialValue2) {
    if (queries$1 === void 0) {
      queries$1 = queries;
    }
    if (initialValue2 === void 0) {
      initialValue2 = {};
    }
    return Object.keys(queries$1).reduce(function(helpers, key) {
      var fn = queries$1[key];
      helpers[key] = fn.bind(null, element);
      return helpers;
    }, initialValue2);
  }
  var eventMap = {
    copy: {
      EventType: "ClipboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    cut: {
      EventType: "ClipboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    paste: {
      EventType: "ClipboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    compositionEnd: {
      EventType: "CompositionEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    compositionStart: {
      EventType: "CompositionEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    compositionUpdate: {
      EventType: "CompositionEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    keyDown: {
      EventType: "KeyboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true
      }
    },
    keyPress: {
      EventType: "KeyboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true
      }
    },
    keyUp: {
      EventType: "KeyboardEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true
      }
    },
    focus: {
      EventType: "FocusEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true
      }
    },
    blur: {
      EventType: "FocusEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true
      }
    },
    focusIn: {
      EventType: "FocusEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    focusOut: {
      EventType: "FocusEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    change: {
      EventType: "Event",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    },
    input: {
      EventType: "InputEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    invalid: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: true
      }
    },
    submit: {
      EventType: "Event",
      defaultInit: {
        bubbles: true,
        cancelable: true
      }
    },
    reset: {
      EventType: "Event",
      defaultInit: {
        bubbles: true,
        cancelable: true
      }
    },
    click: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        button: 0,
        composed: true
      }
    },
    contextMenu: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    dblClick: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    drag: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    dragEnd: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    dragEnter: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    dragExit: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    dragLeave: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    dragOver: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    dragStart: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    drop: {
      EventType: "DragEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    mouseDown: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    mouseEnter: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true
      }
    },
    mouseLeave: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true
      }
    },
    mouseMove: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    mouseOut: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    mouseOver: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    mouseUp: {
      EventType: "MouseEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    select: {
      EventType: "Event",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    },
    touchCancel: {
      EventType: "TouchEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    touchEnd: {
      EventType: "TouchEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    touchMove: {
      EventType: "TouchEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    touchStart: {
      EventType: "TouchEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    scroll: {
      EventType: "UIEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    wheel: {
      EventType: "WheelEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    abort: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    canPlay: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    canPlayThrough: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    durationChange: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    emptied: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    encrypted: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    ended: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    loadedData: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    loadedMetadata: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    loadStart: {
      EventType: "ProgressEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    pause: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    play: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    playing: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    progress: {
      EventType: "ProgressEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    rateChange: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    seeked: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    seeking: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    stalled: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    suspend: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    timeUpdate: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    volumeChange: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    waiting: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    load: {
      EventType: "UIEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    error: {
      EventType: "Event",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    animationStart: {
      EventType: "AnimationEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    },
    animationEnd: {
      EventType: "AnimationEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    },
    animationIteration: {
      EventType: "AnimationEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    },
    transitionEnd: {
      EventType: "TransitionEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true
      }
    },
    pointerOver: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    pointerEnter: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    pointerDown: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    pointerMove: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    pointerUp: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    pointerCancel: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    pointerOut: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true
      }
    },
    pointerLeave: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: false,
        cancelable: false
      }
    },
    gotPointerCapture: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    lostPointerCapture: {
      EventType: "PointerEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true
      }
    },
    popState: {
      EventType: "PopStateEvent",
      defaultInit: {
        bubbles: true,
        cancelable: false
      }
    }
  };
  var eventAliasMap = {
    doubleClick: "dblClick"
  };
  function fireEvent(element, event) {
    return getConfig().eventWrapper(function() {
      if (!event) {
        throw new Error("Unable to fire an event - please provide an event object.");
      }
      if (!element) {
        throw new Error('Unable to fire a "' + event.type + '" event - please provide a DOM element.');
      }
      return element.dispatchEvent(event);
    });
  }
  function createEvent(eventName, node, init, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$EventType = _ref.EventType, EventType = _ref$EventType === void 0 ? "Event" : _ref$EventType, _ref$defaultInit = _ref.defaultInit, defaultInit = _ref$defaultInit === void 0 ? {} : _ref$defaultInit;
    if (!node) {
      throw new Error('Unable to fire a "' + eventName + '" event - please provide a DOM element.');
    }
    var eventInit = _extends({}, defaultInit, init);
    var _eventInit$target = eventInit.target;
    _eventInit$target = _eventInit$target === void 0 ? {} : _eventInit$target;
    var value = _eventInit$target.value, files = _eventInit$target.files, targetProperties = _objectWithoutPropertiesLoose(_eventInit$target, ["value", "files"]);
    if (value !== void 0) {
      setNativeValue(node, value);
    }
    if (files !== void 0) {
      Object.defineProperty(node, "files", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: files
      });
    }
    Object.assign(node, targetProperties);
    var window2 = getWindowFromNode(node);
    var EventConstructor = window2[EventType] || window2.Event;
    var event;
    if (typeof EventConstructor === "function") {
      event = new EventConstructor(eventName, eventInit);
    } else {
      event = window2.document.createEvent(EventType);
      var bubbles = eventInit.bubbles, cancelable = eventInit.cancelable, detail = eventInit.detail, otherInit = _objectWithoutPropertiesLoose(eventInit, ["bubbles", "cancelable", "detail"]);
      event.initEvent(eventName, bubbles, cancelable, detail);
      Object.keys(otherInit).forEach(function(eventKey) {
        event[eventKey] = otherInit[eventKey];
      });
    }
    var dataTransferProperties = ["dataTransfer", "clipboardData"];
    dataTransferProperties.forEach(function(dataTransferKey) {
      var dataTransferValue = eventInit[dataTransferKey];
      if (typeof dataTransferValue === "object") {
        if (typeof window2.DataTransfer === "function") {
          Object.defineProperty(event, dataTransferKey, {
            value: Object.getOwnPropertyNames(dataTransferValue).reduce(function(acc, propName) {
              Object.defineProperty(acc, propName, {
                value: dataTransferValue[propName]
              });
              return acc;
            }, new window2.DataTransfer())
          });
        } else {
          Object.defineProperty(event, dataTransferKey, {
            value: dataTransferValue
          });
        }
      }
    });
    return event;
  }
  Object.keys(eventMap).forEach(function(key) {
    var _eventMap$key = eventMap[key], EventType = _eventMap$key.EventType, defaultInit = _eventMap$key.defaultInit;
    var eventName = key.toLowerCase();
    createEvent[key] = function(node, init) {
      return createEvent(eventName, node, init, {
        EventType,
        defaultInit
      });
    };
    fireEvent[key] = function(node, init) {
      return fireEvent(node, createEvent[key](node, init));
    };
  });
  function setNativeValue(element, value) {
    var _ref2 = Object.getOwnPropertyDescriptor(element, "value") || {}, valueSetter = _ref2.set;
    var prototype = Object.getPrototypeOf(element);
    var _ref3 = Object.getOwnPropertyDescriptor(prototype, "value") || {}, prototypeValueSetter = _ref3.set;
    if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else if (valueSetter) {
      valueSetter.call(element, value);
    } else {
      throw new Error("The given element does not have a value setter");
    }
  }
  Object.keys(eventAliasMap).forEach(function(aliasKey) {
    var key = eventAliasMap[aliasKey];
    fireEvent[aliasKey] = function() {
      return fireEvent[key].apply(fireEvent, arguments);
    };
  });
  function unindent(string) {
    return string.replace(/[ \t]*[\n][ \t]*/g, "\n");
  }
  function encode(value) {
    return (0, import_lz_string.compressToEncodedURIComponent)(unindent(value));
  }
  function getPlaygroundUrl(markup) {
    return "https://testing-playground.com/#markup=" + encode(markup);
  }
  var debug = function debug2(element, maxLength, options) {
    return Array.isArray(element) ? element.forEach(function(el) {
      return logDOM(el, maxLength, options);
    }) : logDOM(element, maxLength, options);
  };
  var logTestingPlaygroundURL = function logTestingPlaygroundURL2(element) {
    if (element === void 0) {
      element = getDocument().body;
    }
    if (!element || !("innerHTML" in element)) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!element.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    console.log("Open this URL in your browser\n\n" + getPlaygroundUrl(element.innerHTML));
  };
  var initialValue = {
    debug,
    logTestingPlaygroundURL
  };
  var screen = typeof document !== "undefined" && document.body ? getQueriesForElement(document.body, queries, initialValue) : Object.keys(queries).reduce(function(helpers, key) {
    helpers[key] = function() {
      throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
    };
    return helpers;
  }, initialValue);

  // bundle.input.js
  window["__dom_testing_library__"] = { ...queries2, getNodeText };
})();
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
