"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentTermsCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PaymentTermsCreate model module.
 * @module model/PaymentTermsCreate
 * @version 1.0.0
 */
var PaymentTermsCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentTermsCreate</code>.
   * @alias module:model/PaymentTermsCreate
   * @class
   */
  function PaymentTermsCreate() {
    _classCallCheck(this, PaymentTermsCreate);
  }

  /**
   * Constructs a <code>PaymentTermsCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentTermsCreate} obj Optional instance to populate.
   * @return {module:model/PaymentTermsCreate} The populated <code>PaymentTermsCreate</code> instance.
   */
  _createClass(PaymentTermsCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentTermsCreate();
        if (data.hasOwnProperty('mode')) obj.mode = _ApiClient.ApiClient.convertToType(data['mode'], 'String');
        if (data.hasOwnProperty('means_of_payment')) obj.meansOfPayment = _ApiClient.ApiClient.convertToType(data['means_of_payment'], 'String');
        if (data.hasOwnProperty('means_of_payment_hint')) obj.meansOfPaymentHint = _ApiClient.ApiClient.convertToType(data['means_of_payment_hint'], 'String');
        if (data.hasOwnProperty('cash_discount')) obj.cashDiscount = _ApiClient.ApiClient.convertToType(data['cash_discount'], 'String');
        if (data.hasOwnProperty('cash_discount_timeframe')) obj.cashDiscountTimeframe = _ApiClient.ApiClient.convertToType(data['cash_discount_timeframe'], 'Number');
        if (data.hasOwnProperty('due_at')) obj.dueAt = _ApiClient.ApiClient.convertToType(data['due_at'], 'Date');
        if (data.hasOwnProperty('paid_at')) obj.paidAt = _ApiClient.ApiClient.convertToType(data['paid_at'], 'Date');
      }
      return obj;
    }
  }]);
  return PaymentTermsCreate;
}();
/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
exports.PaymentTermsCreate = PaymentTermsCreate;
PaymentTermsCreate.ModeEnum = {
  /**
   * value: "collecting"
   * @const
   */
  collecting: "collecting",
  /**
   * value: "postpaid"
   * @const
   */
  postpaid: "postpaid",
  /**
   * value: "prepaid"
   * @const
   */
  prepaid: "prepaid"
};
/**
 * A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank.
 * @member {module:model/PaymentTermsCreate.ModeEnum} mode
 */
PaymentTermsCreate.prototype.mode = undefined;

/**
 * Allowed values for the <code>meansOfPayment</code> property.
 * @enum {String}
 * @readonly
 */
PaymentTermsCreate.MeansOfPaymentEnum = {
  /**
   * value: "apple_pay"
   * @const
   */
  applePay: "apple_pay",
  /**
   * value: "bank_collection"
   * @const
   */
  bankCollection: "bank_collection",
  /**
   * value: "cash"
   * @const
   */
  cash: "cash",
  /**
   * value: "credit_card"
   * @const
   */
  creditCard: "credit_card",
  /**
   * value: "google_pay"
   * @const
   */
  googlePay: "google_pay",
  /**
   * value: "invoice"
   * @const
   */
  invoice: "invoice",
  /**
   * value: "paypal"
   * @const
   */
  paypal: "paypal",
  /**
   * value: "wire_transfer"
   * @const
   */
  wireTransfer: "wire_transfer"
};
/**
 * The financial instrument used to pay for this order
 * @member {module:model/PaymentTermsCreate.MeansOfPaymentEnum} meansOfPayment
 */
PaymentTermsCreate.prototype.meansOfPayment = undefined;

/**
 * A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank.
 * @member {String} meansOfPaymentHint
 */
PaymentTermsCreate.prototype.meansOfPaymentHint = undefined;

/**
 * A decimal representation of a percentage of the payable order gross total that will be discounted if the amount due is paid within the timeframe specified in the `cash_discount_timeframe` attribute. For example a 3% cash discount can be granted when the order is paid within 10 days. This has no effect on the order total's, as the customer is expected to subtract the discount themselves from the order's gross total.
 * @member {String} cashDiscount
 */
PaymentTermsCreate.prototype.cashDiscount = undefined;

/**
 * The amount of days after which the order must be paid to entitle the customer to a cash discount. Must be set once the `cash_discount` attribute is set.
 * @member {Number} cashDiscountTimeframe
 */
PaymentTermsCreate.prototype.cashDiscountTimeframe = undefined;

/**
 * The date at which this order was paid in full.
 * @member {Date} dueAt
 */
PaymentTermsCreate.prototype.dueAt = undefined;

/**
 * The date at which the full order gross total is due.
 * @member {Date} paidAt
 */
PaymentTermsCreate.prototype.paidAt = undefined;

// Implement OneOfExpandedOrderCreatePaymentTerms interface: