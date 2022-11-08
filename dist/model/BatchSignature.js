"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchSignature = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchSignature model module.
 * @module model/BatchSignature
 * @version 1.0.0
 */
var BatchSignature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchSignature</code>.
   * @alias module:model/BatchSignature
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param layout {Object} 
   */
  function BatchSignature(id, createdAt, updatedAt, layout) {
    _classCallCheck(this, BatchSignature);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.layout = layout;
  }

  /**
   * Constructs a <code>BatchSignature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchSignature} obj Optional instance to populate.
   * @return {module:model/BatchSignature} The populated <code>BatchSignature</code> instance.
   */
  _createClass(BatchSignature, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchSignature();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return BatchSignature;
}();
/**
 * @member {String} id
 */
exports.BatchSignature = BatchSignature;
BatchSignature.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
BatchSignature.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
BatchSignature.prototype.updatedAt = undefined;

/**
 * @member {Object} layout
 */
BatchSignature.prototype.layout = undefined;

// Implement OneOfBatchBatchSignature interface: