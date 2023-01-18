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
import {RuleUpdate} from './RuleUpdate';

/**
 * The RulesRuleIdBody model module.
 * @module model/RulesRuleIdBody
 * @version 1.0.0
 */
export class RulesRuleIdBody {
  /**
   * Constructs a new <code>RulesRuleIdBody</code>.
   * @alias module:model/RulesRuleIdBody
   * @class
   * @param rule {module:model/RuleUpdate} 
   */
  constructor(rule) {
    this.rule = rule;
  }

  /**
   * Constructs a <code>RulesRuleIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RulesRuleIdBody} obj Optional instance to populate.
   * @return {module:model/RulesRuleIdBody} The populated <code>RulesRuleIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RulesRuleIdBody();
      if (data.hasOwnProperty('rule'))
        obj.rule = RuleUpdate.constructFromObject(data['rule']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RuleUpdate} rule
 */
RulesRuleIdBody.prototype.rule = undefined;

