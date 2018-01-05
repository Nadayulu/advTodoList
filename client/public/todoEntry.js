angular.module('app')
  .component("pendingEntry", {
      bindings: {
        pendingEntry: '<'
      },
      template:`
      <h3>Pending Entry</h3>
      <ul ng-repeat='pendingEntry in $ctrl.pendingEntry'></ul> 
      <pre> getting from pending{{$ctrl.pendingEntry}} </pre>
      `
  })