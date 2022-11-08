"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingApplicationUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingApplicationUpdate model module.
 * @module model/FinishingApplicationUpdate
 * @version 1.0.0
 */
var FinishingApplicationUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingApplicationUpdate</code>.
   * @alias module:model/FinishingApplicationUpdate
   * @class
   */
  function FinishingApplicationUpdate() {
    _classCallCheck(this, FinishingApplicationUpdate);
  }

  /**
   * Constructs a <code>FinishingApplicationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingApplicationUpdate} obj Optional instance to populate.
   * @return {module:model/FinishingApplicationUpdate} The populated <code>FinishingApplicationUpdate</code> instance.
   */
  _createClass(FinishingApplicationUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingApplicationUpdate();
        if (data.hasOwnProperty('finishing_id')) obj.finishingId = _ApiClient.ApiClient.convertToType(data['finishing_id'], 'String');
        if (data.hasOwnProperty('part_id')) obj.partId = _ApiClient.ApiClient.convertToType(data['part_id'], 'String');
      }
      return obj;
    }
  }]);
  return FinishingApplicationUpdate;
}();
/**
 * @member {String} finishingId
 */
exports.FinishingApplicationUpdate = FinishingApplicationUpdate;
FinishingApplicationUpdate.prototype.finishingId = undefined;

/**
 * @member {String} partId
 */
FinishingApplicationUpdate.prototype.partId = undefined;