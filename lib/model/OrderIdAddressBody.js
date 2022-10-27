"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdAddressBody = void 0;
var _ApiClient = require("../ApiClient");
var _AddressCreate = require("./AddressCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdAddressBody model module.
 * @module model/OrderIdAddressBody
 * @version 1.0.0
 */
var OrderIdAddressBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdAddressBody</code>.
   * @alias module:model/OrderIdAddressBody
   * @class
   * @param address {module:model/AddressCreate} 
   */
  function OrderIdAddressBody(address) {
    _classCallCheck(this, OrderIdAddressBody);
    this.address = address;
  }

  /**
   * Constructs a <code>OrderIdAddressBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdAddressBody} obj Optional instance to populate.
   * @return {module:model/OrderIdAddressBody} The populated <code>OrderIdAddressBody</code> instance.
   */
  _createClass(OrderIdAddressBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdAddressBody();
        if (data.hasOwnProperty('address')) obj.address = _AddressCreate.AddressCreate.constructFromObject(data['address']);
      }
      return obj;
    }
  }]);
  return OrderIdAddressBody;
}();
/**
 * @member {module:model/AddressCreate} address
 */
exports.OrderIdAddressBody = OrderIdAddressBody;
OrderIdAddressBody.prototype.address = undefined;