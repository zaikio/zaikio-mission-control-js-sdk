"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfImposingSubstrate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfImposingSubstrate model module.
 * @module model/OneOfImposingSubstrate
 * @version 1.0.0
 */
var OneOfImposingSubstrate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfImposingSubstrate</code>.
   * @alias module:model/OneOfImposingSubstrate
   * @class
   */
  function OneOfImposingSubstrate() {
    _classCallCheck(this, OneOfImposingSubstrate);
  }

  /**
   * Constructs a <code>OneOfImposingSubstrate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfImposingSubstrate} obj Optional instance to populate.
   * @return {module:model/OneOfImposingSubstrate} The populated <code>OneOfImposingSubstrate</code> instance.
   */
  _createClass(OneOfImposingSubstrate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfImposingSubstrate();
      }
      return obj;
    }
  }]);
  return OneOfImposingSubstrate;
}();
exports.OneOfImposingSubstrate = OneOfImposingSubstrate;