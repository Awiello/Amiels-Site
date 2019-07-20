const divisionOne = document.querySelector('.divisionOne');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const logo = document.querySelector("#logo");


const tl = new TimelineMax();

tl.fromTo(divisionOne,1, {height: "0%"}, {height:"80%", ease: Power2.easeInOut})
  .fromTo(divisionOne,1.2,{width: "80%"}, {width:"80%", ease: Power2.easeInOut})
  .fromTo(slider, 1.2,{x:"-100%"},{x:"0%", ease: Power2.easeInOut},"-=1.2");