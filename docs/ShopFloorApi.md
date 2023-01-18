# MissionControl.ShopFloorApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executionsExecutionIdDelete**](ShopFloorApi.md#executionsExecutionIdDelete) | **DELETE** /executions/{execution_id} | 
[**executionsExecutionIdGet**](ShopFloorApi.md#executionsExecutionIdGet) | **GET** /executions/{execution_id} | 
[**executionsExecutionIdPatch**](ShopFloorApi.md#executionsExecutionIdPatch) | **PATCH** /executions/{execution_id} | 
[**executionsGet**](ShopFloorApi.md#executionsGet) | **GET** /executions | 
[**executionsPost**](ShopFloorApi.md#executionsPost) | **POST** /executions | 
[**jobsJobIdJobDelaysGet**](ShopFloorApi.md#jobsJobIdJobDelaysGet) | **GET** /jobs/{job_id}/job_delays | 
[**jobsJobIdJobDelaysJobDelayIdDelete**](ShopFloorApi.md#jobsJobIdJobDelaysJobDelayIdDelete) | **DELETE** /jobs/{job_id}/job_delays/{job_delay_id} | 
[**jobsJobIdJobDelaysJobDelayIdGet**](ShopFloorApi.md#jobsJobIdJobDelaysJobDelayIdGet) | **GET** /jobs/{job_id}/job_delays/{job_delay_id} | 
[**jobsJobIdJobDelaysJobDelayIdPatch**](ShopFloorApi.md#jobsJobIdJobDelaysJobDelayIdPatch) | **PATCH** /jobs/{job_id}/job_delays/{job_delay_id} | 
[**jobsJobIdJobDelaysPost**](ShopFloorApi.md#jobsJobIdJobDelaysPost) | **POST** /jobs/{job_id}/job_delays | 

<a name="executionsExecutionIdDelete"></a>
# **executionsExecutionIdDelete**
> executionsExecutionIdDelete(executionId)



Remove an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdDelete(executionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsExecutionIdGet"></a>
# **executionsExecutionIdGet**
> Execution executionsExecutionIdGet(executionId)



Show the details of a given execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdGet(executionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | [**String**](.md)|  | 

### Return type

[**Execution**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsExecutionIdPatch"></a>
# **executionsExecutionIdPatch**
> Execution executionsExecutionIdPatch(body, executionId)



Update the status of an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let body = new MissionControl.ExecutionsExecutionIdBody(); // ExecutionsExecutionIdBody | 
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdPatch(body, executionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecutionsExecutionIdBody**](ExecutionsExecutionIdBody.md)|  | 
 **executionId** | [**String**](.md)|  | 

### Return type

[**Execution**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executionsGet"></a>
# **executionsGet**
> [Execution] executionsGet(opts)



List all executions, useful as an audit log of production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.executionsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Execution]**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsPost"></a>
# **executionsPost**
> Execution executionsPost(body)



Create a new execution to log production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let body = new MissionControl.ExecutionsBody(); // ExecutionsBody | 

apiInstance.executionsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecutionsBody**](ExecutionsBody.md)|  | 

### Return type

[**Execution**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdJobDelaysGet"></a>
# **jobsJobIdJobDelaysGet**
> [JobDelay] jobsJobIdJobDelaysGet(jobId, opts)



List all delays for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdJobDelaysGet(jobId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[JobDelay]**](JobDelay.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdJobDelaysJobDelayIdDelete"></a>
# **jobsJobIdJobDelaysJobDelayIdDelete**
> jobsJobIdJobDelaysJobDelayIdDelete(jobId, jobDelayId)



Remove a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let jobDelayId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdJobDelaysJobDelayIdDelete(jobId, jobDelayId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **jobDelayId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdJobDelaysJobDelayIdGet"></a>
# **jobsJobIdJobDelaysJobDelayIdGet**
> JobDelay jobsJobIdJobDelaysJobDelayIdGet(jobId, jobDelayId)



Display the status of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let jobDelayId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdJobDelaysJobDelayIdGet(jobId, jobDelayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **jobDelayId** | [**String**](.md)|  | 

### Return type

[**JobDelay**](JobDelay.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdJobDelaysJobDelayIdPatch"></a>
# **jobsJobIdJobDelaysJobDelayIdPatch**
> JobDelay jobsJobIdJobDelaysJobDelayIdPatch(body, jobId, jobDelayId)



Change properties of a delay - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let body = new MissionControl.JobDelaysJobDelayIdBody(); // JobDelaysJobDelayIdBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let jobDelayId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdJobDelaysJobDelayIdPatch(body, jobId, jobDelayId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobDelaysJobDelayIdBody**](JobDelaysJobDelayIdBody.md)|  | 
 **jobId** | [**String**](.md)|  | 
 **jobDelayId** | [**String**](.md)|  | 

### Return type

[**JobDelay**](JobDelay.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdJobDelaysPost"></a>
# **jobsJobIdJobDelaysPost**
> JobDelay jobsJobIdJobDelaysPost(body, jobId)



Create a new delay for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ShopFloorApi();
let body = new MissionControl.JobIdJobDelaysBody(); // JobIdJobDelaysBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdJobDelaysPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdJobDelaysBody**](JobIdJobDelaysBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**JobDelay**](JobDelay.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

