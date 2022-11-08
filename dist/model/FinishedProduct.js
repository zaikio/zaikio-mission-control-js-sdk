"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishedProduct = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishedProduct model module.
 * @module model/FinishedProduct
 * @version 1.0.0
 */
var FinishedProduct = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishedProduct</code>.
   * A FinishedProduct represents the final destination of the production path. It serves as a marker of the completion of the manufacturing steps, and holds the progress information of how much has been completed.
   * @alias module:model/FinishedProduct
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param expectedQuantity {Number} The number of items of this that should be produced, inferred from Job.quantity if not provided
   * @param actualQuantity {Number} The number of items of this that have been produced so far
   * @param completionPercentage {String} The current completion percentage of the expected quantity to be produced
   * @param jobId {String} 
   * @param creatingWorkstepId {String} The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path.
   */
  function FinishedProduct(id, createdAt, updatedAt, expectedQuantity, actualQuantity, completionPercentage, jobId, creatingWorkstepId) {
    _classCallCheck(this, FinishedProduct);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expectedQuantity = expectedQuantity;
    this.actualQuantity = actualQuantity;
    this.completionPercentage = completionPercentage;
    this.jobId = jobId;
    this.creatingWorkstepId = creatingWorkstepId;
  }

  /**
   * Constructs a <code>FinishedProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishedProduct} obj Optional instance to populate.
   * @return {module:model/FinishedProduct} The populated <code>FinishedProduct</code> instance.
   */
  _createClass(FinishedProduct, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishedProduct();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('expected_quantity')) obj.expectedQuantity = _ApiClient.ApiClient.convertToType(data['expected_quantity'], 'Number');
        if (data.hasOwnProperty('actual_quantity')) obj.actualQuantity = _ApiClient.ApiClient.convertToType(data['actual_quantity'], 'Number');
        if (data.hasOwnProperty('completion_percentage')) obj.completionPercentage = _ApiClient.ApiClient.convertToType(data['completion_percentage'], 'String');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('creating_workstep_id')) obj.creatingWorkstepId = _ApiClient.ApiClient.convertToType(data['creating_workstep_id'], 'String');
      }
      return obj;
    }
  }]);
  return FinishedProduct;
}();
/**
 * @member {String} id
 */
exports.FinishedProduct = FinishedProduct;
FinishedProduct.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FinishedProduct.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FinishedProduct.prototype.updatedAt = undefined;

/**
 * The number of items of this that should be produced, inferred from Job.quantity if not provided
 * @member {Number} expectedQuantity
 */
FinishedProduct.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
FinishedProduct.prototype.actualQuantity = undefined;

/**
 * The current completion percentage of the expected quantity to be produced
 * @member {String} completionPercentage
 */
FinishedProduct.prototype.completionPercentage = undefined;

/**
 * @member {String} jobId
 */
FinishedProduct.prototype.jobId = undefined;

/**
 * The ID of the Workstep that will create this FinishedProduct. This Workstep cannot generate any IntermediateProducts, it must be a single node at the end of the path.
 * @member {String} creatingWorkstepId
 */
FinishedProduct.prototype.creatingWorkstepId = undefined;

// Implement OneOfinlineResponse201FinishedProduct interface: