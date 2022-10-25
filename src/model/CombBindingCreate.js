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
import {FileReferenceCreate} from './FileReferenceCreate';

/**
 * The CombBindingCreate model module.
 * @module model/CombBindingCreate
 * @version 1.0.0
 */
export class CombBindingCreate {
  /**
   * Constructs a new <code>CombBindingCreate</code>.
   * @alias module:model/CombBindingCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CombBindingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombBindingCreate} obj Optional instance to populate.
   * @return {module:model/CombBindingCreate} The populated <code>CombBindingCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CombBindingCreate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceCreate]);
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
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
CombBindingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
CombBindingCreate.KindEnum = {
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding"
};
/**
 * The kind of the finishing. Comb binding is a binding method in which a plastic spine (comb) with attached rings is inserted into punched holes in order to bind multiple singatures or parts together. This binding technique is commonly used for formats such as A4 or US Letter.
 * @member {module:model/CombBindingCreate.KindEnum} kind
 */
CombBindingCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
CombBindingCreate.ShapeEnum = {
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
 * @member {module:model/CombBindingCreate.ShapeEnum} shape
 */
CombBindingCreate.prototype.shape = undefined;

/**
 * Whether or not a hanger is attached in the center of the binding. This hanger can be used to attach the print product to a wall (i.e. calendars).
 * @member {Boolean} hanger
 */
CombBindingCreate.prototype.hanger = undefined;

/**
 * The diameter of the rings in the comb given in the `dimensions_unit`.
 * @member {String} diameter
 */
CombBindingCreate.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
CombBindingCreate.DimensionsUnitEnum = {
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
 * @member {module:model/CombBindingCreate.DimensionsUnitEnum} dimensionsUnit
 */
CombBindingCreate.prototype.dimensionsUnit = undefined;

// Implement FinishingCreate interface:
