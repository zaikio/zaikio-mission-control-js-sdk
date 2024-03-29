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
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.0.0
 */
export class Milestone {
  /**
   * Constructs a new <code>Milestone</code>.
   * @alias module:model/Milestone
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/Milestone.KindEnum} The kind of a milestone represents the classification of that Milestone within the printing life cycle. This could be something well-known such as \"prepress\" or for custom groups of Worksteps, can be set to \"custom\", in which case it is required to set the `description` attribute.
   * @param description {String} A short, human readable description of this Milestone. Required to be used if the `kind` attribute is set to `custom`, otherwise optional.
   * @param position {Number} A simple sort-order of the Milestones for this job. The lower the number, the earlier in the workflow this Milestone sits. If no `custom` Milestones are present, this can be left blank for all milestones and they will be sorted accordingly.
   * @param jobId {String} 
   * @param expectedStartAt {Date} The predicted or expected starting timestamp for worksteps within this Milestone to be commenced.
   * @param actualStartAt {Date} The actual time that work on this Milestone was begun. Automatically calculated from the first commenced workstep within the Milestone if not explicitly set.
   * @param expectedFinishAt {Date} The predicted or expected finishing timestamp for worksteps within this Milestone to be completed.
   * @param actualFinishAt {Date} The actual time that work on this Milestone was completed. Automatically calculated from the final completion timestamp of the contained worksteps if not explicitly set.
   * @param lastUpdateAt {Date} The last time a Workstep within this Milestone was updated.
   */
  constructor(id, createdAt, updatedAt, kind, description, position, jobId, expectedStartAt, actualStartAt, expectedFinishAt, actualFinishAt, lastUpdateAt) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
    this.description = description;
    this.position = position;
    this.jobId = jobId;
    this.expectedStartAt = expectedStartAt;
    this.actualStartAt = actualStartAt;
    this.expectedFinishAt = expectedFinishAt;
    this.actualFinishAt = actualFinishAt;
    this.lastUpdateAt = lastUpdateAt;
  }

  /**
   * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Milestone} obj Optional instance to populate.
   * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Milestone();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'Number');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('expected_start_at'))
        obj.expectedStartAt = ApiClient.convertToType(data['expected_start_at'], 'Date');
      if (data.hasOwnProperty('actual_start_at'))
        obj.actualStartAt = ApiClient.convertToType(data['actual_start_at'], 'Date');
      if (data.hasOwnProperty('expected_finish_at'))
        obj.expectedFinishAt = ApiClient.convertToType(data['expected_finish_at'], 'Date');
      if (data.hasOwnProperty('actual_finish_at'))
        obj.actualFinishAt = ApiClient.convertToType(data['actual_finish_at'], 'Date');
      if (data.hasOwnProperty('last_update_at'))
        obj.lastUpdateAt = ApiClient.convertToType(data['last_update_at'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Milestone.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Milestone.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Milestone.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Milestone.KindEnum = {
  /**
   * value: "estimation"
   * @const
   */
  estimation: "estimation",

  /**
   * value: "logistics"
   * @const
   */
  logistics: "logistics",

  /**
   * value: "other"
   * @const
   */
  other: "other",

  /**
   * value: "postpress"
   * @const
   */
  postpress: "postpress",

  /**
   * value: "prepress"
   * @const
   */
  prepress: "prepress",

  /**
   * value: "press"
   * @const
   */
  press: "press"
};
/**
 * The kind of a milestone represents the classification of that Milestone within the printing life cycle. This could be something well-known such as \"prepress\" or for custom groups of Worksteps, can be set to \"custom\", in which case it is required to set the `description` attribute.
 * @member {module:model/Milestone.KindEnum} kind
 */
Milestone.prototype.kind = undefined;

/**
 * A short, human readable description of this Milestone. Required to be used if the `kind` attribute is set to `custom`, otherwise optional.
 * @member {String} description
 */
Milestone.prototype.description = undefined;

/**
 * A simple sort-order of the Milestones for this job. The lower the number, the earlier in the workflow this Milestone sits. If no `custom` Milestones are present, this can be left blank for all milestones and they will be sorted accordingly.
 * @member {Number} position
 */
Milestone.prototype.position = undefined;

/**
 * @member {String} jobId
 */
Milestone.prototype.jobId = undefined;

/**
 * The predicted or expected starting timestamp for worksteps within this Milestone to be commenced.
 * @member {Date} expectedStartAt
 */
Milestone.prototype.expectedStartAt = undefined;

/**
 * The actual time that work on this Milestone was begun. Automatically calculated from the first commenced workstep within the Milestone if not explicitly set.
 * @member {Date} actualStartAt
 */
Milestone.prototype.actualStartAt = undefined;

/**
 * The predicted or expected finishing timestamp for worksteps within this Milestone to be completed.
 * @member {Date} expectedFinishAt
 */
Milestone.prototype.expectedFinishAt = undefined;

/**
 * The actual time that work on this Milestone was completed. Automatically calculated from the final completion timestamp of the contained worksteps if not explicitly set.
 * @member {Date} actualFinishAt
 */
Milestone.prototype.actualFinishAt = undefined;

/**
 * The last time a Workstep within this Milestone was updated.
 * @member {Date} lastUpdateAt
 */
Milestone.prototype.lastUpdateAt = undefined;

