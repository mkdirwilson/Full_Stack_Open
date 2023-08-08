import { useState } from "react";

const App = ()=> {

  const [persons, setPersons] = useState([{name: 'Arto Hellas'}])

  const [newName, setNewName] = useState('')

  const handlePersonChange = (event)=>{
    setNewName(event.target.value)
  }

  const addPerson = (event)=>{
    event.preventDefault()
    const newPerson = {name: newName}

    setPersons(persons.concat(newPerson))
    setNewName('')
  }


  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          <p>
             name: <input onChange={handlePersonChange} value={newName}  placeholder="Enter name..."></input>
          </p>

          <p>
            <button type="submit">add</button>
          </p>
      </form>

      <h2>Numbers</h2>
      {persons.map(person=>
        <p key={person.name}>{person.name}</p>
      )}
    </>
  )
}

export default App;
