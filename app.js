
var app = angular.module("DirectiveMadness", []);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller("FirstCtrl", ["$scope", "_", function($scope, _ ) {

  $scope.name = "Hello, world!";

  $scope.noneSelected = function () {
    return !$scope.selectedRadio;
  };

  $scope.isOdd = function () {
    return ($scope.selectedRadio % 2 !== 0) && ($scope.selectedRadio) ;
  };

  $scope.notEven = function () {
    if ($scope.selectedRadio) {
      return ($scope.selectedRadio % 2 !== 0);
    } else {
      return true;
    }
  };

}]);


app.directive("mainNav", function() {
  return {
    templateUrl: "main-nav.html",
    restrict: "E",
    scope: {}
  };
});

app.directive("mainHeader", function() {
  return {
    templateUrl: "main-header.html",
    restrict: "E",
    transclude: true,
    // scope: true,
    link: function (scope) {
      scope.mainHeader = 'Main Header';
    }
  };
});

app.directive("copyright", function() {
  return {
    templateUrl: "copyright.html",
    restrict: "E",
    transclude: true,
    // scope: true,
    link: function (scope) {
      scope.copyright = 'Copyright';
      scope.copyrightCompany = 'Viking Code School';
      scope.copyrightYear = (new Date()).getFullYear();
    }
  };
});
