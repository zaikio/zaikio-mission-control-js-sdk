"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderUpdate model module.
 * @module model/OrderUpdate
 * @version 1.0.0
 */
var OrderUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderUpdate</code>.
   * @alias module:model/OrderUpdate
   * @class
   */
  function OrderUpdate() {
    _classCallCheck(this, OrderUpdate);
  }

  /**
   * Constructs a <code>OrderUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderUpdate} obj Optional instance to populate.
   * @return {module:model/OrderUpdate} The populated <code>OrderUpdate</code> instance.
   */
  _createClass(OrderUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderUpdate();
        if (data.hasOwnProperty('references')) obj.references = _ApiClient.ApiClient.convertToType(data['references'], ['String']);
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('net_total')) obj.netTotal = _ApiClient.ApiClient.convertToType(data['net_total'], 'Number');
        if (data.hasOwnProperty('gross_total')) obj.grossTotal = _ApiClient.ApiClient.convertToType(data['gross_total'], 'Number');
        if (data.hasOwnProperty('taxes')) obj.taxes = _ApiClient.ApiClient.convertToType(data['taxes'], 'Number');
        if (data.hasOwnProperty('confirmed_at')) obj.confirmedAt = _ApiClient.ApiClient.convertToType(data['confirmed_at'], 'Date');
        if (data.hasOwnProperty('canceled_at')) obj.canceledAt = _ApiClient.ApiClient.convertToType(data['canceled_at'], 'Date');
        if (data.hasOwnProperty('fulfilled_at')) obj.fulfilledAt = _ApiClient.ApiClient.convertToType(data['fulfilled_at'], 'Date');
      }
      return obj;
    }
  }]);
  return OrderUpdate;
}();
/**
 * The the first reference of this order is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
exports.OrderUpdate = OrderUpdate;
OrderUpdate.prototype.references = undefined;

/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
OrderUpdate.CurrencyEnum = {
  /**
   * value: "USD"
   * @const
   */
  USD: "USD",
  /**
   * value: "EUR"
   * @const
   */
  EUR: "EUR",
  /**
   * value: "GBP"
   * @const
   */
  GBP: "GBP"
};
/**
 * The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order.
 * @member {module:model/OrderUpdate.CurrencyEnum} currency
 */
OrderUpdate.prototype.currency = undefined;

/**
 * The total net worth (that is without taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} netTotal
 */
OrderUpdate.prototype.netTotal = undefined;

/**
 * The total gross worth (that is with taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} grossTotal
 */
OrderUpdate.prototype.grossTotal = undefined;

/**
 * The total amount of taxes of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} taxes
 */
OrderUpdate.prototype.taxes = undefined;

/**
 * The date at which this order was confirmed to be produced. When this date is set, the order `state` will be set to confirmed and no modifications of this order will be possible.
 * @member {Date} confirmedAt
 */
OrderUpdate.prototype.confirmedAt = undefined;

/**
 * The date at which this order was canceled. Only orders that were previously confirmed might be canceled. When this date is set, the order `state` will equal `canceled`.
 * @member {Date} canceledAt
 */
OrderUpdate.prototype.canceledAt = undefined;

/**
 * The date at which this order was complelty fulfilled. Fulfillment is assumed as soon as all production and logistics work is completed and the order is on it's way to the customer. When this date is set, the order `state` will equal `fulfilled`.
 * @member {Date} fulfilledAt
 */
OrderUpdate.prototype.fulfilledAt = undefined;