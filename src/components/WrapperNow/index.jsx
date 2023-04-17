import './index.css';

const WrapperNow = ( { data } ) => {
    

    return (
        <section className="wrapper-now">
            <p className="now">Now</p>
            <ul className='now-temp'>
                <li>
                    <p className="rain">Chance of Rain</p>
                    {/* <p className="rain-value">{data.pop}</p> */}
                </li>
                <li>
                    <p className="humidity">Humidity</p>
                    <p className="humidity-value">{data.main.humidity}</p>
                </li>
                <li>
                    <p className="windspeed">Wind Speed</p>
                    <p className="windspeed-value">{data.wind.speed}</p>
                </li>
                <li>
                    <p className="visibility">Visibility</p>
                    <p className="visibility-value">{data.visibility}</p>
                </li>
                <li>
                    <p className="pressure">Pressure</p>
                    <p className="pressure-value">{data.main.pressure}</p>
                </li>
            </ul>
        </section>
    );
}

export default WrapperNow;