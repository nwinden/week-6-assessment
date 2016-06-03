heroApp.controller('EntryController', ['$scope', '$http', function($scope, $http) {

  console.log('working!');

  $scope.powers = [];
  $scope.hero= {};

  //gets the super powers for the power drop down
  $scope.getPowers = function() {
    $http.get('/entry')
      .then(function (response) {

        $scope.powers = response.data;

      });
  };

  //submits a hero to the heros DB
  $scope.submitHero = function() {
    console.log($scope.hero);
    var hero = $scope.hero;

    $http.post('/entry', hero)
      .then(function () {
        alert('You submitted ' + hero.alias + '! AWESOME!');
      });

  }

}]);
