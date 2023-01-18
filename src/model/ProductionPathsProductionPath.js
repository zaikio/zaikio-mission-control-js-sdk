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
import {WorkstepCreate} from './WorkstepCreate';
import {WorkstepGroupCreate} from './WorkstepGroupCreate';

/**
 * The ProductionPathsProductionPath model module.
 * @module model/ProductionPathsProductionPath
 * @version 1.0.0
 */
export class ProductionPathsProductionPath {
  /**
   * Constructs a new <code>ProductionPathsProductionPath</code>.
   * @alias module:model/ProductionPathsProductionPath
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductionPathsProductionPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionPathsProductionPath} obj Optional instance to populate.
   * @return {module:model/ProductionPathsProductionPath} The populated <code>ProductionPathsProductionPath</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductionPathsProductionPath();
      if (data.hasOwnProperty('workstep_groups'))
        obj.workstepGroups = ApiClient.convertToType(data['workstep_groups'], [WorkstepGroupCreate]);
      if (data.hasOwnProperty('worksteps'))
        obj.worksteps = ApiClient.convertToType(data['worksteps'], [WorkstepCreate]);
      if (data.hasOwnProperty('intermediate_products'))
        obj.intermediateProducts = ApiClient.convertToType(data['intermediate_products'], [IntermediateProductCreate]);
      if (data.hasOwnProperty('finished_product'))
        obj.finishedProduct = ApiClient.convertToType(data['finished_product'], Object);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/WorkstepGroupCreate>} workstepGroups
 */
ProductionPathsProductionPath.prototype.workstepGroups = undefined;

/**
 * @member {Array.<module:model/WorkstepCreate>} worksteps
 */
ProductionPathsProductionPath.prototype.worksteps = undefined;

/**
 * @member {Array.<module:model/IntermediateProductCreate>} intermediateProducts
 */
ProductionPathsProductionPath.prototype.intermediateProducts = undefined;

/**
 * @member {Object} finishedProduct
 */
ProductionPathsProductionPath.prototype.finishedProduct = undefined;

