"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredicateUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _RuleUpdate = require("./RuleUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PredicateUpdate model module.
 * @module model/PredicateUpdate
 * @version 1.0.0
 */
var PredicateUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PredicateUpdate</code>.
   * @alias module:model/PredicateUpdate
   * @class
   */
  function PredicateUpdate() {
    _classCallCheck(this, PredicateUpdate);
  }

  /**
   * Constructs a <code>PredicateUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredicateUpdate} obj Optional instance to populate.
   * @return {module:model/PredicateUpdate} The populated <code>PredicateUpdate</code> instance.
   */
  _createClass(PredicateUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PredicateUpdate();
        if (data.hasOwnProperty('match')) obj.match = _ApiClient.ApiClient.convertToType(data['match'], 'String');
        if (data.hasOwnProperty('rules')) obj.rules = _ApiClient.ApiClient.convertToType(data['rules'], [_RuleUpdate.RuleUpdate]);
      }
      return obj;
    }
  }]);
  return PredicateUpdate;
}();
/**
 * Allowed values for the <code>match</code> property.
 * @enum {String}
 * @readonly
 */
exports.PredicateUpdate = PredicateUpdate;
PredicateUpdate.MatchEnum = {
  /**
   * value: "match_all"
   * @const
   */
  all: "match_all",
  /**
   * value: "match_any"
   * @const
   */
  any: "match_any"
};
/**
 * The specification for predicate rules combination. Specifies how predicate rules are combined to fetch list members: - Match all: fetch list members that match all predicate rules. - Match any: fetch list members that match any predicate rule/s.
 * @member {module:model/PredicateUpdate.MatchEnum} match
 */
PredicateUpdate.prototype.match = undefined;

/**
 * @member {Array.<module:model/RuleUpdate>} rules
 */
PredicateUpdate.prototype.rules = undefined;