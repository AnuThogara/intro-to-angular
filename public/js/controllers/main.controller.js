
(function(){
  angular.module('intro')//setter syntax

.controller('MainController', MainController);

MainController.$inject = ['$scope', 'TodoService'];
function MainController($scope, TodoService){
  // console.log(TodoService.get());
  // TodoService.create('make more todos');
  // console.log(TodoService.get());
  // TodoService.update(0, 'buy something');
  // console.log(TodoService.get());
  // TodoService.delete(2);
  // console.log(TodoService.get());
  $scope.todos =TodoService.get();
  $scope.createTodo = createTodo;

  function createTodo(newTodo){
    TodoService.create(newTodo);
    $scope.newTodo = '';
  }



}
}());
