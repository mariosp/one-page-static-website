// Load jQuery from NPM
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.jQuery = $;
window.$ = $;


$('#home-slider').on('slid.bs.carousel', () => {
  console.log('TRANSITION END');
});
