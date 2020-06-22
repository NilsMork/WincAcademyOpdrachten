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
const btnPink = document.getElementById('pink');
const btnGreen = document.getElementById('green');
const btnBlue = document.getElementById('blue');


btnHome.addEventListener('click', function(){
    alert('Home');
})
btnPink.addEventListener('click', function(){
    alert('Pink');
})
btnGreen.addEventListener('click', function(){
    alert('Green');
})
btnBlue.addEventListener('click', function(){
    alert('Blue');
})