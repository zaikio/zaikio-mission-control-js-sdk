"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedPart = void 0;
var _ApiClient = require("../ApiClient");
var _Part = require("./Part");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ExtendedPart model module.
 * @module model/ExtendedPart
 * @version 1.0.0
 */
var ExtendedPart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtendedPart</code>.
   * @alias module:model/ExtendedPart
   * @class
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param layout {} 
   * @param kind {} The kind of the part. Which parts must be created depends on the kind of the job to which this part belongs. For some kinds it is also possible to create several parts (i.e. content) with different colours, substrates and finishings.
   * @param content {} Defines what the layout of this part looks like. When `single_page` is selected, it is assumed that the layout contains a single page and the `pages` attribute must be 2. When `spread` is selected, it is assumed that the layout contains a page spread, thus the `pages` attribute must be set to 4. When `multiple_pages` is selected, the layout may contain an arbitrary number of pages and the `pages` attribute must be set accordingly.
   * @param pages {} The number of pages that this part's layout contains. Since a single page of paper has a front and a back side, the minimal amount of pages per part is two. If a part contains more than 2 pages the amount must be divisible by two. When `content` is set to `single_page` the number of pages must equal 2, when `content` is set to `spread` the number of pages must equal 4. When 'content' is set to `multiple_pages` the number of pages can be set arbitrarily.
   * @param dimensions {} The width and height of the part in the unit set in `dimensions_unit`. The first element of this array corresponds to the width, the second one to the height (or length) of the part in closed state.
   * @param dimensionsUnit {} The unit in which the dimensions are given
   */
  function ExtendedPart(id, createdAt, updatedAt, layout, kind, content, pages, dimensions, dimensionsUnit) {
    _classCallCheck(this, ExtendedPart);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.layout = layout;
    this.kind = kind;
    this.content = content;
    this.pages = pages;
    this.dimensions = dimensions;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>ExtendedPart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedPart} obj Optional instance to populate.
   * @return {module:model/ExtendedPart} The populated <code>ExtendedPart</code> instance.
   */
  _createClass(ExtendedPart, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtendedPart();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('layout')) obj.layout = _ApiClient.ApiClient.convertToType(data['layout'], Object);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('content')) obj.content = _ApiClient.ApiClient.convertToType(data['content'], 'String');
        if (data.hasOwnProperty('pages')) obj.pages = _ApiClient.ApiClient.convertToType(data['pages'], 'Number');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _ApiClient.ApiClient.convertToType(data['dimensions'], ['String']);
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return ExtendedPart;
}();
/**
 * @member {String} id
 */
exports.ExtendedPart = ExtendedPart;
ExtendedPart.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
ExtendedPart.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
ExtendedPart.prototype.updatedAt = undefined;

/**
 * @member {Object} layout
 */
ExtendedPart.prototype.layout = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ExtendedPart.KindEnum = {
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
 * @member {module:model/ExtendedPart.KindEnum} kind
 */
ExtendedPart.prototype.kind = undefined;

/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
ExtendedPart.ContentEnum = {
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
 * @member {module:model/ExtendedPart.ContentEnum} content
 */
ExtendedPart.prototype.content = undefined;

/**
 * The number of pages that this part's layout contains. Since a single page of paper has a front and a back side, the minimal amount of pages per part is two. If a part contains more than 2 pages the amount must be divisible by two. When `content` is set to `single_page` the number of pages must equal 2, when `content` is set to `spread` the number of pages must equal 4. When 'content' is set to `multiple_pages` the number of pages can be set arbitrarily.
 * @member {Number} pages
 */
ExtendedPart.prototype.pages = undefined;

/**
 * The width and height of the part in the unit set in `dimensions_unit`. The first element of this array corresponds to the width, the second one to the height (or length) of the part in closed state.
 * @member {Array.<String>} dimensions
 */
ExtendedPart.prototype.dimensions = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
ExtendedPart.DimensionsUnitEnum = {
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
 * @member {module:model/ExtendedPart.DimensionsUnitEnum} dimensionsUnit
 */
ExtendedPart.prototype.dimensionsUnit = undefined;