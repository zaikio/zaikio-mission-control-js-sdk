# MissionControl.JobDelayUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | The ID of the Job related to the delay | [optional] 
**description** | **String** | A description of the delay | [optional] 
**reason** | **String** |  | [optional] 
**reportedById** | **String** | The ID of the Person who first reported the delay | [optional] 
**reportedAt** | **Date** | The date at which the delay was first reported | [optional] 
**clearedById** | **String** | The ID of the Person who resolved the delay | [optional] 
**clearedAt** | **Date** | The date at which the delay was resolved | [optional] 

<a name="ReasonEnum"></a>
## Enum: ReasonEnum

* `machineUnavailable` (value: `"machine_unavailable"`)
* `materialsUnavailable` (value: `"materials_unavailable"`)
* `other` (value: `"other"`)
* `specialistUnavailable` (value: `"specialist_unavailable"`)

