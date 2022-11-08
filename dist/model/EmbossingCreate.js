"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbossingCreate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EmbossingCreate model module.
 * @module model/EmbossingCreate
 * @version 1.0.0
 */
var EmbossingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmbossingCreate</code>.
   * @alias module:model/EmbossingCreate
   * @class
   */
  function EmbossingCreate() {
    _classCallCheck(this, EmbossingCreate);
  }

  /**
   * Constructs a <code>EmbossingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbossingCreate} obj Optional instance to populate.
   * @return {module:model/EmbossingCreate} The populated <code>EmbossingCreate</code> instance.
   */
  _createClass(EmbossingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmbossingCreate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceCreate.FileReferenceCreate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('method')) obj.method = _ApiClient.ApiClient.convertToType(data['method'], 'String');
        if (data.hasOwnProperty('direction')) obj.direction = _ApiClient.ApiClient.convertToType(data['direction'], 'String');
      }
      return obj;
    }
  }]);
  return EmbossingCreate;
}();
/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
exports.EmbossingCreate = EmbossingCreate;
EmbossingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.KindEnum = {
  /**
   * value: "embossing"
   * @const
   */
  embossing: "embossing"
};
/**
 * The kind of the finishing. Embossing means that a stamp or die with a raised pattern on its surface is used to imprint this pattern into the substrate of a part. Embossing can either be towards the beholder (debossing) or down into the substrate (embossing) or both (embossing/debossing). Please note that for embossing with foils you must use the FoilStamp finishing.
 * @member {module:model/EmbossingCreate.KindEnum} kind
 */
EmbossingCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.MethodEnum = {
  /**
   * value: "blind"
   * @const
   */
  blind: "blind",
  /**
   * value: "braille"
   * @const
   */
  braille: "braille"
};
/**
 * The method used for embossing. Please note that for \"foil embossing\" the foil stamping finishing must be used. 
 * @member {module:model/EmbossingCreate.MethodEnum} method
 */
EmbossingCreate.prototype.method = undefined;

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.DirectionEnum = {
  /**
   * value: "debossed"
   * @const
   */
  debossed: "debossed",
  /**
   * value: "embossed"
   * @const
   */
  embossed: "embossed",
  /**
   * value: "embossed-debossed"
   * @const
   */
  embossedDebossed: "embossed-debossed"
};
/**
 * The vertical direction in which the stamp will be applied. There are three possibilities. The most common - and also the default value - is to imprint the pattern down into the plane of the substrate (embossed), so that a step down can be felt between the substrate and the site that was embossed. Alternativly, the imprint can be towards the beholder, so that a step up is felt between the substrate and the embossed site (debossed). Lastly, a combined stamping can be applied which goes in both directions. (embossed-debossed). 
 * @member {module:model/EmbossingCreate.DirectionEnum} direction
 */
EmbossingCreate.prototype.direction = undefined;

// Implement FinishingCreate interface: