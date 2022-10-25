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
import {FileReference} from './FileReference';

/**
 * The SpiralBinding model module.
 * @module model/SpiralBinding
 * @version 1.0.0
 */
export class SpiralBinding {
  /**
   * Constructs a new <code>SpiralBinding</code>.
   * @alias module:model/SpiralBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/SpiralBinding.KindEnum} The kind of the finishing. Spiral binding is a binding method in which a metal or plastic thread that has been shaped into a sprial is inserted into punched holes in order to bind multiple singatures or parts together.
   * @param shape {module:model/SpiralBinding.ShapeEnum} The shape of the binding comb. Defaults to `single` if not set.
   * @param hanger {Boolean} Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the printed item to a wall (i.e. calendars).
   * @param diameter {String} The diameter of the rings in the comb given in the `dimension_unit`.
   * @param dimensionsUnit {module:model/SpiralBinding.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
   */
  constructor(id, createdAt, updatedAt, fileReferences, kind, shape, hanger, diameter, dimensionsUnit) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.shape = shape;
    this.hanger = hanger;
    this.diameter = diameter;
    this.dimensionsUnit = dimensionsUnit;
  }

  /**
   * Constructs a <code>SpiralBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpiralBinding} obj Optional instance to populate.
   * @return {module:model/SpiralBinding} The populated <code>SpiralBinding</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpiralBinding();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReference]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('shape'))
        obj.shape = ApiClient.convertToType(data['shape'], 'String');
      if (data.hasOwnProperty('hanger'))
        obj.hanger = ApiClient.convertToType(data['hanger'], 'Boolean');
      if (data.hasOwnProperty('diameter'))
        obj.diameter = ApiClient.convertToType(data['diameter'], 'String');
      if (data.hasOwnProperty('dimensions_unit'))
        obj.dimensionsUnit = ApiClient.convertToType(data['dimensions_unit'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
SpiralBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
SpiralBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
SpiralBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
SpiralBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBinding.KindEnum = {
  /**
   * value: "spiral_binding"
   * @const
   */
  spiralBinding: "spiral_binding"
};
/**
 * The kind of the finishing. Spiral binding is a binding method in which a metal or plastic thread that has been shaped into a sprial is inserted into punched holes in order to bind multiple singatures or parts together.
 * @member {module:model/SpiralBinding.KindEnum} kind
 */
SpiralBinding.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBinding.ShapeEnum = {
  /**
   * value: "single"
   * @const
   */
  single: "single",

  /**
   * value: "twin"
   * @const
   */
  twin: "twin"
};
/**
 * The shape of the binding comb. Defaults to `single` if not set.
 * @member {module:model/SpiralBinding.ShapeEnum} shape
 */
SpiralBinding.prototype.shape = undefined;

/**
 * Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the printed item to a wall (i.e. calendars).
 * @member {Boolean} hanger
 */
SpiralBinding.prototype.hanger = undefined;

/**
 * The diameter of the rings in the comb given in the `dimension_unit`.
 * @member {String} diameter
 */
SpiralBinding.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
SpiralBinding.DimensionsUnitEnum = {
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
 * The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
 * @member {module:model/SpiralBinding.DimensionsUnitEnum} dimensionsUnit
 */
SpiralBinding.prototype.dimensionsUnit = undefined;

// Implement Finishing interface: