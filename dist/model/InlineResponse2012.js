"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2012 = void 0;
var _ApiClient = require("../ApiClient");
var _Contact = require("./Contact");
var _ExpandedOrder = require("./ExpandedOrder");
var _Order2 = require("./Order");
var _OrderLineItem = require("./OrderLineItem");
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
 * The InlineResponse2012 model module.
 * @module model/InlineResponse2012
 * @version 1.0.0
 */
var InlineResponse2012 = /*#__PURE__*/function (_Order) {
  _inherits(InlineResponse2012, _Order);
  var _super = _createSuper(InlineResponse2012);
  /**
   * Constructs a new <code>InlineResponse2012</code>.
   * @alias module:model/InlineResponse2012
   * @class
   * @extends module:model/Order
   * @param address {} 
   * @param customer {} 
   * @param paymentTerms {} 
   * @param lineItems {} 
   * @param contacts {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param references {} The the first reference of this order is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
   * @param state {} The current state of the Order
   * @param currency {} The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order.
   * @param netTotal {} The total net worth (that is without taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
   * @param grossTotal {} The total gross worth (that is with taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
   * @param taxes {} The total amount of taxes of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
   * @param confirmedAt {} The date at which this order was confirmed to be produced. When this date is set, the order `state` will be set to confirmed and no modifications of this order will be possible.
   * @param canceledAt {} The date at which this order was canceled. Only orders that were previously confirmed might be canceled. When this date is set, the order `state` will equal `canceled`.
   * @param fulfilledAt {} The date at which this order was complelty fulfilled. Fulfillment is assumed as soon as all production and logistics work is completed and the order is on it's way to the customer. When this date is set, the order `state` will equal `fulfilled`.
   */
  function InlineResponse2012(address, customer, paymentTerms, lineItems, contacts, id, createdAt, updatedAt, references, state, currency, netTotal, grossTotal, taxes, confirmedAt, canceledAt, fulfilledAt) {
    var _this;
    _classCallCheck(this, InlineResponse2012);
    _this = _super.call(this, id, createdAt, updatedAt, references, state, currency, netTotal, grossTotal, taxes, confirmedAt, canceledAt, fulfilledAt);
    _this.address = address;
    _this.customer = customer;
    _this.paymentTerms = paymentTerms;
    _this.lineItems = lineItems;
    _this.contacts = contacts;
    return _this;
  }

  /**
   * Constructs a <code>InlineResponse2012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2012} obj Optional instance to populate.
   * @return {module:model/InlineResponse2012} The populated <code>InlineResponse2012</code> instance.
   */
  _createClass(InlineResponse2012, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2012();
        _Order2.Order.constructFromObject(data, obj);
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _ApiClient.ApiClient.convertToType(data['payment_terms'], Object);
        if (data.hasOwnProperty('line_items')) obj.lineItems = _ApiClient.ApiClient.convertToType(data['line_items'], [_OrderLineItem.OrderLineItem]);
        if (data.hasOwnProperty('contacts')) obj.contacts = _ApiClient.ApiClient.convertToType(data['contacts'], [_Contact.Contact]);
      }
      return obj;
    }
  }]);
  return InlineResponse2012;
}(_Order2.Order);
/**
 * @member {Object} address
 */
exports.InlineResponse2012 = InlineResponse2012;
InlineResponse2012.prototype.address = undefined;

/**
 * @member {Object} customer
 */
InlineResponse2012.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
InlineResponse2012.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItem>} lineItems
 */
InlineResponse2012.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/Contact>} contacts
 */
InlineResponse2012.prototype.contacts = undefined;