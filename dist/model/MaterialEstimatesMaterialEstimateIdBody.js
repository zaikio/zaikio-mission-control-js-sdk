"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialEstimatesMaterialEstimateIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _MaterialEstimateUpdate = require("./MaterialEstimateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MaterialEstimatesMaterialEstimateIdBody model module.
 * @module model/MaterialEstimatesMaterialEstimateIdBody
 * @version 1.0.0
 */
var MaterialEstimatesMaterialEstimateIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MaterialEstimatesMaterialEstimateIdBody</code>.
   * @alias module:model/MaterialEstimatesMaterialEstimateIdBody
   * @class
   * @param materialEstimate {module:model/MaterialEstimateUpdate} 
   */
  function MaterialEstimatesMaterialEstimateIdBody(materialEstimate) {
    _classCallCheck(this, MaterialEstimatesMaterialEstimateIdBody);
    this.materialEstimate = materialEstimate;
  }

  /**
   * Constructs a <code>MaterialEstimatesMaterialEstimateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaterialEstimatesMaterialEstimateIdBody} obj Optional instance to populate.
   * @return {module:model/MaterialEstimatesMaterialEstimateIdBody} The populated <code>MaterialEstimatesMaterialEstimateIdBody</code> instance.
   */
  _createClass(MaterialEstimatesMaterialEstimateIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MaterialEstimatesMaterialEstimateIdBody();
        if (data.hasOwnProperty('material_estimate')) obj.materialEstimate = _MaterialEstimateUpdate.MaterialEstimateUpdate.constructFromObject(data['material_estimate']);
      }
      return obj;
    }
  }]);
  return MaterialEstimatesMaterialEstimateIdBody;
}();
/**
 * @member {module:model/MaterialEstimateUpdate} materialEstimate
 */
exports.MaterialEstimatesMaterialEstimateIdBody = MaterialEstimatesMaterialEstimateIdBody;
MaterialEstimatesMaterialEstimateIdBody.prototype.materialEstimate = undefined;