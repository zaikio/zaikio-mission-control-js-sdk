"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodosTodoIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _TodoUpdate = require("./TodoUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TodosTodoIdBody model module.
 * @module model/TodosTodoIdBody
 * @version 1.0.0
 */
var TodosTodoIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TodosTodoIdBody</code>.
   * @alias module:model/TodosTodoIdBody
   * @class
   * @param todo {module:model/TodoUpdate} 
   */
  function TodosTodoIdBody(todo) {
    _classCallCheck(this, TodosTodoIdBody);
    this.todo = todo;
  }

  /**
   * Constructs a <code>TodosTodoIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TodosTodoIdBody} obj Optional instance to populate.
   * @return {module:model/TodosTodoIdBody} The populated <code>TodosTodoIdBody</code> instance.
   */
  _createClass(TodosTodoIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TodosTodoIdBody();
        if (data.hasOwnProperty('todo')) obj.todo = _TodoUpdate.TodoUpdate.constructFromObject(data['todo']);
      }
      return obj;
    }
  }]);
  return TodosTodoIdBody;
}();
/**
 * @member {module:model/TodoUpdate} todo
 */
exports.TodosTodoIdBody = TodosTodoIdBody;
TodosTodoIdBody.prototype.todo = undefined;