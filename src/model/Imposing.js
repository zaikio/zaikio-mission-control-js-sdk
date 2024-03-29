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
import {Signature} from './Signature';

/**
 * The Imposing model module.
 * @module model/Imposing
 * @version 1.0.0
 */
export class Imposing {
  /**
   * Constructs a new <code>Imposing</code>.
   * @alias module:model/Imposing
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param partId {String} The ID of the Part this Imposing provides
   * @param technique {module:model/Imposing.TechniqueEnum} The printing technique that has been selected for this Imposing.
   * @param requestedTechnique {module:model/Imposing.RequestedTechniqueEnum} The suggested or requested printing technique to use for this Imposing. The default value if unspecified is \"auto\" meaning that the Imposing software will select the best process for the job according to whatever algorithm it uses.
   * @param mode {module:model/Imposing.ModeEnum} The printing mode that has been selected for this imposing.
   * @param requestedMode {module:model/Imposing.RequestedModeEnum} The suggested or requested printing mode to use for this Imposing. If this is left blank, the default will be set to \"auto\", allowing the Imposing software to choose. The actual mode to use is available as the `mode` property.
   * @param signatureMixing {module:model/Imposing.SignatureMixingEnum} What are the allowed properties for mixing multiple signatures on a sheet for this Imposing. `single` prevents more than one signature appearing on a single sheet. `multiple` will allow more than one signature from this Imposing to be printed on the same sheet, and `gang` will allow the sheet to be filled with signatures from any available source to maximise efficiency. If unset, the default value is `single`.
   * @param orientation {module:model/Imposing.OrientationEnum} How should signatures be laid out on the sheet. `maximize_substrate_utilization` is the default option and should result in the densest packing for efficiency. `long_side_follows_grain` allows folding of portait format documents. `short_side_follows_grain` allows folding of landscape format documents. The default value, if unset, is `maximize_substrate_utilization`.
   * @param machineId {String} The ID of the Printer that has been selected to print this Imposing. This machine has been determined as the correct one to use for this ProductionStrategy. If this needs to change once the ProductionStrategy has been approved, a new ProductionStrategy should be created and the existing one cancelled to ensutre that color correction/imposing etc can be performed for the new machine's characteristics.
   * @param requestedMachineId {String} The ID of the Machine that is requested to handle the printing of this Imposing. This may not be the finally utilised machine, due to scheduling, maintenance or other factors. The actual machine used is available as `machine_id`. This input should be used as guidance of the target printing environment for software running color correction or deriving signatures.
   * @param signatures {Array.<module:model/Signature>} 
   * @param substrate {Object} 
   */
  constructor(id, createdAt, updatedAt, partId, technique, requestedTechnique, mode, requestedMode, signatureMixing, orientation, machineId, requestedMachineId, signatures, substrate) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.partId = partId;
    this.technique = technique;
    this.requestedTechnique = requestedTechnique;
    this.mode = mode;
    this.requestedMode = requestedMode;
    this.signatureMixing = signatureMixing;
    this.orientation = orientation;
    this.machineId = machineId;
    this.requestedMachineId = requestedMachineId;
    this.signatures = signatures;
    this.substrate = substrate;
  }

  /**
   * Constructs a <code>Imposing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Imposing} obj Optional instance to populate.
   * @return {module:model/Imposing} The populated <code>Imposing</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Imposing();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('part_id'))
        obj.partId = ApiClient.convertToType(data['part_id'], 'String');
      if (data.hasOwnProperty('technique'))
        obj.technique = ApiClient.convertToType(data['technique'], 'String');
      if (data.hasOwnProperty('requested_technique'))
        obj.requestedTechnique = ApiClient.convertToType(data['requested_technique'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('requested_mode'))
        obj.requestedMode = ApiClient.convertToType(data['requested_mode'], 'String');
      if (data.hasOwnProperty('signature_mixing'))
        obj.signatureMixing = ApiClient.convertToType(data['signature_mixing'], 'String');
      if (data.hasOwnProperty('orientation'))
        obj.orientation = ApiClient.convertToType(data['orientation'], 'String');
      if (data.hasOwnProperty('machine_id'))
        obj.machineId = ApiClient.convertToType(data['machine_id'], 'String');
      if (data.hasOwnProperty('requested_machine_id'))
        obj.requestedMachineId = ApiClient.convertToType(data['requested_machine_id'], 'String');
      if (data.hasOwnProperty('signatures'))
        obj.signatures = ApiClient.convertToType(data['signatures'], [Signature]);
      if (data.hasOwnProperty('substrate'))
        obj.substrate = ApiClient.convertToType(data['substrate'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Imposing.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Imposing.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Imposing.prototype.updatedAt = undefined;

/**
 * The ID of the Part this Imposing provides
 * @member {String} partId
 */
Imposing.prototype.partId = undefined;

/**
 * Allowed values for the <code>technique</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.TechniqueEnum = {
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
 * @member {module:model/Imposing.TechniqueEnum} technique
 */
Imposing.prototype.technique = undefined;

/**
 * Allowed values for the <code>requestedTechnique</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.RequestedTechniqueEnum = {
  /**
   * value: "auto"
   * @const
   */
  auto: "auto",

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
 * The suggested or requested printing technique to use for this Imposing. The default value if unspecified is \"auto\" meaning that the Imposing software will select the best process for the job according to whatever algorithm it uses.
 * @member {module:model/Imposing.RequestedTechniqueEnum} requestedTechnique
 */
Imposing.prototype.requestedTechnique = undefined;

/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.ModeEnum = {
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
 * @member {module:model/Imposing.ModeEnum} mode
 */
Imposing.prototype.mode = undefined;

/**
 * Allowed values for the <code>requestedMode</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.RequestedModeEnum = {
  /**
   * value: "auto"
   * @const
   */
  auto: "auto",

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
 * The suggested or requested printing mode to use for this Imposing. If this is left blank, the default will be set to \"auto\", allowing the Imposing software to choose. The actual mode to use is available as the `mode` property.
 * @member {module:model/Imposing.RequestedModeEnum} requestedMode
 */
Imposing.prototype.requestedMode = undefined;

/**
 * Allowed values for the <code>signatureMixing</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.SignatureMixingEnum = {
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
 * @member {module:model/Imposing.SignatureMixingEnum} signatureMixing
 */
Imposing.prototype.signatureMixing = undefined;

/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {String}
 * @readonly
 */
Imposing.OrientationEnum = {
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
 * @member {module:model/Imposing.OrientationEnum} orientation
 */
Imposing.prototype.orientation = undefined;

/**
 * The ID of the Printer that has been selected to print this Imposing. This machine has been determined as the correct one to use for this ProductionStrategy. If this needs to change once the ProductionStrategy has been approved, a new ProductionStrategy should be created and the existing one cancelled to ensutre that color correction/imposing etc can be performed for the new machine's characteristics.
 * @member {String} machineId
 */
Imposing.prototype.machineId = undefined;

/**
 * The ID of the Machine that is requested to handle the printing of this Imposing. This may not be the finally utilised machine, due to scheduling, maintenance or other factors. The actual machine used is available as `machine_id`. This input should be used as guidance of the target printing environment for software running color correction or deriving signatures.
 * @member {String} requestedMachineId
 */
Imposing.prototype.requestedMachineId = undefined;

/**
 * @member {Array.<module:model/Signature>} signatures
 */
Imposing.prototype.signatures = undefined;

/**
 * @member {Object} substrate
 */
Imposing.prototype.substrate = undefined;

