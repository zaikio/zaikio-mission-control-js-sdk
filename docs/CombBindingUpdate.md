# MissionControl.CombBindingUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileReferences** | [**[FileReferenceUpdate]**](FileReferenceUpdate.md) |  | [optional] 
**kind** | **String** | The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter. | [optional] 
**shape** | **String** | The shape of the binding comb. Defaults to &#x60;single&#x60; if not set | [optional] 
**hanger** | **Boolean** | Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars). | [optional] 
**diameter** | **String** | The diameter of the rings in the comb given in the &#x60;dimensions_unit&#x60;. | [optional] 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;diameter&#x60;. Must be set if &#x60;diameter&#x60; is set. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `combBinding` (value: `"comb_binding"`)


<a name="ShapeEnum"></a>
## Enum: ShapeEnum

* `single` (value: `"single"`)
* `twin` (value: `"twin"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `foot` (value: `"foot"`)
* `inch` (value: `"inch"`)
* `m` (value: `"m"`)
* `mm` (value: `"mm"`)
* `pica` (value: `"pica"`)
* `point` (value: `"point"`)

