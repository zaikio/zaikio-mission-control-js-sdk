"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TodoCreate model module.
 * @module model/TodoCreate
 * @version 1.0.0
 */
var TodoCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TodoCreate</code>.
   * @alias module:model/TodoCreate
   * @class
   */
  function TodoCreate() {
    _classCallCheck(this, TodoCreate);
  }

  /**
   * Constructs a <code>TodoCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TodoCreate} obj Optional instance to populate.
   * @return {module:model/TodoCreate} The populated <code>TodoCreate</code> instance.
   */
  _createClass(TodoCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TodoCreate();
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('milestone_id')) obj.milestoneId = _ApiClient.ApiClient.convertToType(data['milestone_id'], 'String');
        if (data.hasOwnProperty('part_id')) obj.partId = _ApiClient.ApiClient.convertToType(data['part_id'], 'String');
        if (data.hasOwnProperty('assigned_to_id')) obj.assignedToId = _ApiClient.ApiClient.convertToType(data['assigned_to_id'], 'String');
        if (data.hasOwnProperty('creator_id')) obj.creatorId = _ApiClient.ApiClient.convertToType(data['creator_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('progress')) obj.progress = _ApiClient.ApiClient.convertToType(data['progress'], 'String');
        if (data.hasOwnProperty('due_at')) obj.dueAt = _ApiClient.ApiClient.convertToType(data['due_at'], 'Date');
        if (data.hasOwnProperty('started_at')) obj.startedAt = _ApiClient.ApiClient.convertToType(data['started_at'], 'Date');
        if (data.hasOwnProperty('completed_at')) obj.completedAt = _ApiClient.ApiClient.convertToType(data['completed_at'], 'Date');
        if (data.hasOwnProperty('canceled_at')) obj.canceledAt = _ApiClient.ApiClient.convertToType(data['canceled_at'], 'Date');
      }
      return obj;
    }
  }]);
  return TodoCreate;
}();
/**
 * The ID of the Job related to the Todo task
 * @member {String} jobId
 */
exports.TodoCreate = TodoCreate;
TodoCreate.prototype.jobId = undefined;

/**
 * The ID of the Milestone related to the Todo task
 * @member {String} milestoneId
 */
TodoCreate.prototype.milestoneId = undefined;

/**
 * The ID of the Part related to the Todo task
 * @member {String} partId
 */
TodoCreate.prototype.partId = undefined;

/**
 * The ID of the Person assigned to the Todo task
 * @member {String} assignedToId
 */
TodoCreate.prototype.assignedToId = undefined;

/**
 * The ID of the Person who created the task
 * @member {String} creatorId
 */
TodoCreate.prototype.creatorId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
TodoCreate.KindEnum = {
  /**
   * value: "check_print_data"
   * @const
   */
  checkPrintData: "check_print_data",
  /**
   * value: "customer_review"
   * @const
   */
  customerReview: "customer_review",
  /**
   * value: "procurement"
   * @const
   */
  procurement: "procurement"
};
/**
 * @member {module:model/TodoCreate.KindEnum} kind
 */
TodoCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
TodoCreate.StateEnum = {
  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled",
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
  /**
   * value: "draft"
   * @const
   */
  draft: "draft",
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",
  /**
   * value: "running"
   * @const
   */
  running: "running",
  /**
   * value: "started"
   * @const
   */
  started: "started"
};
/**
 * The current state of this Todo - an indication of where in the completion lifecycle it is.
 * @member {module:model/TodoCreate.StateEnum} state
 */
TodoCreate.prototype.state = undefined;

/**
 * Numeric indicator of Todo task completion (0 - starting to 1 - completed).
 * @member {String} progress
 */
TodoCreate.prototype.progress = undefined;

/**
 * The date at which todo task is planned to be completed.
 * @member {Date} dueAt
 */
TodoCreate.prototype.dueAt = undefined;

/**
 * The date at which todo task was marked as started.
 * @member {Date} startedAt
 */
TodoCreate.prototype.startedAt = undefined;

/**
 * The date at which todo task reached was marked as completed.
 * @member {Date} completedAt
 */
TodoCreate.prototype.completedAt = undefined;

/**
 * The date at which this todo was canceled.
 * @member {Date} canceledAt
 */
TodoCreate.prototype.canceledAt = undefined;