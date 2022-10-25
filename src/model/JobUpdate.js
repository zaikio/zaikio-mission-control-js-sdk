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

/**
 * The JobUpdate model module.
 * @module model/JobUpdate
 * @version 1.0.0
 */
export class JobUpdate {
  /**
   * Constructs a new <code>JobUpdate</code>.
   * @alias module:model/JobUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobUpdate} obj Optional instance to populate.
   * @return {module:model/JobUpdate} The populated <code>JobUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobUpdate();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], ['String']);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('acceptable_quantity_excess'))
        obj.acceptableQuantityExcess = ApiClient.convertToType(data['acceptable_quantity_excess'], 'Number');
      if (data.hasOwnProperty('acceptable_quantity_underrun'))
        obj.acceptableQuantityUnderrun = ApiClient.convertToType(data['acceptable_quantity_underrun'], 'Number');
      if (data.hasOwnProperty('due_at'))
        obj.dueAt = ApiClient.convertToType(data['due_at'], 'Date');
      if (data.hasOwnProperty('estimated_completed_at'))
        obj.estimatedCompletedAt = ApiClient.convertToType(data['estimated_completed_at'], 'Date');
    }
    return obj;
  }
}

/**
 * The name of the Job
 * @member {String} name
 */
JobUpdate.prototype.name = undefined;

/**
 * A list of refrences that are used in customer/human communication. This is not a technical ID and should not be treated as such. The first reference of this job is automatically generated by Mission Control.
 * @member {Array.<String>} references
 */
JobUpdate.prototype.references = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
JobUpdate.KindEnum = {
  /**
   * value: "booklet"
   * @const
   */
  booklet: "booklet",

  /**
   * value: "carton"
   * @const
   */
  carton: "carton",

  /**
   * value: "carton_two_piece"
   * @const
   */
  cartonTwoPiece: "carton_two_piece",

  /**
   * value: "brochure"
   * @const
   */
  brochure: "brochure",

  /**
   * value: "business_card"
   * @const
   */
  businessCard: "business_card",

  /**
   * value: "box"
   * @const
   */
  box: "box",

  /**
   * value: "compliment_slip"
   * @const
   */
  complimentSlip: "compliment_slip",

  /**
   * value: "continuation_sheet"
   * @const
   */
  continuationSheet: "continuation_sheet",

  /**
   * value: "cover_letter"
   * @const
   */
  coverLetter: "cover_letter",

  /**
   * value: "envelope"
   * @const
   */
  envelope: "envelope",

  /**
   * value: "flyer"
   * @const
   */
  flyer: "flyer",

  /**
   * value: "hardcover_book"
   * @const
   */
  hardcoverBook: "hardcover_book",

  /**
   * value: "label"
   * @const
   */
  label: "label",

  /**
   * value: "leaflet"
   * @const
   */
  leaflet: "leaflet",

  /**
   * value: "letter_head"
   * @const
   */
  letterHead: "letter_head",

  /**
   * value: "magazine"
   * @const
   */
  magazine: "magazine",

  /**
   * value: "map"
   * @const
   */
  map: "map",

  /**
   * value: "ncr_pad"
   * @const
   */
  ncrPad: "ncr_pad",

  /**
   * value: "newspaper"
   * @const
   */
  newspaper: "newspaper",

  /**
   * value: "notebook"
   * @const
   */
  notebook: "notebook",

  /**
   * value: "pen"
   * @const
   */
  pen: "pen",

  /**
   * value: "postcard"
   * @const
   */
  postcard: "postcard",

  /**
   * value: "poster"
   * @const
   */
  poster: "poster",

  /**
   * value: "self_mailer"
   * @const
   */
  selfMailer: "self_mailer",

  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet",

  /**
   * value: "softcover_book"
   * @const
   */
  softcoverBook: "softcover_book"
};
/**
 * The kind of Job, which must be one of this list
 * @member {module:model/JobUpdate.KindEnum} kind
 */
JobUpdate.prototype.kind = undefined;

/**
 * The source software or system that uploaded this job. This could also be a hint to a web shop or other sales channel identifier.
 * @member {String} source
 */
JobUpdate.prototype.source = undefined;

/**
 * A version identifier that defines the iteration of this job. Can be a numeric counter or alpha-numeric version designator.
 * @member {String} version
 */
JobUpdate.prototype.version = undefined;

/**
 * The amount of copies that need to be manufactured of this job.
 * @member {Number} quantity
 */
JobUpdate.prototype.quantity = undefined;

/**
 * The amount of copies that can be produced additionally to `quantity` and still be sold to the customer as per the purchase agreement.
 * @member {Number} acceptableQuantityExcess
 */
JobUpdate.prototype.acceptableQuantityExcess = undefined;

/**
 * The amount of copies that can be producded less than `quantity` which still adheres the customers purchase agreement.
 * @member {Number} acceptableQuantityUnderrun
 */
JobUpdate.prototype.acceptableQuantityUnderrun = undefined;

/**
 * The date and time at which this job needs to completed in order to be shipped. This is not when it needs to arrive at the customer.
 * @member {Date} dueAt
 */
JobUpdate.prototype.dueAt = undefined;

/**
 * The date and time at which this job is expected to be completed in order to be shipped. This is not when it needs to arrive at the customer.
 * @member {Date} estimatedCompletedAt
 */
JobUpdate.prototype.estimatedCompletedAt = undefined;

