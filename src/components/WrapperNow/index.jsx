import './index.css';

const WrapperNow = ( { metrics, data } ) => {
    

    return (
        <section className="wrapper-now">
            <p className="now">Now</p>
            <ul className='now-temp'>
                <li>
                    <p className="rain">Chance of Rain</p>
                    <p className="value">{data.pop}%</p>
                </li>
                <li>
                    <p className="humidity">Humidity</p>
                    <p className="value">{data.main.humidity}%</p>
                </li>
                <li>
                    <p className="windspeed">Wind Speed</p>
                    <p className="value">{data.wind.speed}{metrics ? ' km/h' : ' mph'}</p>
                </li>
                <li>
                    <p className="visibility">Visibility</p>
                    <p className="value">{data.visibility} km</p>
                </li>
                <li>
                    <p className="pressure">Pressure</p>
                    <p className="value">{data.main.pressure} hPa</p>
                </li>
            </ul>
        </section>
    );
}

export default WrapperNow;