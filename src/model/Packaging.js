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
 * The Packaging model module.
 * @module model/Packaging
 * @version 1.0.0
 */
export class Packaging {
  /**
   * Constructs a new <code>Packaging</code>.
   * @alias module:model/Packaging
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param jobId {String} 
   * @param previousPackagingId {String} The UUID of a packaging which has to be packed into this packaging.
   * @param kind {module:model/Packaging.KindEnum} The kind of the packaging
   * @param amount {Number} The amount of products to be packed in the chosen kind of the packaging.
   */
  constructor(id, createdAt, updatedAt, jobId, previousPackagingId, kind, amount) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.jobId = jobId;
    this.previousPackagingId = previousPackagingId;
    this.kind = kind;
    this.amount = amount;
  }

  /**
   * Constructs a <code>Packaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Packaging} obj Optional instance to populate.
   * @return {module:model/Packaging} The populated <code>Packaging</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Packaging();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('previous_packaging_id'))
        obj.previousPackagingId = ApiClient.convertToType(data['previous_packaging_id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Packaging.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Packaging.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Packaging.prototype.updatedAt = undefined;

/**
 * @member {String} jobId
 */
Packaging.prototype.jobId = undefined;

/**
 * The UUID of a packaging which has to be packed into this packaging.
 * @member {String} previousPackagingId
 */
Packaging.prototype.previousPackagingId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Packaging.KindEnum = {
  /**
   * value: "addressing"
   * @const
   */
  addressing: "addressing",

  /**
   * value: "banding"
   * @const
   */
  banding: "banding",

  /**
   * value: "boxing"
   * @const
   */
  boxing: "boxing",

  /**
   * value: "counting"
   * @const
   */
  counting: "counting",

  /**
   * value: "filing"
   * @const
   */
  filing: "filing",

  /**
   * value: "franking"
   * @const
   */
  franking: "franking",

  /**
   * value: "shrink_wrapping"
   * @const
   */
  shrinkWrapping: "shrink_wrapping",

  /**
   * value: "wrapping"
   * @const
   */
  wrapping: "wrapping"
};
/**
 * The kind of the packaging
 * @member {module:model/Packaging.KindEnum} kind
 */
Packaging.prototype.kind = undefined;

/**
 * The amount of products to be packed in the chosen kind of the packaging.
 * @member {Number} amount
 */
Packaging.prototype.amount = undefined;

