"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bleeds2 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Bleeds2 model module.
 * @module model/Bleeds2
 * @version 1.0.0
 */
var Bleeds2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Bleeds2</code>.
   * @alias module:model/Bleeds2
   * @class
   * @param left {Number} 
   * @param top {Number} 
   * @param right {Number} 
   * @param bottom {Number} 
   */
  function Bleeds2(left, top, right, bottom) {
    _classCallCheck(this, Bleeds2);
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  /**
   * Constructs a <code>Bleeds2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bleeds2} obj Optional instance to populate.
   * @return {module:model/Bleeds2} The populated <code>Bleeds2</code> instance.
   */
  _createClass(Bleeds2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Bleeds2();
        if (data.hasOwnProperty('left')) obj.left = _ApiClient.ApiClient.convertToType(data['left'], 'Number');
        if (data.hasOwnProperty('top')) obj.top = _ApiClient.ApiClient.convertToType(data['top'], 'Number');
        if (data.hasOwnProperty('right')) obj.right = _ApiClient.ApiClient.convertToType(data['right'], 'Number');
        if (data.hasOwnProperty('bottom')) obj.bottom = _ApiClient.ApiClient.convertToType(data['bottom'], 'Number');
      }
      return obj;
    }
  }]);
  return Bleeds2;
}();
/**
 * @member {Number} left
 */
exports.Bleeds2 = Bleeds2;
Bleeds2.prototype.left = undefined;

/**
 * @member {Number} top
 */
Bleeds2.prototype.top = undefined;

/**
 * @member {Number} right
 */
Bleeds2.prototype.right = undefined;

/**
 * @member {Number} bottom
 */
Bleeds2.prototype.bottom = undefined;