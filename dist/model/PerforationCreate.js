"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PerforationCreate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PerforationCreate model module.
 * @module model/PerforationCreate
 * @version 1.0.0
 */
var PerforationCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PerforationCreate</code>.
   * @alias module:model/PerforationCreate
   * @class
   */
  function PerforationCreate() {
    _classCallCheck(this, PerforationCreate);
  }

  /**
   * Constructs a <code>PerforationCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerforationCreate} obj Optional instance to populate.
   * @return {module:model/PerforationCreate} The populated <code>PerforationCreate</code> instance.
   */
  _createClass(PerforationCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PerforationCreate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceCreate.FileReferenceCreate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('depth')) obj.depth = _ApiClient.ApiClient.convertToType(data['depth'], 'String');
        if (data.hasOwnProperty('teeth')) obj.teeth = _ApiClient.ApiClient.convertToType(data['teeth'], 'Number');
      }
      return obj;
    }
  }]);
  return PerforationCreate;
}();
/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
exports.PerforationCreate = PerforationCreate;
PerforationCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PerforationCreate.KindEnum = {
  /**
   * value: "perforation"
   * @const
   */
  perforation: "perforation"
};
/**
 * The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
 * @member {module:model/PerforationCreate.KindEnum} kind
 */
PerforationCreate.prototype.kind = undefined;

/**
 * The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
 * @member {String} depth
 */
PerforationCreate.prototype.depth = undefined;

/**
 * The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
 * @member {Number} teeth
 */
PerforationCreate.prototype.teeth = undefined;

// Implement FinishingCreate interface: