# MissionControl.BoxCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**[BoxCreate]**](BoxCreate.md) |  | [optional] 
**id** | **String** |  | [optional] 
**kind** | **String** | Describes the kind of this box | [optional] 
**position** | **[Number]** | The position where the top left corner of this box is placed relative to the position of it&#x27;s parent. The first coordinate describes distance from the &#x60;top&#x60;, the second coordinate describes the distance from the &#x60;left&#x60;. All measurements are given in the unit selected in the header. | [optional] 
**dimensions** | **[Number]** | The dimensions of the box given in the measurement unit selected in the header. The first array value represents the &#x60;length&#x60; of the box (x-axis), while the second array value represents the &#x60;height&#x60; (y-axis). | [optional] 
**bleeds** | **[Number]** | The size of the bleeds outside the box given in the measurement unit selected in the header. The array values represent the bleeds for the following sides of the box, in clockwise order from &#x60;top&#x60;, &#x60;right&#x60;, &#x60;bottom&#x60;, &#x60;left&#x60;. If there is no bleed for a side, the corresponding value must be 0. | [optional] 
**printFreeMargins** | **[Number]** | The size of the print free area inside the boxen given in the measurement unit selected in the header. The array values represent the bleeds for the following parts of the box, in clockwise order from &#x60;top&#x60;, &#x60;right&#x60;, &#x60;bottom&#x60;, &#x60;left&#x60;. If there is no print free area for a side of the box, the corresponding value must be 0. | [optional] 
**pageNumbers** | **[Number]** | The page numbers that are represented by this box. The first element in the array corresponds to the page number of the facing side of the page, the second element in the array corresponds to the page number of the back side of the page. | [optional] 
**reference** | **String** |  | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `sheet` (value: `"sheet"`)
* `rollSegment` (value: `"roll_segment"`)
* `spread` (value: `"spread"`)
* `page` (value: `"page"`)
* `fold` (value: `"fold"`)
* `finishing` (value: `"finishing"`)
* `flap` (value: `"flap"`)
* `spine` (value: `"spine"`)
* `mark` (value: `"mark"`)

