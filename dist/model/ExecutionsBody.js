"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionsBody = void 0;
var _ApiClient = require("../ApiClient");
var _ExecutionCreate = require("./ExecutionCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExecutionsBody model module.
 * @module model/ExecutionsBody
 * @version 1.0.0
 */
var ExecutionsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExecutionsBody</code>.
   * @alias module:model/ExecutionsBody
   * @class
   * @param execution {module:model/ExecutionCreate} 
   */
  function ExecutionsBody(execution) {
    _classCallCheck(this, ExecutionsBody);
    this.execution = execution;
  }

  /**
   * Constructs a <code>ExecutionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecutionsBody} obj Optional instance to populate.
   * @return {module:model/ExecutionsBody} The populated <code>ExecutionsBody</code> instance.
   */
  _createClass(ExecutionsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExecutionsBody();
        if (data.hasOwnProperty('execution')) obj.execution = _ExecutionCreate.ExecutionCreate.constructFromObject(data['execution']);
      }
      return obj;
    }
  }]);
  return ExecutionsBody;
}();
/**
 * @member {module:model/ExecutionCreate} execution
 */
exports.ExecutionsBody = ExecutionsBody;
ExecutionsBody.prototype.execution = undefined;