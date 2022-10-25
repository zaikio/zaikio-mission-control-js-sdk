# MissionControl.FinishedProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expectedQuantity** | **Number** | The number of items of this that should be produced, inferred from Job.quantity if not provided | [optional] 
**actualQuantity** | **Number** | The number of items of this that have been produced so far | [optional] 
**completionPercentage** | **String** | The current completion percentage of the expected quantity to be produced | [optional] 
**jobId** | **String** |  | [optional] 
**creatingWorkstepId** | **String** | The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path. | [optional] 
