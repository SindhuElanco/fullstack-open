import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import DisplayPerson from './components/DisplayPerson';
// import axios from 'axios'
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [searchName, setSearchName] = useState('');

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
      .then(res => setPersons(res));
  }, []);

  console.log('@@', persons);

  const handleSubmit = event => {
    event.preventDefault();
    // const names = persons.map(p => p.name);
    const person = persons.find(p => p.name === newName);
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace the old number with new number?`
        )
      ) {
        const updatePersonInfo = {
          name: newName,
          number: newNum,
        };
        console.log('names', person.id, 'update', updatePersonInfo);
        personService
          .editPerson(person.id, updatePersonInfo)
          .then(updatedPerson => {
            console.log('@@@@@', updatedPerson);
            setPersons(prevPersons =>
              prevPersons.map(p => (p.id === person.id ? updatedPerson : p))
            );
          });
      }
      setNewName('');
      setNewNum('');
      return;
    }
    const newPersonInfo = {
      name: newName,
      number: newNum,
    };
    personService.create(newPersonInfo).then(createdPerson => {
      setPersons(prevPersons => [...prevPersons, createdPerson]);
    });
    // setPersons([...persons,{ name: newName ,number: newNum}])
    setNewName('');
    setNewNum('');
  };

  const filterPersons = persons.filter(
    p => p.name && p.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleDelete = id => {
    console.log(`person with ${id} will be deleted`);
    if (window.confirm('Are you sure?')) {
      personService.deletePerson(id).then(delPerson => {
        console.log('@@', delPerson);
        setPersons(prevPersons => [...prevPersons]);
      });
    }
    window.location.reload();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h5>
          Filter shown with &nbsp;
          {/* <input value={searchName} onChange={(e) => setSearchName(e.target.value)}/> */}
          <Filter
            search={searchName}
            handleSearch={e => setSearchName(e.target.value)}
          />
        </h5>
      </div>
      <br />

      <PersonForm
        onSubmit={handleSubmit}
        name={newName}
        setName={e => setNewName(e.target.value)}
        num={newNum}
        setNum={e => setNewNum(e.target.value)}
      />

      <h2>Numbers</h2>

      {/* {filterPersons.map((p) => <p key={[p.name, p.number]}>{p.name}  {p.number} </p>)} */}
      <DisplayPerson persons={filterPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
