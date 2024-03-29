/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The WorkstepGroupUpdate model module.
 * @module model/WorkstepGroupUpdate
 * @version 1.0.0
 */
export class WorkstepGroupUpdate {
  /**
   * Constructs a new <code>WorkstepGroupUpdate</code>.
   * @alias module:model/WorkstepGroupUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkstepGroupUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepGroupUpdate} obj Optional instance to populate.
   * @return {module:model/WorkstepGroupUpdate} The populated <code>WorkstepGroupUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkstepGroupUpdate();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('completion_percent'))
        obj.completionPercent = ApiClient.convertToType(data['completion_percent'], 'String');
      if (data.hasOwnProperty('managed'))
        obj.managed = ApiClient.convertToType(data['managed'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
WorkstepGroupUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
WorkstepGroupUpdate.KindEnum = {
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
 * @member {module:model/WorkstepGroupUpdate.KindEnum} kind
 */
WorkstepGroupUpdate.prototype.kind = undefined;

/**
 * The current completion percentage of all worksteps within this group
 * @member {String} completionPercent
 */
WorkstepGroupUpdate.prototype.completionPercent = undefined;

/**
 * A managed group allows simple updates to be applied to the whole group of worksteps as opposed to individual worksteps within the group. Good for less complex use cases to reduce complexity of integration and reporting.
 * @member {Boolean} managed
 */
WorkstepGroupUpdate.prototype.managed = undefined;

