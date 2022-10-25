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
import {ApiClient} from "../ApiClient";
import {Address} from '../model/Address';
import {Commissioning} from '../model/Commissioning';
import {CommissioningIdPickupsBody} from '../model/CommissioningIdPickupsBody';
import {CommissioningIdShipmentsBody} from '../model/CommissioningIdShipmentsBody';
import {CommissioningsBody} from '../model/CommissioningsBody';
import {CommissioningsCommissioningIdBody} from '../model/CommissioningsCommissioningIdBody';
import {InlineResponse2013} from '../model/InlineResponse2013';
import {InlineResponse400} from '../model/InlineResponse400';
import {InlineResponse401} from '../model/InlineResponse401';
import {Pickup} from '../model/Pickup';
import {PickupsPickupIdBody} from '../model/PickupsPickupIdBody';
import {Shipment} from '../model/Shipment';
import {ShipmentIdAddressBody} from '../model/ShipmentIdAddressBody';
import {ShipmentIdAddressBody1} from '../model/ShipmentIdAddressBody1';
import {ShipmentsShipmentIdBody} from '../model/ShipmentsShipmentIdBody';

/**
* Logistics service.
* @module api/LogisticsApi
* @version 1.0.0
*/
export class LogisticsApi {

    /**
    * Constructs a new LogisticsApi. 
    * @alias module:api/LogisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the commissioningsCommissioningIdDelete operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {String} commissioningId 
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    commissioningsCommissioningIdDelete(commissioningId, callback) {
      
      let postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdDelete");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdGet operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commissioning{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdGet(commissioningId, callback) {
      
      let postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdGet");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Commissioning;

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdPatch operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commissioning{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {module:model/CommissioningsCommissioningIdBody} body 
     * @param {String} commissioningId 
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdPatch(body, commissioningId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdPatch");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPatch");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Commissioning;

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdPickupsGet operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdPickupsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pickup>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all pickups of a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdPickupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdPickupsGet(commissioningId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPickupsGet");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Pickup];

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}/pickups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdPickupsPost operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdPickupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pickup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/CommissioningIdPickupsBody} body 
     * @param {String} commissioningId 
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdPickupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdPickupsPost(body, commissioningId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdPickupsPost");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPickupsPost");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Pickup;

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}/pickups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdShipmentsGet operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdShipmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Shipment>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all shipments of a commissioning. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdShipmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdShipmentsGet(commissioningId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdShipmentsGet");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Shipment];

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}/shipments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsCommissioningIdShipmentsPost operation.
     * @callback moduleapi/LogisticsApi~commissioningsCommissioningIdShipmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {module:model/CommissioningIdShipmentsBody} body 
     * @param {String} commissioningId 
     * @param {module:api/LogisticsApi~commissioningsCommissioningIdShipmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsCommissioningIdShipmentsPost(body, commissioningId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdShipmentsPost");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdShipmentsPost");
      }

      let pathParams = {
        'commissioning_id': commissioningId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/commissionings/{commissioning_id}/shipments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsGet operation.
     * @callback moduleapi/LogisticsApi~commissioningsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Commissioning>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all commissionings. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/LogisticsApi~commissioningsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Commissioning];

      return this.apiClient.callApi(
        '/commissionings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the commissioningsPost operation.
     * @callback moduleapi/LogisticsApi~commissioningsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commissioning{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {module:model/CommissioningsBody} body 
     * @param {module:api/LogisticsApi~commissioningsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    commissioningsPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Commissioning;

      return this.apiClient.callApi(
        '/commissionings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the pickupsPickupIdDelete operation.
     * @callback moduleapi/LogisticsApi~pickupsPickupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} pickupId 
     * @param {module:api/LogisticsApi~pickupsPickupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    pickupsPickupIdDelete(pickupId, callback) {
      
      let postBody = null;
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdDelete");
      }

      let pathParams = {
        'pickup_id': pickupId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/pickups/{pickup_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the pickupsPickupIdGet operation.
     * @callback moduleapi/LogisticsApi~pickupsPickupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pickup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} pickupId 
     * @param {module:api/LogisticsApi~pickupsPickupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    pickupsPickupIdGet(pickupId, callback) {
      
      let postBody = null;
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdGet");
      }

      let pathParams = {
        'pickup_id': pickupId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Pickup;

      return this.apiClient.callApi(
        '/pickups/{pickup_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the pickupsPickupIdPatch operation.
     * @callback moduleapi/LogisticsApi~pickupsPickupIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pickup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PickupsPickupIdBody} body 
     * @param {String} pickupId 
     * @param {module:api/LogisticsApi~pickupsPickupIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    pickupsPickupIdPatch(body, pickupId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pickupsPickupIdPatch");
      }
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdPatch");
      }

      let pathParams = {
        'pickup_id': pickupId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Pickup;

      return this.apiClient.callApi(
        '/pickups/{pickup_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdAddressDelete operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdAddressDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the address from a specific shipment as long as the shipment is in                             a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdAddressDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    shipmentsShipmentIdAddressDelete(shipmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressDelete");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}/address', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdAddressGet operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdAddressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the address for this shipment. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    shipmentsShipmentIdAddressGet(shipmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressGet");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}/address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdAddressPatch operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdAddressPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies the address from a specific shipment as long as                           the shipment is still in a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/ShipmentIdAddressBody1} body 
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdAddressPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    shipmentsShipmentIdAddressPatch(body, shipmentId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdAddressPatch");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressPatch");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}/address', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdAddressPost operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdAddressPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new address. If an address is already present, it will be overwritten.                           Creating an address is only possible as long as the shipment is in                           a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/ShipmentIdAddressBody} body 
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    shipmentsShipmentIdAddressPost(body, shipmentId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdAddressPost");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressPost");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}/address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdDelete operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    shipmentsShipmentIdDelete(shipmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdDelete");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdGet operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    shipmentsShipmentIdGet(shipmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdGet");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shipmentsShipmentIdPatch operation.
     * @callback moduleapi/LogisticsApi~shipmentsShipmentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {module:model/ShipmentsShipmentIdBody} body 
     * @param {String} shipmentId 
     * @param {module:api/LogisticsApi~shipmentsShipmentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    shipmentsShipmentIdPatch(body, shipmentId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdPatch");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdPatch");
      }

      let pathParams = {
        'shipment_id': shipmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/shipments/{shipment_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}