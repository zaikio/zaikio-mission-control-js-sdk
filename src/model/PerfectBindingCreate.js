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
 * The PerfectBindingCreate model module.
 * @module model/PerfectBindingCreate
 * @version 1.0.0
 */
export class PerfectBindingCreate {
  /**
   * Constructs a new <code>PerfectBindingCreate</code>.
   * @alias module:model/PerfectBindingCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PerfectBindingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerfectBindingCreate} obj Optional instance to populate.
   * @return {module:model/PerfectBindingCreate} The populated <code>PerfectBindingCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PerfectBindingCreate();
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceCreate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
PerfectBindingCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PerfectBindingCreate.KindEnum = {
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding"
};
/**
 * The kind of the finishing. Perfect binding - also known as adhesive binding - uses various types of glue to bind collected pages (the content) to the spine of a book, magazine or brochure. This finishing must span across several parts to connect them together. PerfectBinding does not have any additional properties, but the type and amount of glue used can be set via the MaterialRequirements.
 * @member {module:model/PerfectBindingCreate.KindEnum} kind
 */
PerfectBindingCreate.prototype.kind = undefined;

// Implement FinishingCreate interface: