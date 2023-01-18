# MissionControl.ColorCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surface** | **String** | Whether this color is to be applied on the front or back of the substrate | [optional] 
**system** | **String** | The color reference system in which color name is given | [optional] 
**name** | **String** | The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface. | [optional] 
**coverage** | **String** | The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings. | [optional] 
**printStandard** | **String** | Set an output desired color calibration to reduce likelihood of errors. | [optional] 

<a name="SurfaceEnum"></a>
## Enum: SurfaceEnum

* `front` (value: `"front"`)
* `back` (value: `"back"`)


<a name="SystemEnum"></a>
## Enum: SystemEnum

* `CMYK` (value: `"CMYK"`)
* `HKS` (value: `"HKS"`)
* `pantone` (value: `"pantone"`)


<a name="PrintStandardEnum"></a>
## Enum: PrintStandardEnum

* `cRPC3` (value: `"CRPC3"`)
* `cRPC6` (value: `"CRPC6"`)
* `fOGRA39` (value: `"FOGRA39"`)
* `fOGRA40` (value: `"FOGRA40"`)
* `fOGRA45` (value: `"FOGRA45"`)
* `fOGRA46` (value: `"FOGRA46"`)
* `fOGRA47` (value: `"FOGRA47"`)
* `fOGRA51` (value: `"FOGRA51"`)
* `fOGRA52` (value: `"FOGRA52"`)
* `fOGRA54` (value: `"FOGRA54"`)
* `fOGRA59` (value: `"FOGRA59"`)
* `GRACOL` (value: `"GRACOL"`)
* `iFRA26` (value: `"IFRA26"`)
* `tR001` (value: `"TR001"`)
* `tR005` (value: `"TR005"`)
* `tR006` (value: `"TR006"`)

