"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissioningsCommissioningIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _CommissioningUpdate = require("./CommissioningUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CommissioningsCommissioningIdBody model module.
 * @module model/CommissioningsCommissioningIdBody
 * @version 1.0.0
 */
var CommissioningsCommissioningIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommissioningsCommissioningIdBody</code>.
   * @alias module:model/CommissioningsCommissioningIdBody
   * @class
   * @param commissioning {module:model/CommissioningUpdate} 
   */
  function CommissioningsCommissioningIdBody(commissioning) {
    _classCallCheck(this, CommissioningsCommissioningIdBody);
    this.commissioning = commissioning;
  }

  /**
   * Constructs a <code>CommissioningsCommissioningIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommissioningsCommissioningIdBody} obj Optional instance to populate.
   * @return {module:model/CommissioningsCommissioningIdBody} The populated <code>CommissioningsCommissioningIdBody</code> instance.
   */
  _createClass(CommissioningsCommissioningIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommissioningsCommissioningIdBody();
        if (data.hasOwnProperty('commissioning')) obj.commissioning = _CommissioningUpdate.CommissioningUpdate.constructFromObject(data['commissioning']);
      }
      return obj;
    }
  }]);
  return CommissioningsCommissioningIdBody;
}();
/**
 * @member {module:model/CommissioningUpdate} commissioning
 */
exports.CommissioningsCommissioningIdBody = CommissioningsCommissioningIdBody;
CommissioningsCommissioningIdBody.prototype.commissioning = undefined;