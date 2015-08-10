'use strict';

var Game = function(question, answer) {
  this.question = question;
  this.answer = answer;

  this.play = function() {
    this.guess = prompt(question);
    if (this.guess === answer) {
      message = 'Correct!';
    } else {
      message = 'Incorrect!';
    }
  };
};

var game1 = new Game('What is the capital of Vermont? a, Montpelier, b, Atlanta, c Montreal', 'a');
var game2 = new Game('What is the capital of Washington? a, Ontario, b, New York, c, Olympia', 'c');

game1.play();
game2.play();

var gameSays = document.getElementById('game-says');
gameSays.innerHTML = message;

// Idea; include multiple game instances so that users can play against friends to see who can get the best score. Highest to lowest score, along with the user's name will be displayed in list form, or in a table.
// Also, change the answer input method from the user to radio buttons instead of alerts for a more appropriate looking multiple choice format. -->
