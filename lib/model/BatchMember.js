"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchMember = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchMember model module.
 * @module model/BatchMember
 * @version 1.0.0
 */
var BatchMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchMember</code>.
   * A BatchMember represents the status of a Signature within a Batch.
   * @alias module:model/BatchMember
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param batchId {String} 
   * @param signatureId {String} 
   * @param state {module:model/BatchMember.StateEnum} Some signatures that have been added to batches can be rejected by planning software due to a number of reasons - incompatible substrates,
   */
  function BatchMember(id, createdAt, updatedAt, batchId, signatureId, state) {
    _classCallCheck(this, BatchMember);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.batchId = batchId;
    this.signatureId = signatureId;
    this.state = state;
  }

  /**
   * Constructs a <code>BatchMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchMember} obj Optional instance to populate.
   * @return {module:model/BatchMember} The populated <code>BatchMember</code> instance.
   */
  _createClass(BatchMember, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchMember();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('batch_id')) obj.batchId = _ApiClient.ApiClient.convertToType(data['batch_id'], 'String');
        if (data.hasOwnProperty('signature_id')) obj.signatureId = _ApiClient.ApiClient.convertToType(data['signature_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
      }
      return obj;
    }
  }]);
  return BatchMember;
}();
/**
 * @member {String} id
 */
exports.BatchMember = BatchMember;
BatchMember.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
BatchMember.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
BatchMember.prototype.updatedAt = undefined;

/**
 * @member {String} batchId
 */
BatchMember.prototype.batchId = undefined;

/**
 * @member {String} signatureId
 */
BatchMember.prototype.signatureId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
BatchMember.StateEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",
  /**
   * value: "included"
   * @const
   */
  included: "included",
  /**
   * value: "excluded"
   * @const
   */
  excluded: "excluded"
};
/**
 * Some signatures that have been added to batches can be rejected by planning software due to a number of reasons - incompatible substrates,
 * @member {module:model/BatchMember.StateEnum} state
 */
BatchMember.prototype.state = undefined;