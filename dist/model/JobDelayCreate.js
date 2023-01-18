"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobDelayCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobDelayCreate model module.
 * @module model/JobDelayCreate
 * @version 1.0.0
 */
var JobDelayCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobDelayCreate</code>.
   * @alias module:model/JobDelayCreate
   * @class
   */
  function JobDelayCreate() {
    _classCallCheck(this, JobDelayCreate);
  }

  /**
   * Constructs a <code>JobDelayCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDelayCreate} obj Optional instance to populate.
   * @return {module:model/JobDelayCreate} The populated <code>JobDelayCreate</code> instance.
   */
  _createClass(JobDelayCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobDelayCreate();
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
  return JobDelayCreate;
}();
/**
 * The ID of the Job related to the delay
 * @member {String} jobId
 */
exports.JobDelayCreate = JobDelayCreate;
JobDelayCreate.prototype.jobId = undefined;

/**
 * A description of the delay
 * @member {String} description
 */
JobDelayCreate.prototype.description = undefined;

/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
JobDelayCreate.ReasonEnum = {
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
 * @member {module:model/JobDelayCreate.ReasonEnum} reason
 */
JobDelayCreate.prototype.reason = undefined;

/**
 * The ID of the Person who first reported the delay
 * @member {String} reportedById
 */
JobDelayCreate.prototype.reportedById = undefined;

/**
 * The date at which the delay was first reported
 * @member {Date} reportedAt
 */
JobDelayCreate.prototype.reportedAt = undefined;

/**
 * The ID of the Person who resolved the delay
 * @member {String} clearedById
 */
JobDelayCreate.prototype.clearedById = undefined;

/**
 * The date at which the delay was resolved
 * @member {Date} clearedAt
 */
JobDelayCreate.prototype.clearedAt = undefined;