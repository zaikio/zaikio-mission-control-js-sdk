"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPartLayoutCreate = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelPartLayoutChildrenCreate = require("./BoxModelPartLayoutChildrenCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPartLayoutCreate model module.
 * @module model/BoxModelPartLayoutCreate
 * @version 1.0.0
 */
var BoxModelPartLayoutCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPartLayoutCreate</code>.
   * @alias module:model/BoxModelPartLayoutCreate
   * @class
   */
  function BoxModelPartLayoutCreate() {
    _classCallCheck(this, BoxModelPartLayoutCreate);
  }

  /**
   * Constructs a <code>BoxModelPartLayoutCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPartLayoutCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelPartLayoutCreate} The populated <code>BoxModelPartLayoutCreate</code> instance.
   */
  _createClass(BoxModelPartLayoutCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPartLayoutCreate();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('folding_pattern')) obj.foldingPattern = _ApiClient.ApiClient.convertToType(data['folding_pattern'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelPartLayoutChildrenCreate.BoxModelPartLayoutChildrenCreate]);
      }
      return obj;
    }
  }]);
  return BoxModelPartLayoutCreate;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelPartLayoutCreate = BoxModelPartLayoutCreate;
BoxModelPartLayoutCreate.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelPartLayoutCreate.VersionEnum} version
 */
BoxModelPartLayoutCreate.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayoutCreate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelPartLayoutCreate.FormatEnum} format
 */
BoxModelPartLayoutCreate.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayoutCreate.UnitEnum = {
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
 * @member {module:model/BoxModelPartLayoutCreate.UnitEnum} unit
 */
BoxModelPartLayoutCreate.prototype.unit = undefined;

/**
 * An optional folding pattern that must be applied to this part
 * @member {String} foldingPattern
 */
BoxModelPartLayoutCreate.prototype.foldingPattern = undefined;

/**
 * @member {Array.<module:model/BoxModelPartLayoutChildrenCreate>} contents
 */
BoxModelPartLayoutCreate.prototype.contents = undefined;

// Implement OneOfPartCreateLayout interface: