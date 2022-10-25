# MissionControl.Packaging

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**jobId** | **String** |  | 
**previousPackagingId** | **String** | The UUID of a packaging which has to be packed into this packaging. | 
**kind** | **String** | The kind of the packaging | 
**amount** | **Number** | The amount of products to be packed in the chosen kind of the packaging. | 

<a name="KindEnum"></a>
## Enum: KindEnum

* `addressing` (value: `"addressing"`)
* `banding` (value: `"banding"`)
* `boxing` (value: `"boxing"`)
* `counting` (value: `"counting"`)
* `filing` (value: `"filing"`)
* `franking` (value: `"franking"`)
* `shrinkWrapping` (value: `"shrink_wrapping"`)
* `wrapping` (value: `"wrapping"`)

