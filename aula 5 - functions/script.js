// functions

function myFunction() {
    console.log("do something");
}

myFunction();

let f = function() {
    console.log("function as expression");
};

f();

const arrowFunction = () => {
    console.log("arrow function");
}

arrowFunction();

const withParams = (message1, message2) => {
    console.log(message1, message1);
}

withParams("Hello", "World!");