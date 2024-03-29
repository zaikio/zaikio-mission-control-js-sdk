/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Back2} from './Back2';
import {Bleeds} from './Bleeds';
import {BoxModelSpreadChildren} from './BoxModelSpreadChildren';
import {Dimensions} from './Dimensions';
import {Front2} from './Front2';
import {Position} from './Position';
import {PrintFreeMargins} from './PrintFreeMargins';

/**
 * The BoxModelSpread model module.
 * @module model/BoxModelSpread
 * @version 1.0.0
 */
export class BoxModelSpread {
  /**
   * Constructs a new <code>BoxModelSpread</code>.
   * @alias module:model/BoxModelSpread
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelSpread.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param back {module:model/Back2} 
   * @param sides {module:model/BoxModelSpread.SidesEnum} 
   * @param bleeds {module:model/Bleeds} 
   * @param printFreeMargins {module:model/PrintFreeMargins} 
   * @param children {Array.<module:model/BoxModelSpreadChildren>} 
   */
  constructor(id, kind, dimensions, position, front, back, sides, bleeds, printFreeMargins, children) {
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
    this.sides = sides;
    this.bleeds = bleeds;
    this.printFreeMargins = printFreeMargins;
    this.children = children;
  }

  /**
   * Constructs a <code>BoxModelSpread</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpread} obj Optional instance to populate.
   * @return {module:model/BoxModelSpread} The populated <code>BoxModelSpread</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelSpread();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position.constructFromObject(data['position']);
      if (data.hasOwnProperty('front'))
        obj.front = Front2.constructFromObject(data['front']);
      if (data.hasOwnProperty('back'))
        obj.back = Back2.constructFromObject(data['back']);
      if (data.hasOwnProperty('sides'))
        obj.sides = ApiClient.convertToType(data['sides'], 'String');
      if (data.hasOwnProperty('bleeds'))
        obj.bleeds = Bleeds.constructFromObject(data['bleeds']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = PrintFreeMargins.constructFromObject(data['print_free_margins']);
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [BoxModelSpreadChildren]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelSpread.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpread.KindEnum = {
  /**
   * value: "spread"
   * @const
   */
  spread: "spread"
};
/**
 * @member {module:model/BoxModelSpread.KindEnum} kind
 */
BoxModelSpread.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelSpread.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelSpread.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelSpread.prototype.front = undefined;

/**
 * @member {module:model/Back2} back
 */
BoxModelSpread.prototype.back = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpread.SidesEnum = {
  /**
   * value: "one"
   * @const
   */
  one: "one",

  /**
   * value: "headtohead"
   * @const
   */
  headtohead: "headtohead",

  /**
   * value: "headtofoot"
   * @const
   */
  headtofoot: "headtofoot"
};
/**
 * @member {module:model/BoxModelSpread.SidesEnum} sides
 */
BoxModelSpread.prototype.sides = undefined;

/**
 * @member {module:model/Bleeds} bleeds
 */
BoxModelSpread.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins} printFreeMargins
 */
BoxModelSpread.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSpreadChildren>} children
 */
BoxModelSpread.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPartLayoutChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface:
