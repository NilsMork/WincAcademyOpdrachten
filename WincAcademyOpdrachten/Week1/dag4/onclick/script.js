let content = document.getElementById('content'); // store in sep vars
let button = document.getElementById('show-more');

button.addEventListener('click', function(){ // add event on button

    if(content.className == 'open'){ // if the content name has the name open - shrink the box
        // shrink the box
        content.className = ''; // take away classname open so size from open goes back to perv.
        button.innerHTML = 'show more'; // name when closed
    } else { // if not named content - expand the box
        //expand box
        content.className = 'open';
        button.innerHTML = 'show less'; // namen when open
    }

});