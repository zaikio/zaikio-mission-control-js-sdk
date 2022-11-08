"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntermediateProduct = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IntermediateProduct model module.
 * @module model/IntermediateProduct
 * @version 1.0.0
 */
var IntermediateProduct = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntermediateProduct</code>.
   * @alias module:model/IntermediateProduct
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/IntermediateProduct.KindEnum} 
   * @param expectedQuantity {Number} The number of items of this that should be produced
   * @param actualQuantity {Number} The number of items of this that have been produced so far
   * @param completionPercentage {String} The current completion percentage of the expected quantity to be produced
   * @param consumptionPercentage {String} The current consumption percentage of produced quantities being used by downstream Worksteps
   * @param suspiciousQuantities {Boolean} Do current quantities suggest that an imbalance has occured around this IntermediateProduct. Examples would include - more having been consumed than have been reported produced, or more being produced than were expected.
   * @param expectedWaste {Number} How much waste is expected in the production of this
   * @param actualWaste {Number} How much waste has been produced in the production of this
   * @param jobId {String} 
   * @param creatingWorkstepId {String} The ID of the Workstep that creates this IntermediateProduct
   * @param consumingWorkstepId {String} The ID of the Workstep that consumes this IntermediateProduct
   * @param layout {Object} 
   */
  function IntermediateProduct(id, createdAt, updatedAt, kind, expectedQuantity, actualQuantity, completionPercentage, consumptionPercentage, suspiciousQuantities, expectedWaste, actualWaste, jobId, creatingWorkstepId, consumingWorkstepId, layout) {
    _classCallCheck(this, IntermediateProduct);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
    this.expectedQuantity = expectedQuantity;
    this.actualQuantity = actualQuantity;
    this.completionPercentage = completionPercentage;
    this.consumptionPercentage = consumptionPercentage;
    this.suspiciousQuantities = suspiciousQuantities;
    this.expectedWaste = expectedWaste;
    this.actualWaste = actualWaste;
    this.jobId = jobId;
    this.creatingWorkstepId = creatingWorkstepId;
    this.consumingWorkstepId = consumingWorkstepId;
    this.layout = layout;
  }

  /**
   * Constructs a <code>IntermediateProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntermediateProduct} obj Optional instance to populate.
   * @return {module:model/IntermediateProduct} The populated <code>IntermediateProduct</code> instance.
   */
  _createClass(IntermediateProduct, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntermediateProduct();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('expected_quantity')) obj.expectedQuantity = _ApiClient.ApiClient.convertToType(data['expected_quantity'], 'Number');
        if (data.hasOwnProperty('actual_quantity')) obj.actualQuantity = _ApiClient.ApiClient.convertToType(data['actual_quantity'], 'Number');
        if (data.hasOwnProperty('completion_percentage')) obj.completionPercentage = _ApiClient.ApiClient.convertToType(data['completion_percentage'], 'String');
        if (data.hasOwnProperty('consumption_percentage')) obj.consumptionPercentage = _ApiClient.ApiClient.convertToType(data['consumption_percentage'], 'String');
        if (data.hasOwnProperty('suspicious_quantities')) obj.suspiciousQuantities = _ApiClient.ApiClient.convertToType(data['suspicious_quantities'], 'Boolean');
        if (data.hasOwnProperty('expected_waste')) obj.expectedWaste = _ApiClient.ApiClient.convertToType(data['expected_waste'], 'Number');
        if (data.hasOwnProperty('actual_waste')) obj.actualWaste = _ApiClient.ApiClient.convertToType(data['actual_waste'], 'Number');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('creating_workstep_id')) obj.creatingWorkstepId = _ApiClient.ApiClient.convertToType(data['creating_workstep_id'], 'String');
        if (data.hasOwnProperty('consuming_workstep_id')) obj.consumingWorkstepId = _ApiClient.ApiClient.convertToType(data['consuming_workstep_id'], 'String');
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return IntermediateProduct;
}();
/**
 * @member {String} id
 */
exports.IntermediateProduct = IntermediateProduct;
IntermediateProduct.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
IntermediateProduct.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
IntermediateProduct.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
IntermediateProduct.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet",
  /**
   * value: "roll"
   * @const
   */
  roll: "roll",
  /**
   * value: "fold"
   * @const
   */
  fold: "fold",
  /**
   * value: "book_block"
   * @const
   */
  bookBlock: "book_block"
};
/**
 * @member {module:model/IntermediateProduct.KindEnum} kind
 */
IntermediateProduct.prototype.kind = undefined;

/**
 * The number of items of this that should be produced
 * @member {Number} expectedQuantity
 */
IntermediateProduct.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
IntermediateProduct.prototype.actualQuantity = undefined;

/**
 * The current completion percentage of the expected quantity to be produced
 * @member {String} completionPercentage
 */
IntermediateProduct.prototype.completionPercentage = undefined;

/**
 * The current consumption percentage of produced quantities being used by downstream Worksteps
 * @member {String} consumptionPercentage
 */
IntermediateProduct.prototype.consumptionPercentage = undefined;

/**
 * Do current quantities suggest that an imbalance has occured around this IntermediateProduct. Examples would include - more having been consumed than have been reported produced, or more being produced than were expected.
 * @member {Boolean} suspiciousQuantities
 */
IntermediateProduct.prototype.suspiciousQuantities = undefined;

/**
 * How much waste is expected in the production of this
 * @member {Number} expectedWaste
 */
IntermediateProduct.prototype.expectedWaste = undefined;

/**
 * How much waste has been produced in the production of this
 * @member {Number} actualWaste
 */
IntermediateProduct.prototype.actualWaste = undefined;

/**
 * @member {String} jobId
 */
IntermediateProduct.prototype.jobId = undefined;

/**
 * The ID of the Workstep that creates this IntermediateProduct
 * @member {String} creatingWorkstepId
 */
IntermediateProduct.prototype.creatingWorkstepId = undefined;

/**
 * The ID of the Workstep that consumes this IntermediateProduct
 * @member {String} consumingWorkstepId
 */
IntermediateProduct.prototype.consumingWorkstepId = undefined;

/**
 * @member {Object} layout
 */
IntermediateProduct.prototype.layout = undefined;