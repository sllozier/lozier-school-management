import axios from 'axios';


const SET_STUDENT = "SET_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";





export const setStudent = (student) => {
    return{
      type: SET_STUDENT,
      student,
    };
  };
  
  export const updateStudent = (student) => {
    return{
      type: UPDATE_STUDENT,
      student,
    };
  };
  
  
  
  export const fetchOneStudent = (studentId) => {
    return async (dispatch) => {
      try{
        const { data: student }  = await axios.get(`/api/students/${studentId}`);
        dispatch(setStudent(student));
      }catch(error){
        console.log('FETCH STUDENT THUNK ERROR: ', error);
      }
    };
  };
  
  
  export const updateThisStudent = (student, studentId) => {
    return async (dispatch) => {
      try{
        console.log("UPDATE STUDENT THUNK", student, studentId)
        const { data: updatedStudent } = await axios.put(`/api/students/${studentId}`, student);
        dispatch(updateStudent(updatedStudent));
      }catch(error){
        console.log('UPDATE STUDENT THUNK ERROR: ', error);
      }
    };
  };

  
  
  
  export const singleStudentReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_STUDENT:
        return action.student;
      case UPDATE_STUDENT:
        return {...state, student: action.student};
      default:
        return state;
    }
  }
