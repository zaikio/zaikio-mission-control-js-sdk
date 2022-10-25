# MissionControl.StringEnds

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringEnds rules only admit string subject types (fields with string type). | 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \&quot;StringEnds\&quot; as type. | 
**value** | **String** | The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value. | 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `JOB_NAME` (value: `"JOB_NAME"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `stringEnds` (value: `"StringEnds"`)

