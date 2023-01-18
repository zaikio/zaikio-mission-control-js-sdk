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
import {FileReferenceCreate} from './FileReferenceCreate';

/**
 * The RingBindingCreate model module.
 * @module model/RingBindingCreate
 * @version 1.0.0
 */
export class RingBindingCreate {
  /**
   * Constructs a new <code>RingBindingCreate</code>.
   * @alias module:model/RingBindingCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RingBindingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RingBindingCreate} obj Optional instance to populate.
   * @return {module:model/RingBindingCreate} The populated <code>RingBindingCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RingBindingCreate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceCreate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('shape'))
        obj.shape = ApiClient.convertToType(data['shape'], 'String');
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
RingBindingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingCreate.KindEnum = {
  /**
   * value: "ring_binding"
   * @const
   */
  ringBinding: "ring_binding"
};
/**
 * The kind of the finishing. Ring binding is a type of binding where small individual rings, connected rings or spirals are used to bind parts of a print job together. This finishing must thus be attached to all parts that are bound toghether.
 * @member {module:model/RingBindingCreate.KindEnum} kind
 */
RingBindingCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>shape</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingCreate.ShapeEnum = {
  /**
   * value: "d"
   * @const
   */
  d: "d",

  /**
   * value: "oval"
   * @const
   */
  oval: "oval",

  /**
   * value: "round"
   * @const
   */
  round: "round",

  /**
   * value: "slant_d"
   * @const
   */
  slantD: "slant_d"
};
/**
 * The shape of the rings used for binding
 * @member {module:model/RingBindingCreate.ShapeEnum} shape
 */
RingBindingCreate.prototype.shape = undefined;

/**
 * @member {String} diameter
 */
RingBindingCreate.prototype.diameter = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
RingBindingCreate.DimensionsUnitEnum = {
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
 * @member {module:model/RingBindingCreate.DimensionsUnitEnum} dimensionsUnit
 */
RingBindingCreate.prototype.dimensionsUnit = undefined;

// Implement FinishingCreate interface:
