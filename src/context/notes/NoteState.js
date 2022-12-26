import React ,{ useState }from 'react'
import NoteContext from "./NoteContext";


const NoteState = (props) => {

    const fetchedNotes = [
        
        {
            "_id": "63885557f4a9c272a5a763d81",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "63885557f4a9c272a5a763d82",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "63885557f4a9c272a5a763d83",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "638ee24514fbcd4a5f7bb6954",
            "user": "638722221121dc325c4a5a7f",
            "title": "Second Notes",
            "content": "I am very Happy right Now",
            "tag": "test",
            "date": "2022-12-06T06:33:41.146Z",
            "__v": 0
        }
    ];

    const [savedNotes, setSavedNotes] = useState(fetchedNotes);

    /* add Notes */
    const addNote=(newNoteData)=>{
        // here other information will come from API but for now using static data //

        console.log("Adding a new Note");

        const {title,content,tag}=newNoteData;


        const newNote={
            "_id": "638ee24514fbcd4a5f7bb6955",
            "user": "638722221121dc325c4a5a7f",
            "title": title,
            "content": content,
            "tag": tag,
            "date": "2022-12-06T06:33:41.146Z",
            "__v": 0
        }

        setSavedNotes(savedNotes.concat(newNote));

        // -> in client side note is not added afer referesh because it is a static data store in fetchedNotes.

    }

    /* delete Notes */
    const deleteNote=(id)=>{

        // console.log("deleting note of Id : ",id);

        const newNotes=savedNotes.filter((note)=>{return note._id!==id})

        setSavedNotes(newNotes);
    }

    /* edit  Notes */
    const editNotes=(id,title,content,tag)=>{

        savedNotes.forEach(notes => {
            if(notes._id==id)
            {
                notes.title=title;
                notes.content=content;
                notes.tag=tag;
            }
        });
        
    }

    return (

        <NoteContext.Provider value={{savedNotes,addNote,deleteNote,editNotes}}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;