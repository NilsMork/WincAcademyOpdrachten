let titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles)); // check if titles are array, should say false
// console.log(Array.isArray(Array.from(titles))) // change false array into true array


Array.from(titles).forEach(function(item){
    console.log(item);
})