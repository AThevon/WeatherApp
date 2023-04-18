import './index.css';

const BtnUnits = ( { metrics, handleClick } ) => {
    return (
        <div className="btn-units">
            <button className={metrics} onClick={handleClick}>°C <span>°F</span></button>
        </div>
    );
}

export default BtnUnits;