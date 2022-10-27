"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Perforation = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Perforation model module.
 * @module model/Perforation
 * @version 1.0.0
 */
var Perforation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Perforation</code>.
   * @alias module:model/Perforation
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Perforation.KindEnum} The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
   * @param depth {String} The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
   * @param teeth {Number} The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
   */
  function Perforation(id, createdAt, updatedAt, fileReferences, kind, depth, teeth) {
    _classCallCheck(this, Perforation);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.depth = depth;
    this.teeth = teeth;
  }

  /**
   * Constructs a <code>Perforation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Perforation} obj Optional instance to populate.
   * @return {module:model/Perforation} The populated <code>Perforation</code> instance.
   */
  _createClass(Perforation, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Perforation();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('depth')) obj.depth = _ApiClient.ApiClient.convertToType(data['depth'], 'String');
        if (data.hasOwnProperty('teeth')) obj.teeth = _ApiClient.ApiClient.convertToType(data['teeth'], 'Number');
      }
      return obj;
    }
  }]);
  return Perforation;
}();
/**
 * @member {String} id
 */
exports.Perforation = Perforation;
Perforation.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Perforation.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Perforation.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Perforation.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Perforation.KindEnum = {
  /**
   * value: "perforation"
   * @const
   */
  perforation: "perforation"
};
/**
 * The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
 * @member {module:model/Perforation.KindEnum} kind
 */
Perforation.prototype.kind = undefined;

/**
 * The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
 * @member {String} depth
 */
Perforation.prototype.depth = undefined;

/**
 * The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
 * @member {Number} teeth
 */
Perforation.prototype.teeth = undefined;

// Implement Finishing interface: