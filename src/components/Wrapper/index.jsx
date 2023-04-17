import './index.css';
import { useState, useEffect } from 'react';
import { fetchApi } from '../../api/fetchApi';
// import WrapperNow from '../WrapperNow';
// import Searchbar from '../Searchbar';

const Wrapper = () => {
    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await fetchApi('Paris');
                setDatas(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(datas);


    const date = new Date();
    const options = { weekday: 'long', hour: 'numeric', hour12: false, minute: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);


    // const iconWeather = (imgCode) => `http://openweathermap.org/img/w/${imgCode}.png`;

    return (
        <>
            <section className="wrapper">
                {error ? <p>{error.message}</p> :
                    isLoading ? <p className='loader'>Loading...</p> :
                        datas && (
                            <ul className='all-temp'>
                                <li className='main-temp'>
                                    <p>{datas.name}</p>
                                    <p>{formattedDate}</p>
                                    <p className='temp'>
                                        {datas.main.temp}</p>
                                </li>
                                {/* {datas.hourly.map((hour, index) => (
                                    <li key={index}>
                                    <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p>Chance of Rain: {hour.pop}%</p>
                                    </li>
                                ))} */}
                                <li>
                                    {/* <img src={iconWeather(datas.weather.icon)} alt="" /> */}
                                    <p>8h</p>
                                    <p>nuageicon</p>
                                    <p>13°C</p>
                                </li>
                                
                            </ul>
                        )}
            </section>
            {/* <WrapperNow data={datas} /> */}
        </>
    )
}

export default Wrapper;