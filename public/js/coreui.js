(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/coreui"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ckeditor */ "./node_modules/ckeditor/ckeditor.js");
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ckeditor__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

window.CKEDITOR_BASEPATH = "node_modules/ckeditor/ckeditor.js";
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: String
    },
    id: {
      type: String,
      default: "editor"
    },
    height: {
      type: String,
      default: "90px"
    },
    toolbar: {
      type: Array,
      default: function _default() {
        return [["Undo", "Redo"], ["Bold", "Italic", "Strike"], ["NumberedList", "BulletedList"], ["Cut", "Copy", "Paste"]];
      }
    },
    // language: {
    // 	type: String,
    // 	default: "en"
    // },
    extraplugins: {
      type: String,
      default: ""
    }
  },
  beforeUpdate: function beforeUpdate() {
    var ckeditorId = this.id;

    if (this.value !== ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].getData()) {
      ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].setData(this.value);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var ckeditorId = this.id;
    console.log(this.value);
    var ckeditorConfig = {
      toolbar: this.toolbar,
      language: this.language,
      height: this.height,
      extraPlugins: this.extraplugins
    };
    ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].replace(ckeditorId, ckeditorConfig);
    ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].setData(this.value);
    ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].on("change", function () {
      var ckeditorData = ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].getData();

      if (ckeditorData !== _this.value) {
        _this.$emit("input", ckeditorData);
      }
    });
  },
  destroyed: function destroyed() {
    var ckeditorId = this.id;

    if (ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId]) {
      ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEDITOR"].instances[ckeditorId].destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      paginateOptions: [5, 10, 25, 50, 100],
      paginateSelect: 10,
      search: "",
      sortBy: "full_name",
      // orderBy: "asc",
      orderByAsc: true
    };
  },
  computed: {
    orderedUsers: function orderedUsers() {
      return _.orderBy(this.users, this.sortBy, this.orderBy);
    },
    pagination: function pagination() {
      return {
        pageCount: 1,
        currentPage: 1,
        from: 1,
        to: 1,
        total: 1
      };
    },
    orderBy: function orderBy() {
      if (this.orderByAsc) {
        return "asc";
      } else {
        return "desc";
      }
    }
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/users", {
        params: {
          paginate: this.paginateSelect,
          page: page,
          sortBy: this.sortBy,
          orderBy: this.orderBy,
          search: this.search
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.users = data.data;
        _this.pagination.pageCount = data.meta.last_page;
        _this.pagination.currentPage = data.meta.current_page;
        _this.pagination.from = data.meta.from;
        _this.pagination.to = data.meta.to;
        _this.pagination.total = data.meta.total;
      });
    },
    setOrder: function setOrder(sortBy) {
      this.sortBy = sortBy;
      this.orderByAsc = !this.orderByAsc;
      this.fetch();
    },
    showOrder: function showOrder(linkOrder) {
      if (linkOrder === this.sortBy) {
        if (this.orderBy === "asc") {
          return "sorting_asc";
        } else {
          return "sorting_desc";
        }
      }
    }
  },
  components: {
    paginate: vuejs_paginate__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translat */ "./resources/js/components/back/translat.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.min.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_CKEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/CKEditor.vue */ "./resources/js/components/back/plugins/CKEditor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import CKEditor from "@ckeditor/ckeditor5-vue"
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
// import EditorConfig from "../../../plugins/@ckeditor/ckeditor";
// import editor from "../../../plugins/@ckeditor/ckeditor";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a,
    ckeditor: _plugins_CKEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ["old", "id" // 			'user'
  ],
  data: function data() {
    return {
      user: {
        email: "",
        first_name_en: "",
        first_name_ru: "",
        full_name: "",
        initials_en: "",
        initials_ru: "",
        last_name_en: "",
        last_name_ru: "",
        patronymic_en: "",
        patronymic_ru: "",
        short_name_en: "",
        short_name_ru: ""
      },
      jobs: [] // editor: ClassicEditor,
      // editorConfig: EditorConfig

    };
  },
  created: function created() {
    if (this.old.length !== 0) {
      this.user = this.old;
    } else if (this.id) {
      this.fetch(this.id);
    }
  },
  watch: {
    jobs: function jobs(value, oldValue) {
      this.saveJobsIntoUser();
    }
  },
  methods: {
    fetch: function fetch(id) {
      var _this = this;

      axios.get("/api/users/" + id).then(function (_ref) {
        var data = _ref.data;
        //           console.log(data);
        _this.user = data.data;
        _this.jobs = _this.getUserJobs(data.data);
      });
    },
    getUserJobs: function getUserJobs(user) {
      var res = [];

      if (user.jobs_ru) {
        user.jobs_ru.forEach(function (el, i) {
          res.push({
            ru: user.jobs_ru[i],
            en: user.jobs_en[i]
          });
        });
      }

      return res;
    },
    saveJobsIntoUser: function saveJobsIntoUser() {
      var ru = [];
      var en = [];
      this.jobs.forEach(function (el) {
        ru.push(el.ru);
        en.push(el.en);
      });
      this.user.jobs_ru = ru;
      this.user.jobs_en = en;
    },
    addJob: function addJob() {
      var new_id = this.jobs.length + 1;
      this.jobs.push({
        // id: new_id,
        ru: "",
        en: ""
      });
    },
    deleteJob: function deleteJob(index) {
      if (confirm("Удалить место работы?")) {
        this.jobs.splice(index, 1);
      }
    },
    autocomplite: function autocomplite() {
      var name = this.user.full_name.split(" ", 3);
      this.user.email = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].strtr(_translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(this.user.full_name.toString().toLowerCase()), {
        " ": "-",
        ".": "-"
      }) + "@localhost.lo";
      var f_name, l_name, pat, ini;

      switch (name.length) {
        case 1:
          l_name = name[0];
          break;

        case 2:
          l_name = name[0];
          name[1] = name[1].split(".");

          if (name[1].length == 1) {
            f_name = name[1][0];
            ini = f_name.split("")[0] + ".";
          } else {
            f_name = name[1][0];
            pat = name[1][1];
            ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
          }

          break;

        case 3:
          l_name = name[0];
          f_name = name[1];
          pat = name[2];
          ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
          break;
      }

      if (f_name) {
        this.user.first_name_ru = f_name;
        this.user.first_name_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(f_name);
      } else {
        this.user.first_name_ru = "";
        this.user.first_name_en = "";
      }

      if (l_name) {
        this.user.last_name_ru = l_name;
        this.user.last_name_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(l_name);
      } else {
        this.user.last_name_ru = "";
        this.user.last_name_en = "";
      }

      if (pat) {
        this.user.patronymic_ru = pat;
        this.user.patronymic_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(pat);
      } else {
        this.user.patronymic_ru = "";
        this.user.patronymic_en = "";
      }

      if (ini) {
        this.user.initials_ru = ini;
        this.user.initials_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(ini);
        this.user.short_name_ru = l_name + " " + ini;
        this.user.short_name_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(l_name + " " + ini);
      } else {
        this.user.initials_ru = "";
        this.user.initials_en = "";
        this.user.short_name_ru = l_name;
        this.user.short_name_en = _translat__WEBPACK_IMPORTED_MODULE_0__["default"].translat(l_name);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/ckeditor/ckeditor.js":
/*!*******************************************!*\
  !*** ./node_modules/ckeditor/ckeditor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/*
Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){window.CKEDITOR&&window.CKEDITOR.dom||(window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i,e={timestamp:"J1QC",version:"4.11.3 (Standard)",revision:"8b53603e8",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var b=window.CKEDITOR_BASEPATH||"";if(!b)for(var c=document.getElementsByTagName("script"),e=0;e<c.length;e++){var h=c[e].src.match(a);if(h){b=h[1];break}}-1==b.indexOf(":/")&&
"//"!=b.slice(0,2)&&(b=0===b.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+b:location.href.match(/^[^\?]*\/(?:)/)[0]+b);if(!b)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return b}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a);this.timestamp&&"/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a)&&(a+=(0<=a.indexOf("?")?"\x26":"?")+"t\x3d"+this.timestamp);
return a},domReady:function(){function a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",a,!1),b()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),b())}catch(h){}}function b(){for(var a;a=c.shift();)a()}var c=[];return function(h){function g(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(g,1);return}a()}c.push(h);"complete"===document.readyState&&setTimeout(a,1);if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",
a,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",a);window.attachEvent("onload",a);h=!1;try{h=!window.frameElement}catch(b){}document.documentElement.doScroll&&h&&g()}}}()},b=window.CKEDITOR_GETURL;if(b){var c=e.getUrl;e.getUrl=function(a){return b.call(e,a)||c.call(e,a)}}return e}()),CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var e=CKEDITOR.event.prototype,b;for(b in e)null==a[b]&&(a[b]=e[b])},
CKEDITOR.event.prototype=function(){function a(a){var d=e(this);return d[a]||(d[a]=new b(a))}var e=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={});return a.events||(a.events={})},b=function(a){this.name=a;this.listeners=[]};b.prototype={getListenerIndex:function(a){for(var b=0,e=this.listeners;b<e.length;b++)if(e[b].fn==a)return b;return-1}};return{define:function(b,d){var e=a.call(this,b);CKEDITOR.tools.extend(e,d,!0)},on:function(b,d,e,k,h){function g(a,f,n,g){a={name:b,sender:this,editor:a,
data:f,listenerData:k,stop:n,cancel:g,removeListener:l};return!1===d.call(e,a)?!1:a.data}function l(){n.removeListener(b,d)}var f=a.call(this,b);if(0>f.getListenerIndex(d)){f=f.listeners;e||(e=this);isNaN(h)&&(h=10);var n=this;g.fn=d;g.priority=h;for(var u=f.length-1;0<=u;u--)if(f[u].priority<=h)return f.splice(u+1,0,g),{removeListener:l};f.unshift(g)}return{removeListener:l}},once:function(){var a=Array.prototype.slice.call(arguments),b=a[1];a[1]=function(a){a.removeListener();return b.apply(this,
arguments)};return this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1;var a=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return a},fire:function(){var a=0,b=function(){a=1},m=0,k=function(){m=1};return function(h,g,l){var f=e(this)[h];h=a;var n=m;a=m=0;if(f){var u=f.listeners;if(u.length)for(var u=u.slice(0),v,x=0;x<u.length;x++){if(f.errorProof)try{v=u[x].call(this,l,g,b,k)}catch(p){}else v=u[x].call(this,l,g,b,k);!1===v?m=1:"undefined"!=typeof v&&(g=v);if(a||m)break}}g=
m?!1:"undefined"==typeof g?!0:g;a=h;m=n;return g}}(),fireOnce:function(a,b,m){b=this.fire(a,b,m);delete e(this)[a];return b},removeListener:function(a,b){var m=e(this)[a];if(m){var k=m.getListenerIndex(b);0<=k&&m.listeners.splice(k,1)}},removeAllListeners:function(){var a=e(this),b;for(b in a)delete a[b]},hasListeners:function(a){return(a=e(this)[a])&&0<a.listeners.length}}}()),CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=
function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fire.call(this,a,e,this)},CKEDITOR.editor.prototype.fireOnce=function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fireOnce.call(this,a,e,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype)),CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),e=a.match(/edge[ \/](\d+.?\d*)/),b=-1<a.indexOf("trident/"),b=!(!e&&!b),b={ie:b,edge:!!e,webkit:!b&&
-1<a.indexOf(" applewebkit/"),air:-1<a.indexOf(" adobeair/"),mac:-1<a.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode&&(!document.documentMode||10>document.documentMode),mobile:-1<a.indexOf("mobile"),iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return!1;var a=document.domain,b=window.location.hostname;return a!=b&&a!="["+b+"]"},secure:"https:"==location.protocol};b.gecko="Gecko"==navigator.product&&!b.webkit&&!b.ie;b.webkit&&(-1<a.indexOf("chrome")?b.chrome=
!0:b.safari=!0);var c=0;b.ie&&(c=e?parseFloat(e[1]):b.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode,b.ie9Compat=9==c,b.ie8Compat=8==c,b.ie7Compat=7==c,b.ie6Compat=7>c||b.quirks);b.gecko&&(e=a.match(/rv:([\d\.]+)/))&&(e=e[1].split("."),c=1E4*e[0]+100*(e[1]||0)+1*(e[2]||0));b.air&&(c=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));b.webkit&&(c=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));b.version=c;b.isCompatible=!(b.ie&&7>c)&&!(b.gecko&&4E4>c)&&!(b.webkit&&
534>c);b.hidpi=2<=window.devicePixelRatio;b.needsBrFiller=b.gecko||b.webkit||b.ie&&10<c;b.needsNbspFiller=b.ie&&11>c;b.cssClass="cke_browser_"+(b.ie?"ie":b.gecko?"gecko":b.webkit?"webkit":"unknown");b.quirks&&(b.cssClass+=" cke_browser_quirks");b.ie&&(b.cssClass+=" cke_browser_ie"+(b.quirks?"6 cke_browser_iequirks":b.version));b.air&&(b.cssClass+=" cke_browser_air");b.iOS&&(b.cssClass+=" cke_browser_ios");b.hidpi&&(b.cssClass+=" cke_hidpi");return b}()),"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);
CKEDITOR.loadFullCore=function(){if("basic_ready"!=CKEDITOR.status)CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=CKEDITOR.loadFullCore,e=CKEDITOR.loadFullCoreTimeout;a&&(CKEDITOR.status=
"basic_ready",a&&a._load?a():e&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},1E3*e))})})();CKEDITOR.status="basic_loaded"}(),"use strict",CKEDITOR.VERBOSITY_WARN=1,CKEDITOR.VERBOSITY_ERROR=2,CKEDITOR.verbosity=CKEDITOR.VERBOSITY_WARN|CKEDITOR.VERBOSITY_ERROR,CKEDITOR.warn=function(a,e){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_WARN&&CKEDITOR.fire("log",{type:"warn",errorCode:a,additionalData:e})},CKEDITOR.error=function(a,e){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_ERROR&&CKEDITOR.fire("log",
{type:"error",errorCode:a,additionalData:e})},CKEDITOR.on("log",function(a){if(window.console&&window.console.log){var e=console[a.data.type]?a.data.type:"log",b=a.data.errorCode;if(a=a.data.additionalData)console[e]("[CKEDITOR] Error code: "+b+".",a);else console[e]("[CKEDITOR] Error code: "+b+".");console[e]("[CKEDITOR] For more information about this error go to https://ckeditor.com/docs/ckeditor4/latest/guide/dev_errors.html#"+b)}},null,null,999),CKEDITOR.dom={},function(){function a(a,f,b){this._minInterval=
a;this._context=b;this._lastOutput=this._scheduledTimer=0;this._output=CKEDITOR.tools.bind(f,b||{});var g=this;this.input=function(){function a(){g._lastOutput=(new Date).getTime();g._scheduledTimer=0;g._call()}if(!g._scheduledTimer||!1!==g._reschedule()){var f=(new Date).getTime()-g._lastOutput;f<g._minInterval?g._scheduledTimer=setTimeout(a,g._minInterval-f):a()}}}function e(f,b,g){a.call(this,f,b,g);this._args=[];var h=this;this.input=CKEDITOR.tools.override(this.input,function(a){return function(){h._args=
Array.prototype.slice.call(arguments);a.call(this)}})}var b=[],c=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",d=/&/g,m=/>/g,k=/</g,h=/"/g,g=/&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,l={lt:"\x3c",gt:"\x3e",amp:"\x26",quot:'"',nbsp:" ",shy:"­"},f=function(a,f){return"#"==f[0]?String.fromCharCode(parseInt(f.slice(1),10)):l[f]};CKEDITOR.on("reset",function(){b=[]});CKEDITOR.tools={arrayCompare:function(a,f){if(!a&&!f)return!0;if(!a||!f||a.length!=f.length)return!1;
for(var b=0;b<a.length;b++)if(a[b]!=f[b])return!1;return!0},getIndex:function(a,f){for(var b=0;b<a.length;++b)if(f(a[b]))return b;return-1},clone:function(a){var f;if(a&&a instanceof Array){f=[];for(var b=0;b<a.length;b++)f[b]=CKEDITOR.tools.clone(a[b]);return f}if(null===a||"object"!=typeof a||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof RegExp||a.nodeType||a.window===a)return a;f=new a.constructor;for(b in a)f[b]=CKEDITOR.tools.clone(a[b]);return f},
capitalize:function(a,f){return a.charAt(0).toUpperCase()+(f?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var f=arguments.length,b,g;"boolean"==typeof(b=arguments[f-1])?f--:"boolean"==typeof(b=arguments[f-2])&&(g=arguments[f-1],f-=2);for(var h=1;h<f;h++){var c=arguments[h],d;for(d in c)if(!0===b||null==a[d])if(!g||d in g)a[d]=c[d]}return a},prototypedCopy:function(a){var f=function(){};f.prototype=a;return new f},copy:function(a){var f={},b;for(b in a)f[b]=a[b];return f},isArray:function(a){return"[object Array]"==
Object.prototype.toString.call(a)},isEmpty:function(a){for(var f in a)if(a.hasOwnProperty(f))return!1;return!0},cssVendorPrefix:function(a,f,b){if(b)return c+a+":"+f+";"+a+":"+f;b={};b[a]=f;b[c+a]=f;return b},cssStyleToDomStyle:function(){var a=document.createElement("div").style,f="undefined"!=typeof a.cssFloat?"cssFloat":"undefined"!=typeof a.styleFloat?"styleFloat":"float";return function(a){return"float"==a?f:a.replace(/-./g,function(a){return a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){a=
[].concat(a);for(var f,b=[],g=0;g<a.length;g++)if(f=a[g])/@import|[{}]/.test(f)?b.push("\x3cstyle\x3e"+f+"\x3c/style\x3e"):b.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"'+f+'"\x3e');return b.join("")},htmlEncode:function(a){return void 0===a||null===a?"":String(a).replace(d,"\x26amp;").replace(m,"\x26gt;").replace(k,"\x26lt;")},htmlDecode:function(a){return a.replace(g,f)},htmlEncodeAttr:function(a){return CKEDITOR.tools.htmlEncode(a).replace(h,"\x26quot;")},htmlDecodeAttr:function(a){return CKEDITOR.tools.htmlDecode(a)},
transformPlainTextToHtml:function(a,f){var b=f==CKEDITOR.ENTER_BR,g=this.htmlEncode(a.replace(/\r\n/g,"\n")),g=g.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;"),h=f==CKEDITOR.ENTER_P?"p":"div";if(!b){var c=/\n{2}/g;if(c.test(g))var d="\x3c"+h+"\x3e",l="\x3c/"+h+"\x3e",g=d+g.replace(c,function(){return l+d})+l}g=g.replace(/\n/g,"\x3cbr\x3e");b||(g=g.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/"+h+"\x3e)"),function(a){return CKEDITOR.tools.repeat(a,2)}));g=g.replace(/^ | $/g,"\x26nbsp;");return g=g.replace(/(>|\s) /g,
function(a,f){return f+"\x26nbsp;"}).replace(/ (?=<)/g,"\x26nbsp;")},getNextNumber:function(){var a=0;return function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},getUniqueId:function(){for(var a="e",f=0;8>f;f++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a},override:function(a,f){var b=f(a);b.prototype=a.prototype;return b},setTimeout:function(a,f,b,g,h){h||(h=window);b||(b=h);return h.setTimeout(function(){g?a.apply(b,[].concat(g)):a.apply(b)},
f||0)},throttle:function(a,f,b){return new this.buffers.throttle(a,f,b)},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(f){return f.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(f){return f.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g;return function(f){return f.replace(a,"")}}(),indexOf:function(a,f){if("function"==typeof f)for(var b=0,g=a.length;b<g;b++){if(f(a[b]))return b}else{if(a.indexOf)return a.indexOf(f);b=0;for(g=a.length;b<
g;b++)if(a[b]===f)return b}return-1},search:function(a,f){var b=CKEDITOR.tools.indexOf(a,f);return 0<=b?a[b]:null},bind:function(a,f){return function(){return a.apply(f,arguments)}},createClass:function(a){var f=a.$,b=a.base,g=a.privates||a._,h=a.proto;a=a.statics;!f&&(f=function(){b&&this.base.apply(this,arguments)});if(g)var c=f,f=function(){var a=this._||(this._={}),f;for(f in g){var b=g[f];a[f]="function"==typeof b?CKEDITOR.tools.bind(b,this):b}c.apply(this,arguments)};b&&(f.prototype=this.prototypedCopy(b.prototype),
f.prototype.constructor=f,f.base=b,f.baseProto=b.prototype,f.prototype.base=function(){this.base=b.prototype.base;b.apply(this,arguments);this.base=arguments.callee});h&&this.extend(f.prototype,h,!0);a&&this.extend(f,a,!0);return f},addFunction:function(a,f){return b.push(function(){return a.apply(f||this,arguments)})-1},removeFunction:function(a){b[a]=null},callFunction:function(a){var f=b[a];return f&&f.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=/^-?\d+\.?\d*px$/,
f;return function(b){f=CKEDITOR.tools.trim(b+"")+"px";return a.test(f)?f:b||""}}(),convertToPx:function(){var a;return function(f){a||(a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e',CKEDITOR.document),CKEDITOR.document.getBody().append(a));if(!/%$/.test(f)){var b=0>parseFloat(f);b&&(f=f.replace("-",""));a.setStyle("width",f);f=a.$.clientWidth;return b?-f:f}return f}}(),repeat:function(a,f){return Array(f+
1).join(a)},tryThese:function(){for(var a,f=0,b=arguments.length;f<b;f++){var g=arguments[f];try{a=g();break}catch(h){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var f=arguments,b=this;window.setTimeout(function(){a.apply(b,f)},0)}},normalizeCssText:function(a,f){var b=[],g,h=CKEDITOR.tools.parseCssText(a,!0,f);for(g in h)b.push(g+":"+h[g]);b.sort();return b.length?b.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,
function(a,f,b,g){a=[f,b,g];for(f=0;3>f;f++)a[f]=("0"+parseInt(a[f],10).toString(16)).slice(-2);return"#"+a.join("")})},normalizeHex:function(a){return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi,function(a,f,b,g){a=f.toLowerCase();3==a.length&&(a=a.split(""),a=[a[0],a[0],a[1],a[1],a[2],a[2]].join(""));return"#"+a+g})},parseCssText:function(a,f,b){var g={};b&&(a=(new CKEDITOR.dom.element("span")).setAttribute("style",a).getAttribute("style")||"");a&&(a=CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a)));
if(!a||";"==a)return g;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,b,h){f&&(b=b.toLowerCase(),"font-family"==b&&(h=h.replace(/\s*,\s*/g,",")),h=CKEDITOR.tools.trim(h));g[b]=h});return g},writeCssText:function(a,f){var b,g=[];for(b in a)g.push(b+":"+a[b]);f&&g.sort();return g.join("; ")},objectCompare:function(a,f,b){var g;if(!a&&!f)return!0;if(!a||!f)return!1;for(g in a)if(a[g]!=f[g])return!1;if(!b)for(g in f)if(a[g]!=f[g])return!1;return!0},objectKeys:function(a){var f=
[],b;for(b in a)f.push(b);return f},convertArrayToObject:function(a,f){var b={};1==arguments.length&&(f=!0);for(var g=0,h=a.length;g<h;++g)b[a[g]]=f;return b},fixDomain:function(){for(var a;;)try{a=window.parent.document.domain;break}catch(f){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=a}return!!a},eventsBuffer:function(a,f,b){return new this.buffers.event(a,f,b)},enableHtml5Elements:function(a,f){for(var b="abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "),
g=b.length,h;g--;)h=a.createElement(b[g]),f&&a.appendChild(h)},checkIfAnyArrayItemMatches:function(a,f){for(var b=0,g=a.length;b<g;++b)if(a[b].match(f))return!0;return!1},checkIfAnyObjectPropertyMatches:function(a,f){for(var b in a)if(b.match(f))return!0;return!1},keystrokeToString:function(a,f){var b=this.keystrokeToArray(a,f);b.display=b.display.join("+");b.aria=b.aria.join("+");return b},keystrokeToArray:function(a,f){var b=f&16711680,g=f&65535,h=CKEDITOR.env.mac,c=[],d=[];b&CKEDITOR.CTRL&&(c.push(h?
"⌘":a[17]),d.push(h?a[224]:a[17]));b&CKEDITOR.ALT&&(c.push(h?"⌥":a[18]),d.push(a[18]));b&CKEDITOR.SHIFT&&(c.push(h?"⇧":a[16]),d.push(a[16]));g&&(a[g]?(c.push(a[g]),d.push(a[g])):(c.push(String.fromCharCode(g)),d.push(String.fromCharCode(g))));return{display:c,aria:d}},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d",getCookie:function(a){a=a.toLowerCase();for(var f=document.cookie.split(";"),b,g,h=0;h<f.length;h++)if(b=f[h].split("\x3d"),
g=decodeURIComponent(CKEDITOR.tools.trim(b[0]).toLowerCase()),g===a)return decodeURIComponent(1<b.length?b[1]:"");return null},setCookie:function(a,f){document.cookie=encodeURIComponent(a)+"\x3d"+encodeURIComponent(f)+";path\x3d/"},getCsrfToken:function(){var a=CKEDITOR.tools.getCookie("ckCsrfToken");if(!a||40!=a.length){var a=[],f="";if(window.crypto&&window.crypto.getRandomValues)a=new Uint8Array(40),window.crypto.getRandomValues(a);else for(var b=0;40>b;b++)a.push(Math.floor(256*Math.random()));
for(b=0;b<a.length;b++)var g="abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[b]%36),f=f+(.5<Math.random()?g.toUpperCase():g);a=f;CKEDITOR.tools.setCookie("ckCsrfToken",a)}return a},escapeCss:function(a){return a?window.CSS&&CSS.escape?CSS.escape(a):isNaN(parseInt(a.charAt(0),10))?a:"\\3"+a.charAt(0)+" "+a.substring(1,a.length):""},getMouseButton:function(a){return(a=a.data?a.data.$:a)?CKEDITOR.env.ie&&(9>CKEDITOR.env.version||CKEDITOR.env.ie6Compat)?4===a.button?CKEDITOR.MOUSE_BUTTON_MIDDLE:1===a.button?
CKEDITOR.MOUSE_BUTTON_LEFT:CKEDITOR.MOUSE_BUTTON_RIGHT:a.button:!1},convertHexStringToBytes:function(a){var f=[],b=a.length/2,g;for(g=0;g<b;g++)f.push(parseInt(a.substr(2*g,2),16));return f},convertBytesToBase64:function(a){var f="",b=a.length,g;for(g=0;g<b;g+=3){var h=a.slice(g,g+3),c=h.length,d=[],l;if(3>c)for(l=c;3>l;l++)h[l]=0;d[0]=(h[0]&252)>>2;d[1]=(h[0]&3)<<4|h[1]>>4;d[2]=(h[1]&15)<<2|(h[2]&192)>>6;d[3]=h[2]&63;for(l=0;4>l;l++)f=l<=c?f+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d[l]):
f+"\x3d"}return f},style:{parse:{_colors:{aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",
darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",
gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",
lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",
mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",
sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},_borderStyle:"none hidden dotted dashed solid double groove ridge inset outset".split(" "),
_widthRegExp:/^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/,_rgbaRegExp:/rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi,_hslaRegExp:/hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi,background:function(a){var f={},b=this._findColor(a);b.length&&(f.color=b[0],CKEDITOR.tools.array.forEach(b,function(f){a=a.replace(f,"")}));if(a=CKEDITOR.tools.trim(a))f.unprocessed=a;return f},margin:function(a){function f(a){b.top=g[a[0]];b.right=
g[a[1]];b.bottom=g[a[2]];b.left=g[a[3]]}var b={},g=a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset)/g)||["0px"];switch(g.length){case 1:f([0,0,0,0]);break;case 2:f([0,1,0,1]);break;case 3:f([0,1,2,1]);break;case 4:f([0,1,2,3])}return b},border:function(a){var f={},b=a.split(/\s+/g);a=CKEDITOR.tools.style.parse._findColor(a);a.length&&(f.color=a[0]);CKEDITOR.tools.array.forEach(b,function(a){f.style||-1===CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle,a)?!f.width&&CKEDITOR.tools.style.parse._widthRegExp.test(a)&&
(f.width=a):f.style=a});return f},_findColor:function(a){var f=[],b=CKEDITOR.tools.array,f=f.concat(a.match(this._rgbaRegExp)||[]),f=f.concat(a.match(this._hslaRegExp)||[]);return f=f.concat(b.filter(a.split(/\s+/),function(a){return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi)?!0:a.toLowerCase()in CKEDITOR.tools.style.parse._colors}))}}},array:{filter:function(a,f,b){var g=[];this.forEach(a,function(h,c){f.call(b,h,c,a)&&g.push(h)});return g},forEach:function(a,f,b){var g=a.length,h;for(h=0;h<g;h++)f.call(b,
a[h],h,a)},map:function(a,f,b){for(var g=[],h=0;h<a.length;h++)g.push(f.call(b,a[h],h,a));return g},reduce:function(a,f,b,g){for(var h=0;h<a.length;h++)b=f.call(g,b,a[h],h,a);return b},every:function(a,f,b){if(!a.length)return!0;f=this.filter(a,f,b);return a.length===f.length}},object:{findKey:function(a,f){if("object"!==typeof a)return null;for(var b in a)if(a[b]===f)return b;return null},merge:function(a,f){var b=CKEDITOR.tools,g=b.clone(a),h=b.clone(f);b.array.forEach(b.objectKeys(h),function(a){g[a]=
"object"===typeof h[a]&&"object"===typeof g[a]?b.object.merge(g[a],h[a]):h[a]});return g}},getAbsoluteRectPosition:function(a,f){function b(a){if(a){var f=a.getClientRect();g.top+=f.top;g.left+=f.left;"x"in g&&"y"in g&&(g.x+=f.x,g.y+=f.y);b(a.getWindow().getFrame())}}var g=CKEDITOR.tools.copy(f);b(a.getFrame());var h=CKEDITOR.document.getWindow().getScrollPosition();g.top+=h.y;g.left+=h.x;"x"in g&&"y"in g&&(g.y+=h.y,g.x+=h.x);g.right=g.left+g.width;g.bottom=g.top+g.height;return g}};a.prototype={reset:function(){this._lastOutput=
0;this._clearTimer()},_reschedule:function(){return!1},_call:function(){this._output()},_clearTimer:function(){this._scheduledTimer&&clearTimeout(this._scheduledTimer);this._scheduledTimer=0}};e.prototype=CKEDITOR.tools.prototypedCopy(a.prototype);e.prototype._reschedule=function(){this._scheduledTimer&&this._clearTimer()};e.prototype._call=function(){this._output.apply(this._context,this._args)};CKEDITOR.tools.buffers={};CKEDITOR.tools.buffers.event=a;CKEDITOR.tools.buffers.throttle=e;CKEDITOR.tools.array.indexOf=
CKEDITOR.tools.indexOf;CKEDITOR.tools.array.isArray=CKEDITOR.tools.isArray;CKEDITOR.MOUSE_BUTTON_LEFT=0;CKEDITOR.MOUSE_BUTTON_MIDDLE=1;CKEDITOR.MOUSE_BUTTON_RIGHT=2}(),CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,e=function(a,f){for(var b=CKEDITOR.tools.clone(a),g=1;g<arguments.length;g++){f=arguments[g];for(var h in f)delete b[h]}return b},b={},c={},d={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,
hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},m={command:1,link:1,meta:1,noscript:1,script:1,style:1},k={},h={"#":1},g={center:1,dir:1,noframes:1};a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,
u:1,"var":1,video:1,wbr:1},h,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,d,b,g);e={a:e(b,{a:1,button:1}),abbr:b,address:c,area:k,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:k,bdi:b,bdo:b,blockquote:c,body:c,br:k,button:e(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:k,colgroup:{col:1},command:k,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:k,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},
c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},m),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:k,html:a({head:1,body:1},c,m),i:b,iframe:h,img:k,input:k,ins:b,kbd:b,keygen:k,label:b,legend:b,li:c,link:k,main:c,map:c,mark:b,menu:a({li:1},c),meta:k,meter:e(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:h,output:b,p:b,param:k,pre:b,progress:e(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,
script:h,section:c,select:{optgroup:1,option:1},small:b,source:k,span:b,strong:b,style:h,sub:b,summary:a({h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},b),sup:b,table:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:h,tfoot:{tr:1},th:c,thead:{tr:1},time:e(b,{time:1}),title:h,tr:{th:1,td:1},track:k,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:k,acronym:b,applet:a({param:1},c),basefont:k,big:b,center:c,dialog:k,dir:{li:1},font:b,isindex:k,noframes:c,strike:b,tt:b};a(e,{$block:a({audio:1,
dd:1,dt:1,figcaption:1,li:1,video:1},d,g),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,
base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},$inline:b,$list:{dl:1,ol:1,ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},e.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,
b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,
li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return e}(),CKEDITOR.dom.event=function(a){this.$=a},CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a+=CKEDITOR.CTRL;this.$.shiftKey&&(a+=CKEDITOR.SHIFT);this.$.altKey&&(a+=CKEDITOR.ALT);return a},preventDefault:function(a){var e=this.$;e.preventDefault?e.preventDefault():e.returnValue=!1;a&&this.stopPropagation()},
stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},getTarget:function(){var a=this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}},CKEDITOR.CTRL=1114112,
CKEDITOR.SHIFT=2228224,CKEDITOR.ALT=4456448,CKEDITOR.EVENT_PHASE_CAPTURING=1,CKEDITOR.EVENT_PHASE_AT_TARGET=2,CKEDITOR.EVENT_PHASE_BUBBLING=3,CKEDITOR.dom.domObject=function(a){a&&(this.$=a)},CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){"undefined"!=typeof CKEDITOR&&a.fire(b,new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;(a=this.getCustomData("_"))||this.setCustomData("_",a={});return a},on:function(e){var b=this.getCustomData("_cke_nativeListeners");
b||(b={},this.setCustomData("_cke_nativeListeners",b));b[e]||(b=b[e]=a(this,e),this.$.addEventListener?this.$.addEventListener(e,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&this.$.attachEvent("on"+e,b));return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];c&&(this.$.removeEventListener?this.$.removeEventListener(a,
c,!1):this.$.detachEvent&&this.$.detachEvent("on"+a,c),delete b[a])}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,!1);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}(),function(a){var e={};CKEDITOR.on("reset",function(){e={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return!1}};a.setCustomData=function(a,
c){var d=this.getUniqueId();(e[d]||(e[d]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&e[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&e[c],d,m;c&&(d=c[a],m=a in c,delete c[a]);return m?d:null};a.clearCustomData=function(){this.removeAllListeners();var a=this.$["data-cke-expando"];a&&delete e[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};
CKEDITOR.event.implementOn(a)}(CKEDITOR.dom.domObject.prototype),CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this},CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject,CKEDITOR.NODE_ELEMENT=1,CKEDITOR.NODE_DOCUMENT=9,CKEDITOR.NODE_TEXT=
3,CKEDITOR.NODE_COMMENT=8,CKEDITOR.NODE_DOCUMENT_FRAGMENT=11,CKEDITOR.POSITION_IDENTICAL=0,CKEDITOR.POSITION_DISCONNECTED=1,CKEDITOR.POSITION_FOLLOWING=2,CKEDITOR.POSITION_PRECEDING=4,CKEDITOR.POSITION_IS_CONTAINED=8,CKEDITOR.POSITION_CONTAINS=16,CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,e){a.append(this,e);return a},clone:function(a,e){function b(c){c["data-cke-expando"]&&(c["data-cke-expando"]=!1);if(c.nodeType==CKEDITOR.NODE_ELEMENT||c.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)if(e||
c.nodeType!=CKEDITOR.NODE_ELEMENT||c.removeAttribute("id",!1),a){c=c.childNodes;for(var d=0;d<c.length;d++)b(c[d])}}function c(b){if(b.type==CKEDITOR.NODE_ELEMENT||b.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT){if(b.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var d=b.getName();":"==d[0]&&b.renameNode(d.substring(1))}if(a)for(d=0;d<b.getChildCount();d++)c(b.getChild(d))}}var d=this.$.cloneNode(a);b(d);d=new CKEDITOR.dom.node(d);CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(this.type==CKEDITOR.NODE_ELEMENT||this.type==
CKEDITOR.NODE_DOCUMENT_FRAGMENT)&&c(d);return d},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$);return a},getAddress:function(a){for(var e=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var d=c.parentNode;
d&&e.unshift(this.getIndex.call({$:c},a));c=d}return e},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function e(a,h){var g=h?a.nextSibling:a.previousSibling;return g&&g.nodeType==CKEDITOR.NODE_TEXT?b(g)?e(g,h):g:null}function b(a){return!a.nodeValue||a.nodeValue==CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE}var c=this.$,d=-1,m;if(!this.$.parentNode||a&&c.nodeType==CKEDITOR.NODE_TEXT&&b(c)&&!e(c)&&!e(c,!0))return-1;
do a&&c!=this.$&&c.nodeType==CKEDITOR.NODE_TEXT&&(m||b(c))||(d++,m=c.nodeType==CKEDITOR.NODE_TEXT);while(c=c.previousSibling);return d},getNextSourceNode:function(a,e,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getFirst&&this.getFirst();var d;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getNext()}for(;!a&&(d=(d||this).getParent());){if(b&&!1===b(d,!0))return null;a=d.getNext()}return!a||b&&!1===b(a)?null:e&&e!=a.type?a.getNextSourceNode(!1,
e,b):a},getPreviousSourceNode:function(a,e,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getLast&&this.getLast();var d;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getPrevious()}for(;!a&&(d=(d||this).getParent());){if(b&&!1===b(d,!0))return null;a=d.getPrevious()}return!a||b&&!1===b(a)?null:e&&a.type!=e?a.getPreviousSourceNode(!1,e,b):a},getPrevious:function(a){var e=this.$,b;do b=(e=e.previousSibling)&&10!=e.nodeType&&new CKEDITOR.dom.node(e);
while(b&&a&&!a(b));return b},getNext:function(a){var e=this.$,b;do b=(e=e.nextSibling)&&new CKEDITOR.dom.node(e);while(b&&a&&!a(b));return b},getParent:function(a){var e=this.$.parentNode;return e&&(e.nodeType==CKEDITOR.NODE_ELEMENT||a&&e.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(e):null},getParents:function(a){var e=this,b=[];do b[a?"push":"unshift"](e);while(e=e.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;if(a.contains&&a.contains(this))return a;
var e=this.contains?this:this.getParent();do if(e.contains(a))return e;while(e=e.getParent());return null},getPosition:function(a){var e=this.$,b=a.$;if(e.compareDocumentPosition)return e.compareDocumentPosition(b);if(e==b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(e.contains){if(e.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(e))return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in
e)return 0>e.sourceIndex||0>b.sourceIndex?CKEDITOR.POSITION_DISCONNECTED:e.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}e=this.getAddress();a=a.getAddress();for(var b=Math.min(e.length,a.length),c=0;c<b;c++)if(e[c]!=a[c])return e[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;return e.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,e){var b=
this.$,c,d;e||(b=b.parentNode);"function"==typeof a?(d=!0,c=a):(d=!1,c=function(b){b="string"==typeof b.nodeName?b.nodeName.toLowerCase():"";return"string"==typeof a?b==a:b in a});for(;b;){if(c(d?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b);try{b=b.parentNode}catch(m){b=null}}return null},hasAscendant:function(a,e){var b=this.$;e||(b=b.parentNode);for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return!0;b=b.parentNode}return!1},move:function(a,e){a.append(this.remove(),e)},remove:function(a){var e=
this.$,b=e.parentNode;if(b){if(a)for(;a=e.firstChild;)b.insertBefore(e.removeChild(a),e);b.removeChild(e)}return this},replace:function(a){this.insertBefore(a);a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var e=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(e)e.length<b&&(a.split(b-e.length),this.$.removeChild(this.$.firstChild));else{a.remove();continue}}break}},rtrim:function(){for(var a;this.getLast&&
(a=this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var e=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(e)e.length<b&&(a.split(e.length),this.$.lastChild.parentNode.removeChild(this.$.lastChild));else{a.remove();continue}}break}CKEDITOR.env.needsBrFiller&&(a=this.$.lastChild)&&1==a.type&&"br"==a.nodeName.toLowerCase()&&a.parentNode.removeChild(a)},isReadOnly:function(a){var e=this;this.type!=CKEDITOR.NODE_ELEMENT&&(e=this.getParent());CKEDITOR.env.edge&&e&&e.is("textarea","input")&&(a=!0);
if(!a&&e&&"undefined"!=typeof e.$.isContentEditable)return!(e.$.isContentEditable||e.data("cke-editable"));for(;e;){if(e.data("cke-editable"))return!1;if(e.hasAttribute("contenteditable"))return"false"==e.getAttribute("contenteditable");e=e.getParent()}return!0}}),CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var a=
this.$.document,e="CSS1Compat"==a.compatMode;return{width:(e?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(e?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?new CKEDITOR.dom.element.get(a):
null}}),CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var e=new CKEDITOR.dom.element("link");e.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(e)}},appendStyleText:function(a){if(this.$.createStyleSheet){var e=this.$.createStyleSheet("");
e.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return e||b.$.sheet},createElement:function(a,e){var b=new CKEDITOR.dom.element(a,this);e&&(e.attributes&&b.setAttributes(e.attributes),e.styles&&b.setStyles(e.styles));return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a;try{a=this.$.activeElement}catch(e){return null}return new CKEDITOR.dom.element(a)},
getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,e){for(var b=this.$.documentElement,c=0;b&&c<a.length;c++){var d=a[c];if(e)for(var m=-1,k=0;k<b.childNodes.length;k++){var h=b.childNodes[k];if(!0!==e||3!=h.nodeType||!h.previousSibling||3!=h.previousSibling.nodeType)if(m++,m==d){b=h;break}}else b=b.childNodes[d]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,e){CKEDITOR.env.ie&&8>=document.documentMode||!e||(a=e+":"+
a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),!0)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html",
"replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e('+CKEDITOR.tools.fixDomain+")();\x3c/script\x3e"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");a||(a=this.$.createDocumentFragment(),CKEDITOR.tools.enableHtml5Elements(a,
!0),this.setCustomData("html5ShivFrag",a));return a}}),CKEDITOR.dom.nodeList=function(a){this.$=a},CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){return 0>a||a>=this.$.length?null:(a=this.$[a])?new CKEDITOR.dom.node(a):null},toArray:function(){return CKEDITOR.tools.array.map(this.$,function(a){return new CKEDITOR.dom.node(a)})}},CKEDITOR.dom.element=function(a,e){"string"==typeof a&&(a=(e?e.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,
a)},CKEDITOR.dom.element.get=function(a){return(a="string"==typeof a?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new CKEDITOR.dom.element(a))},CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node,CKEDITOR.dom.element.createFromHtml=function(a,e){var b=new CKEDITOR.dom.element("div",e);b.setHtml(a);return b.getFirst().remove()},CKEDITOR.dom.element.setMarker=function(a,e,b,c){var d=e.getCustomData("list_marker_id")||e.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),
m=e.getCustomData("list_marker_names")||e.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");a[d]=e;m[b]=1;return e.setCustomData(b,c)},CKEDITOR.dom.element.clearAllMarkers=function(a){for(var e in a)CKEDITOR.dom.element.clearMarkers(a,a[e],1)},CKEDITOR.dom.element.clearMarkers=function(a,e,b){var c=e.getCustomData("list_marker_names"),d=e.getCustomData("list_marker_id"),m;for(m in c)e.removeCustomData(m);e.removeCustomData("list_marker_names");b&&(e.removeCustomData("list_marker_id"),
delete a[d])},function(){function a(a,b){return-1<(" "+a+" ").replace(m," ").indexOf(" "+b+" ")}function e(a){var b=!0;a.$.id||(a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber(),b=!1);return function(){b||a.removeAttribute("id")}}function b(a,b){var c=CKEDITOR.tools.escapeCss(a.$.id);return"#"+c+" "+b.split(/,\s*/).join(", #"+c+" ")}function c(a){for(var b=0,c=0,f=k[a].length;c<f;c++)b+=parseFloat(this.getComputedStyle(k[a][c])||0,10)||0;return b}var d=document.createElement("_").classList,d="undefined"!==
typeof d&&null!==String(d.add).match(/\[Native code\]/gi),m=/[\n\t\r]/g;CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:d?function(a){this.$.classList.add(a);return this}:function(b){var g=this.$.className;g&&(a(g,b)||(g+=" "+b));this.$.className=g||b;return this},removeClass:d?function(a){var b=this.$;b.classList.remove(a);b.className||b.removeAttribute("class");return this}:function(b){var g=this.getAttribute("class");g&&a(g,b)&&((g=g.replace(new RegExp("(?:^|\\s+)"+
b+"(?\x3d\\s|$)"),"").replace(/^\s+/,""))?this.setAttribute("class",g):this.removeAttribute("class"));return this},hasClass:function(b){return a(this.$.className,b)},append:function(a,b){"string"==typeof a&&(a=this.getDocument().createElement(a));b?this.$.insertBefore(a.$,this.$.firstChild):this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var b=new CKEDITOR.dom.element("div",this.getDocument());b.setHtml(a);b.moveChildren(this)}else this.setHtml(a)},appendText:function(a){null!=
this.$.text&&CKEDITOR.env.ie&&9>CKEDITOR.env.version?this.$.text+=a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast();a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();a&&a.is&&a.is("br")||(a=this.getDocument().createElement("br"),CKEDITOR.env.gecko&&a.setAttribute("type","_moz"),this.append(a))}},breakParent:function(a,b){var c=new CKEDITOR.dom.range(this.getDocument());c.setStartAfter(this);c.setEndAfter(a);
var f=c.extractContents(!1,b||!1),d;c.insertNode(this.remove());if(CKEDITOR.env.ie&&!CKEDITOR.env.edge){for(c=new CKEDITOR.dom.element("div");d=f.getFirst();)d.$.style.backgroundColor&&(d.$.style.backgroundColor=d.$.style.backgroundColor),c.append(d);c.insertAfter(this);c.remove(!0)}else f.insertAfterNode(this)},contains:document.compareDocumentPosition?function(a){return!!(this.$.compareDocumentPosition(a.$)&16)}:function(a){var b=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?b.contains(a.getParent().$):
b!=a.$&&b.contains(a.$)},focus:function(){function a(){try{this.$.focus()}catch(b){}}return function(b){b?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(!0));return a.innerHTML},getClientRect:function(a){var b=CKEDITOR.tools.extend({},
this.$.getBoundingClientRect());!b.width&&(b.width=b.right-b.left);!b.height&&(b.height=b.bottom-b.top);return a?CKEDITOR.tools.getAbsoluteRectPosition(this.getWindow(),b):b},setHtml:CKEDITOR.env.ie&&9>CKEDITOR.env.version?function(a){try{var b=this.$;if(this.getParent())return b.innerHTML=a;var c=this.getDocument()._getHtml5ShivFrag();c.appendChild(b);b.innerHTML=a;c.removeChild(b);return a}catch(f){this.$.innerHTML="";b=new CKEDITOR.dom.element("body",this.getDocument());b.$.innerHTML=a;for(b=b.getChildren();b.count();)this.append(b.getItem(0));
return a}}:function(a){return this.$.innerHTML=a},setText:function(){var a=document.createElement("p");a.innerHTML="x";a=a.textContent;return function(b){this.$[a?"textContent":"innerText"]=b}}(),getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;case "tabindex":return a=this.$.getAttribute(a,
2),0!==a&&0===this.$.tabIndex&&(a=null),a;case "checked":return a=this.$.attributes.getNamedItem(a),(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getAttributes:function(a){var b={},c=this.$.attributes,f;a=CKEDITOR.tools.isArray(a)?
a:[];for(f=0;f<c.length;f++)-1===CKEDITOR.tools.indexOf(a,c[f].name)&&(b[c[f].name]=c[f].value);return b},getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},getComputedStyle:document.defaultView&&document.defaultView.getComputedStyle?function(a){var b=this.getWindow().$.getComputedStyle(this.$,null);return b?b.getPropertyValue(a):""}:function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=
function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:function(){var a=this.$.tabIndex;return 0!==a||CKEDITOR.dtd.$tabIndex[this.getName()]||0===parseInt(this.getAttribute("tabindex"),10)?a:-1},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();
if(CKEDITOR.env.ie&&8>=document.documentMode){var b=this.$.scopeName;"HTML"!=b&&(a=b.toLowerCase()+":"+a)}this.getName=function(){return a};return this.getName()},getValue:function(){return this.$.value},getFirst:function(a){var b=this.$.firstChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getNext(a));return b},getLast:function(a){var b=this.$.lastChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getPrevious(a));return b},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},
is:function(){var a=this.getName();if("object"==typeof arguments[0])return!!arguments[0][a];for(var b=0;b<arguments.length;b++)if(arguments[b]==a)return!0;return!1},isEditable:function(a){var b=this.getName();return this.isReadOnly()||"none"==this.getComputedStyle("display")||"hidden"==this.getComputedStyle("visibility")||CKEDITOR.dtd.$nonEditable[b]||CKEDITOR.dtd.$empty[b]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount()?!1:!1!==a?(a=CKEDITOR.dtd[b]||
CKEDITOR.dtd.span,!(!a||!a["#"])):!0},isIdentical:function(a){var b=this.clone(0,1);a=a.clone(0,1);b.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(b.$.isEqualNode)return b.$.style.cssText=CKEDITOR.tools.normalizeCssText(b.$.style.cssText),a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText),b.$.isEqualNode(a.$);b=b.getOuterHtml();a=
a.getOuterHtml();if(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&this.is("a")){var c=this.getParent();c.type==CKEDITOR.NODE_ELEMENT&&(c=c.clone(),c.setHtml(b),b=c.getHtml(),c.setHtml(a),a=c.getHtml())}return b==a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&"hidden"!=this.getComputedStyle("visibility"),b,c;a&&CKEDITOR.env.webkit&&(b=this.getWindow(),!b.equals(CKEDITOR.document.getWindow())&&(c=b.$.frameElement)&&(a=(new CKEDITOR.dom.element(c)).isVisible()));return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return!1;
for(var a=this.getChildren(),b=0,c=a.count();b<c;b++){var f=a.getItem(b);if(f.type!=CKEDITOR.NODE_ELEMENT||!f.data("cke-bookmark"))if(f.type==CKEDITOR.NODE_ELEMENT&&!f.isEmptyInlineRemoveable()||f.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(f.getText()))return!1}return!0},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,b=0;b<a.length;b++){var c=a[b];switch(c.nodeName){case "class":if(this.getAttribute("class"))return!0;case "data-cke-expando":continue;
default:if(c.specified)return!0}}return!1}:function(){var a=this.$.attributes,b=a.length,c={"data-cke-expando":1,_moz_dirty:1};return 0<b&&(2<b||!c[a[0].nodeName]||2==b&&!c[a[1].nodeName])},hasAttribute:function(){function a(b){var c=this.$.attributes.getNamedItem(b);if("input"==this.getName())switch(b){case "class":return 0<this.$.className.length;case "checked":return!!this.$.checked;case "value":return b=this.getAttribute("type"),"checkbox"==b||"radio"==b?"on"!=this.$.value:!!this.$.value}return c?
c.specified:!1}return CKEDITOR.env.ie?8>CKEDITOR.env.version?function(b){return"name"==b?!!this.$.name:a.call(this,b)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,b){var c=this.$;a=a.$;if(c!=a){var f;if(b)for(;f=c.lastChild;)a.insertBefore(c.removeChild(f),a.firstChild);else for(;f=c.firstChild;)a.appendChild(c.removeChild(f))}},mergeSiblings:function(){function a(b,c,f){if(c&&c.type==CKEDITOR.NODE_ELEMENT){for(var d=
[];c.data("cke-bookmark")||c.isEmptyInlineRemoveable();)if(d.push(c),c=f?c.getNext():c.getPrevious(),!c||c.type!=CKEDITOR.NODE_ELEMENT)return;if(b.isIdentical(c)){for(var h=f?b.getLast():b.getFirst();d.length;)d.shift().move(b,!f);c.moveChildren(b,!f);c.remove();h&&h.type==CKEDITOR.NODE_ELEMENT&&h.mergeSiblings()}}}return function(b){if(!1===b||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a"))a(this,this.getNext(),!0),a(this,this.getPrevious())}}(),show:function(){this.setStyles({display:"",
visibility:""})},setAttribute:function(){var a=function(a,b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(b,c){"class"==b?this.$.className=c:"style"==b?this.$.style.cssText=c:"tabindex"==b?this.$.tabIndex=c:"checked"==b?this.$.checked=c:"contenteditable"==b?a.call(this,"contentEditable",c):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(b,c){if("src"==b&&c.match(/^http:\/\//))try{a.apply(this,
arguments)}catch(f){}else a.apply(this,arguments);return this}:a}(),setAttributes:function(a){for(var b in a)this.setAttribute(b,a[b]);return this},setValue:function(a){this.$.value=a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){"class"==a?a="className":"tabindex"==a?a="tabIndex":"contenteditable"==a&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=
0;b<a.length;b++)this.removeAttribute(a[b]);else for(b in a=a||this.getAttributes(),a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=this.$.style;if(b.removeProperty||"border"!=a&&"margin"!=a&&"padding"!=a)b.removeProperty?b.removeProperty(a):b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)),this.$.style.cssText||this.removeAttribute("style");else{var c=["top","left","right","bottom"],f;"border"==a&&(f=["color","style","width"]);for(var b=[],d=0;d<c.length;d++)if(f)for(var e=
0;e<f.length;e++)b.push([a,c[d],f[e]].join("-"));else b.push([a,c[d]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}},setStyle:function(a,b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){CKEDITOR.env.ie&&9>CKEDITOR.env.version?(a=Math.round(100*a),this.setStyle("filter",100<=a?"":"progid:DXImageTransform.Microsoft.Alpha(opacity\x3d"+a+")")):this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
"none"));if(CKEDITOR.env.ie){this.setAttribute("unselectable","on");for(var a,b=this.getElementsByTag("*"),c=0,f=b.count();c<f;c++)a=b.getItem(c),a.setAttribute("unselectable","on")}},getPositionedAncestor:function(){for(var a=this;"html"!=a.getName();){if("static"!=a.getComputedStyle("position"))return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,f=this.getDocument(),d=f.getBody(),e="BackCompat"==f.$.compatMode;if(document.documentElement.getBoundingClientRect&&(CKEDITOR.env.ie?
8!==CKEDITOR.env.version:1)){var m=this.$.getBoundingClientRect(),k=f.$.documentElement,p=k.clientTop||d.$.clientTop||0,t=k.clientLeft||d.$.clientLeft||0,w=!0;CKEDITOR.env.ie&&(w=f.getDocumentElement().contains(this),f=f.getBody().contains(this),w=e&&f||!e&&w);w&&(CKEDITOR.env.webkit||CKEDITOR.env.ie&&12<=CKEDITOR.env.version?(b=d.$.scrollLeft||k.scrollLeft,c=d.$.scrollTop||k.scrollTop):(c=e?d.$:k,b=c.scrollLeft,c=c.scrollTop),b=m.left+b-t,c=m.top+c-p)}else for(p=this,t=null;p&&"body"!=p.getName()&&
"html"!=p.getName();){b+=p.$.offsetLeft-p.$.scrollLeft;c+=p.$.offsetTop-p.$.scrollTop;p.equals(this)||(b+=p.$.clientLeft||0,c+=p.$.clientTop||0);for(;t&&!t.equals(p);)b-=t.$.scrollLeft,c-=t.$.scrollTop,t=t.getParent();t=p;p=(m=p.$.offsetParent)?new CKEDITOR.dom.element(m):null}a&&(m=this.getWindow(),p=a.getWindow(),!m.equals(p)&&m.$.frameElement&&(a=(new CKEDITOR.dom.element(m.$.frameElement)).getDocumentPosition(a),b+=a.x,c+=a.y));document.documentElement.getBoundingClientRect||!CKEDITOR.env.gecko||
e||(b+=this.$.clientLeft?1:0,c+=this.$.clientTop?1:0);return{x:b,y:c}},scrollIntoView:function(a){var b=this.getParent();if(b){do if((b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1),b.is("html")){var c=b.getWindow();try{var f=c.$.frameElement;f&&(b=new CKEDITOR.dom.element(f))}catch(d){}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var f,d,e,m;function k(b,f){/body|html/.test(a.getName())?
a.getWindow().$.scrollBy(b,f):(a.$.scrollLeft+=b,a.$.scrollTop+=f)}function p(a,b){var f={x:0,y:0};if(!a.is(w?"body":"html")){var c=a.$.getBoundingClientRect();f.x=c.left;f.y=c.top}c=a.getWindow();c.equals(b)||(c=p(CKEDITOR.dom.element.get(c.$.frameElement),b),f.x+=c.x,f.y+=c.y);return f}function t(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());e=a.getDocument();var w="BackCompat"==e.$.compatMode;a instanceof CKEDITOR.dom.window&&(a=w?e.getBody():e.getDocumentElement());
CKEDITOR.env.webkit&&(e=this.getEditor(!1))&&(e._.previousScrollTop=null);e=a.getWindow();d=p(this,e);var q=p(a,e),A=this.$.offsetHeight;f=this.$.offsetWidth;var r=a.$.clientHeight,y=a.$.clientWidth;e=d.x-t(this,"left")-q.x||0;m=d.y-t(this,"top")-q.y||0;f=d.x+f+t(this,"right")-(q.x+y)||0;d=d.y+A+t(this,"bottom")-(q.y+r)||0;(0>m||0<d)&&k(0,!0===b?m:!1===b?d:0>m?m:d);c&&(0>e||0<f)&&k(0>e?e:f,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+
"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",!0);c&&this.removeAttribute("aria-disabled");break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",!0);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off"),this.removeClass(b+"_on"),this.removeClass(b+"_disabled"),c&&this.removeAttribute("aria-pressed"),c&&this.removeAttribute("aria-disabled")}},
getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},copyAttributes:function(a,b){var c=this.$.attributes;b=b||{};for(var f=0;f<c.length;f++){var d=c[f],e=d.nodeName.toLowerCase(),m;if(!(e in b))if("checked"==e&&(m=this.getAttribute(e)))a.setAttribute(e,m);else if(!CKEDITOR.env.ie||this.hasAttribute(e))m=this.getAttribute(e),null===m&&(m=d.nodeValue),a.setAttribute(e,m)}""!==this.$.style.cssText&&
(a.$.style.cssText=this.$.style.cssText)},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument();a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);this.moveChildren(a);this.getParent(!0)&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var f=b.childNodes;if(0<=c&&c<f.length)return f[c]}return function(b){var c=this.$;if(b.slice)for(b=b.slice();0<b.length&&c;)c=a(c,
b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT&&b.hasClass("cke_enable_context_menu")}this.on("contextmenu",function(b){b.data.getTarget().getAscendant(a,!0)||b.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||
"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(void 0===b)return this.getAttribute(a);!1===b?this.removeAttribute(a):this.setAttribute(a,b);return null},getEditor:function(a){var b=CKEDITOR.instances,c,f,d;a=a||void 0===a;for(c in b)if(f=b[c],f.element.equals(this)&&f.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||!a&&(d=f.editable())&&(d.equals(this)||d.contains(this)))return f;return null},find:function(a){var c=e(this);a=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(b(this,
a)));c();return a},findOne:function(a){var c=e(this);a=this.$.querySelector(b(this,a));c();return a?new CKEDITOR.dom.element(a):null},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var f=a(this);if(!1!==f){c=this.getChildren();for(var d=0;d<c.count();d++)f=c.getItem(d),f.type==CKEDITOR.NODE_ELEMENT?f.forEach(a,b):b&&f.type!=b||a(f)}}});var k={width:["border-left-width","border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};
CKEDITOR.dom.element.prototype.setSize=function(a,b,d){"number"==typeof b&&(!d||CKEDITOR.env.ie&&CKEDITOR.env.quirks||(b-=c.call(this,a)),this.setStyle(a,b+"px"))};CKEDITOR.dom.element.prototype.getSize=function(a,b){var d=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0;b&&(d-=c.call(this,a));return d}}(),CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a},CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,
CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)},getHtml:function(){var a=new CKEDITOR.dom.element("div");this.clone(1,1).appendTo(a);return a.getHtml().replace(/\s*data-cke-expando=".*?"/g,"")}},!0,{append:1,appendBogus:1,clone:1,getFirst:1,getHtml:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,
getChildCount:1,getChild:1,getChildren:1}),function(){function a(a,b){var f=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(f.collapsed)return this.end(),null;f.optimize()}var c,d=f.startContainer;c=f.endContainer;var g=f.startOffset,h=f.endOffset,n,e=this.guard,l=this.type,m=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var k=c.type==CKEDITOR.NODE_ELEMENT?c:c.getParent(),z=c.type==CKEDITOR.NODE_ELEMENT?c.getChild(h):c.getNext();this._.guardLTR=function(a,
b){return(!b||!k.equals(a))&&(!z||!a.equals(z))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(f.root))}}if(a&&!this._.guardRTL){var I=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),E=d.type==CKEDITOR.NODE_ELEMENT?g?d.getChild(g-1):null:d.getPrevious();this._.guardRTL=function(a,b){return(!b||!I.equals(a))&&(!E||!a.equals(E))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(f.root))}}var K=a?this._.guardRTL:this._.guardLTR;n=e?function(a,b){return!1===K(a,b)?!1:e(a,b)}:K;this.current?c=this.current[m](!1,
l,n):(a?c.type==CKEDITOR.NODE_ELEMENT&&(c=0<h?c.getChild(h-1):!1===n(c,!0)?null:c.getPreviousSourceNode(!0,l,n)):(c=d,c.type==CKEDITOR.NODE_ELEMENT&&((c=c.getChild(g))||(c=!1===n(d,!0)?null:d.getNextSourceNode(!0,l,n)))),c&&!1===n(c)&&(c=null));for(;c&&!this._.end;){this.current=c;if(!this.evaluator||!1!==this.evaluator(c)){if(!b)return c}else if(b&&this.evaluator)return!1;c=c[m](!1,l,n)}this.end();return this.current=null}function e(b){for(var f,c=null;f=a.call(this,b);)c=f;return c}CKEDITOR.dom.walker=
CKEDITOR.tools.createClass({$:function(a){this.range=a;this._={}},proto:{end:function(){this._.end=1},next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return!1!==a.call(this,0,1)},checkBackward:function(){return!1!==a.call(this,1,1)},lastForward:function(){return e.call(this)},lastBackward:function(){return e.call(this,1)},reset:function(){delete this.current;this._={}}}});var b={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,
"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,"table-caption":1},c={absolute:1,fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return"none"!=this.getComputedStyle("float")||this.getComputedStyle("position")in c||!b[this.getComputedStyle("display")]?!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a)):!0};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=
function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=function(a,b){function f(a){return a&&a.getName&&"span"==a.getName()&&a.data("cke-bookmark")}return function(c){var d,g;d=c&&c.type!=CKEDITOR.NODE_ELEMENT&&(g=c.getParent())&&f(g);d=a?d:d||f(c);return!!(b^d)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var f;b&&b.type==CKEDITOR.NODE_TEXT&&(f=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()==CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE);
return!!(a^f)}};CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces(),f=CKEDITOR.env.webkit?1:0;return function(c){b(c)?c=1:(c.type==CKEDITOR.NODE_TEXT&&(c=c.getParent()),c=c.$.offsetWidth<=f);return!!(a^c)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(f){return!!(b^f.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!m(a)&&!k(a)}return function(f){var c=CKEDITOR.env.needsBrFiller?f.is&&f.is("br"):f.getText&&d.test(f.getText());c&&(c=f.getParent(),
f=f.getNext(b),c=c.isBlockBoundary()&&(!f||f.type==CKEDITOR.NODE_ELEMENT&&f.isBlockBoundary()));return!!(a^c)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var d=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,m=CKEDITOR.dom.walker.whitespaces(),k=CKEDITOR.dom.walker.bookmark(),h=CKEDITOR.dom.walker.temp(),g=function(a){return k(a)||m(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty)};
CKEDITOR.dom.walker.ignored=function(a){return function(b){b=m(b)||k(b)||h(b);return!!(a^b)}};var l=CKEDITOR.dom.walker.ignored();CKEDITOR.dom.walker.empty=function(a){return function(b){for(var f=0,c=b.getChildCount();f<c;++f)if(!l(b.getChild(f)))return!!a;return!a}};var f=CKEDITOR.dom.walker.empty(),n=CKEDITOR.dom.walker.validEmptyBlockContainers=CKEDITOR.tools.extend(function(a){var b={},f;for(f in a)CKEDITOR.dtd[f]["#"]&&(b[f]=1);return b}(CKEDITOR.dtd.$block),{caption:1,td:1,th:1});CKEDITOR.dom.walker.editable=
function(a){return function(b){b=l(b)?!1:b.type==CKEDITOR.NODE_TEXT||b.type==CKEDITOR.NODE_ELEMENT&&(b.is(CKEDITOR.dtd.$inline)||b.is("hr")||"false"==b.getAttribute("contenteditable")||!CKEDITOR.env.needsBrFiller&&b.is(n)&&f(b))?!0:!1;return!!(a^b)}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(g(a));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&d.test(a.getText()))?a:!1}}(),CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=
this.startOffset=this.startContainer=null;this.collapsed=!0;var e=a instanceof CKEDITOR.dom.document;this.document=e?a:a.getDocument();this.root=e?a.getBody():a},function(){function a(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset}function e(a,b,c,d,g){function h(a,b,f,c){var d=f?a.getPrevious():a.getNext();if(c&&m)return d;r||c?b.append(a.clone(!0,g),f):(a.remove(),k&&b.append(a,f));return d}function e(){var a,b,f,c=Math.min(H.length,
D.length);for(a=0;a<c;a++)if(b=H[a],f=D[a],!b.equals(f))return a;return a-1}function l(){var b=Q-1,c=K&&F&&!y.equals(C);b<T-1||b<R-1||c?(c?a.moveToPosition(C,CKEDITOR.POSITION_BEFORE_START):R==b+1&&E?a.moveToPosition(D[b],CKEDITOR.POSITION_BEFORE_END):a.moveToPosition(D[b+1],CKEDITOR.POSITION_BEFORE_START),d&&(b=H[b+1])&&b.type==CKEDITOR.NODE_ELEMENT&&(c=CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e',a.document),c.insertAfter(b),
b.mergeSiblings(!1),a.moveToBookmark({startNode:c}))):a.collapse(!0)}a.optimizeBookmark();var m=0===b,k=1==b,r=2==b;b=r||k;var y=a.startContainer,C=a.endContainer,B=a.startOffset,z=a.endOffset,I,E,K,F,G,M;if(r&&C.type==CKEDITOR.NODE_TEXT&&(y.equals(C)||y.type===CKEDITOR.NODE_ELEMENT&&y.getFirst().equals(C)))c.append(a.document.createText(C.substring(B,z)));else{C.type==CKEDITOR.NODE_TEXT?r?M=!0:C=C.split(z):0<C.getChildCount()?z>=C.getChildCount()?(C=C.getChild(z-1),E=!0):C=C.getChild(z):F=E=!0;y.type==
CKEDITOR.NODE_TEXT?r?G=!0:y.split(B):0<y.getChildCount()?0===B?(y=y.getChild(B),I=!0):y=y.getChild(B-1):K=I=!0;for(var H=y.getParents(),D=C.getParents(),Q=e(),T=H.length-1,R=D.length-1,L=c,W,V,X,da=-1,O=Q;O<=T;O++){V=H[O];X=V.getNext();for(O!=T||V.equals(D[O])&&T<R?b&&(W=L.append(V.clone(0,g))):I?h(V,L,!1,K):G&&L.append(a.document.createText(V.substring(B)));X;){if(X.equals(D[O])){da=O;break}X=h(X,L)}L=W}L=c;for(O=Q;O<=R;O++)if(c=D[O],X=c.getPrevious(),c.equals(H[O]))b&&(L=L.getChild(0));else{O!=
R||c.equals(H[O])&&R<T?b&&(W=L.append(c.clone(0,g))):E?h(c,L,!1,F):M&&L.append(a.document.createText(c.substring(0,z)));if(O>da)for(;X;)X=h(X,L,!0);L=W}r||l()}}function b(){var a=!1,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!0),d=CKEDITOR.dom.walker.bogus();return function(g){return c(g)||b(g)?!0:d(g)&&!a?a=!0:g.type==CKEDITOR.NODE_TEXT&&(g.hasAscendant("pre")||CKEDITOR.tools.trim(g.getText()).length)||g.type==CKEDITOR.NODE_ELEMENT&&!g.is(m)?!1:!0}}function c(a){var b=CKEDITOR.dom.walker.whitespaces(),
c=CKEDITOR.dom.walker.bookmark(1);return function(d){return c(d)||b(d)?!0:!a&&k(d)||d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}function d(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&l(a)&&(b=a);return g(a)&&!(k(a)&&a.equals(b))})}}var m={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},k=CKEDITOR.dom.walker.bogus(),
h=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,g=CKEDITOR.dom.walker.editable(),l=CKEDITOR.dom.walker.ignored(!0);CKEDITOR.dom.range.prototype={clone:function(){var a=new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset=this.startOffset;a._setEndContainer(this.endContainer);a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){a?(this._setEndContainer(this.startContainer),this.endOffset=this.startOffset):(this._setStartContainer(this.endContainer),
this.startOffset=this.endOffset);this.collapsed=!0},cloneContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,2,b,!1,"undefined"==typeof a?!0:a);return b},deleteContents:function(a){this.collapsed||e(this,0,null,a)},extractContents:function(a,b){var c=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,1,c,a,"undefined"==typeof b?!0:b);return c},createBookmark:function(a){var b,c,d,g,h=this.collapsed;b=this.document.createElement("span");
b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("\x26nbsp;");a&&(d="cke_bm_"+CKEDITOR.tools.getNextNumber(),b.setAttribute("id",d+(h?"C":"S")));h||(c=b.clone(),c.setHtml("\x26nbsp;"),a&&c.setAttribute("id",d+"E"),g=this.clone(),g.collapse(),g.insertNode(c));g=this.clone();g.collapse(!0);g.insertNode(b);c?(this.setStartAfter(b),this.setEndBefore(c)):this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?d+(h?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:h}},createBookmark2:function(){function a(b){var f=
b.container,d=b.offset,g;g=f;var h=d;g=g.type!=CKEDITOR.NODE_ELEMENT||0===h||h==g.getChildCount()?0:g.getChild(h-1).type==CKEDITOR.NODE_TEXT&&g.getChild(h).type==CKEDITOR.NODE_TEXT;g&&(f=f.getChild(d-1),d=f.getLength());if(f.type==CKEDITOR.NODE_ELEMENT&&0<d){a:{for(g=f;d--;)if(h=g.getChild(d).getIndex(!0),0<=h){d=h;break a}d=-1}d+=1}if(f.type==CKEDITOR.NODE_TEXT){g=f;for(h=0;(g=g.getPrevious())&&g.type==CKEDITOR.NODE_TEXT;)h+=g.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE,"").length;
g=h;f.getText()?d+=g:(h=f.getPrevious(c),g?(d=g,f=h?h.getNext():f.getParent().getFirst()):(f=f.getParent(),d=h?h.getIndex(!0)+1:0))}b.container=f;b.offset=d}function b(a,f){var c=f.getCustomData("cke-fillingChar");if(c){var d=a.container;c.equals(d)&&(a.offset-=CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length,0>=a.offset&&(a.offset=d.getIndex(),a.container=d.getParent()))}}var c=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,!0);return function(c){var d=this.collapsed,g={container:this.startContainer,
offset:this.startOffset},h={container:this.endContainer,offset:this.endOffset};c&&(a(g),b(g,this.root),d||(a(h),b(h,this.root)));return{start:g.container.getAddress(c),end:d?null:h.container.getAddress(c),startOffset:g.offset,endOffset:h.offset,normalized:c,collapsed:d,is2:!0}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized);a=a.endOffset;this.setStart(b,c);d?this.setEnd(d,a):this.collapse(!0)}else b=
(c=a.serializable)?this.document.getById(a.startNode):a.startNode,a=c?this.document.getById(a.endNode):a.endNode,this.setStartBefore(b),b.remove(),a?(this.setEndBefore(a),a.remove()):this.collapse(!0)},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,g;if(a.type==CKEDITOR.NODE_ELEMENT)if(g=a.getChildCount(),g>c)a=a.getChild(c);else if(1>g)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;a=new CKEDITOR.dom.node(a);a=
a.getNextSourceNode()||a}if(b.type==CKEDITOR.NODE_ELEMENT)if(g=b.getChildCount(),g>d)b=b.getChild(d).getPreviousSourceNode(!0);else if(1>g)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=b.lastChild;b=new CKEDITOR.dom.node(b)}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1?c.getChild(this.startOffset):
c:c.getCommonAncestor(d);return b&&!c.is?c.getParent():c},optimize:function(){var a=this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&a.is("span")&&a.data("cke-bookmark")&&this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);
b&&b.is&&b.is("span")&&b.data("cke-bookmark")&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},trim:function(a,b){var c=this.startContainer,d=this.startOffset,g=this.collapsed;if((!a||g)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength())d=c.getIndex()+1,c=c.getParent();else{var h=c.split(d),d=c.getIndex()+1,c=c.getParent();this.startContainer.equals(this.endContainer)?this.setEnd(h,this.endOffset-this.startOffset):c.equals(this.endContainer)&&(this.endOffset+=1)}else d=c.getIndex(),c=c.getParent();
this.setStart(c,d);if(g){this.collapse(!0);return}}c=this.endContainer;d=this.endOffset;b||g||!c||c.type!=CKEDITOR.NODE_TEXT||(d?(d>=c.getLength()||c.split(d),d=c.getIndex()+1):d=c.getIndex(),c=c.getParent(),this.setEnd(c,d))},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var d=new RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var g=1;case CKEDITOR.ENLARGE_ELEMENT:var h=function(a,b){var f=new CKEDITOR.dom.range(l);
f.setStart(a,b);f.setEndAt(l,CKEDITOR.POSITION_BEFORE_END);var f=new CKEDITOR.dom.walker(f),c;for(f.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};c=f.next();){if(c.type!=CKEDITOR.NODE_TEXT)return!1;I=c!=a?c.getText():c.substring(b);if(d.test(I))return!1}return!0};if(this.collapsed)break;var e=this.getCommonAncestor(),l=this.root,m,k,r,y,C,B=!1,z,I;z=this.startContainer;var E=this.startOffset;z.type==CKEDITOR.NODE_TEXT?(E&&(z=!CKEDITOR.tools.trim(z.substring(0,E)).length&&
z,B=!!z),z&&((y=z.getPrevious())||(r=z.getParent()))):(E&&(y=z.getChild(E-1)||z.getLast()),y||(r=z));for(r=c(r);r||y;){if(r&&!y){!C&&r.equals(e)&&(C=!0);if(g?r.isBlockBoundary():!l.contains(r))break;B&&"inline"==r.getComputedStyle("display")||(B=!1,C?m=r:this.setStartBefore(r));y=r.getPrevious()}for(;y;)if(z=!1,y.type==CKEDITOR.NODE_COMMENT)y=y.getPrevious();else{if(y.type==CKEDITOR.NODE_TEXT)I=y.getText(),d.test(I)&&(y=null),z=/[\s\ufeff]$/.test(I);else if((y.$.offsetWidth>(CKEDITOR.env.webkit?1:
0)||b&&y.is("br"))&&!y.data("cke-bookmark"))if(B&&CKEDITOR.dtd.$removeEmpty[y.getName()]){I=y.getText();if(d.test(I))y=null;else for(var E=y.$.getElementsByTagName("*"),K=0,F;F=E[K++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){y=null;break}y&&(z=!!I.length)}else y=null;z&&(B?C?m=r:r&&this.setStartBefore(r):B=!0);if(y){z=y.getPrevious();if(!r&&!z){r=y;y=null;break}y=z}else r=null}r&&(r=c(r.getParent()))}z=this.endContainer;E=this.endOffset;r=y=null;C=B=!1;z.type==CKEDITOR.NODE_TEXT?
CKEDITOR.tools.trim(z.substring(E)).length?B=!0:(B=!z.getLength(),E==z.getLength()?(y=z.getNext())||(r=z.getParent()):h(z,E)&&(r=z.getParent())):(y=z.getChild(E))||(r=z);for(;r||y;){if(r&&!y){!C&&r.equals(e)&&(C=!0);if(g?r.isBlockBoundary():!l.contains(r))break;B&&"inline"==r.getComputedStyle("display")||(B=!1,C?k=r:r&&this.setEndAfter(r));y=r.getNext()}for(;y;){z=!1;if(y.type==CKEDITOR.NODE_TEXT)I=y.getText(),h(y,0)||(y=null),z=/^[\s\ufeff]/.test(I);else if(y.type==CKEDITOR.NODE_ELEMENT){if((0<y.$.offsetWidth||
b&&y.is("br"))&&!y.data("cke-bookmark"))if(B&&CKEDITOR.dtd.$removeEmpty[y.getName()]){I=y.getText();if(d.test(I))y=null;else for(E=y.$.getElementsByTagName("*"),K=0;F=E[K++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){y=null;break}y&&(z=!!I.length)}else y=null}else z=1;z&&B&&(C?k=r:this.setEndAfter(r));if(y){z=y.getNext();if(!r&&!z){r=y;y=null;break}y=z}else r=null}r&&(r=c(r.getParent()))}m&&k&&(e=m.contains(k)?k:m,this.setStartBefore(e),this.setEndAfter(e));break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:r=
new CKEDITOR.dom.range(this.root);l=this.root;r.setStartAt(l,CKEDITOR.POSITION_AFTER_START);r.setEnd(this.startContainer,this.startOffset);r=new CKEDITOR.dom.walker(r);var G,M,H=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),D=null,Q=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&"false"==a.getAttribute("contenteditable"))if(D){if(D.equals(a)){D=null;return}}else D=a;else if(D)return;var b=H(a);b||(G=a);return b},g=function(a){var b=Q(a);!b&&a.is&&a.is("br")&&
(M=a);return b};r.guard=Q;r=r.lastBackward();G=G||l;this.setStartAt(G,!G.is("br")&&(!r&&this.checkStartOfBlock()||r&&G.contains(r))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){r=this.clone();r=new CKEDITOR.dom.walker(r);var T=CKEDITOR.dom.walker.whitespaces(),R=CKEDITOR.dom.walker.bookmark();r.evaluator=function(a){return!T(a)&&!R(a)};if((r=r.previous())&&r.type==CKEDITOR.NODE_ELEMENT&&r.is("br"))break}r=this.clone();r.collapse();r.setEndAt(l,
CKEDITOR.POSITION_BEFORE_END);r=new CKEDITOR.dom.walker(r);r.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?g:Q;G=D=M=null;r=r.lastForward();G=G||l;this.setEndAt(G,!r&&this.checkEndOfBlock()||r&&G.contains(r)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);M&&this.setEndAfter(M)}},shrink:function(a,b,c){var d="boolean"===typeof c?c:c&&"boolean"===typeof c.shrinkOnBlockBoundary?c.shrinkOnBlockBoundary:!0,g=c&&c.skipBogus;if(!this.collapsed){a=a||CKEDITOR.SHRINK_TEXT;var h=this.clone(),e=
this.startContainer,l=this.endContainer,m=this.startOffset,k=this.endOffset,r=c=1;e&&e.type==CKEDITOR.NODE_TEXT&&(m?m>=e.getLength()?h.setStartAfter(e):(h.setStartBefore(e),c=0):h.setStartBefore(e));l&&l.type==CKEDITOR.NODE_TEXT&&(k?k>=l.getLength()?h.setEndAfter(l):(h.setEndAfter(l),r=0):h.setEndBefore(l));var h=new CKEDITOR.dom.walker(h),y=CKEDITOR.dom.walker.bookmark(),C=CKEDITOR.dom.walker.bogus();h.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};
var B;h.guard=function(b,c){if(g&&C(b)||y(b))return!0;if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||c&&b.equals(B)||!1===d&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return!1;c||b.type!=CKEDITOR.NODE_ELEMENT||(B=b);return!0};c&&(e=h[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(e,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);r&&(h.reset(),(h=h[a==CKEDITOR.SHRINK_ELEMENT?
"lastBackward":"previous"]())&&this.setEndAt(h,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END));return!(!c&&!r)}},insertNode:function(a){this.optimizeBookmark();this.trim(!1,!0);var b=this.startContainer,c=b.getChild(this.startOffset);c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(!0)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);
this.setEnd(a.endContainer,a.endOffset)},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&(c=b.getIndex(),b=b.getParent());this._setStartContainer(b);this.startOffset=c;this.endContainer||(this._setEndContainer(b),this.endOffset=c);a(this)},setEnd:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&(c=b.getIndex()+
1,b=b.getParent());this._setEndContainer(b);this.endOffset=c;this.startContainer||(this._setStartContainer(b),this.startOffset=c);a(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setStart(b,0);
break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setStart(b,b.getLength()):this.setStart(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(b)}a(this)},setEndAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setEnd(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setEnd(b,b.getLength()):this.setEnd(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(b);
break;case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(b)}a(this)},fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);d.trim();this.insertNode(d);var g=d.getBogus();g&&g.remove();d.appendBogus();this.moveToBookmark(c);return d},splitBlock:function(a,b){var c=new CKEDITOR.dom.elementPath(this.startContainer,this.root),d=new CKEDITOR.dom.elementPath(this.endContainer,this.root),
g=c.block,h=d.block,e=null;if(!c.blockLimit.equals(d.blockLimit))return null;"br"!=a&&(g||(g=this.fixBlock(!0,a),h=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block),h||(h=this.fixBlock(!1,a)));c=g&&this.checkStartOfBlock();d=h&&this.checkEndOfBlock();this.deleteContents();g&&g.equals(h)&&(d?(e=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(h,CKEDITOR.POSITION_AFTER_END),h=null):c?(e=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(g,
CKEDITOR.POSITION_BEFORE_START),g=null):(h=this.splitElement(g,b||!1),g.is("ul","ol")||g.appendBogus()));return{previousBlock:g,nextBlock:h,wasStartOfBlock:c,wasEndOfBlock:d,elementPath:e}},splitElement:function(a,b){if(!this.collapsed)return null;this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var c=this.extractContents(!1,b||!1),d=a.clone(!1,b||!1);c.appendTo(d);d.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return d},removeEmptyBlocksAtEnd:function(){function a(f){return function(a){return b(a)||
c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable()||f.is("table")&&a.is("caption")?!1:!0}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!1);return function(b){for(var c=this.createBookmark(),d=this[b?"endPath":"startPath"](),g=d.block||d.blockLimit,h;g&&!g.equals(d.root)&&!g.getFirst(a(g));)h=g.getParent(),this[b?"setEndAt":"setStartAt"](g,CKEDITOR.POSITION_AFTER_END),g.remove(1),g=h;this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,
this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,this.root)},checkBoundaryOfElement:function(a,b){var d=b==CKEDITOR.START,g=this.clone();g.collapse(d);g[d?"setStartAt":"setEndAt"](a,d?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);g=new CKEDITOR.dom.walker(g);g.evaluator=c(d);return g[d?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var a=this.startContainer,c=this.startOffset;CKEDITOR.env.ie&&c&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.ltrim(a.substring(0,
c)),h.test(a)&&this.trim(0,1));this.trim();a=new CKEDITOR.dom.elementPath(this.startContainer,this.root);c=this.clone();c.collapse(!0);c.setStartAt(a.block||a.blockLimit,CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkBackward()},checkEndOfBlock:function(){var a=this.endContainer,c=this.endOffset;CKEDITOR.env.ie&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.rtrim(a.substring(c)),h.test(a)&&this.trim(1,0));this.trim();a=new CKEDITOR.dom.elementPath(this.endContainer,
this.root);c=this.clone();c.collapse(!1);c.setEndAt(a.block||a.blockLimit,CKEDITOR.POSITION_BEFORE_END);a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkForward()},getPreviousNode:function(a,b,c){var d=this.clone();d.collapse(1);d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var d=this.clone();d.collapse();d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(d);
c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==CKEDITOR.NODE_ELEMENT){if("false"==b.getAttribute("contentEditable")&&!b.data("cke-editable"))return 0;if(b.is("html")||"true"==b.getAttribute("contentEditable")&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(!1))return this.moveToPosition(a,
b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START),!0;for(var c=0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&h.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable())this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START),c=1;else if(b&&a.is("br")&&this.endContainer&&
this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);else if("false"==a.getAttribute("contenteditable")&&a.is(CKEDITOR.dtd.$block))return this.setStartBefore(a),this.setEndAfter(a),!0;var d=a,g=c,e=void 0;d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(!1)&&(e=d[b?"getLast":"getFirst"](l));g||e||(e=d[b?"getPrevious":"getNext"](l));a=e}return!!c},moveToClosestEditablePosition:function(a,b){var c,d=0,g,h,e=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];a?(c=new CKEDITOR.dom.range(this.root),
c.moveToPosition(a,e[b?0:1])):c=this.clone();if(a&&!a.is(CKEDITOR.dtd.$block))d=1;else if(g=c[b?"getNextEditableNode":"getPreviousEditableNode"]())d=1,(h=g.type==CKEDITOR.NODE_ELEMENT)&&g.is(CKEDITOR.dtd.$block)&&"false"==g.getAttribute("contenteditable")?(c.setStartAt(g,CKEDITOR.POSITION_BEFORE_START),c.setEndAt(g,CKEDITOR.POSITION_AFTER_END)):!CKEDITOR.env.needsBrFiller&&h&&g.is(CKEDITOR.dom.walker.validEmptyBlockContainers)?(c.setEnd(g,0),c.collapse()):c.moveToPosition(g,e[b?1:0]);d&&this.moveToRange(c);
return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,!0)},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(!1,!0),c=CKEDITOR.dom.walker.whitespaces(!0);a.evaluator=function(a){return c(a)&&b(a)};var d=a.next();
a.reset();return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a=this.endContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:d(),getPreviousEditableNode:d(1),_getTableElement:function(a){a=a||{td:1,th:1,tr:1,tbody:1,thead:1,tfoot:1,table:1};var b=this.startContainer,c=
this.endContainer,d=b.getAscendant("table",!0),g=c.getAscendant("table",!0);return d&&!this.root.contains(d)?null:CKEDITOR.env.safari&&d&&c.equals(this.root)?b.getAscendant(a,!0):this.getEnclosedNode()?this.getEnclosedNode().getAscendant(a,!0):d&&g&&(d.equals(g)||d.contains(g)||g.contains(d))?b.getAscendant(a,!0):null},scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",this.document),b,c,d,g=this.clone();g.optimize();(d=g.startContainer.type==
CKEDITOR.NODE_TEXT)?(c=g.startContainer.getText(),b=g.startContainer.split(g.startOffset),a.insertAfter(g.startContainer)):g.insertNode(a);a.scrollIntoView();d&&(g.startContainer.setText(c),b.remove());a.remove()},getClientRects:function(){function a(b,c){var f=CKEDITOR.tools.array.map(b,function(a){return a}),d=new CKEDITOR.dom.range(c.root),g,h,e;c.startContainer instanceof CKEDITOR.dom.element&&(h=0===c.startOffset&&c.startContainer.hasAttribute("data-widget"));c.endContainer instanceof CKEDITOR.dom.element&&
(e=(e=c.endOffset===(c.endContainer.getChildCount?c.endContainer.getChildCount():c.endContainer.length))&&c.endContainer.hasAttribute("data-widget"));h&&d.setStart(c.startContainer.getParent(),c.startContainer.getIndex());e&&d.setEnd(c.endContainer.getParent(),c.endContainer.getIndex()+1);if(h||e)c=d;d=c.cloneContents();d=CKEDITOR.dom.document.prototype.find.call(d,"[data-cke-widget-id]").toArray();if(d=CKEDITOR.tools.array.map(d,function(a){var b=c.root.editor;a=a.getAttribute("data-cke-widget-id");
return b.widgets.instances[a].element}))return d=CKEDITOR.tools.array.map(d,function(a){var b;b=a.getParent().hasClass("cke_widget_wrapper")?a.getParent():a;g=this.root.getDocument().$.createRange();g.setStart(b.getParent().$,b.getIndex());g.setEnd(b.getParent().$,b.getIndex()+1);b=g.getClientRects();b.widgetRect=a.getClientRect();return b},c),CKEDITOR.tools.array.forEach(d,function(a){function b(d){CKEDITOR.tools.array.forEach(f,function(b,g){var h=CKEDITOR.tools.objectCompare(a[d],b);h||(h=CKEDITOR.tools.objectCompare(a.widgetRect,
b));h&&(Array.prototype.splice.call(f,g,a.length-d,a.widgetRect),c=!0)});c||(d<f.length-1?b(d+1):f.push(a.widgetRect))}var c;b(0)}),f}function b(a,c,f){var g;c.collapsed?f.startContainer instanceof CKEDITOR.dom.element?(a=f.checkStartOfBlock(),g=new CKEDITOR.dom.text("​"),a?f.startContainer.append(g,!0):0===f.startOffset?g.insertBefore(f.startContainer.getFirst()):(f=f.startContainer.getChildren().getItem(f.startOffset-1),g.insertAfter(f)),c.setStart(g.$,0),c.setEnd(g.$,0),a=c.getClientRects(),g.remove()):
f.startContainer instanceof CKEDITOR.dom.text&&(""===f.startContainer.getText()?(f.startContainer.setText("​"),a=c.getClientRects(),f.startContainer.setText("")):a=[d(f.createBookmark())]):a=[d(f.createBookmark())];return a}function c(a,b,f){a=CKEDITOR.tools.extend({},a);b&&(a=CKEDITOR.tools.getAbsoluteRectPosition(f.document.getWindow(),a));!a.width&&(a.width=a.right-a.left);!a.height&&(a.height=a.bottom-a.top);return a}function d(a){var b=a.startNode;a=a.endNode;var c;b.setText("​");b.removeStyle("display");
a?(a.setText("​"),a.removeStyle("display"),c=[b.getClientRect(),a.getClientRect()],a.remove()):c=[b.getClientRect(),b.getClientRect()];b.remove();return{right:Math.max(c[0].right,c[1].right),bottom:Math.max(c[0].bottom,c[1].bottom),left:Math.min(c[0].left,c[1].left),top:Math.min(c[0].top,c[1].top),width:Math.abs(c[0].left-c[1].left),height:Math.max(c[0].bottom,c[1].bottom)-Math.min(c[0].top,c[1].top)}}return void 0!==this.document.getSelection?function(d){var g=this.root.getDocument().$.createRange(),
h;g.setStart(this.startContainer.$,this.startOffset);g.setEnd(this.endContainer.$,this.endOffset);h=g.getClientRects();h=a(h,this);h.length||(h=b(h,g,this));return CKEDITOR.tools.array.map(h,function(a){return c(a,d,this)},this)}:function(a){return[c(d(this.createBookmark()),a,this)]}}(),_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a},_find:function(a,b){var c=this.getCommonAncestor(),d=this.getBoundaryNodes(),g=[],h,e,l,m;if(c&&c.find)for(e=
c.find(a),h=0;h<e.count();h++)if(c=e.getItem(h),b||!c.isReadOnly())l=c.getPosition(d.startNode)&CKEDITOR.POSITION_FOLLOWING||d.startNode.equals(c),m=c.getPosition(d.endNode)&CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_IS_CONTAINED||d.endNode.equals(c),l&&m&&g.push(c);return g}};CKEDITOR.dom.range.mergeRanges=function(a){return CKEDITOR.tools.array.reduce(a,function(a,b){var c=a[a.length-1],f=!1;b=b.clone();b.enlarge(CKEDITOR.ENLARGE_ELEMENT);if(c){var d=new CKEDITOR.dom.range(b.root),f=new CKEDITOR.dom.walker(d),
g=CKEDITOR.dom.walker.whitespaces();d.setStart(c.endContainer,c.endOffset);d.setEnd(b.startContainer,b.startOffset);for(d=f.next();g(d)||b.endContainer.equals(d);)d=f.next();f=!d}f?c.setEnd(b.endContainer,b.endOffset):a.push(b);return a},[])}}(),CKEDITOR.POSITION_AFTER_START=1,CKEDITOR.POSITION_BEFORE_END=2,CKEDITOR.POSITION_BEFORE_START=3,CKEDITOR.POSITION_AFTER_END=4,CKEDITOR.ENLARGE_ELEMENT=1,CKEDITOR.ENLARGE_BLOCK_CONTENTS=2,CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3,CKEDITOR.ENLARGE_INLINE=4,CKEDITOR.START=
1,CKEDITOR.END=2,CKEDITOR.SHRINK_ELEMENT=1,CKEDITOR.SHRINK_TEXT=2,"use strict",function(){function a(a){1>arguments.length||(this.range=a,this.forceBrBreak=0,this.enlargeBr=1,this.enforceRealBlocks=0,this._||(this._={}))}function e(a){var b=[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function b(a,c,d,g){a:{null==g&&(g=e(d));for(var h;h=g.shift();)if(h.getDtd().p){g={element:h,remaining:g};break a}g=null}if(!g)return 0;
if((h=CKEDITOR.filter.instances[g.element.data("cke-filter")])&&!h.check(c))return b(a,c,d,g.remaining);c=new CKEDITOR.dom.range(g.element);c.selectNodeContents(g.element);c=c.createIterator();c.enlargeBr=a.enlargeBr;c.enforceRealBlocks=a.enforceRealBlocks;c.activeFilter=c.filter=h;a._.nestedEditable={element:g.element,container:d,remaining:g.remaining,iterator:c};return 1}function c(a,b,c){if(!b)return!1;a=a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}
var d=/^[\r\n\t ]+$/,m=CKEDITOR.dom.walker.bookmark(!1,!0),k=CKEDITOR.dom.walker.whitespaces(!0),h=function(a){return m(a)&&k(a)},g={dd:1,dt:1,li:1};a.prototype={getNextParagraph:function(a){var f,e,k,v,x;a=a||"p";if(this._.nestedEditable){if(f=this._.nestedEditable.iterator.getNextParagraph(a))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,f;this.activeFilter=this.filter;if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,
this._.nestedEditable.iterator.getNextParagraph(a);this._.nestedEditable=null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var p=this.range.clone();e=p.startPath();var t=p.endPath(),w=!p.collapsed&&c(p,e.block),q=!p.collapsed&&c(p,t.block,1);p.shrink(CKEDITOR.SHRINK_ELEMENT,!0);w&&p.setStartAt(e.block,CKEDITOR.POSITION_BEFORE_END);q&&p.setEndAt(t.block,CKEDITOR.POSITION_AFTER_START);e=p.endContainer.hasAscendant("pre",!0)||p.startContainer.hasAscendant("pre",!0);p.enlarge(this.forceBrBreak&&
!e||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);p.collapsed||(e=new CKEDITOR.dom.walker(p.clone()),t=CKEDITOR.dom.walker.bookmark(!0,!0),e.evaluator=t,this._.nextNode=e.next(),e=new CKEDITOR.dom.walker(p.clone()),e.evaluator=t,e=e.previous(),this._.lastNode=e.getNextSourceNode(!0,null,p.root),this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()&&(t=this.range.clone(),
t.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END),t.checkEndOfBlock()&&(t=new CKEDITOR.dom.elementPath(t.endContainer,t.root),this._.lastNode=(t.block||t.blockLimit).getNextSourceNode(!0))),this._.lastNode&&p.root.contains(this._.lastNode)||(this._.lastNode=this._.docEndMarker=p.document.createText(""),this._.lastNode.insertAfter(e)),p=null);this._.started=1;e=p}t=this._.nextNode;p=this._.lastNode;for(this._.nextNode=null;t;){var w=0,q=t.hasAscendant("pre"),A=t.type!=CKEDITOR.NODE_ELEMENT,
r=0;if(A)t.type==CKEDITOR.NODE_TEXT&&d.test(t.getText())&&(A=0);else{var y=t.getName();if(CKEDITOR.dtd.$block[y]&&"false"==t.getAttribute("contenteditable")){f=t;b(this,a,f);break}else if(t.isBlockBoundary(this.forceBrBreak&&!q&&{br:1})){if("br"==y)A=1;else if(!e&&!t.getChildCount()&&"hr"!=y){f=t;k=t.equals(p);break}e&&(e.setEndAt(t,CKEDITOR.POSITION_BEFORE_START),"br"!=y&&(this._.nextNode=t));w=1}else{if(t.getFirst()){e||(e=this.range.clone(),e.setStartAt(t,CKEDITOR.POSITION_BEFORE_START));t=t.getFirst();
continue}A=1}}A&&!e&&(e=this.range.clone(),e.setStartAt(t,CKEDITOR.POSITION_BEFORE_START));k=(!w||A)&&t.equals(p);if(e&&!w)for(;!t.getNext(h)&&!k;){y=t.getParent();if(y.isBlockBoundary(this.forceBrBreak&&!q&&{br:1})){w=1;A=0;k||y.equals(p);e.setEndAt(y,CKEDITOR.POSITION_BEFORE_END);break}t=y;A=1;k=t.equals(p);r=1}A&&e.setEndAt(t,CKEDITOR.POSITION_AFTER_END);t=this._getNextSourceNode(t,r,p);if((k=!t)||w&&e)break}if(!f){if(!e)return this._.docEndMarker&&this._.docEndMarker.remove(),this._.nextNode=
null;f=new CKEDITOR.dom.elementPath(e.startContainer,e.root);t=f.blockLimit;w={div:1,th:1,td:1};f=f.block;!f&&t&&!this.enforceRealBlocks&&w[t.getName()]&&e.checkStartOfBlock()&&e.checkEndOfBlock()&&!t.equals(e.root)?f=t:!f||this.enforceRealBlocks&&f.is(g)?(f=this.range.document.createElement(a),e.extractContents().appendTo(f),f.trim(),e.insertNode(f),v=x=!0):"li"!=f.getName()?e.checkStartOfBlock()&&e.checkEndOfBlock()||(f=f.clone(!1),e.extractContents().appendTo(f),f.trim(),x=e.splitBlock(),v=!x.wasStartOfBlock,
x=!x.wasEndOfBlock,e.insertNode(f)):k||(this._.nextNode=f.equals(p)?null:this._getNextSourceNode(e.getBoundaryNodes().endNode,1,p))}v&&(v=f.getPrevious())&&v.type==CKEDITOR.NODE_ELEMENT&&("br"==v.getName()?v.remove():v.getLast()&&"br"==v.getLast().$.nodeName.toLowerCase()&&v.getLast().remove());x&&(v=f.getLast())&&v.type==CKEDITOR.NODE_ELEMENT&&"br"==v.getName()&&(!CKEDITOR.env.needsBrFiller||v.getPrevious(m)||v.getNext(m))&&v.remove();this._.nextNode||(this._.nextNode=k||f.equals(p)||!p?null:this._getNextSourceNode(f,
1,p));return f},_getNextSourceNode:function(a,b,c){function d(a){return!(a.equals(c)||a.equals(g))}var g=this.range.root;for(a=a.getNextSourceNode(b,null,d);!m(a);)a=a.getNextSourceNode(b,null,d);return a}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}}(),CKEDITOR.command=function(a,e){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return!1;this.editorFocus&&a.focus();return!1===this.fire("exec")?!0:!1!==e.exec.call(this,
a,b)};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return!0;if(this.context&&!b.isContextFor(this.context)||!this.checkAllowed(!0))return this.disable(),!0;this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&this.disable();return!1===this.fire("refresh",{editor:a,path:b})?!0:e.refresh&&!1!==e.refresh.apply(this,arguments)};var b;this.checkAllowed=function(c){return c||"boolean"!=typeof b?b=a.activeFilter.checkFeature(this):b};CKEDITOR.tools.extend(this,e,{modes:{wysiwyg:1},
editorFocus:1,contextSensitive:!!e.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)},CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(this.preserveState&&"undefined"!=typeof this.previousState?this.previousState:CKEDITOR.TRISTATE_OFF)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return!1;this.previousState=
this.state;this.state=a;this.fire("state");return!0},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}},CKEDITOR.event.implementOn(CKEDITOR.command.prototype),CKEDITOR.ENTER_P=1,CKEDITOR.ENTER_BR=2,CKEDITOR.ENTER_DIV=3,CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,
docType:"\x3c!DOCTYPE html\x3e",bodyId:"",bodyClass:"",fullPage:!1,height:200,contentsCss:CKEDITOR.getUrl("contents.css"),extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]},function(){function a(a,b,c,f,d){var g,h;a=[];for(g in b){h=b[g];h="boolean"==typeof h?{}:"function"==typeof h?{match:h}:K(h);"$"!=g.charAt(0)&&(h.elements=g);c&&(h.featureName=c.toLowerCase());var e=h;e.elements=k(e.elements,
/\s+/)||null;e.propertiesOnly=e.propertiesOnly||!0===e.elements;var l=/\s*,\s*/,m=void 0;for(m in M){e[m]=k(e[m],l)||null;var n=e,r=H[m],t=k(e[H[m]],l),D=e[m],C=[],B=!0,q=void 0;t?B=!1:t={};for(q in D)"!"==q.charAt(0)&&(q=q.slice(1),C.push(q),t[q]=!0,B=!1);for(;q=C.pop();)D[q]=D["!"+q],delete D["!"+q];n[r]=(B?!1:t)||null}e.match=e.match||null;f.push(h);a.push(h)}b=d.elements;d=d.generic;var y;c=0;for(f=a.length;c<f;++c){g=K(a[c]);h=!0===g.classes||!0===g.styles||!0===g.attributes;e=g;m=r=l=void 0;
for(l in M)e[l]=w(e[l]);n=!0;for(m in H){l=H[m];r=e[l];t=[];D=void 0;for(D in r)-1<D.indexOf("*")?t.push(new RegExp("^"+D.replace(/\*/g,".*")+"$")):t.push(D);r=t;r.length&&(e[l]=r,n=!1)}e.nothingRequired=n;e.noProperties=!(e.attributes||e.classes||e.styles);if(!0===g.elements||null===g.elements)d[h?"unshift":"push"](g);else for(y in e=g.elements,delete g.elements,e)if(b[y])b[y][h?"unshift":"push"](g);else b[y]=[g]}}function e(a,c,f,d){if(!a.match||a.match(c))if(d||h(a,c))if(a.propertiesOnly||(f.valid=
!0),f.allAttributes||(f.allAttributes=b(a.attributes,c.attributes,f.validAttributes)),f.allStyles||(f.allStyles=b(a.styles,c.styles,f.validStyles)),!f.allClasses){a=a.classes;c=c.classes;d=f.validClasses;if(a)if(!0===a)a=!0;else{for(var g=0,e=c.length,l;g<e;++g)l=c[g],d[l]||(d[l]=a(l));a=!1}else a=!1;f.allClasses=a}}function b(a,b,c){if(!a)return!1;if(!0===a)return!0;for(var f in b)c[f]||(c[f]=a(f));return!1}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return!1;c.hadInvalidAttribute=
d(a.attributes,b.attributes)||c.hadInvalidAttribute;c.hadInvalidStyle=d(a.styles,b.styles)||c.hadInvalidStyle;a=a.classes;b=b.classes;if(a){for(var f=!1,g=!0===a,h=b.length;h--;)if(g||a(b[h]))b.splice(h,1),f=!0;a=f}else a=!1;c.hadInvalidClass=a||c.hadInvalidClass}}function d(a,b){if(!a)return!1;var c=!1,f=!0===a,d;for(d in b)if(f||a(d))delete b[d],c=!0;return c}function m(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return!1;a._.cachedChecks={};return!0}function k(a,b){if(!a)return!1;if(!0===a)return a;
if("string"==typeof a)return a=F(a),"*"==a?!0:CKEDITOR.tools.convertArrayToObject(a.split(b));if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a):!1;var c={},f=0,d;for(d in a)c[d]=a[d],f++;return f?c:!1}function h(a,b){if(a.nothingRequired)return!0;var c,f,d,h;if(d=a.requiredClasses)for(h=b.classes,c=0;c<d.length;++c)if(f=d[c],"string"==typeof f){if(-1==CKEDITOR.tools.indexOf(h,f))return!1}else if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(h,f))return!1;return g(b.styles,
a.requiredStyles)&&g(b.attributes,a.requiredAttributes)}function g(a,b){if(!b)return!0;for(var c=0,f;c<b.length;++c)if(f=b[c],"string"==typeof f){if(!(f in a))return!1}else if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,f))return!1;return!0}function l(a){if(!a)return{};a=a.split(/\s*,\s*/).sort();for(var b={};a.length;)b[a.shift()]="cke-test";return b}function f(a){var b,c,f,d,g={},h=1;for(a=F(a);b=a.match(D);)(c=b[2])?(f=n(c,"styles"),d=n(c,"attrs"),c=n(c,"classes")):f=d=c=null,g["$"+h++]=
{elements:b[1],classes:c,styles:f,attributes:d},a=a.slice(b[0].length);return g}function n(a,b){var c=a.match(Q[b]);return c?F(c[1]):null}function u(a){var b=a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"];a.styles||(a.styles=CKEDITOR.tools.parseCssText(b||"",1));a.classes||(a.classes=c?c.split(/\s+/):[])}function v(a,b,f,d){var g=0,h;d.toHtml&&(b.name=b.name.replace(T,"$1"));if(d.doCallbacks&&a.elementCallbacks){a:{h=a.elementCallbacks;for(var l=0,m=h.length,k;l<m;++l)if(k=
h[l](b)){h=k;break a}h=void 0}if(h)return h}if(d.doTransform&&(h=a._.transformations[b.name])){u(b);for(l=0;l<h.length;++l)y(a,b,h[l]);p(b)}if(d.doFilter){a:{l=b.name;m=a._;a=m.allowedRules.elements[l];h=m.allowedRules.generic;l=m.disallowedRules.elements[l];m=m.disallowedRules.generic;k=d.skipRequired;var n={valid:!1,validAttributes:{},validClasses:{},validStyles:{},allAttributes:!1,allClasses:!1,allStyles:!1,hadInvalidAttribute:!1,hadInvalidClass:!1,hadInvalidStyle:!1},r,D;if(a||h){u(b);if(l)for(r=
0,D=l.length;r<D;++r)if(!1===c(l[r],b,n)){a=null;break a}if(m)for(r=0,D=m.length;r<D;++r)c(m[r],b,n);if(a)for(r=0,D=a.length;r<D;++r)e(a[r],b,n,k);if(h)for(r=0,D=h.length;r<D;++r)e(h[r],b,n,k);a=n}else a=null}if(!a||!a.valid)return f.push(b),1;D=a.validAttributes;var H=a.validStyles;h=a.validClasses;var l=b.attributes,C=b.styles,m=b.classes;k=b.classBackup;var B=b.styleBackup,q,w,E=[],n=[],F=/^data-cke-/;r=!1;delete l.style;delete l["class"];delete b.classBackup;delete b.styleBackup;if(!a.allAttributes)for(q in l)D[q]||
(F.test(q)?q==(w=q.replace(/^data-cke-saved-/,""))||D[w]||(delete l[q],r=!0):(delete l[q],r=!0));if(!a.allStyles||a.hadInvalidStyle){for(q in C)a.allStyles||H[q]?E.push(q+":"+C[q]):r=!0;E.length&&(l.style=E.sort().join("; "))}else B&&(l.style=B);if(!a.allClasses||a.hadInvalidClass){for(q=0;q<m.length;++q)(a.allClasses||h[m[q]])&&n.push(m[q]);n.length&&(l["class"]=n.sort().join(" "));k&&n.length<k.split(/\s+/).length&&(r=!0)}else k&&(l["class"]=k);r&&(g=1);if(!d.skipFinalValidation&&!t(b))return f.push(b),
1}d.toHtml&&(b.name=b.name.replace(R,"cke:$1"));return g}function x(a){var b=[],c;for(c in a)-1<c.indexOf("*")&&b.push(c.replace(/\*/g,".*"));return b.length?new RegExp("^(?:"+b.join("|")+")$"):null}function p(a){var b=a.attributes,c;delete b.style;delete b["class"];if(c=CKEDITOR.tools.writeCssText(a.styles,!0))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function t(a){switch(a.name){case "a":if(!(a.children.length||a.attributes.name||a.attributes.id))return!1;break;case "img":if(!a.attributes.src)return!1}return!0}
function w(a){if(!a)return!1;if(!0===a)return!0;var b=x(a);return function(c){return c in a||b&&c.match(b)}}function q(){return new CKEDITOR.htmlParser.element("br")}function A(a){return a.type==CKEDITOR.NODE_ELEMENT&&("br"==a.name||E.$block[a.name])}function r(a,b,c){var f=a.name;if(E.$empty[f]||!a.children.length)"hr"==f&&"br"==b?a.replaceWith(q()):(a.parent&&c.push({check:"it",el:a.parent}),a.remove());else if(E.$block[f]||"tr"==f)if("br"==b)a.previous&&!A(a.previous)&&(b=q(),b.insertBefore(a)),
a.next&&!A(a.next)&&(b=q(),b.insertAfter(a)),a.replaceWithChildren();else{var f=a.children,d;b:{d=E[b];for(var g=0,h=f.length,e;g<h;++g)if(e=f[g],e.type==CKEDITOR.NODE_ELEMENT&&!d[e.name]){d=!1;break b}d=!0}if(d)a.name=b,a.attributes={},c.push({check:"parent-down",el:a});else{d=a.parent;for(var g=d.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||"body"==d.name,l,m,h=f.length;0<h;)e=f[--h],g&&(e.type==CKEDITOR.NODE_TEXT||e.type==CKEDITOR.NODE_ELEMENT&&E.$inline[e.name])?(l||(l=new CKEDITOR.htmlParser.element(b),
l.insertAfter(a),c.push({check:"parent-down",el:l})),l.add(e,0)):(l=null,m=E[d.name]||E.span,e.insertAfter(a),d.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||e.type!=CKEDITOR.NODE_ELEMENT||m[e.name]||c.push({check:"el-up",el:e}));a.remove()}}else f in{style:1,script:1}?a.remove():(a.parent&&c.push({check:"it",el:a.parent}),a.replaceWithChildren())}function y(a,b,c){var f,d;for(f=0;f<c.length;++f)if(d=c[f],!(d.check&&!a.check(d.check,!1)||d.left&&!d.left(b))){d.right(b,L);break}}function C(a,b){var c=b.getDefinition(),
f=c.attributes,d=c.styles,g,h,e,l;if(a.name!=c.element)return!1;for(g in f)if("class"==g)for(c=f[g].split(/\s+/),e=a.classes.join("|");l=c.pop();){if(-1==e.indexOf(l))return!1}else if(a.attributes[g]!=f[g])return!1;for(h in d)if(a.styles[h]!=d[h])return!1;return!0}function B(a,b){var c,f;"string"==typeof a?c=a:a instanceof CKEDITOR.style?f=a:(c=a[0],f=a[1]);return[{element:c,left:f,right:function(a,c){c.transform(a,b)}}]}function z(a){return function(b){return C(b,a)}}function I(a){return function(b,
c){c[a](b)}}var E=CKEDITOR.dtd,K=CKEDITOR.tools.copy,F=CKEDITOR.tools.trim,G=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITOR.filter=function(a,b){this.allowedContent=[];this.disallowedContent=[];this.elementCallbacks=null;this.disabled=!1;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{},cachedChecks:{}};CKEDITOR.filter.instances[this.id]=this;var c=this.editor=a instanceof
CKEDITOR.editor?a:null;if(c&&!b){this.customConfig=!0;var f=c.config.allowedContent;!0===f?this.disabled=!0:(f||(this.customConfig=!1),this.allow(f,"config",1),this.allow(c.config.extraAllowedContent,"extra",1),this.allow(G[c.enterMode]+" "+G[c.shiftEnterMode],"default",1),this.disallow(c.config.disallowedContent))}else this.customConfig=!1,this.allow(b||a,"default",1)};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(b,c,d){if(!m(this,b,d))return!1;var g,h;if("string"==typeof b)b=
f(b);else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,d);g=b.getDefinition();b={};d=g.attributes;b[g.element]=g={styles:g.styles,requiredStyles:g.styles&&CKEDITOR.tools.objectKeys(g.styles)};d&&(d=K(d),g.classes=d["class"]?d["class"].split(/\s+/):null,g.requiredClasses=g.classes,delete d["class"],g.attributes=d,g.requiredAttributes=d&&CKEDITOR.tools.objectKeys(d))}else if(CKEDITOR.tools.isArray(b)){for(g=0;g<b.length;++g)h=this.allow(b[g],
c,d);return h}a(this,b,c,this.allowedContent,this._.allowedRules);return!0},applyTo:function(a,b,c,f){if(this.disabled)return!1;var d=this,g=[],h=this.editor&&this.editor.config.protectedSource,e,l=!1,m={doFilter:!c,doTransform:!0,doCallbacks:!0,toHtml:b};a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if("off"==a.attributes["data-cke-filter"])return!1;if(!b||"span"!=a.name||!~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))if(e=v(d,a,g,m),e&1)l=!0;else if(e&2)return!1}else if(a.type==
CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var f=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var k,n,r;if(h)for(n=0;n<h.length;++n)if((r=f.match(h[n]))&&r[0].length==f.length){c=!0;break a}f=CKEDITOR.htmlParser.fragment.fromHtml(f);1==f.children.length&&(k=f.children[0]).type==CKEDITOR.NODE_ELEMENT&&v(d,k,c,m);c=!c.length}c||g.push(a)}},null,!0);g.length&&(l=!0);var k;a=[];f=G[f||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)];for(var n;c=
g.pop();)c.type==CKEDITOR.NODE_ELEMENT?r(c,f,a):c.remove();for(;k=a.pop();)if(c=k.el,c.parent)switch(n=E[c.parent.name]||E.span,k.check){case "it":E.$removeEmpty[c.name]&&!c.children.length?r(c,f,a):t(c)||r(c,f,a);break;case "el-up":c.parent.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||n[c.name]||r(c,f,a);break;case "parent-down":c.parent.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||n[c.name]||r(c.parent,f,a)}return l},checkFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));
return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=!0},disallow:function(b){if(!m(this,b,!0))return!1;"string"==typeof b&&(b=f(b));a(this,b,null,this.disallowedContent,this._.disallowedRules);return!0},addContentForms:function(a){if(!this.disabled&&a){var b,c,f=[],d;for(b=0;b<a.length&&!d;++b)c=a[b],("string"==typeof c||c instanceof CKEDITOR.style)&&this.check(c)&&(d=c);if(d){for(b=0;b<a.length;++b)f.push(B(a[b],d));this.addTransformations(f)}}},addElementCallback:function(a){this.elementCallbacks||
(this.elementCallbacks=[]);this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);this.addContentForms(a.contentForms);return a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):!0},addTransformations:function(a){var b,c;if(!this.disabled&&a){var f=this._.transformations,d;for(d=0;d<a.length;++d){b=
a[d];var g=void 0,h=void 0,e=void 0,l=void 0,m=void 0,k=void 0;c=[];for(h=0;h<b.length;++h)e=b[h],"string"==typeof e?(e=e.split(/\s*:\s*/),l=e[0],m=null,k=e[1]):(l=e.check,m=e.left,k=e.right),g||(g=e,g=g.element?g.element:l?l.match(/^([a-z0-9]+)/i)[0]:g.left.getDefinition().element),m instanceof CKEDITOR.style&&(m=z(m)),c.push({check:l==g?null:l,left:m,right:"string"==typeof k?I(k):k});b=g;f[b]||(f[b]=[]);f[b].push(c)}}},check:function(a,b,c){if(this.disabled)return!0;if(CKEDITOR.tools.isArray(a)){for(var d=
a.length;d--;)if(this.check(a[d],b,c))return!0;return!1}var g,h;if("string"==typeof a){h=a+"\x3c"+(!1===b?"0":"1")+(c?"1":"0")+"\x3e";if(h in this._.cachedChecks)return this._.cachedChecks[h];g=f(a).$1;var e=g.styles,d=g.classes;g.name=g.elements;g.classes=d=d?d.split(/\s*,\s*/):[];g.styles=l(e);g.attributes=l(g.attributes);g.children=[];d.length&&(g.attributes["class"]=d.join(" "));e&&(g.attributes.style=CKEDITOR.tools.writeCssText(g.styles))}else g=a.getDefinition(),e=g.styles,d=g.attributes||{},
e&&!CKEDITOR.tools.isEmpty(e)?(e=K(e),d.style=CKEDITOR.tools.writeCssText(e,!0)):e={},g={name:g.element,attributes:d,classes:d["class"]?d["class"].split(/\s+/):[],styles:e,children:[]};var e=CKEDITOR.tools.clone(g),m=[],k;if(!1!==b&&(k=this._.transformations[g.name])){for(d=0;d<k.length;++d)y(this,g,k[d]);p(g)}v(this,e,m,{doFilter:!0,doTransform:!1!==b,skipRequired:!c,skipFinalValidation:!c});0<m.length?c=!1:((b=g.attributes["class"])&&(g.attributes["class"]=g.attributes["class"].split(" ").sort().join(" ")),
c=CKEDITOR.tools.objectCompare(g.attributes,e.attributes,!0),b&&(g.attributes["class"]=b));"string"==typeof a&&(this._.cachedChecks[h]=c);return c},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR};return function(c,f){var d=a.slice(),g;if(this.check(G[c]))return c;for(f||(d=d.reverse());g=d.pop();)if(this.check(g))return b[g];return CKEDITOR.ENTER_BR}}(),clone:function(){var a=new CKEDITOR.filter,b=CKEDITOR.tools.clone;a.allowedContent=
b(this.allowedContent);a._.allowedRules=b(this._.allowedRules);a.disallowedContent=b(this.disallowedContent);a._.disallowedRules=b(this._.disallowedRules);a._.transformations=b(this._.transformations);a.disabled=this.disabled;a.editor=this.editor;return a},destroy:function(){delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;delete this.disallowedContent}};var M={styles:1,attributes:1,classes:1},H={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},
D=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,Q={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},T=/^cke:(object|embed|param)$/,R=/^(object|embed|param)$/,L;L=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||
b;if(!(c in a.styles)){var f=a.attributes[b];f&&(/^\d+$/.test(f)&&(f+="px"),a.styles[c]=f)}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var f=a.styles[b],d=f&&f.match(/^(\d+)(?:\.\d*)?px$/);d?a.attributes[c]=d[1]:"cke-test"==f&&(a.attributes[c]="cke-test")}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=a.attributes.align;if("left"==b||"right"==b)a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in
a.attributes)){var b=a.styles["float"];if("left"==b||"right"==b)a.attributes.align=b}delete a.styles["float"]},splitBorderShorthand:function(a){if(a.styles.border){var b=CKEDITOR.tools.style.parse.border(a.styles.border);b.color&&(a.styles["border-color"]=b.color);b.style&&(a.styles["border-style"]=b.style);b.width&&(a.styles["border-width"]=b.width);delete a.styles.border}},listTypeToStyle:function(a){if(a.attributes.type)switch(a.attributes.type){case "a":a.styles["list-style-type"]="lower-alpha";
break;case "A":a.styles["list-style-type"]="upper-alpha";break;case "i":a.styles["list-style-type"]="lower-roman";break;case "I":a.styles["list-style-type"]="upper-roman";break;case "1":a.styles["list-style-type"]="decimal";break;default:a.styles["list-style-type"]=a.attributes.type}},splitMarginShorthand:function(a){function b(f){a.styles["margin-top"]=c[f[0]];a.styles["margin-right"]=c[f[1]];a.styles["margin-bottom"]=c[f[2]];a.styles["margin-left"]=c[f[3]]}if(a.styles.margin){var c=a.styles.margin.match(/(\-?[\.\d]+\w+)/g)||
["0px"];switch(c.length){case 1:b([0,0,0,0]);break;case 2:b([0,1,0,1]);break;case 3:b([0,1,2,1]);break;case 4:b([0,1,2,3])}delete a.styles.margin}},matchesStyle:C,transform:function(a,b){if("string"==typeof b)a.name=b;else{var c=b.getDefinition(),f=c.styles,d=c.attributes,g,h,e,l;a.name=c.element;for(g in d)if("class"==g)for(c=a.classes.join("|"),e=d[g].split(/\s+/);l=e.pop();)-1==c.indexOf(l)&&a.classes.push(l);else a.attributes[g]=d[g];for(h in f)a.styles[h]=f[h]}}}}(),function(){CKEDITOR.focusManager=
function(a){if(a.focusManager)return a.focusManager;this.hasFocus=!1;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);a&&(this.currentActive=a);this.hasFocus||this._.locked||((a=CKEDITOR.currentInstance)&&a.focusManager.blur(1),this.hasFocus=!0,(a=this._.editor.container)&&a.addClass("cke_focus"),this._.editor.fire("focus"))},lock:function(){this._.locked=1},unlock:function(){delete this._.locked},
blur:function(a){function e(){if(this.hasFocus){this.hasFocus=!1;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=CKEDITOR.focusManager._.blurDelay;a||!b?e.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;e.call(this)},b,this)}},add:function(a,e){var b=a.getCustomData("focusmanager");if(!b||b!=this){b&&b.remove(a);var b="focus",c="blur";e&&(CKEDITOR.env.ie?(b="focusin",
c="focusout"):CKEDITOR.event.useCapture=1);var d={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,d.focus,this);a.on(c,d.blur,this);e&&(CKEDITOR.event.useCapture=0);a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",d)}},remove:function(a){a.removeCustomData("focusmanager");var e=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",e.blur);a.removeListener("focus",e.focus)}}}(),CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;
this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this},function(){var a,e=function(b){b=b.data;var d=b.getKeystroke(),e=this.keystrokes[d],k=this._.editor;a=!1===k.fire("key",{keyCode:d,domEvent:b});a||(e&&(a=!1!==k.execCommand(e,{from:"keystrokeHandler"})),a||(a=!!this.blockedKeystrokes[d]));a&&b.preventDefault(!0);return!a},b=function(b){a&&(a=!1,b.data.preventDefault(!0))};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",e,this);if(CKEDITOR.env.gecko&&
CKEDITOR.env.mac)a.on("keypress",b,this)}}}(),function(){CKEDITOR.lang={languages:{af:1,ar:1,az:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,"de-ch":1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,"es-mx":1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,oc:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,
ku:1,ug:1},load:function(a,e,b){a&&CKEDITOR.lang.languages[a]||(a=this.detect(e,a));var c=this;e=function(){c[a].dir=c.rtl[a]?"rtl":"ltr";b(a,c[a])};this[a]?e():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),e,this)},detect:function(a,e){var b=this.languages;e=e||navigator.userLanguage||navigator.language||a;var c=e.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),d=c[1],c=c[2];b[d+"-"+c]?d=d+"-"+c:b[d]||(d=null);CKEDITOR.lang.detect=d?function(){return d}:function(a){return a};return d||
a}}}(),CKEDITOR.scriptLoader=function(){var a={},e={};return{load:function(b,c,d,m){var k="string"==typeof b;k&&(b=[b]);d||(d=CKEDITOR);var h=b.length,g=[],l=[],f=function(a){c&&(k?c.call(d,a):c.call(d,g,l))};if(0===h)f(!0);else{var n=function(a,b){(b?g:l).push(a);0>=--h&&(m&&CKEDITOR.document.getDocumentElement().removeStyle("cursor"),f(b))},u=function(b,c){a[b]=1;var f=e[b];delete e[b];for(var d=0;d<f.length;d++)f[d](b,c)},v=function(b){if(a[b])n(b,!0);else{var f=e[b]||(e[b]=[]);f.push(n);if(!(1<
f.length)){var d=new CKEDITOR.dom.element("script");d.setAttributes({type:"text/javascript",src:b});c&&(CKEDITOR.env.ie&&(8>=CKEDITOR.env.version||CKEDITOR.env.ie9Compat)?d.$.onreadystatechange=function(){if("loaded"==d.$.readyState||"complete"==d.$.readyState)d.$.onreadystatechange=null,u(b,!0)}:(d.$.onload=function(){setTimeout(function(){u(b,!0)},0)},d.$.onerror=function(){u(b,!1)}));d.appendTo(CKEDITOR.document.getHead())}}};m&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");
for(var x=0;x<h;x++)v(b[x])}},queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(d,e){var k=this;c.push({scriptUrl:d,callback:function(){e&&e.apply(this,arguments);c.shift();a.call(k)}});1==c.length&&a.call(this)}}()}}(),CKEDITOR.resourceManager=function(a,e){this.basePath=a;this.fileName=e;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}},CKEDITOR.resourceManager.prototype={add:function(a,e){if(this.registered[a])throw Error('[CKEDITOR.resourceManager.add] The resource name "'+
a+'" is already registered.');var b=this.registered[a]=e||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var e=this.externals[a];return CKEDITOR.getUrl(e&&e.dir||this.basePath+a+"/")},getFilePath:function(a){var e=this.externals[a];return CKEDITOR.getUrl(this.getPath(a)+(e?e.file:this.fileName+".js"))},addExternal:function(a,e,b){a=a.split(",");for(var c=
0;c<a.length;c++){var d=a[c];b||(e=e.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[d]={dir:e,file:b||this.fileName+".js"}}},load:function(a,e,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var c=this.loaded,d=this.registered,m=[],k={},h={},g=0;g<a.length;g++){var l=a[g];if(l)if(c[l]||d[l])h[l]=this.get(l);else{var f=this.getFilePath(l);m.push(f);f in k||(k[f]=[]);k[f].push(l)}}CKEDITOR.scriptLoader.load(m,function(a,f){if(f.length)throw Error('[CKEDITOR.resourceManager.load] Resource name "'+
k[f[0]].join(",")+'" was not found at "'+f[0]+'".');for(var d=0;d<a.length;d++)for(var g=k[a[d]],l=0;l<g.length;l++){var m=g[l];h[m]=this.get(m);c[m]=1}e.call(b,h)},this)}},CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin"),CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var e={};return function(b,c,d){var m={},k=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(m,a);var b=[],f;for(f in a){var h=a[f],u=h&&h.requires;if(!e[f]){if(h.icons)for(var v=
h.icons.split(","),x=v.length;x--;)CKEDITOR.skin.addIcon(v[x],h.path+"icons/"+(CKEDITOR.env.hidpi&&h.hidpi?"hidpi/":"")+v[x]+".png");e[f]=1}if(u)for(u.split&&(u=u.split(",")),h=0;h<u.length;h++)m[u[h]]||b.push(u[h])}if(b.length)k.call(this,b);else{for(f in m)h=m[f],h.onLoad&&!h.onLoad._called&&(!1===h.onLoad()&&delete m[f],h.onLoad._called=1);c&&c.call(d||window,m)}},this)};k.call(this,b)}}),CKEDITOR.plugins.setLang=function(a,e,b){var c=this.get(a);a=c.langEntries||(c.langEntries={});c=c.lang||(c.lang=
[]);c.split&&(c=c.split(","));-1==CKEDITOR.tools.indexOf(c,e)&&c.push(e);a[e]=b},CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this},CKEDITOR.ui.prototype={add:function(a,e,b){b.name=a.toLowerCase();var c=this.items[a]={type:e,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var e=this.items[a],b=e&&this._.handlers[e.type],
c=e&&e.command&&this.editor.getCommand(e.command),b=b&&b.create.apply(this,e.args);this.instances[a]=b;c&&c.uiItems.push(b);b&&!b.type&&(b.type=e.type);return b},addHandler:function(a,e){this._.handlers[a]=e},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}},CKEDITOR.event.implementOn(CKEDITOR.ui),function(){function a(a,f,d){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(void 0!==f){if(!(f instanceof CKEDITOR.dom.element))throw Error("Expect element of type CKEDITOR.dom.element.");
if(!d)throw Error("One of the element modes must be specified.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&d==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");if(!b(f,d))throw Error('The specified element mode is not supported on element: "'+f.getName()+'".');this.element=f;this.elementMode=d;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(f.getId()||f.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};
this.templates={};this.name=this.name||e();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);this.focusManager=new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",c);this.on("selectionChange",function(a){m(this,a.data.path)});this.on("activeFilterChange",function(){m(this,this.elementPath(),!0)});this.on("mode",c);this.on("instanceReady",function(){if(this.config.startupFocus){if("end"===
this.config.startupFocus){var a=this.createRange();a.selectNodeContents(this.editable());a.shrink(CKEDITOR.SHRINK_ELEMENT,!0);a.collapse();this.getSelection().selectRanges([a])}this.focus()}});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){"destroyed"!==this.status?h(this,a):CKEDITOR.warn("editor-incorrect-destroy")},0,this)}function e(){do var a="editor"+ ++x;while(CKEDITOR.instances[a]);return a}function b(a,b){return b==CKEDITOR.ELEMENT_MODE_INLINE?
a.is(CKEDITOR.dtd.$editable)||a.is("textarea"):b==CKEDITOR.ELEMENT_MODE_REPLACE?!a.is(CKEDITOR.dtd.$nonBodyContent):1}function c(){var a=this.commands,b;for(b in a)d(this,a[b])}function d(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function m(a,b,c){if(b){var f,d,g=a.commands;for(d in g)f=g[d],(c||f.contextSensitive)&&f.refresh(a,b)}}function k(a){var b=a.config.customConfig;if(!b)return!1;var b=CKEDITOR.getUrl(b),c=p[b]||(p[b]={});c.fn?
(c.fn.call(a,a.config),CKEDITOR.getUrl(a.config.customConfig)!=b&&k(a)||a.fireOnce("customConfigLoaded")):CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};k(a)});return!0}function h(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,!0);delete a.config.on}c=a.config;a.readOnly=c.readOnly?!0:a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.is("textarea")?a.element.hasAttribute("disabled")||
a.element.hasAttribute("readonly"):a.element.isReadOnly():a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.element.hasAttribute("disabled")||a.element.hasAttribute("readonly"):!1;a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):!1;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:
c.shiftEnterMode;c.skin&&(CKEDITOR.skinName=c.skin);a.fireOnce("configLoaded");a.dataProcessor=new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);g(a)});b&&null!=b.customConfig&&(a.config.customConfig=b.customConfig);k(a)||a.fireOnce("customConfigLoaded")}function g(a){CKEDITOR.skin.loadPart("editor",function(){l(a)})}function l(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,c){var d=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);
a.title="string"==typeof d||!1===d?d:[a.lang.editor,a.name].join(", ");a.config.contentsLangDirection||(a.config.contentsLangDirection=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir);a.fire("langLoaded");f(a)})}function f(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);n(a)})}function n(a){function b(a){if(!a)return"";CKEDITOR.tools.isArray(a)&&(a=a.join(","));return a.replace(/\s/g,"")}var c=a.config,f=b(c.plugins),
d=b(c.extraPlugins),g=b(c.removePlugins);if(d)var h=new RegExp("(?:^|,)(?:"+d.replace(/,/g,"|")+")(?\x3d,|$)","g"),f=f.replace(h,""),f=f+(","+d);if(g)var e=new RegExp("(?:^|,)(?:"+g.replace(/,/g,"|")+")(?\x3d,|$)","g"),f=f.replace(e,"");CKEDITOR.env.air&&(f+=",adobeair");CKEDITOR.plugins.load(f.split(","),function(b){var f=[],d=[],g=[];a.plugins=CKEDITOR.tools.extend({},a.plugins,b);for(var h in b){var l=b[h],m=l.lang,k=null,r=l.requires,n;CKEDITOR.tools.isArray(r)&&(r=r.join(","));if(r&&(n=r.match(e)))for(;r=
n.pop();)CKEDITOR.error("editor-plugin-required",{plugin:r.replace(",",""),requiredBy:h});m&&!a.lang[h]&&(m.split&&(m=m.split(",")),0<=CKEDITOR.tools.indexOf(m,a.langCode)?k=a.langCode:(k=a.langCode.replace(/-.*/,""),k=k!=a.langCode&&0<=CKEDITOR.tools.indexOf(m,k)?k:0<=CKEDITOR.tools.indexOf(m,"en")?"en":m[0]),l.langEntries&&l.langEntries[k]?(a.lang[h]=l.langEntries[k],k=null):g.push(CKEDITOR.getUrl(l.path+"lang/"+k+".js")));d.push(k);f.push(l)}CKEDITOR.scriptLoader.load(g,function(){for(var b=["beforeInit",
"init","afterInit"],g=0;g<b.length;g++)for(var h=0;h<f.length;h++){var e=f[h];0===g&&d[h]&&e.lang&&e.langEntries&&(a.lang[e.name]=e.langEntries[d[h]]);if(e[b[g]])e[b[g]](a)}a.fireOnce("pluginsLoaded");c.keystrokes&&a.setKeystroke(a.config.keystrokes);for(h=0;h<a.config.blockedKeystrokes.length;h++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[h]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function u(){var a=this.element;if(a&&this.elementMode!=
CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):a.setHtml(b);return!0}return!1}function v(a,b){function c(a){var b=a.startContainer,f=a.endContainer;return b.is&&(b.is("tr")||b.is("td")&&b.equals(f)&&a.endOffset===b.getChildCount())?!0:!1}function f(a){var b=a.startContainer;return b.is("tr")?a.cloneContents():b.clone(!0)}for(var d=new CKEDITOR.dom.documentFragment,g,h,e,l=0;l<a.length;l++){var m=a[l],
k=m.startContainer.getAscendant("tr",!0);c(m)?(g||(g=k.getAscendant("table").clone(),g.append(k.getAscendant({thead:1,tbody:1,tfoot:1}).clone()),d.append(g),g=g.findOne("thead, tbody, tfoot")),h&&h.equals(k)||(h=k,e=k.clone(),g.append(e)),e.append(f(m))):d.append(m.cloneContents())}return g?d:b.getHtmlFromRange(a[0])}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var x=0,p={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{plugins:{detectConflict:function(a,b){for(var c=0;c<b.length;c++){var f=
b[c];if(this[f])return CKEDITOR.warn("editor-plugin-conflict",{plugin:a,replacedWith:f}),!0}return!1}},addCommand:function(a,b){b.name=a.toLowerCase();var c=b instanceof CKEDITOR.command?b:new CKEDITOR.command(this,b);this.mode&&d(this,c);return this.commands[a]=c},_attachToForm:function(){function a(b){c.updateElement();c._.required&&!f.getValue()&&!1===c.fire("required")&&b.data.preventDefault()}function b(a){return!!(a&&a.call&&a.apply)}var c=this,f=c.element,d=new CKEDITOR.dom.element(f.$.form);
f.is("textarea")&&d&&(d.on("submit",a),b(d.$.submit)&&(d.$.submit=CKEDITOR.tools.override(d.$.submit,function(b){return function(){a();b.apply?b.apply(this):b()}})),c.on("destroy",function(){d.removeListener("submit",a)}))},destroy:function(a){var b=CKEDITOR.filter.instances,c=this;this.fire("beforeDestroy");!a&&u.call(this);this.editable(null);this.filter&&delete this.filter;CKEDITOR.tools.array.forEach(CKEDITOR.tools.objectKeys(b),function(a){a=b[a];c===a.editor&&a.destroy()});delete this.activeFilter;
this.status="destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),f={name:a,commandData:b||{},command:c};return c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&
!1!==this.fire("beforeCommandExec",f)&&(f.returnValue=c.exec(f.commandData),!c.async&&!1!==this.fire("afterCommandExec",f))?f.returnValue:!1},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;"string"!=typeof b&&(b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():"");b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");
"string"!=typeof a&&(a=(a=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.is("textarea")?a.getValue():a.getHtml():"");return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var f=!0,d=b;b&&"object"==typeof b&&(c=b.internal,d=b.callback,f=!b.noSnapshot);!c&&f&&this.fire("saveSnapshot");if(d||!c)this.once("dataReady",function(a){!c&&f&&this.fire("saveSnapshot");d&&d.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;
!c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=null==a||a;this.readOnly!=a&&(this.readOnly=a,this.keystrokeHandler.blockedKeystrokes[8]=+a,this.editable().setReadOnly(a),this.fire("readOnly"))},insertHtml:function(a,b,c){this.fire("insertHtml",{dataValue:a,mode:b,range:c})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},getSelectedHtml:function(a){var b=this.editable(),c=this.getSelection(),c=c&&c.getRanges();if(!b||!c||0===c.length)return null;
b=v(c,b);return a?b.getHtml():b},extractSelectedHtml:function(a,b){var c=this.editable(),f=this.getSelection().getRanges(),d=new CKEDITOR.dom.documentFragment,g;if(!c||0===f.length)return null;for(g=0;g<f.length;g++)d.append(c.extractHtmlFromRange(f[g],b));b||this.getSelection().selectRanges([f[0]]);return a?d.getHtml():d},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return"ready"==this.status&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=
this.getSnapshot()},updateElement:function(){return u.call(this)},setKeystroke:function(){for(var a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,f,d=b.length;d--;)c=b[d],f=0,CKEDITOR.tools.isArray(c)&&(f=c[1],c=c[0]),f?a[c]=f:delete a[c]},getCommandKeystroke:function(a,b){var c="string"===typeof a?this.getCommand(a):a,f=[];if(c){var d=CKEDITOR.tools.object.findKey(this.commands,c),g=this.keystrokeHandler.keystrokes;if(c.fakeKeystroke)f.push(c.fakeKeystroke);
else for(var h in g)g[h]===d&&f.push(h)}return b?f:f[0]||null},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){a||(a=this.filter);this.activeFilter!==a&&(this.activeFilter=a,this.fire("activeFilterChange"),a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),a.getAllowedEnterMode(this.shiftEnterMode,!0)))},setActiveEnterMode:function(a,b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?
CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b)this.activeEnterMode=a,this.activeShiftEnterMode=b,this.fire("activeEnterModeChange")},showNotification:function(a){alert(a)}})}(),CKEDITOR.ELEMENT_MODE_NONE=0,CKEDITOR.ELEMENT_MODE_REPLACE=1,CKEDITOR.ELEMENT_MODE_APPENDTO=2,CKEDITOR.ELEMENT_MODE_INLINE=3,CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}},
function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,e={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,d,m=0,k;c=this._.htmlPartsRegex.exec(b);){d=c.index;if(d>m)if(m=b.substring(m,d),k)k.push(m);else this.onText(m);
m=this._.htmlPartsRegex.lastIndex;if(d=c[1])if(d=d.toLowerCase(),k&&CKEDITOR.dtd.$cdata[d]&&(this.onCDATA(k.join("")),k=null),!k){this.onTagClose(d);continue}if(k)k.push(c[0]);else if(d=c[3]){if(d=d.toLowerCase(),!/="/.test(d)){var h={},g,l=c[4];c=!!c[5];if(l)for(;g=a.exec(l);){var f=g[1].toLowerCase();g=g[2]||g[3]||g[4]||"";h[f]=!g&&e[f]?f:CKEDITOR.tools.htmlDecodeAttr(g)}this.onTagOpen(d,h,c);!k&&CKEDITOR.dtd.$cdata[d]&&(k=[])}}else if(d=c[2])this.onComment(d)}if(b.length>m)this.onText(b.substring(m,
b.length))}}}(),CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("\x3c",a)},openTagClose:function(a,e){e?this._.output.push(" /\x3e"):this._.output.push("\x3e")},attribute:function(a,e){"string"==typeof e&&(e=CKEDITOR.tools.htmlEncodeAttr(e));this._.output.push(" ",a,'\x3d"',e,'"')},closeTag:function(a){this._.output.push("\x3c/",a,"\x3e")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("\x3c!--",
a,"--\x3e")},write:function(a){this._.output.push(a)},reset:function(){this._.output=[];this._.indent=!1},getHtml:function(a){var e=this._.output.join("");a&&this.reset();return e}}}),"use strict",function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,e=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(e,1);this.parent=null},replaceWith:function(a){var e=this.parent.children,
b=CKEDITOR.tools.indexOf(e,this),c=a.previous=this.previous,d=a.next=this.next;c&&(c.next=a);d&&(d.previous=a);e[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var e=a.parent.children,b=CKEDITOR.tools.indexOf(e,a),c=a.next;e.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var e=a.parent.children,b=CKEDITOR.tools.indexOf(e,a);e.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=
this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var e="function"==typeof a?a:"string"==typeof a?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&b.type==CKEDITOR.NODE_ELEMENT;){if(e(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}}(),"use strict",CKEDITOR.htmlParser.comment=
function(a){this.value=a;this._={isBlockLike:!1}},CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,e){var b=this.value;if(!(b=a.onComment(e,b,this)))return this.remove(),!1;if("string"!=typeof b)return this.replaceWith(b),!1;this.value=b;return!0},writeHtml:function(a,e){e&&this.filter(e);a.comment(this.value)}}),"use strict",function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:!1}};CKEDITOR.htmlParser.text.prototype=
CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,e){if(!(this.value=a.onText(e,this.value,this)))return this.remove(),!1},writeHtml:function(a,e){e&&this.filter(e);a.text(this.value)}})}(),"use strict",function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})}(),"use strict",
CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:!0,hasInlineStarted:!1}},function(){function a(a){return a.attributes["data-cke-survive"]?!1:"a"==a.name&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var e=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),d={ul:"li",
ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=function(m,k,h){function g(a){var b;if(0<t.length)for(var c=0;c<t.length;c++){var f=t[c],d=f.name,g=CKEDITOR.dtd[d],h=q.name&&CKEDITOR.dtd[q.name];h&&!h[d]||a&&g&&!g[a]&&CKEDITOR.dtd[a]?d==q.name&&(n(q,q.parent,1),c--):(b||(l(),b=1),f=f.clone(),f.parent=q,q=f,t.splice(c,1),c--)}}function l(){for(;w.length;)n(w.shift(),q)}function f(a){if(a._.isBlockLike&&"pre"!=a.name&&"textarea"!=a.name){var b=
a.children.length,c=a.children[b-1],f;c&&c.type==CKEDITOR.NODE_TEXT&&((f=CKEDITOR.tools.rtrim(c.value))?c.value=f:a.children.length=b-1)}}function n(b,c,d){c=c||q||p;var g=q;void 0===b.previous&&(u(c,b)&&(q=c,x.onTagOpen(h,{}),b.returnPoint=c=q),f(b),a(b)&&!b.children.length||c.add(b),"pre"==b.name&&(r=!1),"textarea"==b.name&&(A=!1));b.returnPoint?(q=b.returnPoint,delete b.returnPoint):q=d?c:g}function u(a,b){if((a==p||"body"==a.name)&&h&&(!a.name||CKEDITOR.dtd[a.name][h])){var c,f;return(c=b.attributes&&
(f=b.attributes["data-cke-real-element-type"])?f:b.name)&&c in CKEDITOR.dtd.$inline&&!(c in CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function v(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||"dt"==a&&"dd"==b||"dd"==a&&"dt"==b:!1}var x=new CKEDITOR.htmlParser,p=k instanceof CKEDITOR.htmlParser.element?k:"string"==typeof k?new CKEDITOR.htmlParser.element(k):new CKEDITOR.htmlParser.fragment,t=[],w=[],q=p,A="textarea"==p.name,r="pre"==p.name;x.onTagOpen=
function(f,d,h,m){d=new CKEDITOR.htmlParser.element(f,d);d.isUnknown&&h&&(d.isEmpty=!0);d.isOptionalClose=m;if(a(d))t.push(d);else{if("pre"==f)r=!0;else{if("br"==f&&r){q.add(new CKEDITOR.htmlParser.text("\n"));return}"textarea"==f&&(A=!0)}if("br"==f)w.push(d);else{for(;!(m=(h=q.name)?CKEDITOR.dtd[h]||(q._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c,d.isUnknown||q.isUnknown||m[f]);)if(q.isOptionalClose)x.onTagClose(h);else if(f in b&&h in b)h=q.children,(h=h[h.length-1])&&"li"==h.name||n(h=new CKEDITOR.htmlParser.element("li"),
q),!d.returnPoint&&(d.returnPoint=q),q=h;else if(f in CKEDITOR.dtd.$listItem&&!v(f,h))x.onTagOpen("li"==f?"ul":"dl",{},0,1);else if(h in e&&!v(f,h))!d.returnPoint&&(d.returnPoint=q),q=q.parent;else if(h in CKEDITOR.dtd.$inline&&t.unshift(q),q.parent)n(q,q.parent,1);else{d.isOrphan=1;break}g(f);l();d.parent=q;d.isEmpty?n(d):q=d}}};x.onTagClose=function(a){for(var b=t.length-1;0<=b;b--)if(a==t[b].name){t.splice(b,1);return}for(var c=[],f=[],d=q;d!=p&&d.name!=a;)d._.isBlockLike||f.unshift(d),c.push(d),
d=d.returnPoint||d.parent;if(d!=p){for(b=0;b<c.length;b++){var g=c[b];n(g,g.parent)}q=d;d._.isBlockLike&&l();n(d,d.parent);d==q&&(q=q.parent);t=t.concat(f)}"body"==a&&(h=!1)};x.onText=function(a){if(!(q._.hasInlineStarted&&!w.length||r||A)&&(a=CKEDITOR.tools.ltrim(a),0===a.length))return;var b=q.name,f=b?CKEDITOR.dtd[b]||(q._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!A&&!f["#"]&&b in e)x.onTagOpen(d[b]||""),x.onText(a);else{l();g();r||A||(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=
new CKEDITOR.htmlParser.text(a);if(u(q,a))this.onTagOpen(h,{},0,1);q.add(a)}};x.onCDATA=function(a){q.add(new CKEDITOR.htmlParser.cdata(a))};x.onComment=function(a){l();g();q.add(new CKEDITOR.htmlParser.comment(a))};x.parse(m);for(l();q!=p;)n(q,q.parent,1);f(p);return p};CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=0<b?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT&&(c.value=CKEDITOR.tools.rtrim(c.value),
0===c.value.length)){this.children.pop();this.add(a);return}c.next=a}a.previous=c;a.parent=this;this.children.splice(b,0,a);this._.hasInlineStarted||(this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike)},filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,!1,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;
for(b=0;b<this.children.length;b++)!1===this.children[b].filter(a,c)&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var d=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(d,this);b&&this.filterChildren(b,!1,d);b=0;c=this.children;for(d=c.length;b<d;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var d=a(this);if(!1!==d){c=this.children;for(var e=0;e<c.length;e++)d=c[e],d.type==CKEDITOR.NODE_ELEMENT?d.forEach(a,
b):b&&d.type!=b||a(d)}},getFilterContext:function(a){return a||{}}}}(),"use strict",function(){function a(){this.rules=[]}function e(b,c,d,e){var k,h;for(k in c)(h=b[k])||(h=b[k]=new a),h.add(c[k],d,e)}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},
proto:{addRules:function(a,c){var d;"number"==typeof c?d=c:c&&"priority"in c&&(d=c.priority);"number"!=typeof d&&(d=10);"object"!=typeof c&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,d,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,d,c);a.elements&&e(this.elementsRules,a.elements,d,c);a.attributes&&e(this.attributesRules,a.attributes,d,c);a.text&&this.textRules.add(a.text,d,c);a.comment&&this.commentRules.add(a.comment,d,c);a.root&&this.rootRules.add(a.root,
d,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,d){return this.textRules.exec(a,c,d)},onComment:function(a,c,d){return this.commentRules.exec(a,c,d)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var d=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],e,k=0;3>k;k++)if(e=d[k]){e=
e.exec(a,c,this);if(!1===e)return null;if(e&&e!=c)return this.onNode(a,e);if(c.parent&&!c.name)break}return c},onNode:function(a,c){var d=c.type;return d==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):d==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):d==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,d,e){return(d=this.attributesRules[d])?d.exec(a,e,c,this):e}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype=
{add:function(a,c,d){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:d})},addMany:function(a,c,d){for(var e=[this.findIndex(c),0],k=0,h=a.length;k<h;k++)e.push({value:a[k],priority:c,options:d});this.rules.splice.apply(this.rules,e)},findIndex:function(a){for(var c=this.rules,d=c.length-1;0<=d&&a<c[d].priority;)d--;return d+1},exec:function(a,c){var d=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,e=Array.prototype.slice.call(arguments,1),k=this.rules,
h=k.length,g,l,f,n;for(n=0;n<h;n++)if(d&&(g=c.type,l=c.name),f=k[n],!(a.nonEditable&&!f.options.applyToAll||a.nestedEditable&&f.options.excludeNestedEditable)){f=f.value.apply(null,e);if(!1===f||d&&f&&(f.name!=l||f.type!=g))return f;null!=f&&(e[0]=c=f)}return c},execOnName:function(a,c){for(var d=0,e=this.rules,k=e.length,h;c&&d<k;d++)h=e[d],a.nonEditable&&!h.options.applyToAll||a.nestedEditable&&h.options.excludeNestedEditable||(c=c.replace(h.value[0],h.value[1]));return c}}}(),function(){function a(a,
f){function g(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function h(a,f){return function(d){if(d.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var h=[],l=b(d),k,r;if(l)for(e(l,1)&&h.push(l);l;)m(l)&&(k=c(l))&&e(k)&&((r=c(k))&&!m(r)?h.push(k):(g(n).insertAfter(k),k.remove())),l=l.previous;for(l=0;l<h.length;l++)h[l].remove();if(h=!a||!1!==("function"==typeof f?f(d):f))n||CKEDITOR.env.needsBrFiller||d.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT?
n||CKEDITOR.env.needsBrFiller||!(7<document.documentMode||d.name in CKEDITOR.dtd.tr||d.name in CKEDITOR.dtd.$listItem)?(h=b(d),h=!h||"form"==d.name&&"input"==h.name):h=!1:h=!1;h&&d.add(g(a))}}}function e(a,b){if((!n||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&"br"==a.name&&!a.attributes["data-cke-eol"])return!0;var c;return a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(q))&&(c.index&&((new CKEDITOR.htmlParser.text(a.value.substring(0,c.index))).insertBefore(a),a.value=c[0]),!CKEDITOR.env.needsBrFiller&&
n&&(!b||a.parent.name in D)||!n&&((c=a.previous)&&"br"==c.name||!c||m(c)))?!0:!1}var l={elements:{}},n="html"==f,D=CKEDITOR.tools.extend({},C),H;for(H in D)"#"in r[H]||delete D[H];for(H in D)l.elements[H]=h(n,a.config.fillEmptyBlocks);l.root=h(n,!1);l.elements.br=function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var f=b.attributes;if("data-cke-bogus"in f||"data-cke-eol"in f)delete f["data-cke-bogus"];else{for(f=b.next;f&&d(f);)f=f.next;var h=c(b);!f&&m(b.parent)?k(b.parent,
g(a)):m(f)&&h&&!m(h)&&g(a).insertBefore(f)}}}}(n);return l}function e(a,b){return a!=CKEDITOR.ENTER_BR&&!1!==b?a==CKEDITOR.ENTER_DIV?"div":"p":!1}function b(a){for(a=a.children[a.children.length-1];a&&d(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&d(a);)a=a.previous;return a}function d(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&a.attributes["data-cke-bookmark"]}function m(a){return a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in
C||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function k(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;c&&(c.next=b,b.previous=c)}function h(a){a=a.attributes;"false"!=a.contenteditable&&(a["data-cke-editable"]=a.contenteditable?"true":1);a.contenteditable="false"}function g(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}function l(a){return a.replace(K,function(a,b,c){return"\x3c"+b+c.replace(F,
function(a,b){return G.test(b)&&-1==c.indexOf("data-cke-saved-"+b)?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+"\x3e"})}function f(a,b){return a.replace(b,function(a,b,c){0===a.indexOf("\x3ctextarea")&&(a=b+p(c).replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;")+"\x3c/textarea\x3e");return"\x3ccke:encoded\x3e"+encodeURIComponent(a)+"\x3c/cke:encoded\x3e"})}function n(a){return a.replace(D,function(a,b){return decodeURIComponent(b)})}function u(a){return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g,
function(a){return"\x3c!--"+A+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\x3e"})}function v(a){return CKEDITOR.tools.array.reduce(a.split(""),function(a,b){var c=b.toLowerCase(),f=b.toUpperCase(),d=x(c);c!==f&&(d+="|"+x(f));return a+("("+d+")")},"")}function x(a){var b;b=a.charCodeAt(0);var c=b.toString(16);b={htmlCode:"\x26#"+b+";?",hex:"\x26#x0*"+c+";?",entity:{"\x3c":"\x26lt;","\x3e":"\x26gt;",":":"\x26colon;"}[a]};for(var f in b)b[f]&&(a+="|"+b[f]);return a}function p(a){return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g,
function(a,b){return decodeURIComponent(b)})}function t(a,b){var c=b._.dataStore;return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function w(a,b){var c=[],f=b.config.protectedSource,d=b._.dataStore||(b._.dataStore={id:1}),g=/<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g,f=[/<script[\s\S]*?(<\/script>|$)/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(f);a=a.replace(/\x3c!--[\s\S]*?--\x3e/g,
function(a){return"\x3c!--{cke_tempcomment}"+(c.push(a)-1)+"--\x3e"});for(var h=0;h<f.length;h++)a=a.replace(f[h],function(a){a=a.replace(g,function(a,b,f){return c[f]});return/cke_temp(comment)?/.test(a)?a:"\x3c!--{cke_temp}"+(c.push(a)-1)+"--\x3e"});a=a.replace(g,function(a,b,f){return"\x3c!--"+A+(b?"{C}":"")+encodeURIComponent(c[f]).replace(/--/g,"%2D%2D")+"--\x3e"});a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g,function(a){return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g,
function(a,b){d[d.id]=decodeURIComponent(b);return"{cke_protected_"+d.id++ +"}"})});return a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,f,d){return"\x3c"+c+f+"\x3e"+t(p(d),b)+"\x3c/"+c+"\x3e"})}CKEDITOR.htmlDataProcessor=function(b){var c,d,g=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;this.htmlFilter=d=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(B);c.addRules(z,{applyToAll:!0});c.addRules(a(b,"data"),
{applyToAll:!0});d.addRules(I);d.addRules(E,{applyToAll:!0});d.addRules(a(b,"html"),{applyToAll:!0});b.on("toHtml",function(a){a=a.data;var c=a.dataValue,d,c=c.replace(Q,""),c=w(c,b),c=f(c,H),c=l(c),c=f(c,M),c=c.replace(T,"$1cke:$2"),c=c.replace(L,"\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,"$1data-cke-"+CKEDITOR.rnd+"-$2");d=a.context||b.editable().getName();var g;CKEDITOR.env.ie&&9>CKEDITOR.env.version&&"pre"==
d&&(d="div",c="\x3cpre\x3e"+c+"\x3c/pre\x3e",g=1);d=b.document.createElement(d);d.setHtml("a"+c);c=d.getHtml().substr(1);c=c.replace(new RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");g&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(R,"$1$2");c=n(c);c=p(c);d=!1===a.fixForBody?!1:e(a.enterMode,b.config.autoParagraph);c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,d);d&&(g=c,!g.children.length&&CKEDITOR.dtd[g.name][d]&&(d=new CKEDITOR.htmlParser.element(d),g.add(d)));a.dataValue=c},null,null,
5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,!0,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",function(a){a.data.dataValue.filterChildren(g.dataFilter,!0)},null,null,10);b.on("toHtml",function(a){a=a.data;var b=a.dataValue,c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(!0);a.dataValue=u(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,
""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,e(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(g.htmlFilter,!0)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,!1,!0)},null,null,11);b.on("toDataFormat",function(a){var c=a.data.dataValue,f=g.writer;f.reset();c.writeChildrenHtml(f);c=f.getHtml(!0);c=p(c);c=t(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype=
{toHtml:function(a,b,c,f){var d=this.editor,g,h,e,l;b&&"object"==typeof b?(g=b.context,c=b.fixForBody,f=b.dontFilter,h=b.filter,e=b.enterMode,l=b.protectedWhitespaces):g=b;g||null===g||(g=d.editable().getName());return d.fire("toHtml",{dataValue:a,context:g,fixForBody:c,dontFilter:f,filter:h||d.filter,enterMode:e||d.enterMode,protectedWhitespaces:l}).dataValue},toDataFormat:function(a,b){var c,f,d;b&&(c=b.context,f=b.filter,d=b.enterMode);c||null===c||(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",
{dataValue:a,filter:f||this.editor.filter,context:c,enterMode:d||this.editor.enterMode}).dataValue}};var q=/(?:&nbsp;|\xa0)$/,A="{cke_protected}",r=CKEDITOR.dtd,y="caption colgroup col thead tfoot tbody".split(" "),C=CKEDITOR.tools.extend({},r.$blockLimit,r.$block),B={elements:{input:h,textarea:h}},z={attributeNames:[[/^on/,"data-cke-pa-on"],[/^srcdoc/,"data-cke-pa-srcdoc"],[/^data-cke-expando$/,""]],elements:{iframe:function(a){if(a.attributes&&a.attributes.src){var b=a.attributes.src.toLowerCase().replace(/[^a-z]/gi,
"");if(0===b.indexOf("javascript")||0===b.indexOf("data"))a.attributes["data-cke-pa-src"]=a.attributes.src,delete a.attributes.src}}}},I={elements:{embed:function(a){var b=a.parent;if(b&&"object"==b.name){var c=b.attributes.width,b=b.attributes.height;c&&(a.attributes.width=c);b&&(a.attributes.height=b)}},a:function(a){var b=a.attributes;if(!(a.children.length||b.name||b.id||a.attributes["data-cke-saved-name"]))return!1}}},E={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,
""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return!1;for(var c=["name","href","src"],f,d=0;d<c.length;d++)f="data-cke-saved-"+c[d],f in b&&delete b[c[d]]}return a},table:function(a){a.children.slice(0).sort(function(a,b){var c,f;a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type&&(c=CKEDITOR.tools.indexOf(y,a.name),f=CKEDITOR.tools.indexOf(y,b.name));-1<c&&-1<f&&c!=f||(c=a.parent?a.getIndex():-1,f=b.parent?b.getIndex():-1);return c>f?
1:-1})},param:function(a){a.children=[];a.isEmpty=!0;return a},span:function(a){"Apple-style-span"==a.attributes["class"]&&delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;delete a.attributes.contenteditable},style:function(a){var b=a.children[0];b&&b.value&&(b.value=CKEDITOR.tools.trim(b.value));a.attributes.type||(a.attributes.type="text/css")},title:function(a){var b=a.children[0];!b&&k(a,b=new CKEDITOR.htmlParser.text);
b.value=a.attributes["data-cke-title"]||""},input:g,textarea:g},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,""))||!1}}};CKEDITOR.env.ie&&(E.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,function(a){return a.toLowerCase()})});var K=/<(a|area|img|input|source)\b([^>]*)>/gi,F=/([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,G=/^(href|src|name)$/i,M=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,
H=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,D=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,Q=new RegExp("("+v("\x3ccke:encoded\x3e")+"(.*?)"+v("\x3c/cke:encoded\x3e")+")|("+v("\x3c")+v("/")+"?"+v("cke:encoded\x3e")+")","gi"),T=/(<\/?)((?:object|embed|param|html|body|head|title)([\s][^>]*)?>)/gi,R=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,L=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi}(),"use strict",CKEDITOR.htmlParser.element=function(a,e){this.name=a;this.attributes=e||{};this.children=
[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!!(CKEDITOR.dtd.$nonBodyContent[b]||CKEDITOR.dtd.$block[b]||CKEDITOR.dtd.$listItem[b]||CKEDITOR.dtd.$tableContent[b]||CKEDITOR.dtd.$nonEditable[b]||"br"==b);this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}},CKEDITOR.htmlParser.cssStyle=function(a){var e={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,
function(a,c,d){"font-family"==c&&(d=d.replace(/["']/g,""));e[c.toLowerCase()]=d});return{rules:e,populate:function(a){var c=this.toString();c&&(a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c)},toString:function(){var a=[],c;for(c in e)e[c]&&a.push(c,":",e[c],";");return a.join("")}}},function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&("string"==typeof a?b.name==a:b.name in a)}}var e=
function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var e=this,k,h;b=e.getFilterContext(b);if(!e.parent)a.onRoot(b,e);for(;;){k=e.name;if(!(h=a.onElementName(b,k)))return this.remove(),!1;e.name=h;if(!(e=a.onElement(b,e)))return this.remove(),
!1;if(e!==this)return this.replaceWith(e),!1;if(e.name==k)break;if(e.type!=CKEDITOR.NODE_ELEMENT)return this.replaceWith(e),!1;if(!e.name)return this.replaceWithChildren(),!1}k=e.attributes;var g,l;for(g in k){for(h=k[g];;)if(l=a.onAttributeName(b,g))if(l!=g)delete k[g],g=l;else break;else{delete k[g];break}l&&(!1===(h=a.onAttribute(b,e,l,h))?delete k[l]:k[l]=h)}e.isEmpty||this.filterChildren(a,!1,b);return!0},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var m=this.name,
k=[],h=this.attributes,g,l;a.openTag(m,h);for(g in h)k.push([g,h[g]]);a.sortAttributes&&k.sort(e);g=0;for(l=k.length;g<l;g++)h=k[g],a.attribute(h[0],h[1]);a.openTagClose(m,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(m)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=this.children,b=a.length;b;)a[--b].insertAfter(this);this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;"function"!=typeof b&&
(b=a(b));for(var d=0,e=this.children.length;d<e;++d)if(b(this.children[d]))return this.children[d];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children;for(var b=0,e=a.length;b<e;++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,
this.children.length-a),e=this.clone(),k=0;k<b.length;++k)b[k].parent=e;e.children=b;b[0]&&(b[0].previous=null);0<a&&(this.children[a-1].next=null);this.parent.add(e,this.getIndex()+1);return e},find:function(a,b){void 0===b&&(b=!1);var e=[],k;for(k=0;k<this.children.length;k++){var h=this.children[k];"function"==typeof a&&a(h)?e.push(h):"string"==typeof a&&h.name===a&&e.push(h);b&&h.find&&(e=e.concat(h.find(a,b)))}return e},addClass:function(a){if(!this.hasClass(a)){var b=this.attributes["class"]||
"";this.attributes["class"]=b+(b?" ":"")+a}},removeClass:function(a){var b=this.attributes["class"];b&&((b=CKEDITOR.tools.trim(b.replace(new RegExp("(?:\\s+|^)"+a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"])},hasClass:function(a){var b=this.attributes["class"];return b?(new RegExp("(?:^|\\s)"+a+"(?\x3d\\s|$)")).test(b):!1},getFilterContext:function(a){var b=[];a||(a={nonEditable:!1,nestedEditable:!1});a.nonEditable||"false"!=this.attributes.contenteditable?a.nonEditable&&
!a.nestedEditable&&"true"==this.attributes.contenteditable&&b.push("nestedEditable",!0):b.push("nonEditable",!0);if(b.length){a=CKEDITOR.tools.copy(a);for(var e=0;e<b.length;e+=2)a[b[e]]=b[e+1]}return a}},!0)}(),function(){var a=/{([^}]+)}/g;CKEDITOR.template=function(a){this.source=String(a)};CKEDITOR.template.prototype.output=function(e,b){var c=this.source.replace(a,function(a,b){return void 0!==e[b]?e[b]:a});return b?b.push(c):c}}(),delete CKEDITOR.loadFullCore,CKEDITOR.instances={},CKEDITOR.document=
new CKEDITOR.dom.document(document),CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){CKEDITOR.currentInstance!=a&&(CKEDITOR.currentInstance=a,CKEDITOR.fire("currentInstance"))});a.on("blur",function(){CKEDITOR.currentInstance==a&&(CKEDITOR.currentInstance=null,CKEDITOR.fire("currentInstance"))});CKEDITOR.fire("instance",null,a)},CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]},function(){var a={};CKEDITOR.addTemplate=function(e,b){var c=a[e];if(c)return c;
c={name:e,source:b};CKEDITOR.fire("template",c);return a[e]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(e){return a[e]}}(),function(){var a=[];CKEDITOR.addCss=function(e){a.push(e)};CKEDITOR.getCss=function(){return a.join("\n")}}(),CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")}),CKEDITOR.TRISTATE_ON=1,CKEDITOR.TRISTATE_OFF=2,CKEDITOR.TRISTATE_DISABLED=0,function(){CKEDITOR.inline=function(a,e){if(!CKEDITOR.env.isCompatible)return null;
a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(e,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;c?(b.setData(c.getValue(),null,!0),a=CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"'+!!b.readOnly+'" class\x3d"cke_textarea_inline"\x3e'+c.getValue()+"\x3c/div\x3e",CKEDITOR.document),a.insertAfter(c),c.hide(),c.$.form&&b._attachToForm()):b.setData(a.getHtml(),
null,!0);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.ui.contentsElement=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){c&&(b.container.clearCustomData(),b.container.remove(),c.show());b.element.clearCustomData();delete b.element});return b};CKEDITOR.inlineAll=function(){var a,e,b;for(b in CKEDITOR.dtd.$editable)for(var c=
CKEDITOR.document.getElementsByTag(b),d=0,m=c.count();d<m;d++)a=c.getItem(d),"true"==a.getAttribute("contenteditable")&&(e={element:a,config:{}},!1!==CKEDITOR.fire("inline",e)&&CKEDITOR.inline(a,e.config))};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})}(),CKEDITOR.replaceClass="ckeditor",function(){function a(a,d,m,k){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';
var h=new CKEDITOR.editor(d,a,k);k==CKEDITOR.ELEMENT_MODE_REPLACE&&(a.setStyle("visibility","hidden"),h._.required=a.hasAttribute("required"),a.removeAttribute("required"));m&&h.setData(m,null,!0);h.on("loaded",function(){b(h);k==CKEDITOR.ELEMENT_MODE_REPLACE&&h.config.autoUpdateElement&&a.$.form&&h._attachToForm();h.setMode(h.config.startupMode,function(){h.resetDirty();h.status="ready";h.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,h)})});h.on("destroy",e);return h}function e(){var a=
this.container,b=this.element;a&&(a.clearCustomData(),a.remove());b&&(b.clearCustomData(),this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&(b.show(),this._.required&&b.setAttribute("required","required")),delete this.element)}function b(a){var b=a.name,e=a.element,k=a.elementMode,h=a.fire("uiSpace",{space:"top",html:""}).html,g=a.fire("uiSpace",{space:"bottom",html:""}).html,l=new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+
CKEDITOR.env.cssClass+'"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"'+(a.title?' aria-labelledby\x3d"cke_{name}_arialbl"':"")+"\x3e"+(a.title?'\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e':"")+'\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
b=CKEDITOR.dom.element.createFromHtml(l.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:h?'\x3cspan id\x3d"'+a.ui.spaceId("top")+'" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e'+h+"\x3c/span\x3e":"",contentId:a.ui.spaceId("contents"),bottomHtml:g?'\x3cspan id\x3d"'+a.ui.spaceId("bottom")+'" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e'+g+"\x3c/span\x3e":"",outerEl:CKEDITOR.env.ie?"span":"div"}));k==CKEDITOR.ELEMENT_MODE_REPLACE?
(e.hide(),b.insertAfter(e)):e.append(b);a.container=b;a.ui.contentsElement=a.ui.space("contents");h&&a.ui.space("top").unselectable();g&&a.ui.space("bottom").unselectable();e=a.config.width;k=a.config.height;e&&b.setStyle("width",CKEDITOR.tools.cssLength(e));k&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(k));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,d){return a(b,d,null,CKEDITOR.ELEMENT_MODE_REPLACE)};
CKEDITOR.appendTo=function(b,d,e){return a(b,d,e,CKEDITOR.ELEMENT_MODE_APPENDTO)};CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var e=null,k=a[b];if(k.name||k.id){if("string"==typeof arguments[0]){if(!(new RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)")).test(k.className))continue}else if("function"==typeof arguments[0]&&(e={},!1===arguments[0](k,e)))continue;this.replace(k,e)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes=
{}))[a]=b};CKEDITOR.editor.prototype.setMode=function(a,b){var e=this,k=this._.modes;if(a!=e.mode&&k&&k[a]){e.fire("beforeSetMode",a);if(e.mode){var h=e.checkDirty(),k=e._.previousModeData,g,l=0;e.fire("beforeModeUnload");e.editable(0);e._.previousMode=e.mode;e._.previousModeData=g=e.getData(1);"source"==e.mode&&k==g&&(e.fire("lockSnapshot",{forceUpdate:!0}),l=1);e.ui.space("contents").setHtml("");e.mode=""}else e._.previousModeData=e.getData(1);this._.modes[a](function(){e.mode=a;void 0!==h&&!h&&
e.resetDirty();l?e.fire("unlockSnapshot"):"wysiwyg"==a&&e.fire("saveSnapshot");setTimeout(function(){e.fire("mode");b&&b.call(e)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,e,k){var h=this.container,g=this.ui.space("contents"),l=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement;k=k?this.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):h;k.setSize("width",a,!0);l&&(l.style.width="1%");var f=(k.$.offsetHeight||0)-(g.$.clientHeight||
0),h=Math.max(b-(e?0:f),0);b=e?b+f:b;g.setStyle("height",h+"px");l&&(l.style.width="100%");this.fire("resize",{outerHeight:b,contentsHeight:h,outerWidth:a||k.getSize("width")})};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})}(),CKEDITOR.config.startupMode="wysiwyg",function(){function a(a){var b=a.editor,f=a.data.path,d=f.blockLimit,g=a.data.selection,
h=g.getRanges()[0],l;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(g=e(g,f))g.appendBogus(),l=CKEDITOR.env.ie;k(b,f.block,d)&&h.collapsed&&!h.getCommonAncestor().isReadOnly()&&(f=h.clone(),f.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS),d=new CKEDITOR.dom.walker(f),d.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()},!d.checkForward()||f.checkStartOfBlock()&&f.checkEndOfBlock())&&(b=h.fixBlock(!0,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p"),CKEDITOR.env.needsBrFiller||
(b=b.getFirst(c))&&b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/)&&b.remove(),l=1,a.cancel());l&&h.select()}function e(a,b){if(a.isFake)return 0;var f=b.block||b.blockLimit,d=f&&f.getLast(c);if(!(!f||!f.isBlockBoundary()||d&&d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()||f.is("pre")||f.getBogus()))return f}function b(a){var b=a.data.getTarget();b.is("input")&&(b=b.getAttribute("type"),"submit"!=b&&"reset"!=b||a.data.preventDefault())}function c(a){return f(a)&&
n(a)}function d(a,b){return function(c){var f=c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget;(f=f&&f.nodeType==CKEDITOR.NODE_ELEMENT?new CKEDITOR.dom.element(f):null)&&(b.equals(f)||b.contains(f))||a.call(this,c)}}function m(a){function b(a){return function(b,d){d&&b.type==CKEDITOR.NODE_ELEMENT&&b.is(g)&&(f=b);if(!(d||!c(b)||a&&v(b)))return!1}}var f,d=a.getRanges()[0];a=a.root;var g={table:1,ul:1,ol:1,dl:1};if(d.startPath().contains(g)){var e=d.clone();e.collapse(1);e.setStartAt(a,
CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(e);a.guard=b();a.checkBackward();if(f)return e=d.clone(),e.collapse(),e.setEndAt(f,CKEDITOR.POSITION_AFTER_END),a=new CKEDITOR.dom.walker(e),a.guard=b(!0),f=!1,a.checkForward(),f}return null}function k(a,b,c){return!1!==a.config.autoParagraph&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&(a.editable().equals(c)&&!b||b&&"true"==b.getAttribute("contenteditable"))}function h(a){return a.activeEnterMode!=CKEDITOR.ENTER_BR&&!1!==a.config.autoParagraph?
a.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p":!1}function g(a){var b=a.editor;b.getSelection().scrollIntoView();setTimeout(function(){b.fire("saveSnapshot")},0)}function l(a,b,c){var f=a.getCommonAncestor(b);for(b=a=c?b:a;(a=a.getParent())&&!f.equals(a)&&1==a.getChildCount();)b=a;b.remove()}var f,n,u,v,x,p,t,w,q,A;CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b);this.editor=a;this.status="unloaded";this.hasFocus=!1;this.setup()},proto:{focus:function(){var a;
if(CKEDITOR.env.webkit&&!this.hasFocus&&(a=this.editor._.previousActive||this.getDocument().getActive(),this.contains(a))){a.focus();return}CKEDITOR.env.edge&&14<CKEDITOR.env.version&&!this.hasFocus&&this.getDocument().equals(CKEDITOR.document)&&(this.editor._.previousScrollTop=this.$.scrollTop);try{if(!CKEDITOR.env.ie||CKEDITOR.env.edge&&14<CKEDITOR.env.version||!this.getDocument().equals(CKEDITOR.document))if(CKEDITOR.env.chrome){var b=this.$.scrollTop;this.$.focus();this.$.scrollTop=b}else this.$.focus();
else this.$.setActive()}catch(c){if(!CKEDITOR.env.ie)throw c;}CKEDITOR.env.safari&&!this.isInline()&&(a=CKEDITOR.document.getActive(),a.equals(this.getWindow().getFrame())||this.getWindow().focus())},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);CKEDITOR.env.ie&&/^focus|blur$/.exec(a)&&(a="focus"==a?"focusin":"focusout",b=d(b,this),c[0]=a,c[1]=b);return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&(this._.listeners=[]);var b=Array.prototype.slice.call(arguments,
1),b=a.on.apply(a,b);this._.listeners.push(b);return b},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)a.hasOwnProperty(c)&&(b=a[c],null!==b?this.setAttribute(c,b):this.removeAttribute(c))},attachClass:function(a){var b=this.getCustomData("classes");this.hasClass(a)||(!b&&(b=[]),b.push(a),this.setCustomData("classes",b),this.addClass(a))},changeAttr:function(a,b){var c=this.getAttribute(a);
b!==c&&(!this._.attrChanges&&(this._.attrChanges={}),a in this._.attrChanges||(this._.attrChanges[a]=c),this.setAttribute(a,b))},insertText:function(a){this.editor.focus();this.insertHtml(this.transformPlainTextToHtml(a),"text")},transformPlainTextToHtml:function(a){var b=this.editor.getSelection().getStartElement().hasAscendant("pre",!0)?CKEDITOR.ENTER_BR:this.editor.activeEnterMode;return CKEDITOR.tools.transformPlainTextToHtml(a,b)},insertHtml:function(a,b,c){var f=this.editor;f.focus();f.fire("saveSnapshot");
c||(c=f.getSelection().getRanges()[0]);p(this,b||"html",a,c);c.select();g(this);this.editor.fire("afterInsertHtml",{})},insertHtmlIntoRange:function(a,b,c){p(this,c||"html",a,b);this.editor.fire("afterInsertHtml",{intoRange:b})},insertElement:function(a,b){var f=this.editor;f.focus();f.fire("saveSnapshot");var d=f.activeEnterMode,f=f.getSelection(),e=a.getName(),e=CKEDITOR.dtd.$block[e];b||(b=f.getRanges()[0]);this.insertElementIntoRange(a,b)&&(b.moveToPosition(a,CKEDITOR.POSITION_AFTER_END),e&&((e=
a.getNext(function(a){return c(a)&&!v(a)}))&&e.type==CKEDITOR.NODE_ELEMENT&&e.is(CKEDITOR.dtd.$block)?e.getDtd()["#"]?b.moveToElementEditStart(e):b.moveToElementEditEnd(a):e||d==CKEDITOR.ENTER_BR||(e=b.fixBlock(!0,d==CKEDITOR.ENTER_DIV?"div":"p"),b.moveToElementEditStart(e))));f.selectRanges([b]);g(this)},insertElementIntoSelection:function(a){this.insertElement(a)},insertElementIntoRange:function(a,b){var c=this.editor,f=c.config.enterMode,d=a.getName(),g=CKEDITOR.dtd.$block[d];if(b.checkReadOnly())return!1;
b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&(b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})?t(b):b.startContainer.is(CKEDITOR.dtd.$list)&&w(b));var e,h;if(g)for(;(e=b.getCommonAncestor(0,1))&&(h=CKEDITOR.dtd[e.getName()])&&(!h||!h[d]);)e.getName()in CKEDITOR.dtd.span?b.splitElement(e):b.checkStartOfBlock()&&b.checkEndOfBlock()?(b.setStartBefore(e),b.collapse(!0),e.remove()):b.splitBlock(f==CKEDITOR.ENTER_DIV?"div":"p",c.editable());b.insertNode(a);return!0},setData:function(a,
b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();"unloaded"==this.status&&(this.status="ready");this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable");this.status="detached";var a=this.editor;this._.detach();delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},
fixInitialSelection:function(){function a(){var b=c.getDocument().$,f=b.getSelection(),d;a:if(f.anchorNode&&f.anchorNode==c.$)d=!0;else{if(CKEDITOR.env.webkit&&(d=c.getDocument().getActive())&&d.equals(c)&&!f.anchorNode){d=!0;break a}d=void 0}d&&(d=new CKEDITOR.dom.range(c),d.moveToElementEditStart(c),b=b.createRange(),b.setStart(d.startContainer.$,d.startOffset),b.collapse(!0),f.removeAllRanges(),f.addRange(b))}function b(){var a=c.getDocument().$,f=a.selection,d=c.getDocument().getActive();"None"==
f.type&&d.equals(c)&&(f=new CKEDITOR.dom.range(c),a=a.body.createTextRange(),f.moveToElementEditStart(c),f=f.startContainer,f.type!=CKEDITOR.NODE_ELEMENT&&(f=f.getParent()),a.moveToElementText(f.$),a.collapse(!0),a.select())}var c=this;if(CKEDITOR.env.ie&&(9>CKEDITOR.env.version||CKEDITOR.env.quirks))this.hasFocus&&(this.focus(),b());else if(this.hasFocus)this.focus(),a();else this.once("focus",function(){a()},null,null,-999)},getHtmlFromRange:function(a){if(a.collapsed)return new CKEDITOR.dom.documentFragment(a.document);
a={doc:this.getDocument(),range:a.clone()};q.eol.detect(a,this);q.bogus.exclude(a);q.cell.shrink(a);a.fragment=a.range.cloneContents();q.tree.rebuild(a,this);q.eol.fix(a,this);return new CKEDITOR.dom.documentFragment(a.fragment.$)},extractHtmlFromRange:function(a,b){var c=A,f={range:a,doc:a.document},d=this.getHtmlFromRange(a);if(a.collapsed)return a.optimize(),d;a.enlarge(CKEDITOR.ENLARGE_INLINE,1);c.table.detectPurge(f);f.bookmark=a.createBookmark();delete f.range;var g=this.editor.createRange();
g.moveToPosition(f.bookmark.startNode,CKEDITOR.POSITION_BEFORE_START);f.targetBookmark=g.createBookmark();c.list.detectMerge(f,this);c.table.detectRanges(f,this);c.block.detectMerge(f,this);f.tableContentsRanges?(c.table.deleteRanges(f),a.moveToBookmark(f.bookmark),f.range=a):(a.moveToBookmark(f.bookmark),f.range=a,a.extractContents(c.detectExtractMerge(f)));a.moveToBookmark(f.targetBookmark);a.optimize();c.fixUneditableRangePosition(a);c.list.merge(f,this);c.table.purge(f,this);c.block.merge(f,this);
if(b){c=a.startPath();if(f=a.checkStartOfBlock()&&a.checkEndOfBlock()&&c.block&&!a.root.equals(c.block)){a:{var f=c.block.getElementsByTag("span"),g=0,e;if(f)for(;e=f.getItem(g++);)if(!n(e)){f=!0;break a}f=!1}f=!f}f&&(a.moveToPosition(c.block,CKEDITOR.POSITION_BEFORE_START),c.block.remove())}else c.autoParagraph(this.editor,a),u(a.startContainer)&&a.startContainer.appendBogus();a.startContainer.mergeSiblings();return d},setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=
this.getData();this.is("textarea")||!1!==a.config.ignoreEmptyParagraph&&(b=b.replace(x,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,"beforeFocus",function(){var b=a.getSelection();(b=b&&b.getNative())&&"Control"==b.type||this.focus()},
this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode,a.data.range)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?this.attachClass("cke_editable_inline"):a.elementMode!=CKEDITOR.ELEMENT_MODE_REPLACE&&a.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||
this.attachClass("cke_editable_themed");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",function(){this.hasFocus=!1},null,null,-1);this.on("focus",function(){this.hasFocus=!0},null,null,-1);if(CKEDITOR.env.webkit)this.on("scroll",function(){a._.previousScrollTop=a.editable().$.scrollTop},null,null,-1);if(CKEDITOR.env.edge&&14<CKEDITOR.env.version){var d=function(){var b=a.editable();
null!=a._.previousScrollTop&&b.getDocument().equals(CKEDITOR.document)&&(b.$.scrollTop=a._.previousScrollTop,a._.previousScrollTop=null,this.removeListener("scroll",d))};this.on("scroll",d)}a.focusManager.add(this);this.equals(CKEDITOR.document.getActive())&&(this.hasFocus=!0,a.once("contentDom",function(){a.focusManager.focus(this)},this));this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=this.getDocument();a.window=this.getWindow();var g=a.document;this.changeAttr("spellcheck",
!a.config.disableNativeSpellChecker);var e=a.config.contentsLangDirection;this.getDirection(1)!=e&&this.changeAttr("dir",e);var h=CKEDITOR.getCss();if(h){var e=g.getHead(),k=e.getCustomData("stylesheet");k?h!=k.getText()&&(CKEDITOR.env.ie&&9>CKEDITOR.env.version?k.$.styleSheet.cssText=h:k.setText(h)):(h=g.appendStyleText(h),h=new CKEDITOR.dom.element(h.ownerNode||h.owningElement),e.setCustomData("stylesheet",h),h.data("cke-temp",1))}e=g.getCustomData("stylesheet_ref")||0;g.setCustomData("stylesheet_ref",
e+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){a=a.data;var b=(new CKEDITOR.dom.elementPath(a.getTarget(),this)).contains("a");b&&2!=a.$.button&&b.isReadOnly()&&a.preventDefault()});var n={8:1,46:1};this.attachListener(a,"key",function(b){if(a.readOnly)return!0;var c=b.data.domEvent.getKey(),d;b=a.getSelection();if(0!==b.getRanges().length){if(c in n){var g,e=b.getRanges()[0],h=e.startPath(),l,k,u,c=8==c;CKEDITOR.env.ie&&
11>CKEDITOR.env.version&&(g=b.getSelectedElement())||(g=m(b))?(a.fire("saveSnapshot"),e.moveToPosition(g,CKEDITOR.POSITION_BEFORE_START),g.remove(),e.select(),a.fire("saveSnapshot"),d=1):e.collapsed&&((l=h.block)&&(u=l[c?"getPrevious":"getNext"](f))&&u.type==CKEDITOR.NODE_ELEMENT&&u.is("table")&&e[c?"checkStartOfBlock":"checkEndOfBlock"]()?(a.fire("saveSnapshot"),e[c?"checkEndOfBlock":"checkStartOfBlock"]()&&l.remove(),e["moveToElementEdit"+(c?"End":"Start")](u),e.select(),a.fire("saveSnapshot"),
d=1):h.blockLimit&&h.blockLimit.is("td")&&(k=h.blockLimit.getAscendant("table"))&&e.checkBoundaryOfElement(k,c?CKEDITOR.START:CKEDITOR.END)&&(u=k[c?"getPrevious":"getNext"](f))?(a.fire("saveSnapshot"),e["moveToElementEdit"+(c?"End":"Start")](u),e.checkStartOfBlock()&&e.checkEndOfBlock()?u.remove():e.select(),a.fire("saveSnapshot"),d=1):(k=h.contains(["td","th","caption"]))&&e.checkBoundaryOfElement(k,c?CKEDITOR.START:CKEDITOR.END)&&(d=1))}return!d}});a.blockless&&CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller&&
this.attachListener(this,"keyup",function(b){b.data.getKeystroke()in n&&!this.getFirst(c)&&(this.appendBogus(),b=a.createRange(),b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START),b.select())});this.attachListener(this,"dblclick",function(b){if(a.readOnly)return!1;b={element:b.data.getTarget()};a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);CKEDITOR.env.ie&&!CKEDITOR.env.edge||this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget();c.is("img","hr",
"input","textarea","select")&&!c.isReadOnly()&&(a.getSelection().selectElement(c),c.is("input","textarea","select")&&b.data.preventDefault())});CKEDITOR.env.edge&&this.attachListener(this,"mouseup",function(b){(b=b.data.getTarget())&&b.is("img")&&!b.isReadOnly()&&a.getSelection().selectElement(b)});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(2==b.data.$.button&&(b=b.data.getTarget(),!b.getAscendant("table")&&!b.getOuterHtml().replace(x,""))){var c=a.createRange();c.moveToElementEditStart(b);
c.select(!0)}});CKEDITOR.env.webkit&&(this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()}),this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()}));CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){if(a.readOnly)return!0;var c=b.data.domEvent.getKey();if(c in n&&(b=a.getSelection(),0!==b.getRanges().length)){var c=8==c,f=b.getRanges()[0];b=f.startPath();if(f.collapsed)a:{var d=
b.block;if(d&&f[c?"checkStartOfBlock":"checkEndOfBlock"]()&&f.moveToClosestEditablePosition(d,!c)&&f.collapsed){if(f.startContainer.type==CKEDITOR.NODE_ELEMENT){var g=f.startContainer.getChild(f.startOffset-(c?1:0));if(g&&g.type==CKEDITOR.NODE_ELEMENT&&g.is("hr")){a.fire("saveSnapshot");g.remove();b=!0;break a}}f=f.startPath().block;if(!f||f&&f.contains(d))b=void 0;else{a.fire("saveSnapshot");var e;(e=(c?f:d).getBogus())&&e.remove();e=a.getSelection();g=e.createBookmarks();(c?d:f).moveChildren(c?
f:d,!1);b.lastElement.mergeSiblings();l(d,f,!c);e.selectBookmarks(g);b=!0}}else b=!1}else c=f,e=b.block,f=c.endPath().block,e&&f&&!e.equals(f)?(a.fire("saveSnapshot"),(d=e.getBogus())&&d.remove(),c.enlarge(CKEDITOR.ENLARGE_INLINE),c.deleteContents(),f.getParent()&&(f.moveChildren(e,!1),b.lastElement.mergeSiblings(),l(e,f,!0)),c=a.getSelection().getRanges()[0],c.collapse(1),c.optimize(),""===c.startContainer.getHtml()&&c.startContainer.appendBogus(),c.select(),b=!0):b=!1;if(!b)return;a.getSelection().scrollIntoView();
a.fire("saveSnapshot");return!1}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");--c?a.setCustomData("stylesheet_ref",c):(a.removeCustomData("stylesheet_ref"),b.removeCustomData("stylesheet").remove())}}this.editor.fire("contentDomUnload");
delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;arguments.length&&(b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null));return b};CKEDITOR.on("instanceLoaded",function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))&&("false"!=a.getAttribute("contentEditable")&&a.data("cke-editable",a.hasAttribute("contenteditable")?
"true":"1"),a.setAttribute("contentEditable",!1))});c.on("selectionChange",function(b){if(!c.readOnly){var f=c.getSelection();f&&!f.isLocked&&(f=c.checkDirty(),c.fire("lockSnapshot"),a(b),c.fire("unlockSnapshot"),!f&&c.resetDirty())}})});CKEDITOR.on("instanceCreated",function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-multiline","true");a.changeAttr("aria-label",c);c&&a.changeAttr("title",c);var f=
b.fire("ariaEditorHelpLabel",{}).label;if(f&&(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents"))){var d=CKEDITOR.tools.getNextId(),f=CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"'+d+'" class\x3d"cke_voice_label"\x3e'+f+"\x3c/span\x3e");c.append(f);a.changeAttr("aria-describedby",d)}}})});CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");f=CKEDITOR.dom.walker.whitespaces(!0);n=CKEDITOR.dom.walker.bookmark(!1,
!0);u=CKEDITOR.dom.walker.empty();v=CKEDITOR.dom.walker.bogus();x=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;p=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,f){var d,g,e,h,l=[],k=f.range.startContainer;d=f.range.startPath();for(var k=m[k.getName()],n=0,u=c.getChildren(),q=u.count(),t=-1,E=-1,B=0,C=d.contains(m.$list);n<q;++n)d=u.getItem(n),a(d)?(e=d.getName(),C&&e in CKEDITOR.dtd.$list?
l=l.concat(b(d,f)):(h=!!k[e],"br"!=e||!d.data("cke-eol")||n&&n!=q-1||(B=(g=n?l[n-1].node:u.getItem(n+1))&&(!a(g)||!g.is("br")),g=g&&a(g)&&m.$block[g.getName()]),-1!=t||h||(t=n),h||(E=n),l.push({isElement:1,isLineBreak:B,isBlock:d.isBlockBoundary(),hasBlockSibling:g,node:d,name:e,allowed:h}),g=B=0)):l.push({isElement:0,node:d,allowed:1});-1<t&&(l[t].firstNotAllowed=1);-1<E&&(l[E].lastNotAllowed=1);return l}function f(b,c){var d=[],g=b.getChildren(),e=g.count(),h,l=0,k=m[c],n=!b.is(m.$inline)||b.is("br");
for(n&&d.push(" ");l<e;l++)h=g.getItem(l),a(h)&&!h.is(k)?d=d.concat(f(h,c)):d.push(h);n&&d.push(" ");return d}function d(b){return a(b.startContainer)&&b.startContainer.getChild(b.startOffset-1)}function g(b){return b&&a(b)&&(b.is(m.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function e(b,c,f,d){var g=b.clone(),h,l;g.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);(h=(new CKEDITOR.dom.walker(g)).next())&&a(h)&&n[h.getName()]&&(l=h.getPrevious())&&a(l)&&!l.getParent().equals(b.startContainer)&&f.contains(l)&&
d.contains(h)&&h.isIdentical(l)&&(h.moveChildren(l),h.remove(),e(b,c,f,d))}function l(b,c){function f(b,c){if(c.isBlock&&c.isElement&&!c.node.is("br")&&a(b)&&b.is("br"))return b.remove(),1}var d=c.endContainer.getChild(c.endOffset),g=c.endContainer.getChild(c.endOffset-1);d&&f(d,b[b.length-1]);g&&f(g,b[0])&&(c.setEnd(c.endContainer,c.endOffset-1),c.collapse())}var m=CKEDITOR.dtd,n={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},u={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,
h6:1},q=CKEDITOR.tools.extend({},m.$inline);delete q.br;return function(n,D,t,F){var w=n.editor,A=!1;"unfiltered_html"==D&&(D="html",A=!0);if(!F.checkReadOnly()){var v=(new CKEDITOR.dom.elementPath(F.startContainer,F.root)).blockLimit||F.root;n={type:D,dontFilter:A,editable:n,editor:w,range:F,blockLimit:v,mergeCandidates:[],zombies:[]};D=n.range;F=n.mergeCandidates;var x,p;"text"==n.type&&D.shrink(CKEDITOR.SHRINK_ELEMENT,!0,!1)&&(x=CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",
D.document),D.insertNode(x),D.setStartAfter(x));A=new CKEDITOR.dom.elementPath(D.startContainer);n.endPath=v=new CKEDITOR.dom.elementPath(D.endContainer);if(!D.collapsed){var w=v.block||v.blockLimit,da=D.getCommonAncestor();w&&!w.equals(da)&&!w.contains(da)&&D.checkEndOfBlock()&&n.zombies.push(w);D.deleteContents()}for(;(p=d(D))&&a(p)&&p.isBlockBoundary()&&A.contains(p);)D.moveToPosition(p,CKEDITOR.POSITION_BEFORE_END);e(D,n.blockLimit,A,v);x&&(D.setEndBefore(x),D.collapse(),x.remove());x=D.startPath();
if(w=x.contains(g,!1,1))D.splitElement(w),n.inlineStylesRoot=w,n.inlineStylesPeak=x.lastElement;x=D.createBookmark();(w=x.startNode.getPrevious(c))&&a(w)&&g(w)&&F.push(w);(w=x.startNode.getNext(c))&&a(w)&&g(w)&&F.push(w);for(w=x.startNode;(w=w.getParent())&&g(w);)F.push(w);D.moveToBookmark(x);if(x=t){x=n.range;if("text"==n.type&&n.inlineStylesRoot){p=n.inlineStylesPeak;D=p.getDocument().createText("{cke-peak}");for(F=n.inlineStylesRoot.getParent();!p.equals(F);)D=D.appendTo(p.clone()),p=p.getParent();
t=D.getOuterHtml().split("{cke-peak}").join(t)}p=n.blockLimit.getName();if(/^\s+|\s+$/.test(t)&&"span"in CKEDITOR.dtd[p]){var O='\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e';t=O+t+O}t=n.editor.dataProcessor.toHtml(t,{context:null,fixForBody:!1,protectedWhitespaces:!!O,dontFilter:n.dontFilter,filter:n.editor.activeFilter,enterMode:n.editor.activeEnterMode});p=x.document.createElement("body");p.setHtml(t);O&&(p.getFirst().remove(),p.getLast().remove());if((O=x.startPath().block)&&(1!=
O.getChildCount()||!O.getBogus()))a:{var P;if(1==p.getChildCount()&&a(P=p.getFirst())&&P.is(u)&&!P.hasAttribute("contenteditable")){O=P.getElementsByTag("*");x=0;for(F=O.count();x<F;x++)if(D=O.getItem(x),!D.is(q))break a;P.moveChildren(P.getParent(1));P.remove()}}n.dataWrapper=p;x=t}if(x){P=n.range;x=P.document;var N;p=n.blockLimit;F=0;var U,O=[],S,J;t=w=0;var Y,aa;D=P.startContainer;var A=n.endPath.elements[0],ba,v=A.getPosition(D),da=!!A.getCommonAncestor(D)&&v!=CKEDITOR.POSITION_IDENTICAL&&!(v&
CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);D=b(n.dataWrapper,n);for(l(D,P);F<D.length;F++){v=D[F];if(N=v.isLineBreak){N=P;Y=p;var Z=void 0,ca=void 0;v.hasBlockSibling?N=1:(Z=N.startContainer.getAscendant(m.$block,1))&&Z.is({div:1,p:1})?(ca=Z.getPosition(Y),ca==CKEDITOR.POSITION_IDENTICAL||ca==CKEDITOR.POSITION_CONTAINS?N=0:(Y=N.splitElement(Z),N.moveToPosition(Y,CKEDITOR.POSITION_AFTER_START),N=1)):N=0}if(N)t=0<F;else{N=P.startPath();!v.isBlock&&k(n.editor,N.block,N.blockLimit)&&(J=
h(n.editor))&&(J=x.createElement(J),J.appendBogus(),P.insertNode(J),CKEDITOR.env.needsBrFiller&&(U=J.getBogus())&&U.remove(),P.moveToPosition(J,CKEDITOR.POSITION_BEFORE_END));if((N=P.startPath().block)&&!N.equals(S)){if(U=N.getBogus())U.remove(),O.push(N);S=N}v.firstNotAllowed&&(w=1);if(w&&v.isElement){N=P.startContainer;for(Y=null;N&&!m[N.getName()][v.name];){if(N.equals(p)){N=null;break}Y=N;N=N.getParent()}if(N)Y&&(aa=P.splitElement(Y),n.zombies.push(aa),n.zombies.push(Y));else{Y=p.getName();ba=
!F;N=F==D.length-1;Y=f(v.node,Y);for(var Z=[],ca=Y.length,ea=0,ha=void 0,ia=0,fa=-1;ea<ca;ea++)ha=Y[ea]," "==ha?(ia||ba&&!ea||(Z.push(new CKEDITOR.dom.text(" ")),fa=Z.length),ia=1):(Z.push(ha),ia=0);N&&fa==Z.length&&Z.pop();ba=Z}}if(ba){for(;N=ba.pop();)P.insertNode(N);ba=0}else P.insertNode(v.node);v.lastNotAllowed&&F<D.length-1&&((aa=da?A:aa)&&P.setEndAt(aa,CKEDITOR.POSITION_AFTER_START),w=0);P.collapse()}}1!=D.length?U=!1:(U=D[0],U=U.isElement&&"false"==U.node.getAttribute("contenteditable"));
U&&(t=!0,N=D[0].node,P.setStartAt(N,CKEDITOR.POSITION_BEFORE_START),P.setEndAt(N,CKEDITOR.POSITION_AFTER_END));n.dontMoveCaret=t;n.bogusNeededBlocks=O}U=n.range;var ga;aa=n.bogusNeededBlocks;for(ba=U.createBookmark();S=n.zombies.pop();)S.getParent()&&(J=U.clone(),J.moveToElementEditStart(S),J.removeEmptyBlocksAtEnd());if(aa)for(;S=aa.pop();)CKEDITOR.env.needsBrFiller?S.appendBogus():S.append(U.document.createText(" "));for(;S=n.mergeCandidates.pop();)S.mergeSiblings();U.moveToBookmark(ba);if(!n.dontMoveCaret){for(S=
d(U);S&&a(S)&&!S.is(m.$empty);){if(S.isBlockBoundary())U.moveToPosition(S,CKEDITOR.POSITION_BEFORE_END);else{if(g(S)&&S.getHtml().match(/(\s|&nbsp;)$/g)){ga=null;break}ga=U.clone();ga.moveToPosition(S,CKEDITOR.POSITION_BEFORE_END)}S=S.getLast(c)}ga&&U.moveToRange(ga)}}}}();t=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return!1;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};
return b}function b(a,c,f){c=a.getDocument().createElement(c);a.append(c,f);return c}function c(a){var b=a.count(),f;for(b;0<b--;)f=a.getItem(b),CKEDITOR.tools.trim(f.getHtml())||(f.appendBogus(),CKEDITOR.env.ie&&9>CKEDITOR.env.version&&f.getChildCount()&&f.getFirst().remove())}return function(f){var d=f.startContainer,g=d.getAscendant("table",1),e=!1;c(g.getElementsByTag("td"));c(g.getElementsByTag("th"));g=f.clone();g.setStart(d,0);g=a(g).lastBackward();g||(g=f.clone(),g.setEndAt(d,CKEDITOR.POSITION_BEFORE_END),
g=a(g).lastForward(),e=!0);g||(g=d);g.is("table")?(f.setStartAt(g,CKEDITOR.POSITION_BEFORE_START),f.collapse(!0),g.remove()):(g.is({tbody:1,thead:1,tfoot:1})&&(g=b(g,"tr",e)),g.is("tr")&&(g=b(g,g.getParent().is("thead")?"th":"td",e)),(d=g.getBogus())&&d.remove(),f.moveToPosition(g,e?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END))}}();w=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return!1;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$list)||
a.is(CKEDITOR.dtd.$listItem)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$listItem)};return b}return function(b){var c=b.startContainer,f=!1,d;d=b.clone();d.setStart(c,0);d=a(d).lastBackward();d||(d=b.clone(),d.setEndAt(c,CKEDITOR.POSITION_BEFORE_END),d=a(d).lastForward(),f=!0);d||(d=c);d.is(CKEDITOR.dtd.$list)?(b.setStartAt(d,CKEDITOR.POSITION_BEFORE_START),b.collapse(!0),d.remove()):((c=d.getBogus())&&c.remove(),b.moveToPosition(d,f?CKEDITOR.POSITION_AFTER_START:
CKEDITOR.POSITION_BEFORE_END),b.select())}}();q={eol:{detect:function(a,b){var c=a.range,f=c.clone(),d=c.clone(),g=new CKEDITOR.dom.elementPath(c.startContainer,b),e=new CKEDITOR.dom.elementPath(c.endContainer,b);f.collapse(1);d.collapse();g.block&&f.checkBoundaryOfElement(g.block,CKEDITOR.END)&&(c.setStartAfter(g.block),a.prependEolBr=1);e.block&&d.checkBoundaryOfElement(e.block,CKEDITOR.START)&&(c.setEndBefore(e.block),a.appendEolBr=1)},fix:function(a,b){var c=b.getDocument(),f;a.appendEolBr&&(f=
this.createEolBr(c),a.fragment.append(f));!a.prependEolBr||f&&!f.getPrevious()||a.fragment.append(this.createEolBr(c),1)},createEolBr:function(a){return a.createElement("br",{attributes:{"data-cke-eol":1}})}},bogus:{exclude:function(a){var b=a.range.getBoundaryNodes(),c=b.startNode,b=b.endNode;!b||!v(b)||c&&c.equals(b)||a.range.setEndBefore(b)}},tree:{rebuild:function(a,b){var c=a.range,f=c.getCommonAncestor(),d=new CKEDITOR.dom.elementPath(f,b),g=new CKEDITOR.dom.elementPath(c.startContainer,b),
c=new CKEDITOR.dom.elementPath(c.endContainer,b),e;f.type==CKEDITOR.NODE_TEXT&&(f=f.getParent());if(d.blockLimit.is({tr:1,table:1})){var h=d.contains("table").getParent();e=function(a){return!a.equals(h)}}else if(d.block&&d.block.is(CKEDITOR.dtd.$listItem)&&(g=g.contains(CKEDITOR.dtd.$list),c=c.contains(CKEDITOR.dtd.$list),!g.equals(c))){var l=d.contains(CKEDITOR.dtd.$list).getParent();e=function(a){return!a.equals(l)}}e||(e=function(a){return!a.equals(d.block)&&!a.equals(d.blockLimit)});this.rebuildFragment(a,
b,f,e)},rebuildFragment:function(a,b,c,f){for(var d;c&&!c.equals(b)&&f(c);)d=c.clone(0,1),a.fragment.appendTo(d),a.fragment=d,c=c.getParent()}},cell:{shrink:function(a){a=a.range;var b=a.startContainer,c=a.endContainer,f=a.startOffset,d=a.endOffset;b.type==CKEDITOR.NODE_ELEMENT&&b.equals(c)&&b.is("tr")&&++f==d&&a.shrink(CKEDITOR.SHRINK_TEXT)}}};A=function(){function a(b,c){var f=b.getParent();if(f.is(CKEDITOR.dtd.$inline))b[c?"insertBefore":"insertAfter"](f)}function b(c,f,d){a(f);a(d,1);for(var g;g=
d.getNext();)g.insertAfter(f),f=g;u(c)&&c.remove()}function c(a,b){var f=new CKEDITOR.dom.range(a);f.setStartAfter(b.startNode);f.setEndBefore(b.endNode);return f}return{list:{detectMerge:function(a,b){var f=c(b,a.bookmark),d=f.startPath(),g=f.endPath(),e=d.contains(CKEDITOR.dtd.$list),h=g.contains(CKEDITOR.dtd.$list);a.mergeList=e&&h&&e.getParent().equals(h.getParent())&&!e.equals(h);a.mergeListItems=d.block&&g.block&&d.block.is(CKEDITOR.dtd.$listItem)&&g.block.is(CKEDITOR.dtd.$listItem);if(a.mergeList||
a.mergeListItems)f=f.clone(),f.setStartBefore(a.bookmark.startNode),f.setEndAfter(a.bookmark.endNode),a.mergeListBookmark=f.createBookmark()},merge:function(a,c){if(a.mergeListBookmark){var f=a.mergeListBookmark.startNode,d=a.mergeListBookmark.endNode,g=new CKEDITOR.dom.elementPath(f,c),e=new CKEDITOR.dom.elementPath(d,c);if(a.mergeList){var h=g.contains(CKEDITOR.dtd.$list),l=e.contains(CKEDITOR.dtd.$list);h.equals(l)||(l.moveChildren(h),l.remove())}a.mergeListItems&&(g=g.contains(CKEDITOR.dtd.$listItem),
e=e.contains(CKEDITOR.dtd.$listItem),g.equals(e)||b(e,f,d));f.remove();d.remove()}}},block:{detectMerge:function(a,b){if(!a.tableContentsRanges&&!a.mergeListBookmark){var c=new CKEDITOR.dom.range(b);c.setStartBefore(a.bookmark.startNode);c.setEndAfter(a.bookmark.endNode);a.mergeBlockBookmark=c.createBookmark()}},merge:function(a,c){if(a.mergeBlockBookmark&&!a.purgeTableBookmark){var f=a.mergeBlockBookmark.startNode,d=a.mergeBlockBookmark.endNode,g=new CKEDITOR.dom.elementPath(f,c),e=new CKEDITOR.dom.elementPath(d,
c),g=g.block,e=e.block;g&&e&&!g.equals(e)&&b(e,f,d);f.remove();d.remove()}}},table:function(){function a(c){var d=[],g,e=new CKEDITOR.dom.walker(c),h=c.startPath().contains(f),l=c.endPath().contains(f),k={};e.guard=function(a,e){if(a.type==CKEDITOR.NODE_ELEMENT){var n="visited_"+(e?"out":"in");if(a.getCustomData(n))return;CKEDITOR.dom.element.setMarker(k,a,n,1)}if(e&&h&&a.equals(h))g=c.clone(),g.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),d.push(g);else if(!e&&l&&a.equals(l))g=c.clone(),g.setStartAt(l,
CKEDITOR.POSITION_AFTER_START),d.push(g);else{if(n=!e)n=a.type==CKEDITOR.NODE_ELEMENT&&a.is(f)&&(!h||b(a,h))&&(!l||b(a,l));if(!n&&(n=e))if(a.is(f))var n=h&&h.getAscendant("table",!0),m=l&&l.getAscendant("table",!0),u=a.getAscendant("table",!0),n=n&&n.contains(u)||m&&m.contains(u);else n=void 0;n&&(g=c.clone(),g.selectNodeContents(a),d.push(g))}};e.lastForward();CKEDITOR.dom.element.clearAllMarkers(k);return d}function b(a,c){var f=CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED,d=a.getPosition(c);
return d===CKEDITOR.POSITION_IDENTICAL?!1:0===(d&f)}var f={td:1,th:1,caption:1};return{detectPurge:function(a){var b=a.range,c=b.clone();c.enlarge(CKEDITOR.ENLARGE_ELEMENT);var c=new CKEDITOR.dom.walker(c),d=0;c.evaluator=function(a){a.type==CKEDITOR.NODE_ELEMENT&&a.is(f)&&++d};c.checkForward();if(1<d){var c=b.startPath().contains("table"),g=b.endPath().contains("table");c&&g&&b.checkBoundaryOfElement(c,CKEDITOR.START)&&b.checkBoundaryOfElement(g,CKEDITOR.END)&&(b=a.range.clone(),b.setStartBefore(c),
b.setEndAfter(g),a.purgeTableBookmark=b.createBookmark())}},detectRanges:function(d,g){var e=c(g,d.bookmark),h=e.clone(),l,k,n=e.getCommonAncestor();n.is(CKEDITOR.dtd.$tableContent)&&!n.is(f)&&(n=n.getAscendant("table",!0));k=n;n=new CKEDITOR.dom.elementPath(e.startContainer,k);k=new CKEDITOR.dom.elementPath(e.endContainer,k);n=n.contains("table");k=k.contains("table");if(n||k)n&&k&&b(n,k)?(d.tableSurroundingRange=h,h.setStartAt(n,CKEDITOR.POSITION_AFTER_END),h.setEndAt(k,CKEDITOR.POSITION_BEFORE_START),
h=e.clone(),h.setEndAt(n,CKEDITOR.POSITION_AFTER_END),l=e.clone(),l.setStartAt(k,CKEDITOR.POSITION_BEFORE_START),l=a(h).concat(a(l))):n?k||(d.tableSurroundingRange=h,h.setStartAt(n,CKEDITOR.POSITION_AFTER_END),e.setEndAt(n,CKEDITOR.POSITION_AFTER_END)):(d.tableSurroundingRange=h,h.setEndAt(k,CKEDITOR.POSITION_BEFORE_START),e.setStartAt(k,CKEDITOR.POSITION_AFTER_START)),d.tableContentsRanges=l?l:a(e)},deleteRanges:function(a){for(var b;b=a.tableContentsRanges.pop();)b.extractContents(),u(b.startContainer)&&
b.startContainer.appendBogus();a.tableSurroundingRange&&a.tableSurroundingRange.extractContents()},purge:function(a){if(a.purgeTableBookmark){var b=a.doc,c=a.range.clone(),b=b.createElement("p");b.insertBefore(a.purgeTableBookmark.startNode);c.moveToBookmark(a.purgeTableBookmark);c.deleteContents();a.range.moveToPosition(b,CKEDITOR.POSITION_AFTER_START)}}}}(),detectExtractMerge:function(a){return!(a.range.startPath().contains(CKEDITOR.dtd.$listItem)&&a.range.endPath().contains(CKEDITOR.dtd.$listItem))},
fixUneditableRangePosition:function(a){a.startContainer.getDtd()["#"]||a.moveToClosestEditablePosition(null,!0)},autoParagraph:function(a,b){var c=b.startPath(),f;k(a,c.block,c.blockLimit)&&(f=h(a))&&(f=b.document.createElement(f),f.appendBogus(),b.insertNode(f),b.moveToPosition(f,CKEDITOR.POSITION_AFTER_START))}}}()}(),function(){function a(a){return CKEDITOR.plugins.widget&&CKEDITOR.plugins.widget.isDomWidget(a)}function e(b,c){if(0===b.length||a(b[0].getEnclosedNode()))return!1;var f,d;if((f=!c&&
1===b.length)&&!(f=b[0].collapsed)){var g=b[0];f=g.startContainer.getAscendant({td:1,th:1},!0);var e=g.endContainer.getAscendant({td:1,th:1},!0);d=CKEDITOR.tools.trim;f&&f.equals(e)&&!f.findOne("td, th, tr, tbody, table")?(g=g.cloneContents(),f=g.getFirst()?d(g.getFirst().getText())!==d(f.getText()):!0):f=!1}if(f)return!1;for(d=0;d<b.length;d++)if(f=b[d]._getTableElement(),!f)return!1;return!0}function b(a){function b(a){a=a.find("td, th");var c=[],f;for(f=0;f<a.count();f++)c.push(a.getItem(f));return c}
var c=[],f,d;for(d=0;d<a.length;d++)f=a[d]._getTableElement(),f.is&&f.is({td:1,th:1})?c.push(f):c=c.concat(b(f));return c}function c(a){a=b(a);var c="",f=[],d,g;for(g=0;g<a.length;g++)d&&!d.equals(a[g].getAscendant("tr"))?(c+=f.join("\t")+"\n",d=a[g].getAscendant("tr"),f=[]):0===g&&(d=a[g].getAscendant("tr")),f.push(a[g].getText());return c+=f.join("\t")}function d(a){var b=this.root.editor,f=b.getSelection(1);this.reset();r=!0;f.root.once("selectionchange",function(a){a.cancel()},null,null,0);f.selectRanges([a[0]]);
f=this._.cache;f.ranges=new CKEDITOR.dom.rangeList(a);f.type=CKEDITOR.SELECTION_TEXT;f.selectedElement=a[0]._getTableElement();f.selectedText=c(a);f.nativeSel=null;this.isFake=1;this.rev=w++;b._.fakeSelection=this;r=!1;this.root.fire("selectionchange")}function m(){var b=this._.fakeSelection,c;if(b){c=this.getSelection(1);var f;if(!(f=!c)&&(f=!c.isHidden())){f=b;var d=c.getRanges(),g=f.getRanges(),h=d.length&&d[0]._getTableElement()&&d[0]._getTableElement().getAscendant("table",!0),l=g.length&&g[0]._getTableElement()&&
g[0]._getTableElement().getAscendant("table",!0),k=1===d.length&&d[0]._getTableElement()&&d[0]._getTableElement().is("table"),n=1===g.length&&g[0]._getTableElement()&&g[0]._getTableElement().is("table");if(a(f.getSelectedElement()))f=!1;else{var m=1===d.length&&d[0].collapsed,g=e(d,!!CKEDITOR.env.webkit)&&e(g);h=h&&l?h.equals(l)||l.contains(h):!1;h&&(m||g)?(k&&!n&&f.selectRanges(d),f=!0):f=!1}f=!f}f&&(b.reset(),b=0)}if(!b&&(b=c||this.getSelection(1),!b||b.getType()==CKEDITOR.SELECTION_NONE))return;
this.fire("selectionCheck",b);c=this.elementPath();c.compare(this._.selectionPreviousPath)||(f=this._.selectionPreviousPath&&this._.selectionPreviousPath.blockLimit.equals(c.blockLimit),!CKEDITOR.env.webkit&&!CKEDITOR.env.gecko||f||(this._.previousActive=this.document.getActive()),this._.selectionPreviousPath=c,this.fire("selectionChange",{selection:b,path:c}))}function k(){C=!0;y||(h.call(this),y=CKEDITOR.tools.setTimeout(h,200,this))}function h(){y=null;C&&(CKEDITOR.tools.setTimeout(m,0,this),C=
!1)}function g(a){return B(a)||a.type==CKEDITOR.NODE_ELEMENT&&!a.is(CKEDITOR.dtd.$empty)?!0:!1}function l(a){function b(c,f){return c&&c.type!=CKEDITOR.NODE_TEXT?a.clone()["moveToElementEdit"+(f?"End":"Start")](c):!1}if(!(a.root instanceof CKEDITOR.editable))return!1;var c=a.startContainer,f=a.getPreviousNode(g,null,c),d=a.getNextNode(g,null,c);return b(f)||b(d,1)||!(f||d||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary()&&c.getBogus())?!0:!1}function f(a){n(a,!1);var b=a.getDocument().createText(q);
a.setCustomData("cke-fillingChar",b);return b}function n(a,b){var c=a&&a.removeCustomData("cke-fillingChar");if(c){if(!1!==b){var f=a.getDocument().getSelection().getNative(),d=f&&"None"!=f.type&&f.getRangeAt(0),g=q.length;if(c.getLength()>g&&d&&d.intersectsNode(c.$)){var e=[{node:f.anchorNode,offset:f.anchorOffset},{node:f.focusNode,offset:f.focusOffset}];f.anchorNode==c.$&&f.anchorOffset>g&&(e[0].offset-=g);f.focusNode==c.$&&f.focusOffset>g&&(e[1].offset-=g)}}c.setText(u(c.getText(),1));e&&(c=a.getDocument().$,
f=c.getSelection(),c=c.createRange(),c.setStart(e[0].node,e[0].offset),c.collapse(!0),f.removeAllRanges(),f.addRange(c),f.extend(e[1].node,e[1].offset))}}function u(a,b){return b?a.replace(A,function(a,b){return b?" ":""}):a.replace(q,"")}function v(a,b){var c=b&&CKEDITOR.tools.htmlEncode(b)||"\x26nbsp;",c=CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"'+(CKEDITOR.env.ie&&14>CKEDITOR.env.version?"display:none":"position:fixed;top:0;left:-1000px;width:0;height:0;overflow:hidden;")+
'"\x3e'+c+"\x3c/div\x3e",a.document);a.fire("lockSnapshot");a.editable().append(c);var f=a.getSelection(1),d=a.createRange(),g=f.root.on("selectionchange",function(a){a.cancel()},null,null,0);d.setStartAt(c,CKEDITOR.POSITION_AFTER_START);d.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);f.selectRanges([d]);g.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=c}function x(a){var b={37:1,39:1,8:1,46:1};return function(c){var f=c.data.getKeystroke();if(b[f]){var d=a.getSelection().getRanges(),
g=d[0];1==d.length&&g.collapsed&&(f=g[38>f?"getPreviousEditableNode":"getNextEditableNode"]())&&f.type==CKEDITOR.NODE_ELEMENT&&"false"==f.getAttribute("contenteditable")&&(a.getSelection().fake(f),c.data.preventDefault(),c.cancel())}}}function p(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var f=c.startContainer,d;f&&!((d=f.type==CKEDITOR.NODE_ELEMENT)&&f.is("body")||!f.isReadOnly());)d&&"false"==
f.getAttribute("contentEditable")&&c.setStartAfter(f),f=f.getParent();f=c.startContainer;d=c.endContainer;var g=c.startOffset,e=c.endOffset,h=c.clone();f&&f.type==CKEDITOR.NODE_TEXT&&(g>=f.getLength()?h.setStartAfter(f):h.setStartBefore(f));d&&d.type==CKEDITOR.NODE_TEXT&&(e?h.setEndAfter(d):h.setEndBefore(d));f=new CKEDITOR.dom.walker(h);f.evaluator=function(f){if(f.type==CKEDITOR.NODE_ELEMENT&&f.isReadOnly()){var d=c.clone();c.setEndBefore(f);c.collapsed&&a.splice(b--,1);f.getPosition(h.endContainer)&
CKEDITOR.POSITION_CONTAINS||(d.setStartAfter(f),d.collapsed||a.splice(b+1,0,d));return!0}return!1};f.next()}}return a}var t="function"!=typeof window.getSelection,w=1,q=CKEDITOR.tools.repeat("​",7),A=new RegExp(q+"( )?","g"),r,y,C,B=CKEDITOR.dom.walker.invisible(1),z=function(){function a(b){return function(a){var c=a.editor.createRange();c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return!1}}function b(a){return function(b){var c=b.editor,f=c.createRange(),
d;if(!c.readOnly)return(d=f.moveToClosestEditablePosition(b.selected,a))||(d=f.moveToClosestEditablePosition(b.selected,!a)),d&&c.getSelection().selectRanges([f]),c.fire("saveSnapshot"),b.selected.remove(),d||(f.moveToElementEditablePosition(c.editable()),c.getSelection().selectRanges([f])),c.fire("saveSnapshot"),!1}}var c=a(),f=a(1);return{37:c,38:c,39:f,40:f,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(a){function b(){var a=c.getSelection();a&&a.removeAllRanges()}var c=a.editor;c.on("contentDom",
function(){function a(){r=new CKEDITOR.dom.selection(c.getSelection());r.lock()}function b(){g.removeListener("mouseup",b);l.removeListener("mouseup",b);var a=CKEDITOR.document.$.selection,c=a.createRange();"None"!=a.type&&c.parentElement()&&c.parentElement().ownerDocument==d.$&&c.select()}function f(a){a=a.getRanges()[0];return a?(a=a.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")},!0))&&"false"===a.getAttribute("contenteditable")?
a:null:null}var d=c.document,g=CKEDITOR.document,e=c.editable(),h=d.getBody(),l=d.getDocumentElement(),u=e.isInline(),q,r;CKEDITOR.env.gecko&&e.attachListener(e,"focus",function(a){a.removeListener();0!==q&&(a=c.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==e.$&&(a=c.createRange(),a.moveToElementEditStart(e),a.select())},null,null,-2);e.attachListener(e,CKEDITOR.env.webkit||CKEDITOR.env.gecko?"focusin":"focus",function(){if(q&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){q=c._.previousActive&&
c._.previousActive.equals(d.getActive());var a=null!=c._.previousScrollTop&&c._.previousScrollTop!=e.$.scrollTop;CKEDITOR.env.webkit&&q&&a&&(e.$.scrollTop=c._.previousScrollTop)}c.unlockSelection(q);q=0},null,null,-1);e.attachListener(e,"mousedown",function(){q=0});if(CKEDITOR.env.ie||u)t?e.attachListener(e,"beforedeactivate",a,null,null,-1):e.attachListener(c,"selectionCheck",a,null,null,-1),e.attachListener(e,CKEDITOR.env.webkit||CKEDITOR.env.gecko?"focusout":"blur",function(){c.lockSelection(r);
q=1},null,null,-1),e.attachListener(e,"mousedown",function(){q=0});if(CKEDITOR.env.ie&&!u){var w;e.attachListener(e,"mousedown",function(a){2==a.data.$.button&&((a=c.document.getSelection())&&a.getType()!=CKEDITOR.SELECTION_NONE||(w=c.window.getScrollPosition()))});e.attachListener(e,"mouseup",function(a){2==a.data.$.button&&w&&(c.document.$.documentElement.scrollLeft=w.x,c.document.$.documentElement.scrollTop=w.y);w=null});if("BackCompat"!=d.$.compatMode){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat){var v,
A;l.on("mousedown",function(a){function b(a){a=a.data.$;if(v){var c=h.$.createTextRange();try{c.moveToPoint(a.clientX,a.clientY)}catch(f){}v.setEndPoint(0>A.compareEndPoints("StartToStart",c)?"EndToEnd":"StartToStart",c);v.select()}}function c(){l.removeListener("mousemove",b);g.removeListener("mouseup",c);l.removeListener("mouseup",c);v.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<l.$.clientHeight&&a.$.x<l.$.clientWidth){v=h.$.createTextRange();try{v.moveToPoint(a.$.clientX,a.$.clientY)}catch(f){}A=
v.duplicate();l.on("mousemove",b);g.on("mouseup",c);l.on("mouseup",c)}})}if(7<CKEDITOR.env.version&&11>CKEDITOR.env.version)l.on("mousedown",function(a){a.data.getTarget().is("html")&&(g.on("mouseup",b),l.on("mouseup",b))})}}e.attachListener(e,"selectionchange",m,c);e.attachListener(e,"keyup",k,c);e.attachListener(e,"touchstart",k,c);e.attachListener(e,"touchend",k,c);CKEDITOR.env.ie&&e.attachListener(e,"keydown",function(a){var b=this.getSelection(1),c=f(b);c&&!c.equals(e)&&(b.selectElement(c),a.data.preventDefault())},
c);e.attachListener(e,CKEDITOR.env.webkit||CKEDITOR.env.gecko?"focusin":"focus",function(){c.forceNextSelectionCheck();c.selectionChange(1)});if(u&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var p;e.attachListener(e,"mousedown",function(){p=1});e.attachListener(d.getDocumentElement(),"mouseup",function(){p&&k.call(c);p=0})}else e.attachListener(CKEDITOR.env.ie?e:d.getDocumentElement(),"mouseup",k,c);CKEDITOR.env.webkit&&e.attachListener(d,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:e.hasFocus&&
n(e)}},null,null,-1);e.attachListener(e,"keydown",x(c),null,null,-1)});c.on("setData",function(){c.unlockSelection();CKEDITOR.env.webkit&&b()});c.on("contentDomUnload",function(){c.unlockSelection()});if(CKEDITOR.env.ie9Compat)c.on("beforeDestroy",b,null,null,9);c.on("dataReady",function(){delete c._.fakeSelection;delete c._.hiddenSelectionContainer;c.selectionChange(1)});c.on("loadSnapshot",function(){var a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=c.editable().getLast(a);b&&b.hasAttribute("data-cke-hidden-sel")&&
(b.remove(),CKEDITOR.env.gecko&&(a=c.editable().getFirst(a))&&a.is("br")&&a.getAttribute("_moz_editor_bogus_node")&&a.remove())},null,null,100);c.on("key",function(a){if("wysiwyg"==c.mode){var b=c.getSelection();if(b.isFake){var f=z[a.data.keyCode];if(f)return f({editor:c,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});if(CKEDITOR.env.webkit)CKEDITOR.on("instanceReady",function(a){var b=a.editor;b.on("selectionChange",function(){var a=b.editable(),c=a.getCustomData("cke-fillingChar");
c&&(c.getCustomData("ready")?(n(a),a.editor.fire("selectionCheck")):c.setCustomData("ready",1))},null,null,-1);b.on("beforeSetMode",function(){n(b.editable())},null,null,-1);b.on("getSnapshot",function(a){a.data&&(a.data=u(a.data))},b,null,20);b.on("toDataFormat",function(a){a.data.dataValue=u(a.data.dataValue)},null,null,0)});CKEDITOR.editor.prototype.selectionChange=function(a){(a?m:k).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){return!this._.savedSelection&&!this._.fakeSelection||
a?(a=this.editable())&&"wysiwyg"==this.mode?new CKEDITOR.dom.selection(a):null:this._.savedSelection||this._.fakeSelection};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);return a.getType()!=CKEDITOR.SELECTION_NONE?(!a.isLocked&&a.lock(),this._.savedSelection=a,!0):!1};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;return b?(b.unlock(a),delete this._.savedSelection,!0):!1};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};
CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection){var b=a;a=a.root}var c=a instanceof CKEDITOR.dom.element;
this.rev=b?b.rev:w++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=c?a:this.document.getBody();this.isLocked=0;this._={cache:{}};if(b)return CKEDITOR.tools.extend(this._.cache,b._.cache),this.isFake=b.isFake,this.isLocked=b.isLocked,this;a=this.getNative();var f,d;if(a)if(a.getRangeAt)f=(d=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(d.commonAncestorContainer);else{try{d=a.createRange()}catch(g){}f=d&&CKEDITOR.dom.element.get(d.item&&d.item(0)||d.parentElement())}if(!f||
f.type!=CKEDITOR.NODE_ELEMENT&&f.type!=CKEDITOR.NODE_TEXT||!this.root.equals(f)&&!this.root.contains(f))this._.cache.type=CKEDITOR.SELECTION_NONE,this._.cache.startElement=null,this._.cache.selectedElement=null,this._.cache.selectedText="",this._.cache.ranges=new CKEDITOR.dom.rangeList;return this};var I={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.tools.extend(CKEDITOR.dom.selection,{_removeFillingCharSequenceString:u,
_createFillingCharSequenceNode:f,FILLING_CHAR_SEQUENCE:q});CKEDITOR.dom.selection.prototype={getNative:function(){return void 0!==this._.cache.nativeSel?this._.cache.nativeSel:this._.cache.nativeSel=t?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:t?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),f=c.type;"Text"==f&&(b=CKEDITOR.SELECTION_TEXT);"Control"==f&&(b=CKEDITOR.SELECTION_ELEMENT);c.createRange().parentElement()&&
(b=CKEDITOR.SELECTION_TEXT)}catch(d){}return a.type=b}:function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;else if(1==c.rangeCount){var c=c.getRangeAt(0),f=c.startContainer;f==c.endContainer&&1==f.nodeType&&1==c.endOffset-c.startOffset&&I[f.childNodes[c.startOffset].nodeName.toLowerCase()]&&(b=CKEDITOR.SELECTION_ELEMENT)}return a.type=b},getRanges:function(){var a=t?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}
var b=function(b,c){b=b.duplicate();b.collapse(c);var f=b.parentElement();if(!f.hasChildNodes())return{container:f,offset:0};for(var d=f.children,g,e,h=b.duplicate(),l=0,k=d.length-1,n=-1,m,u;l<=k;)if(n=Math.floor((l+k)/2),g=d[n],h.moveToElementText(g),m=h.compareEndPoints("StartToStart",b),0<m)k=n-1;else if(0>m)l=n+1;else return{container:f,offset:a(g)};if(-1==n||n==d.length-1&&0>m){h.moveToElementText(f);h.setEndPoint("StartToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;d=f.childNodes;if(!h)return g=
d[d.length-1],g.nodeType!=CKEDITOR.NODE_TEXT?{container:f,offset:d.length}:{container:g,offset:g.nodeValue.length};for(f=d.length;0<h&&0<f;)e=d[--f],e.nodeType==CKEDITOR.NODE_TEXT&&(u=e,h-=e.nodeValue.length);return{container:u,offset:-h}}h.collapse(0<m?!0:!1);h.setEndPoint(0<m?"StartToStart":"EndToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;if(!h)return{container:f,offset:a(g)+(0<m?0:1)};for(;0<h;)try{e=g[0<m?"previousSibling":"nextSibling"],e.nodeType==CKEDITOR.NODE_TEXT&&(h-=e.nodeValue.length,
u=e),g=e}catch(q){return{container:f,offset:a(g)}}return{container:u,offset:0<m?-h:u.nodeValue.length+h}};return function(){var a=this.getNative(),c=a&&a.createRange(),f=this.getType();if(!a)return[];if(f==CKEDITOR.SELECTION_TEXT)return a=new CKEDITOR.dom.range(this.root),f=b(c,!0),a.setStart(new CKEDITOR.dom.node(f.container),f.offset),f=b(c),a.setEnd(new CKEDITOR.dom.node(f.container),f.offset),a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&
a.collapse(),[a];if(f==CKEDITOR.SELECTION_ELEMENT){for(var f=[],d=0;d<c.length;d++){for(var g=c.item(d),e=g.parentNode,h=0,a=new CKEDITOR.dom.range(this.root);h<e.childNodes.length&&e.childNodes[h]!=g;h++);a.setStart(new CKEDITOR.dom.node(e),h);a.setEnd(new CKEDITOR.dom.node(e),h+1);f.push(a)}return f}return[]}}():function(){var a=[],b,c=this.getNative();if(!c)return a;for(var f=0;f<c.rangeCount;f++){var d=c.getRangeAt(f);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(d.startContainer),
d.startOffset);b.setEnd(new CKEDITOR.dom.node(d.endContainer),d.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,f=c.ranges;f||(c.ranges=f=new CKEDITOR.dom.rangeList(a.call(this)));return b?p(new CKEDITOR.dom.rangeList(f.slice())):f}}(),getStartElement:function(){var a=this._.cache;if(void 0!==a.startElement)return a.startElement;var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];
if(c){if(c.collapsed)b=c.startContainer,b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());else{for(c.optimize();b=c.startContainer,c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary();)c.setStartAfter(b);b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();if((b=b.getChild(c.startOffset))&&b.type==CKEDITOR.NODE_ELEMENT)for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;)b=c,c=c.getFirst();else b=c.startContainer}b=b.$}}return a.startElement=b?
new CKEDITOR.dom.element(b):null},getSelectedElement:function(){var a=this._.cache;if(void 0!==a.selectedElement)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,f,d=2;d&&!((c=a.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&I[c.getName()]&&(f=c));d--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return f&&f.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=
this._.cache;if(void 0!==a.selectedText)return a.selectedText;var b=this.getNative(),b=t?"Control"==b.type?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=this.getSelectedElement(),c=this.getRanges(),f=this.isFake;this.isLocked=0;this.reset();a&&(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body",
1)&&(e(c)?d.call(this,c):f?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection)if(this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;var b=a._.hiddenSelectionContainer;if(b){var c=a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c&&a.resetDirty()}delete a._.hiddenSelectionContainer}else CKEDITOR.warn("selection-fake-reset");this.rev=w++},selectElement:function(a){var b=
new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);this.selectRanges([b])},selectRanges:function(a){var b=this.root.editor,c=b&&b._.hiddenSelectionContainer;this.reset();if(c)for(var c=this.root,g,h=0;h<a.length;++h)g=a[h],g.endContainer.equals(c)&&(g.endOffset=Math.min(g.endOffset,c.getChildCount()));if(a.length)if(this.isLocked){var k=CKEDITOR.document.getActive();this.unlock();this.selectRanges(a);this.lock();k&&!k.equals(this.root)&&k.focus()}else{var m;a:{var u,q;if(1==a.length&&
!(q=a[0]).collapsed&&(m=q.getEnclosedNode())&&m.type==CKEDITOR.NODE_ELEMENT&&(q=q.clone(),q.shrink(CKEDITOR.SHRINK_ELEMENT,!0),(u=q.getEnclosedNode())&&u.type==CKEDITOR.NODE_ELEMENT&&(m=u),"false"==m.getAttribute("contenteditable")))break a;m=void 0}if(m)this.fake(m);else if(b&&b.plugins.tableselection&&CKEDITOR.plugins.tableselection.isSupportedEnvironment&&e(a)&&!r)d.call(this,a);else{if(t){u=CKEDITOR.dom.walker.whitespaces(!0);m=/\ufeff|\u00a0/;q={table:1,tbody:1,tr:1};1<a.length&&(b=a[a.length-
1],a[0].setEnd(b.endContainer,b.endOffset));b=a[0];a=b.collapsed;var w,v,A;if((c=b.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in I&&(!c.is("a")||!c.getText()))try{A=c.$.createControlRange();A.addElement(c.$);A.select();return}catch(x){}if(b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.getName()in q||b.endContainer.type==CKEDITOR.NODE_ELEMENT&&b.endContainer.getName()in q)b.shrink(CKEDITOR.NODE_ELEMENT,!0),a=b.collapsed;A=b.createBookmark();q=A.startNode;a||(k=A.endNode);
A=b.document.$.body.createTextRange();A.moveToElementText(q.$);A.moveStart("character",1);k?(m=b.document.$.body.createTextRange(),m.moveToElementText(k.$),A.setEndPoint("EndToEnd",m),A.moveEnd("character",-1)):(w=q.getNext(u),v=q.hasAscendant("pre"),w=!(w&&w.getText&&w.getText().match(m))&&(v||!q.hasPrevious()||q.getPrevious().is&&q.getPrevious().is("br")),v=b.document.createElement("span"),v.setHtml("\x26#65279;"),v.insertBefore(q),w&&b.document.createText("﻿").insertBefore(q));b.setStartBefore(q);
q.remove();a?(w?(A.moveStart("character",-1),A.select(),b.document.$.selection.clear()):A.select(),b.moveToPosition(v,CKEDITOR.POSITION_BEFORE_START),v.remove()):(b.setEndBefore(k),k.remove(),A.select())}else{k=this.getNative();if(!k)return;this.removeAllRanges();for(A=0;A<a.length;A++){if(A<a.length-1&&(w=a[A],v=a[A+1],m=w.clone(),m.setStart(w.endContainer,w.endOffset),m.setEnd(v.startContainer,v.startOffset),!m.collapsed&&(m.shrink(CKEDITOR.NODE_ELEMENT,!0),b=m.getCommonAncestor(),m=m.getEnclosedNode(),
b.isReadOnly()||m&&m.isReadOnly()))){v.setStart(w.startContainer,w.startOffset);a.splice(A--,1);continue}b=a[A];v=this.document.$.createRange();b.collapsed&&CKEDITOR.env.webkit&&l(b)&&(m=f(this.root),b.insertNode(m),(w=m.getNext())&&!m.getPrevious()&&w.type==CKEDITOR.NODE_ELEMENT&&"br"==w.getName()?(n(this.root),b.moveToPosition(w,CKEDITOR.POSITION_BEFORE_START)):b.moveToPosition(m,CKEDITOR.POSITION_AFTER_END));v.setStart(b.startContainer.$,b.startOffset);try{v.setEnd(b.endContainer.$,b.endOffset)}catch(p){if(0<=
p.toString().indexOf("NS_ERROR_ILLEGAL_VALUE"))b.collapse(1),v.setEnd(b.endContainer.$,b.endOffset);else throw p;}k.addRange(v)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a,b){var c=this.root.editor;void 0===b&&a.hasAttribute("aria-label")&&(b=a.getAttribute("aria-label"));this.reset();v(c,b);var f=this._.cache,d=new CKEDITOR.dom.range(this.root);d.setStartBefore(a);d.setEndAfter(a);f.ranges=new CKEDITOR.dom.rangeList(d);f.selectedElement=f.startElement=a;f.type=CKEDITOR.SELECTION_ELEMENT;
f.selectedText=f.nativeSel=null;this.isFake=1;this.rev=w++;c._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},isInTable:function(a){return e(this.getRanges(),a)},isCollapsed:function(){var a=this.getRanges();return 1===a.length&&a[0].collapsed},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=
this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(a){for(var b=[],c,f=0;f<a.length;f++){var d=new CKEDITOR.dom.range(this.root);d.moveToBookmark(a[f]);b.push(d)}a.isFake&&(c=e(b)?b[0]._getTableElement():b[0].getEnclosedNode(),c&&c.type==CKEDITOR.NODE_ELEMENT||(CKEDITOR.warn("selection-not-fake"),a.isFake=0));a.isFake&&!e(b)?this.fake(c):this.selectRanges(b);return this},getCommonAncestor:function(){var a=this.getRanges();return a.length?a[0].startContainer.getCommonAncestor(a[a.length-
1].endContainer):null},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[t?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}}(),"use strict",CKEDITOR.STYLE_BLOCK=1,CKEDITOR.STYLE_INLINE=2,CKEDITOR.STYLE_OBJECT=3,function(){function a(a,b){for(var c,f;(a=a.getParent())&&!a.equals(b);)if(a.getAttribute("data-nostyle"))c=a;else if(!f){var d=a.getAttribute("contentEditable");
"false"==d?c=a:"true"==d&&(f=1)}return c}function e(a,b,c,f){return(a.getPosition(b)|f)==f&&(!c.childRule||c.childRule(a))}function b(c){var f=c.document;if(c.collapsed)f=w(this,f),c.insertNode(f),c.moveToPosition(f,CKEDITOR.POSITION_BEFORE_END);else{var g=this.element,h=this._.definition,l,k=h.ignoreReadonly,n=k||h.includeReadonly;null==n&&(n=c.root.getCustomData("cke_includeReadonly"));var m=CKEDITOR.dtd[g];m||(l=!0,m=CKEDITOR.dtd.span);c.enlarge(CKEDITOR.ENLARGE_INLINE,1);c.trim();var u=c.createBookmark(),
q=u.startNode,t=u.endNode,r=q,v;if(!k){var A=c.getCommonAncestor(),k=a(q,A),A=a(t,A);k&&(r=k.getNextSourceNode(!0));A&&(t=A)}for(r.getPosition(t)==CKEDITOR.POSITION_FOLLOWING&&(r=0);r;){k=!1;if(r.equals(t))r=null,k=!0;else{var J=r.type==CKEDITOR.NODE_ELEMENT?r.getName():null,A=J&&"false"==r.getAttribute("contentEditable"),p=J&&r.getAttribute("data-nostyle");if(J&&r.data("cke-bookmark")||r.type===CKEDITOR.NODE_COMMENT){r=r.getNextSourceNode(!0);continue}if(A&&n&&CKEDITOR.dtd.$block[J])for(var C=r,
B=d(C),z=void 0,y=B.length,ea=0,C=y&&new CKEDITOR.dom.range(C.getDocument());ea<y;++ea){var z=B[ea],I=CKEDITOR.filter.instances[z.data("cke-filter")];if(I?I.check(this):1)C.selectNodeContents(z),b.call(this,C)}B=J?!m[J]||p?0:A&&!n?0:e(r,t,h,M):1;if(B)if(z=r.getParent(),B=h,y=g,ea=l,!z||!(z.getDtd()||CKEDITOR.dtd.span)[y]&&!ea||B.parentRule&&!B.parentRule(z))k=!0;else{if(v||J&&CKEDITOR.dtd.$removeEmpty[J]&&(r.getPosition(t)|M)!=M||(v=c.clone(),v.setStartBefore(r)),J=r.type,J==CKEDITOR.NODE_TEXT||A||
J==CKEDITOR.NODE_ELEMENT&&!r.getChildCount()){for(var J=r,E;(k=!J.getNext(F))&&(E=J.getParent(),m[E.getName()])&&e(E,q,h,H);)J=E;v.setEndAfter(J)}}else k=!0;r=r.getNextSourceNode(p||A)}if(k&&v&&!v.collapsed){for(var k=w(this,f),A=k.hasAttributes(),p=v.getCommonAncestor(),J={},B={},z={},y={},fa,K,G;k&&p;){if(p.getName()==g){for(fa in h.attributes)!y[fa]&&(G=p.getAttribute(K))&&(k.getAttribute(fa)==G?B[fa]=1:y[fa]=1);for(K in h.styles)!z[K]&&(G=p.getStyle(K))&&(k.getStyle(K)==G?J[K]=1:z[K]=1)}p=p.getParent()}for(fa in B)k.removeAttribute(fa);
for(K in J)k.removeStyle(K);A&&!k.hasAttributes()&&(k=null);k?(v.extractContents().appendTo(k),v.insertNode(k),x.call(this,k),k.mergeSiblings(),CKEDITOR.env.ie||k.$.normalize()):(k=new CKEDITOR.dom.element("span"),v.extractContents().appendTo(k),v.insertNode(k),x.call(this,k),k.remove(!0));v=null}}c.moveToBookmark(u);c.shrink(CKEDITOR.SHRINK_TEXT);c.shrink(CKEDITOR.NODE_ELEMENT,!0)}}function c(a){function b(){for(var a=new CKEDITOR.dom.elementPath(f.getParent()),c=new CKEDITOR.dom.elementPath(n.getParent()),
d=null,g=null,e=0;e<a.elements.length;e++){var h=a.elements[e];if(h==a.block||h==a.blockLimit)break;m.checkElementRemovable(h,!0)&&(d=h)}for(e=0;e<c.elements.length;e++){h=c.elements[e];if(h==c.block||h==c.blockLimit)break;m.checkElementRemovable(h,!0)&&(g=h)}g&&n.breakParent(g);d&&f.breakParent(d)}a.enlarge(CKEDITOR.ENLARGE_INLINE,1);var c=a.createBookmark(),f=c.startNode,d=this._.definition.alwaysRemoveElement;if(a.collapsed){for(var g=new CKEDITOR.dom.elementPath(f.getParent(),a.root),e,h=0,l;h<
g.elements.length&&(l=g.elements[h])&&l!=g.block&&l!=g.blockLimit;h++)if(this.checkElementRemovable(l)){var k;!d&&a.collapsed&&(a.checkBoundaryOfElement(l,CKEDITOR.END)||(k=a.checkBoundaryOfElement(l,CKEDITOR.START)))?(e=l,e.match=k?"start":"end"):(l.mergeSiblings(),l.is(this.element)?v.call(this,l):p(l,r(this)[l.getName()]))}if(e){d=f;for(h=0;;h++){l=g.elements[h];if(l.equals(e))break;else if(l.match)continue;else l=l.clone();l.append(d);d=l}d["start"==e.match?"insertBefore":"insertAfter"](e)}}else{var n=
c.endNode,m=this;b();for(g=f;!g.equals(n);)e=g.getNextSourceNode(),g.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(g)&&(g.getName()==this.element?v.call(this,g):p(g,r(this)[g.getName()]),e.type==CKEDITOR.NODE_ELEMENT&&e.contains(f)&&(b(),e=f.getNext())),g=e}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,!0)}function d(a){var b=[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function m(a){var b=a.getEnclosedNode()||
a.getCommonAncestor(!1,!0);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&q(a,this)}function k(a){var b=a.getCommonAncestor(!0,!0);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var f in c)a.removeAttribute(f,c[f]);if(b.styles)for(var d in b.styles)b.styles.hasOwnProperty(d)&&a.removeStyle(d)}}function h(a){var b=a.createBookmark(!0),c=a.createIterator();c.enforceRealBlocks=!0;this._.enterMode&&
(c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR);for(var f,d=a.document,g;f=c.getNextParagraph();)!f.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)&&(g=w(this,d,f),l(f,g));a.moveToBookmark(b)}function g(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=!0;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var f,d;f=c.getNextParagraph();)this.checkElementRemovable(f)&&(f.is("pre")?((d=this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==
CKEDITOR.ENTER_P?"p":"div"))&&f.copyAttributes(d),l(f,d)):v.call(this,f));a.moveToBookmark(b)}function l(a,b){var c=!b;c&&(b=a.getDocument().createElement("div"),a.copyAttributes(b));var d=b&&b.is("pre"),g=a.is("pre"),e=!d&&g;if(d&&!g){g=b;(e=a.getBogus())&&e.remove();e=a.getHtml();e=n(e,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");e=e.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");e=e.replace(/([ \t\n\r]+|&nbsp;)/g," ");e=e.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var h=a.getDocument().createElement("div");
h.append(g);g.$.outerHTML="\x3cpre\x3e"+e+"\x3c/pre\x3e";g.copyAttributes(h.getFirst());g=h.getFirst().remove()}else g.setHtml(e);b=g}else e?b=u(c?[a.getHtml()]:f(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,l;(l=c.getPrevious(G))&&l.type==CKEDITOR.NODE_ELEMENT&&l.is("pre")&&(d=n(l.getHtml(),/\n$/,"")+"\n\n"+n(c.getHtml(),/^\n/,""),CKEDITOR.env.ie?c.$.outerHTML="\x3cpre\x3e"+d+"\x3c/pre\x3e":c.setHtml(d),l.remove())}else c&&t(b)}function f(a){var b=[];n(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,
function(a,b,c){return b+"\x3c/pre\x3e"+c+"\x3cpre\x3e"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)});return b}function n(a,b,c){var f="",d="";a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(f=b);c&&(d=c);return""});return f+a.replace(b,c)+d}function u(a,b){var c;1<a.length&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));for(var f=0;f<a.length;f++){var d=a[f],d=d.replace(/(\r\n|\r)/g,"\n"),d=n(d,/^[ \t]*\n/,
""),d=n(d,/\n$/,""),d=n(d,/^[ \t]+|[ \t]+$/g,function(a,b){return 1==a.length?"\x26nbsp;":b?" "+CKEDITOR.tools.repeat("\x26nbsp;",a.length-1):CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "}),d=d.replace(/\n/g,"\x3cbr\x3e"),d=d.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "});if(c){var g=b.clone();g.setHtml(d);c.append(g)}else b.setHtml(d)}return c||b}function v(a,b){var c=this._.definition,f=c.attributes,c=c.styles,d=r(this)[a.getName()],g=CKEDITOR.tools.isEmpty(f)&&
CKEDITOR.tools.isEmpty(c),e;for(e in f)if("class"!=e&&!this._.definition.fullMatch||a.getAttribute(e)==y(e,f[e]))b&&"data-"==e.slice(0,5)||(g=a.hasAttribute(e),a.removeAttribute(e));for(var h in c)this._.definition.fullMatch&&a.getStyle(h)!=y(h,c[h],!0)||(g=g||!!a.getStyle(h),a.removeStyle(h));p(a,d,z[a.getName()]);g&&(this._.definition.alwaysRemoveElement?t(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==CKEDITOR.ENTER_BR&&!a.hasAttributes()?t(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?
"p":"div"))}function x(a){for(var b=r(this),c=a.getElementsByTag(this.element),f,d=c.count();0<=--d;)f=c.getItem(d),f.isReadOnly()||v.call(this,f,!0);for(var g in b)if(g!=this.element)for(c=a.getElementsByTag(g),d=c.count()-1;0<=d;d--)f=c.getItem(d),f.isReadOnly()||p(f,b[g])}function p(a,b,c){if(b=b&&b.attributes)for(var f=0;f<b.length;f++){var d=b[f][0],g;if(g=a.getAttribute(d)){var e=b[f][1];(null===e||e.test&&e.test(g)||"string"==typeof e&&g==e)&&a.removeAttribute(d)}}c||t(a)}function t(a,b){if(!a.hasAttributes()||
b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(G),f=a.getNext(G);!c||c.type!=CKEDITOR.NODE_TEXT&&c.isBlockBoundary({br:1})||a.append("br",1);!f||f.type!=CKEDITOR.NODE_TEXT&&f.isBlockBoundary({br:1})||a.append("br");a.remove(!0)}else c=a.getFirst(),f=a.getLast(),a.remove(!0),c&&(c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings(),f&&!c.equals(f)&&f.type==CKEDITOR.NODE_ELEMENT&&f.mergeSiblings())}function w(a,b,c){var f;f=a.element;"*"==f&&(f="span");f=new CKEDITOR.dom.element(f,b);c&&c.copyAttributes(f);
f=q(f,a);b.getCustomData("doc_processing_style")&&f.hasAttribute("id")?f.removeAttribute("id"):b.setCustomData("doc_processing_style",1);return f}function q(a,b){var c=b._.definition,f=c.attributes,c=CKEDITOR.style.getStyleText(c);if(f)for(var d in f)a.setAttribute(d,f[d]);c&&a.setAttribute("style",c);a.getDocument().removeCustomData("doc_processing_style");return a}function A(a,b){for(var c in a)a[c]=a[c].replace(K,function(a,c){return b[c]})}function r(a){if(a._.overrides)return a._.overrides;var b=
a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var f=0;f<c.length;f++){var d=c[f],g,e;"string"==typeof d?g=d.toLowerCase():(g=d.element?d.element.toLowerCase():a.element,e=d.attributes);d=b[g]||(b[g]={});if(e){var d=d.attributes=d.attributes||[],h;for(h in e)d.push([h.toLowerCase(),e[h]])}}}return b}function y(a,b,c){var f=new CKEDITOR.dom.element("span");f[c?"setStyle":"setAttribute"](a,b);return f[c?"getStyle":"getAttribute"](a)}function C(a,b){function c(a,
b){return"font-family"==b.toLowerCase()?a.replace(/["']/g,""):a}"string"==typeof a&&(a=CKEDITOR.tools.parseCssText(a));"string"==typeof b&&(b=CKEDITOR.tools.parseCssText(b,!0));for(var f in a)if(!(f in b)||c(b[f],f)!=c(a[f],f)&&"inherit"!=a[f]&&"inherit"!=b[f])return!1;return!0}function B(a,b,c){var f=a.getRanges();b=b?this.removeFromRange:this.applyToRange;var d,g;if(a.isFake&&a.isInTable())for(d=[],g=0;g<f.length;g++)d.push(f[g].clone());for(var e=f.createIterator();g=e.getNextRange();)b.call(this,
g,c);a.selectRanges(d||f)}var z={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},I={a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},E=/\s*(?:;\s*|$)/,K=/#\((.+?)\)/g,F=CKEDITOR.dom.walker.bookmark(0,1),G=CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style=
function(a,b){if("string"==typeof a.type)return new CKEDITOR.style.customHandlers[a.type](a);var c=a.attributes;c&&c.style&&(a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style)),delete c.style);b&&(a=CKEDITOR.tools.clone(a),A(a.attributes,b),A(a.styles,b));c=this.element=a.element?"string"==typeof a.element?a.element.toLowerCase():a.element:"*";this.type=a.type||(z[c]?CKEDITOR.STYLE_BLOCK:I[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);"object"==typeof this.element&&
(this.type=CKEDITOR.STYLE_OBJECT);this._={definition:a}};CKEDITOR.style.prototype={apply:function(a){if(a instanceof CKEDITOR.dom.document)return B.call(this,a.getSelection());if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;b||(this._.enterMode=a.activeEnterMode);B.call(this,a.getSelection(),0,a);this._.enterMode=b}},remove:function(a){if(a instanceof CKEDITOR.dom.document)return B.call(this,a.getSelection(),1);if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;
b||(this._.enterMode=a.activeEnterMode);B.call(this,a.getSelection(),1,a);this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?h:this.type==CKEDITOR.STYLE_OBJECT?m:null;return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange=this.type==CKEDITOR.STYLE_INLINE?c:this.type==CKEDITOR.STYLE_BLOCK?g:this.type==CKEDITOR.STYLE_OBJECT?k:null;return this.removeFromRange(a)},applyToObject:function(a){q(a,this)},
checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,!0,b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,f=0,d;f<c.length;f++)if(d=c[f],this.type!=CKEDITOR.STYLE_INLINE||d!=a.block&&d!=a.blockLimit){if(this.type==CKEDITOR.STYLE_OBJECT){var g=d.getName();if(!("string"==typeof this.element?g==this.element:g in this.element))continue}if(this.checkElementRemovable(d,!0,b))return!0}}return!1},checkApplicable:function(a,
b,c){b&&b instanceof CKEDITOR.filter&&(c=b);if(c&&!c.check(this))return!1;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return!0},checkElementMatch:function(a,b){var c=this._.definition;if(!a||!c.ignoreReadonly&&a.isReadOnly())return!1;var f=a.getName();if("string"==typeof this.element?f==this.element:f in this.element){if(!b&&!a.hasAttributes())return!0;if(f=c._AC)c=f;else{var f={},d=0,g=c.attributes;
if(g)for(var e in g)d++,f[e]=g[e];if(e=CKEDITOR.style.getStyleText(c))f.style||d++,f.style=e;f._length=d;c=c._AC=f}if(c._length){for(var h in c)if("_length"!=h)if(f=a.getAttribute(h)||"","style"==h?C(c[h],f):c[h]==f){if(!b)return!0}else if(b)return!1;if(b)return!0}else return!0}return!1},checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return!0;if(b=r(this)[a.getName()]){var f;if(!(b=b.attributes))return!0;for(c=0;c<b.length;c++)if(f=b[c][0],f=a.getAttribute(f)){var d=b[c][1];
if(null===d)return!0;if("string"==typeof d){if(f==d)return!0}else if(d.test(f))return!0}}return!1},buildPreview:function(a){var b=this._.definition,c=[],f=b.element;"bdo"==f&&(f="span");var c=["\x3c",f],d=b.attributes;if(d)for(var g in d)c.push(" ",g,'\x3d"',d[g],'"');(d=CKEDITOR.style.getStyleText(b))&&c.push(' style\x3d"',d,'"');c.push("\x3e",a||b.name,"\x3c/",f,"\x3e");return c.join("")},getDefinition:function(){return this._.definition}};CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;
var b=a.styles,c=a.attributes&&a.attributes.style||"",f="";c.length&&(c=c.replace(E,";"));for(var d in b){var g=b[d],e=(d+":"+g).replace(E,";");"inherit"==g?f+=e:c+=e}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,!0));return a._ST=c+f};CKEDITOR.style.customHandlers={};CKEDITOR.style.addCustomHandler=function(a){var b=function(a){this._={definition:a};this.setup&&this.setup(a)};b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),{assignedTo:CKEDITOR.STYLE_OBJECT},
a,!0);return this.customHandlers[a.type]=b};var M=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,H=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED}(),CKEDITOR.styleCommand=function(a,e){this.requiredContent=this.allowedContent=this.style=a;CKEDITOR.tools.extend(this,e,!0)},CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&
a.removeStyle(this.style)},CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet"),CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet),CKEDITOR.loadStylesSet=function(a,e,b){CKEDITOR.stylesSet.addExternal(a,e,"");CKEDITOR.stylesSet.load(a,b)},CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachStyleStateChange:function(a,e){var b=this._.styleStateChangeCallbacks;b||(b=this._.styleStateChangeCallbacks=[],this.on("selectionChange",function(a){for(var d=0;d<
b.length;d++){var e=b[d],k=e.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;e.fn.call(this,k)}}));b.push({style:a,fn:e})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);else{var e=this,b=e.config.stylesCombo_stylesSet||e.config.stylesSet;if(!1===b)a(null);else if(b instanceof Array)e._.stylesDefinitions=b,a(b);else{b||(b="default");var b=b.split(":"),c=b[0];
CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){e._.stylesDefinitions=b[c];a(e._.stylesDefinitions)})}}}}),CKEDITOR.dom.comment=function(a,e){"string"==typeof a&&(a=(e?e.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node,CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"\x3c!--"+this.$.nodeValue+
"--\x3e"}}),"use strict",function(){var a={},e={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(e[b]=1);CKEDITOR.dom.elementPath=function(b,d){var m=null,k=null,h=[],g=b,l;d=d||b.getDocument().getBody();g||(g=d);do if(g.type==CKEDITOR.NODE_ELEMENT){h.push(g);if(!this.lastElement&&(this.lastElement=g,g.is(CKEDITOR.dtd.$object)||"false"==g.getAttribute("contenteditable")))continue;if(g.equals(d))break;
if(!k&&(l=g.getName(),"true"==g.getAttribute("contenteditable")?k=g:!m&&e[l]&&(m=g),a[l])){if(l=!m&&"div"==l){a:{l=g.getChildren();for(var f=0,n=l.count();f<n;f++){var u=l.getItem(f);if(u.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[u.getName()]){l=!0;break a}}l=!1}l=!l}l?m=g:k=g}}while(g=g.getParent());k||(k=d);this.block=m;this.blockLimit=k;this.root=d;this.elements=h}}(),CKEDITOR.dom.elementPath.prototype={compare:function(a){var e=this.elements;a=a&&a.elements;if(!a||e.length!=a.length)return!1;
for(var b=0;b<e.length;b++)if(!e[b].equals(a[b]))return!1;return!0},contains:function(a,e,b){var c=0,d;"string"==typeof a&&(d=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?d=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?d=function(b){return-1<CKEDITOR.tools.indexOf(a,b.getName())}:"function"==typeof a?d=a:"object"==typeof a&&(d=function(b){return b.getName()in a});var m=this.elements,k=m.length;e&&(b?c+=1:--k);b&&(m=Array.prototype.slice.call(m,0),m.reverse());
for(;c<k;c++)if(d(m[c]))return m[c];return null},isContextFor:function(a){var e;return a in CKEDITOR.dtd.$block?(e=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit,!!e.getDtd()[a]):!0},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}},CKEDITOR.dom.text=function(a,e){"string"==typeof a&&(a=(e?e.$:document).createTextNode(a));this.$=a},CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node,CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,
{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var e=this.$.parentNode,b=e.childNodes.length,c=this.getLength(),d=this.getDocument(),m=new CKEDITOR.dom.text(this.$.splitText(a),d);e.childNodes.length==b&&(a>=c?(m=d.createText(""),m.insertAfter(this)):(a=d.createText(""),a.insertAfter(m),a.remove()));return m},substring:function(a,e){return"number"!=typeof e?this.$.nodeValue.substr(a):
this.$.nodeValue.substring(a,e)}}),function(){function a(a,c,d){var e=a.serializable,k=c[d?"endContainer":"startContainer"],h=d?"endOffset":"startOffset",g=e?c.document.getById(a.startNode):a.startNode;a=e?c.document.getById(a.endNode):a.endNode;k.equals(g.getPrevious())?(c.startOffset=c.startOffset-k.getLength()-a.getPrevious().getLength(),k=a.getNext()):k.equals(a.getPrevious())&&(c.startOffset-=k.getLength(),k=a.getNext());k.equals(g.getParent())&&c[h]++;k.equals(a.getParent())&&c[h]++;c[d?"endContainer":
"startContainer"]=k;return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,e)};var e={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),d=[],e;return{getNextRange:function(k){e=void 0===e?0:e+1;var h=a[e];if(h&&1<a.length){if(!e)for(var g=a.length-1;0<=g;g--)d.unshift(a[g].createBookmark(!0));if(k)for(var l=0;a[e+l+1];){var f=h.document;k=0;g=f.getById(d[l].endNode);
for(f=f.getById(d[l+1].startNode);;){g=g.getNextSourceNode(!1);if(f.equals(g))k=1;else if(c(g)||g.type==CKEDITOR.NODE_ELEMENT&&g.isBlockBoundary())continue;break}if(!k)break;l++}for(h.moveToBookmark(d.shift());l--;)g=a[++e],g.moveToBookmark(d.shift()),h.setEnd(g.endContainer,g.endOffset)}return h}}},createBookmarks:function(b){for(var c=[],d,e=0;e<this.length;e++){c.push(d=this[e].createBookmark(b,!0));for(var k=e+1;k<this.length;k++)this[k]=a(d,this[k]),this[k]=a(d,this[k],!0)}return c},createBookmarks2:function(a){for(var c=
[],d=0;d<this.length;d++)c.push(this[d].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}}(),function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function e(b){var c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),g=0,e;g<c.length;g++)if(e=c[g],d.ie&&(e.replace(/^ie/,"")==d.version||d.quirks&&"iequirks"==
e)&&(e="ie"),d[e]){b+="_"+c[g];break}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){m[a]||(CKEDITOR.document.appendStyleSheet(e(a)),m[a]=1);b&&b()}function c(a){var b=a.getById(k);b||(b=a.getHead().append("style"),b.setAttribute("id",k),b.setAttribute("type","text/css"));return b}function d(a,b,c){var d,g,e;if(CKEDITOR.env.webkit)for(b=b.split("}").slice(0,-1),g=0;g<b.length;g++)b[g]=b[g].split("{");for(var h=0;h<a.length;h++)if(CKEDITOR.env.webkit)for(g=0;g<b.length;g++){e=b[g][1];for(d=0;d<
c.length;d++)e=e.replace(c[d][0],c[d][1]);a[h].$.sheet.addRule(b[g][0],e)}else{e=b;for(d=0;d<c.length;d++)e=e.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&11>CKEDITOR.env.version?a[h].$.styleSheet.cssText+=e:a[h].$.innerHTML+=e}}var m={};CKEDITOR.skin={path:a,loadPart:function(c,f){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,f)}):b(c,f)},getPath:function(a){return CKEDITOR.getUrl(e(a))},icons:{},addIcon:function(a,b,c,d){a=
a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,b,c,d,g){var e;a&&(a=a.toLowerCase(),b&&(e=this.icons[a+"-rtl"]),e||(e=this.icons[a]));a=c||e&&e.path||"";d=d||e&&e.offset;g=g||e&&e.bgsize||"16px";a&&(a=a.replace(/'/g,"\\'"));return a&&"background-image:url('"+CKEDITOR.getUrl(a)+"');background-position:0 "+d+"px;background-size:"+g+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=
c(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,e="",l="";"function"==typeof c&&(e=c(this,"editor"),l=c(this,"panel"));a=[[g,a]];d([b],e,a);d(h,l,a)}).call(this,a)}});var k="cke_ui_color",h=[],g=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor;a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);h.push(a);
var e=b.getUiColor();e&&d([a],CKEDITOR.skin.chameleon(b,"panel"),[[g,e]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&b.setUiColor(b.config.uiColor)}})}(),function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=!1;else{var a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e',CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var e=a.getComputedStyle("border-top-color"),
b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!(!e||e!=b)}catch(c){CKEDITOR.env.hc=!1}a.remove()}CKEDITOR.env.hc&&(CKEDITOR.env.cssClass+=" cke_hc");CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending)for(delete CKEDITOR._.pending,e=0;e<a.length;e++)CKEDITOR.editor.prototype.constructor.apply(a[e][0],a[e][1]),CKEDITOR.add(a[e][0])}(),CKEDITOR.skin.name="moono-lisa",CKEDITOR.skin.ua_editor="ie,iequirks,ie8,gecko",
CKEDITOR.skin.ua_dialog="ie,iequirks,ie8",CKEDITOR.skin.chameleon=function(){var a=function(){return function(a,c){for(var d=a.match(/[^#]./g),e=0;3>e;e++){var k=e,h;h=parseInt(d[e],16);h=("0"+(0>c?0|h*(1+c):0|h+(255-h)*c).toString(16)).slice(-2);d[k]=h}return"#"+d.join("")}}(),e={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_bottom [background-color:{defaultBackground};border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [background-color:{defaultBackground};outline-color:{defaultBorder};] {id} .cke_dialog_tab [background-color:{dialogTab};border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [background-color:{lightBackground};] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} a.cke_button_off:hover,{id} a.cke_button_off:focus,{id} a.cke_button_off:active [background-color:{darkBackground};border-color:{toolbarElementsBorder};] {id} .cke_button_on [background-color:{ckeButtonOn};border-color:{toolbarElementsBorder};] {id} .cke_toolbar_separator,{id} .cke_toolgroup a.cke_button:last-child:after,{id} .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after [background-color: {toolbarElementsBorder};border-color: {toolbarElementsBorder};] {id} a.cke_combo_button:hover,{id} a.cke_combo_button:focus,{id} .cke_combo_on a.cke_combo_button [border-color:{toolbarElementsBorder};background-color:{darkBackground};] {id} .cke_combo:after [border-color:{toolbarElementsBorder};] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover,{id} a.cke_path_item:focus,{id} a.cke_path_item:active [background-color:{darkBackground};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [background-color:{lightBackground};border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active [background-color:{menubuttonHover};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(b,c){var d=a(b.uiColor,.4),d={id:"."+b.id,defaultBorder:a(d,-.2),toolbarElementsBorder:a(d,-.25),defaultBackground:d,lightBackground:a(d,.8),darkBackground:a(d,-.15),ckeButtonOn:a(d,.4),ckeResizer:a(d,-.4),ckeColorauto:a(d,.8),dialogBody:a(d,.7),dialogTab:a(d,.65),dialogTabSelected:"#FFF",dialogTabSelectedBorder:"#FFF",elementsPathColor:a(d,-.6),menubuttonHover:a(d,.1),menubuttonIcon:a(d,.5),menubuttonIconHover:a(d,.3)};return e[c].output(d).replace(/\[/g,"{").replace(/\]/g,"}")}}(),
CKEDITOR.plugins.add("dialogui",{onLoad:function(){var a=function(a){this._||(this._={});this._["default"]=this._.initValue=a["default"]||"";this._.required=a.required||!1;for(var b=[this._],c=1;c<arguments.length;c++)b.push(arguments[c]);b.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools,b);return this._},e={build:function(a,b,c){return new CKEDITOR.ui.dialog.textInput(a,b,c)}},b={build:function(a,b,c){return new CKEDITOR.ui.dialog[b.type](a,b,c)}},c={isChanged:function(){return this.getValue()!=
this.getInitValue()},reset:function(a){this.setValue(this.getInitValue(),a)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return this._.initValue}},d=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(a,b){this._.domOnChangeRegistered||(a.on("load",function(){this.getInputElement().on("change",function(){a.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})},
this)},this),this._.domOnChangeRegistered=!0);this.on("change",b)}},!0),m=/^on([A-Z]\w+)/,k=function(a){for(var b in a)(m.test(b)||"title"==b||"type"==b)&&delete a[b];return a},h=function(a){a=a.data.getKeystroke();a==CKEDITOR.SHIFT+CKEDITOR.ALT+36?this.setDirectionMarker("ltr"):a==CKEDITOR.SHIFT+CKEDITOR.ALT+35&&this.setDirectionMarker("rtl")};CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,c,f,d){if(!(4>arguments.length)){var e=a.call(this,c);e.labelId=CKEDITOR.tools.getNextId()+
"_label";this._.children=[];var h={role:c.role||"presentation"};c.includeLabel&&(h["aria-labelledby"]=e.labelId);CKEDITOR.ui.dialog.uiElement.call(this,b,c,f,"div",null,h,function(){var a=[],f=c.required?" cke_required":"";"horizontal"!=c.labelLayout?a.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label'+f+'" ',' id\x3d"'+e.labelId+'"',e.inputId?' for\x3d"'+e.inputId+'"':"",(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e",c.label,"\x3c/label\x3e",'\x3cdiv class\x3d"cke_dialog_ui_labeled_content"',
c.controlStyle?' style\x3d"'+c.controlStyle+'"':"",' role\x3d"presentation"\x3e',d.call(this,b,c),"\x3c/div\x3e"):(f={type:"hbox",widths:c.widths,padding:0,children:[{type:"html",html:'\x3clabel class\x3d"cke_dialog_ui_labeled_label'+f+'" id\x3d"'+e.labelId+'" for\x3d"'+e.inputId+'"'+(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e"+CKEDITOR.tools.htmlEncode(c.label)+"\x3c/label\x3e"},{type:"html",html:'\x3cspan class\x3d"cke_dialog_ui_labeled_content"'+(c.controlStyle?' style\x3d"'+c.controlStyle+
'"':"")+"\x3e"+d.call(this,b,c)+"\x3c/span\x3e"}]},CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,f,a));return a.join("")})}},textInput:function(b,c,f){if(!(3>arguments.length)){a.call(this,c);var d=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",e={"class":"cke_dialog_ui_input_"+c.type,id:d,type:c.type};c.validate&&(this.validate=c.validate);c.maxLength&&(e.maxlength=c.maxLength);c.size&&(e.size=c.size);c.inputStyle&&(e.style=c.inputStyle);var k=this,m=!1;b.on("load",function(){k.getInputElement().on("keydown",
function(a){13==a.data.getKeystroke()&&(m=!0)});k.getInputElement().on("keyup",function(a){13==a.data.getKeystroke()&&m&&(b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0),m=!1);k.bidi&&h.call(k,a)},null,null,1E3)});CKEDITOR.ui.dialog.labeledElement.call(this,b,c,f,function(){var a=['\x3cdiv class\x3d"cke_dialog_ui_input_',c.type,'" role\x3d"presentation"'];c.width&&a.push('style\x3d"width:'+c.width+'" ');a.push("\x3e\x3cinput ");e["aria-labelledby"]=this._.labelId;this._.required&&
(e["aria-required"]=this._.required);for(var b in e)a.push(b+'\x3d"'+e[b]+'" ');a.push(" /\x3e\x3c/div\x3e");return a.join("")})}},textarea:function(b,c,f){if(!(3>arguments.length)){a.call(this,c);var d=this,e=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",k={};c.validate&&(this.validate=c.validate);k.rows=c.rows||5;k.cols=c.cols||20;k["class"]="cke_dialog_ui_input_textarea "+(c["class"]||"");"undefined"!=typeof c.inputStyle&&(k.style=c.inputStyle);c.dir&&(k.dir=c.dir);if(d.bidi)b.on("load",
function(){d.getInputElement().on("keyup",h)},d);CKEDITOR.ui.dialog.labeledElement.call(this,b,c,f,function(){k["aria-labelledby"]=this._.labelId;this._.required&&(k["aria-required"]=this._.required);var a=['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"',e,'" '],b;for(b in k)a.push(b+'\x3d"'+CKEDITOR.tools.htmlEncode(k[b])+'" ');a.push("\x3e",CKEDITOR.tools.htmlEncode(d._["default"]),"\x3c/textarea\x3e\x3c/div\x3e");return a.join("")})}},checkbox:function(b,
c,f){if(!(3>arguments.length)){var d=a.call(this,c,{"default":!!c["default"]});c.validate&&(this.validate=c.validate);CKEDITOR.ui.dialog.uiElement.call(this,b,c,f,"span",null,null,function(){var a=CKEDITOR.tools.extend({},c,{id:c.id?c.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},!0),f=[],e=CKEDITOR.tools.getNextId()+"_label",h={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":e};k(a);c["default"]&&(h.checked="checked");"undefined"!=typeof a.inputStyle&&(a.style=a.inputStyle);
d.checkbox=new CKEDITOR.ui.dialog.uiElement(b,a,f,"input",null,h);f.push(' \x3clabel id\x3d"',e,'" for\x3d"',h.id,'"'+(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e",CKEDITOR.tools.htmlEncode(c.label),"\x3c/label\x3e");return f.join("")})}},radio:function(b,c,f){if(!(3>arguments.length)){a.call(this,c);this._["default"]||(this._["default"]=this._.initValue=c.items[0][1]);c.validate&&(this.validate=c.validate);var d=[],e=this;c.role="radiogroup";c.includeLabel=!0;CKEDITOR.ui.dialog.labeledElement.call(this,
b,c,f,function(){for(var a=[],f=[],h=(c.id?c.id:CKEDITOR.tools.getNextId())+"_radio",m=0;m<c.items.length;m++){var w=c.items[m],q=void 0!==w[2]?w[2]:w[0],A=void 0!==w[1]?w[1]:w[0],r=CKEDITOR.tools.getNextId()+"_radio_input",y=r+"_label",r=CKEDITOR.tools.extend({},c,{id:r,title:null,type:null},!0),q=CKEDITOR.tools.extend({},r,{title:q},!0),C={type:"radio","class":"cke_dialog_ui_radio_input",name:h,value:A,"aria-labelledby":y},B=[];e._["default"]==A&&(C.checked="checked");k(r);k(q);"undefined"!=typeof r.inputStyle&&
(r.style=r.inputStyle);r.keyboardFocusable=!0;d.push(new CKEDITOR.ui.dialog.uiElement(b,r,B,"input",null,C));B.push(" ");new CKEDITOR.ui.dialog.uiElement(b,q,B,"label",null,{id:y,"for":C.id},w[0]);a.push(B.join(""))}new CKEDITOR.ui.dialog.hbox(b,d,a,f);return f.join("")});this._.children=d}},button:function(b,c,f){if(arguments.length){"function"==typeof c&&(c=c(b.getParentEditor()));a.call(this,c,{disabled:c.disabled||!1});CKEDITOR.event.implementOn(this);var d=this;b.on("load",function(){var a=this.getElement();
(function(){a.on("click",function(a){d.click();a.data.preventDefault()});a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(d.click(),a.data.preventDefault())})})();a.unselectable()},this);var e=CKEDITOR.tools.extend({},c);delete e.style;var h=CKEDITOR.tools.getNextId()+"_label";CKEDITOR.ui.dialog.uiElement.call(this,b,e,f,"a",null,{style:c.style,href:"javascript:void(0)",title:c.label,hidefocus:"true","class":c["class"],role:"button","aria-labelledby":h},'\x3cspan id\x3d"'+h+'" class\x3d"cke_dialog_ui_button"\x3e'+
CKEDITOR.tools.htmlEncode(c.label)+"\x3c/span\x3e")}},select:function(b,c,f){if(!(3>arguments.length)){var d=a.call(this,c);c.validate&&(this.validate=c.validate);d.inputId=CKEDITOR.tools.getNextId()+"_select";CKEDITOR.ui.dialog.labeledElement.call(this,b,c,f,function(){var a=CKEDITOR.tools.extend({},c,{id:c.id?c.id+"_select":CKEDITOR.tools.getNextId()+"_select"},!0),f=[],e=[],h={id:d.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};f.push('\x3cdiv class\x3d"cke_dialog_ui_input_',
c.type,'" role\x3d"presentation"');c.width&&f.push('style\x3d"width:'+c.width+'" ');f.push("\x3e");void 0!==c.size&&(h.size=c.size);void 0!==c.multiple&&(h.multiple=c.multiple);k(a);for(var m=0,w;m<c.items.length&&(w=c.items[m]);m++)e.push('\x3coption value\x3d"',CKEDITOR.tools.htmlEncode(void 0!==w[1]?w[1]:w[0]).replace(/"/g,"\x26quot;"),'" /\x3e ',CKEDITOR.tools.htmlEncode(w[0]));"undefined"!=typeof a.inputStyle&&(a.style=a.inputStyle);d.select=new CKEDITOR.ui.dialog.uiElement(b,a,f,"select",null,
h,e.join(""));f.push("\x3c/div\x3e");return f.join("")})}},file:function(b,c,f){if(!(3>arguments.length)){void 0===c["default"]&&(c["default"]="");var d=CKEDITOR.tools.extend(a.call(this,c),{definition:c,buttons:[]});c.validate&&(this.validate=c.validate);b.on("load",function(){CKEDITOR.document.getById(d.frameId).getParent().addClass("cke_dialog_ui_input_file")});CKEDITOR.ui.dialog.labeledElement.call(this,b,c,f,function(){d.frameId=CKEDITOR.tools.getNextId()+"_fileInput";var a=['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"',
d.frameId,'" title\x3d"',c.label,'" src\x3d"javascript:void('];a.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})()":"0");a.push(')"\x3e\x3c/iframe\x3e');return a.join("")})}},fileButton:function(b,c,f){var d=this;if(!(3>arguments.length)){a.call(this,c);c.validate&&(this.validate=c.validate);var e=CKEDITOR.tools.extend({},c),h=e.onClick;e.className=(e.className?e.className+" ":"")+"cke_dialog_ui_button";e.onClick=function(a){var f=
c["for"];a=h?h.call(this,a):!1;!1!==a&&("xhr"!==a&&b.getContentElement(f[0],f[1]).submit(),this.disable())};b.on("load",function(){b.getContentElement(c["for"][0],c["for"][1])._.buttons.push(d)});CKEDITOR.ui.dialog.button.call(this,b,e,f)}},html:function(){var a=/^\s*<[\w:]+\s+([^>]*)?>/,b=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,c=/\/$/;return function(d,e,h){if(!(3>arguments.length)){var k=[],m=e.html;"\x3c"!=m.charAt(0)&&(m="\x3cspan\x3e"+m+"\x3c/span\x3e");var t=e.focus;if(t){var w=this.focus;
this.focus=function(){("function"==typeof t?t:w).call(this);this.fire("focus")};e.isFocusable&&(this.isFocusable=this.isFocusable);this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,d,e,k,"span",null,null,"");k=k.join("").match(a);m=m.match(b)||["","",""];c.test(m[1])&&(m[1]=m[1].slice(0,-1),m[2]="/"+m[2]);h.push([m[1]," ",k[1]||"",m[2]].join(""))}}}(),fieldset:function(a,b,c,d,e){var h=e.label;this._={children:b};CKEDITOR.ui.dialog.uiElement.call(this,a,e,d,"fieldset",null,null,function(){var a=
[];h&&a.push("\x3clegend"+(e.labelStyle?' style\x3d"'+e.labelStyle+'"':"")+"\x3e"+h+"\x3c/legend\x3e");for(var b=0;b<c.length;b++)a.push(c[b]);return a.join("")})}},!0);CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(a){var b=CKEDITOR.document.getById(this._.labelId);1>b.getChildCount()?(new CKEDITOR.dom.text(a,CKEDITOR.document)).appendTo(b):b.getChild(0).$.nodeValue=
a;return this},getLabel:function(){var a=CKEDITOR.document.getById(this._.labelId);return!a||1>a.getChildCount()?"":a.getChild(0).getText()},eventProcessors:d},!0);CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){return this._.disabled?!1:this.fire("click",{dialog:this._.dialog})},enable:function(){this._.disabled=!1;var a=this.getElement();a&&a.removeClass("cke_disabled")},disable:function(){this._.disabled=!0;this.getElement().addClass("cke_disabled")},
isVisible:function(){return this.getElement().getFirst().isVisible()},isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(a,b){this.on("click",function(){b.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)},
focus:function(){var a=this.selectParentTab();setTimeout(function(){var b=a.getInputElement();b&&b.$.focus()},0)},select:function(){var a=this.selectParentTab();setTimeout(function(){var b=a.getInputElement();b&&(b.$.focus(),b.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(a){if(this.bidi){var b=a&&a.charAt(0);(b="‪"==b?"ltr":"‫"==b?"rtl":null)&&(a=a.slice(1));this.setDirectionMarker(b)}a||(a="");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},
getValue:function(){var a=CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this);if(this.bidi&&a){var b=this.getDirectionMarker();b&&(a=("ltr"==b?"‪":"‫")+a)}return a},setDirectionMarker:function(a){var b=this.getInputElement();a?b.setAttributes({dir:a,"data-cke-dir-marker":a}):this.getDirectionMarker()&&b.removeAttributes(["dir","data-cke-dir-marker"])},getDirectionMarker:function(){return this.getInputElement().data("cke-dir-marker")},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.textarea.prototype=
new CKEDITOR.ui.dialog.textInput;CKEDITOR.ui.dialog.select.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(a,b,c){var d=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),e=this.getInputElement().$;d.$.text=a;d.$.value=void 0===b||null===b?a:b;void 0===c||null===c?CKEDITOR.env.ie?e.add(d.$):e.add(d.$,null):e.add(d.$,c);return this},remove:function(a){this.getInputElement().$.remove(a);
return this},clear:function(){for(var a=this.getInputElement().$;0<a.length;)a.remove(0);return this},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()},setValue:function(a,b){this.getInputElement().$.checked=a;!b&&this.fire("change",{value:a})},getValue:function(){return this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(a,
b){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return d.onChange.apply(this,arguments);a.on("load",function(){var a=this._.checkbox.getElement();a.on("propertychange",function(b){b=b.data.$;"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this);this.on("change",b);return null}},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(a,b){for(var c=this._.children,d,e=0;e<c.length&&(d=c[e]);e++)d.getElement().$.checked=
d.getValue()==a;!b&&this.fire("change",{value:a})},getValue:function(){for(var a=this._.children,b=0;b<a.length;b++)if(a[b].getElement().$.checked)return a[b].getValue();return null},accessKeyUp:function(){var a=this._.children,b;for(b=0;b<a.length;b++)if(a[b].getElement().$.checked){a[b].getElement().focus();return}a[0].getElement().focus()},eventProcessors:{onChange:function(a,b){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return d.onChange.apply(this,arguments);a.on("load",function(){for(var a=
this._.children,b=this,c=0;c<a.length;c++)a[c].getElement().on("propertychange",function(a){a=a.data.$;"checked"==a.propertyName&&this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this);this.on("change",b);return null}}},c,!0);CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,c,{getInputElement:function(){var a=CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0<a.$.forms.length?new CKEDITOR.dom.element(a.$.forms[0].elements[0]):
this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,d=function(a,b,c,f){a.on("formLoaded",function(){a.getInputElement().on(c,f,a)})},e;for(e in a)if(c=e.match(b))this.eventProcessors[e]?this.eventProcessors[e].call(this,this._.dialog,a[e]):d(this,this._.dialog,c[1].toLowerCase(),a[e]);return this},reset:function(){function a(){c.$.open();
var g="";d.size&&(g=d.size-(CKEDITOR.env.ie?7:0));var q=b.frameId+"_input";c.$.write(['\x3chtml dir\x3d"'+m+'" lang\x3d"'+t+'"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e','\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"'+m+'" lang\x3d"'+t+'" action\x3d"',CKEDITOR.tools.htmlEncode(d.action),'"\x3e\x3clabel id\x3d"',b.labelId,'" for\x3d"',q,'" style\x3d"display:none"\x3e',CKEDITOR.tools.htmlEncode(d.label),
'\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"',q,'" aria-labelledby\x3d"',b.labelId,'" type\x3d"file" name\x3d"',CKEDITOR.tools.htmlEncode(d.id||"cke_upload"),'" size\x3d"',CKEDITOR.tools.htmlEncode(0<g?g:""),'" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"","window.parent.CKEDITOR.tools.callFunction("+h+");","window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction("+k+")}","\x3c/script\x3e"].join(""));
c.$.close();for(g=0;g<e.length;g++)e[g].enable()}var b=this._,c=CKEDITOR.document.getById(b.frameId).getFrameDocument(),d=b.definition,e=b.buttons,h=this.formLoadedNumber,k=this.formUnloadNumber,m=b.dialog._.editor.lang.dir,t=b.dialog._.editor.langCode;h||(h=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),k=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(h);
CKEDITOR.tools.removeFunction(k)}));CKEDITOR.env.gecko?setTimeout(a,500):a()},getValue:function(){return this.getInputElement().$.value||""},setInitValue:function(){this._.initValue=""},eventProcessors:{onChange:function(a,b){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0);this.on("change",b)}},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.fileButton.prototype=
new CKEDITOR.ui.dialog.button;CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text",e);CKEDITOR.dialog.addUIElement("password",e);CKEDITOR.dialog.addUIElement("tel",e);CKEDITOR.dialog.addUIElement("textarea",b);CKEDITOR.dialog.addUIElement("checkbox",b);CKEDITOR.dialog.addUIElement("radio",b);CKEDITOR.dialog.addUIElement("button",b);CKEDITOR.dialog.addUIElement("select",b);CKEDITOR.dialog.addUIElement("file",b);CKEDITOR.dialog.addUIElement("fileButton",
b);CKEDITOR.dialog.addUIElement("html",b);CKEDITOR.dialog.addUIElement("fieldset",{build:function(a,b,c){for(var d=b.children,e,h=[],k=[],m=0;m<d.length&&(e=d[m]);m++){var t=[];h.push(t);k.push(CKEDITOR.dialog._.uiElementBuilders[e.type].build(a,e,t))}return new CKEDITOR.ui.dialog[b.type](a,k,h,c,b)}})}}),CKEDITOR.DIALOG_RESIZE_NONE=0,CKEDITOR.DIALOG_RESIZE_WIDTH=1,CKEDITOR.DIALOG_RESIZE_HEIGHT=2,CKEDITOR.DIALOG_RESIZE_BOTH=3,CKEDITOR.DIALOG_STATE_IDLE=1,CKEDITOR.DIALOG_STATE_BUSY=2,function(){function a(){for(var a=
this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1;c>b-a;c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function e(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1;c<b+a;c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function b(a,b){for(var c=a.$.getElementsByTagName("input"),f=0,d=c.length;f<
d;f++){var e=new CKEDITOR.dom.element(c[f]);"text"==e.getAttribute("type").toLowerCase()&&(b?(e.setAttribute("value",e.getCustomData("fake_value")||""),e.removeCustomData("fake_value")):(e.setCustomData("fake_value",e.getAttribute("value")),e.setAttribute("value","")))}}function c(a,b){var c=this.getInputElement();c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0));a||(this.select?this.select():this.focus());b&&alert(b);this.fire("validated",{valid:a,msg:b})}function d(){var a=
this.getInputElement();a&&a.removeAttribute("aria-invalid")}function m(a){var b=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",p).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),c=b.getChild([0,0,0,0,0]),f=c.getChild(0),d=c.getChild(1);a.plugins.clipboard&&CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(c);
!CKEDITOR.env.ie||CKEDITOR.env.quirks||CKEDITOR.env.edge||(a="javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())",CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"'+a+'" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(c.getParent()));f.unselectable();d.unselectable();return{element:b,parts:{dialog:b.getChild(0),title:f,close:d,tabs:c.getChild(2),contents:c.getChild([3,0,0,0]),
footer:c.getChild([3,0,1,0])}}}function k(a,b,c){this.element=b;this.focusIndex=c;this.tabIndex=0;this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()};this.focus=function(){a._.currentFocusIndex=this.focusIndex;this.element.focus()};b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")});b.on("focus",function(){this.fire("mouseover")});b.on("blur",function(){this.fire("mouseout")})}function h(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow();
c.on("resize",b);a.on("hide",function(){c.removeListener("resize",b)})}function g(a,b){this._={dialog:a};CKEDITOR.tools.extend(this,b)}function l(a){function b(c){var k=a.getSize(),m=CKEDITOR.document.getWindow().getViewPaneSize(),l=c.data.$.screenX,n=c.data.$.screenY,q=l-f.x,r=n-f.y;f={x:l,y:n};d.x+=q;d.y+=r;a.move(d.x+h[3]<g?-h[3]:d.x-h[1]>m.width-k.width-g?m.width-k.width+("rtl"==e.lang.dir?0:h[1]):d.x,d.y+h[0]<g?-h[0]:d.y-h[2]>m.height-k.height-g?m.height-k.height+h[2]:d.y,1);c.data.preventDefault()}
function c(){CKEDITOR.document.removeListener("mousemove",b);CKEDITOR.document.removeListener("mouseup",c);if(CKEDITOR.env.ie6Compat){var a=B.getChild(0).getFrameDocument();a.removeListener("mousemove",b);a.removeListener("mouseup",c)}}var f=null,d=null,e=a.getParentEditor(),g=e.config.dialog_magnetDistance,h=CKEDITOR.skin.margins||[0,0,0,0];"undefined"==typeof g&&(g=20);a.parts.title.on("mousedown",function(e){f={x:e.data.$.screenX,y:e.data.$.screenY};CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",
c);d=a.getPosition();if(CKEDITOR.env.ie6Compat){var g=B.getChild(0).getFrameDocument();g.on("mousemove",b);g.on("mouseup",c)}e.data.preventDefault()},a)}function f(a){function b(c){var n="rtl"==e.lang.dir,q=l.width,r=l.height,t=q+(c.data.$.screenX-m.x)*(n?-1:1)*(a._.moved?1:2),u=r+(c.data.$.screenY-m.y)*(a._.moved?1:2),w=a._.element.getFirst(),w=n&&w.getComputedStyle("right"),A=a.getPosition();A.y+u>k.height&&(u=k.height-A.y);(n?w:A.x)+t>k.width&&(t=k.width-(n?w:A.x));if(d==CKEDITOR.DIALOG_RESIZE_WIDTH||
d==CKEDITOR.DIALOG_RESIZE_BOTH)q=Math.max(f.minWidth||0,t-g);if(d==CKEDITOR.DIALOG_RESIZE_HEIGHT||d==CKEDITOR.DIALOG_RESIZE_BOTH)r=Math.max(f.minHeight||0,u-h);a.resize(q,r);a._.moved||a.layout();c.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mouseup",c);CKEDITOR.document.removeListener("mousemove",b);n&&(n.remove(),n=null);if(CKEDITOR.env.ie6Compat){var a=B.getChild(0).getFrameDocument();a.removeListener("mouseup",c);a.removeListener("mousemove",b)}}var f=a.definition,d=f.resizable;
if(d!=CKEDITOR.DIALOG_RESIZE_NONE){var e=a.getParentEditor(),g,h,k,m,l,n,q=CKEDITOR.tools.addFunction(function(f){l=a.getSize();var d=a.parts.contents;d.$.getElementsByTagName("iframe").length&&(n=CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%;"\x3e\x3c/div\x3e'),d.append(n));h=l.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.quirks));g=l.width-a.parts.contents.getSize("width",
1);m={x:f.screenX,y:f.screenY};k=CKEDITOR.document.getWindow().getViewPaneSize();CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);CKEDITOR.env.ie6Compat&&(d=B.getChild(0).getFrameDocument(),d.on("mousemove",b),d.on("mouseup",c));f.preventDefault&&f.preventDefault()});a.on("load",function(){var b="";d==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":d==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical");b=CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer'+
b+" cke_resizer_"+e.lang.dir+'" title\x3d"'+CKEDITOR.tools.htmlEncode(e.lang.common.resize)+'" onmousedown\x3d"CKEDITOR.tools.callFunction('+q+', event )"\x3e'+("ltr"==e.lang.dir?"◢":"◣")+"\x3c/div\x3e");a.parts.footer.append(b,1)});e.on("destroy",function(){CKEDITOR.tools.removeFunction(q)})}}function n(a){a.data.preventDefault(1)}function u(a){var b=CKEDITOR.document.getWindow(),c=a.config,f=CKEDITOR.skinName||a.config.skin,d=c.dialog_backgroundCoverColor||("moono-lisa"==f?"black":"white"),f=c.dialog_backgroundCoverOpacity,
e=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(d,f,e),g=C[c];g?g.show():(e=['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ',CKEDITOR.env.ie6Compat?"absolute":"fixed","; z-index: ",e,"; top: 0px; left: 0px; ",CKEDITOR.env.ie6Compat?"":"background-color: "+d,'" class\x3d"cke_dialog_background_cover"\x3e'],CKEDITOR.env.ie6Compat&&(d="\x3chtml\x3e\x3cbody style\x3d\\'background-color:"+d+";\\'\x3e\x3c/body\x3e\x3c/html\x3e",e.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'),
e.push("void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.write( '"+d+"' );document.close();")+"})())"),e.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')),e.push("\x3c/div\x3e"),g=CKEDITOR.dom.element.createFromHtml(e.join("")),g.setOpacity(void 0!==f?f:.5),g.on("keydown",n),g.on("keypress",n),g.on("keyup",n),g.appendTo(CKEDITOR.document.getBody()),
C[c]=g);a.focusManager.add(g);B=g;a=function(){var a=b.getViewPaneSize();g.setStyles({width:a.width+"px",height:a.height+"px"})};var h=function(){var a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop;g.setStyles({left:a.x+"px",top:a.y+"px"});if(c){do a=c.getPosition(),c.move(a.x,a.y);while(c=c._.parentDialog)}};y=a;b.on("resize",a);a();CKEDITOR.env.mac&&CKEDITOR.env.webkit||g.focus();if(CKEDITOR.env.ie6Compat){var k=function(){h();arguments.callee.prevScrollHandler.apply(this,arguments)};b.$.setTimeout(function(){k.prevScrollHandler=
window.onscroll||function(){};window.onscroll=k},0);h()}}function v(a){B&&(a.focusManager.remove(B),a=CKEDITOR.document.getWindow(),B.hide(),a.removeListener("resize",y),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||null},0),y=null)}var x=CKEDITOR.tools.cssLength,p='\x3cdiv class\x3d"cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog '+
CKEDITOR.env.cssClass+' cke_{langDir}" style\x3d"position:absolute" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
CKEDITOR.dialog=function(b,g){function h(){var a=z._.focusList;a.sort(function(a,b){return a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex});for(var b=a.length,c=0;c<b;c++)a[c].focusIndex=c}function k(a){var b=z._.focusList;a=a||0;if(!(1>b.length)){var c=z._.currentFocusIndex;z._.tabBarMode&&0>a&&(c=0);try{b[c].getInputElement().$.blur()}catch(f){}var d=c,e=1<z._.pageCount;do{d+=a;if(e&&!z._.tabBarMode&&(d==b.length||-1==d)){z._.tabBarMode=!0;z._.tabs[z._.currentTabId][0].focus();
z._.currentFocusIndex=-1;return}d=(d+b.length)%b.length;if(d==c)break}while(a&&!b[d].isFocusable());b[d].focus();"text"==b[d].type&&b[d].select()}}function n(c){if(z==CKEDITOR.dialog._.currentTop){var f=c.data.getKeystroke(),d="rtl"==b.lang.dir,g=[37,38,39,40];v=x=0;if(9==f||f==CKEDITOR.SHIFT+9)k(f==CKEDITOR.SHIFT+9?-1:1),v=1;else if(f==CKEDITOR.ALT+121&&!z._.tabBarMode&&1<z.getPageCount())z._.tabBarMode=!0,z._.tabs[z._.currentTabId][0].focus(),z._.currentFocusIndex=-1,v=1;else if(-1!=CKEDITOR.tools.indexOf(g,
f)&&z._.tabBarMode)f=-1!=CKEDITOR.tools.indexOf([d?39:37,38],f)?a.call(z):e.call(z),z.selectPage(f),z._.tabs[f][0].focus(),v=1;else if(13!=f&&32!=f||!z._.tabBarMode)if(13==f)f=c.data.getTarget(),f.is("a","button","select","textarea")||f.is("input")&&"button"==f.$.type||((f=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(f.click,0,f),v=1),x=1;else if(27==f)(f=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(f.click,0,f):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),x=1;else return;else this.selectPage(this._.currentTabId),
this._.tabBarMode=!1,this._.currentFocusIndex=-1,k(1),v=1;q(c)}}function q(a){v?a.data.preventDefault(1):x&&a.data.stopPropagation()}var u=CKEDITOR.dialog._.dialogDefinitions[g],w=CKEDITOR.tools.clone(t),A=b.config.dialog_buttonsOrder||"OS",C=b.lang.dir,B={},v,x;("OS"==A&&CKEDITOR.env.mac||"rtl"==A&&"ltr"==C||"ltr"==A&&"rtl"==C)&&w.buttons.reverse();u=CKEDITOR.tools.extend(u(b),w);u=CKEDITOR.tools.clone(u);u=new r(this,u);w=m(b);this._={editor:b,element:w.element,name:g,contentSize:{width:0,height:0},
size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],currentFocusIndex:0,hasFocus:!1};this.parts=w.parts;CKEDITOR.tools.setTimeout(function(){b.fire("ariaWidget",this.parts.contents)},0,this);w={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};w["rtl"==C?"right":"left"]=0;this.parts.dialog.setStyles(w);CKEDITOR.event.call(this);this.definition=u=CKEDITOR.fire("dialogDefinition",
{name:g,definition:u},b).definition;if(!("removeDialogTabs"in b._)&&b.config.removeDialogTabs){w=b.config.removeDialogTabs.split(";");for(C=0;C<w.length;C++)if(A=w[C].split(":"),2==A.length){var p=A[0];B[p]||(B[p]=[]);B[p].push(A[1])}b._.removeDialogTabs=B}if(b._.removeDialogTabs&&(B=b._.removeDialogTabs[g]))for(C=0;C<B.length;C++)u.removeContents(B[C]);if(u.onLoad)this.on("load",u.onLoad);if(u.onShow)this.on("show",u.onShow);if(u.onHide)this.on("hide",u.onHide);if(u.onOk)this.on("ok",function(a){b.fire("saveSnapshot");
setTimeout(function(){b.fire("saveSnapshot")},0);!1===u.onOk.call(this,a)&&(a.data.hide=!1)});this.state=CKEDITOR.DIALOG_STATE_IDLE;if(u.onCancel)this.on("cancel",function(a){!1===u.onCancel.call(this,a)&&(a.data.hide=!1)});var z=this,J=function(a){var b=z._.contents,c=!1,f;for(f in b)for(var d in b[f])if(c=a.call(this,b[f][d]))return};this.on("ok",function(a){J(function(b){if(b.validate){var f=b.validate(this),d="string"==typeof f||!1===f;d&&(a.data.hide=!1,a.stop());c.call(b,!d,"string"==typeof f?
f:void 0);return d}})},this,null,0);this.on("cancel",function(a){J(function(c){if(c.isChanged())return b.config.dialog_noConfirmCancel||confirm(b.lang.common.confirmCancel)||(a.data.hide=!1),!0})},this,null,0);this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide();a.data.preventDefault()},this);this.changeFocus=k;var y=this._.element;b.focusManager.add(y,1);this.on("show",function(){y.on("keydown",n,this);if(CKEDITOR.env.gecko)y.on("keypress",q,this)});this.on("hide",
function(){y.removeListener("keydown",n);CKEDITOR.env.gecko&&y.removeListener("keypress",q);J(function(a){d.apply(a)})});this.on("iframeAdded",function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",n,this,null,0)});this.on("show",function(){h();var a=1<z._.pageCount;b.config.dialog_startupFocusTab&&a?(z._.tabBarMode=!0,z._.tabs[z._.currentTabId][0].focus(),z._.currentFocusIndex=-1):this._.hasFocus||(this._.currentFocusIndex=a?-1:this._.focusList.length-1,u.onFocus?
(a=u.onFocus.call(this))&&a.focus():k(1))},this,null,4294967295);if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst();b.remove();b.appendTo(a)},this);l(this);f(this);(new CKEDITOR.dom.text(u.title,CKEDITOR.document)).appendTo(this.parts.title);for(C=0;C<u.contents.length;C++)(B=u.contents[C])&&this.addPage(B);this.parts.tabs.on("click",function(a){var b=a.data.getTarget();b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),
this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,k(1)),a.data.preventDefault())},this);C=[];B=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:u.buttons},C).getChild();this.parts.footer.setHtml(C.join(""));for(C=0;C<B.length;C++)this._.buttons[B[C].id]=B[C]};CKEDITOR.dialog.prototype={destroy:function(){this.hide();this._.element.remove()},resize:function(){return function(a,b){this._.contentSize&&this._.contentSize.width==
a&&this._.contentSize.height==b||(CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x=CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b})}}(),getSize:function(){var a=this._.element.getFirst();
return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var f=this._.element.getFirst(),d="rtl"==this._.editor.lang.dir,e="fixed"==f.getComputedStyle("position");CKEDITOR.env.ie&&f.setStyle("zoom","100%");e&&this._.position&&this._.position.x==a&&this._.position.y==b||(this._.position={x:a,y:b},e||(e=CKEDITOR.document.getWindow().getScrollPosition(),a+=e.x,b+=e.y),d&&(e=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-e.width-a),b={top:(0<b?b:0)+"px"},
b[d?"right":"left"]=(0<a?a:0)+"px",f.setStyles(b),c&&(this._.moved=1))},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},show:function(){var a=this._.element,b=this.definition;a.getParent()&&a.getParent().equals(CKEDITOR.document.getBody())?a.setStyle("display","block"):a.appendTo(CKEDITOR.document.getBody());this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight);this.reset();null===
this._.currentTabId&&this.selectPage(this.definition.contents[0].id);null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this,this._.parentDialog=null,u(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/
2),CKEDITOR.dialog._.currentTop=this);a.on("keydown",I);a.on("keyup",E);this._.hasFocus=!1;for(var c in b.contents)if(b.contents[c]){var a=b.contents[c],f=this._.tabs[a.id],d=a.requiredContent,e=0;if(f){for(var g in this._.contents[a.id]){var k=this._.contents[a.id][g];"hbox"!=k.type&&"vbox"!=k.type&&k.getInputElement()&&(k.requiredContent&&!this._.editor.activeFilter.check(k.requiredContent)?k.disable():(k.enable(),e++))}!e||d&&!this._.editor.activeFilter.check(d)?f[0].addClass("cke_dialog_tab_disabled"):
f[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout();h(this);this.parts.dialog.setStyle("visibility","");this.fireOnce("load",{});CKEDITOR.ui.fire("ready",this);this.fire("show",{});this._.editor.fire("dialogShow",this);this._.parentDialog||this._.editor.focusManager.lock();this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),f=
(c.width-b.width)/2,d=(c.height-b.height)/2;CKEDITOR.env.ie6Compat||(b.height+(0<d?d:0)>c.height||b.width+(0<f?f:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed"));this.move(this._.moved?this._.position.x:f,this._.moved?this._.position.y:d)},foreach:function(a){for(var b in this._.contents)for(var c in this._.contents[b])a.call(this,this._.contents[b][c]);return this},reset:function(){var a=function(a){a.reset&&a.reset(1)};return function(){this.foreach(a);return this}}(),
setupContent:function(){var a=arguments;this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},commitContent:function(){var a=arguments;this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur();b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{});this._.editor.fire("dialogHide",this);this.selectPage(this._.tabIdList[0]);var a=this._.element;a.setStyle("display","none");this.parts.dialog.setStyle("visibility",
"hidden");for(F(this);CKEDITOR.dialog._.currentTop!=this;)CKEDITOR.dialog._.currentTop.hide();if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst();b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else v(this._.editor);if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-=10;else{CKEDITOR.dialog._.currentZIndex=null;a.removeListener("keydown",I);a.removeListener("keyup",E);var c=this._.editor;
c.focus();setTimeout(function(){c.focusManager.unlock();CKEDITOR.env.iOS&&c.window.focus()},0)}delete this._.parentDialog;this.foreach(function(a){a.resetInitValue&&a.resetInitValue()});this.setState(CKEDITOR.DIALOG_STATE_IDLE)}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var b=[],c=a.label?' title\x3d"'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",f=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,{type:"vbox",className:"cke_dialog_page_contents",
children:a.elements,expand:!!a.expand,padding:a.padding,style:a.style||"width: 100%;"},b),d=this._.contents[a.id]={},e=f.getChild(),g=0;f=e.shift();)f.notAllowed||"hbox"==f.type||"vbox"==f.type||g++,d[f.id]=f,"function"==typeof f.getChild&&e.push.apply(e,f.getChild());g||(a.hidden=!0);b=CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role","tabpanel");f=CKEDITOR.env;d="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber();c=CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"',
0<this._.pageCount?" cke_last":"cke_first",c,a.hidden?' style\x3d"display:none"':"",' id\x3d"',d,'"',f.gecko&&!f.hc?"":' href\x3d"javascript:void(0)"',' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e',a.label,"\x3c/a\x3e"].join(""));b.setAttribute("aria-labelledby",d);this._.tabs[a.id]=[c,b];this._.tabIdList.push(a.id);!a.hidden&&this._.pageCount++;this._.lastTab=c;this.updateStyle();b.setAttribute("name",a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey&&
(K(this,this,"CTRL+"+a.accessKey,M,G),this._.accessKeyMap["CTRL+"+a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var c in this._.tabs){var f=this._.tabs[c][0],d=this._.tabs[c][1];c!=a&&(f.removeClass("cke_dialog_tab_selected"),d.hide());d.setAttribute("aria-hidden",c!=a)}var e=this._.tabs[a];e[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat||
CKEDITOR.env.ie7Compat?(b(e[1]),e[1].show(),setTimeout(function(){b(e[1],1)},0)):e[1].show();this._.currentTabId=a;this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(b){var c=this._.tabs[b]&&this._.tabs[b][0];c&&1!=this._.pageCount&&c.isVisible()&&(b==this._.currentTabId&&this.selectPage(a.call(this)),c.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=
this._.tabs[a]&&this._.tabs[a][0])a.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},getContentElement:function(a,b){var c=this._.contents[a];return c&&c[b]},getValueOf:function(a,b){return this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()},
enableButton:function(a){return this._.buttons[a].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof b)b=this._.focusList.length,this._.focusList.push(new k(this,a,b));else{this._.focusList.splice(b,0,new k(this,a,b));for(var c=b+1;c<this._.focusList.length;c++)this._.focusList[c].focusIndex++}},
setState:function(a){if(this.state!=a){this.state=a;if(a==CKEDITOR.DIALOG_STATE_BUSY){if(!this.parts.spinner){var b=this.getParentEditor().lang.dir,c={attributes:{"class":"cke_dialog_spinner"},styles:{"float":"rtl"==b?"right":"left"}};c.styles["margin-"+("rtl"==b?"left":"right")]="8px";this.parts.spinner=CKEDITOR.document.createElement("div",c);this.parts.spinner.setHtml("\x26#8987;");this.parts.spinner.appendTo(this.parts.title,1)}this.parts.spinner.show();this.getButton("ok").disable()}else a==
CKEDITOR.DIALOG_STATE_IDLE&&(this.parts.spinner&&this.parts.spinner.hide(),this.getButton("ok").enable());this.fire("state",a)}}};CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){this._.dialogDefinitions[a]&&"function"!=typeof b||(this._.dialogDefinitions[a]=b)},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs;return!(a&&a.match(new RegExp("(?:^|;)"+b+":"+c+"(?:$|;)",
"i")))},okButton:function(){var a=function(a,b){b=b||{};return CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok",onClick:function(a){a=a.data.dialog;!1!==a.fire("ok",{hide:!0}).hide&&a.hide()}},b,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),cancelButton:function(){var a=function(a,b){b=b||{};return CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,
"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog;!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},b,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}});CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);
var t={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},w=function(a,b,c){for(var f=0,d;d=a[f];f++)if(d.id==b||c&&d[c]&&(d=w(d[c],b,c)))return d;return null},q=function(a,b,c,f,d){if(c){for(var e=0,g;g=a[e];e++){if(g.id==c)return a.splice(e,0,b),b;if(f&&g[f]&&(g=q(g[f],b,c,f,!0)))return g}if(d)return null}a.push(b);return b},A=function(a,b,c){for(var f=0,d;d=a[f];f++){if(d.id==b)return a.splice(f,1);if(c&&d[c]&&(d=A(d[c],
b,c)))return d}return null},r=function(a,b){this.dialog=a;for(var c=b.contents,f=0,d;d=c[f];f++)c[f]=d&&new g(a,d);CKEDITOR.tools.extend(this,b)};r.prototype={getContents:function(a){return w(this.contents,a)},getButton:function(a){return w(this.buttons,a)},addContents:function(a,b){return q(this.contents,a,b)},addButton:function(a,b){return q(this.buttons,a,b)},removeContents:function(a){A(this.contents,a)},removeButton:function(a){A(this.buttons,a)}};g.prototype={get:function(a){return w(this.elements,
a,"children")},add:function(a,b){return q(this.elements,a,b,"children")},remove:function(a){A(this.elements,a,"children")}};var y,C={},B,z={},I=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,f=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);(b=z[(b?"CTRL+":"")+(c?"ALT+":"")+(f?"SHIFT+":"")+d])&&b.length&&(b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault())},E=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,
f=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);(b=z[(b?"CTRL+":"")+(c?"ALT+":"")+(f?"SHIFT+":"")+d])&&b.length&&(b=b[b.length-1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),a.data.preventDefault()))},K=function(a,b,c,f,d){(z[c]||(z[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:d||a.accessKeyUp,keydown:f||a.accessKeyDown})},F=function(a){for(var b in z){for(var c=z[b],f=c.length-1;0<=f;f--)c[f].dialog!=a&&c[f].uiElement!=a||c.splice(f,1);0===c.length&&delete z[b]}},G=function(a,
b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},M=function(){};(function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,f,d,e,g){if(!(4>arguments.length)){var h=(f.call?f(b):f)||"div",k=["\x3c",h," "],m=(d&&d.call?d(b):d)||{},l=(e&&e.call?e(b):e)||{},n=(g&&g.call?g.call(this,a,b):g)||"",q=this.domId=l.id||CKEDITOR.tools.getNextId()+"_uiElement";b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(m.display="none",this.notAllowed=!0);l.id=q;var r={};b.type&&(r["cke_dialog_ui_"+
b.type]=1);b.className&&(r[b.className]=1);b.disabled&&(r.cke_disabled=1);for(var t=l["class"]&&l["class"].split?l["class"].split(" "):[],q=0;q<t.length;q++)t[q]&&(r[t[q]]=1);t=[];for(q in r)t.push(q);l["class"]=t.join(" ");b.title&&(l.title=b.title);r=(b.style||"").split(";");b.align&&(t=b.align,m["margin-left"]="left"==t?0:"auto",m["margin-right"]="right"==t?0:"auto");for(q in m)r.push(q+":"+m[q]);b.hidden&&r.push("display:none");for(q=r.length-1;0<=q;q--)""===r[q]&&r.splice(q,1);0<r.length&&(l.style=
(l.style?l.style+"; ":"")+r.join("; "));for(q in l)k.push(q+'\x3d"'+CKEDITOR.tools.htmlEncode(l[q])+'" ');k.push("\x3e",n,"\x3c/",h,"\x3e");c.push(k.join(""));(this._||(this._={})).dialog=a;"boolean"==typeof b.isChanged&&(this.isChanged=function(){return b.isChanged});"function"==typeof b.isChanged&&(this.isChanged=b.isChanged);"function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return function(c){a.call(this,b.setValue.call(this,c))}}));"function"==typeof b.getValue&&
(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return function(){return b.getValue.call(this,a.call(this))}}));CKEDITOR.event.implementOn(this);this.registerEvents(b);this.accessKeyUp&&this.accessKeyDown&&b.accessKey&&K(this,a,"CTRL+"+b.accessKey);var u=this;a.on("load",function(){var b=u.getInputElement();if(b){var c=u.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?"cke_dialog_ui_focused":"";b.on("focus",function(){a._.tabBarMode=!1;a._.hasFocus=!0;u.fire("focus");
c&&this.addClass(c)});b.on("blur",function(){u.fire("blur");c&&this.removeClass(c)})}});CKEDITOR.tools.extend(this,b);this.keyboardFocusable&&(this.tabIndex=b.tabIndex||0,this.focusIndex=a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=u.focusIndex}))}},hbox:function(a,b,c,f,d){if(!(4>arguments.length)){this._||(this._={});var e=this._.children=b,g=d&&d.widths||null,h=d&&d.height||null,k,l={role:"presentation"};d&&d.align&&(l.align=d.align);CKEDITOR.ui.dialog.uiElement.call(this,
a,d||{type:"hbox"},f,"table",{},l,function(){var a=['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e'];for(k=0;k<c.length;k++){var b="cke_dialog_ui_hbox_child",f=[];0===k&&(b="cke_dialog_ui_hbox_first");k==c.length-1&&(b="cke_dialog_ui_hbox_last");a.push('\x3ctd class\x3d"',b,'" role\x3d"presentation" ');g?g[k]&&f.push("width:"+x(g[k])):f.push("width:"+Math.floor(100/c.length)+"%");h&&f.push("height:"+x(h));d&&void 0!==d.padding&&f.push("padding:"+x(d.padding));CKEDITOR.env.ie&&CKEDITOR.env.quirks&&
e[k].align&&f.push("text-align:"+e[k].align);0<f.length&&a.push('style\x3d"'+f.join("; ")+'" ');a.push("\x3e",c[k],"\x3c/td\x3e")}a.push("\x3c/tr\x3e\x3c/tbody\x3e");return a.join("")})}},vbox:function(a,b,c,f,d){if(!(3>arguments.length)){this._||(this._={});var e=this._.children=b,g=d&&d.width||null,h=d&&d.heights||null;CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"vbox"},f,"div",null,{role:"presentation"},function(){var b=['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" '];
b.push('style\x3d"');d&&d.expand&&b.push("height:100%;");b.push("width:"+x(g||"100%"),";");CKEDITOR.env.webkit&&b.push("float:none;");b.push('"');b.push('align\x3d"',CKEDITOR.tools.htmlEncode(d&&d.align||("ltr"==a.getParentEditor().lang.dir?"left":"right")),'" ');b.push("\x3e\x3ctbody\x3e");for(var f=0;f<c.length;f++){var k=[];b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" ');g&&k.push("width:"+x(g||"100%"));h?k.push("height:"+x(h[f])):d&&d.expand&&k.push("height:"+Math.floor(100/c.length)+"%");
d&&void 0!==d.padding&&k.push("padding:"+x(d.padding));CKEDITOR.env.ie&&CKEDITOR.env.quirks&&e[f].align&&k.push("text-align:"+e[f].align);0<k.length&&b.push('style\x3d"',k.join("; "),'" ');b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e',c[f],"\x3c/td\x3e\x3c/tr\x3e")}b.push("\x3c/tbody\x3e\x3c/table\x3e");return b.join("")})}}}})();CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},
setValue:function(a,b){this.getInputElement().setValue(a);!b&&this.fire("change",{value:a});return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a=this.getInputElement();(a=a.getParent())&&-1==a.$.className.search("cke_dialog_page_contents"););if(!a)return this;a=a.getAttribute("name");this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a);return this},focus:function(){this.selectParentTab().getInputElement().focus();
return this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,f=function(a,b,c,f){b.on("load",function(){a.getInputElement().on(c,f,a)})},d;for(d in a)if(c=d.match(b))this.eventProcessors[d]?this.eventProcessors[d].call(this,this._.dialog,a[d]):f(this,this._.dialog,c[1].toLowerCase(),a[d]);return this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},
disable:function(){var a=this.getElement();this.getInputElement().setAttribute("disabled","true");a.addClass("cke_disabled")},enable:function(){var a=this.getElement();this.getInputElement().removeAttribute("disabled");a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return this.isEnabled()&&this.isVisible()?!0:!1}};CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,
{getChild:function(a){if(1>arguments.length)return this._.children.concat();a.splice||(a=[a]);return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild?this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0);CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox;(function(){var a={build:function(a,b,c){for(var f=b.children,d,e=[],g=[],h=0;h<f.length&&(d=f[h]);h++){var k=[];e.push(k);g.push(CKEDITOR.dialog._.uiElementBuilders[d.type].build(a,d,k))}return new CKEDITOR.ui.dialog[b.type](a,
g,e,c,b)}};CKEDITOR.dialog.addUIElement("hbox",a);CKEDITOR.dialog.addUIElement("vbox",a)})();CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;CKEDITOR.tools.extend(this,b,!0)};CKEDITOR.dialogCommand.prototype={exec:function(a){var b=this.tabId;a.openDialog(this.dialogName,function(a){b&&a.selectPage(b)})},canUndo:!1,editorFocus:1};(function(){var a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,f=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,
e=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1;CKEDITOR.VALIDATE_AND=2;CKEDITOR.dialog.validate={functions:function(){var a=arguments;return function(){var b=this&&this.getValue?this.getValue():a[0],c,f=CKEDITOR.VALIDATE_AND,d=[],e;for(e=0;e<a.length;e++)if("function"==typeof a[e])d.push(a[e]);else break;e<a.length&&"string"==typeof a[e]&&(c=a[e],e++);e<a.length&&"number"==typeof a[e]&&(f=a[e]);var g=f==CKEDITOR.VALIDATE_AND?!0:!1;for(e=0;e<d.length;e++)g=f==CKEDITOR.VALIDATE_AND?g&&
d[e](b):g||d[e](b);return g?!0:c}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c;return a.test(c)?!0:b}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b,a)},number:function(a){return this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return this.functions(function(a){return f.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},
a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return this.functions(function(b){return b!=a},b)}};CKEDITOR.on("instanceDestroyed",function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b;b=CKEDITOR.dialog._.currentTop;)b.hide();for(var c in C)C[c].remove();C={}}a=a.editor._.storedDialogs;for(var f in a)a[f].destroy()})})();CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,f=CKEDITOR.dialog._.dialogDefinitions[a];
null===CKEDITOR.dialog._.currentTop&&u(this);if("function"==typeof f)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new CKEDITOR.dialog(this,a)),b&&b.call(c,c),c.show();else{if("failed"==f)throw v(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading definition.');"string"==typeof f&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f),function(){"function"!=typeof CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed");this.openDialog(a,
b)},this,0,1)}CKEDITOR.skin.loadPart("dialog");return c}})}(),CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(a){a.on("doubleclick",function(e){e.data.dialog&&a.openDialog(e.data.dialog)},null,null,999)}}),function(){CKEDITOR.plugins.add("a11yhelp",{requires:"dialog",availableLangs:{af:1,ar:1,az:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,"de-ch":1,el:1,en:1,"en-au":1,"en-gb":1,eo:1,es:1,"es-mx":1,et:1,eu:1,fa:1,fi:1,fo:1,fr:1,"fr-ca":1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,
ku:1,lt:1,lv:1,mk:1,mn:1,nb:1,nl:1,no:1,oc:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sr:1,"sr-latn":1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},init:function(a){var e=this;a.addCommand("a11yHelp",{exec:function(){var b=a.langCode,b=e.availableLangs[b]?b:e.availableLangs[b.replace(/-.*/,"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path+"dialogs/lang/"+b+".js"),function(){a.lang.a11yhelp=e.langEntries[b];a.openDialog("a11yHelp")})},modes:{wysiwyg:1,source:1},
readOnly:1,canUndo:!1});a.setKeystroke(CKEDITOR.ALT+48,"a11yHelp");CKEDITOR.dialog.add("a11yHelp",this.path+"dialogs/a11yhelp.js");a.on("ariaEditorHelpLabel",function(b){b.data.label=a.lang.common.editorHelp})}})}(),CKEDITOR.plugins.add("about",{requires:"dialog",init:function(a){var e=a.addCommand("about",new CKEDITOR.dialogCommand("about"));e.modes={wysiwyg:1,source:1};e.canUndo=!1;e.readOnly=1;a.ui.addButton&&a.ui.addButton("About",{label:a.lang.about.dlgTitle,command:"about",toolbar:"about"});
CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}}),CKEDITOR.plugins.add("basicstyles",{init:function(a){var e=0,b=function(b,d,g,l){if(l){l=new CKEDITOR.style(l);var f=c[g];f.unshift(l);a.attachStyleStateChange(l,function(b){!a.readOnly&&a.getCommand(g).setState(b)});a.addCommand(g,new CKEDITOR.styleCommand(l,{contentForms:f}));a.ui.addButton&&a.ui.addButton(b,{label:d,command:g,toolbar:"basicstyles,"+(e+=10)})}},c={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==
a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},d=a.config,m=a.lang.basicstyles;b("Bold",m.bold,"bold",d.coreStyles_bold);b("Italic",m.italic,"italic",d.coreStyles_italic);b("Underline",m.underline,"underline",d.coreStyles_underline);b("Strike",
m.strike,"strike",d.coreStyles_strike);b("Subscript",m.subscript,"subscript",d.coreStyles_subscript);b("Superscript",m.superscript,"superscript",d.coreStyles_superscript);a.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}}),CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"},CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"},CKEDITOR.config.coreStyles_underline={element:"u"},CKEDITOR.config.coreStyles_strike={element:"s",
overrides:"strike"},CKEDITOR.config.coreStyles_subscript={element:"sub"},CKEDITOR.config.coreStyles_superscript={element:"sup"},function(){var a={exec:function(a){var b=a.getCommand("blockquote").state,c=a.getSelection(),d=c&&c.getRanges()[0];if(d){var m=c.createBookmarks();if(CKEDITOR.env.ie){var k=m[0].startNode,h=m[0].endNode,g;if(k&&"blockquote"==k.getParent().getName())for(g=k;g=g.getNext();)if(g.type==CKEDITOR.NODE_ELEMENT&&g.isBlockBoundary()){k.move(g,!0);break}if(h&&"blockquote"==h.getParent().getName())for(g=
h;g=g.getPrevious();)if(g.type==CKEDITOR.NODE_ELEMENT&&g.isBlockBoundary()){h.move(g);break}}var l=d.createIterator();l.enlargeBr=a.config.enterMode!=CKEDITOR.ENTER_BR;if(b==CKEDITOR.TRISTATE_OFF){for(k=[];b=l.getNextParagraph();)k.push(b);1>k.length&&(b=a.document.createElement(a.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),h=m.shift(),d.insertNode(b),b.append(new CKEDITOR.dom.text("﻿",a.document)),d.moveToBookmark(h),d.selectNodeContents(b),d.collapse(!0),h=d.createBookmark(),k.push(b),m.unshift(h));
g=k[0].getParent();d=[];for(h=0;h<k.length;h++)b=k[h],g=g.getCommonAncestor(b.getParent());for(b={table:1,tbody:1,tr:1,ol:1,ul:1};b[g.getName()];)g=g.getParent();for(h=null;0<k.length;){for(b=k.shift();!b.getParent().equals(g);)b=b.getParent();b.equals(h)||d.push(b);h=b}for(;0<d.length;)if(b=d.shift(),"blockquote"==b.getName()){for(h=new CKEDITOR.dom.documentFragment(a.document);b.getFirst();)h.append(b.getFirst().remove()),k.push(h.getLast());h.replace(b)}else k.push(b);d=a.document.createElement("blockquote");
for(d.insertBefore(k[0]);0<k.length;)b=k.shift(),d.append(b)}else if(b==CKEDITOR.TRISTATE_ON){h=[];for(g={};b=l.getNextParagraph();){for(k=d=null;b.getParent();){if("blockquote"==b.getParent().getName()){d=b.getParent();k=b;break}b=b.getParent()}d&&k&&!k.getCustomData("blockquote_moveout")&&(h.push(k),CKEDITOR.dom.element.setMarker(g,k,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(g);b=[];k=[];for(g={};0<h.length;)l=h.shift(),d=l.getParent(),l.getPrevious()?l.getNext()?(l.breakParent(l.getParent()),
k.push(l.getNext())):l.remove().insertAfter(d):l.remove().insertBefore(d),d.getCustomData("blockquote_processed")||(k.push(d),CKEDITOR.dom.element.setMarker(g,d,"blockquote_processed",!0)),b.push(l);CKEDITOR.dom.element.clearAllMarkers(g);for(h=k.length-1;0<=h;h--){d=k[h];a:{g=d;for(var l=0,f=g.getChildCount(),n=void 0;l<f&&(n=g.getChild(l));l++)if(n.type==CKEDITOR.NODE_ELEMENT&&n.isBlockBoundary()){g=!1;break a}g=!0}g&&d.remove()}if(a.config.enterMode==CKEDITOR.ENTER_BR)for(d=!0;b.length;)if(l=b.shift(),
"div"==l.getName()){h=new CKEDITOR.dom.documentFragment(a.document);!d||!l.getPrevious()||l.getPrevious().type==CKEDITOR.NODE_ELEMENT&&l.getPrevious().isBlockBoundary()||h.append(a.document.createElement("br"));for(d=l.getNext()&&!(l.getNext().type==CKEDITOR.NODE_ELEMENT&&l.getNext().isBlockBoundary());l.getFirst();)l.getFirst().remove().appendTo(h);d&&h.append(a.document.createElement("br"));h.replace(l);d=!1}}c.selectBookmarks(m);a.focus()}},refresh:function(a,b){this.setState(a.elementPath(b.block||
b.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",allowedContent:"blockquote",requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(e){e.blockless||(e.addCommand("blockquote",a),e.ui.addButton&&e.ui.addButton("Blockquote",{label:e.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})}(),"use strict",function(){function a(a,c){CKEDITOR.tools.extend(this,c,{editor:a,id:"cke-"+CKEDITOR.tools.getUniqueId(),
area:a._.notificationArea});c.type||(this.type="info");this.element=this._createElement();a.plugins.clipboard&&CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element)}function e(a){var c=this;this.editor=a;this.notifications=[];this.element=this._createElement();this._uiBuffer=CKEDITOR.tools.eventsBuffer(10,this._layout,this);this._changeBuffer=CKEDITOR.tools.eventsBuffer(500,this._layout,this);a.on("destroy",function(){c._removeListeners();c.element.remove()})}CKEDITOR.plugins.add("notification",
{init:function(a){function c(a){var b=new CKEDITOR.dom.element("div");b.setStyles({position:"fixed","margin-left":"-9999px"});b.setAttributes({"aria-live":"assertive","aria-atomic":"true"});b.setText(a);CKEDITOR.document.getBody().append(b);setTimeout(function(){b.remove()},100)}a._.notificationArea=new e(a);a.showNotification=function(c,e,k){var h,g;"progress"==e?h=k:g=k;c=new CKEDITOR.plugins.notification(a,{message:c,type:e,progress:h,duration:g});c.show();return c};a.on("key",function(d){if(27==
d.data.keyCode){var e=a._.notificationArea.notifications;e.length&&(c(a.lang.notification.closed),e[e.length-1].hide(),d.cancel())}})}});a.prototype={show:function(){!1!==this.editor.fire("notificationShow",{notification:this})&&(this.area.add(this),this._hideAfterTimeout())},update:function(a){var c=!0;!1===this.editor.fire("notificationUpdate",{notification:this,options:a})&&(c=!1);var d=this.element,e=d.findOne(".cke_notification_message"),k=d.findOne(".cke_notification_progress"),h=a.type;d.removeAttribute("role");
a.progress&&"progress"!=this.type&&(h="progress");h&&(d.removeClass(this._getClass()),d.removeAttribute("aria-label"),this.type=h,d.addClass(this._getClass()),d.setAttribute("aria-label",this.type),"progress"!=this.type||k?"progress"!=this.type&&k&&k.remove():(k=this._createProgressElement(),k.insertBefore(e)));void 0!==a.message&&(this.message=a.message,e.setHtml(this.message));void 0!==a.progress&&(this.progress=a.progress,k&&k.setStyle("width",this._getPercentageProgress()));c&&a.important&&(d.setAttribute("role",
"alert"),this.isVisible()||this.area.add(this));this.duration=a.duration;this._hideAfterTimeout()},hide:function(){!1!==this.editor.fire("notificationHide",{notification:this})&&this.area.remove(this)},isVisible:function(){return 0<=CKEDITOR.tools.indexOf(this.area.notifications,this)},_createElement:function(){var a=this,c,d,e=this.editor.lang.common.close;c=new CKEDITOR.dom.element("div");c.addClass("cke_notification");c.addClass(this._getClass());c.setAttributes({id:this.id,role:"alert","aria-label":this.type});
"progress"==this.type&&c.append(this._createProgressElement());d=new CKEDITOR.dom.element("p");d.addClass("cke_notification_message");d.setHtml(this.message);c.append(d);d=CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"'+e+'" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e');c.append(d);d.on("click",function(){a.editor.focus();a.hide()});return c},_getClass:function(){return"progress"==
this.type?"cke_notification_info":"cke_notification_"+this.type},_createProgressElement:function(){var a=new CKEDITOR.dom.element("span");a.addClass("cke_notification_progress");a.setStyle("width",this._getPercentageProgress());return a},_getPercentageProgress:function(){return Math.round(100*(this.progress||0))+"%"},_hideAfterTimeout:function(){var a=this,c;this._hideTimeoutId&&clearTimeout(this._hideTimeoutId);if("number"==typeof this.duration)c=this.duration;else if("info"==this.type||"success"==
this.type)c="number"==typeof this.editor.config.notification_duration?this.editor.config.notification_duration:5E3;c&&(a._hideTimeoutId=setTimeout(function(){a.hide()},c))}};e.prototype={add:function(a){this.notifications.push(a);this.element.append(a.element);1==this.element.getChildCount()&&(CKEDITOR.document.getBody().append(this.element),this._attachListeners());this._layout()},remove:function(a){var c=CKEDITOR.tools.indexOf(this.notifications,a);0>c||(this.notifications.splice(c,1),a.element.remove(),
this.element.getChildCount()||(this._removeListeners(),this.element.remove()))},_createElement:function(){var a=this.editor,c=a.config,d=new CKEDITOR.dom.element("div");d.addClass("cke_notifications_area");d.setAttribute("id","cke_notifications_area_"+a.name);d.setStyle("z-index",c.baseFloatZIndex-2);return d},_attachListeners:function(){var a=CKEDITOR.document.getWindow(),c=this.editor;a.on("scroll",this._uiBuffer.input);a.on("resize",this._uiBuffer.input);c.on("change",this._changeBuffer.input);
c.on("floatingSpaceLayout",this._layout,this,null,20);c.on("blur",this._layout,this,null,20)},_removeListeners:function(){var a=CKEDITOR.document.getWindow(),c=this.editor;a.removeListener("scroll",this._uiBuffer.input);a.removeListener("resize",this._uiBuffer.input);c.removeListener("change",this._changeBuffer.input);c.removeListener("floatingSpaceLayout",this._layout);c.removeListener("blur",this._layout)},_layout:function(){function a(){c.setStyle("left",w(q+e.width-n-u))}var c=this.element,d=
this.editor,e=d.ui.contentsElement.getClientRect(),k=d.ui.contentsElement.getDocumentPosition(),h,g,l=c.getClientRect(),f,n=this._notificationWidth,u=this._notificationMargin;f=CKEDITOR.document.getWindow();var v=f.getScrollPosition(),x=f.getViewPaneSize(),p=CKEDITOR.document.getBody(),t=p.getDocumentPosition(),w=CKEDITOR.tools.cssLength;n&&u||(f=this.element.getChild(0),n=this._notificationWidth=f.getClientRect().width,u=this._notificationMargin=parseInt(f.getComputedStyle("margin-left"),10)+parseInt(f.getComputedStyle("margin-right"),
10));d.toolbar&&(h=d.ui.space("top"),g=h.getClientRect());h&&h.isVisible()&&g.bottom>e.top&&g.bottom<e.bottom-l.height?c.setStyles({position:"fixed",top:w(g.bottom)}):0<e.top?c.setStyles({position:"absolute",top:w(k.y)}):k.y+e.height-l.height>v.y?c.setStyles({position:"fixed",top:0}):c.setStyles({position:"absolute",top:w(k.y+e.height-l.height)});var q="fixed"==c.getStyle("position")?e.left:"static"!=p.getComputedStyle("position")?k.x-t.x:k.x;e.width<n+u?k.x+n+u>v.x+x.width?a():c.setStyle("left",
w(q)):k.x+n+u>v.x+x.width?c.setStyle("left",w(q)):k.x+e.width/2+n/2+u>v.x+x.width?c.setStyle("left",w(q-k.x+v.x+x.width-n-u)):0>e.left+e.width-n-u?a():0>e.left+e.width/2-n/2?c.setStyle("left",w(q-k.x+v.x)):c.setStyle("left",w(q+e.width/2-n/2-u/2))}};CKEDITOR.plugins.notification=a}(),function(){var a='\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';
CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(a+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(a+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var e="";CKEDITOR.env.ie&&(e='return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26');var a=a+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" onclick\x3d"'+e+'CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"')+
'\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',b=CKEDITOR.addTemplate("buttonArrow",'\x3cspan class\x3d"cke_button_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":"")+"\x3c/span\x3e"),c=CKEDITOR.addTemplate("button",a);CKEDITOR.plugins.add("button",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,
CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};CKEDITOR.ui.button.prototype={render:function(a,e){function k(){var b=a.mode;b&&(b=this.modes[b]?void 0!==h[b]?h[b]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,b=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:
b,this.setState(b),this.refresh&&this.refresh())}var h=null,g=CKEDITOR.env,l=this._.id=CKEDITOR.tools.getNextId(),f="",n=this.command,u,v,x;this._.editor=a;var p={id:l,button:this,editor:a,focus:function(){CKEDITOR.document.getById(l).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},t=CKEDITOR.tools.addFunction(function(a){if(p.onkey)return a=new CKEDITOR.dom.event(a),!1!==p.onkey(p,a.getKeystroke())}),w=CKEDITOR.tools.addFunction(function(a){var b;p.onfocus&&
(b=!1!==p.onfocus(p,new CKEDITOR.dom.event(a)));return b}),q=0;p.clickFn=u=CKEDITOR.tools.addFunction(function(){q&&(a.unlockSelection(1),q=0);p.execute();g.iOS&&a.focus()});this.modes?(h={},a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(h[a.mode]=this._.state)},this),a.on("activeFilterChange",k,this),a.on("mode",k,this),!this.readOnly&&a.on("readOnly",k,this)):n&&(n=a.getCommand(n))&&(n.on("state",function(){this.setState(n.state)},this),f+=n.state==CKEDITOR.TRISTATE_ON?
"on":n.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off");var A;if(this.directional)a.on("contentDirChanged",function(b){var c=CKEDITOR.document.getById(this._.id),f=c.getFirst();b=b.data;b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl");f.setAttribute("style",CKEDITOR.skin.getIconStyle(A,"rtl"==b,this.icon,this.iconOffset))},this);n?(v=a.getCommandKeystroke(n))&&(x=CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard,v)):f+="off";v=this.name||this.command;var r=
null,y=this.icon;A=v;this.icon&&!/\./.test(this.icon)?(A=this.icon,y=null):(this.icon&&(r=this.icon),CKEDITOR.env.hidpi&&this.iconHiDpi&&(r=this.iconHiDpi));r?(CKEDITOR.skin.addIcon(r,r),y=null):r=A;f={id:l,name:v,iconName:A,label:this.label,cls:(this.hasArrow?"cke_button_expandable ":"")+(this.className||""),state:f,ariaDisabled:"disabled"==f?"true":"false",title:this.title+(x?" ("+x.display+")":""),ariaShortcut:x?a.lang.common.keyboardShortcut+" "+x.aria:"",titleJs:g.gecko&&!g.hc?"":(this.title||
"").replace("'",""),hasArrow:"string"===typeof this.hasArrow&&this.hasArrow||(this.hasArrow?"true":"false"),keydownFn:t,focusFn:w,clickFn:u,style:CKEDITOR.skin.getIconStyle(r,"rtl"==a.lang.dir,y,this.iconOffset),arrowHtml:this.hasArrow?b.output():""};c.output(f,e);if(this.onRender)this.onRender();return p},setState:function(a){if(this._.state==a)return!1;this._.state=a;var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),b.setAttribute("aria-disabled",a==CKEDITOR.TRISTATE_DISABLED),
this.hasArrow?b.setAttribute("aria-expanded",a==CKEDITOR.TRISTATE_ON):a===CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;var b=this;this.allowedContent||this.requiredContent||!this.command||(b=a.getCommand(this.command)||b);return this._.feature=b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}}(),function(){function a(a){function b(){for(var f=
c(),g=CKEDITOR.tools.clone(a.config.toolbarGroups)||e(a),l=0;l<g.length;l++){var m=g[l];if("/"!=m){"string"==typeof m&&(m=g[l]={name:m});var p,t=m.groups;if(t)for(var w=0;w<t.length;w++)p=t[w],(p=f[p])&&h(m,p);(p=f[m.name])&&h(m,p)}}return g}function c(){var b={},f,e,g;for(f in a.ui.items)e=a.ui.items[f],g=e.toolbar||"others",g=g.split(","),e=g[0],g=parseInt(g[1]||-1,10),b[e]||(b[e]=[]),b[e].push({name:f,order:g});for(e in b)b[e]=b[e].sort(function(a,b){return a.order==b.order?0:0>b.order?-1:0>a.order?
1:a.order<b.order?-1:1});return b}function h(b,c){if(c.length){b.items?b.items.push(a.ui.create("-")):b.items=[];for(var f;f=c.shift();)f="string"==typeof f?f:f.name,l&&-1!=CKEDITOR.tools.indexOf(l,f)||(f=a.ui.create(f))&&a.addFeature(f)&&b.items.push(f)}}function g(a){var b=[],c,f,d;for(c=0;c<a.length;++c)f=a[c],d={},"/"==f?b.push(f):CKEDITOR.tools.isArray(f)?(h(d,CKEDITOR.tools.clone(f)),b.push(d)):f.items&&(h(d,CKEDITOR.tools.clone(f.items)),d.name=f.name,b.push(d));return b}var l=a.config.removeButtons,
l=l&&l.split(","),f=a.config.toolbar;"string"==typeof f&&(f=a.config["toolbar_"+f]);return a.toolbar=f?g(f):b()}function e(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},
"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var b=function(){this.toolbars=[];this.focusCommandExecuted=!1};b.prototype.focus=function(){for(var a=0,b;b=this.toolbars[a++];)for(var c=0,e;e=b.items[c++];)if(e.focus){e.focus();return}};var c={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",
{requires:"button",init:function(d){var e,k=function(a,b){var c,f="rtl"==d.lang.dir,n=d.config.toolbarGroupCycling,u=f?37:39,f=f?39:37,n=void 0===n||n;switch(b){case 9:case CKEDITOR.SHIFT+9:for(;!c||!c.items.length;)if(c=9==b?(c?c.next:a.toolbar.next)||d.toolbox.toolbars[0]:(c?c.previous:a.toolbar.previous)||d.toolbox.toolbars[d.toolbox.toolbars.length-1],c.items.length)for(a=c.items[e?c.items.length-1:0];a&&!a.focus;)(a=e?a.previous:a.next)||(c=0);a&&a.focus();return!1;case u:c=a;do c=c.next,!c&&
n&&(c=a.toolbar.items[0]);while(c&&!c.focus);c?c.focus():k(a,9);return!1;case 40:return a.button&&a.button.hasArrow?a.execute():k(a,40==b?u:f),!1;case f:case 38:c=a;do c=c.previous,!c&&n&&(c=a.toolbar.items[a.toolbar.items.length-1]);while(c&&!c.focus);c?c.focus():(e=1,k(a,CKEDITOR.SHIFT+9),e=0);return!1;case 27:return d.focus(),!1;case 13:case 32:return a.execute(),!1}return!0};d.on("uiSpace",function(c){if(c.data.space==d.config.toolbarLocation){c.removeListener();d.toolbox=new b;var e=CKEDITOR.tools.getNextId(),
l=['\x3cspan id\x3d"',e,'" class\x3d"cke_voice_label"\x3e',d.lang.toolbar.toolbars,"\x3c/span\x3e",'\x3cspan id\x3d"'+d.ui.spaceId("toolbox")+'" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"',e,'" onmousedown\x3d"return false;"\x3e'],e=!1!==d.config.toolbarStartupExpanded,f,m;d.config.toolbarCanCollapse&&d.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&l.push('\x3cspan class\x3d"cke_toolbox_main"'+(e?"\x3e":' style\x3d"display:none"\x3e'));for(var u=d.toolbox.toolbars,v=a(d),x=v.length,
p=0;p<x;p++){var t,w=0,q,A=v[p],r="/"!==A&&("/"===v[p+1]||p==x-1),y;if(A)if(f&&(l.push("\x3c/span\x3e"),m=f=0),"/"===A)l.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e');else{y=A.items||A;for(var C=0;C<y.length;C++){var B=y[C],z;if(B){var I=function(a){a=a.render(d,l);E=w.items.push(a)-1;0<E&&(a.previous=w.items[E-1],a.previous.next=a);a.toolbar=w;a.onkey=k;a.onfocus=function(){d.toolbox.focusCommandExecuted||d.focus()}};if(B.type==CKEDITOR.UI_SEPARATOR)m=f&&B;else{z=!1!==B.canGroup;
if(!w){t=CKEDITOR.tools.getNextId();w={id:t,items:[]};q=A.name&&(d.lang.toolbar.toolbarGroups[A.name]||A.name);l.push('\x3cspan id\x3d"',t,'" class\x3d"cke_toolbar'+(r?' cke_toolbar_last"':'"'),q?' aria-labelledby\x3d"'+t+'_label"':"",' role\x3d"toolbar"\x3e');q&&l.push('\x3cspan id\x3d"',t,'_label" class\x3d"cke_voice_label"\x3e',q,"\x3c/span\x3e");l.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e');var E=u.push(w)-1;0<E&&(w.previous=u[E-1],w.previous.next=w)}z?f||(l.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'),
f=1):f&&(l.push("\x3c/span\x3e"),f=0);m&&(I(m),m=0);I(B)}}}f&&(l.push("\x3c/span\x3e"),m=f=0);w&&l.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')}}d.config.toolbarCanCollapse&&l.push("\x3c/span\x3e");if(d.config.toolbarCanCollapse&&d.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var K=CKEDITOR.tools.addFunction(function(){d.execCommand("toolbarCollapse")});d.on("destroy",function(){CKEDITOR.tools.removeFunction(K)});d.addCommand("toolbarCollapse",{readOnly:1,exec:function(a){var b=
a.ui.space("toolbar_collapser"),c=b.getPrevious(),f=a.ui.space("contents"),d=c.getParent(),e=parseInt(f.$.style.height,10),g=d.$.offsetHeight,h=b.hasClass("cke_toolbox_collapser_min");h?(c.show(),b.removeClass("cke_toolbox_collapser_min"),b.setAttribute("title",a.lang.toolbar.toolbarCollapse)):(c.hide(),b.addClass("cke_toolbox_collapser_min"),b.setAttribute("title",a.lang.toolbar.toolbarExpand));b.getFirst().setText(h?"▲":"◀");f.setStyle("height",e-(d.$.offsetHeight-g)+"px");a.fire("resize",{outerHeight:a.container.$.offsetHeight,
contentsHeight:f.$.offsetHeight,outerWidth:a.container.$.offsetWidth})},modes:{wysiwyg:1,source:1}});d.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?189:109),"toolbarCollapse");l.push('\x3ca title\x3d"'+(e?d.lang.toolbar.toolbarCollapse:d.lang.toolbar.toolbarExpand)+'" id\x3d"'+d.ui.spaceId("toolbar_collapser")+'" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser');e||l.push(" cke_toolbox_collapser_min");l.push('" onclick\x3d"CKEDITOR.tools.callFunction('+K+')"\x3e','\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e',
"\x3c/a\x3e")}l.push("\x3c/span\x3e");c.data.html+=l.join("")}});d.on("destroy",function(){if(this.toolbox){var a,b=0,c,f,d;for(a=this.toolbox.toolbars;b<a.length;b++)for(f=a[b].items,c=0;c<f.length;c++)d=f[c],d.clickFn&&CKEDITOR.tools.removeFunction(d.clickFn),d.keyDownFn&&CKEDITOR.tools.removeFunction(d.keyDownFn)}});d.on("uiReady",function(){var a=d.ui.space("toolbox");a&&d.focusManager.add(a,1)});d.addCommand("toolbarFocus",c);d.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");d.ui.add("-",CKEDITOR.UI_SEPARATOR,
{});d.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,b){b.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e');return{}}}}})}});CKEDITOR.ui.prototype.addToolbarGroup=function(a,b,c){var h=e(this.editor),g=0===b,l={name:a};if(c){if(c=CKEDITOR.tools.search(h,function(a){return a.name==c})){!c.groups&&(c.groups=[]);if(b&&(b=CKEDITOR.tools.indexOf(c.groups,b),0<=b)){c.groups.splice(b+1,0,a);return}g?c.groups.splice(0,0,a):c.groups.push(a);
return}b=null}b&&(b=CKEDITOR.tools.indexOf(h,function(a){return a.name==b}));g?h.splice(0,0,a):"number"==typeof b?h.splice(b+1,0,l):h.push(a)}}(),CKEDITOR.UI_SEPARATOR="separator",CKEDITOR.config.toolbarLocation="top","use strict",function(){function a(a,b,c){b.type||(b.type="auto");if(c&&!1===a.fire("beforePaste",b)||!b.dataValue&&b.dataTransfer.isEmpty())return!1;b.dataValue||(b.dataValue="");if(CKEDITOR.env.gecko&&"drop"==b.method&&a.toolbox)a.once("afterPaste",function(){a.toolbox.focus()});return a.fire("paste",
b)}function e(b){function c(){var a=b.editable();if(CKEDITOR.plugins.clipboard.isCustomCopyCutSupported){var d=function(a){b.getSelection().isCollapsed()||(b.readOnly&&"cut"==a.name||z.initPasteDataTransfer(a,b),a.data.preventDefault())};a.on("copy",d);a.on("cut",d);a.on("cut",function(){b.readOnly||b.extractSelectedHtml()},null,null,999)}a.on(z.mainPasteEvent,function(a){"beforepaste"==z.mainPasteEvent&&I||y(a)});"beforepaste"==z.mainPasteEvent&&(a.on("paste",function(a){E||(g(),a.data.preventDefault(),
y(a),k("paste"))}),a.on("contextmenu",h,null,null,0),a.on("beforepaste",function(a){!a.data||a.data.$.ctrlKey||a.data.$.shiftKey||h()},null,null,0));a.on("beforecut",function(){!I&&l(b)});var e;a.attachListener(CKEDITOR.env.ie?a:b.document.getDocumentElement(),"mouseup",function(){e=setTimeout(function(){C()},0)});b.on("destroy",function(){clearTimeout(e)});a.on("keyup",C)}function d(a){return{type:a,canUndo:"cut"==a,startDisabled:!0,fakeKeystroke:"cut"==a?CKEDITOR.CTRL+88:CKEDITOR.CTRL+67,exec:function(){"cut"==
this.type&&l();var a;var c=this.type;if(CKEDITOR.env.ie)a=k(c);else try{a=b.document.$.execCommand(c,!1,null)}catch(d){a=!1}a||b.showNotification(b.lang.clipboard[this.type+"Error"]);return a}}}function e(){return{canUndo:!1,async:!0,fakeKeystroke:CKEDITOR.CTRL+86,exec:function(b,c){function f(c,g){g="undefined"!==typeof g?g:!0;c?(c.method="paste",c.dataTransfer||(c.dataTransfer=z.initPasteDataTransfer()),a(b,c,g)):e&&!b._.forcePasteDialog&&b.showNotification(k,"info",b.config.clipboard_notificationDuration);
b._.forcePasteDialog=!1;b.fire("afterCommandExec",{name:"paste",command:d,returnValue:!!c})}c="undefined"!==typeof c&&null!==c?c:{};var d=this,e="undefined"!==typeof c.notification?c.notification:!0,g=c.type,h=CKEDITOR.tools.keystrokeToString(b.lang.common.keyboard,b.getCommandKeystroke(this)),k="string"===typeof e?e:b.lang.clipboard.pasteNotification.replace(/%1/,'\x3ckbd aria-label\x3d"'+h.aria+'"\x3e'+h.display+"\x3c/kbd\x3e"),h="string"===typeof c?c:c.dataValue;g&&!0!==b.config.forcePasteAsPlainText&&
"allow-word"!==b.config.forcePasteAsPlainText?b._.nextPasteType=g:delete b._.nextPasteType;"string"===typeof h?f({dataValue:h}):b.getClipboardData(f)}}}function g(){E=1;setTimeout(function(){E=0},100)}function h(){I=1;setTimeout(function(){I=0},10)}function k(a){var c=b.document,d=c.getBody(),e=!1,g=function(){e=!0};d.on(a,g);7<CKEDITOR.env.version?c.$.execCommand(a):c.$.selection.createRange().execCommand(a);d.removeListener(a,g);return e}function l(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var a=
b.getSelection(),c,d,e;a.getType()==CKEDITOR.SELECTION_ELEMENT&&(c=a.getSelectedElement())&&(d=a.getRanges()[0],e=b.document.createText(""),e.insertBefore(c),d.setStartBefore(e),d.setEndAfter(c),a.selectRanges([d]),setTimeout(function(){c.getParent()&&(e.remove(),a.selectElement(c))},0))}}function m(a,c){var d=b.document,e=b.editable(),g=function(a){a.cancel()},h;if(!d.getById("cke_pastebin")){var k=b.getSelection(),l=k.createBookmarks();CKEDITOR.env.ie&&k.root.fire("selectionchange");var n=new CKEDITOR.dom.element(!CKEDITOR.env.webkit&&
!e.is("body")||CKEDITOR.env.ie?"div":"body",d);n.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});var q=0,d=d.getWindow();CKEDITOR.env.webkit?(e.append(n),n.addClass("cke_editable"),e.is("body")||(q="static"!=e.getComputedStyle("position")?e:CKEDITOR.dom.element.get(e.$.offsetParent),q=q.getDocumentPosition().y)):e.getAscendant(CKEDITOR.env.ie?"body":"html",1).append(n);n.setStyles({position:"absolute",top:d.getScrollPosition().y-q+10+"px",width:"1px",height:Math.max(1,d.getViewPaneSize().height-
20)+"px",overflow:"hidden",margin:0,padding:0});CKEDITOR.env.safari&&n.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text"));(q=n.getParent().isReadOnly())?(n.setOpacity(0),n.setAttribute("contenteditable",!0)):n.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-10000px");b.on("selectionChange",g,null,null,0);if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)h=e.once("blur",g,null,null,-100);q&&n.focus();q=new CKEDITOR.dom.range(n);q.selectNodeContents(n);var r=q.select();CKEDITOR.env.ie&&
(h=e.once("blur",function(){b.lockSelection(r)}));var t=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){CKEDITOR.env.webkit&&(CKEDITOR.document.getBody().$.scrollTop=t);h&&h.removeListener();CKEDITOR.env.ie&&e.focus();k.selectBookmarks(l);n.remove();var a;CKEDITOR.env.webkit&&(a=n.getFirst())&&a.is&&a.hasClass("Apple-style-span")&&(n=a);b.removeListener("selectionChange",g);c(n.getHtml())},0)}}function A(){if("paste"==z.mainPasteEvent)return b.fire("beforePaste",{type:"auto",
method:"paste"}),!1;b.focus();g();var a=b.focusManager;a.lock();if(b.editable().fire(z.mainPasteEvent)&&!k("paste"))return a.unlock(),!1;a.unlock();return!0}function r(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();g();"paste"==z.mainPasteEvent&&a.fire("beforepaste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"),setTimeout(function(){b.fire("saveSnapshot")},50)}}function y(c){var d={type:"auto",method:"paste",
dataTransfer:z.initPasteDataTransfer(c)};d.dataTransfer.cacheData();var e=!1!==b.fire("beforePaste",d);e&&z.canClipboardApiBeTrusted(d.dataTransfer,b)?(c.data.preventDefault(),setTimeout(function(){a(b,d)},0)):m(c,function(c){d.dataValue=c.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");e&&a(b,d)})}function C(){if("wysiwyg"==b.mode){var a=B("paste");b.getCommand("cut").setState(B("cut"));b.getCommand("copy").setState(B("copy"));b.getCommand("paste").setState(a);b.fire("pasteState",a)}}function B(a){if(K&&
a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;a=b.getSelection();var c=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==c.length&&c[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var z=CKEDITOR.plugins.clipboard,I=0,E=0,K=0;(function(){b.on("key",r);b.on("contentDom",c);b.on("selectionChange",function(a){K=a.data.selection.getRanges()[0].checkReadOnly();C()});if(b.contextMenu){b.contextMenu.addListener(function(a,b){K=
b.getRanges()[0].checkReadOnly();return{cut:B("cut"),copy:B("copy"),paste:B("paste")}});var a=null;b.on("menuShow",function(){a&&(a.removeListener(),a=null);var c=b.contextMenu.findItemByCommandName("paste");c&&c.element&&(a=c.element.on("touchend",function(){b._.forcePasteDialog=!0}))})}if(b.ui.addButton)b.once("instanceReady",function(){b._.pasteButtons&&CKEDITOR.tools.array.forEach(b._.pasteButtons,function(a){if(a=b.ui.get(a))if(a=CKEDITOR.document.getById(a._.id))a.on("touchend",function(){b._.forcePasteDialog=
!0})})})})();(function(){function a(c,d,e,g,h){var k=b.lang.clipboard[d];b.addCommand(d,e);b.ui.addButton&&b.ui.addButton(c,{label:k,command:d,toolbar:"clipboard,"+g});b.addMenuItems&&b.addMenuItem(d,{label:k,command:d,group:"clipboard",order:h})}a("Cut","cut",d("cut"),10,1);a("Copy","copy",d("copy"),20,4);a("Paste","paste",e(),30,8);b._.pasteButtons||(b._.pasteButtons=[]);b._.pasteButtons.push("Paste")})();b.getClipboardData=function(a,c){function d(a){a.removeListener();a.cancel();c(a.data)}function e(a){a.removeListener();
a.cancel();c({type:h,dataValue:a.data.dataValue,dataTransfer:a.data.dataTransfer,method:"paste"})}var g=!1,h="auto";c||(c=a,a=null);b.on("beforePaste",function(a){a.removeListener();g=!0;h=a.data.type},null,null,1E3);b.on("paste",d,null,null,0);!1===A()&&(b.removeListener("paste",d),b._.forcePasteDialog&&g&&b.fire("pasteDialog")?(b.on("pasteDialogCommit",e),b.on("dialogHide",function(a){a.removeListener();a.data.removeListener("pasteDialogCommit",e);a.data._.committed||c(null)})):c(null))}}function b(a){if(CKEDITOR.env.webkit){if(!a.match(/^[^<]*$/g)&&
!a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!a.match(/^([^<]|<br( ?\/)?>)*$/gi)&&!a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko){if(!a.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";return"htmlifiedtext"}function c(a,b){function c(a){return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e",~~(a/2))+(1==a%2?"\x3cbr\x3e":"")}b=b.replace(/(?!\u3000)\s+/g," ").replace(/> +</g,"\x3e\x3c").replace(/<br ?\/>/gi,
"\x3cbr\x3e");b=b.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()});if(b.match(/^[^<]$/))return b;CKEDITOR.env.webkit&&-1<b.indexOf("\x3cdiv\x3e")&&(b=b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,"\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"\x3cdiv\x3e\x3c/div\x3e"),b.match(/<div>(<br>|)<\/div>/)&&(b="\x3cp\x3e"+b.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return c(a.split("\x3c/div\x3e\x3cdiv\x3e").length+1)})+"\x3c/p\x3e"),b=b.replace(/<\/div><div>/g,"\x3cbr\x3e"),
b=b.replace(/<\/?div>/g,""));CKEDITOR.env.gecko&&a.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(b=b.replace(/^<br><br>$/,"\x3cbr\x3e")),-1<b.indexOf("\x3cbr\x3e\x3cbr\x3e")&&(b="\x3cp\x3e"+b.replace(/(<br>){2,}/g,function(a){return c(a.length/4)})+"\x3c/p\x3e"));return k(a,b)}function d(a){function b(){var a={},c;for(c in CKEDITOR.dtd)"$"!=c.charAt(0)&&"div"!=c&&"span"!=c&&(a[c]=1);return a}var c={};return{get:function(d){return"plain-text"==d?c.plainText||(c.plainText=new CKEDITOR.filter(a,
"br")):"semantic-content"==d?((d=c.semanticContent)||(d=new CKEDITOR.filter(a,{}),d.allow({$1:{elements:b(),attributes:!0,styles:!1,classes:!1}}),d=c.semanticContent=d),d):d?new CKEDITOR.filter(a,d):null}}}function m(a,b,c){b=CKEDITOR.htmlParser.fragment.fromHtml(b);var d=new CKEDITOR.htmlParser.basicWriter;c.applyTo(b,!0,!1,a.activeEnterMode);b.writeHtml(d);return d.getHtml()}function k(a,b){a.enterMode==CKEDITOR.ENTER_BR?b=b.replace(/(<\/p><p>)+/g,function(a){return CKEDITOR.tools.repeat("\x3cbr\x3e",
a.length/7*2)}).replace(/<\/?p>/g,""):a.enterMode==CKEDITOR.ENTER_DIV&&(b=b.replace(/<(\/)?p>/g,"\x3c$1div\x3e"));return b}function h(a){a.data.preventDefault();a.data.$.dataTransfer.dropEffect="none"}function g(b){var c=CKEDITOR.plugins.clipboard;b.on("contentDom",function(){function d(c,e,g){e.select();a(b,{dataTransfer:g,method:"drop"},1);g.sourceEditor.fire("saveSnapshot");g.sourceEditor.editable().extractHtmlFromRange(c);g.sourceEditor.getSelection().selectRanges([c]);g.sourceEditor.fire("saveSnapshot")}
function e(d,g){d.select();a(b,{dataTransfer:g,method:"drop"},1);c.resetDragDataTransfer()}function g(a,c,d){var e={$:a.data.$,target:a.data.getTarget()};c&&(e.dragRange=c);d&&(e.dropRange=d);!1===b.fire(a.name,e)&&a.data.preventDefault()}function h(a){a.type!=CKEDITOR.NODE_ELEMENT&&(a=a.getParent());return a.getChildCount()}var k=b.editable(),l=CKEDITOR.plugins.clipboard.getDropTarget(b),m=b.ui.space("top"),A=b.ui.space("bottom");c.preventDefaultDropOnElement(m);c.preventDefaultDropOnElement(A);
k.attachListener(l,"dragstart",g);k.attachListener(b,"dragstart",c.resetDragDataTransfer,c,null,1);k.attachListener(b,"dragstart",function(a){c.initDragDataTransfer(a,b)},null,null,2);k.attachListener(b,"dragstart",function(){var a=c.dragRange=b.getSelection().getRanges()[0];CKEDITOR.env.ie&&10>CKEDITOR.env.version&&(c.dragStartContainerChildCount=a?h(a.startContainer):null,c.dragEndContainerChildCount=a?h(a.endContainer):null)},null,null,100);k.attachListener(l,"dragend",g);k.attachListener(b,"dragend",
c.initDragDataTransfer,c,null,1);k.attachListener(b,"dragend",c.resetDragDataTransfer,c,null,100);k.attachListener(l,"dragover",function(a){if(CKEDITOR.env.edge)a.data.preventDefault();else{var b=a.data.getTarget();b&&b.is&&b.is("html")?a.data.preventDefault():CKEDITOR.env.ie&&CKEDITOR.plugins.clipboard.isFileApiSupported&&a.data.$.dataTransfer.types.contains("Files")&&a.data.preventDefault()}});k.attachListener(l,"drop",function(a){if(!a.data.$.defaultPrevented){a.data.preventDefault();var d=a.data.getTarget();
if(!d.isReadOnly()||d.type==CKEDITOR.NODE_ELEMENT&&d.is("html")){var d=c.getRangeAtDropPosition(a,b),e=c.dragRange;d&&g(a,e,d)}}},null,null,9999);k.attachListener(b,"drop",c.initDragDataTransfer,c,null,1);k.attachListener(b,"drop",function(a){if(a=a.data){var g=a.dropRange,h=a.dragRange,k=a.dataTransfer;k.getTransferType(b)==CKEDITOR.DATA_TRANSFER_INTERNAL?setTimeout(function(){c.internalDrop(h,g,k,b)},0):k.getTransferType(b)==CKEDITOR.DATA_TRANSFER_CROSS_EDITORS?d(h,g,k):e(g,k)}},null,null,9999)})}
var l;CKEDITOR.plugins.add("clipboard",{requires:"dialog,notification,toolbar",init:function(a){var h,k=d(a);a.config.forcePasteAsPlainText?h="plain-text":a.config.pasteFilter?h=a.config.pasteFilter:!CKEDITOR.env.webkit||"pasteFilter"in a.config||(h="semantic-content");a.pasteFilter=k.get(h);e(a);g(a);CKEDITOR.dialog.add("paste",CKEDITOR.getUrl(this.path+"dialogs/paste.js"));if(CKEDITOR.env.gecko){var l=["image/png","image/jpeg","image/gif"],x;a.on("paste",function(b){var c=b.data,d=c.dataTransfer;
if(!c.dataValue&&"paste"==c.method&&d&&1==d.getFilesCount()&&x!=d.id&&(d=d.getFile(0),-1!=CKEDITOR.tools.indexOf(l,d.type))){var e=new FileReader;e.addEventListener("load",function(){b.data.dataValue='\x3cimg src\x3d"'+e.result+'" /\x3e';a.fire("paste",b.data)},!1);e.addEventListener("abort",function(){a.fire("paste",b.data)},!1);e.addEventListener("error",function(){a.fire("paste",b.data)},!1);e.readAsDataURL(d);x=c.dataTransfer.id;b.stop()}},null,null,1)}a.on("paste",function(b){b.data.dataTransfer||
(b.data.dataTransfer=new CKEDITOR.plugins.clipboard.dataTransfer);if(!b.data.dataValue){var c=b.data.dataTransfer,d=c.getData("text/html");if(d)b.data.dataValue=d,b.data.type="html";else if(d=c.getData("text/plain"))b.data.dataValue=a.editable().transformPlainTextToHtml(d),b.data.type="text"}},null,null,1);a.on("paste",function(a){var b=a.data.dataValue,c=CKEDITOR.dtd.$block;-1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi," "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,
function(a,b){return b.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;")})),-1<b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br class="Apple-interchange-newline">/,"")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(b.match(/^<[^<]+cke_(editable|contents)/i)){var f,d,e=new CKEDITOR.dom.element("div");for(e.setHtml(b);1==e.getChildCount()&&(f=e.getFirst())&&f.type==CKEDITOR.NODE_ELEMENT&&(f.hasClass("cke_editable")||
f.hasClass("cke_contents"));)e=d=f;d&&(b=d.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(b,f){return f.toLowerCase()in c?(a.data.preSniffing="html","\x3c"+f):b}):CKEDITOR.env.webkit?b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,f){return f in c?(a.data.endsWithEOL=1,"\x3c/"+f+"\x3e"):b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1"));a.data.dataValue=b},null,null,3);a.on("paste",function(d){d=d.data;var e=a._.nextPasteType||d.type,g=d.dataValue,
h,l=a.config.clipboard_defaultContentType||"html",n=d.dataTransfer.getTransferType(a)==CKEDITOR.DATA_TRANSFER_EXTERNAL,v=!0===a.config.forcePasteAsPlainText;h="html"==e||"html"==d.preSniffing?"html":b(g);delete a._.nextPasteType;"htmlifiedtext"==h&&(g=c(a.config,g));if("text"==e&&"html"==h)g=m(a,g,k.get("plain-text"));else if(n&&a.pasteFilter&&!d.dontFilter||v)g=m(a,g,a.pasteFilter);d.startsWithEOL&&(g='\x3cbr data-cke-eol\x3d"1"\x3e'+g);d.endsWithEOL&&(g+='\x3cbr data-cke-eol\x3d"1"\x3e');"auto"==
e&&(e="html"==h||"html"==l?"html":"text");d.type=e;d.dataValue=g;delete d.preSniffing;delete d.startsWithEOL;delete d.endsWithEOL},null,null,6);a.on("paste",function(b){b=b.data;b.dataValue&&(a.insertHtml(b.dataValue,b.type,b.range),setTimeout(function(){a.fire("afterPaste")},0))},null,null,1E3);a.on("pasteDialog",function(b){setTimeout(function(){a.openDialog("paste",b.data)},0)})}});CKEDITOR.plugins.clipboard={isCustomCopyCutSupported:(!CKEDITOR.env.ie||16<=CKEDITOR.env.version)&&!CKEDITOR.env.iOS,
isCustomDataTypesSupported:!CKEDITOR.env.ie||16<=CKEDITOR.env.version,isFileApiSupported:!CKEDITOR.env.ie||9<CKEDITOR.env.version,mainPasteEvent:CKEDITOR.env.ie&&!CKEDITOR.env.edge?"beforepaste":"paste",addPasteButton:function(a,b,c){a.ui.addButton&&(a.ui.addButton(b,c),a._.pasteButtons||(a._.pasteButtons=[]),a._.pasteButtons.push(b))},canClipboardApiBeTrusted:function(a,b){return a.getTransferType(b)!=CKEDITOR.DATA_TRANSFER_EXTERNAL||CKEDITOR.env.chrome&&!a.isEmpty()||CKEDITOR.env.gecko&&(a.getData("text/html")||
a.getFilesCount())||CKEDITOR.env.safari&&603<=CKEDITOR.env.version&&!CKEDITOR.env.iOS||CKEDITOR.env.edge&&16<=CKEDITOR.env.version?!0:!1},getDropTarget:function(a){var b=a.editable();return CKEDITOR.env.ie&&9>CKEDITOR.env.version||b.isInline()?b:a.document},fixSplitNodesAfterDrop:function(a,b,c,d){function e(a,c,d){var f=a;f.type==CKEDITOR.NODE_TEXT&&(f=a.getParent());if(f.equals(c)&&d!=c.getChildCount())return a=b.startContainer.getChild(b.startOffset-1),c=b.startContainer.getChild(b.startOffset),
a&&a.type==CKEDITOR.NODE_TEXT&&c&&c.type==CKEDITOR.NODE_TEXT&&(d=a.getLength(),a.setText(a.getText()+c.getText()),c.remove(),b.setStart(a,d),b.collapse(!0)),!0}var g=b.startContainer;"number"==typeof d&&"number"==typeof c&&g.type==CKEDITOR.NODE_ELEMENT&&(e(a.startContainer,g,c)||e(a.endContainer,g,d))},isDropRangeAffectedByDragRange:function(a,b){var c=b.startContainer,d=b.endOffset;return a.endContainer.equals(c)&&a.endOffset<=d||a.startContainer.getParent().equals(c)&&a.startContainer.getIndex()<
d||a.endContainer.getParent().equals(c)&&a.endContainer.getIndex()<d?!0:!1},internalDrop:function(b,c,d,e){var g=CKEDITOR.plugins.clipboard,h=e.editable(),k,l;e.fire("saveSnapshot");e.fire("lockSnapshot",{dontUpdate:1});CKEDITOR.env.ie&&10>CKEDITOR.env.version&&this.fixSplitNodesAfterDrop(b,c,g.dragStartContainerChildCount,g.dragEndContainerChildCount);(l=this.isDropRangeAffectedByDragRange(b,c))||(k=b.createBookmark(!1));g=c.clone().createBookmark(!1);l&&(k=b.createBookmark(!1));b=k.startNode;c=
k.endNode;l=g.startNode;c&&b.getPosition(l)&CKEDITOR.POSITION_PRECEDING&&c.getPosition(l)&CKEDITOR.POSITION_FOLLOWING&&l.insertBefore(b);b=e.createRange();b.moveToBookmark(k);h.extractHtmlFromRange(b,1);c=e.createRange();g.startNode.getCommonAncestor(h)||(g=e.getSelection().createBookmarks()[0]);c.moveToBookmark(g);a(e,{dataTransfer:d,method:"drop",range:c},1);e.fire("unlockSnapshot")},getRangeAtDropPosition:function(a,b){var c=a.data.$,d=c.clientX,e=c.clientY,g=b.getSelection(!0).getRanges()[0],
h=b.createRange();if(a.data.testRange)return a.data.testRange;if(document.caretRangeFromPoint&&b.document.$.caretRangeFromPoint(d,e))c=b.document.$.caretRangeFromPoint(d,e),h.setStart(CKEDITOR.dom.node(c.startContainer),c.startOffset),h.collapse(!0);else if(c.rangeParent)h.setStart(CKEDITOR.dom.node(c.rangeParent),c.rangeOffset),h.collapse(!0);else{if(CKEDITOR.env.ie&&8<CKEDITOR.env.version&&g&&b.editable().hasFocus)return g;if(document.body.createTextRange){b.focus();c=b.document.getBody().$.createTextRange();
try{for(var k=!1,l=0;20>l&&!k;l++){if(!k)try{c.moveToPoint(d,e-l),k=!0}catch(m){}if(!k)try{c.moveToPoint(d,e+l),k=!0}catch(r){}}if(k){var y="cke-temp-"+(new Date).getTime();c.pasteHTML('\x3cspan id\x3d"'+y+'"\x3e​\x3c/span\x3e');var C=b.document.getById(y);h.moveToPosition(C,CKEDITOR.POSITION_BEFORE_START);C.remove()}else{var B=b.document.$.elementFromPoint(d,e),z=new CKEDITOR.dom.element(B),I;if(z.equals(b.editable())||"html"==z.getName())return g&&g.startContainer&&!g.startContainer.equals(b.editable())?
g:null;I=z.getClientRect();d<I.left?h.setStartAt(z,CKEDITOR.POSITION_AFTER_START):h.setStartAt(z,CKEDITOR.POSITION_BEFORE_END);h.collapse(!0)}}catch(E){return null}}else return null}return h},initDragDataTransfer:function(a,b){var c=a.data.$?a.data.$.dataTransfer:null,d=new this.dataTransfer(c,b);"dragstart"===a.name&&d.storeId();c?this.dragData&&d.id==this.dragData.id?d=this.dragData:this.dragData=d:this.dragData?d=this.dragData:this.dragData=d;a.data.dataTransfer=d},resetDragDataTransfer:function(){this.dragData=
null},initPasteDataTransfer:function(a,b){if(this.isCustomCopyCutSupported){if(a&&a.data&&a.data.$){var c=a.data.$.clipboardData,d=new this.dataTransfer(c,b);"copy"!==a.name&&"cut"!==a.name||d.storeId();this.copyCutData&&d.id==this.copyCutData.id?(d=this.copyCutData,d.$=c):this.copyCutData=d;return d}return new this.dataTransfer(null,b)}return new this.dataTransfer(CKEDITOR.env.edge&&a&&a.data.$&&a.data.$.clipboardData||null,b)},preventDefaultDropOnElement:function(a){a&&a.on("dragover",h)}};l=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?
"cke/id":"Text";CKEDITOR.plugins.clipboard.dataTransfer=function(a,b){a&&(this.$=a);this._={metaRegExp:/^<meta.*?>/i,bodyRegExp:/<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i,fragmentRegExp:/\x3c!--(?:Start|End)Fragment--\x3e/g,data:{},files:[],nativeHtmlCache:"",normalizeType:function(a){a=a.toLowerCase();return"text"==a||"text/plain"==a?"Text":"url"==a?"URL":a}};this._.fallbackDataTransfer=new CKEDITOR.plugins.clipboard.fallbackDataTransfer(this);this.id=this.getData(l);this.id||(this.id="Text"==l?"":"cke-"+
CKEDITOR.tools.getUniqueId());b&&(this.sourceEditor=b,this.setData("text/html",b.getSelectedHtml(1)),"Text"==l||this.getData("text/plain")||this.setData("text/plain",b.getSelection().getSelectedText()))};CKEDITOR.DATA_TRANSFER_INTERNAL=1;CKEDITOR.DATA_TRANSFER_CROSS_EDITORS=2;CKEDITOR.DATA_TRANSFER_EXTERNAL=3;CKEDITOR.plugins.clipboard.dataTransfer.prototype={getData:function(a,b){a=this._.normalizeType(a);var c="text/html"==a&&b?this._.nativeHtmlCache:this._.data[a];if(void 0===c||null===c||""===
c){if(this._.fallbackDataTransfer.isRequired())c=this._.fallbackDataTransfer.getData(a,b);else try{c=this.$.getData(a)||""}catch(d){c=""}"text/html"!=a||b||(c=this._stripHtml(c))}"Text"==a&&CKEDITOR.env.gecko&&this.getFilesCount()&&"file://"==c.substring(0,7)&&(c="");if("string"===typeof c)var e=c.indexOf("\x3c/html\x3e"),c=-1!==e?c.substring(0,e+7):c;return c},setData:function(a,b){a=this._.normalizeType(a);"text/html"==a?(this._.data[a]=this._stripHtml(b),this._.nativeHtmlCache=b):this._.data[a]=
b;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported||"URL"==a||"Text"==a)if("Text"==l&&"Text"==a&&(this.id=b),this._.fallbackDataTransfer.isRequired())this._.fallbackDataTransfer.setData(a,b);else try{this.$.setData(a,b)}catch(c){}},storeId:function(){"Text"!==l&&this.setData(l,this.id)},getTransferType:function(a){return this.sourceEditor?this.sourceEditor==a?CKEDITOR.DATA_TRANSFER_INTERNAL:CKEDITOR.DATA_TRANSFER_CROSS_EDITORS:CKEDITOR.DATA_TRANSFER_EXTERNAL},cacheData:function(){function a(c){c=
b._.normalizeType(c);var d=b.getData(c);"text/html"==c&&(b._.nativeHtmlCache=b.getData(c,!0),d=b._stripHtml(d));d&&(b._.data[c]=d)}if(this.$){var b=this,c,d;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(c=0;c<this.$.types.length;c++)a(this.$.types[c])}else a("Text"),a("URL");d=this._getImageFromClipboard();if(this.$&&this.$.files||d){this._.files=[];if(this.$.files&&this.$.files.length)for(c=0;c<this.$.files.length;c++)this._.files.push(this.$.files[c]);0===this._.files.length&&
d&&this._.files.push(d)}}},getFilesCount:function(){return this._.files.length?this._.files.length:this.$&&this.$.files&&this.$.files.length?this.$.files.length:this._getImageFromClipboard()?1:0},getFile:function(a){return this._.files.length?this._.files[a]:this.$&&this.$.files&&this.$.files.length?this.$.files[a]:0===a?this._getImageFromClipboard():void 0},isEmpty:function(){var a={},b;if(this.getFilesCount())return!1;CKEDITOR.tools.array.forEach(CKEDITOR.tools.objectKeys(this._.data),function(b){a[b]=
1});if(this.$)if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(var c=0;c<this.$.types.length;c++)a[this.$.types[c]]=1}else a.Text=1,a.URL=1;"Text"!=l&&(a[l]=0);for(b in a)if(a[b]&&""!==this.getData(b))return!1;return!0},_getImageFromClipboard:function(){var a;try{if(this.$&&this.$.items&&this.$.items[0]&&(a=this.$.items[0].getAsFile())&&a.type)return a}catch(b){}},_stripHtml:function(a){if(a&&a.length){a=a.replace(this._.metaRegExp,"");var b=this._.bodyRegExp.exec(a);
b&&b.length&&(a=b[1],a=a.replace(this._.fragmentRegExp,""))}return a}};CKEDITOR.plugins.clipboard.fallbackDataTransfer=function(a){this._dataTransfer=a;this._customDataFallbackType="text/html"};CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported=null;CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes=[];CKEDITOR.plugins.clipboard.fallbackDataTransfer.prototype={isRequired:function(){var a=CKEDITOR.plugins.clipboard.fallbackDataTransfer,b=this._dataTransfer.$;if(null===
a._isCustomMimeTypeSupported)if(b){a._isCustomMimeTypeSupported=!1;if(CKEDITOR.env.edge&&17<=CKEDITOR.env.version)return!0;try{b.setData("cke/mimetypetest","cke test value"),a._isCustomMimeTypeSupported="cke test value"===b.getData("cke/mimetypetest"),b.clearData("cke/mimetypetest")}catch(c){}}else return!1;return!a._isCustomMimeTypeSupported},getData:function(a,b){var c=this._getData(this._customDataFallbackType,!0);if(b)return c;var c=this._extractDataComment(c),d=null,d=a===this._customDataFallbackType?
c.content:c.data&&c.data[a]?c.data[a]:this._getData(a,!0);return null!==d?d:""},setData:function(a,b){var c=a===this._customDataFallbackType;c&&(b=this._applyDataComment(b,this._getFallbackTypeData()));var d=b,e=this._dataTransfer.$;try{e.setData(a,d),c&&(this._dataTransfer._.nativeHtmlCache=d)}catch(g){if(this._isUnsupportedMimeTypeError(g)){c=CKEDITOR.plugins.clipboard.fallbackDataTransfer;-1===CKEDITOR.tools.indexOf(c._customTypes,a)&&c._customTypes.push(a);var c=this._getFallbackTypeContent(),
h=this._getFallbackTypeData();h[a]=d;try{d=this._applyDataComment(c,h),e.setData(this._customDataFallbackType,d),this._dataTransfer._.nativeHtmlCache=d}catch(k){d=""}}}return d},_getData:function(a,b){var c=this._dataTransfer._.data;if(!b&&c[a])return c[a];try{return this._dataTransfer.$.getData(a)}catch(d){return null}},_getFallbackTypeContent:function(){var a=this._dataTransfer._.data[this._customDataFallbackType];a||(a=this._extractDataComment(this._getData(this._customDataFallbackType,!0)).content);
return a},_getFallbackTypeData:function(){var a=CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes,b=this._extractDataComment(this._getData(this._customDataFallbackType,!0)).data||{},c=this._dataTransfer._.data;CKEDITOR.tools.array.forEach(a,function(a){void 0!==c[a]?b[a]=c[a]:void 0!==b[a]&&(b[a]=b[a])},this);return b},_isUnsupportedMimeTypeError:function(a){return a.message&&-1!==a.message.search(/element not found/gi)},_extractDataComment:function(a){var b={data:null,content:a||""};if(a&&
16<a.length){var c;(c=/\x3c!--cke-data:(.*?)--\x3e/g.exec(a))&&c[1]&&(b.data=JSON.parse(decodeURIComponent(c[1])),b.content=a.replace(c[0],""))}return b},_applyDataComment:function(a,b){var c="";b&&CKEDITOR.tools.objectKeys(b).length&&(c="\x3c!--cke-data:"+encodeURIComponent(JSON.stringify(b))+"--\x3e");return c+(a&&a.length?a:"")}}}(),CKEDITOR.config.clipboard_notificationDuration=1E4,function(){CKEDITOR.plugins.add("panel",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_PANEL,CKEDITOR.ui.panel.handler)}});
CKEDITOR.UI_PANEL="panel";CKEDITOR.ui.panel=function(a,b){b&&CKEDITOR.tools.extend(this,b);CKEDITOR.tools.extend(this,{className:"",css:[]});this.id=CKEDITOR.tools.getNextId();this.document=a;this.isFramed=this.forceIFrame||this.css.length;this._={blocks:{}}};CKEDITOR.ui.panel.handler={create:function(a){return new CKEDITOR.ui.panel(a)}};var a=CKEDITOR.addTemplate("panel",'\x3cdiv lang\x3d"{langCode}" id\x3d"{id}" dir\x3d{dir} class\x3d"cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style\x3d"z-index:{z-index}" role\x3d"presentation"\x3e{frame}\x3c/div\x3e'),
e=CKEDITOR.addTemplate("panel-frame",'\x3ciframe id\x3d"{id}" class\x3d"cke_panel_frame" role\x3d"presentation" frameborder\x3d"0" src\x3d"{src}"\x3e\x3c/iframe\x3e'),b=CKEDITOR.addTemplate("panel-frame-inner",'\x3c!DOCTYPE html\x3e\x3chtml class\x3d"cke_panel_container {env}" dir\x3d"{dir}" lang\x3d"{langCode}"\x3e\x3chead\x3e{css}\x3c/head\x3e\x3cbody class\x3d"cke_{dir}" style\x3d"margin:0;padding:0" onload\x3d"{onload}"\x3e\x3c/body\x3e\x3c/html\x3e');CKEDITOR.ui.panel.prototype={render:function(c,
d){var m={editorId:c.id,id:this.id,langCode:c.langCode,dir:c.lang.dir,cls:this.className,frame:"",env:CKEDITOR.env.cssClass,"z-index":c.config.baseFloatZIndex+1};this.getHolderElement=function(){var a=this._.holder;if(!a){if(this.isFramed){var a=this.document.getById(this.id+"_frame"),c=a.getParent(),a=a.getFrameDocument();CKEDITOR.env.iOS&&c.setStyles({overflow:"scroll","-webkit-overflow-scrolling":"touch"});c=CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function(){this.isLoaded=!0;if(this.onLoad)this.onLoad()},
this));a.write(b.output(CKEDITOR.tools.extend({css:CKEDITOR.tools.buildStyleHtml(this.css),onload:"window.parent.CKEDITOR.tools.callFunction("+c+");"},m)));a.getWindow().$.CKEDITOR=CKEDITOR;a.on("keydown",function(a){var b=a.data.getKeystroke(),c=this.document.getById(this.id).getAttribute("dir");if("input"!==a.data.getTarget().getName()||37!==b&&39!==b)this._.onKeyDown&&!1===this._.onKeyDown(b)?"input"===a.data.getTarget().getName()&&32===b||a.data.preventDefault():(27==b||b==("rtl"==c?39:37))&&
this.onEscape&&!1===this.onEscape(b)&&a.data.preventDefault()},this);a=a.getBody();a.unselectable();CKEDITOR.env.air&&CKEDITOR.tools.callFunction(c)}else a=this.document.getById(this.id);this._.holder=a}return a};if(this.isFramed){var k=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie&&!CKEDITOR.env.edge?"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())":"";m.frame=e.output({id:this.id+"_frame",src:k})}k=a.output(m);d&&
d.push(k);return k},addBlock:function(a,b){b=this._.blocks[a]=b instanceof CKEDITOR.ui.panel.block?b:new CKEDITOR.ui.panel.block(this.getHolderElement(),b);this._.currentBlock||this.showBlock(a);return b},getBlock:function(a){return this._.blocks[a]},showBlock:function(a){a=this._.blocks[a];var b=this._.currentBlock,e=!this.forceIFrame||CKEDITOR.env.ie?this._.holder:this.document.getById(this.id+"_frame");b&&b.hide();this._.currentBlock=a;CKEDITOR.fire("ariaWidget",e);a._.focusIndex=-1;this._.onKeyDown=
a.onKeyDown&&CKEDITOR.tools.bind(a.onKeyDown,a);a.show();return a},destroy:function(){this.element&&this.element.remove()}};CKEDITOR.ui.panel.block=CKEDITOR.tools.createClass({$:function(a,b){this.element=a.append(a.getDocument().createElement("div",{attributes:{tabindex:-1,"class":"cke_panel_block"},styles:{display:"none"}}));b&&CKEDITOR.tools.extend(this,b);this.element.setAttributes({role:this.attributes.role||"presentation","aria-label":this.attributes["aria-label"],title:this.attributes.title||
this.attributes["aria-label"]});this.keys={};this._.focusIndex=-1;this.element.disableContextMenu()},_:{markItem:function(a){-1!=a&&(a=this._.getItems().getItem(this._.focusIndex=a),CKEDITOR.env.webkit&&a.getDocument().getWindow().focus(),a.focus(),this.onMark&&this.onMark(a))},markFirstDisplayed:function(a){for(var b=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"none"==a.getStyle("display")},e=this._.getItems(),k,h,g=e.count()-1;0<=g;g--)if(k=e.getItem(g),k.getAscendant(b)||(h=k,this._.focusIndex=
g),"true"==k.getAttribute("aria-selected")){h=k;this._.focusIndex=g;break}h&&(a&&a(),CKEDITOR.env.webkit&&h.getDocument().getWindow().focus(),h.focus(),this.onMark&&this.onMark(h))},getItems:function(){return this.element.find("a,input")}},proto:{show:function(){this.element.setStyle("display","")},hide:function(){this.onHide&&!0===this.onHide.call(this)||this.element.setStyle("display","none")},onKeyDown:function(a,b){var e=this.keys[a];switch(e){case "next":for(var k=this._.focusIndex,e=this._.getItems(),
h;h=e.getItem(++k);)if(h.getAttribute("_cke_focus")&&h.$.offsetWidth){this._.focusIndex=k;h.focus(!0);break}return h||b?!1:(this._.focusIndex=-1,this.onKeyDown(a,1));case "prev":k=this._.focusIndex;for(e=this._.getItems();0<k&&(h=e.getItem(--k));){if(h.getAttribute("_cke_focus")&&h.$.offsetWidth){this._.focusIndex=k;h.focus(!0);break}h=null}return h||b?!1:(this._.focusIndex=e.count(),this.onKeyDown(a,1));case "click":case "mouseup":return k=this._.focusIndex,(h=0<=k&&this._.getItems().getItem(k))&&
(h.$[e]?h.$[e]():h.$["on"+e]()),!1}return!0}}})}(),CKEDITOR.plugins.add("floatpanel",{requires:"panel"}),function(){function a(a,c,d,m,k){k=CKEDITOR.tools.genKey(c.getUniqueId(),d.getUniqueId(),a.lang.dir,a.uiColor||"",m.css||"",k||"");var h=e[k];h||(h=e[k]=new CKEDITOR.ui.panel(c,m),h.element=d.append(CKEDITOR.dom.element.createFromHtml(h.render(a),c)),h.element.setStyles({display:"none",position:"absolute"}));return h}var e={};CKEDITOR.ui.floatPanel=CKEDITOR.tools.createClass({$:function(b,c,d,
e){function k(){f.hide()}d.forceIFrame=1;d.toolbarRelated&&b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&(c=CKEDITOR.document.getById("cke_"+b.name));var h=c.getDocument();e=a(b,h,c,d,e||0);var g=e.element,l=g.getFirst(),f=this;g.disableContextMenu();this.element=g;this._={editor:b,panel:e,parentElement:c,definition:d,document:h,iframe:l,children:[],dir:b.lang.dir,showBlockParams:null,markFirst:void 0!==d.markFirst?d.markFirst:!0};b.on("mode",k);b.on("resize",k);h.getWindow().on("resize",function(){this.reposition()},
this)},proto:{addBlock:function(a,c){return this._.panel.addBlock(a,c)},addListBlock:function(a,c){return this._.panel.addListBlock(a,c)},getBlock:function(a){return this._.panel.getBlock(a)},showBlock:function(a,c,d,e,k,h){var g=this._.panel,l=g.showBlock(a);this._.showBlockParams=[].slice.call(arguments);this.allowBlur(!1);var f=this._.editor.editable();this._.returnFocus=f.hasFocus?f:new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);this._.hideTimeout=0;var n=this.element,f=this._.iframe,
f=CKEDITOR.env.ie&&!CKEDITOR.env.edge?f:new CKEDITOR.dom.window(f.$.contentWindow),u=n.getDocument(),v=this._.parentElement.getPositionedAncestor(),x=c.getDocumentPosition(u),u=v?v.getDocumentPosition(u):{x:0,y:0},p="rtl"==this._.dir,t=x.x+(e||0)-u.x,w=x.y+(k||0)-u.y;!p||1!=d&&4!=d?p||2!=d&&3!=d||(t+=c.$.offsetWidth-1):t+=c.$.offsetWidth;if(3==d||4==d)w+=c.$.offsetHeight-1;this._.panel._.offsetParentId=c.getId();n.setStyles({top:w+"px",left:0,display:""});n.setOpacity(0);n.getFirst().removeStyle("width");
this._.editor.focusManager.add(f);this._.blurSet||(CKEDITOR.event.useCapture=!0,f.on("blur",function(a){function b(){delete this._.returnFocus;this.hide()}this.allowBlur()&&a.data.getPhase()==CKEDITOR.EVENT_PHASE_AT_TARGET&&this.visible&&!this._.activeChild&&(CKEDITOR.env.iOS?this._.hideTimeout||(this._.hideTimeout=CKEDITOR.tools.setTimeout(b,0,this)):b.call(this))},this),f.on("focus",function(){this._.focused=!0;this.hideChild();this.allowBlur(!0)},this),CKEDITOR.env.iOS&&(f.on("touchstart",function(){clearTimeout(this._.hideTimeout)},
this),f.on("touchend",function(){this._.hideTimeout=0;this.focus()},this)),CKEDITOR.event.useCapture=!1,this._.blurSet=1);g.onEscape=CKEDITOR.tools.bind(function(a){if(this.onEscape&&!1===this.onEscape(a))return!1},this);CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.tools.bind(function(){var a=n;a.removeStyle("width");if(l.autoSize){var b=l.element.getDocument(),b=(CKEDITOR.env.webkit||CKEDITOR.env.edge?l.element:b.getBody()).$.scrollWidth;CKEDITOR.env.ie&&CKEDITOR.env.quirks&&0<b&&(b+=(a.$.offsetWidth||
0)-(a.$.clientWidth||0)+3);a.setStyle("width",b+10+"px");b=l.element.$.scrollHeight;CKEDITOR.env.ie&&CKEDITOR.env.quirks&&0<b&&(b+=(a.$.offsetHeight||0)-(a.$.clientHeight||0)+3);a.setStyle("height",b+"px");g._.currentBlock.element.setStyle("display","none").removeStyle("display")}else a.removeStyle("height");p&&(t-=n.$.offsetWidth);n.setStyle("left",t+"px");var b=g.element.getWindow(),a=n.$.getBoundingClientRect(),b=b.getViewPaneSize(),c=a.width||a.right-a.left,d=a.height||a.bottom-a.top,f=p?a.right:
b.width-a.left,e=p?b.width-a.right:a.left;p?f<c&&(t=e>c?t+c:b.width>c?t-a.left:t-a.right+b.width):f<c&&(t=e>c?t-c:b.width>c?t-a.right+b.width:t-a.left);c=a.top;b.height-a.top<d&&(w=c>d?w-d:b.height>d?w-a.bottom+b.height:w-a.top);CKEDITOR.env.ie&&!CKEDITOR.env.edge&&(b=a=new CKEDITOR.dom.element(n.$.offsetParent),"html"==b.getName()&&(b=b.getDocument().getBody()),"rtl"==b.getComputedStyle("direction")&&(t=CKEDITOR.env.ie8Compat?t-2*n.getDocument().getDocumentElement().$.scrollLeft:t-(a.$.scrollWidth-
a.$.clientWidth)));var a=n.getFirst(),k;(k=a.getCustomData("activePanel"))&&k.onHide&&k.onHide.call(this,1);a.setCustomData("activePanel",this);n.setStyles({top:w+"px",left:t+"px"});n.setOpacity(1);h&&h()},this);g.isLoaded?a():g.onLoad=a;CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.env.webkit&&CKEDITOR.document.getWindow().getScrollPosition().y;this.focus();l.element.focus();CKEDITOR.env.webkit&&(CKEDITOR.document.getBody().$.scrollTop=a);this.allowBlur(!0);this._.markFirst&&(CKEDITOR.env.ie?
CKEDITOR.tools.setTimeout(function(){l.markFirstDisplayed?l.markFirstDisplayed():l._.markFirstDisplayed()},0):l.markFirstDisplayed?l.markFirstDisplayed():l._.markFirstDisplayed());this._.editor.fire("panelShow",this)},0,this)},CKEDITOR.env.air?200:0,this);this.visible=1;this.onShow&&this.onShow.call(this)},reposition:function(){var a=this._.showBlockParams;this.visible&&this._.showBlockParams&&(this.hide(),this.showBlock.apply(this,a))},focus:function(){if(CKEDITOR.env.webkit){var a=CKEDITOR.document.getActive();
a&&!a.equals(this._.iframe)&&a.$.blur()}(this._.lastFocused||this._.iframe.getFrameDocument().getWindow()).focus()},blur:function(){var a=this._.iframe.getFrameDocument().getActive();a&&a.is("a")&&(this._.lastFocused=a)},hide:function(a){if(this.visible&&(!this.onHide||!0!==this.onHide.call(this))){this.hideChild();CKEDITOR.env.gecko&&this._.iframe.getFrameDocument().$.activeElement.blur();this.element.setStyle("display","none");this.visible=0;this.element.getFirst().removeCustomData("activePanel");
if(a=a&&this._.returnFocus)CKEDITOR.env.webkit&&a.type&&a.getWindow().$.focus(),a.focus();delete this._.lastFocused;this._.showBlockParams=null;this._.editor.fire("panelHide",this)}},allowBlur:function(a){var c=this._.panel;void 0!==a&&(c.allowBlur=a);return c.allowBlur},showAsChild:function(a,c,d,e,k,h){if(this._.activeChild!=a||a._.panel._.offsetParentId!=d.getId())this.hideChild(),a.onHide=CKEDITOR.tools.bind(function(){CKEDITOR.tools.setTimeout(function(){this._.focused||this.hide()},0,this)},
this),this._.activeChild=a,this._.focused=!1,a.showBlock(c,d,e,k,h),this.blur(),(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&setTimeout(function(){a.element.getChild(0).$.style.cssText+=""},100)},hideChild:function(a){var c=this._.activeChild;c&&(delete c.onHide,delete this._.activeChild,c.hide(),a&&this.focus())}}});CKEDITOR.on("instanceDestroyed",function(){var a=CKEDITOR.tools.isEmpty(CKEDITOR.instances),c;for(c in e){var d=e[c];a?d.destroy():d.element.hide()}a&&(e={})})}(),CKEDITOR.plugins.add("menu",
{requires:"floatpanel",beforeInit:function(a){for(var e=a.config.menu_groups.split(","),b=a._.menuGroups={},c=a._.menuItems={},d=0;d<e.length;d++)b[e[d]]=d+1;a.addMenuGroup=function(a,c){b[a]=c||100};a.addMenuItem=function(a,d){b[d.group]&&(c[a]=new CKEDITOR.menuItem(this,a,d))};a.addMenuItems=function(a){for(var b in a)this.addMenuItem(b,a[b])};a.getMenuItem=function(a){return c[a]};a.removeMenuItem=function(a){delete c[a]}}}),function(){function a(a){a.sort(function(a,b){return a.group<b.group?
-1:a.group>b.group?1:a.order<b.order?-1:a.order>b.order?1:0})}var e='\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1" _cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-label\x3d"{label}" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked} draggable\x3d"false"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&
(e+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(e+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;" ondragstart\x3d"return false;"');var e=e+(' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e'),b=CKEDITOR.addTemplate("menuItem",e+'\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{shortcutHtml}{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_voice_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e\x3c/span\x3e'),
c=CKEDITOR.addTemplate("menuArrow",'\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e'),d=CKEDITOR.addTemplate("menuShortcut",'\x3cspan class\x3d"cke_menubutton_label cke_menubutton_shortcut"\x3e{shortcut}\x3c/span\x3e');CKEDITOR.menu=CKEDITOR.tools.createClass({$:function(a,b){b=this._.definition=b||{};this.id=CKEDITOR.tools.getNextId();this.editor=a;this.items=[];this._.listeners=[];this._.level=b.level||1;var c=CKEDITOR.tools.extend({},b.panel,{css:[CKEDITOR.skin.getPath("editor")],
level:this._.level-1,block:{}}),d=c.block.attributes=c.attributes||{};!d.role&&(d.role="menu");this._.panelDefinition=c},_:{onShow:function(){var a=this.editor.getSelection(),b=a&&a.getStartElement(),c=this.editor.elementPath(),d=this._.listeners;this.removeAll();for(var e=0;e<d.length;e++){var f=d[e](b,a,c);if(f)for(var n in f){var u=this.editor.getMenuItem(n);!u||u.command&&!this.editor.getCommand(u.command).state||(u.state=f[n],this.add(u))}}},onClick:function(a){this.hide();if(a.onClick)a.onClick();
else a.command&&this.editor.execCommand(a.command)},onEscape:function(a){var b=this.parent;b?b._.panel.hideChild(1):27==a&&this.hide(1);return!1},onHide:function(){this.onHide&&this.onHide()},showSubMenu:function(a){var b=this._.subMenu,c=this.items[a];if(c=c.getItems&&c.getItems()){b?b.removeAll():(b=this._.subMenu=new CKEDITOR.menu(this.editor,CKEDITOR.tools.extend({},this._.definition,{level:this._.level+1},!0)),b.parent=this,b._.onClick=CKEDITOR.tools.bind(this._.onClick,this));for(var d in c){var e=
this.editor.getMenuItem(d);e&&(e.state=c[d],b.add(e))}var f=this._.panel.getBlock(this.id).element.getDocument().getById(this.id+String(a));setTimeout(function(){b.show(f,2)},0)}else this._.panel.hideChild(1)}},proto:{add:function(a){a.order||(a.order=this.items.length);this.items.push(a)},removeAll:function(){this.items=[]},show:function(b,c,d,e){if(!this.parent&&(this._.onShow(),!this.items.length))return;c=c||("rtl"==this.editor.lang.dir?2:1);var l=this.items,f=this.editor,n=this._.panel,u=this._.element;
if(!n){n=this._.panel=new CKEDITOR.ui.floatPanel(this.editor,CKEDITOR.document.getBody(),this._.panelDefinition,this._.level);n.onEscape=CKEDITOR.tools.bind(function(a){if(!1===this._.onEscape(a))return!1},this);n.onShow=function(){n._.panel.getHolderElement().getParent().addClass("cke").addClass("cke_reset_all")};n.onHide=CKEDITOR.tools.bind(function(){this._.onHide&&this._.onHide()},this);u=n.addBlock(this.id,this._.panelDefinition.block);u.autoSize=!0;var v=u.keys;v[40]="next";v[9]="next";v[38]=
"prev";v[CKEDITOR.SHIFT+9]="prev";v["rtl"==f.lang.dir?37:39]=CKEDITOR.env.ie?"mouseup":"click";v[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(v[13]="mouseup");u=this._.element=u.element;v=u.getDocument();v.getBody().setStyle("overflow","hidden");v.getElementsByTag("html").getItem(0).setStyle("overflow","hidden");this._.itemOverFn=CKEDITOR.tools.addFunction(function(a){clearTimeout(this._.showSubTimeout);this._.showSubTimeout=CKEDITOR.tools.setTimeout(this._.showSubMenu,f.config.menu_subMenuDelay||
400,this,[a])},this);this._.itemOutFn=CKEDITOR.tools.addFunction(function(){clearTimeout(this._.showSubTimeout)},this);this._.itemClickFn=CKEDITOR.tools.addFunction(function(a){var b=this.items[a];if(b.state==CKEDITOR.TRISTATE_DISABLED)this.hide(1);else if(b.getItems)this._.showSubMenu(a);else this._.onClick(b)},this)}a(l);for(var v=f.elementPath(),v=['\x3cdiv class\x3d"cke_menu'+(v&&v.direction()!=f.lang.dir?" cke_mixed_dir_content":"")+'" role\x3d"presentation"\x3e'],x=l.length,p=x&&l[0].group,
t=0;t<x;t++){var w=l[t];p!=w.group&&(v.push('\x3cdiv class\x3d"cke_menuseparator" role\x3d"separator"\x3e\x3c/div\x3e'),p=w.group);w.render(this,t,v)}v.push("\x3c/div\x3e");u.setHtml(v.join(""));CKEDITOR.ui.fire("ready",this);this.parent?this.parent._.panel.showAsChild(n,this.id,b,c,d,e):n.showBlock(this.id,b,c,d,e);f.fire("menuShow",[n])},addListener:function(a){this._.listeners.push(a)},hide:function(a){this._.onHide&&this._.onHide();this._.panel&&this._.panel.hide(a)},findItemByCommandName:function(a){var b=
CKEDITOR.tools.array.filter(this.items,function(b){return a===b.command});return b.length?(b=b[0],{item:b,element:this._.element.findOne("."+b.className)}):null}}});CKEDITOR.menuItem=CKEDITOR.tools.createClass({$:function(a,b,c){CKEDITOR.tools.extend(this,c,{order:0,className:"cke_menubutton__"+b});this.group=a._.menuGroups[this.group];this.editor=a;this.name=b},proto:{render:function(a,e,h){var g=a.id+String(e),l="undefined"==typeof this.state?CKEDITOR.TRISTATE_OFF:this.state,f="",n=this.editor,
u,v,x=l==CKEDITOR.TRISTATE_ON?"on":l==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";this.role in{menuitemcheckbox:1,menuitemradio:1}&&(f=' aria-checked\x3d"'+(l==CKEDITOR.TRISTATE_ON?"true":"false")+'"');var p=this.getItems,t="\x26#"+("rtl"==this.editor.lang.dir?"9668":"9658")+";",w=this.name;this.icon&&!/\./.test(this.icon)&&(w=this.icon);this.command&&(u=n.getCommand(this.command),(u=n.getCommandKeystroke(u))&&(v=CKEDITOR.tools.keystrokeToString(n.lang.common.keyboard,u)));a={id:g,name:this.name,
iconName:w,label:this.label,cls:this.className||"",state:x,hasPopup:p?"true":"false",disabled:l==CKEDITOR.TRISTATE_DISABLED,title:this.label+(v?" ("+v.display+")":""),ariaShortcut:v?n.lang.common.keyboardShortcut+" "+v.aria:"",href:"javascript:void('"+(this.label||"").replace("'")+"')",hoverFn:a._.itemOverFn,moveOutFn:a._.itemOutFn,clickFn:a._.itemClickFn,index:e,iconStyle:CKEDITOR.skin.getIconStyle(w,"rtl"==this.editor.lang.dir,w==this.icon?null:this.icon,this.iconOffset),shortcutHtml:v?d.output({shortcut:v.display}):
"",arrowHtml:p?c.output({label:t}):"",role:this.role?this.role:"menuitem",ariaChecked:f};b.output(a,h)}}})}(),CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div",CKEDITOR.plugins.add("contextmenu",{requires:"menu",onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(a){this.base.call(this,a,{panel:{css:a.config.contextmenu_contentsCss,
className:"cke_menu_panel",attributes:{"aria-label":a.lang.contextmenu.options}}})},proto:{addTarget:function(a,e){function b(){d=!1}var c,d;a.on("contextmenu",function(a){a=a.data;var b=CKEDITOR.env.webkit?c:CKEDITOR.env.mac?a.$.metaKey:a.$.ctrlKey;if(!e||!b)if(a.preventDefault(),!d){if(CKEDITOR.env.mac&&CKEDITOR.env.webkit){var b=this.editor,g=(new CKEDITOR.dom.elementPath(a.getTarget(),b.editable())).contains(function(a){return a.hasAttribute("contenteditable")},!0);g&&"false"==g.getAttribute("contenteditable")&&
b.getSelection().fake(g)}var g=a.getTarget().getDocument(),l=a.getTarget().getDocument().getDocumentElement(),b=!g.equals(CKEDITOR.document),g=g.getWindow().getScrollPosition(),f=b?a.$.clientX:a.$.pageX||g.x+a.$.clientX,m=b?a.$.clientY:a.$.pageY||g.y+a.$.clientY;CKEDITOR.tools.setTimeout(function(){this.open(l,null,f,m)},CKEDITOR.env.ie?200:0,this)}},this);if(CKEDITOR.env.webkit){var m=function(){c=0};a.on("keydown",function(a){c=CKEDITOR.env.mac?a.data.$.metaKey:a.data.$.ctrlKey});a.on("keyup",m);
a.on("contextmenu",m)}CKEDITOR.env.gecko&&!CKEDITOR.env.mac&&(a.on("keydown",function(a){a.data.$.shiftKey&&121===a.data.$.keyCode&&(d=!0)},null,null,0),a.on("keyup",b),a.on("contextmenu",b))},open:function(a,e,b,c){!1!==this.editor.config.enableContextMenu&&this.editor.getSelection().getType()!==CKEDITOR.SELECTION_NONE&&(this.editor.focus(),a=a||CKEDITOR.document.getDocumentElement(),this.editor.selectionChange(1),this.show(a,e,b,c))}}})},beforeInit:function(a){var e=a.contextMenu=new CKEDITOR.plugins.contextMenu(a);
a.on("contentDom",function(){e.addTarget(a.editable(),!1!==a.config.browserContextMenuOnCtrl)});a.addCommand("contextMenu",{exec:function(a){var c=0,d=0,e=a.getSelection().getRanges(),e=e[e.length-1].getClientRects(a.editable().isInline());if(e=e[e.length-1])c=e["rtl"===a.lang.dir?"left":"right"],d=e.bottom;a.contextMenu.open(a.document.getBody().getParent(),null,c,d)}});a.setKeystroke(CKEDITOR.SHIFT+121,"contextMenu");a.setKeystroke(CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu")}}),function(){function a(a,
b){function k(b){b=f.list[b];var c;b.equals(a.editable())||"true"==b.getAttribute("contenteditable")?(c=a.createRange(),c.selectNodeContents(b),c=c.select()):(c=a.getSelection(),c.selectElement(b));CKEDITOR.env.ie&&a.fire("selectionChange",{selection:c,path:new CKEDITOR.dom.elementPath(b)});a.focus()}function h(){l&&l.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');delete f.list}var g=a.ui.spaceId("path"),l,f=a._.elementsPath,n=f.idBase;b.html+='\x3cspan id\x3d"'+g+'_label" class\x3d"cke_voice_label"\x3e'+
a.lang.elementspath.eleLabel+'\x3c/span\x3e\x3cspan id\x3d"'+g+'" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"'+g+'_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e';a.on("uiReady",function(){var b=a.ui.space("path");b&&a.focusManager.add(b,1)});f.onClick=k;var u=CKEDITOR.tools.addFunction(k),v=CKEDITOR.tools.addFunction(function(b,c){var e=f.idBase,g;c=new CKEDITOR.dom.event(c);g="rtl"==a.lang.dir;switch(c.getKeystroke()){case g?39:37:case 9:return(g=
CKEDITOR.document.getById(e+(b+1)))||(g=CKEDITOR.document.getById(e+"0")),g.focus(),!1;case g?37:39:case CKEDITOR.SHIFT+9:return(g=CKEDITOR.document.getById(e+(b-1)))||(g=CKEDITOR.document.getById(e+(f.list.length-1))),g.focus(),!1;case 27:return a.focus(),!1;case 13:case 32:return k(b),!1}return!0});a.on("selectionChange",function(b){for(var e=[],h=f.list=[],k=[],m=f.filters,A=!0,r=b.data.path.elements,y=r.length;y--;){var C=r[y],B=0;b=C.data("cke-display-name")?C.data("cke-display-name"):C.data("cke-real-element-type")?
C.data("cke-real-element-type"):C.getName();(A=C.hasAttribute("contenteditable")?"true"==C.getAttribute("contenteditable"):A)||C.hasAttribute("contenteditable")||(B=1);for(var z=0;z<m.length;z++){var I=m[z](C,b);if(!1===I){B=1;break}b=I||b}B||(h.unshift(C),k.unshift(b))}h=h.length;for(m=0;m<h;m++)b=k[m],A=a.lang.elementspath.eleTitle.replace(/%1/,b),b=c.output({id:n+m,label:A,text:b,jsTitle:"javascript:void('"+b+"')",index:m,keyDownFn:v,clickFn:u}),e.unshift(b);l||(l=CKEDITOR.document.getById(g));
k=l;k.setHtml(e.join("")+'\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');a.fire("elementsPathUpdate",{space:k})});a.on("readOnly",h);a.on("contentDomUnload",h);a.addCommand("elementsPathFocus",e.toolbarFocus);a.setKeystroke(CKEDITOR.ALT+122,"elementsPathFocus")}var e={toolbarFocus:{editorFocus:!1,readOnly:1,exec:function(a){(a=CKEDITOR.document.getById(a._.elementsPath.idBase+"0"))&&a.focus(CKEDITOR.env.ie||CKEDITOR.env.air)}}},b="";CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(b+=' onkeypress\x3d"return false;"');
CKEDITOR.env.gecko&&(b+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var c=CKEDITOR.addTemplate("pathItem",'\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"'+b+' hidefocus\x3d"true"  draggable\x3d"false"  ondragstart\x3d"return false;" onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e');
CKEDITOR.plugins.add("elementspath",{init:function(b){b._.elementsPath={idBase:"cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_",filters:[]};b.on("uiSpace",function(c){"bottom"==c.data.space&&a(b,c.data)})}})}(),function(){function a(a,d){var m,k;d.on("refresh",function(a){var c=[e],d;for(d in a.data.states)c.push(a.data.states[d]);this.setState(CKEDITOR.tools.search(c,b)?b:e)},d,null,100);d.on("exec",function(b){m=a.getSelection();k=m.createBookmarks(1);b.data||(b.data={});b.data.done=!1},d,
null,0);d.on("exec",function(){a.forceNextSelectionCheck();m.selectBookmarks(k)},d,null,100)}var e=CKEDITOR.TRISTATE_DISABLED,b=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(b){var d=CKEDITOR.plugins.indent.genericDefinition;a(b,b.addCommand("indent",new d(!0)));a(b,b.addCommand("outdent",new d));b.ui.addButton&&(b.ui.addButton("Indent",{label:b.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),b.ui.addButton("Outdent",{label:b.lang.indent.outdent,command:"outdent",
directional:!0,toolbar:"indent,10"}));b.on("dirChanged",function(a){var d=b.createRange(),e=a.data.node;d.setStartBefore(e);d.setEndAfter(e);for(var g=new CKEDITOR.dom.walker(d),l;l=g.next();)if(l.type==CKEDITOR.NODE_ELEMENT)if(!l.equals(e)&&l.getDirection())d.setStartAfter(l),g=new CKEDITOR.dom.walker(d);else{var f=b.config.indentClasses;if(f)for(var n="ltr"==a.data.dir?["_rtl",""]:["","_rtl"],u=0;u<f.length;u++)l.hasClass(f[u]+n[0])&&(l.removeClass(f[u]+n[0]),l.addClass(f[u]+n[1]));f=l.getStyle("margin-right");
n=l.getStyle("margin-left");f?l.setStyle("margin-left",f):l.removeStyle("margin-left");n?l.setStyle("margin-right",n):l.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=!!a;this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,
b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var c=a.getCommand(b.relatedGlobal),d;for(d in b.jobs)c.on("exec",function(c){c.data.done||(a.fire("lockSnapshot"),b.execJob(a,d)&&(c.data.done=!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,d),c.on("refresh",function(c){c.data.states||(c.data.states={});c.data.states[b.name+"@"+d]=b.refreshJob(a,d,c.data.path)},this,null,d);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype=
{context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var m=this.jobs[b];if(m.state!=e)return m.exec.call(this,a)},refreshJob:function(a,b,m){b=this.jobs[b];a.activeFilter.checkFeature(this)?b.state=b.refresh.call(this,a,m):b.state=e;return b.state},getContext:function(a){return a.contains(this.context)}}}(),function(){function a(a){function c(e){for(var g=m.startContainer,q=m.endContainer;g&&!g.getParent().equals(e);)g=g.getParent();for(;q&&!q.getParent().equals(e);)q=
q.getParent();if(!g||!q)return!1;for(var A=[],r=!1;!r;)g.equals(q)&&(r=!0),A.push(g),g=g.getNext();if(1>A.length)return!1;g=e.getParents(!0);for(q=0;q<g.length;q++)if(g[q].getName&&k[g[q].getName()]){e=g[q];break}for(var g=d.isIndent?1:-1,q=A[0],A=A[A.length-1],r=CKEDITOR.plugins.list.listToArray(e,f),y=r[A.getCustomData("listarray_index")].indent,q=q.getCustomData("listarray_index");q<=A.getCustomData("listarray_index");q++)if(r[q].indent+=g,0<g){for(var C=r[q].parent,B=q-1;0<=B;B--)if(r[B].indent===
g){C=r[B].parent;break}r[q].parent=new CKEDITOR.dom.element(C.getName(),C.getDocument())}for(q=A.getCustomData("listarray_index")+1;q<r.length&&r[q].indent>y;q++)r[q].indent+=g;g=CKEDITOR.plugins.list.arrayToList(r,f,null,a.config.enterMode,e.getDirection());if(!d.isIndent){var z;if((z=e.getParent())&&z.is("li"))for(var A=g.listNode.getChildren(),v=[],x,q=A.count()-1;0<=q;q--)(x=A.getItem(q))&&x.is&&x.is("li")&&v.push(x)}g&&g.listNode.replace(e);if(v&&v.length)for(q=0;q<v.length;q++){for(x=e=v[q];(x=
x.getNext())&&x.is&&x.getName()in k;)CKEDITOR.env.needsNbspFiller&&!e.getFirst(b)&&e.append(m.document.createText(" ")),e.append(x);e.insertAfter(z)}g&&a.fire("contentDomInvalidated");return!0}for(var d=this,f=this.database,k=this.context,m,v=a.getSelection(),v=(v&&v.getRanges()).createIterator();m=v.getNextRange();){for(var x=m.getCommonAncestor();x&&(x.type!=CKEDITOR.NODE_ELEMENT||!k[x.getName()]);){if(a.editable().equals(x)){x=!1;break}x=x.getParent()}x||(x=m.startPath().contains(k))&&m.setEndAt(x,
CKEDITOR.POSITION_BEFORE_END);if(!x){var p=m.getEnclosedNode();p&&p.type==CKEDITOR.NODE_ELEMENT&&p.getName()in k&&(m.setStartAt(p,CKEDITOR.POSITION_AFTER_START),m.setEndAt(p,CKEDITOR.POSITION_BEFORE_END),x=p)}x&&m.startContainer.type==CKEDITOR.NODE_ELEMENT&&m.startContainer.getName()in k&&(p=new CKEDITOR.dom.walker(m),p.evaluator=e,m.startContainer=p.next());x&&m.endContainer.type==CKEDITOR.NODE_ELEMENT&&m.endContainer.getName()in k&&(p=new CKEDITOR.dom.walker(m),p.evaluator=e,m.endContainer=p.previous());
if(x)return c(x)}return 0}function e(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.is("li")}function b(a){return c(a)&&d(a)}var c=CKEDITOR.dom.walker.whitespaces(!0),d=CKEDITOR.dom.walker.bookmark(!1,!0),m=CKEDITOR.TRISTATE_DISABLED,k=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(b){function c(b){d.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];b.on("key",function(a){var c=b.elementPath();if("wysiwyg"==b.mode&&a.data.keyCode==this.indentKey&&
c){var d=this.getContext(c);!d||this.isIndent&&CKEDITOR.plugins.indentList.firstItemInPath(this.context,c,d)||(b.execCommand(this.relatedGlobal),a.cancel())}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(a,b){var c=this.getContext(b),d=CKEDITOR.plugins.indentList.firstItemInPath(this.context,b,c);return c&&this.isIndent&&!d?k:m}:function(a,b){return!this.getContext(b)||this.isIndent?m:k},exec:CKEDITOR.tools.bind(a,this)}}var d=CKEDITOR.plugins.indent;d.registerCommands(b,{indentlist:new c(b,
"indentlist",!0),outdentlist:new c(b,"outdentlist")});CKEDITOR.tools.extend(c.prototype,d.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(a,b,c){var d=b.contains(e);c||(c=b.contains(a));return c&&d&&d.equals(c.getFirst(e))}}(),function(){function a(a,b,c,d){for(var f=CKEDITOR.plugins.list.listToArray(b.root,c),e=[],g=0;g<b.contents.length;g++){var h=b.contents[g];(h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed")&&
(e.push(h),CKEDITOR.dom.element.setMarker(c,h,"list_item_processed",!0))}for(var h=b.root.getDocument(),k,l,g=0;g<e.length;g++){var m=e[g].getCustomData("listarray_index");k=f[m].parent;k.is(this.type)||(l=h.createElement(this.type),k.copyAttributes(l,{start:1,type:1}),l.removeStyle("list-style-type"),f[m].parent=l)}c=CKEDITOR.plugins.list.arrayToList(f,c,null,a.config.enterMode);for(var n,f=c.listNode.getChildCount(),g=0;g<f&&(n=c.listNode.getChild(g));g++)n.getName()==this.type&&d.push(n);c.listNode.replace(b.root);
a.fire("contentDomInvalidated")}function e(a,b,c){var d=b.contents,f=b.root.getDocument(),e=[];if(1==d.length&&d[0].equals(b.root)){var g=f.createElement("div");d[0].moveChildren&&d[0].moveChildren(g);d[0].append(g);d[0]=g}b=b.contents[0].getParent();for(g=0;g<d.length;g++)b=b.getCommonAncestor(d[g].getParent());a=a.config.useComputedState;var h,k;a=void 0===a||a;for(g=0;g<d.length;g++)for(var l=d[g],m;m=l.getParent();){if(m.equals(b)){e.push(l);!k&&l.getDirection()&&(k=1);l=l.getDirection(a);null!==
h&&(h=h&&h!=l?null:l);break}l=m}if(!(1>e.length)){d=e[e.length-1].getNext();g=f.createElement(this.type);for(c.push(g);e.length;)c=e.shift(),a=f.createElement("li"),l=c,l.is("pre")||x.test(l.getName())||"false"==l.getAttribute("contenteditable")?c.appendTo(a):(c.copyAttributes(a),h&&c.getDirection()&&(a.removeStyle("direction"),a.removeAttribute("dir")),c.moveChildren(a),c.remove()),a.appendTo(g);h&&k&&g.setAttribute("dir",h);d?g.insertBefore(d):g.appendTo(b)}}function b(a,b,c){function d(c){if(!(!(l=
k[c?"getFirst":"getLast"]())||l.is&&l.isBlockBoundary()||!(m=b.root[c?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))||m.is&&m.isBlockBoundary({br:1})))a.document.createElement("br")[c?"insertBefore":"insertAfter"](l)}for(var f=CKEDITOR.plugins.list.listToArray(b.root,c),e=[],g=0;g<b.contents.length;g++){var h=b.contents[g];(h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed")&&(e.push(h),CKEDITOR.dom.element.setMarker(c,h,"list_item_processed",!0))}h=null;for(g=0;g<e.length;g++)h=
e[g].getCustomData("listarray_index"),f[h].indent=-1;for(g=h+1;g<f.length;g++)if(f[g].indent>f[g-1].indent+1){e=f[g-1].indent+1-f[g].indent;for(h=f[g].indent;f[g]&&f[g].indent>=h;)f[g].indent+=e,g++;g--}var k=CKEDITOR.plugins.list.arrayToList(f,c,null,a.config.enterMode,b.root.getAttribute("dir")).listNode,l,m;d(!0);d();k.replace(b.root);a.fire("contentDomInvalidated")}function c(a,b){this.name=a;this.context=this.type=b;this.allowedContent=b+" li";this.requiredContent=b}function d(a,b,c,d){for(var f,
e;f=a[d?"getLast":"getFirst"](p);)(e=f.getDirection(1))!==b.getDirection(1)&&f.setAttribute("dir",e),f.remove(),c?f[d?"insertBefore":"insertAfter"](c):b.append(f,d),c=f}function m(a){function b(c){var f=a[c?"getPrevious":"getNext"](u);f&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(a.getName())&&(d(a,f,null,!c),a.remove(),a=f)}b();b(1)}function k(a){return a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in CKEDITOR.dtd.$block||a.getName()in CKEDITOR.dtd.$listItem)&&CKEDITOR.dtd[a.getName()]["#"]}function h(a,b,
c){a.fire("saveSnapshot");c.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var f=c.extractContents();b.trim(!1,!0);var e=b.createBookmark(),h=new CKEDITOR.dom.elementPath(b.startContainer),k=h.block,h=h.lastElement.getAscendant("li",1)||k,l=new CKEDITOR.dom.elementPath(c.startContainer),n=l.contains(CKEDITOR.dtd.$listItem),l=l.contains(CKEDITOR.dtd.$list);k?(k=k.getBogus())&&k.remove():l&&(k=l.getPrevious(u))&&v(k)&&k.remove();(k=f.getLast())&&k.type==CKEDITOR.NODE_ELEMENT&&k.is("br")&&k.remove();(k=
b.startContainer.getChild(b.startOffset))?f.insertBefore(k):b.startContainer.append(f);n&&(f=g(n))&&(h.contains(n)?(d(f,n.getParent(),n),f.remove()):h.append(f));for(;c.checkStartOfBlock()&&c.checkEndOfBlock();){l=c.startPath();f=l.block;if(!f)break;f.is("li")&&(h=f.getParent(),f.equals(h.getLast(u))&&f.equals(h.getFirst(u))&&(f=h));c.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START);f.remove()}c=c.clone();f=a.editable();c.setEndAt(f,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(c);c.evaluator=
function(a){return u(a)&&!v(a)};(c=c.next())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in CKEDITOR.dtd.$list&&m(c);b.moveToBookmark(e);b.select();a.fire("saveSnapshot")}function g(a){return(a=a.getLast(u))&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in l?a:null}var l={ol:1,ul:1},f=CKEDITOR.dom.walker.whitespaces(),n=CKEDITOR.dom.walker.bookmark(),u=function(a){return!(f(a)||n(a))},v=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(a,b,c,d,f){if(!l[a.getName()])return[];d||(d=
0);c||(c=[]);for(var e=0,g=a.getChildCount();e<g;e++){var h=a.getChild(e);h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(h,b,c,d+1);if("li"==h.$.nodeName.toLowerCase()){var k={parent:a,indent:d,element:h,contents:[]};f?k.grandparent=f:(k.grandparent=a.getParent(),k.grandparent&&"li"==k.grandparent.$.nodeName.toLowerCase()&&(k.grandparent=k.grandparent.getParent()));b&&CKEDITOR.dom.element.setMarker(b,h,"listarray_index",c.length);c.push(k);for(var m=
0,n=h.getChildCount(),u;m<n;m++)u=h.getChild(m),u.type==CKEDITOR.NODE_ELEMENT&&l[u.getName()]?CKEDITOR.plugins.list.listToArray(u,b,c,d+1,k.grandparent):k.contents.push(u)}}return c},arrayToList:function(a,b,c,d,f){c||(c=0);if(!a||a.length<c+1)return null;for(var e,g=a[c].parent.getDocument(),h=new CKEDITOR.dom.documentFragment(g),k=null,m=c,x=Math.max(a[c].indent,0),v=null,p,G,M=d==CKEDITOR.ENTER_P?"p":"div";;){var H=a[m];e=H.grandparent;p=H.element.getDirection(1);if(H.indent==x){k&&a[m].parent.getName()==
k.getName()||(k=a[m].parent.clone(!1,1),f&&k.setAttribute("dir",f),h.append(k));v=k.append(H.element.clone(0,1));p!=k.getDirection(1)&&v.setAttribute("dir",p);for(e=0;e<H.contents.length;e++)v.append(H.contents[e].clone(1,1));m++}else if(H.indent==Math.max(x,0)+1)H=a[m-1].element.getDirection(1),m=CKEDITOR.plugins.list.arrayToList(a,null,m,d,H!=p?p:null),!v.getChildCount()&&CKEDITOR.env.needsNbspFiller&&7>=g.$.documentMode&&v.append(g.createText(" ")),v.append(m.listNode),m=m.nextIndex;else if(-1==
H.indent&&!c&&e){l[e.getName()]?(v=H.element.clone(!1,!0),p!=e.getDirection(1)&&v.setAttribute("dir",p)):v=new CKEDITOR.dom.documentFragment(g);var k=e.getDirection(1)!=p,D=H.element,Q=D.getAttribute("class"),T=D.getAttribute("style"),R=v.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(d!=CKEDITOR.ENTER_BR||k||T||Q),L,W=H.contents.length,V;for(e=0;e<W;e++)if(L=H.contents[e],n(L)&&1<W)R?V=L.clone(1,1):v.append(L.clone(1,1));else if(L.type==CKEDITOR.NODE_ELEMENT&&L.isBlockBoundary()){k&&!L.getDirection()&&
L.setAttribute("dir",p);G=L;var X=D.getAttribute("style");X&&G.setAttribute("style",X.replace(/([^;])$/,"$1;")+(G.getAttribute("style")||""));Q&&L.addClass(Q);G=null;V&&(v.append(V),V=null);v.append(L.clone(1,1))}else R?(G||(G=g.createElement(M),v.append(G),k&&G.setAttribute("dir",p)),T&&G.setAttribute("style",T),Q&&G.setAttribute("class",Q),V&&(G.append(V),V=null),G.append(L.clone(1,1))):v.append(L.clone(1,1));V&&((G||v).append(V),V=null);v.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&m!=a.length-1&&(CKEDITOR.env.needsBrFiller&&
(p=v.getLast())&&p.type==CKEDITOR.NODE_ELEMENT&&p.is("br")&&p.remove(),(p=v.getLast(u))&&p.type==CKEDITOR.NODE_ELEMENT&&p.is(CKEDITOR.dtd.$block)||v.append(g.createElement("br")));p=v.$.nodeName.toLowerCase();"div"!=p&&"p"!=p||v.appendBogus();h.append(v);k=null;m++}else return null;G=null;if(a.length<=m||Math.max(a[m].indent,0)<x)break}if(b)for(a=h.getFirst();a;){if(a.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(b,a),a.getName()in CKEDITOR.dtd.$listItem&&(c=a,g=f=d=void 0,d=c.getDirection()))){for(f=
c.getParent();f&&!(g=f.getDirection());)f=f.getParent();d==g&&c.removeAttribute("dir")}a=a.getNextSourceNode()}return{listNode:h,nextIndex:m}}};var x=/^h[1-6]$/,p=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);c.prototype={exec:function(c){function d(a){return l[a.root.getName()]&&!f(a.root,[CKEDITOR.NODE_COMMENT])}function f(a,b){return CKEDITOR.tools.array.filter(a.getChildren().toArray(),function(a){return-1===CKEDITOR.tools.array.indexOf(b,a.type)}).length}function g(a){var b=!0;if(0===a.getChildCount())return!1;
a.forEach(function(a){if(a.type!==CKEDITOR.NODE_COMMENT)return b=!1},null,!0);return b}this.refresh(c,c.elementPath());var h=c.config,k=c.getSelection(),n=k&&k.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var B=c.editable();if(B.getFirst(u)){var z=1==n.length&&n[0];(h=z&&z.getEnclosedNode())&&h.is&&this.type==h.getName()&&this.setState(CKEDITOR.TRISTATE_ON)}else h.enterMode==CKEDITOR.ENTER_BR?B.appendBogus():n[0].fixBlock(1,h.enterMode==CKEDITOR.ENTER_P?"p":"div"),k.selectRanges(n)}for(var h=
k.createBookmarks(!0),B=[],v={},n=n.createIterator(),x=0;(z=n.getNextRange())&&++x;){var p=z.getBoundaryNodes(),F=p.startNode,G=p.endNode;F.type==CKEDITOR.NODE_ELEMENT&&"td"==F.getName()&&z.setStartAt(p.startNode,CKEDITOR.POSITION_AFTER_START);G.type==CKEDITOR.NODE_ELEMENT&&"td"==G.getName()&&z.setEndAt(p.endNode,CKEDITOR.POSITION_BEFORE_END);z=z.createIterator();for(z.forceBrBreak=this.state==CKEDITOR.TRISTATE_OFF;p=z.getNextParagraph();)if(!p.getCustomData("list_block")&&!g(p)){CKEDITOR.dom.element.setMarker(v,
p,"list_block",1);for(var M=c.elementPath(p),F=M.elements,G=0,M=M.blockLimit,H,D=F.length-1;0<=D&&(H=F[D]);D--)if(l[H.getName()]&&M.contains(H)){M.removeCustomData("list_group_object_"+x);(F=H.getCustomData("list_group_object"))?F.contents.push(p):(F={root:H,contents:[p]},B.push(F),CKEDITOR.dom.element.setMarker(v,H,"list_group_object",F));G=1;break}G||(G=M,G.getCustomData("list_group_object_"+x)?G.getCustomData("list_group_object_"+x).contents.push(p):(F={root:G,contents:[p]},CKEDITOR.dom.element.setMarker(v,
G,"list_group_object_"+x,F),B.push(F)))}}for(H=[];0<B.length;)F=B.shift(),this.state==CKEDITOR.TRISTATE_OFF?d(F)||(l[F.root.getName()]?a.call(this,c,F,v,H):e.call(this,c,F,H)):this.state==CKEDITOR.TRISTATE_ON&&l[F.root.getName()]&&!d(F)&&b.call(this,c,F,v);for(D=0;D<H.length;D++)m(H[D]);CKEDITOR.dom.element.clearAllMarkers(v);k.selectBookmarks(h);c.focus()},refresh:function(a,b){var c=b.contains(l,1),d=b.blockLimit||b.root;c&&d.contains(c)?this.setState(c.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):
this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(a){a.blockless||(a.addCommand("numberedlist",new c("numberedlist","ol")),a.addCommand("bulletedlist",new c("bulletedlist","ul")),a.ui.addButton&&(a.ui.addButton("NumberedList",{label:a.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),a.ui.addButton("BulletedList",{label:a.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),a.on("key",
function(b){var c=b.data.domEvent.getKey(),d;if("wysiwyg"==a.mode&&c in{8:1,46:1}){var f=a.getSelection().getRanges()[0],e=f&&f.startPath();if(f&&f.collapsed){var m=8==c,n=a.editable(),z=new CKEDITOR.dom.walker(f.clone());z.evaluator=function(a){return u(a)&&!v(a)};z.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};c=f.clone();if(m){var p;(p=e.contains(l))&&f.checkBoundaryOfElement(p,CKEDITOR.START)&&(p=p.getParent())&&p.is("li")&&(p=g(p))?(d=p,p=p.getPrevious(u),c.moveToPosition(p&&
v(p)?p:d,CKEDITOR.POSITION_BEFORE_START)):(z.range.setStartAt(n,CKEDITOR.POSITION_AFTER_START),z.range.setEnd(f.startContainer,f.startOffset),(p=z.previous())&&p.type==CKEDITOR.NODE_ELEMENT&&(p.getName()in l||p.is("li"))&&(p.is("li")||(z.range.selectNodeContents(p),z.reset(),z.evaluator=k,p=z.previous()),d=p,c.moveToElementEditEnd(d),c.moveToPosition(c.endPath().block,CKEDITOR.POSITION_BEFORE_END)));if(d)h(a,c,f),b.cancel();else{var x=e.contains(l);x&&f.checkBoundaryOfElement(x,CKEDITOR.START)&&(d=
x.getFirst(u),f.checkBoundaryOfElement(d,CKEDITOR.START)&&(p=x.getPrevious(u),g(d)?p&&(f.moveToElementEditEnd(p),f.select()):a.execCommand("outdent"),b.cancel()))}}else if(d=e.contains("li")){if(z.range.setEndAt(n,CKEDITOR.POSITION_BEFORE_END),m=(n=d.getLast(u))&&k(n)?n:d,e=0,(p=z.next())&&p.type==CKEDITOR.NODE_ELEMENT&&p.getName()in l&&p.equals(n)?(e=1,p=z.next()):f.checkBoundaryOfElement(m,CKEDITOR.END)&&(e=2),e&&p){f=f.clone();f.moveToElementEditStart(p);if(1==e&&(c.optimize(),!c.startContainer.equals(d))){for(d=
c.startContainer;d.is(CKEDITOR.dtd.$inline);)x=d,d=d.getParent();x&&c.moveToPosition(x,CKEDITOR.POSITION_AFTER_END)}2==e&&(c.moveToPosition(c.endPath().block,CKEDITOR.POSITION_BEFORE_END),f.endPath().block&&f.moveToPosition(f.endPath().block,CKEDITOR.POSITION_AFTER_START));h(a,c,f);b.cancel()}}else z.range.setEndAt(n,CKEDITOR.POSITION_BEFORE_END),(p=z.next())&&p.type==CKEDITOR.NODE_ELEMENT&&p.is(l)&&(p=p.getFirst(u),e.block&&f.checkStartOfBlock()&&f.checkEndOfBlock()?(e.block.remove(),f.moveToElementEditStart(p),
f.select()):g(p)?(f.moveToElementEditStart(p),f.select()):(f=f.clone(),f.moveToElementEditStart(p),h(a,c,f)),b.cancel());setTimeout(function(){a.selectionChange(1)})}}}))}})}(),function(){function a(a,b,c){c=a.config.forceEnterMode||c;if("wysiwyg"==a.mode){b||(b=a.activeEnterMode);var d=a.elementPath();d&&!d.isContextFor("p")&&(b=CKEDITOR.ENTER_BR,c=1);a.fire("saveSnapshot");b==CKEDITOR.ENTER_BR?k(a,b,null,c):h(a,b,null,c);a.fire("saveSnapshot")}}function e(a){a=a.getSelection().getRanges(!0);for(var b=
a.length-1;0<b;b--)a[b].deleteContents();return a[0]}function b(a){var b=a.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")},!0);if(a.root.equals(b))return a;b=new CKEDITOR.dom.range(b);b.moveToRange(a);return b}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){a(b)}});b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){a(b,b.activeShiftEnterMode,
1)}});b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var c=CKEDITOR.dom.walker.whitespaces(),d=CKEDITOR.dom.walker.bookmark(),m,k,h,g;CKEDITOR.plugins.enterkey={enterBlock:function(a,f,h,m){function v(a){var b;if(a===CKEDITOR.ENTER_BR||-1===CKEDITOR.tools.indexOf(["td","th"],w.lastElement.getName())||1!==w.lastElement.getChildCount())return!1;a=w.lastElement.getChild(0).clone(!0);(b=a.getBogus())&&b.remove();return a.getText().length?!1:!0}if(h=h||e(a)){h=b(h);var x=h.document,
p=h.checkStartOfBlock(),t=h.checkEndOfBlock(),w=a.elementPath(h.startContainer),q=w.block,A=f==CKEDITOR.ENTER_DIV?"div":"p",r;if(q&&p&&t){p=q.getParent();if(p.is("li")&&1<p.getChildCount()){x=new CKEDITOR.dom.element("li");r=a.createRange();x.insertAfter(p);q.remove();r.setStart(x,0);a.getSelection().selectRanges([r]);return}if(q.is("li")||q.getParent().is("li")){q.is("li")||(q=q.getParent(),p=q.getParent());r=p.getParent();h=!q.hasPrevious();var y=!q.hasNext();m=a.getSelection();var A=m.createBookmarks(),
C=q.getDirection(1),t=q.getAttribute("class"),B=q.getAttribute("style"),z=r.getDirection(1)!=C;a=a.enterMode!=CKEDITOR.ENTER_BR||z||B||t;if(r.is("li"))h||y?(h&&y&&p.remove(),q[y?"insertAfter":"insertBefore"](r)):q.breakParent(r);else{if(a)if(w.block.is("li")?(r=x.createElement(f==CKEDITOR.ENTER_P?"p":"div"),z&&r.setAttribute("dir",C),B&&r.setAttribute("style",B),t&&r.setAttribute("class",t),q.moveChildren(r)):r=w.block,h||y)r[h?"insertBefore":"insertAfter"](p);else q.breakParent(p),r.insertAfter(p);
else if(q.appendBogus(!0),h||y)for(;x=q[h?"getFirst":"getLast"]();)x[h?"insertBefore":"insertAfter"](p);else for(q.breakParent(p);x=q.getLast();)x.insertAfter(p);q.remove()}m.selectBookmarks(A);return}if(q&&q.getParent().is("blockquote")){q.breakParent(q.getParent());q.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||q.getPrevious().remove();q.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||q.getNext().remove();h.moveToElementEditStart(q);h.select();return}}else if(q&&q.is("pre")&&
!t){k(a,f,h,m);return}if(B=h.splitBlock(A)){a=B.previousBlock;q=B.nextBlock;p=B.wasStartOfBlock;t=B.wasEndOfBlock;q?(y=q.getParent(),y.is("li")&&(q.breakParent(y),q.move(q.getNext(),1))):a&&(y=a.getParent())&&y.is("li")&&(a.breakParent(y),y=a.getNext(),h.moveToElementEditStart(y),a.move(a.getPrevious()));if(p||t)if(v(f))h.moveToElementEditStart(h.getTouchedStartNode());else{if(a){if(a.is("li")||!g.test(a.getName())&&!a.is("pre"))r=a.clone()}else q&&(r=q.clone());r?m&&!r.is("li")&&r.renameNode(A):
y&&y.is("li")?r=y:(r=x.createElement(A),a&&(C=a.getDirection())&&r.setAttribute("dir",C));if(x=B.elementPath)for(f=0,m=x.elements.length;f<m;f++){A=x.elements[f];if(A.equals(x.block)||A.equals(x.blockLimit))break;CKEDITOR.dtd.$removeEmpty[A.getName()]&&(A=A.clone(),r.moveChildren(A),r.append(A))}r.appendBogus();r.getParent()||h.insertNode(r);r.is("li")&&r.removeAttribute("value");!CKEDITOR.env.ie||!p||t&&a.getChildCount()||(h.moveToElementEditStart(t?a:r),h.select());h.moveToElementEditStart(p&&!t?
q:r)}else q.is("li")&&(r=h.clone(),r.selectNodeContents(q),r=new CKEDITOR.dom.walker(r),r.evaluator=function(a){return!(d(a)||c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(y=r.next())&&y.type==CKEDITOR.NODE_ELEMENT&&y.is("ul","ol")&&(CKEDITOR.env.needsBrFiller?x.createElement("br"):x.createText(" ")).insertBefore(y)),q&&h.moveToElementEditStart(q);h.select();h.scrollIntoView()}}},enterBr:function(a,b,c,d){if(c=c||e(a)){var k=c.document,
m=c.checkEndOfBlock(),p=new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()),t=p.block,w=t&&p.block.getName();d||"li"!=w?(!d&&m&&g.test(w)?(m=t.getDirection())?(k=k.createElement("div"),k.setAttribute("dir",m),k.insertAfter(t),c.setStart(k,0)):(k.createElement("br").insertAfter(t),CKEDITOR.env.gecko&&k.createText("").insertAfter(t),c.setStartAt(t.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(a="pre"==w&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?
k.createText("\r"):k.createElement("br"),c.deleteContents(),c.insertNode(a),CKEDITOR.env.needsBrFiller?(k.createText("﻿").insertAfter(a),m&&(t||p.blockLimit).appendBogus(),a.getNext().$.nodeValue="",c.setStartAt(a.getNext(),CKEDITOR.POSITION_AFTER_START)):c.setStartAt(a,CKEDITOR.POSITION_AFTER_END)),c.collapse(!0),c.select(),c.scrollIntoView()):h(a,b,c,d)}}};m=CKEDITOR.plugins.enterkey;k=m.enterBr;h=m.enterBlock;g=/^h[1-6]$/}(),function(){function a(a,b){var c={},d=[],m={nbsp:" ",shy:"­",gt:"\x3e",
lt:"\x3c",amp:"\x26",apos:"'",quot:'"'};a=a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(a,f){var e=b?"\x26"+f+";":m[f];c[e]=b?m[f]:"\x26"+f+";";d.push(e);return""});a=a.replace(/,$/,"");if(!b&&a){a=a.split(",");var k=document.createElement("div"),h;k.innerHTML="\x26"+a.join(";\x26")+";";h=k.innerHTML;k=null;for(k=0;k<h.length;k++){var g=h.charAt(k);c[g]="\x26"+a[k]+";";d.push(g)}}c.regex=d.join(b?"|":"");return c}CKEDITOR.plugins.add("entities",{afterInit:function(e){function b(a){return g[a]}
function c(a){return"force"!=d.entities_processNumerical&&k[a]?k[a]:"\x26#"+a.charCodeAt(0)+";"}var d=e.config;if(e=(e=e.dataProcessor)&&e.htmlFilter){var m=[];!1!==d.basicEntities&&m.push("nbsp,gt,lt,amp");d.entities&&(m.length&&m.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
d.entities_latin&&m.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"),d.entities_greek&&m.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
d.entities_additional&&m.push(d.entities_additional));var k=a(m.join(",")),h=k.regex?"["+k.regex+"]":"a^";delete k.regex;d.entities&&d.entities_processNumerical&&(h="[^ -~]|"+h);var h=new RegExp(h,"g"),g=a("nbsp,gt,lt,amp,shy",!0),l=new RegExp(g.regex,"g");e.addRules({text:function(a){return a.replace(l,b).replace(h,c)}},{applyToAll:!0,excludeNestedEditable:!0})}}})}(),CKEDITOR.config.basicEntities=!0,CKEDITOR.config.entities=!0,CKEDITOR.config.entities_latin=!0,CKEDITOR.config.entities_greek=!0,
CKEDITOR.config.entities_additional="#39",CKEDITOR.plugins.add("popup"),CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{popup:function(a,e,b,c){e=e||"80%";b=b||"70%";"string"==typeof e&&1<e.length&&"%"==e.substr(e.length-1,1)&&(e=parseInt(window.screen.width*parseInt(e,10)/100,10));"string"==typeof b&&1<b.length&&"%"==b.substr(b.length-1,1)&&(b=parseInt(window.screen.height*parseInt(b,10)/100,10));640>e&&(e=640);420>b&&(b=420);var d=parseInt((window.screen.height-b)/2,10),m=parseInt((window.screen.width-
e)/2,10);c=(c||"location\x3dno,menubar\x3dno,toolbar\x3dno,dependent\x3dyes,minimizable\x3dno,modal\x3dyes,alwaysRaised\x3dyes,resizable\x3dyes,scrollbars\x3dyes")+",width\x3d"+e+",height\x3d"+b+",top\x3d"+d+",left\x3d"+m;var k=window.open("",null,c,!0);if(!k)return!1;try{-1==navigator.userAgent.toLowerCase().indexOf(" chrome/")&&(k.moveTo(m,d),k.resizeTo(e,b)),k.focus(),k.location.href=a}catch(h){window.open(a,null,c,!0)}return!0}}),"use strict",function(){function a(a){this.editor=a;this.loaders=
[]}function e(a,c,e){var h=a.config.fileTools_defaultFileName;this.editor=a;this.lang=a.lang;"string"===typeof c?(this.data=c,this.file=b(this.data),this.loaded=this.total=this.file.size):(this.data=null,this.file=c,this.total=this.file.size,this.loaded=0);e?this.fileName=e:this.file.name?this.fileName=this.file.name:(a=this.file.type.split("/"),h&&(a[0]=h),this.fileName=a.join("."));this.uploaded=0;this.responseData=this.uploadTotal=null;this.status="created";this.abort=function(){this.changeStatus("abort")}}
function b(a){var b=a.match(c)[1];a=a.replace(c,"");a=atob(a);var e=[],h,g,l,f;for(h=0;h<a.length;h+=512){g=a.slice(h,h+512);l=Array(g.length);for(f=0;f<g.length;f++)l[f]=g.charCodeAt(f);g=new Uint8Array(l);e.push(g)}return new Blob(e,{type:b})}CKEDITOR.plugins.add("filetools",{beforeInit:function(b){b.uploadRepository=new a(b);b.on("fileUploadRequest",function(a){var b=a.data.fileLoader;b.xhr.open("POST",b.uploadUrl,!0);a.data.requestData.upload={file:b.file,name:b.fileName}},null,null,5);b.on("fileUploadRequest",
function(a){var c=a.data.fileLoader,e=new FormData;a=a.data.requestData;var g=b.config.fileTools_requestHeaders,l,f;for(f in a){var n=a[f];"object"===typeof n&&n.file?e.append(f,n.file,n.name):e.append(f,n)}e.append("ckCsrfToken",CKEDITOR.tools.getCsrfToken());if(g)for(l in g)c.xhr.setRequestHeader(l,g[l]);c.xhr.send(e)},null,null,999);b.on("fileUploadResponse",function(a){var b=a.data.fileLoader,c=b.xhr,d=a.data;try{var e=JSON.parse(c.responseText);e.error&&e.error.message&&(d.message=e.error.message);
if(e.uploaded)for(var f in e)d[f]=e[f];else a.cancel()}catch(n){d.message=b.lang.filetools.responseError,CKEDITOR.warn("filetools-response-error",{responseText:c.responseText}),a.cancel()}},null,null,999)}});a.prototype={create:function(a,b,c){c=c||e;var h=this.loaders.length;a=new c(this.editor,a,b);a.id=h;this.loaders[h]=a;this.fire("instanceCreated",a);return a},isFinished:function(){for(var a=0;a<this.loaders.length;++a)if(!this.loaders[a].isFinished())return!1;return!0}};e.prototype={loadAndUpload:function(a,
b){var c=this;this.once("loaded",function(e){e.cancel();c.once("update",function(a){a.cancel()},null,null,0);c.upload(a,b)},null,null,0);this.load()},load:function(){var a=this,b=this.reader=new FileReader;a.changeStatus("loading");this.abort=function(){a.reader.abort()};b.onabort=function(){a.changeStatus("abort")};b.onerror=function(){a.message=a.lang.filetools.loadError;a.changeStatus("error")};b.onprogress=function(b){a.loaded=b.loaded;a.update()};b.onload=function(){a.loaded=a.total;a.data=b.result;
a.changeStatus("loaded")};b.readAsDataURL(this.file)},upload:function(a,b){var c=b||{};a?(this.uploadUrl=a,this.xhr=new XMLHttpRequest,this.attachRequestListeners(),this.editor.fire("fileUploadRequest",{fileLoader:this,requestData:c})&&this.changeStatus("uploading")):(this.message=this.lang.filetools.noUrlError,this.changeStatus("error"))},attachRequestListeners:function(){function a(){"error"!=c.status&&(c.message=c.lang.filetools.networkError,c.changeStatus("error"))}function b(){"abort"!=c.status&&
c.changeStatus("abort")}var c=this,e=this.xhr;c.abort=function(){e.abort();b()};e.onerror=a;e.onabort=b;e.upload?(e.upload.onprogress=function(a){a.lengthComputable&&(c.uploadTotal||(c.uploadTotal=a.total),c.uploaded=a.loaded,c.update())},e.upload.onerror=a,e.upload.onabort=b):(c.uploadTotal=c.total,c.update());e.onload=function(){c.update();if("abort"!=c.status)if(c.uploaded=c.uploadTotal,200>e.status||299<e.status)c.message=c.lang.filetools["httpError"+e.status],c.message||(c.message=c.lang.filetools.httpError.replace("%1",
e.status)),c.changeStatus("error");else{for(var a={fileLoader:c},b=["message","fileName","url"],d=c.editor.fire("fileUploadResponse",a),m=0;m<b.length;m++){var u=b[m];"string"===typeof a[u]&&(c[u]=a[u])}c.responseData=a;delete c.responseData.fileLoader;!1===d?c.changeStatus("error"):c.changeStatus("uploaded")}}},changeStatus:function(a){this.status=a;if("error"==a||"abort"==a||"loaded"==a||"uploaded"==a)this.abort=function(){};this.fire(a);this.update()},update:function(){this.fire("update")},isFinished:function(){return!!this.status.match(/^(?:loaded|uploaded|error|abort)$/)}};
CKEDITOR.event.implementOn(a.prototype);CKEDITOR.event.implementOn(e.prototype);var c=/^data:(\S*?);base64,/;CKEDITOR.fileTools||(CKEDITOR.fileTools={});CKEDITOR.tools.extend(CKEDITOR.fileTools,{uploadRepository:a,fileLoader:e,getUploadUrl:function(a,b){var c=CKEDITOR.tools.capitalize;return b&&a[b+"UploadUrl"]?a[b+"UploadUrl"]:a.uploadUrl?a.uploadUrl:b&&a["filebrowser"+c(b,1)+"UploadUrl"]?a["filebrowser"+c(b,1)+"UploadUrl"]+"\x26responseType\x3djson":a.filebrowserUploadUrl?a.filebrowserUploadUrl+
"\x26responseType\x3djson":null},isTypeSupported:function(a,b){return!!a.type.match(b)},isFileUploadSupported:"function"===typeof FileReader&&"function"===typeof(new FileReader).readAsDataURL&&"function"===typeof FormData&&"function"===typeof(new FormData).append&&"function"===typeof XMLHttpRequest&&"function"===typeof Blob})}(),function(){function a(a,b){var c=[];if(b)for(var d in b)c.push(d+"\x3d"+encodeURIComponent(b[d]));else return a;return a+(-1!=a.indexOf("?")?"\x26":"?")+c.join("\x26")}function e(b){return!b.match(/command=QuickUpload/)||
b.match(/(\?|&)responseType=json/)?b:a(b,{responseType:"json"})}function b(a){a+="";return a.charAt(0).toUpperCase()+a.substr(1)}function c(){var c=this.getDialog(),d=c.getParentEditor();d._.filebrowserSe=this;var f=d.config["filebrowser"+b(c.getName())+"WindowWidth"]||d.config.filebrowserWindowWidth||"80%",c=d.config["filebrowser"+b(c.getName())+"WindowHeight"]||d.config.filebrowserWindowHeight||"70%",e=this.filebrowser.params||{};e.CKEditor=d.name;e.CKEditorFuncNum=d._.filebrowserFn;e.langCode||
(e.langCode=d.langCode);e=a(this.filebrowser.url,e);d.popup(e,f,c,d.config.filebrowserWindowFeatures||d.config.fileBrowserWindowFeatures)}function d(a){var b=new CKEDITOR.dom.element(a.$.form);b&&((a=b.$.elements.ckCsrfToken)?a=new CKEDITOR.dom.element(a):(a=new CKEDITOR.dom.element("input"),a.setAttributes({name:"ckCsrfToken",type:"hidden"}),b.append(a)),a.setAttribute("value",CKEDITOR.tools.getCsrfToken()))}function m(){var a=this.getDialog();a.getParentEditor()._.filebrowserSe=this;return a.getContentElement(this["for"][0],
this["for"][1]).getInputElement().$.value&&a.getContentElement(this["for"][0],this["for"][1]).getAction()?!0:!1}function k(b,c,d){var f=d.params||{};f.CKEditor=b.name;f.CKEditorFuncNum=b._.filebrowserFn;f.langCode||(f.langCode=b.langCode);c.action=a(d.url,f);c.filebrowser=d}function h(a,l,v,x){if(x&&x.length)for(var p,t=x.length;t--;)if(p=x[t],"hbox"!=p.type&&"vbox"!=p.type&&"fieldset"!=p.type||h(a,l,v,p.children),p.filebrowser)if("string"==typeof p.filebrowser&&(p.filebrowser={action:"fileButton"==
p.type?"QuickUpload":"Browse",target:p.filebrowser}),"Browse"==p.filebrowser.action){var w=p.filebrowser.url;void 0===w&&(w=a.config["filebrowser"+b(l)+"BrowseUrl"],void 0===w&&(w=a.config.filebrowserBrowseUrl));w&&(p.onClick=c,p.filebrowser.url=w,p.hidden=!1)}else if("QuickUpload"==p.filebrowser.action&&p["for"]&&(w=p.filebrowser.url,void 0===w&&(w=a.config["filebrowser"+b(l)+"UploadUrl"],void 0===w&&(w=a.config.filebrowserUploadUrl)),w)){var q=p.onClick;p.onClick=function(b){var c=b.sender,h=c.getDialog().getContentElement(this["for"][0],
this["for"][1]).getInputElement(),k=CKEDITOR.fileTools&&CKEDITOR.fileTools.isFileUploadSupported;if(q&&!1===q.call(c,b))return!1;if(m.call(c,b)){if("form"!==a.config.filebrowserUploadMethod&&k)return b=a.uploadRepository.create(h.$.files[0]),b.on("uploaded",function(a){var b=a.sender.responseData;f.call(a.sender.editor,b.url,b.message)}),b.on("error",g.bind(this)),b.on("abort",g.bind(this)),b.loadAndUpload(e(w)),"xhr";d(h);return!0}return!1};p.filebrowser.url=w;p.hidden=!1;k(a,v.getContents(p["for"][0]).get(p["for"][1]),
p.filebrowser)}}function g(a){var b={};try{b=JSON.parse(a.sender.xhr.response)||{}}catch(c){}this.enable();alert(b.error?b.error.message:a.sender.message)}function l(a,b,c){if(-1!==c.indexOf(";")){c=c.split(";");for(var d=0;d<c.length;d++)if(l(a,b,c[d]))return!0;return!1}return(a=a.getContents(b).get(c).filebrowser)&&a.url}function f(a,b){var c=this._.filebrowserSe.getDialog(),d=this._.filebrowserSe["for"],f=this._.filebrowserSe.filebrowser.onSelect;d&&c.getContentElement(d[0],d[1]).reset();if("function"!=
typeof b||!1!==b.call(this._.filebrowserSe))if(!f||!1!==f.call(this._.filebrowserSe,a,b))if("string"==typeof b&&b&&alert(b),a&&(d=this._.filebrowserSe,c=d.getDialog(),d=d.filebrowser.target||null))if(d=d.split(":"),f=c.getContentElement(d[0],d[1]))f.setValue(a),c.selectPage(d[0])}CKEDITOR.plugins.add("filebrowser",{requires:"popup,filetools",init:function(a){a._.filebrowserFn=CKEDITOR.tools.addFunction(f,a);a.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)})}});CKEDITOR.on("dialogDefinition",
function(a){if(a.editor.plugins.filebrowser)for(var b=a.data.definition,c,d=0;d<b.contents.length;++d)if(c=b.contents[d])h(a.editor,a.data.name,b,c.elements),c.hidden&&c.filebrowser&&(c.hidden=!l(b,c.id,c.filebrowser))})}(),function(){function a(a){var d=a.config,m=a.fire("uiSpace",{space:"top",html:""}).html,k=function(){function f(a,c,d){g.setStyle(c,b(d));g.setStyle("position",a)}function h(a){var b=m.getDocumentPosition();switch(a){case "top":f("absolute","top",b.y-q-y);break;case "pin":f("fixed",
"top",B);break;case "bottom":f("absolute","top",b.y+(t.height||t.bottom-t.top)+y)}l=a}var l,m,p,t,w,q,A,r=d.floatSpaceDockedOffsetX||0,y=d.floatSpaceDockedOffsetY||0,C=d.floatSpacePinnedOffsetX||0,B=d.floatSpacePinnedOffsetY||0;return function(f){if(m=a.editable()){var n=f&&"focus"==f.name;n&&g.show();a.fire("floatingSpaceLayout",{show:n});g.removeStyle("left");g.removeStyle("right");p=g.getClientRect();t=m.getClientRect();w=e.getViewPaneSize();q=p.height;A="pageXOffset"in e.$?e.$.pageXOffset:CKEDITOR.document.$.documentElement.scrollLeft;
l?(q+y<=t.top?h("top"):q+y>w.height-t.bottom?h("pin"):h("bottom"),f=w.width/2,f=d.floatSpacePreferRight?"right":0<t.left&&t.right<w.width&&t.width>p.width?"rtl"==d.contentsLangDirection?"right":"left":f-t.left>t.right-f?"left":"right",p.width>w.width?(f="left",n=0):(n="left"==f?0<t.left?t.left:0:t.right<w.width?w.width-t.right:0,n+p.width>w.width&&(f="left"==f?"right":"left",n=0)),g.setStyle(f,b(("pin"==l?C:r)+n+("pin"==l?0:"left"==f?A:-A)))):(l="pin",h("pin"),k(f))}}}();if(m){var h=new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+
CKEDITOR.env.cssClass+'" dir\x3d"{langDir}" title\x3d"'+(CKEDITOR.env.gecko?" ":"")+'" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"'+(a.title?' aria-labelledby\x3d"cke_{name}_arialbl"':" ")+"\x3e"+(a.title?'\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e':" ")+'\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'),g=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(h.output({content:m,
id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none;z-index:"+(d.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.title}))),l=CKEDITOR.tools.eventsBuffer(500,k),f=CKEDITOR.tools.eventsBuffer(100,k);g.unselectable();g.on("mousedown",function(a){a=a.data;a.getTarget().hasAscendant("a",1)||a.preventDefault()});a.on("focus",function(b){k(b);a.on("change",l.input);e.on("scroll",f.input);e.on("resize",f.input)});a.on("blur",function(){g.hide();a.removeListener("change",
l.input);e.removeListener("scroll",f.input);e.removeListener("resize",f.input)});a.on("destroy",function(){e.removeListener("scroll",f.input);e.removeListener("resize",f.input);g.clearCustomData();g.remove()});a.focusManager.hasFocus&&g.show();a.focusManager.add(g,1)}}var e=CKEDITOR.document.getWindow(),b=CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace",{init:function(b){b.on("loaded",function(){a(this)},null,null,20)}})}(),CKEDITOR.plugins.add("listblock",{requires:"panel",onLoad:function(){var a=
CKEDITOR.addTemplate("panel-list",'\x3cul role\x3d"presentation" class\x3d"cke_panel_list"\x3e{items}\x3c/ul\x3e'),e=CKEDITOR.addTemplate("panel-list-item",'\x3cli id\x3d"{id}" class\x3d"cke_panel_listItem" role\x3dpresentation\x3e\x3ca id\x3d"{id}_option" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"{title}" draggable\x3d"false" ondragstart\x3d"return false;" href\x3d"javascript:void(\'{val}\')"  {onclick}\x3d"CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role\x3d"option"\x3e{text}\x3c/a\x3e\x3c/li\x3e'),
b=CKEDITOR.addTemplate("panel-list-group",'\x3ch1 id\x3d"{id}" draggable\x3d"false" ondragstart\x3d"return false;" class\x3d"cke_panel_grouptitle" role\x3d"presentation" \x3e{label}\x3c/h1\x3e'),c=/\'/g;CKEDITOR.ui.panel.prototype.addListBlock=function(a,b){return this.addBlock(a,new CKEDITOR.ui.listBlock(this.getHolderElement(),b))};CKEDITOR.ui.listBlock=CKEDITOR.tools.createClass({base:CKEDITOR.ui.panel.block,$:function(a,b){b=b||{};var c=b.attributes||(b.attributes={});(this.multiSelect=!!b.multiSelect)&&
(c["aria-multiselectable"]=!0);!c.role&&(c.role="listbox");this.base.apply(this,arguments);this.element.setAttribute("role",c.role);c=this.keys;c[40]="next";c[9]="next";c[38]="prev";c[CKEDITOR.SHIFT+9]="prev";c[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(c[13]="mouseup");this._.pendingHtml=[];this._.pendingList=[];this._.items={};this._.groups={}},_:{close:function(){if(this._.started){var b=a.output({items:this._.pendingList.join("")});this._.pendingList=[];this._.pendingHtml.push(b);
delete this._.started}},getClick:function(){this._.click||(this._.click=CKEDITOR.tools.addFunction(function(a){var b=this.toggle(a);if(this.onClick)this.onClick(a,b)},this));return this._.click}},proto:{add:function(a,b,k){var h=CKEDITOR.tools.getNextId();this._.started||(this._.started=1,this._.size=this._.size||0);this._.items[a]=h;var g;g=CKEDITOR.tools.htmlEncodeAttr(a).replace(c,"\\'");a={id:h,val:g,onclick:CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick",clickFn:this._.getClick(),
title:CKEDITOR.tools.htmlEncodeAttr(k||a),text:b||a};this._.pendingList.push(e.output(a))},startGroup:function(a){this._.close();var c=CKEDITOR.tools.getNextId();this._.groups[a]=c;this._.pendingHtml.push(b.output({id:c,label:a}))},commit:function(){this._.close();this.element.appendHtml(this._.pendingHtml.join(""));delete this._.size;this._.pendingHtml=[]},toggle:function(a){var b=this.isMarked(a);b?this.unmark(a):this.mark(a);return!b},hideGroup:function(a){var b=(a=this.element.getDocument().getById(this._.groups[a]))&&
a.getNext();a&&(a.setStyle("display","none"),b&&"ul"==b.getName()&&b.setStyle("display","none"))},hideItem:function(a){this.element.getDocument().getById(this._.items[a]).setStyle("display","none")},showAll:function(){var a=this._.items,b=this._.groups,c=this.element.getDocument(),e;for(e in a)c.getById(a[e]).setStyle("display","");for(var g in b)a=c.getById(b[g]),e=a.getNext(),a.setStyle("display",""),e&&"ul"==e.getName()&&e.setStyle("display","")},mark:function(a){this.multiSelect||this.unmarkAll();
a=this._.items[a];var b=this.element.getDocument().getById(a);b.addClass("cke_selected");this.element.getDocument().getById(a+"_option").setAttribute("aria-selected",!0);this.onMark&&this.onMark(b)},markFirstDisplayed:function(){var a=this;this._.markFirstDisplayed(function(){a.multiSelect||a.unmarkAll()})},unmark:function(a){var b=this.element.getDocument();a=this._.items[a];var c=b.getById(a);c.removeClass("cke_selected");b.getById(a+"_option").removeAttribute("aria-selected");this.onUnmark&&this.onUnmark(c)},
unmarkAll:function(){var a=this._.items,b=this.element.getDocument(),c;for(c in a){var e=a[c];b.getById(e).removeClass("cke_selected");b.getById(e+"_option").removeAttribute("aria-selected")}this.onUnmark&&this.onUnmark()},isMarked:function(a){return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected")},focus:function(a){this._.focusIndex=-1;var b=this.element.getElementsByTag("a"),c,e=-1;if(a)for(c=this.element.getDocument().getById(this._.items[a]).getFirst();a=b.getItem(++e);){if(a.equals(c)){this._.focusIndex=
e;break}}else this.element.focus();c&&setTimeout(function(){c.focus()},0)}}})}}),CKEDITOR.plugins.add("richcombo",{requires:"floatpanel,listblock,button",beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler)}}),function(){var a='\x3cspan id\x3d"{id}" class\x3d"cke_combo cke_combo__{name} {cls}" role\x3d"presentation"\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_combo_label"\x3e{label}\x3c/span\x3e\x3ca class\x3d"cke_combo_button" title\x3d"{title}" tabindex\x3d"-1"'+
(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"listbox"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(a+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(a+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var a=a+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?
'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan id\x3d"{id}_text" class\x3d"cke_combo_text cke_combo_inlinelabel"\x3e{label}\x3c/span\x3e\x3cspan class\x3d"cke_combo_open"\x3e\x3cspan class\x3d"cke_combo_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":CKEDITOR.env.air?"\x26nbsp;":"")+"\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e"),e=CKEDITOR.addTemplate("combo",a);CKEDITOR.UI_RICHCOMBO="richcombo";CKEDITOR.ui.richCombo=
CKEDITOR.tools.createClass({$:function(a){CKEDITOR.tools.extend(this,a,{canGroup:!1,title:a.label,modes:{wysiwyg:1},editorFocus:1});a=this.panel||{};delete this.panel;this.id=CKEDITOR.tools.getNextNumber();this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.className="cke_combopanel";a.block={multiSelect:a.multiSelect,attributes:a.attributes};a.toolbarRelated=!0;this._={panelDefinition:a,items:{},listeners:[]}},proto:{renderHtml:function(a){var c=[];this.render(a,c);return c.join("")},
render:function(a,c){function d(){if(this.getState()!=CKEDITOR.TRISTATE_ON){var c=this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;a.readOnly&&!this.readOnly&&(c=CKEDITOR.TRISTATE_DISABLED);this.setState(c);this.setValue("");c!=CKEDITOR.TRISTATE_DISABLED&&this.refresh&&this.refresh()}}var m=CKEDITOR.env,k="cke_"+this.id,h=CKEDITOR.tools.addFunction(function(c){u&&(a.unlockSelection(1),u=0);l.execute(c)},this),g=this,l={id:k,combo:this,focus:function(){CKEDITOR.document.getById(k).getChild(1).focus()},
execute:function(c){var d=g._;if(d.state!=CKEDITOR.TRISTATE_DISABLED)if(g.createPanel(a),d.on)d.panel.hide();else{g.commit();var f=g.getValue();f?d.list.mark(f):d.list.unmarkAll();d.panel.showBlock(g.id,new CKEDITOR.dom.element(c),4)}},clickFn:h};this._.listeners.push(a.on("activeFilterChange",d,this));this._.listeners.push(a.on("mode",d,this));this._.listeners.push(a.on("selectionChange",d,this));!this.readOnly&&this._.listeners.push(a.on("readOnly",d,this));var f=CKEDITOR.tools.addFunction(function(a,
b){a=new CKEDITOR.dom.event(a);var c=a.getKeystroke();switch(c){case 13:case 32:case 40:CKEDITOR.tools.callFunction(h,b);break;default:l.onkey(l,c)}a.preventDefault()}),n=CKEDITOR.tools.addFunction(function(){l.onfocus&&l.onfocus()}),u=0;l.keyDownFn=f;m={id:k,name:this.name||this.command,label:this.label,title:this.title,cls:this.className||"",titleJs:m.gecko&&!m.hc?"":(this.title||"").replace("'",""),keydownFn:f,focusFn:n,clickFn:h};e.output(m,c);if(this.onRender)this.onRender();return l},createPanel:function(a){if(!this._.panel){var c=
this._.panelDefinition,d=this._.panelDefinition.block,e=c.parent||CKEDITOR.document.getBody(),k="cke_combopanel__"+this.name,h=new CKEDITOR.ui.floatPanel(a,e,c),c=h.addListBlock(this.id,d),g=this;h.onShow=function(){this.element.addClass(k);g.setState(CKEDITOR.TRISTATE_ON);g._.on=1;g.editorFocus&&!a.focusManager.hasFocus&&a.focus();if(g.onOpen)g.onOpen()};h.onHide=function(c){this.element.removeClass(k);g.setState(g.modes&&g.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);g._.on=0;
if(!c&&g.onClose)g.onClose()};h.onEscape=function(){h.hide(1)};c.onClick=function(a,b){g.onClick&&g.onClick.call(g,a,b);h.hide()};this._.panel=h;this._.list=c;h.getBlock(this.id).onHide=function(){g._.on=0;g.setState(CKEDITOR.TRISTATE_OFF)};this.init&&this.init()}},setValue:function(a,c){this._.value=a;var d=this.document.getById("cke_"+this.id+"_text");d&&(a||c?d.removeClass("cke_combo_inlinelabel"):(c=this.label,d.addClass("cke_combo_inlinelabel")),d.setText("undefined"!=typeof c?c:a))},getValue:function(){return this._.value||
""},unmarkAll:function(){this._.list.unmarkAll()},mark:function(a){this._.list.mark(a)},hideItem:function(a){this._.list.hideItem(a)},hideGroup:function(a){this._.list.hideGroup(a)},showAll:function(){this._.list.showAll()},add:function(a,c,d){this._.items[a]=d||a;this._.list.add(a,c,d)},startGroup:function(a){this._.list.startGroup(a)},commit:function(){this._.committed||(this._.list.commit(),this._.committed=1,CKEDITOR.ui.fire("ready",this));this._.committed=1},setState:function(a){if(this._.state!=
a){var c=this.document.getById("cke_"+this.id);c.setState(a,"cke_combo");a==CKEDITOR.TRISTATE_DISABLED?c.setAttribute("aria-disabled",!0):c.removeAttribute("aria-disabled");this._.state=a}},getState:function(){return this._.state},enable:function(){this._.state==CKEDITOR.TRISTATE_DISABLED&&this.setState(this._.lastState)},disable:function(){this._.state!=CKEDITOR.TRISTATE_DISABLED&&(this._.lastState=this._.state,this.setState(CKEDITOR.TRISTATE_DISABLED))},destroy:function(){CKEDITOR.tools.array.forEach(this._.listeners,
function(a){a.removeListener()});this._.listeners=[]}},statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a)}}}});CKEDITOR.ui.prototype.addRichCombo=function(a,c){this.add(a,CKEDITOR.UI_RICHCOMBO,c)}}(),CKEDITOR.plugins.add("format",{requires:"richcombo",init:function(a){if(!a.blockless){for(var e=a.config,b=a.lang.format,c=e.format_tags.split(";"),d={},m=0,k=[],h=0;h<c.length;h++){var g=c[h],l=new CKEDITOR.style(e["format_"+g]);if(!a.filter.customConfig||a.filter.check(l))m++,
d[g]=l,d[g]._.enterMode=a.config.enterMode,k.push(l)}0!==m&&a.ui.addRichCombo("Format",{label:b.label,title:b.panelTitle,toolbar:"styles,20",allowedContent:k,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(e.contentsCss),multiSelect:!1,attributes:{"aria-label":b.panelTitle}},init:function(){this.startGroup(b.panelTitle);for(var a in d){var c=b["tag_"+a];this.add(a,d[a].buildPreview(c),c)}},onClick:function(b){a.focus();a.fire("saveSnapshot");b=d[b];var c=a.elementPath();b.checkActive(c,a)||a.applyStyle(b);
setTimeout(function(){a.fire("saveSnapshot")},0)},onRender:function(){a.on("selectionChange",function(b){var c=this.getValue();b=b.data.path;this.refresh();for(var e in d)if(d[e].checkActive(b,a)){e!=c&&this.setValue(e,a.lang.format["tag_"+e]);return}this.setValue("")},this)},onOpen:function(){this.showAll();for(var b in d)a.activeFilter.check(d[b])||this.hideItem(b)},refresh:function(){var b=a.elementPath();if(b){if(b.isContextFor("p"))for(var c in d)if(a.activeFilter.check(d[c]))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}}})}}}),
CKEDITOR.config.format_tags="p;h1;h2;h3;h4;h5;h6;pre;address;div",CKEDITOR.config.format_p={element:"p"},CKEDITOR.config.format_div={element:"div"},CKEDITOR.config.format_pre={element:"pre"},CKEDITOR.config.format_address={element:"address"},CKEDITOR.config.format_h1={element:"h1"},CKEDITOR.config.format_h2={element:"h2"},CKEDITOR.config.format_h3={element:"h3"},CKEDITOR.config.format_h4={element:"h4"},CKEDITOR.config.format_h5={element:"h5"},CKEDITOR.config.format_h6={element:"h6"},function(){var a=
{canUndo:!1,exec:function(a){var b=a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(e){e.blockless||(e.addCommand("horizontalrule",a),e.ui.addButton&&e.ui.addButton("HorizontalRule",{label:e.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})}(),CKEDITOR.plugins.add("htmlwriter",{init:function(a){var e=new CKEDITOR.htmlWriter;e.forceSimpleAmpersand=a.config.forceSimpleAmpersand;
e.indentationChars=a.config.dataIndentationChars||"\t";a.dataProcessor.writer=e}}),CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base();this.indentationChars="\t";this.selfClosingEnd=" /\x3e";this.lineBreakChars="\n";this.sortAttributes=1;this._.indent=0;this._.indentation="";this._.inPre=0;this._.rules={};var a=CKEDITOR.dtd,e;for(e in CKEDITOR.tools.extend({},a.$nonBodyContent,a.$block,a.$listItem,a.$tableContent))this.setRules(e,{indent:!a[e]["#"],
breakBeforeOpen:1,breakBeforeClose:!a[e]["#"],breakAfterClose:1,needsSpace:e in a.$block&&!(e in{li:1,dt:1,dd:1})});this.setRules("br",{breakAfterOpen:1});this.setRules("title",{indent:0,breakAfterOpen:0});this.setRules("style",{indent:0,breakBeforeClose:1});this.setRules("pre",{breakAfterOpen:1,indent:0})},proto:{openTag:function(a){var e=this._.rules[a];this._.afterCloser&&e&&e.needsSpace&&this._.needsSpace&&this._.output.push("\n");this._.indent?this.indentation():e&&e.breakBeforeOpen&&(this.lineBreak(),
this.indentation());this._.output.push("\x3c",a);this._.afterCloser=0},openTagClose:function(a,e){var b=this._.rules[a];e?(this._.output.push(this.selfClosingEnd),b&&b.breakAfterClose&&(this._.needsSpace=b.needsSpace)):(this._.output.push("\x3e"),b&&b.indent&&(this._.indentation+=this.indentationChars));b&&b.breakAfterOpen&&this.lineBreak();"pre"==a&&(this._.inPre=1)},attribute:function(a,e){"string"==typeof e&&(e=CKEDITOR.tools.htmlEncodeAttr(e),this.forceSimpleAmpersand&&(e=e.replace(/&amp;/g,"\x26")));
this._.output.push(" ",a,'\x3d"',e,'"')},closeTag:function(a){var e=this._.rules[a];e&&e.indent&&(this._.indentation=this._.indentation.substr(this.indentationChars.length));this._.indent?this.indentation():e&&e.breakBeforeClose&&(this.lineBreak(),this.indentation());this._.output.push("\x3c/",a,"\x3e");"pre"==a&&(this._.inPre=0);e&&e.breakAfterClose&&(this.lineBreak(),this._.needsSpace=e.needsSpace);this._.afterCloser=1},text:function(a){this._.indent&&(this.indentation(),!this._.inPre&&(a=CKEDITOR.tools.ltrim(a)));
this._.output.push(a)},comment:function(a){this._.indent&&this.indentation();this._.output.push("\x3c!--",a,"--\x3e")},lineBreak:function(){!this._.inPre&&0<this._.output.length&&this._.output.push(this.lineBreakChars);this._.indent=1},indentation:function(){!this._.inPre&&this._.indentation&&this._.output.push(this._.indentation);this._.indent=0},reset:function(){this._.output=[];this._.indent=0;this._.indentation="";this._.afterCloser=0;this._.inPre=0;this._.needsSpace=0},setRules:function(a,e){var b=
this._.rules[a];b?CKEDITOR.tools.extend(b,e,!0):this._.rules[a]=e}}}),function(){function a(a,c){c||(c=a.getSelection().getSelectedElement());if(c&&c.is("img")&&!c.data("cke-realelement")&&!c.isReadOnly())return c}function e(a){var c=a.getStyle("float");if("inherit"==c||"none"==c)c=0;c||(c=a.getAttribute("align"));return c}CKEDITOR.plugins.add("image",{requires:"dialog",init:function(b){if(!b.plugins.detectConflict("image",["easyimage","image2"])){CKEDITOR.dialog.add("image",this.path+"dialogs/image.js");
var c="img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}";CKEDITOR.dialog.isTabEnabled(b,"image","advanced")&&(c="img[alt,dir,id,lang,longdesc,!src,title]{*}(*)");b.addCommand("image",new CKEDITOR.dialogCommand("image",{allowedContent:c,requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));b.ui.addButton&&
b.ui.addButton("Image",{label:b.lang.common.image,command:"image",toolbar:"insert,10"});b.on("doubleclick",function(a){var b=a.data.element;!b.is("img")||b.data("cke-realelement")||b.isReadOnly()||(a.data.dialog="image")});b.addMenuItems&&b.addMenuItems({image:{label:b.lang.image.menu,command:"image",group:"image"}});b.contextMenu&&b.contextMenu.addListener(function(c){if(a(b,c))return{image:CKEDITOR.TRISTATE_OFF}})}},afterInit:function(b){function c(c){var m=b.getCommand("justify"+c);if(m){if("left"==
c||"right"==c)m.on("exec",function(k){var h=a(b),g;h&&(g=e(h),g==c?(h.removeStyle("float"),c==e(h)&&h.removeAttribute("align")):h.setStyle("float",c),k.cancel())});m.on("refresh",function(k){var h=a(b);h&&(h=e(h),this.setState(h==c?CKEDITOR.TRISTATE_ON:"right"==c||"left"==c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),k.cancel())})}}b.plugins.image2||(c("left"),c("right"),c("center"),c("block"))}})}(),CKEDITOR.config.image_removeLinkByEmptyURL=!0,function(){function a(a,b){var d=c.exec(a),e=
c.exec(b);if(d){if(!d[2]&&"px"==e[2])return e[1];if("px"==d[2]&&!e[2])return e[1]+"px"}return b}var e=CKEDITOR.htmlParser.cssStyle,b=CKEDITOR.tools.cssLength,c=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,d={elements:{$:function(b){var c=b.attributes;if((c=(c=(c=c&&c["data-cke-realelement"])&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(c)))&&c.children[0])&&b.attributes["data-cke-resizable"]){var d=(new e(b)).rules;b=c.attributes;var g=d.width,d=d.height;g&&(b.width=a(b.width,g));d&&(b.height=
a(b.height,d))}return c}}};CKEDITOR.plugins.add("fakeobjects",{init:function(a){a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}","fakeobjects")},afterInit:function(a){(a=(a=a.dataProcessor)&&a.htmlFilter)&&a.addRules(d,{applyToAll:!0})}});CKEDITOR.editor.prototype.createFakeElement=function(a,c,d,g){var l=this.lang.fakeobjects,l=l[d]||l.unknown;c={"class":c,"data-cke-realelement":encodeURIComponent(a.getOuterHtml()),"data-cke-real-node-type":a.type,alt:l,title:l,align:a.getAttribute("align")||
""};CKEDITOR.env.hc||(c.src=CKEDITOR.tools.transparentImageData);d&&(c["data-cke-real-element-type"]=d);g&&(c["data-cke-resizable"]=g,d=new e,g=a.getAttribute("width"),a=a.getAttribute("height"),g&&(d.rules.width=b(g)),a&&(d.rules.height=b(a)),d.populate(c));return this.document.createElement("img",{attributes:c})};CKEDITOR.editor.prototype.createFakeParserElement=function(a,c,d,g){var l=this.lang.fakeobjects,l=l[d]||l.unknown,f;f=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(f);f=f.getHtml();c=
{"class":c,"data-cke-realelement":encodeURIComponent(f),"data-cke-real-node-type":a.type,alt:l,title:l,align:a.attributes.align||""};CKEDITOR.env.hc||(c.src=CKEDITOR.tools.transparentImageData);d&&(c["data-cke-real-element-type"]=d);g&&(c["data-cke-resizable"]=g,g=a.attributes,a=new e,d=g.width,g=g.height,void 0!==d&&(a.rules.width=b(d)),void 0!==g&&(a.rules.height=b(g)),a.populate(c));return new CKEDITOR.htmlParser.element("img",c)};CKEDITOR.editor.prototype.restoreRealElement=function(b){if(b.data("cke-real-node-type")!=
CKEDITOR.NODE_ELEMENT)return null;var c=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(b.data("cke-realelement")),this.document);if(b.data("cke-resizable")){var d=b.getStyle("width");b=b.getStyle("height");d&&c.setAttribute("width",a(c.getAttribute("width"),d));b&&c.setAttribute("height",a(c.getAttribute("height"),b))}return c}}(),"use strict",function(){function a(a){return a.replace(/'/g,"\\$\x26")}function e(a){for(var b,c=a.length,d=[],f=0;f<c;f++)b=a.charCodeAt(f),d.push(b);return"String.fromCharCode("+
d.join(",")+")"}function b(b,c){var d=b.plugins.link,f=d.compiledProtectionFunction.params,e,g;g=[d.compiledProtectionFunction.name,"("];for(var h=0;h<f.length;h++)d=f[h].toLowerCase(),e=c[d],0<h&&g.push(","),g.push("'",e?a(encodeURIComponent(c[d])):"","'");g.push(")");return g.join("")}function c(a){a=a.config.emailProtection||"";var b;a&&"encode"!=a&&(b={},a.replace(/^([^(]+)\(([^)]+)\)$/,function(a,c,d){b.name=c;b.params=[];d.replace(/[^,\s]+/g,function(a){b.params.push(a)})}));return b}CKEDITOR.plugins.add("link",
{requires:"dialog,fakeobjects",onLoad:function(){function a(b){return c.replace(/%1/g,"rtl"==b?"right":"left").replace(/%2/g,"cke_contents_"+b)}var b="background:url("+CKEDITOR.getUrl(this.path+"images"+(CKEDITOR.env.hidpi?"/hidpi":"")+"/anchor.png")+") no-repeat %1 center;border:1px dotted #00f;background-size:16px;",c=".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{"+b+"padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{"+b+"width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";
CKEDITOR.addCss(a("ltr")+a("rtl"))},init:function(a){var b="a[!href]";CKEDITOR.dialog.isTabEnabled(a,"link","advanced")&&(b=b.replace("]",",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type,download]{*}(*)"));CKEDITOR.dialog.isTabEnabled(a,"link","target")&&(b=b.replace("]",",target,onclick]"));a.addCommand("link",new CKEDITOR.dialogCommand("link",{allowedContent:b,requiredContent:"a[href]"}));a.addCommand("anchor",new CKEDITOR.dialogCommand("anchor",{allowedContent:"a[!name,id]",requiredContent:"a[name]"}));
a.addCommand("unlink",new CKEDITOR.unlinkCommand);a.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand);a.setKeystroke(CKEDITOR.CTRL+76,"link");a.setKeystroke(CKEDITOR.CTRL+75,"link");a.ui.addButton&&(a.ui.addButton("Link",{label:a.lang.link.toolbar,command:"link",toolbar:"links,10"}),a.ui.addButton("Unlink",{label:a.lang.link.unlink,command:"unlink",toolbar:"links,20"}),a.ui.addButton("Anchor",{label:a.lang.link.anchor.toolbar,command:"anchor",toolbar:"links,30"}));CKEDITOR.dialog.add("link",
this.path+"dialogs/link.js");CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");a.on("doubleclick",function(b){var c=b.data.element.getAscendant({a:1,img:1},!0);c&&!c.isReadOnly()&&(c.is("a")?(b.data.dialog=!c.getAttribute("name")||c.getAttribute("href")&&c.getChildCount()?"link":"anchor",b.data.link=c):CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,c)&&(b.data.dialog="anchor"))},null,null,0);a.on("doubleclick",function(b){b.data.dialog in{link:1,anchor:1}&&b.data.link&&a.getSelection().selectElement(b.data.link)},
null,null,20);a.addMenuItems&&a.addMenuItems({anchor:{label:a.lang.link.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:a.lang.link.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:a.lang.link.menu,command:"link",group:"link",order:1},unlink:{label:a.lang.link.unlink,command:"unlink",group:"link",order:5}});a.contextMenu&&a.contextMenu.addListener(function(b){if(!b||b.isReadOnly())return null;b=CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,b);if(!b&&
!(b=CKEDITOR.plugins.link.getSelectedLink(a)))return null;var c={};b.getAttribute("href")&&b.getChildCount()&&(c={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF});b&&b.hasAttribute("name")&&(c.anchor=c.removeAnchor=CKEDITOR.TRISTATE_OFF);return c});this.compiledProtectionFunction=c(a)},afterInit:function(a){a.dataProcessor.dataFilter.addRules({elements:{a:function(b){return b.attributes.name?b.children.length?null:a.createFakeParserElement(b,"cke_anchor","anchor"):null}}});var b=a._.elementsPath&&
a._.elementsPath.filters;b&&b.push(function(b,c){if("a"==c&&(CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,b)||b.getAttribute("name")&&(!b.getAttribute("href")||!b.getChildCount())))return"anchor"})}});var d=/^javascript:/,m=/^mailto:([^?]+)(?:\?(.+))?$/,k=/subject=([^;?:@&=$,\/]*)/i,h=/body=([^;?:@&=$,\/]*)/i,g=/^#(.*)$/,l=/^((?:http|https|ftp|news):\/\/)?(.*)$/,f=/^(_(?:self|top|parent|blank))$/,n=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,u=/^javascript:([^(]+)\(([^)]+)\)$/,
v=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,x=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,p=/^tel:(.*)$/,t={id:"advId",dir:"advLangDir",accessKey:"advAccessKey",name:"advName",lang:"advLangCode",tabindex:"advTabIndex",title:"advTitle",type:"advContentType","class":"advCSSClasses",charset:"advCharset",style:"advStyles",rel:"advRel"};CKEDITOR.plugins.link={getSelectedLink:function(a,b){var c=a.getSelection(),d=c.getSelectedElement(),f=c.getRanges(),
e=[],g;if(!b&&d&&d.is("a"))return d;for(d=0;d<f.length;d++)if(g=c.getRanges()[d],g.shrink(CKEDITOR.SHRINK_ELEMENT,!0,{skipBogus:!0}),(g=a.elementPath(g.getCommonAncestor()).contains("a",1))&&b)e.push(g);else if(g)return g;return b?e:null},getEditorAnchors:function(a){for(var b=a.editable(),c=b.isInline()&&!a.plugins.divarea?a.document:b,b=c.getElementsByTag("a"),c=c.getElementsByTag("img"),d=[],f=0,e;e=b.getItem(f++);)(e.data("cke-saved-name")||e.hasAttribute("name"))&&d.push({name:e.data("cke-saved-name")||
e.getAttribute("name"),id:e.getAttribute("id")});for(f=0;e=c.getItem(f++);)(e=this.tryRestoreFakeAnchor(a,e))&&d.push({name:e.getAttribute("name"),id:e.getAttribute("id")});return d},fakeAnchor:!0,tryRestoreFakeAnchor:function(a,b){if(b&&b.data("cke-real-element-type")&&"anchor"==b.data("cke-real-element-type")){var c=a.restoreRealElement(b);if(c.data("cke-saved-name"))return c}},parseLinkAttributes:function(a,b){var c=b&&(b.data("cke-saved-href")||b.getAttribute("href"))||"",e=a.plugins.link.compiledProtectionFunction,
y=a.config.emailProtection,C,B={};c.match(d)&&("encode"==y?c=c.replace(n,function(a,b,c){c=c||"";return"mailto:"+String.fromCharCode.apply(String,b.split(","))+c.replace(/\\'/g,"'")}):y&&c.replace(u,function(a,b,c){if(b==e.name){B.type="email";a=B.email={};b=/(^')|('$)/g;c=c.match(/[^,\s]+/g);for(var d=c.length,f,g,h=0;h<d;h++)f=decodeURIComponent,g=c[h].replace(b,"").replace(/\\'/g,"'"),g=f(g),f=e.params[h].toLowerCase(),a[f]=g;a.address=[a.name,a.domain].join("@")}}));if(!B.type)if(y=c.match(g))B.type=
"anchor",B.anchor={},B.anchor.name=B.anchor.id=y[1];else if(y=c.match(p))B.type="tel",B.tel=y[1];else if(y=c.match(m)){C=c.match(k);c=c.match(h);B.type="email";var z=B.email={};z.address=y[1];C&&(z.subject=decodeURIComponent(C[1]));c&&(z.body=decodeURIComponent(c[1]))}else c&&(C=c.match(l))&&(B.type="url",B.url={},B.url.protocol=C[1],B.url.url=C[2]);if(b){if(c=b.getAttribute("target"))B.target={type:c.match(f)?c:"frame",name:c};else if(c=(c=b.data("cke-pa-onclick")||b.getAttribute("onclick"))&&c.match(v))for(B.target=
{type:"popup",name:c[1]};y=x.exec(c[2]);)"yes"!=y[2]&&"1"!=y[2]||y[1]in{height:1,width:1,top:1,left:1}?isFinite(y[2])&&(B.target[y[1]]=y[2]):B.target[y[1]]=!0;null!==b.getAttribute("download")&&(B.download=!0);var c={},I;for(I in t)(y=b.getAttribute(I))&&(c[t[I]]=y);if(I=b.data("cke-saved-name")||c.advName)c.advName=I;CKEDITOR.tools.isEmpty(c)||(B.advanced=c)}return B},getLinkAttributes:function(c,d){var f=c.config.emailProtection||"",g={};switch(d.type){case "url":var f=d.url&&void 0!==d.url.protocol?
d.url.protocol:"http://",h=d.url&&CKEDITOR.tools.trim(d.url.url)||"";g["data-cke-saved-href"]=0===h.indexOf("/")?h:f+h;break;case "anchor":f=d.anchor&&d.anchor.id;g["data-cke-saved-href"]="#"+(d.anchor&&d.anchor.name||f||"");break;case "email":var k=d.email,h=k.address;switch(f){case "":case "encode":var l=encodeURIComponent(k.subject||""),m=encodeURIComponent(k.body||""),k=[];l&&k.push("subject\x3d"+l);m&&k.push("body\x3d"+m);k=k.length?"?"+k.join("\x26"):"";"encode"==f?(f=["javascript:void(location.href\x3d'mailto:'+",
e(h)],k&&f.push("+'",a(k),"'"),f.push(")")):f=["mailto:",h,k];break;default:f=h.split("@",2),k.name=f[0],k.domain=f[1],f=["javascript:",b(c,k)]}g["data-cke-saved-href"]=f.join("");break;case "tel":g["data-cke-saved-href"]="tel:"+d.tel}if(d.target)if("popup"==d.target.type){for(var f=["window.open(this.href, '",d.target.name||"","', '"],n="resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "),h=n.length,l=function(a){d.target[a]&&n.push(a+"\x3d"+d.target[a])},k=0;k<
h;k++)n[k]+=d.target[n[k]]?"\x3dyes":"\x3dno";l("width");l("left");l("height");l("top");f.push(n.join(","),"'); return false;");g["data-cke-pa-onclick"]=f.join("")}else"notSet"!=d.target.type&&d.target.name&&(g.target=d.target.name);d.download&&(g.download="");if(d.advanced){for(var p in t)(f=d.advanced[t[p]])&&(g[p]=f);g.name&&(g["data-cke-saved-name"]=g.name)}g["data-cke-saved-href"]&&(g.href=g["data-cke-saved-href"]);p={target:1,onclick:1,"data-cke-pa-onclick":1,"data-cke-saved-name":1,download:1};
d.advanced&&CKEDITOR.tools.extend(p,t);for(var u in g)delete p[u];return{set:g,removed:CKEDITOR.tools.objectKeys(p)}},showDisplayTextForElement:function(a,b){var c={img:1,table:1,tbody:1,thead:1,tfoot:1,input:1,select:1,textarea:1},d=b.getSelection();return b.widgets&&b.widgets.focused||d&&1<d.getRanges().length?!1:!a||!a.getName||!a.is(c)}};CKEDITOR.unlinkCommand=function(){};CKEDITOR.unlinkCommand.prototype={exec:function(a){if(CKEDITOR.env.ie){var b=a.getSelection().getRanges()[0],c=b.getPreviousEditableNode()&&
b.getPreviousEditableNode().getAscendant("a",!0)||b.getNextEditableNode()&&b.getNextEditableNode().getAscendant("a",!0),d;b.collapsed&&c&&(d=b.createBookmark(),b.selectNodeContents(c),b.select())}c=new CKEDITOR.style({element:"a",type:CKEDITOR.STYLE_INLINE,alwaysRemoveElement:1});a.removeStyle(c);d&&(b.moveToBookmark(d),b.select())},refresh:function(a,b){var c=b.lastElement&&b.lastElement.getAscendant("a",!0);c&&"a"==c.getName()&&c.getAttribute("href")&&c.getChildCount()?this.setState(CKEDITOR.TRISTATE_OFF):
this.setState(CKEDITOR.TRISTATE_DISABLED)},contextSensitive:1,startDisabled:1,requiredContent:"a[href]",editorFocus:1};CKEDITOR.removeAnchorCommand=function(){};CKEDITOR.removeAnchorCommand.prototype={exec:function(a){var b=a.getSelection(),c=b.createBookmarks(),d;if(b&&(d=b.getSelectedElement())&&(d.getChildCount()?d.is("a"):CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,d)))d.remove(1);else if(d=CKEDITOR.plugins.link.getSelectedLink(a))d.hasAttribute("href")?(d.removeAttributes({name:1,"data-cke-saved-name":1}),
d.removeClass("cke_anchor")):d.remove(1);b.selectBookmarks(c)},requiredContent:"a[name]"};CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0,linkShowTargetTab:!0})}(),"use strict",function(){function a(a,b,c){return n(b)&&n(c)&&c.equals(b.getNext(function(a){return!(aa(a)||ba(a)||u(a))}))}function e(a){this.upper=a[0];this.lower=a[1];this.set.apply(this,a.slice(2))}function b(a){var b=a.element;if(b&&n(b)&&(b=b.getAscendant(a.triggers,!0))&&a.editable.contains(b)){var c=k(b);if("true"==
c.getAttribute("contenteditable"))return b;if(c.is(a.triggers))return c}return null}function c(a,b,c){r(a,b);r(a,c);a=b.size.bottom;c=c.size.top;return a&&c?0|(a+c)/2:a||c}function d(a,b,c){return b=b[c?"getPrevious":"getNext"](function(b){return b&&b.type==CKEDITOR.NODE_TEXT&&!aa(b)||n(b)&&!u(b)&&!f(a,b)})}function m(a,b,c){return a>b&&a<c}function k(a,b){if(a.data("cke-editable"))return null;for(b||(a=a.getParent());a&&!a.data("cke-editable");){if(a.hasAttribute("contenteditable"))return a;a=a.getParent()}return null}
function h(a){var b=a.doc,c=E('\x3cspan contenteditable\x3d"false" data-cke-magic-line\x3d"1" style\x3d"'+U+"position:absolute;border-top:1px dashed "+a.boxColor+'"\x3e\x3c/span\x3e',b),d=CKEDITOR.getUrl(this.path+"images/"+(K.hidpi?"hidpi/":"")+"icon"+(a.rtl?"-rtl":"")+".png");z(c,{attach:function(){this.wrap.getParent()||this.wrap.appendTo(a.editable,!0);return this},lineChildren:[z(E('\x3cspan title\x3d"'+a.editor.lang.magicline.title+'" contenteditable\x3d"false"\x3e\x26#8629;\x3c/span\x3e',b),
{base:U+"height:17px;width:17px;"+(a.rtl?"left":"right")+":17px;background:url("+d+") center no-repeat "+a.boxColor+";cursor:pointer;"+(K.hc?"font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;":"")+(K.hidpi?"background-size: 9px 10px;":""),looks:["top:-8px; border-radius: 2px;","top:-17px; border-radius: 2px 2px 0px 0px;","top:-1px; border-radius: 0px 0px 2px 2px;"]}),z(E(J,b),{base:S+"left:0px;border-left-color:"+a.boxColor+";",looks:["border-width:8px 0 8px 8px;top:-8px",
"border-width:8px 0 0 8px;top:-8px","border-width:0 0 8px 8px;top:0px"]}),z(E(J,b),{base:S+"right:0px;border-right-color:"+a.boxColor+";",looks:["border-width:8px 8px 8px 0;top:-8px","border-width:8px 8px 0 0;top:-8px","border-width:0 8px 8px 0;top:0px"]})],detach:function(){this.wrap.getParent()&&this.wrap.remove();return this},mouseNear:function(){r(a,this);var b=a.holdDistance,c=this.size;return c&&m(a.mouse.y,c.top-b,c.bottom+b)&&m(a.mouse.x,c.left-b,c.right+b)?!0:!1},place:function(){var b=a.view,
c=a.editable,d=a.trigger,f=d.upper,e=d.lower,g=f||e,h=g.getParent(),k={};this.trigger=d;f&&r(a,f,!0);e&&r(a,e,!0);r(a,h,!0);a.inInlineMode&&y(a,!0);h.equals(c)?(k.left=b.scroll.x,k.right=-b.scroll.x,k.width=""):(k.left=g.size.left-g.size.margin.left+b.scroll.x-(a.inInlineMode?b.editable.left+b.editable.border.left:0),k.width=g.size.outerWidth+g.size.margin.left+g.size.margin.right+b.scroll.x,k.right="");f&&e?k.top=f.size.margin.bottom===e.size.margin.top?0|f.size.bottom+f.size.margin.bottom/2:f.size.margin.bottom<
e.size.margin.top?f.size.bottom+f.size.margin.bottom:f.size.bottom+f.size.margin.bottom-e.size.margin.top:f?e||(k.top=f.size.bottom+f.size.margin.bottom):k.top=e.size.top-e.size.margin.top;d.is(R)||m(k.top,b.scroll.y-15,b.scroll.y+5)?(k.top=a.inInlineMode?0:b.scroll.y,this.look(R)):d.is(L)||m(k.top,b.pane.bottom-5,b.pane.bottom+15)?(k.top=a.inInlineMode?b.editable.height+b.editable.padding.top+b.editable.padding.bottom:b.pane.bottom-1,this.look(L)):(a.inInlineMode&&(k.top-=b.editable.top+b.editable.border.top),
this.look(W));a.inInlineMode&&(k.top--,k.top+=b.editable.scroll.top,k.left+=b.editable.scroll.left);for(var l in k)k[l]=CKEDITOR.tools.cssLength(k[l]);this.setStyles(k)},look:function(a){if(this.oldLook!=a){for(var b=this.lineChildren.length,c;b--;)(c=this.lineChildren[b]).setAttribute("style",c.base+c.looks[0|a/2]);this.oldLook=a}},wrap:new I("span",a.doc)});for(b=c.lineChildren.length;b--;)c.lineChildren[b].appendTo(c);c.look(W);c.appendTo(c.wrap);c.unselectable();c.lineChildren[0].on("mouseup",
function(b){c.detach();g(a,function(b){var c=a.line.trigger;b[c.is(H)?"insertBefore":"insertAfter"](c.is(H)?c.lower:c.upper)},!0);a.editor.focus();K.ie||a.enterMode==CKEDITOR.ENTER_BR||a.hotNode.scrollIntoView();b.data.preventDefault(!0)});c.on("mousedown",function(a){a.data.preventDefault(!0)});a.line=c}function g(a,b,c){var d=new CKEDITOR.dom.range(a.doc),f=a.editor,e;K.ie&&a.enterMode==CKEDITOR.ENTER_BR?e=a.doc.createText(V):(e=(e=k(a.element,!0))&&e.data("cke-enter-mode")||a.enterMode,e=new I(M[e],
a.doc),e.is("br")||a.doc.createText(V).appendTo(e));c&&f.fire("saveSnapshot");b(e);d.moveToPosition(e,CKEDITOR.POSITION_AFTER_START);f.getSelection().selectRanges([d]);a.hotNode=e;c&&f.fire("saveSnapshot")}function l(a,c){return{canUndo:!0,modes:{wysiwyg:1},exec:function(){function f(b){var d=K.ie&&9>K.version?" ":V,e=a.hotNode&&a.hotNode.getText()==d&&a.element.equals(a.hotNode)&&a.lastCmdDirection===!!c;g(a,function(d){e&&a.hotNode&&a.hotNode.remove();d[c?"insertAfter":"insertBefore"](b);d.setAttributes({"data-cke-magicline-hot":1,
"data-cke-magicline-dir":!!c});a.lastCmdDirection=!!c});K.ie||a.enterMode==CKEDITOR.ENTER_BR||a.hotNode.scrollIntoView();a.line.detach()}return function(e){e=e.getSelection().getStartElement();var g;e=e.getAscendant(P,1);if(!p(a,e)&&e&&!e.equals(a.editable)&&!e.contains(a.editable)){(g=k(e))&&"false"==g.getAttribute("contenteditable")&&(e=g);a.element=e;g=d(a,e,!c);var h;n(g)&&g.is(a.triggers)&&g.is(O)&&(!d(a,g,!c)||(h=d(a,g,!c))&&n(h)&&h.is(a.triggers))?f(g):(h=b(a,e),n(h)&&(d(a,h,!c)?(e=d(a,h,!c))&&
n(e)&&e.is(a.triggers)&&f(h):f(h)))}}}()}}function f(a,b){if(!b||b.type!=CKEDITOR.NODE_ELEMENT||!b.$)return!1;var c=a.line;return c.wrap.equals(b)||c.wrap.contains(b)}function n(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.$}function u(a){if(!n(a))return!1;var b;(b=v(a))||(n(a)?(b={left:1,right:1,center:1},b=!(!b[a.getComputedStyle("float")]&&!b[a.getAttribute("align")])):b=!1);return b}function v(a){return!!{absolute:1,fixed:1}[a.getComputedStyle("position")]}function x(a,b){return n(b)?b.is(a.triggers):
null}function p(a,b){if(!b)return!1;for(var c=b.getParents(1),d=c.length;d--;)for(var f=a.tabuList.length;f--;)if(c[d].hasAttribute(a.tabuList[f]))return!0;return!1}function t(a,b,c){b=b[c?"getLast":"getFirst"](function(b){return a.isRelevant(b)&&!b.is(da)});if(!b)return!1;r(a,b);return c?b.size.top>a.mouse.y:b.size.bottom<a.mouse.y}function w(a){var b=a.editable,c=a.mouse,d=a.view,g=a.triggerOffset;y(a);var h=c.y>(a.inInlineMode?d.editable.top+d.editable.height/2:Math.min(d.editable.height,d.pane.height)/
2),b=b[h?"getLast":"getFirst"](function(a){return!(aa(a)||ba(a))});if(!b)return null;f(a,b)&&(b=a.line.wrap[h?"getPrevious":"getNext"](function(a){return!(aa(a)||ba(a))}));if(!n(b)||u(b)||!x(a,b))return null;r(a,b);return!h&&0<=b.size.top&&m(c.y,0,b.size.top+g)?(a=a.inInlineMode||0===d.scroll.y?R:W,new e([null,b,H,T,a])):h&&b.size.bottom<=d.pane.height&&m(c.y,b.size.bottom-g,d.pane.height)?(a=a.inInlineMode||m(b.size.bottom,d.pane.height-g,d.pane.height)?L:W,new e([b,null,D,T,a])):null}function q(a){var c=
a.mouse,f=a.view,g=a.triggerOffset,h=b(a);if(!h)return null;r(a,h);var g=Math.min(g,0|h.size.outerHeight/2),k=[],l,J;if(m(c.y,h.size.top-1,h.size.top+g))J=!1;else if(m(c.y,h.size.bottom-g,h.size.bottom+1))J=!0;else return null;if(u(h)||t(a,h,J)||h.getParent().is(X))return null;var q=d(a,h,!J);if(q){if(q&&q.type==CKEDITOR.NODE_TEXT)return null;if(n(q)){if(u(q)||!x(a,q)||q.getParent().is(X))return null;k=[q,h][J?"reverse":"concat"]().concat([Q,T])}}else h.equals(a.editable[J?"getLast":"getFirst"](a.isRelevant))?
(y(a),J&&m(c.y,h.size.bottom-g,f.pane.height)&&m(h.size.bottom,f.pane.height-g,f.pane.height)?l=L:m(c.y,0,h.size.top+g)&&(l=R)):l=W,k=[null,h][J?"reverse":"concat"]().concat([J?D:H,T,l,h.equals(a.editable[J?"getLast":"getFirst"](a.isRelevant))?J?L:R:W]);return 0 in k?new e(k):null}function A(a,b,c,d){for(var f=b.getDocumentPosition(),e={},g={},h={},k={},l=ca.length;l--;)e[ca[l]]=parseInt(b.getComputedStyle.call(b,"border-"+ca[l]+"-width"),10)||0,h[ca[l]]=parseInt(b.getComputedStyle.call(b,"padding-"+
ca[l]),10)||0,g[ca[l]]=parseInt(b.getComputedStyle.call(b,"margin-"+ca[l]),10)||0;c&&!d||C(a,d);k.top=f.y-(c?0:a.view.scroll.y);k.left=f.x-(c?0:a.view.scroll.x);k.outerWidth=b.$.offsetWidth;k.outerHeight=b.$.offsetHeight;k.height=k.outerHeight-(h.top+h.bottom+e.top+e.bottom);k.width=k.outerWidth-(h.left+h.right+e.left+e.right);k.bottom=k.top+k.outerHeight;k.right=k.left+k.outerWidth;a.inInlineMode&&(k.scroll={top:b.$.scrollTop,left:b.$.scrollLeft});return z({border:e,padding:h,margin:g,ignoreScroll:c},
k,!0)}function r(a,b,c){if(!n(b))return b.size=null;if(!b.size)b.size={};else if(b.size.ignoreScroll==c&&b.size.date>new Date-N)return null;return z(b.size,A(a,b,c),{date:+new Date},!0)}function y(a,b){a.view.editable=A(a,a.editable,b,!0)}function C(a,b){a.view||(a.view={});var c=a.view;if(!(!b&&c&&c.date>new Date-N)){var d=a.win,c=d.getScrollPosition(),d=d.getViewPaneSize();z(a.view,{scroll:{x:c.x,y:c.y,width:a.doc.$.documentElement.scrollWidth-d.width,height:a.doc.$.documentElement.scrollHeight-
d.height},pane:{width:d.width,height:d.height,bottom:d.height+c.y},date:+new Date},!0)}}function B(a,b,c,d){for(var f=d,g=d,h=0,k=!1,l=!1,m=a.view.pane.height,n=a.mouse;n.y+h<m&&0<n.y-h;){k||(k=b(f,d));l||(l=b(g,d));!k&&0<n.y-h&&(f=c(a,{x:n.x,y:n.y-h}));!l&&n.y+h<m&&(g=c(a,{x:n.x,y:n.y+h}));if(k&&l)break;h+=2}return new e([f,g,null,null])}CKEDITOR.plugins.add("magicline",{init:function(a){var c=a.config,k=c.magicline_triggerOffset||30,m={editor:a,enterMode:c.enterMode,triggerOffset:k,holdDistance:0|
k*(c.magicline_holdDistance||.5),boxColor:c.magicline_color||"#ff0000",rtl:"rtl"==c.contentsLangDirection,tabuList:["data-cke-hidden-sel"].concat(c.magicline_tabuList||[]),triggers:c.magicline_everywhere?P:{table:1,hr:1,div:1,ul:1,ol:1,dl:1,form:1,blockquote:1}},J,t,r;m.isRelevant=function(a){return n(a)&&!f(m,a)&&!u(a)};a.on("contentDom",function(){var k=a.editable(),n=a.document,B=a.window;z(m,{editable:k,inInlineMode:k.isInline(),doc:n,win:B,hotNode:null},!0);m.boundary=m.inInlineMode?m.editable:
m.doc.getDocumentElement();k.is(G.$inline)||(m.inInlineMode&&!v(k)&&k.setStyles({position:"relative",top:null,left:null}),h.call(this,m),C(m),k.attachListener(a,"beforeUndoImage",function(){m.line.detach()}),k.attachListener(a,"beforeGetData",function(){m.line.wrap.getParent()&&(m.line.detach(),a.once("getData",function(){m.line.attach()},null,null,1E3))},null,null,0),k.attachListener(m.inInlineMode?n:n.getWindow().getFrame(),"mouseout",function(b){if("wysiwyg"==a.mode)if(m.inInlineMode){var c=b.data.$.clientX;
b=b.data.$.clientY;C(m);y(m,!0);var d=m.view.editable,f=m.view.scroll;c>d.left-f.x&&c<d.right-f.x&&b>d.top-f.y&&b<d.bottom-f.y||(clearTimeout(r),r=null,m.line.detach())}else clearTimeout(r),r=null,m.line.detach()}),k.attachListener(k,"keyup",function(){m.hiddenMode=0}),k.attachListener(k,"keydown",function(b){if("wysiwyg"==a.mode)switch(b.data.getKeystroke()){case 2228240:case 16:m.hiddenMode=1,m.line.detach()}}),k.attachListener(m.inInlineMode?k:n,"mousemove",function(b){t=!0;if("wysiwyg"==a.mode&&
!a.readOnly&&!r){var c={x:b.data.$.clientX,y:b.data.$.clientY};r=setTimeout(function(){m.mouse=c;r=m.trigger=null;C(m);t&&!m.hiddenMode&&a.focusManager.hasFocus&&!m.line.mouseNear()&&(m.element=Y(m,!0))&&((m.trigger=w(m)||q(m)||Z(m))&&!p(m,m.trigger.upper||m.trigger.lower)?m.line.attach().place():(m.trigger=null,m.line.detach()),t=!1)},30)}}),k.attachListener(B,"scroll",function(){"wysiwyg"==a.mode&&(m.line.detach(),K.webkit&&(m.hiddenMode=1,clearTimeout(J),J=setTimeout(function(){m.mouseDown||(m.hiddenMode=
0)},50)))}),k.attachListener(F?n:B,"mousedown",function(){"wysiwyg"==a.mode&&(m.line.detach(),m.hiddenMode=1,m.mouseDown=1)}),k.attachListener(F?n:B,"mouseup",function(){m.hiddenMode=0;m.mouseDown=0}),a.addCommand("accessPreviousSpace",l(m)),a.addCommand("accessNextSpace",l(m,!0)),a.setKeystroke([[c.magicline_keystrokePrevious,"accessPreviousSpace"],[c.magicline_keystrokeNext,"accessNextSpace"]]),a.on("loadSnapshot",function(){var b,c,d,f;for(f in{p:1,br:1,div:1})for(b=a.document.getElementsByTag(f),
d=b.count();d--;)if((c=b.getItem(d)).data("cke-magicline-hot")){m.hotNode=c;m.lastCmdDirection="true"===c.data("cke-magicline-dir")?!0:!1;return}}),this.backdoor={accessFocusSpace:g,boxTrigger:e,isLine:f,getAscendantTrigger:b,getNonEmptyNeighbour:d,getSize:A,that:m,triggerEdge:q,triggerEditable:w,triggerExpand:Z})},this)}});var z=CKEDITOR.tools.extend,I=CKEDITOR.dom.element,E=I.createFromHtml,K=CKEDITOR.env,F=CKEDITOR.env.ie&&9>CKEDITOR.env.version,G=CKEDITOR.dtd,M={},H=128,D=64,Q=32,T=16,R=4,L=2,
W=1,V=" ",X=G.$listItem,da=G.$tableContent,O=z({},G.$nonEditable,G.$empty),P=G.$block,N=100,U="width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;",S=U+"border-color:transparent;display:block;border-style:solid;",J="\x3cspan\x3e"+V+"\x3c/span\x3e";M[CKEDITOR.ENTER_BR]="br";M[CKEDITOR.ENTER_P]="p";M[CKEDITOR.ENTER_DIV]="div";e.prototype={set:function(a,b,c){this.properties=a+b+(c||W);return this},is:function(a){return(this.properties&
a)==a}};var Y=function(){function a(b,c){var d=b.$.elementFromPoint(c.x,c.y);return d&&d.nodeType?new CKEDITOR.dom.element(d):null}return function(b,c,d){if(!b.mouse)return null;var e=b.doc,g=b.line.wrap;d=d||b.mouse;var h=a(e,d);c&&f(b,h)&&(g.hide(),h=a(e,d),g.show());return!h||h.type!=CKEDITOR.NODE_ELEMENT||!h.$||K.ie&&9>K.version&&!b.boundary.equals(h)&&!b.boundary.contains(h)?null:h}}(),aa=CKEDITOR.dom.walker.whitespaces(),ba=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT),Z=function(){function b(f){var e=
f.element,g,h,k;if(!n(e)||e.contains(f.editable)||e.isReadOnly())return null;k=B(f,function(a,b){return!b.equals(a)},function(a,b){return Y(a,!0,b)},e);g=k.upper;h=k.lower;if(a(f,g,h))return k.set(Q,8);if(g&&e.contains(g))for(;!g.getParent().equals(e);)g=g.getParent();else g=e.getFirst(function(a){return d(f,a)});if(h&&e.contains(h))for(;!h.getParent().equals(e);)h=h.getParent();else h=e.getLast(function(a){return d(f,a)});if(!g||!h)return null;r(f,g);r(f,h);if(!m(f.mouse.y,g.size.top,h.size.bottom))return null;
for(var e=Number.MAX_VALUE,l,J,q,t;h&&!h.equals(g)&&(J=g.getNext(f.isRelevant));)l=Math.abs(c(f,g,J)-f.mouse.y),l<e&&(e=l,q=g,t=J),g=J,r(f,g);if(!q||!t||!m(f.mouse.y,q.size.top,t.size.bottom))return null;k.upper=q;k.lower=t;return k.set(Q,8)}function d(a,b){return!(b&&b.type==CKEDITOR.NODE_TEXT||ba(b)||u(b)||f(a,b)||b.type==CKEDITOR.NODE_ELEMENT&&b.$&&b.is("br"))}return function(c){var d=b(c),f;if(f=d){f=d.upper;var e=d.lower;f=!f||!e||u(e)||u(f)||e.equals(f)||f.equals(e)||e.contains(f)||f.contains(e)?
!1:x(c,f)&&x(c,e)&&a(c,f,e)?!0:!1}return f?d:null}}(),ca=["top","left","right","bottom"]}(),CKEDITOR.config.magicline_keystrokePrevious=CKEDITOR.CTRL+CKEDITOR.SHIFT+51,CKEDITOR.config.magicline_keystrokeNext=CKEDITOR.CTRL+CKEDITOR.SHIFT+52,function(){function a(a){if(!a||a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())return[];for(var b=[],c=["style","className"],d=0;d<c.length;d++){var e=a.$.elements.namedItem(c[d]);e&&(e=new CKEDITOR.dom.element(e),b.push([e,e.nextSibling]),e.remove())}return b}
function e(a,b){if(a&&a.type==CKEDITOR.NODE_ELEMENT&&"form"==a.getName()&&0<b.length)for(var c=b.length-1;0<=c;c--){var d=b[c][0],e=b[c][1];e?d.insertBefore(e):d.appendTo(a)}}function b(b,c){var d=a(b),g={},l=b.$;c||(g["class"]=l.className||"",l.className="");g.inline=l.style.cssText||"";c||(l.style.cssText="position: static; overflow: visible");e(d);return g}function c(b,c){var d=a(b),g=b.$;"class"in c&&(g.className=c["class"]);"inline"in c&&(g.style.cssText=c.inline);e(d)}function d(a){if(!a.editable().isInline()){var b=
CKEDITOR.instances,c;for(c in b){var d=b[c];"wysiwyg"!=d.mode||d.readOnly||(d=d.document.getBody(),d.setAttribute("contentEditable",!1),d.setAttribute("contentEditable",!0))}a.editable().hasFocus&&(a.toolbox.focus(),a.focus())}}CKEDITOR.plugins.add("maximize",{init:function(a){function e(){var b=l.getViewPaneSize();a.resize(b.width,b.height,null,!0)}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var h=a.lang,g=CKEDITOR.document,l=g.getWindow(),f,n,u,v=CKEDITOR.TRISTATE_OFF;a.addCommand("maximize",
{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){var x=a.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}),p=a.ui.space("contents");if("wysiwyg"==a.mode){var t=a.getSelection();f=t&&t.getRanges();n=l.getScrollPosition()}else{var w=a.editable().$;f=!CKEDITOR.env.ie&&[w.selectionStart,w.selectionEnd];n=[w.scrollLeft,w.scrollTop]}if(this.state==CKEDITOR.TRISTATE_OFF){l.on("resize",e);u=l.getScrollPosition();
for(t=a.container;t=t.getParent();)t.setCustomData("maximize_saved_styles",b(t)),t.setStyle("z-index",a.config.baseFloatZIndex-5);p.setCustomData("maximize_saved_styles",b(p,!0));x.setCustomData("maximize_saved_styles",b(x,!0));p={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};g.getDocumentElement().setStyles(p);!CKEDITOR.env.gecko&&g.getDocumentElement().setStyle("position","fixed");CKEDITOR.env.gecko&&CKEDITOR.env.quirks||g.getBody().setStyles(p);CKEDITOR.env.ie?setTimeout(function(){l.$.scrollTo(0,
0)},0):l.$.scrollTo(0,0);x.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute");x.$.offsetLeft;x.setStyles({"z-index":a.config.baseFloatZIndex-5,left:"0px",top:"0px"});x.addClass("cke_maximized");e();p=x.getDocumentPosition();x.setStyles({left:-1*p.x+"px",top:-1*p.y+"px"});CKEDITOR.env.gecko&&d(a)}else if(this.state==CKEDITOR.TRISTATE_ON){l.removeListener("resize",e);for(var t=[p,x],q=0;q<t.length;q++)c(t[q],t[q].getCustomData("maximize_saved_styles")),t[q].removeCustomData("maximize_saved_styles");
for(t=a.container;t=t.getParent();)c(t,t.getCustomData("maximize_saved_styles")),t.removeCustomData("maximize_saved_styles");CKEDITOR.env.ie?setTimeout(function(){l.$.scrollTo(u.x,u.y)},0):l.$.scrollTo(u.x,u.y);x.removeClass("cke_maximized");CKEDITOR.env.webkit&&(x.setStyle("display","inline"),setTimeout(function(){x.setStyle("display","block")},0));a.fire("resize",{outerHeight:a.container.$.offsetHeight,contentsHeight:p.$.offsetHeight,outerWidth:a.container.$.offsetWidth})}this.toggleState();if(t=
this.uiItems[0])p=this.state==CKEDITOR.TRISTATE_OFF?h.maximize.maximize:h.maximize.minimize,t=CKEDITOR.document.getById(t._.id),t.getChild(1).setHtml(p),t.setAttribute("title",p),t.setAttribute("href",'javascript:void("'+p+'");');"wysiwyg"==a.mode?f?(CKEDITOR.env.gecko&&d(a),a.getSelection().selectRanges(f),(w=a.getSelection().getStartElement())&&w.scrollIntoView(!0)):l.$.scrollTo(n.x,n.y):(f&&(w.selectionStart=f[0],w.selectionEnd=f[1]),w.scrollLeft=n[0],w.scrollTop=n[1]);f=n=null;v=this.state;a.fire("maximize",
this.state)},canUndo:!1});a.ui.addButton&&a.ui.addButton("Maximize",{label:h.maximize.maximize,command:"maximize",toolbar:"tools,10"});a.on("mode",function(){var b=a.getCommand("maximize");b.setState(b.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:v)},null,null,100)}}})}(),function(){function a(a,b,c){var d=CKEDITOR.cleanWord;d?c():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||b+"filter/default.js"),CKEDITOR.scriptLoader.load(a,c,null,!0));return!d}CKEDITOR.plugins.add("pastefromword",
{requires:"clipboard",init:function(e){function b(a){var b=CKEDITOR.plugins.pastefromword&&CKEDITOR.plugins.pastefromword.images,c,d=[];if(b&&a.editor.filter.check("img[src]")&&(c=b.extractTagsFromHtml(a.data.dataValue),0!==c.length&&(b=b.extractFromRtf(a.data.dataTransfer["text/rtf"]),0!==b.length&&(CKEDITOR.tools.array.forEach(b,function(a){d.push(a.type?"data:"+a.type+";base64,"+CKEDITOR.tools.convertBytesToBase64(CKEDITOR.tools.convertHexStringToBytes(a.hex)):null)},this),c.length===d.length))))for(b=
0;b<c.length;b++)0===c[b].indexOf("file://")&&d[b]&&(a.data.dataValue=a.data.dataValue.replace(c[b],d[b]))}var c=0,d=this.path,m=void 0===e.config.pasteFromWord_inlineImages?!0:e.config.pasteFromWord_inlineImages;e.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a,b){c=1;a.execCommand("paste",{type:"html",notification:b&&"undefined"!==typeof b.notification?b.notification:!0})}});CKEDITOR.plugins.clipboard.addPasteButton(e,"PasteFromWord",{label:e.lang.pastefromword.toolbar,command:"pastefromword",
toolbar:"clipboard,50"});e.on("paste",function(b){var h=b.data,g=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?h.dataTransfer.getData("text/html",!0):null,l=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?h.dataTransfer.getData("text/rtf"):null,g=g||h.dataValue,f={dataValue:g,dataTransfer:{"text/rtf":l}},l=/(class=\"?Mso|style=(?:\"|\')[^\"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/,l=/<meta\s*name=(?:\"|\')?generator(?:\"|\')?\s*content=(?:\"|\')?microsoft/gi.test(g)||l.test(g);if(g&&
(c||l)&&(!1!==e.fire("pasteFromWord",f)||c)){h.dontFilter=!0;var m=a(e,d,function(){if(m)e.fire("paste",h);else if(!e.config.pasteFromWordPromptCleanup||c||confirm(e.lang.pastefromword.confirmCleanup))f.dataValue=CKEDITOR.cleanWord(f.dataValue,e),e.fire("afterPasteFromWord",f),h.dataValue=f.dataValue,!0===e.config.forcePasteAsPlainText?h.type="text":CKEDITOR.plugins.clipboard.isCustomCopyCutSupported||"allow-word"!==e.config.forcePasteAsPlainText||(h.type="html");c=0});m&&b.cancel()}},null,null,3);
if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported&&m)e.on("afterPasteFromWord",b)}})}(),function(){var a={canUndo:!1,async:!0,exec:function(a,b){var c=a.lang,d=CKEDITOR.tools.keystrokeToString(c.common.keyboard,a.getCommandKeystroke(CKEDITOR.env.ie?a.commands.paste:this)),m=b&&"undefined"!==typeof b.notification?b.notification:!b||!b.from||"keystrokeHandler"===b.from&&CKEDITOR.env.ie,c=m&&"string"===typeof m?m:c.pastetext.pasteNotification.replace(/%1/,'\x3ckbd aria-label\x3d"'+d.aria+'"\x3e'+
d.display+"\x3c/kbd\x3e");a.execCommand("paste",{type:"text",notification:m?c:!1})}};CKEDITOR.plugins.add("pastetext",{requires:"clipboard",init:function(e){var b=CKEDITOR.env.safari?CKEDITOR.CTRL+CKEDITOR.ALT+CKEDITOR.SHIFT+86:CKEDITOR.CTRL+CKEDITOR.SHIFT+86;e.addCommand("pastetext",a);e.setKeystroke(b,"pastetext");CKEDITOR.plugins.clipboard.addPasteButton(e,"PasteText",{label:e.lang.pastetext.button,command:"pastetext",toolbar:"clipboard,40"});if(e.config.forcePasteAsPlainText)e.on("beforePaste",
function(a){"html"!=a.data.type&&(a.data.type="text")});e.on("pasteState",function(a){e.getCommand("pastetext").setState(a.data)})}})}(),CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}}),CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var e=a._.removeFormatRegex||
(a._.removeFormatRegex=new RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),b=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),c=CKEDITOR.plugins.removeformat.filter,d=a.getSelection().getRanges().createIterator(),m=function(a){return a.type==CKEDITOR.NODE_ELEMENT},k=[],h;h=d.getNextRange();){var g=h.createBookmark();h=a.createRange();h.setStartBefore(g.startNode);g.endNode&&h.setEndAfter(g.endNode);h.collapsed||h.enlarge(CKEDITOR.ENLARGE_ELEMENT);
var l=h.createBookmark(),f=l.startNode,n=l.endNode,u=function(b){for(var d=a.elementPath(b),f=d.elements,g=1,h;(h=f[g])&&!h.equals(d.block)&&!h.equals(d.blockLimit);g++)e.test(h.getName())&&c(a,h)&&b.breakParent(h)};u(f);if(n)for(u(n),f=f.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);f&&!f.equals(n);)if(f.isReadOnly()){if(f.getPosition(n)&CKEDITOR.POSITION_CONTAINS)break;f=f.getNext(m)}else u=f.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),"img"==f.getName()&&f.data("cke-realelement")||f.hasAttribute("data-cke-bookmark")||
!c(a,f)||(e.test(f.getName())?f.remove(1):(f.removeAttributes(b),a.fire("removeFormatCleanup",f))),f=u;l.startNode.remove();l.endNode&&l.endNode.remove();h.moveToBookmark(g);k.push(h)}a.forceNextSelectionCheck();a.getSelection().selectRanges(k)}}},filter:function(a,e){for(var b=a._.removeFormatFilters||[],c=0;c<b.length;c++)if(!1===b[c](e))return!1;return!0}},CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)},
CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var",CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign",CKEDITOR.plugins.add("resize",{init:function(a){function e(b){var d=g.width,e=g.height,k=d+(b.data.$.screenX-h.x)*("rtl"==m?-1:1);b=e+(b.data.$.screenY-h.y);l&&(d=Math.max(c.resize_minWidth,Math.min(k,c.resize_maxWidth)));f&&(e=Math.max(c.resize_minHeight,Math.min(b,c.resize_maxHeight)));
a.resize(l?d:null,e)}function b(){CKEDITOR.document.removeListener("mousemove",e);CKEDITOR.document.removeListener("mouseup",b);a.document&&(a.document.removeListener("mousemove",e),a.document.removeListener("mouseup",b))}var c=a.config,d=a.ui.spaceId("resizer"),m=a.element?a.element.getDirection(1):"ltr";!c.resize_dir&&(c.resize_dir="vertical");void 0===c.resize_maxWidth&&(c.resize_maxWidth=3E3);void 0===c.resize_maxHeight&&(c.resize_maxHeight=3E3);void 0===c.resize_minWidth&&(c.resize_minWidth=
750);void 0===c.resize_minHeight&&(c.resize_minHeight=250);if(!1!==c.resize_enabled){var k=null,h,g,l=("both"==c.resize_dir||"horizontal"==c.resize_dir)&&c.resize_minWidth!=c.resize_maxWidth,f=("both"==c.resize_dir||"vertical"==c.resize_dir)&&c.resize_minHeight!=c.resize_maxHeight,n=CKEDITOR.tools.addFunction(function(d){k||(k=a.getResizable());g={width:k.$.offsetWidth||0,height:k.$.offsetHeight||0};h={x:d.screenX,y:d.screenY};c.resize_minWidth>g.width&&(c.resize_minWidth=g.width);c.resize_minHeight>
g.height&&(c.resize_minHeight=g.height);CKEDITOR.document.on("mousemove",e);CKEDITOR.document.on("mouseup",b);a.document&&(a.document.on("mousemove",e),a.document.on("mouseup",b));d.preventDefault&&d.preventDefault()});a.on("destroy",function(){CKEDITOR.tools.removeFunction(n)});a.on("uiSpace",function(b){if("bottom"==b.data.space){var c="";l&&!f&&(c=" cke_resizer_horizontal");!l&&f&&(c=" cke_resizer_vertical");var e='\x3cspan id\x3d"'+d+'" class\x3d"cke_resizer'+c+" cke_resizer_"+m+'" title\x3d"'+
CKEDITOR.tools.htmlEncode(a.lang.common.resize)+'" onmousedown\x3d"CKEDITOR.tools.callFunction('+n+', event)"\x3e'+("ltr"==m?"◢":"◣")+"\x3c/span\x3e";"ltr"==m&&"ltr"==c?b.data.html+=e:b.data.html=e+b.data.html}},a,null,100);a.on("maximize",function(b){a.ui.space("resizer")[b.data==CKEDITOR.TRISTATE_ON?"hide":"show"]()})}}}),CKEDITOR.plugins.add("menubutton",{requires:"button,menu",onLoad:function(){var a=function(a){var b=this._,c=b.menu;b.state!==CKEDITOR.TRISTATE_DISABLED&&(b.on&&c?c.hide():(b.previousState=
b.state,c||(c=b.menu=new CKEDITOR.menu(a,{panel:{className:"cke_menu_panel",attributes:{"aria-label":a.lang.common.options}}}),c.onHide=CKEDITOR.tools.bind(function(){var c=this.command?a.getCommand(this.command).modes:this.modes;this.setState(!c||c[a.mode]?b.previousState:CKEDITOR.TRISTATE_DISABLED);b.on=0},this),this.onMenu&&c.addListener(this.onMenu)),this.setState(CKEDITOR.TRISTATE_ON),b.on=1,setTimeout(function(){c.show(CKEDITOR.document.getById(b.id),4)},0)))};CKEDITOR.ui.menuButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,
$:function(e){delete e.panel;this.base(e);this.hasArrow="menu";this.click=a},statics:{handler:{create:function(a){return new CKEDITOR.ui.menuButton(a)}}}})},beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handler)}}),CKEDITOR.UI_MENUBUTTON="menubutton","use strict",CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",tabToOpen:null,dialogName:"scaytDialog",onLoad:function(a){CKEDITOR.plugins.scayt.onLoadTimestamp=(new Date).getTime();"moono-lisa"==(CKEDITOR.skinName||
a.config.skin)&&CKEDITOR.document.appendStyleSheet(this.path+"skins/"+CKEDITOR.skin.name+"/scayt.css");CKEDITOR.document.appendStyleSheet(this.path+"dialogs/dialog.css")},init:function(a){var e=this,b=CKEDITOR.plugins.scayt;this.bindEvents(a);this.parseConfig(a);this.addRule(a);CKEDITOR.dialog.add(this.dialogName,CKEDITOR.getUrl(this.path+"dialogs/options.js"));this.addMenuItems(a);var c=a.lang.scayt,d=CKEDITOR.env;a.ui.add("Scayt",CKEDITOR.UI_MENUBUTTON,{label:c.text_title,title:a.plugins.wsc?a.lang.wsc.title:
c.text_title,modes:{wysiwyg:!(d.ie&&(8>d.version||d.quirks))},toolbar:"spellchecker,20",refresh:function(){var c=a.ui.instances.Scayt.getState();a.scayt&&(c=b.state.scayt[a.name]?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF);a.fire("scaytButtonState",c)},onRender:function(){var b=this;a.on("scaytButtonState",function(a){void 0!==typeof a.data&&b.setState(a.data)})},onMenu:function(){var c=a.scayt;a.getMenuItem("scaytToggle").label=a.lang.scayt[c&&b.state.scayt[a.name]?"btn_disable":"btn_enable"];var d=
{scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytLangs:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,WSC:a.plugins.wsc?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED};a.config.scayt_uiTabs[0]||delete d.scaytOptions;a.config.scayt_uiTabs[1]||delete d.scaytLangs;a.config.scayt_uiTabs[2]||delete d.scaytDict;c&&!CKEDITOR.plugins.scayt.isNewUdSupported(c)&&
(delete d.scaytDict,a.config.scayt_uiTabs[2]=0,CKEDITOR.plugins.scayt.alarmCompatibilityMessage());return d}});a.contextMenu&&a.addMenuItems&&(a.contextMenu.addListener(function(b,c){var d=a.scayt,g,l;d&&(l=d.getSelectionNode())&&(g=e.menuGenerator(a,l),d.showBanner("."+a.contextMenu._.definition.panel.className.split(" ").join(" .")));return g}),a.contextMenu._.onHide=CKEDITOR.tools.override(a.contextMenu._.onHide,function(b){return function(){var c=a.scayt;c&&c.hideBanner();return b.apply(this)}}))},
addMenuItems:function(a){var e=this,b=CKEDITOR.plugins.scayt;a.addMenuGroup("scaytButton");for(var c=a.config.scayt_contextMenuItemsOrder.split("|"),d=0;d<c.length;d++)c[d]="scayt_"+c[d];if((c=["grayt_description","grayt_suggest","grayt_control"].concat(c))&&c.length)for(d=0;d<c.length;d++)a.addMenuGroup(c[d],d-10);a.addCommand("scaytToggle",{exec:function(a){var c=a.scayt;b.state.scayt[a.name]=!b.state.scayt[a.name];!0===b.state.scayt[a.name]?c||b.createScayt(a):c&&b.destroy(a)}});a.addCommand("scaytAbout",
{exec:function(a){a.scayt.tabToOpen="about";b.openDialog(e.dialogName,a)}});a.addCommand("scaytOptions",{exec:function(a){a.scayt.tabToOpen="options";b.openDialog(e.dialogName,a)}});a.addCommand("scaytLangs",{exec:function(a){a.scayt.tabToOpen="langs";b.openDialog(e.dialogName,a)}});a.addCommand("scaytDict",{exec:function(a){a.scayt.tabToOpen="dictionaries";b.openDialog(e.dialogName,a)}});c={scaytToggle:{label:a.lang.scayt.btn_enable,group:"scaytButton",command:"scaytToggle"},scaytAbout:{label:a.lang.scayt.btn_about,
group:"scaytButton",command:"scaytAbout"},scaytOptions:{label:a.lang.scayt.btn_options,group:"scaytButton",command:"scaytOptions"},scaytLangs:{label:a.lang.scayt.btn_langs,group:"scaytButton",command:"scaytLangs"},scaytDict:{label:a.lang.scayt.btn_dictionaries,group:"scaytButton",command:"scaytDict"}};a.plugins.wsc&&(c.WSC={label:a.lang.wsc.toolbar,group:"scaytButton",onClick:function(){var b=CKEDITOR.plugins.scayt,c=a.scayt,d=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();
(d=d.replace(/\s/g,""))?(c&&b.state.scayt[a.name]&&c.setMarkupPaused&&c.setMarkupPaused(!0),a.lockSelection(),a.execCommand("checkspell")):alert("Nothing to check!")}});a.addMenuItems(c)},bindEvents:function(a){var e=CKEDITOR.plugins.scayt,b=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE,c=function(){e.destroy(a)},d=function(){!e.state.scayt[a.name]||a.readOnly||a.scayt||e.createScayt(a)},m=function(){var c=a.editable();c.attachListener(c,"focus",function(c){CKEDITOR.plugins.scayt&&!a.scayt&&setTimeout(d,
0);c=CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state.scayt[a.name]&&a.scayt;var e,f;if((b||c)&&a._.savedSelection){c=a._.savedSelection.getSelectedElement();c=!c&&a._.savedSelection.getRanges();for(var h=0;h<c.length;h++)f=c[h],"string"===typeof f.startContainer.$.nodeValue&&(e=f.startContainer.getText().length,(e<f.startOffset||e<f.endOffset)&&a.unlockSelection(!1))}},this,null,-10)},k=function(){b?a.config.scayt_inlineModeImmediateMarkup?d():(a.on("blur",function(){setTimeout(c,0)}),a.on("focus",
d),a.focusManager.hasFocus&&d()):d();m();var e=a.editable();e.attachListener(e,"mousedown",function(b){b=b.data.getTarget();var c=a.widgets&&a.widgets.getByElement(b);c&&(c.wrapper=b.getAscendant(function(a){return a.hasAttribute("data-cke-widget-wrapper")},!0))},this,null,-10)};a.on("contentDom",k);a.on("beforeCommandExec",function(b){var c=a.scayt,d=!1,f=!1,k=!0;b.data.name in e.options.disablingCommandExec&&"wysiwyg"==a.mode?c&&(e.destroy(a),a.fire("scaytButtonState",CKEDITOR.TRISTATE_DISABLED)):
"bold"!==b.data.name&&"italic"!==b.data.name&&"underline"!==b.data.name&&"strike"!==b.data.name&&"subscript"!==b.data.name&&"superscript"!==b.data.name&&"enter"!==b.data.name&&"cut"!==b.data.name&&"language"!==b.data.name||!c||("cut"===b.data.name&&(k=!1,f=!0),"language"===b.data.name&&(f=d=!0),a.fire("reloadMarkupScayt",{removeOptions:{removeInside:k,forceBookmark:f,language:d},timeout:0}))});a.on("beforeSetMode",function(b){if("source"==b.data){if(b=a.scayt)e.destroy(a),a.fire("scaytButtonState",
CKEDITOR.TRISTATE_DISABLED);a.document&&a.document.getBody().removeAttribute("_jquid")}});a.on("afterCommandExec",function(b){"wysiwyg"!=a.mode||"undo"!=b.data.name&&"redo"!=b.data.name||setTimeout(function(){e.reloadMarkup(a.scayt)},250)});a.on("readOnly",function(b){var c;b&&(c=a.scayt,!0===b.editor.readOnly?c&&c.fire("removeMarkupInDocument",{}):c?e.reloadMarkup(c):"wysiwyg"==b.editor.mode&&!0===e.state.scayt[b.editor.name]&&(e.createScayt(a),b.editor.fire("scaytButtonState",CKEDITOR.TRISTATE_ON)))});
a.on("beforeDestroy",c);a.on("setData",function(){c();(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE||a.plugins.divarea)&&k()},this,null,50);a.on("reloadMarkupScayt",function(b){var c=b.data&&b.data.removeOptions,d=b.data&&b.data.timeout,f=b.data&&b.data.language,k=a.scayt;k&&setTimeout(function(){f&&(c.selectionNode=a.plugins.language.getCurrentLangElement(a),c.selectionNode=c.selectionNode&&c.selectionNode.$||null);k.removeMarkupInSelectionNode(c);e.reloadMarkup(k)},d||0)});a.on("insertElement",function(){a.fire("reloadMarkupScayt",
{removeOptions:{forceBookmark:!0}})},this,null,50);a.on("insertHtml",function(){a.scayt&&a.scayt.setFocused&&a.scayt.setFocused(!0);a.fire("reloadMarkupScayt")},this,null,50);a.on("insertText",function(){a.scayt&&a.scayt.setFocused&&a.scayt.setFocused(!0);a.fire("reloadMarkupScayt")},this,null,50);a.on("scaytDialogShown",function(b){b.data.selectPage(a.scayt.tabToOpen)})},parseConfig:function(a){var e=CKEDITOR.plugins.scayt;e.replaceOldOptionsNames(a.config);"boolean"!==typeof a.config.scayt_autoStartup&&
(a.config.scayt_autoStartup=!1);e.state.scayt[a.name]=a.config.scayt_autoStartup;"boolean"!==typeof a.config.grayt_autoStartup&&(a.config.grayt_autoStartup=!1);"boolean"!==typeof a.config.scayt_inlineModeImmediateMarkup&&(a.config.scayt_inlineModeImmediateMarkup=!1);e.state.grayt[a.name]=a.config.grayt_autoStartup;a.config.scayt_contextCommands||(a.config.scayt_contextCommands="ignoreall|add");a.config.scayt_contextMenuItemsOrder||(a.config.scayt_contextMenuItemsOrder="suggest|moresuggest|control");
a.config.scayt_sLang||(a.config.scayt_sLang="en_US");if(void 0===a.config.scayt_maxSuggestions||"number"!=typeof a.config.scayt_maxSuggestions||0>a.config.scayt_maxSuggestions)a.config.scayt_maxSuggestions=3;if(void 0===a.config.scayt_minWordLength||"number"!=typeof a.config.scayt_minWordLength||1>a.config.scayt_minWordLength)a.config.scayt_minWordLength=3;if(void 0===a.config.scayt_customDictionaryIds||"string"!==typeof a.config.scayt_customDictionaryIds)a.config.scayt_customDictionaryIds="";if(void 0===
a.config.scayt_userDictionaryName||"string"!==typeof a.config.scayt_userDictionaryName)a.config.scayt_userDictionaryName=null;if("string"===typeof a.config.scayt_uiTabs&&3===a.config.scayt_uiTabs.split(",").length){var b=[],c=[];a.config.scayt_uiTabs=a.config.scayt_uiTabs.split(",");CKEDITOR.tools.search(a.config.scayt_uiTabs,function(a){1===Number(a)||0===Number(a)?(c.push(!0),b.push(Number(a))):c.push(!1)});null===CKEDITOR.tools.search(c,!1)?a.config.scayt_uiTabs=b:a.config.scayt_uiTabs=[1,1,1]}else a.config.scayt_uiTabs=
[1,1,1];"string"!=typeof a.config.scayt_serviceProtocol&&(a.config.scayt_serviceProtocol=null);"string"!=typeof a.config.scayt_serviceHost&&(a.config.scayt_serviceHost=null);"string"!=typeof a.config.scayt_servicePort&&(a.config.scayt_servicePort=null);"string"!=typeof a.config.scayt_servicePath&&(a.config.scayt_servicePath=null);a.config.scayt_moreSuggestions||(a.config.scayt_moreSuggestions="on");"string"!==typeof a.config.scayt_customerId&&(a.config.scayt_customerId="1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2");
"string"!==typeof a.config.scayt_customPunctuation&&(a.config.scayt_customPunctuation="-");"string"!==typeof a.config.scayt_srcUrl&&(e=document.location.protocol,e=-1!=e.search(/https?:/)?e:"http:",a.config.scayt_srcUrl=e+"//svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js");"boolean"!==typeof CKEDITOR.config.scayt_handleCheckDirty&&(CKEDITOR.config.scayt_handleCheckDirty=!0);"boolean"!==typeof CKEDITOR.config.scayt_handleUndoRedo&&(CKEDITOR.config.scayt_handleUndoRedo=!0);CKEDITOR.config.scayt_handleUndoRedo=
CKEDITOR.plugins.undo?CKEDITOR.config.scayt_handleUndoRedo:!1;"boolean"!==typeof a.config.scayt_multiLanguageMode&&(a.config.scayt_multiLanguageMode=!1);"object"!==typeof a.config.scayt_multiLanguageStyles&&(a.config.scayt_multiLanguageStyles={});a.config.scayt_ignoreAllCapsWords&&"boolean"!==typeof a.config.scayt_ignoreAllCapsWords&&(a.config.scayt_ignoreAllCapsWords=!1);a.config.scayt_ignoreDomainNames&&"boolean"!==typeof a.config.scayt_ignoreDomainNames&&(a.config.scayt_ignoreDomainNames=!1);a.config.scayt_ignoreWordsWithMixedCases&&
"boolean"!==typeof a.config.scayt_ignoreWordsWithMixedCases&&(a.config.scayt_ignoreWordsWithMixedCases=!1);a.config.scayt_ignoreWordsWithNumbers&&"boolean"!==typeof a.config.scayt_ignoreWordsWithNumbers&&(a.config.scayt_ignoreWordsWithNumbers=!1);if(a.config.scayt_disableOptionsStorage){var e=CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage)?a.config.scayt_disableOptionsStorage:"string"===typeof a.config.scayt_disableOptionsStorage?[a.config.scayt_disableOptionsStorage]:void 0,d="all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "),
m=["lang","ignore-all-caps-words","ignore-domain-names","ignore-words-with-mixed-cases","ignore-words-with-numbers"],k=CKEDITOR.tools.search,h=CKEDITOR.tools.indexOf;a.config.scayt_disableOptionsStorage=function(a){for(var b=[],c=0;c<a.length;c++){var e=a[c],u=!!k(a,"options");if(!k(d,e)||u&&k(m,function(a){if("lang"===a)return!1}))return;k(m,e)&&m.splice(h(m,e),1);if("all"===e||u&&k(a,"lang"))return[];"options"===e&&(m=["lang"])}return b=b.concat(m)}(e)}},addRule:function(a){var e=CKEDITOR.plugins.scayt,
b=a.dataProcessor,c=b&&b.htmlFilter,d=a._.elementsPath&&a._.elementsPath.filters,b=b&&b.dataFilter,m=a.addRemoveFormatFilter,k=function(b){if(a.scayt&&(b.hasAttribute(e.options.data_attribute_name)||b.hasAttribute(e.options.problem_grammar_data_attribute)))return!1},h=function(b){var c=!0;a.scayt&&(b.hasAttribute(e.options.data_attribute_name)||b.hasAttribute(e.options.problem_grammar_data_attribute))&&(c=!1);return c};d&&d.push(k);b&&b.addRules({elements:{span:function(a){var b=a.hasClass(e.options.misspelled_word_class)&&
a.attributes[e.options.data_attribute_name],c=a.hasClass(e.options.problem_grammar_class)&&a.attributes[e.options.problem_grammar_data_attribute];e&&(b||c)&&delete a.name;return a}}});c&&c.addRules({elements:{span:function(a){var b=a.hasClass(e.options.misspelled_word_class)&&a.attributes[e.options.data_attribute_name],c=a.hasClass(e.options.problem_grammar_class)&&a.attributes[e.options.problem_grammar_data_attribute];e&&(b||c)&&delete a.name;return a}}});m&&m.call(a,h)},scaytMenuDefinition:function(a){var e=
this,b=CKEDITOR.plugins.scayt;a=a.scayt;return{scayt:{scayt_ignore:{label:a.getLocal("btn_ignore"),group:"scayt_control",order:1,exec:function(a){a.scayt.ignoreWord()}},scayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),group:"scayt_control",order:2,exec:function(a){a.scayt.ignoreAllWords()}},scayt_add:{label:a.getLocal("btn_addWord"),group:"scayt_control",order:3,exec:function(a){var b=a.scayt;setTimeout(function(){b.addWordToUserDictionary()},10)}},scayt_option:{label:a.getLocal("btn_options"),
group:"scayt_control",order:4,exec:function(a){a.scayt.tabToOpen="options";b.openDialog(e.dialogName,a)},verification:function(a){return 1==a.config.scayt_uiTabs[0]?!0:!1}},scayt_language:{label:a.getLocal("btn_langs"),group:"scayt_control",order:5,exec:function(a){a.scayt.tabToOpen="langs";b.openDialog(e.dialogName,a)},verification:function(a){return 1==a.config.scayt_uiTabs[1]?!0:!1}},scayt_dictionary:{label:a.getLocal("btn_dictionaries"),group:"scayt_control",order:6,exec:function(a){a.scayt.tabToOpen=
"dictionaries";b.openDialog(e.dialogName,a)},verification:function(a){return 1==a.config.scayt_uiTabs[2]?!0:!1}},scayt_about:{label:a.getLocal("btn_about"),group:"scayt_control",order:7,exec:function(a){a.scayt.tabToOpen="about";b.openDialog(e.dialogName,a)}}},grayt:{grayt_problemdescription:{label:"Grammar problem description",group:"grayt_description",order:1,state:CKEDITOR.TRISTATE_DISABLED,exec:function(a){}},grayt_ignore:{label:a.getLocal("btn_ignore"),group:"grayt_control",order:2,exec:function(a){a.scayt.ignorePhrase()}},
grayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),group:"grayt_control",order:3,exec:function(a){a.scayt.ignoreAllPhrases()}}}}},buildSuggestionMenuItems:function(a,e,b){var c={},d={},m=b?"word":"phrase",k=b?"startGrammarCheck":"startSpellCheck",h=a.scayt;if(0<e.length&&"no_any_suggestions"!==e[0])if(b)for(b=0;b<e.length;b++){var g="scayt_suggest_"+CKEDITOR.plugins.scayt.suggestions[b].replace(" ","_");a.addCommand(g,this.createCommand(CKEDITOR.plugins.scayt.suggestions[b],m,k));b<a.config.scayt_maxSuggestions?
(a.addMenuItem(g,{label:e[b],command:g,group:"scayt_suggest",order:b+1}),c[g]=CKEDITOR.TRISTATE_OFF):(a.addMenuItem(g,{label:e[b],command:g,group:"scayt_moresuggest",order:b+1}),d[g]=CKEDITOR.TRISTATE_OFF,"on"===a.config.scayt_moreSuggestions&&(a.addMenuItem("scayt_moresuggest",{label:h.getLocal("btn_moreSuggestions"),group:"scayt_moresuggest",order:10,getItems:function(){return d}}),c.scayt_moresuggest=CKEDITOR.TRISTATE_OFF))}else for(b=0;b<e.length;b++)g="grayt_suggest_"+CKEDITOR.plugins.scayt.suggestions[b].replace(" ",
"_"),a.addCommand(g,this.createCommand(CKEDITOR.plugins.scayt.suggestions[b],m,k)),a.addMenuItem(g,{label:e[b],command:g,group:"grayt_suggest",order:b+1}),c[g]=CKEDITOR.TRISTATE_OFF;else c.no_scayt_suggest=CKEDITOR.TRISTATE_DISABLED,a.addCommand("no_scayt_suggest",{exec:function(){}}),a.addMenuItem("no_scayt_suggest",{label:h.getLocal("btn_noSuggestions")||"no_scayt_suggest",command:"no_scayt_suggest",group:"scayt_suggest",order:0});return c},menuGenerator:function(a,e){var b=a.scayt,c=this.scaytMenuDefinition(a),
d={},m=a.config.scayt_contextCommands.split("|"),k=e.getAttribute(b.getLangAttribute())||b.getLang(),h,g,l,f;g=b.isScaytNode(e);l=b.isGraytNode(e);g?(c=c.scayt,h=e.getAttribute(b.getScaytNodeAttributeName()),b.fire("getSuggestionsList",{lang:k,word:h}),d=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions,g)):l&&(c=c.grayt,d=e.getAttribute(b.getGraytNodeAttributeName()),b.getGraytNodeRuleAttributeName?(h=e.getAttribute(b.getGraytNodeRuleAttributeName()),b.getProblemDescriptionText(d,
h,k)):b.getProblemDescriptionText(d,k),f=b.getProblemDescriptionText(d,h,k),c.grayt_problemdescription&&f&&(f=f.replace(/([.!?])\s/g,"$1\x3cbr\x3e"),c.grayt_problemdescription.label=f),b.fire("getGrammarSuggestionsList",{lang:k,phrase:d,rule:h}),d=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions,g));if(g&&"off"==a.config.scayt_contextCommands)return d;for(var n in c)g&&-1==CKEDITOR.tools.indexOf(m,n.replace("scayt_",""))&&"all"!=a.config.scayt_contextCommands||l&&"grayt_problemdescription"!==
n&&-1==CKEDITOR.tools.indexOf(m,n.replace("grayt_",""))&&"all"!=a.config.scayt_contextCommands||(d[n]="undefined"!=typeof c[n].state?c[n].state:CKEDITOR.TRISTATE_OFF,"function"!==typeof c[n].verification||c[n].verification(a)||delete d[n],a.addCommand(n,{exec:c[n].exec}),a.addMenuItem(n,{label:a.lang.scayt[c[n].label]||c[n].label,command:n,group:c[n].group,order:c[n].order}));return d},createCommand:function(a,e,b){return{exec:function(c){c=c.scayt;var d={};d[e]=a;c.replaceSelectionNode(d);"startGrammarCheck"===
b&&c.removeMarkupInSelectionNode({grammarOnly:!0});c.fire(b)}}}}),CKEDITOR.plugins.scayt={charsToObserve:[{charName:"cke-fillingChar",charCode:function(){var a=CKEDITOR.version.match(/^\d(\.\d*)*/),a=a&&a[0],e;if(a){e="4.5.7";var b,a=a.replace(/\./g,"");e=e.replace(/\./g,"");b=a.length-e.length;b=0<=b?b:0;e=parseInt(a)>=parseInt(e)*Math.pow(10,b)}return e?Array(7).join(String.fromCharCode(8203)):String.fromCharCode(8203)}()}],onLoadTimestamp:"",state:{scayt:{},grayt:{}},warningCounter:0,suggestions:[],
options:{disablingCommandExec:{source:!0,newpage:!0,templates:!0},data_attribute_name:"data-scayt-word",misspelled_word_class:"scayt-misspell-word",problem_grammar_data_attribute:"data-grayt-phrase",problem_grammar_class:"gramm-problem"},backCompatibilityMap:{scayt_service_protocol:"scayt_serviceProtocol",scayt_service_host:"scayt_serviceHost",scayt_service_port:"scayt_servicePort",scayt_service_path:"scayt_servicePath",scayt_customerid:"scayt_customerId"},openDialog:function(a,e){var b=e.scayt;b.isAllModulesReady&&
!1===b.isAllModulesReady()||(e.lockSelection(),e.openDialog(a))},alarmCompatibilityMessage:function(){5>this.warningCounter&&(console.warn("You are using the latest version of SCAYT plugin for CKEditor with the old application version. In order to have access to the newest features, it is recommended to upgrade the application version to latest one as well. Contact us for more details at support@webspellchecker.net."),this.warningCounter+=1)},isNewUdSupported:function(a){return a.getUserDictionary?
!0:!1},reloadMarkup:function(a){var e;a&&(e=a.getScaytLangList(),a.reloadMarkup?a.reloadMarkup():(this.alarmCompatibilityMessage(),e&&e.ltr&&e.rtl&&a.fire("startSpellCheck, startGrammarCheck")))},replaceOldOptionsNames:function(a){for(var e in a)e in this.backCompatibilityMap&&(a[this.backCompatibilityMap[e]]=a[e],delete a[e])},createScayt:function(a){var e=this,b=CKEDITOR.plugins.scayt;this.loadScaytLibrary(a,function(a){function d(a){return new SCAYT.CKSCAYT(a,function(){},function(){})}var m;a.window&&
(m="BODY"==a.editable().$.nodeName?a.window.getFrame():a.editable());if(m){m={lang:a.config.scayt_sLang,container:m.$,customDictionary:a.config.scayt_customDictionaryIds,userDictionaryName:a.config.scayt_userDictionaryName,localization:a.langCode,customer_id:a.config.scayt_customerId,customPunctuation:a.config.scayt_customPunctuation,debug:a.config.scayt_debug,data_attribute_name:e.options.data_attribute_name,misspelled_word_class:e.options.misspelled_word_class,problem_grammar_data_attribute:e.options.problem_grammar_data_attribute,
problem_grammar_class:e.options.problem_grammar_class,"options-to-restore":a.config.scayt_disableOptionsStorage,focused:a.editable().hasFocus,ignoreElementsRegex:a.config.scayt_elementsToIgnore,ignoreGraytElementsRegex:a.config.grayt_elementsToIgnore,minWordLength:a.config.scayt_minWordLength,multiLanguageMode:a.config.scayt_multiLanguageMode,multiLanguageStyles:a.config.scayt_multiLanguageStyles,graytAutoStartup:a.config.grayt_autoStartup,charsToObserve:b.charsToObserve};a.config.scayt_serviceProtocol&&
(m.service_protocol=a.config.scayt_serviceProtocol);a.config.scayt_serviceHost&&(m.service_host=a.config.scayt_serviceHost);a.config.scayt_servicePort&&(m.service_port=a.config.scayt_servicePort);a.config.scayt_servicePath&&(m.service_path=a.config.scayt_servicePath);"boolean"===typeof a.config.scayt_ignoreAllCapsWords&&(m["ignore-all-caps-words"]=a.config.scayt_ignoreAllCapsWords);"boolean"===typeof a.config.scayt_ignoreDomainNames&&(m["ignore-domain-names"]=a.config.scayt_ignoreDomainNames);"boolean"===
typeof a.config.scayt_ignoreWordsWithMixedCases&&(m["ignore-words-with-mixed-cases"]=a.config.scayt_ignoreWordsWithMixedCases);"boolean"===typeof a.config.scayt_ignoreWordsWithNumbers&&(m["ignore-words-with-numbers"]=a.config.scayt_ignoreWordsWithNumbers);var k;try{k=d(m)}catch(h){e.alarmCompatibilityMessage(),delete m.charsToObserve,k=d(m)}k.subscribe("suggestionListSend",function(a){for(var b={},c=[],d=0;d<a.suggestionList.length;d++)b["word_"+a.suggestionList[d]]||(b["word_"+a.suggestionList[d]]=
a.suggestionList[d],c.push(a.suggestionList[d]));CKEDITOR.plugins.scayt.suggestions=c});k.subscribe("selectionIsChanged",function(b){a.getSelection().isLocked&&"restoreSelection"!==b.action&&a.lockSelection();"restoreSelection"===b.action&&a.selectionChange(!0)});k.subscribe("graytStateChanged",function(d){b.state.grayt[a.name]=d.state});k.addMarkupHandler&&k.addMarkupHandler(function(b){var d=a.editable(),f=d.getCustomData(b.charName);f&&(f.$=b.node,d.setCustomData(b.charName,f))});a.scayt=k;a.fire("scaytButtonState",
a.readOnly?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_ON)}else b.state.scayt[a.name]=!1})},destroy:function(a){a.scayt&&a.scayt.destroy();delete a.scayt;a.fire("scaytButtonState",CKEDITOR.TRISTATE_OFF)},loadScaytLibrary:function(a,e){var b,c=function(){CKEDITOR.fireOnce("scaytReady");a.scayt||"function"===typeof e&&e(a)};"undefined"===typeof window.SCAYT||"function"!==typeof window.SCAYT.CKSCAYT?(b=a.config.scayt_srcUrl+"?"+this.onLoadTimestamp,CKEDITOR.scriptLoader.load(b,function(a){a&&c()})):
window.SCAYT&&"function"===typeof window.SCAYT.CKSCAYT&&c()}},CKEDITOR.on("dialogDefinition",function(a){var e=a.data.name;a=a.data.definition.dialog;"scaytDialog"!==e&&"checkspell"!==e&&(a.on("show",function(a){a=a.sender&&a.sender.getParentEditor();var c=CKEDITOR.plugins.scayt,d=a.scayt;d&&c.state.scayt[a.name]&&d.setMarkupPaused&&d.setMarkupPaused(!0)}),a.on("hide",function(a){a=a.sender&&a.sender.getParentEditor();var c=CKEDITOR.plugins.scayt,d=a.scayt;d&&c.state.scayt[a.name]&&d.setMarkupPaused&&
d.setMarkupPaused(!1)}));if("scaytDialog"===e)a.on("cancel",function(a){return!1},this,null,-1);if("checkspell"===e)a.on("cancel",function(a){a=a.sender&&a.sender.getParentEditor();var c=CKEDITOR.plugins.scayt,d=a.scayt;d&&c.state.scayt[a.name]&&d.setMarkupPaused&&d.setMarkupPaused(!1);a.unlockSelection()},this,null,-2);if("link"===e)a.on("ok",function(a){var c=a.sender&&a.sender.getParentEditor();c&&setTimeout(function(){c.fire("reloadMarkupScayt",{removeOptions:{removeInside:!0,forceBookmark:!0},
timeout:0})},0)});if("replace"===e)a.on("hide",function(a){a=a.sender&&a.sender.getParentEditor();var c=CKEDITOR.plugins.scayt,d=a.scayt;a&&setTimeout(function(){d&&(d.fire("removeMarkupInDocument",{}),c.reloadMarkup(d))},0)})}),CKEDITOR.on("scaytReady",function(){if(!0===CKEDITOR.config.scayt_handleCheckDirty){var a=CKEDITOR.editor.prototype;a.checkDirty=CKEDITOR.tools.override(a.checkDirty,function(a){return function(){var c=null,d=this.scayt;if(CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state.scayt[this.name]&&
this.scayt){if(c="ready"==this.status)var e=d.removeMarkupFromString(this.getSnapshot()),d=d.removeMarkupFromString(this._.previousValue),c=c&&d!==e}else c=a.call(this);return c}});a.resetDirty=CKEDITOR.tools.override(a.resetDirty,function(a){return function(){var c=this.scayt;CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state.scayt[this.name]&&this.scayt?this._.previousValue=c.removeMarkupFromString(this.getSnapshot()):a.call(this)}})}if(!0===CKEDITOR.config.scayt_handleUndoRedo){var a=CKEDITOR.plugins.undo.Image.prototype,
e="function"==typeof a.equalsContent?"equalsContent":"equals";a[e]=CKEDITOR.tools.override(a[e],function(a){return function(c){var d=c.editor.scayt,e=this.contents,k=c.contents,h=null;CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state.scayt[c.editor.name]&&c.editor.scayt&&(this.contents=d.removeMarkupFromString(e)||"",c.contents=d.removeMarkupFromString(k)||"");h=a.apply(this,arguments);this.contents=e;c.contents=k;return h}})}}),function(){var a={preserveState:!0,editorFocus:!1,readOnly:1,exec:function(a){this.toggleState();
this.refresh(a)},refresh:function(a){if(a.document){var b=this.state==CKEDITOR.TRISTATE_ON?"attachClass":"removeClass";a.editable()[b]("cke_show_borders")}}};CKEDITOR.plugins.add("showborders",{modes:{wysiwyg:1},onLoad:function(){var a;a=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:".%1 table.%2,;.%1 table.%2 \x3e tr \x3e td, .%1 table.%2 \x3e tr \x3e th,;.%1 table.%2 \x3e tbody \x3e tr \x3e td, .%1 table.%2 \x3e tbody \x3e tr \x3e th,;.%1 table.%2 \x3e thead \x3e tr \x3e td, .%1 table.%2 \x3e thead \x3e tr \x3e th,;.%1 table.%2 \x3e tfoot \x3e tr \x3e td, .%1 table.%2 \x3e tfoot \x3e tr \x3e th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g,
"cke_show_border").replace(/%1/g,"cke_show_borders ");CKEDITOR.addCss(a)},init:function(e){var b=e.addCommand("showborders",a);b.canUndo=!1;!1!==e.config.startupShowBorders&&b.setState(CKEDITOR.TRISTATE_ON);e.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(e)},null,null,100);e.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(e)});e.on("removeFormatCleanup",function(a){a=a.data;e.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&a.is("table")&&(!a.hasAttribute("border")||
0>=parseInt(a.getAttribute("border"),10))&&a.addClass("cke_show_border")})},afterInit:function(a){var b=a.dataProcessor;a=b&&b.dataFilter;b=b&&b.htmlFilter;a&&a.addRules({elements:{table:function(a){a=a.attributes;var b=a["class"],e=parseInt(a.border,10);e&&!(0>=e)||b&&-1!=b.indexOf("cke_show_border")||(a["class"]=(b||"")+" cke_show_border")}}});b&&b.addRules({elements:{table:function(a){a=a.attributes;var b=a["class"];b&&(a["class"]=b.replace("cke_show_border","").replace(/\s{2}/," ").replace(/^\s+|\s+$/,
""))}}})}});CKEDITOR.on("dialogDefinition",function(a){var b=a.data.name;if("table"==b||"tableProperties"==b)if(a=a.data.definition,b=a.getContents("info").get("txtBorder"),b.commit=CKEDITOR.tools.override(b.commit,function(a){return function(b,e){a.apply(this,arguments);var k=parseInt(this.getValue(),10);e[!k||0>=k?"addClass":"removeClass"]("cke_show_border")}}),a=(a=a.getContents("advanced"))&&a.get("advCSSClasses"))a.setup=CKEDITOR.tools.override(a.setup,function(a){return function(){a.apply(this,
arguments);this.setValue(this.getValue().replace(/cke_show_border/,""))}}),a.commit=CKEDITOR.tools.override(a.commit,function(a){return function(b,e){a.apply(this,arguments);parseInt(e.getAttribute("border"),10)||e.addClass("cke_show_border")}})})}(),function(){CKEDITOR.plugins.add("sourcearea",{init:function(e){function b(){var a=d&&this.equals(CKEDITOR.document.getActive());this.hide();this.setStyle("height",this.getParent().$.clientHeight+"px");this.setStyle("width",this.getParent().$.clientWidth+
"px");this.show();a&&this.focus()}if(e.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var c=CKEDITOR.plugins.sourcearea;e.addMode("source",function(c){var d=e.ui.space("contents").getDocument().createElement("textarea");d.setStyles(CKEDITOR.tools.extend({width:CKEDITOR.env.ie7Compat?"99%":"100%",height:"100%",resize:"none",outline:"none","text-align":"left"},CKEDITOR.tools.cssVendorPrefix("tab-size",e.config.sourceAreaTabSize||4)));d.setAttribute("dir","ltr");d.addClass("cke_source").addClass("cke_reset").addClass("cke_enable_context_menu");
e.ui.space("contents").append(d);d=e.editable(new a(e,d));d.setData(e.getData(1));CKEDITOR.env.ie&&(d.attachListener(e,"resize",b,d),d.attachListener(CKEDITOR.document.getWindow(),"resize",b,d),CKEDITOR.tools.setTimeout(b,0,d));e.fire("ariaWidget",this);c()});e.addCommand("source",c.commands.source);e.ui.addButton&&e.ui.addButton("Source",{label:e.lang.sourcearea.toolbar,command:"source",toolbar:"mode,10"});e.on("mode",function(){e.getCommand("source").setState("source"==e.mode?CKEDITOR.TRISTATE_ON:
CKEDITOR.TRISTATE_OFF)});var d=CKEDITOR.env.ie&&9==CKEDITOR.env.version}}});var a=CKEDITOR.tools.createClass({base:CKEDITOR.editable,proto:{setData:function(a){this.setValue(a);this.status="ready";this.editor.fire("dataReady")},getData:function(){return this.getValue()},insertHtml:function(){},insertElement:function(){},insertText:function(){},setReadOnly:function(a){this[(a?"set":"remove")+"Attribute"]("readOnly","readonly")},detach:function(){a.baseProto.detach.call(this);this.clearCustomData();
this.remove()}}})}(),CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:!1,readOnly:1,exec:function(a){"wysiwyg"==a.mode&&a.fire("saveSnapshot");a.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED);a.setMode("source"==a.mode?"wysiwyg":"source")},canUndo:!1}}},CKEDITOR.plugins.add("specialchar",{availableLangs:{af:1,ar:1,az:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,"de-ch":1,el:1,en:1,"en-au":1,"en-ca":1,"en-gb":1,eo:1,es:1,"es-mx":1,et:1,eu:1,fa:1,fi:1,fr:1,"fr-ca":1,
gl:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,lt:1,lv:1,nb:1,nl:1,no:1,oc:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},requires:"dialog",init:function(a){var e=this;CKEDITOR.dialog.add("specialchar",this.path+"dialogs/specialchar.js");a.addCommand("specialchar",{exec:function(){var b=a.langCode,b=e.availableLangs[b]?b:e.availableLangs[b.replace(/-.*/,"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path+"dialogs/lang/"+
b+".js"),function(){CKEDITOR.tools.extend(a.lang.specialchar,e.langEntries[b]);a.openDialog("specialchar")})},modes:{wysiwyg:1},canUndo:!1});a.ui.addButton&&a.ui.addButton("SpecialChar",{label:a.lang.specialchar.toolbar,command:"specialchar",toolbar:"insert,50"})}}),CKEDITOR.config.specialChars="! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" "),
function(){CKEDITOR.plugins.add("stylescombo",{requires:"richcombo",init:function(a){var e=a.config,b=a.lang.stylescombo,c={},d=[],m=[];a.on("stylesSet",function(b){if(b=b.data.styles){for(var h,g,l,f=0,n=b.length;f<n;f++)(h=b[f],a.blockless&&h.element in CKEDITOR.dtd.$block||"string"==typeof h.type&&!CKEDITOR.style.customHandlers[h.type]||(g=h.name,h=new CKEDITOR.style(h),a.filter.customConfig&&!a.filter.check(h)))||(h._name=g,h._.enterMode=e.enterMode,h._.type=l=h.assignedTo||h.type,h._.weight=
f+1E3*(l==CKEDITOR.STYLE_OBJECT?1:l==CKEDITOR.STYLE_BLOCK?2:3),c[g]=h,d.push(h),m.push(h));d.sort(function(a,b){return a._.weight-b._.weight})}});a.ui.addRichCombo("Styles",{label:b.label,title:b.panelTitle,toolbar:"styles,10",allowedContent:m,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(e.contentsCss),multiSelect:!0,attributes:{"aria-label":b.panelTitle}},init:function(){var a,c,e,l,f,m;f=0;for(m=d.length;f<m;f++)a=d[f],c=a._name,l=a._.type,l!=e&&(this.startGroup(b["panelTitle"+String(l)]),
e=l),this.add(c,a.type==CKEDITOR.STYLE_OBJECT?c:a.buildPreview(),c);this.commit()},onClick:function(b){a.focus();a.fire("saveSnapshot");b=c[b];var d=a.elementPath();if(b.group&&b.removeStylesFromSameGroup(a))a.applyStyle(b);else a[b.checkActive(d,a)?"removeStyle":"applyStyle"](b);a.fire("saveSnapshot")},onRender:function(){a.on("selectionChange",function(b){var d=this.getValue();b=b.data.path.elements;for(var e=0,l=b.length,f;e<l;e++){f=b[e];for(var m in c)if(c[m].checkElementRemovable(f,!0,a)){m!=
d&&this.setValue(m);return}}this.setValue("")},this)},onOpen:function(){var d=a.getSelection(),d=d.getSelectedElement()||d.getStartElement()||a.editable(),d=a.elementPath(d),e=[0,0,0,0];this.showAll();this.unmarkAll();for(var g in c){var l=c[g],f=l._.type;l.checkApplicable(d,a,a.activeFilter)?e[f]++:this.hideItem(g);l.checkActive(d,a)&&this.mark(g)}e[CKEDITOR.STYLE_BLOCK]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_BLOCK)]);e[CKEDITOR.STYLE_INLINE]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_INLINE)]);
e[CKEDITOR.STYLE_OBJECT]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_OBJECT)])},refresh:function(){var b=a.elementPath();if(b){for(var d in c)if(c[d].checkApplicable(b,a,a.activeFilter))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}},reset:function(){c={};d=[]}})}})}(),function(){function a(a){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(b){if(b.editable().hasFocus){var c=b.getSelection(),e;if(e=(new CKEDITOR.dom.elementPath(c.getCommonAncestor(),c.root)).contains({td:1,
th:1},1)){var c=b.createRange(),g=CKEDITOR.tools.tryThese(function(){var b=e.getParent().$.cells[e.$.cellIndex+(a?-1:1)];b.parentNode.parentNode;return b},function(){var b=e.getParent(),b=b.getAscendant("table").$.rows[b.$.rowIndex+(a?-1:1)];return b.cells[a?b.cells.length-1:0]});if(g||a)if(g)g=new CKEDITOR.dom.element(g),c.moveToElementEditStart(g),c.checkStartOfBlock()&&c.checkEndOfBlock()||c.selectNodeContents(g);else return!0;else{for(var l=e.getAscendant("table").$,g=e.getParent().$.cells,l=
new CKEDITOR.dom.element(l.insertRow(-1),b.document),f=0,n=g.length;f<n;f++)l.append((new CKEDITOR.dom.element(g[f],b.document)).clone(!1,!1)).appendBogus();c.moveToElementEditStart(l)}c.select(!0);return!0}}return!1}}}var e={editorFocus:!1,modes:{wysiwyg:1,source:1}},b={exec:function(a){a.container.focusNext(!0,a.tabIndex)}},c={exec:function(a){a.container.focusPrevious(!0,a.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(d){for(var m=!1!==d.config.enableTabKeyTools,k=d.config.tabSpaces||0,
h="";k--;)h+=" ";if(h)d.on("key",function(a){9==a.data.keyCode&&(d.insertText(h),a.cancel())});if(m)d.on("key",function(a){(9==a.data.keyCode&&d.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+9&&d.execCommand("selectPreviousCell"))&&a.cancel()});d.addCommand("blur",CKEDITOR.tools.extend(b,e));d.addCommand("blurBack",CKEDITOR.tools.extend(c,e));d.addCommand("selectNextCell",a());d.addCommand("selectPreviousCell",a(!0))}})}(),CKEDITOR.dom.element.prototype.focusNext=function(a,e){var b=
void 0===e?this.getTabIndex():e,c,d,m,k,h,g;if(0>=b)for(h=this.getNextSourceNode(a,CKEDITOR.NODE_ELEMENT);h;){if(h.isVisible()&&0===h.getTabIndex()){m=h;break}h=h.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(h=this.getDocument().getBody().getFirst();h=h.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!c)if(!d&&h.equals(this)){if(d=!0,a){if(!(h=h.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;c=1}}else d&&!this.contains(h)&&(c=1);if(h.isVisible()&&!(0>(g=h.getTabIndex()))){if(c&&g==b){m=
h;break}g>b&&(!m||!k||g<k)?(m=h,k=g):m||0!==g||(m=h,k=g)}}m&&m.focus()},CKEDITOR.dom.element.prototype.focusPrevious=function(a,e){for(var b=void 0===e?this.getTabIndex():e,c,d,m,k=0,h,g=this.getDocument().getBody().getLast();g=g.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!c)if(!d&&g.equals(this)){if(d=!0,a){if(!(g=g.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;c=1}}else d&&!this.contains(g)&&(c=1);if(g.isVisible()&&!(0>(h=g.getTabIndex())))if(0>=b){if(c&&0===h){m=g;break}h>k&&
(m=g,k=h)}else{if(c&&h==b){m=g;break}h<b&&(!m||h>k)&&(m=g,k=h)}}m&&m.focus()},CKEDITOR.plugins.add("table",{requires:"dialog",init:function(a){function e(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains("table",1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}if(!a.blockless){var b=a.lang.table;a.addCommand("table",new CKEDITOR.dialogCommand("table",{context:"table",allowedContent:"table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];"+
(a.plugins.dialogadvtab?"table"+a.plugins.dialogadvtab.allowedContent():""),requiredContent:"table",contentTransformations:[["table{width}: sizeToStyle","table[width]: sizeToAttribute"],["td: splitBorderShorthand"],[{element:"table",right:function(a){if(a.styles){var b;if(a.styles.border)b=CKEDITOR.tools.style.parse.border(a.styles.border);else if(CKEDITOR.env.ie&&8===CKEDITOR.env.version){var e=a.styles;e["border-left"]&&e["border-left"]===e["border-right"]&&e["border-right"]===e["border-top"]&&
e["border-top"]===e["border-bottom"]&&(b=CKEDITOR.tools.style.parse.border(e["border-top"]))}b&&b.style&&"solid"===b.style&&b.width&&0!==parseFloat(b.width)&&(a.attributes.border=1);"collapse"==a.styles["border-collapse"]&&(a.attributes.cellspacing=0)}}}]]}));a.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties",e()));a.addCommand("tableDelete",e({exec:function(a){var b=a.elementPath().contains("table",1);if(b){var e=b.getParent(),k=a.editable();1!=e.getChildCount()||e.is("td",
"th")||e.equals(k)||(b=e);a=a.createRange();a.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START);b.remove();a.select()}}}));a.ui.addButton&&a.ui.addButton("Table",{label:b.toolbar,command:"table",toolbar:"insert,30"});CKEDITOR.dialog.add("table",this.path+"dialogs/table.js");CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js");a.addMenuItems&&a.addMenuItems({table:{label:b.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:b.deleteTable,command:"tableDelete",group:"table",
order:1}});a.on("doubleclick",function(a){a.data.element.is("table")&&(a.data.dialog="tableProperties")});a.contextMenu&&a.contextMenu.addListener(function(){return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}})}}}),function(){function a(a,b){function c(a){return b?b.contains(a)&&a.getAscendant("table",!0).equals(b):!0}function d(a){0<f.length||a.type!=CKEDITOR.NODE_ELEMENT||!x.test(a.getName())||a.getCustomData("selected_cell")||(CKEDITOR.dom.element.setMarker(e,a,"selected_cell",
!0),f.push(a))}var f=[],e={};if(!a)return f;for(var g=a.getRanges(),h=0;h<g.length;h++){var k=g[h];if(k.collapsed)(k=k.getCommonAncestor().getAscendant({td:1,th:1},!0))&&c(k)&&f.push(k);else{var k=new CKEDITOR.dom.walker(k),l;for(k.guard=d;l=k.next();)l.type==CKEDITOR.NODE_ELEMENT&&l.is(CKEDITOR.dtd.table)||(l=l.getAscendant({td:1,th:1},!0))&&!l.getCustomData("selected_cell")&&c(l)&&(CKEDITOR.dom.element.setMarker(e,l,"selected_cell",!0),f.push(l))}}CKEDITOR.dom.element.clearAllMarkers(e);return f}
function e(b,c){for(var d=p(b)?b:a(b),f=d[0],e=f.getAscendant("table"),f=f.getDocument(),g=d[0].getParent(),h=g.$.rowIndex,d=d[d.length-1],k=d.getParent().$.rowIndex+d.$.rowSpan-1,d=new CKEDITOR.dom.element(e.$.rows[k]),h=c?h:k,g=c?g:d,d=CKEDITOR.tools.buildTableMap(e),e=d[h],h=c?d[h-1]:d[h+1],d=d[0].length,f=f.createElement("tr"),k=0;e[k]&&k<d;k++){var l;1<e[k].rowSpan&&h&&e[k]==h[k]?(l=e[k],l.rowSpan+=1):(l=(new CKEDITOR.dom.element(e[k])).clone(),l.removeAttribute("rowSpan"),l.appendBogus(),f.append(l),
l=l.$);k+=l.colSpan-1}c?f.insertBefore(g):f.insertAfter(g);return f}function b(c){if(c instanceof CKEDITOR.dom.selection){var d=c.getRanges(),f=a(c),e=f[0].getAscendant("table"),g=CKEDITOR.tools.buildTableMap(e),h=f[0].getParent().$.rowIndex,f=f[f.length-1],k=f.getParent().$.rowIndex+f.$.rowSpan-1,f=[];c.reset();for(c=h;c<=k;c++){for(var l=g[c],m=new CKEDITOR.dom.element(e.$.rows[c]),n=0;n<l.length;n++){var p=new CKEDITOR.dom.element(l[n]),u=p.getParent().$.rowIndex;1==p.$.rowSpan?p.remove():(--p.$.rowSpan,
u==c&&(u=g[c+1],u[n-1]?p.insertAfter(new CKEDITOR.dom.element(u[n-1])):(new CKEDITOR.dom.element(e.$.rows[c+1])).append(p,1)));n+=p.$.colSpan-1}f.push(m)}g=e.$.rows;d[0].moveToPosition(e,CKEDITOR.POSITION_BEFORE_START);h=new CKEDITOR.dom.element(g[k+1]||(0<h?g[h-1]:null)||e.$.parentNode);for(c=f.length;0<=c;c--)b(f[c]);return e.$.parentNode?h:(d[0].select(),null)}c instanceof CKEDITOR.dom.element&&(e=c.getAscendant("table"),1==e.$.rows.length?e.remove():c.remove());return null}function c(a){for(var b=
a.getParent().$.cells,c=0,d=0;d<b.length;d++){var f=b[d],c=c+f.colSpan;if(f==a.$)break}return c-1}function d(a,b){for(var d=b?Infinity:0,f=0;f<a.length;f++){var e=c(a[f]);if(b?e<d:e>d)d=e}return d}function m(b,c){for(var f=p(b)?b:a(b),e=f[0].getAscendant("table"),g=d(f,1),f=d(f),h=c?g:f,k=CKEDITOR.tools.buildTableMap(e),e=[],g=[],f=[],l=k.length,m=0;m<l;m++)e.push(k[m][h]),g.push(c?k[m][h-1]:k[m][h+1]);for(m=0;m<l;m++)e[m]&&(1<e[m].colSpan&&g[m]==e[m]?(k=e[m],k.colSpan+=1):(h=new CKEDITOR.dom.element(e[m]),
k=h.clone(),k.removeAttribute("colSpan"),k.appendBogus(),k[c?"insertBefore":"insertAfter"].call(k,h),f.push(k),k=k.$),m+=k.rowSpan-1);return f}function k(b){function c(a){var b,d,f;b=a.getRanges();if(1!==b.length)return a;b=b[0];if(b.collapsed||0!==b.endOffset)return a;d=b.endContainer;f=d.getName().toLowerCase();if("td"!==f&&"th"!==f)return a;for((f=d.getPrevious())||(f=d.getParent().getPrevious().getLast());f.type!==CKEDITOR.NODE_TEXT&&"br"!==f.getName().toLowerCase();)if(f=f.getLast(),!f)return a;
b.setEndAt(f,CKEDITOR.POSITION_BEFORE_END);return b.select()}CKEDITOR.env.webkit&&!b.isFake&&(b=c(b));var d=b.getRanges(),f=a(b),e=f[0],g=f[f.length-1],f=e.getAscendant("table"),h=CKEDITOR.tools.buildTableMap(f),k,l,m=[];b.reset();var n=0;for(b=h.length;n<b;n++)for(var p=0,u=h[n].length;p<u;p++)void 0===k&&h[n][p]==e.$&&(k=p),h[n][p]==g.$&&(l=p);for(n=k;n<=l;n++)for(p=0;p<h.length;p++)g=h[p],e=new CKEDITOR.dom.element(f.$.rows[p]),g=new CKEDITOR.dom.element(g[n]),g.$&&(1==g.$.colSpan?g.remove():--g.$.colSpan,
p+=g.$.rowSpan-1,e.$.cells.length||m.push(e));k=h[0].length-1>l?new CKEDITOR.dom.element(h[0][l+1]):k&&-1!==h[0][k-1].cellIndex?new CKEDITOR.dom.element(h[0][k-1]):new CKEDITOR.dom.element(f.$.parentNode);m.length==b&&(d[0].moveToPosition(f,CKEDITOR.POSITION_AFTER_END),d[0].select(),f.remove());return k}function h(a,b){var c=a.getStartElement().getAscendant({td:1,th:1},!0);if(c){var d=c.clone();d.appendBogus();b?d.insertBefore(c):d.insertAfter(c)}}function g(b){if(b instanceof CKEDITOR.dom.selection){var c=
b.getRanges(),d=a(b),f=d[0]&&d[0].getAscendant("table"),e;a:{var h=0;e=d.length-1;for(var k={},m,n;m=d[h++];)CKEDITOR.dom.element.setMarker(k,m,"delete_cell",!0);for(h=0;m=d[h++];)if((n=m.getPrevious())&&!n.getCustomData("delete_cell")||(n=m.getNext())&&!n.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(k);e=n;break a}CKEDITOR.dom.element.clearAllMarkers(k);h=d[0].getParent();(h=h.getPrevious())?e=h.getLast():(h=d[e].getParent(),e=(h=h.getNext())?h.getChild(0):null)}b.reset();for(b=
d.length-1;0<=b;b--)g(d[b]);e?l(e,!0):f&&(c[0].moveToPosition(f,CKEDITOR.POSITION_BEFORE_START),c[0].select(),f.remove())}else b instanceof CKEDITOR.dom.element&&(c=b.getParent(),1==c.getChildCount()?c.remove():b.remove())}function l(a,b){var c=a.getDocument(),d=CKEDITOR.document;CKEDITOR.env.ie&&10==CKEDITOR.env.version&&(d.focus(),c.focus());c=new CKEDITOR.dom.range(c);c["moveToElementEdit"+(b?"End":"Start")](a)||(c.selectNodeContents(a),c.collapse(b?!1:!0));c.select(!0)}function f(a,b,c){a=a[b];
if("undefined"==typeof c)return a;for(b=0;a&&b<a.length;b++){if(c.is&&a[b]==c.$)return b;if(b==c)return new CKEDITOR.dom.element(a[b])}return c.is?-1:null}function n(b,c,d){var e=a(b),g;if((c?1!=e.length:2>e.length)||(g=b.getCommonAncestor())&&g.type==CKEDITOR.NODE_ELEMENT&&g.is("table"))return!1;var h;b=e[0];g=b.getAscendant("table");var k=CKEDITOR.tools.buildTableMap(g),l=k.length,m=k[0].length,n=b.getParent().$.rowIndex,p=f(k,n,b);if(c){var u;try{var v=parseInt(b.getAttribute("rowspan"),10)||1;
h=parseInt(b.getAttribute("colspan"),10)||1;u=k["up"==c?n-v:"down"==c?n+v:n]["left"==c?p-h:"right"==c?p+h:p]}catch(x){return!1}if(!u||b.$==u)return!1;e["up"==c||"left"==c?"unshift":"push"](new CKEDITOR.dom.element(u))}c=b.getDocument();var M=n,v=u=0,H=!d&&new CKEDITOR.dom.documentFragment(c),D=0;for(c=0;c<e.length;c++){h=e[c];var Q=h.getParent(),T=h.getFirst(),R=h.$.colSpan,L=h.$.rowSpan,Q=Q.$.rowIndex,W=f(k,Q,h),D=D+R*L,v=Math.max(v,W-p+R);u=Math.max(u,Q-n+L);d||(R=h,(L=R.getBogus())&&L.remove(),
R.trim(),h.getChildren().count()&&(Q==M||!T||T.isBlockBoundary&&T.isBlockBoundary({br:1})||(M=H.getLast(CKEDITOR.dom.walker.whitespaces(!0)),!M||M.is&&M.is("br")||H.append("br")),h.moveChildren(H)),c?h.remove():h.setHtml(""));M=Q}if(d)return u*v==D;H.moveChildren(b);b.appendBogus();v>=m?b.removeAttribute("rowSpan"):b.$.rowSpan=u;u>=l?b.removeAttribute("colSpan"):b.$.colSpan=v;d=new CKEDITOR.dom.nodeList(g.$.rows);e=d.count();for(c=e-1;0<=c;c--)g=d.getItem(c),g.$.cells.length||(g.remove(),e++);return b}
function u(b,c){var d=a(b);if(1<d.length)return!1;if(c)return!0;var d=d[0],e=d.getParent(),g=e.getAscendant("table"),h=CKEDITOR.tools.buildTableMap(g),k=e.$.rowIndex,l=f(h,k,d),m=d.$.rowSpan,n;if(1<m){n=Math.ceil(m/2);for(var m=Math.floor(m/2),e=k+n,g=new CKEDITOR.dom.element(g.$.rows[e]),h=f(h,e),p,e=d.clone(),k=0;k<h.length;k++)if(p=h[k],p.parentNode==g.$&&k>l){e.insertBefore(new CKEDITOR.dom.element(p));break}else p=null;p||g.append(e)}else for(m=n=1,g=e.clone(),g.insertAfter(e),g.append(e=d.clone()),
p=f(h,k),l=0;l<p.length;l++)p[l].rowSpan++;e.appendBogus();d.$.rowSpan=n;e.$.rowSpan=m;1==n&&d.removeAttribute("rowSpan");1==m&&e.removeAttribute("rowSpan");return e}function v(b,c){var d=a(b);if(1<d.length)return!1;if(c)return!0;var d=d[0],e=d.getParent(),g=e.getAscendant("table"),g=CKEDITOR.tools.buildTableMap(g),h=f(g,e.$.rowIndex,d),k=d.$.colSpan;if(1<k)e=Math.ceil(k/2),k=Math.floor(k/2);else{for(var k=e=1,l=[],m=0;m<g.length;m++){var n=g[m];l.push(n[h]);1<n[h].rowSpan&&(m+=n[h].rowSpan-1)}for(g=
0;g<l.length;g++)l[g].colSpan++}g=d.clone();g.insertAfter(d);g.appendBogus();d.$.colSpan=e;g.$.colSpan=k;1==e&&d.removeAttribute("colSpan");1==k&&g.removeAttribute("colSpan");return g}var x=/^(?:td|th)$/,p=CKEDITOR.tools.isArray;CKEDITOR.plugins.tabletools={requires:"table,dialog,contextmenu",init:function(c){function d(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains({td:1,th:1},1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}function f(a,
b){var d=c.addCommand(a,b);c.addFeature(d)}var p=c.lang.table,r=CKEDITOR.tools.style.parse,x="td{width} td{height} td{border-color} td{background-color} td{white-space} td{vertical-align} td{text-align} td[colspan] td[rowspan] th".split(" ");f("cellProperties",new CKEDITOR.dialogCommand("cellProperties",d({allowedContent:"td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]",requiredContent:x,contentTransformations:[[{element:"td",left:function(a){return a.styles.background&&
r.background(a.styles.background).color},right:function(a){a.styles["background-color"]=r.background(a.styles.background).color}},{element:"td",check:"td{vertical-align}",left:function(a){return a.attributes&&a.attributes.valign},right:function(a){a.styles["vertical-align"]=a.attributes.valign;delete a.attributes.valign}}],[{element:"tr",check:"td{height}",left:function(a){return a.styles&&a.styles.height},right:function(a){CKEDITOR.tools.array.forEach(a.children,function(b){b.name in{td:1,th:1}&&
(b.attributes["cke-row-height"]=a.styles.height)});delete a.styles.height}}],[{element:"td",check:"td{height}",left:function(a){return(a=a.attributes)&&a["cke-row-height"]},right:function(a){a.styles.height=a.attributes["cke-row-height"];delete a.attributes["cke-row-height"]}}]]})));CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");f("rowDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();(a=b(a))&&l(a)}}));f("rowInsertBefore",d({requiredContent:"table",exec:function(b){b=
b.getSelection();b=a(b);e(b,!0)}}));f("rowInsertAfter",d({requiredContent:"table",exec:function(b){b=b.getSelection();b=a(b);e(b)}}));f("columnDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();(a=k(a))&&l(a,!0)}}));f("columnInsertBefore",d({requiredContent:"table",exec:function(b){b=b.getSelection();b=a(b);m(b,!0)}}));f("columnInsertAfter",d({requiredContent:"table",exec:function(b){b=b.getSelection();b=a(b);m(b)}}));f("cellDelete",d({requiredContent:"table",exec:function(a){a=
a.getSelection();g(a)}}));f("cellMerge",d({allowedContent:"td[colspan,rowspan]",requiredContent:"td[colspan,rowspan]",exec:function(a,b){b.cell=n(a.getSelection());l(b.cell,!0)}}));f("cellMergeRight",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a,b){b.cell=n(a.getSelection(),"right");l(b.cell,!0)}}));f("cellMergeDown",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a,b){b.cell=n(a.getSelection(),"down");l(b.cell,!0)}}));f("cellVerticalSplit",
d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){l(v(a.getSelection()))}}));f("cellHorizontalSplit",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){l(u(a.getSelection()))}}));f("cellInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();h(a,!0)}}));f("cellInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();h(a)}}));c.addMenuItems&&c.addMenuItems({tablecell:{label:p.cell.menu,group:"tablecell",
order:1,getItems:function(){var b=c.getSelection(),d=a(b),b={tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:n(b,null,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:n(b,"right",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:n(b,"down",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:v(b,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,
tablecell_split_horizontal:u(b,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED};c.filter.check(x)&&(b.tablecell_properties=0<d.length?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);return b}},tablecell_insertBefore:{label:p.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:p.cell.insertAfter,group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:p.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:p.cell.merge,
group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:p.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:p.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:p.cell.splitHorizontal,group:"tablecell",command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:p.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:p.cell.title,
group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:p.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}}},tablerow_insertBefore:{label:p.row.insertBefore,group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:p.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:p.row.deleteRow,
group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:p.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}}},tablecolumn_insertBefore:{label:p.column.insertBefore,group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:p.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:p.column.deleteColumn,
group:"tablecolumn",command:"columnDelete",order:15}});c.contextMenu&&c.contextMenu.addListener(function(a,b,c){return(a=c.contains({td:1,th:1},1))&&!a.isReadOnly()?{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}:null})},getCellColIndex:c,insertRow:e,insertColumn:m,getSelectedCells:a};CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)}(),CKEDITOR.tools.buildTableMap=function(a,e,b,c,d){a=a.$.rows;b=b||0;c="number"===typeof c?c:a.length-
1;d="number"===typeof d?d:-1;var m=-1,k=[];for(e=e||0;e<=c;e++){m++;!k[m]&&(k[m]=[]);for(var h=-1,g=b;g<=(-1===d?a[e].cells.length-1:d);g++){var l=a[e].cells[g];if(!l)break;for(h++;k[m][h];)h++;for(var f=isNaN(l.colSpan)?1:l.colSpan,l=isNaN(l.rowSpan)?1:l.rowSpan,n=0;n<l&&!(e+n>c);n++){k[m+n]||(k[m+n]=[]);for(var u=0;u<f;u++)k[m+n][h+u]=a[e].cells[g]}h+=f-1;if(-1!==d&&h>=d)break}}return k},function(){function a(a){return CKEDITOR.plugins.widget&&CKEDITOR.plugins.widget.isDomWidget(a)}function e(a,
b){var c=a.getAscendant("table"),d=b.getAscendant("table"),f=CKEDITOR.tools.buildTableMap(c),e=l(a),g=l(b),h=[],k={},m,n;c.contains(d)&&(b=b.getAscendant({td:1,th:1}),g=l(b));e>g&&(c=e,e=g,g=c,c=a,a=b,b=c);for(c=0;c<f[e].length;c++)if(a.$===f[e][c]){m=c;break}for(c=0;c<f[g].length;c++)if(b.$===f[g][c]){n=c;break}m>n&&(c=m,m=n,n=c);for(c=e;c<=g;c++)for(e=m;e<=n;e++)d=new CKEDITOR.dom.element(f[c][e]),d.$&&!d.getCustomData("selected_cell")&&(h.push(d),CKEDITOR.dom.element.setMarker(k,d,"selected_cell",
!0));CKEDITOR.dom.element.clearAllMarkers(k);return h}function b(a){if(a)return a=a.clone(),a.enlarge(CKEDITOR.ENLARGE_ELEMENT),(a=a.getEnclosedNode())&&a.is&&a.is(CKEDITOR.dtd.$tableContent)}function c(a){return(a=a.editable().findOne(".cke_table-faked-selection"))&&a.getAscendant("table")}function d(a,b){var c=a.editable().find(".cke_table-faked-selection"),d;a.fire("lockSnapshot");a.editable().removeClass("cke_table-faked-selection-editor");for(d=0;d<c.count();d++)c.getItem(d).removeClass("cke_table-faked-selection");
0<c.count()&&c.getItem(0).getAscendant("table").data("cke-table-faked-selection-table",!1);a.fire("unlockSnapshot");b&&(t={active:!1},a.getSelection().isInTable()&&a.getSelection().reset())}function m(a,b){var c=[],d,f;for(f=0;f<b.length;f++)d=a.createRange(),d.setStartBefore(b[f]),d.setEndAfter(b[f]),c.push(d);a.getSelection().selectRanges(c)}function k(a){var b=a.editable().find(".cke_table-faked-selection");1>b.count()||(b=e(b.getItem(0),b.getItem(b.count()-1)),m(a,b))}function h(b,c,f){var g=
q(b.getSelection(!0));c=c.is("table")?null:c;var h;(h=t.active&&!t.first)&&!(h=c)&&(h=b.getSelection().getRanges(),h=1<g.length||h[0]&&!h[0].collapsed?!0:!1);if(h)t.first=c||g[0],t.dirty=c?!1:1!==g.length;else if(t.active&&c&&t.first.getAscendant("table").equals(c.getAscendant("table"))){g=e(t.first,c);if(!t.dirty&&1===g.length&&!a(f.data.getTarget()))return d(b,"mouseup"===f.name);t.dirty=!0;t.last=c;m(b,g)}}function g(a){var b=(a=a.editor||a.sender.editor)&&a.getSelection(),c=b&&b.getRanges()||
[],f;if(b&&(d(a),b.isInTable()&&b.isFake)){1===c.length&&c[0]._getTableElement()&&c[0]._getTableElement().is("table")&&(f=c[0]._getTableElement());f=q(b,f);a.fire("lockSnapshot");for(b=0;b<f.length;b++)f[b].addClass("cke_table-faked-selection");0<f.length&&(a.editable().addClass("cke_table-faked-selection-editor"),f[0].getAscendant("table").data("cke-table-faked-selection-table",""));a.fire("unlockSnapshot")}}function l(a){return a.getAscendant("tr",!0).$.rowIndex}function f(b){function e(a,b){return a&&
b?a.equals(b)||a.contains(b)||b.contains(a)||a.getCommonAncestor(b).is(r):!1}function g(a){return!a.getAscendant("table",!0)&&a.getDocument().equals(m.document)}function l(a,b,c,d){if("mousedown"===a.name&&(CKEDITOR.tools.getMouseButton(a)===CKEDITOR.MOUSE_BUTTON_LEFT||!d))return!0;if(b=a.name===(CKEDITOR.env.gecko?"mousedown":"mouseup")&&!g(a.data.getTarget()))a=a.data.getTarget().getAscendant({td:1,th:1},!0),b=!(a&&a.hasClass("cke_table-faked-selection"));return b}if(b.data.getTarget().getName&&
("mouseup"===b.name||!a(b.data.getTarget()))){var m=b.editor||b.listenerData.editor,n=m.getSelection(1),p=c(m),u=b.data.getTarget(),q=u&&u.getAscendant({td:1,th:1},!0),u=u&&u.getAscendant("table",!0),r={table:1,thead:1,tbody:1,tfoot:1,tr:1,td:1,th:1};l(b,n,p,u)&&d(m,!0);!t.active&&"mousedown"===b.name&&CKEDITOR.tools.getMouseButton(b)===CKEDITOR.MOUSE_BUTTON_LEFT&&u&&(t={active:!0},CKEDITOR.document.on("mouseup",f,null,{editor:m}));(q||u)&&h(m,q||u,b);"mouseup"===b.name&&(CKEDITOR.tools.getMouseButton(b)===
CKEDITOR.MOUSE_BUTTON_LEFT&&(g(b.data.getTarget())||e(p,u))&&k(m),t={active:!1},CKEDITOR.document.removeListener("mouseup",f))}}function n(a){var b=a.data.getTarget().getAscendant({td:1,th:1},!0);b&&!b.hasClass("cke_table-faked-selection")&&(a.cancel(),a.data.preventDefault())}function u(a,b){function c(a){a.cancel()}var d=a.getSelection(),f=d.createBookmarks(),e=a.document,g=a.createRange(),h=e.getDocumentElement().$,k=CKEDITOR.env.ie&&9>CKEDITOR.env.version,l=a.blockless||CKEDITOR.env.ie?"span":
"div",m,n,p,u;e.getById("cke_table_copybin")||(m=e.createElement(l),n=e.createElement(l),n.setAttributes({id:"cke_table_copybin","data-cke-temp":"1"}),m.setStyles({position:"absolute",width:"1px",height:"1px",overflow:"hidden"}),m.setStyle("ltr"==a.config.contentsLangDirection?"left":"right","-5000px"),m.setHtml(a.getSelectedHtml(!0)),a.fire("lockSnapshot"),n.append(m),a.editable().append(n),u=a.on("selectionChange",c,null,null,0),k&&(p=h.scrollTop),g.selectNodeContents(m),g.select(),k&&(h.scrollTop=
p),setTimeout(function(){n.remove();d.selectBookmarks(f);u.removeListener();a.fire("unlockSnapshot");b&&(a.extractSelectedHtml(),a.fire("saveSnapshot"))},100))}function v(a){var b=a.editor||a.sender.editor;b.getSelection().isInTable()&&u(b,"cut"===a.name)}function x(a){this._reset();a&&this.setSelectedCells(a)}function p(a,b,c){a.on("beforeCommandExec",function(c){-1!==CKEDITOR.tools.array.indexOf(b,c.data.name)&&(c.data.selectedCells=q(a.getSelection()))});a.on("afterCommandExec",function(d){-1!==
CKEDITOR.tools.array.indexOf(b,d.data.name)&&c(a,d.data)})}var t={active:!1},w,q,A,r,y;x.prototype={};x.prototype._reset=function(){this.cells={first:null,last:null,all:[]};this.rows={first:null,last:null}};x.prototype.setSelectedCells=function(a){this._reset();a=a.slice(0);this._arraySortByDOMOrder(a);this.cells.all=a;this.cells.first=a[0];this.cells.last=a[a.length-1];this.rows.first=a[0].getAscendant("tr");this.rows.last=this.cells.last.getAscendant("tr")};x.prototype.getTableMap=function(){var a=
A(this.cells.first),b;a:{b=this.cells.last;var c=b.getAscendant("table"),d=l(b),c=CKEDITOR.tools.buildTableMap(c),f;for(f=0;f<c[d].length;f++)if((new CKEDITOR.dom.element(c[d][f])).equals(b)){b=f;break a}b=void 0}return CKEDITOR.tools.buildTableMap(this._getTable(),l(this.rows.first),a,l(this.rows.last),b)};x.prototype._getTable=function(){return this.rows.first.getAscendant("table")};x.prototype.insertRow=function(a,b,c){if("undefined"===typeof a)a=1;else if(0>=a)return;for(var d=this.cells.first.$.cellIndex,
f=this.cells.last.$.cellIndex,e=c?[]:this.cells.all,g,h=0;h<a;h++)g=r(c?this.cells.all:e,b),g=CKEDITOR.tools.array.filter(g.find("td, th").toArray(),function(a){return c?!0:a.$.cellIndex>=d&&a.$.cellIndex<=f}),e=b?g.concat(e):e.concat(g);this.setSelectedCells(e)};x.prototype.insertColumn=function(a){function b(a){a=l(a);return a>=f&&a<=e}if("undefined"===typeof a)a=1;else if(0>=a)return;for(var c=this.cells,d=c.all,f=l(c.first),e=l(c.last),c=0;c<a;c++)d=d.concat(CKEDITOR.tools.array.filter(y(d),b));
this.setSelectedCells(d)};x.prototype.emptyCells=function(a){a=a||this.cells.all;for(var b=0;b<a.length;b++)a[b].setHtml("")};x.prototype._arraySortByDOMOrder=function(a){a.sort(function(a,b){return a.getPosition(b)&CKEDITOR.POSITION_PRECEDING?-1:1})};var C={onPaste:function(a){function c(a){return Math.max.apply(null,CKEDITOR.tools.array.map(a,function(a){return a.length},0))}function d(a){var b=f.createRange();b.selectNodeContents(a);b.select()}var f=a.editor,g=f.getSelection(),h=q(g),k=this.findTableInPastedContent(f,
a.data.dataValue),l=g.isInTable(!0)&&this.isBoundarySelection(g),n,p;!h.length||1===h.length&&!b(g.getRanges()[0])&&!l||l&&!k||(h=h[0].getAscendant("table"),n=new x(q(g,h)),f.once("afterPaste",function(){var a;if(p){a=new CKEDITOR.dom.element(p[0][0]);var b=p[p.length-1];a=e(a,new CKEDITOR.dom.element(b[b.length-1]))}else a=n.cells.all;m(f,a)}),k?(a.stop(),l?(n.insertRow(1,1===l,!0),g.selectElement(n.rows.first)):(n.emptyCells(),m(f,n.cells.all)),a=n.getTableMap(),p=CKEDITOR.tools.buildTableMap(k),
n.insertRow(p.length-a.length),n.insertColumn(c(p)-c(a)),a=n.getTableMap(),this.pasteTable(n,a,p),f.fire("saveSnapshot"),setTimeout(function(){f.fire("afterPaste")},0)):(d(n.cells.first),f.once("afterPaste",function(){f.fire("lockSnapshot");n.emptyCells(n.cells.all.slice(1));m(f,n.cells.all);f.fire("unlockSnapshot")})))},isBoundarySelection:function(a){a=a.getRanges()[0];var b=a.endContainer.getAscendant("tr",!0);if(b&&a.collapsed){if(a.checkBoundaryOfElement(b,CKEDITOR.START))return 1;if(a.checkBoundaryOfElement(b,
CKEDITOR.END))return 2}return 0},findTableInPastedContent:function(a,b){var c=a.dataProcessor,d=new CKEDITOR.dom.element("body");c||(c=new CKEDITOR.htmlDataProcessor(a));d.setHtml(c.toHtml(b),{fixForBody:!1});return 1<d.getChildCount()?null:d.findOne("table")},pasteTable:function(a,b,c){var d,f=A(a.cells.first),e=a._getTable(),g={},h,k,l,m;for(l=0;l<c.length;l++)for(h=new CKEDITOR.dom.element(e.$.rows[a.rows.first.$.rowIndex+l]),m=0;m<c[l].length;m++)if(k=new CKEDITOR.dom.element(c[l][m]),d=b[l]&&
b[l][m]?new CKEDITOR.dom.element(b[l][m]):null,k&&!k.getCustomData("processed")){if(d&&d.getParent())k.replace(d);else if(0===m||c[l][m-1])(d=0!==m?new CKEDITOR.dom.element(c[l][m-1]):null)&&h.equals(d.getParent())?k.insertAfter(d):0<f?h.$.cells[f]?k.insertAfter(new CKEDITOR.dom.element(h.$.cells[f])):h.append(k):h.append(k,!0);CKEDITOR.dom.element.setMarker(g,k,"processed",!0)}else k.getCustomData("processed")&&d&&d.remove();CKEDITOR.dom.element.clearAllMarkers(g)}};CKEDITOR.plugins.tableselection=
{getCellsBetween:e,keyboardIntegration:function(a){function b(a){var c=a.getEnclosedNode();c&&"function"===typeof c.is&&c.is({td:1,th:1})?c.setText(""):a.deleteContents();CKEDITOR.tools.array.forEach(a._find("td"),function(a){a.appendBogus()})}var c=a.editable();c.attachListener(c,"keydown",function(a){function c(b,d){if(!d.length)return null;var e=a.createRange(),g=CKEDITOR.dom.range.mergeRanges(d);CKEDITOR.tools.array.forEach(g,function(a){a.enlarge(CKEDITOR.ENLARGE_ELEMENT)});var h=g[0].getBoundaryNodes(),
k=h.startNode,h=h.endNode;if(k&&k.is&&k.is(f)){for(var l=k.getAscendant("table",!0),m=k.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT,l),n=!1,p=function(a){return!k.contains(a)&&a.is&&a.is("td","th")};m&&!p(m);)m=m.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT,l);!m&&h&&h.is&&!h.is("table")&&h.getNext()&&(m=h.getNext().findOne("td, th"),n=!0);if(m)e["moveToElementEdit"+(n?"Start":"End")](m);else e.setStartBefore(k.getAscendant("table",!0)),e.collapse(!0);g[0].deleteContents();return[e]}if(k)return e.moveToElementEditablePosition(k),
[e]}var d={37:1,38:1,39:1,40:1,8:1,46:1,13:1},f=CKEDITOR.tools.extend({table:1},CKEDITOR.dtd.$tableContent);delete f.td;delete f.th;return function(f){var e=f.data.getKey(),g=f.data.getKeystroke(),h,k=37===e||38==e,l,m,n;if(d[e]&&!a.readOnly&&(h=a.getSelection())&&h.isInTable()&&h.isFake){l=h.getRanges();m=l[0]._getTableElement();n=l[l.length-1]._getTableElement();if(13!==e||a.plugins.enterkey)f.data.preventDefault(),f.cancel();if(36<e&&41>e)l[0].moveToElementEditablePosition(k?m:n,!k),h.selectRanges([l[0]]);
else if(13!==e||13===g||g===CKEDITOR.SHIFT+13){for(f=0;f<l.length;f++)b(l[f]);(f=c(m,l))?l=f:l[0].moveToElementEditablePosition(m);h.selectRanges(l);13===e&&a.plugins.enterkey?(a.fire("lockSnapshot"),13===g?a.execCommand("enter"):a.execCommand("shiftEnter"),a.fire("unlockSnapshot"),a.fire("saveSnapshot")):13!==e&&a.fire("saveSnapshot")}}}}(a),null,null,-1);c.attachListener(c,"keypress",function(c){var d=a.getSelection(),f=c.data.$.charCode||13===c.data.getKey(),e;if(!a.readOnly&&d&&d.isInTable()&&
d.isFake&&f&&!(c.data.getKeystroke()&CKEDITOR.CTRL)){c=d.getRanges();f=c[0].getEnclosedNode().getAscendant({td:1,th:1},!0);for(e=0;e<c.length;e++)b(c[e]);f&&(c[0].moveToElementEditablePosition(f),d.selectRanges([c[0]]))}},null,null,-1)},isSupportedEnvironment:!(CKEDITOR.env.ie&&11>CKEDITOR.env.version)};CKEDITOR.plugins.add("tableselection",{requires:"clipboard,tabletools",onLoad:function(){w=CKEDITOR.plugins.tabletools;q=w.getSelectedCells;A=w.getCellColIndex;r=w.insertRow;y=w.insertColumn;CKEDITOR.document.appendStyleSheet(this.path+
"styles/tableselection.css")},init:function(a){CKEDITOR.plugins.tableselection.isSupportedEnvironment&&(a.addContentsCss&&a.addContentsCss(this.path+"styles/tableselection.css"),a.on("contentDom",function(){var b=a.editable(),c=b.isInline()?b:a.document,d={editor:a};b.attachListener(c,"mousedown",f,null,d);b.attachListener(c,"mousemove",f,null,d);b.attachListener(c,"mouseup",f,null,d);b.attachListener(b,"dragstart",n);b.attachListener(a,"selectionCheck",g);CKEDITOR.plugins.tableselection.keyboardIntegration(a);
CKEDITOR.plugins.clipboard&&!CKEDITOR.plugins.clipboard.isCustomCopyCutSupported&&(b.attachListener(b,"cut",v),b.attachListener(b,"copy",v))}),a.on("paste",C.onPaste,C),p(a,"rowInsertBefore rowInsertAfter columnInsertBefore columnInsertAfter cellInsertBefore cellInsertAfter".split(" "),function(a,b){m(a,b.selectedCells)}),p(a,["cellMerge","cellMergeRight","cellMergeDown"],function(a,b){m(a,[b.commandData.cell])}),p(a,["cellDelete"],function(a){d(a,!0)}))}})}(),"use strict",function(){var a=[CKEDITOR.CTRL+
90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],e={8:1,46:1};CKEDITOR.plugins.add("undo",{init:function(c){function d(a){f.enabled&&!1!==a.data.command.canUndo&&f.save()}function e(){f.enabled=c.readOnly?!1:"wysiwyg"==c.mode;f.onChange()}var f=c.undoManager=new b(c),k=f.editingHandler=new m(f),u=c.addCommand("undo",{exec:function(){f.undo()&&(c.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),v=c.addCommand("redo",{exec:function(){f.redo()&&(c.selectionChange(),this.fire("afterRedo"))},
startDisabled:!0,canUndo:!1});c.setKeystroke([[a[0],"undo"],[a[1],"redo"],[a[2],"redo"]]);f.onChange=function(){u.setState(f.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);v.setState(f.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)};c.on("beforeCommandExec",d);c.on("afterCommandExec",d);c.on("saveSnapshot",function(a){f.save(a.data&&a.data.contentOnly)});c.on("contentDom",k.attachListeners,k);c.on("instanceReady",function(){c.fire("saveSnapshot")});c.on("beforeModeUnload",
function(){"wysiwyg"==c.mode&&f.save(!0)});c.on("mode",e);c.on("readOnly",e);c.ui.addButton&&(c.ui.addButton("Undo",{label:c.lang.undo.undo,command:"undo",toolbar:"undo,10"}),c.ui.addButton("Redo",{label:c.lang.undo.redo,command:"redo",toolbar:"undo,20"}));c.resetUndo=function(){f.reset();c.fire("saveSnapshot")};c.on("updateSnapshot",function(){f.currentImage&&f.update()});c.on("lockSnapshot",function(a){a=a.data;f.lock(a&&a.dontUpdate,a&&a.forceUpdate)});c.on("unlockSnapshot",f.unlock,f)}});CKEDITOR.plugins.undo=
{};var b=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0];this.locked=null;this.previousKeyGroup=-1;this.limit=a.config.undoStackSize||20;this.strokesLimit=25;this.editor=a;this.reset()};b.prototype={type:function(a,c){var d=b.getKeyGroup(a),f=this.strokesRecorded[d]+1;c=c||f>=this.strokesLimit;this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange());c?(f=0,this.editor.fire("saveSnapshot")):this.editor.fire("change");this.strokesRecorded[d]=f;this.previousKeyGroup=
d},keyGroupChanged:function(a){return b.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[];this.index=-1;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},resetType:function(){this.strokesRecorded=[0,0];this.typing=!1;this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,b,d){var f=this.editor;if(this.locked||"ready"!=f.status||
"wysiwyg"!=f.mode)return!1;var e=f.editable();if(!e||"ready"!=e.status)return!1;e=this.snapshots;b||(b=new c(f));if(!1===b.contents)return!1;if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||b.equalsSelection(this.currentImage))return!1}else!1!==d&&f.fire("change");e.splice(this.index+1,e.length-this.index-1);e.length==this.limit&&e.shift();this.index=e.push(b)-1;this.currentImage=b;!1!==d&&this.refreshState();return!0},restoreImage:function(a){var b=this.editor,c;a.bookmarks&&(b.focus(),
c=b.getSelection());this.locked={level:999};this.editor.loadSnapshot(a.contents);a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),c.select());this.locked=null;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();this.refreshState();b.fire("change")},getNextImage:function(a){var b=this.snapshots,c=this.currentImage,d;if(c)if(a)for(d=this.index-1;0<=d;d--){if(a=b[d],!c.equalsContent(a))return a.index=
d,a}else for(d=this.index+1;d<b.length;d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||
(a=new c(this.editor));for(var b=this.index,d=this.snapshots;0<b&&this.currentImage.equalsContent(d[b-1]);)--b;d.splice(b,this.index-b+1,a);this.index=b;this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1;var b=this.snapshots,c=b[b.length-1];return c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++;else if(a)this.locked={level:1};else{var d=null;if(b)d=!0;else{var f=new c(this.editor,
!0);this.currentImage&&this.currentImage.equalsContent(f)&&(d=f)}this.locked={update:d,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update;this.locked=null;if(!0===a)this.update();else if(a){var b=new c(this.editor,!0);a.equalsContent(b)||this.update()}}}};b.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1};b.keyGroups={PRINTABLE:0,FUNCTIONAL:1};b.isNavigationKey=function(a){return!!b.navigationKeyCodes[a]};b.getKeyGroup=function(a){var c=b.keyGroups;
return e[a]?c.FUNCTIONAL:c.PRINTABLE};b.getOppositeKeyGroup=function(a){var c=b.keyGroups;return a==c.FUNCTIONAL?c.PRINTABLE:c.FUNCTIONAL};b.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&b.getKeyGroup(a)==b.keyGroups.FUNCTIONAL};var c=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a;a.fire("beforeUndoImage");var c=a.getSnapshot();CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=c;b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0));a.fire("afterUndoImage")},
d=/\b(?:href|src|name)="[^"]*?"/gi;c.prototype={equalsContent:function(a){var b=this.contents;a=a.contents;CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)&&(b=b.replace(d,""),a=a.replace(d,""));return b!=a?!1:!0},equalsSelection:function(a){var b=this.bookmarks;a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return!1;for(var c=0;c<b.length;c++){var d=b[c],e=a[c];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end,
e.end))return!1}}return!0}};var m=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a;this.ignoreInputEvent=!1;this.keyEventsStack=new k;this.lastKeydownImage=null};m.prototype={onKeydown:function(d){var e=d.data.getKey();if(229!==e)if(-1<CKEDITOR.tools.indexOf(a,d.data.getKeystroke()))d.data.preventDefault();else if(this.keyEventsStack.cleanUp(d),d=this.undoManager,this.keyEventsStack.getLast(e)||this.keyEventsStack.push(e),this.lastKeydownImage=new c(d.editor),b.isNavigationKey(e)||
this.undoManager.keyGroupChanged(e))if(d.strokesRecorded[0]||d.strokesRecorded[1])d.save(!1,this.lastKeydownImage,!1),d.resetType()},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=!1;else{var a=this.keyEventsStack.getLast();a||(a=this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var d=this.undoManager;
a=a.data.getKey();var e=this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if(!(b.ieFunctionalKeysBug(a)&&this.lastKeydownImage&&this.lastKeydownImage.equalsContent(new c(d.editor,!0))))if(0<e)d.type(a);else if(b.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager;!a&&b.save(!0,null,!1)||b.updateSelection(new c(b.editor));b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},activateInputEventListener:function(){this.ignoreInputEvent=
!1},attachListeners:function(){var a=this.undoManager.editor,c=a.editable(),d=this;c.attachListener(c,"keydown",function(a){d.onKeydown(a);if(b.ieFunctionalKeysBug(a.data.getKey()))d.onInput()},null,null,999);c.attachListener(c,CKEDITOR.env.ie?"keypress":"input",d.onInput,d,null,999);c.attachListener(c,"keyup",d.onKeyup,d,null,999);c.attachListener(c,"paste",d.ignoreInputEventListener,d,null,999);c.attachListener(c,"drop",d.ignoreInputEventListener,d,null,999);a.on("afterPaste",d.activateInputEventListener,
d,null,999);c.attachListener(c.isInline()?c:a.document.getDocumentElement(),"click",function(){d.onNavigationKey()},null,null,999);c.attachListener(this.undoManager.editor,"blur",function(){d.keyEventsStack.remove(9)},null,null,999)}};var k=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=[]};k.prototype={push:function(a){a=this.stack.push({keyCode:a,inputs:0});return this.stack[a-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1;for(var b=this.stack.length;b--;)if(this.stack[b].keyCode==
a)return b;return-1},getLast:function(a){a=this.getLastIndex(a);return-1!=a?this.stack[a]:null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a=this.getLastIndex(a);-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=0;else for(a=this.stack.length;a--;)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0;a--;)b+=this.stack[a].inputs;return b},cleanUp:function(a){a=a.data.$;a.ctrlKey||a.metaKey||this.remove(17);
a.shiftKey||this.remove(16);a.altKey||this.remove(18)}}}(),"use strict",function(){function a(a,b){CKEDITOR.tools.extend(this,{editor:a,editable:a.editable(),doc:a.document,win:a.window},b,!0);this.inline=this.editable.isInline();this.inline||(this.frame=this.win.getFrame());this.target=this[this.inline?"editable":"doc"]}function e(a,b){CKEDITOR.tools.extend(this,b,{editor:a},!0)}function b(a,b){var c=a.editable();CKEDITOR.tools.extend(this,{editor:a,editable:c,inline:c.isInline(),doc:a.document,
win:a.window,container:CKEDITOR.document.getBody(),winTop:CKEDITOR.document.getWindow()},b,!0);this.hidden={};this.visible={};this.inline||(this.frame=this.win.getFrame());this.queryViewport();var e=CKEDITOR.tools.bind(this.queryViewport,this),h=CKEDITOR.tools.bind(this.hideVisible,this),k=CKEDITOR.tools.bind(this.removeAll,this);c.attachListener(this.winTop,"resize",e);c.attachListener(this.winTop,"scroll",e);c.attachListener(this.winTop,"resize",h);c.attachListener(this.win,"scroll",h);c.attachListener(this.inline?
c:this.frame,"mouseout",function(a){var b=a.data.$.clientX;a=a.data.$.clientY;this.queryViewport();(b<=this.rect.left||b>=this.rect.right||a<=this.rect.top||a>=this.rect.bottom)&&this.hideVisible();(0>=b||b>=this.winTopPane.width||0>=a||a>=this.winTopPane.height)&&this.hideVisible()},this);c.attachListener(a,"resize",e);c.attachListener(a,"mode",k);a.on("destroy",k);this.lineTpl=(new CKEDITOR.template('\x3cdiv data-cke-lineutils-line\x3d"1" class\x3d"cke_reset_all" style\x3d"{lineStyle}"\x3e\x3cspan style\x3d"{tipLeftStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3cspan style\x3d"{tipRightStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3c/div\x3e')).output({lineStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},
m,this.lineStyle,!0)),tipLeftStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},d,{left:"0px","border-left-color":"red","border-width":"6px 0 6px 6px"},this.tipCss,this.tipLeftStyle,!0)),tipRightStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},d,{right:"0px","border-right-color":"red","border-width":"6px 6px 6px 0"},this.tipCss,this.tipRightStyle,!0))})}function c(a){var b;if(b=a&&a.type==CKEDITOR.NODE_ELEMENT)b=!(k[a.getComputedStyle("float")]||k[a.getAttribute("align")]);return b&&
!h[a.getComputedStyle("position")]}CKEDITOR.plugins.add("lineutils");CKEDITOR.LINEUTILS_BEFORE=1;CKEDITOR.LINEUTILS_AFTER=2;CKEDITOR.LINEUTILS_INSIDE=4;a.prototype={start:function(a){var b=this,c=this.editor,d=this.doc,e,h,k,m,t=CKEDITOR.tools.eventsBuffer(50,function(){c.readOnly||"wysiwyg"!=c.mode||(b.relations={},(h=d.$.elementFromPoint(k,m))&&h.nodeType&&(e=new CKEDITOR.dom.element(h),b.traverseSearch(e),isNaN(k+m)||b.pixelSearch(e,k,m),a&&a(b.relations,k,m)))});this.listener=this.editable.attachListener(this.target,
"mousemove",function(a){k=a.data.$.clientX;m=a.data.$.clientY;t.input()});this.editable.attachListener(this.inline?this.editable:this.frame,"mouseout",function(){t.reset()})},stop:function(){this.listener&&this.listener.removeListener()},getRange:function(){var a={};a[CKEDITOR.LINEUTILS_BEFORE]=CKEDITOR.POSITION_BEFORE_START;a[CKEDITOR.LINEUTILS_AFTER]=CKEDITOR.POSITION_AFTER_END;a[CKEDITOR.LINEUTILS_INSIDE]=CKEDITOR.POSITION_AFTER_START;return function(b){var c=this.editor.createRange();c.moveToPosition(this.relations[b.uid].element,
a[b.type]);return c}}(),store:function(){function a(b,c,d){var e=b.getUniqueId();e in d?d[e].type|=c:d[e]={element:b,type:c}}return function(b,d){var e;d&CKEDITOR.LINEUTILS_AFTER&&c(e=b.getNext())&&e.isVisible()&&(a(e,CKEDITOR.LINEUTILS_BEFORE,this.relations),d^=CKEDITOR.LINEUTILS_AFTER);d&CKEDITOR.LINEUTILS_INSIDE&&c(e=b.getFirst())&&e.isVisible()&&(a(e,CKEDITOR.LINEUTILS_BEFORE,this.relations),d^=CKEDITOR.LINEUTILS_INSIDE);a(b,d,this.relations)}}(),traverseSearch:function(a){var b,d,e;do if(e=a.$["data-cke-expando"],
!(e&&e in this.relations)){if(a.equals(this.editable))break;if(c(a))for(b in this.lookups)(d=this.lookups[b](a))&&this.store(a,d)}while((!a||a.type!=CKEDITOR.NODE_ELEMENT||"true"!=a.getAttribute("contenteditable"))&&(a=a.getParent()))},pixelSearch:function(){function a(d,e,g,h,k){for(var m=0,t;k(g);){g+=h;if(25==++m)break;if(t=this.doc.$.elementFromPoint(e,g))if(t==d)m=0;else if(b(d,t)&&(m=0,c(t=new CKEDITOR.dom.element(t))))return t}}var b=CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a,b){return a.contains(b)}:
function(a,b){return!!(a.compareDocumentPosition(b)&16)};return function(b,d,e){var h=this.win.getViewPaneSize().height,k=a.call(this,b.$,d,e,-1,function(a){return 0<a});d=a.call(this,b.$,d,e,1,function(a){return a<h});if(k)for(this.traverseSearch(k);!k.getParent().equals(b);)k=k.getParent();if(d)for(this.traverseSearch(d);!d.getParent().equals(b);)d=d.getParent();for(;k||d;){k&&(k=k.getNext(c));if(!k||k.equals(d))break;this.traverseSearch(k);d&&(d=d.getPrevious(c));if(!d||d.equals(k))break;this.traverseSearch(d)}}}(),
greedySearch:function(){this.relations={};for(var a=this.editable.getElementsByTag("*"),b=0,d,e,h;d=a.getItem(b++);)if(!d.equals(this.editable)&&d.type==CKEDITOR.NODE_ELEMENT&&(d.hasAttribute("contenteditable")||!d.isReadOnly())&&c(d)&&d.isVisible())for(h in this.lookups)(e=this.lookups[h](d))&&this.store(d,e);return this.relations}};e.prototype={locate:function(){function a(b,d){var e=b.element[d===CKEDITOR.LINEUTILS_BEFORE?"getPrevious":"getNext"]();return e&&c(e)?(b.siblingRect=e.getClientRect(),
d==CKEDITOR.LINEUTILS_BEFORE?(b.siblingRect.bottom+b.elementRect.top)/2:(b.elementRect.bottom+b.siblingRect.top)/2):d==CKEDITOR.LINEUTILS_BEFORE?b.elementRect.top:b.elementRect.bottom}return function(b){var c;this.locations={};for(var d in b)c=b[d],c.elementRect=c.element.getClientRect(),c.type&CKEDITOR.LINEUTILS_BEFORE&&this.store(d,CKEDITOR.LINEUTILS_BEFORE,a(c,CKEDITOR.LINEUTILS_BEFORE)),c.type&CKEDITOR.LINEUTILS_AFTER&&this.store(d,CKEDITOR.LINEUTILS_AFTER,a(c,CKEDITOR.LINEUTILS_AFTER)),c.type&
CKEDITOR.LINEUTILS_INSIDE&&this.store(d,CKEDITOR.LINEUTILS_INSIDE,(c.elementRect.top+c.elementRect.bottom)/2);return this.locations}}(),sort:function(){var a,b,c,d;return function(e,h){a=this.locations;b=[];for(var k in a)for(var m in a[k])if(c=Math.abs(e-a[k][m]),b.length){for(d=0;d<b.length;d++)if(c<b[d].dist){b.splice(d,0,{uid:+k,type:m,dist:c});break}d==b.length&&b.push({uid:+k,type:m,dist:c})}else b.push({uid:+k,type:m,dist:c});return"undefined"!=typeof h?b.slice(0,h):b}}(),store:function(a,
b,c){this.locations[a]||(this.locations[a]={});this.locations[a][b]=c}};var d={display:"block",width:"0px",height:"0px","border-color":"transparent","border-style":"solid",position:"absolute",top:"-6px"},m={height:"0px","border-top":"1px dashed red",position:"absolute","z-index":9999};b.prototype={removeAll:function(){for(var a in this.hidden)this.hidden[a].remove(),delete this.hidden[a];for(a in this.visible)this.visible[a].remove(),delete this.visible[a]},hideLine:function(a){var b=a.getUniqueId();
a.hide();this.hidden[b]=a;delete this.visible[b]},showLine:function(a){var b=a.getUniqueId();a.show();this.visible[b]=a;delete this.hidden[b]},hideVisible:function(){for(var a in this.visible)this.hideLine(this.visible[a])},placeLine:function(a,b){var c,d,e;if(c=this.getStyle(a.uid,a.type)){for(e in this.visible)if(this.visible[e].getCustomData("hash")!==this.hash){d=this.visible[e];break}if(!d)for(e in this.hidden)if(this.hidden[e].getCustomData("hash")!==this.hash){this.showLine(d=this.hidden[e]);
break}d||this.showLine(d=this.addLine());d.setCustomData("hash",this.hash);this.visible[d.getUniqueId()]=d;d.setStyles(c);b&&b(d)}},getStyle:function(a,b){var c=this.relations[a],d=this.locations[a][b],e={};e.width=c.siblingRect?Math.max(c.siblingRect.width,c.elementRect.width):c.elementRect.width;e.top=this.inline?d+this.winTopScroll.y-this.rect.relativeY:this.rect.top+this.winTopScroll.y+d;if(e.top-this.winTopScroll.y<this.rect.top||e.top-this.winTopScroll.y>this.rect.bottom)return!1;this.inline?
e.left=c.elementRect.left-this.rect.relativeX:(0<c.elementRect.left?e.left=this.rect.left+c.elementRect.left:(e.width+=c.elementRect.left,e.left=this.rect.left),0<(c=e.left+e.width-(this.rect.left+this.winPane.width))&&(e.width-=c));e.left+=this.winTopScroll.x;for(var h in e)e[h]=CKEDITOR.tools.cssLength(e[h]);return e},addLine:function(){var a=CKEDITOR.dom.element.createFromHtml(this.lineTpl);a.appendTo(this.container);return a},prepare:function(a,b){this.relations=a;this.locations=b;this.hash=Math.random()},
cleanup:function(){var a,b;for(b in this.visible)a=this.visible[b],a.getCustomData("hash")!==this.hash&&this.hideLine(a)},queryViewport:function(){this.winPane=this.win.getViewPaneSize();this.winTopScroll=this.winTop.getScrollPosition();this.winTopPane=this.winTop.getViewPaneSize();this.rect=this.getClientRect(this.inline?this.editable:this.frame)},getClientRect:function(a){a=a.getClientRect();var b=this.container.getDocumentPosition(),c=this.container.getComputedStyle("position");a.relativeX=a.relativeY=
0;"static"!=c&&(a.relativeY=b.y,a.relativeX=b.x,a.top-=a.relativeY,a.bottom-=a.relativeY,a.left-=a.relativeX,a.right-=a.relativeX);return a}};var k={left:1,right:1,center:1},h={absolute:1,fixed:1};CKEDITOR.plugins.lineutils={finder:a,locator:e,liner:b}}(),function(){function a(a){return a.getName&&!a.hasAttribute("data-cke-temp")}CKEDITOR.plugins.add("widgetselection",{init:function(a){if(CKEDITOR.env.webkit){var b=CKEDITOR.plugins.widgetselection;a.on("contentDom",function(a){a=a.editor;var d=a.editable();
d.attachListener(d,"keydown",function(a){a.data.getKeystroke()==CKEDITOR.CTRL+65&&CKEDITOR.tools.setTimeout(function(){b.addFillers(d)||b.removeFillers(d)},0)},null,null,-1);a.on("selectionCheck",function(a){b.removeFillers(a.editor.editable())});a.on("paste",function(a){a.data.dataValue=b.cleanPasteData(a.data.dataValue)});"selectall"in a.plugins&&b.addSelectAllIntegration(a)})}}});CKEDITOR.plugins.widgetselection={startFiller:null,endFiller:null,fillerAttribute:"data-cke-filler-webkit",fillerContent:"\x26nbsp;",
fillerTagName:"div",addFillers:function(e){var b=e.editor;if(!this.isWholeContentSelected(e)&&0<e.getChildCount()){var c=e.getFirst(a),d=e.getLast(a);c&&c.type==CKEDITOR.NODE_ELEMENT&&!c.isEditable()&&(this.startFiller=this.createFiller(),e.append(this.startFiller,1));d&&d.type==CKEDITOR.NODE_ELEMENT&&!d.isEditable()&&(this.endFiller=this.createFiller(!0),e.append(this.endFiller,0));if(this.hasFiller(e))return b=b.createRange(),b.selectNodeContents(e),b.select(),!0}return!1},removeFillers:function(a){if(this.hasFiller(a)&&
!this.isWholeContentSelected(a)){var b=a.findOne(this.fillerTagName+"["+this.fillerAttribute+"\x3dstart]"),c=a.findOne(this.fillerTagName+"["+this.fillerAttribute+"\x3dend]");this.startFiller&&b&&this.startFiller.equals(b)?this.removeFiller(this.startFiller,a):this.startFiller=b;this.endFiller&&c&&this.endFiller.equals(c)?this.removeFiller(this.endFiller,a):this.endFiller=c}},cleanPasteData:function(a){a&&a.length&&(a=a.replace(this.createFillerRegex(),"").replace(this.createFillerRegex(!0),""));
return a},isWholeContentSelected:function(a){var b=a.editor.getSelection().getRanges()[0];return!b||b&&b.collapsed?!1:(b=b.clone(),b.enlarge(CKEDITOR.ENLARGE_ELEMENT),!!(b&&a&&b.startContainer&&b.endContainer&&0===b.startOffset&&b.endOffset===a.getChildCount()&&b.startContainer.equals(a)&&b.endContainer.equals(a)))},hasFiller:function(a){return 0<a.find(this.fillerTagName+"["+this.fillerAttribute+"]").count()},createFiller:function(a){var b=new CKEDITOR.dom.element(this.fillerTagName);b.setHtml(this.fillerContent);
b.setAttribute(this.fillerAttribute,a?"end":"start");b.setAttribute("data-cke-temp",1);b.setStyles({display:"block",width:0,height:0,padding:0,border:0,margin:0,position:"absolute",top:0,left:"-9999px",opacity:0,overflow:"hidden"});return b},removeFiller:function(a,b){if(a){var c=b.editor,d=b.editor.getSelection().getRanges()[0].startPath(),m=c.createRange(),k,h;d.contains(a)&&(k=a.getHtml(),h=!0);d="start"==a.getAttribute(this.fillerAttribute);a.remove();k&&0<k.length&&k!=this.fillerContent?(b.insertHtmlIntoRange(k,
c.getSelection().getRanges()[0]),m.setStartAt(b.getChild(b.getChildCount()-1),CKEDITOR.POSITION_BEFORE_END),c.getSelection().selectRanges([m])):h&&(d?m.setStartAt(b.getFirst().getNext(),CKEDITOR.POSITION_AFTER_START):m.setEndAt(b.getLast().getPrevious(),CKEDITOR.POSITION_BEFORE_END),b.editor.getSelection().selectRanges([m]))}},createFillerRegex:function(a){var b=this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi,'style\x3d"[^"]*"').replace(/>[^<]*</gi,"\x3e[^\x3c]*\x3c");return new RegExp((a?
"":"^")+b+(a?"$":""))},addSelectAllIntegration:function(a){var b=this;a.editable().attachListener(a,"beforeCommandExec",function(c){var d=a.editable();"selectAll"==c.data.name&&d&&b.addFillers(d)},null,null,9999)}}}(),"use strict",function(){function a(a){this.editor=a;this.registered={};this.instances={};this.selected=[];this.widgetHoldingFocusedEditable=this.focused=null;this._={nextId:0,upcasts:[],upcastCallbacks:[],filters:{}};I(this);z(this);this.on("checkWidgets",k);this.editor.on("contentDomInvalidated",
this.checkWidgets,this);B(this);r(this);y(this);A(this);C(this)}function e(a,b,c,d,f){var g=a.editor;CKEDITOR.tools.extend(this,d,{editor:g,id:b,inline:"span"==c.getParent().getName(),element:c,data:CKEDITOR.tools.extend({},"function"==typeof d.defaults?d.defaults():d.defaults),dataReady:!1,inited:!1,ready:!1,edit:e.prototype.edit,focusedEditable:null,definition:d,repository:a,draggable:!1!==d.draggable,_:{downcastFn:d.downcast&&"string"==typeof d.downcast?d.downcasts[d.downcast]:d.downcast}},!0);
a.fire("instanceCreated",this);da(this,d);this.init&&this.init();this.inited=!0;(a=this.element.data("cke-widget-data"))&&this.setData(JSON.parse(decodeURIComponent(a)));f&&this.setData(f);this.data.classes||this.setData("classes",this.getClasses());this.dataReady=!0;P(this);this.fire("data",this.data);this.isInited()&&g.editable().contains(this.wrapper)&&(this.ready=!0,this.fire("ready"))}function b(a,b,c){CKEDITOR.dom.element.call(this,b.$);this.editor=a;this._={};b=this.filter=c.filter;CKEDITOR.dtd[this.getName()].p?
(this.enterMode=b?b.getAllowedEnterMode(a.enterMode):a.enterMode,this.shiftEnterMode=b?b.getAllowedEnterMode(a.shiftEnterMode,!0):a.shiftEnterMode):this.enterMode=this.shiftEnterMode=CKEDITOR.ENTER_BR}function c(a,b){a.addCommand(b.name,{exec:function(a,c){function d(){a.widgets.finalizeCreation(h)}var e=a.widgets.focused;if(e&&e.name==b.name)e.edit();else if(b.insert)b.insert({editor:a,commandData:c});else if(b.template){var e="function"==typeof b.defaults?b.defaults():b.defaults,e=CKEDITOR.dom.element.createFromHtml(b.template.output(e)),
f,g=a.widgets.wrapElement(e,b.name),h=new CKEDITOR.dom.documentFragment(g.getDocument());h.append(g);(f=a.widgets.initOn(e,b,c&&c.startupData))?(e=f.once("edit",function(b){if(b.data.dialog)f.once("dialog",function(b){b=b.data;var c,e;c=b.once("ok",d,null,null,20);e=b.once("cancel",function(b){b.data&&!1===b.data.hide||a.widgets.destroy(f,!0)});b.once("hide",function(){c.removeListener();e.removeListener()})});else d()},null,null,999),f.edit(),e.removeListener()):d()}},allowedContent:b.allowedContent,
requiredContent:b.requiredContent,contentForms:b.contentForms,contentTransformations:b.contentTransformations})}function d(a,b){function c(a,d){var e=b.upcast.split(","),f,g;for(g=0;g<e.length;g++)if(f=e[g],f===a.name)return b.upcasts[f].call(this,a,d);return!1}function d(b,c,e){var f=CKEDITOR.tools.getIndex(a._.upcasts,function(a){return a[2]>e});0>f&&(f=a._.upcasts.length);a._.upcasts.splice(f,0,[CKEDITOR.tools.bind(b,c),c.name,e])}var e=b.upcast,f=b.upcastPriority||10;e&&("string"==typeof e?d(c,
b,f):d(e,b,f))}function m(a,b){a.focused=null;if(b.isInited()){var c=b.editor.checkDirty();a.fire("widgetBlurred",{widget:b});b.setFocused(!1);!c&&b.editor.resetDirty()}}function k(a){a=a.data;if("wysiwyg"==this.editor.mode){var b=this.editor.editable(),c=this.instances,d,f,g,h;if(b){for(d in c)c[d].isReady()&&!b.contains(c[d].wrapper)&&this.destroy(c[d],!0);if(a&&a.initOnlyNew)c=this.initOnAll();else{var k=b.find(".cke_widget_wrapper"),c=[];d=0;for(f=k.count();d<f;d++){g=k.getItem(d);if(h=!this.getByElement(g,
!0)){a:{h=p;for(var l=g;l=l.getParent();)if(h(l)){h=!0;break a}h=!1}h=!h}h&&b.contains(g)&&(g.addClass("cke_widget_new"),c.push(this.initOn(g.getFirst(e.isDomWidgetElement))))}}a&&a.focusInited&&1==c.length&&c[0].focus()}}}function h(a){if("undefined"!=typeof a.attributes&&a.attributes["data-widget"]){var b=g(a),c=l(a),d=!1;b&&b.value&&b.value.match(/^\s/g)&&(b.parent.attributes["data-cke-white-space-first"]=1,b.value=b.value.replace(/^\s/g,"\x26nbsp;"),d=!0);c&&c.value&&c.value.match(/\s$/g)&&(c.parent.attributes["data-cke-white-space-last"]=
1,c.value=c.value.replace(/\s$/g,"\x26nbsp;"),d=!0);d&&(a.attributes["data-cke-widget-white-space"]=1)}}function g(a){return a.find(function(a){return 3===a.type},!0).shift()}function l(a){return a.find(function(a){return 3===a.type},!0).pop()}function f(a,b,c){if(!c.allowedContent&&!c.disallowedContent)return null;var d=this._.filters[a];d||(this._.filters[a]=d={});a=d[b];a||(a=c.allowedContent?new CKEDITOR.filter(c.allowedContent):this.editor.filter.clone(),d[b]=a,c.disallowedContent&&a.disallow(c.disallowedContent));
return a}function n(a){var b=[],c=a._.upcasts,d=a._.upcastCallbacks;return{toBeWrapped:b,iterator:function(a){var f,g,h,k,l;if("data-cke-widget-wrapper"in a.attributes)return(a=a.getFirst(e.isParserWidgetElement))&&b.push([a]),!1;if("data-widget"in a.attributes)return b.push([a]),!1;if(l=c.length){if(a.attributes["data-cke-widget-upcasted"])return!1;k=0;for(f=d.length;k<f;++k)if(!1===d[k](a))return;for(k=0;k<l;++k)if(f=c[k],h={},g=f[0](a,h))return g instanceof CKEDITOR.htmlParser.element&&(a=g),a.attributes["data-cke-widget-data"]=
encodeURIComponent(JSON.stringify(h)),a.attributes["data-cke-widget-upcasted"]=1,b.push([a,f[1]]),!1}}}}function u(a,b){return{tabindex:-1,contenteditable:"false","data-cke-widget-wrapper":1,"data-cke-filter":"off","class":"cke_widget_wrapper cke_widget_new cke_widget_"+(a?"inline":"block")+(b?" cke_widget_"+b:"")}}function v(a,b,c){if(a.type==CKEDITOR.NODE_ELEMENT){var d=CKEDITOR.dtd[a.name];if(d&&!d[c.name]){var d=a.split(b),e=a.parent;b=d.getIndex();a.children.length||(--b,a.remove());d.children.length||
d.remove();return v(e,b,c)}}a.add(c,b)}function x(a,b){return"boolean"==typeof a.inline?a.inline:!!CKEDITOR.dtd.$inline[b]}function p(a){return a.hasAttribute("data-cke-temp")}function t(a,b,c,d){var e=a.editor;e.fire("lockSnapshot");c?(d=c.data("cke-widget-editable"),d=b.editables[d],a.widgetHoldingFocusedEditable=b,b.focusedEditable=d,c.addClass("cke_widget_editable_focused"),d.filter&&e.setActiveFilter(d.filter),e.setActiveEnterMode(d.enterMode,d.shiftEnterMode)):(d||b.focusedEditable.removeClass("cke_widget_editable_focused"),
b.focusedEditable=null,a.widgetHoldingFocusedEditable=null,e.setActiveFilter(null),e.setActiveEnterMode(null,null));e.fire("unlockSnapshot")}function w(a){a.contextMenu&&a.contextMenu.addListener(function(b){if(b=a.widgets.getByElement(b,!0))return b.fire("contextMenu",{})})}function q(a,b){return CKEDITOR.tools.trim(b)}function A(a){var b=a.editor,c=CKEDITOR.plugins.lineutils;b.on("dragstart",function(c){var d=c.data.target;e.isDomDragHandler(d)&&(d=a.getByElement(d),c.data.dataTransfer.setData("cke/widget-id",
d.id),b.focus(),d.focus())});b.on("drop",function(c){var d=c.data.dataTransfer,e=d.getData("cke/widget-id"),f=d.getTransferType(b),d=b.createRange();""!==e&&f===CKEDITOR.DATA_TRANSFER_CROSS_EDITORS?c.cancel():""!==e&&f==CKEDITOR.DATA_TRANSFER_INTERNAL&&(e=a.instances[e])&&(d.setStartBefore(e.wrapper),d.setEndAfter(e.wrapper),c.data.dragRange=d,delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount,delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount,c.data.dataTransfer.setData("text/html",
b.editable().getHtmlFromRange(d).getHtml()),b.widgets.destroy(e,!0))});b.on("contentDom",function(){var d=b.editable();CKEDITOR.tools.extend(a,{finder:new c.finder(b,{lookups:{"default":function(b){if(!b.is(CKEDITOR.dtd.$listItem)&&b.is(CKEDITOR.dtd.$block)&&!e.isDomNestedEditable(b)&&!a._.draggedWidget.wrapper.contains(b)){var c=e.getNestedEditable(d,b);if(c){b=a._.draggedWidget;if(a.getByElement(c)==b)return;c=CKEDITOR.filter.instances[c.data("cke-filter")];b=b.requiredContent;if(c&&b&&!c.check(b))return}return CKEDITOR.LINEUTILS_BEFORE|
CKEDITOR.LINEUTILS_AFTER}}}}),locator:new c.locator(b),liner:new c.liner(b,{lineStyle:{cursor:"move !important","border-top-color":"#666"},tipLeftStyle:{"border-left-color":"#666"},tipRightStyle:{"border-right-color":"#666"}})},!0)})}function r(a){var b=a.editor;b.on("contentDom",function(){var c=b.editable(),d=c.isInline()?c:b.document,f,g;c.attachListener(d,"mousedown",function(c){var d=c.data.getTarget();f=d instanceof CKEDITOR.dom.element?a.getByElement(d):null;g=0;f&&(f.inline&&d.type==CKEDITOR.NODE_ELEMENT&&
d.hasAttribute("data-cke-widget-drag-handler")?(g=1,a.focused!=f&&b.getSelection().removeAllRanges()):e.getNestedEditable(f.wrapper,d)?f=null:(c.data.preventDefault(),CKEDITOR.env.ie||f.focus()))});c.attachListener(d,"mouseup",function(){g&&f&&f.wrapper&&(g=0,f.focus())});CKEDITOR.env.ie&&c.attachListener(d,"mouseup",function(){setTimeout(function(){f&&f.wrapper&&c.contains(f.wrapper)&&(f.focus(),f=null)})})});b.on("doubleclick",function(b){var c=a.getByElement(b.data.element);if(c&&!e.getNestedEditable(c.wrapper,
b.data.element))return c.fire("doubleclick",{element:b.data.element})},null,null,1)}function y(a){a.editor.on("key",function(b){var c=a.focused,d=a.widgetHoldingFocusedEditable,e;c?e=c.fire("key",{keyCode:b.data.keyCode}):d&&(c=b.data.keyCode,b=d.focusedEditable,c==CKEDITOR.CTRL+65?(c=b.getBogus(),d=d.editor.createRange(),d.selectNodeContents(b),c&&d.setEndAt(c,CKEDITOR.POSITION_BEFORE_START),d.select(),e=!1):8==c||46==c?(e=d.editor.getSelection().getRanges(),d=e[0],e=!(1==e.length&&d.collapsed&&
d.checkBoundaryOfElement(b,CKEDITOR[8==c?"START":"END"]))):e=void 0);return e},null,null,1)}function C(a){function b(c){a.focused&&G(a.focused,"cut"==c.name)}var c=a.editor;c.on("contentDom",function(){var a=c.editable();a.attachListener(a,"copy",b);a.attachListener(a,"cut",b)})}function B(a){var b=a.editor;b.on("selectionCheck",function(){a.fire("checkSelection")});a.on("checkSelection",a.checkSelection,a);b.on("selectionChange",function(c){var d=(c=e.getNestedEditable(b.editable(),c.data.selection.getStartElement()))&&
a.getByElement(c),f=a.widgetHoldingFocusedEditable;f?f===d&&f.focusedEditable.equals(c)||(t(a,f,null),d&&c&&t(a,d,c)):d&&c&&t(a,d,c)});b.on("dataReady",function(){E(a).commit()});b.on("blur",function(){var b;(b=a.focused)&&m(a,b);(b=a.widgetHoldingFocusedEditable)&&t(a,b,null)})}function z(a){var b=a.editor,c={};b.on("toDataFormat",function(b){var d=CKEDITOR.tools.getNextNumber(),f=[];b.data.downcastingSessionId=d;c[d]=f;b.data.dataValue.forEach(function(b){var c=b.attributes,d;if("data-cke-widget-white-space"in
c){d=g(b);var h=l(b);d.parent.attributes["data-cke-white-space-first"]&&(d.value=d.value.replace(/^&nbsp;/g," "));h.parent.attributes["data-cke-white-space-last"]&&(h.value=h.value.replace(/&nbsp;$/g," "))}if("data-cke-widget-id"in c){if(c=a.instances[c["data-cke-widget-id"]])d=b.getFirst(e.isParserWidgetElement),f.push({wrapper:b,element:d,widget:c,editables:{}}),"1"!=d.attributes["data-cke-widget-keep-attr"]&&delete d.attributes["data-widget"]}else if("data-cke-widget-editable"in c)return f[f.length-
1].editables[c["data-cke-widget-editable"]]=b,!1},CKEDITOR.NODE_ELEMENT,!0)},null,null,8);b.on("toDataFormat",function(a){if(a.data.downcastingSessionId){a=c[a.data.downcastingSessionId];for(var b,d,e,f,g,h;b=a.shift();){d=b.widget;e=b.element;f=d._.downcastFn&&d._.downcastFn.call(d,e);for(h in b.editables)g=b.editables[h],delete g.attributes.contenteditable,g.setHtml(d.editables[h].getData());f||(f=e);b.wrapper.replaceWith(f)}}},null,null,13);b.on("contentDomUnload",function(){a.destroyAll(!0)})}
function I(a){var b=a.editor,c,d;b.on("toHtml",function(b){var d=n(a),f;for(b.data.dataValue.forEach(d.iterator,CKEDITOR.NODE_ELEMENT,!0);f=d.toBeWrapped.pop();){var g=f[0],h=g.parent;h.type==CKEDITOR.NODE_ELEMENT&&h.attributes["data-cke-widget-wrapper"]&&h.replaceWith(g);a.wrapElement(f[0],f[1])}c=b.data.protectedWhitespaces?3==b.data.dataValue.children.length&&e.isParserWidgetWrapper(b.data.dataValue.children[1]):1==b.data.dataValue.children.length&&e.isParserWidgetWrapper(b.data.dataValue.children[0])},
null,null,8);b.on("dataReady",function(){if(d)for(var c=b.editable().find(".cke_widget_wrapper"),f,g,h=0,k=c.count();h<k;++h)f=c.getItem(h),g=f.getFirst(e.isDomWidgetElement),g.type==CKEDITOR.NODE_ELEMENT&&g.data("widget")?(g.replace(f),a.wrapElement(g)):f.remove();d=0;a.destroyAll(!0);a.initOnAll()});b.on("loadSnapshot",function(b){/data-cke-widget/.test(b.data)&&(d=1);a.destroyAll(!0)},null,null,9);b.on("paste",function(a){a=a.data;a.dataValue=a.dataValue.replace(U,q);a.range&&(a=e.getNestedEditable(b.editable(),
a.range.startContainer))&&(a=CKEDITOR.filter.instances[a.data("cke-filter")])&&b.setActiveFilter(a)});b.on("afterInsertHtml",function(d){d.data.intoRange?a.checkWidgets({initOnlyNew:!0}):(b.fire("lockSnapshot"),a.checkWidgets({initOnlyNew:!0,focusInited:c}),b.fire("unlockSnapshot"))})}function E(a){var b=a.selected,c=[],d=b.slice(0),e=null;return{select:function(a){0>CKEDITOR.tools.indexOf(b,a)&&c.push(a);a=CKEDITOR.tools.indexOf(d,a);0<=a&&d.splice(a,1);return this},focus:function(a){e=a;return this},
commit:function(){var f=a.focused!==e,g,h;a.editor.fire("lockSnapshot");for(f&&(g=a.focused)&&m(a,g);g=d.pop();)b.splice(CKEDITOR.tools.indexOf(b,g),1),g.isInited()&&(h=g.editor.checkDirty(),g.setSelected(!1),!h&&g.editor.resetDirty());f&&e&&(h=a.editor.checkDirty(),a.focused=e,a.fire("widgetFocused",{widget:e}),e.setFocused(!0),!h&&a.editor.resetDirty());for(;g=c.pop();)b.push(g),g.setSelected(!0);a.editor.fire("unlockSnapshot")}}}function K(a,b,c){var d=0;b=M(b);var e=a.data.classes||{},f;if(b){for(e=
CKEDITOR.tools.clone(e);f=b.pop();)c?e[f]||(d=e[f]=1):e[f]&&(delete e[f],d=1);d&&a.setData("classes",e)}}function F(a){a.cancel()}function G(a,b){var c=a.editor,d=c.document,e=CKEDITOR.env.edge&&16<=CKEDITOR.env.version;if(!d.getById("cke_copybin")){var f=!c.blockless&&!CKEDITOR.env.ie||e?"div":"span",e=d.createElement(f),g=d.createElement(f),f=CKEDITOR.env.ie&&9>CKEDITOR.env.version;g.setAttributes({id:"cke_copybin","data-cke-temp":"1"});e.setStyles({position:"absolute",width:"1px",height:"1px",
overflow:"hidden"});e.setStyle("ltr"==c.config.contentsLangDirection?"left":"right","-5000px");var h=c.createRange();h.setStartBefore(a.wrapper);h.setEndAfter(a.wrapper);e.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e'+c.editable().getHtmlFromRange(h).getHtml()+'\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e');c.fire("saveSnapshot");c.fire("lockSnapshot");g.append(e);c.editable().append(g);var k=c.on("selectionChange",F,null,null,0),l=a.repository.on("checkSelection",F,
null,null,0);if(f)var m=d.getDocumentElement().$,n=m.scrollTop;h=c.createRange();h.selectNodeContents(e);h.select();f&&(m.scrollTop=n);setTimeout(function(){b||a.focus();g.remove();k.removeListener();l.removeListener();c.fire("unlockSnapshot");b&&!c.readOnly&&(a.repository.del(a),c.fire("saveSnapshot"))},100)}}function M(a){return(a=(a=a.getDefinition().attributes)&&a["class"])?a.split(/\s+/):null}function H(){var a=CKEDITOR.document.getActive(),b=this.editor,c=b.editable();(c.isInline()?c:b.document.getWindow().getFrame()).equals(a)&&
b.focusManager.focus(c)}function D(){CKEDITOR.env.gecko&&this.editor.unlockSelection();CKEDITOR.env.webkit||(this.editor.forceNextSelectionCheck(),this.editor.selectionChange(1))}function Q(a){var b=null;a.on("data",function(){var a=this.data.classes,c;if(b!=a){for(c in b)a&&a[c]||this.removeClass(c);for(c in a)this.addClass(c);b=a}})}function T(a){a.on("data",function(){if(a.wrapper){var b=this.getLabel?this.getLabel():this.editor.lang.widget.label.replace(/%1/,this.pathName||this.element.getName());
a.wrapper.setAttribute("role","region");a.wrapper.setAttribute("aria-label",b)}},null,null,9999)}function R(a){if(a.draggable){var b=a.editor,c=a.wrapper.getLast(e.isDomDragHandlerContainer),d;c?d=c.findOne("img"):(c=new CKEDITOR.dom.element("span",b.document),c.setAttributes({"class":"cke_reset cke_widget_drag_handler_container",style:"background:rgba(220,220,220,0.5);background-image:url("+b.plugins.widget.path+"images/handle.png)"}),d=new CKEDITOR.dom.element("img",b.document),d.setAttributes({"class":"cke_reset cke_widget_drag_handler",
"data-cke-widget-drag-handler":"1",src:CKEDITOR.tools.transparentImageData,width:15,title:b.lang.widget.move,height:15,role:"presentation"}),a.inline&&d.setAttribute("draggable","true"),c.append(d),a.wrapper.append(c));a.wrapper.on("dragover",function(a){a.data.preventDefault()});a.wrapper.on("mouseenter",a.updateDragHandlerPosition,a);setTimeout(function(){a.on("data",a.updateDragHandlerPosition,a)},50);if(!a.inline&&(d.on("mousedown",L,a),CKEDITOR.env.ie&&9>CKEDITOR.env.version))d.on("dragstart",
function(a){a.data.preventDefault(!0)});a.dragHandlerContainer=c}}function L(a){function b(){var c;for(p.reset();c=h.pop();)c.removeListener();var d=k;c=a.sender;var e=this.repository.finder,f=this.repository.liner,g=this.editor,l=this.editor.editable();CKEDITOR.tools.isEmpty(f.visible)||(d=e.getRange(d[0]),this.focus(),g.fire("drop",{dropRange:d,target:d.startContainer}));l.removeClass("cke_widget_dragging");f.hideVisible();g.fire("dragend",{target:c})}if(CKEDITOR.tools.getMouseButton(a)===CKEDITOR.MOUSE_BUTTON_LEFT){var c=
this.repository.finder,d=this.repository.locator,e=this.repository.liner,f=this.editor,g=f.editable(),h=[],k=[],l,m;this.repository._.draggedWidget=this;var n=c.greedySearch(),p=CKEDITOR.tools.eventsBuffer(50,function(){l=d.locate(n);k=d.sort(m,1);k.length&&(e.prepare(n,l),e.placeLine(k[0]),e.cleanup())});g.addClass("cke_widget_dragging");h.push(g.on("mousemove",function(a){m=a.data.$.clientY;p.input()}));f.fire("dragstart",{target:a.sender});h.push(f.document.once("mouseup",b,this));g.isInline()||
h.push(CKEDITOR.document.once("mouseup",b,this))}}function W(a){var b,c,d=a.editables;a.editables={};if(a.editables)for(b in d)c=d[b],a.initEditable(b,"string"==typeof c?{selector:c}:c)}function V(a){if(a.mask){var b=a.wrapper.findOne(".cke_widget_mask");b||(b=new CKEDITOR.dom.element("img",a.editor.document),b.setAttributes({src:CKEDITOR.tools.transparentImageData,"class":"cke_reset cke_widget_mask"}),a.wrapper.append(b));a.mask=b}}function X(a){if(a.parts){var b={},c,d;for(d in a.parts)c=a.wrapper.findOne(a.parts[d]),
b[d]=c;a.parts=b}}function da(a,b){O(a);X(a);W(a);V(a);R(a);Q(a);T(a);if(CKEDITOR.env.ie&&9>CKEDITOR.env.version)a.wrapper.on("dragstart",function(b){var c=b.data.getTarget();e.getNestedEditable(a,c)||a.inline&&e.isDomDragHandler(c)||b.data.preventDefault()});a.wrapper.removeClass("cke_widget_new");a.element.addClass("cke_widget_element");a.on("key",function(b){b=b.data.keyCode;if(13==b)a.edit();else{if(b==CKEDITOR.CTRL+67||b==CKEDITOR.CTRL+88){G(a,b==CKEDITOR.CTRL+88);return}if(b in S||CKEDITOR.CTRL&
b||CKEDITOR.ALT&b)return}return!1},null,null,999);a.on("doubleclick",function(b){a.edit()&&b.cancel()});if(b.data)a.on("data",b.data);if(b.edit)a.on("edit",b.edit)}function O(a){(a.wrapper=a.element.getParent()).setAttribute("data-cke-widget-id",a.id)}function P(a){a.element.data("cke-widget-data",encodeURIComponent(JSON.stringify(a.data)))}function N(){function a(){}function b(a,c,d){return d&&this.checkElement(a)?(a=d.widgets.getByElement(a,!0))&&a.checkStyleActive(this):!1}var c={};CKEDITOR.style.addCustomHandler({type:"widget",
setup:function(a){this.widget=a.widget;if(this.group="string"==typeof a.group?[a.group]:a.group){a=this.widget;var b;c[a]||(c[a]={});for(var d=0,e=this.group.length;d<e;d++)b=this.group[d],c[a][b]||(c[a][b]=[]),c[a][b].push(this)}},apply:function(a){var b;a instanceof CKEDITOR.editor&&this.checkApplicable(a.elementPath(),a)&&(b=a.widgets.focused,this.group&&this.removeStylesFromSameGroup(a),b.applyStyle(this))},remove:function(a){a instanceof CKEDITOR.editor&&this.checkApplicable(a.elementPath(),
a)&&a.widgets.focused.removeStyle(this)},removeStylesFromSameGroup:function(a){var b,d,e=!1;if(!(a instanceof CKEDITOR.editor))return!1;d=a.elementPath();if(this.checkApplicable(d,a))for(var f=0,g=this.group.length;f<g;f++){b=c[this.widget][this.group[f]];for(var h=0;h<b.length;h++)b[h]!==this&&b[h].checkActive(d,a)&&(a.widgets.focused.removeStyle(b[h]),e=!0)}return e},checkActive:function(a,b){return this.checkElementMatch(a.lastElement,0,b)},checkApplicable:function(a,b){return b instanceof CKEDITOR.editor?
this.checkElement(a.lastElement):!1},checkElementMatch:b,checkElementRemovable:b,checkElement:function(a){return e.isDomWidgetWrapper(a)?(a=a.getFirst(e.isDomWidgetElement))&&a.data("widget")==this.widget:!1},buildPreview:function(a){return a||this._.definition.name},toAllowedContentRules:function(a){if(!a)return null;a=a.widgets.registered[this.widget];var b,c={};if(!a)return null;if(a.styleableElements){b=this.getClassesArray();if(!b)return null;c[a.styleableElements]={classes:b,propertiesOnly:!0};
return c}return a.styleToAllowedContentRules?a.styleToAllowedContentRules(this):null},getClassesArray:function(){var a=this._.definition.attributes&&this._.definition.attributes["class"];return a?CKEDITOR.tools.trim(a).split(/\s+/):null},applyToRange:a,removeFromRange:a,applyToObject:a})}CKEDITOR.plugins.add("widget",{requires:"lineutils,clipboard,widgetselection",onLoad:function(){void 0!==CKEDITOR.document.$.querySelectorAll&&(CKEDITOR.addCss(".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid #ffd25c;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid #ffd25c}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #47a4f5}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:none;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}"),
N())},beforeInit:function(b){void 0!==CKEDITOR.document.$.querySelectorAll&&(b.widgets=new a(b))},afterInit:function(a){if(void 0!==CKEDITOR.document.$.querySelectorAll){var b=a.widgets.registered,c,d,e;for(d in b)c=b[d],(e=c.button)&&a.ui.addButton&&a.ui.addButton(CKEDITOR.tools.capitalize(c.name,!0),{label:e,command:c.name,toolbar:"insert,10"});w(a)}}});a.prototype={MIN_SELECTION_CHECK_INTERVAL:500,add:function(a,b){b=CKEDITOR.tools.prototypedCopy(b);b.name=a;b._=b._||{};this.editor.fire("widgetDefinition",
b);b.template&&(b.template=new CKEDITOR.template(b.template));c(this.editor,b);d(this,b);return this.registered[a]=b},addUpcastCallback:function(a){this._.upcastCallbacks.push(a)},checkSelection:function(){var a=this.editor.getSelection(),b=a.getSelectedElement(),c=E(this),d;if(b&&(d=this.getByElement(b,!0)))return c.focus(d).select(d).commit();a=a.getRanges()[0];if(!a||a.collapsed)return c.commit();a=new CKEDITOR.dom.walker(a);for(a.evaluator=e.isDomWidgetWrapper;b=a.next();)c.select(this.getByElement(b));
c.commit()},checkWidgets:function(a){this.fire("checkWidgets",CKEDITOR.tools.copy(a||{}))},del:function(a){if(this.focused===a){var b=a.editor,c=b.createRange(),d;(d=c.moveToClosestEditablePosition(a.wrapper,!0))||(d=c.moveToClosestEditablePosition(a.wrapper,!1));d&&b.getSelection().selectRanges([c])}a.wrapper.remove();this.destroy(a,!0)},destroy:function(a,b){this.widgetHoldingFocusedEditable===a&&t(this,a,null,b);a.destroy(b);delete this.instances[a.id];this.fire("instanceDestroyed",a)},destroyAll:function(a,
b){var c,d,e=this.instances;if(b&&!a){d=b.find(".cke_widget_wrapper");for(var e=d.count(),f=0;f<e;++f)(c=this.getByElement(d.getItem(f),!0))&&this.destroy(c)}else for(d in e)c=e[d],this.destroy(c,a)},finalizeCreation:function(a){(a=a.getFirst())&&e.isDomWidgetWrapper(a)&&(this.editor.insertElement(a),a=this.getByElement(a),a.ready=!0,a.fire("ready"),a.focus())},getByElement:function(){function a(c){return c.is(b)&&c.data("cke-widget-id")}var b={div:1,span:1};return function(b,c){if(!b)return null;
var d=a(b);if(!c&&!d){var e=this.editor.editable();do b=b.getParent();while(b&&!b.equals(e)&&!(d=a(b)))}return this.instances[d]||null}}(),initOn:function(a,b,c){b?"string"==typeof b&&(b=this.registered[b]):b=this.registered[a.data("widget")];if(!b)return null;var d=this.wrapElement(a,b.name);return d?d.hasClass("cke_widget_new")?(a=new e(this,this._.nextId++,a,b,c),a.isInited()?this.instances[a.id]=a:null):this.getByElement(a):null},initOnAll:function(a){a=(a||this.editor.editable()).find(".cke_widget_new");
for(var b=[],c,d=a.count();d--;)(c=this.initOn(a.getItem(d).getFirst(e.isDomWidgetElement)))&&b.push(c);return b},onWidget:function(a){var b=Array.prototype.slice.call(arguments);b.shift();for(var c in this.instances){var d=this.instances[c];d.name==a&&d.on.apply(d,b)}this.on("instanceCreated",function(c){c=c.data;c.name==a&&c.on.apply(c,b)})},parseElementClasses:function(a){if(!a)return null;a=CKEDITOR.tools.trim(a).split(/\s+/);for(var b,c={},d=0;b=a.pop();)-1==b.indexOf("cke_")&&(c[b]=d=1);return d?
c:null},wrapElement:function(a,b){var c=null,d,e;if(a instanceof CKEDITOR.dom.element){b=b||a.data("widget");d=this.registered[b];if(!d)return null;if((c=a.getParent())&&c.type==CKEDITOR.NODE_ELEMENT&&c.data("cke-widget-wrapper"))return c;a.hasAttribute("data-cke-widget-keep-attr")||a.data("cke-widget-keep-attr",a.data("widget")?1:0);a.data("widget",b);(e=x(d,a.getName()))&&h(a);c=new CKEDITOR.dom.element(e?"span":"div");c.setAttributes(u(e,b));c.data("cke-display-name",d.pathName?d.pathName:a.getName());
a.getParent(!0)&&c.replace(a);a.appendTo(c)}else if(a instanceof CKEDITOR.htmlParser.element){b=b||a.attributes["data-widget"];d=this.registered[b];if(!d)return null;if((c=a.parent)&&c.type==CKEDITOR.NODE_ELEMENT&&c.attributes["data-cke-widget-wrapper"])return c;"data-cke-widget-keep-attr"in a.attributes||(a.attributes["data-cke-widget-keep-attr"]=a.attributes["data-widget"]?1:0);b&&(a.attributes["data-widget"]=b);(e=x(d,a.name))&&h(a);c=new CKEDITOR.htmlParser.element(e?"span":"div",u(e,b));c.attributes["data-cke-display-name"]=
d.pathName?d.pathName:a.name;d=a.parent;var f;d&&(f=a.getIndex(),a.remove());c.add(a);d&&v(d,f,c)}return c},_tests_createEditableFilter:f};CKEDITOR.event.implementOn(a.prototype);e.prototype={addClass:function(a){this.element.addClass(a);this.wrapper.addClass(e.WRAPPER_CLASS_PREFIX+a)},applyStyle:function(a){K(this,a,1)},checkStyleActive:function(a){a=M(a);var b;if(!a)return!1;for(;b=a.pop();)if(!this.hasClass(b))return!1;return!0},destroy:function(a){this.fire("destroy");if(this.editables)for(var b in this.editables)this.destroyEditable(b,
a);a||("0"==this.element.data("cke-widget-keep-attr")&&this.element.removeAttribute("data-widget"),this.element.removeAttributes(["data-cke-widget-data","data-cke-widget-keep-attr"]),this.element.removeClass("cke_widget_element"),this.element.replace(this.wrapper));this.wrapper=null},destroyEditable:function(a,b){var c=this.editables[a],d=!0;c.removeListener("focus",D);c.removeListener("blur",H);this.editor.focusManager.remove(c);if(c.filter){for(var e in this.repository.instances){var f=this.repository.instances[e];
f.editables&&(f=f.editables[a])&&f!==c&&c.filter===f.filter&&(d=!1)}d&&(c.filter.destroy(),(d=this.repository._.filters[this.name])&&delete d[a])}b||(this.repository.destroyAll(!1,c),c.removeClass("cke_widget_editable"),c.removeClass("cke_widget_editable_focused"),c.removeAttributes(["contenteditable","data-cke-widget-editable","data-cke-enter-mode"]));delete this.editables[a]},edit:function(){var a={dialog:this.dialog},b=this;if(!1===this.fire("edit",a)||!a.dialog)return!1;this.editor.openDialog(a.dialog,
function(a){var c,d;!1!==b.fire("dialog",a)&&(c=a.on("show",function(){a.setupContent(b)}),d=a.on("ok",function(){var c,d=b.on("data",function(a){c=1;a.cancel()},null,null,0);b.editor.fire("saveSnapshot");a.commitContent(b);d.removeListener();c&&(b.fire("data",b.data),b.editor.fire("saveSnapshot"))}),a.once("hide",function(){c.removeListener();d.removeListener()}))});return!0},getClasses:function(){return this.repository.parseElementClasses(this.element.getAttribute("class"))},hasClass:function(a){return this.element.hasClass(a)},
initEditable:function(a,c){var d=this._findOneNotNested(c.selector);return d&&d.is(CKEDITOR.dtd.$editable)?(d=new b(this.editor,d,{filter:f.call(this.repository,this.name,a,c)}),this.editables[a]=d,d.setAttributes({contenteditable:"true","data-cke-widget-editable":a,"data-cke-enter-mode":d.enterMode}),d.filter&&d.data("cke-filter",d.filter.id),d.addClass("cke_widget_editable"),d.removeClass("cke_widget_editable_focused"),c.pathName&&d.data("cke-display-name",c.pathName),this.editor.focusManager.add(d),
d.on("focus",D,this),CKEDITOR.env.ie&&d.on("blur",H,this),d._.initialSetData=!0,d.setData(d.getHtml()),!0):!1},_findOneNotNested:function(a){a=this.wrapper.find(a);for(var b,c,d=0;d<a.count();d++)if(b=a.getItem(d),c=b.getAscendant(e.isDomWidgetWrapper),this.wrapper.equals(c))return b;return null},isInited:function(){return!(!this.wrapper||!this.inited)},isReady:function(){return this.isInited()&&this.ready},focus:function(){var a=this.editor.getSelection();if(a){var b=this.editor.checkDirty();a.fake(this.wrapper);
!b&&this.editor.resetDirty()}this.editor.focus()},removeClass:function(a){this.element.removeClass(a);this.wrapper.removeClass(e.WRAPPER_CLASS_PREFIX+a)},removeStyle:function(a){K(this,a,0)},setData:function(a,b){var c=this.data,d=0;if("string"==typeof a)c[a]!==b&&(c[a]=b,d=1);else{var e=a;for(a in e)c[a]!==e[a]&&(d=1,c[a]=e[a])}d&&this.dataReady&&(P(this),this.fire("data",c));return this},setFocused:function(a){this.wrapper[a?"addClass":"removeClass"]("cke_widget_focused");this.fire(a?"focus":"blur");
return this},setSelected:function(a){this.wrapper[a?"addClass":"removeClass"]("cke_widget_selected");this.fire(a?"select":"deselect");return this},updateDragHandlerPosition:function(){var a=this.editor,b=this.element.$,c=this._.dragHandlerOffset,b={x:b.offsetLeft,y:b.offsetTop-15};c&&b.x==c.x&&b.y==c.y||(c=a.checkDirty(),a.fire("lockSnapshot"),this.dragHandlerContainer.setStyles({top:b.y+"px",left:b.x+"px",display:"block"}),a.fire("unlockSnapshot"),!c&&a.resetDirty(),this._.dragHandlerOffset=b)}};
CKEDITOR.event.implementOn(e.prototype);e.getNestedEditable=function(a,b){return!b||b.equals(a)?null:e.isDomNestedEditable(b)?b:e.getNestedEditable(a,b.getParent())};e.isDomDragHandler=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-drag-handler")};e.isDomDragHandlerContainer=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_widget_drag_handler_container")};e.isDomNestedEditable=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-editable")};
e.isDomWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-widget")};e.isDomWidgetWrapper=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-wrapper")};e.isDomWidget=function(a){return a?this.isDomWidgetWrapper(a)||this.isDomWidgetElement(a):!1};e.isParserWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&!!a.attributes["data-widget"]};e.isParserWidgetWrapper=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&!!a.attributes["data-cke-widget-wrapper"]};
e.WRAPPER_CLASS_PREFIX="cke_widget_wrapper_";b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype),{setData:function(a){this._.initialSetData||this.editor.widgets.destroyAll(!1,this);this._.initialSetData=!1;a=this.editor.dataProcessor.toHtml(a,{context:this.getName(),filter:this.filter,enterMode:this.enterMode});this.setHtml(a);this.editor.widgets.initOnAll(this)},getData:function(){return this.editor.dataProcessor.toDataFormat(this.getHtml(),{context:this.getName(),
filter:this.filter,enterMode:this.enterMode})}});var U=/^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,S={37:1,38:1,39:1,40:1,8:1,46:1};CKEDITOR.plugins.widget=e;e.repository=a;e.nestedEditable=b}(),function(){function a(a,c,d){this.editor=a;this.notification=null;
this._message=new CKEDITOR.template(c);this._singularMessage=d?new CKEDITOR.template(d):null;this._tasks=[];this._doneTasks=this._doneWeights=this._totalWeights=0}function e(a){this._weight=a||1;this._doneWeight=0;this._isCanceled=!1}CKEDITOR.plugins.add("notificationaggregator",{requires:"notification"});a.prototype={createTask:function(a){a=a||{};var c=!this.notification,d;c&&(this.notification=this._createNotification());d=this._addTask(a);d.on("updated",this._onTaskUpdate,this);d.on("done",this._onTaskDone,
this);d.on("canceled",function(){this._removeTask(d)},this);this.update();c&&this.notification.show();return d},update:function(){this._updateNotification();this.isFinished()&&this.fire("finished")},getPercentage:function(){return 0===this.getTaskCount()?1:this._doneWeights/this._totalWeights},isFinished:function(){return this.getDoneTaskCount()===this.getTaskCount()},getTaskCount:function(){return this._tasks.length},getDoneTaskCount:function(){return this._doneTasks},_updateNotification:function(){this.notification.update({message:this._getNotificationMessage(),
progress:this.getPercentage()})},_getNotificationMessage:function(){var a=this.getTaskCount(),c={current:this.getDoneTaskCount(),max:a,percentage:Math.round(100*this.getPercentage())};return(1==a&&this._singularMessage?this._singularMessage:this._message).output(c)},_createNotification:function(){return new CKEDITOR.plugins.notification(this.editor,{type:"progress"})},_addTask:function(a){a=new e(a.weight);this._tasks.push(a);this._totalWeights+=a._weight;return a},_removeTask:function(a){var c=CKEDITOR.tools.indexOf(this._tasks,
a);-1!==c&&(a._doneWeight&&(this._doneWeights-=a._doneWeight),this._totalWeights-=a._weight,this._tasks.splice(c,1),this.update())},_onTaskUpdate:function(a){this._doneWeights+=a.data;this.update()},_onTaskDone:function(){this._doneTasks+=1;this.update()}};CKEDITOR.event.implementOn(a.prototype);e.prototype={done:function(){this.update(this._weight)},update:function(a){if(!this.isDone()&&!this.isCanceled()){a=Math.min(this._weight,a);var c=a-this._doneWeight;this._doneWeight=a;this.fire("updated",
c);this.isDone()&&this.fire("done")}},cancel:function(){this.isDone()||this.isCanceled()||(this._isCanceled=!0,this.fire("canceled"))},isDone:function(){return this._weight===this._doneWeight},isCanceled:function(){return this._isCanceled}};CKEDITOR.event.implementOn(e.prototype);CKEDITOR.plugins.notificationAggregator=a;CKEDITOR.plugins.notificationAggregator.task=e}(),"use strict",function(){CKEDITOR.plugins.add("uploadwidget",{requires:"widget,clipboard,filetools,notificationaggregator",init:function(a){a.filter.allow("*[!data-widget,!data-cke-upload-id]")}});
CKEDITOR.fileTools||(CKEDITOR.fileTools={});CKEDITOR.tools.extend(CKEDITOR.fileTools,{addUploadWidget:function(a,e,b){var c=CKEDITOR.fileTools,d=a.uploadRepository,m=b.supportedTypes?10:20;if(b.fileToElement)a.on("paste",function(b){b=b.data;var h=a.widgets.registered[e],g=b.dataTransfer,l=g.getFilesCount(),f=h.loadMethod||"loadAndUpload",m,u;if(!b.dataValue&&l)for(u=0;u<l;u++)if(m=g.getFile(u),!h.supportedTypes||c.isTypeSupported(m,h.supportedTypes)){var v=h.fileToElement(m);m=d.create(m,void 0,
h.loaderType);v&&(m[f](h.uploadUrl,h.additionalRequestParameters),CKEDITOR.fileTools.markElement(v,e,m.id),"loadAndUpload"!=f&&"upload"!=f||h.skipNotifications||CKEDITOR.fileTools.bindNotifications(a,m),b.dataValue+=v.getOuterHtml())}},null,null,m);CKEDITOR.tools.extend(b,{downcast:function(){return new CKEDITOR.htmlParser.text("")},init:function(){var b=this,c=this.wrapper.findOne("[data-cke-upload-id]").data("cke-upload-id"),e=d.loaders[c],l=CKEDITOR.tools.capitalize,f,m;e.on("update",function(d){if("abort"===
e.status&&"function"===typeof b.onAbort)b.onAbort(e);if(b.wrapper&&b.wrapper.getParent()){a.fire("lockSnapshot");d="on"+l(e.status);if("abort"===e.status||"function"!==typeof b[d]||!1!==b[d](e))m="cke_upload_"+e.status,b.wrapper&&m!=f&&(f&&b.wrapper.removeClass(f),b.wrapper.addClass(m),f=m),"error"!=e.status&&"abort"!=e.status||a.widgets.del(b);a.fire("unlockSnapshot")}else CKEDITOR.instances[a.name]&&a.editable().find('[data-cke-upload-id\x3d"'+c+'"]').count()||e.abort(),d.removeListener()});e.update()},
replaceWith:function(b,c){if(""===b.trim())a.widgets.del(this);else{var d=this==a.widgets.focused,e=a.editable(),f=a.createRange(),m,u;d||(u=a.getSelection().createBookmarks());f.setStartBefore(this.wrapper);f.setEndAfter(this.wrapper);d&&(m=f.createBookmark());e.insertHtmlIntoRange(b,f,c);a.widgets.checkWidgets({initOnlyNew:!0});a.widgets.destroy(this,!0);d?(f.moveToBookmark(m),f.select()):a.getSelection().selectBookmarks(u)}},_getLoader:function(){var a=this.wrapper.findOne("[data-cke-upload-id]");
return a?this.editor.uploadRepository.loaders[a.data("cke-upload-id")]:null}});a.widgets.add(e,b)},markElement:function(a,e,b){a.setAttributes({"data-cke-upload-id":b,"data-widget":e})},bindNotifications:function(a,e){function b(){c=a._.uploadWidgetNotificaionAggregator;if(!c||c.isFinished())c=a._.uploadWidgetNotificaionAggregator=new CKEDITOR.plugins.notificationAggregator(a,a.lang.uploadwidget.uploadMany,a.lang.uploadwidget.uploadOne),c.once("finished",function(){var b=c.getTaskCount();0===b?c.notification.hide():
c.notification.update({message:1==b?a.lang.uploadwidget.doneOne:a.lang.uploadwidget.doneMany.replace("%1",b),type:"success",important:1})})}var c,d=null;e.on("update",function(){!d&&e.uploadTotal&&(b(),d=c.createTask({weight:e.uploadTotal}));d&&"uploading"==e.status&&d.update(e.uploaded)});e.on("uploaded",function(){d&&d.done()});e.on("error",function(){d&&d.cancel();a.showNotification(e.message,"warning")});e.on("abort",function(){d&&d.cancel();CKEDITOR.instances[a.name]&&a.showNotification(a.lang.uploadwidget.abort,
"info")})}})}(),"use strict",function(){function a(a){9>=a&&(a="0"+a);return String(a)}function e(c){var d=new Date,d=[d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()];b+=1;return"image-"+CKEDITOR.tools.array.map(d,a).join("")+"-"+b+"."+c}var b=0;CKEDITOR.plugins.add("uploadimage",{requires:"uploadwidget",onLoad:function(){CKEDITOR.addCss(".cke_upload_uploading img{opacity: 0.3}")},init:function(a){if(CKEDITOR.plugins.clipboard.isFileApiSupported){var b=CKEDITOR.fileTools,
m=b.getUploadUrl(a.config,"image");m&&(b.addUploadWidget(a,"uploadimage",{supportedTypes:/image\/(jpeg|png|gif|bmp)/,uploadUrl:m,fileToElement:function(){var a=new CKEDITOR.dom.element("img");a.setAttribute("src","data:image/gif;base64,R0lGODlhDgAOAIAAAAAAAP///yH5BAAAAAAALAAAAAAOAA4AAAIMhI+py+0Po5y02qsKADs\x3d");return a},parts:{img:"img"},onUploading:function(a){this.parts.img.setAttribute("src",a.data)},onUploaded:function(a){var b=this.parts.img.$;this.replaceWith('\x3cimg src\x3d"'+a.url+'" width\x3d"'+
(a.responseData.width||b.naturalWidth)+'" height\x3d"'+(a.responseData.height||b.naturalHeight)+'"\x3e')}}),a.on("paste",function(k){if(k.data.dataValue.match(/<img[\s\S]+data:/i)){k=k.data;var h=document.implementation.createHTMLDocument(""),h=new CKEDITOR.dom.element(h.body),g,l,f;h.data("cke-editable",1);h.appendHtml(k.dataValue);g=h.find("img");for(f=0;f<g.count();f++){l=g.getItem(f);var n=l.getAttribute("src"),u=n&&"data:"==n.substring(0,5),v=null===l.data("cke-realelement");u&&v&&!l.data("cke-upload-id")&&
!l.isReadOnly(1)&&(u=(u=n.match(/image\/([a-z]+?);/i))&&u[1]||"jpg",n=a.uploadRepository.create(n,e(u)),n.upload(m),b.markElement(l,"uploadimage",n.id),b.bindNotifications(a,n))}k.dataValue=h.getHtml()}}))}}})}(),CKEDITOR.plugins.add("wsc",{requires:"dialog",parseApi:function(a){a.config.wsc_onFinish="function"===typeof a.config.wsc_onFinish?a.config.wsc_onFinish:function(){};a.config.wsc_onClose="function"===typeof a.config.wsc_onClose?a.config.wsc_onClose:function(){}},parseConfig:function(a){a.config.wsc_customerId=
a.config.wsc_customerId||CKEDITOR.config.wsc_customerId||"1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk";a.config.wsc_customDictionaryIds=a.config.wsc_customDictionaryIds||CKEDITOR.config.wsc_customDictionaryIds||"";a.config.wsc_userDictionaryName=a.config.wsc_userDictionaryName||CKEDITOR.config.wsc_userDictionaryName||"";a.config.wsc_customLoaderScript=a.config.wsc_customLoaderScript||CKEDITOR.config.wsc_customLoaderScript;a.config.wsc_interfaceLang=a.config.wsc_interfaceLang;
CKEDITOR.config.wsc_cmd=a.config.wsc_cmd||CKEDITOR.config.wsc_cmd||"spell";CKEDITOR.config.wsc_version="v4.3.0-master-d769233";CKEDITOR.config.wsc_removeGlobalVariable=!0},onLoad:function(a){"moono-lisa"==(CKEDITOR.skinName||a.config.skin)&&CKEDITOR.document.appendStyleSheet(this.path+"skins/"+CKEDITOR.skin.name+"/wsc.css")},init:function(a){var e=CKEDITOR.env;this.parseConfig(a);this.parseApi(a);a.addCommand("checkspell",new CKEDITOR.dialogCommand("checkspell")).modes={wysiwyg:!CKEDITOR.env.opera&&
!CKEDITOR.env.air&&document.domain==window.location.hostname&&!(e.ie&&(8>e.version||e.quirks))};"undefined"==typeof a.plugins.scayt&&a.ui.addButton&&a.ui.addButton("SpellChecker",{label:a.lang.wsc.toolbar,click:function(a){var c=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();(c=c.replace(/\s/g,""))?a.execCommand("checkspell"):alert("Nothing to check!")},toolbar:"spellchecker,10"});CKEDITOR.dialog.add("checkspell",this.path+(CKEDITOR.env.ie&&7>=CKEDITOR.env.version?
"dialogs/wsc_ie.js":window.postMessage?"dialogs/wsc.js":"dialogs/wsc_ie.js"))}}),function(){function a(a){function b(a){var c=!1;f.attachListener(f,"keydown",function(){var b=h.getBody().getElementsByTag(a);if(!c){for(var d=0;d<b.count();d++)b.getItem(d).setCustomData("retain",!0);c=!0}},null,null,1);f.attachListener(f,"keyup",function(){var b=h.getElementsByTag(a);c&&(1==b.count()&&!b.getItem(0).getCustomData("retain")&&CKEDITOR.tools.isEmpty(b.getItem(0).getAttributes())&&b.getItem(0).remove(1),
c=!1)})}var c=this.editor,h=a.document,g=h.body,l=h.getElementById("cke_actscrpt");l&&l.parentNode.removeChild(l);(l=h.getElementById("cke_shimscrpt"))&&l.parentNode.removeChild(l);(l=h.getElementById("cke_basetagscrpt"))&&l.parentNode.removeChild(l);g.contentEditable=!0;CKEDITOR.env.ie&&(g.hideFocus=!0,g.disabled=!0,g.removeAttribute("disabled"));delete this._.isLoadingData;this.$=g;h=new CKEDITOR.dom.document(h);this.setup();this.fixInitialSelection();var f=this;CKEDITOR.env.ie&&!CKEDITOR.env.edge&&
h.getDocumentElement().addClass(h.$.compatMode);CKEDITOR.env.ie&&!CKEDITOR.env.edge&&c.enterMode!=CKEDITOR.ENTER_P?b("p"):CKEDITOR.env.edge&&15>CKEDITOR.env.version&&c.enterMode!=CKEDITOR.ENTER_DIV&&b("div");if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)h.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&&setTimeout(function(){c.editable().focus()})});e(c);try{c.document.$.execCommand("2D-position",!1,!0)}catch(n){}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&
"CSS1Compat"==c.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var b=a.data.getKeystroke();if(33==b||34==b)if(CKEDITOR.env.ie)setTimeout(function(){c.getSelection().scrollIntoView()},0);else if(c.window.$.innerHeight>this.$.offsetHeight){var d=c.createRange();d[33==b?"moveToElementEditStart":"moveToElementEditEnd"](this);d.select();a.data.preventDefault()}});CKEDITOR.env.ie&&this.attachListener(h,"blur",function(){try{h.$.selection.empty()}catch(a){}});CKEDITOR.env.iOS&&this.attachListener(h,
"touchend",function(){a.focus()});g=c.document.getElementsByTag("title").getItem(0);g.data("cke-title",g.getText());CKEDITOR.env.ie&&(c.document.$.title=this._.docTitle);CKEDITOR.tools.setTimeout(function(){"unloaded"==this.status&&(this.status="ready");c.fire("contentDom");this._.isPendingFocus&&(c.focus(),this._.isPendingFocus=!1);setTimeout(function(){c.fire("dataReady")},0)},0,this)}function e(a){function b(){var e;a.editable().attachListener(a,"selectionChange",function(){var b=a.getSelection().getSelectedElement();
b&&(e&&(e.detachEvent("onresizestart",c),e=null),b.$.attachEvent("onresizestart",c),e=b.$)})}function c(a){a.returnValue=!1}if(CKEDITOR.env.gecko)try{var e=a.document.$;e.execCommand("enableObjectResizing",!1,!a.config.disableObjectResizing);e.execCommand("enableInlineTableEditing",!1,!a.config.disableNativeTableHandles)}catch(g){}else CKEDITOR.env.ie&&11>CKEDITOR.env.version&&a.config.disableObjectResizing&&b(a)}function b(){var a=[];if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}");
var b=[],c;for(c in CKEDITOR.dtd.$removeEmpty)b.push("html.CSS1Compat "+c+"[contenteditable\x3dfalse]");a.push(b.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&&(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n")}var c;CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title; style [media,type]; body (*)[id]; meta link [*]",
requiredContent:"body"});a.addMode("wysiwyg",function(b){function e(f){f&&f.removeListener();a.editable(new c(a,g.$.contentWindow.document.body));a.setData(a.getData(1),b)}var h="document.open();"+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"")+"document.close();",h=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie&&!CKEDITOR.env.edge?"javascript:void(function(){"+encodeURIComponent(h)+"}())":"",g=CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"'+h+'" frameBorder\x3d"0"\x3e\x3c/iframe\x3e');
g.setStyles({width:"100%",height:"100%"});g.addClass("cke_wysiwyg_frame").addClass("cke_reset");h=a.ui.space("contents");h.append(g);var l=CKEDITOR.env.ie&&!CKEDITOR.env.edge||CKEDITOR.env.gecko;if(l)g.on("load",e);var f=a.title,n=a.fire("ariaEditorHelpLabel",{}).label;f&&(CKEDITOR.env.ie&&n&&(f+=", "+n),g.setAttribute("title",f));if(n){var f=CKEDITOR.tools.getNextId(),u=CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"'+f+'" class\x3d"cke_voice_label"\x3e'+n+"\x3c/span\x3e");h.append(u,1);g.setAttribute("aria-describedby",
f)}a.on("beforeModeUnload",function(a){a.removeListener();u&&u.remove()});g.setAttributes({tabIndex:a.tabIndex,allowTransparency:"true"});!l&&e();a.fire("ariaWidget",g)})}});CKEDITOR.editor.prototype.addContentsCss=function(a){var b=this.config,c=b.contentsCss;CKEDITOR.tools.isArray(c)||(b.contentsCss=c?[c]:[]);b.contentsCss.push(a)};c=CKEDITOR.tools.createClass({$:function(){this.base.apply(this,arguments);this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(b){CKEDITOR.tools.setTimeout(a,
0,this,b)},this);this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,c){var e=this.editor;if(c)this.setHtml(a),this.fixInitialSelection(),e.fire("dataReady");else{this._.isLoadingData=!0;e._.dataStore={id:1};var h=e.config,g=h.fullPage,l=h.docType,f=CKEDITOR.tools.buildStyleHtml(b()).replace(/<style>/,'\x3cstyle data-cke-temp\x3d"1"\x3e');g||(f+=CKEDITOR.tools.buildStyleHtml(e.config.contentsCss));var n=h.baseHref?'\x3cbase href\x3d"'+
h.baseHref+'" data-cke-temp\x3d"1" /\x3e':"";g&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){e.docType=l=a;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){e.xmlDeclaration=a;return""}));a=e.dataProcessor.toHtml(a);g?(/<body[\s|>]/.test(a)||(a="\x3cbody\x3e"+a),/<html[\s|>]/.test(a)||(a="\x3chtml\x3e"+a+"\x3c/html\x3e"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$\x26\x3ctitle\x3e\x3c/title\x3e")):a=a.replace(/<html[^>]*>/,"$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"),
n&&(a=a.replace(/<head[^>]*?>/,"$\x26"+n)),a=a.replace(/<\/head\s*>/,f+"$\x26"),a=l+a):a=h.docType+'\x3chtml dir\x3d"'+h.contentsLangDirection+'" lang\x3d"'+(h.contentsLanguage||e.langCode)+'"\x3e\x3chead\x3e\x3ctitle\x3e'+this._.docTitle+"\x3c/title\x3e"+n+f+"\x3c/head\x3e\x3cbody"+(h.bodyId?' id\x3d"'+h.bodyId+'"':"")+(h.bodyClass?' class\x3d"'+h.bodyClass+'"':"")+"\x3e"+a+"\x3c/body\x3e\x3c/html\x3e";CKEDITOR.env.gecko&&(a=a.replace(/<body/,'\x3cbody contenteditable\x3d"true" '),2E4>CKEDITOR.env.version&&
(a=a.replace(/<body[^>]*>/,"$\x26\x3c!-- cke-content-start --\x3e")));h='\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"'+(CKEDITOR.env.ie?' defer\x3d"defer" ':"")+"\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+this._.frameLoadedHandler+",window);wasLoaded\x3d1;}"+(CKEDITOR.env.ie?"onload();":'document.addEventListener("DOMContentLoaded", onload, false );')+"\x3c/script\x3e";CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(h+='\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e');
n&&CKEDITOR.env.ie&&10>CKEDITOR.env.version&&(h+='\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e');a=a.replace(/(?=\s*<\/(:?head)>)/,h);this.clearCustomData();this.clearListeners();e.fire("contentDomUnload");var u=this.getDocument();try{u.write(a)}catch(v){setTimeout(function(){u.write(a)},0)}}},getData:function(a){if(a)return this.getHtml();a=this.editor;var b=a.config,c=b.fullPage,e=c&&a.docType,g=c&&a.xmlDeclaration,
l=this.getDocument(),c=c?l.getDocumentElement().getOuterHtml():l.getBody().getHtml();CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/<br>(?=\s*(:?$|<\/body>))/,""));c=a.dataProcessor.toDataFormat(c);g&&(c=g+"\n"+c);e&&(c=e+"\n"+c);return c},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:c.baseProto.focus.call(this)},detach:function(){var a=this.editor,b=a.document,e;try{e=a.window.getFrame()}catch(h){}c.baseProto.detach.call(this);this.clearCustomData();b.getDocumentElement().clearCustomData();
CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);e&&e.getParent()?(e.clearCustomData(),(a=e.removeCustomData("onResize"))&&a.removeListener(),e.remove()):CKEDITOR.warn("editor-destroy-iframe")}}})}(),CKEDITOR.config.disableObjectResizing=!1,CKEDITOR.config.disableNativeTableHandles=!0,CKEDITOR.config.disableNativeSpellChecker=!0,CKEDITOR.config.plugins="dialogui,dialog,a11yhelp,about,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,elementspath,indent,indentlist,list,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,image,fakeobjects,link,magicline,maximize,pastefromword,pastetext,removeformat,resize,menubutton,scayt,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc,wysiwygarea",
CKEDITOR.config.skin="moono-lisa",function(){var a=function(a,b){var c=CKEDITOR.getUrl("plugins/"+b);a=a.split(",");for(var d=0;d<a.length;d++)CKEDITOR.skin.icons[a[d]]={path:c,offset:-a[++d],bgsize:a[++d]}};CKEDITOR.env.hidpi?a("about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,codesnippet,384,,bgcolor,408,,textcolor,432,,copyformatting,456,,creatediv,480,,docprops-rtl,504,,docprops,528,,easyimagealigncenter,552,,easyimagealignleft,576,,easyimagealignright,600,,easyimagealt,624,,easyimagefull,648,,easyimageside,672,,easyimageupload,696,,embed,720,,embedsemantic,744,,emojipanel,768,,find-rtl,792,,find,816,,replace,840,,flash,864,,button,888,,checkbox,912,,form,936,,hiddenfield,960,,imagebutton,984,,radio,1008,,select-rtl,1032,,select,1056,,textarea-rtl,1080,,textarea,1104,,textfield-rtl,1128,,textfield,1152,,horizontalrule,1176,,iframe,1200,,image,1224,,indent-rtl,1248,,indent,1272,,outdent-rtl,1296,,outdent,1320,,justifyblock,1344,,justifycenter,1368,,justifyleft,1392,,justifyright,1416,,language,1440,,anchor-rtl,1464,,anchor,1488,,link,1512,,unlink,1536,,bulletedlist-rtl,1560,,bulletedlist,1584,,numberedlist-rtl,1608,,numberedlist,1632,,mathjax,1656,,maximize,1680,,newpage-rtl,1704,,newpage,1728,,pagebreak-rtl,1752,,pagebreak,1776,,pastefromword-rtl,1800,,pastefromword,1824,,pastetext-rtl,1848,,pastetext,1872,,placeholder,1896,,preview-rtl,1920,,preview,1944,,print,1968,,removeformat,1992,,save,2016,,scayt,2040,,selectall,2064,,showblocks-rtl,2088,,showblocks,2112,,smiley,2136,,source-rtl,2160,,source,2184,,sourcedialog-rtl,2208,,sourcedialog,2232,,specialchar,2256,,table,2280,,templates-rtl,2304,,templates,2328,,uicolor,2352,,redo-rtl,2376,,redo,2400,,undo-rtl,2424,,undo,2448,,simplebox,4944,auto,spellchecker,2496,",
"icons_hidpi.png"):a("about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,codesnippet,384,auto,bgcolor,408,auto,textcolor,432,auto,copyformatting,456,auto,creatediv,480,auto,docprops-rtl,504,auto,docprops,528,auto,easyimagealigncenter,552,auto,easyimagealignleft,576,auto,easyimagealignright,600,auto,easyimagealt,624,auto,easyimagefull,648,auto,easyimageside,672,auto,easyimageupload,696,auto,embed,720,auto,embedsemantic,744,auto,emojipanel,768,auto,find-rtl,792,auto,find,816,auto,replace,840,auto,flash,864,auto,button,888,auto,checkbox,912,auto,form,936,auto,hiddenfield,960,auto,imagebutton,984,auto,radio,1008,auto,select-rtl,1032,auto,select,1056,auto,textarea-rtl,1080,auto,textarea,1104,auto,textfield-rtl,1128,auto,textfield,1152,auto,horizontalrule,1176,auto,iframe,1200,auto,image,1224,auto,indent-rtl,1248,auto,indent,1272,auto,outdent-rtl,1296,auto,outdent,1320,auto,justifyblock,1344,auto,justifycenter,1368,auto,justifyleft,1392,auto,justifyright,1416,auto,language,1440,auto,anchor-rtl,1464,auto,anchor,1488,auto,link,1512,auto,unlink,1536,auto,bulletedlist-rtl,1560,auto,bulletedlist,1584,auto,numberedlist-rtl,1608,auto,numberedlist,1632,auto,mathjax,1656,auto,maximize,1680,auto,newpage-rtl,1704,auto,newpage,1728,auto,pagebreak-rtl,1752,auto,pagebreak,1776,auto,pastefromword-rtl,1800,auto,pastefromword,1824,auto,pastetext-rtl,1848,auto,pastetext,1872,auto,placeholder,1896,auto,preview-rtl,1920,auto,preview,1944,auto,print,1968,auto,removeformat,1992,auto,save,2016,auto,scayt,2040,auto,selectall,2064,auto,showblocks-rtl,2088,auto,showblocks,2112,auto,smiley,2136,auto,source-rtl,2160,auto,source,2184,auto,sourcedialog-rtl,2208,auto,sourcedialog,2232,auto,specialchar,2256,auto,table,2280,auto,templates-rtl,2304,auto,templates,2328,auto,uicolor,2352,auto,redo-rtl,2376,auto,redo,2400,auto,undo-rtl,2424,auto,undo,2448,auto,simplebox,2472,auto,spellchecker,2496,auto",
"icons.png")}())})();

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nthead > tr > th.sorting_asc[data-v-1f022106],\r\nthead > tr > th.sorting_desc[data-v-1f022106],\r\nthead > tr > th.sorting[data-v-1f022106],\r\nthead > tr > td.sorting_asc[data-v-1f022106],\r\nthead > tr > td.sorting_desc[data-v-1f022106],\r\nthead > tr > td.sorting[data-v-1f022106] {\r\n\tpadding-right: 30px;\r\n\tcolor: var(--primary);\n}\nthead > tr > th[data-v-1f022106]:active,\r\nthead > tr > td[data-v-1f022106]:active {\r\n\toutline: none;\n}\nthead .sorting[data-v-1f022106],\r\nthead .sorting_asc[data-v-1f022106],\r\nthead .sorting_desc[data-v-1f022106],\r\nthead .sorting_asc_disabled[data-v-1f022106],\r\nthead .sorting_desc_disabled[data-v-1f022106] {\r\n\tcursor: pointer;\r\n\tposition: relative;\n}\nthead .sorting[data-v-1f022106]:before,\r\nthead .sorting[data-v-1f022106]:after,\r\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_asc[data-v-1f022106]:after,\r\nthead .sorting_desc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:after,\r\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_asc_disabled[data-v-1f022106]:after,\r\nthead .sorting_desc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\tposition: absolute;\r\n\tbottom: 0.9em;\r\n\tdisplay: block;\r\n\topacity: 0.3;\n}\nthead .sorting[data-v-1f022106]:before,\r\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:before,\r\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:before {\r\n\tright: 1em;\r\n\tcontent: \"\\2191\";\n}\nthead .sorting[data-v-1f022106]:after,\r\nthead .sorting_asc[data-v-1f022106]:after,\r\nthead .sorting_desc[data-v-1f022106]:after,\r\nthead .sorting_asc_disabled[data-v-1f022106]:after,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\tright: 0.5em;\r\n\tcontent: \"\\2193\";\n}\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:after {\r\n\topacity: 1;\n}\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\topacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sortablejs/Sortable.js":
/*!*********************************************!*\
  !*** ./node_modules/sortablejs/Sortable.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		awaitingDragStarted = false,
		ignoreNextClick = false,
		sortables = [],

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,


		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,
		lastMode, // 'swap' or 'insert'

		targetMoveDistance,


		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
		Edge = !!navigator.userAgent.match(/Edge/i),
		// FireFox = !!navigator.userAgent.match(/firefox/i),

		CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

		// This will not pass for IE9, because IE9 DnD only works on anchors
		supportDraggable = ('draggable' in document.createElement('div')),

		supportCssPointerEvents = (function() {
			// false when <= IE11
			if (IE11OrLess) {
				return false;
			}
			var el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;
			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}
			if (child1 && firstChildCSS.float !== 'none') {
				var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

				return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ?
					'vertical' : 'horizontal';
			}
			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'flex' ||
					firstChildCSS.display === 'table' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS[CSSFloatProperty] === 'none' ||
					child2 &&
					elCSS[CSSFloatProperty] === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		/**
		 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
		 * @param  {Number} x      X position
		 * @param  {Number} y      Y position
		 * @return {HTMLElement}   Element of the first found nearest Sortable
		 */
		_detectNearestEmptySortable = function(x, y) {
			for (var i = 0; i < sortables.length; i++) {
				if (sortables[i].children.length) continue;

				var rect = _getRect(sortables[i]),
					threshold = sortables[i][expando].options.emptyInsertThreshold,
					insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
					insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

				if (insideHorizontally && insideVertically) {
					return sortables[i];
				}
			}
		},

		_isClientInRowColumn = function(x, y, el, axis, options) {
			var targetRect = _getRect(el),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_isElInRowColumn = function(el1, el2, axis) {
			var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
				el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
				el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
				el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
				el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
				el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
				el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
				el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

			return (
				el1S1Opp === el2S1Opp ||
				el1S2Opp === el2S2Opp ||
				(el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
			);
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return win;

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return win;

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return win;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					scrollThisInstance = false;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var	el = currentParent,
						rect = _getRect(el),

						top = rect.top,
						bottom = rect.bottom,
						left = rect.left,
						right = rect.right,

						width = rect.width,
						height = rect.height,

						scrollWidth,
						scrollHeight,

						css,

						vx,
						vy,

						canScrollX,
						canScrollY,

						scrollPosX,
						scrollPosY;


					if (el !== win) {
						scrollWidth = el.scrollWidth;
						scrollHeight = el.scrollHeight;

						css = _css(el);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');

						scrollPosX = el.scrollLeft;
						scrollPosY = el.scrollTop;
					} else {
						scrollWidth = document.documentElement.scrollWidth;
						scrollHeight = document.documentElement.scrollHeight;

						css = _css(document.documentElement);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');

						scrollPosX = document.documentElement.scrollLeft;
						scrollPosY = document.documentElement.scrollTop;
					}

					vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

					vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}
								if (autoScrolls[this.layer].el === win) {
									win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
								} else {
									autoScrolls[this.layer].el.scrollTop += scrollOffsetY;
									autoScrolls[this.layer].el.scrollLeft += scrollOffsetX;
								}
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== win && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var sameGroup = to.options.group.name &&
									from.options.group.name &&
									to.options.group.name === from.options.group.name;

					if (value == null && (pull || sameGroup)) {
						// Default pull value
						// Default pull and put value if same group
						return true;
					} else if (value == null || value === false) {
						return false;
					} else if (pull && value === 'clone') {
						return value;
					} else if (typeof value === 'function') {
						return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						return (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl || !dragEl.parentNode) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		},

		_isTrueParentSortable = function(el, target) {
			var trueParent = target;
			while (!trueParent[expando]) {
				trueParent = trueParent.parentNode;
			}

			return el === trueParent;
		},

		_artificalBubble = function(sortable, originalEvt, method) {
			// Artificial IE bubbling
			var nextParent = sortable.parentNode;
			while (nextParent && !nextParent[expando]) {
				nextParent = nextParent.parentNode;
			}

			if (nextParent) {
				nextParent[expando][method](_extend(originalEvt, {
					artificialBubble: true
				}));
			}
		},

		_hideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', 'none');
			}
		},

		_unhideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', '');
			}
		};


	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function(evt) {
		evt = evt.touches ? evt.touches[0] : evt;
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	_on(document, 'dragover', nearestEmptyInsertDetectEvent);
	_on(document, 'mousemove', nearestEmptyInsertDetectEvent);
	_on(document, 'touchmove', nearestEmptyInsertDetectEvent);

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			),
			emptyInsertThreshold: 5
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_computeIsAligned: function(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);

		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === window) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= this.options.touchStartThreshold
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function (fallback) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (bypassLastTouchCheck) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !bypassLastTouchCheck) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					matrix = ghostEl && _matrix(ghostEl),
					scaleX = ghostEl && matrix && matrix.a,
					scaleY = ghostEl && matrix && matrix.d,
					dx = ((touch.clientX - tapEvt.clientX) + fallbackOffset.x) / (scaleX ? scaleX : 1),
					dy = ((touch.clientY - tapEvt.clientY) + fallbackOffset.y) / (scaleY ? scaleY : 1),
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';


				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}
					this._onDragStart(evt, true);
				}

				this._handleAutoScroll(touch, true);


				moved = true;
				touchEvt = touch;


				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = _getRect(dragEl, this.options.fallbackOnBody ? document.body : rootEl, true),
					css = _css(dragEl),
					options = this.options;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);


			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});


			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback));
			_on(document, 'selectstart', _this);
		},

		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target = evt.target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort,
				_this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when no further action is needed in another sortable
			function completed() {
				if (activeSortable) {
					// Set ghost class to new sortable's ghost class
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
					_toggleClass(dragEl, options.ghostClass, true);
				}

				if (putSortable !== _this && _this !== Sortable.active) {
					putSortable = _this;
				} else if (_this === Sortable.active) {
					putSortable = null;
				}


				// Null lastTarget if it is not inside a previously swapped element
				if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}


			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}


			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed();
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed();
				}

				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					_ghostIsLast(evt, axis, el) && !dragEl.animated
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = _lastChild(el);
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
						return completed();
					}
				}
				else if (target && target !== dragEl && target.parentNode === el) {
					var direction = 0,
						targetBeforeFirstSwap,
						aligned = target.sortableMouseAligned,
						differentLevel = dragEl.parentNode !== el,
						scrolledPastTop = _isScrolledPast(target, axis === 'vertical' ? 'top' : 'left');

					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[axis === 'vertical' ? 'top' : 'left'];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (
						_isElInRowColumn(dragEl, target, axis) && aligned ||
						differentLevel ||
						scrolledPastTop ||
						options.invertSwap ||
						lastMode === 'insert' ||
						// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
						// and lastMode will change to 'insert', but we must swap
						lastMode === 'swap'
					) {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel || scrolling || scrolledPastTop;
						}

						direction = _getSwapDirection(evt, target, axis,
							options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
							isCircumstantialInvert,
							lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target, options);
						lastMode = 'insert';
					}
					if (direction === 0) return completed();

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
						after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[axis === 'vertical' ? 'top' : 'left']);
						}
						changed();
						!differentLevel && this._animate(targetRect, target);
						this._animate(dragRect, dragEl);

						return completed();
					}
				}

				if (el.contains(dragEl)) {
					return completed();
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
					|| (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
				) {
					var matrix = _matrix(this.el),
						scaleX = matrix && matrix.a,
						scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d('
						+ (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
						+ (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
					);

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				(typeof target.animated === 'number') && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;
			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if (
					selector != null &&
					(
						selector[0] === '>' && el.parentNode === ctx && _matches(el, selector.substring(1)) ||
						_matches(el, selector)
					) ||
					includeCTX && el === ctx
				) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);
		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
	        }

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children;

		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */
	function _lastChild(el) {
		var last = el.lastElementChild;

		while (last === ghostEl || last.style.display === 'none') {
			last = last.previousElementSibling;

			if (!last) break;
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
			spacer = 10;

		return (
			axis === 'vertical' ?
				(mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp) :
				(mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer)
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = _getRect(dragEl),
			invert = false;


		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - targetMoveDistance
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return ((mouseOnAxis > targetS1 + targetLength / 2) ? -1 : 1);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}

	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @param  {Object} options           options of the parent sortable
	 * @return {Number}                   Direction dragEl must be swapped
	 */
	function _getInsertDirection(target, options) {
		var dragElIndex = _index(dragEl, options.draggable),
			targetIndex = _index(target, options.draggable);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}


	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
	 * @param  {[HTMLElement]} container       the parent the element will be placed in
	 * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
	 * (used for fixed positioning on el)
	 * @return {Object}                        The boundingClientRect of el
	 */
	function _getRect(el, container, adjustForTransform) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect,
			top,
			left,
			bottom,
			right,
			height,
			width;

		if (el !== win) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForTransform && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}

			// Adjust for scale()
			var matrix = _matrix(el),
				scaleX = matrix && matrix.a,
				scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}


	/**
	 * Checks if a side of an element is scrolled past a side of it's parents
	 * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
	 * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @return {Boolean}               Whether the element is overflowing the viewport on the given side of it's parent
	 */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(parent, true),
			elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
				visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return true;

			if (parent === win) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	// Fixed #973:
	_on(document, 'touchmove', function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.3';
	return Sortable;
});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ckeditor" }, [
    _c("textarea", { attrs: { id: _vm.id }, domProps: { value: _vm.value } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row mb-2" }, [
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c("div", { staticClass: "form-inline" }, [
          _c("label", [
            _vm._v("\n\t\t\t\t\tПоказать\n\t\t\t\t\t"),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.paginateSelect,
                    expression: "paginateSelect"
                  }
                ],
                staticClass:
                  "custom-select custom-select-sm form-control form-control-sm d-flex mx-1",
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.paginateSelect = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.fetch
                  ]
                }
              },
              _vm._l(_vm.paginateOptions, function(option, i) {
                return _c("option", { key: i, domProps: { value: option } }, [
                  _vm._v(_vm._s(option))
                ])
              }),
              0
            ),
            _vm._v(" записей\n\t\t\t\t")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c("div", { staticClass: "form-inline float-right" }, [
          _c("label", [
            _vm._v("\n\t\t\t\t\tПоиск:\n\t\t\t\t\t"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass: "form-control form-control-sm ml-1",
              attrs: { type: "search" },
              domProps: { value: _vm.search },
              on: {
                blur: _vm.fetch,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "table",
      {
        staticClass: "table table-striped table-bordered table-responsive-md",
        staticStyle: { width: "100%" },
        attrs: { id: "" }
      },
      [
        _c("thead", { staticClass: "text-black" }, [
          _c("tr", [
            _c(
              "th",
              {
                staticClass: "sorting",
                class: _vm.showOrder("full_name"),
                on: {
                  click: function($event) {
                    return _vm.setOrder("full_name")
                  }
                }
              },
              [_vm._v("Автор")]
            ),
            _vm._v(" "),
            _c("th", [_vm._v("Eng")]),
            _vm._v(" "),
            _c(
              "th",
              {
                staticClass: "sorting",
                class: _vm.showOrder("email"),
                on: {
                  click: function($event) {
                    return _vm.setOrder("email")
                  }
                }
              },
              [_vm._v("E-mail")]
            ),
            _vm._v(" "),
            _c("th", [_vm._v("Роль")]),
            _vm._v(" "),
            _c(
              "th",
              {
                staticClass: "sorting",
                class: _vm.showOrder("articles_count"),
                on: {
                  click: function($event) {
                    return _vm.setOrder("articles_count")
                  }
                }
              },
              [_vm._v("Статьи")]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.users, function(user, index) {
            return _c("tr", { key: index }, [
              _c("td", [
                _c("a", { attrs: { href: user.editLink } }, [
                  _vm._v(_vm._s(user.full_name))
                ])
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.short_name_en))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.email))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.role))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.articles))])
            ])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-5" }, [
        _c("div", { staticClass: "form-inline" }, [
          _vm._v(
            "Записи с " +
              _vm._s(_vm.pagination.from) +
              " до " +
              _vm._s(_vm.pagination.to) +
              " из " +
              _vm._s(_vm.pagination.total) +
              " записей"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-7" }, [
        _c(
          "div",
          { staticClass: "float-right" },
          [
            _c("paginate", {
              attrs: {
                "page-count": _vm.pagination.pageCount,
                "click-handler": _vm.fetch,
                "prev-text": "Предыдущая",
                "next-text": "Следующая",
                "container-class": "pagination mb-0",
                "page-class": "page-item",
                "prev-class": "page-item",
                "next-class": "page-item",
                "page-link-class": "page-link",
                "prev-link-class": "page-link",
                "next-link-class": "page-link"
              },
              model: {
                value: _vm.pagination.currentPage,
                callback: function($$v) {
                  _vm.$set(_vm.pagination, "currentPage", $$v)
                },
                expression: "pagination.currentPage"
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8 col-sm-7 col-xs-7" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6" }, [_vm._v("Полное имя")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.full_name,
                        expression: "user.full_name"
                      }
                    ],
                    staticClass: "form-control mr-2",
                    attrs: {
                      type: "text",
                      name: "full_name",
                      placeholder: "Ф.И.О.",
                      required: ""
                    },
                    domProps: { value: _vm.user.full_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "full_name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4 col-sm-5 col-xs-5 text-right" },
                [
                  _c("label", { staticClass: "d-block text-muted" }, [
                    _vm._v("Автозаполнение")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-info btn-pill my-0",
                      attrs: { type: "button" },
                      on: { click: _vm.autocomplite }
                    },
                    [_vm._v("Заполнить")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6", attrs: { for: "email" } }, [
                    _vm._v("Email")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      name: "email",
                      placeholder: "Email",
                      required: ""
                    },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5 pl-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6", attrs: { for: "alias" } }, [
                    _vm._v("Логин")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.alias,
                        expression: "user.alias"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "alias", disabled: _vm.id },
                    domProps: { value: _vm.user.alias },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "alias", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 text-muted mt-2 mb-1" }, [
              _vm._v("Данные на русском")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "last_name_ru" } }, [
                    _vm._v("Фамилия")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name_ru,
                        expression: "user.last_name_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "last_name_ru" },
                    domProps: { value: _vm.user.last_name_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 px-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "first_name_ru" } }, [
                    _vm._v("Имя")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.first_name_ru,
                        expression: "user.first_name_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "first_name_ru" },
                    domProps: { value: _vm.user.first_name_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "first_name_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 px-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "patronymic_ru" } }, [
                    _vm._v("Отчество")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.patronymic_ru,
                        expression: "user.patronymic_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "patronymic_ru" },
                    domProps: { value: _vm.user.patronymic_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "patronymic_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2 pl-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "initials_ru" } }, [
                    _vm._v("Инициалы")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.initials_ru,
                        expression: "user.initials_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "initials_ru" },
                    domProps: { value: _vm.user.initials_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "initials_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "short_name_ru" } }, [
                    _vm._v("Короткое имя")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.short_name_ru,
                        expression: "user.short_name_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "short_name_ru" },
                    domProps: { value: _vm.user.short_name_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "short_name_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 text-muted mt-2 mb-1" }, [
              _vm._v("Данные на английском")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "last_name_en" } }, [
                    _vm._v("Last Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name_en,
                        expression: "user.last_name_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "last_name_en" },
                    domProps: { value: _vm.user.last_name_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name_en", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 px-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "first_name_en" } }, [
                    _vm._v("First Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.first_name_en,
                        expression: "user.first_name_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "first_name_en" },
                    domProps: { value: _vm.user.first_name_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "first_name_en", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 px-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "patronymic_en" } }, [
                    _vm._v("Middle Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.patronymic_en,
                        expression: "user.patronymic_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "patronymic_en" },
                    domProps: { value: _vm.user.patronymic_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "patronymic_en", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2 pl-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "initials_en" } }, [
                    _vm._v("Initials")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.initials_en,
                        expression: "user.initials_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "initials_en" },
                    domProps: { value: _vm.user.initials_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "initials_en", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "short_name_en" } }, [
                    _vm._v("Short name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.short_name_en,
                        expression: "user.short_name_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "short_name_en" },
                    domProps: { value: _vm.user.short_name_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "short_name_en", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6 mt-2" }, [_vm._v("ORCID")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.orcid,
                        expression: "user.orcid"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "orcid" },
                    domProps: { value: _vm.user.orcid },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "orcid", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("label", { staticClass: "h6 text-muted mt-2" }, [
              _vm._v("Степень и звание")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md pr-md-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "degree_ru" } }, [
                    _vm._v("На русском")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.degree_ru,
                        expression: "user.degree_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "degree_ru" },
                    domProps: { value: _vm.user.degree_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "degree_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md pl-md-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "degree_en" } }, [
                    _vm._v("На английском")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.degree_en,
                        expression: "user.degree_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "degree_en" },
                    domProps: { value: _vm.user.degree_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "degree_en", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 text-muted mt-3" }, [
              _vm._v("Место работы (должность)")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-hover table-responsive-xs",
                    staticStyle: { width: "100%" },
                    attrs: { id: "jobsTable" }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "draggable",
                      {
                        attrs: {
                          tag: "tbody",
                          handle: ".handle",
                          list: _vm.jobs
                        }
                      },
                      _vm._l(_vm.jobs, function(job, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "handle" }, [
                            _c("i", { staticClass: "fa fa-align-justify" })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "p-1" }, [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: job.ru,
                                  expression: "job.ru"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: job.ru },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(job, "ru", $event.target.value)
                                  },
                                  _vm.saveJobsIntoUser
                                ]
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "p-1" }, [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: job.en,
                                  expression: "job.en"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: job.en },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(job, "en", $event.target.value)
                                  },
                                  _vm.saveJobsIntoUser
                                ]
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-muted" }, [
                            _c("i", {
                              staticClass: "fa fa-close",
                              on: {
                                mouseover: function($event) {
                                  return $event.target.classList.add(
                                    "text-danger"
                                  )
                                },
                                mouseout: function($event) {
                                  return $event.target.classList.remove(
                                    "text-danger"
                                  )
                                },
                                click: function($event) {
                                  return _vm.deleteJob(index)
                                }
                              }
                            })
                          ])
                        ])
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info btn-sm",
                    attrs: { type: "button" },
                    on: { click: _vm.addJob }
                  },
                  [_vm._v("Добавить место работы")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { staticClass: "h6" }, [_vm._v("На русском")]),
                    _vm._v(" "),
                    _c("ckeditor", {
                      model: {
                        value: _vm.user.description_ru,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "description_ru", $$v)
                        },
                        expression: "user.description_ru"
                      }
                    }),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.description_ru,
                          expression: "user.description_ru"
                        }
                      ],
                      ref: "description_ru",
                      staticClass: "form-control description",
                      attrs: {
                        name: "description_ru",
                        id: "editor",
                        cols: "100",
                        rows: "3"
                      },
                      domProps: { value: _vm.user.description_ru },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.user,
                            "description_ru",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6 mt-2" }, [
                    _vm._v("На английском")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.description_en,
                        expression: "user.description_en"
                      }
                    ],
                    staticClass: "form-control description",
                    attrs: {
                      name: "description_en",
                      id: "description_en",
                      cols: "100",
                      rows: "3"
                    },
                    domProps: { value: _vm.user.description_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "description_en",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "h5 mb-0" }, [_vm._v("Персональные данные")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "h5 mb-0" }, [_vm._v("Сведения о месте работы")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-secondary" }, [
      _c("th", {}),
      _vm._v(" "),
      _c("th", { staticClass: "text-muted" }, [_vm._v("На русском")]),
      _vm._v(" "),
      _c("th", { staticClass: "text-muted" }, [_vm._v("На английском")]),
      _vm._v(" "),
      _c("th", {})
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "title mb-0" }, [_vm._v("Биография")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h5", [_vm._v("Сохранить изменения")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("input", {
            staticClass: "btn btn-primary btn-round btn-block",
            attrs: { type: "submit", value: "Сохранить" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card", attrs: { id: "photoCard" } }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h5", [_vm._v("Фотография")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "d-none", attrs: { id: "image" } }, [
            _c("img", { attrs: { src: "", alt: "" } }),
            _vm._v(" "),
            _c("label", [
              _c(
                "a",
                {
                  staticClass: "text-info text-center p-1",
                  attrs: { href: "#", id: "destroyImage" }
                },
                [_vm._v("Поменять фотографию")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center", attrs: { id: "downloadImage" } },
            [
              _c("label", { staticClass: "d-block mb-0" }, [
                _vm._v("Фотография не загружена")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary btn-simple btn-round",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#setFileModal"
                  }
                },
                [_vm._v("Загрузить")]
              )
            ]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "d-none",
            attrs: { type: "text", name: "avatar", value: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/back/plugins/CKEditor.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/back/plugins/CKEditor.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CKEditor.vue?vue&type=template&id=0a06d31e& */ "./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e&");
/* harmony import */ var _CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CKEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/plugins/CKEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CKEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/plugins/CKEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CKEditor.vue?vue&type=template&id=0a06d31e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/plugins/CKEditor.vue?vue&type=template&id=0a06d31e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_0a06d31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/back/translat.js":
/*!**************************************************!*\
  !*** ./resources/js/components/back/translat.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  translat: function translat(title) {
    var gost1 = {
      Є: "EH",
      І: "I",
      і: "i",
      "№": "#",
      є: "eh",
      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "JO",
      Ж: "ZH",
      З: "Z",
      И: "I",
      Й: "JJ",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "KH",
      Ц: "C",
      Ч: "CH",
      Ш: "Sh",
      Щ: "Shh",
      Ъ: "'",
      Ы: "Y",
      Ь: "",
      Э: "EH",
      Ю: "YU",
      Я: "YA",
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "jo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "jj",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "shh",
      ъ: "",
      ы: "y",
      ь: "",
      э: "eh",
      ю: "yu",
      я: "ya",
      "«": "",
      "»": "",
      "—": "-"
    };
    return this.strtr(title.toString(), gost1);
  },
  strtr: function strtr(string, dictionary) {
    return string.replace(/[\s\S]/g, function (x) {
      if (dictionary.hasOwnProperty(x)) {
        return dictionary[x];
      }

      return x;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=1f022106&scoped=true& */ "./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f022106",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/users/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=1f022106&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=6528c9cc& */ "./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/users/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=6528c9cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/coreui.js":
/*!********************************!*\
  !*** ./resources/js/coreui.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// jquery
// popper
// bootstrap
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // bootstrap-vue
// .... may be later
// core @coreui


__webpack_require__(/*! ./coreui/index.js */ "./resources/js/coreui/index.js"); //plugins


__webpack_require__(/*! ./plugins/bootstrap-notify */ "./resources/js/plugins/bootstrap-notify.js"); //Vue


window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.VueRouter = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js"); //CKEditor
// import CKEditor from "@ckeditor/ckeditor5-vue";
// Vue.use(CKEditor);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("user-list", __webpack_require__(/*! ./components/back/users/UserList.vue */ "./resources/js/components/back/users/UserList.vue").default);
Vue.component("user-profile", __webpack_require__(/*! ./components/back/users/UserProfile.vue */ "./resources/js/components/back/users/UserProfile.vue").default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: "#app"
});

/***/ }),

/***/ "./resources/js/coreui/ajax-load.js":
/*!******************************************!*\
  !*** ./resources/js/coreui/ajax-load.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var AjaxLoad = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'ajaxLoad';
  var VERSION = '2.1.7';
  var DATA_KEY = 'coreui.ajaxLoad';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    NAV_PILLS: 'nav-pills',
    NAV_TABS: 'nav-tabs',
    OPEN: 'open',
    VIEW_SCRIPT: 'view-script'
  };
  var Event = {
    CLICK: 'click'
  };
  var Selector = {
    HEAD: 'head',
    NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
    NAV_LINK: '.sidebar-nav .nav-link',
    NAV_ITEM: '.sidebar-nav .nav-item',
    VIEW_SCRIPT: '.view-script'
  };
  var Default = {
    defaultPage: 'main.html',
    errorPage: '404.html',
    subpagesDirectory: 'views/'
  };

  var AjaxLoad =
  /*#__PURE__*/
  function () {
    function AjaxLoad(element, config) {
      _classCallCheck(this, AjaxLoad);

      this._config = this._getConfig(config);
      this._element = element;
      var url = location.hash.replace(/^#/, '');

      if (url !== '') {
        this.setUpUrl(url);
      } else {
        this.setUpUrl(this._config.defaultPage);
      }

      this._addEventListeners();
    } // Getters


    _createClass(AjaxLoad, [{
      key: "loadPage",
      // Public
      value: function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src) {
          var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      }
    }, {
      key: "setUpUrl",
      value: function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $("".concat(Selector.NAV_DROPDOWN, ":has(a[href=\"").concat(url.replace(/^\//, '').split('?')[0], "\"])")).addClass(ClassName.OPEN);
        $("".concat(Selector.NAV_ITEM, " a[href=\"").concat(url.replace(/^\//, '').split('?')[0], "\"]")).addClass(ClassName.ACTIVE);
        this.loadPage(url);
      }
    }, {
      key: "loadBlank",
      value: function loadBlank(url) {
        window.open(url);
      }
    }, {
      key: "loadTop",
      value: function loadTop(url) {
        window.location = url;
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        return config;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, "".concat(Selector.NAV_LINK, "[href!=\"#\"]"), function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _typeof(config) === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return AjaxLoad;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = AjaxLoad._jQueryInterface;
  $.fn[NAME].Constructor = AjaxLoad;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return AjaxLoad._jQueryInterface;
  };

  return AjaxLoad;
}(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AjaxLoad);

/***/ }),

/***/ "./resources/js/coreui/aside-menu.js":
/*!*******************************************!*\
  !*** ./resources/js/coreui/aside-menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toggle_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-classes */ "./resources/js/coreui/toggle-classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): aside-menu.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var AsideMenu = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'aside-menu';
  var VERSION = '2.1.7';
  var DATA_KEY = 'coreui.aside-menu';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    CLICK: 'click',
    LOAD_DATA_API: "load".concat(EVENT_KEY).concat(DATA_API_KEY),
    TOGGLE: 'toggle'
  };
  var Selector = {
    BODY: 'body',
    ASIDE_MENU: '.aside-menu',
    ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
  };
  var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var AsideMenu =
  /*#__PURE__*/
  function () {
    function AsideMenu(element) {
      _classCallCheck(this, AsideMenu);

      this._element = element;

      this._addEventListeners();
    } // Getters


    _createClass(AsideMenu, [{
      key: "_addEventListeners",
      // Private
      value: function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          Object(_toggle_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(toggle, ShowClassNames);
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return AsideMenu;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event.LOAD_DATA_API, function () {
    var asideMenu = $(Selector.ASIDE_MENU);

    AsideMenu._jQueryInterface.call(asideMenu);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = AsideMenu._jQueryInterface;
  $.fn[NAME].Constructor = AsideMenu;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return AsideMenu._jQueryInterface;
  };

  return AsideMenu;
}(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AsideMenu);

/***/ }),

/***/ "./resources/js/coreui/index.js":
/*!**************************************!*\
  !*** ./resources/js/coreui/index.js ***!
  \**************************************/
/*! exports provided: AjaxLoad, AsideMenu, Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./resources/js/coreui/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ajax_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax-load */ "./resources/js/coreui/ajax-load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxLoad", function() { return _ajax_load__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _aside_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside-menu */ "./resources/js/coreui/aside-menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideMenu", function() { return _aside_menu__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./resources/js/coreui/sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utilities_get_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/get-style */ "./resources/js/coreui/utilities/get-style.js");
/* harmony import */ var _utilities_hex_to_rgb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/hex-to-rgb */ "./resources/js/coreui/utilities/hex-to-rgb.js");
/* harmony import */ var _utilities_hex_to_rgba__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/hex-to-rgba */ "./resources/js/coreui/utilities/hex-to-rgba.js");
/* harmony import */ var _utilities_rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/rgb-to-hex */ "./resources/js/coreui/utilities/rgb-to-hex.js");





/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): index.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

(function ($) {
  if (typeof $ === 'undefined') {
    throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})(jquery__WEBPACK_IMPORTED_MODULE_1___default.a);

 // Global functions


window.getStyle = _utilities_get_style__WEBPACK_IMPORTED_MODULE_5__["default"];

window.hexToRgb = _utilities_hex_to_rgb__WEBPACK_IMPORTED_MODULE_6__["default"];

window.hexToRgba = _utilities_hex_to_rgba__WEBPACK_IMPORTED_MODULE_7__["default"];

window.rgbToHex = _utilities_rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"];

/***/ }),

/***/ "./resources/js/coreui/polyfill.js":
/*!*****************************************!*\
  !*** ./resources/js/coreui/polyfill.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* required polyfills
*/
// eslint-disable-next-line consistent-return
(function () {
  if (typeof NodeList.prototype.forEach === 'function') {
    return false;
  }

  NodeList.prototype.forEach = Array.prototype.forEach;
})();
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol'
// import 'core-js/es6/object'
// import 'core-js/es6/function'
// import 'core-js/es6/parse-int'
// import 'core-js/es6/parse-float'
// import 'core-js/es6/number'
// import 'core-js/es6/math'
// import 'core-js/es6/string'
// import 'core-js/es6/date'
// import 'core-js/es6/array'
// import 'core-js/es6/regexp'
// import 'core-js/es6/map'
// import 'core-js/es6/weak-map'
// import 'core-js/es6/set'
// import 'core-js/es7/object'

/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect'

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
// import 'core-js/es7/reflect'
// CustomEvent() constructor functionality in IE9, IE10, IE11
// (function () {
//
//   if ( typeof window.CustomEvent === "function" ) return false
//
//   function CustomEvent ( event, params ) {
//     params = params || { bubbles: false, cancelable: false, detail: undefined }
//     var evt = document.createEvent( 'CustomEvent' )
//     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
//     return evt
//   }
//
//   CustomEvent.prototype = window.Event.prototype
//
//   window.CustomEvent = CustomEvent
// })()

/***/ }),

/***/ "./resources/js/coreui/sidebar.js":
/*!****************************************!*\
  !*** ./resources/js/coreui/sidebar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _utilities_get_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/get-style */ "./resources/js/coreui/utilities/get-style.js");
/* harmony import */ var _toggle_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-classes */ "./resources/js/coreui/toggle-classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var Sidebar = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'sidebar';
  var VERSION = '2.1.7';
  var DATA_KEY = 'coreui.sidebar';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {
    transition: 400
  };
  var ClassName = {
    ACTIVE: 'active',
    BRAND_MINIMIZED: 'brand-minimized',
    NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
    OPEN: 'open',
    SIDEBAR_FIXED: 'sidebar-fixed',
    SIDEBAR_MINIMIZED: 'sidebar-minimized',
    SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
  };
  var Event = {
    CLICK: 'click',
    DESTROY: 'destroy',
    INIT: 'init',
    LOAD_DATA_API: "load".concat(EVENT_KEY).concat(DATA_API_KEY),
    TOGGLE: 'toggle',
    UPDATE: 'update'
  };
  var Selector = {
    BODY: 'body',
    BRAND_MINIMIZER: '.brand-minimizer',
    NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
    NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
    NAV_ITEM: '.nav-item',
    NAV_LINK: '.nav-link',
    NAV_LINK_QUERIED: '.nav-link-queried',
    NAVIGATION_CONTAINER: '.sidebar-nav',
    NAVIGATION: '.sidebar-nav > .nav',
    SIDEBAR: '.sidebar',
    SIDEBAR_MINIMIZER: '.sidebar-minimizer',
    SIDEBAR_TOGGLER: '.sidebar-toggler'
  };
  var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Sidebar =
  /*#__PURE__*/
  function () {
    function Sidebar(element) {
      _classCallCheck(this, Sidebar);

      this._element = element;
      this.mobile = false;
      this.ps = null;
      this.perfectScrollbar(Event.INIT);
      this.setActiveLink();
      this._breakpointTest = this._breakpointTest.bind(this);
      this._clickOutListener = this._clickOutListener.bind(this);

      this._addEventListeners();

      this._addMediaQuery();
    } // Getters


    _createClass(Sidebar, [{
      key: "perfectScrollbar",
      // Public
      value: function perfectScrollbar(event) {
        var _this = this;

        if (typeof perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"] !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      }
    }, {
      key: "makeScrollbar",
      value: function makeScrollbar() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Selector.NAVIGATION_CONTAINER;
        var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      }
    }, {
      key: "destroyScrollbar",
      value: function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      }
    }, {
      key: "setActiveLink",
      value: function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(Selector.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private

    }, {
      key: "_addMediaQuery",
      value: function _addMediaQuery() {
        var sm = Object(_utilities_get_style__WEBPACK_IMPORTED_MODULE_2__["default"])('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: ".concat(smVal, "px)"));

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      }
    }, {
      key: "_breakpointTest",
      value: function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      }
    }, {
      key: "_clickOutListener",
      value: function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      }
    }, {
      key: "_addClickOut",
      value: function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      }
    }, {
      key: "_removeClickOut",
      value: function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      }
    }, {
      key: "_toggleClickOut",
      value: function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          Object(_toggle_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $("".concat(Selector.NAVIGATION, " > ").concat(Selector.NAV_ITEM, " ").concat(Selector.NAV_LINK, ":not(").concat(Selector.NAV_DROPDOWN_TOGGLE, ")")).on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Sidebar;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event.LOAD_DATA_API, function () {
    var sidebar = $(Selector.SIDEBAR);

    Sidebar._jQueryInterface.call(sidebar);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Sidebar._jQueryInterface;
  $.fn[NAME].Constructor = Sidebar;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Sidebar._jQueryInterface;
  };

  return Sidebar;
}(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/coreui/toggle-classes.js":
/*!***********************************************!*\
  !*** ./resources/js/coreui/toggle-classes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): toggle-classes.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var removeClasses = function removeClasses(classNames) {
  return classNames.map(function (className) {
    return document.body.classList.contains(className);
  }).indexOf(true) !== -1;
};

var toggleClasses = function toggleClasses(toggleClass, classNames) {
  var breakpoint = classNames.indexOf(toggleClass);
  var newClassNames = classNames.slice(0, breakpoint + 1);

  if (removeClasses(newClassNames)) {
    newClassNames.map(function (className) {
      return document.body.classList.remove(className);
    });
  } else {
    document.body.classList.add(toggleClass);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toggleClasses);

/***/ }),

/***/ "./resources/js/coreui/utilities/get-css-custom-properties.js":
/*!********************************************************************!*\
  !*** ./resources/js/coreui/utilities/get-css-custom-properties.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.1.7): get-css-custom-properties.js
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var sheets = document.styleSheets;
  var cssText = '';

  for (var i = sheets.length - 1; i > -1; i--) {
    var rules = sheets[i].cssRules;

    for (var j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        cssText = rules[j].cssText;
        break;
      }
    }

    if (cssText) {
      break;
    }
  }

  cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
  cssText.split(';').forEach(function (property) {
    if (property) {
      var name = property.split(': ')[0];
      var value = property.split(': ')[1];

      if (name && value) {
        cssCustomProperties["--".concat(name.trim())] = value.trim();
      }
    }
  });
  return cssCustomProperties;
};

/* harmony default export */ __webpack_exports__["default"] = (getCssCustomProperties);

/***/ }),

/***/ "./resources/js/coreui/utilities/get-style.js":
/*!****************************************************!*\
  !*** ./resources/js/coreui/utilities/get-style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-css-custom-properties */ "./resources/js/coreui/utilities/get-css-custom-properties.js");
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.1.7): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var minIEVersion = 10;

var isIE1x = function isIE1x() {
  return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getStyle = function getStyle(property) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var style;

  if (isCustomProperty(property) && isIE1x()) {
    var cssCustomProperties = Object(_get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__["default"])();
    style = cssCustomProperties[property];
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  }

  return style;
};

/* harmony default export */ __webpack_exports__["default"] = (getStyle);

/***/ }),

/***/ "./resources/js/coreui/utilities/hex-to-rgb.js":
/*!*****************************************************!*\
  !*** ./resources/js/coreui/utilities/hex-to-rgb.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.1.7): hex-to-rgb.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var hexToRgb = function hexToRgb(color) {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined');
  }

  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }

  var r;
  var g;
  var b;

  if (color.length === 7) {
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
  } else {
    r = parseInt(color.substring(1, 2), 16);
    g = parseInt(color.substring(2, 3), 16);
    b = parseInt(color.substring(3, 5), 16);
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);

/***/ }),

/***/ "./resources/js/coreui/utilities/hex-to-rgba.js":
/*!******************************************************!*\
  !*** ./resources/js/coreui/utilities/hex-to-rgba.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.1.7): hex-to-rgba.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var hexToRgba = function hexToRgba(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined');
  }

  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }

  var r;
  var g;
  var b;

  if (color.length === 7) {
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
  } else {
    r = parseInt(color.substring(1, 2), 16);
    g = parseInt(color.substring(2, 3), 16);
    b = parseInt(color.substring(3, 5), 16);
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};

/* harmony default export */ __webpack_exports__["default"] = (hexToRgba);

/***/ }),

/***/ "./resources/js/coreui/utilities/rgb-to-hex.js":
/*!*****************************************************!*\
  !*** ./resources/js/coreui/utilities/rgb-to-hex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.1.7): rgb-to-hex.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var rgbToHex = function rgbToHex(color) {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined');
  }

  if (color === 'transparent') {
    return '#00000000';
  }

  var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  if (!rgb) {
    throw new Error("".concat(color, " is not a valid rgb color"));
  }

  var r = "0".concat(parseInt(rgb[1], 10).toString(16));
  var g = "0".concat(parseInt(rgb[2], 10).toString(16));
  var b = "0".concat(parseInt(rgb[3], 10).toString(16));
  return "#".concat(r.slice(-2)).concat(g.slice(-2)).concat(b.slice(-2));
};

/* harmony default export */ __webpack_exports__["default"] = (rgbToHex);

/***/ }),

/***/ "./resources/js/plugins/bootstrap-notify.js":
/*!**************************************************!*\
  !*** ./resources/js/plugins/bootstrap-notify.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*



     Creative Tim Modifications

     Lines: 238, 239 was changed from top: 5px to top: 50% and we added margin-top: -13px. In this way the close button will be aligned vertically
     Line:222 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.




*/

/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */

/* global define:false, require: false, jQuery:false */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Create the defaults once
  var defaults = {
    element: 'body',
    position: null,
    type: "info",
    allow_dismiss: true,
    allow_duplicates: true,
    newest_on_top: false,
    showProgressbar: false,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1060,
    delay: 5000,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: 'class',
    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="now-ui-icons ui-1_simple-remove"></i></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
  };

  String.format = function () {
    var args = arguments;
    var str = arguments[0];
    return str.replace(/(\{\{\d\}\}|\{\d\})/g, function (str) {
      if (str.substring(0, 2) === "{{") return str;
      var num = parseInt(str.match(/\d/)[0]);
      return args[num + 1];
    });
  };

  function isDuplicateNotification(notification) {
    var isDupe = false;
    $('[data-notify="container"]').each(function (i, el) {
      var $el = $(el);
      var title = $el.find('[data-notify="title"]').html().trim();
      var message = $el.find('[data-notify="message"]').html().trim(); // The input string might be different than the actual parsed HTML string!
      // (<br> vs <br /> for example)
      // So we have to force-parse this as HTML here!

      var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
      var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
      var isSameType = $el.hasClass('alert-' + notification.settings.type);

      if (isSameTitle && isSameMsg && isSameType) {
        //we found the dupe. Set the var and stop checking.
        isDupe = true;
      }

      return !isDupe;
    });
    return isDupe;
  }

  function Notify(element, content, options) {
    // Setup Content of Notify
    var contentObj = {
      content: {
        message: _typeof(content) === 'object' ? content.message : content,
        title: content.title ? content.title : '',
        icon: content.icon ? content.icon : '',
        url: content.url ? content.url : '#',
        target: content.target ? content.target : '-'
      }
    };
    options = $.extend(true, {}, contentObj, options);
    this.settings = $.extend(true, {}, defaults, options);
    this._defaults = defaults;

    if (this.settings.content.target === "-") {
      this.settings.content.target = this.settings.url_target;
    }

    this.animations = {
      start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
      end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
    };

    if (typeof this.settings.offset === 'number') {
      this.settings.offset = {
        x: this.settings.offset,
        y: this.settings.offset
      };
    } //if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing


    if (this.settings.allow_duplicates || !this.settings.allow_duplicates && !isDuplicateNotification(this)) {
      this.init();
    }
  }

  $.extend(Notify.prototype, {
    init: function init() {
      var self = this;
      this.buildNotify();

      if (this.settings.content.icon) {
        this.setIcon();
      }

      if (this.settings.content.url != "#") {
        this.styleURL();
      }

      this.styleDismiss();
      this.placement();
      this.bind();
      this.notify = {
        $ele: this.$ele,
        update: function update(command, _update) {
          var commands = {};

          if (typeof command === "string") {
            commands[command] = _update;
          } else {
            commands = command;
          }

          for (var cmd in commands) {
            switch (cmd) {
              case "type":
                this.$ele.removeClass('alert-' + self.settings.type);
                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
                self.settings.type = commands[cmd];
                this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
                break;

              case "icon":
                var $icon = this.$ele.find('[data-notify="icon"]');

                if (self.settings.icon_type.toLowerCase() === 'class') {
                  $icon.removeClass(self.settings.content.icon).addClass(commands[cmd]);
                } else {
                  if (!$icon.is('img')) {
                    $icon.find('img');
                  }

                  $icon.attr('src', commands[cmd]);
                }

                self.settings.content.icon = commands[command];
                break;

              case "progress":
                var newDelay = self.settings.delay - self.settings.delay * (commands[cmd] / 100);
                this.$ele.data('notify-delay', newDelay);
                this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
                break;

              case "url":
                this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
                break;

              case "target":
                this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
                break;

              default:
                this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
            }
          }

          var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
          self.reposition(posX);
        },
        close: function close() {
          self.close();
        }
      };
    },
    buildNotify: function buildNotify() {
      var content = this.settings.content;
      this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
      this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);

      if (!this.settings.allow_dismiss) {
        this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
      }

      if (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) {
        this.$ele.find('[data-notify="progressbar"]').remove();
      }
    },
    setIcon: function setIcon() {
      this.$ele.addClass('alert-with-icon');

      if (this.settings.icon_type.toLowerCase() === 'class') {
        this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
      } else {
        if (this.$ele.find('[data-notify="icon"]').is('img')) {
          this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
        } else {
          this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
        }
      }
    },
    styleDismiss: function styleDismiss() {
      this.$ele.find('[data-notify="dismiss"]').css({
        position: 'absolute',
        right: '10px',
        top: '50%',
        marginTop: '-13px',
        zIndex: this.settings.z_index + 2
      });
    },
    styleURL: function styleURL() {
      this.$ele.find('[data-notify="url"]').css({
        backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: this.settings.z_index + 1
      });
    },
    placement: function placement() {
      var self = this,
          offsetAmt = this.settings.offset.y,
          css = {
        display: 'inline-block',
        margin: '0px auto',
        position: this.settings.position ? this.settings.position : this.settings.element === 'body' ? 'fixed' : 'absolute',
        transition: 'all .5s ease-in-out',
        zIndex: this.settings.z_index
      },
          hasAnimation = false,
          settings = this.settings;
      $('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
        offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
      });

      if (this.settings.newest_on_top === true) {
        offsetAmt = this.settings.offset.y;
      }

      css[this.settings.placement.from] = offsetAmt + 'px';

      switch (this.settings.placement.align) {
        case "left":
        case "right":
          css[this.settings.placement.align] = this.settings.offset.x + 'px';
          break;

        case "center":
          css.left = 0;
          css.right = 0;
          break;
      }

      this.$ele.css(css).addClass(this.settings.animate.enter);
      $.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function (index, prefix) {
        self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
      });
      $(this.settings.element).append(this.$ele);

      if (this.settings.newest_on_top === true) {
        offsetAmt = parseInt(offsetAmt) + parseInt(this.settings.spacing) + this.$ele.outerHeight();
        this.reposition(offsetAmt);
      }

      if ($.isFunction(self.settings.onShow)) {
        self.settings.onShow.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function () {
        hasAnimation = true;
      }).one(this.animations.end, function () {
        self.$ele.removeClass(self.settings.animate.enter);

        if ($.isFunction(self.settings.onShown)) {
          self.settings.onShown.call(this);
        }
      });
      setTimeout(function () {
        if (!hasAnimation) {
          if ($.isFunction(self.settings.onShown)) {
            self.settings.onShown.call(this);
          }
        }
      }, 600);
    },
    bind: function bind() {
      var self = this;
      this.$ele.find('[data-notify="dismiss"]').on('click', function () {
        self.close();
      });

      if ($.isFunction(self.settings.onClick)) {
        this.$ele.on('click', function (event) {
          if (event.target != self.$ele.find('[data-notify="dismiss"]')[0]) {
            self.settings.onClick.call(this, event);
          }
        });
      }

      this.$ele.mouseover(function () {
        $(this).data('data-hover', "true");
      }).mouseout(function () {
        $(this).data('data-hover', "false");
      });
      this.$ele.data('data-hover', "false");

      if (this.settings.delay > 0) {
        self.$ele.data('notify-delay', self.settings.delay);
        var timer = setInterval(function () {
          var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;

          if (self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause" || self.settings.mouse_over != "pause") {
            var percent = (self.settings.delay - delay) / self.settings.delay * 100;
            self.$ele.data('notify-delay', delay);
            self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
          }

          if (delay <= -self.settings.timer) {
            clearInterval(timer);
            self.close();
          }
        }, self.settings.timer);
      }
    },
    close: function close() {
      var self = this,
          posX = parseInt(this.$ele.css(this.settings.placement.from)),
          hasAnimation = false;
      this.$ele.attr('data-closing', 'true').addClass(this.settings.animate.exit);
      self.reposition(posX);

      if ($.isFunction(self.settings.onClose)) {
        self.settings.onClose.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function () {
        hasAnimation = true;
      }).one(this.animations.end, function () {
        $(this).remove();

        if ($.isFunction(self.settings.onClosed)) {
          self.settings.onClosed.call(this);
        }
      });
      setTimeout(function () {
        if (!hasAnimation) {
          self.$ele.remove();

          if (self.settings.onClosed) {
            self.settings.onClosed(self.$ele);
          }
        }
      }, 600);
    },
    reposition: function reposition(posX) {
      var self = this,
          notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
          $elements = this.$ele.nextAll(notifies);

      if (this.settings.newest_on_top === true) {
        $elements = this.$ele.prevAll(notifies);
      }

      $elements.each(function () {
        $(this).css(self.settings.placement.from, posX);
        posX = parseInt(posX) + parseInt(self.settings.spacing) + $(this).outerHeight();
      });
    }
  });

  $.notify = function (content, options) {
    var plugin = new Notify(this, content, options);
    return plugin.notify;
  };

  $.notifyDefaults = function (options) {
    defaults = $.extend(true, {}, defaults, options);
    return defaults;
  };

  $.notifyClose = function (selector) {
    if (typeof selector === "undefined" || selector === "all") {
      $('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('.alert-' + selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector) {
      $(selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify-position="' + selector + '"]').find('[data-notify="dismiss"]').trigger('click');
    }
  };

  $.notifyCloseExcept = function (selector) {
    if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('[data-notify]').not('.alert-' + selector).find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify]').not(selector).find('[data-notify="dismiss"]').trigger('click');
    }
  };
});

/***/ }),

/***/ "./resources/sass/coreui/coreui.scss":
/*!*******************************************!*\
  !*** ./resources/sass/coreui/coreui.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./resources/js/coreui.js ./resources/sass/coreui/coreui.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! c:\OSPanel\domains\idea.lv\resources\js\coreui.js */"./resources/js/coreui.js");
module.exports = __webpack_require__(/*! c:\OSPanel\domains\idea.lv\resources\sass\coreui\coreui.scss */"./resources/sass/coreui/coreui.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);