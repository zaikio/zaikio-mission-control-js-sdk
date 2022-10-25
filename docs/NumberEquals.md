# MissionControl.NumberEquals

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. | 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greather than, string begins with, etc). Equals rules always have \&quot;Equals\&quot; as type. | 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `FINISHING_KIND` (value: `"FINISHING_KIND"`)
* `JOB_DUE_AT` (value: `"JOB_DUE_AT"`)
* `JOB_KIND` (value: `"JOB_KIND"`)
* `JOB_NAME` (value: `"JOB_NAME"`)
* `JOB_QUANTITY` (value: `"JOB_QUANTITY"`)
* `TODO_STATE` (value: `"TODO_STATE"`)
* `WORKSTEP_STATE` (value: `"WORKSTEP_STATE"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `equals` (value: `"Equals"`)

