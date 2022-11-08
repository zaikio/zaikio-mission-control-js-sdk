"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileActionIdFileRemarksBody = void 0;
var _ApiClient = require("../ApiClient");
var _FileRemarkCreate = require("./FileRemarkCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileActionIdFileRemarksBody model module.
 * @module model/FileActionIdFileRemarksBody
 * @version 1.0.0
 */
var FileActionIdFileRemarksBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileActionIdFileRemarksBody</code>.
   * @alias module:model/FileActionIdFileRemarksBody
   * @class
   * @param fileRemark {module:model/FileRemarkCreate} 
   */
  function FileActionIdFileRemarksBody(fileRemark) {
    _classCallCheck(this, FileActionIdFileRemarksBody);
    this.fileRemark = fileRemark;
  }

  /**
   * Constructs a <code>FileActionIdFileRemarksBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileActionIdFileRemarksBody} obj Optional instance to populate.
   * @return {module:model/FileActionIdFileRemarksBody} The populated <code>FileActionIdFileRemarksBody</code> instance.
   */
  _createClass(FileActionIdFileRemarksBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileActionIdFileRemarksBody();
        if (data.hasOwnProperty('file_remark')) obj.fileRemark = _FileRemarkCreate.FileRemarkCreate.constructFromObject(data['file_remark']);
      }
      return obj;
    }
  }]);
  return FileActionIdFileRemarksBody;
}();
/**
 * @member {module:model/FileRemarkCreate} fileRemark
 */
exports.FileActionIdFileRemarksBody = FileActionIdFileRemarksBody;
FileActionIdFileRemarksBody.prototype.fileRemark = undefined;