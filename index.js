// Write your code in this file!

function scuberGreetingForFeet(distance){
  let greeting

  if (distance<=400){
    greeting = 'This one is on me!'
  }else if (distance>2500){
    greeting = 'No can do.'
  }else if (distance>2000){
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}

function ternaryCheckCity(city){
  const response = city ==='NYC' ? "Ok, sounds good." : "No go.";
  return response
}
//
function switchOnCharmFromTip(tip){
  let say;
  switch(tip){
    case 'generous':
      say = 'Thank you so much.';
      break;
    case 'not as generous':
      say = 'Thank you.';
      break;
    default:
      say = 'Bye.';
      break;
  }
  return say
}
