"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileActionsFileActionIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _FileActionUpdate = require("./FileActionUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileActionsFileActionIdBody model module.
 * @module model/FileActionsFileActionIdBody
 * @version 1.0.0
 */
var FileActionsFileActionIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileActionsFileActionIdBody</code>.
   * @alias module:model/FileActionsFileActionIdBody
   * @class
   * @param fileAction {module:model/FileActionUpdate} 
   */
  function FileActionsFileActionIdBody(fileAction) {
    _classCallCheck(this, FileActionsFileActionIdBody);
    this.fileAction = fileAction;
  }

  /**
   * Constructs a <code>FileActionsFileActionIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileActionsFileActionIdBody} obj Optional instance to populate.
   * @return {module:model/FileActionsFileActionIdBody} The populated <code>FileActionsFileActionIdBody</code> instance.
   */
  _createClass(FileActionsFileActionIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileActionsFileActionIdBody();
        if (data.hasOwnProperty('file_action')) obj.fileAction = _FileActionUpdate.FileActionUpdate.constructFromObject(data['file_action']);
      }
      return obj;
    }
  }]);
  return FileActionsFileActionIdBody;
}();
/**
 * @member {module:model/FileActionUpdate} fileAction
 */
exports.FileActionsFileActionIdBody = FileActionsFileActionIdBody;
FileActionsFileActionIdBody.prototype.fileAction = undefined;