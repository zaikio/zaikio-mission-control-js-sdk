# MissionControl.WorkstepEstimateCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimateId** | **String** |  | [optional] 
**workpieceType** | **String** | The object type to which the &#x60;workpiece_id&#x60; refers. Both are required to look up a Workpiece. | [optional] 
**workpieceId** | **String** |  | [optional] 
**kind** | **String** | The kind of this workstep. Must be one of the workstep kinds known for shopfloor worksteps, or a kind that is only used for workstep estimates (see list below). This can also be set to other, for semantically unknown worksteps, but in this case the description property must be set. | [optional] 
**description** | **String** | A more detailed description of the workstep than &#x60;kind&#x60;. It is optional, but must be filled out if &#x60;kind&#x60; is set to &#x60;other&#x60;. | [optional] 
**internalLaborCosts** | **Number** | The internal labour costs associated with this workstep. Internal labor is all labor that is performed by employees of the producing organisation. The amount is given in the integer sub-unit of the currency selected in the parent estimates&#x27; &#x60;currency&#x60; property (i.e. cents). | [optional] 
**externalLaborCosts** | **Number** | The external labour costs associated with this workstep. External labour costs are all costs The amount is given in the integer sub-unit of the currency selected in the parent estimates&#x27; &#x60;currency&#x60; property (i.e. cents). | [optional] 
**durationForPreparation** | **Number** | The estimated time in seconds that is required to perform all operations necessary in preparation of the estimated workstep. | [optional] 
**durationForExecution** | **Number** | The estimated time in seconds that is required to execute of the estimated workstep. | [optional] 
**durationForCleanup** | **Number** | The estimated time in seconds that is required to perform all operations necessary to clean up after the execution of the estimated workstep. | [optional] 
**materialCosts** | **Number** |  | [optional] 

<a name="WorkpieceTypeEnum"></a>
## Enum: WorkpieceTypeEnum

* `job` (value: `"Job"`)
* `part` (value: `"Part"`)
* `packaging` (value: `"Packaging"`)
* `finishing` (value: `"Finishing"`)


<a name="KindEnum"></a>
## Enum: KindEnum

* `addressing` (value: `"addressing"`)
* `boxing` (value: `"boxing"`)
* `combBinding` (value: `"comb_binding"`)
* `counting` (value: `"counting"`)
* `ctp` (value: `"ctp"`)
* `cutting` (value: `"cutting"`)
* `digitalPrinting` (value: `"digital_printing"`)
* `digitalWebPrinting` (value: `"digital_web_printing"`)
* `embossing` (value: `"embossing"`)
* `engraving` (value: `"engraving"`)
* `envelopeStuffing` (value: `"envelope_stuffing"`)
* `flexoPrinting` (value: `"flexo_printing"`)
* `foilStamping` (value: `"foil_stamping"`)
* `folding` (value: `"folding"`)
* `franking` (value: `"franking"`)
* `gluing` (value: `"gluing"`)
* `headBanding` (value: `"head_banding"`)
* `holeDrilling` (value: `"hole_drilling"`)
* `inketWebPrinting` (value: `"inket_web_printing"`)
* `inkjetPrinting` (value: `"inkjet_printing"`)
* `intermediateCutting` (value: `"intermediate_cutting"`)
* `laminating` (value: `"laminating"`)
* `letterpressPrinting` (value: `"letterpress_printing"`)
* `offsetPrinting` (value: `"offset_printing"`)
* `offsetUvPrinting` (value: `"offset_uv_printing"`)
* `offsetUvlePrinting` (value: `"offset_uvle_printing"`)
* `offsetWebPrinting` (value: `"offset_web_printing"`)
* `offsetWebUvPrinting` (value: `"offset_web_uv_printing"`)
* `offsetWebUvlePrinting` (value: `"offset_web_uvle_printing"`)
* `padPrinting` (value: `"pad_printing"`)
* `perfectBinding` (value: `"perfect_binding"`)
* `perforating` (value: `"perforating"`)
* `preCutting` (value: `"pre_cutting"`)
* `ringBinding` (value: `"ring_binding"`)
* `saddleStitching` (value: `"saddle_stitching"`)
* `shrinkWrapping` (value: `"shrink_wrapping"`)
* `spiralBinding` (value: `"spiral_binding"`)
* `stripBinding` (value: `"strip_binding"`)
* `threadSewing` (value: `"thread_sewing"`)
* `wrapping` (value: `"wrapping"`)

