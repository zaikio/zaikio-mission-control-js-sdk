# mission_control

Mission Control - JavaScript client for mission_control

## Installation

### For [Node.js](https://nodejs.org/)

```shell
    npm install zaikio/zaikio-mission-control-js-sdk --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MissionControl = require("mission_control");
var defaultClient = MissionControl.ApiClient.instance;

defaultClient.basePath = "https://mc.sandbox.zaikio.com/api/v1";
defaultClient.authentications.bearerAuth = {
  type: "oauth2",
  accessToken: process.env.ACCESS_TOKEN,
};

var api = new MissionControl.BusinessApi();
var estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // {String}

api
  .estimatesEstimateIdGet(estimateId)
  .then((data) => {
    console.log("API called successfully");
    console.log(data);
  })
  .catch((err) => console.error(error));
```

## Available OAuth Scopes

- `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings
- `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models
- `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates
- `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates
- `mission_control.lists.r` [`List`]: Read information of all List objects
- `mission_control.lists.w` [`List`]: Create or update List objects
- `mission_control.orders.r` [`Order`]: Read information of all orders
- `mission_control.orders.w` [`Order`]: Create or update new orders
- `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production
- `mission_control.jobs.w` [`Job`]: Create or update new jobs

## Documentation for API Endpoints

All URIs are relative to *https://mc.zaikio.com/api/v1/*

| Class                             | Method                                                                                                                                                                        | HTTP request                                                                            | Description |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------- |
| _MissionControl.BusinessApi_      | [**estimatesEstimateIdDelete**](docs/BusinessApi.md#estimatesEstimateIdDelete)                                                                                                | **DELETE** /estimates/{estimate_id}                                                     |
| _MissionControl.BusinessApi_      | [**estimatesEstimateIdGet**](docs/BusinessApi.md#estimatesEstimateIdGet)                                                                                                      | **GET** /estimates/{estimate_id}                                                        |
| _MissionControl.BusinessApi_      | [**estimatesEstimateIdPatch**](docs/BusinessApi.md#estimatesEstimateIdPatch)                                                                                                  | **PATCH** /estimates/{estimate_id}                                                      |
| _MissionControl.BusinessApi_      | [**estimatesEstimateIdWorkstepEstimatesGet**](docs/BusinessApi.md#estimatesEstimateIdWorkstepEstimatesGet)                                                                    | **GET** /estimates/{estimate_id}/workstep_estimates                                     |
| _MissionControl.BusinessApi_      | [**estimatesEstimateIdWorkstepEstimatesPost**](docs/BusinessApi.md#estimatesEstimateIdWorkstepEstimatesPost)                                                                  | **POST** /estimates/{estimate_id}/workstep_estimates                                    |
| _MissionControl.BusinessApi_      | [**jobsJobIdEstimatesGet**](docs/BusinessApi.md#jobsJobIdEstimatesGet)                                                                                                        | **GET** /jobs/{job_id}/estimates                                                        |
| _MissionControl.BusinessApi_      | [**jobsJobIdEstimatesPost**](docs/BusinessApi.md#jobsJobIdEstimatesPost)                                                                                                      | **POST** /jobs/{job_id}/estimates                                                       |
| _MissionControl.BusinessApi_      | [**materialEstimatesMaterialEstimateIdDelete**](docs/BusinessApi.md#materialEstimatesMaterialEstimateIdDelete)                                                                | **DELETE** /material_estimates/{material_estimate_id}                                   |
| _MissionControl.BusinessApi_      | [**materialEstimatesMaterialEstimateIdGet**](docs/BusinessApi.md#materialEstimatesMaterialEstimateIdGet)                                                                      | **GET** /material_estimates/{material_estimate_id}                                      |
| _MissionControl.BusinessApi_      | [**materialEstimatesMaterialEstimateIdPatch**](docs/BusinessApi.md#materialEstimatesMaterialEstimateIdPatch)                                                                  | **PATCH** /material_estimates/{material_estimate_id}                                    |
| _MissionControl.BusinessApi_      | [**workstepEstimatesWorkstepEstimateIdDelete**](docs/BusinessApi.md#workstepEstimatesWorkstepEstimateIdDelete)                                                                | **DELETE** /workstep_estimates/{workstep_estimate_id}                                   |
| _MissionControl.BusinessApi_      | [**workstepEstimatesWorkstepEstimateIdGet**](docs/BusinessApi.md#workstepEstimatesWorkstepEstimateIdGet)                                                                      | **GET** /workstep_estimates/{workstep_estimate_id}                                      |
| _MissionControl.BusinessApi_      | [**workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet**](docs/BusinessApi.md#workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet)                                    | **GET** /workstep_estimates/{workstep_estimate_id}/material_estimates                   |
| _MissionControl.BusinessApi_      | [**workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost**](docs/BusinessApi.md#workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost)                                  | **POST** /workstep_estimates/{workstep_estimate_id}/material_estimates                  |
| _MissionControl.BusinessApi_      | [**workstepEstimatesWorkstepEstimateIdPatch**](docs/BusinessApi.md#workstepEstimatesWorkstepEstimateIdPatch)                                                                  | **PATCH** /workstep_estimates/{workstep_estimate_id}                                    |
| _MissionControl.CommercialApi_    | [**orderLineItemsOrderLineItemIdDelete**](docs/CommercialApi.md#orderLineItemsOrderLineItemIdDelete)                                                                          | **DELETE** /order_line_items/{order_line_item_id}                                       |
| _MissionControl.CommercialApi_    | [**orderLineItemsOrderLineItemIdGet**](docs/CommercialApi.md#orderLineItemsOrderLineItemIdGet)                                                                                | **GET** /order_line_items/{order_line_item_id}                                          |
| _MissionControl.CommercialApi_    | [**orderLineItemsOrderLineItemIdPatch**](docs/CommercialApi.md#orderLineItemsOrderLineItemIdPatch)                                                                            | **PATCH** /order_line_items/{order_line_item_id}                                        |
| _MissionControl.CommercialApi_    | [**ordersGet**](docs/CommercialApi.md#ordersGet)                                                                                                                              | **GET** /orders                                                                         |
| _MissionControl.CommercialApi_    | [**ordersOrderIdAddressDelete**](docs/CommercialApi.md#ordersOrderIdAddressDelete)                                                                                            | **DELETE** /orders/{order_id}/address                                                   |
| _MissionControl.CommercialApi_    | [**ordersOrderIdAddressGet**](docs/CommercialApi.md#ordersOrderIdAddressGet)                                                                                                  | **GET** /orders/{order_id}/address                                                      |
| _MissionControl.CommercialApi_    | [**ordersOrderIdAddressPatch**](docs/CommercialApi.md#ordersOrderIdAddressPatch)                                                                                              | **PATCH** /orders/{order_id}/address                                                    |
| _MissionControl.CommercialApi_    | [**ordersOrderIdAddressPost**](docs/CommercialApi.md#ordersOrderIdAddressPost)                                                                                                | **POST** /orders/{order_id}/address                                                     |
| _MissionControl.CommercialApi_    | [**ordersOrderIdDelete**](docs/CommercialApi.md#ordersOrderIdDelete)                                                                                                          | **DELETE** /orders/{order_id}                                                           |
| _MissionControl.CommercialApi_    | [**ordersOrderIdGet**](docs/CommercialApi.md#ordersOrderIdGet)                                                                                                                | **GET** /orders/{order_id}                                                              |
| _MissionControl.CommercialApi_    | [**ordersOrderIdOrderLineItemsGet**](docs/CommercialApi.md#ordersOrderIdOrderLineItemsGet)                                                                                    | **GET** /orders/{order_id}/order_line_items                                             |
| _MissionControl.CommercialApi_    | [**ordersOrderIdOrderLineItemsPost**](docs/CommercialApi.md#ordersOrderIdOrderLineItemsPost)                                                                                  | **POST** /orders/{order_id}/order_line_items                                            |
| _MissionControl.CommercialApi_    | [**ordersOrderIdPatch**](docs/CommercialApi.md#ordersOrderIdPatch)                                                                                                            | **PATCH** /orders/{order_id}                                                            |
| _MissionControl.CommercialApi_    | [**ordersOrderIdPaymentTermsDelete**](docs/CommercialApi.md#ordersOrderIdPaymentTermsDelete)                                                                                  | **DELETE** /orders/{order_id}/payment_terms                                             |
| _MissionControl.CommercialApi_    | [**ordersOrderIdPaymentTermsGet**](docs/CommercialApi.md#ordersOrderIdPaymentTermsGet)                                                                                        | **GET** /orders/{order_id}/payment_terms                                                |
| _MissionControl.CommercialApi_    | [**ordersOrderIdPaymentTermsPatch**](docs/CommercialApi.md#ordersOrderIdPaymentTermsPatch)                                                                                    | **PATCH** /orders/{order_id}/payment_terms                                              |
| _MissionControl.CommercialApi_    | [**ordersOrderIdPaymentTermsPost**](docs/CommercialApi.md#ordersOrderIdPaymentTermsPost)                                                                                      | **POST** /orders/{order_id}/payment_terms                                               |
| _MissionControl.CommercialApi_    | [**ordersPost**](docs/CommercialApi.md#ordersPost)                                                                                                                            | **POST** /orders                                                                        |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdDelete**](docs/LogisticsApi.md#commissioningsCommissioningIdDelete)                                                                           | **DELETE** /commissionings/{commissioning_id}                                           |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdGet**](docs/LogisticsApi.md#commissioningsCommissioningIdGet)                                                                                 | **GET** /commissionings/{commissioning_id}                                              |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdPatch**](docs/LogisticsApi.md#commissioningsCommissioningIdPatch)                                                                             | **PATCH** /commissionings/{commissioning_id}                                            |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdPickupsGet**](docs/LogisticsApi.md#commissioningsCommissioningIdPickupsGet)                                                                   | **GET** /commissionings/{commissioning_id}/pickups                                      |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdPickupsPost**](docs/LogisticsApi.md#commissioningsCommissioningIdPickupsPost)                                                                 | **POST** /commissionings/{commissioning_id}/pickups                                     |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdShipmentsGet**](docs/LogisticsApi.md#commissioningsCommissioningIdShipmentsGet)                                                               | **GET** /commissionings/{commissioning_id}/shipments                                    |
| _MissionControl.LogisticsApi_     | [**commissioningsCommissioningIdShipmentsPost**](docs/LogisticsApi.md#commissioningsCommissioningIdShipmentsPost)                                                             | **POST** /commissionings/{commissioning_id}/shipments                                   |
| _MissionControl.LogisticsApi_     | [**commissioningsGet**](docs/LogisticsApi.md#commissioningsGet)                                                                                                               | **GET** /commissionings                                                                 |
| _MissionControl.LogisticsApi_     | [**commissioningsPost**](docs/LogisticsApi.md#commissioningsPost)                                                                                                             | **POST** /commissionings                                                                |
| _MissionControl.LogisticsApi_     | [**pickupsPickupIdDelete**](docs/LogisticsApi.md#pickupsPickupIdDelete)                                                                                                       | **DELETE** /pickups/{pickup_id}                                                         |
| _MissionControl.LogisticsApi_     | [**pickupsPickupIdGet**](docs/LogisticsApi.md#pickupsPickupIdGet)                                                                                                             | **GET** /pickups/{pickup_id}                                                            |
| _MissionControl.LogisticsApi_     | [**pickupsPickupIdPatch**](docs/LogisticsApi.md#pickupsPickupIdPatch)                                                                                                         | **PATCH** /pickups/{pickup_id}                                                          |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdAddressDelete**](docs/LogisticsApi.md#shipmentsShipmentIdAddressDelete)                                                                                 | **DELETE** /shipments/{shipment_id}/address                                             |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdAddressGet**](docs/LogisticsApi.md#shipmentsShipmentIdAddressGet)                                                                                       | **GET** /shipments/{shipment_id}/address                                                |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdAddressPatch**](docs/LogisticsApi.md#shipmentsShipmentIdAddressPatch)                                                                                   | **PATCH** /shipments/{shipment_id}/address                                              |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdAddressPost**](docs/LogisticsApi.md#shipmentsShipmentIdAddressPost)                                                                                     | **POST** /shipments/{shipment_id}/address                                               |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdDelete**](docs/LogisticsApi.md#shipmentsShipmentIdDelete)                                                                                               | **DELETE** /shipments/{shipment_id}                                                     |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdGet**](docs/LogisticsApi.md#shipmentsShipmentIdGet)                                                                                                     | **GET** /shipments/{shipment_id}                                                        |
| _MissionControl.LogisticsApi_     | [**shipmentsShipmentIdPatch**](docs/LogisticsApi.md#shipmentsShipmentIdPatch)                                                                                                 | **PATCH** /shipments/{shipment_id}                                                      |
| _MissionControl.ProductionApi_    | [**batchesBatchIdDelete**](docs/ProductionApi.md#batchesBatchIdDelete)                                                                                                        | **DELETE** /batches/{batch_id}                                                          |
| _MissionControl.ProductionApi_    | [**batchesBatchIdGet**](docs/ProductionApi.md#batchesBatchIdGet)                                                                                                              | **GET** /batches/{batch_id}                                                             |
| _MissionControl.ProductionApi_    | [**batchesBatchIdPatch**](docs/ProductionApi.md#batchesBatchIdPatch)                                                                                                          | **PATCH** /batches/{batch_id}                                                           |
| _MissionControl.ProductionApi_    | [**batchesGet**](docs/ProductionApi.md#batchesGet)                                                                                                                            | **GET** /batches                                                                        |
| _MissionControl.ProductionApi_    | [**batchesPost**](docs/ProductionApi.md#batchesPost)                                                                                                                          | **POST** /batches                                                                       |
| _MissionControl.ProductionApi_    | [**executionsExecutionIdDelete**](docs/ProductionApi.md#executionsExecutionIdDelete)                                                                                          | **DELETE** /executions/{execution_id}                                                   |
| _MissionControl.ProductionApi_    | [**executionsExecutionIdGet**](docs/ProductionApi.md#executionsExecutionIdGet)                                                                                                | **GET** /executions/{execution_id}                                                      |
| _MissionControl.ProductionApi_    | [**executionsExecutionIdPatch**](docs/ProductionApi.md#executionsExecutionIdPatch)                                                                                            | **PATCH** /executions/{execution_id}                                                    |
| _MissionControl.ProductionApi_    | [**executionsGet**](docs/ProductionApi.md#executionsGet)                                                                                                                      | **GET** /executions                                                                     |
| _MissionControl.ProductionApi_    | [**executionsPost**](docs/ProductionApi.md#executionsPost)                                                                                                                    | **POST** /executions                                                                    |
| _MissionControl.ProductionApi_    | [**imposingsImposingIdDelete**](docs/ProductionApi.md#imposingsImposingIdDelete)                                                                                              | **DELETE** /imposings/{imposing_id}                                                     |
| _MissionControl.ProductionApi_    | [**imposingsImposingIdGet**](docs/ProductionApi.md#imposingsImposingIdGet)                                                                                                    | **GET** /imposings/{imposing_id}                                                        |
| _MissionControl.ProductionApi_    | [**imposingsImposingIdPatch**](docs/ProductionApi.md#imposingsImposingIdPatch)                                                                                                | **PATCH** /imposings/{imposing_id}                                                      |
| _MissionControl.ProductionApi_    | [**imposingsImposingIdSignaturesGet**](docs/ProductionApi.md#imposingsImposingIdSignaturesGet)                                                                                | **GET** /imposings/{imposing_id}/signatures                                             |
| _MissionControl.ProductionApi_    | [**imposingsImposingIdSignaturesPost**](docs/ProductionApi.md#imposingsImposingIdSignaturesPost)                                                                              | **POST** /imposings/{imposing_id}/signatures                                            |
| _MissionControl.ProductionApi_    | [**intermediateProductsIntermediateProductIdDelete**](docs/ProductionApi.md#intermediateProductsIntermediateProductIdDelete)                                                  | **DELETE** /intermediate_products/{intermediate_product_id}                             |
| _MissionControl.ProductionApi_    | [**intermediateProductsIntermediateProductIdGet**](docs/ProductionApi.md#intermediateProductsIntermediateProductIdGet)                                                        | **GET** /intermediate_products/{intermediate_product_id}                                |
| _MissionControl.ProductionApi_    | [**intermediateProductsIntermediateProductIdPatch**](docs/ProductionApi.md#intermediateProductsIntermediateProductIdPatch)                                                    | **PATCH** /intermediate_products/{intermediate_product_id}                              |
| _MissionControl.ProductionApi_    | [**jobsJobIdFinishedProductDelete**](docs/ProductionApi.md#jobsJobIdFinishedProductDelete)                                                                                    | **DELETE** /jobs/{job_id}/finished_product                                              |
| _MissionControl.ProductionApi_    | [**jobsJobIdFinishedProductGet**](docs/ProductionApi.md#jobsJobIdFinishedProductGet)                                                                                          | **GET** /jobs/{job_id}/finished_product                                                 |
| _MissionControl.ProductionApi_    | [**jobsJobIdFinishedProductPatch**](docs/ProductionApi.md#jobsJobIdFinishedProductPatch)                                                                                      | **PATCH** /jobs/{job_id}/finished_product                                               |
| _MissionControl.ProductionApi_    | [**jobsJobIdFinishedProductPost**](docs/ProductionApi.md#jobsJobIdFinishedProductPost)                                                                                        | **POST** /jobs/{job_id}/finished_product                                                |
| _MissionControl.ProductionApi_    | [**jobsJobIdIntermediateProductsGet**](docs/ProductionApi.md#jobsJobIdIntermediateProductsGet)                                                                                | **GET** /jobs/{job_id}/intermediate_products                                            |
| _MissionControl.ProductionApi_    | [**jobsJobIdIntermediateProductsPost**](docs/ProductionApi.md#jobsJobIdIntermediateProductsPost)                                                                              | **POST** /jobs/{job_id}/intermediate_products                                           |
| _MissionControl.ProductionApi_    | [**jobsJobIdMilestonesGet**](docs/ProductionApi.md#jobsJobIdMilestonesGet)                                                                                                    | **GET** /jobs/{job_id}/milestones                                                       |
| _MissionControl.ProductionApi_    | [**jobsJobIdMilestonesPost**](docs/ProductionApi.md#jobsJobIdMilestonesPost)                                                                                                  | **POST** /jobs/{job_id}/milestones                                                      |
| _MissionControl.ProductionApi_    | [**jobsJobIdProductionStrategiesGet**](docs/ProductionApi.md#jobsJobIdProductionStrategiesGet)                                                                                | **GET** /jobs/{job_id}/production_strategies                                            |
| _MissionControl.ProductionApi_    | [**jobsJobIdProductionStrategiesPost**](docs/ProductionApi.md#jobsJobIdProductionStrategiesPost)                                                                              | **POST** /jobs/{job_id}/production_strategies                                           |
| _MissionControl.ProductionApi_    | [**jobsJobIdTodosGet**](docs/ProductionApi.md#jobsJobIdTodosGet)                                                                                                              | **GET** /jobs/{job_id}/todos                                                            |
| _MissionControl.ProductionApi_    | [**jobsJobIdTodosPost**](docs/ProductionApi.md#jobsJobIdTodosPost)                                                                                                            | **POST** /jobs/{job_id}/todos                                                           |
| _MissionControl.ProductionApi_    | [**listsGet**](docs/ProductionApi.md#listsGet)                                                                                                                                | **GET** /lists                                                                          |
| _MissionControl.ProductionApi_    | [**listsListIdDelete**](docs/ProductionApi.md#listsListIdDelete)                                                                                                              | **DELETE** /lists/{list_id}                                                             |
| _MissionControl.ProductionApi_    | [**listsListIdGet**](docs/ProductionApi.md#listsListIdGet)                                                                                                                    | **GET** /lists/{list_id}                                                                |
| _MissionControl.ProductionApi_    | [**listsListIdPatch**](docs/ProductionApi.md#listsListIdPatch)                                                                                                                | **PATCH** /lists/{list_id}                                                              |
| _MissionControl.ProductionApi_    | [**listsListIdPredicatesGet**](docs/ProductionApi.md#listsListIdPredicatesGet)                                                                                                | **GET** /lists/{list_id}/predicates                                                     |
| _MissionControl.ProductionApi_    | [**listsListIdPredicatesPost**](docs/ProductionApi.md#listsListIdPredicatesPost)                                                                                              | **POST** /lists/{list_id}/predicates                                                    |
| _MissionControl.ProductionApi_    | [**listsPost**](docs/ProductionApi.md#listsPost)                                                                                                                              | **POST** /lists                                                                         |
| _MissionControl.ProductionApi_    | [**milestonesMilestoneIdDelete**](docs/ProductionApi.md#milestonesMilestoneIdDelete)                                                                                          | **DELETE** /milestones/{milestone_id}                                                   |
| _MissionControl.ProductionApi_    | [**milestonesMilestoneIdGet**](docs/ProductionApi.md#milestonesMilestoneIdGet)                                                                                                | **GET** /milestones/{milestone_id}                                                      |
| _MissionControl.ProductionApi_    | [**milestonesMilestoneIdPatch**](docs/ProductionApi.md#milestonesMilestoneIdPatch)                                                                                            | **PATCH** /milestones/{milestone_id}                                                    |
| _MissionControl.ProductionApi_    | [**predicatesPredicateIdDelete**](docs/ProductionApi.md#predicatesPredicateIdDelete)                                                                                          | **DELETE** /predicates/{predicate_id}                                                   |
| _MissionControl.ProductionApi_    | [**predicatesPredicateIdGet**](docs/ProductionApi.md#predicatesPredicateIdGet)                                                                                                | **GET** /predicates/{predicate_id}                                                      |
| _MissionControl.ProductionApi_    | [**predicatesPredicateIdPatch**](docs/ProductionApi.md#predicatesPredicateIdPatch)                                                                                            | **PATCH** /predicates/{predicate_id}                                                    |
| _MissionControl.ProductionApi_    | [**predicatesPredicateIdRulesGet**](docs/ProductionApi.md#predicatesPredicateIdRulesGet)                                                                                      | **GET** /predicates/{predicate_id}/rules                                                |
| _MissionControl.ProductionApi_    | [**predicatesPredicateIdRulesPost**](docs/ProductionApi.md#predicatesPredicateIdRulesPost)                                                                                    | **POST** /predicates/{predicate_id}/rules                                               |
| _MissionControl.ProductionApi_    | [**productionPathsPost**](docs/ProductionApi.md#productionPathsPost)                                                                                                          | **POST** /production_paths                                                              |
| _MissionControl.ProductionApi_    | [**productionStrategiesProductionStrategyIdDelete**](docs/ProductionApi.md#productionStrategiesProductionStrategyIdDelete)                                                    | **DELETE** /production_strategies/{production_strategy_id}                              |
| _MissionControl.ProductionApi_    | [**productionStrategiesProductionStrategyIdGet**](docs/ProductionApi.md#productionStrategiesProductionStrategyIdGet)                                                          | **GET** /production_strategies/{production_strategy_id}                                 |
| _MissionControl.ProductionApi_    | [**productionStrategiesProductionStrategyIdImposingsGet**](docs/ProductionApi.md#productionStrategiesProductionStrategyIdImposingsGet)                                        | **GET** /production_strategies/{production_strategy_id}/imposings                       |
| _MissionControl.ProductionApi_    | [**productionStrategiesProductionStrategyIdImposingsPost**](docs/ProductionApi.md#productionStrategiesProductionStrategyIdImposingsPost)                                      | **POST** /production_strategies/{production_strategy_id}/imposings                      |
| _MissionControl.ProductionApi_    | [**productionStrategiesProductionStrategyIdPatch**](docs/ProductionApi.md#productionStrategiesProductionStrategyIdPatch)                                                      | **PATCH** /production_strategies/{production_strategy_id}                               |
| _MissionControl.ProductionApi_    | [**rulesRuleIdDelete**](docs/ProductionApi.md#rulesRuleIdDelete)                                                                                                              | **DELETE** /rules/{rule_id}                                                             |
| _MissionControl.ProductionApi_    | [**rulesRuleIdGet**](docs/ProductionApi.md#rulesRuleIdGet)                                                                                                                    | **GET** /rules/{rule_id}                                                                |
| _MissionControl.ProductionApi_    | [**rulesRuleIdPatch**](docs/ProductionApi.md#rulesRuleIdPatch)                                                                                                                | **PATCH** /rules/{rule_id}                                                              |
| _MissionControl.ProductionApi_    | [**signaturesSignatureIdDelete**](docs/ProductionApi.md#signaturesSignatureIdDelete)                                                                                          | **DELETE** /signatures/{signature_id}                                                   |
| _MissionControl.ProductionApi_    | [**signaturesSignatureIdGet**](docs/ProductionApi.md#signaturesSignatureIdGet)                                                                                                | **GET** /signatures/{signature_id}                                                      |
| _MissionControl.ProductionApi_    | [**signaturesSignatureIdPatch**](docs/ProductionApi.md#signaturesSignatureIdPatch)                                                                                            | **PATCH** /signatures/{signature_id}                                                    |
| _MissionControl.ProductionApi_    | [**todosTodoIdDelete**](docs/ProductionApi.md#todosTodoIdDelete)                                                                                                              | **DELETE** /todos/{todo_id}                                                             |
| _MissionControl.ProductionApi_    | [**todosTodoIdGet**](docs/ProductionApi.md#todosTodoIdGet)                                                                                                                    | **GET** /todos/{todo_id}                                                                |
| _MissionControl.ProductionApi_    | [**todosTodoIdPatch**](docs/ProductionApi.md#todosTodoIdPatch)                                                                                                                | **PATCH** /todos/{todo_id}                                                              |
| _MissionControl.ProductionApi_    | [**workstepGroupsGet**](docs/ProductionApi.md#workstepGroupsGet)                                                                                                              | **GET** /workstep_groups                                                                |
| _MissionControl.ProductionApi_    | [**workstepGroupsPost**](docs/ProductionApi.md#workstepGroupsPost)                                                                                                            | **POST** /workstep_groups                                                               |
| _MissionControl.ProductionApi_    | [**workstepGroupsWorkstepGroupIdDelete**](docs/ProductionApi.md#workstepGroupsWorkstepGroupIdDelete)                                                                          | **DELETE** /workstep_groups/{workstep_group_id}                                         |
| _MissionControl.ProductionApi_    | [**workstepGroupsWorkstepGroupIdGet**](docs/ProductionApi.md#workstepGroupsWorkstepGroupIdGet)                                                                                | **GET** /workstep_groups/{workstep_group_id}                                            |
| _MissionControl.ProductionApi_    | [**workstepGroupsWorkstepGroupIdPatch**](docs/ProductionApi.md#workstepGroupsWorkstepGroupIdPatch)                                                                            | **PATCH** /workstep_groups/{workstep_group_id}                                          |
| _MissionControl.ProductionApi_    | [**workstepsGet**](docs/ProductionApi.md#workstepsGet)                                                                                                                        | **GET** /worksteps                                                                      |
| _MissionControl.ProductionApi_    | [**workstepsPost**](docs/ProductionApi.md#workstepsPost)                                                                                                                      | **POST** /worksteps                                                                     |
| _MissionControl.ProductionApi_    | [**workstepsWorkstepIdDelete**](docs/ProductionApi.md#workstepsWorkstepIdDelete)                                                                                              | **DELETE** /worksteps/{workstep_id}                                                     |
| _MissionControl.ProductionApi_    | [**workstepsWorkstepIdGet**](docs/ProductionApi.md#workstepsWorkstepIdGet)                                                                                                    | **GET** /worksteps/{workstep_id}                                                        |
| _MissionControl.ProductionApi_    | [**workstepsWorkstepIdPatch**](docs/ProductionApi.md#workstepsWorkstepIdPatch)                                                                                                | **PATCH** /worksteps/{workstep_id}                                                      |
| _MissionControl.ProdutionApi_     | [**listsListIdMembersGet**](docs/ProdutionApi.md#listsListIdMembersGet)                                                                                                       | **GET** /lists/{list_id}/members                                                        |
| _MissionControl.SpecificationApi_ | [**fileActionsFileActionIdDelete**](docs/SpecificationApi.md#fileActionsFileActionIdDelete)                                                                                   | **DELETE** /file_actions/{file_action_id}                                               |
| _MissionControl.SpecificationApi_ | [**fileActionsFileActionIdFileRemarksGet**](docs/SpecificationApi.md#fileActionsFileActionIdFileRemarksGet)                                                                   | **GET** /file_actions/{file_action_id}/file_remarks                                     |
| _MissionControl.SpecificationApi_ | [**fileActionsFileActionIdFileRemarksPost**](docs/SpecificationApi.md#fileActionsFileActionIdFileRemarksPost)                                                                 | **POST** /file_actions/{file_action_id}/file_remarks                                    |
| _MissionControl.SpecificationApi_ | [**fileActionsFileActionIdGet**](docs/SpecificationApi.md#fileActionsFileActionIdGet)                                                                                         | **GET** /file_actions/{file_action_id}                                                  |
| _MissionControl.SpecificationApi_ | [**fileActionsFileActionIdPatch**](docs/SpecificationApi.md#fileActionsFileActionIdPatch)                                                                                     | **PATCH** /file_actions/{file_action_id}                                                |
| _MissionControl.SpecificationApi_ | [**fileReferencesFileReferenceIdDelete**](docs/SpecificationApi.md#fileReferencesFileReferenceIdDelete)                                                                       | **DELETE** /file_references/{file_reference_id}                                         |
| _MissionControl.SpecificationApi_ | [**fileReferencesFileReferenceIdFileActionsGet**](docs/SpecificationApi.md#fileReferencesFileReferenceIdFileActionsGet)                                                       | **GET** /file_references/{file_reference_id}/file_actions                               |
| _MissionControl.SpecificationApi_ | [**fileReferencesFileReferenceIdFileActionsPost**](docs/SpecificationApi.md#fileReferencesFileReferenceIdFileActionsPost)                                                     | **POST** /file_references/{file_reference_id}/file_actions                              |
| _MissionControl.SpecificationApi_ | [**fileReferencesFileReferenceIdGet**](docs/SpecificationApi.md#fileReferencesFileReferenceIdGet)                                                                             | **GET** /file_references/{file_reference_id}                                            |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdDelete**](docs/SpecificationApi.md#finishingsFinishingIdDelete)                                                                                       | **DELETE** /finishings/{finishing_id}                                                   |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFileReferencesGet**](docs/SpecificationApi.md#finishingsFinishingIdFileReferencesGet)                                                                 | **GET** /finishings/{finishing_id}/file_references                                      |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFileReferencesPost**](docs/SpecificationApi.md#finishingsFinishingIdFileReferencesPost)                                                               | **POST** /finishings/{finishing_id}/file_references                                     |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete**](docs/SpecificationApi.md#finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete) | **DELETE** /finishings/{finishing_id}/finishing_applications/{finishing_application_id} |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet**](docs/SpecificationApi.md#finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet)       | **GET** /finishings/{finishing_id}/finishing_applications/{finishing_application_id}    |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFinishingApplicationsGet**](docs/SpecificationApi.md#finishingsFinishingIdFinishingApplicationsGet)                                                   | **GET** /finishings/{finishing_id}/finishing_applications                               |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdFinishingApplicationsPost**](docs/SpecificationApi.md#finishingsFinishingIdFinishingApplicationsPost)                                                 | **POST** /finishings/{finishing_id}/finishing_applications                              |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdGet**](docs/SpecificationApi.md#finishingsFinishingIdGet)                                                                                             | **GET** /finishings/{finishing_id}                                                      |
| _MissionControl.SpecificationApi_ | [**finishingsFinishingIdPatch**](docs/SpecificationApi.md#finishingsFinishingIdPatch)                                                                                         | **PATCH** /finishings/{finishing_id}                                                    |
| _MissionControl.SpecificationApi_ | [**jobsGet**](docs/SpecificationApi.md#jobsGet)                                                                                                                               | **GET** /jobs                                                                           |
| _MissionControl.SpecificationApi_ | [**jobsJobIdDelete**](docs/SpecificationApi.md#jobsJobIdDelete)                                                                                                               | **DELETE** /jobs/{job_id}                                                               |
| _MissionControl.SpecificationApi_ | [**jobsJobIdGet**](docs/SpecificationApi.md#jobsJobIdGet)                                                                                                                     | **GET** /jobs/{job_id}                                                                  |
| _MissionControl.SpecificationApi_ | [**jobsJobIdPackagingsGet**](docs/SpecificationApi.md#jobsJobIdPackagingsGet)                                                                                                 | **GET** /jobs/{job_id}/packagings                                                       |
| _MissionControl.SpecificationApi_ | [**jobsJobIdPackagingsPost**](docs/SpecificationApi.md#jobsJobIdPackagingsPost)                                                                                               | **POST** /jobs/{job_id}/packagings                                                      |
| _MissionControl.SpecificationApi_ | [**jobsJobIdPartsGet**](docs/SpecificationApi.md#jobsJobIdPartsGet)                                                                                                           | **GET** /jobs/{job_id}/parts                                                            |
| _MissionControl.SpecificationApi_ | [**jobsJobIdPartsPost**](docs/SpecificationApi.md#jobsJobIdPartsPost)                                                                                                         | **POST** /jobs/{job_id}/parts                                                           |
| _MissionControl.SpecificationApi_ | [**jobsJobIdPatch**](docs/SpecificationApi.md#jobsJobIdPatch)                                                                                                                 | **PATCH** /jobs/{job_id}                                                                |
| _MissionControl.SpecificationApi_ | [**jobsPost**](docs/SpecificationApi.md#jobsPost)                                                                                                                             | **POST** /jobs                                                                          |
| _MissionControl.SpecificationApi_ | [**packagingsPackagingIdDelete**](docs/SpecificationApi.md#packagingsPackagingIdDelete)                                                                                       | **DELETE** /packagings/{packaging_id}                                                   |
| _MissionControl.SpecificationApi_ | [**packagingsPackagingIdGet**](docs/SpecificationApi.md#packagingsPackagingIdGet)                                                                                             | **GET** /packagings/{packaging_id}                                                      |
| _MissionControl.SpecificationApi_ | [**packagingsPackagingIdPatch**](docs/SpecificationApi.md#packagingsPackagingIdPatch)                                                                                         | **PATCH** /packagings/{packaging_id}                                                    |
| _MissionControl.SpecificationApi_ | [**partsPartIdColorsColorIdDelete**](docs/SpecificationApi.md#partsPartIdColorsColorIdDelete)                                                                                 | **DELETE** /parts/{part_id}/colors/{color_id}                                           |
| _MissionControl.SpecificationApi_ | [**partsPartIdColorsColorIdGet**](docs/SpecificationApi.md#partsPartIdColorsColorIdGet)                                                                                       | **GET** /parts/{part_id}/colors/{color_id}                                              |
| _MissionControl.SpecificationApi_ | [**partsPartIdColorsColorIdPatch**](docs/SpecificationApi.md#partsPartIdColorsColorIdPatch)                                                                                   | **PATCH** /parts/{part_id}/colors/{color_id}                                            |
| _MissionControl.SpecificationApi_ | [**partsPartIdColorsGet**](docs/SpecificationApi.md#partsPartIdColorsGet)                                                                                                     | **GET** /parts/{part_id}/colors                                                         |
| _MissionControl.SpecificationApi_ | [**partsPartIdColorsPost**](docs/SpecificationApi.md#partsPartIdColorsPost)                                                                                                   | **POST** /parts/{part_id}/colors                                                        |
| _MissionControl.SpecificationApi_ | [**partsPartIdDelete**](docs/SpecificationApi.md#partsPartIdDelete)                                                                                                           | **DELETE** /parts/{part_id}                                                             |
| _MissionControl.SpecificationApi_ | [**partsPartIdDesiredSubstrateDelete**](docs/SpecificationApi.md#partsPartIdDesiredSubstrateDelete)                                                                           | **DELETE** /parts/{part_id}/desired_substrate                                           |
| _MissionControl.SpecificationApi_ | [**partsPartIdDesiredSubstrateGet**](docs/SpecificationApi.md#partsPartIdDesiredSubstrateGet)                                                                                 | **GET** /parts/{part_id}/desired_substrate                                              |
| _MissionControl.SpecificationApi_ | [**partsPartIdDesiredSubstratePatch**](docs/SpecificationApi.md#partsPartIdDesiredSubstratePatch)                                                                             | **PATCH** /parts/{part_id}/desired_substrate                                            |
| _MissionControl.SpecificationApi_ | [**partsPartIdDesiredSubstratePost**](docs/SpecificationApi.md#partsPartIdDesiredSubstratePost)                                                                               | **POST** /parts/{part_id}/desired_substrate                                             |
| _MissionControl.SpecificationApi_ | [**partsPartIdFileReferencesGet**](docs/SpecificationApi.md#partsPartIdFileReferencesGet)                                                                                     | **GET** /parts/{part_id}/file_references                                                |
| _MissionControl.SpecificationApi_ | [**partsPartIdFileReferencesPost**](docs/SpecificationApi.md#partsPartIdFileReferencesPost)                                                                                   | **POST** /parts/{part_id}/file_references                                               |
| _MissionControl.SpecificationApi_ | [**partsPartIdFinishingsGet**](docs/SpecificationApi.md#partsPartIdFinishingsGet)                                                                                             | **GET** /parts/{part_id}/finishings                                                     |
| _MissionControl.SpecificationApi_ | [**partsPartIdFinishingsPost**](docs/SpecificationApi.md#partsPartIdFinishingsPost)                                                                                           | **POST** /parts/{part_id}/finishings                                                    |
| _MissionControl.SpecificationApi_ | [**partsPartIdGet**](docs/SpecificationApi.md#partsPartIdGet)                                                                                                                 | **GET** /parts/{part_id}                                                                |
| _MissionControl.SpecificationApi_ | [**partsPartIdPatch**](docs/SpecificationApi.md#partsPartIdPatch)                                                                                                             | **PATCH** /parts/{part_id}                                                              |

## Documentation for Models

- [MissionControl.Address](docs/Address.md)
- [MissionControl.AddressCreate](docs/AddressCreate.md)
- [MissionControl.AddressUpdate](docs/AddressUpdate.md)
- [MissionControl.AllOfcommissioningIdShipmentsBodyShipment](docs/AllOfcommissioningIdShipmentsBodyShipment.md)
- [MissionControl.AllOfjobIdProductionStrategiesBodyProductionStrategy](docs/AllOfjobIdProductionStrategiesBodyProductionStrategy.md)
- [MissionControl.AllOfjobsBodyJob](docs/AllOfjobsBodyJob.md)
- [MissionControl.AllOfjobsJobIdBodyJob](docs/AllOfjobsJobIdBodyJob.md)
- [MissionControl.AllOflistsBodyList](docs/AllOflistsBodyList.md)
- [MissionControl.AllOflistsListIdBodyList](docs/AllOflistsListIdBodyList.md)
- [MissionControl.AllOfordersBodyOrder](docs/AllOfordersBodyOrder.md)
- [MissionControl.AllOfordersOrderIdBodyOrder](docs/AllOfordersOrderIdBodyOrder.md)
- [MissionControl.AllOfproductionStrategiesProductionStrategyIdBodyProductionStrategy](docs/AllOfproductionStrategiesProductionStrategyIdBodyProductionStrategy.md)
- [MissionControl.AllOfshipmentsShipmentIdBodyShipment](docs/AllOfshipmentsShipmentIdBodyShipment.md)
- [MissionControl.ArrayContains](docs/ArrayContains.md)
- [MissionControl.ArrayContainsCreate](docs/ArrayContainsCreate.md)
- [MissionControl.ArrayContainsUpdate](docs/ArrayContainsUpdate.md)
- [MissionControl.BaseEquals](docs/BaseEquals.md)
- [MissionControl.BaseEqualsCreate](docs/BaseEqualsCreate.md)
- [MissionControl.BaseEqualsUpdate](docs/BaseEqualsUpdate.md)
- [MissionControl.BaseGreaterThan](docs/BaseGreaterThan.md)
- [MissionControl.BaseGreaterThanCreate](docs/BaseGreaterThanCreate.md)
- [MissionControl.BaseGreaterThanUpdate](docs/BaseGreaterThanUpdate.md)
- [MissionControl.BaseLessThan](docs/BaseLessThan.md)
- [MissionControl.BaseLessThanCreate](docs/BaseLessThanCreate.md)
- [MissionControl.BaseLessThanUpdate](docs/BaseLessThanUpdate.md)
- [MissionControl.Batch](docs/Batch.md)
- [MissionControl.BatchCreate](docs/BatchCreate.md)
- [MissionControl.BatchMember](docs/BatchMember.md)
- [MissionControl.BatchMemberCreate](docs/BatchMemberCreate.md)
- [MissionControl.BatchMemberUpdate](docs/BatchMemberUpdate.md)
- [MissionControl.BatchSignature](docs/BatchSignature.md)
- [MissionControl.BatchSignatureCreate](docs/BatchSignatureCreate.md)
- [MissionControl.BatchSignatureUpdate](docs/BatchSignatureUpdate.md)
- [MissionControl.BatchUpdate](docs/BatchUpdate.md)
- [MissionControl.BatchesBatchIdBody](docs/BatchesBatchIdBody.md)
- [MissionControl.BatchesBody](docs/BatchesBody.md)
- [MissionControl.Box](docs/Box.md)
- [MissionControl.BoxCreate](docs/BoxCreate.md)
- [MissionControl.BoxUpdate](docs/BoxUpdate.md)
- [MissionControl.Color](docs/Color.md)
- [MissionControl.ColorCreate](docs/ColorCreate.md)
- [MissionControl.ColorUpdate](docs/ColorUpdate.md)
- [MissionControl.ColorsColorIdBody](docs/ColorsColorIdBody.md)
- [MissionControl.CombBinding](docs/CombBinding.md)
- [MissionControl.CombBindingCreate](docs/CombBindingCreate.md)
- [MissionControl.CombBindingUpdate](docs/CombBindingUpdate.md)
- [MissionControl.Commissioning](docs/Commissioning.md)
- [MissionControl.CommissioningCreate](docs/CommissioningCreate.md)
- [MissionControl.CommissioningIdPickupsBody](docs/CommissioningIdPickupsBody.md)
- [MissionControl.CommissioningIdShipmentsBody](docs/CommissioningIdShipmentsBody.md)
- [MissionControl.CommissioningUpdate](docs/CommissioningUpdate.md)
- [MissionControl.CommissioningsBody](docs/CommissioningsBody.md)
- [MissionControl.CommissioningsCommissioningIdBody](docs/CommissioningsCommissioningIdBody.md)
- [MissionControl.Contact](docs/Contact.md)
- [MissionControl.ContactCreate](docs/ContactCreate.md)
- [MissionControl.ContactUpdate](docs/ContactUpdate.md)
- [MissionControl.Customer](docs/Customer.md)
- [MissionControl.CustomerCreate](docs/CustomerCreate.md)
- [MissionControl.CustomerUpdate](docs/CustomerUpdate.md)
- [MissionControl.DateEquals](docs/DateEquals.md)
- [MissionControl.DateEqualsCreate](docs/DateEqualsCreate.md)
- [MissionControl.DateEqualsUpdate](docs/DateEqualsUpdate.md)
- [MissionControl.DateGreaterThan](docs/DateGreaterThan.md)
- [MissionControl.DateGreaterThanCreate](docs/DateGreaterThanCreate.md)
- [MissionControl.DateGreaterThanUpdate](docs/DateGreaterThanUpdate.md)
- [MissionControl.DateIsFuture](docs/DateIsFuture.md)
- [MissionControl.DateIsFutureCreate](docs/DateIsFutureCreate.md)
- [MissionControl.DateIsFutureUpdate](docs/DateIsFutureUpdate.md)
- [MissionControl.DateIsPast](docs/DateIsPast.md)
- [MissionControl.DateIsPastCreate](docs/DateIsPastCreate.md)
- [MissionControl.DateIsPastUpdate](docs/DateIsPastUpdate.md)
- [MissionControl.DateIsToday](docs/DateIsToday.md)
- [MissionControl.DateIsTodayCreate](docs/DateIsTodayCreate.md)
- [MissionControl.DateIsTodayUpdate](docs/DateIsTodayUpdate.md)
- [MissionControl.DateLessThan](docs/DateLessThan.md)
- [MissionControl.DateLessThanCreate](docs/DateLessThanCreate.md)
- [MissionControl.DateLessThanUpdate](docs/DateLessThanUpdate.md)
- [MissionControl.DesiredSubstrate](docs/DesiredSubstrate.md)
- [MissionControl.DesiredSubstrateCreate](docs/DesiredSubstrateCreate.md)
- [MissionControl.DesiredSubstrateUpdate](docs/DesiredSubstrateUpdate.md)
- [MissionControl.Embossing](docs/Embossing.md)
- [MissionControl.EmbossingCreate](docs/EmbossingCreate.md)
- [MissionControl.EmbossingUpdate](docs/EmbossingUpdate.md)
- [MissionControl.Equals](docs/Equals.md)
- [MissionControl.EqualsCreate](docs/EqualsCreate.md)
- [MissionControl.EqualsUpdate](docs/EqualsUpdate.md)
- [MissionControl.Estimate](docs/Estimate.md)
- [MissionControl.EstimateCreate](docs/EstimateCreate.md)
- [MissionControl.EstimateIdWorkstepEstimatesBody](docs/EstimateIdWorkstepEstimatesBody.md)
- [MissionControl.EstimateUpdate](docs/EstimateUpdate.md)
- [MissionControl.EstimatesEstimateIdBody](docs/EstimatesEstimateIdBody.md)
- [MissionControl.Execution](docs/Execution.md)
- [MissionControl.ExecutionCreate](docs/ExecutionCreate.md)
- [MissionControl.ExecutionUpdate](docs/ExecutionUpdate.md)
- [MissionControl.ExecutionsBody](docs/ExecutionsBody.md)
- [MissionControl.ExecutionsExecutionIdBody](docs/ExecutionsExecutionIdBody.md)
- [MissionControl.ExpandedOrder](docs/ExpandedOrder.md)
- [MissionControl.ExpandedOrderCreate](docs/ExpandedOrderCreate.md)
- [MissionControl.ExpandedOrderUpdate](docs/ExpandedOrderUpdate.md)
- [MissionControl.ExpandedProductionStrategy](docs/ExpandedProductionStrategy.md)
- [MissionControl.ExpandedProductionStrategyCreate](docs/ExpandedProductionStrategyCreate.md)
- [MissionControl.ExpandedProductionStrategyUpdate](docs/ExpandedProductionStrategyUpdate.md)
- [MissionControl.ExtendedJob](docs/ExtendedJob.md)
- [MissionControl.ExtendedJobCreate](docs/ExtendedJobCreate.md)
- [MissionControl.ExtendedJobUpdate](docs/ExtendedJobUpdate.md)
- [MissionControl.ExtendedPart](docs/ExtendedPart.md)
- [MissionControl.ExtendedPartCreate](docs/ExtendedPartCreate.md)
- [MissionControl.ExtendedPartUpdate](docs/ExtendedPartUpdate.md)
- [MissionControl.ExtendedShipment](docs/ExtendedShipment.md)
- [MissionControl.ExtendedShipmentCreate](docs/ExtendedShipmentCreate.md)
- [MissionControl.ExtendedShipmentUpdate](docs/ExtendedShipmentUpdate.md)
- [MissionControl.FileAction](docs/FileAction.md)
- [MissionControl.FileActionCreate](docs/FileActionCreate.md)
- [MissionControl.FileActionIdFileRemarksBody](docs/FileActionIdFileRemarksBody.md)
- [MissionControl.FileActionUpdate](docs/FileActionUpdate.md)
- [MissionControl.FileActionsFileActionIdBody](docs/FileActionsFileActionIdBody.md)
- [MissionControl.FileReference](docs/FileReference.md)
- [MissionControl.FileReferenceCreate](docs/FileReferenceCreate.md)
- [MissionControl.FileReferenceIdFileActionsBody](docs/FileReferenceIdFileActionsBody.md)
- [MissionControl.FileReferenceUpdate](docs/FileReferenceUpdate.md)
- [MissionControl.FileRemark](docs/FileRemark.md)
- [MissionControl.FileRemarkCreate](docs/FileRemarkCreate.md)
- [MissionControl.FileRemarkUpdate](docs/FileRemarkUpdate.md)
- [MissionControl.FinishedProduct](docs/FinishedProduct.md)
- [MissionControl.FinishedProductCreate](docs/FinishedProductCreate.md)
- [MissionControl.FinishedProductUpdate](docs/FinishedProductUpdate.md)
- [MissionControl.Finishing](docs/Finishing.md)
- [MissionControl.FinishingApplication](docs/FinishingApplication.md)
- [MissionControl.FinishingApplicationCreate](docs/FinishingApplicationCreate.md)
- [MissionControl.FinishingApplicationUpdate](docs/FinishingApplicationUpdate.md)
- [MissionControl.FinishingCreate](docs/FinishingCreate.md)
- [MissionControl.FinishingIdFileReferencesBody](docs/FinishingIdFileReferencesBody.md)
- [MissionControl.FinishingIdFinishingApplicationsBody](docs/FinishingIdFinishingApplicationsBody.md)
- [MissionControl.FinishingUpdate](docs/FinishingUpdate.md)
- [MissionControl.FinishingsFinishingIdBody](docs/FinishingsFinishingIdBody.md)
- [MissionControl.FoilStamp](docs/FoilStamp.md)
- [MissionControl.FoilStampCreate](docs/FoilStampCreate.md)
- [MissionControl.FoilStampUpdate](docs/FoilStampUpdate.md)
- [MissionControl.Glue](docs/Glue.md)
- [MissionControl.GlueCreate](docs/GlueCreate.md)
- [MissionControl.GlueUpdate](docs/GlueUpdate.md)
- [MissionControl.GreaterThan](docs/GreaterThan.md)
- [MissionControl.GreaterThanCreate](docs/GreaterThanCreate.md)
- [MissionControl.GreaterThanUpdate](docs/GreaterThanUpdate.md)
- [MissionControl.HeadBand](docs/HeadBand.md)
- [MissionControl.HeadBandCreate](docs/HeadBandCreate.md)
- [MissionControl.HeadBandUpdate](docs/HeadBandUpdate.md)
- [MissionControl.Hole](docs/Hole.md)
- [MissionControl.HoleCreate](docs/HoleCreate.md)
- [MissionControl.HoleUpdate](docs/HoleUpdate.md)
- [MissionControl.Imposing](docs/Imposing.md)
- [MissionControl.ImposingCreate](docs/ImposingCreate.md)
- [MissionControl.ImposingIdSignaturesBody](docs/ImposingIdSignaturesBody.md)
- [MissionControl.ImposingUpdate](docs/ImposingUpdate.md)
- [MissionControl.ImposingsImposingIdBody](docs/ImposingsImposingIdBody.md)
- [MissionControl.InlineResponse200](docs/InlineResponse200.md)
- [MissionControl.InlineResponse201](docs/InlineResponse201.md)
- [MissionControl.InlineResponse2011](docs/InlineResponse2011.md)
- [MissionControl.InlineResponse2012](docs/InlineResponse2012.md)
- [MissionControl.InlineResponse2013](docs/InlineResponse2013.md)
- [MissionControl.InlineResponse2014](docs/InlineResponse2014.md)
- [MissionControl.InlineResponse400](docs/InlineResponse400.md)
- [MissionControl.InlineResponse401](docs/InlineResponse401.md)
- [MissionControl.IntermediateProduct](docs/IntermediateProduct.md)
- [MissionControl.IntermediateProductCreate](docs/IntermediateProductCreate.md)
- [MissionControl.IntermediateProductUpdate](docs/IntermediateProductUpdate.md)
- [MissionControl.IntermediateProductsIntermediateProductIdBody](docs/IntermediateProductsIntermediateProductIdBody.md)
- [MissionControl.Job](docs/Job.md)
- [MissionControl.JobCreate](docs/JobCreate.md)
- [MissionControl.JobIdEstimatesBody](docs/JobIdEstimatesBody.md)
- [MissionControl.JobIdFinishedProductBody](docs/JobIdFinishedProductBody.md)
- [MissionControl.JobIdFinishedProductBody1](docs/JobIdFinishedProductBody1.md)
- [MissionControl.JobIdIntermediateProductsBody](docs/JobIdIntermediateProductsBody.md)
- [MissionControl.JobIdMilestonesBody](docs/JobIdMilestonesBody.md)
- [MissionControl.JobIdPackagingsBody](docs/JobIdPackagingsBody.md)
- [MissionControl.JobIdPartsBody](docs/JobIdPartsBody.md)
- [MissionControl.JobIdProductionStrategiesBody](docs/JobIdProductionStrategiesBody.md)
- [MissionControl.JobIdTodosBody](docs/JobIdTodosBody.md)
- [MissionControl.JobUpdate](docs/JobUpdate.md)
- [MissionControl.JobsBody](docs/JobsBody.md)
- [MissionControl.JobsJobIdBody](docs/JobsJobIdBody.md)
- [MissionControl.Lamination](docs/Lamination.md)
- [MissionControl.LaminationCreate](docs/LaminationCreate.md)
- [MissionControl.LaminationUpdate](docs/LaminationUpdate.md)
- [MissionControl.Layout](docs/Layout.md)
- [MissionControl.LayoutCreate](docs/LayoutCreate.md)
- [MissionControl.LayoutUpdate](docs/LayoutUpdate.md)
- [MissionControl.LessThan](docs/LessThan.md)
- [MissionControl.LessThanCreate](docs/LessThanCreate.md)
- [MissionControl.LessThanUpdate](docs/LessThanUpdate.md)
- [MissionControl.List](docs/List.md)
- [MissionControl.ListCreate](docs/ListCreate.md)
- [MissionControl.ListIdPredicatesBody](docs/ListIdPredicatesBody.md)
- [MissionControl.ListMember](docs/ListMember.md)
- [MissionControl.ListMemberCreate](docs/ListMemberCreate.md)
- [MissionControl.ListMemberUpdate](docs/ListMemberUpdate.md)
- [MissionControl.ListUpdate](docs/ListUpdate.md)
- [MissionControl.ListWithPredicates](docs/ListWithPredicates.md)
- [MissionControl.ListWithPredicatesCreate](docs/ListWithPredicatesCreate.md)
- [MissionControl.ListWithPredicatesUpdate](docs/ListWithPredicatesUpdate.md)
- [MissionControl.ListsBody](docs/ListsBody.md)
- [MissionControl.ListsListIdBody](docs/ListsListIdBody.md)
- [MissionControl.MaterialEstimate](docs/MaterialEstimate.md)
- [MissionControl.MaterialEstimateCreate](docs/MaterialEstimateCreate.md)
- [MissionControl.MaterialEstimateUpdate](docs/MaterialEstimateUpdate.md)
- [MissionControl.MaterialEstimatesMaterialEstimateIdBody](docs/MaterialEstimatesMaterialEstimateIdBody.md)
- [MissionControl.Milestone](docs/Milestone.md)
- [MissionControl.MilestoneCreate](docs/MilestoneCreate.md)
- [MissionControl.MilestoneUpdate](docs/MilestoneUpdate.md)
- [MissionControl.MilestonesMilestoneIdBody](docs/MilestonesMilestoneIdBody.md)
- [MissionControl.NumberEquals](docs/NumberEquals.md)
- [MissionControl.NumberEqualsCreate](docs/NumberEqualsCreate.md)
- [MissionControl.NumberEqualsUpdate](docs/NumberEqualsUpdate.md)
- [MissionControl.NumberGreaterThan](docs/NumberGreaterThan.md)
- [MissionControl.NumberGreaterThanCreate](docs/NumberGreaterThanCreate.md)
- [MissionControl.NumberGreaterThanUpdate](docs/NumberGreaterThanUpdate.md)
- [MissionControl.NumberLessThan](docs/NumberLessThan.md)
- [MissionControl.NumberLessThanCreate](docs/NumberLessThanCreate.md)
- [MissionControl.NumberLessThanUpdate](docs/NumberLessThanUpdate.md)
- [MissionControl.OneOfBatchBatchSignature](docs/OneOfBatchBatchSignature.md)
- [MissionControl.OneOfBatchCreateBatchSignature](docs/OneOfBatchCreateBatchSignature.md)
- [MissionControl.OneOfBatchSignatureCreateLayout](docs/OneOfBatchSignatureCreateLayout.md)
- [MissionControl.OneOfBatchSignatureLayout](docs/OneOfBatchSignatureLayout.md)
- [MissionControl.OneOfBatchSignatureUpdateLayout](docs/OneOfBatchSignatureUpdateLayout.md)
- [MissionControl.OneOfBatchUpdateBatchSignature](docs/OneOfBatchUpdateBatchSignature.md)
- [MissionControl.OneOfExpandedOrderAddress](docs/OneOfExpandedOrderAddress.md)
- [MissionControl.OneOfExpandedOrderCreateAddress](docs/OneOfExpandedOrderCreateAddress.md)
- [MissionControl.OneOfExpandedOrderCreateCustomer](docs/OneOfExpandedOrderCreateCustomer.md)
- [MissionControl.OneOfExpandedOrderCreatePaymentTerms](docs/OneOfExpandedOrderCreatePaymentTerms.md)
- [MissionControl.OneOfExpandedOrderCustomer](docs/OneOfExpandedOrderCustomer.md)
- [MissionControl.OneOfExpandedOrderPaymentTerms](docs/OneOfExpandedOrderPaymentTerms.md)
- [MissionControl.OneOfExpandedOrderUpdateAddress](docs/OneOfExpandedOrderUpdateAddress.md)
- [MissionControl.OneOfExpandedOrderUpdateCustomer](docs/OneOfExpandedOrderUpdateCustomer.md)
- [MissionControl.OneOfExpandedOrderUpdatePaymentTerms](docs/OneOfExpandedOrderUpdatePaymentTerms.md)
- [MissionControl.OneOfExtendedShipmentAddress](docs/OneOfExtendedShipmentAddress.md)
- [MissionControl.OneOfExtendedShipmentCreateAddress](docs/OneOfExtendedShipmentCreateAddress.md)
- [MissionControl.OneOfExtendedShipmentUpdateAddress](docs/OneOfExtendedShipmentUpdateAddress.md)
- [MissionControl.OneOfImposingCreateSubstrate](docs/OneOfImposingCreateSubstrate.md)
- [MissionControl.OneOfImposingSubstrate](docs/OneOfImposingSubstrate.md)
- [MissionControl.OneOfImposingUpdateSubstrate](docs/OneOfImposingUpdateSubstrate.md)
- [MissionControl.OneOfIntermediateProductCreateLayout](docs/OneOfIntermediateProductCreateLayout.md)
- [MissionControl.OneOfIntermediateProductLayout](docs/OneOfIntermediateProductLayout.md)
- [MissionControl.OneOfIntermediateProductUpdateLayout](docs/OneOfIntermediateProductUpdateLayout.md)
- [MissionControl.OneOfPartCreateDesiredSubstrate](docs/OneOfPartCreateDesiredSubstrate.md)
- [MissionControl.OneOfPartCreateLayout](docs/OneOfPartCreateLayout.md)
- [MissionControl.OneOfPartLayout](docs/OneOfPartLayout.md)
- [MissionControl.OneOfPartUpdateDesiredSubstrate](docs/OneOfPartUpdateDesiredSubstrate.md)
- [MissionControl.OneOfPartUpdateLayout](docs/OneOfPartUpdateLayout.md)
- [MissionControl.OneOfSignatureCreateLayout](docs/OneOfSignatureCreateLayout.md)
- [MissionControl.OneOfSignatureLayout](docs/OneOfSignatureLayout.md)
- [MissionControl.OneOfSignatureUpdateLayout](docs/OneOfSignatureUpdateLayout.md)
- [MissionControl.OneOfinlineResponse201FinishedProduct](docs/OneOfinlineResponse201FinishedProduct.md)
- [MissionControl.OneOfproductionPathsProductionPathFinishedProduct](docs/OneOfproductionPathsProductionPathFinishedProduct.md)
- [MissionControl.Order](docs/Order.md)
- [MissionControl.OrderCreate](docs/OrderCreate.md)
- [MissionControl.OrderIdAddressBody](docs/OrderIdAddressBody.md)
- [MissionControl.OrderIdAddressBody1](docs/OrderIdAddressBody1.md)
- [MissionControl.OrderIdOrderLineItemsBody](docs/OrderIdOrderLineItemsBody.md)
- [MissionControl.OrderIdPaymentTermsBody](docs/OrderIdPaymentTermsBody.md)
- [MissionControl.OrderIdPaymentTermsBody1](docs/OrderIdPaymentTermsBody1.md)
- [MissionControl.OrderLineItem](docs/OrderLineItem.md)
- [MissionControl.OrderLineItemCreate](docs/OrderLineItemCreate.md)
- [MissionControl.OrderLineItemUpdate](docs/OrderLineItemUpdate.md)
- [MissionControl.OrderLineItemsOrderLineItemIdBody](docs/OrderLineItemsOrderLineItemIdBody.md)
- [MissionControl.OrderUpdate](docs/OrderUpdate.md)
- [MissionControl.OrdersBody](docs/OrdersBody.md)
- [MissionControl.OrdersOrderIdBody](docs/OrdersOrderIdBody.md)
- [MissionControl.Packaging](docs/Packaging.md)
- [MissionControl.PackagingCreate](docs/PackagingCreate.md)
- [MissionControl.PackagingUpdate](docs/PackagingUpdate.md)
- [MissionControl.PackagingsPackagingIdBody](docs/PackagingsPackagingIdBody.md)
- [MissionControl.Part](docs/Part.md)
- [MissionControl.PartCreate](docs/PartCreate.md)
- [MissionControl.PartIdColorsBody](docs/PartIdColorsBody.md)
- [MissionControl.PartIdDesiredSubstrateBody](docs/PartIdDesiredSubstrateBody.md)
- [MissionControl.PartIdDesiredSubstrateBody1](docs/PartIdDesiredSubstrateBody1.md)
- [MissionControl.PartIdFileReferencesBody](docs/PartIdFileReferencesBody.md)
- [MissionControl.PartIdFinishingsBody](docs/PartIdFinishingsBody.md)
- [MissionControl.PartUpdate](docs/PartUpdate.md)
- [MissionControl.PartsPartIdBody](docs/PartsPartIdBody.md)
- [MissionControl.PaymentTerms](docs/PaymentTerms.md)
- [MissionControl.PaymentTermsCreate](docs/PaymentTermsCreate.md)
- [MissionControl.PaymentTermsUpdate](docs/PaymentTermsUpdate.md)
- [MissionControl.PerfectBinding](docs/PerfectBinding.md)
- [MissionControl.PerfectBindingCreate](docs/PerfectBindingCreate.md)
- [MissionControl.PerfectBindingUpdate](docs/PerfectBindingUpdate.md)
- [MissionControl.Perforation](docs/Perforation.md)
- [MissionControl.PerforationCreate](docs/PerforationCreate.md)
- [MissionControl.PerforationUpdate](docs/PerforationUpdate.md)
- [MissionControl.Pickup](docs/Pickup.md)
- [MissionControl.PickupCreate](docs/PickupCreate.md)
- [MissionControl.PickupUpdate](docs/PickupUpdate.md)
- [MissionControl.PickupsPickupIdBody](docs/PickupsPickupIdBody.md)
- [MissionControl.Predicate](docs/Predicate.md)
- [MissionControl.PredicateCreate](docs/PredicateCreate.md)
- [MissionControl.PredicateIdRulesBody](docs/PredicateIdRulesBody.md)
- [MissionControl.PredicateUpdate](docs/PredicateUpdate.md)
- [MissionControl.PredicatesPredicateIdBody](docs/PredicatesPredicateIdBody.md)
- [MissionControl.ProductionPathsBody](docs/ProductionPathsBody.md)
- [MissionControl.ProductionPathsProductionPath](docs/ProductionPathsProductionPath.md)
- [MissionControl.ProductionStrategiesProductionStrategyIdBody](docs/ProductionStrategiesProductionStrategyIdBody.md)
- [MissionControl.ProductionStrategy](docs/ProductionStrategy.md)
- [MissionControl.ProductionStrategyCreate](docs/ProductionStrategyCreate.md)
- [MissionControl.ProductionStrategyIdImposingsBody](docs/ProductionStrategyIdImposingsBody.md)
- [MissionControl.ProductionStrategyUpdate](docs/ProductionStrategyUpdate.md)
- [MissionControl.RingBinding](docs/RingBinding.md)
- [MissionControl.RingBindingCreate](docs/RingBindingCreate.md)
- [MissionControl.RingBindingUpdate](docs/RingBindingUpdate.md)
- [MissionControl.Rule](docs/Rule.md)
- [MissionControl.RuleCreate](docs/RuleCreate.md)
- [MissionControl.RuleUpdate](docs/RuleUpdate.md)
- [MissionControl.RulesRuleIdBody](docs/RulesRuleIdBody.md)
- [MissionControl.SaddleStitch](docs/SaddleStitch.md)
- [MissionControl.SaddleStitchCreate](docs/SaddleStitchCreate.md)
- [MissionControl.SaddleStitchUpdate](docs/SaddleStitchUpdate.md)
- [MissionControl.Shipment](docs/Shipment.md)
- [MissionControl.ShipmentCreate](docs/ShipmentCreate.md)
- [MissionControl.ShipmentIdAddressBody](docs/ShipmentIdAddressBody.md)
- [MissionControl.ShipmentIdAddressBody1](docs/ShipmentIdAddressBody1.md)
- [MissionControl.ShipmentUpdate](docs/ShipmentUpdate.md)
- [MissionControl.ShipmentsShipmentIdBody](docs/ShipmentsShipmentIdBody.md)
- [MissionControl.Signature](docs/Signature.md)
- [MissionControl.SignatureCreate](docs/SignatureCreate.md)
- [MissionControl.SignatureUpdate](docs/SignatureUpdate.md)
- [MissionControl.SignaturesSignatureIdBody](docs/SignaturesSignatureIdBody.md)
- [MissionControl.SpiralBinding](docs/SpiralBinding.md)
- [MissionControl.SpiralBindingCreate](docs/SpiralBindingCreate.md)
- [MissionControl.SpiralBindingUpdate](docs/SpiralBindingUpdate.md)
- [MissionControl.StringBegins](docs/StringBegins.md)
- [MissionControl.StringBeginsCreate](docs/StringBeginsCreate.md)
- [MissionControl.StringBeginsUpdate](docs/StringBeginsUpdate.md)
- [MissionControl.StringContains](docs/StringContains.md)
- [MissionControl.StringContainsCreate](docs/StringContainsCreate.md)
- [MissionControl.StringContainsUpdate](docs/StringContainsUpdate.md)
- [MissionControl.StringEnds](docs/StringEnds.md)
- [MissionControl.StringEndsCreate](docs/StringEndsCreate.md)
- [MissionControl.StringEndsUpdate](docs/StringEndsUpdate.md)
- [MissionControl.StringEquals](docs/StringEquals.md)
- [MissionControl.StringEqualsCreate](docs/StringEqualsCreate.md)
- [MissionControl.StringEqualsUpdate](docs/StringEqualsUpdate.md)
- [MissionControl.StripBinding](docs/StripBinding.md)
- [MissionControl.StripBindingCreate](docs/StripBindingCreate.md)
- [MissionControl.StripBindingUpdate](docs/StripBindingUpdate.md)
- [MissionControl.Substrate](docs/Substrate.md)
- [MissionControl.SubstrateCreate](docs/SubstrateCreate.md)
- [MissionControl.SubstrateUpdate](docs/SubstrateUpdate.md)
- [MissionControl.ThreadSewing](docs/ThreadSewing.md)
- [MissionControl.ThreadSewingCreate](docs/ThreadSewingCreate.md)
- [MissionControl.ThreadSewingUpdate](docs/ThreadSewingUpdate.md)
- [MissionControl.Todo](docs/Todo.md)
- [MissionControl.TodoCreate](docs/TodoCreate.md)
- [MissionControl.TodoUpdate](docs/TodoUpdate.md)
- [MissionControl.TodosTodoIdBody](docs/TodosTodoIdBody.md)
- [MissionControl.Workstep](docs/Workstep.md)
- [MissionControl.WorkstepCreate](docs/WorkstepCreate.md)
- [MissionControl.WorkstepEstimate](docs/WorkstepEstimate.md)
- [MissionControl.WorkstepEstimateCreate](docs/WorkstepEstimateCreate.md)
- [MissionControl.WorkstepEstimateIdMaterialEstimatesBody](docs/WorkstepEstimateIdMaterialEstimatesBody.md)
- [MissionControl.WorkstepEstimateUpdate](docs/WorkstepEstimateUpdate.md)
- [MissionControl.WorkstepEstimatesWorkstepEstimateIdBody](docs/WorkstepEstimatesWorkstepEstimateIdBody.md)
- [MissionControl.WorkstepGroup](docs/WorkstepGroup.md)
- [MissionControl.WorkstepGroupCreate](docs/WorkstepGroupCreate.md)
- [MissionControl.WorkstepGroupUpdate](docs/WorkstepGroupUpdate.md)
- [MissionControl.WorkstepGroupsBody](docs/WorkstepGroupsBody.md)
- [MissionControl.WorkstepGroupsWorkstepGroupIdBody](docs/WorkstepGroupsWorkstepGroupIdBody.md)
- [MissionControl.WorkstepUpdate](docs/WorkstepUpdate.md)
- [MissionControl.WorkstepsBody](docs/WorkstepsBody.md)
- [MissionControl.WorkstepsWorkstepIdBody](docs/WorkstepsWorkstepIdBody.md)

## Documentation for Authorization

### bearerAuth
