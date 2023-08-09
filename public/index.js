! function() {
    "use strict";
    var e, t = {
        exports: { }
    };
    e = t,
        function() {
            var t, n;

            function i(e) {
                return void 0 === this || Object.getPrototypeOf(this) !== i.prototype ? new i(e) : ((t = this).version = "3.4.0", t.tools = new v, t.isSupported() ? (t.tools.extend(t.defaults, e || {}), t.defaults.container = o(t.defaults), t.store = {
                    elements: {},
                    containers: []
                }, t.sequences = {}, t.history = [], t.uid = 0, t.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), t)
            }

            function o(e) {
                if (e && e.container) {
                    if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
                    if (t.tools.isNode(e.container)) return e.container;
                    console.log('ScrollReveal: invalid container "' + e.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
                }
                return t.defaults.container
            }

            function r() {
                return ++t.uid
            }

            function s(e, n, i) {
                n.container && (n.container = i), e.config ? e.config = t.tools.extendClone(e.config, n) : e.config = t.tools.extendClone(t.defaults, n), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
            }

            function a(e) {
                var t = window.getComputedStyle(e.domEl);
                e.styles || (e.styles = {
                    transition: {},
                    transform: {},
                    computed: {}
                }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e)
            }

            function l(e, t) {
                var n = e.config;
                return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
            }

            function c(e) {
                var t, n = e.config,
                    i = e.styles.transform;
                t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
            }

            function f(e) {
                var n = e.config.container;
                n && -1 === t.store.containers.indexOf(n) && t.store.containers.push(e.config.container), t.store.elements[e.id] = e
            }

            function d() {
                if (t.isSupported()) {
                    p();
                    for (var e = 0; e < t.store.containers.length; e++) t.store.containers[e].addEventListener("scroll", u), t.store.containers[e].addEventListener("resize", u);
                    t.initialized || (window.addEventListener("scroll", u), window.addEventListener("resize", u), t.initialized = !0)
                }
                return t
            }

            function u() {
                n(p)
            }

            function p() {
                var e, n, i, o, r;
                t.tools.forOwn(t.sequences, (function(e) {
                    r = t.sequences[e], i = !1;
                    for (var n = 0; n < r.elemIds.length; n++) o = r.elemIds[n], g(t.store.elements[o]) && !i && (i = !0);
                    r.active = i
                })), t.tools.forOwn(t.store.elements, (function(i) {
                    n = t.store.elements[i], e = function(e) {
                            var n = e.config.useDelay;
                            return "always" === n || "onload" === n && !t.initialized || "once" === n && !e.seen
                        }(n),
                        function(e) {
                            if (e.sequence) {
                                var n = t.sequences[e.sequence.id];
                                return n.active && !n.blocked && !e.revealing && !e.disabled
                            }
                            return g(e) && !e.revealing && !e.disabled
                        }(n) ? (n.config.beforeReveal(n.domEl), e ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), m("reveal", n, e), n.revealing = !0, n.seen = !0, n.sequence && function(e, n) {
                            var i = 0,
                                o = 0,
                                r = t.sequences[e.sequence.id];
                            r.blocked = !0, n && "onload" === e.config.useDelay && (o = e.config.delay), e.sequence.timer && (i = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
                                started: new Date
                            }, e.sequence.timer.clock = window.setTimeout((function() {
                                r.blocked = !1, e.sequence.timer = null, u()
                            }), Math.abs(r.interval) + o - i)
                        }(n, e)) : function(e) {
                            return e.sequence ? !t.sequences[e.sequence.id].active && e.config.reset && e.revealing && !e.disabled : !g(e) && e.config.reset && e.revealing && !e.disabled
                        }(n) && (n.config.beforeReset(n.domEl), n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), m("reset", n), n.revealing = !1)
                }))
            }

            function m(e, t, n) {
                var i = 0,
                    o = 0,
                    r = "after";
                switch (e) {
                    case "reveal":
                        o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                        break;
                    case "reset":
                        o = t.config.duration, r += "Reset"
                }
                t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
                    started: new Date
                }, t.timer.clock = window.setTimeout((function() {
                    t.config[r](t.domEl), t.timer = null
                }), o - i)
            }

            function y(e) {
                var t = 0,
                    n = 0,
                    i = e.offsetHeight,
                    o = e.offsetWidth;
                do {
                    isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent
                } while (e);
                return {
                    top: t,
                    left: n,
                    height: i,
                    width: o
                }
            }

            function g(e) {
                var t, n, i, o, r, s, a, l, c = y(e.domEl),
                    f = function(e) {
                        return {
                            width: e.clientWidth,
                            height: e.clientHeight
                        }
                    }(e.config.container),
                    d = function(e) {
                        if (e && e !== window.document.documentElement) {
                            var t = y(e);
                            return {
                                x: e.scrollLeft + t.left,
                                y: e.scrollTop + t.top
                            }
                        }
                        return {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }
                    }(e.config.container),
                    u = e.config.viewFactor,
                    p = c.height,
                    m = c.width,
                    g = c.top,
                    v = c.left;
                return t = g + p * u, n = v + m * u, i = g + p - p * u, o = v + m - m * u, r = d.y + e.config.viewOffset.top, s = d.x + e.config.viewOffset.left, a = d.y - e.config.viewOffset.bottom + f.height, l = d.x - e.config.viewOffset.right + f.width, t < a && i > r && n < l && o > s || "fixed" === window.getComputedStyle(e.domEl).position
            }

            function v() {}
            i.prototype.defaults = {
                origin: "bottom",
                distance: "20px",
                duration: 500,
                delay: 0,
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                opacity: 0,
                scale: .9,
                easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
                container: window.document.documentElement,
                mobile: !0,
                reset: !1,
                useDelay: "always",
                viewFactor: .2,
                viewOffset: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                beforeReveal: function(e) {},
                beforeReset: function(e) {},
                afterReveal: function(e) {},
                afterReset: function(e) {}
            }, i.prototype.isSupported = function() {
                var e = document.documentElement.style;
                return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
            }, i.prototype.reveal = function(e, n, i, l) {
                var c, u, p, m, y, g;
                if (void 0 !== n && "number" == typeof n ? (i = n, n = {}) : null == n && (n = {}), u = function(e, n) {
                        return "string" == typeof e ? Array.prototype.slice.call(n.querySelectorAll(e)) : t.tools.isNode(e) ? [e] : t.tools.isNodeList(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? e.filter(t.tools.isNode) : []
                    }(e, c = o(n)), !u.length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), t;
                i && "number" == typeof i && (g = r(), y = t.sequences[g] = {
                    id: g,
                    interval: i,
                    elemIds: [],
                    active: !1
                });
                for (var v = 0; v < u.length; v++)(m = u[v].getAttribute("data-sr-id")) ? p = t.store.elements[m] : (p = {
                    id: r(),
                    domEl: u[v],
                    seen: !1,
                    revealing: !1
                }).domEl.setAttribute("data-sr-id", p.id), y && (p.sequence = {
                    id: y.id,
                    index: y.elemIds.length
                }, y.elemIds.push(p.id)), s(p, n, c), a(p), f(p), t.tools.isMobile() && !p.config.mobile || !t.isSupported() ? (p.domEl.setAttribute("style", p.styles.inline), p.disabled = !0) : p.revealing || p.domEl.setAttribute("style", p.styles.inline + p.styles.transform.initial);
                return !l && t.isSupported() && (function(e, n, i) {
                    var o = {
                        target: e,
                        config: n,
                        interval: i
                    };
                    t.history.push(o)
                }(e, n, i), t.initTimeout && window.clearTimeout(t.initTimeout), t.initTimeout = window.setTimeout(d, 0)), t
            }, i.prototype.sync = function() {
                if (t.history.length && t.isSupported()) {
                    for (var e = 0; e < t.history.length; e++) {
                        var n = t.history[e];
                        t.reveal(n.target, n.config, n.interval, !0)
                    }
                    d()
                } else console.log("ScrollReveal: sync failed, no reveals found.");
                return t
            }, v.prototype.isObject = function(e) {
                return null !== e && "object" == typeof e && e.constructor === Object
            }, v.prototype.isNode = function(e) {
                return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, v.prototype.isNodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
            }, v.prototype.forOwn = function(e, t) {
                if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
                for (var n in e) e.hasOwnProperty(n) && t(n)
            }, v.prototype.extend = function(e, t) {
                return this.forOwn(t, function(n) {
                    this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
                }.bind(this)), e
            }, v.prototype.extendClone = function(e, t) {
                return this.extend(this.extend({}, e), t)
            }, v.prototype.isMobile = function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }, n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }, e.exports ? e.exports = i : window.ScrollReveal = i
        }();
    for (var n = new(0, t.exports), i = document.querySelectorAll('[data-component="fadereveal"]'), o = 0; o < i.length; o++) {
        var r = i[o].querySelectorAll('[data-ref="fadereveal[el]"]');
        n.reveal(r, {
            duration: 1e3,
            scale: 1,
            distance: "0px",
            viewFactor: 0
        }, 100)
    }
    for (var s = document.querySelectorAll('[data-component="slidereveal"]'), a = 0; a < s.length; a++) {
        var l = s[a].querySelectorAll('[data-ref="slidereveal[el]"]');
        n.reveal(l, {
            duration: 1e3,
            scale: 1,
            distance: "50px"
        }, 75)
    }
    var c = '[data-ref="hero[el]"]';
    new Glide('[data-component="hero"]', {
        focusAt: "center",
        startAt: 7,
        perView: 6,
        peek: 50,
        gap: 30,
        autoplay: 2500,
        hoverpause: !1,
        animationDuration: 1e3,
        rewindDuration: 2e3,
        touchRatio: .25,
        perTouch: 1,
        breakpoints: {
            480: {
                gap: 15,
                peek: 75,
                perView: 1
            },
            768: {
                perView: 2
            },
            1360: {
                perView: 3
            },
            1600: {
                perView: 4
            },
            1960: {
                perView: 5
            }
        }
    }).mount({
        Coverflow: function(e, t, n) {
            var i = {
                tilt: function(e) {
                    e.querySelector(c).style.transform = "perspective(1500px) rotateY(0deg)", this.tiltPrevElements(e), this.tiltNextElements(e)
                },
                tiltPrevElements: function(e) {
                    for (var t = function(e) {
                            var t = [];
                            if (e)
                                for (; e = e.previousElementSibling;) t.push(e);
                            return t
                        }(e), n = 0; n < t.length; n++) {
                        var i = t[n].querySelector(c);
                        i.style.transformOrigin = "100% 50%", i.style.transform = "perspective(1500px) rotateY(".concat(20 * Math.max(n, 2), "deg)")
                    }
                },
                tiltNextElements: function(e) {
                    for (var t = function(e) {
                            var t = [];
                            if (e)
                                for (; e = e.nextElementSibling;) t.push(e);
                            return t
                        }(e), n = 0; n < t.length; n++) {
                        var i = t[n].querySelector(c);
                        i.style.transformOrigin = "0% 50%", i.style.transform = "perspective(1500px) rotateY(".concat(-20 * Math.max(n, 2), "deg)")
                    }
                }
            };
            return n.on(["mount.after", "run"], (function() {
                i.tilt(t.Html.slides[e.index])
            })), i
        }
    })
}();