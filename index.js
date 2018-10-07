// Write your code in this file!
function scuberGreetingForFeet(distance){
  if(distance>2500){
   return  "No can do.";
  }else if(distance<=400){
   return  "This one is on me!";
  }else if(distance>=2000){
   return  "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity (city) {
  let result
  city === `NYC` ? result = `Ok, sounds good.` : result = `No go.`
  return result
}

function switchOnCharmFromTip(tip) {
  let response
   switch (tip) {
    case 'generous':
      response = 'Thank you so much.'
      break
    case 'not as generous':
      response = 'Thank you.'
      break
    default:
      response = 'Bye.'
  }
  return response
}
