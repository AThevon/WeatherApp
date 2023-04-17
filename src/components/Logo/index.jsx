import logo from '../../assets/logo.svg';
import './index.css';

const Logo = () => {
    return (
        <picture className="logo">
            <img src={logo} alt="Logo Weather" />
        </picture>
    );
}

export default Logo;