"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MilestonesMilestoneIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _MilestoneUpdate = require("./MilestoneUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MilestonesMilestoneIdBody model module.
 * @module model/MilestonesMilestoneIdBody
 * @version 1.0.0
 */
var MilestonesMilestoneIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MilestonesMilestoneIdBody</code>.
   * @alias module:model/MilestonesMilestoneIdBody
   * @class
   * @param milestone {module:model/MilestoneUpdate} 
   */
  function MilestonesMilestoneIdBody(milestone) {
    _classCallCheck(this, MilestonesMilestoneIdBody);
    this.milestone = milestone;
  }

  /**
   * Constructs a <code>MilestonesMilestoneIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MilestonesMilestoneIdBody} obj Optional instance to populate.
   * @return {module:model/MilestonesMilestoneIdBody} The populated <code>MilestonesMilestoneIdBody</code> instance.
   */
  _createClass(MilestonesMilestoneIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MilestonesMilestoneIdBody();
        if (data.hasOwnProperty('milestone')) obj.milestone = _MilestoneUpdate.MilestoneUpdate.constructFromObject(data['milestone']);
      }
      return obj;
    }
  }]);
  return MilestonesMilestoneIdBody;
}();
/**
 * @member {module:model/MilestoneUpdate} milestone
 */
exports.MilestonesMilestoneIdBody = MilestonesMilestoneIdBody;
MilestonesMilestoneIdBody.prototype.milestone = undefined;