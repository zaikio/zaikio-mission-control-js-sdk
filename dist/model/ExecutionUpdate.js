"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExecutionUpdate model module.
 * @module model/ExecutionUpdate
 * @version 1.0.0
 */
var ExecutionUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExecutionUpdate</code>.
   * @alias module:model/ExecutionUpdate
   * @class
   */
  function ExecutionUpdate() {
    _classCallCheck(this, ExecutionUpdate);
  }

  /**
   * Constructs a <code>ExecutionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecutionUpdate} obj Optional instance to populate.
   * @return {module:model/ExecutionUpdate} The populated <code>ExecutionUpdate</code> instance.
   */
  _createClass(ExecutionUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExecutionUpdate();
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
  return ExecutionUpdate;
}();
/**
 * The identifier of the human operator who was responsible for this operation
 * @member {String} operatorId
 */
exports.ExecutionUpdate = ExecutionUpdate;
ExecutionUpdate.prototype.operatorId = undefined;

/**
 * The identifier of the machine that was operated
 * @member {String} machineId
 */
ExecutionUpdate.prototype.machineId = undefined;

/**
 * The identifier of the workstep that this execution worked towards completing
 * @member {String} workstepId
 */
ExecutionUpdate.prototype.workstepId = undefined;

/**
 * How many items have been produced
 * @member {Number} quantity
 */
ExecutionUpdate.prototype.quantity = undefined;

/**
 * How many units of waste have been produced
 * @member {Number} waste
 */
ExecutionUpdate.prototype.waste = undefined;

/**
 * When did production commence in this execution
 * @member {Date} startedAt
 */
ExecutionUpdate.prototype.startedAt = undefined;

/**
 * When did production conclude in this execution
 * @member {Date} endedAt
 */
ExecutionUpdate.prototype.endedAt = undefined;