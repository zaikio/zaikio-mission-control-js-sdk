"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfExpandedOrderUpdateCustomer = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfExpandedOrderUpdateCustomer model module.
 * @module model/OneOfExpandedOrderUpdateCustomer
 * @version 1.0.0
 */
var OneOfExpandedOrderUpdateCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfExpandedOrderUpdateCustomer</code>.
   * @alias module:model/OneOfExpandedOrderUpdateCustomer
   * @class
   */
  function OneOfExpandedOrderUpdateCustomer() {
    _classCallCheck(this, OneOfExpandedOrderUpdateCustomer);
  }

  /**
   * Constructs a <code>OneOfExpandedOrderUpdateCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfExpandedOrderUpdateCustomer} obj Optional instance to populate.
   * @return {module:model/OneOfExpandedOrderUpdateCustomer} The populated <code>OneOfExpandedOrderUpdateCustomer</code> instance.
   */
  _createClass(OneOfExpandedOrderUpdateCustomer, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfExpandedOrderUpdateCustomer();
      }
      return obj;
    }
  }]);
  return OneOfExpandedOrderUpdateCustomer;
}();
exports.OneOfExpandedOrderUpdateCustomer = OneOfExpandedOrderUpdateCustomer;