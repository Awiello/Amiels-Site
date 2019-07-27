const divisionOne = document.querySelector('.divisionOne');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const logo = document.querySelector('#logo');
const profileImage = document.querySelector('.profile-image');
const introTextDiv = document.querySelector('.introTextDiv');
const imageTitleDiv = document.querySelector('.imageTitleDiv');
const fullName = document.querySelector('.fullName');
const jobTitle = document.querySelector('.jobTitle');
const myStatsTitle = document.querySelector('.myStatsTitle');

const tl = new TimelineMax();

tl.fromTo(divisionOne,1, {height: "0%"}, {height:"80%", ease: Power2.easeInOut})
  .fromTo(divisionOne,1.2,{width: "2%"}, {width:"80%", ease: Power2.easeInOut})
  .fromTo(profileImage, 1.2,{x:"-3000%"},{x:"0%", ease: Power4.easeInOut},"-=1.2")
  .fromTo(fullName, 1.4,{x:"-3000%"},{x:"0%", ease: Power4.easeInOut},"-=1.2")
  .fromTo(jobTitle, 1.6,{x:"-3000%"},{x:"0%", ease: Power4.easeInOut},"-=1.2")
  .fromTo(slider, 1.2,{x:"100%"},{x:"0%", ease: Power2.easeInOut},"-=1.2")
  .fromTo(introTextDiv,1.2,{x:"250%"},{x:"0%", ease: Power4.easeInOut},"-=1.2");