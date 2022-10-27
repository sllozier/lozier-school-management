import React, { useState } from "react";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";

const InfoTabs = () => {

    const openTab = (evt, tabName) => {
        var i, x, tablinks;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
      }
    
    

    return(
        <>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Campus and Student Data
                    </h1>
                </div>
                </div>
                <div className="hero-foot">
            <nav className="tabs is-centered is-boxed is-large" >
                <div className="container">           
                <ul>
                    <li className="tab is-active" onClick={() => openTab(event, "campuses")}>
                    <a>
                    <span className="icon is-small"><i className="fas fa-image" ></i></span>
                    <span>Campuses</span>
                    </a>
                    </li>
                    <li className="tab" onClick={() => openTab(event, "students")}>
                    <a>
                    <span className="icon is-small"><i className="fas fa-music"></i></span>
                    <span>Students</span>
                    </a>
                    </li>
                </ul>  
                </div>          
        </nav>
        </div>
        </section>

        <div className="container section">
            <div id="campuses" className="content-tab">
                <AllCampuses/>
            </div>
            <div id="students" className="content-tab" >
                <AllStudents/>
            </div>
        </div>
        </>
    )
}

export default InfoTabs;