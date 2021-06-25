(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{101:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},o=n(40),u=(n(99),n(100),n(101),n(39)),l=n(37),d="AUTH_FETCH_START",p="AUTH_FETCH_FAIL",h="AUTH_FETCH_SUCCESS";var j={const:{AUTH_FETCH_START:d,AUTH_FETCH_FAIL:p,AUTH_FETCH_SUCCESS:h},requestStepsAC:{fetchStart:function(){return{type:d}},fetchFail:function(e){return{type:p,payload:e}},fetchSuccess:function(e){var t={};return e.userId>0&&(t={userId:e.userId,userName:e.userName,isAuthenticated:!0}),{type:h,payload:t}}}},f={userId:null,userName:null,isAuthenticated:!1,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}};var b=Object(u.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{error:Object(l.a)({},e.request.error)})});function a(e,t,a){n.request.fetchStart=e,n.request.fetchFail=t,n.request.fetchSuccess=a,t||(n.request.error={message:""}),e&&(n.userId=null,n.userName=null,n.isAuthenticated=!1)}switch(t.type){case j.const.AUTH_FETCH_START:return a(!0,!1,!1),n;case j.const.AUTH_FETCH_FAIL:return a(!1,!0,!1),n.request.error={message:t.payload.message},console.log(n),n;case j.const.AUTH_FETCH_SUCCESS:var r;return a(!1,!1,!0),n.userId=t.payload.isAuthenticated?t.payload.userId:null,n.userName=t.payload.isAuthenticated?t.payload.userName:null,n.isAuthenticated=(null===(r=t.payload)||void 0===r?void 0:r.isAuthenticated)||!1,n;default:return n}}}),O=n(85),v=n(33),m=n.n(v),g=n(50),_=m.a.mark(T),y=m.a.mark(A),C=m.a.mark(N),x=m.a.mark(F),S=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function T(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Hello Sagas!");case 1:case"end":return e.stop()}}),_)}function A(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(S,1e3);case 2:return e.next=4,Object(g.c)({type:"INCREMENT"});case 4:case"end":return e.stop()}}),y)}function N(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)("INCREMENT_ASYNC",A);case 2:case"end":return e.stop()}}),C)}function F(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([T(),N()]);case 2:case"end":return e.stop()}}),x)}var w=F,E=Object(O.a)(),H=Object(u.d)(b,Object(u.a)(E));E.run(w);var I=n(83),k=n(119),U=n(118),q=n(82),L=n(116),R=n(121),z=n(122),J=n(34),W=n.n(J),M={backURL:"https://michael-916310-budget-back.herokuapp.com/budget"},P=o.c,B=H.dispatch;function D(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;B(n.fetchStart()),fetch(M.backURL+e,t).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))})).then((function(e){B(n.fetchSuccess(JSON.parse(e))),a.forEach((function(t){t(JSON.parse(e))}))})).catch((function(e){B(n.fetchFail({message:e.message}))}))}("/user/check",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({userCode:e})},Object(l.a)({},j.requestStepsAC),[])}var K=n(10);function Y(){var e=Object(a.useState)(""),t=Object(I.a)(e,2),n=t[0],r=t[1];function c(e){r("".concat(n).concat(e.value))}var s=[{display:"1",value:"1",action:c},{display:"2",value:"2",action:c},{display:"3",value:"3",action:c},{display:"4",value:"4",action:c},{display:"5",value:"5",action:c},{display:"6",value:"6",action:c},{display:"7",value:"7",action:c},{display:"8",value:"8",action:c},{display:"9",value:"9",action:c},{display:"0",value:"0",action:c},{displayIcon:Object(K.jsx)(R.a,{}),value:"backspace",action:function(){r(n.substring(0,n.length-1))}},{displayIcon:Object(K.jsx)(z.a,{}),value:"send",action:function(){D(n)}}],i=P((function(e){return e.auth.request.fetchStart})),o=P((function(e){return e.auth.request.fetchFail})),u=P((function(e){return e.auth.request.error.message}));return Object(K.jsxs)("main",{className:W.a.main,children:[Object(K.jsxs)("section",{className:W.a.container,children:[Object(K.jsx)("article",{className:W.a.warningWrapper,children:o&&Object(K.jsx)(k.a,{status:"warning",title:u})}),Object(K.jsx)("article",{className:W.a.inputControlWrapper,children:Object(K.jsx)(U.a,{readOnly:!0,className:W.a.inputControl,value:n})}),Object(K.jsx)("article",{className:W.a.btnContainer,children:s.map((function(e){return Object(K.jsx)(q.a,{shape:"round",onClick:function(){e.action(e)},className:W.a.btn,disabled:i,children:e.display?e.display:e.displayIcon},e.value)}))})]}),i&&Object(K.jsx)(L.a,{size:"large",className:W.a.spinier})]})}var V=n(76),Z=n(77),G=n(88),Q=n(84),X=n(117),$=n(120),ee=(n(113),X.a.Header),te=X.a.Content,ne=X.a.Footer,ae=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(K.jsxs)(X.a,{className:"layout",children:[Object(K.jsxs)(ee,{children:[Object(K.jsx)("div",{className:"logo"}),Object(K.jsx)($.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:new Array(15).fill(null).map((function(e,t){var n=t+1;return Object(K.jsx)($.a.Item,{children:"nav ".concat(n)},n)}))})]}),Object(K.jsx)(te,{style:{padding:"0 50px"},children:Object(K.jsx)("div",{className:"site-layout-content",children:"Content"})}),Object(K.jsx)(ne,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})}}]),n}(r.a.Component);var re=function(){var e=Object(o.c)((function(e){return e.auth.isAuthenticated}));return Object(K.jsxs)(K.Fragment,{children:[e&&Object(K.jsx)(ae,{}),!e&&Object(K.jsx)(Y,{})]})};s.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(o.a,{store:H,children:Object(K.jsx)(re,{})})}),document.getElementById("root")),i()},34:function(e,t,n){e.exports={main:"login_main__1_ZlM",container:"login_container__36LK3",warningWrapper:"login_warningWrapper__gzvxY",inputControlWrapper:"login_inputControlWrapper__e5JuV",inputControl:"login_inputControl__zjzzz",btnContainer:"login_btnContainer__wsBcb",btn:"login_btn__13-Rj",spinier:"login_spinier__1p1pF"}}},[[114,1,2]]]);
//# sourceMappingURL=main.9b59a961.chunk.js.map