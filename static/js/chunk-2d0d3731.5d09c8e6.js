(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3731"],{"5d8d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"cc-mar-b-10"},[e._v("\n    使用图表需要安装: v-charts echarts\n    "),a("el-link",{attrs:{href:"https://v-charts.js.org/#/",type:"primary"}},[e._v("v-charts 文档")])],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"cc-mar-b-10"},[a("ve-tree",{attrs:{data:e.chartData}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"cc-mar-b-10"},[a("ve-tree",{attrs:{data:e.chartData1,settings:e.chartSettings}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"cc-mar-b-10"},[a("ve-tree",{attrs:{data:e.chartData,settings:e.chartLayoutSettings}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"cc-mar-b-10"},[a("ve-tree",{attrs:{data:e.chartData,settings:e.chartVerticalSettings}})],1)],1)],1)],1)},s=[],r=a("ed08"),n={name:"f",value:1,link:"https://ele.me",children:[{name:"a",value:1,link:"https://ele.me",children:[{name:"a-a",link:"https://ele.me",value:2},{name:"a-b",link:"https://ele.me",value:2}]},{name:"b",value:1,link:"https://ele.me",children:[{name:"b-a",link:"https://ele.me",value:2},{name:"b-b",link:"https://ele.me",value:2}]},{name:"c",value:3,link:"https://ele.me",children:[{name:"c-a",link:"https://ele.me",value:4},{name:"c-b",link:"https://ele.me",value:2}]},{name:"d",value:3,link:"https://ele.me",children:[{name:"d-a",link:"https://ele.me",value:4},{name:"d-b",link:"https://ele.me",value:2}]}]},c={components:{},data:function(){return this.chartLayoutSettings={seriesMap:{tree1:{layout:"radial"}}},this.chartVerticalSettings={seriesMap:{tree1:{orient:"vertical"}}},this.chartSettings={seriesMap:{tree1:{top:"5%",left:"7%",bottom:"2%",right:"60%"},tree2:{top:"20%",left:"60%",bottom:"22%",right:"18%"}}},{chartData:{columns:["name","value"],rows:[{name:"tree1",value:[n]}]},chartData1:{columns:["name","value"],rows:[{name:"tree1",value:[n]},{name:"tree2",value:[n]}]}}},computed:{},mounted:function(){},methods:{getChartData:function(e){for(var t=[],a=["日期","访问用户","下单用户","下单率"],l=0;l<e;l++)t.push({"日期":"1/"+(1+l),"访问用户":Object(r["e"])(1e3,6e3),"下单用户":Object(r["e"])(1e3,6e3),"下单率":Object(r["e"])(1,30)});return{rows:t,columns:a}}}},i=c,m=a("2877"),h=Object(m["a"])(i,l,s,!1,null,"3e25cb18",null);t["default"]=h.exports}}]);