"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadSewing = void 0;
var _ApiClient = require("../ApiClient");
var _FileReference = require("./FileReference");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ThreadSewing model module.
 * @module model/ThreadSewing
 * @version 1.0.0
 */
var ThreadSewing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThreadSewing</code>.
   * @alias module:model/ThreadSewing
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/ThreadSewing.KindEnum} The kind of the finishing. Thread sewing is a process where a thread and a needle is used to sew together several parts of a print job. It is most commonly used to combine the different signatures of the content of books.
   * @param pattern {module:model/ThreadSewing.PatternEnum} The sewing pattern that should be used to create the seam. The default is `normal`.
   * @param blindStitch {Boolean} Whether or not to perform a blind stitch at the end of the seam line
   * @param threadThickness {String} The thickness of the string that should be used for this seam. Given in the unit specified in `dimensions_unit`.
   * @param dimensionsUnit {module:model/ThreadSewing.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
   */
  function ThreadSewing(id, createdAt, updatedAt, fileReferences, kind, pattern, blindStitch, threadThickness, dimensionsUnit) {
    _classCallCheck(this, ThreadSewing);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.pattern = pattern;
    this.blindStitch = blindStitch;
    this.threadThickness = threadThickness;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>ThreadSewing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreadSewing} obj Optional instance to populate.
   * @return {module:model/ThreadSewing} The populated <code>ThreadSewing</code> instance.
   */
  _createClass(ThreadSewing, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThreadSewing();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReference.FileReference]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('pattern')) obj.pattern = _ApiClient.ApiClient.convertToType(data['pattern'], 'String');
        if (data.hasOwnProperty('blind_stitch')) obj.blindStitch = _ApiClient.ApiClient.convertToType(data['blind_stitch'], 'Boolean');
        if (data.hasOwnProperty('thread_thickness')) obj.threadThickness = _ApiClient.ApiClient.convertToType(data['thread_thickness'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return ThreadSewing;
}();
/**
 * @member {String} id
 */
exports.ThreadSewing = ThreadSewing;
ThreadSewing.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
ThreadSewing.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
ThreadSewing.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
ThreadSewing.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewing.KindEnum = {
  /**
   * value: "thread_sewing"
   * @const
   */
  threadSewing: "thread_sewing"
};
/**
 * The kind of the finishing. Thread sewing is a process where a thread and a needle is used to sew together several parts of a print job. It is most commonly used to combine the different signatures of the content of books.
 * @member {module:model/ThreadSewing.KindEnum} kind
 */
ThreadSewing.prototype.kind = undefined;

/**
 * Allowed values for the <code>pattern</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewing.PatternEnum = {
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
 * @member {module:model/ThreadSewing.PatternEnum} pattern
 */
ThreadSewing.prototype.pattern = undefined;

/**
 * Whether or not to perform a blind stitch at the end of the seam line
 * @member {Boolean} blindStitch
 */
ThreadSewing.prototype.blindStitch = undefined;

/**
 * The thickness of the string that should be used for this seam. Given in the unit specified in `dimensions_unit`.
 * @member {String} threadThickness
 */
ThreadSewing.prototype.threadThickness = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewing.DimensionsUnitEnum = {
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
 * @member {module:model/ThreadSewing.DimensionsUnitEnum} dimensionsUnit
 */
ThreadSewing.prototype.dimensionsUnit = undefined;

// Implement Finishing interface: