import React from "react";
import { BrowserRouter } from 'react-router-dom';
import  AllStudents from './components/AllStudents';
import AllCampuses from './components/AllCampuses';
import SingleStudent from "./components/SingleStudent";
import SingleCampus from './components/SingleCampus';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfoTabs from "./components/InfoTabs";

function App(){

    return(
        
       <div id='main'>
                    <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/tabs' element={<InfoTabs/>}/>
                <Route path='/students' element={<AllStudents/>}/>
                <Route path='/campuses' element={<AllCampuses/>}/>
                <Route path='/students/:studentId/' element={<SingleStudent/>}/>
                <Route path='/campuses/:campusId/' element={<SingleCampus/>}/>
                <Route path='/' element={<AllCampuses/>}/>
            </Routes>
       </div>
       
    )
}

export default App;