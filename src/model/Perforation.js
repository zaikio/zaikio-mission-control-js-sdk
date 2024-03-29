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
import {FileReference} from './FileReference';

/**
 * The Perforation model module.
 * @module model/Perforation
 * @version 1.0.0
 */
export class Perforation {
  /**
   * Constructs a new <code>Perforation</code>.
   * @alias module:model/Perforation
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Perforation.KindEnum} The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
   * @param depth {String} The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
   * @param teeth {Number} The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
   */
  constructor(id, createdAt, updatedAt, fileReferences, kind, depth, teeth) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.depth = depth;
    this.teeth = teeth;
  }

  /**
   * Constructs a <code>Perforation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Perforation} obj Optional instance to populate.
   * @return {module:model/Perforation} The populated <code>Perforation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Perforation();
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
      if (data.hasOwnProperty('depth'))
        obj.depth = ApiClient.convertToType(data['depth'], 'String');
      if (data.hasOwnProperty('teeth'))
        obj.teeth = ApiClient.convertToType(data['teeth'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Perforation.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Perforation.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Perforation.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Perforation.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Perforation.KindEnum = {
  /**
   * value: "perforation"
   * @const
   */
  perforation: "perforation"
};
/**
 * The kind of the finishing. Perforations are usually used to allow easy separation of two sections of a material, such as allowing paper to be torn easily along the line. Packaging with perforations in paperboard or plastic film is easy for consumers to open. Perforating is the process that punctures numerous small wholes into the substrate by using a tool, thus creating a perforation.
 * @member {module:model/Perforation.KindEnum} kind
 */
Perforation.prototype.kind = undefined;

/**
 * The depth of the perforation holes given in micrometres [μm]. Must be greater than zero. This value is optional.
 * @member {String} depth
 */
Perforation.prototype.depth = undefined;

/**
 * The number of perforation holes per 1 point [pt]. Thus a value of 1000 means that there will be 1000 holes for 1 point long segment of the perforation, thus making it a micro perforation. Must be greater than zero. This value is optional.
 * @member {Number} teeth
 */
Perforation.prototype.teeth = undefined;

// Implement Finishing interface:
