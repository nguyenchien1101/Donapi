var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/defer-to-connect/dist/source/index.js
var require_source = __commonJS({
  "node_modules/defer-to-connect/dist/source/index.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function isTLSSocket(socket) {
      return socket.encrypted;
    }
    var deferToConnect2 = (socket, fn) => {
      let listeners;
      if (typeof fn === "function") {
        const connect2 = fn;
        listeners = { connect: connect2 };
      } else {
        listeners = fn;
      }
      const hasConnectListener = typeof listeners.connect === "function";
      const hasSecureConnectListener = typeof listeners.secureConnect === "function";
      const hasCloseListener = typeof listeners.close === "function";
      const onConnect = () => {
        if (hasConnectListener) {
          listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
          if (socket.authorized) {
            listeners.secureConnect();
          } else if (!socket.authorizationError) {
            socket.once("secureConnect", listeners.secureConnect);
          }
        }
        if (hasCloseListener) {
          socket.once("close", listeners.close);
        }
      };
      if (socket.writable && !socket.connecting) {
        onConnect();
      } else if (socket.connecting) {
        socket.once("connect", onConnect);
      } else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
      }
    };
    exports2.default = deferToConnect2;
    module2.exports = deferToConnect2;
    module2.exports.default = deferToConnect2;
  }
});

// node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "node_modules/get-stream/buffer-stream.js"(exports2, module2) {
    "use strict";
    var { PassThrough: PassThroughStream2 } = require("stream");
    module2.exports = (options) => {
      options = { ...options };
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream2 = new PassThroughStream2({ objectMode });
      if (encoding) {
        stream2.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream2.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream2.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream2.getBufferedLength = () => length;
      return stream2;
    };
  }
});

// node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "node_modules/get-stream/index.js"(exports2, module2) {
    "use strict";
    var { constants: BufferConstants } = require("buffer");
    var stream2 = require("stream");
    var { promisify: promisify5 } = require("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify5(stream2.pipeline);
    var MaxBufferError = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream3(inputStream, options) {
      if (!inputStream) {
        throw new Error("Expected a stream");
      }
      options = {
        maxBuffer: Infinity,
        ...options
      };
      const { maxBuffer } = options;
      const stream3 = bufferStream(options);
      await new Promise((resolve, reject) => {
        const rejectPromise = (error) => {
          if (error && stream3.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream3.getBufferedValue();
          }
          reject(error);
        };
        (async () => {
          try {
            await streamPipelinePromisified(inputStream, stream3);
            resolve();
          } catch (error) {
            rejectPromise(error);
          }
        })();
        stream3.on("data", () => {
          if (stream3.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError());
          }
        });
      });
      return stream3.getBufferedValue();
    }
    module2.exports = getStream3;
    module2.exports.buffer = (stream3, options) => getStream3(stream3, { ...options, encoding: "buffer" });
    module2.exports.array = (stream3, options) => getStream3(stream3, { ...options, array: true });
    module2.exports.MaxBufferError = MaxBufferError;
  }
});

// node_modules/http-cache-semantics/index.js
var require_http_cache_semantics = __commonJS({
  "node_modules/http-cache-semantics/index.js"(exports2, module2) {
    "use strict";
    var statusCodeCacheableByDefault = /* @__PURE__ */ new Set([
      200,
      203,
      204,
      206,
      300,
      301,
      308,
      404,
      405,
      410,
      414,
      501
    ]);
    var understoodStatuses = /* @__PURE__ */ new Set([
      200,
      203,
      204,
      300,
      301,
      302,
      303,
      307,
      308,
      404,
      405,
      410,
      414,
      501
    ]);
    var errorStatusCodes = /* @__PURE__ */ new Set([
      500,
      502,
      503,
      504
    ]);
    var hopByHopHeaders = {
      date: true,
      // included, because we add Age update Date
      connection: true,
      "keep-alive": true,
      "proxy-authenticate": true,
      "proxy-authorization": true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true
    };
    var excludedFromRevalidationUpdate = {
      // Since the old body is reused, it doesn't make sense to change properties of the body
      "content-length": true,
      "content-encoding": true,
      "transfer-encoding": true,
      "content-range": true
    };
    function toNumberOrZero(s) {
      const n = parseInt(s, 10);
      return isFinite(n) ? n : 0;
    }
    function isErrorResponse(response) {
      if (!response) {
        return true;
      }
      return errorStatusCodes.has(response.status);
    }
    function parseCacheControl(header) {
      const cc = {};
      if (!header)
        return cc;
      const parts = header.trim().split(/,/);
      for (const part of parts) {
        const [k, v] = part.split(/=/, 2);
        cc[k.trim()] = v === void 0 ? true : v.trim().replace(/^"|"$/g, "");
      }
      return cc;
    }
    function formatCacheControl(cc) {
      let parts = [];
      for (const k in cc) {
        const v = cc[k];
        parts.push(v === true ? k : k + "=" + v);
      }
      if (!parts.length) {
        return void 0;
      }
      return parts.join(", ");
    }
    module2.exports = class CachePolicy {
      constructor(req, res, {
        shared,
        cacheHeuristic,
        immutableMinTimeToLive,
        ignoreCargoCult,
        _fromObject
      } = {}) {
        if (_fromObject) {
          this._fromObject(_fromObject);
          return;
        }
        if (!res || !res.headers) {
          throw Error("Response headers missing");
        }
        this._assertRequestHasHeaders(req);
        this._responseTime = this.now();
        this._isShared = shared !== false;
        this._cacheHeuristic = void 0 !== cacheHeuristic ? cacheHeuristic : 0.1;
        this._immutableMinTtl = void 0 !== immutableMinTimeToLive ? immutableMinTimeToLive : 24 * 3600 * 1e3;
        this._status = "status" in res ? res.status : 200;
        this._resHeaders = res.headers;
        this._rescc = parseCacheControl(res.headers["cache-control"]);
        this._method = "method" in req ? req.method : "GET";
        this._url = req.url;
        this._host = req.headers.host;
        this._noAuthorization = !req.headers.authorization;
        this._reqHeaders = res.headers.vary ? req.headers : null;
        this._reqcc = parseCacheControl(req.headers["cache-control"]);
        if (ignoreCargoCult && "pre-check" in this._rescc && "post-check" in this._rescc) {
          delete this._rescc["pre-check"];
          delete this._rescc["post-check"];
          delete this._rescc["no-cache"];
          delete this._rescc["no-store"];
          delete this._rescc["must-revalidate"];
          this._resHeaders = Object.assign({}, this._resHeaders, {
            "cache-control": formatCacheControl(this._rescc)
          });
          delete this._resHeaders.expires;
          delete this._resHeaders.pragma;
        }
        if (res.headers["cache-control"] == null && /no-cache/.test(res.headers.pragma)) {
          this._rescc["no-cache"] = true;
        }
      }
      now() {
        return Date.now();
      }
      storable() {
        return !!(!this._reqcc["no-store"] && // A cache MUST NOT store a response to any request, unless:
        // The request method is understood by the cache and defined as being cacheable, and
        ("GET" === this._method || "HEAD" === this._method || "POST" === this._method && this._hasExplicitExpiration()) && // the response status code is understood by the cache, and
        understoodStatuses.has(this._status) && // the "no-store" cache directive does not appear in request or response header fields, and
        !this._rescc["no-store"] && // the "private" response directive does not appear in the response, if the cache is shared, and
        (!this._isShared || !this._rescc.private) && // the Authorization header field does not appear in the request, if the cache is shared,
        (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && // the response either:
        // contains an Expires header field, or
        (this._resHeaders.expires || // contains a max-age response directive, or
        // contains a s-maxage response directive and the cache is shared, or
        // contains a public response directive.
        this._rescc["max-age"] || this._isShared && this._rescc["s-maxage"] || this._rescc.public || // has a status code that is defined as cacheable by default
        statusCodeCacheableByDefault.has(this._status)));
      }
      _hasExplicitExpiration() {
        return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires;
      }
      _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
          throw Error("Request headers missing");
        }
      }
      satisfiesWithoutRevalidation(req) {
        this._assertRequestHasHeaders(req);
        const requestCC = parseCacheControl(req.headers["cache-control"]);
        if (requestCC["no-cache"] || /no-cache/.test(req.headers.pragma)) {
          return false;
        }
        if (requestCC["max-age"] && this.age() > requestCC["max-age"]) {
          return false;
        }
        if (requestCC["min-fresh"] && this.timeToLive() < 1e3 * requestCC["min-fresh"]) {
          return false;
        }
        if (this.stale()) {
          const allowsStale = requestCC["max-stale"] && !this._rescc["must-revalidate"] && (true === requestCC["max-stale"] || requestCC["max-stale"] > this.age() - this.maxAge());
          if (!allowsStale) {
            return false;
          }
        }
        return this._requestMatches(req, false);
      }
      _requestMatches(req, allowHeadMethod) {
        return (!this._url || this._url === req.url) && this._host === req.headers.host && // the request method associated with the stored response allows it to be used for the presented request, and
        (!req.method || this._method === req.method || allowHeadMethod && "HEAD" === req.method) && // selecting header fields nominated by the stored response (if any) match those presented, and
        this._varyMatches(req);
      }
      _allowsStoringAuthenticated() {
        return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"];
      }
      _varyMatches(req) {
        if (!this._resHeaders.vary) {
          return true;
        }
        if (this._resHeaders.vary === "*") {
          return false;
        }
        const fields = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
        for (const name of fields) {
          if (req.headers[name] !== this._reqHeaders[name])
            return false;
        }
        return true;
      }
      _copyWithoutHopByHopHeaders(inHeaders) {
        const headers = {};
        for (const name in inHeaders) {
          if (hopByHopHeaders[name])
            continue;
          headers[name] = inHeaders[name];
        }
        if (inHeaders.connection) {
          const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
          for (const name of tokens) {
            delete headers[name];
          }
        }
        if (headers.warning) {
          const warnings = headers.warning.split(/,/).filter((warning) => {
            return !/^\s*1[0-9][0-9]/.test(warning);
          });
          if (!warnings.length) {
            delete headers.warning;
          } else {
            headers.warning = warnings.join(",").trim();
          }
        }
        return headers;
      }
      responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();
        if (age > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24) {
          headers.warning = (headers.warning ? `${headers.warning}, ` : "") + '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
      }
      /**
       * Value of the Date response header or current time if Date was invalid
       * @return timestamp
       */
      date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
          return serverDate;
        }
        return this._responseTime;
      }
      /**
       * Value of the Age header, in seconds, updated for the current time.
       * May be fractional.
       *
       * @return Number
       */
      age() {
        let age = this._ageValue();
        const residentTime = (this.now() - this._responseTime) / 1e3;
        return age + residentTime;
      }
      _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
      }
      /**
       * Value of applicable max-age (or heuristic equivalent) in seconds. This counts since response's `Date`.
       *
       * For an up-to-date value, see `timeToLive()`.
       *
       * @return Number
       */
      maxAge() {
        if (!this.storable() || this._rescc["no-cache"]) {
          return 0;
        }
        if (this._isShared && (this._resHeaders["set-cookie"] && !this._rescc.public && !this._rescc.immutable)) {
          return 0;
        }
        if (this._resHeaders.vary === "*") {
          return 0;
        }
        if (this._isShared) {
          if (this._rescc["proxy-revalidate"]) {
            return 0;
          }
          if (this._rescc["s-maxage"]) {
            return toNumberOrZero(this._rescc["s-maxage"]);
          }
        }
        if (this._rescc["max-age"]) {
          return toNumberOrZero(this._rescc["max-age"]);
        }
        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;
        const serverDate = this.date();
        if (this._resHeaders.expires) {
          const expires = Date.parse(this._resHeaders.expires);
          if (Number.isNaN(expires) || expires < serverDate) {
            return 0;
          }
          return Math.max(defaultMinTtl, (expires - serverDate) / 1e3);
        }
        if (this._resHeaders["last-modified"]) {
          const lastModified = Date.parse(this._resHeaders["last-modified"]);
          if (isFinite(lastModified) && serverDate > lastModified) {
            return Math.max(
              defaultMinTtl,
              (serverDate - lastModified) / 1e3 * this._cacheHeuristic
            );
          }
        }
        return defaultMinTtl;
      }
      timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc["stale-if-error"]);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc["stale-while-revalidate"]);
        return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1e3;
      }
      stale() {
        return this.maxAge() <= this.age();
      }
      _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-if-error"]) > this.age();
      }
      useStaleWhileRevalidate() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-while-revalidate"]) > this.age();
      }
      static fromObject(obj) {
        return new this(void 0, void 0, { _fromObject: obj });
      }
      _fromObject(obj) {
        if (this._responseTime)
          throw Error("Reinitialized");
        if (!obj || obj.v !== 1)
          throw Error("Invalid serialization");
        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl = obj.imm !== void 0 ? obj.imm : 24 * 3600 * 1e3;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
      }
      toObject() {
        return {
          v: 1,
          t: this._responseTime,
          sh: this._isShared,
          ch: this._cacheHeuristic,
          imm: this._immutableMinTtl,
          st: this._status,
          resh: this._resHeaders,
          rescc: this._rescc,
          m: this._method,
          u: this._url,
          h: this._host,
          a: this._noAuthorization,
          reqh: this._reqHeaders,
          reqcc: this._reqcc
        };
      }
      /**
       * Headers for sending to the origin server to revalidate stale response.
       * Allows server to return 304 to allow reuse of the previous response.
       *
       * Hop by hop headers are always stripped.
       * Revalidation headers may be added or removed, depending on request.
       */
      revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);
        delete headers["if-range"];
        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
          delete headers["if-none-match"];
          delete headers["if-modified-since"];
          return headers;
        }
        if (this._resHeaders.etag) {
          headers["if-none-match"] = headers["if-none-match"] ? `${headers["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.etag;
        }
        const forbidsWeakValidators = headers["accept-ranges"] || headers["if-match"] || headers["if-unmodified-since"] || this._method && this._method != "GET";
        if (forbidsWeakValidators) {
          delete headers["if-modified-since"];
          if (headers["if-none-match"]) {
            const etags = headers["if-none-match"].split(/,/).filter((etag) => {
              return !/^\s*W\//.test(etag);
            });
            if (!etags.length) {
              delete headers["if-none-match"];
            } else {
              headers["if-none-match"] = etags.join(",").trim();
            }
          }
        } else if (this._resHeaders["last-modified"] && !headers["if-modified-since"]) {
          headers["if-modified-since"] = this._resHeaders["last-modified"];
        }
        return headers;
      }
      /**
       * Creates new CachePolicy with information combined from the previews response,
       * and the new revalidation response.
       *
       * Returns {policy, modified} where modified is a boolean indicating
       * whether the response body has been modified, and old cached body can't be used.
       *
       * @return {Object} {policy: CachePolicy, modified: Boolean}
       */
      revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if (this._useStaleIfError() && isErrorResponse(response)) {
          return {
            modified: false,
            matches: false,
            policy: this
          };
        }
        if (!response || !response.headers) {
          throw Error("Response headers missing");
        }
        let matches = false;
        if (response.status !== void 0 && response.status != 304) {
          matches = false;
        } else if (response.headers.etag && !/^\s*W\//.test(response.headers.etag)) {
          matches = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
          matches = this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag.replace(/^\s*W\//, "");
        } else if (this._resHeaders["last-modified"]) {
          matches = this._resHeaders["last-modified"] === response.headers["last-modified"];
        } else {
          if (!this._resHeaders.etag && !this._resHeaders["last-modified"] && !response.headers.etag && !response.headers["last-modified"]) {
            matches = true;
          }
        }
        if (!matches) {
          return {
            policy: new this.constructor(request, response),
            // Client receiving 304 without body, even if it's invalid/mismatched has no option
            // but to reuse a cached body. We don't have a good way to tell clients to do
            // error recovery in such case.
            modified: response.status != 304,
            matches: false
          };
        }
        const headers = {};
        for (const k in this._resHeaders) {
          headers[k] = k in response.headers && !excludedFromRevalidationUpdate[k] ? response.headers[k] : this._resHeaders[k];
        }
        const newResponse = Object.assign({}, response, {
          status: this._status,
          method: this._method,
          headers
        });
        return {
          policy: new this.constructor(request, newResponse, {
            shared: this._isShared,
            cacheHeuristic: this._cacheHeuristic,
            immutableMinTimeToLive: this._immutableMinTtl
          }),
          modified: false,
          matches: true
        };
      }
    };
  }
});

// node_modules/json-buffer/index.js
var require_json_buffer = __commonJS({
  "node_modules/json-buffer/index.js"(exports2) {
    exports2.stringify = function stringify(o) {
      if ("undefined" == typeof o)
        return o;
      if (o && Buffer.isBuffer(o))
        return JSON.stringify(":base64:" + o.toString("base64"));
      if (o && o.toJSON)
        o = o.toJSON();
      if (o && "object" === typeof o) {
        var s = "";
        var array = Array.isArray(o);
        s = array ? "[" : "{";
        var first = true;
        for (var k in o) {
          var ignore = "function" == typeof o[k] || !array && "undefined" === typeof o[k];
          if (Object.hasOwnProperty.call(o, k) && !ignore) {
            if (!first)
              s += ",";
            first = false;
            if (array) {
              if (o[k] == void 0)
                s += "null";
              else
                s += stringify(o[k]);
            } else if (o[k] !== void 0) {
              s += stringify(k) + ":" + stringify(o[k]);
            }
          }
        }
        s += array ? "]" : "}";
        return s;
      } else if ("string" === typeof o) {
        return JSON.stringify(/^:/.test(o) ? ":" + o : o);
      } else if ("undefined" === typeof o) {
        return "null";
      } else
        return JSON.stringify(o);
    };
    exports2.parse = function(s) {
      return JSON.parse(s, function(key, value) {
        if ("string" === typeof value) {
          if (/^:base64:/.test(value))
            return Buffer.from(value.substring(8), "base64");
          else
            return /^:/.test(value) ? value.substring(1) : value;
        }
        return value;
      });
    };
  }
});

// node_modules/keyv/src/index.js
var require_src = __commonJS({
  "node_modules/keyv/src/index.js"(exports2, module2) {
    "use strict";
    var EventEmitter4 = require("events");
    var JSONB = require_json_buffer();
    var loadStore = (options) => {
      const adapters = {
        redis: "@keyv/redis",
        rediss: "@keyv/redis",
        mongodb: "@keyv/mongo",
        mongo: "@keyv/mongo",
        sqlite: "@keyv/sqlite",
        postgresql: "@keyv/postgres",
        postgres: "@keyv/postgres",
        mysql: "@keyv/mysql",
        etcd: "@keyv/etcd",
        offline: "@keyv/offline",
        tiered: "@keyv/tiered"
      };
      if (options.adapter || options.uri) {
        const adapter = options.adapter || /^[^:+]*/.exec(options.uri)[0];
        return new (require(adapters[adapter]))(options);
      }
      return /* @__PURE__ */ new Map();
    };
    var iterableAdapters = [
      "sqlite",
      "postgres",
      "mysql",
      "mongo",
      "redis",
      "tiered"
    ];
    var Keyv2 = class extends EventEmitter4 {
      constructor(uri, { emitErrors = true, ...options } = {}) {
        super();
        this.opts = {
          namespace: "keyv",
          serialize: JSONB.stringify,
          deserialize: JSONB.parse,
          ...typeof uri === "string" ? { uri } : uri,
          ...options
        };
        if (!this.opts.store) {
          const adapterOptions = { ...this.opts };
          this.opts.store = loadStore(adapterOptions);
        }
        if (this.opts.compression) {
          const compression = this.opts.compression;
          this.opts.serialize = compression.serialize.bind(compression);
          this.opts.deserialize = compression.deserialize.bind(compression);
        }
        if (typeof this.opts.store.on === "function" && emitErrors) {
          this.opts.store.on("error", (error) => this.emit("error", error));
        }
        this.opts.store.namespace = this.opts.namespace;
        const generateIterator = (iterator) => async function* () {
          for await (const [key, raw] of typeof iterator === "function" ? iterator(this.opts.store.namespace) : iterator) {
            const data = await this.opts.deserialize(raw);
            if (this.opts.store.namespace && !key.includes(this.opts.store.namespace)) {
              continue;
            }
            if (typeof data.expires === "number" && Date.now() > data.expires) {
              this.delete(key);
              continue;
            }
            yield [this._getKeyUnprefix(key), data.value];
          }
        };
        if (typeof this.opts.store[Symbol.iterator] === "function" && this.opts.store instanceof Map) {
          this.iterator = generateIterator(this.opts.store);
        } else if (typeof this.opts.store.iterator === "function" && this.opts.store.opts && this._checkIterableAdaptar()) {
          this.iterator = generateIterator(this.opts.store.iterator.bind(this.opts.store));
        }
      }
      _checkIterableAdaptar() {
        return iterableAdapters.includes(this.opts.store.opts.dialect) || iterableAdapters.findIndex((element) => this.opts.store.opts.url.includes(element)) >= 0;
      }
      _getKeyPrefix(key) {
        return `${this.opts.namespace}:${key}`;
      }
      _getKeyPrefixArray(keys) {
        return keys.map((key) => `${this.opts.namespace}:${key}`);
      }
      _getKeyUnprefix(key) {
        return key.split(":").splice(1).join(":");
      }
      get(key, options) {
        const { store } = this.opts;
        const isArray = Array.isArray(key);
        const keyPrefixed = isArray ? this._getKeyPrefixArray(key) : this._getKeyPrefix(key);
        if (isArray && store.getMany === void 0) {
          const promises = [];
          for (const key2 of keyPrefixed) {
            promises.push(
              Promise.resolve().then(() => store.get(key2)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : this.opts.compression ? this.opts.deserialize(data) : data).then((data) => {
                if (data === void 0 || data === null) {
                  return void 0;
                }
                if (typeof data.expires === "number" && Date.now() > data.expires) {
                  return this.delete(key2).then(() => void 0);
                }
                return options && options.raw ? data : data.value;
              })
            );
          }
          return Promise.allSettled(promises).then((values) => {
            const data = [];
            for (const value of values) {
              data.push(value.value);
            }
            return data;
          });
        }
        return Promise.resolve().then(() => isArray ? store.getMany(keyPrefixed) : store.get(keyPrefixed)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : this.opts.compression ? this.opts.deserialize(data) : data).then((data) => {
          if (data === void 0 || data === null) {
            return void 0;
          }
          if (isArray) {
            const result = [];
            for (let row of data) {
              if (typeof row === "string") {
                row = this.opts.deserialize(row);
              }
              if (row === void 0 || row === null) {
                result.push(void 0);
                continue;
              }
              if (typeof row.expires === "number" && Date.now() > row.expires) {
                this.delete(key).then(() => void 0);
                result.push(void 0);
              } else {
                result.push(options && options.raw ? row : row.value);
              }
            }
            return result;
          }
          if (typeof data.expires === "number" && Date.now() > data.expires) {
            return this.delete(key).then(() => void 0);
          }
          return options && options.raw ? data : data.value;
        });
      }
      set(key, value, ttl2) {
        const keyPrefixed = this._getKeyPrefix(key);
        if (typeof ttl2 === "undefined") {
          ttl2 = this.opts.ttl;
        }
        if (ttl2 === 0) {
          ttl2 = void 0;
        }
        const { store } = this.opts;
        return Promise.resolve().then(() => {
          const expires = typeof ttl2 === "number" ? Date.now() + ttl2 : null;
          if (typeof value === "symbol") {
            this.emit("error", "symbol cannot be serialized");
          }
          value = { value, expires };
          return this.opts.serialize(value);
        }).then((value2) => store.set(keyPrefixed, value2, ttl2)).then(() => true);
      }
      delete(key) {
        const { store } = this.opts;
        if (Array.isArray(key)) {
          const keyPrefixed2 = this._getKeyPrefixArray(key);
          if (store.deleteMany === void 0) {
            const promises = [];
            for (const key2 of keyPrefixed2) {
              promises.push(store.delete(key2));
            }
            return Promise.allSettled(promises).then((values) => values.every((x) => x.value === true));
          }
          return Promise.resolve().then(() => store.deleteMany(keyPrefixed2));
        }
        const keyPrefixed = this._getKeyPrefix(key);
        return Promise.resolve().then(() => store.delete(keyPrefixed));
      }
      clear() {
        const { store } = this.opts;
        return Promise.resolve().then(() => store.clear());
      }
      has(key) {
        const keyPrefixed = this._getKeyPrefix(key);
        const { store } = this.opts;
        return Promise.resolve().then(async () => {
          if (typeof store.has === "function") {
            return store.has(keyPrefixed);
          }
          const value = await store.get(keyPrefixed);
          return value !== void 0;
        });
      }
      disconnect() {
        const { store } = this.opts;
        if (typeof store.disconnect === "function") {
          return store.disconnect();
        }
      }
    };
    module2.exports = Keyv2;
  }
});

// node_modules/decompress-response/node_modules/mimic-response/index.js
var require_mimic_response = __commonJS({
  "node_modules/decompress-response/node_modules/mimic-response/index.js"(exports2, module2) {
    "use strict";
    var knownProperties2 = [
      "aborted",
      "complete",
      "headers",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "method",
      "rawHeaders",
      "rawTrailers",
      "setTimeout",
      "socket",
      "statusCode",
      "statusMessage",
      "trailers",
      "url"
    ];
    module2.exports = (fromStream, toStream) => {
      if (toStream._readableState.autoDestroy) {
        throw new Error("The second stream must have the `autoDestroy` option set to `false`");
      }
      const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties2));
      const properties = {};
      for (const property of fromProperties) {
        if (property in toStream) {
          continue;
        }
        properties[property] = {
          get() {
            const value = fromStream[property];
            const isFunction2 = typeof value === "function";
            return isFunction2 ? value.bind(fromStream) : value;
          },
          set(value) {
            fromStream[property] = value;
          },
          enumerable: true,
          configurable: false
        };
      }
      Object.defineProperties(toStream, properties);
      fromStream.once("aborted", () => {
        toStream.destroy();
        toStream.emit("aborted");
      });
      fromStream.once("close", () => {
        if (fromStream.complete) {
          if (toStream.readable) {
            toStream.once("end", () => {
              toStream.emit("close");
            });
          } else {
            toStream.emit("close");
          }
        } else {
          toStream.emit("close");
        }
      });
      return toStream;
    };
  }
});

// node_modules/decompress-response/index.js
var require_decompress_response = __commonJS({
  "node_modules/decompress-response/index.js"(exports2, module2) {
    "use strict";
    var { Transform, PassThrough } = require("stream");
    var zlib = require("zlib");
    var mimicResponse2 = require_mimic_response();
    module2.exports = (response) => {
      const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
      if (!["gzip", "deflate", "br"].includes(contentEncoding)) {
        return response;
      }
      const isBrotli = contentEncoding === "br";
      if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
        response.destroy(new Error("Brotli is not supported on Node.js < 12"));
        return response;
      }
      let isEmpty = true;
      const checker = new Transform({
        transform(data, _encoding, callback) {
          isEmpty = false;
          callback(null, data);
        },
        flush(callback) {
          callback();
        }
      });
      const finalStream = new PassThrough({
        autoDestroy: false,
        destroy(error, callback) {
          response.destroy();
          callback(error);
        }
      });
      const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
      decompressStream.once("error", (error) => {
        if (isEmpty && !response.readable) {
          finalStream.end();
          return;
        }
        finalStream.destroy(error);
      });
      mimicResponse2(response, finalStream);
      response.pipe(checker).pipe(decompressStream).pipe(finalStream);
      return finalStream;
    };
  }
});

// node_modules/quick-lru/index.js
var require_quick_lru = __commonJS({
  "node_modules/quick-lru/index.js"(exports2, module2) {
    "use strict";
    var QuickLRU = class {
      constructor(options = {}) {
        if (!(options.maxSize && options.maxSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        this.maxSize = options.maxSize;
        this.onEviction = options.onEviction;
        this.cache = /* @__PURE__ */ new Map();
        this.oldCache = /* @__PURE__ */ new Map();
        this._size = 0;
      }
      _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
          this._size = 0;
          if (typeof this.onEviction === "function") {
            for (const [key2, value2] of this.oldCache.entries()) {
              this.onEviction(key2, value2);
            }
          }
          this.oldCache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
      get(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          const value = this.oldCache.get(key);
          this.oldCache.delete(key);
          this._set(key, value);
          return value;
        }
      }
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
        } else {
          this._set(key, value);
        }
        return this;
      }
      has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
      }
      peek(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          return this.oldCache.get(key);
        }
      }
      delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
          this._size--;
        }
        return this.oldCache.delete(key) || deleted;
      }
      clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
      *keys() {
        for (const [key] of this) {
          yield key;
        }
      }
      *values() {
        for (const [, value] of this) {
          yield value;
        }
      }
      *[Symbol.iterator]() {
        for (const item of this.cache) {
          yield item;
        }
        for (const item of this.oldCache) {
          const [key] = item;
          if (!this.cache.has(key)) {
            yield item;
          }
        }
      }
      get size() {
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()) {
          if (!this.cache.has(key)) {
            oldCacheSize++;
          }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
      }
    };
    module2.exports = QuickLRU;
  }
});

// node_modules/http2-wrapper/source/utils/delay-async-destroy.js
var require_delay_async_destroy = __commonJS({
  "node_modules/http2-wrapper/source/utils/delay-async-destroy.js"(exports2, module2) {
    "use strict";
    module2.exports = (stream2) => {
      if (stream2.listenerCount("error") !== 0) {
        return stream2;
      }
      stream2.__destroy = stream2._destroy;
      stream2._destroy = (...args) => {
        const callback = args.pop();
        stream2.__destroy(...args, async (error) => {
          await Promise.resolve();
          callback(error);
        });
      };
      const onError = (error) => {
        Promise.resolve().then(() => {
          stream2.emit("error", error);
        });
      };
      stream2.once("error", onError);
      Promise.resolve().then(() => {
        stream2.off("error", onError);
      });
      return stream2;
    };
  }
});

// node_modules/http2-wrapper/source/agent.js
var require_agent = __commonJS({
  "node_modules/http2-wrapper/source/agent.js"(exports2, module2) {
    "use strict";
    var { URL: URL2 } = require("url");
    var EventEmitter4 = require("events");
    var tls = require("tls");
    var http22 = require("http2");
    var QuickLRU = require_quick_lru();
    var delayAsyncDestroy = require_delay_async_destroy();
    var kCurrentStreamCount = Symbol("currentStreamCount");
    var kRequest = Symbol("request");
    var kOriginSet = Symbol("cachedOriginSet");
    var kGracefullyClosing = Symbol("gracefullyClosing");
    var kLength = Symbol("length");
    var nameKeys = [
      // Not an Agent option actually
      "createConnection",
      // `http2.connect()` options
      "maxDeflateDynamicTableSize",
      "maxSettings",
      "maxSessionMemory",
      "maxHeaderListPairs",
      "maxOutstandingPings",
      "maxReservedRemoteStreams",
      "maxSendHeaderBlockLength",
      "paddingStrategy",
      "peerMaxConcurrentStreams",
      "settings",
      // `tls.connect()` source options
      "family",
      "localAddress",
      "rejectUnauthorized",
      // `tls.connect()` secure context options
      "pskCallback",
      "minDHSize",
      // `tls.connect()` destination options
      // - `servername` is automatically validated, skip it
      // - `host` and `port` just describe the destination server,
      "path",
      "socket",
      // `tls.createSecureContext()` options
      "ca",
      "cert",
      "sigalgs",
      "ciphers",
      "clientCertEngine",
      "crl",
      "dhparam",
      "ecdhCurve",
      "honorCipherOrder",
      "key",
      "privateKeyEngine",
      "privateKeyIdentifier",
      "maxVersion",
      "minVersion",
      "pfx",
      "secureOptions",
      "secureProtocol",
      "sessionIdContext",
      "ticketKeys"
    ];
    var getSortedIndex = (array, value, compare) => {
      let low = 0;
      let high = array.length;
      while (low < high) {
        const mid = low + high >>> 1;
        if (compare(array[mid], value)) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    };
    var compareSessions = (a, b) => a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
    var closeCoveredSessions = (where, session) => {
      for (let index = 0; index < where.length; index++) {
        const coveredSession = where[index];
        if (
          // Unfortunately `.every()` returns true for an empty array
          coveredSession[kOriginSet].length > 0 && coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamCount] + session[kCurrentStreamCount] <= session.remoteSettings.maxConcurrentStreams
        ) {
          gracefullyClose(coveredSession);
        }
      }
    };
    var closeSessionIfCovered = (where, coveredSession) => {
      for (let index = 0; index < where.length; index++) {
        const session = where[index];
        if (coveredSession[kOriginSet].length > 0 && coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamCount] + session[kCurrentStreamCount] <= session.remoteSettings.maxConcurrentStreams) {
          gracefullyClose(coveredSession);
          return true;
        }
      }
      return false;
    };
    var gracefullyClose = (session) => {
      session[kGracefullyClosing] = true;
      if (session[kCurrentStreamCount] === 0) {
        session.close();
      }
    };
    var Agent = class _Agent extends EventEmitter4 {
      constructor({ timeout = 0, maxSessions = Number.POSITIVE_INFINITY, maxEmptySessions = 10, maxCachedTlsSessions = 100 } = {}) {
        super();
        this.sessions = {};
        this.queue = {};
        this.timeout = timeout;
        this.maxSessions = maxSessions;
        this.maxEmptySessions = maxEmptySessions;
        this._emptySessionCount = 0;
        this._sessionCount = 0;
        this.settings = {
          enablePush: false,
          initialWindowSize: 1024 * 1024 * 32
          // 32MB, see https://github.com/nodejs/node/issues/38426
        };
        this.tlsSessionCache = new QuickLRU({ maxSize: maxCachedTlsSessions });
      }
      get protocol() {
        return "https:";
      }
      normalizeOptions(options) {
        let normalized = "";
        for (let index = 0; index < nameKeys.length; index++) {
          const key = nameKeys[index];
          normalized += ":";
          if (options && options[key] !== void 0) {
            normalized += options[key];
          }
        }
        return normalized;
      }
      _processQueue() {
        if (this._sessionCount >= this.maxSessions) {
          this.closeEmptySessions(this.maxSessions - this._sessionCount + 1);
          return;
        }
        for (const normalizedOptions in this.queue) {
          for (const normalizedOrigin in this.queue[normalizedOptions]) {
            const item = this.queue[normalizedOptions][normalizedOrigin];
            if (!item.completed) {
              item.completed = true;
              item();
            }
          }
        }
      }
      _isBetterSession(thisStreamCount, thatStreamCount) {
        return thisStreamCount > thatStreamCount;
      }
      _accept(session, listeners, normalizedOrigin, options) {
        let index = 0;
        while (index < listeners.length && session[kCurrentStreamCount] < session.remoteSettings.maxConcurrentStreams) {
          listeners[index].resolve(session);
          index++;
        }
        listeners.splice(0, index);
        if (listeners.length > 0) {
          this.getSession(normalizedOrigin, options, listeners);
          listeners.length = 0;
        }
      }
      getSession(origin, options, listeners) {
        return new Promise((resolve, reject) => {
          if (Array.isArray(listeners) && listeners.length > 0) {
            listeners = [...listeners];
            resolve();
          } else {
            listeners = [{ resolve, reject }];
          }
          try {
            if (typeof origin === "string") {
              origin = new URL2(origin);
            } else if (!(origin instanceof URL2)) {
              throw new TypeError("The `origin` argument needs to be a string or an URL object");
            }
            if (options) {
              const { servername } = options;
              const { hostname } = origin;
              if (servername && hostname !== servername) {
                throw new Error(`Origin ${hostname} differs from servername ${servername}`);
              }
            }
          } catch (error) {
            for (let index = 0; index < listeners.length; index++) {
              listeners[index].reject(error);
            }
            return;
          }
          const normalizedOptions = this.normalizeOptions(options);
          const normalizedOrigin = origin.origin;
          if (normalizedOptions in this.sessions) {
            const sessions = this.sessions[normalizedOptions];
            let maxConcurrentStreams = -1;
            let currentStreamsCount = -1;
            let optimalSession;
            for (let index = 0; index < sessions.length; index++) {
              const session = sessions[index];
              const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;
              if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
                break;
              }
              if (!session[kOriginSet].includes(normalizedOrigin)) {
                continue;
              }
              const sessionCurrentStreamsCount = session[kCurrentStreamCount];
              if (sessionCurrentStreamsCount >= sessionMaxConcurrentStreams || session[kGracefullyClosing] || session.destroyed) {
                continue;
              }
              if (!optimalSession) {
                maxConcurrentStreams = sessionMaxConcurrentStreams;
              }
              if (this._isBetterSession(sessionCurrentStreamsCount, currentStreamsCount)) {
                optimalSession = session;
                currentStreamsCount = sessionCurrentStreamsCount;
              }
            }
            if (optimalSession) {
              this._accept(optimalSession, listeners, normalizedOrigin, options);
              return;
            }
          }
          if (normalizedOptions in this.queue) {
            if (normalizedOrigin in this.queue[normalizedOptions]) {
              this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);
              return;
            }
          } else {
            this.queue[normalizedOptions] = {
              [kLength]: 0
            };
          }
          const removeFromQueue = () => {
            if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
              delete this.queue[normalizedOptions][normalizedOrigin];
              if (--this.queue[normalizedOptions][kLength] === 0) {
                delete this.queue[normalizedOptions];
              }
            }
          };
          const entry = async () => {
            this._sessionCount++;
            const name = `${normalizedOrigin}:${normalizedOptions}`;
            let receivedSettings = false;
            let socket;
            try {
              const computedOptions = { ...options };
              if (computedOptions.settings === void 0) {
                computedOptions.settings = this.settings;
              }
              if (computedOptions.session === void 0) {
                computedOptions.session = this.tlsSessionCache.get(name);
              }
              const createConnection = computedOptions.createConnection || this.createConnection;
              socket = await createConnection.call(this, origin, computedOptions);
              computedOptions.createConnection = () => socket;
              const session = http22.connect(origin, computedOptions);
              session[kCurrentStreamCount] = 0;
              session[kGracefullyClosing] = false;
              const getOriginSet = () => {
                const { socket: socket2 } = session;
                let originSet;
                if (socket2.servername === false) {
                  socket2.servername = socket2.remoteAddress;
                  originSet = session.originSet;
                  socket2.servername = false;
                } else {
                  originSet = session.originSet;
                }
                return originSet;
              };
              const isFree = () => session[kCurrentStreamCount] < session.remoteSettings.maxConcurrentStreams;
              session.socket.once("session", (tlsSession) => {
                this.tlsSessionCache.set(name, tlsSession);
              });
              session.once("error", (error) => {
                for (let index = 0; index < listeners.length; index++) {
                  listeners[index].reject(error);
                }
                this.tlsSessionCache.delete(name);
              });
              session.setTimeout(this.timeout, () => {
                session.destroy();
              });
              session.once("close", () => {
                this._sessionCount--;
                if (receivedSettings) {
                  this._emptySessionCount--;
                  const where = this.sessions[normalizedOptions];
                  if (where.length === 1) {
                    delete this.sessions[normalizedOptions];
                  } else {
                    where.splice(where.indexOf(session), 1);
                  }
                } else {
                  removeFromQueue();
                  const error = new Error("Session closed without receiving a SETTINGS frame");
                  error.code = "HTTP2WRAPPER_NOSETTINGS";
                  for (let index = 0; index < listeners.length; index++) {
                    listeners[index].reject(error);
                  }
                }
                this._processQueue();
              });
              const processListeners = () => {
                const queue = this.queue[normalizedOptions];
                if (!queue) {
                  return;
                }
                const originSet = session[kOriginSet];
                for (let index = 0; index < originSet.length; index++) {
                  const origin2 = originSet[index];
                  if (origin2 in queue) {
                    const { listeners: listeners2, completed } = queue[origin2];
                    let index2 = 0;
                    while (index2 < listeners2.length && isFree()) {
                      listeners2[index2].resolve(session);
                      index2++;
                    }
                    queue[origin2].listeners.splice(0, index2);
                    if (queue[origin2].listeners.length === 0 && !completed) {
                      delete queue[origin2];
                      if (--queue[kLength] === 0) {
                        delete this.queue[normalizedOptions];
                        break;
                      }
                    }
                    if (!isFree()) {
                      break;
                    }
                  }
                }
              };
              session.on("origin", () => {
                session[kOriginSet] = getOriginSet() || [];
                session[kGracefullyClosing] = false;
                closeSessionIfCovered(this.sessions[normalizedOptions], session);
                if (session[kGracefullyClosing] || !isFree()) {
                  return;
                }
                processListeners();
                if (!isFree()) {
                  return;
                }
                closeCoveredSessions(this.sessions[normalizedOptions], session);
              });
              session.once("remoteSettings", () => {
                if (entry.destroyed) {
                  const error = new Error("Agent has been destroyed");
                  for (let index = 0; index < listeners.length; index++) {
                    listeners[index].reject(error);
                  }
                  session.destroy();
                  return;
                }
                if (session.setLocalWindowSize) {
                  session.setLocalWindowSize(1024 * 1024 * 4);
                }
                session[kOriginSet] = getOriginSet() || [];
                if (session.socket.encrypted) {
                  const mainOrigin = session[kOriginSet][0];
                  if (mainOrigin !== normalizedOrigin) {
                    const error = new Error(`Requested origin ${normalizedOrigin} does not match server ${mainOrigin}`);
                    for (let index = 0; index < listeners.length; index++) {
                      listeners[index].reject(error);
                    }
                    session.destroy();
                    return;
                  }
                }
                removeFromQueue();
                {
                  const where = this.sessions;
                  if (normalizedOptions in where) {
                    const sessions = where[normalizedOptions];
                    sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
                  } else {
                    where[normalizedOptions] = [session];
                  }
                }
                receivedSettings = true;
                this._emptySessionCount++;
                this.emit("session", session);
                this._accept(session, listeners, normalizedOrigin, options);
                if (session[kCurrentStreamCount] === 0 && this._emptySessionCount > this.maxEmptySessions) {
                  this.closeEmptySessions(this._emptySessionCount - this.maxEmptySessions);
                }
                session.on("remoteSettings", () => {
                  if (!isFree()) {
                    return;
                  }
                  processListeners();
                  if (!isFree()) {
                    return;
                  }
                  closeCoveredSessions(this.sessions[normalizedOptions], session);
                });
              });
              session[kRequest] = session.request;
              session.request = (headers, streamOptions) => {
                if (session[kGracefullyClosing]) {
                  throw new Error("The session is gracefully closing. No new streams are allowed.");
                }
                const stream2 = session[kRequest](headers, streamOptions);
                session.ref();
                if (session[kCurrentStreamCount]++ === 0) {
                  this._emptySessionCount--;
                }
                stream2.once("close", () => {
                  if (--session[kCurrentStreamCount] === 0) {
                    this._emptySessionCount++;
                    session.unref();
                    if (this._emptySessionCount > this.maxEmptySessions || session[kGracefullyClosing]) {
                      session.close();
                      return;
                    }
                  }
                  if (session.destroyed || session.closed) {
                    return;
                  }
                  if (isFree() && !closeSessionIfCovered(this.sessions[normalizedOptions], session)) {
                    closeCoveredSessions(this.sessions[normalizedOptions], session);
                    processListeners();
                    if (session[kCurrentStreamCount] === 0) {
                      this._processQueue();
                    }
                  }
                });
                return stream2;
              };
            } catch (error) {
              removeFromQueue();
              this._sessionCount--;
              for (let index = 0; index < listeners.length; index++) {
                listeners[index].reject(error);
              }
            }
          };
          entry.listeners = listeners;
          entry.completed = false;
          entry.destroyed = false;
          this.queue[normalizedOptions][normalizedOrigin] = entry;
          this.queue[normalizedOptions][kLength]++;
          this._processQueue();
        });
      }
      request(origin, options, headers, streamOptions) {
        return new Promise((resolve, reject) => {
          this.getSession(origin, options, [{
            reject,
            resolve: (session) => {
              try {
                const stream2 = session.request(headers, streamOptions);
                delayAsyncDestroy(stream2);
                resolve(stream2);
              } catch (error) {
                reject(error);
              }
            }
          }]);
        });
      }
      async createConnection(origin, options) {
        return _Agent.connect(origin, options);
      }
      static connect(origin, options) {
        options.ALPNProtocols = ["h2"];
        const port = origin.port || 443;
        const host = origin.hostname;
        if (typeof options.servername === "undefined") {
          options.servername = host;
        }
        const socket = tls.connect(port, host, options);
        if (options.socket) {
          socket._peername = {
            family: void 0,
            address: void 0,
            port
          };
        }
        return socket;
      }
      closeEmptySessions(maxCount = Number.POSITIVE_INFINITY) {
        let closedCount = 0;
        const { sessions } = this;
        for (const key in sessions) {
          const thisSessions = sessions[key];
          for (let index = 0; index < thisSessions.length; index++) {
            const session = thisSessions[index];
            if (session[kCurrentStreamCount] === 0) {
              closedCount++;
              session.close();
              if (closedCount >= maxCount) {
                return closedCount;
              }
            }
          }
        }
        return closedCount;
      }
      destroy(reason) {
        const { sessions, queue } = this;
        for (const key in sessions) {
          const thisSessions = sessions[key];
          for (let index = 0; index < thisSessions.length; index++) {
            thisSessions[index].destroy(reason);
          }
        }
        for (const normalizedOptions in queue) {
          const entries2 = queue[normalizedOptions];
          for (const normalizedOrigin in entries2) {
            entries2[normalizedOrigin].destroyed = true;
          }
        }
        this.queue = {};
        this.tlsSessionCache.clear();
      }
      get emptySessionCount() {
        return this._emptySessionCount;
      }
      get pendingSessionCount() {
        return this._sessionCount - this._emptySessionCount;
      }
      get sessionCount() {
        return this._sessionCount;
      }
    };
    Agent.kCurrentStreamCount = kCurrentStreamCount;
    Agent.kGracefullyClosing = kGracefullyClosing;
    module2.exports = {
      Agent,
      globalAgent: new Agent()
    };
  }
});

// node_modules/http2-wrapper/source/incoming-message.js
var require_incoming_message = __commonJS({
  "node_modules/http2-wrapper/source/incoming-message.js"(exports2, module2) {
    "use strict";
    var { Readable } = require("stream");
    var IncomingMessage = class extends Readable {
      constructor(socket, highWaterMark) {
        super({
          emitClose: false,
          autoDestroy: true,
          highWaterMark
        });
        this.statusCode = null;
        this.statusMessage = "";
        this.httpVersion = "2.0";
        this.httpVersionMajor = 2;
        this.httpVersionMinor = 0;
        this.headers = {};
        this.trailers = {};
        this.req = null;
        this.aborted = false;
        this.complete = false;
        this.upgrade = null;
        this.rawHeaders = [];
        this.rawTrailers = [];
        this.socket = socket;
        this._dumped = false;
      }
      get connection() {
        return this.socket;
      }
      set connection(value) {
        this.socket = value;
      }
      _destroy(error, callback) {
        if (!this.readableEnded) {
          this.aborted = true;
        }
        callback();
        this.req._request.destroy(error);
      }
      setTimeout(ms, callback) {
        this.req.setTimeout(ms, callback);
        return this;
      }
      _dump() {
        if (!this._dumped) {
          this._dumped = true;
          this.removeAllListeners("data");
          this.resume();
        }
      }
      _read() {
        if (this.req) {
          this.req._request.resume();
        }
      }
    };
    module2.exports = IncomingMessage;
  }
});

// node_modules/http2-wrapper/source/utils/proxy-events.js
var require_proxy_events = __commonJS({
  "node_modules/http2-wrapper/source/utils/proxy-events.js"(exports2, module2) {
    "use strict";
    module2.exports = (from, to, events) => {
      for (const event of events) {
        from.on(event, (...args) => to.emit(event, ...args));
      }
    };
  }
});

// node_modules/http2-wrapper/source/utils/errors.js
var require_errors = __commonJS({
  "node_modules/http2-wrapper/source/utils/errors.js"(exports2, module2) {
    "use strict";
    var makeError = (Base, key, getMessage) => {
      module2.exports[key] = class NodeError extends Base {
        constructor(...args) {
          super(typeof getMessage === "string" ? getMessage : getMessage(args));
          this.name = `${super.name} [${key}]`;
          this.code = key;
        }
      };
    };
    makeError(TypeError, "ERR_INVALID_ARG_TYPE", (args) => {
      const type = args[0].includes(".") ? "property" : "argument";
      let valid = args[1];
      const isManyTypes = Array.isArray(valid);
      if (isManyTypes) {
        valid = `${valid.slice(0, -1).join(", ")} or ${valid.slice(-1)}`;
      }
      return `The "${args[0]}" ${type} must be ${isManyTypes ? "one of" : "of"} type ${valid}. Received ${typeof args[2]}`;
    });
    makeError(
      TypeError,
      "ERR_INVALID_PROTOCOL",
      (args) => `Protocol "${args[0]}" not supported. Expected "${args[1]}"`
    );
    makeError(
      Error,
      "ERR_HTTP_HEADERS_SENT",
      (args) => `Cannot ${args[0]} headers after they are sent to the client`
    );
    makeError(
      TypeError,
      "ERR_INVALID_HTTP_TOKEN",
      (args) => `${args[0]} must be a valid HTTP token [${args[1]}]`
    );
    makeError(
      TypeError,
      "ERR_HTTP_INVALID_HEADER_VALUE",
      (args) => `Invalid value "${args[0]} for header "${args[1]}"`
    );
    makeError(
      TypeError,
      "ERR_INVALID_CHAR",
      (args) => `Invalid character in ${args[0]} [${args[1]}]`
    );
    makeError(
      Error,
      "ERR_HTTP2_NO_SOCKET_MANIPULATION",
      "HTTP/2 sockets should not be directly manipulated (e.g. read and written)"
    );
  }
});

// node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js
var require_is_request_pseudo_header = __commonJS({
  "node_modules/http2-wrapper/source/utils/is-request-pseudo-header.js"(exports2, module2) {
    "use strict";
    module2.exports = (header) => {
      switch (header) {
        case ":method":
        case ":scheme":
        case ":authority":
        case ":path":
          return true;
        default:
          return false;
      }
    };
  }
});

// node_modules/http2-wrapper/source/utils/validate-header-name.js
var require_validate_header_name = __commonJS({
  "node_modules/http2-wrapper/source/utils/validate-header-name.js"(exports2, module2) {
    "use strict";
    var { ERR_INVALID_HTTP_TOKEN } = require_errors();
    var isRequestPseudoHeader = require_is_request_pseudo_header();
    var isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
    module2.exports = (name) => {
      if (typeof name !== "string" || !isValidHttpToken.test(name) && !isRequestPseudoHeader(name)) {
        throw new ERR_INVALID_HTTP_TOKEN("Header name", name);
      }
    };
  }
});

// node_modules/http2-wrapper/source/utils/validate-header-value.js
var require_validate_header_value = __commonJS({
  "node_modules/http2-wrapper/source/utils/validate-header-value.js"(exports2, module2) {
    "use strict";
    var {
      ERR_HTTP_INVALID_HEADER_VALUE,
      ERR_INVALID_CHAR
    } = require_errors();
    var isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;
    module2.exports = (name, value) => {
      if (typeof value === "undefined") {
        throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
      }
      if (isInvalidHeaderValue.test(value)) {
        throw new ERR_INVALID_CHAR("header content", name);
      }
    };
  }
});

// node_modules/http2-wrapper/source/utils/proxy-socket-handler.js
var require_proxy_socket_handler = __commonJS({
  "node_modules/http2-wrapper/source/utils/proxy-socket-handler.js"(exports2, module2) {
    "use strict";
    var { ERR_HTTP2_NO_SOCKET_MANIPULATION } = require_errors();
    var proxySocketHandler = {
      has(stream2, property) {
        const reference = stream2.session === void 0 ? stream2 : stream2.session.socket;
        return property in stream2 || property in reference;
      },
      get(stream2, property) {
        switch (property) {
          case "on":
          case "once":
          case "end":
          case "emit":
          case "destroy":
            return stream2[property].bind(stream2);
          case "writable":
          case "destroyed":
            return stream2[property];
          case "readable":
            if (stream2.destroyed) {
              return false;
            }
            return stream2.readable;
          case "setTimeout": {
            const { session } = stream2;
            if (session !== void 0) {
              return session.setTimeout.bind(session);
            }
            return stream2.setTimeout.bind(stream2);
          }
          case "write":
          case "read":
          case "pause":
          case "resume":
            throw new ERR_HTTP2_NO_SOCKET_MANIPULATION();
          default: {
            const reference = stream2.session === void 0 ? stream2 : stream2.session.socket;
            const value = reference[property];
            return typeof value === "function" ? value.bind(reference) : value;
          }
        }
      },
      getPrototypeOf(stream2) {
        if (stream2.session !== void 0) {
          return Reflect.getPrototypeOf(stream2.session.socket);
        }
        return Reflect.getPrototypeOf(stream2);
      },
      set(stream2, property, value) {
        switch (property) {
          case "writable":
          case "readable":
          case "destroyed":
          case "on":
          case "once":
          case "end":
          case "emit":
          case "destroy":
            stream2[property] = value;
            return true;
          case "setTimeout": {
            const { session } = stream2;
            if (session === void 0) {
              stream2.setTimeout = value;
            } else {
              session.setTimeout = value;
            }
            return true;
          }
          case "write":
          case "read":
          case "pause":
          case "resume":
            throw new ERR_HTTP2_NO_SOCKET_MANIPULATION();
          default: {
            const reference = stream2.session === void 0 ? stream2 : stream2.session.socket;
            reference[property] = value;
            return true;
          }
        }
      }
    };
    module2.exports = proxySocketHandler;
  }
});

// node_modules/http2-wrapper/source/client-request.js
var require_client_request = __commonJS({
  "node_modules/http2-wrapper/source/client-request.js"(exports2, module2) {
    "use strict";
    var { URL: URL2, urlToHttpOptions } = require("url");
    var http22 = require("http2");
    var { Writable } = require("stream");
    var { Agent, globalAgent } = require_agent();
    var IncomingMessage = require_incoming_message();
    var proxyEvents2 = require_proxy_events();
    var {
      ERR_INVALID_ARG_TYPE,
      ERR_INVALID_PROTOCOL,
      ERR_HTTP_HEADERS_SENT
    } = require_errors();
    var validateHeaderName = require_validate_header_name();
    var validateHeaderValue = require_validate_header_value();
    var proxySocketHandler = require_proxy_socket_handler();
    var {
      HTTP2_HEADER_STATUS,
      HTTP2_HEADER_METHOD,
      HTTP2_HEADER_PATH,
      HTTP2_HEADER_AUTHORITY,
      HTTP2_METHOD_CONNECT
    } = http22.constants;
    var kHeaders = Symbol("headers");
    var kOrigin = Symbol("origin");
    var kSession = Symbol("session");
    var kOptions = Symbol("options");
    var kFlushedHeaders = Symbol("flushedHeaders");
    var kJobs = Symbol("jobs");
    var kPendingAgentPromise = Symbol("pendingAgentPromise");
    var ClientRequest = class extends Writable {
      constructor(input, options, callback) {
        super({
          autoDestroy: false,
          emitClose: false
        });
        if (typeof input === "string") {
          input = urlToHttpOptions(new URL2(input));
        } else if (input instanceof URL2) {
          input = urlToHttpOptions(input);
        } else {
          input = { ...input };
        }
        if (typeof options === "function" || options === void 0) {
          callback = options;
          options = input;
        } else {
          options = Object.assign(input, options);
        }
        if (options.h2session) {
          this[kSession] = options.h2session;
          if (this[kSession].destroyed) {
            throw new Error("The session has been closed already");
          }
          this.protocol = this[kSession].socket.encrypted ? "https:" : "http:";
        } else if (options.agent === false) {
          this.agent = new Agent({ maxEmptySessions: 0 });
        } else if (typeof options.agent === "undefined" || options.agent === null) {
          this.agent = globalAgent;
        } else if (typeof options.agent.request === "function") {
          this.agent = options.agent;
        } else {
          throw new ERR_INVALID_ARG_TYPE("options.agent", ["http2wrapper.Agent-like Object", "undefined", "false"], options.agent);
        }
        if (this.agent) {
          this.protocol = this.agent.protocol;
        }
        if (options.protocol && options.protocol !== this.protocol) {
          throw new ERR_INVALID_PROTOCOL(options.protocol, this.protocol);
        }
        if (!options.port) {
          options.port = options.defaultPort || this.agent && this.agent.defaultPort || 443;
        }
        options.host = options.hostname || options.host || "localhost";
        delete options.hostname;
        const { timeout } = options;
        options.timeout = void 0;
        this[kHeaders] = /* @__PURE__ */ Object.create(null);
        this[kJobs] = [];
        this[kPendingAgentPromise] = void 0;
        this.socket = null;
        this.connection = null;
        this.method = options.method || "GET";
        if (!(this.method === "CONNECT" && (options.path === "/" || options.path === void 0))) {
          this.path = options.path;
        }
        this.res = null;
        this.aborted = false;
        this.reusedSocket = false;
        const { headers } = options;
        if (headers) {
          for (const header in headers) {
            this.setHeader(header, headers[header]);
          }
        }
        if (options.auth && !("authorization" in this[kHeaders])) {
          this[kHeaders].authorization = "Basic " + Buffer.from(options.auth).toString("base64");
        }
        options.session = options.tlsSession;
        options.path = options.socketPath;
        this[kOptions] = options;
        this[kOrigin] = new URL2(`${this.protocol}//${options.servername || options.host}:${options.port}`);
        const reuseSocket = options._reuseSocket;
        if (reuseSocket) {
          options.createConnection = (...args) => {
            if (reuseSocket.destroyed) {
              return this.agent.createConnection(...args);
            }
            return reuseSocket;
          };
          this.agent.getSession(this[kOrigin], this[kOptions]).catch(() => {
          });
        }
        if (timeout) {
          this.setTimeout(timeout);
        }
        if (callback) {
          this.once("response", callback);
        }
        this[kFlushedHeaders] = false;
      }
      get method() {
        return this[kHeaders][HTTP2_HEADER_METHOD];
      }
      set method(value) {
        if (value) {
          this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
        }
      }
      get path() {
        const header = this.method === "CONNECT" ? HTTP2_HEADER_AUTHORITY : HTTP2_HEADER_PATH;
        return this[kHeaders][header];
      }
      set path(value) {
        if (value) {
          const header = this.method === "CONNECT" ? HTTP2_HEADER_AUTHORITY : HTTP2_HEADER_PATH;
          this[kHeaders][header] = value;
        }
      }
      get host() {
        return this[kOrigin].hostname;
      }
      set host(_value) {
      }
      get _mustNotHaveABody() {
        return this.method === "GET" || this.method === "HEAD" || this.method === "DELETE";
      }
      _write(chunk, encoding, callback) {
        if (this._mustNotHaveABody) {
          callback(new Error("The GET, HEAD and DELETE methods must NOT have a body"));
          return;
        }
        this.flushHeaders();
        const callWrite = () => this._request.write(chunk, encoding, callback);
        if (this._request) {
          callWrite();
        } else {
          this[kJobs].push(callWrite);
        }
      }
      _final(callback) {
        this.flushHeaders();
        const callEnd = () => {
          if (this._mustNotHaveABody || this.method === "CONNECT") {
            callback();
            return;
          }
          this._request.end(callback);
        };
        if (this._request) {
          callEnd();
        } else {
          this[kJobs].push(callEnd);
        }
      }
      abort() {
        if (this.res && this.res.complete) {
          return;
        }
        if (!this.aborted) {
          process.nextTick(() => this.emit("abort"));
        }
        this.aborted = true;
        this.destroy();
      }
      async _destroy(error, callback) {
        if (this.res) {
          this.res._dump();
        }
        if (this._request) {
          this._request.destroy();
        } else {
          process.nextTick(() => {
            this.emit("close");
          });
        }
        try {
          await this[kPendingAgentPromise];
        } catch (internalError) {
          if (this.aborted) {
            error = internalError;
          }
        }
        callback(error);
      }
      async flushHeaders() {
        if (this[kFlushedHeaders] || this.destroyed) {
          return;
        }
        this[kFlushedHeaders] = true;
        const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;
        const onStream = (stream2) => {
          this._request = stream2;
          if (this.destroyed) {
            stream2.destroy();
            return;
          }
          if (!isConnectMethod) {
            proxyEvents2(stream2, this, ["timeout", "continue"]);
          }
          stream2.once("error", (error) => {
            this.destroy(error);
          });
          stream2.once("aborted", () => {
            const { res } = this;
            if (res) {
              res.aborted = true;
              res.emit("aborted");
              res.destroy();
            } else {
              this.destroy(new Error("The server aborted the HTTP/2 stream"));
            }
          });
          const onResponse = (headers, flags, rawHeaders) => {
            const response = new IncomingMessage(this.socket, stream2.readableHighWaterMark);
            this.res = response;
            response.url = `${this[kOrigin].origin}${this.path}`;
            response.req = this;
            response.statusCode = headers[HTTP2_HEADER_STATUS];
            response.headers = headers;
            response.rawHeaders = rawHeaders;
            response.once("end", () => {
              response.complete = true;
              response.socket = null;
              response.connection = null;
            });
            if (isConnectMethod) {
              response.upgrade = true;
              if (this.emit("connect", response, stream2, Buffer.alloc(0))) {
                this.emit("close");
              } else {
                stream2.destroy();
              }
            } else {
              stream2.on("data", (chunk) => {
                if (!response._dumped && !response.push(chunk)) {
                  stream2.pause();
                }
              });
              stream2.once("end", () => {
                if (!this.aborted) {
                  response.push(null);
                }
              });
              if (!this.emit("response", response)) {
                response._dump();
              }
            }
          };
          stream2.once("response", onResponse);
          stream2.once("headers", (headers) => this.emit("information", { statusCode: headers[HTTP2_HEADER_STATUS] }));
          stream2.once("trailers", (trailers, flags, rawTrailers) => {
            const { res } = this;
            if (res === null) {
              onResponse(trailers, flags, rawTrailers);
              return;
            }
            res.trailers = trailers;
            res.rawTrailers = rawTrailers;
          });
          stream2.once("close", () => {
            const { aborted, res } = this;
            if (res) {
              if (aborted) {
                res.aborted = true;
                res.emit("aborted");
                res.destroy();
              }
              const finish = () => {
                res.emit("close");
                this.destroy();
                this.emit("close");
              };
              if (res.readable) {
                res.once("end", finish);
              } else {
                finish();
              }
              return;
            }
            if (!this.destroyed) {
              this.destroy(new Error("The HTTP/2 stream has been early terminated"));
              this.emit("close");
              return;
            }
            this.destroy();
            this.emit("close");
          });
          this.socket = new Proxy(stream2, proxySocketHandler);
          for (const job of this[kJobs]) {
            job();
          }
          this[kJobs].length = 0;
          this.emit("socket", this.socket);
        };
        if (!(HTTP2_HEADER_AUTHORITY in this[kHeaders]) && !isConnectMethod) {
          this[kHeaders][HTTP2_HEADER_AUTHORITY] = this[kOrigin].host;
        }
        if (this[kSession]) {
          try {
            onStream(this[kSession].request(this[kHeaders]));
          } catch (error) {
            this.destroy(error);
          }
        } else {
          this.reusedSocket = true;
          try {
            const promise = this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]);
            this[kPendingAgentPromise] = promise;
            onStream(await promise);
            this[kPendingAgentPromise] = false;
          } catch (error) {
            this[kPendingAgentPromise] = false;
            this.destroy(error);
          }
        }
      }
      get connection() {
        return this.socket;
      }
      set connection(value) {
        this.socket = value;
      }
      getHeaderNames() {
        return Object.keys(this[kHeaders]);
      }
      hasHeader(name) {
        if (typeof name !== "string") {
          throw new ERR_INVALID_ARG_TYPE("name", "string", name);
        }
        return Boolean(this[kHeaders][name.toLowerCase()]);
      }
      getHeader(name) {
        if (typeof name !== "string") {
          throw new ERR_INVALID_ARG_TYPE("name", "string", name);
        }
        return this[kHeaders][name.toLowerCase()];
      }
      get headersSent() {
        return this[kFlushedHeaders];
      }
      removeHeader(name) {
        if (typeof name !== "string") {
          throw new ERR_INVALID_ARG_TYPE("name", "string", name);
        }
        if (this.headersSent) {
          throw new ERR_HTTP_HEADERS_SENT("remove");
        }
        delete this[kHeaders][name.toLowerCase()];
      }
      setHeader(name, value) {
        if (this.headersSent) {
          throw new ERR_HTTP_HEADERS_SENT("set");
        }
        validateHeaderName(name);
        validateHeaderValue(name, value);
        const lowercased = name.toLowerCase();
        if (lowercased === "connection") {
          if (value.toLowerCase() === "keep-alive") {
            return;
          }
          throw new Error(`Invalid 'connection' header: ${value}`);
        }
        if (lowercased === "host" && this.method === "CONNECT") {
          this[kHeaders][HTTP2_HEADER_AUTHORITY] = value;
        } else {
          this[kHeaders][lowercased] = value;
        }
      }
      setNoDelay() {
      }
      setSocketKeepAlive() {
      }
      setTimeout(ms, callback) {
        const applyTimeout = () => this._request.setTimeout(ms, callback);
        if (this._request) {
          applyTimeout();
        } else {
          this[kJobs].push(applyTimeout);
        }
        return this;
      }
      get maxHeadersCount() {
        if (!this.destroyed && this._request) {
          return this._request.session.localSettings.maxHeaderListSize;
        }
        return void 0;
      }
      set maxHeadersCount(_value) {
      }
    };
    module2.exports = ClientRequest;
  }
});

// node_modules/resolve-alpn/index.js
var require_resolve_alpn = __commonJS({
  "node_modules/resolve-alpn/index.js"(exports2, module2) {
    "use strict";
    var tls = require("tls");
    module2.exports = (options = {}, connect2 = tls.connect) => new Promise((resolve, reject) => {
      let timeout = false;
      let socket;
      const callback = async () => {
        await socketPromise;
        socket.off("timeout", onTimeout);
        socket.off("error", reject);
        if (options.resolveSocket) {
          resolve({ alpnProtocol: socket.alpnProtocol, socket, timeout });
          if (timeout) {
            await Promise.resolve();
            socket.emit("timeout");
          }
        } else {
          socket.destroy();
          resolve({ alpnProtocol: socket.alpnProtocol, timeout });
        }
      };
      const onTimeout = async () => {
        timeout = true;
        callback();
      };
      const socketPromise = (async () => {
        try {
          socket = await connect2(options, callback);
          socket.on("error", reject);
          socket.once("timeout", onTimeout);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
});

// node_modules/http2-wrapper/source/utils/calculate-server-name.js
var require_calculate_server_name = __commonJS({
  "node_modules/http2-wrapper/source/utils/calculate-server-name.js"(exports2, module2) {
    "use strict";
    var { isIP: isIP2 } = require("net");
    var assert2 = require("assert");
    var getHost = (host) => {
      if (host[0] === "[") {
        const idx2 = host.indexOf("]");
        assert2(idx2 !== -1);
        return host.slice(1, idx2);
      }
      const idx = host.indexOf(":");
      if (idx === -1) {
        return host;
      }
      return host.slice(0, idx);
    };
    module2.exports = (host) => {
      const servername = getHost(host);
      if (isIP2(servername)) {
        return "";
      }
      return servername;
    };
  }
});

// node_modules/http2-wrapper/source/auto.js
var require_auto = __commonJS({
  "node_modules/http2-wrapper/source/auto.js"(exports2, module2) {
    "use strict";
    var { URL: URL2, urlToHttpOptions } = require("url");
    var http3 = require("http");
    var https2 = require("https");
    var resolveALPN = require_resolve_alpn();
    var QuickLRU = require_quick_lru();
    var { Agent, globalAgent } = require_agent();
    var Http2ClientRequest = require_client_request();
    var calculateServerName = require_calculate_server_name();
    var delayAsyncDestroy = require_delay_async_destroy();
    var cache = new QuickLRU({ maxSize: 100 });
    var queue = /* @__PURE__ */ new Map();
    var installSocket = (agent, socket, options) => {
      socket._httpMessage = { shouldKeepAlive: true };
      const onFree = () => {
        agent.emit("free", socket, options);
      };
      socket.on("free", onFree);
      const onClose = () => {
        agent.removeSocket(socket, options);
      };
      socket.on("close", onClose);
      const onTimeout = () => {
        const { freeSockets } = agent;
        for (const sockets of Object.values(freeSockets)) {
          if (sockets.includes(socket)) {
            socket.destroy();
            return;
          }
        }
      };
      socket.on("timeout", onTimeout);
      const onRemove = () => {
        agent.removeSocket(socket, options);
        socket.off("close", onClose);
        socket.off("free", onFree);
        socket.off("timeout", onTimeout);
        socket.off("agentRemove", onRemove);
      };
      socket.on("agentRemove", onRemove);
      agent.emit("free", socket, options);
    };
    var createResolveProtocol = (cache2, queue2 = /* @__PURE__ */ new Map(), connect2 = void 0) => {
      return async (options) => {
        const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;
        if (!cache2.has(name)) {
          if (queue2.has(name)) {
            const result = await queue2.get(name);
            return { alpnProtocol: result.alpnProtocol };
          }
          const { path } = options;
          options.path = options.socketPath;
          const resultPromise = resolveALPN(options, connect2);
          queue2.set(name, resultPromise);
          try {
            const result = await resultPromise;
            cache2.set(name, result.alpnProtocol);
            queue2.delete(name);
            options.path = path;
            return result;
          } catch (error) {
            queue2.delete(name);
            options.path = path;
            throw error;
          }
        }
        return { alpnProtocol: cache2.get(name) };
      };
    };
    var defaultResolveProtocol = createResolveProtocol(cache, queue);
    module2.exports = async (input, options, callback) => {
      if (typeof input === "string") {
        input = urlToHttpOptions(new URL2(input));
      } else if (input instanceof URL2) {
        input = urlToHttpOptions(input);
      } else {
        input = { ...input };
      }
      if (typeof options === "function" || options === void 0) {
        callback = options;
        options = input;
      } else {
        options = Object.assign(input, options);
      }
      options.ALPNProtocols = options.ALPNProtocols || ["h2", "http/1.1"];
      if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
        throw new Error("The `ALPNProtocols` option must be an Array with at least one entry");
      }
      options.protocol = options.protocol || "https:";
      const isHttps = options.protocol === "https:";
      options.host = options.hostname || options.host || "localhost";
      options.session = options.tlsSession;
      options.servername = options.servername || calculateServerName(options.headers && options.headers.host || options.host);
      options.port = options.port || (isHttps ? 443 : 80);
      options._defaultAgent = isHttps ? https2.globalAgent : http3.globalAgent;
      const resolveProtocol = options.resolveProtocol || defaultResolveProtocol;
      let { agent } = options;
      if (agent !== void 0 && agent !== false && agent.constructor.name !== "Object") {
        throw new Error("The `options.agent` can be only an object `http`, `https` or `http2` properties");
      }
      if (isHttps) {
        options.resolveSocket = true;
        let { socket, alpnProtocol, timeout } = await resolveProtocol(options);
        if (timeout) {
          if (socket) {
            socket.destroy();
          }
          const error = new Error(`Timed out resolving ALPN: ${options.timeout} ms`);
          error.code = "ETIMEDOUT";
          error.ms = options.timeout;
          throw error;
        }
        if (socket && options.createConnection) {
          socket.destroy();
          socket = void 0;
        }
        delete options.resolveSocket;
        const isHttp2 = alpnProtocol === "h2";
        if (agent) {
          agent = isHttp2 ? agent.http2 : agent.https;
          options.agent = agent;
        }
        if (agent === void 0) {
          agent = isHttp2 ? globalAgent : https2.globalAgent;
        }
        if (socket) {
          if (agent === false) {
            socket.destroy();
          } else {
            const defaultCreateConnection = (isHttp2 ? Agent : https2.Agent).prototype.createConnection;
            if (agent.createConnection === defaultCreateConnection) {
              if (isHttp2) {
                options._reuseSocket = socket;
              } else {
                installSocket(agent, socket, options);
              }
            } else {
              socket.destroy();
            }
          }
        }
        if (isHttp2) {
          return delayAsyncDestroy(new Http2ClientRequest(options, callback));
        }
      } else if (agent) {
        options.agent = agent.http;
      }
      return delayAsyncDestroy(http3.request(options, callback));
    };
    module2.exports.protocolCache = cache;
    module2.exports.resolveProtocol = defaultResolveProtocol;
    module2.exports.createResolveProtocol = createResolveProtocol;
  }
});

// node_modules/http2-wrapper/source/utils/js-stream-socket.js
var require_js_stream_socket = __commonJS({
  "node_modules/http2-wrapper/source/utils/js-stream-socket.js"(exports2, module2) {
    "use strict";
    var stream2 = require("stream");
    var tls = require("tls");
    var JSStreamSocket = new tls.TLSSocket(new stream2.PassThrough())._handle._parentWrap.constructor;
    module2.exports = JSStreamSocket;
  }
});

// node_modules/http2-wrapper/source/proxies/unexpected-status-code-error.js
var require_unexpected_status_code_error = __commonJS({
  "node_modules/http2-wrapper/source/proxies/unexpected-status-code-error.js"(exports2, module2) {
    "use strict";
    var UnexpectedStatusCodeError = class extends Error {
      constructor(statusCode, statusMessage = "") {
        super(`The proxy server rejected the request with status code ${statusCode} (${statusMessage || "empty status message"})`);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
      }
    };
    module2.exports = UnexpectedStatusCodeError;
  }
});

// node_modules/http2-wrapper/source/utils/check-type.js
var require_check_type = __commonJS({
  "node_modules/http2-wrapper/source/utils/check-type.js"(exports2, module2) {
    "use strict";
    var checkType = (name, value, types2) => {
      const valid = types2.some((type) => {
        const typeofType = typeof type;
        if (typeofType === "string") {
          return typeof value === type;
        }
        return value instanceof type;
      });
      if (!valid) {
        const names = types2.map((type) => typeof type === "string" ? type : type.name);
        throw new TypeError(`Expected '${name}' to be a type of ${names.join(" or ")}, got ${typeof value}`);
      }
    };
    module2.exports = checkType;
  }
});

// node_modules/http2-wrapper/source/proxies/initialize.js
var require_initialize = __commonJS({
  "node_modules/http2-wrapper/source/proxies/initialize.js"(exports2, module2) {
    "use strict";
    var { URL: URL2 } = require("url");
    var checkType = require_check_type();
    module2.exports = (self, proxyOptions) => {
      checkType("proxyOptions", proxyOptions, ["object"]);
      checkType("proxyOptions.headers", proxyOptions.headers, ["object", "undefined"]);
      checkType("proxyOptions.raw", proxyOptions.raw, ["boolean", "undefined"]);
      checkType("proxyOptions.url", proxyOptions.url, [URL2, "string"]);
      const url = new URL2(proxyOptions.url);
      self.proxyOptions = {
        raw: true,
        ...proxyOptions,
        headers: { ...proxyOptions.headers },
        url
      };
    };
  }
});

// node_modules/http2-wrapper/source/proxies/get-auth-headers.js
var require_get_auth_headers = __commonJS({
  "node_modules/http2-wrapper/source/proxies/get-auth-headers.js"(exports2, module2) {
    "use strict";
    module2.exports = (self) => {
      const { username, password } = self.proxyOptions.url;
      if (username || password) {
        const data = `${username}:${password}`;
        const authorization = `Basic ${Buffer.from(data).toString("base64")}`;
        return {
          "proxy-authorization": authorization,
          authorization
        };
      }
      return {};
    };
  }
});

// node_modules/http2-wrapper/source/proxies/h1-over-h2.js
var require_h1_over_h2 = __commonJS({
  "node_modules/http2-wrapper/source/proxies/h1-over-h2.js"(exports2, module2) {
    "use strict";
    var tls = require("tls");
    var http3 = require("http");
    var https2 = require("https");
    var JSStreamSocket = require_js_stream_socket();
    var { globalAgent } = require_agent();
    var UnexpectedStatusCodeError = require_unexpected_status_code_error();
    var initialize = require_initialize();
    var getAuthorizationHeaders = require_get_auth_headers();
    var createConnection = (self, options, callback) => {
      (async () => {
        try {
          const { proxyOptions } = self;
          const { url, headers, raw } = proxyOptions;
          const stream2 = await globalAgent.request(url, proxyOptions, {
            ...getAuthorizationHeaders(self),
            ...headers,
            ":method": "CONNECT",
            ":authority": `${options.host}:${options.port}`
          });
          stream2.once("error", callback);
          stream2.once("response", (headers2) => {
            const statusCode = headers2[":status"];
            if (statusCode !== 200) {
              callback(new UnexpectedStatusCodeError(statusCode, ""));
              return;
            }
            const encrypted = self instanceof https2.Agent;
            if (raw && encrypted) {
              options.socket = stream2;
              const secureStream = tls.connect(options);
              secureStream.once("close", () => {
                stream2.destroy();
              });
              callback(null, secureStream);
              return;
            }
            const socket = new JSStreamSocket(stream2);
            socket.encrypted = false;
            socket._handle.getpeername = (out) => {
              out.family = void 0;
              out.address = void 0;
              out.port = void 0;
            };
            callback(null, socket);
          });
        } catch (error) {
          callback(error);
        }
      })();
    };
    var HttpOverHttp2 = class extends http3.Agent {
      constructor(options) {
        super(options);
        initialize(this, options.proxyOptions);
      }
      createConnection(options, callback) {
        createConnection(this, options, callback);
      }
    };
    var HttpsOverHttp2 = class extends https2.Agent {
      constructor(options) {
        super(options);
        initialize(this, options.proxyOptions);
      }
      createConnection(options, callback) {
        createConnection(this, options, callback);
      }
    };
    module2.exports = {
      HttpOverHttp2,
      HttpsOverHttp2
    };
  }
});

// node_modules/http2-wrapper/source/proxies/h2-over-hx.js
var require_h2_over_hx = __commonJS({
  "node_modules/http2-wrapper/source/proxies/h2-over-hx.js"(exports2, module2) {
    "use strict";
    var { Agent } = require_agent();
    var JSStreamSocket = require_js_stream_socket();
    var UnexpectedStatusCodeError = require_unexpected_status_code_error();
    var initialize = require_initialize();
    var Http2OverHttpX = class extends Agent {
      constructor(options) {
        super(options);
        initialize(this, options.proxyOptions);
      }
      async createConnection(origin, options) {
        const authority = `${origin.hostname}:${origin.port || 443}`;
        const [stream2, statusCode, statusMessage] = await this._getProxyStream(authority);
        if (statusCode !== 200) {
          throw new UnexpectedStatusCodeError(statusCode, statusMessage);
        }
        if (this.proxyOptions.raw) {
          options.socket = stream2;
        } else {
          const socket = new JSStreamSocket(stream2);
          socket.encrypted = false;
          socket._handle.getpeername = (out) => {
            out.family = void 0;
            out.address = void 0;
            out.port = void 0;
          };
          return socket;
        }
        return super.createConnection(origin, options);
      }
    };
    module2.exports = Http2OverHttpX;
  }
});

// node_modules/http2-wrapper/source/proxies/h2-over-h2.js
var require_h2_over_h2 = __commonJS({
  "node_modules/http2-wrapper/source/proxies/h2-over-h2.js"(exports2, module2) {
    "use strict";
    var { globalAgent } = require_agent();
    var Http2OverHttpX = require_h2_over_hx();
    var getAuthorizationHeaders = require_get_auth_headers();
    var getStatusCode = (stream2) => new Promise((resolve, reject) => {
      stream2.once("error", reject);
      stream2.once("response", (headers) => {
        stream2.off("error", reject);
        resolve(headers[":status"]);
      });
    });
    var Http2OverHttp2 = class extends Http2OverHttpX {
      async _getProxyStream(authority) {
        const { proxyOptions } = this;
        const headers = {
          ...getAuthorizationHeaders(this),
          ...proxyOptions.headers,
          ":method": "CONNECT",
          ":authority": authority
        };
        const stream2 = await globalAgent.request(proxyOptions.url, proxyOptions, headers);
        const statusCode = await getStatusCode(stream2);
        return [stream2, statusCode, ""];
      }
    };
    module2.exports = Http2OverHttp2;
  }
});

// node_modules/http2-wrapper/source/proxies/h2-over-h1.js
var require_h2_over_h1 = __commonJS({
  "node_modules/http2-wrapper/source/proxies/h2-over-h1.js"(exports2, module2) {
    "use strict";
    var http3 = require("http");
    var https2 = require("https");
    var Http2OverHttpX = require_h2_over_hx();
    var getAuthorizationHeaders = require_get_auth_headers();
    var getStream3 = (request) => new Promise((resolve, reject) => {
      const onConnect = (response, socket, head) => {
        socket.unshift(head);
        request.off("error", reject);
        resolve([socket, response.statusCode, response.statusMessage]);
      };
      request.once("error", reject);
      request.once("connect", onConnect);
    });
    var Http2OverHttp = class extends Http2OverHttpX {
      async _getProxyStream(authority) {
        const { proxyOptions } = this;
        const { url, headers } = this.proxyOptions;
        const network = url.protocol === "https:" ? https2 : http3;
        const request = network.request({
          ...proxyOptions,
          hostname: url.hostname,
          port: url.port,
          path: authority,
          headers: {
            ...getAuthorizationHeaders(this),
            ...headers,
            host: authority
          },
          method: "CONNECT"
        }).end();
        return getStream3(request);
      }
    };
    module2.exports = {
      Http2OverHttp,
      Http2OverHttps: Http2OverHttp
    };
  }
});

// node_modules/http2-wrapper/source/index.js
var require_source2 = __commonJS({
  "node_modules/http2-wrapper/source/index.js"(exports2, module2) {
    "use strict";
    var http22 = require("http2");
    var {
      Agent,
      globalAgent
    } = require_agent();
    var ClientRequest = require_client_request();
    var IncomingMessage = require_incoming_message();
    var auto = require_auto();
    var {
      HttpOverHttp2,
      HttpsOverHttp2
    } = require_h1_over_h2();
    var Http2OverHttp2 = require_h2_over_h2();
    var {
      Http2OverHttp,
      Http2OverHttps
    } = require_h2_over_h1();
    var validateHeaderName = require_validate_header_name();
    var validateHeaderValue = require_validate_header_value();
    var request = (url, options, callback) => new ClientRequest(url, options, callback);
    var get = (url, options, callback) => {
      const req = new ClientRequest(url, options, callback);
      req.end();
      return req;
    };
    module2.exports = {
      ...http22,
      ClientRequest,
      IncomingMessage,
      Agent,
      globalAgent,
      request,
      get,
      auto,
      proxies: {
        HttpOverHttp2,
        HttpsOverHttp2,
        Http2OverHttp2,
        Http2OverHttp,
        Http2OverHttps
      },
      validateHeaderName,
      validateHeaderValue
    };
  }
});

// lib/index.js
var lib_exports = {};
__export(lib_exports, {
  GameDig: () => GameDig,
  games: () => games,
  protocols: () => protocols_exports
});
module.exports = __toCommonJS(lib_exports);

// lib/games.js
var games = {
  abioticfactor: {
    name: "Abiotic Factor",
    release_year: 2024,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  actionsource: {
    name: "Action: Source",
    release_year: 2019,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "as"
    }
  },
  ahl: {
    name: "Action Half-Life",
    release_year: 2009,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  aoc: {
    name: "Age of Chivalry",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "ageofchivalry"
    }
  },
  aoe2: {
    name: "Age of Empires 2",
    release_year: 2009,
    options: {
      port_query: 27224,
      protocol: "ase"
    }
  },
  alienarena: {
    name: "Alien Arena",
    release_year: 2004,
    options: {
      port_query: 27910,
      protocol: "quake2"
    }
  },
  alienswarm: {
    name: "Alien Swarm",
    release_year: 2004,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  ase: {
    name: "Ark: Survival Evolved",
    release_year: 2017,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "arkse"
    }
  },
  asa: {
    name: "Ark: Survival Ascended",
    release_year: 2023,
    options: {
      port: 7777,
      protocol: "asa"
    }
  },
  assettocorsa: {
    name: "Assetto Corsa",
    release_year: 2014,
    options: {
      port: 9610,
      protocol: "assettocorsa"
    }
  },
  atlas: {
    name: "Atlas",
    release_year: 2018,
    options: {
      port: 5761,
      port_query_offset: 51800,
      protocol: "valve"
    }
  },
  avorion: {
    name: "Avorion",
    release_year: 2020,
    options: {
      port: 27e3,
      port_query_offset: 20,
      protocol: "valve"
    }
  },
  avp2: {
    name: "Aliens versus Predator 2",
    release_year: 2001,
    options: {
      port: 27888,
      protocol: "gamespy1"
    }
  },
  avp2010: {
    name: "Aliens vs. Predator 2010",
    release_year: 2010,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  americasarmy: {
    name: "America's Army",
    release_year: 2002,
    options: {
      port: 1716,
      port_query_offset: 1,
      protocol: "gamespy2"
    }
  },
  americasarmy2: {
    name: "America's Army 2",
    release_year: 2003,
    options: {
      port: 1716,
      port_query_offset: 1,
      protocol: "gamespy2"
    }
  },
  americasarmy3: {
    name: "America's Army 3",
    release_year: 2009,
    options: {
      port: 8777,
      port_query: 27020,
      protocol: "valve"
    }
  },
  aapg: {
    name: "America's Army: Proving Grounds",
    release_year: 2015,
    options: {
      port: 8777,
      port_query: 27020,
      protocol: "valve"
    },
    extra: {
      old_id: "americasarmypg"
    }
  },
  asr08: {
    name: "Arca Sim Racing '08",
    release_year: 2008,
    options: {
      port: 34397,
      port_query_offset: -100,
      protocol: "rfactor"
    },
    extra: {
      old_id: "arcasimracing"
    }
  },
  aaa: {
    name: "ARMA: Armed Assault",
    release_year: 2006,
    options: {
      port: 2302,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "arma"
    }
  },
  arma2: {
    name: "ARMA 2",
    release_year: 2009,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  a2oa: {
    name: "ARMA 2: Operation Arrowhead",
    release_year: 2010,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "arma2oa"
    }
  },
  acwa: {
    name: "ARMA: Cold War Assault",
    release_year: 2011,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "armacwa"
    }
  },
  armaresistance: {
    name: "ARMA: Resistance",
    release_year: 2011,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "armar"
    }
  },
  arma3: {
    name: "ARMA 3",
    release_year: 2013,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  armareforger: {
    name: "ARMA: Reforger",
    release_year: 2022,
    options: {
      port: 2001,
      port_query: 17777,
      protocol: "valve"
    },
    extra: {
      old_id: "armare"
    }
  },
  armagetronadvanced: {
    name: "Armagetron Advanced",
    release_year: 2001,
    options: {
      port: 4534,
      protocol: "armagetron"
    },
    extra: {
      old_id: "armagetron"
    }
  },
  baldursgate: {
    name: "Baldur's Gate",
    release_year: 1998,
    options: {
      port: 6073,
      port_query: 1470,
      protocol: "gamespy1"
    }
  },
  ballisticoverkill: {
    name: "Ballistic Overkill",
    release_year: 2017,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  barotrauma: {
    name: "Barotrauma",
    release_year: 2019,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  battalion1944: {
    name: "Battalion 1944",
    release_year: 2018,
    options: {
      port: 7777,
      port_query_offset: 3,
      protocol: "valve"
    },
    extra: {
      old_id: "bat1944"
    }
  },
  beammp: {
    name: "BeamMP (2021)",
    options: {
      port: 30814,
      protocol: "beammp"
    }
  },
  battlefield1942: {
    name: "Battlefield 1942",
    release_year: 2002,
    options: {
      port: 14567,
      port_query: 23e3,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "bf1942"
    }
  },
  battlefieldvietnam: {
    name: "Battlefield Vietnam",
    release_year: 2004,
    options: {
      port: 15567,
      port_query: 23e3,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "bfv"
    }
  },
  battlefield2: {
    name: "Battlefield 2",
    release_year: 2005,
    options: {
      port: 16567,
      port_query: 29900,
      protocol: "gamespy3"
    },
    extra: {
      old_id: "bf2"
    }
  },
  battlefield2142: {
    name: "Battlefield 2142",
    release_year: 2006,
    options: {
      port: 16567,
      port_query: 29900,
      protocol: "gamespy3"
    },
    extra: {
      old_id: "bf2142"
    }
  },
  bbc2: {
    name: "Battlefield: Bad Company 2",
    release_year: 2010,
    options: {
      port: 19567,
      port_query: 48888,
      protocol: "battlefield"
    },
    extra: {
      old_id: "bfbc2"
    }
  },
  battlefield3: {
    name: "Battlefield 3",
    release_year: 2011,
    options: {
      port: 25200,
      port_query_offset: 22e3,
      protocol: "battlefield"
    },
    extra: {
      old_id: "bf3"
    }
  },
  battlefield4: {
    name: "Battlefield 4",
    release_year: 2013,
    options: {
      port: 25200,
      port_query_offset: 22e3,
      protocol: "battlefield"
    },
    extra: {
      old_id: "bf4"
    }
  },
  battlefieldhardline: {
    name: "Battlefield Hardline",
    release_year: 2015,
    options: {
      port: 25200,
      port_query_offset: 22e3,
      protocol: "battlefield"
    },
    extra: {
      old_id: "bfh"
    }
  },
  blackmesa: {
    name: "Black Mesa",
    release_year: 2020,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  brainbread2: {
    name: "BrainBread 2",
    release_year: 2022,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  brainbread: {
    name: "BrainBread",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  breach: {
    name: "Breach",
    release_year: 2011,
    options: {
      port: 27016,
      protocol: "valve"
    }
  },
  breed: {
    name: "Breed",
    release_year: 2004,
    options: {
      port: 7649,
      protocol: "gamespy2"
    }
  },
  brink: {
    name: "Brink",
    release_year: 2011,
    options: {
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  brokeprotocol: {
    name: "BROKE PROTOCOL",
    release_year: 2024,
    options: {
      protocol: "brokeprotocol"
    },
    extra: {
      doc_notes: "brokeprotocol"
    }
  },
  basedefense: {
    name: "Base Defense",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "bd"
    }
  },
  bladesymphony: {
    name: "Blade Symphony",
    release_year: 2014,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "bs"
    }
  },
  bas: {
    name: "Build and Shoot",
    release_year: 2012,
    options: {
      port: 32887,
      port_query_offset: -1,
      protocol: "buildandshoot"
    },
    extra: {
      old_id: "buildandshoot"
    }
  },
  aosc: {
    name: "Ace of Spades Classic",
    release_year: 2012,
    options: {
      port: 32887,
      port_query_offset: -1,
      protocol: "buildandshoot"
    }
  },
  cod: {
    name: "Call of Duty",
    release_year: 2003,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  coduo: {
    name: "Call of Duty: United Offensive",
    release_year: 2004,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  cod2: {
    name: "Call of Duty 2",
    release_year: 2005,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  cod3: {
    name: "Call of Duty 3",
    release_year: 2006,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  cod4mw: {
    name: "Call of Duty 4: Modern Warfare",
    release_year: 2007,
    options: {
      port: 28960,
      protocol: "quake3"
    },
    extra: {
      old_id: "cod4"
    }
  },
  codbo3: {
    name: "Call of Duty: Black Ops 3",
    release_year: 2015,
    options: {
      port: 27017,
      protocol: "valve"
    }
  },
  codwaw: {
    name: "Call of Duty: World at War",
    release_year: 2008,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  codmw2: {
    name: "Call of Duty: Modern Warfare 2",
    release_year: 2009,
    options: {
      port: 28960,
      protocol: "quake3"
    }
  },
  codmw3: {
    name: "Call of Duty: Modern Warfare 3",
    release_year: 2011,
    options: {
      port_query_offset: 2,
      protocol: "valve"
    }
  },
  coj: {
    name: "Call of Juarez",
    release_year: 2006,
    options: {
      port_query: 26e3,
      protocol: "ase"
    },
    extra: {
      old_id: "callofjuarez"
    }
  },
  chaser: {
    name: "Chaser",
    release_year: 2003,
    options: {
      port: 3e3,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  cmw: {
    name: "Chivalry: Medieval Warfare",
    release_year: 2012,
    options: {
      port: 7777,
      port_query_offset: 2,
      protocol: "valve"
    },
    extra: {
      old_id: "chivalry"
    }
  },
  chrome: {
    name: "Chrome",
    release_year: 2003,
    options: {
      port: 27015,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  codenamecure: {
    name: "Codename CURE",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  codenameeagle: {
    name: "Codename Eagle",
    release_year: 2e3,
    options: {
      port_query: 4711,
      protocol: "gamespy1"
    }
  },
  colonysurvival: {
    name: "Colony Survival",
    release_year: 2017,
    options: {
      port: 27004,
      protocol: "valve"
    }
  },
  c3db: {
    name: "Commandos 3: Destination Berlin",
    release_year: 2003,
    options: {
      port_query: 6500,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "commandos3"
    }
  },
  cacr: {
    name: "Command and Conquer: Renegade",
    release_year: 2002,
    options: {
      port: 4848,
      port_query: 25300,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "cacrenegade"
    }
  },
  conanexiles: {
    name: "Conan Exiles",
    release_year: 2018,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    },
    extra: {
      doc_notes: "conanexiles"
    }
  },
  contagion: {
    name: "Contagion",
    release_year: 2011,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  contractjack: {
    name: "Contract J.A.C.K.",
    release_year: 2003,
    options: {
      port_query: 27888,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "contactjack"
    }
  },
  corekeeper: {
    name: "Core Keeper",
    release_year: 2022,
    options: {
      port: 1234,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  counterstrike15: {
    name: "Counter-Strike 1.5",
    release_year: 2002,
    options: {
      port: 27015,
      protocol: "goldsrc"
    },
    extra: {
      old_id: "cs15"
    }
  },
  counterstrike16: {
    name: "Counter-Strike 1.6",
    release_year: 2003,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "cs16"
    }
  },
  c2d: {
    name: "CS2D",
    release_year: 2004,
    options: {
      port: 36963,
      protocol: "cs2d"
    },
    extra: {
      old_id: "cs2d"
    }
  },
  cscz: {
    name: "Counter-Strike: Condition Zero",
    release_year: 2004,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  css: {
    name: "Counter-Strike: Source",
    release_year: 2004,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  csgo: {
    name: "Counter-Strike: Global Offensive",
    release_year: 2012,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      doc_notes: "csgo"
    }
  },
  counterstrike2: {
    name: "Counter-Strike 2",
    release_year: 2023,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "cs2"
    }
  },
  creativerse: {
    name: "Creativerse",
    release_year: 2017,
    options: {
      port: 26900,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  crce: {
    name: "Cross Racing Championship Extreme",
    release_year: 2005,
    options: {
      port: 12321,
      port_query_offset: 123,
      protocol: "ase"
    },
    extra: {
      old_id: "crossracing"
    }
  },
  crysis: {
    name: "Crysis",
    release_year: 2007,
    options: {
      port: 64087,
      protocol: "gamespy3"
    }
  },
  crysiswars: {
    name: "Crysis Wars",
    release_year: 2008,
    options: {
      port: 64100,
      protocol: "gamespy3"
    }
  },
  crysis2: {
    name: "Crysis 2",
    release_year: 2011,
    options: {
      port: 64e3,
      protocol: "gamespy3"
    }
  },
  dab: {
    name: "Double Action: Boogaloo",
    release_year: 2014,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  daikatana: {
    name: "Daikatana",
    release_year: 2e3,
    options: {
      port: 27982,
      port_query_offset: 10,
      protocol: "quake2"
    }
  },
  dmomam: {
    name: "Dark Messiah of Might and Magic",
    release_year: 2006,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  dhe4445: {
    name: "Darkest Hour: Europe '44-'45",
    release_year: 2008,
    options: {
      port: 7757,
      port_query_offset: 1,
      protocol: "unreal2"
    },
    extra: {
      old_id: "darkesthour"
    }
  },
  dayofdragons: {
    name: "Day of Dragons",
    release_year: 2019,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  dow: {
    name: "Days of War",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "daysofwar"
    }
  },
  dayz: {
    name: "DayZ",
    release_year: 2018,
    options: {
      port: 2302,
      port_query_offset: 24714,
      protocol: "dayz"
    },
    extra: {
      doc_notes: "dayz"
    }
  },
  dayzmod: {
    name: "DayZ Mod",
    release_year: 2013,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  ddpt: {
    name: "Deadly Dozen: Pacific Theater",
    release_year: 2002,
    options: {
      port_query: 25300,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "deadlydozenpt"
    }
  },
  deerhunter2005: {
    name: "Deer Hunter 2005",
    release_year: 2004,
    options: {
      port: 23459,
      port_query: 34567,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "dh2005"
    }
  },
  descent3: {
    name: "Descent 3",
    release_year: 1999,
    options: {
      port: 2092,
      port_query: 20142,
      protocol: "gamespy1"
    }
  },
  deusex: {
    name: "Deus Ex",
    release_year: 2e3,
    options: {
      port: 7791,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  devastation: {
    name: "Devastation",
    release_year: 2003,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "unreal2"
    }
  },
  ddd: {
    name: "Dino D-Day",
    release_year: 2011,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "dinodday"
    }
  },
  dtr2: {
    name: "Dirt Track Racing 2",
    release_year: 2002,
    options: {
      port: 32240,
      port_query_offset: -100,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "dirttrackracing2"
    }
  },
  discord: {
    name: "Discord",
    release_year: 2015,
    options: {
      protocol: "discord"
    },
    extra: {
      doc_notes: "discord"
    }
  },
  deathmatchclassic: {
    name: "Deathmatch Classic",
    release_year: 2001,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "dmc"
    }
  },
  dal: {
    name: "Dark and Light",
    release_year: 2017,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "dnl"
    }
  },
  dnf2001: {
    name: "Duke Nukem Forever 2001",
    release_year: 2022,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  dod: {
    name: "Day of Defeat",
    release_year: 2003,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  dods: {
    name: "Day of Defeat: Source",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  doi: {
    name: "Day of Infamy",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  doom3: {
    name: "Doom 3",
    release_year: 2004,
    options: {
      port: 27666,
      protocol: "doom3"
    }
  },
  dota2: {
    name: "Dota 2",
    release_year: 2013,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  dootf: {
    name: "Drakan: Order of the Flame",
    release_year: 1999,
    options: {
      port: 27045,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "drakan"
    }
  },
  dst: {
    name: "Don't Starve Together",
    release_year: 2016,
    options: {
      port: 10999,
      port_query: 27016,
      protocol: "valve"
    }
  },
  dystopia: {
    name: "Dystopia",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "dys"
    }
  },
  eco: {
    name: "Eco",
    release_year: 2018,
    options: {
      port: 3e3,
      port_query_offset: 1,
      protocol: "eco"
    }
  },
  eldewrito: {
    name: "Halo Online - ElDewrito",
    options: {
      port: 11775,
      protocol: "eldewrito"
    }
  },
  empiresmod: {
    name: "Empires Mod",
    release_year: 2008,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "em"
    }
  },
  egs: {
    name: "Empyrion - Galactic Survival",
    release_year: 2015,
    options: {
      port: 3e4,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "empyrion"
    }
  },
  enshrouded: {
    name: "enshrouded",
    release_year: 2024,
    options: {
      port: 15636,
      port_query: 15637,
      protocol: "valve"
    }
  },
  etqw: {
    name: "Enemy Territory: Quake Wars",
    release_year: 2007,
    options: {
      port: 3074,
      port_query: 27733,
      protocol: "doom3"
    }
  },
  ets2: {
    name: "Euro Truck Simulator 2",
    release_year: 2012,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  exfil: {
    name: "Exfil",
    release_year: 2024,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  fear: {
    name: "F.E.A.R.",
    release_year: 2005,
    options: {
      port_query: 27888,
      protocol: "gamespy2"
    }
  },
  formulaone2002: {
    name: "Formula One 2002",
    release_year: 2002,
    options: {
      port_query: 3297,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "f12002"
    }
  },
  f1c9902: {
    name: "F1 Challenge '99-'02",
    release_year: 2002,
    options: {
      port_query: 34397,
      protocol: "gamespy1"
    }
  },
  factorio: {
    name: "Factorio",
    release_year: 2016,
    options: {
      port_query: 34197,
      protocol: "factorio"
    }
  },
  farcry: {
    name: "Far Cry",
    release_year: 2004,
    options: {
      port: 49001,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  farcry2: {
    name: "Far Cry 2",
    release_year: 2008,
    options: {
      port_query: 14001,
      protocol: "ase"
    }
  },
  farmingsimulator19: {
    name: "Farming Simulator 19",
    release_year: 2018,
    options: {
      port: 8080,
      protocol: "farmingsimulator"
    }
  },
  farmingsimulator22: {
    name: "Farming Simulator 22",
    release_year: 2021,
    options: {
      port: 8080,
      protocol: "farmingsimulator"
    }
  },
  farmingsimulator25: {
    name: "Farming Simulator 25",
    release_year: 2024,
    options: {
      port: 8080,
      protocol: "farmingsimulator"
    }
  },
  fof: {
    name: "Fistful of Frags",
    release_year: 2014,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  foundry: {
    name: "FOUNDRY",
    release_year: 2024,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  fortressforever: {
    name: "Fortress Forever",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  ofcwc: {
    name: "Operation Flashpoint: Cold War Crisis",
    release_year: 2001,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  ofr: {
    name: "Operation Flashpoint: Resistance",
    release_year: 2002,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "flashpointresistance"
    }
  },
  ffow: {
    name: "Frontlines: Fuel of War",
    release_year: 2008,
    options: {
      port: 5476,
      port_query_offset: 2,
      protocol: "ffow"
    }
  },
  gta5f: {
    name: "Grand Theft Auto V - FiveM",
    release_year: 2013,
    options: {
      port: 30120,
      protocol: "fivem"
    },
    extra: {
      old_id: "fivem"
    }
  },
  gta5r: {
    name: "Grand Theft Auto V - RageMP",
    release_year: 2016,
    options: {
      port: 22005,
      protocol: "ragemp"
    },
    extra: {
      doc_notes: "gta5r"
    }
  },
  gta5am: {
    name: "Grand Theft Auto V - alt:V Multiplayer",
    release_year: 2015,
    options: {
      port: 7788,
      protocol: "altvmp"
    },
    extra: {
      doc_notes: "gta5am",
      old_id: "gta5a"
    }
  },
  garrysmod: {
    name: "Garry's Mod",
    release_year: 2004,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  tcgraw: {
    name: "Tom Clancy's Ghost Recon Advanced Warfighter",
    release_year: 2006,
    options: {
      port_query: 15250,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "graw"
    }
  },
  tcgraw2: {
    name: "Tom Clancy's Ghost Recon Advanced Warfighter 2",
    release_year: 2007,
    options: {
      port_query: 16250,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "graw2"
    }
  },
  gck: {
    name: "Giants: Citizen Kabuto",
    release_year: 2e3,
    options: {
      port_query: 8911,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "giantscitizenkabuto"
    }
  },
  globaloperations: {
    name: "Global Operations",
    release_year: 2002,
    options: {
      port_query: 28672,
      protocol: "gamespy1"
    }
  },
  geneshift: {
    name: "Geneshift",
    release_year: 2017,
    options: {
      port: 11235,
      protocol: "geneshift"
    }
  },
  goldeneyesource: {
    name: "GoldenEye: Source",
    release_year: 2010,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "ges"
    }
  },
  gus: {
    name: "Gore: Ultimate Soldier",
    release_year: 2002,
    options: {
      port: 27777,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "gore"
    }
  },
  groundbreach: {
    name: "Ground Breach",
    release_year: 2018,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  gunmanchronicles: {
    name: "Gunman Chronicles",
    release_year: 2e3,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  hld: {
    name: "Half-Life Deathmatch",
    release_year: 1998,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "hldm"
    }
  },
  hlds: {
    name: "Half-Life Deathmatch: Source",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "hldms"
    }
  },
  hlof: {
    name: "Half-Life: Opposing Force",
    release_year: 1999,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "hlopfor"
    }
  },
  hl2d: {
    name: "Half-Life 2: Deathmatch",
    release_year: 2004,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "hl2dm"
    }
  },
  halo: {
    name: "Halo",
    release_year: 2003,
    options: {
      port: 2302,
      protocol: "gamespy2"
    }
  },
  halo2: {
    name: "Halo 2",
    release_year: 2007,
    options: {
      port: 2302,
      protocol: "gamespy2"
    }
  },
  hawakening: {
    name: "Hawakening",
    release_year: 2024,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "hawakening"
    },
    extra: {
      doc_notes: "hawakening"
    }
  },
  heretic2: {
    name: "Heretic II",
    release_year: 1998,
    options: {
      port: 27900,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  hexen2: {
    name: "Hexen II",
    release_year: 1997,
    options: {
      port: 26900,
      port_query_offset: 50,
      protocol: "hexen2"
    }
  },
  thehidden: {
    name: "The Hidden",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "hidden"
    }
  },
  hll: {
    name: "Hell Let Loose",
    release_year: 2019,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  hiddendangerous2: {
    name: "Hidden & Dangerous 2",
    release_year: 2003,
    options: {
      port: 11001,
      port_query_offset: 3,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "had2"
    }
  },
  homefront: {
    name: "Homefront",
    release_year: 2011,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  homeworld2: {
    name: "Homeworld 2",
    release_year: 2003,
    options: {
      port_query: 6500,
      protocol: "gamespy1"
    }
  },
  hurtworld: {
    name: "Hurtworld",
    release_year: 2015,
    options: {
      port: 12871,
      port_query: 12881,
      protocol: "valve"
    }
  },
  i2cs: {
    name: "IGI 2: Covert Strike",
    release_year: 2003,
    options: {
      port_query: 26001,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "igi2"
    }
  },
  i2s: {
    name: "IL-2 Sturmovik",
    release_year: 2001,
    options: {
      port_query: 21e3,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "il2"
    }
  },
  icarus: {
    name: "Icarus",
    release_year: 2021,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  insurgency: {
    name: "Insurgency",
    release_year: 2014,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  imic: {
    name: "Insurgency: Modern Infantry Combat",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "insurgencymic"
    }
  },
  insurgencysandstorm: {
    name: "Insurgency: Sandstorm",
    release_year: 2018,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  ironstorm: {
    name: "Iron Storm",
    release_year: 2002,
    options: {
      port_query: 3505,
      protocol: "gamespy1"
    }
  },
  theisle: {
    name: "The Isle",
    release_year: 2015,
    options: {
      port: 7707,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "isle"
    }
  },
  tie: {
    name: "The Isle Evrima",
    options: {
      port: 7777,
      protocol: "theisleevrima"
    },
    release_year: 2020
  },
  jb0n: {
    name: "James Bond 007: Nightfire",
    release_year: 2002,
    options: {
      port_query: 6550,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "jamesbondnightfire"
    }
  },
  jc2m: {
    name: "Just Cause 2 - Multiplayer",
    release_year: 2010,
    options: {
      port: 7777,
      protocol: "jc2mp"
    },
    extra: {
      old_id: "jc2mp"
    }
  },
  jc3m: {
    name: "Just Cause 3 - Multiplayer",
    release_year: 2017,
    options: {
      port: 4200,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "jc3mp"
    }
  },
  killingfloor: {
    name: "Killing Floor",
    release_year: 2009,
    options: {
      port: 7707,
      port_query_offset: 1,
      protocol: "unreal2"
    }
  },
  killingfloor2: {
    name: "Killing Floor 2",
    release_year: 2016,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  kloc: {
    name: "Kingpin: Life of Crime",
    release_year: 1999,
    options: {
      port: 31510,
      port_query_offset: -10,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "kingpin"
    }
  },
  kpctnc: {
    name: "Kiss: Psycho Circus: The Nightmare Child",
    release_year: 2e3,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "kisspc"
    }
  },
  kspd: {
    name: "Kerbal Space Program - DMP",
    release_year: 2015,
    options: {
      port: 6702,
      port_query_offset: 1,
      protocol: "kspdmp"
    },
    extra: {
      old_id: "kspdmp"
    }
  },
  kreedzclimbing: {
    name: "Kreedz Climbing",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "kzmod"
    }
  },
  l4d: {
    name: "Left 4 Dead",
    release_year: 2008,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "left4dead"
    }
  },
  l4d2: {
    name: "Left 4 Dead 2",
    release_year: 2009,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "left4dead2"
    }
  },
  m2m: {
    name: "Mafia II - Multiplayer",
    release_year: 2010,
    options: {
      port: 27016,
      port_query_offset: 1,
      protocol: "mafia2mp"
    },
    extra: {
      old_id: "m2mp"
    }
  },
  m2o: {
    name: "Mafia II - Online",
    release_year: 2010,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "mafia2online"
    }
  },
  medievalengineers: {
    name: "Medieval Engineers",
    release_year: 2015,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  moe: {
    name: "Myth of Empires",
    release_year: 2024,
    options: {
      port_query: 12888,
      protocol: "valve"
    }
  },
  mohaa: {
    name: "Medal of Honor: Allied Assault",
    release_year: 2002,
    options: {
      port: 12203,
      port_query_offset: 97,
      protocol: "gamespy1"
    }
  },
  mohaas: {
    name: "Medal of Honor: Allied Assault Spearhead",
    release_year: 2002,
    options: {
      port: 12203,
      port_query_offset: 97,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "mohsh"
    }
  },
  mohaab: {
    name: "Medal of Honor: Allied Assault Breakthrough",
    release_year: 2003,
    options: {
      port: 12203,
      port_query_offset: 97,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "mohbt"
    }
  },
  mohpa: {
    name: "Medal of Honor: Pacific Assault",
    release_year: 2004,
    options: {
      port: 13203,
      port_query_offset: 97,
      protocol: "gamespy1"
    }
  },
  moha: {
    name: "Medal of Honor: Airborne",
    release_year: 2007,
    options: {
      port: 12203,
      port_query_offset: 97,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "mohab"
    }
  },
  moh: {
    name: "Medal of Honor",
    release_year: 2010,
    options: {
      port: 7673,
      port_query: 48888,
      protocol: "battlefield"
    },
    extra: {
      old_id: "moh2010"
    }
  },
  mohw: {
    name: "Medal of Honor: Warfighter",
    release_year: 2012,
    options: {
      port: 25200,
      port_query_offset: 22e3,
      protocol: "battlefield"
    },
    extra: {
      old_id: "mohwf"
    }
  },
  minecraft: {
    name: "Minecraft",
    release_year: 2009,
    options: {
      port: 25565,
      protocol: "minecraft"
    },
    extra: {
      doc_notes: "minecraft"
    }
  },
  minetest: {
    name: "Minetest",
    release_year: 2010,
    options: {
      port: 3e4,
      protocol: "minetest"
    }
  },
  mbe: {
    name: "Minecraft: Bedrock Edition",
    release_year: 2011,
    options: {
      port: 19132,
      protocol: "minecraft"
    },
    extra: {
      old_id: "minecraftbe"
    }
  },
  mnc: {
    name: "Monday Night Combat",
    release_year: 2011,
    options: {
      port: 7777,
      port_query: 27016,
      protocol: "valve"
    }
  },
  mordhau: {
    name: "Mordhau",
    release_year: 2019,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  gtavcmta: {
    name: "Grand Theft Auto: Vice City - Multi Theft Auto",
    release_year: 2002,
    options: {
      port: 22003,
      port_query_offset: 123,
      protocol: "ase"
    },
    extra: {
      old_id: "mtavc"
    }
  },
  gtasamta: {
    name: "Grand Theft Auto: San Andreas - Multi Theft Auto",
    release_year: 2004,
    options: {
      port: 22003,
      port_query_offset: 123,
      protocol: "ase"
    },
    extra: {
      old_id: "mtasa"
    }
  },
  mgm: {
    name: "Mumble - GT Murmur",
    release_year: 2005,
    options: {
      port: 64738,
      port_query: 27800,
      protocol: "mumble"
    },
    extra: {
      doc_notes: "mumble"
    }
  },
  mumble: {
    name: "Mumble",
    release_year: 2005,
    options: {
      port: 64738,
      protocol: "mumbleping"
    },
    extra: {
      doc_notes: "mumble"
    }
  },
  mutantfactions: {
    name: "Mutant Factions",
    release_year: 2009,
    options: {
      port: 11235,
      protocol: "geneshift"
    }
  },
  nascarthunder2004: {
    name: "NASCAR Thunder 2004",
    release_year: 2003,
    options: {
      port_query: 13333,
      protocol: "gamespy2"
    }
  },
  netpanzer: {
    name: "netPanzer",
    release_year: 2002,
    options: {
      port: 3030,
      protocol: "gamespy1"
    }
  },
  nmrih: {
    name: "No More Room in Hell",
    release_year: 2011,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  naturalselection: {
    name: "Natural Selection",
    release_year: 2002,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "ns"
    }
  },
  naturalselection2: {
    name: "Natural Selection 2",
    release_year: 2012,
    options: {
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "ns2"
    }
  },
  nfshp2: {
    name: "Need for Speed: Hot Pursuit 2",
    release_year: 2002,
    options: {
      port_query: 61220,
      protocol: "gamespy1"
    }
  },
  nab: {
    name: "Nerf Arena Blast",
    release_year: 1999,
    options: {
      port: 4444,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  neverwinternights: {
    name: "Neverwinter Nights",
    release_year: 2002,
    options: {
      port_query: 5121,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "nwn"
    }
  },
  neverwinternights2: {
    name: "Neverwinter Nights 2",
    release_year: 2006,
    options: {
      port: 5121,
      port_query: 6500,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "nwn2"
    }
  },
  nexuiz: {
    name: "Nexuiz",
    release_year: 2005,
    options: {
      port_query: 26e3,
      protocol: "quake3"
    }
  },
  nitrofamily: {
    name: "Nitro Family",
    release_year: 2004,
    options: {
      port_query: 25601,
      protocol: "gamespy1"
    }
  },
  tonolf: {
    name: "The Operative: No One Lives Forever",
    release_year: 2e3,
    options: {
      port_query: 27888,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "nolf"
    }
  },
  nla: {
    name: "Nova-Life: Amboise",
    release_year: 2020,
    options: {
      port_query: 27015,
      protocol: "valve"
    }
  },
  nolf2asihw: {
    name: "No One Lives Forever 2: A Spy in H.A.R.M.'s Way",
    release_year: 2002,
    options: {
      port_query: 27890,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "nolf2"
    }
  },
  nucleardawn: {
    name: "Nuclear Dawn",
    release_year: 2011,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  ohd: {
    name: "Operation: Harsh Doorstop",
    release_year: 2023,
    options: {
      port: 7777,
      port_query: 27005,
      protocol: "valve"
    }
  },
  onset: {
    name: "Onset",
    release_year: 2019,
    options: {
      port: 7777,
      port_query_offset: -1,
      protocol: "valve"
    }
  },
  openarena: {
    name: "OpenArena",
    release_year: 2005,
    options: {
      port_query: 27960,
      protocol: "quake3"
    }
  },
  openttd: {
    name: "OpenTTD",
    release_year: 2004,
    options: {
      port: 3979,
      protocol: "openttd"
    }
  },
  painkiller: {
    name: "Painkiller",
    release_year: 2004,
    options: {
      port: 3455,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  palworld: {
    name: "Palworld",
    release_year: 2024,
    options: {
      port: 8212,
      protocol: "palworld"
    },
    extra: {
      doc_notes: "palworld"
    }
  },
  pvak2: {
    name: "Pirates, Vikings, and Knights II",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "pvkii"
    }
  },
  pixark: {
    name: "PixARK",
    release_year: 2018,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  postscriptum: {
    name: "Post Scriptum",
    release_year: 2018,
    options: {
      port: 10037,
      protocol: "valve"
    },
    extra: {
      old_id: "ps"
    }
  },
  postal2: {
    name: "Postal 2",
    release_year: 2003,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  prey: {
    name: "Prey",
    release_year: 2017,
    options: {
      port: 27719,
      protocol: "doom3"
    }
  },
  pce: {
    name: "Primal Carnage: Extinction",
    release_year: 2015,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "primalcarnage"
    }
  },
  projectcars: {
    name: "Project Cars",
    release_year: 2015,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "pc"
    }
  },
  projectcars2: {
    name: "Project Cars 2",
    release_year: 2017,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "pc2"
    }
  },
  prb2: {
    name: "Project Reality: Battlefield 2",
    release_year: 2005,
    options: {
      port: 16567,
      port_query: 29900,
      protocol: "gamespy3"
    },
    extra: {
      old_id: "prbf2"
    }
  },
  projectzomboid: {
    name: "Project Zomboid",
    release_year: 2013,
    options: {
      port: 16261,
      protocol: "valve"
    },
    extra: {
      old_id: "przomboid"
    }
  },
  quake: {
    name: "Quake",
    release_year: 1996,
    options: {
      port: 27500,
      protocol: "quake1"
    },
    extra: {
      old_id: "quake1"
    }
  },
  quake2: {
    name: "Quake 2",
    release_year: 1997,
    options: {
      port: 27910,
      protocol: "quake2"
    }
  },
  q3a: {
    name: "Quake 3: Arena",
    release_year: 1999,
    options: {
      port: 27960,
      protocol: "quake3"
    },
    extra: {
      old_id: "quake3"
    }
  },
  quake4: {
    name: "Quake 4",
    release_year: 2005,
    options: {
      port: 28004,
      protocol: "doom3"
    }
  },
  quakelive: {
    name: "Quake Live",
    release_year: 2010,
    options: {
      port: 27960,
      protocol: "valve"
    }
  },
  rdkf: {
    name: "Rag Doll Kung Fu",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "ragdollkungfu"
    }
  },
  rainbowsix: {
    name: "Rainbow Six",
    release_year: 1998,
    options: {
      port_query: 2348,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "r6"
    }
  },
  rs2rs: {
    name: "Rainbow Six 2: Rogue Spear",
    release_year: 1999,
    options: {
      port_query: 2346,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "r6roguespear"
    }
  },
  rs3rs: {
    name: "Rainbow Six 3: Raven Shield",
    release_year: 2003,
    options: {
      port: 7777,
      port_query_offset: 1e3,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "r6ravenshield"
    }
  },
  rallisportchallenge: {
    name: "RalliSport Challenge",
    release_year: 2002,
    options: {
      port_query: 17500,
      protocol: "gamespy1"
    }
  },
  rallymasters: {
    name: "Rally Masters",
    release_year: 2e3,
    options: {
      port_query: 16666,
      protocol: "gamespy1"
    }
  },
  redorchestra: {
    name: "Red Orchestra",
    release_year: 2018,
    options: {
      port: 7758,
      port_query_offset: 1,
      protocol: "unreal2"
    }
  },
  roo4145: {
    name: "Red Orchestra: Ostfront 41-45",
    release_year: 2006,
    options: {
      port: 7757,
      port_query_offset: 10,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "redorchestraost"
    }
  },
  redorchestra2: {
    name: "Red Orchestra 2",
    release_year: 2011,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  redline: {
    name: "Redline",
    release_year: 2010,
    options: {
      port_query: 25252,
      protocol: "gamespy1"
    }
  },
  renegade10: {
    name: "Renegade X",
    release_year: 2014,
    options: {
      protocol: "renegadex"
    }
  },
  rdr2r: {
    name: "Red Dead Redemption 2 - RedM",
    release_year: 2018,
    options: {
      port: 30120,
      protocol: "fivem"
    },
    extra: {
      old_id: "redm"
    }
  },
  rtcw: {
    name: "Return to Castle Wolfenstein",
    release_year: 2001,
    options: {
      port_query: 27960,
      protocol: "quake3"
    }
  },
  rfactor: {
    name: "rFactor",
    release_year: 2005,
    options: {
      port: 34397,
      port_query_offset: -100,
      protocol: "rfactor"
    }
  },
  rfactor2: {
    name: "rFactor 2",
    release_year: 2013,
    options: {
      port_query: 64299,
      protocol: "valve"
    }
  },
  ricochet: {
    name: "Ricochet",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  ron: {
    name: "Rise of Nations",
    release_year: 2003,
    options: {
      port_query: 6501,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "riseofnations"
    }
  },
  risingworld: {
    name: "Rising World",
    release_year: 2014,
    options: {
      port: 4255,
      port_query_offset: -1,
      protocol: "valve"
    }
  },
  ror2: {
    name: "Risk of Rain 2",
    release_year: 2020,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  rs2v: {
    name: "Rising Storm 2: Vietnam",
    release_year: 2017,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "rs2"
    }
  },
  rune: {
    name: "Rune",
    release_year: 2e3,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  rust: {
    name: "Rust",
    release_year: 2013,
    options: {
      port: 28015,
      protocol: "valve"
    }
  },
  gtasam: {
    name: "Grand Theft Auto: San Andreas Multiplayer",
    release_year: 2006,
    options: {
      port: 7777,
      protocol: "samp"
    },
    extra: {
      old_id: "samp"
    }
  },
  gtasao: {
    name: "Grand Theft Auto: San Andreas OpenMP",
    release_year: 2019,
    options: {
      port: 7777,
      protocol: "gtasao"
    },
    extra: {
      old_id: "saomp"
    }
  },
  s2ats: {
    name: "Savage 2: A Tortured Soul",
    release_year: 2008,
    options: {
      port_query: 11235,
      protocol: "savage2"
    },
    extra: {
      old_id: "savage2"
    }
  },
  sdtd: {
    name: "7 Days to Die",
    release_year: 2013,
    options: {
      port: 26900,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "7d2d"
    }
  },
  satisfactory: {
    name: "Satisfactory",
    release_year: 2019,
    options: {
      port: 7777,
      protocol: "satisfactory"
    },
    extra: {
      doc_notes: "satisfactory"
    }
  },
  spaceengineers: {
    name: "Space Engineers",
    release_year: 2019,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  serioussam: {
    name: "Serious Sam",
    release_year: 2001,
    options: {
      port: 25600,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "ss"
    }
  },
  serioussam2: {
    name: "Serious Sam 2",
    release_year: 2005,
    options: {
      port: 25600,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "ss2"
    }
  },
  shatteredhorizon: {
    name: "Shattered Horizon",
    release_year: 2009,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  sstse: {
    name: "Serious Sam: The Second Encounter",
    release_year: 2002,
    options: {
      port: 25600,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  theship: {
    name: "The Ship",
    release_year: 2006,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "ship"
    }
  },
  shogo: {
    name: "Shogo",
    release_year: 1998,
    options: {
      port_query: 27888,
      protocol: "gamespy1"
    }
  },
  shootmania: {
    name: "Shootmania",
    release_year: 2013,
    options: {
      port: 2350,
      port_query: 5e3,
      protocol: "nadeo"
    },
    extra: {
      doc_notes: "nadeo"
    }
  },
  sin: {
    name: "SiN",
    release_year: 1998,
    options: {
      port_query: 22450,
      protocol: "gamespy1"
    }
  },
  sinepisodes: {
    name: "SiN Episodes",
    release_year: 2006,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "sinep"
    }
  },
  soldat: {
    name: "Soldat",
    release_year: 2002,
    options: {
      port: 23073,
      port_query_offset: 10,
      protocol: "soldat"
    },
    extra: {
      doc_notes: "soldat"
    }
  },
  sof: {
    name: "Soldier of Fortune",
    release_year: 2e3,
    options: {
      port: 28910,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  sof2: {
    name: "Soldier of Fortune 2",
    release_year: 2002,
    options: {
      port_query: 20100,
      protocol: "quake3"
    }
  },
  sotf: {
    name: "Sons Of The Forest",
    release_year: 2023,
    options: {
      port: 8766,
      port_query: 27016,
      protocol: "valve"
    },
    extra: {
      old_id: "sonsoftheforest"
    }
  },
  soulmask: {
    name: "Soulmask",
    release_year: 2024,
    options: {
      port: 8777,
      port_query: 27015,
      protocol: "valve"
    }
  },
  stalker: {
    name: "S.T.A.L.K.E.R.",
    release_year: 2007,
    options: {
      port: 5445,
      port_query_offset: 2,
      protocol: "gamespy3"
    }
  },
  stn: {
    name: "Survive the Nights",
    release_year: 2017,
    options: {
      port: 7950,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  stbc: {
    name: "Star Trek: Bridge Commander",
    release_year: 2002,
    options: {
      port_query: 22101,
      protocol: "gamespy1"
    }
  },
  stvef: {
    name: "Star Trek: Voyager - Elite Force",
    release_year: 2e3,
    options: {
      port_query: 27960,
      protocol: "quake3"
    }
  },
  stvef2: {
    name: "Star Trek: Voyager - Elite Force 2",
    release_year: 2003,
    options: {
      port_query: 29253,
      protocol: "quake3"
    }
  },
  squad: {
    name: "Squad",
    release_year: 2020,
    options: {
      port: 7787,
      port_query: 27165,
      protocol: "valve"
    }
  },
  swb: {
    name: "Star Wars: Battlefront",
    release_year: 2004,
    options: {
      port_query: 3658,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "swbf"
    }
  },
  swb2: {
    name: "Star Wars: Battlefront 2",
    release_year: 2005,
    options: {
      port_query: 3658,
      protocol: "gamespy2"
    },
    extra: {
      old_id: "swbf2"
    }
  },
  swjkja: {
    name: "Star Wars Jedi Knight: Jedi Academy",
    release_year: 2003,
    options: {
      port_query: 29070,
      protocol: "quake3"
    },
    extra: {
      old_id: "swjk"
    }
  },
  swjk2jo: {
    name: "Star Wars Jedi Knight II: Jedi Outcast",
    release_year: 2002,
    options: {
      port_query: 28070,
      protocol: "quake3"
    },
    extra: {
      old_id: "swjk2"
    }
  },
  swrc: {
    name: "Star Wars: Republic Commando",
    release_year: 2005,
    options: {
      port: 7777,
      port_query: 11138,
      protocol: "gamespy2"
    }
  },
  starbound: {
    name: "Starbound",
    release_year: 2016,
    options: {
      port: 21025,
      protocol: "valve"
    }
  },
  starmade: {
    name: "StarMade",
    release_year: 2012,
    options: {
      port: 4242,
      protocol: "starmade"
    }
  },
  starsiege: {
    name: "Starsiege",
    release_year: 2009,
    options: {
      port: 29001,
      protocol: "starsiege"
    }
  },
  suicidesurvival: {
    name: "Suicide Survival",
    release_year: 2008,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  swat4: {
    name: "SWAT 4",
    release_year: 2005,
    options: {
      port: 10480,
      port_query_offset: 2,
      protocol: "gamespy2"
    }
  },
  svencoop: {
    name: "Sven Coop",
    release_year: 1999,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  synergy: {
    name: "Synergy",
    release_year: 2005,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  tacticalops: {
    name: "Tactical Ops",
    release_year: 1999,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  toh: {
    name: "Take On Helicopters",
    release_year: 2011,
    options: {
      port: 2302,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "takeonhelicopters"
    }
  },
  teamfactor: {
    name: "Team Factor",
    release_year: 2002,
    options: {
      port_query: 57778,
      protocol: "gamespy1"
    }
  },
  tfc: {
    name: "Team Fortress Classic",
    release_year: 1999,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  teamfortress2: {
    name: "Team Fortress 2",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "tf2"
    }
  },
  teamspeak2: {
    name: "Teamspeak 2",
    release_year: 2001,
    options: {
      port: 8767,
      protocol: "teamspeak2"
    }
  },
  teamspeak3: {
    name: "Teamspeak 3",
    release_year: 2011,
    options: {
      port: 9987,
      protocol: "teamspeak3"
    },
    extra: {
      doc_notes: "teamspeak3"
    }
  },
  terminus: {
    name: "Terminus",
    release_year: 2e3,
    options: {
      port_query: 12286,
      protocol: "gamespy1"
    }
  },
  terrariatshock: {
    name: "Terraria - TShock",
    release_year: 2011,
    options: {
      port: 7777,
      port_query_offset: 101,
      protocol: "terraria"
    },
    extra: {
      old_id: "terraria",
      doc_notes: "terraria"
    }
  },
  theforest: {
    name: "The Forest",
    release_year: 2014,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      old_id: "forrest"
    }
  },
  thefront: {
    name: "The Front",
    release_year: 2023,
    options: {
      port_query: 27015,
      protocol: "valve"
    }
  },
  thps3: {
    name: "Tony Hawk's Pro Skater 3",
    release_year: 2001,
    options: {
      port_query: 6500,
      protocol: "gamespy1"
    }
  },
  thps4: {
    name: "Tony Hawk's Pro Skater 4",
    release_year: 2002,
    options: {
      port_query: 6500,
      protocol: "gamespy1"
    }
  },
  thu2: {
    name: "Tony Hawk's Underground 2",
    release_year: 2004,
    options: {
      port_query: 5153,
      protocol: "gamespy1"
    }
  },
  towerunite: {
    name: "Tower Unite",
    release_year: 2016,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  trackmania2: {
    name: "Trackmania 2",
    release_year: 2011,
    options: {
      port: 2350,
      port_query: 5e3,
      protocol: "nadeo"
    },
    extra: {
      doc_notes: "nadeo"
    }
  },
  trackmaniaforever: {
    name: "Trackmania Forever",
    release_year: 2008,
    options: {
      port: 2350,
      port_query: 5e3,
      protocol: "nadeo"
    },
    extra: {
      doc_notes: "nadeo"
    }
  },
  tremulous: {
    name: "Tremulous",
    release_year: 2006,
    options: {
      port_query: 30720,
      protocol: "quake3"
    }
  },
  t1s: {
    name: "Tribes 1: Starsiege",
    release_year: 1998,
    options: {
      port: 28001,
      protocol: "tribes1"
    },
    extra: {
      old_id: "tribes1"
    }
  },
  tribesvengeance: {
    name: "Tribes: Vengeance",
    release_year: 2004,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy2"
    }
  },
  tron20: {
    name: "Tron 2.0",
    release_year: 2003,
    options: {
      port_query: 27888,
      protocol: "gamespy2"
    }
  },
  thespecialists: {
    name: "The Specialists",
    release_year: 2002,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  toxikk: {
    name: "TOXIKK",
    release_year: 2016,
    options: {
      port: 7777,
      port_query: 27015,
      protocol: "toxikk"
    }
  },
  turok2: {
    name: "Turok 2",
    release_year: 1998,
    options: {
      port_query: 12880,
      protocol: "gamespy1"
    }
  },
  u2tax: {
    name: "Unreal 2: The Awakening - XMP",
    release_year: 2003,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "unreal2"
    }
  },
  universalcombat: {
    name: "Universal Combat",
    release_year: 2004,
    options: {
      port: 1135,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  unreal: {
    name: "Unreal",
    release_year: 1998,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    }
  },
  unturned: {
    name: "unturned",
    release_year: 2014,
    options: {
      port: 27015,
      port_query_offset: 1,
      protocol: "valve"
    }
  },
  unrealtournament: {
    name: "Unreal Tournament",
    release_year: 1993,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "ut"
    }
  },
  unrealtournament2003: {
    name: "Unreal Tournament 2003",
    release_year: 2003,
    options: {
      port: 7757,
      port_query_offset: 1,
      protocol: "unreal2"
    },
    extra: {
      old_id: "ut2003"
    }
  },
  unrealtournament2004: {
    name: "Unreal Tournament 2004",
    release_year: 2004,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "unreal2"
    },
    extra: {
      old_id: "ut2004"
    }
  },
  unrealtournament3: {
    name: "Unreal Tournament 3",
    release_year: 2007,
    options: {
      port: 7777,
      port_query_offset: -1277,
      protocol: "ut3"
    },
    extra: {
      old_id: "ut3"
    }
  },
  urbanterror: {
    name: "Urban Terror",
    release_year: 2e3,
    options: {
      port_query: 27960,
      protocol: "quake3"
    }
  },
  v8sc: {
    name: "V8 Supercar Challenge",
    release_year: 2002,
    options: {
      port_query: 16700,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "v8supercar"
    }
  },
  valheim: {
    name: "Valheim",
    release_year: 2021,
    options: {
      port: 2456,
      port_query_offset: 1,
      protocol: "valve"
    },
    extra: {
      doc_notes: "valheim"
    }
  },
  vcm: {
    name: "Vice City Multiplayer",
    release_year: 2015,
    options: {
      port: 8192,
      protocol: "vcmp"
    },
    extra: {
      old_id: "vcmp"
    }
  },
  ventrilo: {
    name: "Ventrilo",
    release_year: 2002,
    options: {
      port: 3784,
      protocol: "ventrilo"
    }
  },
  vietcong: {
    name: "Vietcong",
    release_year: 2003,
    options: {
      port: 5425,
      port_query: 15425,
      protocol: "gamespy1"
    }
  },
  vietcong2: {
    name: "Vietcong 2",
    release_year: 2005,
    options: {
      port: 5001,
      port_query: 19967,
      protocol: "gamespy2"
    }
  },
  vrising: {
    name: "V Rising",
    release_year: 2022,
    options: {
      port: 27015,
      port_query_offset: [1, 15],
      protocol: "valve"
    }
  },
  vampireslayer: {
    name: "Vampire Slayer",
    release_year: 2e3,
    options: {
      port: 27015,
      protocol: "valve"
    },
    extra: {
      old_id: "vs"
    }
  },
  vintagestory: {
    name: "Vintage Story",
    release_year: 2016,
    options: {
      port: 42420,
      protocol: "vintagestory"
    }
  },
  warsow: {
    name: "Warsow",
    release_year: 2012,
    options: {
      port: 44400,
      protocol: "warsow"
    }
  },
  warfork: {
    name: "Warfork",
    release_year: 2019,
    options: {
      port_query: 44400,
      protocol: "warsow"
    }
  },
  wot: {
    name: "Wheel of Time",
    release_year: 1999,
    options: {
      port: 7777,
      port_query_offset: 1,
      protocol: "gamespy1"
    },
    extra: {
      old_id: "wheeloftime"
    }
  },
  wolfenstein: {
    name: "Wolfenstein",
    release_year: 2009,
    options: {
      port: 27666,
      protocol: "doom3"
    },
    extra: {
      old_id: "wolfenstein2009"
    }
  },
  wet: {
    name: "Wolfenstein: Enemy Territory",
    release_year: 2003,
    options: {
      port_query: 27960,
      protocol: "quake3"
    },
    extra: {
      old_id: "wolfensteinet"
    }
  },
  wurmunlimited: {
    name: "Wurm Unlimited",
    release_year: 2006,
    options: {
      port: 3724,
      port_query: 27016,
      protocol: "valve"
    },
    extra: {
      old_id: "wurm"
    }
  },
  xonotic: {
    name: "Xonotic",
    release_year: 2011,
    options: {
      port: 26e3,
      protocol: "xonotic"
    }
  },
  wop: {
    name: "World Of Padman",
    release_year: 2007,
    options: {
      port: 26e3,
      protocol: "quake3"
    }
  },
  xpandrally: {
    name: "Xpand Rally",
    release_year: 2004,
    options: {
      port: 28015,
      port_query_offset: 123,
      protocol: "ase"
    }
  },
  zombiemaster: {
    name: "Zombie Master",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    }
  },
  zps: {
    name: "Zombie Panic: Source",
    release_year: 2007,
    options: {
      port: 27015,
      protocol: "valve"
    }
  }
};

// lib/game-resolver.js
var lookup = (options) => {
  const type = options.type;
  if (!type) {
    throw Error("No game specified");
  }
  if (type.startsWith("protocol-")) {
    return {
      protocol: type.substring(9)
    };
  }
  let game = games[type];
  if (options.checkOldIDs) {
    Object.keys(games).forEach((id) => {
      var _a, _b;
      if (((_b = (_a = games[id]) == null ? void 0 : _a.extra) == null ? void 0 : _b.old_id) === type) {
        game = games[id];
      }
    });
  }
  if (!game) {
    throw Error("Invalid game: " + type);
  }
  return game.options;
};

// protocols/index.js
var protocols_exports = {};
__export(protocols_exports, {
  altvmp: () => altvmp,
  armagetron: () => armagetron,
  asa: () => asa,
  ase: () => ase,
  assettocorsa: () => assettocorsa,
  battlefield: () => battlefield,
  beammp: () => beammp,
  beammpmaster: () => beammpmaster,
  brokeprotocol: () => brokeprotocol,
  brokeprotocolmaster: () => brokeprotocolmaster,
  buildandshoot: () => buildandshoot,
  cs2d: () => cs2d,
  dayz: () => dayz,
  discord: () => discord,
  doom3: () => doom3,
  eco: () => eco,
  eldewrito: () => eldewrito,
  epic: () => Epic,
  factorio: () => factorio,
  farmingsimulator: () => farmingsimulator,
  ffow: () => ffow,
  fivem: () => fivem,
  gamespy1: () => gamespy1,
  gamespy2: () => gamespy2,
  gamespy3: () => gamespy3,
  geneshift: () => geneshift,
  goldsrc: () => goldsrc,
  gtasao: () => gtasao,
  hawakening: () => hawakening,
  hawakeningmaster: () => hawakeningmaster,
  hexen2: () => hexen2,
  jc2mp: () => jc2mp,
  kspdmp: () => kspdmp,
  mafia2mp: () => mafia2mp,
  mafia2online: () => mafia2online,
  minecraft: () => minecraft,
  minecraftbedrock: () => minecraftbedrock,
  minecraftvanilla: () => minecraftvanilla,
  minetest: () => minetest,
  mumble: () => mumble,
  mumbleping: () => mumbleping,
  nadeo: () => nadeo,
  openttd: () => openttd,
  palworld: () => palworld,
  quake1: () => quake1,
  quake2: () => quake2,
  quake3: () => quake3,
  ragemp: () => ragemp,
  renegadex: () => renegadex,
  renegadexmaster: () => renegadexmaster,
  rfactor: () => rfactor,
  samp: () => samp,
  satisfactory: () => satisfactory,
  savage2: () => savage2,
  soldat: () => soldat,
  starmade: () => starmade,
  starsiege: () => starsiege,
  teamspeak2: () => teamspeak2,
  teamspeak3: () => teamspeak3,
  terraria: () => terraria,
  theisleevrima: () => theisleevrima,
  toxikk: () => toxikk,
  tribes1: () => tribes1,
  tribes1master: () => tribes1master,
  unreal2: () => unreal2,
  ut3: () => ut3,
  valve: () => valve,
  vcmp: () => vcmp,
  ventrilo: () => ventrilo,
  vintagestory: () => vintagestory,
  vintagestorymaster: () => vintagestorymaster,
  warsow: () => warsow,
  xonotic: () => xonotic
});

// protocols/core.js
var import_node_events3 = require("node:events");
var net2 = __toESM(require("node:net"), 1);

// node_modules/@sindresorhus/is/dist/index.js
var typedArrayTypeNames = [
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array"
];
function isTypedArrayName(name) {
  return typedArrayTypeNames.includes(name);
}
var objectTypeNames = [
  "Function",
  "Generator",
  "AsyncGenerator",
  "GeneratorFunction",
  "AsyncGeneratorFunction",
  "AsyncFunction",
  "Observable",
  "Array",
  "Buffer",
  "Blob",
  "Object",
  "RegExp",
  "Date",
  "Error",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "WeakRef",
  "ArrayBuffer",
  "SharedArrayBuffer",
  "DataView",
  "Promise",
  "URL",
  "FormData",
  "URLSearchParams",
  "HTMLElement",
  "NaN",
  ...typedArrayTypeNames
];
function isObjectTypeName(name) {
  return objectTypeNames.includes(name);
}
var primitiveTypeNames = [
  "null",
  "undefined",
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol"
];
function isPrimitiveTypeName(name) {
  return primitiveTypeNames.includes(name);
}
function isOfType(type) {
  return (value) => typeof value === type;
}
var { toString } = Object.prototype;
var getObjectType = (value) => {
  const objectTypeName = toString.call(value).slice(8, -1);
  if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
    return "HTMLElement";
  }
  if (isObjectTypeName(objectTypeName)) {
    return objectTypeName;
  }
  return void 0;
};
var isObjectOfType = (type) => (value) => getObjectType(value) === type;
function is(value) {
  if (value === null) {
    return "null";
  }
  switch (typeof value) {
    case "undefined": {
      return "undefined";
    }
    case "string": {
      return "string";
    }
    case "number": {
      return Number.isNaN(value) ? "NaN" : "number";
    }
    case "boolean": {
      return "boolean";
    }
    case "function": {
      return "Function";
    }
    case "bigint": {
      return "bigint";
    }
    case "symbol": {
      return "symbol";
    }
    default:
  }
  if (is.observable(value)) {
    return "Observable";
  }
  if (is.array(value)) {
    return "Array";
  }
  if (is.buffer(value)) {
    return "Buffer";
  }
  const tagType = getObjectType(value);
  if (tagType) {
    return tagType;
  }
  if (value instanceof String || value instanceof Boolean || value instanceof Number) {
    throw new TypeError("Please don't use object wrappers for primitive types");
  }
  return "Object";
}
is.undefined = isOfType("undefined");
is.string = isOfType("string");
var isNumberType = isOfType("number");
is.number = (value) => isNumberType(value) && !is.nan(value);
is.positiveNumber = (value) => is.number(value) && value > 0;
is.negativeNumber = (value) => is.number(value) && value < 0;
is.bigint = isOfType("bigint");
is.function_ = isOfType("function");
is.null_ = (value) => value === null;
is.class_ = (value) => is.function_(value) && value.toString().startsWith("class ");
is.boolean = (value) => value === true || value === false;
is.symbol = isOfType("symbol");
is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
is.array = (value, assertion) => {
  if (!Array.isArray(value)) {
    return false;
  }
  if (!is.function_(assertion)) {
    return true;
  }
  return value.every((element) => assertion(element));
};
is.buffer = (value) => {
  var _a, _b;
  return ((_b = (_a = value == null ? void 0 : value.constructor) == null ? void 0 : _a.isBuffer) == null ? void 0 : _b.call(_a, value)) ?? false;
};
is.blob = (value) => isObjectOfType("Blob")(value);
is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
is.object = (value) => !is.null_(value) && (typeof value === "object" || is.function_(value));
is.iterable = (value) => is.function_(value == null ? void 0 : value[Symbol.iterator]);
is.asyncIterable = (value) => is.function_(value == null ? void 0 : value[Symbol.asyncIterator]);
is.generator = (value) => is.iterable(value) && is.function_(value == null ? void 0 : value.next) && is.function_(value == null ? void 0 : value.throw);
is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
is.nativePromise = (value) => isObjectOfType("Promise")(value);
var hasPromiseApi = (value) => is.function_(value == null ? void 0 : value.then) && is.function_(value == null ? void 0 : value.catch);
is.promise = (value) => is.nativePromise(value) || hasPromiseApi(value);
is.generatorFunction = isObjectOfType("GeneratorFunction");
is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
is.asyncFunction = (value) => getObjectType(value) === "AsyncFunction";
is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty("prototype");
is.regExp = isObjectOfType("RegExp");
is.date = isObjectOfType("Date");
is.error = isObjectOfType("Error");
is.map = (value) => isObjectOfType("Map")(value);
is.set = (value) => isObjectOfType("Set")(value);
is.weakMap = (value) => isObjectOfType("WeakMap")(value);
is.weakSet = (value) => isObjectOfType("WeakSet")(value);
is.weakRef = (value) => isObjectOfType("WeakRef")(value);
is.int8Array = isObjectOfType("Int8Array");
is.uint8Array = isObjectOfType("Uint8Array");
is.uint8ClampedArray = isObjectOfType("Uint8ClampedArray");
is.int16Array = isObjectOfType("Int16Array");
is.uint16Array = isObjectOfType("Uint16Array");
is.int32Array = isObjectOfType("Int32Array");
is.uint32Array = isObjectOfType("Uint32Array");
is.float32Array = isObjectOfType("Float32Array");
is.float64Array = isObjectOfType("Float64Array");
is.bigInt64Array = isObjectOfType("BigInt64Array");
is.bigUint64Array = isObjectOfType("BigUint64Array");
is.arrayBuffer = isObjectOfType("ArrayBuffer");
is.sharedArrayBuffer = isObjectOfType("SharedArrayBuffer");
is.dataView = isObjectOfType("DataView");
is.enumCase = (value, targetEnum) => Object.values(targetEnum).includes(value);
is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
is.urlInstance = (value) => isObjectOfType("URL")(value);
is.urlString = (value) => {
  if (!is.string(value)) {
    return false;
  }
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
is.truthy = (value) => Boolean(value);
is.falsy = (value) => !value;
is.nan = (value) => Number.isNaN(value);
is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
is.integer = (value) => Number.isInteger(value);
is.safeInteger = (value) => Number.isSafeInteger(value);
is.plainObject = (value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
is.typedArray = (value) => isTypedArrayName(getObjectType(value));
var isValidLength = (value) => is.safeInteger(value) && value >= 0;
is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
is.tupleLike = (value, guards) => {
  if (is.array(guards) && is.array(value) && guards.length === value.length) {
    return guards.every((guard, index) => guard(value[index]));
  }
  return false;
};
is.inRange = (value, range) => {
  if (is.number(range)) {
    return value >= Math.min(0, range) && value <= Math.max(range, 0);
  }
  if (is.array(range) && range.length === 2) {
    return value >= Math.min(...range) && value <= Math.max(...range);
  }
  throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
};
var NODE_TYPE_ELEMENT = 1;
var DOM_PROPERTIES_TO_CHECK = [
  "innerHTML",
  "ownerDocument",
  "style",
  "attributes",
  "nodeValue"
];
is.domElement = (value) => is.object(value) && value.nodeType === NODE_TYPE_ELEMENT && is.string(value.nodeName) && !is.plainObject(value) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
is.observable = (value) => {
  var _a, _b;
  if (!value) {
    return false;
  }
  if (value === ((_a = value[Symbol.observable]) == null ? void 0 : _a.call(value))) {
    return true;
  }
  if (value === ((_b = value["@@observable"]) == null ? void 0 : _b.call(value))) {
    return true;
  }
  return false;
};
is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
is.infinite = (value) => value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY;
var isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
is.evenInteger = isAbsoluteMod2(0);
is.oddInteger = isAbsoluteMod2(1);
is.emptyArray = (value) => is.array(value) && value.length === 0;
is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
is.emptyString = (value) => is.string(value) && value.length === 0;
var isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
is.nonEmptyString = (value) => is.string(value) && value.length > 0;
is.nonEmptyStringAndNotWhitespace = (value) => is.string(value) && !is.emptyStringOrWhitespace(value);
is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
is.emptySet = (value) => is.set(value) && value.size === 0;
is.nonEmptySet = (value) => is.set(value) && value.size > 0;
is.emptyMap = (value) => is.map(value) && value.size === 0;
is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
is.propertyKey = (value) => is.any([is.string, is.number, is.symbol], value);
is.formData = (value) => isObjectOfType("FormData")(value);
is.urlSearchParams = (value) => isObjectOfType("URLSearchParams")(value);
var predicateOnArray = (method, predicate, values) => {
  if (!is.function_(predicate)) {
    throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
  }
  if (values.length === 0) {
    throw new TypeError("Invalid number of values");
  }
  return method.call(values, predicate);
};
is.any = (predicate, ...values) => {
  const predicates = is.array(predicate) ? predicate : [predicate];
  return predicates.some((singlePredicate) => predicateOnArray(Array.prototype.some, singlePredicate, values));
};
is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
var assertType = (condition, description, value, options = {}) => {
  if (!condition) {
    const { multipleValues } = options;
    const valuesMessage = multipleValues ? `received values of types ${[
      ...new Set(value.map((singleValue) => `\`${is(singleValue)}\``))
    ].join(", ")}` : `received value of type \`${is(value)}\``;
    throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
  }
};
var assert = {
  // Unknowns.
  undefined: (value) => assertType(is.undefined(value), "undefined", value),
  string: (value) => assertType(is.string(value), "string", value),
  number: (value) => assertType(is.number(value), "number", value),
  positiveNumber: (value) => assertType(is.positiveNumber(value), "positive number", value),
  negativeNumber: (value) => assertType(is.negativeNumber(value), "negative number", value),
  bigint: (value) => assertType(is.bigint(value), "bigint", value),
  // eslint-disable-next-line @typescript-eslint/ban-types
  function_: (value) => assertType(is.function_(value), "Function", value),
  null_: (value) => assertType(is.null_(value), "null", value),
  class_: (value) => assertType(is.class_(value), "Class", value),
  boolean: (value) => assertType(is.boolean(value), "boolean", value),
  symbol: (value) => assertType(is.symbol(value), "symbol", value),
  numericString: (value) => assertType(is.numericString(value), "string with a number", value),
  array: (value, assertion) => {
    const assert2 = assertType;
    assert2(is.array(value), "Array", value);
    if (assertion) {
      value.forEach(assertion);
    }
  },
  buffer: (value) => assertType(is.buffer(value), "Buffer", value),
  blob: (value) => assertType(is.blob(value), "Blob", value),
  nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined", value),
  object: (value) => assertType(is.object(value), "Object", value),
  iterable: (value) => assertType(is.iterable(value), "Iterable", value),
  asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable", value),
  generator: (value) => assertType(is.generator(value), "Generator", value),
  asyncGenerator: (value) => assertType(is.asyncGenerator(value), "AsyncGenerator", value),
  nativePromise: (value) => assertType(is.nativePromise(value), "native Promise", value),
  promise: (value) => assertType(is.promise(value), "Promise", value),
  generatorFunction: (value) => assertType(is.generatorFunction(value), "GeneratorFunction", value),
  asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), "AsyncGeneratorFunction", value),
  // eslint-disable-next-line @typescript-eslint/ban-types
  asyncFunction: (value) => assertType(is.asyncFunction(value), "AsyncFunction", value),
  // eslint-disable-next-line @typescript-eslint/ban-types
  boundFunction: (value) => assertType(is.boundFunction(value), "Function", value),
  regExp: (value) => assertType(is.regExp(value), "RegExp", value),
  date: (value) => assertType(is.date(value), "Date", value),
  error: (value) => assertType(is.error(value), "Error", value),
  map: (value) => assertType(is.map(value), "Map", value),
  set: (value) => assertType(is.set(value), "Set", value),
  weakMap: (value) => assertType(is.weakMap(value), "WeakMap", value),
  weakSet: (value) => assertType(is.weakSet(value), "WeakSet", value),
  weakRef: (value) => assertType(is.weakRef(value), "WeakRef", value),
  int8Array: (value) => assertType(is.int8Array(value), "Int8Array", value),
  uint8Array: (value) => assertType(is.uint8Array(value), "Uint8Array", value),
  uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), "Uint8ClampedArray", value),
  int16Array: (value) => assertType(is.int16Array(value), "Int16Array", value),
  uint16Array: (value) => assertType(is.uint16Array(value), "Uint16Array", value),
  int32Array: (value) => assertType(is.int32Array(value), "Int32Array", value),
  uint32Array: (value) => assertType(is.uint32Array(value), "Uint32Array", value),
  float32Array: (value) => assertType(is.float32Array(value), "Float32Array", value),
  float64Array: (value) => assertType(is.float64Array(value), "Float64Array", value),
  bigInt64Array: (value) => assertType(is.bigInt64Array(value), "BigInt64Array", value),
  bigUint64Array: (value) => assertType(is.bigUint64Array(value), "BigUint64Array", value),
  arrayBuffer: (value) => assertType(is.arrayBuffer(value), "ArrayBuffer", value),
  sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), "SharedArrayBuffer", value),
  dataView: (value) => assertType(is.dataView(value), "DataView", value),
  enumCase: (value, targetEnum) => assertType(is.enumCase(value, targetEnum), "EnumCase", value),
  urlInstance: (value) => assertType(is.urlInstance(value), "URL", value),
  urlString: (value) => assertType(is.urlString(value), "string with a URL", value),
  truthy: (value) => assertType(is.truthy(value), "truthy", value),
  falsy: (value) => assertType(is.falsy(value), "falsy", value),
  nan: (value) => assertType(is.nan(value), "NaN", value),
  primitive: (value) => assertType(is.primitive(value), "primitive", value),
  integer: (value) => assertType(is.integer(value), "integer", value),
  safeInteger: (value) => assertType(is.safeInteger(value), "integer", value),
  plainObject: (value) => assertType(is.plainObject(value), "plain object", value),
  typedArray: (value) => assertType(is.typedArray(value), "TypedArray", value),
  arrayLike: (value) => assertType(is.arrayLike(value), "array-like", value),
  tupleLike: (value, guards) => assertType(is.tupleLike(value, guards), "tuple-like", value),
  domElement: (value) => assertType(is.domElement(value), "HTMLElement", value),
  observable: (value) => assertType(is.observable(value), "Observable", value),
  nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream", value),
  infinite: (value) => assertType(is.infinite(value), "infinite number", value),
  emptyArray: (value) => assertType(is.emptyArray(value), "empty array", value),
  nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array", value),
  emptyString: (value) => assertType(is.emptyString(value), "empty string", value),
  emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace", value),
  nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string", value),
  nonEmptyStringAndNotWhitespace: (value) => assertType(is.nonEmptyStringAndNotWhitespace(value), "non-empty string and not whitespace", value),
  emptyObject: (value) => assertType(is.emptyObject(value), "empty object", value),
  nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object", value),
  emptySet: (value) => assertType(is.emptySet(value), "empty set", value),
  nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set", value),
  emptyMap: (value) => assertType(is.emptyMap(value), "empty map", value),
  nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map", value),
  propertyKey: (value) => assertType(is.propertyKey(value), "PropertyKey", value),
  formData: (value) => assertType(is.formData(value), "FormData", value),
  urlSearchParams: (value) => assertType(is.urlSearchParams(value), "URLSearchParams", value),
  // Numbers.
  evenInteger: (value) => assertType(is.evenInteger(value), "even integer", value),
  oddInteger: (value) => assertType(is.oddInteger(value), "odd integer", value),
  // Two arguments.
  directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T", instance),
  inRange: (value, range) => assertType(is.inRange(value, range), "in range", value),
  // Variadic functions.
  any: (predicate, ...values) => assertType(is.any(predicate, ...values), "predicate returns truthy for any value", values, { multipleValues: true }),
  all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values", values, { multipleValues: true })
};
Object.defineProperties(is, {
  class: {
    value: is.class_
  },
  function: {
    value: is.function_
  },
  null: {
    value: is.null_
  }
});
Object.defineProperties(assert, {
  class: {
    value: assert.class_
  },
  function: {
    value: assert.function_
  },
  null: {
    value: assert.null_
  }
});
var dist_default = is;

// node_modules/got/dist/source/as-promise/index.js
var import_node_events2 = require("node:events");

// node_modules/p-cancelable/index.js
var CancelError = class extends Error {
  constructor(reason) {
    super(reason || "Promise was canceled");
    this.name = "CancelError";
  }
  get isCanceled() {
    return true;
  }
};
var PCancelable = class _PCancelable {
  static fn(userFunction) {
    return (...arguments_) => {
      return new _PCancelable((resolve, reject, onCancel) => {
        arguments_.push(onCancel);
        userFunction(...arguments_).then(resolve, reject);
      });
    };
  }
  constructor(executor) {
    this._cancelHandlers = [];
    this._isPending = true;
    this._isCanceled = false;
    this._rejectOnCancel = true;
    this._promise = new Promise((resolve, reject) => {
      this._reject = reject;
      const onResolve = (value) => {
        if (!this._isCanceled || !onCancel.shouldReject) {
          this._isPending = false;
          resolve(value);
        }
      };
      const onReject = (error) => {
        this._isPending = false;
        reject(error);
      };
      const onCancel = (handler) => {
        if (!this._isPending) {
          throw new Error("The `onCancel` handler was attached after the promise settled.");
        }
        this._cancelHandlers.push(handler);
      };
      Object.defineProperties(onCancel, {
        shouldReject: {
          get: () => this._rejectOnCancel,
          set: (boolean) => {
            this._rejectOnCancel = boolean;
          }
        }
      });
      executor(onResolve, onReject, onCancel);
    });
  }
  then(onFulfilled, onRejected) {
    return this._promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this._promise.catch(onRejected);
  }
  finally(onFinally) {
    return this._promise.finally(onFinally);
  }
  cancel(reason) {
    if (!this._isPending || this._isCanceled) {
      return;
    }
    this._isCanceled = true;
    if (this._cancelHandlers.length > 0) {
      try {
        for (const handler of this._cancelHandlers) {
          handler();
        }
      } catch (error) {
        this._reject(error);
        return;
      }
    }
    if (this._rejectOnCancel) {
      this._reject(new CancelError(reason));
    }
  }
  get isCanceled() {
    return this._isCanceled;
  }
};
Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);

// node_modules/got/dist/source/core/errors.js
function isRequest(x) {
  return dist_default.object(x) && "_onResponse" in x;
}
var RequestError = class extends Error {
  constructor(message, error, self) {
    var _a;
    super(message);
    Object.defineProperty(this, "input", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "stack", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "response", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "request", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "timings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Error.captureStackTrace(this, this.constructor);
    this.name = "RequestError";
    this.code = error.code ?? "ERR_GOT_REQUEST_ERROR";
    this.input = error.input;
    if (isRequest(self)) {
      Object.defineProperty(this, "request", {
        enumerable: false,
        value: self
      });
      Object.defineProperty(this, "response", {
        enumerable: false,
        value: self.response
      });
      this.options = self.options;
    } else {
      this.options = self;
    }
    this.timings = (_a = this.request) == null ? void 0 : _a.timings;
    if (dist_default.string(error.stack) && dist_default.string(this.stack)) {
      const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
      const thisStackTrace = this.stack.slice(indexOfMessage).split("\n").reverse();
      const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split("\n").reverse();
      while (errorStackTrace.length > 0 && errorStackTrace[0] === thisStackTrace[0]) {
        thisStackTrace.shift();
      }
      this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join("\n")}${errorStackTrace.reverse().join("\n")}`;
    }
  }
};
var MaxRedirectsError = class extends RequestError {
  constructor(request) {
    super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
    this.name = "MaxRedirectsError";
    this.code = "ERR_TOO_MANY_REDIRECTS";
  }
};
var HTTPError = class extends RequestError {
  constructor(response) {
    super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
    this.name = "HTTPError";
    this.code = "ERR_NON_2XX_3XX_RESPONSE";
  }
};
var CacheError = class extends RequestError {
  constructor(error, request) {
    super(error.message, error, request);
    this.name = "CacheError";
    this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_CACHE_ACCESS" : this.code;
  }
};
var UploadError = class extends RequestError {
  constructor(error, request) {
    super(error.message, error, request);
    this.name = "UploadError";
    this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_UPLOAD" : this.code;
  }
};
var TimeoutError = class extends RequestError {
  constructor(error, timings, request) {
    super(error.message, error, request);
    Object.defineProperty(this, "timings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "event", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = "TimeoutError";
    this.event = error.event;
    this.timings = timings;
  }
};
var ReadError = class extends RequestError {
  constructor(error, request) {
    super(error.message, error, request);
    this.name = "ReadError";
    this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_READING_RESPONSE_STREAM" : this.code;
  }
};
var RetryError = class extends RequestError {
  constructor(request) {
    super("Retrying", {}, request);
    this.name = "RetryError";
    this.code = "ERR_RETRYING";
  }
};
var AbortError = class extends RequestError {
  constructor(request) {
    super("This operation was aborted.", {}, request);
    this.code = "ERR_ABORTED";
    this.name = "AbortError";
  }
};

// node_modules/got/dist/source/core/index.js
var import_node_process2 = __toESM(require("node:process"), 1);
var import_node_buffer2 = require("node:buffer");
var import_node_stream3 = require("node:stream");
var import_node_http2 = __toESM(require("node:http"), 1);

// node_modules/@szmarczak/http-timer/dist/source/index.js
var import_events = require("events");
var import_util = require("util");
var import_defer_to_connect = __toESM(require_source(), 1);
var timer = (request) => {
  if (request.timings) {
    return request.timings;
  }
  const timings = {
    start: Date.now(),
    socket: void 0,
    lookup: void 0,
    connect: void 0,
    secureConnect: void 0,
    upload: void 0,
    response: void 0,
    end: void 0,
    error: void 0,
    abort: void 0,
    phases: {
      wait: void 0,
      dns: void 0,
      tcp: void 0,
      tls: void 0,
      request: void 0,
      firstByte: void 0,
      download: void 0,
      total: void 0
    }
  };
  request.timings = timings;
  const handleError = (origin) => {
    origin.once(import_events.errorMonitor, () => {
      timings.error = Date.now();
      timings.phases.total = timings.error - timings.start;
    });
  };
  handleError(request);
  const onAbort = () => {
    timings.abort = Date.now();
    timings.phases.total = timings.abort - timings.start;
  };
  request.prependOnceListener("abort", onAbort);
  const onSocket = (socket) => {
    timings.socket = Date.now();
    timings.phases.wait = timings.socket - timings.start;
    if (import_util.types.isProxy(socket)) {
      return;
    }
    const lookupListener = () => {
      timings.lookup = Date.now();
      timings.phases.dns = timings.lookup - timings.socket;
    };
    socket.prependOnceListener("lookup", lookupListener);
    (0, import_defer_to_connect.default)(socket, {
      connect: () => {
        timings.connect = Date.now();
        if (timings.lookup === void 0) {
          socket.removeListener("lookup", lookupListener);
          timings.lookup = timings.connect;
          timings.phases.dns = timings.lookup - timings.socket;
        }
        timings.phases.tcp = timings.connect - timings.lookup;
      },
      secureConnect: () => {
        timings.secureConnect = Date.now();
        timings.phases.tls = timings.secureConnect - timings.connect;
      }
    });
  };
  if (request.socket) {
    onSocket(request.socket);
  } else {
    request.prependOnceListener("socket", onSocket);
  }
  const onUpload = () => {
    timings.upload = Date.now();
    timings.phases.request = timings.upload - (timings.secureConnect ?? timings.connect);
  };
  if (request.writableFinished) {
    onUpload();
  } else {
    request.prependOnceListener("finish", onUpload);
  }
  request.prependOnceListener("response", (response) => {
    timings.response = Date.now();
    timings.phases.firstByte = timings.response - timings.upload;
    response.timings = timings;
    handleError(response);
    response.prependOnceListener("end", () => {
      request.off("abort", onAbort);
      response.off("aborted", onAbort);
      if (timings.phases.total) {
        return;
      }
      timings.end = Date.now();
      timings.phases.download = timings.end - timings.response;
      timings.phases.total = timings.end - timings.start;
    });
    response.prependOnceListener("aborted", onAbort);
  });
  return timings;
};
var source_default = timer;

// node_modules/cacheable-request/dist/index.js
var import_node_events = __toESM(require("node:events"), 1);
var import_node_url = __toESM(require("node:url"), 1);
var import_node_crypto = __toESM(require("node:crypto"), 1);
var import_node_stream2 = __toESM(require("node:stream"), 1);

// node_modules/normalize-url/index.js
var DATA_URL_DEFAULT_MIME_TYPE = "text/plain";
var DATA_URL_DEFAULT_CHARSET = "us-ascii";
var testParameter = (name, filters) => filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name);
var supportedProtocols = /* @__PURE__ */ new Set([
  "https:",
  "http:",
  "file:"
]);
var hasCustomProtocol = (urlString) => {
  try {
    const { protocol } = new URL(urlString);
    return protocol.endsWith(":") && !supportedProtocols.has(protocol);
  } catch {
    return false;
  }
};
var normalizeDataURL = (urlString, { stripHash }) => {
  var _a;
  const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
  if (!match) {
    throw new Error(`Invalid URL: ${urlString}`);
  }
  let { type, data, hash } = match.groups;
  const mediaType = type.split(";");
  hash = stripHash ? "" : hash;
  let isBase64 = false;
  if (mediaType[mediaType.length - 1] === "base64") {
    mediaType.pop();
    isBase64 = true;
  }
  const mimeType = ((_a = mediaType.shift()) == null ? void 0 : _a.toLowerCase()) ?? "";
  const attributes = mediaType.map((attribute) => {
    let [key, value = ""] = attribute.split("=").map((string) => string.trim());
    if (key === "charset") {
      value = value.toLowerCase();
      if (value === DATA_URL_DEFAULT_CHARSET) {
        return "";
      }
    }
    return `${key}${value ? `=${value}` : ""}`;
  }).filter(Boolean);
  const normalizedMediaType = [
    ...attributes
  ];
  if (isBase64) {
    normalizedMediaType.push("base64");
  }
  if (normalizedMediaType.length > 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
    normalizedMediaType.unshift(mimeType);
  }
  return `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
};
function normalizeUrl(urlString, options) {
  options = {
    defaultProtocol: "http",
    normalizeProtocol: true,
    forceHttp: false,
    forceHttps: false,
    stripAuthentication: true,
    stripHash: false,
    stripTextFragment: true,
    stripWWW: true,
    removeQueryParameters: [/^utm_\w+/i],
    removeTrailingSlash: true,
    removeSingleSlash: true,
    removeDirectoryIndex: false,
    removeExplicitPort: false,
    sortQueryParameters: true,
    ...options
  };
  if (typeof options.defaultProtocol === "string" && !options.defaultProtocol.endsWith(":")) {
    options.defaultProtocol = `${options.defaultProtocol}:`;
  }
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return normalizeDataURL(urlString, options);
  }
  if (hasCustomProtocol(urlString)) {
    return urlString;
  }
  const hasRelativeProtocol = urlString.startsWith("//");
  const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
  if (!isRelativeUrl) {
    urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
  }
  const urlObject = new URL(urlString);
  if (options.forceHttp && options.forceHttps) {
    throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
  }
  if (options.forceHttp && urlObject.protocol === "https:") {
    urlObject.protocol = "http:";
  }
  if (options.forceHttps && urlObject.protocol === "http:") {
    urlObject.protocol = "https:";
  }
  if (options.stripAuthentication) {
    urlObject.username = "";
    urlObject.password = "";
  }
  if (options.stripHash) {
    urlObject.hash = "";
  } else if (options.stripTextFragment) {
    urlObject.hash = urlObject.hash.replace(/#?:~:text.*?$/i, "");
  }
  if (urlObject.pathname) {
    const protocolRegex = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;
    let lastIndex = 0;
    let result = "";
    for (; ; ) {
      const match = protocolRegex.exec(urlObject.pathname);
      if (!match) {
        break;
      }
      const protocol = match[0];
      const protocolAtIndex = match.index;
      const intermediate = urlObject.pathname.slice(lastIndex, protocolAtIndex);
      result += intermediate.replace(/\/{2,}/g, "/");
      result += protocol;
      lastIndex = protocolAtIndex + protocol.length;
    }
    const remnant = urlObject.pathname.slice(lastIndex, urlObject.pathname.length);
    result += remnant.replace(/\/{2,}/g, "/");
    urlObject.pathname = result;
  }
  if (urlObject.pathname) {
    try {
      urlObject.pathname = decodeURI(urlObject.pathname);
    } catch {
    }
  }
  if (options.removeDirectoryIndex === true) {
    options.removeDirectoryIndex = [/^index\.[a-z]+$/];
  }
  if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
    let pathComponents = urlObject.pathname.split("/");
    const lastComponent = pathComponents[pathComponents.length - 1];
    if (testParameter(lastComponent, options.removeDirectoryIndex)) {
      pathComponents = pathComponents.slice(0, -1);
      urlObject.pathname = pathComponents.slice(1).join("/") + "/";
    }
  }
  if (urlObject.hostname) {
    urlObject.hostname = urlObject.hostname.replace(/\.$/, "");
    if (options.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(urlObject.hostname)) {
      urlObject.hostname = urlObject.hostname.replace(/^www\./, "");
    }
  }
  if (Array.isArray(options.removeQueryParameters)) {
    for (const key of [...urlObject.searchParams.keys()]) {
      if (testParameter(key, options.removeQueryParameters)) {
        urlObject.searchParams.delete(key);
      }
    }
  }
  if (!Array.isArray(options.keepQueryParameters) && options.removeQueryParameters === true) {
    urlObject.search = "";
  }
  if (Array.isArray(options.keepQueryParameters) && options.keepQueryParameters.length > 0) {
    for (const key of [...urlObject.searchParams.keys()]) {
      if (!testParameter(key, options.keepQueryParameters)) {
        urlObject.searchParams.delete(key);
      }
    }
  }
  if (options.sortQueryParameters) {
    urlObject.searchParams.sort();
    try {
      urlObject.search = decodeURIComponent(urlObject.search);
    } catch {
    }
  }
  if (options.removeTrailingSlash) {
    urlObject.pathname = urlObject.pathname.replace(/\/$/, "");
  }
  if (options.removeExplicitPort && urlObject.port) {
    urlObject.port = "";
  }
  const oldUrlString = urlString;
  urlString = urlObject.toString();
  if (!options.removeSingleSlash && urlObject.pathname === "/" && !oldUrlString.endsWith("/") && urlObject.hash === "") {
    urlString = urlString.replace(/\/$/, "");
  }
  if ((options.removeTrailingSlash || urlObject.pathname === "/") && urlObject.hash === "" && options.removeSingleSlash) {
    urlString = urlString.replace(/\/$/, "");
  }
  if (hasRelativeProtocol && !options.normalizeProtocol) {
    urlString = urlString.replace(/^http:\/\//, "//");
  }
  if (options.stripProtocol) {
    urlString = urlString.replace(/^(?:https?:)?\/\//, "");
  }
  return urlString;
}

// node_modules/cacheable-request/dist/index.js
var import_get_stream = __toESM(require_get_stream(), 1);
var import_http_cache_semantics = __toESM(require_http_cache_semantics(), 1);

// node_modules/responselike/index.js
var import_node_stream = require("node:stream");

// node_modules/lowercase-keys/index.js
function lowercaseKeys(object) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key.toLowerCase(), value]));
}

// node_modules/responselike/index.js
var Response = class extends import_node_stream.Readable {
  statusCode;
  headers;
  body;
  url;
  constructor({ statusCode, headers, body, url }) {
    if (typeof statusCode !== "number") {
      throw new TypeError("Argument `statusCode` should be a number");
    }
    if (typeof headers !== "object") {
      throw new TypeError("Argument `headers` should be an object");
    }
    if (!(body instanceof Uint8Array)) {
      throw new TypeError("Argument `body` should be a buffer");
    }
    if (typeof url !== "string") {
      throw new TypeError("Argument `url` should be a string");
    }
    super({
      read() {
        this.push(body);
        this.push(null);
      }
    });
    this.statusCode = statusCode;
    this.headers = lowercaseKeys(headers);
    this.body = body;
    this.url = url;
  }
};

// node_modules/cacheable-request/dist/index.js
var import_keyv = __toESM(require_src(), 1);

// node_modules/mimic-response/index.js
var knownProperties = [
  "aborted",
  "complete",
  "headers",
  "httpVersion",
  "httpVersionMinor",
  "httpVersionMajor",
  "method",
  "rawHeaders",
  "rawTrailers",
  "setTimeout",
  "socket",
  "statusCode",
  "statusMessage",
  "trailers",
  "url"
];
function mimicResponse(fromStream, toStream) {
  if (toStream._readableState.autoDestroy) {
    throw new Error("The second stream must have the `autoDestroy` option set to `false`");
  }
  const fromProperties = /* @__PURE__ */ new Set([...Object.keys(fromStream), ...knownProperties]);
  const properties = {};
  for (const property of fromProperties) {
    if (property in toStream) {
      continue;
    }
    properties[property] = {
      get() {
        const value = fromStream[property];
        const isFunction2 = typeof value === "function";
        return isFunction2 ? value.bind(fromStream) : value;
      },
      set(value) {
        fromStream[property] = value;
      },
      enumerable: true,
      configurable: false
    };
  }
  Object.defineProperties(toStream, properties);
  fromStream.once("aborted", () => {
    toStream.destroy();
    toStream.emit("aborted");
  });
  fromStream.once("close", () => {
    if (fromStream.complete) {
      if (toStream.readable) {
        toStream.once("end", () => {
          toStream.emit("close");
        });
      } else {
        toStream.emit("close");
      }
    } else {
      toStream.emit("close");
    }
  });
  return toStream;
}

// node_modules/cacheable-request/dist/types.js
var RequestError2 = class extends Error {
  constructor(error) {
    super(error.message);
    Object.assign(this, error);
  }
};
var CacheError2 = class extends Error {
  constructor(error) {
    super(error.message);
    Object.assign(this, error);
  }
};

// node_modules/cacheable-request/dist/index.js
var CacheableRequest = class {
  constructor(cacheRequest, cacheAdapter) {
    this.hooks = /* @__PURE__ */ new Map();
    this.request = () => (options, cb) => {
      let url;
      if (typeof options === "string") {
        url = normalizeUrlObject(import_node_url.default.parse(options));
        options = {};
      } else if (options instanceof import_node_url.default.URL) {
        url = normalizeUrlObject(import_node_url.default.parse(options.toString()));
        options = {};
      } else {
        const [pathname, ...searchParts] = (options.path ?? "").split("?");
        const search = searchParts.length > 0 ? `?${searchParts.join("?")}` : "";
        url = normalizeUrlObject({ ...options, pathname, search });
      }
      options = {
        headers: {},
        method: "GET",
        cache: true,
        strictTtl: false,
        automaticFailover: false,
        ...options,
        ...urlObjectToRequestOptions(url)
      };
      options.headers = Object.fromEntries(entries(options.headers).map(([key2, value]) => [key2.toLowerCase(), value]));
      const ee = new import_node_events.default();
      const normalizedUrlString = normalizeUrl(import_node_url.default.format(url), {
        stripWWW: false,
        removeTrailingSlash: false,
        stripAuthentication: false
      });
      let key = `${options.method}:${normalizedUrlString}`;
      if (options.body && options.method !== void 0 && ["POST", "PATCH", "PUT"].includes(options.method)) {
        if (options.body instanceof import_node_stream2.default.Readable) {
          options.cache = false;
        } else {
          key += `:${import_node_crypto.default.createHash("md5").update(options.body).digest("hex")}`;
        }
      }
      let revalidate = false;
      let madeRequest = false;
      const makeRequest = (options_) => {
        madeRequest = true;
        let requestErrored = false;
        let requestErrorCallback = () => {
        };
        const requestErrorPromise = new Promise((resolve) => {
          requestErrorCallback = () => {
            if (!requestErrored) {
              requestErrored = true;
              resolve();
            }
          };
        });
        const handler = async (response) => {
          if (revalidate) {
            response.status = response.statusCode;
            const revalidatedPolicy = import_http_cache_semantics.default.fromObject(revalidate.cachePolicy).revalidatedPolicy(options_, response);
            if (!revalidatedPolicy.modified) {
              response.resume();
              await new Promise((resolve) => {
                response.once("end", resolve);
              });
              const headers = convertHeaders(revalidatedPolicy.policy.responseHeaders());
              response = new Response({ statusCode: revalidate.statusCode, headers, body: revalidate.body, url: revalidate.url });
              response.cachePolicy = revalidatedPolicy.policy;
              response.fromCache = true;
            }
          }
          if (!response.fromCache) {
            response.cachePolicy = new import_http_cache_semantics.default(options_, response, options_);
            response.fromCache = false;
          }
          let clonedResponse;
          if (options_.cache && response.cachePolicy.storable()) {
            clonedResponse = cloneResponse(response);
            (async () => {
              try {
                const bodyPromise = import_get_stream.default.buffer(response);
                await Promise.race([
                  requestErrorPromise,
                  new Promise((resolve) => response.once("end", resolve)),
                  new Promise((resolve) => response.once("close", resolve))
                  // eslint-disable-line no-promise-executor-return
                ]);
                const body = await bodyPromise;
                let value = {
                  url: response.url,
                  statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
                  body,
                  cachePolicy: response.cachePolicy.toObject()
                };
                let ttl2 = options_.strictTtl ? response.cachePolicy.timeToLive() : void 0;
                if (options_.maxTtl) {
                  ttl2 = ttl2 ? Math.min(ttl2, options_.maxTtl) : options_.maxTtl;
                }
                if (this.hooks.size > 0) {
                  for (const key_ of this.hooks.keys()) {
                    value = await this.runHook(key_, value, response);
                  }
                }
                await this.cache.set(key, value, ttl2);
              } catch (error) {
                ee.emit("error", new CacheError2(error));
              }
            })();
          } else if (options_.cache && revalidate) {
            (async () => {
              try {
                await this.cache.delete(key);
              } catch (error) {
                ee.emit("error", new CacheError2(error));
              }
            })();
          }
          ee.emit("response", clonedResponse ?? response);
          if (typeof cb === "function") {
            cb(clonedResponse ?? response);
          }
        };
        try {
          const request_ = this.cacheRequest(options_, handler);
          request_.once("error", requestErrorCallback);
          request_.once("abort", requestErrorCallback);
          request_.once("destroy", requestErrorCallback);
          ee.emit("request", request_);
        } catch (error) {
          ee.emit("error", new RequestError2(error));
        }
      };
      (async () => {
        const get = async (options_) => {
          await Promise.resolve();
          const cacheEntry = options_.cache ? await this.cache.get(key) : void 0;
          if (cacheEntry === void 0 && !options_.forceRefresh) {
            makeRequest(options_);
            return;
          }
          const policy = import_http_cache_semantics.default.fromObject(cacheEntry.cachePolicy);
          if (policy.satisfiesWithoutRevalidation(options_) && !options_.forceRefresh) {
            const headers = convertHeaders(policy.responseHeaders());
            const response = new Response({ statusCode: cacheEntry.statusCode, headers, body: cacheEntry.body, url: cacheEntry.url });
            response.cachePolicy = policy;
            response.fromCache = true;
            ee.emit("response", response);
            if (typeof cb === "function") {
              cb(response);
            }
          } else if (policy.satisfiesWithoutRevalidation(options_) && Date.now() >= policy.timeToLive() && options_.forceRefresh) {
            await this.cache.delete(key);
            options_.headers = policy.revalidationHeaders(options_);
            makeRequest(options_);
          } else {
            revalidate = cacheEntry;
            options_.headers = policy.revalidationHeaders(options_);
            makeRequest(options_);
          }
        };
        const errorHandler = (error) => ee.emit("error", new CacheError2(error));
        if (this.cache instanceof import_keyv.default) {
          const cachek = this.cache;
          cachek.once("error", errorHandler);
          ee.on("error", () => cachek.removeListener("error", errorHandler));
          ee.on("response", () => cachek.removeListener("error", errorHandler));
        }
        try {
          await get(options);
        } catch (error) {
          if (options.automaticFailover && !madeRequest) {
            makeRequest(options);
          }
          ee.emit("error", new CacheError2(error));
        }
      })();
      return ee;
    };
    this.addHook = (name, fn) => {
      if (!this.hooks.has(name)) {
        this.hooks.set(name, fn);
      }
    };
    this.removeHook = (name) => this.hooks.delete(name);
    this.getHook = (name) => this.hooks.get(name);
    this.runHook = async (name, ...args) => {
      var _a;
      return (_a = this.hooks.get(name)) == null ? void 0 : _a(...args);
    };
    if (cacheAdapter instanceof import_keyv.default) {
      this.cache = cacheAdapter;
    } else if (typeof cacheAdapter === "string") {
      this.cache = new import_keyv.default({
        uri: cacheAdapter,
        namespace: "cacheable-request"
      });
    } else {
      this.cache = new import_keyv.default({
        store: cacheAdapter,
        namespace: "cacheable-request"
      });
    }
    this.request = this.request.bind(this);
    this.cacheRequest = cacheRequest;
  }
};
var entries = Object.entries;
var cloneResponse = (response) => {
  const clone = new import_node_stream2.PassThrough({ autoDestroy: false });
  mimicResponse(response, clone);
  return response.pipe(clone);
};
var urlObjectToRequestOptions = (url) => {
  const options = { ...url };
  options.path = `${url.pathname || "/"}${url.search || ""}`;
  delete options.pathname;
  delete options.search;
  return options;
};
var normalizeUrlObject = (url) => (
  // If url was parsed by url.parse or new URL:
  // - hostname will be set
  // - host will be hostname[:port]
  // - port will be set if it was explicit in the parsed string
  // Otherwise, url was from request options:
  // - hostname or host may be set
  // - host shall not have port encoded
  {
    protocol: url.protocol,
    auth: url.auth,
    hostname: url.hostname || url.host || "localhost",
    port: url.port,
    pathname: url.pathname,
    search: url.search
  }
);
var convertHeaders = (headers) => {
  const result = [];
  for (const name of Object.keys(headers)) {
    result[name.toLowerCase()] = headers[name];
  }
  return result;
};
var dist_default2 = CacheableRequest;

// node_modules/got/dist/source/core/index.js
var import_decompress_response = __toESM(require_decompress_response(), 1);
var import_get_stream2 = __toESM(require_get_stream(), 1);

// node_modules/form-data-encoder/lib/util/isFunction.js
var isFunction = (value) => typeof value === "function";

// node_modules/form-data-encoder/lib/util/getStreamIterator.js
var isAsyncIterable = (value) => isFunction(value[Symbol.asyncIterator]);
async function* readStream(readable) {
  const reader = readable.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    yield value;
  }
}
var getStreamIterator = (source) => {
  if (isAsyncIterable(source)) {
    return source;
  }
  if (isFunction(source.getReader)) {
    return readStream(source);
  }
  throw new TypeError("Unsupported data source: Expected either ReadableStream or async iterable.");
};

// node_modules/form-data-encoder/lib/util/createBoundary.js
var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
function createBoundary() {
  let size = 16;
  let res = "";
  while (size--) {
    res += alphabet[Math.random() * alphabet.length << 0];
  }
  return res;
}

// node_modules/form-data-encoder/lib/util/normalizeValue.js
var normalizeValue = (value) => String(value).replace(/\r|\n/g, (match, i, str) => {
  if (match === "\r" && str[i + 1] !== "\n" || match === "\n" && str[i - 1] !== "\r") {
    return "\r\n";
  }
  return match;
});

// node_modules/form-data-encoder/lib/util/isPlainObject.js
var getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
function isPlainObject(value) {
  if (getType(value) !== "object") {
    return false;
  }
  const pp = Object.getPrototypeOf(value);
  if (pp === null || pp === void 0) {
    return true;
  }
  const Ctor = pp.constructor && pp.constructor.toString();
  return Ctor === Object.toString();
}

// node_modules/form-data-encoder/lib/util/proxyHeaders.js
function getProperty(target, prop) {
  if (typeof prop === "string") {
    for (const [name, value] of Object.entries(target)) {
      if (prop.toLowerCase() === name.toLowerCase()) {
        return value;
      }
    }
  }
  return void 0;
}
var proxyHeaders = (object) => new Proxy(object, {
  get: (target, prop) => getProperty(target, prop),
  has: (target, prop) => getProperty(target, prop) !== void 0
});

// node_modules/form-data-encoder/lib/util/isFormData.js
var isFormData = (value) => Boolean(value && isFunction(value.constructor) && value[Symbol.toStringTag] === "FormData" && isFunction(value.append) && isFunction(value.getAll) && isFunction(value.entries) && isFunction(value[Symbol.iterator]));

// node_modules/form-data-encoder/lib/util/escapeName.js
var escapeName = (name) => String(name).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");

// node_modules/form-data-encoder/lib/util/isFile.js
var isFile = (value) => Boolean(value && typeof value === "object" && isFunction(value.constructor) && value[Symbol.toStringTag] === "File" && isFunction(value.stream) && value.name != null);

// node_modules/form-data-encoder/lib/FormDataEncoder.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FormDataEncoder_instances;
var _FormDataEncoder_CRLF;
var _FormDataEncoder_CRLF_BYTES;
var _FormDataEncoder_CRLF_BYTES_LENGTH;
var _FormDataEncoder_DASHES;
var _FormDataEncoder_encoder;
var _FormDataEncoder_footer;
var _FormDataEncoder_form;
var _FormDataEncoder_options;
var _FormDataEncoder_getFieldHeader;
var _FormDataEncoder_getContentLength;
var defaultOptions = {
  enableAdditionalHeaders: false
};
var readonlyProp = { writable: false, configurable: false };
var FormDataEncoder = class {
  constructor(form, boundaryOrOptions, options) {
    _FormDataEncoder_instances.add(this);
    _FormDataEncoder_CRLF.set(this, "\r\n");
    _FormDataEncoder_CRLF_BYTES.set(this, void 0);
    _FormDataEncoder_CRLF_BYTES_LENGTH.set(this, void 0);
    _FormDataEncoder_DASHES.set(this, "-".repeat(2));
    _FormDataEncoder_encoder.set(this, new TextEncoder());
    _FormDataEncoder_footer.set(this, void 0);
    _FormDataEncoder_form.set(this, void 0);
    _FormDataEncoder_options.set(this, void 0);
    if (!isFormData(form)) {
      throw new TypeError("Expected first argument to be a FormData instance.");
    }
    let boundary;
    if (isPlainObject(boundaryOrOptions)) {
      options = boundaryOrOptions;
    } else {
      boundary = boundaryOrOptions;
    }
    if (!boundary) {
      boundary = createBoundary();
    }
    if (typeof boundary !== "string") {
      throw new TypeError("Expected boundary argument to be a string.");
    }
    if (options && !isPlainObject(options)) {
      throw new TypeError("Expected options argument to be an object.");
    }
    __classPrivateFieldSet(this, _FormDataEncoder_form, Array.from(form.entries()), "f");
    __classPrivateFieldSet(this, _FormDataEncoder_options, { ...defaultOptions, ...options }, "f");
    __classPrivateFieldSet(this, _FormDataEncoder_CRLF_BYTES, __classPrivateFieldGet(this, _FormDataEncoder_encoder, "f").encode(__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f")), "f");
    __classPrivateFieldSet(this, _FormDataEncoder_CRLF_BYTES_LENGTH, __classPrivateFieldGet(this, _FormDataEncoder_CRLF_BYTES, "f").byteLength, "f");
    this.boundary = `form-data-boundary-${boundary}`;
    this.contentType = `multipart/form-data; boundary=${this.boundary}`;
    __classPrivateFieldSet(this, _FormDataEncoder_footer, __classPrivateFieldGet(this, _FormDataEncoder_encoder, "f").encode(`${__classPrivateFieldGet(this, _FormDataEncoder_DASHES, "f")}${this.boundary}${__classPrivateFieldGet(this, _FormDataEncoder_DASHES, "f")}${__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f").repeat(2)}`), "f");
    const headers = {
      "Content-Type": this.contentType
    };
    const contentLength = __classPrivateFieldGet(this, _FormDataEncoder_instances, "m", _FormDataEncoder_getContentLength).call(this);
    if (contentLength) {
      this.contentLength = contentLength;
      headers["Content-Length"] = contentLength;
    }
    this.headers = proxyHeaders(Object.freeze(headers));
    Object.defineProperties(this, {
      boundary: readonlyProp,
      contentType: readonlyProp,
      contentLength: readonlyProp,
      headers: readonlyProp
    });
  }
  getContentLength() {
    return this.contentLength == null ? void 0 : Number(this.contentLength);
  }
  *values() {
    for (const [name, raw] of __classPrivateFieldGet(this, _FormDataEncoder_form, "f")) {
      const value = isFile(raw) ? raw : __classPrivateFieldGet(this, _FormDataEncoder_encoder, "f").encode(normalizeValue(raw));
      yield __classPrivateFieldGet(this, _FormDataEncoder_instances, "m", _FormDataEncoder_getFieldHeader).call(this, name, value);
      yield value;
      yield __classPrivateFieldGet(this, _FormDataEncoder_CRLF_BYTES, "f");
    }
    yield __classPrivateFieldGet(this, _FormDataEncoder_footer, "f");
  }
  async *encode() {
    for (const part of this.values()) {
      if (isFile(part)) {
        yield* getStreamIterator(part.stream());
      } else {
        yield part;
      }
    }
  }
  [(_FormDataEncoder_CRLF = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_CRLF_BYTES = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_CRLF_BYTES_LENGTH = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_DASHES = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_encoder = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_footer = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_form = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_options = /* @__PURE__ */ new WeakMap(), _FormDataEncoder_instances = /* @__PURE__ */ new WeakSet(), _FormDataEncoder_getFieldHeader = function _FormDataEncoder_getFieldHeader2(name, value) {
    let header = "";
    header += `${__classPrivateFieldGet(this, _FormDataEncoder_DASHES, "f")}${this.boundary}${__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f")}`;
    header += `Content-Disposition: form-data; name="${escapeName(name)}"`;
    if (isFile(value)) {
      header += `; filename="${escapeName(value.name)}"${__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f")}`;
      header += `Content-Type: ${value.type || "application/octet-stream"}`;
    }
    const size = isFile(value) ? value.size : value.byteLength;
    if (__classPrivateFieldGet(this, _FormDataEncoder_options, "f").enableAdditionalHeaders === true && size != null && !isNaN(size)) {
      header += `${__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f")}Content-Length: ${isFile(value) ? value.size : value.byteLength}`;
    }
    return __classPrivateFieldGet(this, _FormDataEncoder_encoder, "f").encode(`${header}${__classPrivateFieldGet(this, _FormDataEncoder_CRLF, "f").repeat(2)}`);
  }, _FormDataEncoder_getContentLength = function _FormDataEncoder_getContentLength2() {
    let length = 0;
    for (const [name, raw] of __classPrivateFieldGet(this, _FormDataEncoder_form, "f")) {
      const value = isFile(raw) ? raw : __classPrivateFieldGet(this, _FormDataEncoder_encoder, "f").encode(normalizeValue(raw));
      const size = isFile(value) ? value.size : value.byteLength;
      if (size == null || isNaN(size)) {
        return void 0;
      }
      length += __classPrivateFieldGet(this, _FormDataEncoder_instances, "m", _FormDataEncoder_getFieldHeader).call(this, name, value).byteLength;
      length += size;
      length += __classPrivateFieldGet(this, _FormDataEncoder_CRLF_BYTES_LENGTH, "f");
    }
    return String(length + __classPrivateFieldGet(this, _FormDataEncoder_footer, "f").byteLength);
  }, Symbol.iterator)]() {
    return this.values();
  }
  [Symbol.asyncIterator]() {
    return this.encode();
  }
};

// node_modules/got/dist/source/core/utils/get-body-size.js
var import_node_buffer = require("node:buffer");
var import_node_util = require("node:util");

// node_modules/got/dist/source/core/utils/is-form-data.js
function isFormData2(body) {
  return dist_default.nodeStream(body) && dist_default.function_(body.getBoundary);
}

// node_modules/got/dist/source/core/utils/get-body-size.js
async function getBodySize(body, headers) {
  if (headers && "content-length" in headers) {
    return Number(headers["content-length"]);
  }
  if (!body) {
    return 0;
  }
  if (dist_default.string(body)) {
    return import_node_buffer.Buffer.byteLength(body);
  }
  if (dist_default.buffer(body)) {
    return body.length;
  }
  if (isFormData2(body)) {
    return (0, import_node_util.promisify)(body.getLength.bind(body))();
  }
  return void 0;
}

// node_modules/got/dist/source/core/utils/proxy-events.js
function proxyEvents(from, to, events) {
  const eventFunctions = {};
  for (const event of events) {
    const eventFunction = (...args) => {
      to.emit(event, ...args);
    };
    eventFunctions[event] = eventFunction;
    from.on(event, eventFunction);
  }
  return () => {
    for (const [event, eventFunction] of Object.entries(eventFunctions)) {
      from.off(event, eventFunction);
    }
  };
}

// node_modules/got/dist/source/core/timed-out.js
var import_node_net = __toESM(require("node:net"), 1);

// node_modules/got/dist/source/core/utils/unhandle.js
function unhandle() {
  const handlers = [];
  return {
    once(origin, event, fn) {
      origin.once(event, fn);
      handlers.push({ origin, event, fn });
    },
    unhandleAll() {
      for (const handler of handlers) {
        const { origin, event, fn } = handler;
        origin.removeListener(event, fn);
      }
      handlers.length = 0;
    }
  };
}

// node_modules/got/dist/source/core/timed-out.js
var reentry = Symbol("reentry");
var noop = () => {
};
var TimeoutError2 = class extends Error {
  constructor(threshold, event) {
    super(`Timeout awaiting '${event}' for ${threshold}ms`);
    Object.defineProperty(this, "event", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: event
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = "TimeoutError";
    this.code = "ETIMEDOUT";
  }
};
function timedOut(request, delays, options) {
  if (reentry in request) {
    return noop;
  }
  request[reentry] = true;
  const cancelers = [];
  const { once, unhandleAll } = unhandle();
  const addTimeout = (delay2, callback, event) => {
    var _a;
    const timeout = setTimeout(callback, delay2, delay2, event);
    (_a = timeout.unref) == null ? void 0 : _a.call(timeout);
    const cancel = () => {
      clearTimeout(timeout);
    };
    cancelers.push(cancel);
    return cancel;
  };
  const { host, hostname } = options;
  const timeoutHandler = (delay2, event) => {
    request.destroy(new TimeoutError2(delay2, event));
  };
  const cancelTimeouts = () => {
    for (const cancel of cancelers) {
      cancel();
    }
    unhandleAll();
  };
  request.once("error", (error) => {
    cancelTimeouts();
    if (request.listenerCount("error") === 0) {
      throw error;
    }
  });
  if (delays.request !== void 0) {
    const cancelTimeout = addTimeout(delays.request, timeoutHandler, "request");
    once(request, "response", (response) => {
      once(response, "end", cancelTimeout);
    });
  }
  if (delays.socket !== void 0) {
    const { socket } = delays;
    const socketTimeoutHandler = () => {
      timeoutHandler(socket, "socket");
    };
    request.setTimeout(socket, socketTimeoutHandler);
    cancelers.push(() => {
      request.removeListener("timeout", socketTimeoutHandler);
    });
  }
  const hasLookup = delays.lookup !== void 0;
  const hasConnect = delays.connect !== void 0;
  const hasSecureConnect = delays.secureConnect !== void 0;
  const hasSend = delays.send !== void 0;
  if (hasLookup || hasConnect || hasSecureConnect || hasSend) {
    once(request, "socket", (socket) => {
      const { socketPath } = request;
      if (socket.connecting) {
        const hasPath = Boolean(socketPath ?? import_node_net.default.isIP(hostname ?? host ?? "") !== 0);
        if (hasLookup && !hasPath && socket.address().address === void 0) {
          const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, "lookup");
          once(socket, "lookup", cancelTimeout);
        }
        if (hasConnect) {
          const timeConnect = () => addTimeout(delays.connect, timeoutHandler, "connect");
          if (hasPath) {
            once(socket, "connect", timeConnect());
          } else {
            once(socket, "lookup", (error) => {
              if (error === null) {
                once(socket, "connect", timeConnect());
              }
            });
          }
        }
        if (hasSecureConnect && options.protocol === "https:") {
          once(socket, "connect", () => {
            const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, "secureConnect");
            once(socket, "secureConnect", cancelTimeout);
          });
        }
      }
      if (hasSend) {
        const timeRequest = () => addTimeout(delays.send, timeoutHandler, "send");
        if (socket.connecting) {
          once(socket, "connect", () => {
            once(request, "upload-complete", timeRequest());
          });
        } else {
          once(request, "upload-complete", timeRequest());
        }
      }
    });
  }
  if (delays.response !== void 0) {
    once(request, "upload-complete", () => {
      const cancelTimeout = addTimeout(delays.response, timeoutHandler, "response");
      once(request, "response", cancelTimeout);
    });
  }
  if (delays.read !== void 0) {
    once(request, "response", (response) => {
      const cancelTimeout = addTimeout(delays.read, timeoutHandler, "read");
      once(response, "end", cancelTimeout);
    });
  }
  return cancelTimeouts;
}

// node_modules/got/dist/source/core/utils/url-to-options.js
function urlToOptions(url) {
  url = url;
  const options = {
    protocol: url.protocol,
    hostname: dist_default.string(url.hostname) && url.hostname.startsWith("[") ? url.hostname.slice(1, -1) : url.hostname,
    host: url.host,
    hash: url.hash,
    search: url.search,
    pathname: url.pathname,
    href: url.href,
    path: `${url.pathname || ""}${url.search || ""}`
  };
  if (dist_default.string(url.port) && url.port.length > 0) {
    options.port = Number(url.port);
  }
  if (url.username || url.password) {
    options.auth = `${url.username || ""}:${url.password || ""}`;
  }
  return options;
}

// node_modules/got/dist/source/core/utils/weakable-map.js
var WeakableMap = class {
  constructor() {
    Object.defineProperty(this, "weakMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "map", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.weakMap = /* @__PURE__ */ new WeakMap();
    this.map = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    if (typeof key === "object") {
      this.weakMap.set(key, value);
    } else {
      this.map.set(key, value);
    }
  }
  get(key) {
    if (typeof key === "object") {
      return this.weakMap.get(key);
    }
    return this.map.get(key);
  }
  has(key) {
    if (typeof key === "object") {
      return this.weakMap.has(key);
    }
    return this.map.has(key);
  }
};

// node_modules/got/dist/source/core/calculate-retry-delay.js
var calculateRetryDelay = ({ attemptCount, retryOptions, error, retryAfter, computedValue }) => {
  if (error.name === "RetryError") {
    return 1;
  }
  if (attemptCount > retryOptions.limit) {
    return 0;
  }
  const hasMethod = retryOptions.methods.includes(error.options.method);
  const hasErrorCode = retryOptions.errorCodes.includes(error.code);
  const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
  if (!hasMethod || !hasErrorCode && !hasStatusCode) {
    return 0;
  }
  if (error.response) {
    if (retryAfter) {
      if (retryAfter > computedValue) {
        return 0;
      }
      return retryAfter;
    }
    if (error.response.statusCode === 413) {
      return 0;
    }
  }
  const noise = Math.random() * retryOptions.noise;
  return Math.min(2 ** (attemptCount - 1) * 1e3, retryOptions.backoffLimit) + noise;
};
var calculate_retry_delay_default = calculateRetryDelay;

// node_modules/got/dist/source/core/options.js
var import_node_process = __toESM(require("node:process"), 1);
var import_node_util3 = require("node:util");
var import_node_tls = require("node:tls");
var import_node_http = __toESM(require("node:http"), 1);
var import_node_https = __toESM(require("node:https"), 1);

// node_modules/cacheable-lookup/source/index.js
var import_node_dns = require("node:dns");
var import_node_util2 = require("node:util");
var import_node_os = __toESM(require("node:os"), 1);
var { Resolver: AsyncResolver } = import_node_dns.promises;
var kCacheableLookupCreateConnection = Symbol("cacheableLookupCreateConnection");
var kCacheableLookupInstance = Symbol("cacheableLookupInstance");
var kExpires = Symbol("expires");
var supportsALL = typeof import_node_dns.ALL === "number";
var verifyAgent = (agent) => {
  if (!(agent && typeof agent.createConnection === "function")) {
    throw new Error("Expected an Agent instance as the first argument");
  }
};
var map4to6 = (entries2) => {
  for (const entry of entries2) {
    if (entry.family === 6) {
      continue;
    }
    entry.address = `::ffff:${entry.address}`;
    entry.family = 6;
  }
};
var getIfaceInfo = () => {
  let has4 = false;
  let has6 = false;
  for (const device of Object.values(import_node_os.default.networkInterfaces())) {
    for (const iface of device) {
      if (iface.internal) {
        continue;
      }
      if (iface.family === "IPv6") {
        has6 = true;
      } else {
        has4 = true;
      }
      if (has4 && has6) {
        return { has4, has6 };
      }
    }
  }
  return { has4, has6 };
};
var isIterable = (map) => {
  return Symbol.iterator in map;
};
var ignoreNoResultErrors = (dnsPromise) => {
  return dnsPromise.catch((error) => {
    if (error.code === "ENODATA" || error.code === "ENOTFOUND" || error.code === "ENOENT") {
      return [];
    }
    throw error;
  });
};
var ttl = { ttl: true };
var all = { all: true };
var all4 = { all: true, family: 4 };
var all6 = { all: true, family: 6 };
var CacheableLookup = class {
  constructor({
    cache = /* @__PURE__ */ new Map(),
    maxTtl = Infinity,
    fallbackDuration = 3600,
    errorTtl = 0.15,
    resolver = new AsyncResolver(),
    lookup: lookup2 = import_node_dns.lookup
  } = {}) {
    this.maxTtl = maxTtl;
    this.errorTtl = errorTtl;
    this._cache = cache;
    this._resolver = resolver;
    this._dnsLookup = lookup2 && (0, import_node_util2.promisify)(lookup2);
    this.stats = {
      cache: 0,
      query: 0
    };
    if (this._resolver instanceof AsyncResolver) {
      this._resolve4 = this._resolver.resolve4.bind(this._resolver);
      this._resolve6 = this._resolver.resolve6.bind(this._resolver);
    } else {
      this._resolve4 = (0, import_node_util2.promisify)(this._resolver.resolve4.bind(this._resolver));
      this._resolve6 = (0, import_node_util2.promisify)(this._resolver.resolve6.bind(this._resolver));
    }
    this._iface = getIfaceInfo();
    this._pending = {};
    this._nextRemovalTime = false;
    this._hostnamesToFallback = /* @__PURE__ */ new Set();
    this.fallbackDuration = fallbackDuration;
    if (fallbackDuration > 0) {
      const interval = setInterval(() => {
        this._hostnamesToFallback.clear();
      }, fallbackDuration * 1e3);
      if (interval.unref) {
        interval.unref();
      }
      this._fallbackInterval = interval;
    }
    this.lookup = this.lookup.bind(this);
    this.lookupAsync = this.lookupAsync.bind(this);
  }
  set servers(servers) {
    this.clear();
    this._resolver.setServers(servers);
  }
  get servers() {
    return this._resolver.getServers();
  }
  lookup(hostname, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (typeof options === "number") {
      options = {
        family: options
      };
    }
    if (!callback) {
      throw new Error("Callback must be a function.");
    }
    this.lookupAsync(hostname, options).then((result) => {
      if (options.all) {
        callback(null, result);
      } else {
        callback(null, result.address, result.family, result.expires, result.ttl, result.source);
      }
    }, callback);
  }
  async lookupAsync(hostname, options = {}) {
    if (typeof options === "number") {
      options = {
        family: options
      };
    }
    let cached = await this.query(hostname);
    if (options.family === 6) {
      const filtered = cached.filter((entry) => entry.family === 6);
      if (options.hints & import_node_dns.V4MAPPED) {
        if (supportsALL && options.hints & import_node_dns.ALL || filtered.length === 0) {
          map4to6(cached);
        } else {
          cached = filtered;
        }
      } else {
        cached = filtered;
      }
    } else if (options.family === 4) {
      cached = cached.filter((entry) => entry.family === 4);
    }
    if (options.hints & import_node_dns.ADDRCONFIG) {
      const { _iface } = this;
      cached = cached.filter((entry) => entry.family === 6 ? _iface.has6 : _iface.has4);
    }
    if (cached.length === 0) {
      const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
      error.code = "ENOTFOUND";
      error.hostname = hostname;
      throw error;
    }
    if (options.all) {
      return cached;
    }
    return cached[0];
  }
  async query(hostname) {
    let source = "cache";
    let cached = await this._cache.get(hostname);
    if (cached) {
      this.stats.cache++;
    }
    if (!cached) {
      const pending = this._pending[hostname];
      if (pending) {
        this.stats.cache++;
        cached = await pending;
      } else {
        source = "query";
        const newPromise = this.queryAndCache(hostname);
        this._pending[hostname] = newPromise;
        this.stats.query++;
        try {
          cached = await newPromise;
        } finally {
          delete this._pending[hostname];
        }
      }
    }
    cached = cached.map((entry) => {
      return { ...entry, source };
    });
    return cached;
  }
  async _resolve(hostname) {
    const [A, AAAA] = await Promise.all([
      ignoreNoResultErrors(this._resolve4(hostname, ttl)),
      ignoreNoResultErrors(this._resolve6(hostname, ttl))
    ]);
    let aTtl = 0;
    let aaaaTtl = 0;
    let cacheTtl = 0;
    const now = Date.now();
    for (const entry of A) {
      entry.family = 4;
      entry.expires = now + entry.ttl * 1e3;
      aTtl = Math.max(aTtl, entry.ttl);
    }
    for (const entry of AAAA) {
      entry.family = 6;
      entry.expires = now + entry.ttl * 1e3;
      aaaaTtl = Math.max(aaaaTtl, entry.ttl);
    }
    if (A.length > 0) {
      if (AAAA.length > 0) {
        cacheTtl = Math.min(aTtl, aaaaTtl);
      } else {
        cacheTtl = aTtl;
      }
    } else {
      cacheTtl = aaaaTtl;
    }
    return {
      entries: [
        ...A,
        ...AAAA
      ],
      cacheTtl
    };
  }
  async _lookup(hostname) {
    try {
      const [A, AAAA] = await Promise.all([
        // Passing {all: true} doesn't return all IPv4 and IPv6 entries.
        // See https://github.com/szmarczak/cacheable-lookup/issues/42
        ignoreNoResultErrors(this._dnsLookup(hostname, all4)),
        ignoreNoResultErrors(this._dnsLookup(hostname, all6))
      ]);
      return {
        entries: [
          ...A,
          ...AAAA
        ],
        cacheTtl: 0
      };
    } catch {
      return {
        entries: [],
        cacheTtl: 0
      };
    }
  }
  async _set(hostname, data, cacheTtl) {
    if (this.maxTtl > 0 && cacheTtl > 0) {
      cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1e3;
      data[kExpires] = Date.now() + cacheTtl;
      try {
        await this._cache.set(hostname, data, cacheTtl);
      } catch (error) {
        this.lookupAsync = async () => {
          const cacheError = new Error("Cache Error. Please recreate the CacheableLookup instance.");
          cacheError.cause = error;
          throw cacheError;
        };
      }
      if (isIterable(this._cache)) {
        this._tick(cacheTtl);
      }
    }
  }
  async queryAndCache(hostname) {
    if (this._hostnamesToFallback.has(hostname)) {
      return this._dnsLookup(hostname, all);
    }
    let query = await this._resolve(hostname);
    if (query.entries.length === 0 && this._dnsLookup) {
      query = await this._lookup(hostname);
      if (query.entries.length !== 0 && this.fallbackDuration > 0) {
        this._hostnamesToFallback.add(hostname);
      }
    }
    const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
    await this._set(hostname, query.entries, cacheTtl);
    return query.entries;
  }
  _tick(ms) {
    const nextRemovalTime = this._nextRemovalTime;
    if (!nextRemovalTime || ms < nextRemovalTime) {
      clearTimeout(this._removalTimeout);
      this._nextRemovalTime = ms;
      this._removalTimeout = setTimeout(() => {
        this._nextRemovalTime = false;
        let nextExpiry = Infinity;
        const now = Date.now();
        for (const [hostname, entries2] of this._cache) {
          const expires = entries2[kExpires];
          if (now >= expires) {
            this._cache.delete(hostname);
          } else if (expires < nextExpiry) {
            nextExpiry = expires;
          }
        }
        if (nextExpiry !== Infinity) {
          this._tick(nextExpiry - now);
        }
      }, ms);
      if (this._removalTimeout.unref) {
        this._removalTimeout.unref();
      }
    }
  }
  install(agent) {
    verifyAgent(agent);
    if (kCacheableLookupCreateConnection in agent) {
      throw new Error("CacheableLookup has been already installed");
    }
    agent[kCacheableLookupCreateConnection] = agent.createConnection;
    agent[kCacheableLookupInstance] = this;
    agent.createConnection = (options, callback) => {
      if (!("lookup" in options)) {
        options.lookup = this.lookup;
      }
      return agent[kCacheableLookupCreateConnection](options, callback);
    };
  }
  uninstall(agent) {
    verifyAgent(agent);
    if (agent[kCacheableLookupCreateConnection]) {
      if (agent[kCacheableLookupInstance] !== this) {
        throw new Error("The agent is not owned by this CacheableLookup instance");
      }
      agent.createConnection = agent[kCacheableLookupCreateConnection];
      delete agent[kCacheableLookupCreateConnection];
      delete agent[kCacheableLookupInstance];
    }
  }
  updateInterfaceInfo() {
    const { _iface } = this;
    this._iface = getIfaceInfo();
    if (_iface.has4 && !this._iface.has4 || _iface.has6 && !this._iface.has6) {
      this._cache.clear();
    }
  }
  clear(hostname) {
    if (hostname) {
      this._cache.delete(hostname);
      return;
    }
    this._cache.clear();
  }
};

// node_modules/got/dist/source/core/options.js
var import_http2_wrapper = __toESM(require_source2(), 1);

// node_modules/got/dist/source/core/parse-link-header.js
function parseLinkHeader(link) {
  const parsed = [];
  const items = link.split(",");
  for (const item of items) {
    const [rawUriReference, ...rawLinkParameters] = item.split(";");
    const trimmedUriReference = rawUriReference.trim();
    if (trimmedUriReference[0] !== "<" || trimmedUriReference[trimmedUriReference.length - 1] !== ">") {
      throw new Error(`Invalid format of the Link header reference: ${trimmedUriReference}`);
    }
    const reference = trimmedUriReference.slice(1, -1);
    const parameters = {};
    if (rawLinkParameters.length === 0) {
      throw new Error(`Unexpected end of Link header parameters: ${rawLinkParameters.join(";")}`);
    }
    for (const rawParameter of rawLinkParameters) {
      const trimmedRawParameter = rawParameter.trim();
      const center = trimmedRawParameter.indexOf("=");
      if (center === -1) {
        throw new Error(`Failed to parse Link header: ${link}`);
      }
      const name = trimmedRawParameter.slice(0, center).trim();
      const value = trimmedRawParameter.slice(center + 1).trim();
      parameters[name] = value;
    }
    parsed.push({
      reference,
      parameters
    });
  }
  return parsed;
}

// node_modules/got/dist/source/core/options.js
var [major, minor] = import_node_process.default.versions.node.split(".").map(Number);
function validateSearchParameters(searchParameters) {
  for (const key in searchParameters) {
    const value = searchParameters[key];
    assert.any([dist_default.string, dist_default.number, dist_default.boolean, dist_default.null_, dist_default.undefined], value);
  }
}
var globalCache = /* @__PURE__ */ new Map();
var globalDnsCache;
var getGlobalDnsCache = () => {
  if (globalDnsCache) {
    return globalDnsCache;
  }
  globalDnsCache = new CacheableLookup();
  return globalDnsCache;
};
var defaultInternals = {
  request: void 0,
  agent: {
    http: void 0,
    https: void 0,
    http2: void 0
  },
  h2session: void 0,
  decompress: true,
  timeout: {
    connect: void 0,
    lookup: void 0,
    read: void 0,
    request: void 0,
    response: void 0,
    secureConnect: void 0,
    send: void 0,
    socket: void 0
  },
  prefixUrl: "",
  body: void 0,
  form: void 0,
  json: void 0,
  cookieJar: void 0,
  ignoreInvalidCookies: false,
  searchParams: void 0,
  dnsLookup: void 0,
  dnsCache: void 0,
  context: {},
  hooks: {
    init: [],
    beforeRequest: [],
    beforeError: [],
    beforeRedirect: [],
    beforeRetry: [],
    afterResponse: []
  },
  followRedirect: true,
  maxRedirects: 10,
  cache: void 0,
  throwHttpErrors: true,
  username: "",
  password: "",
  http2: false,
  allowGetBody: false,
  headers: {
    "user-agent": "got (https://github.com/sindresorhus/got)"
  },
  methodRewriting: false,
  dnsLookupIpVersion: void 0,
  parseJson: JSON.parse,
  stringifyJson: JSON.stringify,
  retry: {
    limit: 2,
    methods: [
      "GET",
      "PUT",
      "HEAD",
      "DELETE",
      "OPTIONS",
      "TRACE"
    ],
    statusCodes: [
      408,
      413,
      429,
      500,
      502,
      503,
      504,
      521,
      522,
      524
    ],
    errorCodes: [
      "ETIMEDOUT",
      "ECONNRESET",
      "EADDRINUSE",
      "ECONNREFUSED",
      "EPIPE",
      "ENOTFOUND",
      "ENETUNREACH",
      "EAI_AGAIN"
    ],
    maxRetryAfter: void 0,
    calculateDelay: ({ computedValue }) => computedValue,
    backoffLimit: Number.POSITIVE_INFINITY,
    noise: 100
  },
  localAddress: void 0,
  method: "GET",
  createConnection: void 0,
  cacheOptions: {
    shared: void 0,
    cacheHeuristic: void 0,
    immutableMinTimeToLive: void 0,
    ignoreCargoCult: void 0
  },
  https: {
    alpnProtocols: void 0,
    rejectUnauthorized: void 0,
    checkServerIdentity: void 0,
    certificateAuthority: void 0,
    key: void 0,
    certificate: void 0,
    passphrase: void 0,
    pfx: void 0,
    ciphers: void 0,
    honorCipherOrder: void 0,
    minVersion: void 0,
    maxVersion: void 0,
    signatureAlgorithms: void 0,
    tlsSessionLifetime: void 0,
    dhparam: void 0,
    ecdhCurve: void 0,
    certificateRevocationLists: void 0
  },
  encoding: void 0,
  resolveBodyOnly: false,
  isStream: false,
  responseType: "text",
  url: void 0,
  pagination: {
    transform(response) {
      if (response.request.options.responseType === "json") {
        return response.body;
      }
      return JSON.parse(response.body);
    },
    paginate({ response }) {
      const rawLinkHeader = response.headers.link;
      if (typeof rawLinkHeader !== "string" || rawLinkHeader.trim() === "") {
        return false;
      }
      const parsed = parseLinkHeader(rawLinkHeader);
      const next = parsed.find((entry) => entry.parameters.rel === "next" || entry.parameters.rel === '"next"');
      if (next) {
        return {
          url: new URL(next.reference, response.url)
        };
      }
      return false;
    },
    filter: () => true,
    shouldContinue: () => true,
    countLimit: Number.POSITIVE_INFINITY,
    backoff: 0,
    requestLimit: 1e4,
    stackAllItems: false
  },
  setHost: true,
  maxHeaderSize: void 0,
  signal: void 0,
  enableUnixSockets: false
};
var cloneInternals = (internals) => {
  const { hooks, retry } = internals;
  const result = {
    ...internals,
    context: { ...internals.context },
    cacheOptions: { ...internals.cacheOptions },
    https: { ...internals.https },
    agent: { ...internals.agent },
    headers: { ...internals.headers },
    retry: {
      ...retry,
      errorCodes: [...retry.errorCodes],
      methods: [...retry.methods],
      statusCodes: [...retry.statusCodes]
    },
    timeout: { ...internals.timeout },
    hooks: {
      init: [...hooks.init],
      beforeRequest: [...hooks.beforeRequest],
      beforeError: [...hooks.beforeError],
      beforeRedirect: [...hooks.beforeRedirect],
      beforeRetry: [...hooks.beforeRetry],
      afterResponse: [...hooks.afterResponse]
    },
    searchParams: internals.searchParams ? new URLSearchParams(internals.searchParams) : void 0,
    pagination: { ...internals.pagination }
  };
  if (result.url !== void 0) {
    result.prefixUrl = "";
  }
  return result;
};
var cloneRaw = (raw) => {
  const { hooks, retry } = raw;
  const result = { ...raw };
  if (dist_default.object(raw.context)) {
    result.context = { ...raw.context };
  }
  if (dist_default.object(raw.cacheOptions)) {
    result.cacheOptions = { ...raw.cacheOptions };
  }
  if (dist_default.object(raw.https)) {
    result.https = { ...raw.https };
  }
  if (dist_default.object(raw.cacheOptions)) {
    result.cacheOptions = { ...result.cacheOptions };
  }
  if (dist_default.object(raw.agent)) {
    result.agent = { ...raw.agent };
  }
  if (dist_default.object(raw.headers)) {
    result.headers = { ...raw.headers };
  }
  if (dist_default.object(retry)) {
    result.retry = { ...retry };
    if (dist_default.array(retry.errorCodes)) {
      result.retry.errorCodes = [...retry.errorCodes];
    }
    if (dist_default.array(retry.methods)) {
      result.retry.methods = [...retry.methods];
    }
    if (dist_default.array(retry.statusCodes)) {
      result.retry.statusCodes = [...retry.statusCodes];
    }
  }
  if (dist_default.object(raw.timeout)) {
    result.timeout = { ...raw.timeout };
  }
  if (dist_default.object(hooks)) {
    result.hooks = {
      ...hooks
    };
    if (dist_default.array(hooks.init)) {
      result.hooks.init = [...hooks.init];
    }
    if (dist_default.array(hooks.beforeRequest)) {
      result.hooks.beforeRequest = [...hooks.beforeRequest];
    }
    if (dist_default.array(hooks.beforeError)) {
      result.hooks.beforeError = [...hooks.beforeError];
    }
    if (dist_default.array(hooks.beforeRedirect)) {
      result.hooks.beforeRedirect = [...hooks.beforeRedirect];
    }
    if (dist_default.array(hooks.beforeRetry)) {
      result.hooks.beforeRetry = [...hooks.beforeRetry];
    }
    if (dist_default.array(hooks.afterResponse)) {
      result.hooks.afterResponse = [...hooks.afterResponse];
    }
  }
  if (dist_default.object(raw.pagination)) {
    result.pagination = { ...raw.pagination };
  }
  return result;
};
var getHttp2TimeoutOption = (internals) => {
  const delays = [internals.timeout.socket, internals.timeout.connect, internals.timeout.lookup, internals.timeout.request, internals.timeout.secureConnect].filter((delay2) => typeof delay2 === "number");
  if (delays.length > 0) {
    return Math.min(...delays);
  }
  return void 0;
};
var init = (options, withOptions, self) => {
  var _a;
  const initHooks = (_a = options.hooks) == null ? void 0 : _a.init;
  if (initHooks) {
    for (const hook of initHooks) {
      hook(withOptions, self);
    }
  }
};
var Options = class _Options {
  constructor(input, options, defaults2) {
    Object.defineProperty(this, "_unixOptions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_internals", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_merging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_init", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    assert.any([dist_default.string, dist_default.urlInstance, dist_default.object, dist_default.undefined], input);
    assert.any([dist_default.object, dist_default.undefined], options);
    assert.any([dist_default.object, dist_default.undefined], defaults2);
    if (input instanceof _Options || options instanceof _Options) {
      throw new TypeError("The defaults must be passed as the third argument");
    }
    this._internals = cloneInternals((defaults2 == null ? void 0 : defaults2._internals) ?? defaults2 ?? defaultInternals);
    this._init = [...(defaults2 == null ? void 0 : defaults2._init) ?? []];
    this._merging = false;
    this._unixOptions = void 0;
    try {
      if (dist_default.plainObject(input)) {
        try {
          this.merge(input);
          this.merge(options);
        } finally {
          this.url = input.url;
        }
      } else {
        try {
          this.merge(options);
        } finally {
          if ((options == null ? void 0 : options.url) !== void 0) {
            if (input === void 0) {
              this.url = options.url;
            } else {
              throw new TypeError("The `url` option is mutually exclusive with the `input` argument");
            }
          } else if (input !== void 0) {
            this.url = input;
          }
        }
      }
    } catch (error) {
      error.options = this;
      throw error;
    }
  }
  merge(options) {
    if (!options) {
      return;
    }
    if (options instanceof _Options) {
      for (const init2 of options._init) {
        this.merge(init2);
      }
      return;
    }
    options = cloneRaw(options);
    init(this, options, this);
    init(options, options, this);
    this._merging = true;
    if ("isStream" in options) {
      this.isStream = options.isStream;
    }
    try {
      let push = false;
      for (const key in options) {
        if (key === "mutableDefaults" || key === "handlers") {
          continue;
        }
        if (key === "url") {
          continue;
        }
        if (!(key in this)) {
          throw new Error(`Unexpected option: ${key}`);
        }
        const value = options[key];
        if (value === void 0) {
          continue;
        }
        this[key] = value;
        push = true;
      }
      if (push) {
        this._init.push(options);
      }
    } finally {
      this._merging = false;
    }
  }
  /**
      Custom request function.
      The main purpose of this is to [support HTTP2 using a wrapper](https://github.com/szmarczak/http2-wrapper).
  
      @default http.request | https.request
      */
  get request() {
    return this._internals.request;
  }
  set request(value) {
    assert.any([dist_default.function_, dist_default.undefined], value);
    this._internals.request = value;
  }
  /**
      An object representing `http`, `https` and `http2` keys for [`http.Agent`](https://nodejs.org/api/http.html#http_class_http_agent), [`https.Agent`](https://nodejs.org/api/https.html#https_class_https_agent) and [`http2wrapper.Agent`](https://github.com/szmarczak/http2-wrapper#new-http2agentoptions) instance.
      This is necessary because a request to one protocol might redirect to another.
      In such a scenario, Got will switch over to the right protocol agent for you.
  
      If a key is not present, it will default to a global agent.
  
      @example
      ```
      import got from 'got';
      import HttpAgent from 'agentkeepalive';
  
      const {HttpsAgent} = HttpAgent;
  
      await got('https://sindresorhus.com', {
          agent: {
              http: new HttpAgent(),
              https: new HttpsAgent()
          }
      });
      ```
      */
  get agent() {
    return this._internals.agent;
  }
  set agent(value) {
    assert.plainObject(value);
    for (const key in value) {
      if (!(key in this._internals.agent)) {
        throw new TypeError(`Unexpected agent option: ${key}`);
      }
      assert.any([dist_default.object, dist_default.undefined], value[key]);
    }
    if (this._merging) {
      Object.assign(this._internals.agent, value);
    } else {
      this._internals.agent = { ...value };
    }
  }
  get h2session() {
    return this._internals.h2session;
  }
  set h2session(value) {
    this._internals.h2session = value;
  }
  /**
      Decompress the response automatically.
  
      This will set the `accept-encoding` header to `gzip, deflate, br` unless you set it yourself.
  
      If this is disabled, a compressed response is returned as a `Buffer`.
      This may be useful if you want to handle decompression yourself or stream the raw compressed data.
  
      @default true
      */
  get decompress() {
    return this._internals.decompress;
  }
  set decompress(value) {
    assert.boolean(value);
    this._internals.decompress = value;
  }
  /**
      Milliseconds to wait for the server to end the response before aborting the request with `got.TimeoutError` error (a.k.a. `request` property).
      By default, there's no timeout.
  
      This also accepts an `object` with the following fields to constrain the duration of each phase of the request lifecycle:
  
      - `lookup` starts when a socket is assigned and ends when the hostname has been resolved.
          Does not apply when using a Unix domain socket.
      - `connect` starts when `lookup` completes (or when the socket is assigned if lookup does not apply to the request) and ends when the socket is connected.
      - `secureConnect` starts when `connect` completes and ends when the handshaking process completes (HTTPS only).
      - `socket` starts when the socket is connected. See [request.setTimeout](https://nodejs.org/api/http.html#http_request_settimeout_timeout_callback).
      - `response` starts when the request has been written to the socket and ends when the response headers are received.
      - `send` starts when the socket is connected and ends with the request has been written to the socket.
      - `request` starts when the request is initiated and ends when the response's end event fires.
      */
  get timeout() {
    return this._internals.timeout;
  }
  set timeout(value) {
    assert.plainObject(value);
    for (const key in value) {
      if (!(key in this._internals.timeout)) {
        throw new Error(`Unexpected timeout option: ${key}`);
      }
      assert.any([dist_default.number, dist_default.undefined], value[key]);
    }
    if (this._merging) {
      Object.assign(this._internals.timeout, value);
    } else {
      this._internals.timeout = { ...value };
    }
  }
  /**
      When specified, `prefixUrl` will be prepended to `url`.
      The prefix can be any valid URL, either relative or absolute.
      A trailing slash `/` is optional - one will be added automatically.
  
      __Note__: `prefixUrl` will be ignored if the `url` argument is a URL instance.
  
      __Note__: Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion.
      For example, when the prefix URL is `https://example.com/foo` and the input is `/bar`, there's ambiguity whether the resulting URL would become `https://example.com/foo/bar` or `https://example.com/bar`.
      The latter is used by browsers.
  
      __Tip__: Useful when used with `got.extend()` to create niche-specific Got instances.
  
      __Tip__: You can change `prefixUrl` using hooks as long as the URL still includes the `prefixUrl`.
      If the URL doesn't include it anymore, it will throw.
  
      @example
      ```
      import got from 'got';
  
      await got('unicorn', {prefixUrl: 'https://cats.com'});
      //=> 'https://cats.com/unicorn'
  
      const instance = got.extend({
          prefixUrl: 'https://google.com'
      });
  
      await instance('unicorn', {
          hooks: {
              beforeRequest: [
                  options => {
                      options.prefixUrl = 'https://cats.com';
                  }
              ]
          }
      });
      //=> 'https://cats.com/unicorn'
      ```
      */
  get prefixUrl() {
    return this._internals.prefixUrl;
  }
  set prefixUrl(value) {
    assert.any([dist_default.string, dist_default.urlInstance], value);
    if (value === "") {
      this._internals.prefixUrl = "";
      return;
    }
    value = value.toString();
    if (!value.endsWith("/")) {
      value += "/";
    }
    if (this._internals.prefixUrl && this._internals.url) {
      const { href } = this._internals.url;
      this._internals.url.href = value + href.slice(this._internals.prefixUrl.length);
    }
    this._internals.prefixUrl = value;
  }
  /**
      __Note #1__: The `body` option cannot be used with the `json` or `form` option.
  
      __Note #2__: If you provide this option, `got.stream()` will be read-only.
  
      __Note #3__: If you provide a payload with the `GET` or `HEAD` method, it will throw a `TypeError` unless the method is `GET` and the `allowGetBody` option is set to `true`.
  
      __Note #4__: This option is not enumerable and will not be merged with the instance defaults.
  
      The `content-length` header will be automatically set if `body` is a `string` / `Buffer` / [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) / [`form-data` instance](https://github.com/form-data/form-data), and `content-length` and `transfer-encoding` are not manually set in `options.headers`.
  
      Since Got 12, the `content-length` is not automatically set when `body` is a `fs.createReadStream`.
      */
  get body() {
    return this._internals.body;
  }
  set body(value) {
    assert.any([dist_default.string, dist_default.buffer, dist_default.nodeStream, dist_default.generator, dist_default.asyncGenerator, isFormData, dist_default.undefined], value);
    if (dist_default.nodeStream(value)) {
      assert.truthy(value.readable);
    }
    if (value !== void 0) {
      assert.undefined(this._internals.form);
      assert.undefined(this._internals.json);
    }
    this._internals.body = value;
  }
  /**
      The form body is converted to a query string using [`(new URLSearchParams(object)).toString()`](https://nodejs.org/api/url.html#url_constructor_new_urlsearchparams_obj).
  
      If the `Content-Type` header is not present, it will be set to `application/x-www-form-urlencoded`.
  
      __Note #1__: If you provide this option, `got.stream()` will be read-only.
  
      __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
      */
  get form() {
    return this._internals.form;
  }
  set form(value) {
    assert.any([dist_default.plainObject, dist_default.undefined], value);
    if (value !== void 0) {
      assert.undefined(this._internals.body);
      assert.undefined(this._internals.json);
    }
    this._internals.form = value;
  }
  /**
      JSON body. If the `Content-Type` header is not set, it will be set to `application/json`.
  
      __Note #1__: If you provide this option, `got.stream()` will be read-only.
  
      __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
      */
  get json() {
    return this._internals.json;
  }
  set json(value) {
    if (value !== void 0) {
      assert.undefined(this._internals.body);
      assert.undefined(this._internals.form);
    }
    this._internals.json = value;
  }
  /**
      The URL to request, as a string, a [`https.request` options object](https://nodejs.org/api/https.html#https_https_request_options_callback), or a [WHATWG `URL`](https://nodejs.org/api/url.html#url_class_url).
  
      Properties from `options` will override properties in the parsed `url`.
  
      If no protocol is specified, it will throw a `TypeError`.
  
      __Note__: The query string is **not** parsed as search params.
  
      @example
      ```
      await got('https://example.com/?query=a b'); //=> https://example.com/?query=a%20b
      await got('https://example.com/', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
  
      // The query string is overridden by `searchParams`
      await got('https://example.com/?query=a b', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
      ```
      */
  get url() {
    return this._internals.url;
  }
  set url(value) {
    assert.any([dist_default.string, dist_default.urlInstance, dist_default.undefined], value);
    if (value === void 0) {
      this._internals.url = void 0;
      return;
    }
    if (dist_default.string(value) && value.startsWith("/")) {
      throw new Error("`url` must not start with a slash");
    }
    const urlString = `${this.prefixUrl}${value.toString()}`;
    const url = new URL(urlString);
    this._internals.url = url;
    if (url.protocol === "unix:") {
      url.href = `http://unix${url.pathname}${url.search}`;
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      const error = new Error(`Unsupported protocol: ${url.protocol}`);
      error.code = "ERR_UNSUPPORTED_PROTOCOL";
      throw error;
    }
    if (this._internals.username) {
      url.username = this._internals.username;
      this._internals.username = "";
    }
    if (this._internals.password) {
      url.password = this._internals.password;
      this._internals.password = "";
    }
    if (this._internals.searchParams) {
      url.search = this._internals.searchParams.toString();
      this._internals.searchParams = void 0;
    }
    if (url.hostname === "unix") {
      if (!this._internals.enableUnixSockets) {
        throw new Error("Using UNIX domain sockets but option `enableUnixSockets` is not enabled");
      }
      const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
      if (matches == null ? void 0 : matches.groups) {
        const { socketPath, path } = matches.groups;
        this._unixOptions = {
          socketPath,
          path,
          host: ""
        };
      } else {
        this._unixOptions = void 0;
      }
      return;
    }
    this._unixOptions = void 0;
  }
  /**
      Cookie support. You don't have to care about parsing or how to store them.
  
      __Note__: If you provide this option, `options.headers.cookie` will be overridden.
      */
  get cookieJar() {
    return this._internals.cookieJar;
  }
  set cookieJar(value) {
    assert.any([dist_default.object, dist_default.undefined], value);
    if (value === void 0) {
      this._internals.cookieJar = void 0;
      return;
    }
    let { setCookie, getCookieString } = value;
    assert.function_(setCookie);
    assert.function_(getCookieString);
    if (setCookie.length === 4 && getCookieString.length === 0) {
      setCookie = (0, import_node_util3.promisify)(setCookie.bind(value));
      getCookieString = (0, import_node_util3.promisify)(getCookieString.bind(value));
      this._internals.cookieJar = {
        setCookie,
        getCookieString
      };
    } else {
      this._internals.cookieJar = value;
    }
  }
  /**
      You can abort the `request` using [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
  
      @example
      ```
      import got from 'got';
  
      const abortController = new AbortController();
  
      const request = got('https://httpbin.org/anything', {
          signal: abortController.signal
      });
  
      setTimeout(() => {
          abortController.abort();
      }, 100);
      ```
      */
  get signal() {
    return this._internals.signal;
  }
  set signal(value) {
    assert.object(value);
    this._internals.signal = value;
  }
  /**
      Ignore invalid cookies instead of throwing an error.
      Only useful when the `cookieJar` option has been set. Not recommended.
  
      @default false
      */
  get ignoreInvalidCookies() {
    return this._internals.ignoreInvalidCookies;
  }
  set ignoreInvalidCookies(value) {
    assert.boolean(value);
    this._internals.ignoreInvalidCookies = value;
  }
  /**
      Query string that will be added to the request URL.
      This will override the query string in `url`.
  
      If you need to pass in an array, you can do it using a `URLSearchParams` instance.
  
      @example
      ```
      import got from 'got';
  
      const searchParams = new URLSearchParams([['key', 'a'], ['key', 'b']]);
  
      await got('https://example.com', {searchParams});
  
      console.log(searchParams.toString());
      //=> 'key=a&key=b'
      ```
      */
  get searchParams() {
    if (this._internals.url) {
      return this._internals.url.searchParams;
    }
    if (this._internals.searchParams === void 0) {
      this._internals.searchParams = new URLSearchParams();
    }
    return this._internals.searchParams;
  }
  set searchParams(value) {
    assert.any([dist_default.string, dist_default.object, dist_default.undefined], value);
    const url = this._internals.url;
    if (value === void 0) {
      this._internals.searchParams = void 0;
      if (url) {
        url.search = "";
      }
      return;
    }
    const searchParameters = this.searchParams;
    let updated;
    if (dist_default.string(value)) {
      updated = new URLSearchParams(value);
    } else if (value instanceof URLSearchParams) {
      updated = value;
    } else {
      validateSearchParameters(value);
      updated = new URLSearchParams();
      for (const key in value) {
        const entry = value[key];
        if (entry === null) {
          updated.append(key, "");
        } else if (entry === void 0) {
          searchParameters.delete(key);
        } else {
          updated.append(key, entry);
        }
      }
    }
    if (this._merging) {
      for (const key of updated.keys()) {
        searchParameters.delete(key);
      }
      for (const [key, value2] of updated) {
        searchParameters.append(key, value2);
      }
    } else if (url) {
      url.search = searchParameters.toString();
    } else {
      this._internals.searchParams = searchParameters;
    }
  }
  get searchParameters() {
    throw new Error("The `searchParameters` option does not exist. Use `searchParams` instead.");
  }
  set searchParameters(_value) {
    throw new Error("The `searchParameters` option does not exist. Use `searchParams` instead.");
  }
  get dnsLookup() {
    return this._internals.dnsLookup;
  }
  set dnsLookup(value) {
    assert.any([dist_default.function_, dist_default.undefined], value);
    this._internals.dnsLookup = value;
  }
  /**
      An instance of [`CacheableLookup`](https://github.com/szmarczak/cacheable-lookup) used for making DNS lookups.
      Useful when making lots of requests to different *public* hostnames.
  
      `CacheableLookup` uses `dns.resolver4(..)` and `dns.resolver6(...)` under the hood and fall backs to `dns.lookup(...)` when the first two fail, which may lead to additional delay.
  
      __Note__: This should stay disabled when making requests to internal hostnames such as `localhost`, `database.local` etc.
  
      @default false
      */
  get dnsCache() {
    return this._internals.dnsCache;
  }
  set dnsCache(value) {
    assert.any([dist_default.object, dist_default.boolean, dist_default.undefined], value);
    if (value === true) {
      this._internals.dnsCache = getGlobalDnsCache();
    } else if (value === false) {
      this._internals.dnsCache = void 0;
    } else {
      this._internals.dnsCache = value;
    }
  }
  /**
      User data. `context` is shallow merged and enumerable. If it contains non-enumerable properties they will NOT be merged.
  
      @example
      ```
      import got from 'got';
  
      const instance = got.extend({
          hooks: {
              beforeRequest: [
                  options => {
                      if (!options.context || !options.context.token) {
                          throw new Error('Token required');
                      }
  
                      options.headers.token = options.context.token;
                  }
              ]
          }
      });
  
      const context = {
          token: 'secret'
      };
  
      const response = await instance('https://httpbin.org/headers', {context});
  
      // Let's see the headers
      console.log(response.body);
      ```
      */
  get context() {
    return this._internals.context;
  }
  set context(value) {
    assert.object(value);
    if (this._merging) {
      Object.assign(this._internals.context, value);
    } else {
      this._internals.context = { ...value };
    }
  }
  /**
  Hooks allow modifications during the request lifecycle.
  Hook functions may be async and are run serially.
  */
  get hooks() {
    return this._internals.hooks;
  }
  set hooks(value) {
    assert.object(value);
    for (const knownHookEvent in value) {
      if (!(knownHookEvent in this._internals.hooks)) {
        throw new Error(`Unexpected hook event: ${knownHookEvent}`);
      }
      const typedKnownHookEvent = knownHookEvent;
      const hooks = value[typedKnownHookEvent];
      assert.any([dist_default.array, dist_default.undefined], hooks);
      if (hooks) {
        for (const hook of hooks) {
          assert.function_(hook);
        }
      }
      if (this._merging) {
        if (hooks) {
          this._internals.hooks[typedKnownHookEvent].push(...hooks);
        }
      } else {
        if (!hooks) {
          throw new Error(`Missing hook event: ${knownHookEvent}`);
        }
        this._internals.hooks[knownHookEvent] = [...hooks];
      }
    }
  }
  /**
      Defines if redirect responses should be followed automatically.
  
      Note that if a `303` is sent by the server in response to any request type (`POST`, `DELETE`, etc.), Got will automatically request the resource pointed to in the location header via `GET`.
      This is in accordance with [the spec](https://tools.ietf.org/html/rfc7231#section-6.4.4). You can optionally turn on this behavior also for other redirect codes - see `methodRewriting`.
  
      @default true
      */
  get followRedirect() {
    return this._internals.followRedirect;
  }
  set followRedirect(value) {
    assert.boolean(value);
    this._internals.followRedirect = value;
  }
  get followRedirects() {
    throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
  }
  set followRedirects(_value) {
    throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
  }
  /**
      If exceeded, the request will be aborted and a `MaxRedirectsError` will be thrown.
  
      @default 10
      */
  get maxRedirects() {
    return this._internals.maxRedirects;
  }
  set maxRedirects(value) {
    assert.number(value);
    this._internals.maxRedirects = value;
  }
  /**
      A cache adapter instance for storing cached response data.
  
      @default false
      */
  get cache() {
    return this._internals.cache;
  }
  set cache(value) {
    assert.any([dist_default.object, dist_default.string, dist_default.boolean, dist_default.undefined], value);
    if (value === true) {
      this._internals.cache = globalCache;
    } else if (value === false) {
      this._internals.cache = void 0;
    } else {
      this._internals.cache = value;
    }
  }
  /**
      Determines if a `got.HTTPError` is thrown for unsuccessful responses.
  
      If this is disabled, requests that encounter an error status code will be resolved with the `response` instead of throwing.
      This may be useful if you are checking for resource availability and are expecting error responses.
  
      @default true
      */
  get throwHttpErrors() {
    return this._internals.throwHttpErrors;
  }
  set throwHttpErrors(value) {
    assert.boolean(value);
    this._internals.throwHttpErrors = value;
  }
  get username() {
    const url = this._internals.url;
    const value = url ? url.username : this._internals.username;
    return decodeURIComponent(value);
  }
  set username(value) {
    assert.string(value);
    const url = this._internals.url;
    const fixedValue = encodeURIComponent(value);
    if (url) {
      url.username = fixedValue;
    } else {
      this._internals.username = fixedValue;
    }
  }
  get password() {
    const url = this._internals.url;
    const value = url ? url.password : this._internals.password;
    return decodeURIComponent(value);
  }
  set password(value) {
    assert.string(value);
    const url = this._internals.url;
    const fixedValue = encodeURIComponent(value);
    if (url) {
      url.password = fixedValue;
    } else {
      this._internals.password = fixedValue;
    }
  }
  /**
      If set to `true`, Got will additionally accept HTTP2 requests.
  
      It will choose either HTTP/1.1 or HTTP/2 depending on the ALPN protocol.
  
      __Note__: This option requires Node.js 15.10.0 or newer as HTTP/2 support on older Node.js versions is very buggy.
  
      __Note__: Overriding `options.request` will disable HTTP2 support.
  
      @default false
  
      @example
      ```
      import got from 'got';
  
      const {headers} = await got('https://nghttp2.org/httpbin/anything', {http2: true});
  
      console.log(headers.via);
      //=> '2 nghttpx'
      ```
      */
  get http2() {
    return this._internals.http2;
  }
  set http2(value) {
    assert.boolean(value);
    this._internals.http2 = value;
  }
  /**
      Set this to `true` to allow sending body for the `GET` method.
      However, the [HTTP/2 specification](https://tools.ietf.org/html/rfc7540#section-8.1.3) says that `An HTTP GET request includes request header fields and no payload body`, therefore when using the HTTP/2 protocol this option will have no effect.
      This option is only meant to interact with non-compliant servers when you have no other choice.
  
      __Note__: The [RFC 7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) doesn't specify any particular behavior for the GET method having a payload, therefore __it's considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)__.
  
      @default false
      */
  get allowGetBody() {
    return this._internals.allowGetBody;
  }
  set allowGetBody(value) {
    assert.boolean(value);
    this._internals.allowGetBody = value;
  }
  /**
      Request headers.
  
      Existing headers will be overwritten. Headers set to `undefined` will be omitted.
  
      @default {}
      */
  get headers() {
    return this._internals.headers;
  }
  set headers(value) {
    assert.plainObject(value);
    if (this._merging) {
      Object.assign(this._internals.headers, lowercaseKeys(value));
    } else {
      this._internals.headers = lowercaseKeys(value);
    }
  }
  /**
      Specifies if the HTTP request method should be [rewritten as `GET`](https://tools.ietf.org/html/rfc7231#section-6.4) on redirects.
  
      As the [specification](https://tools.ietf.org/html/rfc7231#section-6.4) prefers to rewrite the HTTP method only on `303` responses, this is Got's default behavior.
      Setting `methodRewriting` to `true` will also rewrite `301` and `302` responses, as allowed by the spec. This is the behavior followed by `curl` and browsers.
  
      __Note__: Got never performs method rewriting on `307` and `308` responses, as this is [explicitly prohibited by the specification](https://www.rfc-editor.org/rfc/rfc7231#section-6.4.7).
  
      @default false
      */
  get methodRewriting() {
    return this._internals.methodRewriting;
  }
  set methodRewriting(value) {
    assert.boolean(value);
    this._internals.methodRewriting = value;
  }
  /**
      Indicates which DNS record family to use.
  
      Values:
      - `undefined`: IPv4 (if present) or IPv6
      - `4`: Only IPv4
      - `6`: Only IPv6
  
      @default undefined
      */
  get dnsLookupIpVersion() {
    return this._internals.dnsLookupIpVersion;
  }
  set dnsLookupIpVersion(value) {
    if (value !== void 0 && value !== 4 && value !== 6) {
      throw new TypeError(`Invalid DNS lookup IP version: ${value}`);
    }
    this._internals.dnsLookupIpVersion = value;
  }
  /**
      A function used to parse JSON responses.
  
      @example
      ```
      import got from 'got';
      import Bourne from '@hapi/bourne';
  
      const parsed = await got('https://example.com', {
          parseJson: text => Bourne.parse(text)
      }).json();
  
      console.log(parsed);
      ```
      */
  get parseJson() {
    return this._internals.parseJson;
  }
  set parseJson(value) {
    assert.function_(value);
    this._internals.parseJson = value;
  }
  /**
      A function used to stringify the body of JSON requests.
  
      @example
      ```
      import got from 'got';
  
      await got.post('https://example.com', {
          stringifyJson: object => JSON.stringify(object, (key, value) => {
              if (key.startsWith('_')) {
                  return;
              }
  
              return value;
          }),
          json: {
              some: 'payload',
              _ignoreMe: 1234
          }
      });
      ```
  
      @example
      ```
      import got from 'got';
  
      await got.post('https://example.com', {
          stringifyJson: object => JSON.stringify(object, (key, value) => {
              if (typeof value === 'number') {
                  return value.toString();
              }
  
              return value;
          }),
          json: {
              some: 'payload',
              number: 1
          }
      });
      ```
      */
  get stringifyJson() {
    return this._internals.stringifyJson;
  }
  set stringifyJson(value) {
    assert.function_(value);
    this._internals.stringifyJson = value;
  }
  /**
      An object representing `limit`, `calculateDelay`, `methods`, `statusCodes`, `maxRetryAfter` and `errorCodes` fields for maximum retry count, retry handler, allowed methods, allowed status codes, maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time and allowed error codes.
  
      Delays between retries counts with function `1000 * Math.pow(2, retry) + Math.random() * 100`, where `retry` is attempt number (starts from 1).
  
      The `calculateDelay` property is a `function` that receives an object with `attemptCount`, `retryOptions`, `error` and `computedValue` properties for current retry count, the retry options, error and default computed value.
      The function must return a delay in milliseconds (or a Promise resolving with it) (`0` return value cancels retry).
  
      By default, it retries *only* on the specified methods, status codes, and on these network errors:
  
      - `ETIMEDOUT`: One of the [timeout](#timeout) limits were reached.
      - `ECONNRESET`: Connection was forcibly closed by a peer.
      - `EADDRINUSE`: Could not bind to any free port.
      - `ECONNREFUSED`: Connection was refused by the server.
      - `EPIPE`: The remote side of the stream being written has been closed.
      - `ENOTFOUND`: Couldn't resolve the hostname to an IP address.
      - `ENETUNREACH`: No internet connection.
      - `EAI_AGAIN`: DNS lookup timed out.
  
      __Note__: If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`.
      __Note__: If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.
      */
  get retry() {
    return this._internals.retry;
  }
  set retry(value) {
    assert.plainObject(value);
    assert.any([dist_default.function_, dist_default.undefined], value.calculateDelay);
    assert.any([dist_default.number, dist_default.undefined], value.maxRetryAfter);
    assert.any([dist_default.number, dist_default.undefined], value.limit);
    assert.any([dist_default.array, dist_default.undefined], value.methods);
    assert.any([dist_default.array, dist_default.undefined], value.statusCodes);
    assert.any([dist_default.array, dist_default.undefined], value.errorCodes);
    assert.any([dist_default.number, dist_default.undefined], value.noise);
    if (value.noise && Math.abs(value.noise) > 100) {
      throw new Error(`The maximum acceptable retry noise is +/- 100ms, got ${value.noise}`);
    }
    for (const key in value) {
      if (!(key in this._internals.retry)) {
        throw new Error(`Unexpected retry option: ${key}`);
      }
    }
    if (this._merging) {
      Object.assign(this._internals.retry, value);
    } else {
      this._internals.retry = { ...value };
    }
    const { retry } = this._internals;
    retry.methods = [...new Set(retry.methods.map((method) => method.toUpperCase()))];
    retry.statusCodes = [...new Set(retry.statusCodes)];
    retry.errorCodes = [...new Set(retry.errorCodes)];
  }
  /**
      From `http.RequestOptions`.
  
      The IP address used to send the request from.
      */
  get localAddress() {
    return this._internals.localAddress;
  }
  set localAddress(value) {
    assert.any([dist_default.string, dist_default.undefined], value);
    this._internals.localAddress = value;
  }
  /**
      The HTTP method used to make the request.
  
      @default 'GET'
      */
  get method() {
    return this._internals.method;
  }
  set method(value) {
    assert.string(value);
    this._internals.method = value.toUpperCase();
  }
  get createConnection() {
    return this._internals.createConnection;
  }
  set createConnection(value) {
    assert.any([dist_default.function_, dist_default.undefined], value);
    this._internals.createConnection = value;
  }
  /**
      From `http-cache-semantics`
  
      @default {}
      */
  get cacheOptions() {
    return this._internals.cacheOptions;
  }
  set cacheOptions(value) {
    assert.plainObject(value);
    assert.any([dist_default.boolean, dist_default.undefined], value.shared);
    assert.any([dist_default.number, dist_default.undefined], value.cacheHeuristic);
    assert.any([dist_default.number, dist_default.undefined], value.immutableMinTimeToLive);
    assert.any([dist_default.boolean, dist_default.undefined], value.ignoreCargoCult);
    for (const key in value) {
      if (!(key in this._internals.cacheOptions)) {
        throw new Error(`Cache option \`${key}\` does not exist`);
      }
    }
    if (this._merging) {
      Object.assign(this._internals.cacheOptions, value);
    } else {
      this._internals.cacheOptions = { ...value };
    }
  }
  /**
  Options for the advanced HTTPS API.
  */
  get https() {
    return this._internals.https;
  }
  set https(value) {
    assert.plainObject(value);
    assert.any([dist_default.boolean, dist_default.undefined], value.rejectUnauthorized);
    assert.any([dist_default.function_, dist_default.undefined], value.checkServerIdentity);
    assert.any([dist_default.string, dist_default.object, dist_default.array, dist_default.undefined], value.certificateAuthority);
    assert.any([dist_default.string, dist_default.object, dist_default.array, dist_default.undefined], value.key);
    assert.any([dist_default.string, dist_default.object, dist_default.array, dist_default.undefined], value.certificate);
    assert.any([dist_default.string, dist_default.undefined], value.passphrase);
    assert.any([dist_default.string, dist_default.buffer, dist_default.array, dist_default.undefined], value.pfx);
    assert.any([dist_default.array, dist_default.undefined], value.alpnProtocols);
    assert.any([dist_default.string, dist_default.undefined], value.ciphers);
    assert.any([dist_default.string, dist_default.buffer, dist_default.undefined], value.dhparam);
    assert.any([dist_default.string, dist_default.undefined], value.signatureAlgorithms);
    assert.any([dist_default.string, dist_default.undefined], value.minVersion);
    assert.any([dist_default.string, dist_default.undefined], value.maxVersion);
    assert.any([dist_default.boolean, dist_default.undefined], value.honorCipherOrder);
    assert.any([dist_default.number, dist_default.undefined], value.tlsSessionLifetime);
    assert.any([dist_default.string, dist_default.undefined], value.ecdhCurve);
    assert.any([dist_default.string, dist_default.buffer, dist_default.array, dist_default.undefined], value.certificateRevocationLists);
    for (const key in value) {
      if (!(key in this._internals.https)) {
        throw new Error(`HTTPS option \`${key}\` does not exist`);
      }
    }
    if (this._merging) {
      Object.assign(this._internals.https, value);
    } else {
      this._internals.https = { ...value };
    }
  }
  /**
      [Encoding](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) to be used on `setEncoding` of the response data.
  
      To get a [`Buffer`](https://nodejs.org/api/buffer.html), you need to set `responseType` to `buffer` instead.
      Don't set this option to `null`.
  
      __Note__: This doesn't affect streams! Instead, you need to do `got.stream(...).setEncoding(encoding)`.
  
      @default 'utf-8'
      */
  get encoding() {
    return this._internals.encoding;
  }
  set encoding(value) {
    if (value === null) {
      throw new TypeError("To get a Buffer, set `options.responseType` to `buffer` instead");
    }
    assert.any([dist_default.string, dist_default.undefined], value);
    this._internals.encoding = value;
  }
  /**
      When set to `true` the promise will return the Response body instead of the Response object.
  
      @default false
      */
  get resolveBodyOnly() {
    return this._internals.resolveBodyOnly;
  }
  set resolveBodyOnly(value) {
    assert.boolean(value);
    this._internals.resolveBodyOnly = value;
  }
  /**
      Returns a `Stream` instead of a `Promise`.
      This is equivalent to calling `got.stream(url, options?)`.
  
      @default false
      */
  get isStream() {
    return this._internals.isStream;
  }
  set isStream(value) {
    assert.boolean(value);
    this._internals.isStream = value;
  }
  /**
      The parsing method.
  
      The promise also has `.text()`, `.json()` and `.buffer()` methods which return another Got promise for the parsed body.
  
      It's like setting the options to `{responseType: 'json', resolveBodyOnly: true}` but without affecting the main Got promise.
  
      __Note__: When using streams, this option is ignored.
  
      @example
      ```
      const responsePromise = got(url);
      const bufferPromise = responsePromise.buffer();
      const jsonPromise = responsePromise.json();
  
      const [response, buffer, json] = Promise.all([responsePromise, bufferPromise, jsonPromise]);
      // `response` is an instance of Got Response
      // `buffer` is an instance of Buffer
      // `json` is an object
      ```
  
      @example
      ```
      // This
      const body = await got(url).json();
  
      // is semantically the same as this
      const body = await got(url, {responseType: 'json', resolveBodyOnly: true});
      ```
      */
  get responseType() {
    return this._internals.responseType;
  }
  set responseType(value) {
    if (value === void 0) {
      this._internals.responseType = "text";
      return;
    }
    if (value !== "text" && value !== "buffer" && value !== "json") {
      throw new Error(`Invalid \`responseType\` option: ${value}`);
    }
    this._internals.responseType = value;
  }
  get pagination() {
    return this._internals.pagination;
  }
  set pagination(value) {
    assert.object(value);
    if (this._merging) {
      Object.assign(this._internals.pagination, value);
    } else {
      this._internals.pagination = value;
    }
  }
  get auth() {
    throw new Error("Parameter `auth` is deprecated. Use `username` / `password` instead.");
  }
  set auth(_value) {
    throw new Error("Parameter `auth` is deprecated. Use `username` / `password` instead.");
  }
  get setHost() {
    return this._internals.setHost;
  }
  set setHost(value) {
    assert.boolean(value);
    this._internals.setHost = value;
  }
  get maxHeaderSize() {
    return this._internals.maxHeaderSize;
  }
  set maxHeaderSize(value) {
    assert.any([dist_default.number, dist_default.undefined], value);
    this._internals.maxHeaderSize = value;
  }
  get enableUnixSockets() {
    return this._internals.enableUnixSockets;
  }
  set enableUnixSockets(value) {
    assert.boolean(value);
    this._internals.enableUnixSockets = value;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  toJSON() {
    return { ...this._internals };
  }
  [Symbol.for("nodejs.util.inspect.custom")](_depth, options) {
    return (0, import_node_util3.inspect)(this._internals, options);
  }
  createNativeRequestOptions() {
    var _a;
    const internals = this._internals;
    const url = internals.url;
    let agent;
    if (url.protocol === "https:") {
      agent = internals.http2 ? internals.agent : internals.agent.https;
    } else {
      agent = internals.agent.http;
    }
    const { https: https2 } = internals;
    let { pfx } = https2;
    if (dist_default.array(pfx) && dist_default.plainObject(pfx[0])) {
      pfx = pfx.map((object) => ({
        buf: object.buffer,
        passphrase: object.passphrase
      }));
    }
    return {
      ...internals.cacheOptions,
      ...this._unixOptions,
      // HTTPS options
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ALPNProtocols: https2.alpnProtocols,
      ca: https2.certificateAuthority,
      cert: https2.certificate,
      key: https2.key,
      passphrase: https2.passphrase,
      pfx: https2.pfx,
      rejectUnauthorized: https2.rejectUnauthorized,
      checkServerIdentity: https2.checkServerIdentity ?? import_node_tls.checkServerIdentity,
      ciphers: https2.ciphers,
      honorCipherOrder: https2.honorCipherOrder,
      minVersion: https2.minVersion,
      maxVersion: https2.maxVersion,
      sigalgs: https2.signatureAlgorithms,
      sessionTimeout: https2.tlsSessionLifetime,
      dhparam: https2.dhparam,
      ecdhCurve: https2.ecdhCurve,
      crl: https2.certificateRevocationLists,
      // HTTP options
      lookup: internals.dnsLookup ?? ((_a = internals.dnsCache) == null ? void 0 : _a.lookup),
      family: internals.dnsLookupIpVersion,
      agent,
      setHost: internals.setHost,
      method: internals.method,
      maxHeaderSize: internals.maxHeaderSize,
      localAddress: internals.localAddress,
      headers: internals.headers,
      createConnection: internals.createConnection,
      timeout: internals.http2 ? getHttp2TimeoutOption(internals) : void 0,
      // HTTP/2 options
      h2session: internals.h2session
    };
  }
  getRequestFunction() {
    const url = this._internals.url;
    const { request } = this._internals;
    if (!request && url) {
      return this.getFallbackRequestFunction();
    }
    return request;
  }
  getFallbackRequestFunction() {
    const url = this._internals.url;
    if (!url) {
      return;
    }
    if (url.protocol === "https:") {
      if (this._internals.http2) {
        if (major < 15 || major === 15 && minor < 10) {
          const error = new Error("To use the `http2` option, install Node.js 15.10.0 or above");
          error.code = "EUNSUPPORTED";
          throw error;
        }
        return import_http2_wrapper.default.auto;
      }
      return import_node_https.default.request;
    }
    return import_node_http.default.request;
  }
  freeze() {
    const options = this._internals;
    Object.freeze(options);
    Object.freeze(options.hooks);
    Object.freeze(options.hooks.afterResponse);
    Object.freeze(options.hooks.beforeError);
    Object.freeze(options.hooks.beforeRedirect);
    Object.freeze(options.hooks.beforeRequest);
    Object.freeze(options.hooks.beforeRetry);
    Object.freeze(options.hooks.init);
    Object.freeze(options.https);
    Object.freeze(options.cacheOptions);
    Object.freeze(options.agent);
    Object.freeze(options.headers);
    Object.freeze(options.timeout);
    Object.freeze(options.retry);
    Object.freeze(options.retry.errorCodes);
    Object.freeze(options.retry.methods);
    Object.freeze(options.retry.statusCodes);
  }
};

// node_modules/got/dist/source/core/response.js
var isResponseOk = (response) => {
  const { statusCode } = response;
  const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
  return statusCode >= 200 && statusCode <= limitStatusCode || statusCode === 304;
};
var ParseError = class extends RequestError {
  constructor(error, response) {
    const { options } = response.request;
    super(`${error.message} in "${options.url.toString()}"`, error, response.request);
    this.name = "ParseError";
    this.code = "ERR_BODY_PARSE_FAILURE";
  }
};
var parseBody = (response, responseType, parseJson, encoding) => {
  const { rawBody } = response;
  try {
    if (responseType === "text") {
      return rawBody.toString(encoding);
    }
    if (responseType === "json") {
      return rawBody.length === 0 ? "" : parseJson(rawBody.toString(encoding));
    }
    if (responseType === "buffer") {
      return rawBody;
    }
  } catch (error) {
    throw new ParseError(error, response);
  }
  throw new ParseError({
    message: `Unknown body type '${responseType}'`,
    name: "Error"
  }, response);
};

// node_modules/got/dist/source/core/utils/is-client-request.js
function isClientRequest(clientRequest) {
  return clientRequest.writable && !clientRequest.writableEnded;
}
var is_client_request_default = isClientRequest;

// node_modules/got/dist/source/core/utils/is-unix-socket-url.js
function isUnixSocketURL(url) {
  return url.protocol === "unix:" || url.hostname === "unix";
}

// node_modules/got/dist/source/core/index.js
var { buffer: getStreamAsBuffer } = import_get_stream2.default;
var supportsBrotli = dist_default.string(import_node_process2.default.versions.brotli);
var methodsWithoutBody = /* @__PURE__ */ new Set(["GET", "HEAD"]);
var cacheableStore = new WeakableMap();
var redirectCodes = /* @__PURE__ */ new Set([300, 301, 302, 303, 304, 307, 308]);
var proxiedRequestEvents = [
  "socket",
  "connect",
  "continue",
  "information",
  "upgrade"
];
var noop2 = () => {
};
var Request = class _Request extends import_node_stream3.Duplex {
  constructor(url, options, defaults2) {
    super({
      // Don't destroy immediately, as the error may be emitted on unsuccessful retry
      autoDestroy: false,
      // It needs to be zero because we're just proxying the data to another stream
      highWaterMark: 0
    });
    Object.defineProperty(this, "constructor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_noPipe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "response", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "requestUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "redirectUrls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "retryCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_stopRetry", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downloadedSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_uploadedSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_stopReading", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pipedServerResponses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_request", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_responseSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bodySize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_unproxyEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isFromCache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_cannotHaveBody", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_triggerRead", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_cancelTimeouts", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_removeListeners", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_nativeResponse", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_flushed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_aborted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_requestInitialized", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._downloadedSize = 0;
    this._uploadedSize = 0;
    this._stopReading = false;
    this._pipedServerResponses = /* @__PURE__ */ new Set();
    this._cannotHaveBody = false;
    this._unproxyEvents = noop2;
    this._triggerRead = false;
    this._cancelTimeouts = noop2;
    this._removeListeners = noop2;
    this._jobs = [];
    this._flushed = false;
    this._requestInitialized = false;
    this._aborted = false;
    this.redirectUrls = [];
    this.retryCount = 0;
    this._stopRetry = noop2;
    this.on("pipe", (source) => {
      if (source == null ? void 0 : source.headers) {
        Object.assign(this.options.headers, source.headers);
      }
    });
    this.on("newListener", (event) => {
      if (event === "retry" && this.listenerCount("retry") > 0) {
        throw new Error("A retry listener has been attached already.");
      }
    });
    try {
      this.options = new Options(url, options, defaults2);
      if (!this.options.url) {
        if (this.options.prefixUrl === "") {
          throw new TypeError("Missing `url` property");
        }
        this.options.url = "";
      }
      this.requestUrl = this.options.url;
    } catch (error) {
      const { options: options2 } = error;
      if (options2) {
        this.options = options2;
      }
      this.flush = async () => {
        this.flush = async () => {
        };
        this.destroy(error);
      };
      return;
    }
    const { body } = this.options;
    if (dist_default.nodeStream(body)) {
      body.once("error", (error) => {
        if (this._flushed) {
          this._beforeError(new UploadError(error, this));
        } else {
          this.flush = async () => {
            this.flush = async () => {
            };
            this._beforeError(new UploadError(error, this));
          };
        }
      });
    }
    if (this.options.signal) {
      const abort = () => {
        this.destroy(new AbortError(this));
      };
      if (this.options.signal.aborted) {
        abort();
      } else {
        this.options.signal.addEventListener("abort", abort);
        this._removeListeners = () => {
          var _a;
          (_a = this.options.signal) == null ? void 0 : _a.removeEventListener("abort", abort);
        };
      }
    }
  }
  async flush() {
    var _a;
    if (this._flushed) {
      return;
    }
    this._flushed = true;
    try {
      await this._finalizeBody();
      if (this.destroyed) {
        return;
      }
      await this._makeRequest();
      if (this.destroyed) {
        (_a = this._request) == null ? void 0 : _a.destroy();
        return;
      }
      for (const job of this._jobs) {
        job();
      }
      this._jobs.length = 0;
      this._requestInitialized = true;
    } catch (error) {
      this._beforeError(error);
    }
  }
  _beforeError(error) {
    if (this._stopReading) {
      return;
    }
    const { response, options } = this;
    const attemptCount = this.retryCount + (error.name === "RetryError" ? 0 : 1);
    this._stopReading = true;
    if (!(error instanceof RequestError)) {
      error = new RequestError(error.message, error, this);
    }
    const typedError = error;
    void (async () => {
      var _a, _b;
      if ((response == null ? void 0 : response.readable) && !response.rawBody && !((_b = (_a = this._request) == null ? void 0 : _a.socket) == null ? void 0 : _b.destroyed)) {
        response.setEncoding(this.readableEncoding);
        const success = await this._setRawBody(response);
        if (success) {
          response.body = response.rawBody.toString();
        }
      }
      if (this.listenerCount("retry") !== 0) {
        let backoff;
        try {
          let retryAfter;
          if (response && "retry-after" in response.headers) {
            retryAfter = Number(response.headers["retry-after"]);
            if (Number.isNaN(retryAfter)) {
              retryAfter = Date.parse(response.headers["retry-after"]) - Date.now();
              if (retryAfter <= 0) {
                retryAfter = 1;
              }
            } else {
              retryAfter *= 1e3;
            }
          }
          const retryOptions = options.retry;
          backoff = await retryOptions.calculateDelay({
            attemptCount,
            retryOptions,
            error: typedError,
            retryAfter,
            computedValue: calculate_retry_delay_default({
              attemptCount,
              retryOptions,
              error: typedError,
              retryAfter,
              computedValue: retryOptions.maxRetryAfter ?? options.timeout.request ?? Number.POSITIVE_INFINITY
            })
          });
        } catch (error_) {
          void this._error(new RequestError(error_.message, error_, this));
          return;
        }
        if (backoff) {
          await new Promise((resolve) => {
            const timeout = setTimeout(resolve, backoff);
            this._stopRetry = () => {
              clearTimeout(timeout);
              resolve();
            };
          });
          if (this.destroyed) {
            return;
          }
          try {
            for (const hook of this.options.hooks.beforeRetry) {
              await hook(typedError, this.retryCount + 1);
            }
          } catch (error_) {
            void this._error(new RequestError(error_.message, error, this));
            return;
          }
          if (this.destroyed) {
            return;
          }
          this.destroy();
          this.emit("retry", this.retryCount + 1, error, (updatedOptions) => {
            const request = new _Request(options.url, updatedOptions, options);
            request.retryCount = this.retryCount + 1;
            import_node_process2.default.nextTick(() => {
              void request.flush();
            });
            return request;
          });
          return;
        }
      }
      void this._error(typedError);
    })();
  }
  _read() {
    this._triggerRead = true;
    const { response } = this;
    if (response && !this._stopReading) {
      if (response.readableLength) {
        this._triggerRead = false;
      }
      let data;
      while ((data = response.read()) !== null) {
        this._downloadedSize += data.length;
        const progress = this.downloadProgress;
        if (progress.percent < 1) {
          this.emit("downloadProgress", progress);
        }
        this.push(data);
      }
    }
  }
  _write(chunk, encoding, callback) {
    const write = () => {
      this._writeRequest(chunk, encoding, callback);
    };
    if (this._requestInitialized) {
      write();
    } else {
      this._jobs.push(write);
    }
  }
  _final(callback) {
    const endRequest = () => {
      if (!this._request || this._request.destroyed) {
        callback();
        return;
      }
      this._request.end((error) => {
        var _a;
        if ((_a = this._request._writableState) == null ? void 0 : _a.errored) {
          return;
        }
        if (!error) {
          this._bodySize = this._uploadedSize;
          this.emit("uploadProgress", this.uploadProgress);
          this._request.emit("upload-complete");
        }
        callback(error);
      });
    };
    if (this._requestInitialized) {
      endRequest();
    } else {
      this._jobs.push(endRequest);
    }
  }
  _destroy(error, callback) {
    this._stopReading = true;
    this.flush = async () => {
    };
    this._stopRetry();
    this._cancelTimeouts();
    this._removeListeners();
    if (this.options) {
      const { body } = this.options;
      if (dist_default.nodeStream(body)) {
        body.destroy();
      }
    }
    if (this._request) {
      this._request.destroy();
    }
    if (error !== null && !dist_default.undefined(error) && !(error instanceof RequestError)) {
      error = new RequestError(error.message, error, this);
    }
    callback(error);
  }
  pipe(destination, options) {
    if (destination instanceof import_node_http2.ServerResponse) {
      this._pipedServerResponses.add(destination);
    }
    return super.pipe(destination, options);
  }
  unpipe(destination) {
    if (destination instanceof import_node_http2.ServerResponse) {
      this._pipedServerResponses.delete(destination);
    }
    super.unpipe(destination);
    return this;
  }
  async _finalizeBody() {
    const { options } = this;
    const { headers } = options;
    const isForm = !dist_default.undefined(options.form);
    const isJSON = !dist_default.undefined(options.json);
    const isBody = !dist_default.undefined(options.body);
    const cannotHaveBody = methodsWithoutBody.has(options.method) && !(options.method === "GET" && options.allowGetBody);
    this._cannotHaveBody = cannotHaveBody;
    if (isForm || isJSON || isBody) {
      if (cannotHaveBody) {
        throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
      }
      const noContentType = !dist_default.string(headers["content-type"]);
      if (isBody) {
        if (isFormData(options.body)) {
          const encoder = new FormDataEncoder(options.body);
          if (noContentType) {
            headers["content-type"] = encoder.headers["Content-Type"];
          }
          if ("Content-Length" in encoder.headers) {
            headers["content-length"] = encoder.headers["Content-Length"];
          }
          options.body = encoder.encode();
        }
        if (isFormData2(options.body) && noContentType) {
          headers["content-type"] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
        }
      } else if (isForm) {
        if (noContentType) {
          headers["content-type"] = "application/x-www-form-urlencoded";
        }
        const { form } = options;
        options.form = void 0;
        options.body = new URLSearchParams(form).toString();
      } else {
        if (noContentType) {
          headers["content-type"] = "application/json";
        }
        const { json } = options;
        options.json = void 0;
        options.body = options.stringifyJson(json);
      }
      const uploadBodySize = await getBodySize(options.body, options.headers);
      if (dist_default.undefined(headers["content-length"]) && dist_default.undefined(headers["transfer-encoding"]) && !cannotHaveBody && !dist_default.undefined(uploadBodySize)) {
        headers["content-length"] = String(uploadBodySize);
      }
    }
    if (options.responseType === "json" && !("accept" in options.headers)) {
      options.headers.accept = "application/json";
    }
    this._bodySize = Number(headers["content-length"]) || void 0;
  }
  async _onResponseBase(response) {
    if (this.isAborted) {
      return;
    }
    const { options } = this;
    const { url } = options;
    this._nativeResponse = response;
    if (options.decompress) {
      response = (0, import_decompress_response.default)(response);
    }
    const statusCode = response.statusCode;
    const typedResponse = response;
    typedResponse.statusMessage = typedResponse.statusMessage ?? import_node_http2.default.STATUS_CODES[statusCode];
    typedResponse.url = options.url.toString();
    typedResponse.requestUrl = this.requestUrl;
    typedResponse.redirectUrls = this.redirectUrls;
    typedResponse.request = this;
    typedResponse.isFromCache = this._nativeResponse.fromCache ?? false;
    typedResponse.ip = this.ip;
    typedResponse.retryCount = this.retryCount;
    typedResponse.ok = isResponseOk(typedResponse);
    this._isFromCache = typedResponse.isFromCache;
    this._responseSize = Number(response.headers["content-length"]) || void 0;
    this.response = typedResponse;
    response.once("end", () => {
      this._responseSize = this._downloadedSize;
      this.emit("downloadProgress", this.downloadProgress);
    });
    response.once("error", (error) => {
      this._aborted = true;
      response.destroy();
      this._beforeError(new ReadError(error, this));
    });
    response.once("aborted", () => {
      this._aborted = true;
      this._beforeError(new ReadError({
        name: "Error",
        message: "The server aborted pending request",
        code: "ECONNRESET"
      }, this));
    });
    this.emit("downloadProgress", this.downloadProgress);
    const rawCookies = response.headers["set-cookie"];
    if (dist_default.object(options.cookieJar) && rawCookies) {
      let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
      if (options.ignoreInvalidCookies) {
        promises = promises.map(async (promise) => {
          try {
            await promise;
          } catch {
          }
        });
      }
      try {
        await Promise.all(promises);
      } catch (error) {
        this._beforeError(error);
        return;
      }
    }
    if (this.isAborted) {
      return;
    }
    if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
      response.resume();
      this._cancelTimeouts();
      this._unproxyEvents();
      if (this.redirectUrls.length >= options.maxRedirects) {
        this._beforeError(new MaxRedirectsError(this));
        return;
      }
      this._request = void 0;
      const updatedOptions = new Options(void 0, void 0, this.options);
      const serverRequestedGet = statusCode === 303 && updatedOptions.method !== "GET" && updatedOptions.method !== "HEAD";
      const canRewrite = statusCode !== 307 && statusCode !== 308;
      const userRequestedGet = updatedOptions.methodRewriting && canRewrite;
      if (serverRequestedGet || userRequestedGet) {
        updatedOptions.method = "GET";
        updatedOptions.body = void 0;
        updatedOptions.json = void 0;
        updatedOptions.form = void 0;
        delete updatedOptions.headers["content-length"];
      }
      try {
        const redirectBuffer = import_node_buffer2.Buffer.from(response.headers.location, "binary").toString();
        const redirectUrl = new URL(redirectBuffer, url);
        if (!isUnixSocketURL(url) && isUnixSocketURL(redirectUrl)) {
          this._beforeError(new RequestError("Cannot redirect to UNIX socket", {}, this));
          return;
        }
        if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
          if ("host" in updatedOptions.headers) {
            delete updatedOptions.headers.host;
          }
          if ("cookie" in updatedOptions.headers) {
            delete updatedOptions.headers.cookie;
          }
          if ("authorization" in updatedOptions.headers) {
            delete updatedOptions.headers.authorization;
          }
          if (updatedOptions.username || updatedOptions.password) {
            updatedOptions.username = "";
            updatedOptions.password = "";
          }
        } else {
          redirectUrl.username = updatedOptions.username;
          redirectUrl.password = updatedOptions.password;
        }
        this.redirectUrls.push(redirectUrl);
        updatedOptions.prefixUrl = "";
        updatedOptions.url = redirectUrl;
        for (const hook of updatedOptions.hooks.beforeRedirect) {
          await hook(updatedOptions, typedResponse);
        }
        this.emit("redirect", updatedOptions, typedResponse);
        this.options = updatedOptions;
        await this._makeRequest();
      } catch (error) {
        this._beforeError(error);
        return;
      }
      return;
    }
    if (options.isStream && options.throwHttpErrors && !isResponseOk(typedResponse)) {
      this._beforeError(new HTTPError(typedResponse));
      return;
    }
    response.on("readable", () => {
      if (this._triggerRead) {
        this._read();
      }
    });
    this.on("resume", () => {
      response.resume();
    });
    this.on("pause", () => {
      response.pause();
    });
    response.once("end", () => {
      this.push(null);
    });
    if (this._noPipe) {
      const success = await this._setRawBody();
      if (success) {
        this.emit("response", response);
      }
      return;
    }
    this.emit("response", response);
    for (const destination of this._pipedServerResponses) {
      if (destination.headersSent) {
        continue;
      }
      for (const key in response.headers) {
        const isAllowed = options.decompress ? key !== "content-encoding" : true;
        const value = response.headers[key];
        if (isAllowed) {
          destination.setHeader(key, value);
        }
      }
      destination.statusCode = statusCode;
    }
  }
  async _setRawBody(from = this) {
    if (from.readableEnded) {
      return false;
    }
    try {
      const rawBody = await getStreamAsBuffer(from);
      if (!this.isAborted) {
        this.response.rawBody = rawBody;
        return true;
      }
    } catch {
    }
    return false;
  }
  async _onResponse(response) {
    try {
      await this._onResponseBase(response);
    } catch (error) {
      this._beforeError(error);
    }
  }
  _onRequest(request) {
    const { options } = this;
    const { timeout, url } = options;
    source_default(request);
    if (this.options.http2) {
      request.setTimeout(0);
    }
    this._cancelTimeouts = timedOut(request, timeout, url);
    const responseEventName = options.cache ? "cacheableResponse" : "response";
    request.once(responseEventName, (response) => {
      void this._onResponse(response);
    });
    request.once("error", (error) => {
      this._aborted = true;
      request.destroy();
      error = error instanceof TimeoutError2 ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
      this._beforeError(error);
    });
    this._unproxyEvents = proxyEvents(request, this, proxiedRequestEvents);
    this._request = request;
    this.emit("uploadProgress", this.uploadProgress);
    this._sendBody();
    this.emit("request", request);
  }
  async _asyncWrite(chunk) {
    return new Promise((resolve, reject) => {
      super.write(chunk, (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
  _sendBody() {
    const { body } = this.options;
    const currentRequest = this.redirectUrls.length === 0 ? this : this._request ?? this;
    if (dist_default.nodeStream(body)) {
      body.pipe(currentRequest);
    } else if (dist_default.generator(body) || dist_default.asyncGenerator(body)) {
      (async () => {
        try {
          for await (const chunk of body) {
            await this._asyncWrite(chunk);
          }
          super.end();
        } catch (error) {
          this._beforeError(error);
        }
      })();
    } else if (!dist_default.undefined(body)) {
      this._writeRequest(body, void 0, () => {
      });
      currentRequest.end();
    } else if (this._cannotHaveBody || this._noPipe) {
      currentRequest.end();
    }
  }
  _prepareCache(cache) {
    if (!cacheableStore.has(cache)) {
      const cacheableRequest = new dist_default2((requestOptions, handler) => {
        const result = requestOptions._request(requestOptions, handler);
        if (dist_default.promise(result)) {
          result.once = (event, handler2) => {
            if (event === "error") {
              (async () => {
                try {
                  await result;
                } catch (error) {
                  handler2(error);
                }
              })();
            } else if (event === "abort") {
              (async () => {
                try {
                  const request = await result;
                  request.once("abort", handler2);
                } catch {
                }
              })();
            } else {
              throw new Error(`Unknown HTTP2 promise event: ${event}`);
            }
            return result;
          };
        }
        return result;
      }, cache);
      cacheableStore.set(cache, cacheableRequest.request());
    }
  }
  async _createCacheableRequest(url, options) {
    return new Promise((resolve, reject) => {
      Object.assign(options, urlToOptions(url));
      let request;
      const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
        response._readableState.autoDestroy = false;
        if (request) {
          const fix = () => {
            if (response.req) {
              response.complete = response.req.res.complete;
            }
          };
          response.prependOnceListener("end", fix);
          fix();
          (await request).emit("cacheableResponse", response);
        }
        resolve(response);
      });
      cacheRequest.once("error", reject);
      cacheRequest.once("request", async (requestOrPromise) => {
        request = requestOrPromise;
        resolve(request);
      });
    });
  }
  async _makeRequest() {
    const { options } = this;
    const { headers, username, password } = options;
    const cookieJar = options.cookieJar;
    for (const key in headers) {
      if (dist_default.undefined(headers[key])) {
        delete headers[key];
      } else if (dist_default.null_(headers[key])) {
        throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
      }
    }
    if (options.decompress && dist_default.undefined(headers["accept-encoding"])) {
      headers["accept-encoding"] = supportsBrotli ? "gzip, deflate, br" : "gzip, deflate";
    }
    if (username || password) {
      const credentials = import_node_buffer2.Buffer.from(`${username}:${password}`).toString("base64");
      headers.authorization = `Basic ${credentials}`;
    }
    if (cookieJar) {
      const cookieString = await cookieJar.getCookieString(options.url.toString());
      if (dist_default.nonEmptyString(cookieString)) {
        headers.cookie = cookieString;
      }
    }
    options.prefixUrl = "";
    let request;
    for (const hook of options.hooks.beforeRequest) {
      const result = await hook(options);
      if (!dist_default.undefined(result)) {
        request = () => result;
        break;
      }
    }
    if (!request) {
      request = options.getRequestFunction();
    }
    const url = options.url;
    this._requestOptions = options.createNativeRequestOptions();
    if (options.cache) {
      this._requestOptions._request = request;
      this._requestOptions.cache = options.cache;
      this._requestOptions.body = options.body;
      this._prepareCache(options.cache);
    }
    const fn = options.cache ? this._createCacheableRequest : request;
    try {
      let requestOrResponse = fn(url, this._requestOptions);
      if (dist_default.promise(requestOrResponse)) {
        requestOrResponse = await requestOrResponse;
      }
      if (dist_default.undefined(requestOrResponse)) {
        requestOrResponse = options.getFallbackRequestFunction()(url, this._requestOptions);
        if (dist_default.promise(requestOrResponse)) {
          requestOrResponse = await requestOrResponse;
        }
      }
      if (is_client_request_default(requestOrResponse)) {
        this._onRequest(requestOrResponse);
      } else if (this.writable) {
        this.once("finish", () => {
          void this._onResponse(requestOrResponse);
        });
        this._sendBody();
      } else {
        void this._onResponse(requestOrResponse);
      }
    } catch (error) {
      if (error instanceof CacheError2) {
        throw new CacheError(error, this);
      }
      throw error;
    }
  }
  async _error(error) {
    try {
      if (error instanceof HTTPError && !this.options.throwHttpErrors) {
      } else {
        for (const hook of this.options.hooks.beforeError) {
          error = await hook(error);
        }
      }
    } catch (error_) {
      error = new RequestError(error_.message, error_, this);
    }
    this.destroy(error);
  }
  _writeRequest(chunk, encoding, callback) {
    if (!this._request || this._request.destroyed) {
      return;
    }
    this._request.write(chunk, encoding, (error) => {
      if (!error && !this._request.destroyed) {
        this._uploadedSize += import_node_buffer2.Buffer.byteLength(chunk, encoding);
        const progress = this.uploadProgress;
        if (progress.percent < 1) {
          this.emit("uploadProgress", progress);
        }
      }
      callback(error);
    });
  }
  /**
  The remote IP address.
  */
  get ip() {
    var _a;
    return (_a = this.socket) == null ? void 0 : _a.remoteAddress;
  }
  /**
  Indicates whether the request has been aborted or not.
  */
  get isAborted() {
    return this._aborted;
  }
  get socket() {
    var _a;
    return ((_a = this._request) == null ? void 0 : _a.socket) ?? void 0;
  }
  /**
  Progress event for downloading (receiving a response).
  */
  get downloadProgress() {
    let percent;
    if (this._responseSize) {
      percent = this._downloadedSize / this._responseSize;
    } else if (this._responseSize === this._downloadedSize) {
      percent = 1;
    } else {
      percent = 0;
    }
    return {
      percent,
      transferred: this._downloadedSize,
      total: this._responseSize
    };
  }
  /**
  Progress event for uploading (sending a request).
  */
  get uploadProgress() {
    let percent;
    if (this._bodySize) {
      percent = this._uploadedSize / this._bodySize;
    } else if (this._bodySize === this._uploadedSize) {
      percent = 1;
    } else {
      percent = 0;
    }
    return {
      percent,
      transferred: this._uploadedSize,
      total: this._bodySize
    };
  }
  /**
      The object contains the following properties:
  
      - `start` - Time when the request started.
      - `socket` - Time when a socket was assigned to the request.
      - `lookup` - Time when the DNS lookup finished.
      - `connect` - Time when the socket successfully connected.
      - `secureConnect` - Time when the socket securely connected.
      - `upload` - Time when the request finished uploading.
      - `response` - Time when the request fired `response` event.
      - `end` - Time when the response fired `end` event.
      - `error` - Time when the request fired `error` event.
      - `abort` - Time when the request fired `abort` event.
      - `phases`
          - `wait` - `timings.socket - timings.start`
          - `dns` - `timings.lookup - timings.socket`
          - `tcp` - `timings.connect - timings.lookup`
          - `tls` - `timings.secureConnect - timings.connect`
          - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
          - `firstByte` - `timings.response - timings.upload`
          - `download` - `timings.end - timings.response`
          - `total` - `(timings.end || timings.error || timings.abort) - timings.start`
  
      If something has not been measured yet, it will be `undefined`.
  
      __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
      */
  get timings() {
    var _a;
    return (_a = this._request) == null ? void 0 : _a.timings;
  }
  /**
  Whether the response was retrieved from the cache.
  */
  get isFromCache() {
    return this._isFromCache;
  }
  get reusedSocket() {
    var _a;
    return (_a = this._request) == null ? void 0 : _a.reusedSocket;
  }
};

// node_modules/got/dist/source/as-promise/types.js
var CancelError2 = class extends RequestError {
  constructor(request) {
    super("Promise was canceled", {}, request);
    this.name = "CancelError";
    this.code = "ERR_CANCELED";
  }
  /**
  Whether the promise is canceled.
  */
  get isCanceled() {
    return true;
  }
};

// node_modules/got/dist/source/as-promise/index.js
var proxiedRequestEvents2 = [
  "request",
  "response",
  "redirect",
  "uploadProgress",
  "downloadProgress"
];
function asPromise(firstRequest) {
  let globalRequest;
  let globalResponse;
  let normalizedOptions;
  const emitter = new import_node_events2.EventEmitter();
  const promise = new PCancelable((resolve, reject, onCancel) => {
    onCancel(() => {
      globalRequest.destroy();
    });
    onCancel.shouldReject = false;
    onCancel(() => {
      reject(new CancelError2(globalRequest));
    });
    const makeRequest = (retryCount) => {
      var _a;
      onCancel(() => {
      });
      const request = firstRequest ?? new Request(void 0, void 0, normalizedOptions);
      request.retryCount = retryCount;
      request._noPipe = true;
      globalRequest = request;
      request.once("response", async (response) => {
        const contentEncoding = (response.headers["content-encoding"] ?? "").toLowerCase();
        const isCompressed = contentEncoding === "gzip" || contentEncoding === "deflate" || contentEncoding === "br";
        const { options } = request;
        if (isCompressed && !options.decompress) {
          response.body = response.rawBody;
        } else {
          try {
            response.body = parseBody(response, options.responseType, options.parseJson, options.encoding);
          } catch (error) {
            response.body = response.rawBody.toString();
            if (isResponseOk(response)) {
              request._beforeError(error);
              return;
            }
          }
        }
        try {
          const hooks = options.hooks.afterResponse;
          for (const [index, hook] of hooks.entries()) {
            response = await hook(response, async (updatedOptions) => {
              options.merge(updatedOptions);
              options.prefixUrl = "";
              if (updatedOptions.url) {
                options.url = updatedOptions.url;
              }
              options.hooks.afterResponse = options.hooks.afterResponse.slice(0, index);
              throw new RetryError(request);
            });
            if (!(dist_default.object(response) && dist_default.number(response.statusCode) && !dist_default.nullOrUndefined(response.body))) {
              throw new TypeError("The `afterResponse` hook returned an invalid value");
            }
          }
        } catch (error) {
          request._beforeError(error);
          return;
        }
        globalResponse = response;
        if (!isResponseOk(response)) {
          request._beforeError(new HTTPError(response));
          return;
        }
        request.destroy();
        resolve(request.options.resolveBodyOnly ? response.body : response);
      });
      const onError = (error) => {
        if (promise.isCanceled) {
          return;
        }
        const { options } = request;
        if (error instanceof HTTPError && !options.throwHttpErrors) {
          const { response } = error;
          request.destroy();
          resolve(request.options.resolveBodyOnly ? response.body : response);
          return;
        }
        reject(error);
      };
      request.once("error", onError);
      const previousBody = (_a = request.options) == null ? void 0 : _a.body;
      request.once("retry", (newRetryCount, error) => {
        firstRequest = void 0;
        const newBody = request.options.body;
        if (previousBody === newBody && dist_default.nodeStream(newBody)) {
          error.message = "Cannot retry with consumed body stream";
          onError(error);
          return;
        }
        normalizedOptions = request.options;
        makeRequest(newRetryCount);
      });
      proxyEvents(request, emitter, proxiedRequestEvents2);
      if (dist_default.undefined(firstRequest)) {
        void request.flush();
      }
    };
    makeRequest(0);
  });
  promise.on = (event, fn) => {
    emitter.on(event, fn);
    return promise;
  };
  promise.off = (event, fn) => {
    emitter.off(event, fn);
    return promise;
  };
  const shortcut = (responseType) => {
    const newPromise = (async () => {
      await promise;
      const { options } = globalResponse.request;
      return parseBody(globalResponse, responseType, options.parseJson, options.encoding);
    })();
    Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
    return newPromise;
  };
  promise.json = () => {
    if (globalRequest.options) {
      const { headers } = globalRequest.options;
      if (!globalRequest.writableFinished && !("accept" in headers)) {
        headers.accept = "application/json";
      }
    }
    return shortcut("json");
  };
  promise.buffer = () => shortcut("buffer");
  promise.text = () => shortcut("text");
  return promise;
}

// node_modules/got/dist/source/create.js
var delay = async (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
var isGotInstance = (value) => dist_default.function_(value);
var aliases = [
  "get",
  "post",
  "put",
  "patch",
  "head",
  "delete"
];
var create = (defaults2) => {
  defaults2 = {
    options: new Options(void 0, void 0, defaults2.options),
    handlers: [...defaults2.handlers],
    mutableDefaults: defaults2.mutableDefaults
  };
  Object.defineProperty(defaults2, "mutableDefaults", {
    enumerable: true,
    configurable: false,
    writable: false
  });
  const got2 = (url, options, defaultOptions3 = defaults2.options) => {
    const request = new Request(url, options, defaultOptions3);
    let promise;
    const lastHandler = (normalized) => {
      request.options = normalized;
      request._noPipe = !normalized.isStream;
      void request.flush();
      if (normalized.isStream) {
        return request;
      }
      if (!promise) {
        promise = asPromise(request);
      }
      return promise;
    };
    let iteration = 0;
    const iterateHandlers = (newOptions) => {
      const handler = defaults2.handlers[iteration++] ?? lastHandler;
      const result = handler(newOptions, iterateHandlers);
      if (dist_default.promise(result) && !request.options.isStream) {
        if (!promise) {
          promise = asPromise(request);
        }
        if (result !== promise) {
          const descriptors = Object.getOwnPropertyDescriptors(promise);
          for (const key in descriptors) {
            if (key in result) {
              delete descriptors[key];
            }
          }
          Object.defineProperties(result, descriptors);
          result.cancel = promise.cancel;
        }
      }
      return result;
    };
    return iterateHandlers(request.options);
  };
  got2.extend = (...instancesOrOptions) => {
    const options = new Options(void 0, void 0, defaults2.options);
    const handlers = [...defaults2.handlers];
    let mutableDefaults;
    for (const value of instancesOrOptions) {
      if (isGotInstance(value)) {
        options.merge(value.defaults.options);
        handlers.push(...value.defaults.handlers);
        mutableDefaults = value.defaults.mutableDefaults;
      } else {
        options.merge(value);
        if (value.handlers) {
          handlers.push(...value.handlers);
        }
        mutableDefaults = value.mutableDefaults;
      }
    }
    return create({
      options,
      handlers,
      mutableDefaults: Boolean(mutableDefaults)
    });
  };
  const paginateEach = async function* (url, options) {
    let normalizedOptions = new Options(url, options, defaults2.options);
    normalizedOptions.resolveBodyOnly = false;
    const { pagination } = normalizedOptions;
    assert.function_(pagination.transform);
    assert.function_(pagination.shouldContinue);
    assert.function_(pagination.filter);
    assert.function_(pagination.paginate);
    assert.number(pagination.countLimit);
    assert.number(pagination.requestLimit);
    assert.number(pagination.backoff);
    const allItems = [];
    let { countLimit } = pagination;
    let numberOfRequests = 0;
    while (numberOfRequests < pagination.requestLimit) {
      if (numberOfRequests !== 0) {
        await delay(pagination.backoff);
      }
      const response = await got2(void 0, void 0, normalizedOptions);
      const parsed = await pagination.transform(response);
      const currentItems = [];
      assert.array(parsed);
      for (const item of parsed) {
        if (pagination.filter({ item, currentItems, allItems })) {
          if (!pagination.shouldContinue({ item, currentItems, allItems })) {
            return;
          }
          yield item;
          if (pagination.stackAllItems) {
            allItems.push(item);
          }
          currentItems.push(item);
          if (--countLimit <= 0) {
            return;
          }
        }
      }
      const optionsToMerge = pagination.paginate({
        response,
        currentItems,
        allItems
      });
      if (optionsToMerge === false) {
        return;
      }
      if (optionsToMerge === response.request.options) {
        normalizedOptions = response.request.options;
      } else {
        normalizedOptions.merge(optionsToMerge);
        assert.any([dist_default.urlInstance, dist_default.undefined], optionsToMerge.url);
        if (optionsToMerge.url !== void 0) {
          normalizedOptions.prefixUrl = "";
          normalizedOptions.url = optionsToMerge.url;
        }
      }
      numberOfRequests++;
    }
  };
  got2.paginate = paginateEach;
  got2.paginate.all = async (url, options) => {
    const results = [];
    for await (const item of paginateEach(url, options)) {
      results.push(item);
    }
    return results;
  };
  got2.paginate.each = paginateEach;
  got2.stream = (url, options) => got2(url, { ...options, isStream: true });
  for (const method of aliases) {
    got2[method] = (url, options) => got2(url, { ...options, method });
    got2.stream[method] = (url, options) => got2(url, { ...options, method, isStream: true });
  }
  if (!defaults2.mutableDefaults) {
    Object.freeze(defaults2.handlers);
    defaults2.options.freeze();
  }
  Object.defineProperty(got2, "defaults", {
    value: defaults2,
    writable: false,
    configurable: false,
    enumerable: true
  });
  return got2;
};
var create_default = create;

// node_modules/got/dist/source/index.js
var defaults = {
  options: new Options(),
  handlers: [],
  mutableDefaults: false
};
var got = create_default(defaults);
var source_default2 = got;

// lib/reader.js
var import_iconv_lite = __toESM(require("iconv-lite"), 1);
var import_long = __toESM(require("long"), 1);
var import_node_buffer3 = require("node:buffer");
var import_varint = __toESM(require("varint"), 1);
function readUInt64BE(buffer, offset) {
  const high = buffer.readUInt32BE(offset);
  const low = buffer.readUInt32BE(offset + 4);
  return new import_long.default(low, high, true);
}
function readUInt64LE(buffer, offset) {
  const low = buffer.readUInt32LE(offset);
  const high = buffer.readUInt32LE(offset + 4);
  return new import_long.default(low, high, true);
}
var Reader = class {
  /**
     * @param {Core} query
     * @param {Buffer} buffer
     **/
  constructor(query, buffer) {
    this.defaultEncoding = query.options.encoding || query.encoding;
    this.defaultDelimiter = query.delimiter;
    this.defaultByteOrder = query.byteorder;
    this.buffer = buffer;
    this.i = 0;
  }
  setOffset(offset) {
    this.i = offset;
  }
  offset() {
    return this.i;
  }
  skip(i) {
    this.i += i;
  }
  pascalString(bytesForSize, adjustment = 0) {
    const length = this.uint(bytesForSize) + adjustment;
    return this.string(length);
  }
  string(arg) {
    let encoding = this.defaultEncoding;
    let length = null;
    let delimiter = this.defaultDelimiter;
    if (typeof arg === "string")
      delimiter = arg;
    else if (typeof arg === "number")
      length = arg;
    else if (typeof arg === "object") {
      if ("encoding" in arg)
        encoding = arg.encoding;
      if ("length" in arg)
        length = arg.length;
      if ("delimiter" in arg)
        delimiter = arg.delimiter;
    }
    if (encoding === "latin1")
      encoding = "win1252";
    const start = this.i;
    let end = start;
    if (length === null) {
      let delim = delimiter;
      if (typeof delim === "string")
        delim = delim.charCodeAt(0);
      while (true) {
        if (end >= this.buffer.length) {
          end = this.buffer.length;
          break;
        }
        if (this.buffer.readUInt8(end) === delim)
          break;
        end++;
      }
      this.i = end + 1;
    } else if (length <= 0) {
      return "";
    } else {
      end = start + length;
      if (end >= this.buffer.length) {
        end = this.buffer.length;
      }
      this.i = end;
    }
    const slice = this.buffer.slice(start, end);
    const enc = encoding;
    if (enc === "utf8" || enc === "ucs2" || enc === "binary") {
      return slice.toString(enc);
    } else {
      return import_iconv_lite.default.decode(slice, enc);
    }
  }
  int(bytes) {
    let r = 0;
    if (this.remaining() >= bytes) {
      if (this.defaultByteOrder === "be") {
        if (bytes === 1)
          r = this.buffer.readInt8(this.i);
        else if (bytes === 2)
          r = this.buffer.readInt16BE(this.i);
        else if (bytes === 4)
          r = this.buffer.readInt32BE(this.i);
      } else {
        if (bytes === 1)
          r = this.buffer.readInt8(this.i);
        else if (bytes === 2)
          r = this.buffer.readInt16LE(this.i);
        else if (bytes === 4)
          r = this.buffer.readInt32LE(this.i);
      }
    }
    this.i += bytes;
    return r;
  }
  /** @returns {number} */
  uint(bytes) {
    let r = 0;
    if (this.remaining() >= bytes) {
      if (this.defaultByteOrder === "be") {
        if (bytes === 1)
          r = this.buffer.readUInt8(this.i);
        else if (bytes === 2)
          r = this.buffer.readUInt16BE(this.i);
        else if (bytes === 4)
          r = this.buffer.readUInt32BE(this.i);
        else if (bytes === 8)
          r = readUInt64BE(this.buffer, this.i);
      } else {
        if (bytes === 1)
          r = this.buffer.readUInt8(this.i);
        else if (bytes === 2)
          r = this.buffer.readUInt16LE(this.i);
        else if (bytes === 4)
          r = this.buffer.readUInt32LE(this.i);
        else if (bytes === 8)
          r = readUInt64LE(this.buffer, this.i);
      }
    }
    this.i += bytes;
    return r;
  }
  float() {
    let r = 0;
    if (this.remaining() >= 4) {
      if (this.defaultByteOrder === "be")
        r = this.buffer.readFloatBE(this.i);
      else
        r = this.buffer.readFloatLE(this.i);
    }
    this.i += 4;
    return r;
  }
  varint() {
    const out = import_varint.default.decode(this.buffer, this.i);
    this.i += import_varint.default.decode.bytes;
    return out;
  }
  /** @returns Buffer */
  part(bytes) {
    let r;
    if (this.remaining() >= bytes) {
      r = this.buffer.slice(this.i, this.i + bytes);
    } else {
      r = import_node_buffer3.Buffer.from([]);
    }
    this.i += bytes;
    return r;
  }
  remaining() {
    return this.buffer.length - this.i;
  }
  rest() {
    return this.buffer.slice(this.i);
  }
  done() {
    return this.i >= this.buffer.length;
  }
};

// lib/HexUtil.js
var debugDump = (buffer) => {
  let hexLine = "";
  let chrLine = "";
  let out = "";
  out += "Buffer length: " + buffer.length + " bytes\n";
  for (let i = 0; i < buffer.length; i++) {
    const sliced = buffer.slice(i, i + 1);
    hexLine += sliced.toString("hex") + " ";
    let chr = sliced.toString();
    if (chr < " " || chr > "~")
      chr = " ";
    chrLine += chr + "  ";
    if (hexLine.length > 60 || i === buffer.length - 1) {
      out += hexLine + "\n";
      out += chrLine + "\n";
      hexLine = chrLine = "";
    }
  }
  return out;
};

// lib/Logger.js
var import_node_buffer4 = require("node:buffer");
var Logger = class {
  constructor() {
    this.debugEnabled = false;
    this.prefix = "";
  }
  debug(...args) {
    if (!this.debugEnabled)
      return;
    this._print(...args);
  }
  _print(...args) {
    try {
      const strings = this._convertArgsToStrings(...args);
      if (strings.length) {
        if (this.prefix) {
          strings.unshift(this.prefix);
        }
        console.log(...strings);
      }
    } catch (e) {
      console.log("Error while logging: " + e);
    }
  }
  _convertArgsToStrings(...args) {
    const out = [];
    for (const arg of args) {
      if (arg instanceof Error) {
        out.push(arg.stack);
      } else if (arg instanceof import_node_buffer4.Buffer) {
        out.push(debugDump(arg));
      } else if (typeof arg === "function") {
        const result = arg.call(void 0, (...args2) => this._print(...args2));
        if (result !== void 0)
          out.push(...this._convertArgsToStrings(result));
      } else {
        out.push(arg);
      }
    }
    return out;
  }
};

// lib/DnsResolver.js
var import_node_dns2 = __toESM(require("node:dns"), 1);
var import_node_net2 = require("node:net");
var import_node_url2 = require("node:url");
var DnsResolver = class {
  /**
     * @param {Logger} logger
     */
  constructor(logger) {
    this.logger = logger;
  }
  /**
     * Resolve a host name to its IP, if the given host name is already
     * an IP address no request is made.
     *
     * If a srvRecordPrefix is provided a SRV request will be made and the
     * port returned will be included in the output.
     * @param {string} host
     * @param {number} ipFamily
     * @param {string=} srvRecordPrefix
     * @returns {Promise<{address:string, port:number=}>}
     */
  async resolve(host, ipFamily, srvRecordPrefix) {
    this.logger.debug("DNS Lookup: " + host);
    if ((0, import_node_net2.isIP)(host) === 4 || (0, import_node_net2.isIP)(host) === 6) {
      this.logger.debug("Raw IP Address: " + host);
      return { address: host };
    }
    const asciiForm = (0, import_node_url2.domainToASCII)(host);
    if (!asciiForm) {
      throw new Error("Invalid domain");
    }
    if (asciiForm !== host) {
      this.logger.debug("Encoded punycode: " + host + " -> " + asciiForm);
      host = asciiForm;
    }
    if (srvRecordPrefix) {
      this.logger.debug("SRV Resolve: " + srvRecordPrefix + "." + host);
      let records;
      try {
        records = await import_node_dns2.default.promises.resolve(srvRecordPrefix + "." + host, "SRV");
        if (records.length >= 1) {
          this.logger.debug("Found SRV Records: ", records);
          const record = records[0];
          const srvPort = record.port;
          const srvHost = record.name;
          if (srvHost === host) {
            throw new Error("Loop in DNS SRV records");
          }
          return {
            port: srvPort,
            ...await this.resolve(srvHost, ipFamily, srvRecordPrefix)
          };
        }
        this.logger.debug("No SRV Record");
      } catch (e) {
        this.logger.debug(e);
      }
    }
    this.logger.debug("Standard Resolve: " + host);
    const dnsResult = await import_node_dns2.default.promises.lookup(host, ipFamily);
    let address;
    if (typeof dnsResult === "string") {
      address = dnsResult;
    } else {
      address = dnsResult.address;
    }
    this.logger.debug("Found address: " + address);
    return { address };
  }
};

// lib/Results.js
var Player = class {
  name = "";
  raw = {};
  constructor(data) {
    if (typeof data === "string") {
      this.name = data;
    } else {
      const { name, ...raw } = data;
      if (name)
        this.name = name;
      if (raw)
        this.raw = raw;
    }
  }
};
var Players = class extends Array {
  push(data) {
    super.push(new Player(data));
  }
};
var Results = class {
  name = "";
  map = "";
  password = false;
  raw = {};
  version = "";
  maxplayers = 0;
  numplayers = 0;
  players = new Players();
  bots = new Players();
  queryPort = 0;
};

// lib/Promises.js
var Promises = class {
  static createTimeout(timeoutMs, timeoutMsg) {
    let cancel = null;
    const wrapped = new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => {
          reject(new Error(timeoutMsg + " - Timed out after " + timeoutMs + "ms"));
        },
        timeoutMs
      );
      cancel = () => {
        clearTimeout(timeout);
      };
    });
    wrapped.cancel = cancel;
    return wrapped;
  }
};

// protocols/core.js
var uid = 0;
var Core = class extends import_node_events3.EventEmitter {
  constructor() {
    super();
    this.encoding = "utf8";
    this.byteorder = "le";
    this.delimiter = "\0";
    this.srvRecord = null;
    this.abortedPromise = null;
    this.logger = new Logger();
    this.dnsResolver = new DnsResolver(this.logger);
    this.options = null;
    this.udpSocket = null;
    this.shortestRTT = 0;
    this.usedTcp = false;
  }
  // Runs a single attempt with a timeout and cleans up afterward
  async runOnceSafe() {
    const { debug, attemptTimeout } = this.options;
    if (debug) {
      this.logger.debugEnabled = true;
    }
    this.logger.prefix = "Q#" + uid++;
    this.logger.debug("Starting");
    this.logger.debug("Protocol: " + this.constructor.name);
    this.logger.debug("Options:", this.options);
    let abortCall = null;
    this.abortedPromise = new Promise((_resolve, reject) => {
      abortCall = () => reject(new Error("Query is finished -- cancelling outstanding promises"));
    }).catch(() => {
    });
    let timeout;
    try {
      const promise = this.runOnce();
      timeout = Promises.createTimeout(attemptTimeout, "Attempt");
      const result = await Promise.race([promise, timeout]);
      this.logger.debug("Query was successful");
      return result;
    } catch (e) {
      this.logger.debug("Query failed with error", e);
      throw e;
    } finally {
      timeout == null ? void 0 : timeout.cancel();
      try {
        abortCall == null ? void 0 : abortCall();
      } catch (e) {
        this.logger.debug("Error during abort cleanup: " + e.stack);
      }
    }
  }
  async runOnce() {
    const { options, dnsResolver } = this;
    if ("host" in options && !("address" in options)) {
      const resolved = await dnsResolver.resolve(options.host, options.ipFamily, this.srvRecord);
      options.address = resolved.address;
      options.port ||= resolved.port;
    }
    const state = new Results();
    await this.run(state);
    state.queryPort = options.port;
    state.name = (state.name || "").trim();
    state.connect = state.connect || `${state.gameHost || options.host || options.address}:${state.gamePort || options.port}`;
    state.ping = this.shortestRTT;
    delete state.gameHost;
    delete state.gamePort;
    this.logger.debug((log) => {
      log("Size of players array:", state.players.length);
      log("Size of bots array:", state.bots.length);
    });
    return state;
  }
  async run(state) {
  }
  /** Param can be a time in ms, or a promise (which will be timed) */
  registerRtt(param) {
    if (param instanceof Promise) {
      const start = Date.now();
      param.then(() => {
        this.registerRtt(Date.now() - start);
      }).catch((_) => {
      });
    } else {
      this.logger.debug("Registered RTT: " + param + "ms");
      if (this.shortestRTT === 0 || param < this.shortestRTT) {
        this.shortestRTT = param;
      }
    }
  }
  // utils
  /** @returns {Reader} */
  reader(buffer) {
    return new Reader(this, buffer);
  }
  translate(obj, trans) {
    for (const from of Object.keys(trans)) {
      const to = trans[from];
      if (from in obj) {
        if (to)
          obj[to] = obj[from];
        delete obj[from];
      }
    }
  }
  trueTest(str) {
    if (typeof str === "boolean")
      return str;
    if (typeof str === "number")
      return str !== 0;
    if (typeof str === "string") {
      if (str.toLowerCase() === "true")
        return true;
      if (str.toLowerCase() === "yes")
        return true;
      if (str === "1")
        return true;
    }
    return false;
  }
  assertValidPort(port) {
    if (!port) {
      throw new Error("Could not determine port to query. Did you provide a port?");
    }
    if (port < 1 || port > 65535) {
      throw new Error("Invalid tcp/ip port: " + port);
    }
  }
  /**
     * @template T
     * @param {function(NodeJS.Socket):Promise<T>} fn
     * @param {number=} port
     * @returns {Promise<T>}
     */
  async withTcp(fn, port) {
    this.usedTcp = true;
    const { options, logger } = this;
    const address = this.options.address;
    port ??= options.port;
    this.assertValidPort(port);
    let socket, connectionTimeout;
    try {
      socket = net2.connect(port, address);
      socket.setNoDelay(true);
      socket.on("error", () => {
      });
      logger.debug((log) => {
        logger.debug(address + ":" + port + " TCP Connecting");
        const writeHook = socket.write;
        socket.write = (...args) => {
          log(address + ":" + port + " TCP-->");
          log(debugDump(args[0]));
          writeHook.apply(socket, args);
        };
        socket.on("error", (e) => log("TCP Error:", e));
        socket.on("close", () => log("TCP Closed"));
        socket.on("data", (data) => {
          log(`${address}:${port} <--TCP`);
          log(data);
        });
        socket.on("ready", () => log(`${address}:${port} TCP Connected`));
      });
      const connectionPromise = new Promise((resolve, reject) => {
        socket.on("ready", resolve);
        socket.on("close", () => reject(new Error("TCP Connection Refused")));
      });
      this.registerRtt(connectionPromise);
      connectionTimeout = Promises.createTimeout(this.options.socketTimeout, "TCP Opening");
      await Promise.race([
        connectionPromise,
        connectionTimeout,
        this.abortedPromise
      ]);
      return await fn(socket);
    } finally {
      socket == null ? void 0 : socket.destroy();
      connectionTimeout == null ? void 0 : connectionTimeout.cancel();
    }
  }
  /**
     * @template T
     * @param {NodeJS.Socket} socket
     * @param {Buffer|string} buffer
     * @param {function(Buffer):T} ondata
     * @returns Promise<T>
     */
  async tcpSend(socket, buffer, ondata) {
    let timeout;
    try {
      const promise = new Promise((resolve, _reject) => {
        let received = Buffer.from([]);
        const onData = (data) => {
          received = Buffer.concat([received, data]);
          const result = ondata(received);
          if (result !== void 0) {
            socket.removeListener("data", onData);
            resolve(result);
          }
        };
        socket.on("data", onData);
        socket.write(buffer);
      });
      timeout = Promises.createTimeout(this.options.socketTimeout, "TCP");
      return await Promise.race([promise, timeout, this.abortedPromise]);
    } finally {
      timeout == null ? void 0 : timeout.cancel();
    }
  }
  /**
     * @param {Buffer|string} buffer
     * @param {function(Buffer):T=} onPacket
     * @param {(function():T)=} onTimeout
     * @returns Promise<T>
     * @template T
     */
  async udpSend(buffer, onPacket, onTimeout) {
    const { address, port, debug, socketTimeout } = this.options;
    this.assertValidPort(port);
    if (typeof buffer === "string")
      buffer = Buffer.from(buffer, "binary");
    const socket = this.udpSocket;
    await socket.send(buffer, address, port, this.options.debug);
    if (!onPacket && !onTimeout) {
      return null;
    }
    let socketCallback;
    let timeout;
    try {
      const promise = new Promise((resolve, reject) => {
        const start = Date.now();
        socketCallback = (fromAddress, fromPort, buffer2) => {
          try {
            if (fromAddress !== address || fromPort !== port)
              return;
            this.registerRtt(Date.now() - start);
            const result = onPacket(buffer2);
            if (result !== void 0) {
              this.logger.debug("UDP send finished by callback");
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        };
        socket.addCallback(socketCallback, debug);
      });
      timeout = Promises.createTimeout(socketTimeout, "UDP");
      const wrappedTimeout = Promise.resolve(timeout).catch((e) => {
        this.logger.debug("UDP timeout detected");
        if (onTimeout) {
          const result = onTimeout();
          if (result !== void 0) {
            this.logger.debug("UDP timeout resolved by callback");
            return result;
          }
        }
        throw e;
      });
      return await Promise.race([promise, wrappedTimeout, this.abortedPromise]);
    } finally {
      timeout == null ? void 0 : timeout.cancel();
      socketCallback && socket.removeCallback(socketCallback);
    }
  }
  async tcpPing() {
    if (!this.usedTcp) {
      await this.withTcp(() => {
      });
    }
  }
  async request(params) {
    await this.tcpPing();
    let requestPromise;
    try {
      requestPromise = source_default2({
        ...params,
        timeout: {
          request: this.options.socketTimeout
        }
      });
      this.logger.debug((log) => {
        log(() => params.url + " HTTP-->");
        requestPromise.then((response) => log(params.url + " <--HTTP " + response.statusCode)).catch(() => {
        });
      });
      const wrappedPromise = requestPromise.then((response) => {
        if (response.statusCode !== 200)
          throw new Error("Bad status code: " + response.statusCode);
        return response.body;
      });
      return await Promise.race([wrappedPromise, this.abortedPromise]);
    } finally {
      requestPromise == null ? void 0 : requestPromise.cancel();
    }
  }
};

// protocols/armagetron.js
var armagetron = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.byteorder = "be";
  }
  async run(state) {
    const b = Buffer.from([0, 53, 0, 0, 0, 0, 0, 17]);
    const buffer = await this.udpSend(b, (b2) => b2);
    const reader = this.reader(buffer);
    reader.skip(6);
    state.gamePort = this.readUInt(reader);
    state.raw.hostname = this.readString(reader);
    state.name = this.stripColorCodes(this.readString(reader));
    state.numplayers = this.readUInt(reader);
    state.raw.versionmin = this.readUInt(reader);
    state.raw.versionmax = this.readUInt(reader);
    state.version = this.readString(reader);
    state.maxplayers = this.readUInt(reader);
    const players = this.readString(reader);
    const list = players.split("\n");
    for (const name of list) {
      if (!name)
        continue;
      state.players.push({
        name: this.stripColorCodes(name)
      });
    }
    state.raw.options = this.stripColorCodes(this.readString(reader));
    state.raw.uri = this.readString(reader);
    state.raw.globalids = this.readString(reader);
  }
  readUInt(reader) {
    const a = reader.uint(2);
    const b = reader.uint(2);
    return (b << 16) + a;
  }
  readString(reader) {
    const len = reader.uint(2);
    if (!len)
      return "";
    let out = "";
    for (let i = 0; i < len; i += 2) {
      const hi = reader.uint(1);
      const lo = reader.uint(1);
      if (i + 1 < len)
        out += String.fromCharCode(lo);
      if (i + 2 < len)
        out += String.fromCharCode(hi);
    }
    return out;
  }
  stripColorCodes(str) {
    return this.options.stripColors ? str.replace(/0x[0-9a-f]{6}/g, "") : str;
  }
};

// protocols/ase.js
var ase = class extends Core {
  async run(state) {
    const buffer = await this.udpSend("s", (buffer2) => {
      const reader2 = this.reader(buffer2);
      const header = reader2.string(4);
      if (header === "EYE1")
        return reader2.rest();
    });
    const reader = this.reader(buffer);
    state.raw.gamename = this.readString(reader);
    state.gamePort = parseInt(this.readString(reader));
    state.name = this.readString(reader);
    state.raw.gametype = this.readString(reader);
    state.map = this.readString(reader);
    state.version = this.readString(reader);
    state.password = this.readString(reader) === "1";
    state.numplayers = parseInt(this.readString(reader));
    state.maxplayers = parseInt(this.readString(reader));
    while (!reader.done()) {
      const key = this.readString(reader);
      if (!key)
        break;
      const value = this.readString(reader);
      state.raw[key] = value;
    }
    while (!reader.done()) {
      const flags = reader.uint(1);
      const player = {};
      if (flags & 1)
        player.name = this.readString(reader);
      if (flags & 2)
        player.team = this.readString(reader);
      if (flags & 4)
        player.skin = this.readString(reader);
      if (flags & 8)
        player.score = parseInt(this.readString(reader));
      if (flags & 16)
        player.ping = parseInt(this.readString(reader));
      if (flags & 32)
        player.time = parseInt(this.readString(reader));
      state.players.push(player);
    }
  }
  readString(reader) {
    return reader.pascalString(1, -1);
  }
};

// protocols/epic.js
var Epic = class extends Core {
  constructor() {
    super();
    this.clientId = null;
    this.clientSecret = null;
    this.deploymentId = null;
    this.epicApi = "https://api.epicgames.dev";
    this.authByExternalToken = false;
    this.deviceIdAccessToken = null;
    this.accessToken = null;
    this.usedTcp = true;
  }
  async run(state) {
    if (this.authByExternalToken) {
      await this.getExternalAccessToken();
    } else {
      await this.getClientAccessToken();
    }
    await this.queryInfo(state);
    await this.cleanup(state);
  }
  async getClientAccessToken() {
    this.logger.debug("Requesting client access token ...");
    const url = `${this.epicApi}/auth/v1/oauth/token`;
    const body = `grant_type=client_credentials&deployment_id=${this.deploymentId}`;
    const headers = {
      Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.logger.debug(`POST: ${url}`);
    const response = await this.request({ url, body, headers, method: "POST", responseType: "json" });
    this.accessToken = response.access_token;
  }
  async _getDeviceIdToken() {
    this.logger.debug("Requesting deviceId access token ...");
    const url = `${this.epicApi}/auth/v1/accounts/deviceid`;
    const body = "deviceModel=PC";
    const headers = {
      Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.logger.debug(`POST: ${url}`);
    const response = await this.request({ url, body, headers, method: "POST", responseType: "json" });
    return response.access_token;
  }
  async getExternalAccessToken() {
    this.logger.debug("Requesting external access token ...");
    const deviceIdToken = await this._getDeviceIdToken();
    const url = `${this.epicApi}/auth/v1/oauth/token`;
    const bodyParts = [
      "grant_type=external_auth",
      "external_auth_type=deviceid_access_token",
      `external_auth_token=${deviceIdToken}`,
      "nonce=ABCHFA3qgUCJ1XTPAoGDEF",
      // This is required but can be set to anything
      `deployment_id=${this.deploymentId}`,
      "display_name=User"
    ];
    const body = bodyParts.join("&");
    const headers = {
      Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.logger.debug(`POST: ${url}`);
    const response = await this.request({ url, body, headers, method: "POST", responseType: "json" });
    this.accessToken = response.access_token;
  }
  async queryInfo(state) {
    const url = `${this.epicApi}/matchmaking/v1/${this.deploymentId}/filter`;
    const body = {
      criteria: [
        {
          key: "attributes.ADDRESS_s",
          op: "EQUAL",
          value: this.options.address
        }
      ]
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${this.accessToken}`
    };
    this.logger.debug(`POST: ${url}`);
    const response = await this.request({ url, json: body, headers, method: "POST", responseType: "json" });
    const hasDesiredPort = (session) => session.attributes.ADDRESSBOUND_s === `0.0.0.0:${this.options.port}` || session.attributes.ADDRESSBOUND_s === `${this.options.address}:${this.options.port}` || session.attributes.GAMESERVER_PORT_l === this.options.port;
    const desiredServer = response.sessions.find(hasDesiredPort);
    if (!desiredServer) {
      throw new Error("Server not found");
    }
    state.name = desiredServer.attributes.CUSTOMSERVERNAME_s;
    state.map = desiredServer.attributes.MAPNAME_s;
    state.password = desiredServer.attributes.SERVERPASSWORD_b;
    state.numplayers = desiredServer.totalPlayers;
    state.maxplayers = desiredServer.settings.maxPublicPlayers;
    for (const player of desiredServer.publicPlayers) {
      state.players.push({
        name: player.name,
        raw: player
      });
    }
    state.raw = desiredServer;
  }
  async cleanup(state) {
    this.accessToken = null;
  }
};

// protocols/asa.js
var asa = class extends Epic {
  constructor() {
    super();
    this.clientId = "xyza7891muomRmynIIHaJB9COBKkwj6n";
    this.clientSecret = "PP5UGxysEieNfSrEicaD1N2Bb3TdXuD7xHYcsdUHZ7s";
    this.deploymentId = "ad9a8feffb3b4b2ca315546f038c3ae2";
  }
  async run(state) {
    await super.run(state);
    state.version = state.raw.attributes.BUILDID_s + "." + state.raw.attributes.MINORBUILDID_s;
  }
};

// protocols/assettocorsa.js
var assettocorsa = class extends Core {
  async run(state) {
    const serverInfo = await this.request({
      url: `http://${this.options.address}:${this.options.port}/INFO`,
      responseType: "json"
    });
    const carInfo = await this.request({
      url: `http://${this.options.address}:${this.options.port}/JSON|${Math.floor(Math.random() * 999999999999999)}`,
      responseType: "json"
    });
    if (!serverInfo || !carInfo || !carInfo.Cars) {
      throw new Error("Query not successful");
    }
    state.maxplayers = serverInfo.maxclients;
    state.name = serverInfo.name;
    state.map = serverInfo.track;
    state.password = serverInfo.pass;
    state.gamePort = serverInfo.port;
    state.numplayers = serverInfo.clients;
    state.version = serverInfo.poweredBy;
    state.raw.carInfo = carInfo.Cars;
    state.raw.serverInfo = serverInfo;
    for (const car of carInfo.Cars) {
      if (car.IsConnected) {
        state.players.push({
          name: car.DriverName,
          car: car.Model,
          skin: car.Skin,
          nation: car.DriverNation,
          team: car.DriverTeam
        });
      }
    }
  }
};

// protocols/battlefield.js
var battlefield = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
  }
  async run(state) {
    await this.withTcp(async (socket) => {
      {
        const data = await this.query(socket, ["serverInfo"]);
        state.name = data.shift();
        state.numplayers = parseInt(data.shift());
        state.maxplayers = parseInt(data.shift());
        state.raw.gametype = data.shift();
        state.map = data.shift();
        state.raw.roundsplayed = parseInt(data.shift());
        state.raw.roundstotal = parseInt(data.shift());
        const teamCount = data.shift();
        state.raw.teams = [];
        for (let i = 0; i < teamCount; i++) {
          const tickets = parseFloat(data.shift());
          state.raw.teams.push({
            tickets
          });
        }
        state.raw.targetscore = parseInt(data.shift());
        state.raw.status = data.shift();
        if (data.length)
          state.raw.ranked = data.shift() === "true";
        if (data.length)
          state.raw.punkbuster = data.shift() === "true";
        if (data.length)
          state.password = data.shift() === "true";
        if (data.length)
          state.raw.uptime = parseInt(data.shift());
        if (data.length)
          state.raw.roundtime = parseInt(data.shift());
        const isBadCompany2 = data[0] === "BC2";
        if (isBadCompany2) {
          if (data.length)
            data.shift();
          if (data.length)
            data.shift();
        }
        if (data.length) {
          state.raw.ip = data.shift();
          const split = state.raw.ip.split(":");
          state.gameHost = split[0];
          state.gamePort = split[1];
        } else {
          if (this.options.port === 48888)
            state.gamePort = 7673;
          if (this.options.port === 22e3)
            state.gamePort = 25200;
        }
        if (data.length)
          state.raw.punkbusterversion = data.shift();
        if (data.length)
          state.raw.joinqueue = data.shift() === "true";
        if (data.length)
          state.raw.region = data.shift();
        if (data.length)
          state.raw.pingsite = data.shift();
        if (data.length)
          state.raw.country = data.shift();
        if (data.length)
          state.raw.quickmatch = data.shift() === "true";
      }
      {
        const data = await this.query(socket, ["version"]);
        data.shift();
        state.version = data.shift();
      }
      {
        const data = await this.query(socket, ["listPlayers", "all"]);
        const fieldCount = parseInt(data.shift());
        const fields = [];
        for (let i = 0; i < fieldCount; i++) {
          fields.push(data.shift());
        }
        const numplayers = data.shift();
        for (let i = 0; i < numplayers; i++) {
          const player = {};
          for (let key of fields) {
            let value = data.shift();
            if (key === "teamId")
              key = "team";
            else if (key === "squadId")
              key = "squad";
            if (key === "kills" || key === "deaths" || key === "score" || key === "rank" || key === "team" || key === "squad" || key === "ping" || key === "type") {
              value = parseInt(value);
            }
            player[key] = value;
          }
          state.players.push(player);
        }
      }
    });
  }
  async query(socket, params) {
    const outPacket = this.buildPacket(params);
    return await this.tcpSend(socket, outPacket, (data) => {
      const decoded = this.decodePacket(data);
      if (decoded) {
        this.logger.debug(decoded);
        if (decoded.shift() !== "OK")
          throw new Error("Missing OK");
        return decoded;
      }
    });
  }
  buildPacket(params) {
    const paramBuffers = [];
    for (const param of params) {
      paramBuffers.push(Buffer.from(param, "utf8"));
    }
    let totalLength = 12;
    for (const paramBuffer of paramBuffers) {
      totalLength += paramBuffer.length + 1 + 4;
    }
    const b = Buffer.alloc(totalLength);
    b.writeUInt32LE(0, 0);
    b.writeUInt32LE(totalLength, 4);
    b.writeUInt32LE(params.length, 8);
    let offset = 12;
    for (const paramBuffer of paramBuffers) {
      b.writeUInt32LE(paramBuffer.length, offset);
      offset += 4;
      paramBuffer.copy(b, offset);
      offset += paramBuffer.length;
      b.writeUInt8(0, offset);
      offset += 1;
    }
    return b;
  }
  decodePacket(buffer) {
    if (buffer.length < 8)
      return false;
    const reader = this.reader(buffer);
    reader.uint(4);
    const totalLength = reader.uint(4);
    if (buffer.length < totalLength)
      return false;
    this.logger.debug("Expected " + totalLength + " bytes, have " + buffer.length);
    const paramCount = reader.uint(4);
    const params = [];
    for (let i = 0; i < paramCount; i++) {
      params.push(reader.pascalString(4));
      reader.uint(1);
    }
    return params;
  }
};

// protocols/brokeprotocolmaster.js
function objectKeysToLowerCase(input) {
  if (typeof input !== "object")
    return input;
  if (Array.isArray(input))
    return input.map(objectKeysToLowerCase);
  return Object.keys(input).reduce(function(newObj, key) {
    const val = input[key];
    const newVal = typeof val === "object" && val !== null ? objectKeysToLowerCase(val) : val;
    newObj[key.toLowerCase()] = newVal;
    return newObj;
  }, {});
}
var brokeprotocolmaster = class extends Core {
  constructor() {
    super();
    this.backendApiUriServers = "https://bp.userr00t.com/serverbrowser/api/server";
    this.backendApiUriServer = "https://bp.userr00t.com/serverbrowser/api/server/{id}";
    this.backendApiUriCheck = "https://bp.userr00t.com/serverbrowser/api/";
    this.fallbackUri = "https://brokeprotocol.com/servers.json";
    this.hexCharacters = [
      "&0",
      "&1",
      "&2",
      "&3",
      "&4",
      "&5",
      "&6",
      "&7",
      "&8",
      "&9",
      "&a",
      "&b",
      "&c",
      "&d",
      "&e",
      "&f"
    ];
    this.usedTcp = true;
  }
  async run(state) {
    this.hasApi = await this.checkApi();
    await this.queryInfo(state);
  }
  async queryInfo(state) {
    if (this.doQuerySingle) {
      if (this.options.serverId) {
        await this.queryServerInfo(state, this.options.serverId);
      } else {
        await this.queryServerInfoFromMaster(state);
      }
    } else {
      await this.queryMasterServerList(state);
    }
  }
  async queryMasterServerList(state) {
    const servers = await this.getMasterServerList();
    state.raw.servers = servers.map((serverInfo) => {
      const serverState = JSON.parse(JSON.stringify(state));
      this.populateProperties(serverState, serverInfo);
      return serverState;
    });
  }
  async queryServerInfoFromMaster(state) {
    const servers = await this.getMasterServerList();
    const serverInfo = servers.find((server) => {
      return server.ip === this.options.address && `${server.port}` === `${this.options.port}`;
    });
    if (serverInfo == null) {
      throw new Error("Server not found in master server list");
    }
    this.populateProperties(state, serverInfo);
  }
  async queryServerInfo(state, serverId) {
    let serverInfo = null;
    if (this.hasApi) {
      serverInfo = await this.getServerInfo(serverId);
    }
    if (serverInfo == null) {
      throw new Error(`Unable to retrieve server info with given id: ${serverId}`);
    }
    this.populateProperties(state, serverInfo);
  }
  /**
   * Translates raw properties into known properties
   * @param {Object} state Parsed data
   * @param {Object} serverInfo Queried server info
   */
  populateProperties(state, serverInfo) {
    var _a, _b;
    state.gameHost = serverInfo.ip || null;
    state.gamePort = serverInfo.port || null;
    state.name = this.sanitizeServerName(serverInfo.name || "");
    state.map = ((_a = serverInfo.map) == null ? void 0 : _a.name) || "";
    state.password = false;
    const snaps = [...serverInfo.snapshots || []];
    snaps.sort((a, b) => (b == null ? void 0 : b.at) - (a == null ? void 0 : a.at));
    state.numplayers = serverInfo.playercount || ((_b = snaps[0]) == null ? void 0 : _b.playercount) || 0;
    state.maxplayers = serverInfo.playerlimit || 0;
    state.raw = serverInfo;
    state.version = serverInfo.version || "";
  }
  /**
   * Checks if the API is available
   * @returns a list of servers as raw data
   */
  async checkApi() {
    try {
      const response = await source_default2(this.backendApiUriCheck, {
        method: "HEAD",
        timeout: { request: 2e3 },
        retry: { limit: 0 }
      });
      return !!(response == null ? void 0 : response.ok);
    } catch (err) {
    }
    return false;
  }
  /**
   * Retrieves server list from master server
   * @throws {Error} Will throw error when no master list was received
   * @returns a list of servers as raw data
   */
  async getMasterServerList() {
    const queryUrl = this.hasApi ? this.backendApiUriServers : this.fallbackUri;
    const masterData = await this.request({
      url: queryUrl,
      responseType: "json",
      ...this.hasApi ? this.getSearchParams() : {}
    });
    const servers = this.hasApi ? masterData.servers : masterData;
    if (servers == null) {
      throw new Error("Unable to retrieve master server list");
    }
    if (!Array.isArray(servers)) {
      throw new Error("Invalid data received from master server. Expecting list of data");
    }
    if (servers.length === 0) {
      throw new Error("No data received from master server.");
    }
    const serversLowerCase = servers.map((x) => objectKeysToLowerCase(x));
    return serversLowerCase;
  }
  /**
   * Retrieves server info from API
   * @param {string} serverId the server id
   * @throws {Error} Will throw error when no master list was received
   * @returns a list of servers as raw data
   */
  async getServerInfo(serverId) {
    const serverInfo = await this.request({
      url: this.backendApiUriServer.replace(/{id}/g, serverId || ""),
      responseType: "json",
      ...this.getSearchParams()
    });
    if (serverInfo && !(typeof serverInfo === "object" && !Array.isArray(serverInfo))) {
      throw new Error("Invalid data received from API. Expecting object for server info");
    }
    return serverInfo;
  }
  sanitizeServerName(name) {
    const removeStringsRecursively = (inputString, stringsToRemove) => stringsToRemove.reduce((str, rem) => str.replace(new RegExp(rem, "g"), ""), inputString).trim();
    const sanitizedName = removeStringsRecursively(name, this.hexCharacters);
    return sanitizedName;
  }
  getSearchParams() {
    let intervalOption = null;
    const intervalOptions = ["1h", "6h", "12h", "1d", "3d", "1w", "2w", "4w"];
    if (this.options.snapshotInterval) {
      const opt = `${this.options.snapshotInterval}`.toLowerCase();
      if (intervalOptions.includes(opt)) {
        intervalOption = opt;
      }
    }
    return {
      searchParams: {
        snapshotInterval: intervalOption || "1h"
      }
    };
  }
};

// protocols/brokeprotocol.js
var brokeprotocol = class extends brokeprotocolmaster {
  constructor() {
    super();
    this.doQuerySingle = true;
    this.requireToken = true;
  }
};

// protocols/buildandshoot.js
var cheerio = __toESM(require("cheerio"), 1);
var buildandshoot = class extends Core {
  async run(state) {
    const body = await this.request({
      url: "http://" + this.options.address + ":" + this.options.port + "/"
    });
    let m;
    m = body.match(/status server for (.*?)\.?[\r\n]/);
    if (m)
      state.name = m[1];
    m = body.match(/Current uptime: (\d+)/);
    if (m)
      state.raw.uptime = m[1];
    m = body.match(/currently running (.*?) by /);
    if (m)
      state.map = m[1];
    m = body.match(/Current players: (\d+)\/(\d+)/);
    if (m) {
      state.numplayers = parseInt(m[1]);
      state.maxplayers = m[2];
    }
    m = body.match(/aos:\/\/[0-9]+:[0-9]+/);
    if (m) {
      state.connect = m[0];
    }
    const $ = cheerio.load(body);
    $("#playerlist tbody tr").each((i, tr) => {
      if (!$(tr).find("td").first().attr("colspan")) {
        state.players.push({
          name: $(tr).find("td").eq(2).text(),
          ping: $(tr).find("td").eq(3).text().trim(),
          team: $(tr).find("td").eq(4).text().toLowerCase(),
          score: parseInt($(tr).find("td").eq(5).text())
        });
      }
    });
  }
};

// protocols/cs2d.js
var cs2d = class extends Core {
  async run(state) {
    const reader = await this.sendQuery(
      Buffer.from("\0\xFB\xF5\xFB", "binary"),
      Buffer.from("\0\xFB", "binary")
    );
    const flags = reader.uint(1);
    state.raw.flags = flags;
    state.password = this.readFlag(flags, 0);
    state.raw.registeredOnly = this.readFlag(flags, 1);
    state.raw.fogOfWar = this.readFlag(flags, 2);
    state.raw.friendlyFire = this.readFlag(flags, 3);
    state.raw.botsEnabled = this.readFlag(flags, 5);
    state.raw.luaScripts = this.readFlag(flags, 6);
    state.raw.forceLight = this.readFlag(flags, 7);
    state.name = this.readString(reader);
    state.map = this.readString(reader);
    state.numplayers = reader.uint(1);
    state.maxplayers = reader.uint(1);
    if (flags & 32) {
      state.raw.gamemode = reader.uint(1);
    } else {
      state.raw.gamemode = 0;
    }
    state.raw.numbots = reader.uint(1);
    const flags2 = reader.uint(1);
    state.raw.flags2 = flags2;
    state.raw.recoil = this.readFlag(flags2, 0);
    state.raw.offScreenDamage = this.readFlag(flags2, 1);
    state.raw.hasDownloads = this.readFlag(flags2, 2);
    reader.skip(2);
    const players = reader.uint(1);
    for (let i = 0; i < players; i++) {
      const player = {};
      player.id = reader.uint(1);
      player.name = this.readString(reader);
      player.team = reader.uint(1);
      player.score = reader.uint(4);
      player.deaths = reader.uint(4);
      state.players.push(player);
    }
  }
  async sendQuery(request, expectedHeader) {
    await this.udpSend(request);
    await this.udpSend(request);
    return await this.udpSend(request, (buffer) => {
      const reader = this.reader(buffer);
      const header = reader.part(4);
      if (!header.equals(expectedHeader))
        return;
      return reader;
    });
  }
  readFlag(flags, offset) {
    return !!(flags & 1 << offset);
  }
  readString(reader) {
    return reader.pascalString(1);
  }
};

// protocols/discord.js
var discord = class extends Core {
  async run(state) {
    const guildId = this.options.guildId;
    if (typeof guildId !== "string") {
      throw new Error("guildId option must be set when querying discord. Ensure the guildId is a string and not a number. (It's too large of a number for javascript to store without losing precision)");
    }
    this.usedTcp = true;
    const raw = await this.request({
      url: "https://discordapp.com/api/guilds/" + guildId + "/widget.json"
    });
    const json = JSON.parse(raw);
    state.name = json.name;
    if (json.instant_invite) {
      state.connect = json.instant_invite;
    } else {
      state.connect = "https://discordapp.com/channels/" + guildId;
    }
    for (const member of json.members) {
      const { username: name, ...rest } = member;
      state.players.push({ name, ...rest });
    }
    delete json.members;
    state.maxplayers = 5e5;
    state.raw = json;
  }
};

// protocols/doom3.js
var doom3 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
  }
  async run(state) {
    const body = await this.udpSend("\xFF\xFFgetInfo\0PiNGPoNg\0", (packet) => {
      const reader2 = this.reader(packet);
      const header = reader2.uint(2);
      if (header !== 65535)
        return;
      const header2 = reader2.string();
      if (header2 !== "infoResponse")
        return;
      const challengePart1 = reader2.string(4);
      if (challengePart1 !== "PiNG")
        return;
      const challengePart2 = reader2.string(4);
      if (challengePart2 !== "PoNg")
        reader2.skip(-4);
      return reader2.rest();
    });
    let reader = this.reader(body);
    const protoVersion = reader.uint(4);
    state.raw.protocolVersion = (protoVersion >> 16) + "." + (protoVersion & 65535);
    state.version = state.raw.protocolVersion;
    reader.skip(2);
    const packetContainsSize = reader.uint(2) === 0;
    reader.skip(-4);
    if (packetContainsSize) {
      const size = reader.uint(4);
      this.logger.debug("Received packet size: " + size);
    }
    while (!reader.done()) {
      const key = reader.string();
      let value = this.stripColors(reader.string());
      if (key === "si_map") {
        value = value.replace("maps/", "");
        value = value.replace(".entities", "");
      }
      if (!key)
        break;
      state.raw[key] = value;
      this.logger.debug(key + "=" + value);
    }
    const isEtqw = state.raw.gamename && state.raw.gamename.toLowerCase().includes("etqw");
    const rest = reader.rest();
    let playerResult = this.attemptPlayerParse(rest, isEtqw, false, false, false);
    if (!playerResult)
      playerResult = this.attemptPlayerParse(rest, isEtqw, true, false, false);
    if (!playerResult)
      playerResult = this.attemptPlayerParse(rest, isEtqw, true, true, true);
    if (!playerResult) {
      throw new Error("Unable to find a suitable parse strategy for player list");
    }
    let players;
    [players, reader] = playerResult;
    state.numplayers = players.length;
    for (const player of players) {
      if (!player.ping || player.typeflag) {
        state.bots.push(player);
      } else {
        state.players.push(player);
      }
    }
    state.raw.osmask = reader.uint(4);
    if (isEtqw) {
      state.raw.ranked = reader.uint(1);
      state.raw.timeleft = reader.uint(4);
      state.raw.gamestate = reader.uint(1);
      state.raw.servertype = reader.uint(1);
      if (state.raw.servertype === 0) {
        state.raw.interestedClients = reader.uint(1);
      } else if (state.raw.servertype === 1) {
        state.raw.connectedClients = reader.uint(4);
        state.raw.maxClients = reader.uint(4);
      }
    }
    if (state.raw.si_name)
      state.name = state.raw.si_name;
    if (state.raw.si_map)
      state.map = state.raw.si_map;
    if (state.raw.si_maxplayers)
      state.maxplayers = parseInt(state.raw.si_maxplayers);
    if (state.raw.si_maxPlayers)
      state.maxplayers = parseInt(state.raw.si_maxPlayers);
    if (state.raw.si_usepass === "1")
      state.password = true;
    if (state.raw.si_needPass === "1")
      state.password = true;
    if (this.options.port === 27733)
      state.gamePort = 3074;
  }
  attemptPlayerParse(rest, isEtqw, hasClanTag, hasClanTagPos, hasTypeFlag) {
    this.logger.debug("starting player parse attempt:");
    this.logger.debug("isEtqw: " + isEtqw);
    this.logger.debug("hasClanTag: " + hasClanTag);
    this.logger.debug("hasClanTagPos: " + hasClanTagPos);
    this.logger.debug("hasTypeFlag: " + hasTypeFlag);
    const reader = this.reader(rest);
    let lastId = -1;
    const players = [];
    while (true) {
      this.logger.debug("---");
      if (reader.done()) {
        this.logger.debug("* aborting attempt, overran buffer *");
        return null;
      }
      const player = {};
      player.id = reader.uint(1);
      this.logger.debug("id: " + player.id);
      if (player.id <= lastId || player.id > 32) {
        this.logger.debug("* aborting attempt, invalid player id *");
        return null;
      }
      lastId = player.id;
      if (player.id === 32) {
        this.logger.debug("* player parse successful *");
        break;
      }
      player.ping = reader.uint(2);
      this.logger.debug("ping: " + player.ping);
      if (!isEtqw) {
        player.rate = reader.uint(4);
        this.logger.debug("rate: " + player.rate);
      }
      player.name = this.stripColors(reader.string());
      this.logger.debug("name: " + player.name);
      if (hasClanTag) {
        if (hasClanTagPos) {
          const clanTagPos = reader.uint(1);
          this.logger.debug("clanTagPos: " + clanTagPos);
        }
        player.clantag = this.stripColors(reader.string());
        this.logger.debug("clan tag: " + player.clantag);
      }
      if (hasTypeFlag) {
        player.typeflag = reader.uint(1);
        this.logger.debug("type flag: " + player.typeflag);
      }
      players.push(player);
    }
    return [players, reader];
  }
  stripColors(str) {
    return this.options.stripColors ? str.replace(/\^(X.{6}|.)/g, "") : str;
  }
};

// protocols/eco.js
var eco = class extends Core {
  async run(state) {
    var _a;
    if (!this.options.port)
      this.options.port = 3001;
    const request = await this.request({
      url: `http://${this.options.host}:${this.options.port}/frontpage`,
      responseType: "json"
    });
    const serverInfo = request.Info;
    state.name = serverInfo.Description;
    state.numplayers = serverInfo.OnlinePlayers;
    state.maxplayers = serverInfo.TotalPlayers;
    state.password = serverInfo.HasPassword;
    state.gamePort = serverInfo.GamePort;
    state.players = ((_a = serverInfo.OnlinePlayersNames) == null ? void 0 : _a.map((name) => ({ name, raw: {} }))) || [];
    state.raw = serverInfo;
    state.version = state.raw.Version;
  }
};

// protocols/eldewrito.js
var eldewrito = class extends Core {
  async run(state) {
    const json = await this.request({
      url: "http://" + this.options.address + ":" + this.options.port,
      responseType: "json"
    });
    for (const one of json.players) {
      state.players.push({ name: one.name, team: one.team });
    }
    state.name = json.name;
    state.map = json.map;
    state.maxplayers = json.maxPlayers;
    state.connect = this.options.address + ":" + json.port;
    state.raw = json;
    if ("eldewritoVersion" in state.raw)
      state.version = state.raw.eldewritoVersion;
  }
};

// protocols/factorio.js
var factorio = class extends Core {
  async run(state) {
    if (!this.options.port)
      this.options.port = 34197;
    this.usedTcp = true;
    const serverInfo = await this.request({
      url: `https://multiplayer.factorio.com/get-game-details/${this.options.address}:${this.options.port}`,
      responseType: "json"
    });
    const players = serverInfo.players || [];
    state.name = serverInfo.name;
    state.password = serverInfo.has_password;
    state.numplayers = players.length;
    state.maxplayers = serverInfo.max_players;
    state.players = players.map((player) => ({ name: player, raw: {} }));
    state.raw = serverInfo;
    state.version = state.raw.application_version.game_version + "." + state.raw.application_version.build_version;
  }
};

// protocols/farmingsimulator.js
var import_cheerio = __toESM(require("cheerio"), 1);
var farmingsimulator = class extends Core {
  async run(state) {
    if (!this.options.port)
      this.options.port = 8080;
    if (!this.options.token)
      throw new Error(`No token provided. You can get it from http://${this.options.host}:${this.options.port}/settings.html`);
    const request = await this.request({
      url: `http://${this.options.host}:${this.options.port}/feed/dedicated-server-stats.xml?code=${this.options.token}`,
      responseType: "text"
    });
    const $ = import_cheerio.default.load(request, {
      xmlMode: true
    });
    const serverInfo = $("Server");
    const playerInfo = serverInfo.find("Slots");
    state.name = serverInfo.attr("name");
    state.map = serverInfo.attr("mapName");
    state.numplayers = playerInfo.attr("numUsed");
    state.maxplayers = playerInfo.attr("capacity");
    $("Player").each(function() {
      if ($(this).attr("isUsed") === "true") {
        state.players.push({
          name: $(this).text(),
          raw: {
            isAdmin: $(this).attr("isAdmin") === "true",
            uptime: parseInt($(this).attr("uptime"), 10)
          }
        });
      }
    });
    state.raw.mods = [];
    $("Mod").each(function() {
      if ($(this).attr("name") !== void 0) {
        state.raw.mods.push({
          name: $(this).text(),
          short_name: $(this).attr("name"),
          author: $(this).attr("author"),
          version: $(this).attr("version"),
          hash: $(this).attr("hash")
        });
      }
    });
    state.version = serverInfo.attr("version");
  }
};

// protocols/valve.js
var import_seek_bzip = __toESM(require("seek-bzip"), 1);
var import_node_buffer5 = require("node:buffer");
var AppId = {
  Squad: 393380,
  Bat1944: 489940,
  Ship: 2400,
  Rust: 252490,
  CSGO: 730,
  CS_Source: 240,
  EternalSilence: 17550,
  Insurgency_MIC: 17700,
  Source_SDK_Base_2006: 215
};
var valve = class extends Core {
  constructor() {
    super();
    this.goldsrcInfo = false;
    this.goldsrcSplits = false;
    this.legacyChallenge = false;
    this._skipSizeInSplitHeader = false;
    this._challenge = "";
  }
  async run(state) {
    if (!this.options.port)
      this.options.port = 27015;
    await this.queryInfo(state);
    await this.queryChallenge();
    await this.queryPlayers(state);
    await this.queryRules(state);
    await this.cleanup(state);
  }
  async queryInfo(state) {
    this.logger.debug("Requesting info ...");
    const b = await this.sendPacket(
      this.goldsrcInfo ? void 0 : 84,
      this.goldsrcInfo ? "details" : "Source Engine Query\0",
      this.goldsrcInfo ? 109 : 73,
      false
    );
    const reader = this.reader(b);
    if (this.goldsrcInfo)
      state.raw.address = reader.string();
    else
      state.raw.protocol = reader.uint(1);
    state.name = reader.string();
    state.map = reader.string();
    state.raw.folder = reader.string();
    state.raw.game = reader.string();
    if (!this.goldsrcInfo)
      state.raw.appId = reader.uint(2);
    state.numplayers = reader.uint(1);
    state.maxplayers = reader.uint(1);
    if (this.goldsrcInfo)
      state.raw.protocol = reader.uint(1);
    else
      state.raw.numbots = reader.uint(1);
    state.raw.listentype = String.fromCharCode(reader.uint(1));
    state.raw.environment = String.fromCharCode(reader.uint(1));
    state.password = !!reader.uint(1);
    if (this.goldsrcInfo) {
      state.raw.ismod = reader.uint(1);
      if (state.raw.ismod) {
        state.raw.modlink = reader.string();
        state.raw.moddownload = reader.string();
        reader.skip(1);
        state.raw.modversion = reader.uint(4);
        state.raw.modsize = reader.uint(4);
        state.raw.modtype = reader.uint(1);
        state.raw.moddll = reader.uint(1);
      }
    } else {
      state.raw.secure = reader.uint(1);
      if (state.raw.appId === AppId.Ship) {
        state.raw.shipmode = reader.uint(1);
        state.raw.shipwitnesses = reader.uint(1);
        state.raw.shipduration = reader.uint(1);
      }
      state.version = reader.string();
      const extraFlag = reader.uint(1);
      if (extraFlag & 128)
        state.gamePort = reader.uint(2);
      if (extraFlag & 16)
        state.raw.steamid = reader.uint(8).toString();
      if (extraFlag & 64) {
        state.raw.sourcetvport = reader.uint(2);
        state.raw.sourcetvname = reader.string();
      }
      if (extraFlag & 32)
        state.raw.tags = reader.string().split(",");
      if (extraFlag & 1) {
        const gameId = reader.uint(8);
        const betterAppId = gameId.getLowBitsUnsigned() & 16777215;
        if (betterAppId) {
          state.raw.appId = betterAppId;
        }
      }
    }
    const appId = state.raw.appId;
    if (state.raw.protocol === 7 && (state.raw.appId === AppId.Source_SDK_Base_2006 || state.raw.appId === AppId.EternalSilence || state.raw.appId === AppId.Insurgency_MIC || state.raw.appId === AppId.CS_Source)) {
      this._skipSizeInSplitHeader = true;
    }
    this.logger.debug("INFO: ", state.raw);
    if (state.raw.protocol === 48) {
      this.logger.debug("GOLDSRC DETECTED - USING MODIFIED SPLIT FORMAT");
      this.goldsrcSplits = true;
    }
    if (appId === AppId.Rust) {
      if (state.raw.tags) {
        for (const tag of state.raw.tags) {
          if (tag.startsWith("mp")) {
            const value = parseInt(tag.replace("mp", ""));
            if (!isNaN(value)) {
              state.maxplayers = value;
            }
          }
          if (tag.startsWith("cp")) {
            const value = parseInt(tag.replace("cp", ""));
            if (!isNaN(value)) {
              state.numplayers = value;
            }
          }
        }
      }
    }
  }
  async queryChallenge() {
    if (this.legacyChallenge) {
      this.logger.debug("Requesting legacy challenge key ...");
      await this.sendPacket(
        87,
        null,
        65,
        false
      );
    }
  }
  async queryPlayers(state) {
    state.raw.players = [];
    if (!this.options.requestPlayers) {
      return;
    }
    this.logger.debug("Requesting player list ...");
    const b = await this.sendPacket(
      this.goldsrcInfo ? void 0 : 85,
      this.goldsrcInfo ? "players" : null,
      68,
      true
    );
    if (b === null && !this.options.requestPlayersRequired) {
      return;
    }
    const reader = this.reader(b);
    const num = reader.uint(1);
    for (let i = 0; i < num; i++) {
      reader.skip(1);
      const name = reader.string();
      const score = reader.int(4);
      const time = reader.float();
      this.logger.debug("Found player: " + name + " " + score + " " + time);
      if (state.raw.appId === AppId.CSGO && name === "Max Players")
        continue;
      state.raw.players.push({
        name,
        score,
        time
      });
    }
  }
  async queryRules(state) {
    const appId = state.raw.appId;
    if (appId === AppId.Squad || appId === AppId.Bat1944 || this.options.requestRules) {
    } else {
      return;
    }
    const rules = {};
    state.raw.rules = rules;
    state.raw.rulesBytes = import_node_buffer5.Buffer.from([]);
    this.logger.debug("Requesting rules ...");
    if (this.goldsrcInfo) {
      const b = await this.udpSend("\xFF\xFF\xFF\xFFrules", (b2) => b2, () => null);
      if (b === null && !this.options.requestRulesRequired)
        return;
      state.raw.rulesBytes = b;
      const reader = this.reader(b);
      while (!reader.done()) {
        const key = reader.string();
        rules[key] = reader.string();
      }
    } else {
      const b = await this.sendPacket(86, null, 69, true);
      if (b === null && !this.options.requestRulesRequired)
        return;
      state.raw.rulesBytes = b;
      const reader = this.reader(b);
      const num = reader.uint(2);
      for (let i = 0; i < num; i++) {
        const key = reader.string();
        rules[key] = reader.string();
      }
    }
    if (appId === AppId.Bat1944) {
      if ("bat_name_s" in rules) {
        state.name = rules.bat_name_s;
        delete rules.bat_name_s;
        if ("bat_player_count_s" in rules) {
          state.numplayers = parseInt(rules.bat_player_count_s);
          delete rules.bat_player_count_s;
        }
        if ("bat_max_players_i" in rules) {
          state.maxplayers = parseInt(rules.bat_max_players_i);
          delete rules.bat_max_players_i;
        }
        if ("bat_has_password_s" in rules) {
          state.password = rules.bat_has_password_s === "Y";
          delete rules.bat_has_password_s;
        }
        delete rules.bat_map_s;
      }
    }
    if (appId === AppId.Squad) {
      if (rules.Password_b === "true") {
        state.password = true;
      }
    }
  }
  async cleanup(state) {
    const botProbability = (p) => {
      if (p.time === -1)
        return Number.MAX_VALUE;
      return p.time;
    };
    const rawPlayers = [...state.raw.players];
    const sortedPlayers = rawPlayers.sort((a, b) => {
      return botProbability(a) - botProbability(b);
    });
    const numBots = state.raw.numbots || 0;
    while (state.bots.length < numBots && sortedPlayers.length) {
      state.bots.push(sortedPlayers.pop());
    }
    while ((state.players.length < state.numplayers - numBots || sortedPlayers.length) && sortedPlayers.length) {
      state.players.push(sortedPlayers.pop());
    }
  }
  /**
     * Sends a request packet and returns only the response type expected
     * @param {number} type
     * @param {boolean} sendChallenge
     * @param {?string|Buffer} payload
     * @param {number} expect
     * @param {boolean=} allowTimeout
     * @returns Buffer|null
     **/
  async sendPacket(type, payload, expect, allowTimeout) {
    for (let keyRetry = 0; keyRetry < 3; keyRetry++) {
      let receivedNewChallengeKey = false;
      const response = await this.sendPacketRaw(
        type,
        payload,
        (payload2) => {
          const reader = this.reader(payload2);
          const type2 = reader.uint(1);
          this.logger.debug(() => "Received 0x" + type2.toString(16) + " expected 0x" + expect.toString(16));
          if (type2 === 65) {
            const key = reader.uint(4);
            if (this._challenge !== key) {
              this.logger.debug("Received new challenge key: 0x" + key.toString(16));
              this._challenge = key;
              receivedNewChallengeKey = true;
            }
          }
          if (type2 === expect) {
            return reader.rest();
          } else if (receivedNewChallengeKey) {
            return null;
          }
        },
        () => {
          if (allowTimeout)
            return null;
        }
      );
      if (!receivedNewChallengeKey) {
        return response;
      }
    }
    throw new Error("Received too many challenge key responses");
  }
  /**
     * Sends a request packet and assembles partial responses
     * @param {number} type
     * @param {boolean} sendChallenge
     * @param {?string|Buffer} payload
     * @param {function(Buffer)} onResponse
     * @param {function()} onTimeout
     **/
  async sendPacketRaw(type, payload, onResponse, onTimeout) {
    const challengeAtBeginning = type === 85 || type === 86;
    const challengeAtEnd = type === 84 && !!this._challenge;
    if (typeof payload === "string")
      payload = import_node_buffer5.Buffer.from(payload, "binary");
    const b = import_node_buffer5.Buffer.alloc(
      4 + (type !== void 0 ? 1 : 0) + (challengeAtBeginning ? 4 : 0) + (challengeAtEnd ? 4 : 0) + (payload ? payload.length : 0)
    );
    let offset = 0;
    let challenge = this._challenge;
    if (!challenge)
      challenge = 4294967295;
    b.writeInt32LE(-1, offset);
    offset += 4;
    if (type !== void 0) {
      b.writeUInt8(type, offset);
      offset += 1;
    }
    if (challengeAtBeginning) {
      if (this.byteorder === "le")
        b.writeUInt32LE(challenge, offset);
      else
        b.writeUInt32BE(challenge, offset);
      offset += 4;
    }
    if (payload) {
      payload.copy(b, offset);
      offset += payload.length;
    }
    if (challengeAtEnd) {
      if (this.byteorder === "le")
        b.writeUInt32LE(challenge, offset);
      else
        b.writeUInt32BE(challenge, offset);
      offset += 4;
    }
    const packetStorage = {};
    return await this.udpSend(
      b,
      (buffer) => {
        const reader = this.reader(buffer);
        const header = reader.int(4);
        if (header === -1) {
          this.logger.debug("Received full packet");
          return onResponse(reader.rest());
        }
        if (header === -2) {
          const uid2 = reader.uint(4);
          if (!(uid2 in packetStorage))
            packetStorage[uid2] = {};
          const packets = packetStorage[uid2];
          let bzip = false;
          if (!this.goldsrcSplits && uid2 & 2147483648)
            bzip = true;
          let packetNum, payload2, numPackets;
          if (this.goldsrcSplits) {
            packetNum = reader.uint(1);
            numPackets = packetNum & 15;
            packetNum = (packetNum & 240) >> 4;
            payload2 = reader.rest();
          } else {
            numPackets = reader.uint(1);
            packetNum = reader.uint(1);
            if (!this._skipSizeInSplitHeader)
              reader.skip(2);
            if (packetNum === 0 && bzip)
              reader.skip(8);
            payload2 = reader.rest();
          }
          packets[packetNum] = payload2;
          this.logger.debug(() => "Received partial packet uid: 0x" + uid2.toString(16) + " num: " + packetNum);
          this.logger.debug(() => "Received " + Object.keys(packets).length + "/" + numPackets + " packets for this UID");
          if (Object.keys(packets).length !== numPackets)
            return;
          const list = [];
          for (let i = 0; i < numPackets; i++) {
            if (!(i in packets)) {
              throw new Error("Missing packet #" + i);
            }
            list.push(packets[i]);
          }
          let assembled = import_node_buffer5.Buffer.concat(list);
          if (bzip) {
            this.logger.debug("BZIP DETECTED - Extracing packet...");
            try {
              assembled = import_seek_bzip.default.decode(assembled);
            } catch (e) {
              throw new Error("Invalid bzip packet");
            }
          }
          const assembledReader = this.reader(assembled);
          assembledReader.skip(4);
          return onResponse(assembledReader.rest());
        }
      },
      onTimeout
    );
  }
};

// protocols/ffow.js
var ffow = class extends valve {
  constructor() {
    super();
    this.byteorder = "be";
    this.legacyChallenge = true;
  }
  async queryInfo(state) {
    this.logger.debug("Requesting ffow info ...");
    const b = await this.sendPacket(
      70,
      "LSQ",
      73
    );
    const reader = this.reader(b);
    state.raw.protocol = reader.uint(1);
    state.name = reader.string();
    state.map = reader.string();
    state.raw.mod = reader.string();
    state.raw.gamemode = reader.string();
    state.raw.description = reader.string();
    state.version = reader.string();
    state.gamePort = reader.uint(2);
    state.numplayers = reader.uint(1);
    state.maxplayers = reader.uint(1);
    state.raw.listentype = String.fromCharCode(reader.uint(1));
    state.raw.environment = String.fromCharCode(reader.uint(1));
    state.password = !!reader.uint(1);
    state.raw.secure = reader.uint(1);
    state.raw.averagefps = reader.uint(1);
    state.raw.round = reader.uint(1);
    state.raw.maxrounds = reader.uint(1);
    state.raw.timeleft = reader.uint(2);
  }
};

// protocols/quake2.js
var quake2 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.delimiter = "\n";
    this.sendHeader = "status";
    this.responseHeader = "print";
    this.isQuake1 = false;
  }
  async run(state) {
    const body = await this.udpSend("\xFF\xFF\xFF\xFF" + this.sendHeader + "\0", (packet) => {
      const reader2 = this.reader(packet);
      const header = reader2.string({ length: 4, encoding: "latin1" });
      if (header !== "\xFF\xFF\xFF\xFF")
        return;
      let type;
      if (this.isQuake1) {
        type = reader2.string(this.responseHeader.length);
      } else {
        type = reader2.string({ encoding: "latin1" });
      }
      if (type !== this.responseHeader)
        return;
      return reader2.rest();
    });
    const reader = this.reader(body);
    const info = reader.string().split("\\");
    if (info[0] === "")
      info.shift();
    while (true) {
      const key = info.shift();
      const value = info.shift();
      if (typeof value === "undefined")
        break;
      state.raw[key] = value;
    }
    while (!reader.done()) {
      const line = reader.string();
      if (!line || line.charAt(0) === "\0")
        break;
      const args = [];
      const split = line.split('"');
      split.forEach((part, i) => {
        const inQuote = i % 2 === 1;
        if (inQuote) {
          args.push(part);
        } else {
          const splitSpace = part.split(" ");
          for (const subpart of splitSpace) {
            if (subpart)
              args.push(subpart);
          }
        }
      });
      const player = {};
      if (this.isQuake1) {
        player.id = parseInt(args.shift());
        player.score = parseInt(args.shift());
        player.time = parseInt(args.shift());
        player.ping = parseInt(args.shift());
        player.name = args.shift();
        player.skin = args.shift();
        player.color1 = parseInt(args.shift());
        player.color2 = parseInt(args.shift());
      } else {
        player.frags = parseInt(args.shift());
        player.ping = parseInt(args.shift());
        player.name = args.shift() || "";
        if (!player.name)
          delete player.name;
        player.address = args.shift() || "";
        if (!player.address)
          delete player.address;
      }
      (player.ping ? state.players : state.bots).push(player);
    }
    if ("g_needpass" in state.raw)
      state.password = state.raw.g_needpass;
    if ("mapname" in state.raw)
      state.map = state.raw.mapname;
    if ("sv_maxclients" in state.raw)
      state.maxplayers = state.raw.sv_maxclients;
    if ("maxclients" in state.raw)
      state.maxplayers = state.raw.maxclients;
    if ("sv_hostname" in state.raw)
      state.name = state.raw.sv_hostname;
    if ("hostname" in state.raw)
      state.name = state.raw.hostname;
    if ("clients" in state.raw)
      state.numplayers = state.raw.clients;
    if ("version" in state.raw)
      state.version = state.raw.version;
    if ("iv" in state.raw)
      state.version = state.raw.iv;
    else
      state.numplayers = state.players.length + state.bots.length;
  }
};

// protocols/fivem.js
var fivem = class extends quake2 {
  constructor() {
    super();
    this.sendHeader = "getinfo xxx";
    this.responseHeader = "infoResponse";
    this.encoding = "utf8";
  }
  async run(state) {
    await super.run(state);
    {
      const json = await this.request({
        url: "http://" + this.options.address + ":" + this.options.port + "/info.json",
        responseType: "json"
      });
      state.raw.info = json;
      if ("version" in state.raw.info)
        state.version = state.raw.info.version;
    }
    {
      const json = await this.request({
        url: "http://" + this.options.address + ":" + this.options.port + "/players.json",
        responseType: "json"
      });
      state.raw.players = json;
      for (const player of json) {
        state.players.push({ name: player.name, ping: player.ping });
      }
    }
  }
};

// protocols/gamespy1.js
var stringKeys = /* @__PURE__ */ new Set([
  "website",
  "gametype",
  "gamemode",
  "player"
]);
function normalizeEntry([key, value]) {
  key = key.toLowerCase();
  const split = key.split("_");
  let keyType = key;
  if (split.length === 2 && !isNaN(Number(split[1]))) {
    keyType = split[0];
  }
  if (!stringKeys.has(keyType) && !keyType.includes("name")) {
    if (value.toLowerCase() === "true") {
      value = true;
    } else if (value.toLowerCase() === "false") {
      value = false;
    } else if (value.length && !isNaN(Number(value))) {
      value = Number(value);
    }
  }
  return [key, value];
}
var gamespy1 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.byteorder = "be";
  }
  async run(state) {
    const raw = await this.sendPacket("\\status\\xserverquery");
    const data = Object.fromEntries(Object.entries(raw).map((entry) => normalizeEntry(entry)));
    state.raw = data;
    if ("hostname" in data)
      state.name = data.hostname;
    if ("mapname" in data)
      state.map = data.mapname;
    if (this.trueTest(data.password))
      state.password = true;
    if ("maxplayers" in data)
      state.maxplayers = Number(data.maxplayers);
    if ("hostport" in data)
      state.gamePort = Number(data.hostport);
    const teamOffByOne = data.gamename === "bfield1942";
    const playersById = {};
    const teamNamesById = {};
    for (const ident of Object.keys(data)) {
      const split = ident.split("_");
      if (split.length !== 2)
        continue;
      let key = split[0].toLowerCase();
      const id = Number(split[1]);
      if (isNaN(id))
        continue;
      let value = data[ident];
      delete data[ident];
      if (key !== "team" && key.startsWith("team")) {
        if (key === "teamname") {
          teamNamesById[id] = value;
        } else {
        }
      } else {
        if (!(id in playersById))
          playersById[id] = {};
        if (key === "playername" || key === "player") {
          key = "name";
        }
        if (key === "team" && !isNaN(value)) {
          key = "teamId";
          value += teamOffByOne ? -1 : 0;
        }
        playersById[id][key] = value;
      }
    }
    state.raw.teams = teamNamesById;
    const players = Object.values(playersById);
    const seenHashes = /* @__PURE__ */ new Set();
    for (const player of players) {
      if (player.keyhash) {
        if (seenHashes.has(player.keyhash)) {
          this.logger.debug("Rejected player with hash " + player.keyhash + " (Duplicate keyhash)");
          continue;
        } else {
          seenHashes.add(player.keyhash);
        }
      }
      if (Object.prototype.hasOwnProperty.call(player, "teamId")) {
        if (Object.keys(teamNamesById).length) {
          player.team = teamNamesById[player.teamId] || "";
        } else {
          player.team = player.teamId;
          delete player.teamId;
        }
      }
      state.players.push(player);
    }
    state.numplayers = state.players.length;
    state.version = state.raw.gamever;
  }
  async sendPacket(type) {
    let receivedQueryId;
    const output = {};
    const parts = /* @__PURE__ */ new Set();
    let maxPartNum = 0;
    return await this.udpSend(type, (buffer) => {
      const reader = this.reader(buffer);
      const str = reader.string(buffer.length);
      const split = str.split("\\");
      split.shift();
      const data = {};
      while (split.length) {
        const key = split.shift();
        const value = split.shift() || "";
        data[key] = value;
      }
      let queryId, partNum;
      const partFinal = "final" in data;
      if (data.queryid) {
        const split2 = data.queryid.split(".");
        if (split2.length >= 2) {
          partNum = Number(split2[1]);
        }
        queryId = split2[0];
      }
      delete data.final;
      delete data.queryid;
      this.logger.debug("Received part num=" + partNum + " queryId=" + queryId + " final=" + partFinal);
      if (queryId) {
        if (receivedQueryId && receivedQueryId !== queryId) {
          this.logger.debug("Rejected packet (Wrong query ID)");
          return;
        } else if (!receivedQueryId) {
          receivedQueryId = queryId;
        }
      }
      if (!partNum) {
        partNum = parts.size;
        this.logger.debug("No part number received (assigned #" + partNum + ")");
      }
      if (parts.has(partNum)) {
        this.logger.debug("Rejected packet (Duplicate part)");
        return;
      }
      parts.add(partNum);
      if (partFinal) {
        maxPartNum = partNum;
      }
      this.logger.debug("Received part #" + partNum + " of " + (maxPartNum || "?"));
      for (const i of Object.keys(data)) {
        output[i] = data[i];
      }
      if (maxPartNum && parts.size === maxPartNum) {
        this.logger.debug("Received all parts");
        this.logger.debug(output);
        return output;
      }
    });
  }
};

// protocols/gamespy2.js
var gamespy2 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.byteorder = "be";
  }
  async run(state) {
    {
      const body = await this.sendPacket([255, 0, 0]);
      const reader = this.reader(body);
      while (!reader.done()) {
        const key = reader.string();
        const value = reader.string();
        if (!key)
          break;
        state.raw[key] = value;
      }
      if ("hostname" in state.raw)
        state.name = state.raw.hostname;
      if ("mapname" in state.raw)
        state.map = state.raw.mapname;
      if (this.trueTest(state.raw.password))
        state.password = true;
      if ("maxplayers" in state.raw)
        state.maxplayers = parseInt(state.raw.maxplayers);
      if ("hostport" in state.raw)
        state.gamePort = parseInt(state.raw.hostport);
      if ("gamever" in state.raw)
        state.version = state.raw.gamever;
    }
    {
      const body = await this.sendPacket([0, 255, 0]);
      const reader = this.reader(body);
      for (const rawPlayer of this.readFieldData(reader)) {
        state.players.push(rawPlayer);
      }
      if ("numplayers" in state.raw)
        state.numplayers = parseInt(state.raw.numplayers);
      else
        state.numplayers = state.players.length;
    }
    {
      const body = await this.sendPacket([0, 0, 255]);
      const reader = this.reader(body);
      state.raw.teams = this.readFieldData(reader);
    }
    if (state.raw.gamename === "armygame") {
      const stripColor = (str) => {
        return this.options.stripColors ? str.replace(/\x1b...|[\x00-\x1a]/g, "") : str;
      };
      state.name = stripColor(state.name);
      state.map = stripColor(state.map);
      for (const key of Object.keys(state.raw)) {
        if (typeof state.raw[key] === "string") {
          state.raw[key] = stripColor(state.raw[key]);
        }
      }
      for (const player of state.players) {
        if (!("name" in player))
          continue;
        player.name = stripColor(player.name);
      }
    }
  }
  async sendPacket(type) {
    const request = Buffer.concat([
      Buffer.from([254, 253, 0]),
      // gamespy2
      Buffer.from([0, 0, 0, 1]),
      // ping ID
      Buffer.from(type)
    ]);
    return await this.udpSend(request, (buffer) => {
      const reader = this.reader(buffer);
      const header = reader.uint(1);
      if (header !== 0)
        return;
      const pingId = reader.uint(4);
      if (pingId !== 1)
        return;
      return reader.rest();
    });
  }
  readFieldData(reader) {
    reader.uint(1);
    const count = reader.uint(1);
    if (count > 64) {
      reader.skip(-1);
      this.logger.debug("Detected missing count byte, rewinding by 1");
    } else {
      this.logger.debug("Detected row count: " + count);
    }
    this.logger.debug(() => "Reading fields, starting at: " + reader.rest());
    const fields = [];
    while (!reader.done()) {
      const field = reader.string();
      if (!field)
        break;
      fields.push(field);
      this.logger.debug("field:" + field);
    }
    if (!fields.length)
      return [];
    const units = [];
    while (!reader.done()) {
      const unit = {};
      for (let index = 0; index < fields.length; index++) {
        let key = fields[index];
        let value = reader.string();
        if (!value && index === 0)
          return units;
        this.logger.debug("value:" + value);
        if (key.endsWith("_")) {
          key = key.slice(0, -1);
        }
        if (key === "player")
          key = "name";
        else if (key === "team_t")
          key = "name";
        else if (key === "tickets_t")
          key = "tickets";
        if (["score", "deaths", "ping", "team", "kills", "tickets"].includes(key)) {
          if (value === "")
            continue;
          value = parseInt(value);
        }
        unit[key] = value;
      }
      units.push(unit);
    }
    return units;
  }
};

// protocols/gamespy3.js
var gamespy3 = class extends Core {
  constructor() {
    super();
    this.sessionId = 1;
    this.encoding = "latin1";
    this.byteorder = "be";
    this.useOnlySingleSplit = false;
    this.isJc2mp = false;
  }
  async run(state) {
    const buffer = await this.sendPacket(9, false, false, false);
    const reader = this.reader(buffer);
    let challenge = parseInt(reader.string());
    this.logger.debug("Received challenge key: " + challenge);
    if (challenge === 0) {
      challenge = null;
    }
    let requestPayload;
    if (this.isJc2mp) {
      requestPayload = Buffer.from([255, 255, 255, 2]);
    } else {
      requestPayload = Buffer.from([255, 255, 255, 1]);
    }
    const packets = await this.sendPacket(0, challenge, requestPayload, true);
    state.raw.playerTeamInfo = {};
    for (let iPacket = 0; iPacket < packets.length; iPacket++) {
      const packet = packets[iPacket];
      const reader2 = this.reader(packet);
      this.logger.debug("Parsing packet #" + iPacket);
      this.logger.debug(packet);
      if (iPacket === 0) {
        while (!reader2.done()) {
          const key = reader2.string();
          if (!key)
            break;
          let value = reader2.string();
          while (value.match(/^p[0-9]+$/)) {
            value = reader2.string();
          }
          state.raw[key] = value;
          this.logger.debug(key + " = " + value);
        }
      }
      if (this.isJc2mp) {
        state.raw.numPlayers2 = reader2.uint(2);
        while (!reader2.done()) {
          const player = {};
          player.name = reader2.string();
          player.steamid = reader2.string();
          player.ping = reader2.uint(2);
          state.players.push(player);
        }
      } else {
        while (!reader2.done()) {
          if (reader2.uint(1) <= 2)
            continue;
          reader2.skip(-1);
          const fieldId = reader2.string();
          if (!fieldId)
            continue;
          const fieldIdSplit = fieldId.split("_");
          const fieldName = fieldIdSplit[0];
          const itemType = fieldIdSplit.length > 1 ? fieldIdSplit[1] : "no_";
          if (!(itemType in state.raw.playerTeamInfo)) {
            state.raw.playerTeamInfo[itemType] = [];
          }
          const items = state.raw.playerTeamInfo[itemType];
          let offset = reader2.uint(1);
          this.logger.debug(() => "Parsing new field: itemType=" + itemType + " fieldName=" + fieldName + " startOffset=" + offset);
          while (!reader2.done()) {
            const item = reader2.string();
            if (!item)
              break;
            while (items.length <= offset) {
              items.push({});
            }
            items[offset][fieldName] = item;
            this.logger.debug("* " + item);
            offset++;
          }
        }
      }
    }
    if ("hostname" in state.raw)
      state.name = state.raw.hostname;
    else if ("servername" in state.raw)
      state.name = state.raw.servername;
    if ("mapname" in state.raw)
      state.map = state.raw.mapname;
    if (state.raw.password === "1")
      state.password = true;
    if ("maxplayers" in state.raw)
      state.maxplayers = parseInt(state.raw.maxplayers);
    if ("hostport" in state.raw)
      state.gamePort = parseInt(state.raw.hostport);
    if ("gamever" in state.raw)
      state.version = state.raw.gamever;
    if ("" in state.raw.playerTeamInfo) {
      for (const playerInfo of state.raw.playerTeamInfo[""]) {
        const player = {};
        for (const from of Object.keys(playerInfo)) {
          let key = from;
          let value = playerInfo[from];
          if (key === "player")
            key = "name";
          if (key === "score" || key === "ping" || key === "team" || key === "deaths" || key === "pid")
            value = parseInt(value);
          player[key] = value;
        }
        state.players.push(player);
      }
    }
    if ("numplayers" in state.raw)
      state.numplayers = parseInt(state.raw.numplayers);
    else
      state.numplayers = state.players.length;
  }
  async sendPacket(type, challenge, payload, assemble) {
    const challengeLength = challenge === null ? 0 : 4;
    const payloadLength = payload ? payload.length : 0;
    const b = Buffer.alloc(7 + challengeLength + payloadLength);
    b.writeUInt8(254, 0);
    b.writeUInt8(253, 1);
    b.writeUInt8(type, 2);
    b.writeUInt32BE(this.sessionId, 3);
    if (challengeLength)
      b.writeInt32BE(challenge, 7);
    if (payloadLength)
      payload.copy(b, 7 + challengeLength);
    let numPackets = 0;
    const packets = {};
    return await this.udpSend(b, (buffer) => {
      const reader = this.reader(buffer);
      const iType = reader.uint(1);
      if (iType !== type) {
        this.logger.debug("Skipping packet, type mismatch");
        return;
      }
      const iSessionId = reader.uint(4);
      if (iSessionId !== this.sessionId) {
        this.logger.debug("Skipping packet, session id mismatch");
        return;
      }
      if (!assemble) {
        return reader.rest();
      }
      if (this.useOnlySingleSplit) {
        reader.skip(11);
        return [reader.rest()];
      }
      reader.skip(9);
      let id = reader.uint(1);
      const last = id & 128;
      id = id & 127;
      if (last)
        numPackets = id + 1;
      reader.skip(1);
      packets[id] = reader.rest();
      if (this.debug) {
        this.logger.debug("Received packet #" + id + (last ? " (last)" : ""));
      }
      if (!numPackets || Object.keys(packets).length !== numPackets)
        return;
      const list = [];
      for (let i = 0; i < numPackets; i++) {
        if (!(i in packets)) {
          throw new Error("Missing packet #" + i);
        }
        list.push(packets[i]);
      }
      return list;
    });
  }
};

// protocols/geneshift.js
var geneshift = class extends Core {
  async run(state) {
    await this.tcpPing();
    const body = await this.request({
      url: "http://geneshift.net/game/receiveLobby.php"
    });
    const split = body.split("<br/>");
    let found = null;
    for (const line of split) {
      const fields = line.split("::");
      const ip = fields[2];
      const port = fields[3];
      if (ip === this.options.address && parseInt(port) === this.options.port) {
        found = fields;
        break;
      }
    }
    if (found === null) {
      throw new Error("Server not found in list");
    }
    state.raw.countrycode = found[0];
    state.raw.country = found[1];
    state.name = found[4];
    state.map = found[5];
    state.numplayers = parseInt(found[6]);
    state.maxplayers = parseInt(found[7]);
    state.raw.rules = found[9];
    state.raw.gamemode = parseInt(found[10]);
    state.raw.gangsters = parseInt(found[11]);
    state.raw.cashrate = parseInt(found[12]);
    state.raw.missions = !!parseInt(found[13]);
    state.raw.vehicles = !!parseInt(found[14]);
    state.raw.customweapons = !!parseInt(found[15]);
    state.raw.friendlyfire = !!parseInt(found[16]);
    state.raw.mercs = !!parseInt(found[17]);
    state.version = found[19];
  }
};

// protocols/goldsrc.js
var goldsrc = class extends valve {
  constructor() {
    super();
    this.goldsrcInfo = true;
  }
};

// protocols/samp.js
var samp = class extends Core {
  constructor() {
    super();
    this.encoding = "win1252";
    this.magicHeader = "SAMP";
    this.responseMagicHeader = null;
    this.isVcmp = false;
    this.isOmp = false;
  }
  async run(state) {
    {
      const reader = await this.sendPacket("i");
      if (this.isVcmp) {
        const consumed = reader.part(12);
        state.version = this.reader(consumed).string();
      }
      state.password = !!reader.uint(1);
      state.numplayers = reader.uint(2);
      state.maxplayers = reader.uint(2);
      state.name = reader.pascalString(4);
      state.raw.gamemode = reader.pascalString(4);
      state.raw.map = reader.pascalString(4);
    }
    if (!this.isVcmp) {
      const reader = await this.sendPacket("r");
      const ruleCount = reader.uint(2);
      state.raw.rules = {};
      for (let i = 0; i < ruleCount; i++) {
        const key = reader.pascalString(1);
        const value = reader.pascalString(1);
        state.raw.rules[key] = value;
        if ("version" in state.raw.rules)
          state.version = state.raw.rules.version;
      }
    }
    if (state.numplayers < 100) {
      if (this.isVcmp || this.isOmp) {
        const reader = await this.sendPacket("c", true);
        if (reader !== null) {
          const playerCount = reader.uint(2);
          for (let i = 0; i < playerCount; i++) {
            const player = {};
            player.name = reader.pascalString(1);
            player.score = reader.int(4);
            state.players.push(player);
          }
        }
      } else {
        const reader = await this.sendPacket("d", true);
        if (reader !== null) {
          const playerCount = reader.uint(2);
          for (let i = 0; i < playerCount; i++) {
            const player = {};
            player.id = reader.uint(1);
            player.name = reader.pascalString(1);
            player.score = reader.int(4);
            player.ping = reader.uint(4);
            state.players.push(player);
          }
        }
      }
    }
  }
  async sendPacket(type, allowTimeout) {
    const outBuffer = Buffer.alloc(11);
    outBuffer.write(this.magicHeader, 0, 4);
    const ipSplit = this.options.address.split(".");
    outBuffer.writeUInt8(parseInt(ipSplit[0]), 4);
    outBuffer.writeUInt8(parseInt(ipSplit[1]), 5);
    outBuffer.writeUInt8(parseInt(ipSplit[2]), 6);
    outBuffer.writeUInt8(parseInt(ipSplit[3]), 7);
    outBuffer.writeUInt16LE(this.options.port, 8);
    outBuffer.writeUInt8(type.charCodeAt(0), 10);
    const checkBuffer = Buffer.from(outBuffer);
    if (this.responseMagicHeader) {
      checkBuffer.write(this.responseMagicHeader, 0, 4);
    }
    return await this.udpSend(
      outBuffer,
      (buffer) => {
        const reader = this.reader(buffer);
        for (let i = 0; i < checkBuffer.length; i++) {
          if (checkBuffer.readUInt8(i) !== reader.uint(1))
            return;
        }
        return reader;
      },
      () => {
        if (allowTimeout) {
          return null;
        }
      }
    );
  }
};

// protocols/gtasao.js
var gtasao = class extends samp {
  constructor() {
    super();
    this.isOmp = true;
  }
};

// protocols/hawakeningmaster.js
var hawakeningmaster = class extends Core {
  constructor() {
    super();
    const meteorUri = "https://hawakening.com/api";
    this.backendApi = new MeteorBackendApi(this, meteorUri);
    this.backendApi.setLogger(this.logger);
    this.requireToken = false;
    this.doQuerySingle = false;
    this.doLogout = true;
    this.userInfo = null;
    this.usedTcp = true;
  }
  async run(state) {
    await this.retrieveClientAccessToken();
    await this.retrieveUser();
    await this.queryInfo(state);
    await this.cleanup(state);
  }
  async queryInfo(state) {
    if (this.doQuerySingle) {
      await this.queryInfoSingle(state);
    } else {
      await this.queryInfoMultiple(state);
    }
  }
  async queryInfoMultiple(state) {
    const servers = await this.getMasterServerList();
    state.raw.servers = servers.map((serverListing) => {
      const serverState = JSON.parse(JSON.stringify(state));
      this.populateProperties(serverState, { serverListing });
      return serverState;
    });
  }
  async queryInfoSingle(state) {
    const servers = await this.getMasterServerList();
    const serverListing = servers.find((server) => {
      return server.Guid === this.options.serverId;
    });
    this.logger.debug("Server Listing:", serverListing);
    if (serverListing == null) {
      throw new Error("Server not found in master server listing");
    }
    const serverInfo = await this.getServerInfo(serverListing);
    this.logger.debug("Server Info:", serverInfo);
    if (!serverInfo) {
      throw new Error("Invalid server info received");
    }
    this.populateProperties(state, { serverListing, serverInfo });
  }
  async cleanup(state) {
    await this.sendExitMessage();
    await this.sendLogout();
    this.backendApi.cleanup();
    this.userInfo = null;
  }
  /**
   * Translates raw properties into known properties
   * @param {Object} state Parsed data
   * @param {Object} data Queried data
   */
  populateProperties(state, data) {
    var _a, _b;
    const { serverListing: listing, serverInfo: info } = data;
    if (info) {
      state.gameHost = info.AssignedServerIp || null;
      state.gamePort = info.AssignedServerPort || null;
    }
    state.name = listing.ServerName || "";
    state.map = listing.Map || "";
    state.password = !!((_a = listing.DeveloperData) == null ? void 0 : _a.PasswordHash);
    state.numplayers = ((_b = listing.Users) == null ? void 0 : _b.length) || 0;
    state.maxplayers = listing.MaxUsers || 0;
    state.version = listing.GameVersion || "";
    Object.assign(state.raw, { listing, info });
  }
  async retrieveClientAccessToken() {
    if (this.options.token) {
      this.doLogout = false;
      this.backendApi.accessToken = this.options.token;
      await this.checkAccess();
      return;
    }
    if (!this.options.username && !this.requireToken) {
      this.logger.debug("retrieveClientAccessToken: No username provided but no token required for current protocol.");
      return;
    }
    this.logger.debug(`Retrieving user access token for ${this.options.username}...`);
    const response = await this.backendApi.getClientAccessToken(this.options.username, this.options.password);
    const tag = "access token";
    MeteorBackendApi.AssertResponse(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { match: ["Access Grant Not Issued: Unrecognized options for login request"], errorMessage: "No user name or password" });
    MeteorBackendApi.AssertResponseMessage(response, tag, { match: ["Access Grant Not Issued: User not found"], errorMessage: "Invalid user name" });
    MeteorBackendApi.AssertResponseMessage(response, tag, { match: ["Access Grant Not Issued: Incorrect password"], errorMessage: "Incorrect password" });
    MeteorBackendApi.AssertResponseStatus(response, tag, { printStatus: true });
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["User Logged In"] });
    MeteorBackendApi.AssertResponseData(response, tag);
    this.backendApi.accessToken = response.Result;
    await this.checkAccess();
  }
  async retrieveUser() {
    if (!this.options.username && !this.requireToken) {
      this.logger.debug("retrieveUser: No username provided but no token required for current protocol.");
      return;
    }
    this.userInfo = await this.getUserInfo();
  }
  async checkAccess() {
    this.logger.debug("Checking access ...");
    const responseServices = await this.backendApi.getStatusServices();
    MeteorBackendApi.AssertResponseStatus(responseServices, "service status");
    MeteorBackendApi.AssertResponseMessage(responseServices, "service status", { expected: ["Status found"] });
    const responseTest = await this.backendApi.getBundles();
    MeteorBackendApi.AssertResponseStatus(responseTest, "bundles");
    MeteorBackendApi.AssertResponseMessage(responseTest, "bundles", { expected: ["Bundles Filter successful"] });
  }
  async getUserInfo() {
    this.logger.debug(`Requesting user info for ${this.options.username} ...`);
    const response = await this.backendApi.getUserInfo(this.options.username);
    const tag = "user info";
    MeteorBackendApi.AssertResponse(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { match: ["User not found"], errorMessage: "Invalid or no user name" });
    MeteorBackendApi.AssertResponseStatus(response, tag, { printStatus: true });
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["Userfound"] });
    MeteorBackendApi.AssertResponseData(response, tag);
    return response.Result;
  }
  async getMasterServerList() {
    this.logger.debug("Requesting game servers ...");
    const response = await this.backendApi.getMasterServerList();
    const tag = "server list";
    MeteorBackendApi.AssertResponseStatus(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["Listings found"] });
    MeteorBackendApi.AssertResponseData(response, tag);
    const servers = response.Result;
    if (!Array.isArray(servers)) {
      throw new Error("Invalid data received from master server. Expecting list of data");
    }
    if (servers.length === 0) {
      throw new Error("No data received from master server.");
    }
    return servers;
  }
  async getServerInfo(serverListing) {
    var _a;
    if (serverListing.MaxUsers == ((_a = serverListing.Users) == null ? void 0 : _a.length)) {
      return {};
    }
    const serverToken = await this.getServerToken(serverListing);
    const matchInfo = await this.getMatchInfo(serverToken);
    return matchInfo;
  }
  async getServerToken(serverListing) {
    this.logger.debug(`Requesting server token ${serverListing.Guid} ...`);
    const response = await this.backendApi.getServerToken(serverListing, this.userInfo);
    const tag = "server token";
    MeteorBackendApi.AssertResponseStatus(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["Succesfully created the advertisement"] });
    MeteorBackendApi.AssertResponseData(response, tag);
    return response.Result;
  }
  async getMatchInfo(serverToken) {
    this.logger.debug(`Requesting match info ${serverToken} ...`);
    const response = await this.backendApi.getMatchInfo(serverToken);
    const tag = "match info";
    MeteorBackendApi.AssertResponseStatus(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["Successfully loaded ClientMatchmakingAdvertisement."] });
    MeteorBackendApi.AssertResponseData(response, tag);
    return response.Result;
  }
  async sendExitMessage() {
    if (!this.backendApi.accessToken || !this.userInfo) {
      return;
    }
    this.logger.debug("Sending exit notify message ...");
    const response = await this.backendApi.notifyExit(this.userInfo);
    const tag = "exit message";
    MeteorBackendApi.AssertResponseStatus(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["Event emission successful"] });
  }
  async sendLogout() {
    var _a;
    if (!this.doLogout || !this.backendApi.accessToken || !this.userInfo) {
      return;
    }
    this.logger.debug(`Sending logout message for ${((_a = this.userInfo) == null ? void 0 : _a.EmailAddress) || this.userInfo.Guid}...`);
    const response = await this.backendApi.logout(this.userInfo);
    const tag = "logout message";
    MeteorBackendApi.AssertResponseStatus(response, tag);
    MeteorBackendApi.AssertResponseMessage(response, tag, { expected: ["AccessGrant Revoked"] });
  }
};
function deepMerge(obj1, obj2) {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (Object.hasOwn(obj2, key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
}
function isObject(item) {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
var MeteorBackendApi = class {
  #accessToken = null;
  #protocol = null;
  #apiUri = null;
  /**
   * Creates an instance of the MeteorBackendApi.
   * 
   * @param {Object} protocol - The protocol object to handle requests.
   * @param {string} apiUri - The base URI for the API.
   */
  constructor(protocol, apiUri) {
    this.#protocol = protocol;
    this.#apiUri = apiUri;
    this.logger = null;
  }
  /**
   * The base URI of the API.
   * 
   * @returns {string} The API URI.
   */
  get apiUri() {
    return this.#apiUri;
  }
  /**
   * Sets the current access token
   * @param {string} value the access token
   */
  set accessToken(value) {
    this.#accessToken = value;
  }
  /**
   * Returns the current access token
   */
  get accessToken() {
    return this.#accessToken;
  }
  /**
   * Sets the logger for the instance.
   * 
   * @param {Object} logger - The logger instance to use for logging.
   */
  setLogger(logger) {
    this.logger = logger;
  }
  /**
   * Makes an API call to the specified endpoint with the given request parameters.
   * 
   * @param {string} endpoint - The API endpoint to call.
   * @param {Object} requestParams - The parameters for the API request.
   * @param {Object} callParams - Additional parameters for the call.
   * @param {boolean} [callParams.requireAuth=false] - Whether the call requires authentication.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  makeCall(endpoint, requestParams = null, callParams = null) {
    var _a;
    const { requireAuth = false } = callParams ?? {};
    const url = `${this.#apiUri}/${endpoint}`;
    const headers = {
      Accept: "*/*",
      "Content-Type": "application/json",
      ...requireAuth ? { Authorization: `Basic ${this.accessToken}` } : {}
    };
    const defaultParams = {
      url,
      headers,
      method: "GET",
      responseType: "json"
    };
    const requestCollection = deepMerge(defaultParams, requestParams);
    (_a = this.logger) == null ? void 0 : _a.debug(`${requestCollection.method || "GET"}: ${url}`);
    const response = this.#protocol.request(requestCollection);
    return response;
  }
  /**
   * Cleans up the instance
   */
  cleanup() {
    this.accessToken = null;
  }
  /**
   * Retrieves the status of the service.
   * 
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getStatusServices() {
    const response = this.makeCall("status/services");
    return response;
  }
  /**
   * Retrieves Bundles.
   * 
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getBundles() {
    const response = this.makeCall("bundles", {}, { requireAuth: true });
    return response;
  }
  /**
   * Retrieves an access token for a client using the provided username and password.
   * 
   * @param {string} userName - The username of the client.
   * @param {string} password - The password of the client.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getClientAccessToken(userName, password) {
    const endpoint = `users/${encodeURIComponent(userName)}/accessGrant`;
    const body = { Password: password };
    const response = this.makeCall(endpoint, { json: body, method: "POST" });
    return response;
  }
  /**
   * Retrieves user information based on the username.
   * 
   * @param {string} userName - The username of the user.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getUserInfo(userName) {
    const endpoint = `users/${encodeURIComponent(userName)}`;
    const response = this.makeCall(endpoint, {}, { requireAuth: true });
    return response;
  }
  /**
   * Retrieves a list of master servers.
   * 
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getMasterServerList() {
    const response = this.makeCall("gameServerListings", {}, { requireAuth: true });
    return response;
  }
  /**
   * Retrieves a server token based on the server listing and user information.
   * 
   * @param {Object} serverListing - The server listing object containing server details.
   * @param {Object} userInfo - The user information object.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getServerToken(serverListing, userInfo) {
    const body = {
      GameVersion: serverListing.GameVersion,
      OwnerGuid: userInfo.Guid,
      Region: serverListing.Region,
      RequestedServerGuid: serverListing.Guid,
      Users: [userInfo.Guid]
    };
    const response = this.makeCall("hawkenClientMatchmakingAdvertisements", { json: body, method: "POST" }, { requireAuth: true });
    return response;
  }
  /**
   * Retrieves match information based on the server token.
   * 
   * @param {string} serverToken - The token of the server.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  getMatchInfo(serverToken) {
    const endpoint = `hawkenClientMatchmakingAdvertisements/${serverToken}`;
    const response = this.makeCall(endpoint, {}, { requireAuth: true });
    return response;
  }
  /**
   * Notifies the system that a user has exited.
   * 
   * @param {Object} userInfo - The user information object.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  notifyExit(userInfo) {
    const body = [{
      Data: {
        TimeCreated: (/* @__PURE__ */ new Date()).getTime() / 1e3
      },
      Producer: {
        Id: "\\Hawken-CL142579\\Binaries\\Win32\\HawkenGame-Win32-Shipping.exe",
        Type: "HawkenGameClient"
      },
      Subject: {
        Id: userInfo.Guid,
        Type: "Player"
      },
      Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      Verb: "ExitClient"
    }];
    const response = this.makeCall("gameClientEvent", { json: body, method: "POST" }, { requireAuth: true });
    return response;
  }
  /**
   * Logs out a user based on their information.
   * 
   * @param {Object} userInfo - The user information object.
   * @returns {Promise<Object>} A promise that resolves to the response object from the API call.
   */
  logout(userInfo) {
    const endpoint = `users/${userInfo.Guid}/accessGrant`;
    const body = { AccessGrant: this.accessToken };
    const response = this.makeCall(endpoint, { json: body, method: "PUT" }, { requireAuth: true });
    return response;
  }
  /**
   * Asserts that the response is valid.
   * 
   * @static
   * @param {Object} response - The response object to validate.
   * @param {string} tag - A tag for the error message.
   * @param {Object} [params={}] - Additional parameters.
   * @param {boolean} [params.printStatus=false] - Whether to include the status in the error message.
   * @throws {Error} If the response is invalid.
   */
  static AssertResponse(response, tag, params = {}) {
    const { printStatus = false } = params || {};
    if (!response) {
      const statusMessage = printStatus ? `Response Status: ${response.Status}` : "";
      throw new Error(`Error retrieving ${tag || "data"} with no valid response.${statusMessage}`);
    }
  }
  /**
   * Asserts that the response status is valid.
   * 
   * @static
   * @param {Object} response - The response object to validate.
   * @param {string} tag - A tag for the error message.
   * @param {Object} [params={}] - Additional parameters.
   * @param {boolean} [params.checkStatus=true] - Whether to check the status code.
   * @param {boolean} [params.printStatus=false] - Whether to include the status in the error message.
   * @throws {Error} If the response status is invalid.
   */
  static AssertResponseStatus(response, tag, params = {}) {
    const { checkStatus = true, printStatus = false } = params || {};
    if (!response || !checkStatus || response.Status !== 200) {
      const statusMessage = printStatus ? `Response Status: ${response.Status}` : "";
      throw new Error(`Error retrieving ${tag || "data"} with no valid response.${statusMessage}`);
    }
  }
  /**
   * Asserts that the response message is valid.
   * 
   * @static
   * @param {Object} response - The response object to validate.
   * @param {string} tag - A tag for the error message.
   * @param {Object} [params={}] - Additional parameters.
   * @param {Array<string>} [params.expected=[]] - Expected messages.
   * @param {Array<string>} [params.match=[]] - Matching messages.
   * @param {boolean} [params.printCurrent=true] - Whether to include the current message in the error message.
   * @throws {Error} If the response message is invalid.
   */
  static AssertResponseMessage(response, tag, params = {}) {
    var _a;
    const { expected = [], match = [], errorMessage, printCurrent = true } = params || {};
    const responseMessage = (_a = response == null ? void 0 : response.Message) == null ? void 0 : _a.toLowerCase();
    if ((expected == null ? void 0 : expected.length) && !expected.some((x) => responseMessage === `${x}`.toLowerCase())) {
      const currentMessage = printCurrent ? ` Response message: ${response.Message}` : "";
      throw new Error(`Invalid ${tag || "data"} message received.${currentMessage}`);
    }
    if (match == null ? void 0 : match.some((x) => responseMessage === `${x}`.toLowerCase())) {
      throw new Error(errorMessage || `Invalid ${tag || "data"} message received.`);
    }
  }
  /**
   * Asserts that the response contains valid data.
   * 
   * @static
   * @param {Object} response - The response object to validate.
   * @param {string} tag - A tag for the error message.
   * @param {string} [key='Result'] - The key to check in the response.
   * @throws {Error} If the response does not contain valid data.
   */
  static AssertResponseData(response, tag, key = "Result") {
    if (response && (!isObject(response) || !response[key])) {
      throw new Error(`No ${tag || "data"} received`);
    }
  }
};

// protocols/hawakening.js
var hawakening = class extends hawakeningmaster {
  constructor() {
    super();
    this.doQuerySingle = true;
    this.requireToken = true;
  }
};

// protocols/quake1.js
var quake1 = class extends quake2 {
  constructor() {
    super();
    this.responseHeader = "n";
    this.isQuake1 = true;
  }
  async run(state) {
    await super.run(state);
    if ("*version" in state.raw)
      state.version = state.raw["*version"];
  }
};

// protocols/hexen2.js
var hexen2 = class extends quake1 {
  constructor() {
    super();
    this.sendHeader = "\xFFstatus\n";
    this.responseHeader = "\xFFn";
  }
  async run(state) {
    await super.run(state);
    state.gamePort = this.options.port - 50;
  }
};

// protocols/jc2mp.js
var jc2mp = class extends gamespy3 {
  constructor() {
    super();
    this.useOnlySingleSplit = true;
    this.isJc2mp = true;
    this.encoding = "utf8";
  }
  async run(state) {
    await super.run(state);
    state.version = state.raw.version;
  }
};

// protocols/kspdmp.js
var kspdmp = class extends Core {
  async run(state) {
    const json = await this.request({
      url: "http://" + this.options.address + ":" + this.options.port,
      responseType: "json"
    });
    for (const one of json.players) {
      state.players.push({ name: one.nickname, team: one.team });
    }
    for (const key of Object.keys(json)) {
      state.raw[key] = json[key];
    }
    state.name = json.server_name;
    state.maxplayers = json.max_players;
    state.gamePort = json.port;
    if (json.players) {
      const split = json.players.split(", ");
      for (const name of split) {
        state.players.push({ name });
      }
    }
    state.numplayers = state.players.length;
  }
};

// protocols/mafia2mp.js
var mafia2mp = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.header = "M2MP";
    this.isMafia2Online = false;
  }
  async run(state) {
    const body = await this.udpSend(this.header, (buffer) => {
      const reader2 = this.reader(buffer);
      const header = reader2.string(this.header.length);
      if (header !== this.header)
        return;
      return reader2.rest();
    });
    const reader = this.reader(body);
    state.name = this.readString(reader);
    state.numplayers = parseInt(this.readString(reader));
    state.maxplayers = parseInt(this.readString(reader));
    state.raw.gamemode = this.readString(reader);
    state.version = state.raw.gamemode;
    state.password = !!reader.uint(1);
    state.gamePort = this.options.port - 1;
    while (!reader.done()) {
      const player = {};
      player.name = this.readString(reader);
      if (!player.name)
        break;
      if (this.isMafia2Online) {
        player.ping = parseInt(this.readString(reader));
      }
      state.players.push(player);
    }
  }
  readString(reader) {
    return reader.pascalString(1, -1);
  }
};

// protocols/mafia2online.js
var mafia2online = class extends mafia2mp {
  constructor() {
    super();
    this.header = "M2Online";
    this.isMafia2Online = true;
  }
};

// protocols/minecraftbedrock.js
var minecraftbedrock = class extends Core {
  constructor() {
    super();
    this.byteorder = "be";
  }
  async run(state) {
    const bufs = [
      Buffer.from([1]),
      // Message ID, ID_UNCONNECTED_PING
      Buffer.from("1122334455667788", "hex"),
      // Nonce / timestamp
      Buffer.from("00ffff00fefefefefdfdfdfd12345678", "hex"),
      // Magic
      Buffer.from("0000000000000000", "hex")
      // Cliend GUID
    ];
    return await this.udpSend(Buffer.concat(bufs), (buffer) => {
      const reader = this.reader(buffer);
      const messageId = reader.uint(1);
      if (messageId !== 28) {
        this.logger.debug("Skipping packet, invalid message id");
        return;
      }
      const nonce = reader.part(8).toString("hex");
      this.logger.debug("Nonce: " + nonce);
      if (nonce !== "1122334455667788") {
        this.logger.debug("Skipping packet, invalid nonce");
        return;
      }
      reader.skip(8);
      const magic = reader.part(16).toString("hex");
      this.logger.debug("Magic value: " + magic);
      if (magic !== "00ffff00fefefefefdfdfdfd12345678") {
        this.logger.debug("Skipping packet, invalid magic");
        return;
      }
      const statusLen = reader.uint(2);
      if (reader.remaining() !== statusLen) {
        throw new Error("Invalid status length: " + reader.remaining() + " vs " + statusLen);
      }
      const statusStr = reader.rest().toString("utf8");
      this.logger.debug("Raw status str: " + statusStr);
      const split = statusStr.split(";");
      if (split.length < 6) {
        throw new Error("Missing enough chunks in status str");
      }
      state.raw.edition = split.shift();
      state.name = split.shift();
      state.raw.protocolVersion = split.shift();
      state.raw.mcVersion = split.shift();
      state.version = state.raw.mcVersion;
      state.numplayers = parseInt(split.shift());
      state.maxplayers = parseInt(split.shift());
      if (split.length)
        state.raw.serverId = split.shift();
      if (split.length)
        state.map = split.shift();
      if (split.length)
        state.raw.gameMode = split.shift();
      if (split.length)
        state.raw.nintendoOnly = !!parseInt(split.shift());
      if (split.length)
        state.raw.ipv4Port = split.shift();
      if (split.length)
        state.raw.ipv6Port = split.shift();
      return true;
    });
  }
};

// protocols/minecraftvanilla.js
var import_varint2 = __toESM(require("varint"), 1);
var minecraftvanilla = class extends Core {
  async run(state) {
    const portBuf = Buffer.alloc(2);
    portBuf.writeUInt16BE(this.options.port, 0);
    const addressBuf = Buffer.from(this.options.host, "utf8");
    const bufs = [
      this.varIntBuffer(47),
      this.varIntBuffer(addressBuf.length),
      addressBuf,
      portBuf,
      this.varIntBuffer(1)
    ];
    const outBuffer = Buffer.concat([
      this.buildPacket(0, Buffer.concat(bufs)),
      this.buildPacket(0)
    ]);
    const data = await this.withTcp(async (socket) => {
      return await this.tcpSend(socket, outBuffer, (data2) => {
        if (data2.length < 10)
          return;
        const reader2 = this.reader(data2);
        const length = reader2.varint();
        if (data2.length < length)
          return;
        return reader2.rest();
      });
    });
    const reader = this.reader(data);
    const packetId = reader.varint();
    this.logger.debug("Packet ID: " + packetId);
    const strLen = reader.varint();
    this.logger.debug("String Length: " + strLen);
    const rest = reader.rest();
    const str = rest.toString("utf8", 0, strLen);
    this.logger.debug(str);
    const json = JSON.parse(str.substring(0, strLen));
    state.raw = json;
    state.maxplayers = json.players.max;
    state.numplayers = json.players.online;
    if (json.players.sample) {
      for (const player of json.players.sample) {
        state.players.push({
          id: player.id,
          name: player.name
        });
      }
    }
    let bccJson = {};
    if (rest.length > strLen) {
      const bccStr = rest.toString("utf8", strLen + 1);
      bccJson = JSON.parse(bccStr);
    }
    state.raw.bcc = bccJson;
  }
  varIntBuffer(num) {
    return Buffer.from(import_varint2.default.encode(num));
  }
  buildPacket(id, data) {
    if (!data)
      data = Buffer.from([]);
    const idBuffer = this.varIntBuffer(id);
    return Buffer.concat([
      this.varIntBuffer(data.length + idBuffer.length),
      idBuffer,
      data
    ]);
  }
};

// protocols/minecraft.js
var minecraft = class extends Core {
  constructor() {
    super();
    this.srvRecord = "_minecraft._tcp";
  }
  async run(state) {
    const promises = [];
    const vanillaResolver = new minecraftvanilla();
    vanillaResolver.options = this.options;
    vanillaResolver.udpSocket = this.udpSocket;
    promises.push(vanillaResolver);
    const gamespyResolver = new gamespy3();
    gamespyResolver.options = {
      ...this.options,
      encoding: "utf8"
    };
    gamespyResolver.udpSocket = this.udpSocket;
    promises.push(gamespyResolver);
    const bedrockResolver = new minecraftbedrock();
    bedrockResolver.options = this.options;
    bedrockResolver.udpSocket = this.udpSocket;
    promises.push(bedrockResolver);
    const ranPromises = promises.map((p) => p.runOnceSafe().catch((_) => void 0));
    const [vanillaState, gamespyState, bedrockState] = await Promise.all(ranPromises);
    state.raw.vanilla = vanillaState;
    state.raw.gamespy = gamespyState;
    state.raw.bedrock = bedrockState;
    if (!vanillaState && !gamespyState && !bedrockState) {
      throw new Error("No protocols succeeded");
    }
    if (bedrockState) {
      if (bedrockState.players.length)
        state.players = bedrockState.players;
    }
    if (vanillaState) {
      try {
        let name = "";
        const description = vanillaState.raw.description;
        if (typeof description === "string") {
          name = description;
        } else if (typeof description === "object") {
          const stack = [description];
          while (stack.length) {
            const current = stack.pop();
            if (current.text) {
              name += current.text;
            }
            if (Array.isArray(current.extra)) {
              stack.push(...current.extra.reverse());
            }
          }
        }
        state.name = name;
      } catch (e) {
      }
      if (vanillaState.numplayers)
        state.numplayers = vanillaState.numplayers;
      if (vanillaState.maxplayers)
        state.maxplayers = vanillaState.maxplayers;
      if (vanillaState.players.length)
        state.players = vanillaState.players;
      if (vanillaState.ping)
        this.registerRtt(vanillaState.ping);
      if (vanillaState.raw.version)
        state.version = vanillaState.raw.version.name;
    }
    if (gamespyState) {
      if (gamespyState.name)
        state.name = gamespyState.name;
      if (gamespyState.numplayers)
        state.numplayers = gamespyState.numplayers;
      if (gamespyState.maxplayers)
        state.maxplayers = gamespyState.maxplayers;
      if (gamespyState.players.length)
        state.players = gamespyState.players;
      else if (gamespyState.numplayers)
        state.numplayers = gamespyState.numplayers;
      if (gamespyState.ping)
        this.registerRtt(gamespyState.ping);
    }
    if (bedrockState) {
      if (bedrockState.name)
        state.name = bedrockState.name;
      if (bedrockState.numplayers)
        state.numplayers = bedrockState.numplayers;
      if (bedrockState.maxplayers)
        state.maxplayers = bedrockState.maxplayers;
      if (bedrockState.map)
        state.map = bedrockState.map;
      if (bedrockState.ping)
        this.registerRtt(bedrockState.ping);
      if (bedrockState.raw.mcVersion)
        state.version = bedrockState.raw.mcVersion;
    }
    state.name = state.name.replace(/\s+/g, " ");
    state.name = state.name.replace(/\u00A7./g, "");
  }
};

// protocols/minetest.js
var minetest = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    const servers = await this.request({
      url: "https://servers.minetest.net/list",
      responseType: "json"
    });
    if (servers == null) {
      throw new Error("Unable to retrieve master server list");
    }
    const serverInfo = servers.list.find(
      (server) => server.ip === this.options.address && server.port === this.options.port
    );
    if (serverInfo == null) {
      throw new Error("Server not found in master server list");
    }
    const players = serverInfo.clients_list || [];
    state.name = serverInfo.name;
    state.password = serverInfo.password;
    state.numplayers = serverInfo.clients || players.length;
    state.maxplayers = serverInfo.clients_max;
    state.players = players.map((player) => ({ name: player, raw: {} }));
    state.raw = serverInfo;
    state.version = serverInfo.version;
  }
};

// protocols/mumble.js
var mumble = class extends Core {
  async run(state) {
    const json = await this.withTcp(async (socket) => {
      return await this.tcpSend(socket, "json", (buffer) => {
        if (buffer.length < 10)
          return;
        const str = buffer.toString();
        let json2;
        try {
          json2 = JSON.parse(str);
        } catch (e) {
          return;
        }
        return json2;
      });
    });
    state.raw = json;
    state.name = json.name;
    state.gamePort = json.x_gtmurmur_connectport || 64738;
    let channelStack = [state.raw.root];
    while (channelStack.length) {
      const channel = channelStack.shift();
      channel.description = this.cleanComment(channel.description);
      channelStack = channelStack.concat(channel.channels);
      for (const user of channel.users) {
        user.comment = this.cleanComment(user.comment);
        state.players.push(user);
      }
    }
  }
  cleanComment(str) {
    return str.replace(/<.*>/g, "");
  }
};

// protocols/mumbleping.js
var mumbleping = class extends Core {
  constructor() {
    super();
    this.byteorder = "be";
  }
  async run(state) {
    const data = await this.udpSend("\0\0\0\0\x07\b", (buffer) => {
      if (buffer.length >= 24)
        return buffer;
    });
    const reader = this.reader(data);
    reader.skip(1);
    state.raw.versionMajor = reader.uint(1);
    state.raw.versionMinor = reader.uint(1);
    state.raw.versionPatch = reader.uint(1);
    state.version = state.raw.versionMajor + "." + state.raw.versionMinor + "." + state.raw.versionPatch;
    reader.skip(8);
    state.numplayers = reader.uint(4);
    state.maxplayers = reader.uint(4);
    state.raw.allowedbandwidth = reader.uint(4);
  }
};

// protocols/nadeo.js
var gbxremote = __toESM(require("gbxremote"), 1);
var nadeo = class extends Core {
  async run(state) {
    await this.withClient(async (client) => {
      const start = Date.now();
      await this.query(client, "Authenticate", this.options.login, this.options.password);
      this.registerRtt(Date.now() - start);
      {
        const results = await this.query(client, "GetServerOptions");
        state.name = this.stripColors(results.Name);
        state.password = results.Password !== "No password";
        state.maxplayers = results.CurrentMaxPlayers;
        state.raw.maxspectators = results.CurrentMaxSpectators;
        state.raw.GetServerOptions = results;
      }
      {
        const results = await this.query(client, "GetCurrentChallengeInfo");
        state.map = this.stripColors(results.Name);
        state.raw.GetCurrentChallengeInfo = results;
      }
      {
        const results = await this.query(client, "GetCurrentGameInfo");
        let gamemode = "";
        const igm = results.GameMode;
        if (igm === 0)
          gamemode = "Rounds";
        if (igm === 1)
          gamemode = "Time Attack";
        if (igm === 2)
          gamemode = "Team";
        if (igm === 3)
          gamemode = "Laps";
        if (igm === 4)
          gamemode = "Stunts";
        if (igm === 5)
          gamemode = "Cup";
        state.raw.gametype = gamemode;
        state.raw.mapcount = results.NbChallenge;
        state.raw.GetCurrentGameInfo = results;
      }
      {
        const results = await this.query(client, "GetVersion");
        state.version = results.Version;
        state.raw.GetVersion = results;
      }
      if (this.options.port === 5e3) {
        state.gamePort = 2350;
      }
      state.raw.players = await this.query(client, "GetPlayerList", 1e4, 0);
      for (const player of state.raw.players) {
        state.players.push({
          name: this.stripColors(player.Name || player.NickName)
        });
      }
      state.numplayers = state.players.length;
    });
  }
  async withClient(fn) {
    const socket = new gbxremote.Client(this.options.port, this.options.host);
    try {
      const connectPromise = socket.connect();
      const timeoutPromise = Promises.createTimeout(this.options.socketTimeout, "GBX Remote Opening");
      await Promise.race([connectPromise, timeoutPromise, this.abortedPromise]);
      return await fn(socket);
    } finally {
      socket.terminate();
    }
  }
  async query(client, command, ...args) {
    const params = args.slice();
    const sentPromise = client.query(command, params);
    const timeoutPromise = Promises.createTimeout(this.options.socketTimeout, "GBX Method Call");
    return await Promise.race([sentPromise, timeoutPromise, this.abortedPromise]);
  }
  stripColors(str) {
    return this.options.stripColors ? str.replace(/\$([0-9a-f]{3}|[a-z])/gi, "") : str;
  }
};

// protocols/openttd.js
var openttd = class extends Core {
  async run(state) {
    {
      const [reader, version] = await this.query(0, 1, 1, 4);
      if (version >= 4) {
        const numGrf = reader.uint(1);
        state.raw.grfs = [];
        for (let i = 0; i < numGrf; i++) {
          const grf = {};
          grf.id = reader.part(4).toString("hex");
          grf.md5 = reader.part(16).toString("hex");
          state.raw.grfs.push(grf);
        }
      }
      if (version >= 3) {
        state.raw.date_current = this.readDate(reader);
        state.raw.date_start = this.readDate(reader);
      }
      if (version >= 2) {
        state.raw.maxcompanies = reader.uint(1);
        state.raw.numcompanies = reader.uint(1);
        state.raw.maxspectators = reader.uint(1);
      }
      state.name = reader.string();
      state.version = reader.string();
      state.raw.language = this.decode(
        reader.uint(1),
        ["any", "en", "de", "fr"]
      );
      state.password = !!reader.uint(1);
      state.maxplayers = reader.uint(1);
      state.numplayers = reader.uint(1);
      state.raw.numspectators = reader.uint(1);
      state.map = reader.string();
      state.raw.map_width = reader.uint(2);
      state.raw.map_height = reader.uint(2);
      state.raw.landscape = this.decode(
        reader.uint(1),
        ["temperate", "arctic", "desert", "toyland"]
      );
      state.raw.dedicated = !!reader.uint(1);
    }
    {
      const [reader, version] = await this.query(2, 3, -1, -1);
      if (version === 6) {
        state.raw.companies = [];
        const numCompanies = reader.uint(1);
        for (let iCompany = 0; iCompany < numCompanies; iCompany++) {
          const company = {};
          company.id = reader.uint(1);
          company.name = reader.string();
          company.year_start = reader.uint(4);
          company.value = reader.uint(8).toString();
          company.money = reader.uint(8).toString();
          company.income = reader.uint(8).toString();
          company.performance = reader.uint(2);
          company.password = !!reader.uint(1);
          const vehicleTypes = ["train", "truck", "bus", "aircraft", "ship"];
          const stationTypes = ["station", "truckbay", "busstation", "airport", "dock"];
          company.vehicles = {};
          for (const type of vehicleTypes) {
            company.vehicles[type] = reader.uint(2);
          }
          company.stations = {};
          for (const type of stationTypes) {
            company.stations[type] = reader.uint(2);
          }
          company.clients = reader.string();
          state.raw.companies.push(company);
        }
      }
    }
  }
  async query(type, expected, minver, maxver) {
    const b = Buffer.from([3, 0, type]);
    return await this.udpSend(b, (buffer) => {
      const reader = this.reader(buffer);
      const packetLen = reader.uint(2);
      if (packetLen !== buffer.length) {
        this.logger.debug("Invalid reported packet length: " + packetLen + " " + buffer.length);
        return;
      }
      const packetType = reader.uint(1);
      if (packetType !== expected) {
        this.logger.debug("Unexpected response packet type: " + packetType);
        return;
      }
      const protocolVersion = reader.uint(1);
      if (minver !== -1 && protocolVersion < minver || maxver !== -1 && protocolVersion > maxver) {
        throw new Error("Unknown protocol version: " + protocolVersion + " Expected: " + minver + "-" + maxver);
      }
      return [reader, protocolVersion];
    });
  }
  readDate(reader) {
    const daysSinceZero = reader.uint(4);
    const temp = new Date(0, 0, 1);
    temp.setFullYear(0);
    temp.setDate(daysSinceZero + 1);
    return temp.toISOString().split("T")[0];
  }
  decode(num, arr) {
    if (num < 0 || num >= arr.length) {
      return num;
    }
    return arr[num];
  }
};

// protocols/palworld.js
var palworld = class extends Core {
  async makeCall(endpoint) {
    const url = `http://${this.options.host}:${this.options.port}/v1/api/${endpoint}`;
    const headers = {
      Authorization: `Basic ${Buffer.from(`${this.options.username}:${this.options.password}`).toString("base64")}`,
      Accept: "application/json"
    };
    return await this.request({ url, headers, method: "GET", responseType: "json" });
  }
  async run(state) {
    const serverInfo = await this.makeCall("info");
    state.version = serverInfo.version;
    state.name = serverInfo.servername;
    state.raw.serverInfo = serverInfo;
    const { players } = await this.makeCall("players");
    state.numplayers = players.length;
    state.players = players.map((player) => ({ name: player.name, raw: player }));
    state.raw.players = players;
    state.raw.settings = await this.makeCall("settings");
    const metrics = await this.makeCall("metrics");
    state.numplayers = metrics.currentplayernum;
    state.maxplayers = metrics.maxplayernum;
    state.raw.metrics = metrics;
  }
};

// protocols/quake3.js
var quake3 = class extends quake2 {
  constructor() {
    super();
    this.sendHeader = "getstatus";
    this.responseHeader = "statusResponse";
  }
  async run(state) {
    await super.run(state);
    state.name = this.stripColors(state.name);
    for (const key of Object.keys(state.raw)) {
      state.raw[key] = this.stripColors(state.raw[key]);
      if ("version" in state.raw)
        state.version = state.raw.version;
    }
    for (const player of state.players) {
      player.name = this.stripColors(player.name);
    }
    for (const bot of state.bots) {
      bot.name = this.stripColors(bot.name);
    }
  }
  stripColors(str) {
    return this.options.stripColors ? str.replace(/\^(X.{6}|.)/g, "") : str;
  }
};

// protocols/renegadex.js
var renegadex = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    const servers = await this.getMasterServerList();
    const serverInfo = servers.find((server) => {
      return server.IP === this.options.address && server.Port === this.options.port;
    });
    if (serverInfo == null) {
      throw new Error("Server not found in master server list");
    }
    this.populateProperties(state, serverInfo);
  }
  /**
   * Retrieves server list from master server
   * @throws {Error} Will throw error when no master list was received
   * @returns a list of servers as raw data
   */
  async getMasterServerList() {
    const servers = await this.request({
      url: "https://serverlist-rx.totemarts.services/servers.jsp",
      responseType: "json"
    });
    if (servers == null) {
      throw new Error("Unable to retrieve master server list");
    }
    if (!Array.isArray(servers)) {
      throw new Error("Invalid data received from master server. Expecting list of data");
    }
    if (servers.length === 0) {
      throw new Error("No data received from master server.");
    }
    return servers;
  }
  /**
   * Translates raw properties into known properties
   * @param {Object} state Parsed data
   */
  populateProperties(state, serverInfo) {
    let emptyPrefix = "";
    if (serverInfo.NamePrefix)
      emptyPrefix = serverInfo.NamePrefix + " ";
    const servername = `${emptyPrefix}${serverInfo.Name || ""}`;
    const numplayers = serverInfo.Players || 0;
    const variables = serverInfo.Variables || {};
    state.name = servername;
    state.map = serverInfo["Current Map"] || "";
    state.password = !!variables.bPassworded;
    state.numplayers = numplayers;
    state.maxplayers = variables["Player Limit"] || 0;
    state.raw = serverInfo;
    state.version = serverInfo["Game Version"] || "";
  }
};

// protocols/renegadexmaster.js
var renegadexmaster = class extends renegadex {
  async run(state) {
    const servers = await this.getMasterServerList();
    state.raw.servers = servers.map((serverInfo) => {
      const serverState = JSON.parse(JSON.stringify(state));
      this.populateProperties(serverState, serverInfo);
      return serverState;
    });
  }
};

// protocols/rfactor.js
var rfactor = class extends Core {
  async run(state) {
    const buffer = await this.udpSend("rF_S", (b) => b);
    const reader = this.reader(buffer);
    state.raw.gamename = this.readString(reader, 8);
    state.raw.fullUpdate = reader.uint(1);
    state.raw.region = reader.uint(2);
    state.raw.ip = reader.part(4);
    state.raw.size = reader.uint(2);
    state.version = reader.uint(2);
    state.raw.versionRaceCast = reader.uint(2);
    state.gamePort = reader.uint(2);
    state.raw.queryPort = reader.uint(2);
    state.raw.game = this.readString(reader, 20);
    state.name = this.readString(reader, 28);
    state.map = this.readString(reader, 32);
    state.raw.motd = this.readString(reader, 96);
    state.raw.packedAids = reader.uint(2);
    state.raw.ping = reader.uint(2);
    state.raw.packedFlags = reader.uint(1);
    state.raw.rate = reader.uint(1);
    state.numplayers = reader.uint(1);
    state.maxplayers = reader.uint(1);
    state.raw.bots = reader.uint(1);
    state.raw.packedSpecial = reader.uint(1);
    state.raw.damage = reader.uint(1);
    state.raw.packedRules = reader.uint(2);
    state.raw.credits1 = reader.uint(1);
    state.raw.credits2 = reader.uint(2);
    this.logger.debug(reader.offset());
    state.raw.time = reader.uint(2);
    state.raw.laps = reader.uint(2) / 16;
    reader.skip(3);
    state.raw.vehicles = reader.string();
    state.password = !!(state.raw.packedSpecial & 2);
    state.raw.raceCast = !!(state.raw.packedSpecial & 4);
    state.raw.fixedSetups = !!(state.raw.packedSpecial & 16);
    const aids = [
      "TractionControl",
      "AntiLockBraking",
      "StabilityControl",
      "AutoShifting",
      "AutoClutch",
      "Invulnerability",
      "OppositeLock",
      "SteeringHelp",
      "BrakingHelp",
      "SpinRecovery",
      "AutoPitstop"
    ];
    state.raw.aids = [];
    for (let offset = 0; offset < aids.length; offset++) {
      if (state.packedAids && 1 << offset) {
        state.raw.aids.push(aids[offset]);
      }
    }
  }
  // Consumes bytesToConsume, but only returns string up to the first null
  readString(reader, bytesToConsume) {
    const consumed = reader.part(bytesToConsume);
    return this.reader(consumed).string();
  }
};

// protocols/satisfactory.js
var satisfactory = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    const packet = Buffer.from([213, 246, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1]);
    const response = await this.udpSend(packet, (packet2) => {
      const reader = this.reader(packet2);
      const header = reader.part(4);
      if (header.equals(Buffer.from([213, 246, 1, 2])))
        return;
      reader.skip(8);
      return reader;
    });
    state.raw.serverState = response.int(1);
    state.version = response.int(4).toString();
    state.raw.serverFlags = response.int(8);
    const subStatesCount = response.int(1);
    response.skip(subStatesCount * 3);
    const nameLength = response.int(2);
    state.name = response.part(nameLength).toString("utf-8");
    try {
      await this.doHttpApiQueries(state);
    } catch (e) {
      this.logger.debug("HTTP API query failed.");
      this.logger.debug(e);
    }
  }
  async doHttpApiQueries(state) {
    const headers = {
      "Content-Type": "application/json"
    };
    if (!this.options.rejectUnauthorized)
      this.options.rejectUnauthorized = false;
    let token = this.options.token;
    if (!token) {
      const tokenRequestJson = {
        function: "PasswordlessLogin",
        data: {
          MinimumPrivilegeLevel: "Client"
        }
      };
      const response = await this.queryInfo(tokenRequestJson, headers);
      token = response.authenticationToken;
    }
    const queryJson = {
      function: "QueryServerState"
    };
    const queryResponse = await this.queryInfo(queryJson, {
      ...headers,
      Authorization: `Bearer ${token}`
    });
    state.numplayers = queryResponse.serverGameState.numConnectedPlayers;
    state.maxplayers = queryResponse.serverGameState.playerLimit;
    state.raw.http = queryResponse;
  }
  async queryInfo(json, headers) {
    const url = `https://${this.options.host}:${this.options.port}/api/v1/`;
    this.logger.debug(`POST: ${url}`);
    const response = await this.request({
      url,
      json,
      headers,
      method: "POST",
      responseType: "json",
      https: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: this.options.rejectUnauthorized
      }
    });
    if (response.data == null) {
      throw new Error("Unable to retrieve data from server");
    } else {
      return response.data;
    }
  }
};

// protocols/savage2.js
var savage2 = class extends Core {
  async run(state) {
    const buffer = await this.udpSend("", (b) => b);
    const reader = this.reader(buffer);
    reader.skip(12);
    state.name = this.stripColorCodes(reader.string());
    state.numplayers = reader.uint(1);
    state.maxplayers = reader.uint(1);
    state.raw.time = reader.string();
    state.map = reader.string();
    state.raw.nextmap = reader.string();
    state.raw.location = reader.string();
    state.raw.minplayers = reader.uint(1);
    state.raw.gametype = reader.string();
    state.version = reader.string();
    state.raw.minlevel = reader.uint(1);
  }
  stripColorCodes(str) {
    return this.options.stripColors ? str.replace(/\^./g, "") : str;
  }
};

// protocols/soldat.js
var extractValue = (text, regex, defaultValue, parser = (val) => val) => {
  const match = text.match(regex);
  return match ? parser(match[1] || defaultValue) : defaultValue;
};
var soldat = class extends Core {
  async run(state) {
    const data = await this.withTcp(async (socket) => {
      return await this.tcpSend(socket, "STARTFILES\r\nlogs/gamestat.txt\r\nENDFILES\r\n", (data2) => {
        const asString = data2.toString();
        if (asString.endsWith("\r\n") && !asString.endsWith("ENDFILES\r\n")) {
          return void 0;
        }
        return data2;
      });
    });
    const string = data.toString();
    state.numplayers = extractValue(string, /Players:\s*(\d+)/, 0, Number);
    state.map = extractValue(string, /Map:\s*(.+)/, "");
    const lines = string.trim().split("\n");
    const playersIndex = lines.findIndex((line) => line.startsWith("Players list"));
    if (playersIndex > -1) {
      for (let i = playersIndex + 1; i < lines.length - 1; i += 5) {
        state.players.push({
          name: lines[i].trim(),
          raw: {
            kills: parseInt(lines[i + 1].trim()),
            deaths: parseInt(lines[i + 2].trim()),
            team: parseInt(lines[i + 3].trim()),
            ping: parseInt(lines[i + 4].trim())
          }
        });
      }
    }
    state.raw.response = string;
    state.raw.gamemode = extractValue(string, /Gamemode:\s*(.+)/, "");
  }
};

// protocols/starmade.js
var starmade = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.byteorder = "be";
  }
  async run(state) {
    const b = Buffer.from([0, 0, 0, 9, 42, 255, 255, 1, 111, 0, 0, 0, 0]);
    const payload = await this.withTcp(async (socket) => {
      return await this.tcpSend(socket, b, (buffer) => {
        if (buffer.length < 12)
          return;
        const reader2 = this.reader(buffer);
        const packetLength = reader2.uint(4);
        this.logger.debug("Received packet length: " + packetLength);
        const timestamp = reader2.uint(8).toString();
        this.logger.debug("Received timestamp: " + timestamp);
        if (reader2.remaining() < packetLength || reader2.remaining() < 5)
          return;
        const checkId = reader2.uint(1);
        const packetId = reader2.uint(2);
        const commandId = reader2.uint(1);
        const type = reader2.uint(1);
        this.logger.debug("checkId=" + checkId + " packetId=" + packetId + " commandId=" + commandId + " type=" + type);
        if (checkId !== 42)
          return;
        return reader2.rest();
      });
    });
    const reader = this.reader(payload);
    const data = [];
    state.raw.data = data;
    while (!reader.done()) {
      const mark = reader.uint(1);
      if (mark === 1) {
        data.push(reader.int(4));
      } else if (mark === 3) {
        data.push(reader.float());
      } else if (mark === 4) {
        data.push(reader.pascalString(2));
      } else if (mark === 6) {
        data.push(reader.uint(1));
      }
    }
    this.logger.debug("Received raw data array", data);
    if (typeof data[0] === "number")
      state.raw.infoVersion = data[0];
    if (typeof data[1] === "string")
      state.version = data[1];
    if (typeof data[2] === "string")
      state.name = data[2];
    if (typeof data[3] === "string")
      state.raw.description = data[3];
    if (typeof data[4] === "number")
      state.raw.startTime = data[4];
    if (typeof data[5] === "number")
      state.numplayers = data[5];
    if (typeof data[6] === "number")
      state.maxplayers = data[6];
  }
};

// protocols/tribes1.js
var tribes1 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
    this.requestByte = 98;
    this.responseByte = 99;
    this.challenge = 1;
  }
  async run(state) {
    const query = Buffer.alloc(3);
    query.writeUInt8(this.requestByte, 0);
    query.writeUInt16LE(this.challenge, 1);
    const reader = await this.udpSend(query, (buffer) => {
      const reader2 = this.reader(buffer);
      const responseByte = reader2.uint(1);
      if (responseByte !== this.responseByte) {
        this.logger.debug("Unexpected response byte");
        return;
      }
      const challenge = reader2.uint(2);
      if (challenge !== this.challenge) {
        this.logger.debug("Unexpected challenge");
        return;
      }
      const requestByte = reader2.uint(1);
      if (requestByte !== this.requestByte) {
        this.logger.debug("Unexpected request byte");
        return;
      }
      return reader2;
    });
    state.raw.gametype = this.readString(reader);
    const isStarsiege2009 = state.raw.gametype === "Starsiege";
    state.version = this.readString(reader);
    state.name = this.readString(reader);
    if (isStarsiege2009) {
      state.password = !!reader.uint(1);
      state.raw.dedicated = !!reader.uint(1);
      state.raw.dropInProgress = !!reader.uint(1);
      state.raw.gameInProgress = !!reader.uint(1);
      state.numplayers = reader.uint(4);
      state.maxplayers = reader.uint(4);
      state.raw.teamPlay = reader.uint(1);
      state.map = this.readString(reader);
      state.raw.cpuSpeed = reader.uint(2);
      state.raw.factoryVeh = reader.uint(1);
      state.raw.allowTecmix = reader.uint(1);
      state.raw.spawnLimit = reader.uint(4);
      state.raw.fragLimit = reader.uint(4);
      state.raw.timeLimit = reader.uint(4);
      state.raw.techLimit = reader.uint(4);
      state.raw.combatLimit = reader.uint(4);
      state.raw.massLimit = reader.uint(4);
      state.raw.playersSent = reader.uint(4);
      const teams = { 1: "yellow", 2: "blue", 4: "red", 8: "purple" };
      while (!reader.done()) {
        const player = {};
        player.name = this.readString(reader);
        const teamId = reader.uint(1);
        const team = teams[teamId];
        if (team)
          player.team = teams[teamId];
      }
      return;
    }
    state.raw.dedicated = !!reader.uint(1);
    state.password = !!reader.uint(1);
    state.raw.playerCount = reader.uint(1);
    state.maxplayers = reader.uint(1);
    state.raw.cpuSpeed = reader.uint(2);
    state.raw.mod = this.readString(reader);
    state.raw.type = this.readString(reader);
    state.map = this.readString(reader);
    state.raw.motd = this.readString(reader);
    state.raw.teamCount = reader.uint(1);
    const teamFields = this.readFieldList(reader);
    const playerFields = this.readFieldList(reader);
    state.raw.teams = [];
    for (let i = 0; i < state.raw.teamCount; i++) {
      const teamName = this.readString(reader);
      const teamValues = this.readValues(reader);
      const teamInfo = {};
      for (let i2 = 0; i2 < teamValues.length && i2 < teamFields.length; i2++) {
        let key = teamFields[i2];
        let value = teamValues[i2];
        if (key === "ultra_base")
          key = "name";
        if (value === "%t")
          value = teamName;
        if (["score", "players"].includes(key))
          value = parseInt(value);
        teamInfo[key] = value;
      }
      state.raw.teams.push(teamInfo);
    }
    for (let i = 0; i < state.raw.playerCount; i++) {
      const ping = reader.uint(1) * 4;
      const packetLoss = reader.uint(1);
      const teamNum = reader.uint(1);
      const name = this.readString(reader);
      const playerValues = this.readValues(reader);
      const playerInfo = {};
      for (let i2 = 0; i2 < playerValues.length && i2 < playerFields.length; i2++) {
        const key = playerFields[i2];
        let value = playerValues[i2];
        if (value === "%p")
          value = ping;
        if (value === "%l")
          value = packetLoss;
        if (value === "%t")
          value = teamNum;
        if (value === "%n")
          value = name;
        if (["score", "ping", "pl", "kills", "lvl"].includes(key))
          value = parseInt(value);
        if (key === "team") {
          const teamId = parseInt(value);
          if (teamId >= 0 && teamId < state.raw.teams.length && state.raw.teams[teamId].name) {
            value = state.raw.teams[teamId].name;
          } else {
            continue;
          }
        }
        playerInfo[key] = value;
      }
      state.players.push(playerInfo);
    }
  }
  readFieldList(reader) {
    const str = this.readString(reader);
    if (!str)
      return [];
    return ("?" + str).split("	").map((a) => a.substring(1).trim().toLowerCase()).map((a) => a === "team name" ? "name" : a).map((a) => a === "player name" ? "name" : a);
  }
  readValues(reader) {
    const str = this.readString(reader);
    if (!str)
      return [];
    return str.split("	").map((a) => a.trim());
  }
  readString(reader) {
    return reader.pascalString(1);
  }
};

// protocols/starsiege.js
var starsiege = class extends tribes1 {
  constructor() {
    super();
    this.encoding = "latin1";
    this.requestByte = 114;
    this.responseByte = 115;
  }
};

// protocols/teamspeak2.js
var teamspeak2 = class extends Core {
  async run(state) {
    const queryPort = this.options.teamspeakQueryPort || 51234;
    await this.withTcp(async (socket) => {
      {
        const data = await this.sendCommand(socket, "sel " + this.options.port);
        if (data !== "[TS]")
          throw new Error("Invalid header");
      }
      {
        const data = await this.sendCommand(socket, "si");
        for (const line of data.split("\r\n")) {
          const equals = line.indexOf("=");
          const key = equals === -1 ? line : line.substring(0, equals);
          const value = equals === -1 ? "" : line.substring(equals + 1);
          state.raw[key] = value;
        }
        if ("server_name" in state.raw)
          state.name = state.raw.server_name;
      }
      {
        const data = await this.sendCommand(socket, "pl");
        const split = data.split("\r\n");
        const fields = split.shift().split("	");
        for (const line of split) {
          const split2 = line.split("	");
          const player = {};
          split2.forEach((value, i) => {
            let key = fields[i];
            if (!key)
              return;
            if (key === "nick")
              key = "name";
            const m = value.match(/^"(.*)"$/);
            if (m)
              value = m[1];
            player[key] = value;
          });
          state.players.push(player);
        }
        state.numplayers = state.players.length;
      }
      {
        const data = await this.sendCommand(socket, "cl");
        const split = data.split("\r\n");
        const fields = split.shift().split("	");
        state.raw.channels = [];
        for (const line of split) {
          const split2 = line.split("	");
          const channel = {};
          split2.forEach((value, i) => {
            const key = fields[i];
            if (!key)
              return;
            const m = value.match(/^"(.*)"$/);
            if (m)
              value = m[1];
            channel[key] = value;
          });
          state.raw.channels.push(channel);
        }
      }
    }, queryPort);
  }
  async sendCommand(socket, cmd) {
    return await this.tcpSend(socket, cmd + "\n", (buffer) => {
      if (buffer.length < 6)
        return;
      if (buffer.slice(-6).toString() !== "\r\nOK\r\n")
        return;
      return buffer.slice(0, -6).toString();
    });
  }
};

// protocols/teamspeak3.js
var teamspeak3 = class extends Core {
  async run(state) {
    const queryPort = this.options.teamspeakQueryPort || 10011;
    await this.withTcp(async (socket) => {
      {
        const data = await this.sendCommand(socket, "use port=" + this.options.port, true);
        const split = data.split("\n\r");
        if (split[0] !== "TS3")
          throw new Error("Invalid header");
      }
      {
        const data = await this.sendCommand(socket, "serverinfo");
        state.raw = data[0];
        if ("virtualserver_name" in state.raw)
          state.name = state.raw.virtualserver_name;
        if ("virtualserver_maxclients" in state.raw)
          state.maxplayers = state.raw.virtualserver_maxclients;
        if ("virtualserver_clientsonline" in state.raw)
          state.numplayers = state.raw.virtualserver_clientsonline;
        if ("virtualserver_version" in state.raw)
          state.version = state.raw.virtualserver_version;
      }
      {
        const list = await this.sendCommand(socket, "clientlist");
        for (const client of list) {
          client.name = client.client_nickname;
          delete client.client_nickname;
          if (client.client_type === "0") {
            state.players.push(client);
          }
        }
      }
      {
        const data = await this.sendCommand(socket, "channellist -topic");
        state.raw.channels = data;
      }
    }, queryPort);
  }
  async sendCommand(socket, cmd, raw) {
    const body = await this.tcpSend(socket, cmd + "\n", (buffer) => {
      if (buffer.length < 21)
        return;
      if (buffer.slice(-21).toString() !== "\n\rerror id=0 msg=ok\n\r")
        return;
      return buffer.slice(0, -21).toString();
    });
    if (raw) {
      return body;
    } else {
      const segments = body.split("|");
      const out = [];
      for (const line of segments) {
        const split = line.split(" ");
        const unit = {};
        for (const field of split) {
          const equals = field.indexOf("=");
          const key = equals === -1 ? field : field.substring(0, equals);
          const value = equals === -1 ? "" : field.substring(equals + 1).replace(/\\s/g, " ").replace(/\\\//g, "/");
          unit[key] = value;
        }
        out.push(unit);
      }
      return out;
    }
  }
};

// protocols/terraria.js
var terraria = class extends Core {
  async run(state) {
    const json = await this.request({
      url: "http://" + this.options.address + ":" + this.options.port + "/v2/server/status",
      searchParams: {
        players: "true",
        token: this.options.token
      },
      responseType: "json"
    });
    if (json.status !== "200")
      throw new Error("Invalid status");
    for (const one of json.players) {
      state.players.push({ name: one.nickname, team: one.team });
    }
    state.name = json.name;
    state.gamePort = json.port;
    state.numplayers = json.playercount;
  }
};

// protocols/toxikk.js
var TranslateMapToxikk = Object.freeze({
  // add UT3 values
  // Toxikk is using UDK which includes basic implementation of UT3
  // ...TranslateMapUT3,
  // Old UT3/UDK properties
  p1073741825: "map",
  // UC Source='CRZMapName'
  p1073741826: "game",
  // UC Source='CustomGameMode'
  p268435704: "frag_limit",
  // UC Source='TimeLimit'
  p268435705: "time_limit",
  // UC Source='TimeLimit'
  p268435703: "numbots",
  p1073741827: "servername",
  // UC Source='ServerDescription'
  p268435717: false,
  // 'stock_mutators' // UC Source='OfficialMutators' // Note: "EpicMutators" are bit-masked and require Full UE3 license (C++) to flag mutators, stock mutators could be always 0, ignore for now
  p1073741828: "custom_mutators",
  // UC Source='CustomMutators'
  // Toxikk specific localized settings (commented name is based on source code)
  s32779: "GameMode",
  // 8=Custom, anything else is UT3/UDK
  s0: "bot_skill",
  // UC Source='BotSkill', // 0=Ridiculous  1=Novice  2=Average  3=Experienced  4=Adept  5=Masterful  6=Inhuman  7=Godlike
  s1: false,
  // UC Source='Map' // Note: set as '0' mostly, generally the index will state the official map, ignore for now
  s6: "pure_server",
  // UC Source='PureServer', // bool
  s7: "password",
  // UC Source='LockedServer', // bool
  s8: "vs_bots",
  // UC Source='VsBots', // 0=Disabled  1="2:1"  2="1:1"  3="2:3"  4="1:2"  5="1:3"  6="1:4"
  s9: "Campaign",
  // bool
  s10: "force_respawn",
  // UC Source='ForceRespawn', // bool
  s11: "AllowKeyboard",
  // bool
  s12: "IsFullServer",
  // bool
  s13: "IsEmptyServer",
  // bool
  s14: "IsDedicated",
  // bool
  s15: "RankedServer",
  // 0=UnRanked  1=Ranked
  s16: "OnlyFullGamePlayers",
  // bool
  s17: "IgnoredByMatchmaking",
  // bool
  s18: "OfficialServer",
  // 0=Community  1=Official
  s19: "ModdingLevel",
  // 0=Unmodded  1=Server Modded  2=Client Modded
  // Toxikk properties
  p268435706: "MaxPlayers",
  p268435707: "MinNetPlayers",
  p268435708: "MinSkillClass",
  p268435709: "MaxSkillClass",
  p1073741829: "PLAYERIDS1",
  p1073741830: "PLAYERIDS2",
  p1073741831: "PLAYERIDS3",
  p1073741832: "PLAYERNAMES1",
  p1073741833: "PLAYERNAMES2",
  p1073741834: "PLAYERNAMES3",
  p1073741837: "PLAYERSCS",
  p1073741838: "PLAYERBadgeRanks",
  p1073741839: "GameVersion",
  p1073741840: "GameVoteList"
});
var toxikk = class extends valve {
  async run(state) {
    if (!this.options.port)
      this.options.port = 27015;
    await this.queryInfo(state);
    await this.queryChallenge();
    await this.queryPlayers(state);
    await this.queryRules(state);
    this.processQueryInfo(state);
    await this.cleanup(state);
  }
  /** @override */
  async cleanup(state) {
    const originalNumBots = state.raw.numbots;
    state.raw.numbots = null;
    super.cleanup(state);
    state.raw.numbots = originalNumBots;
  }
  async queryRules(state) {
    if (!this.options.requestRules) {
      return;
    }
    const rules = {};
    this.logger.debug("Requesting rules ...");
    const b = await this.sendPacket(86, null, 69, true);
    if (b === null && !this.options.requestRulesRequired)
      return;
    const reader = this.reader(b);
    const num = reader.uint(2);
    for (let i = num - 1; i > 0 && !reader.done(); i--) {
      const key = reader.string();
      const value = reader.string();
      if (reader.remaining() <= 0) {
        break;
      }
      rules[key] = value;
    }
    state.raw.rules = rules;
  }
  processQueryInfo(state) {
    Object.assign(state.raw, state.raw.rules);
    this.translate(state.raw, TranslateMapToxikk);
    const split = (a) => {
      let s = a.split("");
      s = s.filter((e) => {
        return e;
      });
      return s;
    };
    if ("custom_mutators" in state.raw)
      state.raw.custom_mutators = split(state.raw.custom_mutators);
    if ("stock_mutators" in state.raw)
      state.raw.stock_mutators = split(state.raw.stock_mutators);
    if ("map" in state.raw)
      state.map ??= state.raw.map;
  }
};

// protocols/tribes1master.js
var tribes1master = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
  }
  async run(state) {
    const queryBuffer = Buffer.from([
      16,
      // standard header
      3,
      // dump servers
      255,
      // ask for all packets
      0,
      // junk
      1,
      2
      // challenge
    ]);
    const parts = /* @__PURE__ */ new Map();
    let total = 0;
    const full = await this.udpSend(queryBuffer, (buffer) => {
      const reader = this.reader(buffer);
      const header = reader.uint(2);
      if (header !== 1552) {
        this.logger.debug("Header response does not match: " + header.toString(16));
        return;
      }
      const num = reader.uint(1);
      const t = reader.uint(1);
      if (t <= 0 || total > 0 && t !== total) {
        throw new Error("Conflicting packet total: " + t);
      }
      total = t;
      if (num < 1 || num > total) {
        this.logger.debug("Invalid packet number: " + num + " " + total);
        return;
      }
      if (parts.has(num)) {
        this.logger.debug("Duplicate part: " + num);
        return;
      }
      reader.skip(2);
      reader.skip(2);
      parts.set(num, reader.rest());
      if (parts.size === total) {
        const ordered = [];
        for (let i = 1; i <= total; i++)
          ordered.push(parts.get(i));
        return Buffer.concat(ordered);
      }
    });
    const fullReader = this.reader(full);
    state.raw.name = this.readString(fullReader);
    state.raw.motd = this.readString(fullReader);
    state.raw.servers = [];
    while (!fullReader.done()) {
      fullReader.skip(1);
      const count = fullReader.uint(1);
      for (let i = 0; i < count; i++) {
        const six = fullReader.uint(1);
        if (six !== 6) {
          throw new Error("Expecting 6");
        }
        const ip = fullReader.uint(4);
        const port = fullReader.uint(2);
        const ipStr = (ip & 255) + "." + (ip >> 8 & 255) + "." + (ip >> 16 & 255) + "." + (ip >>> 24);
        state.raw.servers.push(ipStr + ":" + port);
      }
    }
  }
  readString(reader) {
    return reader.pascalString(1);
  }
};

// protocols/unreal2.js
var unreal2 = class extends Core {
  constructor() {
    super();
    this.encoding = "latin1";
  }
  async run(state) {
    let extraInfoReader;
    {
      const b = await this.sendPacket(0, true);
      const reader = this.reader(b);
      state.raw.serverid = reader.uint(4);
      state.raw.ip = this.readUnrealString(reader);
      state.gamePort = reader.uint(4);
      state.raw.queryport = reader.uint(4);
      state.name = this.readUnrealString(reader, true);
      state.map = this.readUnrealString(reader, true);
      state.raw.gametype = this.readUnrealString(reader, true);
      state.numplayers = reader.uint(4);
      state.maxplayers = reader.uint(4);
      this.logger.debug((log) => {
        log("UNREAL2 EXTRA INFO", reader.buffer.slice(reader.i));
      });
      extraInfoReader = reader;
    }
    {
      const b = await this.sendPacket(1, true);
      const reader = this.reader(b);
      state.raw.mutators = [];
      state.raw.rules = {};
      while (!reader.done()) {
        const key = this.readUnrealString(reader, true);
        const value = this.readUnrealString(reader, true);
        this.logger.debug(key + "=" + value);
        if (key === "Mutator" || key === "mutator") {
          state.raw.mutators.push(value);
        } else if (key || value) {
          if (Object.prototype.hasOwnProperty.call(state.raw.rules, key)) {
            state.raw.rules[key] += "," + value;
          } else {
            state.raw.rules[key] = value;
          }
        }
      }
      if ("GamePassword" in state.raw.rules) {
        state.password = state.raw.rules.GamePassword !== "True";
      }
      if ("UTComp_Version" in state.raw.rules) {
        state.version = state.raw.rules.UTComp_Version;
      }
    }
    if (state.raw.mutators.includes("KillingFloorMut") || state.raw.rules["Num trader weapons"] || state.raw.rules["Server Version"] === "1065") {
      state.raw.wavecurrent = extraInfoReader.uint(4);
      state.raw.wavetotal = extraInfoReader.uint(4);
      state.raw.ping = extraInfoReader.uint(4);
      state.raw.flags = extraInfoReader.uint(4);
      state.raw.skillLevel = this.readUnrealString(extraInfoReader, true);
    } else {
      state.raw.ping = extraInfoReader.uint(4);
      if (extraInfoReader.remaining() >= 8) {
        state.raw.flags = extraInfoReader.uint(4);
        state.raw.skill = this.readUnrealString(extraInfoReader, true);
      }
    }
    {
      const b = await this.sendPacket(2, false);
      const reader = this.reader(b);
      state.raw.scoreboard = {};
      while (!reader.done()) {
        const player = {};
        player.id = reader.uint(4);
        player.name = this.readUnrealString(reader, true);
        player.ping = reader.uint(4);
        player.score = reader.int(4);
        player.statsId = reader.uint(4);
        this.logger.debug(player);
        if (!player.id) {
          state.raw.scoreboard[player.name] = player.score;
        } else if (!player.ping) {
          state.bots.push(player);
        } else {
          state.players.push(player);
        }
      }
    }
  }
  readUnrealString(reader, stripColor) {
    let length = reader.uint(1);
    let ucs2 = false;
    if (length >= 128) {
      length = (length & 127) * 2;
      ucs2 = true;
      const peek = reader.uint(1);
      if (peek !== 1)
        reader.skip(-1);
      this.logger.debug((log) => {
        log("UCS2 STRING");
        log("UCS2 Length: " + length);
        log(reader.buffer.slice(reader.i, reader.i + length));
      });
    }
    let out = "";
    if (ucs2) {
      out = reader.string({ encoding: "ucs2", length });
      this.logger.debug("UCS2 String decoded: " + out);
    } else if (length > 0) {
      out = reader.string();
    }
    if (out.charCodeAt(out.length - 1) === 0) {
      out = out.substring(0, out.length - 1);
    }
    if (stripColor && this.options.stripColors) {
      out = out.replace(/\x1b...|[\x00-\x1a]/gus, "");
    }
    return out;
  }
  async sendPacket(type, required) {
    const outbuffer = Buffer.from([121, 0, 0, 0, type]);
    const packets = [];
    return await this.udpSend(outbuffer, (buffer) => {
      const reader = this.reader(buffer);
      reader.uint(4);
      const iType = reader.uint(1);
      if (iType !== type)
        return;
      packets.push(reader.rest());
    }, () => {
      if (!packets.length && required)
        return;
      return Buffer.concat(packets);
    });
  }
};

// protocols/ut3.js
var ut3 = class extends gamespy3 {
  async run(state) {
    await super.run(state);
    this.translate(state.raw, {
      mapname: false,
      p1073741825: "map",
      p1073741826: "gametype",
      p1073741827: "servername",
      p1073741828: "custom_mutators",
      gamemode: "joininprogress",
      s32779: "gamemode",
      s0: "bot_skill",
      s6: "pure_server",
      s7: "password",
      s8: "vs_bots",
      s10: "force_respawn",
      p268435704: "frag_limit",
      p268435705: "time_limit",
      p268435703: "numbots",
      p268435717: "stock_mutators",
      p1073741829: "stock_mutators",
      s1: false,
      s9: false,
      s11: false,
      s12: false,
      s13: false,
      s14: false,
      p268435706: false,
      p268435968: false,
      p268435969: false
    });
    const split = (a) => {
      let s = a.split("");
      s = s.filter((e) => {
        return e;
      });
      return s;
    };
    if ("custom_mutators" in state.raw)
      state.raw.custom_mutators = split(state.raw.custom_mutators);
    if ("stock_mutators" in state.raw)
      state.raw.stock_mutators = split(state.raw.stock_mutators);
    if ("map" in state.raw)
      state.map = state.raw.map;
  }
};

// protocols/vcmp.js
var vcmp = class extends samp {
  constructor() {
    super();
    this.magicHeader = "VCMP";
    this.responseMagicHeader = "MP04";
    this.isVcmp = true;
  }
};

// protocols/ventrilo.js
var ventrilo = class extends Core {
  constructor() {
    super();
    this.byteorder = "be";
  }
  async run(state) {
    const data = await this.sendCommand(2, "");
    state.raw = splitFields(data.toString());
    for (const client of state.raw.CLIENTS) {
      client.name = client.NAME;
      delete client.NAME;
      client.ping = parseInt(client.PING);
      delete client.PING;
      state.players.push(client);
    }
    delete state.raw.CLIENTS;
    state.numplayers = state.players.length;
    if ("NAME" in state.raw)
      state.name = state.raw.NAME;
    if ("MAXCLIENTS" in state.raw)
      state.maxplayers = state.raw.MAXCLIENTS;
    if ("VERSION" in state.raw)
      state.version = state.raw.VERSION;
    if (this.trueTest(state.raw.AUTH))
      state.password = true;
  }
  async sendCommand(cmd, password) {
    const body = Buffer.alloc(16);
    body.write(password, 0, 15, "utf8");
    const encrypted = encrypt(cmd, body);
    const packets = {};
    return await this.udpSend(encrypted, (buffer) => {
      if (buffer.length < 20)
        return;
      const data = decrypt(buffer);
      if (data.zero !== 0)
        return;
      packets[data.packetNum] = data.body;
      if (Object.keys(packets).length !== data.packetTotal)
        return;
      const out = [];
      for (let i = 0; i < data.packetTotal; i++) {
        if (!(i in packets))
          throw new Error("Missing packet #" + i);
        out.push(packets[i]);
      }
      return Buffer.concat(out);
    });
  }
};
function splitFields(str, subMode) {
  let splitter, delim;
  if (subMode) {
    splitter = "=";
    delim = ",";
  } else {
    splitter = ": ";
    delim = "\n";
  }
  const split = str.split(delim);
  const out = {};
  if (!subMode) {
    out.CHANNELS = [];
    out.CLIENTS = [];
  }
  for (const one of split) {
    const equal = one.indexOf(splitter);
    const key = equal === -1 ? one : one.substring(0, equal);
    if (!key || key === "\0")
      continue;
    const value = equal === -1 ? "" : one.substring(equal + splitter.length);
    if (!subMode && key === "CHANNEL")
      out.CHANNELS.push(splitFields(value, true));
    else if (!subMode && key === "CLIENT")
      out.CLIENTS.push(splitFields(value, true));
    else
      out[key] = value;
  }
  return out;
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function crc(body) {
  let crc2 = 0;
  for (let i = 0; i < body.length; i++) {
    crc2 = crcTable[crc2 >> 8] ^ body.readUInt8(i) ^ crc2 << 8;
    crc2 &= 65535;
  }
  return crc2;
}
function encrypt(cmd, body) {
  const headerKeyStart = randInt(0, 255);
  const headerKeyAdd = randInt(1, 255);
  const bodyKeyStart = randInt(0, 255);
  const bodyKeyAdd = randInt(1, 255);
  const header = Buffer.alloc(20);
  header.writeUInt8(headerKeyStart, 0);
  header.writeUInt8(headerKeyAdd, 1);
  header.writeUInt16BE(cmd, 4);
  header.writeUInt16BE(body.length, 8);
  header.writeUInt16BE(body.length, 10);
  header.writeUInt16BE(1, 12);
  header.writeUInt16BE(0, 14);
  header.writeUInt8(bodyKeyStart, 16);
  header.writeUInt8(bodyKeyAdd, 17);
  header.writeUInt16BE(crc(body), 18);
  let offset = headerKeyStart;
  for (let i = 2; i < header.length; i++) {
    let val = header.readUInt8(i);
    val += codeHead.charCodeAt(offset) + (i - 2) % 5;
    val = val & 255;
    header.writeUInt8(val, i);
    offset = offset + headerKeyAdd & 255;
  }
  offset = bodyKeyStart;
  for (let i = 0; i < body.length; i++) {
    let val = body.readUInt8(i);
    val += codeBody.charCodeAt(offset) + i % 72;
    val = val & 255;
    body.writeUInt8(val, i);
    offset = offset + bodyKeyAdd & 255;
  }
  return Buffer.concat([header, body]);
}
function decrypt(data) {
  const header = data.slice(0, 20);
  const body = data.slice(20);
  const headerKeyStart = header.readUInt8(0);
  const headerKeyAdd = header.readUInt8(1);
  let offset = headerKeyStart;
  for (let i = 2; i < header.length; i++) {
    let val = header.readUInt8(i);
    val -= codeHead.charCodeAt(offset) + (i - 2) % 5;
    val = val & 255;
    header.writeUInt8(val, i);
    offset = offset + headerKeyAdd & 255;
  }
  const bodyKeyStart = header.readUInt8(16);
  const bodyKeyAdd = header.readUInt8(17);
  offset = bodyKeyStart;
  for (let i = 0; i < body.length; i++) {
    let val = body.readUInt8(i);
    val -= codeBody.charCodeAt(offset) + i % 72;
    val = val & 255;
    body.writeUInt8(val, i);
    offset = offset + bodyKeyAdd & 255;
  }
  return {
    zero: header.readUInt16BE(2),
    cmd: header.readUInt16BE(4),
    packetTotal: header.readUInt16BE(12),
    packetNum: header.readUInt16BE(14),
    body
  };
}
var codeHead = "\x80\xE58\xBAcL\x99\x88cL\xD6T\xB8e~\xBF\x8A\xF0\x8A\xAAM\xB7#'\xF6\xEB\xF8\xEA\xB7\xCFRW\xCBQ\xCF\x1B\xFDo\x848\xB5$\xCFzuz\xBBxt\xDC\xBCB\xF0?^\xEBtwN\x8C\xAF#\xDCe\xDF\xA5e\xDD}\xF4<L\x95\xBD\xEBe\xF4$]\x82\xFBP\x86\xB8S\xE0N6\x96\xB7\xCB\xAA\xAF\xEA\xCB '0*\xAE\xB9\x07@\xDFu\xC9	\x82\x9C0\x80]\x8F\r	\xA1d\xEC\x91\xD8\x8AP@]\xF7\b*\xF8`b\xA0J\x8B\xBAJm\0\n\x932\xE5\x07e\xF5\xFF\xE0\xAE\xA7\x81\xD1\xBA%ba\xB2\x85\xAD~\x9D?I\x89&\xE5\xD5\xAC\x9F\xD7nG\x94\x84\xC8\xFFD\xEA@\xE03\xA3[\x82\xFFzi\xE9/\xFB\xEA\x9A\xC6{\xDB\xB1\xFF\x97vV\xF3R\xC2?\xB6\xACw\xC4\xBFY^\x80t\xBB\xF2\xDEWbL\xFF\x95m\xC7\xA2;\xC4\x1Br\xC7l\x82`\xD1\r";
var codeBody = '\x82\x8B\x7Fh\x90\xE0D	;\x8E_\xC2\x828#m\xDBbIRn!\xDFQlv7\x86P}He\xE7Rj\x88\xAA\xC12/\xF7TL\xAAm~m\xA9\x8C\r?\xFFl	\xB3\xA5\xAF\xDF\x98\xB4\xBEmi\rBs\xE44P\x070yA/\b?Bs\xA7h\xFA\xEE\x88n\xA4pt"\xAE<\x81\xA1\xDA\x7F\xD3|H}?F\xFBm\x92%6&\xDB\xDFZ\x87\x91o\xD6\xCD\xD4\xADJ)\xDD}Y\xBD4S\xB1\xD8P\x83yf!\x9E\x87[$/O\xD7s4\xA2\xF7	\xD5\xD9B\x9D\xF8\xDF\xCC5\x81\xB2\xD5z\xD2\xA0\xA5{\xB8u\xD25\v9\x8F\x1BD\xCEf\x87\x1Bd\xAC\xE1\xCAg\xB4\xCE3\xDB\x89\xFE\xD8\x8E\xCDX\x92AP@\xCB\b\xE1\xEE\xF4d\xFE\xEE%\xE7!\xE6l\xC6\xA6.R#\xA7 \xD2\xD7(\x07#$=E\xA5\xC7\x90\xDBw\xDD\xEA8Y\x892\xBC\0:maN\xDB)';
var crcTable = [
  0,
  4129,
  8258,
  12387,
  16516,
  20645,
  24774,
  28903,
  33032,
  37161,
  41290,
  45419,
  49548,
  53677,
  57806,
  61935,
  4657,
  528,
  12915,
  8786,
  21173,
  17044,
  29431,
  25302,
  37689,
  33560,
  45947,
  41818,
  54205,
  50076,
  62463,
  58334,
  9314,
  13379,
  1056,
  5121,
  25830,
  29895,
  17572,
  21637,
  42346,
  46411,
  34088,
  38153,
  58862,
  62927,
  50604,
  54669,
  13907,
  9842,
  5649,
  1584,
  30423,
  26358,
  22165,
  18100,
  46939,
  42874,
  38681,
  34616,
  63455,
  59390,
  55197,
  51132,
  18628,
  22757,
  26758,
  30887,
  2112,
  6241,
  10242,
  14371,
  51660,
  55789,
  59790,
  63919,
  35144,
  39273,
  43274,
  47403,
  23285,
  19156,
  31415,
  27286,
  6769,
  2640,
  14899,
  10770,
  56317,
  52188,
  64447,
  60318,
  39801,
  35672,
  47931,
  43802,
  27814,
  31879,
  19684,
  23749,
  11298,
  15363,
  3168,
  7233,
  60846,
  64911,
  52716,
  56781,
  44330,
  48395,
  36200,
  40265,
  32407,
  28342,
  24277,
  20212,
  15891,
  11826,
  7761,
  3696,
  65439,
  61374,
  57309,
  53244,
  48923,
  44858,
  40793,
  36728,
  37256,
  33193,
  45514,
  41451,
  53516,
  49453,
  61774,
  57711,
  4224,
  161,
  12482,
  8419,
  20484,
  16421,
  28742,
  24679,
  33721,
  37784,
  41979,
  46042,
  49981,
  54044,
  58239,
  62302,
  689,
  4752,
  8947,
  13010,
  16949,
  21012,
  25207,
  29270,
  46570,
  42443,
  38312,
  34185,
  62830,
  58703,
  54572,
  50445,
  13538,
  9411,
  5280,
  1153,
  29798,
  25671,
  21540,
  17413,
  42971,
  47098,
  34713,
  38840,
  59231,
  63358,
  50973,
  55100,
  9939,
  14066,
  1681,
  5808,
  26199,
  30326,
  17941,
  22068,
  55628,
  51565,
  63758,
  59695,
  39368,
  35305,
  47498,
  43435,
  22596,
  18533,
  30726,
  26663,
  6336,
  2273,
  14466,
  10403,
  52093,
  56156,
  60223,
  64286,
  35833,
  39896,
  43963,
  48026,
  19061,
  23124,
  27191,
  31254,
  2801,
  6864,
  10931,
  14994,
  64814,
  60687,
  56684,
  52557,
  48554,
  44427,
  40424,
  36297,
  31782,
  27655,
  23652,
  19525,
  15522,
  11395,
  7392,
  3265,
  61215,
  65342,
  53085,
  57212,
  44955,
  49082,
  36825,
  40952,
  28183,
  32310,
  20053,
  24180,
  11923,
  16050,
  3793,
  7920
];

// protocols/warsow.js
var warsow = class extends quake3 {
  async run(state) {
    await super.run(state);
    if (state.players) {
      for (const player of state.players) {
        player.team = player.address;
        delete player.address;
      }
    }
  }
};

// protocols/beammpmaster.js
var beammpmaster = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    state.raw.servers = await this.request({
      url: "https://backend.beammp.com/servers-info",
      responseType: "json"
    });
  }
};

// protocols/beammp.js
var beammp = class extends Core {
  async run(state) {
    const master = new beammpmaster();
    master.options = this.options;
    const masterState = await master.runOnceSafe();
    const servers = masterState.raw.servers;
    const server = servers.find((s) => s.ip === this.options.address);
    if (!server) {
      throw new Error("Server not found in the master list");
    }
    state.name = server.sname.replace(/\^./g, "");
    state.map = server.map;
    state.password = server.password;
    state.numplayers = parseInt(server.players);
    state.maxplayers = parseInt(server.maxplayers);
    const players = server.playerslist.split(";");
    if (players[players.length - 1] === "") {
      players.pop();
    }
    players.forEach((player) => {
      state.players.push({ name: player });
    });
    state.raw = server;
    if ("version" in state.raw)
      state.version = state.raw.version;
  }
};

// protocols/dayz.js
var import_node_buffer6 = require("node:buffer");
var dayz = class extends valve {
  async run(state) {
    if (!this.options.port)
      this.options.port = 27016;
    await super.queryInfo(state);
    await super.queryChallenge();
    await super.queryPlayers(state);
    await this.queryRules(state);
    this.processQueryInfo(state);
    await super.cleanup(state);
  }
  async queryRules(state) {
    if (!this.options.requestRules) {
      return;
    }
    const rules = {};
    state.raw.rules = rules;
    const dayZPayload = [];
    this.logger.debug("Requesting rules ...");
    const b = await this.sendPacket(86, null, 69, true);
    if (b === null && !this.options.requestRulesRequired)
      return;
    let dayZPayloadEnded = false;
    const reader = this.reader(b);
    const num = reader.uint(2);
    for (let i = 0; i < num; i++) {
      if (!dayZPayloadEnded) {
        const one = reader.uint(1);
        const two = reader.uint(1);
        const three = reader.uint(1);
        if (one !== 0 && two !== 0 && three === 0) {
          while (true) {
            const byte = reader.uint(1);
            if (byte === 0)
              break;
            dayZPayload.push(byte);
          }
          continue;
        } else {
          reader.skip(-3);
          dayZPayloadEnded = true;
        }
      }
      const key = reader.string();
      rules[key] = reader.string();
    }
    state.raw.dayzMods = this.readDayzMods(import_node_buffer6.Buffer.from(dayZPayload));
  }
  processQueryInfo(state) {
    if (!state.raw.tags) {
      return;
    }
    state.raw.dlcEnabled = false;
    state.raw.firstPerson = false;
    state.raw.privateHive = false;
    state.raw.external = false;
    state.raw.official = false;
    for (const tag of state.raw.tags) {
      if (tag.startsWith("lqs")) {
        const value = parseInt(tag.replace("lqs", ""));
        if (!isNaN(value)) {
          state.raw.queue = value;
        }
      }
      if (tag.includes("no3rd")) {
        state.raw.firstPerson = true;
      }
      if (tag.includes("isDLC")) {
        state.raw.dlcEnabled = true;
      }
      if (tag.includes("privHive")) {
        state.raw.privateHive = true;
      }
      if (tag.includes("external")) {
        state.raw.external = true;
      }
      if (tag.includes(":")) {
        state.raw.time = tag;
      }
      if (tag.startsWith("etm")) {
        const value = parseInt(tag.replace("etm", ""));
        if (!isNaN(value)) {
          state.raw.dayAcceleration = value;
        }
      }
      if (tag.startsWith("entm")) {
        const value = parseInt(tag.replace("entm", ""));
        if (!isNaN(value)) {
          state.raw.nightAcceleration = value;
        }
      }
    }
    if (!state.raw.external && !state.raw.privateHive) {
      state.raw.official = true;
    }
  }
  readDayzMods(buffer) {
    if (!buffer.length) {
      return {};
    }
    this.logger.debug("DAYZ BUFFER");
    this.logger.debug(buffer);
    const reader = this.reader(buffer);
    const version = this.readDayzByte(reader);
    const overflow = this.readDayzByte(reader);
    const dlc1 = this.readDayzByte(reader);
    const dlc2 = this.readDayzByte(reader);
    this.logger.debug("version " + version);
    this.logger.debug("overflow " + overflow);
    this.logger.debug("dlc1 " + dlc1);
    this.logger.debug("dlc2 " + dlc2);
    if (dlc1) {
      const unknown = this.readDayzUint(reader, 4);
      this.logger.debug("unknown " + unknown);
    }
    if (dlc2) {
      const unknown = this.readDayzUint(reader, 4);
      this.logger.debug("unknown " + unknown);
    }
    const mods = [];
    mods.push(...this.readDayzModsSection(reader, true));
    mods.push(...this.readDayzModsSection(reader, false));
    this.logger.debug("dayz buffer rest:", reader.rest());
    return mods;
  }
  readDayzModsSection(reader, withHeader) {
    const out = [];
    const count = this.readDayzByte(reader);
    this.logger.debug("dayz mod section withHeader:" + withHeader + " count:" + count);
    for (let i = 0; i < count; i++) {
      if (reader.done())
        break;
      const mod = {};
      if (withHeader) {
        mod.unknown = this.readDayzUint(reader, 4);
        const offset = reader.offset();
        const flag = this.readDayzByte(reader);
        if (flag !== 4)
          reader.setOffset(offset);
        mod.workshopId = this.readDayzUint(reader, 4);
      }
      mod.title = this.readDayzString(reader);
      this.logger.debug(mod);
      out.push(mod);
    }
    return out;
  }
  readDayzUint(reader, bytes) {
    const out = [];
    for (let i = 0; i < bytes; i++) {
      out.push(this.readDayzByte(reader));
    }
    const buf = import_node_buffer6.Buffer.from(out);
    const r2 = this.reader(buf);
    return r2.uint(bytes);
  }
  readDayzByte(reader) {
    const byte = reader.uint(1);
    if (byte === 1) {
      const byte2 = reader.uint(1);
      if (byte2 === 1)
        return 1;
      if (byte2 === 2)
        return 0;
      if (byte2 === 3)
        return 255;
      return 0;
    }
    return byte;
  }
  readDayzString(reader) {
    const length = this.readDayzByte(reader);
    const out = [];
    for (let i = 0; i < length; i++) {
      out.push(this.readDayzByte(reader));
    }
    return import_node_buffer6.Buffer.from(out).toString("utf8");
  }
};

// protocols/theisleevrima.js
var theisleevrima = class extends Epic {
  constructor() {
    super();
    this.clientId = "xyza7891gk5PRo3J7G9puCJGFJjmEguW";
    this.clientSecret = "pKWl6t5i9NJK8gTpVlAxzENZ65P8hYzodV8Dqe5Rlc8";
    this.deploymentId = "6db6bea492f94b1bbdfcdfe3e4f898dc";
  }
  async run(state) {
    await super.run(state);
    state.name = state.raw.attributes.SERVERNAME_s;
    state.map = state.raw.attributes.MAP_NAME_s;
    state.version = state.raw.attributes.SERVER_VERSION_s;
  }
};

// protocols/ragemp.js
var ragemp = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    const results = await this.request({
      url: "https://cdn.rage.mp/master/v2/",
      responseType: "json"
    });
    if (results == null) {
      throw new Error("Unable to retrieve master server list");
    }
    const targetID = `${this.options.host}:${this.options.port}`;
    let serverResult = null;
    let serverInfo = null;
    for (const entry of results) {
      if (entry.id === targetID) {
        serverResult = entry;
        serverInfo = entry.servers.at(0);
        break;
      }
      for (const serverEntry of entry.servers) {
        if (serverEntry.id === targetID) {
          serverResult = entry;
          serverInfo = serverEntry;
          break;
        }
      }
    }
    if (serverInfo == null) {
      throw new Error("Server not found in master server list.");
    }
    state.name = serverInfo.name;
    state.numplayers = serverInfo.players.amount;
    state.maxplayers = serverInfo.players.max;
    state.raw = serverResult;
  }
};

// protocols/xonotic.js
var xonotic = class extends quake3 {
  async run(state) {
    await super.run(state);
    for (const player of state.players) {
      if (!isNaN(player.name) && player.raw.address) {
        player.raw.team = player.name;
        player.name = player.raw.address;
      }
    }
  }
};

// protocols/altvmp.js
var altvmp = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async getServerFromMasterList() {
    const targetID = `${this.options.host}:${this.options.port}`;
    const results = await this.request({
      url: "https://api.alt-mp.com/servers",
      responseType: "json"
    });
    if (results == null) {
      throw new Error("Unable to retrieve master server list");
    }
    const serverInfo = results.find((server) => {
      const address = server.useCdn ? server.address : server.address.replace(/(https?:\/\/)?\/?/g, "");
      return address === targetID;
    });
    return serverInfo;
  }
  async getServerById(targetID) {
    const serverInfo = await this.request({
      url: `https://api.alt-mp.com/servers/${targetID}`,
      responseType: "json"
    });
    if (serverInfo == null) {
      throw new Error("Unable to retrieve server info");
    }
    return serverInfo;
  }
  async run(state) {
    const serverInfo = this.options.serverId ? await this.getServerById(this.options.serverId) : await this.getServerFromMasterList();
    if (!serverInfo) {
      throw new Error("No server info was found.");
    }
    state.name = serverInfo.name;
    state.numplayers = serverInfo.playersCount;
    state.maxplayers = serverInfo.maxPlayersCount;
    state.password = serverInfo.passworded;
    state.version = serverInfo.version;
    state.connect = `altv://${serverInfo.address}`;
    state.raw = serverInfo;
  }
};

// protocols/vintagestorymaster.js
var vintagestorymaster = class extends Core {
  constructor() {
    super();
    this.usedTcp = true;
  }
  async run(state) {
    const response = await this.request({
      url: "https://masterserver.vintagestory.at/api/v1/servers/list",
      responseType: "json"
    });
    state.raw.servers = (response == null ? void 0 : response.data) || [];
  }
};

// protocols/vintagestory.js
var vintagestory = class extends Core {
  async run(state) {
    const master = new vintagestorymaster();
    master.options = this.options;
    const masterState = await master.runOnceSafe();
    const servers = masterState.raw.servers;
    const server = servers.find((s) => s.serverIP === `${this.options.address}:${this.options.port}`);
    if (!server) {
      throw new Error("Server not found in the master list");
    }
    state.name = server.serverName;
    state.password = server.hasPassword;
    state.numplayers = parseInt(server.players);
    state.maxplayers = parseInt(server.maxPlayers);
    state.version = server.gameVersion;
    state.raw = server;
  }
};

// lib/ProtocolResolver.js
var getProtocol = (protocolId) => {
  if (!(protocolId in protocols_exports)) {
    throw Error("Protocol definition file missing: " + protocolId);
  }
  return new protocols_exports[protocolId]();
};

// lib/GlobalUdpSocket.js
var import_node_dgram = require("node:dgram");
var import_node_util4 = require("node:util");
var GlobalUdpSocket = class {
  constructor({ port }) {
    this.socket = null;
    this.callbacks = /* @__PURE__ */ new Set();
    this.debuggingCallbacks = /* @__PURE__ */ new Set();
    this.logger = new Logger();
    this.port = port;
  }
  async _getSocket() {
    if (!this.socket) {
      const udpSocket = (0, import_node_dgram.createSocket)({
        type: "udp4",
        reuseAddr: true
      });
      udpSocket.unref();
      udpSocket.on("message", (buffer, rinfo) => {
        const fromAddress = rinfo.address;
        const fromPort = rinfo.port;
        this.logger.debug((log) => {
          log(fromAddress + ":" + fromPort + " <--UDP(" + this.port + ")");
          log(debugDump(buffer));
        });
        for (const callback of this.callbacks) {
          callback(fromAddress, fromPort, buffer);
        }
      });
      udpSocket.on("error", (e) => {
        this.logger.debug("UDP ERROR:", e);
      });
      await (0, import_node_util4.promisify)(udpSocket.bind).bind(udpSocket)(this.port);
      this.port = udpSocket.address().port;
      this.socket = udpSocket;
    }
    return this.socket;
  }
  async send(buffer, address, port, debug) {
    const socket = await this._getSocket();
    if (debug) {
      this.logger._print((log) => {
        log(address + ":" + port + " UDP(" + this.port + ")-->");
        log(debugDump(buffer));
      });
    }
    await (0, import_node_util4.promisify)(socket.send).bind(socket)(buffer, 0, buffer.length, port, address);
  }
  addCallback(callback, debug) {
    this.callbacks.add(callback);
    if (debug) {
      this.debuggingCallbacks.add(callback);
      this.logger.debugEnabled = true;
    }
  }
  removeCallback(callback) {
    this.callbacks.delete(callback);
    this.debuggingCallbacks.delete(callback);
    this.logger.debugEnabled = this.debuggingCallbacks.size > 0;
  }
};

// lib/QueryRunner.js
var defaultOptions2 = {
  socketTimeout: 2e3,
  attemptTimeout: 1e4,
  maxRetries: 1,
  stripColors: true,
  portCache: true,
  noBreadthOrder: false,
  ipFamily: 0,
  requestPlayers: true
};
var QueryRunner = class {
  constructor(runnerOpts = {}) {
    this.udpSocket = new GlobalUdpSocket({
      port: runnerOpts.listenUdpPort
    });
    this.portCache = {};
  }
  async run(userOptions) {
    for (const key of Object.keys(userOptions)) {
      const value = userOptions[key];
      if (["port", "ipFamily"].includes(key)) {
        userOptions[key] = parseInt(value);
      }
    }
    const {
      port_query: gameQueryPort,
      port_query_offset: gameQueryPortOffset,
      ...gameOptions
    } = lookup(userOptions);
    const attempts = [];
    const optionsCollection = {
      ...defaultOptions2,
      ...gameOptions,
      ...userOptions
    };
    const addAttemptWithPort = (port) => {
      attempts.push({
        ...optionsCollection,
        port
      });
    };
    let portOffsetArray = gameQueryPortOffset;
    if (!Array.isArray(portOffsetArray)) {
      gameQueryPortOffset ? portOffsetArray = [gameQueryPortOffset] : portOffsetArray = [0];
    }
    const cachedPort = this.portCache[`${userOptions.address}:${userOptions.port}`];
    if (cachedPort && optionsCollection.portCache) {
      addAttemptWithPort(cachedPort);
    }
    if (userOptions.port) {
      if (!userOptions.givenPortOnly) {
        portOffsetArray.forEach((portOffset) => {
          addAttemptWithPort(userOptions.port + portOffset);
        });
        if (userOptions.port === gameOptions.port && gameQueryPort) {
          addAttemptWithPort(gameQueryPort);
        }
      }
      attempts.push(optionsCollection);
    } else if (gameQueryPort) {
      addAttemptWithPort(gameQueryPort);
    } else if (gameOptions.port) {
      portOffsetArray.forEach((portOffset) => {
        addAttemptWithPort(gameOptions.port + portOffset);
      });
    } else {
      attempts.push(optionsCollection);
    }
    const numRetries = userOptions.maxRetries || gameOptions.maxRetries || defaultOptions2.maxRetries;
    const retries = Array.from({ length: numRetries }, (x, i) => i);
    const attemptOrder = [];
    if (optionsCollection.noBreadthOrder) {
      attempts.forEach((attempt) => retries.forEach((retry) => attemptOrder.push({ attempt, retry })));
    } else {
      retries.forEach((retry) => attempts.forEach((attempt) => attemptOrder.push({ attempt, retry })));
    }
    let attemptNum = 0;
    const errors = [];
    for (const { attempt, retry } of attemptOrder) {
      attemptNum++;
      try {
        const response = await this._attempt(attempt);
        if (attempt.portCache) {
          this.portCache[`${userOptions.address}:${userOptions.port}`] = attempt.port;
        }
        return response;
      } catch (e) {
        e.stack = "Attempt #" + attemptNum + " - Port=" + attempt.port + " Retry=" + retry + ":\n" + e.stack;
        errors.push(e);
      }
    }
    const err = new Error("Failed all " + errors.length + " attempts");
    for (const e of errors) {
      err.stack += "\n" + e.stack;
    }
    throw err;
  }
  async _attempt(options) {
    const core = getProtocol(options.protocol);
    core.options = options;
    core.udpSocket = this.udpSocket;
    return await core.runOnceSafe();
  }
};

// lib/gamedig.js
var singleton = null;
var GameDig = class _GameDig {
  constructor(runnerOpts) {
    this.queryRunner = new QueryRunner(runnerOpts);
  }
  async query(userOptions) {
    return await this.queryRunner.run(userOptions);
  }
  static getInstance() {
    if (!singleton) {
      singleton = new _GameDig();
    }
    return singleton;
  }
  static async query(...args) {
    return await _GameDig.getInstance().query(...args);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GameDig,
  games,
  protocols
});
