
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
  $scope.id = 0;
  $scope.quotes = [];

  $scope.empty = function () {
    return $scope.quotes.length > 0;
  };

  $scope.submitQuote = function () {
    if ($scope.quoteForm.$valid) {
      var newQuote = ({author: $scope.author, quote: $scope.quote});
      $scope.quotes.push(newQuote);
      $scope.quoteForm.$setPristine();
      $scope.quoteForm.$setUntouched();
    }
  };

  $scope.validQuoteForm = function () {
    return $scope.quoteForm.$valid;
  };

  $scope.destroyQuote = function (quote) {
    var index = $scope.quotes.indexOf(quote);
    $scope.quotes.splice(index, 1);
  };

}]);


app.directive("quoteForm", function() {
  return{
    template: ["<form ng-submit='submitQuote()' name='quoteForm' novalidate>",
    "Author: <input name='authorInput' ng-model=\"author\" type=\"text\" ng-required ng-minlength='2' ng-maxlength='32'></br>",
    "Message: <input name='messageInput' ng-model=\"quote\" type=\"text\" ng-required ng-minlength='2'></br>",
    "<input type='submit'>","<span ng-show='quoteForm.authorInput.$error.minlength' style='color:red'>Author name is too short</span></br>",
    "<span ng-show='quoteForm.authorInput.$error.maxlength' style='color:red'>Author name is too long</span></br>",
    "<span ng-show='quoteForm.messageInput.$error.minlength' style='color:red'>Message is too short</span></br>",
    '</form>'].join(""),
    restrict: "E",
    // scope:true,
  };
});

app.directive("quoteRow", function() {
  return {
    templateUrl: "quote_row.html",
    restrict: "A",
    scope: {
      quote: "=",
      destroy: "&"
    }
  };
});

app.directive("quotesIndex", function() {
  return {
    templateUrl: "quotes_index.html",
    restrict: "E"
  };
});

// Isolate Scope
app.controller('ScopesCtrl', ['$scope', '_', function ($scope, _) {
  $scope.twoWay = 'two way';
  $scope.oneWay = 'one way';
  $scope.hello = function(name) {
    alert("Hello " + name)
  }
}]);

app.directive('isolated', function() {

  return {
    templateUrl: 'isolated.html',
    restrict: 'AE',
    scope: {
      oneWay: '@',
      twoWay: '=',
      sayHello: '&'
    },
    link: function (scope, element, attrs) {
      element.on("click", function() {
        console.log(element)
      })
    }
  };

});
