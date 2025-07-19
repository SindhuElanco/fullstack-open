import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPerson from './components/DisplayPerson'
// import axios from 'axios'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    // axios
    // .get('http://localhost:3001/persons')
    // .then((res) => {
    //   console.log('promise fulfilled', res.data)
    //   setPersons(res.data)
    // })
  personService
  .getAll()
  // .then((res) => console.log(res))
  .then((res) => setPersons(res))

  },[])
  const handleSubmit = (event) => {
   
    event.preventDefault()
    const names = persons.map((p) => p.name)
   
    if(names.includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    const newPersonInfo = {
      person: newName,
      num: newNum
    }
    personService.create(newPersonInfo)
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