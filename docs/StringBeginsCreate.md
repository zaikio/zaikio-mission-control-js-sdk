# MissionControl.StringBeginsCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringBegins rules only admit string subject types (fields with string type). | [optional] 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringBegins rules always have \&quot;StringBegins\&quot; as type. | [optional] 
**value** | **String** | The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value begins with rule value. | [optional] 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `JOB_NAME` (value: `"JOB_NAME"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `stringBegins` (value: `"StringBegins"`)

