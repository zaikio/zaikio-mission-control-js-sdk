"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedShipmentCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedShipmentCreate model module.
 * @module model/ExtendedShipmentCreate
 * @version 1.0.0
 */
var ExtendedShipmentCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedShipmentCreate</code>.
   * @alias module:model/ExtendedShipmentCreate
   * @class
   */
  function ExtendedShipmentCreate() {
    _classCallCheck(this, ExtendedShipmentCreate);
  }

  /**
   * Constructs a <code>ExtendedShipmentCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedShipmentCreate} obj Optional instance to populate.
   * @return {module:model/ExtendedShipmentCreate} The populated <code>ExtendedShipmentCreate</code> instance.
   */
  _createClass(ExtendedShipmentCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedShipmentCreate();
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
      }
      return obj;
    }
  }]);
  return ExtendedShipmentCreate;
}();
/**
 * @member {Object} address
 */
exports.ExtendedShipmentCreate = ExtendedShipmentCreate;
ExtendedShipmentCreate.prototype.address = undefined;