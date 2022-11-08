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

  beforeEach(function() {
    instance = new MissionControl.SpecificationApi();
  });

  describe('(package)', function() {
    describe('SpecificationApi', function() {
      describe('fileActionsFileActionIdDelete', function() {
        it('should call fileActionsFileActionIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for fileActionsFileActionIdDelete call
          /*

          instance.fileActionsFileActionIdDelete(fileActionId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileActionsFileActionIdFileRemarksGet', function() {
        it('should call fileActionsFileActionIdFileRemarksGet successfully', function(done) {
          // TODO: uncomment, update parameter values for fileActionsFileActionIdFileRemarksGet call and complete the assertions
          /*
          var opts = {};

          instance.fileActionsFileActionIdFileRemarksGet(fileActionId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.FileRemark);
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
      describe('fileActionsFileActionIdFileRemarksPost', function() {
        it('should call fileActionsFileActionIdFileRemarksPost successfully', function(done) {
          // TODO: uncomment, update parameter values for fileActionsFileActionIdFileRemarksPost call and complete the assertions
          /*

          instance.fileActionsFileActionIdFileRemarksPost(body, fileActionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileRemark);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileActionsFileActionIdGet', function() {
        it('should call fileActionsFileActionIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for fileActionsFileActionIdGet call and complete the assertions
          /*

          instance.fileActionsFileActionIdGet(fileActionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileAction);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileActionsFileActionIdPatch', function() {
        it('should call fileActionsFileActionIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for fileActionsFileActionIdPatch call and complete the assertions
          /*

          instance.fileActionsFileActionIdPatch(body, fileActionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileAction);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileReferencesFileReferenceIdDelete', function() {
        it('should call fileReferencesFileReferenceIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for fileReferencesFileReferenceIdDelete call
          /*

          instance.fileReferencesFileReferenceIdDelete(fileReferenceId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileReferencesFileReferenceIdFileActionsGet', function() {
        it('should call fileReferencesFileReferenceIdFileActionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for fileReferencesFileReferenceIdFileActionsGet call and complete the assertions
          /*
          var opts = {};

          instance.fileReferencesFileReferenceIdFileActionsGet(fileReferenceId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.FileAction);
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
      describe('fileReferencesFileReferenceIdFileActionsPost', function() {
        it('should call fileReferencesFileReferenceIdFileActionsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for fileReferencesFileReferenceIdFileActionsPost call and complete the assertions
          /*

          instance.fileReferencesFileReferenceIdFileActionsPost(body, fileReferenceId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileAction);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fileReferencesFileReferenceIdGet', function() {
        it('should call fileReferencesFileReferenceIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for fileReferencesFileReferenceIdGet call and complete the assertions
          /*

          instance.fileReferencesFileReferenceIdGet(fileReferenceId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileReference);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdDelete', function() {
        it('should call finishingsFinishingIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdDelete call
          /*

          instance.finishingsFinishingIdDelete(finishingId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdFileReferencesGet', function() {
        it('should call finishingsFinishingIdFileReferencesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFileReferencesGet call and complete the assertions
          /*
          var opts = {};

          instance.finishingsFinishingIdFileReferencesGet(finishingId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.FileReference);
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
      describe('finishingsFinishingIdFileReferencesPost', function() {
        it('should call finishingsFinishingIdFileReferencesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFileReferencesPost call and complete the assertions
          /*

          instance.finishingsFinishingIdFileReferencesPost(body, finishingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileReference);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete', function() {
        it('should call finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete call
          /*

          instance.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete(finishingId, finishingApplicationId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet', function() {
        it('should call finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet call and complete the assertions
          /*

          instance.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet(finishingId, finishingApplicationId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FinishingApplication);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdFinishingApplicationsGet', function() {
        it('should call finishingsFinishingIdFinishingApplicationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFinishingApplicationsGet call and complete the assertions
          /*
          var opts = {};

          instance.finishingsFinishingIdFinishingApplicationsGet(finishingId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.FinishingApplication);
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
      describe('finishingsFinishingIdFinishingApplicationsPost', function() {
        it('should call finishingsFinishingIdFinishingApplicationsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdFinishingApplicationsPost call and complete the assertions
          /*

          instance.finishingsFinishingIdFinishingApplicationsPost(body, finishingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FinishingApplication);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdGet', function() {
        it('should call finishingsFinishingIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdGet call and complete the assertions
          /*

          instance.finishingsFinishingIdGet(finishingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Finishing);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('finishingsFinishingIdPatch', function() {
        it('should call finishingsFinishingIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for finishingsFinishingIdPatch call and complete the assertions
          /*

          instance.finishingsFinishingIdPatch(body, finishingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Finishing);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsGet', function() {
        it('should call jobsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsGet call and complete the assertions
          /*
          var opts = {};

          instance.jobsGet(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Job);
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
      describe('jobsJobIdDelete', function() {
        it('should call jobsJobIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdDelete call
          /*

          instance.jobsJobIdDelete(jobId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdGet', function() {
        it('should call jobsJobIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdGet call and complete the assertions
          /*

          instance.jobsJobIdGet(jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.InlineResponse200);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdPackagingsGet', function() {
        it('should call jobsJobIdPackagingsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdPackagingsGet call and complete the assertions
          /*
          var opts = {};

          instance.jobsJobIdPackagingsGet(jobId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Packaging);
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
      describe('jobsJobIdPackagingsPost', function() {
        it('should call jobsJobIdPackagingsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdPackagingsPost call and complete the assertions
          /*

          instance.jobsJobIdPackagingsPost(body, jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Packaging);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdPartsGet', function() {
        it('should call jobsJobIdPartsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdPartsGet call and complete the assertions
          /*
          var opts = {};

          instance.jobsJobIdPartsGet(jobId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Part);
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
      describe('jobsJobIdPartsPost', function() {
        it('should call jobsJobIdPartsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdPartsPost call and complete the assertions
          /*

          instance.jobsJobIdPartsPost(body, jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Part);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdPatch', function() {
        it('should call jobsJobIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdPatch call and complete the assertions
          /*

          instance.jobsJobIdPatch(body, jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Job);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsPost', function() {
        it('should call jobsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsPost call and complete the assertions
          /*

          instance.jobsPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Job);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('packagingsPackagingIdDelete', function() {
        it('should call packagingsPackagingIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for packagingsPackagingIdDelete call
          /*

          instance.packagingsPackagingIdDelete(packagingId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('packagingsPackagingIdGet', function() {
        it('should call packagingsPackagingIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for packagingsPackagingIdGet call and complete the assertions
          /*

          instance.packagingsPackagingIdGet(packagingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Packaging);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('packagingsPackagingIdPatch', function() {
        it('should call packagingsPackagingIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for packagingsPackagingIdPatch call and complete the assertions
          /*

          instance.packagingsPackagingIdPatch(body, packagingId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Packaging);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdColorsColorIdDelete', function() {
        it('should call partsPartIdColorsColorIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdColorsColorIdDelete call
          /*

          instance.partsPartIdColorsColorIdDelete(partId, colorId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdColorsColorIdGet', function() {
        it('should call partsPartIdColorsColorIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdColorsColorIdGet call and complete the assertions
          /*

          instance.partsPartIdColorsColorIdGet(partId, colorId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Color);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdColorsColorIdPatch', function() {
        it('should call partsPartIdColorsColorIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdColorsColorIdPatch call and complete the assertions
          /*

          instance.partsPartIdColorsColorIdPatch(body, partId, colorId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Color);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdColorsGet', function() {
        it('should call partsPartIdColorsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdColorsGet call and complete the assertions
          /*
          var opts = {};

          instance.partsPartIdColorsGet(partId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Color);
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
      describe('partsPartIdColorsPost', function() {
        it('should call partsPartIdColorsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdColorsPost call and complete the assertions
          /*

          instance.partsPartIdColorsPost(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Color);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdDelete', function() {
        it('should call partsPartIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdDelete call
          /*

          instance.partsPartIdDelete(partId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdDesiredSubstrateDelete', function() {
        it('should call partsPartIdDesiredSubstrateDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdDesiredSubstrateDelete call
          /*

          instance.partsPartIdDesiredSubstrateDelete(partId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdDesiredSubstrateGet', function() {
        it('should call partsPartIdDesiredSubstrateGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdDesiredSubstrateGet call and complete the assertions
          /*

          instance.partsPartIdDesiredSubstrateGet(partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.DesiredSubstrate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdDesiredSubstratePatch', function() {
        it('should call partsPartIdDesiredSubstratePatch successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdDesiredSubstratePatch call and complete the assertions
          /*

          instance.partsPartIdDesiredSubstratePatch(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.DesiredSubstrate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdDesiredSubstratePost', function() {
        it('should call partsPartIdDesiredSubstratePost successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdDesiredSubstratePost call and complete the assertions
          /*

          instance.partsPartIdDesiredSubstratePost(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.DesiredSubstrate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdFileReferencesGet', function() {
        it('should call partsPartIdFileReferencesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdFileReferencesGet call and complete the assertions
          /*
          var opts = {};

          instance.partsPartIdFileReferencesGet(partId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.FileReference);
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
      describe('partsPartIdFileReferencesPost', function() {
        it('should call partsPartIdFileReferencesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdFileReferencesPost call and complete the assertions
          /*

          instance.partsPartIdFileReferencesPost(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.FileReference);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdFinishingsGet', function() {
        it('should call partsPartIdFinishingsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdFinishingsGet call and complete the assertions
          /*
          var opts = {};

          instance.partsPartIdFinishingsGet(partId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Finishing);
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
      describe('partsPartIdFinishingsPost', function() {
        it('should call partsPartIdFinishingsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdFinishingsPost call and complete the assertions
          /*

          instance.partsPartIdFinishingsPost(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Finishing);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdGet', function() {
        it('should call partsPartIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdGet call and complete the assertions
          /*

          instance.partsPartIdGet(partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.ExtendedPart);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partsPartIdPatch', function() {
        it('should call partsPartIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for partsPartIdPatch call and complete the assertions
          /*

          instance.partsPartIdPatch(body, partId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Part);

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
