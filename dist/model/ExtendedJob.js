"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedJob = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedPart = require("./ExtendedPart");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedJob model module.
 * @module model/ExtendedJob
 * @version 1.0.0
 */
var ExtendedJob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedJob</code>.
   * @alias module:model/ExtendedJob
   * @class
   * @param parts {Array.<module:model/ExtendedPart>} 
   */
  function ExtendedJob(parts) {
    _classCallCheck(this, ExtendedJob);
    this.parts = parts;
  }

  /**
   * Constructs a <code>ExtendedJob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedJob} obj Optional instance to populate.
   * @return {module:model/ExtendedJob} The populated <code>ExtendedJob</code> instance.
   */
  _createClass(ExtendedJob, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedJob();
        if (data.hasOwnProperty('parts')) obj.parts = _ApiClient.ApiClient.convertToType(data['parts'], [_ExtendedPart.ExtendedPart]);
      }
      return obj;
    }
  }]);
  return ExtendedJob;
}();
/**
 * @member {Array.<module:model/ExtendedPart>} parts
 */
exports.ExtendedJob = ExtendedJob;
ExtendedJob.prototype.parts = undefined;