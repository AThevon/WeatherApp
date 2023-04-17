import './index.css';

const WrapperNow = () => {
    

    return (
        <section className="wrapper-now">
            <p className="now">Now</p>
            <ul className='now-temp'>
                <li>
                    <p className="rain">Chance of Rain</p>
                    <p className="rain-value">20%</p>
                </li>
                <li>
                    <p className="humidity">Humidity</p>
                    <p className="humidity-value">60%</p>
                </li>
                <li>
                    <p className="windspeed">Wind Speed</p>
                    <p className="windspeed-value">10 km/h</p>
                </li>
                <li>
                    <p className="visibility">Visibility</p>
                    <p className="visibility-value">100km</p>
                </li>
                <li>
                    <p className="pressure">Pressure</p>
                    <p className="pressure-value">1500hPa</p>
                </li>
            </ul>
        </section>
    );
}

export default WrapperNow;