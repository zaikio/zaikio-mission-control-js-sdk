# MissionControl.PerforationCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileReferences** | [**[FileReferenceCreate]**](FileReferenceCreate.md) |  | [optional] 
**kind** | **String** | The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation. | [optional] 
**depth** | **String** | The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional. | [optional] 
**teeth** | **Number** | The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `perforation` (value: `"perforation"`)

