(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{134:function(e,t,n){e.exports={layout_content:"layout_layout_content__2Nu44"}},148:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),s=n.n(c),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},u=n(55),o=(n(146),n(147),n(148),n(54)),l=n(31),d="AUTH_FETCH_START",p="AUTH_FETCH_FAIL",j="AUTH_FETCH_SUCCESS";var f={const:{AUTH_FETCH_START:d,AUTH_FETCH_FAIL:p,AUTH_FETCH_SUCCESS:j},requestStepsAC:{fetchStart:function(){return{type:d}},fetchFail:function(e){return{type:p,payload:e}},fetchSuccess:function(e){var t={};return e.userId>0&&(t={userId:e.userId,userName:e.userName,isAuthenticated:!0}),{type:j,payload:t}}}},h={userId:null,userName:null,isAuthenticated:!1,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}};var b=n(135),S="EXPENSE_ITEMS_LIST_FETCH_START",E="EXPENSE_ITEMS_LIST_FETCH_FAIL",_="EXPENSE_ITEMS_LIST_FETCH_SUCCESS",x="EXPENSE_ITEM_SELECTED";var O={const:{EXPENSE_ITEMS_LIST_FETCH_START:S,EXPENSE_ITEMS_LIST_FETCH_FAIL:E,EXPENSE_ITEMS_LIST_FETCH_SUCCESS:_,EXPENSE_ITEM_SELECTED:x},requestStepsAC:{fetchStart:function(){return{type:S}},fetchFail:function(e){return{type:E,payload:e}},fetchSuccess:function(e){return{type:_,payload:{itemsArray:e}}}},otherActionCreators:{expenseItemSelectedAC:function(e){return{type:x,payload:{selectedId:e}}}}},m={expenseList:[],selectedExpense:null,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}};var T=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{error:Object(l.a)({},e.request.error)})});function a(e,t,a){n.request.fetchStart=e,n.request.fetchFail=t,n.request.fetchSuccess=a,t||(n.request.error={message:""}),e&&(n.userId=null,n.userName=null,n.isAuthenticated=!1)}switch(t.type){case f.const.AUTH_FETCH_START:return a(!0,!1,!1),n;case f.const.AUTH_FETCH_FAIL:return a(!1,!0,!1),n.request.error={message:t.payload.message},console.log(n),n;case f.const.AUTH_FETCH_SUCCESS:var r;return a(!1,!1,!0),n.userId=t.payload.isAuthenticated?t.payload.userId:null,n.userName=t.payload.isAuthenticated?t.payload.userName:null,n.isAuthenticated=(null===(r=t.payload)||void 0===r?void 0:r.isAuthenticated)||!1,n;default:return e}},expenseItemsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{error:Object(l.a)({},e.request.error)})});function a(e,t,a){n.request.fetchStart=e,n.request.fetchFail=t,n.request.fetchSuccess=a,t||(n.request.error={message:""}),e&&(n.expenseList=[])}switch(t.type){case O.const.EXPENSE_ITEMS_LIST_FETCH_START:return a(!0,!1,!1),n;case O.const.EXPENSE_ITEMS_LIST_FETCH_FAIL:return a(!1,!0,!1),n.request.error={message:t.payload.message},n;case O.const.EXPENSE_ITEMS_LIST_FETCH_SUCCESS:return a(!1,!1,!0),n.expenseList=Object(b.a)(t.payload.itemsArray),n;case O.const.EXPENSE_ITEM_SELECTED:return n.selectedExpense={id:t.payload.selectedId,name:n.expenseList.filter((function(e){return e.id===t.payload.selectedId}))[0].name},n;default:return e}}}),y=n(136),g=n(46),v=n.n(g),C=n(78),I=v.a.mark(w),A=v.a.mark(H),F=v.a.mark(q),N=v.a.mark(M),L=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function w(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Hello Sagas!");case 1:case"end":return e.stop()}}),I)}function H(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.b)(L,1e3);case 2:return e.next=4,Object(C.c)({type:"INCREMENT"});case 4:case"end":return e.stop()}}),A)}function q(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("INCREMENT_ASYNC",H);case 2:case"end":return e.stop()}}),F)}function M(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([w(),q()]);case 2:case"end":return e.stop()}}),N)}var U=M,P=Object(y.a)(),k=Object(o.d)(T,Object(o.a)(P));P.run(U);var R={backURL:"https://michael-916310-budget-back.herokuapp.com/budget"},z=u.c,X=k.dispatch;function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;X(n.fetchStart()),fetch(R.backURL+e,t).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))})).then((function(e){X(n.fetchSuccess(JSON.parse(e))),a.forEach((function(t){t(JSON.parse(e))}))})).catch((function(e){X(n.fetchFail({message:e.message}))}))}var W=n(76),Y=n(233),J=n(232),B=n(88),V=n(228),K=n(237),G=n(238),Z=n(47),Q=n.n(Z);var $=n(8);function ee(){var e=Object(a.useState)(""),t=Object(W.a)(e,2),n=t[0],r=t[1];function c(e){r("".concat(n).concat(e.value))}var s=[{display:"1",value:"1",action:c},{display:"2",value:"2",action:c},{display:"3",value:"3",action:c},{display:"4",value:"4",action:c},{display:"5",value:"5",action:c},{display:"6",value:"6",action:c},{display:"7",value:"7",action:c},{display:"8",value:"8",action:c},{display:"9",value:"9",action:c},{display:"0",value:"0",action:c},{displayIcon:Object($.jsx)(K.a,{}),value:"backspace",action:function(){r(n.substring(0,n.length-1))}},{displayIcon:Object($.jsx)(G.a,{}),value:"send",action:function(){var e;e=n,D("/user/check",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({userCode:e})},Object(l.a)({},f.requestStepsAC),[])}}],i=z((function(e){return e.auth.request.fetchStart})),u=z((function(e){return e.auth.request.fetchFail})),o=z((function(e){return e.auth.request.error.message}));return Object($.jsxs)("main",{className:Q.a.main,children:[Object($.jsxs)("section",{className:Q.a.container,children:[Object($.jsx)("article",{className:Q.a.warningWrapper,children:u&&Object($.jsx)(Y.a,{status:"warning",title:o})}),Object($.jsx)("article",{className:Q.a.inputControlWrapper,children:Object($.jsx)(J.a,{readOnly:!0,className:Q.a.inputControl,value:n})}),Object($.jsx)("article",{className:Q.a.btnContainer,children:s.map((function(e){return Object($.jsx)(B.a,{shape:"round",onClick:function(){e.action(e)},className:Q.a.btn,disabled:i,children:e.display?e.display:e.displayIcon},e.value)}))})]}),i&&Object($.jsx)(V.a,{size:"large",className:Q.a.spinier})]})}var te=n(230),ne=n(234),ae=n(240),re=n(90),ce=n(241),se=n(40),ie=n.n(se),ue=n(229),oe=n(231),le=n(239),de=n(131),pe=n.n(de),je=n(235),fe=n(236),he=je.a.Panel;function be(){var e=z((function(e){return e.expenseItemsList.expenseList})),t=e.filter((function(e){return e.oftenUsed>0})),n=e.filter((function(e){return 0===e.oftenUsed})),a=Object(u.b)();function r(e){return e.map((function(e){return Object($.jsx)(fe.a.Button,{value:e.id,style:{margin:"1px",minWidth:"7rem"},children:e.name},e.id)}))}return Object($.jsxs)(fe.a.Group,{defaultValue:"1",buttonStyle:"solid",style:{textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},size:"large",onChange:function(e){a(O.otherActionCreators.expenseItemSelectedAC(e.target.value))},children:[r(t),Object($.jsx)(je.a,{style:{width:"100%"},children:Object($.jsx)(he,{header:"\u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",children:Object($.jsx)("div",{style:{textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:r(n)})},"1")})]})}function Se(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Ee(){var e=["DD/MM/YYYY","DD/MM/YY"],t=z((function(e){var t;return null===(t=e.expenseItemsList.selectedExpense)||void 0===t?void 0:t.id})),n=z((function(e){var t;return null===(t=e.expenseItemsList.selectedExpense)||void 0===t?void 0:t.name})),r=Object(a.useState)(""),c=Object(W.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(new Date),o=Object(W.a)(u,2),l=o[0],d=o[1];function p(){return!!t&&Se(s)&&0!==+s&&!!l}return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(be,{}),Object($.jsx)(ue.a,{}),Object($.jsx)(oe.a,{defaultValue:ie()(l,e[0]),size:"large",mode:"date",inputReadOnly:!0,format:e,style:{width:"100%",margin:"5px 0"},value:ie()(l,e[0]),onChange:function(e){e&&d(new Date(e.year(),e.month(),e.date()))}}),Object($.jsx)(J.a,{prefix:"\u20bd",suffix:"RUR",placeholder:"\u0441\u0443\u043c\u043c\u0430",size:"large",style:{width:"100%",margin:"5px 0"},value:s,onChange:function(e){var t=e.target.value;Se(t)&&i(t)}}),Object($.jsx)(pe.a,{placeholder:"\u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",autoSize:!0,size:"large",style:{width:"100%",margin:"5px 0"}}),Object($.jsx)(B.a,{type:"primary",shape:"round",icon:Object($.jsx)(le.a,{}),size:"large",style:{width:"100%",margin:"5px 0"},disabled:!p(),children:p()?"".concat(n," ").concat(s):""})]})}var _e=n(134),xe=n.n(_e),Oe=te.a.Header,me=te.a.Content,Te=te.a.Footer;function ye(){return Object($.jsxs)(te.a,{children:[Object($.jsx)(Oe,{children:Object($.jsxs)(ne.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object($.jsx)(ne.a.Item,{children:Object($.jsx)(ae.a,{})},"1"),Object($.jsx)(ne.a.Item,{children:Object($.jsx)(re.a,{})},"2"),Object($.jsx)(ne.a.Item,{children:Object($.jsx)(ce.a,{})},"3")]})}),Object($.jsx)(me,{style:{padding:"0 5px"},children:Object($.jsx)("div",{className:xe.a.layout_content,children:Object($.jsx)(Ee,{})})}),Object($.jsx)(Te,{style:{textAlign:"center"},children:"\u0411\u044e\u0434\u0436\u0435\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"})]})}D("/references/expenseItems",{method:"POST"},Object(l.a)({},O.requestStepsAC),[]);var ge=function(){var e=Object(u.c)((function(e){return e.auth.isAuthenticated}));return Object($.jsxs)($.Fragment,{children:[e&&Object($.jsx)(ye,{}),!e&&Object($.jsx)(ee,{})]})};s.a.render(Object($.jsx)(r.a.StrictMode,{children:Object($.jsx)(u.a,{store:k,children:Object($.jsx)(ge,{})})}),document.getElementById("root")),i()},47:function(e,t,n){e.exports={main:"login_main__1_ZlM",container:"login_container__36LK3",warningWrapper:"login_warningWrapper__gzvxY",inputControlWrapper:"login_inputControlWrapper__e5JuV",inputControl:"login_inputControl__zjzzz",btnContainer:"login_btnContainer__wsBcb",btn:"login_btn__13-Rj",spinier:"login_spinier__1p1pF"}}},[[225,1,2]]]);
//# sourceMappingURL=main.438edaf7.chunk.js.map