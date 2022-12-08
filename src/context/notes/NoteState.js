import React ,{ useState }from 'react'
import NoteContext from "./NoteContext";


const NoteState = (props) => {

    const fetchedNotes = [
        
        {
            "_id": "63885557f4a9c272a5a763d8",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "63885557f4a9c272a5a763d8",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "63885557f4a9c272a5a763d8",
            "user": "638722221121dc325c4a5a7f",
            "title": "First Notes",
            "content": "I am very Happy today",
            "tag": "happy",
            "date": "2022-12-01T07:18:47.832Z",
            "__v": 0
        },
        {
            "_id": "638ee24514fbcd4a5f7bb695",
            "user": "638722221121dc325c4a5a7f",
            "title": "Second Notes",
            "content": "I am very Happy right Now",
            "tag": "test",
            "date": "2022-12-06T06:33:41.146Z",
            "__v": 0
        }
    ];

    const [savedNotes, setSavedNotes] = useState(fetchedNotes);

    return (

        <NoteContext.Provider value={{savedNotes,setSavedNotes}}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;