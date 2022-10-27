"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfinlineResponse201FinishedProduct = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfinlineResponse201FinishedProduct model module.
 * @module model/OneOfinlineResponse201FinishedProduct
 * @version 1.0.0
 */
var OneOfinlineResponse201FinishedProduct = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfinlineResponse201FinishedProduct</code>.
   * @alias module:model/OneOfinlineResponse201FinishedProduct
   * @class
   */
  function OneOfinlineResponse201FinishedProduct() {
    _classCallCheck(this, OneOfinlineResponse201FinishedProduct);
  }

  /**
   * Constructs a <code>OneOfinlineResponse201FinishedProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfinlineResponse201FinishedProduct} obj Optional instance to populate.
   * @return {module:model/OneOfinlineResponse201FinishedProduct} The populated <code>OneOfinlineResponse201FinishedProduct</code> instance.
   */
  _createClass(OneOfinlineResponse201FinishedProduct, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfinlineResponse201FinishedProduct();
      }
      return obj;
    }
  }]);
  return OneOfinlineResponse201FinishedProduct;
}();
exports.OneOfinlineResponse201FinishedProduct = OneOfinlineResponse201FinishedProduct;