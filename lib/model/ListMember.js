"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMember = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMember model module.
 * @module model/ListMember
 * @version 1.0.0
 */
var ListMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMember</code>.
   * @alias module:model/ListMember
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/ListMember.KindEnum} The type of list member.
   */
  function ListMember(id, createdAt, updatedAt, kind) {
    _classCallCheck(this, ListMember);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
  }

  /**
   * Constructs a <code>ListMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMember} obj Optional instance to populate.
   * @return {module:model/ListMember} The populated <code>ListMember</code> instance.
   */
  _createClass(ListMember, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMember();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return ListMember;
}();
/**
 * @member {String} id
 */
exports.ListMember = ListMember;
ListMember.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
ListMember.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
ListMember.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ListMember.KindEnum = {
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
 * @member {module:model/ListMember.KindEnum} kind
 */
ListMember.prototype.kind = undefined;