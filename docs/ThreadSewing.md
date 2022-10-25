# MissionControl.ThreadSewing

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileReferences** | [**[FileReference]**](FileReference.md) |  | 
**kind** | **String** | The kind of the finishing. Thread sewing is a process where a thread and a needle is used to sew together several parts of a print job. It is most commonly used to combine the different signatures of the content of books. | 
**pattern** | **String** | The sewing pattern that should be used to create the seam. The default is &#x60;normal&#x60;. | 
**blindStitch** | **Boolean** | Whether or not to perform a blind stitch at the end of the seam line | 
**threadThickness** | **String** | The thickness of the string that should be used for this seam. Given in the unit specified in &#x60;dimensions_unit&#x60;. | 
**dimensionsUnit** | **String** | The unit for the dimensions given in &#x60;diameter&#x60;. Must be set if &#x60;diameter&#x60; is set. | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `threadSewing` (value: `"thread_sewing"`)


<a name="PatternEnum"></a>
## Enum: PatternEnum

* `combinedStaggered` (value: `"combined_staggered"`)
* `normal` (value: `"normal"`)
* `side` (value: `"side"`)
* `staggered` (value: `"staggered"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `foot` (value: `"foot"`)
* `inch` (value: `"inch"`)
* `m` (value: `"m"`)
* `mm` (value: `"mm"`)
* `pica` (value: `"pica"`)
* `point` (value: `"point"`)

