# MissionControl.DateLessThan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. | 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). LessThan rules always have \&quot;LessThan\&quot; as type. | 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `DUE_AT` (value: `"JOB_DUE_AT"`)
* `QUANTITY` (value: `"JOB_QUANTITY"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `lessThan` (value: `"LessThan"`)
