import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudents, deleteThisStudent, clearStudent } from '../store/studentsReducer';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';


const AllStudents = () => {
  const dispatch = useDispatch();
    
    
    const students = useSelector(state => state.students);
   

    useEffect(() => {
        dispatch(fetchAllStudents());
        dispatch(clearStudent());
    }, []);


  return (
    <section className='section container is-max-desktop'>
     <AddStudent/>
      <div className='box' id="students">
    <div className='list'>
      {students
        ? students.map((student) => (
            <div className='list-item' key={`${student.id}`}>
              <Link to={`/students/${student.id}`}>
                <div className='list-item-image'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={student.imageUrl}/>
                  </figure>
                </div>
              </Link>
              <div className='list-item-content'>
                <div className='list-item-title'>{student.firstName} {student.lastName}</div>
                <div className='list-item-description'>Email: {student.email} GPA: {student.gpa}</div>
              </div>
              <div className='list-item-controls has-text-black'>
                <div className='buttons is-right'>
                  <button className='button is-success' onClick={() => dispatch(deleteThisStudent(student.id))}>
                    <span className='icon is-small'>
                    <i className="fa-solid fa-trash-can"></i>
                    </span>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            
          ))
      :null}
      <hr />
      <div className='add'>
      <AddStudent />
      </div>
        
    </div>
    </div>
    </section>
   )
};

export default AllStudents;