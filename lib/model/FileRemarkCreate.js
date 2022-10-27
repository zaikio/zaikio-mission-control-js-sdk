"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileRemarkCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileRemarkCreate model module.
 * @module model/FileRemarkCreate
 * @version 1.0.0
 */
var FileRemarkCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileRemarkCreate</code>.
   * @alias module:model/FileRemarkCreate
   * @class
   */
  function FileRemarkCreate() {
    _classCallCheck(this, FileRemarkCreate);
  }

  /**
   * Constructs a <code>FileRemarkCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileRemarkCreate} obj Optional instance to populate.
   * @return {module:model/FileRemarkCreate} The populated <code>FileRemarkCreate</code> instance.
   */
  _createClass(FileRemarkCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileRemarkCreate();
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
  return FileRemarkCreate;
}();
/**
 * The UUID of the object this file remark is attached to
 * @member {String} fileActionId
 */
exports.FileRemarkCreate = FileRemarkCreate;
FileRemarkCreate.prototype.fileActionId = undefined;

/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
FileRemarkCreate.SeverityEnum = {
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
 * @member {module:model/FileRemarkCreate.SeverityEnum} severity
 */
FileRemarkCreate.prototype.severity = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
FileRemarkCreate.KindEnum = {
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
 * @member {module:model/FileRemarkCreate.KindEnum} kind
 */
FileRemarkCreate.prototype.kind = undefined;

/**
 * A detailed human-readable message for this file remark
 * @member {String} message
 */
FileRemarkCreate.prototype.message = undefined;

/**
 * The area in the artwork where the file remark occurs, this can be either a page or box id
 * @member {String} area
 */
FileRemarkCreate.prototype.area = undefined;

/**
 * The number of repeats for this file remark in the specified area
 * @member {Number} repeatsInArea
 */
FileRemarkCreate.prototype.repeatsInArea = undefined;