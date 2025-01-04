import { fetchData } from '../api/api.js';
import { useEffect, useState } from 'react';
import Computer from '../components/computer';
import '../styles/Computers.css';

export default function Computers() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('/saved_computers');
        setFetchedData(data);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    getData();
  }, []);

  return (
    <div id='computers'>
      <h2>Saved Computers:</h2>
      {fetchedData.map((computer) => (
        <Computer key={computer.id} computer={computer} />
      ))}
    </div>
  );
}
