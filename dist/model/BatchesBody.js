"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchesBody = void 0;
var _ApiClient = require("../ApiClient");
var _BatchCreate = require("./BatchCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchesBody model module.
 * @module model/BatchesBody
 * @version 1.0.0
 */
var BatchesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchesBody</code>.
   * @alias module:model/BatchesBody
   * @class
   * @param batch {module:model/BatchCreate} 
   */
  function BatchesBody(batch) {
    _classCallCheck(this, BatchesBody);
    this.batch = batch;
  }

  /**
   * Constructs a <code>BatchesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchesBody} obj Optional instance to populate.
   * @return {module:model/BatchesBody} The populated <code>BatchesBody</code> instance.
   */
  _createClass(BatchesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchesBody();
        if (data.hasOwnProperty('batch')) obj.batch = _BatchCreate.BatchCreate.constructFromObject(data['batch']);
      }
      return obj;
    }
  }]);
  return BatchesBody;
}();
/**
 * @member {module:model/BatchCreate} batch
 */
exports.BatchesBody = BatchesBody;
BatchesBody.prototype.batch = undefined;