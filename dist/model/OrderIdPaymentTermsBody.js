"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdPaymentTermsBody = void 0;
var _ApiClient = require("../ApiClient");
var _PaymentTermsCreate = require("./PaymentTermsCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdPaymentTermsBody model module.
 * @module model/OrderIdPaymentTermsBody
 * @version 1.0.0
 */
var OrderIdPaymentTermsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdPaymentTermsBody</code>.
   * @alias module:model/OrderIdPaymentTermsBody
   * @class
   * @param paymentTerms {module:model/PaymentTermsCreate} 
   */
  function OrderIdPaymentTermsBody(paymentTerms) {
    _classCallCheck(this, OrderIdPaymentTermsBody);
    this.paymentTerms = paymentTerms;
  }

  /**
   * Constructs a <code>OrderIdPaymentTermsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdPaymentTermsBody} obj Optional instance to populate.
   * @return {module:model/OrderIdPaymentTermsBody} The populated <code>OrderIdPaymentTermsBody</code> instance.
   */
  _createClass(OrderIdPaymentTermsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdPaymentTermsBody();
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _PaymentTermsCreate.PaymentTermsCreate.constructFromObject(data['payment_terms']);
      }
      return obj;
    }
  }]);
  return OrderIdPaymentTermsBody;
}();
/**
 * @member {module:model/PaymentTermsCreate} paymentTerms
 */
exports.OrderIdPaymentTermsBody = OrderIdPaymentTermsBody;
OrderIdPaymentTermsBody.prototype.paymentTerms = undefined;