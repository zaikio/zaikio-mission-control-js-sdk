"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedJobCreate = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedPartCreate = require("./ExtendedPartCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedJobCreate model module.
 * @module model/ExtendedJobCreate
 * @version 1.0.0
 */
var ExtendedJobCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedJobCreate</code>.
   * @alias module:model/ExtendedJobCreate
   * @class
   */
  function ExtendedJobCreate() {
    _classCallCheck(this, ExtendedJobCreate);
  }

  /**
   * Constructs a <code>ExtendedJobCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedJobCreate} obj Optional instance to populate.
   * @return {module:model/ExtendedJobCreate} The populated <code>ExtendedJobCreate</code> instance.
   */
  _createClass(ExtendedJobCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedJobCreate();
        if (data.hasOwnProperty('parts')) obj.parts = _ApiClient.ApiClient.convertToType(data['parts'], [_ExtendedPartCreate.ExtendedPartCreate]);
      }
      return obj;
    }
  }]);
  return ExtendedJobCreate;
}();
/**
 * @member {Array.<module:model/ExtendedPartCreate>} parts
 */
exports.ExtendedJobCreate = ExtendedJobCreate;
ExtendedJobCreate.prototype.parts = undefined;