(this["webpackJsonpmove-application"]=this["webpackJsonpmove-application"]||[]).push([[0],{52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(28),n=a.n(s),i=a(12),o=a.n(i),l=(a(52),a(9)),j=a(14),v=a(2),d=a(10),u=a.n(d),m=a(13),h=a(62),p=a.p+"static/media/spinner.e30e831d.svg",b=a(1);function O(e){var t=e.setMovie,a=e.movie,r="https://image.tmdb.org/t/p/w342/".concat(a.posterPath),c="Poster from the movie ".concat(a.title);return Object(b.jsx)("div",{className:"moviePreview",children:Object(b.jsx)(j.b,{to:"/movie",children:Object(b.jsx)("img",{className:"previewImage",src:r,alt:c,onClick:function(){return t(a)}})})})}function g(e){var t=e.searchResult,a=e.status,r=e.setMovie,c=a.state,s=a.error;return"idle"===c?null:"pending"===c?Object(b.jsx)("img",{className:"loadingImg centered",src:p,alt:"loading icon"}):"resolved"===c?t.map((function(e){return Object(b.jsx)(O,{movie:e,setMovie:r},e.id)})):"error"===c?Object(b.jsx)("p",{className:"centered",id:"error",children:s}):void 0}var x=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.prev=1,e.next=4,o.a.get("/search/movie",{params:{searchString:t}});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Unable to find movie");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(e){var t=e.search,a=e.setSearch,c=e.setMovie,s=Object(r.useState)({state:"idle",error:null}),n=Object(l.a)(s,2),i=n[0],o=n[1],j=Object(r.useState)(null),v=Object(l.a)(j,2),d=v[0],p=v[1],O=Object(h.a)(t,600),f=Object(l.a)(O,1)[0];Object(r.useEffect)((function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(f);case 3:t=e.sent,p(t),o({state:"resolved"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o({state:"error",error:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();f.length<1||e()}),[f]);return Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)("div",{className:"tmdb",children:Object(b.jsx)("p",{children:"All movie info is gathered from themoviedb.org"})}),Object(b.jsx)(g,{searchResult:d,status:i,setMovie:c}),Object(b.jsx)("input",{id:"search",className:""===t?"centered":"search-top",placeholder:"Search Movie",onChange:function(e){a(e.target.value),0===e.target.value.length?o({state:"idle"}):o({state:"pending"})},value:t,autoComplete:"off"})]})};function w(e){var t=e.movie,a="https://image.tmdb.org/t/p/w342/".concat(t.posterPath),r="Poster from the movie ".concat(t.title),c=t.title!==t.originalTitle;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("div",{className:"moviePoster",children:Object(b.jsx)("img",{className:"posterImage",src:a,alt:r})}),Object(b.jsx)("div",{className:"orgTitle smallTopMargin",children:t.originalTitle}),Object(b.jsx)("div",{className:c?"title smallTopMargin":"hiddenContent",children:t.title!==t.originalTitle?"(".concat(t.title,")"):null}),Object(b.jsx)("div",{className:"releaseDate smallTopMargin",children:t.releaseDate}),Object(b.jsx)("div",{className:"overview smallTopMargin",children:t.overview})]})}var N=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),n=Object(l.a)(s,2),i=n[0],o=n[1];return Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",children:Object(b.jsx)(f,{search:a,setSearch:c,setMovie:o})}),Object(b.jsx)(v.a,{path:"/movie",children:Object(b.jsx)(w,{movie:i})})]})})})};o.a.defaults.baseURL="http://localhost:5001",n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.65703af3.chunk.js.map