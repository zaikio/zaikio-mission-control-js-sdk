"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredicateCreate = void 0;
var _ApiClient = require("../ApiClient");
var _RuleCreate = require("./RuleCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PredicateCreate model module.
 * @module model/PredicateCreate
 * @version 1.0.0
 */
var PredicateCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PredicateCreate</code>.
   * @alias module:model/PredicateCreate
   * @class
   */
  function PredicateCreate() {
    _classCallCheck(this, PredicateCreate);
  }

  /**
   * Constructs a <code>PredicateCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredicateCreate} obj Optional instance to populate.
   * @return {module:model/PredicateCreate} The populated <code>PredicateCreate</code> instance.
   */
  _createClass(PredicateCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PredicateCreate();
        if (data.hasOwnProperty('match')) obj.match = _ApiClient.ApiClient.convertToType(data['match'], 'String');
        if (data.hasOwnProperty('rules')) obj.rules = _ApiClient.ApiClient.convertToType(data['rules'], [_RuleCreate.RuleCreate]);
      }
      return obj;
    }
  }]);
  return PredicateCreate;
}();
/**
 * Allowed values for the <code>match</code> property.
 * @enum {String}
 * @readonly
 */
exports.PredicateCreate = PredicateCreate;
PredicateCreate.MatchEnum = {
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
 * @member {module:model/PredicateCreate.MatchEnum} match
 */
PredicateCreate.prototype.match = undefined;

/**
 * @member {Array.<module:model/RuleCreate>} rules
 */
PredicateCreate.prototype.rules = undefined;