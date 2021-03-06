! function() {
	! function(t, e) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
			if (!t.document) throw new Error("jQuery requires a window with a document");
			return e(t)
		} : e(t)
	}("undefined" != typeof window ? window : this, function(t, e) {
		function n(t) {
			var e = t.length,
				n = te.type(t);
			return "function" === n || te.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
		}

		function r(t, e, n) {
			if (te.isFunction(e)) return te.grep(t, function(t, r) {
				return !!e.call(t, r, t) !== n
			});
			if (e.nodeType) return te.grep(t, function(t) {
				return t === e !== n
			});
			if ("string" == typeof e) {
				if (se.test(e)) return te.filter(e, t, n);
				e = te.filter(e, t)
			}
			return te.grep(t, function(t) {
				return W.call(e, t) >= 0 !== n
			})
		}

		function i(t, e) {
			for (;
				(t = t[e]) && 1 !== t.nodeType;);
			return t
		}

		function o(t) {
			var e = de[t] = {};
			return te.each(t.match(pe) || [], function(t, n) {
				e[n] = !0
			}), e
		}

		function a() {
			K.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), te.ready()
		}

		function s() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function() {
					return {}
				}
			}), this.expando = te.expando + Math.random()
		}

		function u(t, e, n) {
			var r;
			if (void 0 === n && 1 === t.nodeType)
				if (r = "data-" + e.replace($e, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? te.parseJSON(n) : n
					} catch (i) {}
					ye.set(t, e, n)
				} else n = void 0;
			return n
		}

		function c() {
			return !0
		}

		function l() {
			return !1
		}

		function f() {
			try {
				return K.activeElement
			} catch (t) {}
		}

		function h(t, e) {
			return te.nodeName(t, "table") && te.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
		}

		function p(t) {
			return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
		}

		function d(t) {
			var e = Le.exec(t.type);
			return e ? t.type = e[1] : t.removeAttribute("type"), t
		}

		function g(t, e) {
			for (var n = 0, r = t.length; r > n; n++) me.set(t[n], "globalEval", !e || me.get(e[n], "globalEval"))
		}

		function v(t, e) {
			var n, r, i, o, a, s, u, c;
			if (1 === e.nodeType) {
				if (me.hasData(t) && (o = me.access(t), a = me.set(e, o), c = o.events)) {
					delete a.handle, a.events = {};
					for (i in c)
						for (n = 0, r = c[i].length; r > n; n++) te.event.add(e, i, c[i][n])
				}
				ye.hasData(t) && (s = ye.access(t), u = te.extend({}, s), ye.set(e, u))
			}
		}

		function m(t, e) {
			var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
			return void 0 === e || e && te.nodeName(t, e) ? te.merge([t], n) : n
		}

		function y(t, e) {
			var n = e.nodeName.toLowerCase();
			"input" === n && Ce.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}

		function x(e, n) {
			var r = te(n.createElement(e)).appendTo(n.body),
				i = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(r[0]).display : te.css(r[0], "display");
			return r.detach(), i
		}

		function $(t) {
			var e = K,
				n = Fe[t];
			return n || (n = x(t, e), "none" !== n && n || (qe = (qe || te("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qe[0].contentDocument, e.write(), e.close(), n = x(t, e), qe.detach()), Fe[t] = n), n
		}

		function b(t, e, n) {
			var r, i, o, a, s = t.style;
			return n = n || Ue(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || te.contains(t.ownerDocument, t) || (a = te.style(t, e)), He.test(a) && Ie.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
		}

		function w(t, e) {
			return {
				get: function() {
					return t() ? void delete this.get : (this.get = e).apply(this, arguments)
				}
			}
		}

		function k(t, e) {
			if (e in t) return e;
			for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Ye.length; i--;)
				if (e = Ye[i] + n, e in t) return e;
			return r
		}

		function C(t, e, n) {
			var r = ze.exec(e);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
		}

		function S(t, e, n, r, i) {
			for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += te.css(t, n + we[o], !0, i)), r ? ("content" === n && (a -= te.css(t, "padding" + we[o], !0, i)), "margin" !== n && (a -= te.css(t, "border" + we[o] + "Width", !0, i))) : (a += te.css(t, "padding" + we[o], !0, i), "padding" !== n && (a += te.css(t, "border" + we[o] + "Width", !0, i)));
			return a
		}

		function _(t, e, n) {
			var r = !0,
				i = "width" === e ? t.offsetWidth : t.offsetHeight,
				o = Ue(t),
				a = "border-box" === te.css(t, "boxSizing", !1, o);
			if (0 >= i || null == i) {
				if (i = b(t, e, o), (0 > i || null == i) && (i = t.style[e]), He.test(i)) return i;
				r = a && (J.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
			}
			return i + S(t, e, n || (a ? "border" : "content"), r, o) + "px"
		}

		function T(t, e) {
			for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = me.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && ke(r) && (o[a] = me.access(r, "olddisplay", $(r.nodeName)))) : o[a] || (i = ke(r), (n && "none" !== n || !i) && me.set(r, "olddisplay", i ? n : te.css(r, "display"))));
			for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
			return t
		}

		function E(t, e, n, r, i) {
			return new E.prototype.init(t, e, n, r, i)
		}

		function A() {
			return setTimeout(function() {
				Qe = void 0
			}), Qe = te.now()
		}

		function N(t, e) {
			var n, r = 0,
				i = {
					height: t
				};
			for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = we[r], i["margin" + n] = i["padding" + n] = t;
			return e && (i.opacity = i.width = t), i
		}

		function M(t, e, n) {
			for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
				if (r = i[o].call(n, e, t)) return r
		}

		function j(t, e, n) {
			var r, i, o, a, s, u, c, l = this,
				f = {}, h = t.style,
				p = t.nodeType && ke(t),
				d = me.get(t, "fxshow");
			n.queue || (s = te._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
				s.unqueued || u()
			}), s.unqueued++, l.always(function() {
				l.always(function() {
					s.unqueued--, te.queue(t, "fx").length || s.empty.fire()
				})
			})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = te.css(t, "display"), "none" === c && (c = $(t.nodeName)), "inline" === c && "none" === te.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", l.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			}));
			for (r in e)
				if (i = e[r], Ke.exec(i)) {
					if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
						if ("show" !== i || !d || void 0 === d[r]) continue;
						p = !0
					}
					f[r] = d && d[r] || te.style(t, r)
				}
			if (!te.isEmptyObject(f)) {
				d ? "hidden" in d && (p = d.hidden) : d = me.access(t, "fxshow", {}), o && (d.hidden = !p), p ? te(t).show() : l.done(function() {
					te(t).hide()
				}), l.done(function() {
					var e;
					me.remove(t, "fxshow");
					for (e in f) te.style(t, e, f[e])
				});
				for (r in f) a = M(p ? d[r] : 0, r, l), r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function O(t, e) {
			var n, r, i, o, a;
			for (n in t)
				if (r = te.camelCase(n), i = e[r], o = t[n], te.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = te.cssHooks[r], a && "expand" in a) {
					o = a.expand(o), delete t[r];
					for (n in o) n in t || (t[n] = o[n], e[n] = i)
				} else e[r] = i
		}

		function P(t, e, n) {
			var r, i, o = 0,
				a = en.length,
				s = te.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if (i) return !1;
					for (var e = Qe || A(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
					return s.notifyWith(t, [c, o, n]), 1 > o && u ? n : (s.resolveWith(t, [c]), !1)
				}, c = s.promise({
					elem: t,
					props: te.extend({}, e),
					opts: te.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: e,
					originalOptions: n,
					startTime: Qe || A(),
					duration: n.duration,
					tweens: [],
					createTween: function(e, n) {
						var r = te.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
						return c.tweens.push(r), r
					},
					stop: function(e) {
						var n = 0,
							r = e ? c.tweens.length : 0;
						if (i) return this;
						for (i = !0; r > n; n++) c.tweens[n].run(1);
						return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
					}
				}),
				l = c.props;
			for (O(l, c.opts.specialEasing); a > o; o++)
				if (r = en[o].call(c, t, l, c.opts)) return r;
			return te.map(l, M, c), te.isFunction(c.opts.start) && c.opts.start.call(t, c), te.fx.timer(te.extend(u, {
				elem: t,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
		}

		function D(t) {
			return function(e, n) {
				"string" != typeof e && (n = e, e = "*");
				var r, i = 0,
					o = e.toLowerCase().match(pe) || [];
				if (te.isFunction(n))
					for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
			}
		}

		function L(t, e, n, r) {
			function i(s) {
				var u;
				return o[s] = !0, te.each(t[s] || [], function(t, s) {
					var c = s(e, n, r);
					return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
				}), u
			}
			var o = {}, a = t === wn;
			return i(e.dataTypes[0]) || !o["*"] && i("*")
		}

		function R(t, e) {
			var n, r, i = te.ajaxSettings.flatOptions || {};
			for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
			return r && te.extend(!0, t, r), t
		}

		function B(t, e, n) {
			for (var r, i, o, a, s = t.contents, u = t.dataTypes;
				"*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
			if (r)
				for (i in s)
					if (s[i] && s[i].test(r)) {
						u.unshift(i);
						break
					}
			if (u[0] in n) o = u[0];
			else {
				for (i in n) {
					if (!u[0] || t.converters[i + " " + u[0]]) {
						o = i;
						break
					}
					a || (a = i)
				}
				o = o || a
			}
			return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
		}

		function q(t, e, n, r) {
			var i, o, a, s, u, c = {}, l = t.dataTypes.slice();
			if (l[1])
				for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
			for (o = l.shift(); o;)
				if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
					if ("*" === o) o = u;
					else
			if ("*" !== u && u !== o) {
				if (a = c[u + " " + o] || c["* " + o], !a)
					for (i in c)
						if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
							a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
							break
						}
				if (a !== !0)
					if (a && t["throws"]) e = a(e);
					else try {
						e = a(e)
					} catch (f) {
						return {
							state: "parsererror",
							error: a ? f : "No conversion from " + u + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: e
			}
		}

		function F(t, e, n, r) {
			var i;
			if (te.isArray(e)) te.each(e, function(e, i) {
				n || _n.test(t) ? r(t, i) : F(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
			});
			else if (n || "object" !== te.type(e)) r(t, e);
			else
				for (i in e) F(t + "[" + i + "]", e[i], n, r)
		}

		function I(t) {
			return te.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
		}
		var H = [],
			U = H.slice,
			V = H.concat,
			z = H.push,
			W = H.indexOf,
			X = {}, G = X.toString,
			Y = X.hasOwnProperty,
			Q = "".trim,
			J = {}, K = t.document,
			Z = "2.1.0",
			te = function(t, e) {
				return new te.fn.init(t, e)
			}, ee = /^-ms-/,
			ne = /-([\da-z])/gi,
			re = function(t, e) {
				return e.toUpperCase()
			};
		te.fn = te.prototype = {
			jquery: Z,
			constructor: te,
			selector: "",
			length: 0,
			toArray: function() {
				return U.call(this)
			},
			get: function(t) {
				return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
			},
			pushStack: function(t) {
				var e = te.merge(this.constructor(), t);
				return e.prevObject = this, e.context = this.context, e
			},
			each: function(t, e) {
				return te.each(this, t, e)
			},
			map: function(t) {
				return this.pushStack(te.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return this.pushStack(U.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(t) {
				var e = this.length,
					n = +t + (0 > t ? e : 0);
				return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: z,
			sort: H.sort,
			splice: H.splice
		}, te.extend = te.fn.extend = function() {
			var t, e, n, r, i, o, a = arguments[0] || {}, s = 1,
				u = arguments.length,
				c = !1;
			for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || te.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
				if (null != (t = arguments[s]))
					for (e in t) n = a[e], r = t[e], a !== r && (c && r && (te.isPlainObject(r) || (i = te.isArray(r))) ? (i ? (i = !1, o = n && te.isArray(n) ? n : []) : o = n && te.isPlainObject(n) ? n : {}, a[e] = te.extend(c, o, r)) : void 0 !== r && (a[e] = r));
			return a
		}, te.extend({
			expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(t) {
				throw new Error(t)
			},
			noop: function() {},
			isFunction: function(t) {
				return "function" === te.type(t)
			},
			isArray: Array.isArray,
			isWindow: function(t) {
				return null != t && t === t.window
			},
			isNumeric: function(t) {
				return t - parseFloat(t) >= 0
			},
			isPlainObject: function(t) {
				if ("object" !== te.type(t) || t.nodeType || te.isWindow(t)) return !1;
				try {
					if (t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf")) return !1
				} catch (e) {
					return !1
				}
				return !0
			},
			isEmptyObject: function(t) {
				var e;
				for (e in t) return !1;
				return !0
			},
			type: function(t) {
				return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[G.call(t)] || "object" : typeof t
			},
			globalEval: function(t) {
				var e, n = eval;
				t = te.trim(t), t && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : n(t))
			},
			camelCase: function(t) {
				return t.replace(ee, "ms-").replace(ne, re)
			},
			nodeName: function(t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function(t, e, r) {
				var i, o = 0,
					a = t.length,
					s = n(t);
				if (r) {
					if (s)
						for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
					else
						for (o in t)
							if (i = e.apply(t[o], r), i === !1) break
				} else if (s)
					for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
				else
					for (o in t)
						if (i = e.call(t[o], o, t[o]), i === !1) break; return t
			},
			trim: function(t) {
				return null == t ? "" : Q.call(t)
			},
			makeArray: function(t, e) {
				var r = e || [];
				return null != t && (n(Object(t)) ? te.merge(r, "string" == typeof t ? [t] : t) : z.call(r, t)), r
			},
			inArray: function(t, e, n) {
				return null == e ? -1 : W.call(e, t, n)
			},
			merge: function(t, e) {
				for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
				return t.length = i, t
			},
			grep: function(t, e, n) {
				for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
				return i
			},
			map: function(t, e, r) {
				var i, o = 0,
					a = t.length,
					s = n(t),
					u = [];
				if (s)
					for (; a > o; o++) i = e(t[o], o, r), null != i && u.push(i);
				else
					for (o in t) i = e(t[o], o, r), null != i && u.push(i);
				return V.apply([], u)
			},
			guid: 1,
			proxy: function(t, e) {
				var n, r, i;
				return "string" == typeof e && (n = t[e], e = t, t = n), te.isFunction(t) ? (r = U.call(arguments, 2), i = function() {
					return t.apply(e || this, r.concat(U.call(arguments)))
				}, i.guid = t.guid = t.guid || te.guid++, i) : void 0
			},
			now: Date.now,
			support: J
		}), te.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			X["[object " + e + "]"] = e.toLowerCase()
		});
		var ie = function(t) {
			function e(t, e, n, r) {
				var i, o, a, s, u, c, f, d, g, v;
				if ((e ? e.ownerDocument || e : F) !== j && M(e), e = e || j, n = n || [], !t || "string" != typeof t) return n;
				if (1 !== (s = e.nodeType) && 9 !== s) return [];
				if (P && !r) {
					if (i = ye.exec(t))
						if (a = i[1]) {
							if (9 === s) {
								if (o = e.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && B(e, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
							if ((a = i[3]) && k.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
						}
					if (k.qsa && (!D || !D.test(t))) {
						if (d = f = q, g = e, v = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
							for (c = h(t), (f = e.getAttribute("id")) ? d = f.replace($e, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + p(c[u]);
							g = xe.test(t) && l(e.parentNode) || e, v = c.join(",")
						}
						if (v) try {
							return Z.apply(n, g.querySelectorAll(v)), n
						} catch (m) {} finally {
							f || e.removeAttribute("id")
						}
					}
				}
				return b(t.replace(ue, "$1"), e, n, r)
			}

			function n() {
				function t(n, r) {
					return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = r
				}
				var e = [];
				return t
			}

			function r(t) {
				return t[q] = !0, t
			}

			function i(t) {
				var e = j.createElement("div");
				try {
					return !!t(e)
				} catch (n) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function o(t, e) {
				for (var n = t.split("|"), r = t.length; r--;) C.attrHandle[n[r]] = e
			}

			function a(t, e) {
				var n = e && t,
					r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function s(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return "input" === n && e.type === t
				}
			}

			function u(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function c(t) {
				return r(function(e) {
					return e = +e, r(function(n, r) {
						for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function l(t) {
				return t && typeof t.getElementsByTagName !== X && t
			}

			function f() {}

			function h(t, n) {
				var r, i, o, a, s, u, c, l = V[t + " "];
				if (l) return n ? 0 : l.slice(0);
				for (s = t, u = [], c = C.preFilter; s;) {
					(!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(ue, " ")
					}), s = s.slice(r.length));
					for (a in C.filter)!(i = de[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
						value: r,
						type: a,
						matches: i
					}), s = s.slice(r.length));
					if (!r) break
				}
				return n ? s.length : s ? e.error(t) : V(t, u).slice(0)
			}

			function p(t) {
				for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
				return r
			}

			function d(t, e, n) {
				var r = e.dir,
					i = n && "parentNode" === r,
					o = H++;
				return e.first ? function(e, n, o) {
					for (; e = e[r];)
						if (1 === e.nodeType || i) return t(e, n, o)
				} : function(e, n, a) {
					var s, u, c = [I, o];
					if (a) {
						for (; e = e[r];)
							if ((1 === e.nodeType || i) && t(e, n, a)) return !0
					} else
						for (; e = e[r];)
							if (1 === e.nodeType || i) {
								if (u = e[q] || (e[q] = {}), (s = u[r]) && s[0] === I && s[1] === o) return c[2] = s[2];
								if (u[r] = c, c[2] = t(e, n, a)) return !0
							}
				}
			}

			function g(t) {
				return t.length > 1 ? function(e, n, r) {
					for (var i = t.length; i--;)
						if (!t[i](e, n, r)) return !1;
					return !0
				} : t[0]
			}

			function v(t, e, n, r, i) {
				for (var o, a = [], s = 0, u = t.length, c = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), c && e.push(s));
				return a
			}

			function m(t, e, n, i, o, a) {
				return i && !i[q] && (i = m(i)), o && !o[q] && (o = m(o, a)), r(function(r, a, s, u) {
					var c, l, f, h = [],
						p = [],
						d = a.length,
						g = r || $(e || "*", s.nodeType ? [s] : s, []),
						m = !t || !r && e ? g : v(g, h, t, s, u),
						y = n ? o || (r ? t : d || i) ? [] : a : m;
					if (n && n(m, y, s, u), i)
						for (c = v(y, p), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (y[p[l]] = !(m[p[l]] = f));
					if (r) {
						if (o || t) {
							if (o) {
								for (c = [], l = y.length; l--;)(f = y[l]) && c.push(m[l] = f);
								o(null, y = [], c, u)
							}
							for (l = y.length; l--;)(f = y[l]) && (c = o ? ee.call(r, f) : h[l]) > -1 && (r[c] = !(a[c] = f))
						}
					} else y = v(y === a ? y.splice(d, y.length) : y), o ? o(null, a, y, u) : Z.apply(a, y)
				})
			}

			function y(t) {
				for (var e, n, r, i = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(t) {
						return t === e
					}, a, !0), c = d(function(t) {
						return ee.call(e, t) > -1
					}, a, !0), l = [
						function(t, n, r) {
							return !o && (r || n !== E) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r))
						}
					]; i > s; s++)
					if (n = C.relative[t[s].type]) l = [d(g(l), n)];
					else {
						if (n = C.filter[t[s].type].apply(null, t[s].matches), n[q]) {
							for (r = ++s; i > r && !C.relative[t[r].type]; r++);
							return m(s > 1 && g(l), s > 1 && p(t.slice(0, s - 1).concat({
								value: " " === t[s - 2].type ? "*" : ""
							})).replace(ue, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && p(t))
						}
						l.push(n)
					}
				return g(l)
			}

			function x(t, n) {
				var i = n.length > 0,
					o = t.length > 0,
					a = function(r, a, s, u, c) {
						var l, f, h, p = 0,
							d = "0",
							g = r && [],
							m = [],
							y = E,
							x = r || o && C.find.TAG("*", c),
							$ = I += null == y ? 1 : Math.random() || .1,
							b = x.length;
						for (c && (E = a !== j && a); d !== b && null != (l = x[d]); d++) {
							if (o && l) {
								for (f = 0; h = t[f++];)
									if (h(l, a, s)) {
										u.push(l);
										break
									}
								c && (I = $)
							}
							i && ((l = !h && l) && p--, r && g.push(l))
						}
						if (p += d, i && d !== p) {
							for (f = 0; h = n[f++];) h(g, m, a, s);
							if (r) {
								if (p > 0)
									for (; d--;) g[d] || m[d] || (m[d] = J.call(u));
								m = v(m)
							}
							Z.apply(u, m), c && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
						}
						return c && (I = $, E = y), g
					};
				return i ? r(a) : a
			}

			function $(t, n, r) {
				for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
				return r
			}

			function b(t, e, n, r) {
				var i, o, a, s, u, c = h(t);
				if (!r && 1 === c.length) {
					if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === e.nodeType && P && C.relative[o[1].type]) {
						if (e = (C.find.ID(a.matches[0].replace(be, we), e) || [])[0], !e) return n;
						t = t.slice(o.shift().value.length)
					}
					for (i = de.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
						if ((u = C.find[s]) && (r = u(a.matches[0].replace(be, we), xe.test(o[0].type) && l(e.parentNode) || e))) {
							if (o.splice(i, 1), t = r.length && p(o), !t) return Z.apply(n, r), n;
							break
						}
				}
				return T(t, c)(r, e, !P, n, xe.test(t) && l(e.parentNode) || e), n
			}
			var w, k, C, S, _, T, E, A, N, M, j, O, P, D, L, R, B, q = "sizzle" + -new Date,
				F = t.document,
				I = 0,
				H = 0,
				U = n(),
				V = n(),
				z = n(),
				W = function(t, e) {
					return t === e && (N = !0), 0
				}, X = "undefined",
				G = 1 << 31,
				Y = {}.hasOwnProperty,
				Q = [],
				J = Q.pop,
				K = Q.push,
				Z = Q.push,
				te = Q.slice,
				ee = Q.indexOf || function(t) {
					for (var e = 0, n = this.length; n > e; e++)
						if (this[e] === t) return e;
					return -1
			}, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				re = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				oe = ie.replace("w", "w#"),
				ae = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
				se = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
				ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
				ce = new RegExp("^" + re + "*," + re + "*"),
				le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
				fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
				he = new RegExp(se),
				pe = new RegExp("^" + oe + "$"),
				de = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ae),
					PSEUDO: new RegExp("^" + se),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ne + ")$", "i"),
					needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
				}, ge = /^(?:input|select|textarea|button)$/i,
				ve = /^h\d$/i,
				me = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				xe = /[+~]/,
				$e = /'|\\/g,
				be = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
				we = function(t, e, n) {
					var r = "0x" + e - 65536;
					return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				};
			try {
				Z.apply(Q = te.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
			} catch (ke) {
				Z = {
					apply: Q.length ? function(t, e) {
						K.apply(t, te.call(e))
					} : function(t, e) {
						for (var n = t.length, r = 0; t[n++] = e[r++];);
						t.length = n - 1
					}
				}
			}
			k = e.support = {}, _ = e.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return e ? "HTML" !== e.nodeName : !1
			}, M = e.setDocument = function(t) {
				var e, n = t ? t.ownerDocument || t : F,
					r = n.defaultView;
				return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, O = n.documentElement, P = !_(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
					M()
				}, !1) : r.attachEvent && r.attachEvent("onunload", function() {
					M()
				})), k.attributes = i(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), k.getElementsByTagName = i(function(t) {
					return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
				}), k.getElementsByClassName = me.test(n.getElementsByClassName) && i(function(t) {
					return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
				}), k.getById = i(function(t) {
					return O.appendChild(t).id = q, !n.getElementsByName || !n.getElementsByName(q).length
				}), k.getById ? (C.find.ID = function(t, e) {
					if (typeof e.getElementById !== X && P) {
						var n = e.getElementById(t);
						return n && n.parentNode ? [n] : []
					}
				}, C.filter.ID = function(t) {
					var e = t.replace(be, we);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete C.find.ID, C.filter.ID = function(t) {
					var e = t.replace(be, we);
					return function(t) {
						var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), C.find.TAG = k.getElementsByTagName ? function(t, e) {
					return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
				} : function(t, e) {
					var n, r = [],
						i = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, C.find.CLASS = k.getElementsByClassName && function(t, e) {
					return typeof e.getElementsByClassName !== X && P ? e.getElementsByClassName(t) : void 0
				}, L = [], D = [], (k.qsa = me.test(n.querySelectorAll)) && (i(function(t) {
					t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && D.push("[*^$]=" + re + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + re + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || D.push(":checked")
				}), i(function(t) {
					var e = n.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + re + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
				})), (k.matchesSelector = me.test(R = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(t) {
					k.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), L.push("!=", se)
				}), D = D.length && new RegExp(D.join("|")), L = L.length && new RegExp(L.join("|")), e = me.test(O.compareDocumentPosition), B = e || me.test(O.contains) ? function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						r = e && e.parentNode;
					return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, W = e ? function(t, e) {
					if (t === e) return N = !0, 0;
					var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return r ? r : (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & r || !k.sortDetached && e.compareDocumentPosition(t) === r ? t === n || t.ownerDocument === F && B(F, t) ? -1 : e === n || e.ownerDocument === F && B(F, e) ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0 : 4 & r ? -1 : 1)
				} : function(t, e) {
					if (t === e) return N = !0, 0;
					var r, i = 0,
						o = t.parentNode,
						s = e.parentNode,
						u = [t],
						c = [e];
					if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0;
					if (o === s) return a(t, e);
					for (r = t; r = r.parentNode;) u.unshift(r);
					for (r = e; r = r.parentNode;) c.unshift(r);
					for (; u[i] === c[i];) i++;
					return i ? a(u[i], c[i]) : u[i] === F ? -1 : c[i] === F ? 1 : 0
				}, n) : j
			}, e.matches = function(t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function(t, n) {
				if ((t.ownerDocument || t) !== j && M(t), n = n.replace(fe, "='$1']"), !(!k.matchesSelector || !P || L && L.test(n) || D && D.test(n))) try {
					var r = R.call(t, n);
					if (r || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
				} catch (i) {}
				return e(n, j, null, [t]).length > 0
			}, e.contains = function(t, e) {
				return (t.ownerDocument || t) !== j && M(t), B(t, e)
			}, e.attr = function(t, e) {
				(t.ownerDocument || t) !== j && M(t);
				var n = C.attrHandle[e.toLowerCase()],
					r = n && Y.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
				return void 0 !== r ? r : k.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
			}, e.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function(t) {
				var e, n = [],
					r = 0,
					i = 0;
				if (N = !k.detectDuplicates, A = !k.sortStable && t.slice(0), t.sort(W), N) {
					for (; e = t[i++];) e === t[i] && (r = n.push(i));
					for (; r--;) t.splice(n[r], 1)
				}
				return A = null, t
			}, S = e.getText = function(t) {
				var e, n = "",
					r = 0,
					i = t.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
					} else if (3 === i || 4 === i) return t.nodeValue
				} else
					for (; e = t[r++];) n += S(e);
				return n
			}, C = e.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: de,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(t) {
						return t[1] = t[1].replace(be, we), t[3] = (t[4] || t[5] || "").replace(be, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[5] && t[2];
						return de.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && he.test(n) && (e = h(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(be, we).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = U[t + " "];
						return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && U(t, function(t) {
							return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, n, r) {
						return function(i) {
							var o = e.attr(i, t);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(t, e, n, r, i) {
						var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							s = "of-type" === e;
						return 1 === r && 0 === i ? function(t) {
							return !!t.parentNode
						} : function(e, n, u) {
							var c, l, f, h, p, d, g = o !== a ? "nextSibling" : "previousSibling",
								v = e.parentNode,
								m = s && e.nodeName.toLowerCase(),
								y = !u && !s;
							if (v) {
								if (o) {
									for (; g;) {
										for (f = e; f = f[g];)
											if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
										d = g = "only" === t && !d && "nextSibling"
									}
									return !0
								}
								if (d = [a ? v.firstChild : v.lastChild], a && y) {
									for (l = v[q] || (v[q] = {}), c = l[t] || [], p = c[0] === I && c[1], h = c[0] === I && c[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop();)
										if (1 === f.nodeType && ++h && f === e) {
											l[t] = [I, p, h];
											break
										}
								} else if (y && (c = (e[q] || (e[q] = {}))[t]) && c[0] === I) h = c[1];
								else
									for (;
										(f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++h || (y && ((f[q] || (f[q] = {}))[t] = [I, h]), f !== e)););
								return h -= i, h === r || h % r === 0 && h / r >= 0
							}
						}
					},
					PSEUDO: function(t, n) {
						var i, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return o[q] ? o(n) : o.length > 1 ? (i = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
							for (var r, i = o(t, n), a = i.length; a--;) r = ee.call(t, i[a]), t[r] = !(e[r] = i[a])
						}) : function(t) {
							return o(t, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function(t) {
						var e = [],
							n = [],
							i = T(t.replace(ue, "$1"));
						return i[q] ? r(function(t, e, n, r) {
							for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
						}) : function(t, r, o) {
							return e[0] = t, i(e, null, o, n), !n.pop()
						}
					}),
					has: r(function(t) {
						return function(n) {
							return e(t, n).length > 0
						}
					}),
					contains: r(function(t) {
						return function(e) {
							return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
						}
					}),
					lang: r(function(t) {
						return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, we).toLowerCase(),
						function(e) {
							var n;
							do
								if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
					}),
					target: function(e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					},
					root: function(t) {
						return t === O
					},
					focus: function(t) {
						return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return t.disabled === !1
					},
					disabled: function(t) {
						return t.disabled === !0
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !! t.checked || "option" === e && !! t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !C.pseudos.empty(t)
					},
					header: function(t) {
						return ve.test(t.nodeName)
					},
					input: function(t) {
						return ge.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: c(function() {
						return [0]
					}),
					last: c(function(t, e) {
						return [e - 1]
					}),
					eq: c(function(t, e, n) {
						return [0 > n ? n + e : n]
					}),
					even: c(function(t, e) {
						for (var n = 0; e > n; n += 2) t.push(n);
						return t
					}),
					odd: c(function(t, e) {
						for (var n = 1; e > n; n += 2) t.push(n);
						return t
					}),
					lt: c(function(t, e, n) {
						for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
						return t
					}),
					gt: c(function(t, e, n) {
						for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
						return t
					})
				}
			}, C.pseudos.nth = C.pseudos.eq;
			for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[w] = s(w);
			for (w in {
				submit: !0,
				reset: !0
			}) C.pseudos[w] = u(w);
			return f.prototype = C.filters = C.pseudos, C.setFilters = new f, T = e.compile = function(t, e) {
				var n, r = [],
					i = [],
					o = z[t + " "];
				if (!o) {
					for (e || (e = h(t)), n = e.length; n--;) o = y(e[n]), o[q] ? r.push(o) : i.push(o);
					o = z(t, x(i, r))
				}
				return o
			}, k.sortStable = q.split("").sort(W).join("") === q, k.detectDuplicates = !! N, M(), k.sortDetached = i(function(t) {
				return 1 & t.compareDocumentPosition(j.createElement("div"))
			}), i(function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), k.attributes && i(function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || o("value", function(t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), i(function(t) {
				return null == t.getAttribute("disabled")
			}) || o(ne, function(t, e, n) {
				var r;
				return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
			}), e
		}(t);
		te.find = ie, te.expr = ie.selectors, te.expr[":"] = te.expr.pseudos, te.unique = ie.uniqueSort, te.text = ie.getText, te.isXMLDoc = ie.isXML, te.contains = ie.contains;
		var oe = te.expr.match.needsContext,
			ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			se = /^.[^:#\[\.,]*$/;
		te.filter = function(t, e, n) {
			var r = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? te.find.matchesSelector(r, t) ? [r] : [] : te.find.matches(t, te.grep(e, function(t) {
				return 1 === t.nodeType
			}))
		}, te.fn.extend({
			find: function(t) {
				var e, n = this.length,
					r = [],
					i = this;
				if ("string" != typeof t) return this.pushStack(te(t).filter(function() {
					for (e = 0; n > e; e++)
						if (te.contains(i[e], this)) return !0
				}));
				for (e = 0; n > e; e++) te.find(t, i[e], r);
				return r = this.pushStack(n > 1 ? te.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
			},
			filter: function(t) {
				return this.pushStack(r(this, t || [], !1))
			},
			not: function(t) {
				return this.pushStack(r(this, t || [], !0))
			},
			is: function(t) {
				return !!r(this, "string" == typeof t && oe.test(t) ? te(t) : t || [], !1).length
			}
		});
		var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			le = te.fn.init = function(t, e) {
				var n, r;
				if (!t) return this;
				if ("string" == typeof t) {
					if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
					if (n[1]) {
						if (e = e instanceof te ? e[0] : e, te.merge(this, te.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), ae.test(n[1]) && te.isPlainObject(e))
							for (n in e) te.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
						return this
					}
					return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = t, this
				}
				return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : te.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(te) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), te.makeArray(t, this))
			};
		le.prototype = te.fn, ue = te(K);
		var fe = /^(?:parents|prev(?:Until|All))/,
			he = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		te.extend({
			dir: function(t, e, n) {
				for (var r = [], i = void 0 !== n;
					(t = t[e]) && 9 !== t.nodeType;)
					if (1 === t.nodeType) {
						if (i && te(t).is(n)) break;
						r.push(t)
					}
				return r
			},
			sibling: function(t, e) {
				for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
				return n
			}
		}), te.fn.extend({
			has: function(t) {
				var e = te(t, this),
					n = e.length;
				return this.filter(function() {
					for (var t = 0; n > t; t++)
						if (te.contains(this, e[t])) return !0
				})
			},
			closest: function(t, e) {
				for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? te(t, e || this.context) : 0; i > r; r++)
					for (n = this[r]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && te.find.matchesSelector(n, t))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? te.unique(o) : o)
			},
			index: function(t) {
				return t ? "string" == typeof t ? W.call(te(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(t, e) {
				return this.pushStack(te.unique(te.merge(this.get(), te(t, e))))
			},
			addBack: function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), te.each({
			parent: function(t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			parents: function(t) {
				return te.dir(t, "parentNode")
			},
			parentsUntil: function(t, e, n) {
				return te.dir(t, "parentNode", n)
			},
			next: function(t) {
				return i(t, "nextSibling")
			},
			prev: function(t) {
				return i(t, "previousSibling")
			},
			nextAll: function(t) {
				return te.dir(t, "nextSibling")
			},
			prevAll: function(t) {
				return te.dir(t, "previousSibling")
			},
			nextUntil: function(t, e, n) {
				return te.dir(t, "nextSibling", n)
			},
			prevUntil: function(t, e, n) {
				return te.dir(t, "previousSibling", n)
			},
			siblings: function(t) {
				return te.sibling((t.parentNode || {}).firstChild, t)
			},
			children: function(t) {
				return te.sibling(t.firstChild)
			},
			contents: function(t) {
				return t.contentDocument || te.merge([], t.childNodes)
			}
		}, function(t, e) {
			te.fn[t] = function(n, r) {
				var i = te.map(this, e, n);
				return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = te.filter(r, i)), this.length > 1 && (he[t] || te.unique(i), fe.test(t) && i.reverse()), this.pushStack(i)
			}
		});
		var pe = /\S+/g,
			de = {};
		te.Callbacks = function(t) {
			t = "string" == typeof t ? de[t] || o(t) : te.extend({}, t);
			var e, n, r, i, a, s, u = [],
				c = !t.once && [],
				l = function(o) {
					for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
						if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
							e = !1;
							break
						}
					r = !1, u && (c ? c.length && l(c.shift()) : e ? u = [] : f.disable())
				}, f = {
					add: function() {
						if (u) {
							var n = u.length;
							! function o(e) {
								te.each(e, function(e, n) {
									var r = te.type(n);
									"function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
								})
							}(arguments), r ? a = u.length : e && (i = n, l(e))
						}
						return this
					},
					remove: function() {
						return u && te.each(arguments, function(t, e) {
							for (var n;
								(n = te.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
						}), this
					},
					has: function(t) {
						return t ? te.inArray(t, u) > -1 : !(!u || !u.length)
					},
					empty: function() {
						return u = [], a = 0, this
					},
					disable: function() {
						return u = c = e = void 0, this
					},
					disabled: function() {
						return !u
					},
					lock: function() {
						return c = void 0, e || f.disable(), this
					},
					locked: function() {
						return !c
					},
					fireWith: function(t, e) {
						return !u || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!n
					}
				};
			return f
		}, te.extend({
			Deferred: function(t) {
				var e = [
					["resolve", "done", te.Callbacks("once memory"), "resolved"],
					["reject", "fail", te.Callbacks("once memory"), "rejected"],
					["notify", "progress", te.Callbacks("memory")]
				],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments), this
						},
						then: function() {
							var t = arguments;
							return te.Deferred(function(n) {
								te.each(e, function(e, o) {
									var a = te.isFunction(t[e]) && t[e];
									i[o[1]](function() {
										var t = a && a.apply(this, arguments);
										t && te.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
									})
								}), t = null
							}).promise()
						},
						promise: function(t) {
							return null != t ? te.extend(t, r) : r
						}
					}, i = {};
				return r.pipe = r.then, te.each(e, function(t, o) {
					var a = o[2],
						s = o[3];
					r[o[1]] = a.add, s && a.add(function() {
						n = s
					}, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
						return i[o[0] + "With"](this === i ? r : this, arguments), this
					}, i[o[0] + "With"] = a.fireWith
				}), r.promise(i), t && t.call(i, i), i
			},
			when: function(t) {
				var e, n, r, i = 0,
					o = U.call(arguments),
					a = o.length,
					s = 1 !== a || t && te.isFunction(t.promise) ? a : 0,
					u = 1 === s ? t : te.Deferred(),
					c = function(t, n, r) {
						return function(i) {
							n[t] = this, r[t] = arguments.length > 1 ? U.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
						}
					};
				if (a > 1)
					for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && te.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, e)) : --s;
				return s || u.resolveWith(r, o), u.promise()
			}
		});
		var ge;
		te.fn.ready = function(t) {
			return te.ready.promise().done(t), this
		}, te.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(t) {
				t ? te.readyWait++ : te.ready(!0)
			},
			ready: function(t) {
				(t === !0 ? --te.readyWait : te.isReady) || (te.isReady = !0, t !== !0 && --te.readyWait > 0 || (ge.resolveWith(K, [te]), te.fn.trigger && te(K).trigger("ready").off("ready")))
			}
		}), te.ready.promise = function(e) {
			return ge || (ge = te.Deferred(), "complete" === K.readyState ? setTimeout(te.ready) : (K.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), ge.promise(e)
		}, te.ready.promise();
		var ve = te.access = function(t, e, n, r, i, o, a) {
			var s = 0,
				u = t.length,
				c = null == n;
			if ("object" === te.type(n)) {
				i = !0;
				for (s in n) te.access(t, e, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, te.isFunction(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
				return c.call(te(t), n)
			})), e))
				for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
			return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
		};
		te.acceptData = function(t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		}, s.uid = 1, s.accepts = te.acceptData, s.prototype = {
			key: function(t) {
				if (!s.accepts(t)) return 0;
				var e = {}, n = t[this.expando];
				if (!n) {
					n = s.uid++;
					try {
						e[this.expando] = {
							value: n
						}, Object.defineProperties(t, e)
					} catch (r) {
						e[this.expando] = n, te.extend(t, e)
					}
				}
				return this.cache[n] || (this.cache[n] = {}), n
			},
			set: function(t, e, n) {
				var r, i = this.key(t),
					o = this.cache[i];
				if ("string" == typeof e) o[e] = n;
				else if (te.isEmptyObject(o)) te.extend(this.cache[i], e);
				else
					for (r in e) o[r] = e[r];
				return o
			},
			get: function(t, e) {
				var n = this.cache[this.key(t)];
				return void 0 === e ? n : n[e]
			},
			access: function(t, e, n) {
				var r;
				return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, te.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
			},
			remove: function(t, e) {
				var n, r, i, o = this.key(t),
					a = this.cache[o];
				if (void 0 === e) this.cache[o] = {};
				else {
					te.isArray(e) ? r = e.concat(e.map(te.camelCase)) : (i = te.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
					for (; n--;) delete a[r[n]]
				}
			},
			hasData: function(t) {
				return !te.isEmptyObject(this.cache[t[this.expando]] || {})
			},
			discard: function(t) {
				t[this.expando] && delete this.cache[t[this.expando]]
			}
		};
		var me = new s,
			ye = new s,
			xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			$e = /([A-Z])/g;
		te.extend({
			hasData: function(t) {
				return ye.hasData(t) || me.hasData(t)
			},
			data: function(t, e, n) {
				return ye.access(t, e, n)
			},
			removeData: function(t, e) {
				ye.remove(t, e)
			},
			_data: function(t, e, n) {
				return me.access(t, e, n)
			},
			_removeData: function(t, e) {
				me.remove(t, e)
			}
		}), te.fn.extend({
			data: function(t, e) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === t) {
					if (this.length && (i = ye.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
						for (n = a.length; n--;) r = a[n].name, 0 === r.indexOf("data-") && (r = te.camelCase(r.slice(5)), u(o, r, i[r]));
						me.set(o, "hasDataAttrs", !0)
					}
					return i
				}
				return "object" == typeof t ? this.each(function() {
					ye.set(this, t)
				}) : ve(this, function(e) {
					var n, r = te.camelCase(t);
					if (o && void 0 === e) {
						if (n = ye.get(o, t), void 0 !== n) return n;
						if (n = ye.get(o, r), void 0 !== n) return n;
						if (n = u(o, r, void 0), void 0 !== n) return n
					} else this.each(function() {
						var n = ye.get(this, r);
						ye.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
					})
				}, null, e, arguments.length > 1, null, !0)
			},
			removeData: function(t) {
				return this.each(function() {
					ye.remove(this, t)
				})
			}
		}), te.extend({
			queue: function(t, e, n) {
				var r;
				return t ? (e = (e || "fx") + "queue", r = me.get(t, e), n && (!r || te.isArray(n) ? r = me.access(t, e, te.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function(t, e) {
				e = e || "fx";
				var n = te.queue(t, e),
					r = n.length,
					i = n.shift(),
					o = te._queueHooks(t, e),
					a = function() {
						te.dequeue(t, e)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(t, e) {
				var n = e + "queueHooks";
				return me.get(t, n) || me.access(t, n, {
					empty: te.Callbacks("once memory").add(function() {
						me.remove(t, [e + "queue", n])
					})
				})
			}
		}), te.fn.extend({
			queue: function(t, e) {
				var n = 2;
				return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? te.queue(this[0], t) : void 0 === e ? this : this.each(function() {
					var n = te.queue(this, t, e);
					te._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && te.dequeue(this, t)
				})
			},
			dequeue: function(t) {
				return this.each(function() {
					te.dequeue(this, t)
				})
			},
			clearQueue: function(t) {
				return this.queue(t || "fx", [])
			},
			promise: function(t, e) {
				var n, r = 1,
					i = te.Deferred(),
					o = this,
					a = this.length,
					s = function() {
						--r || i.resolveWith(o, [o])
					};
				for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = me.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(e)
			}
		});
		var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			we = ["Top", "Right", "Bottom", "Left"],
			ke = function(t, e) {
				return t = e || t, "none" === te.css(t, "display") || !te.contains(t.ownerDocument, t)
			}, Ce = /^(?:checkbox|radio)$/i;
		! function() {
			var t = K.createDocumentFragment(),
				e = t.appendChild(K.createElement("div"));
			e.innerHTML = "<input type='radio' checked='checked' name='t'/>", J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
		}();
		var Se = "undefined";
		J.focusinBubbles = "onfocusin" in t;
		var _e = /^key/,
			Te = /^(?:mouse|contextmenu)|click/,
			Ee = /^(?:focusinfocus|focusoutblur)$/,
			Ae = /^([^.]*)(?:\.(.+)|)$/;
		te.event = {
			global: {},
			add: function(t, e, n, r, i) {
				var o, a, s, u, c, l, f, h, p, d, g, v = me.get(t);
				if (v)
					for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = te.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
						return typeof te !== Se && te.event.triggered !== e.type ? te.event.dispatch.apply(t, arguments) : void 0
					}), e = (e || "").match(pe) || [""], c = e.length; c--;) s = Ae.exec(e[c]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p && (f = te.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = te.event.special[p] || {}, l = te.extend({
						type: p,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && te.expr.match.needsContext.test(i),
						namespace: d.join(".")
					}, o), (h = u[p]) || (h = u[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), te.event.global[p] = !0)
			},
			remove: function(t, e, n, r, i) {
				var o, a, s, u, c, l, f, h, p, d, g, v = me.hasData(t) && me.get(t);
				if (v && (u = v.events)) {
					for (e = (e || "").match(pe) || [""], c = e.length; c--;)
						if (s = Ae.exec(e[c]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p) {
							for (f = te.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) l = h[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(t, l));
							a && !h.length && (f.teardown && f.teardown.call(t, d, v.handle) !== !1 || te.removeEvent(t, p, v.handle), delete u[p])
						} else
							for (p in u) te.event.remove(t, p + e[c], n, r, !0);
					te.isEmptyObject(u) && (delete v.handle, me.remove(t, "events"))
				}
			},
			trigger: function(e, n, r, i) {
				var o, a, s, u, c, l, f, h = [r || K],
					p = Y.call(e, "type") ? e.type : e,
					d = Y.call(e, "namespace") ? e.namespace.split(".") : [];
				if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(p + te.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[te.expando] ? e : new te.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : te.makeArray(n, [e]), f = te.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
					if (!i && !f.noBubble && !te.isWindow(r)) {
						for (u = f.delegateType || p, Ee.test(u + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
						s === (r.ownerDocument || K) && h.push(s.defaultView || s.parentWindow || t)
					}
					for (o = 0;
						(a = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || p, l = (me.get(a, "events") || {})[e.type] && me.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && te.acceptData(a) && (e.result = l.apply(a, n), e.result === !1 && e.preventDefault());
					return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !te.acceptData(r) || c && te.isFunction(r[p]) && !te.isWindow(r) && (s = r[c], s && (r[c] = null), te.event.triggered = p, r[p](), te.event.triggered = void 0, s && (r[c] = s)), e.result
				}
			},
			dispatch: function(t) {
				t = te.event.fix(t);
				var e, n, r, i, o, a = [],
					s = U.call(arguments),
					u = (me.get(this, "events") || {})[t.type] || [],
					c = te.event.special[t.type] || {};
				if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
					for (a = te.event.handlers.call(this, t, u), e = 0;
						(i = a[e++]) && !t.isPropagationStopped();)
						for (t.currentTarget = i.elem, n = 0;
							(o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((te.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
					return c.postDispatch && c.postDispatch.call(this, t), t.result
				}
			},
			handlers: function(t, e) {
				var n, r, i, o, a = [],
					s = e.delegateCount,
					u = t.target;
				if (s && u.nodeType && (!t.button || "click" !== t.type))
					for (; u !== this; u = u.parentNode || this)
						if (u.disabled !== !0 || "click" !== t.type) {
							for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? te(i, this).index(u) >= 0 : te.find(i, this, null, [u]).length), r[i] && r.push(o);
							r.length && a.push({
								elem: u,
								handlers: r
							})
						}
				return s < e.length && a.push({
					elem: this,
					handlers: e.slice(s)
				}), a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(t, e) {
					return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(t, e) {
					var n, r, i, o = e.button;
					return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
				}
			},
			fix: function(t) {
				if (t[te.expando]) return t;
				var e, n, r, i = t.type,
					o = t,
					a = this.fixHooks[i];
				for (a || (this.fixHooks[i] = a = Te.test(i) ? this.mouseHooks : _e.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new te.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
				return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						return this !== f() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === f() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return "checkbox" === this.type && this.click && te.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function(t) {
						return te.nodeName(t.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(t) {
						void 0 !== t.result && (t.originalEvent.returnValue = t.result)
					}
				}
			},
			simulate: function(t, e, n, r) {
				var i = te.extend(new te.Event, n, {
					type: t,
					isSimulated: !0,
					originalEvent: {}
				});
				r ? te.event.trigger(i, null, e) : te.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
			}
		}, te.removeEvent = function(t, e, n) {
			t.removeEventListener && t.removeEventListener(e, n, !1)
		}, te.Event = function(t, e) {
			return this instanceof te.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.getPreventDefault && t.getPreventDefault() ? c : l) : this.type = t, e && te.extend(this, e), this.timeStamp = t && t.timeStamp || te.now(), void(this[te.expando] = !0)) : new te.Event(t, e)
		}, te.Event.prototype = {
			isDefaultPrevented: l,
			isPropagationStopped: l,
			isImmediatePropagationStopped: l,
			preventDefault: function() {
				var t = this.originalEvent;
				this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
			},
			stopPropagation: function() {
				var t = this.originalEvent;
				this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = c, this.stopPropagation()
			}
		}, te.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(t, e) {
			te.event.special[t] = {
				delegateType: e,
				bindType: e,
				handle: function(t) {
					var n, r = this,
						i = t.relatedTarget,
						o = t.handleObj;
					return (!i || i !== r && !te.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
				}
			}
		}), J.focusinBubbles || te.each({
			focus: "focusin",
			blur: "focusout"
		}, function(t, e) {
			var n = function(t) {
				te.event.simulate(e, t.target, te.event.fix(t), !0)
			};
			te.event.special[e] = {
				setup: function() {
					var r = this.ownerDocument || this,
						i = me.access(r, e);
					i || r.addEventListener(t, n, !0), me.access(r, e, (i || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						i = me.access(r, e) - 1;
					i ? me.access(r, e, i) : (r.removeEventListener(t, n, !0), me.remove(r, e))
				}
			}
		}), te.fn.extend({
			on: function(t, e, n, r, i) {
				var o, a;
				if ("object" == typeof t) {
					"string" != typeof e && (n = n || e, e = void 0);
					for (a in t) this.on(a, e, n, t[a], i);
					return this
				}
				if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = l;
				else if (!r) return this;
				return 1 === i && (o = r, r = function(t) {
					return te().off(t), o.apply(this, arguments)
				}, r.guid = o.guid || (o.guid = te.guid++)), this.each(function() {
					te.event.add(this, t, r, n, e)
				})
			},
			one: function(t, e, n, r) {
				return this.on(t, e, n, r, 1)
			},
			off: function(t, e, n) {
				var r, i;
				if (t && t.preventDefault && t.handleObj) return r = t.handleObj, te(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof t) {
					for (i in t) this.off(i, e, t[i]);
					return this
				}
				return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = l), this.each(function() {
					te.event.remove(this, t, n, e)
				})
			},
			trigger: function(t, e) {
				return this.each(function() {
					te.event.trigger(t, e, this)
				})
			},
			triggerHandler: function(t, e) {
				var n = this[0];
				return n ? te.event.trigger(t, e, n, !0) : void 0
			}
		});
		var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Me = /<([\w:]+)/,
			je = /<|&#?\w+;/,
			Oe = /<(?:script|style|link)/i,
			Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
			De = /^$|\/(?:java|ecma)script/i,
			Le = /^true\/(.*)/,
			Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Be = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, te.extend({
			clone: function(t, e, n) {
				var r, i, o, a, s = t.cloneNode(!0),
					u = te.contains(t.ownerDocument, t);
				if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || te.isXMLDoc(t)))
					for (a = m(s), o = m(t), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
				if (e)
					if (n)
						for (o = o || m(t), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
					else v(t, s);
				return a = m(s, "script"), a.length > 0 && g(a, !u && m(t, "script")), s
			},
			buildFragment: function(t, e, n, r) {
				for (var i, o, a, s, u, c, l = e.createDocumentFragment(), f = [], h = 0, p = t.length; p > h; h++)
					if (i = t[h], i || 0 === i)
						if ("object" === te.type(i)) te.merge(f, i.nodeType ? [i] : i);
						else
				if (je.test(i)) {
					for (o = o || l.appendChild(e.createElement("div")), a = (Me.exec(i) || ["", ""])[1].toLowerCase(), s = Be[a] || Be._default, o.innerHTML = s[1] + i.replace(Ne, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
					te.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
				} else f.push(e.createTextNode(i));
				for (l.textContent = "", h = 0; i = f[h++];)
					if ((!r || -1 === te.inArray(i, r)) && (u = te.contains(i.ownerDocument, i), o = m(l.appendChild(i), "script"), u && g(o), n))
						for (c = 0; i = o[c++];) De.test(i.type || "") && n.push(i);
				return l
			},
			cleanData: function(t) {
				for (var e, n, r, i, o, a, s = te.event.special, u = 0; void 0 !== (n = t[u]); u++) {
					if (te.acceptData(n) && (o = n[me.expando], o && (e = me.cache[o]))) {
						if (r = Object.keys(e.events || {}), r.length)
							for (a = 0; void 0 !== (i = r[a]); a++) s[i] ? te.event.remove(n, i) : te.removeEvent(n, i, e.handle);
						me.cache[o] && delete me.cache[o]
					}
					delete ye.cache[n[ye.expando]]
				}
			}
		}), te.fn.extend({
			text: function(t) {
				return ve(this, function(t) {
					return void 0 === t ? te.text(this) : this.empty().each(function() {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
					})
				}, null, t, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = h(this, t);
						e.appendChild(t)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = h(this, t);
						e.insertBefore(t, e.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
				})
			},
			remove: function(t, e) {
				for (var n, r = t ? te.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || te.cleanData(m(n)), n.parentNode && (e && te.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (te.cleanData(m(t, !1)), t.textContent = "");
				return this
			},
			clone: function(t, e) {
				return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
					return te.clone(this, t, e)
				})
			},
			html: function(t) {
				return ve(this, function(t) {
					var e = this[0] || {}, n = 0,
						r = this.length;
					if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
					if ("string" == typeof t && !Oe.test(t) && !Be[(Me.exec(t) || ["", ""])[1].toLowerCase()]) {
						t = t.replace(Ne, "<$1></$2>");
						try {
							for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (te.cleanData(m(e, !1)), e.innerHTML = t);
							e = 0
						} catch (i) {}
					}
					e && this.empty().append(t)
				}, null, t, arguments.length)
			},
			replaceWith: function() {
				var t = arguments[0];
				return this.domManip(arguments, function(e) {
					t = this.parentNode, te.cleanData(m(this)), t && t.replaceChild(e, this)
				}), t && (t.length || t.nodeType) ? this : this.remove()
			},
			detach: function(t) {
				return this.remove(t, !0)
			},
			domManip: function(t, e) {
				t = V.apply([], t);
				var n, r, i, o, a, s, u = 0,
					c = this.length,
					l = this,
					f = c - 1,
					h = t[0],
					g = te.isFunction(h);
				if (g || c > 1 && "string" == typeof h && !J.checkClone && Pe.test(h)) return this.each(function(n) {
					var r = l.eq(n);
					g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
				});
				if (c && (n = te.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
					for (i = te.map(m(n, "script"), p), o = i.length; c > u; u++) a = n, u !== f && (a = te.clone(a, !0, !0), o && te.merge(i, m(a, "script"))), e.call(this[u], a, u);
					if (o)
						for (s = i[i.length - 1].ownerDocument, te.map(i, d), u = 0; o > u; u++) a = i[u], De.test(a.type || "") && !me.access(a, "globalEval") && te.contains(s, a) && (a.src ? te._evalUrl && te._evalUrl(a.src) : te.globalEval(a.textContent.replace(Re, "")))
				}
				return this
			}
		}), te.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(t, e) {
			te.fn[t] = function(t) {
				for (var n, r = [], i = te(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), te(i[a])[e](n), z.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var qe, Fe = {}, Ie = /^margin/,
			He = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
			Ue = function(t) {
				return t.ownerDocument.defaultView.getComputedStyle(t, null)
			};
		! function() {
			function e() {
				s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(a);
				var e = t.getComputedStyle(s, null);
				n = "1%" !== e.top, r = "4px" === e.width, o.removeChild(a)
			}
			var n, r, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				o = K.documentElement,
				a = K.createElement("div"),
				s = K.createElement("div");
			s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(s), t.getComputedStyle && te.extend(J, {
				pixelPosition: function() {
					return e(), n
				},
				boxSizingReliable: function() {
					return null == r && e(), r
				},
				reliableMarginRight: function() {
					var e, n = s.appendChild(K.createElement("div"));
					return n.style.cssText = s.style.cssText = i, n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(a), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(a), s.innerHTML = "", e
				}
			})
		}(), te.swap = function(t, e, n, r) {
			var i, o, a = {};
			for (o in e) a[o] = t.style[o], t.style[o] = e[o];
			i = n.apply(t, r || []);
			for (o in e) t.style[o] = a[o];
			return i
		};
		var Ve = /^(none|table(?!-c[ea]).+)/,
			ze = new RegExp("^(" + be + ")(.*)$", "i"),
			We = new RegExp("^([+-])=(" + be + ")", "i"),
			Xe = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			}, Ge = {
				letterSpacing: 0,
				fontWeight: 400
			}, Ye = ["Webkit", "O", "Moz", "ms"];
		te.extend({
			cssHooks: {
				opacity: {
					get: function(t, e) {
						if (e) {
							var n = b(t, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function(t, e, n, r) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var i, o, a, s = te.camelCase(e),
						u = t.style;
					return e = te.cssProps[s] || (te.cssProps[s] = k(u, s)), a = te.cssHooks[e] || te.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = We.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(te.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || te.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = "", u[e] = n)), void 0)
				}
			},
			css: function(t, e, n, r) {
				var i, o, a, s = te.camelCase(e);
				return e = te.cssProps[s] || (te.cssProps[s] = k(t.style, s)), a = te.cssHooks[e] || te.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = b(t, e, r)), "normal" === i && e in Ge && (i = Ge[e]), "" === n || n ? (o = parseFloat(i), n === !0 || te.isNumeric(o) ? o || 0 : i) : i
			}
		}), te.each(["height", "width"], function(t, e) {
			te.cssHooks[e] = {
				get: function(t, n, r) {
					return n ? 0 === t.offsetWidth && Ve.test(te.css(t, "display")) ? te.swap(t, Xe, function() {
						return _(t, e, r)
					}) : _(t, e, r) : void 0
				},
				set: function(t, n, r) {
					var i = r && Ue(t);
					return C(t, n, r ? S(t, e, r, "border-box" === te.css(t, "boxSizing", !1, i), i) : 0)
				}
			}
		}), te.cssHooks.marginRight = w(J.reliableMarginRight, function(t, e) {
			return e ? te.swap(t, {
				display: "inline-block"
			}, b, [t, "marginRight"]) : void 0
		}), te.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(t, e) {
			te.cssHooks[t + e] = {
				expand: function(n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + we[r] + e] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, Ie.test(t) || (te.cssHooks[t + e].set = C)
		}), te.fn.extend({
			css: function(t, e) {
				return ve(this, function(t, e, n) {
					var r, i, o = {}, a = 0;
					if (te.isArray(e)) {
						for (r = Ue(t), i = e.length; i > a; a++) o[e[a]] = te.css(t, e[a], !1, r);
						return o
					}
					return void 0 !== n ? te.style(t, e, n) : te.css(t, e)
				}, t, e, arguments.length > 1)
			},
			show: function() {
				return T(this, !0)
			},
			hide: function() {
				return T(this)
			},
			toggle: function(t) {
				return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
					ke(this) ? te(this).show() : te(this).hide()
				})
			}
		}), te.Tween = E, E.prototype = {
			constructor: E,
			init: function(t, e, n, r, i, o) {
				this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (te.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var t = E.propHooks[this.prop];
				return t && t.get ? t.get(this) : E.propHooks._default.get(this)
			},
			run: function(t) {
				var e, n = E.propHooks[this.prop];
				return this.pos = e = this.options.duration ? te.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
			}
		}, E.prototype.init.prototype = E.prototype, E.propHooks = {
			_default: {
				get: function(t) {
					var e;
					return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = te.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
				},
				set: function(t) {
					te.fx.step[t.prop] ? te.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[te.cssProps[t.prop]] || te.cssHooks[t.prop]) ? te.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
				}
			}
		}, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
			set: function(t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, te.easing = {
			linear: function(t) {
				return t
			},
			swing: function(t) {
				return .5 - Math.cos(t * Math.PI) / 2
			}
		}, te.fx = E.prototype.init, te.fx.step = {};
		var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
			Ze = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
			tn = /queueHooks$/,
			en = [j],
			nn = {
				"*": [
					function(t, e) {
						var n = this.createTween(t, e),
							r = n.cur(),
							i = Ze.exec(e),
							o = i && i[3] || (te.cssNumber[t] ? "" : "px"),
							a = (te.cssNumber[t] || "px" !== o && +r) && Ze.exec(te.css(n.elem, t)),
							s = 1,
							u = 20;
						if (a && a[3] !== o) {
							o = o || a[3], i = i || [], a = +r || 1;
							do s = s || ".5", a /= s, te.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
						}
						return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
					}
				]
			};
		te.Animation = te.extend(P, {
			tweener: function(t, e) {
				te.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var n, r = 0, i = t.length; i > r; r++) n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
			},
			prefilter: function(t, e) {
				e ? en.unshift(t) : en.push(t)
			}
		}), te.speed = function(t, e, n) {
			var r = t && "object" == typeof t ? te.extend({}, t) : {
				complete: n || !n && e || te.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !te.isFunction(e) && e
			};
			return r.duration = te.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in te.fx.speeds ? te.fx.speeds[r.duration] : te.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				te.isFunction(r.old) && r.old.call(this), r.queue && te.dequeue(this, r.queue)
			}, r
		}, te.fn.extend({
			fadeTo: function(t, e, n, r) {
				return this.filter(ke).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, n, r)
			},
			animate: function(t, e, n, r) {
				var i = te.isEmptyObject(t),
					o = te.speed(e, n, r),
					a = function() {
						var e = P(this, te.extend({}, t), o);
						(i || me.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(t, e, n) {
				var r = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
					var e = !0,
						i = null != t && t + "queueHooks",
						o = te.timers,
						a = me.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && tn.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
					(e || !n) && te.dequeue(this, t)
				})
			},
			finish: function(t) {
				return t !== !1 && (t = t || "fx"), this.each(function() {
					var e, n = me.get(this),
						r = n[t + "queue"],
						i = n[t + "queueHooks"],
						o = te.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, te.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
					for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
					delete n.finish
				})
			}
		}), te.each(["toggle", "show", "hide"], function(t, e) {
			var n = te.fn[e];
			te.fn[e] = function(t, r, i) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
			}
		}), te.each({
			slideDown: N("show"),
			slideUp: N("hide"),
			slideToggle: N("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			te.fn[t] = function(t, n, r) {
				return this.animate(e, t, n, r)
			}
		}), te.timers = [], te.fx.tick = function() {
			var t, e = 0,
				n = te.timers;
			for (Qe = te.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
			n.length || te.fx.stop(), Qe = void 0
		}, te.fx.timer = function(t) {
			te.timers.push(t), t() ? te.fx.start() : te.timers.pop()
		}, te.fx.interval = 13, te.fx.start = function() {
			Je || (Je = setInterval(te.fx.tick, te.fx.interval))
		}, te.fx.stop = function() {
			clearInterval(Je), Je = null
		}, te.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, te.fn.delay = function(t, e) {
			return t = te.fx ? te.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
				var r = setTimeout(e, t);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		function() {
			var t = K.createElement("input"),
				e = K.createElement("select"),
				n = e.appendChild(K.createElement("option"));
			t.type = "checkbox", J.checkOn = "" !== t.value, J.optSelected = n.selected, e.disabled = !0, J.optDisabled = !n.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", J.radioValue = "t" === t.value
		}();
		var rn, on, an = te.expr.attrHandle;
		te.fn.extend({
			attr: function(t, e) {
				return ve(this, te.attr, t, e, arguments.length > 1)
			},
			removeAttr: function(t) {
				return this.each(function() {
					te.removeAttr(this, t)
				})
			}
		}), te.extend({
			attr: function(t, e, n) {
				var r, i, o = t.nodeType;
				if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Se ? te.prop(t, e, n) : (1 === o && te.isXMLDoc(t) || (e = e.toLowerCase(), r = te.attrHooks[e] || (te.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = te.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void te.removeAttr(t, e))
			},
			removeAttr: function(t, e) {
				var n, r, i = 0,
					o = e && e.match(pe);
				if (o && 1 === t.nodeType)
					for (; n = o[i++];) r = te.propFix[n] || n, te.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
			},
			attrHooks: {
				type: {
					set: function(t, e) {
						if (!J.radioValue && "radio" === e && te.nodeName(t, "input")) {
							var n = t.value;
							return t.setAttribute("type", e), n && (t.value = n), e
						}
					}
				}
			}
		}), on = {
			set: function(t, e, n) {
				return e === !1 ? te.removeAttr(t, n) : t.setAttribute(n, n), n
			}
		}, te.each(te.expr.match.bool.source.match(/\w+/g), function(t, e) {
			var n = an[e] || te.find.attr;
			an[e] = function(t, e, r) {
				var i, o;
				return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o), i
			}
		});
		var sn = /^(?:input|select|textarea|button)$/i;
		te.fn.extend({
			prop: function(t, e) {
				return ve(this, te.prop, t, e, arguments.length > 1)
			},
			removeProp: function(t) {
				return this.each(function() {
					delete this[te.propFix[t] || t]
				})
			}
		}), te.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(t, e, n) {
				var r, i, o, a = t.nodeType;
				if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !te.isXMLDoc(t), o && (e = te.propFix[e] || e, i = te.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
			},
			propHooks: {
				tabIndex: {
					get: function(t) {
						return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
					}
				}
			}
		}), J.optSelected || (te.propHooks.selected = {
			get: function(t) {
				var e = t.parentNode;
				return e && e.parentNode && e.parentNode.selectedIndex, null
			}
		}), te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			te.propFix[this.toLowerCase()] = this
		});
		var un = /[\t\r\n\f]/g;
		te.fn.extend({
			addClass: function(t) {
				var e, n, r, i, o, a, s = "string" == typeof t && t,
					u = 0,
					c = this.length;
				if (te.isFunction(t)) return this.each(function(e) {
					te(this).addClass(t.call(this, e, this.className))
				});
				if (s)
					for (e = (t || "").match(pe) || []; c > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
							for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							a = te.trim(r), n.className !== a && (n.className = a)
						}
				return this
			},
			removeClass: function(t) {
				var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
					u = 0,
					c = this.length;
				if (te.isFunction(t)) return this.each(function(e) {
					te(this).removeClass(t.call(this, e, this.className))
				});
				if (s)
					for (e = (t || "").match(pe) || []; c > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
							for (o = 0; i = e[o++];)
								for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
							a = t ? te.trim(r) : "", n.className !== a && (n.className = a)
						}
				return this
			},
			toggleClass: function(t, e) {
				var n = typeof t;
				return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(te.isFunction(t) ? function(n) {
					te(this).toggleClass(t.call(this, n, this.className, e), e)
				} : function() {
					if ("string" === n)
						for (var e, r = 0, i = te(this), o = t.match(pe) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
					else(n === Se || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : me.get(this, "__className__") || "")
				})
			},
			hasClass: function(t) {
				for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
				return !1
			}
		});
		var cn = /\r/g;
		te.fn.extend({
			val: function(t) {
				var e, n, r, i = this[0]; {
					if (arguments.length) return r = te.isFunction(t), this.each(function(n) {
						var i;
						1 === this.nodeType && (i = r ? t.call(this, n, te(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : te.isArray(i) && (i = te.map(i, function(t) {
							return null == t ? "" : t + ""
						})), e = te.valHooks[this.type] || te.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
					});
					if (i) return e = te.valHooks[i.type] || te.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
				}
			}
		}), te.extend({
			valHooks: {
				select: {
					get: function(t) {
						for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
							if (n = r[u], !(!n.selected && u !== i || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && te.nodeName(n.parentNode, "optgroup"))) {
								if (e = te(n).val(), o) return e;
								a.push(e)
							}
						return a
					},
					set: function(t, e) {
						for (var n, r, i = t.options, o = te.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = te.inArray(te(r).val(), o) >= 0) && (n = !0);
						return n || (t.selectedIndex = -1), o
					}
				}
			}
		}), te.each(["radio", "checkbox"], function() {
			te.valHooks[this] = {
				set: function(t, e) {
					return te.isArray(e) ? t.checked = te.inArray(te(t).val(), e) >= 0 : void 0
				}
			}, J.checkOn || (te.valHooks[this].get = function(t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		}), te.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
			te.fn[e] = function(t, n) {
				return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
			}
		}), te.fn.extend({
			hover: function(t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			},
			bind: function(t, e, n) {
				return this.on(t, null, e, n)
			},
			unbind: function(t, e) {
				return this.off(t, null, e)
			},
			delegate: function(t, e, n, r) {
				return this.on(e, t, n, r)
			},
			undelegate: function(t, e, n) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
			}
		});
		var ln = te.now(),
			fn = /\?/;
		te.parseJSON = function(t) {
			return JSON.parse(t + "")
		}, te.parseXML = function(t) {
			var e, n;
			if (!t || "string" != typeof t) return null;
			try {
				n = new DOMParser, e = n.parseFromString(t, "text/xml")
			} catch (r) {
				e = void 0
			}
			return (!e || e.getElementsByTagName("parsererror").length) && te.error("Invalid XML: " + t), e
		};
		var hn, pn, dn = /#.*$/,
			gn = /([?&])_=[^&]*/,
			vn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			yn = /^(?:GET|HEAD)$/,
			xn = /^\/\//,
			$n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			bn = {}, wn = {}, kn = "*/".concat("*");
		try {
			pn = location.href
		} catch (Cn) {
			pn = K.createElement("a"), pn.href = "", pn = pn.href
		}
		hn = $n.exec(pn.toLowerCase()) || [], te.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: pn,
				type: "GET",
				isLocal: mn.test(hn[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": kn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": te.parseJSON,
					"text xml": te.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(t, e) {
				return e ? R(R(t, te.ajaxSettings), e) : R(te.ajaxSettings, t)
			},
			ajaxPrefilter: D(bn),
			ajaxTransport: D(wn),
			ajax: function(t, e) {
				function n(t, e, n, a) {
					var u, l, m, y, $, w = e;
					2 !== x && (x = 2, s && clearTimeout(s), r = void 0, o = a || "", b.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = B(f, b, n)), y = q(f, y, b, u), u ? (f.ifModified && ($ = b.getResponseHeader("Last-Modified"), $ && (te.lastModified[i] = $), $ = b.getResponseHeader("etag"), $ && (te.etag[i] = $)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, l = y.data, m = y.error, u = !m)) : (m = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", u ? d.resolveWith(h, [l, w, b]) : d.rejectWith(h, [b, w, m]), b.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? l : m]), g.fireWith(h, [b, w]), c && (p.trigger("ajaxComplete", [b, f]), --te.active || te.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (e = t, t = void 0), e = e || {};
				var r, i, o, a, s, u, c, l, f = te.ajaxSetup({}, e),
					h = f.context || f,
					p = f.context && (h.nodeType || h.jquery) ? te(h) : te.event,
					d = te.Deferred(),
					g = te.Callbacks("once memory"),
					v = f.statusCode || {}, m = {}, y = {}, x = 0,
					$ = "canceled",
					b = {
						readyState: 0,
						getResponseHeader: function(t) {
							var e;
							if (2 === x) {
								if (!a)
									for (a = {}; e = vn.exec(o);) a[e[1].toLowerCase()] = e[2];
								e = a[t.toLowerCase()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders: function() {
							return 2 === x ? o : null
						},
						setRequestHeader: function(t, e) {
							var n = t.toLowerCase();
							return x || (t = y[n] = y[n] || t, m[t] = e), this
						},
						overrideMimeType: function(t) {
							return x || (f.mimeType = t), this
						},
						statusCode: function(t) {
							var e;
							if (t)
								if (2 > x)
									for (e in t) v[e] = [v[e], t[e]];
								else b.always(t[b.status]);
							return this
						},
						abort: function(t) {
							var e = t || $;
							return r && r.abort(e), n(0, e), this
						}
					};
				if (d.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, f.url = ((t || f.url || pn) + "").replace(dn, "").replace(xn, hn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = te.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = $n.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === hn[1] && u[2] === hn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (hn[3] || ("http:" === hn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = te.param(f.data, f.traditional)), L(bn, f, e, b), 2 === x) return b;
				c = f.global, c && 0 === te.active++ && te.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = gn.test(i) ? i.replace(gn, "$1_=" + ln++) : i + (fn.test(i) ? "&" : "?") + "_=" + ln++)), f.ifModified && (te.lastModified[i] && b.setRequestHeader("If-Modified-Since", te.lastModified[i]), te.etag[i] && b.setRequestHeader("If-None-Match", te.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kn + "; q=0.01" : "") : f.accepts["*"]);
				for (l in f.headers) b.setRequestHeader(l, f.headers[l]);
				if (f.beforeSend && (f.beforeSend.call(h, b, f) === !1 || 2 === x)) return b.abort();
				$ = "abort";
				for (l in {
					success: 1,
					error: 1,
					complete: 1
				}) b[l](f[l]);
				if (r = L(wn, f, e, b)) {
					b.readyState = 1, c && p.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
						b.abort("timeout")
					}, f.timeout));
					try {
						x = 1, r.send(m, n)
					} catch (w) {
						if (!(2 > x)) throw w;
						n(-1, w)
					}
				} else n(-1, "No Transport");
				return b
			},
			getJSON: function(t, e, n) {
				return te.get(t, e, n, "json")
			},
			getScript: function(t, e) {
				return te.get(t, void 0, e, "script")
			}
		}), te.each(["get", "post"], function(t, e) {
			te[e] = function(t, n, r, i) {
				return te.isFunction(n) && (i = i || r, r = n, n = void 0), te.ajax({
					url: t,
					type: e,
					dataType: i,
					data: n,
					success: r
				})
			}
		}), te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
			te.fn[e] = function(t) {
				return this.on(e, t)
			}
		}), te._evalUrl = function(t) {
			return te.ajax({
				url: t,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, te.fn.extend({
			wrapAll: function(t) {
				var e;
				return te.isFunction(t) ? this.each(function(e) {
					te(this).wrapAll(t.call(this, e))
				}) : (this[0] && (e = te(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstElementChild;) t = t.firstElementChild;
					return t
				}).append(this)), this)
			},
			wrapInner: function(t) {
				return this.each(te.isFunction(t) ? function(e) {
					te(this).wrapInner(t.call(this, e))
				} : function() {
					var e = te(this),
						n = e.contents();
					n.length ? n.wrapAll(t) : e.append(t)
				})
			},
			wrap: function(t) {
				var e = te.isFunction(t);
				return this.each(function(n) {
					te(this).wrapAll(e ? t.call(this, n) : t)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					te.nodeName(this, "body") || te(this).replaceWith(this.childNodes)
				}).end()
			}
		}), te.expr.filters.hidden = function(t) {
			return t.offsetWidth <= 0 && t.offsetHeight <= 0
		}, te.expr.filters.visible = function(t) {
			return !te.expr.filters.hidden(t)
		};
		var Sn = /%20/g,
			_n = /\[\]$/,
			Tn = /\r?\n/g,
			En = /^(?:submit|button|image|reset|file)$/i,
			An = /^(?:input|select|textarea|keygen)/i;
		te.param = function(t, e) {
			var n, r = [],
				i = function(t, e) {
					e = te.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
			if (void 0 === e && (e = te.ajaxSettings && te.ajaxSettings.traditional), te.isArray(t) || t.jquery && !te.isPlainObject(t)) te.each(t, function() {
				i(this.name, this.value)
			});
			else
				for (n in t) F(n, t[n], e, i);
			return r.join("&").replace(Sn, "+")
		}, te.fn.extend({
			serialize: function() {
				return te.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var t = te.prop(this, "elements");
					return t ? te.makeArray(t) : this
				}).filter(function() {
					var t = this.type;
					return this.name && !te(this).is(":disabled") && An.test(this.nodeName) && !En.test(t) && (this.checked || !Ce.test(t))
				}).map(function(t, e) {
					var n = te(this).val();
					return null == n ? null : te.isArray(n) ? te.map(n, function(t) {
						return {
							name: e.name,
							value: t.replace(Tn, "\r\n")
						}
					}) : {
						name: e.name,
						value: n.replace(Tn, "\r\n")
					}
				}).get()
			}
		}), te.ajaxSettings.xhr = function() {
			try {
				return new XMLHttpRequest
			} catch (t) {}
		};
		var Nn = 0,
			Mn = {}, jn = {
				0: 200,
				1223: 204
			}, On = te.ajaxSettings.xhr();
		t.ActiveXObject && te(t).on("unload", function() {
			for (var t in Mn) Mn[t]()
		}), J.cors = !! On && "withCredentials" in On, J.ajax = On = !! On, te.ajaxTransport(function(t) {
			var e;
			return J.cors || On && !t.crossDomain ? {
				send: function(n, r) {
					var i, o = t.xhr(),
						a = ++Nn;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
						for (i in t.xhrFields) o[i] = t.xhrFields[i];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (i in n) o.setRequestHeader(i, n[i]);
					e = function(t) {
						return function() {
							e && (delete Mn[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(jn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
								text: o.responseText
							} : void 0, o.getAllResponseHeaders()))
						}
					}, o.onload = e(), o.onerror = e("error"), e = Mn[a] = e("abort"), o.send(t.hasContent && t.data || null)
				},
				abort: function() {
					e && e()
				}
			} : void 0
		}), te.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(t) {
					return te.globalEval(t), t
				}
			}
		}), te.ajaxPrefilter("script", function(t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
		}), te.ajaxTransport("script", function(t) {
			if (t.crossDomain) {
				var e, n;
				return {
					send: function(r, i) {
						e = te("<script>").prop({
							async: !0,
							charset: t.scriptCharset,
							src: t.url
						}).on("load error", n = function(t) {
							e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
						}), K.head.appendChild(e[0])
					},
					abort: function() {
						n && n()
					}
				}
			}
		});
		var Pn = [],
			Dn = /(=)\?(?=&|$)|\?\?/;
		te.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var t = Pn.pop() || te.expando + "_" + ln++;
				return this[t] = !0, t
			}
		}), te.ajaxPrefilter("json jsonp", function(e, n, r) {
			var i, o, a, s = e.jsonp !== !1 && (Dn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(e.data) && "data");
			return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = te.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Dn, "$1" + i) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
				return a || te.error(i + " was not called"), a[0]
			}, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
				a = arguments
			}, r.always(function() {
				t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Pn.push(i)), a && te.isFunction(o) && o(a[0]), a = o = void 0
			}), "script") : void 0
		}), te.parseHTML = function(t, e, n) {
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && (n = e, e = !1), e = e || K;
			var r = ae.exec(t),
				i = !n && [];
			return r ? [e.createElement(r[1])] : (r = te.buildFragment([t], e, i), i && i.length && te(i).remove(), te.merge([], r.childNodes))
		};
		var Ln = te.fn.load;
		te.fn.load = function(t, e, n) {
			if ("string" != typeof t && Ln) return Ln.apply(this, arguments);
			var r, i, o, a = this,
				s = t.indexOf(" ");
			return s >= 0 && (r = t.slice(s), t = t.slice(0, s)), te.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && te.ajax({
				url: t,
				type: i,
				dataType: "html",
				data: e
			}).done(function(t) {
				o = arguments, a.html(r ? te("<div>").append(te.parseHTML(t)).find(r) : t)
			}).complete(n && function(t, e) {
				a.each(n, o || [t.responseText, e, t])
			}), this
		}, te.expr.filters.animated = function(t) {
			return te.grep(te.timers, function(e) {
				return t === e.elem
			}).length
		};
		var Rn = t.document.documentElement;
		te.offset = {
			setOffset: function(t, e, n) {
				var r, i, o, a, s, u, c, l = te.css(t, "position"),
					f = te(t),
					h = {};
				"static" === l && (t.style.position = "relative"), s = f.offset(), o = te.css(t, "top"), u = te.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), te.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
			}
		}, te.fn.extend({
			offset: function(t) {
				if (arguments.length) return void 0 === t ? this : this.each(function(e) {
					te.offset.setOffset(this, t, e)
				});
				var e, n, r = this[0],
					i = {
						top: 0,
						left: 0
					}, o = r && r.ownerDocument;
				if (o) return e = o.documentElement, te.contains(e, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = I(o), {
					top: i.top + n.pageYOffset - e.clientTop,
					left: i.left + n.pageXOffset - e.clientLeft
				}) : i
			},
			position: function() {
				if (this[0]) {
					var t, e, n = this[0],
						r = {
							top: 0,
							left: 0
						};
					return "fixed" === te.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), te.nodeName(t[0], "html") || (r = t.offset()), r.top += te.css(t[0], "borderTopWidth", !0), r.left += te.css(t[0], "borderLeftWidth", !0)), {
						top: e.top - r.top - te.css(n, "marginTop", !0),
						left: e.left - r.left - te.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || Rn; t && !te.nodeName(t, "html") && "static" === te.css(t, "position");) t = t.offsetParent;
					return t || Rn
				})
			}
		}), te.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, n) {
			var r = "pageYOffset" === n;
			te.fn[e] = function(i) {
				return ve(this, function(e, i, o) {
					var a = I(e);
					return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
				}, e, i, arguments.length, null)
			}
		}), te.each(["top", "left"], function(t, e) {
			te.cssHooks[e] = w(J.pixelPosition, function(t, n) {
				return n ? (n = b(t, e), He.test(n) ? te(t).position()[e] + "px" : n) : void 0
			})
		}), te.each({
			Height: "height",
			Width: "width"
		}, function(t, e) {
			te.each({
				padding: "inner" + t,
				content: e,
				"": "outer" + t
			}, function(n, r) {
				te.fn[r] = function(r, i) {
					var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || i === !0 ? "margin" : "border");
					return ve(this, function(e, n, r) {
						var i;
						return te.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? te.css(e, n, a) : te.style(e, n, r, a)
					}, e, o ? r : void 0, o, null)
				}
			})
		}), te.fn.size = function() {
			return this.length
		}, te.fn.andSelf = te.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return te
		});
		var Bn = t.jQuery,
			qn = t.$;
		return te.noConflict = function(e) {
			return t.$ === te && (t.$ = qn), e && t.jQuery === te && (t.jQuery = Bn), te
		}, typeof e === Se && (t.jQuery = t.$ = te), te
	}),
	function(t, e, n) {
		function r(t) {
			return function() {
				var e, n, r = arguments[0],
					i = "[" + (t ? t + ":" : "") + r + "] ",
					o = arguments[1],
					a = arguments,
					s = function(t) {
						return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? JSON.stringify(t) : t
					};
				for (e = i + o.replace(/\{\d+\}/g, function(t) {
					var e, n = +t.slice(1, -1);
					return n + 2 < a.length ? (e = a[n + 2], "function" == typeof e ? e.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? H(e) : e) : t
				}), e = e + "\nhttp://errors.angularjs.org/1.2.13-build.2260+sha.2b73027/" + (t ? t + "/" : "") + r, n = 2; n < arguments.length; n++) e = e + (2 == n ? "?" : "&") + "p" + (n - 2) + "=" + encodeURIComponent(s(arguments[n]));
				return new Error(e)
			}
		}

		function i(t) {
			if (null == t || _(t)) return !1;
			var e = t.length;
			return 1 === t.nodeType && e ? !0 : $(t) || k(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
		}

		function o(t, e, n) {
			var r;
			if (t)
				if (C(t))
					for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r);
				else
			if (t.forEach && t.forEach !== o) t.forEach(e, n);
			else if (i(t))
				for (r = 0; r < t.length; r++) e.call(n, t[r], r);
			else
				for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r);
			return t
		}

		function a(t) {
			var e = [];
			for (var n in t) t.hasOwnProperty(n) && e.push(n);
			return e.sort()
		}

		function s(t, e, n) {
			for (var r = a(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
			return r
		}

		function u(t) {
			return function(e, n) {
				t(n, e)
			}
		}

		function c() {
			for (var t, e = br.length; e;) {
				if (e--, t = br[e].charCodeAt(0), 57 == t) return br[e] = "A", br.join("");
				if (90 != t) return br[e] = String.fromCharCode(t + 1), br.join("");
				br[e] = "0"
			}
			return br.unshift("0"), br.join("")
		}

		function l(t, e) {
			e ? t.$$hashKey = e : delete t.$$hashKey
		}

		function f(t) {
			var e = t.$$hashKey;
			return o(arguments, function(e) {
				e !== t && o(e, function(e, n) {
					t[n] = e
				})
			}), l(t, e), t
		}

		function h(t) {
			return parseInt(t, 10)
		}

		function p(t, e) {
			return f(new(f(function() {}, {
				prototype: t
			})), e)
		}

		function d() {}

		function g(t) {
			return t
		}

		function v(t) {
			return function() {
				return t
			}
		}

		function m(t) {
			return "undefined" == typeof t
		}

		function y(t) {
			return "undefined" != typeof t
		}

		function x(t) {
			return null != t && "object" == typeof t
		}

		function $(t) {
			return "string" == typeof t
		}

		function b(t) {
			return "number" == typeof t
		}

		function w(t) {
			return "[object Date]" === yr.call(t)
		}

		function k(t) {
			return "[object Array]" === yr.call(t)
		}

		function C(t) {
			return "function" == typeof t
		}

		function S(t) {
			return "[object RegExp]" === yr.call(t)
		}

		function _(t) {
			return t && t.document && t.location && t.alert && t.setInterval
		}

		function T(t) {
			return t && t.$evalAsync && t.$watch
		}

		function E(t) {
			return "[object File]" === yr.call(t)
		}

		function A(t) {
			return !(!t || !(t.nodeName || t.on && t.find))
		}

		function N(t, e, n) {
			var r = [];
			return o(t, function(t, i, o) {
				r.push(e.call(n, t, i, o))
			}), r
		}

		function M(t, e) {
			return -1 != j(t, e)
		}

		function j(t, e) {
			if (t.indexOf) return t.indexOf(e);
			for (var n = 0; n < t.length; n++)
				if (e === t[n]) return n;
			return -1
		}

		function O(t, e) {
			var n = j(t, e);
			return n >= 0 && t.splice(n, 1), e
		}

		function P(t, e) {
			if (_(t) || T(t)) throw xr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
			if (e) {
				if (t === e) throw xr("cpi", "Can't copy! Source and destination are identical.");
				if (k(t)) {
					e.length = 0;
					for (var n = 0; n < t.length; n++) e.push(P(t[n]))
				} else {
					var r = e.$$hashKey;
					o(e, function(t, n) {
						delete e[n]
					});
					for (var i in t) e[i] = P(t[i]);
					l(e, r)
				}
			} else e = t, t && (k(t) ? e = P(t, []) : w(t) ? e = new Date(t.getTime()) : S(t) ? e = new RegExp(t.source) : x(t) && (e = P(t, {})));
			return e
		}

		function D(t, e) {
			e = e || {};
			for (var n in t)!t.hasOwnProperty(n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
			return e
		}

		function L(t, e) {
			if (t === e) return !0;
			if (null === t || null === e) return !1;
			if (t !== t && e !== e) return !0;
			var r, i, o, a = typeof t,
				s = typeof e;
			if (a == s && "object" == a) {
				if (!k(t)) {
					if (w(t)) return w(e) && t.getTime() == e.getTime();
					if (S(t) && S(e)) return t.toString() == e.toString();
					if (T(t) || T(e) || _(t) || _(e) || k(e)) return !1;
					o = {};
					for (i in t)
						if ("$" !== i.charAt(0) && !C(t[i])) {
							if (!L(t[i], e[i])) return !1;
							o[i] = !0
						}
					for (i in e)
						if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !C(e[i])) return !1;
					return !0
				}
				if (!k(e)) return !1;
				if ((r = t.length) == e.length) {
					for (i = 0; r > i; i++)
						if (!L(t[i], e[i])) return !1;
					return !0
				}
			}
			return !1
		}

		function R() {
			return e.securityPolicy && e.securityPolicy.isActive || e.querySelector && !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"))
		}

		function B(t, e, n) {
			return t.concat(vr.call(e, n))
		}

		function q(t, e) {
			return vr.call(t, e || 0)
		}

		function F(t, e) {
			var n = arguments.length > 2 ? q(arguments, 2) : [];
			return !C(e) || e instanceof RegExp ? e : n.length ? function() {
				return arguments.length ? e.apply(t, n.concat(vr.call(arguments, 0))) : e.apply(t, n)
			} : function() {
				return arguments.length ? e.apply(t, arguments) : e.call(t)
			}
		}

		function I(t, r) {
			var i = r;
			return "string" == typeof t && "$" === t.charAt(0) ? i = n : _(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : T(r) && (i = "$SCOPE"), i
		}

		function H(t, e) {
			return "undefined" == typeof t ? n : JSON.stringify(t, I, e ? "  " : null)
		}

		function U(t) {
			return $(t) ? JSON.parse(t) : t
		}

		function V(t) {
			if ("function" == typeof t) t = !0;
			else if (t && 0 !== t.length) {
				var e = ar("" + t);
				t = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)
			} else t = !1;
			return t
		}

		function z(t) {
			t = hr(t).clone();
			try {
				t.empty()
			} catch (e) {}
			var n = 3,
				r = hr("<div>").append(t).html();
			try {
				return t[0].nodeType === n ? ar(r) : r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
					return "<" + ar(e)
				})
			} catch (e) {
				return ar(r)
			}
		}

		function W(t) {
			try {
				return decodeURIComponent(t)
			} catch (e) {}
		}

		function X(t) {
			var e, n, r = {};
			return o((t || "").split("&"), function(t) {
				if (t && (e = t.split("="), n = W(e[0]), y(n))) {
					var i = y(e[1]) ? W(e[1]) : !0;
					r[n] ? k(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
				}
			}), r
		}

		function G(t) {
			var e = [];
			return o(t, function(t, n) {
				k(t) ? o(t, function(t) {
					e.push(Q(n, !0) + (t === !0 ? "" : "=" + Q(t, !0)))
				}) : e.push(Q(n, !0) + (t === !0 ? "" : "=" + Q(t, !0)))
			}), e.length ? e.join("&") : ""
		}

		function Y(t) {
			return Q(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function Q(t, e) {
			return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
		}

		function J(t, n) {
			function r(t) {
				t && s.push(t)
			}
			var i, a, s = [t],
				u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
				c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
			o(u, function(n) {
				u[n] = !0, r(e.getElementById(n)), n = n.replace(":", "\\:"), t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), o(t.querySelectorAll("[" + n + "]"), r))
			}), o(s, function(t) {
				if (!i) {
					var e = " " + t.className + " ",
						n = c.exec(e);
					n ? (i = t, a = (n[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function(e) {
						!i && u[e.name] && (i = t, a = e.value)
					})
				}
			}), i && n(i, a ? [a] : [])
		}

		function K(n, r) {
			var i = function() {
				if (n = hr(n), n.injector()) {
					var t = n[0] === e ? "document" : z(n);
					throw xr("btstrpd", "App Already Bootstrapped with this Element '{0}'", t)
				}
				r = r || [], r.unshift(["$provide",
					function(t) {
						t.value("$rootElement", n)
					}
				]), r.unshift("ng");
				var i = Ne(r);
				return i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
					function(t, e, n, r) {
						t.$apply(function() {
							e.data("$injector", r), n(e)(t)
						})
					}
				]), i
			}, a = /^NG_DEFER_BOOTSTRAP!/;
			return t && !a.test(t.name) ? i() : (t.name = t.name.replace(a, ""), void($r.resumeBootstrap = function(t) {
				o(t, function(t) {
					r.push(t)
				}), i()
			}))
		}

		function Z(t, e) {
			return e = e || "_", t.replace(kr, function(t, n) {
				return (n ? e : "") + t.toLowerCase()
			})
		}

		function te() {
			pr = t.jQuery, pr ? (hr = pr, f(pr.fn, {
				scope: Or.scope,
				isolateScope: Or.isolateScope,
				controller: Or.controller,
				injector: Or.injector,
				inheritedData: Or.inheritedData
			}), le("remove", !0, !0, !1), le("empty", !1, !1, !1), le("html", !1, !1, !0)) : hr = fe, $r.element = hr
		}

		function ee(t, e, n) {
			if (!t) throw xr("areq", "Argument '{0}' is {1}", e || "?", n || "required");
			return t
		}

		function ne(t, e, n) {
			return n && k(t) && (t = t[t.length - 1]), ee(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
		}

		function re(t, e) {
			if ("hasOwnProperty" === t) throw xr("badname", "hasOwnProperty is not a valid {0} name", e)
		}

		function ie(t, e, n) {
			if (!e) return t;
			for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++) r = i[s], t && (t = (o = t)[r]);
			return !n && C(t) ? F(o, t) : t
		}

		function oe(t) {
			var e = t[0],
				n = t[t.length - 1];
			if (e === n) return hr(e);
			var r = e,
				i = [r];
			do {
				if (r = r.nextSibling, !r) break;
				i.push(r)
			} while (r !== n);
			return hr(i)
		}

		function ae(t) {
			function e(t, e, n) {
				return t[e] || (t[e] = n())
			}
			var n = r("$injector"),
				i = r("ng"),
				o = e(t, "angular", Object);
			return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
				var t = {};
				return function(r, o, a) {
					var s = function(t, e) {
						if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
					};
					return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
						function t(t, n, r) {
							return function() {
								return e[r || "push"]([t, n, arguments]), u
							}
						}
						if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
						var e = [],
							i = [],
							s = t("$injector", "invoke"),
							u = {
								_invokeQueue: e,
								_runBlocks: i,
								requires: o,
								name: r,
								provider: t("$provide", "provider"),
								factory: t("$provide", "factory"),
								service: t("$provide", "service"),
								value: t("$provide", "value"),
								constant: t("$provide", "constant", "unshift"),
								animation: t("$animateProvider", "register"),
								filter: t("$filterProvider", "register"),
								controller: t("$controllerProvider", "register"),
								directive: t("$compileProvider", "directive"),
								config: s,
								run: function(t) {
									return i.push(t), this
								}
							};
						return a && s(a), u
					})
				}
			})
		}

		function se(e) {
			f(e, {
				bootstrap: K,
				copy: P,
				extend: f,
				equals: L,
				element: hr,
				forEach: o,
				injector: Ne,
				noop: d,
				bind: F,
				toJson: H,
				fromJson: U,
				identity: g,
				isUndefined: m,
				isDefined: y,
				isString: $,
				isFunction: C,
				isObject: x,
				isNumber: b,
				isElement: A,
				isArray: k,
				version: Cr,
				isDate: w,
				lowercase: ar,
				uppercase: ur,
				callbacks: {
					counter: 0
				},
				$$minErr: r,
				$$csp: R
			}), dr = ae(t);
			try {
				dr("ngLocale")
			} catch (n) {
				dr("ngLocale", []).provider("$locale", Ke)
			}
			dr("ng", ["ngLocale"], ["$provide",
				function(t) {
					t.provider({
						$$sanitizeUri: Sn
					}), t.provider("$compile", Le).directive({
						a: pi,
						input: ki,
						textarea: ki,
						form: mi,
						script: io,
						select: so,
						style: co,
						option: uo,
						ngBind: Di,
						ngBindHtml: Ri,
						ngBindTemplate: Li,
						ngClass: Bi,
						ngClassEven: Fi,
						ngClassOdd: qi,
						ngCloak: Ii,
						ngController: Hi,
						ngForm: yi,
						ngHide: Ki,
						ngIf: Vi,
						ngInclude: zi,
						ngInit: Xi,
						ngNonBindable: Gi,
						ngPluralize: Yi,
						ngRepeat: Qi,
						ngShow: Ji,
						ngStyle: Zi,
						ngSwitch: to,
						ngSwitchWhen: eo,
						ngSwitchDefault: no,
						ngOptions: ao,
						ngTransclude: ro,
						ngModel: Ai,
						ngList: ji,
						ngChange: Ni,
						required: Mi,
						ngRequired: Mi,
						ngValue: Pi
					}).directive({
						ngInclude: Wi
					}).directive(di).directive(Ui), t.provider({
						$anchorScroll: Me,
						$animate: Hr,
						$browser: Oe,
						$cacheFactory: Pe,
						$controller: qe,
						$document: Fe,
						$exceptionHandler: Ie,
						$filter: Ln,
						$interpolate: Qe,
						$interval: Je,
						$http: We,
						$httpBackend: Ge,
						$location: hn,
						$log: pn,
						$parse: bn,
						$rootScope: Cn,
						$q: wn,
						$sce: Nn,
						$sceDelegate: An,
						$sniffer: Mn,
						$templateCache: De,
						$timeout: jn,
						$window: Dn
					})
				}
			])
		}

		function ue() {
			return ++Tr
		}

		function ce(t) {
			return t.replace(Nr, function(t, e, n, r) {
				return r ? n.toUpperCase() : n
			}).replace(Mr, "Moz$1")
		}

		function le(t, e, n, r) {
			function i(t) {
				var i, a, s, u, c, l, f, h = n && t ? [this.filter(t)] : [this],
					p = e;
				if (!r || null != t)
					for (; h.length;)
						for (i = h.shift(), a = 0, s = i.length; s > a; a++)
							for (u = hr(i[a]), p ? u.triggerHandler("$destroy") : p = !p, c = 0, l = (f = u.children()).length; l > c; c++) h.push(pr(f[c]));
				return o.apply(this, arguments)
			}
			var o = pr.fn[t];
			o = o.$original || o, i.$original = o, pr.fn[t] = i
		}

		function fe(t) {
			if (t instanceof fe) return t;
			if ($(t) && (t = wr(t)), !(this instanceof fe)) {
				if ($(t) && "<" != t.charAt(0)) throw jr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
				return new fe(t)
			}
			if ($(t)) {
				var n = e.createElement("div");
				n.innerHTML = "<div>&#160;</div>" + t, n.removeChild(n.firstChild), be(this, n.childNodes);
				var r = hr(e.createDocumentFragment());
				r.append(this)
			} else be(this, t)
		}

		function he(t) {
			return t.cloneNode(!0)
		}

		function pe(t) {
			ge(t);
			for (var e = 0, n = t.childNodes || []; e < n.length; e++) pe(n[e])
		}

		function de(t, e, n, r) {
			if (y(r)) throw jr("offargs", "jqLite#off() does not support the `selector` argument");
			var i = ve(t, "events"),
				a = ve(t, "handle");
			a && (m(e) ? o(i, function(e, n) {
				Ar(t, n, e), delete i[n]
			}) : o(e.split(" "), function(e) {
				m(n) ? (Ar(t, e, i[e]), delete i[e]) : O(i[e] || [], n)
			}))
		}

		function ge(t, e) {
			var r = t[_r],
				i = Sr[r];
			if (i) {
				if (e) return void delete Sr[r].data[e];
				i.handle && (i.events.$destroy && i.handle({}, "$destroy"), de(t)), delete Sr[r], t[_r] = n
			}
		}

		function ve(t, e, n) {
			var r = t[_r],
				i = Sr[r || -1];
			return y(n) ? (i || (t[_r] = r = ue(), i = Sr[r] = {}), void(i[e] = n)) : i && i[e]
		}

		function me(t, e, n) {
			var r = ve(t, "data"),
				i = y(n),
				o = !i && y(e),
				a = o && !x(e);
			if (r || a || ve(t, "data", r = {}), i) r[e] = n;
			else {
				if (!o) return r;
				if (a) return r && r[e];
				f(r, e)
			}
		}

		function ye(t, e) {
			return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
		}

		function xe(t, e) {
			e && t.setAttribute && o(e.split(" "), function(e) {
				t.setAttribute("class", wr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + wr(e) + " ", " ")))
			})
		}

		function $e(t, e) {
			if (e && t.setAttribute) {
				var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
				o(e.split(" "), function(t) {
					t = wr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
				}), t.setAttribute("class", wr(n))
			}
		}

		function be(t, e) {
			if (e) {
				e = e.nodeName || !y(e.length) || _(e) ? [e] : e;
				for (var n = 0; n < e.length; n++) t.push(e[n])
			}
		}

		function we(t, e) {
			return ke(t, "$" + (e || "ngController") + "Controller")
		}

		function ke(t, e, r) {
			t = hr(t), 9 == t[0].nodeType && (t = t.find("html"));
			for (var i = k(e) ? e : [e]; t.length;) {
				for (var o = 0, a = i.length; a > o; o++)
					if ((r = t.data(i[o])) !== n) return r;
				t = t.parent()
			}
		}

		function Ce(t) {
			for (var e = 0, n = t.childNodes; e < n.length; e++) pe(n[e]);
			for (; t.firstChild;) t.removeChild(t.firstChild)
		}

		function Se(t, e) {
			var n = Pr[e.toLowerCase()];
			return n && Dr[t.nodeName] && n
		}

		function _e(t, n) {
			var r = function(r, i) {
				if (r.preventDefault || (r.preventDefault = function() {
					r.returnValue = !1
				}), r.stopPropagation || (r.stopPropagation = function() {
					r.cancelBubble = !0
				}), r.target || (r.target = r.srcElement || e), m(r.defaultPrevented)) {
					var a = r.preventDefault;
					r.preventDefault = function() {
						r.defaultPrevented = !0, a.call(r)
					}, r.defaultPrevented = !1
				}
				r.isDefaultPrevented = function() {
					return r.defaultPrevented || r.returnValue === !1
				};
				var s = D(n[i || r.type] || []);
				o(s, function(e) {
					e.call(t, r)
				}), 8 >= fr ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
			};
			return r.elem = t, r
		}

		function Te(t) {
			var e, r = typeof t;
			return "object" == r && null !== t ? "function" == typeof(e = t.$$hashKey) ? e = t.$$hashKey() : e === n && (e = t.$$hashKey = c()) : e = t, r + ":" + e
		}

		function Ee(t) {
			o(t, this.put, this)
		}

		function Ae(t) {
			var e, n, r, i;
			return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(qr, ""), r = n.match(Lr), o(r[1].split(Rr), function(t) {
				t.replace(Br, function(t, n, r) {
					e.push(r)
				})
			})), t.$inject = e) : k(t) ? (i = t.length - 1, ne(t[i], "fn"), e = t.slice(0, i)) : ne(t, "fn", !0), e
		}

		function Ne(t) {
			function e(t) {
				return function(e, n) {
					return x(e) ? void o(e, u(t)) : t(e, n)
				}
			}

			function n(t, e) {
				if (re(t, "service"), (C(e) || k(e)) && (e = b.instantiate(e)), !e.$get) throw Fr("pget", "Provider '{0}' must define $get factory method.", t);
				return y[t + p] = e
			}

			function r(t, e) {
				return n(t, {
					$get: e
				})
			}

			function i(t, e) {
				return r(t, ["$injector",
					function(t) {
						return t.instantiate(e)
					}
				])
			}

			function a(t, e) {
				return r(t, v(e))
			}

			function s(t, e) {
				re(t, "constant"), y[t] = e, w[t] = e
			}

			function c(t, e) {
				var n = b.get(t + p),
					r = n.$get;
				n.$get = function() {
					var t = S.invoke(r, n);
					return S.invoke(e, null, {
						$delegate: t
					})
				}
			}

			function l(t) {
				var e, n, r, i, a = [];
				return o(t, function(t) {
					if (!m.get(t)) {
						m.put(t, !0);
						try {
							if ($(t))
								for (e = dr(t), a = a.concat(l(e.requires)).concat(e._runBlocks), n = e._invokeQueue, r = 0, i = n.length; i > r; r++) {
									var o = n[r],
										s = b.get(o[0]);
									s[o[1]].apply(s, o[2])
								} else C(t) ? a.push(b.invoke(t)) : k(t) ? a.push(b.invoke(t)) : ne(t, "module")
						} catch (u) {
							throw k(t) && (t = t[t.length - 1]), u.message && u.stack && -1 == u.stack.indexOf(u.message) && (u = u.message + "\n" + u.stack), Fr("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, u.stack || u.message || u)
						}
					}
				}), a
			}

			function f(t, e) {
				function n(n) {
					if (t.hasOwnProperty(n)) {
						if (t[n] === h) throw Fr("cdep", "Circular dependency found: {0}", g.join(" <- "));
						return t[n]
					}
					try {
						return g.unshift(n), t[n] = h, t[n] = e(n)
					} catch (r) {
						throw t[n] === h && delete t[n], r
					} finally {
						g.shift()
					}
				}

				function r(t, e, r) {
					var i, o, a, s = [],
						u = Ae(t);
					for (o = 0, i = u.length; i > o; o++) {
						if (a = u[o], "string" != typeof a) throw Fr("itkn", "Incorrect injection token! Expected service name as string, got {0}", a);
						s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
					}
					return t.$inject || (t = t[i]), t.apply(e, s)
				}

				function i(t, e) {
					var n, i, o = function() {};
					return o.prototype = (k(t) ? t[t.length - 1] : t).prototype, n = new o, i = r(t, n, e), x(i) || C(i) ? i : n
				}
				return {
					invoke: r,
					instantiate: i,
					get: n,
					annotate: Ae,
					has: function(e) {
						return y.hasOwnProperty(e + p) || t.hasOwnProperty(e)
					}
				}
			}
			var h = {}, p = "Provider",
				g = [],
				m = new Ee,
				y = {
					$provide: {
						provider: e(n),
						factory: e(r),
						service: e(i),
						value: e(a),
						constant: e(s),
						decorator: c
					}
				}, b = y.$injector = f(y, function() {
					throw Fr("unpr", "Unknown provider: {0}", g.join(" <- "))
				}),
				w = {}, S = w.$injector = f(w, function(t) {
					var e = b.get(t + p);
					return S.invoke(e.$get, e)
				});
			return o(l(t), function(t) {
				S.invoke(t || d)
			}), S
		}

		function Me() {
			var t = !0;
			this.disableAutoScrolling = function() {
				t = !1
			}, this.$get = ["$window", "$location", "$rootScope",
				function(e, n, r) {
					function i(t) {
						var e = null;
						return o(t, function(t) {
							e || "a" !== ar(t.nodeName) || (e = t)
						}), e
					}

					function a() {
						var t, r = n.hash();
						r ? (t = s.getElementById(r)) ? t.scrollIntoView() : (t = i(s.getElementsByName(r))) ? t.scrollIntoView() : "top" === r && e.scrollTo(0, 0) : e.scrollTo(0, 0)
					}
					var s = e.document;
					return t && r.$watch(function() {
						return n.hash()
					}, function() {
						r.$evalAsync(a)
					}), a
				}
			]
		}

		function je(t, e, r, i) {
			function a(t) {
				try {
					t.apply(null, q(arguments, 1))
				} finally {
					if (y--, 0 === y)
						for (; x.length;) try {
							x.pop()()
						} catch (e) {
							r.error(e)
						}
				}
			}

			function s(t, e) {
				! function n() {
					o(w, function(t) {
						t()
					}), b = e(n, t)
				}()
			}

			function u() {
				S = null, k != c.url() && (k = c.url(), o(_, function(t) {
					t(c.url())
				}))
			}
			var c = this,
				l = e[0],
				f = t.location,
				h = t.history,
				p = t.setTimeout,
				g = t.clearTimeout,
				v = {};
			c.isMock = !1;
			var y = 0,
				x = [];
			c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function() {
				y++
			}, c.notifyWhenNoOutstandingRequests = function(t) {
				o(w, function(t) {
					t()
				}), 0 === y ? t() : x.push(t)
			};
			var b, w = [];
			c.addPollFn = function(t) {
				return m(b) && s(100, p), w.push(t), t
			};
			var k = f.href,
				C = e.find("base"),
				S = null;
			c.url = function(e, n) {
				if (f !== t.location && (f = t.location), h !== t.history && (h = t.history), e) {
					if (k == e) return;
					return k = e, i.history ? n ? h.replaceState(null, "", e) : (h.pushState(null, "", e), C.attr("href", C.attr("href"))) : (S = e, n ? f.replace(e) : f.href = e), c
				}
				return S || f.href.replace(/%27/g, "'")
			};
			var _ = [],
				T = !1;
			c.onUrlChange = function(e) {
				return T || (i.history && hr(t).on("popstate", u), i.hashchange ? hr(t).on("hashchange", u) : c.addPollFn(u), T = !0), _.push(e), e
			}, c.baseHref = function() {
				var t = C.attr("href");
				return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
			};
			var E = {}, A = "",
				N = c.baseHref();
			c.cookies = function(t, e) {
				var i, o, a, s, u;
				if (!t) {
					if (l.cookie !== A)
						for (A = l.cookie, o = A.split("; "), E = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (t = unescape(a.substring(0, u)), E[t] === n && (E[t] = unescape(a.substring(u + 1))));
					return E
				}
				e === n ? l.cookie = escape(t) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : $(e) && (i = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + N).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
			}, c.defer = function(t, e) {
				var n;
				return y++, n = p(function() {
					delete v[n], a(t)
				}, e || 0), v[n] = !0, n
			}, c.defer.cancel = function(t) {
				return v[t] ? (delete v[t], g(t), a(d), !0) : !1
			}
		}

		function Oe() {
			this.$get = ["$window", "$log", "$sniffer", "$document",
				function(t, e, n, r) {
					return new je(t, r, e, n)
				}
			]
		}

		function Pe() {
			this.$get = function() {
				function t(t, n) {
					function i(t) {
						t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
					}

					function o(t, e) {
						t != e && (t && (t.p = e), e && (e.n = t))
					}
					if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
					var a = 0,
						s = f({}, n, {
							id: t
						}),
						u = {}, c = n && n.capacity || Number.MAX_VALUE,
						l = {}, h = null,
						p = null;
					return e[t] = {
						put: function(t, e) {
							var n = l[t] || (l[t] = {
								key: t
							});
							return i(n), m(e) ? void 0 : (t in u || a++, u[t] = e, a > c && this.remove(p.key), e)
						},
						get: function(t) {
							var e = l[t];
							if (e) return i(e), u[t]
						},
						remove: function(t) {
							var e = l[t];
							e && (e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete l[t], delete u[t], a--)
						},
						removeAll: function() {
							u = {}, a = 0, l = {}, h = p = null
						},
						destroy: function() {
							u = null, s = null, l = null, delete e[t]
						},
						info: function() {
							return f({}, s, {
								size: a
							})
						}
					}
				}
				var e = {};
				return t.info = function() {
					var t = {};
					return o(e, function(e, n) {
						t[n] = e.info()
					}), t
				}, t.get = function(t) {
					return e[t]
				}, t
			}
		}

		function De() {
			this.$get = ["$cacheFactory",
				function(t) {
					return t("templates")
				}
			]
		}

		function Le(t, r) {
			var i = {}, a = "Directive",
				s = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
				c = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
				l = /^(on[a-z]+|formaction)$/;
			this.directive = function h(e, n) {
				return re(e, "directive"), $(e) ? (ee(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + a, ["$injector", "$exceptionHandler",
					function(t, n) {
						var r = [];
						return o(i[e], function(i, o) {
							try {
								var a = t.invoke(i);
								C(a) ? a = {
									compile: v(a)
								} : !a.compile && a.link && (a.compile = v(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || e, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "A", r.push(a)
							} catch (s) {
								n(s)
							}
						}), r
					}
				])), i[e].push(n)) : o(e, u(h)), this
			}, this.aHrefSanitizationWhitelist = function(t) {
				return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
			}, this.imgSrcSanitizationWhitelist = function(t) {
				return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
			}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
				function(t, r, u, h, d, m, y, b, w, S, _, T) {
					function E(t, e, n, r, i) {
						t instanceof hr || (t = hr(t)), o(t, function(e, n) {
							3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = e = hr(e).wrap("<span></span>").parent()[0])
						});
						var a = N(t, e, t, n, r, i);
						return A(t, "ng-scope"),
						function(e, n, r) {
							ee(e, "scope");
							var i = n ? Or.clone.call(t) : t;
							o(r, function(t, e) {
								i.data("$" + e + "Controller", t)
							});
							for (var s = 0, u = i.length; u > s; s++) {
								var c = i[s],
									l = c.nodeType;
								(1 === l || 9 === l) && i.eq(s).data("$scope", e)
							}
							return n && n(i, e), a && a(e, i, i), i
						}
					}

					function A(t, e) {
						try {
							t.addClass(e)
						} catch (n) {}
					}

					function N(t, e, r, i, o, a) {
						function s(t, r, i, o) {
							var a, s, u, c, l, f, h, p, g, v = r.length,
								m = new Array(v);
							for (h = 0; v > h; h++) m[h] = r[h];
							for (h = 0, g = 0, p = d.length; p > h; g++) u = m[g], a = d[h++], s = d[h++], c = hr(u), a ? (a.scope ? (l = t.$new(), c.data("$scope", l)) : l = t, f = a.transclude, f || !o && e ? a(s, l, u, i, M(t, f || e)) : a(s, l, u, i, o)) : s && s(t, u.childNodes, n, o)
						}
						for (var u, c, l, f, h, p, d = [], g = 0; g < t.length; g++) u = new K, c = j(t[g], [], u, 0 === g ? i : n, o), l = c.length ? R(c, t[g], u, e, r, null, [], [], a) : null, l && l.scope && A(hr(t[g]), "ng-scope"), h = l && l.terminal || !(f = t[g].childNodes) || !f.length ? null : N(f, l ? l.transclude : e), d.push(l, h), p = p || l || h, a = null;
						return p ? s : null
					}

					function M(t, e) {
						return function(n, r, i) {
							var o = !1;
							n || (n = t.$new(), n.$$transcluded = !0, o = !0);
							var a = e(n, r, i);
							return o && a.on("$destroy", F(n, n.$destroy)), a
						}
					}

					function j(t, e, n, r, i) {
						var o, a, u = t.nodeType,
							l = n.$attr;
						switch (u) {
							case 1:
								I(e, Re(gr(t).toLowerCase()), "E", r, i);
								for (var f, h, p, d, g, v = t.attributes, m = 0, y = v && v.length; y > m; m++) {
									var x = !1,
										b = !1;
									if (f = v[m], !fr || fr >= 8 || f.specified) {
										h = f.name, d = Re(h), ie.test(d) && (h = Z(d.substr(6), "-"));
										var w = d.replace(/(Start|End)$/, "");
										d === w + "Start" && (x = h, b = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), p = Re(h.toLowerCase()), l[p] = h, n[p] = g = wr(f.value), Se(t, p) && (n[p] = !0), Y(t, e, g, p), I(e, p, "A", r, i, x, b)
									}
								}
								if (a = t.className, $(a) && "" !== a)
									for (; o = c.exec(a);) p = Re(o[2]), I(e, p, "C", r, i) && (n[p] = wr(o[3])), a = a.substr(o.index + o[0].length);
								break;
							case 3:
								X(e, t.nodeValue);
								break;
							case 8:
								try {
									o = s.exec(t.nodeValue), o && (p = Re(o[1]), I(e, p, "M", r, i) && (n[p] = wr(o[2])))
								} catch (k) {}
						}
						return e.sort(V), e
					}

					function O(t, e, n) {
						var r = [],
							i = 0;
						if (e && t.hasAttribute && t.hasAttribute(e)) {
							do {
								if (!t) throw Ur("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
								1 == t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
							} while (i > 0)
						} else r.push(t);
						return hr(r)
					}

					function P(t, e, n) {
						return function(r, i, o, a, s) {
							return i = O(i[0], e, n), t(r, i, o, a, s)
						}
					}

					function R(t, i, a, s, c, l, f, h, p) {
						function d(t, e, n, r) {
							t && (n && (t = P(t, n, r)), t.require = w.require, (F === w || w.$$isolateScope) && (t = J(t, {
								isolateScope: !0
							})), f.push(t)), e && (n && (e = P(e, n, r)), e.require = w.require, (F === w || w.$$isolateScope) && (e = J(e, {
								isolateScope: !0
							})), h.push(e))
						}

						function g(t, e, n) {
							var r, i = "data",
								a = !1;
							if ($(t)) {
								for (;
									"^" == (r = t.charAt(0)) || "?" == r;) t = t.substr(1), "^" == r && (i = "inheritedData"), a = a || "?" == r;
								if (r = null, n && "data" === i && (r = n[t]), r = r || e[i]("$" + t + "Controller"), !r && !a) throw Ur("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, S);
								return r
							}
							return k(t) && (r = [], o(t, function(t) {
								r.push(g(t, e, n))
							})), r
						}

						function v(t, e, s, c, l) {
							function p(t, e) {
								var r;
								return arguments.length < 2 && (e = t, t = n), G && (r = S), l(t, e, r)
							}
							var d, v, x, $, b, w, k, C, S = {};
							if (d = i === s ? a : D(a, new K(hr(s), a.$attr)), v = d.$$element, F) {
								var _ = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
									T = hr(s);
								k = e.$new(!0), I && I === F.$$originalDirective ? T.data("$isolateScope", k) : T.data("$isolateScopeNoTemplate", k), A(T, "ng-isolate-scope"), o(F.scope, function(t, n) {
									var i, o, a, s, u = t.match(_) || [],
										c = u[3] || n,
										l = "?" == u[2],
										f = u[1];
									switch (k.$$isolateBindings[n] = f + c, f) {
										case "@":
											d.$observe(c, function(t) {
												k[n] = t
											}), d.$$observers[c].$$scope = e, d[c] && (k[n] = r(d[c])(e));
											break;
										case "=":
											if (l && !d[c]) return;
											o = m(d[c]), s = o.literal ? L : function(t, e) {
												return t === e
											}, a = o.assign || function() {
												throw i = k[n] = o(e), Ur("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", d[c], F.name)
											}, i = k[n] = o(e), k.$watch(function() {
												var t = o(e);
												return s(t, k[n]) || (s(t, i) ? a(e, t = k[n]) : k[n] = t), i = t
											}, null, o.literal);
											break;
										case "&":
											o = m(d[c]), k[n] = function(t) {
												return o(e, t)
											};
											break;
										default:
											throw Ur("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", F.name, n, t)
									}
								})
							}
							for (C = l && p, R && o(R, function(t) {
								var n, r = {
										$scope: t === F || t.$$isolateScope ? k : e,
										$element: v,
										$attrs: d,
										$transclude: C
									};
								w = t.controller, "@" == w && (w = d[t.name]), n = y(w, r), S[t.name] = n, G || v.data("$" + t.name + "Controller", n), t.controllerAs && (r.$scope[t.controllerAs] = n)
							}), x = 0, $ = f.length; $ > x; x++) try {
								b = f[x], b(b.isolateScope ? k : e, v, d, b.require && g(b.require, v, S), C)
							} catch (E) {
								u(E, z(v))
							}
							var N = e;
							for (F && (F.template || null === F.templateUrl) && (N = k), t && t(N, s.childNodes, n, l), x = h.length - 1; x >= 0; x--) try {
								b = h[x], b(b.isolateScope ? k : e, v, d, b.require && g(b.require, v, S), C)
							} catch (E) {
								u(E, z(v))
							}
						}
						p = p || {};
						for (var b, w, S, _, T, N, M = -Number.MAX_VALUE, R = p.controllerDirectives, F = p.newIsolateScopeDirective, I = p.templateDirective, V = p.nonTlbTranscludeDirective, X = !1, G = p.hasElementTranscludeDirective, Y = a.$$element = hr(i), Z = l, te = s, ee = 0, ne = t.length; ne > ee; ee++) {
							w = t[ee];
							var ie = w.$$start,
								oe = w.$$end;
							if (ie && (Y = O(i, ie, oe)), _ = n, M > w.priority) break;
							if ((N = w.scope) && (b = b || w, w.templateUrl || (W("new/isolated scope", F, w, Y), x(N) && (F = w))), S = w.name, !w.templateUrl && w.controller && (N = w.controller, R = R || {}, W("'" + S + "' controller", R[S], w, Y), R[S] = w), (N = w.transclude) && (X = !0, w.$$tlb || (W("transclusion", V, w, Y), V = w), "element" == N ? (G = !0, M = w.priority, _ = O(i, ie, oe), Y = a.$$element = hr(e.createComment(" " + S + ": " + a[S] + " ")), i = Y[0], Q(c, hr(q(_)), i), te = E(_, s, M, Z && Z.name, {
								nonTlbTranscludeDirective: V
							})) : (_ = hr(he(i)).contents(), Y.empty(), te = E(_, s))), w.template)
								if (W("template", I, w, Y), I = w, N = C(w.template) ? w.template(Y, a) : w.template, N = re(N), w.replace) {
									if (Z = w, _ = hr("<div>" + wr(N) + "</div>").contents(), i = _[0], 1 != _.length || 1 !== i.nodeType) throw Ur("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", S, "");
									Q(c, Y, i);
									var ae = {
										$attr: {}
									}, se = j(i, [], ae),
										ue = t.splice(ee + 1, t.length - (ee + 1));
									F && B(se), t = t.concat(se).concat(ue), H(a, ae), ne = t.length
								} else Y.html(N);
							if (w.templateUrl) W("template", I, w, Y), I = w, w.replace && (Z = w), v = U(t.splice(ee, t.length - ee), Y, a, c, te, f, h, {
								controllerDirectives: R,
								newIsolateScopeDirective: F,
								templateDirective: I,
								nonTlbTranscludeDirective: V
							}), ne = t.length;
							else if (w.compile) try {
								T = w.compile(Y, a, te), C(T) ? d(null, T, ie, oe) : T && d(T.pre, T.post, ie, oe)
							} catch (ce) {
								u(ce, z(Y))
							}
							w.terminal && (v.terminal = !0, M = Math.max(M, w.priority))
						}
						return v.scope = b && b.scope === !0, v.transclude = X && te, p.hasElementTranscludeDirective = G, v
					}

					function B(t) {
						for (var e = 0, n = t.length; n > e; e++) t[e] = p(t[e], {
							$$isolateScope: !0
						})
					}

					function I(e, r, o, s, c, l, f) {
						if (r === c) return null;
						var h = null;
						if (i.hasOwnProperty(r))
							for (var d, g = t.get(r + a), v = 0, m = g.length; m > v; v++) try {
								d = g[v], (s === n || s > d.priority) && -1 != d.restrict.indexOf(o) && (l && (d = p(d, {
									$$start: l,
									$$end: f
								})), e.push(d), h = d)
							} catch (y) {
								u(y)
							}
						return h
					}

					function H(t, e) {
						var n = e.$attr,
							r = t.$attr,
							i = t.$$element;
						o(t, function(r, i) {
							"$" != i.charAt(0) && (e[i] && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
						}), o(e, function(e, o) {
							"class" == o ? (A(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
						})
					}

					function U(t, e, n, r, i, a, s, u) {
						var c, l, p = [],
							g = e[0],
							v = t.shift(),
							m = f({}, v, {
								templateUrl: null,
								transclude: null,
								replace: null,
								$$originalDirective: v
							}),
							y = C(v.templateUrl) ? v.templateUrl(e, n) : v.templateUrl;
						return e.empty(), h.get(S.getTrustedResourceUrl(y), {
							cache: d
						}).success(function(f) {
							var h, d, $, b;
							if (f = re(f), v.replace) {
								if ($ = hr("<div>" + wr(f) + "</div>").contents(), h = $[0], 1 != $.length || 1 !== h.nodeType) throw Ur("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", v.name, y);
								d = {
									$attr: {}
								}, Q(r, e, h);
								var w = j(h, [], d);
								x(v.scope) && B(w), t = w.concat(t), H(n, d)
							} else h = g, e.html(f);
							for (t.unshift(m), c = R(t, h, n, i, e, v, a, s, u), o(r, function(t, n) {
								t == h && (r[n] = e[0])
							}), l = N(e[0].childNodes, i); p.length;) {
								var k = p.shift(),
									C = p.shift(),
									S = p.shift(),
									_ = p.shift(),
									T = e[0];
								if (C !== g) {
									var E = C.className;
									u.hasElementTranscludeDirective && v.replace || (T = he(h)), Q(S, hr(C), T), A(hr(T), E)
								}
								b = c.transclude ? M(k, c.transclude) : _, c(l, k, T, r, b)
							}
							p = null
						}).error(function(t, e, n, r) {
							throw Ur("tpload", "Failed to load template: {0}", r.url)
						}),
						function(t, e, n, r, i) {
							p ? (p.push(e), p.push(n), p.push(r), p.push(i)) : c(l, e, n, r, i)
						}
					}

					function V(t, e) {
						var n = e.priority - t.priority;
						return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
					}

					function W(t, e, n, r) {
						if (e) throw Ur("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, z(r))
					}

					function X(t, e) {
						var n = r(e, !0);
						n && t.push({
							priority: 0,
							compile: v(function(t, e) {
								var r = e.parent(),
									i = r.data("$binding") || [];
								i.push(n), A(r.data("$binding", i), "ng-binding"), t.$watch(n, function(t) {
									e[0].nodeValue = t
								})
							})
						})
					}

					function G(t, e) {
						if ("srcdoc" == e) return S.HTML;
						var n = gr(t);
						return "xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? S.RESOURCE_URL : void 0
					}

					function Y(t, e, n, i) {
						var o = r(n, !0);
						if (o) {
							if ("multiple" === i && "SELECT" === gr(t)) throw Ur("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(t));
							e.push({
								priority: 100,
								compile: function() {
									return {
										pre: function(e, n, a) {
											var s = a.$$observers || (a.$$observers = {});
											if (l.test(i)) throw Ur("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
											o = r(a[i], !0, G(t, i)), o && (a[i] = o(e), (s[i] || (s[i] = [])).$$inter = !0, (a.$$observers && a.$$observers[i].$$scope || e).$watch(o, function(t, e) {
												"class" === i && t != e ? a.$updateClass(t, e) : a.$set(i, t)
											}))
										}
									}
								}
							})
						}
					}

					function Q(t, n, r) {
						var i, o, a = n[0],
							s = n.length,
							u = a.parentNode;
						if (t)
							for (i = 0, o = t.length; o > i; i++)
								if (t[i] == a) {
									t[i++] = r;
									for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++) f > l ? t[c] = t[l] : delete t[c];
									t.length -= s - 1;
									break
								}
						u && u.replaceChild(r, a);
						var h = e.createDocumentFragment();
						h.appendChild(a), r[hr.expando] = a[hr.expando];
						for (var p = 1, d = n.length; d > p; p++) {
							var g = n[p];
							hr(g).remove(), h.appendChild(g), delete n[p]
						}
						n[0] = r, n.length = 1
					}

					function J(t, e) {
						return f(function() {
							return t.apply(null, arguments)
						}, t, e)
					}
					var K = function(t, e) {
						this.$$element = t, this.$attr = e || {}
					};
					K.prototype = {
						$normalize: Re,
						$addClass: function(t) {
							t && t.length > 0 && _.addClass(this.$$element, t)
						},
						$removeClass: function(t) {
							t && t.length > 0 && _.removeClass(this.$$element, t)
						},
						$updateClass: function(t, e) {
							this.$removeClass(Be(e, t)), this.$addClass(Be(t, e))
						},
						$set: function(t, e, r, i) {
							var a, s = Se(this.$$element[0], t);
							s && (this.$$element.prop(t, e), i = s), this[t] = e, i ? this.$attr[t] = i : (i = this.$attr[t], i || (this.$attr[t] = i = Z(t, "-"))), a = gr(this.$$element), ("A" === a && "href" === t || "IMG" === a && "src" === t) && (this[t] = e = T(e, "src" === t)), r !== !1 && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e));
							var c = this.$$observers;
							c && o(c[t], function(t) {
								try {
									t(e)
								} catch (n) {
									u(n)
								}
							})
						},
						$observe: function(t, e) {
							var n = this,
								r = n.$$observers || (n.$$observers = {}),
								i = r[t] || (r[t] = []);
							return i.push(e), b.$evalAsync(function() {
								i.$$inter || e(n[t])
							}), e
						}
					};
					var te = r.startSymbol(),
						ne = r.endSymbol(),
						re = "{{" == te || "}}" == ne ? g : function(t) {
							return t.replace(/\{\{/g, te).replace(/}}/g, ne)
					}, ie = /^ngAttr[A-Z]/;
					return E
				}
			]
		}

		function Re(t) {
			return ce(t.replace(Vr, ""))
		}

		function Be(t, e) {
			var n = "",
				r = t.split(/\s+/),
				i = e.split(/\s+/);
			t: for (var o = 0; o < r.length; o++) {
				for (var a = r[o], s = 0; s < i.length; s++)
					if (a == i[s]) continue t;
				n += (n.length > 0 ? " " : "") + a
			}
			return n
		}

		function qe() {
			var t = {}, e = /^(\S+)(\s+as\s+(\w+))?$/;
			this.register = function(e, n) {
				re(e, "controller"), x(e) ? f(t, e) : t[e] = n
			}, this.$get = ["$injector", "$window",
				function(n, i) {
					return function(o, a) {
						var s, u, c, l;
						if ($(o) && (u = o.match(e), c = u[1], l = u[3], o = t.hasOwnProperty(c) ? t[c] : ie(a.$scope, c, !0) || ie(i, c, !0), ne(o, c, !0)), s = n.instantiate(o, a), l) {
							if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", c || o.name, l);
							a.$scope[l] = s
						}
						return s
					}
				}
			]
		}

		function Fe() {
			this.$get = ["$window",
				function(t) {
					return hr(t.document)
				}
			]
		}

		function Ie() {
			this.$get = ["$log",
				function(t) {
					return function() {
						t.error.apply(t, arguments)
					}
				}
			]
		}

		function He(t) {
			var e, n, r, i = {};
			return t ? (o(t.split("\n"), function(t) {
				r = t.indexOf(":"), e = ar(wr(t.substr(0, r))), n = wr(t.substr(r + 1)), e && (i[e] ? i[e] += ", " + n : i[e] = n)
			}), i) : i
		}

		function Ue(t) {
			var e = x(t) ? t : n;
			return function(n) {
				return e || (e = He(t)), n ? e[ar(n)] || null : e
			}
		}

		function Ve(t, e, n) {
			return C(n) ? n(t, e) : (o(n, function(n) {
				t = n(t, e)
			}), t)
		}

		function ze(t) {
			return t >= 200 && 300 > t
		}

		function We() {
			var t = /^\s*(\[|\{[^\{])/,
				e = /[\}\]]\s*$/,
				r = /^\)\]\}',?\n/,
				i = {
					"Content-Type": "application/json;charset=utf-8"
				}, a = this.defaults = {
					transformResponse: [
						function(n) {
							return $(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = U(n))), n
						}
					],
					transformRequest: [
						function(t) {
							return x(t) && !E(t) ? H(t) : t
						}
					],
					headers: {
						common: {
							Accept: "application/json, text/plain, */*"
						},
						post: P(i),
						put: P(i),
						patch: P(i)
					},
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN"
				}, u = this.interceptors = [],
				c = this.responseInterceptors = [];
			this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
				function(t, e, r, i, l, h) {
					function p(t) {
						function r(t) {
							var e = f({}, t, {
								data: Ve(t.data, t.headers, s.transformResponse)
							});
							return ze(t.status) ? e : l.reject(e)
						}

						function i(t) {
							function e(t) {
								var e;
								o(t, function(n, r) {
									C(n) && (e = n(), null != e ? t[r] = e : delete t[r])
								})
							}
							var n, r, i, s = a.headers,
								u = f({}, t.headers);
							s = f({}, s.common, s[ar(t.method)]), e(s), e(u);
							t: for (n in s) {
								r = ar(n);
								for (i in u)
									if (ar(i) === r) continue t;
								u[n] = s[n]
							}
							return u
						}
						var s = {
							transformRequest: a.transformRequest,
							transformResponse: a.transformResponse
						}, u = i(t);
						f(s, t), s.headers = u, s.method = ur(s.method);
						var c = Pn(s.url) ? e.cookies()[s.xsrfCookieName || a.xsrfCookieName] : n;
						c && (u[s.xsrfHeaderName || a.xsrfHeaderName] = c);
						var h = function(t) {
							u = t.headers;
							var e = Ve(t.data, Ue(u), t.transformRequest);
							return m(t.data) && o(u, function(t, e) {
								"content-type" === ar(e) && delete u[e]
							}), m(t.withCredentials) && !m(a.withCredentials) && (t.withCredentials = a.withCredentials), v(t, e, u).then(r, r)
						}, p = [h, n],
							d = l.when(s);
						for (o(S, function(t) {
							(t.request || t.requestError) && p.unshift(t.request, t.requestError), (t.response || t.responseError) && p.push(t.response, t.responseError)
						}); p.length;) {
							var g = p.shift(),
								y = p.shift();
							d = d.then(g, y)
						}
						return d.success = function(t) {
							return d.then(function(e) {
								t(e.data, e.status, e.headers, s)
							}), d
						}, d.error = function(t) {
							return d.then(null, function(e) {
								t(e.data, e.status, e.headers, s)
							}), d
						}, d
					}

					function d() {
						o(arguments, function(t) {
							p[t] = function(e, n) {
								return p(f(n || {}, {
									method: t,
									url: e
								}))
							}
						})
					}

					function g() {
						o(arguments, function(t) {
							p[t] = function(e, n, r) {
								return p(f(r || {}, {
									method: t,
									url: e,
									data: n
								}))
							}
						})
					}

					function v(e, n, r) {
						function o(t, e, n) {
							c && (ze(t) ? c.put(g, [t, e, He(n)]) : c.remove(g)), s(e, t, n), i.$$phase || i.$apply()
						}

						function s(t, n, r) {
							n = Math.max(n, 0), (ze(n) ? h.resolve : h.reject)({
								data: t,
								status: n,
								headers: Ue(r),
								config: e
							})
						}

						function u() {
							var t = j(p.pendingRequests, e); - 1 !== t && p.pendingRequests.splice(t, 1)
						}
						var c, f, h = l.defer(),
							d = h.promise,
							g = b(e.url, e.params);
						if (p.pendingRequests.push(e), d.then(u, u), (e.cache || a.cache) && e.cache !== !1 && "GET" == e.method && (c = x(e.cache) ? e.cache : x(a.cache) ? a.cache : w), c)
							if (f = c.get(g), y(f)) {
								if (f.then) return f.then(u, u), f;
								k(f) ? s(f[1], f[0], P(f[2])) : s(f, 200, {})
							} else c.put(g, d);
						return m(f) && t(e.method, g, n, o, r, e.timeout, e.withCredentials, e.responseType), d
					}

					function b(t, e) {
						if (!e) return t;
						var n = [];
						return s(e, function(t, e) {
							null === t || m(t) || (k(t) || (t = [t]), o(t, function(t) {
								x(t) && (t = H(t)), n.push(Q(e) + "=" + Q(t))
							}))
						}), t + (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")
					}
					var w = r("$http"),
						S = [];
					return o(u, function(t) {
						S.unshift($(t) ? h.get(t) : h.invoke(t))
					}), o(c, function(t, e) {
						var n = $(t) ? h.get(t) : h.invoke(t);
						S.splice(e, 0, {
							response: function(t) {
								return n(l.when(t))
							},
							responseError: function(t) {
								return n(l.reject(t))
							}
						})
					}), p.pendingRequests = [], d("get", "delete", "head", "jsonp"), g("post", "put"), p.defaults = a, p
				}
			]
		}

		function Xe(e) {
			if (8 >= fr && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
			if (t.XMLHttpRequest) return new t.XMLHttpRequest;
			throw r("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
		}

		function Ge() {
			this.$get = ["$browser", "$window", "$document",
				function(t, e, n) {
					return Ye(t, Xe, t.defer, e.angular.callbacks, n[0])
				}
			]
		}

		function Ye(t, e, n, r, i) {
			function a(t, e) {
				var n = i.createElement("script"),
					r = function() {
						n.onreadystatechange = n.onload = n.onerror = null, i.body.removeChild(n), e && e()
					};
				return n.type = "text/javascript", n.src = t, fr && 8 >= fr ? n.onreadystatechange = function() {
					/loaded|complete/.test(n.readyState) && r()
				} : n.onload = n.onerror = function() {
					r()
				}, i.body.appendChild(n), r
			}
			var s = -1;
			return function(i, u, c, l, f, h, p, g) {
				function v() {
					x = s, b && b(), w && w.abort()
				}

				function m(e, r, i, o) {
					C && n.cancel(C), b = w = null, r = 0 === r ? i ? 200 : 404 : r, r = 1223 == r ? 204 : r, e(r, i, o), t.$$completeOutstandingRequest(d)
				}
				var x;
				if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == ar(i)) {
					var $ = "_" + (r.counter++).toString(36);
					r[$] = function(t) {
						r[$].data = t
					};
					var b = a(u.replace("JSON_CALLBACK", "angular.callbacks." + $), function() {
						r[$].data ? m(l, 200, r[$].data) : m(l, x || -2), r[$] = $r.noop
					})
				} else {
					var w = e(i);
					if (w.open(i, u, !0), o(f, function(t, e) {
						y(t) && w.setRequestHeader(e, t)
					}), w.onreadystatechange = function() {
						if (w && 4 == w.readyState) {
							var t = null,
								e = null;
							x !== s && (t = w.getAllResponseHeaders(), e = "response" in w ? w.response : w.responseText), m(l, x || w.status, e, t)
						}
					}, p && (w.withCredentials = !0), g) try {
						w.responseType = g
					} catch (k) {
						if ("json" !== g) throw k
					}
					w.send(c || null)
				} if (h > 0) var C = n(v, h);
				else h && h.then && h.then(v)
			}
		}

		function Qe() {
			var t = "{{",
				e = "}}";
			this.startSymbol = function(e) {
				return e ? (t = e, this) : t
			}, this.endSymbol = function(t) {
				return t ? (e = t, this) : e
			}, this.$get = ["$parse", "$exceptionHandler", "$sce",
				function(n, r, i) {
					function o(o, u, c) {
						for (var l, f, h, p, d = 0, g = [], v = o.length, y = !1, x = []; v > d;) - 1 != (l = o.indexOf(t, d)) && -1 != (f = o.indexOf(e, l + a)) ? (d != l && g.push(o.substring(d, l)), g.push(h = n(p = o.substring(l + a, f))), h.exp = p, d = f + s, y = !0) : (d != v && g.push(o.substring(d)), d = v);
						if ((v = g.length) || (g.push(""), v = 1), c && g.length > 1) throw zr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
						return !u || y ? (x.length = v, h = function(t) {
							try {
								for (var e, n = 0, a = v; a > n; n++) "function" == typeof(e = g[n]) && (e = e(t), e = c ? i.getTrusted(c, e) : i.valueOf(e), null === e || m(e) ? e = "" : "string" != typeof e && (e = H(e))), x[n] = e;
								return x.join("")
							} catch (s) {
								var u = zr("interr", "Can't interpolate: {0}\n{1}", o, s.toString());
								r(u)
							}
						}, h.exp = o, h.parts = g, h) : void 0
					}
					var a = t.length,
						s = e.length;
					return o.startSymbol = function() {
						return t
					}, o.endSymbol = function() {
						return e
					}, o
				}
			]
		}

		function Je() {
			this.$get = ["$rootScope", "$window", "$q",
				function(t, e, n) {
					function r(r, o, a, s) {
						var u = e.setInterval,
							c = e.clearInterval,
							l = n.defer(),
							f = l.promise,
							h = 0,
							p = y(s) && !s;
						return a = y(a) ? a : 0, f.then(null, null, r), f.$$intervalId = u(function() {
							l.notify(h++), a > 0 && h >= a && (l.resolve(h), c(f.$$intervalId), delete i[f.$$intervalId]), p || t.$apply()
						}, o), i[f.$$intervalId] = l, f
					}
					var i = {};
					return r.cancel = function(t) {
						return t && t.$$intervalId in i ? (i[t.$$intervalId].reject("canceled"), clearInterval(t.$$intervalId), delete i[t.$$intervalId], !0) : !1
					}, r
				}
			]
		}

		function Ke() {
			this.$get = function() {
				return {
					id: "en-us",
					NUMBER_FORMATS: {
						DECIMAL_SEP: ".",
						GROUP_SEP: ",",
						PATTERNS: [{
							minInt: 1,
							minFrac: 0,
							maxFrac: 3,
							posPre: "",
							posSuf: "",
							negPre: "-",
							negSuf: "",
							gSize: 3,
							lgSize: 3
						}, {
							minInt: 1,
							minFrac: 2,
							maxFrac: 2,
							posPre: "¤",
							posSuf: "",
							negPre: "(¤",
							negSuf: ")",
							gSize: 3,
							lgSize: 3
						}],
						CURRENCY_SYM: "$"
					},
					DATETIME_FORMATS: {
						MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
						SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
						DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
						SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
						AMPMS: ["AM", "PM"],
						medium: "MMM d, y h:mm:ss a",
						"short": "M/d/yy h:mm a",
						fullDate: "EEEE, MMMM d, y",
						longDate: "MMMM d, y",
						mediumDate: "MMM d, y",
						shortDate: "M/d/yy",
						mediumTime: "h:mm:ss a",
						shortTime: "h:mm a"
					},
					pluralCat: function(t) {
						return 1 === t ? "one" : "other"
					}
				}
			}
		}

		function Ze(t) {
			for (var e = t.split("/"), n = e.length; n--;) e[n] = Y(e[n]);
			return e.join("/")
		}

		function tn(t, e, n) {
			var r = On(t, n);
			e.$$protocol = r.protocol, e.$$host = r.hostname, e.$$port = h(r.port) || Xr[r.protocol] || null
		}

		function en(t, e, n) {
			var r = "/" !== t.charAt(0);
			r && (t = "/" + t);
			var i = On(t, n);
			e.$$path = decodeURIComponent(r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), e.$$search = X(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
		}

		function nn(t, e) {
			return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
		}

		function rn(t) {
			var e = t.indexOf("#");
			return -1 == e ? t : t.substr(0, e)
		}

		function on(t) {
			return t.substr(0, rn(t).lastIndexOf("/") + 1)
		}

		function an(t) {
			return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
		}

		function sn(t, e) {
			this.$$html5 = !0, e = e || "";
			var r = on(t);
			tn(t, this, t), this.$$parse = function(e) {
				var n = nn(r, e);
				if (!$(n)) throw Gr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
				en(n, this, t), this.$$path || (this.$$path = "/"), this.$$compose()
			}, this.$$compose = function() {
				var t = G(this.$$search),
					e = this.$$hash ? "#" + Y(this.$$hash) : "";
				this.$$url = Ze(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
			}, this.$$rewrite = function(i) {
				var o, a;
				return (o = nn(t, i)) !== n ? (a = o, (o = nn(e, o)) !== n ? r + (nn("/", o) || o) : t + a) : (o = nn(r, i)) !== n ? r + o : r == i + "/" ? r : void 0
			}
		}

		function un(t, e) {
			var n = on(t);
			tn(t, this, t), this.$$parse = function(r) {
				function i(t, e, n) {
					var r, i = /^\/?.*?:(\/.*)/;
					return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
				}
				var o = nn(t, r) || nn(n, r),
					a = "#" == o.charAt(0) ? nn(e, o) : this.$$html5 ? o : "";
				if (!$(a)) throw Gr("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', r, e);
				en(a, this, t), this.$$path = i(this.$$path, a, t), this.$$compose()
			}, this.$$compose = function() {
				var n = G(this.$$search),
					r = this.$$hash ? "#" + Y(this.$$hash) : "";
				this.$$url = Ze(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
			}, this.$$rewrite = function(e) {
				return rn(t) == rn(e) ? e : void 0
			}
		}

		function cn(t, e) {
			this.$$html5 = !0, un.apply(this, arguments);
			var n = on(t);
			this.$$rewrite = function(r) {
				var i;
				return t == rn(r) ? r : (i = nn(n, r)) ? t + e + i : n === r + "/" ? n : void 0
			}
		}

		function ln(t) {
			return function() {
				return this[t]
			}
		}

		function fn(t, e) {
			return function(n) {
				return m(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
			}
		}

		function hn() {
			var e = "",
				n = !1;
			this.hashPrefix = function(t) {
				return y(t) ? (e = t, this) : e
			}, this.html5Mode = function(t) {
				return y(t) ? (n = t, this) : n
			}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
				function(r, i, o, a) {
					function s(t) {
						r.$broadcast("$locationChangeSuccess", u.absUrl(), t)
					}
					var u, c, l, f = i.baseHref(),
						h = i.url();
					n ? (l = an(h) + (f || "/"), c = o.history ? sn : cn) : (l = rn(h), c = un), u = new c(l, "#" + e), u.$$parse(u.$$rewrite(h)), a.on("click", function(e) {
						if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
							for (var n = hr(e.target);
								"a" !== ar(n[0].nodeName);)
								if (n[0] === a[0] || !(n = n.parent())[0]) return;
							var o = n.prop("href");
							x(o) && "[object SVGAnimatedString]" === o.toString() && (o = On(o.animVal).href);
							var s = u.$$rewrite(o);
							o && !n.attr("target") && s && !e.isDefaultPrevented() && (e.preventDefault(), s != i.url() && (u.$$parse(s), r.$apply(), t.angular["ff-684208-preventDefault"] = !0))
						}
					}), u.absUrl() != h && i.url(u.absUrl(), !0), i.onUrlChange(function(t) {
						u.absUrl() != t && (r.$evalAsync(function() {
							var e = u.absUrl();
							u.$$parse(t), r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), i.url(e)) : s(e)
						}), r.$$phase || r.$digest())
					});
					var p = 0;
					return r.$watch(function() {
						var t = i.url(),
							e = u.$$replace;
						return p && t == u.absUrl() || (p++, r.$evalAsync(function() {
							r.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (i.url(u.absUrl(), e), s(t))
						})), u.$$replace = !1, p
					}), u
				}
			]
		}

		function pn() {
			var t = !0,
				e = this;
			this.debugEnabled = function(e) {
				return y(e) ? (t = e, this) : t
			}, this.$get = ["$window",
				function(n) {
					function r(t) {
						return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
					}

					function i(t) {
						var e = n.console || {}, i = e[t] || e.log || d,
							a = !1;
						try {
							a = !! i.apply
						} catch (s) {}
						return a ? function() {
							var t = [];
							return o(arguments, function(e) {
								t.push(r(e))
							}), i.apply(e, t)
						} : function(t, e) {
							i(t, null == e ? "" : e)
						}
					}
					return {
						log: i("log"),
						info: i("info"),
						warn: i("warn"),
						error: i("error"),
						debug: function() {
							var n = i("debug");
							return function() {
								t && n.apply(e, arguments)
							}
						}()
					}
				}
			]
		}

		function dn(t, e) {
			if ("constructor" === t) throw Qr("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', e);
			return t
		}

		function gn(t, e) {
			if (t) {
				if (t.constructor === t) throw Qr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
				if (t.document && t.location && t.alert && t.setInterval) throw Qr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
				if (t.children && (t.nodeName || t.on && t.find)) throw Qr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e)
			}
			return t
		}

		function vn(t, e, r, i, o) {
			o = o || {};
			for (var a, s = e.split("."), u = 0; s.length > 1; u++) {
				a = dn(s.shift(), i);
				var c = t[a];
				c || (c = {}, t[a] = c), t = c, t.then && o.unwrapPromises && (Yr(i), "$$v" in t || ! function(t) {
					t.then(function(e) {
						t.$$v = e
					})
				}(t), t.$$v === n && (t.$$v = {}), t = t.$$v)
			}
			return a = dn(s.shift(), i), t[a] = r, r
		}

		function mn(t, e, r, i, o, a, s) {
			return dn(t, a), dn(e, a), dn(r, a), dn(i, a), dn(o, a), s.unwrapPromises ? function(s, u) {
				var c, l = u && u.hasOwnProperty(t) ? u : s;
				return null == l ? l : (l = l[t], l && l.then && (Yr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function(t) {
					c.$$v = t
				})), l = l.$$v), e ? null == l ? n : (l = l[e], l && l.then && (Yr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function(t) {
					c.$$v = t
				})), l = l.$$v), r ? null == l ? n : (l = l[r], l && l.then && (Yr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function(t) {
					c.$$v = t
				})), l = l.$$v), i ? null == l ? n : (l = l[i], l && l.then && (Yr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function(t) {
					c.$$v = t
				})), l = l.$$v), o ? null == l ? n : (l = l[o], l && l.then && (Yr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function(t) {
					c.$$v = t
				})), l = l.$$v), l) : l) : l) : l) : l)
			} : function(a, s) {
				var u = s && s.hasOwnProperty(t) ? s : a;
				return null == u ? u : (u = u[t], e ? null == u ? n : (u = u[e], r ? null == u ? n : (u = u[r], i ? null == u ? n : (u = u[i], o ? null == u ? n : u = u[o] : u) : u) : u) : u)
			}
		}

		function yn(t, e) {
			return dn(t, e),
			function(e, r) {
				return null == e ? n : (r && r.hasOwnProperty(t) ? r : e)[t]
			}
		}

		function xn(t, e, r) {
			return dn(t, r), dn(e, r),
			function(r, i) {
				return null == r ? n : (r = (i && i.hasOwnProperty(t) ? i : r)[t], null == r ? n : r[e])
			}
		}

		function $n(t, e, r) {
			if (ni.hasOwnProperty(t)) return ni[t];
			var i, a = t.split("."),
				s = a.length;
			if (e.unwrapPromises || 1 !== s)
				if (e.unwrapPromises || 2 !== s)
					if (e.csp) i = 6 > s ? mn(a[0], a[1], a[2], a[3], a[4], r, e) : function(t, i) {
						var o, u = 0;
						do o = mn(a[u++], a[u++], a[u++], a[u++], a[u++], r, e)(t, i), i = n, t = o; while (s > u);
						return o
					};
					else {
						var u = "var p;\n";
						o(a, function(t, n) {
							dn(t, r), u += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + t + '"))?k:s)') + '["' + t + '"];\n' + (e.unwrapPromises ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
						}), u += "return s;";
						var c = new Function("s", "k", "pw", u);
						c.toString = v(u), i = e.unwrapPromises ? function(t, e) {
							return c(t, e, Yr)
						} : c
					} else i = xn(a[0], a[1], r);
					else i = yn(a[0], r);
			return "hasOwnProperty" !== t && (ni[t] = i), i
		}

		function bn() {
			var t = {}, e = {
					csp: !1,
					unwrapPromises: !1,
					logPromiseWarnings: !0
				};
			this.unwrapPromises = function(t) {
				return y(t) ? (e.unwrapPromises = !! t, this) : e.unwrapPromises
			}, this.logPromiseWarnings = function(t) {
				return y(t) ? (e.logPromiseWarnings = t, this) : e.logPromiseWarnings
			}, this.$get = ["$filter", "$sniffer", "$log",
				function(n, r, i) {
					return e.csp = r.csp, Yr = function(t) {
						e.logPromiseWarnings && !Jr.hasOwnProperty(t) && (Jr[t] = !0, i.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
					},
					function(r) {
						var i;
						switch (typeof r) {
							case "string":
								if (t.hasOwnProperty(r)) return t[r];
								var o = new ti(e),
									a = new ei(o, n, e);
								return i = a.parse(r, !1), "hasOwnProperty" !== r && (t[r] = i), i;
							case "function":
								return r;
							default:
								return d
						}
					}
				}
			]
		}

		function wn() {
			this.$get = ["$rootScope", "$exceptionHandler",
				function(t, e) {
					return kn(function(e) {
						t.$evalAsync(e)
					}, e)
				}
			]
		}

		function kn(t, e) {
			function r(t) {
				return t
			}

			function i(t) {
				return c(t)
			}

			function a(t) {
				var e = s(),
					n = 0,
					r = k(t) ? [] : {};
				return o(t, function(t, i) {
					n++, u(t).then(function(t) {
						r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
					}, function(t) {
						r.hasOwnProperty(i) || e.reject(t)
					})
				}), 0 === n && e.resolve(r), e.promise
			}
			var s = function() {
				var o, a, c = [];
				return a = {
					resolve: function(e) {
						if (c) {
							var r = c;
							c = n, o = u(e), r.length && t(function() {
								for (var t, e = 0, n = r.length; n > e; e++) t = r[e], o.then(t[0], t[1], t[2])
							})
						}
					},
					reject: function(t) {
						a.resolve(l(t))
					},
					notify: function(e) {
						if (c) {
							var n = c;
							c.length && t(function() {
								for (var t, r = 0, i = n.length; i > r; r++) t = n[r], t[2](e)
							})
						}
					},
					promise: {
						then: function(t, n, a) {
							var u = s(),
								l = function(n) {
									try {
										u.resolve((C(t) ? t : r)(n))
									} catch (i) {
										u.reject(i), e(i)
									}
								}, f = function(t) {
									try {
										u.resolve((C(n) ? n : i)(t))
									} catch (r) {
										u.reject(r), e(r)
									}
								}, h = function(t) {
									try {
										u.notify((C(a) ? a : r)(t))
									} catch (n) {
										e(n)
									}
								};
							return c ? c.push([l, f, h]) : o.then(l, f, h), u.promise
						},
						"catch": function(t) {
							return this.then(null, t)
						},
						"finally": function(t) {
							function e(t, e) {
								var n = s();
								return e ? n.resolve(t) : n.reject(t), n.promise
							}

							function n(n, i) {
								var o = null;
								try {
									o = (t || r)()
								} catch (a) {
									return e(a, !1)
								}
								return o && C(o.then) ? o.then(function() {
									return e(n, i)
								}, function(t) {
									return e(t, !1)
								}) : e(n, i)
							}
							return this.then(function(t) {
								return n(t, !0)
							}, function(t) {
								return n(t, !1)
							})
						}
					}
				}
			}, u = function(e) {
					return e && C(e.then) ? e : {
						then: function(n) {
							var r = s();
							return t(function() {
								r.resolve(n(e))
							}), r.promise
						}
					}
				}, c = function(t) {
					var e = s();
					return e.reject(t), e.promise
				}, l = function(n) {
					return {
						then: function(r, o) {
							var a = s();
							return t(function() {
								try {
									a.resolve((C(o) ? o : i)(n))
								} catch (t) {
									a.reject(t), e(t)
								}
							}), a.promise
						}
					}
				}, f = function(n, o, a, l) {
					var f, h = s(),
						p = function(t) {
							try {
								return (C(o) ? o : r)(t)
							} catch (n) {
								return e(n), c(n)
							}
						}, d = function(t) {
							try {
								return (C(a) ? a : i)(t)
							} catch (n) {
								return e(n), c(n)
							}
						}, g = function(t) {
							try {
								return (C(l) ? l : r)(t)
							} catch (n) {
								e(n)
							}
						};
					return t(function() {
						u(n).then(function(t) {
							f || (f = !0, h.resolve(u(t).then(p, d, g)))
						}, function(t) {
							f || (f = !0, h.resolve(d(t)))
						}, function(t) {
							f || h.notify(g(t))
						})
					}), h.promise
				};
			return {
				defer: s,
				reject: c,
				when: f,
				all: a
			}
		}

		function Cn() {
			var t = 10,
				e = r("$rootScope"),
				n = null;
			this.digestTtl = function(e) {
				return arguments.length && (t = e), t
			}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
				function(r, a, s, u) {
					function l() {
						this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
					}

					function f(t) {
						if (m.$$phase) throw e("inprog", "{0} already in progress", m.$$phase);
						m.$$phase = t
					}

					function h() {
						m.$$phase = null
					}

					function p(t, e) {
						var n = s(t);
						return ne(n, e), n
					}

					function g(t, e, n) {
						do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
					}

					function v() {}
					l.prototype = {
						constructor: l,
						$new: function(t) {
							var e, n;
							return t ? (n = new l, n.$root = this.$root, n.$$asyncQueue = this.$$asyncQueue, n.$$postDigestQueue = this.$$postDigestQueue) : (e = function() {}, e.prototype = this, n = new e, n.$id = c()), n["this"] = n, n.$$listeners = {}, n.$$listenerCount = {}, n.$parent = this, n.$$watchers = n.$$nextSibling = n.$$childHead = n.$$childTail = null, n.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = n, this.$$childTail = n) : this.$$childHead = this.$$childTail = n, n
						},
						$watch: function(t, e, r) {
							var i = this,
								o = p(t, "watch"),
								a = i.$$watchers,
								s = {
									fn: e,
									last: v,
									get: o,
									exp: t,
									eq: !! r
								};
							if (n = null, !C(e)) {
								var u = p(e || d, "listener");
								s.fn = function(t, e, n) {
									u(n)
								}
							}
							if ("string" == typeof t && o.constant) {
								var c = s.fn;
								s.fn = function(t, e, n) {
									c.call(this, t, e, n), O(a, s)
								}
							}
							return a || (a = i.$$watchers = []), a.unshift(s),
							function() {
								O(a, s), n = null
							}
						},
						$watchCollection: function(t, e) {
							function n() {
								a = l(u);
								var t, e;
								if (x(a))
									if (i(a)) {
										o !== f && (o = f, p = o.length = 0, c++), t = a.length, p !== t && (c++, o.length = p = t);
										for (var n = 0; t > n; n++) o[n] !== a[n] && (c++, o[n] = a[n])
									} else {
										o !== h && (o = h = {}, p = 0, c++), t = 0;
										for (e in a) a.hasOwnProperty(e) && (t++, o.hasOwnProperty(e) ? o[e] !== a[e] && (c++, o[e] = a[e]) : (p++, o[e] = a[e], c++));
										if (p > t) {
											c++;
											for (e in o) o.hasOwnProperty(e) && !a.hasOwnProperty(e) && (p--, delete o[e])
										}
									} else o !== a && (o = a, c++);
								return c
							}

							function r() {
								e(a, o, u)
							}
							var o, a, u = this,
								c = 0,
								l = s(t),
								f = [],
								h = {}, p = 0;
							return this.$watch(n, r)
						},
						$digest: function() {
							var r, i, o, s, u, c, l, p, d, g, m, y = this.$$asyncQueue,
								x = this.$$postDigestQueue,
								$ = t,
								b = this,
								w = [];
							f("$digest"), n = null;
							do {
								for (c = !1, p = b; y.length;) {
									try {
										m = y.shift(), m.scope.$eval(m.expression)
									} catch (k) {
										h(), a(k)
									}
									n = null
								}
								t: do {
									if (s = p.$$watchers)
										for (u = s.length; u--;) try {
											if (r = s[u])
												if ((i = r.get(p)) === (o = r.last) || (r.eq ? L(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
													if (r === n) {
														c = !1;
														break t
													}
												} else c = !0, n = r, r.last = r.eq ? P(i) : i, r.fn(i, o === v ? i : o, p), 5 > $ && (d = 4 - $, w[d] || (w[d] = []), g = C(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, g += "; newVal: " + H(i) + "; oldVal: " + H(o), w[d].push(g))
										} catch (k) {
											h(), a(k)
										}
									if (!(l = p.$$childHead || p !== b && p.$$nextSibling))
										for (; p !== b && !(l = p.$$nextSibling);) p = p.$parent
								} while (p = l);
								if ((c || y.length) && !$--) throw h(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, H(w))
							} while (c || y.length);
							for (h(); x.length;) try {
								x.shift()()
							} catch (k) {
								a(k)
							}
						},
						$destroy: function() {
							if (!this.$$destroyed) {
								var t = this.$parent;
								this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (o(this.$$listenerCount, F(null, g, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
							}
						},
						$eval: function(t, e) {
							return s(t)(this, e)
						},
						$evalAsync: function(t) {
							m.$$phase || m.$$asyncQueue.length || u.defer(function() {
								m.$$asyncQueue.length && m.$digest()
							}), this.$$asyncQueue.push({
								scope: this,
								expression: t
							})
						},
						$$postDigest: function(t) {
							this.$$postDigestQueue.push(t)
						},
						$apply: function(t) {
							try {
								return f("$apply"), this.$eval(t)
							} catch (e) {
								a(e)
							} finally {
								h();
								try {
									m.$digest()
								} catch (e) {
									throw a(e), e
								}
							}
						},
						$on: function(t, e) {
							var n = this.$$listeners[t];
							n || (this.$$listeners[t] = n = []), n.push(e);
							var r = this;
							do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
							var i = this;
							return function() {
								n[j(n, e)] = null, g(i, 1, t)
							}
						},
						$emit: function(t) {
							var e, n, r, i = [],
								o = this,
								s = !1,
								u = {
									name: t,
									targetScope: o,
									stopPropagation: function() {
										s = !0
									},
									preventDefault: function() {
										u.defaultPrevented = !0
									},
									defaultPrevented: !1
								}, c = B([u], arguments, 1);
							do {
								for (e = o.$$listeners[t] || i, u.currentScope = o, n = 0, r = e.length; r > n; n++)
									if (e[n]) try {
										e[n].apply(null, c)
									} catch (l) {
										a(l)
									} else e.splice(n, 1), n--, r--;
								if (s) return u;
								o = o.$parent
							} while (o);
							return u
						},
						$broadcast: function(t) {
							for (var e, n, r, i = this, o = i, s = i, u = {
									name: t,
									targetScope: i,
									preventDefault: function() {
										u.defaultPrevented = !0
									},
									defaultPrevented: !1
								}, c = B([u], arguments, 1); o = s;) {
								for (u.currentScope = o, e = o.$$listeners[t] || [], n = 0, r = e.length; r > n; n++)
									if (e[n]) try {
										e[n].apply(null, c)
									} catch (l) {
										a(l)
									} else e.splice(n, 1), n--, r--;
								if (!(s = o.$$listenerCount[t] && o.$$childHead || o !== i && o.$$nextSibling))
									for (; o !== i && !(s = o.$$nextSibling);) o = o.$parent
							}
							return u
						}
					};
					var m = new l;
					return m
				}
			]
		}

		function Sn() {
			var t = /^\s*(https?|ftp|mailto|tel|file):/,
				e = /^\s*(https?|ftp|file):|data:image\//;
			this.aHrefSanitizationWhitelist = function(e) {
				return y(e) ? (t = e, this) : t
			}, this.imgSrcSanitizationWhitelist = function(t) {
				return y(t) ? (e = t, this) : e
			}, this.$get = function() {
				return function(n, r) {
					var i, o = r ? e : t;
					return fr && !(fr >= 8) || (i = On(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
				}
			}
		}

		function _n(t) {
			return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		}

		function Tn(t) {
			if ("self" === t) return t;
			if ($(t)) {
				if (t.indexOf("***") > -1) throw ri("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
				return t = _n(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
			}
			if (S(t)) return new RegExp("^" + t.source + "$");
			throw ri("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
		}

		function En(t) {
			var e = [];
			return y(t) && o(t, function(t) {
				e.push(Tn(t))
			}), e
		}

		function An() {
			this.SCE_CONTEXTS = ii;
			var t = ["self"],
				e = [];
			this.resourceUrlWhitelist = function(e) {
				return arguments.length && (t = En(e)), t
			}, this.resourceUrlBlacklist = function(t) {
				return arguments.length && (e = En(t)), e
			}, this.$get = ["$injector",
				function(r) {
					function i(t, e) {
						return "self" === t ? Pn(e) : !! t.exec(e.href)
					}

					function o(n) {
						var r, o, a = On(n.toString()),
							s = !1;
						for (r = 0, o = t.length; o > r; r++)
							if (i(t[r], a)) {
								s = !0;
								break
							}
						if (s)
							for (r = 0, o = e.length; o > r; r++)
								if (i(e[r], a)) {
									s = !1;
									break
								}
						return s
					}

					function a(t) {
						var e = function(t) {
							this.$$unwrapTrustedValue = function() {
								return t
							}
						};
						return t && (e.prototype = new t), e.prototype.valueOf = function() {
							return this.$$unwrapTrustedValue()
						}, e.prototype.toString = function() {
							return this.$$unwrapTrustedValue().toString()
						}, e
					}

					function s(t, e) {
						var r = h.hasOwnProperty(t) ? h[t] : null;
						if (!r) throw ri("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
						if (null === e || e === n || "" === e) return e;
						if ("string" != typeof e) throw ri("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
						return new r(e)
					}

					function u(t) {
						return t instanceof f ? t.$$unwrapTrustedValue() : t
					}

					function c(t, e) {
						if (null === e || e === n || "" === e) return e;
						var r = h.hasOwnProperty(t) ? h[t] : null;
						if (r && e instanceof r) return e.$$unwrapTrustedValue();
						if (t === ii.RESOURCE_URL) {
							if (o(e)) return e;
							throw ri("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
						}
						if (t === ii.HTML) return l(e);
						throw ri("unsafe", "Attempting to use an unsafe value in a safe context.")
					}
					var l = function() {
						throw ri("unsafe", "Attempting to use an unsafe value in a safe context.")
					};
					r.has("$sanitize") && (l = r.get("$sanitize"));
					var f = a(),
						h = {};
					return h[ii.HTML] = a(f), h[ii.CSS] = a(f), h[ii.URL] = a(f), h[ii.JS] = a(f), h[ii.RESOURCE_URL] = a(h[ii.URL]), {
						trustAs: s,
						getTrusted: c,
						valueOf: u
					}
				}
			]
		}

		function Nn() {
			var t = !0;
			this.enabled = function(e) {
				return arguments.length && (t = !! e), t
			}, this.$get = ["$parse", "$sniffer", "$sceDelegate",
				function(e, n, r) {
					if (t && n.msie && n.msieDocumentMode < 8) throw ri("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
					var i = P(ii);
					i.isEnabled = function() {
						return t
					}, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, t || (i.trustAs = i.getTrusted = function(t, e) {
						return e
					}, i.valueOf = g), i.parseAs = function(t, n) {
						var r = e(n);
						return r.literal && r.constant ? r : function(e, n) {
							return i.getTrusted(t, r(e, n))
						}
					};
					var a = i.parseAs,
						s = i.getTrusted,
						u = i.trustAs;
					return o(ii, function(t, e) {
						var n = ar(e);
						i[ce("parse_as_" + n)] = function(e) {
							return a(t, e)
						}, i[ce("get_trusted_" + n)] = function(e) {
							return s(t, e)
						}, i[ce("trust_as_" + n)] = function(e) {
							return u(t, e)
						}
					}), i
				}
			]
		}

		function Mn() {
			this.$get = ["$window", "$document",
				function(t, e) {
					var n, r, i = {}, o = h((/android (\d+)/.exec(ar((t.navigator || {}).userAgent)) || [])[1]),
						a = /Boxee/i.test((t.navigator || {}).userAgent),
						s = e[0] || {}, u = s.documentMode,
						c = /^(Moz|webkit|O|ms)(?=[A-Z])/,
						l = s.body && s.body.style,
						f = !1,
						p = !1;
					if (l) {
						for (var d in l)
							if (r = c.exec(d)) {
								n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
								break
							}
						n || (n = "WebkitOpacity" in l && "webkit"), f = !! ("transition" in l || n + "Transition" in l), p = !! ("animation" in l || n + "Animation" in l), !o || f && p || (f = $(s.body.style.webkitTransition), p = $(s.body.style.webkitAnimation))
					}
					return {
						history: !(!t.history || !t.history.pushState || 4 > o || a),
						hashchange: "onhashchange" in t && (!u || u > 7),
						hasEvent: function(t) {
							if ("input" == t && 9 == fr) return !1;
							if (m(i[t])) {
								var e = s.createElement("div");
								i[t] = "on" + t in e
							}
							return i[t]
						},
						csp: R(),
						vendorPrefix: n,
						transitions: f,
						animations: p,
						android: o,
						msie: fr,
						msieDocumentMode: u
					}
				}
			]
		}

		function jn() {
			this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
				function(t, e, n, r) {
					function i(i, a, s) {
						var u, c = n.defer(),
							l = c.promise,
							f = y(s) && !s;
						return u = e.defer(function() {
							try {
								c.resolve(i())
							} catch (e) {
								c.reject(e), r(e)
							} finally {
								delete o[l.$$timeoutId]
							}
							f || t.$apply()
						}, a), l.$$timeoutId = u, o[u] = c, l
					}
					var o = {};
					return i.cancel = function(t) {
						return t && t.$$timeoutId in o ? (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
					}, i
				}
			]
		}

		function On(t) {
			var e = t;
			return fr && (oi.setAttribute("href", e), e = oi.href), oi.setAttribute("href", e), {
				href: oi.href,
				protocol: oi.protocol ? oi.protocol.replace(/:$/, "") : "",
				host: oi.host,
				search: oi.search ? oi.search.replace(/^\?/, "") : "",
				hash: oi.hash ? oi.hash.replace(/^#/, "") : "",
				hostname: oi.hostname,
				port: oi.port,
				pathname: "/" === oi.pathname.charAt(0) ? oi.pathname : "/" + oi.pathname
			}
		}

		function Pn(t) {
			var e = $(t) ? On(t) : t;
			return e.protocol === ai.protocol && e.host === ai.host
		}

		function Dn() {
			this.$get = v(t)
		}

		function Ln(t) {
			function e(r, i) {
				if (x(r)) {
					var a = {};
					return o(r, function(t, n) {
						a[n] = e(n, t)
					}), a
				}
				return t.factory(r + n, i)
			}
			var n = "Filter";
			this.register = e, this.$get = ["$injector",
				function(t) {
					return function(e) {
						return t.get(e + n)
					}
				}
			], e("currency", Bn), e("date", Wn), e("filter", Rn), e("json", Xn), e("limitTo", Gn), e("lowercase", fi), e("number", qn), e("orderBy", Yn), e("uppercase", hi)
		}

		function Rn() {
			return function(t, e, n) {
				if (!k(t)) return t;
				var r = typeof n,
					i = [];
				i.check = function(t) {
					for (var e = 0; e < i.length; e++)
						if (!i[e](t)) return !1;
					return !0
				}, "function" !== r && (n = "boolean" === r && n ? function(t, e) {
					return $r.equals(t, e)
				} : function(t, e) {
					if (t && e && "object" == typeof t && "object" == typeof e) {
						for (var r in t)
							if ("$" !== r.charAt(0) && sr.call(t, r) && n(t[r], e[r])) return !0;
						return !1
					}
					return e = ("" + e).toLowerCase(), ("" + t).toLowerCase().indexOf(e) > -1
				});
				var o = function(t, e) {
					if ("string" == typeof e && "!" === e.charAt(0)) return !o(t, e.substr(1));
					switch (typeof t) {
						case "boolean":
						case "number":
						case "string":
							return n(t, e);
						case "object":
							switch (typeof e) {
								case "object":
									return n(t, e);
								default:
									for (var r in t)
										if ("$" !== r.charAt(0) && o(t[r], e)) return !0
							}
							return !1;
						case "array":
							for (var i = 0; i < t.length; i++)
								if (o(t[i], e)) return !0;
							return !1;
						default:
							return !1
					}
				};
				switch (typeof e) {
					case "boolean":
					case "number":
					case "string":
						e = {
							$: e
						};
					case "object":
						for (var a in e)! function(t) {
							"undefined" != typeof e[t] && i.push(function(n) {
								return o("$" == t ? n : n && n[t], e[t])
							})
						}(a);
						break;
					case "function":
						i.push(e);
						break;
					default:
						return t
				}
				for (var s = [], u = 0; u < t.length; u++) {
					var c = t[u];
					i.check(c) && s.push(c)
				}
				return s
			}
		}

		function Bn(t) {
			var e = t.NUMBER_FORMATS;
			return function(t, n) {
				return m(n) && (n = e.CURRENCY_SYM), Fn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
			}
		}

		function qn(t) {
			var e = t.NUMBER_FORMATS;
			return function(t, n) {
				return Fn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
			}
		}

		function Fn(t, e, n, r, i) {
			if (isNaN(t) || !isFinite(t)) return "";
			var o = 0 > t;
			t = Math.abs(t);
			var a = t + "",
				s = "",
				u = [],
				c = !1;
			if (-1 !== a.indexOf("e")) {
				var l = a.match(/([\d\.]+)e(-?)(\d+)/);
				l && "-" == l[2] && l[3] > i + 1 ? a = "0" : (s = a, c = !0)
			}
			if (c) i > 0 && t > -1 && 1 > t && (s = t.toFixed(i));
			else {
				var f = (a.split(si)[1] || "").length;
				m(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac));
				var h = Math.pow(10, i);
				t = Math.round(t * h) / h;
				var p = ("" + t).split(si),
					d = p[0];
				p = p[1] || "";
				var g, v = 0,
					y = e.lgSize,
					x = e.gSize;
				if (d.length >= y + x)
					for (v = d.length - y, g = 0; v > g; g++)(v - g) % x === 0 && 0 !== g && (s += n), s += d.charAt(g);
				for (g = v; g < d.length; g++)(d.length - g) % y === 0 && 0 !== g && (s += n), s += d.charAt(g);
				for (; p.length < i;) p += "0";
				i && "0" !== i && (s += r + p.substr(0, i))
			}
			return u.push(o ? e.negPre : e.posPre), u.push(s), u.push(o ? e.negSuf : e.posSuf), u.join("")
		}

		function In(t, e, n) {
			var r = "";
			for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
			return n && (t = t.substr(t.length - e)), r + t
		}

		function Hn(t, e, n, r) {
			return n = n || 0,
			function(i) {
				var o = i["get" + t]();
				return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), In(o, e, r)
			}
		}

		function Un(t, e) {
			return function(n, r) {
				var i = n["get" + t](),
					o = ur(e ? "SHORT" + t : t);
				return r[o][i]
			}
		}

		function Vn(t) {
			var e = -1 * t.getTimezoneOffset(),
				n = e >= 0 ? "+" : "";
			return n += In(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + In(Math.abs(e % 60), 2)
		}

		function zn(t, e) {
			return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
		}

		function Wn(t) {
			function e(t) {
				var e;
				if (e = t.match(n)) {
					var r = new Date(0),
						i = 0,
						o = 0,
						a = e[8] ? r.setUTCFullYear : r.setFullYear,
						s = e[8] ? r.setUTCHours : r.setHours;
					e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])), a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
					var u = h(e[4] || 0) - i,
						c = h(e[5] || 0) - o,
						l = h(e[6] || 0),
						f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
					return s.call(r, u, c, l, f), r
				}
				return t
			}
			var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
			return function(n, r) {
				var i, a, s = "",
					u = [];
				if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, $(n) && (n = li.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !w(n)) return n;
				for (; r;) a = ci.exec(r), a ? (u = B(u, a, 1), r = u.pop()) : (u.push(r), r = null);
				return o(u, function(e) {
					i = ui[e], s += i ? i(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				}), s
			}
		}

		function Xn() {
			return function(t) {
				return H(t, !0)
			}
		}

		function Gn() {
			return function(t, e) {
				if (!k(t) && !$(t)) return t;
				if (e = h(e), $(t)) return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
				var n, r, i = [];
				for (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0 ? (n = 0, r = e) : (n = t.length + e, r = t.length); r > n; n++) i.push(t[n]);
				return i
			}
		}

		function Yn(t) {
			return function(e, n, r) {
				function i(t, e) {
					for (var r = 0; r < n.length; r++) {
						var i = n[r](t, e);
						if (0 !== i) return i
					}
					return 0
				}

				function o(t, e) {
					return V(e) ? function(e, n) {
						return t(n, e)
					} : t
				}

				function a(t, e) {
					var n = typeof t,
						r = typeof e;
					return n == r ? ("string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
				}
				if (!k(e)) return e;
				if (!n) return e;
				n = k(n) ? n : [n], n = N(n, function(e) {
					var n = !1,
						r = e || g;
					return $(e) && (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), r = t(e)), o(function(t, e) {
						return a(r(t), r(e))
					}, n)
				});
				for (var s = [], u = 0; u < e.length; u++) s.push(e[u]);
				return s.sort(o(i, r))
			}
		}

		function Qn(t) {
			return C(t) && (t = {
				link: t
			}), t.restrict = t.restrict || "AC", v(t)
		}

		function Jn(t, e) {
			function n(e, n) {
				n = n ? "-" + Z(n, "-") : "", t.removeClass((e ? Si : Ci) + n).addClass((e ? Ci : Si) + n)
			}
			var r = this,
				i = t.parent().controller("form") || gi,
				a = 0,
				s = r.$error = {}, u = [];
			r.$name = e.name || e.ngForm, r.$dirty = !1, r.$pristine = !0, r.$valid = !0, r.$invalid = !1, i.$addControl(r), t.addClass(_i), n(!0), r.$addControl = function(t) {
				re(t.$name, "input"), u.push(t), t.$name && (r[t.$name] = t)
			}, r.$removeControl = function(t) {
				t.$name && r[t.$name] === t && delete r[t.$name], o(s, function(e, n) {
					r.$setValidity(n, !0, t)
				}), O(u, t)
			}, r.$setValidity = function(t, e, o) {
				var u = s[t];
				if (e) u && (O(u, o), u.length || (a--, a || (n(e), r.$valid = !0, r.$invalid = !1), s[t] = !1, n(!0, t), i.$setValidity(t, !0, r)));
				else {
					if (a || n(e), u) {
						if (M(u, o)) return
					} else s[t] = u = [], a++, n(!1, t), i.$setValidity(t, !1, r);
					u.push(o), r.$valid = !1, r.$invalid = !0
				}
			}, r.$setDirty = function() {
				t.removeClass(_i).addClass(Ti), r.$dirty = !0, r.$pristine = !1, i.$setDirty()
			}, r.$setPristine = function() {
				t.removeClass(Ti).addClass(_i), r.$dirty = !1, r.$pristine = !0, o(u, function(t) {
					t.$setPristine()
				})
			}
		}

		function Kn(t, e, r, i) {
			return t.$setValidity(e, r), r ? i : n
		}

		function Zn(t, e, n, i, o, a) {
			if (!o.android) {
				var s = !1;
				e.on("compositionstart", function() {
					s = !0
				}), e.on("compositionend", function() {
					s = !1, u()
				})
			}
			var u = function() {
				if (!s) {
					var r = e.val();
					V(n.ngTrim || "T") && (r = wr(r)), i.$viewValue !== r && (t.$$phase ? i.$setViewValue(r) : t.$apply(function() {
						i.$setViewValue(r)
					}))
				}
			};
			if (o.hasEvent("input")) e.on("input", u);
			else {
				var c, l = function() {
						c || (c = a.defer(function() {
							u(), c = null
						}))
					};
				e.on("keydown", function(t) {
					var e = t.keyCode;
					91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || l()
				}), o.hasEvent("paste") && e.on("paste cut", l)
			}
			e.on("change", u), i.$render = function() {
				e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
			};
			var f, p, d = n.ngPattern;
			if (d) {
				var g = function(t, e) {
					return Kn(i, "pattern", i.$isEmpty(e) || t.test(e), e)
				};
				p = d.match(/^\/(.*)\/([gim]*)$/), p ? (d = new RegExp(p[1], p[2]), f = function(t) {
					return g(d, t)
				}) : f = function(n) {
					var i = t.$eval(d);
					if (!i || !i.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", d, i, z(e));
					return g(i, n)
				}, i.$formatters.push(f), i.$parsers.push(f)
			}
			if (n.ngMinlength) {
				var v = h(n.ngMinlength),
					m = function(t) {
						return Kn(i, "minlength", i.$isEmpty(t) || t.length >= v, t)
					};
				i.$parsers.push(m), i.$formatters.push(m)
			}
			if (n.ngMaxlength) {
				var y = h(n.ngMaxlength),
					x = function(t) {
						return Kn(i, "maxlength", i.$isEmpty(t) || t.length <= y, t)
					};
				i.$parsers.push(x), i.$formatters.push(x)
			}
		}

		function tr(t, e, r, i, o, a) {
			if (Zn(t, e, r, i, o, a), i.$parsers.push(function(t) {
				var e = i.$isEmpty(t);
				return e || bi.test(t) ? (i.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t)) : (i.$setValidity("number", !1), n)
			}), i.$formatters.push(function(t) {
				return i.$isEmpty(t) ? "" : "" + t
			}), r.min) {
				var s = function(t) {
					var e = parseFloat(r.min);
					return Kn(i, "min", i.$isEmpty(t) || t >= e, t)
				};
				i.$parsers.push(s), i.$formatters.push(s)
			}
			if (r.max) {
				var u = function(t) {
					var e = parseFloat(r.max);
					return Kn(i, "max", i.$isEmpty(t) || e >= t, t)
				};
				i.$parsers.push(u), i.$formatters.push(u)
			}
			i.$formatters.push(function(t) {
				return Kn(i, "number", i.$isEmpty(t) || b(t), t)
			})
		}

		function er(t, e, n, r, i, o) {
			Zn(t, e, n, r, i, o);
			var a = function(t) {
				return Kn(r, "url", r.$isEmpty(t) || xi.test(t), t)
			};
			r.$formatters.push(a), r.$parsers.push(a)
		}

		function nr(t, e, n, r, i, o) {
			Zn(t, e, n, r, i, o);
			var a = function(t) {
				return Kn(r, "email", r.$isEmpty(t) || $i.test(t), t)
			};
			r.$formatters.push(a), r.$parsers.push(a)
		}

		function rr(t, e, n, r) {
			m(n.name) && e.attr("name", c()), e.on("click", function() {
				e[0].checked && t.$apply(function() {
					r.$setViewValue(n.value)
				})
			}), r.$render = function() {
				var t = n.value;
				e[0].checked = t == r.$viewValue
			}, n.$observe("value", r.$render)
		}

		function ir(t, e, n, r) {
			var i = n.ngTrueValue,
				o = n.ngFalseValue;
			$(i) || (i = !0), $(o) || (o = !1), e.on("click", function() {
				t.$apply(function() {
					r.$setViewValue(e[0].checked)
				})
			}), r.$render = function() {
				e[0].checked = r.$viewValue
			}, r.$isEmpty = function(t) {
				return t !== i
			}, r.$formatters.push(function(t) {
				return t === i
			}), r.$parsers.push(function(t) {
				return t ? i : o
			})
		}

		function or(t, e) {
			return t = "ngClass" + t,
			function() {
				return {
					restrict: "AC",
					link: function(n, r, i) {
						function a(t) {
							if (e === !0 || n.$index % 2 === e) {
								var r = s(t || "");
								u ? L(t, u) || i.$updateClass(r, s(u)) : i.$addClass(r)
							}
							u = P(t)
						}

						function s(t) {
							if (k(t)) return t.join(" ");
							if (x(t)) {
								var e = [];
								return o(t, function(t, n) {
									t && e.push(n)
								}), e.join(" ")
							}
							return t
						}
						var u;
						n.$watch(i[t], a, !0), i.$observe("class", function() {
							a(n.$eval(i[t]))
						}), "ngClass" !== t && n.$watch("$index", function(r, o) {
							var a = 1 & r;
							if (a !== o & 1) {
								var u = s(n.$eval(i[t]));
								a === e ? i.$addClass(u) : i.$removeClass(u)
							}
						})
					}
				}
			}
		}
		var ar = function(t) {
			return $(t) ? t.toLowerCase() : t
		}, sr = Object.prototype.hasOwnProperty,
			ur = function(t) {
				return $(t) ? t.toUpperCase() : t
			}, cr = function(t) {
				return $(t) ? t.replace(/[A-Z]/g, function(t) {
					return String.fromCharCode(32 | t.charCodeAt(0))
				}) : t
			}, lr = function(t) {
				return $(t) ? t.replace(/[a-z]/g, function(t) {
					return String.fromCharCode(-33 & t.charCodeAt(0))
				}) : t
			};
		"i" !== "I".toLowerCase() && (ar = cr, ur = lr);
		var fr, hr, pr, dr, gr, vr = [].slice,
			mr = [].push,
			yr = Object.prototype.toString,
			xr = r("ng"),
			$r = (t.angular, t.angular || (t.angular = {})),
			br = ["0", "0", "0"];
		fr = h((/msie (\d+)/.exec(ar(navigator.userAgent)) || [])[1]), isNaN(fr) && (fr = h((/trident\/.*; rv:(\d+)/.exec(ar(navigator.userAgent)) || [])[1])), d.$inject = [], g.$inject = [];
		var wr = function() {
			return String.prototype.trim ? function(t) {
				return $(t) ? t.trim() : t
			} : function(t) {
				return $(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
			}
		}();
		gr = 9 > fr ? function(t) {
			return t = t.nodeName ? t : t[0], t.scopeName && "HTML" != t.scopeName ? ur(t.scopeName + ":" + t.nodeName) : t.nodeName
		} : function(t) {
			return t.nodeName ? t.nodeName : t[0].nodeName
		};
		var kr = /[A-Z]/g,
			Cr = {
				full: "1.2.13-build.2260+sha.2b73027",
				major: 1,
				minor: 2,
				dot: 13,
				codeName: "snapshot"
			}, Sr = fe.cache = {}, _r = fe.expando = "ng-" + (new Date).getTime(),
			Tr = 1,
			Er = t.document.addEventListener ? function(t, e, n) {
				t.addEventListener(e, n, !1)
		} : function(t, e, n) {
			t.attachEvent("on" + e, n)
		}, Ar = t.document.removeEventListener ? function(t, e, n) {
			t.removeEventListener(e, n, !1)
		} : function(t, e, n) {
			t.detachEvent("on" + e, n)
		}, Nr = /([\:\-\_]+(.))/g,
			Mr = /^moz([A-Z])/,
			jr = r("jqLite"),
			Or = fe.prototype = {
				ready: function(n) {
					function r() {
						i || (i = !0, n())
					}
					var i = !1;
					"complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), fe(t).on("load", r))
				},
				toString: function() {
					var t = [];
					return o(this, function(e) {
						t.push("" + e)
					}), "[" + t.join(", ") + "]"
				},
				eq: function(t) {
					return hr(t >= 0 ? this[t] : this[this.length + t])
				},
				length: 0,
				push: mr,
				sort: [].sort,
				splice: [].splice
			}, Pr = {};
		o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
			Pr[ar(t)] = t
		});
		var Dr = {};
		o("input,select,option,textarea,button,form,details".split(","), function(t) {
			Dr[ur(t)] = !0
		}), o({
			data: me,
			inheritedData: ke,
			scope: function(t) {
				return hr(t).data("$scope") || ke(t.parentNode || t, ["$isolateScope", "$scope"])
			},
			isolateScope: function(t) {
				return hr(t).data("$isolateScope") || hr(t).data("$isolateScopeNoTemplate")
			},
			controller: we,
			injector: function(t) {
				return ke(t, "$injector")
			},
			removeAttr: function(t, e) {
				t.removeAttribute(e)
			},
			hasClass: ye,
			css: function(t, e, r) {
				if (e = ce(e), !y(r)) {
					var i;
					return 8 >= fr && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto")), i = i || t.style[e], 8 >= fr && (i = "" === i ? n : i), i
				}
				t.style[e] = r
			},
			attr: function(t, e, r) {
				var i = ar(e);
				if (Pr[i]) {
					if (!y(r)) return t[e] || (t.attributes.getNamedItem(e) || d).specified ? i : n;
					r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
				} else if (y(r)) t.setAttribute(e, r);
				else if (t.getAttribute) {
					var o = t.getAttribute(e, 2);
					return null === o ? n : o
				}
			},
			prop: function(t, e, n) {
				return y(n) ? void(t[e] = n) : t[e]
			},
			text: function() {
				function t(t, n) {
					var r = e[t.nodeType];
					return m(n) ? r ? t[r] : "" : void(t[r] = n)
				}
				var e = [];
				return 9 > fr ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent", t.$dv = "", t
			}(),
			val: function(t, e) {
				if (m(e)) {
					if ("SELECT" === gr(t) && t.multiple) {
						var n = [];
						return o(t.options, function(t) {
							t.selected && n.push(t.value || t.text)
						}), 0 === n.length ? null : n
					}
					return t.value
				}
				t.value = e
			},
			html: function(t, e) {
				if (m(e)) return t.innerHTML;
				for (var n = 0, r = t.childNodes; n < r.length; n++) pe(r[n]);
				t.innerHTML = e
			},
			empty: Ce
		}, function(t, e) {
			fe.prototype[e] = function(e, r) {
				var i, o;
				if (t !== Ce && (2 == t.length && t !== ye && t !== we ? e : r) === n) {
					if (x(e)) {
						for (i = 0; i < this.length; i++)
							if (t === me) t(this[i], e);
							else
								for (o in e) t(this[i], o, e[o]);
						return this
					}
					for (var a = t.$dv, s = a === n ? Math.min(this.length, 1) : this.length, u = 0; s > u; u++) {
						var c = t(this[u], e, r);
						a = a ? a + c : c
					}
					return a
				}
				for (i = 0; i < this.length; i++) t(this[i], e, r);
				return this
			}
		}), o({
			removeData: ge,
			dealoc: pe,
			on: function lo(t, n, r, i) {
				if (y(i)) throw jr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
				var a = ve(t, "events"),
					s = ve(t, "handle");
				a || ve(t, "events", a = {}), s || ve(t, "handle", s = _e(t, a)), o(n.split(" "), function(n) {
					var i = a[n];
					if (!i) {
						if ("mouseenter" == n || "mouseleave" == n) {
							var o = e.body.contains || e.body.compareDocumentPosition ? function(t, e) {
								var n = 9 === t.nodeType ? t.documentElement : t,
									r = e && e.parentNode;
								return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
							} : function(t, e) {
								if (e)
									for (; e = e.parentNode;)
										if (e === t) return !0;
								return !1
							};
							a[n] = [];
							var u = {
								mouseleave: "mouseout",
								mouseenter: "mouseover"
							};
							lo(t, u[n], function(t) {
								var e = this,
									r = t.relatedTarget;
								(!r || r !== e && !o(e, r)) && s(t, n)
							})
						} else Er(t, n, s), a[n] = [];
						i = a[n]
					}
					i.push(r)
				})
			},
			off: de,
			one: function(t, e, n) {
				t = hr(t), t.on(e, function r() {
					t.off(e, n), t.off(e, r)
				}), t.on(e, n)
			},
			replaceWith: function(t, e) {
				var n, r = t.parentNode;
				pe(t), o(new fe(e), function(e) {
					n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
				})
			},
			children: function(t) {
				var e = [];
				return o(t.childNodes, function(t) {
					1 === t.nodeType && e.push(t)
				}), e
			},
			contents: function(t) {
				return t.childNodes || []
			},
			append: function(t, e) {
				o(new fe(e), function(e) {
					(1 === t.nodeType || 11 === t.nodeType) && t.appendChild(e)
				})
			},
			prepend: function(t, e) {
				if (1 === t.nodeType) {
					var n = t.firstChild;
					o(new fe(e), function(e) {
						t.insertBefore(e, n)
					})
				}
			},
			wrap: function(t, e) {
				e = hr(e)[0];
				var n = t.parentNode;
				n && n.replaceChild(e, t), e.appendChild(t)
			},
			remove: function(t) {
				pe(t);
				var e = t.parentNode;
				e && e.removeChild(t)
			},
			after: function(t, e) {
				var n = t,
					r = t.parentNode;
				o(new fe(e), function(t) {
					r.insertBefore(t, n.nextSibling), n = t
				})
			},
			addClass: $e,
			removeClass: xe,
			toggleClass: function(t, e, n) {
				m(n) && (n = !ye(t, e)), (n ? $e : xe)(t, e)
			},
			parent: function(t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			next: function(t) {
				if (t.nextElementSibling) return t.nextElementSibling;
				for (var e = t.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
				return e
			},
			find: function(t, e) {
				return t.getElementsByTagName ? t.getElementsByTagName(e) : []
			},
			clone: he,
			triggerHandler: function(t, e, n) {
				var r = (ve(t, "events") || {})[e];
				n = n || [];
				var i = [{
					preventDefault: d,
					stopPropagation: d
				}];
				o(r, function(e) {
					e.apply(t, i.concat(n))
				})
			}
		}, function(t, e) {
			fe.prototype[e] = function(e, n, r) {
				for (var i, o = 0; o < this.length; o++) m(i) ? (i = t(this[o], e, n, r), y(i) && (i = hr(i))) : be(i, t(this[o], e, n, r));
				return y(i) ? i : this
			}, fe.prototype.bind = fe.prototype.on, fe.prototype.unbind = fe.prototype.off
		}), Ee.prototype = {
			put: function(t, e) {
				this[Te(t)] = e
			},
			get: function(t) {
				return this[Te(t)]
			},
			remove: function(t) {
				var e = this[t = Te(t)];
				return delete this[t], e
			}
		};
		var Lr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
			Rr = /,/,
			Br = /^\s*(_?)(\S+?)\1\s*$/,
			qr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
			Fr = r("$injector"),
			Ir = r("$animate"),
			Hr = ["$provide",
				function(t) {
					this.$$selectors = {}, this.register = function(e, n) {
						var r = e + "-animation";
						if (e && "." != e.charAt(0)) throw Ir("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
						this.$$selectors[e.substr(1)] = r, t.factory(r, n)
					}, this.classNameFilter = function(t) {
						return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
					}, this.$get = ["$timeout",
						function(t) {
							return {
								enter: function(e, n, r, i) {
									r ? r.after(e) : (n && n[0] || (n = r.parent()), n.append(e)), i && t(i, 0, !1)
								},
								leave: function(e, n) {
									e.remove(), n && t(n, 0, !1)
								},
								move: function(t, e, n, r) {
									this.enter(t, e, n, r)
								},
								addClass: function(e, n, r) {
									n = $(n) ? n : k(n) ? n.join(" ") : "", o(e, function(t) {
										$e(t, n)
									}), r && t(r, 0, !1)
								},
								removeClass: function(e, n, r) {
									n = $(n) ? n : k(n) ? n.join(" ") : "", o(e, function(t) {
										xe(t, n)
									}), r && t(r, 0, !1)
								},
								enabled: d
							}
						}
					]
				}
			],
			Ur = r("$compile");
		Le.$inject = ["$provide", "$$sanitizeUriProvider"];
		var Vr = /^(x[\:\-_]|data[\:\-_])/i,
			zr = r("$interpolate"),
			Wr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
			Xr = {
				http: 80,
				https: 443,
				ftp: 21
			}, Gr = r("$location");
		cn.prototype = un.prototype = sn.prototype = {
			$$html5: !1,
			$$replace: !1,
			absUrl: ln("$$absUrl"),
			url: function(t, e) {
				if (m(t)) return this.$$url;
				var n = Wr.exec(t);
				return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", e), this
			},
			protocol: ln("$$protocol"),
			host: ln("$$host"),
			port: ln("$$port"),
			path: fn("$$path", function(t) {
				return "/" == t.charAt(0) ? t : "/" + t
			}),
			search: function(t, e) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if ($(t)) this.$$search = X(t);
						else {
							if (!x(t)) throw Gr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
							this.$$search = t
						}
						break;
					default:
						m(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
				}
				return this.$$compose(), this
			},
			hash: fn("$$hash", g),
			replace: function() {
				return this.$$replace = !0, this
			}
		};
		var Yr, Qr = r("$parse"),
			Jr = {}, Kr = {
				"null": function() {
					return null
				},
				"true": function() {
					return !0
				},
				"false": function() {
					return !1
				},
				undefined: d,
				"+": function(t, e, r, i) {
					return r = r(t, e), i = i(t, e), y(r) ? y(i) ? r + i : r : y(i) ? i : n
				},
				"-": function(t, e, n, r) {
					return n = n(t, e), r = r(t, e), (y(n) ? n : 0) - (y(r) ? r : 0)
				},
				"*": function(t, e, n, r) {
					return n(t, e) * r(t, e)
				},
				"/": function(t, e, n, r) {
					return n(t, e) / r(t, e)
				},
				"%": function(t, e, n, r) {
					return n(t, e) % r(t, e)
				},
				"^": function(t, e, n, r) {
					return n(t, e) ^ r(t, e)
				},
				"=": d,
				"===": function(t, e, n, r) {
					return n(t, e) === r(t, e)
				},
				"!==": function(t, e, n, r) {
					return n(t, e) !== r(t, e)
				},
				"==": function(t, e, n, r) {
					return n(t, e) == r(t, e)
				},
				"!=": function(t, e, n, r) {
					return n(t, e) != r(t, e)
				},
				"<": function(t, e, n, r) {
					return n(t, e) < r(t, e)
				},
				">": function(t, e, n, r) {
					return n(t, e) > r(t, e)
				},
				"<=": function(t, e, n, r) {
					return n(t, e) <= r(t, e)
				},
				">=": function(t, e, n, r) {
					return n(t, e) >= r(t, e)
				},
				"&&": function(t, e, n, r) {
					return n(t, e) && r(t, e)
				},
				"||": function(t, e, n, r) {
					return n(t, e) || r(t, e)
				},
				"&": function(t, e, n, r) {
					return n(t, e) & r(t, e)
				},
				"|": function(t, e, n, r) {
					return r(t, e)(t, e, n(t, e))
				},
				"!": function(t, e, n) {
					return !n(t, e)
				}
			}, Zr = {
				n: "\n",
				f: "\f",
				r: "\r",
				t: "	",
				v: "",
				"'": "'",
				'"': '"'
			}, ti = function(t) {
				this.options = t
			};
		ti.prototype = {
			constructor: ti,
			lex: function(t) {
				this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = [];
				for (var e, r = []; this.index < this.text.length;) {
					if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
					else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
					else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === r[0] && (e = this.tokens[this.tokens.length - 1]) && (e.json = -1 === e.text.indexOf("."));
					else if (this.is("(){}[].,;:?")) this.tokens.push({
						index: this.index,
						text: this.ch,
						json: this.was(":[,") && this.is("{[") || this.is("}]:,")
					}), this.is("{[") && r.unshift(this.ch), this.is("}]") && r.shift(), this.index++;
					else {
						if (this.isWhitespace(this.ch)) {
							this.index++;
							continue
						}
						var i = this.ch + this.peek(),
							o = i + this.peek(2),
							a = Kr[this.ch],
							s = Kr[i],
							u = Kr[o];
						u ? (this.tokens.push({
							index: this.index,
							text: o,
							fn: u
						}), this.index += 3) : s ? (this.tokens.push({
							index: this.index,
							text: i,
							fn: s
						}), this.index += 2) : a ? (this.tokens.push({
							index: this.index,
							text: this.ch,
							fn: a,
							json: this.was("[,:") && this.is("+-")
						}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
					}
					this.lastCh = this.ch
				}
				return this.tokens
			},
			is: function(t) {
				return -1 !== t.indexOf(this.ch)
			},
			was: function(t) {
				return -1 !== t.indexOf(this.lastCh)
			},
			peek: function(t) {
				var e = t || 1;
				return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
			},
			isNumber: function(t) {
				return t >= "0" && "9" >= t
			},
			isWhitespace: function(t) {
				return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t
			},
			isIdent: function(t) {
				return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
			},
			isExpOperator: function(t) {
				return "-" === t || "+" === t || this.isNumber(t)
			},
			throwError: function(t, e, n) {
				n = n || this.index;
				var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
				throw Qr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
			},
			readNumber: function() {
				for (var t = "", e = this.index; this.index < this.text.length;) {
					var n = ar(this.text.charAt(this.index));
					if ("." == n || this.isNumber(n)) t += n;
					else {
						var r = this.peek();
						if ("e" == n && this.isExpOperator(r)) t += n;
						else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
						else {
							if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
							this.throwError("Invalid exponent")
						}
					}
					this.index++
				}
				t = 1 * t, this.tokens.push({
					index: e,
					text: t,
					json: !0,
					fn: function() {
						return t
					}
				})
			},
			readIdent: function() {
				for (var t, e, n, r, i = this, o = "", a = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));) "." === r && (t = this.index), o += r, this.index++;
				if (t)
					for (e = this.index; e < this.text.length;) {
						if (r = this.text.charAt(e), "(" === r) {
							n = o.substr(t - a + 1), o = o.substr(0, t - a), this.index = e;
							break
						}
						if (!this.isWhitespace(r)) break;
						e++
					}
				var s = {
					index: a,
					text: o
				};
				if (Kr.hasOwnProperty(o)) s.fn = Kr[o], s.json = Kr[o];
				else {
					var u = $n(o, this.options, this.text);
					s.fn = f(function(t, e) {
						return u(t, e)
					}, {
						assign: function(t, e) {
							return vn(t, o, e, i.text, i.options)
						}
					})
				}
				this.tokens.push(s), n && (this.tokens.push({
					index: t,
					text: ".",
					json: !1
				}), this.tokens.push({
					index: t + 1,
					text: n,
					json: !1
				}))
			},
			readString: function(t) {
				var e = this.index;
				this.index++;
				for (var n = "", r = t, i = !1; this.index < this.text.length;) {
					var o = this.text.charAt(this.index);
					if (r += o, i) {
						if ("u" === o) {
							var a = this.text.substring(this.index + 1, this.index + 5);
							a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
						} else {
							var s = Zr[o];
							n += s ? s : o
						}
						i = !1
					} else if ("\\" === o) i = !0;
					else {
						if (o === t) return this.index++, void this.tokens.push({
							index: e,
							text: r,
							string: n,
							json: !0,
							fn: function() {
								return n
							}
						});
						n += o
					}
					this.index++
				}
				this.throwError("Unterminated quote", e)
			}
		};
		var ei = function(t, e, n) {
			this.lexer = t, this.$filter = e, this.options = n
		};
		ei.ZERO = function() {
			return 0
		}, ei.prototype = {
			constructor: ei,
			parse: function(t, e) {
				this.text = t, this.json = e, this.tokens = this.lexer.lex(t), e && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
					this.throwError("is not valid json", {
						text: t,
						index: 0
					})
				});
				var n = e ? this.primary() : this.statements();
				return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), n.literal = !! n.literal, n.constant = !! n.constant, n
			},
			primary: function() {
				var t;
				if (this.expect("(")) t = this.filterChain(), this.consume(")");
				else if (this.expect("[")) t = this.arrayDeclaration();
				else if (this.expect("{")) t = this.object();
				else {
					var e = this.expect();
					t = e.fn, t || this.throwError("not a primary expression", e), e.json && (t.constant = !0, t.literal = !0)
				}
				for (var n, r; n = this.expect("(", "[", ".");) "(" === n.text ? (t = this.functionCall(t, r), r = null) : "[" === n.text ? (r = t, t = this.objectIndex(t)) : "." === n.text ? (r = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
				return t
			},
			throwError: function(t, e) {
				throw Qr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
			},
			peekToken: function() {
				if (0 === this.tokens.length) throw Qr("ueoe", "Unexpected end of expression: {0}", this.text);
				return this.tokens[0]
			},
			peek: function(t, e, n, r) {
				if (this.tokens.length > 0) {
					var i = this.tokens[0],
						o = i.text;
					if (o === t || o === e || o === n || o === r || !t && !e && !n && !r) return i
				}
				return !1
			},
			expect: function(t, e, n, r) {
				var i = this.peek(t, e, n, r);
				return i ? (this.json && !i.json && this.throwError("is not valid json", i), this.tokens.shift(), i) : !1
			},
			consume: function(t) {
				this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
			},
			unaryFn: function(t, e) {
				return f(function(n, r) {
					return t(n, r, e)
				}, {
					constant: e.constant
				})
			},
			ternaryFn: function(t, e, n) {
				return f(function(r, i) {
					return t(r, i) ? e(r, i) : n(r, i)
				}, {
					constant: t.constant && e.constant && n.constant
				})
			},
			binaryFn: function(t, e, n) {
				return f(function(r, i) {
					return e(r, i, t, n)
				}, {
					constant: t.constant && n.constant
				})
			},
			statements: function() {
				for (var t = [];;)
					if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
						for (var r, i = 0; i < t.length; i++) {
							var o = t[i];
							o && (r = o(e, n))
						}
						return r
					}
			},
			filterChain: function() {
				for (var t, e = this.expression();;) {
					if (!(t = this.expect("|"))) return e;
					e = this.binaryFn(e, t.fn, this.filter())
				}
			},
			filter: function() {
				for (var t = this.expect(), e = this.$filter(t.text), n = [];;) {
					if (!(t = this.expect(":"))) {
						var r = function(t, r, i) {
							for (var o = [i], a = 0; a < n.length; a++) o.push(n[a](t, r));
							return e.apply(t, o)
						};
						return function() {
							return r
						}
					}
					n.push(this.expression())
				}
			},
			expression: function() {
				return this.assignment()
			},
			assignment: function() {
				var t, e, n = this.ternary();
				return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), function(e, r) {
					return n.assign(e, t(e, r), r)
				}) : n
			},
			ternary: function() {
				var t, e, n = this.logicalOR();
				return (e = this.expect("?")) ? (t = this.ternary(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.ternary()) : void this.throwError("expected :", e)) : n
			},
			logicalOR: function() {
				for (var t, e = this.logicalAND();;) {
					if (!(t = this.expect("||"))) return e;
					e = this.binaryFn(e, t.fn, this.logicalAND())
				}
			},
			logicalAND: function() {
				var t, e = this.equality();
				return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())), e
			},
			equality: function() {
				var t, e = this.relational();
				return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())), e
			},
			relational: function() {
				var t, e = this.additive();
				return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())), e
			},
			additive: function() {
				for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.fn, this.multiplicative());
				return e
			},
			multiplicative: function() {
				for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.fn, this.unary());
				return e
			},
			unary: function() {
				var t;
				return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(ei.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
			},
			fieldAccess: function(t) {
				var e = this,
					n = this.expect().text,
					r = $n(n, this.options, this.text);
				return f(function(e, n, i) {
					return r(i || t(e, n))
				}, {
					assign: function(r, i, o) {
						return vn(t(r, o), n, i, e.text, e.options)
					}
				})
			},
			objectIndex: function(t) {
				var e = this,
					r = this.expression();
				return this.consume("]"), f(function(i, o) {
					var a, s, u = t(i, o),
						c = r(i, o);
					return u ? (a = gn(u[c], e.text), a && a.then && e.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function(t) {
						s.$$v = t
					})), a = a.$$v), a) : n
				}, {
					assign: function(n, i, o) {
						var a = r(n, o),
							s = gn(t(n, o), e.text);
						return s[a] = i
					}
				})
			},
			functionCall: function(t, e) {
				var n = [];
				if (")" !== this.peekToken().text)
					do n.push(this.expression()); while (this.expect(","));
				this.consume(")");
				var r = this;
				return function(i, o) {
					for (var a = [], s = e ? e(i, o) : i, u = 0; u < n.length; u++) a.push(n[u](i, o));
					var c = t(i, o, s) || d;
					gn(s, r.text), gn(c, r.text);
					var l = c.apply ? c.apply(s, a) : c(a[0], a[1], a[2], a[3], a[4]);
					return gn(l, r.text)
				}
			},
			arrayDeclaration: function() {
				var t = [],
					e = !0;
				if ("]" !== this.peekToken().text)
					do {
						var n = this.expression();
						t.push(n), n.constant || (e = !1)
					} while (this.expect(","));
				return this.consume("]"), f(function(e, n) {
					for (var r = [], i = 0; i < t.length; i++) r.push(t[i](e, n));
					return r
				}, {
					literal: !0,
					constant: e
				})
			},
			object: function() {
				var t = [],
					e = !0;
				if ("}" !== this.peekToken().text)
					do {
						var n = this.expect(),
							r = n.string || n.text;
						this.consume(":");
						var i = this.expression();
						t.push({
							key: r,
							value: i
						}), i.constant || (e = !1)
					} while (this.expect(","));
				return this.consume("}"), f(function(e, n) {
					for (var r = {}, i = 0; i < t.length; i++) {
						var o = t[i];
						r[o.key] = o.value(e, n)
					}
					return r
				}, {
					literal: !0,
					constant: e
				})
			}
		};
		var ni = {}, ri = r("$sce"),
			ii = {
				HTML: "html",
				CSS: "css",
				URL: "url",
				RESOURCE_URL: "resourceUrl",
				JS: "js"
			}, oi = e.createElement("a"),
			ai = On(t.location.href, !0);
		Ln.$inject = ["$provide"], Bn.$inject = ["$locale"], qn.$inject = ["$locale"];
		var si = ".",
			ui = {
				yyyy: Hn("FullYear", 4),
				yy: Hn("FullYear", 2, 0, !0),
				y: Hn("FullYear", 1),
				MMMM: Un("Month"),
				MMM: Un("Month", !0),
				MM: Hn("Month", 2, 1),
				M: Hn("Month", 1, 1),
				dd: Hn("Date", 2),
				d: Hn("Date", 1),
				HH: Hn("Hours", 2),
				H: Hn("Hours", 1),
				hh: Hn("Hours", 2, -12),
				h: Hn("Hours", 1, -12),
				mm: Hn("Minutes", 2),
				m: Hn("Minutes", 1),
				ss: Hn("Seconds", 2),
				s: Hn("Seconds", 1),
				sss: Hn("Milliseconds", 3),
				EEEE: Un("Day"),
				EEE: Un("Day", !0),
				a: zn,
				Z: Vn
			}, ci = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
			li = /^\-?\d+$/;
		Wn.$inject = ["$locale"];
		var fi = v(ar),
			hi = v(ur);
		Yn.$inject = ["$parse"];
		var pi = v({
			restrict: "E",
			compile: function(t, n) {
				return 8 >= fr && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))), n.href || n.xlinkHref || n.name ? void 0 : function(t, e) {
					var n = "[object SVGAnimatedString]" === yr.call(e.prop("href")) ? "xlink:href" : "href";
					e.on("click", function(t) {
						e.attr(n) || t.preventDefault()
					})
				}
			}
		}),
			di = {};
		o(Pr, function(t, e) {
			if ("multiple" != t) {
				var n = Re("ng-" + e);
				di[n] = function() {
					return {
						priority: 100,
						link: function(t, r, i) {
							t.$watch(i[n], function(t) {
								i.$set(e, !! t)
							})
						}
					}
				}
			}
		}), o(["src", "srcset", "href"], function(t) {
			var e = Re("ng-" + t);
			di[e] = function() {
				return {
					priority: 99,
					link: function(n, r, i) {
						i.$observe(e, function(e) {
							e && (i.$set(t, e), fr && r.prop(t, i[t]))
						})
					}
				}
			}
		});
		var gi = {
			$addControl: d,
			$removeControl: d,
			$setValidity: d,
			$setDirty: d,
			$setPristine: d
		};
		Jn.$inject = ["$element", "$attrs", "$scope"];
		var vi = function(t) {
			return ["$timeout", function(e) {
				var r = {
					name: "form",
					restrict: t ? "EAC" : "E",
					controller: Jn,
					compile: function() {
						return {
							pre: function(t, r, i, o) {
								if (!i.action) {
									var a = function(t) {
										t.preventDefault ? t.preventDefault() : t.returnValue = !1
									};
									Er(r[0], "submit", a), r.on("$destroy", function() {
										e(function() {
											Ar(r[0], "submit", a)
										}, 0, !1)
									})
								}
								var s = r.parent().controller("form"),
									u = i.name || i.ngForm;
								u && vn(t, u, o, u), s && r.on("$destroy", function() {
									s.$removeControl(o), u && vn(t, u, n, u), f(o, gi)
								})
							}
						}
					}
				};
				return r
			}]
		}, mi = vi(),
			yi = vi(!0),
			xi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
			$i = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
			bi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
			wi = {
				text: Zn,
				number: tr,
				url: er,
				email: nr,
				radio: rr,
				checkbox: ir,
				hidden: d,
				button: d,
				submit: d,
				reset: d
			}, ki = ["$browser", "$sniffer",
				function(t, e) {
					return {
						restrict: "E",
						require: "?ngModel",
						link: function(n, r, i, o) {
							o && (wi[ar(i.type)] || wi.text)(n, r, i, o, e, t)
						}
					}
				}
			],
			Ci = "ng-valid",
			Si = "ng-invalid",
			_i = "ng-pristine",
			Ti = "ng-dirty",
			Ei = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
				function(t, e, n, i, a) {
					function s(t, e) {
						e = e ? "-" + Z(e, "-") : "", i.removeClass((t ? Si : Ci) + e).addClass((t ? Ci : Si) + e)
					}
					this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
					var u = a(n.ngModel),
						c = u.assign;
					if (!c) throw r("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, z(i));
					this.$render = d, this.$isEmpty = function(t) {
						return m(t) || "" === t || null === t || t !== t
					};
					var l = i.inheritedData("$formController") || gi,
						f = 0,
						h = this.$error = {};
					i.addClass(_i), s(!0), this.$setValidity = function(t, e) {
						h[t] !== !e && (e ? (h[t] && f--, f || (s(!0), this.$valid = !0, this.$invalid = !1)) : (s(!1), this.$invalid = !0, this.$valid = !1, f++), h[t] = !e, s(e, t), l.$setValidity(t, e, this))
					}, this.$setPristine = function() {
						this.$dirty = !1, this.$pristine = !0, i.removeClass(Ti).addClass(_i)
					}, this.$setViewValue = function(n) {
						this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, i.removeClass(_i).addClass(Ti), l.$setDirty()), o(this.$parsers, function(t) {
							n = t(n)
						}), this.$modelValue !== n && (this.$modelValue = n, c(t, n), o(this.$viewChangeListeners, function(t) {
							try {
								t()
							} catch (n) {
								e(n)
							}
						}))
					};
					var p = this;
					t.$watch(function() {
						var e = u(t);
						if (p.$modelValue !== e) {
							var n = p.$formatters,
								r = n.length;
							for (p.$modelValue = e; r--;) e = n[r](e);
							p.$viewValue !== e && (p.$viewValue = e, p.$render())
						}
						return e
					})
				}
			],
			Ai = function() {
				return {
					require: ["ngModel", "^?form"],
					controller: Ei,
					link: function(t, e, n, r) {
						var i = r[0],
							o = r[1] || gi;
						o.$addControl(i), t.$on("$destroy", function() {
							o.$removeControl(i)
						})
					}
				}
			}, Ni = v({
				require: "ngModel",
				link: function(t, e, n, r) {
					r.$viewChangeListeners.push(function() {
						t.$eval(n.ngChange)
					})
				}
			}),
			Mi = function() {
				return {
					require: "?ngModel",
					link: function(t, e, n, r) {
						if (r) {
							n.required = !0;
							var i = function(t) {
								return n.required && r.$isEmpty(t) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), t)
							};
							r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function() {
								i(r.$viewValue)
							})
						}
					}
				}
			}, ji = function() {
				return {
					require: "ngModel",
					link: function(t, e, r, i) {
						var a = /\/(.*)\//.exec(r.ngList),
							s = a && new RegExp(a[1]) || r.ngList || ",",
							u = function(t) {
								if (!m(t)) {
									var e = [];
									return t && o(t.split(s), function(t) {
										t && e.push(wr(t))
									}), e
								}
							};
						i.$parsers.push(u), i.$formatters.push(function(t) {
							return k(t) ? t.join(", ") : n
						}), i.$isEmpty = function(t) {
							return !t || !t.length
						}
					}
				}
			}, Oi = /^(true|false|\d+)$/,
			Pi = function() {
				return {
					priority: 100,
					compile: function(t, e) {
						return Oi.test(e.ngValue) ? function(t, e, n) {
							n.$set("value", t.$eval(n.ngValue))
						} : function(t, e, n) {
							t.$watch(n.ngValue, function(t) {
								n.$set("value", t)
							})
						}
					}
				}
			}, Di = Qn(function(t, e, r) {
				e.addClass("ng-binding").data("$binding", r.ngBind), t.$watch(r.ngBind, function(t) {
					e.text(t == n ? "" : t)
				})
			}),
			Li = ["$interpolate",
				function(t) {
					return function(e, n, r) {
						var i = t(n.attr(r.$attr.ngBindTemplate));
						n.addClass("ng-binding").data("$binding", i), r.$observe("ngBindTemplate", function(t) {
							n.text(t)
						})
					}
				}
			],
			Ri = ["$sce", "$parse",
				function(t, e) {
					return function(n, r, i) {
						function o() {
							return (a(n) || "").toString()
						}
						r.addClass("ng-binding").data("$binding", i.ngBindHtml);
						var a = e(i.ngBindHtml);
						n.$watch(o, function() {
							r.html(t.getTrustedHtml(a(n)) || "")
						})
					}
				}
			],
			Bi = or("", !0),
			qi = or("Odd", 0),
			Fi = or("Even", 1),
			Ii = Qn({
				compile: function(t, e) {
					e.$set("ngCloak", n), t.removeClass("ng-cloak")
				}
			}),
			Hi = [
				function() {
					return {
						scope: !0,
						controller: "@",
						priority: 500
					}
				}
			],
			Ui = {};
		o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
			var e = Re("ng-" + t);
			Ui[e] = ["$parse",
				function(n) {
					return {
						compile: function(r, i) {
							var o = n(i[e]);
							return function(e, n) {
								n.on(ar(t), function(t) {
									e.$apply(function() {
										o(e, {
											$event: t
										})
									})
								})
							}
						}
					}
				}
			]
		});
		var Vi = ["$animate",
			function(t) {
				return {
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function(n, r, i, o, a) {
						var s, u;
						n.$watch(i.ngIf, function(o) {
							V(o) ? u || (u = n.$new(), a(u, function(n) {
								n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {
									clone: n
								}, t.enter(n, r.parent(), r)
							})) : (u && (u.$destroy(), u = null), s && (t.leave(oe(s.clone)), s = null))
						})
					}
				}
			}
		],
			zi = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
				function(t, e, n, r, i) {
					return {
						restrict: "ECA",
						priority: 400,
						terminal: !0,
						transclude: "element",
						controller: $r.noop,
						compile: function(o, a) {
							var s = a.ngInclude || a.src,
								u = a.onload || "",
								c = a.autoscroll;
							return function(o, a, l, f, h) {
								var p, d, g = 0,
									v = function() {
										p && (p.$destroy(), p = null), d && (r.leave(d), d = null)
									};
								o.$watch(i.parseAsResourceUrl(s), function(i) {
									var s = function() {
										!y(c) || c && !o.$eval(c) || n()
									}, l = ++g;
									i ? (t.get(i, {
										cache: e
									}).success(function(t) {
										if (l === g) {
											var e = o.$new();
											f.template = t;
											var n = h(e, function(t) {
												v(), r.enter(t, null, a, s)
											});
											p = e, d = n, p.$emit("$includeContentLoaded"), o.$eval(u)
										}
									}).error(function() {
										l === g && v()
									}), o.$emit("$includeContentRequested")) : (v(), f.template = null)
								})
							}
						}
					}
				}
			],
			Wi = ["$compile",
				function(t) {
					return {
						restrict: "ECA",
						priority: -400,
						require: "ngInclude",
						link: function(e, n, r, i) {
							n.html(i.template), t(n.contents())(e)
						}
					}
				}
			],
			Xi = Qn({
				priority: 450,
				compile: function() {
					return {
						pre: function(t, e, n) {
							t.$eval(n.ngInit)
						}
					}
				}
			}),
			Gi = Qn({
				terminal: !0,
				priority: 1e3
			}),
			Yi = ["$locale", "$interpolate",
				function(t, e) {
					var n = /{}/g;
					return {
						restrict: "EA",
						link: function(r, i, a) {
							var s = a.count,
								u = a.$attr.when && i.attr(a.$attr.when),
								c = a.offset || 0,
								l = r.$eval(u) || {}, f = {}, h = e.startSymbol(),
								p = e.endSymbol(),
								d = /^when(Minus)?(.+)$/;
							o(a, function(t, e) {
								d.test(e) && (l[ar(e.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[e]))
							}), o(l, function(t, r) {
								f[r] = e(t.replace(n, h + s + "-" + c + p))
							}), r.$watch(function() {
								var e = parseFloat(r.$eval(s));
								return isNaN(e) ? "" : (e in l || (e = t.pluralCat(e - c)), f[e](r, i, !0))
							}, function(t) {
								i.text(t)
							})
						}
					}
				}
			],
			Qi = ["$parse", "$animate",
				function(t, n) {
					function a(t) {
						return t.clone[0]
					}

					function s(t) {
						return t.clone[t.clone.length - 1]
					}
					var u = "$$NG_REMOVED",
						c = r("ngRepeat");
					return {
						transclude: "element",
						priority: 1e3,
						terminal: !0,
						$$tlb: !0,
						link: function(r, l, f, h, p) {
							var d, g, v, m, y, x, $, b, w, k = f.ngRepeat,
								C = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
								S = {
									$id: Te
								};
							if (!C) throw c("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", k);
							if (x = C[1], $ = C[2], d = C[3], d ? (g = t(d), v = function(t, e, n) {
								return w && (S[w] = t), S[b] = e, S.$index = n, g(r, S)
							}) : (m = function(t, e) {
								return Te(e)
							}, y = function(t) {
								return t
							}), C = x.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !C) throw c("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", x);
							b = C[3] || C[1], w = C[2];
							var _ = {};
							r.$watchCollection($, function(t) {
								var f, h, d, g, x, $, C, S, T, E, A, N, M = l[0],
									j = {}, O = [];
								if (i(t)) E = t, T = v || m;
								else {
									T = v || y, E = [];
									for ($ in t) t.hasOwnProperty($) && "$" != $.charAt(0) && E.push($);
									E.sort()
								}
								for (g = E.length, h = O.length = E.length, f = 0; h > f; f++)
									if ($ = t === E ? f : E[f], C = t[$], S = T($, C, f), re(S, "`track by` id"), _.hasOwnProperty(S)) A = _[S], delete _[S], j[S] = A, O[f] = A;
									else {
										if (j.hasOwnProperty(S)) throw o(O, function(t) {
											t && t.scope && (_[t.id] = t)
										}), c("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", k, S);
										O[f] = {
											id: S
										}, j[S] = !1
									}
								for ($ in _) _.hasOwnProperty($) && (A = _[$], N = oe(A.clone), n.leave(N), o(N, function(t) {
									t[u] = !0
								}), A.scope.$destroy());
								for (f = 0, h = E.length; h > f; f++) {
									if ($ = t === E ? f : E[f], C = t[$], A = O[f], O[f - 1] && (M = s(O[f - 1])), A.scope) {
										x = A.scope, d = M;
										do d = d.nextSibling; while (d && d[u]);
										a(A) != d && n.move(oe(A.clone), null, hr(M)), M = s(A)
									} else x = r.$new();
									x[b] = C, w && (x[w] = $), x.$index = f, x.$first = 0 === f, x.$last = f === g - 1, x.$middle = !(x.$first || x.$last), x.$odd = !(x.$even = 0 === (1 & f)), A.scope || p(x, function(t) {
										t[t.length++] = e.createComment(" end ngRepeat: " + k + " "), n.enter(t, null, hr(M)), M = t, A.scope = x, A.clone = t, j[A.id] = A
									})
								}
								_ = j
							})
						}
					}
				}
			],
			Ji = ["$animate",
				function(t) {
					return function(e, n, r) {
						e.$watch(r.ngShow, function(e) {
							t[V(e) ? "removeClass" : "addClass"](n, "ng-hide")
						})
					}
				}
			],
			Ki = ["$animate",
				function(t) {
					return function(e, n, r) {
						e.$watch(r.ngHide, function(e) {
							t[V(e) ? "addClass" : "removeClass"](n, "ng-hide")
						})
					}
				}
			],
			Zi = Qn(function(t, e, n) {
				t.$watch(n.ngStyle, function(t, n) {
					n && t !== n && o(n, function(t, n) {
						e.css(n, "")
					}), t && e.css(t)
				}, !0)
			}),
			to = ["$animate",
				function(t) {
					return {
						restrict: "EA",
						require: "ngSwitch",
						controller: ["$scope",
							function() {
								this.cases = {}
							}
						],
						link: function(e, n, r, i) {
							var a, s, u = r.ngSwitch || r.on,
								c = [];
							e.$watch(u, function(n) {
								for (var u = 0, l = c.length; l > u; u++) c[u].$destroy(), t.leave(s[u]);
								s = [], c = [], (a = i.cases["!" + n] || i.cases["?"]) && (e.$eval(r.change), o(a, function(n) {
									var r = e.$new();
									c.push(r), n.transclude(r, function(e) {
										var r = n.element;
										s.push(e), t.enter(e, r.parent(), r)
									})
								}))
							})
						}
					}
				}
			],
			eo = Qn({
				transclude: "element",
				priority: 800,
				require: "^ngSwitch",
				link: function(t, e, n, r, i) {
					r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
						transclude: i,
						element: e
					})
				}
			}),
			no = Qn({
				transclude: "element",
				priority: 800,
				require: "^ngSwitch",
				link: function(t, e, n, r, i) {
					r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
						transclude: i,
						element: e
					})
				}
			}),
			ro = Qn({
				link: function(t, e, n, i, o) {
					if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(e));
					o(function(t) {
						e.empty(), e.append(t)
					})
				}
			}),
			io = ["$templateCache",
				function(t) {
					return {
						restrict: "E",
						terminal: !0,
						compile: function(e, n) {
							if ("text/ng-template" == n.type) {
								var r = n.id,
									i = e[0].text;
								t.put(r, i)
							}
						}
					}
				}
			],
			oo = r("ngOptions"),
			ao = v({
				terminal: !0
			}),
			so = ["$compile", "$parse",
				function(t, r) {
					var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
						s = {
							$setViewValue: d
						};
					return {
						restrict: "E",
						require: ["select", "?ngModel"],
						controller: ["$element", "$scope", "$attrs",
							function(t, e, n) {
								var r, i, o = this,
									a = {}, u = s;
								o.databound = n.ngModel, o.init = function(t, e, n) {
									u = t, r = e, i = n
								}, o.addOption = function(e) {
									re(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove())
								}, o.removeOption = function(t) {
									this.hasOption(t) && (delete a[t], u.$viewValue == t && this.renderUnknownOption(t))
								}, o.renderUnknownOption = function(e) {
									var n = "? " + Te(e) + " ?";
									i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
								}, o.hasOption = function(t) {
									return a.hasOwnProperty(t)
								}, e.$on("$destroy", function() {
									o.renderUnknownOption = d
								})
							}
						],
						link: function(s, u, c, l) {
							function f(t, e, n, r) {
								n.$render = function() {
									var t = n.$viewValue;
									r.hasOption(t) ? (S.parent() && S.remove(), e.val(t), "" === t && d.prop("selected", !0)) : m(t) && d ? e.val("") : r.renderUnknownOption(t)
								}, e.on("change", function() {
									t.$apply(function() {
										S.parent() && S.remove(), n.$setViewValue(e.val())
									})
								})
							}

							function h(t, e, n) {
								var r;
								n.$render = function() {
									var t = new Ee(n.$viewValue);
									o(e.find("option"), function(e) {
										e.selected = y(t.get(e.value))
									})
								}, t.$watch(function() {
									L(r, n.$viewValue) || (r = P(n.$viewValue), n.$render())
								}), e.on("change", function() {
									t.$apply(function() {
										var t = [];
										o(e.find("option"), function(e) {
											e.selected && t.push(e.value)
										}), n.$setViewValue(t)
									})
								})
							}

							function p(e, o, s) {
								function u() {
									var t, n, r, i, u, c, v, $, _, T, E, A, N, M, j, O = {
											"": []
										}, P = [""],
										D = s.$modelValue,
										L = g(e) || [],
										R = h ? a(L) : L,
										B = {}, q = !1;
									if (x)
										if (m && k(D)) {
											q = new Ee([]);
											for (var F = 0; F < D.length; F++) B[f] = D[F], q.put(m(e, B), D[F])
										} else q = new Ee(D);
									for (E = 0; _ = R.length, _ > E; E++) {
										if (v = E, h) {
											if (v = R[E], "$" === v.charAt(0)) continue;
											B[h] = v
										}
										if (B[f] = L[v], t = p(e, B) || "", (n = O[t]) || (n = O[t] = [], P.push(t)), x) A = y(q.remove(m ? m(e, B) : d(e, B)));
										else {
											if (m) {
												var I = {};
												I[f] = D, A = m(e, I) === m(e, B)
											} else A = D === d(e, B);
											q = q || A
										}
										j = l(e, B), j = y(j) ? j : "", n.push({
											id: m ? m(e, B) : h ? R[E] : E,
											label: j,
											selected: A
										})
									}
									for (x || (b || null === D ? O[""].unshift({
										id: "",
										label: "",
										selected: !q
									}) : q || O[""].unshift({
										id: "?",
										label: "",
										selected: !0
									})), T = 0, $ = P.length; $ > T; T++) {
										for (t = P[T], n = O[t], S.length <= T ? (i = {
											element: C.clone().attr("label", t),
											label: n.label
										}, u = [i], S.push(u), o.append(i.element)) : (u = S[T], i = u[0], i.label != t && i.element.attr("label", i.label = t)), N = null, E = 0, _ = n.length; _ > E; E++) r = n[E], (c = u[E + 1]) ? (N = c.element, c.label !== r.label && N.text(c.label = r.label), c.id !== r.id && N.val(c.id = r.id), N[0].selected !== r.selected && N.prop("selected", c.selected = r.selected)) : ("" === r.id && b ? M = b : (M = w.clone()).val(r.id).attr("selected", r.selected).text(r.label), u.push(c = {
											element: M,
											label: r.label,
											id: r.id,
											selected: r.selected
										}), N ? N.after(M) : i.element.append(M), N = M);
										for (E++; u.length > E;) u.pop().element.remove()
									}
									for (; S.length > T;) S.pop()[0].element.remove()
								}
								var c;
								if (!(c = $.match(i))) throw oo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", $, z(o));
								var l = r(c[2] || c[1]),
									f = c[4] || c[6],
									h = c[5],
									p = r(c[3] || ""),
									d = r(c[2] ? c[1] : f),
									g = r(c[7]),
									v = c[8],
									m = v ? r(c[8]) : null,
									S = [
										[{
											element: o,
											label: ""
										}]
									];
								b && (t(b)(e), b.removeClass("ng-scope"), b.remove()), o.empty(), o.on("change", function() {
									e.$apply(function() {
										var t, r, i, a, u, c, l, p, v, y = g(e) || [],
											$ = {};
										if (x) {
											for (i = [], c = 0, p = S.length; p > c; c++)
												for (t = S[c], u = 1, l = t.length; l > u; u++)
													if ((a = t[u].element)[0].selected) {
														if (r = a.val(), h && ($[h] = r), m)
															for (v = 0; v < y.length && ($[f] = y[v], m(e, $) != r); v++);
														else $[f] = y[r];
														i.push(d(e, $))
													}
										} else if (r = o.val(), "?" == r) i = n;
										else if ("" === r) i = null;
										else if (m) {
											for (v = 0; v < y.length; v++)
												if ($[f] = y[v], m(e, $) == r) {
													i = d(e, $);
													break
												}
										} else $[f] = y[r], h && ($[h] = r), i = d(e, $);
										s.$setViewValue(i)
									})
								}), s.$render = u, e.$watch(u)
							}
							if (l[1]) {
								for (var d, g = l[0], v = l[1], x = c.multiple, $ = c.ngOptions, b = !1, w = hr(e.createElement("option")), C = hr(e.createElement("optgroup")), S = w.clone(), _ = 0, T = u.children(), E = T.length; E > _; _++)
									if ("" === T[_].value) {
										d = b = T.eq(_);
										break
									}
								g.init(v, b, S), x && (v.$isEmpty = function(t) {
									return !t || 0 === t.length
								}), $ ? p(s, u, v) : x ? h(s, u, v) : f(s, u, v, g)
							}
						}
					}
				}
			],
			uo = ["$interpolate",
				function(t) {
					var e = {
						addOption: d,
						removeOption: d
					};
					return {
						restrict: "E",
						priority: 100,
						compile: function(n, r) {
							if (m(r.value)) {
								var i = t(n.text(), !0);
								i || r.$set("value", n.text())
							}
							return function(t, n, r) {
								var o = "$selectController",
									a = n.parent(),
									s = a.data(o) || a.parent().data(o);
								s && s.databound ? n.prop("selected", !1) : s = e, i ? t.$watch(i, function(t, e) {
									r.$set("value", t), t !== e && s.removeOption(e), s.addOption(t)
								}) : s.addOption(r.value), n.on("$destroy", function() {
									s.removeOption(r.value)
								})
							}
						}
					}
				}
			],
			co = v({
				restrict: "E",
				terminal: !0
			});
		te(), se($r), hr(e).ready(function() {
			J(e, K)
		})
	}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>'), define("angular", ["jquery"], function(t) {
		return function() {
			var e;
			return e || t.angular
		}
	}(this)),
	function(t, e) {
		function n() {
			function t(t, n) {
				return e.extend(new(e.extend(function() {}, {
					prototype: t
				})), n)
			}

			function n(t, e) {
				var n = e.caseInsensitiveMatch,
					r = {
						originalPath: t,
						regexp: t
					}, i = r.keys = [];
				return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(t, e, n, r) {
					var o = "?" === r ? r : null,
						a = "*" === r ? r : null;
					return i.push({
						name: n,
						optional: !! o
					}), e = e || "", "" + (o ? "" : e) + "(?:" + (o ? e : "") + (a && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
				}).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + t + "$", n ? "i" : ""), r
			}
			var r = {};
			this.when = function(t, i) {
				if (r[t] = e.extend({
					reloadOnSearch: !0
				}, i, t && n(t, i)), t) {
					var o = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
					r[o] = e.extend({
						redirectTo: t
					}, n(o, i))
				}
				return this
			}, this.otherwise = function(t) {
				return this.when(null, t), this
			}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce",
				function(n, i, o, a, s, u, c, l) {
					function f(t, e) {
						var n = e.keys,
							r = {};
						if (!e.regexp) return null;
						var i = e.regexp.exec(t);
						if (!i) return null;
						for (var o = 1, a = i.length; a > o; ++o) {
							var s = n[o - 1],
								u = "string" == typeof i[o] ? decodeURIComponent(i[o]) : i[o];
							s && u && (r[s.name] = u)
						}
						return r
					}

					function h() {
						var t = p(),
							r = v.current;
						t && r && t.$$route === r.$$route && e.equals(t.pathParams, r.pathParams) && !t.reloadOnSearch && !g ? (r.params = t.params, e.copy(r.params, o), n.$broadcast("$routeUpdate", r)) : (t || r) && (g = !1, n.$broadcast("$routeChangeStart", t, r), v.current = t, t && t.redirectTo && (e.isString(t.redirectTo) ? i.path(d(t.redirectTo, t.params)).search(t.params).replace() : i.url(t.redirectTo(t.pathParams, i.path(), i.search())).replace()), a.when(t).then(function() {
							if (t) {
								var n, r, i = e.extend({}, t.resolve);
								return e.forEach(i, function(t, n) {
									i[n] = e.isString(t) ? s.get(t) : s.invoke(t)
								}), e.isDefined(n = t.template) ? e.isFunction(n) && (n = n(t.params)) : e.isDefined(r = t.templateUrl) && (e.isFunction(r) && (r = r(t.params)), r = l.getTrustedResourceUrl(r), e.isDefined(r) && (t.loadedTemplateUrl = r, n = u.get(r, {
									cache: c
								}).then(function(t) {
									return t.data
								}))), e.isDefined(n) && (i.$template = n), a.all(i)
							}
						}).then(function(i) {
							t == v.current && (t && (t.locals = i, e.copy(t.params, o)), n.$broadcast("$routeChangeSuccess", t, r))
						}, function(e) {
							t == v.current && n.$broadcast("$routeChangeError", t, r, e)
						}))
					}

					function p() {
						var n, o;
						return e.forEach(r, function(r) {
							!o && (n = f(i.path(), r)) && (o = t(r, {
								params: e.extend({}, i.search(), n),
								pathParams: n
							}), o.$$route = r)
						}), o || r[null] && t(r[null], {
							params: {},
							pathParams: {}
						})
					}

					function d(t, n) {
						var r = [];
						return e.forEach((t || "").split(":"), function(t, e) {
							if (0 === e) r.push(t);
							else {
								var i = t.match(/(\w+)(.*)/),
									o = i[1];
								r.push(n[o]), r.push(i[2] || ""), delete n[o]
							}
						}), r.join("")
					}
					var g = !1,
						v = {
							routes: r,
							reload: function() {
								g = !0, n.$evalAsync(h)
							}
						};
					return n.$on("$locationChangeSuccess", h), v
				}
			]
		}

		function r() {
			this.$get = function() {
				return {}
			}
		}

		function i(t, n, r) {
			return {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				link: function(i, o, a, s, u) {
					function c() {
						f && (f.$destroy(), f = null), h && (r.leave(h), h = null)
					}

					function l() {
						var a = t.current && t.current.locals,
							s = a && a.$template;
						if (e.isDefined(s)) {
							var l = i.$new(),
								g = t.current,
								v = u(l, function(t) {
									r.enter(t, null, h || o, function() {
										!e.isDefined(p) || p && !i.$eval(p) || n()
									}), c()
								});
							h = v, f = g.scope = l, f.$emit("$viewContentLoaded"), f.$eval(d)
						} else c()
					}
					var f, h, p = a.autoscroll,
						d = a.onload || "";
					i.$on("$routeChangeSuccess", l), l()
				}
			}
		}

		function o(t, e, n) {
			return {
				restrict: "ECA",
				priority: -400,
				link: function(r, i) {
					var o = n.current,
						a = o.locals;
					i.html(a.$template);
					var s = t(i.contents());
					if (o.controller) {
						a.$scope = r;
						var u = e(o.controller, a);
						o.controllerAs && (r[o.controllerAs] = u), i.data("$ngControllerController", u), i.children().data("$ngControllerController", u)
					}
					s(r)
				}
			}
		}
		var a = e.module("ngRoute", ["ng"]).provider("$route", n);
		a.provider("$routeParams", r), a.directive("ngView", i), a.directive("ngView", o), i.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
	}(window, window.angular), define("angular-route", function() {}),
	function() {
		var t = angular.module("LocalStorageModule", []);
		t.provider("localStorageService", function() {
			this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
				expiry: 30,
				path: "/"
			}, this.notify = {
				setItem: !0,
				removeItem: !1
			}, this.setPrefix = function(t) {
				this.prefix = t
			}, this.setStorageType = function(t) {
				this.storageType = t
			}, this.setStorageCookie = function(t, e) {
				this.cookie = {
					expiry: t,
					path: e
				}
			}, this.setStorageCookieDomain = function(t) {
				this.cookie.domain = t
			}, this.setNotify = function(t, e) {
				this.notify = {
					setItem: t,
					removeItem: e
				}
			}, this.$get = ["$rootScope", "$window", "$document",
				function(t, e, n) {
					var r = this.prefix,
						i = this.cookie,
						o = this.notify,
						a = this.storageType,
						s = e[a];
					n || (n = document), "." !== r.substr(-1) && (r = r ? r + "." : "");
					var u = function() {
						try {
							var n = a in e && null !== e[a],
								i = r + "__" + Math.round(1e7 * Math.random());
							return n && (s.setItem(i, ""), s.removeItem(i)), !0
						} catch (o) {
							return a = "cookie", t.$broadcast("LocalStorageModule.notification.error", o.message), !1
						}
					}(),
						c = function(e, n) {
							if (!u) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), o.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
								key: e,
								newvalue: n,
								storageType: "cookie"
							}), g(e, n);
							"undefined" == typeof n && (n = null);
							try {
								(angular.isObject(n) || angular.isArray(n)) && (n = angular.toJson(n)), s.setItem(r + e, n), o.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
									key: e,
									newvalue: n,
									storageType: this.storageType
								})
							} catch (i) {
								return t.$broadcast("LocalStorageModule.notification.error", i.message), g(e, n)
							}
							return !0
						}, l = function(e) {
							if (!u) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), v(e);
							var n = s.getItem(r + e);
							return n && "null" !== n ? "{" === n.charAt(0) || "[" === n.charAt(0) ? angular.fromJson(n) : n : null
						}, f = function(e) {
							if (!u) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), o.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
								key: e,
								storageType: "cookie"
							}), m(e);
							try {
								s.removeItem(r + e), o.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
									key: e,
									storageType: this.storageType
								})
							} catch (n) {
								return t.$broadcast("LocalStorageModule.notification.error", n.message), m(e)
							}
							return !0
						}, h = function() {
							if (!u) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), !1;
							var e = r.length,
								n = [];
							for (var i in s)
								if (i.substr(0, e) === r) try {
									n.push(i.substr(e))
								} catch (o) {
									return t.$broadcast("LocalStorageModule.notification.error", o.Description), []
								}
								return n
						}, p = function(e) {
							var e = e || "",
								n = r.slice(0, -1) + ".",
								i = RegExp(n + e);
							if (!u) return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), y();
							var o = r.length;
							for (var a in s)
								if (i.test(a)) try {
									f(a.substr(o))
								} catch (c) {
									return t.$broadcast("LocalStorageModule.notification.error", c.message), y()
								}
								return !0
						}, d = function() {
							try {
								return navigator.cookieEnabled || "cookie" in n && (n.cookie.length > 0 || (n.cookie = "test").indexOf.call(n.cookie, "test") > -1)
							} catch (e) {
								return t.$broadcast("LocalStorageModule.notification.error", e.message), !1
							}
						}, g = function(e, o) {
							if ("undefined" == typeof o) return !1;
							if (!d()) return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
							try {
								var a = "",
									s = new Date,
									u = "";
								if (null === o ? (s.setTime(s.getTime() + -864e5), a = "; expires=" + s.toGMTString(), o = "") : 0 !== i.expiry && (s.setTime(s.getTime() + 24 * i.expiry * 60 * 60 * 1e3), a = "; expires=" + s.toGMTString()), e) {
									var c = "; path=" + i.path;
									i.domain && (u = "; domain=" + i.domain), n.cookie = r + e + "=" + encodeURIComponent(o) + a + c + u
								}
							} catch (l) {
								return t.$broadcast("LocalStorageModule.notification.error", l.message), !1
							}
							return !0
						}, v = function(e) {
							if (!d()) return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
							for (var i = n.cookie && n.cookie.split(";") || [], o = 0; o < i.length; o++) {
								for (var a = i[o];
									" " === a.charAt(0);) a = a.substring(1, a.length);
								if (0 === a.indexOf(r + e + "=")) return decodeURIComponent(a.substring(r.length + e.length + 1, a.length))
							}
							return null
						}, m = function(t) {
							g(t, null)
						}, y = function() {
							for (var t = null, e = r.length, i = n.cookie.split(";"), o = 0; o < i.length; o++) {
								for (t = i[o];
									" " === t.charAt(0);) t = t.substring(1, t.length);
								var a = t.substring(e, t.indexOf("="));
								m(a)
							}
						}, x = function() {
							return a
						};
					return {
						isSupported: u,
						getStorageType: x,
						set: c,
						add: c,
						get: l,
						keys: h,
						remove: f,
						clearAll: p,
						cookie: {
							set: g,
							add: g,
							get: v,
							remove: m,
							clearAll: y
						}
					}
				}
			]
		})
	}.call(this), define("angular-local-storage", function() {}), define("config", ["angular"], function(t) {
		return t.module("app.constants", []).constant("CONFIG", {})
	}), define("modules/data/module", ["angular", "../../config"], function(t) {
		return t.module("app.dataService", ["app.constants"])
	}), define("modules/data/data-service", ["./module"], function(t) {
		t.factory("dataService", function(t, e, n, r) {
			var i = {};
			return i.data = {}, i.version = Date.now(), i.clear = function() {
				console.log("dataService.clear"), r.clearAll()
			}, i.init = function() {
				return r.get("version") != i.version && (i.clear(), r.add("version", i.version)), i.getYears().then(function() {
					return i.getCountries().then(function() {
						return i.getArtist("names")
					})
				})
			}, i.get = function(t, o) {
				var a, s = n.defer(),
					u = t + "-" + o;
				if (o ? (i.data[t] || (i.data[t] = {}), a = i.data[t][o]) : a = i.data[t], void 0 === a) {
					var a = r.get(u);
					if (!a) {
						var c = "/data/" + t + (o ? "/" + o : "") + ".json",
							l = e({
								method: "GET",
								url: c
							}).success(function(e) {
								r.add(u, e), o ? i.data[t][o] = e : i.data[t] = e, s.resolve(e)
							}).error(function() {
								console.log("http error")
							});
						return l
					}
					o ? i.data[t][o] = a : i.data[t] = a
				}
				return s.resolve(a), s.promise
			}, i.getExpos = function(t) {
				return t || (t = "today"), i.get("expos", t)
			}, i.getArtist = function(t) {
				return i.get("artists", t)
			}, i.getCountries = function() {
				return i.get("countries")
			}, i.getYears = function() {
				return i.get("years")
			}, i
		})
	}), define("modules/data/index", ["./data-service"], function() {}), define("modules/home/module", ["angular", "../../config"], function(t) {
		return t.module("app.home", ["app.constants"])
	}), define("modules/home/home-ctrl", ["./module"], function(t) {
		t.controller("HomeController", ["$scope",
			function(t) {
				t.twoTimesTwo = 4
			}
		])
	}), define("modules/home/index", ["./home-ctrl"], function() {}),
	function(t) {
		var e, n, r = "0.4.2",
			i = "hasOwnProperty",
			o = /[\.\/]/,
			a = "*",
			s = function() {}, u = function(t, e) {
				return t - e
			}, c = {
				n: {}
			}, l = function(t, r) {
				t = String(t);
				var i, o = n,
					a = Array.prototype.slice.call(arguments, 2),
					s = l.listeners(t),
					c = 0,
					f = [],
					h = {}, p = [],
					d = e;
				e = t, n = 0;
				for (var g = 0, v = s.length; v > g; g++) "zIndex" in s[g] && (f.push(s[g].zIndex), s[g].zIndex < 0 && (h[s[g].zIndex] = s[g]));
				for (f.sort(u); f[c] < 0;)
					if (i = h[f[c++]], p.push(i.apply(r, a)), n) return n = o, p;
				for (g = 0; v > g; g++)
					if (i = s[g], "zIndex" in i)
						if (i.zIndex == f[c]) {
							if (p.push(i.apply(r, a)), n) break;
							do
								if (c++, i = h[f[c]], i && p.push(i.apply(r, a)), n) break; while (i)
						} else h[i.zIndex] = i;
						else
				if (p.push(i.apply(r, a)), n) break;
				return n = o, e = d, p.length ? p : null
			};
		l._events = c, l.listeners = function(t) {
			var e, n, r, i, s, u, l, f, h = t.split(o),
				p = c,
				d = [p],
				g = [];
			for (i = 0, s = h.length; s > i; i++) {
				for (f = [], u = 0, l = d.length; l > u; u++)
					for (p = d[u].n, n = [p[h[i]], p[a]], r = 2; r--;) e = n[r], e && (f.push(e), g = g.concat(e.f || []));
				d = f
			}
			return g
		}, l.on = function(t, e) {
			if (t = String(t), "function" != typeof e) return function() {};
			for (var n = t.split(o), r = c, i = 0, a = n.length; a > i; i++) r = r.n, r = r.hasOwnProperty(n[i]) && r[n[i]] || (r[n[i]] = {
				n: {}
			});
			for (r.f = r.f || [], i = 0, a = r.f.length; a > i; i++)
				if (r.f[i] == e) return s;
			return r.f.push(e),
			function(t) {
				+t == +t && (e.zIndex = +t)
			}
		}, l.f = function(t) {
			var e = [].slice.call(arguments, 1);
			return function() {
				l.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
			}
		}, l.stop = function() {
			n = 1
		}, l.nt = function(t) {
			return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
		}, l.nts = function() {
			return e.split(o)
		}, l.off = l.unbind = function(t, e) {
			if (!t) return void(l._events = c = {
				n: {}
			});
			var n, r, s, u, f, h, p, d = t.split(o),
				g = [c];
			for (u = 0, f = d.length; f > u; u++)
				for (h = 0; h < g.length; h += s.length - 2) {
					if (s = [h, 1], n = g[h].n, d[u] != a) n[d[u]] && s.push(n[d[u]]);
					else
						for (r in n) n[i](r) && s.push(n[r]);
					g.splice.apply(g, s)
				}
			for (u = 0, f = g.length; f > u; u++)
				for (n = g[u]; n.n;) {
					if (e) {
						if (n.f) {
							for (h = 0, p = n.f.length; p > h; h++)
								if (n.f[h] == e) {
									n.f.splice(h, 1);
									break
								}!n.f.length && delete n.f
						}
						for (r in n.n)
							if (n.n[i](r) && n.n[r].f) {
								var v = n.n[r].f;
								for (h = 0, p = v.length; p > h; h++)
									if (v[h] == e) {
										v.splice(h, 1);
										break
									}!v.length && delete n.n[r].f
							}
					} else {
						delete n.f;
						for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f
					}
					n = n.n
				}
		}, l.once = function(t, e) {
			var n = function() {
				return l.unbind(t, n), e.apply(this, arguments)
			};
			return l.on(t, n)
		}, l.version = r, l.toString = function() {
			return "You are running Eve " + r
		}, "undefined" != typeof module && module.exports ? module.exports = l : "undefined" != typeof define ? define("eve", [], function() {
			return l
		}) : t.eve = l
	}(this),
	function(t, e) {
		"function" == typeof define && define.amd ? define("raphael", ["eve"], function(n) {
			return e(t, n)
		}) : e(t, t.eve)
	}(this, function(t, e) {
		function n(t) {
			if (n.is(t, "function")) return $ ? t() : e.on("raphael.DOMload", t);
			if (n.is(t, X)) return n._engine.create[A](n, t.splice(0, 3 + n.is(t[0], z))).add(t);
			var r = Array.prototype.slice.call(arguments, 0);
			if (n.is(r[r.length - 1], "function")) {
				var i = r.pop();
				return $ ? i.call(n._engine.create[A](n, r)) : e.on("raphael.DOMload", function() {
					i.call(n._engine.create[A](n, r))
				})
			}
			return n._engine.create[A](n, arguments)
		}

		function r(t) {
			if ("function" == typeof t || Object(t) !== t) return t;
			var e = new t.constructor;
			for (var n in t) t[S](n) && (e[n] = r(t[n]));
			return e
		}

		function i(t, e) {
			for (var n = 0, r = t.length; r > n; n++)
				if (t[n] === e) return t.push(t.splice(n, 1)[0])
		}

		function o(t, e, n) {
			function r() {
				var o = Array.prototype.slice.call(arguments, 0),
					a = o.join("␀"),
					s = r.cache = r.cache || {}, u = r.count = r.count || [];
				return s[S](a) ? (i(u, a), n ? n(s[a]) : s[a]) : (u.length >= 1e3 && delete s[u.shift()], u.push(a), s[a] = t[A](e, o), n ? n(s[a]) : s[a])
			}
			return r
		}

		function a() {
			return this.hex
		}

		function s(t, e) {
			for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
				var o = [{
					x: +t[r - 2],
					y: +t[r - 1]
				}, {
					x: +t[r],
					y: +t[r + 1]
				}, {
					x: +t[r + 2],
					y: +t[r + 3]
				}, {
					x: +t[r + 4],
					y: +t[r + 5]
				}];
				e ? r ? i - 4 == r ? o[3] = {
					x: +t[0],
					y: +t[1]
				} : i - 2 == r && (o[2] = {
					x: +t[0],
					y: +t[1]
				}, o[3] = {
					x: +t[2],
					y: +t[3]
				}) : o[0] = {
					x: +t[i - 2],
					y: +t[i - 1]
				} : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
					x: +t[r],
					y: +t[r + 1]
				}), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
			}
			return n
		}

		function u(t, e, n, r, i) {
			var o = -3 * e + 9 * n - 9 * r + 3 * i,
				a = t * o + 6 * e - 12 * n + 6 * r;
			return t * a - 3 * e + 3 * n
		}

		function c(t, e, n, r, i, o, a, s, c) {
			null == c && (c = 1), c = c > 1 ? 1 : 0 > c ? 0 : c;
			for (var l = c / 2, f = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; f > g; g++) {
				var v = l * h[g] + l,
					m = u(v, t, n, i, a),
					y = u(v, e, r, o, s),
					x = m * m + y * y;
				d += p[g] * q.sqrt(x)
			}
			return l * d
		}

		function l(t, e, n, r, i, o, a, s, u) {
			if (!(0 > u || c(t, e, n, r, i, o, a, s) < u)) {
				var l, f = 1,
					h = f / 2,
					p = f - h,
					d = .01;
				for (l = c(t, e, n, r, i, o, a, s, p); H(l - u) > d;) h /= 2, p += (u > l ? 1 : -1) * h, l = c(t, e, n, r, i, o, a, s, p);
				return p
			}
		}

		function f(t, e, n, r, i, o, a, s) {
			if (!(F(t, n) < I(i, a) || I(t, n) > F(i, a) || F(e, r) < I(o, s) || I(e, r) > F(o, s))) {
				var u = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
					c = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
					l = (t - n) * (o - s) - (e - r) * (i - a);
				if (l) {
					var f = u / l,
						h = c / l,
						p = +f.toFixed(2),
						d = +h.toFixed(2);
					if (!(p < +I(t, n).toFixed(2) || p > +F(t, n).toFixed(2) || p < +I(i, a).toFixed(2) || p > +F(i, a).toFixed(2) || d < +I(e, r).toFixed(2) || d > +F(e, r).toFixed(2) || d < +I(o, s).toFixed(2) || d > +F(o, s).toFixed(2))) return {
						x: f,
						y: h
					}
				}
			}
		}

		function h(t, e, r) {
			var i = n.bezierBBox(t),
				o = n.bezierBBox(e);
			if (!n.isBBoxIntersect(i, o)) return r ? 0 : [];
			for (var a = c.apply(0, t), s = c.apply(0, e), u = F(~~(a / 5), 1), l = F(~~(s / 5), 1), h = [], p = [], d = {}, g = r ? 0 : [], v = 0; u + 1 > v; v++) {
				var m = n.findDotsAtSegment.apply(n, t.concat(v / u));
				h.push({
					x: m.x,
					y: m.y,
					t: v / u
				})
			}
			for (v = 0; l + 1 > v; v++) m = n.findDotsAtSegment.apply(n, e.concat(v / l)), p.push({
				x: m.x,
				y: m.y,
				t: v / l
			});
			for (v = 0; u > v; v++)
				for (var y = 0; l > y; y++) {
					var x = h[v],
						$ = h[v + 1],
						b = p[y],
						w = p[y + 1],
						k = H($.x - x.x) < .001 ? "y" : "x",
						C = H(w.x - b.x) < .001 ? "y" : "x",
						S = f(x.x, x.y, $.x, $.y, b.x, b.y, w.x, w.y);
					if (S) {
						if (d[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
						d[S.x.toFixed(4)] = S.y.toFixed(4);
						var _ = x.t + H((S[k] - x[k]) / ($[k] - x[k])) * ($.t - x.t),
							T = b.t + H((S[C] - b[C]) / (w[C] - b[C])) * (w.t - b.t);
						_ >= 0 && 1.001 >= _ && T >= 0 && 1.001 >= T && (r ? g++ : g.push({
							x: S.x,
							y: S.y,
							t1: I(_, 1),
							t2: I(T, 1)
						}))
					}
				}
			return g
		}

		function p(t, e, r) {
			t = n._path2curve(t), e = n._path2curve(e);
			for (var i, o, a, s, u, c, l, f, p, d, g = r ? 0 : [], v = 0, m = t.length; m > v; v++) {
				var y = t[v];
				if ("M" == y[0]) i = u = y[1], o = c = y[2];
				else {
					"C" == y[0] ? (p = [i, o].concat(y.slice(1)), i = p[6], o = p[7]) : (p = [i, o, i, o, u, c, u, c], i = u, o = c);
					for (var x = 0, $ = e.length; $ > x; x++) {
						var b = e[x];
						if ("M" == b[0]) a = l = b[1], s = f = b[2];
						else {
							"C" == b[0] ? (d = [a, s].concat(b.slice(1)), a = d[6], s = d[7]) : (d = [a, s, a, s, l, f, l, f], a = l, s = f);
							var w = h(p, d, r);
							if (r) g += w;
							else {
								for (var k = 0, C = w.length; C > k; k++) w[k].segment1 = v, w[k].segment2 = x, w[k].bez1 = p, w[k].bez2 = d;
								g = g.concat(w)
							}
						}
					}
				}
			}
			return g
		}

		function d(t, e, n, r, i, o) {
			null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
		}

		function g() {
			return this.x + O + this.y + O + this.width + " × " + this.height
		}

		function v(t, e, n, r, i, o) {
			function a(t) {
				return ((f * t + l) * t + c) * t
			}

			function s(t, e) {
				var n = u(t, e);
				return ((d * n + p) * n + h) * n
			}

			function u(t, e) {
				var n, r, i, o, s, u;
				for (i = t, u = 0; 8 > u; u++) {
					if (o = a(i) - t, H(o) < e) return i;
					if (s = (3 * f * i + 2 * l) * i + c, H(s) < 1e-6) break;
					i -= o / s
				}
				if (n = 0, r = 1, i = t, n > i) return n;
				if (i > r) return r;
				for (; r > n;) {
					if (o = a(i), H(o - t) < e) return i;
					t > o ? n = i : r = i, i = (r - n) / 2 + n
				}
				return i
			}
			var c = 3 * e,
				l = 3 * (r - e) - c,
				f = 1 - c - l,
				h = 3 * n,
				p = 3 * (i - n) - h,
				d = 1 - h - p;
			return s(t, 1 / (200 * o))
		}

		function m(t, e) {
			var n = [],
				r = {};
			if (this.ms = e, this.times = 1, t) {
				for (var i in t) t[S](i) && (r[Z(i)] = t[i], n.push(Z(i)));
				n.sort(fe)
			}
			this.anim = r, this.top = n[n.length - 1], this.percents = n
		}

		function y(t, r, i, o, a, s) {
			i = Z(i);
			var u, c, l, f, h, p, g = t.ms,
				m = {}, y = {}, x = {};
			if (o)
				for (b = 0, k = cn.length; k > b; b++) {
					var $ = cn[b];
					if ($.el.id == r.id && $.anim == t) {
						$.percent != i ? (cn.splice(b, 1), l = 1) : c = $, r.attr($.totalOrigin);
						break
					}
				} else o = +y;
			for (var b = 0, k = t.percents.length; k > b; b++) {
				if (t.percents[b] == i || t.percents[b] > o * t.top) {
					i = t.percents[b], h = t.percents[b - 1] || 0, g = g / t.top * (i - h), f = t.percents[b + 1], u = t.anim[i];
					break
				}
				o && r.attr(t.anim[t.percents[b]])
			}
			if (u) {
				if (c) c.initstatus = o, c.start = new Date - c.ms * o;
				else {
					for (var C in u)
						if (u[S](C) && (re[S](C) || r.paper.customAttributes[S](C))) switch (m[C] = r.attr(C), null == m[C] && (m[C] = ne[C]), y[C] = u[C], re[C]) {
							case z:
								x[C] = (y[C] - m[C]) / g;
								break;
							case "colour":
								m[C] = n.getRGB(m[C]);
								var _ = n.getRGB(y[C]);
								x[C] = {
									r: (_.r - m[C].r) / g,
									g: (_.g - m[C].g) / g,
									b: (_.b - m[C].b) / g
								};
								break;
							case "path":
								var T = Le(m[C], y[C]),
									E = T[1];
								for (m[C] = T[0], x[C] = [], b = 0, k = m[C].length; k > b; b++) {
									x[C][b] = [0];
									for (var A = 1, M = m[C][b].length; M > A; A++) x[C][b][A] = (E[b][A] - m[C][b][A]) / g
								}
								break;
							case "transform":
								var j = r._,
									O = Ie(j[C], y[C]);
								if (O)
									for (m[C] = O.from, y[C] = O.to, x[C] = [], x[C].real = !0, b = 0, k = m[C].length; k > b; b++)
										for (x[C][b] = [m[C][b][0]], A = 1, M = m[C][b].length; M > A; A++) x[C][b][A] = (y[C][b][A] - m[C][b][A]) / g;
								else {
									var L = r.matrix || new d,
										R = {
											_: {
												transform: j.transform
											},
											getBBox: function() {
												return r.getBBox(1)
											}
										};
									m[C] = [L.a, L.b, L.c, L.d, L.e, L.f], qe(R, y[C]), y[C] = R._.transform, x[C] = [(R.matrix.a - L.a) / g, (R.matrix.b - L.b) / g, (R.matrix.c - L.c) / g, (R.matrix.d - L.d) / g, (R.matrix.e - L.e) / g, (R.matrix.f - L.f) / g]
								}
								break;
							case "csv":
								var B = P(u[C])[D](w),
									q = P(m[C])[D](w);
								if ("clip-rect" == C)
									for (m[C] = q, x[C] = [], b = q.length; b--;) x[C][b] = (B[b] - m[C][b]) / g;
								y[C] = B;
								break;
							default:
								for (B = [][N](u[C]), q = [][N](m[C]), x[C] = [], b = r.paper.customAttributes[C].length; b--;) x[C][b] = ((B[b] || 0) - (q[b] || 0)) / g
						}
						var F = u.easing, I = n.easing_formulas[F];
					if (!I)
						if (I = P(F).match(J), I && 5 == I.length) {
							var H = I;
							I = function(t) {
								return v(t, +H[1], +H[2], +H[3], +H[4], g)
							}
						} else I = pe;
					if (p = u.start || t.start || +new Date, $ = {
						anim: t,
						percent: i,
						timestamp: p,
						start: p + (t.del || 0),
						status: 0,
						initstatus: o || 0,
						stop: !1,
						ms: g,
						easing: I,
						from: m,
						diff: x,
						to: y,
						el: r,
						callback: u.callback,
						prev: h,
						next: f,
						repeat: s || t.times,
						origin: r.attr(),
						totalOrigin: a
					}, cn.push($), o && !c && !l && ($.stop = !0, $.start = new Date - g * o, 1 == cn.length)) return fn();
					l && ($.start = new Date - $.ms * o), 1 == cn.length && ln(fn)
				}
				e("raphael.anim.start." + r.id, r, t)
			}
		}

		function x(t) {
			for (var e = 0; e < cn.length; e++) cn[e].el.paper == t && cn.splice(e--, 1)
		}
		n.version = "2.1.0", n.eve = e;
		var $, b, w = /[, ]+/,
			k = {
				circle: 1,
				rect: 1,
				path: 1,
				ellipse: 1,
				text: 1,
				image: 1
			}, C = /\{(\d+)\}/g,
			S = "hasOwnProperty",
			_ = {
				doc: document,
				win: t
			}, T = {
				was: Object.prototype[S].call(_.win, "Raphael"),
				is: _.win.Raphael
			}, E = function() {
				this.ca = this.customAttributes = {}
			}, A = "apply",
			N = "concat",
			M = "ontouchstart" in _.win || _.win.DocumentTouch && _.doc instanceof DocumentTouch,
			j = "",
			O = " ",
			P = String,
			D = "split",
			L = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [D](O),
			R = {
				mousedown: "touchstart",
				mousemove: "touchmove",
				mouseup: "touchend"
			}, B = P.prototype.toLowerCase,
			q = Math,
			F = q.max,
			I = q.min,
			H = q.abs,
			U = q.pow,
			V = q.PI,
			z = "number",
			W = "string",
			X = "array",
			G = Object.prototype.toString,
			Y = (n._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
			Q = {
				NaN: 1,
				Infinity: 1,
				"-Infinity": 1
			}, J = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
			K = q.round,
			Z = parseFloat,
			te = parseInt,
			ee = P.prototype.toUpperCase,
			ne = n._availableAttrs = {
				"arrow-end": "none",
				"arrow-start": "none",
				blur: 0,
				"clip-rect": "0 0 1e9 1e9",
				cursor: "default",
				cx: 0,
				cy: 0,
				fill: "#fff",
				"fill-opacity": 1,
				font: '10px "Arial"',
				"font-family": '"Arial"',
				"font-size": "10",
				"font-style": "normal",
				"font-weight": 400,
				gradient: 0,
				height: 0,
				href: "http://raphaeljs.com/",
				"letter-spacing": 0,
				opacity: 1,
				path: "M0,0",
				r: 0,
				rx: 0,
				ry: 0,
				src: "",
				stroke: "#000",
				"stroke-dasharray": "",
				"stroke-linecap": "butt",
				"stroke-linejoin": "butt",
				"stroke-miterlimit": 0,
				"stroke-opacity": 1,
				"stroke-width": 1,
				target: "_blank",
				"text-anchor": "middle",
				title: "Raphael",
				transform: "",
				width: 0,
				x: 0,
				y: 0
			}, re = n._availableAnimAttrs = {
				blur: z,
				"clip-rect": "csv",
				cx: z,
				cy: z,
				fill: "colour",
				"fill-opacity": z,
				"font-size": z,
				height: z,
				opacity: z,
				path: "path",
				r: z,
				rx: z,
				ry: z,
				stroke: "colour",
				"stroke-opacity": z,
				"stroke-width": z,
				transform: "transform",
				width: z,
				x: z,
				y: z
			}, ie = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
			oe = {
				hs: 1,
				rg: 1
			}, ae = /,?([achlmqrstvxz]),?/gi,
			se = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
			ue = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
			ce = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
			le = (n._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
			fe = function(t, e) {
				return Z(t) - Z(e)
			}, he = function() {}, pe = function(t) {
				return t
			}, de = n._rectPath = function(t, e, n, r, i) {
				return i ? [
					["M", t + i, e],
					["l", n - 2 * i, 0],
					["a", i, i, 0, 0, 1, i, i],
					["l", 0, r - 2 * i],
					["a", i, i, 0, 0, 1, -i, i],
					["l", 2 * i - n, 0],
					["a", i, i, 0, 0, 1, -i, -i],
					["l", 0, 2 * i - r],
					["a", i, i, 0, 0, 1, i, -i],
					["z"]
				] : [
					["M", t, e],
					["l", n, 0],
					["l", 0, r],
					["l", -n, 0],
					["z"]
				]
			}, ge = function(t, e, n, r) {
				return null == r && (r = n), [
					["M", t, e],
					["m", 0, -r],
					["a", n, r, 0, 1, 1, 0, 2 * r],
					["a", n, r, 0, 1, 1, 0, -2 * r],
					["z"]
				]
			}, ve = n._getPath = {
				path: function(t) {
					return t.attr("path")
				},
				circle: function(t) {
					var e = t.attrs;
					return ge(e.cx, e.cy, e.r)
				},
				ellipse: function(t) {
					var e = t.attrs;
					return ge(e.cx, e.cy, e.rx, e.ry)
				},
				rect: function(t) {
					var e = t.attrs;
					return de(e.x, e.y, e.width, e.height, e.r)
				},
				image: function(t) {
					var e = t.attrs;
					return de(e.x, e.y, e.width, e.height)
				},
				text: function(t) {
					var e = t._getBBox();
					return de(e.x, e.y, e.width, e.height)
				},
				set: function(t) {
					var e = t._getBBox();
					return de(e.x, e.y, e.width, e.height)
				}
			}, me = n.mapPath = function(t, e) {
				if (!e) return t;
				var n, r, i, o, a, s, u;
				for (t = Le(t), i = 0, a = t.length; a > i; i++)
					for (u = t[i], o = 1, s = u.length; s > o; o += 2) n = e.x(u[o], u[o + 1]), r = e.y(u[o], u[o + 1]), u[o] = n, u[o + 1] = r;
				return t
			};
		if (n._g = _, n.type = _.win.SVGAngle || _.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == n.type) {
			var ye, xe = _.doc.createElement("div");
			if (xe.innerHTML = '<v:shape adj="1"/>', ye = xe.firstChild, ye.style.behavior = "url(#default#VML)", !ye || "object" != typeof ye.adj) return n.type = j;
			xe = null
		}
		n.svg = !(n.vml = "VML" == n.type), n._Paper = E, n.fn = b = E.prototype = n.prototype, n._id = 0, n._oid = 0, n.is = function(t, e) {
			return e = B.call(e), "finite" == e ? !Q[S](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || G.call(t).slice(8, -1).toLowerCase() == e
		}, n.angle = function(t, e, r, i, o, a) {
			if (null == o) {
				var s = t - r,
					u = e - i;
				return s || u ? (180 + 180 * q.atan2(-u, -s) / V + 360) % 360 : 0
			}
			return n.angle(t, e, o, a) - n.angle(r, i, o, a)
		}, n.rad = function(t) {
			return t % 360 * V / 180
		}, n.deg = function(t) {
			return 180 * t / V % 360
		}, n.snapTo = function(t, e, r) {
			if (r = n.is(r, "finite") ? r : 10, n.is(t, X)) {
				for (var i = t.length; i--;)
					if (H(t[i] - e) <= r) return t[i]
			} else {
				t = +t;
				var o = e % t;
				if (r > o) return e - o;
				if (o > t - r) return e - o + t
			}
			return e
		};
		n.createUUID = function(t, e) {
			return function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
			}
		}(/[xy]/g, function(t) {
			var e = 16 * q.random() | 0,
				n = "x" == t ? e : 3 & e | 8;
			return n.toString(16)
		});
		n.setWindow = function(t) {
			e("raphael.setWindow", n, _.win, t), _.win = t, _.doc = _.win.document, n._engine.initWin && n._engine.initWin(_.win)
		};
		var $e = function(t) {
			if (n.vml) {
				var e, r = /^\s+|\s+$/g;
				try {
					var i = new ActiveXObject("htmlfile");
					i.write("<body>"), i.close(), e = i.body
				} catch (a) {
					e = createPopup().document.body
				}
				var s = e.createTextRange();
				$e = o(function(t) {
					try {
						e.style.color = P(t).replace(r, j);
						var n = s.queryCommandValue("ForeColor");
						return n = (255 & n) << 16 | 65280 & n | (16711680 & n) >>> 16, "#" + ("000000" + n.toString(16)).slice(-6)
					} catch (i) {
						return "none"
					}
				})
			} else {
				var u = _.doc.createElement("i");
				u.title = "Raphaël Colour Picker", u.style.display = "none", _.doc.body.appendChild(u), $e = o(function(t) {
					return u.style.color = t, _.doc.defaultView.getComputedStyle(u, j).getPropertyValue("color")
				})
			}
			return $e(t)
		}, be = function() {
				return "hsb(" + [this.h, this.s, this.b] + ")"
			}, we = function() {
				return "hsl(" + [this.h, this.s, this.l] + ")"
			}, ke = function() {
				return this.hex
			}, Ce = function(t, e, r) {
				if (null == e && n.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && n.is(t, W)) {
					var i = n.getRGB(t);
					t = i.r, e = i.g, r = i.b
				}
				return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
			}, Se = function(t, e, r, i) {
				t *= 255, e *= 255, r *= 255;
				var o = {
					r: t,
					g: e,
					b: r,
					hex: n.rgb(t, e, r),
					toString: ke
				};
				return n.is(i, "finite") && (o.opacity = i), o
			};
		n.color = function(t) {
			var e;
			return n.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : n.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (n.is(t, "string") && (t = n.getRGB(t)), n.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
				hex: "none"
			}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = ke, t
		}, n.hsb2rgb = function(t, e, n, r) {
			this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
			var i, o, a, s, u;
			return t = t % 360 / 60, u = n * e, s = u * (1 - H(t % 2 - 1)), i = o = a = n - u, t = ~~t, i += [u, s, 0, 0, s, u][t], o += [s, u, u, s, 0, 0][t], a += [0, 0, s, u, u, s][t], Se(i, o, a, r)
		}, n.hsl2rgb = function(t, e, n, r) {
			this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
			var i, o, a, s, u;
			return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), s = u * (1 - H(t % 2 - 1)), i = o = a = n - u / 2, t = ~~t, i += [u, s, 0, 0, s, u][t], o += [s, u, u, s, 0, 0][t], a += [0, 0, s, u, u, s][t], Se(i, o, a, r)
		}, n.rgb2hsb = function(t, e, n) {
			n = Ce(t, e, n), t = n[0], e = n[1], n = n[2];
			var r, i, o, a;
			return o = F(t, e, n), a = o - I(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
				h: r,
				s: i,
				b: o,
				toString: be
			}
		}, n.rgb2hsl = function(t, e, n) {
			n = Ce(t, e, n), t = n[0], e = n[1], n = n[2];
			var r, i, o, a, s, u;
			return a = F(t, e, n), s = I(t, e, n), u = a - s, r = 0 == u ? null : a == t ? (e - n) / u : a == e ? (n - t) / u + 2 : (t - e) / u + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == u ? 0 : .5 > o ? u / (2 * o) : u / (2 - 2 * o), {
				h: r,
				s: i,
				l: o,
				toString: we
			}
		}, n._path2string = function() {
			return this.join(",").replace(ae, "$1")
		};
		n._preload = function(t, e) {
			var n = _.doc.createElement("img");
			n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
				e.call(this), this.onload = null, _.doc.body.removeChild(this)
			}, n.onerror = function() {
				_.doc.body.removeChild(this)
			}, _.doc.body.appendChild(n), n.src = t
		};
		n.getRGB = o(function(t) {
			if (!t || (t = P(t)).indexOf("-") + 1) return {
				r: -1,
				g: -1,
				b: -1,
				hex: "none",
				error: 1,
				toString: a
			};
			if ("none" == t) return {
				r: -1,
				g: -1,
				b: -1,
				hex: "none",
				toString: a
			};
			!(oe[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = $e(t));
			var e, r, i, o, s, u, c = t.match(Y);
			return c ? (c[2] && (i = te(c[2].substring(5), 16), r = te(c[2].substring(3, 5), 16), e = te(c[2].substring(1, 3), 16)), c[3] && (i = te((s = c[3].charAt(3)) + s, 16), r = te((s = c[3].charAt(2)) + s, 16), e = te((s = c[3].charAt(1)) + s, 16)), c[4] && (u = c[4][D](ie), e = Z(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), r = Z(u[1]), "%" == u[1].slice(-1) && (r *= 2.55), i = Z(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (o = Z(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100)), c[5] ? (u = c[5][D](ie), e = Z(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), r = Z(u[1]), "%" == u[1].slice(-1) && (r *= 2.55), i = Z(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (o = Z(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), n.hsb2rgb(e, r, i, o)) : c[6] ? (u = c[6][D](ie), e = Z(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), r = Z(u[1]), "%" == u[1].slice(-1) && (r *= 2.55), i = Z(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (o = Z(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), n.hsl2rgb(e, r, i, o)) : (c = {
				r: e,
				g: r,
				b: i,
				toString: a
			}, c.hex = "#" + (16777216 | i | r << 8 | e << 16).toString(16).slice(1), n.is(o, "finite") && (c.opacity = o), c)) : {
				r: -1,
				g: -1,
				b: -1,
				hex: "none",
				error: 1,
				toString: a
			}
		}, n), n.hsb = o(function(t, e, r) {
			return n.hsb2rgb(t, e, r).hex
		}), n.hsl = o(function(t, e, r) {
			return n.hsl2rgb(t, e, r).hex
		}), n.rgb = o(function(t, e, n) {
			return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
		}), n.getColor = function(t) {
			var e = this.getColor.start = this.getColor.start || {
				h: 0,
				s: 1,
				b: t || .75
			}, n = this.hsb2rgb(e.h, e.s, e.b);
			return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
				h: 0,
				s: 1,
				b: e.b
			})), n.hex
		}, n.getColor.reset = function() {
			delete this.start
		}, n.parsePathString = function(t) {
			if (!t) return null;
			var e = _e(t);
			if (e.arr) return Ee(e.arr);
			var r = {
				a: 7,
				c: 6,
				h: 1,
				l: 2,
				m: 2,
				r: 4,
				q: 4,
				s: 4,
				t: 2,
				v: 1,
				z: 0
			}, i = [];
			return n.is(t, X) && n.is(t[0], X) && (i = Ee(t)), i.length || P(t).replace(se, function(t, e, n) {
				var o = [],
					a = e.toLowerCase();
				if (n.replace(ce, function(t, e) {
					e && o.push(+e)
				}), "m" == a && o.length > 2 && (i.push([e][N](o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "r" == a) i.push([e][N](o));
				else
					for (; o.length >= r[a] && (i.push([e][N](o.splice(0, r[a]))), r[a]););
			}), i.toString = n._path2string, e.arr = Ee(i), i
		}, n.parseTransformString = o(function(t) {
			if (!t) return null;
			var e = [];
			return n.is(t, X) && n.is(t[0], X) && (e = Ee(t)), e.length || P(t).replace(ue, function(t, n, r) {
				{
					var i = [];
					B.call(n)
				}
				r.replace(ce, function(t, e) {
					e && i.push(+e)
				}), e.push([n][N](i))
			}), e.toString = n._path2string, e
		});
		var _e = function(t) {
			var e = _e.ps = _e.ps || {};
			return e[t] ? e[t].sleep = 100 : e[t] = {
				sleep: 100
			}, setTimeout(function() {
				for (var n in e) e[S](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
			}), e[t]
		};
		n.findDotsAtSegment = function(t, e, n, r, i, o, a, s, u) {
			var c = 1 - u,
				l = U(c, 3),
				f = U(c, 2),
				h = u * u,
				p = h * u,
				d = l * t + 3 * f * u * n + 3 * c * u * u * i + p * a,
				g = l * e + 3 * f * u * r + 3 * c * u * u * o + p * s,
				v = t + 2 * u * (n - t) + h * (i - 2 * n + t),
				m = e + 2 * u * (r - e) + h * (o - 2 * r + e),
				y = n + 2 * u * (i - n) + h * (a - 2 * i + n),
				x = r + 2 * u * (o - r) + h * (s - 2 * o + r),
				$ = c * t + u * n,
				b = c * e + u * r,
				w = c * i + u * a,
				k = c * o + u * s,
				C = 90 - 180 * q.atan2(v - y, m - x) / V;
			return (v > y || x > m) && (C += 180), {
				x: d,
				y: g,
				m: {
					x: v,
					y: m
				},
				n: {
					x: y,
					y: x
				},
				start: {
					x: $,
					y: b
				},
				end: {
					x: w,
					y: k
				},
				alpha: C
			}
		}, n.bezierBBox = function(t, e, r, i, o, a, s, u) {
			n.is(t, "array") || (t = [t, e, r, i, o, a, s, u]);
			var c = De.apply(null, t);
			return {
				x: c.min.x,
				y: c.min.y,
				x2: c.max.x,
				y2: c.max.y,
				width: c.max.x - c.min.x,
				height: c.max.y - c.min.y
			}
		}, n.isPointInsideBBox = function(t, e, n) {
			return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2
		}, n.isBBoxIntersect = function(t, e) {
			var r = n.isPointInsideBBox;
			return r(e, t.x, t.y) || r(e, t.x2, t.y) || r(e, t.x, t.y2) || r(e, t.x2, t.y2) || r(t, e.x, e.y) || r(t, e.x2, e.y) || r(t, e.x, e.y2) || r(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
		}, n.pathIntersection = function(t, e) {
			return p(t, e)
		}, n.pathIntersectionNumber = function(t, e) {
			return p(t, e, 1)
		}, n.isPointInsidePath = function(t, e, r) {
			var i = n.pathBBox(t);
			return n.isPointInsideBBox(i, e, r) && p(t, [
				["M", e, r],
				["H", i.x2 + 10]
			], 1) % 2 == 1
		}, n._removedFactory = function(t) {
			return function() {
				e("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
			}
		};
		var Te = n.pathBBox = function(t) {
			var e = _e(t);
			if (e.bbox) return r(e.bbox);
			if (!t) return {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				x2: 0,
				y2: 0
			};
			t = Le(t);
			for (var n, i = 0, o = 0, a = [], s = [], u = 0, c = t.length; c > u; u++)
				if (n = t[u], "M" == n[0]) i = n[1], o = n[2], a.push(i), s.push(o);
				else {
					var l = De(i, o, n[1], n[2], n[3], n[4], n[5], n[6]);
					a = a[N](l.min.x, l.max.x), s = s[N](l.min.y, l.max.y), i = n[5], o = n[6]
				}
			var f = I[A](0, a),
				h = I[A](0, s),
				p = F[A](0, a),
				d = F[A](0, s),
				g = p - f,
				v = d - h,
				m = {
					x: f,
					y: h,
					x2: p,
					y2: d,
					width: g,
					height: v,
					cx: f + g / 2,
					cy: h + v / 2
				};
			return e.bbox = r(m), m
		}, Ee = function(t) {
				var e = r(t);
				return e.toString = n._path2string, e
			}, Ae = n._pathToRelative = function(t) {
				var e = _e(t);
				if (e.rel) return Ee(e.rel);
				n.is(t, X) && n.is(t && t[0], X) || (t = n.parsePathString(t));
				var r = [],
					i = 0,
					o = 0,
					a = 0,
					s = 0,
					u = 0;
				"M" == t[0][0] && (i = t[0][1], o = t[0][2], a = i, s = o, u++, r.push(["M", i, o]));
				for (var c = u, l = t.length; l > c; c++) {
					var f = r[c] = [],
						h = t[c];
					if (h[0] != B.call(h[0])) switch (f[0] = B.call(h[0]), f[0]) {
						case "a":
							f[1] = h[1], f[2] = h[2], f[3] = h[3], f[4] = h[4], f[5] = h[5], f[6] = +(h[6] - i).toFixed(3), f[7] = +(h[7] - o).toFixed(3);
							break;
						case "v":
							f[1] = +(h[1] - o).toFixed(3);
							break;
						case "m":
							a = h[1], s = h[2];
						default:
							for (var p = 1, d = h.length; d > p; p++) f[p] = +(h[p] - (p % 2 ? i : o)).toFixed(3)
					} else {
						f = r[c] = [], "m" == h[0] && (a = h[1] + i, s = h[2] + o);
						for (var g = 0, v = h.length; v > g; g++) r[c][g] = h[g]
					}
					var m = r[c].length;
					switch (r[c][0]) {
						case "z":
							i = a, o = s;
							break;
						case "h":
							i += +r[c][m - 1];
							break;
						case "v":
							o += +r[c][m - 1];
							break;
						default:
							i += +r[c][m - 2], o += +r[c][m - 1]
					}
				}
				return r.toString = n._path2string, e.rel = Ee(r), r
			}, Ne = n._pathToAbsolute = function(t) {
				var e = _e(t);
				if (e.abs) return Ee(e.abs);
				if (n.is(t, X) && n.is(t && t[0], X) || (t = n.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
				var r = [],
					i = 0,
					o = 0,
					a = 0,
					u = 0,
					c = 0;
				"M" == t[0][0] && (i = +t[0][1], o = +t[0][2], a = i, u = o, c++, r[0] = ["M", i, o]);
				for (var l, f, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = c, d = t.length; d > p; p++) {
					if (r.push(l = []), f = t[p], f[0] != ee.call(f[0])) switch (l[0] = ee.call(f[0]), l[0]) {
						case "A":
							l[1] = f[1], l[2] = f[2], l[3] = f[3], l[4] = f[4], l[5] = f[5], l[6] = +(f[6] + i), l[7] = +(f[7] + o);
							break;
						case "V":
							l[1] = +f[1] + o;
							break;
						case "H":
							l[1] = +f[1] + i;
							break;
						case "R":
							for (var g = [i, o][N](f.slice(1)), v = 2, m = g.length; m > v; v++) g[v] = +g[v] + i, g[++v] = +g[v] + o;
							r.pop(), r = r[N](s(g, h));
							break;
						case "M":
							a = +f[1] + i, u = +f[2] + o;
						default:
							for (v = 1, m = f.length; m > v; v++) l[v] = +f[v] + (v % 2 ? i : o)
					} else if ("R" == f[0]) g = [i, o][N](f.slice(1)), r.pop(), r = r[N](s(g, h)), l = ["R"][N](f.slice(-2));
					else
						for (var y = 0, x = f.length; x > y; y++) l[y] = f[y];
					switch (l[0]) {
						case "Z":
							i = a, o = u;
							break;
						case "H":
							i = l[1];
							break;
						case "V":
							o = l[1];
							break;
						case "M":
							a = l[l.length - 2], u = l[l.length - 1];
						default:
							i = l[l.length - 2], o = l[l.length - 1]
					}
				}
				return r.toString = n._path2string, e.abs = Ee(r), r
			}, Me = function(t, e, n, r) {
				return [t, e, n, r, n, r]
			}, je = function(t, e, n, r, i, o) {
				var a = 1 / 3,
					s = 2 / 3;
				return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
			}, Oe = function(t, e, n, r, i, a, s, u, c, l) {
				var f, h = 120 * V / 180,
					p = V / 180 * (+i || 0),
					d = [],
					g = o(function(t, e, n) {
						var r = t * q.cos(n) - e * q.sin(n),
							i = t * q.sin(n) + e * q.cos(n);
						return {
							x: r,
							y: i
						}
					});
				if (l) C = l[0], S = l[1], w = l[2], k = l[3];
				else {
					f = g(t, e, -p), t = f.x, e = f.y, f = g(u, c, -p), u = f.x, c = f.y;
					var v = (q.cos(V / 180 * i), q.sin(V / 180 * i), (t - u) / 2),
						m = (e - c) / 2,
						y = v * v / (n * n) + m * m / (r * r);
					y > 1 && (y = q.sqrt(y), n = y * n, r = y * r);
					var x = n * n,
						$ = r * r,
						b = (a == s ? -1 : 1) * q.sqrt(H((x * $ - x * m * m - $ * v * v) / (x * m * m + $ * v * v))),
						w = b * n * m / r + (t + u) / 2,
						k = b * -r * v / n + (e + c) / 2,
						C = q.asin(((e - k) / r).toFixed(9)),
						S = q.asin(((c - k) / r).toFixed(9));
					C = w > t ? V - C : C, S = w > u ? V - S : S, 0 > C && (C = 2 * V + C), 0 > S && (S = 2 * V + S), s && C > S && (C -= 2 * V), !s && S > C && (S -= 2 * V)
				}
				var _ = S - C;
				if (H(_) > h) {
					var T = S,
						E = u,
						A = c;
					S = C + h * (s && S > C ? 1 : -1), u = w + n * q.cos(S), c = k + r * q.sin(S), d = Oe(u, c, n, r, i, 0, s, E, A, [S, T, w, k])
				}
				_ = S - C;
				var M = q.cos(C),
					j = q.sin(C),
					O = q.cos(S),
					P = q.sin(S),
					L = q.tan(_ / 4),
					R = 4 / 3 * n * L,
					B = 4 / 3 * r * L,
					F = [t, e],
					I = [t + R * j, e - B * M],
					U = [u + R * P, c - B * O],
					z = [u, c];
				if (I[0] = 2 * F[0] - I[0], I[1] = 2 * F[1] - I[1], l) return [I, U, z][N](d);
				d = [I, U, z][N](d).join()[D](",");
				for (var W = [], X = 0, G = d.length; G > X; X++) W[X] = X % 2 ? g(d[X - 1], d[X], p).y : g(d[X], d[X + 1], p).x;
				return W
			}, Pe = function(t, e, n, r, i, o, a, s, u) {
				var c = 1 - u;
				return {
					x: U(c, 3) * t + 3 * U(c, 2) * u * n + 3 * c * u * u * i + U(u, 3) * a,
					y: U(c, 3) * e + 3 * U(c, 2) * u * r + 3 * c * u * u * o + U(u, 3) * s
				}
			}, De = o(function(t, e, n, r, i, o, a, s) {
				var u, c = i - 2 * n + t - (a - 2 * i + n),
					l = 2 * (n - t) - 2 * (i - n),
					f = t - n,
					h = (-l + q.sqrt(l * l - 4 * c * f)) / 2 / c,
					p = (-l - q.sqrt(l * l - 4 * c * f)) / 2 / c,
					d = [e, s],
					g = [t, a];
				return H(h) > "1e12" && (h = .5), H(p) > "1e12" && (p = .5), h > 0 && 1 > h && (u = Pe(t, e, n, r, i, o, a, s, h), g.push(u.x), d.push(u.y)), p > 0 && 1 > p && (u = Pe(t, e, n, r, i, o, a, s, p), g.push(u.x), d.push(u.y)), c = o - 2 * r + e - (s - 2 * o + r), l = 2 * (r - e) - 2 * (o - r), f = e - r, h = (-l + q.sqrt(l * l - 4 * c * f)) / 2 / c, p = (-l - q.sqrt(l * l - 4 * c * f)) / 2 / c, H(h) > "1e12" && (h = .5), H(p) > "1e12" && (p = .5), h > 0 && 1 > h && (u = Pe(t, e, n, r, i, o, a, s, h), g.push(u.x), d.push(u.y)), p > 0 && 1 > p && (u = Pe(t, e, n, r, i, o, a, s, p), g.push(u.x), d.push(u.y)), {
					min: {
						x: I[A](0, g),
						y: I[A](0, d)
					},
					max: {
						x: F[A](0, g),
						y: F[A](0, d)
					}
				}
			}),
			Le = n._path2curve = o(function(t, e) {
				var n = !e && _e(t);
				if (!e && n.curve) return Ee(n.curve);
				for (var r = Ne(t), i = e && Ne(e), o = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, a = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, s = (function(t, e, n) {
						var r, i;
						if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
						switch (!(t[0] in {
							T: 1,
							Q: 1
						}) && (e.qx = e.qy = null), t[0]) {
							case "M":
								e.X = t[1], e.Y = t[2];
								break;
							case "A":
								t = ["C"][N](Oe[A](0, [e.x, e.y][N](t.slice(1))));
								break;
							case "S":
								"C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i][N](t.slice(1));
								break;
							case "T":
								"Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][N](je(e.x, e.y, e.qx, e.qy, t[1], t[2]));
								break;
							case "Q":
								e.qx = t[1], e.qy = t[2], t = ["C"][N](je(e.x, e.y, t[1], t[2], t[3], t[4]));
								break;
							case "L":
								t = ["C"][N](Me(e.x, e.y, t[1], t[2]));
								break;
							case "H":
								t = ["C"][N](Me(e.x, e.y, t[1], e.y));
								break;
							case "V":
								t = ["C"][N](Me(e.x, e.y, e.x, t[1]));
								break;
							case "Z":
								t = ["C"][N](Me(e.x, e.y, e.X, e.Y))
						}
						return t
					}), u = function(t, e) {
						if (t[e].length > 7) {
							t[e].shift();
							for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"][N](n.splice(0, 6)));
							t.splice(e, 1), f = F(r.length, i && i.length || 0)
						}
					}, c = function(t, e, n, o, a) {
						t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], f = F(r.length, i && i.length || 0))
					}, l = 0, f = F(r.length, i && i.length || 0); f > l; l++) {
					r[l] = s(r[l], o), u(r, l), i && (i[l] = s(i[l], a)), i && u(i, l), c(r, i, o, a, l), c(i, r, a, o, l);
					var h = r[l],
						p = i && i[l],
						d = h.length,
						g = i && p.length;
					o.x = h[d - 2], o.y = h[d - 1], o.bx = Z(h[d - 4]) || o.x, o.by = Z(h[d - 3]) || o.y, a.bx = i && (Z(p[g - 4]) || a.x), a.by = i && (Z(p[g - 3]) || a.y), a.x = i && p[g - 2], a.y = i && p[g - 1]
				}
				return i || (n.curve = Ee(r)), i ? [r, i] : r
			}, null, Ee),
			Re = (n._parseDots = o(function(t) {
				for (var e = [], r = 0, i = t.length; i > r; r++) {
					var o = {}, a = t[r].match(/^([^:]*):?([\d\.]*)/);
					if (o.color = n.getRGB(a[1]), o.color.error) return null;
					o.color = o.color.hex, a[2] && (o.offset = a[2] + "%"), e.push(o)
				}
				for (r = 1, i = e.length - 1; i > r; r++)
					if (!e[r].offset) {
						for (var s = Z(e[r - 1].offset || 0), u = 0, c = r + 1; i > c; c++)
							if (e[c].offset) {
								u = e[c].offset;
								break
							}
						u || (u = 100, c = i), u = Z(u);
						for (var l = (u - s) / (c - r + 1); c > r; r++) s += l, e[r].offset = s + "%"
					}
				return e
			}), n._tear = function(t, e) {
				t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
			}),
			Be = (n._tofront = function(t, e) {
				e.top !== t && (Re(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
			}, n._toback = function(t, e) {
				e.bottom !== t && (Re(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
			}, n._insertafter = function(t, e, n) {
				Re(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
			}, n._insertbefore = function(t, e, n) {
				Re(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
			}, n.toMatrix = function(t, e) {
				var n = Te(t),
					r = {
						_: {
							transform: j
						},
						getBBox: function() {
							return n
						}
					};
				return qe(r, e), r.matrix
			}),
			qe = (n.transformPath = function(t, e) {
				return me(t, Be(t, e))
			}, n._extractTransform = function(t, e) {
				if (null == e) return t._.transform;
				e = P(e).replace(/\.{3}|\u2026/g, t._.transform || j);
				var r = n.parseTransformString(e),
					i = 0,
					o = 0,
					a = 0,
					s = 1,
					u = 1,
					c = t._,
					l = new d;
				if (c.transform = r || [], r)
					for (var f = 0, h = r.length; h > f; f++) {
						var p, g, v, m, y, x = r[f],
							$ = x.length,
							b = P(x[0]).toLowerCase(),
							w = x[0] != b,
							k = w ? l.invert() : 0;
						"t" == b && 3 == $ ? w ? (p = k.x(0, 0), g = k.y(0, 0), v = k.x(x[1], x[2]), m = k.y(x[1], x[2]), l.translate(v - p, m - g)) : l.translate(x[1], x[2]) : "r" == b ? 2 == $ ? (y = y || t.getBBox(1), l.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), i += x[1]) : 4 == $ && (w ? (v = k.x(x[2], x[3]), m = k.y(x[2], x[3]), l.rotate(x[1], v, m)) : l.rotate(x[1], x[2], x[3]), i += x[1]) : "s" == b ? 2 == $ || 3 == $ ? (y = y || t.getBBox(1), l.scale(x[1], x[$ - 1], y.x + y.width / 2, y.y + y.height / 2), s *= x[1], u *= x[$ - 1]) : 5 == $ && (w ? (v = k.x(x[3], x[4]), m = k.y(x[3], x[4]), l.scale(x[1], x[2], v, m)) : l.scale(x[1], x[2], x[3], x[4]), s *= x[1], u *= x[2]) : "m" == b && 7 == $ && l.add(x[1], x[2], x[3], x[4], x[5], x[6]), c.dirtyT = 1, t.matrix = l
					}
				t.matrix = l, c.sx = s, c.sy = u, c.deg = i, c.dx = o = l.e, c.dy = a = l.f, 1 == s && 1 == u && !i && c.bbox ? (c.bbox.x += +o, c.bbox.y += +a) : c.dirtyT = 1
			}),
			Fe = function(t) {
				var e = t[0];
				switch (e.toLowerCase()) {
					case "t":
						return [e, 0, 0];
					case "m":
						return [e, 1, 0, 0, 1, 0, 0];
					case "r":
						return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
					case "s":
						return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
				}
			}, Ie = n._equaliseTransform = function(t, e) {
				e = P(e).replace(/\.{3}|\u2026/g, t), t = n.parseTransformString(t) || [], e = n.parseTransformString(e) || [];
				for (var r, i, o, a, s = F(t.length, e.length), u = [], c = [], l = 0; s > l; l++) {
					if (o = t[l] || Fe(e[l]), a = e[l] || Fe(o), o[0] != a[0] || "r" == o[0].toLowerCase() && (o[2] != a[2] || o[3] != a[3]) || "s" == o[0].toLowerCase() && (o[3] != a[3] || o[4] != a[4])) return;
					for (u[l] = [], c[l] = [], r = 0, i = F(o.length, a.length); i > r; r++) r in o && (u[l][r] = o[r]), r in a && (c[l][r] = a[r])
				}
				return {
					from: u,
					to: c
				}
			};
		n._getContainer = function(t, e, r, i) {
			var o;
			return o = null != i || n.is(t, "object") ? t : _.doc.getElementById(t), null != o ? o.tagName ? null == e ? {
				container: o,
				width: o.style.pixelWidth || o.offsetWidth,
				height: o.style.pixelHeight || o.offsetHeight
			} : {
				container: o,
				width: e,
				height: r
			} : {
				container: 1,
				x: t,
				y: e,
				width: r,
				height: i
			} : void 0
		}, n.pathToRelative = Ae, n._engine = {}, n.path2curve = Le, n.matrix = function(t, e, n, r, i, o) {
			return new d(t, e, n, r, i, o)
		},
		function(t) {
			function e(t) {
				return t[0] * t[0] + t[1] * t[1]
			}

			function r(t) {
				var n = q.sqrt(e(t));
				t[0] && (t[0] /= n), t[1] && (t[1] /= n)
			}
			t.add = function(t, e, n, r, i, o) {
				var a, s, u, c, l = [
						[],
						[],
						[]
					],
					f = [
						[this.a, this.c, this.e],
						[this.b, this.d, this.f],
						[0, 0, 1]
					],
					h = [
						[t, n, i],
						[e, r, o],
						[0, 0, 1]
					];
				for (t && t instanceof d && (h = [
					[t.a, t.c, t.e],
					[t.b, t.d, t.f],
					[0, 0, 1]
				]), a = 0; 3 > a; a++)
					for (s = 0; 3 > s; s++) {
						for (c = 0, u = 0; 3 > u; u++) c += f[a][u] * h[u][s];
						l[a][s] = c
					}
				this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2]
			}, t.invert = function() {
				var t = this,
					e = t.a * t.d - t.b * t.c;
				return new d(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
			}, t.clone = function() {
				return new d(this.a, this.b, this.c, this.d, this.e, this.f)
			}, t.translate = function(t, e) {
				this.add(1, 0, 0, 1, t, e)
			}, t.scale = function(t, e, n, r) {
				null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
			}, t.rotate = function(t, e, r) {
				t = n.rad(t), e = e || 0, r = r || 0;
				var i = +q.cos(t).toFixed(9),
					o = +q.sin(t).toFixed(9);
				this.add(i, o, -o, i, e, r), this.add(1, 0, 0, 1, -e, -r)
			}, t.x = function(t, e) {
				return t * this.a + e * this.c + this.e
			}, t.y = function(t, e) {
				return t * this.b + e * this.d + this.f
			}, t.get = function(t) {
				return +this[P.fromCharCode(97 + t)].toFixed(4)
			}, t.toString = function() {
				return n.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
			}, t.toFilter = function() {
				return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
			}, t.offset = function() {
				return [this.e.toFixed(4), this.f.toFixed(4)]
			}, t.split = function() {
				var t = {};
				t.dx = this.e, t.dy = this.f;
				var i = [
					[this.a, this.c],
					[this.b, this.d]
				];
				t.scalex = q.sqrt(e(i[0])), r(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = q.sqrt(e(i[1])), r(i[1]), t.shear /= t.scaley;
				var o = -i[0][1],
					a = i[1][1];
				return 0 > a ? (t.rotate = n.deg(q.acos(a)), 0 > o && (t.rotate = 360 - t.rotate)) : t.rotate = n.deg(q.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
			}, t.toTransformString = function(t) {
				var e = t || this[D]();
				return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : j) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : j) + (e.rotate ? "r" + [e.rotate, 0, 0] : j)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
			}
		}(d.prototype);
		var He = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
		b.safari = "Apple Computer, Inc." == navigator.vendor && (He && He[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && He && He[1] < 8 ? function() {
			var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
				stroke: "none"
			});
			setTimeout(function() {
				t.remove()
			})
		} : he;
		for (var Ue = function() {
			this.returnValue = !1
		}, Ve = function() {
				return this.originalEvent.preventDefault()
			}, ze = function() {
				this.cancelBubble = !0
			}, We = function() {
				return this.originalEvent.stopPropagation()
			}, Xe = function(t) {
				var e = _.doc.documentElement.scrollTop || _.doc.body.scrollTop,
					n = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft;
				return {
					x: t.clientX + n,
					y: t.clientY + e
				}
			}, Ge = function() {
				return _.doc.addEventListener ? function(t, e, n, r) {
					var i = function(t) {
						var e = Xe(t);
						return n.call(r, t, e.x, e.y)
					};
					if (t.addEventListener(e, i, !1), M && R[e]) {
						var o = function(e) {
							for (var i = Xe(e), o = e, a = 0, s = e.targetTouches && e.targetTouches.length; s > a; a++)
								if (e.targetTouches[a].target == t) {
									e = e.targetTouches[a], e.originalEvent = o, e.preventDefault = Ve, e.stopPropagation = We;
									break
								}
							return n.call(r, e, i.x, i.y)
						};
						t.addEventListener(R[e], o, !1)
					}
					return function() {
						return t.removeEventListener(e, i, !1), M && R[e] && t.removeEventListener(R[e], i, !1), !0
					}
				} : _.doc.attachEvent ? function(t, e, n, r) {
					var i = function(t) {
						t = t || _.win.event;
						var e = _.doc.documentElement.scrollTop || _.doc.body.scrollTop,
							i = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft,
							o = t.clientX + i,
							a = t.clientY + e;
						return t.preventDefault = t.preventDefault || Ue, t.stopPropagation = t.stopPropagation || ze, n.call(r, t, o, a)
					};
					t.attachEvent("on" + e, i);
					var o = function() {
						return t.detachEvent("on" + e, i), !0
					};
					return o
				} : void 0
			}(), Ye = [], Qe = function(t) {
				for (var n, r = t.clientX, i = t.clientY, o = _.doc.documentElement.scrollTop || _.doc.body.scrollTop, a = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft, s = Ye.length; s--;) {
					if (n = Ye[s], M && t.touches) {
						for (var u, c = t.touches.length; c--;)
							if (u = t.touches[c], u.identifier == n.el._drag.id) {
								r = u.clientX, i = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
								break
							}
					} else t.preventDefault();
					var l, f = n.el.node,
						h = f.nextSibling,
						p = f.parentNode,
						d = f.style.display;
					_.win.opera && p.removeChild(f), f.style.display = "none", l = n.el.paper.getElementByPoint(r, i), f.style.display = d, _.win.opera && (h ? p.insertBefore(f, h) : p.appendChild(f)), l && e("raphael.drag.over." + n.el.id, n.el, l), r += a, i += o, e("raphael.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
				}
			}, Je = function(t) {
				n.unmousemove(Qe).unmouseup(Je);
				for (var r, i = Ye.length; i--;) r = Ye[i], r.el._drag = {}, e("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t);
				Ye = []
			}, Ke = n.el = {}, Ze = L.length; Ze--;)! function(t) {
			n[t] = Ke[t] = function(e, r) {
				return n.is(e, "function") && (this.events = this.events || [], this.events.push({
					name: t,
					f: e,
					unbind: Ge(this.shape || this.node || _.doc, t, e, r || this)
				})), this
			}, n["un" + t] = Ke["un" + t] = function(e) {
				for (var r = this.events || [], i = r.length; i--;) r[i].name != t || !n.is(e, "undefined") && r[i].f != e || (r[i].unbind(), r.splice(i, 1), !r.length && delete this.events);
				return this
			}
		}(L[Ze]);
		Ke.data = function(t, r) {
			var i = le[this.id] = le[this.id] || {};
			if (0 == arguments.length) return i;
			if (1 == arguments.length) {
				if (n.is(t, "object")) {
					for (var o in t) t[S](o) && this.data(o, t[o]);
					return this
				}
				return e("raphael.data.get." + this.id, this, i[t], t), i[t]
			}
			return i[t] = r, e("raphael.data.set." + this.id, this, r, t), this
		}, Ke.removeData = function(t) {
			return null == t ? le[this.id] = {} : le[this.id] && delete le[this.id][t], this
		}, Ke.getData = function() {
			return r(le[this.id] || {})
		}, Ke.hover = function(t, e, n, r) {
			return this.mouseover(t, n).mouseout(e, r || n)
		}, Ke.unhover = function(t, e) {
			return this.unmouseover(t).unmouseout(e)
		};
		var tn = [];
		Ke.drag = function(t, r, i, o, a, s) {
			function u(u) {
				(u.originalEvent || u).preventDefault();
				var c = u.clientX,
					l = u.clientY,
					f = _.doc.documentElement.scrollTop || _.doc.body.scrollTop,
					h = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft;
				if (this._drag.id = u.identifier, M && u.touches)
					for (var p, d = u.touches.length; d--;)
						if (p = u.touches[d], this._drag.id = p.identifier, p.identifier == this._drag.id) {
							c = p.clientX, l = p.clientY;
							break
						}
				this._drag.x = c + h, this._drag.y = l + f, !Ye.length && n.mousemove(Qe).mouseup(Je), Ye.push({
					el: this,
					move_scope: o,
					start_scope: a,
					end_scope: s
				}), r && e.on("raphael.drag.start." + this.id, r), t && e.on("raphael.drag.move." + this.id, t), i && e.on("raphael.drag.end." + this.id, i), e("raphael.drag.start." + this.id, a || o || this, u.clientX + h, u.clientY + f, u)
			}
			return this._drag = {}, tn.push({
				el: this,
				start: u
			}), this.mousedown(u), this
		}, Ke.onDragOver = function(t) {
			t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
		}, Ke.undrag = function() {
			for (var t = tn.length; t--;) tn[t].el == this && (this.unmousedown(tn[t].start), tn.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
			!tn.length && n.unmousemove(Qe).unmouseup(Je), Ye = []
		}, b.circle = function(t, e, r) {
			var i = n._engine.circle(this, t || 0, e || 0, r || 0);
			return this.__set__ && this.__set__.push(i), i
		}, b.rect = function(t, e, r, i, o) {
			var a = n._engine.rect(this, t || 0, e || 0, r || 0, i || 0, o || 0);
			return this.__set__ && this.__set__.push(a), a
		}, b.ellipse = function(t, e, r, i) {
			var o = n._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
			return this.__set__ && this.__set__.push(o), o
		}, b.path = function(t) {
			t && !n.is(t, W) && !n.is(t[0], X) && (t += j);
			var e = n._engine.path(n.format[A](n, arguments), this);
			return this.__set__ && this.__set__.push(e), e
		}, b.image = function(t, e, r, i, o) {
			var a = n._engine.image(this, t || "about:blank", e || 0, r || 0, i || 0, o || 0);
			return this.__set__ && this.__set__.push(a), a
		}, b.text = function(t, e, r) {
			var i = n._engine.text(this, t || 0, e || 0, P(r));
			return this.__set__ && this.__set__.push(i), i
		}, b.set = function(t) {
			!n.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
			var e = new pn(t);
			return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
		}, b.setStart = function(t) {
			this.__set__ = t || this.set()
		}, b.setFinish = function() {
			var t = this.__set__;
			return delete this.__set__, t
		}, b.setSize = function(t, e) {
			return n._engine.setSize.call(this, t, e)
		}, b.setViewBox = function(t, e, r, i, o) {
			return n._engine.setViewBox.call(this, t, e, r, i, o)
		}, b.top = b.bottom = null, b.raphael = n;
		var en = function(t) {
			var e = t.getBoundingClientRect(),
				n = t.ownerDocument,
				r = n.body,
				i = n.documentElement,
				o = i.clientTop || r.clientTop || 0,
				a = i.clientLeft || r.clientLeft || 0,
				s = e.top + (_.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
				u = e.left + (_.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
			return {
				y: s,
				x: u
			}
		};
		b.getElementByPoint = function(t, e) {
			var n = this,
				r = n.canvas,
				i = _.doc.elementFromPoint(t, e);
			if (_.win.opera && "svg" == i.tagName) {
				var o = en(r),
					a = r.createSVGRect();
				a.x = t - o.x, a.y = e - o.y, a.width = a.height = 1;
				var s = r.getIntersectionList(a, null);
				s.length && (i = s[s.length - 1])
			}
			if (!i) return null;
			for (; i.parentNode && i != r.parentNode && !i.raphael;) i = i.parentNode;
			return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null
		}, b.getElementsByBBox = function(t) {
			var e = this.set();
			return this.forEach(function(r) {
				n.isBBoxIntersect(r.getBBox(), t) && e.push(r)
			}), e
		}, b.getById = function(t) {
			for (var e = this.bottom; e;) {
				if (e.id == t) return e;
				e = e.next
			}
			return null
		}, b.forEach = function(t, e) {
			for (var n = this.bottom; n;) {
				if (t.call(e, n) === !1) return this;
				n = n.next
			}
			return this
		}, b.getElementsByPoint = function(t, e) {
			var n = this.set();
			return this.forEach(function(r) {
				r.isPointInside(t, e) && n.push(r)
			}), n
		}, Ke.isPointInside = function(t, e) {
			var r = this.realPath = ve[this.type](this);
			return this.attr("transform") && this.attr("transform").length && (r = n.transformPath(r, this.attr("transform"))), n.isPointInsidePath(r, t, e)
		}, Ke.getBBox = function(t) {
			if (this.removed) return {};
			var e = this._;
			return t ? ((e.dirty || !e.bboxwt) && (this.realPath = ve[this.type](this), e.bboxwt = Te(this.realPath), e.bboxwt.toString = g, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = ve[this.type](this)), e.bbox = Te(me(this.realPath, this.matrix)), e.bbox.toString = g, e.dirty = e.dirtyT = 0), e.bbox)
		}, Ke.clone = function() {
			if (this.removed) return null;
			var t = this.paper[this.type]().attr(this.attr());
			return this.__set__ && this.__set__.push(t), t
		}, Ke.glow = function(t) {
			if ("text" == this.type) return null;
			t = t || {};
			var e = {
				width: (t.width || 10) + (+this.attr("stroke-width") || 1),
				fill: t.fill || !1,
				opacity: t.opacity || .5,
				offsetx: t.offsetx || 0,
				offsety: t.offsety || 0,
				color: t.color || "#000"
			}, n = e.width / 2,
				r = this.paper,
				i = r.set(),
				o = this.realPath || ve[this.type](this);
			o = this.matrix ? me(o, this.matrix) : o;
			for (var a = 1; n + 1 > a; a++) i.push(r.path(o).attr({
				stroke: e.color,
				fill: e.fill ? e.color : "none",
				"stroke-linejoin": "round",
				"stroke-linecap": "round",
				"stroke-width": +(e.width / n * a).toFixed(3),
				opacity: +(e.opacity / n).toFixed(3)
			}));
			return i.insertBefore(this).translate(e.offsetx, e.offsety)
		};
		var nn = function(t, e, r, i, o, a, s, u, f) {
			return null == f ? c(t, e, r, i, o, a, s, u) : n.findDotsAtSegment(t, e, r, i, o, a, s, u, l(t, e, r, i, o, a, s, u, f))
		}, rn = function(t, e) {
				return function(r, i, o) {
					r = Le(r);
					for (var a, s, u, c, l, f = "", h = {}, p = 0, d = 0, g = r.length; g > d; d++) {
						if (u = r[d], "M" == u[0]) a = +u[1], s = +u[2];
						else {
							if (c = nn(a, s, u[1], u[2], u[3], u[4], u[5], u[6]), p + c > i) {
								if (e && !h.start) {
									if (l = nn(a, s, u[1], u[2], u[3], u[4], u[5], u[6], i - p), f += ["C" + l.start.x, l.start.y, l.m.x, l.m.y, l.x, l.y], o) return f;
									h.start = f, f = ["M" + l.x, l.y + "C" + l.n.x, l.n.y, l.end.x, l.end.y, u[5], u[6]].join(), p += c, a = +u[5], s = +u[6];
									continue
								}
								if (!t && !e) return l = nn(a, s, u[1], u[2], u[3], u[4], u[5], u[6], i - p), {
									x: l.x,
									y: l.y,
									alpha: l.alpha
								}
							}
							p += c, a = +u[5], s = +u[6]
						}
						f += u.shift() + u
					}
					return h.end = f, l = t ? p : e ? h : n.findDotsAtSegment(a, s, u[0], u[1], u[2], u[3], u[4], u[5], 1), l.alpha && (l = {
						x: l.x,
						y: l.y,
						alpha: l.alpha
					}), l
				}
			}, on = rn(1),
			an = rn(),
			sn = rn(0, 1);
		n.getTotalLength = on, n.getPointAtLength = an, n.getSubpath = function(t, e, n) {
			if (this.getTotalLength(t) - n < 1e-6) return sn(t, e).end;
			var r = sn(t, n, 1);
			return e ? sn(r, e).end : r
		}, Ke.getTotalLength = function() {
			var t = this.getPath();
			if (t) return this.node.getTotalLength ? this.node.getTotalLength() : on(t)
		}, Ke.getPointAtLength = function(t) {
			var e = this.getPath();
			if (e) return an(e, t)
		}, Ke.getPath = function() {
			var t, e = n._getPath[this.type];
			if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
		}, Ke.getSubpath = function(t, e) {
			var r = this.getPath();
			if (r) return n.getSubpath(r, t, e)
		};
		var un = n.easing_formulas = {
			linear: function(t) {
				return t
			},
			"<": function(t) {
				return U(t, 1.7)
			},
			">": function(t) {
				return U(t, .48)
			},
			"<>": function(t) {
				var e = .48 - t / 1.04,
					n = q.sqrt(.1734 + e * e),
					r = n - e,
					i = U(H(r), 1 / 3) * (0 > r ? -1 : 1),
					o = -n - e,
					a = U(H(o), 1 / 3) * (0 > o ? -1 : 1),
					s = i + a + .5;
				return 3 * (1 - s) * s * s + s * s * s
			},
			backIn: function(t) {
				var e = 1.70158;
				return t * t * ((e + 1) * t - e)
			},
			backOut: function(t) {
				t -= 1;
				var e = 1.70158;
				return t * t * ((e + 1) * t + e) + 1
			},
			elastic: function(t) {
				return t == !! t ? t : U(2, -10 * t) * q.sin(2 * (t - .075) * V / .3) + 1
			},
			bounce: function(t) {
				var e, n = 7.5625,
					r = 2.75;
				return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
			}
		};
		un.easeIn = un["ease-in"] = un["<"], un.easeOut = un["ease-out"] = un[">"], un.easeInOut = un["ease-in-out"] = un["<>"], un["back-in"] = un.backIn, un["back-out"] = un.backOut;
		var cn = [],
			ln = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
				setTimeout(t, 16)
		}, fn = function() {
				for (var t = +new Date, r = 0; r < cn.length; r++) {
					var i = cn[r];
					if (!i.el.removed && !i.paused) {
						var o, a, s = t - i.start,
							u = i.ms,
							c = i.easing,
							l = i.from,
							f = i.diff,
							h = i.to,
							p = (i.t, i.el),
							d = {}, g = {};
						if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * u, i.status = i.initstatus, delete i.initstatus, i.stop && cn.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / u)) / i.anim.top, !(0 > s))
							if (u > s) {
								var v = c(s / u);
								for (var m in l)
									if (l[S](m)) {
										switch (re[m]) {
											case z:
												o = +l[m] + v * u * f[m];
												break;
											case "colour":
												o = "rgb(" + [hn(K(l[m].r + v * u * f[m].r)), hn(K(l[m].g + v * u * f[m].g)), hn(K(l[m].b + v * u * f[m].b))].join(",") + ")";
												break;
											case "path":
												o = [];
												for (var x = 0, $ = l[m].length; $ > x; x++) {
													o[x] = [l[m][x][0]];
													for (var b = 1, w = l[m][x].length; w > b; b++) o[x][b] = +l[m][x][b] + v * u * f[m][x][b];
													o[x] = o[x].join(O)
												}
												o = o.join(O);
												break;
											case "transform":
												if (f[m].real)
													for (o = [], x = 0, $ = l[m].length; $ > x; x++)
														for (o[x] = [l[m][x][0]], b = 1, w = l[m][x].length; w > b; b++) o[x][b] = l[m][x][b] + v * u * f[m][x][b];
												else {
													var k = function(t) {
														return +l[m][t] + v * u * f[m][t]
													};
													o = [
														["m", k(0), k(1), k(2), k(3), k(4), k(5)]
													]
												}
												break;
											case "csv":
												if ("clip-rect" == m)
													for (o = [], x = 4; x--;) o[x] = +l[m][x] + v * u * f[m][x];
												break;
											default:
												var C = [][N](l[m]);
												for (o = [], x = p.paper.customAttributes[m].length; x--;) o[x] = +C[x] + v * u * f[m][x]
										}
										d[m] = o
									}
								p.attr(d),
								function(t, n, r) {
									setTimeout(function() {
										e("raphael.anim.frame." + t, n, r)
									})
								}(p.id, p, i.anim)
							} else {
								if (function(t, r, i) {
									setTimeout(function() {
										e("raphael.anim.frame." + r.id, r, i), e("raphael.anim.finish." + r.id, r, i), n.is(t, "function") && t.call(r)
									})
								}(i.callback, p, i.anim), p.attr(h), cn.splice(r--, 1), i.repeat > 1 && !i.next) {
									for (a in h) h[S](a) && (g[a] = i.totalOrigin[a]);
									i.el.attr(g), y(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
								}
								i.next && !i.stop && y(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
							}
					}
				}
				n.svg && p && p.paper && p.paper.safari(), cn.length && ln(fn)
			}, hn = function(t) {
				return t > 255 ? 255 : 0 > t ? 0 : t
			};
		Ke.animateWith = function(t, e, r, i, o, a) {
			var s = this;
			if (s.removed) return a && a.call(s), s;
			var u = r instanceof m ? r : n.animation(r, i, o, a);
			y(u, s, u.percents[0], null, s.attr());
			for (var c = 0, l = cn.length; l > c; c++)
				if (cn[c].anim == e && cn[c].el == t) {
					cn[l - 1].start = cn[c].start;
					break
				}
			return s
		}, Ke.onAnimation = function(t) {
			return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
		}, m.prototype.delay = function(t) {
			var e = new m(this.anim, this.ms);
			return e.times = this.times, e.del = +t || 0, e
		}, m.prototype.repeat = function(t) {
			var e = new m(this.anim, this.ms);
			return e.del = this.del, e.times = q.floor(F(t, 0)) || 1, e
		}, n.animation = function(t, e, r, i) {
			if (t instanceof m) return t;
			(n.is(r, "function") || !r) && (i = i || r || null, r = null), t = Object(t), e = +e || 0;
			var o, a, s = {};
			for (a in t) t[S](a) && Z(a) != a && Z(a) + "%" != a && (o = !0, s[a] = t[a]);
			return o ? (r && (s.easing = r), i && (s.callback = i), new m({
				100: s
			}, e)) : new m(t, e)
		}, Ke.animate = function(t, e, r, i) {
			var o = this;
			if (o.removed) return i && i.call(o), o;
			var a = t instanceof m ? t : n.animation(t, e, r, i);
			return y(a, o, a.percents[0], null, o.attr()), o
		}, Ke.setTime = function(t, e) {
			return t && null != e && this.status(t, I(e, t.ms) / t.ms), this
		}, Ke.status = function(t, e) {
			var n, r, i = [],
				o = 0;
			if (null != e) return y(t, this, -1, I(e, 1)), this;
			for (n = cn.length; n > o; o++)
				if (r = cn[o], r.el.id == this.id && (!t || r.anim == t)) {
					if (t) return r.status;
					i.push({
						anim: r.anim,
						status: r.status
					})
				}
			return t ? 0 : i
		}, Ke.pause = function(t) {
			for (var n = 0; n < cn.length; n++) cn[n].el.id != this.id || t && cn[n].anim != t || e("raphael.anim.pause." + this.id, this, cn[n].anim) !== !1 && (cn[n].paused = !0);
			return this
		}, Ke.resume = function(t) {
			for (var n = 0; n < cn.length; n++)
				if (cn[n].el.id == this.id && (!t || cn[n].anim == t)) {
					var r = cn[n];
					e("raphael.anim.resume." + this.id, this, r.anim) !== !1 && (delete r.paused, this.status(r.anim, r.status))
				}
			return this
		}, Ke.stop = function(t) {
			for (var n = 0; n < cn.length; n++) cn[n].el.id != this.id || t && cn[n].anim != t || e("raphael.anim.stop." + this.id, this, cn[n].anim) !== !1 && cn.splice(n--, 1);
			return this
		}, e.on("raphael.remove", x), e.on("raphael.clear", x), Ke.toString = function() {
			return "Raphaël’s object"
		};
		var pn = function(t) {
			if (this.items = [], this.length = 0, this.type = "set", t)
				for (var e = 0, n = t.length; n > e; e++)!t[e] || t[e].constructor != Ke.constructor && t[e].constructor != pn || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
		}, dn = pn.prototype;
		dn.push = function() {
			for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], !t || t.constructor != Ke.constructor && t.constructor != pn || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
			return this
		}, dn.pop = function() {
			return this.length && delete this[this.length--], this.items.pop()
		}, dn.forEach = function(t, e) {
			for (var n = 0, r = this.items.length; r > n; n++)
				if (t.call(e, this.items[n], n) === !1) return this;
			return this
		};
		for (var gn in Ke) Ke[S](gn) && (dn[gn] = function(t) {
			return function() {
				var e = arguments;
				return this.forEach(function(n) {
					n[t][A](n, e)
				})
			}
		}(gn));
		return dn.attr = function(t, e) {
			if (t && n.is(t, X) && n.is(t[0], "object"))
				for (var r = 0, i = t.length; i > r; r++) this.items[r].attr(t[r]);
			else
				for (var o = 0, a = this.items.length; a > o; o++) this.items[o].attr(t, e);
			return this
		}, dn.clear = function() {
			for (; this.length;) this.pop()
		}, dn.splice = function(t, e) {
			t = 0 > t ? F(this.length + t, 0) : t, e = F(0, I(this.length - t, e));
			var n, r = [],
				i = [],
				o = [];
			for (n = 2; n < arguments.length; n++) o.push(arguments[n]);
			for (n = 0; e > n; n++) i.push(this[t + n]);
			for (; n < this.length - t; n++) r.push(this[t + n]);
			var a = o.length;
			for (n = 0; n < a + r.length; n++) this.items[t + n] = this[t + n] = a > n ? o[n] : r[n - a];
			for (n = this.items.length = this.length -= e - a; this[n];) delete this[n++];
			return new pn(i)
		}, dn.exclude = function(t) {
			for (var e = 0, n = this.length; n > e; e++)
				if (this[e] == t) return this.splice(e, 1), !0
		}, dn.animate = function(t, e, r, i) {
			(n.is(r, "function") || !r) && (i = r || null);
			var o, a, s = this.items.length,
				u = s,
				c = this;
			if (!s) return this;
			i && (a = function() {
				!--s && i.call(c)
			}), r = n.is(r, W) ? r : a;
			var l = n.animation(t, e, r, a);
			for (o = this.items[--u].animate(l); u--;) this.items[u] && !this.items[u].removed && this.items[u].animateWith(o, l, l), this.items[u] && !this.items[u].removed || s--;
			return this
		}, dn.insertAfter = function(t) {
			for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
			return this
		}, dn.getBBox = function() {
			for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
				if (!this.items[i].removed) {
					var o = this.items[i].getBBox();
					t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
				}
			return t = I[A](0, t), e = I[A](0, e), n = F[A](0, n), r = F[A](0, r), {
				x: t,
				y: e,
				x2: n,
				y2: r,
				width: n - t,
				height: r - e
			}
		}, dn.clone = function(t) {
			t = this.paper.set();
			for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
			return t
		}, dn.toString = function() {
			return "Raphaël‘s set"
		}, dn.glow = function(t) {
			var e = this.paper.set();
			return this.forEach(function(n) {
				var r = n.glow(t);
				null != r && r.forEach(function(t) {
					e.push(t)
				})
			}), e
		}, dn.isPointInside = function(t, e) {
			var n = !1;
			return this.forEach(function(r) {
				return r.isPointInside(t, e) ? (console.log("runned"), n = !0, !1) : void 0
			}), n
		}, n.registerFont = function(t) {
			if (!t.face) return t;
			this.fonts = this.fonts || {};
			var e = {
				w: t.w,
				face: {},
				glyphs: {}
			}, n = t.face["font-family"];
			for (var r in t.face) t.face[S](r) && (e.face[r] = t.face[r]);
			if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) {
				e.face["units-per-em"] = te(t.face["units-per-em"], 10);
				for (var i in t.glyphs)
					if (t.glyphs[S](i)) {
						var o = t.glyphs[i];
						if (e.glyphs[i] = {
							w: o.w,
							k: {},
							d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function(t) {
								return {
									l: "L",
									c: "C",
									x: "z",
									t: "m",
									r: "l",
									v: "c"
								}[t] || "M"
							}) + "z"
						}, o.k)
							for (var a in o.k) o[S](a) && (e.glyphs[i].k[a] = o.k[a])
					}
			}
			return t
		}, b.getFont = function(t, e, r, i) {
			if (i = i || "normal", r = r || "normal", e = +e || {
				normal: 400,
				bold: 700,
				lighter: 300,
				bolder: 800
			}[e] || 400, n.fonts) {
				var o = n.fonts[t];
				if (!o) {
					var a = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, j) + "(\\s|$)", "i");
					for (var s in n.fonts)
						if (n.fonts[S](s) && a.test(s)) {
							o = n.fonts[s];
							break
						}
				}
				var u;
				if (o)
					for (var c = 0, l = o.length; l > c && (u = o[c], u.face["font-weight"] != e || u.face["font-style"] != r && u.face["font-style"] || u.face["font-stretch"] != i); c++);
				return u
			}
		}, b.print = function(t, e, r, i, o, a, s, u) {
			a = a || "middle", s = F(I(s || 0, 1), -1), u = F(I(u || 1, 3), 1);
			var c, l = P(r)[D](j),
				f = 0,
				h = 0,
				p = j;
			if (n.is(i, "string") && (i = this.getFont(i)), i) {
				c = (o || 16) / i.face["units-per-em"];
				for (var d = i.face.bbox[D](w), g = +d[0], v = d[3] - d[1], m = 0, y = +d[1] + ("baseline" == a ? v + +i.face.descent : v / 2), x = 0, $ = l.length; $ > x; x++) {
					if ("\n" == l[x]) f = 0, k = 0, h = 0, m += v * u;
					else {
						var b = h && i.glyphs[l[x - 1]] || {}, k = i.glyphs[l[x]];
						f += h ? (b.w || i.w) + (b.k && b.k[l[x]] || 0) + i.w * s : 0, h = 1
					}
					k && k.d && (p += n.transformPath(k.d, ["t", f * c, m * c, "s", c, c, g, y, "t", (t - g) / c, (e - y) / c]))
				}
			}
			return this.path(p).attr({
				fill: "#000",
				stroke: "none"
			})
		}, b.add = function(t) {
			if (n.is(t, "array"))
				for (var e, r = this.set(), i = 0, o = t.length; o > i; i++) e = t[i] || {}, k[S](e.type) && r.push(this[e.type]().attr(e));
			return r
		}, n.format = function(t, e) {
			var r = n.is(e, X) ? [0][N](e) : arguments;
			return t && n.is(t, W) && r.length - 1 && (t = t.replace(C, function(t, e) {
				return null == r[++e] ? j : r[e]
			})), t || j
		}, n.fullfill = function() {
			var t = /\{([^\}]+)\}/g,
				e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
				n = function(t, n, r) {
					var i = r;
					return n.replace(e, function(t, e, n, r, o) {
						e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
					}), i = (null == i || i == r ? t : i) + ""
				};
			return function(e, r) {
				return String(e).replace(t, function(t, e) {
					return n(t, e, r)
				})
			}
		}(), n.ninja = function() {
			return T.was ? _.win.Raphael = T.is : delete Raphael, n
		}, n.st = dn,
		function(t, e, r) {
			function i() {
				/in/.test(t.readyState) ? setTimeout(i, 9) : n.eve("raphael.DOMload")
			}
			null == t.readyState && t.addEventListener && (t.addEventListener(e, r = function() {
				t.removeEventListener(e, r, !1), t.readyState = "complete"
			}, !1), t.readyState = "loading"), i()
		}(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
			$ = !0
		}),
		function() {
			if (n.svg) {
				var t = "hasOwnProperty",
					e = String,
					r = parseFloat,
					i = parseInt,
					o = Math,
					a = o.max,
					s = o.abs,
					u = o.pow,
					c = /[, ]+/,
					l = n.eve,
					f = "",
					h = " ",
					p = "http://www.w3.org/1999/xlink",
					d = {
						block: "M5,0 0,2.5 5,5z",
						classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
						diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
						open: "M6,1 1,3.5 6,6",
						oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
					}, g = {};
				n.toString = function() {
					return "Your browser supports SVG.\nYou are running Raphaël " + this.version
				};
				var v = function(r, i) {
					if (i) {
						"string" == typeof r && (r = v(r));
						for (var o in i) i[t](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(p, o.substring(6), e(i[o])) : r.setAttribute(o, e(i[o])))
					} else r = n._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
					return r
				}, m = function(t, i) {
						var c = "linear",
							l = t.id + i,
							h = .5,
							p = .5,
							d = t.node,
							g = t.paper,
							m = d.style,
							y = n._g.doc.getElementById(l);
						if (!y) {
							if (i = e(i).replace(n._radial_gradient, function(t, e, n) {
								if (c = "radial", e && n) {
									h = r(e), p = r(n);
									var i = 2 * (p > .5) - 1;
									u(h - .5, 2) + u(p - .5, 2) > .25 && (p = o.sqrt(.25 - u(h - .5, 2)) * i + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * i)
								}
								return f
							}), i = i.split(/\s*\-\s*/), "linear" == c) {
								var x = i.shift();
								if (x = -r(x), isNaN(x)) return null;
								var $ = [0, 0, o.cos(n.rad(x)), o.sin(n.rad(x))],
									b = 1 / (a(s($[2]), s($[3])) || 1);
								$[2] *= b, $[3] *= b, $[2] < 0 && ($[0] = -$[2], $[2] = 0), $[3] < 0 && ($[1] = -$[3], $[3] = 0)
							}
							var w = n._parseDots(i);
							if (!w) return null;
							if (l = l.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && l != t.gradient.id && (g.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
								y = v(c + "Gradient", {
									id: l
								}), t.gradient = y, v(y, "radial" == c ? {
									fx: h,
									fy: p
								} : {
									x1: $[0],
									y1: $[1],
									x2: $[2],
									y2: $[3],
									gradientTransform: t.matrix.invert()
								}), g.defs.appendChild(y);
								for (var k = 0, C = w.length; C > k; k++) y.appendChild(v("stop", {
									offset: w[k].offset ? w[k].offset : k ? "100%" : "0%",
									"stop-color": w[k].color || "#fff"
								}))
							}
						}
						return v(d, {
							fill: "url(#" + l + ")",
							opacity: 1,
							"fill-opacity": 1
						}), m.fill = f, m.opacity = 1, m.fillOpacity = 1, 1
					}, y = function(t) {
						var e = t.getBBox(1);
						v(t.pattern, {
							patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
						})
					}, x = function(r, i, o) {
						if ("path" == r.type) {
							for (var a, s, u, c, l, h = e(i).toLowerCase().split("-"), p = r.paper, m = o ? "end" : "start", y = r.node, x = r.attrs, $ = x["stroke-width"], b = h.length, w = "classic", k = 3, C = 3, S = 5; b--;) switch (h[b]) {
								case "block":
								case "classic":
								case "oval":
								case "diamond":
								case "open":
								case "none":
									w = h[b];
									break;
								case "wide":
									C = 5;
									break;
								case "narrow":
									C = 2;
									break;
								case "long":
									k = 5;
									break;
								case "short":
									k = 2
							}
							if ("open" == w ? (k += 2, C += 2, S += 2, u = 1, c = o ? 4 : 1, l = {
								fill: "none",
								stroke: x.stroke
							}) : (c = u = k / 2, l = {
								fill: x.stroke,
								stroke: "none"
							}), r._.arrows ? o ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != w) {
								var _ = "raphael-marker-" + w,
									T = "raphael-marker-" + m + w + k + C;
								n._g.doc.getElementById(_) ? g[_]++ : (p.defs.appendChild(v(v("path"), {
									"stroke-linecap": "round",
									d: d[w],
									id: _
								})), g[_] = 1);
								var E, A = n._g.doc.getElementById(T);
								A ? (g[T]++, E = A.getElementsByTagName("use")[0]) : (A = v(v("marker"), {
									id: T,
									markerHeight: C,
									markerWidth: k,
									orient: "auto",
									refX: c,
									refY: C / 2
								}), E = v(v("use"), {
									"xlink:href": "#" + _,
									transform: (o ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : f) + "scale(" + k / S + "," + C / S + ")",
									"stroke-width": (1 / ((k / S + C / S) / 2)).toFixed(4)
								}), A.appendChild(E), p.defs.appendChild(A), g[T] = 1), v(E, l);
								var N = u * ("diamond" != w && "oval" != w);
								o ? (a = r._.arrows.startdx * $ || 0, s = n.getTotalLength(x.path) - N * $) : (a = N * $, s = n.getTotalLength(x.path) - (r._.arrows.enddx * $ || 0)), l = {}, l["marker-" + m] = "url(#" + T + ")", (s || a) && (l.d = n.getSubpath(x.path, a, s)), v(y, l), r._.arrows[m + "Path"] = _, r._.arrows[m + "Marker"] = T, r._.arrows[m + "dx"] = N, r._.arrows[m + "Type"] = w, r._.arrows[m + "String"] = i
							} else o ? (a = r._.arrows.startdx * $ || 0, s = n.getTotalLength(x.path) - a) : (a = 0, s = n.getTotalLength(x.path) - (r._.arrows.enddx * $ || 0)), r._.arrows[m + "Path"] && v(y, {
								d: n.getSubpath(x.path, a, s)
							}), delete r._.arrows[m + "Path"], delete r._.arrows[m + "Marker"], delete r._.arrows[m + "dx"], delete r._.arrows[m + "Type"], delete r._.arrows[m + "String"];
							for (l in g)
								if (g[t](l) && !g[l]) {
									var M = n._g.doc.getElementById(l);
									M && M.parentNode.removeChild(M)
								}
						}
					}, $ = {
						"": [0],
						none: [0],
						"-": [3, 1],
						".": [1, 1],
						"-.": [3, 1, 1, 1],
						"-..": [3, 1, 1, 1, 1, 1],
						". ": [1, 3],
						"- ": [4, 3],
						"--": [8, 3],
						"- .": [4, 3, 1, 3],
						"--.": [8, 3, 1, 3],
						"--..": [8, 3, 1, 3, 1, 3]
					}, b = function(t, n, r) {
						if (n = $[e(n).toLowerCase()]) {
							for (var i = t.attrs["stroke-width"] || "1", o = {
									round: i,
									square: i,
									butt: 0
								}[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, a = [], s = n.length; s--;) a[s] = n[s] * i + (s % 2 ? 1 : -1) * o;
							v(t.node, {
								"stroke-dasharray": a.join(",")
							})
						}
					}, w = function(r, o) {
						var u = r.node,
							l = r.attrs,
							h = u.style.visibility;
						u.style.visibility = "hidden";
						for (var d in o)
							if (o[t](d)) {
								if (!n._availableAttrs[t](d)) continue;
								var g = o[d];
								switch (l[d] = g, d) {
									case "blur":
										r.blur(g);
										break;
									case "href":
									case "title":
										var $ = v("title"),
											w = n._g.doc.createTextNode(g);
										$.appendChild(w), u.appendChild($);
										break;
									case "target":
										var k = u.parentNode;
										if ("a" != k.tagName.toLowerCase()) {
											var $ = v("a");
											k.insertBefore($, u), $.appendChild(u), k = $
										}
										"target" == d ? k.setAttributeNS(p, "show", "blank" == g ? "new" : g) : k.setAttributeNS(p, d, g);
										break;
									case "cursor":
										u.style.cursor = g;
										break;
									case "transform":
										r.transform(g);
										break;
									case "arrow-start":
										x(r, g);
										break;
									case "arrow-end":
										x(r, g, 1);
										break;
									case "clip-rect":
										var S = e(g).split(c);
										if (4 == S.length) {
											r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
											var _ = v("clipPath"),
												T = v("rect");
											_.id = n.createUUID(), v(T, {
												x: S[0],
												y: S[1],
												width: S[2],
												height: S[3]
											}), _.appendChild(T), r.paper.defs.appendChild(_), v(u, {
												"clip-path": "url(#" + _.id + ")"
											}), r.clip = T
										}
										if (!g) {
											var E = u.getAttribute("clip-path");
											if (E) {
												var A = n._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, f));
												A && A.parentNode.removeChild(A), v(u, {
													"clip-path": f
												}), delete r.clip
											}
										}
										break;
									case "path":
										"path" == r.type && (v(u, {
											d: g ? l.path = n._pathToAbsolute(g) : "M0,0"
										}), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
										break;
									case "width":
										if (u.setAttribute(d, g), r._.dirty = 1, !l.fx) break;
										d = "x", g = l.x;
									case "x":
										l.fx && (g = -l.x - (l.width || 0));
									case "rx":
										if ("rx" == d && "rect" == r.type) break;
									case "cx":
										u.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
										break;
									case "height":
										if (u.setAttribute(d, g), r._.dirty = 1, !l.fy) break;
										d = "y", g = l.y;
									case "y":
										l.fy && (g = -l.y - (l.height || 0));
									case "ry":
										if ("ry" == d && "rect" == r.type) break;
									case "cy":
										u.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
										break;
									case "r":
										"rect" == r.type ? v(u, {
											rx: g,
											ry: g
										}) : u.setAttribute(d, g), r._.dirty = 1;
										break;
									case "src":
										"image" == r.type && u.setAttributeNS(p, "href", g);
										break;
									case "stroke-width":
										(1 != r._.sx || 1 != r._.sy) && (g /= a(s(r._.sx), s(r._.sy)) || 1), r.paper._vbSize && (g *= r.paper._vbSize), u.setAttribute(d, g), l["stroke-dasharray"] && b(r, l["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
										break;
									case "stroke-dasharray":
										b(r, g, o);
										break;
									case "fill":
										var N = e(g).match(n._ISURL);
										if (N) {
											_ = v("pattern");
											var M = v("image");
											_.id = n.createUUID(), v(_, {
												x: 0,
												y: 0,
												patternUnits: "userSpaceOnUse",
												height: 1,
												width: 1
											}), v(M, {
												x: 0,
												y: 0,
												"xlink:href": N[1]
											}), _.appendChild(M),
											function(t) {
												n._preload(N[1], function() {
													var e = this.offsetWidth,
														n = this.offsetHeight;
													v(t, {
														width: e,
														height: n
													}), v(M, {
														width: e,
														height: n
													}), r.paper.safari()
												})
											}(_), r.paper.defs.appendChild(_), v(u, {
												fill: "url(#" + _.id + ")"
											}), r.pattern = _, r.pattern && y(r);
											break
										}
										var j = n.getRGB(g);
										if (j.error) {
											if (("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g)) {
												if ("opacity" in l || "fill-opacity" in l) {
													var O = n._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g, f));
													if (O) {
														var P = O.getElementsByTagName("stop");
														v(P[P.length - 1], {
															"stop-opacity": ("opacity" in l ? l.opacity : 1) * ("fill-opacity" in l ? l["fill-opacity"] : 1)
														})
													}
												}
												l.gradient = g, l.fill = "none";
												break
											}
										} else delete o.gradient, delete l.gradient, !n.is(l.opacity, "undefined") && n.is(o.opacity, "undefined") && v(u, {
											opacity: l.opacity
										}), !n.is(l["fill-opacity"], "undefined") && n.is(o["fill-opacity"], "undefined") && v(u, {
											"fill-opacity": l["fill-opacity"]
										});
										j[t]("opacity") && v(u, {
											"fill-opacity": j.opacity > 1 ? j.opacity / 100 : j.opacity
										});
									case "stroke":
										j = n.getRGB(g), u.setAttribute(d, j.hex), "stroke" == d && j[t]("opacity") && v(u, {
											"stroke-opacity": j.opacity > 1 ? j.opacity / 100 : j.opacity
										}), "stroke" == d && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
										break;
									case "gradient":
										("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g);
										break;
									case "opacity":
										l.gradient && !l[t]("stroke-opacity") && v(u, {
											"stroke-opacity": g > 1 ? g / 100 : g
										});
									case "fill-opacity":
										if (l.gradient) {
											O = n._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g, f)), O && (P = O.getElementsByTagName("stop"), v(P[P.length - 1], {
												"stop-opacity": g
											}));
											break
										}
									default:
										"font-size" == d && (g = i(g, 10) + "px");
										var D = d.replace(/(\-.)/g, function(t) {
											return t.substring(1).toUpperCase()
										});
										u.style[D] = g, r._.dirty = 1, u.setAttribute(d, g)
								}
							}
						C(r, o), u.style.visibility = h
					}, k = 1.2,
					C = function(r, o) {
						if ("text" == r.type && (o[t]("text") || o[t]("font") || o[t]("font-size") || o[t]("x") || o[t]("y"))) {
							var a = r.attrs,
								s = r.node,
								u = s.firstChild ? i(n._g.doc.defaultView.getComputedStyle(s.firstChild, f).getPropertyValue("font-size"), 10) : 10;
							if (o[t]("text")) {
								for (a.text = o.text; s.firstChild;) s.removeChild(s.firstChild);
								for (var c, l = e(o.text).split("\n"), h = [], p = 0, d = l.length; d > p; p++) c = v("tspan"), p && v(c, {
									dy: u * k,
									x: a.x
								}), c.appendChild(n._g.doc.createTextNode(l[p])), s.appendChild(c), h[p] = c
							} else
								for (h = s.getElementsByTagName("tspan"), p = 0, d = h.length; d > p; p++) p ? v(h[p], {
									dy: u * k,
									x: a.x
								}) : v(h[0], {
									dy: 0
								});
							v(s, {
								x: a.x,
								y: a.y
							}), r._.dirty = 1;
							var g = r._getBBox(),
								m = a.y - (g.y + g.height / 2);
							m && n.is(m, "finite") && v(h[0], {
								dy: m
							})
						}
					}, S = function(t, e) {
						this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.matrix = n.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
							transform: [],
							sx: 1,
							sy: 1,
							deg: 0,
							dx: 0,
							dy: 0,
							dirty: 1
						}, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
					}, _ = n.el;
				S.prototype = _, _.constructor = S, n._engine.path = function(t, e) {
					var n = v("path");
					e.canvas && e.canvas.appendChild(n);
					var r = new S(n, e);
					return r.type = "path", w(r, {
						fill: "none",
						stroke: "#000",
						path: t
					}), r
				}, _.rotate = function(t, n, i) {
					if (this.removed) return this;
					if (t = e(t).split(c), t.length - 1 && (n = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (n = i), null == n || null == i) {
						var o = this.getBBox(1);
						n = o.x + o.width / 2, i = o.y + o.height / 2
					}
					return this.transform(this._.transform.concat([
						["r", t, n, i]
					])), this
				}, _.scale = function(t, n, i, o) {
					if (this.removed) return this;
					if (t = e(t).split(c), t.length - 1 && (n = r(t[1]), i = r(t[2]), o = r(t[3])), t = r(t[0]), null == n && (n = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
					return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
						["s", t, n, i, o]
					])), this
				}, _.translate = function(t, n) {
					return this.removed ? this : (t = e(t).split(c), t.length - 1 && (n = r(t[1])), t = r(t[0]) || 0, n = +n || 0, this.transform(this._.transform.concat([
						["t", t, n]
					])), this)
				}, _.transform = function(e) {
					var r = this._;
					if (null == e) return r.transform;
					if (n._extractTransform(this, e), this.clip && v(this.clip, {
						transform: this.matrix.invert()
					}), this.pattern && y(this), this.node && v(this.node, {
						transform: this.matrix
					}), 1 != r.sx || 1 != r.sy) {
						var i = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
						this.attr({
							"stroke-width": i
						})
					}
					return this
				}, _.hide = function() {
					return !this.removed && this.paper.safari(this.node.style.display = "none"), this
				}, _.show = function() {
					return !this.removed && this.paper.safari(this.node.style.display = ""), this
				}, _.remove = function() {
					if (!this.removed && this.node.parentNode) {
						var t = this.paper;
						t.__set__ && t.__set__.exclude(this), l.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), n._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
						for (var e in this) this[e] = "function" == typeof this[e] ? n._removedFactory(e) : null;
						this.removed = !0
					}
				}, _._getBBox = function() {
					if ("none" == this.node.style.display) {
						this.show();
						var t = !0
					}
					var e = {};
					try {
						e = this.node.getBBox()
					} catch (n) {} finally {
						e = e || {}
					}
					return t && this.hide(), e
				}, _.attr = function(e, r) {
					if (this.removed) return this;
					if (null == e) {
						var i = {};
						for (var o in this.attrs) this.attrs[t](o) && (i[o] = this.attrs[o]);
						return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
					}
					if (null == r && n.is(e, "string")) {
						if ("fill" == e && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
						if ("transform" == e) return this._.transform;
						for (var a = e.split(c), s = {}, u = 0, f = a.length; f > u; u++) e = a[u], s[e] = e in this.attrs ? this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : n._availableAttrs[e];
						return f - 1 ? s : s[a[0]]
					}
					if (null == r && n.is(e, "array")) {
						for (s = {}, u = 0, f = e.length; f > u; u++) s[e[u]] = this.attr(e[u]);
						return s
					}
					if (null != r) {
						var h = {};
						h[e] = r
					} else null != e && n.is(e, "object") && (h = e);
					for (var p in h) l("raphael.attr." + p + "." + this.id, this, h[p]);
					for (p in this.paper.customAttributes)
						if (this.paper.customAttributes[t](p) && h[t](p) && n.is(this.paper.customAttributes[p], "function")) {
							var d = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
							this.attrs[p] = h[p];
							for (var g in d) d[t](g) && (h[g] = d[g])
						}
					return w(this, h), this
				}, _.toFront = function() {
					if (this.removed) return this;
					"a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
					var t = this.paper;
					return t.top != this && n._tofront(this, t), this
				}, _.toBack = function() {
					if (this.removed) return this;
					var t = this.node.parentNode;
					"a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), n._toback(this, this.paper);
					this.paper;
					return this
				}, _.insertAfter = function(t) {
					if (this.removed) return this;
					var e = t.node || t[t.length - 1].node;
					return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), n._insertafter(this, t, this.paper), this
				}, _.insertBefore = function(t) {
					if (this.removed) return this;
					var e = t.node || t[0].node;
					return e.parentNode.insertBefore(this.node, e), n._insertbefore(this, t, this.paper), this
				}, _.blur = function(t) {
					var e = this;
					if (0 !== +t) {
						var r = v("filter"),
							i = v("feGaussianBlur");
						e.attrs.blur = t, r.id = n.createUUID(), v(i, {
							stdDeviation: +t || 1.5
						}), r.appendChild(i), e.paper.defs.appendChild(r), e._blur = r, v(e.node, {
							filter: "url(#" + r.id + ")"
						})
					} else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
					return e
				}, n._engine.circle = function(t, e, n, r) {
					var i = v("circle");
					t.canvas && t.canvas.appendChild(i);
					var o = new S(i, t);
					return o.attrs = {
						cx: e,
						cy: n,
						r: r,
						fill: "none",
						stroke: "#000"
					}, o.type = "circle", v(i, o.attrs), o
				}, n._engine.rect = function(t, e, n, r, i, o) {
					var a = v("rect");
					t.canvas && t.canvas.appendChild(a);
					var s = new S(a, t);
					return s.attrs = {
						x: e,
						y: n,
						width: r,
						height: i,
						r: o || 0,
						rx: o || 0,
						ry: o || 0,
						fill: "none",
						stroke: "#000"
					}, s.type = "rect", v(a, s.attrs), s
				}, n._engine.ellipse = function(t, e, n, r, i) {
					var o = v("ellipse");
					t.canvas && t.canvas.appendChild(o);
					var a = new S(o, t);
					return a.attrs = {
						cx: e,
						cy: n,
						rx: r,
						ry: i,
						fill: "none",
						stroke: "#000"
					}, a.type = "ellipse", v(o, a.attrs), a
				}, n._engine.image = function(t, e, n, r, i, o) {
					var a = v("image");
					v(a, {
						x: n,
						y: r,
						width: i,
						height: o,
						preserveAspectRatio: "none"
					}), a.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(a);
					var s = new S(a, t);
					return s.attrs = {
						x: n,
						y: r,
						width: i,
						height: o,
						src: e
					}, s.type = "image", s
				}, n._engine.text = function(t, e, r, i) {
					var o = v("text");
					t.canvas && t.canvas.appendChild(o);
					var a = new S(o, t);
					return a.attrs = {
						x: e,
						y: r,
						"text-anchor": "middle",
						text: i,
						font: n._availableAttrs.font,
						stroke: "none",
						fill: "#000"
					}, a.type = "text", w(a, a.attrs), a
				}, n._engine.setSize = function(t, e) {
					return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
				}, n._engine.create = function() {
					var t = n._getContainer.apply(0, arguments),
						e = t && t.container,
						r = t.x,
						i = t.y,
						o = t.width,
						a = t.height;
					if (!e) throw new Error("SVG container not found.");
					var s, u = v("svg"),
						c = "overflow:hidden;";
					return r = r || 0, i = i || 0, o = o || 512, a = a || 342, v(u, {
						height: a,
						version: 1.1,
						width: o,
						xmlns: "http://www.w3.org/2000/svg"
					}), 1 == e ? (u.style.cssText = c + "position:absolute;left:" + r + "px;top:" + i + "px", n._g.doc.body.appendChild(u), s = 1) : (u.style.cssText = c + "position:relative", e.firstChild ? e.insertBefore(u, e.firstChild) : e.appendChild(u)), e = new n._Paper, e.width = o, e.height = a, e.canvas = u, e.clear(), e._left = e._top = 0, s && (e.renderfix = function() {}), e.renderfix(), e
				}, n._engine.setViewBox = function(t, e, n, r, i) {
					l("raphael.setViewBox", this, this._viewBox, [t, e, n, r, i]);
					var o, s, u = a(n / this.width, r / this.height),
						c = this.top,
						f = i ? "meet" : "xMinYMin";
					for (null == t ? (this._vbSize && (u = 1), delete this._vbSize, o = "0 0 " + this.width + h + this.height) : (this._vbSize = u, o = t + h + e + h + n + h + r), v(this.canvas, {
						viewBox: o,
						preserveAspectRatio: f
					}); u && c;) s = "stroke-width" in c.attrs ? c.attrs["stroke-width"] : 1, c.attr({
						"stroke-width": s
					}), c._.dirty = 1, c._.dirtyT = 1, c = c.prev;
					return this._viewBox = [t, e, n, r, !! i], this
				}, n.prototype.renderfix = function() {
					var t, e = this.canvas,
						n = e.style;
					try {
						t = e.getScreenCTM() || e.createSVGMatrix()
					} catch (r) {
						t = e.createSVGMatrix()
					}
					var i = -t.e % 1,
						o = -t.f % 1;
					(i || o) && (i && (this._left = (this._left + i) % 1, n.left = this._left + "px"), o && (this._top = (this._top + o) % 1, n.top = this._top + "px"))
				}, n.prototype.clear = function() {
					n.eve("raphael.clear", this);
					for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
					this.bottom = this.top = null, (this.desc = v("desc")).appendChild(n._g.doc.createTextNode("Created with Raphaël " + n.version)), t.appendChild(this.desc), t.appendChild(this.defs = v("defs"))
				}, n.prototype.remove = function() {
					l("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
					for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null
				};
				var T = n.st;
				for (var E in _) _[t](E) && !T[t](E) && (T[E] = function(t) {
					return function() {
						var e = arguments;
						return this.forEach(function(n) {
							n[t].apply(n, e)
						})
					}
				}(E))
			}
		}(),
		function() {
			if (n.vml) {
				var t = "hasOwnProperty",
					e = String,
					r = parseFloat,
					i = Math,
					o = i.round,
					a = i.max,
					s = i.min,
					u = i.abs,
					c = "fill",
					l = /[, ]+/,
					f = n.eve,
					h = " progid:DXImageTransform.Microsoft",
					p = " ",
					d = "",
					g = {
						M: "m",
						L: "l",
						C: "c",
						Z: "x",
						m: "t",
						l: "r",
						c: "v",
						z: "x"
					}, v = /([clmz]),?([^clmz]*)/gi,
					m = / progid:\S+Blur\([^\)]+\)/g,
					y = /-?[^,\s-]+/g,
					x = "position:absolute;left:0;top:0;width:1px;height:1px",
					$ = 21600,
					b = {
						path: 1,
						rect: 1,
						image: 1
					}, w = {
						circle: 1,
						ellipse: 1
					}, k = function(t) {
						var r = /[ahqstv]/gi,
							i = n._pathToAbsolute;
						if (e(t).match(r) && (i = n._path2curve), r = /[clmz]/g, i == n._pathToAbsolute && !e(t).match(r)) {
							var a = e(t).replace(v, function(t, e, n) {
								var r = [],
									i = "m" == e.toLowerCase(),
									a = g[e];
								return n.replace(y, function(t) {
									i && 2 == r.length && (a += r + g["m" == e ? "l" : "L"], r = []), r.push(o(t * $))
								}), a + r
							});
							return a
						}
						var s, u, c = i(t);
						a = [];
						for (var l = 0, f = c.length; f > l; l++) {
							s = c[l], u = c[l][0].toLowerCase(), "z" == u && (u = "x");
							for (var h = 1, m = s.length; m > h; h++) u += o(s[h] * $) + (h != m - 1 ? "," : d);
							a.push(u)
						}
						return a.join(p)
					}, C = function(t, e, r) {
						var i = n.matrix();
						return i.rotate(-t, .5, .5), {
							dx: i.x(e, r),
							dy: i.y(e, r)
						}
					}, S = function(t, e, n, r, i, o) {
						var a = t._,
							s = t.matrix,
							l = a.fillpos,
							f = t.node,
							h = f.style,
							d = 1,
							g = "",
							v = $ / e,
							m = $ / n;
						if (h.visibility = "hidden", e && n) {
							if (f.coordsize = u(v) + p + u(m), h.rotation = o * (0 > e * n ? -1 : 1), o) {
								var y = C(o, r, i);
								r = y.dx, i = y.dy
							}
							if (0 > e && (g += "x"), 0 > n && (g += " y") && (d = -1), h.flip = g, f.coordorigin = r * -v + p + i * -m, l || a.fillsize) {
								var x = f.getElementsByTagName(c);
								x = x && x[0], f.removeChild(x), l && (y = C(o, s.x(l[0], l[1]), s.y(l[0], l[1])), x.position = y.dx * d + p + y.dy * d), a.fillsize && (x.size = a.fillsize[0] * u(e) + p + a.fillsize[1] * u(n)), f.appendChild(x)
							}
							h.visibility = "visible"
						}
					};
				n.toString = function() {
					return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
				};
				var _ = function(t, n, r) {
					for (var i = e(n).toLowerCase().split("-"), o = r ? "end" : "start", a = i.length, s = "classic", u = "medium", c = "medium"; a--;) switch (i[a]) {
						case "block":
						case "classic":
						case "oval":
						case "diamond":
						case "open":
						case "none":
							s = i[a];
							break;
						case "wide":
						case "narrow":
							c = i[a];
							break;
						case "long":
						case "short":
							u = i[a]
					}
					var l = t.node.getElementsByTagName("stroke")[0];
					l[o + "arrow"] = s, l[o + "arrowlength"] = u, l[o + "arrowwidth"] = c
				}, T = function(i, u) {
						i.attrs = i.attrs || {};
						var f = i.node,
							h = i.attrs,
							g = f.style,
							v = b[i.type] && (u.x != h.x || u.y != h.y || u.width != h.width || u.height != h.height || u.cx != h.cx || u.cy != h.cy || u.rx != h.rx || u.ry != h.ry || u.r != h.r),
							m = w[i.type] && (h.cx != u.cx || h.cy != u.cy || h.r != u.r || h.rx != u.rx || h.ry != u.ry),
							y = i;
						for (var x in u) u[t](x) && (h[x] = u[x]);
						if (v && (h.path = n._getPath[i.type](i), i._.dirty = 1), u.href && (f.href = u.href), u.title && (f.title = u.title), u.target && (f.target = u.target), u.cursor && (g.cursor = u.cursor), "blur" in u && i.blur(u.blur), (u.path && "path" == i.type || v) && (f.path = k(~e(h.path).toLowerCase().indexOf("r") ? n._pathToAbsolute(h.path) : h.path), "image" == i.type && (i._.fillpos = [h.x, h.y], i._.fillsize = [h.width, h.height], S(i, 1, 1, 0, 0, 0))), "transform" in u && i.transform(u.transform), m) {
							var C = +h.cx,
								T = +h.cy,
								A = +h.rx || +h.r || 0,
								N = +h.ry || +h.r || 0;
							f.path = n.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((C - A) * $), o((T - N) * $), o((C + A) * $), o((T + N) * $), o(C * $)), i._.dirty = 1
						}
						if ("clip-rect" in u) {
							var j = e(u["clip-rect"]).split(l);
							if (4 == j.length) {
								j[2] = +j[2] + +j[0], j[3] = +j[3] + +j[1];
								var O = f.clipRect || n._g.doc.createElement("div"),
									P = O.style;
								P.clip = n.format("rect({1}px {2}px {3}px {0}px)", j), f.clipRect || (P.position = "absolute", P.top = 0, P.left = 0, P.width = i.paper.width + "px", P.height = i.paper.height + "px", f.parentNode.insertBefore(O, f), O.appendChild(f), f.clipRect = O)
							}
							u["clip-rect"] || f.clipRect && (f.clipRect.style.clip = "auto")
						}
						if (i.textpath) {
							var D = i.textpath.style;
							u.font && (D.font = u.font), u["font-family"] && (D.fontFamily = '"' + u["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), u["font-size"] && (D.fontSize = u["font-size"]), u["font-weight"] && (D.fontWeight = u["font-weight"]), u["font-style"] && (D.fontStyle = u["font-style"])
						}
						if ("arrow-start" in u && _(y, u["arrow-start"]), "arrow-end" in u && _(y, u["arrow-end"], 1), null != u.opacity || null != u["stroke-width"] || null != u.fill || null != u.src || null != u.stroke || null != u["stroke-width"] || null != u["stroke-opacity"] || null != u["fill-opacity"] || null != u["stroke-dasharray"] || null != u["stroke-miterlimit"] || null != u["stroke-linejoin"] || null != u["stroke-linecap"]) {
							var L = f.getElementsByTagName(c),
								R = !1;
							if (L = L && L[0], !L && (R = L = M(c)), "image" == i.type && u.src && (L.src = u.src), u.fill && (L.on = !0), (null == L.on || "none" == u.fill || null === u.fill) && (L.on = !1), L.on && u.fill) {
								var B = e(u.fill).match(n._ISURL);
								if (B) {
									L.parentNode == f && f.removeChild(L), L.rotate = !0, L.src = B[1], L.type = "tile";
									var q = i.getBBox(1);
									L.position = q.x + p + q.y, i._.fillpos = [q.x, q.y], n._preload(B[1], function() {
										i._.fillsize = [this.offsetWidth, this.offsetHeight]
									})
								} else L.color = n.getRGB(u.fill).hex, L.src = d, L.type = "solid", n.getRGB(u.fill).error && (y.type in {
									circle: 1,
									ellipse: 1
								} || "r" != e(u.fill).charAt()) && E(y, u.fill, L) && (h.fill = "none", h.gradient = u.fill, L.rotate = !1)
							}
							if ("fill-opacity" in u || "opacity" in u) {
								var F = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+n.getRGB(u.fill).o + 1 || 2) - 1);
								F = s(a(F, 0), 1), L.opacity = F, L.src && (L.color = "none")
							}
							f.appendChild(L);
							var I = f.getElementsByTagName("stroke") && f.getElementsByTagName("stroke")[0],
								H = !1;
							!I && (H = I = M("stroke")), (u.stroke && "none" != u.stroke || u["stroke-width"] || null != u["stroke-opacity"] || u["stroke-dasharray"] || u["stroke-miterlimit"] || u["stroke-linejoin"] || u["stroke-linecap"]) && (I.on = !0), ("none" == u.stroke || null === u.stroke || null == I.on || 0 == u.stroke || 0 == u["stroke-width"]) && (I.on = !1);
							var U = n.getRGB(u.stroke);
							I.on && u.stroke && (I.color = U.hex), F = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
							var V = .75 * (r(u["stroke-width"]) || 1);
							if (F = s(a(F, 0), 1), null == u["stroke-width"] && (V = h["stroke-width"]), u["stroke-width"] && (I.weight = V), V && 1 > V && (F *= V) && (I.weight = 1), I.opacity = F, u["stroke-linejoin"] && (I.joinstyle = u["stroke-linejoin"] || "miter"), I.miterlimit = u["stroke-miterlimit"] || 8, u["stroke-linecap"] && (I.endcap = "butt" == u["stroke-linecap"] ? "flat" : "square" == u["stroke-linecap"] ? "square" : "round"), u["stroke-dasharray"]) {
								var z = {
									"-": "shortdash",
									".": "shortdot",
									"-.": "shortdashdot",
									"-..": "shortdashdotdot",
									". ": "dot",
									"- ": "dash",
									"--": "longdash",
									"- .": "dashdot",
									"--.": "longdashdot",
									"--..": "longdashdotdot"
								};
								I.dashstyle = z[t](u["stroke-dasharray"]) ? z[u["stroke-dasharray"]] : d
							}
							H && f.appendChild(I)
						}
						if ("text" == y.type) {
							y.paper.canvas.style.display = d;
							var W = y.paper.span,
								X = 100,
								G = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
							g = W.style, h.font && (g.font = h.font), h["font-family"] && (g.fontFamily = h["font-family"]), h["font-weight"] && (g.fontWeight = h["font-weight"]), h["font-style"] && (g.fontStyle = h["font-style"]), G = r(h["font-size"] || G && G[0]) || 10, g.fontSize = G * X + "px", y.textpath.string && (W.innerHTML = e(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
							var Y = W.getBoundingClientRect();
							y.W = h.w = (Y.right - Y.left) / X, y.H = h.h = (Y.bottom - Y.top) / X, y.X = h.x, y.Y = h.y + y.H / 2, ("x" in u || "y" in u) && (y.path.v = n.format("m{0},{1}l{2},{1}", o(h.x * $), o(h.y * $), o(h.x * $) + 1));
							for (var Q = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], J = 0, K = Q.length; K > J; J++)
								if (Q[J] in u) {
									y._.dirty = 1;
									break
								}
							switch (h["text-anchor"]) {
								case "start":
									y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
									break;
								case "end":
									y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
									break;
								default:
									y.textpath.style["v-text-align"] = "center", y.bbx = 0
							}
							y.textpath.style["v-text-kern"] = !0
						}
					}, E = function(t, o, a) {
						t.attrs = t.attrs || {};
						var s = (t.attrs, Math.pow),
							u = "linear",
							c = ".5 .5";
						if (t.attrs.gradient = o, o = e(o).replace(n._radial_gradient, function(t, e, n) {
							return u = "radial", e && n && (e = r(e), n = r(n), s(e - .5, 2) + s(n - .5, 2) > .25 && (n = i.sqrt(.25 - s(e - .5, 2)) * (2 * (n > .5) - 1) + .5), c = e + p + n), d
						}), o = o.split(/\s*\-\s*/), "linear" == u) {
							var l = o.shift();
							if (l = -r(l), isNaN(l)) return null
						}
						var f = n._parseDots(o);
						if (!f) return null;
						if (t = t.shape || t.node, f.length) {
							t.removeChild(a), a.on = !0, a.method = "none", a.color = f[0].color, a.color2 = f[f.length - 1].color;
							for (var h = [], g = 0, v = f.length; v > g; g++) f[g].offset && h.push(f[g].offset + p + f[g].color);
							a.colors = h.length ? h.join() : "0% " + a.color, "radial" == u ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = c, a.angle = 0) : (a.type = "gradient", a.angle = (270 - l) % 360), t.appendChild(a)
						}
						return 1
					}, A = function(t, e) {
						this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = n.matrix(), this._ = {
							transform: [],
							sx: 1,
							sy: 1,
							dx: 0,
							dy: 0,
							deg: 0,
							dirty: 1,
							dirtyT: 1
						}, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
					}, N = n.el;
				A.prototype = N, N.constructor = A, N.transform = function(t) {
					if (null == t) return this._.transform;
					var r, i = this.paper._viewBoxShift,
						o = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
					i && (r = t = e(t).replace(/\.{3}|\u2026/g, this._.transform || d)), n._extractTransform(this, o + t);
					var a, s = this.matrix.clone(),
						u = this.skew,
						c = this.node,
						l = ~e(this.attrs.fill).indexOf("-"),
						f = !e(this.attrs.fill).indexOf("url(");
					if (s.translate(1, 1), f || l || "image" == this.type)
						if (u.matrix = "1 0 0 1", u.offset = "0 0", a = s.split(), l && a.noRotation || !a.isSimple) {
							c.style.filter = s.toFilter();
							var h = this.getBBox(),
								g = this.getBBox(1),
								v = h.x - g.x,
								m = h.y - g.y;
							c.coordorigin = v * -$ + p + m * -$, S(this, 1, 1, v, m, 0)
						} else c.style.filter = d, S(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate);
						else c.style.filter = d, u.matrix = e(s), u.offset = s.offset();
					return r && (this._.transform = r), this
				}, N.rotate = function(t, n, i) {
					if (this.removed) return this;
					if (null != t) {
						if (t = e(t).split(l), t.length - 1 && (n = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (n = i), null == n || null == i) {
							var o = this.getBBox(1);
							n = o.x + o.width / 2, i = o.y + o.height / 2
						}
						return this._.dirtyT = 1, this.transform(this._.transform.concat([
							["r", t, n, i]
						])), this
					}
				}, N.translate = function(t, n) {
					return this.removed ? this : (t = e(t).split(l), t.length - 1 && (n = r(t[1])), t = r(t[0]) || 0, n = +n || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += n), this.transform(this._.transform.concat([
						["t", t, n]
					])), this)
				}, N.scale = function(t, n, i, o) {
					if (this.removed) return this;
					if (t = e(t).split(l), t.length - 1 && (n = r(t[1]), i = r(t[2]), o = r(t[3]), isNaN(i) && (i = null), isNaN(o) && (o = null)), t = r(t[0]), null == n && (n = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
					return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
						["s", t, n, i, o]
					])), this._.dirtyT = 1, this
				}, N.hide = function() {
					return !this.removed && (this.node.style.display = "none"), this
				}, N.show = function() {
					return !this.removed && (this.node.style.display = d), this
				}, N._getBBox = function() {
					return this.removed ? {} : {
						x: this.X + (this.bbx || 0) - this.W / 2,
						y: this.Y - this.H,
						width: this.W,
						height: this.H
					}
				}, N.remove = function() {
					if (!this.removed && this.node.parentNode) {
						this.paper.__set__ && this.paper.__set__.exclude(this), n.eve.unbind("raphael.*.*." + this.id), n._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
						for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
						this.removed = !0
					}
				}, N.attr = function(e, r) {
					if (this.removed) return this;
					if (null == e) {
						var i = {};
						for (var o in this.attrs) this.attrs[t](o) && (i[o] = this.attrs[o]);
						return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
					}
					if (null == r && n.is(e, "string")) {
						if (e == c && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
						for (var a = e.split(l), s = {}, u = 0, h = a.length; h > u; u++) e = a[u], s[e] = e in this.attrs ? this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : n._availableAttrs[e];
						return h - 1 ? s : s[a[0]]
					}
					if (this.attrs && null == r && n.is(e, "array")) {
						for (s = {}, u = 0, h = e.length; h > u; u++) s[e[u]] = this.attr(e[u]);
						return s
					}
					var p;
					null != r && (p = {}, p[e] = r), null == r && n.is(e, "object") && (p = e);
					for (var d in p) f("raphael.attr." + d + "." + this.id, this, p[d]);
					if (p) {
						for (d in this.paper.customAttributes)
							if (this.paper.customAttributes[t](d) && p[t](d) && n.is(this.paper.customAttributes[d], "function")) {
								var g = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
								this.attrs[d] = p[d];
								for (var v in g) g[t](v) && (p[v] = g[v])
							}
						p.text && "text" == this.type && (this.textpath.string = p.text), T(this, p)
					}
					return this
				}, N.toFront = function() {
					return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && n._tofront(this, this.paper), this
				}, N.toBack = function() {
					return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), n._toback(this, this.paper)), this)
				}, N.insertAfter = function(t) {
					return this.removed ? this : (t.constructor == n.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), n._insertafter(this, t, this.paper), this)
				}, N.insertBefore = function(t) {
					return this.removed ? this : (t.constructor == n.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), n._insertbefore(this, t, this.paper), this)
				}, N.blur = function(t) {
					var e = this.node.runtimeStyle,
						r = e.filter;
					return r = r.replace(m, d), 0 !== +t ? (this.attrs.blur = t, e.filter = r + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = n.format("-{0}px 0 0 -{0}px", o(+t || 1.5))) : (e.filter = r, e.margin = 0, delete this.attrs.blur), this
				}, n._engine.path = function(t, e) {
					var n = M("shape");
					n.style.cssText = x, n.coordsize = $ + p + $, n.coordorigin = e.coordorigin;
					var r = new A(n, e),
						i = {
							fill: "none",
							stroke: "#000"
						};
					t && (i.path = t), r.type = "path", r.path = [], r.Path = d, T(r, i), e.canvas.appendChild(n);
					var o = M("skew");
					return o.on = !0, n.appendChild(o), r.skew = o, r.transform(d), r
				}, n._engine.rect = function(t, e, r, i, o, a) {
					var s = n._rectPath(e, r, i, o, a),
						u = t.path(s),
						c = u.attrs;
					return u.X = c.x = e, u.Y = c.y = r, u.W = c.width = i, u.H = c.height = o, c.r = a, c.path = s, u.type = "rect", u
				}, n._engine.ellipse = function(t, e, n, r, i) {
					{
						var o = t.path();
						o.attrs
					}
					return o.X = e - r, o.Y = n - i, o.W = 2 * r, o.H = 2 * i, o.type = "ellipse", T(o, {
						cx: e,
						cy: n,
						rx: r,
						ry: i
					}), o
				}, n._engine.circle = function(t, e, n, r) {
					{
						var i = t.path();
						i.attrs
					}
					return i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", T(i, {
						cx: e,
						cy: n,
						r: r
					}), i
				}, n._engine.image = function(t, e, r, i, o, a) {
					var s = n._rectPath(r, i, o, a),
						u = t.path(s).attr({
							stroke: "none"
						}),
						l = u.attrs,
						f = u.node,
						h = f.getElementsByTagName(c)[0];
					return l.src = e, u.X = l.x = r, u.Y = l.y = i, u.W = l.width = o, u.H = l.height = a, l.path = s, u.type = "image", h.parentNode == f && f.removeChild(h), h.rotate = !0, h.src = e, h.type = "tile", u._.fillpos = [r, i], u._.fillsize = [o, a], f.appendChild(h), S(u, 1, 1, 0, 0, 0), u
				}, n._engine.text = function(t, r, i, a) {
					var s = M("shape"),
						u = M("path"),
						c = M("textpath");
					r = r || 0, i = i || 0, a = a || "", u.v = n.format("m{0},{1}l{2},{1}", o(r * $), o(i * $), o(r * $) + 1), u.textpathok = !0, c.string = e(a), c.on = !0, s.style.cssText = x, s.coordsize = $ + p + $, s.coordorigin = "0 0";
					var l = new A(s, t),
						f = {
							fill: "#000",
							stroke: "none",
							font: n._availableAttrs.font,
							text: a
						};
					l.shape = s, l.path = u, l.textpath = c, l.type = "text", l.attrs.text = e(a), l.attrs.x = r, l.attrs.y = i, l.attrs.w = 1, l.attrs.h = 1, T(l, f), s.appendChild(c), s.appendChild(u), t.canvas.appendChild(s);
					var h = M("skew");
					return h.on = !0, s.appendChild(h), l.skew = h, l.transform(d), l
				}, n._engine.setSize = function(t, e) {
					var r = this.canvas.style;
					return this.width = t, this.height = e, t == +t && (t += "px"), e == +e && (e += "px"), r.width = t, r.height = e, r.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && n._engine.setViewBox.apply(this, this._viewBox), this
				}, n._engine.setViewBox = function(t, e, r, i, o) {
					n.eve("raphael.setViewBox", this, this._viewBox, [t, e, r, i, o]);
					var s, u, c = this.width,
						l = this.height,
						f = 1 / a(r / c, i / l);
					return o && (s = l / i, u = c / r, c > r * s && (t -= (c - r * s) / 2 / s), l > i * u && (e -= (l - i * u) / 2 / u)), this._viewBox = [t, e, r, i, !! o], this._viewBoxShift = {
						dx: -t,
						dy: -e,
						scale: f
					}, this.forEach(function(t) {
						t.transform("...")
					}), this
				};
				var M;
				n._engine.initWin = function(t) {
					var e = t.document;
					e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
					try {
						!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), M = function(t) {
							return e.createElement("<rvml:" + t + ' class="rvml">')
						}
					} catch (n) {
						M = function(t) {
							return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
						}
					}
				}, n._engine.initWin(n._g.win), n._engine.create = function() {
					var t = n._getContainer.apply(0, arguments),
						e = t.container,
						r = t.height,
						i = t.width,
						o = t.x,
						a = t.y;
					if (!e) throw new Error("VML container not found.");
					var s = new n._Paper,
						u = s.canvas = n._g.doc.createElement("div"),
						c = u.style;
					return o = o || 0, a = a || 0, i = i || 512, r = r || 342, s.width = i, s.height = r, i == +i && (i += "px"), r == +r && (r += "px"), s.coordsize = 1e3 * $ + p + 1e3 * $, s.coordorigin = "0 0", s.span = n._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", u.appendChild(s.span), c.cssText = n.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == e ? (n._g.doc.body.appendChild(u), c.left = o + "px", c.top = a + "px", c.position = "absolute") : e.firstChild ? e.insertBefore(u, e.firstChild) : e.appendChild(u), s.renderfix = function() {}, s
				}, n.prototype.clear = function() {
					n.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = n._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
				}, n.prototype.remove = function() {
					n.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
					for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
					return !0
				};
				var j = n.st;
				for (var O in N) N[t](O) && !j[t](O) && (j[O] = function(t) {
					return function() {
						var e = arguments;
						return this.forEach(function(n) {
							n[t].apply(n, e)
						})
					}
				}(O))
			}
		}(), T.was ? _.win.Raphael = n : Raphael = n, n
	}), define("modules/artists/module", ["angular", "../../config", "raphael"], function(t) {
		return t.module("app.artists", ["app.constants", "app.dataService"])
	}), define("modules/artists/artists-ctrl", ["./module"], function(t) {
		t.controller("ArtistsController", ["$scope", "dataService",
			function(t, e) {
				function n() {
					r(), t.updateArtists(), o()
				}

				function r() {
					l++;
					var n = e.data.expos[t.filters.period];
					t.countries = [], h = 0, c = [], angular.forEach(D.continents, function(t, e) {
						angular.forEach(t.countries, function(t, n) {
							D.continents[e].countries[n].has_artists = 0, D.continents[e].countries[n].nb_artists = 0
						})
					}), angular.forEach(n, function(e) {
						if (t.filters.genres.indexOf(e.g) > -1 && t.filters.ages.indexOf(e.a) > -1 && e.c) {
							var n = D.continents[D.cc[e.c]].countries[e.c],
								r = n.artists;
							r[e.i] || (r[e.i] = {
								slice: null,
								iteration: 0
							}), r[e.i].iteration < l && (n.nb_artists ? n.nb_artists++ : n.nb_artists = 1, h = Math.max(h, n.nb_artists)), r[e.i].iteration = l, -1 == t.countries.indexOf(e.c) && t.countries.push(e.c), -1 == c.indexOf(e.i) && c.push(parseInt(e.i, 10)), n.has_artists = !0, n.artists = r, D.continents[D.cc[e.c]].countries[e.c] = n
						}
					}), f = t.countries.length, i(c.length, f)
				}

				function i(e, n, r) {
					r = null;
					var i, o, a, s;
					switch (t.filters.period) {
						case "today":
							o = "Aujourd'hui", i = "exposent";
							break;
						default:
							o = "En " + t.filters.period, i = "exposaient"
					}
					switch (e) {
						case 0:
							a = "aucun artiste", i = "n'" + i;
							break;
						case 1:
							a = "1 artiste", i = "expose";
							break;
						default:
							a = e + " artistes"
					}
					switch (n) {
						case 1:
							s = "un pays";
							break;
						default:
							s = n + " pays"
					}
					angular.element(".entry-description p").html("<strong>" + o + "</strong> <br /><strong>" + a + "</strong> français <br />" + i + (e ? " dans <strong>" + s + "</strong>" : "") + ".")
				}

				function o() {
					console.log("nb_countries : " + f), console.log("max_artists : " + h);
					var t = f ? 360 / f : 0,
						e = 0,
						n = h ? (g / 2 - (k + _)) / h : 0;
					angular.forEach(M, function(t, e) {
						delete M[e], t.remove()
					}), angular.forEach(D.continents, function(r, i) {
						f = 0;
						var o = e;
						if (angular.forEach(r.countries, function(r, i) {
							var o = -(n * r.nb_artists),
								a = [b, w, k, o, t - T, e];
							null === r.slice ? (r.slice = y.path().attr({
								fill: "#F21C79",
								stroke: "#FFFFFF",
								"stroke-width": 0,
								filledArc: [b, w, k, 0, t - T, e]
							}).animate({
								filledArc: a
							}, E), r.slice.node.setAttribute("class", "country-" + i)) : r.slice.animate({
								filledArc: a
							}, E, null, function() {}), P && (r.title_set && r.title_set.remove(), r.title_path && r.title_path.remove(), r.nb_artists && ! function(t, e, n, r) {
								clearTimeout(j[e]), j[e] = setTimeout(function() {
									var i = [b, w, g / 2 - C - S, n - T, r];
									t.title_path = y.path().attr({
										stroke: "#0000FF",
										"stroke-width": 1,
										simpleArc: i,
										opacity: 0
									});
									var o = e;
									t.title_set = s(o, t.title_path, 12, 1, !0, !0, 0, "00FF00", "normal", n, r), M.push(t.title_path)
								}, 150)
							}(r, i, t, e)), r.nb_artists && (e += t, f++)
						}), O && (r.title_set && r.title_set.animate({
							opacity: 0
						}, A, function() {
							this.remove()
						}), r.title_path && r.title_path.animate({
							opacity: 0
						}, A, function() {
							this.remove()
						}), f)) {
							var u = f * t;
							! function(t, e, n, r) {
								clearTimeout(j[e]), j[e] = setTimeout(function() {
									var i = [b, w, g / 2 - C, n - T, r];
									t.title_path = y.path().attr({
										stroke: "#00FF00",
										"stroke-width": 2,
										simpleArc: i
									});
									var o = a(e, 12, 1, !0, !0, "00FF00", "normal"),
										u = o.messageLength > .75 * t.title_path.getTotalLength() ? e.substr(0, 3) : e;
									t.title_set = s(u, t.title_path, 12, 1, !0, !0, 0, "00FF00", "normal", n, r), M.push(t.title_path)
								}, 100)
							}(r, i, u, o)
						}
					})
				}

				function a(t, e, n, r, i, o, a) {
					for (var s = /rv:([^\)]+)\) Gecko\/\d{8}/.test(navigator.userAgent || "") ? !0 : !1, u = [], c = [], l = 0, f = 0; f < t.length; f++) {
						var h = y.text(0, 0, t[f]).attr({
							"text-anchor": "bottom",
							fill: o,
							"font-weight": a
						}),
							p = h.attr("text"),
							d = 0;
						if (u.push(h), r) {
							s && i && (r = i);
							var g = u[f - 1] ? u[f - 1].attr("text") : "";
							r[f] ? d = r[f] : r[p] && (d = "object" == typeof r[p] ? r[p][g] || r[p]["default"] || 0 : r[p]), r["default"] && (d += r["default"][g] || 0)
						}
						l += d, c.push(l), l += Math.max(4.5, h.getBBox().width)
					}
					return {
						letters: u,
						places: c,
						messageLength: l
					}
				}

				function s(t, e, n, r, i, o, s, u, c, l, f) {
					var h = y.set();
					M.push(h);
					var p, d, g = "Open sans",
						v = /rv:([^\)]+)\) Gecko\/\d{8}/.test(navigator.userAgent || "") ? !0 : !1,
						m = a(t, n, r, i, o, u, c),
						x = m.letters,
						$ = m.places,
						b = m.messageLength;
					s = (e.getTotalLength() - b) / 2, r = 1, r += (e.getTotalLength() - b) / 2 / 200, r ? v && (r = .83 * r) : r = r || e.getTotalLength() / b, n = n || 10 * r, p = x.length - 1;
					var w = f;
					for ((70 > w || w > 240) && 180 > l && (t = t.split("").reverse().join(""), m = a(t, n, r, i, o, u, c), x = m.letters, $ = m.places, b = m.messageLength, d = !0), p = 0; p < x.length; p++) {
						x[p].attr({
							"font-size": n + "px",
							"font-family": g
						});
						var k = e.getPointAtLength($[p] * r + s),
							C = "R" + (k.alpha < 180 || d ? k.alpha + 180 : k.alpha) + "," + k.x + "," + k.y;
						h.push(x[p].attr({
							x: k.x,
							y: k.y,
							transform: C,
							opacity: 0
						}).toFront())
					}
					return h
				}
				var u = e.data.years;
				t.artists = [], angular.forEach(e.data.artists.names, function(e, n) {
					t.artists.push({
						id: parseInt(n, 10),
						name: e,
						enabled: ""
					})
				}), t.artists.sort(function(t, e) {
					return t.name < e.name ? -1 : 1
				}), t.filters = {
					artist: "",
					period: "today",
					genres: ["m", "f", "c"],
					ages: ["0-25", "26-35", "36-45", "46-55"]
				}, t.periods = [{
					name: "aujourd'hui",
					slug: "today",
					checked: !0
				}], angular.forEach(u, function(e) {
					t.periods.push({
						name: e,
						slug: e,
						checked: null
					})
				}), t.$watch("filters.period", function(r) {
					t.filters.period = r, e.getExpos(t.filters.period).then(function() {
						n()
					})
				}), t.genres = [{
					name: "Masculin",
					slug: "m",
					checked: !0
				}, {
					name: "Féminin",
					slug: "f",
					checked: !0
				}, {
					name: "Collectif",
					slug: "c",
					checked: !0
				}], t.ages = [{
					name: "0 à 25 ans",
					slug: "0-25",
					checked: !0
				}, {
					name: "26 à 35 ans",
					slug: "26-35",
					checked: !0
				}, {
					name: "36 à 45 ans",
					slug: "36-45",
					checked: !0
				}, {
					name: "46 à 55 ans",
					slug: "46-55",
					checked: !0
				}], t.updateFilters = function() {
					t.filters.ages = [], angular.forEach(t.ages, function(e) {
						e.checked && t.filters.ages.push(e.slug)
					}), t.filters.genres = [], angular.forEach(t.genres, function(e) {
						e.checked && t.filters.genres.push(e.slug)
					}), n()
				}, t.countries = [];
				var c, l = 0,
					f = 0,
					h = 0,
					p = 400,
					d = p,
					g = p,
					v = p,
					m = p,
					y = new Raphael(document.getElementById("canvas"), d, v);
				y.customAttributes.filledArc = function(t, e, n, r, i, o) {
					var a = 360;
					a == i && (i -= .001), i += o;
					var s = (90 - o) * Math.PI / 180,
						u = t + n * Math.cos(s),
						c = e - n * Math.sin(s),
						l = t + (n - r) * Math.cos(s),
						f = e - (n - r) * Math.sin(s),
						h = (90 - i) * Math.PI / 180,
						p = t + n * Math.cos(h),
						d = e - n * Math.sin(h),
						g = t + (n - r) * Math.cos(h),
						v = e - (n - r) * Math.sin(h);
					return {
						path: [
							["M", l, f],
							["L", u, c],
							["A", n, n, 0, +(i > 180 + o), 1, p, d],
							["L", g, v],
							["A", n - r, n - r, 1, +(i > 180 + o), 0, l, f]
						]
					}
				}, y.customAttributes.simpleArc = function(t, e, n, r, i) {
					var o = 360;
					o == r && (r -= .001), r += i;
					var a = (90 - i) * Math.PI / 180,
						s = t + n * Math.cos(a),
						u = e - n * Math.sin(a),
						c = (90 - r) * Math.PI / 180,
						l = t + n * Math.cos(c),
						f = e - n * Math.sin(c);
					return {
						path: [
							["M", l, f],
							["A", n, n, 0, +(r > 180 + i), 0, s, u]
						]
					}
				};
				var x = 0,
					$ = 0,
					b = x + g / 2,
					w = $ + m / 2,
					k = 60,
					C = 10,
					S = 30,
					_ = 10 + C + S,
					T = 1,
					E = 500,
					A = 200,
					N = 200,
					M = [],
					j = {}, O = !1,
					P = !1;
				y.circle(b, w, k - 5).attr({
					stroke: "#333",
					"stroke-width": 1
				});
				var D = {
					continents: {},
					cc: {}
				};
				angular.forEach(e.data.countries, function(t, e) {
					D.continents[e] = {
						slice: null,
						set: y.set(),
						countries: {}
					}, angular.forEach(t, function(t, n) {
						D.cc[n] = e, D.continents[e].countries[n] = {
							country: t,
							slice: null,
							title: null,
							artists: {},
							set: y.set()
						}
					})
				}), setInterval(function() {
					angular.forEach(M, function(t, e) {
						delete M[e], t.animate({
							opacity: 1
						}, N)
					})
				}, 50), t.updateArtists = function() {
					var e = 0,
						n = new RegExp(t.searchText, "i");
					angular.forEach(t.artists, function(r, i) {
						t.artists[i].enabled = -1 !== c.indexOf(r.id) && n.test(r.name) ? "enabled" + (e++ % 2 === 0 ? " even" : "") : ""
					})
				}
			}
		])
	}), define("modules/artists/index", ["./artists-ctrl"], function() {}), define("modules/artist/module", ["angular", "../../config", "raphael"], function(t) {
		return t.module("app.artist", ["app.constants", "app.dataService"])
	}), define("modules/artist/artist-ctrl", ["./module"], function(t) {
		t.controller("ArtistController", ["$scope", "dataService",
			function(t, e) {
				function n() {
					r(), o()
				}

				function r() {
					s++, console.log(t.period);
					var n = e.data.expos[t.period];
					console.log(e.data), console.log("expos : " + n.length), t.countries = [], c = 0, angular.forEach(w.continents, function(t, e) {
						angular.forEach(t.countries, function(t, n) {
							w.continents[e].countries[n].has_artists = 0, w.continents[e].countries[n].nb_artists = 0
						})
					}), angular.forEach(n, function(e) {
						var n = w.continents[w.cc[e.c]].countries[e.c],
							r = n.artists;
						r[e.i] || (r[e.i] = {
							slice: null,
							iteration: 0
						}), r[e.i].iteration < s && (n.nb_artists ? n.nb_artists++ : n.nb_artists = 1, c = Math.max(c, n.nb_artists)), r[e.i].iteration = s, -1 == t.countries.indexOf(e.c) && t.countries.push(e.c), -1 == t.artists.indexOf(e.i) && t.artists.push(e.i), n.has_artists = !0, n.artists = r, w.continents[w.cc[e.c]].countries[e.c] = n
					}), u = t.countries.length, i(t.artists.length, u)
				}

				function i(t, e, n) {
					n = null, angular.element(".status").html("Aujourd'hui " + t + " artistes<br /> exposent dans " + e + " pays")
				}

				function o() {
					console.log("drawChart"), console.log("nb_countries : " + u), console.log("max_artists : " + c);
					var t, e, n = (360 - u * b) / u,
						r = 0;
					angular.forEach(w.continents, function(i, o) {
						angular.forEach(i.countries, function(i, a) {
							var u = x,
								l = null;
							angular.forEach(i.artists, function(o) {
								var h = o.iteration < s ? 0 : f / 3 / c;
								u += h;
								var p = o.filledArc;
								o.filledArc = [m, y, u, h, n, r], null === o.slice ? (t = l ? e : [m, y, x, h, n, void 0 === i.rotation ? r : i.rotation], o.slice = d.path().attr({
									fill: "#FF0000",
									"stroke-width": 0,
									filledArc: t
								}).animate({
									filledArc: o.filledArc
								}, $), o.slice.node.setAttribute("class", "country-" + a + " artist artist-" + o.i)) : o.slice.animate({
									filledArc: o.filledArc
								}, $, null, function() {}), e = p
							}), r += i.has_artists ? n + b : 0, w.continents[o].countries[a].rotation = i.rotation = r
						})
					})
				}
				console.log("ArtistsController");
				var a = e.data.years;
				t.period = "2010", t.periods = [{
					name: "aujourd'hui",
					slug: "today",
					checked: "CHECKED"
				}], angular.forEach(a, function(e) {
					t.periods.push({
						name: e,
						slug: e,
						checked: null
					})
				}), t.$watch("period", function(r) {
					t.period = r, e.getExpos(t.period).then(function() {
						n()
					})
				}), t.artists = [], t.countries = [];
				var s = 0,
					u = 0,
					c = 0,
					l = 700,
					f = 700,
					h = 700,
					p = 700,
					d = new Raphael(document.getElementById("canvas"), l, h);
				d.customAttributes.filledArc = function(t, e, n, r, i, o) {
					var a = 360;
					a == i && (i -= .001), i += o;
					var s = (90 - o) * Math.PI / 180,
						u = t + n * Math.cos(s),
						c = e - n * Math.sin(s),
						l = t + (n - r) * Math.cos(s),
						f = e - (n - r) * Math.sin(s),
						h = (90 - i) * Math.PI / 180,
						p = t + n * Math.cos(h),
						d = e - n * Math.sin(h),
						g = t + (n - r) * Math.cos(h),
						v = e - (n - r) * Math.sin(h);
					return {
						path: [
							["M", l, f],
							["L", u, c],
							["A", n, n, 0, +(i > 180 + o), 1, p, d],
							["L", g, v],
							["A", n - r, n - r, 1, +(i > 180 + o), 0, l, f]
						]
					}
				};
				var g = 0,
					v = 0,
					m = g + f / 2,
					y = v + p / 2,
					x = f / 4 - 90,
					$ = 500,
					b = 2;
				d.circle(m, y, x - 5).attr({
					stroke: "#333",
					"stroke-width": 1
				});
				var w = {
					continents: {},
					cc: {}
				};
				angular.forEach(e.data.countries, function(t, e) {
					w.continents[e] = {
						slice: null,
						set: d.set(),
						countries: {}
					}, angular.forEach(t, function(t, n) {
						w.cc[n] = e, w.continents[e].countries[n] = {
							country: t,
							slice: null,
							artists: {},
							set: d.set()
						}
					})
				})
			}
		])
	}), define("modules/artist/index", ["./artist-ctrl"], function() {}), define("app", ["angular", "./config", "./modules/data/index", "./modules/home/index", "./modules/artists/index", "./modules/artist/index"], function(t) {
		return t.module("app", ["ngRoute", "LocalStorageModule", "app.constants", "app.dataService", "app.home", "app.artists", "app.artist"])
	}), define("routes", ["./app", "./config"], function(t) {
		t.config(["$locationProvider",
			function(t) {
				t.html5Mode(!0), t.hashPrefix("!")
			}
		]), t.config(["$routeProvider",
			function(t) {
				t.when("/", {
					templateUrl: "/js/modules/home/home.html",
					controller: "HomeController"
				}), t.when("/artistes", {
					templateUrl: "/js/modules/artists/artists.html",
					controller: "ArtistsController",
					resolve: {
						datasets: function(t) {
							return t.init()
						}
					}
				}), t.when("/artist", {
					templateUrl: "/js/modules/artist/artist.html",
					controller: "ArtistController",
					resolve: {
						datasets: function(t) {
							return t.init()
						}
					}
				}), t.otherwise({
					redirectTo: "/"
				})
			}
		])
	}), define("main", ["require", "angular", "angular-route", "angular-local-storage", "./app", "./routes"], function(t, e) {
		t(["domReady!"], function(t) {
			e.bootstrap(t, ["app"])
		})
	})
}();