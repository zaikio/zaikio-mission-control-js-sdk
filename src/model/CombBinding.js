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
 * The CombBinding model module.
 * @module model/CombBinding
 * @version 1.0.0
 */
export class CombBinding {
  /**
   * Constructs a new <code>CombBinding</code>.
   * @alias module:model/CombBinding
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/CombBinding.KindEnum} The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter.
   * @param shape {module:model/CombBinding.ShapeEnum} The shape of the binding comb. Defaults to `single` if not set
   * @param hanger {Boolean} Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars).
   * @param diameter {String} The diameter of the rings in the comb given in the `dimensions_unit`.
   * @param dimensionsUnit {module:model/CombBinding.DimensionsUnitEnum} The unit for the dimensions given in `diameter`. Must be set if `diameter` is set.
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
   * Constructs a <code>CombBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombBinding} obj Optional instance to populate.
   * @return {module:model/CombBinding} The populated <code>CombBinding</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CombBinding();
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
CombBinding.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
CombBinding.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
CombBinding.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
CombBinding.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.KindEnum = {
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding"
};
/**
 * The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter.
 * @member {module:model/CombBinding.KindEnum} kind
 */
CombBinding.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.ShapeEnum = {
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
 * The shape of the binding comb. Defaults to `single` if not set
 * @member {module:model/CombBinding.ShapeEnum} shape
 */
CombBinding.prototype.shape = undefined;

/**
 * Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars).
 * @member {Boolean} hanger
 */
CombBinding.prototype.hanger = undefined;

/**
 * The diameter of the rings in the comb given in the `dimensions_unit`.
 * @member {String} diameter
 */
CombBinding.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
CombBinding.DimensionsUnitEnum = {
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
 * @member {module:model/CombBinding.DimensionsUnitEnum} dimensionsUnit
 */
CombBinding.prototype.dimensionsUnit = undefined;

// Implement Finishing interface:
