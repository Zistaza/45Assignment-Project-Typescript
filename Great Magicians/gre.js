"use strict";
let magicians = ["David Copperfield", "David Blaine", "Harry Houdini", "Derren Brown"];
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
make_great(magicians);
show_magician(magicians);
