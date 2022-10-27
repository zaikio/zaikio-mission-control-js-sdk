"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hole = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Hole model module.
 * @module model/Hole
 * @version 1.0.0
 */
var Hole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Hole</code>.
   * @alias module:model/Hole
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Hole.KindEnum} The kind of the finishing. Hole means there is a hole or many holes made into the substrate of the assigned part in the way described here.
   * @param shape {module:model/Hole.ShapeEnum} The shape of the hole that should be drilled.
   * @param diameter {String} The diameter of the hole that should be drilled given in the unit specified in `dimensions_unit`. For rectangular holes the diameter is measured edge to edge. 
   * @param depth {String} The depth of the hole to be drilled given in the unit specified in `dimensions_unit`.
   * @param dimensionsUnit {module:model/Hole.DimensionsUnitEnum} The unit for the dimensions given in `length` and `width`. This property must be set if either `length` or `width` are given.
   * @param grommet {Boolean} Should the hole have a grommet
   */
  function Hole(id, createdAt, updatedAt, fileReferences, kind, shape, diameter, depth, dimensionsUnit, grommet) {
    _classCallCheck(this, Hole);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.shape = shape;
    this.diameter = diameter;
    this.depth = depth;
    this.dimensionsUnit = dimensionsUnit;
    this.grommet = grommet;
  }

  /**
   * Constructs a <code>Hole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Hole} obj Optional instance to populate.
   * @return {module:model/Hole} The populated <code>Hole</code> instance.
   */
  _createClass(Hole, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Hole();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
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
  return Hole;
}();
/**
 * @member {String} id
 */
exports.Hole = Hole;
Hole.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Hole.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Hole.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Hole.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Hole.KindEnum = {
  /**
   * value: "hole"
   * @const
   */
  hole: "hole"
};
/**
 * The kind of the finishing. Hole means there is a hole or many holes made into the substrate of the assigned part in the way described here.
 * @member {module:model/Hole.KindEnum} kind
 */
Hole.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
Hole.ShapeEnum = {
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
 * @member {module:model/Hole.ShapeEnum} shape
 */
Hole.prototype.shape = undefined;

/**
 * The diameter of the hole that should be drilled given in the unit specified in `dimensions_unit`. For rectangular holes the diameter is measured edge to edge. 
 * @member {String} diameter
 */
Hole.prototype.diameter = undefined;

/**
 * The depth of the hole to be drilled given in the unit specified in `dimensions_unit`.
 * @member {String} depth
 */
Hole.prototype.depth = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
Hole.DimensionsUnitEnum = {
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
 * @member {module:model/Hole.DimensionsUnitEnum} dimensionsUnit
 */
Hole.prototype.dimensionsUnit = undefined;

/**
 * Should the hole have a grommet
 * @member {Boolean} grommet
 */
Hole.prototype.grommet = undefined;

// Implement Finishing interface: