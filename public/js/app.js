(function() {

  angular.module('intro', [])
        .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //what tools the MainController function needs

  function MainController($scope){ //$scope is our bridge to the dom
    console.log('Now main controlling...');
    $scope.person = 'Tom';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $scope.saySurprise = saySurprise;


    function saySurprise(person){
      alert('Hey' + person + '...there is a clown behind you');
    }
  }
}());
