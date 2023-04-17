import './index.css';
// import { fetchApi } from '../../api/fetchApi';

const Temperature = ( { temperature } ) => {
    return (
        <div className="temperature">
            <p>{temperature}</p>
        </div>
    );
}

export default Temperature;