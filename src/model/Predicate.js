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
import {Rule} from './Rule';

/**
 * The Predicate model module.
 * @module model/Predicate
 * @version 1.0.0
 */
export class Predicate {
  /**
   * Constructs a new <code>Predicate</code>.
   * @alias module:model/Predicate
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param match {module:model/Predicate.MatchEnum} The specification for predicate rules combination. Specifies how predicate rules are combined to fetch list members: - Match all: fetch list members that match all predicate rules. - Match any: fetch list members that match any predicate rule/s.
   * @param rules {Array.<module:model/Rule>} 
   */
  constructor(id, createdAt, updatedAt, match, rules) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.match = match;
    this.rules = rules;
  }

  /**
   * Constructs a <code>Predicate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Predicate} obj Optional instance to populate.
   * @return {module:model/Predicate} The populated <code>Predicate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Predicate();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('match'))
        obj.match = ApiClient.convertToType(data['match'], 'String');
      if (data.hasOwnProperty('rules'))
        obj.rules = ApiClient.convertToType(data['rules'], [Rule]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Predicate.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Predicate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Predicate.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>match</code> property.
 * @enum {String}
 * @readonly
 */
Predicate.MatchEnum = {
  /**
   * value: "match_all"
   * @const
   */
  all: "match_all",

  /**
   * value: "match_any"
   * @const
   */
  any: "match_any"
};
/**
 * The specification for predicate rules combination. Specifies how predicate rules are combined to fetch list members: - Match all: fetch list members that match all predicate rules. - Match any: fetch list members that match any predicate rule/s.
 * @member {module:model/Predicate.MatchEnum} match
 */
Predicate.prototype.match = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
Predicate.prototype.rules = undefined;

