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

  stopButton.addEventListener('mouseenter', function (){
    console.log('Entered STOP Button');
  })

  stopButton.addEventListener('mouseleave', function () {
    console.log('Left STOP Button');
  })

  slowButton.addEventListener('mouseenter', function (){
    console.log('Entered SLOW Button');
  })

  slowButton.addEventListener('mouseleave', function () {
    console.log('Left SLOW Button');
  })

  goButton.addEventListener('mouseenter', function (){
    console.log('Entered GO Button');
  })

  goButton.addEventListener('mouseleave', function () {
    console.log('Left GO Button');
  })

})();
