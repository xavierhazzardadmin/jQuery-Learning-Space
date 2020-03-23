var isFirstVisit;

const testReturn = cond => {
  var welcomeMsg = "Welcome to node!";

  isFirstVisit = cond;

  if (isFirstVisit == true) {
    return welcomeMsg;
  } else {
    return "Welcome back!";
  }
};



console.log(testReturn(true));
