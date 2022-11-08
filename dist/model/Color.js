"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Color model module.
 * @module model/Color
 * @version 1.0.0
 */
var Color = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Color</code>.
   * @alias module:model/Color
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param surface {module:model/Color.SurfaceEnum} Whether this color is to be applied on the front or back of the substrate
   * @param system {module:model/Color.SystemEnum} The color reference system in which color name is given
   * @param name {String} The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
   * @param coverage {String} The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
   */
  function Color(id, createdAt, updatedAt, surface, system, name, coverage) {
    _classCallCheck(this, Color);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.surface = surface;
    this.system = system;
    this.name = name;
    this.coverage = coverage;
  }

  /**
   * Constructs a <code>Color</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Color} obj Optional instance to populate.
   * @return {module:model/Color} The populated <code>Color</code> instance.
   */
  _createClass(Color, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Color();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('surface')) obj.surface = _ApiClient.ApiClient.convertToType(data['surface'], 'String');
        if (data.hasOwnProperty('system')) obj.system = _ApiClient.ApiClient.convertToType(data['system'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('coverage')) obj.coverage = _ApiClient.ApiClient.convertToType(data['coverage'], 'String');
      }
      return obj;
    }
  }]);
  return Color;
}();
/**
 * @member {String} id
 */
exports.Color = Color;
Color.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Color.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Color.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>surface</code> property.
 * @enum {String}
 * @readonly
 */
Color.SurfaceEnum = {
  /**
   * value: "front"
   * @const
   */
  front: "front",
  /**
   * value: "back"
   * @const
   */
  back: "back"
};
/**
 * Whether this color is to be applied on the front or back of the substrate
 * @member {module:model/Color.SurfaceEnum} surface
 */
Color.prototype.surface = undefined;

/**
 * Allowed values for the <code>system</code> property.
 * @enum {String}
 * @readonly
 */
Color.SystemEnum = {
  /**
   * value: "CMYK"
   * @const
   */
  CMYK: "CMYK",
  /**
   * value: "HKS"
   * @const
   */
  HKS: "HKS",
  /**
   * value: "pantone"
   * @const
   */
  pantone: "pantone"
};
/**
 * The color reference system in which color name is given
 * @member {module:model/Color.SystemEnum} system
 */
Color.prototype.system = undefined;

/**
 * The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
 * @member {String} name
 */
Color.prototype.name = undefined;

/**
 * The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
 * @member {String} coverage
 */
Color.prototype.coverage = undefined;