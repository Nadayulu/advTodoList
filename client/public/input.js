angular.module('app')
  .component('todoMaker', {
      controller: function() {
        this.tagOptions = ["Important", "Work", "School", "Hobby", "Daily Routine"]
      },
      template:`
      Insert todo:
      <input></input>
      Select type:
      <select ng-model="selectedTag" ng-options="tag for tag in $ctrl.tagOptions"></select>
      Add todo!
      `
  })