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
import {ContactCreate} from './ContactCreate';
import {ExpandedOrderCreate} from './ExpandedOrderCreate';
import {OrderCreate} from './OrderCreate';
import {OrderLineItemCreate} from './OrderLineItemCreate';

/**
 * The AllOfordersBodyOrder model module.
 * @module model/AllOfordersBodyOrder
 * @version 1.0.0
 */
export class AllOfordersBodyOrder extends OrderCreate {
  /**
   * Constructs a new <code>AllOfordersBodyOrder</code>.
   * @alias module:model/AllOfordersBodyOrder
   * @class
   * @extends module:model/OrderCreate
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfordersBodyOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfordersBodyOrder} obj Optional instance to populate.
   * @return {module:model/AllOfordersBodyOrder} The populated <code>AllOfordersBodyOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfordersBodyOrder();
      OrderCreate.constructFromObject(data, obj);
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], Object);
      if (data.hasOwnProperty('customer'))
        obj.customer = ApiClient.convertToType(data['customer'], Object);
      if (data.hasOwnProperty('payment_terms'))
        obj.paymentTerms = ApiClient.convertToType(data['payment_terms'], Object);
      if (data.hasOwnProperty('line_items'))
        obj.lineItems = ApiClient.convertToType(data['line_items'], [OrderLineItemCreate]);
      if (data.hasOwnProperty('contacts'))
        obj.contacts = ApiClient.convertToType(data['contacts'], [ContactCreate]);
    }
    return obj;
  }
}

/**
 * @member {Object} address
 */
AllOfordersBodyOrder.prototype.address = undefined;

/**
 * @member {Object} customer
 */
AllOfordersBodyOrder.prototype.customer = undefined;

/**
 * @member {Object} paymentTerms
 */
AllOfordersBodyOrder.prototype.paymentTerms = undefined;

/**
 * @member {Array.<module:model/OrderLineItemCreate>} lineItems
 */
AllOfordersBodyOrder.prototype.lineItems = undefined;

/**
 * @member {Array.<module:model/ContactCreate>} contacts
 */
AllOfordersBodyOrder.prototype.contacts = undefined;

