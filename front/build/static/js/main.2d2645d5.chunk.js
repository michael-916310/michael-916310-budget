(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{133:function(e,t,n){e.exports={spinier:"addExpense_spinier__35SuI"}},139:function(e,t,n){e.exports={layout_content:"layout_layout_content__2Nu44"}},153:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(28),c=n.n(s),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},u=n(55),o=(n(151),n(152),n(153),n(54)),l=n(24),p="AUTH_FETCH_START",d="AUTH_FETCH_FAIL",f="AUTH_FETCH_SUCCESS";var h={const:{AUTH_FETCH_START:p,AUTH_FETCH_FAIL:d,AUTH_FETCH_SUCCESS:f},requestStepsAC:{fetchStart:function(){return{type:p}},fetchFail:function(e){return{type:d,payload:e}},fetchSuccess:function(e){var t={};return e.userId>0&&(t={userId:e.userId,userName:e.userName,isAuthenticated:!0}),{type:f,payload:t}}}},j={userId:null,userName:null,isAuthenticated:!1,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}};var S=n(140),E="EXPENSE_ITEMS_LIST_FETCH_START",b="EXPENSE_ITEMS_LIST_FETCH_FAIL",x="EXPENSE_ITEMS_LIST_FETCH_SUCCESS",_="EXPENSE_ITEM_SELECTED";var O={const:{EXPENSE_ITEMS_LIST_FETCH_START:E,EXPENSE_ITEMS_LIST_FETCH_FAIL:b,EXPENSE_ITEMS_LIST_FETCH_SUCCESS:x,EXPENSE_ITEM_SELECTED:_},requestStepsAC:{fetchStart:function(){return{type:E}},fetchFail:function(e){return{type:b,payload:e}},fetchSuccess:function(e){return{type:x,payload:{itemsArray:e}}}},otherActionCreators:{expenseItemSelectedAC:function(e){return{type:_,payload:{selectedId:e}}}}},y={expenseList:[],selectedExpense:null,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}};function g(e){return!isNaN(parseFloat(e))&&isFinite(e)}var m=function(e,t){var n={const:{start:"".concat(e.toUpperCase(),"_FETCH_START"),fail:"".concat(e.toUpperCase(),"_FETCH_FAIL"),success:"".concat(e.toUpperCase(),"_FETCH_SUCCESS")},requestStepsAC:{fetchStart:function(){return{type:n.const.start}},fetchFail:function(e){return{type:n.const.fail,payload:e}},fetchSuccess:function(e){return{type:n.const.success,payload:t(e)}}}};return n}("EXPENSE_GROUPS_LIST",(function(e){return e}));m.const.EXPENSE_GROUP_SELECTED="EXPENSE_GROUP_SELECTED",m.otherActionCreators={expenseGroupSelectedAC:function(e){return{type:m.const.EXPENSE_GROUP_SELECTED,payload:{selectedId:e}}}};var C=function(e){var t=e.actions,n=e.initialState,a=e.startStateChange,r=void 0===a?function(e){return e}:a,s=e.successStateChange,c=void 0===s?function(e){return e}:s;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t.const.start:return r(Object(l.a)(Object(l.a)({},e),{request:{fetchStart:!0,fetchFail:!1,fetchSuccess:!1,error:{message:""}}}));case t.const.fail:return console.log("reducer",t.const.fail),Object(l.a)(Object(l.a)({},e),{request:{fetchStart:!1,fetchFail:!0,fetchSuccess:!1,error:{message:a.payload.message}}});case t.const.success:return c(Object(l.a)(Object(l.a)({},e),{request:{fetchStart:!1,fetchFail:!1,fetchSuccess:!0,error:{message:""}}}),a.payload);default:return e}}}({actions:m,initialState:{expenseGroup:[],selectedGroup:null,request:{fetchStart:!1,fetchFail:!1,error:{message:""},fetchSuccess:!1}},successStateChange:function(e,t){return e.expenseGroup=t,e}});var T=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{error:Object(l.a)({},e.request.error)})});function a(e,t,a){n.request.fetchStart=e,n.request.fetchFail=t,n.request.fetchSuccess=a,t||(n.request.error={message:""}),e&&(n.userId=null,n.userName=null,n.isAuthenticated=!1)}switch(t.type){case h.const.AUTH_FETCH_START:return a(!0,!1,!1),n;case h.const.AUTH_FETCH_FAIL:return a(!1,!0,!1),n.request.error={message:t.payload.message},console.log(n),n;case h.const.AUTH_FETCH_SUCCESS:var r;return a(!1,!1,!0),n.userId=t.payload.isAuthenticated?t.payload.userId:null,n.userName=t.payload.isAuthenticated?t.payload.userName:null,n.isAuthenticated=(null===(r=t.payload)||void 0===r?void 0:r.isAuthenticated)||!1,n;default:return e}},expenseItemsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{error:Object(l.a)({},e.request.error)})});function a(e,t,a){n.request.fetchStart=e,n.request.fetchFail=t,n.request.fetchSuccess=a,t||(n.request.error={message:""}),e&&(n.expenseList=[])}switch(t.type){case O.const.EXPENSE_ITEMS_LIST_FETCH_START:return a(!0,!1,!1),n;case O.const.EXPENSE_ITEMS_LIST_FETCH_FAIL:return a(!1,!0,!1),n.request.error={message:t.payload.message},n;case O.const.EXPENSE_ITEMS_LIST_FETCH_SUCCESS:return a(!1,!1,!0),n.expenseList=Object(S.a)(t.payload.itemsArray),n;case O.const.EXPENSE_ITEM_SELECTED:return n.selectedExpense={id:t.payload.selectedId,name:n.expenseList.filter((function(e){return e.id===t.payload.selectedId}))[0].name},n;default:return e}},expenseGroupList:function(e,t){switch(t.type){case m.const.EXPENSE_GROUP_SELECTED:return Object(l.a)(Object(l.a)({},e),{selectedGroup:{id:t.payload.selectedId,name:e.expenseGroup.filter((function(e){return e.id===t.payload.selectedId}))[0].name}});default:return C(e,t)}}}),v=n(141),I=n(47),A=n.n(I),F=n(78),N=A.a.mark(P),L=A.a.mark(U),w=A.a.mark(M),H=A.a.mark(G),q=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function P(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Hello Sagas!");case 1:case"end":return e.stop()}}),N)}function U(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.b)(q,1e3);case 2:return e.next=4,Object(F.c)({type:"INCREMENT"});case 4:case"end":return e.stop()}}),L)}function M(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.d)("INCREMENT_ASYNC",U);case 2:case"end":return e.stop()}}),w)}function G(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)([P(),M()]);case 2:case"end":return e.stop()}}),H)}var R=G,k=Object(v.a)(),X=Object(o.d)(T,Object(o.a)(k));k.run(R);var z={backURL:"https://michael-916310-budget-back.herokuapp.com/budget"},D=function(){return Object(u.b)()},W=u.c,Y=X.dispatch;function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;Y(n.fetchStart()),fetch(z.backURL+e,t).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))})).then((function(e){Y(n.fetchSuccess(JSON.parse(e)))})).catch((function(e){Y(n.fetchFail({message:e.message}))}))}var B=n(59),V=n(241),K=n(237),Z=n(90),Q=n(233),$=n(243),ee=n(244),te=n(48),ne=n.n(te);var ae=n(7);function re(){var e=Object(a.useState)(""),t=Object(B.a)(e,2),n=t[0],r=t[1];function s(e){r("".concat(n).concat(e.value))}var c=[{display:"1",value:"1",action:s},{display:"2",value:"2",action:s},{display:"3",value:"3",action:s},{display:"4",value:"4",action:s},{display:"5",value:"5",action:s},{display:"6",value:"6",action:s},{display:"7",value:"7",action:s},{display:"8",value:"8",action:s},{display:"9",value:"9",action:s},{display:"0",value:"0",action:s},{displayIcon:Object(ae.jsx)($.a,{}),value:"backspace",action:function(){r(n.substring(0,n.length-1))}},{displayIcon:Object(ae.jsx)(ee.a,{}),value:"send",action:function(){var e;e=n,J("/user/check",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({userCode:e})},Object(l.a)({},h.requestStepsAC))}}],i=W((function(e){return e.auth.request.fetchStart})),u=W((function(e){return e.auth.request.fetchFail})),o=W((function(e){return e.auth.request.error.message}));return Object(ae.jsxs)("main",{className:ne.a.main,children:[Object(ae.jsxs)("section",{className:ne.a.container,children:[Object(ae.jsx)("article",{className:ne.a.warningWrapper,children:u&&Object(ae.jsx)(V.a,{status:"warning",title:o})}),Object(ae.jsx)("article",{className:ne.a.inputControlWrapper,children:Object(ae.jsx)(K.a,{readOnly:!0,className:ne.a.inputControl,value:n})}),Object(ae.jsx)("article",{className:ne.a.btnContainer,children:c.map((function(e){return Object(ae.jsx)(Z.a,{shape:"round",onClick:function(){e.action(e)},className:ne.a.btn,disabled:i,children:e.display?e.display:e.displayIcon},e.value)}))})]}),i&&Object(ae.jsx)(Q.a,{size:"large",className:ne.a.spinier})]})}var se=n(235),ce=n(239),ie=n(246),ue=n(95),oe=n(247),le=n(40),pe=n.n(le),de=n(234),fe=n(236),he=n(238),je=n(245),Se=n(136),Ee=n.n(Se),be=n(242);function xe(){var e=D(),t=W((function(e){return e.expenseGroupList.expenseGroup})),n=(t=t.filter((function(e){return!e.obsolete}))).filter((function(e){return e.defaultSelection}));return W((function(e){return e.expenseGroupList.selectedGroup}))||Array.isArray(n)&&n.length>0&&e(m.otherActionCreators.expenseGroupSelectedAC(n[0].id)),Object(ae.jsx)(be.a.Group,{size:"large",optionType:"button",buttonStyle:"outline",defaultValue:Array.isArray(n)&&n.length>0?n[0].id:-1,style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},onChange:function(t){e(m.otherActionCreators.expenseGroupSelectedAC(t.target.value))},children:t.map((function(e){return Object(ae.jsx)(be.a.Button,{value:e.id,children:e.name},e.id)}))})}var _e=n(240),Oe=_e.a.Panel;function ye(){var e=W((function(e){return e.expenseItemsList.expenseList})),t=e.filter((function(e){return e.oftenUsed>0})),n=e.filter((function(e){return 0===e.oftenUsed})),a=D();function r(e){return e.map((function(e){return Object(ae.jsx)(be.a.Button,{value:e.id,style:{margin:"1px",minWidth:"7rem"},children:e.name},e.id)}))}return Object(ae.jsxs)(be.a.Group,{buttonStyle:"solid",style:{textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},size:"large",onChange:function(e){a(O.otherActionCreators.expenseItemSelectedAC(e.target.value))},children:[r(t),Object(ae.jsx)(_e.a,{style:{width:"100%"},children:Object(ae.jsx)(Oe,{header:"\u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",children:Object(ae.jsx)("div",{style:{textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:r(n)})},"1")})]})}var ge=n(133),me=n.n(ge);function Ce(){var e=["DD/MM/YYYY","DD/MM/YY"],t=W((function(e){var t;return null===(t=e.expenseItemsList.selectedExpense)||void 0===t?void 0:t.id})),n=W((function(e){var t;return null===(t=e.expenseItemsList.selectedExpense)||void 0===t?void 0:t.name})),r=W((function(e){return e.expenseGroupList.selectedGroup})),s=Object(a.useState)(new Date),c=Object(B.a)(s,2),i=c[0],u=c[1],o=Object(a.useState)(""),l=Object(B.a)(o,2),p=l[0],d=l[1],f=Object(a.useState)(""),h=Object(B.a)(f,2),j=h[0],S=h[1],E=Object(a.useState)({isStart:!1,isFail:!1,isSuccess:!1,errMessage:""}),b=Object(B.a)(E,2),x=b[0],_=b[1];function O(){return!!r&&r.id>0&&!!t&&g(p)&&0!==+p&&!!i}return Object(a.useEffect)((function(){x.isStart&&function(e){return fetch(z.backURL+e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))}))}("/expense/add",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({expenseGroupId:r.id,expenseId:t,expenseSum:p,expenseDate:i,expenseComment:j})}).then((function(e){e.status>0?(d(""),_({isStart:!1,isFail:!1,isSuccess:!0,errMessage:""})):_({isStart:!1,isFail:!0,isSuccess:!1,errMessage:e.message})})).catch((function(e){_({isStart:!1,isFail:!0,isSuccess:!1,errMessage:e.message})}))}),[x.isStart]),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(xe,{}),Object(ae.jsx)(de.a,{}),Object(ae.jsx)(ye,{}),Object(ae.jsx)(de.a,{}),Object(ae.jsx)(fe.a,{defaultValue:pe()(i,e[0]),size:"large",mode:"date",inputReadOnly:!0,format:e,style:{width:"100%",margin:"5px 0"},value:pe()(i,e[0]),onChange:function(e){e&&u(new Date(e.year(),e.month(),e.date()))}}),Object(ae.jsx)(K.a,{prefix:"\u20bd",suffix:"RUR",placeholder:"\u0441\u0443\u043c\u043c\u0430",size:"large",style:{width:"100%",margin:"5px 0"},value:p,onChange:function(e){var t=e.target.value;g(t)&&d(t)}}),Object(ae.jsx)(Ee.a,{placeholder:"\u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",autoSize:!0,size:"large",style:{width:"100%",margin:"5px 0"},value:j,onChange:function(e){S(e.target.value)}}),x.isFail&&Object(ae.jsx)(he.a,{message:x.errMessage,type:"error",showIcon:!0}),x.isSuccess&&Object(ae.jsx)(he.a,{message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430",type:"success",showIcon:!0}),Object(ae.jsx)(Z.a,{type:"primary",shape:"round",icon:Object(ae.jsx)(je.a,{}),size:"large",style:{width:"100%",margin:"5px 0"},disabled:!O()||x.isStart,onClick:function(){_({isStart:!0,isFail:!1,isSuccess:!1,errMessage:""})},children:O()?"".concat(n," (").concat(r.name,") : ").concat(p):""}),x.isStart&&Object(ae.jsx)(Q.a,{size:"large",className:me.a.spinier})]})}var Te=n(139),ve=n.n(Te),Ie=se.a.Header,Ae=se.a.Content,Fe=se.a.Footer;function Ne(){return Object(ae.jsxs)(se.a,{children:[Object(ae.jsx)(Ie,{children:Object(ae.jsxs)(ce.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(ae.jsx)(ce.a.Item,{children:Object(ae.jsx)(ie.a,{})},"1"),Object(ae.jsx)(ce.a.Item,{children:Object(ae.jsx)(ue.a,{})},"2"),Object(ae.jsx)(ce.a.Item,{children:Object(ae.jsx)(oe.a,{})},"3")]})}),Object(ae.jsx)(Ae,{style:{padding:"0 5px"},children:Object(ae.jsx)("div",{className:ve.a.layout_content,children:Object(ae.jsx)(Ce,{})})}),Object(ae.jsx)(Fe,{style:{textAlign:"center"},children:"\u0411\u044e\u0434\u0436\u0435\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"})]})}J("/references/expenseGroups",{method:"POST"},Object(l.a)({},m.requestStepsAC)),J("/references/expenseItems",{method:"POST"},Object(l.a)({},O.requestStepsAC));var Le=function(){var e=Object(u.c)((function(e){return e.auth.isAuthenticated}));return Object(ae.jsxs)(ae.Fragment,{children:[e&&Object(ae.jsx)(Ne,{}),!e&&Object(ae.jsx)(re,{})]})};c.a.render(Object(ae.jsx)(r.a.StrictMode,{children:Object(ae.jsx)(u.a,{store:X,children:Object(ae.jsx)(Le,{})})}),document.getElementById("root")),i()},48:function(e,t,n){e.exports={main:"login_main__1_ZlM",container:"login_container__36LK3",warningWrapper:"login_warningWrapper__gzvxY",inputControlWrapper:"login_inputControlWrapper__e5JuV",inputControl:"login_inputControl__zjzzz",btnContainer:"login_btnContainer__wsBcb",btn:"login_btn__13-Rj",spinier:"login_spinier__1p1pF"}}},[[230,1,2]]]);
//# sourceMappingURL=main.2d2645d5.chunk.js.map