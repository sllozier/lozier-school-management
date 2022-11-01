import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCampuses, deleteThisCampus, clearCampus } from '../store/campusesReducer';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus';



const AllCampuses = () => {
  const dispatch = useDispatch();
 
    
    const campuses = useSelector(state => state.campuses);


    useEffect(() => {
        dispatch(fetchAllCampuses());
        dispatch(clearCampus());
    }, []);

  
  return (
    
    <section className='section container is-max-desktop'>
      <AddCampus/>
      <div className='box' id="campuses">
    <div className='list has-hoverable-list-items'>
      {campuses
        ? campuses.map((campus) => (
            <div className='list-item' key={`${campus.id}`}>
              <Link to={`/campuses/${campus.id}`}>
                <div className='list-item-image'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={campus.imageUrl}/>
                  </figure>
                </div>
              </Link>
              <div className='list-item-content'>
                <div className='list-item-title is-size-5'>{campus.name}</div>
                <div className='list-item-description has-text-black'>
                Address:
                  <div className='tag is-black is-light is-medium is-rounded'>{campus.address}</div>
                </div>
              </div>
              <div className='list-item-controls has-text-black'>
                <div className='buttons is-right'>
                  <Link to={`/campuses/${campus.id}/edit`}>
                    <button className='button is-dark is-inverted'>
                      <span className='icon'>
                      <i className="fa-solid fa-pencil"></i>
                      </span>
                    </button>
                  </Link>
                  <button className='button is-success' onClick={() => dispatch(deleteThisCampus(campus.id))}>
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
    </div>
    </div>
    </section>
   )
};


export default AllCampuses;