# MissionControl.JobsApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileActionsFileActionIdDelete**](JobsApi.md#fileActionsFileActionIdDelete) | **DELETE** /file_actions/{file_action_id} | 
[**fileActionsFileActionIdFileRemarksGet**](JobsApi.md#fileActionsFileActionIdFileRemarksGet) | **GET** /file_actions/{file_action_id}/file_remarks | 
[**fileActionsFileActionIdFileRemarksPost**](JobsApi.md#fileActionsFileActionIdFileRemarksPost) | **POST** /file_actions/{file_action_id}/file_remarks | 
[**fileActionsFileActionIdGet**](JobsApi.md#fileActionsFileActionIdGet) | **GET** /file_actions/{file_action_id} | 
[**fileActionsFileActionIdPatch**](JobsApi.md#fileActionsFileActionIdPatch) | **PATCH** /file_actions/{file_action_id} | 
[**fileReferencesFileReferenceIdDelete**](JobsApi.md#fileReferencesFileReferenceIdDelete) | **DELETE** /file_references/{file_reference_id} | 
[**fileReferencesFileReferenceIdFileActionsGet**](JobsApi.md#fileReferencesFileReferenceIdFileActionsGet) | **GET** /file_references/{file_reference_id}/file_actions | 
[**fileReferencesFileReferenceIdFileActionsPost**](JobsApi.md#fileReferencesFileReferenceIdFileActionsPost) | **POST** /file_references/{file_reference_id}/file_actions | 
[**fileReferencesFileReferenceIdGet**](JobsApi.md#fileReferencesFileReferenceIdGet) | **GET** /file_references/{file_reference_id} | 
[**finishingsFinishingIdDelete**](JobsApi.md#finishingsFinishingIdDelete) | **DELETE** /finishings/{finishing_id} | 
[**finishingsFinishingIdFileReferencesGet**](JobsApi.md#finishingsFinishingIdFileReferencesGet) | **GET** /finishings/{finishing_id}/file_references | 
[**finishingsFinishingIdFileReferencesPost**](JobsApi.md#finishingsFinishingIdFileReferencesPost) | **POST** /finishings/{finishing_id}/file_references | 
[**finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete**](JobsApi.md#finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete) | **DELETE** /finishings/{finishing_id}/finishing_applications/{finishing_application_id} | 
[**finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet**](JobsApi.md#finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet) | **GET** /finishings/{finishing_id}/finishing_applications/{finishing_application_id} | 
[**finishingsFinishingIdFinishingApplicationsGet**](JobsApi.md#finishingsFinishingIdFinishingApplicationsGet) | **GET** /finishings/{finishing_id}/finishing_applications | 
[**finishingsFinishingIdFinishingApplicationsPost**](JobsApi.md#finishingsFinishingIdFinishingApplicationsPost) | **POST** /finishings/{finishing_id}/finishing_applications | 
[**finishingsFinishingIdGet**](JobsApi.md#finishingsFinishingIdGet) | **GET** /finishings/{finishing_id} | 
[**finishingsFinishingIdPatch**](JobsApi.md#finishingsFinishingIdPatch) | **PATCH** /finishings/{finishing_id} | 
[**jobsGet**](JobsApi.md#jobsGet) | **GET** /jobs | 
[**jobsJobIdDelete**](JobsApi.md#jobsJobIdDelete) | **DELETE** /jobs/{job_id} | 
[**jobsJobIdFinishedProductDelete**](JobsApi.md#jobsJobIdFinishedProductDelete) | **DELETE** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductGet**](JobsApi.md#jobsJobIdFinishedProductGet) | **GET** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductPatch**](JobsApi.md#jobsJobIdFinishedProductPatch) | **PATCH** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductPost**](JobsApi.md#jobsJobIdFinishedProductPost) | **POST** /jobs/{job_id}/finished_product | 
[**jobsJobIdGet**](JobsApi.md#jobsJobIdGet) | **GET** /jobs/{job_id} | 
[**jobsJobIdMilestonesGet**](JobsApi.md#jobsJobIdMilestonesGet) | **GET** /jobs/{job_id}/milestones | 
[**jobsJobIdMilestonesPost**](JobsApi.md#jobsJobIdMilestonesPost) | **POST** /jobs/{job_id}/milestones | 
[**jobsJobIdPackagingsGet**](JobsApi.md#jobsJobIdPackagingsGet) | **GET** /jobs/{job_id}/packagings | 
[**jobsJobIdPackagingsPost**](JobsApi.md#jobsJobIdPackagingsPost) | **POST** /jobs/{job_id}/packagings | 
[**jobsJobIdPartsGet**](JobsApi.md#jobsJobIdPartsGet) | **GET** /jobs/{job_id}/parts | 
[**jobsJobIdPartsPost**](JobsApi.md#jobsJobIdPartsPost) | **POST** /jobs/{job_id}/parts | 
[**jobsJobIdPatch**](JobsApi.md#jobsJobIdPatch) | **PATCH** /jobs/{job_id} | 
[**jobsJobIdStateTransitionsGet**](JobsApi.md#jobsJobIdStateTransitionsGet) | **GET** /jobs/{job_id}/state_transitions | 
[**jobsJobIdStateTransitionsPost**](JobsApi.md#jobsJobIdStateTransitionsPost) | **POST** /jobs/{job_id}/state_transitions | 
[**jobsJobIdStateTransitionsStateTransitionIdGet**](JobsApi.md#jobsJobIdStateTransitionsStateTransitionIdGet) | **GET** /jobs/{job_id}/state_transitions/{state_transition_id} | 
[**jobsPost**](JobsApi.md#jobsPost) | **POST** /jobs | 
[**milestonesMilestoneIdDelete**](JobsApi.md#milestonesMilestoneIdDelete) | **DELETE** /milestones/{milestone_id} | 
[**milestonesMilestoneIdGet**](JobsApi.md#milestonesMilestoneIdGet) | **GET** /milestones/{milestone_id} | 
[**milestonesMilestoneIdPatch**](JobsApi.md#milestonesMilestoneIdPatch) | **PATCH** /milestones/{milestone_id} | 
[**packagingsPackagingIdDelete**](JobsApi.md#packagingsPackagingIdDelete) | **DELETE** /packagings/{packaging_id} | 
[**packagingsPackagingIdGet**](JobsApi.md#packagingsPackagingIdGet) | **GET** /packagings/{packaging_id} | 
[**packagingsPackagingIdPatch**](JobsApi.md#packagingsPackagingIdPatch) | **PATCH** /packagings/{packaging_id} | 
[**partsPartIdColorsColorIdDelete**](JobsApi.md#partsPartIdColorsColorIdDelete) | **DELETE** /parts/{part_id}/colors/{color_id} | 
[**partsPartIdColorsColorIdGet**](JobsApi.md#partsPartIdColorsColorIdGet) | **GET** /parts/{part_id}/colors/{color_id} | 
[**partsPartIdColorsColorIdPatch**](JobsApi.md#partsPartIdColorsColorIdPatch) | **PATCH** /parts/{part_id}/colors/{color_id} | 
[**partsPartIdColorsGet**](JobsApi.md#partsPartIdColorsGet) | **GET** /parts/{part_id}/colors | 
[**partsPartIdColorsPost**](JobsApi.md#partsPartIdColorsPost) | **POST** /parts/{part_id}/colors | 
[**partsPartIdDelete**](JobsApi.md#partsPartIdDelete) | **DELETE** /parts/{part_id} | 
[**partsPartIdDesiredSubstrateDelete**](JobsApi.md#partsPartIdDesiredSubstrateDelete) | **DELETE** /parts/{part_id}/desired_substrate | 
[**partsPartIdDesiredSubstrateGet**](JobsApi.md#partsPartIdDesiredSubstrateGet) | **GET** /parts/{part_id}/desired_substrate | 
[**partsPartIdDesiredSubstratePatch**](JobsApi.md#partsPartIdDesiredSubstratePatch) | **PATCH** /parts/{part_id}/desired_substrate | 
[**partsPartIdDesiredSubstratePost**](JobsApi.md#partsPartIdDesiredSubstratePost) | **POST** /parts/{part_id}/desired_substrate | 
[**partsPartIdFileReferencesGet**](JobsApi.md#partsPartIdFileReferencesGet) | **GET** /parts/{part_id}/file_references | 
[**partsPartIdFileReferencesPost**](JobsApi.md#partsPartIdFileReferencesPost) | **POST** /parts/{part_id}/file_references | 
[**partsPartIdFinishingsGet**](JobsApi.md#partsPartIdFinishingsGet) | **GET** /parts/{part_id}/finishings | 
[**partsPartIdFinishingsPost**](JobsApi.md#partsPartIdFinishingsPost) | **POST** /parts/{part_id}/finishings | 
[**partsPartIdGet**](JobsApi.md#partsPartIdGet) | **GET** /parts/{part_id} | 
[**partsPartIdPatch**](JobsApi.md#partsPartIdPatch) | **PATCH** /parts/{part_id} | 

<a name="fileActionsFileActionIdDelete"></a>
# **fileActionsFileActionIdDelete**
> fileActionsFileActionIdDelete(fileActionId)



Removes a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileActionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileActionsFileActionIdDelete(fileActionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileActionId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fileActionsFileActionIdFileRemarksGet"></a>
# **fileActionsFileActionIdFileRemarksGet**
> [FileRemark] fileActionsFileActionIdFileRemarksGet(fileActionId, opts)



Get all file remarks of a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileActionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.fileActionsFileActionIdFileRemarksGet(fileActionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileActionId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[FileRemark]**](FileRemark.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fileActionsFileActionIdFileRemarksPost"></a>
# **fileActionsFileActionIdFileRemarksPost**
> FileRemark fileActionsFileActionIdFileRemarksPost(body, fileActionId)



Creates a file remark. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FileActionIdFileRemarksBody(); // FileActionIdFileRemarksBody | 
let fileActionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileActionsFileActionIdFileRemarksPost(body, fileActionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FileActionIdFileRemarksBody**](FileActionIdFileRemarksBody.md)|  | 
 **fileActionId** | [**String**](.md)|  | 

### Return type

[**FileRemark**](FileRemark.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileActionsFileActionIdGet"></a>
# **fileActionsFileActionIdGet**
> FileAction fileActionsFileActionIdGet(fileActionId)



Returns a specific file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileActionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileActionsFileActionIdGet(fileActionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileActionId** | [**String**](.md)|  | 

### Return type

[**FileAction**](FileAction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fileActionsFileActionIdPatch"></a>
# **fileActionsFileActionIdPatch**
> FileAction fileActionsFileActionIdPatch(body, fileActionId)



Modifies file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FileActionsFileActionIdBody(); // FileActionsFileActionIdBody | 
let fileActionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileActionsFileActionIdPatch(body, fileActionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FileActionsFileActionIdBody**](FileActionsFileActionIdBody.md)|  | 
 **fileActionId** | [**String**](.md)|  | 

### Return type

[**FileAction**](FileAction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileReferencesFileReferenceIdDelete"></a>
# **fileReferencesFileReferenceIdDelete**
> fileReferencesFileReferenceIdDelete(fileReferenceId)



Removes the file reference from its referenceable, which is a part or a finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileReferenceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileReferencesFileReferenceIdDelete(fileReferenceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileReferenceId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fileReferencesFileReferenceIdFileActionsGet"></a>
# **fileReferencesFileReferenceIdFileActionsGet**
> [FileAction] fileReferencesFileReferenceIdFileActionsGet(fileReferenceId, opts)



Get all file actions of a file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileReferenceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.fileReferencesFileReferenceIdFileActionsGet(fileReferenceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileReferenceId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[FileAction]**](FileAction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fileReferencesFileReferenceIdFileActionsPost"></a>
# **fileReferencesFileReferenceIdFileActionsPost**
> FileAction fileReferencesFileReferenceIdFileActionsPost(body, fileReferenceId)



Creates a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FileReferenceIdFileActionsBody(); // FileReferenceIdFileActionsBody | 
let fileReferenceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileReferencesFileReferenceIdFileActionsPost(body, fileReferenceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FileReferenceIdFileActionsBody**](FileReferenceIdFileActionsBody.md)|  | 
 **fileReferenceId** | [**String**](.md)|  | 

### Return type

[**FileAction**](FileAction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileReferencesFileReferenceIdGet"></a>
# **fileReferencesFileReferenceIdGet**
> FileReference fileReferencesFileReferenceIdGet(fileReferenceId)



Returns a specific file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let fileReferenceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.fileReferencesFileReferenceIdGet(fileReferenceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileReferenceId** | [**String**](.md)|  | 

### Return type

[**FileReference**](FileReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdDelete"></a>
# **finishingsFinishingIdDelete**
> finishingsFinishingIdDelete(finishingId)



Removes the finishing from a part. The finishing itself is destroyed                         by this operation including all of it&#x27;s applications. If you only want to                         detach a finishing from one part please remove the finishing application                         for that part instead. Finishings can only be removed as long as the                         parent jobs is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdDelete(finishingId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdFileReferencesGet"></a>
# **finishingsFinishingIdFileReferencesGet**
> [FileReference] finishingsFinishingIdFileReferencesGet(finishingId, opts)



Returns all file references of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.finishingsFinishingIdFileReferencesGet(finishingId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[FileReference]**](FileReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdFileReferencesPost"></a>
# **finishingsFinishingIdFileReferencesPost**
> FileReference finishingsFinishingIdFileReferencesPost(body, finishingId)



Creates a new file reference for a specific finishing. File referenes can only be                           added or modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;.                           This means, that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FinishingIdFileReferencesBody(); // FinishingIdFileReferencesBody | 
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdFileReferencesPost(body, finishingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinishingIdFileReferencesBody**](FinishingIdFileReferencesBody.md)|  | 
 **finishingId** | [**String**](.md)|  | 

### Return type

[**FileReference**](FileReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete"></a>
# **finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete**
> finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete(finishingId, finishingApplicationId)



Removes a finishing application from a specific finishing. If a finishing is                             left without any applications after this removal, the finishing itself will                             be automatically destroyed as well. Removing finishing applications is only                             possible if the parent job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let finishingApplicationId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete(finishingId, finishingApplicationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 
 **finishingApplicationId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet"></a>
# **finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet**
> FinishingApplication finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet(finishingId, finishingApplicationId)



Returns a specific finishing application. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let finishingApplicationId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet(finishingId, finishingApplicationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 
 **finishingApplicationId** | [**String**](.md)|  | 

### Return type

[**FinishingApplication**](FinishingApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdFinishingApplicationsGet"></a>
# **finishingsFinishingIdFinishingApplicationsGet**
> [FinishingApplication] finishingsFinishingIdFinishingApplicationsGet(finishingId, opts)



Returns all finishing applications of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.finishingsFinishingIdFinishingApplicationsGet(finishingId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[FinishingApplication]**](FinishingApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdFinishingApplicationsPost"></a>
# **finishingsFinishingIdFinishingApplicationsPost**
> FinishingApplication finishingsFinishingIdFinishingApplicationsPost(body, finishingId)



Creates a new finishing application for a specific finshing and part.                           Finshing applications can only be added as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FinishingIdFinishingApplicationsBody(); // FinishingIdFinishingApplicationsBody | 
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdFinishingApplicationsPost(body, finishingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinishingIdFinishingApplicationsBody**](FinishingIdFinishingApplicationsBody.md)|  | 
 **finishingId** | [**String**](.md)|  | 

### Return type

[**FinishingApplication**](FinishingApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finishingsFinishingIdGet"></a>
# **finishingsFinishingIdGet**
> Finishing finishingsFinishingIdGet(finishingId)



Returns a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdGet(finishingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finishingId** | [**String**](.md)|  | 

### Return type

[**Finishing**](Finishing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="finishingsFinishingIdPatch"></a>
# **finishingsFinishingIdPatch**
> Finishing finishingsFinishingIdPatch(body, finishingId)



 - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.FinishingsFinishingIdBody(); // FinishingsFinishingIdBody | 
let finishingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.finishingsFinishingIdPatch(body, finishingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinishingsFinishingIdBody**](FinishingsFinishingIdBody.md)|  | 
 **finishingId** | [**String**](.md)|  | 

### Return type

[**Finishing**](Finishing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsGet"></a>
# **jobsGet**
> [Job] jobsGet(opts)



Returns all jobs that have a connection to the &#x60;Organization&#x60;                        from your token. This means that those jobs might have been created by                        that organization, are produced by it, some parts have been outsourced to it,                        or the organization is the customer which ordered a job. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsGet(opts).then((data) => {
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

[**[Job]**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdDelete"></a>
# **jobsJobIdDelete**
> jobsJobIdDelete(jobId)



Removes or specific job while this job is still a &#x60;draft&#x60;. If the job                          is not in a &#x60;draft&#x60; state anymore the job will be canceled. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdDelete(jobId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductDelete"></a>
# **jobsJobIdFinishedProductDelete**
> jobsJobIdFinishedProductDelete(jobId)



Remove the FinishedProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductDelete(jobId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductGet"></a>
# **jobsJobIdFinishedProductGet**
> FinishedProduct jobsJobIdFinishedProductGet(jobId)



Show the full details of the FinishedProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductGet(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductPatch"></a>
# **jobsJobIdFinishedProductPatch**
> FinishedProduct jobsJobIdFinishedProductPatch(body, jobId)



Update the FinishedProduct with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdFinishedProductBody1(); // JobIdFinishedProductBody1 | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductPatch(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdFinishedProductBody1**](JobIdFinishedProductBody1.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductPost"></a>
# **jobsJobIdFinishedProductPost**
> FinishedProduct jobsJobIdFinishedProductPost(body, jobId)



Create the FinishedProduct for a Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdFinishedProductBody(); // JobIdFinishedProductBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdFinishedProductBody**](JobIdFinishedProductBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdGet"></a>
# **jobsJobIdGet**
> InlineResponse200 jobsJobIdGet(jobId)



Returns a specific job, including it&#x27;s entire defintion like compments, their                       colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdGet(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdMilestonesGet"></a>
# **jobsJobIdMilestonesGet**
> [Milestone] jobsJobIdMilestonesGet(jobId, opts)



List all milestones for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdMilestonesGet(jobId, opts).then((data) => {
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

[**[Milestone]**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdMilestonesPost"></a>
# **jobsJobIdMilestonesPost**
> Milestone jobsJobIdMilestonesPost(body, jobId)



Create a new milestone for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdMilestonesBody(); // JobIdMilestonesBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdMilestonesPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdMilestonesBody**](JobIdMilestonesBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdPackagingsGet"></a>
# **jobsJobIdPackagingsGet**
> [Packaging] jobsJobIdPackagingsGet(jobId, opts)



Returns all packagings of a specific jobs - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdPackagingsGet(jobId, opts).then((data) => {
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

[**[Packaging]**](Packaging.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdPackagingsPost"></a>
# **jobsJobIdPackagingsPost**
> Packaging jobsJobIdPackagingsPost(body, jobId)



Creates a new packaging for the specified job. Packagings can only be added or                           modified as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdPackagingsBody(); // JobIdPackagingsBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdPackagingsPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdPackagingsBody**](JobIdPackagingsBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Packaging**](Packaging.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdPartsGet"></a>
# **jobsJobIdPartsGet**
> [Part] jobsJobIdPartsGet(jobId, opts)



Returns all parts of a specific job - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdPartsGet(jobId, opts).then((data) => {
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

[**[Part]**](Part.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdPartsPost"></a>
# **jobsJobIdPartsPost**
> Part jobsJobIdPartsPost(body, jobId)



Creates a new part for the specified job. Parts can only be added or modified                           as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdPartsBody(); // JobIdPartsBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdPartsPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdPartsBody**](JobIdPartsBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Part**](Part.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdPatch"></a>
# **jobsJobIdPatch**
> Job jobsJobIdPatch(body, jobId)



Changes the attributes on a job. Please not that most attributes cannot be                         changed anymore, once the job is no longer a draft. If you try to change a                         frozen attribute, you will receive a 422 error. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobsJobIdBody(); // JobsJobIdBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdPatch(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobsJobIdBody**](JobsJobIdBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdStateTransitionsGet"></a>
# **jobsJobIdStateTransitionsGet**
> [JobStateTransition] jobsJobIdStateTransitionsGet(jobId, opts)



List transitions for a given Job, chronologically from most recent to oldest - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdStateTransitionsGet(jobId, opts).then((data) => {
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

[**[JobStateTransition]**](JobStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdStateTransitionsPost"></a>
# **jobsJobIdStateTransitionsPost**
> JobStateTransition jobsJobIdStateTransitionsPost(body, jobId)



Transition a Job to a new state - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobIdStateTransitionsBody(); // JobIdStateTransitionsBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdStateTransitionsPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdStateTransitionsBody**](JobIdStateTransitionsBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**JobStateTransition**](JobStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdStateTransitionsStateTransitionIdGet"></a>
# **jobsJobIdStateTransitionsStateTransitionIdGet**
> JobStateTransition jobsJobIdStateTransitionsStateTransitionIdGet(jobId, stateTransitionId)



Display a given transition - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let stateTransitionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdStateTransitionsStateTransitionIdGet(jobId, stateTransitionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **stateTransitionId** | [**String**](.md)|  | 

### Return type

[**JobStateTransition**](JobStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsPost"></a>
# **jobsPost**
> Job jobsPost(body)



Creates a new job. When creating jobs you may supply information for                         parts (including colors, finishings, desired substrate) as well. Please see the                         respective documentation for parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.JobsBody(); // JobsBody | 

apiInstance.jobsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobsBody**](JobsBody.md)|  | 

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="milestonesMilestoneIdDelete"></a>
# **milestonesMilestoneIdDelete**
> milestonesMilestoneIdDelete(milestoneId)



Remove a milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdDelete(milestoneId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestoneId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="milestonesMilestoneIdGet"></a>
# **milestonesMilestoneIdGet**
> Milestone milestonesMilestoneIdGet(milestoneId)



Display the status of a Milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdGet(milestoneId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestoneId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="milestonesMilestoneIdPatch"></a>
# **milestonesMilestoneIdPatch**
> Milestone milestonesMilestoneIdPatch(body, milestoneId)



Change properties of a Milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.MilestonesMilestoneIdBody(); // MilestonesMilestoneIdBody | 
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdPatch(body, milestoneId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MilestonesMilestoneIdBody**](MilestonesMilestoneIdBody.md)|  | 
 **milestoneId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="packagingsPackagingIdDelete"></a>
# **packagingsPackagingIdDelete**
> packagingsPackagingIdDelete(packagingId)



Removes a specific packaging, which also unassigns it from its job. Removing packagings                             is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let packagingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.packagingsPackagingIdDelete(packagingId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packagingId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="packagingsPackagingIdGet"></a>
# **packagingsPackagingIdGet**
> Packaging packagingsPackagingIdGet(packagingId)



Returns a specific packaging. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let packagingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.packagingsPackagingIdGet(packagingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packagingId** | [**String**](.md)|  | 

### Return type

[**Packaging**](Packaging.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="packagingsPackagingIdPatch"></a>
# **packagingsPackagingIdPatch**
> Packaging packagingsPackagingIdPatch(body, packagingId)



Modifies a specific packagings. Packagings can only be modified as long as their parent                           job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PackagingsPackagingIdBody(); // PackagingsPackagingIdBody | 
let packagingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.packagingsPackagingIdPatch(body, packagingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackagingsPackagingIdBody**](PackagingsPackagingIdBody.md)|  | 
 **packagingId** | [**String**](.md)|  | 

### Return type

[**Packaging**](Packaging.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdColorsColorIdDelete"></a>
# **partsPartIdColorsColorIdDelete**
> partsPartIdColorsColorIdDelete(partId, colorId)



Removes a specific color from a part, as long as the job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let colorId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdColorsColorIdDelete(partId, colorId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 
 **colorId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdColorsColorIdGet"></a>
# **partsPartIdColorsColorIdGet**
> Color partsPartIdColorsColorIdGet(partId, colorId)



Returns a specific color from a part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let colorId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdColorsColorIdGet(partId, colorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 
 **colorId** | [**String**](.md)|  | 

### Return type

[**Color**](Color.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdColorsColorIdPatch"></a>
# **partsPartIdColorsColorIdPatch**
> Color partsPartIdColorsColorIdPatch(body, partId, colorId)



Changes attributes on a specific color from a part, as long as job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.ColorsColorIdBody(); // ColorsColorIdBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let colorId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdColorsColorIdPatch(body, partId, colorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ColorsColorIdBody**](ColorsColorIdBody.md)|  | 
 **partId** | [**String**](.md)|  | 
 **colorId** | [**String**](.md)|  | 

### Return type

[**Color**](Color.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdColorsGet"></a>
# **partsPartIdColorsGet**
> [Color] partsPartIdColorsGet(partId, opts)



Returns all colors from a job&#x27;s part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.partsPartIdColorsGet(partId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Color]**](Color.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdColorsPost"></a>
# **partsPartIdColorsPost**
> Color partsPartIdColorsPost(body, partId)



Creates a new color and attaches it to the selected part with the given parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartIdColorsBody(); // PartIdColorsBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdColorsPost(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartIdColorsBody**](PartIdColorsBody.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**Color**](Color.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdDelete"></a>
# **partsPartIdDelete**
> partsPartIdDelete(partId)



Removes a specific part, which also unassigns it from its job. Removing parts                            is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdDelete(partId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdDesiredSubstrateDelete"></a>
# **partsPartIdDesiredSubstrateDelete**
> partsPartIdDesiredSubstrateDelete(partId)



Removes the desired substrate information from a specific part as long as                             the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdDesiredSubstrateDelete(partId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdDesiredSubstrateGet"></a>
# **partsPartIdDesiredSubstrateGet**
> DesiredSubstrate partsPartIdDesiredSubstrateGet(partId)



Returns the desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdDesiredSubstrateGet(partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 

### Return type

[**DesiredSubstrate**](DesiredSubstrate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdDesiredSubstratePatch"></a>
# **partsPartIdDesiredSubstratePatch**
> DesiredSubstrate partsPartIdDesiredSubstratePatch(body, partId)



Modifies the desired substrate information from a specific part as long as                           the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartIdDesiredSubstrateBody1(); // PartIdDesiredSubstrateBody1 | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdDesiredSubstratePatch(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartIdDesiredSubstrateBody1**](PartIdDesiredSubstrateBody1.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**DesiredSubstrate**](DesiredSubstrate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdDesiredSubstratePost"></a>
# **partsPartIdDesiredSubstratePost**
> DesiredSubstrate partsPartIdDesiredSubstratePost(body, partId)



Creates new desired substrate information. If desired substrate information is                           already present, it will be overwritten. Creating desired substrate information                           is only possible as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartIdDesiredSubstrateBody(); // PartIdDesiredSubstrateBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdDesiredSubstratePost(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartIdDesiredSubstrateBody**](PartIdDesiredSubstrateBody.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**DesiredSubstrate**](DesiredSubstrate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdFileReferencesGet"></a>
# **partsPartIdFileReferencesGet**
> [FileReference] partsPartIdFileReferencesGet(partId, opts)



Returns all file references of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.partsPartIdFileReferencesGet(partId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[FileReference]**](FileReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdFileReferencesPost"></a>
# **partsPartIdFileReferencesPost**
> FileReference partsPartIdFileReferencesPost(body, partId)



Creates a new file reference for a specific part. File referenes can only be added or                           modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;. This means,                           that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartIdFileReferencesBody(); // PartIdFileReferencesBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdFileReferencesPost(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartIdFileReferencesBody**](PartIdFileReferencesBody.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**FileReference**](FileReference.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdFinishingsGet"></a>
# **partsPartIdFinishingsGet**
> [Finishing] partsPartIdFinishingsGet(partId, opts)



Returns all finishings of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.partsPartIdFinishingsGet(partId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Finishing]**](Finishing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdFinishingsPost"></a>
# **partsPartIdFinishingsPost**
> Finishing partsPartIdFinishingsPost(body, partId)



Creates a new finishing for a specific part. Finishings can only be                           added or modified as long as the job they belong to is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartIdFinishingsBody(); // PartIdFinishingsBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdFinishingsPost(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartIdFinishingsBody**](PartIdFinishingsBody.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**Finishing**](Finishing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partsPartIdGet"></a>
# **partsPartIdGet**
> ExtendedPart partsPartIdGet(partId)



Returns a specific part, including its entire defintion with colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdGet(partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | [**String**](.md)|  | 

### Return type

[**ExtendedPart**](ExtendedPart.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partsPartIdPatch"></a>
# **partsPartIdPatch**
> Part partsPartIdPatch(body, partId)



Modifies a specific part. Parts can only be modified as long as their parent job                           is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.JobsApi();
let body = new MissionControl.PartsPartIdBody(); // PartsPartIdBody | 
let partId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.partsPartIdPatch(body, partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PartsPartIdBody**](PartsPartIdBody.md)|  | 
 **partId** | [**String**](.md)|  | 

### Return type

[**Part**](Part.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

