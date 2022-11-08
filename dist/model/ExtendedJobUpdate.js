"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedJobUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedPartUpdate = require("./ExtendedPartUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedJobUpdate model module.
 * @module model/ExtendedJobUpdate
 * @version 1.0.0
 */
var ExtendedJobUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedJobUpdate</code>.
   * @alias module:model/ExtendedJobUpdate
   * @class
   */
  function ExtendedJobUpdate() {
    _classCallCheck(this, ExtendedJobUpdate);
  }

  /**
   * Constructs a <code>ExtendedJobUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedJobUpdate} obj Optional instance to populate.
   * @return {module:model/ExtendedJobUpdate} The populated <code>ExtendedJobUpdate</code> instance.
   */
  _createClass(ExtendedJobUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedJobUpdate();
        if (data.hasOwnProperty('parts')) obj.parts = _ApiClient.ApiClient.convertToType(data['parts'], [_ExtendedPartUpdate.ExtendedPartUpdate]);
      }
      return obj;
    }
  }]);
  return ExtendedJobUpdate;
}();
/**
 * @member {Array.<module:model/ExtendedPartUpdate>} parts
 */
exports.ExtendedJobUpdate = ExtendedJobUpdate;
ExtendedJobUpdate.prototype.parts = undefined;