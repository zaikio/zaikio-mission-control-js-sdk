# MissionControl.Todo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**jobId** | **String** | The ID of the Job related to the Todo task | 
**milestoneId** | **String** | The ID of the Milestone related to the Todo task | 
**partId** | **String** | The ID of the Part related to the Todo task | 
**assignedToId** | **String** | The ID of the Person assigned to the Todo task | 
**creatorId** | **String** | The ID of the Person who created the task | 
**kind** | **String** |  | 
**state** | **String** | The current state of this Todo - an indication of where in the completion lifecycle it is. | 
**progress** | **String** | Numeric indicator of Todo task completion (0 - starting to 1 - completed). | 
**dueAt** | **Date** | The date at which todo task is planned to be completed. | 
**startedAt** | **Date** | The date at which todo task was marked as started. | 
**completedAt** | **Date** | The date at which todo task reached was marked as completed. | 
**canceledAt** | **Date** | The date at which this todo was canceled. | 

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

