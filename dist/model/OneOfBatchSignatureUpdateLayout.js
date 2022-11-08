"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfBatchSignatureUpdateLayout = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfBatchSignatureUpdateLayout model module.
 * @module model/OneOfBatchSignatureUpdateLayout
 * @version 1.0.0
 */
var OneOfBatchSignatureUpdateLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfBatchSignatureUpdateLayout</code>.
   * @alias module:model/OneOfBatchSignatureUpdateLayout
   * @class
   */
  function OneOfBatchSignatureUpdateLayout() {
    _classCallCheck(this, OneOfBatchSignatureUpdateLayout);
  }

  /**
   * Constructs a <code>OneOfBatchSignatureUpdateLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfBatchSignatureUpdateLayout} obj Optional instance to populate.
   * @return {module:model/OneOfBatchSignatureUpdateLayout} The populated <code>OneOfBatchSignatureUpdateLayout</code> instance.
   */
  _createClass(OneOfBatchSignatureUpdateLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfBatchSignatureUpdateLayout();
      }
      return obj;
    }
  }]);
  return OneOfBatchSignatureUpdateLayout;
}();
exports.OneOfBatchSignatureUpdateLayout = OneOfBatchSignatureUpdateLayout;