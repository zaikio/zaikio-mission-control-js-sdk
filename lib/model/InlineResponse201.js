"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse201 = void 0;
var _ApiClient = require("../ApiClient");
var _IntermediateProduct = require("./IntermediateProduct");
var _Workstep = require("./Workstep");
var _WorkstepGroup = require("./WorkstepGroup");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse201 model module.
 * @module model/InlineResponse201
 * @version 1.0.0
 */
var InlineResponse201 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   * @param workstepGroups {Array.<module:model/WorkstepGroup>} 
   * @param worksteps {Array.<module:model/Workstep>} 
   * @param intermediateProducts {Array.<module:model/IntermediateProduct>} 
   * @param finishedProduct {Object} 
   */
  function InlineResponse201(workstepGroups, worksteps, intermediateProducts, finishedProduct) {
    _classCallCheck(this, InlineResponse201);
    this.workstepGroups = workstepGroups;
    this.worksteps = worksteps;
    this.intermediateProducts = intermediateProducts;
    this.finishedProduct = finishedProduct;
  }

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  _createClass(InlineResponse201, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse201();
        if (data.hasOwnProperty('workstep_groups')) obj.workstepGroups = _ApiClient.ApiClient.convertToType(data['workstep_groups'], [_WorkstepGroup.WorkstepGroup]);
        if (data.hasOwnProperty('worksteps')) obj.worksteps = _ApiClient.ApiClient.convertToType(data['worksteps'], [_Workstep.Workstep]);
        if (data.hasOwnProperty('intermediate_products')) obj.intermediateProducts = _ApiClient.ApiClient.convertToType(data['intermediate_products'], [_IntermediateProduct.IntermediateProduct]);
        if (data.hasOwnProperty('finished_product')) obj.finishedProduct = _ApiClient.ApiClient.convertToType(data['finished_product'], Object);
      }
      return obj;
    }
  }]);
  return InlineResponse201;
}();
/**
 * @member {Array.<module:model/WorkstepGroup>} workstepGroups
 */
exports.InlineResponse201 = InlineResponse201;
InlineResponse201.prototype.workstepGroups = undefined;

/**
 * @member {Array.<module:model/Workstep>} worksteps
 */
InlineResponse201.prototype.worksteps = undefined;

/**
 * @member {Array.<module:model/IntermediateProduct>} intermediateProducts
 */
InlineResponse201.prototype.intermediateProducts = undefined;

/**
 * @member {Object} finishedProduct
 */
InlineResponse201.prototype.finishedProduct = undefined;