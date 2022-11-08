"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepGroup = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepGroup model module.
 * @module model/WorkstepGroup
 * @version 1.0.0
 */
var WorkstepGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepGroup</code>.
   * @alias module:model/WorkstepGroup
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/WorkstepGroup.KindEnum} The kind all worksteps within this group must adhere to
   * @param phase {module:model/WorkstepGroup.PhaseEnum} The calculated current phase of this group. Read only
   * @param state {module:model/WorkstepGroup.StateEnum} The calculated state of this group. Read only
   * @param completionPercent {String} The current completion percentage of all worksteps within this group
   * @param managed {Boolean} A managed group allows simple updates to be applied to the whole group of worksteps as opposed to individual worksteps within the group. Good for less complex use cases to reduce complexity of integration and reporting.
   * @param tainted {Boolean} Managed state can only be manually updated if the group has never received a granular update to one of the worksteps within the group. If the group has received such an update then the managed state will be set to false and this value will be true, indicating that it is impossible to revert the group back to a managed state
   */
  function WorkstepGroup(id, createdAt, updatedAt, kind, phase, state, completionPercent, managed, tainted) {
    _classCallCheck(this, WorkstepGroup);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
    this.phase = phase;
    this.state = state;
    this.completionPercent = completionPercent;
    this.managed = managed;
    this.tainted = tainted;
  }

  /**
   * Constructs a <code>WorkstepGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepGroup} obj Optional instance to populate.
   * @return {module:model/WorkstepGroup} The populated <code>WorkstepGroup</code> instance.
   */
  _createClass(WorkstepGroup, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepGroup();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('phase')) obj.phase = _ApiClient.ApiClient.convertToType(data['phase'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('completion_percent')) obj.completionPercent = _ApiClient.ApiClient.convertToType(data['completion_percent'], 'String');
        if (data.hasOwnProperty('managed')) obj.managed = _ApiClient.ApiClient.convertToType(data['managed'], 'Boolean');
        if (data.hasOwnProperty('tainted')) obj.tainted = _ApiClient.ApiClient.convertToType(data['tainted'], 'Boolean');
      }
      return obj;
    }
  }]);
  return WorkstepGroup;
}();
/**
 * @member {String} id
 */
exports.WorkstepGroup = WorkstepGroup;
WorkstepGroup.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
WorkstepGroup.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
WorkstepGroup.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepGroup.KindEnum = {
  /**
   * value: "ctp"
   * @const
   */
  ctp: "ctp",
  /**
   * value: "digital_printing"
   * @const
   */
  digitalPrinting: "digital_printing",
  /**
   * value: "digital_web_printing"
   * @const
   */
  digitalWebPrinting: "digital_web_printing",
  /**
   * value: "inkjet_printing"
   * @const
   */
  inkjetPrinting: "inkjet_printing",
  /**
   * value: "inket_web_printing"
   * @const
   */
  inketWebPrinting: "inket_web_printing",
  /**
   * value: "offset_printing"
   * @const
   */
  offsetPrinting: "offset_printing",
  /**
   * value: "offset_uv_printing"
   * @const
   */
  offsetUvPrinting: "offset_uv_printing",
  /**
   * value: "offset_uvle_printing"
   * @const
   */
  offsetUvlePrinting: "offset_uvle_printing",
  /**
   * value: "offset_web_printing"
   * @const
   */
  offsetWebPrinting: "offset_web_printing",
  /**
   * value: "offset_web_uv_printing"
   * @const
   */
  offsetWebUvPrinting: "offset_web_uv_printing",
  /**
   * value: "offset_web_uvle_printing"
   * @const
   */
  offsetWebUvlePrinting: "offset_web_uvle_printing",
  /**
   * value: "flexo_printing"
   * @const
   */
  flexoPrinting: "flexo_printing",
  /**
   * value: "letterpress_printing"
   * @const
   */
  letterpressPrinting: "letterpress_printing",
  /**
   * value: "pad_printing"
   * @const
   */
  padPrinting: "pad_printing",
  /**
   * value: "pre_cutting"
   * @const
   */
  preCutting: "pre_cutting",
  /**
   * value: "cutting"
   * @const
   */
  cutting: "cutting",
  /**
   * value: "intermediate_cutting"
   * @const
   */
  intermediateCutting: "intermediate_cutting",
  /**
   * value: "folding"
   * @const
   */
  folding: "folding",
  /**
   * value: "laminating"
   * @const
   */
  laminating: "laminating",
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding",
  /**
   * value: "hole_drilling"
   * @const
   */
  holeDrilling: "hole_drilling",
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding",
  /**
   * value: "embossing"
   * @const
   */
  embossing: "embossing",
  /**
   * value: "engraving"
   * @const
   */
  engraving: "engraving",
  /**
   * value: "foil_stamping"
   * @const
   */
  foilStamping: "foil_stamping",
  /**
   * value: "gluing"
   * @const
   */
  gluing: "gluing",
  /**
   * value: "head_banding"
   * @const
   */
  headBanding: "head_banding",
  /**
   * value: "perforating"
   * @const
   */
  perforating: "perforating",
  /**
   * value: "ring_binding"
   * @const
   */
  ringBinding: "ring_binding",
  /**
   * value: "saddle_stitching"
   * @const
   */
  saddleStitching: "saddle_stitching",
  /**
   * value: "spiral_binding"
   * @const
   */
  spiralBinding: "spiral_binding",
  /**
   * value: "strip_binding"
   * @const
   */
  stripBinding: "strip_binding",
  /**
   * value: "thread_sewing"
   * @const
   */
  threadSewing: "thread_sewing",
  /**
   * value: "envelope_stuffing"
   * @const
   */
  envelopeStuffing: "envelope_stuffing",
  /**
   * value: "counting"
   * @const
   */
  counting: "counting",
  /**
   * value: "wrapping"
   * @const
   */
  wrapping: "wrapping",
  /**
   * value: "boxing"
   * @const
   */
  boxing: "boxing",
  /**
   * value: "shrink_wrapping"
   * @const
   */
  shrinkWrapping: "shrink_wrapping",
  /**
   * value: "addressing"
   * @const
   */
  addressing: "addressing",
  /**
   * value: "franking"
   * @const
   */
  franking: "franking"
};
/**
 * The kind all worksteps within this group must adhere to
 * @member {module:model/WorkstepGroup.KindEnum} kind
 */
WorkstepGroup.prototype.kind = undefined;

/**
 * Allowed values for the <code>phase</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepGroup.PhaseEnum = {
  /**
   * value: "preparation"
   * @const
   */
  preparation: "preparation",
  /**
   * value: "execution"
   * @const
   */
  execution: "execution",
  /**
   * value: "cleanup"
   * @const
   */
  cleanup: "cleanup"
};
/**
 * The calculated current phase of this group. Read only
 * @member {module:model/WorkstepGroup.PhaseEnum} phase
 */
WorkstepGroup.prototype.phase = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepGroup.StateEnum = {
  /**
   * value: "waiting"
   * @const
   */
  waiting: "waiting",
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
   * value: "paused"
   * @const
   */
  paused: "paused",
  /**
   * value: "completed"
   * @const
   */
  completed: "completed",
  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled"
};
/**
 * The calculated state of this group. Read only
 * @member {module:model/WorkstepGroup.StateEnum} state
 */
WorkstepGroup.prototype.state = undefined;

/**
 * The current completion percentage of all worksteps within this group
 * @member {String} completionPercent
 */
WorkstepGroup.prototype.completionPercent = undefined;

/**
 * A managed group allows simple updates to be applied to the whole group of worksteps as opposed to individual worksteps within the group. Good for less complex use cases to reduce complexity of integration and reporting.
 * @member {Boolean} managed
 */
WorkstepGroup.prototype.managed = undefined;

/**
 * Managed state can only be manually updated if the group has never received a granular update to one of the worksteps within the group. If the group has received such an update then the managed state will be set to false and this value will be true, indicating that it is impossible to revert the group back to a managed state
 * @member {Boolean} tainted
 */
WorkstepGroup.prototype.tainted = undefined;