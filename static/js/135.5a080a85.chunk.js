"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(689),u=n(87),l="MovieDetails_movieImg__5UJtY",d="MovieDetails_movieDetailsBox__mNLje",f="MovieDetails_backButton__pPF5M",v="MovieDetails_additionalHeader__GYxO-",p="MovieDetails_additionalList__0IfAN",h="MovieDetails_additionalListItem__NSRDd",m="MovieDetails_additionalLink__4ZR-w",x="MovieDetails_movieTitle__0CAOT",_="MovieDetails_active__uPNdW",j=n(992),w=n(184),b=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),s=n[0],b=n[1],k=(0,i.useState)([]),g=(0,a.Z)(k,2),Z=g[0],N=g[1],D=(0,i.useState)(""),M=(0,a.Z)(D,2),y=M[0],L=M[1],O=(0,i.useState)(null),S=(0,a.Z)(O,2),A=S[0],C=S[1],T=(0,o.TH)(),I=(0,o.s0)(),P=(0,i.useRef)(T);return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,r,a,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,j.TP)(e);case 3:n=t.sent,r=n.genres,a=n.release_date,s=n.vote_average,b(n),N(r),L(a),C(s),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,w.jsxs)(i.Fragment,{children:[(0,w.jsx)("button",{className:f,onClick:function(){var e;null!==(e=T.state)&&void 0!==e&&e.from?I(T.state.from):I(P.current.state.from)},children:"Go back"}),(0,w.jsxs)("div",{className:d,children:[s.poster_path&&(0,w.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h2",{className:x,children:[s.title," (",y.slice(0,4),")"]}),(0,w.jsxs)("p",{children:["User score: ",(0,w.jsx)("b",{children:Number(A).toFixed(2)})]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:s.overview}),(0,w.jsx)("h4",{children:"Genres"}),Z.length>0?Z.map((function(e){return e.name})).join(" "):"---"]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:v,children:"Additional information"}),(0,w.jsxs)("ul",{className:p,children:[(0,w.jsx)("li",{className:h,children:(0,w.jsx)(u.OL,{className:function(e){return e.isActive?_:m},to:"cast",children:"Cast"})}),(0,w.jsx)("li",{className:h,children:(0,w.jsx)(u.OL,{className:function(e){return e.isActive?_:m},to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)("p",{children:"'Loading...'"}),children:(0,w.jsx)(o.j3,{})})]})]})}},992:function(e,t,n){n.d(t,{Df:function(){return u},Jh:function(){return f},M1:function(){return v},TP:function(){return l},Wf:function(){return d}});var r=n(861),a=n(757),s=n.n(a),c=n(243),i="api_key=dce0b8b37fbd78cdab3203c47fa0e91b",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"trending/movie/day?").concat(i));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"movie/").concat(t,"?").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"search/movie?query=").concat(t,"&").concat(i));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"movie/").concat(t,"/reviews?").concat(i));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"movie/").concat(t,"/credits?").concat(i));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.5a080a85.chunk.js.map