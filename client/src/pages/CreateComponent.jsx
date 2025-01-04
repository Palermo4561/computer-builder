import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function CreateComponent() {
  return (
    <Fragment>
      <div>CreateComponent</div>
      <Link className='btn btn-danger fixed-bottom-right' to='/'>
        Discard
      </Link>
    </Fragment>
  );
}
