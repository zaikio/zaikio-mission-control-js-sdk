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
 * The ListUpdate model module.
 * @module model/ListUpdate
 * @version 1.0.0
 */
export class ListUpdate {
  /**
   * Constructs a new <code>ListUpdate</code>.
   * @alias module:model/ListUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUpdate} obj Optional instance to populate.
   * @return {module:model/ListUpdate} The populated <code>ListUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListUpdate();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('member_klass'))
        obj.memberKlass = ApiClient.convertToType(data['member_klass'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the list.
 * @member {String} name
 */
ListUpdate.prototype.name = undefined;

/**
 * Allowed values for the <code>memberKlass</code> property.
 * @enum {String}
 * @readonly
 */
ListUpdate.MemberKlassEnum = {
  /**
   * value: "Job"
   * @const
   */
  job: "Job",

  /**
   * value: "Part"
   * @const
   */
  part: "Part",

  /**
   * value: "Todo"
   * @const
   */
  todo: "Todo",

  /**
   * value: "Workstep"
   * @const
   */
  workstep: "Workstep"
};
/**
 * The type of list members. All members in a list share the same type.
 * @member {module:model/ListUpdate.MemberKlassEnum} memberKlass
 */
ListUpdate.prototype.memberKlass = undefined;

