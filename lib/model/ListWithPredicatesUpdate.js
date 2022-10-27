"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWithPredicatesUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _PredicateUpdate = require("./PredicateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListWithPredicatesUpdate model module.
 * @module model/ListWithPredicatesUpdate
 * @version 1.0.0
 */
var ListWithPredicatesUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWithPredicatesUpdate</code>.
   * @alias module:model/ListWithPredicatesUpdate
   * @class
   */
  function ListWithPredicatesUpdate() {
    _classCallCheck(this, ListWithPredicatesUpdate);
  }

  /**
   * Constructs a <code>ListWithPredicatesUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListWithPredicatesUpdate} obj Optional instance to populate.
   * @return {module:model/ListWithPredicatesUpdate} The populated <code>ListWithPredicatesUpdate</code> instance.
   */
  _createClass(ListWithPredicatesUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWithPredicatesUpdate();
        if (data.hasOwnProperty('predicates')) obj.predicates = _ApiClient.ApiClient.convertToType(data['predicates'], [_PredicateUpdate.PredicateUpdate]);
      }
      return obj;
    }
  }]);
  return ListWithPredicatesUpdate;
}();
/**
 * @member {Array.<module:model/PredicateUpdate>} predicates
 */
exports.ListWithPredicatesUpdate = ListWithPredicatesUpdate;
ListWithPredicatesUpdate.prototype.predicates = undefined;