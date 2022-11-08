"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedProductionStrategyUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _ImposingUpdate = require("./ImposingUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedProductionStrategyUpdate model module.
 * @module model/ExpandedProductionStrategyUpdate
 * @version 1.0.0
 */
var ExpandedProductionStrategyUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedProductionStrategyUpdate</code>.
   * @alias module:model/ExpandedProductionStrategyUpdate
   * @class
   */
  function ExpandedProductionStrategyUpdate() {
    _classCallCheck(this, ExpandedProductionStrategyUpdate);
  }

  /**
   * Constructs a <code>ExpandedProductionStrategyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedProductionStrategyUpdate} obj Optional instance to populate.
   * @return {module:model/ExpandedProductionStrategyUpdate} The populated <code>ExpandedProductionStrategyUpdate</code> instance.
   */
  _createClass(ExpandedProductionStrategyUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedProductionStrategyUpdate();
        if (data.hasOwnProperty('imposings')) obj.imposings = _ApiClient.ApiClient.convertToType(data['imposings'], [_ImposingUpdate.ImposingUpdate]);
      }
      return obj;
    }
  }]);
  return ExpandedProductionStrategyUpdate;
}();
/**
 * @member {Array.<module:model/ImposingUpdate>} imposings
 */
exports.ExpandedProductionStrategyUpdate = ExpandedProductionStrategyUpdate;
ExpandedProductionStrategyUpdate.prototype.imposings = undefined;