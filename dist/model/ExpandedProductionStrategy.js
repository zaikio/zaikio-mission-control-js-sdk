"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedProductionStrategy = void 0;
var _ApiClient = require("../ApiClient");
var _Imposing = require("./Imposing");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedProductionStrategy model module.
 * @module model/ExpandedProductionStrategy
 * @version 1.0.0
 */
var ExpandedProductionStrategy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedProductionStrategy</code>.
   * @alias module:model/ExpandedProductionStrategy
   * @class
   * @param imposings {Array.<module:model/Imposing>} 
   */
  function ExpandedProductionStrategy(imposings) {
    _classCallCheck(this, ExpandedProductionStrategy);
    this.imposings = imposings;
  }

  /**
   * Constructs a <code>ExpandedProductionStrategy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedProductionStrategy} obj Optional instance to populate.
   * @return {module:model/ExpandedProductionStrategy} The populated <code>ExpandedProductionStrategy</code> instance.
   */
  _createClass(ExpandedProductionStrategy, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedProductionStrategy();
        if (data.hasOwnProperty('imposings')) obj.imposings = _ApiClient.ApiClient.convertToType(data['imposings'], [_Imposing.Imposing]);
      }
      return obj;
    }
  }]);
  return ExpandedProductionStrategy;
}();
/**
 * @member {Array.<module:model/Imposing>} imposings
 */
exports.ExpandedProductionStrategy = ExpandedProductionStrategy;
ExpandedProductionStrategy.prototype.imposings = undefined;