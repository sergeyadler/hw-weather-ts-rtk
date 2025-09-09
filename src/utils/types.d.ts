type Status = "idle" | "loading" | "succeeded" | "failed";
export interface WeatherState {
    status : Status;
    city: string;
    temp: number | null;
    pressure: number | null;

}