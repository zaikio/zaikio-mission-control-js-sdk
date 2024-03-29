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
import {Bleeds1} from './Bleeds1';
import {BoxModelSheetChildrenUpdate} from './BoxModelSheetChildrenUpdate';
import {Dimensions1} from './Dimensions1';
import {Front3} from './Front3';
import {Position1} from './Position1';
import {PrintFreeMargins1} from './PrintFreeMargins1';
import {Rear1} from './Rear1';

/**
 * The BoxModelSheetUpdate model module.
 * @module model/BoxModelSheetUpdate
 * @version 1.0.0
 */
export class BoxModelSheetUpdate {
  /**
   * Constructs a new <code>BoxModelSheetUpdate</code>.
   * @alias module:model/BoxModelSheetUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxModelSheetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSheetUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelSheetUpdate} The populated <code>BoxModelSheetUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelSheetUpdate();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('sides'))
        obj.sides = ApiClient.convertToType(data['sides'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions1.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position1.constructFromObject(data['position']);
      if (data.hasOwnProperty('front'))
        obj.front = Front3.constructFromObject(data['front']);
      if (data.hasOwnProperty('rear'))
        obj.rear = Rear1.constructFromObject(data['rear']);
      if (data.hasOwnProperty('bleeds'))
        obj.bleeds = Bleeds1.constructFromObject(data['bleeds']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = PrintFreeMargins1.constructFromObject(data['print_free_margins']);
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [BoxModelSheetChildrenUpdate]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelSheetUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetUpdate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * @member {module:model/BoxModelSheetUpdate.KindEnum} kind
 */
BoxModelSheetUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetUpdate.SidesEnum = {
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
 * @member {module:model/BoxModelSheetUpdate.SidesEnum} sides
 */
BoxModelSheetUpdate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSheetUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSheetUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSheetUpdate.prototype.front = undefined;

/**
 * @member {module:model/Rear1} rear
 */
BoxModelSheetUpdate.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSheetUpdate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSheetUpdate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSheetChildrenUpdate>} children
 */
BoxModelSheetUpdate.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildrenUpdate interface:
