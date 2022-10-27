"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingCreate model module.
 * @module model/FinishingCreate
 * @version 1.0.0
 */
var FinishingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingCreate</code>.
   * @alias module:model/FinishingCreate
   * @class
   */
  function FinishingCreate() {
    _classCallCheck(this, FinishingCreate);
  }

  /**
   * Constructs a <code>FinishingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingCreate} obj Optional instance to populate.
   * @return {module:model/FinishingCreate} The populated <code>FinishingCreate</code> instance.
   */
  _createClass(FinishingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingCreate();
      }
      return obj;
    }
  }]);
  return FinishingCreate;
}();
exports.FinishingCreate = FinishingCreate;