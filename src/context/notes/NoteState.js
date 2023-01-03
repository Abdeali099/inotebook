import React, { useState ,useContext} from 'react'
import AlertContext from '../Alert/AlertContext';
import NoteContext from "./NoteContext";


const NoteState = (props) => {

    const host = `http://localhost:5000`;

    const [savedNotes, setSavedNotes] = useState([]);

    /* <--  For showing Alert msgs --> */

    const context = useContext(AlertContext);

    // console.log(context);

    const {setAlertMsg} = context;


    /* <---- fetching all notes Notes ----> */

    const fetchNote = async () => {

        /* Call fetch API */ // (problem : render twice by useEffect)

        const response = await fetch(`${host}/api/notes/fetchNotes`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('token')
            }
        });

        const fetchedNotes = await response.json();

        console.log("response : ",fetchedNotes);

        console.log("response : ",fetchedNotes.allNotes);

        setSavedNotes(fetchedNotes.allNotes);

        console.log(savedNotes);

        // console.log(fetchedNotes);

    }

    /* <-- add Notes --> */

    const addNote = async (newNoteData) => {

        // console.log(newNoteData);

        /* Call Add API */
        const response = await fetch(`${host}/api/notes/addNotes`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('token')
            },
            body: JSON.stringify(newNoteData)

        });

        const newNote = await response.json();

        console.log("Response of addition : ",newNote.savedNotes);

        setSavedNotes(savedNotes.concat(newNote.savedNotes));

        setAlertMsg("Note Added Successfully!!", "success");


    }

    /* <--- delete Notes ---> */
    const deleteNote = async (id) => {

        const res=window.confirm("Are you sure? It will delete Permanantly");

        if(res==false){
            return;
        }

        /* deleting from database-Making API call */

        const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('token')
            }
        });

        const fetchedNotes = await response.json();

        console.log("Response of deletion : ", fetchedNotes);

        /* deleting from client side */
        const newNotes = savedNotes.filter((note) => { return note._id !== id })

        setSavedNotes(newNotes);

        setAlertMsg("Note Deleted Successfully!!", "success");
    }

    /* <--- edit  Notes --->*/
    const editNotes = async (id, title, content, tag) => {

        /* Make API calls */

        const updatedElement = {
            title,
            content,
            tag
        };

        console.log("Updated elemrnts : ",updatedElement);

        const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {

            method: 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('token')
            },
            body: JSON.stringify(updatedElement)

        });

        const jsonResponse = await response.json();

        console.log("Response of Updation : ",jsonResponse);

        /* Logic in edit on client side */

        // Here we will make a newNote for Updation (we use this because simple was not working)//


        // idea  : here i can use find() also
        let newNotes=JSON.parse(JSON.stringify(savedNotes));

        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];

            if(element._id===id)
            {
                element.title=title
                element.content=content
                element.tag=tag
                break;
            }
            
        }
        console.log(newNotes);

        setSavedNotes(newNotes);

        setAlertMsg("Note Updated Successfully!!", "success");


    }

    return (

        <NoteContext.Provider value={{ savedNotes, addNote, deleteNote, editNotes, fetchNote }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;