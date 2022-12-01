"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      drawer: null,
      headers: [{
        text: "Photo",
        align: "start",
        value: "product_image"
      }, {
        text: "Name",
        value: "product_name"
      }, {
        text: "Price",
        value: "price_price"
      }, {
        text: "Action",
        value: "action"
      }],
      desserts: [],
      snackbar: false,
      snackbartext: null
    };
  },
  methods: {
    getAllProduct: function getAllProduct() {
      var _this = this;
      axios.get("/api/getAllProduct").then(function (response) {
        _this.desserts = response.data;
      });
    },
    deleteproduct: function deleteproduct(productid) {
      var _this2 = this;
      if (confirm("Are you sure want to delete !!")) {
        axios.get("/api/deleteproduct/" + productid).then(function (response) {
          if (response.data == 1) {
            _this2.snackbar = true;
            _this2.snackbartext = "product deleted....";
            _this2.getAllProduct();
          }
        });
      }
    }
  },
  mounted: function mounted() {
    this.getAllProduct();
  }
});

/***/ }),

/***/ "./resources/js/components/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Product.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7e94e6d4& */ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=7e94e6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "" },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list-item",
            { attrs: { to: "/" } },
            [
              _c("v-list-item-icon", [_c("v-icon", [_vm._v("mdi-home")])], 1),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [_c("v-list-item-title", [_vm._v("Dashboard")])],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { attrs: { to: "/product" } },
            [
              _c(
                "v-list-item-icon",
                [_c("v-icon", [_vm._v("mdi-basket-outline")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [_c("v-list-item-title", [_vm._v("Product")])],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { app: "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function ($event) {
                _vm.drawer = !_vm.drawer
              },
            },
          }),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Dashboard")]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            [
              _c("v-data-table", {
                staticClass: "elevation-0",
                attrs: { headers: _vm.headers, items: _vm.desserts },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "top",
                      fn: function () {
                        return [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "" } },
                            [
                              _c("v-toolbar-title", [_vm._v("Products")]),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              _vm._v(" "),
                              _c("v-btn", { attrs: { to: "/product/new" } }, [
                                _vm._v("Add New"),
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                            ],
                            1
                          ),
                        ]
                      },
                      proxy: true,
                    },
                    {
                      key: "item.product_image",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c("v-img", {
                            staticStyle: { "max-width": "50px" },
                            attrs: {
                              src:
                                "/images/" + JSON.parse(item.product_image)[0],
                            },
                          }),
                        ]
                      },
                    },
                    {
                      key: "item.action",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-btn",
                            {
                              staticStyle: {
                                padding: "5px",
                                "min-width": "inherit",
                                height: "25px !important",
                              },
                              attrs: {
                                to: "/product/edit/" + item.id,
                                color: "#444",
                                "x-small": "",
                                dark: "",
                              },
                            },
                            [_vm._v("\n            Edit\n          ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticStyle: {
                                padding: "5px",
                                "min-width": "inherit",
                                height: "25px !important",
                              },
                              attrs: {
                                color: "#ff7058",
                                "x-small": "",
                                dark: "",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.deleteproduct(item.id)
                                },
                              },
                            },
                            [_vm._v("\n            Delete\n          ")]
                          ),
                        ]
                      },
                    },
                  ],
                  null,
                  true
                ),
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function (ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "pink", text: "" },
                        on: {
                          click: function ($event) {
                            _vm.snackbar = false
                          },
                        },
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n        Close\n      ")]
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.snackbar,
            callback: function ($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar",
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.snackbartext) + "\n    ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);