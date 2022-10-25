# MissionControl.PredicateUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match** | **String** | The specification for predicate rules combination. Specifies how predicate rules are combined to fetch list members: - Match all: fetch list members that match all predicate rules. - Match any: fetch list members that match any predicate rule/s. | [optional] 
**rules** | [**[RuleUpdate]**](RuleUpdate.md) |  | [optional] 

<a name="MatchEnum"></a>
## Enum: MatchEnum

* `all` (value: `"match_all"`)
* `any` (value: `"match_any"`)

