import { fetchData } from '../api/api.js';
import { useEffect, useState, Fragment } from 'react';
import Computer from '../components/Computer';
import '../styles/Computers.css';
import { Link } from 'react-router-dom';

export default function SavedComputers() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('/saved-computers');
        setFetchedData(data);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Link to='/create-computer' className='btn btn-info fixed-bottom-right'>
        Create New Computer
      </Link>
      <h2 style={{ textAlign: 'center' }}>Saved Computers:</h2>
      {fetchedData.map((computer) => (
        <Computer key={computer.id} computer={computer} />
      ))}
    </Fragment>
  );
}
