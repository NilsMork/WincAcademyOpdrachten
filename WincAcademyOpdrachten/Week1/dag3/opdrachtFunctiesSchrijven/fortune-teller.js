// const tellFortune = function(numberOfChildren, partnersName, location, jobTitle){
//     return numberOfChildren, partnersName, location, jobTitle;
    
// }
// console.log(tellfortune);

const tellFortune = (numKids, namePart, location, job) => {
    let future = 'you will be a ' + job + ' in ' + location + ' maried with ' + namePart + ' and yous will have ' + numKids + ' kids.';
    return future;
}
console.log(tellFortune(1, 'yo', 'NL', 'designer'))
console.log(tellFortune(3, 'meadhbh', 'Ireland', 'Designer'))