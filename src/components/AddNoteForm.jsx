import {useState} from 'react'
import * as NotesService from '../utilities/notes-service'

function AddNoteForm({ user }) {
    const [note, setNote] = useState({
        text: '',
        user: ''
    })

    function handleChange(event) {
        setNote({...note, [event.target.name]: event.target.value})
    };

    function handleSubmit(event) {
        event.preventDefault()
        const formData = { 
            text: note.text,
            user: user._id
            }; 
        NotesService.addNote(formData)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label>Enter Note</label>
            <input type="text" name='text' onChange={handleChange} required/>
            <button type='submit'>Add Note</button>
            </form>
        </div>
    )
}

export default AddNoteForm