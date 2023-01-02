import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


function SignUp() {

  const host = `http://localhost:5000`;

  let navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handelOnSubmit = async (e) => {

    const { cpassword, ...perfectData } = newUserData;

    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createUser`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perfectData)

    });

    setNewUserData({ name: "", email: "", password: "", cpassword: "" });

    const json = await response.json();

    console.log(json);

    if (json.Success === true) {

      localStorage.setItem('token', json.authToken);

      navigate("/");

    }

    else {
      alert("Please try again !!")
    }


  };

  const handleOnChange = (e) => {

    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });

  };

  const handleDisable = () => {

    /* true : 
    
    1)  all 4 inputs are blank
    2) name is <3 and password is <6
    3) password and cpassword not match
    
    */

    if ((newUserData.name.length == 0 || newUserData.name.length < 3) || (newUserData.email.length == 0) || (newUserData.password.length == 0 ) || (newUserData.cpassword.length == 0 ) ||(newUserData.password!=newUserData.cpassword) ) {
      return true;
    }

    else {
      return false;
    }

  };

  return (
    <>

      <div className='container'>

        <form onSubmit={handelOnSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={newUserData.name}  name="name" onChange={handleOnChange} placeholder="eg. abd@123" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={newUserData.email} name="email" aria-describedby="emailHelp" onChange={handleOnChange}  placeholder="eg. xyz123@mail.com"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={newUserData.password} name="password" onChange={handleOnChange}  autoComplete={"true"} placeholder=" password length must be minimum 6"/>
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" value={newUserData.cpassword} name="cpassword" onChange={handleOnChange}  autoComplete={"true"} />
          </div>

          <button type="submit" disabled={handleDisable() ? true : false} className="btn btn-primary">Submit</button>

        </form>

      </div>

    </>
  )

}

export default SignUp