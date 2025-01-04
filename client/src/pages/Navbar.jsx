import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-link'>
          Home
        </Link>
        <Link to='/create-computer' className='navbar-link'>
          Create Computer
        </Link>
        <Link to='/create-component' className='navbar-link'>
          Create Component
        </Link>
        <Link to='/computers' className='navbar-link'>
          Saved Computers
        </Link>
      </div>
    </nav>
  );
}
