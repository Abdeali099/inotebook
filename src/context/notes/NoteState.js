import React from 'react'
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const state = {
        Name: "Abdeali",
        Class: "CSE"
    }

    /* console.log("Props Children : ");
    console.log(props);
    console.log(props.children); */

    return (

        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;