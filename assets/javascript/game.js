
var can_play = true;

//results
var wins = 0;
var winsHtml = document.getElementById("wins");
var guessesLeft = 8;
var guessHtml = document.getElementById("lives");
var catergoryhtml = document.getElementById("catergory");
var display_word = "";
var used_letters = [];
var usedHtml =document.getElementById("lettersUsed")
var letterCount;
var lCountHtml =document.getElementById("letterCount")
var gameHtml =document.getElementById("game")
var topics;
var topicsSelected;
var wordSelected;
var key;

console.log(wins);
//letters

var letters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(letters[3]);

//on page load

window.onload = function(){

	//displays wins and guess

	guessHtml.innerHTML = guessesLeft
	winsHtml.innerHTML = wins

	//computer selects word & category
	play = function () {
	   topics = [
	       ["Superman", "Green-Lantern", "Batman", "Atom", "Blackest-Night", "Flash", "Teen-Titans"],
	       ["Silk", "Runaways", "Wolverine", "Guardians of The Galaxy", "Spiderman"],
	       ["Sheldon", "Penny", "Caltech", "Physics", "Howard"],
	       ["Winter-Is-Coming", "Hodor", "Khalessi" , "Tyrion" , "Dragons"]
	   ];

	   console.log(topics[2]);

	   topicsSelected = topics[Math.floor(Math.random() * topics.length)];
	   		console.log(topicsSelected);
	   wordSelected = topicsSelected[Math.floor(Math.random() * topicsSelected.length)];
	   		console.log(wordSelected);
	   	//replaces the - with a space
	   wordSelected = wordSelected.replace(/\s/g, "-");

	   //prints how many letters in word
	   letterCount = wordSelected.length;
	   lCountHtml.innerHTML = letterCount;
	   //prints Catergory

	   if (topicsSelected == topics[0]) {
    		catergory.innerHTML = "DC Comics";
    	}else if (topicsSelected == topics[1]) {
    		catergory.innerHTML == "Marvel Comics";
    	}else if (topicsSelected == topics[2]) {
    		catergory.innerHTML == "Big Bang Thoery";
    	}else if (topicsSelected == topics[3]) {
    		catergory.innerHTML == "Game of Thrones";
    	};
	 };
	 play(); //runs function
	
	//key capture
	document.onkeyup = function(event) {
		key = event.key;
		console.log(key);
		//prints the user tries
		used_letters.push(key);
		usedHtml.innerHTML = used_letters;
		//confirms if letter is part of choice
		if (wordSelected.indexOf(key) > -1) {
			console.log("you got a letter");
		}else {
			console.log("You didn't get a letter");
			guessesLeft--;	
			if (guessesLeft > 0) {
				guessHtml.innerHTML = guessesLeft;
			
			}else if (guessesLeft <= 0) {
				gameHtml.innerHTML = "You Lose";
			};
				
		};
	};	

	
}