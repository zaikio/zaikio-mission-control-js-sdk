"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SignatureUpdate model module.
 * @module model/SignatureUpdate
 * @version 1.0.0
 */
var SignatureUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignatureUpdate</code>.
   * @alias module:model/SignatureUpdate
   * @class
   */
  function SignatureUpdate() {
    _classCallCheck(this, SignatureUpdate);
  }

  /**
   * Constructs a <code>SignatureUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureUpdate} obj Optional instance to populate.
   * @return {module:model/SignatureUpdate} The populated <code>SignatureUpdate</code> instance.
   */
  _createClass(SignatureUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignatureUpdate();
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('folding_layout')) obj.foldingLayout = _ApiClient.ApiClient.convertToType(data['folding_layout'], 'String');
        if (data.hasOwnProperty('folding_sequence')) obj.foldingSequence = _ApiClient.ApiClient.convertToType(data['folding_sequence'], ['String']);
        if (data.hasOwnProperty('pages')) obj.pages = _ApiClient.ApiClient.convertToType(data['pages'], ['Number']);
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return SignatureUpdate;
}();
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
exports.SignatureUpdate = SignatureUpdate;
SignatureUpdate.KindEnum = {
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
 * @member {module:model/SignatureUpdate.KindEnum} kind
 */
SignatureUpdate.prototype.kind = undefined;

/**
 * A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit.
 * @member {String} foldingLayout
 */
SignatureUpdate.prototype.foldingLayout = undefined;

/**
 * The steps required to execute the fold of this signature.
 * @member {Array.<String>} foldingSequence
 */
SignatureUpdate.prototype.foldingSequence = undefined;

/**
 * The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold.
 * @member {Array.<Number>} pages
 */
SignatureUpdate.prototype.pages = undefined;

/**
 * The box-model of this signature
 * @member {Object} layout
 */
SignatureUpdate.prototype.layout = undefined;