"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesiredSubstrateUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DesiredSubstrateUpdate model module.
 * @module model/DesiredSubstrateUpdate
 * @version 1.0.0
 */
var DesiredSubstrateUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DesiredSubstrateUpdate</code>.
   * @alias module:model/DesiredSubstrateUpdate
   * @class
   */
  function DesiredSubstrateUpdate() {
    _classCallCheck(this, DesiredSubstrateUpdate);
  }

  /**
   * Constructs a <code>DesiredSubstrateUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DesiredSubstrateUpdate} obj Optional instance to populate.
   * @return {module:model/DesiredSubstrateUpdate} The populated <code>DesiredSubstrateUpdate</code> instance.
   */
  _createClass(DesiredSubstrateUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DesiredSubstrateUpdate();
        if (data.hasOwnProperty('unique_material_identifier')) obj.uniqueMaterialIdentifier = _ApiClient.ApiClient.convertToType(data['unique_material_identifier'], 'String');
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
        if (data.hasOwnProperty('paper_weight')) obj.paperWeight = _ApiClient.ApiClient.convertToType(data['paper_weight'], 'Number');
        if (data.hasOwnProperty('paper_weight_unit')) obj.paperWeightUnit = _ApiClient.ApiClient.convertToType(data['paper_weight_unit'], 'String');
        if (data.hasOwnProperty('coating')) obj.coating = _ApiClient.ApiClient.convertToType(data['coating'], ['Boolean']);
        if (data.hasOwnProperty('grain')) obj.grain = _ApiClient.ApiClient.convertToType(data['grain'], 'String');
      }
      return obj;
    }
  }]);
  return DesiredSubstrateUpdate;
}();
/**
 * The Zaikio unique material identifier that uniquely references a single substrate. If given, this indicates that the part must be printed on that substrate and the printer is not allowed so select a substitute. When left empty they printer may chose which ever substrate they see fit. When the unique identifier is given, all other properties must be left empty.
 * @member {String} uniqueMaterialIdentifier
 */
exports.DesiredSubstrateUpdate = DesiredSubstrateUpdate;
DesiredSubstrateUpdate.prototype.uniqueMaterialIdentifier = undefined;

/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */
DesiredSubstrateUpdate.CategoryEnum = {
  /**
   * value: "coated"
   * @const
   */
  coated: "coated",
  /**
   * value: "coated_glossy"
   * @const
   */
  coatedGlossy: "coated_glossy",
  /**
   * value: "coated_matte"
   * @const
   */
  coatedMatte: "coated_matte",
  /**
   * value: "uncoated"
   * @const
   */
  uncoated: "uncoated",
  /**
   * value: "wood_free_uncoated"
   * @const
   */
  woodFreeUncoated: "wood_free_uncoated"
};
/**
 * If given, the printer must use a substrate that matches this category. Can be combined (but does not have to be) with `coating` and `paper_weight` information.
 * @member {module:model/DesiredSubstrateUpdate.CategoryEnum} category
 */
DesiredSubstrateUpdate.prototype.category = undefined;

/**
 * The weight of the paper that must be used by the printer. Can be combined with `coating` and `category` information. Depending on the `paper_weight_unit` this represents either a grammage or a US/Canada paper weight. If given, the `paper_weight_unit` must also be set.
 * @member {Number} paperWeight
 */
DesiredSubstrateUpdate.prototype.paperWeight = undefined;

/**
 * Allowed values for the <code>paperWeightUnit</code> property.
 * @enum {String}
 * @readonly
 */
DesiredSubstrateUpdate.PaperWeightUnitEnum = {
  /**
   * value: "gsm"
   * @const
   */
  gsm: "gsm",
  /**
   * value: "lbs"
   * @const
   */
  lbs: "lbs"
};
/**
 * When set to `gsm` the `paper_weight` property will be interpreted as grammage in accordance with ISO 536. When set to `lb` the `paper_weight` will be interpreted as an US/Canada paper weight in pounds in reference to the weight of a 500 sheet ream of the uncut substrate.
 * @member {module:model/DesiredSubstrateUpdate.PaperWeightUnitEnum} paperWeightUnit
 */
DesiredSubstrateUpdate.prototype.paperWeightUnit = undefined;

/**
 * When given, defines if the paper's surfaces must be coated or must not be coated. The first item in the array refers to the front side of the substrate, the last item in the array refers to the back side of the substrate.
 * @member {Array.<Boolean>} coating
 */
DesiredSubstrateUpdate.prototype.coating = undefined;

/**
 * Allowed values for the <code>grain</code> property.
 * @enum {String}
 * @readonly
 */
DesiredSubstrateUpdate.GrainEnum = {
  /**
   * value: "short"
   * @const
   */
  _short: "short",
  /**
   * value: "long"
   * @const
   */
  _long: "long"
};
/**
 * When given, defines the required grain direction of the substrate that is to be used.
 * @member {module:model/DesiredSubstrateUpdate.GrainEnum} grain
 */
DesiredSubstrateUpdate.prototype.grain = undefined;

// Implement OneOfPartUpdateDesiredSubstrate interface: