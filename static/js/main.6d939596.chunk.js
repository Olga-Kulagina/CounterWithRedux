(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,function(e,a,t){e.exports={customisationBlock:"Customization_customisationBlock__2nuGJ",customisationDisplay:"Customization_customisationDisplay__3s0mD",incorrect:"Customization_incorrect__2NWo0"}},,function(e,a,t){e.exports={display:"Display_display__1IQpa",maxCount:"Display_maxCount__3oHE8"}},,function(e,a,t){e.exports={counterBlock:"Counter_counterBlock__HouOy"}},,,,,,function(e,a,t){e.exports={button:"Button_button__3Nxxj"}},function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),u=t.n(n),l=t(6),r=t.n(l),c=(t(19),t(20),t(1)),o=t(7),i=t.n(o),s=t(5),V=t.n(s);var m=function(e){return e.newStartValue<0||e.newMaxValue<0||e.newStartValue>=e.newMaxValue?u.a.createElement("div",{className:"".concat(V.a.display),style:{color:"red"}},"Incorrect value!"):e.newStartValue!==e.startValue||e.newMaxValue!==e.maxValue?u.a.createElement("div",{className:"".concat(V.a.display),style:{color:"mediumblue",textAlign:"center"}},"Enter values and press 'set'"):u.a.createElement("div",{className:"".concat(V.a.display," ").concat(e.currentValue===e.maxValue?V.a.maxCount:"")},e.currentValue)},w=t(13),x=t.n(w),E=function(e){return u.a.createElement("button",{className:x.a.button,onClick:e.callBack,disabled:e.disabled},e.title)},d=function(e){return u.a.createElement("div",{className:i.a.counterBlock},u.a.createElement("div",{className:i.a.display},u.a.createElement(m,{currentValue:e.currentValue,maxValue:e.maxValue,startValue:e.startValue,newMaxValue:e.newMaxValue,newStartValue:e.newStartValue})),u.a.createElement("div",{className:i.a.buttonsPanel},u.a.createElement(E,{title:"inc",callBack:e.incCount,disabled:e.currentValue===e.maxValue}),u.a.createElement(E,{title:"reset",callBack:e.reCount,disabled:e.currentValue===e.startValue})))},v=t(2),C={startValue:0,maxValue:5,currentValue:0,newStartValue:0,newMaxValue:5},b=function(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e.counter}));return u.a.createElement(d,{currentValue:a.currentValue,maxValue:a.maxValue,startValue:a.startValue,newMaxValue:a.newMaxValue,newStartValue:a.newStartValue,incCount:function(){e({type:"INCREMENT_COUNT"})},reCount:function(){e({type:"RESET_COUNT"})}})},p=t(3),_=t.n(p);var S=function(e){return u.a.createElement("div",{className:_.a.customisationDisplay},u.a.createElement("div",null,u.a.createElement("label",null,"max value",u.a.createElement("input",{className:"".concat(e.newMaxValue<0||e.newMaxValue===e.newStartValue||e.newMaxValue<e.newStartValue?_.a.incorrect:""),type:"number",value:e.newMaxValue,onChange:function(a){e.maxValueChange(Number(a.currentTarget.value))}}))),u.a.createElement("div",null,u.a.createElement("label",null,"start value",u.a.createElement("input",{className:"".concat(e.newStartValue<0||e.newMaxValue===e.newStartValue||e.newMaxValue<e.newStartValue?_.a.incorrect:""),type:"number",value:e.newStartValue,onChange:function(a){e.startValueChange(Number(a.currentTarget.value))}}))))};var f=function(e){return u.a.createElement("div",{className:_.a.customisationBlock},u.a.createElement(S,{newMaxValue:e.newMaxValue,newStartValue:e.newStartValue,maxValueChange:e.maxValueChange,startValueChange:e.startValueChange}),u.a.createElement(E,{title:"set",callBack:e.setCustomization,disabled:e.newStartValue<0||(e.newMaxValue<0||e.newStartValue>=e.newMaxValue)}))},M=function(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e.counter}));return u.a.createElement(f,{newMaxValue:a.newMaxValue,newStartValue:a.newStartValue,maxValueChange:function(a){e(function(e){return{type:"MAX_VALUE_CHANGE",newMaxValue:e}}(a))},startValueChange:function(a){e(function(e){return{type:"START_VALUE_CHANGE",newStartValue:e}}(a))},setCustomization:function(){e({type:"SET_CUSTOMIZATION"})}})},N=function(){return u.a.createElement("div",{className:"App"},u.a.createElement(b,null),u.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(4),h=Object(y.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREMENT_COUNT":var t=Object(v.a)({},e),n=t.currentValue;return n++,t.currentValue=n,t;case"RESET_COUNT":var u=Object(v.a)({},e);return Object(v.a)({},u,{currentValue:u.startValue});case"MAX_VALUE_CHANGE":return Object(v.a)({},e,{newMaxValue:a.newMaxValue});case"START_VALUE_CHANGE":return Object(v.a)({},e,{newStartValue:a.newStartValue});case"SET_CUSTOMIZATION":var l=Object(v.a)({},e);return Object(v.a)({},l,{startValue:l.newStartValue,maxValue:l.newMaxValue,currentValue:l.newStartValue});default:return e}}}),O=Object(y.c)(h);window.store=O,r.a.render(u.a.createElement(c.a,{store:O},u.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.6d939596.chunk.js.map