"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobDelay = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobDelay model module.
 * @module model/JobDelay
 * @version 1.0.0
 */
var JobDelay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobDelay</code>.
   * @alias module:model/JobDelay
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param jobId {String} The ID of the Job related to the delay
   * @param description {String} A description of the delay
   * @param reason {module:model/JobDelay.ReasonEnum} 
   * @param reportedById {String} The ID of the Person who first reported the delay
   * @param reportedAt {Date} The date at which the delay was first reported
   * @param clearedById {String} The ID of the Person who resolved the delay
   * @param clearedAt {Date} The date at which the delay was resolved
   */
  function JobDelay(id, createdAt, updatedAt, jobId, description, reason, reportedById, reportedAt, clearedById, clearedAt) {
    _classCallCheck(this, JobDelay);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.jobId = jobId;
    this.description = description;
    this.reason = reason;
    this.reportedById = reportedById;
    this.reportedAt = reportedAt;
    this.clearedById = clearedById;
    this.clearedAt = clearedAt;
  }

  /**
   * Constructs a <code>JobDelay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDelay} obj Optional instance to populate.
   * @return {module:model/JobDelay} The populated <code>JobDelay</code> instance.
   */
  _createClass(JobDelay, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobDelay();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
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
  return JobDelay;
}();
/**
 * @member {String} id
 */
exports.JobDelay = JobDelay;
JobDelay.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
JobDelay.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
JobDelay.prototype.updatedAt = undefined;

/**
 * The ID of the Job related to the delay
 * @member {String} jobId
 */
JobDelay.prototype.jobId = undefined;

/**
 * A description of the delay
 * @member {String} description
 */
JobDelay.prototype.description = undefined;

/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
JobDelay.ReasonEnum = {
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
 * @member {module:model/JobDelay.ReasonEnum} reason
 */
JobDelay.prototype.reason = undefined;

/**
 * The ID of the Person who first reported the delay
 * @member {String} reportedById
 */
JobDelay.prototype.reportedById = undefined;

/**
 * The date at which the delay was first reported
 * @member {Date} reportedAt
 */
JobDelay.prototype.reportedAt = undefined;

/**
 * The ID of the Person who resolved the delay
 * @member {String} clearedById
 */
JobDelay.prototype.clearedById = undefined;

/**
 * The date at which the delay was resolved
 * @member {Date} clearedAt
 */
JobDelay.prototype.clearedAt = undefined;