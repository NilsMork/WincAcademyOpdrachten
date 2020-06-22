

const wrap = document.querySelector('#wrapper');
//console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name'); // 1 spantag
//console.log(wmf);

let books = document.querySelector('#book-list li .name'); //query altijd 1 element, dus in dit geval niet de 4 spans
//console.log(books)

books = document.querySelectorAll('#book-list li .name'); // nu selecteert ie alle elementen
//console.log(books);

Array.from(books).forEach(function(book){ //maken van nieuw array 'book'
    console.log(book); // array staat in 'book'
});// belangrijk is dat dit op het eind staat