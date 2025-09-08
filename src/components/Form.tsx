import {useState} from "react";
import {fetchWeather} from "../features/api/fetchWeather.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const q = city.trim();
        if (!q) return;               // не шлём пустоту
        dispatch(fetchWeather(q));    // полетели за погодой
        setCity("");
    };
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={getCity}>
            <input type={'text'} placeholder='City' value={city} onChange={handleChange}/>
            <button type='submit'>Get weather</button>
        </form>
    );
};


export default Form;
