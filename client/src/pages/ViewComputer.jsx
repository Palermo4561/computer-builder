import { useLocation, Link } from 'react-router-dom';
import { fetchData } from '../api/api.js';
import { useEffect, useState, Fragment } from 'react';
import '../styles/Computers.css';
import { Component } from '../components';

export default function ViewComputer() {
  //const { slug } = useParams();
  const [loadedComputer, setLoadedComputer] = useState(null);
  const state = useLocation().state;
  const computerId = state.id;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(`/saved-computers/${computerId}`);
        setLoadedComputer(data);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    getData();
  }, [computerId]);

  return (
    <Fragment>
      <div>
        <h1>Product Details for {loadedComputer?.computerName || '(Unnamed)'}</h1>

        {loadedComputer ? (
          Object.keys(loadedComputer)
            .filter((key) => key !== 'computerName')
            .map((key) => <Component key={key.id} component={loadedComputer[key]} />)
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <Link className='btn btn-info fixed-bottom-right' to='/computers'>
        Back to Saved Computers
      </Link>
    </Fragment>
  );
}
