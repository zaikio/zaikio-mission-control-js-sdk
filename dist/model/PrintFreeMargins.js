"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintFreeMargins = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrintFreeMargins model module.
 * @module model/PrintFreeMargins
 * @version 1.0.0
 */
var PrintFreeMargins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrintFreeMargins</code>.
   * @alias module:model/PrintFreeMargins
   * @class
   * @param left {Number} 
   * @param top {Number} 
   * @param right {Number} 
   * @param bottom {Number} 
   */
  function PrintFreeMargins(left, top, right, bottom) {
    _classCallCheck(this, PrintFreeMargins);
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  /**
   * Constructs a <code>PrintFreeMargins</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrintFreeMargins} obj Optional instance to populate.
   * @return {module:model/PrintFreeMargins} The populated <code>PrintFreeMargins</code> instance.
   */
  _createClass(PrintFreeMargins, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrintFreeMargins();
        if (data.hasOwnProperty('left')) obj.left = _ApiClient.ApiClient.convertToType(data['left'], 'Number');
        if (data.hasOwnProperty('top')) obj.top = _ApiClient.ApiClient.convertToType(data['top'], 'Number');
        if (data.hasOwnProperty('right')) obj.right = _ApiClient.ApiClient.convertToType(data['right'], 'Number');
        if (data.hasOwnProperty('bottom')) obj.bottom = _ApiClient.ApiClient.convertToType(data['bottom'], 'Number');
      }
      return obj;
    }
  }]);
  return PrintFreeMargins;
}();
/**
 * @member {Number} left
 */
exports.PrintFreeMargins = PrintFreeMargins;
PrintFreeMargins.prototype.left = undefined;

/**
 * @member {Number} top
 */
PrintFreeMargins.prototype.top = undefined;

/**
 * @member {Number} right
 */
PrintFreeMargins.prototype.right = undefined;

/**
 * @member {Number} bottom
 */
PrintFreeMargins.prototype.bottom = undefined;