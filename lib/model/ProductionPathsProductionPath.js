"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionPathsProductionPath = void 0;
var _ApiClient = require("../ApiClient");
var _IntermediateProductCreate = require("./IntermediateProductCreate");
var _WorkstepCreate = require("./WorkstepCreate");
var _WorkstepGroupCreate = require("./WorkstepGroupCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionPathsProductionPath model module.
 * @module model/ProductionPathsProductionPath
 * @version 1.0.0
 */
var ProductionPathsProductionPath = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionPathsProductionPath</code>.
   * @alias module:model/ProductionPathsProductionPath
   * @class
   */
  function ProductionPathsProductionPath() {
    _classCallCheck(this, ProductionPathsProductionPath);
  }

  /**
   * Constructs a <code>ProductionPathsProductionPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionPathsProductionPath} obj Optional instance to populate.
   * @return {module:model/ProductionPathsProductionPath} The populated <code>ProductionPathsProductionPath</code> instance.
   */
  _createClass(ProductionPathsProductionPath, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionPathsProductionPath();
        if (data.hasOwnProperty('workstep_groups')) obj.workstepGroups = _ApiClient.ApiClient.convertToType(data['workstep_groups'], [_WorkstepGroupCreate.WorkstepGroupCreate]);
        if (data.hasOwnProperty('worksteps')) obj.worksteps = _ApiClient.ApiClient.convertToType(data['worksteps'], [_WorkstepCreate.WorkstepCreate]);
        if (data.hasOwnProperty('intermediate_products')) obj.intermediateProducts = _ApiClient.ApiClient.convertToType(data['intermediate_products'], [_IntermediateProductCreate.IntermediateProductCreate]);
        if (data.hasOwnProperty('finished_product')) obj.finishedProduct = _ApiClient.ApiClient.convertToType(data['finished_product'], Object);
      }
      return obj;
    }
  }]);
  return ProductionPathsProductionPath;
}();
/**
 * @member {Array.<module:model/WorkstepGroupCreate>} workstepGroups
 */
exports.ProductionPathsProductionPath = ProductionPathsProductionPath;
ProductionPathsProductionPath.prototype.workstepGroups = undefined;

/**
 * @member {Array.<module:model/WorkstepCreate>} worksteps
 */
ProductionPathsProductionPath.prototype.worksteps = undefined;

/**
 * @member {Array.<module:model/IntermediateProductCreate>} intermediateProducts
 */
ProductionPathsProductionPath.prototype.intermediateProducts = undefined;

/**
 * @member {Object} finishedProduct
 */
ProductionPathsProductionPath.prototype.finishedProduct = undefined;