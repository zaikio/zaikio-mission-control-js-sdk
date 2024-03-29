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

  beforeEach(function() {
    instance = new MissionControl.BusinessApi();
  });

  describe('(package)', function() {
    describe('BusinessApi', function() {
      describe('orderLineItemsOrderLineItemIdDelete', function() {
        it('should call orderLineItemsOrderLineItemIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for orderLineItemsOrderLineItemIdDelete call
          /*

          instance.orderLineItemsOrderLineItemIdDelete(orderLineItemId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('orderLineItemsOrderLineItemIdGet', function() {
        it('should call orderLineItemsOrderLineItemIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for orderLineItemsOrderLineItemIdGet call and complete the assertions
          /*

          instance.orderLineItemsOrderLineItemIdGet(orderLineItemId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.OrderLineItem);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('orderLineItemsOrderLineItemIdPatch', function() {
        it('should call orderLineItemsOrderLineItemIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for orderLineItemsOrderLineItemIdPatch call and complete the assertions
          /*

          instance.orderLineItemsOrderLineItemIdPatch(body, orderLineItemId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.OrderLineItem);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersGet', function() {
        it('should call ordersGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersGet call and complete the assertions
          /*
          var opts = {};

          instance.ordersGet(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Order);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdAddressDelete', function() {
        it('should call ordersOrderIdAddressDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdAddressDelete call
          /*

          instance.ordersOrderIdAddressDelete(orderId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdAddressGet', function() {
        it('should call ordersOrderIdAddressGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdAddressGet call and complete the assertions
          /*

          instance.ordersOrderIdAddressGet(orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Address);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdAddressPatch', function() {
        it('should call ordersOrderIdAddressPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdAddressPatch call and complete the assertions
          /*

          instance.ordersOrderIdAddressPatch(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Address);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdAddressPost', function() {
        it('should call ordersOrderIdAddressPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdAddressPost call and complete the assertions
          /*

          instance.ordersOrderIdAddressPost(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Address);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdDelete', function() {
        it('should call ordersOrderIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdDelete call
          /*

          instance.ordersOrderIdDelete(orderId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdGet', function() {
        it('should call ordersOrderIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdGet call and complete the assertions
          /*

          instance.ordersOrderIdGet(orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.InlineResponse2012);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdOrderLineItemsGet', function() {
        it('should call ordersOrderIdOrderLineItemsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdOrderLineItemsGet call and complete the assertions
          /*
          var opts = {};

          instance.ordersOrderIdOrderLineItemsGet(orderId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.OrderLineItem);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdOrderLineItemsPost', function() {
        it('should call ordersOrderIdOrderLineItemsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdOrderLineItemsPost call and complete the assertions
          /*

          instance.ordersOrderIdOrderLineItemsPost(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.OrderLineItem);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdPatch', function() {
        it('should call ordersOrderIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdPatch call and complete the assertions
          /*

          instance.ordersOrderIdPatch(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.InlineResponse2012);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdPaymentTermsDelete', function() {
        it('should call ordersOrderIdPaymentTermsDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdPaymentTermsDelete call
          /*

          instance.ordersOrderIdPaymentTermsDelete(orderId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdPaymentTermsGet', function() {
        it('should call ordersOrderIdPaymentTermsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdPaymentTermsGet call and complete the assertions
          /*

          instance.ordersOrderIdPaymentTermsGet(orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.PaymentTerms);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdPaymentTermsPatch', function() {
        it('should call ordersOrderIdPaymentTermsPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdPaymentTermsPatch call and complete the assertions
          /*

          instance.ordersOrderIdPaymentTermsPatch(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.PaymentTerms);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdPaymentTermsPost', function() {
        it('should call ordersOrderIdPaymentTermsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdPaymentTermsPost call and complete the assertions
          /*

          instance.ordersOrderIdPaymentTermsPost(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.PaymentTerms);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdStateTransitionsGet', function() {
        it('should call ordersOrderIdStateTransitionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdStateTransitionsGet call and complete the assertions
          /*
          var opts = {};

          instance.ordersOrderIdStateTransitionsGet(orderId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.OrderStateTransition);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdStateTransitionsPost', function() {
        it('should call ordersOrderIdStateTransitionsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdStateTransitionsPost call and complete the assertions
          /*

          instance.ordersOrderIdStateTransitionsPost(body, orderId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.OrderStateTransition);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersOrderIdStateTransitionsStateTransitionIdGet', function() {
        it('should call ordersOrderIdStateTransitionsStateTransitionIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersOrderIdStateTransitionsStateTransitionIdGet call and complete the assertions
          /*

          instance.ordersOrderIdStateTransitionsStateTransitionIdGet(orderId, stateTransitionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.OrderStateTransition);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ordersPost', function() {
        it('should call ordersPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ordersPost call and complete the assertions
          /*

          instance.ordersPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.InlineResponse2012);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
