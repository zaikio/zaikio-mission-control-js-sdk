"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListUpdate model module.
 * @module model/ListUpdate
 * @version 1.0.0
 */
var ListUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUpdate</code>.
   * @alias module:model/ListUpdate
   * @class
   */
  function ListUpdate() {
    _classCallCheck(this, ListUpdate);
  }

  /**
   * Constructs a <code>ListUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUpdate} obj Optional instance to populate.
   * @return {module:model/ListUpdate} The populated <code>ListUpdate</code> instance.
   */
  _createClass(ListUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUpdate();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('member_klass')) obj.memberKlass = _ApiClient.ApiClient.convertToType(data['member_klass'], 'String');
      }
      return obj;
    }
  }]);
  return ListUpdate;
}();
/**
 * The name of the list.
 * @member {String} name
 */
exports.ListUpdate = ListUpdate;
ListUpdate.prototype.name = undefined;

/**
 * Allowed values for the <code>memberKlass</code> property.
 * @enum {String}
 * @readonly
 */
ListUpdate.MemberKlassEnum = {
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
   * value: "Todo"
   * @const
   */
  todo: "Todo",
  /**
   * value: "Workstep"
   * @const
   */
  workstep: "Workstep"
};
/**
 * The type of list members. All members in a list share the same type.
 * @member {module:model/ListUpdate.MemberKlassEnum} memberKlass
 */
ListUpdate.prototype.memberKlass = undefined;