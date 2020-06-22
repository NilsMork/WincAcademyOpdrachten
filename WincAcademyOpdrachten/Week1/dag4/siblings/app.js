const bookList = document.querySelector('#book-list');

console.log('#book-list next sibling:', bookList.nextSibling); // laat ook weer line breaks zien

console.log('#book-list next sibling:', bookList.nextElementSibling); // nu alleen de siblings

console.log('#book-list previous sibling:', bookList.previousSibling); // laat ook weer line breaks zien

console.log('#book-list previous sibling:', bookList.previousElementSibling); 


bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool'
// specificly go into header and change the p stored in header