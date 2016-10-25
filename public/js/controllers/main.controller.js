
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
  $scope.deleteTodo = deleteTodo;
  $scope.editTodo = editTodo;
  $scope.saveTodo = saveTodo;

  function createTodo(newTodo){
    TodoService.create(newTodo);
    $scope.newTodo = '';
  }
function deleteTodo(index){
  TodoService.delete(index);
}
 function editTodo(todo){
   todo.isBeingEdited = true;

 }
function saveTodo(index, todo){
  TodoService.update(index, todo.desc);
  todo.isBeingEdited = false;
}
}
}());
