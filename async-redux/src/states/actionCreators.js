import * as types from "./actionTypes";

const vehicleApi = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json';



export function increment() {
    return {
        type: types.INCREMENT,
    }
}

export function decrement() {
    return {
        type: types.DECREMENT,
    }
}

export function reset() {
    return {
        type: types.RESET,
    }
}