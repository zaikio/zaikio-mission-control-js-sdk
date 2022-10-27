"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RingBinding = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RingBinding model module.
 * @module model/RingBinding
 * @version 1.0.0
 */
var RingBinding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RingBinding</code>.
   * @alias module:model/RingBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/RingBinding.KindEnum} The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether.
   * @param shape {module:model/RingBinding.ShapeEnum} The shape of the rings used for binding
   * @param diameter {String} 
   * @param dimensionsUnit {module:model/RingBinding.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
   */
  function RingBinding(id, createdAt, updatedAt, fileReferences, kind, shape, diameter, dimensionsUnit) {
    _classCallCheck(this, RingBinding);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.shape = shape;
    this.diameter = diameter;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>RingBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RingBinding} obj Optional instance to populate.
   * @return {module:model/RingBinding} The populated <code>RingBinding</code> instance.
   */
  _createClass(RingBinding, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RingBinding();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('shape')) obj.shape = _ApiClient.ApiClient.convertToType(data['shape'], 'String');
        if (data.hasOwnProperty('diameter')) obj.diameter = _ApiClient.ApiClient.convertToType(data['diameter'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return RingBinding;
}();
/**
 * @member {String} id
 */
exports.RingBinding = RingBinding;
RingBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
RingBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
RingBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
RingBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
RingBinding.KindEnum = {
  /**
   * value: "ring_binding"
   * @const
   */
  ringBinding: "ring_binding"
};
/**
 * The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether.
 * @member {module:model/RingBinding.KindEnum} kind
 */
RingBinding.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
RingBinding.ShapeEnum = {
  /**
   * value: "d"
   * @const
   */
  d: "d",
  /**
   * value: "oval"
   * @const
   */
  oval: "oval",
  /**
   * value: "round"
   * @const
   */
  round: "round",
  /**
   * value: "slant_d"
   * @const
   */
  slantD: "slant_d"
};
/**
 * The shape of the rings used for binding
 * @member {module:model/RingBinding.ShapeEnum} shape
 */
RingBinding.prototype.shape = undefined;

/**
 * @member {String} diameter
 */
RingBinding.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
RingBinding.DimensionsUnitEnum = {
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
 * @member {module:model/RingBinding.DimensionsUnitEnum} dimensionsUnit
 */
RingBinding.prototype.dimensionsUnit = undefined;

// Implement Finishing interface: