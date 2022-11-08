"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessThan = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The LessThan model module.
 * @module model/LessThan
 * @version 1.0.0
 */
var LessThan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LessThan</code>.
   * @alias module:model/LessThan
   * @class
   */
  function LessThan() {
    _classCallCheck(this, LessThan);
  }

  /**
   * Constructs a <code>LessThan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LessThan} obj Optional instance to populate.
   * @return {module:model/LessThan} The populated <code>LessThan</code> instance.
   */
  _createClass(LessThan, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LessThan();
      }
      return obj;
    }
  }]);
  return LessThan;
}(); // Implement Rule interface:
exports.LessThan = LessThan;