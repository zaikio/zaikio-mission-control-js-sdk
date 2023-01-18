"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopFloorApi = void 0;
var _ApiClient = require("../ApiClient");
var _Execution = require("../model/Execution");
var _ExecutionsBody = require("../model/ExecutionsBody");
var _ExecutionsExecutionIdBody = require("../model/ExecutionsExecutionIdBody");
var _InlineResponse = require("../model/InlineResponse400");
var _InlineResponse2 = require("../model/InlineResponse401");
var _JobDelay = require("../model/JobDelay");
var _JobDelaysJobDelayIdBody = require("../model/JobDelaysJobDelayIdBody");
var _JobIdJobDelaysBody = require("../model/JobIdJobDelaysBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* ShopFloor service.
* @module api/ShopFloorApi
* @version 1.0.0
*/
var ShopFloorApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ShopFloorApi. 
  * @alias module:api/ShopFloorApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ShopFloorApi(apiClient) {
    _classCallCheck(this, ShopFloorApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Remove an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
   * @param {String} executionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(ShopFloorApi, [{
    key: "executionsExecutionIdDeleteWithHttpInfo",
    value: function executionsExecutionIdDeleteWithHttpInfo(executionId) {
      var postBody = null;
      // verify the required parameter 'executionId' is set
      if (executionId === undefined || executionId === null) {
        throw new Error("Missing the required parameter 'executionId' when calling executionsExecutionIdDelete");
      }
      var pathParams = {
        'execution_id': executionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/executions/{execution_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} executionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "executionsExecutionIdDelete",
    value: function executionsExecutionIdDelete(executionId) {
      return this.executionsExecutionIdDeleteWithHttpInfo(executionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the details of a given execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} executionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Execution} and HTTP response
     */
  }, {
    key: "executionsExecutionIdGetWithHttpInfo",
    value: function executionsExecutionIdGetWithHttpInfo(executionId) {
      var postBody = null;
      // verify the required parameter 'executionId' is set
      if (executionId === undefined || executionId === null) {
        throw new Error("Missing the required parameter 'executionId' when calling executionsExecutionIdGet");
      }
      var pathParams = {
        'execution_id': executionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Execution.Execution;
      return this.apiClient.callApi('/executions/{execution_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the details of a given execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} executionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Execution}
     */
  }, {
    key: "executionsExecutionIdGet",
    value: function executionsExecutionIdGet(executionId) {
      return this.executionsExecutionIdGetWithHttpInfo(executionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update the status of an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
     * @param {module:model/ExecutionsExecutionIdBody} body 
     * @param {String} executionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Execution} and HTTP response
     */
  }, {
    key: "executionsExecutionIdPatchWithHttpInfo",
    value: function executionsExecutionIdPatchWithHttpInfo(body, executionId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executionsExecutionIdPatch");
      }
      // verify the required parameter 'executionId' is set
      if (executionId === undefined || executionId === null) {
        throw new Error("Missing the required parameter 'executionId' when calling executionsExecutionIdPatch");
      }
      var pathParams = {
        'execution_id': executionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Execution.Execution;
      return this.apiClient.callApi('/executions/{execution_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update the status of an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} executionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Execution}
     */
  }, {
    key: "executionsExecutionIdPatch",
    value: function executionsExecutionIdPatch(body, executionId) {
      return this.executionsExecutionIdPatchWithHttpInfo(body, executionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all executions, useful as an audit log of production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Execution>} and HTTP response
     */
  }, {
    key: "executionsGetWithHttpInfo",
    value: function executionsGetWithHttpInfo(opts) {
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
      var returnType = [_Execution.Execution];
      return this.apiClient.callApi('/executions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List all executions, useful as an audit log of production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Execution>}
     */
  }, {
    key: "executionsGet",
    value: function executionsGet(opts) {
      return this.executionsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new execution to log production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
     * @param {module:model/ExecutionsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Execution} and HTTP response
     */
  }, {
    key: "executionsPostWithHttpInfo",
    value: function executionsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executionsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Execution.Execution;
      return this.apiClient.callApi('/executions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new execution to log production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Execution}
     */
  }, {
    key: "executionsPost",
    value: function executionsPost(body) {
      return this.executionsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all delays for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/JobDelay>} and HTTP response
     */
  }, {
    key: "jobsJobIdJobDelaysGetWithHttpInfo",
    value: function jobsJobIdJobDelaysGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdJobDelaysGet");
      }
      var pathParams = {
        'job_id': jobId
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
      var returnType = [_JobDelay.JobDelay];
      return this.apiClient.callApi('/jobs/{job_id}/job_delays', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List all delays for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/JobDelay>}
     */
  }, {
    key: "jobsJobIdJobDelaysGet",
    value: function jobsJobIdJobDelaysGet(jobId, opts) {
      return this.jobsJobIdJobDelaysGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @param {String} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdDeleteWithHttpInfo",
    value: function jobsJobIdJobDelaysJobDelayIdDeleteWithHttpInfo(jobId, jobDelayId) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdJobDelaysJobDelayIdDelete");
      }
      // verify the required parameter 'jobDelayId' is set
      if (jobDelayId === undefined || jobDelayId === null) {
        throw new Error("Missing the required parameter 'jobDelayId' when calling jobsJobIdJobDelaysJobDelayIdDelete");
      }
      var pathParams = {
        'job_id': jobId,
        'job_delay_id': jobDelayId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/jobs/{job_id}/job_delays/{job_delay_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdDelete",
    value: function jobsJobIdJobDelaysJobDelayIdDelete(jobId, jobDelayId) {
      return this.jobsJobIdJobDelaysJobDelayIdDeleteWithHttpInfo(jobId, jobDelayId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Display the status of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @param {String} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobDelay} and HTTP response
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdGetWithHttpInfo",
    value: function jobsJobIdJobDelaysJobDelayIdGetWithHttpInfo(jobId, jobDelayId) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdJobDelaysJobDelayIdGet");
      }
      // verify the required parameter 'jobDelayId' is set
      if (jobDelayId === undefined || jobDelayId === null) {
        throw new Error("Missing the required parameter 'jobDelayId' when calling jobsJobIdJobDelaysJobDelayIdGet");
      }
      var pathParams = {
        'job_id': jobId,
        'job_delay_id': jobDelayId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _JobDelay.JobDelay;
      return this.apiClient.callApi('/jobs/{job_id}/job_delays/{job_delay_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Display the status of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDelay}
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdGet",
    value: function jobsJobIdJobDelaysJobDelayIdGet(jobId, jobDelayId) {
      return this.jobsJobIdJobDelaysJobDelayIdGetWithHttpInfo(jobId, jobDelayId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Change properties of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/JobDelaysJobDelayIdBody} body 
     * @param {String} jobId 
     * @param {String} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobDelay} and HTTP response
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdPatchWithHttpInfo",
    value: function jobsJobIdJobDelaysJobDelayIdPatchWithHttpInfo(body, jobId, jobDelayId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdJobDelaysJobDelayIdPatch");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdJobDelaysJobDelayIdPatch");
      }
      // verify the required parameter 'jobDelayId' is set
      if (jobDelayId === undefined || jobDelayId === null) {
        throw new Error("Missing the required parameter 'jobDelayId' when calling jobsJobIdJobDelaysJobDelayIdPatch");
      }
      var pathParams = {
        'job_id': jobId,
        'job_delay_id': jobDelayId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobDelay.JobDelay;
      return this.apiClient.callApi('/jobs/{job_id}/job_delays/{job_delay_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Change properties of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobDelayId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDelay}
     */
  }, {
    key: "jobsJobIdJobDelaysJobDelayIdPatch",
    value: function jobsJobIdJobDelaysJobDelayIdPatch(body, jobId, jobDelayId) {
      return this.jobsJobIdJobDelaysJobDelayIdPatchWithHttpInfo(body, jobId, jobDelayId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new delay for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/JobIdJobDelaysBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobDelay} and HTTP response
     */
  }, {
    key: "jobsJobIdJobDelaysPostWithHttpInfo",
    value: function jobsJobIdJobDelaysPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdJobDelaysPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdJobDelaysPost");
      }
      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobDelay.JobDelay;
      return this.apiClient.callApi('/jobs/{job_id}/job_delays', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new delay for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDelay}
     */
  }, {
    key: "jobsJobIdJobDelaysPost",
    value: function jobsJobIdJobDelaysPost(body, jobId) {
      return this.jobsJobIdJobDelaysPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ShopFloorApi;
}();
exports.ShopFloorApi = ShopFloorApi;