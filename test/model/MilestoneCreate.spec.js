/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
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
    describe('MilestoneCreate', function() {
      beforeEach(function() {
        instance = new MissionControl.MilestoneCreate();
      });

      it('should create an instance of MilestoneCreate', function() {
        // TODO: update the code to test MilestoneCreate
        expect(instance).to.be.a(MissionControl.MilestoneCreate);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property jobId (base name: "job_id")', function() {
        // TODO: update the code to test the property jobId
        expect(instance).to.have.property('jobId');
        // expect(instance.jobId).to.be(expectedValueLiteral);
      });

      it('should have the property expectedStartAt (base name: "expected_start_at")', function() {
        // TODO: update the code to test the property expectedStartAt
        expect(instance).to.have.property('expectedStartAt');
        // expect(instance.expectedStartAt).to.be(expectedValueLiteral);
      });

      it('should have the property actualStartAt (base name: "actual_start_at")', function() {
        // TODO: update the code to test the property actualStartAt
        expect(instance).to.have.property('actualStartAt');
        // expect(instance.actualStartAt).to.be(expectedValueLiteral);
      });

      it('should have the property expectedFinishAt (base name: "expected_finish_at")', function() {
        // TODO: update the code to test the property expectedFinishAt
        expect(instance).to.have.property('expectedFinishAt');
        // expect(instance.expectedFinishAt).to.be(expectedValueLiteral);
      });

      it('should have the property actualFinishAt (base name: "actual_finish_at")', function() {
        // TODO: update the code to test the property actualFinishAt
        expect(instance).to.have.property('actualFinishAt');
        // expect(instance.actualFinishAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
