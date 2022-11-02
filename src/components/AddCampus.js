import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewCampus } from '../store/campusesReducer';
import Popup from 'reactjs-popup';




const AddCampus = () => {
    const dispatch = useDispatch();
    const [ form, setForm ] = useState({
        name: '',
        address: '',
    });

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewCampus({
            name: form.name,
            address: form.address }));
    };

    useEffect(() => {
    }, [form])

    return (
       <div className='container m-3'>
      <Popup trigger={<button className="button is-success">Add Campus</button>}  position="right top" >
        {close => (
            <div className='card'>
                <header className='card-header'>
                    <p className='card-header-title'>
                        Add New Campus:
                    </p>
                </header>
                <div className='card-content'>
            <form id='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label className='label' htmlFor='name'>Campus Name</label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input is-success' 
                            name='name' 
                            type="text" 
                            placeholder="Campus Name" 
                            value={form.name}
                            onChange={handleChange('name')}/>
                        <span className='icon is-small is-left'>
                            <i className='fa-solid fa-school'></i>
                        </span>
                        <span className='icon is-small is-right'>
                            <i className='fa-solid fa-check'></i>
                        </span>
                    </div>
                </div>
                <div className='field'>
                    <label className='label' htmlFor='address'>Campus Address:</label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className="input is-success"
                            name="address"
                            type="text"
                            placeholder="Campus Address"
                            value={form.address}
                            onChange={handleChange("address")}/>
                        <span className='icon is-small is-left'>
                            <i className="fa-solid fa-map-location-dot"></i>
                        </span>
                        <span className='icon is-small is-right'>
                            <i className='fa-solid fa-check'></i>
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <div className='control'>
                        <label className='checkbox'>
                            <input type="checkbox"/>
                                I agree to the <a href="#">terms and conditions.</a>
                        </label>
                    </div>
                </div>
                <div className='field is-grouped'>
                    <div className='control'>
                        <button className='button is-success' type="submit">Submit</button>
                    </div>
                    <div className='control'>
                        <button className='close button is-success is-light' onClick={close}>Cancel</button>
                    </div>
                </div>
              </form> 
              </div>
              </div>
        )}
    </Popup>
      </div>
    )

}

export default AddCampus;

