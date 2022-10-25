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
import {MaterialEstimateUpdate} from './MaterialEstimateUpdate';

/**
 * The MaterialEstimatesMaterialEstimateIdBody model module.
 * @module model/MaterialEstimatesMaterialEstimateIdBody
 * @version 1.0.0
 */
export class MaterialEstimatesMaterialEstimateIdBody {
  /**
   * Constructs a new <code>MaterialEstimatesMaterialEstimateIdBody</code>.
   * @alias module:model/MaterialEstimatesMaterialEstimateIdBody
   * @class
   * @param materialEstimate {module:model/MaterialEstimateUpdate} 
   */
  constructor(materialEstimate) {
    this.materialEstimate = materialEstimate;
  }

  /**
   * Constructs a <code>MaterialEstimatesMaterialEstimateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaterialEstimatesMaterialEstimateIdBody} obj Optional instance to populate.
   * @return {module:model/MaterialEstimatesMaterialEstimateIdBody} The populated <code>MaterialEstimatesMaterialEstimateIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MaterialEstimatesMaterialEstimateIdBody();
      if (data.hasOwnProperty('material_estimate'))
        obj.materialEstimate = MaterialEstimateUpdate.constructFromObject(data['material_estimate']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MaterialEstimateUpdate} materialEstimate
 */
MaterialEstimatesMaterialEstimateIdBody.prototype.materialEstimate = undefined;

