"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PerfectBinding = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PerfectBinding model module.
 * @module model/PerfectBinding
 * @version 1.0.0
 */
var PerfectBinding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PerfectBinding</code>.
   * @alias module:model/PerfectBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/PerfectBinding.KindEnum} The kind of the finishing. Perfect binding - also known as adhesive binding - uses various types of glue to bind collected pages (the content) to the spine of a book, magazine or brochure. This finishing must span across several parts to connect them together. PerfectBinding does not have any additional properties, but the type and amount of glue used can be set via the MaterialRequirements.
   */
  function PerfectBinding(id, createdAt, updatedAt, fileReferences, kind) {
    _classCallCheck(this, PerfectBinding);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
  }

  /**
   * Constructs a <code>PerfectBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerfectBinding} obj Optional instance to populate.
   * @return {module:model/PerfectBinding} The populated <code>PerfectBinding</code> instance.
   */
  _createClass(PerfectBinding, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PerfectBinding();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return PerfectBinding;
}();
/**
 * @member {String} id
 */
exports.PerfectBinding = PerfectBinding;
PerfectBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
PerfectBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PerfectBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
PerfectBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PerfectBinding.KindEnum = {
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding"
};
/**
 * The kind of the finishing. Perfect binding - also known as adhesive binding - uses various types of glue to bind collected pages (the content) to the spine of a book, magazine or brochure. This finishing must span across several parts to connect them together. PerfectBinding does not have any additional properties, but the type and amount of glue used can be set via the MaterialRequirements.
 * @member {module:model/PerfectBinding.KindEnum} kind
 */
PerfectBinding.prototype.kind = undefined;

// Implement Finishing interface: