# MissionControl.RingBindingCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileReferences** | [**[FileReferenceCreate]**](FileReferenceCreate.md) |  | [optional] 
**kind** | **String** | The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether. | [optional] 
**shape** | **String** | The shape of the rings used for binding | [optional] 
**diameter** | **String** |  | [optional] 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;diameter&#x60;. Must be set if &#x60;diameter&#x60; is set. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `ringBinding` (value: `"ring_binding"`)


<a name="ShapeEnum"></a>
## Enum: ShapeEnum

* `d` (value: `"d"`)
* `oval` (value: `"oval"`)
* `round` (value: `"round"`)
* `slantD` (value: `"slant_d"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `foot` (value: `"foot"`)
* `inch` (value: `"inch"`)
* `m` (value: `"m"`)
* `mm` (value: `"mm"`)
* `pica` (value: `"pica"`)
* `point` (value: `"point"`)

