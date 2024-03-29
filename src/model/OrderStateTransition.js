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
 * The OrderStateTransition model module.
 * @module model/OrderStateTransition
 * @version 1.0.0
 */
export class OrderStateTransition {
  /**
   * Constructs a new <code>OrderStateTransition</code>.
   * @alias module:model/OrderStateTransition
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param previousState {module:model/OrderStateTransition.PreviousStateEnum} The state of the Order at the start of this transition
   * @param nextState {module:model/OrderStateTransition.NextStateEnum} The state the Order is transitioning to
   * @param triggeredBy {String} The application or other API caller that triggered the transition, if present
   * @param userId {String} The user that triggered the transition, if present
   */
  constructor(id, createdAt, updatedAt, previousState, nextState, triggeredBy, userId) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.previousState = previousState;
    this.nextState = nextState;
    this.triggeredBy = triggeredBy;
    this.userId = userId;
  }

  /**
   * Constructs a <code>OrderStateTransition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderStateTransition} obj Optional instance to populate.
   * @return {module:model/OrderStateTransition} The populated <code>OrderStateTransition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderStateTransition();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('previous_state'))
        obj.previousState = ApiClient.convertToType(data['previous_state'], 'String');
      if (data.hasOwnProperty('next_state'))
        obj.nextState = ApiClient.convertToType(data['next_state'], 'String');
      if (data.hasOwnProperty('triggered_by'))
        obj.triggeredBy = ApiClient.convertToType(data['triggered_by'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
OrderStateTransition.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
OrderStateTransition.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
OrderStateTransition.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>previousState</code> property.
 * @enum {String}
 * @readonly
 */
OrderStateTransition.PreviousStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",

  /**
   * value: ":confirmed"
   * @const
   */
  confirmed: ":confirmed",

  /**
   * value: ":fulfilled"
   * @const
   */
  fulfilled: ":fulfilled",

  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state of the Order at the start of this transition
 * @member {module:model/OrderStateTransition.PreviousStateEnum} previousState
 */
OrderStateTransition.prototype.previousState = undefined;

/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
OrderStateTransition.NextStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",

  /**
   * value: ":confirmed"
   * @const
   */
  confirmed: ":confirmed",

  /**
   * value: ":fulfilled"
   * @const
   */
  fulfilled: ":fulfilled",

  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state the Order is transitioning to
 * @member {module:model/OrderStateTransition.NextStateEnum} nextState
 */
OrderStateTransition.prototype.nextState = undefined;

/**
 * The application or other API caller that triggered the transition, if present
 * @member {String} triggeredBy
 */
OrderStateTransition.prototype.triggeredBy = undefined;

/**
 * The user that triggered the transition, if present
 * @member {String} userId
 */
OrderStateTransition.prototype.userId = undefined;

