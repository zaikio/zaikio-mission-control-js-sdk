"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPartLayout = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelPartLayoutChildren = require("./BoxModelPartLayoutChildren");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPartLayout model module.
 * @module model/BoxModelPartLayout
 * @version 1.0.0
 */
var BoxModelPartLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPartLayout</code>.
   * @alias module:model/BoxModelPartLayout
   * @class
   * @param version {module:model/BoxModelPartLayout.VersionEnum} 
   * @param format {module:model/BoxModelPartLayout.FormatEnum} 
   * @param unit {module:model/BoxModelPartLayout.UnitEnum} 
   * @param foldingPattern {String} An optional folding pattern that must be applied to this part
   * @param contents {Array.<module:model/BoxModelPartLayoutChildren>} 
   */
  function BoxModelPartLayout(version, format, unit, foldingPattern, contents) {
    _classCallCheck(this, BoxModelPartLayout);
    this.version = version;
    this.format = format;
    this.unit = unit;
    this.foldingPattern = foldingPattern;
    this.contents = contents;
  }

  /**
   * Constructs a <code>BoxModelPartLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPartLayout} obj Optional instance to populate.
   * @return {module:model/BoxModelPartLayout} The populated <code>BoxModelPartLayout</code> instance.
   */
  _createClass(BoxModelPartLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPartLayout();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('folding_pattern')) obj.foldingPattern = _ApiClient.ApiClient.convertToType(data['folding_pattern'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelPartLayoutChildren.BoxModelPartLayoutChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelPartLayout;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelPartLayout = BoxModelPartLayout;
BoxModelPartLayout.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelPartLayout.VersionEnum} version
 */
BoxModelPartLayout.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayout.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelPartLayout.FormatEnum} format
 */
BoxModelPartLayout.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayout.UnitEnum = {
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
 * @member {module:model/BoxModelPartLayout.UnitEnum} unit
 */
BoxModelPartLayout.prototype.unit = undefined;

/**
 * An optional folding pattern that must be applied to this part
 * @member {String} foldingPattern
 */
BoxModelPartLayout.prototype.foldingPattern = undefined;

/**
 * @member {Array.<module:model/BoxModelPartLayoutChildren>} contents
 */
BoxModelPartLayout.prototype.contents = undefined;

// Implement OneOfPartLayout interface: