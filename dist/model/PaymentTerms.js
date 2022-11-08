"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentTerms = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PaymentTerms model module.
 * @module model/PaymentTerms
 * @version 1.0.0
 */
var PaymentTerms = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentTerms</code>.
   * @alias module:model/PaymentTerms
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param mode {module:model/PaymentTerms.ModeEnum} A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank.
   * @param meansOfPayment {module:model/PaymentTerms.MeansOfPaymentEnum} The financial instrument used to pay for this order
   * @param meansOfPaymentHint {String} A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank.
   * @param cashDiscount {String} A decimal representation of a percentage of the payable order gross total that will be discounted if the amount due is paid within the timeframe specified in the `cash_discount_timeframe` attribute. For example a 3% cash discount can be granted when the order is paid within 10 days. This has no effect on the order total's, as the customer is expected to subtract the discount themselves from the order's gross total.
   * @param cashDiscountTimeframe {Number} The amount of days after which the order must be paid to entitle the customer to a cash discount. Must be set once the `cash_discount` attribute is set.
   * @param dueAt {Date} The date at which this order was paid in full.
   * @param paidAt {Date} The date at which the full order gross total is due.
   */
  function PaymentTerms(id, createdAt, updatedAt, mode, meansOfPayment, meansOfPaymentHint, cashDiscount, cashDiscountTimeframe, dueAt, paidAt) {
    _classCallCheck(this, PaymentTerms);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.mode = mode;
    this.meansOfPayment = meansOfPayment;
    this.meansOfPaymentHint = meansOfPaymentHint;
    this.cashDiscount = cashDiscount;
    this.cashDiscountTimeframe = cashDiscountTimeframe;
    this.dueAt = dueAt;
    this.paidAt = paidAt;
  }

  /**
   * Constructs a <code>PaymentTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentTerms} obj Optional instance to populate.
   * @return {module:model/PaymentTerms} The populated <code>PaymentTerms</code> instance.
   */
  _createClass(PaymentTerms, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentTerms();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
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
  return PaymentTerms;
}();
/**
 * @member {String} id
 */
exports.PaymentTerms = PaymentTerms;
PaymentTerms.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
PaymentTerms.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PaymentTerms.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
PaymentTerms.ModeEnum = {
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
 * @member {module:model/PaymentTerms.ModeEnum} mode
 */
PaymentTerms.prototype.mode = undefined;

/**
 * Allowed values for the <code>meansOfPayment</code> property.
 * @enum {String}
 * @readonly
 */
PaymentTerms.MeansOfPaymentEnum = {
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
 * @member {module:model/PaymentTerms.MeansOfPaymentEnum} meansOfPayment
 */
PaymentTerms.prototype.meansOfPayment = undefined;

/**
 * A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank.
 * @member {String} meansOfPaymentHint
 */
PaymentTerms.prototype.meansOfPaymentHint = undefined;

/**
 * A decimal representation of a percentage of the payable order gross total that will be discounted if the amount due is paid within the timeframe specified in the `cash_discount_timeframe` attribute. For example a 3% cash discount can be granted when the order is paid within 10 days. This has no effect on the order total's, as the customer is expected to subtract the discount themselves from the order's gross total.
 * @member {String} cashDiscount
 */
PaymentTerms.prototype.cashDiscount = undefined;

/**
 * The amount of days after which the order must be paid to entitle the customer to a cash discount. Must be set once the `cash_discount` attribute is set.
 * @member {Number} cashDiscountTimeframe
 */
PaymentTerms.prototype.cashDiscountTimeframe = undefined;

/**
 * The date at which this order was paid in full.
 * @member {Date} dueAt
 */
PaymentTerms.prototype.dueAt = undefined;

/**
 * The date at which the full order gross total is due.
 * @member {Date} paidAt
 */
PaymentTerms.prototype.paidAt = undefined;

// Implement OneOfExpandedOrderPaymentTerms interface: