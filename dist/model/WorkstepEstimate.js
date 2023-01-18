"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepEstimate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepEstimate model module.
 * @module model/WorkstepEstimate
 * @version 1.0.0
 */
var WorkstepEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepEstimate</code>.
   * @alias module:model/WorkstepEstimate
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param estimateId {String} 
   * @param workpieceType {module:model/WorkstepEstimate.WorkpieceTypeEnum} The object type to which the `workpiece_id` refers. Both are required to look up a Workpiece.
   * @param workpieceId {String} 
   * @param kind {module:model/WorkstepEstimate.KindEnum} The kind of this workstep. Must be one of the workstep kinds known for shopfloor worksteps, or a kind that is only used for workstep estimates (see list below). This can also be set to other, for semantically unknown worksteps, but in this case the description property must be set.
   * @param description {String} A more detailed description of the workstep than `kind`. It is optional, but must be filled out if `kind` is set to `other`.
   * @param internalLaborCosts {Number} The internal labour costs associated with this workstep. Internal labor is all labor that is performed by employees of the producing organisation. The amount is given in the integer sub-unit of the currency selected in the parent estimates' `currency` property (i.e. cents).
   * @param externalLaborCosts {Number} The external labour costs associated with this workstep. External labour costs are all costs associated with non-employees. The amount is given in the integer sub-unit of the currency selected in the parent estimates' `currency` property (i.e. cents).
   * @param durationForPreparation {Number} The estimated time in seconds that is required to perform all operations necessary in preparation of the estimated workstep.
   * @param durationForExecution {Number} The estimated time in seconds that is required to execute of the estimated workstep.
   * @param durationForCleanup {Number} The estimated time in seconds that is required to perform all operations necessary to clean up after the execution of the estimated workstep.
   */
  function WorkstepEstimate(id, createdAt, updatedAt, estimateId, workpieceType, workpieceId, kind, description, internalLaborCosts, externalLaborCosts, durationForPreparation, durationForExecution, durationForCleanup) {
    _classCallCheck(this, WorkstepEstimate);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.estimateId = estimateId;
    this.workpieceType = workpieceType;
    this.workpieceId = workpieceId;
    this.kind = kind;
    this.description = description;
    this.internalLaborCosts = internalLaborCosts;
    this.externalLaborCosts = externalLaborCosts;
    this.durationForPreparation = durationForPreparation;
    this.durationForExecution = durationForExecution;
    this.durationForCleanup = durationForCleanup;
  }

  /**
   * Constructs a <code>WorkstepEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepEstimate} obj Optional instance to populate.
   * @return {module:model/WorkstepEstimate} The populated <code>WorkstepEstimate</code> instance.
   */
  _createClass(WorkstepEstimate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepEstimate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('estimate_id')) obj.estimateId = _ApiClient.ApiClient.convertToType(data['estimate_id'], 'String');
        if (data.hasOwnProperty('workpiece_type')) obj.workpieceType = _ApiClient.ApiClient.convertToType(data['workpiece_type'], 'String');
        if (data.hasOwnProperty('workpiece_id')) obj.workpieceId = _ApiClient.ApiClient.convertToType(data['workpiece_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('internal_labor_costs')) obj.internalLaborCosts = _ApiClient.ApiClient.convertToType(data['internal_labor_costs'], 'Number');
        if (data.hasOwnProperty('external_labor_costs')) obj.externalLaborCosts = _ApiClient.ApiClient.convertToType(data['external_labor_costs'], 'Number');
        if (data.hasOwnProperty('duration_for_preparation')) obj.durationForPreparation = _ApiClient.ApiClient.convertToType(data['duration_for_preparation'], 'Number');
        if (data.hasOwnProperty('duration_for_execution')) obj.durationForExecution = _ApiClient.ApiClient.convertToType(data['duration_for_execution'], 'Number');
        if (data.hasOwnProperty('duration_for_cleanup')) obj.durationForCleanup = _ApiClient.ApiClient.convertToType(data['duration_for_cleanup'], 'Number');
      }
      return obj;
    }
  }]);
  return WorkstepEstimate;
}();
/**
 * @member {String} id
 */
exports.WorkstepEstimate = WorkstepEstimate;
WorkstepEstimate.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
WorkstepEstimate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
WorkstepEstimate.prototype.updatedAt = undefined;

/**
 * @member {String} estimateId
 */
WorkstepEstimate.prototype.estimateId = undefined;

/**
 * Allowed values for the <code>workpieceType</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepEstimate.WorkpieceTypeEnum = {
  /**
   * value: "Job"
   * @const
   */
  job: "Job",
  /**
   * value: "Part"
   * @const
   */
  part: "Part",
  /**
   * value: "Packaging"
   * @const
   */
  packaging: "Packaging",
  /**
   * value: "Finishing"
   * @const
   */
  finishing: "Finishing"
};
/**
 * The object type to which the `workpiece_id` refers. Both are required to look up a Workpiece.
 * @member {module:model/WorkstepEstimate.WorkpieceTypeEnum} workpieceType
 */
WorkstepEstimate.prototype.workpieceType = undefined;

/**
 * @member {String} workpieceId
 */
WorkstepEstimate.prototype.workpieceId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepEstimate.KindEnum = {
  /**
   * value: "addressing"
   * @const
   */
  addressing: "addressing",
  /**
   * value: "boxing"
   * @const
   */
  boxing: "boxing",
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding",
  /**
   * value: "counting"
   * @const
   */
  counting: "counting",
  /**
   * value: "ctp"
   * @const
   */
  ctp: "ctp",
  /**
   * value: "cutting"
   * @const
   */
  cutting: "cutting",
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
   * value: "envelope_stuffing"
   * @const
   */
  envelopeStuffing: "envelope_stuffing",
  /**
   * value: "flexo_printing"
   * @const
   */
  flexoPrinting: "flexo_printing",
  /**
   * value: "foil_stamping"
   * @const
   */
  foilStamping: "foil_stamping",
  /**
   * value: "folding"
   * @const
   */
  folding: "folding",
  /**
   * value: "franking"
   * @const
   */
  franking: "franking",
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
   * value: "hole_drilling"
   * @const
   */
  holeDrilling: "hole_drilling",
  /**
   * value: "inket_web_printing"
   * @const
   */
  inketWebPrinting: "inket_web_printing",
  /**
   * value: "inkjet_printing"
   * @const
   */
  inkjetPrinting: "inkjet_printing",
  /**
   * value: "intermediate_cutting"
   * @const
   */
  intermediateCutting: "intermediate_cutting",
  /**
   * value: "laminating"
   * @const
   */
  laminating: "laminating",
  /**
   * value: "letterpress_printing"
   * @const
   */
  letterpressPrinting: "letterpress_printing",
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
   * value: "pad_printing"
   * @const
   */
  padPrinting: "pad_printing",
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding",
  /**
   * value: "perforating"
   * @const
   */
  perforating: "perforating",
  /**
   * value: "pre_cutting"
   * @const
   */
  preCutting: "pre_cutting",
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
   * value: "shrink_wrapping"
   * @const
   */
  shrinkWrapping: "shrink_wrapping",
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
   * value: "wrapping"
   * @const
   */
  wrapping: "wrapping"
};
/**
 * The kind of this workstep. Must be one of the workstep kinds known for shopfloor worksteps, or a kind that is only used for workstep estimates (see list below). This can also be set to other, for semantically unknown worksteps, but in this case the description property must be set.
 * @member {module:model/WorkstepEstimate.KindEnum} kind
 */
WorkstepEstimate.prototype.kind = undefined;

/**
 * A more detailed description of the workstep than `kind`. It is optional, but must be filled out if `kind` is set to `other`.
 * @member {String} description
 */
WorkstepEstimate.prototype.description = undefined;

/**
 * The internal labour costs associated with this workstep. Internal labor is all labor that is performed by employees of the producing organisation. The amount is given in the integer sub-unit of the currency selected in the parent estimates' `currency` property (i.e. cents).
 * @member {Number} internalLaborCosts
 */
WorkstepEstimate.prototype.internalLaborCosts = undefined;

/**
 * The external labour costs associated with this workstep. External labour costs are all costs associated with non-employees. The amount is given in the integer sub-unit of the currency selected in the parent estimates' `currency` property (i.e. cents).
 * @member {Number} externalLaborCosts
 */
WorkstepEstimate.prototype.externalLaborCosts = undefined;

/**
 * The estimated time in seconds that is required to perform all operations necessary in preparation of the estimated workstep.
 * @member {Number} durationForPreparation
 */
WorkstepEstimate.prototype.durationForPreparation = undefined;

/**
 * The estimated time in seconds that is required to execute of the estimated workstep.
 * @member {Number} durationForExecution
 */
WorkstepEstimate.prototype.durationForExecution = undefined;

/**
 * The estimated time in seconds that is required to perform all operations necessary to clean up after the execution of the estimated workstep.
 * @member {Number} durationForCleanup
 */
WorkstepEstimate.prototype.durationForCleanup = undefined;