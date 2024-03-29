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
import {FileReferenceUpdate} from './FileReferenceUpdate';

/**
 * The HoleUpdate model module.
 * @module model/HoleUpdate
 * @version 1.0.0
 */
export class HoleUpdate {
  /**
   * Constructs a new <code>HoleUpdate</code>.
   * @alias module:model/HoleUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HoleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HoleUpdate} obj Optional instance to populate.
   * @return {module:model/HoleUpdate} The populated <code>HoleUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HoleUpdate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceUpdate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('shape'))
        obj.shape = ApiClient.convertToType(data['shape'], 'String');
      if (data.hasOwnProperty('diameter'))
        obj.diameter = ApiClient.convertToType(data['diameter'], 'String');
      if (data.hasOwnProperty('depth'))
        obj.depth = ApiClient.convertToType(data['depth'], 'String');
      if (data.hasOwnProperty('dimensions_unit'))
        obj.dimensionsUnit = ApiClient.convertToType(data['dimensions_unit'], 'String');
      if (data.hasOwnProperty('grommet'))
        obj.grommet = ApiClient.convertToType(data['grommet'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
HoleUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.KindEnum = {
  /**
   * value: "hole"
   * @const
   */
  hole: "hole"
};
/**
 * The kind of the finishing. Hole means there is a hole or many holes made into the substrate of the assigned part in the way described here.
 * @member {module:model/HoleUpdate.KindEnum} kind
 */
HoleUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.ShapeEnum = {
  /**
   * value: "elliptic"
   * @const
   */
  elliptic: "elliptic",

  /**
   * value: "rectangular"
   * @const
   */
  rectangular: "rectangular",

  /**
   * value: "round"
   * @const
   */
  round: "round"
};
/**
 * The shape of the hole that should be drilled.
 * @member {module:model/HoleUpdate.ShapeEnum} shape
 */
HoleUpdate.prototype.shape = undefined;

/**
 * The diameter of the hole that should be drilled given in the unit specified in `dimensions_unit`. For rectangular holes the diameter is measured edge to edge. 
 * @member {String} diameter
 */
HoleUpdate.prototype.diameter = undefined;

/**
 * The depth of the hole to be drilled given in the unit specified in `dimensions_unit`.
 * @member {String} depth
 */
HoleUpdate.prototype.depth = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
HoleUpdate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",

  /**
   * value: "foot"
   * @const
   */
  foot: "foot",

  /**
   * value: "inch"
   * @const
   */
  inch: "inch",

  /**
   * value: "m"
   * @const
   */
  m: "m",

  /**
   * value: "mm"
   * @const
   */
  mm: "mm",

  /**
   * value: "pica"
   * @const
   */
  pica: "pica",

  /**
   * value: "point"
   * @const
   */
  point: "point"
};
/**
 * The unit for the dimensions given in `length` and `width`. This property must be set if either `length` or `width` are given.
 * @member {module:model/HoleUpdate.DimensionsUnitEnum} dimensionsUnit
 */
HoleUpdate.prototype.dimensionsUnit = undefined;

/**
 * Should the hole have a grommet
 * @member {Boolean} grommet
 */
HoleUpdate.prototype.grommet = undefined;

// Implement FinishingUpdate interface:
