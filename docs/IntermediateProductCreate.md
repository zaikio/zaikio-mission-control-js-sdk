# MissionControl.IntermediateProductCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** |  | [optional] 
**expectedQuantity** | **Number** | The number of items of this that should be produced | [optional] 
**actualQuantity** | **Number** | The number of items of this that have been produced so far | [optional] 
**expectedWaste** | **Number** | How much waste is expected in the production of this | [optional] 
**actualWaste** | **Number** | How much waste has been produced in the production of this | [optional] 
**jobId** | **String** |  | [optional] 
**creatingWorkstepId** | **String** | The ID of the Workstep that creates this IntermediateProduct | [optional] 
**consumingWorkstepId** | **String** | The ID of the Workstep that consumes this IntermediateProduct | [optional] 
**layout** | **OneOfIntermediateProductCreateLayout** |  | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `sheet` (value: `"sheet"`)
* `roll` (value: `"roll"`)
* `fold` (value: `"fold"`)
* `bookBlock` (value: `"book_block"`)

