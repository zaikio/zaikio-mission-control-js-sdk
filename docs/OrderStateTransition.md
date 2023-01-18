# MissionControl.OrderStateTransition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**previousState** | **String** | The state of the Order at the start of this transition | 
**nextState** | **String** | The state the Order is transitioning to | 
**triggeredBy** | **String** | The application or other API caller that triggered the transition, if present | 
**userId** | **String** | The user that triggered the transition, if present | 

<a name="PreviousStateEnum"></a>
## Enum: PreviousStateEnum

* `draft` (value: `":draft"`)
* `confirmed` (value: `":confirmed"`)
* `fulfilled` (value: `":fulfilled"`)
* `canceled` (value: `":canceled"`)


<a name="NextStateEnum"></a>
## Enum: NextStateEnum

* `draft` (value: `":draft"`)
* `confirmed` (value: `":confirmed"`)
* `fulfilled` (value: `":fulfilled"`)
* `canceled` (value: `":canceled"`)

