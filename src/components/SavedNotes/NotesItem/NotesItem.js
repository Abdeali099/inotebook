import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import NoteContext from '../../../context/notes/NoteContext'
import "./NotesItem.css";


function NotesItem(props) {

    const context = useContext(NoteContext);

    const {deleteNote,editNote} = context;

    const {savedNote} = props;

    // console.log(savedNote);

    return (

        <>
            <div className="col">

                <div className="card">

                    <div className="card-body">
                        
                        <div className="div_title">
                    
                        <h5 className="card-title">{savedNote.title}</h5>
                        
                        <i className="fa fa-light fa-pen-to-square mx-2"></i>
                        <i className="fa fa-regular fa-trash mx-2" onClick={()=>{deleteNote(savedNote._id)}}></i>

                        </div>

                        <p className="card-text">{savedNote.content}</p>
                        <p className="card-text">{savedNote.tag}</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>

                </div>

            </div>
        </>

    )
}

export default NotesItem;
