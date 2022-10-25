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
 * The CustomerUpdate model module.
 * @module model/CustomerUpdate
 * @version 1.0.0
 */
export class CustomerUpdate {
  /**
   * Constructs a new <code>CustomerUpdate</code>.
   * @alias module:model/CustomerUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomerUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerUpdate} obj Optional instance to populate.
   * @return {module:model/CustomerUpdate} The populated <code>CustomerUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomerUpdate();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('text_identifier'))
        obj.textIdentifier = ApiClient.convertToType(data['text_identifier'], 'String');
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], ['String']);
    }
    return obj;
  }
}

/**
 * The name of this customer
 * @member {String} name
 */
CustomerUpdate.prototype.name = undefined;

/**
 * An identifier for this customer
 * @member {String} textIdentifier
 */
CustomerUpdate.prototype.textIdentifier = undefined;

/**
 * The the first reference of this customer is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
CustomerUpdate.prototype.references = undefined;

// Implement OneOfExpandedOrderUpdateCustomer interface:
