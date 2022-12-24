function callback(){

}
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log("Hello world, I am rawan!")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello Re:Coded, I am rawan!")
    }
}