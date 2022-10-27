"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadSewingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ThreadSewingUpdate model module.
 * @module model/ThreadSewingUpdate
 * @version 1.0.0
 */
var ThreadSewingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThreadSewingUpdate</code>.
   * @alias module:model/ThreadSewingUpdate
   * @class
   */
  function ThreadSewingUpdate() {
    _classCallCheck(this, ThreadSewingUpdate);
  }

  /**
   * Constructs a <code>ThreadSewingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreadSewingUpdate} obj Optional instance to populate.
   * @return {module:model/ThreadSewingUpdate} The populated <code>ThreadSewingUpdate</code> instance.
   */
  _createClass(ThreadSewingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThreadSewingUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('pattern')) obj.pattern = _ApiClient.ApiClient.convertToType(data['pattern'], 'String');
        if (data.hasOwnProperty('blind_stitch')) obj.blindStitch = _ApiClient.ApiClient.convertToType(data['blind_stitch'], 'Boolean');
        if (data.hasOwnProperty('thread_thickness')) obj.threadThickness = _ApiClient.ApiClient.convertToType(data['thread_thickness'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return ThreadSewingUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.ThreadSewingUpdate = ThreadSewingUpdate;
ThreadSewingUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingUpdate.KindEnum = {
  /**
   * value: "thread_sewing"
   * @const
   */
  threadSewing: "thread_sewing"
};
/**
 * The kind of the finishing. Thread sewing is a process where a thread and a needle is used to sew together several parts of a print job. It is most commonly used to combine the different signatures of the content of books.
 * @member {module:model/ThreadSewingUpdate.KindEnum} kind
 */
ThreadSewingUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>pattern</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingUpdate.PatternEnum = {
  /**
   * value: "combined_staggered"
   * @const
   */
  combinedStaggered: "combined_staggered",
  /**
   * value: "normal"
   * @const
   */
  normal: "normal",
  /**
   * value: "side"
   * @const
   */
  side: "side",
  /**
   * value: "staggered"
   * @const
   */
  staggered: "staggered"
};
/**
 * The sewing pattern that should be used to create the seam. The default is `normal`.
 * @member {module:model/ThreadSewingUpdate.PatternEnum} pattern
 */
ThreadSewingUpdate.prototype.pattern = undefined;

/**
 * Whether or not to perform a blind stitch at the end of the seam line
 * @member {Boolean} blindStitch
 */
ThreadSewingUpdate.prototype.blindStitch = undefined;

/**
 * The thickness of the string that should be used for this seam. Given in the unit specified in `dimensions_unit`.
 * @member {String} threadThickness
 */
ThreadSewingUpdate.prototype.threadThickness = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingUpdate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "foot"
   * @const
   */
  foot: "foot",
  /**
   * value: "inch"
   * @const
   */
  inch: "inch",
  /**
   * value: "m"
   * @const
   */
  m: "m",
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "pica"
   * @const
   */
  pica: "pica",
  /**
   * value: "point"
   * @const
   */
  point: "point"
};
/**
 * The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
 * @member {module:model/ThreadSewingUpdate.DimensionsUnitEnum} dimensionsUnit
 */
ThreadSewingUpdate.prototype.dimensionsUnit = undefined;

// Implement FinishingUpdate interface: