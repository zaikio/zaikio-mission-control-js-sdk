"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepCreate model module.
 * @module model/WorkstepCreate
 * @version 1.0.0
 */
var WorkstepCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepCreate</code>.
   * @alias module:model/WorkstepCreate
   * @class
   */
  function WorkstepCreate() {
    _classCallCheck(this, WorkstepCreate);
  }

  /**
   * Constructs a <code>WorkstepCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepCreate} obj Optional instance to populate.
   * @return {module:model/WorkstepCreate} The populated <code>WorkstepCreate</code> instance.
   */
  _createClass(WorkstepCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('grouping_id')) obj.groupingId = _ApiClient.ApiClient.convertToType(data['grouping_id'], 'String');
        if (data.hasOwnProperty('expected_costs_for_work')) obj.expectedCostsForWork = _ApiClient.ApiClient.convertToType(data['expected_costs_for_work'], 'Number');
        if (data.hasOwnProperty('expected_costs_for_materials')) obj.expectedCostsForMaterials = _ApiClient.ApiClient.convertToType(data['expected_costs_for_materials'], 'Number');
        if (data.hasOwnProperty('expected_duration_for_preparation')) obj.expectedDurationForPreparation = _ApiClient.ApiClient.convertToType(data['expected_duration_for_preparation'], 'Number');
        if (data.hasOwnProperty('expected_duration_for_execution')) obj.expectedDurationForExecution = _ApiClient.ApiClient.convertToType(data['expected_duration_for_execution'], 'Number');
        if (data.hasOwnProperty('expected_duration_for_cleanup')) obj.expectedDurationForCleanup = _ApiClient.ApiClient.convertToType(data['expected_duration_for_cleanup'], 'Number');
        if (data.hasOwnProperty('actual_costs_for_work')) obj.actualCostsForWork = _ApiClient.ApiClient.convertToType(data['actual_costs_for_work'], 'Number');
        if (data.hasOwnProperty('actual_costs_for_materials')) obj.actualCostsForMaterials = _ApiClient.ApiClient.convertToType(data['actual_costs_for_materials'], 'Number');
        if (data.hasOwnProperty('actual_duration_for_preparation')) obj.actualDurationForPreparation = _ApiClient.ApiClient.convertToType(data['actual_duration_for_preparation'], 'Number');
        if (data.hasOwnProperty('actual_duration_for_execution')) obj.actualDurationForExecution = _ApiClient.ApiClient.convertToType(data['actual_duration_for_execution'], 'Number');
        if (data.hasOwnProperty('actual_duration_for_cleanup')) obj.actualDurationForCleanup = _ApiClient.ApiClient.convertToType(data['actual_duration_for_cleanup'], 'Number');
        if (data.hasOwnProperty('actual_duration_for_exception')) obj.actualDurationForException = _ApiClient.ApiClient.convertToType(data['actual_duration_for_exception'], 'Number');
      }
      return obj;
    }
  }]);
  return WorkstepCreate;
}();
/**
 * @member {String} id
 */
exports.WorkstepCreate = WorkstepCreate;
WorkstepCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepCreate.KindEnum = {
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
 * @member {module:model/WorkstepCreate.KindEnum} kind
 */
WorkstepCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepCreate.StateEnum = {
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
 * The current state of this Workstep - an indication of where in the lifecycle it is. Depending on the job reporting progress, not all steps might be followed linearly.
 * @member {module:model/WorkstepCreate.StateEnum} state
 */
WorkstepCreate.prototype.state = undefined;

/**
 * The ID of the group this workstep is part of
 * @member {String} groupingId
 */
WorkstepCreate.prototype.groupingId = undefined;

/**
 * # TODO
 * @member {Number} expectedCostsForWork
 */
WorkstepCreate.prototype.expectedCostsForWork = undefined;

/**
 * # TODO
 * @member {Number} expectedCostsForMaterials
 */
WorkstepCreate.prototype.expectedCostsForMaterials = undefined;

/**
 * # TODO
 * @member {Number} expectedDurationForPreparation
 */
WorkstepCreate.prototype.expectedDurationForPreparation = undefined;

/**
 * # TODO
 * @member {Number} expectedDurationForExecution
 */
WorkstepCreate.prototype.expectedDurationForExecution = undefined;

/**
 * # TODO
 * @member {Number} expectedDurationForCleanup
 */
WorkstepCreate.prototype.expectedDurationForCleanup = undefined;

/**
 * # TODO
 * @member {Number} actualCostsForWork
 */
WorkstepCreate.prototype.actualCostsForWork = undefined;

/**
 * # TODO
 * @member {Number} actualCostsForMaterials
 */
WorkstepCreate.prototype.actualCostsForMaterials = undefined;

/**
 * # TODO
 * @member {Number} actualDurationForPreparation
 */
WorkstepCreate.prototype.actualDurationForPreparation = undefined;

/**
 * # TODO
 * @member {Number} actualDurationForExecution
 */
WorkstepCreate.prototype.actualDurationForExecution = undefined;

/**
 * # TODO
 * @member {Number} actualDurationForCleanup
 */
WorkstepCreate.prototype.actualDurationForCleanup = undefined;

/**
 * # TODO
 * @member {Number} actualDurationForException
 */
WorkstepCreate.prototype.actualDurationForException = undefined;