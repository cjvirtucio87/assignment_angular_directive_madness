
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


app.directive("mouseEventsUpDownClick", function() {

  function mevents(scope, element, attributes) {

    element.on("click", function() {
      element.text("Mouse has clicked");
    });

    element.on("mouseup", function() {
      element.text("Mouse is UP!");
    });

    element.on("mousedown", function() {
      element.text("Mouse is DOWN!");
    });

  }

  return {
    restrict: "A",
    link: mevents
  };

});

app.directive('mouseEventsHover', function() {

  function mevents(scope, element, attrs) {

    element.on("mouseenter", function() {
      element.text("Mouse has entered");
    });

    element.on("mouseleave", function() {
      element.text("Mouse has left the building");
    });

  }

  return {
    restrict: "A",
    link: mevents
  };

});

app.directive('mouseEventsDblClick', function() {

  function mevents(scope, element, attrs) {
    element.on("dblclick", function() {
      element.text("Clicked TWICE!");
    });
  }


  return {
    restrict: "A",
    link: mevents
  };

});


//Quotes Controller
app.controller("SecondCtrl", ["$scope", "_", function($scope, _ ) {

  $scope.name = "Quotes!";
  $scope.quotes = [];

  $scope.submitQuote = function () {
    $scope.quotes.push({author: $scope.author, quote: $scope.quote});
    console.log($scope.quotes);
  };

}]);


app.directive("quoteForm", function() {
  return{
    template: ["<form>",
    'Author: <input ng-model="author" type="text"></br>',
    'Message: <input ng-model="quote" type="text"></br>',
    "<input ng-click='submitQuote()' type='submit'>",
    '</form>'].join(""),
    restrict: "E",
    // scope:true,
  };
});

app.directive("quotesIndex", function() {
  return {
    templateUrl: "listed_quotes.html",
    restrict: "A",
    scope: true
  }
})
