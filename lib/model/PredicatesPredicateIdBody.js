"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PredicatesPredicateIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _PredicateUpdate = require("./PredicateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PredicatesPredicateIdBody model module.
 * @module model/PredicatesPredicateIdBody
 * @version 1.0.0
 */
var PredicatesPredicateIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PredicatesPredicateIdBody</code>.
   * @alias module:model/PredicatesPredicateIdBody
   * @class
   * @param predicate {module:model/PredicateUpdate} 
   */
  function PredicatesPredicateIdBody(predicate) {
    _classCallCheck(this, PredicatesPredicateIdBody);
    this.predicate = predicate;
  }

  /**
   * Constructs a <code>PredicatesPredicateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredicatesPredicateIdBody} obj Optional instance to populate.
   * @return {module:model/PredicatesPredicateIdBody} The populated <code>PredicatesPredicateIdBody</code> instance.
   */
  _createClass(PredicatesPredicateIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PredicatesPredicateIdBody();
        if (data.hasOwnProperty('predicate')) obj.predicate = _PredicateUpdate.PredicateUpdate.constructFromObject(data['predicate']);
      }
      return obj;
    }
  }]);
  return PredicatesPredicateIdBody;
}();
/**
 * @member {module:model/PredicateUpdate} predicate
 */
exports.PredicatesPredicateIdBody = PredicatesPredicateIdBody;
PredicatesPredicateIdBody.prototype.predicate = undefined;