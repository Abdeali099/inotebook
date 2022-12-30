import React, { useContext, useState } from 'react';
import NoteContext from '../../context/notes/NoteContext'


function AddNotes() {


    const [newNote, setNewNote] = useState({ title: "", content: "", tag: "" })

    const context = useContext(NoteContext);
    const { addNote } = context; // destructure context

    const handleOnClick = (e) => {

        e.preventDefault();

        addNote(newNote);

        setNewNote({ title: "", content: "", tag: "" });
    }

    const handleOnChange = (e) => {

        /* Important Syntax */

        setNewNote({ ...newNote, [e.target.name]: e.target.value })

    }

    const checkLength = () => {

        if ((newNote.title.length == 0 || newNote.title.length < 5)|| (newNote.content.length == 0 || newNote.content.length < 6) || (newNote.tag.length == 0 || newNote.tag.length < 3)) {
            return true;
        }


        else {
            return false;
        }

    }

    return (
        <>
            <div className="container my-3">
                <h2>Add Notes</h2>
            </div>

            <div className="container my-3">

                <form>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" minLength={5} name="title"  value={newNote.title}  onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <input type="text" className="form-control" id="content" minLength={6} name="content" autoComplete='true' value={newNote.content}  onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" minLength={3} name="tag" autoComplete='true'  value={newNote.tag} onChange={handleOnChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={checkLength() ? true : false} onClick={handleOnClick}>Submit</button>

                </form>

            </div>

        </>
    )
}

export default AddNotes;