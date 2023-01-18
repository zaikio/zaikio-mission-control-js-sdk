"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bleeds = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Bleeds model module.
 * @module model/Bleeds
 * @version 1.0.0
 */
var Bleeds = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Bleeds</code>.
   * @alias module:model/Bleeds
   * @class
   * @param left {Number} 
   * @param top {Number} 
   * @param right {Number} 
   * @param bottom {Number} 
   */
  function Bleeds(left, top, right, bottom) {
    _classCallCheck(this, Bleeds);
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  /**
   * Constructs a <code>Bleeds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bleeds} obj Optional instance to populate.
   * @return {module:model/Bleeds} The populated <code>Bleeds</code> instance.
   */
  _createClass(Bleeds, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Bleeds();
        if (data.hasOwnProperty('left')) obj.left = _ApiClient.ApiClient.convertToType(data['left'], 'Number');
        if (data.hasOwnProperty('top')) obj.top = _ApiClient.ApiClient.convertToType(data['top'], 'Number');
        if (data.hasOwnProperty('right')) obj.right = _ApiClient.ApiClient.convertToType(data['right'], 'Number');
        if (data.hasOwnProperty('bottom')) obj.bottom = _ApiClient.ApiClient.convertToType(data['bottom'], 'Number');
      }
      return obj;
    }
  }]);
  return Bleeds;
}();
/**
 * @member {Number} left
 */
exports.Bleeds = Bleeds;
Bleeds.prototype.left = undefined;

/**
 * @member {Number} top
 */
Bleeds.prototype.top = undefined;

/**
 * @member {Number} right
 */
Bleeds.prototype.right = undefined;

/**
 * @member {Number} bottom
 */
Bleeds.prototype.bottom = undefined;