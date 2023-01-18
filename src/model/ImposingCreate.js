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
import {SignatureCreate} from './SignatureCreate';

/**
 * The ImposingCreate model module.
 * @module model/ImposingCreate
 * @version 1.0.0
 */
export class ImposingCreate {
  /**
   * Constructs a new <code>ImposingCreate</code>.
   * @alias module:model/ImposingCreate
   * @class
   * @param partId {String} The ID of the Part this Imposing provides
   */
  constructor(partId) {
    this.partId = partId;
  }

  /**
   * Constructs a <code>ImposingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImposingCreate} obj Optional instance to populate.
   * @return {module:model/ImposingCreate} The populated <code>ImposingCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ImposingCreate();
      if (data.hasOwnProperty('part_id'))
        obj.partId = ApiClient.convertToType(data['part_id'], 'String');
      if (data.hasOwnProperty('technique'))
        obj.technique = ApiClient.convertToType(data['technique'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('signature_mixing'))
        obj.signatureMixing = ApiClient.convertToType(data['signature_mixing'], 'String');
      if (data.hasOwnProperty('orientation'))
        obj.orientation = ApiClient.convertToType(data['orientation'], 'String');
      if (data.hasOwnProperty('machine_id'))
        obj.machineId = ApiClient.convertToType(data['machine_id'], 'String');
      if (data.hasOwnProperty('requested_machine_id'))
        obj.requestedMachineId = ApiClient.convertToType(data['requested_machine_id'], 'String');
      if (data.hasOwnProperty('signatures'))
        obj.signatures = ApiClient.convertToType(data['signatures'], [SignatureCreate]);
      if (data.hasOwnProperty('substrate'))
        obj.substrate = ApiClient.convertToType(data['substrate'], Object);
    }
    return obj;
  }
}

/**
 * The ID of the Part this Imposing provides
 * @member {String} partId
 */
ImposingCreate.prototype.partId = undefined;

/**
 * Allowed values for the <code>technique</code> property.
 * @enum {String}
 * @readonly
 */
ImposingCreate.TechniqueEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "digital"
   * @const
   */
  digital: "digital",

  /**
   * value: "offset"
   * @const
   */
  offset: "offset",

  /**
   * value: "offset_uv"
   * @const
   */
  offsetUv: "offset_uv",

  /**
   * value: "digital_web"
   * @const
   */
  digitalWeb: "digital_web",

  /**
   * value: "offset_web"
   * @const
   */
  offsetWeb: "offset_web",

  /**
   * value: "inkjet"
   * @const
   */
  inkjet: "inkjet",

  /**
   * value: "inkjet_web"
   * @const
   */
  inkjetWeb: "inkjet_web",

  /**
   * value: "pad"
   * @const
   */
  pad: "pad",

  /**
   * value: "letterpress"
   * @const
   */
  letterpress: "letterpress"
};
/**
 * The printing technique that has been selected for this Imposing.
 * @member {module:model/ImposingCreate.TechniqueEnum} technique
 */
ImposingCreate.prototype.technique = undefined;

/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ImposingCreate.ModeEnum = {
  /**
   * value: "perfecting"
   * @const
   */
  perfecting: "perfecting",

  /**
   * value: "turn_or_tumble"
   * @const
   */
  turnOrTumble: "turn_or_tumble",

  /**
   * value: "turn"
   * @const
   */
  turn: "turn",

  /**
   * value: "tumble"
   * @const
   */
  tumble: "tumble"
};
/**
 * The printing mode that has been selected for this imposing.
 * @member {module:model/ImposingCreate.ModeEnum} mode
 */
ImposingCreate.prototype.mode = undefined;

/**
 * Allowed values for the <code>signatureMixing</code> property.
 * @enum {String}
 * @readonly
 */
ImposingCreate.SignatureMixingEnum = {
  /**
   * value: "single"
   * @const
   */
  single: "single",

  /**
   * value: "multiple"
   * @const
   */
  multiple: "multiple",

  /**
   * value: "gang"
   * @const
   */
  gang: "gang"
};
/**
 * What are the allowed properties for mixing multiple signatures on a sheet for this Imposing. `single` prevents more than one signature appearing on a single sheet. `multiple` will allow more than one signature from this Imposing to be printed on the same sheet, and `gang` will allow the sheet to be filled with signatures from any available source to maximise efficiency. If unset, the default value is `single`.
 * @member {module:model/ImposingCreate.SignatureMixingEnum} signatureMixing
 */
ImposingCreate.prototype.signatureMixing = undefined;

/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {String}
 * @readonly
 */
ImposingCreate.OrientationEnum = {
  /**
   * value: "maximize_substrate_utilization"
   * @const
   */
  maximizeSubstrateUtilization: "maximize_substrate_utilization",

  /**
   * value: "long_side_follows_grain"
   * @const
   */
  longSideFollowsGrain: "long_side_follows_grain",

  /**
   * value: "short_side_follows_grain"
   * @const
   */
  shortSideFollowsGrain: "short_side_follows_grain"
};
/**
 * How should signatures be laid out on the sheet. `maximize_substrate_utilization` is the default option and should result in the densest packing for efficiency. `long_side_follows_grain` allows folding of portait format documents. `short_side_follows_grain` allows folding of landscape format documents. The default value, if unset, is `maximize_substrate_utilization`.
 * @member {module:model/ImposingCreate.OrientationEnum} orientation
 */
ImposingCreate.prototype.orientation = undefined;

/**
 * The ID of the Printer that has been selected to print this Imposing. This machine has been determined as the correct one to use for this ProductionStrategy. If this needs to change once the ProductionStrategy has been approved, a new ProductionStrategy should be created and the existing one cancelled to ensutre that color correction/imposing etc can be performed for the new machine's characteristics.
 * @member {String} machineId
 */
ImposingCreate.prototype.machineId = undefined;

/**
 * The ID of the Machine that is requested to handle the printing of this Imposing. This may not be the finally utilised machine, due to scheduling, maintenance or other factors. The actual machine used is available as `machine_id`. This input should be used as guidance of the target printing environment for software running color correction or deriving signatures.
 * @member {String} requestedMachineId
 */
ImposingCreate.prototype.requestedMachineId = undefined;

/**
 * @member {Array.<module:model/SignatureCreate>} signatures
 */
ImposingCreate.prototype.signatures = undefined;

/**
 * @member {Object} substrate
 */
ImposingCreate.prototype.substrate = undefined;

