"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileRemark = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileRemark model module.
 * @module model/FileRemark
 * @version 1.0.0
 */
var FileRemark = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileRemark</code>.
   * @alias module:model/FileRemark
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileActionId {String} The UUID of the object this file remark is attached to
   * @param severity {module:model/FileRemark.SeverityEnum} The severity of this file remark
   * @param kind {module:model/FileRemark.KindEnum} The kind of this file remark
   * @param message {String} A detailed human-readable message for this file remark
   * @param area {String} The area in the artwork where the file remark occurs, this can be either a page or box id
   * @param repeatsInArea {Number} The number of repeats for this file remark in the specified area
   */
  function FileRemark(id, createdAt, updatedAt, fileActionId, severity, kind, message, area, repeatsInArea) {
    _classCallCheck(this, FileRemark);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileActionId = fileActionId;
    this.severity = severity;
    this.kind = kind;
    this.message = message;
    this.area = area;
    this.repeatsInArea = repeatsInArea;
  }

  /**
   * Constructs a <code>FileRemark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileRemark} obj Optional instance to populate.
   * @return {module:model/FileRemark} The populated <code>FileRemark</code> instance.
   */
  _createClass(FileRemark, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileRemark();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_action_id')) obj.fileActionId = _ApiClient.ApiClient.convertToType(data['file_action_id'], 'String');
        if (data.hasOwnProperty('severity')) obj.severity = _ApiClient.ApiClient.convertToType(data['severity'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
        if (data.hasOwnProperty('area')) obj.area = _ApiClient.ApiClient.convertToType(data['area'], 'String');
        if (data.hasOwnProperty('repeats_in_area')) obj.repeatsInArea = _ApiClient.ApiClient.convertToType(data['repeats_in_area'], 'Number');
      }
      return obj;
    }
  }]);
  return FileRemark;
}();
/**
 * @member {String} id
 */
exports.FileRemark = FileRemark;
FileRemark.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FileRemark.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FileRemark.prototype.updatedAt = undefined;

/**
 * The UUID of the object this file remark is attached to
 * @member {String} fileActionId
 */
FileRemark.prototype.fileActionId = undefined;

/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
FileRemark.SeverityEnum = {
  /**
   * value: "error"
   * @const
   */
  error: "error",
  /**
   * value: "fix"
   * @const
   */
  fix: "fix",
  /**
   * value: "info"
   * @const
   */
  info: "info",
  /**
   * value: "warning"
   * @const
   */
  warning: "warning"
};
/**
 * The severity of this file remark
 * @member {module:model/FileRemark.SeverityEnum} severity
 */
FileRemark.prototype.severity = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
FileRemark.KindEnum = {
  /**
   * value: "color_mismatch"
   * @const
   */
  colorMismatch: "color_mismatch",
  /**
   * value: "other"
   * @const
   */
  other: "other"
};
/**
 * The kind of this file remark
 * @member {module:model/FileRemark.KindEnum} kind
 */
FileRemark.prototype.kind = undefined;

/**
 * A detailed human-readable message for this file remark
 * @member {String} message
 */
FileRemark.prototype.message = undefined;

/**
 * The area in the artwork where the file remark occurs, this can be either a page or box id
 * @member {String} area
 */
FileRemark.prototype.area = undefined;

/**
 * The number of repeats for this file remark in the specified area
 * @member {Number} repeatsInArea
 */
FileRemark.prototype.repeatsInArea = undefined;