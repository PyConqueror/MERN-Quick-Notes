import {useState} from 'react'
import * as NotesService from '../utilities/notes-service'
import NoteCard from '../components/NoteCard'

function MainPage({user}) {
    const [notes, setNotes] = useState(null)

    async function getNotes(){
        const notes = await NotesService.getNotes()
        setNotes(notes)
    }
    console.log(notes)

    return (
        <>
          {notes ? 
          <> 
            {notes.map((note ,index) => (
             <NoteCard key={index} note={note}/>
             ))}
          </>  
          :
          <>
          <p>No Notes yet</p>
          <button onClick={getNotes}>Get Notes</button>
          </>
        }
        </>
      ) }

export default MainPage