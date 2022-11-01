import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateThisStudent, fetchOneStudent } from '../store/singleStudentReducer';
import { useParams, useNavigate } from 'react-router-dom';


const EditStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const student = useSelector(state => state.student);
    const campuses = useSelector(state => state.campuses);

    useEffect(() => {
        if(!isNaN(params.id))
        dispatch(fetchOneStudent(params.id));
    }, []);

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        campusId: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateThisStudent({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            campusId: form.campusId,
        }, params.id, student));
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
        dispatch(fetchOneStudent(params.id));
    }, []);
  
    return(
        <div className='is-form-page'>
            <section className='is-white has-text-centered'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-8'>
                            <img className='avatar' src="/piccies/schoolManagement.svg"/>
                            <h1 className='title has-text-black is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>
                                Edit Student Profile
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section has-background-primary container is-max-desktop my-6'>
                <div className='box'>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className='columns is-centered'>
                            <div className='column'>
                                <div className='field'>
                                    <label className='label' htmlFor='firstName'>First Name:</label>
                                    <div className='control has-icons-left has-icons-right'>
                                        <input className='input is-success'
                                            name="firstname"
                                            type="text"
                                            placeholder="First Name"
                                            value={form.firstName}
                                            onChange={handleChange('firstName')}/>
                                        <span className='icon is-small is-left'>
                                            <i className='fa-solid fa-user-plus'></i>
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
                                    <label className='label' htmlFor='lastName'>Last Name:</label>
                                    <div className='control has-icons-right'>
                                        <input className='input is-success'
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            value={form.lastName}
                                            onChange={handleChange('lastName')}/>
                                        <span className='icon is-small is-right'>
                                            <i className='fa-solid fa-check'></i>
                                        </span>
                                            <p className='help is-warning'>
                                                This field is required
                                            </p>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label' htmlFor="email">Email:</label>
                                    <div className='control has-icons-left has-icons-right'>
                                        <input className='input is-success'
                                            name="email"
                                            type="email"
                                            placeholder='Email'
                                            value={form.email}
                                            onChange={handleChange('email')}/>
                                        <span className='icon is-small is-left'>
                                            <i className='fa-solid fa-envelope'></i>
                                        </span>
                                        <span className='icon is-small is-right'>
                                            <i className='fa-solid fa-check'></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label' htmlFor='campus'>Select Campus:</label>
                                    <div className='control'>
                                        <div className='select'>
                                            <select name="campusId"
                                                defaultValue={student.campusId}
                                                onChange={handleChange('campusId')}>
                                                <option value={undefined}>Select One</option>
                                                {campuses ? [...campuses].sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0).map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>) : null}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='field is-grouped'>
                                    <div className='control'>
                                        <button className='button is-success' type="submit">Submit</button>
                                    </div>
                                    <div className='control'>
                                        <button className='button is-success is-light' onClick={() => navigate('/tabs')}>Cancel</button>
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

export default EditStudent;


