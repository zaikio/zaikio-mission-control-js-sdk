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
 * The FinishingApplication model module.
 * @module model/FinishingApplication
 * @version 1.0.0
 */
export class FinishingApplication {
  /**
   * Constructs a new <code>FinishingApplication</code>.
   * @alias module:model/FinishingApplication
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param finishingId {String} 
   * @param partId {String} 
   */
  constructor(id, createdAt, updatedAt, finishingId, partId) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.finishingId = finishingId;
    this.partId = partId;
  }

  /**
   * Constructs a <code>FinishingApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingApplication} obj Optional instance to populate.
   * @return {module:model/FinishingApplication} The populated <code>FinishingApplication</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FinishingApplication();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('finishing_id'))
        obj.finishingId = ApiClient.convertToType(data['finishing_id'], 'String');
      if (data.hasOwnProperty('part_id'))
        obj.partId = ApiClient.convertToType(data['part_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
FinishingApplication.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FinishingApplication.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FinishingApplication.prototype.updatedAt = undefined;

/**
 * @member {String} finishingId
 */
FinishingApplication.prototype.finishingId = undefined;

/**
 * @member {String} partId
 */
FinishingApplication.prototype.partId = undefined;

