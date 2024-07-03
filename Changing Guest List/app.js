var myguestlist = ["Kinza", "Sarah", "Parisay", "Kashmala", "Ali"];
var notcoming = myguestlist[4];
console.log(notcoming, "is not coming");
myguestlist.splice(4, 4, "sheryaar");
myguestlist.forEach(function (guest) { return console.log("Assalam Alikum ".concat(guest, ", would you like to have iftaar dinner with me today?")); });
