angular.module('app', [])
  .component('mainpage', {
      template:`
      <h1> Todo List </h1>
      <br>
      <todo-maker></todo-maker>
      <br>
      <br>
      <pending-entry></pending-entry>
      <hr/>
      <progress-entry></progress-entry>
      <hr/>
      <completed-entry></completed-entry>
      `
  })