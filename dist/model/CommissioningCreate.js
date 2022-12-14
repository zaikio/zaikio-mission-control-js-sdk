"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissioningCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CommissioningCreate model module.
 * @module model/CommissioningCreate
 * @version 1.0.0
 */
var CommissioningCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommissioningCreate</code>.
   * @alias module:model/CommissioningCreate
   * @class
   */
  function CommissioningCreate() {
    _classCallCheck(this, CommissioningCreate);
  }

  /**
   * Constructs a <code>CommissioningCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningCreate} obj Optional instance to populate.
   * @return {module:model/CommissioningCreate} The populated <code>CommissioningCreate</code> instance.
   */
  _createClass(CommissioningCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommissioningCreate();
        if (data.hasOwnProperty('references')) obj.references = _ApiClient.ApiClient.convertToType(data['references'], ['String']);
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('costs')) obj.costs = _ApiClient.ApiClient.convertToType(data['costs'], 'Number');
        if (data.hasOwnProperty('canceled_at')) obj.canceledAt = _ApiClient.ApiClient.convertToType(data['canceled_at'], 'Date');
      }
      return obj;
    }
  }]);
  return CommissioningCreate;
}();
/**
 * The the first reference of this commissioning is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
exports.CommissioningCreate = CommissioningCreate;
CommissioningCreate.prototype.references = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CommissioningCreate.StateEnum = {
  /**
   * value: "draft"
   * @const
   */
  draft: "draft",
  /**
   * value: "picking"
   * @const
   */
  picking: "picking",
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled"
};
/**
 * The current state of this Commissioning
 * @member {module:model/CommissioningCreate.StateEnum} state
 */
CommissioningCreate.prototype.state = undefined;

/**
 * The total costs (that is without taxes) of the commissioning in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} costs
 */
CommissioningCreate.prototype.costs = undefined;

/**
 * The date at which this commissioning was canceled. Only commissionings that were previously completed might be canceled. When this date is set, the commissioning `state` will equal `canceled`.
 * @member {Date} canceledAt
 */
CommissioningCreate.prototype.canceledAt = undefined;