import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    const names = persons.map((p) => p.name)
   
    if(names.includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    setPersons([...persons,{ name: newName ,number: newNum}])
    setNewName('')
    setNewNum('')
  }
  
  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNum} onChange={(e) => setNewNum(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => <p key={[p.name, p.number]}>{p.name}  {p.number}</p>)}
      
    </div>
  )
}

export default App