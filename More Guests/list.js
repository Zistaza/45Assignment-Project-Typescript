"use strict";
let myguestlist = ["Kinza", "Sarah", "Parisay", "Kashmala", "Ali"];
let notcoming = myguestlist[4];
console.log(notcoming, "is not coming");
myguestlist.splice(4, 4, "sheryaar");
console.log("Here is a Good News ! We have found  bigger table for iftaar dinner.");
//adding a new value at starting array index
myguestlist.unshift("Waleed");
//adding a new value at middle array index
let middleindex = Math.floor(myguestlist.length / 2);
myguestlist.splice(middleindex, 0, "Hajra");
//adding a new value at ending array index
myguestlist.push("Rubab");
//printing modifying guestlist
console.log("Here is my updated list of guest");
myguestlist.forEach(oneguest => console.log(`Assalam Alikum ${oneguest}, would you like to have ifaar dinner with me today?`));
