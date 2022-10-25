# MissionControl.LayoutUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**[BoxUpdate]**](BoxUpdate.md) |  | [optional] 
**format** | **String** | The format that is used for the layout description. Currently only the &#x60;box&#x60; format is supported, but in the future this will be extended with a path based format as well. Third party applications must support the &#x60;box&#x60; format, support of path based formats is optional, but required for everything packaging related. | [optional] 
**version** | **String** | The version of the layout description schema used here. Might be a numeric value or a string. | [optional] 
**unit** | **String** | The unit of measurement used for all measures inside this layout | [optional] 

<a name="FormatEnum"></a>
## Enum: FormatEnum

* `box` (value: `"box"`)


<a name="VersionEnum"></a>
## Enum: VersionEnum

* `_1` (value: `"1"`)


<a name="UnitEnum"></a>
## Enum: UnitEnum

* `mm` (value: `"mm"`)
* `cm` (value: `"cm"`)
* `pt` (value: `"pt"`)
* `pica` (value: `"pica"`)
* `pixel` (value: `"pixel"`)
* `inch` (value: `"inch"`)

