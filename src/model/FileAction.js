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
 * The FileAction model module.
 * @module model/FileAction
 * @version 1.0.0
 */
export class FileAction {
  /**
   * Constructs a new <code>FileAction</code>.
   * @alias module:model/FileAction
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferenceId {String} 
   * @param state {module:model/FileAction.StateEnum} The current state of this file action
   * @param progress {String} Indicates the progress of a file to be processed (e.g. 50% – 0.50)
   */
  constructor(id, createdAt, updatedAt, fileReferenceId, state, progress) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferenceId = fileReferenceId;
    this.state = state;
    this.progress = progress;
  }

  /**
   * Constructs a <code>FileAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileAction} obj Optional instance to populate.
   * @return {module:model/FileAction} The populated <code>FileAction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileAction();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('file_reference_id'))
        obj.fileReferenceId = ApiClient.convertToType(data['file_reference_id'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('progress'))
        obj.progress = ApiClient.convertToType(data['progress'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
FileAction.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FileAction.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FileAction.prototype.updatedAt = undefined;

/**
 * @member {String} fileReferenceId
 */
FileAction.prototype.fileReferenceId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
FileAction.StateEnum = {
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "error"
   * @const
   */
  error: "error",

  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "started"
   * @const
   */
  started: "started"
};
/**
 * The current state of this file action
 * @member {module:model/FileAction.StateEnum} state
 */
FileAction.prototype.state = undefined;

/**
 * Indicates the progress of a file to be processed (e.g. 50% – 0.50)
 * @member {String} progress
 */
FileAction.prototype.progress = undefined;

