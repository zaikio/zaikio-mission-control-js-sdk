"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdPaymentTermsBody1 = void 0;
var _ApiClient = require("../ApiClient");
var _PaymentTermsUpdate = require("./PaymentTermsUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdPaymentTermsBody1 model module.
 * @module model/OrderIdPaymentTermsBody1
 * @version 1.0.0
 */
var OrderIdPaymentTermsBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdPaymentTermsBody1</code>.
   * @alias module:model/OrderIdPaymentTermsBody1
   * @class
   * @param paymentTerms {module:model/PaymentTermsUpdate} 
   */
  function OrderIdPaymentTermsBody1(paymentTerms) {
    _classCallCheck(this, OrderIdPaymentTermsBody1);
    this.paymentTerms = paymentTerms;
  }

  /**
   * Constructs a <code>OrderIdPaymentTermsBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdPaymentTermsBody1} obj Optional instance to populate.
   * @return {module:model/OrderIdPaymentTermsBody1} The populated <code>OrderIdPaymentTermsBody1</code> instance.
   */
  _createClass(OrderIdPaymentTermsBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdPaymentTermsBody1();
        if (data.hasOwnProperty('payment_terms')) obj.paymentTerms = _PaymentTermsUpdate.PaymentTermsUpdate.constructFromObject(data['payment_terms']);
      }
      return obj;
    }
  }]);
  return OrderIdPaymentTermsBody1;
}();
/**
 * @member {module:model/PaymentTermsUpdate} paymentTerms
 */
exports.OrderIdPaymentTermsBody1 = OrderIdPaymentTermsBody1;
OrderIdPaymentTermsBody1.prototype.paymentTerms = undefined;