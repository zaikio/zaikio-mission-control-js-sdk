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
import {BoxModelIntermediateLayoutChildrenUpdate} from './BoxModelIntermediateLayoutChildrenUpdate';

/**
 * The BoxModelIntermediateLayoutUpdate model module.
 * @module model/BoxModelIntermediateLayoutUpdate
 * @version 1.0.0
 */
export class BoxModelIntermediateLayoutUpdate {
  /**
   * Constructs a new <code>BoxModelIntermediateLayoutUpdate</code>.
   * @alias module:model/BoxModelIntermediateLayoutUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxModelIntermediateLayoutUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelIntermediateLayoutUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelIntermediateLayoutUpdate} The populated <code>BoxModelIntermediateLayoutUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxModelIntermediateLayoutUpdate();
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('format'))
        obj.format = ApiClient.convertToType(data['format'], 'String');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (data.hasOwnProperty('contents'))
        obj.contents = ApiClient.convertToType(data['contents'], [BoxModelIntermediateLayoutChildrenUpdate]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>version</code> property.
 * @enum {Number}
 * @readonly
 */
BoxModelIntermediateLayoutUpdate.VersionEnum = {
  /**
   * value: 1
   * @const
   */
  _1: 1
};
/**
 * @member {module:model/BoxModelIntermediateLayoutUpdate.VersionEnum} version
 */
BoxModelIntermediateLayoutUpdate.prototype.version = undefined;

/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutUpdate.FormatEnum = {
  /**
   * value: "box"
   * @const
   */
  box: "box"
};
/**
 * @member {module:model/BoxModelIntermediateLayoutUpdate.FormatEnum} format
 */
BoxModelIntermediateLayoutUpdate.prototype.format = undefined;

/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelIntermediateLayoutUpdate.UnitEnum = {
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",

  /**
   * value: "cm"
   * @const
   */
  cm: "cm",

  /**
   * value: "pt"
   * @const
   */
  pt: "pt",

  /**
   * value: "pica"
   * @const
   */
  pica: "pica",

  /**
   * value: "pixel"
   * @const
   */
  pixel: "pixel",

  /**
   * value: "inch"
   * @const
   */
  inch: "inch"
};
/**
 * @member {module:model/BoxModelIntermediateLayoutUpdate.UnitEnum} unit
 */
BoxModelIntermediateLayoutUpdate.prototype.unit = undefined;

/**
 * @member {Array.<module:model/BoxModelIntermediateLayoutChildrenUpdate>} contents
 */
BoxModelIntermediateLayoutUpdate.prototype.contents = undefined;

// Implement OneOfIntermediateProductUpdateLayout interface:
