"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishedProductUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishedProductUpdate model module.
 * @module model/FinishedProductUpdate
 * @version 1.0.0
 */
var FinishedProductUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishedProductUpdate</code>.
   * A FinishedProduct represents the final destination of the production path. It serves as a marker of the completion of the manufacturing steps, and holds the progress information of how much has been completed.
   * @alias module:model/FinishedProductUpdate
   * @class
   */
  function FinishedProductUpdate() {
    _classCallCheck(this, FinishedProductUpdate);
  }

  /**
   * Constructs a <code>FinishedProductUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishedProductUpdate} obj Optional instance to populate.
   * @return {module:model/FinishedProductUpdate} The populated <code>FinishedProductUpdate</code> instance.
   */
  _createClass(FinishedProductUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishedProductUpdate();
        if (data.hasOwnProperty('expected_quantity')) obj.expectedQuantity = _ApiClient.ApiClient.convertToType(data['expected_quantity'], 'Number');
        if (data.hasOwnProperty('actual_quantity')) obj.actualQuantity = _ApiClient.ApiClient.convertToType(data['actual_quantity'], 'Number');
        if (data.hasOwnProperty('completion_percentage')) obj.completionPercentage = _ApiClient.ApiClient.convertToType(data['completion_percentage'], 'String');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('creating_workstep_id')) obj.creatingWorkstepId = _ApiClient.ApiClient.convertToType(data['creating_workstep_id'], 'String');
      }
      return obj;
    }
  }]);
  return FinishedProductUpdate;
}();
/**
 * The number of items of this that should be produced, inferred from Job.quantity if not provided
 * @member {Number} expectedQuantity
 */
exports.FinishedProductUpdate = FinishedProductUpdate;
FinishedProductUpdate.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
FinishedProductUpdate.prototype.actualQuantity = undefined;

/**
 * The current completion percentage of the expected quantity to be produced
 * @member {String} completionPercentage
 */
FinishedProductUpdate.prototype.completionPercentage = undefined;

/**
 * @member {String} jobId
 */
FinishedProductUpdate.prototype.jobId = undefined;

/**
 * The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path.
 * @member {String} creatingWorkstepId
 */
FinishedProductUpdate.prototype.creatingWorkstepId = undefined;