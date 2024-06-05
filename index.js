function receivesAFunction(callback) {
    callback()
}
// longer version is: function receivesAFunction(callback) {
                        //const name = "Matteo"
                       // callback(name)

returnsANamedFunction()()
function returnsANamedFunction() {
    return function returnsANewlyNamedFunction(){
        console.log()
    }
}
// recursion - invoking a function inside itself
    
const returnsAnAnonymousFunction = () => (() => {})
// we used an arrow function expression
// we gave the indicated name to the variable and no name to the function after the = sign.
// why? b/c the first name is sufficient
// at the right of the arrow => we did create ANOTHER ANNONYMOUS ARROW FUNCTION
// the new inner function doesn't do anything