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
 * The OrderLineItemUpdate model module.
 * @module model/OrderLineItemUpdate
 * @version 1.0.0
 */
export class OrderLineItemUpdate {
  /**
   * Constructs a new <code>OrderLineItemUpdate</code>.
   * @alias module:model/OrderLineItemUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderLineItemUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderLineItemUpdate} obj Optional instance to populate.
   * @return {module:model/OrderLineItemUpdate} The populated <code>OrderLineItemUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderLineItemUpdate();
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], ['String']);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (data.hasOwnProperty('net_price'))
        obj.netPrice = ApiClient.convertToType(data['net_price'], 'Number');
      if (data.hasOwnProperty('gross_price'))
        obj.grossPrice = ApiClient.convertToType(data['gross_price'], 'Number');
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'String');
      if (data.hasOwnProperty('net_total_price'))
        obj.netTotalPrice = ApiClient.convertToType(data['net_total_price'], 'Number');
      if (data.hasOwnProperty('gross_total_price'))
        obj.grossTotalPrice = ApiClient.convertToType(data['gross_total_price'], 'Number');
      if (data.hasOwnProperty('taxes'))
        obj.taxes = ApiClient.convertToType(data['taxes'], 'Number');
    }
    return obj;
  }
}

/**
 * The the first reference of this order line item is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
OrderLineItemUpdate.prototype.references = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
OrderLineItemUpdate.KindEnum = {
  /**
   * value: "product"
   * @const
   */
  product: "product",

  /**
   * value: "service"
   * @const
   */
  service: "service",

  /**
   * value: "shipping"
   * @const
   */
  shipping: "shipping",

  /**
   * value: "logistics"
   * @const
   */
  logistics: "logistics",

  /**
   * value: "unknown"
   * @const
   */
  unknown: "unknown"
};
/**
 * Line Items can represent multiple types of concepts within the basket. Fundamentally these represent the different types of chargeable parts of an order (job/service/shipping etc) but if relevant there could be extra concepts added using the 'unknown' value.
 * @member {module:model/OrderLineItemUpdate.KindEnum} kind
 */
OrderLineItemUpdate.prototype.kind = undefined;

/**
 * The UUID of the job, when the `kind` attribute is set to `product` otherwise blank
 * @member {String} jobId
 */
OrderLineItemUpdate.prototype.jobId = undefined;

/**
 * A description of this line item that explains it's contents to buyer of this order. Description must be omitted if the `kind` attribute is set to `product` or `shipping` otherwise a description is required.
 * @member {String} description
 */
OrderLineItemUpdate.prototype.description = undefined;

/**
 * The orderd amount of this line item, given in the unit specified in the `unit` attribute.
 * @member {Number} quantity
 */
OrderLineItemUpdate.prototype.quantity = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
OrderLineItemUpdate.UnitEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box",

  /**
   * value: "cm"
   * @const
   */
  cm: "cm",

  /**
   * value: "hour"
   * @const
   */
  hour: "hour",

  /**
   * value: "kg"
   * @const
   */
  kg: "kg",

  /**
   * value: "meter"
   * @const
   */
  meter: "meter",

  /**
   * value: "minute"
   * @const
   */
  minute: "minute",

  /**
   * value: "mm"
   * @const
   */
  mm: "mm",

  /**
   * value: "pallet"
   * @const
   */
  pallet: "pallet",

  /**
   * value: "piece"
   * @const
   */
  piece: "piece"
};
/**
 * The unit in which the ordered amount of this line item is measured. Can be omitted if the line item is not provided in a measureable quantity. In that case the `unit` attribute must be set to 1 (which is the default).
 * @member {module:model/OrderLineItemUpdate.UnitEnum} unit
 */
OrderLineItemUpdate.prototype.unit = undefined;

/**
 * The net price of a single unit (!) of this line item without taxes in the sub-unit of the currency selected for the order (i.e. cents for USD/EUR). This is not the total net price for the entire amount of the line item, but the price for one single unit, so if somebody ordered 100 pieces, this is the price for 1 piece. Mission Control will not change or check if the prices between `net_price`, `net_total_price`, `gross_price` and `gross_total_price` match up, so if you use a higher precision internally for rounding any of the prices that is fine.
 * @member {Number} netPrice
 */
OrderLineItemUpdate.prototype.netPrice = undefined;

/**
 * The total price of a single unit (!) of this line item with value added tax in the sub-unit of the currency selected for the order (i.e. cents for USD/EUR). If the order is made in a jurisdiction using sales tax instead of value added tax, this value should equal the value in `net_price`. Mission Control will not change or check if the prices between `net_price`, `net_total_price`, `gross_price` and `gross_total_price` match up, so if you use a higher precision internally for rounding any of the prices that is fine.
 * @member {Number} grossPrice
 */
OrderLineItemUpdate.prototype.grossPrice = undefined;

/**
 * The value-added tax (VAT) rate that is applied to this line item as a percentage. The percentage is represented as a decimal between 0 and 1, so a 19% tax rate would be `0.19`. For jurisdictions that use sales taxes instead of VAT leave this field blank.
 * @member {String} taxRate
 */
OrderLineItemUpdate.prototype.taxRate = undefined;

/**
 * The total price of this line item without taxes in the sub-unit of the currency selected for the order (i.e. cents for USD/EUR). This is the price for the entire amount, so if somebody ordered 100 pieces of this line item, this is the price for all of those 100 pieces. Mission Control will not change or check if the prices between `net_price`, `net_total_price`, `gross_price` and `gross_total_price` match up, so if you use a higher precision internally for rounding any of the prices that is fine.
 * @member {Number} netTotalPrice
 */
OrderLineItemUpdate.prototype.netTotalPrice = undefined;

/**
 * The total price of a single unit (!) of this line item with value added tax in the sub-unit of the currency selected for the order (i.e. cents for USD/EUR). If the order is made in a jurisdiction using sales tax instead of value added tax, this value should equal the value in `net_price`. Mission Control will not change or check if the prices between `net_price`, `net_total_price`, `gross_price` and `gross_total_price` match up, so if you use a higher precision internally for rounding any of the prices that is fine.
 * @member {Number} grossTotalPrice
 */
OrderLineItemUpdate.prototype.grossTotalPrice = undefined;

/**
 * The amount of value added tax due for the total of this line item in the sub-unit of the currency selected for the order (i.e. cents for USD/EUR). For jurisdictions that use value-added tax this attribute must be left blank. Mission Control will not change or check if the prices between `net_price`, `net_total_price`, `gross_price` and `gross_total_price` match up, so if you use a higher precision internally for rounding any of the prices that is fine.
 * @member {Number} taxes
 */
OrderLineItemUpdate.prototype.taxes = undefined;

