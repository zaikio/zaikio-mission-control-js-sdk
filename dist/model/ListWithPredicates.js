"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWithPredicates = void 0;
var _ApiClient = require("../ApiClient");
var _Predicate = require("./Predicate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListWithPredicates model module.
 * @module model/ListWithPredicates
 * @version 1.0.0
 */
var ListWithPredicates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWithPredicates</code>.
   * @alias module:model/ListWithPredicates
   * @class
   * @param predicates {Array.<module:model/Predicate>} 
   */
  function ListWithPredicates(predicates) {
    _classCallCheck(this, ListWithPredicates);
    this.predicates = predicates;
  }

  /**
   * Constructs a <code>ListWithPredicates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListWithPredicates} obj Optional instance to populate.
   * @return {module:model/ListWithPredicates} The populated <code>ListWithPredicates</code> instance.
   */
  _createClass(ListWithPredicates, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWithPredicates();
        if (data.hasOwnProperty('predicates')) obj.predicates = _ApiClient.ApiClient.convertToType(data['predicates'], [_Predicate.Predicate]);
      }
      return obj;
    }
  }]);
  return ListWithPredicates;
}();
/**
 * @member {Array.<module:model/Predicate>} predicates
 */
exports.ListWithPredicates = ListWithPredicates;
ListWithPredicates.prototype.predicates = undefined;