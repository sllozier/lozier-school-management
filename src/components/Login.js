import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    
    const [ form, setForm ] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/tabs');
    };

    const handleChange = event => {
        setForm({
            ...form,
            [ event.target.name ]: event.target.value
        });
    };

    return(
       <section className="is-white has-text-centered">
       <div className="container">
        <div className="columns is-mobile">
            <div className="column is-half">
                <figure className="image is-96x96 is-inline-block">
                <img className="logo" src="piccies/schoolManagement.svg"/>
                </figure>
                <h1 className="title has-text-black is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                    Please login to manage your school
                </h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="columns is-centered">
                        <div className="column">
                            <div className="field">
                                <label className="label is-medium has-text-black" htmlFor="name">Name</label>
                                <div className="control is-expanded">
                                    <input className="input is-medium" name="name" type="text" value={form.name} onChange={handleChange} required/>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label is-medium has-text-black" htmlFor="password">Password</label>
                                <div className="control is-expanded">
                                    <input className="input is-medium"name="password" type="password" value={form.password} onChange={handleChange} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                    <div className="column">
                                <div className="field">
                                    <div className="control">
                                    <button className="button is-success is-medium">Submit</button>
                                    </div>
                                </div>
                            </div>    
                    </div>
                    
                </form>
            </div>
            <div className="column is-half">  
            <img src="piccies/breakfastClubBackground.svg"/>         
            </div>
        </div>
       </div>
       </section>
    )
};

export default Login;

{/* <button onClick={() => navigate('/tabs')}>Tabs</button> */}