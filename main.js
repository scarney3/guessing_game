'use strict';

var Game = function(question, answer) {
  this.question = question;
  this.answer = answer;

  this.play = function() {
    this.guess = prompt(question);
    if (this.guess === answer) {
     var gameSays = document.getElementById('game-says');
gameSays.innerHTML = 'Correct!';
    } else {
      var gameSays = document.getElementById('game-says');
gameSays.innerHTML = 'Incorrect!';
    }
  };
};

var game1 = new Game('What is the capital of Vermont? a, Montpelier, b, Atlanta, c Montreal', 'a');
var game2 = new Game('What is the capital of Washington? a, Ontario, b, New York, c, Olympia', 'c');

game1.play();
game2.play();
