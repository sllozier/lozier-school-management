import React from 'react';


const Navbar = () => {


    return(
        <nav className='breadcrumb is-centered is-large has-text-black m-3'>
            <ul>
                <li>
                    <a href="/">
                        <span className='icon is-medium'>
                            <i className="fa-solid fa-house-user"></i>
                        </span>
                        <span>Home</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;