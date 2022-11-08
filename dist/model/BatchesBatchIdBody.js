"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchesBatchIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _BatchUpdate = require("./BatchUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchesBatchIdBody model module.
 * @module model/BatchesBatchIdBody
 * @version 1.0.0
 */
var BatchesBatchIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchesBatchIdBody</code>.
   * @alias module:model/BatchesBatchIdBody
   * @class
   * @param batch {module:model/BatchUpdate} 
   */
  function BatchesBatchIdBody(batch) {
    _classCallCheck(this, BatchesBatchIdBody);
    this.batch = batch;
  }

  /**
   * Constructs a <code>BatchesBatchIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchesBatchIdBody} obj Optional instance to populate.
   * @return {module:model/BatchesBatchIdBody} The populated <code>BatchesBatchIdBody</code> instance.
   */
  _createClass(BatchesBatchIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchesBatchIdBody();
        if (data.hasOwnProperty('batch')) obj.batch = _BatchUpdate.BatchUpdate.constructFromObject(data['batch']);
      }
      return obj;
    }
  }]);
  return BatchesBatchIdBody;
}();
/**
 * @member {module:model/BatchUpdate} batch
 */
exports.BatchesBatchIdBody = BatchesBatchIdBody;
BatchesBatchIdBody.prototype.batch = undefined;