"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstimatesEstimateIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _EstimateUpdate = require("./EstimateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EstimatesEstimateIdBody model module.
 * @module model/EstimatesEstimateIdBody
 * @version 1.0.0
 */
var EstimatesEstimateIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimatesEstimateIdBody</code>.
   * @alias module:model/EstimatesEstimateIdBody
   * @class
   * @param estimate {module:model/EstimateUpdate} 
   */
  function EstimatesEstimateIdBody(estimate) {
    _classCallCheck(this, EstimatesEstimateIdBody);
    this.estimate = estimate;
  }

  /**
   * Constructs a <code>EstimatesEstimateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimatesEstimateIdBody} obj Optional instance to populate.
   * @return {module:model/EstimatesEstimateIdBody} The populated <code>EstimatesEstimateIdBody</code> instance.
   */
  _createClass(EstimatesEstimateIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimatesEstimateIdBody();
        if (data.hasOwnProperty('estimate')) obj.estimate = _EstimateUpdate.EstimateUpdate.constructFromObject(data['estimate']);
      }
      return obj;
    }
  }]);
  return EstimatesEstimateIdBody;
}();
/**
 * @member {module:model/EstimateUpdate} estimate
 */
exports.EstimatesEstimateIdBody = EstimatesEstimateIdBody;
EstimatesEstimateIdBody.prototype.estimate = undefined;