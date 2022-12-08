import React, { useContext } from 'react';
import NoteContext from '../../../context/notes/NoteContext'
import NotesItem from '../NotesItem/NotesItem'

function Notes() {

    const context = useContext(NoteContext);

    const { savedNotes, setSavedNotes } = context;

    return (
        <div className="album py-5 bg-light">

            <div className="container">

                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">

                    {savedNotes.map((savedNote => {

                        return <NotesItem savedNote={savedNote} key={savedNote.id}/>

                    }))}


                </div>

            </div>

        </div>

    )

}

export default Notes