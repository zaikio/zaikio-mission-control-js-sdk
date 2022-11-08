"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PerforationUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PerforationUpdate model module.
 * @module model/PerforationUpdate
 * @version 1.0.0
 */
var PerforationUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PerforationUpdate</code>.
   * @alias module:model/PerforationUpdate
   * @class
   */
  function PerforationUpdate() {
    _classCallCheck(this, PerforationUpdate);
  }

  /**
   * Constructs a <code>PerforationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerforationUpdate} obj Optional instance to populate.
   * @return {module:model/PerforationUpdate} The populated <code>PerforationUpdate</code> instance.
   */
  _createClass(PerforationUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PerforationUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('depth')) obj.depth = _ApiClient.ApiClient.convertToType(data['depth'], 'String');
        if (data.hasOwnProperty('teeth')) obj.teeth = _ApiClient.ApiClient.convertToType(data['teeth'], 'Number');
      }
      return obj;
    }
  }]);
  return PerforationUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.PerforationUpdate = PerforationUpdate;
PerforationUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PerforationUpdate.KindEnum = {
  /**
   * value: "perforation"
   * @const
   */
  perforation: "perforation"
};
/**
 * The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
 * @member {module:model/PerforationUpdate.KindEnum} kind
 */
PerforationUpdate.prototype.kind = undefined;

/**
 * The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
 * @member {String} depth
 */
PerforationUpdate.prototype.depth = undefined;

/**
 * The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
 * @member {Number} teeth
 */
PerforationUpdate.prototype.teeth = undefined;

// Implement FinishingUpdate interface: