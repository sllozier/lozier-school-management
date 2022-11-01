import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewStudent } from '../store/studentsReducer';
import Popup from 'reactjs-popup';

const AddStudent = () => {

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const dispatch = useDispatch();

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewStudent({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
        }));
        
    };

    useEffect(() => {
    }, [form])

    return (
        <div className='container m-3'>
        <Popup trigger={<button className="button is-success">Add Student</button>}  position="right top" >
          {close => (
              <div className='card'>
                  <header className='card-header'>
                      <p className='card-header-title'>
                          Add New Student:
                      </p>
                  </header>
                  <div className='card-content'>
              <form id='form' onSubmit={handleSubmit}>
                  <div className='field'>
                      <label className='label' htmlFor='firstName'>First Name:</label>
                      <div className='control has-icons-right has-icons-left'>
                          <input className='input is-success' 
                              name='firstName' 
                              type="text" 
                              placeholder="First Name" 
                              value={form.firstName}
                              onChange={handleChange('firstName')}/>
                            <span className='icon is-small is-left'>
                                <i className="fa-solid fa-user-plus"></i>
                            </span>
                            <span className='icon is-small is-right'>
                              <i className='fa-solid fa-check'></i>
                            </span>
                      </div>
                  </div>
                  <div className='field'>
                      <label className='label' htmlFor='lastName'>Last Name:</label>
                      <div className='control has-icons-right'>
                          <input className="input is-success"
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              value={form.lastName}
                              onChange={handleChange("lastName")}/>
                          <span className='icon is-small is-right'>
                              <i className='fa-solid fa-check'></i>
                          </span>
                      </div>
                  </div>
                  <div className='field'>
                      <label className='label' htmlFor='email'>Email:</label>
                      <div className='control has-icons-right has-icons-left'>
                          <input className="input is-success"
                              name="email"
                              type="email"
                              placeholder="Email"
                              value={form.email}
                              onChange={handleChange("email")}/>
                          <span className='icon is-small is-left'>
                                <i className="fa-solid fa-envelope"></i>
                          </span>
                          <span className='icon is-small is-right'>
                              <i className='fa-solid fa-check'></i>
                          </span>
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




        // <form id='form' onSubmit={handleSubmit}>
        //     <h3>Add New Student:</h3>
        //     <label htmlFor='firstName'>Student First Name:</label>
        //     <input
        //         name='firstName'
        //         value={form.firstName}
        //         onChange={handleChange('firstName')}/>

        //     <label htmlFor='lastName'>Student Last Name:</label>
        //     <input
        //         name='lastName'
        //         value={form.lastName}
        //         onChange={handleChange('lastName')}/>

        //     <label htmlFor='email'>Student Email:</label>
        //     <input
        //         name='email'
        //         value={form.email}
        //         onChange={handleChange('email')}/>

        //     <button type="submit">Submit</button>
        //     <Link to="/students">Cancel</Link>
        // </form>
    )



}

export default AddStudent;