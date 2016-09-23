
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

app.directive("colorize", function() {

  function colorizeThis(scope, element, attributes) {

    element.on("click", function() {
        element.css("background", "green");
        element.css("color", "red");
    })
  }

  return {
    restrict: "A",
    scope: {
      color: "@",
      background: "@"
    },
    link: colorizeThis
  }
})


app.directive("mouseEvents", function() {

  function mevents(scope, element, attributes) {

    element.on("click", function() {
      element.text("Mouse has clicked");
    })

    element.on("mouseenter", function() {
      element.text("Mouse has entered")
    })

    element.on("mouseleave", function() {
      element.text("Mouse has left the building")
    })

    element.on("mouseup", function() {
      element.text("Mouse is UP!")
    })

    element.on("mousedown", function() {
      element.text("Mouse is DOWN!")
    })

    element.on("dblclick", function() {
      element.text("Clicked TWICE!")
    })

  }

  return {
    restrict: "A",
    link: mevents
  }
})
