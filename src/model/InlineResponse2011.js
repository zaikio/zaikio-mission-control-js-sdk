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
import {ExpandedProductionStrategy} from './ExpandedProductionStrategy';
import {Imposing} from './Imposing';
import {ProductionStrategy} from './ProductionStrategy';

/**
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 1.0.0
 */
export class InlineResponse2011 extends ProductionStrategy {
  /**
   * Constructs a new <code>InlineResponse2011</code>.
   * @alias module:model/InlineResponse2011
   * @class
   * @extends module:model/ProductionStrategy
   * @param imposings {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param jobId {} The ID of the Job this ProductionStrategy belongs to
   * @param state {} What is the status of this strategy
   * @param kind {} What approach does this strategy optimize for
   * @param canceledAt {} When this strategy was cancelled, if in canceled state
   */
  constructor(imposings, id, createdAt, updatedAt, jobId, state, kind, canceledAt) {
    super(id, createdAt, updatedAt, jobId, state, kind, canceledAt);
    this.imposings = imposings;
  }

  /**
   * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2011();
      ProductionStrategy.constructFromObject(data, obj);
      if (data.hasOwnProperty('imposings'))
        obj.imposings = ApiClient.convertToType(data['imposings'], [Imposing]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Imposing>} imposings
 */
InlineResponse2011.prototype.imposings = undefined;

