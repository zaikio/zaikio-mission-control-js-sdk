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
 * The BaseEqualsCreate model module.
 * @module model/BaseEqualsCreate
 * @version 1.0.0
 */
export class BaseEqualsCreate {
  /**
   * Constructs a new <code>BaseEqualsCreate</code>.
   * @alias module:model/BaseEqualsCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BaseEqualsCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseEqualsCreate} obj Optional instance to populate.
   * @return {module:model/BaseEqualsCreate} The populated <code>BaseEqualsCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BaseEqualsCreate();
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
BaseEqualsCreate.SubjectTypeEnum = {
  /**
   * value: "CUSTOMER_NAME"
   * @const
   */
  CUSTOMER_NAME: "CUSTOMER_NAME",

  /**
   * value: "FINISHING_KIND"
   * @const
   */
  FINISHING_KIND: "FINISHING_KIND",

  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT",

  /**
   * value: "JOB_KIND"
   * @const
   */
  JOB_KIND: "JOB_KIND",

  /**
   * value: "JOB_NAME"
   * @const
   */
  JOB_NAME: "JOB_NAME",

  /**
   * value: "JOB_PROGRESS"
   * @const
   */
  JOB_PROGRESS: "JOB_PROGRESS",

  /**
   * value: "JOB_QUANTITY"
   * @const
   */
  JOB_QUANTITY: "JOB_QUANTITY",

  /**
   * value: "JOB_SOURCE"
   * @const
   */
  JOB_SOURCE: "JOB_SOURCE",

  /**
   * value: "JOB_STATE"
   * @const
   */
  JOB_STATE: "JOB_STATE",

  /**
   * value: "MILESTONE_POSITION"
   * @const
   */
  MILESTONE_POSITION: "MILESTONE_POSITION",

  /**
   * value: "SUBSTRATE_PAPER_WEIGHT"
   * @const
   */
  SUBSTRATE_PAPER_WEIGHT: "SUBSTRATE_PAPER_WEIGHT",

  /**
   * value: "TODO_STATE"
   * @const
   */
  TODO_STATE: "TODO_STATE",

  /**
   * value: "WORKSTEP_STATE"
   * @const
   */
  WORKSTEP_STATE: "WORKSTEP_STATE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class.
 * @member {module:model/BaseEqualsCreate.SubjectTypeEnum} subjectType
 */
BaseEqualsCreate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseEqualsCreate.TypeEnum = {
  /**
   * value: "Equals"
   * @const
   */
  equals: "Equals"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greather than, string begins with, etc). Equals rules always have \"Equals\" as type.
 * @member {module:model/BaseEqualsCreate.TypeEnum} type
 */
BaseEqualsCreate.prototype.type = undefined;

