"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstimateCreate = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepEstimateCreate = require("./WorkstepEstimateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EstimateCreate model module.
 * @module model/EstimateCreate
 * @version 1.0.0
 */
var EstimateCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimateCreate</code>.
   * @alias module:model/EstimateCreate
   * @class
   */
  function EstimateCreate() {
    _classCallCheck(this, EstimateCreate);
  }

  /**
   * Constructs a <code>EstimateCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateCreate} obj Optional instance to populate.
   * @return {module:model/EstimateCreate} The populated <code>EstimateCreate</code> instance.
   */
  _createClass(EstimateCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimateCreate();
        if (data.hasOwnProperty('workstep_estimates')) obj.workstepEstimates = _ApiClient.ApiClient.convertToType(data['workstep_estimates'], [_WorkstepEstimateCreate.WorkstepEstimateCreate]);
        if (data.hasOwnProperty('approach')) obj.approach = _ApiClient.ApiClient.convertToType(data['approach'], 'String');
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('production_costs')) obj.productionCosts = _ApiClient.ApiClient.convertToType(data['production_costs'], 'Number');
        if (data.hasOwnProperty('handling_costs')) obj.handlingCosts = _ApiClient.ApiClient.convertToType(data['handling_costs'], 'Number');
        if (data.hasOwnProperty('shipping_costs')) obj.shippingCosts = _ApiClient.ApiClient.convertToType(data['shipping_costs'], 'Number');
        if (data.hasOwnProperty('markup_percentage')) obj.markupPercentage = _ApiClient.ApiClient.convertToType(data['markup_percentage'], 'String');
        if (data.hasOwnProperty('markup_costs')) obj.markupCosts = _ApiClient.ApiClient.convertToType(data['markup_costs'], 'String');
        if (data.hasOwnProperty('net_sales_price')) obj.netSalesPrice = _ApiClient.ApiClient.convertToType(data['net_sales_price'], 'String');
        if (data.hasOwnProperty('gross_sales_price')) obj.grossSalesPrice = _ApiClient.ApiClient.convertToType(data['gross_sales_price'], 'String');
        if (data.hasOwnProperty('taxes')) obj.taxes = _ApiClient.ApiClient.convertToType(data['taxes'], 'String');
        if (data.hasOwnProperty('vendor_id')) obj.vendorId = _ApiClient.ApiClient.convertToType(data['vendor_id'], 'String');
      }
      return obj;
    }
  }]);
  return EstimateCreate;
}();
/**
 * @member {Array.<module:model/WorkstepEstimateCreate>} workstepEstimates
 */
exports.EstimateCreate = EstimateCreate;
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