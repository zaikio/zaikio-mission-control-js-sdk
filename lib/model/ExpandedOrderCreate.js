"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedOrderCreate = void 0;
var _ApiClient = require("../ApiClient");
var _ContactCreate = require("./ContactCreate");
var _OrderLineItemCreate = require("./OrderLineItemCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedOrderCreate model module.
 * @module model/ExpandedOrderCreate
 * @version 1.0.0
 */
var ExpandedOrderCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedOrderCreate</code>.
   * @alias module:model/ExpandedOrderCreate
   * @class
   */
  function ExpandedOrderCreate() {
    _classCallCheck(this, ExpandedOrderCreate);
  }

  /**
   * Constructs a <code>ExpandedOrderCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedOrderCreate} obj Optional instance to populate.
   * @return {module:model/ExpandedOrderCreate} The populated <code>ExpandedOrderCreate</code> instance.
   */
  _createClass(ExpandedOrderCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedOrderCreate();
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _ApiClient.ApiClient.convertToType(data['payment_terms'], Object);
        if (data.hasOwnProperty('line_items')) obj.lineItems = _ApiClient.ApiClient.convertToType(data['line_items'], [_OrderLineItemCreate.OrderLineItemCreate]);
        if (data.hasOwnProperty('contacts')) obj.contacts = _ApiClient.ApiClient.convertToType(data['contacts'], [_ContactCreate.ContactCreate]);
      }
      return obj;
    }
  }]);
  return ExpandedOrderCreate;
}();
/**
 * @member {Object} address
 */
exports.ExpandedOrderCreate = ExpandedOrderCreate;
ExpandedOrderCreate.prototype.address = undefined;

/**
 * @member {Object} customer
 */
ExpandedOrderCreate.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
ExpandedOrderCreate.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItemCreate>} lineItems
 */
ExpandedOrderCreate.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/ContactCreate>} contacts
 */
ExpandedOrderCreate.prototype.contacts = undefined;