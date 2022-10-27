"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissioningIdPickupsBody = void 0;
var _ApiClient = require("../ApiClient");
var _PickupCreate = require("./PickupCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CommissioningIdPickupsBody model module.
 * @module model/CommissioningIdPickupsBody
 * @version 1.0.0
 */
var CommissioningIdPickupsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommissioningIdPickupsBody</code>.
   * @alias module:model/CommissioningIdPickupsBody
   * @class
   * @param pickup {module:model/PickupCreate} 
   */
  function CommissioningIdPickupsBody(pickup) {
    _classCallCheck(this, CommissioningIdPickupsBody);
    this.pickup = pickup;
  }

  /**
   * Constructs a <code>CommissioningIdPickupsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningIdPickupsBody} obj Optional instance to populate.
   * @return {module:model/CommissioningIdPickupsBody} The populated <code>CommissioningIdPickupsBody</code> instance.
   */
  _createClass(CommissioningIdPickupsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommissioningIdPickupsBody();
        if (data.hasOwnProperty('pickup')) obj.pickup = _PickupCreate.PickupCreate.constructFromObject(data['pickup']);
      }
      return obj;
    }
  }]);
  return CommissioningIdPickupsBody;
}();
/**
 * @member {module:model/PickupCreate} pickup
 */
exports.CommissioningIdPickupsBody = CommissioningIdPickupsBody;
CommissioningIdPickupsBody.prototype.pickup = undefined;