# MissionControl.ArrayContains

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**subjectType** | **String** | The list members field to filter results. Specified subject type must be compatible with the associated list member class. ArrayContains rules only admit array subject types (fields with array type). | 
**type** | **String** | The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). ArrayContains rules always have \&quot;ArrayContains\&quot; as type. | 
**value** | **[String]** | The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. ArrayContains rules check value array items are present in subject type field value. | 

<a name="SubjectTypeEnum"></a>
## Enum: SubjectTypeEnum

* `JOB_REFERENCE` (value: `"JOB_REFERENCE"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `arrayContains` (value: `"ArrayContains"`)

