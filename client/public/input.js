angular.module('app')
  .component('todoMaker', {
      controller: function($http) {
        bindings: {
          pendingChanger: '<'
        }
        this.tagOptions = ["Important", "Work", "School", "Hobby", "Daily Routine"];
        this.onSubmit = (todoTitle, selectedTag) => {
           let payload = {
               todoEntry: todoTitle,
               tag: selectedTag,
               whichBox: 'pending'
           }
          
           console.log('this is the payload', payload)
           $http({
             method: 'POST',
             url: '/api/save',
             data: payload
           })
           .then((response) => console.log('response from INPUT.js', response.data))
           .catch((err) => console.log('this is ANGULAR err', err))
           .then($http({
             method: 'GET',
             url: '/api/loadAll',
           }).then((data) =>
          this.pendingChanger(data)
          ))
          // console.log("yoyooyo", $ctrl.pendingEntry)
        }
      },
      template:`
      Insert todo:
      <input ng-model="$ctrl.todo"></input>
      Select type:
      <select ng-model="$ctrl.selectedTag" ng-options="tag for tag in $ctrl.tagOptions"></select>
      <button ng-click="$ctrl.onSubmit($ctrl.todo, $ctrl.selectedTag)">Add todo</button>
      `
  })