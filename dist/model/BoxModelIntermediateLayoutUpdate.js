"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelIntermediateLayoutUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelIntermediateLayoutChildrenUpdate = require("./BoxModelIntermediateLayoutChildrenUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelIntermediateLayoutUpdate model module.
 * @module model/BoxModelIntermediateLayoutUpdate
 * @version 1.0.0
 */
var BoxModelIntermediateLayoutUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelIntermediateLayoutUpdate</code>.
   * @alias module:model/BoxModelIntermediateLayoutUpdate
   * @class
   */
  function BoxModelIntermediateLayoutUpdate() {
    _classCallCheck(this, BoxModelIntermediateLayoutUpdate);
  }

  /**
   * Constructs a <code>BoxModelIntermediateLayoutUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelIntermediateLayoutUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelIntermediateLayoutUpdate} The populated <code>BoxModelIntermediateLayoutUpdate</code> instance.
   */
  _createClass(BoxModelIntermediateLayoutUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelIntermediateLayoutUpdate();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelIntermediateLayoutChildrenUpdate.BoxModelIntermediateLayoutChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelIntermediateLayoutUpdate;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelIntermediateLayoutUpdate = BoxModelIntermediateLayoutUpdate;
BoxModelIntermediateLayoutUpdate.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelIntermediateLayoutUpdate.VersionEnum} version
 */
BoxModelIntermediateLayoutUpdate.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutUpdate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelIntermediateLayoutUpdate.FormatEnum} format
 */
BoxModelIntermediateLayoutUpdate.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutUpdate.UnitEnum = {
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
 * @member {module:model/BoxModelIntermediateLayoutUpdate.UnitEnum} unit
 */
BoxModelIntermediateLayoutUpdate.prototype.unit = undefined;

/**
 * @member {Array.<module:model/BoxModelIntermediateLayoutChildrenUpdate>} contents
 */
BoxModelIntermediateLayoutUpdate.prototype.contents = undefined;

// Implement OneOfIntermediateProductUpdateLayout interface: