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
import {InlineResponse401} from '../model/InlineResponse401';
import {ListMember} from '../model/ListMember';

/**
* Prodution service.
* @module api/ProdutionApi
* @version 1.0.0
*/
export class ProdutionApi {

    /**
    * Constructs a new ProdutionApi. 
    * @alias module:api/ProdutionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the listsListIdMembersGet operation.
     * @callback moduleapi/ProdutionApi~listsListIdMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListMember>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all members in a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/ProdutionApi~listsListIdMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listsListIdMembersGet(listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdMembersGet");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = [ListMember];

      return this.apiClient.callApi(
        '/lists/{list_id}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}