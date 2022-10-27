"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Embossing = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Embossing model module.
 * @module model/Embossing
 * @version 1.0.0
 */
var Embossing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Embossing</code>.
   * @alias module:model/Embossing
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Embossing.KindEnum} The kind of the finishing. Embossing means that a stamp or die with a raised pattern on its surface is used to imprint this pattern into the substrate of a part. Embossing can either be towards the beholder (debossing) or down into the substrate (embossing) or both (embossing/debossing). Please note that for embossing with foils you must use the FoilStamp finishing.
   * @param method {module:model/Embossing.MethodEnum} The method used for embossing. Please note that for \"foil embossing\" the foil stamping finishing must be used. 
   * @param direction {module:model/Embossing.DirectionEnum} The vertical direction in which the stamp will be applied. There are three possibilities. The most common - and also the default value - is to imprint the pattern down into the plane of the substrate (embossed), so that a step down can be felt between the substrate and the site that was embossed. Alternativly, the imprint can be towards the beholder, so that a step up is felt between the substrate and the embossed site (debossed). Lastly, a combined stamping can be applied which goes in both directions. (embossed-debossed). 
   */
  function Embossing(id, createdAt, updatedAt, fileReferences, kind, method, direction) {
    _classCallCheck(this, Embossing);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.method = method;
    this.direction = direction;
  }

  /**
   * Constructs a <code>Embossing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Embossing} obj Optional instance to populate.
   * @return {module:model/Embossing} The populated <code>Embossing</code> instance.
   */
  _createClass(Embossing, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Embossing();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('method')) obj.method = _ApiClient.ApiClient.convertToType(data['method'], 'String');
        if (data.hasOwnProperty('direction')) obj.direction = _ApiClient.ApiClient.convertToType(data['direction'], 'String');
      }
      return obj;
    }
  }]);
  return Embossing;
}();
/**
 * @member {String} id
 */
exports.Embossing = Embossing;
Embossing.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Embossing.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Embossing.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Embossing.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Embossing.KindEnum = {
  /**
   * value: "embossing"
   * @const
   */
  embossing: "embossing"
};
/**
 * The kind of the finishing. Embossing means that a stamp or die with a raised pattern on its surface is used to imprint this pattern into the substrate of a part. Embossing can either be towards the beholder (debossing) or down into the substrate (embossing) or both (embossing/debossing). Please note that for embossing with foils you must use the FoilStamp finishing.
 * @member {module:model/Embossing.KindEnum} kind
 */
Embossing.prototype.kind = undefined;

/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
Embossing.MethodEnum = {
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
 * @member {module:model/Embossing.MethodEnum} method
 */
Embossing.prototype.method = undefined;

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
Embossing.DirectionEnum = {
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
 * @member {module:model/Embossing.DirectionEnum} direction
 */
Embossing.prototype.direction = undefined;

// Implement Finishing interface: