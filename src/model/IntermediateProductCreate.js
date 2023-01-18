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
 * The IntermediateProductCreate model module.
 * @module model/IntermediateProductCreate
 * @version 1.0.0
 */
export class IntermediateProductCreate {
  /**
   * Constructs a new <code>IntermediateProductCreate</code>.
   * @alias module:model/IntermediateProductCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IntermediateProductCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntermediateProductCreate} obj Optional instance to populate.
   * @return {module:model/IntermediateProductCreate} The populated <code>IntermediateProductCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntermediateProductCreate();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('expected_quantity'))
        obj.expectedQuantity = ApiClient.convertToType(data['expected_quantity'], 'Number');
      if (data.hasOwnProperty('actual_quantity'))
        obj.actualQuantity = ApiClient.convertToType(data['actual_quantity'], 'Number');
      if (data.hasOwnProperty('expected_waste'))
        obj.expectedWaste = ApiClient.convertToType(data['expected_waste'], 'Number');
      if (data.hasOwnProperty('actual_waste'))
        obj.actualWaste = ApiClient.convertToType(data['actual_waste'], 'Number');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('creating_workstep_id'))
        obj.creatingWorkstepId = ApiClient.convertToType(data['creating_workstep_id'], 'String');
      if (data.hasOwnProperty('consuming_workstep_id'))
        obj.consumingWorkstepId = ApiClient.convertToType(data['consuming_workstep_id'], 'String');
      if (data.hasOwnProperty('layout'))
        obj.layout = ApiClient.convertToType(data['layout'], Object);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
IntermediateProductCreate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet",

  /**
   * value: "roll"
   * @const
   */
  roll: "roll",

  /**
   * value: "fold"
   * @const
   */
  fold: "fold",

  /**
   * value: "book_block"
   * @const
   */
  bookBlock: "book_block"
};
/**
 * @member {module:model/IntermediateProductCreate.KindEnum} kind
 */
IntermediateProductCreate.prototype.kind = undefined;

/**
 * The number of items of this that should be produced
 * @member {Number} expectedQuantity
 */
IntermediateProductCreate.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
IntermediateProductCreate.prototype.actualQuantity = undefined;

/**
 * How much waste is expected in the production of this
 * @member {Number} expectedWaste
 */
IntermediateProductCreate.prototype.expectedWaste = undefined;

/**
 * How much waste has been produced in the production of this
 * @member {Number} actualWaste
 */
IntermediateProductCreate.prototype.actualWaste = undefined;

/**
 * @member {String} jobId
 */
IntermediateProductCreate.prototype.jobId = undefined;

/**
 * The ID of the Workstep that creates this IntermediateProduct
 * @member {String} creatingWorkstepId
 */
IntermediateProductCreate.prototype.creatingWorkstepId = undefined;

/**
 * The ID of the Workstep that consumes this IntermediateProduct
 * @member {String} consumingWorkstepId
 */
IntermediateProductCreate.prototype.consumingWorkstepId = undefined;

/**
 * @member {Object} layout
 */
IntermediateProductCreate.prototype.layout = undefined;

