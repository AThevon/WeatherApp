import './index.css';
import Logo from '../Logo';
import Searchbar from '../Searchbar';
import BtnUnits from '../BtnUnits';

const Header = ({ metrics, setMetrics, value, onChange, onSubmit }) => {
    return (
        <header className="header">
            <Logo />
            <Searchbar value={value} onChange={onChange} onSubmit={onSubmit}/>
            <BtnUnits
                metrics={metrics ? 'metrics' : 'imperial'}
                handleClick={() => setMetrics(metrics ? false : true)} />
        </header>
    );
}

export default Header;