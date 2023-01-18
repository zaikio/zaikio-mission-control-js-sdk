"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintFreeMargins1 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrintFreeMargins1 model module.
 * @module model/PrintFreeMargins1
 * @version 1.0.0
 */
var PrintFreeMargins1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrintFreeMargins1</code>.
   * @alias module:model/PrintFreeMargins1
   * @class
   */
  function PrintFreeMargins1() {
    _classCallCheck(this, PrintFreeMargins1);
  }

  /**
   * Constructs a <code>PrintFreeMargins1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrintFreeMargins1} obj Optional instance to populate.
   * @return {module:model/PrintFreeMargins1} The populated <code>PrintFreeMargins1</code> instance.
   */
  _createClass(PrintFreeMargins1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrintFreeMargins1();
        if (data.hasOwnProperty('left')) obj.left = _ApiClient.ApiClient.convertToType(data['left'], 'Number');
        if (data.hasOwnProperty('top')) obj.top = _ApiClient.ApiClient.convertToType(data['top'], 'Number');
        if (data.hasOwnProperty('right')) obj.right = _ApiClient.ApiClient.convertToType(data['right'], 'Number');
        if (data.hasOwnProperty('bottom')) obj.bottom = _ApiClient.ApiClient.convertToType(data['bottom'], 'Number');
      }
      return obj;
    }
  }]);
  return PrintFreeMargins1;
}();
/**
 * @member {Number} left
 */
exports.PrintFreeMargins1 = PrintFreeMargins1;
PrintFreeMargins1.prototype.left = undefined;

/**
 * @member {Number} top
 */
PrintFreeMargins1.prototype.top = undefined;

/**
 * @member {Number} right
 */
PrintFreeMargins1.prototype.right = undefined;

/**
 * @member {Number} bottom
 */
PrintFreeMargins1.prototype.bottom = undefined;