import {api_key, base_url} from "../../utils/constants.js";

import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather =  createAsyncThunk<any, string>(
    'weather/fetchWeather',
    async (city:string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        const data = await response.json()
        return {
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure
        }
    }
)
















//     (city) => {
//     return (dispatch : AppDispatch) => {
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch(setWeather({
//                     city: data.name,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure
//                 }))
//             })
//             .catch(e => {
//                 console.log(e);
//                 dispatch(setWeather({
//                     city: "Enter correct city name",
//                     temp: NaN,
//                     pressure: NaN
//                 }))
//             })
//     }
// }