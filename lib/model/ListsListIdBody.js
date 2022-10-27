"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsListIdBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListsListIdBody model module.
 * @module model/ListsListIdBody
 * @version 1.0.0
 */
var ListsListIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListsListIdBody</code>.
   * @alias module:model/ListsListIdBody
   * @class
   * @param list {Object} 
   */
  function ListsListIdBody(list) {
    _classCallCheck(this, ListsListIdBody);
    this.list = list;
  }

  /**
   * Constructs a <code>ListsListIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListsListIdBody} obj Optional instance to populate.
   * @return {module:model/ListsListIdBody} The populated <code>ListsListIdBody</code> instance.
   */
  _createClass(ListsListIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListsListIdBody();
        if (data.hasOwnProperty('list')) obj.list = _ApiClient.ApiClient.convertToType(data['list'], Object);
      }
      return obj;
    }
  }]);
  return ListsListIdBody;
}();
/**
 * @member {Object} list
 */
exports.ListsListIdBody = ListsListIdBody;
ListsListIdBody.prototype.list = undefined;