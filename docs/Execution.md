# MissionControl.Execution

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**operatorId** | **String** | The identifier of the human operator who was responsible for this operation | 
**machineId** | **String** | The identifier of the machine that was operated | 
**workstepId** | **String** | The identifier of the workstep that this execution worked towards completing | 
**quantity** | **Number** | How many items have been produced | 
**waste** | **Number** | How many units of waste have been produced | 
**startedAt** | **Date** | When did production commence in this execution | 
**endedAt** | **Date** | When did production conclude in this execution | 
