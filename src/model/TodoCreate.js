/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The TodoCreate model module.
 * @module model/TodoCreate
 * @version 1.0.0
 */
export class TodoCreate {
  /**
   * Constructs a new <code>TodoCreate</code>.
   * @alias module:model/TodoCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TodoCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TodoCreate} obj Optional instance to populate.
   * @return {module:model/TodoCreate} The populated <code>TodoCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TodoCreate();
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('milestone_id'))
        obj.milestoneId = ApiClient.convertToType(data['milestone_id'], 'String');
      if (data.hasOwnProperty('part_id'))
        obj.partId = ApiClient.convertToType(data['part_id'], 'String');
      if (data.hasOwnProperty('assigned_to_id'))
        obj.assignedToId = ApiClient.convertToType(data['assigned_to_id'], 'String');
      if (data.hasOwnProperty('creator_id'))
        obj.creatorId = ApiClient.convertToType(data['creator_id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('progress'))
        obj.progress = ApiClient.convertToType(data['progress'], 'String');
      if (data.hasOwnProperty('due_at'))
        obj.dueAt = ApiClient.convertToType(data['due_at'], 'Date');
      if (data.hasOwnProperty('started_at'))
        obj.startedAt = ApiClient.convertToType(data['started_at'], 'Date');
      if (data.hasOwnProperty('completed_at'))
        obj.completedAt = ApiClient.convertToType(data['completed_at'], 'Date');
      if (data.hasOwnProperty('canceled_at'))
        obj.canceledAt = ApiClient.convertToType(data['canceled_at'], 'Date');
    }
    return obj;
  }
}

/**
 * The ID of the Job related to the Todo task
 * @member {String} jobId
 */
TodoCreate.prototype.jobId = undefined;

/**
 * The ID of the Milestone related to the Todo task
 * @member {String} milestoneId
 */
TodoCreate.prototype.milestoneId = undefined;

/**
 * The ID of the Part related to the Todo task
 * @member {String} partId
 */
TodoCreate.prototype.partId = undefined;

/**
 * The ID of the Person assigned to the Todo task
 * @member {String} assignedToId
 */
TodoCreate.prototype.assignedToId = undefined;

/**
 * The ID of the Person who created the task
 * @member {String} creatorId
 */
TodoCreate.prototype.creatorId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
TodoCreate.KindEnum = {
  /**
   * value: "check_print_data"
   * @const
   */
  checkPrintData: "check_print_data",

  /**
   * value: "customer_review"
   * @const
   */
  customerReview: "customer_review",

  /**
   * value: "procurement"
   * @const
   */
  procurement: "procurement"
};
/**
 * @member {module:model/TodoCreate.KindEnum} kind
 */
TodoCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
TodoCreate.StateEnum = {
  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "draft"
   * @const
   */
  draft: "draft",

  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "running"
   * @const
   */
  running: "running",

  /**
   * value: "started"
   * @const
   */
  started: "started"
};
/**
 * The current state of this Todo - an indication of where in the completion lifecycle it is.
 * @member {module:model/TodoCreate.StateEnum} state
 */
TodoCreate.prototype.state = undefined;

/**
 * Numeric indicator of Todo task completion (0 - starting to 1 - completed).
 * @member {String} progress
 */
TodoCreate.prototype.progress = undefined;

/**
 * The date at which todo task is planned to be completed.
 * @member {Date} dueAt
 */
TodoCreate.prototype.dueAt = undefined;

/**
 * The date at which todo task was marked as started.
 * @member {Date} startedAt
 */
TodoCreate.prototype.startedAt = undefined;

/**
 * The date at which todo task reached was marked as completed.
 * @member {Date} completedAt
 */
TodoCreate.prototype.completedAt = undefined;

/**
 * The date at which this todo was canceled.
 * @member {Date} canceledAt
 */
TodoCreate.prototype.canceledAt = undefined;

