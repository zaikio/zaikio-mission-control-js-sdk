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
import {IntermediateProductCreate} from './IntermediateProductCreate';

/**
 * The JobIdIntermediateProductsBody model module.
 * @module model/JobIdIntermediateProductsBody
 * @version 1.0.0
 */
export class JobIdIntermediateProductsBody {
  /**
   * Constructs a new <code>JobIdIntermediateProductsBody</code>.
   * @alias module:model/JobIdIntermediateProductsBody
   * @class
   * @param intermediateProduct {module:model/IntermediateProductCreate} 
   */
  constructor(intermediateProduct) {
    this.intermediateProduct = intermediateProduct;
  }

  /**
   * Constructs a <code>JobIdIntermediateProductsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdIntermediateProductsBody} obj Optional instance to populate.
   * @return {module:model/JobIdIntermediateProductsBody} The populated <code>JobIdIntermediateProductsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobIdIntermediateProductsBody();
      if (data.hasOwnProperty('intermediate_product'))
        obj.intermediateProduct = IntermediateProductCreate.constructFromObject(data['intermediate_product']);
    }
    return obj;
  }
}

/**
 * @member {module:model/IntermediateProductCreate} intermediateProduct
 */
JobIdIntermediateProductsBody.prototype.intermediateProduct = undefined;

