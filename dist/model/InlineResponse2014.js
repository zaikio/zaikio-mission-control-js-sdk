"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2014 = void 0;
var _ApiClient = require("../ApiClient");
var _ListWithPredicates = require("./ListWithPredicates");
var _Predicate = require("./Predicate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse2014 model module.
 * @module model/InlineResponse2014
 * @version 1.0.0
 */
var InlineResponse2014 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2014</code>.
   * @alias module:model/InlineResponse2014
   * @class
   * @extends 
   * @param predicates {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param name {} The name of the list.
   * @param memberKlass {} The type of list members. All members in a list share the same type.
   */
  function InlineResponse2014(predicates, id, createdAt, updatedAt, name, memberKlass) {
    _classCallCheck(this, InlineResponse2014);
    this.predicates = predicates;
  }

  /**
   * Constructs a <code>InlineResponse2014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2014} obj Optional instance to populate.
   * @return {module:model/InlineResponse2014} The populated <code>InlineResponse2014</code> instance.
   */
  _createClass(InlineResponse2014, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2014();
        _ApiClient.ApiClient.constructFromObject(data, obj, '');
        if (data.hasOwnProperty('predicates')) obj.predicates = _ApiClient.ApiClient.convertToType(data['predicates'], [_Predicate.Predicate]);
      }
      return obj;
    }
  }]);
  return InlineResponse2014;
}();
/**
 * @member {Array.<module:model/Predicate>} predicates
 */
exports.InlineResponse2014 = InlineResponse2014;
InlineResponse2014.prototype.predicates = undefined;