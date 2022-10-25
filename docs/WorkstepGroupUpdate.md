# MissionControl.WorkstepGroupUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**kind** | **String** | The kind all worksteps within this group must adhere to | [optional] 
**completionPercent** | **String** | The current completion percentage of all worksteps within this group | [optional] 
**managed** | **Boolean** | A managed group allows simple updates to be applied to the whole group of worksteps as opposed to individual worksteps within the group. Good for less complex use cases to reduce complexity of integration and reporting. | [optional] 

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

