"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImposingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _SignatureUpdate = require("./SignatureUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ImposingUpdate model module.
 * @module model/ImposingUpdate
 * @version 1.0.0
 */
var ImposingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImposingUpdate</code>.
   * @alias module:model/ImposingUpdate
   * @class
   */
  function ImposingUpdate() {
    _classCallCheck(this, ImposingUpdate);
  }

  /**
   * Constructs a <code>ImposingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImposingUpdate} obj Optional instance to populate.
   * @return {module:model/ImposingUpdate} The populated <code>ImposingUpdate</code> instance.
   */
  _createClass(ImposingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImposingUpdate();
        if (data.hasOwnProperty('part_id')) obj.partId = _ApiClient.ApiClient.convertToType(data['part_id'], 'String');
        if (data.hasOwnProperty('technique')) obj.technique = _ApiClient.ApiClient.convertToType(data['technique'], 'String');
        if (data.hasOwnProperty('mode')) obj.mode = _ApiClient.ApiClient.convertToType(data['mode'], 'String');
        if (data.hasOwnProperty('signature_mixing')) obj.signatureMixing = _ApiClient.ApiClient.convertToType(data['signature_mixing'], 'String');
        if (data.hasOwnProperty('orientation')) obj.orientation = _ApiClient.ApiClient.convertToType(data['orientation'], 'String');
        if (data.hasOwnProperty('machine_id')) obj.machineId = _ApiClient.ApiClient.convertToType(data['machine_id'], 'String');
        if (data.hasOwnProperty('requested_machine_id')) obj.requestedMachineId = _ApiClient.ApiClient.convertToType(data['requested_machine_id'], 'String');
        if (data.hasOwnProperty('signatures')) obj.signatures = _ApiClient.ApiClient.convertToType(data['signatures'], [_SignatureUpdate.SignatureUpdate]);
        if (data.hasOwnProperty('substrate')) obj.substrate = _ApiClient.ApiClient.convertToType(data['substrate'], Object);
      }
      return obj;
    }
  }]);
  return ImposingUpdate;
}();
/**
 * The ID of the Part this Imposing provides
 * @member {String} partId
 */
exports.ImposingUpdate = ImposingUpdate;
ImposingUpdate.prototype.partId = undefined;

/**
 * Allowed values for the <code>technique</code> property.
 * @enum {String}
 * @readonly
 */
ImposingUpdate.TechniqueEnum = {
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
 * @member {module:model/ImposingUpdate.TechniqueEnum} technique
 */
ImposingUpdate.prototype.technique = undefined;

/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ImposingUpdate.ModeEnum = {
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
 * @member {module:model/ImposingUpdate.ModeEnum} mode
 */
ImposingUpdate.prototype.mode = undefined;

/**
 * Allowed values for the <code>signatureMixing</code> property.
 * @enum {String}
 * @readonly
 */
ImposingUpdate.SignatureMixingEnum = {
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
 * @member {module:model/ImposingUpdate.SignatureMixingEnum} signatureMixing
 */
ImposingUpdate.prototype.signatureMixing = undefined;

/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {String}
 * @readonly
 */
ImposingUpdate.OrientationEnum = {
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
 * @member {module:model/ImposingUpdate.OrientationEnum} orientation
 */
ImposingUpdate.prototype.orientation = undefined;

/**
 * The ID of the Printer that has been selected to print this Imposing. This machine has been determined as the correct one to use for this ProductionStrategy. If this needs to change once the ProductionStrategy has been approved, a new ProductionStrategy should be created and the existing one cancelled to ensutre that color correction/imposing etc can be performed for the new machine's characteristics.
 * @member {String} machineId
 */
ImposingUpdate.prototype.machineId = undefined;

/**
 * The ID of the Machine that is requested to handle the printing of this Imposing. This may not be the finally utilised machine, due to scheduling, maintenance or other factors. The actual machine used is available as `machine_id`. This input should be used as guidance of the target printing environment for software running color correction or deriving signatures.
 * @member {String} requestedMachineId
 */
ImposingUpdate.prototype.requestedMachineId = undefined;

/**
 * @member {Array.<module:model/SignatureUpdate>} signatures
 */
ImposingUpdate.prototype.signatures = undefined;

/**
 * @member {Object} substrate
 */
ImposingUpdate.prototype.substrate = undefined;