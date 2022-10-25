# MissionControl.ColorUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surface** | **String** | Whether this color is to be applied on the front or back of the substrate | [optional] 
**system** | **String** | The color reference system in which color name is given | [optional] 
**name** | **String** | The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface. | [optional] 
**coverage** | **String** | The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings. | [optional] 

<a name="SurfaceEnum"></a>
## Enum: SurfaceEnum

* `front` (value: `"front"`)
* `back` (value: `"back"`)


<a name="SystemEnum"></a>
## Enum: SystemEnum

* `CMYK` (value: `"CMYK"`)
* `HKS` (value: `"HKS"`)
* `pantone` (value: `"pantone"`)

