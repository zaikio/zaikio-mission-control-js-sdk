"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Estimate = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepEstimate = require("./WorkstepEstimate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Estimate model module.
 * @module model/Estimate
 * @version 1.0.0
 */
var Estimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Estimate</code>.
   * @alias module:model/Estimate
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param workstepEstimates {Array.<module:model/WorkstepEstimate>} 
   * @param approach {module:model/Estimate.ApproachEnum} The assumed production approach which forms the basis of this estimate. This information is used to compare several different production methods and their outcome on the sales price and availabity of the job The default value if this is not set is `unknown`. Other options are `earliest` which represents the production approach that yields the finished goods as early as possible by completion date. Note that based on machine capacity this doesn't necessarly need to be the quickest approach. The `quickest` approach is the one that produces this job with the least amount of time spend in production. The `cheapest` approach is the one that has the lowest production costs for the printer.
   * @param currency {module:model/Estimate.CurrencyEnum} The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order.
   * @param productionCosts {Number} The total cost for a print shop to produce the estimated job This includes all internal and external labour as well as material costs. This does not include markups. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
   * @param handlingCosts {Number} The total handling cost that should be billed to the customer. Handling costs can be surcharges for logistics, warehouse capacity, or even order processing and estimating. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
   * @param shippingCosts {Number} The estimated shipping costs that should be billed to the customer. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
   * @param markupPercentage {String} The relative percentage of the markup that is added to the production costs, handling and shipping costs to reach a customer-facing sales price. This percentage is given as a fraction of 100. It must be greater than or equal to 0, and can exceed 1.
   * @param markupCosts {String} The absolute costs of the markup charged to the customer. This is supposed to be the surplus the printer archives on this job after deducting all costs. It should correspond to the given `markup_percentage`. The markup costs are given in the currency selected in `currency` (i.e. EUR).
   * @param netSalesPrice {String} The sales price that the customer has to pay for this job without taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, and the markup costs.
   * @param grossSalesPrice {String} The overall total sales price that the customer has to pay for this job with taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, the markup costs and taxes.
   * @param taxes {String} The estimated sales or VAT taxes that the customer has to pay for this Job, given in the currency selected in `currency` (i.e. EUR). This should correspond to the difference between `net_sales_price` and `gross_sales_price` but we do not enforce this.
   * @param vendorId {String} The UUID of the Organization which created this Estimate
   * @param totalMaterialCosts {Number} The sum of the costs of all material estimates attached to all task estimates of this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the material estimates and cannot not be set manually.
   * @param totalInternalLaborCosts {Number} The sum of the internal labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the task estimates and cannot not be set manually. Internal labour is considered every process that is performed by workers of the producing print shop.
   * @param totalExternalLaborCosts {Number} The sum of the external labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and extern labour can be combined in a single process as well, if only parts are outsourced or done with external help.
   * @param totalInternalLaborTime {Number} The sum of the internal labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. Internal labour is considered every process that is performed by workers of the producing print shop.
   * @param totalExternalLaborTime {Number} The sum of the external labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and external labour can be combined in a single process as well, if only parts are outsourced or done with external help.
   * @param totalDuration {Number} The sum of internal and external labour times of all task estimate attached to this estimate, given in seconds. This value is automatically computed based on the task estimates and cannot be set manually.
   * @param jobId {String} The UUID of the Job this Estimate relates to
   */
  function Estimate(id, createdAt, updatedAt, workstepEstimates, approach, currency, productionCosts, handlingCosts, shippingCosts, markupPercentage, markupCosts, netSalesPrice, grossSalesPrice, taxes, vendorId, totalMaterialCosts, totalInternalLaborCosts, totalExternalLaborCosts, totalInternalLaborTime, totalExternalLaborTime, totalDuration, jobId) {
    _classCallCheck(this, Estimate);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.workstepEstimates = workstepEstimates;
    this.approach = approach;
    this.currency = currency;
    this.productionCosts = productionCosts;
    this.handlingCosts = handlingCosts;
    this.shippingCosts = shippingCosts;
    this.markupPercentage = markupPercentage;
    this.markupCosts = markupCosts;
    this.netSalesPrice = netSalesPrice;
    this.grossSalesPrice = grossSalesPrice;
    this.taxes = taxes;
    this.vendorId = vendorId;
    this.totalMaterialCosts = totalMaterialCosts;
    this.totalInternalLaborCosts = totalInternalLaborCosts;
    this.totalExternalLaborCosts = totalExternalLaborCosts;
    this.totalInternalLaborTime = totalInternalLaborTime;
    this.totalExternalLaborTime = totalExternalLaborTime;
    this.totalDuration = totalDuration;
    this.jobId = jobId;
  }

  /**
   * Constructs a <code>Estimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Estimate} obj Optional instance to populate.
   * @return {module:model/Estimate} The populated <code>Estimate</code> instance.
   */
  _createClass(Estimate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Estimate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('workstep_estimates')) obj.workstepEstimates = _ApiClient.ApiClient.convertToType(data['workstep_estimates'], [_WorkstepEstimate.WorkstepEstimate]);
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
        if (data.hasOwnProperty('total_material_costs')) obj.totalMaterialCosts = _ApiClient.ApiClient.convertToType(data['total_material_costs'], 'Number');
        if (data.hasOwnProperty('total_internal_labor_costs')) obj.totalInternalLaborCosts = _ApiClient.ApiClient.convertToType(data['total_internal_labor_costs'], 'Number');
        if (data.hasOwnProperty('total_external_labor_costs')) obj.totalExternalLaborCosts = _ApiClient.ApiClient.convertToType(data['total_external_labor_costs'], 'Number');
        if (data.hasOwnProperty('total_internal_labor_time')) obj.totalInternalLaborTime = _ApiClient.ApiClient.convertToType(data['total_internal_labor_time'], 'Number');
        if (data.hasOwnProperty('total_external_labor_time')) obj.totalExternalLaborTime = _ApiClient.ApiClient.convertToType(data['total_external_labor_time'], 'Number');
        if (data.hasOwnProperty('total_duration')) obj.totalDuration = _ApiClient.ApiClient.convertToType(data['total_duration'], 'Number');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
      }
      return obj;
    }
  }]);
  return Estimate;
}();
/**
 * @member {String} id
 */
exports.Estimate = Estimate;
Estimate.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Estimate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Estimate.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/WorkstepEstimate>} workstepEstimates
 */
Estimate.prototype.workstepEstimates = undefined;

/**
 * Allowed values for the <code>approach</code> property.
 * @enum {String}
 * @readonly
 */
Estimate.ApproachEnum = {
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
 * @member {module:model/Estimate.ApproachEnum} approach
 */
Estimate.prototype.approach = undefined;

/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
Estimate.CurrencyEnum = {
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
 * @member {module:model/Estimate.CurrencyEnum} currency
 */
Estimate.prototype.currency = undefined;

/**
 * The total cost for a print shop to produce the estimated job This includes all internal and external labour as well as material costs. This does not include markups. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} productionCosts
 */
Estimate.prototype.productionCosts = undefined;

/**
 * The total handling cost that should be billed to the customer. Handling costs can be surcharges for logistics, warehouse capacity, or even order processing and estimating. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} handlingCosts
 */
Estimate.prototype.handlingCosts = undefined;

/**
 * The estimated shipping costs that should be billed to the customer. The amount is given in the integer sub-unit of the currency specfified in `currency` (i.e. cents).
 * @member {Number} shippingCosts
 */
Estimate.prototype.shippingCosts = undefined;

/**
 * The relative percentage of the markup that is added to the production costs, handling and shipping costs to reach a customer-facing sales price. This percentage is given as a fraction of 100. It must be greater than or equal to 0, and can exceed 1.
 * @member {String} markupPercentage
 */
Estimate.prototype.markupPercentage = undefined;

/**
 * The absolute costs of the markup charged to the customer. This is supposed to be the surplus the printer archives on this job after deducting all costs. It should correspond to the given `markup_percentage`. The markup costs are given in the currency selected in `currency` (i.e. EUR).
 * @member {String} markupCosts
 */
Estimate.prototype.markupCosts = undefined;

/**
 * The sales price that the customer has to pay for this job without taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, and the markup costs.
 * @member {String} netSalesPrice
 */
Estimate.prototype.netSalesPrice = undefined;

/**
 * The overall total sales price that the customer has to pay for this job with taxes, given in the currency selected in `currency` (i.e. EUR). This should be the sum of the production costs, handling & shipping fees, the markup costs and taxes.
 * @member {String} grossSalesPrice
 */
Estimate.prototype.grossSalesPrice = undefined;

/**
 * The estimated sales or VAT taxes that the customer has to pay for this Job, given in the currency selected in `currency` (i.e. EUR). This should correspond to the difference between `net_sales_price` and `gross_sales_price` but we do not enforce this.
 * @member {String} taxes
 */
Estimate.prototype.taxes = undefined;

/**
 * The UUID of the Organization which created this Estimate
 * @member {String} vendorId
 */
Estimate.prototype.vendorId = undefined;

/**
 * The sum of the costs of all material estimates attached to all task estimates of this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the material estimates and cannot not be set manually.
 * @member {Number} totalMaterialCosts
 */
Estimate.prototype.totalMaterialCosts = undefined;

/**
 * The sum of the internal labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the task estimates and cannot not be set manually. Internal labour is considered every process that is performed by workers of the producing print shop.
 * @member {Number} totalInternalLaborCosts
 */
Estimate.prototype.totalInternalLaborCosts = undefined;

/**
 * The sum of the external labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in `currency` (i.e. cents). This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and extern labour can be combined in a single process as well, if only parts are outsourced or done with external help.
 * @member {Number} totalExternalLaborCosts
 */
Estimate.prototype.totalExternalLaborCosts = undefined;

/**
 * The sum of the internal labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. Internal labour is considered every process that is performed by workers of the producing print shop.
 * @member {Number} totalInternalLaborTime
 */
Estimate.prototype.totalInternalLaborTime = undefined;

/**
 * The sum of the external labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and external labour can be combined in a single process as well, if only parts are outsourced or done with external help.
 * @member {Number} totalExternalLaborTime
 */
Estimate.prototype.totalExternalLaborTime = undefined;

/**
 * The sum of internal and external labour times of all task estimate attached to this estimate, given in seconds. This value is automatically computed based on the task estimates and cannot be set manually.
 * @member {Number} totalDuration
 */
Estimate.prototype.totalDuration = undefined;

/**
 * The UUID of the Job this Estimate relates to
 * @member {String} jobId
 */
Estimate.prototype.jobId = undefined;