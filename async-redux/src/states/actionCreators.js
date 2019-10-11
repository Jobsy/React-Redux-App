import axios from 'axios';
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


export const getVehicle = () => dispatch => {

  const vehiclePromise = axios.get(vehicleApi)

  Promise.all([vehiclePromise])
    .then(([vehiclePromiseResponse]) => {
      const vehicles = vehiclePromiseResponse.data;

      console.log("/////: ", vehicles)
      dispatch(vehicles);

    })
};