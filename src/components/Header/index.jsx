import './index.css';
import Logo from '../Logo';
import Searchbar from '../Searchbar';
import BtnUnits from '../BtnUnits';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Searchbar />
            <BtnUnits />
        </header>
    );
}

export default Header;