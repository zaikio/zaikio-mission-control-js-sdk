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
 * The FileActionUpdate model module.
 * @module model/FileActionUpdate
 * @version 1.0.0
 */
export class FileActionUpdate {
  /**
   * Constructs a new <code>FileActionUpdate</code>.
   * @alias module:model/FileActionUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FileActionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileActionUpdate} obj Optional instance to populate.
   * @return {module:model/FileActionUpdate} The populated <code>FileActionUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileActionUpdate();
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
 * @member {String} fileReferenceId
 */
FileActionUpdate.prototype.fileReferenceId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
FileActionUpdate.StateEnum = {
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
 * @member {module:model/FileActionUpdate.StateEnum} state
 */
FileActionUpdate.prototype.state = undefined;

/**
 * Indicates the progress of a file to be processed (e.g. 50% – 0.50)
 * @member {String} progress
 */
FileActionUpdate.prototype.progress = undefined;

