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
 * The SignatureUpdate model module.
 * @module model/SignatureUpdate
 * @version 1.0.0
 */
export class SignatureUpdate {
  /**
   * Constructs a new <code>SignatureUpdate</code>.
   * @alias module:model/SignatureUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SignatureUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureUpdate} obj Optional instance to populate.
   * @return {module:model/SignatureUpdate} The populated <code>SignatureUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignatureUpdate();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('folding_layout'))
        obj.foldingLayout = ApiClient.convertToType(data['folding_layout'], 'String');
      if (data.hasOwnProperty('folding_sequence'))
        obj.foldingSequence = ApiClient.convertToType(data['folding_sequence'], ['String']);
      if (data.hasOwnProperty('pages'))
        obj.pages = ApiClient.convertToType(data['pages'], ['Number']);
      if (data.hasOwnProperty('layout'))
        obj.layout = ApiClient.convertToType(data['layout'], Object);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
SignatureUpdate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet",

  /**
   * value: "roll_segment"
   * @const
   */
  rollSegment: "roll_segment",

  /**
   * value: "page"
   * @const
   */
  page: "page",

  /**
   * value: "spread"
   * @const
   */
  spread: "spread",

  /**
   * value: "fold"
   * @const
   */
  fold: "fold",

  /**
   * value: "box"
   * @const
   */
  box: "box",

  /**
   * value: "carton"
   * @const
   */
  carton: "carton"
};
/**
 * A simple description of the contents of this signature
 * @member {module:model/SignatureUpdate.KindEnum} kind
 */
SignatureUpdate.prototype.kind = undefined;

/**
 * A simple description of the folding sequence of this Signature. If a JDF fold pattern name is provided, the folding sequence will be automatically populated to suit.
 * @member {String} foldingLayout
 */
SignatureUpdate.prototype.foldingLayout = undefined;

/**
 * The steps required to execute the fold of this signature.
 * @member {Array.<String>} foldingSequence
 */
SignatureUpdate.prototype.foldingSequence = undefined;

/**
 * The list of pages contained within the signature, to be populated when the signature is of a multiple page type such as spread or fold.
 * @member {Array.<Number>} pages
 */
SignatureUpdate.prototype.pages = undefined;

/**
 * The box-model of this signature
 * @member {Object} layout
 */
SignatureUpdate.prototype.layout = undefined;

