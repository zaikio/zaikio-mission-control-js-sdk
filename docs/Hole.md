# MissionControl.Hole

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileReferences** | [**[FileReference]**](FileReference.md) |  | 
**kind** | **String** | The kind of the finishing. Hole means there is a hole or many holes made into the substrate of the assigned part in the way described here. | 
**shape** | **String** | The shape of the hole that should be drilled. | 
**diameter** | **String** | The diameter of the hole that should be drilled given in the unit specified in &#x60;dimensions_unit&#x60;. For rectangular holes the diameter is measured edge to edge.  | 
**depth** | **String** | The depth of the hole to be drilled given in the unit specified in &#x60;dimensions_unit&#x60;. | 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;length&#x60; and &#x60;width&#x60;. This property must be set if either &#x60;length&#x60; or &#x60;width&#x60; are given. | 
**grommet** | **Boolean** | Should the hole have a grommet | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `hole` (value: `"hole"`)


<a name="ShapeEnum"></a>
## Enum: ShapeEnum

* `elliptic` (value: `"elliptic"`)
* `rectangular` (value: `"rectangular"`)
* `round` (value: `"round"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `foot` (value: `"foot"`)
* `inch` (value: `"inch"`)
* `m` (value: `"m"`)
* `mm` (value: `"mm"`)
* `pica` (value: `"pica"`)
* `point` (value: `"point"`)

