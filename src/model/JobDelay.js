/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The JobDelay model module.
 * @module model/JobDelay
 * @version 1.0.0
 */
export class JobDelay {
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
  constructor(id, createdAt, updatedAt, jobId, description, reason, reportedById, reportedAt, clearedById, clearedAt) {
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
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobDelay();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('reported_by_id'))
        obj.reportedById = ApiClient.convertToType(data['reported_by_id'], 'String');
      if (data.hasOwnProperty('reported_at'))
        obj.reportedAt = ApiClient.convertToType(data['reported_at'], 'Date');
      if (data.hasOwnProperty('cleared_by_id'))
        obj.clearedById = ApiClient.convertToType(data['cleared_by_id'], 'String');
      if (data.hasOwnProperty('cleared_at'))
        obj.clearedAt = ApiClient.convertToType(data['cleared_at'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
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
