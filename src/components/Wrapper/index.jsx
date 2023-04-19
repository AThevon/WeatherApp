import './index.css';
import WrapperNow from '../WrapperNow';
import WrapperWeekly from '../WrapperWeekly';

const Wrapper = ( { datas, isLoading, error, metrics } ) => {
    

    const date = new Date();
    const options = { weekday: 'long', hour: 'numeric', hour12: false, minute: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);

    const getOnlyHours = (dt) => {
        const timeString = dt.split(" ")[1].substring(0, 5);
        return timeString;
    }

    const iconWeather = (imgCode) => `http://openweathermap.org/img/w/${imgCode}.png`;

    return (
        <>
            <section className="wrapper">
                {error ? <p>{error.message}</p> :
                    isLoading ? <p className='loader'>Loading...</p> :
                        datas && (
                            <ul className='all-temp'>
                                <li className='main-temp'>
                                    <h2>{datas.city.name}</h2>
                                    <p>{formattedDate}</p>
                                    <p className='temp'>{parseInt(datas.list[0].main.temp)} {metrics ?'°C' : '°F'}</p>
                                </li>
                                {datas.list.slice(0, 4).map((data, index) => {
                                    return (
                                        <li key={index} className='map-datas'>
                                            <p>{getOnlyHours(data.dt_txt)}</p>
                                            <img src={iconWeather(datas.list[index].weather[0].icon)} alt="" />
                                            <p>{parseInt(data.main.temp)} {metrics ?'°C' : '°F'}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
            </section>
            { datas && <WrapperNow metrics={metrics} data={datas.list[0]} />}
            { datas && <WrapperWeekly metrics={metrics} datas={datas}/>}
        </>
    )
}

export default Wrapper;