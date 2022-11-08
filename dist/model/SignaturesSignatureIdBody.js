"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignaturesSignatureIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _SignatureUpdate = require("./SignatureUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SignaturesSignatureIdBody model module.
 * @module model/SignaturesSignatureIdBody
 * @version 1.0.0
 */
var SignaturesSignatureIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignaturesSignatureIdBody</code>.
   * @alias module:model/SignaturesSignatureIdBody
   * @class
   * @param signature {module:model/SignatureUpdate} 
   */
  function SignaturesSignatureIdBody(signature) {
    _classCallCheck(this, SignaturesSignatureIdBody);
    this.signature = signature;
  }

  /**
   * Constructs a <code>SignaturesSignatureIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignaturesSignatureIdBody} obj Optional instance to populate.
   * @return {module:model/SignaturesSignatureIdBody} The populated <code>SignaturesSignatureIdBody</code> instance.
   */
  _createClass(SignaturesSignatureIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignaturesSignatureIdBody();
        if (data.hasOwnProperty('signature')) obj.signature = _SignatureUpdate.SignatureUpdate.constructFromObject(data['signature']);
      }
      return obj;
    }
  }]);
  return SignaturesSignatureIdBody;
}();
/**
 * @member {module:model/SignatureUpdate} signature
 */
exports.SignaturesSignatureIdBody = SignaturesSignatureIdBody;
SignaturesSignatureIdBody.prototype.signature = undefined;