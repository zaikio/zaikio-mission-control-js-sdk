# MissionControl.EstimateCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workstepEstimates** | [**[WorkstepEstimateCreate]**](WorkstepEstimateCreate.md) |  | [optional] 
**approach** | **String** | The assumed production approach which forms the basis of this estimate. This information is used to compare several different production methods and their outcome on the sales price and availabity of the job The default value if this is not set is &#x60;unknown&#x60;. Other options are &#x60;earliest&#x60; which represents the production approach that yields the finished goods as early as possible by completion date. Note that based on machine capacity this doesn&#x27;t necessarly need to be the quickest approach. The &#x60;quickest&#x60; approach is the one that produces this job with the least amount of time spend in production. The &#x60;cheapest&#x60; approach is the one that has the lowest production costs for the printer. | [optional] 
**currency** | **String** | The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order. | [optional] 
**productionCosts** | **Number** | The total cost for a print shop to produce the estimated job This includes all internal and external labour as well as material costs. This does not include markups. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | [optional] 
**handlingCosts** | **Number** | The total handling cost that should be billed to the customer. Handling costs can be surcharges for logistics, warehouse capacity, or even order processing and estimating. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | [optional] 
**shippingCosts** | **Number** | The estimated shipping costs that should be billed to the customer. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | [optional] 
**markupPercentage** | **String** | The relative percentage of the markup that is added to the production costs, handling and shipping costs to reach a customer-facing sales price. This percentage is given as a fraction of 100. It must be greater than or equal to 0, and can exceed 1. | [optional] 
**markupCosts** | **String** | The absolute costs of the markup charged to the customer. This is supposed to be the surplus the printer archives on this job after deducting all costs. It should correspond to the given &#x60;markup_percentage&#x60;. The markup costs are given in the currency selected in &#x60;currency&#x60; (i.e. EUR). | [optional] 
**netSalesPrice** | **String** | The sales price that the customer has to pay for this job without taxes, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should be the sum of the production costs, handling &amp; shipping fees, and the markup costs. | [optional] 
**grossSalesPrice** | **String** | The overall total sales price that the customer has to pay for this job with taxes, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should be the sum of the production costs, handling &amp; shipping fees, the markup costs and taxes. | [optional] 
**taxes** | **String** | The estimated sales or VAT taxes that the customer has to pay for this Job, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should correspond to the difference between &#x60;net_sales_price&#x60; and &#x60;gross_sales_price&#x60; but we do not enforce this. | [optional] 
**vendorId** | **String** | The UUID of the Organization which created this Estimate | [optional] 

<a name="ApproachEnum"></a>
## Enum: ApproachEnum

* `unknown` (value: `"unknown"`)
* `earliest` (value: `"earliest"`)
* `cheapest` (value: `"cheapest"`)
* `quickest` (value: `"quickest"`)


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum

* `USD` (value: `"USD"`)
* `EUR` (value: `"EUR"`)
* `GBP` (value: `"GBP"`)

