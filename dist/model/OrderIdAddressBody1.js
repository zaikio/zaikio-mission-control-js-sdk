"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdAddressBody1 = void 0;
var _ApiClient = require("../ApiClient");
var _AddressUpdate = require("./AddressUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdAddressBody1 model module.
 * @module model/OrderIdAddressBody1
 * @version 1.0.0
 */
var OrderIdAddressBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdAddressBody1</code>.
   * @alias module:model/OrderIdAddressBody1
   * @class
   * @param address {module:model/AddressUpdate} 
   */
  function OrderIdAddressBody1(address) {
    _classCallCheck(this, OrderIdAddressBody1);
    this.address = address;
  }

  /**
   * Constructs a <code>OrderIdAddressBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdAddressBody1} obj Optional instance to populate.
   * @return {module:model/OrderIdAddressBody1} The populated <code>OrderIdAddressBody1</code> instance.
   */
  _createClass(OrderIdAddressBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdAddressBody1();
        if (data.hasOwnProperty('address')) obj.address = _AddressUpdate.AddressUpdate.constructFromObject(data['address']);
      }
      return obj;
    }
  }]);
  return OrderIdAddressBody1;
}();
/**
 * @member {module:model/AddressUpdate} address
 */
exports.OrderIdAddressBody1 = OrderIdAddressBody1;
OrderIdAddressBody1.prototype.address = undefined;