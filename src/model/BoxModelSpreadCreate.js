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
import {Back3} from './Back3';
import {Bleeds1} from './Bleeds1';
import {BoxModelSpreadChildrenCreate} from './BoxModelSpreadChildrenCreate';
import {Dimensions1} from './Dimensions1';
import {Front3} from './Front3';
import {Position1} from './Position1';
import {PrintFreeMargins1} from './PrintFreeMargins1';

/**
 * The BoxModelSpreadCreate model module.
 * @module model/BoxModelSpreadCreate
 * @version 1.0.0
 */
export class BoxModelSpreadCreate {
  /**
   * Constructs a new <code>BoxModelSpreadCreate</code>.
   * @alias module:model/BoxModelSpreadCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxModelSpreadCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpreadCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelSpreadCreate} The populated <code>BoxModelSpreadCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelSpreadCreate();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions1.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position1.constructFromObject(data['position']);
      if (data.hasOwnProperty('front'))
        obj.front = Front3.constructFromObject(data['front']);
      if (data.hasOwnProperty('back'))
        obj.back = Back3.constructFromObject(data['back']);
      if (data.hasOwnProperty('sides'))
        obj.sides = ApiClient.convertToType(data['sides'], 'String');
      if (data.hasOwnProperty('bleeds'))
        obj.bleeds = Bleeds1.constructFromObject(data['bleeds']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = PrintFreeMargins1.constructFromObject(data['print_free_margins']);
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [BoxModelSpreadChildrenCreate]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelSpreadCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadCreate.KindEnum = {
  /**
   * value: "spread"
   * @const
   */
  spread: "spread"
};
/**
 * @member {module:model/BoxModelSpreadCreate.KindEnum} kind
 */
BoxModelSpreadCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSpreadCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSpreadCreate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSpreadCreate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelSpreadCreate.prototype.back = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadCreate.SidesEnum = {
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
 * @member {module:model/BoxModelSpreadCreate.SidesEnum} sides
 */
BoxModelSpreadCreate.prototype.sides = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSpreadCreate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSpreadCreate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSpreadChildrenCreate>} children
 */
BoxModelSpreadCreate.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildrenCreate interface:
// Implement BoxModelPartLayoutChildrenCreate interface:
// Implement BoxModelRollSegmentChildrenCreate interface:
// Implement BoxModelSheetChildrenCreate interface: