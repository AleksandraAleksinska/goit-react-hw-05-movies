"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{620:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o="Review_reviewListItem__sAVtW",f="Review_reviewAuthor__PgMgM",p=r(184),v=function(e){var t=e.reviewById;return(0,p.jsx)(s.Fragment,{children:t.length>0?t.map((function(e){return(0,p.jsxs)("li",{className:o,children:[(0,p.jsxs)("p",{className:f,children:["Author: ",e.author]}),(0,p.jsxs)("p",{children:[" ",e.content]})]},e.id)})):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})},h=r(992),d=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],o=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.Jh)(e);case 3:r=t.sent,o(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,p.jsx)("ul",{children:(0,p.jsx)(v,{reviewById:c})})}},992:function(e,t,r){r.d(t,{Df:function(){return i},Jh:function(){return p},M1:function(){return v},TP:function(){return o},Wf:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.params={api_key:"dce0b8b37fbd78cdab3203c47fa0e91b"};var s="https://api.themoviedb.org/3/",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"trending/movie/day?"));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"search/movie?query=").concat(t,"&"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/reviews?"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/credits?"));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=620.31cf08ab.chunk.js.map