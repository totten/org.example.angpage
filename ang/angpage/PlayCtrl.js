(function (angular, $, _) {

  angular.module('angpage').config(function ($routeProvider) {
      $routeProvider.when('/play', {
        controller: 'AngpagePlayCtrl',
        templateUrl: '~/angpage/PlayCtrl.html'
      });
    }
  );

  angular.module('angpage').controller('AngpagePlayCtrl', function ($scope, crmApi, crmStatus, crmUiHelp) {
    var ts = $scope.ts = CRM.ts('angpage');
    var hs = $scope.hs = crmUiHelp({file: 'CRM/angpage/PlayCtrl'}); // See: templates/CRM/angpage/PlayCtrl.hlp

    $scope.filters = {};
    $scope.activityCategories = JSON.parse('{"task":{"label":"Task","icon":"fa-check-circle","name":"task"},"document":{"label":"Document","icon":"fa-file-text","name":"document"},"communication":{"label":"Communication","icon":"fa-comment","name":"communication"},"milestone":{"label":"Milestone","icon":"fa-flag","name":"milestone"},"alert":{"label":"Alert","icon":"fa-exclamation-triangle","name":"alert"}}');
    $scope.reset = function reset() {
      $scope.filters = {};
    };
  });

})(angular, CRM.$, CRM._);
