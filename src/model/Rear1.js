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
 * The Rear1 model module.
 * @module model/Rear1
 * @version 1.0.0
 */
export class Rear1 {
  /**
   * Constructs a new <code>Rear1</code>.
   * The content of the rear of this item
   * @alias module:model/Rear1
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Rear1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rear1} obj Optional instance to populate.
   * @return {module:model/Rear1} The populated <code>Rear1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Rear1();
      if (data.hasOwnProperty('orientation'))
        obj.orientation = ApiClient.convertToType(data['orientation'], 'Number');
      if (data.hasOwnProperty('page_number'))
        obj.pageNumber = ApiClient.convertToType(data['page_number'], 'Number');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {Number}
 * @readonly
 */
Rear1.OrientationEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 90
   * @const
   */
  _90: 90,

  /**
   * value: 180
   * @const
   */
  _180: 180,

  /**
   * value: 270
   * @const
   */
  _270: 270
};
/**
 * @member {module:model/Rear1.OrientationEnum} orientation
 */
Rear1.prototype.orientation = undefined;

/**
 * @member {Number} pageNumber
 */
Rear1.prototype.pageNumber = undefined;

/**
 * @member {String} reference
 */
Rear1.prototype.reference = undefined;

