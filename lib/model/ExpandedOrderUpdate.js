"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedOrderUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _ContactUpdate = require("./ContactUpdate");
var _OrderLineItemUpdate = require("./OrderLineItemUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedOrderUpdate model module.
 * @module model/ExpandedOrderUpdate
 * @version 1.0.0
 */
var ExpandedOrderUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedOrderUpdate</code>.
   * @alias module:model/ExpandedOrderUpdate
   * @class
   */
  function ExpandedOrderUpdate() {
    _classCallCheck(this, ExpandedOrderUpdate);
  }

  /**
   * Constructs a <code>ExpandedOrderUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedOrderUpdate} obj Optional instance to populate.
   * @return {module:model/ExpandedOrderUpdate} The populated <code>ExpandedOrderUpdate</code> instance.
   */
  _createClass(ExpandedOrderUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedOrderUpdate();
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _ApiClient.ApiClient.convertToType(data['payment_terms'], Object);
        if (data.hasOwnProperty('line_items')) obj.lineItems = _ApiClient.ApiClient.convertToType(data['line_items'], [_OrderLineItemUpdate.OrderLineItemUpdate]);
        if (data.hasOwnProperty('contacts')) obj.contacts = _ApiClient.ApiClient.convertToType(data['contacts'], [_ContactUpdate.ContactUpdate]);
      }
      return obj;
    }
  }]);
  return ExpandedOrderUpdate;
}();
/**
 * @member {Object} address
 */
exports.ExpandedOrderUpdate = ExpandedOrderUpdate;
ExpandedOrderUpdate.prototype.address = undefined;

/**
 * @member {Object} customer
 */
ExpandedOrderUpdate.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
ExpandedOrderUpdate.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItemUpdate>} lineItems
 */
ExpandedOrderUpdate.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/ContactUpdate>} contacts
 */
ExpandedOrderUpdate.prototype.contacts = undefined;