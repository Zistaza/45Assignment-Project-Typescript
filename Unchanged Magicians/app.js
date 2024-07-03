"use strict";
let magicians = ["David Copperfield", "David Blaine", "Harry Houdini", "Derren Brown"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansArray) {
    //by using forloop
    for (let i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magiciansArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagiciansArray = copyArray(magicians);
make_great(copyMagiciansArray);
console.log("\n\nOriginal Array:");
show_magician(magicians);
console.log("\n\nModified Copy Array:");
show_magician(copyMagiciansArray);
