"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionStrategyIdImposingsBody = void 0;
var _ApiClient = require("../ApiClient");
var _ImposingCreate = require("./ImposingCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProductionStrategyIdImposingsBody model module.
 * @module model/ProductionStrategyIdImposingsBody
 * @version 1.0.0
 */
var ProductionStrategyIdImposingsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductionStrategyIdImposingsBody</code>.
   * @alias module:model/ProductionStrategyIdImposingsBody
   * @class
   * @param imposing {module:model/ImposingCreate} 
   */
  function ProductionStrategyIdImposingsBody(imposing) {
    _classCallCheck(this, ProductionStrategyIdImposingsBody);
    this.imposing = imposing;
  }

  /**
   * Constructs a <code>ProductionStrategyIdImposingsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionStrategyIdImposingsBody} obj Optional instance to populate.
   * @return {module:model/ProductionStrategyIdImposingsBody} The populated <code>ProductionStrategyIdImposingsBody</code> instance.
   */
  _createClass(ProductionStrategyIdImposingsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductionStrategyIdImposingsBody();
        if (data.hasOwnProperty('imposing')) obj.imposing = _ImposingCreate.ImposingCreate.constructFromObject(data['imposing']);
      }
      return obj;
    }
  }]);
  return ProductionStrategyIdImposingsBody;
}();
/**
 * @member {module:model/ImposingCreate} imposing
 */
exports.ProductionStrategyIdImposingsBody = ProductionStrategyIdImposingsBody;
ProductionStrategyIdImposingsBody.prototype.imposing = undefined;