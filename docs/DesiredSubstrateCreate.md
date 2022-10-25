# MissionControl.DesiredSubstrateCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uniqueMaterialIdentifier** | **String** | The Zaikio unique material identifier that uniquely references a single substrate. If given, this indicates that the part must be printed on that substrate and the printer is not allowed so select a substitute. When left empty they printer may chose which ever substrate they see fit. When the unique identifier is given, all other properties must be left empty. | [optional] 
**category** | **String** | If given, the printer must use a substrate that matches this category. Can be combined (but does not have to be) with &#x60;coating&#x60; and &#x60;paper_weight&#x60; information. | [optional] 
**paperWeight** | **Number** | The weight of the paper that must be used by the printer. Can be combined with &#x60;coating&#x60; and &#x60;category&#x60; information. Depending on the &#x60;paper_weight_unit&#x60; this represents either a grammage or a US/Canada paper weight. If given, the &#x60;paper_weight_unit&#x60; must also be set. | [optional] 
**paperWeightUnit** | **String** | When set to &#x60;gsm&#x60; the &#x60;paper_weight&#x60; property will be interpreted as grammage in accordance with ISO 536. When set to &#x60;lb&#x60; the &#x60;paper_weight&#x60; will be interpreted as an US/Canada paper weight in pounds in reference to the weight of a 500 sheet ream of the uncut substrate. | [optional] 
**coating** | **[Boolean]** | When given, defines if the paper&#x27;s surfaces must be coated or must not be coated. The first item in the array refers to the front side of the substrate, the last item in the array refers to the back side of the substrate. | [optional] 
**grain** | **String** | When given, defines the required grain direction of the substrate that is to be used. | [optional] 

<a name="CategoryEnum"></a>
## Enum: CategoryEnum

* `coated` (value: `"coated"`)
* `coatedGlossy` (value: `"coated_glossy"`)
* `coatedMatte` (value: `"coated_matte"`)
* `uncoated` (value: `"uncoated"`)
* `woodFreeUncoated` (value: `"wood_free_uncoated"`)


<a name="PaperWeightUnitEnum"></a>
## Enum: PaperWeightUnitEnum

* `gsm` (value: `"gsm"`)
* `lbs` (value: `"lbs"`)


<a name="GrainEnum"></a>
## Enum: GrainEnum

* `_short` (value: `"short"`)
* `_long` (value: `"long"`)

