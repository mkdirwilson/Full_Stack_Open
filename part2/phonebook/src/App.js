import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect, useState } from "react";
import personServices from "./services/persons"

const App = ()=> {

  // React hook states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  // useEffect
  useEffect(()=>{
    personServices
    .getAll()
    .then(initialPerson=>
        setPersons(initialPerson)
      )
  }, [])


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

      const newPerson = {name: newName, 
        number: newNumber,
      }

      personServices
      .create(newPerson)
      .then(returnedPerson=>
          setPersons(persons.concat(returnedPerson))
        )
    }
    
    setNewName('')
    setNewNumber('')
  
  }

  const handleDeletePerson = (id) => {

    const person = persons.find(person=>person.id === id)

    const confirmDelete = window.confirm(`Delete ${person.name}`)

    if (confirmDelete){

      personServices
      .remove(id)
      .then(()=>
        setPersons(persons.filter(person=>person.id !== id))
      )
      .catch(error=>
      console.log(error)
      )
    }
  }


  const numbersToShow = newFilter.length > 0 ? persons.filter((person)=>person.name.toLowerCase().startsWith(newFilter.toLowerCase())) : persons


  return (
    <>
      <h2>Phonebook</h2>
      <Filter filterHandler={handleFilterChange} newFilter={newFilter}/>

      <h3>Add a new contact</h3>

      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} handleDeletePerson={handleDeletePerson}/>
    </>
  )
}

export default App;
