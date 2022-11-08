"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWithPredicatesCreate = void 0;
var _ApiClient = require("../ApiClient");
var _PredicateCreate = require("./PredicateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListWithPredicatesCreate model module.
 * @module model/ListWithPredicatesCreate
 * @version 1.0.0
 */
var ListWithPredicatesCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWithPredicatesCreate</code>.
   * @alias module:model/ListWithPredicatesCreate
   * @class
   */
  function ListWithPredicatesCreate() {
    _classCallCheck(this, ListWithPredicatesCreate);
  }

  /**
   * Constructs a <code>ListWithPredicatesCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListWithPredicatesCreate} obj Optional instance to populate.
   * @return {module:model/ListWithPredicatesCreate} The populated <code>ListWithPredicatesCreate</code> instance.
   */
  _createClass(ListWithPredicatesCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWithPredicatesCreate();
        if (data.hasOwnProperty('predicates')) obj.predicates = _ApiClient.ApiClient.convertToType(data['predicates'], [_PredicateCreate.PredicateCreate]);
      }
      return obj;
    }
  }]);
  return ListWithPredicatesCreate;
}();
/**
 * @member {Array.<module:model/PredicateCreate>} predicates
 */
exports.ListWithPredicatesCreate = ListWithPredicatesCreate;
ListWithPredicatesCreate.prototype.predicates = undefined;