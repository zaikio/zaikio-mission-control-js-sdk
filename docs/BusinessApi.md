# MissionControl.BusinessApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estimatesEstimateIdDelete**](BusinessApi.md#estimatesEstimateIdDelete) | **DELETE** /estimates/{estimate_id} | 
[**estimatesEstimateIdGet**](BusinessApi.md#estimatesEstimateIdGet) | **GET** /estimates/{estimate_id} | 
[**estimatesEstimateIdPatch**](BusinessApi.md#estimatesEstimateIdPatch) | **PATCH** /estimates/{estimate_id} | 
[**estimatesEstimateIdWorkstepEstimatesGet**](BusinessApi.md#estimatesEstimateIdWorkstepEstimatesGet) | **GET** /estimates/{estimate_id}/workstep_estimates | 
[**estimatesEstimateIdWorkstepEstimatesPost**](BusinessApi.md#estimatesEstimateIdWorkstepEstimatesPost) | **POST** /estimates/{estimate_id}/workstep_estimates | 
[**jobsJobIdEstimatesGet**](BusinessApi.md#jobsJobIdEstimatesGet) | **GET** /jobs/{job_id}/estimates | 
[**jobsJobIdEstimatesPost**](BusinessApi.md#jobsJobIdEstimatesPost) | **POST** /jobs/{job_id}/estimates | 
[**materialEstimatesMaterialEstimateIdDelete**](BusinessApi.md#materialEstimatesMaterialEstimateIdDelete) | **DELETE** /material_estimates/{material_estimate_id} | 
[**materialEstimatesMaterialEstimateIdGet**](BusinessApi.md#materialEstimatesMaterialEstimateIdGet) | **GET** /material_estimates/{material_estimate_id} | 
[**materialEstimatesMaterialEstimateIdPatch**](BusinessApi.md#materialEstimatesMaterialEstimateIdPatch) | **PATCH** /material_estimates/{material_estimate_id} | 
[**workstepEstimatesWorkstepEstimateIdDelete**](BusinessApi.md#workstepEstimatesWorkstepEstimateIdDelete) | **DELETE** /workstep_estimates/{workstep_estimate_id} | 
[**workstepEstimatesWorkstepEstimateIdGet**](BusinessApi.md#workstepEstimatesWorkstepEstimateIdGet) | **GET** /workstep_estimates/{workstep_estimate_id} | 
[**workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet**](BusinessApi.md#workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet) | **GET** /workstep_estimates/{workstep_estimate_id}/material_estimates | 
[**workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost**](BusinessApi.md#workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost) | **POST** /workstep_estimates/{workstep_estimate_id}/material_estimates | 
[**workstepEstimatesWorkstepEstimateIdPatch**](BusinessApi.md#workstepEstimatesWorkstepEstimateIdPatch) | **PATCH** /workstep_estimates/{workstep_estimate_id} | 

<a name="estimatesEstimateIdDelete"></a>
# **estimatesEstimateIdDelete**
> estimatesEstimateIdDelete(estimateId)



Removes a specific estimate, inclduing all of its workstep and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.estimatesEstimateIdDelete(estimateId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="estimatesEstimateIdGet"></a>
# **estimatesEstimateIdGet**
> Estimate estimatesEstimateIdGet(estimateId)



Returns a specific estimate, including its workstep estimates and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.estimatesEstimateIdGet(estimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateId** | [**String**](.md)|  | 

### Return type

[**Estimate**](Estimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="estimatesEstimateIdPatch"></a>
# **estimatesEstimateIdPatch**
> Estimate estimatesEstimateIdPatch(body, estimateId)



Modifies a specific estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.EstimatesEstimateIdBody(); // EstimatesEstimateIdBody | 
let estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.estimatesEstimateIdPatch(body, estimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EstimatesEstimateIdBody**](EstimatesEstimateIdBody.md)|  | 
 **estimateId** | [**String**](.md)|  | 

### Return type

[**Estimate**](Estimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estimatesEstimateIdWorkstepEstimatesGet"></a>
# **estimatesEstimateIdWorkstepEstimatesGet**
> [WorkstepEstimate] estimatesEstimateIdWorkstepEstimatesGet(estimateId, opts)



Returns all workstep estimates for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.estimatesEstimateIdWorkstepEstimatesGet(estimateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[WorkstepEstimate]**](WorkstepEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="estimatesEstimateIdWorkstepEstimatesPost"></a>
# **estimatesEstimateIdWorkstepEstimatesPost**
> WorkstepEstimate estimatesEstimateIdWorkstepEstimatesPost(body, estimateId)



Creates a new workstep estimate for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.EstimateIdWorkstepEstimatesBody(); // EstimateIdWorkstepEstimatesBody | 
let estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.estimatesEstimateIdWorkstepEstimatesPost(body, estimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EstimateIdWorkstepEstimatesBody**](EstimateIdWorkstepEstimatesBody.md)|  | 
 **estimateId** | [**String**](.md)|  | 

### Return type

[**WorkstepEstimate**](WorkstepEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdEstimatesGet"></a>
# **jobsJobIdEstimatesGet**
> [Estimate] jobsJobIdEstimatesGet(jobId, opts)



Returns all estimates of a specific job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdEstimatesGet(jobId, opts).then((data) => {
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

[**[Estimate]**](Estimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdEstimatesPost"></a>
# **jobsJobIdEstimatesPost**
> Estimate jobsJobIdEstimatesPost(body, jobId)



Creates a new estimate for the specified job. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.JobIdEstimatesBody(); // JobIdEstimatesBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdEstimatesPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdEstimatesBody**](JobIdEstimatesBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Estimate**](Estimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="materialEstimatesMaterialEstimateIdDelete"></a>
# **materialEstimatesMaterialEstimateIdDelete**
> materialEstimatesMaterialEstimateIdDelete(materialEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let materialEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.materialEstimatesMaterialEstimateIdDelete(materialEstimateId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialEstimateId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="materialEstimatesMaterialEstimateIdGet"></a>
# **materialEstimatesMaterialEstimateIdGet**
> MaterialEstimate materialEstimatesMaterialEstimateIdGet(materialEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let materialEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.materialEstimatesMaterialEstimateIdGet(materialEstimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialEstimateId** | [**String**](.md)|  | 

### Return type

[**MaterialEstimate**](MaterialEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="materialEstimatesMaterialEstimateIdPatch"></a>
# **materialEstimatesMaterialEstimateIdPatch**
> MaterialEstimate materialEstimatesMaterialEstimateIdPatch(body, materialEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.MaterialEstimatesMaterialEstimateIdBody(); // MaterialEstimatesMaterialEstimateIdBody | 
let materialEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.materialEstimatesMaterialEstimateIdPatch(body, materialEstimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MaterialEstimatesMaterialEstimateIdBody**](MaterialEstimatesMaterialEstimateIdBody.md)|  | 
 **materialEstimateId** | [**String**](.md)|  | 

### Return type

[**MaterialEstimate**](MaterialEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepEstimatesWorkstepEstimateIdDelete"></a>
# **workstepEstimatesWorkstepEstimateIdDelete**
> workstepEstimatesWorkstepEstimateIdDelete(workstepEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let workstepEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepEstimatesWorkstepEstimateIdDelete(workstepEstimateId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepEstimateId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepEstimatesWorkstepEstimateIdGet"></a>
# **workstepEstimatesWorkstepEstimateIdGet**
> WorkstepEstimate workstepEstimatesWorkstepEstimateIdGet(workstepEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let workstepEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepEstimatesWorkstepEstimateIdGet(workstepEstimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepEstimateId** | [**String**](.md)|  | 

### Return type

[**WorkstepEstimate**](WorkstepEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet"></a>
# **workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet**
> [MaterialEstimate] workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet(workstepEstimateId, opts)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let workstepEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet(workstepEstimateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepEstimateId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[MaterialEstimate]**](MaterialEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost"></a>
# **workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost**
> MaterialEstimate workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost(body, workstepEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.WorkstepEstimateIdMaterialEstimatesBody(); // WorkstepEstimateIdMaterialEstimatesBody | 
let workstepEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost(body, workstepEstimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepEstimateIdMaterialEstimatesBody**](WorkstepEstimateIdMaterialEstimatesBody.md)|  | 
 **workstepEstimateId** | [**String**](.md)|  | 

### Return type

[**MaterialEstimate**](MaterialEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepEstimatesWorkstepEstimateIdPatch"></a>
# **workstepEstimatesWorkstepEstimateIdPatch**
> WorkstepEstimate workstepEstimatesWorkstepEstimateIdPatch(body, workstepEstimateId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.WorkstepEstimatesWorkstepEstimateIdBody(); // WorkstepEstimatesWorkstepEstimateIdBody | 
let workstepEstimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepEstimatesWorkstepEstimateIdPatch(body, workstepEstimateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepEstimatesWorkstepEstimateIdBody**](WorkstepEstimatesWorkstepEstimateIdBody.md)|  | 
 **workstepEstimateId** | [**String**](.md)|  | 

### Return type

[**WorkstepEstimate**](WorkstepEstimate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

