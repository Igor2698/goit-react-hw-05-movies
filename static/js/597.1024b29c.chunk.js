"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{687:function(r,e,t){t.d(e,{$f:function(){return i},IQ:function(){return p},Jh:function(){return l},P0:function(){return o},xI:function(){return f}});var n=t(861),a=t(757),c=t.n(a),s=t(243),u="2b5ddb7b349a0a14050a55daa13e1ea4";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("trending/all/day",{params:{api_key:u,language:"en-US"}});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e),{params:{api_key:u}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e,"/credits"),{params:{api_key:u,page:1}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:u}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("search/movie?query=".concat(e),{params:{api_key:u}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},597:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(689),o=t(791),i=t(687),p=t(321),l=t(280),f=t(184);e.default=function(){var r=(0,o.useState)(!1),e=(0,a.Z)(r,2),t=e[0],c=e[1],h=(0,o.useState)(null),v=(0,a.Z)(h,2),d=v[0],m=v[1],w=(0,o.useState)(null),x=(0,a.Z)(w,2),g=x[0],b=x[1],k=(0,u.UO)().id;return(0,o.useEffect)((function(){function r(){return(r=(0,n.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(!0),r.next=4,(0,i.IQ)(k);case 4:e=r.sent,c(!1),b(e.cast),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),m(r.t0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[k]),(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(l.Z,{message:d.message}),t&&(0,f.jsx)(p.q,{}),g&&(0,f.jsx)("ul",{children:g.slice(0,30).map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Character: ",r.character]}),(0,f.jsxs)("p",{children:["Name: ",r.name]}),(0,f.jsx)("img",{width:"100",height:"150",src:r.profile_path?"https://image.tmdb.org/t/p/w500/".concat(r.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"actor"})]},r.id)}))})]})}},321:function(r,e,t){t.d(e,{q:function(){return c}});var n=t(119),a=t(184),c=function(){return(0,a.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},280:function(r,e,t){t.d(e,{Z:function(){return a}});var n=t(184);function a(r){var e=r.message;return(0,n.jsx)("div",{role:"alert",children:(0,n.jsx)("p",{children:e})})}}}]);
//# sourceMappingURL=597.1024b29c.chunk.js.map