"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPartLayoutUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _BoxModelPartLayoutChildrenUpdate = require("./BoxModelPartLayoutChildrenUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPartLayoutUpdate model module.
 * @module model/BoxModelPartLayoutUpdate
 * @version 1.0.0
 */
var BoxModelPartLayoutUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPartLayoutUpdate</code>.
   * @alias module:model/BoxModelPartLayoutUpdate
   * @class
   */
  function BoxModelPartLayoutUpdate() {
    _classCallCheck(this, BoxModelPartLayoutUpdate);
  }

  /**
   * Constructs a <code>BoxModelPartLayoutUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPartLayoutUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelPartLayoutUpdate} The populated <code>BoxModelPartLayoutUpdate</code> instance.
   */
  _createClass(BoxModelPartLayoutUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPartLayoutUpdate();
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'Number');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('folding_pattern')) obj.foldingPattern = _ApiClient.ApiClient.convertToType(data['folding_pattern'], 'String');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], [_BoxModelPartLayoutChildrenUpdate.BoxModelPartLayoutChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelPartLayoutUpdate;
}();
/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
exports.BoxModelPartLayoutUpdate = BoxModelPartLayoutUpdate;
BoxModelPartLayoutUpdate.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelPartLayoutUpdate.VersionEnum} version
 */
BoxModelPartLayoutUpdate.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayoutUpdate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelPartLayoutUpdate.FormatEnum} format
 */
BoxModelPartLayoutUpdate.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPartLayoutUpdate.UnitEnum = {
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
 * @member {module:model/BoxModelPartLayoutUpdate.UnitEnum} unit
 */
BoxModelPartLayoutUpdate.prototype.unit = undefined;

/**
 * An optional folding pattern that must be applied to this part
 * @member {String} foldingPattern
 */
BoxModelPartLayoutUpdate.prototype.foldingPattern = undefined;

/**
 * @member {Array.<module:model/BoxModelPartLayoutChildrenUpdate>} contents
 */
BoxModelPartLayoutUpdate.prototype.contents = undefined;

// Implement OneOfPartUpdateLayout interface: