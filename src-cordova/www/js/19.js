(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"5a08":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("q-btn",{attrs:{color:"primary",label:"Tomar Foto..."},on:{click:a.captureImage}}),t("img",{attrs:{src:a.imageSrc}})],1)},c=[],n={data(){return{imageSrc:""}},methods:{captureImage(){navigator.camera.getPicture((a=>{this.imageSrc=`data:image/jpeg;base64,${a}`}),(()=>{this.$q.notify("No es posible acceder a la camára")}))}}},i=n,o=t("a6c2"),s=t("ef9c"),l=t("63c1"),m=t.n(l),u=Object(o["a"])(i,r,c,!1,null,null,null);e["default"]=u.exports;m()(u,"components",{QBtn:s["a"]})}}]);