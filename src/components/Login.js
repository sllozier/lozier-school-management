import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();


    return(
        <>
        <h3>Login Form Placeholder</h3>
        <button onClick={() => navigate('/tabs')}>Tabs</button>
        </>
    )
};

export default Login;