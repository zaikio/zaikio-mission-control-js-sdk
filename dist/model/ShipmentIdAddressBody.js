"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShipmentIdAddressBody = void 0;
var _ApiClient = require("../ApiClient");
var _AddressCreate = require("./AddressCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ShipmentIdAddressBody model module.
 * @module model/ShipmentIdAddressBody
 * @version 1.0.0
 */
var ShipmentIdAddressBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShipmentIdAddressBody</code>.
   * @alias module:model/ShipmentIdAddressBody
   * @class
   * @param address {module:model/AddressCreate} 
   */
  function ShipmentIdAddressBody(address) {
    _classCallCheck(this, ShipmentIdAddressBody);
    this.address = address;
  }

  /**
   * Constructs a <code>ShipmentIdAddressBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentIdAddressBody} obj Optional instance to populate.
   * @return {module:model/ShipmentIdAddressBody} The populated <code>ShipmentIdAddressBody</code> instance.
   */
  _createClass(ShipmentIdAddressBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShipmentIdAddressBody();
        if (data.hasOwnProperty('address')) obj.address = _AddressCreate.AddressCreate.constructFromObject(data['address']);
      }
      return obj;
    }
  }]);
  return ShipmentIdAddressBody;
}();
/**
 * @member {module:model/AddressCreate} address
 */
exports.ShipmentIdAddressBody = ShipmentIdAddressBody;
ShipmentIdAddressBody.prototype.address = undefined;