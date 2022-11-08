"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissioningsBody = void 0;
var _ApiClient = require("../ApiClient");
var _CommissioningCreate = require("./CommissioningCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CommissioningsBody model module.
 * @module model/CommissioningsBody
 * @version 1.0.0
 */
var CommissioningsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommissioningsBody</code>.
   * @alias module:model/CommissioningsBody
   * @class
   * @param commissioning {module:model/CommissioningCreate} 
   */
  function CommissioningsBody(commissioning) {
    _classCallCheck(this, CommissioningsBody);
    this.commissioning = commissioning;
  }

  /**
   * Constructs a <code>CommissioningsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningsBody} obj Optional instance to populate.
   * @return {module:model/CommissioningsBody} The populated <code>CommissioningsBody</code> instance.
   */
  _createClass(CommissioningsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommissioningsBody();
        if (data.hasOwnProperty('commissioning')) obj.commissioning = _CommissioningCreate.CommissioningCreate.constructFromObject(data['commissioning']);
      }
      return obj;
    }
  }]);
  return CommissioningsBody;
}();
/**
 * @member {module:model/CommissioningCreate} commissioning
 */
exports.CommissioningsBody = CommissioningsBody;
CommissioningsBody.prototype.commissioning = undefined;