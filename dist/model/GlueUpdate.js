"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlueUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The GlueUpdate model module.
 * @module model/GlueUpdate
 * @version 1.0.0
 */
var GlueUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GlueUpdate</code>.
   * @alias module:model/GlueUpdate
   * @class
   */
  function GlueUpdate() {
    _classCallCheck(this, GlueUpdate);
  }

  /**
   * Constructs a <code>GlueUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlueUpdate} obj Optional instance to populate.
   * @return {module:model/GlueUpdate} The populated <code>GlueUpdate</code> instance.
   */
  _createClass(GlueUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GlueUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return GlueUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.GlueUpdate = GlueUpdate;
GlueUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
GlueUpdate.KindEnum = {
  /**
   * value: "glue"
   * @const
   */
  glue: "glue"
};
/**
 * The kind of the finishing. Glue means that an adhesive is added to the areas attached to this finishing in the `Layout`. It is also possible to span this finishing across several parts to connect them together. Glue does not have any additional properties.
 * @member {module:model/GlueUpdate.KindEnum} kind
 */
GlueUpdate.prototype.kind = undefined;

// Implement FinishingUpdate interface: