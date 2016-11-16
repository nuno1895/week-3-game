
var can_play = true;

//results & variables
var wins = 0;
var winsHtml = document.getElementById("wins");
var guessesLeft = 8;
var guessHtml = document.getElementById("lives");
var catergoryhtml = document.getElementById("catergory");
var wordHold= document.getElementById("wordHold");
var used_letters = [];
var usedHtml =document.getElementById("lettersUsed");
var letterCount;
var lCountHtml =document.getElementById("letterCount");
var gameHtml =document.getElementById("game");
var topics;
var topicsSelected;
var wordSelected;
var key;
var startButton =document.getElementById("startButton");
var play;
var counter = 0;
var winning =document.getElementById("youWin")
var pickLetter =document.getElementById("pickLetter")

console.log(wins);

var letterArray = ["a", "b" ,"c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t", "u", "v", "w", "x", "y", "z" ];
			console.log(letterArray[4]);

//on page load

window.onload = function(){

	//displays wins and guess

	guessHtml.innerHTML = guessesLeft
	winsHtml.innerHTML = wins


	startButton.onclick =function(){

	//computer selects word & category
		play = function () {

			//object name of topic and array
		   topics = {
		       "DC Comics": ["Superman", "Robin", "Batman", "Atom", "Deadshot", "Flash", "Joker"],
		       "Marvel Comics": ["Silk", "Runaways", "Wolverine", "Spiderman"],
		       "Big Bang Theory": ["Sheldon", "Penny", "Caltech", "Physics", "Howard"],
		       "Game of Thrones": ["Snow", "Hodor", "Khalessi" , "Tyrion" , "Dragons"]
		   };

		   //pull key catergory  from array
			var topicArray = Object.keys(topics)
			console.log("TopicArray:", topicArray)

			//selects string array
			var catergory = topicArray[Math.floor(Math.random() * topicArray.length)];
		   		console.log("Catergory to print on page:", catergory);
		   		catergoryhtml.innerHTML = catergory;

		   	//picks the word array	
		   	var wordArray = topics[catergory];
		   		console.log("Word Array Picked:", wordArray);

		   	//picks word in array	
		   wordSelected = topics[wordArray];
		   wordSelected = wordArray[Math.floor(Math.random() * wordArray.length)];
		   			//makes it lower case
		   	wordSelected = wordSelected.toLowerCase()	

		   	//word selected
		   		console.log("WordSelected:", wordSelected);
		   		console.log(wordSelected.length);
		   	
		   letterCount = wordSelected.length;
		   lCountHtml.innerHTML = letterCount;

		   for(var x = 0; x < wordSelected.length; x++) {
		   		wordHold.innerHTML += "<span>-" + "</span>"
		   }
	   
		};
		play(); //runs function
	};	
	 
	
	//key capture
	document.onkeyup = function(event) {

		key = event.key;
		console.log(key);
		console.log("key.code", event.which)
		//prints the user tries only if they are actual letters
		if (letterArray.indexOf(key) > -1){
			used_letters.push(key);
			usedHtml.innerHTML = used_letters;
			//else it gives them the bad letter and and tells them to pick a letter
			}else {
				pickLetter.innerHTML = key + " IS NOT A LETTER";
			};
		

		//confirms if letter is part of choice
		if ((wordSelected.indexOf(key) > -1) && (letterArray.indexOf(key) > -1)){
			console.log("you got a letter");
			counter++;
			console.log(counter)

		//fills in the word to the Spans	
			for (var w = 0;  w < wordSelected.length; w++) {
					wordHold.children[wordSelected.indexOf(key)].innerHTML = key;
			};
	
		}else {
			console.log("You didn't get a letter");
			guessesLeft--;	
			if (guessesLeft > 0) {
				guessHtml.innerHTML = guessesLeft;
			
			}else if (guessesLeft <= 0) {
				gameHtml.innerHTML = "You Lose";
			};	
		};

		//checks to see if the number of counters which is letters right matches the length if so it will prop You win and count one win
		
		if (counter == wordSelected.length){
			wins++;
			winning.innerHTML = "You Win";
		};

	};	

	
}