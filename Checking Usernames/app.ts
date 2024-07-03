let current_users = ["Ferry" , "shah" , "Sikandar" , "Sajid" , "Sameer" , "Sahir"];
let new_users = ["Jerry" , "Shah" , "Salma" , "Zahid" , "Ferry" , "Fajar"];

//loop through
new_users.forEach(new_one_user => {
    let my_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(my_condition){
console.log(`sorry ${new_one_user} is already taken!`);
  }
  else{
    console.log(`This username ${new_one_user} is available!`);
  }
})