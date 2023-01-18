# MissionControl.BoxModelPageCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**kind** | **String** |  | [optional] 
**sides** | **String** |  | [optional] 
**dimensions** | [**Dimensions1**](Dimensions1.md) |  | [optional] 
**position** | [**Position1**](Position1.md) |  | [optional] 
**front** | [**Front3**](Front3.md) |  | [optional] 
**rear** | [**Rear1**](Rear1.md) |  | [optional] 
**bleeds** | [**Bleeds3**](Bleeds3.md) |  | [optional] 
**printFreeMargins** | [**PrintFreeMargins3**](PrintFreeMargins3.md) |  | [optional] 
**children** | [**[BoxModelPageChildrenCreate]**](BoxModelPageChildrenCreate.md) |  | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `page` (value: `"page"`)


<a name="SidesEnum"></a>
## Enum: SidesEnum

* `one` (value: `"one"`)
* `headtohead` (value: `"headtohead"`)
* `headtofoot` (value: `"headtofoot"`)

