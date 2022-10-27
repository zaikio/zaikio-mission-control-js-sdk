"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Milestone = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.0.0
 */
var Milestone = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Milestone</code>.
   * @alias module:model/Milestone
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/Milestone.KindEnum} The kind of a milestone represents the classification of that Milestone within the printing life cycle. This could be something well-known such as \"prepress\" or for custom groups of Worksteps, can be set to \"custom\", in which case it is required to set the `description` attribute.
   * @param description {String} A short, human readable description of this Milestone. Required to be used if the `kind` attribute is set to `custom`, otherwise optional.
   * @param position {Number} A simple sort-order of the Milestones for this job. The lower the number, the earlier in the workflow this Milestone sits. If no `custom` Milestones are present, this can be left blank for all milestones and they will be sorted accordingly.
   * @param jobId {String} 
   * @param expectedStartAt {Date} The predicted or expected starting timestamp for worksteps within this Milestone to be commenced.
   * @param actualStartAt {Date} The actual time that work on this Milestone was begun. Automatically calculated from the first commenced workstep within the Milestone if not explicitly set.
   * @param expectedFinishAt {Date} The predicted or expected finishing timestamp for worksteps within this Milestone to be completed.
   * @param actualFinishAt {Date} The actual time that work on this Milestone was completed. Automatically calculated from the final completion timestamp of the contained worksteps if not explicitly set.
   * @param lastUpdateAt {Date} The last time a Workstep within this Milestone was updated.
   */
  function Milestone(id, createdAt, updatedAt, kind, description, position, jobId, expectedStartAt, actualStartAt, expectedFinishAt, actualFinishAt, lastUpdateAt) {
    _classCallCheck(this, Milestone);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
    this.description = description;
    this.position = position;
    this.jobId = jobId;
    this.expectedStartAt = expectedStartAt;
    this.actualStartAt = actualStartAt;
    this.expectedFinishAt = expectedFinishAt;
    this.actualFinishAt = actualFinishAt;
    this.lastUpdateAt = lastUpdateAt;
  }

  /**
   * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Milestone} obj Optional instance to populate.
   * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
   */
  _createClass(Milestone, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Milestone();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('position')) obj.position = _ApiClient.ApiClient.convertToType(data['position'], 'Number');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('expected_start_at')) obj.expectedStartAt = _ApiClient.ApiClient.convertToType(data['expected_start_at'], 'Date');
        if (data.hasOwnProperty('actual_start_at')) obj.actualStartAt = _ApiClient.ApiClient.convertToType(data['actual_start_at'], 'Date');
        if (data.hasOwnProperty('expected_finish_at')) obj.expectedFinishAt = _ApiClient.ApiClient.convertToType(data['expected_finish_at'], 'Date');
        if (data.hasOwnProperty('actual_finish_at')) obj.actualFinishAt = _ApiClient.ApiClient.convertToType(data['actual_finish_at'], 'Date');
        if (data.hasOwnProperty('last_update_at')) obj.lastUpdateAt = _ApiClient.ApiClient.convertToType(data['last_update_at'], 'Date');
      }
      return obj;
    }
  }]);
  return Milestone;
}();
/**
 * @member {String} id
 */
exports.Milestone = Milestone;
Milestone.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Milestone.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Milestone.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Milestone.KindEnum = {
  /**
   * value: "estimation"
   * @const
   */
  estimation: "estimation",
  /**
   * value: "logistics"
   * @const
   */
  logistics: "logistics",
  /**
   * value: "other"
   * @const
   */
  other: "other",
  /**
   * value: "postpress"
   * @const
   */
  postpress: "postpress",
  /**
   * value: "prepress"
   * @const
   */
  prepress: "prepress",
  /**
   * value: "press"
   * @const
   */
  press: "press"
};
/**
 * The kind of a milestone represents the classification of that Milestone within the printing life cycle. This could be something well-known such as \"prepress\" or for custom groups of Worksteps, can be set to \"custom\", in which case it is required to set the `description` attribute.
 * @member {module:model/Milestone.KindEnum} kind
 */
Milestone.prototype.kind = undefined;

/**
 * A short, human readable description of this Milestone. Required to be used if the `kind` attribute is set to `custom`, otherwise optional.
 * @member {String} description
 */
Milestone.prototype.description = undefined;

/**
 * A simple sort-order of the Milestones for this job. The lower the number, the earlier in the workflow this Milestone sits. If no `custom` Milestones are present, this can be left blank for all milestones and they will be sorted accordingly.
 * @member {Number} position
 */
Milestone.prototype.position = undefined;

/**
 * @member {String} jobId
 */
Milestone.prototype.jobId = undefined;

/**
 * The predicted or expected starting timestamp for worksteps within this Milestone to be commenced.
 * @member {Date} expectedStartAt
 */
Milestone.prototype.expectedStartAt = undefined;

/**
 * The actual time that work on this Milestone was begun. Automatically calculated from the first commenced workstep within the Milestone if not explicitly set.
 * @member {Date} actualStartAt
 */
Milestone.prototype.actualStartAt = undefined;

/**
 * The predicted or expected finishing timestamp for worksteps within this Milestone to be completed.
 * @member {Date} expectedFinishAt
 */
Milestone.prototype.expectedFinishAt = undefined;

/**
 * The actual time that work on this Milestone was completed. Automatically calculated from the final completion timestamp of the contained worksteps if not explicitly set.
 * @member {Date} actualFinishAt
 */
Milestone.prototype.actualFinishAt = undefined;

/**
 * The last time a Workstep within this Milestone was updated.
 * @member {Date} lastUpdateAt
 */
Milestone.prototype.lastUpdateAt = undefined;