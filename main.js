(()=>{"use strict";var t="".concat("","/api/weblarek"),r="".concat("","/content/weblarek");function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _toPropertyKey(t){var r=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(r)?r:r+""}var o=function(){return function _createClass(t,r,o){return r&&_defineProperties(t.prototype,r),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}((function EventEmitter(){!function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,EventEmitter),this._events=new Map}),[{key:"on",value:function on(t,r){var o;this._events.has(t)||this._events.set(t,new Set),null===(o=this._events.get(t))||void 0===o||o.add(r)}},{key:"off",value:function off(t,r){var o;this._events.has(t)&&(this._events.get(t).delete(r),0===(null===(o=this._events.get(t))||void 0===o?void 0:o.size)&&this._events.delete(t))}},{key:"emit",value:function emit(t,r){this._events.forEach((function(o,i){(i instanceof RegExp&&i.test(t)||i===t)&&o.forEach((function(t){return t(r)}))}))}},{key:"onAll",value:function onAll(t){this.on("*",t)}},{key:"offAll",value:function offAll(){this._events=new Map}},{key:"trigger",value:function trigger(t,r){var o=this;return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.emit(t,Object.assign(Object.assign({},i||{}),r||{}))}}}])}();function Model_typeof(t){return Model_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Model_typeof(t)}function Model_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Model_toPropertyKey(i.key),i)}}function Model_toPropertyKey(t){var r=function Model_toPrimitive(t,r){if("object"!=Model_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Model_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Model_typeof(r)?r:r+""}var i=function(){return function Model_createClass(t,r,o){return r&&Model_defineProperties(t.prototype,r),o&&Model_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}((function Model(t,r){!function Model_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Model),this.events=r,Object.assign(this,t)}),[{key:"emitChanges",value:function emitChanges(t,r){this.events.emit(t,null!=r?r:{})}}])}();function AppData_typeof(t){return AppData_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},AppData_typeof(t)}function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,r):void 0}}(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,i=Array(r);o<r;o++)i[o]=t[o];return i}function AppData_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,AppData_toPropertyKey(i.key),i)}}function AppData_createClass(t,r,o){return r&&AppData_defineProperties(t.prototype,r),o&&AppData_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function AppData_toPropertyKey(t){var r=function AppData_toPrimitive(t,r){if("object"!=AppData_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=AppData_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==AppData_typeof(r)?r:r+""}function AppData_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _callSuper(t,r,o){return r=_getPrototypeOf(r),function _possibleConstructorReturn(t,r){if(r&&("object"==AppData_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(r,o||[],_getPrototypeOf(t).constructor):r.apply(t,o))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},_setPrototypeOf(t,r)}var a=function(t){function CardItem(){return AppData_classCallCheck(this,CardItem),_callSuper(this,CardItem,arguments)}return _inherits(CardItem,t),AppData_createClass(CardItem)}(i),c=function(t){function AppState(){var t;return AppData_classCallCheck(this,AppState),(t=_callSuper(this,AppState,arguments)).order={payment:"",address:"",email:"",phone:"",items:[],total:0},t.formErrors={},t}return _inherits(AppState,t),AppData_createClass(AppState,[{key:"setCatalog",value:function setCatalog(t){var r=this;this.catalog=t.map((function(t){return new a(t,r.events)})),this.emitChanges("catalog:changed",{catalog:this.catalog})}},{key:"setCardPreview",value:function setCardPreview(t){this.preview=t.id,this.emitChanges("preview:changed",t)}},{key:"addCardToBasket",value:function addCardToBasket(t){this.basket.includes(t)||(this.basket=[].concat(_toConsumableArray(this.basket),[t]),this.emitChanges("basket:changed",this.basket))}},{key:"removeCardFromBasket",value:function removeCardFromBasket(t){this.basket=this.basket.filter((function(r){return r!==t})),this.emitChanges("basket:changed",this.basket)}},{key:"getBasket",value:function getBasket(){return this.basket}},{key:"getTotalPrice",value:function getTotalPrice(){var t=this;return this.basket.reduce((function(r,o){return r+t.catalog.find((function(t){return t.id===o})).price}),0)}},{key:"clearBasket",value:function clearBasket(){this.basket=[],this.emitChanges("basket:changed",this.basket)}},{key:"validateOrderInfo",value:function validateOrderInfo(){var t={};return this.order.address||(t.address="Необходимо указать адрес"),this.order.payment||(t.payment="Необходимо указать способ оплаты"),this.formErrors=t,this.events.emit("formErrors:change",this.formErrors),0===Object.keys(t).length}},{key:"validateOrderContacts",value:function validateOrderContacts(){var t={};return this.order.email||(t.email="Необходимо указать email"),this.order.phone||(t.phone="Необходимо указать телефон"),this.formErrors=t,this.events.emit("formErrors:change",this.formErrors),0===Object.keys(t).length}},{key:"setOrderInfo",value:function setOrderInfo(t){Object.assign(this.order,t),this.emitChanges("order:changed",this.order)}},{key:"setOrderContacts",value:function setOrderContacts(t){Object.assign(this.order,t),this.emitChanges("order:changed",this.order)}}])}(i);function api_typeof(t){return api_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},api_typeof(t)}function api_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,api_toPropertyKey(i.key),i)}}function api_toPropertyKey(t){var r=function api_toPrimitive(t,r){if("object"!=api_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=api_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==api_typeof(r)?r:r+""}function ShopAPI_typeof(t){return ShopAPI_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ShopAPI_typeof(t)}function ShopAPI_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ShopAPI_toPropertyKey(i.key),i)}}function ShopAPI_toPropertyKey(t){var r=function ShopAPI_toPrimitive(t,r){if("object"!=ShopAPI_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=ShopAPI_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ShopAPI_typeof(r)?r:r+""}function ShopAPI_callSuper(t,r,o){return r=ShopAPI_getPrototypeOf(r),function ShopAPI_possibleConstructorReturn(t,r){if(r&&("object"==ShopAPI_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function ShopAPI_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,ShopAPI_isNativeReflectConstruct()?Reflect.construct(r,o||[],ShopAPI_getPrototypeOf(t).constructor):r.apply(t,o))}function ShopAPI_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(ShopAPI_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function ShopAPI_getPrototypeOf(t){return ShopAPI_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ShopAPI_getPrototypeOf(t)}function ShopAPI_setPrototypeOf(t,r){return ShopAPI_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},ShopAPI_setPrototypeOf(t,r)}var u=function(t){function ShopAPI(t,r,o){var i;return function ShopAPI_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,ShopAPI),(i=ShopAPI_callSuper(this,ShopAPI,[r,o])).cdn=t,i}return function ShopAPI_inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ShopAPI_setPrototypeOf(t,r)}(ShopAPI,t),function ShopAPI_createClass(t,r,o){return r&&ShopAPI_defineProperties(t.prototype,r),o&&ShopAPI_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(ShopAPI,[{key:"getCatalog",value:function getCatalog(){var t=this;return this.get("/product").then((function(r){return r.items.map((function(r){return Object.assign(Object.assign({},r),{image:t.cdn+r.image})}))}))}},{key:"getSelectedCard",value:function getSelectedCard(t){var r=this;return this.get("/product/".concat(t)).then((function(t){return Object.assign(Object.assign({},t),{image:r.cdn+t.image})}))}},{key:"placeOrder",value:function placeOrder(t){return this.post("/order/",t).then((function(t){return t}))}}])}(function(){return function api_createClass(t,r,o){return r&&api_defineProperties(t.prototype,r),o&&api_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}((function Api(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function api_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Api),this.baseUrl=t,this.options={headers:Object.assign({"Content-Type":"application/json"},null!==(r=o.headers)&&void 0!==r?r:{})}}),[{key:"handleResponse",value:function handleResponse(t){return t.ok?t.json():t.json().then((function(r){var o;return Promise.reject(null!==(o=r.error)&&void 0!==o?o:t.statusText)}))}},{key:"get",value:function get(t){return fetch(this.baseUrl+t,Object.assign(Object.assign({},this.options),{method:"GET"})).then(this.handleResponse)}},{key:"post",value:function post(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return fetch(this.baseUrl+t,Object.assign(Object.assign({},this.options),{method:o,body:JSON.stringify(r)})).then(this.handleResponse)}}])}());function utils_unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return utils_arrayLikeToArray(t,r);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?utils_arrayLikeToArray(t,r):void 0}}function utils_arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,i=Array(r);o<r;o++)i[o]=t[o];return i}function isSelector(t){return"string"==typeof t&&t.length>1}function formatNumber(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,r)}function ensureElement(t,r){if(isSelector(t)){var o=function ensureAllElements(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(isSelector(t))return Array.from(r.querySelectorAll(t));if(t instanceof NodeList)return Array.from(t);if(Array.isArray(t))return t;throw new Error("Unknown selector element")}(t,r);if(o.length>1&&console.warn("selector ".concat(t," return more then one element")),0===o.length)throw new Error("selector ".concat(t," return nothing"));return o.pop()}if(t instanceof HTMLElement)return t;throw new Error("Unknown selector element")}function cloneTemplate(t){return ensureElement(t).content.firstElementChild.cloneNode(!0)}function setElementData(t,r){for(var o in r)t.dataset[o]=String(r[o])}function createElement(t,r,o){var i,a,c=document.createElement(t);if(r)for(var u in r){var l=r[u];i=l,a=void 0,(a=Object.getPrototypeOf(i))!==Object.getPrototypeOf({})&&null!==a||"dataset"!==u?c[u]="boolean"==typeof l?l:String(l):setElementData(c,l)}if(o){var p,y=function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=utils_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var i=0,a=function F(){};return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1;return{s:function s(){o=o.call(t)},n:function n(){var t=o.next();return u=t.done,t},e:function e(t){l=!0,c=t},f:function f(){try{u||null==o.return||o.return()}finally{if(l)throw c}}}}(Array.isArray(o)?o:[o]);try{for(y.s();!(p=y.n()).done;){var d=p.value;c.append(d)}}catch(t){y.e(t)}finally{y.f()}}return c}function Component_typeof(t){return Component_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Component_typeof(t)}function Component_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Component_toPropertyKey(i.key),i)}}function Component_toPropertyKey(t){var r=function Component_toPrimitive(t,r){if("object"!=Component_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Component_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Component_typeof(r)?r:r+""}var l=function(){return function Component_createClass(t,r,o){return r&&Component_defineProperties(t.prototype,r),o&&Component_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}((function Component(t){!function Component_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Component),this.container=t}),[{key:"toggleClass",value:function toggleClass(t,r,o){t.classList.toggle(r,o)}},{key:"setText",value:function setText(t,r){t&&(t.textContent=String(r))}},{key:"setDisabled",value:function setDisabled(t,r){t&&(r?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled"))}},{key:"setHidden",value:function setHidden(t){t.style.display="none"}},{key:"setVisible",value:function setVisible(t){t.style.removeProperty("display")}},{key:"setImage",value:function setImage(t,r,o){t&&(t.src=r,o&&(t.alt=o))}},{key:"render",value:function render(t){return Object.assign(this,null!=t?t:{}),this.container}}])}();function Modal_typeof(t){return Modal_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Modal_typeof(t)}function Modal_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Modal_toPropertyKey(i.key),i)}}function Modal_toPropertyKey(t){var r=function Modal_toPrimitive(t,r){if("object"!=Modal_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Modal_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Modal_typeof(r)?r:r+""}function Modal_callSuper(t,r,o){return r=Modal_getPrototypeOf(r),function Modal_possibleConstructorReturn(t,r){if(r&&("object"==Modal_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function Modal_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Modal_isNativeReflectConstruct()?Reflect.construct(r,o||[],Modal_getPrototypeOf(t).constructor):r.apply(t,o))}function Modal_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Modal_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,r,o){var i=function _superPropBase(t,r){for(;!{}.hasOwnProperty.call(t,r)&&null!==(t=Modal_getPrototypeOf(t)););return t}(t,r);if(i){var a=Object.getOwnPropertyDescriptor(i,r);return a.get?a.get.call(arguments.length<3?t:o):a.value}},_get.apply(null,arguments)}function Modal_getPrototypeOf(t){return Modal_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Modal_getPrototypeOf(t)}function Modal_setPrototypeOf(t,r){return Modal_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Modal_setPrototypeOf(t,r)}var p=function(t){function Modal(t,r){var o;return function Modal_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Modal),(o=Modal_callSuper(this,Modal,[t])).events=r,o._closeButton=ensureElement(".modal__close",t),o._content=ensureElement(".modal__content",t),o._closeButton.addEventListener("click",o.close.bind(o)),o.container.addEventListener("click",o.close.bind(o)),o._content.addEventListener("click",(function(t){return t.stopPropagation()})),o}return function Modal_inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Modal_setPrototypeOf(t,r)}(Modal,t),function Modal_createClass(t,r,o){return r&&Modal_defineProperties(t.prototype,r),o&&Modal_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(Modal,[{key:"content",set:function set(t){this._content.replaceChildren(t)}},{key:"open",value:function open(){this.container.classList.add("modal_active"),this.events.emit("modal:open")}},{key:"close",value:function close(){this.container.classList.remove("modal_active"),this.content=null,this.events.emit("modal:close")}},{key:"render",value:function render(t){return function _superPropGet(t,r,o,i){var a=_get(Modal_getPrototypeOf(1&i?t.prototype:t),r,o);return 2&i&&"function"==typeof a?function(t){return a.apply(o,t)}:a}(Modal,"render",this,3)([t]),this.open(),this.container}}])}(l);function Card_typeof(t){return Card_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Card_typeof(t)}function Card_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Card_toPropertyKey(i.key),i)}}function Card_toPropertyKey(t){var r=function Card_toPrimitive(t,r){if("object"!=Card_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Card_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Card_typeof(r)?r:r+""}function Card_callSuper(t,r,o){return r=Card_getPrototypeOf(r),function Card_possibleConstructorReturn(t,r){if(r&&("object"==Card_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function Card_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Card_isNativeReflectConstruct()?Reflect.construct(r,o||[],Card_getPrototypeOf(t).constructor):r.apply(t,o))}function Card_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Card_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function Card_getPrototypeOf(t){return Card_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Card_getPrototypeOf(t)}function Card_setPrototypeOf(t,r){return Card_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Card_setPrototypeOf(t,r)}var y=function(t){function Card(t,r){var o;return function Card_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Card),(o=Card_callSuper(this,Card,[t]))._title=t.querySelector(".card__title"),o._category=t.querySelector(".card__category"),o._image=t.querySelector(".card__image"),o._price=t.querySelector(".card__price"),o._button=t.querySelector(".card__button"),o._description=t.querySelector(".card__text"),(null==r?void 0:r.onClick)&&(o._button?o._button.addEventListener("click",r.onClick):t.addEventListener("click",r.onClick)),o}return function Card_inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Card_setPrototypeOf(t,r)}(Card,t),function Card_createClass(t,r,o){return r&&Card_defineProperties(t.prototype,r),o&&Card_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(Card,[{key:"id",get:function get(){return this.container.dataset.id||""},set:function set(t){this.container.dataset.id=t}},{key:"title",get:function get(){return this._title.textContent||""},set:function set(t){this.setText(this._title,t)}},{key:"category",set:function set(t){this.setText(this._category,t)}},{key:"image",set:function set(t){this.setImage(this._image,t,this.title)}},{key:"price",set:function set(t){t?this.setText(this._price,"".concat(formatNumber(t)," синапсов")):this._price.textContent="Бесценно"}},{key:"description",set:function set(t){this.setText(this._description,t)}}])}(l);function Page_typeof(t){return Page_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Page_typeof(t)}function Page_toConsumableArray(t){return function Page_arrayWithoutHoles(t){if(Array.isArray(t))return Page_arrayLikeToArray(t)}(t)||function Page_iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function Page_unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return Page_arrayLikeToArray(t,r);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Page_arrayLikeToArray(t,r):void 0}}(t)||function Page_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Page_arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,i=Array(r);o<r;o++)i[o]=t[o];return i}function Page_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Page_toPropertyKey(i.key),i)}}function Page_toPropertyKey(t){var r=function Page_toPrimitive(t,r){if("object"!=Page_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Page_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Page_typeof(r)?r:r+""}function Page_callSuper(t,r,o){return r=Page_getPrototypeOf(r),function Page_possibleConstructorReturn(t,r){if(r&&("object"==Page_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function Page_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Page_isNativeReflectConstruct()?Reflect.construct(r,o||[],Page_getPrototypeOf(t).constructor):r.apply(t,o))}function Page_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Page_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function Page_getPrototypeOf(t){return Page_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Page_getPrototypeOf(t)}function Page_setPrototypeOf(t,r){return Page_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Page_setPrototypeOf(t,r)}var d=function(t){function Page(t,r){var o;return function Page_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Page),(o=Page_callSuper(this,Page,[t])).events=r,o._counter=ensureElement(".header__basket-counter"),o._catalog=ensureElement(".gallery"),o._wrapper=ensureElement(".page__wrapper"),o._basket=ensureElement(".header__basket"),o._basket.addEventListener("click",(function(){o.events.emit("basket:open")})),o}return function Page_inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Page_setPrototypeOf(t,r)}(Page,t),function Page_createClass(t,r,o){return r&&Page_defineProperties(t.prototype,r),o&&Page_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(Page,[{key:"counter",set:function set(t){this.setText(this._counter,String(t))}},{key:"catalog",set:function set(t){var r;(r=this._catalog).replaceChildren.apply(r,Page_toConsumableArray(t))}},{key:"locked",set:function set(t){t?this._wrapper.classList.add("page__wrapper_locked"):this._wrapper.classList.remove("page__wrapper_locked")}}])}(l);function Basket_typeof(t){return Basket_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Basket_typeof(t)}function Basket_toConsumableArray(t){return function Basket_arrayWithoutHoles(t){if(Array.isArray(t))return Basket_arrayLikeToArray(t)}(t)||function Basket_iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function Basket_unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return Basket_arrayLikeToArray(t,r);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Basket_arrayLikeToArray(t,r):void 0}}(t)||function Basket_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Basket_arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,i=Array(r);o<r;o++)i[o]=t[o];return i}function Basket_defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Basket_toPropertyKey(i.key),i)}}function Basket_toPropertyKey(t){var r=function Basket_toPrimitive(t,r){if("object"!=Basket_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,r||"default");if("object"!=Basket_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Basket_typeof(r)?r:r+""}function Basket_callSuper(t,r,o){return r=Basket_getPrototypeOf(r),function Basket_possibleConstructorReturn(t,r){if(r&&("object"==Basket_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function Basket_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Basket_isNativeReflectConstruct()?Reflect.construct(r,o||[],Basket_getPrototypeOf(t).constructor):r.apply(t,o))}function Basket_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Basket_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function Basket_getPrototypeOf(t){return Basket_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Basket_getPrototypeOf(t)}function Basket_setPrototypeOf(t,r){return Basket_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Basket_setPrototypeOf(t,r)}var _=function(t){function Basket(t,r){var o;return function Basket_classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Basket),(o=Basket_callSuper(this,Basket,[t])).events=r,o._list=ensureElement(".basket__list",o.container),o._total=o.container.querySelector(".basket__price"),o._button=o.container.querySelector(".basket__button"),o._button&&o._button.addEventListener("click",(function(){r.emit("orderInfo:open")})),o.items=[],o}return function Basket_inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Basket_setPrototypeOf(t,r)}(Basket,t),function Basket_createClass(t,r,o){return r&&Basket_defineProperties(t.prototype,r),o&&Basket_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(Basket,[{key:"items",set:function set(t){var r;t.length?(r=this._list).replaceChildren.apply(r,Basket_toConsumableArray(t)):this._list.replaceChildren(createElement("p",{textContent:"Корзина пуста"}))}},{key:"selected",set:function set(t){t.length?this.setDisabled(this._button,!1):this.setDisabled(this._button,!0)}},{key:"total",set:function set(t){this.setText(this._total,"".concat(formatNumber(t)," синапсов"))}}])}(l),b=new o,m=new u(r,t);b.onAll((function(t){var r=t.eventName,o=t.data;console.log(r,o)}));var h=new c({},b),v=new d(document.body,b),g=ensureElement("#card-preview"),P=ensureElement("#card-catalog"),O=new _(cloneTemplate(ensureElement("#basket")),b),C=new p(ensureElement("#modal-container"),b);b.on("card:select",(function(t){h.setCardPreview(t)})),b.on("preview:changed",(function(t){t?m.getSelectedCard(t.id).then((function(r){t.description=r.description,t.price=r.price,function showItem(t){var r=new y(cloneTemplate(g));C.render({content:r.render({title:t.title,image:t.image,description:t.description,price:t.price})})}(t)})).catch((function(t){console.error(t)})):C.close()})),b.on("modal:open",(function(){v.locked=!0})),b.on("modal:close",(function(){v.locked=!1})),h.basket=["412bcf81-7e75-4e70-bdb9-d3c73c9803b7","1c521d84-c48d-48fa-8cfb-9d911fa515fd"],b.on("catalog:changed",(function(){v.catalog=h.catalog.map((function(t){return new y(cloneTemplate(P),{onClick:function onClick(){return b.emit("card:select",t)}}).render({title:t.title,category:t.category,image:t.image,description:t.description,price:t.price})})),v.counter=h.getBasket().length})),b.on("basket:open",(function(){C.render({content:O.render()})})),m.getCatalog().then((function(t){h.setCatalog(t)})).catch((function(t){console.error(t)}))})();
//# sourceMappingURL=main.js.map