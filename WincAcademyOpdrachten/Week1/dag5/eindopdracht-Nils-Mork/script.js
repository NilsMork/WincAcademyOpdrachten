  const menu = document.querySelector('.menu');
  console.log(menu);
  const menuToggle = document.querySelector('.menuToggle');
  console.log(menuToggle);
  
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

const btn = document.querySelectorAll('.menu ul li');
console.log(btn);
for (let i = 0; i < btn.length; i++) {
  btn[0].addEventListener('click', function() {
    background[0].style.backgroundColor = "lightgray";
    menu.style.display = 'none';
  });
  btn[1].addEventListener('click', function() {
    background[0].style.backgroundColor = "lightpink";
    menu.style.display = 'none';
    
  });
  btn[2].addEventListener('click', function() {
    background[0].style.backgroundColor = "lightseagreen";
    menu.style.display = 'none';
  });
  btn[3].addEventListener('click', function() {
    background[0].style.backgroundColor = "lightskyblue"
    menu.style.display = 'none';
  });
}