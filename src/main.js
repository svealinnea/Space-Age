import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {UserAge} from './space.js';

$('#space').click(function () { 
  let input = $('#input').val();
  let newAge = new UserAge(input);
  console.log(newAge);
  console.log(newAge.mercury)
  mercury = newAge.mercury
  // let answer = new UserAge(this.jupiter);
  // console.log(answer);
  $('#mercury').text()
});
