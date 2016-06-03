heroApp.controller('ListController', ['$scope', '$http', function($scope, $http) {

  $scope.filterBy = "";
  $scope.powers = [];
  $scope.heros = [];


  //Gets the powers for the filter
  $scope.getPowers = function() {
    $http.get('/entry')
      .then(function (response) {

        $scope.powers = response.data;

      });
  };

  //gets the heros from the DB
  $scope.getHeros = function() {
    $http.get('/list')
      .then(function (response) {

        $scope.heros = response.data;

      });
  };

  //deletes a hero from the DOM and the DB
  $scope.deleteHero = function(id) {

    $http.delete('/list/' + id)
      .then(function (response) {
        $scope.getHeros();
      });
  }

}]);
