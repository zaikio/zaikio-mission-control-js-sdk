"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripBinding = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StripBinding model module.
 * @module model/StripBinding
 * @version 1.0.0
 */
var StripBinding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StripBinding</code>.
   * @alias module:model/StripBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/StripBinding.KindEnum} The kind of the finishing. Strip binding is a binding process where a strip of plastic with attached pins is used to bind several signatures or parts together. Strip binding is commonly used for document bindings that require tempering resistance (i.e. notary documents, tax reports, balance sheets)
   * @param pinHeight {String} The height of the pins used in the binding, given in the `dimensions_unit`.
   * @param dimensionsUnit {module:model/StripBinding.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
   */
  function StripBinding(id, createdAt, updatedAt, fileReferences, kind, pinHeight, dimensionsUnit) {
    _classCallCheck(this, StripBinding);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.pinHeight = pinHeight;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>StripBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripBinding} obj Optional instance to populate.
   * @return {module:model/StripBinding} The populated <code>StripBinding</code> instance.
   */
  _createClass(StripBinding, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StripBinding();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('pin_height')) obj.pinHeight = _ApiClient.ApiClient.convertToType(data['pin_height'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return StripBinding;
}();
/**
 * @member {String} id
 */
exports.StripBinding = StripBinding;
StripBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
StripBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
StripBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
StripBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
StripBinding.KindEnum = {
  /**
   * value: "strip_binding"
   * @const
   */
  stripBinding: "strip_binding"
};
/**
 * The kind of the finishing. Strip binding is a binding process where a strip of plastic with attached pins is used to bind several signatures or parts together. Strip binding is commonly used for document bindings that require tempering resistance (i.e. notary documents, tax reports, balance sheets)
 * @member {module:model/StripBinding.KindEnum} kind
 */
StripBinding.prototype.kind = undefined;

/**
 * The height of the pins used in the binding, given in the `dimensions_unit`.
 * @member {String} pinHeight
 */
StripBinding.prototype.pinHeight = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
StripBinding.DimensionsUnitEnum = {
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
 * @member {module:model/StripBinding.DimensionsUnitEnum} dimensionsUnit
 */
StripBinding.prototype.dimensionsUnit = undefined;

// Implement Finishing interface: