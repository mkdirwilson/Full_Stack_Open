import { useState } from "react";

const App = ()=> {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  
  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')


  const handleFilterChange = (event)=> {
    setFilter(event.target.value)
  }

  const handlePersonChange = (event)=>{
    setNewName(event.target.value)
  }


  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  

  const addPerson = (event)=>{
    event.preventDefault()

    if (persons.some((person)=>person.name === newName))
    {
      alert(`${newName} is already added`)
    }

    else {
      const newPerson = {name: newName, number: newNumber}
      setPersons(persons.concat(newPerson))
    }
    
    setNewName('')
    setNewNumber('')
  
  }


  const numbersToShow = newFilter.length > 0 ? persons.filter((person)=>person.name.toLowerCase().startsWith(newFilter.toLowerCase())) : persons


  return (
    <>
      <h2>Phonebook</h2>
      <p>
        filter shown with: <input onChange={handleFilterChange} value={newFilter}></input>
      </p>

      <h3>Add a new contact</h3>

      <form onSubmit={addPerson}>
          <p>
             name: <input onChange={handlePersonChange} value={newName}  placeholder="Enter name..." ></input>
          </p>

          <p>
            number: <input onChange={handleNumberChange} value={newNumber} placeholder="Enter number..." ></input>
          </p>

          <p>
            <button type="submit">add</button>
          </p>
      </form>

      <h2>Numbers</h2>
      {numbersToShow.map(person=>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </>
  )
}

export default App;
