# MissionControl.ImposingUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partId** | **String** | The ID of the Part this Imposing provides | [optional] 
**technique** | **String** | The printing technique that has been selected for this Imposing. | [optional] 
**mode** | **String** | The printing mode that has been selected for this imposing. | [optional] 
**signatureMixing** | **String** | What are the allowed properties for mixing multiple signatures on a sheet for this Imposing. &#x60;single&#x60; prevents more than one signature appearing on a single sheet. &#x60;multiple&#x60; will allow more than one signature from this Imposing to be printed on the same sheet, and &#x60;gang&#x60; will allow the sheet to be filled with signatures from any available source to maximise efficiency. If unset, the default value is &#x60;single&#x60;. | [optional] 
**orientation** | **String** | How should signatures be laid out on the sheet. &#x60;maximize_substrate_utilization&#x60; is the default option and should result in the densest packing for efficiency. &#x60;long_side_follows_grain&#x60; allows folding of portait format documents. &#x60;short_side_follows_grain&#x60; allows folding of landscape format documents. The default value, if unset, is &#x60;maximize_substrate_utilization&#x60;. | [optional] 
**machineId** | **String** | The ID of the Printer that has been selected to print this Imposing. This machine has been determined as the correct one to use for this ProductionStrategy. If this needs to change once the ProductionStrategy has been approved, a new ProductionStrategy should be created and the existing one cancelled to ensutre that color correction/imposing etc can be performed for the new machine&#x27;s characteristics. | [optional] 
**requestedMachineId** | **String** | The ID of the Machine that is requested to handle the printing of this Imposing. This may not be the finally utilised machine, due to scheduling, maintenance or other factors. The actual machine used is available as &#x60;machine_id&#x60;. This input should be used as guidance of the target printing environment for software running color correction or deriving signatures. | [optional] 
**signatures** | [**[SignatureUpdate]**](SignatureUpdate.md) |  | [optional] 
**substrate** | **OneOfImposingUpdateSubstrate** |  | [optional] 

<a name="TechniqueEnum"></a>
## Enum: TechniqueEnum

* `none` (value: `"none"`)
* `digital` (value: `"digital"`)
* `offset` (value: `"offset"`)
* `offsetUv` (value: `"offset_uv"`)
* `digitalWeb` (value: `"digital_web"`)
* `offsetWeb` (value: `"offset_web"`)
* `inkjet` (value: `"inkjet"`)
* `inkjetWeb` (value: `"inkjet_web"`)
* `pad` (value: `"pad"`)
* `letterpress` (value: `"letterpress"`)


<a name="ModeEnum"></a>
## Enum: ModeEnum

* `perfecting` (value: `"perfecting"`)
* `turnOrTumble` (value: `"turn_or_tumble"`)
* `turn` (value: `"turn"`)
* `tumble` (value: `"tumble"`)


<a name="SignatureMixingEnum"></a>
## Enum: SignatureMixingEnum

* `single` (value: `"single"`)
* `multiple` (value: `"multiple"`)
* `gang` (value: `"gang"`)


<a name="OrientationEnum"></a>
## Enum: OrientationEnum

* `maximizeSubstrateUtilization` (value: `"maximize_substrate_utilization"`)
* `longSideFollowsGrain` (value: `"long_side_follows_grain"`)
* `shortSideFollowsGrain` (value: `"short_side_follows_grain"`)

