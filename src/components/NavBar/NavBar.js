import React ,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    let Location = useLocation();
    
    useEffect(() => {

        console.log(Location.pathname);

    }, [Location]) // (No Need)


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">iNoteBook</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className={`nav-link ${( Location.pathname===("/home") || (Location.pathname==="/") ) ? "active" : ""}`}  to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${Location.pathname==="/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                            
                        </ul>

                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar
