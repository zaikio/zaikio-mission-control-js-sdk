"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobStateTransition = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobStateTransition model module.
 * @module model/JobStateTransition
 * @version 1.0.0
 */
var JobStateTransition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobStateTransition</code>.
   * @alias module:model/JobStateTransition
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param previousState {module:model/JobStateTransition.PreviousStateEnum} The state of the Job at the start of this transition
   * @param nextState {module:model/JobStateTransition.NextStateEnum} The state the Job is transitioning to
   * @param triggeredBy {String} The application or other API caller that triggered the transition, if present
   * @param userId {String} The user that triggered the transition, if present
   */
  function JobStateTransition(id, createdAt, updatedAt, previousState, nextState, triggeredBy, userId) {
    _classCallCheck(this, JobStateTransition);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.previousState = previousState;
    this.nextState = nextState;
    this.triggeredBy = triggeredBy;
    this.userId = userId;
  }

  /**
   * Constructs a <code>JobStateTransition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStateTransition} obj Optional instance to populate.
   * @return {module:model/JobStateTransition} The populated <code>JobStateTransition</code> instance.
   */
  _createClass(JobStateTransition, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobStateTransition();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('previous_state')) obj.previousState = _ApiClient.ApiClient.convertToType(data['previous_state'], 'String');
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
        if (data.hasOwnProperty('triggered_by')) obj.triggeredBy = _ApiClient.ApiClient.convertToType(data['triggered_by'], 'String');
        if (data.hasOwnProperty('user_id')) obj.userId = _ApiClient.ApiClient.convertToType(data['user_id'], 'String');
      }
      return obj;
    }
  }]);
  return JobStateTransition;
}();
/**
 * @member {String} id
 */
exports.JobStateTransition = JobStateTransition;
JobStateTransition.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
JobStateTransition.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
JobStateTransition.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>previousState</code> property.
 * @enum {String}
 * @readonly
 */
JobStateTransition.PreviousStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",
  /**
   * value: ":pending"
   * @const
   */
  pending: ":pending",
  /**
   * value: ":prepress"
   * @const
   */
  prepress: ":prepress",
  /**
   * value: ":press"
   * @const
   */
  press: ":press",
  /**
   * value: ":postpress"
   * @const
   */
  postpress: ":postpress",
  /**
   * value: ":packaging"
   * @const
   */
  packaging: ":packaging",
  /**
   * value: ":completed"
   * @const
   */
  completed: ":completed",
  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state of the Job at the start of this transition
 * @member {module:model/JobStateTransition.PreviousStateEnum} previousState
 */
JobStateTransition.prototype.previousState = undefined;

/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
JobStateTransition.NextStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",
  /**
   * value: ":pending"
   * @const
   */
  pending: ":pending",
  /**
   * value: ":prepress"
   * @const
   */
  prepress: ":prepress",
  /**
   * value: ":press"
   * @const
   */
  press: ":press",
  /**
   * value: ":postpress"
   * @const
   */
  postpress: ":postpress",
  /**
   * value: ":packaging"
   * @const
   */
  packaging: ":packaging",
  /**
   * value: ":completed"
   * @const
   */
  completed: ":completed",
  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state the Job is transitioning to
 * @member {module:model/JobStateTransition.NextStateEnum} nextState
 */
JobStateTransition.prototype.nextState = undefined;

/**
 * The application or other API caller that triggered the transition, if present
 * @member {String} triggeredBy
 */
JobStateTransition.prototype.triggeredBy = undefined;

/**
 * The user that triggered the transition, if present
 * @member {String} userId
 */
JobStateTransition.prototype.userId = undefined;