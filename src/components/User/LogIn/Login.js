import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../../context/Alert/AlertContext';

function Login() {

    const host = `http://localhost:5000`;
    let navigate = useNavigate();

    const [credential, setCredential] = useState({ email: "", password: "" });

    /* <--  For showing Alert msgs --> */

    const context = useContext(AlertContext);

    // console.log(context);

    const {setAlertMsg} = context;


    const handelOnSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)

        });

        setCredential({ email: "", password: "" });

        const json = await response.json();

        console.log(json);

        if (json.Success === true) {

            sessionStorage.setItem('token', json.authToken);

            setAlertMsg("Login Successfully!!", "success");


            navigate("/");

        }

        else {
            // alert("Please Login with Proper Credential!");
            setAlertMsg("Login fail!!", "danger");
        }


    };

    const handleOnChange = (e) => {

        setCredential({ ...credential, [e.target.name]: e.target.value });

    };

    return (

        <>

            <div className="container mt-3">

                <h2 className='text-center'>Login to continue to make your notes</h2>

                <form onSubmit={handelOnSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleOnChange} value={credential.email} placeholder="eg. xyz123@mail.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleOnChange} value={credential.password} placeholder=" password length must be minimum 6" autoComplete={"true"} />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>

                </form>

            </div>


        </>

    )
}

export default Login;