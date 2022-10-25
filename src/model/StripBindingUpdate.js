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
import {FileReferenceUpdate} from './FileReferenceUpdate';

/**
 * The StripBindingUpdate model module.
 * @module model/StripBindingUpdate
 * @version 1.0.0
 */
export class StripBindingUpdate {
  /**
   * Constructs a new <code>StripBindingUpdate</code>.
   * @alias module:model/StripBindingUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StripBindingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripBindingUpdate} obj Optional instance to populate.
   * @return {module:model/StripBindingUpdate} The populated <code>StripBindingUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StripBindingUpdate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceUpdate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('pin_height'))
        obj.pinHeight = ApiClient.convertToType(data['pin_height'], 'String');
      if (data.hasOwnProperty('dimensions_unit'))
        obj.dimensionsUnit = ApiClient.convertToType(data['dimensions_unit'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
StripBindingUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
StripBindingUpdate.KindEnum = {
  /**
   * value: "strip_binding"
   * @const
   */
  stripBinding: "strip_binding"
};
/**
 * The kind of the finishing. Strip binding is a binding process where a strip of plastic with attached pins is used to bind several signatures or parts together. Strip binding is commonly used for document bindings that require tempering resistance (i.e. notary documents, tax reports, balance sheets)
 * @member {module:model/StripBindingUpdate.KindEnum} kind
 */
StripBindingUpdate.prototype.kind = undefined;

/**
 * The height of the pins used in the binding, given in the `dimensions_unit`.
 * @member {String} pinHeight
 */
StripBindingUpdate.prototype.pinHeight = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
StripBindingUpdate.DimensionsUnitEnum = {
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
 * @member {module:model/StripBindingUpdate.DimensionsUnitEnum} dimensionsUnit
 */
StripBindingUpdate.prototype.dimensionsUnit = undefined;

// Implement FinishingUpdate interface:
