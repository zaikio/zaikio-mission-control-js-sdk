# MissionControl.MaterialEstimateCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workstepEstimateId** | **String** |  | [optional] 
**description** | **String** | An accurate description of the material, that allows the identification of the material by a human for sourcing and pricing. | [optional] 
**category** | **String** | The category which this material belongs to. Can be left empty if unknown or no available category applies. | [optional] 
**amount** | **Number** | The amount of the material that is required to complete this task. Given in the unit defined in &#x60;unit&#x60;. | [optional] 
**unit** | **String** | The unit that the required &#x60;amount&#x60; of this material is given in. | [optional] 
**costs** | **Number** | The costs for the total amount of material required to complete this task. This cost refers to the entire amount, not to a single unit. The costs are given in the integer sub-currency of the currency selected for the estimate (i.e. cents). | [optional] 

<a name="CategoryEnum"></a>
## Enum: CategoryEnum

* `inkoffset` (value: `"ink/offset"`)
* `platesoffset` (value: `"plates/offset"`)
* `substratepaper` (value: `"substrate/paper"`)


<a name="UnitEnum"></a>
## Enum: UnitEnum

* `box` (value: `"box"`)
* `cm` (value: `"cm"`)
* `g` (value: `"g"`)
* `kg` (value: `"kg"`)
* `liter` (value: `"liter"`)
* `meter` (value: `"meter"`)
* `mm` (value: `"mm"`)
* `pallet` (value: `"pallet"`)
* `piece` (value: `"piece"`)
* `ream` (value: `"ream"`)
* `sheet` (value: `"sheet"`)

