"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchMemberUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchMemberUpdate model module.
 * @module model/BatchMemberUpdate
 * @version 1.0.0
 */
var BatchMemberUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchMemberUpdate</code>.
   * A BatchMember represents the status of a Signature within a Batch.
   * @alias module:model/BatchMemberUpdate
   * @class
   */
  function BatchMemberUpdate() {
    _classCallCheck(this, BatchMemberUpdate);
  }

  /**
   * Constructs a <code>BatchMemberUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchMemberUpdate} obj Optional instance to populate.
   * @return {module:model/BatchMemberUpdate} The populated <code>BatchMemberUpdate</code> instance.
   */
  _createClass(BatchMemberUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchMemberUpdate();
        if (data.hasOwnProperty('batch_id')) obj.batchId = _ApiClient.ApiClient.convertToType(data['batch_id'], 'String');
        if (data.hasOwnProperty('signature_id')) obj.signatureId = _ApiClient.ApiClient.convertToType(data['signature_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
      }
      return obj;
    }
  }]);
  return BatchMemberUpdate;
}();
/**
 * @member {String} batchId
 */
exports.BatchMemberUpdate = BatchMemberUpdate;
BatchMemberUpdate.prototype.batchId = undefined;

/**
 * @member {String} signatureId
 */
BatchMemberUpdate.prototype.signatureId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
BatchMemberUpdate.StateEnum = {
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
 * @member {module:model/BatchMemberUpdate.StateEnum} state
 */
BatchMemberUpdate.prototype.state = undefined;