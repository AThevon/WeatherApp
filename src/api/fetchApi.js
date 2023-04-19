import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'http://api.openweathermap.org/data/2.5/';

export async function fetchApi ( city, units ) {
    const url = `${apiUrl}forecast?q=${city}&appid=${apiKey}&units=${units}`;
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};


