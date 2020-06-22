const bookList = document.querySelector('#book-list');

console.log('the parent node is:',bookList.parentNode); // pakt een referentie naar de parent node van book-list.
console.log('the parent node is:',bookList.parentElement); // doet exact hetzelfde
console.log('the parent node is:',bookList.parentElement.parentElement); // pakt de parent van de parent. komt uit op body

console.log(bookList.childNodes); // geeft alle child nodes. maar geeft ook line breaks mee
console.log(bookList.children); // geeft alleen de element children