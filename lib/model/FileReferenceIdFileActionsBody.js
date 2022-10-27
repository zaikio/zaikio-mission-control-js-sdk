"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileReferenceIdFileActionsBody = void 0;
var _ApiClient = require("../ApiClient");
var _FileActionCreate = require("./FileActionCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileReferenceIdFileActionsBody model module.
 * @module model/FileReferenceIdFileActionsBody
 * @version 1.0.0
 */
var FileReferenceIdFileActionsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileReferenceIdFileActionsBody</code>.
   * @alias module:model/FileReferenceIdFileActionsBody
   * @class
   * @param fileAction {module:model/FileActionCreate} 
   */
  function FileReferenceIdFileActionsBody(fileAction) {
    _classCallCheck(this, FileReferenceIdFileActionsBody);
    this.fileAction = fileAction;
  }

  /**
   * Constructs a <code>FileReferenceIdFileActionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileReferenceIdFileActionsBody} obj Optional instance to populate.
   * @return {module:model/FileReferenceIdFileActionsBody} The populated <code>FileReferenceIdFileActionsBody</code> instance.
   */
  _createClass(FileReferenceIdFileActionsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileReferenceIdFileActionsBody();
        if (data.hasOwnProperty('file_action')) obj.fileAction = _FileActionCreate.FileActionCreate.constructFromObject(data['file_action']);
      }
      return obj;
    }
  }]);
  return FileReferenceIdFileActionsBody;
}();
/**
 * @member {module:model/FileActionCreate} fileAction
 */
exports.FileReferenceIdFileActionsBody = FileReferenceIdFileActionsBody;
FileReferenceIdFileActionsBody.prototype.fileAction = undefined;