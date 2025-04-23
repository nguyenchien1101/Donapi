import { beforeEach as y, afterEach as A, expect as k } from "vitest";
import * as D from "util";
import c from "chalk";
var a = /* @__PURE__ */ ((t) => (t.Assert = "assert", t.Debug = "debug", t.Error = "error", t.Info = "info", t.Log = "log", t.Warn = "warn", t))(a || {});
const i = `
`, w = (t) => `vitest-fail-on-console > Expected test not to call ${c.bold(
  `console.${t}()`
)}.
    If the ${t} is expected, test for it explicitly by mocking it out using: 
    ${c.bold(
  `vi.spyOn(console, '${t}').mockImplementation(() => {}) `
)}
    and test that the warning occurs.`, S = ({
  errorMessage: t = w,
  shouldFailOnAssert: b = !1,
  shouldFailOnDebug: v = !1,
  shouldFailOnError: O = !0,
  shouldFailOnInfo: x = !1,
  shouldFailOnLog: m = !1,
  shouldFailOnWarn: F = !0,
  skipTest: g = void 0,
  silenceMessage: $ = void 0,
  afterEachDelay: E = void 0
} = {
  errorMessage: w,
  shouldFailOnAssert: !1,
  shouldFailOnDebug: !1,
  shouldFailOnError: !0,
  shouldFailOnInfo: !1,
  shouldFailOnLog: !1,
  shouldFailOnWarn: !0,
  silenceMessage: void 0,
  skipTest: void 0,
  afterEachDelay: void 0
}) => {
  const I = (s, r) => {
    if (r.length) {
      const l = r.map(
        ([p, f]) => {
          const e = p.split(i);
          return `${c.red(f)}${i}${e.map((n, o) => o === e.length - 1 ? c.white(n) : c.gray(n)).join(i)}`;
        }
      ), d = t(s), u = `${i}${i}`;
      throw new Error(
        `${d}${u}${l.join(
          u
        )}`
      );
    }
  }, L = (s) => {
    const r = [], l = (e, ...n) => {
      const o = D.format(e, ...n);
      if ($ && $(o, s))
        return;
      const { stack: h } = new Error();
      h && r.push([
        h.slice(h.indexOf(i) + 1),
        o
      ]);
    }, d = (e, n, ...o) => {
      e || l(n, ...o);
    }, u = s === a.Assert ? d : l, p = console[s], f = () => {
      const e = k.getState(), n = e.currentTestName, o = e.testPath;
      return !!(g != null && g({ testName: n, testPath: o }));
    };
    y(() => {
      f() || (console[s] = u, r.length = 0);
    }), A(async () => {
      f() || (E && await new Promise((e) => setTimeout(e, E)), I(
        s,
        r
      ), console[s] = p);
    });
  };
  [
    [b, a.Assert],
    [v, a.Debug],
    [O, a.Error],
    [x, a.Info],
    [m, a.Log],
    [F, a.Warn]
  ].forEach(([s, r]) => {
    s && L(r);
  });
};
export {
  S as default
};
//# sourceMappingURL=vitest-fail-on-console.es.js.map
