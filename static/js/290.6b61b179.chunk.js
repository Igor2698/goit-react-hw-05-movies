"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290],{687:function(e,t,r){r.d(t,{$f:function(){return i},IQ:function(){return p},Jh:function(){return l},P0:function(){return u},xI:function(){return v}});var n=r(861),a=r(757),s=r.n(a),c=r(243),o="2b5ddb7b349a0a14050a55daa13e1ea4";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/all/day",{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t),{params:{api_key:o}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:o,page:1}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:o}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?query=".concat(t),{params:{api_key:o}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},519:function(e,t,r){r.d(t,{y:function(){return p}});var n=r(689),a=r(87),s="MoovieList_listMoovie__CnC0R",c="MoovieList_moovieListImg__Qw0MQ",o="MoovieList_moovieListText__tEC1r",u="MoovieList_moovieItem__4+3JY",i=r(184),p=function(e){var t=e.newMoovies,r=(0,n.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:s,children:t.map((function(e){var t;return(0,i.jsx)(a.rU,{to:"/moovies/".concat(e.id),state:{from:r},children:(0,i.jsxs)("li",{className:u,children:[(0,i.jsx)("img",{className:c,src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,i.jsx)("p",{className:o,children:null!==(t=e.title)&&void 0!==t?t:e.name})]})},e.id)}))})})}},280:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(184);function a(e){var t=e.message;return(0,n.jsx)("div",{role:"alert",children:(0,n.jsx)("p",{children:t})})}},290:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(791),u=r(687),i=r(937),p=r(519),l=r(280),v="Home_moovieListTitle__OigNe",f=r(184),h=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],h=(0,o.useState)(!1),m=(0,a.Z)(h,2),d=m[0],x=m[1],_=(0,o.useState)(null),w=(0,a.Z)(_,2),g=w[0],Z=w[1];return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,u.P0)();case 4:t=e.sent,s(t.results),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[g&&(0,f.jsx)(l.Z,{message:g.message}),d&&(0,f.jsx)(i.q,{}),(0,f.jsx)("h1",{className:v,children:"The most popular"}),(0,f.jsx)(p.y,{newMoovies:r})]})}}}]);
//# sourceMappingURL=290.6b61b179.chunk.js.map