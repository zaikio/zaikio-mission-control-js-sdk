"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickupsPickupIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _PickupUpdate = require("./PickupUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PickupsPickupIdBody model module.
 * @module model/PickupsPickupIdBody
 * @version 1.0.0
 */
var PickupsPickupIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PickupsPickupIdBody</code>.
   * @alias module:model/PickupsPickupIdBody
   * @class
   * @param pickup {module:model/PickupUpdate} 
   */
  function PickupsPickupIdBody(pickup) {
    _classCallCheck(this, PickupsPickupIdBody);
    this.pickup = pickup;
  }

  /**
   * Constructs a <code>PickupsPickupIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PickupsPickupIdBody} obj Optional instance to populate.
   * @return {module:model/PickupsPickupIdBody} The populated <code>PickupsPickupIdBody</code> instance.
   */
  _createClass(PickupsPickupIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PickupsPickupIdBody();
        if (data.hasOwnProperty('pickup')) obj.pickup = _PickupUpdate.PickupUpdate.constructFromObject(data['pickup']);
      }
      return obj;
    }
  }]);
  return PickupsPickupIdBody;
}();
/**
 * @member {module:model/PickupUpdate} pickup
 */
exports.PickupsPickupIdBody = PickupsPickupIdBody;
PickupsPickupIdBody.prototype.pickup = undefined;