"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfPartUpdateDesiredSubstrate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfPartUpdateDesiredSubstrate model module.
 * @module model/OneOfPartUpdateDesiredSubstrate
 * @version 1.0.0
 */
var OneOfPartUpdateDesiredSubstrate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfPartUpdateDesiredSubstrate</code>.
   * @alias module:model/OneOfPartUpdateDesiredSubstrate
   * @class
   */
  function OneOfPartUpdateDesiredSubstrate() {
    _classCallCheck(this, OneOfPartUpdateDesiredSubstrate);
  }

  /**
   * Constructs a <code>OneOfPartUpdateDesiredSubstrate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfPartUpdateDesiredSubstrate} obj Optional instance to populate.
   * @return {module:model/OneOfPartUpdateDesiredSubstrate} The populated <code>OneOfPartUpdateDesiredSubstrate</code> instance.
   */
  _createClass(OneOfPartUpdateDesiredSubstrate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfPartUpdateDesiredSubstrate();
      }
      return obj;
    }
  }]);
  return OneOfPartUpdateDesiredSubstrate;
}();
exports.OneOfPartUpdateDesiredSubstrate = OneOfPartUpdateDesiredSubstrate;