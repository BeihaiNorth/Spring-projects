(function(p, j) {
    function u() {
        if (!c.isReady) {
            try { v.documentElement.doScroll("left") } catch (a) { setTimeout(u, 1);
                return }
            c.ready() } }

    function t(a, b) { b.src ? c.ajax({ url: b.src, async: false, dataType: "script" }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b) }

    function o(a, b, e, g, f, l) {
        var k = a.length;
        if (typeof b === "object") {
            for (var s in b) o(a, s, b[s], g, f, e);
            return a }
        if (e !== j) { g = !l && g && c.isFunction(e);
            for (s = 0; s < k; s++) f(a[s], b, g ? e.call(a[s], s, f(a[s], b)) : e, l);
            return a }
        return k ?
            f(a[0], b) : j
    }

    function z() {
        return (new Date).getTime() }

    function G() {
        return false }

    function U() {
        return true }

    function R(a, b, e) { e[0].type = a;
        return c.event.handle.apply(b, e) }

    function S(a) {
        var b, e = [],
            g = [],
            f = arguments,
            l, k, s, m, r, y;
        k = c.data(this, "events");
        if (!(a.liveFired === this || !k || !k.live || a.button && a.type === "click")) {
            a.liveFired = this;
            var B = k.live.slice(0);
            for (m = 0; m < B.length; m++) { k = B[m];
                k.origType.replace(da, "") === a.type ? g.push(k.selector) : B.splice(m--, 1) }
            l = c(a.target).closest(g, a.currentTarget);
            r = 0;
            for (y =
                l.length; r < y; r++)
                for (m = 0; m < B.length; m++) { k = B[m];
                    if (l[r].selector === k.selector) { s = l[r].elem;
                        g = null;
                        if (k.preType === "mouseenter" || k.preType === "mouseleave") g = c(a.relatedTarget).closest(k.selector)[0];
                        if (!g || g !== s) e.push({ elem: s, handleObj: k }) } }
            r = 0;
            for (y = e.length; r < y; r++) { l = e[r];
                a.currentTarget = l.elem;
                a.data = l.handleObj.data;
                a.handleObj = l.handleObj;
                if (l.handleObj.origHandler.apply(l.elem, f) === false) { b = false;
                    break } }
            return b
        }
    }

    function L(a, b) {
        return "live." + (a && a !== "*" ? a + "." : "") + b.replace(/\./g, "`").replace(/ /g,
            "&")
    }

    function Z(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11 }

    function ea(a, b) {
        var e = 0;
        b.each(function() {
            if (this.nodeName === (a[e] && a[e].nodeName)) {
                var g = c.data(a[e++]),
                    f = c.data(this, g);
                if (g = g && g.events) { delete f.handle;
                    f.events = {};
                    for (var l in g)
                        for (var k in g[l]) c.event.add(this, l, g[l][k], g[l][k].data) } } }) }

    function fa(a, b, e) {
        var g, f, l;
        b = b && b[0] ? b[0].ownerDocument || b[0] : v;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === v && !Ca.test(a[0]) && (c.support.checkClone || !Da.test(a[0]))) {
            f =
                true;
            if (l = c.fragments[a[0]])
                if (l !== 1) g = l
        }
        if (!g) { g = b.createDocumentFragment();
            c.clean(a, b, g, e) }
        if (f) c.fragments[a[0]] = l ? g : 1;
        return { fragment: g, cacheable: f }
    }

    function T(a, b) {
        var e = {};
        c.each(Ea.concat.apply([], Ea.slice(0, b)), function() { e[this] = a });
        return e }

    function V(a) {
        return "scrollTo" in a && a.document ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false }
    var c = function(a, b) {
            return new c.fn.init(a, b) },
        oa = p.jQuery,
        J = p.$,
        v = p.document,
        N, K = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
        M = /^.[^:#\[\.,]*$/,
        ka = /\S/,
        $ =
        /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
        Ya = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        ga = navigator.userAgent,
        Fa = false,
        ha = [],
        aa, pa = Object.prototype.toString,
        qa = Object.prototype.hasOwnProperty,
        ra = Array.prototype.push,
        ia = Array.prototype.slice,
        Ga = Array.prototype.indexOf;
    c.fn = c.prototype = {
        init: function(a, b) {
            var e, g;
            if (!a) return this;
            if (a.nodeType) { this.context = this[0] = a;
                this.length = 1;
                return this }
            if (a === "body" && !b) { this.context = v;
                this[0] = v.body;
                this.selector = "body";
                this.length = 1;
                return this }
            if (typeof a === "string")
                if ((e = K.exec(a)) &&
                    (e[1] || !b))
                    if (e[1]) { g = b ? b.ownerDocument || b : v;
                        if (a = Ya.exec(a))
                            if (c.isPlainObject(b)) { a = [v.createElement(a[1])];
                                c.fn.attr.call(a, b, true) } else a = [g.createElement(a[1])];
                        else { a = fa([e[1]], [g]);
                            a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes }
                        return c.merge(this, a) } else {
                        if (b = v.getElementById(e[2])) {
                            if (b.id !== e[2]) return N.find(a);
                            this.length = 1;
                            this[0] = b }
                        this.context = v;
                        this.selector = a;
                        return this }
            else if (!b && /^\w+$/.test(a)) {
                this.selector = a;
                this.context = v;
                a = v.getElementsByTagName(a);
                return c.merge(this,
                    a)
            } else return !b || b.jquery ? (b || N).find(a) : c(b).find(a);
            else if (c.isFunction(a)) return N.ready(a);
            if (a.selector !== j) { this.selector = a.selector;
                this.context = a.context }
            return c.makeArray(a, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function() {
            return this.length },
        toArray: function() {
            return ia.call(this, 0) },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a] },
        pushStack: function(a, b, e) {
            var g = c();
            c.isArray(a) ? ra.apply(g, a) : c.merge(g, a);
            g.prevObject = this;
            g.context = this.context;
            if (b ===
                "find") g.selector = this.selector + (this.selector ? " " : "") + e;
            else if (b) g.selector = this.selector + "." + b + "(" + e + ")";
            return g
        },
        each: function(a, b) {
            return c.each(this, a, b) },
        ready: function(a) { c.bindReady();
            if (c.isReady) a.call(v, c);
            else ha && ha.push(a);
            return this },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1) },
        first: function() {
            return this.eq(0) },
        last: function() {
            return this.eq(-1) },
        slice: function() {
            return this.pushStack(ia.apply(this, arguments), "slice", ia.call(arguments).join(",")) },
        map: function(a) {
            return this.pushStack(c.map(this,
                function(b, e) {
                    return a.call(b, e, b) }))
        },
        end: function() {
            return this.prevObject || c(null) },
        push: ra,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function() {
        var a = arguments[0] || {},
            b = 1,
            e = arguments.length,
            g = false,
            f, l, k, s;
        if (typeof a === "boolean") { g = a;
            a = arguments[1] || {};
            b = 2 }
        if (typeof a !== "object" && !c.isFunction(a)) a = {};
        if (e === b) { a = this;--b }
        for (; b < e; b++)
            if ((f = arguments[b]) != null)
                for (l in f) {
                    k = a[l];
                    s = f[l];
                    if (a !== s)
                        if (g && s && (c.isPlainObject(s) || c.isArray(s))) {
                            k = k && (c.isPlainObject(k) ||
                                c.isArray(k)) ? k : c.isArray(s) ? [] : {};
                            a[l] = c.extend(g, k, s)
                        } else if (s !== j) a[l] = s
                }
            return a
    };
    c.extend({
        noConflict: function(a) { p.$ = J;
            if (a) p.jQuery = oa;
            return c },
        isReady: false,
        ready: function() {
            if (!c.isReady) {
                if (!v.body) return setTimeout(c.ready, 13);
                c.isReady = true;
                if (ha) {
                    for (var a, b = 0; a = ha[b++];) a.call(v, c);
                    ha = null }
                c.fn.triggerHandler && c(v).triggerHandler("ready") } },
        bindReady: function() {
            if (!Fa) {
                Fa = true;
                if (v.readyState === "complete") return c.ready();
                if (v.addEventListener) {
                    v.addEventListener("DOMContentLoaded",
                        aa, false);
                    p.addEventListener("load", c.ready, false)
                } else if (v.attachEvent) { v.attachEvent("onreadystatechange", aa);
                    p.attachEvent("onload", c.ready);
                    var a = false;
                    try { a = p.frameElement == null } catch (b) {}
                    v.documentElement.doScroll && a && u() }
            }
        },
        isFunction: function(a) {
            return pa.call(a) === "[object Function]" },
        isArray: function(a) {
            return pa.call(a) === "[object Array]" },
        isPlainObject: function(a) {
            if (!a || pa.call(a) !== "[object Object]" || a.nodeType || a.setInterval) return false;
            if (a.constructor && !qa.call(a, "constructor") &&
                !qa.call(a.constructor.prototype, "isPrototypeOf")) return false;
            var b;
            for (b in a);
            return b === j || qa.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return false;
            return true },
        error: function(a) {
            throw a; },
        parseJSON: function(a) {
            if (typeof a !== "string" || !a) return null;
            a = c.trim(a);
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return p.JSON && p.JSON.parse ? p.JSON.parse(a) :
                (new Function("return " + a))();
            else c.error("Invalid JSON: " + a)
        },
        noop: function() {},
        globalEval: function(a) {
            if (a && ka.test(a)) {
                var b = v.getElementsByTagName("head")[0] || v.documentElement,
                    e = v.createElement("script");
                e.type = "text/javascript";
                if (c.support.scriptEval) e.appendChild(v.createTextNode(a));
                else e.text = a;
                b.insertBefore(e, b.firstChild);
                b.removeChild(e) } },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase() },
        each: function(a, b, e) {
            var g, f = 0,
                l = a.length,
                k = l === j || c.isFunction(a);
            if (e)
                if (k)
                    for (g in a) {
                        if (b.apply(a[g], e) === false) break } else
                        for (; f < l;) {
                            if (b.apply(a[f++], e) === false) break } else if (k)
                            for (g in a) {
                                if (b.call(a[g], g, a[g]) === false) break } else
                                for (e = a[0]; f < l && b.call(e, f, e) !== false; e = a[++f]);
            return a
        },
        trim: function(a) {
            return (a || "").replace($, "") },
        makeArray: function(a, b) { b = b || [];
            if (a != null) a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? ra.call(b, a) : c.merge(b, a);
            return b },
        inArray: function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var e =
                    0, g = b.length; e < g; e++)
                if (b[e] === a) return e;
            return -1
        },
        merge: function(a, b) {
            var e = a.length,
                g = 0;
            if (typeof b.length === "number")
                for (var f = b.length; g < f; g++) a[e++] = b[g];
            else
                for (; b[g] !== j;) a[e++] = b[g++];
            a.length = e;
            return a },
        grep: function(a, b, e) {
            for (var g = [], f = 0, l = a.length; f < l; f++) !e !== !b(a[f], f) && g.push(a[f]);
            return g },
        map: function(a, b, e) {
            for (var g = [], f, l = 0, k = a.length; l < k; l++) { f = b(a[l], l, e);
                if (f != null) g[g.length] = f }
            return g.concat.apply([], g) },
        guid: 1,
        proxy: function(a, b, e) {
            if (arguments.length === 2)
                if (typeof b ===
                    "string") { e = a;
                    a = e[b];
                    b = j } else if (b && !c.isFunction(b)) { e = b;
                b = j }
            if (!b && a) b = function() {
                return a.apply(e || this, arguments) };
            if (a) b.guid = a.guid = a.guid || b.guid || c.guid++;
            return b
        },
        uaMatch: function(a) { a = a.toLowerCase();
            a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
            return { browser: a[1] || "", version: a[2] || "0" } },
        browser: {}
    });
    ga = c.uaMatch(ga);
    if (ga.browser) {
        c.browser[ga.browser] = true;
        c.browser.version = ga.version
    }
    if (c.browser.webkit) c.browser.safari = true;
    if (Ga) c.inArray = function(a, b) {
        return Ga.call(b, a) };
    N = c(v);
    if (v.addEventListener) aa = function() { v.removeEventListener("DOMContentLoaded", aa, false);
        c.ready() };
    else if (v.attachEvent) aa = function() {
        if (v.readyState === "complete") { v.detachEvent("onreadystatechange", aa);
            c.ready() } };
    (function() {
        c.support = {};
        var a = v.documentElement,
            b = v.createElement("script"),
            e = v.createElement("div"),
            g = "script" + z();
        e.style.display = "none";
        e.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var f = e.getElementsByTagName("*"),
            l = e.getElementsByTagName("a")[0];
        if (!(!f || !f.length || !l)) {
            c.support = {
                leadingWhitespace: e.firstChild.nodeType === 3,
                tbody: !e.getElementsByTagName("tbody").length,
                htmlSerialize: !!e.getElementsByTagName("link").length,
                style: /red/.test(l.getAttribute("style")),
                hrefNormalized: l.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(l.style.opacity),
                cssFloat: !!l.style.cssFloat,
                checkOn: e.getElementsByTagName("input")[0].value === "on",
                optSelected: v.createElement("select").appendChild(v.createElement("option")).selected,
                parentNode: e.removeChild(e.appendChild(v.createElement("div"))).parentNode === null,
                deleteExpando: true,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null
            };
            b.type = "text/javascript";
            try { b.appendChild(v.createTextNode("window." + g + "=1;")) } catch (k) {}
            a.insertBefore(b, a.firstChild);
            if (p[g]) { c.support.scriptEval = true;
                delete p[g] }
            try { delete b.test } catch (s) { c.support.deleteExpando = false }
            a.removeChild(b);
            if (e.attachEvent && e.fireEvent) {
                e.attachEvent("onclick", function m() {
                    c.support.noCloneEvent =
                        false;
                    e.detachEvent("onclick", m)
                });
                e.cloneNode(true).fireEvent("onclick")
            }
            e = v.createElement("div");
            e.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = v.createDocumentFragment();
            a.appendChild(e.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function() {
                var m = v.createElement("div");
                m.style.width = m.style.paddingLeft = "1px";
                v.body.appendChild(m);
                c.boxModel = c.support.boxModel = m.offsetWidth === 2;
                v.body.removeChild(m).style.display = "none" });
            a = function(m) {
                var r =
                    v.createElement("div");
                m = "on" + m;
                var y = m in r;
                if (!y) { r.setAttribute(m, "return;");
                    y = typeof r[m] === "function" }
                return y
            };
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = e = f = l = null
        }
    })();
    c.props = { "for": "htmlFor", "class": "className", readonly: "readOnly", maxlength: "maxLength", cellspacing: "cellSpacing", rowspan: "rowSpan", colspan: "colSpan", tabindex: "tabIndex", usemap: "useMap", frameborder: "frameBorder" };
    var W = "jQuery" + z(),
        Za = 0,
        Ha = {};
    c.extend({
        cache: {},
        expando: W,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function(a, b, e) {
            if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) { a = a == p ? Ha : a;
                var g = a[W],
                    f = c.cache;
                if (!g && typeof b === "string" && e === j) return null;
                g || (g = ++Za);
                if (typeof b === "object") { a[W] = g;
                    f[g] = c.extend(true, {}, b) } else if (!f[g]) { a[W] = g;
                    f[g] = {} }
                a = f[g];
                if (e !== j) a[b] = e;
                return typeof b === "string" ? a[b] : a } },
        removeData: function(a, b) {
            if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                a = a == p ? Ha : a;
                var e = a[W],
                    g = c.cache,
                    f = g[e];
                if (b) {
                    if (f) { delete f[b];
                        c.isEmptyObject(f) && c.removeData(a) } } else {
                    if (c.support.deleteExpando) delete a[c.expando];
                    else a.removeAttribute && a.removeAttribute(c.expando);
                    delete g[e]
                }
            }
        }
    });
    c.fn.extend({
        data: function(a, b) {
            if (typeof a === "undefined" && this.length) return c.data(this[0]);
            else if (typeof a === "object") return this.each(function() { c.data(this, a) });
            var e = a.split(".");
            e[1] = e[1] ? "." + e[1] : "";
            if (b === j) {
                var g = this.triggerHandler("getData" + e[1] + "!", [e[0]]);
                if (g === j && this.length) g = c.data(this[0], a);
                return g === j && e[1] ? this.data(e[0]) : g } else return this.trigger("setData" + e[1] + "!", [e[0], b]).each(function() {
                c.data(this,
                    a, b)
            })
        },
        removeData: function(a) {
            return this.each(function() { c.removeData(this, a) }) }
    });
    c.extend({ queue: function(a, b, e) {
            if (a) { b = (b || "fx") + "queue";
                var g = c.data(a, b);
                if (!e) return g || [];
                if (!g || c.isArray(e)) g = c.data(a, b, c.makeArray(e));
                else g.push(e);
                return g } }, dequeue: function(a, b) { b = b || "fx";
            var e = c.queue(a, b),
                g = e.shift();
            if (g === "inprogress") g = e.shift();
            if (g) { b === "fx" && e.unshift("inprogress");
                g.call(a, function() { c.dequeue(a, b) }) } } });
    c.fn.extend({
        queue: function(a, b) {
            if (typeof a !== "string") { b = a;
                a = "fx" }
            if (b ===
                j) return c.queue(this[0], a);
            return this.each(function() {
                var e = c.queue(this, a, b);
                a === "fx" && e[0] !== "inprogress" && c.dequeue(this, a) })
        },
        dequeue: function(a) {
            return this.each(function() { c.dequeue(this, a) }) },
        delay: function(a, b) { a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function() {
                var e = this;
                setTimeout(function() { c.dequeue(e, b) }, a) }) },
        clearQueue: function(a) {
            return this.queue(a || "fx", []) }
    });
    var Ia = /[\n\t]/g,
        sa = /\s+/,
        $a = /\r/g,
        ab = /href|src|style/,
        bb = /(button|input)/i,
        cb = /(button|input|object|select|textarea)/i,
        db = /^(a|area)$/i,
        Ja = /radio|checkbox/;
    c.fn.extend({
        attr: function(a, b) {
            return o(this, a, b, true, c.attr) },
        removeAttr: function(a) {
            return this.each(function() { c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a) }) },
        addClass: function(a) {
            if (c.isFunction(a)) return this.each(function(r) {
                var y = c(this);
                y.addClass(a.call(this, r, y.attr("class"))) });
            if (a && typeof a === "string")
                for (var b = (a || "").split(sa), e = 0, g = this.length; e < g; e++) {
                    var f = this[e];
                    if (f.nodeType === 1)
                        if (f.className) {
                            for (var l = " " + f.className + " ",
                                    k = f.className, s = 0, m = b.length; s < m; s++)
                                if (l.indexOf(" " + b[s] + " ") < 0) k += " " + b[s];
                            f.className = c.trim(k)
                        } else f.className = a
                }
            return this
        },
        removeClass: function(a) {
            if (c.isFunction(a)) return this.each(function(m) {
                var r = c(this);
                r.removeClass(a.call(this, m, r.attr("class"))) });
            if (a && typeof a === "string" || a === j)
                for (var b = (a || "").split(sa), e = 0, g = this.length; e < g; e++) {
                    var f = this[e];
                    if (f.nodeType === 1 && f.className)
                        if (a) {
                            for (var l = (" " + f.className + " ").replace(Ia, " "), k = 0, s = b.length; k < s; k++) l = l.replace(" " + b[k] + " ",
                                " ");
                            f.className = c.trim(l)
                        } else f.className = ""
                }
            return this
        },
        toggleClass: function(a, b) {
            var e = typeof a,
                g = typeof b === "boolean";
            if (c.isFunction(a)) return this.each(function(f) {
                var l = c(this);
                l.toggleClass(a.call(this, f, l.attr("class"), b), b) });
            return this.each(function() {
                if (e === "string")
                    for (var f, l = 0, k = c(this), s = b, m = a.split(sa); f = m[l++];) { s = g ? s : !k.hasClass(f);
                        k[s ? "addClass" : "removeClass"](f) } else if (e === "undefined" || e === "boolean") {
                        this.className && c.data(this, "__className__", this.className);
                        this.className =
                            this.className || a === false ? "" : c.data(this, "__className__") || ""
                    }
            })
        },
        hasClass: function(a) { a = " " + a + " ";
            for (var b = 0, e = this.length; b < e; b++)
                if ((" " + this[b].className + " ").replace(Ia, " ").indexOf(a) > -1) return true;
            return false },
        val: function(a) {
            if (a === j) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) return (b.attributes.value || {}).specified ? b.value : b.text;
                    if (c.nodeName(b, "select")) {
                        var e = b.selectedIndex,
                            g = [],
                            f = b.options;
                        b = b.type === "select-one";
                        if (e < 0) return null;
                        var l = b ? e : 0;
                        for (e = b ? e + 1 : f.length; l < e; l++) {
                            var k =
                                f[l];
                            if (k.selected) { a = c(k).val();
                                if (b) return a;
                                g.push(a) }
                        }
                        return g
                    }
                    if (Ja.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
                    return (b.value || "").replace($a, "")
                }
                return j
            }
            var s = c.isFunction(a);
            return this.each(function(m) {
                var r = c(this),
                    y = a;
                if (this.nodeType === 1) {
                    if (s) y = a.call(this, m, r.val());
                    if (typeof y === "number") y += "";
                    if (c.isArray(y) && Ja.test(this.type)) this.checked = c.inArray(r.val(), y) >= 0;
                    else if (c.nodeName(this, "select")) {
                        var B = c.makeArray(y);
                        c("option", this).each(function() {
                            this.selected =
                                c.inArray(c(this).val(), B) >= 0
                        });
                        if (!B.length) this.selectedIndex = -1
                    } else this.value = y
                }
            })
        }
    });
    c.extend({
        attrFn: { val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true },
        attr: function(a, b, e, g) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return j;
            if (g && b in c.attrFn) return c(a)[b](e);
            g = a.nodeType !== 1 || !c.isXMLDoc(a);
            var f = e !== j;
            b = g && c.props[b] || b;
            if (a.nodeType === 1) {
                var l = ab.test(b);
                if (b in a && g && !l) {
                    if (f) {
                        b === "type" && bb.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                        a[b] = e
                    }
                    if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
                    if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : j;
                    return a[b]
                }
                if (!c.support.style && g && b === "style") {
                    if (f) a.style.cssText = "" + e;
                    return a.style.cssText }
                f && a.setAttribute(b, "" + e);
                a = !c.support.hrefNormalized && g && l ? a.getAttribute(b, 2) : a.getAttribute(b);
                return a === null ? j : a
            }
            return c.style(a, b, e)
        }
    });
    var da = /\.(.*)$/,
        eb = function(a) {
            return a.replace(/[^\w\s\.\|`]/g,
                function(b) {
                    return "\\" + b })
        };
    c.event = {
        add: function(a, b, e, g) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (a.setInterval && a !== p && !a.frameElement) a = p;
                var f, l;
                if (e.handler) { f = e;
                    e = f.handler }
                if (!e.guid) e.guid = c.guid++;
                if (l = c.data(a)) {
                    var k = l.events = l.events || {},
                        s = l.handle;
                    if (!s) l.handle = s = function() {
                        return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(s.elem, arguments) : j };
                    s.elem = a;
                    b = b.split(" ");
                    for (var m, r = 0, y; m = b[r++];) {
                        l = f ? c.extend({}, f) : { handler: e, data: g };
                        if (m.indexOf(".") > -1) {
                            y = m.split(".");
                            m = y.shift();
                            l.namespace = y.slice(0).sort().join(".")
                        } else { y = [];
                            l.namespace = "" }
                        l.type = m;
                        l.guid = e.guid;
                        var B = k[m],
                            F = c.event.special[m] || {};
                        if (!B) { B = k[m] = [];
                            if (!F.setup || F.setup.call(a, g, y, s) === false)
                                if (a.addEventListener) a.addEventListener(m, s, false);
                                else a.attachEvent && a.attachEvent("on" + m, s) }
                        if (F.add) { F.add.call(a, l);
                            if (!l.handler.guid) l.handler.guid = e.guid }
                        B.push(l);
                        c.event.global[m] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function(a, b, e, g) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                var f, l = 0,
                    k, s, m, r, y, B, F = c.data(a),
                    I = F && F.events;
                if (F && I) {
                    if (b && b.type) { e = b.handler;
                        b = b.type }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") { b = b || "";
                        for (f in I) c.event.remove(a, f + b) } else {
                        for (b = b.split(" "); f = b[l++];) {
                            r = f;
                            k = f.indexOf(".") < 0;
                            s = [];
                            if (!k) { s = f.split(".");
                                f = s.shift();
                                m = new RegExp("(^|\\.)" + c.map(s.slice(0).sort(), eb).join("\\.(?:.*\\.)?") + "(\\.|$)") }
                            if (y = I[f])
                                if (e) {
                                    r = c.event.special[f] || {};
                                    for (H = g || 0; H < y.length; H++) {
                                        B = y[H];
                                        if (e.guid === B.guid) {
                                            if (k || m.test(B.namespace)) { g == null && y.splice(H--, 1);
                                                r.remove && r.remove.call(a, B) }
                                            if (g !=
                                                null) break
                                        }
                                    }
                                    if (y.length === 0 || g != null && y.length === 1) {
                                        if (!r.teardown || r.teardown.call(a, s) === false) Ka(a, f, F.handle);
                                        delete I[f] }
                                } else
                                    for (var H = 0; H < y.length; H++) { B = y[H];
                                        if (k || m.test(B.namespace)) { c.event.remove(a, r, B.handler, H);
                                            y.splice(H--, 1) } }
                        }
                        if (c.isEmptyObject(I)) {
                            if (b = F.handle) b.elem = null;
                            delete F.events;
                            delete F.handle;
                            c.isEmptyObject(F) && c.removeData(a) }
                    }
                }
            }
        },
        trigger: function(a, b, e, g) {
            var f = a.type || a;
            if (!g) {
                a = typeof a === "object" ? a[W] ? a : c.extend(c.Event(f), a) : c.Event(f);
                if (f.indexOf("!") >= 0) {
                    a.type =
                        f = f.slice(0, -1);
                    a.exclusive = true
                }
                if (!e) { a.stopPropagation();
                    c.event.global[f] && c.each(c.cache, function() { this.events && this.events[f] && c.event.trigger(a, b, this.handle.elem) }) }
                if (!e || e.nodeType === 3 || e.nodeType === 8) return j;
                a.result = j;
                a.target = e;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = e;
            (g = c.data(e, "handle")) && g.apply(e, b);
            g = e.parentNode || e.ownerDocument;
            try {
                if (!(e && e.nodeName && c.noData[e.nodeName.toLowerCase()]))
                    if (e["on" + f] && e["on" + f].apply(e, b) === false) a.result = false } catch (l) {}
            if (!a.isPropagationStopped() &&
                g) c.event.trigger(a, b, g, true);
            else if (!a.isDefaultPrevented()) { g = a.target;
                var k, s = c.nodeName(g, "a") && f === "click",
                    m = c.event.special[f] || {};
                if ((!m._default || m._default.call(e, a) === false) && !s && !(g && g.nodeName && c.noData[g.nodeName.toLowerCase()])) {
                    try {
                        if (g[f]) {
                            if (k = g["on" + f]) g["on" + f] = null;
                            c.event.triggered = true;
                            g[f]() } } catch (r) {}
                    if (k) g["on" + f] = k;
                    c.event.triggered = false } }
        },
        handle: function(a) {
            var b, e, g, f;
            a = arguments[0] = c.event.fix(a || p.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) { e = a.type.split(".");
                a.type = e.shift();
                g = new RegExp("(^|\\.)" + e.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)") }
            f = c.data(this, "events");
            e = f[a.type];
            if (f && e) { e = e.slice(0);
                f = 0;
                for (var l = e.length; f < l; f++) {
                    var k = e[f];
                    if (b || g.test(k.namespace)) { a.handler = k.handler;
                        a.data = k.data;
                        a.handleObj = k;
                        k = k.handler.apply(this, arguments);
                        if (k !== j) { a.result = k;
                            if (k === false) { a.preventDefault();
                                a.stopPropagation() } }
                        if (a.isImmediatePropagationStopped()) break } } }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[W]) return a;
            var b = a;
            a = c.Event(b);
            for (var e = this.props.length, g; e;) { g = this.props[--e];
                a[g] = b[g] }
            if (!a.target) a.target = a.srcElement || v;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = v.documentElement;
                e = v.body;
                a.pageX = a.clientX + (b && b.scrollLeft || e && e.scrollLeft || 0) - (b && b.clientLeft || e && e.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop ||
                    e && e.scrollTop || 0) - (b && b.clientTop || e && e.clientTop || 0)
            }
            if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode)) a.which = a.charCode || a.keyCode;
            if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== j) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: { setup: c.bindReady, teardown: c.noop },
            live: {
                add: function(a) { c.event.add(this, a.origType, c.extend({}, a, { handler: S })) },
                remove: function(a) {
                    var b = true,
                        e = a.origType.replace(da, "");
                    c.each(c.data(this,
                        "events").live || [], function() {
                        if (e === this.origType.replace(da, "")) return b = false });
                    b && c.event.remove(this, a.origType, S)
                }
            },
            beforeunload: { setup: function(a, b, e) {
                    if (this.setInterval) this.onbeforeunload = e;
                    return false }, teardown: function(a, b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null } }
        }
    };
    var Ka = v.removeEventListener ? function(a, b, e) { a.removeEventListener(b, e, false) } : function(a, b, e) { a.detachEvent("on" + b, e) };
    c.Event = function(a) {
        if (!this.preventDefault) return new c.Event(a);
        if (a && a.type) {
            this.originalEvent =
                a;
            this.type = a.type
        } else this.type = a;
        this.timeStamp = z();
        this[W] = true
    };
    c.Event.prototype = {
        preventDefault: function() { this.isDefaultPrevented = U;
            var a = this.originalEvent;
            if (a) { a.preventDefault && a.preventDefault();
                a.returnValue = false } },
        stopPropagation: function() { this.isPropagationStopped = U;
            var a = this.originalEvent;
            if (a) { a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true } },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = U;
            this.stopPropagation() },
        isDefaultPrevented: G,
        isPropagationStopped: G,
        isImmediatePropagationStopped: G
    };
    var La = function(a) {
            var b = a.relatedTarget;
            try {
                for (; b && b !== this;) b = b.parentNode;
                if (b !== this) { a.type = a.data;
                    c.event.handle.apply(this, arguments) } } catch (e) {} },
        Ma = function(a) { a.type = a.data;
            c.event.handle.apply(this, arguments) };
    c.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { c.event.special[a] = { setup: function(e) { c.event.add(this, b, e && e.selector ? Ma : La, a) }, teardown: function(e) { c.event.remove(this, b, e && e.selector ? Ma : La) } } });
    if (!c.support.submitBubbles) c.event.special.submit = { setup: function() {
            if (this.nodeName.toLowerCase() !== "form") { c.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        e = b.type;
                    if ((e === "submit" || e === "image") && c(b).closest("form").length) return R("submit", this, arguments) });
                c.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        e = b.type;
                    if ((e === "text" || e === "password") && c(b).closest("form").length && a.keyCode === 13) return R("submit", this, arguments) }) } else return false }, teardown: function() { c.event.remove(this, ".specialSubmit") } };
    if (!c.support.changeBubbles) {
        var ta =
            /textarea|input|select/i,
            ua, Na = function(a) {
                var b = a.type,
                    e = a.value;
                if (b === "radio" || b === "checkbox") e = a.checked;
                else if (b === "select-multiple") e = a.selectedIndex > -1 ? c.map(a.options, function(g) {
                    return g.selected }).join("-") : "";
                else if (a.nodeName.toLowerCase() === "select") e = a.selectedIndex;
                return e },
            va = function(a, b) {
                var e = a.target,
                    g, f;
                if (!(!ta.test(e.nodeName) || e.readOnly)) {
                    g = c.data(e, "_change_data");
                    f = Na(e);
                    if (a.type !== "focusout" || e.type !== "radio") c.data(e, "_change_data", f);
                    if (!(g === j || f === g))
                        if (g != null ||
                            f) { a.type = "change";
                            return c.event.trigger(a, b, e) }
                }
            };
        c.event.special.change = {
            filters: { focusout: va, click: function(a) {
                    var b = a.target,
                        e = b.type;
                    if (e === "radio" || e === "checkbox" || b.nodeName.toLowerCase() === "select") return va.call(this, a) }, keydown: function(a) {
                    var b = a.target,
                        e = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (e === "checkbox" || e === "radio") || e === "select-multiple") return va.call(this, a) }, beforeactivate: function(a) { a = a.target;
                    c.data(a, "_change_data", Na(a)) } },
            setup: function() {
                if (this.type ===
                    "file") return false;
                for (var a in ua) c.event.add(this, a + ".specialChange", ua[a]);
                return ta.test(this.nodeName)
            },
            teardown: function() { c.event.remove(this, ".specialChange");
                return ta.test(this.nodeName) }
        };
        ua = c.event.special.change.filters
    }
    v.addEventListener && c.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        function e(g) { g = c.event.fix(g);
            g.type = b;
            return c.event.handle.call(this, g) }
        c.event.special[b] = {
            setup: function() { this.addEventListener(a, e, true) },
            teardown: function() {
                this.removeEventListener(a,
                    e, true)
            }
        }
    });
    c.each(["bind", "one"], function(a, b) { c.fn[b] = function(e, g, f) {
            if (typeof e === "object") {
                for (var l in e) this[b](l, g, e[l], f);
                return this }
            if (c.isFunction(g)) { f = g;
                g = j }
            var k = b === "one" ? c.proxy(f, function(m) { c(this).unbind(m, k);
                return f.apply(this, arguments) }) : f;
            if (e === "unload" && b !== "one") this.one(e, g, f);
            else { l = 0;
                for (var s = this.length; l < s; l++) c.event.add(this[l], e, k, g) }
            return this } });
    c.fn.extend({
        unbind: function(a, b) {
            if (typeof a === "object" && !a.preventDefault)
                for (var e in a) this.unbind(e, a[e]);
            else {
                e =
                    0;
                for (var g = this.length; e < g; e++) c.event.remove(this[e], a, b)
            }
            return this
        },
        delegate: function(a, b, e, g) {
            return this.live(b, e, g, a) },
        undelegate: function(a, b, e) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, e, a) },
        trigger: function(a, b) {
            return this.each(function() { c.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) {
            if (this[0]) { a = c.Event(a);
                a.preventDefault();
                a.stopPropagation();
                c.event.trigger(a, b, this[0]);
                return a.result } },
        toggle: function(a) {
            for (var b = arguments, e = 1; e < b.length;) c.proxy(a,
                b[e++]);
            return this.click(c.proxy(a, function(g) {
                var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
                c.data(this, "lastToggle" + a.guid, f + 1);
                g.preventDefault();
                return b[f].apply(this, arguments) || false }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a) }
    });
    var Oa = { focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout" };
    c.each(["live", "die"], function(a, b) {
        c.fn[b] = function(e, g, f, l) {
            var k, s = 0,
                m, r, y = l || this.selector,
                B = l ? this : c(this.context);
            if (c.isFunction(g)) { f = g;
                g = j }
            for (e =
                (e || "").split(" ");
                (k = e[s++]) != null;) { l = da.exec(k);
                m = "";
                if (l) { m = l[0];
                    k = k.replace(da, "") }
                if (k === "hover") e.push("mouseenter" + m, "mouseleave" + m);
                else { r = k;
                    if (k === "focus" || k === "blur") { e.push(Oa[k] + m);
                        k += m } else k = (Oa[k] || k) + m;
                    b === "live" ? B.each(function() { c.event.add(this, L(k, y), { data: g, selector: y, handler: f, origType: k, origHandler: f, preType: r }) }) : B.unbind(L(k, y), f) } }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
        function(a, b) { c.fn[b] = function(e) {
                return e ? this.bind(b, e) : this.trigger(b) };
            if (c.attrFn) c.attrFn[b] = true });
    p.attachEvent && !p.addEventListener && p.attachEvent("onunload", function() {
        for (var a in c.cache)
            if (c.cache[a].handle) try { c.event.remove(c.cache[a].handle.elem) } catch (b) {} });
    (function() {
        function a(h) {
            for (var i = "", n, q = 0; h[q]; q++) { n = h[q];
                if (n.nodeType === 3 || n.nodeType === 4) i += n.nodeValue;
                else if (n.nodeType !== 8) i += a(n.childNodes) }
            return i }

        function b(h, i, n, q, x, w) {
            x = 0;
            for (var C = q.length; x < C; x++) {
                var A = q[x];
                if (A) { A = A[h];
                    for (var E = false; A;) {
                        if (A.sizcache === n) { E = q[A.sizset];
                            break }
                        if (A.nodeType === 1 && !w) { A.sizcache = n;
                            A.sizset = x }
                        if (A.nodeName.toLowerCase() === i) { E = A;
                            break }
                        A = A[h] }
                    q[x] = E }
            }
        }

        function e(h, i, n, q, x, w) { x = 0;
            for (var C = q.length; x < C; x++) {
                var A = q[x];
                if (A) { A = A[h];
                    for (var E = false; A;) {
                        if (A.sizcache === n) { E = q[A.sizset];
                            break }
                        if (A.nodeType === 1) {
                            if (!w) { A.sizcache = n;
                                A.sizset = x }
                            if (typeof i !== "string") {
                                if (A === i) { E = true;
                                    break } } else if (m.filter(i, [A]).length > 0) { E = A;
                                break } }
                        A = A[h] }
                    q[x] = E } } }
        var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            f = 0,
            l = Object.prototype.toString,
            k = false,
            s = true;
        [0, 0].sort(function() { s = false;
            return 0 });
        var m = function(h, i, n, q) {
            n = n || [];
            var x = i = i || v;
            if (i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!h || typeof h !== "string") return n;
            for (var w = [], C, A, E, ja, X = true, ba = D(i), Y = h;
                (g.exec(""), C = g.exec(Y)) !== null;) { Y = C[3];
                w.push(C[1]);
                if (C[2]) { ja = C[3];
                    break } }
            if (w.length > 1 && y.exec(h))
                if (w.length === 2 && r.relative[w[0]]) A = wa(w[0] + w[1], i);
                else
                    for (A = r.relative[w[0]] ? [i] : m(w.shift(), i); w.length;) {
                        h = w.shift();
                        if (r.relative[h]) h += w.shift();
                        A = wa(h, A)
                    } else {
                        if (!q && w.length > 1 && i.nodeType === 9 && !ba && r.match.ID.test(w[0]) && !r.match.ID.test(w[w.length - 1])) { C = m.find(w.shift(), i, ba);
                            i = C.expr ? m.filter(C.expr, C.set)[0] : C.set[0] }
                        if (i) { C = q ? { expr: w.pop(), set: F(q) } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && i.parentNode ? i.parentNode : i, ba);
                            A = C.expr ? m.filter(C.expr, C.set) : C.set;
                            if (w.length > 0) E = F(A);
                            else X = false;
                            for (; w.length;) {
                                var O = w.pop();
                                C = O;
                                if (r.relative[O]) C = w.pop();
                                else O = "";
                                if (C == null) C = i;
                                r.relative[O](E, C, ba) } } else E = [] }
                E || (E = A);
            E || m.error(O || h);
            if (l.call(E) === "[object Array]")
                if (X)
                    if (i && i.nodeType === 1)
                        for (h = 0; E[h] != null; h++) {
                            if (E[h] && (E[h] === true || E[h].nodeType === 1 && P(i, E[h]))) n.push(A[h]) } else
                            for (h = 0; E[h] != null; h++) E[h] && E[h].nodeType === 1 && n.push(A[h]);
                    else n.push.apply(n, E);
            else F(E, n);
            if (ja) { m(ja, x, n, q);
                m.uniqueSort(n) }
            return n
        };
        m.uniqueSort = function(h) {
            if (H) { k = s;
                h.sort(H);
                if (k)
                    for (var i = 1; i < h.length; i++) h[i] === h[i - 1] && h.splice(i--, 1) }
            return h };
        m.matches = function(h, i) {
            return m(h, null, null, i) };
        m.find = function(h, i, n) {
            var q,
                x;
            if (!h) return [];
            for (var w = 0, C = r.order.length; w < C; w++) {
                var A = r.order[w];
                if (x = r.leftMatch[A].exec(h)) {
                    var E = x[1];
                    x.splice(1, 1);
                    if (E.substr(E.length - 1) !== "\\") { x[1] = (x[1] || "").replace(/\\/g, "");
                        q = r.find[A](x, i, n);
                        if (q != null) { h = h.replace(r.match[A], "");
                            break } } } }
            q || (q = i.getElementsByTagName("*"));
            return { set: q, expr: h }
        };
        m.filter = function(h, i, n, q) {
            for (var x = h, w = [], C = i, A, E, ja = i && i[0] && D(i[0]); h && i.length;) {
                for (var X in r.filter)
                    if ((A = r.leftMatch[X].exec(h)) != null && A[2]) {
                        var ba = r.filter[X],
                            Y, O;
                        O = A[1];
                        E = false;
                        A.splice(1, 1);
                        if (O.substr(O.length - 1) !== "\\") {
                            if (C === w) w = [];
                            if (r.preFilter[X])
                                if (A = r.preFilter[X](A, C, n, w, q, ja)) {
                                    if (A === true) continue } else E = Y = true;
                            if (A)
                                for (var la = 0;
                                    (O = C[la]) != null; la++)
                                    if (O) { Y = ba(O, A, la, C);
                                        var Pa = q ^ !!Y;
                                        if (n && Y != null)
                                            if (Pa) E = true;
                                            else C[la] = false;
                                        else if (Pa) { w.push(O);
                                            E = true } }
                            if (Y !== j) { n || (C = w);
                                h = h.replace(r.match[X], "");
                                if (!E) return [];
                                break } }
                    }
                if (h === x)
                    if (E == null) m.error(h);
                    else break;
                x = h
            }
            return C
        };
        m.error = function(h) {
            throw "Syntax error, unrecognized expression: " + h; };
        var r = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: { ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ },
                leftMatch: {},
                attrMap: { "class": "className", "for": "htmlFor" },
                attrHandle: { href: function(h) {
                        return h.getAttribute("href") } },
                relative: {
                    "+": function(h, i) {
                        var n = typeof i === "string",
                            q = n && !/\W/.test(i);
                        n = n && !q;
                        if (q) i = i.toLowerCase();
                        q = 0;
                        for (var x = h.length, w; q < x; q++)
                            if (w = h[q]) {
                                for (;
                                    (w = w.previousSibling) && w.nodeType !== 1;);
                                h[q] = n || w && w.nodeName.toLowerCase() === i ? w || false : w === i }
                        n && m.filter(i, h, true) },
                    ">": function(h, i) {
                        var n = typeof i === "string";
                        if (n && !/\W/.test(i)) {
                            i = i.toLowerCase();
                            for (var q = 0, x = h.length; q < x; q++) {
                                var w = h[q];
                                if (w) { n = w.parentNode;
                                    h[q] = n.nodeName.toLowerCase() === i ? n : false }
                            }
                        } else { q = 0;
                            for (x = h.length; q < x; q++)
                                if (w = h[q]) h[q] = n ? w.parentNode : w.parentNode === i;
                            n && m.filter(i, h, true) }
                    },
                    "": function(h, i, n) {
                        var q = f++,
                            x = e;
                        if (typeof i === "string" && !/\W/.test(i)) {
                            var w = i = i.toLowerCase();
                            x = b }
                        x("parentNode", i, q, h, w, n) },
                    "~": function(h, i, n) {
                        var q = f++,
                            x = e;
                        if (typeof i === "string" && !/\W/.test(i)) {
                            var w = i = i.toLowerCase();
                            x = b }
                        x("previousSibling", i, q, h, w, n) }
                },
                find: {
                    ID: function(h, i, n) {
                        if (typeof i.getElementById !== "undefined" && !n) return (h =
                            i.getElementById(h[1])) ? [h] : []
                    },
                    NAME: function(h, i) {
                        if (typeof i.getElementsByName !== "undefined") {
                            var n = [];
                            i = i.getElementsByName(h[1]);
                            for (var q = 0, x = i.length; q < x; q++) i[q].getAttribute("name") === h[1] && n.push(i[q]);
                            return n.length === 0 ? null : n } },
                    TAG: function(h, i) {
                        return i.getElementsByTagName(h[1]) }
                },
                preFilter: {
                    CLASS: function(h, i, n, q, x, w) {
                        h = " " + h[1].replace(/\\/g, "") + " ";
                        if (w) return h;
                        w = 0;
                        for (var C;
                            (C = i[w]) != null; w++)
                            if (C)
                                if (x ^ (C.className && (" " + C.className + " ").replace(/[\t\n]/g, " ").indexOf(h) >= 0)) n ||
                                    q.push(C);
                                else if (n) i[w] = false;
                        return false
                    },
                    ID: function(h) {
                        return h[1].replace(/\\/g, "") },
                    TAG: function(h) {
                        return h[1].toLowerCase() },
                    CHILD: function(h) {
                        if (h[1] === "nth") {
                            var i = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(h[2] === "even" && "2n" || h[2] === "odd" && "2n+1" || !/\D/.test(h[2]) && "0n+" + h[2] || h[2]);
                            h[2] = i[1] + (i[2] || 1) - 0;
                            h[3] = i[3] - 0 }
                        h[0] = f++;
                        return h },
                    ATTR: function(h, i, n, q, x, w) { i = h[1].replace(/\\/g, "");
                        if (!w && r.attrMap[i]) h[1] = r.attrMap[i];
                        if (h[2] === "~=") h[4] = " " + h[4] + " ";
                        return h },
                    PSEUDO: function(h, i, n, q, x) {
                        if (h[1] ===
                            "not")
                            if ((g.exec(h[3]) || "").length > 1 || /^\w/.test(h[3])) h[3] = m(h[3], null, null, i);
                            else { h = m.filter(h[3], i, n, true ^ x);
                                n || q.push.apply(q, h);
                                return false }
                        else if (r.match.POS.test(h[0]) || r.match.CHILD.test(h[0])) return true;
                        return h
                    },
                    POS: function(h) { h.unshift(true);
                        return h }
                },
                filters: {
                    enabled: function(h) {
                        return h.disabled === false && h.type !== "hidden" },
                    disabled: function(h) {
                        return h.disabled === true },
                    checked: function(h) {
                        return h.checked === true },
                    selected: function(h) {
                        return h.selected === true },
                    parent: function(h) {
                        return !!h.firstChild },
                    empty: function(h) {
                        return !h.firstChild },
                    has: function(h, i, n) {
                        return !!m(n[3], h).length },
                    header: function(h) {
                        return /h\d/i.test(h.nodeName) },
                    text: function(h) {
                        return "text" === h.type },
                    radio: function(h) {
                        return "radio" === h.type },
                    checkbox: function(h) {
                        return "checkbox" === h.type },
                    file: function(h) {
                        return "file" === h.type },
                    password: function(h) {
                        return "password" === h.type },
                    submit: function(h) {
                        return "submit" === h.type },
                    image: function(h) {
                        return "image" === h.type },
                    reset: function(h) {
                        return "reset" === h.type },
                    button: function(h) {
                        return "button" ===
                            h.type || h.nodeName.toLowerCase() === "button"
                    },
                    input: function(h) {
                        return /input|select|textarea|button/i.test(h.nodeName) }
                },
                setFilters: { first: function(h, i) {
                        return i === 0 }, last: function(h, i, n, q) {
                        return i === q.length - 1 }, even: function(h, i) {
                        return i % 2 === 0 }, odd: function(h, i) {
                        return i % 2 === 1 }, lt: function(h, i, n) {
                        return i < n[3] - 0 }, gt: function(h, i, n) {
                        return i > n[3] - 0 }, nth: function(h, i, n) {
                        return n[3] - 0 === i }, eq: function(h, i, n) {
                        return n[3] - 0 === i } },
                filter: {
                    PSEUDO: function(h, i, n, q) {
                        var x = i[1],
                            w = r.filters[x];
                        if (w) return w(h,
                            n, i, q);
                        else if (x === "contains") return (h.textContent || h.innerText || a([h]) || "").indexOf(i[3]) >= 0;
                        else if (x === "not") { i = i[3];
                            n = 0;
                            for (q = i.length; n < q; n++)
                                if (i[n] === h) return false;
                            return true } else m.error("Syntax error, unrecognized expression: " + x)
                    },
                    CHILD: function(h, i) {
                        var n = i[1],
                            q = h;
                        switch (n) {
                            case "only":
                            case "first":
                                for (; q = q.previousSibling;)
                                    if (q.nodeType === 1) return false;
                                if (n === "first") return true;
                                q = h;
                            case "last":
                                for (; q = q.nextSibling;)
                                    if (q.nodeType === 1) return false;
                                return true;
                            case "nth":
                                n = i[2];
                                var x =
                                    i[3];
                                if (n === 1 && x === 0) return true;
                                i = i[0];
                                var w = h.parentNode;
                                if (w && (w.sizcache !== i || !h.nodeIndex)) {
                                    var C = 0;
                                    for (q = w.firstChild; q; q = q.nextSibling)
                                        if (q.nodeType === 1) q.nodeIndex = ++C;
                                    w.sizcache = i }
                                h = h.nodeIndex - x;
                                return n === 0 ? h === 0 : h % n === 0 && h / n >= 0
                        }
                    },
                    ID: function(h, i) {
                        return h.nodeType === 1 && h.getAttribute("id") === i },
                    TAG: function(h, i) {
                        return i === "*" && h.nodeType === 1 || h.nodeName.toLowerCase() === i },
                    CLASS: function(h, i) {
                        return (" " + (h.className || h.getAttribute("class")) + " ").indexOf(i) > -1 },
                    ATTR: function(h, i) {
                        var n =
                            i[1];
                        h = r.attrHandle[n] ? r.attrHandle[n](h) : h[n] != null ? h[n] : h.getAttribute(n);
                        n = h + "";
                        var q = i[2];
                        i = i[4];
                        return h == null ? q === "!=" : q === "=" ? n === i : q === "*=" ? n.indexOf(i) >= 0 : q === "~=" ? (" " + n + " ").indexOf(i) >= 0 : !i ? n && h !== false : q === "!=" ? n !== i : q === "^=" ? n.indexOf(i) === 0 : q === "$=" ? n.substr(n.length - i.length) === i : q === "|=" ? n === i || n.substr(0, i.length + 1) === i + "-" : false
                    },
                    POS: function(h, i, n, q) {
                        var x = r.setFilters[i[2]];
                        if (x) return x(h, n, i, q) }
                }
            },
            y = r.match.POS;
        for (var B in r.match) {
            r.match[B] = new RegExp(r.match[B].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            r.leftMatch[B] = new RegExp(/(^(?:.|\r|\n)*?)/.source + r.match[B].source.replace(/\\(\d+)/g, function(h, i) {
                return "\\" + (i - 0 + 1) }))
        }
        var F = function(h, i) { h = Array.prototype.slice.call(h, 0);
            if (i) { i.push.apply(i, h);
                return i }
            return h };
        try { Array.prototype.slice.call(v.documentElement.childNodes, 0) } catch (I) { F = function(h, i) { i = i || [];
                if (l.call(h) === "[object Array]") Array.prototype.push.apply(i, h);
                else if (typeof h.length === "number")
                    for (var n = 0, q = h.length; n < q; n++) i.push(h[n]);
                else
                    for (n = 0; h[n]; n++) i.push(h[n]);
                return i } }
        var H;
        if (v.documentElement.compareDocumentPosition) H = function(h, i) {
            if (!h.compareDocumentPosition || !i.compareDocumentPosition) {
                if (h == i) k = true;
                return h.compareDocumentPosition ? -1 : 1 }
            h = h.compareDocumentPosition(i) & 4 ? -1 : h === i ? 0 : 1;
            if (h === 0) k = true;
            return h };
        else if ("sourceIndex" in v.documentElement) H = function(h, i) {
            if (!h.sourceIndex || !i.sourceIndex) {
                if (h == i) k = true;
                return h.sourceIndex ? -1 : 1 }
            h = h.sourceIndex - i.sourceIndex;
            if (h === 0) k = true;
            return h };
        else if (v.createRange) H = function(h, i) {
            if (!h.ownerDocument || !i.ownerDocument) {
                if (h ==
                    i) k = true;
                return h.ownerDocument ? -1 : 1
            }
            var n = h.ownerDocument.createRange(),
                q = i.ownerDocument.createRange();
            n.setStart(h, 0);
            n.setEnd(h, 0);
            q.setStart(i, 0);
            q.setEnd(i, 0);
            h = n.compareBoundaryPoints(Range.START_TO_END, q);
            if (h === 0) k = true;
            return h
        };
        (function() {
            var h = v.createElement("div"),
                i = "script" + (new Date).getTime();
            h.innerHTML = "<a name='" + i + "'/>";
            var n = v.documentElement;
            n.insertBefore(h, n.firstChild);
            if (v.getElementById(i)) {
                r.find.ID = function(q, x, w) {
                    if (typeof x.getElementById !== "undefined" && !w) return (x =
                        x.getElementById(q[1])) ? x.id === q[1] || typeof x.getAttributeNode !== "undefined" && x.getAttributeNode("id").nodeValue === q[1] ? [x] : j : []
                };
                r.filter.ID = function(q, x) {
                    var w = typeof q.getAttributeNode !== "undefined" && q.getAttributeNode("id");
                    return q.nodeType === 1 && w && w.nodeValue === x }
            }
            n.removeChild(h);
            n = h = null
        })();
        (function() {
            var h = v.createElement("div");
            h.appendChild(v.createComment(""));
            if (h.getElementsByTagName("*").length > 0) r.find.TAG = function(i, n) {
                n = n.getElementsByTagName(i[1]);
                if (i[1] === "*") {
                    i = [];
                    for (var q =
                            0; n[q]; q++) n[q].nodeType === 1 && i.push(n[q]);
                    n = i
                }
                return n
            };
            h.innerHTML = "<a href='#'></a>";
            if (h.firstChild && typeof h.firstChild.getAttribute !== "undefined" && h.firstChild.getAttribute("href") !== "#") r.attrHandle.href = function(i) {
                return i.getAttribute("href", 2) };
            h = null
        })();
        v.querySelectorAll && function() {
            var h = m,
                i = v.createElement("div");
            i.innerHTML = "<p class='TEST'></p>";
            if (!(i.querySelectorAll && i.querySelectorAll(".TEST").length === 0)) {
                m = function(q, x, w, C) {
                    x = x || v;
                    if (!C && x.nodeType === 9 && !D(x)) try {
                        return F(x.querySelectorAll(q),
                            w)
                    } catch (A) {}
                    return h(q, x, w, C)
                };
                for (var n in h) m[n] = h[n];
                i = null
            }
        }();
        (function() {
            var h = v.createElement("div");
            h.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!h.getElementsByClassName || h.getElementsByClassName("e").length === 0)) { h.lastChild.className = "e";
                if (h.getElementsByClassName("e").length !== 1) { r.order.splice(1, 0, "CLASS");
                    r.find.CLASS = function(i, n, q) {
                        if (typeof n.getElementsByClassName !== "undefined" && !q) return n.getElementsByClassName(i[1]) };
                    h = null } } })();
        var P = v.compareDocumentPosition ?
            function(h, i) {
                return !!(h.compareDocumentPosition(i) & 16) } : function(h, i) {
                return h !== i && (h.contains ? h.contains(i) : true) },
            D = function(h) {
                return (h = (h ? h.ownerDocument || h : 0).documentElement) ? h.nodeName !== "HTML" : false },
            wa = function(h, i) {
                var n = [],
                    q = "",
                    x;
                for (i = i.nodeType ? [i] : i; x = r.match.PSEUDO.exec(h);) { q += x[0];
                    h = h.replace(r.match.PSEUDO, "") }
                h = r.relative[h] ? h + "*" : h;
                x = 0;
                for (var w = i.length; x < w; x++) m(h, i[x], n);
                return m.filter(q, n) };
        c.find = m;
        c.expr = m.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = m.uniqueSort;
        c.text =
            a;
        c.isXMLDoc = D;
        c.contains = P
    })();
    var fb = /Until$/,
        gb = /^(?:parents|prevUntil|prevAll)/,
        hb = /,/;
    ia = Array.prototype.slice;
    var Qa = function(a, b, e) {
        if (c.isFunction(b)) return c.grep(a, function(f, l) {
            return !!b.call(f, l, f) === e });
        else if (b.nodeType) return c.grep(a, function(f) {
            return f === b === e });
        else if (typeof b === "string") {
            var g = c.grep(a, function(f) {
                return f.nodeType === 1 });
            if (M.test(b)) return c.filter(b, g, !e);
            else b = c.filter(b, g) }
        return c.grep(a, function(f) {
            return c.inArray(f, b) >= 0 === e }) };
    c.fn.extend({
        find: function(a) {
            for (var b =
                    this.pushStack("", "find", a), e = 0, g = 0, f = this.length; g < f; g++) { e = b.length;
                c.find(a, this[g], b);
                if (g > 0)
                    for (var l = e; l < b.length; l++)
                        for (var k = 0; k < e; k++)
                            if (b[k] === b[l]) { b.splice(l--, 1);
                                break } }
            return b
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var e = 0, g = b.length; e < g; e++)
                    if (c.contains(this, b[e])) return true }) },
        not: function(a) {
            return this.pushStack(Qa(this, a, false), "not", a) },
        filter: function(a) {
            return this.pushStack(Qa(this, a, true), "filter", a) },
        is: function(a) {
            return !!a && c.filter(a, this).length >
                0
        },
        closest: function(a, b) {
            if (c.isArray(a)) {
                var e = [],
                    g = this[0],
                    f, l = {},
                    k;
                if (g && a.length) { f = 0;
                    for (var s = a.length; f < s; f++) { k = a[f];
                        l[k] || (l[k] = c.expr.match.POS.test(k) ? c(k, b || this.context) : k) }
                    for (; g && g.ownerDocument && g !== b;) {
                        for (k in l) { f = l[k];
                            if (f.jquery ? f.index(g) > -1 : c(g).is(f)) { e.push({ selector: k, elem: g });
                                delete l[k] } }
                        g = g.parentNode } }
                return e }
            var m = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
            return this.map(function(r, y) {
                for (; y && y.ownerDocument && y !== b;) {
                    if (m ? m.index(y) > -1 : c(y).is(a)) return y;
                    y = y.parentNode
                }
                return null
            })
        },
        index: function(a) {
            if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this) },
        add: function(a, b) { a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
            b = c.merge(this.get(), a);
            return this.pushStack(Z(a[0]) || Z(b[0]) ? b : c.unique(b)) },
        andSelf: function() {
            return this.add(this.prevObject) }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null },
        parents: function(a) {
            return c.dir(a, "parentNode") },
        parentsUntil: function(a, b, e) {
            return c.dir(a, "parentNode", e) },
        next: function(a) {
            return c.nth(a, 2, "nextSibling") },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling") },
        nextAll: function(a) {
            return c.dir(a, "nextSibling") },
        prevAll: function(a) {
            return c.dir(a, "previousSibling") },
        nextUntil: function(a, b, e) {
            return c.dir(a, "nextSibling", e) },
        prevUntil: function(a, b, e) {
            return c.dir(a, "previousSibling", e) },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a) },
        children: function(a) {
            return c.sibling(a.firstChild) },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes) }
    }, function(a, b) { c.fn[a] = function(e, g) {
            var f = c.map(this, b, e);
            fb.test(a) || (g = e);
            if (g && typeof g === "string") f = c.filter(g, f);
            f = this.length > 1 ? c.unique(f) : f;
            if ((this.length > 1 || hb.test(g)) && gb.test(a)) f = f.reverse();
            return this.pushStack(f, a, ia.call(arguments).join(",")) } });
    c.extend({
        filter: function(a, b, e) {
            if (e) a = ":not(" + a + ")";
            return c.find.matches(a, b) },
        dir: function(a, b, e) {
            var g = [];
            for (a =
                a[b]; a && a.nodeType !== 9 && (e === j || a.nodeType !== 1 || !c(a).is(e));) { a.nodeType === 1 && g.push(a);
                a = a[b] }
            return g
        },
        nth: function(a, b, e) { b = b || 1;
            for (var g = 0; a; a = a[e])
                if (a.nodeType === 1 && ++g === b) break;
            return a },
        sibling: function(a, b) {
            for (var e = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && e.push(a);
            return e }
    });
    var Ra = / jQuery\d+="(?:\d+|null)"/g,
        ma = /^\s+/,
        Sa = /(<([\w:]+)[^>]*?)\/>/g,
        ib = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
        Ta = /<([\w:]+)/,
        jb = /<tbody/i,
        kb = /<|&#?\w+;/,
        Ca = /<script|<object|<embed|<option|<style/i,
        Da = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ua = function(a, b, e) {
            return ib.test(e) ? a : b + "></" + e + ">" },
        Q = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] };
    Q.optgroup = Q.option;
    Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead;
    Q.th = Q.td;
    if (!c.support.htmlSerialize) Q._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                var e = c(this);
                e.text(a.call(this, b, e.text())) });
            if (typeof a !== "object" && a !== j) return this.empty().append((this[0] && this[0].ownerDocument || v).createTextNode(a));
            return c.text(this) },
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(e) { c(this).wrapAll(a.call(this, e)) });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var e =
                            this; e.firstChild && e.firstChild.nodeType === 1;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (c.isFunction(a)) return this.each(function(b) { c(this).wrapInner(a.call(this, b)) });
            return this.each(function() {
                var b = c(this),
                    e = b.contents();
                e.length ? e.wrapAll(a) : b.append(a) }) },
        wrap: function(a) {
            return this.each(function() { c(this).wrapAll(a) }) },
        unwrap: function() {
            return this.parent().each(function() { c.nodeName(this, "body") || c(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments,
                true,
                function(a) { this.nodeType === 1 && this.appendChild(a) })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(a) { this.nodeType === 1 && this.insertBefore(a, this.firstChild) }) },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(b) { this.parentNode.insertBefore(b, this) });
            else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments) } },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments,
                false,
                function(b) { this.parentNode.insertBefore(b, this.nextSibling) });
            else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a }
        },
        remove: function(a, b) {
            for (var e = 0, g;
                (g = this[e]) != null; e++)
                if (!a || c.filter(a, [g]).length) {
                    if (!b && g.nodeType === 1) { c.cleanData(g.getElementsByTagName("*"));
                        c.cleanData([g]) }
                    g.parentNode && g.parentNode.removeChild(g) }
            return this },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++)
                for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(a) {
            var b = this.map(function() {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var e = this.outerHTML,
                        g = this.ownerDocument;
                    if (!e) { e = g.createElement("div");
                        e.appendChild(this.cloneNode(true));
                        e = e.innerHTML }
                    return c.clean([e.replace(Ra, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(ma, "")], g)[0] } else return this.cloneNode(true) });
            if (a === true) { ea(this, b);
                ea(this.find("*"), b.find("*")) }
            return b },
        html: function(a) {
            if (a === j) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Ra,
                "") : null;
            else if (typeof a === "string" && !Ca.test(a) && (c.support.leadingWhitespace || !ma.test(a)) && !Q[(Ta.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(Sa, Ua);
                try {
                    for (var b = 0, e = this.length; b < e; b++)
                        if (this[b].nodeType === 1) { c.cleanData(this[b].getElementsByTagName("*"));
                            this[b].innerHTML = a } } catch (g) { this.empty().append(a) } } else c.isFunction(a) ? this.each(function(f) {
                var l = c(this),
                    k = l.html();
                l.empty().append(function() {
                    return a.call(this, f, k) }) }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] &&
                this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function(b) {
                    var e = c(this),
                        g = e.html();
                    e.replaceWith(a.call(this, b, g)) });
                if (typeof a !== "string") a = c(a).detach();
                return this.each(function() {
                    var b = this.nextSibling,
                        e = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(e).append(a) }) } else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a, true) },
        domManip: function(a, b, e) {
            function g(B) {
                return c.nodeName(B, "table") ? B.getElementsByTagName("tbody")[0] ||
                    B.appendChild(B.ownerDocument.createElement("tbody")) : B
            }
            var f, l, k = a[0],
                s = [],
                m;
            if (!c.support.checkClone && arguments.length === 3 && typeof k === "string" && Da.test(k)) return this.each(function() { c(this).domManip(a, b, e, true) });
            if (c.isFunction(k)) return this.each(function(B) {
                var F = c(this);
                a[0] = k.call(this, B, b ? F.html() : j);
                F.domManip(a, b, e) });
            if (this[0]) {
                f = k && k.parentNode;
                f = c.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? { fragment: f } : fa(a, this, s);
                m = f.fragment;
                if (l = m.childNodes.length ===
                    1 ? (m = m.firstChild) : m.firstChild) { b = b && c.nodeName(l, "tr");
                    for (var r = 0, y = this.length; r < y; r++) e.call(b ? g(this[r], l) : this[r], r > 0 || f.cacheable || this.length > 1 ? m.cloneNode(true) : m) }
                s.length && c.each(s, t)
            }
            return this
        }
    });
    c.fragments = {};
    c.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) {
        c.fn[a] = function(e) {
            var g = [];
            e = c(e);
            var f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            } else { f = 0;
                for (var l = e.length; f < l; f++) {
                    var k = (f > 0 ? this.clone(true) : this).get();
                    c.fn[b].apply(c(e[f]), k);
                    g = g.concat(k) }
                return this.pushStack(g, a, e.selector) }
        }
    });
    c.extend({
        clean: function(a, b, e, g) {
            b = b || v;
            if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || v;
            for (var f = [], l = 0, k;
                (k = a[l]) != null; l++) {
                if (typeof k === "number") k += "";
                if (k) {
                    if (typeof k === "string" && !kb.test(k)) k = b.createTextNode(k);
                    else if (typeof k === "string") {
                        k = k.replace(Sa, Ua);
                        var s = (Ta.exec(k) || ["",
                                ""
                            ])[1].toLowerCase(),
                            m = Q[s] || Q._default,
                            r = m[0],
                            y = b.createElement("div");
                        for (y.innerHTML = m[1] + k + m[2]; r--;) y = y.lastChild;
                        if (!c.support.tbody) { r = jb.test(k);
                            s = s === "table" && !r ? y.firstChild && y.firstChild.childNodes : m[1] === "<table>" && !r ? y.childNodes : [];
                            for (m = s.length - 1; m >= 0; --m) c.nodeName(s[m], "tbody") && !s[m].childNodes.length && s[m].parentNode.removeChild(s[m]) }!c.support.leadingWhitespace && ma.test(k) && y.insertBefore(b.createTextNode(ma.exec(k)[0]), y.firstChild);
                        k = y.childNodes
                    }
                    if (k.nodeType) f.push(k);
                    else f =
                        c.merge(f, k)
                }
            }
            if (e)
                for (l = 0; f[l]; l++)
                    if (g && c.nodeName(f[l], "script") && (!f[l].type || f[l].type.toLowerCase() === "text/javascript")) g.push(f[l].parentNode ? f[l].parentNode.removeChild(f[l]) : f[l]);
                    else { f[l].nodeType === 1 && f.splice.apply(f, [l + 1, 0].concat(c.makeArray(f[l].getElementsByTagName("script"))));
                        e.appendChild(f[l]) }
            return f
        },
        cleanData: function(a) {
            for (var b, e, g = c.cache, f = c.event.special, l = c.support.deleteExpando, k = 0, s;
                (s = a[k]) != null; k++)
                if (e = s[c.expando]) {
                    b = g[e];
                    if (b.events)
                        for (var m in b.events) f[m] ?
                            c.event.remove(s, m) : Ka(s, m, b.handle);
                    if (l) delete s[c.expando];
                    else s.removeAttribute && s.removeAttribute(c.expando);
                    delete g[e]
                }
        }
    });
    var lb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        Va = /alpha\([^)]*\)/,
        Wa = /opacity=([^)]*)/,
        xa = /float/i,
        ya = /-([a-z])/ig,
        mb = /([A-Z])/g,
        nb = /^-?\d+(?:px)?$/i,
        ob = /^-?\d/,
        pb = { position: "absolute", visibility: "hidden", display: "block" },
        qb = ["Left", "Right"],
        rb = ["Top", "Bottom"],
        sb = v.defaultView && v.defaultView.getComputedStyle,
        Xa = c.support.cssFloat ? "cssFloat" : "styleFloat",
        za =
        function(a, b) {
            return b.toUpperCase() };
    c.fn.css = function(a, b) {
        return o(this, a, b, true, function(e, g, f) {
            if (f === j) return c.curCSS(e, g);
            if (typeof f === "number" && !lb.test(g)) f += "px";
            c.style(e, g, f) }) };
    c.extend({
        style: function(a, b, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return j;
            if ((b === "width" || b === "height") && parseFloat(e) < 0) e = j;
            var g = a.style || a,
                f = e !== j;
            if (!c.support.opacity && b === "opacity") {
                if (f) {
                    g.zoom = 1;
                    b = parseInt(e, 10) + "" === "NaN" ? "" : "alpha(opacity=" + e * 100 + ")";
                    a = g.filter || c.curCSS(a, "filter") || "";
                    g.filter =
                        Va.test(a) ? a.replace(Va, b) : b
                }
                return g.filter && g.filter.indexOf("opacity=") >= 0 ? parseFloat(Wa.exec(g.filter)[1]) / 100 + "" : ""
            }
            if (xa.test(b)) b = Xa;
            b = b.replace(ya, za);
            if (f) g[b] = e;
            return g[b]
        },
        css: function(a, b, e, g) {
            if (b === "width" || b === "height") {
                var f, l = b === "width" ? qb : rb;

                function k() {
                    f = b === "width" ? a.offsetWidth : a.offsetHeight;
                    g !== "border" && c.each(l, function() {
                        g || (f -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
                        if (g === "margin") f += parseFloat(c.curCSS(a, "margin" + this, true)) || 0;
                        else f -= parseFloat(c.curCSS(a,
                            "border" + this + "Width", true)) || 0
                    })
                }
                a.offsetWidth !== 0 ? k() : c.swap(a, pb, k);
                return Math.max(0, Math.round(f))
            }
            return c.curCSS(a, b, e)
        },
        curCSS: function(a, b, e) {
            var g, f = a.style;
            if (!c.support.opacity && b === "opacity" && a.currentStyle) { g = Wa.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "";
                return g === "" ? "1" : g }
            if (xa.test(b)) b = Xa;
            if (!e && f && f[b]) g = f[b];
            else if (sb) {
                if (xa.test(b)) b = "float";
                b = b.replace(mb, "-$1").toLowerCase();
                f = a.ownerDocument.defaultView;
                if (!f) return null;
                if (a = f.getComputedStyle(a, null)) g =
                    a.getPropertyValue(b);
                if (b === "opacity" && g === "") g = "1"
            } else if (a.currentStyle) { e = b.replace(ya, za);
                g = a.currentStyle[b] || a.currentStyle[e];
                if (!nb.test(g) && ob.test(g)) { b = f.left;
                    var l = a.runtimeStyle.left;
                    a.runtimeStyle.left = a.currentStyle.left;
                    f.left = e === "fontSize" ? "1em" : g || 0;
                    g = f.pixelLeft + "px";
                    f.left = b;
                    a.runtimeStyle.left = l } }
            return g
        },
        swap: function(a, b, e) {
            var g = {};
            for (var f in b) { g[f] = a.style[f];
                a.style[f] = b[f] }
            e.call(a);
            for (f in b) a.style[f] = g[f] }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function(a) {
            var b =
                a.offsetWidth,
                e = a.offsetHeight,
                g = a.nodeName.toLowerCase() === "tr";
            return b === 0 && e === 0 && !g ? true : b > 0 && e > 0 && !g ? false : c.curCSS(a, "display") === "none"
        };
        c.expr.filters.visible = function(a) {
            return !c.expr.filters.hidden(a) }
    }
    var tb = z(),
        ub = /<script(.|\s)*?\/script>/gi,
        vb = /select|textarea/i,
        wb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
        ca = /=\?(&|$)/,
        Aa = /\?/,
        xb = /(\?|&)_=.*?(&|$)/,
        yb = /^(\w+:)?\/\/([^\/?#]+)/,
        zb = /%20/g,
        Ab = c.fn.load;
    c.fn.extend({
        load: function(a, b,
            e) {
            if (typeof a !== "string") return Ab.call(this, a);
            else if (!this.length) return this;
            var g = a.indexOf(" ");
            if (g >= 0) {
                var f = a.slice(g, a.length);
                a = a.slice(0, g) }
            g = "GET";
            if (b)
                if (c.isFunction(b)) { e = b;
                    b = null } else if (typeof b === "object") { b = c.param(b, c.ajaxSettings.traditional);
                g = "POST" }
            var l = this;
            c.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: b,
                complete: function(k, s) {
                    if (s === "success" || s === "notmodified") l.html(f ? c("<div />").append(k.responseText.replace(ub, "")).find(f) : k.responseText);
                    e && l.each(e, [k.responseText,
                        s, k
                    ])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray()) },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? c.makeArray(this.elements) : this }).filter(function() {
                return this.name && !this.disabled && (this.checked || vb.test(this.nodeName) || wb.test(this.type)) }).map(function(a, b) { a = c(this).val();
                return a == null ? null : c.isArray(a) ? c.map(a, function(e) {
                    return { name: b.name, value: e } }) : { name: b.name, value: a } }).get() }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function(a, b) { c.fn[b] = function(e) {
                return this.bind(b, e) } });
    c.extend({
        get: function(a, b, e, g) {
            if (c.isFunction(b)) { g = g || e;
                e = b;
                b = null }
            return c.ajax({ type: "GET", url: a, data: b, success: e, dataType: g }) },
        getScript: function(a, b) {
            return c.get(a, null, b, "script") },
        getJSON: function(a, b, e) {
            return c.get(a, b, e, "json") },
        post: function(a, b, e, g) {
            if (c.isFunction(b)) { g = g || e;
                e = b;
                b = {} }
            return c.ajax({ type: "POST", url: a, data: b, success: e, dataType: g }) },
        ajaxSetup: function(a) { c.extend(c.ajaxSettings, a) },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: p.XMLHttpRequest && (p.location.protocol !== "file:" || !p.ActiveXObject) ? function() {
                return new p.XMLHttpRequest } : function() {
                try {
                    return new p.ActiveXObject("Microsoft.XMLHTTP") } catch (a) {} },
            accepts: { xml: "application/xml, text/xml", html: "text/html", script: "text/javascript, application/javascript", json: "application/json, text/javascript", text: "text/plain", _default: "*/*" }
        },
        lastModified: {},
        etag: {},
        ajax: function(a) {
            function b() {
                f.success &&
                    f.success.call(m, s, k, D);
                f.global && g("ajaxSuccess", [D, f])
            }

            function e() { f.complete && f.complete.call(m, D, k);
                f.global && g("ajaxComplete", [D, f]);
                f.global && !--c.active && c.event.trigger("ajaxStop") }

            function g(x, w) {
                (f.context ? c(f.context) : c.event).trigger(x, w) }
            var f = c.extend(true, {}, c.ajaxSettings, a),
                l, k, s, m = a && a.context || f,
                r = f.type.toUpperCase();
            if (f.data && f.processData && typeof f.data !== "string") f.data = c.param(f.data, f.traditional);
            if (f.dataType === "jsonp") {
                if (r === "GET") ca.test(f.url) || (f.url += (Aa.test(f.url) ?
                    "&" : "?") + (f.jsonp || "callback") + "=?");
                else if (!f.data || !ca.test(f.data)) f.data = (f.data ? f.data + "&" : "") + (f.jsonp || "callback") + "=?";
                f.dataType = "json"
            }
            if (f.dataType === "json" && (f.data && ca.test(f.data) || ca.test(f.url))) { l = f.jsonpCallback || "jsonp" + tb++;
                if (f.data) f.data = (f.data + "").replace(ca, "=" + l + "$1");
                f.url = f.url.replace(ca, "=" + l + "$1");
                f.dataType = "script";
                p[l] = p[l] || function(x) { s = x;
                    b();
                    e();
                    p[l] = j;
                    try { delete p[l] } catch (w) {}
                    F && F.removeChild(I) } }
            if (f.dataType === "script" && f.cache === null) f.cache = false;
            if (f.cache ===
                false && r === "GET") {
                var y = z(),
                    B = f.url.replace(xb, "$1_=" + y + "$2");
                f.url = B + (B === f.url ? (Aa.test(f.url) ? "&" : "?") + "_=" + y : "") }
            if (f.data && r === "GET") f.url += (Aa.test(f.url) ? "&" : "?") + f.data;
            f.global && !c.active++ && c.event.trigger("ajaxStart");
            y = (y = yb.exec(f.url)) && (y[1] && y[1] !== location.protocol || y[2] !== location.host);
            if (f.dataType === "script" && r === "GET" && y) {
                var F = v.getElementsByTagName("head")[0] || v.documentElement,
                    I = v.createElement("script");
                I.src = f.url;
                if (f.scriptCharset) I.charset = f.scriptCharset;
                if (!l) {
                    var H =
                        false;
                    I.onload = I.onreadystatechange = function() {
                        if (!H && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { H = true;
                            b();
                            e();
                            I.onload = I.onreadystatechange = null;
                            F && I.parentNode && F.removeChild(I) } }
                }
                F.insertBefore(I, F.firstChild);
                return j
            }
            var P = false,
                D = f.xhr();
            if (D) {
                f.username ? D.open(r, f.url, f.async, f.username, f.password) : D.open(r, f.url, f.async);
                try {
                    if (f.data || a && a.contentType) D.setRequestHeader("Content-Type", f.contentType);
                    if (f.ifModified) {
                        c.lastModified[f.url] && D.setRequestHeader("If-Modified-Since",
                            c.lastModified[f.url]);
                        c.etag[f.url] && D.setRequestHeader("If-None-Match", c.etag[f.url])
                    }
                    y || D.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    D.setRequestHeader("Accept", f.dataType && f.accepts[f.dataType] ? f.accepts[f.dataType] + ", */*" : f.accepts._default)
                } catch (wa) {}
                if (f.beforeSend && f.beforeSend.call(m, D, f) === false) { f.global && !--c.active && c.event.trigger("ajaxStop");
                    D.abort();
                    return false }
                f.global && g("ajaxSend", [D, f]);
                var h = D.onreadystatechange = function(x) {
                    if (!D || D.readyState === 0 || x === "abort") {
                        P ||
                            e();
                        P = true;
                        if (D) D.onreadystatechange = c.noop
                    } else if (!P && D && (D.readyState === 4 || x === "timeout")) { P = true;
                        D.onreadystatechange = c.noop;
                        k = x === "timeout" ? "timeout" : !c.httpSuccess(D) ? "error" : f.ifModified && c.httpNotModified(D, f.url) ? "notmodified" : "success";
                        var w;
                        if (k === "success") try { s = c.httpData(D, f.dataType, f) } catch (C) { k = "parsererror";
                            w = C }
                        if (k === "success" || k === "notmodified") l || b();
                        else c.handleError(f, D, k, w);
                        e();
                        x === "timeout" && D.abort();
                        if (f.async) D = null }
                };
                try {
                    var i = D.abort;
                    D.abort = function() {
                        D && i.call(D);
                        h("abort")
                    }
                } catch (n) {}
                f.async && f.timeout > 0 && setTimeout(function() { D && !P && h("timeout") }, f.timeout);
                try { D.send(r === "POST" || r === "PUT" || r === "DELETE" ? f.data : null) } catch (q) { c.handleError(f, D, null, q);
                    e() }
                f.async || h();
                return D
            }
        },
        handleError: function(a, b, e, g) {
            if (a.error) a.error.call(a.context || a, b, e, g);
            if (a.global)(a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, g]) },
        active: 0,
        httpSuccess: function(a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status ===
                    1223 || a.status === 0
            } catch (b) {}
            return false
        },
        httpNotModified: function(a, b) {
            var e = a.getResponseHeader("Last-Modified"),
                g = a.getResponseHeader("Etag");
            if (e) c.lastModified[b] = e;
            if (g) c.etag[b] = g;
            return a.status === 304 || a.status === 0 },
        httpData: function(a, b, e) {
            var g = a.getResponseHeader("content-type") || "",
                f = b === "xml" || !b && g.indexOf("xml") >= 0;
            a = f ? a.responseXML : a.responseText;
            f && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (e && e.dataFilter) a = e.dataFilter(a, b);
            if (typeof a === "string")
                if (b ===
                    "json" || !b && g.indexOf("json") >= 0) a = c.parseJSON(a);
                else if (b === "script" || !b && g.indexOf("javascript") >= 0) c.globalEval(a);
            return a
        },
        param: function(a, b) {
            function e(k, s) {
                if (c.isArray(s)) c.each(s, function(m, r) { b || /\[\]$/.test(k) ? g(k, r) : e(k + "[" + (typeof r === "object" || c.isArray(r) ? m : "") + "]", r) });
                else !b && s != null && typeof s === "object" ? c.each(s, function(m, r) { e(k + "[" + m + "]", r) }) : g(k, s) }

            function g(k, s) { s = c.isFunction(s) ? s() : s;
                f[f.length] = encodeURIComponent(k) + "=" + encodeURIComponent(s) }
            var f = [];
            if (b === j) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery) c.each(a, function() { g(this.name, this.value) });
            else
                for (var l in a) e(l, a[l]);
            return f.join("&").replace(zb, "+")
        }
    });
    var Ba = {},
        Bb = /toggle|show|hide/,
        Cb = /^([+-]=)?([\d+-.]+)(.*)$/,
        na, Ea = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    c.fn.extend({
        show: function(a, b) {
            if (a || a === 0) return this.animate(T("show", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var e = c.data(this[a], "olddisplay");
                    this[a].style.display = e || "";
                    if (c.css(this[a], "display") === "none") { e = this[a].nodeName;
                        var g;
                        if (Ba[e]) g = Ba[e];
                        else {
                            var f = c("<" + e + " />").appendTo("body");
                            g = f.css("display");
                            if (g === "none") g = "block";
                            f.remove();
                            Ba[e] = g }
                        c.data(this[a], "olddisplay", g) }
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = c.data(this[a], "olddisplay") || "";
                return this
            }
        },
        hide: function(a, b) {
            if (a || a === 0) return this.animate(T("hide", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var e = c.data(this[a], "olddisplay");
                    !e && e !== "none" && c.data(this[a],
                        "olddisplay", c.css(this[a], "display"))
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function(a, b) {
            var e = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
            else a == null || e ? this.each(function() {
                var g = e ? a : c(this).is(":hidden");
                c(this)[g ? "show" : "hide"]() }) : this.animate(T("toggle", 3), a, b);
            return this },
        fadeTo: function(a, b, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, e) },
        animate: function(a, b, e, g) {
            var f = c.speed(b, e, g);
            if (c.isEmptyObject(a)) return this.each(f.complete);
            return this[f.queue === false ? "each" : "queue"](function() {
                var l = c.extend({}, f),
                    k, s = this.nodeType === 1 && c(this).is(":hidden"),
                    m = this;
                for (k in a) {
                    var r = k.replace(ya, za);
                    if (k !== r) { a[r] = a[k];
                        delete a[k];
                        k = r }
                    if (a[k] === "hide" && s || a[k] === "show" && !s) return l.complete.call(this);
                    if ((k === "height" || k === "width") && this.style) { l.display = c.css(this, "display");
                        l.overflow = this.style.overflow }
                    if (c.isArray(a[k])) {
                        (l.specialEasing =
                            l.specialEasing || {})[k] = a[k][1];
                        a[k] = a[k][0]
                    }
                }
                if (l.overflow != null) this.style.overflow = "hidden";
                l.curAnim = c.extend({}, a);
                c.each(a, function(y, B) {
                    var F = new c.fx(m, l, y);
                    if (Bb.test(B)) F[B === "toggle" ? s ? "show" : "hide" : B](a);
                    else {
                        var I = Cb.exec(B),
                            H = F.cur(true) || 0;
                        if (I) { B = parseFloat(I[2]);
                            var P = I[3] || "px";
                            if (P !== "px") { m.style[y] = (B || 1) + P;
                                H = (B || 1) / F.cur(true) * H;
                                m.style[y] = H + P }
                            if (I[1]) B = (I[1] === "-=" ? -1 : 1) * B + H;
                            F.custom(H, B, P) } else F.custom(H, B, "") } });
                return true
            })
        },
        stop: function(a, b) {
            var e = c.timers;
            a && this.queue([]);
            this.each(function() {
                for (var g = e.length - 1; g >= 0; g--)
                    if (e[g].elem === this) { b && e[g](true);
                        e.splice(g, 1) } });
            b || this.dequeue();
            return this
        }
    });
    c.each({ slideDown: T("show", 1), slideUp: T("hide", 1), slideToggle: T("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" } }, function(a, b) { c.fn[a] = function(e, g) {
            return this.animate(b, e, g) } });
    c.extend({
        speed: function(a, b, e) {
            var g = a && typeof a === "object" ? a : { complete: e || !e && b || c.isFunction(a) && a, duration: a, easing: e && b || b && !c.isFunction(b) && b };
            g.duration = c.fx.off ? 0 : typeof g.duration ===
                "number" ? g.duration : c.fx.speeds[g.duration] || c.fx.speeds._default;
            g.old = g.complete;
            g.complete = function() { g.queue !== false && c(this).dequeue();
                c.isFunction(g.old) && g.old.call(this) };
            return g
        },
        easing: { linear: function(a, b, e, g) {
                return e + g * a }, swing: function(a, b, e, g) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * g + e } },
        timers: [],
        fx: function(a, b, e) { this.options = b;
            this.elem = a;
            this.prop = e;
            if (!b.orig) b.orig = {} }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] ||
                c.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) this.elem.style.display = "block"
        },
        cur: function(a) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a : parseFloat(c.curCSS(this.elem, this.prop)) || 0 },
        custom: function(a, b, e) {
            function g(l) {
                return f.step(l) }
            this.startTime = z();
            this.start = a;
            this.end = b;
            this.unit = e || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var f = this;
            g.elem = this.elem;
            if (g() && c.timers.push(g) && !na) na = setInterval(c.fx.tick, 13)
        },
        show: function() { this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show() },
        hide: function() { this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0) },
        step: function(a) {
            var b = z(),
                e = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now =
                    this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var g in this.options.curAnim)
                    if (this.options.curAnim[g] !== true) e = false;
                if (e) {
                    if (this.options.display != null) { this.elem.style.overflow = this.options.overflow;
                        a = c.data(this.elem, "olddisplay");
                        this.elem.style.display = a ? a : this.options.display;
                        if (c.css(this.elem, "display") === "none") this.elem.style.display = "block" }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show)
                        for (var f in this.options.curAnim) c.style(this.elem,
                            f, this.options.orig[f]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else { f = b - this.startTime;
                this.state = f / this.options.duration;
                a = this.options.easing || (c.easing.swing ? "swing" : "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, f, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update() }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a = c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length ||
                c.fx.stop()
        },
        stop: function() { clearInterval(na);
            na = null },
        speeds: { slow: 600, fast: 200, _default: 400 },
        step: { opacity: function(a) { c.style(a.elem, "opacity", a.now) }, _default: function(a) {
                if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit;
                else a.elem[a.prop] = a.now } }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function(a) {
        return c.grep(c.timers, function(b) {
            return a === b.elem }).length };
    c.fn.offset = "getBoundingClientRect" in
        v.documentElement ? function(a) {
            var b = this[0];
            if (a) return this.each(function(f) { c.offset.setOffset(this, a, f) });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            var e = b.getBoundingClientRect(),
                g = b.ownerDocument;
            b = g.body;
            g = g.documentElement;
            return {
                top: e.top + (self.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop || b.clientTop || 0),
                left: e.left + (self.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft ||
                    0)
            }
        } : function(a) {
            var b = this[0];
            if (a) return this.each(function(y) { c.offset.setOffset(this, a, y) });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            c.offset.initialize();
            var e = b.offsetParent,
                g = b,
                f = b.ownerDocument,
                l, k = f.documentElement,
                s = f.body;
            g = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
            for (var m = b.offsetTop, r = b.offsetLeft;
                (b = b.parentNode) && b !== s && b !== k;) {
                if (c.offset.supportsFixedPosition && g.position === "fixed") break;
                l = f ? f.getComputedStyle(b,
                    null) : b.currentStyle;
                m -= b.scrollTop;
                r -= b.scrollLeft;
                if (b === e) { m += b.offsetTop;
                    r += b.offsetLeft;
                    if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) { m += parseFloat(l.borderTopWidth) || 0;
                        r += parseFloat(l.borderLeftWidth) || 0 }
                    g = e;
                    e = b.offsetParent }
                if (c.offset.subtractsBorderForOverflowNotVisible && l.overflow !== "visible") { m += parseFloat(l.borderTopWidth) || 0;
                    r += parseFloat(l.borderLeftWidth) || 0 }
                g = l
            }
            if (g.position === "relative" || g.position === "static") {
                m += s.offsetTop;
                r += s.offsetLeft
            }
            if (c.offset.supportsFixedPosition && g.position === "fixed") { m += Math.max(k.scrollTop, s.scrollTop);
                r += Math.max(k.scrollLeft, s.scrollLeft) }
            return { top: m, left: r }
        };
    c.offset = {
        initialize: function() {
            var a = v.body,
                b = v.createElement("div"),
                e, g, f, l = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            c.extend(b.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            e = b.firstChild;
            g = e.firstChild;
            f = e.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = g.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = f.offsetTop === 5;
            g.style.position = "fixed";
            g.style.top = "20px";
            this.supportsFixedPosition = g.offsetTop === 20 || g.offsetTop === 15;
            g.style.position = g.style.top = "";
            e.style.overflow = "hidden";
            e.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = g.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== l;
            a.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop,
                e = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) { b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
                e += parseFloat(c.curCSS(a, "marginLeft", true)) || 0 }
            return { top: b, left: e } },
        setOffset: function(a, b, e) {
            if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
            var g = c(a),
                f = g.offset(),
                l = parseInt(c.curCSS(a, "top", true), 10) || 0,
                k = parseInt(c.curCSS(a, "left", true), 10) || 0;
            if (c.isFunction(b)) b = b.call(a,
                e, f);
            e = { top: b.top - f.top + l, left: b.left - f.left + k };
            "using" in b ? b.using.call(a, e) : g.css(e)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                e = this.offset(),
                g = /^body|html$/i.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
            e.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            e.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
            g.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
            g.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
            return {
                top: e.top -
                    g.top,
                left: e.left - g.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || v.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
                return a }) }
    });
    c.each(["Left", "Top"], function(a, b) {
        var e = "scroll" + b;
        c.fn[e] = function(g) {
            var f = this[0],
                l;
            if (!f) return null;
            if (g !== j) return this.each(function() {
                if (l = V(this)) l.scrollTo(!a ? g : c(l).scrollLeft(), a ? g : c(l).scrollTop());
                else this[e] = g });
            else return (l = V(f)) ? "pageXOffset" in l ? l[a ? "pageYOffset" : "pageXOffset"] :
                c.support.boxModel && l.document.documentElement[e] || l.document.body[e] : f[e]
        }
    });
    c.each(["Height", "Width"], function(a, b) {
        var e = b.toLowerCase();
        c.fn["inner" + b] = function() {
            return this[0] ? c.css(this[0], e, false, "padding") : null };
        c.fn["outer" + b] = function(g) {
            return this[0] ? c.css(this[0], e, false, g ? "margin" : "border") : null };
        c.fn[e] = function(g) {
            var f = this[0];
            if (!f) return g == null ? null : this;
            if (c.isFunction(g)) return this.each(function(l) {
                var k = c(this);
                k[e](g.call(this, l, k[e]())) });
            return "scrollTo" in f && f.document ?
                f.document.compatMode === "CSS1Compat" && f.document.documentElement["client" + b] || f.document.body["client" + b] : f.nodeType === 9 ? Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]) : g === j ? c.css(f, e) : this.css(e, typeof g === "string" ? g : g + "px")
        }
    });
    p.jQuery = p.$ = c
})(window);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(p, j, u, t, o) {
        return jQuery.easing[jQuery.easing.def](p, j, u, t, o) },
    easeInQuad: function(p, j, u, t, o) {
        return t * (j /= o) * j + u },
    easeOutQuad: function(p, j, u, t, o) {
        return -t * (j /= o) * (j - 2) + u },
    easeInOutQuad: function(p, j, u, t, o) {
        if ((j /= o / 2) < 1) return t / 2 * j * j + u;
        return -t / 2 * (--j * (j - 2) - 1) + u },
    easeInCubic: function(p, j, u, t, o) {
        return t * (j /= o) * j * j + u },
    easeOutCubic: function(p, j, u, t, o) {
        return t * ((j = j / o - 1) * j * j + 1) + u },
    easeInOutCubic: function(p, j, u, t, o) {
        if ((j /= o / 2) < 1) return t /
            2 * j * j * j + u;
        return t / 2 * ((j -= 2) * j * j + 2) + u
    },
    easeInQuart: function(p, j, u, t, o) {
        return t * (j /= o) * j * j * j + u },
    easeOutQuart: function(p, j, u, t, o) {
        return -t * ((j = j / o - 1) * j * j * j - 1) + u },
    easeInOutQuart: function(p, j, u, t, o) {
        if ((j /= o / 2) < 1) return t / 2 * j * j * j * j + u;
        return -t / 2 * ((j -= 2) * j * j * j - 2) + u },
    easeInQuint: function(p, j, u, t, o) {
        return t * (j /= o) * j * j * j * j + u },
    easeOutQuint: function(p, j, u, t, o) {
        return t * ((j = j / o - 1) * j * j * j * j + 1) + u },
    easeInOutQuint: function(p, j, u, t, o) {
        if ((j /= o / 2) < 1) return t / 2 * j * j * j * j * j + u;
        return t / 2 * ((j -= 2) * j * j * j * j + 2) + u },
    easeInSine: function(p,
        j, u, t, o) {
        return -t * Math.cos(j / o * (Math.PI / 2)) + t + u },
    easeOutSine: function(p, j, u, t, o) {
        return t * Math.sin(j / o * (Math.PI / 2)) + u },
    easeInOutSine: function(p, j, u, t, o) {
        return -t / 2 * (Math.cos(Math.PI * j / o) - 1) + u },
    easeInExpo: function(p, j, u, t, o) {
        return j == 0 ? u : t * Math.pow(2, 10 * (j / o - 1)) + u },
    easeOutExpo: function(p, j, u, t, o) {
        return j == o ? u + t : t * (-Math.pow(2, -10 * j / o) + 1) + u },
    easeInOutExpo: function(p, j, u, t, o) {
        if (j == 0) return u;
        if (j == o) return u + t;
        if ((j /= o / 2) < 1) return t / 2 * Math.pow(2, 10 * (j - 1)) + u;
        return t / 2 * (-Math.pow(2, -10 * --j) + 2) + u },
    easeInCirc: function(p, j, u, t, o) {
        return -t * (Math.sqrt(1 - (j /= o) * j) - 1) + u },
    easeOutCirc: function(p, j, u, t, o) {
        return t * Math.sqrt(1 - (j = j / o - 1) * j) + u },
    easeInOutCirc: function(p, j, u, t, o) {
        if ((j /= o / 2) < 1) return -t / 2 * (Math.sqrt(1 - j * j) - 1) + u;
        return t / 2 * (Math.sqrt(1 - (j -= 2) * j) + 1) + u },
    easeInElastic: function(p, j, u, t, o) { p = 1.70158;
        var z = 0,
            G = t;
        if (j == 0) return u;
        if ((j /= o) == 1) return u + t;
        z || (z = o * 0.3);
        if (G < Math.abs(t)) { G = t;
            p = z / 4 } else p = z / (2 * Math.PI) * Math.asin(t / G);
        return -(G * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * o - p) * 2 * Math.PI / z)) + u },
    easeOutElastic: function(p,
        j, u, t, o) { p = 1.70158;
        var z = 0,
            G = t;
        if (j == 0) return u;
        if ((j /= o) == 1) return u + t;
        z || (z = o * 0.3);
        if (G < Math.abs(t)) { G = t;
            p = z / 4 } else p = z / (2 * Math.PI) * Math.asin(t / G);
        return G * Math.pow(2, -10 * j) * Math.sin((j * o - p) * 2 * Math.PI / z) + t + u },
    easeInOutElastic: function(p, j, u, t, o) {
        p = 1.70158;
        var z = 0,
            G = t;
        if (j == 0) return u;
        if ((j /= o / 2) == 2) return u + t;
        z || (z = o * 0.3 * 1.5);
        if (G < Math.abs(t)) { G = t;
            p = z / 4 } else p = z / (2 * Math.PI) * Math.asin(t / G);
        if (j < 1) return -0.5 * G * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * o - p) * 2 * Math.PI / z) + u;
        return G * Math.pow(2, -10 * (j -= 1)) * Math.sin((j *
            o - p) * 2 * Math.PI / z) * 0.5 + t + u
    },
    easeInBack: function(p, j, u, t, o, z) {
        if (z == undefined) z = 1.70158;
        return t * (j /= o) * j * ((z + 1) * j - z) + u },
    easeOutBack: function(p, j, u, t, o, z) {
        if (z == undefined) z = 1.70158;
        return t * ((j = j / o - 1) * j * ((z + 1) * j + z) + 1) + u },
    easeInOutBack: function(p, j, u, t, o, z) {
        if (z == undefined) z = 1.70158;
        if ((j /= o / 2) < 1) return t / 2 * j * j * (((z *= 1.525) + 1) * j - z) + u;
        return t / 2 * ((j -= 2) * j * (((z *= 1.525) + 1) * j + z) + 2) + u },
    easeInBounce: function(p, j, u, t, o) {
        return t - jQuery.easing.easeOutBounce(p, o - j, 0, t, o) + u },
    easeOutBounce: function(p, j, u, t, o) {
        return (j /=
            o) < 1 / 2.75 ? t * 7.5625 * j * j + u : j < 2 / 2.75 ? t * (7.5625 * (j -= 1.5 / 2.75) * j + 0.75) + u : j < 2.5 / 2.75 ? t * (7.5625 * (j -= 2.25 / 2.75) * j + 0.9375) + u : t * (7.5625 * (j -= 2.625 / 2.75) * j + 0.984375) + u
    },
    easeInOutBounce: function(p, j, u, t, o) {
        if (j < o / 2) return jQuery.easing.easeInBounce(p, j * 2, 0, t, o) * 0.5 + u;
        return jQuery.easing.easeOutBounce(p, j * 2 - o, 0, t, o) * 0.5 + t * 0.5 + u }
});
(function(p) {
    function j(t) {
        for (var o = ["transform", "WebkitTransform", "MozTransform"], z; z = o.shift();)
            if (typeof t.style[z] != "undefined") return z;
        return "transform" }
    var u = p.fn.css;
    p.fn.css = function(t) {
        if (typeof p.props.transform == "undefined" && (t == "transform" || typeof t == "object" && typeof t.transform != "undefined")) p.props.transform = j(this.get(0));
        if (t == "transform") t = p.props.transform;
        return u.apply(this, arguments) } })(jQuery);
(function(p) {
    var j = "deg";
    p.fn.rotate = function(o) {
        var z = p(this).css("transform") || "none";
        if (typeof o == "undefined") {
            if (z)
                if ((o = z.match(/rotate\(([^)]+)\)/)) && o[1]) return o[1];
            return 0 }
        if (o = o.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/)) {
            if (o[3]) j = o[3];
            p(this).css("transform", z.replace(/none|rotate\([^)]*\)/, "") + "rotate(" + o[1] + j + ")") } };
    p.fn.scale = function(o) {
        var z = p(this).css("transform");
        if (typeof o == "undefined") {
            if (z)
                if ((o = z.match(/scale\(([^)]+)\)/)) && o[1]) return o[1];
            return 1 }
        p(this).css("transform",
            z.replace(/none|scale\([^)]*\)/, "") + "scale(" + o + ")")
    };
    var u = p.fx.prototype.cur;
    p.fx.prototype.cur = function() {
        if (this.prop == "rotate") return parseFloat(p(this.elem).rotate());
        else if (this.prop == "scale") return parseFloat(p(this.elem).scale());
        return u.apply(this, arguments) };
    p.fx.step.rotate = function(o) { p(o.elem).rotate(o.now + j) };
    p.fx.step.scale = function(o) { p(o.elem).scale(o.now) };
    var t = p.fn.animate;
    p.fn.animate = function(o) {
        if (typeof o.rotate != "undefined") {
            var z = o.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (z && z[5]) j = z[5];
            o.rotate = z[1]
        }
        return t.apply(this, arguments)
    }
})(jQuery);
(function(p) {
    p.fn.quicksand = function(j, u, t) {
        var o = { duration: 750, easing: "swing", attribute: "data-id", adjustHeight: "auto", useScaling: true, enhancement: function() {}, selector: "> *" };
        p.extend(o, u);
        if (p.browser.msie || typeof p.fn.scale == "undefined") o.useScaling = false;
        var z;
        if (typeof u == "function") z = u;
        else if (typeof(t == "function")) z = t;
        return this.each(function(G) {
            var U, R = [],
                S = p(j).clone(),
                L = p(this);
            G = p(this).css("height");
            var Z, ea = false,
                fa = p(L).offset(),
                T = [],
                V = p(this).find(o.selector);
            if (p.browser.msie && p.browser.version.substr(0,
                    1) < 7) L.html("").append(S);
            else {
                var c = 0,
                    oa = function() {
                        if (!c) { L.html(N.html());
                            typeof z == "function" && z.call(this);
                            ea && L.css("height", Z);
                            o.enhancement(L);
                            c = 1 } },
                    J = L.offsetParent(),
                    v = J.offset();
                if (J.css("position") == "relative") {
                    if (J.get(0).nodeName.toLowerCase() != "body") { v.top += parseFloat(J.css("border-top-width"));
                        v.left += parseFloat(J.css("border-left-width")) } } else {
                    v.top -= parseFloat(J.css("border-top-width"));
                    v.left -= parseFloat(J.css("border-left-width"));
                    v.top -= parseFloat(J.css("margin-top"));
                    v.left -=
                        parseFloat(J.css("margin-left"))
                }
                L.css("height", p(this).height());
                V.each(function(K) { T[K] = p(this).offset() });
                p(this).stop();
                V.each(function(K) { p(this).stop();
                    var M = p(this).get(0);
                    M.style.position = "absolute";
                    M.style.margin = "0";
                    M.style.top = T[K].top - parseFloat(M.style.marginTop) - v.top + "px";
                    M.style.left = T[K].left - parseFloat(M.style.marginLeft) - v.left + "px" });
                var N = p(L).clone();
                J = N.get(0);
                J.innerHTML = "";
                J.setAttribute("id", "");
                J.style.height = "auto";
                J.style.width = L.width() + "px";
                N.append(S);
                N.insertBefore(L);
                N.css("opacity", 0);
                J.style.zIndex = -1;
                J.style.margin = "0";
                J.style.position = "absolute";
                J.style.top = fa.top - v.top + "px";
                J.style.left = fa.left - v.left + "px";
                if (o.adjustHeight === "dynamic") L.animate({ height: N.height() }, o.duration, o.easing);
                else if (o.adjustHeight === "auto") { Z = N.height();
                    if (parseFloat(G) < parseFloat(Z)) L.css("height", Z);
                    else ea = true }
                V.each(function() {
                    var K = [];
                    if (typeof o.attribute == "function") { U = o.attribute(p(this));
                        S.each(function() {
                            if (o.attribute(this) == U) { K = p(this);
                                return false } }) } else K = S.filter("[" +
                        o.attribute + "=" + p(this).attr(o.attribute) + "]");
                    if (K.length) o.useScaling ? R.push({ element: p(this), animation: { top: K.offset().top - v.top, left: K.offset().left - v.left, opacity: 1, scale: "1.0" } }) : R.push({ element: p(this), animation: { top: K.offset().top - v.top, left: K.offset().left - v.left, opacity: 1 } });
                    else o.useScaling ? R.push({ element: p(this), animation: { opacity: "0.0", scale: "0.0" } }) : R.push({ element: p(this), animation: { opacity: "0.0" } })
                });
                S.each(function() {
                    var K = [],
                        M = [];
                    if (typeof o.attribute == "function") {
                        U = o.attribute(p(this));
                        V.each(function() {
                            if (o.attribute(this) == U) { K = p(this);
                                return false } });
                        S.each(function() {
                            if (o.attribute(this) == U) { M = p(this);
                                return false } })
                    } else { K = V.filter("[" + o.attribute + "=" + p(this).attr(o.attribute) + "]");
                        M = S.filter("[" + o.attribute + "=" + p(this).attr(o.attribute) + "]") }
                    var ka;
                    if (K.length === 0) {
                        ka = o.useScaling ? { opacity: "1.0", scale: "1.0" } : { opacity: "1.0" };
                        d = M.clone();
                        var $ = d.get(0);
                        $.style.position = "absolute";
                        $.style.margin = "0";
                        $.style.top = M.offset().top - v.top + "px";
                        $.style.left = M.offset().left - v.left + "px";
                        d.css("opacity", 0);
                        o.useScaling && d.css("transform", "scale(0.0)");
                        d.appendTo(L);
                        R.push({ element: p(d), animation: ka })
                    }
                });
                N.remove();
                o.enhancement(L);
                for (G = 0; G < R.length; G++) R[G].element.animate(R[G].animation, o.duration, o.easing, oa)
            }
        })
    }
})(jQuery);
