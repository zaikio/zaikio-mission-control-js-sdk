# MissionControl.LogisticsApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commissioningsCommissioningIdDelete**](LogisticsApi.md#commissioningsCommissioningIdDelete) | **DELETE** /commissionings/{commissioning_id} | 
[**commissioningsCommissioningIdGet**](LogisticsApi.md#commissioningsCommissioningIdGet) | **GET** /commissionings/{commissioning_id} | 
[**commissioningsCommissioningIdPatch**](LogisticsApi.md#commissioningsCommissioningIdPatch) | **PATCH** /commissionings/{commissioning_id} | 
[**commissioningsCommissioningIdPickupsGet**](LogisticsApi.md#commissioningsCommissioningIdPickupsGet) | **GET** /commissionings/{commissioning_id}/pickups | 
[**commissioningsCommissioningIdPickupsPost**](LogisticsApi.md#commissioningsCommissioningIdPickupsPost) | **POST** /commissionings/{commissioning_id}/pickups | 
[**commissioningsCommissioningIdShipmentsGet**](LogisticsApi.md#commissioningsCommissioningIdShipmentsGet) | **GET** /commissionings/{commissioning_id}/shipments | 
[**commissioningsCommissioningIdShipmentsPost**](LogisticsApi.md#commissioningsCommissioningIdShipmentsPost) | **POST** /commissionings/{commissioning_id}/shipments | 
[**commissioningsGet**](LogisticsApi.md#commissioningsGet) | **GET** /commissionings | 
[**commissioningsPost**](LogisticsApi.md#commissioningsPost) | **POST** /commissionings | 
[**pickupsPickupIdDelete**](LogisticsApi.md#pickupsPickupIdDelete) | **DELETE** /pickups/{pickup_id} | 
[**pickupsPickupIdGet**](LogisticsApi.md#pickupsPickupIdGet) | **GET** /pickups/{pickup_id} | 
[**pickupsPickupIdPatch**](LogisticsApi.md#pickupsPickupIdPatch) | **PATCH** /pickups/{pickup_id} | 
[**shipmentsShipmentIdAddressDelete**](LogisticsApi.md#shipmentsShipmentIdAddressDelete) | **DELETE** /shipments/{shipment_id}/address | 
[**shipmentsShipmentIdAddressGet**](LogisticsApi.md#shipmentsShipmentIdAddressGet) | **GET** /shipments/{shipment_id}/address | 
[**shipmentsShipmentIdAddressPatch**](LogisticsApi.md#shipmentsShipmentIdAddressPatch) | **PATCH** /shipments/{shipment_id}/address | 
[**shipmentsShipmentIdAddressPost**](LogisticsApi.md#shipmentsShipmentIdAddressPost) | **POST** /shipments/{shipment_id}/address | 
[**shipmentsShipmentIdDelete**](LogisticsApi.md#shipmentsShipmentIdDelete) | **DELETE** /shipments/{shipment_id} | 
[**shipmentsShipmentIdGet**](LogisticsApi.md#shipmentsShipmentIdGet) | **GET** /shipments/{shipment_id} | 
[**shipmentsShipmentIdPatch**](LogisticsApi.md#shipmentsShipmentIdPatch) | **PATCH** /shipments/{shipment_id} | 

<a name="commissioningsCommissioningIdDelete"></a>
# **commissioningsCommissioningIdDelete**
> commissioningsCommissioningIdDelete(commissioningId)



Removes a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.commissioningsCommissioningIdDelete(commissioningId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissioningId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commissioningsCommissioningIdGet"></a>
# **commissioningsCommissioningIdGet**
> Commissioning commissioningsCommissioningIdGet(commissioningId)



Returns a specific commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.commissioningsCommissioningIdGet(commissioningId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissioningId** | [**String**](.md)|  | 

### Return type

[**Commissioning**](Commissioning.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commissioningsCommissioningIdPatch"></a>
# **commissioningsCommissioningIdPatch**
> Commissioning commissioningsCommissioningIdPatch(body, commissioningId)



Modifies a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.CommissioningsCommissioningIdBody(); // CommissioningsCommissioningIdBody | 
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.commissioningsCommissioningIdPatch(body, commissioningId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CommissioningsCommissioningIdBody**](CommissioningsCommissioningIdBody.md)|  | 
 **commissioningId** | [**String**](.md)|  | 

### Return type

[**Commissioning**](Commissioning.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commissioningsCommissioningIdPickupsGet"></a>
# **commissioningsCommissioningIdPickupsGet**
> [Pickup] commissioningsCommissioningIdPickupsGet(commissioningId, opts)



Get all pickups of a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.commissioningsCommissioningIdPickupsGet(commissioningId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissioningId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Pickup]**](Pickup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commissioningsCommissioningIdPickupsPost"></a>
# **commissioningsCommissioningIdPickupsPost**
> Pickup commissioningsCommissioningIdPickupsPost(body, commissioningId)



Creates a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.CommissioningIdPickupsBody(); // CommissioningIdPickupsBody | 
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.commissioningsCommissioningIdPickupsPost(body, commissioningId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CommissioningIdPickupsBody**](CommissioningIdPickupsBody.md)|  | 
 **commissioningId** | [**String**](.md)|  | 

### Return type

[**Pickup**](Pickup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commissioningsCommissioningIdShipmentsGet"></a>
# **commissioningsCommissioningIdShipmentsGet**
> [Shipment] commissioningsCommissioningIdShipmentsGet(commissioningId, opts)



Get all shipments of a commissioning. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.commissioningsCommissioningIdShipmentsGet(commissioningId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissioningId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Shipment]**](Shipment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commissioningsCommissioningIdShipmentsPost"></a>
# **commissioningsCommissioningIdShipmentsPost**
> InlineResponse2013 commissioningsCommissioningIdShipmentsPost(body, commissioningId)



Creates a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.CommissioningIdShipmentsBody(); // CommissioningIdShipmentsBody | 
let commissioningId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.commissioningsCommissioningIdShipmentsPost(body, commissioningId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CommissioningIdShipmentsBody**](CommissioningIdShipmentsBody.md)|  | 
 **commissioningId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commissioningsGet"></a>
# **commissioningsGet**
> [Commissioning] commissioningsGet(opts)



Get all commissionings. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.commissioningsGet(opts).then((data) => {
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

[**[Commissioning]**](Commissioning.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commissioningsPost"></a>
# **commissioningsPost**
> Commissioning commissioningsPost(body)



Creates a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.CommissioningsBody(); // CommissioningsBody | 

apiInstance.commissioningsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CommissioningsBody**](CommissioningsBody.md)|  | 

### Return type

[**Commissioning**](Commissioning.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pickupsPickupIdDelete"></a>
# **pickupsPickupIdDelete**
> pickupsPickupIdDelete(pickupId)



Removes a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let pickupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.pickupsPickupIdDelete(pickupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickupId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pickupsPickupIdGet"></a>
# **pickupsPickupIdGet**
> Pickup pickupsPickupIdGet(pickupId)



Returns a specific pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let pickupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.pickupsPickupIdGet(pickupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickupId** | [**String**](.md)|  | 

### Return type

[**Pickup**](Pickup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pickupsPickupIdPatch"></a>
# **pickupsPickupIdPatch**
> Pickup pickupsPickupIdPatch(body, pickupId)



Modifies pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.PickupsPickupIdBody(); // PickupsPickupIdBody | 
let pickupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.pickupsPickupIdPatch(body, pickupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickupsPickupIdBody**](PickupsPickupIdBody.md)|  | 
 **pickupId** | [**String**](.md)|  | 

### Return type

[**Pickup**](Pickup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shipmentsShipmentIdAddressDelete"></a>
# **shipmentsShipmentIdAddressDelete**
> shipmentsShipmentIdAddressDelete(shipmentId)



Removes the address from a specific shipment as long as the shipment is in                             a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdAddressDelete(shipmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shipmentsShipmentIdAddressGet"></a>
# **shipmentsShipmentIdAddressGet**
> Address shipmentsShipmentIdAddressGet(shipmentId)



Returns the address for this shipment. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdAddressGet(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shipmentsShipmentIdAddressPatch"></a>
# **shipmentsShipmentIdAddressPatch**
> Address shipmentsShipmentIdAddressPatch(body, shipmentId)



Modifies the address from a specific shipment as long as                           the shipment is still in a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.ShipmentIdAddressBody1(); // ShipmentIdAddressBody1 | 
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdAddressPatch(body, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShipmentIdAddressBody1**](ShipmentIdAddressBody1.md)|  | 
 **shipmentId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shipmentsShipmentIdAddressPost"></a>
# **shipmentsShipmentIdAddressPost**
> Address shipmentsShipmentIdAddressPost(body, shipmentId)



Creates new address. If an address is already present, it will be overwritten.                           Creating an address is only possible as long as the shipment is in                           a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.ShipmentIdAddressBody(); // ShipmentIdAddressBody | 
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdAddressPost(body, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShipmentIdAddressBody**](ShipmentIdAddressBody.md)|  | 
 **shipmentId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shipmentsShipmentIdDelete"></a>
# **shipmentsShipmentIdDelete**
> shipmentsShipmentIdDelete(shipmentId)



Removes a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdDelete(shipmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shipmentsShipmentIdGet"></a>
# **shipmentsShipmentIdGet**
> InlineResponse2013 shipmentsShipmentIdGet(shipmentId)



Returns a specific shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdGet(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shipmentsShipmentIdPatch"></a>
# **shipmentsShipmentIdPatch**
> InlineResponse2013 shipmentsShipmentIdPatch(body, shipmentId)



Modifies a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.LogisticsApi();
let body = new MissionControl.ShipmentsShipmentIdBody(); // ShipmentsShipmentIdBody | 
let shipmentId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.shipmentsShipmentIdPatch(body, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShipmentsShipmentIdBody**](ShipmentsShipmentIdBody.md)|  | 
 **shipmentId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

