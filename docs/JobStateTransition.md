# MissionControl.JobStateTransition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**previousState** | **String** | The state of the Job at the start of this transition | 
**nextState** | **String** | The state the Job is transitioning to | 
**triggeredBy** | **String** | The application or other API caller that triggered the transition, if present | 
**userId** | **String** | The user that triggered the transition, if present | 

<a name="PreviousStateEnum"></a>
## Enum: PreviousStateEnum

* `draft` (value: `":draft"`)
* `pending` (value: `":pending"`)
* `prepress` (value: `":prepress"`)
* `press` (value: `":press"`)
* `postpress` (value: `":postpress"`)
* `packaging` (value: `":packaging"`)
* `completed` (value: `":completed"`)
* `canceled` (value: `":canceled"`)


<a name="NextStateEnum"></a>
## Enum: NextStateEnum

* `draft` (value: `":draft"`)
* `pending` (value: `":pending"`)
* `prepress` (value: `":prepress"`)
* `press` (value: `":press"`)
* `postpress` (value: `":postpress"`)
* `packaging` (value: `":packaging"`)
* `completed` (value: `":completed"`)
* `canceled` (value: `":canceled"`)

