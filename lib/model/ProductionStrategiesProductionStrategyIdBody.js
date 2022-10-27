"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionStrategiesProductionStrategyIdBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionStrategiesProductionStrategyIdBody model module.
 * @module model/ProductionStrategiesProductionStrategyIdBody
 * @version 1.0.0
 */
var ProductionStrategiesProductionStrategyIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionStrategiesProductionStrategyIdBody</code>.
   * @alias module:model/ProductionStrategiesProductionStrategyIdBody
   * @class
   * @param productionStrategy {Object} 
   */
  function ProductionStrategiesProductionStrategyIdBody(productionStrategy) {
    _classCallCheck(this, ProductionStrategiesProductionStrategyIdBody);
    this.productionStrategy = productionStrategy;
  }

  /**
   * Constructs a <code>ProductionStrategiesProductionStrategyIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionStrategiesProductionStrategyIdBody} obj Optional instance to populate.
   * @return {module:model/ProductionStrategiesProductionStrategyIdBody} The populated <code>ProductionStrategiesProductionStrategyIdBody</code> instance.
   */
  _createClass(ProductionStrategiesProductionStrategyIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionStrategiesProductionStrategyIdBody();
        if (data.hasOwnProperty('production_strategy')) obj.productionStrategy = _ApiClient.ApiClient.convertToType(data['production_strategy'], Object);
      }
      return obj;
    }
  }]);
  return ProductionStrategiesProductionStrategyIdBody;
}();
/**
 * @member {Object} productionStrategy
 */
exports.ProductionStrategiesProductionStrategyIdBody = ProductionStrategiesProductionStrategyIdBody;
ProductionStrategiesProductionStrategyIdBody.prototype.productionStrategy = undefined;