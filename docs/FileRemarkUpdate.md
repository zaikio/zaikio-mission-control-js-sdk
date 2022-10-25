# MissionControl.FileRemarkUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileActionId** | **String** | The UUID of the object this file remark is attached to | [optional] 
**severity** | **String** | The severity of this file remark | [optional] 
**kind** | **String** | The kind of this file remark | [optional] 
**message** | **String** | A detailed human-readable message for this file remark | [optional] 
**area** | **String** | The area in the artwork where the file remark occurs, this can be either a page or box id | [optional] 
**repeatsInArea** | **Number** | The number of repeats for this file remark in the specified area | [optional] 

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

