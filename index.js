// Write your code in this file!

function scuberGreetingForFeet(feet) {
	if (feet <= 400) {
		return 'This one is on me!';
	} else if (1999 < feet && feet < 2500) {
		return 'I will gladly take your thirty bucks.';
	} else {
		return 'No can do.';
	}
}


function ternaryCheckCity(city) {
	if (city == "NYC") {
		return 'Ok, sounds good.'
	} else {
		return 'No go.'
	}
}

function switchOnCharmFromTip(tip) {
	switch (tip) {
		case 'generous':
			return 'Thank you so much.';
		case 'not as generous':
			return 'Thank you.';
		default:
			return 'Bye.'
	}
}

// returns "Ok, sounds good." when the city is NYC ‣
// ReferenceError: ternaryCheckCity is not defined
//     at Context.<anonymous> (test/indexTest.js:20:7)
// should return "No go." if the destination city is not NYC ‣
// ReferenceError: ternaryCheckCity is not defined
//     at Context.<anonymous> (test/indexTest.js:24:7)
// switchOnCharmFromTip()
// should return "Thank you so much." if the tip is generous ‣
// ReferenceError: switchOnCharmFromTip is not defined
//     at Context.<anonymous> (test/indexTest.js:30:7)
// should return "Thank you." if the tip is not as generous ‣
// ReferenceError: switchOnCharmFromTip is not defined
//     at Context.<anonymous> (test/indexTest.js:34:7)
// should return "Bye." if anything else ‣
// ReferenceError: switchOnCharmFromTip is not defined
//     at Context.<anonymous> (test/indexTest.js:38:7)