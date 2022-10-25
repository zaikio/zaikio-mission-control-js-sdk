# MissionControl.WorkstepGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**kind** | **String** | The kind all worksteps within this group must adhere to | 
**phase** | **String** | The calculated current phase of this group. Read only | 
**state** | **String** | The calculated state of this group. Read only | 
**completionPercent** | **String** | The current completion percentage of all worksteps within this group | 
**managed** | **Boolean** | A managed group allows simple updates to be applied to the whole group of worksteps as opposed to individual worksteps within the group. Good for less complex use cases to reduce complexity of integration and reporting. | 
**tainted** | **Boolean** | Managed state can only be manually updated if the group has never received a granular update to one of the worksteps within the group. If the group has received such an update then the managed state will be set to false and this value will be true, indicating that it is impossible to revert the group back to a managed state | 

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


<a name="PhaseEnum"></a>
## Enum: PhaseEnum

* `preparation` (value: `"preparation"`)
* `execution` (value: `"execution"`)
* `cleanup` (value: `"cleanup"`)


<a name="StateEnum"></a>
## Enum: StateEnum

* `waiting` (value: `"waiting"`)
* `pending` (value: `"pending"`)
* `running` (value: `"running"`)
* `paused` (value: `"paused"`)
* `completed` (value: `"completed"`)
* `canceled` (value: `"canceled"`)

