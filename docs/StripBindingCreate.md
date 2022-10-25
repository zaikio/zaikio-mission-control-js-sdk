# MissionControl.StripBindingCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileReferences** | [**[FileReferenceCreate]**](FileReferenceCreate.md) |  | [optional] 
**kind** | **String** | The kind of the finishing. Strip binding is a binding process where a strip of plastic with attached pins is used to bind several signatures or parts together. Strip binding is commonly used for document bindings that require tempering resistance (i.e. notary documents, tax reports, balance sheets) | [optional] 
**pinHeight** | **String** | The height of the pins used in the binding, given in the &#x60;dimensions_unit&#x60;. | [optional] 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;diameter&#x60;. Must be set if &#x60;diameter&#x60; is set. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `stripBinding` (value: `"strip_binding"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `foot` (value: `"foot"`)
* `inch` (value: `"inch"`)
* `m` (value: `"m"`)
* `mm` (value: `"mm"`)
* `pica` (value: `"pica"`)
* `point` (value: `"point"`)

