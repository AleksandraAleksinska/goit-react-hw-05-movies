"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(87),o=r(243),l=r(184);t.default=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],p=(0,s.useState)([]),h=(0,a.Z)(p,2),f=h[0],d=h[1],m=r.get("query")||"",b=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(m,"&api_key=").concat("dce0b8b37fbd78cdab3203c47fa0e91b"));case 5:t=e.sent,r=t.data.results,d(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;b(),t.reset()},children:[(0,l.jsx)("input",{type:"text",value:m,name:"query",onChange:function(e){c({query:e.target.value})}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{children:f.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=278.0d65b288.chunk.js.map