"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMemberUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMemberUpdate model module.
 * @module model/ListMemberUpdate
 * @version 1.0.0
 */
var ListMemberUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMemberUpdate</code>.
   * @alias module:model/ListMemberUpdate
   * @class
   */
  function ListMemberUpdate() {
    _classCallCheck(this, ListMemberUpdate);
  }

  /**
   * Constructs a <code>ListMemberUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMemberUpdate} obj Optional instance to populate.
   * @return {module:model/ListMemberUpdate} The populated <code>ListMemberUpdate</code> instance.
   */
  _createClass(ListMemberUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMemberUpdate();
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return ListMemberUpdate;
}();
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
exports.ListMemberUpdate = ListMemberUpdate;
ListMemberUpdate.KindEnum = {
  /**
   * value: "Job"
   * @const
   */
  job: "Job",
  /**
   * value: "Part"
   * @const
   */
  part: "Part",
  /**
   * value: "Workstep"
   * @const
   */
  workstep: "Workstep",
  /**
   * value: "Todo"
   * @const
   */
  todo: "Todo"
};
/**
 * The type of list member.
 * @member {module:model/ListMemberUpdate.KindEnum} kind
 */
ListMemberUpdate.prototype.kind = undefined;