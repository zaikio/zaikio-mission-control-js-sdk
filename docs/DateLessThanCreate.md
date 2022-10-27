# MissionControl.DateLessThanCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. | [optional] 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). LessThan rules always have \&quot;LessThan\&quot; as type. | [optional] 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `JOB_DUE_AT` (value: `"JOB_DUE_AT"`)
* `JOB_PROGRESS` (value: `"JOB_PROGRESS"`)
* `JOB_QUANTITY` (value: `"JOB_QUANTITY"`)
* `SUBSTRATE_PAPER_WEIGHT` (value: `"SUBSTRATE_PAPER_WEIGHT"`)
* `MILESTONE_POSITION` (value: `"MILESTONE_POSITION"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `lessThan` (value: `"LessThan"`)

