// eslint-disable-next-line import/prefer-default-export
const sliderData = [
  {
    top: 'Lorem Ipsum dolor sout asmkg',
    header: 'INCIDIDUNT BORE',
    bottom: 'Lorem dolor sout Ipsum asmkg',
    btn: 'KNOW MORE',
  },
  {
    top: 'Lorem Ipsum dolor sout asmkg',
    header: 'INCIDIDUNT BORE 2',
    bottom: 'Lorem dolor sout Ipsum asmkg',
    btn: 'KNOW MORE 2',
  },
  {
    top: 'Lorem Ipsum dolor sout asmkg',
    header: 'INCIDIDUNT BORE 3',
    bottom: 'Lorem dolor sout Ipsum asmkg',
    btn: 'KNOW MORE 3',
  },
];


// eslint-disable-next-line import/prefer-default-export
export function changeHomeSliderBodyText(index) {
  // eslint-disable-next-line no-undef
  $('.body-top-text').text(sliderData[index].top);
  // eslint-disable-next-line no-undef
  $('.body-head-text').text(sliderData[index].header);
  // eslint-disable-next-line no-undef
  $('.body-bottom-text').text(sliderData[index].bottom);
  // eslint-disable-next-line no-undef
  $('.body-button').text(sliderData[index].btn);
}
