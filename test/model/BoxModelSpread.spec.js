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
    describe('BoxModelSpread', function() {
      beforeEach(function() {
        instance = new MissionControl.BoxModelSpread();
      });

      it('should create an instance of BoxModelSpread', function() {
        // TODO: update the code to test BoxModelSpread
        expect(instance).to.be.a(MissionControl.BoxModelSpread);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property dimensions (base name: "dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property front (base name: "front")', function() {
        // TODO: update the code to test the property front
        expect(instance).to.have.property('front');
        // expect(instance.front).to.be(expectedValueLiteral);
      });

      it('should have the property back (base name: "back")', function() {
        // TODO: update the code to test the property back
        expect(instance).to.have.property('back');
        // expect(instance.back).to.be(expectedValueLiteral);
      });

      it('should have the property sides (base name: "sides")', function() {
        // TODO: update the code to test the property sides
        expect(instance).to.have.property('sides');
        // expect(instance.sides).to.be(expectedValueLiteral);
      });

      it('should have the property bleeds (base name: "bleeds")', function() {
        // TODO: update the code to test the property bleeds
        expect(instance).to.have.property('bleeds');
        // expect(instance.bleeds).to.be(expectedValueLiteral);
      });

      it('should have the property printFreeMargins (base name: "print_free_margins")', function() {
        // TODO: update the code to test the property printFreeMargins
        expect(instance).to.have.property('printFreeMargins');
        // expect(instance.printFreeMargins).to.be(expectedValueLiteral);
      });

      it('should have the property children (base name: "children")', function() {
        // TODO: update the code to test the property children
        expect(instance).to.have.property('children');
        // expect(instance.children).to.be(expectedValueLiteral);
      });

    });
  });

}));
