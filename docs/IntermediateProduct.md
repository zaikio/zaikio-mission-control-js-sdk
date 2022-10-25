# MissionControl.IntermediateProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**kind** | **String** |  | 
**expectedQuantity** | **Number** | The number of items of this that should be produced | 
**actualQuantity** | **Number** | The number of items of this that have been produced so far | 
**completionPercentage** | **String** | The current completion percentage of the expected quantity to be produced | 
**consumptionPercentage** | **String** | The current consumption percentage of produced quantities being used by downstream Worksteps | 
**suspiciousQuantities** | **Boolean** | Do current quantities suggest that an imbalance has occured around this IntermediateProduct. Examples would include - more having been consumed than have been reported produced, or more being produced than were expected. | 
**expectedWaste** | **Number** | How much waste is expected in the production of this | 
**actualWaste** | **Number** | How much waste has been produced in the production of this | 
**jobId** | **String** |  | 
**creatingWorkstepId** | **String** | The ID of the Workstep that creates this IntermediateProduct | 
**consumingWorkstepId** | **String** | The ID of the Workstep that consumes this IntermediateProduct | 
**layout** | **OneOfIntermediateProductLayout** |  | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `sheet` (value: `"sheet"`)
* `roll` (value: `"roll"`)
* `fold` (value: `"fold"`)
* `bookBlock` (value: `"book_block"`)

