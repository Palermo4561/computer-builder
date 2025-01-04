import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function CreateComputer() {
  return (
    <Fragment>
      <div>CreateComputer</div>
      <Link className='btn btn-danger fixed-bottom-right' to='/computers'>
        Discard
      </Link>
    </Fragment>
  );
}
