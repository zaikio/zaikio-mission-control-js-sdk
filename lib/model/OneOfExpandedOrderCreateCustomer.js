"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfExpandedOrderCreateCustomer = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfExpandedOrderCreateCustomer model module.
 * @module model/OneOfExpandedOrderCreateCustomer
 * @version 1.0.0
 */
var OneOfExpandedOrderCreateCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfExpandedOrderCreateCustomer</code>.
   * @alias module:model/OneOfExpandedOrderCreateCustomer
   * @class
   */
  function OneOfExpandedOrderCreateCustomer() {
    _classCallCheck(this, OneOfExpandedOrderCreateCustomer);
  }

  /**
   * Constructs a <code>OneOfExpandedOrderCreateCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfExpandedOrderCreateCustomer} obj Optional instance to populate.
   * @return {module:model/OneOfExpandedOrderCreateCustomer} The populated <code>OneOfExpandedOrderCreateCustomer</code> instance.
   */
  _createClass(OneOfExpandedOrderCreateCustomer, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfExpandedOrderCreateCustomer();
      }
      return obj;
    }
  }]);
  return OneOfExpandedOrderCreateCustomer;
}();
exports.OneOfExpandedOrderCreateCustomer = OneOfExpandedOrderCreateCustomer;