"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileActionCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileActionCreate model module.
 * @module model/FileActionCreate
 * @version 1.0.0
 */
var FileActionCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileActionCreate</code>.
   * @alias module:model/FileActionCreate
   * @class
   */
  function FileActionCreate() {
    _classCallCheck(this, FileActionCreate);
  }

  /**
   * Constructs a <code>FileActionCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileActionCreate} obj Optional instance to populate.
   * @return {module:model/FileActionCreate} The populated <code>FileActionCreate</code> instance.
   */
  _createClass(FileActionCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileActionCreate();
        if (data.hasOwnProperty('file_reference_id')) obj.fileReferenceId = _ApiClient.ApiClient.convertToType(data['file_reference_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('progress')) obj.progress = _ApiClient.ApiClient.convertToType(data['progress'], 'String');
      }
      return obj;
    }
  }]);
  return FileActionCreate;
}();
/**
 * @member {String} fileReferenceId
 */
exports.FileActionCreate = FileActionCreate;
FileActionCreate.prototype.fileReferenceId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
FileActionCreate.StateEnum = {
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
 * @member {module:model/FileActionCreate.StateEnum} state
 */
FileActionCreate.prototype.state = undefined;

/**
 * Indicates the progress of a file to be processed (e.g. 50% – 0.50)
 * @member {String} progress
 */
FileActionCreate.prototype.progress = undefined;