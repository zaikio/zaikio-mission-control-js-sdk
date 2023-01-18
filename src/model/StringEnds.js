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
 * The StringEnds model module.
 * @module model/StringEnds
 * @version 1.0.0
 */
export class StringEnds {
  /**
   * Constructs a new <code>StringEnds</code>.
   * @alias module:model/StringEnds
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/StringEnds.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringEnds rules only admit string subject types (fields with string type).
   * @param type {module:model/StringEnds.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \"StringEnds\" as type.
   * @param value {String} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value.
   */
  constructor(id, createdAt, updatedAt, subjectType, type, value) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>StringEnds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringEnds} obj Optional instance to populate.
   * @return {module:model/StringEnds} The populated <code>StringEnds</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StringEnds();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('subject_type'))
        obj.subjectType = ApiClient.convertToType(data['subject_type'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
StringEnds.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
StringEnds.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
StringEnds.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
StringEnds.SubjectTypeEnum = {
  /**
   * value: "CUSTOMER_NAME"
   * @const
   */
  CUSTOMER_NAME: "CUSTOMER_NAME",

  /**
   * value: "JOB_NAME"
   * @const
   */
  JOB_NAME: "JOB_NAME",

  /**
   * value: "JOB_SOURCE"
   * @const
   */
  JOB_SOURCE: "JOB_SOURCE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringEnds rules only admit string subject types (fields with string type).
 * @member {module:model/StringEnds.SubjectTypeEnum} subjectType
 */
StringEnds.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StringEnds.TypeEnum = {
  /**
   * value: "StringEnds"
   * @const
   */
  stringEnds: "StringEnds"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \"StringEnds\" as type.
 * @member {module:model/StringEnds.TypeEnum} type
 */
StringEnds.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value.
 * @member {String} value
 */
StringEnds.prototype.value = undefined;

// Implement Rule interface:
