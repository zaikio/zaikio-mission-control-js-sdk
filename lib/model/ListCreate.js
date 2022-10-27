"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListCreate model module.
 * @module model/ListCreate
 * @version 1.0.0
 */
var ListCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListCreate</code>.
   * @alias module:model/ListCreate
   * @class
   */
  function ListCreate() {
    _classCallCheck(this, ListCreate);
  }

  /**
   * Constructs a <code>ListCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCreate} obj Optional instance to populate.
   * @return {module:model/ListCreate} The populated <code>ListCreate</code> instance.
   */
  _createClass(ListCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListCreate();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('member_klass')) obj.memberKlass = _ApiClient.ApiClient.convertToType(data['member_klass'], 'String');
      }
      return obj;
    }
  }]);
  return ListCreate;
}();
/**
 * The name of the list.
 * @member {String} name
 */
exports.ListCreate = ListCreate;
ListCreate.prototype.name = undefined;

/**
 * Allowed values for the <code>memberKlass</code> property.
 * @enum {String}
 * @readonly
 */
ListCreate.MemberKlassEnum = {
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
 * @member {module:model/ListCreate.MemberKlassEnum} memberKlass
 */
ListCreate.prototype.memberKlass = undefined;