"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOrderIdBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrdersOrderIdBody model module.
 * @module model/OrdersOrderIdBody
 * @version 1.0.0
 */
var OrdersOrderIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrdersOrderIdBody</code>.
   * @alias module:model/OrdersOrderIdBody
   * @class
   * @param order {Object} 
   */
  function OrdersOrderIdBody(order) {
    _classCallCheck(this, OrdersOrderIdBody);
    this.order = order;
  }

  /**
   * Constructs a <code>OrdersOrderIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrdersOrderIdBody} obj Optional instance to populate.
   * @return {module:model/OrdersOrderIdBody} The populated <code>OrdersOrderIdBody</code> instance.
   */
  _createClass(OrdersOrderIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrdersOrderIdBody();
        if (data.hasOwnProperty('order')) obj.order = _ApiClient.ApiClient.convertToType(data['order'], Object);
      }
      return obj;
    }
  }]);
  return OrdersOrderIdBody;
}();
/**
 * @member {Object} order
 */
exports.OrdersOrderIdBody = OrdersOrderIdBody;
OrdersOrderIdBody.prototype.order = undefined;