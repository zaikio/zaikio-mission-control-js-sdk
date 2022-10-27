"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissioningIdShipmentsBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CommissioningIdShipmentsBody model module.
 * @module model/CommissioningIdShipmentsBody
 * @version 1.0.0
 */
var CommissioningIdShipmentsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommissioningIdShipmentsBody</code>.
   * @alias module:model/CommissioningIdShipmentsBody
   * @class
   * @param shipment {Object} 
   */
  function CommissioningIdShipmentsBody(shipment) {
    _classCallCheck(this, CommissioningIdShipmentsBody);
    this.shipment = shipment;
  }

  /**
   * Constructs a <code>CommissioningIdShipmentsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningIdShipmentsBody} obj Optional instance to populate.
   * @return {module:model/CommissioningIdShipmentsBody} The populated <code>CommissioningIdShipmentsBody</code> instance.
   */
  _createClass(CommissioningIdShipmentsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommissioningIdShipmentsBody();
        if (data.hasOwnProperty('shipment')) obj.shipment = _ApiClient.ApiClient.convertToType(data['shipment'], Object);
      }
      return obj;
    }
  }]);
  return CommissioningIdShipmentsBody;
}();
/**
 * @member {Object} shipment
 */
exports.CommissioningIdShipmentsBody = CommissioningIdShipmentsBody;
CommissioningIdShipmentsBody.prototype.shipment = undefined;