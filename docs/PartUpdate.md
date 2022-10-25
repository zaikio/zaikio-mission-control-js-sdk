# MissionControl.PartUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout** | **OneOfPartUpdateLayout** |  | [optional] 
**colors** | [**[ColorUpdate]**](ColorUpdate.md) |  | [optional] 
**desiredSubstrate** | **OneOfPartUpdateDesiredSubstrate** |  | [optional] 
**finishingApplications** | [**[FinishingApplicationUpdate]**](FinishingApplicationUpdate.md) |  | [optional] 
**finishings** | [**[FinishingUpdate]**](FinishingUpdate.md) |  | [optional] 
**fileReferences** | [**[FileReferenceUpdate]**](FileReferenceUpdate.md) |  | [optional] 
**kind** | **String** | The kind of the part. Which parts must be created depends on the kind of the job to which this part belongs. For some kinds it is also possible to create several parts (i.e. content) with different colours, substrates and finishings. | [optional] 
**content** | **String** | Defines what the layout of this part looks like. When &#x60;single_page&#x60; is selected, it is assumed that the layout contains a single page and the &#x60;pages&#x60; attribute must be 2. When &#x60;spread&#x60; is selected, it is assumed that the layout contains a page spread, thus the &#x60;pages&#x60; attribute must be set to 4. When &#x60;multiple_pages&#x60; is selected, the layout may contain an arbitrary number of pages and the &#x60;pages&#x60; attribute must be set accordingly. | [optional] 
**pages** | **Number** | The number of pages that this part&#x27;s layout contains. Since a single page of paper has a front and a back side, the minimal amount of pages per part is two. If a part contains more than 2 pages the amount must be divisible by two. When &#x60;content&#x60; is set to &#x60;single_page&#x60; the number of pages must equal 2, when &#x60;content&#x60; is set to &#x60;spread&#x60; the number of pages must equal 4. When &#x27;content&#x27; is set to &#x60;multiple_pages&#x60; the number of pages can be set arbitrarily. | [optional] 
**dimensions** | **[String]** | The width and height of the part in the unit set in &#x60;dimensions_unit&#x60;. The first element of this array corresponds to the width, the second one to the height (or length) of the part in closed state. | [optional] 
**dimensionsUnit** | **String** | The unit in which the dimensions are given | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `businessCard` (value: `"business_card"`)
* `brochure` (value: `"brochure"`)
* `_case` (value: `"case"`)
* `content` (value: `"content"`)
* `cover` (value: `"cover"`)
* `jacket` (value: `"jacket"`)
* `leaflet` (value: `"leaflet"`)
* `poster` (value: `"poster"`)
* `label` (value: `"label"`)
* `packaging` (value: `"packaging"`)
* `endpaper` (value: `"endpaper"`)


<a name="ContentEnum"></a>
## Enum: ContentEnum

* `singlePage` (value: `"single_page"`)
* `spread` (value: `"spread"`)
* `multiplePages` (value: `"multiple_pages"`)
* `threeDimensionalObject` (value: `"three_dimensional_object"`)


<a name="DimensionsUnitEnum"></a>
## Enum: DimensionsUnitEnum

* `cm` (value: `"cm"`)
* `mm` (value: `"mm"`)
* `m` (value: `"μm"`)

