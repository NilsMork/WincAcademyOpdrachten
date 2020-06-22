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

const background = document.getElementsByClassName('background');
console.log(background);

let btn = document.querySelectorAll('.menu ul li');
console.log(btn);
for (let i = 0; i < btn.length; i++) {
  btn[0].addEventListener('click', function() {
    background[0].style.backgroundColor = "lightgray";
  });
  btn[1].addEventListener('click', function() {
    background[0].className= "pink";
  });
}