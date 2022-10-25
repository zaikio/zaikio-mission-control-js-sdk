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
 * The ColorCreate model module.
 * @module model/ColorCreate
 * @version 1.0.0
 */
export class ColorCreate {
  /**
   * Constructs a new <code>ColorCreate</code>.
   * @alias module:model/ColorCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ColorCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ColorCreate} obj Optional instance to populate.
   * @return {module:model/ColorCreate} The populated <code>ColorCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ColorCreate();
      if (data.hasOwnProperty('surface'))
        obj.surface = ApiClient.convertToType(data['surface'], 'String');
      if (data.hasOwnProperty('system'))
        obj.system = ApiClient.convertToType(data['system'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('coverage'))
        obj.coverage = ApiClient.convertToType(data['coverage'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>surface</code> property.
 * @enum {String}
 * @readonly
 */
ColorCreate.SurfaceEnum = {
  /**
   * value: "front"
   * @const
   */
  front: "front",

  /**
   * value: "back"
   * @const
   */
  back: "back"
};
/**
 * Whether this color is to be applied on the front or back of the substrate
 * @member {module:model/ColorCreate.SurfaceEnum} surface
 */
ColorCreate.prototype.surface = undefined;

/**
 * Allowed values for the <code>system</code> property.
 * @enum {String}
 * @readonly
 */
ColorCreate.SystemEnum = {
  /**
   * value: "CMYK"
   * @const
   */
  CMYK: "CMYK",

  /**
   * value: "HKS"
   * @const
   */
  HKS: "HKS",

  /**
   * value: "pantone"
   * @const
   */
  pantone: "pantone"
};
/**
 * The color reference system in which color name is given
 * @member {module:model/ColorCreate.SystemEnum} system
 */
ColorCreate.prototype.system = undefined;

/**
 * The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
 * @member {String} name
 */
ColorCreate.prototype.name = undefined;

/**
 * The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
 * @member {String} coverage
 */
ColorCreate.prototype.coverage = undefined;
