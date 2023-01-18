"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobDelayUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobDelayUpdate model module.
 * @module model/JobDelayUpdate
 * @version 1.0.0
 */
var JobDelayUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobDelayUpdate</code>.
   * @alias module:model/JobDelayUpdate
   * @class
   */
  function JobDelayUpdate() {
    _classCallCheck(this, JobDelayUpdate);
  }

  /**
   * Constructs a <code>JobDelayUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDelayUpdate} obj Optional instance to populate.
   * @return {module:model/JobDelayUpdate} The populated <code>JobDelayUpdate</code> instance.
   */
  _createClass(JobDelayUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobDelayUpdate();
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('reason')) obj.reason = _ApiClient.ApiClient.convertToType(data['reason'], 'String');
        if (data.hasOwnProperty('reported_by_id')) obj.reportedById = _ApiClient.ApiClient.convertToType(data['reported_by_id'], 'String');
        if (data.hasOwnProperty('reported_at')) obj.reportedAt = _ApiClient.ApiClient.convertToType(data['reported_at'], 'Date');
        if (data.hasOwnProperty('cleared_by_id')) obj.clearedById = _ApiClient.ApiClient.convertToType(data['cleared_by_id'], 'String');
        if (data.hasOwnProperty('cleared_at')) obj.clearedAt = _ApiClient.ApiClient.convertToType(data['cleared_at'], 'Date');
      }
      return obj;
    }
  }]);
  return JobDelayUpdate;
}();
/**
 * The ID of the Job related to the delay
 * @member {String} jobId
 */
exports.JobDelayUpdate = JobDelayUpdate;
JobDelayUpdate.prototype.jobId = undefined;

/**
 * A description of the delay
 * @member {String} description
 */
JobDelayUpdate.prototype.description = undefined;

/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
JobDelayUpdate.ReasonEnum = {
  /**
   * value: "machine_unavailable"
   * @const
   */
  machineUnavailable: "machine_unavailable",
  /**
   * value: "materials_unavailable"
   * @const
   */
  materialsUnavailable: "materials_unavailable",
  /**
   * value: "other"
   * @const
   */
  other: "other",
  /**
   * value: "specialist_unavailable"
   * @const
   */
  specialistUnavailable: "specialist_unavailable"
};
/**
 * @member {module:model/JobDelayUpdate.ReasonEnum} reason
 */
JobDelayUpdate.prototype.reason = undefined;

/**
 * The ID of the Person who first reported the delay
 * @member {String} reportedById
 */
JobDelayUpdate.prototype.reportedById = undefined;

/**
 * The date at which the delay was first reported
 * @member {Date} reportedAt
 */
JobDelayUpdate.prototype.reportedAt = undefined;

/**
 * The ID of the Person who resolved the delay
 * @member {String} clearedById
 */
JobDelayUpdate.prototype.clearedById = undefined;

/**
 * The date at which the delay was resolved
 * @member {Date} clearedAt
 */
JobDelayUpdate.prototype.clearedAt = undefined;