"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIdPredicatesBody = void 0;
var _ApiClient = require("../ApiClient");
var _PredicateCreate = require("./PredicateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListIdPredicatesBody model module.
 * @module model/ListIdPredicatesBody
 * @version 1.0.0
 */
var ListIdPredicatesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListIdPredicatesBody</code>.
   * @alias module:model/ListIdPredicatesBody
   * @class
   * @param predicate {module:model/PredicateCreate} 
   */
  function ListIdPredicatesBody(predicate) {
    _classCallCheck(this, ListIdPredicatesBody);
    this.predicate = predicate;
  }

  /**
   * Constructs a <code>ListIdPredicatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdPredicatesBody} obj Optional instance to populate.
   * @return {module:model/ListIdPredicatesBody} The populated <code>ListIdPredicatesBody</code> instance.
   */
  _createClass(ListIdPredicatesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListIdPredicatesBody();
        if (data.hasOwnProperty('predicate')) obj.predicate = _PredicateCreate.PredicateCreate.constructFromObject(data['predicate']);
      }
      return obj;
    }
  }]);
  return ListIdPredicatesBody;
}();
/**
 * @member {module:model/PredicateCreate} predicate
 */
exports.ListIdPredicatesBody = ListIdPredicatesBody;
ListIdPredicatesBody.prototype.predicate = undefined;