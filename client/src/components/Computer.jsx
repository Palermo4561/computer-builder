import { fetchData } from '../api/api.js';
import { useEffect, useState } from 'react';
import '../styles/Computer.css';
import { Link } from 'react-router-dom';
import { Loader } from '../pages';

function nameToUrl(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

export default function Computer({ computer }) {
  const [loading, setLoading] = useState(true);
  const [cpu, setCpu] = useState(null);
  const [gpu, setGpu] = useState(null);
  const [motherboard, setMotherboard] = useState(null);
  const [ram, setRam] = useState(null);
  const [storage, setStorage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setCpu(await fetchData(`/components/${computer.cpu}`));
        setGpu(await fetchData(`/components/${computer.gpu}`));
        setMotherboard(await fetchData(`/components/${computer.motherboard}`));
        setRam(await fetchData(`/components/${computer.ram}`));
        setStorage(await fetchData(`/components/${computer.storage}`));
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };

    getData();
  }, [computer]);

  useEffect(() => {
    if (cpu && gpu && motherboard && ram && storage) {
      let price = 0;
      [cpu, gpu, motherboard, ram, storage].map((component) => {
        price += Number(component.price);
      });
      setLoading(false);
      setTotalPrice(price);
    }
  }, [cpu, gpu, motherboard, ram, storage]);

  if (loading) return <Loader />;

  return (
    <div className='container'>
      <Link
        to={nameToUrl(computer.name)}
        state={{ id: computer.id }}
        className='link-container'
      >
        <div className='header'>
          <span className='title'>{computer.name}</span>
          <span className='price'>${totalPrice}</span>
        </div>
        <div className='content'>
          <img className='icon' src='/computer.svg' />
          <div className='specs'>
            <div>Processor: {cpu?.name}</div>
            <div>GPU: {gpu?.name}</div>
            <div>RAM: {ram?.name}</div>
            <div>Storage: {storage?.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
