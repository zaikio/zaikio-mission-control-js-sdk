"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAction = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FileAction model module.
 * @module model/FileAction
 * @version 1.0.0
 */
var FileAction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileAction</code>.
   * @alias module:model/FileAction
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferenceId {String} 
   * @param state {module:model/FileAction.StateEnum} The current state of this file action
   * @param progress {String} Indicates the progress of a file to be processed (e.g. 50% – 0.50)
   */
  function FileAction(id, createdAt, updatedAt, fileReferenceId, state, progress) {
    _classCallCheck(this, FileAction);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferenceId = fileReferenceId;
    this.state = state;
    this.progress = progress;
  }

  /**
   * Constructs a <code>FileAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileAction} obj Optional instance to populate.
   * @return {module:model/FileAction} The populated <code>FileAction</code> instance.
   */
  _createClass(FileAction, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileAction();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_reference_id')) obj.fileReferenceId = _ApiClient.ApiClient.convertToType(data['file_reference_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('progress')) obj.progress = _ApiClient.ApiClient.convertToType(data['progress'], 'String');
      }
      return obj;
    }
  }]);
  return FileAction;
}();
/**
 * @member {String} id
 */
exports.FileAction = FileAction;
FileAction.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FileAction.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FileAction.prototype.updatedAt = undefined;

/**
 * @member {String} fileReferenceId
 */
FileAction.prototype.fileReferenceId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
FileAction.StateEnum = {
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
 * @member {module:model/FileAction.StateEnum} state
 */
FileAction.prototype.state = undefined;

/**
 * Indicates the progress of a file to be processed (e.g. 50% – 0.50)
 * @member {String} progress
 */
FileAction.prototype.progress = undefined;