"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoleUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The HoleUpdate model module.
 * @module model/HoleUpdate
 * @version 1.0.0
 */
var HoleUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HoleUpdate</code>.
   * @alias module:model/HoleUpdate
   * @class
   */
  function HoleUpdate() {
    _classCallCheck(this, HoleUpdate);
  }

  /**
   * Constructs a <code>HoleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HoleUpdate} obj Optional instance to populate.
   * @return {module:model/HoleUpdate} The populated <code>HoleUpdate</code> instance.
   */
  _createClass(HoleUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HoleUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('shape')) obj.shape = _ApiClient.ApiClient.convertToType(data['shape'], 'String');
        if (data.hasOwnProperty('diameter')) obj.diameter = _ApiClient.ApiClient.convertToType(data['diameter'], 'String');
        if (data.hasOwnProperty('depth')) obj.depth = _ApiClient.ApiClient.convertToType(data['depth'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
        if (data.hasOwnProperty('grommet')) obj.grommet = _ApiClient.ApiClient.convertToType(data['grommet'], 'Boolean');
      }
      return obj;
    }
  }]);
  return HoleUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.HoleUpdate = HoleUpdate;
HoleUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.KindEnum = {
  /**
   * value: "hole"
   * @const
   */
  hole: "hole"
};
/**
 * The kind of the finishing. Hole means there is a hole or many holes made into the substrate of the assigned part in the way described here.
 * @member {module:model/HoleUpdate.KindEnum} kind
 */
HoleUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.ShapeEnum = {
  /**
   * value: "elliptic"
   * @const
   */
  elliptic: "elliptic",
  /**
   * value: "rectangular"
   * @const
   */
  rectangular: "rectangular",
  /**
   * value: "round"
   * @const
   */
  round: "round"
};
/**
 * The shape of the hole that should be drilled.
 * @member {module:model/HoleUpdate.ShapeEnum} shape
 */
HoleUpdate.prototype.shape = undefined;

/**
 * The diameter of the hole that should be drilled given in the unit specified in `dimensions_unit`. For rectangular holes the diameter is measured edge to edge. 
 * @member {String} diameter
 */
HoleUpdate.prototype.diameter = undefined;

/**
 * The depth of the hole to be drilled given in the unit specified in `dimensions_unit`.
 * @member {String} depth
 */
HoleUpdate.prototype.depth = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.DimensionsUnitEnum = {
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
 * The unit for the dimensions given in `length` and `width`. This property must be set if either `length` or `width` are given.
 * @member {module:model/HoleUpdate.DimensionsUnitEnum} dimensionsUnit
 */
HoleUpdate.prototype.dimensionsUnit = undefined;

/**
 * Should the hole have a grommet
 * @member {Boolean} grommet
 */
HoleUpdate.prototype.grommet = undefined;

// Implement FinishingUpdate interface: