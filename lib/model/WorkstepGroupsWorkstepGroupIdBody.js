"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepGroupsWorkstepGroupIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepGroupUpdate = require("./WorkstepGroupUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepGroupsWorkstepGroupIdBody model module.
 * @module model/WorkstepGroupsWorkstepGroupIdBody
 * @version 1.0.0
 */
var WorkstepGroupsWorkstepGroupIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepGroupsWorkstepGroupIdBody</code>.
   * @alias module:model/WorkstepGroupsWorkstepGroupIdBody
   * @class
   * @param workstepGroup {module:model/WorkstepGroupUpdate} 
   */
  function WorkstepGroupsWorkstepGroupIdBody(workstepGroup) {
    _classCallCheck(this, WorkstepGroupsWorkstepGroupIdBody);
    this.workstepGroup = workstepGroup;
  }

  /**
   * Constructs a <code>WorkstepGroupsWorkstepGroupIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepGroupsWorkstepGroupIdBody} obj Optional instance to populate.
   * @return {module:model/WorkstepGroupsWorkstepGroupIdBody} The populated <code>WorkstepGroupsWorkstepGroupIdBody</code> instance.
   */
  _createClass(WorkstepGroupsWorkstepGroupIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepGroupsWorkstepGroupIdBody();
        if (data.hasOwnProperty('workstep_group')) obj.workstepGroup = _WorkstepGroupUpdate.WorkstepGroupUpdate.constructFromObject(data['workstep_group']);
      }
      return obj;
    }
  }]);
  return WorkstepGroupsWorkstepGroupIdBody;
}();
/**
 * @member {module:model/WorkstepGroupUpdate} workstepGroup
 */
exports.WorkstepGroupsWorkstepGroupIdBody = WorkstepGroupsWorkstepGroupIdBody;
WorkstepGroupsWorkstepGroupIdBody.prototype.workstepGroup = undefined;