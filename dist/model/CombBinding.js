"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CombBinding = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CombBinding model module.
 * @module model/CombBinding
 * @version 1.0.0
 */
var CombBinding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CombBinding</code>.
   * @alias module:model/CombBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/CombBinding.KindEnum} The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter.
   * @param shape {module:model/CombBinding.ShapeEnum} The shape of the binding comb. Defaults to `single` if not set
   * @param hanger {Boolean} Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars).
   * @param diameter {String} The diameter of the rings in the comb given in the `dimensions_unit`.
   * @param dimensionsUnit {module:model/CombBinding.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
   */
  function CombBinding(id, createdAt, updatedAt, fileReferences, kind, shape, hanger, diameter, dimensionsUnit) {
    _classCallCheck(this, CombBinding);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.shape = shape;
    this.hanger = hanger;
    this.diameter = diameter;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>CombBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombBinding} obj Optional instance to populate.
   * @return {module:model/CombBinding} The populated <code>CombBinding</code> instance.
   */
  _createClass(CombBinding, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CombBinding();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('shape')) obj.shape = _ApiClient.ApiClient.convertToType(data['shape'], 'String');
        if (data.hasOwnProperty('hanger')) obj.hanger = _ApiClient.ApiClient.convertToType(data['hanger'], 'Boolean');
        if (data.hasOwnProperty('diameter')) obj.diameter = _ApiClient.ApiClient.convertToType(data['diameter'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return CombBinding;
}();
/**
 * @member {String} id
 */
exports.CombBinding = CombBinding;
CombBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
CombBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
CombBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
CombBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.KindEnum = {
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding"
};
/**
 * The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter.
 * @member {module:model/CombBinding.KindEnum} kind
 */
CombBinding.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.ShapeEnum = {
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
 * The shape of the binding comb. Defaults to `single` if not set
 * @member {module:model/CombBinding.ShapeEnum} shape
 */
CombBinding.prototype.shape = undefined;

/**
 * Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars).
 * @member {Boolean} hanger
 */
CombBinding.prototype.hanger = undefined;

/**
 * The diameter of the rings in the comb given in the `dimensions_unit`.
 * @member {String} diameter
 */
CombBinding.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.DimensionsUnitEnum = {
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
 * @member {module:model/CombBinding.DimensionsUnitEnum} dimensionsUnit
 */
CombBinding.prototype.dimensionsUnit = undefined;

// Implement Finishing interface: