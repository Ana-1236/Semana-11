class Ri extends EventTarget {
  constructor() {
    super(...arguments), this.eventBuffer = [], this.handledTypes = [];
  }
  on(t, r) {
    const n = r;
    return this.addEventListener(t, n), this.handledTypes.push(t), this.flush(t), () => this.off(t, n);
  }
  once(t, r) {
    this.addEventListener(t, r, { once: !0 });
  }
  off(t, r) {
    this.removeEventListener(t, r);
    const n = this.handledTypes.indexOf(t, 0);
    n > -1 && this.handledTypes.splice(n, 1);
  }
  emit(t, r) {
    const n = new CustomEvent(t, { detail: r });
    this.handledTypes.includes(t) || this.eventBuffer.push(n), this.dispatchEvent(n);
  }
  emitUnsafe({ type: t, data: r }) {
    this.emit(t, r);
  }
  // Communication with server via eventbus
  send(t, r) {
    const n = new CustomEvent("copilot-send", { detail: { command: t, data: r } });
    this.dispatchEvent(n);
  }
  // Listeners for Copilot itself
  onSend(t) {
    this.on("copilot-send", t);
  }
  offSend(t) {
    this.off("copilot-send", t);
  }
  flush(t) {
    const r = [];
    this.eventBuffer.filter((n) => n.type === t).forEach((n) => {
      this.dispatchEvent(n), r.push(n);
    }), this.eventBuffer = this.eventBuffer.filter((n) => !r.includes(n));
  }
}
var ji = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, r) {
    return "Cannot apply '" + t + "' to '" + r.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, r) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + r;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, r) {
    return "the entry '" + t + "' does not exist in the observable map '" + r + "'";
  },
  26: "please specify a property",
  27: function(t, r) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + r + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, r) {
    return "Cycle detected in computation " + t + ": " + r;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, Li = process.env.NODE_ENV !== "production" ? ji : {};
function f(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : Li[e];
    throw typeof i == "function" && (i = i.apply(null, r)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Ii = {};
function pn() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Ii;
}
var _n = Object.assign, yt = Object.getOwnPropertyDescriptor, G = Object.defineProperty, Vt = Object.prototype, Et = [];
Object.freeze(Et);
var dr = {};
Object.freeze(dr);
var Ui = typeof Proxy < "u", Mi = /* @__PURE__ */ Object.toString();
function gn() {
  Ui || f(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Ue(e) {
  process.env.NODE_ENV !== "production" && d.verifyProxies && f("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function U() {
  return ++d.mobxGuid;
}
function fr(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var De = function() {
};
function A(e) {
  return typeof e == "function";
}
function fe(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Tt(e) {
  return e !== null && typeof e == "object";
}
function x(e) {
  if (!Tt(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Mi;
}
function bn(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Rt(e, t, r) {
  G(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function mn(e, t, r) {
  G(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function Ae(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return Tt(n) && n[r] === !0;
  };
}
function Te(e) {
  return e instanceof Map;
}
function tt(e) {
  return e instanceof Set;
}
var yn = typeof Object.getOwnPropertySymbols < "u";
function ki(e) {
  var t = Object.keys(e);
  if (!yn)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return Vt.propertyIsEnumerable.call(e, n);
  })) : t;
}
var Fe = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : yn ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Qt(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function En(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function B(e, t) {
  return Vt.hasOwnProperty.call(e, t);
}
var Bi = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Fe(t).forEach(function(n) {
    r[n] = yt(t, n);
  }), r;
};
function Vr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hi(n.key), n);
  }
}
function vr(e, t, r) {
  return t && Vr(e.prototype, t), r && Vr(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ne.apply(this, arguments);
}
function An(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, er(e, t);
}
function er(e, t) {
  return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, er(e, t);
}
function pt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tr(e, t);
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Pe(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = zi(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hi(e) {
  var t = Ki(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var J = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function W(e) {
  function t(r, n) {
    if (rt(n))
      return e.decorate_20223_(r, n);
    Re(r, n, e);
  }
  return Object.assign(t, e);
}
function Re(e, t, r) {
  if (B(e, J) || Rt(e, J, ne({}, e[J])), process.env.NODE_ENV !== "production" && At(r) && !B(e[J], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    f("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  qi(e, r, t), At(r) || (e[J][t] = r);
}
function qi(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !At(t) && B(e[J], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), i = e[J][r].annotationType_, a = t.annotationType_;
    f("Cannot apply '@" + a + "' to '" + n + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function rt(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function jt(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && f("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var _ = /* @__PURE__ */ Symbol("mobx administration"), nt = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + U() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = b.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return Mn(this);
  }, t.reportChanged = function() {
    j(), kn(this), L();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), pr = /* @__PURE__ */ Ae("Atom", nt);
function On(e, t, r) {
  t === void 0 && (t = De), r === void 0 && (r = De);
  var n = new nt(e);
  return t !== De && ao(n, t), r !== De && Gn(n, r), n;
}
function Fi(e, t) {
  return e === t;
}
function Gi(e, t) {
  return wr(e, t);
}
function Wi(e, t) {
  return wr(e, t, 1);
}
function Ji(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ce = {
  identity: Fi,
  structural: Gi,
  default: Ji,
  shallow: Wi
};
function ve(e, t, r) {
  return Xe(e) ? e : Array.isArray(e) ? w.array(e, {
    name: r
  }) : x(e) ? w.object(e, void 0, {
    name: r
  }) : Te(e) ? w.map(e, {
    name: r
  }) : tt(e) ? w.set(e, {
    name: r
  }) : typeof e == "function" && !at(e) && !Je(e) ? bn(e) ? Ve(e) : We(r, e) : e;
}
function Xi(e, t, r) {
  if (e == null || be(e) || lt(e) || Q(e) || je(e))
    return e;
  if (Array.isArray(e))
    return w.array(e, {
      name: r,
      deep: !1
    });
  if (x(e))
    return w.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (Te(e))
    return w.map(e, {
      name: r,
      deep: !1
    });
  if (tt(e))
    return w.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && f("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function Lt(e) {
  return e;
}
function Zi(e, t) {
  return process.env.NODE_ENV !== "production" && Xe(e) && f("observable.struct should not be used with observable values"), wr(e, t) ? t : e;
}
var Yi = "override";
function At(e) {
  return e.annotationType_ === Yi;
}
function it(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Qi,
    extend_: ea,
    decorate_20223_: ta
  };
}
function Qi(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (at(r.value))
    return 1;
  var a = wn(e, this, t, r, !1);
  return G(n, t, a), 2;
}
function ea(e, t, r, n) {
  var i = wn(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function ta(e, t) {
  process.env.NODE_ENV !== "production" && jt(t, ["method", "field"]);
  var r = t.kind, n = t.name, i = t.addInitializer, a = this, o = function(c) {
    var u, h, v, p;
    return pe((u = (h = a.options_) == null ? void 0 : h.name) != null ? u : n.toString(), c, (v = (p = a.options_) == null ? void 0 : p.autoAction) != null ? v : !1);
  };
  if (r == "field") {
    i(function() {
      Re(this, n, a);
    });
    return;
  }
  if (r == "method") {
    var l;
    return at(e) || (e = o(e)), (l = this.options_) != null && l.bound && i(function() {
      var s = this, c = s[n].bind(s);
      c.isMobxAction = !0, s[n] = c;
    }), e;
  }
  f("Cannot apply '" + a.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + a.annotationType_ + "' can only be used on properties with a function value."));
}
function ra(e, t, r, n) {
  var i = t.annotationType_, a = n.value;
  process.env.NODE_ENV !== "production" && !A(a) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function wn(e, t, r, n, i) {
  var a, o, l, s, c, u, h;
  i === void 0 && (i = d.safeDescriptors), ra(e, t, r, n);
  var v = n.value;
  if ((a = t.options_) != null && a.bound) {
    var p;
    v = v.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: pe(
      (o = (l = t.options_) == null ? void 0 : l.name) != null ? o : r.toString(),
      v,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (u = t.options_) != null && u.bound ? (h = e.proxy_) != null ? h : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function Sn(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: na,
    extend_: ia,
    decorate_20223_: aa
  };
}
function na(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!B(e.target_, t) || !Je(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Je(r.value))
    return 1;
  var a = Nn(e, this, t, r, !1, !1);
  return G(n, t, a), 2;
}
function ia(e, t, r, n) {
  var i, a = Nn(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function aa(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && jt(t, ["method"]);
  var n = t.name, i = t.addInitializer;
  return Je(e) || (e = Ve(e)), (r = this.options_) != null && r.bound && i(function() {
    var a = this, o = a[n].bind(a);
    o.isMobXFlow = !0, a[n] = o;
  }), e;
}
function oa(e, t, r, n) {
  var i = t.annotationType_, a = n.value;
  process.env.NODE_ENV !== "production" && !A(a) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function Nn(e, t, r, n, i, a) {
  a === void 0 && (a = d.safeDescriptors), oa(e, t, r, n);
  var o = n.value;
  if (Je(o) || (o = Ve(o)), i) {
    var l;
    o = o.bind((l = e.proxy_) != null ? l : e.target_), o.isMobXFlow = !0;
  }
  return {
    value: o,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: a ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !a
  };
}
function _r(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: sa,
    extend_: la,
    decorate_20223_: ca
  };
}
function sa(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function la(e, t, r, n) {
  return ua(e, this, t, r), e.defineComputedProperty_(t, ne({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function ca(e, t) {
  process.env.NODE_ENV !== "production" && jt(t, ["getter"]);
  var r = this, n = t.name, i = t.addInitializer;
  return i(function() {
    var a = Le(this)[_], o = ne({}, r.options_, {
      get: e,
      context: this
    });
    o.name || (o.name = process.env.NODE_ENV !== "production" ? a.name_ + "." + n.toString() : "ObservableObject." + n.toString()), a.values_.set(n, new _e(o));
  }), function() {
    return this[_].getObservablePropValue_(n);
  };
}
function ua(e, t, r, n) {
  var i = t.annotationType_, a = n.get;
  process.env.NODE_ENV !== "production" && !a && f("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function It(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ha,
    extend_: da,
    decorate_20223_: fa
  };
}
function ha(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function da(e, t, r, n) {
  var i, a;
  return va(e, this, t, r), e.defineObservableProperty_(t, r.value, (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : ve, n);
}
function fa(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw f("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    jt(t, ["accessor"]);
  }
  var r = this, n = t.kind, i = t.name, a = /* @__PURE__ */ new WeakSet();
  function o(l, s) {
    var c, u, h = Le(l)[_], v = new he(s, (c = (u = r.options_) == null ? void 0 : u.enhancer) != null ? c : ve, process.env.NODE_ENV !== "production" ? h.name_ + "." + i.toString() : "ObservableObject." + i.toString(), !1);
    h.values_.set(i, v), a.add(l);
  }
  if (n == "accessor")
    return {
      get: function() {
        return a.has(this) || o(this, e.get.call(this)), this[_].getObservablePropValue_(i);
      },
      set: function(s) {
        return a.has(this) || o(this, s), this[_].setObservablePropValue_(i, s);
      },
      init: function(s) {
        return a.has(this) || o(this, s), s;
      }
    };
}
function va(e, t, r, n) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && f("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var pa = "true", _a = /* @__PURE__ */ $n();
function $n(e) {
  return {
    annotationType_: pa,
    options_: e,
    make_: ga,
    extend_: ba,
    decorate_20223_: ma
  };
}
function ga(e, t, r, n) {
  var i, a;
  if (r.get)
    return Ut.make_(e, t, r, n);
  if (r.set) {
    var o = pe(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: d.safeDescriptors ? e.isPlainObject_ : !0,
      set: o
    }) === null ? 0 : 2 : (G(n, t, {
      configurable: !0,
      set: o
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var l;
    if (bn(r.value)) {
      var s, c = (s = this.options_) != null && s.autoBind ? Ve.bound : Ve;
      return c.make_(e, t, r, n);
    }
    var u = (l = this.options_) != null && l.autoBind ? We.bound : We;
    return u.make_(e, t, r, n);
  }
  var h = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? w.ref : w;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var v;
    r.value = r.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return h.make_(e, t, r, n);
}
function ba(e, t, r, n) {
  var i, a;
  if (r.get)
    return Ut.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: d.safeDescriptors ? e.isPlainObject_ : !0,
      set: pe(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var l = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? w.ref : w;
  return l.extend_(e, t, r, n);
}
function ma(e, t) {
  f("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var ya = "observable", Ea = "observable.ref", Aa = "observable.shallow", Oa = "observable.struct", xn = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(xn);
function ut(e) {
  return e || xn;
}
var tr = /* @__PURE__ */ It(ya), wa = /* @__PURE__ */ It(Ea, {
  enhancer: Lt
}), Sa = /* @__PURE__ */ It(Aa, {
  enhancer: Xi
}), Na = /* @__PURE__ */ It(Oa, {
  enhancer: Zi
}), Dn = /* @__PURE__ */ W(tr);
function ht(e) {
  return e.deep === !0 ? ve : e.deep === !1 ? Lt : xa(e.defaultDecorator);
}
function $a(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : $n(e) : void 0;
}
function xa(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : ve;
}
function Pn(e, t, r) {
  if (rt(t))
    return tr.decorate_20223_(e, t);
  if (fe(t)) {
    Re(e, t, tr);
    return;
  }
  return Xe(e) ? e : x(e) ? w.object(e, t, r) : Array.isArray(e) ? w.array(e, t) : Te(e) ? w.map(e, t) : tt(e) ? w.set(e, t) : typeof e == "object" && e !== null ? e : w.box(e, t);
}
_n(Pn, Dn);
var Da = {
  box: function(t, r) {
    var n = ut(r);
    return new he(t, ht(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = ut(r);
    return (d.useProxies === !1 || n.proxy === !1 ? xo : bo)(t, ht(n), n.name);
  },
  map: function(t, r) {
    var n = ut(r);
    return new ti(t, ht(n), n.name);
  },
  set: function(t, r) {
    var n = ut(r);
    return new ii(t, ht(n), n.name);
  },
  object: function(t, r, n) {
    return we(function() {
      return Jn(d.useProxies === !1 || n?.proxy === !1 ? Le({}, n) : po({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ W(wa),
  shallow: /* @__PURE__ */ W(Sa),
  deep: Dn,
  struct: /* @__PURE__ */ W(Na)
}, w = /* @__PURE__ */ _n(Pn, Da), Cn = "computed", Pa = "computed.struct", rr = /* @__PURE__ */ _r(Cn), Ca = /* @__PURE__ */ _r(Pa, {
  equals: Ce.structural
}), Ut = function(t, r) {
  if (rt(r))
    return rr.decorate_20223_(t, r);
  if (fe(r))
    return Re(t, r, rr);
  if (x(t))
    return W(_r(Cn, t));
  process.env.NODE_ENV !== "production" && (A(t) || f("First argument to `computed` should be an expression."), A(r) && f("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = x(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new _e(n);
};
Object.assign(Ut, rr);
Ut.struct = /* @__PURE__ */ W(Ca);
var Rr, jr, Ot = 0, Va = 1, Ta = (Rr = (jr = /* @__PURE__ */ yt(function() {
}, "name")) == null ? void 0 : jr.configurable) != null ? Rr : !1, Lr = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function pe(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (A(t) || f("`action` can only be invoked on functions"), (typeof e != "string" || !e) && f("actions should have valid names, got: '" + e + "'"));
  function i() {
    return Ra(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, i.toString = function() {
    return t.toString();
  }, Ta && (Lr.value = e, G(i, "name", Lr)), i;
}
function Ra(e, t, r, n, i) {
  var a = ja(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw a.error_ = o, o;
  } finally {
    La(a);
  }
}
function ja(e, t, r, n) {
  var i = process.env.NODE_ENV !== "production" && $() && !!e, a = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    a = Date.now();
    var o = n ? Array.from(n) : Et;
    P({
      type: br,
      name: e,
      object: r,
      arguments: o
    });
  }
  var l = d.trackingDerivation, s = !t || !l;
  j();
  var c = d.allowStateChanges;
  s && (Oe(), c = Mt(!0));
  var u = gr(!0), h = {
    runAsAction_: s,
    prevDerivation_: l,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: u,
    notifySpy_: i,
    startTime_: a,
    actionId_: Va++,
    parentActionId_: Ot
  };
  return Ot = h.actionId_, h;
}
function La(e) {
  Ot !== e.actionId_ && f(30), Ot = e.parentActionId_, e.error_ !== void 0 && (d.suppressReactionErrors = !0), kt(e.prevAllowStateChanges_), ze(e.prevAllowStateReads_), L(), e.runAsAction_ && Y(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && C({
    time: Date.now() - e.startTime_
  }), d.suppressReactionErrors = !1;
}
function Ia(e, t) {
  var r = Mt(e);
  try {
    return t();
  } finally {
    kt(r);
  }
}
function Mt(e) {
  var t = d.allowStateChanges;
  return d.allowStateChanges = e, t;
}
function kt(e) {
  d.allowStateChanges = e;
}
var Vn, Ua = "create";
Vn = Symbol.toPrimitive;
var he = /* @__PURE__ */ function(e) {
  An(t, e);
  function t(n, i, a, o, l) {
    var s;
    return a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableValue@" + U() : "ObservableValue"), o === void 0 && (o = !0), l === void 0 && (l = Ce.default), s = e.call(this, a) || this, s.enhancer = void 0, s.name_ = void 0, s.equals = void 0, s.hasUnreportedChange_ = !1, s.interceptors_ = void 0, s.changeListeners_ = void 0, s.value_ = void 0, s.dehancer = void 0, s.enhancer = i, s.name_ = a, s.equals = l, s.value_ = i(n, void 0, a), process.env.NODE_ENV !== "production" && o && $() && ge({
      type: Ua,
      object: pt(s),
      observableKind: "value",
      debugObjectName: s.name_,
      newValue: "" + s.value_
    }), s;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    var a = this.value_;
    if (i = this.prepareNewValue_(i), i !== d.UNCHANGED) {
      var o = $();
      process.env.NODE_ENV !== "production" && o && P({
        type: k,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: a
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && o && C();
    }
  }, r.prepareNewValue_ = function(i) {
    if (F(this), T(this)) {
      var a = R(this, {
        object: this,
        type: k,
        newValue: i
      });
      if (!a)
        return d.UNCHANGED;
      i = a.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? d.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var a = this.value_;
    this.value_ = i, this.reportChanged(), z(this) && K(this, {
      type: k,
      object: this,
      newValue: i,
      oldValue: a
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return ot(this, i);
  }, r.observe_ = function(i, a) {
    return a && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: k,
      newValue: this.value_,
      oldValue: void 0
    }), st(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return En(this.get());
  }, r[Vn] = function() {
    return this.valueOf();
  }, t;
}(nt), Tn;
Tn = Symbol.toPrimitive;
var _e = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = b.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = b.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new wt(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = I.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || f(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + U() : "ComputedValue"), r.set && (this.setter_ = pe(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Ce.structural : Ce.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    Ha(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && f(32, this.name_, this.derivation), d.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      nr(this) && (this.warnAboutUntrackedRead_(), j(), this.value_ = this.computeValue_(!1), L());
    else if (Mn(this), nr(this)) {
      var n = d.trackingContext;
      this.keepAlive_ && !n && (d.trackingContext = this), this.trackAndCompute() && Ka(this), d.trackingContext = n;
    }
    var i = this.value_;
    if (_t(i))
      throw i.cause;
    return i;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && f(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      f(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === b.NOT_TRACKING_
    ), a = this.computeValue_(!0), o = i || _t(n) || _t(a) || !this.equals_(n, a);
    return o && (this.value_ = a, process.env.NODE_ENV !== "production" && $() && ge({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: a
    })), o;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = Mt(!1), a;
    if (n)
      a = Rn(this, this.derivation, this.scope_);
    else if (d.disableErrorBoundaries === !0)
      a = this.derivation.call(this.scope_);
    else
      try {
        a = this.derivation.call(this.scope_);
      } catch (o) {
        a = new wt(o);
      }
    return kt(i), this.isComputing_ = !1, a;
  }, t.suspend_ = function() {
    this.keepAlive_ || (ir(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== I.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, i) {
    var a = this, o = !0, l = void 0;
    return mr(function() {
      var s = a.get();
      if (!o || i) {
        var c = Oe();
        n({
          observableKind: "computed",
          debugObjectName: a.name_,
          type: k,
          object: a,
          newValue: s,
          oldValue: l
        }), Y(c);
      }
      o = !1, l = s;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== I.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : d.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return En(this.get());
  }, t[Tn] = function() {
    return this.valueOf();
  }, e;
}(), Bt = /* @__PURE__ */ Ae("ComputedValue", _e), b;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(b || (b = {}));
var I;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(I || (I = {}));
var wt = function(t) {
  this.cause = void 0, this.cause = t;
};
function _t(e) {
  return e instanceof wt;
}
function nr(e) {
  switch (e.dependenciesState_) {
    case b.UP_TO_DATE_:
      return !1;
    case b.NOT_TRACKING_:
    case b.STALE_:
      return !0;
    case b.POSSIBLY_STALE_: {
      for (var t = gr(!0), r = Oe(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (Bt(o)) {
          if (d.disableErrorBoundaries)
            o.get();
          else
            try {
              o.get();
            } catch {
              return Y(r), ze(t), !0;
            }
          if (e.dependenciesState_ === b.STALE_)
            return Y(r), ze(t), !0;
        }
      }
      return Ln(e), Y(r), ze(t), !1;
    }
  }
}
function F(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !d.allowStateChanges && (t || d.enforceActions === "always") && console.warn("[MobX] " + (d.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function Ma(e) {
  process.env.NODE_ENV !== "production" && !d.allowStateReads && d.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function Rn(e, t, r) {
  var n = gr(!0);
  Ln(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++d.runId;
  var i = d.trackingDerivation;
  d.trackingDerivation = e, d.inBatch++;
  var a;
  if (d.disableErrorBoundaries === !0)
    a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new wt(o);
    }
  return d.inBatch--, d.trackingDerivation = i, Ba(e), ka(e), ze(n), a;
}
function ka(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : d.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function Ba(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = b.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, o = 0; o < a; o++) {
    var l = r[o];
    l.diffValue_ === 0 && (l.diffValue_ = 1, i !== o && (r[i] = l), i++), l.dependenciesState_ > n && (n = l.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var s = t[a];
    s.diffValue_ === 0 && In(s, e), s.diffValue_ = 0;
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && (c.diffValue_ = 0, za(c, e));
  }
  n !== b.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function ir(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    In(t[r], e);
  e.dependenciesState_ = b.NOT_TRACKING_;
}
function jn(e) {
  var t = Oe();
  try {
    return e();
  } finally {
    Y(t);
  }
}
function Oe() {
  var e = d.trackingDerivation;
  return d.trackingDerivation = null, e;
}
function Y(e) {
  d.trackingDerivation = e;
}
function gr(e) {
  var t = d.allowStateReads;
  return d.allowStateReads = e, t;
}
function ze(e) {
  d.allowStateReads = e;
}
function Ln(e) {
  if (e.dependenciesState_ !== b.UP_TO_DATE_) {
    e.dependenciesState_ = b.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = b.UP_TO_DATE_;
  }
}
var qt = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, Ft = !0, d = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ pn();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ft = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new qt().version && (Ft = !1), Ft ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new qt()) : (setTimeout(function() {
    f(35);
  }, 1), new qt());
}();
function za(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function In(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Un(e);
}
function Un(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, d.pendingUnobservations.push(e));
}
function j() {
  d.inBatch++;
}
function L() {
  if (--d.inBatch === 0) {
    Kn();
    for (var e = d.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof _e && r.suspend_());
    }
    d.pendingUnobservations = [];
  }
}
function Mn(e) {
  Ma(e);
  var t = d.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && d.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && d.inBatch > 0 && Un(e), !1);
}
function kn(e) {
  e.lowestObserverState_ !== b.STALE_ && (e.lowestObserverState_ = b.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === b.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== I.NONE && Bn(t, e), t.onBecomeStale_()), t.dependenciesState_ = b.STALE_;
  }));
}
function Ka(e) {
  e.lowestObserverState_ !== b.STALE_ && (e.lowestObserverState_ = b.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === b.POSSIBLY_STALE_ ? (t.dependenciesState_ = b.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== I.NONE && Bn(t, e)) : t.dependenciesState_ === b.UP_TO_DATE_ && (e.lowestObserverState_ = b.UP_TO_DATE_);
  }));
}
function Ha(e) {
  e.lowestObserverState_ === b.UP_TO_DATE_ && (e.lowestObserverState_ = b.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === b.UP_TO_DATE_ && (t.dependenciesState_ = b.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Bn(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === I.BREAK) {
    var r = [];
    zn(oo(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof _e ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function zn(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return zn(n, t, r + 1);
  });
}
var Ge = /* @__PURE__ */ function() {
  function e(r, n, i, a) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + U() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = b.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = I.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = a;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, d.pendingReactions.push(this), Kn());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      j(), this.isScheduled_ = !1;
      var n = d.trackingContext;
      if (d.trackingContext = this, nr(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && $() && ge({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      d.trackingContext = n, L();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      j();
      var i = $(), a;
      process.env.NODE_ENV !== "production" && i && (a = Date.now(), P({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var o = d.trackingContext;
      d.trackingContext = this;
      var l = Rn(this, n, void 0);
      d.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && ir(this), _t(l) && this.reportExceptionInDerivation_(l.cause), process.env.NODE_ENV !== "production" && i && C({
        time: Date.now() - a
      }), L();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (d.disableErrorBoundaries)
      throw n;
    var a = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    d.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(a, n), process.env.NODE_ENV !== "production" && $() && ge({
      type: "error",
      name: this.name_,
      message: a,
      error: "" + n
    }), d.globalReactionErrorHandlers.forEach(function(o) {
      return o(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (j(), ir(this), L()));
  }, t.getDisposer_ = function(n) {
    var i = this, a = function o() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", o);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", a), a[_] = this, a;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), ho(this, n);
  }, e;
}(), Ir = 100, qa = function(t) {
  return t();
};
function Kn() {
  d.inBatch > 0 || d.isRunningReactions || qa(Fa);
}
function Fa() {
  d.isRunningReactions = !0;
  for (var e = d.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ir && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Ir + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  d.isRunningReactions = !1;
}
var St = /* @__PURE__ */ Ae("Reaction", Ge);
function $() {
  return process.env.NODE_ENV !== "production" && !!d.spyListeners.length;
}
function ge(e) {
  if (process.env.NODE_ENV !== "production" && d.spyListeners.length)
    for (var t = d.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function P(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = ne({}, e, {
      spyReportStart: !0
    });
    ge(t);
  }
}
var Ga = {
  type: "report-end",
  spyReportEnd: !0
};
function C(e) {
  process.env.NODE_ENV !== "production" && ge(e ? ne({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : Ga);
}
function Wa(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (d.spyListeners.push(e), fr(function() {
    d.spyListeners = d.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var br = "action", Ja = "action.bound", Hn = "autoAction", Xa = "autoAction.bound", Za = "<unnamed action>", ar = /* @__PURE__ */ it(br), Ya = /* @__PURE__ */ it(Ja, {
  bound: !0
}), or = /* @__PURE__ */ it(Hn, {
  autoAction: !0
}), Qa = /* @__PURE__ */ it(Xa, {
  autoAction: !0,
  bound: !0
});
function qn(e) {
  var t = function(n, i) {
    if (A(n))
      return pe(n.name || Za, n, e);
    if (A(i))
      return pe(n, i, e);
    if (rt(i))
      return (e ? or : ar).decorate_20223_(n, i);
    if (fe(i))
      return Re(n, i, e ? or : ar);
    if (fe(n))
      return W(it(e ? Hn : br, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && f("Invalid arguments for `action`");
  };
  return t;
}
var ce = /* @__PURE__ */ qn(!1);
Object.assign(ce, ar);
var We = /* @__PURE__ */ qn(!0);
Object.assign(We, or);
ce.bound = /* @__PURE__ */ W(Ya);
We.bound = /* @__PURE__ */ W(Qa);
function at(e) {
  return A(e) && e.isMobxAction === !0;
}
function mr(e, t) {
  var r, n, i, a, o;
  t === void 0 && (t = dr), process.env.NODE_ENV !== "production" && (A(e) || f("Autorun expects a function as first argument"), at(e) && f("Autorun does not accept actions since actions are untrackable"));
  var l = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + U() : "Autorun", s = !t.scheduler && !t.delay, c;
  if (s)
    c = new Ge(l, function() {
      this.track(v);
    }, t.onError, t.requiresObservable);
  else {
    var u = Fn(t), h = !1;
    c = new Ge(l, function() {
      h || (h = !0, u(function() {
        h = !1, c.isDisposed_ || c.track(v);
      }));
    }, t.onError, t.requiresObservable);
  }
  function v() {
    e(c);
  }
  return (i = t) != null && (a = i.signal) != null && a.aborted || c.schedule_(), c.getDisposer_((o = t) == null ? void 0 : o.signal);
}
var eo = function(t) {
  return t();
};
function Fn(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : eo;
}
function to(e, t, r) {
  var n, i, a, o;
  r === void 0 && (r = dr), process.env.NODE_ENV !== "production" && ((!A(e) || !A(t)) && f("First and second argument to reaction should be functions"), x(r) || f("Third argument of reactions should be an object"));
  var l = (n = r.name) != null ? n : process.env.NODE_ENV !== "production" ? "Reaction@" + U() : "Reaction", s = ce(l, r.onError ? ro(r.onError, t) : t), c = !r.scheduler && !r.delay, u = Fn(r), h = !0, v = !1, p, y = r.compareStructural ? Ce.structural : r.equals || Ce.default, m = new Ge(l, function() {
    h || c ? S() : v || (v = !0, u(S));
  }, r.onError, r.requiresObservable);
  function S() {
    if (v = !1, !m.isDisposed_) {
      var q = !1, Se = p;
      m.track(function() {
        var ee = Ia(!1, function() {
          return e(m);
        });
        q = h || !y(p, ee), p = ee;
      }), (h && r.fireImmediately || !h && q) && s(p, Se, m), h = !1;
    }
  }
  return (i = r) != null && (a = i.signal) != null && a.aborted || m.schedule_(), m.getDisposer_((o = r) == null ? void 0 : o.signal);
}
function ro(e, t) {
  return function() {
    try {
      return t.apply(this, arguments);
    } catch (r) {
      e.call(this, r);
    }
  };
}
var no = "onBO", io = "onBUO";
function ao(e, t, r) {
  return Wn(no, e, t, r);
}
function Gn(e, t, r) {
  return Wn(io, e, t, r);
}
function Wn(e, t, r, n) {
  var i = typeof n == "function" ? ie(t, r) : ie(t), a = A(n) ? n : r, o = e + "L";
  return i[o] ? i[o].add(a) : i[o] = /* @__PURE__ */ new Set([a]), function() {
    var l = i[o];
    l && (l.delete(a), l.size === 0 && delete i[o]);
  };
}
function Jn(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && f("'extendObservable' expected 2-4 arguments"), typeof e != "object" && f("'extendObservable' expects an object as first argument"), Q(e) && f("'extendObservable' should not be used on maps, use map.merge instead"), x(t) || f("'extendObservable' only accepts plain objects as second argument"), (Xe(t) || Xe(r)) && f("Extending an object with another observable (object) is not supported"));
  var i = Bi(t);
  return we(function() {
    var a = Le(e, n)[_];
    Fe(i).forEach(function(o) {
      a.extend_(
        o,
        i[o],
        // must pass "undefined" for { key: undefined }
        r && o in r ? r[o] : !0
      );
    });
  }), e;
}
function oo(e, t) {
  return Xn(ie(e, t));
}
function Xn(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = so(e.observing_).map(Xn)), t;
}
function so(e) {
  return Array.from(new Set(e));
}
var lo = 0;
function Zn() {
  this.message = "FLOW_CANCELLED";
}
Zn.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Gt = /* @__PURE__ */ Sn("flow"), co = /* @__PURE__ */ Sn("flow.bound", {
  bound: !0
}), Ve = /* @__PURE__ */ Object.assign(function(t, r) {
  if (rt(r))
    return Gt.decorate_20223_(t, r);
  if (fe(r))
    return Re(t, r, Gt);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && f("Flow expects single argument with generator function");
  var n = t, i = n.name || "<unnamed flow>", a = function() {
    var l = this, s = arguments, c = ++lo, u = ce(i + " - runid: " + c + " - init", n).apply(l, s), h, v = void 0, p = new Promise(function(y, m) {
      var S = 0;
      h = m;
      function q(D) {
        v = void 0;
        var te;
        try {
          te = ce(i + " - runid: " + c + " - yield " + S++, u.next).call(u, D);
        } catch (ae) {
          return m(ae);
        }
        ee(te);
      }
      function Se(D) {
        v = void 0;
        var te;
        try {
          te = ce(i + " - runid: " + c + " - yield " + S++, u.throw).call(u, D);
        } catch (ae) {
          return m(ae);
        }
        ee(te);
      }
      function ee(D) {
        if (A(D?.then)) {
          D.then(ee, m);
          return;
        }
        return D.done ? y(D.value) : (v = Promise.resolve(D.value), v.then(q, Se));
      }
      q(void 0);
    });
    return p.cancel = ce(i + " - runid: " + c + " - cancel", function() {
      try {
        v && Ur(v);
        var y = u.return(void 0), m = Promise.resolve(y.value);
        m.then(De, De), Ur(m), h(new Zn());
      } catch (S) {
        h(S);
      }
    }), p;
  };
  return a.isMobXFlow = !0, a;
}, Gt);
Ve.bound = /* @__PURE__ */ W(co);
function Ur(e) {
  A(e.cancel) && e.cancel();
}
function Je(e) {
  return e?.isMobXFlow === !0;
}
function uo(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (Q(e) || lt(e)) ? f("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : be(e) ? e[_].values_.has(t) : !1 : be(e) || !!e[_] || pr(e) || St(e) || Bt(e) : !1;
}
function Xe(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && f("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), uo(e);
}
function ho() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var i = fo(r);
    if (!i)
      return f("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    i.isTracing_ === I.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? I.BREAK : I.LOG;
  }
}
function fo(e) {
  switch (e.length) {
    case 0:
      return d.trackingDerivation;
    case 1:
      return ie(e[0]);
    case 2:
      return ie(e[0], e[1]);
  }
}
function X(e, t) {
  t === void 0 && (t = void 0), j();
  try {
    return e.apply(t);
  } finally {
    L();
  }
}
function oe(e) {
  return e[_];
}
var vo = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && d.trackingDerivation && Ue("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), oe(t).has_(r);
  },
  get: function(t, r) {
    return oe(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return fe(r) ? (process.env.NODE_ENV !== "production" && !oe(t).values_.has(r) && Ue("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = oe(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && Ue("delete properties from an observable object. Use 'remove' from 'mobx' instead."), fe(r) ? (n = oe(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return process.env.NODE_ENV !== "production" && Ue("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = oe(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && d.trackingDerivation && Ue("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), oe(t).ownKeys_();
  },
  preventExtensions: function(t) {
    f(13);
  }
};
function po(e, t) {
  var r, n;
  return gn(), e = Le(e, t), (n = (r = e[_]).proxy_) != null ? n : r.proxy_ = new Proxy(e, vo);
}
function T(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function ot(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), fr(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function R(e, t) {
  var r = Oe();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, a = n.length; i < a && (t = n[i](t), t && !t.type && f(14), !!t); i++)
      ;
    return t;
  } finally {
    Y(r);
  }
}
function z(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function st(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), fr(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function K(e, t) {
  var r = Oe(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++)
      n[i](t);
    Y(r);
  }
}
var Wt = /* @__PURE__ */ Symbol("mobx-keys");
function yr(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!x(e) && !x(Object.getPrototypeOf(e)) && f("'makeAutoObservable' can only be used for classes that don't have a superclass"), be(e) && f("makeAutoObservable can only be used on objects not already made observable")), x(e) ? Jn(e, e, t, r) : (we(function() {
    var n = Le(e, r)[_];
    if (!e[Wt]) {
      var i = Object.getPrototypeOf(e), a = new Set([].concat(Fe(e), Fe(i)));
      a.delete("constructor"), a.delete(_), Rt(i, Wt, a);
    }
    e[Wt].forEach(function(o) {
      return n.make_(
        o,
        // must pass "undefined" for { key: undefined }
        t && o in t ? t[o] : !0
      );
    });
  }), e);
}
var Mr = "splice", k = "update", _o = 1e4, go = {
  get: function(t, r) {
    var n = t[_];
    return r === _ ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : B(Nt, r) ? Nt[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[_];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    f(15);
  }
}, Er = /* @__PURE__ */ function() {
  function e(r, n, i, a) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + U() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = a, this.atom_ = new nt(r), this.enhancer_ = function(o, l) {
      return n(o, l, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return ot(this, n);
  }, t.observe_ = function(n, i) {
    return i === void 0 && (i = !1), i && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), st(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && f("Out of range: " + n);
    var i = this.values_.length;
    if (n !== i)
      if (n > i) {
        for (var a = new Array(n - i), o = 0; o < n - i; o++)
          a[o] = void 0;
        this.spliceWithArray_(i, 0, a);
      } else
        this.spliceWithArray_(n, i - n);
  }, t.updateArrayLength_ = function(n, i) {
    n !== this.lastKnownLength_ && f(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && si(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, a) {
    var o = this;
    F(this.atom_);
    var l = this.values_.length;
    if (n === void 0 ? n = 0 : n > l ? n = l : n < 0 && (n = Math.max(0, l + n)), arguments.length === 1 ? i = l - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, l - n)), a === void 0 && (a = Et), T(this)) {
      var s = R(this, {
        object: this.proxy_,
        type: Mr,
        index: n,
        removedCount: i,
        added: a
      });
      if (!s)
        return Et;
      i = s.removedCount, a = s.added;
    }
    if (a = a.length === 0 ? a : a.map(function(h) {
      return o.enhancer_(h, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = a.length - i;
      this.updateArrayLength_(l, c);
    }
    var u = this.spliceItemsIntoValues_(n, i, a);
    return (i !== 0 || a.length !== 0) && this.notifyArraySplice_(n, a, u), this.dehanceValues_(u);
  }, t.spliceItemsIntoValues_ = function(n, i, a) {
    if (a.length < _o) {
      var o;
      return (o = this.values_).splice.apply(o, [n, i].concat(a));
    } else {
      var l = this.values_.slice(n, n + i), s = this.values_.slice(n + i);
      this.values_.length += a.length - i;
      for (var c = 0; c < a.length; c++)
        this.values_[n + c] = a[c];
      for (var u = 0; u < s.length; u++)
        this.values_[n + a.length + u] = s[u];
      return l;
    }
  }, t.notifyArrayChildUpdate_ = function(n, i, a) {
    var o = !this.owned_ && $(), l = z(this), s = l || o ? {
      observableKind: "array",
      object: this.proxy_,
      type: k,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: a
    } : null;
    process.env.NODE_ENV !== "production" && o && P(s), this.atom_.reportChanged(), l && K(this, s), process.env.NODE_ENV !== "production" && o && C();
  }, t.notifyArraySplice_ = function(n, i, a) {
    var o = !this.owned_ && $(), l = z(this), s = l || o ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Mr,
      index: n,
      removed: a,
      added: i,
      removedCount: a.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && o && P(s), this.atom_.reportChanged(), l && K(this, s), process.env.NODE_ENV !== "production" && o && C();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, i) {
    var a = this.values_;
    if (this.legacyMode_ && n > a.length && f(17, n, a.length), n < a.length) {
      F(this.atom_);
      var o = a[n];
      if (T(this)) {
        var l = R(this, {
          type: k,
          object: this.proxy_,
          index: n,
          newValue: i
        });
        if (!l)
          return;
        i = l.newValue;
      }
      i = this.enhancer_(i, o);
      var s = i !== o;
      s && (a[n] = i, this.notifyArrayChildUpdate_(n, i, o));
    } else {
      for (var c = new Array(n + 1 - a.length), u = 0; u < c.length - 1; u++)
        c[u] = void 0;
      c[c.length - 1] = i, this.spliceWithArray_(a.length, 0, c);
    }
  }, e;
}();
function bo(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + U() : "ObservableArray"), n === void 0 && (n = !1), gn(), we(function() {
    var i = new Er(r, t, n, !1);
    mn(i.values_, _, i);
    var a = new Proxy(i.values_, go);
    return i.proxy_ = a, e && e.length && i.spliceWithArray_(0, 0, e), a;
  });
}
var Nt = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[_];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[_];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function(t, r, n) {
    return this[_].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[_], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[_], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return d.trackingDerivation && f(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    d.trackingDerivation && f(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[_], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
E("at", V);
E("concat", V);
E("flat", V);
E("includes", V);
E("indexOf", V);
E("join", V);
E("lastIndexOf", V);
E("slice", V);
E("toString", V);
E("toLocaleString", V);
E("toSorted", V);
E("toSpliced", V);
E("with", V);
E("every", H);
E("filter", H);
E("find", H);
E("findIndex", H);
E("findLast", H);
E("findLastIndex", H);
E("flatMap", H);
E("forEach", H);
E("map", H);
E("some", H);
E("toReversed", H);
E("reduce", Yn);
E("reduceRight", Yn);
function E(e, t) {
  typeof Array.prototype[e] == "function" && (Nt[e] = t(e));
}
function V(e) {
  return function() {
    var t = this[_];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function H(e) {
  return function(t, r) {
    var n = this, i = this[_];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function(o, l) {
      return t.call(r, o, l, n);
    });
  };
}
function Yn(e) {
  return function() {
    var t = this, r = this[_];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(a, o, l) {
      return i(a, o, l, t);
    }, n[e].apply(n, arguments);
  };
}
var mo = /* @__PURE__ */ Ae("ObservableArrayAdministration", Er);
function lt(e) {
  return Tt(e) && mo(e[_]);
}
var Qn, ei, yo = {}, re = "add", $t = "delete";
Qn = Symbol.iterator;
ei = Symbol.toStringTag;
var ti = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var a = this;
    n === void 0 && (n = ve), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + U() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[_] = yo, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, A(Map) || f(18), we(function() {
      a.keysAtom_ = On(process.env.NODE_ENV !== "production" ? a.name_ + ".keys()" : "ObservableMap.keys()"), a.data_ = /* @__PURE__ */ new Map(), a.hasMap_ = /* @__PURE__ */ new Map(), r && a.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!d.trackingDerivation)
      return this.has_(n);
    var a = this.hasMap_.get(n);
    if (!a) {
      var o = a = new he(this.has_(n), Lt, process.env.NODE_ENV !== "production" ? this.name_ + "." + Qt(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, o), Gn(o, function() {
        return i.hasMap_.delete(n);
      });
    }
    return a.get();
  }, t.set = function(n, i) {
    var a = this.has_(n);
    if (T(this)) {
      var o = R(this, {
        type: a ? k : re,
        object: this,
        newValue: i,
        name: n
      });
      if (!o)
        return this;
      i = o.newValue;
    }
    return a ? this.updateValue_(n, i) : this.addValue_(n, i), this;
  }, t.delete = function(n) {
    var i = this;
    if (F(this.keysAtom_), T(this)) {
      var a = R(this, {
        type: $t,
        object: this,
        name: n
      });
      if (!a)
        return !1;
    }
    if (this.has_(n)) {
      var o = $(), l = z(this), s = l || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: $t,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && o && P(s), X(function() {
        var c;
        i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1);
        var u = i.data_.get(n);
        u.setNewValue_(void 0), i.data_.delete(n);
      }), l && K(this, s), process.env.NODE_ENV !== "production" && o && C(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, i) {
    var a = this.data_.get(n);
    if (i = a.prepareNewValue_(i), i !== d.UNCHANGED) {
      var o = $(), l = z(this), s = l || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: k,
        object: this,
        oldValue: a.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && o && P(s), a.setNewValue_(i), l && K(this, s), process.env.NODE_ENV !== "production" && o && C();
    }
  }, t.addValue_ = function(n, i) {
    var a = this;
    F(this.keysAtom_), X(function() {
      var c, u = new he(i, a.enhancer_, process.env.NODE_ENV !== "production" ? a.name_ + "." + Qt(n) : "ObservableMap.key", !1);
      a.data_.set(n, u), i = u.value_, (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0), a.keysAtom_.reportChanged();
    });
    var o = $(), l = z(this), s = l || o ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: re,
      object: this,
      name: n,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && o && P(s), l && K(this, s), process.env.NODE_ENV !== "production" && o && C();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, i = this.keys();
    return Ze({
      next: function() {
        var o = i.next(), l = o.done, s = o.value;
        return {
          done: l,
          value: l ? void 0 : n.get(s)
        };
      }
    });
  }, t.entries = function() {
    var n = this, i = this.keys();
    return Ze({
      next: function() {
        var o = i.next(), l = o.done, s = o.value;
        return {
          done: l,
          value: l ? void 0 : [s, n.get(s)]
        };
      }
    });
  }, t[Qn] = function() {
    return this.entries();
  }, t.forEach = function(n, i) {
    for (var a = Pe(this), o; !(o = a()).done; ) {
      var l = o.value, s = l[0], c = l[1];
      n.call(i, c, s, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return Q(n) && (n = new Map(n)), X(function() {
      x(n) ? ki(n).forEach(function(a) {
        return i.set(a, n[a]);
      }) : Array.isArray(n) ? n.forEach(function(a) {
        var o = a[0], l = a[1];
        return i.set(o, l);
      }) : Te(n) ? (n.constructor !== Map && f(19, n), n.forEach(function(a, o) {
        return i.set(o, a);
      })) : n != null && f(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    X(function() {
      jn(function() {
        for (var i = Pe(n.keys()), a; !(a = i()).done; ) {
          var o = a.value;
          n.delete(o);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return X(function() {
      for (var a = Eo(n), o = /* @__PURE__ */ new Map(), l = !1, s = Pe(i.data_.keys()), c; !(c = s()).done; ) {
        var u = c.value;
        if (!a.has(u)) {
          var h = i.delete(u);
          if (h)
            l = !0;
          else {
            var v = i.data_.get(u);
            o.set(u, v);
          }
        }
      }
      for (var p = Pe(a.entries()), y; !(y = p()).done; ) {
        var m = y.value, S = m[0], q = m[1], Se = i.data_.has(S);
        if (i.set(S, q), i.data_.has(S)) {
          var ee = i.data_.get(S);
          o.set(S, ee), Se || (l = !0);
        }
      }
      if (!l)
        if (i.data_.size !== o.size)
          i.keysAtom_.reportChanged();
        else
          for (var D = i.data_.keys(), te = o.keys(), ae = D.next(), Cr = te.next(); !ae.done; ) {
            if (ae.value !== Cr.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            ae = D.next(), Cr = te.next();
          }
      i.data_ = o;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support fireImmediately=true in combination with maps."), st(this, n);
  }, t.intercept_ = function(n) {
    return ot(this, n);
  }, vr(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ei,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Q = /* @__PURE__ */ Ae("ObservableMap", ti);
function Eo(e) {
  if (Te(e) || Q(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (x(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return f(21, e);
}
var ri, ni, Ao = {};
ri = Symbol.iterator;
ni = Symbol.toStringTag;
var ii = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var a = this;
    n === void 0 && (n = ve), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + U() : "ObservableSet"), this.name_ = void 0, this[_] = Ao, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, A(Set) || f(22), this.enhancer_ = function(o, l) {
      return n(o, l, i);
    }, we(function() {
      a.atom_ = On(a.name_), r && a.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    X(function() {
      jn(function() {
        for (var i = Pe(n.data_.values()), a; !(a = i()).done; ) {
          var o = a.value;
          n.delete(o);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var a = Pe(this), o; !(o = a()).done; ) {
      var l = o.value;
      n.call(i, l, l, this);
    }
  }, t.add = function(n) {
    var i = this;
    if (F(this.atom_), T(this)) {
      var a = R(this, {
        type: re,
        object: this,
        newValue: n
      });
      if (!a)
        return this;
    }
    if (!this.has(n)) {
      X(function() {
        i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
      });
      var o = process.env.NODE_ENV !== "production" && $(), l = z(this), s = l || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: re,
        object: this,
        newValue: n
      } : null;
      o && process.env.NODE_ENV !== "production" && P(s), l && K(this, s), o && process.env.NODE_ENV !== "production" && C();
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (T(this)) {
      var a = R(this, {
        type: $t,
        object: this,
        oldValue: n
      });
      if (!a)
        return !1;
    }
    if (this.has(n)) {
      var o = process.env.NODE_ENV !== "production" && $(), l = z(this), s = l || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: $t,
        object: this,
        oldValue: n
      } : null;
      return o && process.env.NODE_ENV !== "production" && P(s), X(function() {
        i.atom_.reportChanged(), i.data_.delete(n);
      }), l && K(this, s), o && process.env.NODE_ENV !== "production" && C(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, i = Array.from(this.keys()), a = Array.from(this.values());
    return Ze({
      next: function() {
        var l = n;
        return n += 1, l < a.length ? {
          value: [i[l], a[l]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var n = this, i = 0, a = Array.from(this.data_.values());
    return Ze({
      next: function() {
        return i < a.length ? {
          value: n.dehanceValue_(a[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var i = this;
    return je(n) && (n = new Set(n)), X(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(a) {
        return i.add(a);
      })) : tt(n) ? (i.clear(), n.forEach(function(a) {
        return i.add(a);
      })) : n != null && f("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support fireImmediately=true in combination with sets."), st(this, n);
  }, t.intercept_ = function(n) {
    return ot(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[ri] = function() {
    return this.values();
  }, vr(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ni,
    get: function() {
      return "Set";
    }
  }]), e;
}(), je = /* @__PURE__ */ Ae("ObservableSet", ii), kr = /* @__PURE__ */ Object.create(null), Br = "remove", sr = /* @__PURE__ */ function() {
  function e(r, n, i, a) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), a === void 0 && (a = _a), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = a, this.keysAtom_ = new nt(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = x(this.target_), process.env.NODE_ENV !== "production" && !li(this.defaultAnnotation_) && f("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var a = this.values_.get(n);
    if (a instanceof _e)
      return a.set(i), !0;
    if (T(this)) {
      var o = R(this, {
        type: k,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!o)
        return null;
      i = o.newValue;
    }
    if (i = a.prepareNewValue_(i), i !== d.UNCHANGED) {
      var l = z(this), s = process.env.NODE_ENV !== "production" && $(), c = l || s ? {
        type: k,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: a.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && s && P(c), a.setNewValue_(i), l && K(this, c), process.env.NODE_ENV !== "production" && s && C();
    }
    return !0;
  }, t.get_ = function(n) {
    return d.trackingDerivation && !B(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, a) {
    return a === void 0 && (a = !1), B(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : a ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, a);
  }, t.has_ = function(n) {
    if (!d.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new he(n in this.target_, Lt, process.env.NODE_ENV !== "production" ? this.name_ + "." + Qt(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (Hr(this, i, n), !(n in this.target_)) {
        var a;
        if ((a = this.target_[J]) != null && a[n])
          return;
        f(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var o = this.target_; o && o !== Vt; ) {
        var l = yt(o, n);
        if (l) {
          var s = i.make_(this, n, l, o);
          if (s === 0)
            return;
          if (s === 1)
            break;
        }
        o = Object.getPrototypeOf(o);
      }
      Kr(this, i, n);
    }
  }, t.extend_ = function(n, i, a, o) {
    if (o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1)
      return this.defineProperty_(n, i, o);
    Hr(this, a, n);
    var l = a.extend_(this, n, i, o);
    return l && Kr(this, a, n), l;
  }, t.defineProperty_ = function(n, i, a) {
    a === void 0 && (a = !1), F(this.keysAtom_);
    try {
      j();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (T(this)) {
        var l = R(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: re,
          newValue: i.value
        });
        if (!l)
          return null;
        var s = l.newValue;
        i.value !== s && (i = ne({}, i, {
          value: s
        }));
      }
      if (a) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        G(this.target_, n, i);
      this.notifyPropertyAddition_(n, i.value);
    } finally {
      L();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, i, a, o) {
    o === void 0 && (o = !1), F(this.keysAtom_);
    try {
      j();
      var l = this.delete_(n);
      if (!l)
        return l;
      if (T(this)) {
        var s = R(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: re,
          newValue: i
        });
        if (!s)
          return null;
        i = s.newValue;
      }
      var c = zr(n), u = {
        configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, u))
          return !1;
      } else
        G(this.target_, n, u);
      var h = new he(i, a, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, h), this.notifyPropertyAddition_(n, h.value_);
    } finally {
      L();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, i, a) {
    a === void 0 && (a = !1), F(this.keysAtom_);
    try {
      j();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (T(this)) {
        var l = R(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: re,
          newValue: void 0
        });
        if (!l)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var s = zr(n), c = {
        configurable: d.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: s.get,
        set: s.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        G(this.target_, n, c);
      this.values_.set(n, new _e(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      L();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), F(this.keysAtom_), !B(this.target_, n))
      return !0;
    if (T(this)) {
      var a = R(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: Br
      });
      if (!a)
        return null;
    }
    try {
      var o, l;
      j();
      var s = z(this), c = process.env.NODE_ENV !== "production" && $(), u = this.values_.get(n), h = void 0;
      if (!u && (s || c)) {
        var v;
        h = (v = yt(this.target_, n)) == null ? void 0 : v.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], u && (this.values_.delete(n), u instanceof he && (h = u.value_), kn(u)), this.keysAtom_.reportChanged(), (o = this.pendingKeys_) == null || (l = o.get(n)) == null || l.set(n in this.target_), s || c) {
        var p = {
          type: Br,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: h,
          name: n
        };
        process.env.NODE_ENV !== "production" && c && P(p), s && K(this, p), process.env.NODE_ENV !== "production" && c && C();
      }
    } finally {
      L();
    }
    return !0;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && f("`observe` doesn't support the fire immediately property for observable objects."), st(this, n);
  }, t.intercept_ = function(n) {
    return ot(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var a, o, l = z(this), s = process.env.NODE_ENV !== "production" && $();
    if (l || s) {
      var c = l || s ? {
        type: re,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && s && P(c), l && K(this, c), process.env.NODE_ENV !== "production" && s && C();
    }
    (a = this.pendingKeys_) == null || (o = a.get(n)) == null || o.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Fe(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Le(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && be(e) && f("Options can't be provided for already observable objects."), B(e, _))
    return process.env.NODE_ENV !== "production" && !(Or(e) instanceof sr) && f("Cannot convert '" + xt(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && f("Cannot make the designated object observable; it is not extensible");
  var n = (r = t?.name) != null ? r : process.env.NODE_ENV !== "production" ? (x(e) ? "ObservableObject" : e.constructor.name) + "@" + U() : "ObservableObject", i = new sr(e, /* @__PURE__ */ new Map(), String(n), $a(t));
  return Rt(e, _, i), e;
}
var Oo = /* @__PURE__ */ Ae("ObservableObjectAdministration", sr);
function zr(e) {
  return kr[e] || (kr[e] = {
    get: function() {
      return this[_].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[_].setObservablePropValue_(e, r);
    }
  });
}
function be(e) {
  return Tt(e) ? Oo(e[_]) : !1;
}
function Kr(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[J]) == null || delete n[r];
}
function Hr(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !li(t) && f("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !At(t) && B(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), i = e.appliedAnnotations_[r].annotationType_, a = t.annotationType_;
    f("Cannot apply '" + a + "' to '" + n + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var wo = /* @__PURE__ */ oi(0), So = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), Jt = 0, ai = function() {
};
function No(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
No(ai, Array.prototype);
var Ar = /* @__PURE__ */ function(e, t, r) {
  An(n, e);
  function n(a, o, l, s) {
    var c;
    return l === void 0 && (l = process.env.NODE_ENV !== "production" ? "ObservableArray@" + U() : "ObservableArray"), s === void 0 && (s = !1), c = e.call(this) || this, we(function() {
      var u = new Er(l, o, s, !0);
      u.proxy_ = pt(c), mn(pt(c), _, u), a && a.length && c.spliceWithArray(0, 0, a), So && Object.defineProperty(pt(c), "0", wo);
    }), c;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[_].atom_.reportObserved();
    for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      l.map(function(c) {
        return lt(c) ? c.slice() : c;
      })
    );
  }, i[r] = function() {
    var a = this, o = 0;
    return Ze({
      next: function() {
        return o < a.length ? {
          value: a[o++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, vr(n, [{
    key: "length",
    get: function() {
      return this[_].getArrayLength_();
    },
    set: function(o) {
      this[_].setArrayLength_(o);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}(ai, Symbol.toStringTag, Symbol.iterator);
Object.entries(Nt).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && Rt(Ar.prototype, t, r);
});
function oi(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[_].get_(e);
    },
    set: function(r) {
      this[_].set_(e, r);
    }
  };
}
function $o(e) {
  G(Ar.prototype, "" + e, oi(e));
}
function si(e) {
  if (e > Jt) {
    for (var t = Jt; t < e + 100; t++)
      $o(t);
    Jt = e;
  }
}
si(1e3);
function xo(e, t, r) {
  return new Ar(e, t, r);
}
function ie(e, t) {
  if (typeof e == "object" && e !== null) {
    if (lt(e))
      return t !== void 0 && f(23), e[_].atom_;
    if (je(e))
      return e.atom_;
    if (Q(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || f(25, t, xt(e)), r;
    }
    if (be(e)) {
      if (!t)
        return f(26);
      var n = e[_].values_.get(t);
      return n || f(27, t, xt(e)), n;
    }
    if (pr(e) || Bt(e) || St(e))
      return e;
  } else if (A(e) && St(e[_]))
    return e[_];
  f(28);
}
function Or(e, t) {
  if (e || f(29), t !== void 0)
    return Or(ie(e, t));
  if (pr(e) || Bt(e) || St(e) || Q(e) || je(e))
    return e;
  if (e[_])
    return e[_];
  f(24, e);
}
function xt(e, t) {
  var r;
  if (t !== void 0)
    r = ie(e, t);
  else {
    if (at(e))
      return e.name;
    be(e) || Q(e) || je(e) ? r = Or(e) : r = ie(e);
  }
  return r.name_;
}
function we(e) {
  var t = Oe(), r = Mt(!0);
  j();
  try {
    return e();
  } finally {
    L(), kt(r), Y(t);
  }
}
var qr = Vt.toString;
function wr(e, t, r) {
  return r === void 0 && (r = -1), lr(e, t, r);
}
function lr(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object")
    return !1;
  var o = qr.call(e);
  if (o !== qr.call(t))
    return !1;
  switch (o) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = Fr(e), t = Fr(t);
  var l = o === "[object Array]";
  if (!l) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var s = e.constructor, c = t.constructor;
    if (s !== c && !(A(s) && s instanceof s && A(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], i = i || [];
  for (var u = n.length; u--; )
    if (n[u] === e)
      return i[u] === t;
  if (n.push(e), i.push(t), l) {
    if (u = e.length, u !== t.length)
      return !1;
    for (; u--; )
      if (!lr(e[u], t[u], r - 1, n, i))
        return !1;
  } else {
    var h = Object.keys(e), v;
    if (u = h.length, Object.keys(t).length !== u)
      return !1;
    for (; u--; )
      if (v = h[u], !(B(t, v) && lr(e[v], t[v], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function Fr(e) {
  return lt(e) ? e.slice() : Te(e) || Q(e) || tt(e) || je(e) ? Array.from(e.entries()) : e;
}
function Ze(e) {
  return e[Symbol.iterator] = Do, e;
}
function Do() {
  return this;
}
function li(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && A(e.make_) && A(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = pn();
  typeof t[e] > "u" && f("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Wa,
  extras: {
    getDebugName: xt
  },
  $mobx: _
});
const Gr = "copilot-conf";
class de {
  static get sessionConfiguration() {
    const t = sessionStorage.getItem(Gr);
    return t ? JSON.parse(t) : {};
  }
  static saveCopilotActivation(t) {
    const r = this.sessionConfiguration;
    r.active = t, this.persist(r);
  }
  static getCopilotActivation() {
    return this.sessionConfiguration.active;
  }
  static saveSpotlightActivation(t) {
    const r = this.sessionConfiguration;
    r.spotlightActive = t, this.persist(r);
  }
  static getSpotlightActivation() {
    return this.sessionConfiguration.spotlightActive;
  }
  static saveSpotlightPosition(t, r, n, i) {
    const a = this.sessionConfiguration;
    a.spotlightPosition = { left: t, top: r, right: n, bottom: i }, this.persist(a);
  }
  static getSpotlightPosition() {
    return this.sessionConfiguration.spotlightPosition;
  }
  static saveDrawerSize(t, r) {
    const n = this.sessionConfiguration;
    n.drawerSizes = n.drawerSizes ?? {}, n.drawerSizes[t] = r, this.persist(n);
  }
  static getDrawerSize(t) {
    const r = this.sessionConfiguration;
    if (r.drawerSizes)
      return r.drawerSizes[t];
  }
  static savePanelConfigurations(t) {
    const r = this.sessionConfiguration;
    r.sectionPanelState = t, this.persist(r);
  }
  static getPanelConfigurations() {
    return this.sessionConfiguration.sectionPanelState;
  }
  static persist(t) {
    sessionStorage.setItem(Gr, JSON.stringify(t));
  }
}
class Po {
  constructor() {
    this.spotlightActive = !1, this.loginCheckActive = !1, this.userInfo = void 0, this.active = !1, this.activatedAtLeastOnce = !1, this.operationInProgress = void 0, this.operationWaitsHmrUpdate = void 0, this.idePluginState = void 0, this.notifications = [], this.infoTooltip = null, this.feedbackOpened = !1, this.sectionPanelDragging = !1, this.spotlightDragging = !1, yr(this, {
      notifications: w.shallow
    }), this.spotlightActive = de.getSpotlightActivation() ?? !1;
  }
  setActive(t) {
    this.active = t, t && (this.activatedAtLeastOnce = !0);
  }
  setSpotlightActive(t) {
    this.spotlightActive = t;
  }
  setLoginCheckActive(t) {
    this.loginCheckActive = t;
  }
  setUserInfo(t) {
    this.userInfo = t;
  }
  startOperation(t) {
    if (this.operationInProgress)
      throw new Error(`An ${t} operation is already in progress`);
    if (this.operationWaitsHmrUpdate)
      throw new Error("Wait for files to be updated to start a new operation");
    this.operationInProgress = t;
  }
  stopOperation(t) {
    if (this.operationInProgress) {
      if (this.operationInProgress !== t)
        return;
    } else
      return;
    this.operationInProgress = void 0;
  }
  setIdePluginState(t) {
    this.idePluginState = t;
  }
  toggleActive() {
    this.setActive(!this.active);
  }
  reset() {
    this.active = !1, this.activatedAtLeastOnce = !1;
  }
  setNotifications(t) {
    this.notifications = t;
  }
  removeNotification(t) {
    t.animatingOut = !0, setTimeout(() => {
      this.reallyRemoveNotification(t);
    }, 180);
  }
  reallyRemoveNotification(t) {
    const r = this.notifications.indexOf(t);
    r > -1 && this.notifications.splice(r, 1);
  }
  setTooltip(t, r) {
    this.infoTooltip = {
      text: t,
      loader: r
    };
  }
  clearTooltip() {
    this.infoTooltip = null;
  }
  setFeedbackOpened(t) {
    this.feedbackOpened = t;
  }
  setSectionPanelDragging(t) {
    this.sectionPanelDragging = t;
  }
  setSpotlightDragging(t) {
    this.spotlightDragging = t;
  }
}
const Wr = "copilot-stored-browser-state";
class Co {
  constructor() {
    this.activationShortcutEnabled = !0, this.dismissedNotifications = [], yr(this);
    const t = localStorage.getItem(Wr);
    t && Object.assign(this, JSON.parse(t)), mr(() => {
      localStorage.setItem(Wr, JSON.stringify(this));
    });
  }
  addDismissedNotification(t) {
    this.dismissedNotifications.push(t);
  }
  setActivationShortcutEnabled(t) {
    this.activationShortcutEnabled = t;
  }
  reset() {
    this.activationShortcutEnabled = !0, this.dismissedNotifications = [];
  }
}
window.Vaadin ??= {};
window.Vaadin.copilot ??= {};
window.Vaadin.copilot.plugins = [];
window.Vaadin.copilot._browserState = new Co();
window.Vaadin.copilot._uiState = new Po();
window.Vaadin.copilot.eventbus = new Ri();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vo = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = globalThis, Sr = gt.ShadowRoot && (gt.ShadyCSS === void 0 || gt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Nr = Symbol(), Jr = /* @__PURE__ */ new WeakMap();
let ci = class {
  constructor(t, r, n) {
    if (this._$cssResult$ = !0, n !== Nr)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (Sr && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = Jr.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Jr.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const $e = (e) => new ci(typeof e == "string" ? e : e + "", void 0, Nr), To = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((n, i, a) => n + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[a + 1], e[0]);
  return new ci(r, e, Nr);
}, Ro = (e, t) => {
  if (Sr)
    e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else
    for (const r of t) {
      const n = document.createElement("style"), i = gt.litNonce;
      i !== void 0 && n.setAttribute("nonce", i), n.textContent = r.cssText, e.appendChild(n);
    }
}, Xr = Sr ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const n of t.cssRules)
    r += n.cssText;
  return $e(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: jo, defineProperty: Lo, getOwnPropertyDescriptor: Io, getOwnPropertyNames: Uo, getOwnPropertySymbols: Mo, getPrototypeOf: ko } = Object, zt = globalThis, Zr = zt.trustedTypes, Bo = Zr ? Zr.emptyScript : "", zo = zt.reactiveElementPolyfillSupport, Ke = (e, t) => e, cr = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Bo : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, ui = (e, t) => !jo(e, t), Yr = { attribute: !0, type: String, converter: cr, reflect: !1, hasChanged: ui };
Symbol.metadata ??= Symbol("metadata"), zt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let xe = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Yr) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(t, r), !r.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(t, n, r);
      i !== void 0 && Lo(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    const { get: i, set: a } = Io(this.prototype, t) ?? { get() {
      return this[r];
    }, set(o) {
      this[r] = o;
    } };
    return { get() {
      return i?.call(this);
    }, set(o) {
      const l = i?.call(this);
      a.call(this, o), this.requestUpdate(t, l, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Yr;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ke("elementProperties")))
      return;
    const t = ko(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ke("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ke("properties"))) {
      const r = this.properties, n = [...Uo(r), ...Mo(r)];
      for (const i of n)
        this.createProperty(i, r[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0)
        for (const [n, i] of r)
          this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const i = this._$Eu(r, n);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const i of n)
        r.unshift(Xr(i));
    } else
      t !== void 0 && r.push(Xr(t));
    return r;
  }
  static _$Eu(t, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys())
      this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ro(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$EC(t, r) {
    const n = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, n);
    if (i !== void 0 && n.reflect === !0) {
      const a = (n.converter?.toAttribute !== void 0 ? n.converter : cr).toAttribute(r, n.type);
      this._$Em = t, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(t, r) {
    const n = this.constructor, i = n._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = n.getPropertyOptions(i), o = typeof a.converter == "function" ? { fromAttribute: a.converter } : a.converter?.fromAttribute !== void 0 ? a.converter : cr;
      this._$Em = i, this[i] = o.fromAttribute(r, a.type), this._$Em = null;
    }
  }
  requestUpdate(t, r, n) {
    if (t !== void 0) {
      if (n ??= this.constructor.getPropertyOptions(t), !(n.hasChanged ?? ui)(this[t], r))
        return;
      this.P(t, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, n) {
    this._$AL.has(t) || this._$AL.set(t, r), n.reflect === !0 && this._$Em !== t && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, a] of this._$Ep)
          this[i] = a;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0)
        for (const [i, a] of n)
          a.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], a);
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), this._$EO?.forEach((n) => n.hostUpdate?.()), this.update(r)) : this._$EU();
    } catch (n) {
      throw t = !1, this._$EU(), n;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((r) => r.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach((r) => this._$EC(r, this[r])), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
xe.elementStyles = [], xe.shadowRootOptions = { mode: "open" }, xe[Ke("elementProperties")] = /* @__PURE__ */ new Map(), xe[Ke("finalized")] = /* @__PURE__ */ new Map(), zo?.({ ReactiveElement: xe }), (zt.reactiveElementVersions ??= []).push("2.0.4");
const Ne = Symbol("LitMobxRenderReaction"), Qr = Symbol("LitMobxRequestUpdate");
function Ko(e, t) {
  var r, n;
  return n = class extends e {
    constructor() {
      super(...arguments), this[r] = () => {
        this.requestUpdate();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      const a = this.constructor.name || this.nodeName;
      this[Ne] = new t(`${a}.update()`, this[Qr]), this.hasUpdated && this.requestUpdate();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[Ne] && (this[Ne].dispose(), this[Ne] = void 0);
    }
    update(a) {
      this[Ne] ? this[Ne].track(super.update.bind(this, a)) : super.update(a);
    }
  }, r = Qr, n;
}
function Ho(e) {
  return Ko(e, Ge);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $r = globalThis, Dt = $r.trustedTypes, en = Dt ? Dt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, xr = "$lit$", Z = `lit$${(Math.random() + "").slice(9)}$`, Dr = "?" + Z, qo = `<${Dr}>`, me = document, Ye = () => me.createComment(""), Qe = (e) => e === null || typeof e != "object" && typeof e != "function", hi = Array.isArray, di = (e) => hi(e) || typeof e?.[Symbol.iterator] == "function", Xt = `[ 	
\f\r]`, Me = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tn = /-->/g, rn = />/g, se = RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nn = /'/g, an = /"/g, fi = /^(?:script|style|textarea|title)$/i, vi = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), ur = vi(1), Js = vi(2), ye = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), on = /* @__PURE__ */ new WeakMap(), ue = me.createTreeWalker(me, 129);
function pi(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return en !== void 0 ? en.createHTML(t) : t;
}
const _i = (e, t) => {
  const r = e.length - 1, n = [];
  let i, a = t === 2 ? "<svg>" : "", o = Me;
  for (let l = 0; l < r; l++) {
    const s = e[l];
    let c, u, h = -1, v = 0;
    for (; v < s.length && (o.lastIndex = v, u = o.exec(s), u !== null); )
      v = o.lastIndex, o === Me ? u[1] === "!--" ? o = tn : u[1] !== void 0 ? o = rn : u[2] !== void 0 ? (fi.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = se) : u[3] !== void 0 && (o = se) : o === se ? u[0] === ">" ? (o = i ?? Me, h = -1) : u[1] === void 0 ? h = -2 : (h = o.lastIndex - u[2].length, c = u[1], o = u[3] === void 0 ? se : u[3] === '"' ? an : nn) : o === an || o === nn ? o = se : o === tn || o === rn ? o = Me : (o = se, i = void 0);
    const p = o === se && e[l + 1].startsWith("/>") ? " " : "";
    a += o === Me ? s + qo : h >= 0 ? (n.push(c), s.slice(0, h) + xr + s.slice(h) + Z + p) : s + Z + (h === -2 ? l : p);
  }
  return [pi(e, a + (e[r] || "<?>") + (t === 2 ? "</svg>" : "")), n];
};
class et {
  constructor({ strings: t, _$litType$: r }, n) {
    let i;
    this.parts = [];
    let a = 0, o = 0;
    const l = t.length - 1, s = this.parts, [c, u] = _i(t, r);
    if (this.el = et.createElement(c, n), ue.currentNode = this.el.content, r === 2) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = ue.nextNode()) !== null && s.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const h of i.getAttributeNames())
            if (h.endsWith(xr)) {
              const v = u[o++], p = i.getAttribute(h).split(Z), y = /([.?@])?(.*)/.exec(v);
              s.push({ type: 1, index: a, name: y[2], strings: p, ctor: y[1] === "." ? bi : y[1] === "?" ? mi : y[1] === "@" ? yi : ct }), i.removeAttribute(h);
            } else
              h.startsWith(Z) && (s.push({ type: 6, index: a }), i.removeAttribute(h));
        if (fi.test(i.tagName)) {
          const h = i.textContent.split(Z), v = h.length - 1;
          if (v > 0) {
            i.textContent = Dt ? Dt.emptyScript : "";
            for (let p = 0; p < v; p++)
              i.append(h[p], Ye()), ue.nextNode(), s.push({ type: 2, index: ++a });
            i.append(h[v], Ye());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Dr)
          s.push({ type: 2, index: a });
        else {
          let h = -1;
          for (; (h = i.data.indexOf(Z, h + 1)) !== -1; )
            s.push({ type: 7, index: a }), h += Z.length - 1;
        }
      a++;
    }
  }
  static createElement(t, r) {
    const n = me.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Ee(e, t, r = e, n) {
  if (t === ye)
    return t;
  let i = n !== void 0 ? r._$Co?.[n] : r._$Cl;
  const a = Qe(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, r, n)), n !== void 0 ? (r._$Co ??= [])[n] = i : r._$Cl = i), i !== void 0 && (t = Ee(e, i._$AS(e, t.values), i, n)), t;
}
class gi {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: n } = this._$AD, i = (t?.creationScope ?? me).importNode(r, !0);
    ue.currentNode = i;
    let a = ue.nextNode(), o = 0, l = 0, s = n[0];
    for (; s !== void 0; ) {
      if (o === s.index) {
        let c;
        s.type === 2 ? c = new Ie(a, a.nextSibling, this, t) : s.type === 1 ? c = new s.ctor(a, s.name, s.strings, this, t) : s.type === 6 && (c = new Ei(a, this, t)), this._$AV.push(c), s = n[++l];
      }
      o !== s?.index && (a = ue.nextNode(), o++);
    }
    return ue.currentNode = me, i;
  }
  p(t) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
  }
}
class Ie {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, r, n, i) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && t?.nodeType === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = Ee(this, t, r), Qe(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== ye && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : di(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== O && Qe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(me.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: r, _$litType$: n } = t, i = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = et.createElement(pi(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === i)
      this._$AH.p(r);
    else {
      const a = new gi(i, this), o = a.u(this.options);
      a.p(r), this.T(o), this._$AH = a;
    }
  }
  _$AC(t) {
    let r = on.get(t.strings);
    return r === void 0 && on.set(t.strings, r = new et(t)), r;
  }
  k(t) {
    hi(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, i = 0;
    for (const a of t)
      i === r.length ? r.push(n = new Ie(this.S(Ye()), this.S(Ye()), this, this.options)) : n = r[i], n._$AI(a), i++;
    i < r.length && (this._$AR(n && n._$AB.nextSibling, i), r.length = i);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    for (this._$AP?.(!1, !0, r); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, n, i, a) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = r, this._$AM = i, this.options = a, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, r = this, n, i) {
    const a = this.strings;
    let o = !1;
    if (a === void 0)
      t = Ee(this, t, r, 0), o = !Qe(t) || t !== this._$AH && t !== ye, o && (this._$AH = t);
    else {
      const l = t;
      let s, c;
      for (t = a[0], s = 0; s < a.length - 1; s++)
        c = Ee(this, l[n + s], r, s), c === ye && (c = this._$AH[s]), o ||= !Qe(c) || c !== this._$AH[s], c === O ? t = O : t !== O && (t += (c ?? "") + a[s + 1]), this._$AH[s] = c;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class bi extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class mi extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class yi extends ct {
  constructor(t, r, n, i, a) {
    super(t, r, n, i, a), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = Ee(this, t, r, 0) ?? O) === ye)
      return;
    const n = this._$AH, i = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, a = t !== O && (n === O || i);
    i && this.element.removeEventListener(this.name, this, n), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ei {
  constructor(t, r, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ee(this, t);
  }
}
const Fo = { P: xr, A: Z, C: Dr, M: 1, L: _i, R: gi, D: di, V: Ee, I: Ie, H: ct, N: mi, U: yi, B: bi, F: Ei }, Go = $r.litHtmlPolyfillSupport;
Go?.(et, Ie), ($r.litHtmlVersions ??= []).push("3.1.2");
const Wo = (e, t, r) => {
  const n = r?.renderBefore ?? t;
  let i = n._$litPart$;
  if (i === void 0) {
    const a = r?.renderBefore ?? null;
    n._$litPart$ = i = new Ie(t.insertBefore(Ye(), a), a, void 0, r ?? {});
  }
  return i._$AI(e), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let He = class extends xe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Wo(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return ye;
  }
};
He._$litElement$ = !0, He.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: He });
const Jo = globalThis.litElementPolyfillSupport;
Jo?.({ LitElement: He });
(globalThis.litElementVersions ??= []).push("4.0.4");
class Xo extends Ho(He) {
}
class Zo extends Xo {
  constructor() {
    super(...arguments), this.disposers = [];
  }
  /**
   * Creates a MobX reaction using the given parameters and disposes it when this element is detached.
   *
   * This should be called from `connectedCallback` to ensure that the reaction is active also if the element is attached again later.
   */
  reaction(t, r, n) {
    this.disposers.push(to(t, r, n));
  }
  /**
   * Creates a MobX autorun using the given parameters and disposes it when this element is detached.
   *
   * This should be called from `connectedCallback` to ensure that the reaction is active also if the element is attached again later.
   */
  autorun(t, r) {
    this.disposers.push(mr(t, r));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.disposers.forEach((t) => {
      t();
    }), this.disposers = [];
  }
}
class Yo {
  constructor() {
    this._panels = [], this._attentionRequiredPanelTag = null, this._floatingPanelsZIndexOrder = [], yr(this), this.restorePositions();
  }
  restorePositions() {
    const t = de.getPanelConfigurations();
    t && (this._panels = this._panels.map((r) => {
      const n = t.find((i) => i.tag === r.tag);
      return n && (r = Object.assign(r, { ...n })), r;
    }));
  }
  /**
   * Adds panelTag as last element -focused- to list.
   * @param panelConfiguration
   */
  addFocusedFloatingPanel(t) {
    this._floatingPanelsZIndexOrder = this._floatingPanelsZIndexOrder.filter((r) => r !== t.tag), t.floating && this._floatingPanelsZIndexOrder.push(t.tag);
  }
  /**
   * Returns the focused z-index of floating panel as following order
   * <ul>
   *     <li>Returns 50 for last(focused) element </li>
   *     <li>Returns the index of element in list(starting from 0) </li>
   *     <li>Returns 0 if panel is not in the list</li>
   * </ul>
   * @param panelTag
   */
  getFloatingPanelZIndex(t) {
    const r = this._floatingPanelsZIndexOrder.findIndex((n) => n === t);
    return r === this._floatingPanelsZIndexOrder.length - 1 ? 50 : r === -1 ? 0 : r;
  }
  get floatingPanelsZIndexOrder() {
    return this._floatingPanelsZIndexOrder;
  }
  get attentionRequiredPanelTag() {
    return this._attentionRequiredPanelTag;
  }
  set attentionRequiredPanelTag(t) {
    this._attentionRequiredPanelTag = t;
  }
  getAttentionRequiredPanelConfiguration() {
    return this._panels.find((t) => t.tag === this._attentionRequiredPanelTag);
  }
  clearAttention() {
    this._attentionRequiredPanelTag = null;
  }
  get panels() {
    return this._panels;
  }
  addPanel(t) {
    this._panels.push(t), this.restorePositions();
  }
  getPanelByTag(t) {
    return this._panels.find((r) => r.tag === t);
  }
  updatePanel(t, r) {
    const n = [...this._panels], i = n.find((a) => a.tag === t);
    if (i) {
      for (const a in r)
        i[a] = r[a];
      r.floating === !1 && (this._floatingPanelsZIndexOrder = this._floatingPanelsZIndexOrder.filter((a) => a !== t)), this._panels = n, de.savePanelConfigurations(this._panels);
    }
  }
  updateOrders(t) {
    const r = [...this._panels];
    r.forEach((n) => {
      const i = t.find((a) => a.tag === n.tag);
      i && (n.panelOrder = i.order);
    }), this._panels = r, de.savePanelConfigurations(r);
  }
}
const Kt = new Yo(), Pt = "copilot-", Qo = "24.4.0.alpha24", Zs = "attention-required", Ys = "https://plugins.jetbrains.com/plugin/23758-vaadin", Qs = "https://marketplace.visualstudio.com/items?itemName=vaadin.vaadin-vscode";
function Ai(e, t) {
  const r = e();
  r ? t(r) : setTimeout(() => Ai(e, t), 50);
}
async function Oi(e) {
  let t;
  const r = new Promise((i) => {
    t = i;
  }), n = setInterval(() => {
    const i = e();
    i && (clearInterval(n), t(i));
  }, 10);
  return r;
}
function es(e) {
  return e && typeof e.lastAccessedBy_ == "number";
}
function el(e) {
  if (e) {
    if (typeof e == "string")
      return e;
    if (!es(e))
      throw new Error(`Expected message to be a string or an observable value but was ${JSON.stringify(e)}`);
    return e.get();
  }
}
function tl(e, t) {
  return e.length > t ? `${e.substring(0, t - 3)}...` : e;
}
const ts = {
  userAgent: navigator.userAgent,
  locale: navigator.language,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
};
async function Pr() {
  return Oi(() => {
    const e = window.Vaadin.devTools, t = e?.frontendConnection && e?.frontendConnection.status === "active";
    return e !== void 0 && t && e?.frontendConnection;
  });
}
function Ht(e, t) {
  Pr().then((r) => r.send(e, { ...t, context: ts }));
}
async function rl() {
  return await Pr(), !!window.Vaadin.devTools.conf.backend;
}
let qe = [];
const sn = [];
function ln(e) {
  e.init({
    addPanel: (t) => {
      Kt.addPanel(t);
    },
    send(t, r) {
      Ht(t, r);
    }
  });
}
function rs() {
  qe.push(import("./copilot-log-plugin-Dz37mlwF.js")), qe.push(import("./copilot-info-plugin-NzQZBcz4.js")), qe.push(import("./copilot-features-plugin-CRFgg8H6.js"));
}
function ns() {
  {
    const e = `https://cdn.vaadin.com/copilot/${Qo}/copilot-plugins.js`;
    import(
      /* @vite-ignore */
      e
    ).catch((t) => {
      console.warn(`Unable to load plugins from ${e}. Some Copilot features are unavailable.`, t);
    });
  }
}
function is() {
  Promise.all(qe).then(() => {
    const e = window.Vaadin;
    if (e.copilot.plugins) {
      const t = e.copilot.plugins;
      e.copilot.plugins.push = (r) => ln(r), Array.from(t).forEach((r) => {
        sn.includes(r) || (ln(r), sn.push(r));
      });
    }
  }), qe = [];
}
const nl = (e, t, r) => t >= e.left && t <= e.right && r >= e.top && r <= e.bottom, as = (e) => {
  const t = [];
  let r = os(e);
  for (; r; )
    t.push(r), r = r.parentElement;
  return t;
};
function os(e) {
  return e.parentElement ?? e.parentNode?.host;
}
function hr(e) {
  return !e || !(e instanceof HTMLElement) ? !1 : [...as(e), e].map((t) => t.localName).some((t) => t.startsWith(Pt));
}
function il(e) {
  return e instanceof Element;
}
class ss {
  constructor() {
    this.active = !1, this.activate = () => {
      this.active = !0, this.blurActiveApplicationElement();
    }, this.deactivate = () => {
      this.active = !1;
    }, this.focusInEventListener = (t) => {
      this.active && (hr(t.target) || (t.target.blur && t.target.blur(), document.body.querySelector("copilot-main")?.focus()));
    };
  }
  hostConnectedCallback() {
    const t = this.getApplicationRootElement();
    t && t instanceof HTMLElement && t.addEventListener("focusin", this.focusInEventListener);
  }
  hostDisconnectedCallback() {
    const t = this.getApplicationRootElement();
    t && t instanceof HTMLElement && t.removeEventListener("focusin", this.focusInEventListener);
  }
  getApplicationRootElement() {
    return document.body.firstElementChild;
  }
  blurActiveApplicationElement() {
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
  }
}
const dt = new ss(), M = window.Vaadin.copilot.eventbus;
if (!M)
  throw new Error("Tried to access copilot eventbus before it was initialized.");
var ls = /* @__PURE__ */ ((e) => (e[e.AddClickListener = 0] = "AddClickListener", e[e.AI = 1] = "AI", e[e.Delete = 2] = "Delete", e[e.DragAndDrop = 3] = "DragAndDrop", e[e.Duplicate = 4] = "Duplicate", e[e.SetLabel = 5] = "SetLabel", e[e.SetText = 6] = "SetText", e[e.SetHelper = 7] = "SetHelper", e[e.WrapWithTag = 8] = "WrapWithTag", e[e.Alignment = 9] = "Alignment", e[e.ModifyComponentSource = 10] = "ModifyComponentSource", e))(ls || {});
const g = window.Vaadin.copilot._uiState;
if (!g)
  throw new Error("Tried to access copilot ui state before it was initialized.");
const wi = (e, t) => {
  Ht("copilot-track-event", { event: e, value: t });
}, cs = async (e, t, r) => window.Vaadin.copilot.comm(e, t, r);
var Si = /* @__PURE__ */ ((e) => (e.INFORMATION = "information", e.WARNING = "warning", e.ERROR = "error", e))(Si || {});
function us() {
  return import("./copilot-notification-B586iedM.js").then((e) => e.c);
}
function Ni(e, t) {
  us().then(({ showNotification: r }) => {
    r({
      type: Si.ERROR,
      message: "Copilot internal error",
      details: e + (t ? `
${t}` : "")
    });
  }), wi("error", `${e}
\`\`\`${t}\`\`\``);
}
const $i = () => {
  hs().then((e) => g.setUserInfo(e)).catch((e) => Ni("Failed to load userInfo", e));
}, hs = async () => cs(`${Pt}get-user-info`, {}, (e) => (delete e.data.reqId, e.data)), ds = async () => Oi(() => g.userInfo), al = async () => (await ds()).accessTo.includes("vaadin-employee"), xi = window.Vaadin.copilot._browserState;
if (!xi)
  throw new Error("Tried to access copilot browser state before it was initialized.");
function fs(e) {
  return e.composed && e.composedPath().map((t) => t.localName).some((t) => t === "copilot-spotlight");
}
function vs(e) {
  return e.composed && e.composedPath().map((t) => t.localName).some((t) => t === "copilot-drawer-panel" || t === "copilot-section-panel-wrapper");
}
let Zt = !1, ft = 0;
const cn = (e) => {
  if (xi.activationShortcutEnabled)
    if (e.key === "Shift" && !e.ctrlKey && !e.altKey && !e.metaKey)
      Zt = !0;
    else if (Zt && e.shiftKey && (e.key === "Control" || e.key === "Meta")) {
      if (ft++, ft === 2) {
        g.toggleActive();
        return;
      }
      setTimeout(() => {
        ft = 0;
      }, 500);
    } else
      Zt = !1, ft = 0;
  g.active && ps(e);
}, ps = (e) => {
  const t = fs(e);
  if (e.shiftKey && e.code === "Space") {
    if (g.feedbackOpened)
      return;
    g.setSpotlightActive(!g.spotlightActive), e.stopPropagation(), e.preventDefault();
  } else if (e.key === "Escape") {
    if (e.stopPropagation(), g.loginCheckActive) {
      g.setLoginCheckActive(!1);
      return;
    }
    M.emit("close-drawers", {}), g.setSpotlightActive(!1);
  } else
    !vs(e) && !t && _s(e) ? (M.emit("delete-selected", {}), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "d" && !t ? (M.emit("duplicate-selected", {}), e.preventDefault(), e.stopPropagation()) : (e.ctrlKey || e.metaKey) && e.key === "z" && g.idePluginState?.supportedActions?.find((r) => r === "undo") && (M.emit("undoRedo", { undo: !e.shiftKey }), e.preventDefault(), e.stopPropagation());
}, _s = (e) => (e.key === "Backspace" || e.key === "Delete") && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Di = Symbol.for(""), gs = (e) => {
  if (e?.r === Di)
    return e?._$litStatic$;
}, Pi = (e) => ({ _$litStatic$: e, r: Di }), un = /* @__PURE__ */ new Map(), bs = (e) => (t, ...r) => {
  const n = r.length;
  let i, a;
  const o = [], l = [];
  let s, c = 0, u = !1;
  for (; c < n; ) {
    for (s = t[c]; c < n && (a = r[c], (i = gs(a)) !== void 0); )
      s += i + t[++c], u = !0;
    c !== n && l.push(a), o.push(s), c++;
  }
  if (c === n && o.push(t[n]), u) {
    const h = o.join("$$lit$$");
    (t = un.get(h)) === void 0 && (o.raw = o, un.set(h, t = o)), r = l;
  }
  return e(t, ...r);
}, Ct = bs(ur);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ms = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, ys = (e) => (...t) => ({ _$litDirective$: e, values: t });
class Es {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, n) {
    this._$Ct = t, this._$AM = r, this._$Ci = n;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: As } = Fo, ol = (e) => e.strings === void 0, hn = () => document.createComment(""), ke = (e, t, r) => {
  const n = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
  if (r === void 0) {
    const a = n.insertBefore(hn(), i), o = n.insertBefore(hn(), i);
    r = new As(a, o, e, e.options);
  } else {
    const a = r._$AB.nextSibling, o = r._$AM, l = o !== e;
    if (l) {
      let s;
      r._$AQ?.(e), r._$AM = e, r._$AP !== void 0 && (s = e._$AU) !== o._$AU && r._$AP(s);
    }
    if (a !== i || l) {
      let s = r._$AA;
      for (; s !== a; ) {
        const c = s.nextSibling;
        n.insertBefore(s, i), s = c;
      }
    }
  }
  return r;
}, le = (e, t, r = e) => (e._$AI(t, r), e), Os = {}, ws = (e, t = Os) => e._$AH = t, Ss = (e) => e._$AH, Yt = (e) => {
  e._$AP?.(!1, !0);
  let t = e._$AA;
  const r = e._$AB.nextSibling;
  for (; t !== r; ) {
    const n = t.nextSibling;
    t.remove(), t = n;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dn = (e, t, r) => {
  const n = /* @__PURE__ */ new Map();
  for (let i = t; i <= r; i++)
    n.set(e[i], i);
  return n;
}, Ci = ys(class extends Es {
  constructor(e) {
    if (super(e), e.type !== ms.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, r) {
    let n;
    r === void 0 ? r = t : t !== void 0 && (n = t);
    const i = [], a = [];
    let o = 0;
    for (const l of e)
      i[o] = n ? n(l, o) : o, a[o] = r(l, o), o++;
    return { values: a, keys: i };
  }
  render(e, t, r) {
    return this.dt(e, t, r).values;
  }
  update(e, [t, r, n]) {
    const i = Ss(e), { values: a, keys: o } = this.dt(t, r, n);
    if (!Array.isArray(i))
      return this.ut = o, a;
    const l = this.ut ??= [], s = [];
    let c, u, h = 0, v = i.length - 1, p = 0, y = a.length - 1;
    for (; h <= v && p <= y; )
      if (i[h] === null)
        h++;
      else if (i[v] === null)
        v--;
      else if (l[h] === o[p])
        s[p] = le(i[h], a[p]), h++, p++;
      else if (l[v] === o[y])
        s[y] = le(i[v], a[y]), v--, y--;
      else if (l[h] === o[y])
        s[y] = le(i[h], a[y]), ke(e, s[y + 1], i[h]), h++, y--;
      else if (l[v] === o[p])
        s[p] = le(i[v], a[p]), ke(e, i[h], i[v]), v--, p++;
      else if (c === void 0 && (c = dn(o, p, y), u = dn(l, h, v)), c.has(l[h]))
        if (c.has(l[v])) {
          const m = u.get(o[p]), S = m !== void 0 ? i[m] : null;
          if (S === null) {
            const q = ke(e, i[h]);
            le(q, a[p]), s[p] = q;
          } else
            s[p] = le(S, a[p]), ke(e, i[h], S), i[m] = null;
          p++;
        } else
          Yt(i[v]), v--;
      else
        Yt(i[h]), h++;
    for (; p <= y; ) {
      const m = ke(e, s[y + 1]);
      le(m, a[p]), s[p++] = m;
    }
    for (; h <= v; ) {
      const m = i[h++];
      m !== null && Yt(m);
    }
    return this.ut = o, ws(e, s), ye;
  }
}), bt = /* @__PURE__ */ new Map(), Ns = (e) => {
  const r = Kt.panels.filter((n) => !n.floating && n.panel === e).sort((n, i) => n.panelOrder - i.panelOrder);
  return Ct`
    ${Ci(
    r,
    (n) => n.tag,
    (n) => {
      const i = Pi(n.tag);
      return Ct`
                        <copilot-section-panel-wrapper panelTag="${i}">
                            <${i} slot="content"></${i}>
                        </copilot-section-panel-wrapper>`;
    }
  )}
  `;
}, $s = () => {
  const e = Kt.panels;
  return Ct`
    ${Ci(
    e.filter((t) => t.floating),
    (t) => t.tag,
    (t) => {
      const r = Pi(t.tag);
      return Ct`
                        <copilot-section-panel-wrapper panelTag="${r}">
                            <${r} slot="content"></${r}>
                        </copilot-section-panel-wrapper>`;
    }
  )}
  `;
}, sl = (e) => {
  const t = e.panelTag, r = e.querySelector('[slot="content"]');
  r && bt.set(t, r);
}, ll = (e) => {
  if (bt.has(e.panelTag)) {
    const t = bt.get(e.panelTag);
    e.querySelector('[slot="content"]').replaceWith(t);
  }
  bt.delete(e.panelTag);
};
let vt;
const xs = new Uint8Array(16);
function Ds() {
  if (!vt && (vt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return vt(xs);
}
const N = [];
for (let e = 0; e < 256; ++e)
  N.push((e + 256).toString(16).slice(1));
function Ps(e, t = 0) {
  return N[e[t + 0]] + N[e[t + 1]] + N[e[t + 2]] + N[e[t + 3]] + "-" + N[e[t + 4]] + N[e[t + 5]] + "-" + N[e[t + 6]] + N[e[t + 7]] + "-" + N[e[t + 8]] + N[e[t + 9]] + "-" + N[e[t + 10]] + N[e[t + 11]] + N[e[t + 12]] + N[e[t + 13]] + N[e[t + 14]] + N[e[t + 15]];
}
const Cs = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), fn = {
  randomUUID: Cs
};
function Vs(e, t, r) {
  if (fn.randomUUID && !t && !e)
    return fn.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Ds)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return Ps(n);
}
const mt = [], Be = [], cl = async (e, t, r) => {
  let n, i;
  t.reqId = Vs();
  const a = new Promise((o, l) => {
    n = o, i = l;
  });
  return mt.push({
    handleMessage(o) {
      if (o?.data?.reqId !== t.reqId)
        return !1;
      try {
        n(r(o));
      } catch (l) {
        i(l.toString());
      }
      return !0;
    }
  }), Ht(e, t), a;
};
function Ts(e) {
  for (const t of mt)
    if (t.handleMessage(e))
      return mt.splice(mt.indexOf(t), 1), !0;
  if (e.command === "copilot-plugin-state")
    return g.setIdePluginState(e.data), !0;
  if (e.command === "copilot-prokey-received")
    return $i(), !0;
  M.emitUnsafe({ type: e.command, data: e.data });
  for (const t of Ti())
    if (Vi(t, e))
      return !0;
  return Be.push(e), !1;
}
function Vi(e, t) {
  return e.handleMessage?.call(e, t);
}
function Rs() {
  if (Be.length)
    for (const e of Ti())
      for (let t = 0; t < Be.length; t++)
        Vi(e, Be[t]) && (Be.splice(t, 1), t--);
}
function Ti() {
  const e = document.querySelector("copilot-main");
  return e ? e.renderRoot.querySelectorAll("copilot-section-panel-wrapper *") : [];
}
const js = ":host{--gray-h: 220;--gray-s: 30%;--gray-l: 30%;--gray-hsl: var(--gray-h) var(--gray-s) var(--gray-l);--gray: hsl(var(--gray-hsl));--gray-50: hsl(var(--gray-hsl) / .05);--gray-100: hsl(var(--gray-hsl) / .1);--gray-150: hsl(var(--gray-hsl) / .16);--gray-200: hsl(var(--gray-hsl) / .24);--gray-250: hsl(var(--gray-hsl) / .34);--gray-300: hsl(var(--gray-hsl) / .46);--gray-350: hsl(var(--gray-hsl) / .6);--gray-400: hsl(var(--gray-hsl) / .7);--gray-450: hsl(var(--gray-hsl) / .8);--gray-500: hsl(var(--gray-hsl) / .9);--gray-550: hsl(var(--gray-hsl));--gray-600: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 2%));--gray-650: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 4%));--gray-700: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 8%));--gray-750: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 12%));--gray-800: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 20%));--gray-850: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 23%));--gray-900: hsl(var(--gray-h) var(--gray-s) calc(var(--gray-l) - 30%));--blue-h: 220;--blue-s: 90%;--blue-l: 53%;--blue-hsl: var(--blue-h) var(--blue-s) var(--blue-l);--blue: hsl(var(--blue-hsl));--blue-50: hsl(var(--blue-hsl) / .05);--blue-100: hsl(var(--blue-hsl) / .1);--blue-150: hsl(var(--blue-hsl) / .2);--blue-200: hsl(var(--blue-hsl) / .3);--blue-250: hsl(var(--blue-hsl) / .4);--blue-300: hsl(var(--blue-hsl) / .5);--blue-350: hsl(var(--blue-hsl) / .6);--blue-400: hsl(var(--blue-hsl) / .7);--blue-450: hsl(var(--blue-hsl) / .8);--blue-500: hsl(var(--blue-hsl) / .9);--blue-550: hsl(var(--blue-hsl));--blue-600: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 4%));--blue-650: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 8%));--blue-700: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 12%));--blue-750: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 15%));--blue-800: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 18%));--blue-850: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 24%));--blue-900: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) - 27%));--purple-h: 246;--purple-s: 90%;--purple-l: 60%;--purple-hsl: var(--purple-h) var(--purple-s) var(--purple-l);--purple: hsl(var(--purple-hsl));--purple-50: hsl(var(--purple-hsl) / .05);--purple-100: hsl(var(--purple-hsl) / .1);--purple-150: hsl(var(--purple-hsl) / .2);--purple-200: hsl(var(--purple-hsl) / .3);--purple-250: hsl(var(--purple-hsl) / .4);--purple-300: hsl(var(--purple-hsl) / .5);--purple-350: hsl(var(--purple-hsl) / .6);--purple-400: hsl(var(--purple-hsl) / .7);--purple-450: hsl(var(--purple-hsl) / .8);--purple-500: hsl(var(--purple-hsl) / .9);--purple-550: hsl(var(--purple-hsl));--purple-600: hsl(var(--purple-h) calc(var(--purple-s) - 4%) calc(var(--purple-l) - 2%));--purple-650: hsl(var(--purple-h) calc(var(--purple-s) - 8%) calc(var(--purple-l) - 4%));--purple-700: hsl(var(--purple-h) calc(var(--purple-s) - 15%) calc(var(--purple-l) - 7%));--purple-750: hsl(var(--purple-h) calc(var(--purple-s) - 23%) calc(var(--purple-l) - 11%));--purple-800: hsl(var(--purple-h) calc(var(--purple-s) - 24%) calc(var(--purple-l) - 15%));--purple-850: hsl(var(--purple-h) calc(var(--purple-s) - 24%) calc(var(--purple-l) - 19%));--purple-900: hsl(var(--purple-h) calc(var(--purple-s) - 27%) calc(var(--purple-l) - 23%));--green-h: 150;--green-s: 80%;--green-l: 42%;--green-hsl: var(--green-h) var(--green-s) var(--green-l);--green: hsl(var(--green-hsl));--green-50: hsl(var(--green-hsl) / .05);--green-100: hsl(var(--green-hsl) / .1);--green-150: hsl(var(--green-hsl) / .2);--green-200: hsl(var(--green-hsl) / .3);--green-250: hsl(var(--green-hsl) / .4);--green-300: hsl(var(--green-hsl) / .5);--green-350: hsl(var(--green-hsl) / .6);--green-400: hsl(var(--green-hsl) / .7);--green-450: hsl(var(--green-hsl) / .8);--green-500: hsl(var(--green-hsl) / .9);--green-550: hsl(var(--green-hsl));--green-600: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 2%));--green-650: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 4%));--green-700: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 8%));--green-750: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 12%));--green-800: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 15%));--green-850: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 19%));--green-900: hsl(var(--green-h) var(--green-s) calc(var(--green-l) - 23%));--yellow-h: 38;--yellow-s: 98%;--yellow-l: 64%;--yellow-hsl: var(--yellow-h) var(--yellow-s) var(--yellow-l);--yellow: hsl(var(--yellow-hsl));--yellow-50: hsl(var(--yellow-hsl) / .07);--yellow-100: hsl(var(--yellow-hsl) / .12);--yellow-150: hsl(var(--yellow-hsl) / .2);--yellow-200: hsl(var(--yellow-hsl) / .3);--yellow-250: hsl(var(--yellow-hsl) / .4);--yellow-300: hsl(var(--yellow-hsl) / .5);--yellow-350: hsl(var(--yellow-hsl) / .6);--yellow-400: hsl(var(--yellow-hsl) / .7);--yellow-450: hsl(var(--yellow-hsl) / .8);--yellow-500: hsl(var(--yellow-hsl) / .9);--yellow-550: hsl(var(--yellow-hsl));--yellow-600: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 5%));--yellow-650: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 10%));--yellow-700: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 15%));--yellow-750: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 20%));--yellow-800: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 25%));--yellow-850: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 30%));--yellow-900: hsl(var(--yellow-h) var(--yellow-s) calc(var(--yellow-l) - 35%));--red-h: 355;--red-s: 75%;--red-l: 55%;--red-hsl: var(--red-h) var(--red-s) var(--red-l);--red: hsl(var(--red-hsl));--red-50: hsl(var(--red-hsl) / .05);--red-100: hsl(var(--red-hsl) / .1);--red-150: hsl(var(--red-hsl) / .2);--red-200: hsl(var(--red-hsl) / .3);--red-250: hsl(var(--red-hsl) / .4);--red-300: hsl(var(--red-hsl) / .5);--red-350: hsl(var(--red-hsl) / .6);--red-400: hsl(var(--red-hsl) / .7);--red-450: hsl(var(--red-hsl) / .8);--red-500: hsl(var(--red-hsl) / .9);--red-550: hsl(var(--red-hsl));--red-600: hsl(var(--red-h) calc(var(--red-s) - 5%) calc(var(--red-l) - 2%));--red-650: hsl(var(--red-h) calc(var(--red-s) - 10%) calc(var(--red-l) - 4%));--red-700: hsl(var(--red-h) calc(var(--red-s) - 15%) calc(var(--red-l) - 8%));--red-750: hsl(var(--red-h) calc(var(--red-s) - 20%) calc(var(--red-l) - 12%));--red-800: hsl(var(--red-h) calc(var(--red-s) - 25%) calc(var(--red-l) - 15%));--red-850: hsl(var(--red-h) calc(var(--red-s) - 30%) calc(var(--red-l) - 19%));--red-900: hsl(var(--red-h) calc(var(--red-s) - 35%) calc(var(--red-l) - 23%));--codeblock-bg: lightgrey}:host(.dark){--gray-s: 15%;--gray-l: 70%;--gray-600: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 6%));--gray-650: hsl(var(--gray-h) calc(var(--gray-s) - 5%) calc(var(--gray-l) + 14%));--gray-700: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 26%));--gray-750: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 36%));--gray-800: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 48%));--gray-850: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 62%));--gray-900: hsl(var(--gray-h) calc(var(--gray-s) - 2%) calc(var(--gray-l) + 70%));--blue-s: 90%;--blue-l: 58%;--blue-600: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 6%));--blue-650: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 12%));--blue-700: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 17%));--blue-750: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 22%));--blue-800: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 28%));--blue-850: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 35%));--blue-900: hsl(var(--blue-h) var(--blue-s) calc(var(--blue-l) + 43%));--purple-600: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 4%));--purple-650: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 9%));--purple-700: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 12%));--purple-750: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 18%));--purple-800: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 24%));--purple-850: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 29%));--purple-900: hsl(var(--purple-h) var(--purple-s) calc(var(--purple-l) + 33%));--green-600: hsl(calc(var(--green-h) - 1) calc(var(--green-s) - 5%) calc(var(--green-l) + 5%));--green-650: hsl(calc(var(--green-h) - 2) calc(var(--green-s) - 10%) calc(var(--green-l) + 12%));--green-700: hsl(calc(var(--green-h) - 4) calc(var(--green-s) - 15%) calc(var(--green-l) + 20%));--green-750: hsl(calc(var(--green-h) - 6) calc(var(--green-s) - 20%) calc(var(--green-l) + 29%));--green-800: hsl(calc(var(--green-h) - 8) calc(var(--green-s) - 25%) calc(var(--green-l) + 37%));--green-850: hsl(calc(var(--green-h) - 10) calc(var(--green-s) - 30%) calc(var(--green-l) + 42%));--green-900: hsl(calc(var(--green-h) - 12) calc(var(--green-s) - 35%) calc(var(--green-l) + 48%));--yellow-600: hsl(calc(var(--yellow-h) + 1) var(--yellow-s) calc(var(--yellow-l) + 4%));--yellow-650: hsl(calc(var(--yellow-h) + 2) var(--yellow-s) calc(var(--yellow-l) + 7%));--yellow-700: hsl(calc(var(--yellow-h) + 4) var(--yellow-s) calc(var(--yellow-l) + 11%));--yellow-750: hsl(calc(var(--yellow-h) + 6) var(--yellow-s) calc(var(--yellow-l) + 16%));--yellow-800: hsl(calc(var(--yellow-h) + 8) var(--yellow-s) calc(var(--yellow-l) + 20%));--yellow-850: hsl(calc(var(--yellow-h) + 10) var(--yellow-s) calc(var(--yellow-l) + 24%));--yellow-900: hsl(calc(var(--yellow-h) + 12) var(--yellow-s) calc(var(--yellow-l) + 29%));--red-600: hsl(calc(var(--red-h) - 1) calc(var(--red-s) - 5%) calc(var(--red-l) + 3%));--red-650: hsl(calc(var(--red-h) - 2) calc(var(--red-s) - 10%) calc(var(--red-l) + 7%));--red-700: hsl(calc(var(--red-h) - 4) calc(var(--red-s) - 15%) calc(var(--red-l) + 14%));--red-750: hsl(calc(var(--red-h) - 6) calc(var(--red-s) - 20%) calc(var(--red-l) + 19%));--red-800: hsl(calc(var(--red-h) - 8) calc(var(--red-s) - 25%) calc(var(--red-l) + 24%));--red-850: hsl(calc(var(--red-h) - 10) calc(var(--red-s) - 30%) calc(var(--red-l) + 30%));--red-900: hsl(calc(var(--red-h) - 12) calc(var(--red-s) - 35%) calc(var(--red-l) + 36%));--codeblock-bg: black}", Ls = ":host{--font-family: Inter, system-ui, ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif;--font-size-0: .6875rem;--font-size-1: .75rem;--font-size-2: .875rem;--font-size-3: 1rem;--font-size-4: 1.125rem;--font-size-5: 1.25rem;--font-size-6: 1.375rem;--font-size-7: 1.5rem;--line-height-1: 1.125rem;--line-height-2: 1.25rem;--line-height-3: 1.5rem;--line-height-4: 1.75rem;--line-height-5: 2rem;--line-height-6: 2.25rem;--line-height-7: 2.5rem;--font-weight-bold: 500;--font-weight-strong: 600;--font: normal 400 var(--font-size-3) / var(--line-height-3) var(--font-family);--font-bold: normal var(--font-weight-bold) var(--font-size-3) / var(--line-height-4) var(--font-family);--font-small: normal 400 var(--font-size-2) / var(--line-height-2) var(--font-family);--font-small-bold: normal var(--font-weight-bold) var(--font-size-2) / var(--line-height-2) var(--font-family);--font-button: normal var(--font-weight-bold) var(--font-size-2) / var(--line-height-2) var(--font-family);--font-tooltip: normal var(--font-weight-bold) var(--font-size-1) / var(--line-height-2) var(--font-family);--radius-1: .1875rem;--radius-2: .375rem;--radius-3: .75rem;--space-25: 2px;--space-50: 4px;--space-75: 6px;--space-100: 8px;--space-150: 12px;--space-200: 16px;--space-300: 24px;--space-400: 32px;--space-500: 40px;--space-600: 48px;--space-700: 56px;--space-800: 64px;--space-900: 72px;--z-index-component-selector: 100;--z-index-floating-panel: 101;--z-index-drawer: 150;--z-index-spotlight: 200;--z-index-popover: 300;--z-index-activation-button: 1000;--duration-1: .1s;--duration-2: .2s;--duration-3: .3s;--duration-4: .4s}:host{--lumo-font-family: var(--font-family);--lumo-font-size-xs: var(--font-size-1);--lumo-font-size-s: var(--font-size-2);--lumo-font-size-m: var(--font-size-3);--lumo-font-size-l: var(--font-size-4);--lumo-font-size-xl: var(--font-size-5);--lumo-font-size-xxl: var(--font-size-6);--lumo-font-size-xxxl: var(--font-size-7);--lumo-line-height-s: var(--line-height-2);--lumo-line-height-m: var(--line-height-3);--lumo-line-height-l: var(--line-height-4);--lumo-border-radius-s: var(--radius-1);--lumo-border-radius-m: var(--radius-2);--lumo-border-radius-l: var(--radius-3);--lumo-base-color: var(--surface-0);--lumo-body-text-color: var(--color-high-contrast);--lumo-header-text-color: var(--color-high-contrast);--lumo-secondary-text-color: var(--color);--lumo-tertiary-text-color: var(--color);--lumo-error-text-color: var(--color-danger);--lumo-primary-text-color: var(--color-high-contrast);--lumo-primary-color: var(--background-button-primary);--lumo-primary-color-50pct: var(--color-accent);--lumo-space-xs: var(--space-50);--lumo-space-s: var(--space-100);--lumo-space-m: var(--space-200);--lumo-space-l: var(--space-300);--lumo-space-xl: var(--space-500);--lumo-icon-size-xs: var(--font-size-1);--lumo-icon-size-s: var(--font-size-2);--lumo-icon-size-m: var(--font-size-3);--lumo-icon-size-l: var(--font-size-4);--lumo-icon-size-xl: var(--font-size-5)}:host{color-scheme:light;--surface-0: hsl(var(--gray-h) var(--gray-s) 90% / .8);--surface-1: hsl(var(--gray-h) var(--gray-s) 95% / .8);--surface-2: hsl(var(--gray-h) var(--gray-s) 100% / .8);--surface-background: linear-gradient( hsl(var(--gray-h) var(--gray-s) 95% / .7), hsl(var(--gray-h) var(--gray-s) 95% / .65) );--surface-glow: radial-gradient(circle at 30% 0%, hsl(var(--gray-h) var(--gray-s) 98% / .7), transparent 50%);--surface-border-glow: radial-gradient(at 50% 50%, hsl(var(--purple-h) 90% 90% / .8) 0, transparent 50%);--surface: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, hsl(var(--gray-h) var(--gray-s) 98% / .2);--surface-with-border-glow: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, var(--surface-border-glow) no-repeat border-box 0 0 / var(--glow-size, 600px) var(--glow-size, 600px);--surface-border-color: hsl(var(--gray-h) var(--gray-s) 100% / .7);--surface-backdrop-filter: blur(10px);--surface-box-shadow-1: 0 0 0 .5px hsl(var(--gray-h) var(--gray-s) 5% / .15), 0 6px 12px -1px hsl(var(--shadow-hsl) / .3);--surface-box-shadow-2: 0 0 0 .5px hsl(var(--gray-h) var(--gray-s) 5% / .15), 0 24px 40px -4px hsl(var(--shadow-hsl) / .4);--background-button: linear-gradient( hsl(var(--gray-h) var(--gray-s) 98% / .4), hsl(var(--gray-h) var(--gray-s) 90% / .2) );--background-button-active: hsl(var(--gray-h) var(--gray-s) 80% / .2);--color: var(--gray-500);--color-high-contrast: var(--gray-900);--color-accent: var(--purple-700);--color-danger: var(--red-700);--border-color: var(--gray-150);--border-color-high-contrast: var(--gray-300);--border-color-button: var(--gray-350);--border-color-popover: hsl(var(--gray-hsl) / .08);--border-color-dialog: hsl(var(--gray-hsl) / .08);--accent-color: var(--purple-600);--selection-color: hsl(var(--blue-hsl));accent-color:hsl(var(--blue-hsl));--shadow-hsl: var(--gray-h) var(--gray-s) 20%;--lumo-contrast-5pct: var(--gray-100);--lumo-contrast-10pct: var(--gray-200);--lumo-contrast-60pct: var(--gray-400);--lumo-contrast-80pct: var(--gray-600);--lumo-contrast-90pct: var(--gray-800)}:host(.dark){color-scheme:dark;--surface-0: hsl(var(--gray-h) var(--gray-s) 10% / .85);--surface-1: hsl(var(--gray-h) var(--gray-s) 14% / .85);--surface-2: hsl(var(--gray-h) var(--gray-s) 18% / .85);--surface-background: linear-gradient( hsl(var(--gray-h) var(--gray-s) 8% / .65), hsl(var(--gray-h) var(--gray-s) 8% / .7) );--surface-glow: radial-gradient( circle at 30% 0%, hsl(var(--gray-h) calc(var(--gray-s) * 2) 90% / .12), transparent 50% );--surface: var(--surface-glow) no-repeat border-box, var(--surface-background) no-repeat padding-box, hsl(var(--gray-h) var(--gray-s) 20% / .4);--surface-border-glow: hsl(var(--gray-h) var(--gray-s) 20% / .4) radial-gradient(at 50% 50%, hsl(250 40% 80% / .4) 0, transparent 50%);--surface-border-color: hsl(var(--gray-h) var(--gray-s) 50% / .2);--surface-box-shadow-1: 0 0 0 .5px hsl(var(--purple-h) 40% 5% / .4), 0 6px 12px -1px hsl(var(--shadow-hsl) / .4);--surface-box-shadow-2: 0 0 0 .5px hsl(var(--purple-h) 40% 5% / .4), 0 24px 40px -4px hsl(var(--shadow-hsl) / .5);--color: var(--gray-650);--background-button: linear-gradient( hsl(var(--gray-h) calc(var(--gray-s) * 2) 80% / .1), hsl(var(--gray-h) calc(var(--gray-s) * 2) 80% / 0) );--background-button-active: hsl(var(--gray-h) var(--gray-s) 10% / .1);--border-color-popover: hsl(var(--gray-h) var(--gray-s) 90% / .1);--border-color-dialog: hsl(var(--gray-h) var(--gray-s) 90% / .1);--shadow-hsl: 0 0% 0%;--lumo-disabled-text-color: var(--lumo-contrast-60pct)}", Is = "button{-webkit-appearance:none;appearance:none;background:var(--background-button);background-origin:border-box;font:var(--font-button);color:var(--color-high-contrast);border:1px solid var(--border-color);border-radius:var(--radius-2);padding:var(--space-25) var(--space-100)}button:focus-visible{outline:2px solid var(--blue-500);outline-offset:2px}button:active:not(:disabled){background:var(--background-button-active)}button:disabled{color:var(--gray-400);background:transparent}", Us = ":is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay){z-index:var(--z-index-popover)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay):first-of-type{padding-top:0}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay)::part(overlay){color:inherit;font:inherit;background:var(--surface);-webkit-backdrop-filter:var(--surface-backdrop-filter);backdrop-filter:var(--surface-backdrop-filter);border-radius:var(--radius-2);border:1px solid var(--surface-border-color);box-shadow:var(--surface-box-shadow-1)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay)::part(content){padding:var(--space-50)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item){color:var(--color-high-contrast);font:var(--font-small);display:flex;align-items:center;cursor:default;padding:var(--space-75) var(--space-100);min-height:0;border-radius:var(--radius-1);--_lumo-item-selected-icon-display: none}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled],:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled] .hint,:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[disabled] vaadin-icon{color:var(--lumo-disabled-text-color)}:is(vaadin-context-menu-item,vaadin-menu-bar-item)[expanded]{background:var(--gray-200)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item):not([disabled]):hover{background:var(--color-high-contrast);color:var(--surface-2);--lumo-tertiary-text-color: var(--surface-2);--color: currentColor;--border-color: var(--surface-0)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)[focus-ring]{outline:2px solid var(--selection-color);outline-offset:-2px}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item):is([aria-haspopup=true]):after{margin-inline-end:calc(var(--space-200) * -1);margin-right:unset}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item).danger{color:var(--color-danger);--color: currentColor}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item).danger:not([disabled]):hover{background-color:var(--color-danger)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item)::part(content){display:flex;align-items:center;gap:var(--space-100)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item,vaadin-combo-box-item) vaadin-icon{width:1em;height:1em;padding:0;color:var(--color)}:is(vaadin-context-menu-overlay,vaadin-select-overlay,vaadin-menu-bar-overlay) hr{margin:var(--space-50)}:is(vaadin-context-menu-item,vaadin-select-item,vaadin-menu-bar-item) .label{padding-inline-end:var(--space-300)}:is(vaadin-context-menu-item,vaadin-select-item,vaadin-menu-bar-item) .hint{margin-inline-start:auto;color:var(--color)}:is(vaadin-context-menu-item,vaadin-menu-bar-item,vaadin-select-item) kbd{display:inline-block;border-radius:var(--radius-1);border:1px solid var(--border-color);min-width:1em;min-height:1em;text-align:center;margin:0 .1em;padding:.1em .25em;box-sizing:border-box;font-size:var(--font-size-1);font-family:var(--font-family);line-height:1}.hierarchy-overlay{left:var(--copilot-hierarchy-overlay-left-pos, inherit)!important;top:var(--copilot-hierarchy-overlay-top-pos, inherit)!important}.hierarchy-overlay vaadin-context-menu-item{padding:0}:is(copilot-alignment-overlay)::part(content){padding:0}", Ms = "code.codeblock{display:block;white-space:pre;background:var(--codeblock-bg);padding:.5em;position:relative;min-height:2em}copilot-copy{position:absolute;top:.5em;right:.5em;white-space:normal}copilot-copy button{max-height:calc(100% - 1em);background:var(--background-button);background-origin:border-box;font:var(--font-button);color:var(--color-high-contrast);border:1px solid var(--border-color);border-radius:var(--radius-2);padding:var(--space-25) var(--space-100)}";
var ks = Object.defineProperty, Bs = Object.getOwnPropertyDescriptor, zs = (e, t, r, n) => {
  for (var i = n > 1 ? void 0 : n ? Bs(t, r) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
  return n && i && ks(t, r, i), i;
};
let vn = class extends Zo {
  constructor() {
    super(...arguments), this.removers = [], this.initialized = !1, this.overlayOutsideClickListener = (e) => {
      hr(e.target?.owner) || (g.active || hr(e.detail.sourceEvent.target)) && e.preventDefault();
    };
  }
  static get styles() {
    return [
      $e(js),
      $e(Ls),
      $e(Is),
      $e(Us),
      $e(Ms),
      To`
        :host {
          position: fixed;
          inset: 0;
          z-index: 9999;
          contain: strict;
          font: var(--font-small);
          color: var(--color);
          pointer-events: all;
        }

        :host(:not([active])) {
          visibility: hidden !important;
          pointer-events: none;
        }

        /* Hide floating panels when not active */

        :host(:not([active])) > copilot-section-panel-wrapper {
          display: none !important;
        }

        /* Keep activation button and menu visible */

        copilot-activation-button,
        .activation-button-menu {
          visibility: visible;
        }

        copilot-activation-button {
          pointer-events: auto;
        }

        a {
          color: var(--blue-600);
          text-decoration-color: var(--blue-200);
        }

        /* Needed to prevent a JS error because of monkey patched '_attachOverlay'. It is some scope issue, */
        /* where 'this._placeholder.parentNode' is undefined - the scope if 'this' gets messed up at some point. */
        /* We also don't want animations on the overlays to make the feel faster, so this is fine. */

        :is(
            vaadin-context-menu-overlay,
            vaadin-menu-bar-overlay,
            vaadin-select-overlay,
            vaadin-combo-box-overlay,
            vaadin-tooltip-overlay
          ):is([opening], [closing]),
        :is(
            vaadin-context-menu-overlay,
            vaadin-menu-bar-overlay,
            vaadin-select-overlay,
            vaadin-combo-box-overlay,
            vaadin-tooltip-overlay
          )::part(overlay) {
          animation: none !important;
        }

        :host(:not([active])) copilot-drawer-panel::before {
          animation: none;
        }

        /* Workaround for https://github.com/vaadin/web-components/issues/5400 */

        :host([active]) .activation-button-menu .activate,
        :host(:not([active])) .activation-button-menu .deactivate,
        :host(:not([active])) .activation-button-menu .toggle-spotlight {
          display: none;
        }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.init().catch((e) => Ni("Unable to initialize copilot", e));
  }
  async init() {
    if (this.initialized)
      return;
    document.body.style.setProperty("--dev-tools-button-display", "none"), await import("./copilot-global-vars-later-CtvlDY_k.js"), await import("./copilot-init-step2-C3SA9YTu.js"), rs(), this.tabIndex = 0, dt.hostConnectedCallback(), window.addEventListener("keydown", cn), M.onSend(this.handleSendEvent), this.removers.push(M.on("close-drawers", this.closeDrawers.bind(this))), this.removers.push(
      M.on("open-attention-required-drawer", this.openDrawerIfPanelRequiresAttention.bind(this))
    ), this.addEventListener("mousemove", this.mouseMoveListener), this.addEventListener("dragover", this.mouseMoveListener), document.documentElement.addEventListener("vaadin-overlay-outside-click", this.overlayOutsideClickListener);
    const e = window.matchMedia("(prefers-color-scheme: dark)");
    this.classList.toggle("dark", e.matches), e.addEventListener("change", (t) => {
      this.classList.toggle("dark", e.matches);
    }), this.reaction(
      () => g.spotlightActive,
      () => {
        de.saveSpotlightActivation(g.spotlightActive), Array.from(this.shadowRoot.querySelectorAll("copilot-section-panel-wrapper")).filter((t) => t.panelInfo?.floating === !0).forEach((t) => {
          g.spotlightActive ? t.style.setProperty("display", "none") : t.style.removeProperty("display");
        });
      }
    ), this.reaction(
      () => g.active,
      () => {
        this.toggleAttribute("active", g.active), g.active ? this.activate() : this.deactivate(), de.saveCopilotActivation(g.active);
      }
    ), this.reaction(
      () => g.activatedAtLeastOnce,
      () => {
        $i(), ns();
      }
    ), this.reaction(
      () => g.sectionPanelDragging,
      () => {
        g.sectionPanelDragging && Array.from(this.shadowRoot.children).filter((r) => r.localName.endsWith("-overlay")).forEach((r) => {
          r.close && r.close();
        });
      }
    ), de.getCopilotActivation() && Pr().then(() => {
      g.setActive(!0);
    }), this.initialized = !0;
  }
  /**
   * Called when Copilot is activated. Good place to start attach listeners etc.
   */
  activate() {
    wi("activate"), dt.activate(), is(), this.openDrawerIfPanelRequiresAttention(), this.closeOpenAppOverlays(), document.documentElement.addEventListener("mouseleave", this.mouseLeaveListener);
  }
  /**
   * Called when Copilot is deactivated. Good place to remove listeners etc.
   */
  deactivate() {
    this.closeDrawers(), dt.deactivate(), document.documentElement.removeEventListener("mouseleave", this.mouseLeaveListener);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), dt.hostDisconnectedCallback(), window.removeEventListener("keydown", cn), M.offSend(this.handleSendEvent), this.removers.forEach((e) => e()), this.removeEventListener("mousemove", this.mouseMoveListener), this.removeEventListener("dragover", this.mouseMoveListener), document.documentElement.removeEventListener("vaadin-overlay-outside-click", this.overlayOutsideClickListener);
  }
  handleSendEvent(e) {
    const t = e.detail.command, r = e.detail.data;
    Ht(t, r);
  }
  /**
   * Closes the overlays in user app on activation
   * @private
   */
  closeOpenAppOverlays() {
    Array.from(document.body.children).filter((e) => e.localName.endsWith("-overlay")).forEach((e) => {
      e.close && e.close();
    });
  }
  /**
   * Opens the attention required drawer if there is any.
   */
  openDrawerIfPanelRequiresAttention() {
    const e = Kt.getAttentionRequiredPanelConfiguration();
    if (!e)
      return;
    const t = e.panel;
    if (!t || e.floating)
      return;
    const r = this.shadowRoot.querySelector(`copilot-drawer-panel[position="${t}"]`);
    r.opened = !0;
  }
  render() {
    return ur`
      <copilot-activation-button
        @activation-btn-clicked="${() => {
      g.toggleActive(), g.setLoginCheckActive(!1);
    }}"
        @spotlight-activation-changed="${(e) => {
      g.setSpotlightActive(e.detail);
    }}"
        .spotlightOn="${g.spotlightActive}">
      </copilot-activation-button>
      <copilot-component-selector></copilot-component-selector>
      <copilot-label-editor-container></copilot-label-editor-container>
      <copilot-info-tooltip></copilot-info-tooltip>
      ${this.renderDrawer("left")} ${this.renderDrawer("right")} ${this.renderDrawer("bottom")} ${$s()}
      <copilot-spotlight ?active=${g.spotlightActive && g.active}></copilot-spotlight>
      <copilot-login-check ?active=${g.loginCheckActive && g.active}></copilot-login-check>
      <copilot-notifications-container></copilot-notifications-container>
    `;
  }
  renderDrawer(e) {
    return ur` <copilot-drawer-panel position=${e}> ${Ns(e)}</copilot-drawer-panel>`;
  }
  closeDrawers() {
    this.shadowRoot?.querySelectorAll(`${Pt}drawer-panel`).forEach((e) => e.opened = !1);
  }
  updated(e) {
    super.updated(e), this.attachActivationButtonToBody(), Rs();
  }
  attachActivationButtonToBody() {
    const e = document.body.querySelectorAll("copilot-activation-button");
    e.length > 1 && e[0].remove();
  }
  mouseMoveListener(e) {
    e.composedPath().find((t) => t.localName === `${Pt}drawer-panel`) || this.closeDrawers();
  }
  mouseLeaveListener() {
    M.emit("close-drawers", {});
  }
};
vn = zs([
  Vo("copilot-main")
], vn);
const Ks = window.Vaadin, Hs = {
  init(e) {
    Ai(
      () => window.Vaadin.devTools,
      (t) => {
        const r = t.handleFrontendMessage;
        t.handleFrontendMessage = (n) => {
          Ts(n) || r.call(t, n);
        };
      }
    );
  }
};
Ks.devToolsPlugins.push(Hs);
const qs = window.litIssuedWarnings ??= /* @__PURE__ */ new Set();
qs.add(
  "Multiple versions of Lit loaded. Loading multiple versions is not recommended. See https://lit.dev/msg/multiple-versions for more information."
);
export {
  Zs as A,
  ll as B,
  de as C,
  el as D,
  Si as E,
  tl as F,
  es as G,
  Js as H,
  al as I,
  Ys as J,
  wi as K,
  cr as L,
  Zo as M,
  ui as N,
  ls as O,
  Pt as P,
  O as T,
  Qs as V,
  cs as a,
  g as b,
  M as c,
  cl as d,
  Kt as e,
  nl as f,
  $e as g,
  Ni as h,
  il as i,
  rl as j,
  To as k,
  He as l,
  yr as m,
  Es as n,
  ol as o,
  ms as p,
  Wo as q,
  to as r,
  Ht as s,
  Vo as t,
  ys as u,
  Vs as v,
  xi as w,
  ur as x,
  ye as y,
  sl as z
};
