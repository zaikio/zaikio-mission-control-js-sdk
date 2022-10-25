# MissionControl.ProductionStrategyUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | The ID of the Job this ProductionStrategy belongs to | [optional] 
**state** | **String** | What is the status of this strategy | [optional] 
**kind** | **String** | What approach does this strategy optimize for | [optional] 

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

