const person = {
    name: 'Nils',
    age: 30,
    elevations: [7, 10, 9]
};

person.name = 'Mork';

person['name'] = 'Peter';


console.log(person); // alles
console.log(person.name) // alleen naam
console.log(person.age) // alleen age
console.log(person.elevations);


const colors = ['pink', 'green', 'red'];
colors.push('yellow');
colors.push(9);
colors.push({greeting: "hi ik ben een object"});

console.log(colors); // alles
console.log(colors.length) //objects
console.log(colors[0]); // only pink
console.log(colors[2]); // only red
console.log(colors[5]); // object only