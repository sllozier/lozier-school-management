import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateThisCampus, fetchOneCampus } from '../store/singleCampusReducer';
import { useParams, useNavigate } from 'react-router-dom';

const EditCampus = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const campus = useSelector(state => state.campus);

    useEffect(() => {
        if(!isNaN(params.id))
        dispatch(fetchOneCampus(params.id));
    }, []);

     const [ form, setForm ] = useState({
        name: '',
        address: '',
     })


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateThisCampus({
            name: form.name,
            address: form.address,
        }, params.id, campus));
        navigate('/tabs');
    }

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

     useEffect(() => {
        if(!isNaN(params.id))
        dispatch(fetchOneCampus(params.id));
    }, []);

    return(
        <div className='is-form-page'>
            <section className='is-white has-text-centered'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-8'>
                            <img className='avatar' src="/piccies/schoolManagement.svg"/>
                            <h1 className='title has-text-black is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>
                                Edit Campus Profile
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section has-background-primary container is-max-desktop my-6'>
            <div className='box'>
                <form id="form" onSubmit={handleSubmit}>
                    <div className='columns is-centered '>
                        <div className='column '>
                            <div className='field'>  
                                <label className='label' htmlFor='name'>Campus Name:</label>
                                <div className='control has-icons-left has-icons-right'>
                                <input className='input is-success'
                                    type="text"
                                    placeholder='Name'
                                    value={form.name}
                                    onChange={handleChange('name')}/>
                                <span className='icon is-small is-left'>
                                    <i className='fa-solid fa-school'></i>
                                </span>
                                <span className='icon is-small is-right'>
                                    <i className='fa-solid fa-check'></i>
                                </span>
                                    <p className='help is-warning'>
                                        This field is required
                                    </p>
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label' htmlFor='address'>Campus Address:</label>
                                <div className='control has-icons-left has-icons-right'>
                                <input className='input is-success'
                                    type="text" 
                                    placeholder='Address'
                                    value={form.address}
                                    onChange={handleChange('address')}/>
                                <span className='icon is-small is-left'>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                </span>
                                <span className='icon is-small is-right'>
                                    <i className='fa-solid fa-check'></i>
                                </span>
                                    <p className='help is-warning'>
                                        This field is required
                                    </p>
                                </div>
                            </div>                         

                            <div className='field is-grouped'>
                                <div className='control'>
                                    <button className='button is-success' type='submit'>Submit</button>
                                </div>
                                <div className='control'>
                                    <button className='button is-success is-light' onClick={() => navigate(`/tabs`)}>Cancel</button>
                                </div>
                            </div>                                                             
                        </div>
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}

export default EditCampus;