import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    let Location = useLocation();

    /*     useEffect(() => {
            console.log(Location.pathname);
        }, [Location]) */ // (No Need)


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">iNoteBook</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className={`nav-link ${(Location.pathname === ("/home") || (Location.pathname === "/")) ? "active" : ""}`} to="/home">Home</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className={`nav-link ${Location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li> */}

                        </ul>

                        <form className="d-flex" style={{alignItems: "center",justifyContent: "center",gap: "1rem"}}>
                            <Link to="/login" className="btn btn-primary mx-2 me-2" role="button">Login</Link>
                            <Link to="/signup" className="btn btn-primary max-2 me-2" role="button">SignUp</Link>
                        </form>


                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar
