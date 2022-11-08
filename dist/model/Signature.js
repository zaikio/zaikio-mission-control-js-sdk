"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signature = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Signature model module.
 * @module model/Signature
 * @version 1.0.0
 */
var Signature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Signature</code>.
   * @alias module:model/Signature
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param kind {module:model/Signature.KindEnum} A simple description of the contents of this signature
   * @param foldingLayout {String} A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit.
   * @param foldingSequence {Array.<String>} The steps required to execute the fold of this signature.
   * @param pages {Array.<Number>} The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold.
   * @param layout {Object} The box-model of this signature
   */
  function Signature(id, createdAt, updatedAt, kind, foldingLayout, foldingSequence, pages, layout) {
    _classCallCheck(this, Signature);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.kind = kind;
    this.foldingLayout = foldingLayout;
    this.foldingSequence = foldingSequence;
    this.pages = pages;
    this.layout = layout;
  }

  /**
   * Constructs a <code>Signature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signature} obj Optional instance to populate.
   * @return {module:model/Signature} The populated <code>Signature</code> instance.
   */
  _createClass(Signature, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Signature();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('folding_layout')) obj.foldingLayout = _ApiClient.ApiClient.convertToType(data['folding_layout'], 'String');
        if (data.hasOwnProperty('folding_sequence')) obj.foldingSequence = _ApiClient.ApiClient.convertToType(data['folding_sequence'], ['String']);
        if (data.hasOwnProperty('pages')) obj.pages = _ApiClient.ApiClient.convertToType(data['pages'], ['Number']);
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
      }
      return obj;
    }
  }]);
  return Signature;
}();
/**
 * @member {String} id
 */
exports.Signature = Signature;
Signature.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Signature.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Signature.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Signature.KindEnum = {
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
 * @member {module:model/Signature.KindEnum} kind
 */
Signature.prototype.kind = undefined;

/**
 * A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit.
 * @member {String} foldingLayout
 */
Signature.prototype.foldingLayout = undefined;

/**
 * The steps required to execute the fold of this signature.
 * @member {Array.<String>} foldingSequence
 */
Signature.prototype.foldingSequence = undefined;

/**
 * The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold.
 * @member {Array.<Number>} pages
 */
Signature.prototype.pages = undefined;

/**
 * The box-model of this signature
 * @member {Object} layout
 */
Signature.prototype.layout = undefined;