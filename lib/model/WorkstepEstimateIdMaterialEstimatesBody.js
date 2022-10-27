"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepEstimateIdMaterialEstimatesBody = void 0;
var _ApiClient = require("../ApiClient");
var _MaterialEstimateCreate = require("./MaterialEstimateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepEstimateIdMaterialEstimatesBody model module.
 * @module model/WorkstepEstimateIdMaterialEstimatesBody
 * @version 1.0.0
 */
var WorkstepEstimateIdMaterialEstimatesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepEstimateIdMaterialEstimatesBody</code>.
   * @alias module:model/WorkstepEstimateIdMaterialEstimatesBody
   * @class
   * @param materialEstimate {module:model/MaterialEstimateCreate} 
   */
  function WorkstepEstimateIdMaterialEstimatesBody(materialEstimate) {
    _classCallCheck(this, WorkstepEstimateIdMaterialEstimatesBody);
    this.materialEstimate = materialEstimate;
  }

  /**
   * Constructs a <code>WorkstepEstimateIdMaterialEstimatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepEstimateIdMaterialEstimatesBody} obj Optional instance to populate.
   * @return {module:model/WorkstepEstimateIdMaterialEstimatesBody} The populated <code>WorkstepEstimateIdMaterialEstimatesBody</code> instance.
   */
  _createClass(WorkstepEstimateIdMaterialEstimatesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepEstimateIdMaterialEstimatesBody();
        if (data.hasOwnProperty('material_estimate')) obj.materialEstimate = _MaterialEstimateCreate.MaterialEstimateCreate.constructFromObject(data['material_estimate']);
      }
      return obj;
    }
  }]);
  return WorkstepEstimateIdMaterialEstimatesBody;
}();
/**
 * @member {module:model/MaterialEstimateCreate} materialEstimate
 */
exports.WorkstepEstimateIdMaterialEstimatesBody = WorkstepEstimateIdMaterialEstimatesBody;
WorkstepEstimateIdMaterialEstimatesBody.prototype.materialEstimate = undefined;