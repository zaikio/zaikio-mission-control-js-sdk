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
import {CommissioningCreate} from './CommissioningCreate';

/**
 * The CommissioningsBody model module.
 * @module model/CommissioningsBody
 * @version 1.0.0
 */
export class CommissioningsBody {
  /**
   * Constructs a new <code>CommissioningsBody</code>.
   * @alias module:model/CommissioningsBody
   * @class
   * @param commissioning {module:model/CommissioningCreate} 
   */
  constructor(commissioning) {
    this.commissioning = commissioning;
  }

  /**
   * Constructs a <code>CommissioningsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningsBody} obj Optional instance to populate.
   * @return {module:model/CommissioningsBody} The populated <code>CommissioningsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommissioningsBody();
      if (data.hasOwnProperty('commissioning'))
        obj.commissioning = CommissioningCreate.constructFromObject(data['commissioning']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CommissioningCreate} commissioning
 */
CommissioningsBody.prototype.commissioning = undefined;

