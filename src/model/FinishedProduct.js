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
 * The FinishedProduct model module.
 * @module model/FinishedProduct
 * @version 1.0.0
 */
export class FinishedProduct {
  /**
   * Constructs a new <code>FinishedProduct</code>.
   * A FinishedProduct represents the final destination of the production path. It serves as a marker of the completion of the manufacturing steps, and holds the progress information of how much has been completed.
   * @alias module:model/FinishedProduct
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param expectedQuantity {Number} The number of items of this that should be produced, inferred from Job.quantity if not provided
   * @param actualQuantity {Number} The number of items of this that have been produced so far
   * @param completionPercentage {String} The current completion percentage of the expected quantity to be produced
   * @param jobId {String} 
   * @param creatingWorkstepId {String} The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path.
   */
  constructor(id, createdAt, updatedAt, expectedQuantity, actualQuantity, completionPercentage, jobId, creatingWorkstepId) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expectedQuantity = expectedQuantity;
    this.actualQuantity = actualQuantity;
    this.completionPercentage = completionPercentage;
    this.jobId = jobId;
    this.creatingWorkstepId = creatingWorkstepId;
  }

  /**
   * Constructs a <code>FinishedProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishedProduct} obj Optional instance to populate.
   * @return {module:model/FinishedProduct} The populated <code>FinishedProduct</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FinishedProduct();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('expected_quantity'))
        obj.expectedQuantity = ApiClient.convertToType(data['expected_quantity'], 'Number');
      if (data.hasOwnProperty('actual_quantity'))
        obj.actualQuantity = ApiClient.convertToType(data['actual_quantity'], 'Number');
      if (data.hasOwnProperty('completion_percentage'))
        obj.completionPercentage = ApiClient.convertToType(data['completion_percentage'], 'String');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('creating_workstep_id'))
        obj.creatingWorkstepId = ApiClient.convertToType(data['creating_workstep_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
FinishedProduct.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FinishedProduct.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FinishedProduct.prototype.updatedAt = undefined;

/**
 * The number of items of this that should be produced, inferred from Job.quantity if not provided
 * @member {Number} expectedQuantity
 */
FinishedProduct.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
FinishedProduct.prototype.actualQuantity = undefined;

/**
 * The current completion percentage of the expected quantity to be produced
 * @member {String} completionPercentage
 */
FinishedProduct.prototype.completionPercentage = undefined;

/**
 * @member {String} jobId
 */
FinishedProduct.prototype.jobId = undefined;

/**
 * The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path.
 * @member {String} creatingWorkstepId
 */
FinishedProduct.prototype.creatingWorkstepId = undefined;

// Implement OneOfinlineResponse201FinishedProduct interface: