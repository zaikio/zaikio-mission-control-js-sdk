"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShipmentsShipmentIdBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ShipmentsShipmentIdBody model module.
 * @module model/ShipmentsShipmentIdBody
 * @version 1.0.0
 */
var ShipmentsShipmentIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShipmentsShipmentIdBody</code>.
   * @alias module:model/ShipmentsShipmentIdBody
   * @class
   * @param shipment {Object} 
   */
  function ShipmentsShipmentIdBody(shipment) {
    _classCallCheck(this, ShipmentsShipmentIdBody);
    this.shipment = shipment;
  }

  /**
   * Constructs a <code>ShipmentsShipmentIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentsShipmentIdBody} obj Optional instance to populate.
   * @return {module:model/ShipmentsShipmentIdBody} The populated <code>ShipmentsShipmentIdBody</code> instance.
   */
  _createClass(ShipmentsShipmentIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShipmentsShipmentIdBody();
        if (data.hasOwnProperty('shipment')) obj.shipment = _ApiClient.ApiClient.convertToType(data['shipment'], Object);
      }
      return obj;
    }
  }]);
  return ShipmentsShipmentIdBody;
}();
/**
 * @member {Object} shipment
 */
exports.ShipmentsShipmentIdBody = ShipmentsShipmentIdBody;
ShipmentsShipmentIdBody.prototype.shipment = undefined;