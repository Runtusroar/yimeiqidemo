(function(){"use strict";var t={9252:function(t,e,a){var n=a(7764),l=a(672),o=(a(7448),a(5976)),s=a(4108);const i={class:"common-layout"};function r(t,e,a,n,l,o){const r=(0,s.E1)("AppHeader"),d=(0,s.E1)("el-header"),p=(0,s.E1)("AppAside"),c=(0,s.E1)("el-aside"),u=(0,s.E1)("router-view"),m=(0,s.E1)("el-main"),h=(0,s.E1)("el-container");return(0,s.Wz)(),(0,s.An)("div",i,[(0,s.K2)(h,null,{default:(0,s.Ql)((()=>[(0,s.K2)(d,null,{default:(0,s.Ql)((()=>[(0,s.K2)(r)])),_:1}),(0,s.K2)(h,null,{default:(0,s.Ql)((()=>[(0,s.K2)(c,{width:"200px"},{default:(0,s.Ql)((()=>[(0,s.K2)(p)])),_:1}),(0,s.K2)(m,{class:"animated-aside"},{default:(0,s.Ql)((()=>[(0,s.K2)(u,{name:"main"})])),_:1}),(0,s.K2)(c,{width:`${t.$store.state.panelValue}px`,class:"animated-aside"},{default:(0,s.Ql)((()=>[(0,s.K2)(u,{name:"panel"})])),_:1},8,["width"])])),_:1})])),_:1})])}const d=t=>((0,s.ED)("data-v-9a5766f8"),t=t(),(0,s.ii)(),t),p=d((()=>(0,s.QD)("h3",null,"YiMeiQi",-1)));function c(t,e,a,n,l,o){const i=(0,s.E1)("el-col"),r=(0,s.E1)("el-row");return(0,s.Wz)(),(0,s.Az)(r,{class:"header"},{default:(0,s.Ql)((()=>[(0,s.K2)(i,{span:12},{default:(0,s.Ql)((()=>[p])),_:1}),(0,s.K2)(i,{span:12})])),_:1})}var u={name:"AppHeader"},m=a(4100);const h=(0,m.c)(u,[["render",c],["__scopeId","data-v-9a5766f8"]]);var f=h;const v={class:"aside"};function b(t,e,a,n,l,o){const i=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",v,[(0,s.K2)(i,{to:"/"},{default:(0,s.Ql)((()=>[(0,s.mY)("数据总览")])),_:1}),(0,s.K2)(i,{to:"/monitor"},{default:(0,s.Ql)((()=>[(0,s.mY)("数据检测")])),_:1})])}var A={name:"AppAside"};const g=(0,m.c)(A,[["render",b],["__scopeId","data-v-e1d159c4"]]);var P=g,w={components:{AppHeader:f,AppAside:P},mounted(){this.$store.dispatch("getAppTableTable"),this.$store.dispatch("getAppHealthTable"),this.$store.dispatch("getPast24hours"),this.$store.dispatch("getPast7days"),setInterval((()=>{this.$store.dispatch("getPast24hours"),this.$store.dispatch("getPast7days")}),5e3),this.$store.dispatch("getPast24Pie"),setInterval((()=>{this.$store.dispatch("getPast24Pie")}),3e4)},watch:{$route(t){"/"===t.path?this.$store.commit("CHANGEPANEL",750):this.$store.commit("CHANGEPANEL",370)}}};const E=(0,m.c)(w,[["render",r]]);var y=E,T=a(7192),_=a(2964);const D=(0,T.eC)({actions:{changePanel(t,e){t.commit("CHANGEPANEL",e)},getAppHealthTable(t){_.c.get("https://api.nonpage.com/index.php/api/query/health",{params:{auth:"yimeiqi"}}).then((e=>{t.commit("GETAPPHEALTHTABLE",e.data)}))},getAppTableTable(t){_.c.get("https://api.nonpage.com/index.php/api/query/totaiwan",{params:{auth:"yimeiqi",limit:500}}).then((e=>{1===e.data.code?t.commit("GETAPPTABLETABLE",e.data.data):t.commit("GETAPPTABLEABLE",[])}))},getPast7days(t){_.c.get("https://api.nonpage.com/index.php/api/query/totaiwancount",{params:{time:"week"}}).then((e=>{t.commit("GETPAST7DAYS",e.data)}))},getPast24hours(t){_.c.get("https://api.nonpage.com/index.php/api/query/totaiwancount",{params:{time:"day"}}).then((e=>{t.commit("GETPAST24HOURS",e.data)}))},getPast24Pie(t){_.c.get("https://api.nonpage.com/index.php/api/query/totaiwanpie",{params:{auth:"yimeiqi"}}).then((e=>{t.commit("GETPAST24PIE",e.data)}))}},mutations:{CHANGEPANEL(t,e){t.panelValue=e},GETAPPHEALTHTABLE(t,e){t.AppHealth.table=e},GETAPPTABLETABLE(t,e){t.AppTable.table=e},GETPAST7DAYS(t,e){t.Past7days=e},GETPAST24HOURS(t,e){t.Past24hours=e},GETPAST24PIE(t,e){t.Past24Pie=e}},state:{panelValue:750,AppHealth:{table:[]},AppTable:{table:[]},Past7days:[],Past24hours:[],Past24Pie:[]}});var K=D,Q=a(7464);function H(t,e,a,n,l,o){const i=(0,s.E1)("el-table-column"),r=(0,s.E1)("el-table");return(0,s.Wz)(),(0,s.Az)(r,{data:l.tableData,border:"",style:{width:"100%",height:"100%"},size:"small",class:"apptable","row-class-name":o.tableHealth,"show-overflow-tooltip":"true"},{default:(0,s.Ql)((()=>[(0,s.K2)(i,{prop:"id",label:"索引",width:"180"}),(0,s.K2)(i,{prop:"domain",label:"域名",width:"180"}),(0,s.K2)(i,{prop:"domain_health",label:"域名状态",width:"180"}),(0,s.K2)(i,{prop:"createtime",label:"更新时间"})])),_:1},8,["data","row-class-name"])}var Y={name:"AppHealth",data(){return{tableData:[]}},methods:{tableHealth({row:t}){if("台湾屏蔽"==t.domain_health)return"danger-row"}},mounted(){setTimeout((()=>{this.tableData=this.$store.state.AppHealth.table}),1e3)},watch:{"$store.state.AppHealth.table"(t){this.tableData=t}}};const k=(0,m.c)(Y,[["render",H]]);var x=k,z=a(2500),L=(a(1556),a(5256)),S=a(992),O=a(4888),G=a(1972),I=a(4600),M=a(1676),$=a(8316),V={__name:"AppLine",setup(t){(0,L.Y)([S.k,O.k,G.k,I.k,M.k]),(0,s.Zl)($.m2,"light");const e=(0,T.o3)(),a=(0,z.IL)({title:{text:"访问量"},animationDuration:1e3,tooltip:{trigger:"axis"},legend:{data:["近24小时","近7天"],selectedMode:"single"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[{name:"近24小时",type:"line",stack:"Total",data:[],label:{show:!0,position:"top",formatter:"{c}"}},{name:"近7天",type:"line",stack:"Total",data:[],label:{show:!0,position:"top",formatter:"{c}"},lineStyle:{color:"#ff9f7f",width:2,type:"solid"},itemStyle:{color:"#ff9f7f"}}]}),n=(0,z.IL)(0);(0,s.q6)((()=>{a.value.xAxis.data=n.value?e.state.Past7days.map((t=>t.day)):e.state.Past24hours.map((t=>t.hour)),a.value.series[0].data=e.state.Past24hours.map((t=>t.count)),a.value.series[1].data=e.state.Past7days.map((t=>t.daily_count))}));const l=t=>{const e=t.selected,a=Object.keys(e).find((t=>e[t]));"近24小时"===a?n.value=0:"近7天"===a&&(n.value=1)};return(t,e)=>((0,s.Wz)(),(0,s.Az)((0,z.KV)($.cp),{class:"chart",option:a.value,onLegendselectchanged:l,autoresize:""},null,8,["option"]))}};const C=(0,m.c)(V,[["__scopeId","data-v-76bc6f3c"]]);var W=C,N={__name:"AppPie",setup(t){(0,L.Y)([S.k,O.k,G.k,I.k,M.k]);const e=(0,T.o3)();(0,s.Zl)($.m2,"light");const a=(0,z.IL)({title:{text:"近24小时域名访问量",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:[]},series:[{name:"近24小时访问量",type:"pie",radius:"55%",center:["50%","60%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});return(0,s.q6)((()=>{a.value.legend.data=e.state.Past24Pie.map((t=>t.host)),a.value.series[0].data=e.state.Past24Pie.map((t=>({value:t.count,name:t.host})))})),(t,e)=>((0,s.Wz)(),(0,s.Az)((0,z.KV)($.cp),{class:"chart",option:a.value,autoresize:""},null,8,["option"]))}};const q=(0,m.c)(N,[["__scopeId","data-v-2590e05d"]]);var B=q;const j={class:"statistics"};var U={__name:"AppStatistics",setup(t){return(t,e)=>((0,s.Wz)(),(0,s.An)("div",j,[(0,s.K2)(W),(0,s.K2)(B)]))}};const R=(0,m.c)(U,[["__scopeId","data-v-0d1362d4"]]);var Z=R;function F(t,e,a,n,l,o){const i=(0,s.E1)("el-table-column"),r=(0,s.E1)("el-table");return(0,s.Wz)(),(0,s.Az)(r,{data:l.tableData,border:"",style:{width:"100%",height:"100%"},size:"small",class:"apptable","row-class-name":o.tableRowClassName,"show-overflow-tooltip":"true"},{default:(0,s.Ql)((()=>[(0,s.K2)(i,{prop:"createtime",label:"时间",width:"180"}),(0,s.K2)(i,{prop:"host",label:"域名",width:"180"}),(0,s.K2)(i,{prop:"uri",label:"路径",width:"180"}),(0,s.K2)(i,{prop:"ip",label:"IP",width:"180"}),(0,s.K2)(i,{prop:"ip_addr",label:"IP归属地",width:"180"}),(0,s.K2)(i,{prop:"agent",label:"平台/浏览器","min-width":"180"})])),_:1},8,["data","row-class-name"])}a(1484);var X={data(){return{tableData:[]}},methods:{tableRowClassName({row:t}){if("xsrc.shop"==t.host)return"warning-row"}},mounted(){setTimeout((()=>{this.tableData=this.$store.state.AppTable.table}),500)}};const J=(0,m.c)(X,[["render",F]]);var tt=J;const et=t=>((0,s.ED)("data-v-dbfefb3a"),t=t(),(0,s.ii)(),t),at={class:"aside"},nt=et((()=>(0,s.QD)("h3",null,"查询参数",-1))),lt={class:"begin"},ot={class:"block"},st={class:"end"},it={class:"block"};function rt(t,e,a,n,l,o){const i=(0,s.E1)("el-text"),r=(0,s.E1)("el-date-picker"),d=(0,s.E1)("AppTabs");return(0,s.Wz)(),(0,s.An)("div",at,[nt,(0,s.QD)("div",lt,[(0,s.K2)(i,null,{default:(0,s.Ql)((()=>[(0,s.mY)("开始时间：")])),_:1}),(0,s.QD)("div",ot,[(0,s.K2)(r,{modelValue:l.begin,"onUpdate:modelValue":e[0]||(e[0]=t=>l.begin=t),type:"datetime",placeholder:"输入开始时间",format:"YYYY-MM-DD HH:mm:ss","date-format":"MMM DD, YYYY","time-format":"HH:mm"},null,8,["modelValue"])])]),(0,s.QD)("div",st,[(0,s.K2)(i,null,{default:(0,s.Ql)((()=>[(0,s.mY)("结束时间：")])),_:1}),(0,s.QD)("div",it,[(0,s.K2)(r,{modelValue:l.end,"onUpdate:modelValue":e[1]||(e[1]=t=>l.end=t),type:"datetime",placeholder:"输入结束时间",format:"YYYY-MM-DD HH:mm:ss","date-format":"MMM DD, YYYY","time-format":"HH:mm","default-time":new Date((new Date).setHours(23,59,59,999))},null,8,["modelValue","default-time"])])]),(0,s.K2)(d)])}var dt=a(9096);const pt=t=>((0,s.ED)("data-v-62a33eba"),t=t(),(0,s.ii)(),t),ct={class:"tabs"},ut={class:"header"},mt={class:"btn"},ht=pt((()=>(0,s.QD)("div",{class:"svg"},[(0,s.QD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","data-v-ea893728":""},[(0,s.QD)("path",{fill:"currentColor",d:"M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"})])],-1))),ft=pt((()=>(0,s.QD)("div",{class:"list"},null,-1)));function vt(t,e,a,n,l,o){const i=(0,s.E1)("el-text"),r=(0,s.E1)("el-input");return(0,s.Wz)(),(0,s.An)("div",ct,[(0,s.QD)("div",ut,[(0,s.QD)("div",mt,[(0,s.QD)("div",{class:"host",onClick:e[0]||(e[0]=t=>l.btnvalue=0)},[(0,s.K2)(i,null,{default:(0,s.Ql)((()=>[(0,s.mY)("域名")])),_:1})]),(0,s.QD)("div",{class:"ip",onClick:e[1]||(e[1]=t=>l.btnvalue=1)},[(0,s.K2)(i,null,{default:(0,s.Ql)((()=>[(0,s.mY)("ip")])),_:1})]),(0,s.QD)("div",{class:(0,dt.WN)(["btncover",{active:l.btnvalue}])},null,2)]),(0,s.K2)(r,{modelValue:l.input,"onUpdate:modelValue":e[2]||(e[2]=t=>l.input=t),placeholder:"Please input"},null,8,["modelValue"]),ht]),ft])}var bt={name:"AppTabs",data(){return{input:"",btnvalue:0}}};const At=(0,m.c)(bt,[["render",vt],["__scopeId","data-v-62a33eba"]]);var gt=At,Pt={name:"AppPanel",data(){return{begin:"",end:""}},components:{AppTabs:gt}};const wt=(0,m.c)(Pt,[["render",rt],["__scopeId","data-v-dbfefb3a"]]);var Et=wt;const yt=[{path:"/",components:{main:x,panel:Z}},{path:"/monitor",components:{main:tt,panel:Et}}],Tt=(0,Q.gv)({history:(0,Q.oz)(),routes:yt});var _t=Tt;const Dt=(0,n.W0)(y);Dt.use(l.c,{locale:o.c}),Dt.use(K),Dt.use(_t),Dt.mount("#app")}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,l,o){if(!n){var s=1/0;for(p=0;p<t.length;p++){n=t[p][0],l=t[p][1],o=t[p][2];for(var i=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(i=!1,o<s&&(s=o));if(i){t.splice(p--,1);var d=l();void 0!==d&&(e=d)}}return e}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[n,l,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,o,s=n[0],i=n[1],r=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(r)var p=r(a)}for(e&&e(n);d<s.length;d++)o=s[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(p)},n=self["webpackChunkelement"]=self["webpackChunkelement"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[999],(function(){return a(9252)}));n=a.O(n)})();
//# sourceMappingURL=app.e65529cc.js.map