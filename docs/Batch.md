# MissionControl.Batch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**organizationId** | **String** |  | 
**permittedFinishings** | **[String]** | A list of finishings that could be batched together here. If a finishing is not provided in this list then production planning/batching software will not attempt to optimize for those finishings of the batched parts. This does not mean that they cannot be produced as a batch, but the best outcomes should not be expected. | 
**members** | [**[BatchMember]**](BatchMember.md) |  | 
**batchSignature** | **OneOfBatchBatchSignature** |  | 

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

