"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderLineItemsOrderLineItemIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _OrderLineItemUpdate = require("./OrderLineItemUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderLineItemsOrderLineItemIdBody model module.
 * @module model/OrderLineItemsOrderLineItemIdBody
 * @version 1.0.0
 */
var OrderLineItemsOrderLineItemIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderLineItemsOrderLineItemIdBody</code>.
   * @alias module:model/OrderLineItemsOrderLineItemIdBody
   * @class
   * @param orderLineItem {module:model/OrderLineItemUpdate} 
   */
  function OrderLineItemsOrderLineItemIdBody(orderLineItem) {
    _classCallCheck(this, OrderLineItemsOrderLineItemIdBody);
    this.orderLineItem = orderLineItem;
  }

  /**
   * Constructs a <code>OrderLineItemsOrderLineItemIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderLineItemsOrderLineItemIdBody} obj Optional instance to populate.
   * @return {module:model/OrderLineItemsOrderLineItemIdBody} The populated <code>OrderLineItemsOrderLineItemIdBody</code> instance.
   */
  _createClass(OrderLineItemsOrderLineItemIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderLineItemsOrderLineItemIdBody();
        if (data.hasOwnProperty('order_line_item')) obj.orderLineItem = _OrderLineItemUpdate.OrderLineItemUpdate.constructFromObject(data['order_line_item']);
      }
      return obj;
    }
  }]);
  return OrderLineItemsOrderLineItemIdBody;
}();
/**
 * @member {module:model/OrderLineItemUpdate} orderLineItem
 */
exports.OrderLineItemsOrderLineItemIdBody = OrderLineItemsOrderLineItemIdBody;
OrderLineItemsOrderLineItemIdBody.prototype.orderLineItem = undefined;