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
    describe('ThreadSewingUpdate', function() {
      beforeEach(function() {
        instance = new MissionControl.ThreadSewingUpdate();
      });

      it('should create an instance of ThreadSewingUpdate', function() {
        // TODO: update the code to test ThreadSewingUpdate
        expect(instance).to.be.a(MissionControl.ThreadSewingUpdate);
      });

      it('should have the property fileReferences (base name: "file_references")', function() {
        // TODO: update the code to test the property fileReferences
        expect(instance).to.have.property('fileReferences');
        // expect(instance.fileReferences).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property pattern (base name: "pattern")', function() {
        // TODO: update the code to test the property pattern
        expect(instance).to.have.property('pattern');
        // expect(instance.pattern).to.be(expectedValueLiteral);
      });

      it('should have the property blindStitch (base name: "blind_stitch")', function() {
        // TODO: update the code to test the property blindStitch
        expect(instance).to.have.property('blindStitch');
        // expect(instance.blindStitch).to.be(expectedValueLiteral);
      });

      it('should have the property threadThickness (base name: "thread_thickness")', function() {
        // TODO: update the code to test the property threadThickness
        expect(instance).to.have.property('threadThickness');
        // expect(instance.threadThickness).to.be(expectedValueLiteral);
      });

      it('should have the property dimensionsUnit (base name: "dimensions_unit")', function() {
        // TODO: update the code to test the property dimensionsUnit
        expect(instance).to.have.property('dimensionsUnit');
        // expect(instance.dimensionsUnit).to.be(expectedValueLiteral);
      });

    });
  });

}));
