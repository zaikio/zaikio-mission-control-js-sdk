"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredicateIdRulesBody = void 0;
var _ApiClient = require("../ApiClient");
var _RuleCreate = require("./RuleCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PredicateIdRulesBody model module.
 * @module model/PredicateIdRulesBody
 * @version 1.0.0
 */
var PredicateIdRulesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PredicateIdRulesBody</code>.
   * @alias module:model/PredicateIdRulesBody
   * @class
   * @param rule {module:model/RuleCreate} 
   */
  function PredicateIdRulesBody(rule) {
    _classCallCheck(this, PredicateIdRulesBody);
    this.rule = rule;
  }

  /**
   * Constructs a <code>PredicateIdRulesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredicateIdRulesBody} obj Optional instance to populate.
   * @return {module:model/PredicateIdRulesBody} The populated <code>PredicateIdRulesBody</code> instance.
   */
  _createClass(PredicateIdRulesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PredicateIdRulesBody();
        if (data.hasOwnProperty('rule')) obj.rule = _RuleCreate.RuleCreate.constructFromObject(data['rule']);
      }
      return obj;
    }
  }]);
  return PredicateIdRulesBody;
}();
/**
 * @member {module:model/RuleCreate} rule
 */
exports.PredicateIdRulesBody = PredicateIdRulesBody;
PredicateIdRulesBody.prototype.rule = undefined;