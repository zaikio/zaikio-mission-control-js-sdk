"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImposingIdSignaturesBody = void 0;
var _ApiClient = require("../ApiClient");
var _SignatureCreate = require("./SignatureCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ImposingIdSignaturesBody model module.
 * @module model/ImposingIdSignaturesBody
 * @version 1.0.0
 */
var ImposingIdSignaturesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImposingIdSignaturesBody</code>.
   * @alias module:model/ImposingIdSignaturesBody
   * @class
   * @param signature {module:model/SignatureCreate} 
   */
  function ImposingIdSignaturesBody(signature) {
    _classCallCheck(this, ImposingIdSignaturesBody);
    this.signature = signature;
  }

  /**
   * Constructs a <code>ImposingIdSignaturesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImposingIdSignaturesBody} obj Optional instance to populate.
   * @return {module:model/ImposingIdSignaturesBody} The populated <code>ImposingIdSignaturesBody</code> instance.
   */
  _createClass(ImposingIdSignaturesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImposingIdSignaturesBody();
        if (data.hasOwnProperty('signature')) obj.signature = _SignatureCreate.SignatureCreate.constructFromObject(data['signature']);
      }
      return obj;
    }
  }]);
  return ImposingIdSignaturesBody;
}();
/**
 * @member {module:model/SignatureCreate} signature
 */
exports.ImposingIdSignaturesBody = ImposingIdSignaturesBody;
ImposingIdSignaturesBody.prototype.signature = undefined;