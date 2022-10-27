import React from 'react';


const Navbar = () => {


    return(
       <nav className='navbar is-transparent'>
        <div className='container'>
        <div className='navbar-brand'>
            <a className='image is-64x64' href="/">
                <img src='piccies/schoolManagement.svg'/>
            </a>
            <a role='button' className='navbar-burger' area-label='menu' aria-expanded='false' data-target='navbarBasic'></a>
            <span area-hidden='true'></span>
            <span area-hidden='true'></span>
            <span area-hidden='true'></span>
        </div>

        <div id='navBarBasic' className='navbar-menu'>
            <div className='navbar-start'>
                <a className='navbar-item is-active' href="/">
                    <span className='icon is-large'>
                    <i className="fa-solid fa-house">
                    </i>
                    </span>
                </a>
            </div>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;