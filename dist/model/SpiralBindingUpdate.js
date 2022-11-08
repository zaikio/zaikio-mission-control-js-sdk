"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpiralBindingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SpiralBindingUpdate model module.
 * @module model/SpiralBindingUpdate
 * @version 1.0.0
 */
var SpiralBindingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpiralBindingUpdate</code>.
   * @alias module:model/SpiralBindingUpdate
   * @class
   */
  function SpiralBindingUpdate() {
    _classCallCheck(this, SpiralBindingUpdate);
  }

  /**
   * Constructs a <code>SpiralBindingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpiralBindingUpdate} obj Optional instance to populate.
   * @return {module:model/SpiralBindingUpdate} The populated <code>SpiralBindingUpdate</code> instance.
   */
  _createClass(SpiralBindingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpiralBindingUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('shape')) obj.shape = _ApiClient.ApiClient.convertToType(data['shape'], 'String');
        if (data.hasOwnProperty('hanger')) obj.hanger = _ApiClient.ApiClient.convertToType(data['hanger'], 'Boolean');
        if (data.hasOwnProperty('diameter')) obj.diameter = _ApiClient.ApiClient.convertToType(data['diameter'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return SpiralBindingUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.SpiralBindingUpdate = SpiralBindingUpdate;
SpiralBindingUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBindingUpdate.KindEnum = {
  /**
   * value: "spiral_binding"
   * @const
   */
  spiralBinding: "spiral_binding"
};
/**
 * The kind of the finishing. Spiral binding is a binding method in which a metal or plastic thread that has been shaped into a sprial is inserted into punched holes in order to bind multiple singatures or parts together.
 * @member {module:model/SpiralBindingUpdate.KindEnum} kind
 */
SpiralBindingUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBindingUpdate.ShapeEnum = {
  /**
   * value: "single"
   * @const
   */
  single: "single",
  /**
   * value: "twin"
   * @const
   */
  twin: "twin"
};
/**
 * The shape of the binding comb. Defaults to `single` if not set.
 * @member {module:model/SpiralBindingUpdate.ShapeEnum} shape
 */
SpiralBindingUpdate.prototype.shape = undefined;

/**
 * Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the printed item to a wall (i.e. calendars).
 * @member {Boolean} hanger
 */
SpiralBindingUpdate.prototype.hanger = undefined;

/**
 * The diameter of the rings in the comb given in the `dimension_unit`.
 * @member {String} diameter
 */
SpiralBindingUpdate.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBindingUpdate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "foot"
   * @const
   */
  foot: "foot",
  /**
   * value: "inch"
   * @const
   */
  inch: "inch",
  /**
   * value: "m"
   * @const
   */
  m: "m",
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "pica"
   * @const
   */
  pica: "pica",
  /**
   * value: "point"
   * @const
   */
  point: "point"
};
/**
 * The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
 * @member {module:model/SpiralBindingUpdate.DimensionsUnitEnum} dimensionsUnit
 */
SpiralBindingUpdate.prototype.dimensionsUnit = undefined;

// Implement FinishingUpdate interface: