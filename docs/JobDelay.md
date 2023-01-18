# MissionControl.JobDelay

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**jobId** | **String** | The ID of the Job related to the delay | 
**description** | **String** | A description of the delay | 
**reason** | **String** |  | 
**reportedById** | **String** | The ID of the Person who first reported the delay | 
**reportedAt** | **Date** | The date at which the delay was first reported | 
**clearedById** | **String** | The ID of the Person who resolved the delay | 
**clearedAt** | **Date** | The date at which the delay was resolved | 

<a name="ReasonEnum"></a>
## Enum: ReasonEnum

* `machineUnavailable` (value: `"machine_unavailable"`)
* `materialsUnavailable` (value: `"materials_unavailable"`)
* `other` (value: `"other"`)
* `specialistUnavailable` (value: `"specialist_unavailable"`)

