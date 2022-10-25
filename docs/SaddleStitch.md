# MissionControl.SaddleStitch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileReferences** | [**[FileReference]**](FileReference.md) |  | 
**kind** | **String** | The kind of the finishing. A saddle stitch is a form of binding in which the center of the fold is placed across the saddle of the stitcher and then wire staples are driven through and clinched on the inside.  | 
**stapleShape** | **String** | The shape of the staples used for the stitch | 
**staples** | **Number** | The number of staples used for the entire stitch | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `saddleStitch` (value: `"saddle_stitch"`)


<a name="StapleShapeEnum"></a>
## Enum: StapleShapeEnum

* `butted` (value: `"butted"`)
* `clinchedOut` (value: `"clinched_out"`)
* `crown` (value: `"crown"`)
* `eyelet` (value: `"eyelet"`)
* `overlap` (value: `"overlap"`)

