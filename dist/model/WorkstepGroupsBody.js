"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepGroupsBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepGroupCreate = require("./WorkstepGroupCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepGroupsBody model module.
 * @module model/WorkstepGroupsBody
 * @version 1.0.0
 */
var WorkstepGroupsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepGroupsBody</code>.
   * @alias module:model/WorkstepGroupsBody
   * @class
   * @param workstepGroup {module:model/WorkstepGroupCreate} 
   */
  function WorkstepGroupsBody(workstepGroup) {
    _classCallCheck(this, WorkstepGroupsBody);
    this.workstepGroup = workstepGroup;
  }

  /**
   * Constructs a <code>WorkstepGroupsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepGroupsBody} obj Optional instance to populate.
   * @return {module:model/WorkstepGroupsBody} The populated <code>WorkstepGroupsBody</code> instance.
   */
  _createClass(WorkstepGroupsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepGroupsBody();
        if (data.hasOwnProperty('workstep_group')) obj.workstepGroup = _WorkstepGroupCreate.WorkstepGroupCreate.constructFromObject(data['workstep_group']);
      }
      return obj;
    }
  }]);
  return WorkstepGroupsBody;
}();
/**
 * @member {module:model/WorkstepGroupCreate} workstepGroup
 */
exports.WorkstepGroupsBody = WorkstepGroupsBody;
WorkstepGroupsBody.prototype.workstepGroup = undefined;