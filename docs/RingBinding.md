# MissionControl.RingBinding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileReferences** | [**[FileReference]**](FileReference.md) |  | 
**kind** | **String** | The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether. | 
**shape** | **String** | The shape of the rings used for binding | 
**diameter** | **String** |  | 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;diameter&#x60;. Must be set if &#x60;diameter&#x60; is set. | 

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

