import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const data = useAppSelector(state => state.weather);
    return (
        <div className={'infoWeath'}>
            <p>Location: {data.city}</p>
            <p>Temp: {data.temp}</p>
            <p>Pressure: {data.pressure}</p>
        </div>
    );
};


export default Weather;
