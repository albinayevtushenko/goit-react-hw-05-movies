"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{910:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(689),i=r(791),o=r(840),p=r(336),l=r(277),f=r(184);e.default=function(){var t=(0,i.useState)(),e=(0,a.Z)(t,2),r=e[0],c=e[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1],x=(0,i.useState)(null),w=(0,a.Z)(x,2),g=w[0],k=w[1],_=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.$w)(_);case 3:e=t.sent,c(e.cast),m(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),k(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]),(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)("ul",{className:l.Z.list,children:r.map((function(t){var e=t.id,r=t.name,n=t.profile_path,a=t.character;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("li",{children:(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{children:["Name: ",r]}),(0,f.jsx)("img",{src:(0,p.Z)(n),alt:r,width:300}),(0,f.jsxs)("p",{children:["Character: ",a]})]})},e)})}))}),d&&(0,f.jsx)("p",{children:"...Loading"}),g&&(0,f.jsx)("p",{children:"Cast load fail"})]})}},840:function(t,e,r){r.d(e,{$w:function(){return p},JN:function(){return s},Pg:function(){return o},f6:function(){return l},gH:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"af7806c242ad95763370aa39444155c5"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("trending/all/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("search/movie",{params:{query:"".concat(e)}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},336:function(t,e){e.Z=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:"http://surl.li/fquko"}},277:function(t,e){e.Z={btn:"style_btn__-6CXS",item:"style_item__MF55d",list:"style_list__ExEtk"}}}]);
//# sourceMappingURL=910.a2d84452.chunk.js.map