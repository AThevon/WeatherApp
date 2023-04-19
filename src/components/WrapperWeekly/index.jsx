import './index.css';

const WrapperWeekly = ({ datas, metrics }) => {
    const dailyData = datas.list.reduce((acc, data) => {

        const date = new Date(data.dt_txt).toDateString();

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(data);

        return acc;
    }, {});



    const dailyWeather = Object.values(dailyData).map((data, index) => {
        const day = new Date(data[0].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

        const chanceOfRain = data.reduce((acc, curr) => acc + curr.pop, 0) / data.length;
        const humidity = data.reduce((acc, curr) => acc + curr.main.humidity, 0) / data.length;
        const windSpeed = data.reduce((acc, curr) => acc + curr.wind.speed, 0) / data.length;
        const temperature = data.reduce((acc, curr) => acc + curr.main.temp, 0) / data.length;

        return (
            <ul key={index} className='weekly-stats'>
                <li>{day}</li>
                <li>{`${parseInt(chanceOfRain * 100)} %`}</li>
                <li>{`${parseInt(humidity)} %`}</li>
                <li>{`${windSpeed.toFixed(2)} ${metrics ? 'km/h' : 'mph'}`}</li>
                <li>{`${parseInt(temperature)} ${metrics ? '°C' : '°F'}`}</li>
            </ul>
        );
    });

    return (
        <section className="wrapper-weekly">
            <ul className="main-weekly">
                <li className='day'>Day</li>
                <li>Chance of rain</li>
                <li>Humidity</li>
                <li>Wind Speed</li>
                <li>Temperature</li>
            </ul>
            {dailyWeather}
        </section>
    );
};

export default WrapperWeekly;
