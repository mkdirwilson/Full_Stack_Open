import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect, useState } from "react";
import axios from "axios";

const App = ()=> {

  // React hook states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  // useEffect
  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response=>
        setPersons(response.data)
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
        id: persons.length + 1
      }

      setPersons(persons.concat(newPerson))
    }
    
    setNewName('')
    setNewNumber('')
  
  }


  const numbersToShow = newFilter.length > 0 ? persons.filter((person)=>person.name.toLowerCase().startsWith(newFilter.toLowerCase())) : persons


  return (
    <>
      <h2>Phonebook</h2>
      <Filter filterHandler={handleFilterChange} newFilter={newFilter}/>

      <h3>Add a new contact</h3>

      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow}/>
    </>
  )
}

export default App;
