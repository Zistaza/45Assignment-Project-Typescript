//lowercase

let personName = "Zeenat";
console.log(personName.toLowerCase());

//uppercase

console.log(personName.toUpperCase());

//titlecase

console.log(personName.replace(/\bw/g,c => c.toUpperCase()));