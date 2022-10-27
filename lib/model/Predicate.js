"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Predicate = void 0;
var _ApiClient = require("../ApiClient");
var _Rule = require("./Rule");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Predicate model module.
 * @module model/Predicate
 * @version 1.0.0
 */
var Predicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Predicate</code>.
   * @alias module:model/Predicate
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param match {module:model/Predicate.MatchEnum} The specification for predicate rules combination. Specifies how predicate rules are combined to fetch list members: - Match all: fetch list members that match all predicate rules. - Match any: fetch list members that match any predicate rule/s.
   * @param rules {Array.<module:model/Rule>} 
   */
  function Predicate(id, createdAt, updatedAt, match, rules) {
    _classCallCheck(this, Predicate);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.match = match;
    this.rules = rules;
  }

  /**
   * Constructs a <code>Predicate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Predicate} obj Optional instance to populate.
   * @return {module:model/Predicate} The populated <code>Predicate</code> instance.
   */
  _createClass(Predicate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Predicate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('match')) obj.match = _ApiClient.ApiClient.convertToType(data['match'], 'String');
        if (data.hasOwnProperty('rules')) obj.rules = _ApiClient.ApiClient.convertToType(data['rules'], [_Rule.Rule]);
      }
      return obj;
    }
  }]);
  return Predicate;
}();
/**
 * @member {String} id
 */
exports.Predicate = Predicate;
Predicate.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Predicate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Predicate.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>match</code> property.
 * @enum {String}
 * @readonly
 */
Predicate.MatchEnum = {
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
 * @member {module:model/Predicate.MatchEnum} match
 */
Predicate.prototype.match = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
Predicate.prototype.rules = undefined;