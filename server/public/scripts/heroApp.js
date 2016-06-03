var heroApp = angular.module('heroApp', ['ngRoute']);

//Routes for the site views
heroApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/entry', {
      templateUrl: '/views/entry.html',
      controller: "EntryController"
    })
    .when('/list', {
      templateUrl: '/views/list.html',
      controller: "ListController"
    })
    .otherwise({
      redirectTo: 'entry'
    })
}]);
