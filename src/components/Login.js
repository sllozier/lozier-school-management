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
       <section className=" has-text-centered mt-6">
       <div className="container">
        <div className="columns has-background-white is-mobile">
            <div className="column is-half-desktop is-three-quarters-mobile is-two-thirds-tablet is-one-third-widescreen is-one-quarter-fullhd">
                <figure className="image is-128x128 is-inline-block mt-6 mb-6">
                <img className="logo" src="piccies/schoolManagement.svg"/>
                </figure>
                <h1 className="title has-text-black is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile mb-3">
                    Please login to manage your school
                </h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="columns is-centered m-5">
                        <div className="column is-narrow">
                            <div className="field">
                                <label className="label has-text-black" htmlFor="name">Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-primary" name="username" type="text" placeholder="username" value={form.username} onChange={handleChange} required/>
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-user-large"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                    <i className="fa-solid fa-check"></i>
                                    </span>
                                </div>                           
                            </div>
                        </div>
                        </div>
                        <div className="columns is-centered m-5">
                        <div className="column is-narrow">
                            <div className="field">
                                <label className="label has-text-black" htmlFor="password">Password</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-primary" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
                                    <span className="icon is-small is-left">
                                    <i className="fa-solid fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                    <div className="column">
                                <div className="field">
                                    <div className="control">
                                    <button className="button is-success has-text-black is-medium">Submit</button>
                                    </div>
                                </div>
                            </div>    
                    </div>
                    
                </form>
            </div>
            <div className="column">  
            <img src="piccies/breakfastClubBackground.svg"/>         
            </div>
        </div>
       </div>
       </section>
    )
};

export default Login;

{/* <button onClick={() => navigate('/tabs')}>Tabs</button> */}