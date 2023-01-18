"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelIntermediateLayout = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelIntermediateLayoutChildren = require("./BoxModelIntermediateLayoutChildren");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelIntermediateLayout model module.
 * @module model/BoxModelIntermediateLayout
 * @version 1.0.0
 */
var BoxModelIntermediateLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelIntermediateLayout</code>.
   * @alias module:model/BoxModelIntermediateLayout
   * @class
   * @param version {module:model/BoxModelIntermediateLayout.VersionEnum} 
   * @param format {module:model/BoxModelIntermediateLayout.FormatEnum} 
   * @param unit {module:model/BoxModelIntermediateLayout.UnitEnum} 
   * @param contents {Array.<module:model/BoxModelIntermediateLayoutChildren>} 
   */
  function BoxModelIntermediateLayout(version, format, unit, contents) {
    _classCallCheck(this, BoxModelIntermediateLayout);
    this.version = version;
    this.format = format;
    this.unit = unit;
    this.contents = contents;
  }

  /**
   * Constructs a <code>BoxModelIntermediateLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelIntermediateLayout} obj Optional instance to populate.
   * @return {module:model/BoxModelIntermediateLayout} The populated <code>BoxModelIntermediateLayout</code> instance.
   */
  _createClass(BoxModelIntermediateLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelIntermediateLayout();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelIntermediateLayoutChildren.BoxModelIntermediateLayoutChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelIntermediateLayout;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelIntermediateLayout = BoxModelIntermediateLayout;
BoxModelIntermediateLayout.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelIntermediateLayout.VersionEnum} version
 */
BoxModelIntermediateLayout.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayout.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelIntermediateLayout.FormatEnum} format
 */
BoxModelIntermediateLayout.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayout.UnitEnum = {
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
 * @member {module:model/BoxModelIntermediateLayout.UnitEnum} unit
 */
BoxModelIntermediateLayout.prototype.unit = undefined;

/**
 * @member {Array.<module:model/BoxModelIntermediateLayoutChildren>} contents
 */
BoxModelIntermediateLayout.prototype.contents = undefined;

// Implement OneOfIntermediateProductLayout interface: