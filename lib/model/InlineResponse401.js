"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse401 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse401 model module.
 * @module model/InlineResponse401
 * @version 1.0.0
 */
var InlineResponse401 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse401</code>.
   * @alias module:model/InlineResponse401
   * @class
   * @param errors {Array.<String>} 
   */
  function InlineResponse401(errors) {
    _classCallCheck(this, InlineResponse401);
    this.errors = errors;
  }

  /**
   * Constructs a <code>InlineResponse401</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse401} obj Optional instance to populate.
   * @return {module:model/InlineResponse401} The populated <code>InlineResponse401</code> instance.
   */
  _createClass(InlineResponse401, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse401();
        if (data.hasOwnProperty('errors')) obj.errors = _ApiClient.ApiClient.convertToType(data['errors'], ['String']);
      }
      return obj;
    }
  }]);
  return InlineResponse401;
}();
/**
 * @member {Array.<String>} errors
 */
exports.InlineResponse401 = InlineResponse401;
InlineResponse401.prototype.errors = undefined;