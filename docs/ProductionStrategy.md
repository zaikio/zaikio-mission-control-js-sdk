# MissionControl.ProductionStrategy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**jobId** | **String** | The ID of the Job this ProductionStrategy belongs to | 
**state** | **String** | What is the status of this strategy | 
**kind** | **String** | What approach does this strategy optimize for | 
**canceledAt** | **Date** | When this strategy was cancelled, if in canceled state | 

<a name="StateEnum"></a>
## Enum: StateEnum

* `draft` (value: `"draft"`)
* `approved` (value: `"approved"`)
* `canceled` (value: `"canceled"`)


<a name="KindEnum"></a>
## Enum: KindEnum

* `earliest` (value: `"earliest"`)
* `quickest` (value: `"quickest"`)
* `cheapest` (value: `"cheapest"`)

