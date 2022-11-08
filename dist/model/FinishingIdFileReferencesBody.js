"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingIdFileReferencesBody = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingIdFileReferencesBody model module.
 * @module model/FinishingIdFileReferencesBody
 * @version 1.0.0
 */
var FinishingIdFileReferencesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingIdFileReferencesBody</code>.
   * @alias module:model/FinishingIdFileReferencesBody
   * @class
   * @param fileReference {module:model/FileReferenceCreate} 
   */
  function FinishingIdFileReferencesBody(fileReference) {
    _classCallCheck(this, FinishingIdFileReferencesBody);
    this.fileReference = fileReference;
  }

  /**
   * Constructs a <code>FinishingIdFileReferencesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingIdFileReferencesBody} obj Optional instance to populate.
   * @return {module:model/FinishingIdFileReferencesBody} The populated <code>FinishingIdFileReferencesBody</code> instance.
   */
  _createClass(FinishingIdFileReferencesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingIdFileReferencesBody();
        if (data.hasOwnProperty('file_reference')) obj.fileReference = _FileReferenceCreate.FileReferenceCreate.constructFromObject(data['file_reference']);
      }
      return obj;
    }
  }]);
  return FinishingIdFileReferencesBody;
}();
/**
 * @member {module:model/FileReferenceCreate} fileReference
 */
exports.FinishingIdFileReferencesBody = FinishingIdFileReferencesBody;
FinishingIdFileReferencesBody.prototype.fileReference = undefined;