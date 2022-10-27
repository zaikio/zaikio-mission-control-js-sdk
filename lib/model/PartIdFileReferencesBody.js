"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartIdFileReferencesBody = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartIdFileReferencesBody model module.
 * @module model/PartIdFileReferencesBody
 * @version 1.0.0
 */
var PartIdFileReferencesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartIdFileReferencesBody</code>.
   * @alias module:model/PartIdFileReferencesBody
   * @class
   * @param fileReference {module:model/FileReferenceCreate} 
   */
  function PartIdFileReferencesBody(fileReference) {
    _classCallCheck(this, PartIdFileReferencesBody);
    this.fileReference = fileReference;
  }

  /**
   * Constructs a <code>PartIdFileReferencesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartIdFileReferencesBody} obj Optional instance to populate.
   * @return {module:model/PartIdFileReferencesBody} The populated <code>PartIdFileReferencesBody</code> instance.
   */
  _createClass(PartIdFileReferencesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartIdFileReferencesBody();
        if (data.hasOwnProperty('file_reference')) obj.fileReference = _FileReferenceCreate.FileReferenceCreate.constructFromObject(data['file_reference']);
      }
      return obj;
    }
  }]);
  return PartIdFileReferencesBody;
}();
/**
 * @member {module:model/FileReferenceCreate} fileReference
 */
exports.PartIdFileReferencesBody = PartIdFileReferencesBody;
PartIdFileReferencesBody.prototype.fileReference = undefined;