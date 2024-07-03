var myguestlist = ["Kinza", "Sarah", "Parisay", "Kashmala", "Ali"];
var notcoming = myguestlist[4];
//console.log(notcoming, "is not coming");
myguestlist.splice(4, 4, "sheryaar");
//console.log("Here is a Good News ! We have found  bigger table for iftaar dinner.");
//adding a new value at starting array index
myguestlist.unshift("Waleed");
//adding a new value at middle array index
var middleindex = Math.floor(myguestlist.length / 2);
myguestlist.splice(middleindex, 0, "Hajra");
//adding a new value at ending array index
myguestlist.push("Rubab");
//printing modifying guestlist
//onsole.log("Here is my updated list of guest");
//myguestlist.forEach(oneguest => console.log(`Assalam Alikum ${oneguest}, would you like to have ifaar dinner with me today?`));
//informoing for shrinking guest list
//console.log("I am really sorry to inform you all that the dinner table wont arrive on time,so i will be able to invite only two guests on today iftaar dinner with me");
//removedguest using while loop
while (myguestlist.length > 2) {
    var guestremoved = myguestlist.pop();
    //console.log(`I am really sorry, ${guestremoved} I cant invite you to iftaar dinner`);
}
//still invitation function
//console.log("Invitation to my two remaining guests");
//myguestlist.forEach(remainingtwo => console.log(`hey guys ${remainingtwo}, you both are still invited to iftr dinner`));
//last two guests also removed
myguestlist.pop();
myguestlist.pop();
//console.log("EmptyList:",myguestlist);
var lengthofguest = myguestlist.length;
console.log("I am inviting total ".concat(lengthofguest, " guests."));
