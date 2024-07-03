import { features } from "process";

function create_car(manufactruer: string, model: string, ...options: {[key : string]: any} [] ) : object {

    const create_car = {

manufactruer,
model,
...Object.assign({}, ...options)
}

 return create_car;

};


let variables = create_car("Honda" , "Suzuki" , {color: "Red"} , {features: ["navigation" , "power window" , "sunroof"]})

console.log(variables);
