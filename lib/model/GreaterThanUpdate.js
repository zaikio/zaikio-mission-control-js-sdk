"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GreaterThanUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The GreaterThanUpdate model module.
 * @module model/GreaterThanUpdate
 * @version 1.0.0
 */
var GreaterThanUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GreaterThanUpdate</code>.
   * @alias module:model/GreaterThanUpdate
   * @class
   */
  function GreaterThanUpdate() {
    _classCallCheck(this, GreaterThanUpdate);
  }

  /**
   * Constructs a <code>GreaterThanUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GreaterThanUpdate} obj Optional instance to populate.
   * @return {module:model/GreaterThanUpdate} The populated <code>GreaterThanUpdate</code> instance.
   */
  _createClass(GreaterThanUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GreaterThanUpdate();
      }
      return obj;
    }
  }]);
  return GreaterThanUpdate;
}(); // Implement RuleUpdate interface:
exports.GreaterThanUpdate = GreaterThanUpdate;