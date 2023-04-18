import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ value, onChange, onSubmit}) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <>
        <form className="searchbar" onSubmit={onSubmit}>
            <input className='search-input' type="text" placeholder="Search city..." value={value} onChange={handleChange} />
            <button className='search-btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{height: '18px', color:"#fff"}} />
            </button>
        </form>
        {/* {datas.map((data) => {
            return (
                <ul className="searchbar-results">
                    <li>{data.name}</li>
                </ul>
            )})} */}
        </>
    );
}


export default Searchbar;