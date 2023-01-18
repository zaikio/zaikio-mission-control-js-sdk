"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionStrategyUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionStrategyUpdate model module.
 * @module model/ProductionStrategyUpdate
 * @version 1.0.0
 */
var ProductionStrategyUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionStrategyUpdate</code>.
   * @alias module:model/ProductionStrategyUpdate
   * @class
   */
  function ProductionStrategyUpdate() {
    _classCallCheck(this, ProductionStrategyUpdate);
  }

  /**
   * Constructs a <code>ProductionStrategyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionStrategyUpdate} obj Optional instance to populate.
   * @return {module:model/ProductionStrategyUpdate} The populated <code>ProductionStrategyUpdate</code> instance.
   */
  _createClass(ProductionStrategyUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionStrategyUpdate();
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return ProductionStrategyUpdate;
}();
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
exports.ProductionStrategyUpdate = ProductionStrategyUpdate;
ProductionStrategyUpdate.StateEnum = {
  /**
   * value: "draft"
   * @const
   */
  draft: "draft",
  /**
   * value: "approved"
   * @const
   */
  approved: "approved",
  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled"
};
/**
 * What is the status of this strategy
 * @member {module:model/ProductionStrategyUpdate.StateEnum} state
 */
ProductionStrategyUpdate.prototype.state = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ProductionStrategyUpdate.KindEnum = {
  /**
   * value: "earliest"
   * @const
   */
  earliest: "earliest",
  /**
   * value: "quickest"
   * @const
   */
  quickest: "quickest",
  /**
   * value: "cheapest"
   * @const
   */
  cheapest: "cheapest"
};
/**
 * What approach does this strategy optimize for
 * @member {module:model/ProductionStrategyUpdate.KindEnum} kind
 */
ProductionStrategyUpdate.prototype.kind = undefined;