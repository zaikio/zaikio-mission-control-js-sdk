"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedProductionStrategyCreate = void 0;
var _ApiClient = require("../ApiClient");
var _ImposingCreate = require("./ImposingCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExpandedProductionStrategyCreate model module.
 * @module model/ExpandedProductionStrategyCreate
 * @version 1.0.0
 */
var ExpandedProductionStrategyCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpandedProductionStrategyCreate</code>.
   * @alias module:model/ExpandedProductionStrategyCreate
   * @class
   */
  function ExpandedProductionStrategyCreate() {
    _classCallCheck(this, ExpandedProductionStrategyCreate);
  }

  /**
   * Constructs a <code>ExpandedProductionStrategyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpandedProductionStrategyCreate} obj Optional instance to populate.
   * @return {module:model/ExpandedProductionStrategyCreate} The populated <code>ExpandedProductionStrategyCreate</code> instance.
   */
  _createClass(ExpandedProductionStrategyCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpandedProductionStrategyCreate();
        if (data.hasOwnProperty('imposings')) obj.imposings = _ApiClient.ApiClient.convertToType(data['imposings'], [_ImposingCreate.ImposingCreate]);
      }
      return obj;
    }
  }]);
  return ExpandedProductionStrategyCreate;
}();
/**
 * @member {Array.<module:model/ImposingCreate>} imposings
 */
exports.ExpandedProductionStrategyCreate = ExpandedProductionStrategyCreate;
ExpandedProductionStrategyCreate.prototype.imposings = undefined;