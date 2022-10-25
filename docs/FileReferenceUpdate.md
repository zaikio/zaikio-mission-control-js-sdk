# MissionControl.FileReferenceUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceableType** | **String** | The type of object this file reference is attached to, used in conjunction with the referenceable_id attribute to locate the item referenced. | [optional] 
**referenceableId** | **String** | The UUID of the object this file reference is attached to, this forms a compound link in combination with the referenceable_type field | [optional] 
**kind** | **String** | The kind of the file reference | [optional] 
**url** | **String** | The URL under which this file is accessible. Supported protocols are &#x60;http&#x60; and &#x60;https&#x60; as well as &#x60;smb&#x60;. Whenever file placement is within our control, you should ensure to use https, so that other non-local apps can easily retrieve the file. Must not be provided if &#x60;zaikio_vault_ref&#x60; is provided. | [optional] 
**zaikioVaultRef** | **String** | A resource locator for a file stored within a Zaikio Vault. This will allow autopopulation of metadata attributes as well as all of the other benefits that the Zaikio Vault brings in security, simplicity and reliability. | [optional] 
**mimeType** | **String** | The RFC 2045 mime-type of the file. For &#x60;artwork&#x60; and &#x60;imposing&#x60; kinds this must be &#x60;application/pdf&#x60;, for paths it must be &#x60;image/svg+xml&#x60;. Can be autopopulated if the record is created using a &#x60;zaikio_vault_ref&#x60; instead of a URL. | [optional] 
**size** | **Number** | The file size on disk in bytes. This will be auto populated if the record is created using a &#x60;zaikio_vault_ref&#x60; instead of a URL. | [optional] 

<a name="ReferenceableTypeEnum"></a>
## Enum: ReferenceableTypeEnum

* `finishing` (value: `"Finishing"`)
* `part` (value: `"Part"`)


<a name="KindEnum"></a>
## Enum: KindEnum

* `artwork` (value: `"artwork"`)
* `imposing` (value: `"imposing"`)
* `path` (value: `"path"`)


<a name="MimeTypeEnum"></a>
## Enum: MimeTypeEnum

* `applicationpdf` (value: `"application/pdf"`)
* `imagesvgxml` (value: `"image/svg+xml"`)

