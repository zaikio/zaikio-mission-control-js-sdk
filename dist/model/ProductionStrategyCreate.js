"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionStrategyCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionStrategyCreate model module.
 * @module model/ProductionStrategyCreate
 * @version 1.0.0
 */
var ProductionStrategyCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionStrategyCreate</code>.
   * @alias module:model/ProductionStrategyCreate
   * @class
   * @param jobId {String} The ID of the Job this ProductionStrategy belongs to
   * @param kind {module:model/ProductionStrategyCreate.KindEnum} What approach does this strategy optimize for
   */
  function ProductionStrategyCreate(jobId, kind) {
    _classCallCheck(this, ProductionStrategyCreate);
    this.jobId = jobId;
    this.kind = kind;
  }

  /**
   * Constructs a <code>ProductionStrategyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionStrategyCreate} obj Optional instance to populate.
   * @return {module:model/ProductionStrategyCreate} The populated <code>ProductionStrategyCreate</code> instance.
   */
  _createClass(ProductionStrategyCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionStrategyCreate();
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return ProductionStrategyCreate;
}();
/**
 * The ID of the Job this ProductionStrategy belongs to
 * @member {String} jobId
 */
exports.ProductionStrategyCreate = ProductionStrategyCreate;
ProductionStrategyCreate.prototype.jobId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ProductionStrategyCreate.StateEnum = {
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
 * @member {module:model/ProductionStrategyCreate.StateEnum} state
 */
ProductionStrategyCreate.prototype.state = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ProductionStrategyCreate.KindEnum = {
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
 * @member {module:model/ProductionStrategyCreate.KindEnum} kind
 */
ProductionStrategyCreate.prototype.kind = undefined;