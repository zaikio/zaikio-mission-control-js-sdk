# MissionControl.BatchCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** |  | [optional] 
**permittedFinishings** | **[String]** | A list of finishings that could be batched together here. If a finishing is not provided in this list then production planning/batching software will not attempt to optimize for those finishings of the batched parts. This does not mean that they cannot be produced as a batch, but the best outcomes should not be expected. | [optional] 
**imposingIds** | **[String]** | This is a convenience method for binding ALL of the signatures contained within an Imposing into the Batch. The list is not saved, but will create linkages between the Signatures and the Batch which can be found in &#x60;members&#x60;. | [optional] 
**batchSignature** | **OneOfBatchCreateBatchSignature** |  | [optional] 

<a name="[PermittedFinishingsEnum]"></a>
## Enum: [PermittedFinishingsEnum]

* `combBinding` (value: `"comb_binding"`)
* `embossing` (value: `"embossing"`)
* `foilStamp` (value: `"foil_stamp"`)
* `glue` (value: `"glue"`)
* `headBand` (value: `"head_band"`)
* `spiralBinding` (value: `"spiral_binding"`)
* `stripBinding` (value: `"strip_binding"`)
* `engraving` (value: `"engraving"`)
* `hole` (value: `"hole"`)
* `lamination` (value: `"lamination"`)
* `perforation` (value: `"perforation"`)
* `perfectBinding` (value: `"perfect_binding"`)
* `ringBinding` (value: `"ring_binding"`)
* `saddleStitch` (value: `"saddle_stitch"`)
* `threadSewing` (value: `"thread_sewing"`)

