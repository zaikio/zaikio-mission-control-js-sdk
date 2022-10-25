# MissionControl.EmbossingCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileReferences** | [**[FileReferenceCreate]**](FileReferenceCreate.md) |  | [optional] 
**kind** | **String** | The kind of the finishing. Embossing means that a stamp or die with a raised pattern on its surface is used to imprint this pattern into the substrate of a part. Embossing can either be towards the beholder (debossing) or down into the substrate (embossing) or both (embossing/debossing). Please note that for embossing with foils you must use the FoilStamp finishing. | [optional] 
**method** | **String** | The method used for embossing. Please note that for \&quot;foil embossing\&quot; the foil stamping finishing must be used.  | [optional] 
**direction** | **String** | The vertical direction in which the stamp will be applied. There are three possibilities. The most common - and also the default value - is to imprint the pattern down into the plane of the substrate (embossed), so that a step down can be felt between the substrate and the site that was embossed. Alternativly, the imprint can be towards the beholder, so that a step up is felt between the substrate and the embossed site (debossed). Lastly, a combined stamping can be applied which goes in both directions. (embossed-debossed).  | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `embossing` (value: `"embossing"`)


<a name="MethodEnum"></a>
## Enum: MethodEnum

* `blind` (value: `"blind"`)
* `braille` (value: `"braille"`)


<a name="DirectionEnum"></a>
## Enum: DirectionEnum

* `debossed` (value: `"debossed"`)
* `embossed` (value: `"embossed"`)
* `embossedDebossed` (value: `"embossed-debossed"`)

