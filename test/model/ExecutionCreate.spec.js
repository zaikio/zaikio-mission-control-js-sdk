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
    describe('ExecutionCreate', function() {
      beforeEach(function() {
        instance = new MissionControl.ExecutionCreate();
      });

      it('should create an instance of ExecutionCreate', function() {
        // TODO: update the code to test ExecutionCreate
        expect(instance).to.be.a(MissionControl.ExecutionCreate);
      });

      it('should have the property operatorId (base name: "operator_id")', function() {
        // TODO: update the code to test the property operatorId
        expect(instance).to.have.property('operatorId');
        // expect(instance.operatorId).to.be(expectedValueLiteral);
      });

      it('should have the property machineId (base name: "machine_id")', function() {
        // TODO: update the code to test the property machineId
        expect(instance).to.have.property('machineId');
        // expect(instance.machineId).to.be(expectedValueLiteral);
      });

      it('should have the property workstepId (base name: "workstep_id")', function() {
        // TODO: update the code to test the property workstepId
        expect(instance).to.have.property('workstepId');
        // expect(instance.workstepId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property waste (base name: "waste")', function() {
        // TODO: update the code to test the property waste
        expect(instance).to.have.property('waste');
        // expect(instance.waste).to.be(expectedValueLiteral);
      });

      it('should have the property startedAt (base name: "started_at")', function() {
        // TODO: update the code to test the property startedAt
        expect(instance).to.have.property('startedAt');
        // expect(instance.startedAt).to.be(expectedValueLiteral);
      });

      it('should have the property endedAt (base name: "ended_at")', function() {
        // TODO: update the code to test the property endedAt
        expect(instance).to.have.property('endedAt');
        // expect(instance.endedAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
