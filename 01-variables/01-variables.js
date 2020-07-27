// Variables

// 1
function greeter(name) {
  console.log('Good Morning, ' + name + '.');
  console.log(`Good Afternoon, ${name}.`);
  console.log('Good Evening, ' + name + '.');
}
greeter('Victor');


// 2
function ager(age) {
  console.log(`You are ${age} years old.`);
  for (let i = 10; i <= 40; i += 10) {
    let counter = i;
    console.log(`In ${counter} years, you will be ${age + counter} years old.`);
  }
}
ager(20);
