"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExecutionCreate model module.
 * @module model/ExecutionCreate
 * @version 1.0.0
 */
var ExecutionCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExecutionCreate</code>.
   * @alias module:model/ExecutionCreate
   * @class
   */
  function ExecutionCreate() {
    _classCallCheck(this, ExecutionCreate);
  }

  /**
   * Constructs a <code>ExecutionCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecutionCreate} obj Optional instance to populate.
   * @return {module:model/ExecutionCreate} The populated <code>ExecutionCreate</code> instance.
   */
  _createClass(ExecutionCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExecutionCreate();
        if (data.hasOwnProperty('operator_id')) obj.operatorId = _ApiClient.ApiClient.convertToType(data['operator_id'], 'String');
        if (data.hasOwnProperty('machine_id')) obj.machineId = _ApiClient.ApiClient.convertToType(data['machine_id'], 'String');
        if (data.hasOwnProperty('workstep_id')) obj.workstepId = _ApiClient.ApiClient.convertToType(data['workstep_id'], 'String');
        if (data.hasOwnProperty('quantity')) obj.quantity = _ApiClient.ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('waste')) obj.waste = _ApiClient.ApiClient.convertToType(data['waste'], 'Number');
        if (data.hasOwnProperty('started_at')) obj.startedAt = _ApiClient.ApiClient.convertToType(data['started_at'], 'Date');
        if (data.hasOwnProperty('ended_at')) obj.endedAt = _ApiClient.ApiClient.convertToType(data['ended_at'], 'Date');
      }
      return obj;
    }
  }]);
  return ExecutionCreate;
}();
/**
 * The identifier of the human operator who was responsible for this operation
 * @member {String} operatorId
 */
exports.ExecutionCreate = ExecutionCreate;
ExecutionCreate.prototype.operatorId = undefined;

/**
 * The identifier of the machine that was operated
 * @member {String} machineId
 */
ExecutionCreate.prototype.machineId = undefined;

/**
 * The identifier of the workstep that this execution worked towards completing
 * @member {String} workstepId
 */
ExecutionCreate.prototype.workstepId = undefined;

/**
 * How many items have been produced
 * @member {Number} quantity
 */
ExecutionCreate.prototype.quantity = undefined;

/**
 * How many units of waste have been produced
 * @member {Number} waste
 */
ExecutionCreate.prototype.waste = undefined;

/**
 * When did production commence in this execution
 * @member {Date} startedAt
 */
ExecutionCreate.prototype.startedAt = undefined;

/**
 * When did production conclude in this execution
 * @member {Date} endedAt
 */
ExecutionCreate.prototype.endedAt = undefined;