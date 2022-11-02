import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchOneCampus, unregisterStudent } from '../store/singleCampusReducer';
import { fetchAllCampuses } from '../store/campusesReducer';
import { fetchAllStudents } from '../store/studentsReducer';
import { updateThisStudent } from '../store/singleStudentReducer'




const SingleCampus = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const campus   = useSelector(state =>  state.campus);
    const campuses = useSelector(state => state.campuses);
    const isEnrollee = campus.students;

    useEffect(() => {
        if(!isNaN(params.id)){
            dispatch(fetchOneCampus(params.id));
            dispatch(fetchAllCampuses());
            dispatch(fetchAllStudents());
        }
    }, []);

    const handleRemove = (enrollee) => {
        console.log('HANDLE REMOVE', enrollee, enrollee.id)
        dispatch(unregisterStudent(enrollee.id, enrollee));
        dispatch(updateThisStudent({id: enrollee.id, campusId: null}, enrollee.id));
    }
       

    return (
        <>
        <section key={campus.id} className='hero is-primary has-text-centered is-medium'> 
            {campus ?
            <>
            <div className='hero-body pb-6'>
                <div className='container has-text-centered'>
                    <div className='columns is-centered'>
                        <div className='column'>
                        <h1 className='title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>{campus.name}</h1>
                        <img className='avatar' src={`${campus.imageUrl}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-foot'>
                <div className='container has-text-centered'>
                    <div className='columns is-centered is-vcentered is-variable is-8 mb-6'>
                        <div className='column is-one-third has-background-success has-text-black mr-3'>
                            <div className='box'>
                                <h1 className='subtitle has-text-black'>Address:</h1>
                                <p>{campus.address}</p>
                            </div>
                        </div>
                        <div className='column is-one-third has-background-success has-text-black ml-3'>
                            <div className='box'>
                                <h1 className='subtitle has-text-black'>Description:</h1>
                                <p>{campus.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            : campuses.findIndex(thisCampus => thisCampus.id === parseInt(params.id)) !== -1 ? "Loading campus..." : "This campus does not exist."}
        </section>
           
        <section className='section has-background-success container is-max-desktop my-6'>
            <div className='box has-text-centered'>
            <h1 className='title is-4'>Students Currently Enrolled:</h1>
                <div className='list has-hoverable-list-items'>
                    { isEnrollee ?
                        isEnrollee.map((enrollee) => (
                        <div key={enrollee.id} className="list-item">
                            <div className='list-item-image'>
                                <figure className='image is-128x128'>
                                    <img className='is-rounded' src={enrollee.imageUrl}/>
                                </figure>
                            </div>
                            <Link to={`/students/${enrollee.id}`}>
                            <div className='list-item-content'>
                                    <div className='list-item-title'>{enrollee.firstName} {enrollee.lastName}</div>
                                    <div className='list-item-description has-text-black'>
                                        Email:
                                        <div className='tag is-black is-light is-medium is-rounded'>{enrollee.email}</div>
                                        GPA:
                                        <div className='tag is-black is-light is-medium is-rounded'>{enrollee.gpa}</div>
                                    </div>                                
                            </div>
                            </Link>
                            <div className='list-item-controls'>
                                <div className='buttons'>
                                    <button className='button is-dark is-inverted' onClick={() =>handleRemove(enrollee)}>
                                        <span className='icon is-medium'>
                                            <i className="fa-solid fa-user-minus"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))
                    : 'No students currently enrolled'}               
                </div>
            </div>
        </section>
            <a href="/tabs" className="button is-floating is-success has-text-black">
                    <i className="fa-solid fa-backward"></i>
            </a>
        
        </>
      );
    };
    
    export default SingleCampus;


