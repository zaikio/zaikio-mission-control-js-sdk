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
import {Bleeds} from './Bleeds';
import {BoxModelSheetChildren} from './BoxModelSheetChildren';
import {Dimensions} from './Dimensions';
import {Front2} from './Front2';
import {Position} from './Position';
import {PrintFreeMargins} from './PrintFreeMargins';
import {Rear} from './Rear';

/**
 * The BoxModelSheet model module.
 * @module model/BoxModelSheet
 * @version 1.0.0
 */
export class BoxModelSheet {
  /**
   * Constructs a new <code>BoxModelSheet</code>.
   * @alias module:model/BoxModelSheet
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelSheet.KindEnum} 
   * @param sides {module:model/BoxModelSheet.SidesEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param rear {module:model/Rear} 
   * @param bleeds {module:model/Bleeds} 
   * @param printFreeMargins {module:model/PrintFreeMargins} 
   * @param children {Array.<module:model/BoxModelSheetChildren>} 
   */
  constructor(id, kind, sides, dimensions, position, front, rear, bleeds, printFreeMargins, children) {
    this.id = id;
    this.kind = kind;
    this.sides = sides;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.rear = rear;
    this.bleeds = bleeds;
    this.printFreeMargins = printFreeMargins;
    this.children = children;
  }

  /**
   * Constructs a <code>BoxModelSheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSheet} obj Optional instance to populate.
   * @return {module:model/BoxModelSheet} The populated <code>BoxModelSheet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelSheet();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('sides'))
        obj.sides = ApiClient.convertToType(data['sides'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position.constructFromObject(data['position']);
      if (data.hasOwnProperty('front'))
        obj.front = Front2.constructFromObject(data['front']);
      if (data.hasOwnProperty('rear'))
        obj.rear = Rear.constructFromObject(data['rear']);
      if (data.hasOwnProperty('bleeds'))
        obj.bleeds = Bleeds.constructFromObject(data['bleeds']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = PrintFreeMargins.constructFromObject(data['print_free_margins']);
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [BoxModelSheetChildren]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelSheet.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheet.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * @member {module:model/BoxModelSheet.KindEnum} kind
 */
BoxModelSheet.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheet.SidesEnum = {
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
 * @member {module:model/BoxModelSheet.SidesEnum} sides
 */
BoxModelSheet.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelSheet.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelSheet.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelSheet.prototype.front = undefined;

/**
 * @member {module:model/Rear} rear
 */
BoxModelSheet.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds} bleeds
 */
BoxModelSheet.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins} printFreeMargins
 */
BoxModelSheet.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSheetChildren>} children
 */
BoxModelSheet.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildren interface: