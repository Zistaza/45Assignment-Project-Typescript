"use strict";
let myguestlist = ["Kinza", "Sarah", "Parisay", "Kashmala", "Ali"];
let notcoming = myguestlist[4];
console.log(notcoming, "is not coming");
myguestlist.splice(4, 4, "sheryaar");
myguestlist.forEach(guest => console.log(`Assalam Alikum ${guest}, would you like to have iftaar dinner with me today?`));
