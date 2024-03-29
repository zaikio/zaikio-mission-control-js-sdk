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
import {Back} from './Back';
import {Dimensions} from './Dimensions';
import {Front} from './Front';
import {Position} from './Position';

/**
 * The BoxModelFinishing model module.
 * @module model/BoxModelFinishing
 * @version 1.0.0
 */
export class BoxModelFinishing {
  /**
   * Constructs a new <code>BoxModelFinishing</code>.
   * @alias module:model/BoxModelFinishing
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelFinishing.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front} 
   * @param back {module:model/Back} 
   */
  constructor(id, kind, dimensions, position, front, back) {
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
  }

  /**
   * Constructs a <code>BoxModelFinishing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFinishing} obj Optional instance to populate.
   * @return {module:model/BoxModelFinishing} The populated <code>BoxModelFinishing</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelFinishing();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position.constructFromObject(data['position']);
      if (data.hasOwnProperty('front'))
        obj.front = Front.constructFromObject(data['front']);
      if (data.hasOwnProperty('back'))
        obj.back = Back.constructFromObject(data['back']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelFinishing.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFinishing.KindEnum = {
  /**
   * value: "finishing"
   * @const
   */
  finishing: "finishing"
};
/**
 * @member {module:model/BoxModelFinishing.KindEnum} kind
 */
BoxModelFinishing.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelFinishing.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelFinishing.prototype.position = undefined;

/**
 * @member {module:model/Front} front
 */
BoxModelFinishing.prototype.front = undefined;

/**
 * @member {module:model/Back} back
 */
BoxModelFinishing.prototype.back = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPageChildren interface:
// Implement BoxModelPartLayoutChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface:
// Implement BoxModelSpreadChildren interface:
