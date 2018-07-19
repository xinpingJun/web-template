/**
 *根据设备DPR调整页面的压缩比率（即：1/dpr），同时动态设置 html 的font-size为（50 * dpr)，进而达到高清效果。
 *根据设备屏幕的DPR,自动设置最合适的高清缩放。
 *保证了不同设备下视觉体验的一致性。（老方案是，屏幕越大元素越大；此方案是，屏幕越大，看的越多）
 *有效解决移动端真实1px问题（这里的1px 是设备屏幕上的物理像素）
 *问题：
 * 1，引用了别的UI库，那些UI库的元素会显得特别小 =》  a px => a*0.02 rem
 * 2，X5新内核Blink中，在排版页面的时候，会主动对字体进行放大  =》 *, *:before, *:after { max-height: 100000px }
 * 出处：https://www.jianshu.com/p/985d26b40199
 */
! function(e) {
  function t(a) {
    if (i[a]) return i[a].exports;
    var n = i[a] = {
      exports: {},
      id: a,
      loaded: !1
    };
    return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
  }
  var i = {};
  return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = window;
  t["default"] = i.flex = function(normal, e, t) {
    var a = e || 100,
      n = t || 1,
      r = i.document,
      o = navigator.userAgent,
      d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
      l = o.match(/U3\/((\d+|\.){5,})/i),
      c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
      p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
      s = i.devicePixelRatio || 1;
    p || d && d[1] > 534 || c || (s = 1);
    var u = normal ? 1 : 1 / s,
      m = r.querySelector('meta[name="viewport"]');
    m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u), r.documentElement.style.fontSize = normal ? "50px" : a / 2 * s * n + "px"
  }, e.exports = t["default"]
}]);
flex(false, 100, 1);
