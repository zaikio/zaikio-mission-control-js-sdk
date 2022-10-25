# MissionControl.SignatureCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | A simple description of the contents of this signature | [optional] 
**foldingLayout** | **String** | A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit. | [optional] 
**foldingSequence** | **[String]** | The steps required to execute the fold of this signature. | [optional] 
**pages** | **[Number]** | The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold. | [optional] 
**layout** | **OneOfSignatureCreateLayout** | The box-model of this signature | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `sheet` (value: `"sheet"`)
* `rollSegment` (value: `"roll_segment"`)
* `page` (value: `"page"`)
* `spread` (value: `"spread"`)
* `fold` (value: `"fold"`)
* `box` (value: `"box"`)
* `carton` (value: `"carton"`)

