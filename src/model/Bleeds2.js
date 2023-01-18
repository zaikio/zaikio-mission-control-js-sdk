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
 * The Bleeds2 model module.
 * @module model/Bleeds2
 * @version 1.0.0
 */
export class Bleeds2 {
  /**
   * Constructs a new <code>Bleeds2</code>.
   * @alias module:model/Bleeds2
   * @class
   * @param left {Number} 
   * @param top {Number} 
   * @param right {Number} 
   * @param bottom {Number} 
   */
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  /**
   * Constructs a <code>Bleeds2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bleeds2} obj Optional instance to populate.
   * @return {module:model/Bleeds2} The populated <code>Bleeds2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Bleeds2();
      if (data.hasOwnProperty('left'))
        obj.left = ApiClient.convertToType(data['left'], 'Number');
      if (data.hasOwnProperty('top'))
        obj.top = ApiClient.convertToType(data['top'], 'Number');
      if (data.hasOwnProperty('right'))
        obj.right = ApiClient.convertToType(data['right'], 'Number');
      if (data.hasOwnProperty('bottom'))
        obj.bottom = ApiClient.convertToType(data['bottom'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} left
 */
Bleeds2.prototype.left = undefined;

/**
 * @member {Number} top
 */
Bleeds2.prototype.top = undefined;

/**
 * @member {Number} right
 */
Bleeds2.prototype.right = undefined;

/**
 * @member {Number} bottom
 */
Bleeds2.prototype.bottom = undefined;

