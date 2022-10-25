# MissionControl.ProdutionApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsListIdMembersGet**](ProdutionApi.md#listsListIdMembersGet) | **GET** /lists/{list_id}/members | 

<a name="listsListIdMembersGet"></a>
# **listsListIdMembersGet**
> [ListMember] listsListIdMembersGet(listId, opts)



Returns all members in a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProdutionApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsListIdMembersGet(listId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[ListMember]**](ListMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

