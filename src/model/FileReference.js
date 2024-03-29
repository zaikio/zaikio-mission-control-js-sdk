/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The FileReference model module.
 * @module model/FileReference
 * @version 1.0.0
 */
export class FileReference {
  /**
   * Constructs a new <code>FileReference</code>.
   * @alias module:model/FileReference
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param referenceableType {module:model/FileReference.ReferenceableTypeEnum} The type of object this file reference is attached to, used in conjunction with the referenceable_id attribute to locate the item referenced.
   * @param referenceableId {String} The UUID of the object this file reference is attached to, this forms a compound link in combination with the referenceable_type field
   * @param kind {module:model/FileReference.KindEnum} The kind of the file reference
   * @param url {String} The URL under which this file is accessible. Supported protocols are `http` and `https` as well as `smb`. Whenever file placement is within our control, you should ensure to use https, so that other non-local apps can easily retrieve the file. Must not be provided if `zaikio_vault_ref` is provided.
   * @param zaikioVaultRef {String} A resource locator for a file stored within a Zaikio Vault. This will allow autopopulation of metadata attributes as well as all of the other benefits that the Zaikio Vault brings in security, simplicity and reliability.
   * @param mimeType {module:model/FileReference.MimeTypeEnum} The RFC 2045 mime-type of the file. For `artwork` and `imposing` kinds this must be `application/pdf`, for paths it must be `image/svg+xml`. Can be autopopulated if the record is created using a `zaikio_vault_ref` instead of a URL.
   * @param size {Number} The file size on disk in bytes. This will be auto populated if the record is created using a `zaikio_vault_ref` instead of a URL.
   */
  constructor(id, createdAt, updatedAt, referenceableType, referenceableId, kind, url, zaikioVaultRef, mimeType, size) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.referenceableType = referenceableType;
    this.referenceableId = referenceableId;
    this.kind = kind;
    this.url = url;
    this.zaikioVaultRef = zaikioVaultRef;
    this.mimeType = mimeType;
    this.size = size;
  }

  /**
   * Constructs a <code>FileReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileReference} obj Optional instance to populate.
   * @return {module:model/FileReference} The populated <code>FileReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileReference();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('referenceable_type'))
        obj.referenceableType = ApiClient.convertToType(data['referenceable_type'], 'String');
      if (data.hasOwnProperty('referenceable_id'))
        obj.referenceableId = ApiClient.convertToType(data['referenceable_id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('zaikio_vault_ref'))
        obj.zaikioVaultRef = ApiClient.convertToType(data['zaikio_vault_ref'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mimeType = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
FileReference.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FileReference.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FileReference.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>referenceableType</code> property.
 * @enum {String}
 * @readonly
 */
FileReference.ReferenceableTypeEnum = {
  /**
   * value: "Finishing"
   * @const
   */
  finishing: "Finishing",

  /**
   * value: "Part"
   * @const
   */
  part: "Part"
};
/**
 * The type of object this file reference is attached to, used in conjunction with the referenceable_id attribute to locate the item referenced.
 * @member {module:model/FileReference.ReferenceableTypeEnum} referenceableType
 */
FileReference.prototype.referenceableType = undefined;

/**
 * The UUID of the object this file reference is attached to, this forms a compound link in combination with the referenceable_type field
 * @member {String} referenceableId
 */
FileReference.prototype.referenceableId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
FileReference.KindEnum = {
  /**
   * value: "artwork"
   * @const
   */
  artwork: "artwork",

  /**
   * value: "imposing"
   * @const
   */
  imposing: "imposing",

  /**
   * value: "path"
   * @const
   */
  path: "path"
};
/**
 * The kind of the file reference
 * @member {module:model/FileReference.KindEnum} kind
 */
FileReference.prototype.kind = undefined;

/**
 * The URL under which this file is accessible. Supported protocols are `http` and `https` as well as `smb`. Whenever file placement is within our control, you should ensure to use https, so that other non-local apps can easily retrieve the file. Must not be provided if `zaikio_vault_ref` is provided.
 * @member {String} url
 */
FileReference.prototype.url = undefined;

/**
 * A resource locator for a file stored within a Zaikio Vault. This will allow autopopulation of metadata attributes as well as all of the other benefits that the Zaikio Vault brings in security, simplicity and reliability.
 * @member {String} zaikioVaultRef
 */
FileReference.prototype.zaikioVaultRef = undefined;

/**
 * Allowed values for the <code>mimeType</code> property.
 * @enum {String}
 * @readonly
 */
FileReference.MimeTypeEnum = {
  /**
   * value: "application/pdf"
   * @const
   */
  applicationpdf: "application/pdf",

  /**
   * value: "image/svg+xml"
   * @const
   */
  imagesvgxml: "image/svg+xml"
};
/**
 * The RFC 2045 mime-type of the file. For `artwork` and `imposing` kinds this must be `application/pdf`, for paths it must be `image/svg+xml`. Can be autopopulated if the record is created using a `zaikio_vault_ref` instead of a URL.
 * @member {module:model/FileReference.MimeTypeEnum} mimeType
 */
FileReference.prototype.mimeType = undefined;

/**
 * The file size on disk in bytes. This will be auto populated if the record is created using a `zaikio_vault_ref` instead of a URL.
 * @member {Number} size
 */
FileReference.prototype.size = undefined;

