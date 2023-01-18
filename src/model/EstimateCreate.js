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
import {WorkstepEstimateCreate} from './WorkstepEstimateCreate';

/**
 * The EstimateCreate model module.
 * @module model/EstimateCreate
 * @version 1.0.0
 */
export class EstimateCreate {
  /**
   * Constructs a new <code>EstimateCreate</code>.
   * @alias module:model/EstimateCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EstimateCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateCreate} obj Optional instance to populate.
   * @return {module:model/EstimateCreate} The populated <code>EstimateCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateCreate();
      if (data.hasOwnProperty('workstep_estimates'))
        obj.workstepEstimates = ApiClient.convertToType(data['workstep_estimates'], [WorkstepEstimateCreate]);
      if (data.hasOwnProperty('approach'))
        obj.approach = ApiClient.convertToType(data['approach'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('production_costs'))
        obj.productionCosts = ApiClient.convertToType(data['production_costs'], 'Number');
      if (data.hasOwnProperty('handling_costs'))
        obj.handlingCosts = ApiClient.convertToType(data['handling_costs'], 'Number');
      if (data.hasOwnProperty('shipping_costs'))
        obj.shippingCosts = ApiClient.convertToType(data['shipping_costs'], 'Number');
      if (data.hasOwnProperty('markup_percentage'))
        obj.markupPercentage = ApiClient.convertToType(data['markup_percentage'], 'String');
      if (data.hasOwnProperty('markup_costs'))
        obj.markupCosts = ApiClient.convertToType(data['markup_costs'], 'String');
      if (data.hasOwnProperty('net_sales_price'))
        obj.netSalesPrice = ApiClient.convertToType(data['net_sales_price'], 'String');
      if (data.hasOwnProperty('gross_sales_price'))
        obj.grossSalesPrice = ApiClient.convertToType(data['gross_sales_price'], 'String');
      if (data.hasOwnProperty('taxes'))
        obj.taxes = ApiClient.convertToType(data['taxes'], 'String');
      if (data.hasOwnProperty('vendor_id'))
        obj.vendorId = ApiClient.convertToType(data['vendor_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/WorkstepEstimateCreate>} workstepEstimates
 */
EstimateCreate.prototype.workstepEstimates = undefined;

/**
 * Allowed values for the <code>approach</code> property.
 * @enum {String}
 * @readonly
 */
EstimateCreate.ApproachEnum = {
  /**
   * value: "unknown"
   * @const
   */
  unknown: "unknown",

  /**
   * value: "earliest"
   * @const
   */
  earliest: "earliest",

  /**
   * value: "cheapest"
   * @const
   */
  cheapest: "cheapest",

  /**
   * value: "quickest"
   * @const
   */
  quickest: "quickest"
};
/**
 * The assumed production approach which forms the basis of this estimate. This information is used to compare several different production methods and their outcome on the sales price and availabity of the job The default value if this is not set is `unknown`. Other options are `earliest` which represents the production approach that yields the finished goods as early as possible by completion date. Note that based on machine capacity this doesn't necessarly need to be the quickest approach. The `quickest` approach is the one that produces this job with the least amount of time spend in production. The `cheapest` approach is the one that has the lowest production costs for the printer.
 * @member {module:model/EstimateCreate.ApproachEnum} approach
 */
EstimateCreate.prototype.approach = undefined;

/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
EstimateCreate.CurrencyEnum = {
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
 * @member {module:model/EstimateCreate.CurrencyEnum} currency
 */
EstimateCreate.prototype.currency = undefined;

/**
 * The total cost for a print shop to produce the estimated job This includes all internal and external labour as well as material costs. This does not include markups. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} productionCosts
 */
EstimateCreate.prototype.productionCosts = undefined;

/**
 * The total handling cost that should be billed to the customer. Handling costs can be surcharges for logistics, warehouse capacity, or even order processing and estimating. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} handlingCosts
 */
EstimateCreate.prototype.handlingCosts = undefined;

/**
 * The estimated shipping costs that should be billed to the customer. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} shippingCosts
 */
EstimateCreate.prototype.shippingCosts = undefined;

/**
 * The relative percentage of the markup that is added to the production costs, handling and shipping costs to reach a customer-facing sales price. This percentage is given as a fraction of 100. It must be greater than or equal to 0, and can exceed 1.
 * @member {String} markupPercentage
 */
EstimateCreate.prototype.markupPercentage = undefined;

/**
 * The absolute costs of the markup charged to the customer. This is supposed to be the surplus the printer archives on this job after deducting all costs. It should correspond to the given `markup_percentage`. The markup costs are given in the currency selected in `currency` (i.e. EUR).
 * @member {String} markupCosts
 */
EstimateCreate.prototype.markupCosts = undefined;

/**
 * The sales price that the customer has to pay for this job without taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, and the markup costs.
 * @member {String} netSalesPrice
 */
EstimateCreate.prototype.netSalesPrice = undefined;

/**
 * The overall total sales price that the customer has to pay for this job with taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, the markup costs and taxes.
 * @member {String} grossSalesPrice
 */
EstimateCreate.prototype.grossSalesPrice = undefined;

/**
 * The estimated sales or VAT taxes that the customer has to pay for this Job, given in the currency selected in `currency` (i.e. EUR). This should correspond to the difference between `net_sales_price` and `gross_sales_price` but we do not enforce this.
 * @member {String} taxes
 */
EstimateCreate.prototype.taxes = undefined;

/**
 * The UUID of the Organization which created this Estimate
 * @member {String} vendorId
 */
EstimateCreate.prototype.vendorId = undefined;

