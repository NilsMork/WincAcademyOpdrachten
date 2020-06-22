const age = 26;
const isFemale = true;
const driverStatus = "bob";
const name = 'Morki';
const totalAmount = 624;

if (age >= 18){

    console.log('Gefeliciteerd, je mag naar binnen!');

} else{
    console.log('Jammer, je moet nog even wachten tot je oud genoeg bent');
}

if (isFemale){

    console.log('welkom');

} else{

    console.log('Jammer! dit is alleen voor vrouwen.');
}

if (driverStatus){

    console.log('Je mag rijden');

} else{
    console.log('Helaas, je mag niet rijden.')
}

if (age >= 18 && age <= 25){

    console.log('Je krijgt er ook nog 50% korting bij!');

} else {
    
    console.log('je bent gewoon welkom');
}

if (name === 'Nils' || name === 'Mork'){

    console.log('Gefeli, je krijgt een gratis bietje');

} else {

    console.log('hopelijk heb je contant geld mee?');
}

if (totalAmount >= 25 && totalAmount < 50){

    console.log('Gefeliciteerd je kijgt een gratis portie bitterballen!');

} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log('Gefeliciteerd je kijgt een gratis portie nachooooooossss!');
    
} else if (totalAmount >= 100){

    console.log('Gefeliciteerd je kijgt een gratis portie flesje champagneeee! woohoooo!!');

} else {
    console.log('Bestel je voor meer dan 25 euro aan drankjes?')
    console.log('Dan krijg je gratis bitterballen.')
    console.log('Bestel je voor meer dan 50 euro aan drankjes?')
    console.log('Dan krijg je gratis portie nachos.')
    console.log('Bestel voor 100 euro of meer?')
    console.log('Dan krijg je een gratis flesje champagne.')
}