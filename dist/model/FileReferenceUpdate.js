"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileReferenceUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileReferenceUpdate model module.
 * @module model/FileReferenceUpdate
 * @version 1.0.0
 */
var FileReferenceUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileReferenceUpdate</code>.
   * @alias module:model/FileReferenceUpdate
   * @class
   */
  function FileReferenceUpdate() {
    _classCallCheck(this, FileReferenceUpdate);
  }

  /**
   * Constructs a <code>FileReferenceUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileReferenceUpdate} obj Optional instance to populate.
   * @return {module:model/FileReferenceUpdate} The populated <code>FileReferenceUpdate</code> instance.
   */
  _createClass(FileReferenceUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileReferenceUpdate();
        if (data.hasOwnProperty('referenceable_type')) obj.referenceableType = _ApiClient.ApiClient.convertToType(data['referenceable_type'], 'String');
        if (data.hasOwnProperty('referenceable_id')) obj.referenceableId = _ApiClient.ApiClient.convertToType(data['referenceable_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('zaikio_vault_ref')) obj.zaikioVaultRef = _ApiClient.ApiClient.convertToType(data['zaikio_vault_ref'], 'String');
        if (data.hasOwnProperty('mime_type')) obj.mimeType = _ApiClient.ApiClient.convertToType(data['mime_type'], 'String');
        if (data.hasOwnProperty('size')) obj.size = _ApiClient.ApiClient.convertToType(data['size'], 'Number');
      }
      return obj;
    }
  }]);
  return FileReferenceUpdate;
}();
/**
 * Allowed values for the <code>referenceableType</code> property.
 * @enum {String}
 * @readonly
 */
exports.FileReferenceUpdate = FileReferenceUpdate;
FileReferenceUpdate.ReferenceableTypeEnum = {
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
 * @member {module:model/FileReferenceUpdate.ReferenceableTypeEnum} referenceableType
 */
FileReferenceUpdate.prototype.referenceableType = undefined;

/**
 * The UUID of the object this file reference is attached to, this forms a compound link in combination with the referenceable_type field
 * @member {String} referenceableId
 */
FileReferenceUpdate.prototype.referenceableId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
FileReferenceUpdate.KindEnum = {
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
 * @member {module:model/FileReferenceUpdate.KindEnum} kind
 */
FileReferenceUpdate.prototype.kind = undefined;

/**
 * The URL under which this file is accessible. Supported protocols are `http` and `https` as well as `smb`. Whenever file placement is within our control, you should ensure to use https, so that other non-local apps can easily retrieve the file. Must not be provided if `zaikio_vault_ref` is provided.
 * @member {String} url
 */
FileReferenceUpdate.prototype.url = undefined;

/**
 * A resource locator for a file stored within a Zaikio Vault. This will allow autopopulation of metadata attributes as well as all of the other benefits that the Zaikio Vault brings in security, simplicity and reliability.
 * @member {String} zaikioVaultRef
 */
FileReferenceUpdate.prototype.zaikioVaultRef = undefined;

/**
 * Allowed values for the <code>mimeType</code> property.
 * @enum {String}
 * @readonly
 */
FileReferenceUpdate.MimeTypeEnum = {
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
 * @member {module:model/FileReferenceUpdate.MimeTypeEnum} mimeType
 */
FileReferenceUpdate.prototype.mimeType = undefined;

/**
 * The file size on disk in bytes. This will be auto populated if the record is created using a `zaikio_vault_ref` instead of a URL.
 * @member {Number} size
 */
FileReferenceUpdate.prototype.size = undefined;