/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ accordionList)\n/* harmony export */ });\nfunction accordionList() {\n  var accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  accordionList[0].classList.add(\"ativo\");\n  accordionList[0].nextElementSibling.classList.add(\"ativo\");\n  if (accordionList.length) {\n    var activeAccordion = function activeAccordion() {\n      this.classList.toggle(\"ativo\");\n      this.nextElementSibling.classList.toggle(\"ativo\");\n    };\n    accordionList.forEach(function (item) {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n}\nconsole.log(\"Accordion funcionou\");\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion-list.js?\n}");

/***/ }),

/***/ "./js/modules/animacao-num.js":
/*!************************************!*\
  !*** ./js/modules/animacao-num.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacaoNumeros)\n/* harmony export */ });\nfunction animacaoNumeros() {\n  var numeros = document.querySelectorAll(\"[data-numero]\");\n  function animaNumero(numero) {\n    var total = +numero.innerText;\n    var incremento = Math.floor(total / 100) || 1;\n    var start = 0;\n    var timer = setInterval(function () {\n      start += incremento;\n      numero.innerText = start;\n      if (start >= total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n  function handleIntersection(entries, observer) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        animaNumero(entry.target);\n        observer.unobserve(entry.target);\n      }\n    });\n  }\n  var observer = new IntersectionObserver(handleIntersection, {\n    threshold: 0.5\n  });\n  numeros.forEach(function (numero) {\n    observer.observe(numero);\n  });\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/animacao-num.js?\n}");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction dropdownMenu() {\n  var dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  dropdownMenus.forEach(function (menu) {\n    menu.addEventListener(\"click\", handleClick);\n    menu.addEventListener(\"touchstart\", handleClick);\n  });\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.toggle(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, function () {\n      _this.classList.remove(\"ativo\");\n    });\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/dropdown-menu.js?\n}");

/***/ }),

/***/ "./js/modules/fetch-btc.js":
/*!*********************************!*\
  !*** ./js/modules/fetch-btc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc() {\n  fetch(\"https://blockchain.info/ticker\").then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var btcPreco = document.querySelector(\".btc-preco\");\n    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/fetch-btc.js?\n}");

/***/ }),

/***/ "./js/modules/horario-func.js":
/*!************************************!*\
  !*** ./js/modules/horario-func.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ funcionamento)\n/* harmony export */ });\nfunction funcionamento() {\n  var funcionamento = document.querySelector('[data-semana=\"1,2,3,4,5\"]');\n  if (!funcionamento) return;\n  var diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  var horarioFunc = funcionamento.dataset.horario.split(\",\").map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var aberto = diasSemana.includes(diaAgora);\n  var horarioAberto = horarioAgora >= horarioFunc[0] && horarioAgora < horarioFunc[1];\n  if (aberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/horario-func.js?\n}");

/***/ }),

/***/ "./js/modules/links-scroll.js":
/*!************************************!*\
  !*** ./js/modules/links-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ linksIntScroll)\n/* harmony export */ });\nfunction linksIntScroll() {\n  var linksInternos = document.querySelectorAll('[data=\"menu\"] a[href^=\"#\"]');\n  function scrollToSections(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute(\"href\");\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  }\n  linksInternos.forEach(function (links) {\n    links.addEventListener(\"click\", scrollToSections);\n  });\n}\nconsole.log(\"Scroll links internos funcionou\");\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/links-scroll.js?\n}");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n// import outsideClick from \"./outsideclick.js\";\n\nfunction menuMobile() {\n  var menuBt = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  menuBt.addEventListener(\"click\", abrirMenu);\n  function abrirMenu(event) {\n    menuList.classList.toggle(\"ativo\");\n    menuBt.classList.toggle(\"ativo\");\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?\n}");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modalLogin)\n/* harmony export */ });\nfunction modalLogin() {\n  var botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  var botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  if (botaoAbrir && botaoFechar && containerModal) {\n    var abrirModal = function abrirModal(event) {\n      event.preventDefault();\n      containerModal.classList.add(\"ativo\");\n    };\n    var fecharModal = function fecharModal(event) {\n      event.preventDefault();\n      containerModal.classList.remove(\"ativo\");\n    };\n    var clickForaModal = function clickForaModal(event) {\n      if (event.target === this) fecharModal(event);\n    };\n    botaoAbrir.addEventListener(\"click\", abrirModal);\n    botaoFechar.addEventListener(\"click\", fecharModal);\n    containerModal.addEventListener(\"click\", clickForaModal);\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?\n}");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    html.addEventListener(\"click\", handleOutsideClick);\n    element.setAttribute(outside, \"\");\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, \"\");\n      html.removeEventListener(\"click\", handleOutsideClick);\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outsideclick.js?\n}");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollAnimation)\n/* harmony export */ });\nfunction scrollAnimation() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  if (sections.length) {\n    var animaScroll = function animaScroll() {\n      sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n        var isSectionVisible = sectionTop - windowMetade < 0;\n        if (isSectionVisible) section.classList.add(\"ativo\");else section.classList.remove(\"ativo\");\n      });\n    };\n    var windowMetade = window.innerHeight * 0.6;\n    animaScroll();\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\nconsole.log(\"Scroll suave funcionou\");\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?\n}");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabNav)\n/* harmony export */ });\nfunction tabNav() {\n  var tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  var tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  if (tabMenu.length && tabContent.length) {\n    var activeTab = function activeTab(index) {\n      tabContent.forEach(function (section) {\n        section.classList.remove(\"ativo\");\n      });\n      var direcAnimacao = tabContent[index].dataset.anime;\n      tabContent[index].classList.add(\"ativo\", direcAnimacao);\n    };\n    tabMenu.forEach(function (itemMenu, index) {\n      itemMenu.addEventListener(\"click\", function () {\n        activeTab(index);\n      });\n    });\n  }\n}\nconsole.log(\"Tab nav funcionou\");\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tab-nav.js?\n}");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toolTip)\n/* harmony export */ });\nfunction toolTip() {\n  var toolTips = document.querySelectorAll(\"[data-tooltip\");\n  toolTips.forEach(function (item) {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n  function onMouseOver(event) {\n    var tooltipBox = criarToolTipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n    onMouseLeave.element = this;\n    onMouseLeave.tolltipBox = tooltipBox;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + \"px\";\n      this.tooltipBox.style.left = event.pageX + 20 + \"px\";\n    }\n  };\n  var onMouseLeave = {\n    handleEvent: function handleEvent() {\n      this.tolltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    }\n  };\n  function criarToolTipBox(element) {\n    var tooltipBox = document.createElement(\"div\");\n    var text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_links_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/links-scroll.js */ \"./js/modules/links-scroll.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_animacao_num_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animacao-num.js */ \"./js/modules/animacao-num.js\");\n/* harmony import */ var _modules_horario_func_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/horario-func.js */ \"./js/modules/horario-func.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./js/modules/fetch-btc.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_horario_func_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_links_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_animacao_num_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;