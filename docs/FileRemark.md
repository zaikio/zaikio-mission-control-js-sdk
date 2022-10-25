# MissionControl.FileRemark

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileActionId** | **String** | The UUID of the object this file remark is attached to | 
**severity** | **String** | The severity of this file remark | 
**kind** | **String** | The kind of this file remark | 
**message** | **String** | A detailed human-readable message for this file remark | 
**area** | **String** | The area in the artwork where the file remark occurs, this can be either a page or box id | 
**repeatsInArea** | **Number** | The number of repeats for this file remark in the specified area | 

<a name="SeverityEnum"></a>
## Enum: SeverityEnum

* `error` (value: `"error"`)
* `fix` (value: `"fix"`)
* `info` (value: `"info"`)
* `warning` (value: `"warning"`)


<a name="KindEnum"></a>
## Enum: KindEnum

* `colorMismatch` (value: `"color_mismatch"`)
* `other` (value: `"other"`)

