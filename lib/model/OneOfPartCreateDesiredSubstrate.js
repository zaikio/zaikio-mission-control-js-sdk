"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfPartCreateDesiredSubstrate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfPartCreateDesiredSubstrate model module.
 * @module model/OneOfPartCreateDesiredSubstrate
 * @version 1.0.0
 */
var OneOfPartCreateDesiredSubstrate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfPartCreateDesiredSubstrate</code>.
   * @alias module:model/OneOfPartCreateDesiredSubstrate
   * @class
   */
  function OneOfPartCreateDesiredSubstrate() {
    _classCallCheck(this, OneOfPartCreateDesiredSubstrate);
  }

  /**
   * Constructs a <code>OneOfPartCreateDesiredSubstrate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfPartCreateDesiredSubstrate} obj Optional instance to populate.
   * @return {module:model/OneOfPartCreateDesiredSubstrate} The populated <code>OneOfPartCreateDesiredSubstrate</code> instance.
   */
  _createClass(OneOfPartCreateDesiredSubstrate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfPartCreateDesiredSubstrate();
      }
      return obj;
    }
  }]);
  return OneOfPartCreateDesiredSubstrate;
}();
exports.OneOfPartCreateDesiredSubstrate = OneOfPartCreateDesiredSubstrate;