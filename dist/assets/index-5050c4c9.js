(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function as(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ne = {},
  Pt = [],
  $e = () => {},
  Wo = () => !1,
  zo = /^on[^a-z]/,
  xn = (e) => zo.test(e),
  fs = (e) => e.startsWith("onUpdate:"),
  fe = Object.assign,
  ds = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  qo = Object.prototype.hasOwnProperty,
  z = (e, t) => qo.call(e, t),
  H = Array.isArray,
  wt = (e) => Pn(e) === "[object Map]",
  Ar = (e) => Pn(e) === "[object Set]",
  L = (e) => typeof e == "function",
  ue = (e) => typeof e == "string",
  En = (e) => typeof e == "symbol",
  se = (e) => e !== null && typeof e == "object",
  Fr = (e) => (se(e) || L(e)) && L(e.then) && L(e.catch),
  Tr = Object.prototype.toString,
  Pn = (e) => Tr.call(e),
  Vo = (e) => Pn(e).slice(8, -1),
  Mr = (e) => Pn(e) === "[object Object]",
  hs = (e) =>
    ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  fn = as(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  wn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Qo = /-(\w)/g,
  Ue = wn((e) => e.replace(Qo, (t, n) => (n ? n.toUpperCase() : ""))),
  Yo = /\B([A-Z])/g,
  It = wn((e) => e.replace(Yo, "-$1").toLowerCase()),
  Cn = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Nn = wn((e) => (e ? `on${Cn(e)}` : "")),
  ht = (e, t) => !Object.is(e, t),
  Hn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  gn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Jo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let js;
const Vn = () =>
  js ||
  (js =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ve(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ue(s) ? ei(s) : Ve(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (ue(e) || se(e)) return e;
}
const Xo = /;(?![^(]*\))/g,
  Zo = /:([^]+)/,
  Go = /\/\*[^]*?\*\//g;
function ei(e) {
  const t = {};
  return (
    e
      .replace(Go, "")
      .split(Xo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Zo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function ps(e) {
  let t = "";
  if (ue(e)) t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = ps(e[n]);
      s && (t += s + " ");
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ti =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ni = as(ti);
function Ir(e) {
  return !!e || e === "";
}
const be = (e) =>
    ue(e)
      ? e
      : e == null
      ? ""
      : H(e) || (se(e) && (e.toString === Tr || !L(e.toString)))
      ? JSON.stringify(e, $r, 2)
      : String(e),
  $r = (e, t) =>
    t && t.__v_isRef
      ? $r(e, t.value)
      : wt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Ar(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : se(t) && !H(t) && !Mr(t)
      ? String(t)
      : t;
let Re;
class jr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Re),
      !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Re;
      try {
        return (Re = this), t();
      } finally {
        Re = n;
      }
    }
  }
  on() {
    Re = this;
  }
  off() {
    Re = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Nr(e) {
  return new jr(e);
}
function si(e, t = Re) {
  t && t.active && t.effects.push(e);
}
function Hr() {
  return Re;
}
function ri(e) {
  Re && Re.cleanups.push(e);
}
const gs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Br = (e) => (e.w & ot) > 0,
  kr = (e) => (e.n & ot) > 0,
  oi = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ot;
  },
  ii = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Br(r) && !kr(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~ot),
          (r.n &= ~ot);
      }
      t.length = n;
    }
  },
  mn = new WeakMap();
let Lt = 0,
  ot = 1;
const Qn = 30;
let Me;
const ft = Symbol(""),
  Yn = Symbol("");
class ms {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      si(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Me,
      n = nt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Me),
        (Me = this),
        (nt = !0),
        (ot = 1 << ++Lt),
        Lt <= Qn ? oi(this) : Ns(this),
        this.fn()
      );
    } finally {
      Lt <= Qn && ii(this),
        (ot = 1 << --Lt),
        (Me = this.parent),
        (nt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Me === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ns(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ns(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let nt = !0;
const Lr = [];
function $t() {
  Lr.push(nt), (nt = !1);
}
function jt() {
  const e = Lr.pop();
  nt = e === void 0 ? !0 : e;
}
function Pe(e, t, n) {
  if (nt && Me) {
    let s = mn.get(e);
    s || mn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = gs())), Dr(r);
  }
}
function Dr(e, t) {
  let n = !1;
  Lt <= Qn ? kr(e) || ((e.n |= ot), (n = !Br(e))) : (n = !e.has(Me)),
    n && (e.add(Me), Me.deps.push(e));
}
function Qe(e, t, n, s, r, o) {
  const i = mn.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && H(e)) {
    const l = Number(s);
    i.forEach((d, a) => {
      (a === "length" || (!En(a) && a >= l)) && c.push(d);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        H(e)
          ? hs(n) && c.push(i.get("length"))
          : (c.push(i.get(ft)), wt(e) && c.push(i.get(Yn)));
        break;
      case "delete":
        H(e) || (c.push(i.get(ft)), wt(e) && c.push(i.get(Yn)));
        break;
      case "set":
        wt(e) && c.push(i.get(ft));
        break;
    }
  if (c.length === 1) c[0] && Jn(c[0]);
  else {
    const l = [];
    for (const d of c) d && l.push(...d);
    Jn(gs(l));
  }
}
function Jn(e, t) {
  const n = H(e) ? e : [...e];
  for (const s of n) s.computed && Hs(s);
  for (const s of n) s.computed || Hs(s);
}
function Hs(e, t) {
  (e !== Me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function li(e, t) {
  var n;
  return (n = mn.get(e)) == null ? void 0 : n.get(t);
}
const ci = as("__proto__,__v_isRef,__isVue"),
  Kr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(En)
  ),
  Bs = ui();
function ui() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = q(this);
        for (let o = 0, i = this.length; o < i; o++) Pe(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(q)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        $t();
        const s = q(this)[t].apply(this, n);
        return jt(), s;
      };
    }),
    e
  );
}
function ai(e) {
  const t = q(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class Ur {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._shallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw" && s === (r ? (o ? Pi : Vr) : o ? qr : zr).get(t))
      return t;
    const i = H(t);
    if (!r) {
      if (i && z(Bs, n)) return Reflect.get(Bs, n, s);
      if (n === "hasOwnProperty") return ai;
    }
    const c = Reflect.get(t, n, s);
    return (En(n) ? Kr.has(n) : ci(n)) || (r || Pe(t, "get", n), o)
      ? c
      : ie(c)
      ? i && hs(n)
        ? c
        : c.value
      : se(c)
      ? r
        ? Yr(c)
        : sn(c)
      : c;
  }
}
class Wr extends Ur {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (Ot(o) && ie(o) && !ie(s)) return !1;
    if (
      !this._shallow &&
      (!_n(s) && !Ot(s) && ((o = q(o)), (s = q(s))), !H(t) && ie(o) && !ie(s))
    )
      return (o.value = s), !0;
    const i = H(t) && hs(n) ? Number(n) < t.length : z(t, n),
      c = Reflect.set(t, n, s, r);
    return (
      t === q(r) && (i ? ht(s, o) && Qe(t, "set", n, s) : Qe(t, "add", n, s)), c
    );
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Qe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!En(n) || !Kr.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(t, "iterate", H(t) ? "length" : ft), Reflect.ownKeys(t);
  }
}
class fi extends Ur {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const di = new Wr(),
  hi = new fi(),
  pi = new Wr(!0),
  _s = (e) => e,
  Rn = (e) => Reflect.getPrototypeOf(e);
function rn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = q(e),
    o = q(t);
  n || (ht(t, o) && Pe(r, "get", t), Pe(r, "get", o));
  const { has: i } = Rn(r),
    c = s ? _s : n ? vs : Yt;
  if (i.call(r, t)) return c(e.get(t));
  if (i.call(r, o)) return c(e.get(o));
  e !== r && e.get(t);
}
function on(e, t = !1) {
  const n = this.__v_raw,
    s = q(n),
    r = q(e);
  return (
    t || (ht(e, r) && Pe(s, "has", e), Pe(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function ln(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pe(q(e), "iterate", ft), Reflect.get(e, "size", e)
  );
}
function ks(e) {
  e = q(e);
  const t = q(this);
  return Rn(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this;
}
function Ls(e, t) {
  t = q(t);
  const n = q(this),
    { has: s, get: r } = Rn(n);
  let o = s.call(n, e);
  o || ((e = q(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? ht(t, i) && Qe(n, "set", e, t) : Qe(n, "add", e, t), this
  );
}
function Ds(e) {
  const t = q(this),
    { has: n, get: s } = Rn(t);
  let r = n.call(t, e);
  r || ((e = q(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Qe(t, "delete", e, void 0), o;
}
function Ks() {
  const e = q(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Qe(e, "clear", void 0, void 0), n;
}
function cn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      c = q(i),
      l = t ? _s : e ? vs : Yt;
    return (
      !e && Pe(c, "iterate", ft), i.forEach((d, a) => s.call(r, l(d), l(a), o))
    );
  };
}
function un(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = q(r),
      i = wt(o),
      c = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      d = r[e](...s),
      a = n ? _s : t ? vs : Yt;
    return (
      !t && Pe(o, "iterate", l ? Yn : ft),
      {
        next() {
          const { value: p, done: g } = d.next();
          return g
            ? { value: p, done: g }
            : { value: c ? [a(p[0]), a(p[1])] : a(p), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Xe(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function gi() {
  const e = {
      get(o) {
        return rn(this, o);
      },
      get size() {
        return ln(this);
      },
      has: on,
      add: ks,
      set: Ls,
      delete: Ds,
      clear: Ks,
      forEach: cn(!1, !1),
    },
    t = {
      get(o) {
        return rn(this, o, !1, !0);
      },
      get size() {
        return ln(this);
      },
      has: on,
      add: ks,
      set: Ls,
      delete: Ds,
      clear: Ks,
      forEach: cn(!1, !0),
    },
    n = {
      get(o) {
        return rn(this, o, !0);
      },
      get size() {
        return ln(this, !0);
      },
      has(o) {
        return on.call(this, o, !0);
      },
      add: Xe("add"),
      set: Xe("set"),
      delete: Xe("delete"),
      clear: Xe("clear"),
      forEach: cn(!0, !1),
    },
    s = {
      get(o) {
        return rn(this, o, !0, !0);
      },
      get size() {
        return ln(this, !0);
      },
      has(o) {
        return on.call(this, o, !0);
      },
      add: Xe("add"),
      set: Xe("set"),
      delete: Xe("delete"),
      clear: Xe("clear"),
      forEach: cn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = un(o, !1, !1)),
        (n[o] = un(o, !0, !1)),
        (t[o] = un(o, !1, !0)),
        (s[o] = un(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [mi, _i, yi, bi] = gi();
function ys(e, t) {
  const n = t ? (e ? bi : yi) : e ? _i : mi;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(z(n, r) && r in s ? n : s, r, o);
}
const vi = { get: ys(!1, !1) },
  xi = { get: ys(!1, !0) },
  Ei = { get: ys(!0, !1) },
  zr = new WeakMap(),
  qr = new WeakMap(),
  Vr = new WeakMap(),
  Pi = new WeakMap();
function wi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ci(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wi(Vo(e));
}
function sn(e) {
  return Ot(e) ? e : bs(e, !1, di, vi, zr);
}
function Qr(e) {
  return bs(e, !1, pi, xi, qr);
}
function Yr(e) {
  return bs(e, !0, hi, Ei, Vr);
}
function bs(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = Ci(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function st(e) {
  return Ot(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
function _n(e) {
  return !!(e && e.__v_isShallow);
}
function Jr(e) {
  return st(e) || Ot(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Sn(e) {
  return gn(e, "__v_skip", !0), e;
}
const Yt = (e) => (se(e) ? sn(e) : e),
  vs = (e) => (se(e) ? Yr(e) : e);
function Xr(e) {
  nt && Me && ((e = q(e)), Dr(e.dep || (e.dep = gs())));
}
function Zr(e, t) {
  e = q(e);
  const n = e.dep;
  n && Jn(n);
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function xs(e) {
  return Gr(e, !1);
}
function Ri(e) {
  return Gr(e, !0);
}
function Gr(e, t) {
  return ie(e) ? e : new Si(e, t);
}
class Si {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : Yt(t));
  }
  get value() {
    return Xr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || _n(t) || Ot(t);
    (t = n ? t : q(t)),
      ht(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Yt(t)), Zr(this));
  }
}
function Ct(e) {
  return ie(e) ? e.value : e;
}
const Oi = {
  get: (e, t, n) => Ct(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ie(r) && !ie(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function eo(e) {
  return st(e) ? e : new Proxy(e, Oi);
}
function Ai(e) {
  const t = H(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Ti(e, n);
  return t;
}
class Fi {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return li(q(this._object), this._key);
  }
}
function Ti(e, t, n) {
  const s = e[t];
  return ie(s) ? s : new Fi(e, t, n);
}
class Mi {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ms(t, () => {
        this._dirty || ((this._dirty = !0), Zr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = q(this);
    return (
      Xr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Ii(e, t, n = !1) {
  let s, r;
  const o = L(e);
  return (
    o ? ((s = e), (r = $e)) : ((s = e.get), (r = e.set)),
    new Mi(s, r, o || !r, n)
  );
}
function rt(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    On(o, t, n);
  }
  return r;
}
function je(e, t, n, s) {
  if (L(e)) {
    const o = rt(e, t, n, s);
    return (
      o &&
        Fr(o) &&
        o.catch((i) => {
          On(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(je(e[o], t, n, s));
  return r;
}
function On(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = n;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let a = 0; a < d.length; a++) if (d[a](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      rt(l, null, 10, [e, i, c]);
      return;
    }
  }
  $i(e, n, r, s);
}
function $i(e, t, n, s = !0) {
  console.error(e);
}
let Jt = !1,
  Xn = !1;
const _e = [];
let De = 0;
const Rt = [];
let qe = null,
  ut = 0;
const to = Promise.resolve();
let Es = null;
function Ps(e) {
  const t = Es || to;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ji(e) {
  let t = De + 1,
    n = _e.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = _e[s],
      o = Xt(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ws(e) {
  (!_e.length || !_e.includes(e, Jt && e.allowRecurse ? De + 1 : De)) &&
    (e.id == null ? _e.push(e) : _e.splice(ji(e.id), 0, e), no());
}
function no() {
  !Jt && !Xn && ((Xn = !0), (Es = to.then(ro)));
}
function Ni(e) {
  const t = _e.indexOf(e);
  t > De && _e.splice(t, 1);
}
function Hi(e) {
  H(e)
    ? Rt.push(...e)
    : (!qe || !qe.includes(e, e.allowRecurse ? ut + 1 : ut)) && Rt.push(e),
    no();
}
function Us(e, t = Jt ? De + 1 : 0) {
  for (; t < _e.length; t++) {
    const n = _e[t];
    n && n.pre && (_e.splice(t, 1), t--, n());
  }
}
function so(e) {
  if (Rt.length) {
    const t = [...new Set(Rt)];
    if (((Rt.length = 0), qe)) {
      qe.push(...t);
      return;
    }
    for (qe = t, qe.sort((n, s) => Xt(n) - Xt(s)), ut = 0; ut < qe.length; ut++)
      qe[ut]();
    (qe = null), (ut = 0);
  }
}
const Xt = (e) => (e.id == null ? 1 / 0 : e.id),
  Bi = (e, t) => {
    const n = Xt(e) - Xt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ro(e) {
  (Xn = !1), (Jt = !0), _e.sort(Bi);
  const t = $e;
  try {
    for (De = 0; De < _e.length; De++) {
      const n = _e[De];
      n && n.active !== !1 && rt(n, null, 14);
    }
  } finally {
    (De = 0),
      (_e.length = 0),
      so(),
      (Jt = !1),
      (Es = null),
      (_e.length || Rt.length) && ro();
  }
}
function ki(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ne;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const a = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: g } = s[a] || ne;
    g && (r = n.map((b) => (ue(b) ? b.trim() : b))), p && (r = n.map(Jo));
  }
  let c,
    l = s[(c = Nn(t))] || s[(c = Nn(Ue(t)))];
  !l && o && (l = s[(c = Nn(It(t)))]), l && je(l, e, 6, r);
  const d = s[c + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), je(d, e, 6, r);
  }
}
function oo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!L(e)) {
    const l = (d) => {
      const a = oo(d, t, !0);
      a && ((c = !0), fe(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !c
    ? (se(e) && s.set(e, null), null)
    : (H(o) ? o.forEach((l) => (i[l] = null)) : fe(i, o),
      se(e) && s.set(e, i),
      i);
}
function An(e, t) {
  return !e || !xn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, It(t)) || z(e, t));
}
let Fe = null,
  io = null;
function yn(e) {
  const t = Fe;
  return (Fe = e), (io = (e && e.type.__scopeId) || null), t;
}
function Li(e, t = Fe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && er(-1);
    const o = yn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      yn(o), s._d && er(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Bn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: d,
    render: a,
    renderCache: p,
    data: g,
    setupState: b,
    ctx: S,
    inheritAttrs: A,
  } = e;
  let B, T;
  const j = yn(e);
  try {
    if (n.shapeFlag & 4) {
      const N = r || s;
      (B = Le(a.call(N, N, p, o, b, g, S))), (T = l);
    } else {
      const N = t;
      (B = Le(
        N.length > 1 ? N(o, { attrs: l, slots: c, emit: d }) : N(o, null)
      )),
        (T = t.props ? l : Di(l));
    }
  } catch (N) {
    (zt.length = 0), On(N, e, 1), (B = ve(Gt));
  }
  let U = B;
  if (T && A !== !1) {
    const N = Object.keys(T),
      { shapeFlag: G } = U;
    N.length && G & 7 && (i && N.some(fs) && (T = Ki(T, i)), (U = At(U, T)));
  }
  return (
    n.dirs && ((U = At(U)), (U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (U.transition = n.transition),
    (B = U),
    yn(j),
    B
  );
}
const Di = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ki = (e, t) => {
    const n = {};
    for (const s in e) (!fs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ui(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: l } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Ws(s, i, d) : !!i;
    if (l & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const g = a[p];
        if (i[g] !== s[g] && !An(d, g)) return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Ws(s, i, d)
        : !0
      : !!i;
  return !1;
}
function Ws(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !An(n, o)) return !0;
  }
  return !1;
}
function Wi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const zi = (e) => e.__isSuspense;
function qi(e, t) {
  t && t.pendingBranch
    ? H(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Hi(e);
}
const an = {};
function Ut(e, t, n) {
  return lo(e, t, n);
}
function lo(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = ne
) {
  var c;
  const l = Hr() === ((c = ae) == null ? void 0 : c.scope) ? ae : null;
  let d,
    a = !1,
    p = !1;
  if (
    (ie(e)
      ? ((d = () => e.value), (a = _n(e)))
      : st(e)
      ? ((d = () => e), (s = !0))
      : H(e)
      ? ((p = !0),
        (a = e.some((N) => st(N) || _n(N))),
        (d = () =>
          e.map((N) => {
            if (ie(N)) return N.value;
            if (st(N)) return vt(N);
            if (L(N)) return rt(N, l, 2);
          })))
      : L(e)
      ? t
        ? (d = () => rt(e, l, 2))
        : (d = () => {
            if (!(l && l.isUnmounted)) return g && g(), je(e, l, 3, [b]);
          })
      : (d = $e),
    t && s)
  ) {
    const N = d;
    d = () => vt(N());
  }
  let g,
    b = (N) => {
      g = j.onStop = () => {
        rt(N, l, 4);
      };
    },
    S;
  if (tn)
    if (
      ((b = $e),
      t ? n && je(t, l, 3, [d(), p ? [] : void 0, b]) : d(),
      r === "sync")
    ) {
      const N = Kl();
      S = N.__watcherHandles || (N.__watcherHandles = []);
    } else return $e;
  let A = p ? new Array(e.length).fill(an) : an;
  const B = () => {
    if (j.active)
      if (t) {
        const N = j.run();
        (s || a || (p ? N.some((G, de) => ht(G, A[de])) : ht(N, A))) &&
          (g && g(),
          je(t, l, 3, [N, A === an ? void 0 : p && A[0] === an ? [] : A, b]),
          (A = N));
      } else j.run();
  };
  B.allowRecurse = !!t;
  let T;
  r === "sync"
    ? (T = B)
    : r === "post"
    ? (T = () => Ee(B, l && l.suspense))
    : ((B.pre = !0), l && (B.id = l.uid), (T = () => ws(B)));
  const j = new ms(d, T);
  t
    ? n
      ? B()
      : (A = j.run())
    : r === "post"
    ? Ee(j.run.bind(j), l && l.suspense)
    : j.run();
  const U = () => {
    j.stop(), l && l.scope && ds(l.scope.effects, j);
  };
  return S && S.push(U), U;
}
function Vi(e, t, n) {
  const s = this.proxy,
    r = ue(e) ? (e.includes(".") ? co(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  L(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ae;
  Ft(this);
  const c = lo(r, o.bind(s), n);
  return i ? Ft(i) : dt(), c;
}
function co(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function vt(e, t) {
  if (!se(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ie(e))) vt(e.value, t);
  else if (H(e)) for (let n = 0; n < e.length; n++) vt(e[n], t);
  else if (Ar(e) || wt(e))
    e.forEach((n) => {
      vt(n, t);
    });
  else if (Mr(e)) for (const n in e) vt(e[n], t);
  return e;
}
function lt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let l = c.dir[s];
    l && ($t(), je(l, n, 8, [e.el, c, e, t]), jt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function uo(e, t) {
  return L(e) ? (() => fe({ name: e.name }, t, { setup: e }))() : e;
}
const dn = (e) => !!e.type.__asyncLoader,
  ao = (e) => e.type.__isKeepAlive;
function Qi(e, t) {
  fo(e, "a", t);
}
function Yi(e, t) {
  fo(e, "da", t);
}
function fo(e, t, n = ae) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Fn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      ao(r.parent.vnode) && Ji(s, t, n, r), (r = r.parent);
  }
}
function Ji(e, t, n, s) {
  const r = Fn(t, e, s, !0);
  ho(() => {
    ds(s[t], r);
  }, n);
}
function Fn(e, t, n = ae, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          $t(), Ft(n);
          const c = je(t, n, e, i);
          return dt(), jt(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Ye =
    (e) =>
    (t, n = ae) =>
      (!tn || e === "sp") && Fn(e, (...s) => t(...s), n),
  Xi = Ye("bm"),
  Zi = Ye("m"),
  Gi = Ye("bu"),
  el = Ye("u"),
  tl = Ye("bum"),
  ho = Ye("um"),
  nl = Ye("sp"),
  sl = Ye("rtg"),
  rl = Ye("rtc");
function ol(e, t = ae) {
  Fn("ec", e, t);
}
const po = "components";
function Dt(e, t) {
  return ll(po, e, !0, t) || e;
}
const il = Symbol.for("v-ndc");
function ll(e, t, n = !0, s = !1) {
  const r = Fe || ae;
  if (r) {
    const o = r.type;
    if (e === po) {
      const c = kl(o, !1);
      if (c && (c === t || c === Ue(t) || c === Cn(Ue(t)))) return o;
    }
    const i = zs(r[e] || o[e], t) || zs(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function zs(e, t) {
  return e && (e[t] || e[Ue(t)] || e[Cn(Ue(t))]);
}
function St(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (H(e) || ue(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (se(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, l = i.length; c < l; c++) {
        const d = i[c];
        r[c] = t(e[d], d, c, o && o[c]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const Zn = (e) => (e ? (Co(e) ? As(e) || e.proxy : Zn(e.parent)) : null),
  Wt = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Cs(e),
    $forceUpdate: (e) => e.f || (e.f = () => ws(e.update)),
    $nextTick: (e) => e.n || (e.n = Ps.bind(e.proxy)),
    $watch: (e) => Vi.bind(e),
  }),
  kn = (e, t) => e !== ne && !e.__isScriptSetup && z(e, t),
  cl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: c,
        appContext: l,
      } = e;
      let d;
      if (t[0] !== "$") {
        const b = i[t];
        if (b !== void 0)
          switch (b) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (kn(s, t)) return (i[t] = 1), s[t];
          if (r !== ne && z(r, t)) return (i[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && z(d, t)) return (i[t] = 3), o[t];
          if (n !== ne && z(n, t)) return (i[t] = 4), n[t];
          Gn && (i[t] = 0);
        }
      }
      const a = Wt[t];
      let p, g;
      if (a) return t === "$attrs" && Pe(e, "get", t), a(e);
      if ((p = c.__cssModules) && (p = p[t])) return p;
      if (n !== ne && z(n, t)) return (i[t] = 4), n[t];
      if (((g = l.config.globalProperties), z(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return kn(r, t)
        ? ((r[t] = n), !0)
        : s !== ne && z(s, t)
        ? ((s[t] = n), !0)
        : z(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== ne && z(e, i)) ||
        kn(t, i) ||
        ((c = o[0]) && z(c, i)) ||
        z(s, i) ||
        z(Wt, i) ||
        z(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function qs(e) {
  return H(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Gn = !0;
function ul(e) {
  const t = Cs(e),
    n = e.proxy,
    s = e.ctx;
  (Gn = !1), t.beforeCreate && Vs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: d,
    created: a,
    beforeMount: p,
    mounted: g,
    beforeUpdate: b,
    updated: S,
    activated: A,
    deactivated: B,
    beforeDestroy: T,
    beforeUnmount: j,
    destroyed: U,
    unmounted: N,
    render: G,
    renderTracked: de,
    renderTriggered: he,
    errorCaptured: V,
    serverPrefetch: W,
    expose: oe,
    inheritAttrs: pe,
    components: we,
    directives: Se,
    filters: it,
  } = t;
  if ((d && al(d, s, null), i))
    for (const ee in i) {
      const Y = i[ee];
      L(Y) && (s[ee] = Y.bind(n));
    }
  if (r) {
    const ee = r.call(n, n);
    se(ee) && (e.data = sn(ee));
  }
  if (((Gn = !0), o))
    for (const ee in o) {
      const Y = o[ee],
        We = L(Y) ? Y.bind(n, n) : L(Y.get) ? Y.get.bind(n, n) : $e,
        Je = !L(Y) && L(Y.set) ? Y.set.bind(n) : $e,
        He = Ae({ get: We, set: Je });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (xe) => (He.value = xe),
      });
    }
  if (c) for (const ee in c) go(c[ee], s, n, ee);
  if (l) {
    const ee = L(l) ? l.call(n) : l;
    Reflect.ownKeys(ee).forEach((Y) => {
      hn(Y, ee[Y]);
    });
  }
  a && Vs(a, e, "c");
  function Q(ee, Y) {
    H(Y) ? Y.forEach((We) => ee(We.bind(n))) : Y && ee(Y.bind(n));
  }
  if (
    (Q(Xi, p),
    Q(Zi, g),
    Q(Gi, b),
    Q(el, S),
    Q(Qi, A),
    Q(Yi, B),
    Q(ol, V),
    Q(rl, de),
    Q(sl, he),
    Q(tl, j),
    Q(ho, N),
    Q(nl, W),
    H(oe))
  )
    if (oe.length) {
      const ee = e.exposed || (e.exposed = {});
      oe.forEach((Y) => {
        Object.defineProperty(ee, Y, {
          get: () => n[Y],
          set: (We) => (n[Y] = We),
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === $e && (e.render = G),
    pe != null && (e.inheritAttrs = pe),
    we && (e.components = we),
    Se && (e.directives = Se);
}
function al(e, t, n = $e) {
  H(e) && (e = es(e));
  for (const s in e) {
    const r = e[s];
    let o;
    se(r)
      ? "default" in r
        ? (o = Ke(r.from || s, r.default, !0))
        : (o = Ke(r.from || s))
      : (o = Ke(r)),
      ie(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function Vs(e, t, n) {
  je(H(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function go(e, t, n, s) {
  const r = s.includes(".") ? co(n, s) : () => n[s];
  if (ue(e)) {
    const o = t[e];
    L(o) && Ut(r, o);
  } else if (L(e)) Ut(r, e.bind(n));
  else if (se(e))
    if (H(e)) e.forEach((o) => go(o, t, n, s));
    else {
      const o = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(o) && Ut(r, o, e);
    }
}
function Cs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let l;
  return (
    c
      ? (l = c)
      : !r.length && !n && !s
      ? (l = t)
      : ((l = {}), r.length && r.forEach((d) => bn(l, d, i, !0)), bn(l, t, i)),
    se(t) && o.set(t, l),
    l
  );
}
function bn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && bn(e, o, n, !0), r && r.forEach((i) => bn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = fl[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const fl = {
  data: Qs,
  props: Ys,
  emits: Ys,
  methods: Kt,
  computed: Kt,
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  components: Kt,
  directives: Kt,
  watch: hl,
  provide: Qs,
  inject: dl,
};
function Qs(e, t) {
  return t
    ? e
      ? function () {
          return fe(
            L(e) ? e.call(this, this) : e,
            L(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function dl(e, t) {
  return Kt(es(e), es(t));
}
function es(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kt(e, t) {
  return e ? fe(Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e
    ? H(e) && H(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), qs(e), qs(t ?? {}))
    : t;
}
function hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(Object.create(null), e);
  for (const s in t) n[s] = ye(e[s], t[s]);
  return n;
}
function mo() {
  return {
    app: null,
    config: {
      isNativeTag: Wo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let pl = 0;
function gl(e, t) {
  return function (s, r = null) {
    L(s) || (s = fe({}, s)), r != null && !se(r) && (r = null);
    const o = mo(),
      i = new WeakSet();
    let c = !1;
    const l = (o.app = {
      _uid: pl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ul,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...a) {
        return (
          i.has(d) ||
            (d && L(d.install)
              ? (i.add(d), d.install(l, ...a))
              : L(d) && (i.add(d), d(l, ...a))),
          l
        );
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), l;
      },
      component(d, a) {
        return a ? ((o.components[d] = a), l) : o.components[d];
      },
      directive(d, a) {
        return a ? ((o.directives[d] = a), l) : o.directives[d];
      },
      mount(d, a, p) {
        if (!c) {
          const g = ve(s, r);
          return (
            (g.appContext = o),
            a && t ? t(g, d) : e(g, d, p),
            (c = !0),
            (l._container = d),
            (d.__vue_app__ = l),
            As(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(d, a) {
        return (o.provides[d] = a), l;
      },
      runWithContext(d) {
        Zt = l;
        try {
          return d();
        } finally {
          Zt = null;
        }
      },
    });
    return l;
  };
}
let Zt = null;
function hn(e, t) {
  if (ae) {
    let n = ae.provides;
    const s = ae.parent && ae.parent.provides;
    s === n && (n = ae.provides = Object.create(s)), (n[e] = t);
  }
}
function Ke(e, t, n = !1) {
  const s = ae || Fe;
  if (s || Zt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Zt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && L(t) ? t.call(s && s.proxy) : t;
  }
}
function ml() {
  return !!(ae || Fe || Zt);
}
function _l(e, t, n, s = !1) {
  const r = {},
    o = {};
  gn(o, Mn, 1), (e.propsDefaults = Object.create(null)), _o(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Qr(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function yl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = q(r),
    [l] = e.propsOptions;
  let d = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let g = a[p];
        if (An(e.emitsOptions, g)) continue;
        const b = t[g];
        if (l)
          if (z(o, g)) b !== o[g] && ((o[g] = b), (d = !0));
          else {
            const S = Ue(g);
            r[S] = ts(l, c, S, b, e, !1);
          }
        else b !== o[g] && ((o[g] = b), (d = !0));
      }
    }
  } else {
    _o(e, t, r, o) && (d = !0);
    let a;
    for (const p in c)
      (!t || (!z(t, p) && ((a = It(p)) === p || !z(t, a)))) &&
        (l
          ? n &&
            (n[p] !== void 0 || n[a] !== void 0) &&
            (r[p] = ts(l, c, p, void 0, e, !0))
          : delete r[p]);
    if (o !== c) for (const p in o) (!t || !z(t, p)) && (delete o[p], (d = !0));
  }
  d && Qe(e, "set", "$attrs");
}
function _o(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let l in t) {
      if (fn(l)) continue;
      const d = t[l];
      let a;
      r && z(r, (a = Ue(l)))
        ? !o || !o.includes(a)
          ? (n[a] = d)
          : ((c || (c = {}))[a] = d)
        : An(e.emitsOptions, l) ||
          ((!(l in s) || d !== s[l]) && ((s[l] = d), (i = !0)));
    }
  if (o) {
    const l = q(n),
      d = c || ne;
    for (let a = 0; a < o.length; a++) {
      const p = o[a];
      n[p] = ts(r, l, p, d[p], e, !z(d, p));
    }
  }
  return i;
}
function ts(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = z(i, "default");
    if (c && s === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && L(l)) {
        const { propsDefaults: d } = r;
        n in d ? (s = d[n]) : (Ft(r), (s = d[n] = l.call(null, t)), dt());
      } else s = l;
    }
    i[0] &&
      (o && !c ? (s = !1) : i[1] && (s === "" || s === It(n)) && (s = !0));
  }
  return s;
}
function yo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    c = [];
  let l = !1;
  if (!L(e)) {
    const a = (p) => {
      l = !0;
      const [g, b] = yo(p, t, !0);
      fe(i, g), b && c.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!o && !l) return se(e) && s.set(e, Pt), Pt;
  if (H(o))
    for (let a = 0; a < o.length; a++) {
      const p = Ue(o[a]);
      Js(p) && (i[p] = ne);
    }
  else if (o)
    for (const a in o) {
      const p = Ue(a);
      if (Js(p)) {
        const g = o[a],
          b = (i[p] = H(g) || L(g) ? { type: g } : fe({}, g));
        if (b) {
          const S = Gs(Boolean, b.type),
            A = Gs(String, b.type);
          (b[0] = S > -1),
            (b[1] = A < 0 || S < A),
            (S > -1 || z(b, "default")) && c.push(p);
        }
      }
    }
  const d = [i, c];
  return se(e) && s.set(e, d), d;
}
function Js(e) {
  return e[0] !== "$";
}
function Xs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Zs(e, t) {
  return Xs(e) === Xs(t);
}
function Gs(e, t) {
  return H(t) ? t.findIndex((n) => Zs(n, e)) : L(t) && Zs(t, e) ? 0 : -1;
}
const bo = (e) => e[0] === "_" || e === "$stable",
  Rs = (e) => (H(e) ? e.map(Le) : [Le(e)]),
  bl = (e, t, n) => {
    if (t._n) return t;
    const s = Li((...r) => Rs(t(...r)), n);
    return (s._c = !1), s;
  },
  vo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (bo(r)) continue;
      const o = e[r];
      if (L(o)) t[r] = bl(r, o, s);
      else if (o != null) {
        const i = Rs(o);
        t[r] = () => i;
      }
    }
  },
  xo = (e, t) => {
    const n = Rs(t);
    e.slots.default = () => n;
  },
  vl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = q(t)), gn(t, "_", n)) : vo(t, (e.slots = {}));
    } else (e.slots = {}), t && xo(e, t);
    gn(e.slots, Mn, 1);
  },
  xl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = ne;
    if (s.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (o = !1)
          : (fe(r, t), !n && c === 1 && delete r._)
        : ((o = !t.$stable), vo(t, r)),
        (i = t);
    } else t && (xo(e, t), (i = { default: 1 }));
    if (o) for (const c in r) !bo(c) && i[c] == null && delete r[c];
  };
function ns(e, t, n, s, r = !1) {
  if (H(e)) {
    e.forEach((g, b) => ns(g, t && (H(t) ? t[b] : t), n, s, r));
    return;
  }
  if (dn(s) && !r) return;
  const o = s.shapeFlag & 4 ? As(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: c, r: l } = e,
    d = t && t.r,
    a = c.refs === ne ? (c.refs = {}) : c.refs,
    p = c.setupState;
  if (
    (d != null &&
      d !== l &&
      (ue(d)
        ? ((a[d] = null), z(p, d) && (p[d] = null))
        : ie(d) && (d.value = null)),
    L(l))
  )
    rt(l, c, 12, [i, a]);
  else {
    const g = ue(l),
      b = ie(l);
    if (g || b) {
      const S = () => {
        if (e.f) {
          const A = g ? (z(p, l) ? p[l] : a[l]) : l.value;
          r
            ? H(A) && ds(A, o)
            : H(A)
            ? A.includes(o) || A.push(o)
            : g
            ? ((a[l] = [o]), z(p, l) && (p[l] = a[l]))
            : ((l.value = [o]), e.k && (a[e.k] = l.value));
        } else
          g
            ? ((a[l] = i), z(p, l) && (p[l] = i))
            : b && ((l.value = i), e.k && (a[e.k] = i));
      };
      i ? ((S.id = -1), Ee(S, n)) : S();
    }
  }
}
const Ee = qi;
function El(e) {
  return Pl(e);
}
function Pl(e, t) {
  const n = Vn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: l,
      setText: d,
      setElementText: a,
      parentNode: p,
      nextSibling: g,
      setScopeId: b = $e,
      insertStaticContent: S,
    } = e,
    A = (
      u,
      f,
      h,
      m = null,
      y = null,
      v = null,
      C = !1,
      E = null,
      P = !!f.dynamicChildren
    ) => {
      if (u === f) return;
      u && !Bt(u, f) && ((m = _(u)), xe(u, y, v, !0), (u = null)),
        f.patchFlag === -2 && ((P = !1), (f.dynamicChildren = null));
      const { type: x, ref: M, shapeFlag: O } = f;
      switch (x) {
        case Tn:
          B(u, f, h, m);
          break;
        case Gt:
          T(u, f, h, m);
          break;
        case Ln:
          u == null && j(f, h, m, C);
          break;
        case me:
          we(u, f, h, m, y, v, C, E, P);
          break;
        default:
          O & 1
            ? G(u, f, h, m, y, v, C, E, P)
            : O & 6
            ? Se(u, f, h, m, y, v, C, E, P)
            : (O & 64 || O & 128) && x.process(u, f, h, m, y, v, C, E, P, w);
      }
      M != null && y && ns(M, u && u.ref, v, f || u, !f);
    },
    B = (u, f, h, m) => {
      if (u == null) s((f.el = c(f.children)), h, m);
      else {
        const y = (f.el = u.el);
        f.children !== u.children && d(y, f.children);
      }
    },
    T = (u, f, h, m) => {
      u == null ? s((f.el = l(f.children || "")), h, m) : (f.el = u.el);
    },
    j = (u, f, h, m) => {
      [u.el, u.anchor] = S(u.children, f, h, m, u.el, u.anchor);
    },
    U = ({ el: u, anchor: f }, h, m) => {
      let y;
      for (; u && u !== f; ) (y = g(u)), s(u, h, m), (u = y);
      s(f, h, m);
    },
    N = ({ el: u, anchor: f }) => {
      let h;
      for (; u && u !== f; ) (h = g(u)), r(u), (u = h);
      r(f);
    },
    G = (u, f, h, m, y, v, C, E, P) => {
      (C = C || f.type === "svg"),
        u == null ? de(f, h, m, y, v, C, E, P) : W(u, f, y, v, C, E, P);
    },
    de = (u, f, h, m, y, v, C, E) => {
      let P, x;
      const { type: M, props: O, shapeFlag: I, transition: k, dirs: K } = u;
      if (
        ((P = u.el = i(u.type, v, O && O.is, O)),
        I & 8
          ? a(P, u.children)
          : I & 16 &&
            V(u.children, P, null, m, y, v && M !== "foreignObject", C, E),
        K && lt(u, null, m, "created"),
        he(P, u, u.scopeId, C, m),
        O)
      ) {
        for (const Z in O)
          Z !== "value" &&
            !fn(Z) &&
            o(P, Z, null, O[Z], v, u.children, m, y, ge);
        "value" in O && o(P, "value", null, O.value),
          (x = O.onVnodeBeforeMount) && ke(x, m, u);
      }
      K && lt(u, null, m, "beforeMount");
      const te = wl(y, k);
      te && k.beforeEnter(P),
        s(P, f, h),
        ((x = O && O.onVnodeMounted) || te || K) &&
          Ee(() => {
            x && ke(x, m, u), te && k.enter(P), K && lt(u, null, m, "mounted");
          }, y);
    },
    he = (u, f, h, m, y) => {
      if ((h && b(u, h), m)) for (let v = 0; v < m.length; v++) b(u, m[v]);
      if (y) {
        let v = y.subTree;
        if (f === v) {
          const C = y.vnode;
          he(u, C, C.scopeId, C.slotScopeIds, y.parent);
        }
      }
    },
    V = (u, f, h, m, y, v, C, E, P = 0) => {
      for (let x = P; x < u.length; x++) {
        const M = (u[x] = E ? et(u[x]) : Le(u[x]));
        A(null, M, f, h, m, y, v, C, E);
      }
    },
    W = (u, f, h, m, y, v, C) => {
      const E = (f.el = u.el);
      let { patchFlag: P, dynamicChildren: x, dirs: M } = f;
      P |= u.patchFlag & 16;
      const O = u.props || ne,
        I = f.props || ne;
      let k;
      h && ct(h, !1),
        (k = I.onVnodeBeforeUpdate) && ke(k, h, f, u),
        M && lt(f, u, h, "beforeUpdate"),
        h && ct(h, !0);
      const K = y && f.type !== "foreignObject";
      if (
        (x
          ? oe(u.dynamicChildren, x, E, h, m, K, v)
          : C || Y(u, f, E, null, h, m, K, v, !1),
        P > 0)
      ) {
        if (P & 16) pe(E, f, O, I, h, m, y);
        else if (
          (P & 2 && O.class !== I.class && o(E, "class", null, I.class, y),
          P & 4 && o(E, "style", O.style, I.style, y),
          P & 8)
        ) {
          const te = f.dynamicProps;
          for (let Z = 0; Z < te.length; Z++) {
            const le = te[Z],
              Te = O[le],
              mt = I[le];
            (mt !== Te || le === "value") &&
              o(E, le, Te, mt, y, u.children, h, m, ge);
          }
        }
        P & 1 && u.children !== f.children && a(E, f.children);
      } else !C && x == null && pe(E, f, O, I, h, m, y);
      ((k = I.onVnodeUpdated) || M) &&
        Ee(() => {
          k && ke(k, h, f, u), M && lt(f, u, h, "updated");
        }, m);
    },
    oe = (u, f, h, m, y, v, C) => {
      for (let E = 0; E < f.length; E++) {
        const P = u[E],
          x = f[E],
          M =
            P.el && (P.type === me || !Bt(P, x) || P.shapeFlag & 70)
              ? p(P.el)
              : h;
        A(P, x, M, null, m, y, v, C, !0);
      }
    },
    pe = (u, f, h, m, y, v, C) => {
      if (h !== m) {
        if (h !== ne)
          for (const E in h)
            !fn(E) && !(E in m) && o(u, E, h[E], null, C, f.children, y, v, ge);
        for (const E in m) {
          if (fn(E)) continue;
          const P = m[E],
            x = h[E];
          P !== x && E !== "value" && o(u, E, x, P, C, f.children, y, v, ge);
        }
        "value" in m && o(u, "value", h.value, m.value);
      }
    },
    we = (u, f, h, m, y, v, C, E, P) => {
      const x = (f.el = u ? u.el : c("")),
        M = (f.anchor = u ? u.anchor : c(""));
      let { patchFlag: O, dynamicChildren: I, slotScopeIds: k } = f;
      k && (E = E ? E.concat(k) : k),
        u == null
          ? (s(x, h, m), s(M, h, m), V(f.children, h, M, y, v, C, E, P))
          : O > 0 && O & 64 && I && u.dynamicChildren
          ? (oe(u.dynamicChildren, I, h, y, v, C, E),
            (f.key != null || (y && f === y.subTree)) && Eo(u, f, !0))
          : Y(u, f, h, M, y, v, C, E, P);
    },
    Se = (u, f, h, m, y, v, C, E, P) => {
      (f.slotScopeIds = E),
        u == null
          ? f.shapeFlag & 512
            ? y.ctx.activate(f, h, m, C, P)
            : it(f, h, m, y, v, C, P)
          : Oe(u, f, P);
    },
    it = (u, f, h, m, y, v, C) => {
      const E = (u.component = $l(u, m, y));
      if ((ao(u) && (E.ctx.renderer = w), jl(E), E.asyncDep)) {
        if ((y && y.registerDep(E, Q), !u.el)) {
          const P = (E.subTree = ve(Gt));
          T(null, P, f, h);
        }
        return;
      }
      Q(E, u, f, h, y, v, C);
    },
    Oe = (u, f, h) => {
      const m = (f.component = u.component);
      if (Ui(u, f, h))
        if (m.asyncDep && !m.asyncResolved) {
          ee(m, f, h);
          return;
        } else (m.next = f), Ni(m.update), m.update();
      else (f.el = u.el), (m.vnode = f);
    },
    Q = (u, f, h, m, y, v, C) => {
      const E = () => {
          if (u.isMounted) {
            let { next: M, bu: O, u: I, parent: k, vnode: K } = u,
              te = M,
              Z;
            ct(u, !1),
              M ? ((M.el = K.el), ee(u, M, C)) : (M = K),
              O && Hn(O),
              (Z = M.props && M.props.onVnodeBeforeUpdate) && ke(Z, k, M, K),
              ct(u, !0);
            const le = Bn(u),
              Te = u.subTree;
            (u.subTree = le),
              A(Te, le, p(Te.el), _(Te), u, y, v),
              (M.el = le.el),
              te === null && Wi(u, le.el),
              I && Ee(I, y),
              (Z = M.props && M.props.onVnodeUpdated) &&
                Ee(() => ke(Z, k, M, K), y);
          } else {
            let M;
            const { el: O, props: I } = f,
              { bm: k, m: K, parent: te } = u,
              Z = dn(f);
            if (
              (ct(u, !1),
              k && Hn(k),
              !Z && (M = I && I.onVnodeBeforeMount) && ke(M, te, f),
              ct(u, !0),
              O && J)
            ) {
              const le = () => {
                (u.subTree = Bn(u)), J(O, u.subTree, u, y, null);
              };
              Z
                ? f.type.__asyncLoader().then(() => !u.isUnmounted && le())
                : le();
            } else {
              const le = (u.subTree = Bn(u));
              A(null, le, h, m, u, y, v), (f.el = le.el);
            }
            if ((K && Ee(K, y), !Z && (M = I && I.onVnodeMounted))) {
              const le = f;
              Ee(() => ke(M, te, le), y);
            }
            (f.shapeFlag & 256 ||
              (te && dn(te.vnode) && te.vnode.shapeFlag & 256)) &&
              u.a &&
              Ee(u.a, y),
              (u.isMounted = !0),
              (f = h = m = null);
          }
        },
        P = (u.effect = new ms(E, () => ws(x), u.scope)),
        x = (u.update = () => P.run());
      (x.id = u.uid), ct(u, !0), x();
    },
    ee = (u, f, h) => {
      f.component = u;
      const m = u.vnode.props;
      (u.vnode = f),
        (u.next = null),
        yl(u, f.props, m, h),
        xl(u, f.children, h),
        $t(),
        Us(),
        jt();
    },
    Y = (u, f, h, m, y, v, C, E, P = !1) => {
      const x = u && u.children,
        M = u ? u.shapeFlag : 0,
        O = f.children,
        { patchFlag: I, shapeFlag: k } = f;
      if (I > 0) {
        if (I & 128) {
          Je(x, O, h, m, y, v, C, E, P);
          return;
        } else if (I & 256) {
          We(x, O, h, m, y, v, C, E, P);
          return;
        }
      }
      k & 8
        ? (M & 16 && ge(x, y, v), O !== x && a(h, O))
        : M & 16
        ? k & 16
          ? Je(x, O, h, m, y, v, C, E, P)
          : ge(x, y, v, !0)
        : (M & 8 && a(h, ""), k & 16 && V(O, h, m, y, v, C, E, P));
    },
    We = (u, f, h, m, y, v, C, E, P) => {
      (u = u || Pt), (f = f || Pt);
      const x = u.length,
        M = f.length,
        O = Math.min(x, M);
      let I;
      for (I = 0; I < O; I++) {
        const k = (f[I] = P ? et(f[I]) : Le(f[I]));
        A(u[I], k, h, null, y, v, C, E, P);
      }
      x > M ? ge(u, y, v, !0, !1, O) : V(f, h, m, y, v, C, E, P, O);
    },
    Je = (u, f, h, m, y, v, C, E, P) => {
      let x = 0;
      const M = f.length;
      let O = u.length - 1,
        I = M - 1;
      for (; x <= O && x <= I; ) {
        const k = u[x],
          K = (f[x] = P ? et(f[x]) : Le(f[x]));
        if (Bt(k, K)) A(k, K, h, null, y, v, C, E, P);
        else break;
        x++;
      }
      for (; x <= O && x <= I; ) {
        const k = u[O],
          K = (f[I] = P ? et(f[I]) : Le(f[I]));
        if (Bt(k, K)) A(k, K, h, null, y, v, C, E, P);
        else break;
        O--, I--;
      }
      if (x > O) {
        if (x <= I) {
          const k = I + 1,
            K = k < M ? f[k].el : m;
          for (; x <= I; )
            A(null, (f[x] = P ? et(f[x]) : Le(f[x])), h, K, y, v, C, E, P), x++;
        }
      } else if (x > I) for (; x <= O; ) xe(u[x], y, v, !0), x++;
      else {
        const k = x,
          K = x,
          te = new Map();
        for (x = K; x <= I; x++) {
          const Ce = (f[x] = P ? et(f[x]) : Le(f[x]));
          Ce.key != null && te.set(Ce.key, x);
        }
        let Z,
          le = 0;
        const Te = I - K + 1;
        let mt = !1,
          Ms = 0;
        const Ht = new Array(Te);
        for (x = 0; x < Te; x++) Ht[x] = 0;
        for (x = k; x <= O; x++) {
          const Ce = u[x];
          if (le >= Te) {
            xe(Ce, y, v, !0);
            continue;
          }
          let Be;
          if (Ce.key != null) Be = te.get(Ce.key);
          else
            for (Z = K; Z <= I; Z++)
              if (Ht[Z - K] === 0 && Bt(Ce, f[Z])) {
                Be = Z;
                break;
              }
          Be === void 0
            ? xe(Ce, y, v, !0)
            : ((Ht[Be - K] = x + 1),
              Be >= Ms ? (Ms = Be) : (mt = !0),
              A(Ce, f[Be], h, null, y, v, C, E, P),
              le++);
        }
        const Is = mt ? Cl(Ht) : Pt;
        for (Z = Is.length - 1, x = Te - 1; x >= 0; x--) {
          const Ce = K + x,
            Be = f[Ce],
            $s = Ce + 1 < M ? f[Ce + 1].el : m;
          Ht[x] === 0
            ? A(null, Be, h, $s, y, v, C, E, P)
            : mt && (Z < 0 || x !== Is[Z] ? He(Be, h, $s, 2) : Z--);
        }
      }
    },
    He = (u, f, h, m, y = null) => {
      const { el: v, type: C, transition: E, children: P, shapeFlag: x } = u;
      if (x & 6) {
        He(u.component.subTree, f, h, m);
        return;
      }
      if (x & 128) {
        u.suspense.move(f, h, m);
        return;
      }
      if (x & 64) {
        C.move(u, f, h, w);
        return;
      }
      if (C === me) {
        s(v, f, h);
        for (let O = 0; O < P.length; O++) He(P[O], f, h, m);
        s(u.anchor, f, h);
        return;
      }
      if (C === Ln) {
        U(u, f, h);
        return;
      }
      if (m !== 2 && x & 1 && E)
        if (m === 0) E.beforeEnter(v), s(v, f, h), Ee(() => E.enter(v), y);
        else {
          const { leave: O, delayLeave: I, afterLeave: k } = E,
            K = () => s(v, f, h),
            te = () => {
              O(v, () => {
                K(), k && k();
              });
            };
          I ? I(v, K, te) : te();
        }
      else s(v, f, h);
    },
    xe = (u, f, h, m = !1, y = !1) => {
      const {
        type: v,
        props: C,
        ref: E,
        children: P,
        dynamicChildren: x,
        shapeFlag: M,
        patchFlag: O,
        dirs: I,
      } = u;
      if ((E != null && ns(E, null, h, u, !0), M & 256)) {
        f.ctx.deactivate(u);
        return;
      }
      const k = M & 1 && I,
        K = !dn(u);
      let te;
      if ((K && (te = C && C.onVnodeBeforeUnmount) && ke(te, f, u), M & 6))
        jn(u.component, h, m);
      else {
        if (M & 128) {
          u.suspense.unmount(h, m);
          return;
        }
        k && lt(u, null, f, "beforeUnmount"),
          M & 64
            ? u.type.remove(u, f, h, y, w, m)
            : x && (v !== me || (O > 0 && O & 64))
            ? ge(x, f, h, !1, !0)
            : ((v === me && O & 384) || (!y && M & 16)) && ge(P, f, h),
          m && pt(u);
      }
      ((K && (te = C && C.onVnodeUnmounted)) || k) &&
        Ee(() => {
          te && ke(te, f, u), k && lt(u, null, f, "unmounted");
        }, h);
    },
    pt = (u) => {
      const { type: f, el: h, anchor: m, transition: y } = u;
      if (f === me) {
        gt(h, m);
        return;
      }
      if (f === Ln) {
        N(u);
        return;
      }
      const v = () => {
        r(h), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (u.shapeFlag & 1 && y && !y.persisted) {
        const { leave: C, delayLeave: E } = y,
          P = () => C(h, v);
        E ? E(u.el, v, P) : P();
      } else v();
    },
    gt = (u, f) => {
      let h;
      for (; u !== f; ) (h = g(u)), r(u), (u = h);
      r(f);
    },
    jn = (u, f, h) => {
      const { bum: m, scope: y, update: v, subTree: C, um: E } = u;
      m && Hn(m),
        y.stop(),
        v && ((v.active = !1), xe(C, u, f, h)),
        E && Ee(E, f),
        Ee(() => {
          u.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    ge = (u, f, h, m = !1, y = !1, v = 0) => {
      for (let C = v; C < u.length; C++) xe(u[C], f, h, m, y);
    },
    _ = (u) =>
      u.shapeFlag & 6
        ? _(u.component.subTree)
        : u.shapeFlag & 128
        ? u.suspense.next()
        : g(u.anchor || u.el),
    R = (u, f, h) => {
      u == null
        ? f._vnode && xe(f._vnode, null, null, !0)
        : A(f._vnode || null, u, f, null, null, null, h),
        Us(),
        so(),
        (f._vnode = u);
    },
    w = {
      p: A,
      um: xe,
      m: He,
      r: pt,
      mt: it,
      mc: V,
      pc: Y,
      pbc: oe,
      n: _,
      o: e,
    };
  let F, J;
  return t && ([F, J] = t(w)), { render: R, hydrate: F, createApp: gl(R, F) };
}
function ct({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function wl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Eo(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (H(s) && H(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[o] = et(r[o])), (c.el = i.el)),
        n || Eo(i, c)),
        c.type === Tn && (c.el = i.el);
    }
}
function Cl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, c;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < d ? (o = c + 1) : (i = c);
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const Rl = (e) => e.__isTeleport,
  me = Symbol.for("v-fgt"),
  Tn = Symbol.for("v-txt"),
  Gt = Symbol.for("v-cmt"),
  Ln = Symbol.for("v-stc"),
  zt = [];
let Ie = null;
function re(e = !1) {
  zt.push((Ie = e ? null : []));
}
function Sl() {
  zt.pop(), (Ie = zt[zt.length - 1] || null);
}
let en = 1;
function er(e) {
  en += e;
}
function Po(e) {
  return (
    (e.dynamicChildren = en > 0 ? Ie || Pt : null),
    Sl(),
    en > 0 && Ie && Ie.push(e),
    e
  );
}
function ce(e, t, n, s, r, o) {
  return Po(D(e, t, n, s, r, o, !0));
}
function Dn(e, t, n, s, r) {
  return Po(ve(e, t, n, s, r, !0));
}
function ss(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mn = "__vInternal",
  wo = ({ key: e }) => e ?? null,
  pn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ue(e) || ie(e) || L(e)
        ? { i: Fe, r: e, k: t, f: !!n }
        : e
      : null
  );
function D(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === me ? 0 : 1,
  i = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wo(t),
    ref: t && pn(t),
    scopeId: io,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe,
  };
  return (
    c
      ? (Ss(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= ue(n) ? 8 : 16),
    en > 0 &&
      !i &&
      Ie &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Ie.push(l),
    l
  );
}
const ve = Ol;
function Ol(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === il) && (e = Gt), ss(e))) {
    const c = At(e, t, !0);
    return (
      n && Ss(c, n),
      en > 0 &&
        !o &&
        Ie &&
        (c.shapeFlag & 6 ? (Ie[Ie.indexOf(e)] = c) : Ie.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Ll(e) && (e = e.__vccOpts), t)) {
    t = Al(t);
    let { class: c, style: l } = t;
    c && !ue(c) && (t.class = ps(c)),
      se(l) && (Jr(l) && !H(l) && (l = fe({}, l)), (t.style = Ve(l)));
  }
  const i = ue(e) ? 1 : zi(e) ? 128 : Rl(e) ? 64 : se(e) ? 4 : L(e) ? 2 : 0;
  return D(e, t, n, s, r, i, o, !0);
}
function Al(e) {
  return e ? (Jr(e) || Mn in e ? fe({}, e) : e) : null;
}
function At(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    c = t ? Tl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && wo(c),
    ref:
      t && t.ref ? (n && r ? (H(r) ? r.concat(pn(t)) : [r, pn(t)]) : pn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && At(e.ssContent),
    ssFallback: e.ssFallback && At(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Fl(e = " ", t = 0) {
  return ve(Tn, null, e, t);
}
function Le(e) {
  return e == null || typeof e == "boolean"
    ? ve(Gt)
    : H(e)
    ? ve(me, null, e.slice())
    : typeof e == "object"
    ? et(e)
    : ve(Tn, null, String(e));
}
function et(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : At(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (H(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Mn in t)
        ? (t._ctx = Fe)
        : r === 3 &&
          Fe &&
          (Fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    L(t)
      ? ((t = { default: t, _ctx: Fe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Fl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Tl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ps([t.class, s.class]));
      else if (r === "style") t.style = Ve([t.style, s.style]);
      else if (xn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(H(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ke(e, t, n, s = null) {
  je(e, t, 7, [n, s]);
}
const Ml = mo();
let Il = 0;
function $l(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ml,
    o = {
      uid: Il++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new jr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yo(s, r),
      emitsOptions: oo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: s.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = ki.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ae = null,
  Os,
  _t,
  tr = "__VUE_INSTANCE_SETTERS__";
(_t = Vn()[tr]) || (_t = Vn()[tr] = []),
  _t.push((e) => (ae = e)),
  (Os = (e) => {
    _t.length > 1 ? _t.forEach((t) => t(e)) : _t[0](e);
  });
const Ft = (e) => {
    Os(e), e.scope.on();
  },
  dt = () => {
    ae && ae.scope.off(), Os(null);
  };
function Co(e) {
  return e.vnode.shapeFlag & 4;
}
let tn = !1;
function jl(e, t = !1) {
  tn = t;
  const { props: n, children: s } = e.vnode,
    r = Co(e);
  _l(e, n, r, t), vl(e, s);
  const o = r ? Nl(e, t) : void 0;
  return (tn = !1), o;
}
function Nl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Sn(new Proxy(e.ctx, cl)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Bl(e) : null);
    Ft(e), $t();
    const o = rt(s, e, 0, [e.props, r]);
    if ((jt(), dt(), Fr(o))) {
      if ((o.then(dt, dt), t))
        return o
          .then((i) => {
            nr(e, i, t);
          })
          .catch((i) => {
            On(i, e, 0);
          });
      e.asyncDep = o;
    } else nr(e, o, t);
  } else Ro(e, t);
}
function nr(e, t, n) {
  L(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = eo(t)),
    Ro(e, n);
}
let sr;
function Ro(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && sr && !s.render) {
      const r = s.template || Cs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          d = fe(fe({ isCustomElement: o, delimiters: c }, i), l);
        s.render = sr(r, d);
      }
    }
    e.render = s.render || $e;
  }
  {
    Ft(e), $t();
    try {
      ul(e);
    } finally {
      jt(), dt();
    }
  }
}
function Hl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Pe(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Bl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Hl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function As(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(eo(Sn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Wt) return Wt[n](e);
        },
        has(t, n) {
          return n in t || n in Wt;
        },
      }))
    );
}
function kl(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ll(e) {
  return L(e) && "__vccOpts" in e;
}
const Ae = (e, t) => Ii(e, t, tn);
function So(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? se(t) && !H(t)
      ? ss(t)
        ? ve(e, null, [t])
        : ve(e, t)
      : ve(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && ss(n) && (n = [n]),
      ve(e, t, n));
}
const Dl = Symbol.for("v-scx"),
  Kl = () => Ke(Dl),
  Ul = "3.3.7",
  Wl = "http://www.w3.org/2000/svg",
  at = typeof document < "u" ? document : null,
  rr = at && at.createElement("template"),
  zl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? at.createElementNS(Wl, e)
        : at.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => at.createTextNode(e),
    createComment: (e) => at.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => at.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        rr.innerHTML = s ? `<svg>${e}</svg>` : e;
        const c = rr.content;
        if (s) {
          const l = c.firstChild;
          for (; l.firstChild; ) c.appendChild(l.firstChild);
          c.removeChild(l);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  ql = Symbol("_vtc");
function Vl(e, t, n) {
  const s = e[ql];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Ql = Symbol("_vod");
function Yl(e, t, n) {
  const s = e.style,
    r = ue(n);
  if (n && !r) {
    if (t && !ue(t)) for (const o in t) n[o] == null && rs(s, o, "");
    for (const o in n) rs(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      Ql in e && (s.display = o);
  }
}
const or = /\s*!important$/;
function rs(e, t, n) {
  if (H(n)) n.forEach((s) => rs(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Jl(e, t);
    or.test(n)
      ? e.setProperty(It(s), n.replace(or, ""), "important")
      : (e[s] = n);
  }
}
const ir = ["Webkit", "Moz", "ms"],
  Kn = {};
function Jl(e, t) {
  const n = Kn[t];
  if (n) return n;
  let s = Ue(t);
  if (s !== "filter" && s in e) return (Kn[t] = s);
  s = Cn(s);
  for (let r = 0; r < ir.length; r++) {
    const o = ir[r] + s;
    if (o in e) return (Kn[t] = o);
  }
  return t;
}
const lr = "http://www.w3.org/1999/xlink";
function Xl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(lr, t.slice(6, t.length))
      : e.setAttributeNS(lr, t, n);
  else {
    const o = ni(t);
    n == null || (o && !Ir(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Zl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    e._value = n;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value,
      a = n ?? "";
    d !== a && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (n = Ir(n))
      : n == null && d === "string"
      ? ((n = ""), (l = !0))
      : d === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Gl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ec(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cr = Symbol("_vei");
function tc(e, t, n, s, r = null) {
  const o = e[cr] || (e[cr] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [c, l] = nc(t);
    if (s) {
      const d = (o[t] = oc(s, r));
      Gl(e, c, d, l);
    } else i && (ec(e, c, i, l), (o[t] = void 0));
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function nc(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(ur)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t];
}
let Un = 0;
const sc = Promise.resolve(),
  rc = () => Un || (sc.then(() => (Un = 0)), (Un = Date.now()));
function oc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    je(ic(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = rc()), n;
}
function ic(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const ar = /^on[a-z]/,
  lc = (e, t, n, s, r = !1, o, i, c, l) => {
    t === "class"
      ? Vl(e, s, r)
      : t === "style"
      ? Yl(e, n, s)
      : xn(t)
      ? fs(t) || tc(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : cc(e, t, s, r)
        )
      ? Zl(e, t, s, o, i, c, l)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Xl(e, t, s, r));
  };
function cc(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && ar.test(t) && L(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (ar.test(t) && ue(n))
    ? !1
    : t in e;
}
const uc = fe({ patchProp: lc }, zl);
let fr;
function ac() {
  return fr || (fr = El(uc));
}
const fc = (...e) => {
  const t = ac().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = dc(s);
      if (!r) return;
      const o = t._component;
      !L(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function dc(e) {
  return ue(e) ? document.querySelector(e) : e;
}
var hc = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Oo;
const In = (e) => (Oo = e),
  Ao = Symbol();
function os(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var qt;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(qt || (qt = {}));
function pc() {
  const e = Nr(!0),
    t = e.run(() => xs({}));
  let n = [],
    s = [];
  const r = Sn({
    install(o) {
      In(r),
        (r._a = o),
        o.provide(Ao, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []);
    },
    use(o) {
      return !this._a && !hc ? s.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const Fo = () => {};
function dr(e, t, n, s = Fo) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && Hr() && ri(r), r;
}
function yt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const gc = (e) => e();
function is(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    os(r) && os(s) && e.hasOwnProperty(n) && !ie(s) && !st(s)
      ? (e[n] = is(r, s))
      : (e[n] = s);
  }
  return e;
}
const mc = Symbol();
function _c(e) {
  return !os(e) || !e.hasOwnProperty(mc);
}
const { assign: Ge } = Object;
function yc(e) {
  return !!(ie(e) && e.effect);
}
function bc(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    c = n.state.value[e];
  let l;
  function d() {
    c || (n.state.value[e] = r ? r() : {});
    const a = Ai(n.state.value[e]);
    return Ge(
      a,
      o,
      Object.keys(i || {}).reduce(
        (p, g) => (
          (p[g] = Sn(
            Ae(() => {
              In(n);
              const b = n._s.get(e);
              return i[g].call(b, b);
            })
          )),
          p
        ),
        {}
      )
    );
  }
  return (l = To(e, d, t, n, s, !0)), l;
}
function To(e, t, n = {}, s, r, o) {
  let i;
  const c = Ge({ actions: {} }, n),
    l = { deep: !0 };
  let d,
    a,
    p = [],
    g = [],
    b;
  const S = s.state.value[e];
  !o && !S && (s.state.value[e] = {}), xs({});
  let A;
  function B(V) {
    let W;
    (d = a = !1),
      typeof V == "function"
        ? (V(s.state.value[e]),
          (W = { type: qt.patchFunction, storeId: e, events: b }))
        : (is(s.state.value[e], V),
          (W = { type: qt.patchObject, payload: V, storeId: e, events: b }));
    const oe = (A = Symbol());
    Ps().then(() => {
      A === oe && (d = !0);
    }),
      (a = !0),
      yt(p, W, s.state.value[e]);
  }
  const T = o
    ? function () {
        const { state: W } = n,
          oe = W ? W() : {};
        this.$patch((pe) => {
          Ge(pe, oe);
        });
      }
    : Fo;
  function j() {
    i.stop(), (p = []), (g = []), s._s.delete(e);
  }
  function U(V, W) {
    return function () {
      In(s);
      const oe = Array.from(arguments),
        pe = [],
        we = [];
      function Se(Q) {
        pe.push(Q);
      }
      function it(Q) {
        we.push(Q);
      }
      yt(g, { args: oe, name: V, store: G, after: Se, onError: it });
      let Oe;
      try {
        Oe = W.apply(this && this.$id === e ? this : G, oe);
      } catch (Q) {
        throw (yt(we, Q), Q);
      }
      return Oe instanceof Promise
        ? Oe.then((Q) => (yt(pe, Q), Q)).catch(
            (Q) => (yt(we, Q), Promise.reject(Q))
          )
        : (yt(pe, Oe), Oe);
    };
  }
  const N = {
      _p: s,
      $id: e,
      $onAction: dr.bind(null, g),
      $patch: B,
      $reset: T,
      $subscribe(V, W = {}) {
        const oe = dr(p, V, W.detached, () => pe()),
          pe = i.run(() =>
            Ut(
              () => s.state.value[e],
              (we) => {
                (W.flush === "sync" ? a : d) &&
                  V({ storeId: e, type: qt.direct, events: b }, we);
              },
              Ge({}, l, W)
            )
          );
        return oe;
      },
      $dispose: j,
    },
    G = sn(N);
  s._s.set(e, G);
  const he = ((s._a && s._a.runWithContext) || gc)(() =>
    s._e.run(() => (i = Nr()).run(t))
  );
  for (const V in he) {
    const W = he[V];
    if ((ie(W) && !yc(W)) || st(W))
      o ||
        (S && _c(W) && (ie(W) ? (W.value = S[V]) : is(W, S[V])),
        (s.state.value[e][V] = W));
    else if (typeof W == "function") {
      const oe = U(V, W);
      (he[V] = oe), (c.actions[V] = W);
    }
  }
  return (
    Ge(G, he),
    Ge(q(G), he),
    Object.defineProperty(G, "$state", {
      get: () => s.state.value[e],
      set: (V) => {
        B((W) => {
          Ge(W, V);
        });
      },
    }),
    s._p.forEach((V) => {
      Ge(
        G,
        i.run(() => V({ store: G, app: s._a, pinia: s, options: c }))
      );
    }),
    S && o && n.hydrate && n.hydrate(G.$state, S),
    (d = !0),
    (a = !0),
    G
  );
}
function vc(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  typeof e == "string" ? ((s = e), (r = o ? n : t)) : ((r = e), (s = e.id));
  function i(c, l) {
    const d = ml();
    return (
      (c = c || (d ? Ke(Ao, null) : null)),
      c && In(c),
      (c = Oo),
      c._s.has(s) || (o ? To(s, t, r, c) : bc(s, r, c)),
      c._s.get(s)
    );
  }
  return (i.$id = s), i;
}
function xt(e, t) {
  return Array.isArray(t)
    ? t.reduce(
        (n, s) => (
          (n[s] = function () {
            return e(this.$pinia)[s];
          }),
          n
        ),
        {}
      )
    : Object.keys(t).reduce(
        (n, s) => (
          (n[s] = function () {
            const r = e(this.$pinia),
              o = t[s];
            return typeof o == "function" ? o.call(this, r) : r[o];
          }),
          n
        ),
        {}
      );
}
const Nt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  xc = {
    name: "category",
    props: { img: String, name: String, num_item: String, bg_color: String },
  },
  Ec = { class: "image" },
  Pc = ["src"],
  wc = { class: "content" },
  Cc = { class: "name" },
  Rc = { class: "num_item" };
function Sc(e, t, n, s, r, o) {
  return (
    re(),
    ce(
      "div",
      { class: "category", style: Ve({ backgroundColor: n.bg_color }) },
      [
        D("div", Ec, [D("img", { src: n.img, alt: "Hello" }, null, 8, Pc)]),
        D("div", wc, [
          D("div", Cc, be(n.name), 1),
          D("div", Rc, be(n.num_item) + " items ", 1),
        ]),
      ],
      4
    )
  );
}
const Oc = Nt(xc, [["render", Sc]]);
const Ac = { name: "button", props: { button_color: String } },
  Fc = D("span", { style: { "margin-right": "2px" } }, "Shop now", -1),
  Tc = D(
    "i",
    { class: "fa-solid fa-arrow-right", style: { "font-size": "12px" } },
    null,
    -1
  ),
  Mc = [Fc, Tc];
function Ic(e, t, n, s, r, o) {
  return (
    re(),
    ce(
      "button",
      {
        class: "button",
        style: Ve([{ backgroundColor: n.button_color }, { color: "white" }]),
      },
      Mc,
      4
    )
  );
}
const $c = Nt(Ac, [["render", Ic]]);
const jc = {
    name: "promotion",
    components: { Button_show: $c },
    props: { img: String, title: String, btn_color: String, bg_color: String },
  },
  Nc = { class: "content" },
  Hc = { class: "title" },
  Bc = { class: "image" },
  kc = ["src"];
function Lc(e, t, n, s, r, o) {
  const i = Dt("Button_show");
  return (
    re(),
    ce(
      "div",
      { class: "promotion", style: Ve({ backgroundColor: n.bg_color }) },
      [
        D("div", Nc, [
          D("div", Hc, be(n.title), 1),
          ve(i, { button_color: n.btn_color }, null, 8, ["button_color"]),
        ]),
        D("div", Bc, [D("img", { src: n.img, alt: "" }, null, 8, kc)]),
      ],
      4
    )
  );
}
const Dc = Nt(jc, [["render", Lc]]),
  Et = vc("product_store", {
    state: () => ({
      category: [
        {
          id: 1,
          img: "./assets/img/humbeger.png",
          name: "Cake & Milk",
          num_item: "14",
          bg_color: "#F2FCE4",
          group: "Milks & Diaries",
        },
        {
          id: 2,
          img: "./assets/img/persimmon.png",
          name: "Peach",
          num_item: "17",
          bg_color: "#FFFCEB",
          group: "Fruits",
        },
        {
          id: 3,
          img: "./assets/img/kiwi.png",
          name: "Oganic Kiwi",
          num_item: "21",
          bg_color: "#ECFFEC",
          group: "Fruits",
        },
        {
          id: 4,
          img: "./assets/img/apple.png",
          name: "Red apple",
          num_item: "68",
          bg_color: "#FEEFEA",
          group: "Fruits",
        },
        {
          id: 5,
          img: "./assets/img/snack.png",
          name: "Snack",
          num_item: "34",
          bg_color: "#FFF3EB",
          group: "Coffees & Teas",
        },
        {
          id: 6,
          img: "./assets/img/blueberry.png",
          name: "Black plum",
          num_item: "25",
          bg_color: "#FFF3FF",
          group: "Fruits",
        },
        {
          id: 7,
          img: "./assets/img/cabbage.png",
          name: "Vegetables",
          num_item: "65",
          bg_color: "#F2FCE4",
          group: "Vegetable",
        },
        {
          id: 8,
          img: "./assets/img/headphone.png",
          name: "Headphone",
          num_item: "33",
          bg_color: "#FFFCEB",
          group: "Accessory",
        },
        {
          id: 9,
          img: "./assets/img/Biscuits.png",
          name: "Cake & Milk",
          num_item: "54",
          bg_color: "#F2FCE4",
          group: "Milks & Diaries",
        },
        {
          id: 10,
          img: "./assets/img/orange.png",
          name: "Orange",
          num_item: "63",
          bg_color: "#FFF3FF",
          group: "Fruit",
        },
      ],
      promotion: [
        {
          id: 1,
          img: "./assets/img/oinoin.png",
          title: "Everyday Fresh & Clean with Our Products",
          bg_color: "#F0E8D5",
          btn_color: "#3BB77E",
        },
        {
          id: 2,
          img: "./assets/img/juice.png",
          title: "Make your Breakfast Healthy and Easy",
          bg_color: "#F3E8E8",
          btn_color: "#3BB77E",
        },
        {
          id: 3,
          img: "./assets/img/vegetables.png",
          title: "The best Organic Products Online",
          bg_color: "#E7EAF3",
          btn_color: "#FDC040",
        },
      ],
      groups: [
        "Milks & Diaries",
        "Coffees & Teas",
        "Pet Foods",
        "Meats",
        "Vegetable",
        "Fruit",
        "Accessory",
      ],
      products: [
        {
          id: 1,
          tag: "-17%",
          image: "./assets/img/mengo.png",
          category: 1,
          type: "Hodo Food",
          name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 2,
          tag: "Hot",
          image: "./assets/img/corn.png",
          category: 2,
          type: "Hodo Food",
          name: "All Natural Italian-Style Chicken Meatballs",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 3,
          tag: "Sale",
          image: "./assets/img/oranges.png",
          category: 2,
          type: "Hodo Food",
          name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 4,
          tag: " ",
          image: "./assets/img/chilis.png",
          category: 3,
          type: "Hodo Food",
          name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 5,
          tag: " ",
          image: "./assets/img/lemons.png",
          category: 3,
          type: "Hodo Food",
          name: "Blue Diamond Almonds Lightly Salted Vegetables",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 6,
          tag: " ",
          image: "./assets/img/fish.png",
          category: 3,
          type: "Hodo Food",
          name: "Chobani Complete Vanilla Greek Yogurt",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 7,
          tag: "Sale",
          image: "./assets/img/fish_lemon.png",
          category: 4,
          type: "Hodo Food",
          name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 8,
          tag: " ",
          image: "./assets/img/steak.png",
          category: 5,
          type: "Hodo Food",
          name: "Encore Seafoods Stuffed Alaskan Salmon",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 9,
          tag: " ",
          image: "./assets/img/fish_fille.png",
          category: 6,
          type: "Hodo Food",
          name: "Gorton’s Beer Battered Fish Fillets with soft paper",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
        {
          id: 10,
          tag: "Hot",
          image: "./assets/img/vegetable.png",
          category: 7,
          type: "Hodo Food",
          name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
          rate: 4,
          description: "500 gram",
          sellPrice: 2.8,
          discountPercentage: 17,
          discountPrice: 2.51,
        },
      ],
    }),
    getters: {},
  });
const Kc = {
    name: "menu",
    props: { title: String },
    computed: { ...xt(Et, ["groups"]) },
  },
  Uc = { class: "menu_container" },
  Wc = { class: "title" },
  zc = { style: { "font-weight": "bold" } },
  qc = { class: "all_menu" },
  Vc = D(
    "li",
    null,
    [D("a", { href: "#", style: { "font-weight": "bold" } }, "All")],
    -1
  ),
  Qc = { href: "#" };
function Yc(e, t, n, s, r, o) {
  return (
    re(),
    ce("div", Uc, [
      D("div", Wc, [D("h2", zc, be(n.title), 1)]),
      D("div", qc, [
        Vc,
        (re(!0),
        ce(
          me,
          null,
          St(
            e.groups,
            (i) => (
              re(), ce("ul", null, [D("li", null, [D("a", Qc, be(i), 1)])])
            )
          ),
          256
        )),
      ]),
    ])
  );
}
const Jc = Nt(Kc, [["render", Yc]]);
const Xc = {
  name: "products",
  computed: { ...xt(Et, ["groups"]) },
  props: {
    img: String,
    tag: String,
    type: String,
    title: String,
    rating: Number,
    description: String,
    disPrice: Number,
    sellPrice: Number,
  },
  data() {
    return { tagColor: ["#3BB77E", "#FD6E6E", "#FDC040"] };
  },
};
$(document).ready(function () {
  $(".add_btn").on("click", ".btn", function () {
    $(this).css("display", "none"),
      $(this).next(".add_num").css("display", "block");
  });
});
const Zc = { class: "products" },
  Gc = { class: "image" },
  eu = ["src"],
  tu = { key: 0, class: "tag", style: { padding: "0" } },
  nu = { class: "content" },
  su = { class: "" },
  ru = { class: "type" },
  ou = { class: "title" },
  iu = { class: "rating" },
  lu = { class: "rating bx bxs-star" },
  cu = { class: "unrating bx bxs-star" },
  uu = { class: "rating_num" },
  au = { class: "description" },
  fu = { class: "price" },
  du = { class: "allPrice" },
  hu = { class: "discountPrice" },
  pu = { class: "sellprice" },
  gu = D(
    "div",
    { class: "add_btn" },
    [
      D("button", { class: "btn", style: { cursor: "pointer" } }, "Add +"),
      D("input", { type: "number", class: "add_num", value: "1" }),
    ],
    -1
  );
function mu(e, t, n, s, r, o) {
  return (
    re(),
    ce("div", Zc, [
      D("div", Gc, [
        D("img", { src: n.img }, null, 8, eu),
        n.tag == " "
          ? (re(), ce("div", tu, be(n.tag), 1))
          : (re(),
            ce(
              me,
              { key: 1 },
              [
                n.tag == "Hot"
                  ? (re(),
                    ce(
                      "div",
                      {
                        key: 0,
                        class: "tag",
                        style: Ve([
                          { padding: "5px 10px 5px 10px" },
                          { backgroundColor: r.tagColor[1] },
                        ]),
                      },
                      be(n.tag),
                      5
                    ))
                  : n.tag == "Sale"
                  ? (re(),
                    ce(
                      "div",
                      {
                        key: 1,
                        class: "tag",
                        style: Ve([
                          { padding: "5px 10px 5px 10px" },
                          { backgroundColor: r.tagColor[2] },
                        ]),
                      },
                      be(n.tag),
                      5
                    ))
                  : (re(),
                    ce(
                      "div",
                      {
                        key: 2,
                        class: "tag",
                        style: Ve([
                          { padding: "5px 10px 5px 10px" },
                          { backgroundColor: r.tagColor[0] },
                        ]),
                      },
                      be(n.tag),
                      5
                    )),
              ],
              64
            )),
      ]),
      D("div", nu, [
        D("div", su, [
          D("div", ru, be(n.type), 1),
          D("div", ou, be(n.title), 1),
          D("div", iu, [
            (re(!0),
            ce(
              me,
              null,
              St(n.rating, (i) => (re(), ce("i", lu))),
              256
            )),
            (re(!0),
            ce(
              me,
              null,
              St(5 - n.rating, (i) => (re(), ce("i", cu))),
              256
            )),
            D("span", uu, "(" + be(n.rating.toFixed(1)) + ")", 1),
          ]),
          D("div", au, be(n.description), 1),
        ]),
        D("div", fu, [
          D("div", du, [
            D("div", hu, "$" + be(n.disPrice), 1),
            D("div", pu, [D("s", null, "$" + be(n.sellPrice), 1)]),
          ]),
          gu,
        ]),
      ]),
    ])
  );
}
const _u = Nt(Xc, [["render", mu]]),
  yu = {
    components: { Category: Oc, Promotion: Dc, Menus: Jc, Products: _u },
    computed: {
      ...xt(Et, ["category"]),
      ...xt(Et, ["promotion"]),
      ...xt(Et, ["products"]),
      ...xt(Et, ["productCountsByCategory"]),
    },
    data() {
      return { title: ["Featured Categories", "Popular Products"] };
    },
  },
  bu = { class: "container", style: { "max-width": "1400px", margin: "auto" } },
  vu = {
    class: "category_container",
    style: {
      display: "flex",
      "justify-content": "space-between",
      gap: "20px",
      "margin-bottom": "75px",
    },
  },
  xu = {
    class: "promotion_container",
    style: {
      display: "grid",
      "grid-template-columns": "repeat(3,1fr)",
      gap: "24px",
    },
  },
  Eu = {
    class: "product_container",
    style: {
      display: "grid",
      "grid-template-columns": "repeat(5,1fr)",
      gap: "24px",
    },
  };
function Pu(e, t, n, s, r, o) {
  const i = Dt("Menus"),
    c = Dt("Category"),
    l = Dt("Promotion"),
    d = Dt("Products");
  return (
    re(),
    ce("div", bu, [
      ve(i, { title: r.title[0] }, null, 8, ["title"]),
      D("div", vu, [
        (re(!0),
        ce(
          me,
          null,
          St(
            e.category,
            (a) => (
              re(),
              Dn(
                c,
                {
                  img: a.img,
                  name: a.name,
                  num_item: a.num_item,
                  bg_color: a.bg_color,
                },
                null,
                8,
                ["img", "name", "num_item", "bg_color"]
              )
            )
          ),
          256
        )),
      ]),
      D("div", xu, [
        (re(!0),
        ce(
          me,
          null,
          St(
            e.promotion,
            (a) => (
              re(),
              Dn(
                l,
                {
                  img: a.img,
                  title: a.title,
                  bg_color: a.bg_color,
                  btn_color: a.btn_color,
                },
                null,
                8,
                ["img", "title", "bg_color", "btn_color"]
              )
            )
          ),
          256
        )),
      ]),
      ve(i, { title: r.title[1] }, null, 8, ["title"]),
      D("div", Eu, [
        (re(!0),
        ce(
          me,
          null,
          St(
            e.products,
            (a) => (
              re(),
              Dn(
                d,
                {
                  img: a.image,
                  tag: a.tag,
                  type: a.type,
                  title: a.name,
                  rating: a.rate,
                  description: a.description,
                  disPrice: a.discountPrice,
                  sellPrice: a.sellPrice,
                },
                null,
                8,
                [
                  "img",
                  "tag",
                  "type",
                  "title",
                  "rating",
                  "description",
                  "disPrice",
                  "sellPrice",
                ]
              )
            )
          ),
          256
        )),
      ]),
    ])
  );
}
const wu = Nt(yu, [["render", Pu]]);
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const bt = typeof window < "u";
function Cu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const X = Object.assign;
function Wn(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Ne(r) ? r.map(e) : e(r);
  }
  return n;
}
const Vt = () => {},
  Ne = Array.isArray,
  Ru = /\/$/,
  Su = (e) => e.replace(Ru, "");
function zn(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, c > -1 ? c : t.length)),
      (r = e(o))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = Tu(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i }
  );
}
function Ou(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function hr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Au(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Tt(t.matched[s], n.matched[r]) &&
    Mo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Tt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Mo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Fu(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t) {
  return Ne(e) ? pr(e, t) : Ne(t) ? pr(t, e) : e === t;
}
function pr(e, t) {
  return Ne(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Tu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let o = n.length - 1,
    i,
    c;
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== "."))
      if (c === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  );
}
var nn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(nn || (nn = {}));
var Qt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Qt || (Qt = {}));
function Mu(e) {
  if (!e)
    if (bt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Su(e);
}
const Iu = /^[^#]+#/;
function $u(e, t) {
  return e.replace(Iu, "#") + t;
}
function ju(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const $n = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Nu(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = ju(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function gr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ls = new Map();
function Hu(e, t) {
  ls.set(e, t);
}
function Bu(e) {
  const t = ls.get(e);
  return ls.delete(e), t;
}
let ku = () => location.protocol + "//" + location.host;
function Io(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let c = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(c);
    return l[0] !== "/" && (l = "/" + l), hr(l, "");
  }
  return hr(n, e) + s + r;
}
function Lu(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const c = ({ state: g }) => {
    const b = Io(e, location),
      S = n.value,
      A = t.value;
    let B = 0;
    if (g) {
      if (((n.value = b), (t.value = g), i && i === S)) {
        i = null;
        return;
      }
      B = A ? g.position - A.position : 0;
    } else s(b);
    r.forEach((T) => {
      T(n.value, S, {
        delta: B,
        type: nn.pop,
        direction: B ? (B > 0 ? Qt.forward : Qt.back) : Qt.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function d(g) {
    r.push(g);
    const b = () => {
      const S = r.indexOf(g);
      S > -1 && r.splice(S, 1);
    };
    return o.push(b), b;
  }
  function a() {
    const { history: g } = window;
    g.state && g.replaceState(X({}, g.state, { scroll: $n() }), "");
  }
  function p() {
    for (const g of o) g();
    (o = []),
      window.removeEventListener("popstate", c),
      window.removeEventListener("beforeunload", a);
  }
  return (
    window.addEventListener("popstate", c),
    window.addEventListener("beforeunload", a, { passive: !0 }),
    { pauseListeners: l, listen: d, destroy: p }
  );
}
function mr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? $n() : null,
  };
}
function Du(e) {
  const { history: t, location: n } = window,
    s = { value: Io(e, n) },
    r = { value: t.state };
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, d, a) {
    const p = e.indexOf("#"),
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l
          : ku() + e + l;
    try {
      t[a ? "replaceState" : "pushState"](d, "", g), (r.value = d);
    } catch (b) {
      console.error(b), n[a ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const a = X({}, t.state, mr(r.value.back, l, r.value.forward, !0), d, {
      position: r.value.position,
    });
    o(l, a, !0), (s.value = l);
  }
  function c(l, d) {
    const a = X({}, r.value, t.state, { forward: l, scroll: $n() });
    o(a.current, a, !0);
    const p = X({}, mr(s.value, l, null), { position: a.position + 1 }, d);
    o(l, p, !1), (s.value = l);
  }
  return { location: s, state: r, push: c, replace: i };
}
function Ku(e) {
  e = Mu(e);
  const t = Du(e),
    n = Lu(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = X(
    { location: "", base: e, go: s, createHref: $u.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Uu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function $o(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ze = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  jo = Symbol("");
var _r;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(_r || (_r = {}));
function Mt(e, t) {
  return X(new Error(), { type: e, [jo]: !0 }, t);
}
function ze(e, t) {
  return e instanceof Error && jo in e && (t == null || !!(e.type & t));
}
const yr = "[^/]+?",
  Wu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  zu = /[.+*?^${}()[\]/\\]/g;
function qu(e, t) {
  const n = X({}, Wu, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const d of e) {
    const a = d.length ? [] : [90];
    n.strict && !d.length && (r += "/");
    for (let p = 0; p < d.length; p++) {
      const g = d[p];
      let b = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        p || (r += "/"), (r += g.value.replace(zu, "\\$&")), (b += 40);
      else if (g.type === 1) {
        const { value: S, repeatable: A, optional: B, regexp: T } = g;
        o.push({ name: S, repeatable: A, optional: B });
        const j = T || yr;
        if (j !== yr) {
          b += 10;
          try {
            new RegExp(`(${j})`);
          } catch (N) {
            throw new Error(
              `Invalid custom RegExp for param "${S}" (${j}): ` + N.message
            );
          }
        }
        let U = A ? `((?:${j})(?:/(?:${j}))*)` : `(${j})`;
        p || (U = B && d.length < 2 ? `(?:/${U})` : "/" + U),
          B && (U += "?"),
          (r += U),
          (b += 20),
          B && (b += -8),
          A && (b += -20),
          j === ".*" && (b += -50);
      }
      a.push(b);
    }
    s.push(a);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function c(d) {
    const a = d.match(i),
      p = {};
    if (!a) return null;
    for (let g = 1; g < a.length; g++) {
      const b = a[g] || "",
        S = o[g - 1];
      p[S.name] = b && S.repeatable ? b.split("/") : b;
    }
    return p;
  }
  function l(d) {
    let a = "",
      p = !1;
    for (const g of e) {
      (!p || !a.endsWith("/")) && (a += "/"), (p = !1);
      for (const b of g)
        if (b.type === 0) a += b.value;
        else if (b.type === 1) {
          const { value: S, repeatable: A, optional: B } = b,
            T = S in d ? d[S] : "";
          if (Ne(T) && !A)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`
            );
          const j = Ne(T) ? T.join("/") : T;
          if (!j)
            if (B)
              g.length < 2 &&
                (a.endsWith("/") ? (a = a.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${S}"`);
          a += j;
        }
    }
    return a || "/";
  }
  return { re: i, score: s, keys: o, parse: c, stringify: l };
}
function Vu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Qu(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = Vu(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (br(s)) return 1;
    if (br(r)) return -1;
  }
  return r.length - s.length;
}
function br(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Yu = { type: 0, value: "" },
  Ju = /[a-zA-Z0-9_]/;
function Xu(e) {
  if (!e) return [[]];
  if (e === "/") return [[Yu]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(b) {
    throw new Error(`ERR (${n})/"${d}": ${b}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let c = 0,
    l,
    d = "",
    a = "";
  function p() {
    d &&
      (n === 0
        ? o.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: d,
            regexp: a,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (d = ""));
  }
  function g() {
    d += l;
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (d && p(), i()) : l === ":" ? (p(), (n = 1)) : g();
        break;
      case 4:
        g(), (n = s);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Ju.test(l)
          ? g()
          : (p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")"
          ? a[a.length - 1] == "\\"
            ? (a = a.slice(0, -1) + l)
            : (n = 3)
          : (a += l);
        break;
      case 3:
        p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--, (a = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), p(), i(), r;
}
function Zu(e, t, n) {
  const s = qu(Xu(e.path), n),
    r = X(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Gu(e, t) {
  const n = [],
    s = new Map();
  t = Er({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(a) {
    return s.get(a);
  }
  function o(a, p, g) {
    const b = !g,
      S = ea(a);
    S.aliasOf = g && g.record;
    const A = Er(t, a),
      B = [S];
    if ("alias" in a) {
      const U = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const N of U)
        B.push(
          X({}, S, {
            components: g ? g.record.components : S.components,
            path: N,
            aliasOf: g ? g.record : S,
          })
        );
    }
    let T, j;
    for (const U of B) {
      const { path: N } = U;
      if (p && N[0] !== "/") {
        const G = p.record.path,
          de = G[G.length - 1] === "/" ? "" : "/";
        U.path = p.record.path + (N && de + N);
      }
      if (
        ((T = Zu(U, p, A)),
        g
          ? g.alias.push(T)
          : ((j = j || T),
            j !== T && j.alias.push(T),
            b && a.name && !xr(T) && i(a.name)),
        S.children)
      ) {
        const G = S.children;
        for (let de = 0; de < G.length; de++) o(G[de], T, g && g.children[de]);
      }
      (g = g || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          l(T);
    }
    return j
      ? () => {
          i(j);
        }
      : Vt;
  }
  function i(a) {
    if ($o(a)) {
      const p = s.get(a);
      p &&
        (s.delete(a),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i));
    } else {
      const p = n.indexOf(a);
      p > -1 &&
        (n.splice(p, 1),
        a.record.name && s.delete(a.record.name),
        a.children.forEach(i),
        a.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(a) {
    let p = 0;
    for (
      ;
      p < n.length &&
      Qu(a, n[p]) >= 0 &&
      (a.record.path !== n[p].record.path || !No(a, n[p]));

    )
      p++;
    n.splice(p, 0, a), a.record.name && !xr(a) && s.set(a.record.name, a);
  }
  function d(a, p) {
    let g,
      b = {},
      S,
      A;
    if ("name" in a && a.name) {
      if (((g = s.get(a.name)), !g)) throw Mt(1, { location: a });
      (A = g.record.name),
        (b = X(
          vr(
            p.params,
            g.keys.filter((j) => !j.optional).map((j) => j.name)
          ),
          a.params &&
            vr(
              a.params,
              g.keys.map((j) => j.name)
            )
        )),
        (S = g.stringify(b));
    } else if ("path" in a)
      (S = a.path),
        (g = n.find((j) => j.re.test(S))),
        g && ((b = g.parse(S)), (A = g.record.name));
    else {
      if (((g = p.name ? s.get(p.name) : n.find((j) => j.re.test(p.path))), !g))
        throw Mt(1, { location: a, currentLocation: p });
      (A = g.record.name),
        (b = X({}, p.params, a.params)),
        (S = g.stringify(b));
    }
    const B = [];
    let T = g;
    for (; T; ) B.unshift(T.record), (T = T.parent);
    return { name: A, path: S, params: b, matched: B, meta: na(B) };
  }
  return (
    e.forEach((a) => o(a)),
    {
      addRoute: o,
      resolve: d,
      removeRoute: i,
      getRoutes: c,
      getRecordMatcher: r,
    }
  );
}
function vr(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function ea(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ta(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function ta(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function xr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function na(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function Er(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function No(e, t) {
  return t.children.some((n) => n === e || No(e, n));
}
const Ho = /#/g,
  sa = /&/g,
  ra = /\//g,
  oa = /=/g,
  ia = /\?/g,
  Bo = /\+/g,
  la = /%5B/g,
  ca = /%5D/g,
  ko = /%5E/g,
  ua = /%60/g,
  Lo = /%7B/g,
  aa = /%7C/g,
  Do = /%7D/g,
  fa = /%20/g;
function Fs(e) {
  return encodeURI("" + e)
    .replace(aa, "|")
    .replace(la, "[")
    .replace(ca, "]");
}
function da(e) {
  return Fs(e).replace(Lo, "{").replace(Do, "}").replace(ko, "^");
}
function cs(e) {
  return Fs(e)
    .replace(Bo, "%2B")
    .replace(fa, "+")
    .replace(Ho, "%23")
    .replace(sa, "%26")
    .replace(ua, "`")
    .replace(Lo, "{")
    .replace(Do, "}")
    .replace(ko, "^");
}
function ha(e) {
  return cs(e).replace(oa, "%3D");
}
function pa(e) {
  return Fs(e).replace(Ho, "%23").replace(ia, "%3F");
}
function ga(e) {
  return e == null ? "" : pa(e).replace(ra, "%2F");
}
function vn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function ma(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Bo, " "),
      i = o.indexOf("="),
      c = vn(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : vn(o.slice(i + 1));
    if (c in t) {
      let d = t[c];
      Ne(d) || (d = t[c] = [d]), d.push(l);
    } else t[c] = l;
  }
  return t;
}
function Pr(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = ha(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ne(s) ? s.map((o) => o && cs(o)) : [s && cs(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function _a(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Ne(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const ya = Symbol(""),
  wr = Symbol(""),
  Ts = Symbol(""),
  Ko = Symbol(""),
  us = Symbol("");
function kt() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function tt(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((i, c) => {
      const l = (p) => {
          p === !1
            ? c(Mt(4, { from: n, to: t }))
            : p instanceof Error
            ? c(p)
            : Uu(p)
            ? c(Mt(2, { from: t, to: p }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof p == "function" &&
                o.push(p),
              i());
        },
        d = e.call(s && s.instances[r], t, n, l);
      let a = Promise.resolve(d);
      e.length < 3 && (a = a.then(l)), a.catch((p) => c(p));
    });
}
function qn(e, t, n, s) {
  const r = [];
  for (const o of e)
    for (const i in o.components) {
      let c = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (ba(c)) {
          const d = (c.__vccOpts || c)[t];
          d && r.push(tt(d, n, s, o, i));
        } else {
          let l = c();
          r.push(() =>
            l.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const a = Cu(d) ? d.default : d;
              o.components[i] = a;
              const g = (a.__vccOpts || a)[t];
              return g && tt(g, n, s, o, i)();
            })
          );
        }
    }
  return r;
}
function ba(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Cr(e) {
  const t = Ke(Ts),
    n = Ke(Ko),
    s = Ae(() => t.resolve(Ct(e.to))),
    r = Ae(() => {
      const { matched: l } = s.value,
        { length: d } = l,
        a = l[d - 1],
        p = n.matched;
      if (!a || !p.length) return -1;
      const g = p.findIndex(Tt.bind(null, a));
      if (g > -1) return g;
      const b = Rr(l[d - 2]);
      return d > 1 && Rr(a) === b && p[p.length - 1].path !== b
        ? p.findIndex(Tt.bind(null, l[d - 2]))
        : g;
    }),
    o = Ae(() => r.value > -1 && Pa(n.params, s.value.params)),
    i = Ae(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Mo(n.params, s.value.params)
    );
  function c(l = {}) {
    return Ea(l)
      ? t[Ct(e.replace) ? "replace" : "push"](Ct(e.to)).catch(Vt)
      : Promise.resolve();
  }
  return {
    route: s,
    href: Ae(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: c,
  };
}
const va = uo({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Cr,
    setup(e, { slots: t }) {
      const n = sn(Cr(e)),
        { options: s } = Ke(Ts),
        r = Ae(() => ({
          [Sr(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Sr(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : So(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o
            );
      };
    },
  }),
  xa = va;
function Ea(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Pa(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Ne(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function Rr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Sr = (e, t, n) => e ?? t ?? n,
  wa = uo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ke(us),
        r = Ae(() => e.route || s.value),
        o = Ke(wr, 0),
        i = Ae(() => {
          let d = Ct(o);
          const { matched: a } = r.value;
          let p;
          for (; (p = a[d]) && !p.components; ) d++;
          return d;
        }),
        c = Ae(() => r.value.matched[i.value]);
      hn(
        wr,
        Ae(() => i.value + 1)
      ),
        hn(ya, c),
        hn(us, r);
      const l = xs();
      return (
        Ut(
          () => [l.value, c.value, e.name],
          ([d, a, p], [g, b, S]) => {
            a &&
              ((a.instances[p] = d),
              b &&
                b !== a &&
                d &&
                d === g &&
                (a.leaveGuards.size || (a.leaveGuards = b.leaveGuards),
                a.updateGuards.size || (a.updateGuards = b.updateGuards))),
              d &&
                a &&
                (!b || !Tt(a, b) || !g) &&
                (a.enterCallbacks[p] || []).forEach((A) => A(d));
          },
          { flush: "post" }
        ),
        () => {
          const d = r.value,
            a = e.name,
            p = c.value,
            g = p && p.components[a];
          if (!g) return Or(n.default, { Component: g, route: d });
          const b = p.props[a],
            S = b
              ? b === !0
                ? d.params
                : typeof b == "function"
                ? b(d)
                : b
              : null,
            B = So(
              g,
              X({}, S, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[a] = null);
                },
                ref: l,
              })
            );
          return Or(n.default, { Component: B, route: d }) || B;
        }
      );
    },
  });
function Or(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Ca = wa;
function Ra(e) {
  const t = Gu(e.routes, e),
    n = e.parseQuery || ma,
    s = e.stringifyQuery || Pr,
    r = e.history,
    o = kt(),
    i = kt(),
    c = kt(),
    l = Ri(Ze);
  let d = Ze;
  bt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const a = Wn.bind(null, (_) => "" + _),
    p = Wn.bind(null, ga),
    g = Wn.bind(null, vn);
  function b(_, R) {
    let w, F;
    return (
      $o(_) ? ((w = t.getRecordMatcher(_)), (F = R)) : (F = _), t.addRoute(F, w)
    );
  }
  function S(_) {
    const R = t.getRecordMatcher(_);
    R && t.removeRoute(R);
  }
  function A() {
    return t.getRoutes().map((_) => _.record);
  }
  function B(_) {
    return !!t.getRecordMatcher(_);
  }
  function T(_, R) {
    if (((R = X({}, R || l.value)), typeof _ == "string")) {
      const h = zn(n, _, R.path),
        m = t.resolve({ path: h.path }, R),
        y = r.createHref(h.fullPath);
      return X(h, m, {
        params: g(m.params),
        hash: vn(h.hash),
        redirectedFrom: void 0,
        href: y,
      });
    }
    let w;
    if ("path" in _) w = X({}, _, { path: zn(n, _.path, R.path).path });
    else {
      const h = X({}, _.params);
      for (const m in h) h[m] == null && delete h[m];
      (w = X({}, _, { params: p(h) })), (R.params = p(R.params));
    }
    const F = t.resolve(w, R),
      J = _.hash || "";
    F.params = a(g(F.params));
    const u = Ou(s, X({}, _, { hash: da(J), path: F.path })),
      f = r.createHref(u);
    return X(
      { fullPath: u, hash: J, query: s === Pr ? _a(_.query) : _.query || {} },
      F,
      { redirectedFrom: void 0, href: f }
    );
  }
  function j(_) {
    return typeof _ == "string" ? zn(n, _, l.value.path) : X({}, _);
  }
  function U(_, R) {
    if (d !== _) return Mt(8, { from: R, to: _ });
  }
  function N(_) {
    return he(_);
  }
  function G(_) {
    return N(X(j(_), { replace: !0 }));
  }
  function de(_) {
    const R = _.matched[_.matched.length - 1];
    if (R && R.redirect) {
      const { redirect: w } = R;
      let F = typeof w == "function" ? w(_) : w;
      return (
        typeof F == "string" &&
          ((F = F.includes("?") || F.includes("#") ? (F = j(F)) : { path: F }),
          (F.params = {})),
        X(
          { query: _.query, hash: _.hash, params: "path" in F ? {} : _.params },
          F
        )
      );
    }
  }
  function he(_, R) {
    const w = (d = T(_)),
      F = l.value,
      J = _.state,
      u = _.force,
      f = _.replace === !0,
      h = de(w);
    if (h)
      return he(
        X(j(h), {
          state: typeof h == "object" ? X({}, J, h.state) : J,
          force: u,
          replace: f,
        }),
        R || w
      );
    const m = w;
    m.redirectedFrom = R;
    let y;
    return (
      !u && Au(s, F, w) && ((y = Mt(16, { to: m, from: F })), He(F, F, !0, !1)),
      (y ? Promise.resolve(y) : oe(m, F))
        .catch((v) => (ze(v) ? (ze(v, 2) ? v : Je(v)) : Y(v, m, F)))
        .then((v) => {
          if (v) {
            if (ze(v, 2))
              return he(
                X({ replace: f }, j(v.to), {
                  state: typeof v.to == "object" ? X({}, J, v.to.state) : J,
                  force: u,
                }),
                R || m
              );
          } else v = we(m, F, !0, f, J);
          return pe(m, F, v), v;
        })
    );
  }
  function V(_, R) {
    const w = U(_, R);
    return w ? Promise.reject(w) : Promise.resolve();
  }
  function W(_) {
    const R = gt.values().next().value;
    return R && typeof R.runWithContext == "function"
      ? R.runWithContext(_)
      : _();
  }
  function oe(_, R) {
    let w;
    const [F, J, u] = Sa(_, R);
    w = qn(F.reverse(), "beforeRouteLeave", _, R);
    for (const h of F)
      h.leaveGuards.forEach((m) => {
        w.push(tt(m, _, R));
      });
    const f = V.bind(null, _, R);
    return (
      w.push(f),
      ge(w)
        .then(() => {
          w = [];
          for (const h of o.list()) w.push(tt(h, _, R));
          return w.push(f), ge(w);
        })
        .then(() => {
          w = qn(J, "beforeRouteUpdate", _, R);
          for (const h of J)
            h.updateGuards.forEach((m) => {
              w.push(tt(m, _, R));
            });
          return w.push(f), ge(w);
        })
        .then(() => {
          w = [];
          for (const h of u)
            if (h.beforeEnter)
              if (Ne(h.beforeEnter))
                for (const m of h.beforeEnter) w.push(tt(m, _, R));
              else w.push(tt(h.beforeEnter, _, R));
          return w.push(f), ge(w);
        })
        .then(
          () => (
            _.matched.forEach((h) => (h.enterCallbacks = {})),
            (w = qn(u, "beforeRouteEnter", _, R)),
            w.push(f),
            ge(w)
          )
        )
        .then(() => {
          w = [];
          for (const h of i.list()) w.push(tt(h, _, R));
          return w.push(f), ge(w);
        })
        .catch((h) => (ze(h, 8) ? h : Promise.reject(h)))
    );
  }
  function pe(_, R, w) {
    c.list().forEach((F) => W(() => F(_, R, w)));
  }
  function we(_, R, w, F, J) {
    const u = U(_, R);
    if (u) return u;
    const f = R === Ze,
      h = bt ? history.state : {};
    w &&
      (F || f
        ? r.replace(_.fullPath, X({ scroll: f && h && h.scroll }, J))
        : r.push(_.fullPath, J)),
      (l.value = _),
      He(_, R, w, f),
      Je();
  }
  let Se;
  function it() {
    Se ||
      (Se = r.listen((_, R, w) => {
        const F = T(_),
          J = de(F);
        if (J) {
          he(X(J, { replace: !0 }), F).catch(Vt);
          return;
        }
        d = F;
        const u = l.value;
        bt && Hu(gr(u.fullPath, w.delta), $n()),
          oe(F, u)
            .catch((f) =>
              ze(f, 12)
                ? f
                : ze(f, 2)
                ? (he(f.to, F)
                    .then((h) => {
                      ze(h, 20) &&
                        !w.delta &&
                        w.type === nn.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Vt),
                  Promise.reject())
                : (w.delta && r.go(-w.delta, !1), Y(f, F, u))
            )
            .then((f) => {
              (f = f || we(F, u, !1)),
                f &&
                  (w.delta && !ze(f, 8)
                    ? r.go(-w.delta, !1)
                    : w.type === nn.pop && ze(f, 20) && r.go(-1, !1)),
                pe(F, u, f);
            })
            .catch(Vt);
      }));
  }
  let Oe = kt(),
    Q = kt(),
    ee;
  function Y(_, R, w) {
    Je(_);
    const F = Q.list();
    return (
      F.length ? F.forEach((J) => J(_, R, w)) : console.error(_),
      Promise.reject(_)
    );
  }
  function We() {
    return ee && l.value !== Ze
      ? Promise.resolve()
      : new Promise((_, R) => {
          Oe.add([_, R]);
        });
  }
  function Je(_) {
    return (
      ee ||
        ((ee = !_),
        it(),
        Oe.list().forEach(([R, w]) => (_ ? w(_) : R())),
        Oe.reset()),
      _
    );
  }
  function He(_, R, w, F) {
    const { scrollBehavior: J } = e;
    if (!bt || !J) return Promise.resolve();
    const u =
      (!w && Bu(gr(_.fullPath, 0))) ||
      ((F || !w) && history.state && history.state.scroll) ||
      null;
    return Ps()
      .then(() => J(_, R, u))
      .then((f) => f && Nu(f))
      .catch((f) => Y(f, _, R));
  }
  const xe = (_) => r.go(_);
  let pt;
  const gt = new Set(),
    jn = {
      currentRoute: l,
      listening: !0,
      addRoute: b,
      removeRoute: S,
      hasRoute: B,
      getRoutes: A,
      resolve: T,
      options: e,
      push: N,
      replace: G,
      go: xe,
      back: () => xe(-1),
      forward: () => xe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: Q.add,
      isReady: We,
      install(_) {
        const R = this;
        _.component("RouterLink", xa),
          _.component("RouterView", Ca),
          (_.config.globalProperties.$router = R),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ct(l),
          }),
          bt &&
            !pt &&
            l.value === Ze &&
            ((pt = !0), N(r.location).catch((J) => {}));
        const w = {};
        for (const J in Ze)
          Object.defineProperty(w, J, {
            get: () => l.value[J],
            enumerable: !0,
          });
        _.provide(Ts, R), _.provide(Ko, Qr(w)), _.provide(us, l);
        const F = _.unmount;
        gt.add(_),
          (_.unmount = function () {
            gt.delete(_),
              gt.size < 1 &&
                ((d = Ze),
                Se && Se(),
                (Se = null),
                (l.value = Ze),
                (pt = !1),
                (ee = !1)),
              F();
          });
      },
    };
  function ge(_) {
    return _.reduce((R, w) => R.then(() => W(w)), Promise.resolve());
  }
  return jn;
}
function Sa(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Tt(d, c)) ? s.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((d) => Tt(d, l)) || r.push(l));
  }
  return [n, s, r];
}
Ra({ history: Ku("/"), routes: [] });
const Uo = fc(wu);
Uo.use(pc());
Uo.mount("#app");
