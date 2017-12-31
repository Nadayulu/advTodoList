angular.module('app')
  .component('todoMaker', {
      controller: function() {
        this.tagOptions = ["Important", "Work", "School", "Hobby", "Daily Routine"];
        this.onSubmit = (todoTitle, selectedTag) => {
           console.log(todoTitle, selectedTag)
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