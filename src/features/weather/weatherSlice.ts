import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";
import type {WeatherState} from "../../utils/types";



const initialState: WeatherState = {
    status: "idle",
    city: "",
    temp: null,
    pressure: null,

};



const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },


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
//     extraReducers : (builder) => {
//         builder
//             .addCase(fetchWeather.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchWeather.rejected, (state) => {
//                 state.status = "failed";
//             })
//             .addCase(fetchWeather.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.city = action.payload?.name ?? "";
//                 state.temp = action.payload?.main?.temp ?? null;
//                 state.pressure = action.payload?.main?.pressure ?? null;
//             });
//     }e
//
extraReducers : (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.status = "failed";
                state.city = "Ënter city name";
                state.temp= NaN;
                state.pressure = NaN;

            })
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload);
    }
})

export default weatherSlice.reducer;