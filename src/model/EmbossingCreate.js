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
 * The EmbossingCreate model module.
 * @module model/EmbossingCreate
 * @version 1.0.0
 */
export class EmbossingCreate {
  /**
   * Constructs a new <code>EmbossingCreate</code>.
   * @alias module:model/EmbossingCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmbossingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbossingCreate} obj Optional instance to populate.
   * @return {module:model/EmbossingCreate} The populated <code>EmbossingCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmbossingCreate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceCreate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
EmbossingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.KindEnum = {
  /**
   * value: "embossing"
   * @const
   */
  embossing: "embossing"
};
/**
 * The kind of the finishing. Embossing means that a stamp or die with a raised pattern on its surface is used to imprint this pattern into the substrate of a part. Embossing can either be towards the beholder (debossing) or down into the substrate (embossing) or both (embossing/debossing). Please note that for embossing with foils you must use the FoilStamp finishing.
 * @member {module:model/EmbossingCreate.KindEnum} kind
 */
EmbossingCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.MethodEnum = {
  /**
   * value: "blind"
   * @const
   */
  blind: "blind",

  /**
   * value: "braille"
   * @const
   */
  braille: "braille"
};
/**
 * The method used for embossing. Please note that for \"foil embossing\" the foil stamping finishing must be used. 
 * @member {module:model/EmbossingCreate.MethodEnum} method
 */
EmbossingCreate.prototype.method = undefined;

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
EmbossingCreate.DirectionEnum = {
  /**
   * value: "debossed"
   * @const
   */
  debossed: "debossed",

  /**
   * value: "embossed"
   * @const
   */
  embossed: "embossed",

  /**
   * value: "embossed-debossed"
   * @const
   */
  embossedDebossed: "embossed-debossed"
};
/**
 * The vertical direction in which the stamp will be applied. There are three possibilities. The most common - and also the default value - is to imprint the pattern down into the plane of the substrate (embossed), so that a step down can be felt between the substrate and the site that was embossed. Alternativly, the imprint can be towards the beholder, so that a step up is felt between the substrate and the embossed site (debossed). Lastly, a combined stamping can be applied which goes in both directions. (embossed-debossed). 
 * @member {module:model/EmbossingCreate.DirectionEnum} direction
 */
EmbossingCreate.prototype.direction = undefined;

// Implement FinishingCreate interface:
