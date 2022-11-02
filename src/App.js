import React from "react";
import { Routes, Route } from 'react-router-dom';
import {
    AllStudents,
    AllCampuses,
    SingleCampus,
    SingleStudent,
    Navbar,
    Home,
    InfoTabs,
    EditCampus,
    EditStudent
} from "./components";

function App(){

    return(
        
       <>
                    <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/tabs' element={<InfoTabs/>}/>
                <Route path='/students' element={<AllStudents/>}/>
                <Route path='/campuses' element={<AllCampuses/>}/>
                <Route path='/students/:id/' element={<SingleStudent/>}/>
                <Route path='/campuses/:id/' element={<SingleCampus/>}/>
                <Route path='/campuses/:id/edit' element={<EditCampus/>}/>
                <Route path='/students/:id/edit'element={<EditStudent/>}/>
            </Routes>
      </>
       
    )
}

export default App;