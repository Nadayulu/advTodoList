angular.module('app', [])
  .component('mainpage', {
      controller: function($http) {
        this.pendingEntry = [];
        this.pendingChanger = (arr) => {
          this.pendingEntry = arr;
          console.log(this.pendingEntry)
        }
      },
      template:`
      <h1> Todo List </h1>
      <br>
      <todo-maker pendingChanger="$ctrl.pendingChanger"></todo-maker>
      <br>
      <br>
      <pending-entry pendingEntry="$ctrl.pendingEntry"></pending-entry>
      <hr/>
      <progress-entry></progress-entry>
      <hr/>
      <completed-entry></completed-entry>
      <pre>from index {{$ctrl.pendingEntry}}</pre>
      `
  })