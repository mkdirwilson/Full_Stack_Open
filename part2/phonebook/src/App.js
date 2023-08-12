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

  

  const addPerson = (event) => {
    event.preventDefault();
  
    const personToUpdate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
  
    if (personToUpdate) {
      const confirmed = window.confirm(
        `${personToUpdate.name} is already added to the phonebook, replace the old number with a new number?`
      );
  
      if (confirmed) {
        const updatedPerson = { ...personToUpdate, number: newNumber };
  
        personServices
          .update(updatedPerson, updatedPerson.id)
          .then(returnedPerson => {
            setPersons(persons.map(person=> person.id !== updatedPerson.id ? person : returnedPerson))
          })
          .catch(error => {
            console.error("Error updating person:", error);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
  
      personServices
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
        })
        .catch(error => {
          console.error("Error creating person:", error);
        });
    }
  
    // Reset the state here, outside of the if-else block
    setNewName('');
    setNewNumber('');
  };


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
