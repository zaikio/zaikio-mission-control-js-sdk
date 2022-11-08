"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllOfordersOrderIdBodyOrder = void 0;
var _ApiClient = require("../ApiClient");
var _ContactUpdate = require("./ContactUpdate");
var _ExpandedOrderUpdate = require("./ExpandedOrderUpdate");
var _OrderLineItemUpdate = require("./OrderLineItemUpdate");
var _OrderUpdate2 = require("./OrderUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * The AllOfordersOrderIdBodyOrder model module.
 * @module model/AllOfordersOrderIdBodyOrder
 * @version 1.0.0
 */
var AllOfordersOrderIdBodyOrder = /*#__PURE__*/function (_OrderUpdate) {
  _inherits(AllOfordersOrderIdBodyOrder, _OrderUpdate);
  var _super = _createSuper(AllOfordersOrderIdBodyOrder);
  /**
   * Constructs a new <code>AllOfordersOrderIdBodyOrder</code>.
   * @alias module:model/AllOfordersOrderIdBodyOrder
   * @class
   * @extends module:model/OrderUpdate
   */
  function AllOfordersOrderIdBodyOrder() {
    _classCallCheck(this, AllOfordersOrderIdBodyOrder);
    return _super.call(this);
  }

  /**
   * Constructs a <code>AllOfordersOrderIdBodyOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfordersOrderIdBodyOrder} obj Optional instance to populate.
   * @return {module:model/AllOfordersOrderIdBodyOrder} The populated <code>AllOfordersOrderIdBodyOrder</code> instance.
   */
  _createClass(AllOfordersOrderIdBodyOrder, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllOfordersOrderIdBodyOrder();
        _OrderUpdate2.OrderUpdate.constructFromObject(data, obj);
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _ApiClient.ApiClient.convertToType(data['payment_terms'], Object);
        if (data.hasOwnProperty('line_items')) obj.lineItems = _ApiClient.ApiClient.convertToType(data['line_items'], [_OrderLineItemUpdate.OrderLineItemUpdate]);
        if (data.hasOwnProperty('contacts')) obj.contacts = _ApiClient.ApiClient.convertToType(data['contacts'], [_ContactUpdate.ContactUpdate]);
      }
      return obj;
    }
  }]);
  return AllOfordersOrderIdBodyOrder;
}(_OrderUpdate2.OrderUpdate);
/**
 * @member {Object} address
 */
exports.AllOfordersOrderIdBodyOrder = AllOfordersOrderIdBodyOrder;
AllOfordersOrderIdBodyOrder.prototype.address = undefined;

/**
 * @member {Object} customer
 */
AllOfordersOrderIdBodyOrder.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
AllOfordersOrderIdBodyOrder.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItemUpdate>} lineItems
 */
AllOfordersOrderIdBodyOrder.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/ContactUpdate>} contacts
 */
AllOfordersOrderIdBodyOrder.prototype.contacts = undefined;