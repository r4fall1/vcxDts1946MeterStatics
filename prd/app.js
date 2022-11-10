(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://cdn.jsdelivr.net/gh/r4fall1/vcxDts1946MeterWeb@v1.1.1/prd/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=(r("7b17"),r("ab8b"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-100 container",attrs:{id:"app"}},[t._m(0),e("table",{staticClass:"table table-striped table-hover"},[t._m(1),e("tbody",[e("tr",[e("td",[t._v("Voltage")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.voltageL1)))]),t._v(" V")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.voltageL2)))]),t._v(" V")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.voltageL3)))]),t._v(" V")]),e("td")]),e("tr",[e("td",[t._v("Current")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.currentL1)))]),t._v(" A")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.currentL2)))]),t._v(" A")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.currentL3)))]),t._v(" A")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.currentL1+t.energyMeter.currentL2+t.energyMeter.currentL3)))]),t._v(" A")])]),e("tr",[e("td",[t._v("Power")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.powerL1)))]),t._v(" kW")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.powerL2)))]),t._v(" kW")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.powerL3)))]),t._v(" kW")]),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.totalPower)))]),t._v(" kW")])]),e("tr",[e("td",[t._v("Frequency")]),e("td"),e("td"),e("td"),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.frequency)))]),t._v(" Hz")])]),e("tr",[e("td",[t._v("Imported energy")]),e("td"),e("td"),e("td"),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.importActiveEnergy)))]),t._v(" kWh")])]),e("tr",[e("td",[t._v("Exported energy")]),e("td"),e("td"),e("td"),e("td",[e("span",[t._v(t._s(t._f("formatNumber")(t.energyMeter.exportActiveEnergy)))]),t._v(" kWh")])])])]),t._m(2),t._m(3)])}),s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-3 pb-2 d-flex align-items-center"},[e("span",{staticClass:"display-5 me-3"},[t._v("Energy meter")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Data description")]),e("th",{staticClass:"phase-value",attrs:{scope:"col"}},[t._v("L1")]),e("th",{staticClass:"phase-value",attrs:{scope:"col"}},[t._v("L2")]),e("th",{staticClass:"phase-value",attrs:{scope:"col"}},[t._v("L3")]),e("th",{staticClass:"total-value",attrs:{scope:"col"}},[t._v("Total")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-column mt-5"},[e("div",{staticClass:"row justify-content-end mb-2"},[e("div",{staticClass:"col-auto mt-1"},[e("span",[t._v("Refresh interval:")])]),e("div",{staticClass:"col-auto m-0 p-0"},[e("select",{staticClass:"form-select form-select-sm",attrs:{id:"max-data-age"}},[e("option",{attrs:{value:"-1"}},[t._v("None")]),e("option",{attrs:{value:"10"}},[t._v("10 Seconds")]),e("option",{attrs:{value:"60"}},[t._v("1 Minute")]),e("option",{attrs:{value:"600"}},[t._v("10 Minutes")]),e("option",{attrs:{selected:"",value:"3600"}},[t._v("1 Hour")])])]),e("div",{staticClass:"col-auto ms-3"},[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button",id:"refresh-button"}},[t._v("Refresh")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-100",attrs:{id:"content"}},[e("div",{staticClass:"h-100",attrs:{id:"dashboard"}})])}],o=r("d778"),c=r("bc3a");const i=r("6612");var u={name:"App",data(){return{dashboard:{url:String,id:String},energyMeter:{voltageL1:0,voltageL2:0,voltageL3:0,currentL1:0,currentL2:0,currentL3:0,currentTotal:0,powerL1:0,powerL2:0,powerL3:0,totalPower:0,frequency:0,importActiveEnergy:0,exportActiveEnergy:0}}},mounted(){c["a"].get("/config/actual").then((function(t){return t.data})).catch((function(t){console.log(t)})).then(t=>{this.dashboard.url=t.dashboardBaseUrl,this.dashboard.id=t.dashboardId;let e=new o["a"]({baseUrl:this.dashboard.url}),r=e.createDashboard({dashboardId:this.dashboard.id});async function n(){await r.render(document.getElementById("dashboard")),await r.setTheme("light"),await r.setHeightMode("scale"),await r.setWidthMode("scale"),await r.setChartsBackground("transparent"),await r.setMaxDataAge(3600)}n().catch(t=>window.alert(t.message)),document.getElementById("refresh-button").addEventListener("click",(async function(){await r.refresh()})),document.getElementById("max-data-age").addEventListener("change",async t=>{await r.setMaxDataAge(Number(t.target.value))})})},created:function(){const t=this;setInterval((function(){c["a"].get("/energy-meter/get").then((function(t){return t.data})).catch((function(t){console.log(t)})).then(e=>{t.energyMeter=e})}),3e3)},filters:{formatNumber(t){return i(t).format("0.00")}}},l=u,d=(r("d76f"),r("2877")),f=Object(d["a"])(l,a,s,!1,null,null,null),v=f.exports;new n["a"]({render:t=>t(v)}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},d76f:function(t,e,r){"use strict";r("efac")},efac:function(t,e,r){}});
//# sourceMappingURL=app.js.map