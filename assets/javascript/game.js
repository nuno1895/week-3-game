

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
var pageReload =document.getElementById("pageReload")
var play;
var counter = 0;
var winning =document.getElementById("youWin");
var pickLetter =document.getElementById("pickLetter");
var images =document.getElementById("images")
var deley;
var letterArray = ["a", "b" ,"c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t", "u", "v", "w", "x", "y", "z" ];
			

//on page load

window.onload = function(){

	//displays wins and guess

	guessHtml.innerHTML = guessesLeft
	winsHtml.innerHTML = wins


	startButton.onclick =function(){

	//computer selects word & category
		playGame = function () {
			counter = 0;
			used_letters = [];
			winning.innerHTML ="";
			images.innerHTML="";
			
			//object name of topic and array
		   topics = {
		       "DC Comics": ["Superman", "Robin", "Batman", "Aquaman", "Supergirl", "Flash", "Joker"],
		       "Marvel Comics": ["Daredevil", "Thor", "Wolverine", "Spiderman"],
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
		   wordHold.innerHTML = '';

		   //creates empty letter space for word based on length
		   for(var x = 0; x < wordSelected.length; x++) {
		   		wordHold.innerHTML += "<span>-" + "</span>"
		   };

		   //Selects picture
	
		   if (catergory == "Big Bang Theory"){
		   	var img = document.createElement("img");
			img.src = "assets/images/bigbanner.jpg";
			images.appendChild(img);
			}else if (catergory == "DC Comics"){
		  	img = document.createElement("img");
			img.src = "assets/images/dc.jpg";
			images.appendChild(img);
			}else if (catergory == "Game of Thrones"){
		  	img = document.createElement("img");
			img.src = "assets/images/game.jpg";
			images.appendChild(img);
			}else if (catergory == "Marvel Comics"){
		  	img = document.createElement("img");
			img.src = "assets/images/marvel.png";
			images.appendChild(img);
			};
		};
		playGame(); //runs function
	};	
	 
	
	//key capture
	document.onkeyup = function(event) {

		key = event.key;
		console.log(key);


		//confirms if letter is part of choice
		if ((wordSelected.indexOf(key) > -1) && (letterArray.indexOf(key) > -1)){
			console.log("you got a letter");

		//fills in the word to the Spans	

			for(var w = 0; w < wordSelected.length; w++) {
	            if(wordSelected[w].indexOf(key) != -1) {
	                wordHold.children[w].innerHTML = key;

	                //counter counts same key over and over again and you win if it is a letter in the work
			                counter++;  
			                console.log(counter); 
	            	};
	     		};	
					
		}else if (letterArray.indexOf(key) > -1) {
			console.log("You didn't get a letter");
			used_letters.push(key);
			
			
			//Broken area does not count dulipcate keys
				if (used_letters.indexOf(key) != - 1){
				usedHtml.innerHTML = used_letters;	
				guessesLeft--;
				};	
				


			if (guessesLeft > 0) {
				guessHtml.innerHTML = guessesLeft;
			
			}else if (guessesLeft <= 0) {
				gameHtml.innerHTML = "You Lose";
				var murloc = new Audio("assets/audio/murloc.mp3");
				murloc.play();

				delay=2000; //1.5 seconds

				setTimeout(function() {
				  window.location.reload();
				}, delay);
			};
			
		};

		//checks to see if the number of counters which is letters right matches the length if so it will prop You win and count one win
		
		if (counter == wordSelected.length){
			wins++;
			document.querySelector("#wins").innerHTML = wins
			winning.innerHTML = "You Win";
			var bazinga = new Audio("assets/audio/bazinga.mp3");
				bazinga.play();
			guessesLeft.innerHTML = 8;	
			delay=1500; //1.5 seconds

			setTimeout(function() {
			  playGame();
			}, delay);

		if (wins == 5) {
		document.querySelector("#wins").innerHTML = wins
			winning.innerHTML = "BIG NERD!!!!!";
			var nerd = new Audio("assets/audio/nerd.mp3");
				nerd.play();	
			delay=4000; //4 seconds

			setTimeout(function() {
			  window.location.reload();
			}, delay);
		};	
			
		};

		

	};	

	
		
};

