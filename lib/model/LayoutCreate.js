"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutCreate = void 0;
var _ApiClient = require("../ApiClient");
var _BoxCreate = require("./BoxCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The LayoutCreate model module.
 * @module model/LayoutCreate
 * @version 1.0.0
 */
var LayoutCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LayoutCreate</code>.
   * @alias module:model/LayoutCreate
   * @class
   */
  function LayoutCreate() {
    _classCallCheck(this, LayoutCreate);
  }

  /**
   * Constructs a <code>LayoutCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LayoutCreate} obj Optional instance to populate.
   * @return {module:model/LayoutCreate} The populated <code>LayoutCreate</code> instance.
   */
  _createClass(LayoutCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LayoutCreate();
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxCreate.BoxCreate]);
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
      }
      return obj;
    }
  }]);
  return LayoutCreate;
}();
/**
 * @member {Array.<module:model/BoxCreate>} contents
 */
exports.LayoutCreate = LayoutCreate;
LayoutCreate.prototype.contents = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
LayoutCreate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * The format that is used for the layout description. Currently only the `box` format is supported, but in the future this will be extended with a path based format as well. Third party applications must support the `box` format, support of path based formats is optional, but required for everything packaging related.
 * @member {module:model/LayoutCreate.FormatEnum} format
 */
LayoutCreate.prototype.format = undefined;

/**
 * Allowed values for the <code>version</code> property.
 * @enum {String}
 * @readonly
 */
LayoutCreate.VersionEnum = {
  /**
   * value: "1"
   * @const
   */
  _1: "1"
};
/**
 * The version of the layout description schema used here. Might be a numeric value or a string.
 * @member {module:model/LayoutCreate.VersionEnum} version
 */
LayoutCreate.prototype.version = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
LayoutCreate.UnitEnum = {
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "pt"
   * @const
   */
  pt: "pt",
  /**
   * value: "pica"
   * @const
   */
  pica: "pica",
  /**
   * value: "pixel"
   * @const
   */
  pixel: "pixel",
  /**
   * value: "inch"
   * @const
   */
  inch: "inch"
};
/**
 * The unit of measurement used for all measures inside this layout
 * @member {module:model/LayoutCreate.UnitEnum} unit
 */
LayoutCreate.prototype.unit = undefined;

// Implement OneOfBatchSignatureCreateLayout interface:
// Implement OneOfIntermediateProductCreateLayout interface:
// Implement OneOfPartCreateLayout interface:
// Implement OneOfSignatureCreateLayout interface: