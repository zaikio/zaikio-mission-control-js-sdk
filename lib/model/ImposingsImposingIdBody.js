"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImposingsImposingIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _ImposingUpdate = require("./ImposingUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ImposingsImposingIdBody model module.
 * @module model/ImposingsImposingIdBody
 * @version 1.0.0
 */
var ImposingsImposingIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImposingsImposingIdBody</code>.
   * @alias module:model/ImposingsImposingIdBody
   * @class
   * @param imposing {module:model/ImposingUpdate} 
   */
  function ImposingsImposingIdBody(imposing) {
    _classCallCheck(this, ImposingsImposingIdBody);
    this.imposing = imposing;
  }

  /**
   * Constructs a <code>ImposingsImposingIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImposingsImposingIdBody} obj Optional instance to populate.
   * @return {module:model/ImposingsImposingIdBody} The populated <code>ImposingsImposingIdBody</code> instance.
   */
  _createClass(ImposingsImposingIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImposingsImposingIdBody();
        if (data.hasOwnProperty('imposing')) obj.imposing = _ImposingUpdate.ImposingUpdate.constructFromObject(data['imposing']);
      }
      return obj;
    }
  }]);
  return ImposingsImposingIdBody;
}();
/**
 * @member {module:model/ImposingUpdate} imposing
 */
exports.ImposingsImposingIdBody = ImposingsImposingIdBody;
ImposingsImposingIdBody.prototype.imposing = undefined;