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
import {ColorCreate} from './ColorCreate';
import {FileReferenceCreate} from './FileReferenceCreate';
import {FinishingApplicationCreate} from './FinishingApplicationCreate';
import {FinishingCreate} from './FinishingCreate';

/**
 * The PartCreate model module.
 * @module model/PartCreate
 * @version 1.0.0
 */
export class PartCreate {
  /**
   * Constructs a new <code>PartCreate</code>.
   * @alias module:model/PartCreate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PartCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartCreate} obj Optional instance to populate.
   * @return {module:model/PartCreate} The populated <code>PartCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartCreate();
      if (data.hasOwnProperty('layout'))
        obj.layout = ApiClient.convertToType(data['layout'], Object);
      if (data.hasOwnProperty('colors'))
        obj.colors = ApiClient.convertToType(data['colors'], [ColorCreate]);
      if (data.hasOwnProperty('desired_substrate'))
        obj.desiredSubstrate = ApiClient.convertToType(data['desired_substrate'], Object);
      if (data.hasOwnProperty('finishing_applications'))
        obj.finishingApplications = ApiClient.convertToType(data['finishing_applications'], [FinishingApplicationCreate]);
      if (data.hasOwnProperty('finishings'))
        obj.finishings = ApiClient.convertToType(data['finishings'], [FinishingCreate]);
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReferenceCreate]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('pages'))
        obj.pages = ApiClient.convertToType(data['pages'], 'Number');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = ApiClient.convertToType(data['dimensions'], ['String']);
      if (data.hasOwnProperty('dimensions_unit'))
        obj.dimensionsUnit = ApiClient.convertToType(data['dimensions_unit'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Object} layout
 */
PartCreate.prototype.layout = undefined;

/**
 * @member {Array.<module:model/ColorCreate>} colors
 */
PartCreate.prototype.colors = undefined;

/**
 * @member {Object} desiredSubstrate
 */
PartCreate.prototype.desiredSubstrate = undefined;

/**
 * @member {Array.<module:model/FinishingApplicationCreate>} finishingApplications
 */
PartCreate.prototype.finishingApplications = undefined;

/**
 * @member {Array.<module:model/FinishingCreate>} finishings
 */
PartCreate.prototype.finishings = undefined;

/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
PartCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PartCreate.KindEnum = {
  /**
   * value: "business_card"
   * @const
   */
  businessCard: "business_card",

  /**
   * value: "brochure"
   * @const
   */
  brochure: "brochure",

  /**
   * value: "case"
   * @const
   */
  _case: "case",

  /**
   * value: "content"
   * @const
   */
  content: "content",

  /**
   * value: "cover"
   * @const
   */
  cover: "cover",

  /**
   * value: "jacket"
   * @const
   */
  jacket: "jacket",

  /**
   * value: "leaflet"
   * @const
   */
  leaflet: "leaflet",

  /**
   * value: "poster"
   * @const
   */
  poster: "poster",

  /**
   * value: "label"
   * @const
   */
  label: "label",

  /**
   * value: "packaging"
   * @const
   */
  packaging: "packaging",

  /**
   * value: "endpaper"
   * @const
   */
  endpaper: "endpaper"
};
/**
 * The kind of the part. Which parts must be created depends on the kind of the job to which this part belongs. For some kinds it is also possible to create several parts (i.e. content) with different colours, substrates and finishings.
 * @member {module:model/PartCreate.KindEnum} kind
 */
PartCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
PartCreate.ContentEnum = {
  /**
   * value: "single_page"
   * @const
   */
  singlePage: "single_page",

  /**
   * value: "spread"
   * @const
   */
  spread: "spread",

  /**
   * value: "multiple_pages"
   * @const
   */
  multiplePages: "multiple_pages",

  /**
   * value: "three_dimensional_object"
   * @const
   */
  threeDimensionalObject: "three_dimensional_object"
};
/**
 * Defines what the layout of this part looks like. When `single_page` is selected, it is assumed that the layout contains a single page and the `pages` attribute must be 2. When `spread` is selected, it is assumed that the layout contains a page spread, thus the `pages` attribute must be set to 4. When `multiple_pages` is selected, the layout may contain an arbitrary number of pages and the `pages` attribute must be set accordingly.
 * @member {module:model/PartCreate.ContentEnum} content
 */
PartCreate.prototype.content = undefined;

/**
 * The number of pages that this part's layout contains. Since a single page of paper has a front and a back side, the minimal amount of pages per part is two. If a part contains more than 2 pages the amount must be divisible by two. When `content` is set to `single_page` the number of pages must equal 2, when `content` is set to `spread` the number of pages must equal 4. When 'content' is set to `multiple_pages` the number of pages can be set arbitrarily.
 * @member {Number} pages
 */
PartCreate.prototype.pages = undefined;

/**
 * The width and height of the part in the unit set in `dimensions_unit`. The first element of this array corresponds to the width, the second one to the height (or length) of the part in closed state.
 * @member {Array.<String>} dimensions
 */
PartCreate.prototype.dimensions = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
PartCreate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",

  /**
   * value: "mm"
   * @const
   */
  mm: "mm",

  /**
   * value: "μm"
   * @const
   */
  m: "μm"
};
/**
 * The unit in which the dimensions are given
 * @member {module:model/PartCreate.DimensionsUnitEnum} dimensionsUnit
 */
PartCreate.prototype.dimensionsUnit = undefined;

