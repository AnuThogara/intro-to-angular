(function(){
  angular.module('intro')
  .factory('TodoService', TodoService);

  TodoService.$inject = [];
  function TodoService(){
    var data = [
      'hello',
      'world',
      'have some drink',
      'take a nap'
    ];
   return{
     get: get,
     create: create,
     update: update,
     delete: remove
   };

   function get(){
     return data;
   }
   function create(description){
     data.push(description);

   }
   function update(index, newDescription){
     data.splice(index, 1, newDescription);
   }
   function remove(index){
     data.splice(index, 1);
   }
  }
}());
