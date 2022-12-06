import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext'
import { Link} from 'react-router-dom'


function Home() {

  const context = useContext(NoteContext);

  const { savedNotes, setSavedNotes } = context;

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

        <div className="container my-3 d-flex justify-between">

          {savedNotes.map((Element => {

            return <div className="card" style={{width: "18rem",margin:"1rem"}}>
              <div className="card-body">
                <h5 className="card-title">{Element.title}</h5>
                <p className="card-text">{Element.content}</p>
                <p className="card-text">{Element.tag}</p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>

          }))}


        </div>

      </div>

    </>

  )
}

export default Home
