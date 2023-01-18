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
 * The OrderCreate model module.
 * @module model/OrderCreate
 * @version 1.0.0
 */
export class OrderCreate {
  /**
   * Constructs a new <code>OrderCreate</code>.
   * @alias module:model/OrderCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderCreate} obj Optional instance to populate.
   * @return {module:model/OrderCreate} The populated <code>OrderCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderCreate();
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], ['String']);
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('net_total'))
        obj.netTotal = ApiClient.convertToType(data['net_total'], 'Number');
      if (data.hasOwnProperty('gross_total'))
        obj.grossTotal = ApiClient.convertToType(data['gross_total'], 'Number');
      if (data.hasOwnProperty('taxes'))
        obj.taxes = ApiClient.convertToType(data['taxes'], 'Number');
      if (data.hasOwnProperty('confirmed_at'))
        obj.confirmedAt = ApiClient.convertToType(data['confirmed_at'], 'Date');
      if (data.hasOwnProperty('canceled_at'))
        obj.canceledAt = ApiClient.convertToType(data['canceled_at'], 'Date');
      if (data.hasOwnProperty('fulfilled_at'))
        obj.fulfilledAt = ApiClient.convertToType(data['fulfilled_at'], 'Date');
    }
    return obj;
  }
}

/**
 * The the first reference of this order is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
OrderCreate.prototype.references = undefined;

/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
OrderCreate.CurrencyEnum = {
  /**
   * value: "USD"
   * @const
   */
  USD: "USD",

  /**
   * value: "EUR"
   * @const
   */
  EUR: "EUR",

  /**
   * value: "GBP"
   * @const
   */
  GBP: "GBP"
};
/**
 * The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order.
 * @member {module:model/OrderCreate.CurrencyEnum} currency
 */
OrderCreate.prototype.currency = undefined;

/**
 * The total net worth (that is without taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} netTotal
 */
OrderCreate.prototype.netTotal = undefined;

/**
 * The total gross worth (that is with taxes) of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} grossTotal
 */
OrderCreate.prototype.grossTotal = undefined;

/**
 * The total amount of taxes of the order in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} taxes
 */
OrderCreate.prototype.taxes = undefined;

/**
 * The date at which this order was confirmed to be produced. When this date is set, the order `state` will be set to confirmed and no modifications of this order will be possible.
 * @member {Date} confirmedAt
 */
OrderCreate.prototype.confirmedAt = undefined;

/**
 * The date at which this order was canceled. Only orders that were previously confirmed might be canceled. When this date is set, the order `state` will equal `canceled`.
 * @member {Date} canceledAt
 */
OrderCreate.prototype.canceledAt = undefined;

/**
 * The date at which this order was complelty fulfilled. Fulfillment is assumed as soon as all production and logistics work is completed and the order is on it's way to the customer. When this date is set, the order `state` will equal `fulfilled`.
 * @member {Date} fulfilledAt
 */
OrderCreate.prototype.fulfilledAt = undefined;

