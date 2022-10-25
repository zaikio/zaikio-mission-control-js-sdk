# MissionControl.Estimate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**workstepEstimates** | [**[WorkstepEstimate]**](WorkstepEstimate.md) |  | 
**approach** | **String** | The assumed production approach which forms the basis of this estimate. This information is used to compare several different production methods and their outcome on the sales price and availabity of the job The default value if this is not set is &#x60;unknown&#x60;. Other options are &#x60;earliest&#x60; which represents the production approach that yields the finished goods as early as possible by completion date. Note that based on machine capacity this doesn&#x27;t necessarly need to be the quickest approach. The &#x60;quickest&#x60; approach is the one that produces this job with the least amount of time spend in production. The &#x60;cheapest&#x60; approach is the one that has the lowest production costs for the printer. | 
**currency** | **String** | The currency used for all monetary information of this order, including all line items. Currencies cannot be mixed within the same order. | 
**productionCosts** | **Number** | The total cost for a print shop to produce the estimated job This includes all internal and external labour as well as material costs. This does not include markups. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | 
**handlingCosts** | **Number** | The total handling cost that should be billed to the customer. Handling costs can be surcharges for logistics, warehouse capacity, or even order processing and estimating. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | 
**shippingCosts** | **Number** | The estimated shipping costs that should be billed to the customer. The amount is given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). | 
**markupPercentage** | **String** | The relative percentage of the markup that is added to the production costs, handling and shipping costs to reach a customer-facing sales price. This percentage is given as a fraction of 100. It must be greater than or equal to 0, and can exceed 1. | 
**markupCosts** | **String** | The absolute costs of the markup charged to the customer. This is supposed to be the surplus the printer archives on this job after deducting all costs. It should correspond to the given &#x60;markup_percentage&#x60;. The markup costs are given in the currency selected in &#x60;currency&#x60; (i.e. EUR). | 
**netSalesPrice** | **String** | The sales price that the customer has to pay for this job without taxes, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should be the sum of the production costs, handling &amp; shipping fees, and the markup costs. | 
**grossSalesPrice** | **String** | The overall total sales price that the customer has to pay for this job with taxes, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should be the sum of the production costs, handling &amp; shipping fees, the markup costs and taxes. | 
**taxes** | **String** | The estimated sales or VAT taxes that the customer has to pay for this Job, given in the currency selected in &#x60;currency&#x60; (i.e. EUR). This should correspond to the difference between &#x60;net_sales_price&#x60; and &#x60;gross_sales_price&#x60; but we do not enforce this. | 
**vendorId** | **String** | The UUID of the Organization which created this Estimate | 
**totalMaterialCosts** | **Number** | The sum of the costs of all material estimates attached to all task estimates of this estimate given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). This value is automatically computed based on the material estimates and cannot not be set manually. | 
**totalInternalLaborCosts** | **Number** | The sum of the internal labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). This value is automatically computed based on the task estimates and cannot not be set manually. Internal labour is considered every process that is performed by workers of the producing print shop. | 
**totalExternalLaborCosts** | **Number** | The sum of the external labour costs of all task estimates attached to this estimate given in the integer sub-unit of the currency specfified in &#x60;currency&#x60; (i.e. cents). This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and extern labour can be combined in a single process as well, if only parts are outsourced or done with external help. | 
**totalInternalLaborTime** | **Number** | The sum of the internal labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. Internal labour is considered every process that is performed by workers of the producing print shop. | 
**totalExternalLaborTime** | **Number** | The sum of the external labour time of all task estimates attached to this estimate given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. External labour is considered everyt process that is not performed by workers of the producing print shop, but outsourced to a third party. Internal and external labour can be combined in a single process as well, if only parts are outsourced or done with external help. | 
**totalDuration** | **Number** | The sum of internal and external labour times of all task estimate attached to this estimate, given in seconds. This value is automatically computed based on the task estimates and cannot be set manually. | 
**jobId** | **String** | The UUID of the Job this Estimate relates to | 

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

