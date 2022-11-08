"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingApplication = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingApplication model module.
 * @module model/FinishingApplication
 * @version 1.0.0
 */
var FinishingApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingApplication</code>.
   * @alias module:model/FinishingApplication
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param finishingId {String} 
   * @param partId {String} 
   */
  function FinishingApplication(id, createdAt, updatedAt, finishingId, partId) {
    _classCallCheck(this, FinishingApplication);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.finishingId = finishingId;
    this.partId = partId;
  }

  /**
   * Constructs a <code>FinishingApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingApplication} obj Optional instance to populate.
   * @return {module:model/FinishingApplication} The populated <code>FinishingApplication</code> instance.
   */
  _createClass(FinishingApplication, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingApplication();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('finishing_id')) obj.finishingId = _ApiClient.ApiClient.convertToType(data['finishing_id'], 'String');
        if (data.hasOwnProperty('part_id')) obj.partId = _ApiClient.ApiClient.convertToType(data['part_id'], 'String');
      }
      return obj;
    }
  }]);
  return FinishingApplication;
}();
/**
 * @member {String} id
 */
exports.FinishingApplication = FinishingApplication;
FinishingApplication.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
FinishingApplication.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
FinishingApplication.prototype.updatedAt = undefined;

/**
 * @member {String} finishingId
 */
FinishingApplication.prototype.finishingId = undefined;

/**
 * @member {String} partId
 */
FinishingApplication.prototype.partId = undefined;