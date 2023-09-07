// if/else/else if
let player1 = 0;
let player2 = 1;
let score;

player1 !== -1 && player2 !== -1 ? console.log("valid players") : console.log("invalid players");

if (player1 > 0 && player2 == 0) {
    console.log("player 1 score!");
    score = player1 > player2;
} else if (player2 > 0 && player1 == 0) {
    console.log("player 2 score!");
    score = player2 > player1;
} else {
    console.log("No one score!");
}

// switch
switch(score) {
    case score = player1 > player2:
        console.log("player 1 wins");
        break;
    case score = player2 > player1:
        console.log("player 2 wins");
        break;
    default: 
        console.log("draw");
}

// loops
let arr = ["value1", "value2", "value3", "value4", "value5"];
let obj = {
    prop1: "v1",
    prop2: "v2",
    prop3: "v3"
}

// for
for(let i = 0; i < arr.length; i++) {
    console.log(i);
}

// prints all index as string
for(i in arr) {
    console.log(i);
}

// print all property names
for(i in obj) {
    console.log(i);
}

// print each value of array
for(i of arr) {
    console.log(i)
}

// while
let a = 0;
while(a < 10) {
    a++;
    console.log(a);
}

// do while
a = 0;
do {
    a++;
    console.log(a);
} while(a < 10)