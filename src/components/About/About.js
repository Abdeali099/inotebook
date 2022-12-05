import React,{useContext} from 'react';
import NoteContext from '../../context/notes/NoteContext';
 
function About() {

  const user = useContext(NoteContext);

  return (

    <div>
      
      <h1>This is about</h1>

      <h4>User name is  : {user.Name}</h4>


    </div>
  )
}

export default About
