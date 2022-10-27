"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadSewingCreate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ThreadSewingCreate model module.
 * @module model/ThreadSewingCreate
 * @version 1.0.0
 */
var ThreadSewingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThreadSewingCreate</code>.
   * @alias module:model/ThreadSewingCreate
   * @class
   */
  function ThreadSewingCreate() {
    _classCallCheck(this, ThreadSewingCreate);
  }

  /**
   * Constructs a <code>ThreadSewingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreadSewingCreate} obj Optional instance to populate.
   * @return {module:model/ThreadSewingCreate} The populated <code>ThreadSewingCreate</code> instance.
   */
  _createClass(ThreadSewingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThreadSewingCreate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceCreate.FileReferenceCreate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('pattern')) obj.pattern = _ApiClient.ApiClient.convertToType(data['pattern'], 'String');
        if (data.hasOwnProperty('blind_stitch')) obj.blindStitch = _ApiClient.ApiClient.convertToType(data['blind_stitch'], 'Boolean');
        if (data.hasOwnProperty('thread_thickness')) obj.threadThickness = _ApiClient.ApiClient.convertToType(data['thread_thickness'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return ThreadSewingCreate;
}();
/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
exports.ThreadSewingCreate = ThreadSewingCreate;
ThreadSewingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingCreate.KindEnum = {
  /**
   * value: "thread_sewing"
   * @const
   */
  threadSewing: "thread_sewing"
};
/**
 * The kind of the finishing. Thread sewing is a process where a thread and a needle is used to sew together several parts of a print job. It is most commonly used to combine the different signatures of the content of books.
 * @member {module:model/ThreadSewingCreate.KindEnum} kind
 */
ThreadSewingCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>pattern</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingCreate.PatternEnum = {
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
 * @member {module:model/ThreadSewingCreate.PatternEnum} pattern
 */
ThreadSewingCreate.prototype.pattern = undefined;

/**
 * Whether or not to perform a blind stitch at the end of the seam line
 * @member {Boolean} blindStitch
 */
ThreadSewingCreate.prototype.blindStitch = undefined;

/**
 * The thickness of the string that should be used for this seam. Given in the unit specified in `dimensions_unit`.
 * @member {String} threadThickness
 */
ThreadSewingCreate.prototype.threadThickness = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
ThreadSewingCreate.DimensionsUnitEnum = {
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
 * @member {module:model/ThreadSewingCreate.DimensionsUnitEnum} dimensionsUnit
 */
ThreadSewingCreate.prototype.dimensionsUnit = undefined;

// Implement FinishingCreate interface: