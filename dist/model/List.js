"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The List model module.
 * @module model/List
 * @version 1.0.0
 */
var List = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>List</code>.
   * @alias module:model/List
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param name {String} The name of the list.
   * @param memberKlass {module:model/List.MemberKlassEnum} The type of list members. All members in a list share the same type.
   */
  function List(id, createdAt, updatedAt, name, memberKlass) {
    _classCallCheck(this, List);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.name = name;
    this.memberKlass = memberKlass;
  }

  /**
   * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/List} obj Optional instance to populate.
   * @return {module:model/List} The populated <code>List</code> instance.
   */
  _createClass(List, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new List();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('member_klass')) obj.memberKlass = _ApiClient.ApiClient.convertToType(data['member_klass'], 'String');
      }
      return obj;
    }
  }]);
  return List;
}();
/**
 * @member {String} id
 */
exports.List = List;
List.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
List.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
List.prototype.updatedAt = undefined;

/**
 * The name of the list.
 * @member {String} name
 */
List.prototype.name = undefined;

/**
 * Allowed values for the <code>memberKlass</code> property.
 * @enum {String}
 * @readonly
 */
List.MemberKlassEnum = {
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
 * @member {module:model/List.MemberKlassEnum} memberKlass
 */
List.prototype.memberKlass = undefined;