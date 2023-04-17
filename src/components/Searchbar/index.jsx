import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({ onSearch, datas }) => {
    console.log(datas);
    return (
        <>
        <form className="searchbar">
            <input className='search-input' type="text" placeholder="Search city..." onChange={onSearch} />
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