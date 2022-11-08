"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _ColorUpdate = require("./ColorUpdate");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
var _FinishingApplicationUpdate = require("./FinishingApplicationUpdate");
var _FinishingUpdate = require("./FinishingUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartUpdate model module.
 * @module model/PartUpdate
 * @version 1.0.0
 */
var PartUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartUpdate</code>.
   * @alias module:model/PartUpdate
   * @class
   */
  function PartUpdate() {
    _classCallCheck(this, PartUpdate);
  }

  /**
   * Constructs a <code>PartUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartUpdate} obj Optional instance to populate.
   * @return {module:model/PartUpdate} The populated <code>PartUpdate</code> instance.
   */
  _createClass(PartUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartUpdate();
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
        if (data.hasOwnProperty('colors')) obj.colors = _ApiClient.ApiClient.convertToType(data['colors'], [_ColorUpdate.ColorUpdate]);
        if (data.hasOwnProperty('desired_substrate')) obj.desiredSubstrate = _ApiClient.ApiClient.convertToType(data['desired_substrate'], Object);
        if (data.hasOwnProperty('finishing_applications')) obj.finishingApplications = _ApiClient.ApiClient.convertToType(data['finishing_applications'], [_FinishingApplicationUpdate.FinishingApplicationUpdate]);
        if (data.hasOwnProperty('finishings')) obj.finishings = _ApiClient.ApiClient.convertToType(data['finishings'], [_FinishingUpdate.FinishingUpdate]);
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('content')) obj.content = _ApiClient.ApiClient.convertToType(data['content'], 'String');
        if (data.hasOwnProperty('pages')) obj.pages = _ApiClient.ApiClient.convertToType(data['pages'], 'Number');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _ApiClient.ApiClient.convertToType(data['dimensions'], ['String']);
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return PartUpdate;
}();
/**
 * @member {Object} layout
 */
exports.PartUpdate = PartUpdate;
PartUpdate.prototype.layout = undefined;

/**
 * @member {Array.<module:model/ColorUpdate>} colors
 */
PartUpdate.prototype.colors = undefined;

/**
 * @member {Object} desiredSubstrate
 */
PartUpdate.prototype.desiredSubstrate = undefined;

/**
 * @member {Array.<module:model/FinishingApplicationUpdate>} finishingApplications
 */
PartUpdate.prototype.finishingApplications = undefined;

/**
 * @member {Array.<module:model/FinishingUpdate>} finishings
 */
PartUpdate.prototype.finishings = undefined;

/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
PartUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PartUpdate.KindEnum = {
  /**
   * value: "business_card"
   * @const
   */
  businessCard: "business_card",
  /**
   * value: "brochure"
   * @const
   */
  brochure: "brochure",
  /**
   * value: "case"
   * @const
   */
  _case: "case",
  /**
   * value: "content"
   * @const
   */
  content: "content",
  /**
   * value: "cover"
   * @const
   */
  cover: "cover",
  /**
   * value: "jacket"
   * @const
   */
  jacket: "jacket",
  /**
   * value: "leaflet"
   * @const
   */
  leaflet: "leaflet",
  /**
   * value: "poster"
   * @const
   */
  poster: "poster",
  /**
   * value: "label"
   * @const
   */
  label: "label",
  /**
   * value: "packaging"
   * @const
   */
  packaging: "packaging",
  /**
   * value: "endpaper"
   * @const
   */
  endpaper: "endpaper"
};
/**
 * The kind of the part. Which parts must be created depends on the kind of the job to which this part belongs. For some kinds it is also possible to create several parts (i.e. content) with different colours, substrates and finishings.
 * @member {module:model/PartUpdate.KindEnum} kind
 */
PartUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
PartUpdate.ContentEnum = {
  /**
   * value: "single_page"
   * @const
   */
  singlePage: "single_page",
  /**
   * value: "spread"
   * @const
   */
  spread: "spread",
  /**
   * value: "multiple_pages"
   * @const
   */
  multiplePages: "multiple_pages",
  /**
   * value: "three_dimensional_object"
   * @const
   */
  threeDimensionalObject: "three_dimensional_object"
};
/**
 * Defines what the layout of this part looks like. When `single_page` is selected, it is assumed that the layout contains a single page and the `pages` attribute must be 2. When `spread` is selected, it is assumed that the layout contains a page spread, thus the `pages` attribute must be set to 4. When `multiple_pages` is selected, the layout may contain an arbitrary number of pages and the `pages` attribute must be set accordingly.
 * @member {module:model/PartUpdate.ContentEnum} content
 */
PartUpdate.prototype.content = undefined;

/**
 * The number of pages that this part's layout contains. Since a single page of paper has a front and a back side, the minimal amount of pages per part is two. If a part contains more than 2 pages the amount must be divisible by two. When `content` is set to `single_page` the number of pages must equal 2, when `content` is set to `spread` the number of pages must equal 4. When 'content' is set to `multiple_pages` the number of pages can be set arbitrarily.
 * @member {Number} pages
 */
PartUpdate.prototype.pages = undefined;

/**
 * The width and height of the part in the unit set in `dimensions_unit`. The first element of this array corresponds to the width, the second one to the height (or length) of the part in closed state.
 * @member {Array.<String>} dimensions
 */
PartUpdate.prototype.dimensions = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
PartUpdate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "μm"
   * @const
   */
  m: "μm"
};
/**
 * The unit in which the dimensions are given
 * @member {module:model/PartUpdate.DimensionsUnitEnum} dimensionsUnit
 */
PartUpdate.prototype.dimensionsUnit = undefined;