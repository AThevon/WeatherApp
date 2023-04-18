import './App.css';
import { useState, useEffect } from 'react';
import { fetchApi } from './api/fetchApi';
import Header from './components/Header';
import Wrapper from './components/Wrapper';


function App() {

  const [metrics, setMetrics] = useState(true);
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchApi(search, metrics ? 'metric' : 'imperial');
        setDatas(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search, metrics]);


  const onSubmit = (e) => {
    setSearch(value);
    e.preventDefault();
  }

  return (
    <div className="App">
      <Header metrics={metrics} setMetrics={setMetrics} value={value} onChange={setValue} onSubmit={onSubmit} />
      <Wrapper metrics={metrics} datas={datas} isLoading={isLoading} error={error} />
    </div>
  )
}

export default App;
