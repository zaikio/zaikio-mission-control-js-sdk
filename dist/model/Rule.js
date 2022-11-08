"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rule = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Rule model module.
 * @module model/Rule
 * @version 1.0.0
 */
var Rule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Rule</code>.
   * @alias module:model/Rule
   * @class
   */
  function Rule() {
    _classCallCheck(this, Rule);
  }

  /**
   * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rule} obj Optional instance to populate.
   * @return {module:model/Rule} The populated <code>Rule</code> instance.
   */
  _createClass(Rule, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Rule();
      }
      return obj;
    }
  }]);
  return Rule;
}();
exports.Rule = Rule;