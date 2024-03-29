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
import {ExtendedJob} from './ExtendedJob';
import {ExtendedPart} from './ExtendedPart';
import {Job} from './Job';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
export class InlineResponse200 extends Job {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   * @extends module:model/Job
   * @param parts {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param name {} The name of the Job
   * @param ownerId {} The id of the Organization which the Job belongs to
   * @param state {} The current state of this Job
   * @param references {} A list of refrences that are used in customer/human communication. This is not a technical ID and should not be treated as such. The first reference of this job is automatically generated by Mission Control.
   * @param kind {} The kind of Job, which must be one of this list
   * @param source {} The source software or system that uploaded this job. This could also be a hint to a web shop or other sales channel identifier.
   * @param version {} A version identifier that defines the iteration of this job. Can be a numeric counter or alpha-numeric version designator.
   * @param quantity {} The amount of copies that need to be manufactured of this job.
   * @param acceptableQuantityExcess {} The amount of copies that can be produced additionally to `quantity` and still be sold to the customer as per the purchase agreement.
   * @param acceptableQuantityUnderrun {} The amount of copies that can be producded less than `quantity` which still adheres the customers purchase agreement.
   * @param dueAt {} The date and time at which this job needs to completed in order to be shipped. This is not when it needs to arrive at the customer.
   * @param estimatedCompletedAt {} The date and time at which this job is expected to be completed in order to be shipped. This is not when it needs to arrive at the customer.
   */
  constructor(parts, id, createdAt, updatedAt, name, ownerId, state, references, kind, source, version, quantity, acceptableQuantityExcess, acceptableQuantityUnderrun, dueAt, estimatedCompletedAt) {
    super(id, createdAt, updatedAt, name, ownerId, state, references, kind, source, version, quantity, acceptableQuantityExcess, acceptableQuantityUnderrun, dueAt, estimatedCompletedAt);
    this.parts = parts;
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200();
      Job.constructFromObject(data, obj);
      if (data.hasOwnProperty('parts'))
        obj.parts = ApiClient.convertToType(data['parts'], [ExtendedPart]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ExtendedPart>} parts
 */
InlineResponse200.prototype.parts = undefined;

