"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchMemberCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchMemberCreate model module.
 * @module model/BatchMemberCreate
 * @version 1.0.0
 */
var BatchMemberCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchMemberCreate</code>.
   * A BatchMember represents the status of a Signature within a Batch.
   * @alias module:model/BatchMemberCreate
   * @class
   */
  function BatchMemberCreate() {
    _classCallCheck(this, BatchMemberCreate);
  }

  /**
   * Constructs a <code>BatchMemberCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchMemberCreate} obj Optional instance to populate.
   * @return {module:model/BatchMemberCreate} The populated <code>BatchMemberCreate</code> instance.
   */
  _createClass(BatchMemberCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchMemberCreate();
        if (data.hasOwnProperty('batch_id')) obj.batchId = _ApiClient.ApiClient.convertToType(data['batch_id'], 'String');
        if (data.hasOwnProperty('signature_id')) obj.signatureId = _ApiClient.ApiClient.convertToType(data['signature_id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
      }
      return obj;
    }
  }]);
  return BatchMemberCreate;
}();
/**
 * @member {String} batchId
 */
exports.BatchMemberCreate = BatchMemberCreate;
BatchMemberCreate.prototype.batchId = undefined;

/**
 * @member {String} signatureId
 */
BatchMemberCreate.prototype.signatureId = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
BatchMemberCreate.StateEnum = {
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
 * @member {module:model/BatchMemberCreate.StateEnum} state
 */
BatchMemberCreate.prototype.state = undefined;