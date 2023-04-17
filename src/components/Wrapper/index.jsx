import './index.css';
import { useState, useEffect } from 'react';
import { fetchApi } from '../../api/fetchApi';

const Wrapper = () => {
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await fetchApi('Tokyo');
                setDatas(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);



    return (
        <section className="wrapper">
        {error ? <p>{error.message}</p> :
        isLoading ? <p className='loader'>Loading...</p> :
            datas && (
                    <ul className='all-temp'>
                        <li className='main-temp'>
                            <p>{datas.name}</p>
                            <p>Sunday 07:09</p>
                            <p className='temp'>
                                {datas.temp}</p>
                        </li>
                        <li><p>8h</p><p>nuageicon</p><p>13°C</p></li>
                <li><p>9h</p><p>nuageicon</p><p>13°C</p></li>
                <li><p>10h</p><p>nuageicon</p><p>13°C</p></li>
                <li><p>11h</p><p>nuageicon</p><p>13°C</p></li>
                <li><p>12h</p><p>nuageicon</p><p>13°C</p></li>
                    </ul>
            )}
            </section>
    )
}

export default Wrapper;