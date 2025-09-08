import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";

type Status = "idle" | "loading" | "succeeded" | "failed";
interface WeatherState {
    status : Status;
    city: string;
    temp: number | null;
    pressure: number | null;

}

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
   //   setWeather: (state, action) =>  action.payload

    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.city = action.payload?.name ?? "";
                state.temp = action.payload?.main?.temp ?? null;
                state.pressure = action.payload?.main?.pressure ?? null;
            });
    }
})

export default weatherSlice.reducer;