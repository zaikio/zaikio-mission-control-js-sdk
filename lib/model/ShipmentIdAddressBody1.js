"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShipmentIdAddressBody1 = void 0;
var _ApiClient = require("../ApiClient");
var _AddressUpdate = require("./AddressUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ShipmentIdAddressBody1 model module.
 * @module model/ShipmentIdAddressBody1
 * @version 1.0.0
 */
var ShipmentIdAddressBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShipmentIdAddressBody1</code>.
   * @alias module:model/ShipmentIdAddressBody1
   * @class
   * @param address {module:model/AddressUpdate} 
   */
  function ShipmentIdAddressBody1(address) {
    _classCallCheck(this, ShipmentIdAddressBody1);
    this.address = address;
  }

  /**
   * Constructs a <code>ShipmentIdAddressBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentIdAddressBody1} obj Optional instance to populate.
   * @return {module:model/ShipmentIdAddressBody1} The populated <code>ShipmentIdAddressBody1</code> instance.
   */
  _createClass(ShipmentIdAddressBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShipmentIdAddressBody1();
        if (data.hasOwnProperty('address')) obj.address = _AddressUpdate.AddressUpdate.constructFromObject(data['address']);
      }
      return obj;
    }
  }]);
  return ShipmentIdAddressBody1;
}();
/**
 * @member {module:model/AddressUpdate} address
 */
exports.ShipmentIdAddressBody1 = ShipmentIdAddressBody1;
ShipmentIdAddressBody1.prototype.address = undefined;