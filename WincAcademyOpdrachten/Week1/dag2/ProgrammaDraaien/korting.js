const totalAmount = 624;

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