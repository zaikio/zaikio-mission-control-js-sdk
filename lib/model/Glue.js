"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Glue = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Glue model module.
 * @module model/Glue
 * @version 1.0.0
 */
var Glue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Glue</code>.
   * @alias module:model/Glue
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Glue.KindEnum} The kind of the finishing. Glue means that an adhesive is added to the areas attached to this finishing in the `Layout`. It is also possible to span this finishing across several parts to connect them together. Glue does not have any additional properties.
   */
  function Glue(id, createdAt, updatedAt, fileReferences, kind) {
    _classCallCheck(this, Glue);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
  }

  /**
   * Constructs a <code>Glue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Glue} obj Optional instance to populate.
   * @return {module:model/Glue} The populated <code>Glue</code> instance.
   */
  _createClass(Glue, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Glue();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return Glue;
}();
/**
 * @member {String} id
 */
exports.Glue = Glue;
Glue.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Glue.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Glue.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Glue.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Glue.KindEnum = {
  /**
   * value: "glue"
   * @const
   */
  glue: "glue"
};
/**
 * The kind of the finishing. Glue means that an adhesive is added to the areas attached to this finishing in the `Layout`. It is also possible to span this finishing across several parts to connect them together. Glue does not have any additional properties.
 * @member {module:model/Glue.KindEnum} kind
 */
Glue.prototype.kind = undefined;

// Implement Finishing interface: