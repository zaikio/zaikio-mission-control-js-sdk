"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelIntermediateLayoutCreate = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelIntermediateLayoutChildrenCreate = require("./BoxModelIntermediateLayoutChildrenCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelIntermediateLayoutCreate model module.
 * @module model/BoxModelIntermediateLayoutCreate
 * @version 1.0.0
 */
var BoxModelIntermediateLayoutCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelIntermediateLayoutCreate</code>.
   * @alias module:model/BoxModelIntermediateLayoutCreate
   * @class
   */
  function BoxModelIntermediateLayoutCreate() {
    _classCallCheck(this, BoxModelIntermediateLayoutCreate);
  }

  /**
   * Constructs a <code>BoxModelIntermediateLayoutCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelIntermediateLayoutCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelIntermediateLayoutCreate} The populated <code>BoxModelIntermediateLayoutCreate</code> instance.
   */
  _createClass(BoxModelIntermediateLayoutCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelIntermediateLayoutCreate();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelIntermediateLayoutChildrenCreate.BoxModelIntermediateLayoutChildrenCreate]);
      }
      return obj;
    }
  }]);
  return BoxModelIntermediateLayoutCreate;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelIntermediateLayoutCreate = BoxModelIntermediateLayoutCreate;
BoxModelIntermediateLayoutCreate.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelIntermediateLayoutCreate.VersionEnum} version
 */
BoxModelIntermediateLayoutCreate.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutCreate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelIntermediateLayoutCreate.FormatEnum} format
 */
BoxModelIntermediateLayoutCreate.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutCreate.UnitEnum = {
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
 * @member {module:model/BoxModelIntermediateLayoutCreate.UnitEnum} unit
 */
BoxModelIntermediateLayoutCreate.prototype.unit = undefined;

/**
 * @member {Array.<module:model/BoxModelIntermediateLayoutChildrenCreate>} contents
 */
BoxModelIntermediateLayoutCreate.prototype.contents = undefined;

// Implement OneOfIntermediateProductCreateLayout interface: