(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a7e4"],{bc6c:function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"cc-mar-b-10"},[t._v("\n    使用图表需要安装: v-charts echarts\n    "),e("el-link",{attrs:{href:"https://v-charts.js.org/#/",type:"primary"}},[t._v("v-charts 文档")])],1),t._v(" "),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-funnel",{attrs:{data:t.chartData,colors:t.vchartColor}})],1)],1),t._v(" "),e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-funnel",{attrs:{data:t.chartData,settings:t.chartSettings,colors:t.vchartColor}})],1)],1),t._v(" "),e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-funnel",{attrs:{data:t.chartData1,settings:t.chartSequenceSettings,colors:t.vchartColor}})],1)],1),t._v(" "),e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-funnel",{attrs:{data:t.chartData,settings:t.chartAscendingSettings,colors:t.vchartColor}})],1)],1)],1)],1)},r=[],s=e("ed08"),n={components:{},data:function(){return this.vchartColor=["#95a2ff","#fa8080","#ffc076","#fae768","#87e885","#3cb9fc","#73abf5","#cb9bff","#434348","#90ed7d","#f7a35c","#8085e9​​​​​​​"],this.chartSettings={dimension:"状态1",metrics:"数值"},this.chartUseDefaultSettings={useDefaultOrder:!0,filterZero:!0},this.chartAscendingSettings={ascending:!0},this.chartSequenceSettings={useDefaultOrder:!0,filterZero:!0},{chartData:{columns:["状态","状态1","数值"],rows:[{"状态":"展示","状态1":"展示1","数值":900},{"状态":"访问","状态1":"访问1","数值":600},{"状态":"点击","状态1":"点击1","数值":300},{"状态":"订单","状态1":"订单1","数值":100}]},chartData1:{columns:["状态","数值"],rows:[{"状态":"展示","数值":900},{"状态":"访问","数值":100},{"状态":"零","数值":0},{"状态":"点击","数值":300},{"状态":"订单","数值":200}]}}},computed:{},mounted:function(){},methods:{getChartData:function(t){for(var a=[],e=["日期","访问用户","下单用户","下单率"],c=0;c<t;c++)a.push({"日期":"1/"+(1+c),"访问用户":Object(s["e"])(1e3,6e3),"下单用户":Object(s["e"])(1e3,6e3),"下单率":Object(s["e"])(1,30)});return{rows:a,columns:e}}}},l=n,o=e("2877"),i=Object(o["a"])(l,c,r,!1,null,"177ed92d",null);a["default"]=i.exports}}]);