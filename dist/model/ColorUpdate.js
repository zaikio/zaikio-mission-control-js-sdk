"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ColorUpdate model module.
 * @module model/ColorUpdate
 * @version 1.0.0
 */
var ColorUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ColorUpdate</code>.
   * @alias module:model/ColorUpdate
   * @class
   */
  function ColorUpdate() {
    _classCallCheck(this, ColorUpdate);
  }

  /**
   * Constructs a <code>ColorUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ColorUpdate} obj Optional instance to populate.
   * @return {module:model/ColorUpdate} The populated <code>ColorUpdate</code> instance.
   */
  _createClass(ColorUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ColorUpdate();
        if (data.hasOwnProperty('surface')) obj.surface = _ApiClient.ApiClient.convertToType(data['surface'], 'String');
        if (data.hasOwnProperty('system')) obj.system = _ApiClient.ApiClient.convertToType(data['system'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('coverage')) obj.coverage = _ApiClient.ApiClient.convertToType(data['coverage'], 'String');
        if (data.hasOwnProperty('print_standard')) obj.printStandard = _ApiClient.ApiClient.convertToType(data['print_standard'], 'String');
      }
      return obj;
    }
  }]);
  return ColorUpdate;
}();
/**
 * Allowed values for the <code>surface</code> property.
 * @enum {String}
 * @readonly
 */
exports.ColorUpdate = ColorUpdate;
ColorUpdate.SurfaceEnum = {
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
 * @member {module:model/ColorUpdate.SurfaceEnum} surface
 */
ColorUpdate.prototype.surface = undefined;

/**
 * Allowed values for the <code>system</code> property.
 * @enum {String}
 * @readonly
 */
ColorUpdate.SystemEnum = {
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
 * @member {module:model/ColorUpdate.SystemEnum} system
 */
ColorUpdate.prototype.system = undefined;

/**
 * The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
 * @member {String} name
 */
ColorUpdate.prototype.name = undefined;

/**
 * The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
 * @member {String} coverage
 */
ColorUpdate.prototype.coverage = undefined;

/**
 * Allowed values for the <code>printStandard</code> property.
 * @enum {String}
 * @readonly
 */
ColorUpdate.PrintStandardEnum = {
  /**
   * value: "CRPC3"
   * @const
   */
  cRPC3: "CRPC3",
  /**
   * value: "CRPC6"
   * @const
   */
  cRPC6: "CRPC6",
  /**
   * value: "FOGRA39"
   * @const
   */
  fOGRA39: "FOGRA39",
  /**
   * value: "FOGRA40"
   * @const
   */
  fOGRA40: "FOGRA40",
  /**
   * value: "FOGRA45"
   * @const
   */
  fOGRA45: "FOGRA45",
  /**
   * value: "FOGRA46"
   * @const
   */
  fOGRA46: "FOGRA46",
  /**
   * value: "FOGRA47"
   * @const
   */
  fOGRA47: "FOGRA47",
  /**
   * value: "FOGRA51"
   * @const
   */
  fOGRA51: "FOGRA51",
  /**
   * value: "FOGRA52"
   * @const
   */
  fOGRA52: "FOGRA52",
  /**
   * value: "FOGRA54"
   * @const
   */
  fOGRA54: "FOGRA54",
  /**
   * value: "FOGRA59"
   * @const
   */
  fOGRA59: "FOGRA59",
  /**
   * value: "GRACOL"
   * @const
   */
  GRACOL: "GRACOL",
  /**
   * value: "IFRA26"
   * @const
   */
  iFRA26: "IFRA26",
  /**
   * value: "TR001"
   * @const
   */
  tR001: "TR001",
  /**
   * value: "TR005"
   * @const
   */
  tR005: "TR005",
  /**
   * value: "TR006"
   * @const
   */
  tR006: "TR006"
};
/**
 * Set an output desired color calibration to reduce likelihood of errors.
 * @member {module:model/ColorUpdate.PrintStandardEnum} printStandard
 */
ColorUpdate.prototype.printStandard = undefined;