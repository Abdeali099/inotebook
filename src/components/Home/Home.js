import React from 'react'
import Alert from '../Alert/Alert'
import Notes from '../SavedNotes/Notes/Notes'

function Home() {

  return (

    <>

      <div className="container my-3">
        <h2>Add Notes</h2>
      </div>

      <div className="container my-3">

        <form>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" autoComplete='true' />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

      </div>

      <div className="container my-3">

        <h2>Your Notes</h2>

            <Notes/>

      </div>

    </>

  )
}

export default Home
