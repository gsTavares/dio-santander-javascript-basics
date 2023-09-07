// arrays and objects
let arr = ["string", 1, true];
console.log(arr);

let arr2 = ["string", 10, ["one"], ["two", "three"]];
console.log(arr2);

// accessing arrays (index starts from 0)
console.log(arr2[0]);

// array methods

// forEach
arr2.forEach((item, index) => console.log(item, index));

// push (add item in the end)
arr2.push("new item!!");
console.log(arr2);

// pop (remove the last item and return it)
let removedItem = arr2.pop();
console.log("removed item was:", removedItem);
console.log(arr2);

// shift (remove the first item and return it)
let removedFromBeginning = arr2.shift();
console.log("removed item was: ", removedFromBeginning);
console.log(arr2);

// unshift (add in the beginning)
arr2.unshift("new item in beginning!!");
console.log(arr2);

// indexOf (return the item index)
console.log(arr2.indexOf(10));

// splice (delete itens from start index to end index (exclusive))
// arr2.splice(0, 3);
// console.log(arr2);

// slice (returns a part of an array)
let newArray = arr2.slice(0, 3);
console.log(newArray);

// objects
let obj = {
    string: "string",
    number: 1,
    boolean: true,
    array: ["array"],
    object: {
        internal: "internal"
    }
}

console.log(obj.object.internal)

// desestructuring
let { string, number } = obj;
console.log(string, number);