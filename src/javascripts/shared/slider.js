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


export function changeHomeSliderBodyText(index) {
  $('.body-top-text').text(sliderData[index].top);
  $('.body-head-text').text(sliderData[index].header);
  $('.body-bottom-text').text(sliderData[index].bottom);
  $('.body-button').text(sliderData[index].btn);
}
