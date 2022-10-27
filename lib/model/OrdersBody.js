"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrdersBody model module.
 * @module model/OrdersBody
 * @version 1.0.0
 */
var OrdersBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrdersBody</code>.
   * @alias module:model/OrdersBody
   * @class
   * @param order {Object} 
   */
  function OrdersBody(order) {
    _classCallCheck(this, OrdersBody);
    this.order = order;
  }

  /**
   * Constructs a <code>OrdersBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrdersBody} obj Optional instance to populate.
   * @return {module:model/OrdersBody} The populated <code>OrdersBody</code> instance.
   */
  _createClass(OrdersBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrdersBody();
        if (data.hasOwnProperty('order')) obj.order = _ApiClient.ApiClient.convertToType(data['order'], Object);
      }
      return obj;
    }
  }]);
  return OrdersBody;
}();
/**
 * @member {Object} order
 */
exports.OrdersBody = OrdersBody;
OrdersBody.prototype.order = undefined;