# MissionControl.Signature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**kind** | **String** | A simple description of the contents of this signature | 
**foldingLayout** | **String** | A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit. | 
**foldingSequence** | **[String]** | The steps required to execute the fold of this signature. | 
**pages** | **[Number]** | The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold. | 
**layout** | **OneOfSignatureLayout** | The box-model of this signature | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `sheet` (value: `"sheet"`)
* `rollSegment` (value: `"roll_segment"`)
* `page` (value: `"page"`)
* `spread` (value: `"spread"`)
* `fold` (value: `"fold"`)
* `box` (value: `"box"`)
* `carton` (value: `"carton"`)

