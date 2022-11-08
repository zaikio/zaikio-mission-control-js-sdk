"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdTodosBody = void 0;
var _ApiClient = require("../ApiClient");
var _TodoCreate = require("./TodoCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdTodosBody model module.
 * @module model/JobIdTodosBody
 * @version 1.0.0
 */
var JobIdTodosBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdTodosBody</code>.
   * @alias module:model/JobIdTodosBody
   * @class
   * @param todo {module:model/TodoCreate} 
   */
  function JobIdTodosBody(todo) {
    _classCallCheck(this, JobIdTodosBody);
    this.todo = todo;
  }

  /**
   * Constructs a <code>JobIdTodosBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdTodosBody} obj Optional instance to populate.
   * @return {module:model/JobIdTodosBody} The populated <code>JobIdTodosBody</code> instance.
   */
  _createClass(JobIdTodosBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdTodosBody();
        if (data.hasOwnProperty('todo')) obj.todo = _TodoCreate.TodoCreate.constructFromObject(data['todo']);
      }
      return obj;
    }
  }]);
  return JobIdTodosBody;
}();
/**
 * @member {module:model/TodoCreate} todo
 */
exports.JobIdTodosBody = JobIdTodosBody;
JobIdTodosBody.prototype.todo = undefined;