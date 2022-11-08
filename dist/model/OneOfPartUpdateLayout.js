"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfPartUpdateLayout = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfPartUpdateLayout model module.
 * @module model/OneOfPartUpdateLayout
 * @version 1.0.0
 */
var OneOfPartUpdateLayout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfPartUpdateLayout</code>.
   * @alias module:model/OneOfPartUpdateLayout
   * @class
   */
  function OneOfPartUpdateLayout() {
    _classCallCheck(this, OneOfPartUpdateLayout);
  }

  /**
   * Constructs a <code>OneOfPartUpdateLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfPartUpdateLayout} obj Optional instance to populate.
   * @return {module:model/OneOfPartUpdateLayout} The populated <code>OneOfPartUpdateLayout</code> instance.
   */
  _createClass(OneOfPartUpdateLayout, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfPartUpdateLayout();
      }
      return obj;
    }
  }]);
  return OneOfPartUpdateLayout;
}();
exports.OneOfPartUpdateLayout = OneOfPartUpdateLayout;