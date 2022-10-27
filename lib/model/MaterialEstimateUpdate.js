"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialEstimateUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MaterialEstimateUpdate model module.
 * @module model/MaterialEstimateUpdate
 * @version 1.0.0
 */
var MaterialEstimateUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MaterialEstimateUpdate</code>.
   * @alias module:model/MaterialEstimateUpdate
   * @class
   */
  function MaterialEstimateUpdate() {
    _classCallCheck(this, MaterialEstimateUpdate);
  }

  /**
   * Constructs a <code>MaterialEstimateUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaterialEstimateUpdate} obj Optional instance to populate.
   * @return {module:model/MaterialEstimateUpdate} The populated <code>MaterialEstimateUpdate</code> instance.
   */
  _createClass(MaterialEstimateUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MaterialEstimateUpdate();
        if (data.hasOwnProperty('workstep_estimate_id')) obj.workstepEstimateId = _ApiClient.ApiClient.convertToType(data['workstep_estimate_id'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'Number');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('costs')) obj.costs = _ApiClient.ApiClient.convertToType(data['costs'], 'Number');
      }
      return obj;
    }
  }]);
  return MaterialEstimateUpdate;
}();
/**
 * @member {String} workstepEstimateId
 */
exports.MaterialEstimateUpdate = MaterialEstimateUpdate;
MaterialEstimateUpdate.prototype.workstepEstimateId = undefined;

/**
 * An accurate description of the material, that allows the identification of the material by a human for sourcing and pricing.
 * @member {String} description
 */
MaterialEstimateUpdate.prototype.description = undefined;

/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */
MaterialEstimateUpdate.CategoryEnum = {
  /**
   * value: "ink/offset"
   * @const
   */
  inkoffset: "ink/offset",
  /**
   * value: "plates/offset"
   * @const
   */
  platesoffset: "plates/offset",
  /**
   * value: "substrate/paper"
   * @const
   */
  substratepaper: "substrate/paper"
};
/**
 * The category which this material belongs to. Can be left empty if unknown or no available category applies.
 * @member {module:model/MaterialEstimateUpdate.CategoryEnum} category
 */
MaterialEstimateUpdate.prototype.category = undefined;

/**
 * The amount of the material that is required to complete this task. Given in the unit defined in `unit`.
 * @member {Number} amount
 */
MaterialEstimateUpdate.prototype.amount = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
MaterialEstimateUpdate.UnitEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box",
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "g"
   * @const
   */
  g: "g",
  /**
   * value: "kg"
   * @const
   */
  kg: "kg",
  /**
   * value: "liter"
   * @const
   */
  liter: "liter",
  /**
   * value: "meter"
   * @const
   */
  meter: "meter",
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "pallet"
   * @const
   */
  pallet: "pallet",
  /**
   * value: "piece"
   * @const
   */
  piece: "piece",
  /**
   * value: "ream"
   * @const
   */
  ream: "ream",
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * The unit that the required `amount` of this material is given in.
 * @member {module:model/MaterialEstimateUpdate.UnitEnum} unit
 */
MaterialEstimateUpdate.prototype.unit = undefined;

/**
 * The costs for the total amount of material required to complete this task. This cost refers to the entire amount, not to a single unit. The costs are given in the integer sub-currency of the currency selected for the estimate (i.e. cents).
 * @member {Number} costs
 */
MaterialEstimateUpdate.prototype.costs = undefined;