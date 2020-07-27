let msgArray = ['hello', 'hi', 'how are you?', 'I\'m fine'];

function say(arr) {
  let msg; // this is the key... enables the while loop
  while (msg !== 'hi') { // undefined
    msg = arr[Math.floor(Math.random() * arr.length)];
    console.log(`${msg}!`);
  } console.log('that\'s all folks!');
}

say(msgArray);

// say('hello');
// say('hi');
// say('how are you?');
// say('I\'m fine');
