import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {UserAge} from './space.js';

$('#space').submit(function () {
  event.preventDefault();
  let input = $('#input').val();
  let newAge = new UserAge(input);
  console.log(newAge);
  let jupiter = newAge.jupiter;
  let mercury = newAge.mercury;
  let mars = newAge.mars;
  let venus = newAge.venus;
  $('#responses').append(`Your age on Mercury is: ${mercury}, Your age on Jupiter is: ${jupiter}, Your age on Venus is: ${venus}, Your age on Mars is ${mars}`);
});
