/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Box model module.
 * @module model/Box
 * @version 1.0.0
 */
export class Box {
  /**
   * Constructs a new <code>Box</code>.
   * @alias module:model/Box
   * @class
   * @param children {Array.<module:model/Box>} 
   * @param id {String} 
   * @param kind {module:model/Box.KindEnum} Describes the kind of this box
   * @param position {Array.<Number>} The position where the top left corner of this box is placed relative to the position of it's parent. The first coordinate describes distance from the `top`, the second coordinate describes the distance from the `left`. All measurements are given in the unit selected in the header.
   * @param dimensions {Array.<Number>} The dimensions of the box given in the measurement unit selected in the header. The first array value represents the `length` of the box (x-axis), while the second array value represents the `height` (y-axis).
   * @param bleeds {Array.<Number>} The size of the bleeds outside the box given in the measurement unit selected in the header. The array values represent the bleeds for the following sides of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no bleed for a side, the corresponding value must be 0.
   * @param printFreeMargins {Array.<Number>} The size of the print free area inside the boxen given in the measurement unit selected in the header. The array values represent the bleeds for the following parts of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no print free area for a side of the box, the corresponding value must be 0.
   * @param pageNumbers {Array.<Number>} The page numbers that are represented by this box. The first element in the array corresponds to the page number of the facing side of the page, the second element in the array corresponds to the page number of the back side of the page.
   * @param reference {String} 
   */
  constructor(children, id, kind, position, dimensions, bleeds, printFreeMargins, pageNumbers, reference) {
    this.children = children;
    this.id = id;
    this.kind = kind;
    this.position = position;
    this.dimensions = dimensions;
    this.bleeds = bleeds;
    this.printFreeMargins = printFreeMargins;
    this.pageNumbers = pageNumbers;
    this.reference = reference;
  }

  /**
   * Constructs a <code>Box</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Box} obj Optional instance to populate.
   * @return {module:model/Box} The populated <code>Box</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Box();
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [Box]);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], ['Number']);
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = ApiClient.convertToType(data['dimensions'], ['Number']);
      if (data.hasOwnProperty('bleeds'))
        obj.bleeds = ApiClient.convertToType(data['bleeds'], ['Number']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = ApiClient.convertToType(data['print_free_margins'], ['Number']);
      if (data.hasOwnProperty('page_numbers'))
        obj.pageNumbers = ApiClient.convertToType(data['page_numbers'], ['Number']);
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Box>} children
 */
Box.prototype.children = undefined;

/**
 * @member {String} id
 */
Box.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Box.KindEnum = {
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
 * @member {module:model/Box.KindEnum} kind
 */
Box.prototype.kind = undefined;

/**
 * The position where the top left corner of this box is placed relative to the position of it's parent. The first coordinate describes distance from the `top`, the second coordinate describes the distance from the `left`. All measurements are given in the unit selected in the header.
 * @member {Array.<Number>} position
 */
Box.prototype.position = undefined;

/**
 * The dimensions of the box given in the measurement unit selected in the header. The first array value represents the `length` of the box (x-axis), while the second array value represents the `height` (y-axis).
 * @member {Array.<Number>} dimensions
 */
Box.prototype.dimensions = undefined;

/**
 * The size of the bleeds outside the box given in the measurement unit selected in the header. The array values represent the bleeds for the following sides of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no bleed for a side, the corresponding value must be 0.
 * @member {Array.<Number>} bleeds
 */
Box.prototype.bleeds = undefined;

/**
 * The size of the print free area inside the boxen given in the measurement unit selected in the header. The array values represent the bleeds for the following parts of the box, in clockwise order from `top`, `right`, `bottom`, `left`. If there is no print free area for a side of the box, the corresponding value must be 0.
 * @member {Array.<Number>} printFreeMargins
 */
Box.prototype.printFreeMargins = undefined;

/**
 * The page numbers that are represented by this box. The first element in the array corresponds to the page number of the facing side of the page, the second element in the array corresponds to the page number of the back side of the page.
 * @member {Array.<Number>} pageNumbers
 */
Box.prototype.pageNumbers = undefined;

/**
 * @member {String} reference
 */
Box.prototype.reference = undefined;

