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
 * The Commissioning model module.
 * @module model/Commissioning
 * @version 1.0.0
 */
export class Commissioning {
  /**
   * Constructs a new <code>Commissioning</code>.
   * @alias module:model/Commissioning
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param references {Array.<String>} The the first reference of this commissioning is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
   * @param state {module:model/Commissioning.StateEnum} The current state of this Commissioning
   * @param costs {Number} The total costs (that is without taxes) of the commissioning in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
   * @param canceledAt {Date} The date at which this commissioning was canceled. Only commissionings that were previously completed might be canceled. When this date is set, the commissioning `state` will equal `canceled`.
   */
  constructor(id, createdAt, updatedAt, references, state, costs, canceledAt) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.references = references;
    this.state = state;
    this.costs = costs;
    this.canceledAt = canceledAt;
  }

  /**
   * Constructs a <code>Commissioning</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Commissioning} obj Optional instance to populate.
   * @return {module:model/Commissioning} The populated <code>Commissioning</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Commissioning();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], ['String']);
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('costs'))
        obj.costs = ApiClient.convertToType(data['costs'], 'Number');
      if (data.hasOwnProperty('canceled_at'))
        obj.canceledAt = ApiClient.convertToType(data['canceled_at'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Commissioning.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Commissioning.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Commissioning.prototype.updatedAt = undefined;

/**
 * The the first reference of this commissioning is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
Commissioning.prototype.references = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Commissioning.StateEnum = {
  /**
   * value: "draft"
   * @const
   */
  draft: "draft",

  /**
   * value: "picking"
   * @const
   */
  picking: "picking",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled"
};
/**
 * The current state of this Commissioning
 * @member {module:model/Commissioning.StateEnum} state
 */
Commissioning.prototype.state = undefined;

/**
 * The total costs (that is without taxes) of the commissioning in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} costs
 */
Commissioning.prototype.costs = undefined;

/**
 * The date at which this commissioning was canceled. Only commissionings that were previously completed might be canceled. When this date is set, the commissioning `state` will equal `canceled`.
 * @member {Date} canceledAt
 */
Commissioning.prototype.canceledAt = undefined;

