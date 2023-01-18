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
import {Dimensions1} from './Dimensions1';
import {Front3} from './Front3';
import {Position1} from './Position1';

/**
 * The BoxModelFlapUpdate model module.
 * @module model/BoxModelFlapUpdate
 * @version 1.0.0
 */
export class BoxModelFlapUpdate {
  /**
   * Constructs a new <code>BoxModelFlapUpdate</code>.
   * @alias module:model/BoxModelFlapUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxModelFlapUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFlapUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelFlapUpdate} The populated <code>BoxModelFlapUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelFlapUpdate();
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
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelFlapUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFlapUpdate.KindEnum = {
  /**
   * value: "flap"
   * @const
   */
  flap: "flap"
};
/**
 * @member {module:model/BoxModelFlapUpdate.KindEnum} kind
 */
BoxModelFlapUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelFlapUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelFlapUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelFlapUpdate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelFlapUpdate.prototype.back = undefined;

// Implement BoxModelPageChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface:
