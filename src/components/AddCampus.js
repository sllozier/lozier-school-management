import React, { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';
 import { useDispatch } from 'react-redux';
 import { addNewCampus } from '../store/campusesReducer';


const AddCampus = () => {
   
    const [ form, setForm ] = useState({
        name: '',
        address: '',
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
        dispatch(addNewCampus({
            name: form.name,
            address: form.address }));
        
    };

    useEffect(() => {
    }, [form])

    return (
     <>
        <button className='button is-success'>Add Campus</button>
        <div id="add-campus-modal" className="modal">
            <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>Add New Campus</p>
                    <button className='delete' aria-label="close"></button>
                </header>
                <section className='modal-card-body'>

                <form id='form' onSubmit={handleSubmit}>
                    <h3>Add New Campus:</h3>
                    <div className='field'>
                        <label className='label' htmlFor='name'>Campus Name:</label>
                        <div className='control'>
                        <input className="input" name='name' type="text" placeholder="Campus Name" value={form.name} onChange={handleChange('name')}/>
                        </div>
                    </div>
            
                    <div className='field'>
                        <label className='label' htmlFor='address'>Campus Address:</label>
                        <div className='control has-icons-left has-icons-right'>
                        <input name='address' value={form.address} onChange={handleChange('address')}/>
                        <span className='icon is-small is-left'>
                            <i className="fa-solid fa-school"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                        <label className='checkbox'>
                        <input type="checkbox"/>
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                        </div>
                    </div>
            
                    <div className='field is-grouped'>
                        <div className='control'>
                        <button className='button is-success' type="submit">Submit</button>
                        </div>
                        <div className='control'>
                        <Link className='button is-success is-light' to="/campuses">Cancel</Link>
                        </div>
                    </div>           
                </form>
                </section>
            </div>
        </div>
</>


       
    )



}

export default AddCampus;