"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepEstimatesWorkstepEstimateIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepEstimateUpdate = require("./WorkstepEstimateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepEstimatesWorkstepEstimateIdBody model module.
 * @module model/WorkstepEstimatesWorkstepEstimateIdBody
 * @version 1.0.0
 */
var WorkstepEstimatesWorkstepEstimateIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepEstimatesWorkstepEstimateIdBody</code>.
   * @alias module:model/WorkstepEstimatesWorkstepEstimateIdBody
   * @class
   * @param workstepEstimate {module:model/WorkstepEstimateUpdate} 
   */
  function WorkstepEstimatesWorkstepEstimateIdBody(workstepEstimate) {
    _classCallCheck(this, WorkstepEstimatesWorkstepEstimateIdBody);
    this.workstepEstimate = workstepEstimate;
  }

  /**
   * Constructs a <code>WorkstepEstimatesWorkstepEstimateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepEstimatesWorkstepEstimateIdBody} obj Optional instance to populate.
   * @return {module:model/WorkstepEstimatesWorkstepEstimateIdBody} The populated <code>WorkstepEstimatesWorkstepEstimateIdBody</code> instance.
   */
  _createClass(WorkstepEstimatesWorkstepEstimateIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepEstimatesWorkstepEstimateIdBody();
        if (data.hasOwnProperty('workstep_estimate')) obj.workstepEstimate = _WorkstepEstimateUpdate.WorkstepEstimateUpdate.constructFromObject(data['workstep_estimate']);
      }
      return obj;
    }
  }]);
  return WorkstepEstimatesWorkstepEstimateIdBody;
}();
/**
 * @member {module:model/WorkstepEstimateUpdate} workstepEstimate
 */
exports.WorkstepEstimatesWorkstepEstimateIdBody = WorkstepEstimatesWorkstepEstimateIdBody;
WorkstepEstimatesWorkstepEstimateIdBody.prototype.workstepEstimate = undefined;