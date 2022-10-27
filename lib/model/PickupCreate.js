"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickupCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PickupCreate model module.
 * @module model/PickupCreate
 * @version 1.0.0
 */
var PickupCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PickupCreate</code>.
   * @alias module:model/PickupCreate
   * @class
   */
  function PickupCreate() {
    _classCallCheck(this, PickupCreate);
  }

  /**
   * Constructs a <code>PickupCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PickupCreate} obj Optional instance to populate.
   * @return {module:model/PickupCreate} The populated <code>PickupCreate</code> instance.
   */
  _createClass(PickupCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PickupCreate();
        if (data.hasOwnProperty('references')) obj.references = _ApiClient.ApiClient.convertToType(data['references'], ['String']);
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('pick_up_at')) obj.pickUpAt = _ApiClient.ApiClient.convertToType(data['pick_up_at'], 'Date');
        if (data.hasOwnProperty('picked_up_at')) obj.pickedUpAt = _ApiClient.ApiClient.convertToType(data['picked_up_at'], 'Date');
      }
      return obj;
    }
  }]);
  return PickupCreate;
}();
/**
 * The the first reference of this pickup is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
exports.PickupCreate = PickupCreate;
PickupCreate.prototype.references = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
PickupCreate.StateEnum = {
  /**
   * value: "picked_up"
   * @const
   */
  pickedUp: "picked_up",
  /**
   * value: "waiting_for_commission"
   * @const
   */
  waitingForCommission: "waiting_for_commission"
};
/**
 * The current state of this pickup
 * @member {module:model/PickupCreate.StateEnum} state
 */
PickupCreate.prototype.state = undefined;

/**
 * The date on which this pickup is to take place.
 * @member {Date} pickUpAt
 */
PickupCreate.prototype.pickUpAt = undefined;

/**
 * The date at which this commissioning was picked up. When this date is set, the commissioning `state` will equal `picked_up`.
 * @member {Date} pickedUpAt
 */
PickupCreate.prototype.pickedUpAt = undefined;