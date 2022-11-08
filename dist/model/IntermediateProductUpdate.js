"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntermediateProductUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IntermediateProductUpdate model module.
 * @module model/IntermediateProductUpdate
 * @version 1.0.0
 */
var IntermediateProductUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntermediateProductUpdate</code>.
   * @alias module:model/IntermediateProductUpdate
   * @class
   */
  function IntermediateProductUpdate() {
    _classCallCheck(this, IntermediateProductUpdate);
  }

  /**
   * Constructs a <code>IntermediateProductUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntermediateProductUpdate} obj Optional instance to populate.
   * @return {module:model/IntermediateProductUpdate} The populated <code>IntermediateProductUpdate</code> instance.
   */
  _createClass(IntermediateProductUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntermediateProductUpdate();
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
  return IntermediateProductUpdate;
}();
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
exports.IntermediateProductUpdate = IntermediateProductUpdate;
IntermediateProductUpdate.KindEnum = {
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
 * @member {module:model/IntermediateProductUpdate.KindEnum} kind
 */
IntermediateProductUpdate.prototype.kind = undefined;

/**
 * The number of items of this that should be produced
 * @member {Number} expectedQuantity
 */
IntermediateProductUpdate.prototype.expectedQuantity = undefined;

/**
 * The number of items of this that have been produced so far
 * @member {Number} actualQuantity
 */
IntermediateProductUpdate.prototype.actualQuantity = undefined;

/**
 * How much waste is expected in the production of this
 * @member {Number} expectedWaste
 */
IntermediateProductUpdate.prototype.expectedWaste = undefined;

/**
 * How much waste has been produced in the production of this
 * @member {Number} actualWaste
 */
IntermediateProductUpdate.prototype.actualWaste = undefined;

/**
 * @member {String} jobId
 */
IntermediateProductUpdate.prototype.jobId = undefined;

/**
 * The ID of the Workstep that creates this IntermediateProduct
 * @member {String} creatingWorkstepId
 */
IntermediateProductUpdate.prototype.creatingWorkstepId = undefined;

/**
 * The ID of the Workstep that consumes this IntermediateProduct
 * @member {String} consumingWorkstepId
 */
IntermediateProductUpdate.prototype.consumingWorkstepId = undefined;

/**
 * @member {Object} layout
 */
IntermediateProductUpdate.prototype.layout = undefined;