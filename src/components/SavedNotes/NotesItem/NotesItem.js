import React from 'react';
import { Link } from 'react-router-dom'


function NotesItem(props) {

    const {savedNote} = props;

    console.log(savedNote);

    return (

        <>
            <div className="col">

                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">{savedNote.title}</h5>
                        <p className="card-text">{savedNote.content}</p>
                        <p className="card-text">{savedNote.tag}</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>

                </div>

            </div>
        </>

    )
}

export default NotesItem
