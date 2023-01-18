"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSignatureLayout = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelSignatureLayoutChildren = require("./BoxModelSignatureLayoutChildren");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSignatureLayout model module.
 * @module model/BoxModelSignatureLayout
 * @version 1.0.0
 */
var BoxModelSignatureLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSignatureLayout</code>.
   * @alias module:model/BoxModelSignatureLayout
   * @class
   * @param version {module:model/BoxModelSignatureLayout.VersionEnum} 
   * @param format {module:model/BoxModelSignatureLayout.FormatEnum} 
   * @param unit {module:model/BoxModelSignatureLayout.UnitEnum} 
   * @param contents {Array.<module:model/BoxModelSignatureLayoutChildren>} 
   */
  function BoxModelSignatureLayout(version, format, unit, contents) {
    _classCallCheck(this, BoxModelSignatureLayout);
    this.version = version;
    this.format = format;
    this.unit = unit;
    this.contents = contents;
  }

  /**
   * Constructs a <code>BoxModelSignatureLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSignatureLayout} obj Optional instance to populate.
   * @return {module:model/BoxModelSignatureLayout} The populated <code>BoxModelSignatureLayout</code> instance.
   */
  _createClass(BoxModelSignatureLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSignatureLayout();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelSignatureLayoutChildren.BoxModelSignatureLayoutChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelSignatureLayout;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelSignatureLayout = BoxModelSignatureLayout;
BoxModelSignatureLayout.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelSignatureLayout.VersionEnum} version
 */
BoxModelSignatureLayout.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSignatureLayout.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelSignatureLayout.FormatEnum} format
 */
BoxModelSignatureLayout.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSignatureLayout.UnitEnum = {
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
 * @member {module:model/BoxModelSignatureLayout.UnitEnum} unit
 */
BoxModelSignatureLayout.prototype.unit = undefined;

/**
 * @member {Array.<module:model/BoxModelSignatureLayoutChildren>} contents
 */
BoxModelSignatureLayout.prototype.contents = undefined;

// Implement OneOfBatchSignatureLayout interface:
// Implement OneOfSignatureLayout interface: