# MissionControl.JobCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the Job | [optional] 
**ownerId** | **String** | The id of the Organization which the Job belongs to | [optional] 
**references** | **[String]** | A list of refrences that are used in customer/human communication. This is not a technical ID and should not be treated as such. The first reference of this job is automatically generated by Mission Control. | [optional] 
**kind** | **String** | The kind of Job, which must be one of this list | [optional] 
**source** | **String** | The source software or system that uploaded this job. This could also be a hint to a web shop or other sales channel identifier. | [optional] 
**version** | **String** | A version identifier that defines the iteration of this job. Can be a numeric counter or alpha-numeric version designator. | [optional] 
**quantity** | **Number** | The amount of copies that need to be manufactured of this job. | [optional] 
**acceptableQuantityExcess** | **Number** | The amount of copies that can be produced additionally to &#x60;quantity&#x60; and still be sold to the customer as per the purchase agreement. | [optional] 
**acceptableQuantityUnderrun** | **Number** | The amount of copies that can be producded less than &#x60;quantity&#x60; which still adheres the customers purchase agreement. | [optional] 
**dueAt** | **Date** | The date and time at which this job needs to completed in order to be shipped. This is not when it needs to arrive at the customer. | [optional] 
**estimatedCompletedAt** | **Date** | The date and time at which this job is expected to be completed in order to be shipped. This is not when it needs to arrive at the customer. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `booklet` (value: `"booklet"`)
* `carton` (value: `"carton"`)
* `cartonTwoPiece` (value: `"carton_two_piece"`)
* `brochure` (value: `"brochure"`)
* `businessCard` (value: `"business_card"`)
* `box` (value: `"box"`)
* `complimentSlip` (value: `"compliment_slip"`)
* `continuationSheet` (value: `"continuation_sheet"`)
* `coverLetter` (value: `"cover_letter"`)
* `envelope` (value: `"envelope"`)
* `flyer` (value: `"flyer"`)
* `hardcoverBook` (value: `"hardcover_book"`)
* `label` (value: `"label"`)
* `leaflet` (value: `"leaflet"`)
* `letterHead` (value: `"letter_head"`)
* `magazine` (value: `"magazine"`)
* `map` (value: `"map"`)
* `ncrPad` (value: `"ncr_pad"`)
* `newspaper` (value: `"newspaper"`)
* `notebook` (value: `"notebook"`)
* `pen` (value: `"pen"`)
* `postcard` (value: `"postcard"`)
* `poster` (value: `"poster"`)
* `selfMailer` (value: `"self_mailer"`)
* `sheet` (value: `"sheet"`)
* `softcoverBook` (value: `"softcover_book"`)

