# MissionControl.TodoUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | The ID of the Job related to the Todo task | [optional] 
**milestoneId** | **String** | The ID of the Milestone related to the Todo task | [optional] 
**partId** | **String** | The ID of the Part related to the Todo task | [optional] 
**assignedToId** | **String** | The ID of the Person assigned to the Todo task | [optional] 
**creatorId** | **String** | The ID of the Person who created the task | [optional] 
**kind** | **String** |  | [optional] 
**state** | **String** | The current state of this Todo - an indication of where in the completion lifecycle it is. | [optional] 
**progress** | **String** | Numeric indicator of Todo task completion (0 - starting to 1 - completed). | [optional] 
**dueAt** | **Date** | The date at which todo task is planned to be completed. | [optional] 
**startedAt** | **Date** | The date at which todo task was marked as started. | [optional] 
**completedAt** | **Date** | The date at which todo task reached was marked as completed. | [optional] 
**canceledAt** | **Date** | The date at which this todo was canceled. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `checkPrintData` (value: `"check_print_data"`)
* `customerReview` (value: `"customer_review"`)
* `procurement` (value: `"procurement"`)


<a name="StateEnum"></a>
## Enum: StateEnum

* `canceled` (value: `"canceled"`)
* `completed` (value: `"completed"`)
* `draft` (value: `"draft"`)
* `pending` (value: `"pending"`)
* `running` (value: `"running"`)
* `started` (value: `"started"`)

