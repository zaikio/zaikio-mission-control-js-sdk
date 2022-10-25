# MissionControl.FileAction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileReferenceId** | **String** |  | 
**state** | **String** | The current state of this file action | 
**progress** | **String** | Indicates the progress of a file to be processed (e.g. 50% – 0.50) | 

<a name="StateEnum"></a>
## Enum: StateEnum

* `completed` (value: `"completed"`)
* `error` (value: `"error"`)
* `pending` (value: `"pending"`)
* `started` (value: `"started"`)

