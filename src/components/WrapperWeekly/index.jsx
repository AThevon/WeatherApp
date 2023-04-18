import './index.css';

const WrapperWeekly = ({ datas }) => {

    return (
        <section className="wrapper-weekly">
            <ul className="main-weekly">
                <li className='day'>Day</li>
                <li>Chance of rain</li>
                <li>Humidity</li>
                <li>Wind</li>
                <li>Temlierature</li>
            </ul>
            {datas.list.slice(0, 4).map((data, index) => {
                return (
                    <ul key={index} className='weekly-stats'>
                        <li>{data.dt_txt}</li>
                        <li>{data.pop}</li>
                        <li>{data.main.humidity}</li>
                        <li>{data.wind.speed}</li>
                        <li>{data.main.temp}</li>
                    </ul>
                )
            }
            )
            }
        </section>
    )
}

export default WrapperWeekly;