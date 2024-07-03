let magicians: string[] = ["David Copperfield" , "David Blaine" , "Harry Houdini" , "Derren Brown"];

function show_magician(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magician(magicians);