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
import {Dimensions1} from './Dimensions1';
import {Position1} from './Position1';
import {PrintFreeMargins1} from './PrintFreeMargins1';

/**
 * The BoxModelSpineUpdate model module.
 * @module model/BoxModelSpineUpdate
 * @version 1.0.0
 */
export class BoxModelSpineUpdate {
  /**
   * Constructs a new <code>BoxModelSpineUpdate</code>.
   * @alias module:model/BoxModelSpineUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxModelSpineUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpineUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelSpineUpdate} The populated <code>BoxModelSpineUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelSpineUpdate();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions1.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('position'))
        obj.position = Position1.constructFromObject(data['position']);
      if (data.hasOwnProperty('print_free_margins'))
        obj.printFreeMargins = PrintFreeMargins1.constructFromObject(data['print_free_margins']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
BoxModelSpineUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpineUpdate.KindEnum = {
  /**
   * value: "spine"
   * @const
   */
  spine: "spine"
};
/**
 * @member {module:model/BoxModelSpineUpdate.KindEnum} kind
 */
BoxModelSpineUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSpineUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSpineUpdate.prototype.position = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSpineUpdate.prototype.printFreeMargins = undefined;

// Implement BoxModelPageChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface:
