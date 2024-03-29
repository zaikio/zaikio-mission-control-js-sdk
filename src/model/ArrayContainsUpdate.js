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
 * The ArrayContainsUpdate model module.
 * @module model/ArrayContainsUpdate
 * @version 1.0.0
 */
export class ArrayContainsUpdate {
  /**
   * Constructs a new <code>ArrayContainsUpdate</code>.
   * @alias module:model/ArrayContainsUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ArrayContainsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayContainsUpdate} obj Optional instance to populate.
   * @return {module:model/ArrayContainsUpdate} The populated <code>ArrayContainsUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ArrayContainsUpdate();
      if (data.hasOwnProperty('subject_type'))
        obj.subjectType = ApiClient.convertToType(data['subject_type'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], ['String']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
ArrayContainsUpdate.SubjectTypeEnum = {
  /**
   * value: "JOB_REFERENCE"
   * @const
   */
  JOB_REFERENCE: "JOB_REFERENCE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. ArrayContains rules only admit array subject types (fields with array type).
 * @member {module:model/ArrayContainsUpdate.SubjectTypeEnum} subjectType
 */
ArrayContainsUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ArrayContainsUpdate.TypeEnum = {
  /**
   * value: "ArrayContains"
   * @const
   */
  arrayContains: "ArrayContains"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). ArrayContains rules always have \"ArrayContains\" as type.
 * @member {module:model/ArrayContainsUpdate.TypeEnum} type
 */
ArrayContainsUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. ArrayContains rules check value array items are present in subject type field value.
 * @member {Array.<String>} value
 */
ArrayContainsUpdate.prototype.value = undefined;

// Implement RuleUpdate interface:
