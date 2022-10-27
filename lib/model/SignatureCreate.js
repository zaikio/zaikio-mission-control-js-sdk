"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SignatureCreate model module.
 * @module model/SignatureCreate
 * @version 1.0.0
 */
var SignatureCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignatureCreate</code>.
   * @alias module:model/SignatureCreate
   * @class
   */
  function SignatureCreate() {
    _classCallCheck(this, SignatureCreate);
  }

  /**
   * Constructs a <code>SignatureCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureCreate} obj Optional instance to populate.
   * @return {module:model/SignatureCreate} The populated <code>SignatureCreate</code> instance.
   */
  _createClass(SignatureCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignatureCreate();
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('folding_layout')) obj.foldingLayout = _ApiClient.ApiClient.convertToType(data['folding_layout'], 'String');
        if (data.hasOwnProperty('folding_sequence')) obj.foldingSequence = _ApiClient.ApiClient.convertToType(data['folding_sequence'], ['String']);
        if (data.hasOwnProperty('pages')) obj.pages = _ApiClient.ApiClient.convertToType(data['pages'], ['Number']);
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return SignatureCreate;
}();
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
exports.SignatureCreate = SignatureCreate;
SignatureCreate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet",
  /**
   * value: "roll_segment"
   * @const
   */
  rollSegment: "roll_segment",
  /**
   * value: "page"
   * @const
   */
  page: "page",
  /**
   * value: "spread"
   * @const
   */
  spread: "spread",
  /**
   * value: "fold"
   * @const
   */
  fold: "fold",
  /**
   * value: "box"
   * @const
   */
  box: "box",
  /**
   * value: "carton"
   * @const
   */
  carton: "carton"
};
/**
 * A simple description of the contents of this signature
 * @member {module:model/SignatureCreate.KindEnum} kind
 */
SignatureCreate.prototype.kind = undefined;

/**
 * A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit.
 * @member {String} foldingLayout
 */
SignatureCreate.prototype.foldingLayout = undefined;

/**
 * The steps required to execute the fold of this signature.
 * @member {Array.<String>} foldingSequence
 */
SignatureCreate.prototype.foldingSequence = undefined;

/**
 * The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold.
 * @member {Array.<Number>} pages
 */
SignatureCreate.prototype.pages = undefined;

/**
 * The box-model of this signature
 * @member {Object} layout
 */
SignatureCreate.prototype.layout = undefined;