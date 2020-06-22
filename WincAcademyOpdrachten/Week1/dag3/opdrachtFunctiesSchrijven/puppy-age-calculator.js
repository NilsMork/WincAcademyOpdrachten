const calculateDogAge = (age) => {
    let dogYears = 7 * age;
    return dogYears;
}
console.log('your dog is: ' + calculateDogAge(4) + 'year old.')


const tellFortune = (numKids, namePart, location, job) => {
    let future = 'you will be a ' + job + ' in ' + location + ' maried with ' + namePart + ' and yous will have ' + numKids + ' kids.';
    return future;
}
console.log(tellFortune(1, 'yo', 'NL', 'designer'))
console.log(tellFortune(3, 'meadhbh', 'Ireland', 'Designer'))