(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"F5 Logo",contain:"",src:"https://png2.cleanpng.com/sh/d5c88ad8438f35944309f9f3ee315c97/L0KzQYm3VMA4N6h6fZH0aYP2gLBuTfY2NZ9qjOl4cnv2PbT2jgB2fJZ3RdDudIfygry0ggBxdJpoeeZyb36wdLbzigZmeqoyi9twbj24cbSCUBE4P2pnUNRvMT66RYmCU8czQWI6SqU6M0e0RIS9U8cyNqFzf3==/kisspng-f5-networks-computer-network-application-delivery-sign-5ac93a779b8bf1.7589372915231371436371.png",transition:"scale-transition",width:"40"}})],1),r("v-spacer"),r("div",{staticClass:"d-flex align-center"},[r("CourseSelector",{attrs:{items:e.getCoursesList}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://f5.com",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Help and more")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-main",[r("ActiveCourse")],1)],1)},c=[],o=r("1da1"),s=r("5530"),i=(r("96cf"),r("2f62")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-select",{attrs:{items:e.items,label:"Choose course",outlined:""},on:{change:e.getSelection},model:{value:e.getActiveCourse.id,callback:function(t){e.$set(e.getActiveCourse,"id",t)},expression:"getActiveCourse.id"}})},l=[],f={name:"courseSelector",props:{items:Array},computed:Object(s["a"])({},Object(i["c"])("courses",["getActiveCourse"])),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("courses",["setActiveCourse"])),{},{getSelection:function(e){this.setActiveCourse(e)}})},d=f,v=r("2877"),p=r("6544"),g=r.n(p),m=r("b974"),b=Object(v["a"])(d,u,l,!1,null,null,null),h=b.exports;g()(b,{VSelect:m["a"]});var C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",[r("v-card-title",[e._v(e._s(e.getActiveCourse.id))]),r("v-card-subtitle",[e._v(e._s(e.getActiveCourse.name))]),r("v-card-text",[e._v(e._s(e.getActiveCourse.description))])],1),e._l(e.getActiveCourse.tasks,(function(t){return r("v-container",{key:e.getActiveCourse.id+"-"+t.order,staticClass:"px-5",attrs:{fluid:""}},[r("v-switch",{attrs:{label:t.name+": "+t.description},on:{change:function(r){return e.taskActive({event:r,task:t})}},model:{value:t.active,callback:function(r){e.$set(t,"active",r)},expression:"task.active"}})],1)}))],2)},O=[],S={name:"activeCourse",computed:Object(s["a"])({},Object(i["c"])("courses",["getActiveCourse"])),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("courses",["changeTaskState"])),{},{taskActive:function(e){this.changeTaskState(e)}})},A=S,j=r("b0af"),_=r("99d9"),k=r("a523"),w=r("b73d"),y=Object(v["a"])(A,C,O,!1,null,null,null),T=y.exports;g()(y,{VCard:j["a"],VCardSubtitle:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:k["a"],VSwitch:w["a"]});var x={name:"App",computed:Object(s["a"])({},Object(i["c"])("courses",["getCoursesList","getActiveCourse"])),methods:Object(s["a"])({},Object(i["b"])("courses",["getAllMissingData"])),components:{CourseSelector:h,ActiveCourse:T},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAllMissingData();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{}}},E=x,V=r("7496"),D=r("40dc"),I=r("8336"),L=r("132d"),M=r("adda"),R=r("f6c4"),P=r("2fa4"),N=Object(v["a"])(E,a,c,!1,null,null,null),U=N.exports;g()(N,{VApp:V["a"],VAppBar:D["a"],VBtn:I["a"],VIcon:L["a"],VImg:M["a"],VMain:R["a"],VSpacer:P["a"]});var J=r("f309");n["a"].use(J["a"]);var $=new J["a"]({}),B=(r("d3b7"),r("159b"),r("ddb0"),r("d81d"),r("ac1f"),r("1276"),r("5319"),r("bba4")),Z=r.n(B),q={},z={modules:{}};function Y(e,t){if(1===t.length)return e;var r=t.shift();return e.modules[r]=Object(s["a"])({modules:{},namespaced:!0},e.modules[r]),Y(e.modules[r],t)}(function(){var e=r("cfa9");e.keys().forEach((function(t){var r=e(t);if(q[t]!==r){q[t]=r;var n=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(Z.a),a=Y(z,n),c=a.modules;c[n.pop()]=Object(s["a"])({namespaced:!0},r)}}))})();var F=z.modules;n["a"].use(i["a"]);var K=new i["a"].Store({modules:F,strict:!1}),H=K;n["a"].config.productionTip=!1,new n["a"]({vuetify:$,store:H,render:function(e){return e(U)}}).$mount("#app")},"5d8e":function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return l})),r.d(t,"mutations",(function(){return f})),r.d(t,"actions",(function(){return d})),r.d(t,"getters",(function(){return v}));var n=r("5530"),a=r("1da1"),c=(r("96cf"),r("e9c4"),r("c740"),r("b64b"),r("d4ec")),o=r("bee2"),s=(r("d3b7"),r("bc3a")),i=function(){function e(){Object(c["a"])(this,e),this.backend="http://localhost:8080"}return Object(o["a"])(e,[{key:"getAllData",value:function(){var e=this;return new Promise((function(t,r){s.get("".concat(e.backend,"/tempData.json")).then((function(e){t(e.data)})).catch((function(e){r(e)}))}))}}]),e}(),u=new i,l={courses:localStorage.getItem("courses")?JSON.parse(localStorage.getItem("courses")):{},activeCourse:localStorage.getItem("activeCourse")||null},f={SET_ALL_DATA:function(e,t){e.courses=t,localStorage.setItem("courses",JSON.stringify(e)),chrome.runtime.sendMessage(null,{event:"setData",data:JSON.stringify(e)},(function(e){}))},SET_ACTIVE_COURSE:function(e,t){e.activeCourse=t,localStorage.setItem("activeCourse",t)},SET_TASK_STATE:function(e,t){var r=t.event,n=t.task,a=e.courses[e.activeCourse].tasks.findIndex((function(e){return e.order===n.order}));e.courses[e.activeCourse].tasks[a].active=r,localStorage.setItem("courses",JSON.stringify(e.courses)),chrome.runtime.sendMessage(null,{event:"setData",data:e},(function(e){}))}},d={getAllMissingData:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,localStorage.getItem("courses")){t.next=7;break}return console.log("Getting data",sessionStorage.getItem("courses")),t.next=5,u.getAllData();case 5:n=t.sent,r("SET_ALL_DATA",n);case 7:case"end":return t.stop()}}),t)})))()},refreshData:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,u.getAllData();case 3:n=t.sent,r("SET_ALL_DATA",n);case 5:case"end":return t.stop()}}),t)})))()},setActiveCourse:function(e,t){var r=e.commit;r("SET_ACTIVE_COURSE",t)},changeTaskState:function(e,t){var r=e.commit,n=t.event,a=t.task;r("SET_TASK_STATE",{event:n,task:a})}},v={getCoursesList:function(e){return Object.keys(e.courses)},getActiveCourse:function(e){return Object(n["a"])(Object(n["a"])({},e.courses[e.activeCourse]),{},{id:e.activeCourse})}}},cfa9:function(e,t,r){var n={"./courses.js":"5d8e"};function a(e){var t=c(e);return r(t)}function c(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="cfa9"}});
//# sourceMappingURL=app.f0d48612.js.map