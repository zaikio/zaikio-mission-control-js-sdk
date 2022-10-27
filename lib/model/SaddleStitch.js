"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaddleStitch = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SaddleStitch model module.
 * @module model/SaddleStitch
 * @version 1.0.0
 */
var SaddleStitch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SaddleStitch</code>.
   * @alias module:model/SaddleStitch
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/SaddleStitch.KindEnum} The kind of the finishing. A saddle stitch is a form of binding in which the center of the fold is placed across the saddle of the stitcher and then wire staples are driven through and clinched on the inside. 
   * @param stapleShape {module:model/SaddleStitch.StapleShapeEnum} The shape of the staples used for the stitch
   * @param staples {Number} The number of staples used for the entire stitch
   */
  function SaddleStitch(id, createdAt, updatedAt, fileReferences, kind, stapleShape, staples) {
    _classCallCheck(this, SaddleStitch);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.stapleShape = stapleShape;
    this.staples = staples;
  }

  /**
   * Constructs a <code>SaddleStitch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaddleStitch} obj Optional instance to populate.
   * @return {module:model/SaddleStitch} The populated <code>SaddleStitch</code> instance.
   */
  _createClass(SaddleStitch, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SaddleStitch();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('staple_shape')) obj.stapleShape = _ApiClient.ApiClient.convertToType(data['staple_shape'], 'String');
        if (data.hasOwnProperty('staples')) obj.staples = _ApiClient.ApiClient.convertToType(data['staples'], 'Number');
      }
      return obj;
    }
  }]);
  return SaddleStitch;
}();
/**
 * @member {String} id
 */
exports.SaddleStitch = SaddleStitch;
SaddleStitch.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
SaddleStitch.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
SaddleStitch.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
SaddleStitch.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
SaddleStitch.KindEnum = {
  /**
   * value: "saddle_stitch"
   * @const
   */
  saddleStitch: "saddle_stitch"
};
/**
 * The kind of the finishing. A saddle stitch is a form of binding in which the center of the fold is placed across the saddle of the stitcher and then wire staples are driven through and clinched on the inside. 
 * @member {module:model/SaddleStitch.KindEnum} kind
 */
SaddleStitch.prototype.kind = undefined;

/**
 * Allowed values for the <code>stapleShape</code> property.
 * @enum {String}
 * @readonly
 */
SaddleStitch.StapleShapeEnum = {
  /**
   * value: "butted"
   * @const
   */
  butted: "butted",
  /**
   * value: "clinched_out"
   * @const
   */
  clinchedOut: "clinched_out",
  /**
   * value: "crown"
   * @const
   */
  crown: "crown",
  /**
   * value: "eyelet"
   * @const
   */
  eyelet: "eyelet",
  /**
   * value: "overlap"
   * @const
   */
  overlap: "overlap"
};
/**
 * The shape of the staples used for the stitch
 * @member {module:model/SaddleStitch.StapleShapeEnum} stapleShape
 */
SaddleStitch.prototype.stapleShape = undefined;

/**
 * The number of staples used for the entire stitch
 * @member {Number} staples
 */
SaddleStitch.prototype.staples = undefined;

// Implement Finishing interface: