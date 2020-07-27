/*
let greetingMessage = 'Good Morning!'; // global variable

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage; // greetingMessage re-assigned & persists
}

changeGreetingMessage('Good Evening');
greetPeople();
*/

function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // ReferenceError
