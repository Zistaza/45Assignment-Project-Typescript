"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufactruer, model, ...options) {
    const create_car = Object.assign({ manufactruer,
        model }, Object.assign({}, ...options));
    return create_car;
}
;
let variables = create_car("Honda", "Suzuki", { color: "Red" }, { features: ["navigation", "power window", "sunroof"] });
console.log(variables);
