var _gsScope;
!function (t) {
    function r(t, e) {
        return t.test(e)
    }

    function e(t) {
        var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""), i = e.split("[FBAN");
        void 0 !== i[1] && (e = i[0]), void 0 !== (i = e.split("Twitter"))[1] && (e = i[0]);
        var n = {
            apple: {
                phone: r(s, e) && !r(f, e),
                ipod: r(o, e),
                tablet: !r(s, e) && r(a, e) && !r(f, e),
                device: (r(s, e) || r(o, e) || r(a, e)) && !r(f, e)
            },
            amazon: {phone: r(h, e), tablet: !r(h, e) && r(c, e), device: r(h, e) || r(c, e)},
            android: {
                phone: !r(f, e) && r(h, e) || !r(f, e) && r(l, e),
                tablet: !r(f, e) && !r(h, e) && !r(l, e) && (r(c, e) || r(u, e)),
                device: !r(f, e) && (r(h, e) || r(c, e) || r(l, e) || r(u, e)) || r(/\bokhttp\b/i, e)
            },
            windows: {phone: r(f, e), tablet: r(p, e), device: r(f, e) || r(p, e)},
            other: {
                blackberry: r(d, e),
                blackberry10: r(m, e),
                opera: r(g, e),
                firefox: r(v, e),
                chrome: r(_, e),
                device: r(d, e) || r(m, e) || r(g, e) || r(v, e) || r(_, e)
            }
        };
        return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
    }

    var s = /iPhone/i, o = /iPod/i, a = /iPad/i, l = /\bAndroid(?:.+)Mobile\b/i, u = /Android/i,
        h = /\bAndroid(?:.+)SD4930UR\b/i, c = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, f = /Windows Phone/i,
        p = /\bWindows(?:.+)ARM\b/i, d = /BlackBerry/i, m = /BB10/i, g = /Opera Mini/i,
        _ = /\b(CriOS|Chrome)(?:.+)Mobile/i, v = /\Mobile(?:.+)Firefox\b/i;
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = e : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = e() : "function" == typeof define && define.amd ? define([], t.isMobile = e()) : t.isMobile = e()
}(this), function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (T, t) {
    "use strict";

    function m(t, e, i) {
        var n, r = (e = e || Z).createElement("script");
        if (r.text = t, i) for (n in ct) i[n] && (r[n] = i[n]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function g(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? nt[rt.call(t)] || "object" : typeof t
    }

    function a(t) {
        var e = !!t && "length" in t && t.length, i = g(t);
        return !ut(t) && !ht(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function u(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function e(t, i, n) {
        return ut(i) ? ft.grep(t, function (t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? ft.grep(t, function (t) {
            return t === i !== n
        }) : "string" != typeof i ? ft.grep(t, function (t) {
            return -1 < it.call(i, t) !== n
        }) : ft.filter(i, t, n)
    }

    function i(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function h(t) {
        return t
    }

    function c(t) {
        throw t
    }

    function l(t, e, i, n) {
        var r;
        try {
            t && ut(r = t.promise) ? r.call(t).done(e).fail(i) : t && ut(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    function n() {
        Z.removeEventListener("DOMContentLoaded", n), T.removeEventListener("load", n), ft.ready()
    }

    function r(t, e) {
        return e.toUpperCase()
    }

    function f(t) {
        return t.replace(Pt, "ms-").replace(At, r)
    }

    function s() {
        this.expando = ft.expando + s.uid++
    }

    function p(t, e, i) {
        var n, r;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Lt, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Ot.test(r) ? JSON.parse(r) : r)
            } catch (t) {
            }
            Et.set(t, e, i)
        } else i = void 0;
        return i
    }

    function d(t, e, i, n) {
        var r, s, o = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return ft.css(t, e, "")
            }, l = a(), u = i && i[3] || (ft.cssNumber[e] ? "" : "px"),
            h = (ft.cssNumber[e] || "px" !== u && +l) && Mt.exec(ft.css(t, e));
        if (h && h[3] !== u) {
            for (l /= 2, u = u || h[3], h = +l || 1; o--;) ft.style(t, e, h + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), h /= s;
            h *= 2, ft.style(t, e, h + u), i = i || []
        }
        return i && (h = +h || +l || 0, r = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = h, n.end = r)), r
    }

    function _(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++) (n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = Dt.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && It(n) && (r[s] = (c = u = l = void 0, u = (a = n).ownerDocument, h = a.nodeName, (c = qt[h]) || (l = u.body.appendChild(u.createElement(h)), c = ft.css(l, "display"), l.parentNode.removeChild(l), "none" === c && (c = "block"), qt[h] = c)))) : "none" !== i && (r[s] = "none", Dt.set(n, "display", i)));
        var a, l, u, h, c;
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }

    function v(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && u(t, e) ? ft.merge([t], i) : i
    }

    function y(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Dt.set(t[i], "globalEval", !e || Dt.get(e[i], "globalEval"))
    }

    function x(t, e, i, n, r) {
        for (var s, o, a, l, u, h, c = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++) if ((s = t[p]) || 0 === s) if ("object" === g(s)) ft.merge(f, s.nodeType ? [s] : s); else if (Yt.test(s)) {
            for (o = o || c.appendChild(e.createElement("div")), a = (Ht.exec(s) || ["", ""])[1].toLowerCase(), l = Xt[a] || Xt._default, o.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2], h = l[0]; h--;) o = o.lastChild;
            ft.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
        } else f.push(e.createTextNode(s));
        for (c.textContent = "", p = 0; s = f[p++];) if (n && -1 < ft.inArray(s, n)) r && r.push(s); else if (u = ft.contains(s.ownerDocument, s), o = v(c.appendChild(s), "script"), u && y(o), i) for (h = 0; s = o[h++];) Bt.test(s.type || "") && i.push(s);
        return c
    }

    function o() {
        return !0
    }

    function w() {
        return !1
    }

    function b() {
        try {
            return Z.activeElement
        } catch (t) {
        }
    }

    function S(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) S(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = w; else if (!r) return t;
        return 1 === s && (o = r, (r = function (t) {
            return ft().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = ft.guid++)), t.each(function () {
            ft.event.add(this, e, r, n, i)
        })
    }

    function C(t, e) {
        return u(t, "table") && u(11 !== e.nodeType ? e : e.firstChild, "tr") && ft(t).children("tbody")[0] || t
    }

    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function P(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function A(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (Dt.hasData(t) && (s = Dt.access(t), o = Dt.set(e, s), u = s.events)) for (r in delete o.handle, o.events = {}, u) for (i = 0, n = u[r].length; i < n; i++) ft.event.add(e, r, u[r][i]);
            Et.hasData(t) && (a = Et.access(t), l = ft.extend({}, a), Et.set(e, l))
        }
    }

    function R(i, n, r, s) {
        n = tt.apply([], n);
        var t, e, o, a, l, u, h = 0, c = i.length, f = c - 1, p = n[0], d = ut(p);
        if (d || 1 < c && "string" == typeof p && !lt.checkClone && Jt.test(p)) return i.each(function (t) {
            var e = i.eq(t);
            d && (n[0] = p.call(this, t, e.html())), R(e, n, r, s)
        });
        if (c && (e = (t = x(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = ft.map(v(t, "script"), k)).length; h < c; h++) l = t, h !== f && (l = ft.clone(l, !0, !0), a && ft.merge(o, v(l, "script"))), r.call(i[h], l, h);
            if (a) for (u = o[o.length - 1].ownerDocument, ft.map(o, P), h = 0; h < a; h++) l = o[h], Bt.test(l.type || "") && !Dt.access(l, "globalEval") && ft.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? ft._evalUrl && ft._evalUrl(l.src) : m(l.textContent.replace(te, ""), u, l))
        }
        return i
    }

    function D(t, e, i) {
        for (var n, r = e ? ft.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || ft.cleanData(v(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && y(v(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function E(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || ie(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), !lt.pixelBoxStyles() && ee.test(o) && ne.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function O(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function L(t) {
        var e = ft.cssProps[t];
        return e || (e = ft.cssProps[t] = function (t) {
            if (t in ue) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = le.length; i--;) if ((t = le[i] + e) in ue) return t
        }(t) || t), e
    }

    function N(t, e, i) {
        var n = Mt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function M(t, e, i, n, r, s) {
        var o = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === i && (l += ft.css(t, i + jt[o], !0, r)), n ? ("content" === i && (l -= ft.css(t, "padding" + jt[o], !0, r)), "margin" !== i && (l -= ft.css(t, "border" + jt[o] + "Width", !0, r))) : (l += ft.css(t, "padding" + jt[o], !0, r), "padding" !== i ? l += ft.css(t, "border" + jt[o] + "Width", !0, r) : a += ft.css(t, "border" + jt[o] + "Width", !0, r));
        return !n && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5))), l
    }

    function j(t, e, i) {
        var n = ie(t), r = E(t, e, n), s = "border-box" === ft.css(t, "boxSizing", !1, n), o = s;
        if (ee.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return o = o && (lt.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === ft.css(t, "display", !1, n)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], o = !0), (r = parseFloat(r) || 0) + M(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
    }

    function I(t, e, i, n, r) {
        return new I.prototype.init(t, e, i, n, r)
    }

    function F() {
        ce && (!1 === Z.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(F) : T.setTimeout(F, ft.fx.interval), ft.fx.tick())
    }

    function q() {
        return T.setTimeout(function () {
            he = void 0
        }), he = Date.now()
    }

    function z(t, e) {
        var i, n = 0, r = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = jt[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function H(t, e, i) {
        for (var n, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), s = 0, o = r.length; s < o; s++) if (n = r[s].call(i, e, t)) return n
    }

    function B(s, t, e) {
        var i, o, n = 0, r = B.prefilters.length, a = ft.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var t = he || q(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(i);
            return a.notifyWith(s, [u, i, e]), i < 1 && r ? e : (r || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1)
        }, u = a.promise({
            elem: s,
            props: ft.extend({}, t),
            opts: ft.extend(!0, {specialEasing: {}, easing: ft.easing._default}, e),
            originalProperties: t,
            originalOptions: e,
            startTime: he || q(),
            duration: e.duration,
            tweens: [],
            createTween: function (t, e) {
                var i = ft.Tween(s, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var e = 0, i = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; e < i; e++) u.tweens[e].run(1);
                return t ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t])) : a.rejectWith(s, [u, t]), this
            }
        }), h = u.props;
        for (function (t, e) {
            var i, n, r, s, o;
            for (i in t) if (r = e[n = f(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = ft.cssHooks[n]) && "expand" in o) for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r); else e[n] = r
        }(h, u.opts.specialEasing); n < r; n++) if (i = B.prefilters[n].call(u, s, h, u.opts)) return ut(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return ft.map(h, H, u), ut(u.opts.start) && u.opts.start.call(s, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), ft.fx.timer(ft.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function X(t) {
        return (t.match(Tt) || []).join(" ")
    }

    function W(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function U(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(Tt) || []
    }

    function Y(i, t, n, r) {
        var e;
        if (Array.isArray(t)) ft.each(t, function (t, e) {
            n || ke.test(i) ? r(i, e) : Y(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
        }); else if (n || "object" !== g(t)) r(i, t); else for (e in t) Y(i + "[" + e + "]", t[e], n, r)
    }

    function $(s) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0, r = t.toLowerCase().match(Tt) || [];
            if (ut(e)) for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
        }
    }

    function V(e, r, s, o) {
        function a(t) {
            var n;
            return l[t] = !0, ft.each(e[t] || [], function (t, e) {
                var i = e(r, s, o);
                return "string" != typeof i || u || l[i] ? u ? !(n = i) : void 0 : (r.dataTypes.unshift(i), a(i), !1)
            }), n
        }

        var l = {}, u = e === Ie;
        return a(r.dataTypes[0]) || !l["*"] && a("*")
    }

    function G(t, e) {
        var i, n, r = ft.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    var Q = [], Z = T.document, K = Object.getPrototypeOf, J = Q.slice, tt = Q.concat, et = Q.push, it = Q.indexOf,
        nt = {}, rt = nt.toString, st = nt.hasOwnProperty, ot = st.toString, at = ot.call(Object), lt = {},
        ut = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, ht = function (t) {
            return null != t && t === t.window
        }, ct = {type: !0, src: !0, noModule: !0}, ft = function (t, e) {
            return new ft.fn.init(t, e)
        }, pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    ft.fn = ft.prototype = {
        jquery: "3.3.1", constructor: ft, length: 0, toArray: function () {
            return J.call(this)
        }, get: function (t) {
            return null == t ? J.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return ft.each(this, t)
        }, map: function (i) {
            return this.pushStack(ft.map(this, function (t, e) {
                return i.call(t, e, t)
            }))
        }, slice: function () {
            return this.pushStack(J.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: et, sort: Q.sort, splice: Q.splice
    }, ft.extend = ft.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || ut(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = o[e], o !== (n = t[e]) && (u && n && (ft.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && ft.isPlainObject(i) ? i : {}, o[e] = ft.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, ft.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== rt.call(t) || (e = K(t)) && ("function" != typeof (i = st.call(e, "constructor") && e.constructor) || ot.call(i) !== at))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t) {
            m(t)
        }, each: function (t, e) {
            var i, n = 0;
            if (a(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(pt, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (a(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : et.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : it.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        }, grep: function (t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        }, map: function (t, e, i) {
            var n, r, s = 0, o = [];
            if (a(t)) for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r); else for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return tt.apply([], o)
        }, guid: 1, support: lt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = Q[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        nt["[object " + e + "]"] = e.toLowerCase()
    });
    var dt = function (i) {
        function x(t, e, i, n) {
            var r, s, o, a, l, u, h, c = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : q) !== E && D(e), e = e || E, L)) {
                if (11 !== f && (l = mt.exec(t))) if (r = l[1]) {
                    if (9 === f) {
                        if (!(o = e.getElementById(r))) return i;
                        if (o.id === r) return i.push(o), i
                    } else if (c && (o = c.getElementById(r)) && I(e, o) && o.id === r) return i.push(o), i
                } else {
                    if (l[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                    if ((r = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(r)), i
                }
                if (_.qsa && !W[t + " "] && (!N || !N.test(t))) {
                    if (1 !== f) c = e, h = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(yt, xt) : e.setAttribute("id", a = F), s = (u = S(t)).length; s--;) u[s] = "#" + a + " " + d(u[s]);
                        h = u.join(","), c = gt.test(t) && p(e.parentNode) || e
                    }
                    if (h) try {
                        return Q.apply(i, c.querySelectorAll(h)), i
                    } catch (t) {
                    } finally {
                        a === F && e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(st, "$1"), e, i, n)
        }

        function t() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function l(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = E.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function e(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function u(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function n(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function s(i) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function o(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && bt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function a(o) {
            return l(function (s) {
                return s = +s, l(function (t, e) {
                    for (var i, n = o([], t.length, s), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function p(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function h() {
        }

        function d(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function c(a, t, e) {
            var l = t.dir, u = t.next, h = u || l, c = e && "parentNode" === h, f = H++;
            return t.first ? function (t, e, i) {
                for (; t = t[l];) if (1 === t.nodeType || c) return a(t, e, i);
                return !1
            } : function (t, e, i) {
                var n, r, s, o = [z, f];
                if (i) {
                    for (; t = t[l];) if ((1 === t.nodeType || c) && a(t, e, i)) return !0
                } else for (; t = t[l];) if (1 === t.nodeType || c) if (r = (s = t[F] || (t[F] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t; else {
                    if ((n = r[h]) && n[0] === z && n[1] === f) return o[2] = n[2];
                    if ((r[h] = o)[2] = a(t, e, i)) return !0
                }
                return !1
            }
        }

        function f(r) {
            return 1 < r.length ? function (t, e, i) {
                for (var n = r.length; n--;) if (!r[n](t, e, i)) return !1;
                return !0
            } : r[0]
        }

        function w(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++) (s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function v(p, d, m, g, _, t) {
            return g && !g[F] && (g = v(g)), _ && !_[F] && (_ = v(_, t)), l(function (t, e, i, n) {
                var r, s, o, a = [], l = [], u = e.length, h = t || function (t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) x(t, e[n], i);
                        return i
                    }(d || "*", i.nodeType ? [i] : i, []), c = !p || !t && d ? h : w(h, a, p, i, n),
                    f = m ? _ || (t ? p : u || g) ? [] : e : c;
                if (m && m(c, f, i, n), g) for (r = w(f, l), g(r, [], i, n), s = r.length; s--;) (o = r[s]) && (f[l[s]] = !(c[l[s]] = o));
                if (t) {
                    if (_ || p) {
                        if (_) {
                            for (r = [], s = f.length; s--;) (o = f[s]) && r.push(c[s] = o);
                            _(null, f = [], r, n)
                        }
                        for (s = f.length; s--;) (o = f[s]) && -1 < (r = _ ? K(t, o) : a[s]) && (t[r] = !(e[r] = o))
                    }
                } else f = w(f === e ? f.splice(u, f.length) : f), _ ? _(null, e, f, n) : Q.apply(e, f)
            })
        }

        function m(t) {
            for (var r, e, i, n = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = c(function (t) {
                return t === r
            }, o, !0), u = c(function (t) {
                return -1 < K(r, t)
            }, o, !0), h = [function (t, e, i) {
                var n = !s && (i || e !== P) || ((r = e).nodeType ? l(t, e, i) : u(t, e, i));
                return r = null, n
            }]; a < n; a++) if (e = b.relative[t[a].type]) h = [c(f(h), e)]; else {
                if ((e = b.filter[t[a].type].apply(null, t[a].matches))[F]) {
                    for (i = ++a; i < n && !b.relative[t[i].type]; i++) ;
                    return v(1 < a && f(h), 1 < a && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(st, "$1"), e, a < i && m(t.slice(a, i)), i < n && m(t = t.slice(i)), i < n && d(t))
                }
                h.push(e)
            }
            return f(h)
        }

        var g, _, b, y, T, S, C, k, P, A, R, D, E, O, L, N, M, j, I, F = "sizzle" + 1 * new Date, q = i.document, z = 0,
            H = 0, B = t(), X = t(), W = t(), U = function (t, e) {
                return t === e && (R = !0), 0
            }, Y = {}.hasOwnProperty, $ = [], V = $.pop, G = $.push, Q = $.push, Z = $.slice, K = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            rt = new RegExp(tt + "+", "g"), st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            ot = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ut = new RegExp(nt),
            ht = new RegExp("^" + et + "$"), ct = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + nt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            }, ft = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, dt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/,
            _t = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), vt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xt = function (t, e) {
                return e ? "\0" === t ? "�ｽ" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, wt = function () {
                D()
            }, bt = c(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            Q.apply($ = Z.call(q.childNodes), q.childNodes), $[q.childNodes.length].nodeType
        } catch (i) {
            Q = {
                apply: $.length ? function (t, e) {
                    G.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }
        for (g in _ = x.support = {}, T = x.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = x.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : q;
            return n !== E && 9 === n.nodeType && n.documentElement && (O = (E = n).documentElement, L = !T(E), q !== E && (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), _.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function (t) {
                return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = dt.test(E.getElementsByClassName), _.getById = r(function (t) {
                return O.appendChild(t).id = F, !E.getElementsByName || !E.getElementsByName(F).length
            }), _.getById ? (b.filter.ID = function (t) {
                var e = t.replace(_t, vt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && L) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (b.filter.ID = function (t) {
                var i = t.replace(_t, vt);
                return function (t) {
                    var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === i
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && L) {
                    var i, n, r, s = e.getElementById(t);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                        for (r = e.getElementsByName(t), n = 0; s = r[n++];) if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                    }
                    return []
                }
            }), b.find.TAG = _.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, b.find.CLASS = _.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
            }, M = [], N = [], (_.qsa = dt.test(E.querySelectorAll)) && (r(function (t) {
                O.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + F + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || N.push(".#.+[+~]")
            }), r(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = E.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
            })), (_.matchesSelector = dt.test(j = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                _.disconnectedMatch = j.call(t, "*"), j.call(t, "[s!='']:x"), M.push("!=", nt)
            }), N = N.length && new RegExp(N.join("|")), M = M.length && new RegExp(M.join("|")), e = dt.test(O.compareDocumentPosition), I = e || dt.test(O.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return R = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !_.sortDetached && e.compareDocumentPosition(t) === i ? t === E || t.ownerDocument === q && I(q, t) ? -1 : e === E || e.ownerDocument === q && I(q, e) ? 1 : A ? K(A, t) - K(A, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return R = !0, 0;
                var i, n = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                if (!r || !s) return t === E ? -1 : e === E ? 1 : r ? -1 : s ? 1 : A ? K(A, t) - K(A, e) : 0;
                if (r === s) return u(t, e);
                for (i = t; i = i.parentNode;) o.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; o[n] === a[n];) n++;
                return n ? u(o[n], a[n]) : o[n] === q ? -1 : a[n] === q ? 1 : 0
            }), E
        }, x.matches = function (t, e) {
            return x(t, null, null, e)
        }, x.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== E && D(t), e = e.replace(lt, "='$1']"), _.matchesSelector && L && !W[e + " "] && (!M || !M.test(e)) && (!N || !N.test(e))) try {
                var i = j.call(t, e);
                if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {
            }
            return 0 < x(e, E, null, [t]).length
        }, x.contains = function (t, e) {
            return (t.ownerDocument || t) !== E && D(t), I(t, e)
        }, x.attr = function (t, e) {
            (t.ownerDocument || t) !== E && D(t);
            var i = b.attrHandle[e.toLowerCase()],
                n = i && Y.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
            return void 0 !== n ? n : _.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, x.escape = function (t) {
            return (t + "").replace(yt, xt)
        }, x.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, x.uniqueSort = function (t) {
            var e, i = [], n = 0, r = 0;
            if (R = !_.detectDuplicates, A = !_.sortStable && t.slice(0), t.sort(U), R) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, y = x.getText = function (t) {
            var e, i = "", n = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += y(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[n++];) i += y(e);
            return i
        }, (b = x.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: ct,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(_t, vt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, vt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || x.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && x.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return ct.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(_t, vt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && B(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (i, n, r) {
                    return function (t) {
                        var e = x.attr(t, i);
                        return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(rt, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (d, t, e, m, g) {
                    var _ = "nth" !== d.slice(0, 3), v = "last" !== d.slice(-4), y = "of-type" === t;
                    return 1 === m && 0 === g ? function (t) {
                        return !!t.parentNode
                    } : function (t, e, i) {
                        var n, r, s, o, a, l, u = _ !== v ? "nextSibling" : "previousSibling", h = t.parentNode,
                            c = y && t.nodeName.toLowerCase(), f = !i && !y, p = !1;
                        if (h) {
                            if (_) {
                                for (; u;) {
                                    for (o = t; o = o[u];) if (y ? o.nodeName.toLowerCase() === c : 1 === o.nodeType) return !1;
                                    l = u = "only" === d && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? h.firstChild : h.lastChild], v && f) {
                                for (p = (a = (n = (r = (s = (o = h)[F] || (o[F] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] || [])[0] === z && n[1]) && n[2], o = a && h.childNodes[a]; o = ++a && o && o[u] || (p = a = 0) || l.pop();) if (1 === o.nodeType && ++p && o === t) {
                                    r[d] = [z, a, p];
                                    break
                                }
                            } else if (f && (p = a = (n = (r = (s = (o = t)[F] || (o[F] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] || [])[0] === z && n[1]), !1 === p) for (; (o = ++a && o && o[u] || (p = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== c : 1 !== o.nodeType) || !++p || (f && ((r = (s = o[F] || (o[F] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] = [z, p]), o !== t));) ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                }, PSEUDO: function (t, s) {
                    var e, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || x.error("unsupported pseudo: " + t);
                    return o[F] ? o(s) : 1 < o.length ? (e = [t, t, "", s], b.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
                        for (var i, n = o(t, s), r = n.length; r--;) t[i = K(t, n[r])] = !(e[i] = n[r])
                    }) : function (t) {
                        return o(t, 0, e)
                    }) : o
                }
            },
            pseudos: {
                not: l(function (t) {
                    var n = [], r = [], a = C(t.replace(st, "$1"));
                    return a[F] ? l(function (t, e, i, n) {
                        for (var r, s = a(t, null, n, []), o = t.length; o--;) (r = s[o]) && (t[o] = !(e[o] = r))
                    }) : function (t, e, i) {
                        return n[0] = t, a(n, null, i, r), n[0] = null, !r.pop()
                    }
                }), has: l(function (e) {
                    return function (t) {
                        return 0 < x(e, t).length
                    }
                }), contains: l(function (e) {
                    return e = e.replace(_t, vt), function (t) {
                        return -1 < (t.textContent || t.innerText || y(t)).indexOf(e)
                    }
                }), lang: l(function (i) {
                    return ht.test(i || "") || x.error("unsupported lang: " + i), i = i.replace(_t, vt).toLowerCase(), function (t) {
                        var e;
                        do {
                            if (e = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var e = i.location && i.location.hash;
                    return e && e.slice(1) === t.id
                }, root: function (t) {
                    return t === O
                }, focus: function (t) {
                    return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: o(!1), disabled: o(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !b.pseudos.empty(t)
                }, header: function (t) {
                    return pt.test(t.nodeName)
                }, input: function (t) {
                    return ft.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: a(function () {
                    return [0]
                }), last: a(function (t, e) {
                    return [e - 1]
                }), eq: a(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: a(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: a(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: a(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                    return t
                }), gt: a(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[g] = n(g);
        for (g in {submit: !0, reset: !0}) b.pseudos[g] = s(g);
        return h.prototype = b.filters = b.pseudos, b.setFilters = new h, S = x.tokenize = function (t, e) {
            var i, n, r, s, o, a, l, u = X[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (o = t, a = [], l = b.preFilter; o;) {
                for (s in i && !(n = ot.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(r = [])), i = !1, (n = at.exec(o)) && (i = n.shift(), r.push({
                    value: i,
                    type: n[0].replace(st, " ")
                }), o = o.slice(i.length)), b.filter) !(n = ct[s].exec(o)) || l[s] && !(n = l[s](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: s,
                    matches: n
                }), o = o.slice(i.length));
                if (!i) break
            }
            return e ? o.length : o ? x.error(t) : X(t, a).slice(0)
        }, C = x.compile = function (t, e) {
            var i, g, _, v, y, n, r = [], s = [], o = W[t + " "];
            if (!o) {
                for (e || (e = S(t)), i = e.length; i--;) (o = m(e[i]))[F] ? r.push(o) : s.push(o);
                (o = W(t, (g = s, _ = r, v = 0 < _.length, y = 0 < g.length, n = function (t, e, i, n, r) {
                    var s, o, a, l = 0, u = "0", h = t && [], c = [], f = P, p = t || y && b.find.TAG("*", r),
                        d = z += null == f ? 1 : Math.random() || .1, m = p.length;
                    for (r && (P = e === E || e || r); u !== m && null != (s = p[u]); u++) {
                        if (y && s) {
                            for (o = 0, e || s.ownerDocument === E || (D(s), i = !L); a = g[o++];) if (a(s, e || E, i)) {
                                n.push(s);
                                break
                            }
                            r && (z = d)
                        }
                        v && ((s = !a && s) && l--, t && h.push(s))
                    }
                    if (l += u, v && u !== l) {
                        for (o = 0; a = _[o++];) a(h, c, e, i);
                        if (t) {
                            if (0 < l) for (; u--;) h[u] || c[u] || (c[u] = V.call(n));
                            c = w(c)
                        }
                        Q.apply(n, c), r && !t && 0 < c.length && 1 < l + _.length && x.uniqueSort(n)
                    }
                    return r && (z = d, P = f), h
                }, v ? l(n) : n))).selector = t
            }
            return o
        }, k = x.select = function (t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t, h = !n && S(t = u.selector || t);
            if (i = i || [], 1 === h.length) {
                if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === e.nodeType && L && b.relative[s[1].type]) {
                    if (!(e = (b.find.ID(o.matches[0].replace(_t, vt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = ct.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);) if ((l = b.find[a]) && (n = l(o.matches[0].replace(_t, vt), gt.test(s[0].type) && p(e.parentNode) || e))) {
                    if (s.splice(r, 1), !(t = n.length && d(s))) return Q.apply(i, n), i;
                    break
                }
            }
            return (u || C(t, h))(n, e, !L, i, !e || gt.test(t) && p(e.parentNode) || e), i
        }, _.sortStable = F.split("").sort(U).join("") === F, _.detectDuplicates = !!R, D(), _.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(E.createElement("fieldset"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || e("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || e(J, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), x
    }(T);
    ft.find = dt, ft.expr = dt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = dt.uniqueSort, ft.text = dt.getText, ft.isXMLDoc = dt.isXML, ft.contains = dt.contains, ft.escapeSelector = dt.escape;
    var mt = function (t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (r && ft(t).is(i)) break;
            n.push(t)
        }
        return n
    }, gt = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, _t = ft.expr.match.needsContext, vt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    ft.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function (t) {
            var e, i, n = this.length, r = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
                for (e = 0; e < n; e++) if (ft.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) ft.find(t, r[e], i);
            return 1 < n ? ft.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(e(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(e(this, t || [], !0))
        }, is: function (t) {
            return !!e(this, "string" == typeof t && _t.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var yt, xt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function (t, e, i) {
        var n, r;
        if (!t) return this;
        if (i = i || yt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : xt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), vt.test(n[1]) && ft.isPlainObject(e)) for (n in e) ut(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (r = Z.getElementById(n[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ut(t) ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this)
    }).prototype = ft.fn, yt = ft(Z);
    var wt = /^(?:parents|prev(?:Until|All))/, bt = {children: !0, contents: !0, next: !0, prev: !0};
    ft.fn.extend({
        has: function (t) {
            var e = ft(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (ft.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, r = this.length, s = [], o = "string" != typeof t && ft(t);
            if (!_t.test(t)) for (; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(1 < s.length ? ft.uniqueSort(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? it.call(ft(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return mt(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return mt(t, "parentNode", i)
        }, next: function (t) {
            return i(t, "nextSibling")
        }, prev: function (t) {
            return i(t, "previousSibling")
        }, nextAll: function (t) {
            return mt(t, "nextSibling")
        }, prevAll: function (t) {
            return mt(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return mt(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return mt(t, "previousSibling", i)
        }, siblings: function (t) {
            return gt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return gt(t.firstChild)
        }, contents: function (t) {
            return u(t, "iframe") ? t.contentDocument : (u(t, "template") && (t = t.content || t), ft.merge([], t.childNodes))
        }
    }, function (n, r) {
        ft.fn[n] = function (t, e) {
            var i = ft.map(this, r, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = ft.filter(e, i)), 1 < this.length && (bt[n] || ft.uniqueSort(i), wt.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var Tt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function (n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, ft.each(t.match(Tt) || [], function (t, e) {
            i[e] = !0
        }), i) : ft.extend({}, n);
        var r, e, s, o, a = [], l = [], u = -1, h = function () {
            for (o = o || n.once, s = r = !0; l.length; u = -1) for (e = l.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && n.stopOnFalse && (u = a.length, e = !1);
            n.memory || (e = !1), r = !1, o && (a = e ? [] : "")
        }, c = {
            add: function () {
                return a && (e && !r && (u = a.length - 1, l.push(e)), function i(t) {
                    ft.each(t, function (t, e) {
                        ut(e) ? n.unique && c.has(e) || a.push(e) : e && e.length && "string" !== g(e) && i(e)
                    })
                }(arguments), e && !r && h()), this
            }, remove: function () {
                return ft.each(arguments, function (t, e) {
                    for (var i; -1 < (i = ft.inArray(e, a, i));) a.splice(i, 1), i <= u && u--
                }), this
            }, has: function (t) {
                return t ? -1 < ft.inArray(t, a) : 0 < a.length
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return o = l = [], a = e = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return o = l = [], e || r || (a = e = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, e) {
                return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || h()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return c
    }, ft.extend({
        Deferred: function (t) {
            var s = [["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2], ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", o = {
                    state: function () {
                        return r
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return o.then(null, t)
                    }, pipe: function () {
                        var r = arguments;
                        return ft.Deferred(function (n) {
                            ft.each(s, function (t, e) {
                                var i = ut(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && ut(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    }, then: function (e, i, n) {
                        function l(r, s, o, a) {
                            return function () {
                                var i = this, n = arguments, t = function () {
                                    var t, e;
                                    if (!(r < u)) {
                                        if ((t = o.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, ut(e) ? a ? e.call(t, l(u, s, h, a), l(u, s, c, a)) : (u++, e.call(t, l(u, s, h, a), l(u, s, c, a), l(u, s, h, s.notifyWith))) : (o !== h && (i = void 0, n = [t]), (a || s.resolveWith)(i, n))
                                    }
                                }, e = a ? t : function () {
                                    try {
                                        t()
                                    } catch (t) {
                                        ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, e.stackTrace), u <= r + 1 && (o !== c && (i = void 0, n = [t]), s.rejectWith(i, n))
                                    }
                                };
                                r ? e() : (ft.Deferred.getStackHook && (e.stackTrace = ft.Deferred.getStackHook()), T.setTimeout(e))
                            }
                        }

                        var u = 0;
                        return ft.Deferred(function (t) {
                            s[0][3].add(l(0, t, ut(n) ? n : h, t.notifyWith)), s[1][3].add(l(0, t, ut(e) ? e : h)), s[2][3].add(l(0, t, ut(i) ? i : c))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? ft.extend(t, o) : o
                    }
                }, a = {};
            return ft.each(s, function (t, e) {
                var i = e[2], n = e[5];
                o[e[1]] = i.add, n && i.add(function () {
                    r = n
                }, s[3 - t][2].disable, s[3 - t][3].disable, s[0][2].lock, s[0][3].lock), i.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), o.promise(a), t && t.call(a, a), a
        }, when: function (t) {
            var i = arguments.length, e = i, n = Array(e), r = J.call(arguments), s = ft.Deferred(), o = function (e) {
                return function (t) {
                    n[e] = this, r[e] = 1 < arguments.length ? J.call(arguments) : t, --i || s.resolveWith(n, r)
                }
            };
            if (i <= 1 && (l(t, s.done(o(e)).resolve, s.reject, !i), "pending" === s.state() || ut(r[e] && r[e].then))) return s.then();
            for (; e--;) l(r[e], o(e), s.reject);
            return s.promise()
        }
    });
    var St = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function (t, e) {
        T.console && T.console.warn && t && St.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, ft.readyException = function (t) {
        T.setTimeout(function () {
            throw t
        })
    };
    var Ct = ft.Deferred();
    ft.fn.ready = function (t) {
        return Ct.then(t).catch(function (t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || ((ft.isReady = !0) !== t && 0 < --ft.readyWait || Ct.resolveWith(Z, [ft]))
        }
    }), ft.ready.then = Ct.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? T.setTimeout(ft.ready) : (Z.addEventListener("DOMContentLoaded", n), T.addEventListener("load", n));
    var kt = function (t, e, i, n, r, s, o) {
        var a = 0, l = t.length, u = null == i;
        if ("object" === g(i)) for (a in r = !0, i) kt(t, e, a, i[a], !0, s, o); else if (void 0 !== n && (r = !0, ut(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
            return u.call(ft(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
    }, Pt = /^-ms-/, At = /-([a-z])/g, Rt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    s.uid = 1, s.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Rt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[f(e)] = i; else for (n in e) r[f(n)] = e[n];
            return r
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][f(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(f) : (e = f(e)) in n ? [e] : e.match(Tt) || []).length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || ft.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Dt = new s, Et = new s, Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Lt = /[A-Z]/g;
    ft.extend({
        hasData: function (t) {
            return Et.hasData(t) || Dt.hasData(t)
        }, data: function (t, e, i) {
            return Et.access(t, e, i)
        }, removeData: function (t, e) {
            Et.remove(t, e)
        }, _data: function (t, e, i) {
            return Dt.access(t, e, i)
        }, _removeData: function (t, e) {
            Dt.remove(t, e)
        }
    }), ft.fn.extend({
        data: function (i, t) {
            var e, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === i) {
                if (this.length && (r = Et.get(s), 1 === s.nodeType && !Dt.get(s, "hasDataAttrs"))) {
                    for (e = o.length; e--;) o[e] && 0 === (n = o[e].name).indexOf("data-") && (n = f(n.slice(5)), p(s, n, r[n]));
                    Dt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof i ? this.each(function () {
                Et.set(this, i)
            }) : kt(this, function (t) {
                var e;
                if (s && void 0 === t) {
                    if (void 0 !== (e = Et.get(s, i))) return e;
                    if (void 0 !== (e = p(s, i))) return e
                } else this.each(function () {
                    Et.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Et.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Dt.get(t, e), i && (!n || Array.isArray(i) ? n = Dt.access(t, e, ft.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = ft.queue(t, e), n = i.length, r = i.shift(), s = ft._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                ft.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Dt.get(t, i) || Dt.access(t, i, {
                empty: ft.Callbacks("once memory").add(function () {
                    Dt.remove(t, [e + "queue", i])
                })
            })
        }
    }), ft.fn.extend({
        queue: function (e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? ft.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                var t = ft.queue(this, e, i);
                ft._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                ft.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, r = ft.Deferred(), s = this, o = this.length, a = function () {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) (i = Dt.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Mt = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
        jt = ["Top", "Right", "Bottom", "Left"], It = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        }, Ft = function (t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        }, qt = {};
    ft.fn.extend({
        show: function () {
            return _(this, !0)
        }, hide: function () {
            return _(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                It(this) ? ft(this).show() : ft(this).hide()
            })
        }
    });
    var zt = /^(?:checkbox|radio)$/i, Ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Bt = /^$|^module$|\/(?:java|ecma)script/i,
        Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
    var Wt, Ut, Yt = /<|&#?\w+;/;
    Wt = Z.createDocumentFragment().appendChild(Z.createElement("div")), (Ut = Z.createElement("input")).setAttribute("type", "radio"), Ut.setAttribute("checked", "checked"), Ut.setAttribute("name", "t"), Wt.appendChild(Ut), lt.checkClone = Wt.cloneNode(!0).cloneNode(!0).lastChild.checked, Wt.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!Wt.cloneNode(!0).lastChild.defaultValue;
    var $t = Z.documentElement, Vt = /^key/, Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {}, add: function (e, t, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, g = Dt.get(e);
            if (g) for (i.handler && (i = (s = i).handler, r = s.selector), r && ft.find.matchesSelector($t, r), i.guid || (i.guid = ft.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                return void 0 !== ft && ft.event.triggered !== t.type ? ft.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(Tt) || [""]).length; u--;) p = m = (a = Qt.exec(t[u]) || [])[1], d = (a[2] || "").split(".").sort(), p && (c = ft.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = ft.event.special[p] || {}, h = ft.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && ft.expr.match.needsContext.test(r),
                namespace: d.join(".")
            }, s), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, d, o) || e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), ft.event.global[p] = !0)
        }, remove: function (t, e, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, g = Dt.hasData(t) && Dt.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(Tt) || [""]).length; u--;) if (p = m = (a = Qt.exec(e[u]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                    for (c = ft.event.special[p] || {}, f = l[p = (n ? c.delegateType : c.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) h = f[s], !r && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (f.splice(s, 1), h.selector && f.delegateCount--, c.remove && c.remove.call(t, h));
                    o && !f.length && (c.teardown && !1 !== c.teardown.call(t, d, g.handle) || ft.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) ft.event.remove(t, p + e[u], i, n, !0);
                ft.isEmptyObject(l) && Dt.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, r, s, o, a = ft.event.fix(t), l = new Array(arguments.length),
                u = (Dt.get(this, "events") || {})[a.type] || [], h = ft.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (o = ft.event.handlers.call(this, a, u), e = 0; (r = o[e++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, r, s, o, a = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? -1 < ft(r, this).index(u) : ft.find(r, this, null, [u]).length), o[r] && s.push(n);
                s.length && a.push({elem: u, handlers: s})
            }
            return u = this, l < e.length && a.push({elem: u, handlers: e.slice(l)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(ft.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: ut(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (t) {
            return t[ft.expando] ? t : new ft.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== b() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === b() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return u(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, ft.Event = function (t, e) {
        if (!(this instanceof ft.Event)) return new ft.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? o : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[ft.expando] = !0
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = o, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = o, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = o, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Vt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        ft.event.special[t] = {
            delegateType: r, bindType: r, handle: function (t) {
                var e, i = t.relatedTarget, n = t.handleObj;
                return i && (i === this || ft.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), ft.fn.extend({
        on: function (t, e, i, n) {
            return S(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return S(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = w), this.each(function () {
                ft.event.remove(this, t, i, e)
            })
        }
    });
    var Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Kt = /<script|<style|<link/i, Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function (t) {
            return t.replace(Zt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, r, s, o, a, l, u, h = t.cloneNode(!0), c = ft.contains(t.ownerDocument, t);
            if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) for (o = v(h), n = 0, r = (s = v(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (u = l.nodeName.toLowerCase()) && zt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e) if (i) for (s = s || v(t), o = o || v(h), n = 0, r = s.length; n < r; n++) A(s[n], o[n]); else A(t, h);
            return 0 < (o = v(h, "script")).length && y(o, !c && v(t, "script")), h
        }, cleanData: function (t) {
            for (var e, i, n, r = ft.event.special, s = 0; void 0 !== (i = t[s]); s++) if (Rt(i)) {
                if (e = i[Dt.expando]) {
                    if (e.events) for (n in e.events) r[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, e.handle);
                    i[Dt.expando] = void 0
                }
                i[Et.expando] && (i[Et.expando] = void 0)
            }
        }
    }), ft.fn.extend({
        detach: function (t) {
            return D(this, t, !0)
        }, remove: function (t) {
            return D(this, t)
        }, text: function (t) {
            return kt(this, function (t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return R(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, t).appendChild(t)
            })
        }, prepend: function () {
            return R(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return R(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return R(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ft.clone(this, t, e)
            })
        }, html: function (t) {
            return kt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Kt.test(t) && !Xt[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var i = [];
            return R(this, arguments, function (t) {
                var e = this.parentNode;
                ft.inArray(this, i) < 0 && (ft.cleanData(v(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, o) {
        ft.fn[t] = function (t) {
            for (var e, i = [], n = ft(t), r = n.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), ft(n[s])[o](e), et.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var ee = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"), ie = function (t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = T), e.getComputedStyle(t)
    }, ne = new RegExp(jt.join("|"), "i");
    !function () {
        function t() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", $t.appendChild(a).appendChild(l);
                var t = T.getComputedStyle(l);
                i = "1%" !== t.top, o = 12 === e(t.marginLeft), l.style.right = "60%", s = 36 === e(t.right), n = 36 === e(t.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", $t.removeChild(a), l = null
            }
        }

        function e(t) {
            return Math.round(parseFloat(t))
        }

        var i, n, r, s, o, a = Z.createElement("div"), l = Z.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === l.style.backgroundClip, ft.extend(lt, {
            boxSizingReliable: function () {
                return t(), n
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }, scrollboxSize: function () {
                return t(), r
            }
        }))
    }();
    var re = /^(none|table(?!-c[ea]).+)/, se = /^--/,
        oe = {position: "absolute", visibility: "hidden", display: "block"},
        ae = {letterSpacing: "0", fontWeight: "400"}, le = ["Webkit", "Moz", "ms"], ue = Z.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = E(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = f(e), l = se.test(e), u = t.style;
                if (l || (e = L(a)), o = ft.cssHooks[e] || ft.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : u[e];
                "string" == (s = typeof i) && (r = Mt.exec(i)) && r[1] && (i = d(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (ft.cssNumber[a] ? "" : "px")), lt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = f(e);
            return se.test(e) || (e = L(a)), (o = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = E(t, e, n)), "normal" === r && e in ae && (r = ae[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), ft.each(["height", "width"], function (t, a) {
        ft.cssHooks[a] = {
            get: function (t, e, i) {
                if (e) return !re.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? j(t, a, i) : Ft(t, oe, function () {
                    return j(t, a, i)
                })
            }, set: function (t, e, i) {
                var n, r = ie(t), s = "border-box" === ft.css(t, "boxSizing", !1, r), o = i && M(t, a, i, s, r);
                return s && lt.scrollboxSize() === r.position && (o -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - M(t, a, "border", !1, r) - .5)), o && (n = Mt.exec(e)) && "px" !== (n[3] || "px") && (t.style[a] = e, e = ft.css(t, a)), N(0, e, o)
            }
        }
    }), ft.cssHooks.marginLeft = O(lt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ft.each({margin: "", padding: "", border: "Width"}, function (r, s) {
        ft.cssHooks[r + s] = {
            expand: function (t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + jt[e] + s] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, "margin" !== r && (ft.cssHooks[r + s].set = N)
    }), ft.fn.extend({
        css: function (t, e) {
            return kt(this, function (t, e, i) {
                var n, r, s = {}, o = 0;
                if (Array.isArray(e)) {
                    for (n = ie(t), r = e.length; o < r; o++) s[e[o]] = ft.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), (ft.Tween = I).prototype = {
        constructor: I, init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ft.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = I.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, ft.fx = I.prototype.init, ft.fx.step = {};
    var he, ce, fe, pe, de = /^(?:toggle|show|hide)$/, me = /queueHooks$/;
    ft.Animation = ft.extend(B, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return d(i.elem, t, Mt.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            ut(t) ? (e = t, t = ["*"]) : t = t.match(Tt);
            for (var i, n = 0, r = t.length; n < r; n++) i = t[n], B.tweeners[i] = B.tweeners[i] || [], B.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var n, r, s, o, a, l, u, h, c = "width" in e || "height" in e, f = this, p = {}, d = t.style,
                m = t.nodeType && It(t), g = Dt.get(t, "fxshow");
            for (n in i.queue || (null == (o = ft._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, f.always(function () {
                f.always(function () {
                    o.unqueued--, ft.queue(t, "fx").length || o.empty.fire()
                })
            })), e) if (r = e[n], de.test(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[n]) continue;
                    m = !0
                }
                p[n] = g && g[n] || ft.style(t, n)
            }
            if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) for (n in c && 1 === t.nodeType && (i.overflow = [d.overflow, d.overflowX, d.overflowY], null == (u = g && g.display) && (u = Dt.get(t, "display")), "none" === (h = ft.css(t, "display")) && (u ? h = u : (_([t], !0), u = t.style.display || u, h = ft.css(t, "display"), _([t]))), ("inline" === h || "inline-block" === h && null != u) && "none" === ft.css(t, "float") && (l || (f.done(function () {
                d.display = u
            }), null == u && (h = d.display, u = "none" === h ? "" : h)), d.display = "inline-block")), i.overflow && (d.overflow = "hidden", f.always(function () {
                d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
            })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Dt.access(t, "fxshow", {display: u}), s && (g.hidden = !m), m && _([t], !0), f.done(function () {
                for (n in m || _([t]), Dt.remove(t, "fxshow"), p) ft.style(t, n, p[n])
            })), l = H(m ? g[n] : 0, n, f), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), ft.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: i || !i && e || ut(t) && t,
            duration: t,
            easing: i && e || e && !ut(e) && e
        };
        return ft.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ft.fx.speeds ? n.duration = ft.fx.speeds[n.duration] : n.duration = ft.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ut(n.old) && n.old.call(this), n.queue && ft.dequeue(this, n.queue)
        }, n
    }, ft.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(It).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (e, t, i, n) {
            var r = ft.isEmptyObject(e), s = ft.speed(t, i, n), o = function () {
                var t = B(this, ft.extend({}, e), s);
                (r || Dt.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (r, t, s) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof r && (s = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0, e = null != r && r + "queueHooks", i = ft.timers, n = Dt.get(this);
                if (e) n[e] && n[e].stop && o(n[e]); else for (e in n) n[e] && n[e].stop && me.test(e) && o(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                !t && s || ft.dequeue(this, r)
            })
        }, finish: function (o) {
            return !1 !== o && (o = o || "fx"), this.each(function () {
                var t, e = Dt.get(this), i = e[o + "queue"], n = e[o + "queueHooks"], r = ft.timers,
                    s = i ? i.length : 0;
                for (e.finish = !0, ft.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function (t, n) {
        var r = ft.fn[n];
        ft.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(z(n, !0), t, e, i)
        }
    }), ft.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, n) {
        ft.fn[t] = function (t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), ft.timers = [], ft.fx.tick = function () {
        var t, e = 0, i = ft.timers;
        for (he = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || ft.fx.stop(), he = void 0
    }, ft.fx.timer = function (t) {
        ft.timers.push(t), ft.fx.start()
    }, ft.fx.interval = 13, ft.fx.start = function () {
        ce || (ce = !0, F())
    }, ft.fx.stop = function () {
        ce = null
    }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (n, t) {
        return n = ft.fx && ft.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function () {
                T.clearTimeout(i)
            }
        })
    }, fe = Z.createElement("input"), pe = Z.createElement("select").appendChild(Z.createElement("option")), fe.type = "checkbox", lt.checkOn = "" !== fe.value, lt.optSelected = pe.selected, (fe = Z.createElement("input")).value = "t", fe.type = "radio", lt.radioValue = "t" === fe.value;
    var ge, _e = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function (t, e) {
            return kt(this, ft.attr, t, e, 1 < arguments.length)
        }, removeAttr: function (t) {
            return this.each(function () {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? ft.prop(t, e, i) : (1 === s && ft.isXMLDoc(t) || (r = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ge : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = ft.find.attr(t, e)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!lt.radioValue && "radio" === e && u(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, r = e && e.match(Tt);
            if (r && 1 === t.nodeType) for (; i = r[n++];) t.removeAttribute(i)
        }
    }), ge = {
        set: function (t, e, i) {
            return !1 === e ? ft.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var o = _e[e] || ft.find.attr;
        _e[e] = function (t, e, i) {
            var n, r, s = e.toLowerCase();
            return i || (r = _e[s], _e[s] = n, n = null != o(t, e, i) ? s : null, _e[s] = r), n
        }
    });
    var ve = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function (t, e) {
            return kt(this, ft.prop, t, e, 1 < arguments.length)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), lt.optSelected || (ft.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (ut(e)) return this.each(function (t) {
                ft(this).addClass(e.call(this, t, W(this)))
            });
            if ((t = U(e)).length) for (; i = this[l++];) if (r = W(i), n = 1 === i.nodeType && " " + X(r) + " ") {
                for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                r !== (a = X(n)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (ut(e)) return this.each(function (t) {
                ft(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = U(e)).length) for (; i = this[l++];) if (r = W(i), n = 1 === i.nodeType && " " + X(r) + " ") {
                for (o = 0; s = t[o++];) for (; -1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                r !== (a = X(n)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (r, e) {
            var s = typeof r, o = "string" === s || Array.isArray(r);
            return "boolean" == typeof e && o ? e ? this.addClass(r) : this.removeClass(r) : ut(r) ? this.each(function (t) {
                ft(this).toggleClass(r.call(this, t, W(this), e), e)
            }) : this.each(function () {
                var t, e, i, n;
                if (o) for (e = 0, i = ft(this), n = U(r); t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== r && "boolean" !== s || ((t = W(this)) && Dt.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : Dt.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + X(W(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var xe = /\r/g;
    ft.fn.extend({
        val: function (i) {
            var n, t, r, e = this[0];
            return arguments.length ? (r = ut(i), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? i.call(this, t, ft(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = ft.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (n = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = ft.valHooks[e.type] || ft.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(xe, "") : null == t ? "" : t : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : X(ft.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++) if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !u(i.parentNode, "optgroup"))) {
                        if (e = ft(i).val(), o) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, r = t.options, s = ft.makeArray(e), o = r.length; o--;) ((n = r[o]).selected = -1 < ft.inArray(ft.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function () {
        ft.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e)
            }
        }, lt.checkOn || (ft.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), lt.focusin = "onfocusin" in T;
    var we = /^(?:focusinfocus|focusoutblur)$/, be = function (t) {
        t.stopPropagation()
    };
    ft.extend(ft.event, {
        trigger: function (t, e, i, n) {
            var r, s, o, a, l, u, h, c, f = [i || Z], p = st.call(t, "type") ? t.type : t,
                d = st.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = o = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(p + ft.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[ft.expando] ? t : new ft.Event(p, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : ft.makeArray(e, [t]), h = ft.event.special[p] || {}, n || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                if (!n && !h.noBubble && !ht(i)) {
                    for (a = h.delegateType || p, we.test(a + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), o = s;
                    o === (i.ownerDocument || Z) && f.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0; (s = f[r++]) && !t.isPropagationStopped();) c = s, t.type = 1 < r ? a : h.bindType || p, (u = (Dt.get(s, "events") || {})[t.type] && Dt.get(s, "handle")) && u.apply(s, e), (u = l && s[l]) && u.apply && Rt(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                return t.type = p, n || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), e) || !Rt(i) || l && ut(i[p]) && !ht(i) && ((o = i[l]) && (i[l] = null), ft.event.triggered = p, t.isPropagationStopped() && c.addEventListener(p, be), i[p](), t.isPropagationStopped() && c.removeEventListener(p, be), ft.event.triggered = void 0, o && (i[l] = o)), t.result
            }
        }, simulate: function (t, e, i) {
            var n = ft.extend(new ft.Event, i, {type: t, isSimulated: !0});
            ft.event.trigger(n, null, e)
        }
    }), ft.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ft.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return ft.event.trigger(t, e, i, !0)
        }
    }), lt.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (i, n) {
        var r = function (t) {
            ft.event.simulate(n, t.target, ft.event.fix(t))
        };
        ft.event.special[n] = {
            setup: function () {
                var t = this.ownerDocument || this, e = Dt.access(t, n);
                e || t.addEventListener(i, r, !0), Dt.access(t, n, (e || 0) + 1)
            }, teardown: function () {
                var t = this.ownerDocument || this, e = Dt.access(t, n) - 1;
                e ? Dt.access(t, n, e) : (t.removeEventListener(i, r, !0), Dt.remove(t, n))
            }
        }
    });
    var Te = T.location, Se = Date.now(), Ce = /\?/;
    ft.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + t), e
    };
    var ke = /\[\]$/, Pe = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i,
        Re = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
        var i, n = [], r = function (t, e) {
            var i = ut(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
            r(this.name, this.value)
        }); else for (i in t) Y(i, t[i], e, r);
        return n.join("&")
    }, ft.fn.extend({
        serialize: function () {
            return ft.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && Re.test(this.nodeName) && !Ae.test(t) && (this.checked || !zt.test(t))
            }).map(function (t, e) {
                var i = ft(this).val();
                return null == i ? null : Array.isArray(i) ? ft.map(i, function (t) {
                    return {name: e.name, value: t.replace(Pe, "\r\n")}
                }) : {name: e.name, value: i.replace(Pe, "\r\n")}
            }).get()
        }
    });
    var De = /%20/g, Ee = /#.*$/, Oe = /([?&])_=[^&]*/, Le = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ne = /^(?:GET|HEAD)$/,
        Me = /^\/\//, je = {}, Ie = {}, Fe = "*/".concat("*"), qe = Z.createElement("a");
    qe.href = Te.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ft.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
        },
        ajaxPrefilter: $(je),
        ajaxTransport: $(Ie),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var r, s, o, a, l, u = e;
                d || (d = !0, p && T.clearTimeout(p), h = void 0, f = n || "", b.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n) for (r in a) if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in i) s = l[0]; else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, b, i)), a = function (t, e, i, n) {
                    var r, s, o, a, l, u = {}, h = t.dataTypes.slice();
                    if (h[1]) for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = h.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s])) for (r in u) if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], h.unshift(a[1]));
                            break
                        }
                        if (!0 !== o) if (o && t.throws) e = o(e); else try {
                            e = o(e)
                        } catch (t) {
                            return {state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: e}
                }(g, a, b, r), r ? (g.ifModified && ((l = b.getResponseHeader("Last-Modified")) && (ft.lastModified[c] = l), (l = b.getResponseHeader("etag")) && (ft.etag[c] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !t && u || (u = "error", t < 0 && (t = 0))), b.status = t, b.statusText = (e || u) + "", r ? y.resolveWith(_, [s, u, b]) : y.rejectWith(_, [b, u, o]), b.statusCode(w), w = void 0, m && v.trigger(r ? "ajaxSuccess" : "ajaxError", [b, g, r ? s : o]), x.fireWith(_, [b, u]), m && (v.trigger("ajaxComplete", [b, g]), --ft.active || ft.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var h, c, f, n, p, r, d, m, s, o, g = ft.ajaxSetup({}, e), _ = g.context || g,
                v = g.context && (_.nodeType || _.jquery) ? ft(_) : ft.event, y = ft.Deferred(),
                x = ft.Callbacks("once memory"), w = g.statusCode || {}, a = {}, l = {}, u = "canceled", b = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (d) {
                            if (!n) for (n = {}; e = Le.exec(f);) n[e[1].toLowerCase()] = e[2];
                            e = n[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return d ? f : null
                    }, setRequestHeader: function (t, e) {
                        return null == d && (t = l[t.toLowerCase()] = l[t.toLowerCase()] || t, a[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == d && (g.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (d) b.always(t[b.status]); else for (e in t) w[e] = [w[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || u;
                        return h && h.abort(e), i(0, e), this
                    }
                };
            if (y.promise(b), g.url = ((t || g.url || Te.href) + "").replace(Me, Te.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(Tt) || [""], null == g.crossDomain) {
                r = Z.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = qe.protocol + "//" + qe.host != r.protocol + "//" + r.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = ft.param(g.data, g.traditional)), V(je, g, e, b), d) return b;
            for (s in (m = ft.event && g.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ne.test(g.type), c = g.url.replace(Ee, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(De, "+")) : (o = g.url.slice(c.length), g.data && (g.processData || "string" == typeof g.data) && (c += (Ce.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (c = c.replace(Oe, "$1"), o = (Ce.test(c) ? "&" : "?") + "_=" + Se++ + o), g.url = c + o), g.ifModified && (ft.lastModified[c] && b.setRequestHeader("If-Modified-Since", ft.lastModified[c]), ft.etag[c] && b.setRequestHeader("If-None-Match", ft.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && b.setRequestHeader("Content-Type", g.contentType), b.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : g.accepts["*"]), g.headers) b.setRequestHeader(s, g.headers[s]);
            if (g.beforeSend && (!1 === g.beforeSend.call(_, b, g) || d)) return b.abort();
            if (u = "abort", x.add(g.complete), b.done(g.success), b.fail(g.error), h = V(Ie, g, e, b)) {
                if (b.readyState = 1, m && v.trigger("ajaxSend", [b, g]), d) return b;
                g.async && 0 < g.timeout && (p = T.setTimeout(function () {
                    b.abort("timeout")
                }, g.timeout));
                try {
                    d = !1, h.send(a, i)
                } catch (t) {
                    if (d) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return b
        },
        getJSON: function (t, e, i) {
            return ft.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function (t, r) {
        ft[r] = function (t, e, i, n) {
            return ut(e) && (n = n || i, i = e, e = void 0), ft.ajax(ft.extend({
                url: t,
                type: r,
                dataType: n,
                data: e,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function (t) {
        return ft.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, ft.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (ut(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (i) {
            return ut(i) ? this.each(function (t) {
                ft(this).wrapInner(i.call(this, t))
            }) : this.each(function () {
                var t = ft(this), e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        }, wrap: function (e) {
            var i = ut(e);
            return this.each(function (t) {
                ft(this).wrapAll(i ? e.call(this, t) : e)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function (t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (t) {
        }
    };
    var ze = {0: 200, 1223: 204}, He = ft.ajaxSettings.xhr();
    lt.cors = !!He && "withCredentials" in He, lt.ajax = He = !!He, ft.ajaxTransport(function (r) {
        var s, o;
        if (lt.cors || He && !r.crossDomain) return {
            send: function (t, e) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                s = function (t) {
                    return function () {
                        s && (s = o = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(ze[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {binary: n.response} : {text: n.responseText}, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), o = n.onerror = n.ontimeout = s("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function () {
                    4 === n.readyState && T.setTimeout(function () {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (s) throw t
                }
            }, abort: function () {
                s && s()
            }
        }
    }), ft.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function (i) {
        var n, r;
        if (i.crossDomain) return {
            send: function (t, e) {
                n = ft("<script>").prop({charset: i.scriptCharset, src: i.url}).on("load error", r = function (t) {
                    n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), Z.head.appendChild(n[0])
            }, abort: function () {
                r && r()
            }
        }
    });
    var Be, Xe = [], We = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Xe.pop() || ft.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function (t, e, i) {
        var n, r, s,
            o = !1 !== t.jsonp && (We.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = ut(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(We, "$1" + n) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
            return s || ft.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = T[n], T[n] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? ft(T).removeProp(n) : T[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, Xe.push(n)), s && ut(r) && r(s[0]), s = r = void 0
        }), "script"
    }), lt.createHTMLDocument = ((Be = Z.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Be.childNodes.length), ft.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (lt.createHTMLDocument ? ((n = (e = Z.implementation.createHTMLDocument("")).createElement("base")).href = Z.location.href, e.head.appendChild(n)) : e = Z), s = !i && [], (r = vt.exec(t)) ? [e.createElement(r[1])] : (r = x([t], e, s), s && s.length && ft(s).remove(), ft.merge([], r.childNodes)));
        var n, r, s
    }, ft.fn.load = function (t, e, i) {
        var n, r, s, o = this, a = t.indexOf(" ");
        return -1 < a && (n = X(t.slice(a)), t = t.slice(0, a)), ut(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && ft.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ft.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function (e) {
        return ft.grep(ft.timers, function (t) {
            return e === t.elem
        }).length
    }, ft.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, u = ft.css(t, "position"), h = ft(t), c = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (n = h.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), ut(e) && (e = e.call(t, i, ft.extend({}, a))), null != e.top && (c.top = e.top - a.top + o), null != e.left && (c.left = e.left - a.left + r), "using" in e ? e.using.call(t, c) : h.css(c)
        }
    }, ft.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ft.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i, n = this[0], r = {top: 0, left: 0};
                if ("fixed" === ft.css(n, "position")) e = n.getBoundingClientRect(); else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === ft.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((r = ft(t).offset()).top += ft.css(t, "borderTopWidth", !0), r.left += ft.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - ft.css(n, "marginTop", !0),
                    left: e.left - r.left - ft.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || $t
            })
        }
    }), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, r) {
        var s = "pageYOffset" === r;
        ft.fn[e] = function (t) {
            return kt(this, function (t, e, i) {
                var n;
                if (ht(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i) return n ? n[r] : t[e];
                n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i
            }, e, t, arguments.length)
        }
    }), ft.each(["top", "left"], function (t, i) {
        ft.cssHooks[i] = O(lt.pixelPosition, function (t, e) {
            if (e) return e = E(t, i), ee.test(e) ? ft(t).position()[i] + "px" : e
        })
    }), ft.each({Height: "height", Width: "width"}, function (o, a) {
        ft.each({padding: "inner" + o, content: a, "": "outer" + o}, function (n, s) {
            ft.fn[s] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    r = n || (!0 === t || !0 === e ? "margin" : "border");
                return kt(this, function (t, e, i) {
                    var n;
                    return ht(t) ? 0 === s.indexOf("outer") ? t["inner" + o] : t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? ft.css(t, e, r) : ft.style(t, e, i, r)
                }, a, i ? t : void 0, i)
            }
        })
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
        ft.fn[i] = function (t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), ft.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ft.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), ft.proxy = function (t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), ut(t)) return n = J.call(arguments, 2), (r = function () {
            return t.apply(e || this, n.concat(J.call(arguments)))
        }).guid = t.guid = t.guid || ft.guid++, r
    }, ft.holdReady = function (t) {
        t ? ft.readyWait++ : ft.ready(!0)
    }, ft.isArray = Array.isArray, ft.parseJSON = JSON.parse, ft.nodeName = u, ft.isFunction = ut, ft.isWindow = ht, ft.camelCase = f, ft.type = g, ft.now = Date.now, ft.isNumeric = function (t) {
        var e = ft.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ft
    });
    var Ue = T.jQuery, Ye = T.$;
    return ft.noConflict = function (t) {
        return T.$ === ft && (T.$ = Ye), t && T.jQuery === ft && (T.jQuery = Ue), ft
    }, t || (T.jQuery = T.$ = ft), ft
}), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t, T, w, b, S, _, i, v, C, y, x, p, d, g, e;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (n, h, d) {
        var m = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, g = function (t, e, i) {
            d.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = g.prototype.render
        }, _ = 1e-10, v = d._internals, y = v.isSelector, x = v.isArray, t = g.prototype = d.to({}, .1, {}), w = [];
        g.version = "1.15.0", t.constructor = g, t.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = d.killTweensOf, g.getTweensOf = d.getTweensOf, g.lagSmoothing = d.lagSmoothing, g.ticker = d.ticker, g.render = d.render, t.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), d.prototype.invalidate.call(this)
        }, t.updateTo = function (t, e) {
            var i, n = this.ratio, r = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
            if (this._initted || r) if (e) this._initted = !1, r && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && d._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (0 < this._time || r) {
                this._initted = !1, this._init();
                for (var o, a = 1 / (1 - n), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next
            }
            return this
        }, t.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, s, o, a, l, u, h, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time,
                p = this._totalTime, d = this._cycle, m = this._duration, g = this._rawPrevTime;
            if (c <= t ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || g < 0 || g === _) && g !== t && (i = !0, _ < g && (r = "onReverseComplete")), this._rawPrevTime = h = !e || t || g === t ? t : _)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === m && 0 < g && g !== _) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), this._rawPrevTime = h = !e || t || g === t ? t : _)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = m + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType ? (a = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (u = this._easePower) ? a *= a : 2 === u ? a *= a * a : 3 === u ? a *= a * a * a : 4 === u && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : this._time / m < .5 ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / m)), f !== this._time || i || d !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = p, this._rawPrevTime = g, this._cycle = d, v.lazyTweens.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / m) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && 0 <= t && (this._active = !0), 0 === p && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== p || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || w)), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || w), 0 === m && this._rawPrevTime === _ && h !== _ && (this._rawPrevTime = 0))
            } else p !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w))
        }, g.to = function (t, e, i) {
            return new g(t, e, i)
        }, g.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new g(t, e, i)
        }, g.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new g(t, e, n)
        }, g.staggerTo = g.allTo = function (t, e, i, n, r, s, o) {
            n = n || 0;
            var a, l, u, h, c = i.delay || 0, f = [], p = function () {
                i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(o || this, s || w)
            };
            for (x(t) || ("string" == typeof t && (t = d.selector(t) || t), y(t) && (t = m(t))), t = t || [], n < 0 && ((t = m(t)).reverse(), n *= -1), a = t.length - 1, u = 0; u <= a; u++) {
                for (h in l = {}, i) l[h] = i[h];
                l.delay = c, u === a && r && (l.onComplete = p), f[u] = new g(t[u], e, l), c += n
            }
            return f
        }, g.staggerFrom = g.allFrom = function (t, e, i, n, r, s, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, g.staggerTo(t, e, i, n, r, s, o)
        }, g.staggerFromTo = g.allFromTo = function (t, e, i, n, r, s, o, a) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, g.staggerTo(t, e, n, r, s, o, a)
        }, g.delayedCall = function (t, e, i, n, r) {
            return new g(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, g.set = function (t, e) {
            return new g(t, 0, e)
        }, g.isTweening = function (t) {
            return 0 < d.getTweensOf(t, !0).length
        };
        var s = function (t, e) {
            for (var i = [], n = 0, r = t._first; r;) r instanceof d ? i[n++] = r : (e && (i[n++] = r), n = (i = i.concat(s(r, e))).length), r = r._next;
            return i
        }, c = g.getAllTweens = function (t) {
            return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
        };
        g.killAll = function (t, e, i, n) {
            null == e && (e = !0), null == i && (i = !0);
            var r, s, o, a = c(0 != n), l = a.length, u = e && i && n;
            for (o = 0; o < l; o++) s = a[o], (u || s instanceof h || (r = s.target === s.vars.onComplete) && i || e && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, g.killChildTweensOf = function (t, e) {
            if (null != t) {
                var i, n, r, s, o, a = v.tweenLookup;
                if ("string" == typeof t && (t = d.selector(t) || t), y(t) && (t = m(t)), x(t)) for (s = t.length; -1 < --s;) g.killChildTweensOf(t[s], e); else {
                    for (r in i = [], a) for (n = a[r].target.parentNode; n;) n === t && (i = i.concat(a[r].tweens)), n = n.parentNode;
                    for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                }
            }
        };
        var r = function (t, e, i, n) {
            e = !1 !== e, i = !1 !== i;
            for (var r, s, o = c(n = !1 !== n), a = e && i && n, l = o.length; -1 < --l;) s = o[l], (a || s instanceof h || (r = s.target === s.vars.onComplete) && i || e && !r) && s.paused(t)
        };
        return g.pauseAll = function (t, e, i) {
            r(!0, t, e, i)
        }, g.resumeAll = function (t, e, i) {
            r(!1, t, e, i)
        }, g.globalTimeScale = function (t) {
            var e = n._rootTimeline, i = d.ticker.time;
            return arguments.length ? (t = t || _, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = n._rootFramesTimeline, i = d.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = n._rootTimeline._timeScale = t, t) : e._timeScale
        }, t.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, t.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, t.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, t.duration = function (t) {
            return arguments.length ? n.prototype.duration.call(this, t) : this._duration
        }, t.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, t.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, t.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, t.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, g
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, c, f) {
        var p = function (t) {
                c.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var e, i, n = this.vars;
                for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
            }, d = 1e-10, t = f._internals, m = t.isSelector, g = t.isArray, _ = t.lazyTweens, v = t.lazyRender, y = [],
            o = _gsScope._gsDefine.globals, x = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }, s = function (t, e, i, n) {
                var r = t._timeline, s = r._totalTime;
                !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(n || r, i || y), this._forcingPlayhead && r.seek(s))
            }, w = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }, e = p.prototype = new c;
        return p.version = "1.15.0", e.constructor = p, e.kill()._gc = e._forcingPlayhead = !1, e.to = function (t, e, i, n) {
            var r = i.repeat && o.TweenMax || f;
            return e ? this.add(new r(t, e, i), n) : this.set(t, i, n)
        }, e.from = function (t, e, i, n) {
            return this.add((i.repeat && o.TweenMax || f).from(t, e, i), n)
        }, e.fromTo = function (t, e, i, n, r) {
            var s = n.repeat && o.TweenMax || f;
            return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
        }, e.staggerTo = function (t, e, i, n, r, s, o, a) {
            var l, u = new p({
                onComplete: s,
                onCompleteParams: o,
                onCompleteScope: a,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = f.selector(t) || t), m(t = t || []) && (t = w(t)), (n = n || 0) < 0 && ((t = w(t)).reverse(), n *= -1), l = 0; t.length > l; l++) i.startAt && (i.startAt = x(i.startAt)), u.to(t[l], e, x(i), l * n);
            return this.add(u, r)
        }, e.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, e.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, e.call = function (t, e, i, n) {
            return this.add(f.delayedCall(0, t, e, i), n)
        }, e.set = function (t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new f(t, 0, e), i)
        }, p.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, n, r = new p(t), s = r._timeline;
            for (null == e && (e = !0), s._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = s._time, i = s._first; i;) n = i._next, e && i instanceof f && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay), i = n;
            return s.add(r, 0), r
        }, e.add = function (t, e, i, n) {
            var r, s, o, a, l, u;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof h)) {
                if (t instanceof Array || t && t.push && g(t)) {
                    for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++) g(a = t[o]) && (a = new p({tweens: a})), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                    return this._uncache(!0)
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t) throw"Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = f.delayedCall(0, t)
            }
            if (c.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (u = (l = this).rawTime() > t._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
            return this
        }, e.remove = function (t) {
            if (t instanceof h) return this._remove(t, !1);
            if (t instanceof Array || t && t.push && g(t)) {
                for (var e = t.length; -1 < --e;) this.remove(t[e]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, e._remove = function (t, e) {
            c.prototype._remove.call(this, t, e);
            var i = this._last;
            return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, e.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, e.insert = e.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, e.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, e.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, e.addPause = function (t, e, i, n) {
            var r = f.delayedCall(0, s, ["{self}", e, i, n], this);
            return r.data = "isPause", this.add(r, t)
        }, e.removeLabel = function (t) {
            return delete this._labels[t], this
        }, e.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, e._parseTimeOrLabel = function (t, e, i, n) {
            var r;
            if (n instanceof h && n.timeline === this) this.remove(n); else if (n && (n instanceof Array || n.push && g(n))) for (r = n.length; -1 < --r;) n[r] instanceof h && n[r].timeline === this && this.remove(n[r]);
            if ("string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
            if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration()); else {
                if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
            }
            return Number(t) + e
        }, e.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, e.stop = function () {
            return this.paused(!0)
        }, e.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, e.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, e.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l = this._dirty ? this.totalDuration() : this._totalDuration, u = this._time,
                h = this._startTime, c = this._timeScale, f = this._paused;
            if (l <= t ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === d) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > d && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : d, t = l + 1e-4) : t < 1e-7 ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== d && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", r = this._reversed), t < 0 ? (this._active = !1, 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : d, t = 0, this._initted || (a = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== u && this._first || i || a) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < t && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y)), this._time >= u) for (n = this._first; n && (s = n._next, !this._paused || f);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = this._last; n && (s = n._prev, !this._paused || f);) (n._active || u >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                this._onUpdate && (e || (_.length && v(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y))), o && (this._gc || (h === this._startTime || c !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (r && (_.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || y)))
            }
        }, e._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof p && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, e.getChildren = function (t, e, i, n) {
            n = n || -9999999999;
            for (var r = [], s = this._first, o = 0; s;) n > s._startTime || (s instanceof f ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), s = s._next;
            return r
        }, e.getTweensOf = function (t, e) {
            var i, n, r = this._gc, s = [], o = 0;
            for (r && this._enabled(!0, !0), n = (i = f.getTweensOf(t)).length; -1 < --n;) (i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
            return r && this._enabled(!1, !0), s
        }, e.recent = function () {
            return this._recent
        }, e._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, e.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, e._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; -1 < --n;) i[n]._kill(t, e) && (r = !0);
            return r
        }, e.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, e.invalidate = function () {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return h.prototype.invalidate.call(this)
        }, e._enabled = function (t, e) {
            if (t === this._gc) for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
            return c.prototype._enabled.call(this, t, e)
        }, e.totalTime = function () {
            this._forcingPlayhead = !0;
            var t = h.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, t
        }, e.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, e.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, e.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === h._rootFramesTimeline
        }, e.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, p
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, o, t) {
        var i = function (t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            }, S = 1e-10, C = [], n = o._internals, k = n.lazyTweens, P = n.lazyRender, a = new t(null, null, 1, 0),
            r = i.prototype = new e;
        return r.constructor = i, r.kill()._gc = !1, i.version = "1.15.0", r.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, r.addCallback = function (t, e, i, n) {
            return this.add(o.delayedCall(0, t, i, n), e)
        }, r.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); -1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, r.tweenTo = function (t, e) {
            var i, n, r, s = {
                ease: a,
                overwrite: (e = e || {}).delay ? 2 : 1,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (n in e) s[n] = e[n];
            return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new o(this, i, s), s.onStart = function () {
                r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && e.onStart.apply(e.onStartScope || r, e.onStartParams || C)
            }, r
        }, r.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, r.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, u = this._dirty ? this.totalDuration() : this._totalDuration, h = this._duration,
                c = this._time, f = this._totalTime, p = this._startTime, d = this._timeScale, m = this._rawPrevTime,
                g = this._paused, _ = this._cycle;
            if (u <= t ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || m < 0 || m === S) && m !== t && this._first && (a = !0, S < m && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : S, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = h) + 1e-4) : t < 1e-7 ? (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== c || 0 === h && m !== S && (0 < m || t < 0 && 0 <= m) && !this._locked) && (o = "onReverseComplete", r = this._reversed), t < 0 ? (this._active = !1, 0 <= m && this._first && (a = !0), this._rawPrevTime = t) : (this._rawPrevTime = h || !e || t || this._rawPrevTime === t ? t : S, t = 0, this._initted || (a = !0))) : (0 === h && m < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? t = (this._time = h) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time))), this._cycle !== _ && !this._locked) {
                var v = this._yoyo && 0 != (1 & _), y = v === (this._yoyo && 0 != (1 & this._cycle)),
                    x = this._totalTime, w = this._cycle, b = this._rawPrevTime, T = this._time;
                if (this._totalTime = _ * h, _ > this._cycle ? v = !v : this._totalTime += h, this._time = c, this._rawPrevTime = 0 === h ? m - 1e-4 : m, this._cycle = _, this._locked = !0, c = v ? 0 : h, this.render(c, e, 0 === h), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || C), y && (c = v ? h + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !g) return;
                this._time = T, this._totalTime = x, this._cycle = w, this._rawPrevTime = b
            }
            if (this._time !== c && this._first || i || a) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < t && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || C)), this._time >= c) for (n = this._first; n && (s = n._next, !this._paused || g);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = this._last; n && (s = n._prev, !this._paused || g);) (n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                this._onUpdate && (e || (k.length && P(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))), o && (this._locked || this._gc || (p === this._startTime || d !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (k.length && P(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || C)))
            } else f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))
        }, r.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; n < l; n++) (r = o[n]).isActive() && (s[a++] = r);
            return s
        }, r.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
            return null
        }, r.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i;) if (t > e[i].time) return e[i].name;
            return null
        }, r.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, r.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, r.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, r.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, r.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, r.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, r.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, i
    }, !0), T = 180 / Math.PI, w = [], b = [], S = [], _ = {}, i = _gsScope._gsDefine.globals, v = function (t, e, i, n) {
        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
    }, C = function (t, e, i, n) {
        var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, u = (e + i) / 2, h = (i + n) / 2, c = (l + u) / 2,
            f = (u + h) / 2, p = (f - c) / 8;
        return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
    }, y = function (t, e, i, n, r) {
        var s, o, a, l, u, h, c, f, p, d, m, g, _, v = t.length - 1, y = 0, x = t[0].a;
        for (s = 0; s < v; s++) o = (u = t[y]).a, a = u.d, l = t[y + 1].d, r ? (m = w[s], _ = .25 * ((g = b[s]) + m) * e / (n ? .5 : S[s] || .5), f = a - ((h = a - (a - o) * (n ? .5 * e : 0 !== m ? _ / m : 0)) + (((c = a + (l - a) * (n ? .5 * e : 0 !== g ? _ / g : 0)) - h) * (3 * m / (m + g) + .5) / 4 || 0))) : f = a - ((h = a - .5 * (a - o) * e) + (c = a + .5 * (l - a) * e)) / 2, h += f, c += f, u.c = p = h, u.b = 0 !== s ? x : x = u.a + .6 * (u.c - u.a), u.da = a - o, u.ca = p - o, u.ba = x - o, i ? (d = C(o, x, p, a), t.splice(y, 1, d[0], d[1], d[2], d[3]), y += 4) : y++, x = c;
        (u = t[y]).b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, i && (d = C(u.a, x, u.c, u.d), t.splice(y, 1, d[0], d[1], d[2], d[3]))
    }, x = function (t, e, i, n) {
        var r, s, o, a, l, u, h = [];
        if (n) for (s = (t = [n].concat(t)).length; -1 < --s;) "string" == typeof (u = t[s][e]) && "=" === u.charAt(1) && (t[s][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
        if ((r = t.length - 2) < 0) return h[0] = new v(t[0][e], 0, 0, t[r < -1 ? 0 : 1][e]), h;
        for (s = 0; s < r; s++) o = t[s][e], a = t[s + 1][e], h[s] = new v(o, 0, 0, a), i && (l = t[s + 2][e], w[s] = (w[s] || 0) + (a - o) * (a - o), b[s] = (b[s] || 0) + (l - a) * (l - a));
        return h[s] = new v(t[s][e], 0, 0, t[s + 1][e]), h
    }, p = function (t, e, i, n, r, s) {
        var o, a, l, u, h, c, f, p, d = {}, m = [], g = s || t[0];
        for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
        if (1 < t.length) {
            for (p = t[t.length - 1], f = !0, o = m.length; -1 < --o;) if (a = m[o], .05 < Math.abs(g[a] - p[a])) {
                f = !1;
                break
            }
            f && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
        }
        for (w.length = b.length = S.length = 0, o = m.length; -1 < --o;) a = m[o], _[a] = -1 !== r.indexOf("," + a + ","), d[a] = x(t, a, _[a], s);
        for (o = w.length; -1 < --o;) w[o] = Math.sqrt(w[o]), b[o] = Math.sqrt(b[o]);
        if (!n) {
            for (o = m.length; -1 < --o;) if (_[a]) for (c = (l = d[m[o]]).length - 1, u = 0; u < c; u++) h = l[u + 1].da / b[u] + l[u].da / w[u], S[u] = (S[u] || 0) + h * h;
            for (o = S.length; -1 < --o;) S[o] = Math.sqrt(S[o])
        }
        for (o = m.length, u = i ? 4 : 1; -1 < --o;) l = d[a = m[o]], y(l, e, i, n, _[a]), f && (l.splice(0, u), l.splice(l.length - u, u));
        return d
    }, d = function (t, e, i) {
        for (var n, r, s, o, a, l, u, h, c, f, p, d = 1 / i, m = t.length; -1 < --m;) for (s = (f = t[m]).a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, h = 1; h <= i; h++) n = r - (r = ((u = d * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u), e[p = m * i + h - 1] = (e[p] || 0) + n * n
    }, g = _gsScope._gsDefine.plugin({
        propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function (t, e, i) {
            this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, r, s, o, a, l = e.values || [], u = {}, h = l[0], c = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]] : null, h) this._props.push(n);
            for (s = this._props.length; -1 < --s;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function (t, e, i) {
                var n, r, s, o, a, l, u, h, c, f, p, d = {}, m = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e, _ = [];
                if (g && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw"invalid Bezier data";
                for (c in t[0]) _.push(c);
                for (l = _.length; -1 < --l;) {
                    for (d[c = _[l]] = a = [], f = 0, h = t.length, u = 0; u < h; u++) n = null == i ? t[u][c] : "string" == typeof (p = t[u][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < u && u < h - 1 && (a[f++] = (n + a[f - 2]) / 2), a[f++] = n;
                    for (h = f - m + 1, u = f = 0; u < h; u += m) n = a[u], r = a[u + 1], s = a[u + 2], o = 2 === m ? 0 : a[u + 3], a[f++] = p = 3 === m ? new v(n, r, s, o) : new v(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                    a.length = f
                }
                return d
            }(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                var f = function (t, e) {
                    var i, n, r, s, o = [], a = [], l = 0, u = 0, h = (e = e >> 0 || 6) - 1, c = [], f = [];
                    for (i in t) d(t[i], o, e);
                    for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), f[s = n % e] = l, s === h && (u += l, c[s = n / e >> 0] = f, a[s] = u, l = 0, f = []);
                    return {length: u, lengths: a, segments: c}
                }(this._beziers, this._timeRes);
                this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (c = this._autoRotate) for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), s = c.length; -1 < --s;) {
                for (o = 0; o < 3; o++) n = c[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                n = c[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
            }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        }, set: function (t) {
            var e, i, n, r, s, o, a, l, u, h, c = this._segCount, f = this._func, p = this._target,
                d = t !== this._startRatio;
            if (this._timeRes) {
                if (u = this._lengths, h = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < c - 1) {
                    for (l = c - 1; n < l && t >= (this._l2 = u[++n]);) ;
                    this._l1 = u[n - 1], this._li = n, this._curSeg = h = this._segments[n], this._s2 = h[this._s1 = this._si = 0]
                } else if (this._l1 > t && 0 < n) {
                    for (; 0 < n && (this._l1 = u[--n]) >= t;) ;
                    0 === n && this._l1 > t ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = h = this._segments[n], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                }
                if (e = n, t -= this._l1, n = this._si, t > this._s2 && h.length - 1 > n) {
                    for (l = h.length - 1; n < l && t >= (this._s2 = h[++n]);) ;
                    this._s1 = h[n - 1], this._si = n
                } else if (this._s1 > t && 0 < n) {
                    for (; 0 < n && (this._s1 = h[--n]) >= t;) ;
                    0 === n && this._s1 > t ? this._s1 = 0 : n++, this._s2 = h[n], this._si = n
                }
                o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec
            } else o = (t - (e = t < 0 ? 0 : 1 <= t ? c - 1 : c * t >> 0) * (1 / c)) * c;
            for (i = 1 - o, n = this._props.length; -1 < --n;) r = this._props[n], a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a, this._round[r] && (a = Math.round(a)), f[r] ? p[r](a) : p[r] = a;
            if (this._autoRotate) {
                var m, g, _, v, y, x, w, b = this._autoRotate;
                for (n = b.length; -1 < --n;) r = b[n][2], x = b[n][3] || 0, w = !0 === b[n][4] ? 1 : T, s = this._beziers[b[n][0]], m = this._beziers[b[n][1]], s && m && (s = s[e], m = m[e], g = s.a + (s.b - s.a) * o, g += ((v = s.b + (s.c - s.b) * o) - g) * o, v += (s.c + (s.d - s.c) * o - v) * o, _ = m.a + (m.b - m.a) * o, _ += ((y = m.b + (m.c - m.b) * o) - _) * o, y += (m.c + (m.d - m.c) * o - y) * o, a = d ? Math.atan2(y - _, v - g) * w + x : this._initialRotations[n], f[r] ? p[r](a) : p[r] = a)
            }
        }
    }), e = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = C, g._autoCSS = !0, g.quadraticToCubic = function (t, e, i) {
        return new v(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
    }, g._cssRegister = function () {
        var t = i.CSSPlugin;
        if (t) {
            var e = t._internals, p = e._parseToProxy, d = e._setPluginRatio, m = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function (t, e, i, n, r, s) {
                    e instanceof Array && (e = {values: e}), s = new g;
                    var o, a, l, u = e.values, h = u.length - 1, c = [], f = {};
                    if (h < 0) return r;
                    for (o = 0; o <= h; o++) l = p(t, u[o], n, r, s, h !== o), c[o] = l.end;
                    for (a in e) f[a] = e[a];
                    return f.values = c, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = s, r.setRatio = d, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (o = !0 === f.autoRotate ? 0 : Number(f.autoRotate), f.autoRotate = null != l.end.left ? [["left", "top", "rotation", o, !1]] : null != l.end.x && [["x", "y", "rotation", o, !1]]), f.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform), s._onInitTween(l.proxy, f, n._tween), r
                }
            })
        }
    }, e._roundProps = function (t, e) {
        for (var i = this._overwriteProps, n = i.length; -1 < --n;) (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
    }, e._kill = function (t) {
        var e, i, n = this._props;
        for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; -1 < --i;) n[i] === e && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, f) {
        var d, T, U, p, Y = function () {
            s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = Y.prototype.setRatio
        }, u = _gsScope._gsDefine.globals, m = {}, t = Y.prototype = new s("css");
        (t.constructor = Y).version = "1.15.0", Y.API = 2, Y.defaultTransformPerspective = 0, Y.defaultSkewType = "compensated", t = "px", Y.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        };
        var k, g, _, j, v, C, e, i, P = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            A = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, h = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            R = /(?:\d|\-|\+|=|#|\.)*/g, D = /opacity *= *([^)]*)/i, x = /opacity:([^;]*)/i,
            o = /alpha\(opacity *=.+?\)/i, E = /^(rgb|hsl)/, a = /([A-Z])/g, l = /-([a-z])/gi,
            w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, c = function (t, e) {
                return e.toUpperCase()
            }, b = /(?:Left|Right|Width)/i, $ = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, I = Math.PI / 180,
            V = 180 / Math.PI, S = {}, N = document, n = function (t) {
                return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
            }, M = n("div"), F = n("img"), r = Y._internals = {_specialProps: m}, q = navigator.userAgent,
            z = (e = q.indexOf("Android"), i = n("a"), _ = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === e || 3 < Number(q.substr(e + 8, 1))), v = _ && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, j = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (C = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
            H = function (t) {
                return D.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, B = function (t) {
                window.console && console.log(t)
            }, X = "", W = "", G = function (t, e) {
                var i, n, r = (e = e || M).style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; -1 < --n && void 0 === r[i[n] + t];) ;
                return 0 <= n ? (W = 3 === n ? "ms" : i[n], X = "-" + W.toLowerCase() + "-", W + t) : null
            }, Q = N.defaultView ? N.defaultView.getComputedStyle : function () {
            }, Z = Y.getStyle = function (t, e, i, n, r) {
                var s;
                return z || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || Q(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : H(t)
            }, K = r.convertToPixels = function (t, e, i, n, r) {
                if ("px" === n || !n) return i;
                if ("auto" === n || !i) return 0;
                var s, o, a, l = b.test(e), u = t, h = M.style, c = i < 0;
                if (c && (i = -i), "%" === n && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight); else {
                    if (h.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== n && u.appendChild) h[l ? "borderLeftWidth" : "borderTopWidth"] = i + n; else {
                        if (o = (u = t.parentNode || N.body)._gsCache, a = f.ticker.frame, o && l && o.time === a) return o.width * i / 100;
                        h[l ? "width" : "height"] = i + n
                    }
                    u.appendChild(M), s = parseFloat(M[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(M), l && "%" === n && !1 !== Y.cacheWidths && ((o = u._gsCache = u._gsCache || {}).time = a, o.width = s / i * 100), 0 !== s || r || (s = K(t, e, i, n, !0))
                }
                return c ? -s : s
            }, J = r.calculateOffset = function (t, e, i) {
                if ("absolute" !== Z(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top", r = Z(t, "margin" + n, i);
                return t["offset" + n] - (K(t, e, parseFloat(r), r.replace(R, "")) || 0)
            }, tt = function (t, e) {
                var i, n, r = {};
                if (e = e || Q(t, null)) if (i = e.length) for (; -1 < --i;) r[e[i].replace(l, c)] = e.getPropertyValue(e[i]); else for (i in e) r[i] = e[i]; else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(l, c)] = e[i]);
                return z || (r.opacity = H(t)), n = Ft(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Et && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            }, et = function (t, e, i, n, r) {
                var s, o, a, l = {}, u = t.style;
                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(h, "") ? s : 0 : J(t, o), void 0 !== u[o] && (a = new mt(u, o, u[o], a)));
                if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                return {difs: l, firstMPT: a}
            }, it = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], rt = function (t, e, i) {
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = it[e], s = r.length;
                for (i = i || Q(t, null); -1 < --s;) n -= parseFloat(Z(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Z(t, "border" + r[s] + "Width", i, !0)) || 0;
                return n
            }, st = function (t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(h, "")), e.oy = parseFloat(r.replace(h, ""))), n + " " + r + (2 < i.length ? " " + i[2] : "")
            }, ot = function (t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            }, at = function (t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
            }, lt = function (t, e, i, n) {
                var r, s, o, a;
                return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = Number(s[0].replace(h, "")) * (-1 === t.indexOf("rad") ? 1 : V) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && ((o %= r) !== o % 180 && (o = o < 0 ? o + r : o - r)), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % r - (0 | o / r) * r)), a = e + o), a < 1e-6 && -1e-6 < a && (a = 0), a
            }, ut = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ht = function (t, e, i) {
                return 0 | 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + 6 * (i - e) * t : t < .5 ? i : 3 * t < 2 ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            }, ct = Y.parseColor = function (t) {
                var e, i, n, r, s, o;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t] ? ut[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (n = t.charAt(3)) + n), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : ("hsl" === t.substr(0, 3) ? (t = t.match(P), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, e = 2 * (o = Number(t[2]) / 100) - (i = o <= .5 ? o * (s + 1) : o + s - o * s), 3 < t.length && (t[3] = Number(t[3])), t[0] = ht(r + 1 / 3, e, i), t[1] = ht(r, e, i), t[2] = ht(r - 1 / 3, e, i)) : ((t = t.match(P) || ut.transparent)[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), 3 < t.length && (t[3] = Number(t[3]))), t)) : ut.black
            }, ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (t in ut) ft += "|" + t + "\\b";
        ft = RegExp(ft + ")", "gi");
        var pt = function (t, e, s, o) {
            if (null == t) return function (t) {
                return t
            };
            var a, l = e ? (t.match(ft) || [""])[0] : "", u = t.split(l).join("").match(y) || [],
                h = t.substr(0, t.indexOf(u[0])), c = ")" === t.charAt(t.length - 1) ? ")" : "",
                f = -1 !== t.indexOf(" ") ? " " : ",", p = u.length, d = 0 < p ? u[0].replace(P, "") : "";
            return p ? a = e ? function (t) {
                var e, i, n, r;
                if ("number" == typeof t) t += d; else if (o && L.test(t)) {
                    for (r = t.replace(L, "|").split("|"), n = 0; r.length > n; n++) r[n] = a(r[n]);
                    return r.join(",")
                }
                if (e = (t.match(ft) || [l])[0], n = (i = t.split(e).join("").match(y) || []).length, p > n--) for (; p > ++n;) i[n] = s ? i[0 | (n - 1) / 2] : u[n];
                return h + i.join(f) + f + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, i, n;
                if ("number" == typeof t) t += d; else if (o && L.test(t)) {
                    for (i = t.replace(L, "|").split("|"), n = 0; i.length > n; n++) i[n] = a(i[n]);
                    return i.join(",")
                }
                if (n = (e = t.match(y) || []).length, p > n--) for (; p > ++n;) e[n] = s ? e[0 | (n - 1) / 2] : u[n];
                return h + e.join(f) + c
            } : function (t) {
                return t
            }
        }, dt = function (u) {
            return u = u.split(","), function (t, e, i, n, r, s, o) {
                var a, l = (e + "").split(" ");
                for (o = {}, a = 0; a < 4; a++) o[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                return n.parse(t, o, r, s)
            }
        }, mt = (r._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT; a;) e = o[a.v], a.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), a.t[a.p] = e, a = a._next;
            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t) for (a = s.firstMPT; a;) {
                if ((i = a.t).type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && ((n._prev = this)._next = n)
        }), gt = (r._parseToProxy = function (t, e, i, n, r, s) {
            var o, a, l, u, h, c = n, f = {}, p = {}, d = i._transform, m = S;
            for (i._transform = null, S = e, n = h = i.parse(t, e, n, r), S = m, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                if (n.type <= 1 && (p[a = n.p] = n.s + n.c, f[a] = n.s, s || (u = new mt(n, "s", a, u, n.r), n.c = 0), 1 === n.type)) for (o = n.l; 0 < --o;) l = "xn" + o, p[a = n.p + "_" + l] = n.data[l], f[a] = n[l], s || (u = new mt(n, l, a, u, n.rxp[l]));
                n = n._next
            }
            return {proxy: f, end: p, firstMPT: u, pt: h}
        }, r.CSSPropTween = function (t, e, i, n, r, s, o, a, l, u, h) {
            this.t = t, this.p = e, this.s = i, this.c = n, this.n = o || e, t instanceof gt || p.push(this.n), this.r = a, this.type = s || 0, l && (this.pr = l, d = !0), this.b = void 0 === u ? i : u, this.e = void 0 === h ? i + n : h, r && ((this._next = r)._prev = this)
        }), _t = Y.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
            o = new gt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i = i || s || "", n), n += "";
            var h, c, f, p, d, m, g, _, v, y, x, w, b = i.split(", ").join(",").split(" "),
                T = n.split(", ").join(",").split(" "), S = b.length, C = !1 !== k;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (b = b.join(" ").replace(L, ", ").split(" "), T = T.join(" ").replace(L, ", ").split(" "), S = b.length), S !== T.length && (S = (b = (s || "").split(" ")).length), o.plugin = l, o.setRatio = u, h = 0; h < S; h++) if (p = b[h], d = T[h], (_ = parseFloat(p)) || 0 === _) o.appendXtra("", _, ot(d, _), d.replace(A, ""), C && -1 !== d.indexOf("px"), !0); else if (r && ("#" === p.charAt(0) || ut[p] || E.test(p))) w = "," === d.charAt(d.length - 1) ? ")," : ")", p = ct(p), d = ct(d), (v = 6 < p.length + d.length) && !z && 0 === d[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(T[h]).join("transparent")) : (z || (v = !1), o.appendXtra(v ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], v ? "," : w, !0), v && (p = p.length < 4 ? 1 : p[3], o.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, w, !1))); else if (m = p.match(P)) {
                if (!(g = d.match(A)) || g.length !== m.length) return o;
                for (c = f = 0; m.length > c; c++) x = m[c], y = p.indexOf(x, f), o.appendXtra(p.substr(f, y - f), Number(x), ot(g[c], x), "", C && "px" === p.substr(y + x.length, 2), 0 === c), f = y + x.length;
                o["xs" + o.l] += p.substr(f)
            } else o["xs" + o.l] += o.l ? " " + p : p;
            if (-1 !== n.indexOf("=") && o.data) {
                for (w = o.xs0 + o.data.s, h = 1; o.l > h; h++) w += o["xs" + h] + o.data["xn" + h];
                o.e = w + o["xs" + h]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, vt = 9;
        for ((t = gt.prototype).l = t.pr = 0; 0 < --vt;) t["xn" + vt] = 0, t["xs" + vt] = "";
        t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, i, n, r, s) {
            var o = this, a = o.l;
            return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", 0 < a ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new gt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0)) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r)) : o["xs" + a] += e + (n || ""), o
        };
        var yt = function (t, e) {
            e = e || {}, this.p = e.prefix && G(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, xt = r._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r = t.split(","), s = e.defaultValue;
            for (i = i || [s], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new yt(r[n], e)
        }, wt = function (t) {
            if (!m[t]) {
                var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                xt(t, {
                    parser: function (t, e, i, n, r, s, o) {
                        var a = u.com.greensock.plugins[l];
                        return a ? (a._cssRegister(), m[i].parse(t, e, i, n, r, s, o)) : (B("Error: " + l + " js file not loaded."), r)
                    }
                })
            }
        };
        (t = yt.prototype).parseComplex = function (t, e, i, n, r, s) {
            var o, a, l, u, h, c = this.keyword;
            if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : c && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, c && (e.indexOf(c) !== (h = i.indexOf(c)) && ((i = -1 === h ? l : a)[o] += " " + c));
                e = a.join(", "), i = l.join(", ")
            }
            return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, t.parse = function (t, e, i, n, r, s) {
            return this.parseComplex(t.style, this.format(Z(t, this.p, U, !1, this.dflt)), this.format(e), r, s)
        }, Y.registerSpecialProp = function (t, a, l) {
            xt(t, {
                parser: function (t, e, i, n, r, s) {
                    var o = new gt(t, i, 0, 0, r, 2, i, !1, l);
                    return o.plugin = s, o.setRatio = a(t, e, n._tween, i), o
                }, priority: l
            })
        };
        var bt, Tt, St, Ct, kt,
            Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            At = G("transform"), Rt = X + "transform", Dt = G("transformOrigin"), Et = null !== G("perspective"),
            Ot = r.Transform = function () {
                this.perspective = parseFloat(Y.defaultTransformPerspective) || 0, this.force3D = !(!1 === Y.defaultForce3D || !Et) && (Y.defaultForce3D || "auto")
            }, Lt = window.SVGElement, Nt = function (t, e, i) {
                var n, r = N.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            }, Mt = document.documentElement,
            jt = (kt = C || /Android/i.test(q) && !window.chrome, N.createElementNS && !kt && (Tt = Nt("svg", Mt), Ct = (St = Nt("rect", Tt, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, St.style[Dt] = "50% 50%", St.style[At] = "scaleX(0.5)", kt = Ct === St.getBoundingClientRect().width, Mt.removeChild(Tt)), kt),
            It = function (t, e, i) {
                var n = t.getBBox();
                e = st(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
            }, Ft = r.getTransform = function (t, e, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var r, s, o, a, l, u, h, c, f, p, d = i && t._gsTransform || new Ot, m = d.scaleX < 0, g = 1e5,
                    _ = Et && (parseFloat(Z(t, Dt, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0,
                    v = parseFloat(Y.defaultTransformPerspective) || 0;
                if (At ? s = Z(t, Rt, e, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match($)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), r = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, d.svg = !!(Lt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (It(t, Z(t, Dt, U, !1, "50% 50%") + "", d), bt = Y.useSVGTransformAttr || jt, o = t.getAttribute("transform"), r && o && -1 !== o.indexOf("matrix") && (s = o, r = 0)), !r) {
                    for (a = (o = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; -1 < --a;) l = Number(o[a]), o[a] = (u = l - (l |= 0)) ? (0 | u * g + (u < 0 ? -.5 : .5)) / g + l : l;
                    if (16 === o.length) {
                        var y = o[8], x = o[9], w = o[10], b = o[12], T = o[13], S = o[14];
                        d.zOrigin && (b = y * (S = -d.zOrigin) - o[12], T = x * S - o[13], S = w * S + d.zOrigin - o[14]);
                        var C, k, P, A, R, D = o[0], E = o[1], O = o[2], L = o[3], N = o[4], M = o[5], j = o[6], I = o[7],
                            F = o[11], q = Math.atan2(E, M);
                        d.rotation = q * V, q && (D = D * (A = Math.cos(-q)) + N * (R = Math.sin(-q)), k = E * A + M * R, M = E * -R + M * A, j = O * -R + j * A, E = k), q = Math.atan2(y, D), d.rotationY = q * V, q && (k = E * (A = Math.cos(-q)) - x * (R = Math.sin(-q)), P = O * A - w * R, x = E * R + x * A, w = O * R + w * A, F = L * R + F * A, D = C = D * A - y * R, E = k, O = P), q = Math.atan2(j, w), d.rotationX = q * V, q && (C = N * (A = Math.cos(-q)) + y * (R = Math.sin(-q)), k = M * A + x * R, P = j * A + w * R, y = N * -R + y * A, x = M * -R + x * A, w = j * -R + w * A, F = I * -R + F * A, N = C, M = k, j = P), d.scaleX = (0 | Math.sqrt(D * D + E * E) * g + .5) / g, d.scaleY = (0 | Math.sqrt(M * M + x * x) * g + .5) / g, d.scaleZ = (0 | Math.sqrt(j * j + w * w) * g + .5) / g, d.skewX = 0, d.perspective = F ? 1 / (F < 0 ? -F : F) : 0, d.x = b, d.y = T, d.z = S
                    } else if (!(Et && !n && o.length && d.x === o[4] && d.y === o[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Z(t, "display", e))) {
                        var z = 6 <= o.length, H = z ? o[0] : 1, B = o[1] || 0, X = o[2] || 0, W = z ? o[3] : 1;
                        d.x = o[4] || 0, d.y = o[5] || 0, h = Math.sqrt(H * H + B * B), c = Math.sqrt(W * W + X * X), f = H || B ? Math.atan2(B, H) * V : d.rotation || 0, p = X || W ? Math.atan2(X, W) * V + f : d.skewX || 0, 90 < Math.abs(p) && Math.abs(p) < 270 && (m ? (h *= -1, p += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (c *= -1, p += p <= 0 ? 180 : -180)), d.scaleX = h, d.scaleY = c, d.rotation = f, d.skewX = p, Et && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1)
                    }
                    for (a in d.zOrigin = _, d) d[a] < 2e-5 && -2e-5 < d[a] && (d[a] = 0)
                }
                return i && (t._gsTransform = d), d
            }, qt = function (t) {
                var e, i, n = this.data, r = -n.rotation * I, s = r + n.skewX * I, o = 1e5,
                    a = (0 | Math.cos(r) * n.scaleX * o) / o, l = (0 | Math.sin(r) * n.scaleX * o) / o,
                    u = (0 | Math.sin(s) * -n.scaleY * o) / o, h = (0 | Math.cos(s) * n.scaleY * o) / o, c = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = l, l = -u, u = -i, e = f.filter, c.filter = "";
                    var p, d, m = this.t.offsetWidth, g = this.t.offsetHeight, _ = "absolute" !== f.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                        y = n.x + m * n.xPercent / 100, x = n.y + g * n.yPercent / 100;
                    if (null != n.ox && (y += (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2) - (p * a + (d = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2) * l), x += d - (p * u + d * h)), _ ? v += ", Dx=" + ((p = m / 2) - (p * a + (d = g / 2) * l) + y) + ", Dy=" + (d - (p * u + d * h) + x) + ")" : v += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, v) : v + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (_ && -1 === v.indexOf("Dx=0, Dy=0") || D.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !_) {
                        var w, b, T, S = C < 8 ? 1 : -1;
                        for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + y), n.ieOffsetY = Math.round((g - ((h < 0 ? -h : h) * g + (u < 0 ? -u : u) * m)) / 2 + x), vt = 0; vt < 4; vt++) T = (i = -1 !== (w = f[b = nt[vt]]).indexOf("px") ? parseFloat(w) : K(this.t, b, parseFloat(w), w.replace(R, "")) || 0) !== n[b] ? vt < 2 ? -n.ieOffsetX : -n.ieOffsetY : vt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, c[b] = (n[b] = Math.round(i - T * (0 === vt || 2 === vt ? 1 : S))) + "px"
                    }
                }
            }, zt = r.set3DTransformRatio = function (t) {
                var e, i, n, r, s, o, a, l, u, h, c, f, p, d, m, g, _, v, y, x, w, b, T, S, C, k = this.data,
                    P = this.t.style, A = k.rotation * I, R = k.scaleX, D = k.scaleY, E = k.scaleZ, O = k.x, L = k.y,
                    N = k.z, M = k.perspective;
                if (1 !== t && 0 !== t || "auto" !== k.force3D || k.rotationY || k.rotationX || 1 !== E || M || N) {
                    if (j) {
                        R < 1e-4 && -1e-4 < R && (R = E = 2e-5), D < 1e-4 && -1e-4 < D && (D = E = 2e-5), !M || k.z || k.rotationX || k.rotationY || (M = 0)
                    }
                    if (A || k.skewX) e = v = Math.cos(A), s = y = Math.sin(A), k.skewX && (A -= k.skewX * I, v = Math.cos(A), y = Math.sin(A), "simple" === k.skewType && (x = Math.tan(k.skewX * I), v *= x = Math.sqrt(1 + x * x), y *= x)), i = -y, o = v; else {
                        if (!(k.rotationY || k.rotationX || 1 !== E || M || k.svg)) return void (P[At] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + L + "px," + N + "px)" + (1 !== R || 1 !== D ? " scale(" + R + "," + D + ")" : ""));
                        e = o = 1, i = s = 0
                    }
                    c = 1, n = r = a = l = u = h = f = p = d = 0, m = M ? -1 / M : 0, g = k.zOrigin, _ = 1e5, C = ",", (A = k.rotationY * I) && (v = Math.cos(A), u = c * -(y = Math.sin(A)), p = m * -y, n = e * y, a = s * y, c *= v, m *= v, e *= v, s *= v), (A = k.rotationX * I) && (x = i * (v = Math.cos(A)) + n * (y = Math.sin(A)), w = o * v + a * y, b = h * v + c * y, T = d * v + m * y, n = i * -y + n * v, a = o * -y + a * v, c = h * -y + c * v, m = d * -y + m * v, i = x, o = w, h = b, d = T), 1 !== E && (n *= E, a *= E, c *= E, m *= E), 1 !== D && (i *= D, o *= D, h *= D, d *= D), 1 !== R && (e *= R, s *= R, u *= R, p *= R), g && (r = n * (f -= g), l = a * f, f = c * f + g), k.svg && (r += k.xOrigin - (k.xOrigin * e + k.yOrigin * i), l += k.yOrigin - (k.xOrigin * s + k.yOrigin * o)), r = (x = (r += O) - (r |= 0)) ? (0 | x * _ + (x < 0 ? -.5 : .5)) / _ + r : r, l = (x = (l += L) - (l |= 0)) ? (0 | x * _ + (x < 0 ? -.5 : .5)) / _ + l : l, f = (x = (f += N) - (f |= 0)) ? (0 | x * _ + (x < 0 ? -.5 : .5)) / _ + f : f, S = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", S += (0 | e * _) / _ + C + (0 | s * _) / _ + C + (0 | u * _) / _, S += C + (0 | p * _) / _ + C + (0 | i * _) / _ + C + (0 | o * _) / _, S += C + (0 | h * _) / _ + C + (0 | d * _) / _ + C + (0 | n * _) / _, S += C + (0 | a * _) / _ + C + (0 | c * _) / _ + C + (0 | m * _) / _, S += C + r + C + l + C + f + C + (M ? 1 + -f / M : 1) + ")", P[At] = S
                } else Ht.call(this, t)
            }, Ht = r.set2DTransformRatio = function (t) {
                var e, i, n, r, s, o, a, l, u, h, c = this.data, f = this.t, p = f.style, d = c.x, m = c.y;
                return !(c.rotationX || c.rotationY || c.z || !0 === c.force3D || "auto" === c.force3D && 1 !== t && 0 !== t) || c.svg && bt || !Et ? (r = c.scaleX, s = c.scaleY, void (c.rotation || c.skewX || c.svg ? (i = (e = c.rotation * I) - c.skewX * I, n = 1e5, o = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -s, u = Math.cos(i) * s, c.svg && ((d += c.xOrigin - (c.xOrigin * o + c.yOrigin * l)) < 1e-6 && -1e-6 < d && (d = 0), (m += c.yOrigin - (c.xOrigin * a + c.yOrigin * u)) < 1e-6 && -1e-6 < m && (m = 0)), h = (0 | o * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | u * n) / n + "," + d + "," + m + ")", c.svg && bt ? f.setAttribute("transform", "matrix(" + h) : p[At] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + h) : p[At] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + d + "," + m + ")")) : void (this.setRatio = zt).call(this, t)
            };
        (t = Ot.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = 0, t.scaleX = t.scaleY = t.scaleZ = 1, xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, i, n, r, s, o) {
                if (n._lastParsedTransform === o) return r;
                n._lastParsedTransform = o;
                var a, l, u, h, c, f, p, d = n._transform = Ft(t, U, !0, o.parseTransform), m = t.style, g = Pt.length,
                    _ = o, v = {};
                if ("string" == typeof _.transform && At) (u = M.style)[At] = _.transform, u.display = "block", u.position = "absolute", N.body.appendChild(M), a = Ft(M, null, !1), N.body.removeChild(M); else if ("object" == typeof _) {
                    if (a = {
                        scaleX: at(null != _.scaleX ? _.scaleX : _.scale, d.scaleX),
                        scaleY: at(null != _.scaleY ? _.scaleY : _.scale, d.scaleY),
                        scaleZ: at(_.scaleZ, d.scaleZ),
                        x: at(_.x, d.x),
                        y: at(_.y, d.y),
                        z: at(_.z, d.z),
                        xPercent: at(_.xPercent, d.xPercent),
                        yPercent: at(_.yPercent, d.yPercent),
                        perspective: at(_.transformPerspective, d.perspective)
                    }, null != (p = _.directionalRotation)) if ("object" == typeof p) for (u in p) _[u] = p[u]; else _.rotation = p;
                    "string" == typeof _.x && -1 !== _.x.indexOf("%") && (a.x = 0, a.xPercent = at(_.x, d.xPercent)), "string" == typeof _.y && -1 !== _.y.indexOf("%") && (a.y = 0, a.yPercent = at(_.y, d.yPercent)), a.rotation = lt("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : d.rotation, d.rotation, "rotation", v), Et && (a.rotationX = lt("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", v), a.rotationY = lt("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", v)), a.skewX = null == _.skewX ? d.skewX : lt(_.skewX, d.skewX), a.skewY = null == _.skewY ? d.skewY : lt(_.skewY, d.skewY), (l = a.skewY - d.skewY) && (a.skewX += l, a.rotation += l)
                }
                for (Et && null != _.force3D && (d.force3D = _.force3D, f = !0), d.skewType = _.skewType || d.skewType || Y.defaultSkewType, (c = d.force3D || d.z || d.rotationX || d.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == _.scale || (a.scaleZ = 1); -1 < --g;) (1e-6 < (h = a[i = Pt[g]] - d[i]) || h < -1e-6 || null != _[i] || null != S[i]) && (f = !0, r = new gt(d, i, d[i], h, r), i in v && (r.e = v[i]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                return (h = _.transformOrigin) && d.svg && (It(t, h, a), (r = new gt(d, "xOrigin", d.xOrigin, a.xOrigin - d.xOrigin, r, -1, "transformOrigin")).b = d.xOrigin, r.e = r.xs0 = a.xOrigin, (r = new gt(d, "yOrigin", d.yOrigin, a.yOrigin - d.yOrigin, r, -1, "transformOrigin")).b = d.yOrigin, r.e = r.xs0 = a.yOrigin, h = "0px 0px"), (h || Et && c && d.zOrigin) && (At ? (f = !0, i = Dt, h = (h || Z(t, i, U, !1, "50% 50%")) + "", (r = new gt(m, i, 0, 0, r, -1, "transformOrigin")).b = m[i], r.plugin = s, Et ? (u = d.zOrigin, h = h.split(" "), d.zOrigin = (2 < h.length && (0 === u || "0px" !== h[2]) ? parseFloat(h[2]) : u) || 0, r.xs0 = r.e = h[0] + " " + (h[1] || "50%") + " 0px", (r = new gt(d, "zOrigin", 0, 0, r, -1, r.n)).b = u, r.xs0 = r.e = d.zOrigin) : r.xs0 = r.e = h) : st(h + "", d)), f && (n._transformType = d.svg && bt || !c && 3 !== this._transformType ? 2 : 3), r
            }, prefix: !0
        }), xt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), xt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, n, r) {
                e = this.format(e);
                var s, o, a, l, u, h, c, f, p, d, m, g, _, v, y, x,
                    w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    b = t.style;
                for (p = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), s = e.split(" "), o = 0; w.length > o; o++) this.p.indexOf("border") && (w[o] = G(w[o])), -1 !== (u = l = Z(t, w[o], U, !1, "0px")).indexOf(" ") && (u = (l = u.split(" "))[0], l = l[1]), h = a = s[o], c = parseFloat(u), g = u.substr((c + "").length), (_ = "=" === h.charAt(1)) ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), m = h.substr((f + "").length - (f < 0 ? 1 : 0)) || "") : (f = parseFloat(h), m = h.substr((f + "").length)), "" === m && (m = T[i] || g), m !== g && (v = K(t, "borderLeft", c, g), y = K(t, "borderTop", c, g), "%" === m ? (u = v / p * 100 + "%", l = y / d * 100 + "%") : "em" === m ? (u = v / (x = K(t, "borderLeft", 1, "em")) + "em", l = y / x + "em") : (u = v + "px", l = y + "px"), _ && (h = parseFloat(u) + f + m, a = parseFloat(l) + f + m)), r = _t(b, w[o], u + " " + l, h + " " + a, !1, "0px", r);
                return r
            }, prefix: !0, formatter: pt("0px 0px 0px 0px", !1, !0)
        }), xt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, r, s) {
                var o, a, l, u, h, c, f = "background-position", p = U || Q(t, null),
                    d = this.format((p ? C ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    m = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== m.indexOf("%")) && ((c = Z(t, "backgroundImage").replace(w, "")) && "none" !== c)) {
                    for (o = d.split(" "), a = m.split(" "), F.setAttribute("src", c), l = 2; -1 < --l;) (u = -1 !== (d = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (h = 0 === l ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[l] = u ? parseFloat(d) / 100 * h + "px" : parseFloat(d) / h * 100 + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, m, r, s)
            }, formatter: st
        }), xt("backgroundSize", {defaultValue: "0 0", formatter: st}), xt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), xt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), xt("transformStyle", {prefix: !0}), xt("backfaceVisibility", {prefix: !0}), xt("userSelect", {prefix: !0}), xt("margin", {parser: dt("marginTop,marginRight,marginBottom,marginLeft")}), xt("padding", {parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), xt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, r, s) {
                var o, a, l;
                return C < 9 ? (a = t.currentStyle, l = C < 8 ? " " : ",", o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Z(t, this.p, U, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, s)
            }
        }), xt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), xt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), xt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, r, s) {
                return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", U, !1, "0px") + " " + Z(t, "borderTopStyle", U, !1, "solid") + " " + Z(t, "borderTopColor", U, !1, "#000")), this.format(e), r, s)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0]
            }
        }), xt("borderWidth", {parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), xt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r) {
                var s = t.style, o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new gt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
            }
        });
        var Bt = function (t) {
            var e, i = this.t, n = i.filter || Z(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(o, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(D, "opacity=" + r))
        };
        xt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, r, s) {
                var o = parseFloat(Z(t, "opacity", U, !1, "1")), a = t.style, l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Z(t, "visibility", U) && 0 !== e && (o = 0), z ? r = new gt(a, "opacity", o, e - o, r) : ((r = new gt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = Bt), l && ((r = new gt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
            }
        });
        var Xt = function (t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Wt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Xt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        xt("className", {
            parser: function (t, e, i, n, r, s, o) {
                var a, l, u, h, c, f = t.getAttribute("class") || "", p = t.style.cssText;
                if ((r = n._classNamePT = new gt(t, i, 0, 0, r, 2)).setRatio = Wt, r.pr = -11, d = !0, r.b = f, l = tt(t, U), u = t._gsClassPT) {
                    for (h = {}, c = u.data; c;) h[c.p] = 1, c = c._next;
                    u.setRatio(1)
                }
                return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", r.e), a = et(t, l, tt(t), o, h), t.setAttribute("class", f), r.data = a.firstMPT, t.style.cssText = p, r = r.xfirst = n.parse(t, a.difs, r, s)), r
            }
        });
        var Ut = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s = this.t.style, o = m.transform.parse;
                if ("all" === this.e) r = !(s.cssText = ""); else for (n = (e = this.e.split(" ").join("").split(",")).length; -1 < --n;) i = e[n], m[i] && (m[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Dt : m[i].p), Xt(s, i);
                r && (Xt(s, At), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (xt("clearProps", {
            parser: function (t, e, i, n, r) {
                return (r = new gt(t, i, 0, 0, r, 2)).setRatio = Ut, r.e = e, r.pr = -10, r.data = n._tween, d = !0, r
            }
        }), t = "bezier,throwProps,physicsProps,physics2D".split(","), vt = t.length; vt--;) wt(t[vt]);
        (t = Y.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, i) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = i, this._vars = e, k = e.autoRound, d = !1, T = e.suffixMap || Y.suffixMap, U = Q(t, ""), p = this._overwriteProps;
            var n, r, s, o, a, l, u, h, c, f = t.style;
            if (g && "" === f.zIndex && (("auto" === (n = Z(t, "zIndex", U)) || "" === n) && this._addLazySet(f, "zIndex", 0)), "string" == typeof e && (o = f.cssText, n = tt(t, U), f.cssText = o + ";" + e, n = et(t, n, tt(t)).difs, !z && x.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, f.cssText = o), this._firstPT = r = this.parse(t, e, null), this._transformType) {
                for (c = 3 === this._transformType, At ? _ && (g = !0, "" === f.zIndex && (("auto" === (u = Z(t, "zIndex", U)) || "" === u) && this._addLazySet(f, "zIndex", 0)), v && this._addLazySet(f, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (c ? "visible" : "hidden"))) : f.zoom = 1, s = r; s && s._next;) s = s._next;
                h = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(h, null, s), h.setRatio = c && Et ? zt : At ? Ht : qt, h.data = this._transform || Ft(t, U, !0), p.pop()
            }
            if (d) {
                for (; r;) {
                    for (l = r._next, s = o; s && s.pr > r.pr;) s = s._next;
                    (r._prev = s ? s._prev : a) ? r._prev._next = r : o = r, (r._next = s) ? s._prev = r : a = r, r = l
                }
                this._firstPT = o
            }
            return !0
        }, t.parse = function (t, e, i, n) {
            var r, s, o, a, l, u, h, c, f, p, d = t.style;
            for (r in e) u = e[r], (s = m[r]) ? i = s.parse(t, u, r, this, i, n, e) : (l = Z(t, r, U) + "", f = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || f && E.test(u) ? (f || (u = (3 < (u = ct(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), i = _t(d, r, l, u, !0, "transparent", i, 0, n)) : !f || -1 === u.indexOf(" ") && -1 === u.indexOf(",") ? (h = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "", ("" === l || "auto" === l) && ("width" === r || "height" === r ? (o = rt(t, r, U), h = "px") : "left" === r || "top" === r ? (o = J(t, r, U), h = "px") : (o = "opacity" !== r ? 0 : 1, h = "")), (p = f && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), c = u.replace(R, "")) : (a = parseFloat(u), c = f && u.substr((a + "").length) || ""), "" === c && (c = r in T ? T[r] : h), u = a || 0 === a ? (p ? a + o : a) + c : e[r], h !== c && "" !== c && (a || 0 === a) && o && (o = K(t, r, o, h), "%" === c ? (o /= K(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = o + "%")) : "em" === c ? o /= K(t, r, 1, "em") : "px" !== c && (a = K(t, r, a, c), c = "px"), p && (a || 0 === a) && (u = a + o + c)), p && (a += o), !o && 0 !== o || !a && 0 !== a ? void 0 !== d[r] && (u || "NaN" != u + "" && null != u) ? (i = new gt(d, r, a || o || 0, 0, i, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : B("invalid " + r + " tween value: " + e[r]) : (i = new gt(d, r, o, a - o, i, 0, r, !1 !== k && ("px" === c || "zIndex" === r), 0, l, u)).xs0 = c) : i = _t(d, r, l, u, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, t.setRatio = function (t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type) if (1 === r.type) if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, t._enableTransforms = function (t) {
            this._transform = this._transform || Ft(this._target, U, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Yt = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        t._addLazySet = function (t, e, i) {
            var n = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Yt, n.data = this
        }, t._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, t._kill = function (t) {
            var e, i, n, r = t;
            if (t.autoAlpha || t.alpha) {
                for (i in r = {}, t) r[i] = t[i];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
            }
            return t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), s.prototype._kill.call(this, r)
        };
        var $t = function (t, e, i) {
            var n, r, s, o;
            if (t.slice) for (r = t.length; -1 < --r;) $t(t[r], e, i); else for (r = (n = t.childNodes).length; -1 < --r;) o = (s = n[r]).type, s.style && (e.push(tt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || $t(s, e, i)
        };
        return Y.cascadeTo = function (t, e, i) {
            var n, r, s, o = f.to(t, e, i), a = [o], l = [], u = [], h = [], c = f._internals.reservedProps;
            for (t = o._targets || o.target, $t(t, l, h), o.render(e, !0), $t(t, u), o.render(0, !0), o._enabled(!0), n = h.length; -1 < --n;) if ((r = et(h[n], l[n], u[n])).firstMPT) {
                for (s in r = r.difs, i) c[s] && (r[s] = i[s]);
                a.push(f.to(h[n], e, r))
            }
            return a
        }, s.activate([Y]), Y
    }, !0), (t = _gsScope._gsDefine.plugin({
        propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
            return this._tween = i, !0
        }
    }).prototype)._onInitAllProps = function () {
        for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; -1 < --s;) o[r[s]] = 1;
        for (s = r.length; -1 < --s;) for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
        return !1
    }, t._add = function (t, e, i, n) {
        this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
    }, _gsScope._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.3.3", init: function (t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute) return !1;
            for (i in this._target = t, this._proxy = {}, this._start = {}, this._end = {}, e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
            return !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; -1 < --n;) e = i[n], this._target.setAttribute(e, r[e] + "")
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, n, r, s, o, a = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (i in e) "useRadians" !== i && (n = (o = (e[i] + "").split("_"))[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = (this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - r, o.length && (-1 !== (n = o.join("_")).indexOf("short") && ((s %= a) !== s % (a / 2) && (s = s < 0 ? s + a : s - a)), -1 !== n.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * a) % a - (0 | s / a) * a : -1 !== n.indexOf("ccw") && 0 < s && (s = (s - 9999999999 * a) % a - (0 | s / a) * a)), (1e-6 < s || s < -1e-6) && (this._addTween(t, i, r, r + s, i), this._overwriteProps.push(i)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
        var e, i, t, n = _gsScope.GreenSockGlobals || _gsScope, r = n.com.greensock, s = 2 * Math.PI, o = Math.PI / 2,
            a = r._class, l = function (t, e) {
                var i = a("easing." + t, function () {
                }, !0), n = i.prototype = new g;
                return n.constructor = i, n.getRatio = e, i
            }, u = g.register || function () {
            }, h = function (t, e, i, n) {
                var r = a("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                return u(r, t), r
            }, _ = function (t, e, i) {
                this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
            }, c = function (t, e) {
                var i = a("easing." + t, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), n = i.prototype = new g;
                return n.constructor = i, n.getRatio = e, n.config = function (t) {
                    return new i(t)
                }, i
            }, f = h("Back", c("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), c("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), c("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), p = a("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0), d = p.prototype = new g;
        return d.constructor = p, d.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, p.ease = new p(.7, .7), d.config = p.config = function (t, e, i) {
            return new p(t, e, i)
        }, (d = (e = a("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0)).prototype = new g).constructor = e, d.getRatio = function (t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function (t) {
            return new e(t)
        }, (d = (i = a("easing.RoughEase", function (t) {
            for (var e, i, n, r, s, o, a = (t = t || {}).taper || "none", l = [], u = 0, h = 0 | (t.points || 20), c = h, f = !1 !== t.randomize, p = !0 === t.clamp, d = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; -1 < --c;) e = f ? Math.random() : 1 / h * c, i = d ? d.getRatio(e) : e, "none" === a ? n = m : "out" === a ? n = (r = 1 - e) * r * m : "in" === a ? n = e * e * m : n = .5 * (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * m, f ? i += Math.random() * n - .5 * n : c % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[u++] = {
                x: e,
                y: i
            };
            for (l.sort(function (t, e) {
                return t.x - e.x
            }), o = new _(1, 1, null), c = h; -1 < --c;) s = l[c], o = new _(s.x, s.y, o);
            this._prev = new _(0, 0, 0 !== o.t ? o : o.next)
        }, !0)).prototype = new g).constructor = i, d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;) e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }, d.config = function (t) {
            return new i(t)
        }, i.ease = new i, h("Bounce", l("BounceOut", function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function (t) {
            var e = t < .5;
            return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), h("Elastic", (t = function (t, e, i) {
            var n = a("easing." + t, function (t, e) {
                this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
            }, !0), r = n.prototype = new g;
            return r.constructor = n, r.getRatio = e, r.config = function (t, e) {
                return new n(t, e)
            }, n
        })("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .3), t("ElasticIn", function (t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2)
        }, .3), t("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .45)), h("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", l("SineOut", function (t) {
            return Math.sin(t * o)
        }), l("SineIn", function (t) {
            return 1 - Math.cos(t * o)
        }), l("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), a("easing.EaseLookup", {
            find: function (t) {
                return g.map[t]
            }
        }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (f, t) {
    "use strict";
    var e, i, p = f.GreenSockGlobals = f.GreenSockGlobals || f;
    if (!p.TweenLite) {
        var n, r, s, d, m, g = function (t) {
            var e, i = t.split("."), n = p;
            for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
            return n
        }, c = g("com.greensock"), _ = 1e-10, l = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, v = function () {
        }, y = (e = Object.prototype.toString, i = e.call([]), function (t) {
            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
        }), x = {}, w = function (a, l, u, h) {
            this.sc = x[a] ? x[a].sc : [], (x[a] = this).gsClass = null, this.func = u;
            var c = [];
            this.check = function (t) {
                for (var e, i, n, r, s = l.length, o = s; -1 < --s;) (e = x[l[s]] || new w(l[s], [])).gsClass ? (c[s] = e.gsClass, o--) : t && e.sc.push(this);
                if (0 === o && u) for (n = (i = ("com.greensock." + a).split(".")).pop(), r = g(i.join("."))[n] = this.gsClass = u.apply(u, c), h && (p[n] = r, "function" == typeof define && define.amd ? define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                    return r
                }) : "TweenMax" === a && "undefined" != typeof module && module.exports && (module.exports = r)), s = 0; this.sc.length > s; s++) this.sc[s].check()
            }, this.check(!0)
        }, o = f._gsDefine = function (t, e, i, n) {
            return new w(t, e, i, n)
        }, b = c._class = function (t, e, i) {
            return e = e || function () {
            }, o(t, [], function () {
                return e
            }, i), e
        };
        o.globals = p;
        var a = [0, 0, 1, 1], T = [], h = b("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? a.concat(e) : a
        }, !0), S = h.map = {}, u = h.register = function (t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --u;) for (s = l[u], r = n ? b("easing." + s, null, !0) : c.easing[s] || {}, o = h.length; -1 < --o;) a = h[o], S[s + "." + a] = S[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for ((s = h.prototype)._calcEnd = !1, s.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
        }, r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -1 < --r;) s = n[r] + ",Power" + r, u(new h(null, null, 1, r), s, "easeOut", !0), u(new h(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), u(new h(null, null, 3, r), s, "easeInOut");
        S.linear = c.easing.Linear.easeIn, S.swing = c.easing.Quad.easeInOut;
        var C = b("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (s = C.prototype).addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s, o, a = this._listeners[t], l = 0;
            for (null == a && (this._listeners[t] = a = []), o = a.length; -1 < --o;) (s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && r > s.pr && (l = o + 1);
            a.splice(l, 0, {c: e, s: i, up: n, pr: r}), this !== d || m || d.wake()
        }, s.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; -1 < --i;) if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; -1 < --e;) (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var k = f.requestAnimationFrame, P = f.cancelAnimationFrame, A = Date.now || function () {
            return (new Date).getTime()
        }, R = A();
        for (r = (n = ["ms", "moz", "webkit", "o"]).length; -1 < --r && !k;) k = f[n[r] + "RequestAnimationFrame"], P = f[n[r] + "CancelAnimationFrame"] || f[n[r] + "CancelRequestAnimationFrame"];
        b("Ticker", function (t, e) {
            var r, s, o, a, l, u = this, h = A(), i = !1 !== e && k, c = 500, f = 33, p = function (t) {
                var e, i, n = A() - R;
                c < n && (h += n - f), R += n, u.time = (R - h) / 1e3, e = u.time - l, (!r || 0 < e || !0 === t) && (u.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (o = s(p)), i && u.dispatchEvent("tick")
            };
            C.call(u), u.time = u.frame = 0, u.tick = function () {
                p(!0)
            }, u.lagSmoothing = function (t, e) {
                c = t || 1e10, f = Math.min(e, c, 0)
            }, u.sleep = function () {
                null != o && (i && P ? P(o) : clearTimeout(o), s = v, o = null, u === d && (m = !1))
            }, u.wake = function () {
                null !== o ? u.sleep() : 10 < u.frame && (R = A() - c + 5), s = 0 === r ? v : i && k ? k : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                }, u === d && (m = !0), p(2)
            }, u.fps = function (t) {
                return arguments.length ? (a = 1 / ((r = t) || 60), l = this.time + a, void u.wake()) : r
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), i = t, void u.fps(r)) : i
            }, u.fps(t), setTimeout(function () {
                i && (!o || u.frame < 5) && u.useRAF(!1)
            }, 1500)
        }), (s = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var D = b("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, W) {
                m || d.wake();
                var i = this.vars.useFrames ? X : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        d = D.ticker = new c.Ticker, (s = D.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var E = function () {
            m && 2e3 < A() - R && d.wake(), setTimeout(E, 2e3)
        };
        E(), s.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, s.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, s.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function () {
        }, s.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function (t, e) {
            return m || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function () {
            return this._enabled(!1, !1)
        }, s.kill = function (t, e) {
            return this._kill(t, e), this
        }, s._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); -1 < --e;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function (t, e, i) {
            if (m || d.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), M.length && U())
            }
            return this
        }, s.progress = s.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function (t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                m || t || d.wake();
                var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var O = b("core.SimpleTimeline", function (t) {
            D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (s = O.prototype = new D).constructor = O, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function () {
            return m || d.wake(), this._totalTime
        };
        var L = b("TweenLite", function (t, e, i) {
            if (D.call(this, e, i), this.render = L.prototype.render, null == t) throw"Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : L.selector(t) || t;
            var n, r, s,
                o = t.jquery || t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType),
                a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? B[L.defaultOverwrite] : "number" == typeof a ? a >> 0 : B[a], (o || t instanceof Array || t.push && y(t)) && "number" != typeof t[0]) for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; s.length > n; n++) (r = s[n]) ? "string" != typeof r ? r.length && r !== f && r[0] && (r[0] === f || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l(r))) : (this._siblings[n] = Y(r, this, !1), 1 === a && 1 < this._siblings[n].length && V(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = s[n--] = L.selector(r)) && s.splice(n + 1, 1) : s.splice(n--, 1); else this._propLookup = {}, this._siblings = Y(t, this, !1), 1 === a && 1 < this._siblings.length && V(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(-this._delay))
        }, !0), N = function (t) {
            return t && t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType)
        };
        (s = L.prototype = new D).constructor = L, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, L.version = "1.15.0", L.defaultEase = s._ease = new h(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = d, L.autoSleep = !0, L.lagSmoothing = function (t, e) {
            d.lagSmoothing(t, e)
        }, L.selector = f.$ || f.jQuery || function (t) {
            var e = f.$ || f.jQuery;
            return e ? (L.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var M = [], j = {}, I = L._internals = {isArray: y, isSelector: N, lazyTweens: M}, F = L._plugins = {},
            q = I.tweenLookup = {}, z = 0, H = I.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            }, B = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0},
            X = D._rootFramesTimeline = new O, W = D._rootTimeline = new O, U = I.lazyRender = function () {
                var t, e = M.length;
                for (j = {}; -1 < --e;) (t = M[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                M.length = 0
            };
        W._startTime = d.time, X._startTime = d.frame, W._active = X._active = !0, setTimeout(U, 1), D._updateRoot = L.render = function () {
            var t, e, i;
            if (M.length && U(), W.render((d.time - W._startTime) * W._timeScale, !1, !1), X.render((d.frame - X._startTime) * X._timeScale, !1, !1), M.length && U(), !(d.frame % 120)) {
                for (i in q) {
                    for (t = (e = q[i].tweens).length; -1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete q[i]
                }
                if ((!(i = W._first) || i._paused) && L.autoSleep && !X._first && 1 === d._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || d.sleep()
                }
            }
        }, d.addEventListener("tick", D._updateRoot);
        var Y = function (t, e, i) {
            var n, r, s = t._gsTweenID;
            if (q[s || (t._gsTweenID = s = "t" + z++)] || (q[s] = {
                target: t,
                tweens: []
            }), e && ((n = q[s].tweens)[r = n.length] = e, i)) for (; -1 < --r;) n[r] === e && n.splice(r, 1);
            return q[s].tweens
        }, $ = function (t, e, i, n) {
            var r, s, o = t.vars.onOverwrite;
            return o && (r = o(t, e, i, n)), (o = L.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
        }, V = function (t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || 4 <= n) {
                for (l = r.length, s = 0; s < l; s++) if ((a = r[s]) !== e) a._gc || $(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n) break;
                return o
            }
            var u, h = e._startTime + _, c = [], f = 0, p = 0 === e._duration;
            for (s = r.length; -1 < --s;) (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || G(e, 0, p), 0 === G(a, u, p) && (c[f++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((p || !a._initted) && h - a._startTime <= 2e-10 || (c[f++] = a)));
            for (s = f; -1 < --s;) if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !$(a, e)) continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        }, G = function (t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                n = n._timeline
            }
            return e < (s /= r) ? s - e : i && s === e || !t._initted && s - e < 2 * _ ? _ : (s += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : s - e - _
        };
        s._init = function () {
            var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender,
                u = s.ease;
            if (s.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = L.to(this.target, 0, r), l) if (0 < this._time) this._startAt = null; else if (0 !== a) return
            } else if (s.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                for (n in 0 !== this._time && (l = !1), i = {}, s) H[n] && "autoCSS" !== n || (i[n] = s[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== s.lazy, i.immediateRender = l, this._startAt = L.to(this.target, 0, i), l) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = u = u ? u instanceof h ? u : "function" == typeof u ? new h(u, s.easeParams) : S[u] || L.defaultEase : L.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; -1 < --t;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && L._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function (t, e, i, n) {
            var r, s, o, a, l, u;
            if (null == t) return !1;
            for (r in j[t._gsTweenID] && U(), this.vars.css || t.style && t !== f && t.nodeType && F.css && !1 !== this.vars.autoCSS && function (t, e) {
                var i, n = {};
                for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            }(this.vars, t), this.vars) {
                if (u = this.vars[r], H[r]) u && (u instanceof Array || u.push && y(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this)); else if (F[r] && (a = new F[r])._onInitTween(t, this.vars[r], this)) {
                    for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: a,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: r,
                        pg: !0,
                        pr: a._priority
                    }, s = a._overwriteProps.length; -1 < --s;) e[a._overwriteProps[s]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (o = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = e[r] = l = {
                    _next: this._firstPT,
                    t: t,
                    p: r,
                    f: "function" == typeof t[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, l.s = l.f ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), l.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return n && this._kill(n, t) ? this._initProps(t, e, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && V(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), o)
        }, s.render = function (t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (l <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || u < 0 || u === _ && "isPause" !== this.data) && u !== t && (i = !0, _ < u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : _); else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < u && u !== _) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= u && (u !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : _)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var h = t / l, c = this._easeType, f = this._easePower;
                (1 === c || 3 === c && .5 <= h) && (h = 1 - h), 3 === c && (h *= 2), 1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : t / l < .5 ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || T), 0 === l && this._rawPrevTime === _ && o !== _ && (this._rawPrevTime = 0))
            }
        }, s._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            var n, r, s, o, a, l, u, h, c;
            if (e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e, (y(e) || N(e)) && "number" != typeof e[0]) for (n = e.length; -1 < --n;) this._kill(t, e[n]) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; -1 < --n;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                        for (s in u) a[s] && (c || (c = []), c.push(s));
                        if (!$(this, i, e, c)) return !1
                    }
                    for (s in u) (o = a[s]) && (o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function () {
            return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
        }, s._enabled = function (t, e) {
            if (m || d.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; -1 < --i;) this._siblings[i] = Y(n[i], this, !0); else this._siblings = Y(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, L.to = function (t, e, i) {
            return new L(t, e, i)
        }, L.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i)
        }, L.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new L(t, e, n)
        }, L.delayedCall = function (t, e, i, n, r) {
            return new L(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, L.set = function (t, e) {
            return new L(t, 0, e)
        }, L.getTweensOf = function (t, e) {
            if (null == t) return [];
            var i, n, r, s;
            if (t = "string" != typeof t ? t : L.selector(t) || t, (y(t) || N(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; -1 < --i;) n = n.concat(L.getTweensOf(t[i], e));
                for (i = n.length; -1 < --i;) for (s = n[i], r = i; -1 < --r;) s === n[r] && n.splice(i, 1)
            } else for (i = (n = Y(t).concat()).length; -1 < --i;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, L.killTweensOf = L.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = L.getTweensOf(t, e), r = n.length; -1 < --r;) n[r]._kill(i, t)
        };
        var Q = b("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
        }, !0);
        if (s = Q.prototype, Q.version = "1.10.1", Q.API = 2, s._firstPT = null, s._addTween = function (t, e, i, n, r, s) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: o,
                f: "function" == typeof t[e],
                n: r || e,
                r: s
            }, a._next && (a._next._prev = a), a) : void 0
        }, s.setRatio = function (t) {
            for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, s._kill = function (t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; -1 < --e;) null != t[i[e]] && i.splice(e, 1);
            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, s._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, L._onPluginEvent = function (t, e) {
            var i, n, r, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                }
                a = e._firstPT = r
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, Q.activate = function (t) {
            for (var e = t.length; -1 < --e;) t[e].API === Q.API && (F[(new t[e])._propName] = t[e]);
            return !0
        }, o.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                Q.call(this, i, n), this._overwriteProps = r || []
            }, !0 === t.global), a = o.prototype = new Q(i);
            for (e in (a.constructor = o).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, Q.activate([o]), o
        }, n = f._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (s in x) x[s].func || f.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        m = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";

    function c(t, e, i, n, r, s) {
        return i = (parseFloat(i || 0) - parseFloat(t || 0)) * r, n = (parseFloat(n || 0) - parseFloat(e || 0)) * s, Math.sqrt(i * i + n * n)
    }

    function f(t) {
        return "string" != typeof t && t.nodeType || (t = _gsScope.TweenLite.selector(t)).length && (t = t[0]), t
    }

    function m(t) {
        if (!t) return 0;
        var e, i, n, r, s, o, a, l = (t = f(t)).tagName.toLowerCase(), u = 1, h = 1;
        "non-scaling-stroke" === t.getAttribute("vector-effect") && (u = (h = t.getScreenCTM()).a, h = h.d);
        try {
            i = t.getBBox()
        } catch (t) {
            console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none).")
        }
        if (i && (i.width || i.height) || "rect" !== l && "circle" !== l && "ellipse" !== l || (i = {
            width: parseFloat(t.getAttribute("rect" === l ? "width" : "circle" === l ? "r" : "rx")),
            height: parseFloat(t.getAttribute("rect" === l ? "height" : "circle" === l ? "r" : "ry"))
        }, "rect" !== l && (i.width *= 2, i.height *= 2)), "path" === l) r = t.style.strokeDasharray, t.style.strokeDasharray = "none", e = t.getTotalLength() || 0, u !== h && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (u + h) / 2, t.style.strokeDasharray = r; else if ("rect" === l) e = 2 * i.width * u + 2 * i.height * h; else if ("line" === l) e = c(i.x, i.y, i.x + i.width, i.y + i.height, u, h); else if ("polyline" === l || "polygon" === l) for (n = t.getAttribute("points").match(p) || [], "polygon" === l && n.push(n[0], n[1]), e = 0, s = 2; s < n.length; s += 2) e += c(n[s - 2], n[s - 1], n[s], n[s + 1], u, h) || 0; else ("circle" === l || "ellipse" === l) && (o = i.width / 2 * u, a = i.height / 2 * h, e = Math.PI * (3 * (o + a) - Math.sqrt((3 * o + a) * (o + 3 * a))));
        return e || 0
    }

    function g(t, e) {
        if (!t) return [0, 0];
        t = f(t), e = e || m(t) + 1;
        var i = _(t), n = i.strokeDasharray || "", r = parseFloat(i.strokeDashoffset), s = n.indexOf(",");
        return s < 0 && (s = n.indexOf(" ")), e < (n = s < 0 ? e : parseFloat(n.substr(0, s)) || 1e-5) && (n = e), [Math.max(0, -r), Math.max(0, n - r)]
    }

    var t, e = _gsScope.document, _ = e.defaultView ? e.defaultView.getComputedStyle : function () {
        }, p = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        v = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge");
    (t = _gsScope._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.1.5",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function (t, e, i, n) {
            if (!t.getBBox) return !1;
            var r, s, o, a, l, u, h, c, f, p, d = m(t) + 1;
            return this._style = t.style, "function" == typeof e && (e = e(n, t)), !0 === e || "true" === e ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", r = g(t, d), l = e, u = d, h = r[0], -1 === (p = l.indexOf(" ")) ? (c = void 0 !== h ? h + "" : l, f = l) : (c = l.substr(0, p), f = l.substr(p + 1)), c = -1 !== c.indexOf("%") ? parseFloat(c) / 100 * u : parseFloat(c), s = (f = -1 !== f.indexOf("%") ? parseFloat(f) / 100 * u : parseFloat(f)) < c ? [f, c] : [c, f], this._length = d + 10, 0 === r[0] && 0 === s[0] ? (o = Math.max(1e-5, s[1] - d), this._dash = d + o, this._offset = d - r[1] + o, this._addTween(this, "_offset", this._offset, d - s[1] + o, "drawSVG")) : (this._dash = r[1] - r[0] || 1e-6, this._offset = -r[0], this._addTween(this, "_dash", this._dash, s[1] - s[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -s[0], "drawSVG")), v && ("butt" !== (s = (a = _(t)).strokeLinecap) && s !== a.strokeLinejoin && (s = parseFloat(a.strokeMiterlimit), this._addTween(t.style, "strokeMiterlimit", s, s + 1e-4, "strokeMiterlimit"))), !0
        },
        set: function (t) {
            this._firstPT && (this._super.setRatio.call(this, t), this._style.strokeDashoffset = this._offset, this._style.strokeDasharray = 1 === t || 0 === t ? this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px")
        }
    })).getLength = m, t.getPosition = g
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope).DrawSVGPlugin
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function (_) {
        var m = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            v = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, y = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, g = /[cLlsS]/g,
            x = "CustomEase only accepts Cubic Bezier data.", A = function (t, e, i, n, r, s, o, a, l, u, h) {
                var c, f = (t + i) / 2, p = (e + n) / 2, d = (i + r) / 2, m = (n + s) / 2, g = (r + o) / 2, _ = (s + a) / 2,
                    v = (f + d) / 2, y = (p + m) / 2, x = (d + g) / 2, w = (m + _) / 2, b = (v + x) / 2, T = (y + w) / 2,
                    S = o - t, C = a - e, k = Math.abs((i - o) * C - (n - a) * S), P = Math.abs((r - o) * C - (s - a) * S);
                return u || (u = [{x: t, y: e}, {x: o, y: a}], h = 1), u.splice(h || u.length - 1, 0, {
                    x: b,
                    y: T
                }), l * (S * S + C * C) < (k + P) * (k + P) && (c = u.length, A(t, e, f, p, v, y, b, T, l, u, h), A(b, T, x, w, g, _, o, a, l, u, h + 1 + (u.length - c))), u
            }, n = function (t) {
                var e = this.lookup[t * this.l | 0] || this.lookup[this.l - 1];
                return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
            }, r = function (t, e, i) {
                this._calcEnd = !0, (this.id = t) && (_.map[t] = this), this.getRatio = n, this.setData(e, i)
            }, t = r.prototype = new _;
        return t.constructor = r, t.setData = function (t, e) {
            var i, n, r, s, o, a, l, u, h, c, f = (t = t || "0,0,1,1").match(m), p = 1, d = [];
            if (c = (e = e || {}).precision || 1, this.data = t, this.lookup = [], this.points = d, this.fast = c <= 1, (g.test(t) || -1 !== t.indexOf("M") && -1 === t.indexOf("C")) && (f = function (t) {
                var e, i, n, r, s, o, a, l, u, h, c, f = (t + "").replace(y, function (t) {
                    var e = +t;
                    return e < 1e-4 && -1e-4 < e ? 0 : e
                }).match(v) || [], p = [], d = 0, m = 0, g = f.length, _ = 2;
                for (e = 0; e < g; e++) if (u = r, isNaN(f[e]) ? s = (r = f[e].toUpperCase()) !== f[e] : e--, i = +f[e + 1], n = +f[e + 2], s && (i += d, n += m), e || (a = i, l = n), "M" === r) o && o.length < 8 && (p.length -= 1, _ = 0), d = a = i, m = l = n, o = [i, n], _ = 2, p.push(o), e += 2, r = "L"; else if ("C" === r) o || (o = [0, 0]), o[_++] = i, o[_++] = n, s || (d = m = 0), o[_++] = d + 1 * f[e + 3], o[_++] = m + 1 * f[e + 4], o[_++] = d += 1 * f[e + 5], o[_++] = m += 1 * f[e + 6], e += 6; else if ("S" === r) "C" === u || "S" === u ? (h = d - o[_ - 4], c = m - o[_ - 3], o[_++] = d + h, o[_++] = m + c) : (o[_++] = d, o[_++] = m), o[_++] = i, o[_++] = n, s || (d = m = 0), o[_++] = d += 1 * f[e + 3], o[_++] = m += 1 * f[e + 4], e += 4; else {
                    if ("L" !== r && "Z" !== r) throw x;
                    "Z" === r && (i = a, n = l, o.closed = !0), ("L" === r || .5 < Math.abs(d - i) || .5 < Math.abs(m - n)) && (o[_++] = d + (i - d) / 3, o[_++] = m + (n - m) / 3, o[_++] = d + 2 * (i - d) / 3, o[_++] = m + 2 * (n - m) / 3, o[_++] = i, o[_++] = n, "L" === r && (e += 2)), d = i, m = n
                }
                return p[0]
            }(t)), 4 === (i = f.length)) f.unshift(0, 0), f.push(1, 1), i = 8; else if ((i - 2) % 6) throw x;
            for (0 == +f[0] && 1 == +f[i - 2] || function (t, e, i) {
                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                var n, r = -1 * +t[0], s = -i, o = t.length, a = 1 / (+t[o - 2] + r),
                    l = -e || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? function (t) {
                        var e, i = t.length, n = 999999999999;
                        for (e = 1; e < i; e += 6) +t[e] < n && (n = +t[e]);
                        return n
                    }(t) + s : +t[o - 1] + s);
                for (l = l ? 1 / l : -a, n = 0; n < o; n += 2) t[n] = (+t[n] + r) * a, t[n + 1] = (+t[n + 1] + s) * l
            }(f, e.height, e.originY), this.rawBezier = f, s = 2; s < i; s += 6) n = {
                x: +f[s - 2],
                y: +f[s - 1]
            }, r = {
                x: +f[s + 4],
                y: +f[s + 5]
            }, d.push(n, r), A(n.x, n.y, +f[s], +f[s + 1], +f[s + 2], +f[s + 3], r.x, r.y, 1 / (2e5 * c), d, d.length - 1);
            for (i = d.length, s = 0; s < i; s++) l = d[s], u = d[s - 1] || l, l.x > u.x || u.y !== l.y && u.x === l.x || l === u ? (u.cx = l.x - u.x, u.cy = l.y - u.y, u.n = l, u.nx = l.x, this.fast && 1 < s && 2 < Math.abs(u.cy / u.cx - d[s - 2].cy / d[s - 2].cx) && (this.fast = !1), u.cx < p && (u.cx ? p = u.cx : (u.cx = .001, s === i - 1 && (u.x -= .001, p = Math.min(p, .001), this.fast = !1)))) : (d.splice(s--, 1), i--);
            if (i = 1 / p + 1 | 0, o = 1 / (this.l = i), l = d[a = 0], this.fast) {
                for (s = 0; s < i; s++) h = s * o, l.nx < h && (l = d[++a]), n = l.y + (h - l.x) / l.cx * l.cy, this.lookup[s] = {
                    x: h,
                    cx: o,
                    y: n,
                    cy: 0,
                    nx: 9
                }, s && (this.lookup[s - 1].cy = n - this.lookup[s - 1].y);
                this.lookup[i - 1].cy = d[d.length - 1].y - n
            } else {
                for (s = 0; s < i; s++) l.nx < s * o && (l = d[++a]), this.lookup[s] = l;
                a < d.length - 1 && (this.lookup[s - 1] = d[d.length - 2])
            }
            return this._calcEnd = 1 !== d[d.length - 1].y || 0 !== d[0].y, this
        }, t.getRatio = n, t.getSVGData = function (t) {
            return r.getSVGData(this, t)
        }, r.create = function (t, e, i) {
            return new r(t, e, i)
        }, r.version = "0.2.2", r.bezierToPoints = A, r.get = function (t) {
            return _.map[t]
        }, r.getSVGData = function (t, e) {
            var i, n, r, s, o, a, l, u, h, c, f = (e = e || {}).width || 100, p = e.height || 100, d = e.x || 0,
                m = (e.y || 0) + p, g = e.path;
            if (e.invert && (p = -p, m = 0), (t = t.getRatio ? t : _.map[t] || console.log("No ease found: ", t)).rawBezier) {
                for (i = [], l = t.rawBezier.length, r = 0; r < l; r += 2) i.push((1e3 * (d + t.rawBezier[r] * f) | 0) / 1e3 + "," + (1e3 * (m + t.rawBezier[r + 1] * -p) | 0) / 1e3);
                i[0] = "M" + i[0], i[1] = "C" + i[1]
            } else for (i = ["M" + d + "," + m], s = 1 / (l = Math.max(5, 200 * (e.precision || 1))), u = 5 / (l += 2), h = (1e3 * (d + s * f) | 0) / 1e3, n = ((c = (1e3 * (m + t.getRatio(s) * -p) | 0) / 1e3) - m) / (h - d), r = 2; r < l; r++) o = (1e3 * (d + r * s * f) | 0) / 1e3, a = (1e3 * (m + t.getRatio(r * s) * -p) | 0) / 1e3, (Math.abs((a - c) / (o - h) - n) > u || r === l - 1) && (i.push(h + "," + c), n = (a - c) / (o - h)), h = o, c = a;
            return g && ("string" == typeof g ? document.querySelector(g) : g).setAttribute("d", i.join(" ")), i.join(" ")
        }, r
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
    };
    "undefined" != typeof module && module.exports ? (require("gsap/TweenLite"), module.exports = e()) : "function" == typeof define && define.amd && define(["gsap/TweenLite"], e)
}(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var a = (_gsScope.document || {}).documentElement, l = _gsScope, o = function (t, e) {
        var i = "x" === e ? "Width" : "Height", n = "scroll" + i, r = "client" + i, s = document.body;
        return t === l || t === a || t === s ? Math.max(a[n], s[n]) - (l["inner" + i] || a[r] || s[r]) : t[n] - t["offset" + i]
    }, u = function (t, e) {
        var i = "scroll" + ("x" === e ? "Left" : "Top");
        return t === l && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != a[i] ? a : document.body), function () {
            return t[i]
        }
    }, r = function (t, e) {
        var i,
            n = (i = t, "string" == typeof i && (i = TweenLite.selector(i)), i.length && i !== l && i[0] && i[0].style && !i.nodeType && (i = i[0]), i === l || i.nodeType && i.style ? i : null).getBoundingClientRect(),
            r = !e || e === l || e === document.body, s = (r ? a : e).getBoundingClientRect(),
            o = {x: n.left - s.left, y: n.top - s.top};
        return !r && e && (o.x += u(e, "x")(), o.y += u(e, "y")()), o
    }, n = function (t, e, i) {
        var n = typeof t;
        return isNaN(t) ? "number" === n || "string" === n && "=" === t.charAt(1) ? t : "max" === t ? o(e, i) : Math.min(o(e, i), r(t, e)[i]) : parseFloat(t)
    }, h = _gsScope._gsDefine.plugin({
        propName: "scrollTo", API: 2, global: !0, version: "1.9.0", init: function (t, e, i) {
            return this._wdw = t === l, this._target = t, this._tween = i, "object" != typeof e ? "string" == typeof (e = {y: e}).y && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                y: e,
                x: e
            }), this.vars = e, this._autoKill = !1 !== e.autoKill, this.getX = u(t, "x"), this.getY = u(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, n(e.x, t, "x") - (e.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, n(e.y, t, "y") - (e.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                i = this._wdw || !this.skipY ? this.getY() : this.yPrev, n = i - this.yPrev, r = e - this.xPrev,
                s = h.autoKillThreshold;
            this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (s < r || r < -s) && e < o(this._target, "x") && (this.skipX = !0), !this.skipY && (s < n || n < -s) && i < o(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? l.scrollTo(this.skipX ? e : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
        }
    }), t = h.prototype;
    h.max = o, h.getOffset = r, h.buildGetter = u, h.autoKillThreshold = 7, t._kill = function (t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}(), function () {
    function n(t, e, i) {
        return t.call.apply(t.bind, arguments)
    }

    function r(e, i, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function () {
                var t = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(t, n), e.apply(i, t)
            }
        }
        return function () {
            return e.apply(i, arguments)
        }
    }

    function d(t, e, i) {
        return (d = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : r).apply(null, arguments)
    }

    function l(t, e, i, n) {
        if (e = t.c.createElement(e), i) for (var r in i) i.hasOwnProperty(r) && ("style" == r ? e.style.cssText = i[r] : e.setAttribute(r, i[r]));
        return n && e.appendChild(t.c.createTextNode(n)), e
    }

    function u(t, e, i) {
        (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(i, t.lastChild)
    }

    function i(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function m(t, e, i) {
        e = e || [], i = i || [];
        for (var n = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
            for (var s = !1, o = 0; o < n.length; o += 1) if (e[r] === n[o]) {
                s = !0;
                break
            }
            s || n.push(e[r])
        }
        for (e = [], r = 0; r < n.length; r += 1) {
            for (s = !1, o = 0; o < i.length; o += 1) if (n[r] === i[o]) {
                s = !0;
                break
            }
            s || e.push(n[r])
        }
        t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function s(t, e) {
        for (var i = t.className.split(/\s+/), n = 0, r = i.length; n < r; n++) if (i[n] == e) return !0;
        return !1
    }

    function h(t, e, i) {
        function n() {
            a && r && s && (a(o), a = null)
        }

        e = l(t, "link", {rel: "stylesheet", href: e, media: "all"});
        var r = !1, s = !0, o = null, a = i || null;
        z ? (e.onload = function () {
            r = !0, n()
        }, e.onerror = function () {
            r = !0, o = Error("Stylesheet failed to load"), n()
        }) : setTimeout(function () {
            r = !0, n()
        }, 0), u(t, "head", e)
    }

    function c(t, e, i, n) {
        var r = t.c.getElementsByTagName("head")[0];
        if (r) {
            var s = l(t, "script", {src: e}), o = !1;
            return s.onload = s.onreadystatechange = function () {
                o || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o = !0, i && i(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && r.removeChild(s))
            }, r.appendChild(s), setTimeout(function () {
                o || (o = !0, i && i(Error("Script load timeout")))
            }, n || 5e3), s
        }
        return null
    }

    function f() {
        this.a = 0, this.c = null
    }

    function p(t) {
        return t.a++, function () {
            t.a--, o(t)
        }
    }

    function g(t, e) {
        t.c = e, o(t)
    }

    function o(t) {
        0 == t.a && t.c && (t.c(), t.c = null)
    }

    function a(t) {
        this.a = t || "-"
    }

    function _(t, e) {
        this.c = t, this.f = 4, this.a = "n";
        var i = (e || "n4").match(/^([nio])([1-9])$/i);
        i && (this.a = i[1], this.f = parseInt(i[2], 10))
    }

    function v(t) {
        var e = [];
        t = t.split(/,\s*/);
        for (var i = 0; i < t.length; i++) {
            var n = t[i].replace(/['"]/g, "");
            -1 != n.indexOf(" ") || /^\d/.test(n) ? e.push("'" + n + "'") : e.push(n)
        }
        return e.join(",")
    }

    function y(t) {
        return t.a + t.f
    }

    function x(t) {
        var e = "normal";
        return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
    }

    function w(t) {
        if (t.g) {
            var e = s(t.f, t.a.c("wf", "active")), i = [], n = [t.a.c("wf", "loading")];
            e || i.push(t.a.c("wf", "inactive")), m(t.f, i, n)
        }
        b(t, "inactive")
    }

    function b(t, e, i) {
        t.j && t.h[e] && (i ? t.h[e](i.c, y(i)) : t.h[e]())
    }

    function T(t, e) {
        this.c = t, this.f = e, this.a = l(this.c, "span", {"aria-hidden": "true"}, this.f)
    }

    function S(t) {
        u(t.c, "body", t.a)
    }

    function C(t) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + v(t.c) + ";font-style:" + x(t) + ";font-weight:" + t.f + "00;"
    }

    function k(t, e, i, n, r, s) {
        this.g = t, this.j = e, this.a = n, this.c = i, this.f = r || 3e3, this.h = s || void 0
    }

    function P(t, e, i, n, r, s, o) {
        this.v = t, this.B = e, this.c = i, this.a = n, this.s = o || "BESbswy", this.f = {}, this.w = r || 3e3, this.u = s || null, this.m = this.j = this.h = this.g = null, this.g = new T(this.c, this.s), this.h = new T(this.c, this.s), this.j = new T(this.c, this.s), this.m = new T(this.c, this.s), t = C(t = new _(this.a.c + ",serif", y(this.a))), this.g.a.style.cssText = t, t = C(t = new _(this.a.c + ",sans-serif", y(this.a))), this.h.a.style.cssText = t, t = C(t = new _("serif", y(this.a))), this.j.a.style.cssText = t, t = C(t = new _("sans-serif", y(this.a))), this.m.a.style.cssText = t, S(this.g), S(this.h), S(this.j), S(this.m)
    }

    function A() {
        if (null === B) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            B = !!t && (parseInt(t[1], 10) < 536 || 536 === parseInt(t[1], 10) && parseInt(t[2], 10) <= 11)
        }
        return B
    }

    function R(t, e, i) {
        for (var n in H) if (H.hasOwnProperty(n) && e === t.f[H[n]] && i === t.f[H[n]]) return !0;
        return !1
    }

    function D(t) {
        var e, i = t.g.a.offsetWidth, n = t.h.a.offsetWidth;
        (e = i === t.f.serif && n === t.f["sans-serif"]) || (e = A() && R(t, i, n)), e ? q() - t.A >= t.w ? A() && R(t, i, n) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? E(t, t.v) : E(t, t.B) : setTimeout(d(function () {
            D(this)
        }, t), 50) : E(t, t.v)
    }

    function E(t, e) {
        setTimeout(d(function () {
            i(this.g.a), i(this.h.a), i(this.j.a), i(this.m.a), e(this.a)
        }, t), 0)
    }

    function O(t, e, i) {
        this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = i
    }

    function L(t) {
        0 == --t.f && t.j && (t.m ? ((t = t.a).g && m(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), b(t, "active")) : w(t.a))
    }

    function t(t) {
        this.j = t, this.a = new function () {
            this.c = {}
        }, this.h = 0, this.f = this.g = !0
    }

    function e(r, t, e) {
        var i, n = [], s = e.timeout;
        (i = t).g && m(i.f, [i.a.c("wf", "loading")]), b(i, "loading");
        n = function (t, e, i) {
            var n, r = [];
            for (n in e) if (e.hasOwnProperty(n)) {
                var s = t.c[n];
                s && r.push(s(e[n], i))
            }
            return r
        }(r.a, e, r.c);
        var o = new O(r.c, t, s);
        for (r.h = n.length, t = 0, e = n.length; t < e; t++) n[t].load(function (t, e, i) {
            var n, u, h, c, f, p;
            u = o, h = t, c = e, f = i, p = 0 == --(n = r).h, (n.f || n.g) && setTimeout(function () {
                var t = f || null, e = c || {};
                if (0 === h.length && p) w(u.a); else {
                    u.f += h.length, p && (u.j = p);
                    var i, n = [];
                    for (i = 0; i < h.length; i++) {
                        var r = h[i], s = e[r.c], o = u.a, a = r;
                        if (o.g && m(o.f, [o.a.c("wf", a.c, y(a).toString(), "loading")]), b(o, "fontloading", a), (o = null) === X) if (window.FontFace) {
                            a = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                            var l = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                            X = a ? 42 < parseInt(a[1], 10) : !l
                        } else X = !1;
                        o = X ? new k(d(u.g, u), d(u.h, u), u.c, r, u.s, s) : new P(d(u.g, u), d(u.h, u), u.c, r, u.s, t, s), n.push(o)
                    }
                    for (i = 0; i < n.length; i++) n[i].start()
                }
            }, 0)
        })
    }

    function N(t, e) {
        this.c = t, this.a = e
    }

    function M(t, e) {
        this.c = t, this.a = e
    }

    function j(t, e) {
        this.c = t, this.a = e
    }

    function I(t, e) {
        this.c = t, this.a = e
    }

    function F(t, e) {
        this.c = t, this.f = e, this.a = []
    }

    var q = Date.now || function () {
        return +new Date
    }, z = !!window.FontFace;
    a.prototype.c = function (t) {
        for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
        return e.join(this.a)
    }, k.prototype.start = function () {
        var r = this.c.o.document, s = this, o = q(), t = new Promise(function (i, n) {
            !function e() {
                var t;
                q() - o >= s.f ? n() : r.fonts.load((t = s.a, x(t) + " " + t.f + "00 300px " + v(t.c)), s.h).then(function (t) {
                    1 <= t.length ? i() : setTimeout(e, 25)
                }, function () {
                    n()
                })
            }()
        }), i = null, e = new Promise(function (t, e) {
            i = setTimeout(e, s.f)
        });
        Promise.race([e, t]).then(function () {
            i && (clearTimeout(i), i = null), s.g(s.a)
        }, function () {
            s.j(s.a)
        })
    };
    var H = {D: "serif", C: "sans-serif"}, B = null;
    P.prototype.start = function () {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = q(), D(this)
    };
    var X = null;
    O.prototype.g = function (t) {
        var e = this.a;
        e.g && m(e.f, [e.a.c("wf", t.c, y(t).toString(), "active")], [e.a.c("wf", t.c, y(t).toString(), "loading"), e.a.c("wf", t.c, y(t).toString(), "inactive")]), b(e, "fontactive", t), this.m = !0, L(this)
    }, O.prototype.h = function (t) {
        var e = this.a;
        if (e.g) {
            var i = s(e.f, e.a.c("wf", t.c, y(t).toString(), "active")), n = [],
                r = [e.a.c("wf", t.c, y(t).toString(), "loading")];
            i || n.push(e.a.c("wf", t.c, y(t).toString(), "inactive")), m(e.f, n, r)
        }
        b(e, "fontinactive", t), L(this)
    }, t.prototype.load = function (t) {
        this.c = new function (t, e) {
            this.a = t, this.o = e || t, this.c = this.o.document
        }(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes, e(this, new function (t, e) {
            this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new a("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
        }(this.c, t), t)
    }, N.prototype.load = function (o) {
        var e = this, a = e.a.projectId, t = e.a.version;
        if (a) {
            var l = e.c.o;
            c(this.c, (e.a.api || "https://fast.fonts.net/jsapi") + "/" + a + ".js" + (t ? "?v=" + t : ""), function (t) {
                t ? o([]) : (l["__MonotypeConfiguration__" + a] = function () {
                    return e.a
                }, function t() {
                    if (l["__mti_fntLst" + a]) {
                        var e, i = l["__mti_fntLst" + a](), n = [];
                        if (i) for (var r = 0; r < i.length; r++) {
                            var s = i[r].fontfamily;
                            null != i[r].fontStyle && null != i[r].fontWeight ? (e = i[r].fontStyle + i[r].fontWeight, n.push(new _(s, e))) : n.push(new _(s))
                        }
                        o(n)
                    } else setTimeout(function () {
                        t()
                    }, 50)
                }())
            }).id = "__MonotypeAPIScript__" + a
        } else o([])
    }, M.prototype.load = function (t) {
        var e, i, n = this.a.urls || [], r = this.a.families || [], s = this.a.testStrings || {}, o = new f;
        for (e = 0, i = n.length; e < i; e++) h(this.c, n[e], p(o));
        var a = [];
        for (e = 0, i = r.length; e < i; e++) if ((n = r[e].split(":"))[1]) for (var l = n[1].split(","), u = 0; u < l.length; u += 1) a.push(new _(n[0], l[u])); else a.push(new _(n[0]));
        g(o, function () {
            t(a, s)
        })
    };
    var W = "https://fonts.googleapis.com/css", U = {
            latin: "BESbswy",
            "latin-ext": "ﾃｧﾃｶﾃｼﾄ淒�",
            cyrillic: "ﾐｹﾑ紹�",
            greek: "ﾎｱﾎｲﾎ｣",
            khmer: "癰癰≪桙",
            Hanuman: "癰癰≪桙"
        }, Y = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        }, $ = {i: "i", italic: "i", n: "n", normal: "n"},
        V = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        G = {Arimo: !0, Cousine: !0, Tinos: !0};
    j.prototype.load = function (t) {
        var e = new f, i = this.c, n = new function (t, e) {
            this.c = t || W, this.a = [], this.f = [], this.g = e || ""
        }(this.a.api, this.a.text), r = this.a.families;
        !function (t, e) {
            for (var i = e.length, n = 0; n < i; n++) {
                var r = e[n].split(":");
                3 == r.length && t.f.push(r.pop());
                var s = "";
                2 == r.length && "" != r[1] && (s = ":"), t.a.push(r.join(s))
            }
        }(n, r);
        var s = new function (t) {
            this.f = t, this.a = [], this.c = {}
        }(r);
        !function (t) {
            for (var e = t.f.length, i = 0; i < e; i++) {
                var n = t.f[i].split(":"), r = n[0].replace(/\+/g, " "), s = ["n4"];
                if (2 <= n.length) {
                    var o;
                    if (o = [], a = n[1]) for (var a, l = (a = a.split(",")).length, u = 0; u < l; u++) {
                        var h;
                        if ((h = a[u]).match(/^[\w-]+$/)) if (null == (f = V.exec(h.toLowerCase()))) h = ""; else {
                            if (h = null == (h = f[2]) || "" == h ? "n" : $[h], null == (f = f[1]) || "" == f) f = "4"; else var c = Y[f],
                                f = c || (isNaN(f) ? "4" : f.substr(0, 1));
                            h = [h, f].join("")
                        } else h = "";
                        h && o.push(h)
                    }
                    0 < o.length && (s = o), 3 == n.length && (o = [], 0 < (n = (n = n[2]) ? n.split(",") : o).length && (n = U[n[0]]) && (t.c[r] = n))
                }
                for (t.c[r] || (n = U[r]) && (t.c[r] = n), n = 0; n < s.length; n += 1) t.a.push(new _(r, s[n]))
            }
        }(s), h(i, function (t) {
            if (0 == t.a.length) throw Error("No fonts to load!");
            if (-1 != t.c.indexOf("kit=")) return t.c;
            for (var e = t.a.length, i = [], n = 0; n < e; n++) i.push(t.a[n].replace(/ /g, "+"));
            return e = t.c + "?family=" + i.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
        }(n), p(e)), g(e, function () {
            t(s.a, s.c, G)
        })
    }, I.prototype.load = function (o) {
        var t = this.a.id, a = this.c.o;
        t ? c(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
            if (t) o([]); else if (a.Typekit && a.Typekit.config && a.Typekit.config.fn) {
                t = a.Typekit.config.fn;
                for (var e = [], i = 0; i < t.length; i += 2) for (var n = t[i], r = t[i + 1], s = 0; s < r.length; s++) e.push(new _(n, r[s]));
                try {
                    a.Typekit.load({events: !1, classes: !1, async: !0})
                } catch (t) {
                }
                o(e)
            }
        }, 2e3) : o([])
    }, F.prototype.load = function (u) {
        var t, e = this.f.id, i = this.c.o, h = this;
        e ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}), i.__webfontfontdeckmodule__[e] = function (t, e) {
            for (var i = 0, n = e.fonts.length; i < n; ++i) {
                var r = e.fonts[i];
                h.a.push(new _(r.name, (s = "font-weight:" + r.weight + ";font-style:" + r.style, l = a = o = void 0, o = 4, a = "n", l = null, s && ((l = s.match(/(normal|oblique|italic)/i)) && l[1] && (a = l[1].substr(0, 1).toLowerCase()), (l = s.match(/([1-9]00|normal|bold)/i)) && l[1] && (/bold/i.test(l[1]) ? o = 7 : /[1-9]00/.test(l[1]) && (o = parseInt(l[1].substr(0, 1), 10)))), a + o)))
            }
            var s, o, a, l;
            u(h.a)
        }, c(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ((t = this.c).o.location.hostname || t.a.location.hostname) + "/" + e + ".js", function (t) {
            t && u([])
        })) : u([])
    };
    var Q = new t(window);
    Q.a.c.custom = function (t, e) {
        return new M(e, t)
    }, Q.a.c.fontdeck = function (t, e) {
        return new F(e, t)
    }, Q.a.c.monotype = function (t, e) {
        return new N(e, t)
    }, Q.a.c.typekit = function (t, e) {
        return new I(e, t)
    }, Q.a.c.google = function (t, e) {
        return new j(e, t)
    };
    var Z = {load: d(Q.load, Q)};
    "function" == typeof define && define.amd ? define(function () {
        return Z
    }) : "undefined" != typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Q.load(window.WebFontConfig))
}(), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
}(this, function () {
    return function (i) {
        function n(t) {
            if (r[t]) return r[t].exports;
            var e = r[t] = {exports: {}, id: t, loaded: !1};
            return i[t].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports
        }

        var r = {};
        return n.m = i, n.c = r, n.p = "http://localhost:8080/dist", n(0)
    }([function (t, e, i) {
        "function" != typeof Promise && (window.Promise = i(1));
        var n = {
            version: "1.0.0",
            BaseTransition: i(4),
            BaseView: i(6),
            BaseCache: i(8),
            Dispatcher: i(7),
            HistoryManager: i(9),
            Pjax: i(10),
            Prefetch: i(13),
            Utils: i(5)
        };
        t.exports = n
    }, function (f, t, e) {
        (function (i) {
            !function (t) {
                function n() {
                }

                function s(t) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this)
                }

                function r(i, n) {
                    for (; 3 === i._state;) i = i._value;
                    return 0 === i._state ? void i._deferreds.push(n) : (i._handled = !0, void h(function () {
                        var t = 1 === i._state ? n.onFulfilled : n.onRejected;
                        if (null !== t) {
                            var e;
                            try {
                                e = t(i._value)
                            } catch (t) {
                                return void a(n.promise, t)
                            }
                            o(n.promise, e)
                        } else (1 === i._state ? o : a)(n.promise, i._value)
                    }))
                }

                function o(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var i = e.then;
                            if (e instanceof s) return t._state = 3, t._value = e, void l(t);
                            if ("function" == typeof i) return void u((n = i, r = e, function () {
                                n.apply(r, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, l(t)
                    } catch (e) {
                        a(t, e)
                    }
                    var n, r
                }

                function a(t, e) {
                    t._state = 2, t._value = e, l(t)
                }

                function l(t) {
                    2 === t._state && 0 === t._deferreds.length && h(function () {
                        t._handled || c(t._value)
                    });
                    for (var e = 0, i = t._deferreds.length; e < i; e++) r(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function u(t, e) {
                    var i = !1;
                    try {
                        t(function (t) {
                            i || (i = !0, o(e, t))
                        }, function (t) {
                            i || (i = !0, a(e, t))
                        })
                    } catch (t) {
                        if (i) return;
                        i = !0, a(e, t)
                    }
                }

                var e = setTimeout, h = "function" == typeof i && i || function (t) {
                    e(t, 0)
                }, c = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                s.prototype.catch = function (t) {
                    return this.then(null, t)
                }, s.prototype.then = function (t, e) {
                    var i = new this.constructor(n);
                    return r(this, new function (t, e, i) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
                    }(t, e, i)), i
                }, s.all = function (t) {
                    var a = Array.prototype.slice.call(t);
                    return new s(function (n, r) {
                        function s(e, t) {
                            try {
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var i = t.then;
                                    if ("function" == typeof i) return void i.call(t, function (t) {
                                        s(e, t)
                                    }, r)
                                }
                                a[e] = t, 0 == --o && n(a)
                            } catch (t) {
                                r(t)
                            }
                        }

                        if (0 === a.length) return n([]);
                        for (var o = a.length, t = 0; t < a.length; t++) s(t, a[t])
                    })
                }, s.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === s ? e : new s(function (t) {
                        t(e)
                    })
                }, s.reject = function (i) {
                    return new s(function (t, e) {
                        e(i)
                    })
                }, s.race = function (r) {
                    return new s(function (t, e) {
                        for (var i = 0, n = r.length; i < n; i++) r[i].then(t, e)
                    })
                }, s._setImmediateFn = function (t) {
                    h = t
                }, s._setUnhandledRejectionFn = function (t) {
                    c = t
                }, void 0 !== f && f.exports ? f.exports = s : t.Promise || (t.Promise = s)
            }(this)
        }).call(t, e(2).setImmediate)
    }, function (t, l, u) {
        (function (t, e) {
            function i(t, e) {
                this._id = t, this._clearFn = e
            }

            var n = u(3).nextTick, r = Function.prototype.apply, s = Array.prototype.slice, o = {}, a = 0;
            l.setTimeout = function () {
                return new i(r.call(setTimeout, window, arguments), clearTimeout)
            }, l.setInterval = function () {
                return new i(r.call(setInterval, window, arguments), clearInterval)
            }, l.clearTimeout = l.clearInterval = function (t) {
                t.close()
            }, i.prototype.unref = i.prototype.ref = function () {
            }, i.prototype.close = function () {
                this._clearFn.call(window, this._id)
            }, l.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, l.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, l._unrefActive = l.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                0 <= e && (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, l.setImmediate = "function" == typeof t ? t : function (t) {
                var e = a++, i = !(arguments.length < 2) && s.call(arguments, 1);
                return o[e] = !0, n(function () {
                    o[e] && (i ? t.apply(null, i) : t.call(null), l.clearImmediate(e))
                }), e
            }, l.clearImmediate = "function" == typeof e ? e : function (t) {
                delete o[t]
            }
        }).call(l, u(2).setImmediate, u(2).clearImmediate)
    }, function (t, e) {
        function i() {
            c && u && (c = !1, u.length ? h = u.concat(h) : f = -1, h.length && n())
        }

        function n() {
            if (!c) {
                var t = o(i);
                c = !0;
                for (var e = h.length; e;) {
                    for (u = h, h = []; ++f < e;) u && u[f].run();
                    f = -1, e = h.length
                }
                u = null, c = !1, a(t)
            }
        }

        function r(t, e) {
            this.fun = t, this.array = e
        }

        function s() {
        }

        var o, a, l = t.exports = {};
        !function () {
            try {
                o = setTimeout
            } catch (t) {
                o = function () {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                a = clearTimeout
            } catch (t) {
                a = function () {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var u, h = [], c = !1, f = -1;
        l.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            h.push(new r(t, e)), 1 !== h.length || c || o(n, 0)
        }, r.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = s, l.addListener = s, l.once = s, l.off = s, l.removeListener = s, l.removeAllListeners = s, l.emit = s, l.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function () {
            return "/"
        }, l.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function () {
            return 0
        }
    }, function (t, e, i) {
        var n = i(5), r = {
            oldContainer: void 0, newContainer: void 0, newContainerLoading: void 0, extend: function (t) {
                return n.extend(this, t)
            }, init: function (t, e) {
                var i = this;
                return this.oldContainer = t, this._newContainerPromise = e, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function (t) {
                    i.newContainer = t, i.newContainerReady.resolve()
                }), this.deferred.promise
            }, done: function () {
                this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
            }, start: function () {
            }
        };
        t.exports = r
    }, function (t, e) {
        var i = {
            getCurrentUrl: function () {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            }, cleanLink: function (t) {
                return t.replace(/#.*/, "")
            }, xhrTimeout: 5e3, xhr: function (t) {
                var e = this.deferred(), i = new XMLHttpRequest;
                return i.onreadystatechange = function () {
                    if (4 === i.readyState) return 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                }, i.ontimeout = function () {
                    return e.reject(new Error("xhr: Timeout exceeded"))
                }, i.open("GET", t), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), e.promise
            }, extend: function (t, e) {
                var i = Object.create(t);
                for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                return i
            }, deferred: function () {
                return new function () {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function (t, e) {
                        this.resolve = t, this.reject = e
                    }.bind(this))
                }
            }, getPort: function (t) {
                var e = void 0 !== t ? t : window.location.port, i = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var r = i(7), n = i(5), s = {
            namespace: null, extend: function (t) {
                return n.extend(this, t)
            }, init: function () {
                var n = this;
                r.on("initStateChange", function (t, e) {
                    e && e.namespace === n.namespace && n.onLeave()
                }), r.on("newPageReady", function (t, e, i) {
                    n.container = i, t.namespace === n.namespace && n.onEnter()
                }), r.on("transitionCompleted", function (t, e) {
                    t.namespace === n.namespace && n.onEnterCompleted(), e && e.namespace === n.namespace && n.onLeaveCompleted()
                })
            }, onEnter: function () {
            }, onEnterCompleted: function () {
            }, onLeave: function () {
            }, onLeaveCompleted: function () {
            }
        };
        t.exports = s
    }, function (t, e) {
        var i = {
            events: {}, on: function (t, e) {
                this.events[t] = this.events[t] || [], this.events[t].push(e)
            }, off: function (t, e) {
                t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1)
            }, trigger: function (t) {
                if (t in this.events != 0) for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var n = i(5), r = {
            data: {}, extend: function (t) {
                return n.extend(this, t)
            }, set: function (t, e) {
                this.data[t] = e
            }, get: function (t) {
                return this.data[t]
            }, reset: function () {
                this.data = {}
            }
        };
        t.exports = r
    }, function (t, e) {
        t.exports = {
            history: [], add: function (t, e) {
                e || (e = void 0), this.history.push({url: t, namespace: e})
            }, currentStatus: function () {
                return this.history[this.history.length - 1]
            }, prevStatus: function () {
                var t = this.history;
                return t.length < 2 ? null : t[t.length - 2]
            }
        }
    }, function (t, e, i) {
        var r = i(5), s = i(7), n = i(11), o = i(8), a = i(9), l = {
            Dom: i(12),
            History: a,
            Cache: o,
            cacheEnabled: !0,
            transitionProgress: !1,
            ignoreClassLink: "no-barba",
            start: function () {
                this.init()
            },
            init: function () {
                var t = this.Dom.getContainer();
                this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), s.trigger("initStateChange", this.History.currentStatus()), s.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), s.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
            },
            bindEvents: function () {
                document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
            },
            getCurrentUrl: function () {
                return r.cleanLink(r.getCurrentUrl())
            },
            goTo: function (t) {
                window.history.pushState(null, null, t), this.onStateChange()
            },
            forceGoTo: function (t) {
                window.location = t
            },
            load: function (t) {
                var e, i = r.deferred(), n = this;
                return (e = this.Cache.get(t)) || (e = r.xhr(t), this.Cache.set(t, e)), e.then(function (t) {
                    var e = n.Dom.parseResponse(t);
                    n.Dom.putContainer(e), n.cacheEnabled || n.Cache.reset(), i.resolve(e)
                }, function () {
                    n.forceGoTo(t), i.reject()
                }), i.promise
            },
            getHref: function (t) {
                if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
            },
            onLinkClick: function (t) {
                for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                if (this.preventCheck(t, e)) {
                    t.stopPropagation(), t.preventDefault(), s.trigger("linkClicked", e, t);
                    var i = this.getHref(e);
                    this.goTo(i)
                }
            },
            preventCheck: function (t, e) {
                if (!window.history.pushState) return !1;
                var i = this.getHref(e);
                return !(!e || !i || 1 < t.which || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || e.target && "_blank" === e.target || window.location.protocol !== e.protocol || window.location.hostname !== e.hostname || r.getPort() !== r.getPort(e.port) || -1 < i.indexOf("#") || e.getAttribute && "string" == typeof e.getAttribute("download") || r.cleanLink(i) == r.cleanLink(location.href) || e.classList.contains(this.ignoreClassLink))
            },
            getTransition: function () {
                return n
            },
            onStateChange: function () {
                var t = this.getCurrentUrl();
                if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                this.History.add(t);
                var e = this.load(t), i = Object.create(this.getTransition());
                this.transitionProgress = !0, s.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                var n = i.init(this.Dom.getContainer(), e);
                e.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this))
            },
            onNewContainerLoaded: function (t) {
                this.History.currentStatus().namespace = this.Dom.getNamespace(t), s.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
            },
            onTransitionEnd: function () {
                this.transitionProgress = !1, s.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
            }
        };
        t.exports = l
    }, function (t, e, i) {
        var n = i(4).extend({
            start: function () {
                this.newContainerLoading.then(this.finish.bind(this))
            }, finish: function () {
                document.body.scrollTop = 0, this.done()
            }
        });
        t.exports = n
    }, function (t, e) {
        var i = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function (t) {
                this.currentHTML = t;
                var e = document.createElement("div");
                e.innerHTML = t;
                var i = e.querySelector("title");
                return i && (document.title = i.textContent), this.getContainer(e)
            },
            getWrapper: function () {
                var t = document.getElementById(this.wrapperId);
                if (!t) throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function (t) {
                if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function (t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function (t) {
                t.style.visibility = "hidden", this.getWrapper().appendChild(t)
            },
            parseContainer: function (t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var r = i(5), s = i(10), n = {
            ignoreClassLink: "no-barba-prefetch", init: function () {
                return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
            }, onLinkEnter: function (t) {
                for (var e = t.target; e && !s.getHref(e);) e = e.parentNode;
                if (e && !e.classList.contains(this.ignoreClassLink)) {
                    var i = s.getHref(e);
                    if (s.preventCheck(t, e) && !s.Cache.get(i)) {
                        var n = r.xhr(i);
                        s.Cache.set(i, n)
                    }
                }
            }
        };
        t.exports = n
    }])
}), function (m, g) {
    "use strict";

    function u(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }, this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect, i = e.width * e.height, n = this.intersectionRect, r = n.width * n.height;
        this.intersectionRatio = i ? r / i : this.isIntersecting ? 1 : 0
    }

    function t(t, e) {
        var i, n, r, s = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (i = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function () {
            r || (r = setTimeout(function () {
                i(), r = null
            }, n))
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
            return t.value + t.unit
        }).join(" ")
    }

    function e(t, e, i, n) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, i, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i)
    }

    function i(t, e, i, n) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i)
    }

    function _(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {
        }
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }), e) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
    }

    function n(t, e) {
        for (var i = e; i;) {
            if (i == t) return !0;
            i = v(i)
        }
        return !1
    }

    function v(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host ? e.host : e
    }

    if ("IntersectionObserver" in m && "IntersectionObserverEntry" in m && "intersectionRatio" in m.IntersectionObserverEntry.prototype) "isIntersecting" in m.IntersectionObserverEntry.prototype || Object.defineProperty(m.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
            return 0 < this.intersectionRatio
        }
    }); else {
        var r = [];
        t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.observe = function (e) {
            if (!this._observationTargets.some(function (t) {
                return t.element == e
            })) {
                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                this._registerInstance(), this._observationTargets.push({
                    element: e,
                    entry: null
                }), this._monitorIntersections(), this._checkForIntersections()
            }
        }, t.prototype.unobserve = function (e) {
            this._observationTargets = this._observationTargets.filter(function (t) {
                return t.element != e
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, t.prototype.disconnect = function () {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, t.prototype.takeRecords = function () {
            var t = this._queuedEntries.slice();
            return this._queuedEntries = [], t
        }, t.prototype._initThresholds = function (t) {
            var e = t || [0];
            return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, i) {
                if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
                return t !== i[e - 1]
            })
        }, t.prototype._parseRootMargin = function (t) {
            var e = (t || "0px").split(/\s+/).map(function (t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                return {value: parseFloat(e[1]), unit: e[2]}
            });
            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
        }, t.prototype._monitorIntersections = function () {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (e(m, "resize", this._checkForIntersections, !0), e(g, "scroll", this._checkForIntersections, !0), "MutationObserver" in m && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(g, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }, t.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(m, "resize", this._checkForIntersections, !0), i(g, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, t.prototype._checkForIntersections = function () {
            var a = this._rootIsInDom(),
                l = a ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
            this._observationTargets.forEach(function (t) {
                var e = t.element, i = _(e), n = this._rootContainsTarget(e), r = t.entry,
                    s = a && n && this._computeTargetAndRootIntersection(e, l), o = t.entry = new u({
                        time: m.performance && performance.now && performance.now(),
                        target: e,
                        boundingClientRect: i,
                        rootBounds: l,
                        intersectionRect: s
                    });
                r ? a && n ? this._hasCrossedThreshold(r, o) && this._queuedEntries.push(o) : r && r.isIntersecting && this._queuedEntries.push(o) : this._queuedEntries.push(o)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, t.prototype._computeTargetAndRootIntersection = function (t, e) {
            if ("none" != m.getComputedStyle(t).display) {
                for (var i = _(t), n = v(t), r = !1; !r;) {
                    var s = null, o = 1 == n.nodeType ? m.getComputedStyle(n) : {};
                    if ("none" == o.display) return;
                    if (n == this.root || n == g ? (r = !0, s = e) : n != g.body && n != g.documentElement && "visible" != o.overflow && (s = _(n)), s && (a = s, l = i, void 0, u = Math.max(a.top, l.top), h = Math.min(a.bottom, l.bottom), c = Math.max(a.left, l.left), f = Math.min(a.right, l.right), d = h - u, !(i = 0 <= (p = f - c) && 0 <= d && {
                        top: u,
                        bottom: h,
                        left: c,
                        right: f,
                        width: p,
                        height: d
                    }))) break;
                    n = v(n)
                }
                return i
            }
            var a, l, u, h, c, f, p, d
        }, t.prototype._getRootRect = function () {
            var t;
            if (this.root) t = _(this.root); else {
                var e = g.documentElement, i = g.body;
                t = {
                    top: 0,
                    left: 0,
                    right: e.clientWidth || i.clientWidth,
                    width: e.clientWidth || i.clientWidth,
                    bottom: e.clientHeight || i.clientHeight,
                    height: e.clientHeight || i.clientHeight
                }
            }
            return this._expandRectByRootMargin(t)
        }, t.prototype._expandRectByRootMargin = function (i) {
            var t = this._rootMarginValues.map(function (t, e) {
                return "px" == t.unit ? t.value : t.value * (e % 2 ? i.width : i.height) / 100
            }), e = {top: i.top - t[0], right: i.right + t[1], bottom: i.bottom + t[2], left: i.left - t[3]};
            return e.width = e.right - e.left, e.height = e.bottom - e.top, e
        }, t.prototype._hasCrossedThreshold = function (t, e) {
            var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (i !== n) for (var r = 0; r < this.thresholds.length; r++) {
                var s = this.thresholds[r];
                if (s == i || s == n || s < i != s < n) return !0
            }
        }, t.prototype._rootIsInDom = function () {
            return !this.root || n(g, this.root)
        }, t.prototype._rootContainsTarget = function (t) {
            return n(this.root || g, t)
        }, t.prototype._registerInstance = function () {
            r.indexOf(this) < 0 && r.push(this)
        }, t.prototype._unregisterInstance = function () {
            var t = r.indexOf(this);
            -1 != t && r.splice(t, 1)
        }, m.IntersectionObserver = t, m.IntersectionObserverEntry = u
    }
}(window, document);
//# sourceMappingURL=__v-dist.js.map
