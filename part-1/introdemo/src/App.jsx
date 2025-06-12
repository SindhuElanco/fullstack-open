import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPerson from './components/DisplayPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchName, setSearchName] = useState('')


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
  
  const filterPersons = persons.filter((p) => p.name.toLowerCase().includes(searchName.toLowerCase()))


  return (
    <div>
      
      <h2>Phonebook</h2>
        <div>
          <h5>
            Filter shown with &nbsp;
            {/* <input value={searchName} onChange={(e) => setSearchName(e.target.value)}/> */}
            <Filter search={searchName} handleSearch={(e) => setSearchName(e.target.value)}/>
          </h5>
          
        </div>
        <br/>
      
      <PersonForm 
      onSubmit={handleSubmit} 
      name={newName} 
      setName={(e) => setNewName(e.target.value)} 
      num={newNum} 
      setNum={(e) => setNewNum(e.target.value)}
      />

      <h2>Numbers</h2>
     
      {/* {filterPersons.map((p) => <p key={[p.name, p.number]}>{p.name}  {p.number} </p>)} */}
      <DisplayPerson persons={filterPersons}/>
    </div>
  )
}

export default App