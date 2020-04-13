// var isFirstVisit;

// const testReturn = cond => {
//   var welcomeMsg = "Welcome to node!";

//   isFirstVisit = cond;

//   if (isFirstVisit == true) {
//     return welcomeMsg;
//   } else {
//     return "Welcome back!";
//   }
// };

// console.log(testReturn(true));

// var messages = [
//   "",
//   "Hi there!",
//   "Welcome",
//   "Hello there",
//   "Whats up",
//   "Heyyyyyyyyyyyy",
//   "Sup",
//   "Welcome",
// ];

// var index = Math.floor(7 * Math.random());

// console.log(messages[index]);

function countBack() {
  var msg = "Jehovah's people will be back together in: ";
  var i = 100;

  var count = setInterval(() => {
    console.log(msg + i + " days");
    i--;

    if (i < 1) {
      clearInterval(count);
    }
  }, 500);
}

console.log("hi");

countBack();
