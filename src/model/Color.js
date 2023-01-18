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

/**
 * The Color model module.
 * @module model/Color
 * @version 1.0.0
 */
export class Color {
  /**
   * Constructs a new <code>Color</code>.
   * @alias module:model/Color
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param surface {module:model/Color.SurfaceEnum} Whether this color is to be applied on the front or back of the substrate
   * @param system {module:model/Color.SystemEnum} The color reference system in which color name is given
   * @param name {String} The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
   * @param coverage {String} The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
   * @param printStandard {module:model/Color.PrintStandardEnum} Set an output desired color calibration to reduce likelihood of errors.
   */
  constructor(id, createdAt, updatedAt, surface, system, name, coverage, printStandard) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.surface = surface;
    this.system = system;
    this.name = name;
    this.coverage = coverage;
    this.printStandard = printStandard;
  }

  /**
   * Constructs a <code>Color</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Color} obj Optional instance to populate.
   * @return {module:model/Color} The populated <code>Color</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Color();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('surface'))
        obj.surface = ApiClient.convertToType(data['surface'], 'String');
      if (data.hasOwnProperty('system'))
        obj.system = ApiClient.convertToType(data['system'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('coverage'))
        obj.coverage = ApiClient.convertToType(data['coverage'], 'String');
      if (data.hasOwnProperty('print_standard'))
        obj.printStandard = ApiClient.convertToType(data['print_standard'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Color.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Color.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Color.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>surface</code> property.
 * @enum {String}
 * @readonly
 */
Color.SurfaceEnum = {
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
 * @member {module:model/Color.SurfaceEnum} surface
 */
Color.prototype.surface = undefined;

/**
 * Allowed values for the <code>system</code> property.
 * @enum {String}
 * @readonly
 */
Color.SystemEnum = {
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
 * @member {module:model/Color.SystemEnum} system
 */
Color.prototype.system = undefined;

/**
 * The name of the colour inside the selected reference system. When the system is CMYK only Cyan, Magenta, Yellow, Black are allowed. A system/colour name combinatin must be unique per surface.
 * @member {String} name
 */
Color.prototype.name = undefined;

/**
 * The amount of colour coverage for this colour on the given surface. Must be expressed as percentage, thus the value must be greather than 0. A value of 1 represents 100% coverage. The value might go up to 10, equallying 1000% coverage for jobs where the same colour is applied in several coatings.
 * @member {String} coverage
 */
Color.prototype.coverage = undefined;

/**
 * Allowed values for the <code>printStandard</code> property.
 * @enum {String}
 * @readonly
 */
Color.PrintStandardEnum = {
  /**
   * value: "CRPC3"
   * @const
   */
  cRPC3: "CRPC3",

  /**
   * value: "CRPC6"
   * @const
   */
  cRPC6: "CRPC6",

  /**
   * value: "FOGRA39"
   * @const
   */
  fOGRA39: "FOGRA39",

  /**
   * value: "FOGRA40"
   * @const
   */
  fOGRA40: "FOGRA40",

  /**
   * value: "FOGRA45"
   * @const
   */
  fOGRA45: "FOGRA45",

  /**
   * value: "FOGRA46"
   * @const
   */
  fOGRA46: "FOGRA46",

  /**
   * value: "FOGRA47"
   * @const
   */
  fOGRA47: "FOGRA47",

  /**
   * value: "FOGRA51"
   * @const
   */
  fOGRA51: "FOGRA51",

  /**
   * value: "FOGRA52"
   * @const
   */
  fOGRA52: "FOGRA52",

  /**
   * value: "FOGRA54"
   * @const
   */
  fOGRA54: "FOGRA54",

  /**
   * value: "FOGRA59"
   * @const
   */
  fOGRA59: "FOGRA59",

  /**
   * value: "GRACOL"
   * @const
   */
  GRACOL: "GRACOL",

  /**
   * value: "IFRA26"
   * @const
   */
  iFRA26: "IFRA26",

  /**
   * value: "TR001"
   * @const
   */
  tR001: "TR001",

  /**
   * value: "TR005"
   * @const
   */
  tR005: "TR005",

  /**
   * value: "TR006"
   * @const
   */
  tR006: "TR006"
};
/**
 * Set an output desired color calibration to reduce likelihood of errors.
 * @member {module:model/Color.PrintStandardEnum} printStandard
 */
Color.prototype.printStandard = undefined;

