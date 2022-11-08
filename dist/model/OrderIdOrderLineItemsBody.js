"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdOrderLineItemsBody = void 0;
var _ApiClient = require("../ApiClient");
var _OrderLineItemCreate = require("./OrderLineItemCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdOrderLineItemsBody model module.
 * @module model/OrderIdOrderLineItemsBody
 * @version 1.0.0
 */
var OrderIdOrderLineItemsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdOrderLineItemsBody</code>.
   * @alias module:model/OrderIdOrderLineItemsBody
   * @class
   * @param orderLineItem {module:model/OrderLineItemCreate} 
   */
  function OrderIdOrderLineItemsBody(orderLineItem) {
    _classCallCheck(this, OrderIdOrderLineItemsBody);
    this.orderLineItem = orderLineItem;
  }

  /**
   * Constructs a <code>OrderIdOrderLineItemsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdOrderLineItemsBody} obj Optional instance to populate.
   * @return {module:model/OrderIdOrderLineItemsBody} The populated <code>OrderIdOrderLineItemsBody</code> instance.
   */
  _createClass(OrderIdOrderLineItemsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdOrderLineItemsBody();
        if (data.hasOwnProperty('order_line_item')) obj.orderLineItem = _OrderLineItemCreate.OrderLineItemCreate.constructFromObject(data['order_line_item']);
      }
      return obj;
    }
  }]);
  return OrderIdOrderLineItemsBody;
}();
/**
 * @member {module:model/OrderLineItemCreate} orderLineItem
 */
exports.OrderIdOrderLineItemsBody = OrderIdOrderLineItemsBody;
OrderIdOrderLineItemsBody.prototype.orderLineItem = undefined;