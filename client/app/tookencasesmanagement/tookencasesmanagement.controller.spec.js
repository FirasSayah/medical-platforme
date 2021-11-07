'use strict';

describe('Controller: TookenCasesCtrl', function () {

  // load the controller's module
  beforeEach(module('MeanApp'));

  var TookenCasesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TookenCasesCtrl = $controller('TookenCasesCtrl', {
      $scope: scope
    });
  }));
  //
  // it('should ...', function () {
  //   expect(true).toBe(true);
  // });
});
