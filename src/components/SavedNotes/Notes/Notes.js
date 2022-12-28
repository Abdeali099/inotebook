import React, { useContext, useEffect ,useRef,useState} from 'react';
import NoteContext from '../../../context/notes/NoteContext'
import AddNotes from '../../AddNotes/AddNotes';
import NotesItem from '../NotesItem/NotesItem'

function Notes() {

    const context = useContext(NoteContext);

    const { savedNotes, fetchNote ,editNotes} = context; // destructure context

    useEffect(() => {

        fetchNote();

        // eslint-disable-next-line

    }, []);

    /* This Method is used for upation of Note.
    How ? :- whenever cliked on edit icon in NotesItem it wall call.

    */

    const [updateNote, setUpdateNote] = useState({ _id: "", editTitle: "", editContent: "", editTag: "" })

    const ref = useRef(null);

    const updateNoteOnCLick = (currentNote) => {
        ref.current.click();
        setUpdateNote({ _id:currentNote._id ,editTitle: currentNote.title, editContent: currentNote.content, editTag: currentNote.tag });
    }

    const handleOnClick = () => {

        editNotes(updateNote._id,updateNote.editTitle,updateNote.editContent,updateNote.editTag);

        document.getElementById("editTitle").value = "";
        document.getElementById("editContent").value = "";
        document.getElementById("editTag").value = "";

        setUpdateNote({_id:"", editTitle: "", editContent: "", editTag: "" });

        ref.current.click();

    }

    const handleOnChange = (e) => {

        /* Important Syntax */

        setUpdateNote({ ...updateNote, [e.target.name]: e.target.value })

    }

    return (
        <>
            <AddNotes />

            <div className="container my-3">

                <h2>Your Notes</h2>

                <div className="album py-5 bg-light">

                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">

                            {savedNotes.map((savedNote => {

                                return <NotesItem savedNote={savedNote} updateNoteOnCLick={updateNoteOnCLick} key={savedNote._id} />

                            }))}


                        </div>

                    </div>

                </div>

            </div>

            {/* Modal For Updation Of Note */}

            {/* <!-- Button trigger modal --> */}

            <button type="button" className="btn btn-primary d-none"  ref={ref}   data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <form>

                                <div className="mb-3">
                                    <label htmlFor="editTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="editTitle" name="editTitle"  value={updateNote.editTitle}  onChange={handleOnChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="editContent" className="form-label">Content</label>
                                    <input type="text" className="form-control" id="editContent" name="editContent" autoComplete='true' value={updateNote.editContent}  onChange={handleOnChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="editTag" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="editTag" name="editTag" autoComplete='true'  value={updateNote.editTag} onChange={handleOnChange} />
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Update Note</button>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Notes