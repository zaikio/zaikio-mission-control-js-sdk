# MissionControl.DateIsTodayCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsToday rules only admit date subject types (fields with date type). | [optional] 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsToday rules always have \&quot;DateIsToday\&quot; as type. | [optional] 
**value** | **Date** | The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsToday rules use the current date to compare the subject type field value, thus, they do not require the value to be specified. | [optional] 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `JOB_DUE_AT` (value: `"JOB_DUE_AT"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `dateIsToday` (value: `"DateIsToday"`)

