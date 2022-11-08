"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RulesRuleIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _RuleUpdate = require("./RuleUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RulesRuleIdBody model module.
 * @module model/RulesRuleIdBody
 * @version 1.0.0
 */
var RulesRuleIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RulesRuleIdBody</code>.
   * @alias module:model/RulesRuleIdBody
   * @class
   * @param rule {module:model/RuleUpdate} 
   */
  function RulesRuleIdBody(rule) {
    _classCallCheck(this, RulesRuleIdBody);
    this.rule = rule;
  }

  /**
   * Constructs a <code>RulesRuleIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RulesRuleIdBody} obj Optional instance to populate.
   * @return {module:model/RulesRuleIdBody} The populated <code>RulesRuleIdBody</code> instance.
   */
  _createClass(RulesRuleIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RulesRuleIdBody();
        if (data.hasOwnProperty('rule')) obj.rule = _RuleUpdate.RuleUpdate.constructFromObject(data['rule']);
      }
      return obj;
    }
  }]);
  return RulesRuleIdBody;
}();
/**
 * @member {module:model/RuleUpdate} rule
 */
exports.RulesRuleIdBody = RulesRuleIdBody;
RulesRuleIdBody.prototype.rule = undefined;