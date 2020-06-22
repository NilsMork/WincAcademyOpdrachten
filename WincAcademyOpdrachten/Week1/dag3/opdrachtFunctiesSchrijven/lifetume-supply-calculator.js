const calculateSupply = function(age, amountPerDay){
    const maxAge = 100;
    let totalNeeded = (amountPerDay * 365) * (maxAge - age);
    const neeDed = 'You will need ' + totalNeeded + 'coffees a year';
    return totalNeeded, neeDed;
}
console.log(calculateSupply(30,4));