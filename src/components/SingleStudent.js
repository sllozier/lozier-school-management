import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchOneStudent } from '../store/singleStudentReducer';
import { fetchAllCampuses } from '../store/campusesReducer';
import EditStudent from './EditStudent';


const SingleStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const student   = useSelector(state =>  state.student);
    const students = useSelector(state => state.students);
    const studentCampus = student.campus;
    
    useEffect(() => {
        if(!isNaN(params.id)){
            dispatch(fetchOneStudent(params.id));
        }
    }, []);

    
    

    return (
        <>
        <section key={student.id} className="hero is-primary has-text-centered is-medium">
            {student ?
            <>
            <div className='hero-body pb-6'>
                <div className='container has-text-centered'>
                    <div className='columns is-centered'>
                        <div className='column'>
                            <h1 className='title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>{student.firstname} {student.lastname}</h1>
                            <img className='avatar' src={`${student.imageUrl}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-foot'>
                <div className='container has-text-centered'>
                    <div className='columns is-centered is-vcentered is-variable is-8 mb-6'>
                        <div className='column is-one-third has-background-success has-text-black mr-3'>
                            <div className='box'>
                                <h1 className='subtitle has-text-black'>Email:</h1>
                                <p>{student.email}</p>
                                <h1 className='subtitle has-text-black'>GPA:</h1>
                                <p>{student.gpa}</p>
                            </div>
                        </div>
                        <div className='column is-one-third has-background-success has-text-black mr-3'>
                            <div className='box'>
                                <h1 className='subtitle has-text-black'>Quote:</h1>
                                <p>{`"${student.quote}"`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            : students.findIndex(thisStudent => thisStudent.id === parseInt(params.id)) !== -1 ? 'Loading...': 'This student does not exist'}
        </section>
        <section className='section has-background-success container is-max-desktop my-6'>
            <div className='box has-text-centered'>
                <h1 className='title is-4'>{`${student.firstName}'s`} Current Campus:</h1>
                <div className='list has-hoverable-list-items'>
                    {studentCampus ?
                    <div key={studentCampus.id} className="list-item">
                        <div className='list-item-image'>
                            <figure className='image is-128x128'>
                                <img className='is-rounded' src={studentCampus.imageUrl}/>
                            </figure>
                        </div>
                        <Link to={`/campuses/${studentCampus.id}`}>
                            <div className='list-item-content'>
                                <div className='list-item-title'>{studentCampus.name}</div>
                                <div className='list-item-description has-text-black'>
                                    Address:
                                    <div className='tag is-black is-light is-medium is-rounded'>{studentCampus.address}</div>
                                </div>
                            </div>
                        </Link>
                        <div className='list-item-controls'>
                            <div className='buttons'>
                                <button className='button is-dark is-inverted' onClick={() => handleRemove(student)}>
                                    <span className='icon is-medium'>
                                        <i className='fa-solid fa-user-minus'></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    : 'Not Enrolled in School!'}
                </div>
            </div>
            <button onClick={() => navigate(-1)} className="button is-floating is-success has-text-black"><i className="fa-solid fa-backward"></i></button>
        </section>
        </>
      );
    };
    
    export default SingleStudent;