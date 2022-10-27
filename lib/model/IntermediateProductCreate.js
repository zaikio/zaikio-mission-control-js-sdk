"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntermediateProductCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IntermediateProductCreate model module.
 * @module model/IntermediateProductCreate
 * @version 1.0.0
 */
var IntermediateProductCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntermediateProductCreate</code>.
   * @alias module:model/IntermediateProductCreate
   * @class
   */
  function IntermediateProductCreate() {
    _classCallCheck(this, IntermediateProductCreate);
  }

  /**
   * Constructs a <code>IntermediateProductCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntermediateProductCreate} obj Optional instance to populate.
   * @return {module:model/IntermediateProductCreate} The populated <code>IntermediateProductCreate</code> instance.
   */
  _createClass(IntermediateProductCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntermediateProductCreate();
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('expected_quantity')) obj.expectedQuantity = _ApiClient.ApiClient.convertToType(data['expected_quantity'], 'Number');
        if (data.hasOwnProperty('actual_quantity')) obj.actualQuantity = _ApiClient.ApiClient.convertToType(data['actual_quantity'], 'Number');
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
  return IntermediateProductCreate;
}();
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
exports.IntermediateProductCreate = IntermediateProductCreate;
IntermediateProductCreate.KindEnum = {
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
 * @member {module:model/IntermediateProductCreate.KindEnum} kind
 */
IntermediateProductCreate.prototype.kind = undefined;

/**
 * The number of items of this that should be produced
 * @member {Number} expectedQuantity
 */
IntermediateProductCreate.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
IntermediateProductCreate.prototype.actualQuantity = undefined;

/**
 * How much waste is expected in the production of this
 * @member {Number} expectedWaste
 */
IntermediateProductCreate.prototype.expectedWaste = undefined;

/**
 * How much waste has been produced in the production of this
 * @member {Number} actualWaste
 */
IntermediateProductCreate.prototype.actualWaste = undefined;

/**
 * @member {String} jobId
 */
IntermediateProductCreate.prototype.jobId = undefined;

/**
 * The ID of the Workstep that creates this IntermediateProduct
 * @member {String} creatingWorkstepId
 */
IntermediateProductCreate.prototype.creatingWorkstepId = undefined;

/**
 * The ID of the Workstep that consumes this IntermediateProduct
 * @member {String} consumingWorkstepId
 */
IntermediateProductCreate.prototype.consumingWorkstepId = undefined;

/**
 * @member {Object} layout
 */
IntermediateProductCreate.prototype.layout = undefined;