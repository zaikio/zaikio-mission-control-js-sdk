"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripBindingCreate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StripBindingCreate model module.
 * @module model/StripBindingCreate
 * @version 1.0.0
 */
var StripBindingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StripBindingCreate</code>.
   * @alias module:model/StripBindingCreate
   * @class
   */
  function StripBindingCreate() {
    _classCallCheck(this, StripBindingCreate);
  }

  /**
   * Constructs a <code>StripBindingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripBindingCreate} obj Optional instance to populate.
   * @return {module:model/StripBindingCreate} The populated <code>StripBindingCreate</code> instance.
   */
  _createClass(StripBindingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StripBindingCreate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceCreate.FileReferenceCreate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('pin_height')) obj.pinHeight = _ApiClient.ApiClient.convertToType(data['pin_height'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return StripBindingCreate;
}();
/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
exports.StripBindingCreate = StripBindingCreate;
StripBindingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
StripBindingCreate.KindEnum = {
  /**
   * value: "strip_binding"
   * @const
   */
  stripBinding: "strip_binding"
};
/**
 * The kind of the finishing. Strip binding is a binding process where a strip of plastic with attached pins is used to bind several signatures or parts together. Strip binding is commonly used for document bindings that require tempering resistance (i.e. notary documents, tax reports, balance sheets)
 * @member {module:model/StripBindingCreate.KindEnum} kind
 */
StripBindingCreate.prototype.kind = undefined;

/**
 * The height of the pins used in the binding, given in the `dimensions_unit`.
 * @member {String} pinHeight
 */
StripBindingCreate.prototype.pinHeight = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
StripBindingCreate.DimensionsUnitEnum = {
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
 * @member {module:model/StripBindingCreate.DimensionsUnitEnum} dimensionsUnit
 */
StripBindingCreate.prototype.dimensionsUnit = undefined;

// Implement FinishingCreate interface: