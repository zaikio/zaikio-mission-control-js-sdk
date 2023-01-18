"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsApi = void 0;
var _ApiClient = require("../ApiClient");
var _InlineResponse = require("../model/InlineResponse2014");
var _InlineResponse2 = require("../model/InlineResponse400");
var _InlineResponse3 = require("../model/InlineResponse401");
var _ListIdPredicatesBody = require("../model/ListIdPredicatesBody");
var _ListMember = require("../model/ListMember");
var _ListsBody = require("../model/ListsBody");
var _ListsListIdBody = require("../model/ListsListIdBody");
var _Predicate = require("../model/Predicate");
var _PredicateIdRulesBody = require("../model/PredicateIdRulesBody");
var _PredicatesPredicateIdBody = require("../model/PredicatesPredicateIdBody");
var _Rule = require("../model/Rule");
var _RulesRuleIdBody = require("../model/RulesRuleIdBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Lists service.
* @module api/ListsApi
* @version 1.0.0
*/
var ListsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ListsApi. 
  * @alias module:api/ListsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ListsApi(apiClient) {
    _classCallCheck(this, ListsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Returns all lists associated to user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The page of the current collection that shall be returned
   * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
   */
  _createClass(ListsApi, [{
    key: "listsGetWithHttpInfo",
    value: function listsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];
      return this.apiClient.callApi('/lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all lists associated to user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
  }, {
    key: "listsGet",
    value: function listsGet(opts) {
      return this.listsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "listsListIdDeleteWithHttpInfo",
    value: function listsListIdDeleteWithHttpInfo(listId) {
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdDelete");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/lists/{list_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "listsListIdDelete",
    value: function listsListIdDelete(listId) {
      return this.listsListIdDeleteWithHttpInfo(listId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific list associated to a user organizations (without its members). - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2014} and HTTP response
     */
  }, {
    key: "listsListIdGetWithHttpInfo",
    value: function listsListIdGetWithHttpInfo(listId) {
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdGet");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2014;
      return this.apiClient.callApi('/lists/{list_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific list associated to a user organizations (without its members). - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2014}
     */
  }, {
    key: "listsListIdGet",
    value: function listsListIdGet(listId) {
      return this.listsListIdGetWithHttpInfo(listId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all members in a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ListMember>} and HTTP response
     */
  }, {
    key: "listsListIdMembersGetWithHttpInfo",
    value: function listsListIdMembersGetWithHttpInfo(listId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdMembersGet");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ListMember.ListMember];
      return this.apiClient.callApi('/lists/{list_id}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all members in a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ListMember>}
     */
  }, {
    key: "listsListIdMembersGet",
    value: function listsListIdMembersGet(listId, opts) {
      return this.listsListIdMembersGetWithHttpInfo(listId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/ListsListIdBody} body 
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2014} and HTTP response
     */
  }, {
    key: "listsListIdPatchWithHttpInfo",
    value: function listsListIdPatchWithHttpInfo(body, listId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listsListIdPatch");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdPatch");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2014;
      return this.apiClient.callApi('/lists/{list_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2014}
     */
  }, {
    key: "listsListIdPatch",
    value: function listsListIdPatch(body, listId) {
      return this.listsListIdPatchWithHttpInfo(body, listId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all predicates of a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Predicate>} and HTTP response
     */
  }, {
    key: "listsListIdPredicatesGetWithHttpInfo",
    value: function listsListIdPredicatesGetWithHttpInfo(listId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdPredicatesGet");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Predicate.Predicate];
      return this.apiClient.callApi('/lists/{list_id}/predicates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all predicates of a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Predicate>}
     */
  }, {
    key: "listsListIdPredicatesGet",
    value: function listsListIdPredicatesGet(listId, opts) {
      return this.listsListIdPredicatesGetWithHttpInfo(listId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new predicate for a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/ListIdPredicatesBody} body 
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Predicate} and HTTP response
     */
  }, {
    key: "listsListIdPredicatesPostWithHttpInfo",
    value: function listsListIdPredicatesPostWithHttpInfo(body, listId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listsListIdPredicatesPost");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdPredicatesPost");
      }
      var pathParams = {
        'list_id': listId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Predicate.Predicate;
      return this.apiClient.callApi('/lists/{list_id}/predicates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new predicate for a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Predicate}
     */
  }, {
    key: "listsListIdPredicatesPost",
    value: function listsListIdPredicatesPost(body, listId) {
      return this.listsListIdPredicatesPostWithHttpInfo(body, listId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/ListsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2014} and HTTP response
     */
  }, {
    key: "listsPostWithHttpInfo",
    value: function listsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2014;
      return this.apiClient.callApi('/lists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2014}
     */
  }, {
    key: "listsPost",
    value: function listsPost(body) {
      return this.listsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {String} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "predicatesPredicateIdDeleteWithHttpInfo",
    value: function predicatesPredicateIdDeleteWithHttpInfo(predicateId) {
      var postBody = null;
      // verify the required parameter 'predicateId' is set
      if (predicateId === undefined || predicateId === null) {
        throw new Error("Missing the required parameter 'predicateId' when calling predicatesPredicateIdDelete");
      }
      var pathParams = {
        'predicate_id': predicateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/predicates/{predicate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "predicatesPredicateIdDelete",
    value: function predicatesPredicateIdDelete(predicateId) {
      return this.predicatesPredicateIdDeleteWithHttpInfo(predicateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific predicate associated to a user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Predicate} and HTTP response
     */
  }, {
    key: "predicatesPredicateIdGetWithHttpInfo",
    value: function predicatesPredicateIdGetWithHttpInfo(predicateId) {
      var postBody = null;
      // verify the required parameter 'predicateId' is set
      if (predicateId === undefined || predicateId === null) {
        throw new Error("Missing the required parameter 'predicateId' when calling predicatesPredicateIdGet");
      }
      var pathParams = {
        'predicate_id': predicateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Predicate.Predicate;
      return this.apiClient.callApi('/predicates/{predicate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific predicate associated to a user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Predicate}
     */
  }, {
    key: "predicatesPredicateIdGet",
    value: function predicatesPredicateIdGet(predicateId) {
      return this.predicatesPredicateIdGetWithHttpInfo(predicateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/PredicatesPredicateIdBody} body 
     * @param {String} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Predicate} and HTTP response
     */
  }, {
    key: "predicatesPredicateIdPatchWithHttpInfo",
    value: function predicatesPredicateIdPatchWithHttpInfo(body, predicateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling predicatesPredicateIdPatch");
      }
      // verify the required parameter 'predicateId' is set
      if (predicateId === undefined || predicateId === null) {
        throw new Error("Missing the required parameter 'predicateId' when calling predicatesPredicateIdPatch");
      }
      var pathParams = {
        'predicate_id': predicateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Predicate.Predicate;
      return this.apiClient.callApi('/predicates/{predicate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Predicate}
     */
  }, {
    key: "predicatesPredicateIdPatch",
    value: function predicatesPredicateIdPatch(body, predicateId) {
      return this.predicatesPredicateIdPatchWithHttpInfo(body, predicateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all rules of a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} predicateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Rule>} and HTTP response
     */
  }, {
    key: "predicatesPredicateIdRulesGetWithHttpInfo",
    value: function predicatesPredicateIdRulesGetWithHttpInfo(predicateId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'predicateId' is set
      if (predicateId === undefined || predicateId === null) {
        throw new Error("Missing the required parameter 'predicateId' when calling predicatesPredicateIdRulesGet");
      }
      var pathParams = {
        'predicate_id': predicateId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Rule.Rule];
      return this.apiClient.callApi('/predicates/{predicate_id}/rules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all rules of a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} predicateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Rule>}
     */
  }, {
    key: "predicatesPredicateIdRulesGet",
    value: function predicatesPredicateIdRulesGet(predicateId, opts) {
      return this.predicatesPredicateIdRulesGetWithHttpInfo(predicateId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new rule for a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/PredicateIdRulesBody} body 
     * @param {String} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Rule} and HTTP response
     */
  }, {
    key: "predicatesPredicateIdRulesPostWithHttpInfo",
    value: function predicatesPredicateIdRulesPostWithHttpInfo(body, predicateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling predicatesPredicateIdRulesPost");
      }
      // verify the required parameter 'predicateId' is set
      if (predicateId === undefined || predicateId === null) {
        throw new Error("Missing the required parameter 'predicateId' when calling predicatesPredicateIdRulesPost");
      }
      var pathParams = {
        'predicate_id': predicateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Rule.Rule;
      return this.apiClient.callApi('/predicates/{predicate_id}/rules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new rule for a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} predicateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Rule}
     */
  }, {
    key: "predicatesPredicateIdRulesPost",
    value: function predicatesPredicateIdRulesPost(body, predicateId) {
      return this.predicatesPredicateIdRulesPostWithHttpInfo(body, predicateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {String} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "rulesRuleIdDeleteWithHttpInfo",
    value: function rulesRuleIdDeleteWithHttpInfo(ruleId) {
      var postBody = null;
      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling rulesRuleIdDelete");
      }
      var pathParams = {
        'rule_id': ruleId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rules/{rule_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "rulesRuleIdDelete",
    value: function rulesRuleIdDelete(ruleId) {
      return this.rulesRuleIdDeleteWithHttpInfo(ruleId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {String} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Rule} and HTTP response
     */
  }, {
    key: "rulesRuleIdGetWithHttpInfo",
    value: function rulesRuleIdGetWithHttpInfo(ruleId) {
      var postBody = null;
      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling rulesRuleIdGet");
      }
      var pathParams = {
        'rule_id': ruleId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Rule.Rule;
      return this.apiClient.callApi('/rules/{rule_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Rule}
     */
  }, {
    key: "rulesRuleIdGet",
    value: function rulesRuleIdGet(ruleId) {
      return this.rulesRuleIdGetWithHttpInfo(ruleId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {module:model/RulesRuleIdBody} body 
     * @param {String} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Rule} and HTTP response
     */
  }, {
    key: "rulesRuleIdPatchWithHttpInfo",
    value: function rulesRuleIdPatchWithHttpInfo(body, ruleId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rulesRuleIdPatch");
      }
      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling rulesRuleIdPatch");
      }
      var pathParams = {
        'rule_id': ruleId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Rule.Rule;
      return this.apiClient.callApi('/rules/{rule_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Rule}
     */
  }, {
    key: "rulesRuleIdPatch",
    value: function rulesRuleIdPatch(body, ruleId) {
      return this.rulesRuleIdPatchWithHttpInfo(body, ruleId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ListsApi;
}();
exports.ListsApi = ListsApi;