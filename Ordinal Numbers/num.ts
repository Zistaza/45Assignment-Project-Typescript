let numbers = [1,2,3,4,5,6,7,8,9];

for(let numb of numbers){
    let ordinalEnding: string;

    if(numb === 1){
        ordinalEnding = "st"
    }
    else if(numb === 2){ 
        ordinalEnding = "nd"
}
    else if(numb === 3){ 
        ordinalEnding = "rd"
}
else 
{ordinalEnding = "th"
}

    console.log(`${numb}${ordinalEnding}`);
}
