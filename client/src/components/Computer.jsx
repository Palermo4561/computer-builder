import { fetchData } from '../api/api.js';
import { useEffect, useState } from 'react';
import '../styles/Computer.css';

export default function Computer({ computer }) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const cpu = await fetchData(`/components/${computer.cpu}`);
        const gpu = await fetchData(`/components/${computer.gpu}`);
        const motherboard = await fetchData(`/components/${computer.motherboard}`);
        const ram = await fetchData(`/components/${computer.ram}`);
        const storage = await fetchData(`/components/${computer.storage}`);
        setFetchedData([
          cpu[0].name,
          gpu[0].name,
          motherboard[0].name,
          ram[0].name,
          storage[0].name,
        ]);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    getData();
  }, [computer.cpu, computer.gpu, computer.motherboard, computer.ram, computer.storage]);

  return (
    <div id='block'>
      <h3>{computer.name}</h3>
      <ul>
        {fetchedData.map((part, index) => (
          <li key={index}>{part}</li>
        ))}
      </ul>
    </div>
  );
}
