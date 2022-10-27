"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfBatchSignatureLayout = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfBatchSignatureLayout model module.
 * @module model/OneOfBatchSignatureLayout
 * @version 1.0.0
 */
var OneOfBatchSignatureLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfBatchSignatureLayout</code>.
   * @alias module:model/OneOfBatchSignatureLayout
   * @class
   */
  function OneOfBatchSignatureLayout() {
    _classCallCheck(this, OneOfBatchSignatureLayout);
  }

  /**
   * Constructs a <code>OneOfBatchSignatureLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfBatchSignatureLayout} obj Optional instance to populate.
   * @return {module:model/OneOfBatchSignatureLayout} The populated <code>OneOfBatchSignatureLayout</code> instance.
   */
  _createClass(OneOfBatchSignatureLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfBatchSignatureLayout();
      }
      return obj;
    }
  }]);
  return OneOfBatchSignatureLayout;
}();
exports.OneOfBatchSignatureLayout = OneOfBatchSignatureLayout;