import React, { useState } from 'react';

function Login() {

    const host = `http://localhost:5000`;

    const [credential, setCredential] = useState({ email: "", password: "" })

    const handelOnSubmit = async (e) => {

        e.preventDefault();

        setCredential({ email: "", password: "" });

        const response = await fetch(`${host}/api/auth/login`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MjIyMjExMjFkYzMyNWM0YTVhN2YiLCJpYXQiOjE2Njk4NzQ1MzJ9.rlWbXPyp_rApfQ1f2IuQCM-HV3ohaMFTpKzIPBaE8pM',
            },
            body: JSON.stringify(credential)

        });

        const json = await response.json();

        console.log(json);

        if (json.Success===true) {
            
            localStorage.setItem('token',json.authToken);


        }

        else {
                alert("Please Login with Proper Credential!")
        }


    };

    const handleOnChange = (e) => {

        setCredential({ ...credential, [e.target.name]: e.target.value });

    };

    return (

        <>

            <div className="container">

                <form onSubmit={handelOnSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleOnChange} value={credential.email} placeholder="eg. xyz123@mail.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleOnChange} value={credential.password} placeholder=" password length must be minimum 6" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>

                </form>

            </div>


        </>

    )
}

export default Login;