"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchSignatureCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchSignatureCreate model module.
 * @module model/BatchSignatureCreate
 * @version 1.0.0
 */
var BatchSignatureCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchSignatureCreate</code>.
   * @alias module:model/BatchSignatureCreate
   * @class
   */
  function BatchSignatureCreate() {
    _classCallCheck(this, BatchSignatureCreate);
  }

  /**
   * Constructs a <code>BatchSignatureCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchSignatureCreate} obj Optional instance to populate.
   * @return {module:model/BatchSignatureCreate} The populated <code>BatchSignatureCreate</code> instance.
   */
  _createClass(BatchSignatureCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchSignatureCreate();
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return BatchSignatureCreate;
}();
/**
 * @member {Object} layout
 */
exports.BatchSignatureCreate = BatchSignatureCreate;
BatchSignatureCreate.prototype.layout = undefined;

// Implement OneOfBatchCreateBatchSignature interface: