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
