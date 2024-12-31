import './App.css';
import { Fragment } from 'react';
import Computers from './pages/Computers.jsx';

export default function App() {
  return (
    <Fragment>
      <h1>Hello computer-builder!</h1>
      <p>A PERN project to choose computer parts</p>
      <Computers />
    </Fragment>
  );
}
