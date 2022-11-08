"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListsBody model module.
 * @module model/ListsBody
 * @version 1.0.0
 */
var ListsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListsBody</code>.
   * @alias module:model/ListsBody
   * @class
   * @param list {Object} 
   */
  function ListsBody(list) {
    _classCallCheck(this, ListsBody);
    this.list = list;
  }

  /**
   * Constructs a <code>ListsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListsBody} obj Optional instance to populate.
   * @return {module:model/ListsBody} The populated <code>ListsBody</code> instance.
   */
  _createClass(ListsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListsBody();
        if (data.hasOwnProperty('list')) obj.list = _ApiClient.ApiClient.convertToType(data['list'], Object);
      }
      return obj;
    }
  }]);
  return ListsBody;
}();
/**
 * @member {Object} list
 */
exports.ListsBody = ListsBody;
ListsBody.prototype.list = undefined;