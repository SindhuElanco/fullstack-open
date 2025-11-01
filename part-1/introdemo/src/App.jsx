import Note from './components/Note'
import { useState, useEffect } from 'react'
import notesService from './services/notes'

const App = () => {
  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    notesService
    .getAll()
    .then((res) => {
      console.log('Resolved successfull', res)
      setNotes(res)
    })
  },[])

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: String(notes.length + 1),
    }
  notesService
    .create(noteObject)
    .then(response => {
      console.log(response)
      console.log('##', noteObject.important)
      setNotes(notes.concat(response.data))
    })
    // setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
   const toggleImportanceOf = id => {
  
  const note = notes.find(n => n.id === id) //find the particular note - find gets the note whose id is passed in the function
  const changedNote = { ...note, important: !note.important } //this object updates the value of the importance of the note

  notesService.update(id,changedNote)
  .then(response => {
    setNotes(notes.map(note => note.id === id ? response.data : note)) //axios takes url and the updated note object
  })
  .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server, ${error}`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
}
   return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App
