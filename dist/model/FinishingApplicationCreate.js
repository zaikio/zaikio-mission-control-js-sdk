"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingApplicationCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingApplicationCreate model module.
 * @module model/FinishingApplicationCreate
 * @version 1.0.0
 */
var FinishingApplicationCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingApplicationCreate</code>.
   * @alias module:model/FinishingApplicationCreate
   * @class
   */
  function FinishingApplicationCreate() {
    _classCallCheck(this, FinishingApplicationCreate);
  }

  /**
   * Constructs a <code>FinishingApplicationCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingApplicationCreate} obj Optional instance to populate.
   * @return {module:model/FinishingApplicationCreate} The populated <code>FinishingApplicationCreate</code> instance.
   */
  _createClass(FinishingApplicationCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingApplicationCreate();
        if (data.hasOwnProperty('finishing_id')) obj.finishingId = _ApiClient.ApiClient.convertToType(data['finishing_id'], 'String');
        if (data.hasOwnProperty('part_id')) obj.partId = _ApiClient.ApiClient.convertToType(data['part_id'], 'String');
      }
      return obj;
    }
  }]);
  return FinishingApplicationCreate;
}();
/**
 * @member {String} finishingId
 */
exports.FinishingApplicationCreate = FinishingApplicationCreate;
FinishingApplicationCreate.prototype.finishingId = undefined;

/**
 * @member {String} partId
 */
FinishingApplicationCreate.prototype.partId = undefined;