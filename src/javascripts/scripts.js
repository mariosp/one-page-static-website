// Load jQuery from NPM
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { changeHomeSliderBodyText } from './shared/slider';

window.jQuery = $;
window.$ = $;

(function init() {
  changeHomeSliderBodyText(0);
  $('#home-slider').on('slid.bs.carousel', ({ to }) => {
    changeHomeSliderBodyText(to);
  });
}());

$(document).on('submit', '#formContactMe', (event) => {
  event.preventDefault();
  if (event.target[0].value === '') {
    $("input[name='Name']").select();
  } else if (event.target[1].value === '') {
    $("input[name='Email']").select();
  } else if (event.target[2].value === '') {
    $("input[name='Message']").select();
  } else {
    alert(
      `Name: ${event.target[0].value}
       Email: ${event.target[1].value}
       Message: ${event.target[2].value}`
    );
    $('#formContactMe')[0].reset();
  }
  return false;
});
