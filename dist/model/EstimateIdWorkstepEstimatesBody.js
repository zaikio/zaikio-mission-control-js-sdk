"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstimateIdWorkstepEstimatesBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepEstimateCreate = require("./WorkstepEstimateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EstimateIdWorkstepEstimatesBody model module.
 * @module model/EstimateIdWorkstepEstimatesBody
 * @version 1.0.0
 */
var EstimateIdWorkstepEstimatesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimateIdWorkstepEstimatesBody</code>.
   * @alias module:model/EstimateIdWorkstepEstimatesBody
   * @class
   * @param workstepEstimate {module:model/WorkstepEstimateCreate} 
   */
  function EstimateIdWorkstepEstimatesBody(workstepEstimate) {
    _classCallCheck(this, EstimateIdWorkstepEstimatesBody);
    this.workstepEstimate = workstepEstimate;
  }

  /**
   * Constructs a <code>EstimateIdWorkstepEstimatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateIdWorkstepEstimatesBody} obj Optional instance to populate.
   * @return {module:model/EstimateIdWorkstepEstimatesBody} The populated <code>EstimateIdWorkstepEstimatesBody</code> instance.
   */
  _createClass(EstimateIdWorkstepEstimatesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimateIdWorkstepEstimatesBody();
        if (data.hasOwnProperty('workstep_estimate')) obj.workstepEstimate = _WorkstepEstimateCreate.WorkstepEstimateCreate.constructFromObject(data['workstep_estimate']);
      }
      return obj;
    }
  }]);
  return EstimateIdWorkstepEstimatesBody;
}();
/**
 * @member {module:model/WorkstepEstimateCreate} workstepEstimate
 */
exports.EstimateIdWorkstepEstimatesBody = EstimateIdWorkstepEstimatesBody;
EstimateIdWorkstepEstimatesBody.prototype.workstepEstimate = undefined;