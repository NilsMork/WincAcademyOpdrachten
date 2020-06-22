  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menuToggle');

  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();

    if (window.getComputedStyle(menu).display === 'none') {
      menu.style.display = 'block';
    } else  {
      menu.style.display = 'none';
    }
  });

const btnHome = document.getElementById('home');
console.log(btnHome);
const btnPink = document.getElementById('pink');
console.log(btnPink);
const btnGreen = document.getElementById('green');
console.log(btnGreen);
const btnBlue = document.getElementById('blue');
console.log(btnBlue);
const background = document.getElementsByClassName('background');
console.log(background);

btnHome.addEventListener('click', function(){
  background[0].style.backgroundColor = "lightgray"; // Change color on click
  menu.style.display = 'none';

})
btnPink.addEventListener('click', function(){
    background[0].style.backgroundColor = "lightpink"; // Change color on click
    menu.style.display = 'none';
})
btnGreen.addEventListener('click', function(){
  background[0].style.backgroundColor = "lightseagreen"; // Change color on click
  menu.style.display = 'none';
})
btnBlue.addEventListener('click', function(){
  background[0].style.backgroundColor = "lightskyblue"; // Change color on click
  menu.style.display = 'none';
})



