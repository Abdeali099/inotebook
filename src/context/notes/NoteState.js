import React, { useState } from 'react'
import NoteContext from "./NoteContext";


const NoteState = (props) => {

    const host = `http://localhost:5000`;

    let fetchedNotes = [];

    const [savedNotes, setSavedNotes] = useState(fetchedNotes);

    /* <---- fetching all notes Notes ----> */

    const fetchNote = async () => {

        /* Call fetch API */ // (problem : render twice by useEffect)

        const response = await fetch(`${host}/api/notes/fetchNotes`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MjIyMjExMjFkYzMyNWM0YTVhN2YiLCJpYXQiOjE2Njk4NzQ1MzJ9.rlWbXPyp_rApfQ1f2IuQCM-HV3ohaMFTpKzIPBaE8pM',
            }
        });

        fetchedNotes = await response.json();

        setSavedNotes(fetchedNotes);

        console.log(fetchedNotes);

    }

    /* <-- add Notes --> */

    const addNote = async (newNoteData) => {

        console.log(newNoteData);

        /* Call Add API */
        const response = await fetch(`${host}/api/notes/addNotes`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MjIyMjExMjFkYzMyNWM0YTVhN2YiLCJpYXQiOjE2Njk4NzQ1MzJ9.rlWbXPyp_rApfQ1f2IuQCM-HV3ohaMFTpKzIPBaE8pM',
            },
            body: JSON.stringify(newNoteData)

        });

        const newNote = await response.json();

        setSavedNotes(savedNotes.concat(newNote));

    }

    /* <--- delete Notes ---> */
    const deleteNote = async (id) => {

        /* deleting from database-Making API call */

        const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MjIyMjExMjFkYzMyNWM0YTVhN2YiLCJpYXQiOjE2Njk4NzQ1MzJ9.rlWbXPyp_rApfQ1f2IuQCM-HV3ohaMFTpKzIPBaE8pM',
            }
        });

        fetchedNotes = await response.json();

        console.log(fetchedNotes);

        /* deleting from client side */
        const newNotes = savedNotes.filter((note) => { return note._id !== id })

        setSavedNotes(newNotes);
    }

    /* <--- edit  Notes --->*/
    const editNotes = async (id, title, content, tag) => {

        /* Make API calls */

        const updatedElement = {
            title,
            content,
            tag
        };

        const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {

            method: 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MjIyMjExMjFkYzMyNWM0YTVhN2YiLCJpYXQiOjE2Njk4NzQ1MzJ9.rlWbXPyp_rApfQ1f2IuQCM-HV3ohaMFTpKzIPBaE8pM',
            },
            body: JSON.stringify(updatedElement)

        });

        const jsonResponse = response.json();

        console.log(jsonResponse);

        /* Logic in edit on client side */
        savedNotes.forEach(notes => {
            if (notes._id == id) {
                notes.title = title;
                notes.content = content;
                notes.tag = tag;
            }
        });

    }

    return (

        <NoteContext.Provider value={{ savedNotes, addNote, deleteNote, editNotes, fetchNote }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;