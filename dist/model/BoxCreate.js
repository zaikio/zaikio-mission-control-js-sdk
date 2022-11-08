"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxCreate model module.
 * @module model/BoxCreate
 * @version 1.0.0
 */
var BoxCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxCreate</code>.
   * @alias module:model/BoxCreate
   * @class
   */
  function BoxCreate() {
    _classCallCheck(this, BoxCreate);
  }

  /**
   * Constructs a <code>BoxCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxCreate} obj Optional instance to populate.
   * @return {module:model/BoxCreate} The populated <code>BoxCreate</code> instance.
   */
  _createClass(BoxCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxCreate();
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [BoxCreate]);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('position')) obj.position = _ApiClient.ApiClient.convertToType(data['position'], ['Number']);
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _ApiClient.ApiClient.convertToType(data['dimensions'], ['Number']);
        if (data.hasOwnProperty('orientation')) obj.orientation = _ApiClient.ApiClient.convertToType(data['orientation'], 'Number');
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _ApiClient.ApiClient.convertToType(data['bleeds'], ['Number']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _ApiClient.ApiClient.convertToType(data['print_free_margins'], ['Number']);
        if (data.hasOwnProperty('page_numbers')) obj.pageNumbers = _ApiClient.ApiClient.convertToType(data['page_numbers'], ['Number']);
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return BoxCreate;
}();
/**
 * @member {Array.<module:model/BoxCreate>} children
 */
exports.BoxCreate = BoxCreate;
BoxCreate.prototype.children = undefined;

/**
 * @member {String} id
 */
BoxCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxCreate.KindEnum = {
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
   * value: "spread"
   * @const
   */
  spread: "spread",
  /**
   * value: "page"
   * @const
   */
  page: "page",
  /**
   * value: "fold"
   * @const
   */
  fold: "fold",
  /**
   * value: "finishing"
   * @const
   */
  finishing: "finishing",
  /**
   * value: "flap"
   * @const
   */
  flap: "flap",
  /**
   * value: "spine"
   * @const
   */
  spine: "spine",
  /**
   * value: "mark"
   * @const
   */
  mark: "mark"
};
/**
 * Describes the kind of this box
 * @member {module:model/BoxCreate.KindEnum} kind
 */
BoxCreate.prototype.kind = undefined;

/**
 * The position where the top left corner of this box is placed relative to the position of it's parent. The first coordinate describes distance from the `top`, the second coordinate describes the distance from the `left`. All measurements are given in the unit selected in the header.
 * @member {Array.<Number>} position
 */
BoxCreate.prototype.position = undefined;

/**
 * The dimensions of the box given in the measurement unit selected in the header. The first array value represents the `length` of the box (x-axis), while the second array value represents the `height` (y-axis).
 * @member {Array.<Number>} dimensions
 */
BoxCreate.prototype.dimensions = undefined;

/**
 * The orientation of any referenced resource contained by this Box. This allows the specification of, for example, a landscape page to be printed alongside portrait pages, or more complex layouts of finishings to be applied without needing to edit the source files. Valid values are 0, 90, 180 or 270. This is expressed in degrees of clockwise rotation from the 0,0 co-ordinate of the box. Will default to 0 (natural orientation) if not specified.
 * @member {Number} orientation
 */
BoxCreate.prototype.orientation = undefined;

/**
 * The size of the bleeds outside the box given in the measurement unit selected in the header. The array values represent the bleeds for the following sides of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no bleed for a side, the corresponding value must be 0.
 * @member {Array.<Number>} bleeds
 */
BoxCreate.prototype.bleeds = undefined;

/**
 * The size of the print free area inside the boxen given in the measurement unit selected in the header. The array values represent the bleeds for the following parts of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no print free area for a side of the box, the corresponding value must be 0.
 * @member {Array.<Number>} printFreeMargins
 */
BoxCreate.prototype.printFreeMargins = undefined;

/**
 * The page numbers that are represented by this box. The first element in the array corresponds to the page number of the facing side of the page, the second element in the array corresponds to the page number of the back side of the page.
 * @member {Array.<Number>} pageNumbers
 */
BoxCreate.prototype.pageNumbers = undefined;

/**
 * @member {String} reference
 */
BoxCreate.prototype.reference = undefined;