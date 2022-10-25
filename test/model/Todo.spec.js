/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MissionControl);
  }
}(this, function(expect, MissionControl) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Todo', function() {
      beforeEach(function() {
        instance = new MissionControl.Todo();
      });

      it('should create an instance of Todo', function() {
        // TODO: update the code to test Todo
        expect(instance).to.be.a(MissionControl.Todo);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property jobId (base name: "job_id")', function() {
        // TODO: update the code to test the property jobId
        expect(instance).to.have.property('jobId');
        // expect(instance.jobId).to.be(expectedValueLiteral);
      });

      it('should have the property milestoneId (base name: "milestone_id")', function() {
        // TODO: update the code to test the property milestoneId
        expect(instance).to.have.property('milestoneId');
        // expect(instance.milestoneId).to.be(expectedValueLiteral);
      });

      it('should have the property partId (base name: "part_id")', function() {
        // TODO: update the code to test the property partId
        expect(instance).to.have.property('partId');
        // expect(instance.partId).to.be(expectedValueLiteral);
      });

      it('should have the property assignedToId (base name: "assigned_to_id")', function() {
        // TODO: update the code to test the property assignedToId
        expect(instance).to.have.property('assignedToId');
        // expect(instance.assignedToId).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creator_id")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property progress (base name: "progress")', function() {
        // TODO: update the code to test the property progress
        expect(instance).to.have.property('progress');
        // expect(instance.progress).to.be(expectedValueLiteral);
      });

      it('should have the property dueAt (base name: "due_at")', function() {
        // TODO: update the code to test the property dueAt
        expect(instance).to.have.property('dueAt');
        // expect(instance.dueAt).to.be(expectedValueLiteral);
      });

      it('should have the property startedAt (base name: "started_at")', function() {
        // TODO: update the code to test the property startedAt
        expect(instance).to.have.property('startedAt');
        // expect(instance.startedAt).to.be(expectedValueLiteral);
      });

      it('should have the property completedAt (base name: "completed_at")', function() {
        // TODO: update the code to test the property completedAt
        expect(instance).to.have.property('completedAt');
        // expect(instance.completedAt).to.be(expectedValueLiteral);
      });

      it('should have the property canceledAt (base name: "canceled_at")', function() {
        // TODO: update the code to test the property canceledAt
        expect(instance).to.have.property('canceledAt');
        // expect(instance.canceledAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
