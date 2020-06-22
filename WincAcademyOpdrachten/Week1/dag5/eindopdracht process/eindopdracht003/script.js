  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menuToggle');

  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();

    if (window.getComputedStyle(menu).display === 'block') {
      menu.style.display = 'none';
    } else  {
      menu.style.display = 'block';
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
const background = document.getElementsByClassName('gray-background');
console.log(background);

const pink = document.querySelector('.pink-background');

btnHome.addEventListener('click', function(){
  background[0].style.backgroundColor = "lightgray"; // Change color on click
})
btnPink.addEventListener('click', function(){
    background[0].getComputedStyle(pink).display === 'lightpink'; // Change color on click
})
btnGreen.addEventListener('click', function(){
  background[0].css('pink-background');
})
btnBlue.addEventListener('click', function(){
  background[0].style.backgroundColor = "lightskyblue"; // Change color on click
})

.css("background-color", colors[i]);