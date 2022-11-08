"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaddleStitchUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SaddleStitchUpdate model module.
 * @module model/SaddleStitchUpdate
 * @version 1.0.0
 */
var SaddleStitchUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SaddleStitchUpdate</code>.
   * @alias module:model/SaddleStitchUpdate
   * @class
   */
  function SaddleStitchUpdate() {
    _classCallCheck(this, SaddleStitchUpdate);
  }

  /**
   * Constructs a <code>SaddleStitchUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaddleStitchUpdate} obj Optional instance to populate.
   * @return {module:model/SaddleStitchUpdate} The populated <code>SaddleStitchUpdate</code> instance.
   */
  _createClass(SaddleStitchUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SaddleStitchUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('staple_shape')) obj.stapleShape = _ApiClient.ApiClient.convertToType(data['staple_shape'], 'String');
        if (data.hasOwnProperty('staples')) obj.staples = _ApiClient.ApiClient.convertToType(data['staples'], 'Number');
      }
      return obj;
    }
  }]);
  return SaddleStitchUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.SaddleStitchUpdate = SaddleStitchUpdate;
SaddleStitchUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
SaddleStitchUpdate.KindEnum = {
  /**
   * value: "saddle_stitch"
   * @const
   */
  saddleStitch: "saddle_stitch"
};
/**
 * The kind of the finishing. A saddle stitch is a form of binding in which the center of the fold is placed across the saddle of the stitcher and then wire staples are driven through and clinched on the inside. 
 * @member {module:model/SaddleStitchUpdate.KindEnum} kind
 */
SaddleStitchUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>stapleShape</code> property.
 * @enum {String}
 * @readonly
 */
SaddleStitchUpdate.StapleShapeEnum = {
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
 * @member {module:model/SaddleStitchUpdate.StapleShapeEnum} stapleShape
 */
SaddleStitchUpdate.prototype.stapleShape = undefined;

/**
 * The number of staples used for the entire stitch
 * @member {Number} staples
 */
SaddleStitchUpdate.prototype.staples = undefined;

// Implement FinishingUpdate interface: