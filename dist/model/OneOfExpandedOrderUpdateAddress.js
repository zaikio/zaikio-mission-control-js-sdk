"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfExpandedOrderUpdateAddress = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfExpandedOrderUpdateAddress model module.
 * @module model/OneOfExpandedOrderUpdateAddress
 * @version 1.0.0
 */
var OneOfExpandedOrderUpdateAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfExpandedOrderUpdateAddress</code>.
   * @alias module:model/OneOfExpandedOrderUpdateAddress
   * @class
   */
  function OneOfExpandedOrderUpdateAddress() {
    _classCallCheck(this, OneOfExpandedOrderUpdateAddress);
  }

  /**
   * Constructs a <code>OneOfExpandedOrderUpdateAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfExpandedOrderUpdateAddress} obj Optional instance to populate.
   * @return {module:model/OneOfExpandedOrderUpdateAddress} The populated <code>OneOfExpandedOrderUpdateAddress</code> instance.
   */
  _createClass(OneOfExpandedOrderUpdateAddress, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfExpandedOrderUpdateAddress();
      }
      return obj;
    }
  }]);
  return OneOfExpandedOrderUpdateAddress;
}();
exports.OneOfExpandedOrderUpdateAddress = OneOfExpandedOrderUpdateAddress;