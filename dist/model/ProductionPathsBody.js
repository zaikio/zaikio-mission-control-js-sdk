"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionPathsBody = void 0;
var _ApiClient = require("../ApiClient");
var _ProductionPathsProductionPath = require("./ProductionPathsProductionPath");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionPathsBody model module.
 * @module model/ProductionPathsBody
 * @version 1.0.0
 */
var ProductionPathsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionPathsBody</code>.
   * @alias module:model/ProductionPathsBody
   * @class
   * @param productionPath {module:model/ProductionPathsProductionPath} 
   */
  function ProductionPathsBody(productionPath) {
    _classCallCheck(this, ProductionPathsBody);
    this.productionPath = productionPath;
  }

  /**
   * Constructs a <code>ProductionPathsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionPathsBody} obj Optional instance to populate.
   * @return {module:model/ProductionPathsBody} The populated <code>ProductionPathsBody</code> instance.
   */
  _createClass(ProductionPathsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionPathsBody();
        if (data.hasOwnProperty('production_path')) obj.productionPath = _ProductionPathsProductionPath.ProductionPathsProductionPath.constructFromObject(data['production_path']);
      }
      return obj;
    }
  }]);
  return ProductionPathsBody;
}();
/**
 * @member {module:model/ProductionPathsProductionPath} productionPath
 */
exports.ProductionPathsBody = ProductionPathsBody;
ProductionPathsBody.prototype.productionPath = undefined;