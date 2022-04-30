// function outer() {
//     let movie = 'Hulk';

//     function inner() {
//         // let movie = 'Kabadi';

//         console.log(movie.toUpperCase());
//     }
//     inner();
// }
// outer();

//function as argument
function callMe(func) {
    func();
    func();
    func();
}

function passMe() {
    console.log('I am passed.');
}

function alsoMe() {
    console.log('I am also passed.');
}