"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileActionUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileActionUpdate model module.
 * @module model/FileActionUpdate
 * @version 1.0.0
 */
var FileActionUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileActionUpdate</code>.
   * @alias module:model/FileActionUpdate
   * @class
   */
  function FileActionUpdate() {
    _classCallCheck(this, FileActionUpdate);
  }

  /**
   * Constructs a <code>FileActionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileActionUpdate} obj Optional instance to populate.
   * @return {module:model/FileActionUpdate} The populated <code>FileActionUpdate</code> instance.
   */
  _createClass(FileActionUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileActionUpdate();
        if (data.hasOwnProperty('file_reference_id')) obj.fileReferenceId = _ApiClient.ApiClient.convertToType(data['file_reference_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('progress')) obj.progress = _ApiClient.ApiClient.convertToType(data['progress'], 'String');
      }
      return obj;
    }
  }]);
  return FileActionUpdate;
}();
/**
 * @member {String} fileReferenceId
 */
exports.FileActionUpdate = FileActionUpdate;
FileActionUpdate.prototype.fileReferenceId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
FileActionUpdate.StateEnum = {
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
  /**
   * value: "error"
   * @const
   */
  error: "error",
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",
  /**
   * value: "started"
   * @const
   */
  started: "started"
};
/**
 * The current state of this file action
 * @member {module:model/FileActionUpdate.StateEnum} state
 */
FileActionUpdate.prototype.state = undefined;

/**
 * Indicates the progress of a file to be processed (e.g. 50% – 0.50)
 * @member {String} progress
 */
FileActionUpdate.prototype.progress = undefined;