import React, { useContext, useState } from 'react';
import NoteContext from '../../context/notes/NoteContext'


function AddNotes() {

    const context = useContext(NoteContext);

    const [newNote, setNewNote] = useState({ title: "", content: "", tag: "" })

    const { addNote } = context; // destructure context

    const handleOnClick = (e) => {

        e.preventDefault();

        addNote(newNote);

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("tag").value = "";

        setNewNote({ title: "", content: "", tag: "" });
    }

    const handleOnChange = (e) => {

        /* Important Syntax */

        setNewNote({ ...newNote, [e.target.name]: e.target.value })

    }

    const checkLength = () => {

        if (newNote.title.length == 0 || newNote.content.length == 0 || newNote.tag.length == 0) {
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
                        <input type="text" className="form-control" id="title" name="title" onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <input type="text" className="form-control" id="content" name="content" autoComplete='true' onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" name="tag" autoComplete='true' onChange={handleOnChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={checkLength() ? true : false} onClick={handleOnClick}>Submit</button>

                </form>

            </div>

        </>
    )
}

export default AddNotes;