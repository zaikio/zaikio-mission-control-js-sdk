# MissionControl.FinishedProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**expectedQuantity** | **Number** | The number of items of this that should be produced, inferred from Job.quantity if not provided | 
**actualQuantity** | **Number** | The number of items of this that have been produced so far | 
**completionPercentage** | **String** | The current completion percentage of the expected quantity to be produced | 
**jobId** | **String** |  | 
**creatingWorkstepId** | **String** | The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path. | 
