//array of printing original order
let placestovisit: string[] = ["Dubai" , "Middle East" , "Italy" , "Eygpt"];
console.log("Originl order:", placestovisit);

//now printing the in alphabetical order without modifying the originl order
console.log("Alphabetical order:", [...placestovisit].sort());

//showing that array is still in its original order
console.log("it is still in originl order:", placestovisit);

//now printing the reversed order array without modifying the original array order
console.log("Reversed order:", [...placestovisit].reverse());

//showing that array is still in its original order
console.log("it is still in original order:", placestovisit);

//here now we have changed the original array order
console.log("Reversed the original array:", placestovisit.reverse());

//now printing the array for showing that it is back again to its original order
console.log("it is back again to its original order:", placestovisit.reverse());

//printing the array for showing that its order now changed in alphabetical order
console.log("sorted to alphabetical order:", placestovisit.sort());

//now again changed original array to reverse order
console.log("reversed the original array again:", placestovisit.reverse());