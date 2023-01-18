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
 * The Position model module.
 * @module model/Position
 * @version 1.0.0
 */
export class Position {
  /**
   * Constructs a new <code>Position</code>.
   * The position of this item within its parent
   * @alias module:model/Position
   * @class
   * @param x {Number} 
   * @param y {Number} 
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position} obj Optional instance to populate.
   * @return {module:model/Position} The populated <code>Position</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Position();
      if (data.hasOwnProperty('x'))
        obj.x = ApiClient.convertToType(data['x'], 'Number');
      if (data.hasOwnProperty('y'))
        obj.y = ApiClient.convertToType(data['y'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} x
 */
Position.prototype.x = undefined;

/**
 * @member {Number} y
 */
Position.prototype.y = undefined;

