// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let message;
  if (distance > 2500){
    message = 'No can do.';
  } else if (distance > 2000){
    message = 'I will gladly take your thirty bucks.';
  } else if (distance <= 400) {
    message = 'This one is on me!';
  }
  return message;
}

function ternaryCheckCity(city) {
  let message;
  if (city === "NYC" ) {
    message = 'Ok, sounds good.';
  } else {
    message = 'No go.';
  }
  return message;
}

function switchOnCharmFromTip(tip) {
  let message;
  if (tip === "generous") {
    message = 'Thank you so much.';
  } else if (tip === "not as generous") {
    message = 'Thank you.';
  } else {
    message = 'Bye.';
  }
  return message;
}
