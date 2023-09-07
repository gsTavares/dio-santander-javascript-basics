// primitive types

// booleans
let trueOrFalse = false;
console.log(typeof(trueOrFalse));

// number
let anyNumber = 20;
console.log(typeof(anyNumber));

// string
let name = "Gustavo";
console.log(typeof(name));

// how to declare variables (if you don't initialize, them they will be null)

// var
var globalName = "Gustavo";
globalName = "Gabriel";
console.log(globalName);

// let
let var2 = "X";
var2 = "|";
console.log(var2);

// const (must be initialized)
const myConstant = 10;

// scopes
var globalScopeVar = "visible anywhere";

function localScope() {
    let localScopeVar = "visible here only";
    console.log(localScopeVar);
}

localScope();

// attribution
let att = "xyz";

// comparison (== and ===)
// == compares only the values
let toCompare = "0" == 0; // this is true

// === compares values and types
let toCompareWithType = "0" === 0; // this is false

// arithmetic operators
let sum = 2 + 2;
let subtraction = 2 - 2;
let product = 2 * 2;
let division = 2 / 2;
let power = 2 ** 2;
let rest = 5 % 2;

// relational operators
let greaterThan = 5 > 2;
let greaterOrEqualThan = 5 >= 2;
let lessThan = 5 < 2;
let lessOrEqualThan = 5 <= 2;

// logical operators
let and = true && false; // this is false;
let or = true || false; // this is true;
let not = !true; // this is false;
