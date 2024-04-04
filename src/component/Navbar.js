import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import {  useLocation } from 'react-router-dom';



export default function Navbar() {

    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-white">
                <Link className="navbar-brand" to="/" style={{ fontSize: "25px" }} >NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "35px" }}>
                    <ul className="navbar-nav mr-auto"  id="navbarSupportedContent">
                        <li className={`nav-item ${location.pathname==="/general"? "active" : ""}`}><Link className="nav-link" to="/general">Home</Link></li>
                        <li className={`nav-item ${location.pathname==="/bussiness"? "active" : ""}`}><Link className="nav-link" to="/business">Business </Link> </li>
                        <li className={`nav-item ${location.pathname==="/entertainment"? "active" : ""}`}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className={`nav-item ${location.pathname==="/general"? "active" : ""}`}><Link className="nav-link" to="/general">General </Link></li>
                        <li className={`nav-item ${location.pathname==="/health"? "active" : ""}`}><Link className="nav-link" to="/health">Health </Link></li>
                        <li className={`nav-item ${location.pathname==="/science"? "active" : ""}`}><Link className="nav-link" to="/science">Science </Link></li>
                        <li className={`nav-item ${location.pathname==="/sports"? "active" : ""}`}><Link className="nav-link" to="/sports" >Sports </Link></li>
                        <li className={`nav-item ${location.pathname==="/technology"? "active" : ""}`}><Link className="nav-link" to="/technology">Technology </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


