"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _ApiClient = require("../ApiClient");
var _Box = require("./Box");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Layout model module.
 * @module model/Layout
 * @version 1.0.0
 */
var Layout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Layout</code>.
   * @alias module:model/Layout
   * @class
   * @param contents {Array.<module:model/Box>} 
   * @param format {module:model/Layout.FormatEnum} The format that is used for the layout description. Currently only the `box` format is supported, but in the future this will be extended with a path based format as well. Third party applications must support the `box` format, support of path based formats is optional, but required for everything packaging related.
   * @param version {module:model/Layout.VersionEnum} The version of the layout description schema used here. Might be a numeric value or a string.
   * @param unit {module:model/Layout.UnitEnum} The unit of measurement used for all measures inside this layout
   */
  function Layout(contents, format, version, unit) {
    _classCallCheck(this, Layout);
    this.contents = contents;
    this.format = format;
    this.version = version;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Layout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Layout} obj Optional instance to populate.
   * @return {module:model/Layout} The populated <code>Layout</code> instance.
   */
  _createClass(Layout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Layout();
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_Box.Box]);
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
      }
      return obj;
    }
  }]);
  return Layout;
}();
/**
 * @member {Array.<module:model/Box>} contents
 */
exports.Layout = Layout;
Layout.prototype.contents = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
Layout.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * The format that is used for the layout description. Currently only the `box` format is supported, but in the future this will be extended with a path based format as well. Third party applications must support the `box` format, support of path based formats is optional, but required for everything packaging related.
 * @member {module:model/Layout.FormatEnum} format
 */
Layout.prototype.format = undefined;

/**
 * Allowed values for the <code>version</code> property.
 * @enum {String}
 * @readonly
 */
Layout.VersionEnum = {
  /**
   * value: "1"
   * @const
   */
  _1: "1"
};
/**
 * The version of the layout description schema used here. Might be a numeric value or a string.
 * @member {module:model/Layout.VersionEnum} version
 */
Layout.prototype.version = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
Layout.UnitEnum = {
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
 * @member {module:model/Layout.UnitEnum} unit
 */
Layout.prototype.unit = undefined;

// Implement OneOfBatchSignatureLayout interface:
// Implement OneOfIntermediateProductLayout interface:
// Implement OneOfPartLayout interface:
// Implement OneOfSignatureLayout interface: