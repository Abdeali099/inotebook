import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AlertContext from '../../context/Alert/AlertContext';
import Alert from '../Alert/Alert';


function Navbar() {

    let Location = useLocation();

    let navigate = useNavigate();

    /* <--  For showing Alert msgs --> */

    const context = useContext(AlertContext);

    const { alert, showAlert, setAlertMsg } = context;

    const handleOnLogout = () => {

        sessionStorage.removeItem('token');

        setAlertMsg("Logout Successfully!!", "success");

        navigate('/login');

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: "1rem" }}>

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

                        </ul>



                        <form className="d-flex" style={{ alignItems: "center", justifyContent: "center", gap: "1rem" }}>

                            {
                                !sessionStorage.getItem('token') ?

                                    <>
                                        <Link to="/login" className="btn btn-primary mx-2 me-2" role="button">Login</Link>
                                        <Link to="/signup" className="btn btn-primary max-2 me-2" role="button">SignUp</Link>
                                    </>

                                    :

                                    <button className="btn btn-primary" onClick={handleOnLogout}>Logout</button>

                            }

                        </form>

                    </div>

                </div>

            </nav>

            {/* Alert Component */}

            <div className="container" >

                <Alert alert={alert} showAlert={showAlert} />

                {/* 
                
                alert : have "msg" and "type" of Alert

                showAlert : it defines that Alert should visible or not.

                */}

            </div>


        </>
    )
}

export default Navbar
