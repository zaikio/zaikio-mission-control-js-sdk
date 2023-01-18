"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dimensions = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Dimensions model module.
 * @module model/Dimensions
 * @version 1.0.0
 */
var Dimensions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dimensions</code>.
   * TODO: About dimensions
   * @alias module:model/Dimensions
   * @class
   * @param width {Number} 
   * @param height {Number} 
   */
  function Dimensions(width, height) {
    _classCallCheck(this, Dimensions);
    this.width = width;
    this.height = height;
  }

  /**
   * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dimensions} obj Optional instance to populate.
   * @return {module:model/Dimensions} The populated <code>Dimensions</code> instance.
   */
  _createClass(Dimensions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dimensions();
        if (data.hasOwnProperty('width')) obj.width = _ApiClient.ApiClient.convertToType(data['width'], 'Number');
        if (data.hasOwnProperty('height')) obj.height = _ApiClient.ApiClient.convertToType(data['height'], 'Number');
      }
      return obj;
    }
  }]);
  return Dimensions;
}();
/**
 * @member {Number} width
 */
exports.Dimensions = Dimensions;
Dimensions.prototype.width = undefined;

/**
 * @member {Number} height
 */
Dimensions.prototype.height = undefined;