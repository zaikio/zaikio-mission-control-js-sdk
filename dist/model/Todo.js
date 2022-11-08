"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Todo = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Todo model module.
 * @module model/Todo
 * @version 1.0.0
 */
var Todo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Todo</code>.
   * @alias module:model/Todo
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param jobId {String} The ID of the Job related to the Todo task
   * @param milestoneId {String} The ID of the Milestone related to the Todo task
   * @param partId {String} The ID of the Part related to the Todo task
   * @param assignedToId {String} The ID of the Person assigned to the Todo task
   * @param creatorId {String} The ID of the Person who created the task
   * @param kind {module:model/Todo.KindEnum} 
   * @param state {module:model/Todo.StateEnum} The current state of this Todo - an indication of where in the completion lifecycle it is.
   * @param progress {String} Numeric indicator of Todo task completion (0 - starting to 1 - completed).
   * @param dueAt {Date} The date at which todo task is planned to be completed.
   * @param startedAt {Date} The date at which todo task was marked as started.
   * @param completedAt {Date} The date at which todo task reached was marked as completed.
   * @param canceledAt {Date} The date at which this todo was canceled.
   */
  function Todo(id, createdAt, updatedAt, jobId, milestoneId, partId, assignedToId, creatorId, kind, state, progress, dueAt, startedAt, completedAt, canceledAt) {
    _classCallCheck(this, Todo);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.jobId = jobId;
    this.milestoneId = milestoneId;
    this.partId = partId;
    this.assignedToId = assignedToId;
    this.creatorId = creatorId;
    this.kind = kind;
    this.state = state;
    this.progress = progress;
    this.dueAt = dueAt;
    this.startedAt = startedAt;
    this.completedAt = completedAt;
    this.canceledAt = canceledAt;
  }

  /**
   * Constructs a <code>Todo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Todo} obj Optional instance to populate.
   * @return {module:model/Todo} The populated <code>Todo</code> instance.
   */
  _createClass(Todo, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Todo();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
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
  return Todo;
}();
/**
 * @member {String} id
 */
exports.Todo = Todo;
Todo.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Todo.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Todo.prototype.updatedAt = undefined;

/**
 * The ID of the Job related to the Todo task
 * @member {String} jobId
 */
Todo.prototype.jobId = undefined;

/**
 * The ID of the Milestone related to the Todo task
 * @member {String} milestoneId
 */
Todo.prototype.milestoneId = undefined;

/**
 * The ID of the Part related to the Todo task
 * @member {String} partId
 */
Todo.prototype.partId = undefined;

/**
 * The ID of the Person assigned to the Todo task
 * @member {String} assignedToId
 */
Todo.prototype.assignedToId = undefined;

/**
 * The ID of the Person who created the task
 * @member {String} creatorId
 */
Todo.prototype.creatorId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Todo.KindEnum = {
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
 * @member {module:model/Todo.KindEnum} kind
 */
Todo.prototype.kind = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Todo.StateEnum = {
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
 * @member {module:model/Todo.StateEnum} state
 */
Todo.prototype.state = undefined;

/**
 * Numeric indicator of Todo task completion (0 - starting to 1 - completed).
 * @member {String} progress
 */
Todo.prototype.progress = undefined;

/**
 * The date at which todo task is planned to be completed.
 * @member {Date} dueAt
 */
Todo.prototype.dueAt = undefined;

/**
 * The date at which todo task was marked as started.
 * @member {Date} startedAt
 */
Todo.prototype.startedAt = undefined;

/**
 * The date at which todo task reached was marked as completed.
 * @member {Date} completedAt
 */
Todo.prototype.completedAt = undefined;

/**
 * The date at which this todo was canceled.
 * @member {Date} canceledAt
 */
Todo.prototype.canceledAt = undefined;