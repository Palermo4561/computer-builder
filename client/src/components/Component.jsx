import '../styles/Component.css';
import { titleFormat } from '../utils/utils';

export default function Component({ component }) {
  return (
    <div className='container'>
      <div className='header'>
        <span className='title'>
          {titleFormat(component.category)}: {component.name}
        </span>
        <span className='price'>${component.price}</span>
      </div>
      <div className='content'>
        <img className='icon' src={'/' + component.category.toLowerCase() + '.svg'} />
        <p className='specs'>{component.details}</p>
      </div>
    </div>
  );
}
