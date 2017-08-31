(function() {
  'use strict';

  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let stopLight = document.getElementById('stopLight');

  let slowButton = document.getElementById('slowButton');
  let slowLight = document.getElementById('slowLight');

  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight');

  stopButton.addEventListener('click', function() {
    if (stopLight.style.backgroundColor !== 'red') {
      stopLight.style.backgroundColor = 'red';
    } else {
      stopLight.style.backgroundColor = 'black';
    }
  })

  slowButton.addEventListener('click',function() {
    if (slowLight.style.backgroundColor !== 'orange') {
      slowLight.style.backgroundColor = 'orange';
    } else {
      slowLight.style.backgroundColor = 'black';
    }
  })

  goButton.addEventListener('click', function() {
    if (goLight.style.backgroundColor !== 'green') {
      goLight.style.backgroundColor = 'green';
    } else {
      goLight.style.backgroundColor = 'black';
    }
  })


})();


// let domh3 = document.getElementById('hello');
//
// domh3.addEventListener("click", function(){
//   domh3.style.color = "red";
// })


// First way to do it
// let text = document.getElementById('h3text');
//
//
// function keydownText(e){
//   if(e.keyCode == 32){
//     text.style.fontSize = "32px";
//   }
// }
//
// function keyupText(e){
//   if(e.keyCode == 32){
//     text.style.fontSize = "18px";
//   }
// }
//
//
// document.body.addEventListener('keydown', keydownText)
// document.body.addEventListener('keyup', keyupText)
