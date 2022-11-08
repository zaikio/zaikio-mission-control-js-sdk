"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RingBindingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RingBindingUpdate model module.
 * @module model/RingBindingUpdate
 * @version 1.0.0
 */
var RingBindingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RingBindingUpdate</code>.
   * @alias module:model/RingBindingUpdate
   * @class
   */
  function RingBindingUpdate() {
    _classCallCheck(this, RingBindingUpdate);
  }

  /**
   * Constructs a <code>RingBindingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RingBindingUpdate} obj Optional instance to populate.
   * @return {module:model/RingBindingUpdate} The populated <code>RingBindingUpdate</code> instance.
   */
  _createClass(RingBindingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RingBindingUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('shape')) obj.shape = _ApiClient.ApiClient.convertToType(data['shape'], 'String');
        if (data.hasOwnProperty('diameter')) obj.diameter = _ApiClient.ApiClient.convertToType(data['diameter'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return RingBindingUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.RingBindingUpdate = RingBindingUpdate;
RingBindingUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingUpdate.KindEnum = {
  /**
   * value: "ring_binding"
   * @const
   */
  ringBinding: "ring_binding"
};
/**
 * The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether.
 * @member {module:model/RingBindingUpdate.KindEnum} kind
 */
RingBindingUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingUpdate.ShapeEnum = {
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
 * @member {module:model/RingBindingUpdate.ShapeEnum} shape
 */
RingBindingUpdate.prototype.shape = undefined;

/**
 * @member {String} diameter
 */
RingBindingUpdate.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingUpdate.DimensionsUnitEnum = {
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
 * @member {module:model/RingBindingUpdate.DimensionsUnitEnum} dimensionsUnit
 */
RingBindingUpdate.prototype.dimensionsUnit = undefined;

// Implement FinishingUpdate interface: