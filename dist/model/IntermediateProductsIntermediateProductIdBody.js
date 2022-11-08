"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntermediateProductsIntermediateProductIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _IntermediateProductUpdate = require("./IntermediateProductUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IntermediateProductsIntermediateProductIdBody model module.
 * @module model/IntermediateProductsIntermediateProductIdBody
 * @version 1.0.0
 */
var IntermediateProductsIntermediateProductIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntermediateProductsIntermediateProductIdBody</code>.
   * @alias module:model/IntermediateProductsIntermediateProductIdBody
   * @class
   * @param intermediateProduct {module:model/IntermediateProductUpdate} 
   */
  function IntermediateProductsIntermediateProductIdBody(intermediateProduct) {
    _classCallCheck(this, IntermediateProductsIntermediateProductIdBody);
    this.intermediateProduct = intermediateProduct;
  }

  /**
   * Constructs a <code>IntermediateProductsIntermediateProductIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntermediateProductsIntermediateProductIdBody} obj Optional instance to populate.
   * @return {module:model/IntermediateProductsIntermediateProductIdBody} The populated <code>IntermediateProductsIntermediateProductIdBody</code> instance.
   */
  _createClass(IntermediateProductsIntermediateProductIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntermediateProductsIntermediateProductIdBody();
        if (data.hasOwnProperty('intermediate_product')) obj.intermediateProduct = _IntermediateProductUpdate.IntermediateProductUpdate.constructFromObject(data['intermediate_product']);
      }
      return obj;
    }
  }]);
  return IntermediateProductsIntermediateProductIdBody;
}();
/**
 * @member {module:model/IntermediateProductUpdate} intermediateProduct
 */
exports.IntermediateProductsIntermediateProductIdBody = IntermediateProductsIntermediateProductIdBody;
IntermediateProductsIntermediateProductIdBody.prototype.intermediateProduct = undefined;