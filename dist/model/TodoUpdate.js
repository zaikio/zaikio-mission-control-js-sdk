"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TodoUpdate model module.
 * @module model/TodoUpdate
 * @version 1.0.0
 */
var TodoUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TodoUpdate</code>.
   * @alias module:model/TodoUpdate
   * @class
   */
  function TodoUpdate() {
    _classCallCheck(this, TodoUpdate);
  }

  /**
   * Constructs a <code>TodoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TodoUpdate} obj Optional instance to populate.
   * @return {module:model/TodoUpdate} The populated <code>TodoUpdate</code> instance.
   */
  _createClass(TodoUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TodoUpdate();
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
  return TodoUpdate;
}();
/**
 * The ID of the Job related to the Todo task
 * @member {String} jobId
 */
exports.TodoUpdate = TodoUpdate;
TodoUpdate.prototype.jobId = undefined;

/**
 * The ID of the Milestone related to the Todo task
 * @member {String} milestoneId
 */
TodoUpdate.prototype.milestoneId = undefined;

/**
 * The ID of the Part related to the Todo task
 * @member {String} partId
 */
TodoUpdate.prototype.partId = undefined;

/**
 * The ID of the Person assigned to the Todo task
 * @member {String} assignedToId
 */
TodoUpdate.prototype.assignedToId = undefined;

/**
 * The ID of the Person who created the task
 * @member {String} creatorId
 */
TodoUpdate.prototype.creatorId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
TodoUpdate.KindEnum = {
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
 * @member {module:model/TodoUpdate.KindEnum} kind
 */
TodoUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
TodoUpdate.StateEnum = {
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
 * @member {module:model/TodoUpdate.StateEnum} state
 */
TodoUpdate.prototype.state = undefined;

/**
 * Numeric indicator of Todo task completion (0 - starting to 1 - completed).
 * @member {String} progress
 */
TodoUpdate.prototype.progress = undefined;

/**
 * The date at which todo task is planned to be completed.
 * @member {Date} dueAt
 */
TodoUpdate.prototype.dueAt = undefined;

/**
 * The date at which todo task was marked as started.
 * @member {Date} startedAt
 */
TodoUpdate.prototype.startedAt = undefined;

/**
 * The date at which todo task reached was marked as completed.
 * @member {Date} completedAt
 */
TodoUpdate.prototype.completedAt = undefined;

/**
 * The date at which this todo was canceled.
 * @member {Date} canceledAt
 */
TodoUpdate.prototype.canceledAt = undefined;