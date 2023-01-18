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
    describe('Bleeds', function() {
      beforeEach(function() {
        instance = new MissionControl.Bleeds();
      });

      it('should create an instance of Bleeds', function() {
        // TODO: update the code to test Bleeds
        expect(instance).to.be.a(MissionControl.Bleeds);
      });

      it('should have the property left (base name: "left")', function() {
        // TODO: update the code to test the property left
        expect(instance).to.have.property('left');
        // expect(instance.left).to.be(expectedValueLiteral);
      });

      it('should have the property top (base name: "top")', function() {
        // TODO: update the code to test the property top
        expect(instance).to.have.property('top');
        // expect(instance.top).to.be(expectedValueLiteral);
      });

      it('should have the property right (base name: "right")', function() {
        // TODO: update the code to test the property right
        expect(instance).to.have.property('right');
        // expect(instance.right).to.be(expectedValueLiteral);
      });

      it('should have the property bottom (base name: "bottom")', function() {
        // TODO: update the code to test the property bottom
        expect(instance).to.have.property('bottom');
        // expect(instance.bottom).to.be(expectedValueLiteral);
      });

    });
  });

}));
