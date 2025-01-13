import { useState, Fragment } from 'react';
import { addComponent } from '../api/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { titleFormat } from '../utils/utils';
import '../styles/CreateComponent.css';

export default function CreateComponent() {
  const categories = ['cpu', 'gpu', 'motherboard', 'ram', 'storage'];

  const blankForm = {
    name: '',
    category: '',
    socketType: '',
    price: '',
    details: '',
  };

  const [formData, setFormData] = useState(blankForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComponent(formData);
      setFormData(blankForm);
    } catch (error) {
      console.error(error);
    }
  };

  const onSave = (event) => {
    if (
      Object.values(formData).filter((field) => field === '').length >
      (['cpu', 'motherboard'].includes(formData.category) ? 0 : 1)
    ) {
      event.preventDefault();
      toast.error('Cannot Add Part: Fields left blank');
      return;
    }
    toast.success('Part Added Successfully!!');
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='input-group'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>

        <div className='input-group'>
          <label htmlFor='category' className='form-label'>
            Category:&nbsp;&nbsp;
          </label>
          <select
            id='category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='form-select'
            required
          >
            <option value='' disabled>
              Select...
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {titleFormat(category)}
              </option>
            ))}
          </select>
        </div>

        {(formData.category === 'cpu' || formData.category === 'motherboard') && (
          <div className='input-group'>
            <label htmlFor='socket' className='form-label'>
              Socket Type:&nbsp;&nbsp;
            </label>
            <select
              id='socket'
              name='socketType'
              value={formData.socketType}
              onChange={handleChange}
              className='form-select'
              required
            >
              <option value='' disabled>
                Select...
              </option>
              {['amd', 'intel'].map((socket, index) => (
                <option key={index} value={socket}>
                  {titleFormat(socket)}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className='input-group'>
          <label htmlFor='price' className='form-label'>
            Price:
          </label>
          <input
            type='number'
            id='price'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='form-input'
            step='0.01'
            min='0'
            required
          />
        </div>

        <div className='input-group'>
          <label htmlFor='details' className='form-label'>
            Details:
          </label>
          <textarea
            id='details'
            name='details'
            value={formData.details}
            onChange={handleChange}
            className='form-textarea'
            rows='4'
            required
          />
        </div>

        <div className='button-group'>
          <Link to='/'>
            <button type='submit' className='btn save-btn' onClick={onSave}>
              Save
            </button>
          </Link>

          <Link to='/' className='btn discard-btn'>
            Discard
          </Link>
        </div>
      </form>
    </Fragment>
  );
}
