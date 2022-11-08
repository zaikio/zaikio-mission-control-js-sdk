"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedOrder = void 0;
var _ApiClient = require("../ApiClient");
var _Contact = require("./Contact");
var _OrderLineItem = require("./OrderLineItem");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedOrder model module.
 * @module model/ExpandedOrder
 * @version 1.0.0
 */
var ExpandedOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedOrder</code>.
   * @alias module:model/ExpandedOrder
   * @class
   * @param address {Object} 
   * @param customer {Object} 
   * @param paymentTerms {Object} 
   * @param lineItems {Array.<module:model/OrderLineItem>} 
   * @param contacts {Array.<module:model/Contact>} 
   */
  function ExpandedOrder(address, customer, paymentTerms, lineItems, contacts) {
    _classCallCheck(this, ExpandedOrder);
    this.address = address;
    this.customer = customer;
    this.paymentTerms = paymentTerms;
    this.lineItems = lineItems;
    this.contacts = contacts;
  }

  /**
   * Constructs a <code>ExpandedOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedOrder} obj Optional instance to populate.
   * @return {module:model/ExpandedOrder} The populated <code>ExpandedOrder</code> instance.
   */
  _createClass(ExpandedOrder, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedOrder();
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _ApiClient.ApiClient.convertToType(data['payment_terms'], Object);
        if (data.hasOwnProperty('line_items')) obj.lineItems = _ApiClient.ApiClient.convertToType(data['line_items'], [_OrderLineItem.OrderLineItem]);
        if (data.hasOwnProperty('contacts')) obj.contacts = _ApiClient.ApiClient.convertToType(data['contacts'], [_Contact.Contact]);
      }
      return obj;
    }
  }]);
  return ExpandedOrder;
}();
/**
 * @member {Object} address
 */
exports.ExpandedOrder = ExpandedOrder;
ExpandedOrder.prototype.address = undefined;

/**
 * @member {Object} customer
 */
ExpandedOrder.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
ExpandedOrder.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItem>} lineItems
 */
ExpandedOrder.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/Contact>} contacts
 */
ExpandedOrder.prototype.contacts = undefined;