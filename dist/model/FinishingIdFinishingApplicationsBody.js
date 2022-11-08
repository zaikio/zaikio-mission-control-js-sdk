"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingIdFinishingApplicationsBody = void 0;
var _ApiClient = require("../ApiClient");
var _FinishingApplicationCreate = require("./FinishingApplicationCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingIdFinishingApplicationsBody model module.
 * @module model/FinishingIdFinishingApplicationsBody
 * @version 1.0.0
 */
var FinishingIdFinishingApplicationsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingIdFinishingApplicationsBody</code>.
   * @alias module:model/FinishingIdFinishingApplicationsBody
   * @class
   * @param finishingApplication {module:model/FinishingApplicationCreate} 
   */
  function FinishingIdFinishingApplicationsBody(finishingApplication) {
    _classCallCheck(this, FinishingIdFinishingApplicationsBody);
    this.finishingApplication = finishingApplication;
  }

  /**
   * Constructs a <code>FinishingIdFinishingApplicationsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingIdFinishingApplicationsBody} obj Optional instance to populate.
   * @return {module:model/FinishingIdFinishingApplicationsBody} The populated <code>FinishingIdFinishingApplicationsBody</code> instance.
   */
  _createClass(FinishingIdFinishingApplicationsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingIdFinishingApplicationsBody();
        if (data.hasOwnProperty('finishing_application')) obj.finishingApplication = _FinishingApplicationCreate.FinishingApplicationCreate.constructFromObject(data['finishing_application']);
      }
      return obj;
    }
  }]);
  return FinishingIdFinishingApplicationsBody;
}();
/**
 * @member {module:model/FinishingApplicationCreate} finishingApplication
 */
exports.FinishingIdFinishingApplicationsBody = FinishingIdFinishingApplicationsBody;
FinishingIdFinishingApplicationsBody.prototype.finishingApplication = undefined;