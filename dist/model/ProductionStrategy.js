"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionStrategy = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionStrategy model module.
 * @module model/ProductionStrategy
 * @version 1.0.0
 */
var ProductionStrategy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionStrategy</code>.
   * @alias module:model/ProductionStrategy
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param jobId {String} The ID of the Job this ProductionStrateg belongs to
   * @param state {module:model/ProductionStrategy.StateEnum} What is the status of this strategy
   * @param kind {module:model/ProductionStrategy.KindEnum} What approach does this strategy optimize for
   * @param canceledAt {Date} When this strategy was cancelled, if in canceled state
   */
  function ProductionStrategy(id, createdAt, updatedAt, jobId, state, kind, canceledAt) {
    _classCallCheck(this, ProductionStrategy);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.jobId = jobId;
    this.state = state;
    this.kind = kind;
    this.canceledAt = canceledAt;
  }

  /**
   * Constructs a <code>ProductionStrategy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionStrategy} obj Optional instance to populate.
   * @return {module:model/ProductionStrategy} The populated <code>ProductionStrategy</code> instance.
   */
  _createClass(ProductionStrategy, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionStrategy();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('canceled_at')) obj.canceledAt = _ApiClient.ApiClient.convertToType(data['canceled_at'], 'Date');
      }
      return obj;
    }
  }]);
  return ProductionStrategy;
}();
/**
 * @member {String} id
 */
exports.ProductionStrategy = ProductionStrategy;
ProductionStrategy.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
ProductionStrategy.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
ProductionStrategy.prototype.updatedAt = undefined;

/**
 * The ID of the Job this ProductionStrateg belongs to
 * @member {String} jobId
 */
ProductionStrategy.prototype.jobId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ProductionStrategy.StateEnum = {
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
 * @member {module:model/ProductionStrategy.StateEnum} state
 */
ProductionStrategy.prototype.state = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ProductionStrategy.KindEnum = {
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
 * @member {module:model/ProductionStrategy.KindEnum} kind
 */
ProductionStrategy.prototype.kind = undefined;

/**
 * When this strategy was cancelled, if in canceled state
 * @member {Date} canceledAt
 */
ProductionStrategy.prototype.canceledAt = undefined;