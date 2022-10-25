# MissionControl.MilestoneUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The kind of a milestone represents the classification of that Milestone within the printing life cycle. This could be something well-known such as \&quot;prepress\&quot; or for custom groups of Worksteps, can be set to \&quot;custom\&quot;, in which case it is required to set the &#x60;description&#x60; attribute. | [optional] 
**description** | **String** | A short, human readable description of this Milestone. Required to be used if the &#x60;kind&#x60; attribute is set to &#x60;custom&#x60;, otherwise optional. | [optional] 
**position** | **Number** | A simple sort-order of the Milestones for this job. The lower the number, the earlier in the workflow this Milestone sits. If no &#x60;custom&#x60; Milestones are present, this can be left blank for all milestones and they will be sorted accordingly. | [optional] 
**jobId** | **String** |  | [optional] 
**expectedStartAt** | **Date** | The predicted or expected starting timestamp for worksteps within this Milestone to be commenced. | [optional] 
**actualStartAt** | **Date** | The actual time that work on this Milestone was begun. Automatically calculated from the first commenced workstep within the Milestone if not explicitly set. | [optional] 
**expectedFinishAt** | **Date** | The predicted or expected finishing timestamp for worksteps within this Milestone to be completed. | [optional] 
**actualFinishAt** | **Date** | The actual time that work on this Milestone was completed. Automatically calculated from the final completion timestamp of the contained worksteps if not explicitly set. | [optional] 

<a name="KindEnum"></a>
## Enum: KindEnum

* `estimation` (value: `"estimation"`)
* `logistics` (value: `"logistics"`)
* `other` (value: `"other"`)
* `postpress` (value: `"postpress"`)
* `prepress` (value: `"prepress"`)
* `press` (value: `"press"`)

