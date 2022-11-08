"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Execution = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Execution model module.
 * @module model/Execution
 * @version 1.0.0
 */
var Execution = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Execution</code>.
   * @alias module:model/Execution
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param operatorId {String} The identifier of the human operator who was responsible for this operation
   * @param machineId {String} The identifier of the machine that was operated
   * @param workstepId {String} The identifier of the workstep that this execution worked towards completing
   * @param quantity {Number} How many items have been produced
   * @param waste {Number} How many units of waste have been produced
   * @param startedAt {Date} When did production commence in this execution
   * @param endedAt {Date} When did production conclude in this execution
   */
  function Execution(id, createdAt, updatedAt, operatorId, machineId, workstepId, quantity, waste, startedAt, endedAt) {
    _classCallCheck(this, Execution);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.operatorId = operatorId;
    this.machineId = machineId;
    this.workstepId = workstepId;
    this.quantity = quantity;
    this.waste = waste;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
  }

  /**
   * Constructs a <code>Execution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Execution} obj Optional instance to populate.
   * @return {module:model/Execution} The populated <code>Execution</code> instance.
   */
  _createClass(Execution, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Execution();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
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
  return Execution;
}();
/**
 * @member {String} id
 */
exports.Execution = Execution;
Execution.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Execution.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Execution.prototype.updatedAt = undefined;

/**
 * The identifier of the human operator who was responsible for this operation
 * @member {String} operatorId
 */
Execution.prototype.operatorId = undefined;

/**
 * The identifier of the machine that was operated
 * @member {String} machineId
 */
Execution.prototype.machineId = undefined;

/**
 * The identifier of the workstep that this execution worked towards completing
 * @member {String} workstepId
 */
Execution.prototype.workstepId = undefined;

/**
 * How many items have been produced
 * @member {Number} quantity
 */
Execution.prototype.quantity = undefined;

/**
 * How many units of waste have been produced
 * @member {Number} waste
 */
Execution.prototype.waste = undefined;

/**
 * When did production commence in this execution
 * @member {Date} startedAt
 */
Execution.prototype.startedAt = undefined;

/**
 * When did production conclude in this execution
 * @member {Date} endedAt
 */
Execution.prototype.endedAt = undefined;