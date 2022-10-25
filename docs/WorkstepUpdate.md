# MissionControl.WorkstepUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**kind** | **String** |  | [optional] 
**state** | **String** | The current state of this Workstep - an indication of where in the lifecycle it is. Depending on the job reporting progress, not all steps might be followed linearly. | [optional] 
**groupingId** | **String** | The ID of the group this workstep is part of | [optional] 
**expectedCostsForWork** | **Number** | # TODO | [optional] 
**expectedCostsForMaterials** | **Number** | # TODO | [optional] 
**expectedDurationForPreparation** | **Number** | # TODO | [optional] 
**expectedDurationForExecution** | **Number** | # TODO | [optional] 
**expectedDurationForCleanup** | **Number** | # TODO | [optional] 
**actualCostsForWork** | **Number** | # TODO | [optional] 
**actualCostsForMaterials** | **Number** | # TODO | [optional] 
**actualDurationForPreparation** | **Number** | # TODO | [optional] 
**actualDurationForExecution** | **Number** | # TODO | [optional] 
**actualDurationForCleanup** | **Number** | # TODO | [optional] 
**actualDurationForException** | **Number** | # TODO | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `ctp` (value: `"ctp"`)
* `digitalPrinting` (value: `"digital_printing"`)
* `digitalWebPrinting` (value: `"digital_web_printing"`)
* `inkjetPrinting` (value: `"inkjet_printing"`)
* `inketWebPrinting` (value: `"inket_web_printing"`)
* `offsetPrinting` (value: `"offset_printing"`)
* `offsetUvPrinting` (value: `"offset_uv_printing"`)
* `offsetUvlePrinting` (value: `"offset_uvle_printing"`)
* `offsetWebPrinting` (value: `"offset_web_printing"`)
* `offsetWebUvPrinting` (value: `"offset_web_uv_printing"`)
* `offsetWebUvlePrinting` (value: `"offset_web_uvle_printing"`)
* `flexoPrinting` (value: `"flexo_printing"`)
* `letterpressPrinting` (value: `"letterpress_printing"`)
* `padPrinting` (value: `"pad_printing"`)
* `preCutting` (value: `"pre_cutting"`)
* `cutting` (value: `"cutting"`)
* `intermediateCutting` (value: `"intermediate_cutting"`)
* `folding` (value: `"folding"`)
* `laminating` (value: `"laminating"`)
* `perfectBinding` (value: `"perfect_binding"`)
* `holeDrilling` (value: `"hole_drilling"`)
* `combBinding` (value: `"comb_binding"`)
* `embossing` (value: `"embossing"`)
* `engraving` (value: `"engraving"`)
* `foilStamping` (value: `"foil_stamping"`)
* `gluing` (value: `"gluing"`)
* `headBanding` (value: `"head_banding"`)
* `perforating` (value: `"perforating"`)
* `ringBinding` (value: `"ring_binding"`)
* `saddleStitching` (value: `"saddle_stitching"`)
* `spiralBinding` (value: `"spiral_binding"`)
* `stripBinding` (value: `"strip_binding"`)
* `threadSewing` (value: `"thread_sewing"`)
* `envelopeStuffing` (value: `"envelope_stuffing"`)
* `counting` (value: `"counting"`)
* `wrapping` (value: `"wrapping"`)
* `boxing` (value: `"boxing"`)
* `shrinkWrapping` (value: `"shrink_wrapping"`)
* `addressing` (value: `"addressing"`)
* `franking` (value: `"franking"`)


<a name="StateEnum"></a>
## Enum: StateEnum

* `waiting` (value: `"waiting"`)
* `pending` (value: `"pending"`)
* `running` (value: `"running"`)
* `paused` (value: `"paused"`)
* `completed` (value: `"completed"`)
* `canceled` (value: `"canceled"`)

