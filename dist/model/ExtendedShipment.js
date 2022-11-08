"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedShipment = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedShipment model module.
 * @module model/ExtendedShipment
 * @version 1.0.0
 */
var ExtendedShipment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedShipment</code>.
   * @alias module:model/ExtendedShipment
   * @class
   * @param address {Object} 
   */
  function ExtendedShipment(address) {
    _classCallCheck(this, ExtendedShipment);
    this.address = address;
  }

  /**
   * Constructs a <code>ExtendedShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedShipment} obj Optional instance to populate.
   * @return {module:model/ExtendedShipment} The populated <code>ExtendedShipment</code> instance.
   */
  _createClass(ExtendedShipment, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedShipment();
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
      }
      return obj;
    }
  }]);
  return ExtendedShipment;
}();
/**
 * @member {Object} address
 */
exports.ExtendedShipment = ExtendedShipment;
ExtendedShipment.prototype.address = undefined;