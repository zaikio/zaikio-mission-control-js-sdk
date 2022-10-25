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
import {BaseLessThanUpdate} from './BaseLessThanUpdate';

/**
 * The NumberLessThanUpdate model module.
 * @module model/NumberLessThanUpdate
 * @version 1.0.0
 */
export class NumberLessThanUpdate {
  /**
   * Constructs a new <code>NumberLessThanUpdate</code>.
   * @alias module:model/NumberLessThanUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NumberLessThanUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberLessThanUpdate} obj Optional instance to populate.
   * @return {module:model/NumberLessThanUpdate} The populated <code>NumberLessThanUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NumberLessThanUpdate();
      if (data.hasOwnProperty('subject_type'))
        obj.subjectType = ApiClient.convertToType(data['subject_type'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
NumberLessThanUpdate.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  DUE_AT: "JOB_DUE_AT",

  /**
   * value: "JOB_QUANTITY"
   * @const
   */
  QUANTITY: "JOB_QUANTITY"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class.
 * @member {module:model/NumberLessThanUpdate.SubjectTypeEnum} subjectType
 */
NumberLessThanUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
NumberLessThanUpdate.TypeEnum = {
  /**
   * value: "LessThan"
   * @const
   */
  lessThan: "LessThan"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). LessThan rules always have \"LessThan\" as type.
 * @member {module:model/NumberLessThanUpdate.TypeEnum} type
 */
NumberLessThanUpdate.prototype.type = undefined;

// Implement LessThanUpdate interface:
